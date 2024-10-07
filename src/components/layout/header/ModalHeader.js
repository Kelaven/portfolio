'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import CardHeader from './CardHeader';

function ModalHeader({ openMenu }) {
    const modal = useRef(null);
    const [isMobileLandscape, setIsMobileLandscape] = useState(false); // par principe, au lancement on est pas en mobile paysafe

    // Rétablir le scroll en mobile paysage :
    const updateLandscapeMode = () => {
        const isLandscape = window.matchMedia('(max-width: 950px) and (orientation: landscape)').matches;
        setIsMobileLandscape(isLandscape);
    };

    useEffect(() => {
        // Détecter initialement si on est en mode paysage mobile
        updateLandscapeMode();

        // Écouter les changements d'orientation
        const mediaQuery = window.matchMedia('(max-width: 950px) and (orientation: landscape)');
        mediaQuery.addEventListener('change', updateLandscapeMode);

        return () => {
            // Nettoyer l'écouteur lorsque le composant est démonté
            mediaQuery.removeEventListener('change', updateLandscapeMode);
        };
    }, []);

    useEffect(() => {
        const modalEl = modal.current;

        if (openMenu) {
            if (!isMobileLandscape) {
                document.body.style.overflowY = "hidden";
            }
            // modalEl.removeAttribute('inert');
            gsap.to(modalEl, {
                // x: 0,
                opacity: 1,
                ease: "power1.out",
            });
            modalEl.classList.remove('pointer-events-none');
        } else {
            document.body.style.overflowY = "auto";
            // modalEl.setAttribute('inert', '');
            gsap.to(modalEl, {
                // x: '-100%',
                opacity: 0,
                ease: "power1.in",
            });
            modalEl.classList.add('pointer-events-none');
        }
    }, [openMenu, isMobileLandscape]);

    return (
        <div ref={modal} className="modal absolute z-20 top-0 left-0 w-full h-svh mobile-landscape:min-h-[900px] mobile-landscape:overflow-y-auto mobile-landscape:overflow-x-auto bg-black opacity-0 flex whitespace-nowrap overflow-x-auto items-center justify-start lg:justify-between pointer-events-none">
            <CardHeader neonColor="white" imgSrc='/assets/images/about-illustration-70.webp'> À propos </ CardHeader>
            <CardHeader neonColor="yellow" imgSrc='/assets/images/projects-illustration-70.webp'> Mes projets </CardHeader>
            <CardHeader neonColor="darkgold" imgSrc='/assets/images/contact-illustration-70-darkgold-v2.webp' isTheLast={true}> Contactez-moi </CardHeader>
            <a href="#" className='absolute bottom-20 right-4 lg:right-14 2xl:right-20 font-space_grotesk font-thin'>Accès admin</a>
        </div>
    );
}

export default ModalHeader;