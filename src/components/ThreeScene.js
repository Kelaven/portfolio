"use client";

import React from 'react'
import Moon from "@/components/Moon";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function ThreeScene() {
    return (
        <Canvas>
            <PerspectiveCamera makeDefault fov={45} position={[0, 0, 20]} />
            <pointLight color={0xffffff} intensity={70} distance={100} position={[0, 10, 10]} />
            <Moon />
            {/* <OrbitControls /> */}
        </Canvas>
    )
}

export default ThreeScene;




// * 1 Créer la scène avec <Canvas>

// * 2 Ajouter la caméra, avec un champ de vision de 45 degrès pour une vue naturelle et réaliste sans distorsion, et un placement de 20 unités en arrière sur l'axe Z (pour ne pas être sur la même position que la lune)

// * Ajouter la lumière ponctuelle (blanche, intensité, portée de 100 unités et décalage au-dessus et à droite de la scène). 



//  NB : 
// •	React Three Fiber se charge de créer et gérer la scène Three.js et te donne la base pour interagir avec Three.js via des composants React.
// •	Drei fournit des composants plus haut niveau qui simplifient certaines tâches et qui sont prêts à l’emploi, évitant ainsi d’écrire beaucoup de code détaillé.