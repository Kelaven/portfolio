'use client';

import { Sphere } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import gsap from "gsap";


function Moon() {
    const sphereRef = useRef(null) // accès à la sphère
    const materialRef = useRef(null) // accès à la couleur
    const [sphereSize, setSphereSize] = useState(5); // Taille initiale de la sphère

    // Adapter la taille de la sphère à l'écran 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) { // Mobile
                setSphereSize(3.5); // Réduire la taille de la sphère
            } else {
                setSphereSize(5); // Taille normale pour desktop
            }
        };

        // Appelle la fonction une première fois
        handleResize();

        // Event listener pour ajuster la taille lors du resize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Animation d'apparition de la sphère
        gsap.fromTo(sphereRef.current.scale, {
            x: 0,
            y: 0,
            z: 0
        }, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            delay: 0.5,
            ease: "power1.out"
        });
        gsap.fromTo(materialRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 1,
            ease: "power1.out"
        });

        // Timeline pour passer progressivement par plusieurs couleurs 
        const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: "power1.inOut", delay: 2 });
        tl.to(materialRef.current.color, {         // Blanc vers blanc cassé
            r: 245 / 255, // Couleur #F5F5DC
            g: 245 / 255,
            b: 220 / 255,
            duration: 2
        });
        tl.to(materialRef.current.color, {         // Blanc cassé vers jaune pâle
            r: 255 / 255, // Couleur #FFFFE0
            g: 255 / 255,
            b: 224 / 255,
            duration: 2
        });
        tl.to(materialRef.current.color, {         // Jaune pâle vers jaune clair
            r: 255 / 255, // Couleur #FFFACD
            g: 250 / 255,
            b: 205 / 255,
            duration: 2
        });
        tl.to(materialRef.current.color, {         // Jaune clair vers doré clair
            r: 255 / 255, // Couleur #FFD700
            g: 215 / 255,
            b: 0 / 255,
            duration: 2
        });
        tl.to(materialRef.current.color, {         // Doré clair vers doré moyen
            r: 218 / 255, // Couleur #DAA520
            g: 165 / 255,
            b: 32 / 255,
            duration: 2
        });
        tl.to(materialRef.current.color, {         // Doré moyen vers doré foncé
            r: 184 / 255, // Couleur #B8860B
            g: 134 / 255,
            b: 11 / 255,
            duration: 2
        });

    }, []);



    return (
        <Sphere args={[sphereSize, 64, 64]} ref={sphereRef}>
            <meshStandardMaterial color="#ffffff" ref={materialRef} transparent={true} />
        </Sphere>
    )
}

export default Moon;


// * 1 Création de la sphère : 3 pour la taille, 64 pour la width et height afin d'avoir une balle parfaite

// * 2 Travail de la sphère qui est brute : avec <meshStandardMaterial>