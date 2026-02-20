"use client";

import React, { Suspense, useState, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { ImmaculateServiceCard } from "@/components/ui/ImmaculateServiceCard";
import NextImage from "next/image";
import { LiquidMask } from "@/components/ui/LiquidMask";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";
import Link from "next/link";
import {
    featuredServices, stats, processSteps,
    industries, capabilities
} from "@/constants/home-data";
import { SectionVisual, AnimatedCounter } from "@/components/ui/LazyVisuals";
import { HeroInfrastructure } from "@/components/ui/HeroInfrastructure";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);

    return (
        <main className="relative bg-white" style={{ overflowX: "hidden" }}>

            {/* ═══ HERO ═══ */}
            <section
                ref={heroRef}
                className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-charcoal group/hero"
            >
                {/* High-Performance Canvas Reveal Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    {/* B&W Base Layer */}
                    <NextImage
                        src="/hero-bg-tower image.jpg"
                        alt="Global Infrastructure"
                        fill
                        className="object-cover grayscale brightness-50"
                        priority
                    />

                    {/* Liquid Color Reveal Component (Direct Canvas) */}
                    <LiquidMask
                        imageSrc="/hero-bg-tower image.jpg"
                        className="absolute inset-0 z-10 opacity-100"
                    />
                </div>

                {/* High-vibrancy orbs — tuned for cinematic B&W backdrop */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[10%] right-[15%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-gold/[0.15] blur-[150px] animate-pulse" style={{ animationDuration: "8s" }} />
                    <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gold/[0.18] blur-[130px] float-anim-slow" />
                    <div className="absolute top-[45%] left-[45%] w-[200px] h-[200px] rounded-full bg-gold/[0.12] blur-[100px] float-anim" style={{ animationDelay: "2.5s" }} />
                </div>

                {/* 3D Global Infrastructure & Network Grid */}
                <HeroInfrastructure />

                {/* Content */}
                <div className="relative z-30 text-center px-5 md:px-8 max-w-5xl mx-auto w-full pointer-events-none mt-2 md:mt-4">
                    <Reveal center className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold gold-dot-pulse" />
                        <div className="h-px w-10 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                        <span className="text-[10px] md:text-xs font-mono tracking-[0.5em] uppercase text-gold/90 font-bold drop-shadow-[0_0_8px_rgba(212,163,49,0.5)]">Sovereign Infrastructure</span>
                        <div className="h-px w-10 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                        <div className="w-1.5 h-1.5 rounded-full bg-gold gold-dot-pulse" />
                    </Reveal>

                    <TextGenerateEffect
                        words="Architecting the Future of Connectivity"
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-display font-bold tracking-tight leading-[1] text-white drop-shadow-2xl"
                    />
                    <Reveal delay={0.6} center>
                        <p className="mt-5 md:mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed font-sans font-light tracking-wide">
                            Precision engineering for <span className="text-gold font-medium italic drop-shadow-[0_0_10px_rgba(212,163,49,0.3)]">next-generation</span> national infrastructure. High-fidelity signal architecture designed for absolute resilience.
                        </p>
                    </Reveal>
                    <Reveal delay={0.8} center className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 pointer-events-auto">
                        <MagneticButton href="/services" prefetch={true} showArrow={false} className="bg-charcoal/80 text-white backdrop-blur-3xl border border-gold/30 hover:border-gold hover:shadow-[0_0_50px_rgba(212,163,49,0.35)] transition-all duration-700 py-5 font-medium px-10 md:px-12 group/btn relative overflow-hidden rounded-[1.25rem]">
                            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700 blur-md pointer-events-none" />
                            <span className="relative z-10 flex items-center font-bold tracking-[0.2em] text-[13px] md:text-sm">
                                EXPLORE SOLUTIONS <ArrowUpRight className="ml-3 w-4.5 h-4.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:text-gold transition-all duration-500" />
                            </span>
                        </MagneticButton>
                        <MagneticButton href="/contact" prefetch={true} showArrow={false} className="bg-white/5 text-white backdrop-blur-xl border border-white/10 hover:border-white/40 hover:bg-white/15 transition-all duration-500 py-5 px-10 md:px-12 group/inquiry relative overflow-hidden rounded-[1.25rem] shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.1)]">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-0 group-hover/inquiry:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 flex items-center font-bold tracking-[0.2em] text-[13px] md:text-sm opacity-80 group-hover/inquiry:opacity-100 transition-opacity">
                                TECHNICAL INQUIRY <ArrowRight className="ml-3 w-4.5 h-4.5 opacity-0 -translate-x-2 group-hover/inquiry:opacity-100 group-hover/inquiry:translate-x-0 transition-all duration-500" />
                            </span>
                        </MagneticButton>
                    </Reveal>
                </div>

                {/* Scroll cue */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none opacity-60 hover:opacity-100 transition-opacity group/scroll">
                    <span className="text-[9px] font-mono text-white/50 group-hover/scroll:text-gold transition-colors tracking-[0.5em] uppercase drop-shadow-md">Scroll</span>
                    <div className="w-5 h-8 rounded-full border border-white/20 group-hover/scroll:border-gold/50 transition-colors flex items-start justify-center pt-1.5 overflow-hidden">
                        <div className="w-0.5 h-2 rounded-full bg-white/60 group-hover/scroll:bg-gold animate-bounce" style={{ animationDuration: "2s" }} />
                    </div>
                </div>
            </section>

            <div>
                {/* ═══ SERVICES ═══ */}
                <div className="gold-divider" />
                <section className="section-pad">
                    <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 space-y-10 md:space-y-14">
                        <Reveal className="max-w-xl space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-8 bg-gold" />
                                <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Services</span>
                                <Suspense fallback={null}><SectionVisual variant="hexgrid" className="ml-2" /></Suspense>
                            </div>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-charcoal">
                                Engineering <span className="text-gold-shine">Modules</span>
                            </h2>
                            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                                Fifteen specialized divisions built for mission-critical telecommunications.
                            </p>
                        </Reveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">

                            {featuredServices.map((s, i) => (
                                <ImmaculateServiceCard key={i} index={i} {...s} />
                            ))}
                        </div>
                        <Reveal className="flex justify-center">
                            <Link href="/services" prefetch={true} className="group flex items-center gap-2 text-text-tertiary hover:text-gold transition-colors text-sm font-medium">
                                View all modules <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Reveal>
                    </div>
                </section>

                {/* ═══ STATS ═══ */}
                <div className="gold-divider" />
                <section className="py-12 md:py-16 bg-surface relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,163,49,0.03),transparent_60%)] pointer-events-none" />
                    <div className="max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
                        {stats.map((s, i) => (
                            <Reveal key={i} delay={i * 0.06} className="text-center space-y-2 group">
                                <div className="inline-flex p-2.5 rounded-xl bg-gold-dim mx-auto group-hover:bg-gold/[0.12] group-hover:shadow-[0_0_16px_rgba(212,163,49,0.1)] transition-all duration-500">
                                    <s.icon className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
                                </div>
                                <div className="text-2xl md:text-3xl font-display font-bold tracking-tight text-gold-shine">
                                    <Suspense fallback={<span>{s.value}</span>}>
                                        <AnimatedCounter value={s.value} />
                                    </Suspense>
                                </div>
                                <div className="text-[10px] font-mono text-text-muted tracking-[0.3em] uppercase">{s.label}</div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ═══ WHY SIMAAK ═══ */}
                <div className="gold-divider" />
                <section className="section-pad bg-surface relative">
                    <div className="absolute top-[20%] right-0 w-[300px] h-[300px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none float-anim-slow" />
                    <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <Reveal className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-px w-8 bg-gold" />
                                    <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Why Simaak</span>
                                    <Suspense fallback={null}><SectionVisual variant="pulse" className="ml-2" /></Suspense>
                                </div>
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-charcoal">
                                    Engineering with <span className="text-gold-shine">Conviction</span>
                                </h3>
                            </div>
                            <div className="text-text-secondary text-sm md:text-base leading-relaxed space-y-3">
                                <p>We don&apos;t just build networks — we engineer the conduits of modern civilization. Our twelve specialized divisions operate as a unified system to deliver infrastructure that performs under any condition.</p>
                                <p>Every solution is designed for maximum uptime, redundant fail-safes, and seamless scalability — because the networks we build are the backbone of everything that matters.</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {capabilities.map((c, i) => (
                                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface border border-border hover:border-gold/15 hover:bg-gold/[0.02] transition-all duration-300 group/cap text-text-secondary text-sm touch-glow">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-gold/50 shrink-0 mt-0.5 group-hover/cap:text-gold transition-colors" /><span className="group-hover/cap:text-text-primary transition-colors">{c}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/about" prefetch={true} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium group">
                                Read our story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Reveal>
                        <Reveal delay={0.1} className="relative aspect-square rounded-2xl border border-border bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                            <NextImage
                                src="/engineering excellence image.jpg"
                                alt="Engineering Excellence"
                                fill
                                className="object-cover hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 noise opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/40 to-transparent" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,163,49,0.05),transparent_50%)]" />
                            {[...Array(5)].map((_, i) => (<div key={`h${i}`} className="absolute h-px w-full bg-charcoal/[0.02]" style={{ top: `${(i + 1) * 20}%` }} />))}
                            {[...Array(5)].map((_, i) => (<div key={`v${i}`} className="absolute w-px h-full bg-charcoal/[0.02]" style={{ left: `${(i + 1) * 20}%` }} />))}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="p-8 md:p-10 rounded-3xl border border-gold/10 bg-gold/[0.02] animate-spin" style={{ animationDuration: "60s" }}>
                                    <Cpu className="w-16 h-16 md:w-20 md:h-20 text-gold/15" />
                                </div>
                            </div>
                            <div className="absolute bottom-5 left-5 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold gold-dot-pulse" />
                                <span className="text-[8px] font-mono text-gold/40 tracking-[0.3em] uppercase">Systems Active</span>
                            </div>
                        </Reveal>
                    </div>
                </section>



                {/* ═══ CTA ═══ */}
                <div className="gold-divider" />
                <section className="section-pad bg-surface relative overflow-hidden">
                    <div className="absolute top-[30%] left-[10%] w-[250px] h-[250px] bg-gold/[0.04] rounded-full blur-[100px] pointer-events-none float-anim" />
                    <div className="absolute bottom-[20%] right-[15%] w-[200px] h-[200px] bg-gold/[0.03] rounded-full blur-[80px] pointer-events-none float-anim-slow" />
                    <div className="relative z-10 max-w-3xl mx-auto px-5 text-center space-y-6">
                        <Reveal>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.1] text-charcoal">
                                Ready to architect your <span className="text-gold-shine">infrastructure</span>?
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="text-text-secondary text-base md:text-lg max-w-md mx-auto">
                                Connect with our engineering leadership for a tailored solution architecture.
                            </p>
                        </Reveal>
                        <Reveal delay={0.15} className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <MagneticButton href="/contact" prefetch={true}>Start a Project</MagneticButton>
                            <MagneticButton href="/services" variant="outline" prefetch={true}>Explore Services</MagneticButton>
                        </Reveal>
                    </div>
                </section>
            </div>
        </main>
    );
}
