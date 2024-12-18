"use client";

import React, { useEffect, useRef } from 'react';

function ScrollAnimation({ children }) {
    const heroIconRef = useRef(null);


    useEffect(() => {
        // let scrollTriggerInstance; // Stocker l'instance ScrollTrigger pour la nettoyer plus tard

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
                    scale: 400,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: heroIconRef.current,
                        start: "58vh bottom",
                        end: "top top", // Le haut de l’élément arrive en haut de la fenêtre. Donc en scrub l'inverse.
                        // end: "100%", // L'animation se termine après avoir défilé 100% de la hauteur de l'écran
                        scrub: 1,
                        // markers: true,
                        // invalidateOnRefresh: true, // Recalcule les positions sur rafraîchissement
                        // anticipatePin: 1, // Aide à éviter les problèmes de décalage de déclenchement
                    },
                })

            }
        };

        loadGsap(); // Appel de la fonction pour charger GSAP

        // return () => { // clean up
        //     if (scrollTriggerInstance) {
        //         scrollTriggerInstance.scrollTrigger.kill(); // Arrêter et nettoyer ScrollTrigger
        //     }
        // };
    }, []);


    return (
        <div ref={heroIconRef}>
            {children}
        </div>
    );
}

export default ScrollAnimation;

