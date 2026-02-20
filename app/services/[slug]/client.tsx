"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Reveal } from "@/components/ui/Reveal";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";


import { serviceData } from "@/constants/services";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceDetailClient({ slug }: { slug: string }) {
    const service = serviceData.find((s) => s.slug === slug);
    if (!service) { notFound(); }

    const idx = serviceData.findIndex(s => s.slug === slug);
    const prev = idx > 0 ? serviceData[idx - 1] : null;
    const next = idx < serviceData.length - 1 ? serviceData[idx + 1] : null;

    return (
        <main className="relative bg-cream" style={{ overflowX: "hidden" }}>

            {/* Hero */}
            <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 px-5 md:px-10 lg:px-16 overflow-hidden">

                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/[0.04] rounded-full blur-[150px] pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-30 pointer-events-none">
                    <Link href="/services" prefetch={true} className="pointer-events-auto">
                        <div className="inline-flex items-center gap-2 text-text-muted hover:text-gold transition-colors mb-8">
                            <ArrowLeft className="w-3.5 h-3.5" /><span className="text-[10px] font-mono tracking-[0.3em] uppercase">Services</span>
                        </div>
                    </Link>
                    <div className="space-y-5">
                        <Reveal className="flex items-center gap-3 text-gold"><div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-wide uppercase">{service.subtitle}</span></Reveal>
                        <TextGenerateEffect words={service.title} className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.08] text-charcoal" />
                        <Reveal delay={0.3}><p className="max-w-xl text-text-secondary text-base md:text-lg leading-relaxed pointer-events-auto">{service.intro}</p></Reveal>
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="section-pad px-5 md:px-10 lg:px-16 border-t border-border bg-surface">
                <div className="max-w-7xl mx-auto space-y-10">
                    <Reveal className="space-y-3">
                        <div className="flex items-center gap-3"><div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Methodology</span></div>
                        <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-charcoal">Execution <span className="text-gold-shine">Path</span></h2>
                    </Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl border border-border overflow-hidden bg-cream">
                        {service.steps.map((step, i) => (
                            <Reveal key={i} delay={i * 0.06}
                                className="p-6 space-y-3 relative group border-b sm:border-b-0 sm:border-r border-border last:border-r-0 last:border-b-0 hover:bg-surface transition-colors duration-500"
                            >
                                <div className="text-2xl font-display font-bold text-charcoal/[0.04] group-hover:text-gold/12 transition-colors">Phase</div>
                                <h4 className="text-base font-display font-bold text-charcoal group-hover:text-gold transition-colors">{step.title}</h4>
                                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-700" />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content + Sidebar */}
            <section className="section-pad px-5 md:px-10 lg:px-16 border-t border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    <div className="lg:col-span-7 space-y-8">
                        <Reveal className="space-y-3">
                            <div className="flex items-center gap-3"><div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Deep Dive</span></div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-charcoal">Technical <span className="text-gold-shine">Narrative</span></h2>
                        </Reveal>
                        <div className="space-y-5 text-text-secondary text-base leading-relaxed">
                            {service.content.map((p, i) => (
                                <Reveal key={i} delay={i * 0.06}><p>{p}</p></Reveal>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-5 space-y-4">
                        <Reveal className="p-6 rounded-2xl bg-surface border border-border space-y-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                            <h5 className="text-[10px] font-display font-bold tracking-wide uppercase text-text-muted">Key Capabilities</h5>
                            <ul className="space-y-3">
                                {service.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-2.5 group">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-gold/40 shrink-0 mt-0.5 group-hover:text-gold transition-colors" />
                                        <span className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal delay={0.06} className="p-6 rounded-2xl bg-gold-dim border border-gold/12 space-y-3">
                            <Zap className="w-5 h-5 text-gold" />
                            <h5 className="font-display font-bold text-sm text-charcoal">SLA Guarantee</h5>
                            <p className="text-sm text-text-secondary leading-relaxed">Structural uptime through redundant node deployment and 24/7 monitoring.</p>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <Link href="/contact" prefetch={true} className="block p-6 rounded-2xl bg-charcoal text-white space-y-2.5 group btn-shimmer">
                                <div className="text-[8px] font-mono tracking-[0.3em] uppercase opacity-60">Ready?</div>
                                <div className="font-display font-bold text-base">Start a Project</div>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Adjacent Nav */}
            <section className="border-t border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-2">
                    {prev ? (
                        <Link href={`/services/${prev.slug}`} prefetch={true} className="p-6 md:p-10 group hover:bg-surface transition-colors border-r border-border">
                            <div className="text-[8px] font-mono text-text-muted uppercase tracking-[0.3em]">← Previous</div>
                            <div className="text-sm md:text-base font-display font-bold text-text-secondary group-hover:text-gold transition-colors mt-1">{prev.title}</div>
                        </Link>
                    ) : <div className="border-r border-border" />}
                    {next ? (
                        <Link href={`/services/${next.slug}`} prefetch={true} className="p-6 md:p-10 group hover:bg-surface transition-colors text-right">
                            <div className="text-[8px] font-mono text-text-muted uppercase tracking-[0.3em]">Next →</div>
                            <div className="text-sm md:text-base font-display font-bold text-text-secondary group-hover:text-gold transition-colors mt-1">{next.title}</div>
                        </Link>
                    ) : <div />}
                </div>
            </section>
        </main>
    );
}
