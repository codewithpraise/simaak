/**
 * Extended service data — technicalSpecs and FAQ for each service slug.
 * Kept in a separate file for maintainability.
 */

interface ServiceExtras {
    technicalSpecs: { label: string; value: string }[];
    faq: { question: string; answer: string }[];
}

export const serviceExtras: Record<string, ServiceExtras> = {
    "network-design-planning": {
        technicalSpecs: [
            { label: "Frequency Bands", value: "700 MHz – 6 GHz" },
            { label: "Propagation Models", value: "Okumura-Hata, COST-231, 3D Ray-Tracing" },
            { label: "Capacity Planning", value: "Up to 100 Gbps backbone" },
            { label: "Coverage Accuracy", value: "±2 dB prediction" },
            { label: "Redundancy Level", value: "N+1 minimum" },
            { label: "Compliance", value: "PTA, ITU-R standards" },
        ],
        faq: [
            { question: "How long does a typical network design project take?", answer: "From initial RF simulation to final commissioning blueprint, a standard project takes 8–12 weeks depending on the geographic scope and complexity. Urban deployments are typically faster due to existing infrastructure data, while greenfield rural projects require more extensive terrain analysis." },
            { question: "Do you support multi-vendor environments?", answer: "Absolutely. Our designs are vendor-agnostic and we have extensive experience integrating equipment from Ericsson, Huawei, Nokia, ZTE, and Samsung. We ensure seamless interoperability through rigorous integration testing protocols." },
            { question: "What coverage prediction tools do you use?", answer: "We leverage industry-standard tools including Atoll, ASSET, and custom-built ray-tracing engines for urban canyon environments. Our prediction accuracy consistently achieves ±2 dB variance against drive test measurements." },
            { question: "Can you design for future 5G and 6G migration?", answer: "Every design we produce includes a migration roadmap. We architect networks with spectrum flexibility, modular capacity expansion, and future-proof backhaul dimensioning to accommodate evolving technology standards." },
        ],
    },
    "fixed-network-solutions": {
        technicalSpecs: [
            { label: "Fiber Type", value: "G.652D, G.654E, G.657A2" },
            { label: "Max Capacity", value: "400 Gbps per wavelength" },
            { label: "DWDM Channels", value: "Up to 96 channels" },
            { label: "Splicing Loss", value: "< 0.02 dB average" },
            { label: "PON Standard", value: "GPON, XGS-PON, 50G-PON" },
            { label: "Span Length", value: "Up to 120 km unamplified" },
        ],
        faq: [
            { question: "What is the difference between GPON and XGS-PON?", answer: "GPON provides up to 2.5 Gbps downstream and 1.25 Gbps upstream, while XGS-PON delivers symmetric 10 Gbps. We typically recommend XGS-PON for new deployments and GPON for cost-sensitive brownfield expansions." },
            { question: "How do you handle fiber route planning in dense urban areas?", answer: "We use GIS-based corridor analysis combined with existing duct surveys and municipal records. Our approach minimizes civil works by prioritizing existing utility corridors, aerial routes, and micro-trenching where applicable." },
            { question: "What testing and commissioning standards do you follow?", answer: "All fiber installations undergo Tier 2 (OTDR) testing with full bi-directional characterization. We follow TIA-568 and IEC 61280 standards, with every splice documented in a comprehensive as-built database." },
        ],
    },
    "wireless-network-solutions": {
        technicalSpecs: [
            { label: "Technology", value: "4G LTE-A, 5G NR (SA/NSA)" },
            { label: "Frequency", value: "Sub-6 GHz, mmWave" },
            { label: "Throughput", value: "Up to 20 Gbps (5G)" },
            { label: "Latency", value: "< 1 ms (URLLC)" },
            { label: "Densification", value: "Small Cell, DAS, C-RAN" },
            { label: "Core", value: "5G Standalone Core" },
        ],
        faq: [
            { question: "What is the advantage of 5G Standalone over Non-Standalone?", answer: "5G Standalone (SA) operates on a cloud-native 5G Core, enabling true network slicing, ultra-low latency (URLLC), and massive IoT connectivity. NSA relies on existing 4G infrastructure for control plane, limiting advanced capabilities." },
            { question: "Do you deploy small cells for indoor coverage?", answer: "Yes. We design and deploy comprehensive indoor DAS (Distributed Antenna Systems) and small cell solutions for enterprise campuses, shopping malls, airports, and high-rise buildings using both neutral-host and dedicated architectures." },
            { question: "How do you handle spectrum optimization?", answer: "We employ advanced techniques including carrier aggregation, dynamic spectrum sharing (DSS), and MIMO beamforming. Our RF engineers continuously optimize spectral efficiency through drive testing and SON (Self-Organizing Network) analytics." },
        ],
    },
    "operations-maintenance": {
        technicalSpecs: [
            { label: "NOC Coverage", value: "24/7/365" },
            { label: "Response SLA", value: "< 15 min P1" },
            { label: "Monitoring", value: "SNMP, Syslog, Streaming Telemetry" },
            { label: "Ticketing", value: "ITIL v4 compliant" },
            { label: "Preventive Cycles", value: "Monthly / Quarterly" },
            { label: "Uptime Target", value: "99.999%" },
        ],
        faq: [
            { question: "What does your NOC monitoring include?", answer: "Our Network Operations Center provides real-time monitoring of network elements including routers, switches, base stations, microwave links, and fiber spans. We use AI-driven anomaly detection for predictive fault identification before service impact." },
            { question: "How quickly do you respond to critical outages?", answer: "Priority 1 incidents trigger an immediate response within 15 minutes, with field teams dispatched within 2 hours for on-site resolution. Our average Mean Time to Restore (MTTR) for critical outages is under 4 hours." },
            { question: "Do you offer managed services contracts?", answer: "Yes. We provide flexible managed services models ranging from basic monitoring to full-scope managed operations. Contracts are typically structured as 3 or 5-year agreements with performance-based SLAs and KPI reporting." },
        ],
    },
    "transmission-systems": {
        technicalSpecs: [
            { label: "Technology", value: "DWDM, OTN, MPLS" },
            { label: "Capacity", value: "Up to 96 x 400G" },
            { label: "Protection", value: "1+1, SNCP, MS-SPRing" },
            { label: "Reach", value: "Transnational backbone" },
            { label: "Amplification", value: "EDFA, Raman" },
            { label: "Monitoring", value: "OCM, OTDR-embedded" },
        ],
        faq: [
            { question: "What protection schemes do you implement?", answer: "We implement multi-layer protection including 1+1 line protection, Sub-Network Connection Protection (SNCP), and MS-SPRing for ring topologies. Our architectures guarantee sub-50ms switchover for carrier-grade availability." },
            { question: "Can you integrate with existing OTN networks?", answer: "Yes. We have extensive experience integrating new DWDM/OTN equipment with legacy SDH/SONET transport networks, ensuring seamless migration paths with zero service disruption." },
        ],
    },
    "power-alternate-energy": {
        technicalSpecs: [
            { label: "Solar Capacity", value: "Up to 50 kWp per site" },
            { label: "Battery", value: "Li-Ion, LFP, VRLA" },
            { label: "Backup Duration", value: "8–72 hours" },
            { label: "Rectifier", value: "48V DC, 96% efficiency" },
            { label: "Monitoring", value: "Remote DCIM" },
            { label: "Hybrid", value: "Solar + Grid + DG" },
        ],
        faq: [
            { question: "How do you reduce site diesel consumption?", answer: "We deploy hybrid power solutions combining solar panels, high-efficiency lithium-ion batteries, and intelligent load management systems. Typical deployments reduce diesel dependency by 60–80%, with many sites achieving zero-diesel operation." },
            { question: "What remote monitoring capabilities do you provide?", answer: "All power systems are equipped with IoT-enabled monitoring units that provide real-time visibility into energy consumption, battery health, fuel levels, and environmental conditions through our centralized DCIM platform." },
        ],
    },
    "civil-works-site-preparation": {
        technicalSpecs: [
            { label: "Tower Types", value: "GBT, RT, Monopole, Camouflage" },
            { label: "Height Range", value: "15m – 120m" },
            { label: "Foundation", value: "Pad, Pile, Rock Anchor" },
            { label: "Wind Load", value: "Up to 200 km/h survival" },
            { label: "Standards", value: "TIA-222-H, AISC" },
            { label: "Seismic Zone", value: "Zone 2B–4" },
        ],
        faq: [
            { question: "What tower types do you design and install?", answer: "We engineer and erect all standard tower types including Greenfield Base Towers (GBT), Rooftop Towers (RT), Monopoles, and Camouflaged/Stealth structures. Each design is fully customized for site-specific loading, environmental, and aesthetic requirements." },
            { question: "How do you manage regulatory approvals?", answer: "Our dedicated regulatory team handles the entire approval process including environmental impact assessments, aviation clearances, structural safety certifications, and local municipality permits. We maintain established relationships with all relevant regulatory bodies." },
        ],
    },
    "project-management": {
        technicalSpecs: [
            { label: "Methodology", value: "PMI / PRINCE2 Hybrid" },
            { label: "Tools", value: "MS Project, Primavera P6" },
            { label: "Reporting", value: "Weekly dashboards" },
            { label: "Risk Framework", value: "FMEA / Monte Carlo" },
            { label: "Quality", value: "ISO 9001:2015" },
            { label: "Safety", value: "ISO 45001" },
        ],
        faq: [
            { question: "What project management methodologies do you follow?", answer: "We employ a hybrid PMI/PRINCE2 methodology tailored for telecommunications projects. This combines the structured governance of PRINCE2 with the flexible execution frameworks of PMI's PMBOK, ensuring both rigor and adaptability." },
            { question: "How do you ensure project quality?", answer: "Quality is enforced through our ISO 9001:2015 certified QMS. Every project milestone undergoes formal quality gate reviews, and we deploy independent quality assurance auditors for critical infrastructure projects." },
        ],
    },
    "site-acquisition": {
        technicalSpecs: [
            { label: "Search Ring", value: "Custom per RF brief" },
            { label: "Lease Types", value: "BTS, Rooftop, IBS" },
            { label: "Approval Time", value: "4–8 weeks typical" },
            { label: "Documentation", value: "Full legal & compliance" },
            { label: "GIS Integration", value: "Esri ArcGIS" },
            { label: "Success Rate", value: "> 95% first-choice" },
        ],
        faq: [
            { question: "How do you identify optimal site locations?", answer: "We use a combination of RF search ring analysis, GIS-based scoring models, and local market intelligence. Our site hunters evaluate candidate locations against technical suitability, lease economics, community relations, and regulatory feasibility." },
            { question: "What is your typical site acquisition timeline?", answer: "From search ring issuance to lease execution, a standard acquisition cycle takes 4–8 weeks. We accelerate timelines through pre-qualified site databases and established landlord relationships across major markets." },
        ],
    },
    "survey-assessment": {
        technicalSpecs: [
            { label: "Survey Types", value: "TSSR, CW, Structural" },
            { label: "Tools", value: "Drone, LiDAR, GPS RTK" },
            { label: "Accuracy", value: "Sub-centimeter" },
            { label: "Deliverables", value: "CAD, 3D model, report" },
            { label: "Turnaround", value: "48–72 hours" },
            { label: "Standards", value: "TIA, ANSI, local regs" },
        ],
        faq: [
            { question: "What types of surveys do you perform?", answer: "We conduct comprehensive Telecom Site Survey Reports (TSSR), Continuous Wave (CW) testing, structural assessments, environmental surveys, and as-built documentation. Each survey type follows standardized protocols with detailed photographic evidence and measurement data." },
            { question: "Do you use drone-based surveying?", answer: "Yes. Our fleet of survey-grade drones equipped with LiDAR and high-resolution cameras enables rapid, accurate site documentation. Drone surveys reduce site visit time by up to 60% and provide superior data quality for tower structural assessments." },
        ],
    },
    "quality-safety-compliance": {
        technicalSpecs: [
            { label: "Quality Standard", value: "ISO 9001:2015" },
            { label: "Safety Standard", value: "ISO 45001:2018" },
            { label: "Environmental", value: "ISO 14001:2015" },
            { label: "Audit Frequency", value: "Quarterly internal" },
            { label: "Incident Rate", value: "< 0.5 TRIR" },
            { label: "Training", value: "Annual certification" },
        ],
        faq: [
            { question: "What safety certifications do your field teams hold?", answer: "All field personnel hold current certifications in Working at Heights, Electrical Safety, First Aid/CPR, and RF Awareness. Specialized teams additionally hold certifications for Confined Space Entry, Rigger/Signaler, and Crane Operations as required." },
            { question: "How do you manage safety on multi-contractor sites?", answer: "We implement a robust Permit to Work (PTW) system with daily toolbox talks, Job Safety Analysis (JSA) for every task, and real-time safety observation reporting. Our Safety Officers conduct regular site inspections with immediate stop-work authority for unsafe conditions." },
        ],
    },
    "consulting-advisory": {
        technicalSpecs: [
            { label: "Scope", value: "Strategy to execution" },
            { label: "Focus Areas", value: "5G, FWA, FTTH, IoT" },
            { label: "Deliverables", value: "Reports, roadmaps, TCO" },
            { label: "Team", value: "Senior industry experts" },
            { label: "Engagement", value: "Retainer or project" },
            { label: "Compliance", value: "PTA, ITU, 3GPP" },
        ],
        faq: [
            { question: "What does a typical consulting engagement look like?", answer: "Engagements typically begin with a 2-week discovery phase including stakeholder interviews, network audits, and market analysis. This is followed by a detailed findings report and strategic roadmap with actionable recommendations, timelines, and budget frameworks." },
            { question: "Do you provide regulatory advisory services?", answer: "Yes. Our regulatory experts advise on spectrum licensing, interconnection agreements, quality of service compliance, and emerging regulatory frameworks including net neutrality and data sovereignty requirements." },
        ],
    },
    "network-construction-deployment": {
        technicalSpecs: [
            { label: "Project Management", value: "PMI / PRINCE2 Hybrid" },
            { label: "Tower Assembly", value: "GBT, Monopole, Rooftop" },
            { label: "Deployment Speed", value: "Up to 50 sites/month" },
            { label: "Safety Standard", value: "ISO 45001" },
            { label: "Quality Audit", value: "Weekly field inspections" },
            { label: "Logistics", value: "End-to-end supply chain" },
        ],
        faq: [
            { question: "How do you ensure zero-downtime migration?", answer: "We utilize parallel infrastructure builds and meticulous cut-over planning. Our teams coordinate with NOC personnel for real-time traffic monitoring during swaps to ensure zero impact on end-user experience." },
            { question: "Can you operate in rugged northern terrains?", answer: "Yes. Simaak Tech specializes in challenging rollouts within rugged landscapes. We deploy specialized field teams and supply chain solutions tailored for high-altitude and off-grid remote areas." },
        ],
    },
    "enterprise-it-connectivity": {
        technicalSpecs: [
            { label: "SDN Support", value: "Cisco, Juniper, VMware NSX" },
            { label: "Cloud Connect", value: "AWS, Azure, Google Cloud" },
            { label: "Switching", value: "10/100/400 Gbps Core" },
            { label: "Fiber Topology", value: "Redundant ring, Star" },
            { label: "Storage", value: "All-Flash SAN integration" },
            { label: "Virtualization", value: "Hyper-V, KVM, vSphere" },
        ],
        faq: [
            { question: "What is Software-Defined Networking (SDN)?", answer: "SDN decouple the network control plane from the data plane, enabling centralized policy management and dynamic resource allocation. This improves organizational agility and reduces OpEx." },
            { question: "Do you support hybrid cloud environments?", answer: "Yes. We specialize in converging on-premise data center infrastructure with public cloud workloads through secure, high-speed direct connects and multi-cloud orchestration." },
        ],
    },
    "nss-bss-equipment": {
        technicalSpecs: [
            { label: "Core Platforms", value: "vEPC, 5GC, IMS/VoLTE" },
            { label: "Subscribers", value: "Scalable to 10M+ HLR" },
            { label: "Switching Cap", value: "Tbps capacity at edge/core" },
            { label: "Billing Link", value: "Real-time OCS integration" },
            { label: "Redundancy", value: "Geo-redundant Core nodes" },
            { label: "Latency", value: "Sub-5ms core processing" },
        ],
        faq: [
            { question: "What core network brands do you support?", answer: "Our certified engineers have extensive experience with Nokia, Ericsson, Huawei, and Oracle core platforms. We enable seamless multi-vendor integration using standardized 3GPP interfaces." },
            { question: "How do you handle subscriber data migration?", answer: "We use automated migration scripts and rigorous pre-validation to move HLR/HSS data. Our processes ensure data integrity and zero service disruption for high-value subscribers during core upgrades." },
        ],
    },
    "security-surveillance-systems": {
        technicalSpecs: [
            { label: "Video Standards", value: "H.265+, 4K/8K resolution" },
            { label: "Storage Type", value: "Distributed NVR, Cloud" },
            { label: "Access Control", value: "Biometric, RFID, NFC" },
            { label: "Connectivity", value: "PoE+, Wireless backhaul" },
            { label: "AI Analytics", value: "Face recog, Perimeter trip" },
            { label: "Night Vision", value: "Thermal, Starlight IR" },
        ],
        faq: [
            { question: "Are your surveillance systems integrated with the network?", answer: "Yes. We deploy IP-based security nodes that utilize existing network infrastructure for backhaul while ensuring traffic isolation and high-priority QoS for critical video feeds." },
            { question: "What kind of perimeter defense do you offer?", answer: "We combine physical sensors, AI-driven video analytics, and thermal imaging to create multi-layered perimeter defense that triggers immediate alerts in the command center upon intrusion." },
        ],
    },
    "testing-equipment-calibration": {
        technicalSpecs: [
            { label: "OTDR Testing", value: "EXFO, VIAVI precision" },
            { label: "RF Analyzers", value: "Keysight, Anritsu to 40GHz" },
            { label: "Drive Test", value: "TEMS, NEMO investigation" },
            { label: "Certification", value: "NIST traceable standards" },
            { label: "Structural Test", value: "Non-destructive NDT" },
            { label: "Elec Audit", value: "Thermal imaging, Load bank" },
        ],
        faq: [
            { question: "Do you provide on-site calibration?", answer: "Yes. Our field calibration kits are NIST-traceable and allow us to verify the performance of active equipment and fiber spans without removing them from the production environment." },
            { question: "What is included in a drive test report?", answer: "Our reports provide granular data on signal strength (RSRP), quality (SINR), handover success rates, and throughput maps, visualized through professional GIS overlays for targeted network optimization." },
        ],
    },
    "rf-propagation-coverage": {
        technicalSpecs: [
            { label: "Models", value: "Ray-tracing, Okumura-Hata, COST-231" },
            { label: "Resolution", value: "5m x 5m grid" },
            { label: "Bands", value: "700 MHz – 39 GHz" },
            { label: "Accuracy", value: "±1.5 dB (ray-tracing)" },
            { label: "Tools", value: "Atoll, ASSET, custom engines" },
            { label: "Output", value: "Coverage maps, SINR, RSRP" },
        ],
        faq: [
            { question: "What is 3D ray-tracing and why is it important?", answer: "3D ray-tracing simulates individual radio wave paths including reflections, diffractions, and scattering off buildings and terrain. It provides significantly higher accuracy than empirical models, especially in complex urban environments with canyon effects and indoor penetration requirements." },
            { question: "How do you validate your propagation predictions?", answer: "We conduct comprehensive drive test campaigns and compare measured RSRP/RSRQ/SINR values against predictions. Our validation process includes statistical analysis (mean error, standard deviation) with target accuracy of ±2 dB for 90% of measurements." },
        ],
    },
    "microwave-backhaul-engineering": {
        technicalSpecs: [
            { label: "Frequency Bands", value: "6–80 GHz" },
            { label: "Capacity", value: "Up to 10 Gbps (E-band)" },
            { label: "Availability", value: "99.999% target" },
            { label: "Modulation", value: "Up to 4096 QAM" },
            { label: "Path Length", value: "1–80 km" },
            { label: "Protection", value: "1+1 HSB, 2+0 SD" },
        ],
        faq: [
            { question: "When should I choose microwave over fiber for backhaul?", answer: "Microwave is ideal when fiber is cost-prohibitive (river crossings, difficult terrain), when rapid deployment is critical, or for temporary/event-based connectivity. Modern E-band links deliver 10 Gbps capacity rivaling fiber, making microwave a strong permanent solution for many scenarios." },
            { question: "What availability levels can microwave links achieve?", answer: "With proper engineering including adequate fade margins, space diversity, and adaptive modulation, microwave links routinely achieve 99.999% availability (five nines), equating to less than 5.3 minutes of downtime per year." },
        ],
    },
    "antenna-systems-tower-solutions": {
        technicalSpecs: [
            { label: "Antenna Types", value: "Panel, Parabolic, MIMO Array" },
            { label: "MIMO Config", value: "Up to 64T64R Massive MIMO" },
            { label: "Bands", value: "Multi-band 700–3500 MHz" },
            { label: "PIM Level", value: "< -153 dBc" },
            { label: "Wind Survival", value: "200 km/h" },
            { label: "Tower Analysis", value: "TIA-222-H compliant" },
        ],
        faq: [
            { question: "What is PIM and why does it matter?", answer: "Passive Intermodulation (PIM) is unwanted signal interference generated by non-linear junctions in the antenna system (corroded connectors, loose hardware, dissimilar metals). High PIM degrades network capacity and coverage. We test all installations to ensure PIM levels below -153 dBc." },
            { question: "How does Massive MIMO improve network performance?", answer: "Massive MIMO uses arrays of 32–64 antenna elements with advanced beamforming to focus radio energy precisely toward individual users. This dramatically increases spectral efficiency (3–5x), coverage, and per-user throughput while reducing interference to neighboring cells." },
        ],
    },
};
