"use client";

import React, { useEffect, useRef, useCallback } from "react";

/**
 * HeroInfrastructure — Bold premium constellation for the Hero background.
 * Features:
 * - Animated hexagonal grid substrate
 * - 3-layer parallax particle system (95 particles)
 * - Orbiting ring particles with trails
 * - Central pulsing nexus with expanding rings
 * - Mouse-reactive attraction + glow
 * Pure canvas. No WebGL. 60fps.
 */

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    baseOpacity: number;
    phase: number;
    layer: number;
}

interface Orbital {
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    angle: number;
    speed: number;
    size: number;
    opacity: number;
}

const G = { r: 62, g: 139, b: 189 }; // Simaak Blue
const W = { r: 255, g: 255, b: 255 }; // White

const LAYERS = [
    { count: 35, speed: 0.15, sMin: 1.2, sMax: 2.5, oMin: 0.2, oMax: 0.5, connDist: 120 },
    { count: 30, speed: 0.3, sMin: 2.0, sMax: 4.5, oMin: 0.4, oMax: 0.8, connDist: 150 },
    { count: 18, speed: 0.5, sMin: 3.0, sMax: 6.0, oMin: 0.6, oMax: 1.0, connDist: 180 },
];

const N_ORBITALS = 14;
const MOUSE_R = 220;

