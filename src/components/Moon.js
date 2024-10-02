'use client';

import React from 'react'
import { Sphere } from '@react-three/drei';

function Moon() {
    return (
        <Sphere args={[1, 32, 32]}>
            {/* Matériau standard pour la sphère (tu peux ajuster la couleur et la texture) */}
        </Sphere>
    )
}

export default Moon;