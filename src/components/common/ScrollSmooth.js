"use client"

import React, { useEffect } from 'react'
import Lenis from 'lenis';

function ScrollSmooth({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.07,
            wheelMultiplier: 0.5,
            syncTouch: true          // Active le scroll synchronisé pour les appareils tactiles
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);


        return () => {
            lenis.destroy();
        }
    }, [])

    return (
        <div id="smooth-wrapper">
            {children}
        </div>
    )
}

export default ScrollSmooth;