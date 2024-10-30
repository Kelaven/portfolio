"use client";

// * différer le rendu de ses enfants (children) jusqu’à ce qu’ils soient visibles dans la fenêtre de l’utilisateur


import { useEffect, useRef, useState } from "react";

const ObserverWrapper = ({ children, id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const wrapperRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => { // entries est un tableau qui contient des objet, chaque objet représente un élément surveillé et fournit des informations sur sa visibilité
                if (entries[0].isIntersecting) { // si l'élément devient visible, on set isVisible à true
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,  // si au moins 10 % de l’élément est visible, l’observer déclenchera l’action
                // rootMargin: "440px 0px" // Déclenche l'action 440px avant que l'élément ne soit visible, pour remonter dans le contenu et déclencher plus tôt (quand l'utilisateur arrive au h2)
                rootMargin: "0px 0px" // Possibilité de modification : Par exmeple, peut déclencher l'action 440px avant que l'élément ne soit visible, pour remonter dans le contenu et déclencher plus tôt
            }
        );

        const element = wrapperRef.current; // permet de récupérer l’élément à surveiller
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    // Ajouter un `fallback` personnalisé
    return isVisible ? children : (
        <div ref={wrapperRef} className="min-h-96 sm:min-h-80 2xl:min-h-48 flex justify-center items-center flex-col">
            <p className='font-space_grotesk text-[#ed471a] text-center'>Chargement...</p>
            <div className="loaderSpinner"></div>
        </div>
    );
};

export default ObserverWrapper;


// ! NB : 

// * rootMargin permet de définir des marges autour de la zone d’observation. Ces marges peuvent être positives ou négatives et permettent de déclencher l’observation avant ou après que l’élément soit réellement visible.

// * 	•	Valeur positive (440px 0px) signifie que la zone d’observation est agrandie de 440 pixels en haut (et non modifiée sur les côtés). Cela déclenchera l’observation 440 pixels avant que l’élément surveillé soit visible.
// *	•	Valeur négative (-440px 0px) réduirait la zone d’observation, ce qui ferait que l’action se déclencherait après que l’élément soit visible par l’utilisateur.