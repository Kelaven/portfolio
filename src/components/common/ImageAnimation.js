'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function ImageAnimation({ children, Yanimation }) {
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (Yanimation) {
            gsap.fromTo(imageRef.current, {
                y: 70,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                delay: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',  // Commence l'animation quand l'élément arrive à 80% de la hauteur de la fenêtre
                    toggleActions: 'play none none none',  // L'animation se joue une seule fois
                },
            });
        } else {
            gsap.fromTo(imageRef.current, {
                opacity: 0,
            }, {
                opacity: 1,
                delay: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });
        }
    }, [Yanimation]);

    return (
        <span ref={imageRef} style={{ opacity: 0 }}>{children}</span>
    );
}

export default ImageAnimation;