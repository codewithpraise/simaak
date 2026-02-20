"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
    words: string;
    className?: string;
}

export function TextGenerateEffect({ words, className = "" }: Props) {
    const ref = useRef<HTMLHeadingElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const split = words.split(" ");

    return (
        <h1 ref={ref} className={className} style={{ position: "relative" }}>
            {split.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                    animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                    transition={{
                        delay: i * 0.06,
                        duration: 0.5,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className="inline-block mr-[0.3em]"
                >
                    {word}
                </motion.span>
            ))}
            {/* Gold shimmer sweep after text appears */}
            {inView && (
                <motion.span
                    initial={{ left: "-100%", opacity: 0 }}
                    animate={{ left: "110%", opacity: [0, 1, 1, 0] }}
                    transition={{
                        delay: split.length * 0.06 + 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        width: "40%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(212,163,49,0.15), rgba(212,163,49,0.25), rgba(212,163,49,0.15), transparent)",
                        pointerEvents: "none",
                        zIndex: 1,
                    }}
                />
            )}
        </h1>
    );
}
