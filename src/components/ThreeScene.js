"use client";

import React from 'react'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Moon from "@/components/Moon";

function ThreeScene() {
    return (
        <Canvas>  {/* Scène ThreeJS */}
            <Suspense fallback={null}> {/* rend le chargement de la scène asynchrone */}
                <Moon />
            </Suspense>
        </Canvas>
    )
}

export default ThreeScene;