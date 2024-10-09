"use client";

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Meteor from './Meteor';
// import test from '../../../public/assets/logos/'

function SkillsThreeScene() {
    return (
        <div className='bg-white'>
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault fov={45} position={[0, 0, 20]} />
                <ambientLight intensity={1} />
                <directionalLight position={[0, 0, 0.05]} />
                <Meteor img="/assets/logos/javascript.svg" />
                <OrbitControls enableRotate={false} enableZoom={false} />
            </Canvas>
        </ div>
    )
}

export default SkillsThreeScene;