"use client";

import React, { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

const GOLD = new THREE.Color(0xd4a331);
const CREAM = new THREE.Color(0xfaf9f6);
const pointer = { x: 0, y: 0 };

function VortexParticles({ count = 2000 }) {
    const pointsRef = useRef<THREE.Points>(null);

    const [positions, phases, sizes] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const ph = new Float32Array(count);
        const sz = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            // Spiral formation
            const angle = Math.random() * Math.PI * 2;
            const radius = 2 + Math.random() * 8;
            const height = (Math.random() - 0.5) * 15;

            pos[i * 3] = Math.cos(angle) * radius;
            pos[i * 3 + 1] = height;
            pos[i * 3 + 2] = Math.sin(angle) * radius;

            ph[i] = Math.random() * Math.PI * 2;
            sz[i] = 0.02 + Math.random() * 0.05;
        }
        return [pos, ph, sz];
    }, [count]);

    useFrame((state) => {
        if (!pointsRef.current) return;
        const t = state.clock.elapsedTime;

        const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const x = posArray[i3];
            const z = posArray[i3 + 2];

            // Calculate current radius and angle
            const radius = Math.sqrt(x * x + z * z);
            let angle = Math.atan2(z, x);

            // Swirl speed based on radius (closer = faster)
            const speed = (0.5 / radius) + 0.1;
            angle += speed * 0.01;

            // Update positions with swirl + slight bobbing
            posArray[i3] = Math.cos(angle) * radius;
            posArray[i3 + 2] = Math.sin(angle) * radius;
            posArray[i3 + 1] += Math.sin(t + phases[i]) * 0.002;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Slight rotation of the whole cloud
        pointsRef.current.rotation.y += 0.0005;

        // Mouse react
        pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, pointer.y * 0.1, 0.05);
        pointsRef.current.rotation.z = THREE.MathUtils.lerp(pointsRef.current.rotation.z, -pointer.x * 0.1, 0.05);
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={GOLD}
                size={0.24}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={1}
            />
        </Points>
    );
}

function ConnectivityLines({ count = 40 }) {
    const linesRef = useRef<THREE.Group>(null);

    const lineData = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            radius: 2 + Math.random() * 5,
            speed: 0.2 + Math.random() * 0.4,
            offset: Math.random() * Math.PI * 2,
            height: (Math.random() - 0.5) * 10,
            opacity: 0.1 + Math.random() * 0.2
        }));
    }, [count]);

    useFrame((state) => {
        if (!linesRef.current) return;
        const t = state.clock.elapsedTime;

        linesRef.current.children.forEach((child, i) => {
            const data = lineData[i];
            child.rotation.y = t * data.speed + data.offset;
            child.position.y = Math.sin(t * 0.5 + data.offset) * 0.5;
        });

        linesRef.current.rotation.y += 0.001;
    });

    return (
        <group ref={linesRef}>
            {lineData.map((data, i) => (
                <mesh key={i} rotation={[Math.random() * Math.PI, 0, 0]}>
                    <ringGeometry args={[data.radius, data.radius + 0.02, 64]} />
                    <meshBasicMaterial
                        color={GOLD}
                        transparent
                        opacity={data.opacity}
                        side={THREE.DoubleSide}
                        depthWrite={false}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
            ))}
        </group>
    );
}

function Scene() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const particleCount = isMobile ? 800 : 2500;
    const lineCount = isMobile ? 15 : 40;

    return (
        <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
            <VortexParticles count={particleCount} />
            {/* Secondary Glint Layer for 'God-Tier' Sparkle */}
            <VortexParticles count={Math.floor(particleCount / 4)} />
            <ConnectivityLines count={lineCount} />
            <ambientLight intensity={2.5} />
            <pointLight position={[0, 0, 0]} intensity={12} color={GOLD} />
            <pointLight position={[5, 10, 5]} intensity={6} color={GOLD} />
            <pointLight position={[-5, -10, -5]} intensity={4} color={CREAM} />
            <pointLight position={[0, 0, 10]} intensity={3} color={GOLD} />
        </Float>
    );
}

export function HeroVortex() {
    const [contextLost, setContextLost] = useState(false);
    const [key, setKey] = useState(0);

    const onPointerMove = useCallback((e: { clientX: number; clientY: number }) => {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }, []);

    useEffect(() => {
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        return () => window.removeEventListener("pointermove", onPointerMove);
    }, [onPointerMove]);

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
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            {!contextLost && (
                <Canvas
                    key={key}
                    camera={{ position: [0, 0, 12], fov: 45, near: 0.1, far: 100 }}
                    dpr={[1, 1.5]}
                    gl={{
                        antialias: false,
                        alpha: true,
                        powerPreference: "high-performance",
                        preserveDrawingBuffer: false,
                        stencil: false,
                    }}
                    onCreated={({ gl }) => {
                        gl.domElement.addEventListener("webglcontextlost", (e) => {
                            e.preventDefault();
                            setContextLost(true);
                        });
                    }}
                >
                    <Scene />
                </Canvas>
            )}
            {/* Subtle Gradient Mask — almost completely transparent center for maximal WebGL impact */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#faf9f6_100%)] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#faf9f6]/90 to-transparent pointer-events-none z-10" />
        </div>
    );
}
