import {
    Globe, Signal, Zap, Shield, Radio, Cpu, Network, Server,
    CheckCircle2, Building2, Factory, Landmark, Plane, Clock, Layers
} from "lucide-react";
import React from "react";

export const featuredServices = [
    { title: "Network Design", description: "Strategic RF engineering and topology mapping for mission-critical infrastructure.", icon: <Globe className="w-5 h-5" />, slug: "network-design-planning", imagePath: "/network-design-image.jpg" },
    { title: "Wireless Systems", description: "5G core integration and cellular deployment with zero-latency architecture.", icon: <Radio className="w-5 h-5" />, slug: "wireless-network-solutions", imagePath: "/wireless-image.jpg" },
    { title: "Fiber Optic", description: "End-to-end FTTH/FTTX deployment with DWDM high-capacity optical transport.", icon: <Layers className="w-5 h-5" />, slug: "fixed-network-solutions", imagePath: "/fixed-network-image.jpg" },
    { title: "RF Propagation", description: "Advanced signal modeling with terrain-aware algorithms and interference mitigation.", icon: <Zap className="w-5 h-5" />, slug: "rf-propagation-coverage", imagePath: "/rf-propagation-image.jpg" },
    { title: "Microwave Backhaul", description: "High-capacity point-to-point links delivering fiber-like performance over the air.", icon: <Signal className="w-5 h-5" />, slug: "microwave-backhaul-engineering", imagePath: "/microwave-image.jpg" },
    { title: "Operations", description: "Continuous network surveillance and proactive maintenance for maximum uptime.", icon: <Cpu className="w-5 h-5" />, slug: "operations-maintenance", imagePath: "/ops-maint-image.jpg" },
];

export const stats = [
    { value: "15", label: "Service Divisions", icon: Layers },
    { value: "24/7", label: "Operations Ready", icon: Clock },
    { value: "End-to-End", label: "Lifecycle Management", icon: Network },
    { value: "Zero", label: "Downtime Architecture", icon: Server },
];

export const processSteps = [
    { title: "Discover", desc: "Site surveys, RF analysis, and comprehensive requirement mapping." },
    { title: "Architect", desc: "Topology design, capacity planning, and redundancy engineering." },
    { title: "Deploy", desc: "Precision construction, integration testing, and commissioning." },
    { title: "Optimize", desc: "Continuous monitoring, predictive maintenance, and performance tuning." },
];

export const industries = [
    { name: "Telecom Operators", icon: Signal, desc: "National-scale network infrastructure." },
    { name: "Government", icon: Landmark, desc: "Sovereign communication systems." },
    { name: "Enterprise", icon: Building2, desc: "Campus-grade connectivity." },
    { name: "Industrial", icon: Factory, desc: "IoT-ready infrastructure." },
    { name: "Aviation", icon: Plane, desc: "Mission-critical transit comms." },
    { name: "Smart Cities", icon: Globe, desc: "Urban digital grids." },
];

export const capabilities = [
    "End-to-end lifecycle management",
    "Multi-vendor system integration",
    "Network Operations Center capability",
    "International quality benchmarks",
    "Field-certified engineering teams",
    "Zero-downtime architecture design",
];
