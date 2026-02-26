"use client";

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import ThreeGlobe from "three-globe";

/**
 * WorldGlobe — GitHub-style high-fidelity 3D globe.
 * Uses three-globe and official GeoJSON-style data points.
 */

const GLOBE_CONFIG = {
    pointColor: "#d4a331",
    lineColor: "#d4a331",
    atmosphereColor: "#d4a331",
    pointRadius: 0.15,
    arcDashLength: 0.5,
    arcDashGap: 2,
    arcDashInitialGap: 1,
    arcDashAnimateTime: 3000,
};

function GlobeInner() {
    const globeRef = useRef<ThreeGlobe>(null);
    const ringsRef = useRef<THREE.Group>(null);
    const particlesRef = useRef<THREE.Points>(null);
    const { scene } = useThree();

    useEffect(() => {
        const globe = new (ThreeGlobe as any)({})
            .showGlobe(false) // Hide the solid sphere
            .showAtmosphere(true)
            .atmosphereColor(GLOBE_CONFIG.atmosphereColor)
            .atmosphereAltitude(0.18);

        // Arcs Data - Brighter and more dense
        const arcsData = [...Array(40)].map(() => ({
            startLat: (Math.random() - 0.5) * 160,
            startLng: (Math.random() - 0.5) * 360,
            endLat: (Math.random() - 0.5) * 160,
            endLng: (Math.random() - 0.5) * 360,
            color: GLOBE_CONFIG.lineColor,
        }));

        globe.arcsData(arcsData)
            .arcColor('color')
            .arcDashLength(0.4)
            .arcDashGap(2)
            .arcDashAnimateTime(2500)
            .arcAltitude(0.25)
            .arcStroke(0.4);

        // Hexagon Binning for "Ethereal" surface
        globe.hexBinPointsData([...Array(1000)].map(() => ({
            lat: (Math.random() - 0.5) * 180,
            lng: (Math.random() - 0.5) * 360,
        })))
            .hexBinPointWeight(1)
            .hexBinResolution(4)
            .hexMargin(0.1)
            .hexTopColor(() => GLOBE_CONFIG.pointColor)
            .hexSideColor(() => "rgba(212,163,49,0.1)");

        globeRef.current = globe;
        scene.add(globe);

        return () => {
            scene.remove(globe);
        };
    }, [scene]);

    // Architectural Rings & Particles
    const ringGeom = new THREE.TorusGeometry(120, 0.2, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({ color: "#d4a331", transparent: true, opacity: 0.15 });

    const particleCount = 600;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        const r = 140 + Math.random() * 80;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001;
        }
        if (ringsRef.current) {
            ringsRef.current.rotation.y = time * 0.08;
            ringsRef.current.rotation.z = time * 0.04;
        }
        if (particlesRef.current) {
            particlesRef.current.rotation.y = -time * 0.03;
        }
    });

    return (
        <group>
            <group ref={ringsRef}>
                <mesh geometry={ringGeom} material={ringMat} rotation={[Math.PI / 2.2, 0, 0]} />
                <mesh geometry={new THREE.TorusGeometry(150, 0.1, 16, 120)} material={new THREE.MeshBasicMaterial({ color: "#d4a331", transparent: true, opacity: 0.08 })} rotation={[Math.PI / 4, Math.PI / 3, 0]} />
            </group>
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particlePositions.length / 3}
                        array={particlePositions}
                        itemSize={3}
                        args={[particlePositions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.6}
                    color="#d4a331"
                    transparent
                    opacity={0.4}
                    sizeAttenuation
                />
            </points>
        </group>
    );
}

export function WorldGlobe() {
    return (
        <div className="w-full h-full relative">
            <Canvas
                camera={{ position: [0, 0, 400], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance",
                    stencil: false,
                    preserveDrawingBuffer: false,
                }}
            >
                <ambientLight intensity={1.2} />
                <pointLight position={[200, 200, 200]} intensity={3} color="#d4a331" />
                <pointLight position={[-200, -200, -200]} intensity={1.5} color="#ffffff" />
                <pointLight position={[0, 0, 150]} intensity={2} color="#d4a331" />
                <GlobeInner />
            </Canvas>
        </div>
    );
}


