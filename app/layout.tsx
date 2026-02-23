import type { Metadata } from "next";
import { Cinzel, Outfit, JetBrains_Mono } from "next/font/google";
import "./app-styles.css";
import { ScrollToTop } from "@/components/provider/ScrollToTop";
import { Navbar } from "@/components/ui/Navbar";
import { ClientShell } from "@/components/provider/ClientShell";
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
    title: "SIMAAK TECH",
    description:
        "Pakistan's leading telecommunications infrastructure provider. Network design, fiber optics, 5G deployment, and mission-critical connectivity solutions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
                <ScrollToTop />
                <Navbar />
                <ClientShell>
                    <div className="min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden">
                        {children}
                    </div>
                    <Footer />
                </ClientShell>
            </body>
        </html>
    );
}
