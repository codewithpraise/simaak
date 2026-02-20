"use client";

import React, { useRef, useCallback, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";

/* ═══════════════════════════════════════════
   Immaculate Service Card — ULTRA Premium
   3D tilt, holographic border sweep, constant
   shimmer, animated gradient, particle burst,
   floating icon, pulsing glow, mobile touch.
   ═══════════════════════════════════════════ */

interface Props {
    index: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    slug: string;
    imagePath?: string;
}

export function ImmaculateServiceCard({ index, title, description, icon, slug, imagePath }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springX = useSpring(mouseX, { stiffness: 300, damping: 22 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 22 });

    const rotateX = useTransform(springY, [0, 1], [14, -14]);
    const rotateY = useTransform(springX, [0, 1], [-14, 14]);

    const handleMove = useCallback((clientX: number, clientY: number) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width;
        const y = (clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);

        if (glowRef.current) {
            glowRef.current.style.opacity = "1";
            glowRef.current.style.left = `${x * 100}%`;
            glowRef.current.style.top = `${y * 100}%`;
        }

        setIsActive(true);
    }, [mouseX, mouseY]);

    const handleLeave = useCallback(() => {
        mouseX.set(0.5);
        mouseY.set(0.5);
        setIsActive(false);
        if (glowRef.current) glowRef.current.style.opacity = "0";
    }, [mouseX, mouseY]);

    return (
        <Link href={`/services/${slug}`} prefetch={true} className="block group">
            <motion.div
                ref={ref}
                style={{ rotateX, rotateY, transformPerspective: 700, transformStyle: "preserve-3d" }}
                onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
                onTouchMove={(e) => {
                    const t = e.touches[0];
                    if (t) handleMove(t.clientX, t.clientY);
                }}
                onTouchStart={(e) => {
                    const t = e.touches[0];
                    if (t) handleMove(t.clientX, t.clientY);
                }}
                onMouseLeave={handleLeave}
                onTouchEnd={handleLeave}
                className="relative rounded-2xl overflow-hidden touch-glow cursor-pointer h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                {/* Moving Border Layer — Aceternity Style */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none z-0">
                    <svg className="absolute inset-0 w-full h-full">
                        <rect
                            x="1" y="1"
                            width="calc(100% - 2px)"
                            height="calc(100% - 2px)"
                            rx="16"
                            fill="none"
                            stroke="rgba(62, 139, 189, 0.08)"
                            strokeWidth="1"
                        />
                        <motion.rect
                            x="1" y="1"
                            width="calc(100% - 2px)"
                            height="calc(100% - 2px)"
                            rx="16"
                            fill="none"
                            stroke="url(#moving-gradient)"
                            strokeWidth="2"
                            strokeDasharray="100 300"
                            animate={{
                                strokeDashoffset: [0, -400]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <defs>
                            <linearGradient id="moving-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#3E8BBD" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Ambient corner glow — always visible */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-gold/[0.04] rounded-full blur-[40px] pointer-events-none group-hover:bg-gold/[0.10] transition-all duration-700" />
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gold/[0.03] rounded-full blur-[30px] pointer-events-none group-hover:bg-gold/[0.06] transition-all duration-700" />

                {/* Main card */}
                <div className={`relative z-10 p-7 md:p-8 rounded-2xl bg-[#0F172A] border border-white/5 h-full space-y-6 transition-all duration-500
                    group-hover:border-gold/40 group-active:border-gold/60
                    group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_80px_rgba(37,99,235,0.15)]
                    group-active:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_100px_rgba(37,99,235,0.25)]
                    ${isActive ? "backdrop-blur-[2px]" : ""}
                `}>

                    {/* Infrastructure Background Image with Overlay */}
                    {imagePath && (
                        <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-90 transition-opacity duration-700">
                            <NextImage
                                src={imagePath}
                                alt={title}
                                fill
                                className="object-cover transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent" />
                        </div>
                    )}

                    {/* Cursor-tracking radial glow */}
                    <div
                        ref={glowRef}
                        className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0 opacity-0"
                        style={{
                            background: "radial-gradient(circle, rgba(62, 139, 189, 0.14) 0%, rgba(62, 139, 189, 0.05) 40%, transparent 70%)",
                            transition: "opacity 0.3s ease",
                        }}
                    />

                    {/* Premium Shimmer Sweep — Single Clean Line */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none z-[1] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                            className="absolute inset-0 w-[200%] h-full -left-full"
                            style={{
                                background: "linear-gradient(105deg, transparent 35%, rgba(62, 139, 189, 0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(62, 139, 189, 0.1) 55%, transparent 65%)",
                                animation: isActive ? "shimmer-sweep 1.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite" : "none"
                            }}
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-[5] h-full flex flex-col justify-between">
                        <div className="space-y-6">
                            <motion.div
                                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gold/10 text-gold-light group-hover:text-white group-hover:bg-gold transition-all duration-500"
                                animate={isActive ? {
                                    scale: [1, 1.1, 1],
                                    boxShadow: ["0 0 0px rgba(37, 99, 235, 0)", "0 0 40px rgba(37, 99, 235, 0.4)", "0 0 20px rgba(37, 99, 235, 0.2)"],
                                    rotate: [0, 2, -2, 0],
                                } : {
                                    scale: 1,
                                    boxShadow: "0 0 0px rgba(37, 99, 235, 0)",
                                    rotate: 0,
                                }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { className: "w-8 h-8" }) : icon}
                            </motion.div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold tracking-tight text-white group-hover:text-gold-light transition-colors duration-300">
                                    {title}
                                </h3>
                                <p className="text-sm text-text-muted leading-relaxed line-clamp-4 group-hover:text-white/80">
                                    {description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-text-muted group-hover:text-gold transition-colors tracking-[0.2em] uppercase">
                                Explore
                                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </span>

                            {/* Status indicator */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="flex items-center gap-1.5"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold gold-dot-pulse" />
                                        <span className="text-[7px] font-mono text-gold/40 tracking-[0.3em] uppercase">Active</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Bottom accent line — animated holographic sweep */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-gold via-gold-light to-gold" style={{ animation: "shine-shift 3s linear infinite" }} />
                    </div>

                    {/* Top corner accent shimmer */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-gold/30 to-transparent" />
                        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-gold/30 to-transparent" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
