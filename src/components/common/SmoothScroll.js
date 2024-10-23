// components/SmoothScrollLink.js
'use client';

import React from 'react';

function SmoothScrollLink({ href, children }) {
    const handleClick = (e) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        // if (targetElement) {
        smoothScrollTo(targetElement);
        // }
    };

    const smoothScrollTo = (target) => {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const duration = 2000; // Ajustez cette valeur pour rendre le défilement plus lent (en millisecondes)

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Fonction d'interpolation pour un défilement fluide
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    };

    return (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    );
}

export default SmoothScrollLink;