"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * ArchitecturalScene — Premium animated network topology visualization.
 * A canvas-based component showing a live multi-layered connectivity diagram.
 */

const NODES = [
    { id: "core", x: 50, y: 50, label: "Core Network", type: "primary", size: 18 },
    { id: "edge1", x: 20, y: 20, label: "Edge Node A", type: "secondary", size: 12 },
    { id: "edge2", x: 80, y: 20, label: "Edge Node B", type: "secondary", size: 12 },
    { id: "edge3", x: 20, y: 80, label: "Edge Node C", type: "secondary", size: 12 },
    { id: "edge4", x: 80, y: 80, label: "Edge Node D", type: "secondary", size: 12 },
    { id: "leaf1", x: 5, y: 50, label: "Endpoint", type: "leaf", size: 8 },
    { id: "leaf2", x: 50, y: 5, label: "Endpoint", type: "leaf", size: 8 },
    { id: "leaf3", x: 95, y: 50, label: "Endpoint", type: "leaf", size: 8 },
    { id: "leaf4", x: 50, y: 95, label: "Endpoint", type: "leaf", size: 8 },
];

const CONNECTIONS = [
    { from: "core", to: "edge1" },
    { from: "core", to: "edge2" },
    { from: "core", to: "edge3" },
    { from: "core", to: "edge4" },
    { from: "edge1", to: "leaf1" },
    { from: "edge1", to: "leaf2" },
    { from: "edge2", to: "leaf2" },
    { from: "edge2", to: "leaf3" },
    { from: "edge3", to: "leaf1" },
    { from: "edge3", to: "leaf4" },
    { from: "edge4", to: "leaf3" },
    { from: "edge4", to: "leaf4" },
];

const METRICS = [
    { label: "Uptime", value: "99.99%", color: "#27c93f" },
    { label: "Latency", value: "< 5ms", color: "#d4a331" },
    { label: "Throughput", value: "40Gbps", color: "#d4a331" },
    { label: "Redundancy", value: "N+2", color: "#27c93f" },
];

function getNode(id: string) {
    return NODES.find(n => n.id === id)!;
}

export function ArchitecturalScene() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener("resize", resize);

        const draw = (time: number) => {
            const dt = (time - timeRef.current) / 1000;
            timeRef.current = time;
            const W = canvas.offsetWidth;
            const H = canvas.offsetHeight;

            ctx.clearRect(0, 0, W, H);

            const toX = (pct: number) => (pct / 100) * W;
            const toY = (pct: number) => (pct / 100) * H;

            // Draw connections
            CONNECTIONS.forEach(({ from, to }, i) => {
                const a = getNode(from);
                const b = getNode(to);
                const ax = toX(a.x), ay = toY(a.y);
                const bx = toX(b.x), by = toY(b.y);

                // Static line
                ctx.beginPath();
                ctx.moveTo(ax, ay);
                ctx.lineTo(bx, by);
                ctx.strokeStyle = "rgba(212,163,49,0.12)";
                ctx.lineWidth = 1;
                ctx.stroke();

                // Animated data packet
                const speed = 0.4 + (i % 3) * 0.15;
                const t = ((time / 1000 * speed) + i * 0.3) % 1;
                const px = ax + (bx - ax) * t;
                const py = ay + (by - ay) * t;

                ctx.beginPath();
                ctx.arc(px, py, 2, 0, Math.PI * 2);
                ctx.fillStyle = "#d4a331";
                ctx.fill();

                // Glow
                const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
                grd.addColorStop(0, "rgba(212,163,49,0.5)");
                grd.addColorStop(1, "rgba(212,163,49,0)");
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();
            });

            // Draw nodes
            NODES.forEach(node => {
                const x = toX(node.x);
                const y = toY(node.y);
                const r = node.size;
                const pulse = 1 + Math.sin(time / 1000 * 1.5 + node.x) * 0.08;

                // Outer glow ring
                const grd = ctx.createRadialGradient(x, y, 0, x, y, r * 2.5 * pulse);
                grd.addColorStop(0, node.type === "primary" ? "rgba(212,163,49,0.3)" : "rgba(212,163,49,0.1)");
                grd.addColorStop(1, "rgba(212,163,49,0)");
                ctx.beginPath();
                ctx.arc(x, y, r * 2.5 * pulse, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Node body
                ctx.beginPath();
                ctx.arc(x, y, r * pulse, 0, Math.PI * 2);
                ctx.fillStyle = node.type === "primary"
                    ? "rgba(212,163,49,0.9)"
                    : node.type === "secondary"
                        ? "rgba(212,163,49,0.5)"
                        : "rgba(212,163,49,0.25)";
                ctx.fill();
                ctx.strokeStyle = "rgba(212,163,49,0.6)";
                ctx.lineWidth = 1;
                ctx.stroke();

                // Inner dot for primary
                if (node.type === "primary") {
                    ctx.beginPath();
                    ctx.arc(x, y, r * 0.4, 0, Math.PI * 2);
                    ctx.fillStyle = "#fff";
                    ctx.fill();
                }
            });

            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);
        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl" style={{ aspectRatio: "4/3" }}>
            {/* Header bar */}
            <div className="absolute top-0 inset-x-0 h-9 bg-white/[0.03] border-b border-white/5 flex items-center justify-between px-4 z-10">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[9px] font-mono text-white/25 tracking-widest uppercase">network_topology.live</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f] animate-pulse" />
                    <span className="text-[9px] font-mono text-[#27c93f]/60 tracking-widest uppercase">Live</span>
                </div>
            </div>

            {/* Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ top: "36px", height: "calc(100% - 36px - 48px)" }}
            />

            {/* Metrics bar */}
            <div className="absolute bottom-0 inset-x-0 h-12 bg-white/[0.03] border-t border-white/5 flex items-center justify-around px-4 z-10">
                {METRICS.map((m) => (
                    <div key={m.label} className="text-center">
                        <div className="text-[10px] font-mono tracking-widest" style={{ color: m.color }}>{m.value}</div>
                        <div className="text-[8px] font-mono text-white/25 tracking-widest uppercase">{m.label}</div>
                    </div>
                ))}
            </div>

            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,163,49,0.04),transparent_70%)] pointer-events-none" />
        </div>
    );
}
