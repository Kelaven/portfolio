"use client";

import React, { useEffect, useRef } from 'react';

function ScrollAnimation({ children }) {
    const heroIconRef = useRef(null);


    useEffect(() => {
        // Dynamically import GSAP and ScrollTrigger only on the client-side
        const loadGsap = async () => {
            if (typeof window !== 'undefined') {
                const gsap = (await import('gsap')).default;
                const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;

                gsap.registerPlugin(ScrollTrigger);

                // Initialisation de l'icône avec une petite échelle
                gsap.set(heroIconRef.current, {
                    scale: 0.5,  // Taille initiale réduite
                    transformOrigin: "center 70%",
                });

                // Configuration de l'animation
                gsap.to(heroIconRef.current, {
                    transformOrigin: "center 70%",
                    scale: 400,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: heroIconRef.current,
                        start: "65vh bottom",
                        end: "100%", // L'animation se termine après avoir défilé 100% de la hauteur de l'écran
                        scrub: 1,
                    },
                })

            }
        };

        loadGsap(); // Appel de la fonction pour charger GSAP
    }, []);

    return (
        <section ref={heroIconRef}>
            {children}
        </section>
    );
}

export default ScrollAnimation;
