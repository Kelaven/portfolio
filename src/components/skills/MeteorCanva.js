import React from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import Meteor from './Meteor';

function MeteorCanva() {
    return (
        <Canvas style={{ height: '160%', width: '100px' }} dpr={[1, 2]}>
            <PerspectiveCamera makeDefault fov={45} position={[0, 0, 20]} />
            <ambientLight intensity={0.6} />
            <directionalLight
                position={[2, 2, 5]}
                intensity={2}
                castShadow
            />
            <pointLight
                position={[0, 0, 10]}
                intensity={30}
                distance={50}
            />
            <directionalLight
                position={[-2, 2, -5]}
                intensity={1.5}
                castShadow
            />
            <hemisphereLight
                skyColor={"#ffffff"}
                groundColor={"#444444"}
                intensity={0.8}
                position={[0, -10, 0]}
            />

            <Meteor img="/assets/logos/javascript.svg" color='#f7df1e' colormap='/assets/textures/Rock01_4K-PNG_Color.png' normalmap='/assets/textures/Rock01_4K-PNG_NormalGL.png' roughnessmap='/assets/textures/Rock01_4K-PNG_Roughness.png' />
            <OrbitControls enableRotate={true} enableZoom={false} />
        </Canvas>
    )
}

export default MeteorCanva