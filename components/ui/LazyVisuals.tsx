"use client";

import dynamic from "next/dynamic";

// Only export components that are ACTUALLY used in the app
export const SectionVisual = dynamic(
    () => import("@/components/ui/SectionVisual").then((m) => m.SectionVisual),
    { ssr: false }
);

export const AnimatedCounter = dynamic(
    () => import("@/components/ui/AnimatedCounter").then((m) => m.AnimatedCounter),
    { ssr: false }
);

export const MagneticParticles = dynamic(
    () => import("@/components/ui/MagneticParticles").then((m) => m.MagneticParticles),
    { ssr: false }
);

export const ArchitecturalScene = dynamic(
    () => import("@/components/ui/ArchitecturalScene").then((m) => m.ArchitecturalScene),
    { ssr: false }
);

// Preload only what's used
if (typeof window !== "undefined") {
    import("@/components/ui/SectionVisual");
    import("@/components/ui/AnimatedCounter");
    import("@/components/ui/MagneticParticles");
    import("@/components/ui/ArchitecturalScene");
}
