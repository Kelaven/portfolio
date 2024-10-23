'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarsBackground = () => {
    const [init, setInit] = useState(false);

    // Charger l'engine pour les particules
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Charger uniquement les fonctionnalités nécessaires
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Options pour les étoiles flottantes
    const options = useMemo(
        () => ({
            fullScreen: {
                enable: false, // Désactiver le plein écran pour restreindre les particules à leur conteneur parent
            },
            background: {
                color: {
                    value: "#000000",
                },
            },
            fpsLimit: 60,
            particles: {
                number: {
                    value: 200, // Nombre d'étoiles
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#ffffff", // Couleur des étoiles
                },
                shape: {
                    type: "circle", // Forme circulaire pour les étoiles
                },
                opacity: {
                    value: 0.8, // Opacité des étoiles
                    random: true, // Rendre l'opacité aléatoire
                },
                size: {
                    value: { min: 0.5, max: 3 }, // Taille des étoiles
                },
                move: {
                    enable: true, // Activer le mouvement
                    speed: 0.2, // Vitesse lente pour donner l'impression de flottement
                    direction: "none", // Mouvement dans toutes les directions
                    random: true, // Déplacement aléatoire
                    straight: false, // Ne pas se déplacer en ligne droite
                    outModes: {
                        default: "out", // Les étoiles quittent l'écran lorsqu'elles sortent du conteneur
                    },
                },
            },
            detectRetina: true, // Pour des écrans Retina
        }),
        []
    );

    // Rendu des particules
    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options} // Appliquer les options définies
                className="h-96 w-full"
            />
        );
    }

    return null;
};

export default StarsBackground;