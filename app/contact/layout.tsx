import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Simaak Tech",
    description: "Get in touch with Simaak Tech's engineering leadership. Request a consultation for telecommunications infrastructure, fiber optics, or data center design.",
    openGraph: {
        title: "Contact Simaak Tech",
        description: "Start a project with Pakistan's premier telecommunications engineers.",
        url: "https://simaak.vercel.app/contact",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
