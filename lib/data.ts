import {
    Building2,
    TowerControl,
    Zap,
    Code2,
    Wrench,
    Truck,
    Package,
    Briefcase,
    Wifi,
    Network,
    Radio,
    Server,
    LucideIcon,
    Shield,
    Globe,
    Cpu,
    BarChart3,
    HeadphonesIcon,
    Rocket,
    Terminal,
} from "lucide-react";

export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: LucideIcon;
    slug: string;
    accentColor: string;
    features: string[];
    process: { step: string; description: string }[];
    stats: { label: string; value: string }[];
}

export const servicesData: Service[] = [
    {
        id: "enterprise-solutions",
        title: "Enterprise & IT Solutions",
        shortDescription:
            "End-to-end digital transformation — from software-defined infrastructure to hyper-converged environments and cloud migration.",
        fullDescription:
            "We deliver comprehensive Enterprise & IT Solutions that redefine how organizations operate. Our expertise covers Software Defined Infrastructure (SDI), Hyper-Converged Environments, cloud migration strategies, open-source deployments, Business Continuity Planning, and advanced security solutions. We partner with enterprises to transition to agile, software-defined architectures deployed on hardware of their choice — ensuring adaptability, resilience, and long-term operational excellence.",
        icon: Building2,
        slug: "enterprise-solutions",
        accentColor: "#3B82F6",
        features: [
            "Software Defined Infrastructure",
            "Hyper-Converged Environments",
            "Cloud Migration & Consulting",
            "Open Source Cloud Deployments",
            "Business Continuity Planning",
            "Enterprise Security Solutions",
            "Database Security & Compliance",
            "IT Consultancy & Professional Services",
        ],
        process: [
            { step: "Audit", description: "Comprehensive assessment of existing IT infrastructure and business processes" },
            { step: "Architect", description: "Design a scalable, future-proof architecture aligned with business objectives" },
            { step: "Implement", description: "Deploy solutions with minimal disruption using proven methodologies" },
            { step: "Optimize", description: "Continuous monitoring, optimization, and support for peak performance" },
        ],
        stats: [
            { label: "Deployments", value: "200+" },
            { label: "Uptime SLA", value: "99.99%" },
            { label: "Cost Savings", value: "40%" },
            { label: "Migration Time", value: "<30 Days" },
        ],
    },
    {
        id: "civil-works",
        title: "Civil Works",
        shortDescription:
            "Turnkey civil engineering for telecom towers, fiber optic ducting, and BTS room construction.",
        fullDescription:
            "Specializing in the civil engineering domain of telecommunications, we handle everything from site surveys and soil testing to the construction of BTS rooms, tower foundations, and fiber optic ducting infrastructure. Our rigorous quality control standards ensure structural longevity, safety compliance, and on-time project delivery across diverse geographical terrains.",
        icon: TowerControl,
        slug: "civil-works",
        accentColor: "#F59E0B",
        features: [
            "Tower Foundations & Installation",
            "Fiber Optic Ducting",
            "BTS Room Construction",
            "Site Surveying & Soil Testing",
            "Underground Cable Routing",
            "Structural Reinforcement",
        ],
        process: [
            { step: "Survey", description: "Detailed site surveys, geotechnical analysis, and feasibility studies" },
            { step: "Design", description: "Structural engineering and civil design per international standards" },
            { step: "Build", description: "Construction with certified materials and quality assurance protocols" },
            { step: "Handover", description: "Final inspection, documentation, and handover with maintenance guides" },
        ],
        stats: [
            { label: "Sites Built", value: "1,500+" },
            { label: "Countries", value: "6" },
            { label: "Safety Record", value: "100%" },
            { label: "On-time Rate", value: "98%" },
        ],
    },
    {
        id: "power-energy",
        title: "Power & Alternate Energy",
        shortDescription:
            "Reliable 24/7 power solutions — solar hybrid systems, industrial generators, UPS, and battery banks.",
        fullDescription:
            "Ensuring uninterrupted connectivity with robust power solutions. We supply, install, and maintain high-capacity diesel generators, solar hybrid systems, industrial UPS units, and advanced battery banks. Our energy solutions keep critical telecom and IT infrastructure running 24/7, even in the most challenging environments. We are committed to driving sustainable energy adoption across all our deployment regions.",
        icon: Zap,
        slug: "power-and-energy",
        accentColor: "#EAB308",
        features: [
            "Solar Hybrid Power Systems",
            "High-Capacity Diesel Generators",
            "Industrial UPS Solutions",
            "Advanced Battery Banks",
            "Power Distribution Units",
            "Energy Monitoring & Management",
        ],
        process: [
            { step: "Assess", description: "Load analysis and power requirement assessment for each site" },
            { step: "Design", description: "Custom power architecture with redundancy planning" },
            { step: "Install", description: "Professional installation with safety compliance and testing" },
            { step: "Monitor", description: "24/7 remote monitoring, preventive maintenance, and fuel management" },
        ],
        stats: [
            { label: "Sites Powered", value: "3,000+" },
            { label: "Solar Deployed", value: "5MW+" },
            { label: "Uptime", value: "99.9%" },
            { label: "Carbon Reduced", value: "30%" },
        ],
    },
    {
        id: "software-development",
        title: "Software Development",
        shortDescription:
            "Custom-engineered software solutions — web platforms, mobile apps, APIs, and AI-driven systems.",
        fullDescription:
            "Our in-house software development team builds scalable, secure, and high-performance applications tailored to complex business requirements. From responsive web platforms and native mobile apps to sophisticated backend systems and AI-powered solutions, we leverage cutting-edge technologies to optimize operational efficiencies and deliver novel solutions for our clients' evolving needs.",
        icon: Code2,
        slug: "software-development",
        accentColor: "#A855F7",
        features: [
            "Custom Web Applications",
            "Mobile App Development",
            "RESTful API Design & Integration",
            "AI & Machine Learning Solutions",
            "Cloud-Native Architecture",
            "DevOps & CI/CD Pipelines",
        ],
        process: [
            { step: "Discover", description: "Requirements gathering, user research, and technical feasibility analysis" },
            { step: "Design", description: "UI/UX design, system architecture, and technical specification" },
            { step: "Develop", description: "Agile development with iterative sprints and continuous feedback" },
            { step: "Deploy", description: "Production deployment, monitoring, and ongoing maintenance" },
        ],
        stats: [
            { label: "Projects", value: "50+" },
            { label: "Technologies", value: "30+" },
            { label: "Team Size", value: "25+" },
            { label: "Client Satisfaction", value: "98%" },
        ],
    },
    {
        id: "om-after-sales",
        title: "O & M After Sales",
        shortDescription:
            "Proactive operations and maintenance — preventive care, corrective repairs, and 24/7 monitoring.",
        fullDescription:
            "We offer comprehensive Operations & Maintenance (O&M) services to ensure maximum network availability and equipment longevity. Our specialized teams perform preventive and corrective maintenance on both active and passive equipment, manage fuel operations, and provide round-the-clock monitoring — minimizing downtime and maximizing network performance.",
        icon: Wrench,
        slug: "operations-maintenance",
        accentColor: "#22C55E",
        features: [
            "Preventive Maintenance Programs",
            "Corrective Repairs & Troubleshooting",
            "Fuel Management & Logistics",
            "24/7 Network Monitoring",
            "Equipment Lifecycle Management",
            "Performance Reporting & Analytics",
        ],
        process: [
            { step: "Plan", description: "Develop customized maintenance schedules based on equipment profiles" },
            { step: "Execute", description: "Deploy field teams for scheduled and emergency maintenance" },
            { step: "Monitor", description: "Real-time monitoring with automated alert systems" },
            { step: "Report", description: "Comprehensive performance reports and optimization recommendations" },
        ],
        stats: [
            { label: "Sites Managed", value: "5,000+" },
            { label: "Response Time", value: "<2 hrs" },
            { label: "Uptime Achieved", value: "99.95%" },
            { label: "Field Engineers", value: "200+" },
        ],
    },
    {
        id: "logistics",
        title: "Logistics & Warehousing",
        shortDescription:
            "Optimized supply chain management — secure warehousing, fleet logistics, and last-mile delivery.",
        fullDescription:
            "Optimized logistics and warehousing solutions for the telecom and IT sectors. We manage the storage, handling, and transportation of sensitive equipment with full inventory tracking, fleet management, and secure warehousing facilities. Our logistics network ensures timely delivery to sites across all operational regions.",
        icon: Truck,
        slug: "logistics-warehousing",
        accentColor: "#64748B",
        features: [
            "Inventory Management Systems",
            "Fleet Management & Tracking",
            "Secure Climate-Controlled Warehousing",
            "Last-Mile Delivery",
            "Cross-Border Logistics",
            "Real-Time Shipment Tracking",
        ],
        process: [
            { step: "Receive", description: "Equipment intake with quality inspection and cataloguing" },
            { step: "Store", description: "Climate-controlled warehousing with barcode tracking" },
            { step: "Dispatch", description: "Optimized routing and fleet deployment for delivery" },
            { step: "Confirm", description: "Delivery confirmation, installation support, and documentation" },
        ],
        stats: [
            { label: "Warehouses", value: "12" },
            { label: "Deliveries/Year", value: "10,000+" },
            { label: "Accuracy Rate", value: "99.8%" },
            { label: "Coverage Area", value: "6 Countries" },
        ],
    },
    {
        id: "supplies",
        title: "Supplies",
        shortDescription:
            "Procurement of premium telecom and IT hardware — fiber cables, networking equipment, and safety gear.",
        fullDescription:
            "A trusted source for all telecom and IT hardware needs. From fiber cables and optical connectors to servers, switches, and safety equipment, we supply top-tier equipment from leading global manufacturers. Our procurement team ensures competitive pricing, authentic products, and reliable supply chains.",
        icon: Package,
        slug: "supplies",
        accentColor: "#06B6D4",
        features: [
            "Fiber Optic Cables & Connectors",
            "Networking Hardware",
            "Server & Storage Equipment",
            "Safety Gear & PPE",
            "Installation Tools & Instruments",
            "Testing Equipment & Probes",
        ],
        process: [
            { step: "Source", description: "Identify and verify authentic products from certified manufacturers" },
            { step: "Procure", description: "Competitive bidding and bulk procurement for cost optimization" },
            { step: "Inspect", description: "Quality assurance testing before dispatch" },
            { step: "Deliver", description: "Secure packaging and tracked delivery to project sites" },
        ],
        stats: [
            { label: "Product Lines", value: "500+" },
            { label: "OEM Partners", value: "50+" },
            { label: "Delivered Value", value: "$50M+" },
            { label: "Quality Score", value: "99.5%" },
        ],
    },
    {
        id: "professional-services",
        title: "Professional Services",
        shortDescription:
            "Expert project management, network optimization, technical audits, and specialized training.",
        fullDescription:
            "Our Professional Services group provides the expertise needed to manage complex telecom and IT projects from inception to completion. We offer certified project management, network optimization, technical audits, and specialized training programs to ensure project success and knowledge transfer to client teams.",
        icon: Briefcase,
        slug: "professional-services",
        accentColor: "#6366F1",
        features: [
            "Certified Project Management",
            "Network Performance Audits",
            "RF Planning & Optimization",
            "Technical Training Programs",
            "Vendor Management",
            "SLA Design & Implementation",
        ],
        process: [
            { step: "Scope", description: "Define project boundaries, deliverables, and success criteria" },
            { step: "Staff", description: "Assemble specialized teams with domain expertise" },
            { step: "Execute", description: "Manage delivery with rigorous quality and timeline controls" },
            { step: "Transfer", description: "Knowledge transfer, documentation, and post-project support" },
        ],
        stats: [
            { label: "Projects Managed", value: "300+" },
            { label: "Certifications", value: "PMP/PRINCE2" },
            { label: "Client Retention", value: "95%" },
            { label: "Training Hours", value: "10,000+" },
        ],
    },
    {
        id: "wireless",
        title: "Wireless",
        shortDescription:
            "End-to-end deployment of microwave links, LTE/4G/5G rollouts, small cells, and WiFi solutions.",
        fullDescription:
            "We specialize in the planning, design, and deployment of wireless networks at scale. From point-to-point microwave links and LTE/4G base stations to next-gen 5G rollouts, small cell installations, and enterprise WiFi solutions — we ensure seamless wireless connectivity across urban and rural environments.",
        icon: Wifi,
        slug: "wireless",
        accentColor: "#0EA5E9",
        features: [
            "Point-to-Point Microwave Links",
            "LTE/4G/5G Network Rollout",
            "Small Cell Deployment",
            "Enterprise WiFi Solutions",
            "WiFi Offloading",
            "Antenna System Design",
        ],
        process: [
            { step: "Plan", description: "RF planning, coverage modeling, and capacity dimensioning" },
            { step: "Design", description: "Detailed design including antenna placement and link budgets" },
            { step: "Deploy", description: "Professional installation, integration, and commissioning" },
            { step: "Optimize", description: "Post-deployment optimization and performance tuning" },
        ],
        stats: [
            { label: "Base Stations", value: "8,000+" },
            { label: "5G Sites", value: "500+" },
            { label: "Coverage Area", value: "100K+ km²" },
            { label: "Technologies", value: "2G-5G" },
        ],
    },
    {
        id: "fixed-network",
        title: "Fixed Network",
        shortDescription:
            "FTTH/FTTB deployment, metro fiber rings, long-haul fiber, and complete OSP/ISP works.",
        fullDescription:
            "Building the backbone of modern connectivity. We design and deploy fixed networks including long-haul fiber optic routes, metro ring architectures, and Fiber-to-the-Home (FTTH) / Fiber-to-the-Building (FTTB) solutions for ISPs, carriers, and enterprise clients. Our capabilities span the entire lifecycle from network design to splicing, termination, and commissioning.",
        icon: Network,
        slug: "fixed-network",
        accentColor: "#10B981",
        features: [
            "FTTH/FTTB Deployment",
            "Long-Haul Fiber Routes",
            "Metro Fiber Ring Design",
            "OSP/ISP Construction",
            "Fiber Splicing & Termination",
            "Network Design & Planning",
        ],
        process: [
            { step: "Survey", description: "Route surveys, right-of-way analysis, and permit acquisition" },
            { step: "Design", description: "HLD/LLD network design with redundancy planning" },
            { step: "Construct", description: "Cable laying, splicing, termination, and testing" },
            { step: "Commission", description: "End-to-end testing, acceptance, and handover" },
        ],
        stats: [
            { label: "Fiber Deployed", value: "50,000+ km" },
            { label: "FTTH Homes", value: "100,000+" },
            { label: "Splice Points", value: "500,000+" },
            { label: "Attenuation SLA", value: "<0.35 dB/km" },
        ],
    },
    {
        id: "radio-frequency",
        title: "Radio Frequency",
        shortDescription:
            "RF planning, drive testing, frequency allocation, coverage analysis, and interference management.",
        fullDescription:
            "Ensuring optimal signal quality and network performance. Our RF engineers conduct rigorous drive testing, interference analysis, frequency planning, and parameter optimization across 2G, 3G, 4G, and 5G networks. We maximize coverage, capacity, and quality of service through data-driven optimization methodologies.",
        icon: Radio,
        slug: "radio-frequency",
        accentColor: "#EC4899",
        features: [
            "Drive Testing & Benchmarking",
            "Frequency Planning & Allocation",
            "Coverage Analysis & Modeling",
            "Interference Detection & Resolution",
            "Parameter Optimization",
            "Spectrum Management",
        ],
        process: [
            { step: "Measure", description: "Comprehensive drive testing and data collection campaigns" },
            { step: "Analyze", description: "Advanced post-processing and KPI analysis" },
            { step: "Optimize", description: "Parameter tuning, antenna adjustments, and interference mitigation" },
            { step: "Validate", description: "Re-testing and validation of optimization outcomes" },
        ],
        stats: [
            { label: "Drive Tests", value: "10,000+" },
            { label: "KM Covered", value: "500,000+" },
            { label: "Networks Optimized", value: "100+" },
            { label: "KPI Improvement", value: "25-40%" },
        ],
    },
    {
        id: "data-centers",
        title: "Integrated Data Centers",
        shortDescription:
            "Design and build of scalable, tier-ready data centers — power, cooling, security, and connectivity.",
        fullDescription:
            "We design and build state-of-the-art data centers that meet the highest industry standards. Our integrated approach combines power distribution, precision cooling, physical security, fire suppression, and high-density connectivity — creating reliable, scalable environments for your most critical IT assets. We deliver facilities ranging from edge deployments to Tier III+ certified data centers.",
        icon: Server,
        slug: "data-centers",
        accentColor: "#7C3AED",
        features: [
            "Hot/Cold Aisle Containment",
            "Precision Cooling Systems",
            "Access Control & Surveillance",
            "Structured Cabling Infrastructure",
            "Fire Suppression Systems",
            "Power Distribution & Redundancy",
        ],
        process: [
            { step: "Consult", description: "Requirements analysis, tier selection, and capacity planning" },
            { step: "Design", description: "Detailed MEP design with redundancy and scalability" },
            { step: "Build", description: "Construction, equipment installation, and systems integration" },
            { step: "Certify", description: "Testing, commissioning, and certification to target tier" },
        ],
        stats: [
            { label: "Data Centers", value: "15+" },
            { label: "Total Capacity", value: "50MW+" },
            { label: "PUE Average", value: "1.4" },
            { label: "Tier Level", value: "III/IV" },
        ],
    },
];

