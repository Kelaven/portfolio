'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
gsap.registerPlugin(TextPlugin);


function Button({ children, headerMenuBtn }) {

    const headerBtnsRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // ! Animations au 1er chargement et au scroll
    useEffect(() => {
        setIsMounted(true);
        // apparition boutons au 1er chargement
        gsap.to(headerBtnsRef.current, {
            opacity: 1,
            delay: 1,
            ease: "power1.out"
        });
        // apparition boutons au scroll
        let lastScrollY = window.scrollY; // Stocke la position précédente du scroll
        const handleScroll = () => {
            const currentScrollY = window.scrollY; // Récupère la position actuelle du scroll
            if (currentScrollY > lastScrollY) { // scroll down
                gsap.to(headerBtnsRef.current, {
                    y: "-300%",
                    duration: 1,
                    ease: "power1.out"
                })
            } else { // scroll up
                gsap.to(headerBtnsRef.current, {
                    y: "0%",
                    duration: 1,
                    ease: "power1.out"
                })
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // arreter l'écoute de l'event scroll
        };
    }, [])

    // ! Apparition de la modale
    // console.log(openMenu);
    // console.log(button);
    const handleClick = () => {
        if (headerMenuBtn) {
            setOpenMenu(!openMenu);
        }
    }
    useEffect(() => {
        const modal = document.createElement("div");
        if (openMenu) {
            console.log(children);
            modal.style.width = "100%";
            modal.style.height = "100vh";
            modal.style.backgroundColor = "red";
            modal.style.position = "fixed";
            modal.style.top = 0;
            modal.style.left = 0;
            modal.className = "modal"; // pour l'identifier
            document.body.appendChild(modal);
            document.body.style.overflow = "hidden";
        } else {
            const existingModal = document.querySelector('.modal');
            if (existingModal) {
                document.body.removeChild(existingModal);
            }
            document.body.style.overflow = "auto";
        }

        //   return () => {
        //     second
        //   }
    }, [openMenu]) // Le useEffect se déclenche lorsque openMenu change


    return (
        <button ref={headerBtnsRef} onClick={handleClick} className="font-space_grotesk px-4 py-2 border border-white rounded-sm text-white bg-black font-bold hover:bg-white hover:text-black transition-colors ease-in-out duration-300 opacity-0">
            {headerMenuBtn ? (
                <span className="flex items-center">
                    {children}
                    {isMounted && <FontAwesomeIcon icon={openMenu ? faXmark : faBars} className="ml-4 w-4" />}
                </span>
            ) :
                (children)}
        </button>
    )
}

export default Button