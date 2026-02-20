"use client";

import React from "react";
import { motion } from "framer-motion";

export function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 right-10 z-30 flex flex-col items-center gap-3 pointer-events-none"
        >
            <div className="flex flex-col items-center gap-2">
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-gold/60 [writing-mode:vertical-lr]">
                    Scroll
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-gold/50 via-gold/20 to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{
                            y: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-gold to-transparent"
                    />
                </div>
            </div>
        </motion.div>
    );
}
