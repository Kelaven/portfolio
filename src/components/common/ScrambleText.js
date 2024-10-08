// !**********! Tuto pour remplacer le plugin payant de GSAP !**********! //


'use client';

import React, { useRef, useState, useEffect } from 'react';

/**
 * Le composant ScrambleText va recevoir du texte (via children) et appliquer un effet de "scramble"
 * lorsque l'utilisateur passe la souris dessus. Il utilise useRef pour manipuler le DOM directement,
 * useState pour stocker l'identifiant de l'intervalle d'animation, et useEffect pour gérer les événements.
 */
function ScrambleText({ children }) {
    // On crée une référence vers l'élément texte qu'on va manipuler dans le DOM
    const textRef = useRef(null);

    // Le texte original est stocké dans "children" (ce qu'on passe au composant)
    const originalText = children;

    // On divise le texte en lettres individuelles pour pouvoir les manipuler
    const letters = originalText.split(''); // Par exemple, "Hello" devient ["H", "e", "l", "l", "o"]

    // useState pour stocker l'identifiant de l'intervalle (pour l'arrêter plus tard)
    const [intervalID, setIntervalID] = useState(null);

    // Fonction qui génère un caractère aléatoire à partir d'une liste prédéfinie (alphabet et chiffres)
    function getRandomCharacter() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return characters[Math.floor(Math.random() * characters.length)];
    }

    /**
     * Fonction d'animation qui est déclenchée lorsque la souris entre dans la zone de l'élément (mouseenter).
     * Elle brouille le texte en changeant les lettres de manière aléatoire puis retourne au texte original.
     */
    const handleMouseEnter = () => {
        let counter = 0;  // Un compteur pour suivre les étapes de l'animation
        const shuffleCount = 2;  // Le nombre de cycles de scrambling avant de revenir au texte normal
        const shuffleInterval = 60;  // Temps en millisecondes entre chaque étape de scrambling

        // Crée un intervalle qui va exécuter le scrambling à répétition
        const intervalID = setInterval(() => {
            // On parcourt chaque lettre du texte pour la remplacer par un caractère aléatoire
            const shuffledText = letters.map((char, index) => {
                // Si c'est une lettre (a-z ou A-Z), on la remplace temporairement par une lettre aléatoire
                if (char.match(/[a-zA-Z]/)) {
                    const randomCharacter = getRandomCharacter();
                    const cyclesToRevert = index - Math.floor(counter / shuffleCount);

                    // Une fois que le nombre de cycles est atteint, on remet la lettre originale
                    if (counter >= cyclesToRevert * shuffleCount) {
                        return originalText[index];  // On retourne la lettre d'origine
                    }
                    return randomCharacter;  // On retourne un caractère aléatoire
                }
                return char;  // Si ce n'est pas une lettre, on garde le caractère inchangé (comme un espace)
            }).join('');  // On reforme le texte après le scrambling

            // On met à jour le contenu du texte dans l'élément HTML (span)
            textRef.current.textContent = shuffledText;
            counter++;  // Incrémenter le compteur à chaque étape

            // Si l'animation est terminée (tout le texte est revenu à l'original), on arrête l'intervalle
            if (counter >= (shuffleCount + 1) * letters.length) {
                clearInterval(intervalID);  // On arrête l'intervalle
                textRef.current.textContent = originalText;  // On remet le texte original
            }
        }, shuffleInterval);  // L'animation se répète toutes les 60ms

        // On stocke l'ID de l'intervalle dans l'état pour pouvoir l'arrêter plus tard
        setIntervalID(intervalID);
    };

    /**
     * useEffect est utilisé ici pour gérer l'ajout des événements "mouseenter" et "mouseleave" lorsque
     * le composant est monté, et pour nettoyer ces événements quand le composant est démonté.
     */
    useEffect(() => {
        const element = textRef.current;  // Référence à l'élément DOM où le texte est affiché

        // Ajoute les événements "mouseenter" et "mouseleave"
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', () => {
            clearInterval(intervalID);  // Arrête l'intervalle d'animation si la souris quitte l'élément
            textRef.current.textContent = originalText;  // Remet immédiatement le texte original
        });

        // Nettoyage (on retire les événements lorsqu'on ne veut plus utiliser le composant)
        return () => {
            element.removeEventListener('mouseenter', handleMouseEnter);  // Retire l'événement d'entrée
            element.removeEventListener('mouseleave', () => clearInterval(intervalID));  // Retire l'événement de sortie
        };
    }, [letters, intervalID, originalText]);  // Dépendances : ces variables sont utilisées dans l'effet

    // Retourne l'élément <span> qui contient le texte avec la référence associée
    return (
        <span ref={textRef} style={{ display: 'inline-block' }}>{children}</span>
    );
}

export default ScrambleText;