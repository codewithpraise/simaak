"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
    question: string;
    answer: string;
}

interface Props {
    items: AccordionItem[];
}

export function AccordionSection({ items }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-2">
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div
                        key={i}
                        className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                                ? "border-gold/25 bg-gold/[0.02] shadow-[0_4px_20px_rgba(212,163,49,0.06)]"
                                : "border-border bg-surface hover:border-gold/10"
                            }`}
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                        >
                            <span
                                className={`text-sm md:text-base font-display font-bold tracking-tight transition-colors ${isOpen ? "text-gold" : "text-charcoal group-hover:text-gold"
                                    }`}
                            >
                                {item.question}
                            </span>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                className={`shrink-0 ml-4 p-1 rounded-full transition-colors ${isOpen ? "bg-gold/10 text-gold" : "text-text-muted"
                                    }`}
                            >
                                <ChevronDown className="w-4 h-4" />
                            </motion.div>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                                >
                                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                                        <div className="h-px bg-gradient-to-r from-gold/15 via-gold/5 to-transparent mb-4" />
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
