"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    alpha: number;
    vx: number;
    vy: number;
    life: number;
}

export function CustomCursor() {
    const dot = useRef<HTMLDivElement>(null);
    const ring = useRef<HTMLDivElement>(null);
    const glow = useRef<HTMLDivElement>(null);
    const canvas = useRef<HTMLCanvasElement>(null);

    const pos = useRef({ x: -100, y: -100 });
    const target = useRef({ x: -100, y: -100 });
    const particles = useRef<Particle[]>([]);
    const isHovering = useRef(false);
    const lastEmit = useRef(0);

    const emitParticle = useCallback(() => {
        const now = Date.now();
        if (now - lastEmit.current < 30) return; // throttle
        lastEmit.current = now;

        const { x, y } = target.current;
        particles.current.push({
            x, y,
            size: Math.random() * 2.5 + 1,
            alpha: 0.7 + Math.random() * 0.3,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8 - 0.3,
            life: 1,
        });

        // cap particles
        if (particles.current.length > 40) {
            particles.current = particles.current.slice(-30);
        }
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
        if (!mq.matches) return;

        const cvs = canvas.current;
        if (!cvs) return;
        const ctx = cvs.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            cvs.width = window.innerWidth;
            cvs.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize, { passive: true });

        const onMove = (e: MouseEvent) => {
            target.current = { x: e.clientX, y: e.clientY };
            emitParticle();
        };

        const onEnter = () => {
            isHovering.current = true;
            if (ring.current) {
                ring.current.style.transform = "translate(-50%,-50%) scale(1.8)";
                ring.current.style.borderColor = "rgba(212,163,49,0.5)";
            }
            if (dot.current) {
                dot.current.style.transform = "translate(-50%,-50%) scale(0.6)";
                dot.current.style.boxShadow = "0 0 12px rgba(212,163,49,0.6)";
            }
            if (glow.current) glow.current.style.opacity = "1";
        };

        const onLeave = () => {
            isHovering.current = false;
            if (ring.current) {
                ring.current.style.transform = "translate(-50%,-50%) scale(1)";
                ring.current.style.borderColor = "rgba(212,163,49,0.25)";
            }
            if (dot.current) {
                dot.current.style.transform = "translate(-50%,-50%) scale(1)";
                dot.current.style.boxShadow = "0 0 6px rgba(212,163,49,0.3)";
            }
            if (glow.current) glow.current.style.opacity = "0.5";
        };

        let raf: number;
        const tick = () => {
            // Smooth follow
            pos.current.x += (target.current.x - pos.current.x) * 0.12;
            pos.current.y += (target.current.y - pos.current.y) * 0.12;

            if (dot.current) {
                dot.current.style.left = `${target.current.x}px`;
                dot.current.style.top = `${target.current.y}px`;
            }
            if (ring.current) {
                ring.current.style.left = `${pos.current.x}px`;
                ring.current.style.top = `${pos.current.y}px`;
            }
            if (glow.current) {
                glow.current.style.left = `${pos.current.x}px`;
                glow.current.style.top = `${pos.current.y}px`;
            }

            // Draw particles
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            for (let i = particles.current.length - 1; i >= 0; i--) {
                const p = particles.current[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.018;
                p.alpha = p.life * 0.6;

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    continue;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 163, 49, ${p.alpha})`;
                ctx.fill();

                // glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * p.life * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 163, 49, ${p.alpha * 0.15})`;
                ctx.fill();
            }

            raf = requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        raf = requestAnimationFrame(tick);

        const attach = () => {
            document.querySelectorAll("a, button, [role='button'], input, textarea, select, label").forEach(el => {
                el.addEventListener("mouseenter", onEnter);
                el.addEventListener("mouseleave", onLeave);
            });
        };
        attach();
        const obs = new MutationObserver(attach);
        obs.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(raf);
            obs.disconnect();
        };
    }, [emitParticle]);

    return (
        <>
            {/* Particle trail canvas */}
            <canvas
                ref={canvas}
                className="fixed inset-0 z-[9996] pointer-events-none hidden md:block"
                style={{ width: "100vw", height: "100vh" }}
            />

            {/* Glow halo */}
            <div ref={glow} className="fixed z-[9997] pointer-events-none hidden md:block"
                style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,163,49,0.08) 0%, transparent 70%)",
                    transform: "translate(-50%,-50%)",
                    transition: "opacity 0.4s ease",
                    opacity: 0.5,
                }} />

            {/* Core dot */}
            <div ref={dot} className="fixed z-[9999] pointer-events-none hidden md:block"
                style={{
                    width: 6, height: 6, borderRadius: "50%",
                    backgroundColor: "#d4a331",
                    boxShadow: "0 0 6px rgba(212,163,49,0.3)",
                    transform: "translate(-50%,-50%)",
                    transition: "transform 0.15s ease, box-shadow 0.2s ease",
                }} />

            {/* Ring */}
            <div ref={ring} className="fixed z-[9998] pointer-events-none hidden md:block"
                style={{
                    width: 36, height: 36, borderRadius: "50%",
                    border: "1.5px solid rgba(212,163,49,0.25)",
                    transform: "translate(-50%,-50%)",
                    transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1), border-color 0.3s ease",
                }} />
        </>
    );
}
