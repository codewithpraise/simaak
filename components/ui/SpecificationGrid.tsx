"use client";

import React from "react";
import { Reveal } from "./Reveal";

interface SpecItem {
    label: string;
    value: string;
}

interface Props {
    specs: SpecItem[];
}

export function SpecificationGrid({ specs }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, i) => (
                <div
                    key={i}
                    className="relative group rounded-3xl p-[1px] overflow-hidden bg-gradient-to-b from-border/50 to-transparent hover:from-gold/30 hover:to-transparent transition-all duration-700 h-full"
                >
                    {/* Inner Content Card */}
                    <div className="bg-surface/90 backdrop-blur-md rounded-[23px] p-6 lg:p-8 space-y-4 h-full relative z-10 transition-colors duration-700 group-hover:bg-surface/60">
                        {/* Status Dot & Label */}
                        <div className="flex items-center gap-3">
                            <div className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-30 group-hover:opacity-75 transition-opacity" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold/50 group-hover:bg-gold transition-colors" />
                            </div>
                            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-text-muted group-hover:text-gold/80 transition-colors">
                                {spec.label}
                            </span>
                        </div>

                        {/* Value Text */}
                        <div className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-charcoal leading-tight tracking-tight">
                            {spec.value}
                        </div>
                    </div>

                    {/* Gradient Glow Effect on Hover */}
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 group-hover:duration-300 z-0 pointer-events-none" />
                </div>
            ))}
        </div>
    );
}