export const companyStats = [
    { label: "Years of Excellence", value: "10+" },
    { label: "Projects Delivered", value: "5,000+" },
    { label: "Global Offices", value: "6" },
    { label: "Team Members", value: "500+" },
];

export const officeLocations = [
    {
        country: "Pakistan",
        label: "HQ",
        city: "Islamabad",
        address: "Plot No. 35, I&T Centre, G-10/4, Islamabad, Islamabad Capital Territory, Pakistan",
    },
    {
        country: "UAE",
        label: "Dubai Office",
        city: "Dubai",
        address: "Office 509, 5th Floor, Le Solarium Tower, Dubai Silicon Oasis, Dubai",
    },
    {
        country: "UAE",
        label: "Abu Dhabi Office",
        city: "Abu Dhabi",
        address: "Musaffah, Abu Dhabi",
    },
    {
        country: "Oman",
        label: "Muscat Office",
        city: "Muscat",
        address: "Office 106, 1st Floor, UFC Building, Al-Mawaleh-South, Muscat, Sultanate of Oman",
    },
    {
        country: "Saudi Arabia",
        label: "Riyadh Office",
        city: "Riyadh",
        address: "Building 3141, Anas Bin Malik St, Al Malqa District, Riyadh, Saudi Arabia",
    },
    {
        country: "Bahrain",
        label: "Manama Office",
        city: "Manama",
        address: "Office 1262, Building 574, Road 31, Block 611, Al Hamriya, Manama, Bahrain",
    },
    {
        country: "Canada",
        label: "Burlington Office",
        city: "Burlington",
        address: "1100 Burloak Drive, Suite 300, Burlington, Ontario, L7L 6B2, Canada",
    },
];

