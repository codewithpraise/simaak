import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Portfolio | Simaak Tech",
    description: "Explore our archive of mission-critical engineering projects, focusing on 5G deployment, OSP infrastructure, and complex network integrations.",
    openGraph: {
        title: "Simaak Tech Engineering Portfolio",
        description: "View our national-scale infrastructure deployments and technical case studies.",
        url: "https://simaak.vercel.app/portfolio",
    },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
