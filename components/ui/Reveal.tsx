"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    delay?: number;
    center?: boolean;
}

export function Reveal({ children, className = "", delay = 0, center = false }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVis(true); obs.disconnect(); } },
            { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cn(className, center ? "flex flex-col items-center" : "")}
            style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(14px) scale(0.97)" : "translateY(14px) scale(0.97)",
                // Fixed transform logic below properly
                ...({
                    transform: vis ? "translateY(0) scale(1)" : "translateY(10px) scale(0.98)",
                    filter: vis ? "blur(0px)" : "blur(2px)",
                    transition: `opacity 0.4s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 0.4s cubic-bezier(0.23,1,0.32,1) ${delay}s, filter 0.4s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
                    willChange: vis ? "auto" : "opacity, transform, filter",
                } as any)
            }}
        >
            {children}
        </div>
    );
}

import { cn } from "@/lib/utils";