export function HeroInfrastructure() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pRef = useRef<Particle[]>([]);
    const orbRef = useRef<Orbital[]>([]);
    const animRef = useRef<number>(0);
    const mouse = useRef({ x: -9999, y: -9999 });

    const init = useCallback((cW: number, cH: number) => {
        const ps: Particle[] = [];
        LAYERS.forEach((l, li) => {
            for (let i = 0; i < l.count; i++) {
                ps.push({
                    x: Math.random() * cW,
                    y: Math.random() * cH,
                    vx: (Math.random() - 0.5) * l.speed * 2,
                    vy: (Math.random() - 0.5) * l.speed * 2,
                    size: l.sMin + Math.random() * (l.sMax - l.sMin),
                    baseOpacity: l.oMin + Math.random() * (l.oMax - l.oMin),
                    phase: Math.random() * Math.PI * 2,
                    layer: li,
                });
            }
        });
        pRef.current = ps;

        const orbs: Orbital[] = [];
        for (let i = 0; i < N_ORBITALS; i++) {
            orbs.push({
                cx: cW * (0.4 + Math.random() * 0.2),
                cy: cH * (0.35 + Math.random() * 0.3),
                rx: 100 + Math.random() * 280,
                ry: 50 + Math.random() * 140,
                angle: Math.random() * Math.PI * 2,
                speed: (0.12 + Math.random() * 0.35) * (Math.random() > 0.5 ? 1 : -1),
                size: 1.2 + Math.random() * 2.5,
                opacity: 0.2 + Math.random() * 0.4,
            });
        }
        orbRef.current = orbs;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let cW = 0, cH = 0;
        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio, 2);
            cW = canvas.offsetWidth;
            cH = canvas.offsetHeight;
            canvas.width = cW * dpr;
            canvas.height = cH * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (pRef.current.length === 0) init(cW, cH);
        };
        resize();
        window.addEventListener("resize", resize);

        const onMouse = (e: MouseEvent) => {
            const r = canvas.getBoundingClientRect();
            mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
        };
        const onTouch = (e: TouchEvent) => {
            const r = canvas.getBoundingClientRect();
            if (e.touches.length > 0) mouse.current = { x: e.touches[0].clientX - r.left, y: e.touches[0].clientY - r.top };
        };
        const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
        canvas.addEventListener("mousemove", onMouse);
        canvas.addEventListener("touchmove", onTouch, { passive: true });
        canvas.addEventListener("mouseleave", onLeave);
        canvas.addEventListener("touchend", onLeave);

        const draw = (time: number) => {
            ctx.clearRect(0, 0, cW, cH);
            const t = time / 1000;
            const mx = mouse.current.x;
            const my = mouse.current.y;
            const particles = pRef.current;
            const orbitals = orbRef.current;

            // ────── Hexagonal grid ──────
            ctx.save();
            ctx.globalAlpha = 0.06 + Math.sin(t * 0.25) * 0.02;
            const hSz = 45; // Slightly smaller hex for more density
            const hH = hSz * Math.sqrt(3);
            for (let row = -1; row < cH / hH + 1; row++) {
                for (let col = -1; col < cW / (hSz * 1.5) + 1; col++) {
                    const hx = col * hSz * 1.5;
                    const hy = row * hH + (col % 2 ? hH / 2 : 0);
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const a = (Math.PI / 3) * i - Math.PI / 6;
                        const px = hx + hSz * 0.42 * Math.cos(a);
                        const py = hy + hSz * 0.42 * Math.sin(a);
                        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.strokeStyle = `rgba(${G.r},${G.g},${G.b},0.6)`;
                    ctx.lineWidth = 0.3;
                    ctx.stroke();
                }
            }
            ctx.restore();

            // ────── Orbitals with trails ──────
            for (const o of orbitals) {
                o.angle += o.speed * 0.014;
                const ox = o.cx + Math.cos(o.angle) * o.rx;
                const oy = o.cy + Math.sin(o.angle) * o.ry;

                // Trail
                for (let ti = 0; ti < 6; ti++) {
                    const ta = o.angle - o.speed * 0.014 * ti * 3;
                    const tx = o.cx + Math.cos(ta) * o.rx;
                    const ty = o.cy + Math.sin(ta) * o.ry;
                    const fa = o.opacity * (1 - ti / 6) * 0.35;
                    ctx.beginPath();
                    ctx.arc(tx, ty, o.size * (1 - ti * 0.1), 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${G.r},${G.g},${G.b},${fa})`;
                    ctx.fill();
                }

                // Glow
                const og = ctx.createRadialGradient(ox, oy, 0, ox, oy, o.size * 7);
                og.addColorStop(0, `rgba(${G.r},${G.g},${G.b},${o.opacity * 0.5})`);
                og.addColorStop(1, `rgba(${G.r},${G.g},${G.b},0)`);
                ctx.beginPath();
                ctx.arc(ox, oy, o.size * 7, 0, Math.PI * 2);
                ctx.fillStyle = og;
                ctx.fill();

                // Core
                ctx.beginPath();
                ctx.arc(ox, oy, o.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${G.r},${G.g},${G.b},${o.opacity})`;
                ctx.fill();
            }

            // ────── Constellation particles ──────
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < -40) p.x = cW + 40;
                if (p.x > cW + 40) p.x = -40;
                if (p.y < -40) p.y = cH + 40;
                if (p.y > cH + 40) p.y = -40;

                // Mouse attraction
                const dx = mx - p.x, dy = my - p.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < MOUSE_R && d > 1) {
                    const f = ((MOUSE_R - d) / MOUSE_R) * 0.05 * (p.layer + 1) * 0.4;
                    p.vx += (dx / d) * f;
                    p.vy += (dy / d) * f;
                }

                const cfg = LAYERS[p.layer] || LAYERS[0];
                const ms = cfg.speed * 1.6;
                const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (sp > ms) { p.vx *= ms / sp; p.vy *= ms / sp; }
                p.vx *= 0.997;
                p.vy *= 0.997;
            }

            // Connections + particles per layer
            for (let li = 0; li < 3; li++) {
                const lp = particles.filter(p => p.layer === li);
                const cd = LAYERS[li].connDist;

                for (let i = 0; i < lp.length; i++) {
                    for (let j = i + 1; j < lp.length; j++) {
                        const ddx = lp[i].x - lp[j].x, ddy = lp[i].y - lp[j].y;
                        const dd = Math.sqrt(ddx * ddx + ddy * ddy);
                        if (dd < cd) {
                            const a = (1 - dd / cd) * (0.06 + li * 0.07);
                            ctx.beginPath();
                            ctx.moveTo(lp[i].x, lp[i].y);
                            ctx.lineTo(lp[j].x, lp[j].y);
                            ctx.strokeStyle = `rgba(${G.r},${G.g},${G.b},${a})`;
                            ctx.lineWidth = 0.4 + li * 0.4;
                            ctx.stroke();
                        }
                    }
                }

                for (const p of lp) {
                    const pulse = 1 + Math.sin(t * (1.2 + li * 0.5) + p.phase) * 0.3;
                    const r = p.size * pulse;
                    const op = p.baseOpacity;

                    // Outer glow
                    const glR = r * (4 + li * 2);
                    const gg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glR);
                    gg.addColorStop(0, `rgba(${G.r},${G.g},${G.b},${op * 0.4})`);
                    gg.addColorStop(0.35, `rgba(${G.r},${G.g},${G.b},${op * 0.12})`);
                    gg.addColorStop(1, `rgba(${G.r},${G.g},${G.b},0)`);
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, glR, 0, Math.PI * 2);
                    ctx.fillStyle = gg;
                    ctx.fill();

                    // Core dot
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${G.r},${G.g},${G.b},${op})`;
                    ctx.fill();

                    // White core for front layer
                    if (li === 2) {
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, r * 0.4, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(${W.r},${W.g},${W.b},${op * 0.6})`;
                        ctx.fill();
                    }
                }
            }

            // ────── Central nexus ──────
            const nx = cW * 0.5, ny = cH * 0.44;
            const nP = 1 + Math.sin(t * 0.7) * 0.5;
            const nR = 4 * nP;

            // Expanding rings
            for (let ri = 0; ri < 3; ri++) {
                const ph = ((t * 0.4 + ri * 0.33) % 1);
                const rr = 25 + ph * 200;
                const ra = (1 - ph) * 0.08;
                ctx.beginPath();
                ctx.arc(nx, ny, rr, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(${G.r},${G.g},${G.b},${ra})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }

            // Nexus glow
            const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, 80 * nP);
            ng.addColorStop(0, `rgba(${G.r},${G.g},${G.b},0.15)`);
            ng.addColorStop(0.4, `rgba(${G.r},${G.g},${G.b},0.04)`);
            ng.addColorStop(1, `rgba(${G.r},${G.g},${G.b},0)`);
            ctx.beginPath();
            ctx.arc(nx, ny, 80 * nP, 0, Math.PI * 2);
            ctx.fillStyle = ng;
            ctx.fill();

            // Nexus core
            ctx.beginPath();
            ctx.arc(nx, ny, nR, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${G.r},${G.g},${G.b},0.6)`;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(nx, ny, nR * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,0.7)`;
            ctx.fill();

            // ────── Mouse glow ──────
            if (mx > 0 && my > 0 && mx < cW && my < cH) {
                const mg = ctx.createRadialGradient(mx, my, 0, mx, my, MOUSE_R * 0.55);
                mg.addColorStop(0, `rgba(${G.r},${G.g},${G.b},0.09)`);
                mg.addColorStop(1, `rgba(${G.r},${G.g},${G.b},0)`);
                ctx.beginPath();
                ctx.arc(mx, my, MOUSE_R * 0.55, 0, Math.PI * 2);
                ctx.fillStyle = mg;
                ctx.fill();
            }

            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", onMouse);
            canvas.removeEventListener("touchmove", onTouch);
            canvas.removeEventListener("mouseleave", onLeave);
            canvas.removeEventListener("touchend", onLeave);
        };
    }, [init]);

    return (
        <div className="absolute inset-0 z-20 overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-auto"
                style={{ opacity: 1.0 }}
            />
        </div>
    );
}
