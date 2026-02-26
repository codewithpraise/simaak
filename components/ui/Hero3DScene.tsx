"use client";

import React, { useRef, useMemo, useCallback, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ═══════════════════════════════════════════
   3D Telecom Network Topology — Hero Scene
   Floating golden nodes connected by luminous
   beams, reacting to cursor position.
   With WebGL context recovery and visibility fix.
   ═══════════════════════════════════════════ */

const GOLD = new THREE.Color(0xd4a331);
const CREAM = new THREE.Color(0xfaf9f6);

/* ── Shared pointer state ── */
const pointer = { x: 0, y: 0 };

/* ── Network Nodes ── */
function NetworkNodes({ count = 30 }: { count?: number }) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const nodes = useMemo(() => {
        const arr: { pos: THREE.Vector3; vel: THREE.Vector3; baseY: number; phase: number; size: number }[] = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 16;
            const y = (Math.random() - 0.5) * 9;
            const z = (Math.random() - 0.5) * 6 - 2;
            arr.push({
                pos: new THREE.Vector3(x, y, z),
                vel: new THREE.Vector3((Math.random() - 0.5) * 0.003, (Math.random() - 0.5) * 0.003, 0),
                baseY: y,
                phase: Math.random() * Math.PI * 2,
                size: 0.05 + Math.random() * 0.08, // Increased size for visibility
            });
        }
        return arr;
    }, [count]);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.elapsedTime;

        for (let i = 0; i < count; i++) {
            const n = nodes[i];
            n.pos.y = n.baseY + Math.sin(t * 0.4 + n.phase) * 0.3;
            n.pos.x += n.vel.x;
            if (n.pos.x > 9) n.pos.x = -9;
            if (n.pos.x < -9) n.pos.x = 9;

            const dx = n.pos.x - pointer.x * 6;
            const dy = n.pos.y - pointer.y * 4;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 3) {
                const force = (3 - dist) * 0.002;
                n.pos.x += dx * force;
                n.pos.y += dy * force;
            }

            const scale = n.size * (1 + Math.sin(t * 2 + n.phase) * 0.3);
            dummy.position.copy(n.pos);
            dummy.scale.setScalar(scale);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <sphereGeometry args={[1, 8, 8]} /> {/* Lower segment count */}
            <meshBasicMaterial color={GOLD} transparent opacity={0.8} />
        </instancedMesh>
    );
}

/* ── Connection Beams ── */
function ConnectionBeams({ count = 30 }: { count?: number }) {
    const ref = useRef<THREE.LineSegments>(null);

    const { pairs, positions, material } = useMemo(() => {
        const p: [number, number][] = [];
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                if (Math.random() < 0.12) p.push([i, j]);
            }
        }
        const capped = p.slice(0, 60);
        const pos = new Float32Array(capped.length * 6);
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        const mat = new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.25, depthWrite: false }); // Increased opacity
        return { pairs: capped, positions: pos, material: mat };
    }, [count]);

    const geoRef = useRef<THREE.BufferGeometry>(null);

    useFrame(() => {
        const t = performance.now() * 0.001;
        for (let idx = 0; idx < pairs.length; idx++) {
            const [a, b] = pairs[idx];
            const ax = Math.sin(t * 0.3 + a) * 6;
            const ay = Math.cos(t * 0.2 + a * 0.7) * 3;
            const az = -2 + Math.sin(a * 1.3) * 2;
            const bx = Math.sin(t * 0.3 + b) * 6;
            const by = Math.cos(t * 0.2 + b * 0.7) * 3;
            const bz = -2 + Math.sin(b * 1.3) * 2;

            const dx = ax - bx, dy = ay - by, dz = az - bz;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            const o = idx * 6;
            if (dist < 6) {
                positions[o] = ax; positions[o + 1] = ay; positions[o + 2] = az;
                positions[o + 3] = bx; positions[o + 4] = by; positions[o + 5] = bz;
            } else {
                positions[o] = positions[o + 1] = positions[o + 2] = 0;
                positions[o + 3] = positions[o + 4] = positions[o + 5] = 0;
            }
        }
        if (geoRef.current) {
            geoRef.current.attributes.position.needsUpdate = true;
        }
    });

    return (
        <lineSegments ref={ref} material={material}>
            <bufferGeometry ref={geoRef}>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
        </lineSegments>
    );
}

/* ── Mouse Tracker ── */
function PointerTracker() {
    const onPointerMove = useCallback((e: { clientX: number; clientY: number }) => {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }, []);

    useEffect(() => {
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        return () => window.removeEventListener("pointermove", onPointerMove);
    }, [onPointerMove]);

    return null;
}

/* ── Main Scene ── */
function Scene({ isMobile }: { isMobile: boolean }) {
    const nodeCount = isMobile ? 15 : 30;

    return (
        <>
            <PointerTracker />
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color={GOLD} />
            <fog attach="fog" args={[CREAM.getHex(), 5, 20]} />
            <NetworkNodes count={nodeCount} />
            <ConnectionBeams count={nodeCount} />
        </>
    );
}

export function Hero3DScene() {
    const [contextLost, setContextLost] = useState(false);
    const [key, setKey] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEffect(() => {
        if (contextLost) {
            const timer = setTimeout(() => {
                setContextLost(false);
                setKey(prev => prev + 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [contextLost]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ opacity: 1 }}>
            {!contextLost && (
                <Canvas
                    key={key}
                    camera={{ position: [0, 0, 7], fov: 50, near: 0.1, far: 50 }}
                    dpr={isMobile ? 1 : [1, 1.5]}
                    gl={{
                        antialias: false,
                        alpha: true,
                        powerPreference: "high-performance",
                        failIfMajorPerformanceCaveat: false,
                        stencil: false,
                        preserveDrawingBuffer: false,
                        depth: true,
                    }}
                    style={{ background: "transparent", pointerEvents: "none" }}
                    onCreated={({ gl }) => {
                        const canvas = gl.domElement;
                        canvas.addEventListener("webglcontextlost", (e) => {
                            e.preventDefault();
                            setContextLost(true);
                        });
                    }}
                >
                    <Scene isMobile={isMobile} />
                </Canvas>
            )}
        </div>
    );
}
