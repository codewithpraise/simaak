import React, { Suspense } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { serviceData } from "@/constants/services";
import { serviceExtras } from "@/constants/service-extras";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Zap, ArrowRight, Network, Shield, Activity } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AccordionSection } from "@/components/ui/AccordionSection";
import { SpecificationGrid } from "@/components/ui/SpecificationGrid";
import { StickyScroll } from "@/components/ui/StickyScroll";

export function generateStaticParams() {
    return serviceData.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = serviceData.find((s) => s.slug === slug);
    if (!service) { notFound(); }

    const idx = serviceData.findIndex(s => s.slug === slug);
    const extras = serviceExtras[slug];
    const related = serviceData.filter(s => s.slug !== slug).slice(Math.max(0, idx - 1), Math.max(0, idx - 1) + 3);

    // Prepare Sticky Scroll content from service steps
    const stickyContent = service.steps.map((step, i) => ({
        title: step.title,
        description: step.desc,
        content: (
            <div className="h-full w-full flex items-center justify-center text-gold/20">
                <Network className="w-16 h-16 animate-pulse" />
            </div>
        )
    }));

    return (
        <main className="relative bg-cream" style={{ overflowX: "hidden" }}>

            {/* ═══ HERO ═══ */}
            <section className="relative pt-24 md:pt-40 pb-16 md:pb-24 px-5 md:px-10 lg:px-16 overflow-hidden min-h-[70vh] flex items-center">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.07] rounded-full blur-[150px] pointer-events-none animate-pulse" />
                <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-30 pointer-events-none w-full">
                    <Link href="/services" prefetch={true} className="pointer-events-auto">
                        <div className="inline-flex items-center gap-2 text-text-muted hover:text-gold transition-colors mb-8 md:mb-12 group">
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Return to Services</span>
                        </div>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-7 space-y-8">
                            <Reveal className="flex items-center gap-3 text-gold">
                                <div className="h-px w-12 bg-gold" />
                                <span className="text-[10px] font-mono tracking-[0.5em] uppercase font-bold">{service.subtitle}</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                            </Reveal>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold tracking-tight leading-[0.9] text-charcoal">
                                {service.title.split(' ').map((word, i) => (
                                    <span key={i} className={i % 2 !== 0 ? "text-gold-shine block sm:inline" : "block sm:inline"}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h1>

                            <Reveal delay={0.2} className="flex flex-wrap gap-4 items-center">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-gold/[0.08] border border-gold/20 text-[10px] font-mono tracking-[0.3em] uppercase text-gold shadow-[0_0_20px_rgba(212,163,49,0.1)]">
                                    Strategic Module
                                </span>
                                <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted tracking-[0.2em] uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold gold-dot-pulse" />
                                    Active Infrastructure
                                </div>
                            </Reveal>

                            <Reveal delay={0.3}><p className="max-w-xl text-text-secondary text-base md:text-xl leading-relaxed pointer-events-auto">{service.intro}</p></Reveal>
                        </div>

                        <div className="lg:col-span-5 flex items-center justify-center">
                            <Reveal delay={0.5} className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square rounded-[2rem] border border-border bg-surface overflow-hidden group shadow-[0_20px_80px_rgba(0,0,0,0.1)]">
                                {service.imagePath && (
                                    <NextImage
                                        src={service.imagePath}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-all duration-1000 group-hover:scale-110"
                                        priority
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/0 to-transparent opacity-60" />
                                {/* Technical scan line animation */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/10 to-transparent h-1/2 w-full animate-scan pointer-events-none" />
                                <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[2rem] pointer-events-none" />
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ TECHNICAL BENTO GRID (Specifications) ═══ */}
            {extras?.technicalSpecs && (
                <section className="section-pad px-5 md:px-10 lg:px-16 border-t border-border bg-surface">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <Reveal center className="space-y-4 max-w-2xl mx-auto text-center">
                            <div className="flex items-center justify-center gap-3">
                                <div className="h-px w-8 bg-gold" />
                                <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Technical Architecture</span>
                                <div className="h-px w-8 bg-gold" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-charcoal">System <span className="text-gold-shine">Parameters</span></h2>
                            <p className="text-text-secondary text-sm md:text-base">Deep technical insights and hardware specifications driving the {service.title} module.</p>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <SpecificationGrid specs={extras.technicalSpecs} />
                        </Reveal>
                    </div>
                </section>
            )}

            {/* ═══ STICKY SCROLL REVEAL (Methodology) ═══ */}
            <section className="section-pad px-5 md:px-10 lg:px-16 border-t border-border">
                <div className="max-w-7xl mx-auto space-y-12">
                    <Reveal className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-gold" />
                            <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Flow Process</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-charcoal">Execution <span className="text-gold-shine">Pipeline</span></h2>
                    </Reveal>

                    <StickyScroll content={stickyContent} />
                </div>
            </section>

            {/* ═══ TECHNICAL NARRATIVE + SIDEBAR ═══ */}
            <section className="section-pad px-5 md:px-10 lg:px-16 border-t border-border bg-cream/50 relative">
                <div className="absolute inset-0 noise opacity-[0.03] pointer-events-none" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    <div className="lg:col-span-7 space-y-10">
                        <Reveal className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-8 bg-gold" />
                                <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Technical Narrative</span>
                            </div>
                            <h2 className="text-3xl font-display font-bold tracking-tight text-charcoal">Engineering <span className="text-gold-shine">Intelligence</span></h2>
                        </Reveal>
                        <div className="space-y-6 text-text-secondary text-base leading-relaxed">
                            {service.content.map((p, i) => (
                                <Reveal key={i} delay={i * 0.06}><p>{p}</p></Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                        {/* Capabilities */}
                        <div className="p-8 rounded-3xl bg-surface border border-border space-y-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] group hover:shadow-[0_10px_40px_rgba(212,163,49,0.1)] transition-all duration-700 overflow-hidden relative">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,163,49,0.04),transparent_50%)]" />
                            <h5 className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-gold">Key Capabilities</h5>
                            <ul className="space-y-4 relative z-10">
                                {service.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li">
                                        <div className="p-1 rounded bg-gold-dim border border-gold/10 text-gold/40 group-hover/li:text-gold transition-colors">
                                            <CheckCircle2 className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm text-text-secondary leading-relaxed group-hover/li:text-charcoal transition-colors">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SLA & Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                            <Reveal delay={0.1} className="p-6 rounded-2xl bg-gold-dim border border-gold/15 space-y-3 hover:bg-gold/[0.08] transition-colors">
                                <Shield className="w-5 h-5 text-gold" />
                                <div className="text-xl font-display font-bold text-charcoal">99.99%</div>
                                <div className="text-[8px] font-mono text-text-muted tracking-[0.2em] uppercase">SLA Uptime</div>
                            </Reveal>
                            <Reveal delay={0.15} className="p-6 rounded-2xl bg-gold-dim border border-gold/15 space-y-3 hover:bg-gold/[0.08] transition-colors">
                                <Activity className="w-5 h-5 text-gold" />
                                <div className="text-xl font-display font-bold text-charcoal">24/7</div>
                                <div className="text-[8px] font-mono text-text-muted tracking-[0.2em] uppercase">Tech Ops</div>
                            </Reveal>
                        </div>

                        <div className="p-8 rounded-3xl bg-charcoal text-white space-y-4">
                            <h4 className="text-base font-display font-bold tracking-tight">Deploying {service.title}</h4>
                            <p className="text-xs text-white/60 leading-relaxed">Schedule a technical consultation to integrate this module into your existing infrastructure stack.</p>
                            <MagneticButton href="/contact" size="sm" className="w-full justify-center">Schedule Consultation</MagneticButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ KNOWLEDGE BASE (FAQ) ═══ */}
            {extras?.faq && (
                <section className="section-pad px-5 md:px-10 lg:px-16 border-t border-border">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <Reveal center className="text-center space-y-4 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center gap-3">
                                <div className="h-px w-8 bg-gold" />
                                <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Knowledge Transfer</span>
                                <div className="h-px w-8 bg-gold" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-charcoal">Common <span className="text-gold-shine">Queries</span></h2>
                        </Reveal>
                        <AccordionSection items={extras.faq} />
                    </div>
                </section>
            )}

            {/* ═══ RELATED MODULES ═══ */}
            <section className="section-pad px-5 md:px-10 lg:px-16 border-t border-border bg-surface">
                <div className="max-w-7xl mx-auto space-y-12">
                    <Reveal className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-gold" />
                            <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Infrastructure Mesh</span>
                        </div>
                        <h2 className="text-3xl font-display font-bold tracking-tight text-charcoal">Adjacent <span className="text-gold-shine">Modules</span></h2>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {related.map((s, i) => (
                            <Link key={s.slug} href={`/services/${s.slug}`} prefetch={true}
                                className="group relative p-8 rounded-3xl bg-cream border border-border hover:border-gold/20 hover:shadow-[0_20px_60px_rgba(212,163,49,0.1)] transition-all duration-700 space-y-4 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/[0.03] rounded-full blur-[30px] group-hover:bg-gold/[0.08] transition-all" />
                                <div className="text-[9px] font-mono text-gold tracking-[0.3em] uppercase">Active Infrastructure</div>
                                <h4 className="text-lg font-display font-bold text-charcoal group-hover:text-gold transition-colors">{s.title}</h4>
                                <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">{s.intro}</p>
                                <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted group-hover:text-gold transition-colors tracking-[0.2em] uppercase pt-2">
                                    Deep Dive <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA FINALE ═══ */}
            <section className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
                <div className="absolute inset-0 noise opacity-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="max-w-4xl mx-auto px-5 text-center space-y-10 relative z-10">
                    <Reveal className="space-y-4">
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight">
                            Elevate your <span className="text-gold">network</span> today.
                        </h2>
                        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                            Integrate the {service.title} module into your national infrastructure for unprecedented resilience and performance.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <MagneticButton href="/contact" className="bg-gold text-charcoal hover:bg-white hover:text-charcoal transition-colors">Start Integration</MagneticButton>
                        <MagneticButton href="/contact" variant="outline" className="border-white/20 text-white hover:border-gold hover:text-gold">Technical Inquiry</MagneticButton>
                    </Reveal>
                </div>
            </section>

        </main>
    );
}
