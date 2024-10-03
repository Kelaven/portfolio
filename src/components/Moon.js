'use client';

import { Sphere } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import gsap from "gsap";


function Moon() {
    const sphereRef = useRef(null) // accès à la sphère
    console.log(sphereRef);

    useEffect(() => {
        // const tl = gsap.timeline({ defaults: { duration: 1 } })

        gsap.fromTo(sphereRef.current.scale, {
            x: 0,
            y: 0,
            z: 0
        }, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1
        });

    }, []);



    return (
        <Sphere args={[3, 64, 64]} ref={sphereRef}>
            <meshStandardMaterial color="#00ff83" />
        </Sphere>
    )
}

export default Moon;


// * 1 Création de la sphère : 3 pour la taille, 64 pour la width et height afin d'avoir une balle parfaite

// * 2 Travail de la sphère qui est brute : avec <meshStandardMaterial>