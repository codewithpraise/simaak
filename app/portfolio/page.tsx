"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { solutionDomains } from "@/constants/site-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MagneticParticles } from "@/components/ui/LazyVisuals";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import NextImage from "next/image";

export default function PortfolioPage() {
    return (
        <main className="relative bg-cream min-h-screen" style={{ overflowX: "hidden" }}>
            <MagneticParticles />


            <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-gold/[0.06] rounded-full blur-[150px] pointer-events-none float-anim" />
                <div className="absolute top-[40%] right-[5%] w-[200px] h-[200px] bg-gold/[0.04] rounded-full blur-[100px] pointer-events-none float-anim-slow" />
                <div className="max-w-4xl mx-auto space-y-5 relative z-30 pointer-events-none">
                    <Reveal className="flex items-center gap-3 text-gold">
                        <div className="h-px w-8 bg-gold" /><span className="text-[10px] font-mono tracking-[0.4em] uppercase">Solution Architecture</span>
                    </Reveal>
                    <TextGenerateEffect words="What We Engineer" className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] text-charcoal" />
                    <Reveal delay={0.3}>
                        <p className="max-w-xl text-text-secondary text-base md:text-lg leading-relaxed pointer-events-auto">
                            Comprehensive telecommunications solutions designed for resilience, scale, and performance across the most demanding environments.
                        </p>
                    </Reveal>
                </div>
                <ScrollIndicator />
            </section>

            {/* Solution Domains */}
            <div className="gold-divider" />
            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-5xl mx-auto space-y-5 md:space-y-6">
                    {solutionDomains.map((d, i) => (
                        <SolutionCard key={i} index={i} d={d} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div className="gold-divider" />
            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24 bg-surface relative overflow-hidden">
                <div className="absolute top-[30%] right-[10%] w-[200px] h-[200px] bg-gold/[0.04] rounded-full blur-[80px] pointer-events-none float-anim" />
                <div className="max-w-3xl mx-auto text-center space-y-5">
                    <Reveal><h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-charcoal">Ready to <span className="text-gold-shine">architect</span> your solution?</h2></Reveal>
                    <Reveal delay={0.06}><p className="text-text-secondary text-base max-w-sm mx-auto">Share your requirements and we&apos;ll design a tailored infrastructure architecture within 24 hours.</p></Reveal>
                    <Reveal delay={0.12}>
                        <MagneticButton href="/contact">Start a Conversation</MagneticButton>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

function SolutionCard({ d, index }: { d: any; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);
    const springX = useSpring(x, { stiffness: 300, damping: 30 });
    const springY = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(springY, [0, 1], [6, -6]);
    const rotateY = useTransform(springX, [0, 1], [-6, 6]);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        x.set((clientX - rect.left) / rect.width);
        y.set((clientY - rect.top) / rect.height);
        setIsHovered(true);
    };

    const handleLeave = () => {
        x.set(0.5);
        y.set(0.5);
        setIsHovered(false);
    };

    const contactUrl = `/contact`;

    return (
        <Reveal delay={index * 0.08} className="h-full">
            <motion.div
                style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d" }}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onTouchMove={handleMove}
                onTouchEnd={handleLeave}
                className="group rounded-2xl bg-surface border border-border overflow-hidden hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(212,163,49,0.15)] transition-all duration-700 touch-glow relative h-full flex flex-col"
            >
                {/* Moving Border Layer */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none z-0">
                    <svg className="absolute inset-0 w-full h-full">
                        <motion.rect
                            x="1" y="1"
                            width="calc(100% - 2px)"
                            height="calc(100% - 2px)"
                            rx="16"
                            fill="none"
                            stroke="url(#portfolio-card-gradient)"
                            strokeWidth="2"
                            strokeDasharray="100 400"
                            animate={{
                                strokeDashoffset: [0, -500]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <defs>
                            <linearGradient id="portfolio-card-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#d4a331" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Constant card shimmer */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-[1]">
                    <div className="absolute inset-0 card-constant-shimmer" style={{
                        background: "linear-gradient(105deg, transparent 30%, rgba(212,163,49,0.06) 42%, rgba(255,255,255,0.04) 50%, rgba(212,163,49,0.06) 58%, transparent 70%)",
                    }} />
                </div>

                {/* Ambient corner glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/[0.05] rounded-full blur-[40px] pointer-events-none group-hover:bg-gold/[0.15] transition-all duration-700" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 h-full flex-grow">
                    <div className="lg:col-span-4 relative bg-surface-2 p-0 flex flex-col justify-between min-h-[140px] lg:min-h-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-border">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(212,163,49,0.08),transparent_60%)] pointer-events-none" />
                        {d.imagePath && (
                            <div className="absolute inset-0 w-full h-full z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                                <NextImage
                                    src={d.imagePath}
                                    alt={d.title}
                                    fill
                                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/90 via-charcoal/40 to-transparent" />
                            </div>
                        )}
                        <div className="absolute bottom-6 left-6 mt-3 relative z-10" style={{ transform: "translateZ(20px)" }}>
                            <span className="text-[11px] font-mono text-gold/80 tracking-[0.4em] uppercase group-hover:text-gold transition-colors">{d.category}</span>
                        </div>
                    </div>
                    <div className="lg:col-span-8 p-6 md:p-10 space-y-5 flex flex-col justify-center" style={{ transform: "translateZ(25px)" }}>
                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-charcoal group-hover:text-gold transition-colors duration-500">{d.title}</h3>
                        </div>
                        <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">{d.desc}</p>
                        <p className="text-sm text-text-tertiary leading-relaxed font-medium italic opacity-80">{d.capability}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {d.tags.map((h: string, j: number) => (
                                <span key={j} className="px-3 py-1.5 rounded-lg bg-gold-dim border border-gold/[0.15] text-[10px] font-mono text-gold tracking-widest group-hover:border-gold/40 group-hover:bg-gold/[0.10] transition-all uppercase">{h}</span>
                            ))}
                        </div>
                        <div className="pt-4">
                            <Link href={contactUrl} className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-all font-bold tracking-wide group/l border-b border-gold/0 hover:border-gold/40 pb-1 w-fit">
                                Discuss Solution <ArrowUpRight className="w-4 h-4 group-hover/l:translate-x-1 group-hover/l:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-1000 overflow-hidden z-20">
                    <div className="w-full h-full bg-gradient-to-r from-gold via-gold-light to-gold" />
                </div>
            </motion.div>
        </Reveal>
    );
}
