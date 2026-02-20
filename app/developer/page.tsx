"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Github, Linkedin, Mail, Twitter, Code, Terminal, Database, Cloud, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

/**
 * Developer Page — Dedicated to the engineer behind Simaak Tech.
 */

export default function DeveloperPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Technical Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        // Open Gmail compose in a new tab — guaranteed to work in any browser
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=codewithpraise@gmail.com&su=${subject}&body=${body}`;
        window.open(gmailUrl, "_blank");
    };

    return (
        <main className="relative bg-white min-h-screen pt-28 pb-20 px-6 sm:px-10 md:px-16 lg:px-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-24 md:space-y-40 relative z-10">

                {/* Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-6">
                        <Reveal className="flex items-center gap-3 text-gold">
                            <div className="h-px w-8 bg-gold" />
                            <span className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold drop-shadow-[0_0_8px_rgba(212,163,49,0.5)]">The Architect</span>
                        </Reveal>
                        <TextGenerateEffect words="Engineering at the Edge" className="text-4xl md:text-6xl font-display font-bold tracking-tight text-charcoal drop-shadow-sm" />
                        <Reveal delay={0.3} className="space-y-4 text-text-secondary text-lg leading-relaxed">
                            <p>Crafting high-performance digital infrastructure with a focus on sovereign resilience and immaculate design.</p>
                            <p>Specializing in full-stack engineering, 3D interactive systems, and mission-critical cloud architecture.</p>
                        </Reveal>
                        <Reveal delay={0.5} className="flex flex-wrap items-center gap-4 mt-4">
                            <MagneticButton href="https://praise-space.vercel.app" variant="primary" showArrow={false} className="gap-2.5 px-8">
                                <ExternalLink className="w-4 h-4 text-gold" />
                                <span className="tracking-widest">VIEW PORTFOLIO</span>
                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-1" />
                            </MagneticButton>
                        </Reveal>
                    </div>

                    <div className="relative">
                        <Reveal delay={0.4} className="relative rounded-[2rem] bg-[#0d0d0d] border border-gold/20 overflow-hidden shadow-[0_20px_50px_rgba(212,163,49,0.15)] h-[420px] group transition-all duration-700 hover:shadow-[0_30px_60px_rgba(212,163,49,0.25)] hover:border-gold/40 hover:-translate-y-2">
                            {/* Terminal Header */}
                            <div className="absolute top-0 inset-x-0 h-10 bg-white/5 border-b border-white/10 px-4 flex items-center justify-between backdrop-blur-md z-10">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_5px_rgba(255,95,86,0.5)]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_rgba(255,189,46,0.5)]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_5px_rgba(39,201,63,0.5)]" />
                                </div>
                                <div className="text-[9px] font-mono text-white/50 tracking-widest uppercase flex items-center gap-2">
                                    <Terminal className="w-3 h-3 text-gold" />
                                    system_diagnostics.exe
                                </div>
                                <div className="w-10" />
                            </div>

                            {/* Terminal Body */}
                            <div className="pt-14 pb-6 px-6 font-mono text-[11px] leading-relaxed select-none relative z-10">
                                <div className="space-y-4">
                                    <div className="flex gap-3 items-center">
                                        <span className="text-gold opacity-80 animate-pulse">#</span>
                                        <TerminalText text="Initializing hyper-scale infrastructure..." delay={0} />
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <span className="text-gold opacity-80 animate-pulse" style={{ animationDelay: '0.2s' }}>#</span>
                                        <TerminalText text="Deploying edge-compute nodes spanning 14 regions" delay={1.5} />
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <span className="text-gold opacity-80 animate-pulse" style={{ animationDelay: '0.4s' }}>#</span>
                                        <TerminalText text="Syncing 3D WebGL context: GLOBAL_OPTIMIZED" delay={3} />
                                    </div>
                                    <div className="flex gap-3 pt-6 items-center">
                                        <span className="text-gold">➜</span>
                                        <span className="text-white">uptime --status</span>
                                    </div>
                                    <div className="text-white/60 grid grid-cols-2 gap-y-3 gap-x-2 pl-6 mt-2 relative">
                                        <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 to-transparent" />
                                        <div className="pl-4 group/stat"><span className="text-white/40 group-hover/stat:text-white transition-colors">STATUS:</span> <span className="text-[#27c93f] drop-shadow-[0_0_5px_#27c93f]">OPERATIONAL</span></div>
                                        <div className="pl-4 group/stat"><span className="text-white/40 group-hover/stat:text-white transition-colors">LATENCY:</span> <span className="text-gold drop-shadow-[0_0_5px_#D4A331]">14ms</span></div>
                                        <div className="pl-4 group/stat"><span className="text-white/40 group-hover/stat:text-white transition-colors">THROUGHPUT:</span> <span className="text-gold drop-shadow-[0_0_5px_#D4A331]">4.2GB/s</span></div>
                                        <div className="pl-4 group/stat"><span className="text-white/40 group-hover/stat:text-white transition-colors">NODES:</span> <span className="text-[#27c93f] drop-shadow-[0_0_5px_#27c93f]">ONLINE</span></div>
                                    </div>
                                    <div className="flex gap-3 pt-6 items-center">
                                        <span className="text-gold">➜</span>
                                        <span className="text-white font-bold animate-pulse">_</span>
                                    </div>
                                </div>
                            </div>

                            {/* Aesthetic Glows & Shimmer */}
                            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(212,163,49,0.05)_40%,rgba(255,255,255,0.02)_50%,rgba(212,163,49,0.05)_60%,transparent_80%)] animate-shimmer pointer-events-none" />
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-gold/10 transition-colors duration-700" />
                            <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-white/5 rounded-full blur-[60px] pointer-events-none" />
                        </Reveal>

                        {/* Scroll Indicator — localized to terminal right */}
                        <div className="hidden xl:block absolute -right-20 top-1/2 -translate-y-1/2">
                            <ScrollIndicator />
                        </div>
                    </div>
                </div>

                <div className="xl:hidden relative h-20 flex justify-center items-center">
                    <ScrollIndicator />
                </div>

                {/* Contact Form */}
                <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10 pt-10">
                    <div className="lg:col-span-5 space-y-6">
                        <Reveal className="flex items-center gap-3">
                            <div className="h-px w-8 bg-gold drop-shadow-[0_0_2px_rgba(212,163,49,0.5)]" />
                            <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-gold font-bold">Connect</span>
                        </Reveal>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal tracking-tight">Direct <span className="text-gold-shine drop-shadow-md">Line</span></h2>
                        <p className="text-text-secondary text-base leading-relaxed">Have a technical inquiry or want to collaborate on a high-fidelity project? Drop a message below.</p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-surface border border-gold/10 group hover:border-gold/40 hover:shadow-[0_10px_30px_rgba(212,163,49,0.1)] transition-all duration-500 overflow-hidden relative cursor-pointer touch-glow">
                                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="p-3 rounded-xl bg-gold-dim text-gold group-hover:bg-gold group-hover:text-white group-hover:shadow-[0_0_15px_rgba(212,163,49,0.5)] transition-all duration-500 relative z-10"><Mail className="w-5 h-5" /></div>
                                <div className="space-y-1 relative z-10">
                                    <div className="text-[9px] font-mono text-gold-light tracking-widest uppercase font-bold">Email Architect</div>
                                    <div className="text-[15px] font-bold text-charcoal tracking-wide">codewithpraise@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Reveal delay={0.2} className="lg:col-span-7 p-8 md:p-12 rounded-[2rem] bg-surface border border-border shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:shadow-[0_20px_50px_rgba(212,163,49,0.08)] hover:border-gold/20 transition-all duration-700 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-bl from-gold/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2.5">
                                    <label className="text-[10px] font-mono text-charcoal/60 tracking-widest uppercase font-bold ml-1">Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} required type="text" className="w-full bg-cream/80 border border-black/5 rounded-[1.25rem] px-5 py-3.5 text-sm focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/10 transition-all text-charcoal font-medium" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2.5">
                                    <label className="text-[10px] font-mono text-charcoal/60 tracking-widest uppercase font-bold ml-1">Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" className="w-full bg-cream/80 border border-black/5 rounded-[1.25rem] px-5 py-3.5 text-sm focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/10 transition-all text-charcoal font-medium" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <label className="text-[10px] font-mono text-charcoal/60 tracking-widest uppercase font-bold ml-1">Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="w-full bg-cream/80 border border-black/5 rounded-[1.25rem] px-5 py-3.5 text-sm focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/10 transition-all resize-none text-charcoal font-medium" placeholder="Let's build something phenomenal..." />
                            </div>
                            <div className="pt-2">
                                <MagneticButton type="submit" className="w-full justify-center text-[13px] tracking-widest shadow-[0_4px_20px_rgba(0,0,0,0.1)] py-5">
                                    Deploy Message
                                </MagneticButton>
                            </div>
                        </form>
                    </Reveal>
                </section>

            </div>
        </main>
    );
}

function TerminalText({ text, delay }: { text: string; delay: number }) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.5 }}
            className="text-[#cccccc]"
        >
            {text}
        </motion.span>
    );
}

