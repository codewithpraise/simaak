"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [hovered, setHovered] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Navbar is now permanently visible with glass styling
        setScrolled(true);
    }, []);

    useEffect(() => setMobileOpen(false), [pathname]);
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            {/* Desktop */}
            <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[1000] hidden md:block w-[95%] max-w-7xl">
                <motion.nav
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    className="rounded-full transition-all duration-500 backdrop-blur-xl bg-white/70 shadow-[0_2px_30px_rgba(62,139,189,0.08),0_0_0_1px_rgba(62,139,189,0.15)] border border-gold/10 mx-auto overflow-hidden"
                >
                    <div className="flex items-center justify-between px-8 py-0.5">
                        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
                            <Image
                                src="/simaak logo-1.svg"
                                alt="Simaak Tech"
                                width={320}
                                height={100}
                                className="h-20 w-auto -my-2"
                                priority
                            />
                        </Link>

                        <AnimatePresence>
                            {(hovered || scrolled) && (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                                    className="flex items-center gap-2 overflow-hidden"
                                >
                                    {navLinks.map((link) => {
                                        const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                                        return (
                                            <Link key={link.name} href={link.href} prefetch={true}
                                                className={`relative px-5 py-2 rounded-full text-[16px] font-bold tracking-widest whitespace-nowrap transition-all duration-300 ${active
                                                    ? "text-gold"
                                                    : "text-text-secondary hover:text-charcoal hover:bg-black/[0.03]"
                                                    }`}
                                            >
                                                <span className="relative z-10">{link.name.toUpperCase()}</span>
                                                {/* Active gold underline */}
                                                {active && (
                                                    <motion.span
                                                        layoutId="nav-underline"
                                                        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-[60%] rounded-full"
                                                        style={{
                                                            background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
                                                        }}
                                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                    />
                                                )}
                                            </Link>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Link href="/contact" prefetch={true}
                            className="ml-4 px-10 py-3 rounded-full bg-charcoal text-white text-[14px] font-black tracking-widest uppercase hover:bg-gold transition-all whitespace-nowrap btn-glow shadow-lg"
                            style={{ animation: "glow-breathe 3s ease-in-out infinite" }}
                        >
                            Connect
                        </Link>
                    </div>
                    {/* Gold shimmer border bottom */}
                    {(hovered || scrolled) && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none" />
                    )}
                </motion.nav>
            </div>

            {/* Mobile */}
            <div className="fixed top-0 left-0 right-0 z-[1000] md:hidden">
                <div className={`flex items-center justify-between px-5 py-3.5 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-white/70 border-b border-black/[0.04]" : "bg-transparent"
                    }`}>
                    <Link href="/" className="flex items-center">
                        <Image src="/simaak logo-1.svg" alt="Simaak Tech" width={220} height={64} className="h-14 sm:h-16 w-auto" priority />
                    </Link>
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-text-secondary touch-glow" aria-label="Menu">
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] bg-cream md:hidden flex flex-col"
                    >
                        <div className="flex-1 flex flex-col justify-center px-8 gap-1 pt-16">
                            {navLinks.map((link, i) => {
                                const active = pathname === link.href;
                                return (
                                    <motion.div key={link.name} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 + 0.1 }}>
                                        <Link href={link.href} prefetch={true}
                                            className={`block py-3.5 text-2xl font-display font-bold tracking-tight transition-colors ${active ? "text-gold-shine" : "text-text-secondary active:text-gold"
                                                }`}
                                        >
                                            {link.name}
                                            {active && (
                                                <span className="inline-block ml-3 w-2 h-2 rounded-full bg-gold gold-dot-pulse" />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="px-8 pb-8">
                            <Link href="/contact" prefetch={true} className="block w-full py-3.5 bg-charcoal text-white font-display font-bold text-center text-sm tracking-wide rounded-xl btn-shimmer">
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
