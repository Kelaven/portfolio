"use client";

import ScrollAnimation from '@/components/common/ScrollAnimation';
import React, { useEffect, useState } from 'react';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileScrollAnimation from '@/components/common/MobileScrollAnimation';


function ContactCircle() {

    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Détecter la largeur de l'écran et ajuster `isMobile` en fonction
            setIsMobile(window.matchMedia("(max-width: 768px)").matches); //  vérifie si la largeur de la fenêtre est inférieure ou égale à 768px, renvoie true si la condition est remplie 
        };
        // Vérifier la taille de l'écran au premier chargement
        handleResize();
        // Ajouter un écouteur d'événement pour surveiller les changements de taille
        window.addEventListener('resize', handleResize);
        // Nettoyer l'événement lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(true);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [])


    return (
        isLoading && (
            <div className="text-black flex justify-center">
                {isMobile ? (  // si oui, adapter les markers de scrolltrigger
                    <MobileScrollAnimation>
                        <FontAwesomeIcon icon={faCircle} className="text-xl" />
                    </MobileScrollAnimation>
                ) : (
                    <ScrollAnimation>
                        <FontAwesomeIcon icon={faCircle} className="text-xl" />
                    </ScrollAnimation>
                )}
            </div>
        )
    );
}

export default ContactCircle;