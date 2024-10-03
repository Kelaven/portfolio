'use client';

import { Sphere } from '@react-three/drei';

function Moon() {


    return (
        <Sphere args={[3, 64, 64]}>
            <meshStandardMaterial color="#00ff83" />
        </Sphere>
    )
}

export default Moon;


// * 1 Création de la sphère : 2 pour la taille, 64 pour la width et height afin d'avoir une balle parfaite

// * 2 Travail de la sphère qui est brute : avec <meshStandardMaterial>