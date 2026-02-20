"use client";

import React from "react";
import { Vortex } from "./Vortex";

export function MoltenSilk() {
    return (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            <Vortex
                backgroundColor="transparent"
                rangeY={160}
                particleCount={500}
                baseHue={42} // Simaak Gold
                baseSpeed={0.2}
                rangeSpeed={1.5}
                baseRadius={0.8}
                rangeRadius={2.2}
                containerClassName="h-full w-full"
            />
            {/* Overlay mask to ensure content readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6]/40 via-transparent to-[#faf9f6]/60 pointer-events-none" />
        </div>
    );
}
