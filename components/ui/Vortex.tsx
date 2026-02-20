"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

/**
 * Vortex — Inspired by Aceternity UI
 * A high-performance canvas-based 3D particle system creating fluid, wavy motions.
 */

interface VortexProps {
    children?: any;
    className?: string;
    containerClassName?: string;
    particleCount?: number;
    rangeY?: number;
    baseHue?: number;
    baseSpeed?: number;
    rangeSpeed?: number;
    baseRadius?: number;
    rangeRadius?: number;
    backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef(null);
    const particleCount = props.particleCount || 700;
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const rangeY = props.rangeY || 100;
    const baseHue = props.baseHue || 42; // Simaak Gold Hue
    const rangeHue = 20;
    const baseSpeed = props.baseSpeed || 0.0;
    const rangeSpeed = props.rangeSpeed || 1.2;
    const baseRadius = props.baseRadius || 1;
    const rangeRadius = props.rangeRadius || 2.5;
    const backgroundColor = props.backgroundColor || "transparent";
    const tick = useRef(0);
    const noise3D = createNoise3D();
    let particleProps = new Float32Array(particlePropsLength);
    let center: [number, number] = [0, 0];

    const HALF_PI: number = 0.5 * Math.PI;
    const TAU: number = 2 * Math.PI;

    const rand = (n: number): number => n * Math.random();
    const fadeInOut = (t: number, m: number): number => {
        let hm = 0.5 * m;
        return Math.abs(((t + hm) % m) - hm) / hm;
    };
    const lerp = (n1: number, n2: number, speed: number): number =>
        (1 - speed) * n1 + speed * n2;

    const setup = () => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (canvas && container) {
            const ctx = canvas.getContext("2d");

            if (ctx) {
                resize(canvas, ctx);
                initParticles();
                draw(canvas, ctx);
            }
        }
    };

    const initParticles = () => {
        tick.current = 0;
        particleProps = new Float32Array(particlePropsLength);

        for (let i = 0; i < particlePropsLength; i += particlePropCount) {
            initParticle(i);
        }
    };

    const initParticle = (i: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let x, y, vx, vy, life, ttl, speed, radius, hue;

        x = rand(canvas.width);
        y = center[1] + rand(rangeY) - rangeY / 2;
        vx = 0;
        vy = 0;
        life = 0;
        ttl = baseSpeed + rand(rangeSpeed) * 100;
        speed = baseSpeed + rand(rangeSpeed);
        radius = baseRadius + rand(rangeRadius);
        hue = baseHue + rand(rangeHue);

        particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };

    const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        tick.current++;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (backgroundColor !== "transparent") {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        updateParticles(ctx);
        renderGlow(canvas, ctx);

        requestAnimationFrame(() => draw(canvas, ctx));
    };

    const updateParticles = (ctx: CanvasRenderingContext2D) => {
        for (let i = 0; i < particlePropsLength; i += particlePropCount) {
            updateParticle(i, ctx);
        }
    };

    const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let x, y, vx, vy, life, ttl, speed, radius, hue;

        x = particleProps[i];
        y = particleProps[i + 1];
        vx = particleProps[i + 2];
        vy = particleProps[i + 3];
        life = particleProps[i + 4];
        ttl = particleProps[i + 5];
        speed = particleProps[i + 6];
        radius = particleProps[i + 7];
        hue = particleProps[i + 8];

        let n = noise3D(x * 0.00125, y * 0.00125, tick.current * 0.0005) * TAU * 1.5;
        vx = lerp(vx, Math.cos(n), 0.05);
        vy = lerp(vy, Math.sin(n), 0.05);
        x += vx * speed;
        y += vy * speed;
        life++;

        if (life > ttl || x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
            initParticle(i);
        } else {
            particleProps[i] = x;
            particleProps[i + 1] = y;
            particleProps[i + 2] = vx;
            particleProps[i + 3] = vy;
            particleProps[i + 4] = life;

            drawParticle(x, y, x + vx, y + vy, life, ttl, radius, hue, ctx);
        }
    };

    const drawParticle = (
        x: number,
        y: number,
        x2: number,
        y2: number,
        life: number,
        ttl: number,
        radius: number,
        hue: number,
        ctx: CanvasRenderingContext2D
    ) => {
        let f = fadeInOut(life, ttl);
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.lineWidth = radius;
        ctx.strokeStyle = `hsla(${hue}, 60%, 50%, ${f * 0.5})`;
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    };

    const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        ctx.save();
        ctx.filter = "blur(8px) brightness(150%)";
        ctx.globalCompositeOperation = "lighter";
        // To prevent excess lag, we don't redraw everything, just a subtle wash
        ctx.restore();
    };

    const resize = (canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) => {
        const { innerWidth, innerHeight } = window;

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        center[0] = 0.5 * canvas.width;
        center[1] = 0.5 * canvas.height;
    };

    useEffect(() => {
        setup();
        window.addEventListener("resize", () => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            if (canvas && ctx) {
                resize(canvas, ctx);
            }
        });
    }, []);

    return (
        <div className={cn("relative h-full w-full", props.containerClassName)}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                ref={containerRef}
                className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
            >
                <canvas ref={canvasRef}></canvas>
            </motion.div>

            <div className={cn("relative z-10", props.className)}>
                {props.children}
            </div>
        </div>
    );
};
