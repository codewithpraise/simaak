import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-[70dvh] flex items-center justify-center px-5">
            <div className="text-center space-y-5 max-w-md">
                <div className="text-5xl md:text-7xl font-display font-bold tracking-tight text-charcoal/10">404</div>
                <h1 className="text-xl md:text-2xl font-display font-bold tracking-tight text-charcoal">Page Not Found</h1>
                <p className="text-text-secondary text-sm">The resource you&apos;re looking for doesn&apos;t exist or has moved.</p>
                <Link href="/" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-charcoal text-white text-sm font-bold btn-shimmer">
                    Return Home
                </Link>
            </div>
        </main>
    );
}
