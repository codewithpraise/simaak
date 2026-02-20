"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

/* ═══════════════════════════════════════════
   Magnetic Button — Premium CTA component
   Constant shimmer sweep, gold glow aura,
   magnetic pull, touch support.
   
   Supports:
   - Internal routes via Next Link (/contact, /services)
   - External URLs via native <a> (https://, mailto:, tel:)
   - Button mode for forms (type="submit")
   ═══════════════════════════════════════════ */

interface Props {
    href?: string;
    children: React.ReactNode;
    variant?: "primary" | "outline";
    size?: "default" | "sm";
    className?: string;
    prefetch?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    showArrow?: boolean;
}

function isExternalUrl(href: string): boolean {
    return /^(https?:|mailto:|tel:|#)/.test(href);
}

export function MagneticButton({
    href,
    children,
    variant = "primary",
    size = "default",
    className = "",
    prefetch = true,
    onClick,
    type = "button",
    showArrow = true,
}: Props) {
    const ref = useRef<any>(null);
    const [hovered, setHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 350, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 350, damping: 25 });

    const glowOpacity = useTransform(springX, [-15, 0, 15], [0.4, 0.8, 0.4]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        mouseX.set(dx * 0.25);
        mouseY.set(dy * 0.25);
    }, [mouseX, mouseY]);

    const handleMouseLeave = useCallback(() => {
        mouseX.set(0);
        mouseY.set(0);
        setHovered(false);
    }, [mouseX, mouseY]);

    const isPrimary = variant === "primary";
    const isSmall = size === "sm";
    const pad = isSmall ? "px-5 py-2.5" : "px-8 py-4";
    const textSize = isSmall ? "text-xs" : "text-sm";

    const content = (
        <>
            {/* Blue glow aura */}
            <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                    opacity: glowOpacity,
                    background: isPrimary
                        ? "radial-gradient(circle at 50% 50%, rgba(62, 139, 189, 0.20) 0%, transparent 70%)"
                        : "radial-gradient(circle at 50% 50%, rgba(62, 139, 189, 0.12) 0%, transparent 70%)",
                }}
                animate={{ scale: hovered ? 1.3 : 1 }}
                transition={{ duration: 0.5 }}
            />

            {/* CONSTANT shimmer sweep — always running */}
            <div
                className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
            >
                <div
                    className="absolute inset-0 btn-constant-shimmer"
                    style={{
                        background: isPrimary
                            ? "linear-gradient(105deg, transparent 30%, rgba(62, 139, 189, 0.25) 45%, rgba(255,255,255,0.15) 50%, rgba(62, 139, 189, 0.25) 55%, transparent 70%)"
                            : "linear-gradient(105deg, transparent 30%, rgba(62, 139, 189, 0.15) 45%, rgba(255,255,255,0.10) 50%, rgba(62, 139, 189, 0.15) 55%, transparent 70%)",
                    }}
                />
            </div>

            {/* Border glow — always visible on primary, brighter on hover */}
            {isPrimary && (
                <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                        border: "1px solid rgba(62, 139, 189, 0.2)",
                    }}
                    animate={{ opacity: hovered ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* Outer glow ring on hover */}
            <motion.div
                className="absolute -inset-1 rounded-full pointer-events-none"
                style={{
                    boxShadow: "0 0 20px rgba(62, 139, 189, 0.15), 0 0 40px rgba(62, 139, 189, 0.05)",
                }}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            />

            {/* Content */}
            <span className={`relative z-10 ${textSize} font-medium tracking-[0.15em] uppercase`}>
                {children}
            </span>

            {/* Arrow */}
            {showArrow && (
                <motion.span
                    className="relative z-10"
                    animate={{ x: hovered ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                </motion.span>
            )}
        </>
    );

    const commonClassName = `
        relative group inline-flex items-center gap-2.5 overflow-hidden
        rounded-full transition-all duration-500
        ${isPrimary
            ? `bg-[#0a0a0a] text-white ${pad} shadow-[0_2px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_30px_rgba(62,139,189,0.2)]`
            : `bg-transparent text-charcoal border border-charcoal/20 ${pad} hover:border-gold/40 hover:shadow-[0_4px_30px_rgba(62,139,189,0.1)]`
        }
        ${className}
    `;

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (!ref.current || !e.touches[0]) return;
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.touches[0].clientX - cx;
        const dy = e.touches[0].clientY - cy;
        mouseX.set(dx * 0.25);
        mouseY.set(dy * 0.25);
        setHovered(true);
    }, [mouseX, mouseY]);

    const handleTouchEnd = useCallback(() => {
        mouseX.set(0);
        mouseY.set(0);
        setHovered(false);
    }, [mouseX, mouseY]);

    const interactionProps = {
        onMouseMove: handleMouseMove,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: handleMouseLeave,
        onTouchMove: handleTouchMove,
        onTouchStart: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onTouchCancel: handleTouchEnd,
    };

    // Determine render mode: internal Link, external <a>, or <button>
    const isExternal = href && isExternalUrl(href);
    const isInternal = href && !isExternal;

    return (
        <motion.div
            style={{ x: springX, y: springY }}
            className="inline-block"
        >
            {isInternal ? (
                <Link
                    ref={ref}
                    href={href}
                    prefetch={prefetch}
                    className={commonClassName}
                    {...interactionProps}
                >
                    {content}
                </Link>
            ) : isExternal ? (
                <a
                    ref={ref}
                    href={href}
                    target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                    className={commonClassName}
                    {...interactionProps}
                >
                    {content}
                </a>
            ) : (
                <button
                    ref={ref}
                    type={type}
                    onClick={onClick}
                    className={commonClassName}
                    {...interactionProps}
                >
                    {content}
                </button>
            )}
        </motion.div>
    );
}
