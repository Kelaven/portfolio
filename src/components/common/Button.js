'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ModalHeader from "../layout/header/ModalHeader";
gsap.registerPlugin(TextPlugin);


function Button({ children, headerMenuBtn, headerHomeBtn }) {

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
            lastScrollY = currentScrollY;
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // arreter l'écoute de l'event scroll
        };
    }, [])

    // ! Apparition de la modale
    const handleClick = () => {
        if (headerMenuBtn) {
            setOpenMenu(!openMenu);
        } else if (headerHomeBtn) {
            window.location.href = "http://localhost:3000/";
        }
    }


    return (
        <>
            <button ref={headerBtnsRef} onClick={handleClick} className="font-space_grotesk px-4 py-2 border border-white rounded-sm text-white bg-black font-bold hover:bg-white hover:text-black transition-colors ease-in-out duration-300 opacity-0 z-50">
                {headerMenuBtn ? (
                    <span className="flex items-center font-space_grotesk">
                        {children}
                        {isMounted && <FontAwesomeIcon icon={openMenu ? faXmark : faBars} className="ml-4 w-4" />}
                    </span>
                ) :
                    (children)}
            </button>
            {/* {openMenu && <ModalHeader />} */}
            <ModalHeader openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </>
    )
}

export default Button;