"use client";

import { Decal, Float, Icosahedron, useTexture } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'

function Meteor({ img, color }) {
    const [decal, colorMap, normalMap, roughnessMap] = useTexture([
        img,
        '/assets/textures/Rock009_4K-png_Color.png',
        '/assets/textures/Rock009_4K-png_NormalGL.png',
        '/assets/textures/Rock009_4K-png_Roughness.png',
    ]);

    const meteorRef = useRef(null);
    const [meteorSize, setMeteorSize] = useState(4.5);
    const [logoSize, setLogoSize] = useState(4.5)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) { // Mobile
                setMeteorSize(3.5);
                setLogoSize(4.5);
            } else {
                setMeteorSize(4.5);
                setLogoSize(4.5);
            }
        };

        // Appelle la fonction une première fois
        handleResize();

        // Event listener pour ajuster la taille lors du resize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])


    return (
        <Float speed={1} rotationIntensity={1} floatIntensity={2}>
            <Icosahedron args={[meteorSize, 2]} castShadow ref={meteorRef}>
                <meshStandardMaterial
                    color={color}
                    // color="#b8860b"
                    flatShading={true} // Permet de rendre les facettes bien visibles
                    metalness={0.1} // léger effet métallique
                    roughness={0.7} // brillance, plus c'est proche de 1 moins c'est brillant
                    map={colorMap}          // Texture de couleur
                    normalMap={normalMap}    // Normal Map pour les détails en relief
                    roughnessMap={roughnessMap}  // Rugosité pour la réflexion
                />
                {/* Decal permet d’appliquer une texture (comme le logo) sur une face spécifique : */}
                <Decal
                    position={[0, 0, 5]}  // Position sur la face
                    rotation={[2 * Math.PI, 0, 6.25]}  // orientation
                    scale={logoSize}  // taille du logo
                    map={decal}  // logo
                />
            </Icosahedron>
        </Float>
    )
}

export default Meteor;



// * flatShading est une technique d’ombrage en 3D qui consiste à rendre chaque face d’un objet polygonal (comme un icosaèdre) avec une seule couleur uniforme. Cela signifie que toutes les surfaces ou facettes de l’objet auront des ombres et des reflets constants, au lieu d’un gradient fluide entre les sommets comme avec le smooth shading.