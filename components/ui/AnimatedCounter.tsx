"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════
   AnimatedCounter — Scroll-triggered number
   animation with smooth counting effect.
   Handles: "12", "24/7", "99.99%", "250+",
   and pure text like "End-to-End", "Zero".
   ═══════════════════════════════════════════ */

interface Props {
    value: string;
    className?: string;
    duration?: number;
}

function parseTarget(value: string): { num: number; prefix: string; suffix: string; decimals: number; isTextOnly: boolean } {
    // If no digits are present, it's definitely text-only
    if (!/\d/.test(value)) return { num: 0, prefix: "", suffix: value, decimals: 0, isTextOnly: true };

    // Special case for "24/7" or similar hyphenated/slashed numeric values that shouldn't animate
    if (value.includes("/") || value.includes("-") && value.split("-").length > 2) {
        return { num: 0, prefix: "", suffix: value, decimals: 0, isTextOnly: true };
    }

    // Extract numeric part and surrounding text
    const match = value.match(/^([^\d]*?)([\d,]+\.?\d*)(.*?)$/);
    if (!match) return { num: 0, prefix: "", suffix: value, decimals: 0, isTextOnly: true };

    const prefix = match[1];
    const numStr = match[2].replace(/,/g, "");
    const suffix = match[3];
    const num = parseFloat(numStr);
    const decimalIndex = numStr.indexOf(".");
    const decimals = decimalIndex >= 0 ? numStr.length - decimalIndex - 1 : 0;

    return { num, prefix, suffix, decimals, isTextOnly: false };
}

function formatNumber(n: number, decimals: number): string {
    const fixed = n.toFixed(decimals);
    const [whole, dec] = fixed.split(".");
    // Add commas
    const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return dec ? `${withCommas}.${dec}` : withCommas;
}

export function AnimatedCounter({ value, className = "", duration = 2000 }: Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const [started, setStarted] = useState(false);
    const [display, setDisplay] = useState("");
    const { num, prefix, suffix, decimals, isTextOnly } = parseTarget(value);

    const animate = useCallback(() => {
        // Pure text values — just show immediately with a typewriter-like reveal
        if (isTextOnly) {
            setDisplay(value);
            return;
        }

        const startTime = performance.now();
        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * num;
            setDisplay(`${prefix}${formatNumber(current, decimals)}${suffix}`);
            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };
        requestAnimationFrame(tick);
    }, [num, prefix, suffix, decimals, duration, isTextOnly, value]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    animate();
                    obs.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [animate, started]);

    // Before animation starts, show a clean placeholder
    const placeholder = isTextOnly ? value : `${prefix}0${suffix}`;

    return (
        <span ref={ref} className={className}>
            {started ? display : placeholder}
        </span>
    );
}
