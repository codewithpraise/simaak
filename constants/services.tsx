import React from "react";
import {
    Globe, Radio, Layers, Zap, Signal, Cpu,
    Shield, Activity, Server, Camera, Ruler,
    Lightbulb, Satellite, Search, Antenna,
    Database, Network, ZapOff, HardDrive,
    BarChart3, Settings, Users, Workflow
} from "lucide-react";

export interface ServiceItem {
    slug: string;
    title: string;
    subtitle: string;
    intro: string;
    content: string[];
    steps: { title: string; desc: string }[];
    features: string[];
    process: string[];
    technicalSpecs?: { label: string; value: string }[];
    faq?: { question: string; answer: string }[];
    imagePath?: string;
    icon: React.ReactNode;
}

export const serviceData: ServiceItem[] = [
    {
        slug: "network-design-planning",
        title: "Network Design & Planning",
        icon: <Globe />,
        subtitle: "Strategic Signal Architecture",
        intro: "Precision RF engineering and strategic topology mapping for high-capacity national networks. We architect the invisible foundations that allow data to flow without friction.",
        content: [
            "At Simaak Tech, our Network Design and Planning division operates at the intersection of mathematical precision and topographical reality. We architect the invisible foundations that allow data to flow without friction across the diverse terrains of Pakistan.",
            "Our approach begins with high-fidelity RF (Radio Frequency) simulations. Utilizing advanced propagation models, we analyze signal attenuation, interference patterns, and capacity requirements for 5G, LTE, and legacy systems.",
            "Beyond radio planning, we specialize in Backbone Topology Design. We map resilient fiber-optic paths that integrate redundant fail-safes, utilizing GIS to navigate urban densities and rural expanses."
        ],
        steps: [
            { title: "RF Simulation", desc: "Advanced propagation modeling for signal optimization and interference mitigation." },
            { title: "Topographical Audit", desc: "GIS-powered terrain analysis and site selection for maximum coverage." },
            { title: "Topology Synthesis", desc: "Redundant backbone architecture with fail-safe routing." },
            { title: "Commissioning Blueprint", desc: "Final technical documentation and regulatory compliance package." }
        ],
        features: [
            "Optimized Spectral Efficiency",
            "Future-Proof Scalability for 5G/6G",
            "Minimized Interference Patterns",
            "Regulatory Compliance Assurance",
            "Advanced Propagation Modeling"
        ],
        process: ["RF Simulation", "Topographical Audit", "Topology Synthesis", "Final Commissioning Blueprint"],
        imagePath: "/network-design-image.jpg"
    },
    {
        slug: "fixed-network-solutions",
        title: "Fixed Network Solutions",
        icon: <Layers />,
        subtitle: "The Optical Foundation",
        intro: "Engineering the resilient fiber-optic arteries that power a connected nation. End-to-end solutions for high-capacity optical transport systems.",
        content: [
            "The fixed network represents the bedrock of national digital transformation. Simaak Tech provides end-to-end solutions for the deployment of high-capacity optical transport systems, from metropolitan rings to long-haul backbones.",
            "We specialize in xPON deployment, architecting gigabit-capable passive optical networks that deliver unprecedented bandwidth to both residential and enterprise sectors.",
            "Our teams manage the entire lifecycle including underground and aerial fiber deployment, OSP engineering, and active equipment commissioning."
        ],
        steps: [
            { title: "Path Diversity Mapping", desc: "Identifying optimal redundant routes for fiber deployment." },
            { title: "Optical Engineering", desc: "DWDM and xPON system architecture design." },
            { title: "Automated Splicing", desc: "Precision fusion splicing for minimal signal loss." },
            { title: "Spectral Calibration", desc: "End-to-end optical performance validation." }
        ],
        features: [
            "High-Bandwidth Capability",
            "Ultra-Low Latency Performance",
            "Robust Physical Layer Security",
            "Seamless Legacy Integration",
            "DWDM Wavelength Management"
        ],
        process: ["Path Diversity Mapping", "Optical Engineering", "Automated Splicing", "Spectral Calibration"],
        imagePath: "/fixed-network-image.jpg"
    },
    {
        slug: "wireless-network-solutions",
        title: "Wireless Network Solutions",
        icon: <Radio />,
        subtitle: "Advanced Air Interface",
        intro: "Deploying the high-mobility signal fields that define the modern era. From 4G/LTE to fully-realized 5G Core networks.",
        content: [
            "Wireless connectivity is the lifeblood of mobile enterprise and consumer ecosystems. Simaak Tech is a leader in the deployment and optimization of wireless network infrastructure.",
            "We specialize in the transition from 4G/LTE to a fully-realized 5G Core, managing the complexities of small cell densification, massive MIMO integration, and macro-site optimization.",
            "Our expertise extends to private LTE/5G networks for industrial sectors, where low-latency and high-reliability connectivity are mission-critical."
        ],
        steps: [
            { title: "Site Acquisition", desc: "Strategic location selection and regulatory clearance." },
            { title: "5G Core Integration", desc: "Next-gen core network deployment and configuration." },
            { title: "MIMO Optimization", desc: "Beamforming and spatial multiplexing calibration." },
            { title: "Spectrum Analysis", desc: "Frequency coordination and interference mitigation." }
        ],
        features: [
            "Massive MIMO Readiness",
            "Enhanced Indoor/Outdoor Coverage",
            "Reliable Microwave Backhaul",
            "Private 5G Network Capability",
            "Rapid Deployment Capabilities"
        ],
        process: ["Site Acquisition", "5G Core Integration", "MIMO Optimization", "Spectrum Analysis"],
        imagePath: "/wireless-image.jpg"
    },
    {
        slug: "network-construction-deployment",
        title: "Network Construction & Deployment",
        icon: <Antenna />,
        subtitle: "Precision Engineering at Scale",
        intro: "Executing complex physical rollouts across challenging geographical landscapes with zero-downtime migration and turnkey project management.",
        content: [
            "The physical realization of a network blueprint requires a standard of construction that is unmatched in the industry. Simaak Tech manages large-scale deployment projects across Pakistan.",
            "From the rugged northern terrains to the dense urban centers of the south, we specialize in turnkey rollout management including tower erection, shelter installation, and power system integration.",
            "Our project management office (PMO) utilizes real-time tracking to ensure deployment timelines are met with absolute precision."
        ],
        steps: [
            { title: "PMO Strategy", desc: "Comprehensive project planning and resource allocation." },
            { title: "Tower Engineering", desc: "Structural assembly with international safety compliance." },
            { title: "Site Commissioning", desc: "Hardware installation and software configuration." },
            { title: "Stress Testing", desc: "Environmental and load testing under extreme conditions." }
        ],
        features: [
            "Zero-Downtime Migration",
            "Accelerated Deployment Cycles",
            "International Quality Standards",
            "Turnkey Project Management",
            "Real-Time PMO Tracking"
        ],
        process: ["PMO Strategy", "Tower Structural Engineering", "Site Commissioning", "Environmental Stress Testing"],
        imagePath: "/construction-image.jpg"
    },
    {
        slug: "civil-works-site-preparation",
        title: "Civil Works & Site Preparation",
        icon: <HardDrive />,
        subtitle: "Foundational Persistence",
        intro: "Structural engineering and site stabilization for high-availability infrastructure. Every signal node begins with the earth.",
        content: [
            "Simaak Tech's Civil Works division specializes in the rigorous preparation and stabilization of ground-based and rooftop infrastructure sites.",
            "We understand that structural integrity is the first line of defense for critical communications equipment. From foundation casting to structural reinforcement of urban high-rises, our teams ensure every site meets the most stringent standards.",
            "We handle access road construction, soil testing, boundary stabilization, and environmental mitigation."
        ],
        steps: [
            { title: "Geological Analysis", desc: "Comprehensive soil and terrain assessment." },
            { title: "Foundation Engineering", desc: "Precision concrete and steel reinforcement work." },
            { title: "Site Acquisition", desc: "Regulatory clearances and land acquisition strategy." },
            { title: "Structural Reinforcement", desc: "Load-bearing validation and environmental hardening." }
        ],
        features: [
            "Structural Integrity Assurance",
            "Permit & Regulatory Liaison",
            "Durable Material Sourcing",
            "Environmental Mitigation",
            "Access Road Construction"
        ],
        process: ["Geological Analysis", "Foundation Engineering", "Site Acquisition Strategy", "Structural Reinforcement"],
        imagePath: "/civil-works-image.jpg"
    },
    {
        slug: "enterprise-it-connectivity",
        title: "Enterprise IT Connectivity",
        icon: <Network />,
        subtitle: "Mission-Critical Ecosystems",
        intro: "Converging high-availability server architecture with seamless organizational networking for complete digital transformation.",
        content: [
            "Modern enterprises operate on data-intensive workloads that require more than just a connection—they require an ecosystem of absolute resilience.",
            "Simaak Tech integrates advanced IT infrastructure with telecommunications expertise. Our enterprise division specializes in Software-Defined Networking (SDN), Cloud-Connect architectures, and high-availability data center deployments.",
            "We design for zero-downtime and maximum scalability, ensuring IT infrastructure serves as the neural system of the organization."
        ],
        steps: [
            { title: "SDN Strategy", desc: "Software-defined network architecture and policy design." },
            { title: "Hybrid Cloud Integration", desc: "Multi-cloud connectivity and workload orchestration." },
            { title: "Security Perimeter", desc: "Layered cybersecurity defense and access control." },
            { title: "Scalability Audit", desc: "Future-proofing infrastructure for growth trajectories." }
        ],
        features: [
            "Hyper-Converged Agility",
            "Layered Cybersecurity Defense",
            "Cloud-Native Scalability",
            "Bespoke Digital Workflows",
            "Zero-Downtime Architecture"
        ],
        process: ["SDN Strategy", "Hybrid Cloud Integration", "Security Perimeter Design", "Scalability Audit"],
        imagePath: "/enterprise-it-image.jpg"
    },
    {
        slug: "power-alternate-energy",
        title: "Power & Alternate Energy",
        icon: <Zap />,
        subtitle: "Uninterrupted Signal Flow",
        intro: "Sustainable and redundant power systems for off-grid and critical urban nodes. A network without power is a network without reach.",
        content: [
            "Simaak Tech provides sophisticated power management solutions designed to keep infrastructure operational in the most power-volatile environments.",
            "We specialize in hybrid energy systems that integrate solar, battery storage, and traditional grid/gen-set configurations for maximum uptime.",
            "Our power division focuses on Max-UPTIME—minimizing downtime through intelligent power switching and remote monitoring systems."
        ],
        steps: [
            { title: "Load Audit", desc: "Calculating peak and steady-state power requirements." },
            { title: "Hybrid Synthesis", desc: "Designing optimal solar/battery/grid configurations." },
            { title: "UPS Integration", desc: "High-efficiency backup power system deployment." },
            { title: "Remote Monitoring", desc: "Real-time power analytics and predictive maintenance." }
        ],
        features: [
            "Uninterrupted Power Supply",
            "Renewable Hybrid Integration",
            "Energy Cost Optimization",
            "Predictive Battery Monitoring",
            "Remote Power Analytics"
        ],
        process: ["Load Audit", "Hybrid Energy Synthesis", "UPS Integration", "Remote Power Monitoring"],
        imagePath: "/power-energy-image.jpg"
    },
    {
        slug: "operations-maintenance",
        title: "Operations & Maintenance",
        icon: <Activity />,
        subtitle: "System Persistence",
        intro: "24/7 technical surveillance and preventive maintenance for national-scale networks. The true test of an infrastructure partner.",
        content: [
            "The true test of an infrastructure partner is what happens after the deployment. Simaak Tech provides comprehensive O&M services ensuring long-term persistence of networks.",
            "Our Network Operations Center (NOC) operates 24/7, providing real-time surveillance and rapid response to any anomalies across the entire network.",
            "We perform proactive preventive maintenance to identify and mitigate potential points of failure before they impact service quality."
        ],
        steps: [
            { title: "24/7 NOC Surveillance", desc: "Real-time traffic and health analytics monitoring." },
            { title: "Preventive Maintenance", desc: "Scheduled site visits and equipment audits." },
            { title: "Rapid Field Recovery", desc: "Emergency on-site fault correction and restoration." },
            { title: "Optimization Audits", desc: "Continuous fine-tuning of network parameters." }
        ],
        features: [
            "Predictive Fault Resolution",
            "Asset Lifecycle Extension",
            "24/7 Remote NOC Surveillance",
            "SLA-Backed Performance Guarantees",
            "Proactive Maintenance Cycles"
        ],
        process: ["24/7 NOC Surveillance", "Preventive Maintenance Cycle", "Rapid Field Recovery", "Optimization Audits"],
        imagePath: "/ops-maint-image.jpg"
    },
    {
        slug: "nss-bss-equipment",
        title: "NSS & BSS Equipment",
        icon: <Cpu />,
        subtitle: "Core Logical Systems",
        intro: "Installation and configuration of the switching and billing architectures that power telecommunications networks at scale.",
        content: [
            "The Network Subsystem (NSS) and Base Station Subsystem (BSS) are the brain and sensory organs of a telecommunications network.",
            "Simaak Tech specializes in the installation, commissioning, and integration of core switching equipment, HLRs, and mobile switching centers.",
            "Our engineers are certified across multiple vendor platforms, enabling complex multi-stakeholder integrations at the network core."
        ],
        steps: [
            { title: "Core Configuration", desc: "NSS/BSS logical architecture and policy setup." },
            { title: "HLR/MSC Integration", desc: "Subscriber management and call routing deployment." },
            { title: "Interoperability Testing", desc: "Multi-vendor compatibility validation." },
            { title: "System Validation", desc: "End-to-end core network performance verification." }
        ],
        features: [
            "Carrier-Grade Reliability",
            "High-Throughput Core Switching",
            "Agile Revenue Management",
            "Multi-Vendor Interoperability",
            "Certified Platform Expertise"
        ],
        process: ["Core Logic Configuration", "HLR/MSC Integration", "Vendor Interoperability Testing", "System Validation"],
        imagePath: "/nss-bss-image.jpg"
    },
    {
        slug: "security-surveillance-systems",
        title: "Security & Surveillance Systems",
        icon: <Camera />,
        subtitle: "Sentinel Architecture",
        intro: "Physical and digital security node integration for critical asset protection across national infrastructure.",
        content: [
            "In an era of escalating physical and cyber threats, securing critical telecommunications infrastructure is paramount.",
            "Simaak Tech deploys comprehensive security and surveillance systems that integrate IP-based cameras, access control, and perimeter defense with network monitoring.",
            "Our solutions provide unified threat visibility across distributed infrastructure, enabling rapid response to both physical intrusions and digital anomalies."
        ],
        steps: [
            { title: "Threat Assessment", desc: "Comprehensive vulnerability analysis of physical and digital assets." },
            { title: "System Architecture", desc: "Designing integrated security node topology." },
            { title: "Hardware Deployment", desc: "IP cameras, access control, and perimeter systems installation." },
            { title: "Monitoring Integration", desc: "Unified dashboard and alert system configuration." }
        ],
        features: [
            "IP-Based Surveillance Networks",
            "Access Control Integration",
            "Perimeter Defense Systems",
            "Unified Threat Dashboard",
            "24/7 Security Monitoring"
        ],
        process: ["Threat Assessment", "System Architecture", "Hardware Deployment", "Monitoring Integration"],
        imagePath: "/security-systems-image.jpg"
    },
    {
        slug: "testing-equipment-calibration",
        title: "Testing & Equipment Calibration",
        icon: <Ruler />,
        subtitle: "Scientific Precision",
        intro: "Advanced measurement and calibration services ensuring infrastructure meets global standards. Precision is the language of high-fidelity engineering.",
        content: [
            "Simaak Tech provides specialized testing and calibration services for telecommunications and IT equipment using state-of-the-art diagnostic tools.",
            "We verify that every component in the network is operating at its theoretical peak, from OTDRs to spectrum analyzers.",
            "Our laboratory and field testing services include drive testing, optical spectrum analysis, and structural load verification."
        ],
        steps: [
            { title: "Spectral Driving", desc: "Mobile signal quality measurement and mapping." },
            { title: "Optical Calibration", desc: "Fiber optic loss and reflectance testing." },
            { title: "Load Testing", desc: "Structural and electrical load validation." },
            { title: "Data Synthesis", desc: "Comprehensive analysis and reporting." }
        ],
        features: [
            "NIST-Traceable Calibration",
            "Exclusive Vendor Access",
            "On-Site Training Programs",
            "Rapid Replacement Services",
            "Drive Test Analytics"
        ],
        process: ["Spectral Driving", "Optical Calibration", "Load Testing", "Data Analysis & Synthesis"],
        imagePath: "/testing-image.jpg"
    },
    {
        slug: "professional-consulting",
        title: "Professional Consulting",
        icon: <Lightbulb />,
        subtitle: "Architectural Strategy",
        intro: "Strategic technical advice for organizations navigating the complexities of digital evolution and network modernization.",
        content: [
            "High-level infrastructure decisions require more than just technical knowledge—they require strategic vision.",
            "Simaak Tech provides professional consulting services to governments, telecoms, and large-scale enterprises, analyzing current architectures and providing roadmaps for digital transformation.",
            "Our consultants specialize in OpEx/CapEx optimization, regulatory compliance, and future-ready topology planning."
        ],
        steps: [
            { title: "Architecture Audit", desc: "Comprehensive assessment of existing infrastructure." },
            { title: "Strategic Roadmap", desc: "Multi-year technology evolution planning." },
            { title: "Financial Optimization", desc: "OpEx/CapEx modeling and investment analysis." },
            { title: "Compliance Verification", desc: "Regulatory and standards alignment review." }
        ],
        features: [
            "Strategic Technology Roadmaps",
            "Expert Project Oversight",
            "Skill-Gap Analysis & Training",
            "Risk Mitigation Strategies",
            "Regulatory Compliance Advisory"
        ],
        process: ["Architecture Audit", "Strategic Roadmap Synthesis", "Financial Optimization", "Compliance Verification"],
        imagePath: "/consulting-image.jpg"
    },
    {
        slug: "rf-propagation-coverage",
        title: "RF Propagation & Coverage Optimization",
        icon: <Signal />,
        subtitle: "Signal Dominance",
        intro: "Advanced radio frequency modeling, coverage prediction, and interference analysis for maximum signal penetration across complex terrains.",
        content: [
            "Simaak Tech's RF Propagation division utilizes advanced computational electromagnetics and ray-tracing simulations to model signal behavior across Pakistan's diverse terrain.",
            "Our engineers deploy sophisticated propagation models — including Okumura-Hata, COST-231, and 3D ray-tracing — to predict coverage with sub-decibel accuracy.",
            "We specialize in interference mitigation, frequency reuse optimization, and coverage gap analysis for both greenfield deployments and brownfield network expansion."
        ],
        steps: [
            { title: "Propagation Modeling", desc: "High-fidelity RF simulation using terrain-aware algorithms." },
            { title: "Coverage Prediction", desc: "Multi-layer signal strength mapping and gap analysis." },
            { title: "Interference Analysis", desc: "Co-channel and adjacent-channel interference mitigation." },
            { title: "Optimization Report", desc: "Actionable recommendations for maximum coverage efficiency." }
        ],
        features: [
            "3D Ray-Tracing Simulations",
            "Terrain-Aware Propagation Models",
            "Interference Pattern Mitigation",
            "Coverage Gap Remediation",
            "Frequency Reuse Optimization"
        ],
        process: ["Propagation Modeling", "Coverage Prediction", "Interference Analysis", "Optimization Report"],
        imagePath: "/rf-propagation-image.jpg"
    },
    {
        slug: "microwave-backhaul-engineering",
        title: "Microwave & Backhaul Engineering",
        icon: <Satellite />,
        subtitle: "Invisible Highways",
        intro: "Point-to-point and point-to-multipoint microwave link design, frequency planning, and high-capacity backhaul solutions for distributed networks.",
        content: [
            "Microwave backhaul remains the backbone of mobile network connectivity in regions where fiber is impractical. Simaak Tech engineers high-capacity microwave links that deliver fiber-like performance over the air.",
            "We specialize in link budget analysis, frequency coordination with regulatory bodies, and the deployment of both licensed and unlicensed microwave systems across challenging terrain.",
            "Our portfolio includes E-band (70/80 GHz) high-capacity links for urban densification and traditional 6-38 GHz systems for long-haul connectivity."
        ],
        steps: [
            { title: "Link Budget Analysis", desc: "Path loss, fade margin, and availability calculations." },
            { title: "Frequency Coordination", desc: "Regulatory clearance and spectrum allocation." },
            { title: "Path Survey", desc: "Line-of-sight verification and obstruction analysis." },
            { title: "Link Commissioning", desc: "Hardware installation, alignment, and performance validation." }
        ],
        features: [
            "High-Capacity E-Band Links",
            "Licensed & Unlicensed Spectrum",
            "99.999% Availability Design",
            "Adaptive Modulation Support",
            "Regulatory Frequency Coordination"
        ],
        process: ["Link Budget Analysis", "Frequency Coordination", "Path Survey", "Link Commissioning"],
        imagePath: "/microwave-image.jpg"
    },
    {
        slug: "antenna-systems-tower-solutions",
        title: "Antenna Systems & Tower Solutions",
        icon: <Search />,
        subtitle: "Vertical Command",
        intro: "Antenna selection, tower loading analysis, multi-band integration, and advanced MIMO array deployment for optimal radio performance.",
        content: [
            "The antenna system is the critical interface between the network and the user. Simaak Tech provides end-to-end antenna engineering from selection to deployment.",
            "We specialize in multi-band antenna integration, massive MIMO array deployment, and tower structural analysis to ensure every installation maximizes radio performance while maintaining structural safety.",
            "Our engineers perform comprehensive tower loading analysis, wind-load calculations, and antenna pattern optimization to deliver superior coverage with minimal site footprint."
        ],
        steps: [
            { title: "Antenna Selection", desc: "Performance-matched antenna specification for target coverage." },
            { title: "Tower Structural Analysis", desc: "Load bearing, wind-load, and safety compliance verification." },
            { title: "MIMO Array Design", desc: "Beamforming optimization and spatial multiplexing configuration." },
            { title: "Installation & Alignment", desc: "Precision mounting, azimuth/tilt calibration, and PIM testing." }
        ],
        features: [
            "Multi-Band Integration",
            "Massive MIMO Deployment",
            "Tower Loading Analysis",
            "PIM Testing & Mitigation",
            "Antenna Pattern Optimization"
        ],
        process: ["Antenna Selection", "Tower Structural Analysis", "MIMO Array Design", "Installation & Alignment"],
        imagePath: "/antenna-image.jpg"
    }
];
