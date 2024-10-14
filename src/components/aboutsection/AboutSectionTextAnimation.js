'use client';

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AboutSectionTextAnimation({ children, Yanimation }) {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (Yanimation) {
            gsap.fromTo(textRef.current, {
                y: 70,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                delay: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',  // Commence l'animation quand l'élément arrive à 80% de la hauteur de la fenêtre
                    toggleActions: 'play none none none',  // L'animation se joue une seule fois
                },
            })
        } else {
            gsap.fromTo(textRef.current, {
                opacity: 0,
            }, {
                opacity: 1,
                delay: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            })
        }
    }, [])


    return (
        <span ref={textRef} style={{ display: 'inline-block', opacity: 0 }}>{children}</span> // inline-block permet de s’assurer que l’élément peut être déplacé comme un bloc tout en conservant son comportement de texte.
    )
}

export default AboutSectionTextAnimation;