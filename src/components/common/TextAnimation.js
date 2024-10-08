'use client';

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

function TextAnimation({ children }) {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(textRef.current, {
            y: 70,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 1,
            ease: "power1.out",
            overwrite: true
        })
    }, [])


    return (
        <span ref={textRef} style={{ display: 'inline-block', opacity: 0 }}>{children}</span> // inline-block permet de s’assurer que l’élément peut être déplacé comme un bloc tout en conservant son comportement de texte.
    )
}

export default TextAnimation;