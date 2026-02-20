"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";

export function VideoPreloader({ onComplete }: { onComplete: () => void }) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);

        // Preloader duration: 3.5 seconds
        const totalDuration = 3500;

        const completionTimer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
                onComplete();
            }, 800); // Exiting animation buffer matches the exit transition duration
        }, totalDuration);

        return () => {
            clearTimeout(completionTimer);
            document.body.style.overflow = "";
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden m-0 p-0"
                >
                    <motion.div
                        className="relative w-[450px] h-[450px] md:w-[600px] md:h-[600px] flex items-center justify-center filter drop-shadow-[0_0_40px_rgba(212,163,49,0.15)]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Logo */}
                        <div className="relative w-full h-full">
                            <NextImage
                                src="/simaak logo.png"
                                alt="Simaak Technology"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
