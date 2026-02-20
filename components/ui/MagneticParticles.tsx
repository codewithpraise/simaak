"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

function ParticleField() {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 1500;

    const [positions, initialPositions, velocities] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const initPos = new Float32Array(count * 3);
        const vel = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 30;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 10;

            pos[i * 3] = initPos[i * 3] = x;
            pos[i * 3 + 1] = initPos[i * 3 + 1] = y;
            pos[i * 3 + 2] = initPos[i * 3 + 2] = z;

            vel[i * 3] = (Math.random() - 0.5) * 0.01;
            vel[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
            vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
        }
        return [pos, initPos, vel];
    }, []);

    const mouse = useRef({ x: 0, y: 0 });

    useFrame((state) => {
        if (!pointsRef.current) return;

        // Update mouse ref for R3F
        mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, (state.pointer.x * state.viewport.width) / 2, 0.1);
        mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, (state.pointer.y * state.viewport.height) / 2, 0.1);

        const posAttr = pointsRef.current.geometry.attributes.position;
        const positionsArr = posAttr.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Apply drift
            positionsArr[i3] += velocities[i3];
            positionsArr[i3 + 1] += velocities[i3 + 1];

            // Magnetic attraction to mouse
            const dx = mouse.current.x - positionsArr[i3];
            const dy = mouse.current.y - positionsArr[i3 + 1];
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 4) {
                const force = (4 - dist) / 4;
                positionsArr[i3] += dx * force * 0.02;
                positionsArr[i3 + 1] += dy * force * 0.02;
            } else {
                // Return to local drift orbit if far
                const backX = initialPositions[i3] - positionsArr[i3];
                const backY = initialPositions[i3 + 1] - positionsArr[i3 + 1];
                positionsArr[i3] += backX * 0.005;
                positionsArr[i3 + 1] += backY * 0.005;
            }
        }

        posAttr.needsUpdate = true;
        pointsRef.current.rotation.y += 0.0005;
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                size={0.06}
                color="#d4a331"
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    );
}

export function MagneticParticles() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <ParticleField />
            </Canvas>
        </div>
    );
}
