// !**********! TUTO POUR REMPLACER L'EFFET SCRAMBLE DU PLUGIN GSAP !**********! //


'use client'; // Indique que ce composant est destiné à être exécuté côté client dans Next.js (utile pour les interactions).

import React, { useRef, useState, useEffect } from 'react';

/**
 * Le composant ScrambleText applique un effet de "scramble" sur le texte lorsqu'il est survolé par la souris.
 * Il permet également d'appliquer des classes CSS venant du parent grâce à la prop `className`.
 */
function ScrambleText({ children, className }) {
    const [displayText, setDisplayText] = useState(children); // Gère l'état du texte affiché (modifié ou original).
    const [intervalID, setIntervalID] = useState(null); // Stocke l'ID de l'intervalle en cours (pour le nettoyage).
    const textRef = useRef(null); // Crée une référence pour accéder à l'élément DOM directement.

    // Fonction pour obtenir un caractère aléatoire à partir d'une liste prédéfinie (alphabet et chiffres).
    const getRandomCharacter = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return characters[Math.floor(Math.random() * characters.length)];
    };

    /**
     * Cette fonction est responsable de l'effet de scrambling (brouillage) du texte.
     * @param {string} originalText - Le texte d'origine qui doit être brouillé.
     */
    const scrambleText = (originalText) => {
        const letters = originalText.split(''); // Divise le texte en lettres individuelles.
        let counter = 0; // Un compteur qui suit la progression du scrambling.
        const shuffleCount = 2; // Nombre de cycles de brouillage avant de revenir au texte original.
        const shuffleInterval = 60; // Intervalle en millisecondes entre chaque modification de lettre.

        // Crée un intervalle qui brouille le texte toutes les `shuffleInterval` millisecondes.
        let newIntervalID = setInterval(() => {
            // Parcourt chaque lettre du texte pour la remplacer temporairement par un caractère aléatoire.
            const scrambled = letters.map((char, index) => {
                if (char.match(/[a-zA-Z]/)) { // Ne brouille que les lettres (ignorer les espaces ou autres caractères).
                    const randomCharacter = getRandomCharacter(); // Récupère un caractère aléatoire.
                    const cyclesToRevert = index - Math.floor(counter / shuffleCount);

                    // Si le nombre de cycles est atteint, on remet la lettre originale.
                    if (counter >= cyclesToRevert * shuffleCount) {
                        return char;  // Retourne la lettre originale à la bonne position.
                    }
                    return randomCharacter;  // Retourne un caractère aléatoire temporaire.
                }
                return char; // Garde les caractères non modifiables (comme les espaces) inchangés.
            }).join(''); // Recompose le texte avec les lettres modifiées.

            setDisplayText(scrambled); // Met à jour le texte affiché.
            counter++; // Incrémente le compteur à chaque cycle.

            // Si l'animation est terminée (tout le texte est revenu à l'original), on arrête l'intervalle.
            if (counter >= (shuffleCount + 1) * letters.length) {
                clearInterval(newIntervalID); // Arrête l'intervalle une fois que l'animation est complète.
                setDisplayText(originalText); // Restaure le texte original.
            }
        }, shuffleInterval); // Répète l'opération toutes les 60 ms.

        // Stocke l'ID de l'intervalle pour pouvoir l'arrêter plus tard si nécessaire.
        setIntervalID(newIntervalID);
    };

    /**
     * Cette fonction est déclenchée lorsqu'on survole le texte avec la souris (mouseenter).
     * Elle lance l'effet de scrambling et annule tout ancien intervalle en cours.
     */
    const handleMouseEnter = () => {
        if (intervalID) {
            clearInterval(intervalID); // Nettoie tout ancien intervalle avant d'en commencer un nouveau.
        }
        scrambleText(children); // Démarre l'effet de scrambling sur le texte.
    };

    /**
     * useEffect est utilisé pour nettoyer l'intervalle en cas de démontage du composant (ou si un nouveau intervalle est défini).
     * Cela garantit que les animations s'arrêtent correctement lorsque le composant est retiré de la page.
     */
    useEffect(() => {
        return () => {
            if (intervalID) {
                clearInterval(intervalID); // Nettoie l'intervalle si le composant est démonté.
            }
        };
    }, [intervalID]); // Exécute cet effet chaque fois que `intervalID` change.

    return (
        // Le texte est rendu dans un `span`, auquel on applique la classe CSS et l'événement mouseenter.
        <span
            ref={textRef} // Le `ref` permet d'accéder à cet élément DOM via `textRef.current` si nécessaire.
            className={className} // Permet de propager les classes CSS fournies par le parent.
            onMouseEnter={handleMouseEnter} // Lance l'effet de scrambling au survol de la souris.
        >
            {displayText} {/* Affiche le texte modifié (brouillé ou original selon l'état) */}
        </span>
    );
}

export default ScrambleText;