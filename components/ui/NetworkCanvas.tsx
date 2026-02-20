"use client";

import React, { useEffect, useRef } from "react";

export function NetworkCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let raf: number;
        let mouse = { x: -9999, y: -9999 };
        const dpr = Math.min(window.devicePixelRatio, 2);
        let w = 0, h = 0;

        interface Node { x: number; y: number; vx: number; vy: number; r: number; pulse: number; speed: number; }
        const nodes: Node[] = [];

        const resize = () => {
            w = canvas.offsetWidth;
            h = canvas.offsetHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const init = () => {
            resize();
            nodes.length = 0;
            const count = Math.min(80, Math.floor((w * h) / 8000));
            for (let i = 0; i < count; i++) {
                nodes.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    r: Math.random() * 2 + 0.8,
                    pulse: Math.random() * Math.PI * 2,
                    speed: 0.008 + Math.random() * 0.015,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            // Connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 160) {
                        const alpha = (1 - dist / 160) * 0.1;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(196, 150, 44, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            // Nodes
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                n.pulse += n.speed;
                if (n.x < 0 || n.x > w) n.vx *= -1;
                if (n.y < 0 || n.y > h) n.vy *= -1;

                // Mouse/touch attraction
                const mdx = mouse.x - n.x;
                const mdy = mouse.y - n.y;
                const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                if (mdist < 200 && mdist > 0) {
                    const force = (1 - mdist / 200) * 0.015;
                    n.vx += (mdx / mdist) * force;
                    n.vy += (mdy / mdist) * force;
                }

                // Speed limit
                const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
                if (speed > 1.2) { n.vx *= 0.95; n.vy *= 0.95; }

                const a = 0.2 + Math.sin(n.pulse) * 0.1;

                // Glow
                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
                g.addColorStop(0, `rgba(196, 150, 44, ${a * 0.35})`);
                g.addColorStop(1, "rgba(196, 150, 44, 0)");
                ctx.fillStyle = g;
                ctx.fillRect(n.x - n.r * 6, n.y - n.r * 6, n.r * 12, n.r * 12);

                // Dot
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(196, 150, 44, ${a})`;
                ctx.fill();
            }

            raf = requestAnimationFrame(draw);
        };

        const onMouse = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };

        const onTouch = (e: TouchEvent) => {
            const t = e.touches[0];
            if (t) {
                const rect = canvas.getBoundingClientRect();
                mouse = { x: t.clientX - rect.left, y: t.clientY - rect.top };
            }
        };

        const onLeave = () => { mouse = { x: -9999, y: -9999 }; };

        init();
        draw();
        canvas.addEventListener("mousemove", onMouse, { passive: true });
        canvas.addEventListener("touchstart", onTouch, { passive: true });
        canvas.addEventListener("touchmove", onTouch, { passive: true });
        canvas.addEventListener("mouseleave", onLeave);
        canvas.addEventListener("touchend", onLeave);
        canvas.addEventListener("touchcancel", onLeave);
        window.addEventListener("resize", init);

        return () => {
            cancelAnimationFrame(raf);
            canvas.removeEventListener("mousemove", onMouse);
            canvas.removeEventListener("touchstart", onTouch);
            canvas.removeEventListener("touchmove", onTouch);
            canvas.removeEventListener("mouseleave", onLeave);
            canvas.removeEventListener("touchend", onLeave);
            canvas.removeEventListener("touchcancel", onLeave);
            window.removeEventListener("resize", init);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ touchAction: "pan-y", opacity: 0.8 }}
        />
    );
}