export const industries = [
    { name: "Telecommunications", icon: Wifi, description: "End-to-end network infrastructure for carriers and ISPs" },
    { name: "Energy & Utilities", icon: Zap, description: "Power solutions and smart grid infrastructure" },
    { name: "Enterprise", icon: Building2, description: "Digital transformation for large-scale organizations" },
    { name: "Government", icon: Shield, description: "Secure infrastructure for government institutions" },
    { name: "Defense", icon: Globe, description: "Mission-critical communication systems" },
    { name: "Technology", icon: Cpu, description: "Data centers and cloud infrastructure" },
];

export const processSteps = [
    {
        number: "01",
        title: "Discover",
        description: "We begin with deep analysis — understanding your infrastructure landscape, operational challenges, and strategic objectives to craft a targeted approach.",
    },
    {
        number: "02",
        title: "Design",
        description: "Our engineering teams architect bespoke solutions leveraging industry-best practices, ensuring scalability, redundancy, and future-proof integration.",
    },
    {
        number: "03",
        title: "Deploy",
        description: "Precision execution with certified field teams, rigorous quality control protocols, and real-time progress tracking across all project sites.",
    },
    {
        number: "04",
        title: "Deliver",
        description: "Post-deployment optimization, comprehensive documentation, knowledge transfer, and ongoing 24/7 support for sustained operational excellence.",
    },
];

