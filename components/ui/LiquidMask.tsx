"use client";

import React, { useRef, useEffect, useCallback } from "react";

/**
 * LiquidMask — A premium canvas-based mask that simulates "liquid" physics.
 * Direct rendering version: No state updates, high-performance compositing.
 */
interface Props {
    className?: string;
    imageSrc: string;
}

export function LiquidMask({ className, imageSrc }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const particles = useRef<{ x: number; y: number; alpha: number; radius: number; vx: number; vy: number }[]>([]);
    const lastPoint = useRef<{ x: number; y: number } | null>(null);
    const requestRef = useRef<number>(null);
    const offscreenCanvas = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            imageRef.current = img;
        };
    }, [imageSrc]);

    const updateParticles = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Image check - skip frame if not loaded
        if (!imageRef.current || !imageRef.current.complete) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            requestRef.current = requestAnimationFrame(updateParticles);
            return;
        }

        // Offscreen setup for the alpha mask
        if (!offscreenCanvas.current) {
            offscreenCanvas.current = document.createElement("canvas");
        }
        if (offscreenCanvas.current.width !== canvas.width) {
            offscreenCanvas.current.width = canvas.width;
            offscreenCanvas.current.height = canvas.height;
        }

        const octx = offscreenCanvas.current.getContext("2d");
        if (!octx) return;

        // 1. Clear offscreen
        octx.clearRect(0, 0, canvas.width, canvas.height);

        // 2. Update and draw particles to offscreen (creating the mask)
        particles.current = particles.current.filter(p => p.alpha > 0.01);
        particles.current.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            p.vx *= 0.97; p.vy *= 0.97;
            p.alpha *= 0.965; // Organic viscous decay
            p.radius *= 0.995;

            const grad = octx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
            grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
            grad.addColorStop(0.5, `rgba(255, 255, 255, ${p.alpha * 0.35})`);
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

            octx.fillStyle = grad;
            octx.beginPath();
            octx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            octx.fill();
        });

        // 3. Main canvas composite drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the color image layer
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);

        // Apply the mask: keep pixels only where the offscreen mask is painted
        ctx.globalCompositeOperation = 'destination-in';
        ctx.drawImage(offscreenCanvas.current, 0, 0);

        // Reset composite mode
        ctx.globalCompositeOperation = 'source-over';

        requestRef.current = requestAnimationFrame(updateParticles);
    }, []);

    useEffect(() => {
        const moveHandler = (clientX: number, clientY: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            const dx = x - (lastPoint.current?.x || x);
            const dy = y - (lastPoint.current?.y || y);
            const dist = Math.hypot(dx, dy);

            if (lastPoint.current) {
                // High-density path interpolation for "buttery smooth" rendering
                const steps = Math.max(1, Math.floor(dist / 8));
                for (let i = 0; i <= steps; i++) {
                    const ratio = i / steps;
                    particles.current.push({
                        x: lastPoint.current.x + (x - lastPoint.current.x) * ratio,
                        y: lastPoint.current.y + (y - lastPoint.current.y) * ratio,
                        alpha: 1.0,
                        radius: 70 + Math.min(dist * 0.15, 60), // Responsive radius
                        vx: dx * 0.04,
                        vy: dy * 0.04
                    });
                }
            } else {
                particles.current.push({ x, y, alpha: 1.0, radius: 70, vx: 0, vy: 0 });
            }
            lastPoint.current = { x, y };
        };

        const onMouseMove = (e: MouseEvent) => moveHandler(e.clientX, e.clientY);
        const onTouchStart = (e: TouchEvent) => {
            if (e.touches[0]) {
                const canvas = canvasRef.current;
                if (!canvas) return;
                const rect = canvas.getBoundingClientRect();
                lastPoint.current = {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top
                };
            }
        };
        const onTouchMove = (e: TouchEvent) => {
            if (e.touches[0]) {
                moveHandler(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        requestRef.current = requestAnimationFrame(updateParticles);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [updateParticles]);

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ width: '100%', height: '100%' }}
        />
    );
}
