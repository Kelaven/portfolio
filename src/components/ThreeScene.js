"use client";

import React, { useEffect, useRef } from 'react'
import Moon from "@/components/Moon";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import gsap from "gsap";

function ThreeScene() {


    return (
        <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault fov={45} position={[0, 0, 20]} up={[0, 0, -1]} />
            <pointLight color={0xffffff}
                intensity={70}
                distance={100}
                position={[0, 10, -6]} />
            <Moon />
            <OrbitControls enableDamping={true} enablePan={false} enableZoom={false} autoRotate={true} autoRotateSpeed={2} />
        </Canvas>
    )
}

export default ThreeScene;




// * 1 Créer la scène avec <Canvas>. dpr={[1, 2]} désigne le device pixel ratio, pour améliorer le rendu de la lune. le ratio est de 1 pour les écrans normaux et 2 pour les écrans 4K/retina (le ratio s'ajuste automatiquement selon l'appareil de l'utilisateur).

// * 2 Ajouter la caméra, avec un champ de vision de 45 degrès pour une vue naturelle et réaliste sans distorsion, et un placement de 20 unités en arrière sur l'axe Z (pour ne pas être sur la même position que la lune). up={[0, 0, -1]}, sert à dire à la caméra que le haut de la scène correspond maintenant à l’axe Z négatif (au lieu de l’axe Y positif par défaut) => on voir les couleurs tourner dans le sens horaire.

// * 3 Ajouter la lumière ponctuelle (blanche, intensité, portée de 100 unités et décalage au-dessus et à droite de la scène). 

// * 4 Si besoin ajouter un OrbitControls, enableDamping permet que le mouvement s'arrete de manière smooth



//  NB : 
// •	React Three Fiber se charge de créer et gérer la scène Three.js et te donne la base pour interagir avec Three.js via des composants React.
// •	Drei fournit des composants plus haut niveau qui simplifient certaines tâches et qui sont prêts à l’emploi, évitant ainsi d’écrire beaucoup de code détaillé.