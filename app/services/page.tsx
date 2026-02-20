import React, { Suspense } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { ImmaculateServiceCard } from "@/components/ui/ImmaculateServiceCard";
import { serviceData } from "@/constants/services";
import { ArrowRight, Network } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { servicesApproach } from "@/constants/site-data";
import { MagneticParticles } from "@/components/ui/LazyVisuals";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";


export default function ServicesPage() {
    return (
        <main className="relative bg-cream min-h-screen" style={{ overflowX: "hidden" }}>
            <MagneticParticles />


            {/* Hero */}
            <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">

                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/[0.06] rounded-full blur-[150px] pointer-events-none float-anim" />
                <div className="absolute bottom-[20%] left-[10%] w-[200px] h-[200px] bg-gold/[0.04] rounded-full blur-[100px] pointer-events-none float-anim-slow" />
                <div className="max-w-4xl mx-auto space-y-5 relative z-30 pointer-events-none">
                    <Reveal className="flex items-center gap-3 text-gold">
                        <div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase">Service Matrix</span>
                    </Reveal>
                    <TextGenerateEffect words="Mission-Critical Engineering Modules" className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] text-charcoal" />
                    <Reveal delay={0.3}>
                        <p className="max-w-xl text-text-secondary text-base md:text-lg leading-relaxed pointer-events-auto">
                            Fifteen specialized engineering divisions designed for resilience, precision, and national-scale deployment.
                        </p>
                    </Reveal>
                </div>
                <ScrollIndicator />
            </section>

            {/* Grid */}
            <div className="gold-divider" />
            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        {serviceData.map((s, i) => (
                            <ImmaculateServiceCard
                                key={i}
                                index={i}
                                title={s.title}
                                description={s.intro}
                                icon={s.icon}
                                slug={s.slug}
                                imagePath={s.imagePath}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach */}
            <div className="gold-divider" />
            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24 bg-surface relative">
                <div className="absolute top-[30%] left-0 w-[250px] h-[250px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none float-anim-slow" />
                <div className="max-w-7xl mx-auto space-y-10">
                    <Reveal className="max-w-xl space-y-3">
                        <div className="flex items-center gap-3"><div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold">Methodology</span></div>
                        <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-charcoal">Our <span className="text-gold-shine">Approach</span></h2>
                    </Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {servicesApproach.map((item, i) => (
                            <Reveal key={i} delay={i * 0.06}
                                className="card-sparkle p-6 md:p-8 rounded-2xl bg-cream border border-border group hover:border-gold/30 hover:shadow-[0_12px_45px_rgba(212,163,49,0.12)] transition-all duration-700 space-y-5 touch-glow overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,163,49,0.05),transparent_50%)] pointer-events-none" />
                                <div className="relative z-10">
                                    <span className="text-2xl font-display font-bold text-charcoal/[0.04] group-hover:text-gold/15 transition-colors">0{i + 1}</span>
                                    <div className="p-3 rounded-xl bg-gold-dim text-gold/60 w-fit group-hover:text-gold group-hover:bg-gold/[0.12] group-hover:shadow-[0_0_20px_rgba(212,163,49,0.2)] group-hover:rotate-6 transition-all mt-4"><item.icon className="w-5 h-5" /></div>
                                    <h4 className="text-lg font-display font-bold tracking-tight text-charcoal group-hover:text-gold transition-colors mt-5">{item.title}</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed mt-3">{item.desc}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 bg-gold" />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="gold-divider" />
            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24 relative overflow-hidden">
                <div className="absolute top-[40%] right-[10%] w-[200px] h-[200px] bg-gold/[0.04] rounded-full blur-[80px] pointer-events-none float-anim" />
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <Reveal><h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-charcoal">Need a custom <span className="text-gold-shine">solution</span>?</h2></Reveal>
                    <Reveal delay={0.06}><p className="text-text-secondary text-base md:text-lg max-w-md mx-auto">Our engineering team will design a tailored architecture for your specific requirements within 48 hours.</p></Reveal>
                    <Reveal delay={0.12}>
                        <MagneticButton href="/contact" prefetch={true}>Discuss Your Project</MagneticButton>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
