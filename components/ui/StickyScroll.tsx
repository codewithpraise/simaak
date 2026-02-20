"use client";
import React, { useRef, useState, useMemo } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * StickyScroll — Inspired by Aceternity UI
 * A sticky container that reveals text/content as the user scrolls.
 */

interface StickyScrollProps {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode;
    }[];
    contentClassName?: string;
}

export const StickyScroll = ({
    content,
    contentClassName,
}: StickyScrollProps) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useScroll({
        target: ref,
        offset: ["start start", "end start"],
    }).scrollYProgress.on("change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "var(--surface)",
        "var(--cream)",
        "var(--surface-2)",
    ];

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        backgroundColors
    );

    return (
        <motion.div
            style={{ backgroundColor }}
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-2xl p-10 border border-border"
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl font-display font-bold text-charcoal"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-text-secondary text-sm max-w-sm mt-10 leading-relaxed"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <motion.div
                className={cn(
                    "hidden lg:block h-60 w-80 rounded-2xl bg-gold-dim border border-gold/10 sticky top-10 overflow-hidden",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </motion.div>
        </motion.div>
    );
};
