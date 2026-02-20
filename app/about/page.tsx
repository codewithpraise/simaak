"use client";

import React, { Suspense, useState, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { ArrowRight, Layers, Sparkles, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { aboutValues, aboutPhilosophy, aboutWhySimaak } from "@/constants/site-data";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MagneticParticles, ArchitecturalScene } from "@/components/ui/LazyVisuals";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export default function AboutPage() {
    return (
        <main className="relative bg-cream min-h-screen" style={{ overflowX: "hidden" }}>
            <MagneticParticles />


            {/* Hero */}
            <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-cream" />
                <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gold/[0.06] rounded-full blur-[150px] pointer-events-none float-anim" />
                <div className="absolute top-[30%] right-[10%] w-[200px] h-[200px] bg-gold/[0.04] rounded-full blur-[100px] pointer-events-none float-anim-slow" />
                <div className="max-w-4xl mx-auto space-y-5 relative z-30 pointer-events-none">
                    <Reveal className="flex items-center gap-3 text-gold">
                        <div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase">About Simaak</span>
                    </Reveal>
                    <TextGenerateEffect words="Engineering Excellence, By Design" className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] text-charcoal" />
                    <Reveal delay={0.3}>
                        <p className="max-w-xl text-text-secondary text-base md:text-lg leading-relaxed pointer-events-auto">
                            We are a telecommunications engineering company built on a singular belief: infrastructure should be as resilient as the communities it serves.
                        </p>
                    </Reveal>
                </div>
                <ScrollIndicator />
            </section>

            {/* ═══ The Simaak Name — Brand Story ═══ */}
            <div className="gold-divider" />
            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24 bg-surface relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-gold/[0.04] rounded-full blur-[140px] pointer-events-none float-anim" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <Reveal className="space-y-8 text-center">
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-px w-12 bg-gold/40" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">The Name</span><div className="h-px w-12 bg-gold/40" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-charcoal leading-[1.1]">
                                <span className="text-gold-shine">سماک</span>
                            </h2>
                            <p className="text-xl md:text-2xl font-display font-bold text-charcoal/80 tracking-tight">
                                &ldquo;High in status and rank&rdquo;
                            </p>
                            <div className="max-w-2xl mx-auto space-y-4">
                                <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                                    The word <strong className="text-charcoal font-display">SIMAAK</strong> is an Arabic word which generally means <em>high in status and rank or great</em>, and indicates towards symbolizing <strong className="text-charcoal font-display">brilliance and guidance</strong>.
                                </p>
                                <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                                    <strong className="text-charcoal font-display">TECH</strong> in the name stands for Technology — together, <em>Simaak Tech</em> represents the pursuit of technological excellence at the highest standard.
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2 pt-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold gold-dot-pulse" />
                                <span className="text-[8px] font-mono text-gold/50 tracking-[0.3em] uppercase">Simaak Tech (Private) Limited</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ 3D Architectural Core — The Soul of Simaak ═══ */}
            <section className="relative py-12 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                    <div className="w-full lg:w-1/2">
                        <ArchitecturalScene />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                        <Reveal className="flex items-center gap-3 text-gold">
                            <div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase">The Architecture</span>
                        </Reveal>
                        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-charcoal leading-[1.1]">
                            Engineered for <span className="text-gold-shine">Sovereign</span> Resilience
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            Our architecture is defined by a multi-layered approach to connectivity, ensuring no single point of failure and maximum operational throughput in the most demanding environments.
                        </p>
                    </div>
                </div>
            </section>


            {/* ═══ Core Values ═══ */}
            <div className="gold-divider" />
            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24 relative">
                <div className="absolute top-[40%] right-0 w-[250px] h-[250px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none float-anim-slow" />
                <div className="max-w-7xl mx-auto space-y-10">
                    <Reveal className="flex items-center gap-3"><div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Core Values</span></Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        {aboutValues.map((v, i) => (
                            <AboutCard key={i} index={i} item={v} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Engineering Philosophy ═══ */}
            <div className="gold-divider" />
            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24 bg-surface">
                <div className="max-w-4xl mx-auto space-y-10">
                    <Reveal className="space-y-3">
                        <div className="flex items-center gap-3"><div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Philosophy</span></div>
                        <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-charcoal">How We <span className="text-gold-shine">Think</span></h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {aboutPhilosophy.map((item, i) => (
                            <Reveal key={i} delay={i * 0.05}
                                className="p-5 md:p-6 rounded-2xl bg-cream border border-border group hover:border-gold/20 hover:shadow-[0_4px_20px_rgba(212,163,49,0.06)] transition-all duration-500 space-y-3 touch-glow card-sparkle"
                            >
                                <div className="relative z-10">
                                    <span className="text-2xl font-display font-bold text-charcoal/[0.04] group-hover:text-gold/12 transition-colors">0{i + 1}</span>
                                    <h4 className="text-base font-display font-bold tracking-tight text-charcoal group-hover:text-gold transition-colors mt-2">{item.title}</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed mt-1.5">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Why Simaak ═══ */}
            <div className="gold-divider" />
            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24 relative">
                <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] bg-gold/[0.04] rounded-full blur-[80px] pointer-events-none float-anim" />
                <div className="max-w-7xl mx-auto space-y-10">
                    <Reveal className="space-y-3 max-w-xl">
                        <div className="flex items-center gap-3"><div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Differentiators</span></div>
                        <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-charcoal">Why <span className="text-gold-shine">Simaak</span></h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        {aboutWhySimaak.map((item, i) => (
                            <AboutCard key={i} index={i} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="gold-divider" />
            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24 relative overflow-hidden bg-surface">
                <div className="absolute top-[30%] left-[5%] w-[200px] h-[200px] bg-gold/[0.04] rounded-full blur-[80px] pointer-events-none float-anim" />
                <div className="max-w-3xl mx-auto text-center space-y-5">
                    <Reveal>
                        <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-charcoal">Partner with <span className="text-gold-shine">Simaak</span></h2>
                    </Reveal>
                    <Reveal delay={0.06}>
                        <p className="text-text-secondary text-base max-w-sm mx-auto">Let&apos;s build infrastructure that stands the test of time — engineered with precision, delivered with commitment.</p>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <MagneticButton href="/contact">Start a Conversation</MagneticButton>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

function AboutCard({ item, index }: { item: any; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);
    const springX = useSpring(x, { stiffness: 300, damping: 30 });
    const springY = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(springY, [0, 1], [10, -10]);
    const rotateY = useTransform(springX, [0, 1], [-10, 10]);

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

    return (
        <Reveal delay={index * 0.08} className="h-full">
            <motion.div
                style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onTouchMove={handleMove}
                onTouchEnd={handleLeave}
                className="relative p-7 md:p-9 rounded-2xl bg-surface border border-border group hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(212,163,49,0.15)] transition-all duration-700 space-y-5 touch-glow overflow-hidden h-full flex flex-col"
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
                            stroke="url(#about-card-gradient)"
                            strokeWidth="2"
                            strokeDasharray="80 300"
                            animate={{
                                strokeDashoffset: [0, -380]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <defs>
                            <linearGradient id="about-card-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#d4a331" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Constant shimmer */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-[1]">
                    <div className="absolute inset-0 card-constant-shimmer" style={{
                        background: "linear-gradient(105deg, transparent 30%, rgba(212,163,49,0.06) 42%, rgba(255,255,255,0.04) 50%, rgba(212,163,49,0.06) 58%, transparent 70%)",
                    }} />
                </div>

                {/* Ambient corner glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/[0.05] rounded-full blur-[35px] pointer-events-none group-hover:bg-gold/[0.15] transition-all duration-700" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gold/[0.04] rounded-full blur-[25px] pointer-events-none group-hover:bg-gold/[0.10] transition-all duration-700" />

                <div className="relative z-10 flex-grow" style={{ transform: "translateZ(30px)" }}>
                    <div className="p-3.5 rounded-xl bg-gold-dim text-gold/60 w-fit group-hover:text-gold group-hover:bg-gold/[0.12] group-hover:shadow-[0_0_25px_rgba(212,163,49,0.2)] group-hover:rotate-[5deg] transition-all duration-500">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight text-charcoal group-hover:text-gold transition-colors mt-6 leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed mt-4 group-hover:text-charcoal transition-colors duration-500">
                        {item.description || item.desc}
                    </p>
                </div>

                {/* Bottom interactive indicator */}
                <div className="relative z-10 flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: "translateZ(20px)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-gold gold-dot-pulse" />
                    <span className="text-[10px] font-mono text-gold/60 tracking-[0.2em] uppercase">Module Integrated</span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 overflow-hidden z-20">
                    <div className="w-full h-full bg-gradient-to-r from-gold via-gold-light to-gold" />
                </div>
            </motion.div>
        </Reveal>
    );
}
