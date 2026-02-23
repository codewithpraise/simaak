import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | Simaak Tech",
    description: "Learn about Simaak Tech's engineering philosophy, core values, and our commitment to sovereign telecommunications infrastructure in Pakistan.",
    openGraph: {
        title: "About Simaak Tech",
        description: "Engineering Excellence, By Design. Sovereign Infrastructure.",
        url: "https://simaak.vercel.app/about",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
