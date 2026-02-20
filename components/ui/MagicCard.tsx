"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect } from "react";

/**
 * MagicCard — Inspired by Magic UI
 * A premium spotlight effect that follows the cursor and highlights borders on hover.
 */

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
}

export function MagicCard({
    children,
    className,
    gradientSize = 200,
    gradientColor = "rgba(212, 163, 49, 0.15)",
    gradientOpacity = 0.8,
}: MagicCardProps) {
    const mouseX = useMotionValue(-gradientSize);
    const mouseY = useMotionValue(-gradientSize);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const { left, top } = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
        },
        [mouseX, mouseY]
    );

    const handleMouseLeave = useCallback(() => {
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
    }, [mouseX, mouseY, gradientSize]);

    const handleTouchMove = useCallback(
        (e: React.TouchEvent<HTMLDivElement>) => {
            if (e.touches[0]) {
                const { left, top } = e.currentTarget.getBoundingClientRect();
                mouseX.set(e.touches[0].clientX - left);
                mouseY.set(e.touches[0].clientY - top);
            }
        },
        [mouseX, mouseY]
    );

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseLeave}
            onTouchCancel={handleMouseLeave}
            className={cn(
                "group relative flex size-full overflow-hidden rounded-2xl bg-surface border border-border text-black touch-glow",
                className
            )}
        >
            <div className="relative z-10 w-full">{children}</div>

            {/* Premium Shimmer Border Layer */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              ${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 80%
            )
          `,
                }}
            />

            {/* Subtle inner spotlight */}
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              ${gradientSize * 1.5}px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 163, 49, 0.03),
              transparent 80%
            )
          `,
                }}
            />
        </div>
    );
}
