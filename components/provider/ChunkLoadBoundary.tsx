"use client";

import React, { ErrorInfo, useEffect } from "react";

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

/**
 * A critical top-level boundary that intercepts Hostinger's infamous 504 Gateway Timeouts
 * and Next.js `ChunkLoadError` when static chunk TTLs expire or network latency stutters.
 * 
 * Instead of freezing the client on a white screen (which corrupts the THREE.js WebGL contexts), 
 * it forces a hard window reload to gracefully pull the new JS chunks.
 */
export class ChunkLoadBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        // We capture any error, but the componentDidCatch does the lifting.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // If it's a ChunkLoadError or a failed fetch error, automatically refresh the page once.
        if (
            error.name === 'ChunkLoadError' ||
            error.message.includes('Failed to fetch dynamically imported module') ||
            error.message.includes('Loading chunk') ||
            error.message.includes('fetch')
        ) {
            // Check session storage to prevent infinite reload loops if the server is permanently down
            const reloadCount = parseInt(sessionStorage.getItem('chunkReloadCount') || '0', 10);

            if (reloadCount < 2) {
                sessionStorage.setItem('chunkReloadCount', (reloadCount + 1).toString());
                console.warn("[ChunkLoadBoundary] Encountered a ChunkLoadError/504. Forcing hard reload to recover the client.");
                window.location.reload();
            } else {
                console.error("[ChunkLoadBoundary] Max reload attempts reached. Server might be permanently exhausted.");
            }
        }
    }

    render() {
        if (this.state.hasError) {
            // Provide a graceful transparent fallback while it force reloads
            return (
                <div className="fixed inset-0 flex items-center justify-center bg-zinc-50 dark:bg-charcoal text-charcoal dark:text-cream z-[9999]">
                    <div className="text-center space-y-4">
                        <div className="w-12 h-12 rounded-full border-t-2 border-gold animate-spin mx-auto" />
                        <h2 className="text-xl font-display font-medium">Restoring Application State...</h2>
                        <p className="text-text-muted text-sm max-w-sm">We ran into a temporary network delay. Reconnecting to the Simaak infrastructure.</p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
