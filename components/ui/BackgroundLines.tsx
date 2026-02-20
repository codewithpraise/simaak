"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * BackgroundLines — Inspired by Aceternity UI / height.app
 * Animated SVG wave paths that create flowing patterns behind content.
 * Pure Framer Motion, no external dependencies.
 */

function generatePath(seed: number, width: number, amplitude: number, frequency: number): string {
    const points: string[] = [];
    const steps = 50;
    for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * width;
        const y =
            amplitude *
            Math.sin((i / steps) * Math.PI * frequency + seed) *
            Math.cos((i / steps) * Math.PI * 0.5 + seed * 0.3);
        if (i === 0) points.push(`M ${x} ${250 + y}`);
        else points.push(`L ${x} ${250 + y}`);
    }
    return points.join(" ");
}

const LINE_COUNT = 12;
const CONTAINER_WIDTH = 1400;

const lines = Array.from({ length: LINE_COUNT }, (_, i) => {
    const seed = i * 1.7;
    const amplitude = 30 + (i % 3) * 25;
    const frequency = 1.5 + (i % 4) * 0.4;
    return {
        d: generatePath(seed, CONTAINER_WIDTH, amplitude, frequency),
        d2: generatePath(seed + 2, CONTAINER_WIDTH, amplitude * 1.1, frequency * 0.9),
        opacity: 0.04 + (i % 3) * 0.02,
        strokeWidth: 1 + (i % 2) * 0.5,
        duration: 6 + (i % 4) * 2,
        delay: i * 0.3,
    };
});

export function BackgroundLines({ children }: { children?: React.ReactNode }) {
    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* SVG wave container */}
            <svg
                viewBox={`0 0 ${CONTAINER_WIDTH} 500`}
                fill="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
            >
                {lines.map((line, i) => (
                    <motion.path
                        key={i}
                        d={line.d}
                        stroke="url(#line-gradient)"
                        strokeWidth={line.strokeWidth}
                        strokeLinecap="round"
                        fill="none"
                        opacity={line.opacity}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: line.opacity,
                            d: [line.d, line.d2, line.d],
                        }}
                        transition={{
                            pathLength: { duration: 2, delay: line.delay * 0.15, ease: "easeOut" },
                            opacity: { duration: 1.5, delay: line.delay * 0.15 },
                            d: {
                                duration: line.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatType: "mirror",
                            },
                        }}
                    />
                ))}

                {/* Accent lines — brighter, fewer */}
                {[0, 4, 8].map((idx) => {
                    const line = lines[idx];
                    return (
                        <motion.path
                            key={`accent-${idx}`}
                            d={line.d}
                            stroke="url(#accent-gradient)"
                            strokeWidth={0.8}
                            strokeLinecap="round"
                            fill="none"
                            opacity={0.12}
                            animate={{
                                d: [line.d, line.d2, line.d],
                            }}
                            transition={{
                                d: {
                                    duration: line.duration,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "mirror",
                                },
                            }}
                        />
                    );
                })}

                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="20%" stopColor="#d4a331" />
                        <stop offset="50%" stopColor="#dab34d" />
                        <stop offset="80%" stopColor="#d4a331" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="30%" stopColor="#f5e6be" />
                        <stop offset="50%" stopColor="#ffffff" />
                        <stop offset="70%" stopColor="#f5e6be" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Radial fade mask */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_25%,#faf9f6_70%)] pointer-events-none" />

            {/* Content layer */}
            {children && (
                <div className="relative z-20 w-full h-full">
                    {children}
                </div>
            )}
        </div>
    );
}
