import { Globe, Shield, Target, Lightbulb, Heart, Compass, Cog, Rocket, Signal, Network, Users, BarChart3 } from "lucide-react";
import React from "react";

// ═══ ABOUT PAGE DATA ═══
export const aboutValues = [
    { icon: Target, title: "Precision Engineering", description: "Every solution is architected with meticulous attention to detail — signal integrity, redundancy modeling, and capacity planning built into every design." },
    { icon: Shield, title: "Uncompromising Standards", description: "We hold ourselves to international benchmarks of quality. Every deployment is tested, validated, and documented to the highest specifications." },
    { icon: Lightbulb, title: "Innovation-First Thinking", description: "From 5G readiness to intelligent power systems, we engineer for the future — not just the present. Forward-compatible by design." },
];

export const aboutPhilosophy = [
    { title: "Engineering Excellence", desc: "Infrastructure isn't built — it's engineered. We approach every project with the rigor of scientific methodology and the precision of aerospace-grade systems." },
    { title: "Client-Centric Design", desc: "Your requirements aren't just inputs to our process — they define it. Every architecture is tailored, every solution bespoke." },
    { title: "Future-Ready Architecture", desc: "Technology evolves. We engineer systems with modular scalability so your infrastructure grows with your ambitions, not against them." },
    { title: "Operational Resilience", desc: "Downtime is not an option. Our systems are designed with redundant pathways, automated failovers, and proactive monitoring from day one." },
];

export const aboutWhySimaak = [
    { icon: Globe, title: "Full-Spectrum Capability", desc: "Twelve specialized engineering divisions under one roof — from RF planning to power systems to security. One partner, zero coordination gaps." },
    { icon: Heart, title: "Partnership, Not Procurement", desc: "We don't deliver and disappear. We build long-term technical relationships with continuous optimization, monitoring, and strategic advisory." },
    { icon: Compass, title: "Tailored Architecture", desc: "No two networks are the same. We design custom topologies engineered specifically for your geography, traffic patterns, and growth trajectory." },
];

// ═══ PORTFOLIO PAGE DATA ═══
export const solutionDomains = [
    {
        title: "Optical Transport Networks",
        category: "DWDM & Fiber",
        desc: "High-capacity optical backbone architecture with wavelength-division multiplexing, passive optical networks, and long-haul fiber engineering for maximum throughput.",
        tags: ["DWDM", "xPON", "FTTX", "Fiber Optic"],
        capability: "We engineer resilient fiber-optic pathways designed for terabit-scale data transport across diverse terrain.",
        imagePath: "/OPTICAL TRANSPORT NETWORKS.jpg"
    },
    {
        title: "5G & Wireless Core Systems",
        category: "Next-Gen Wireless",
        desc: "End-to-end wireless infrastructure from macro-site deployment to small cell densification, massive MIMO optimization, and private 5G network architecture.",
        tags: ["5G NR", "MIMO", "Small Cells", "Private LTE"],
        capability: "Complete air-interface engineering for carrier-grade and enterprise wireless connectivity.",
        imagePath: "/5G & wireless core system.jpg"
    },
    {
        title: "Intelligent Power Systems",
        category: "Green Energy & UPS",
        desc: "Hybrid solar-battery-grid configurations with intelligent load balancing, remote telemetry, and predictive maintenance for continuous uptime at every node.",
        tags: ["Solar", "UPS", "Hybrid Energy", "Remote Monitoring"],
        capability: "Sustainable power architecture that keeps infrastructure operational in the most challenging environments.",
        imagePath: "/intelligence power system.jpg"
    },
    {
        title: "Secure Enterprise Networks",
        category: "SD-WAN & Security",
        desc: "Software-defined campus and wide-area networks with layered cybersecurity, cloud-connect architectures, and zero-trust access frameworks.",
        tags: ["SD-WAN", "Cybersecurity", "Cloud", "Zero Trust"],
        capability: "Enterprise-grade network ecosystems built for resilience, compliance, and seamless scalability.",
        imagePath: "/secure enterprise networks.jpg"
    },
];

// ═══ SERVICES PAGE DATA ═══
export const servicesApproach = [
    { icon: Compass, title: "Survey & Audit", desc: "Comprehensive RF site surveys, terrain analysis, and infrastructure auditing." },
    { icon: Cog, title: "Architect & Design", desc: "Custom topology with redundancy modeling, capacity planning, and link budgeting." },
    { icon: Rocket, title: "Deploy & Commission", desc: "Precision construction, integration testing, and full field commissioning." },
    { icon: BarChart3, title: "Monitor & Optimize", desc: "Continuous performance analytics, proactive maintenance, and optimization." },
];
