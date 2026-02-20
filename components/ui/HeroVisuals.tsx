"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── Floating Geometric Shapes ─── */
const shapes = [
    { type: "hexagon", size: 50, x: "12%", y: "18%", delay: 0, dur: 18, rotate: 60 },
    { type: "diamond", size: 28, x: "82%", y: "25%", delay: 2, dur: 14, rotate: 45 },
    { type: "circle", size: 12, x: "22%", y: "70%", delay: 1, dur: 20, rotate: 0 },
    { type: "hexagon", size: 32, x: "75%", y: "72%", delay: 3, dur: 22, rotate: -30 },
    { type: "diamond", size: 20, x: "50%", y: "15%", delay: 4, dur: 16, rotate: 90 },
    { type: "circle", size: 8, x: "88%", y: "55%", delay: 0.5, dur: 24, rotate: 0 },
    { type: "diamond", size: 14, x: "35%", y: "82%", delay: 2.5, dur: 19, rotate: 60 },
    { type: "circle", size: 6, x: "65%", y: "40%", delay: 1.5, dur: 15, rotate: 0 },
];

function ShapeSVG({ type, size }: { type: string; size: number }) {
    const s = size;
    if (type === "hexagon") {
        const r = s / 2;
        const pts = Array.from({ length: 6 }, (_, i) => {
            const a = (Math.PI / 3) * i - Math.PI / 2;
            return `${r + r * Math.cos(a)},${r + r * Math.sin(a)}`;
        }).join(" ");
        return (
            <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
                <polygon points={pts} fill="none" stroke="rgba(212,163,49,0.12)" strokeWidth="0.8" />
            </svg>
        );
    }
    if (type === "diamond") {
        const h = s / 2;
        return (
            <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
                <polygon points={`${h},0 ${s},${h} ${h},${s} 0,${h}`} fill="rgba(212,163,49,0.04)" stroke="rgba(212,163,49,0.15)" strokeWidth="0.6" />
            </svg>
        );
    }
    // circle
    return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
            <circle cx={s / 2} cy={s / 2} r={s / 2 - 0.5} fill="rgba(212,163,49,0.06)" stroke="rgba(212,163,49,0.1)" strokeWidth="0.5" />
        </svg>
    );
}

/* ─── Animated Scan Lines ─── */
function ScanLines() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
            {/* Horizontal scan line */}
            <motion.div
                className="absolute left-0 w-full h-px"
                style={{ background: "linear-gradient(90deg, transparent 10%, rgba(212,163,49,0.12) 50%, transparent 90%)" }}
                initial={{ top: "20%" }}
                animate={{ top: ["20%", "80%", "20%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Vertical pulse line */}
            <motion.div
                className="absolute top-0 h-full w-px"
                style={{ background: "linear-gradient(180deg, transparent 10%, rgba(212,163,49,0.08) 50%, transparent 90%)" }}
                initial={{ left: "30%" }}
                animate={{ left: ["30%", "70%", "30%"] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}

/* ─── Orbiting Dots ─── */
function OrbitDots() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[4]">
            <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]">
                {/* Outer orbit ring */}
                <div
                    className="absolute inset-0 rounded-full border border-gold/[0.04]"
                    style={{ animation: "spin 80s linear infinite" }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/20 shadow-[0_0_8px_rgba(212,163,49,0.2)]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold/15" />
                </div>
                {/* Inner orbit ring */}
                <div
                    className="absolute inset-[20%] rounded-full border border-dashed border-gold/[0.03]"
                    style={{ animation: "spin 50s linear infinite reverse" }}
                >
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold/25 shadow-[0_0_6px_rgba(212,163,49,0.15)]" />
                </div>
                {/* Center pulsing dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold/30 gold-dot-pulse" />
                </div>
            </div>
        </div>
    );
}

/* ─── Corner Accents ─── */
function CornerAccents() {
    return (
        <div className="absolute inset-0 pointer-events-none z-[3]">
            {/* Top-left */}
            <div className="absolute top-[12%] left-5 md:left-10 flex items-center gap-1.5 opacity-40">
                <div className="w-6 h-px bg-gold/40" />
                <div className="w-1 h-1 rounded-full bg-gold/30" />
            </div>
            {/* Top-right */}
            <div className="absolute top-[12%] right-5 md:right-10 flex items-center gap-1.5 opacity-40">
                <div className="w-1 h-1 rounded-full bg-gold/30" />
                <div className="w-6 h-px bg-gold/40" />
            </div>
            {/* Bottom-left bracket */}
            <div className="absolute bottom-[14%] left-5 md:left-10 opacity-30">
                <div className="w-4 h-px bg-gold/40" />
                <div className="w-px h-4 bg-gold/40" />
            </div>
            {/* Bottom-right bracket */}
            <div className="absolute bottom-[14%] right-5 md:right-10 opacity-30 flex flex-col items-end">
                <div className="w-4 h-px bg-gold/40" />
                <div className="w-px h-4 bg-gold/40 self-end" />
            </div>
        </div>
    );
}

/* ─── Gold Dust Particle Canvas ─── */
function GoldDust() {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const cvs = ref.current;
        if (!cvs) return;
        const ctx = cvs.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            cvs.width = cvs.offsetWidth * 2;
            cvs.height = cvs.offsetHeight * 2;
            ctx.scale(2, 2);
        };
        resize();
        window.addEventListener("resize", resize);

        interface Particle { x: number; y: number; vx: number; vy: number; size: number; alpha: number; pulse: number; }
        const particles: Particle[] = [];
        const count = window.innerWidth < 768 ? 20 : 35;

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * cvs.offsetWidth,
                y: Math.random() * cvs.offsetHeight,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                size: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.3 + 0.05,
                pulse: Math.random() * Math.PI * 2,
            });
        }

        let raf: number;
        const tick = () => {
            ctx.clearRect(0, 0, cvs.offsetWidth, cvs.offsetHeight);
            const t = Date.now() * 0.001;

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = cvs.offsetWidth;
                if (p.x > cvs.offsetWidth) p.x = 0;
                if (p.y < 0) p.y = cvs.offsetHeight;
                if (p.y > cvs.offsetHeight) p.y = 0;

                const a = p.alpha * (0.5 + 0.5 * Math.sin(t * 0.8 + p.pulse));

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 163, 49, ${a})`;
                ctx.fill();

                // soft glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 163, 49, ${a * 0.08})`;
                ctx.fill();
            }

            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={ref}
            className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
            style={{ opacity: 0.7 }}
        />
    );
}

/* ─── Main Export ─── */
export function HeroVisuals() {
    return (
        <>
            {/* Floating geometric shapes */}
            {shapes.map((s, i) => (
                <motion.div
                    key={i}
                    className="absolute pointer-events-none z-[3]"
                    style={{ left: s.x, top: s.y }}
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{
                        opacity: [0, 0.6, 0.3, 0.6, 0],
                        rotate: s.rotate,
                        y: [0, -10, 0, 10, 0],
                    }}
                    transition={{
                        duration: s.dur,
                        delay: s.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ShapeSVG type={s.type} size={s.size} />
                </motion.div>
            ))}

            <ScanLines />
            <OrbitDots />
            <CornerAccents />
            <GoldDust />
        </>
    );
}
