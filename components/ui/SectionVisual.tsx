"use client";

import React from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────
   Decorative visual accent for section headers.
   Adds animated geometry next to headings to
   break the text-only monotony.
   ───────────────────────────────────────── */

interface Props {
    variant?: "dots" | "lines" | "hexgrid" | "pulse";
    className?: string;
}

/* Animated dot grid — 3×3 */
function DotGrid() {
    return (
        <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-gold/20"
                    initial={{ opacity: 0.15 }}
                    animate={{ opacity: [0.15, 0.5, 0.15] }}
                    transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}

/* Animated line stack */
function LineStack() {
    return (
        <div className="flex flex-col gap-1">
            {[24, 16, 20].map((w, i) => (
                <motion.div
                    key={i}
                    className="h-px bg-gradient-to-r from-gold/30 to-transparent"
                    style={{ width: w }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: [0, 1, 0.6, 1] }}
                    transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}

/* Mini hexagonal grid accent */
function HexGrid() {
    const hexSize = 10;
    const r = hexSize / 2;
    const pts = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 2;
        return `${r + r * Math.cos(a)},${r + r * Math.sin(a)}`;
    }).join(" ");

    return (
        <div className="flex gap-0.5">
            {[0, 1, 2].map(i => (
                <motion.svg
                    key={i}
                    width={hexSize}
                    height={hexSize}
                    viewBox={`0 0 ${hexSize} ${hexSize}`}
                    initial={{ opacity: 0.1 }}
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                >
                    <polygon points={pts} fill="rgba(212,163,49,0.06)" stroke="rgba(212,163,49,0.2)" strokeWidth="0.5" />
                </motion.svg>
            ))}
        </div>
    );
}

/* Pulse ring effect */
function PulseRing() {
    return (
        <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-gold/50 gold-dot-pulse" />
            <motion.div
                className="absolute inset-0 rounded-full border-[1.5px] border-gold/30"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
        </div>
    );
}

export function SectionVisual({ variant = "dots", className = "" }: Props) {
    return (
        <div className={`flex items-center ${className}`}>
            {variant === "dots" && <DotGrid />}
            {variant === "lines" && <LineStack />}
            {variant === "hexgrid" && <HexGrid />}
            {variant === "pulse" && <PulseRing />}
        </div>
    );
}
