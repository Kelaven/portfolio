"use client";

import React, { Suspense, useEffect, useState } from 'react';
import ScrollAnimation from '../../common/ScrollAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import MobileScrollAnimation from '@/components/common/MobileScrollAnimation';
import dynamic from 'next/dynamic';


// Charger ProjectsSectionCard de manière différée
const ProjectsSectionCard = dynamic(() => import('./ProjectsSectionCard'), {
    ssr: false, // Désactiver le rendu côté serveur
    loading: () => (
        <div className="flex justify-center items-center h-40 flex-col">
            <p className='font-space_grotesk text-[#ed471a] text-center mb-4'>Chargement...</p>
            <div className="loaderSpinnerProjects"></div>
        </div>
    ),
});


function ProjectsSection() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleCardLoad = () => {
        setIsLoaded(true);
    };

    // Détecter si on est en mobile portrait ou desktop
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


    return (
        <>
            <div className='relative min-h-200vh w-full bg-black px-4 md:px-12 lg:px-24 pt-6'>
                <div className="blurred-background absolute top-[2.5%] left-[3%] lg:top-[5%] lg:left-[7%] w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] z-0"></div>
                <div className="blurred-background absolute top-[25%] left-[25%] w-[250px] h-[400px] md:w-[0px] md:h-[0px] z-0"></div>
                <div className="blurred-background absolute top-[45%] left-[70%] lg:top-[45%] lg:right-[6%] w-[250px] h-[400px] lg:w-[350px] lg:h-[500px] z-0"></div>
                <div className="blurred-background absolute top-[75%] left-[10%] w-[250px] h-[400px] lg:w-[0px] lg:h-[0px] z-0"></div>
                <div className="blurred-background-reverse absolute bottom-[3%] lg:bottom-[6%] right-[5%] lg:left-[10%] w-[200px] h-[200px] xl:w-[300px] xl:h-[150px] z-0"></div>
                <div className='relative'>
                    <h2 className='text-white text-4xl pb-10 font-bold'>Projets en ligne</h2>
                    <p className='italic text-white pt-10'>Section en cours de mise à jour... Stay tunned !</p>
                    <ProjectsSectionCard onLoad={handleCardLoad} />
                </div>
                {/* {isLoaded && (
                    <div className="text-white flex justify-center pt-20">
                        {isMobile ? (
                            <MobileScrollAnimation>
                                <FontAwesomeIcon icon={faCircle} className="text-xs pt-2" />
                            </MobileScrollAnimation>
                        ) : (
                            <ScrollAnimation>
                                <FontAwesomeIcon icon={faCircle} className="text-xs pt-2" />
                            </ScrollAnimation>
                        )}
                    </div>
                )} */}
            </div>
            {/* <div className='h-28 md:h-80'></div> */}
        </>
    )
}

export default ProjectsSection;