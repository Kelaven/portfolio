'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function ModalHeader({ openMenu }) {
    const modal = useRef(null);

    useEffect(() => {
        const modalEl = modal.current;

        if (openMenu) {
            gsap.to(modalEl, {
                // x: 0,
                opacity: 1,
                ease: "power1.out",
            });
            modalEl.classList.remove('pointer-events-none');
        } else {
            gsap.to(modalEl, {
                // x: '-100%',
                opacity: 0,
                ease: "power1.in",
            });
            modalEl.classList.add('pointer-events-none');
        }
    }, [openMenu]);

    return (
        <div ref={modal} className="modal absolute top-24 left-0 w-full h-screen bg-gray-500 opacity-0 pointer-events-none">
        </div>
    );
}

export default ModalHeader;