"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Send, Clock, Globe, ExternalLink, CheckCircle2 } from "lucide-react";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const info = [
    { icon: Mail, label: "Email", value: "info.simaak@gmail.com", href: "mailto:info.simaak@gmail.com" },
    { icon: Clock, label: "Response Time", value: "Under 24 Hours" },
    { icon: Globe, label: "Availability", value: "24/7 Operations Ready" },
];

const services = [
    "Network Design & Planning", "Fixed Network Solutions", "Wireless Systems",
    "Construction & Deployment", "Enterprise IT & Connectivity", "Operations & Maintenance",
    "Power & Energy Systems", "Security & Surveillance", "Professional Consulting", "General Inquiry",
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`${form.service || "Project Inquiry"} — ${form.company || form.name}`);
        const body = encodeURIComponent(
            `Hi Simaak Team,\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\nService: ${form.service || "General"}\n\n${form.message}\n\nBest regards,\n${form.name}`
        );
        // Open Gmail compose in a new tab — guaranteed to work in any browser
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info.simaak@gmail.com&su=${subject}&body=${body}`;
        window.open(gmailUrl, "_blank");
    };

    const ic = (field: string) =>
        `w-full p-3.5 rounded-xl bg-cream border text-charcoal text-sm outline-none placeholder:text-text-muted transition-all duration-300 ${focusedField === field
            ? "border-gold/40 shadow-[0_0_0_3px_rgba(212,163,49,0.08),0_0_20px_rgba(212,163,49,0.06)]"
            : "border-border hover:border-border-hover"
        }`;

    return (
        <main className="relative bg-cream" style={{ overflowX: "hidden" }}>
            <section className="relative pt-28 md:pt-40 pb-10 md:pb-14 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gold/[0.05] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none float-anim-slow" />
                <div className="max-w-4xl mx-auto space-y-5 relative z-30 pointer-events-none">
                    <Reveal className="flex items-center gap-3 text-gold">
                        <div className="h-px w-8 bg-gold" /><span className="text-[9px] font-mono tracking-[0.4em] uppercase">Direct Line</span>
                    </Reveal>
                    <TextGenerateEffect words="Initiate Partnership" className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] text-charcoal" />
                    <Reveal delay={0.3}>
                        <p className="max-w-md text-text-secondary text-base md:text-lg leading-relaxed pointer-events-auto">
                            Fill in your details and we&apos;ll open your email client with everything pre-filled. Hit send and we&apos;ll respond within 48 hours.
                        </p>
                    </Reveal>
                </div>
                <ScrollIndicator />
            </section>

            <section className="section-pad px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
                    <div className="lg:col-span-7">
                        <ContactFormCard form={form} setForm={setForm} focusedField={focusedField} setFocusedField={setFocusedField} handleSubmit={handleSubmit} ic={ic} />
                    </div>
                    <div className="lg:col-span-5 space-y-3">
                        {info.map((item, i) => (
                            <ContactInfoCard key={i} index={i} item={item} />
                        ))}
                        <Reveal delay={0.2} className="p-7 rounded-2xl bg-surface border border-border space-y-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)] card-sparkle relative overflow-hidden group">
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold/[0.04] rounded-full blur-[20px] pointer-events-none group-hover:bg-gold/[0.08] transition-all duration-700" />
                            <Globe className="w-5 h-5 text-gold/40 group-hover:text-gold transition-colors" />
                            <h4 className="text-lg font-display font-bold tracking-tight text-charcoal">Rapid <span className="text-gold-shine">Response</span></h4>
                            <p className="text-sm text-text-secondary leading-relaxed">Every inquiry receives a detailed technical response within 24 hours. Our engineering team is ready to scope your project.</p>
                            <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-gold gold-dot-pulse" /><span className="text-[9px] font-mono text-gold/40 tracking-[0.3em] uppercase">Engineering Team Ready</span></div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ContactFormCard({ form, setForm, focusedField, setFocusedField, handleSubmit, ic }: any) {
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);
    const springX = useSpring(x, { stiffness: 200, damping: 25 });
    const springY = useSpring(y, { stiffness: 200, damping: 25 });
    const rotateX = useTransform(springY, [0, 1], [3, -3]);
    const rotateY = useTransform(springX, [0, 1], [-3, 3]);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        x.set((clientX - rect.left) / rect.width);
        y.set((clientY - rect.top) / rect.height);
    };

    const handleLeave = () => { x.set(0.5); y.set(0.5); };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            onTouchMove={handleMove}
            onTouchEnd={handleLeave}
            className="relative p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden"
        >
            {/* Form card shimmer */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-[1]">
                <div className="absolute inset-0 card-constant-shimmer" style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(212,163,49,0.03) 42%, rgba(255,255,255,0.02) 50%, rgba(212,163,49,0.03) 58%, transparent 70%)",
                }} />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/[0.04] rounded-full blur-[30px] pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[9px] font-mono text-text-muted uppercase tracking-[0.3em]">Full Name</label>
                        <input type="text" required value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={ic("name")} placeholder="Your Name" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[9px] font-mono text-text-muted uppercase tracking-[0.3em]">Email</label>
                        <input type="email" required value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={ic("email")} placeholder="email@company.com" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[9px] font-mono text-text-muted uppercase tracking-[0.3em]">Company</label>
                        <input type="text" value={form.company}
                            onChange={e => setForm({ ...form, company: e.target.value })}
                            onFocus={() => setFocusedField("company")}
                            onBlur={() => setFocusedField(null)}
                            className={ic("company")} placeholder="Organization" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[9px] font-mono text-text-muted uppercase tracking-[0.3em]">Service</label>
                        <select value={form.service}
                            onChange={e => setForm({ ...form, service: e.target.value })}
                            onFocus={() => setFocusedField("service")}
                            onBlur={() => setFocusedField(null)}
                            className={ic("service") + " appearance-none"}>
                            <option value="" className="bg-cream">Select a service</option>
                            {services.map((s: string) => <option key={s} value={s} className="bg-cream">{s}</option>)}
                        </select>
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-text-muted uppercase tracking-[0.3em]">Project Details</label>
                    <textarea required rows={5} value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={ic("message") + " resize-none"} placeholder="Describe your requirements..." />
                </div>
                <button type="submit"
                    className="w-full py-3.5 rounded-xl bg-charcoal text-white font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2.5 btn-shimmer hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)]"
                >
                    <Send className="w-3.5 h-3.5" /> Open Email Client <ExternalLink className="w-3 h-3 opacity-50" />
                </button>
                <p className="text-[10px] text-text-muted text-center flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-gold/40" />
                    Your default email app will open with the details pre-filled.
                </p>
            </form>
        </motion.div>
    );
}

function ContactInfoCard({ item, index }: any) {
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
    };

    const handleLeave = () => { x.set(0.5); y.set(0.5); };

    return (
        <Reveal delay={index * 0.05}>
            <motion.div
                style={{ rotateX, rotateY, transformPerspective: 800 }}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onTouchMove={handleMove}
                onTouchEnd={handleLeave}
                className="relative p-5 p-6 rounded-2xl bg-surface border border-border flex items-start gap-4 group hover:border-gold/30 hover:shadow-[0_8px_40px_rgba(212,163,49,0.12)] transition-all duration-500 touch-glow overflow-hidden"
            >
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-[1]">
                    <div className="absolute inset-0 card-constant-shimmer" style={{
                        background: "linear-gradient(105deg, transparent 30%, rgba(212,163,49,0.04) 42%, rgba(255,255,255,0.03) 50%, rgba(212,163,49,0.04) 58%, transparent 70%)",
                    }} />
                </div>
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gold/[0.04] rounded-full blur-[15px] pointer-events-none group-hover:bg-gold/[0.10] transition-all duration-700" />
                <div className="relative z-10 p-3 rounded-lg bg-gold-dim text-gold/50 group-hover:text-gold group-hover:shadow-[0_0_16px_rgba(212,163,49,0.12)] transition-all">
                    <item.icon className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                    <div className="text-[10px] font-mono text-text-muted uppercase tracking-[0.3em] mb-1">{item.label}</div>
                    {item.href ? (
                        <a href={item.href} className="text-text-secondary text-base font-bold hover:text-gold transition-colors">{item.value}</a>
                    ) : (
                        <span className="text-text-secondary text-base font-bold">{item.value}</span>
                    )}
                </div>
            </motion.div>
        </Reveal>
    );
}
