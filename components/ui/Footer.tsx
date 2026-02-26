"use client";

import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";
import Image from "next/image";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Developer", href: "/developer" },
    { name: "Contact", href: "/contact" },
];

export function Footer() {
    return (
        <footer className="relative border-t border-border bg-surface-2 overflow-hidden">
            <div className="absolute inset-0 noise" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,163,49,0.03),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(212,163,49,0.02),transparent_50%)] pointer-events-none" />

            {/* Animated gold divider */}
            <div className="gold-divider" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                    <div className="md:col-span-5 space-y-4">
                        <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                            <Image src="/simaak logo-1.svg" alt="Simaak Tech" width={240} height={76} className="h-20 w-auto" />
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                            Telecommunications infrastructure engineered for resilience, precision, and performance.
                        </p>
                        <MagneticButton href="/contact" size="sm" prefetch={true}>Start a Project</MagneticButton>
                    </div>

                    <div className="md:col-span-3 space-y-3">
                        <h5 className="text-[9px] font-mono text-text-muted uppercase tracking-[0.3em]">Navigation</h5>
                        <div className="flex flex-col gap-1.5">
                            {links.map(l => (
                                <Link key={l.name} href={l.href} prefetch={true} className="link-glow text-text-secondary text-sm w-fit">{l.name}</Link>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-4 space-y-3">
                        <h5 className="text-[9px] font-mono text-text-muted uppercase tracking-[0.3em]">Contact</h5>
                        <div className="space-y-2.5 text-text-secondary text-sm">
                            <div className="flex items-center gap-2.5">
                                <div className="p-1.5 rounded-md bg-gold-dim"><Mail className="w-3 h-3 text-gold/50" /></div>
                                <a href="mailto:info@simaak.com" className="link-glow">info@simaak.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[10px] text-text-muted">&copy; {new Date().getFullYear()} Simaak Technologies. All rights reserved.</span>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold gold-dot-pulse" />
                        <span className="text-[8px] font-mono text-gold/40 tracking-[0.3em] uppercase">Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
