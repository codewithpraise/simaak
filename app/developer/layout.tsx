import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Developer Platform | Simaak Tech",
    description: "Advanced engineering platform for network monitoring, system architecture, and telecommunications APIs.",
    openGraph: {
        title: "Simaak Platform",
        description: "Enterprise network monitoring and data center infrastructure dashboard.",
        url: "https://simaak.vercel.app/developer",
    },
};

export default function DeveloperLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
