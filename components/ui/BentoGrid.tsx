"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * BentoGrid — Inspired by Aceternity UI / Magic UI
 * A multi-column grid for technical specs and insights.
 */

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-500 shadow-input dark:shadow-none p-4 bg-cream border border-border justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-display font-bold text-charcoal mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-text-secondary text-xs">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
