"use client";

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Meteor from './Meteor';

function SkillsThreeScene() {
    return (
        // <div className='bg-white'>
        <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault fov={45} position={[0, 0, 20]} />
            {/* <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 0.05]} /> */}

            {/* Lumière ambiante pour l'éclairage global */}
            <ambientLight intensity={0.6} />
            {/* Lumière directionnelle avant pour éclairer l'objet par devant */}
            <directionalLight
                position={[2, 2, 5]} // Lumière dirigée vers l'avant
                intensity={2}
                castShadow
            />
            {/* Lumière ponctuelle pour intensifier l'éclairage frontal */}
            <pointLight
                position={[0, 0, 10]} // Devant l'objet pour éclairer l'avant
                intensity={30}
                distance={50}
            />
            {/* Lumière directionnelle supplémentaire pour éclairer l'arrière */}
            <directionalLight
                position={[-2, 2, -5]} // Derrière l'objet
                intensity={1.5}
                castShadow
            />
            {/* Option supplémentaire : Lumière hémisphérique pour un éclairage global */}
            <hemisphereLight
                skyColor={"#ffffff"} // Lumière venant du haut
                groundColor={"#444444"} // Lumière venant du bas
                intensity={0.8}
                position={[0, -10, 0]} // Lumière couvrant le haut et l'arrière
            />

            <Meteor img="/assets/logos/javascript.svg" color='#f7df1e' />
            <OrbitControls enableRotate={true} enableZoom={false} />
        </Canvas>
        // </ div>
    )
}

export default SkillsThreeScene;