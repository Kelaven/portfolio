'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import CardHeader from './CardHeader';
import Link from "next/link";

function ModalHeader({ openMenu, setOpenMenu }) {
    const modal = useRef(null);
    const [isMobileLandscape, setIsMobileLandscape] = useState(false); // par principe, au lancement on est pas en mobile paysage

    // Rétablir le scroll en mobile paysage :
    const updateLandscapeMode = () => {
        const isLandscape = window.matchMedia('(max-width: 950px) and (orientation: landscape)').matches;
        setIsMobileLandscape(isLandscape);
    };

    useEffect(() => {
        // Détecter si on est en mode paysage mobile :
        updateLandscapeMode();

        // écouter les changements d'orientation :
        const mediaQuery = window.matchMedia('(max-width: 950px) and (orientation: landscape)');
        mediaQuery.addEventListener('change', updateLandscapeMode);

        return () => {
            // clean up :
            mediaQuery.removeEventListener('change', updateLandscapeMode);
        };
    }, []);

    useEffect(() => {
        const modalEl = modal.current;

        if (openMenu) {
            if (!isMobileLandscape) {
                document.body.style.overflowY = "hidden";
            }
            gsap.to(modalEl, {
                opacity: 1,
                ease: "power1.out",
            });
            modalEl.classList.remove('pointer-events-none');
        } else {
            document.body.style.overflowY = "auto";
            gsap.to(modalEl, {
                opacity: 0,
                ease: "power1.in",
            });
            modalEl.classList.add('pointer-events-none');
        }
    }, [openMenu, isMobileLandscape]);

    // Fonction pour fermer la modal
    const handleClick = () => {
        setTimeout(() => {
            setOpenMenu(false);
        }, 400);
    };

    return (
        <div ref={modal} className="modal absolute z-10 top-0 left-0 w-full h-svh mobile-landscape:min-h-[800px] mobile-landscape:overflow-auto bg-black opacity-0 flex whitespace-nowrap overflow-x-auto items-center justify-start lg:justify-between pointer-events-none">
            <CardHeader neonColor="white" imgSrc='/assets/images/about-illustration-70.webp' link="#aboutsection" onClick={handleClick}>
                À propos
            </ CardHeader>
            <CardHeader neonColor="yellow" imgSrc='/assets/images/projects-illustration-70.webp' link="#projectssection" onClick={handleClick}>
                Mes projets
            </CardHeader>
            <CardHeader neonColor="darkgold" imgSrc='/assets/images/contact-illustration-70-darkgold-v2.webp' isTheLast={true} link="#contactsection" onClick={handleClick}> Contactez-moi
            </CardHeader>
            <Link href="https://api.kevin-lavenant.fr/login" passHref target="_blank" rel="noopener noreferrer" className='absolute bottom-20 right-4 lg:right-14 2xl:right-20 font-space_grotesk font-thin'>
                Accès admin
            </Link>
        </div>
    );
}

export default ModalHeader;