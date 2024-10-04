'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);






function Button({ children }) {

    const headerBtnsRef = useRef(null);

    useEffect(() => {
        // apparition boutons
        gsap.to(headerBtnsRef.current, {
            opacity: 1,
            delay: 1,
            ease: "power1.out"
        })
        // effet boutons au scroll
        let lastScrollY = window.scrollY; // Stocke la position précédente du scroll
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY; // Récupère la position actuelle du scroll
            if (currentScrollY > lastScrollY) { // scroll down
                gsap.to(headerBtnsRef.current, {
                    y: "-300%",
                    duration: 1.5,
                    ease: "power1.out"
                })
            } else { // scroll up
                gsap.to(headerBtnsRef.current, {
                    y: "0%",
                    duration: 1.5,
                    ease: "power1.out"
                })
            }
        })
    }, [])





    return (
        <button ref={headerBtnsRef} className="font-space_grotesk px-4 py-2 border border-white rounded-sm text-white bg-black font-bold hover:bg-white hover:text-black transition-colors ease-in-out duration-300 opacity-0">{children}</button>
    )
}

export default Button