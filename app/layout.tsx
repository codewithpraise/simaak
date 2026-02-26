import type { Metadata } from "next";
import { Cinzel, Outfit, JetBrains_Mono } from "next/font/google";
import "./app-styles.css";
import { ScrollToTop } from "@/components/provider/ScrollToTop";
import { Navbar } from "@/components/ui/Navbar";
import { ClientShell } from "@/components/provider/ClientShell";
import { ChunkLoadBoundary } from "@/components/provider/ChunkLoadBoundary";
import { Footer } from "@/components/ui/Footer";

const cinzel = Cinzel({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://simaak.vercel.app"),
    title: {
        default: "Simaak Tech | Premier Telecommunications Infrastructure",
        template: "%s | Simaak Tech",
    },
    description:
        "Pakistan's leading telecommunications infrastructure provider. Network design, fiber optics, 5G deployment, and mission-critical connectivity solutions.",
    applicationName: "Simaak Tech",
    category: "Telecommunications & Engineering",
    keywords: [
        "Simaak",
        "Simaak Tech",
        "Telecom Pakistan",
        "Fiber Optics",
        "5G Deployment",
        "Network Infrastructure",
        "Data Center Engineering",
        "Telecom Contractor",
    ],
    openGraph: {
        title: "Simaak Tech (Private) Limited",
        description: "Architecting the Future of Connectivity.",
        url: "https://simaak.vercel.app",
        siteName: "Simaak Tech",
        locale: "en_PK",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Simaak Tech (Private) Limited",
        url: "https://simaak.vercel.app",
        logo: "https://simaak.vercel.app/icon.svg",
        description: "Pakistan's leading telecommunications infrastructure provider specializing in fiber optics, 5G deployment, and critical network engineering.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Islamabad",
            addressRegion: "Islamabad Capital Territory",
            addressCountry: "PK",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+92 312 9187349",
            contactType: "Customer Service",
            email: "info@simaak.com",
            areaServed: "PK",
            availableLanguage: ["English", "Urdu"],
        },
    };

    return (
        <html lang="en" suppressHydrationWarning className="max-w-[100vw] overflow-x-hidden">
            <body
                className={`${cinzel.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased max-w-[100vw] overflow-x-hidden`}
                style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    backgroundColor: "#faf9f6",
                    color: "#111111",
                }}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ScrollToTop />
                <Navbar />
                <ChunkLoadBoundary>
                    <ClientShell>
                        <div className="min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden">
                            {children}
                        </div>
                        <Footer />
                    </ClientShell>
                </ChunkLoadBoundary>
            </body>
        </html>
    );
}