export const whyChooseUs = [
    {
        icon: Globe,
        title: "Global Presence",
        description: "Operations across 6 countries with local expertise and global standards in every market we serve.",
    },
    {
        icon: Rocket,
        title: "End-to-End Solutions",
        description: "From initial consultation to deployment and ongoing maintenance — we own every stage of the value chain.",
    },
    {
        icon: HeadphonesIcon,
        title: "24/7 Support",
        description: "Round-the-clock monitoring, rapid response teams, and dedicated account management for every client.",
    },
    {
        icon: BarChart3,
        title: "Proven Track Record",
        description: "5,000+ successful projects, 99.99% uptime SLA, and a 95% client retention rate over a decade of excellence.",
    },
];

// Alias for Sovereign naming
export const whyChooseUsData = whyChooseUs;
export const industriesData = industries;
export const processData = processSteps;

export const infrastructureData = [
    {
        title: "Hyper-Converged Nodes",
        icon: Cpu,
        features: ["Software Defined Storage", "Integrated Compute", "Zero-Latency Fabric"],
    },
    {
        title: "Sovereign Cloud Hubs",
        icon: Terminal,
        features: ["Data Territoriality", "Hardened Kernel", "Multi-Zone Sync"],
    },
    {
        title: "Industrial Power Cells",
        icon: Zap,
        features: ["Solar Hybrid Arrays", "Mission Critical UPS", "Load-Balanced Dispatch"],
    },
    {
        title: "Tactical Network Rails",
        icon: Radio,
        features: ["Microwave Backhaul", "Fiber Metro Rings", "Encapsulated Routing"],
    }
];

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];
