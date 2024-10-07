'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CardHeader from './CardHeader';

function ModalHeader({ openMenu }) {
    const modal = useRef(null);

    useEffect(() => {
        const modalEl = modal.current;

        if (openMenu) {
            // modalEl.removeAttribute('inert');
            gsap.to(modalEl, {
                // x: 0,
                opacity: 1,
                ease: "power1.out",
            });
            modalEl.classList.remove('pointer-events-none');
        } else {
            // modalEl.setAttribute('inert', '');
            gsap.to(modalEl, {
                // x: '-100%',
                opacity: 0,
                ease: "power1.in",
            });
            modalEl.classList.add('pointer-events-none');
        }
    }, [openMenu]);

    return (
        // <div ref={modal} className="modal absolute z-20 left-0 w-full h-screen bg-gray-500 opacity-0 flex whitespace-nowrap overflow-x-auto items-center justify-start lg:justify-center" inert>
        <div ref={modal} className="modal absolute z-20 left-0 w-full h-screen bg-gray-500 opacity-0 flex whitespace-nowrap overflow-x-auto items-center justify-start lg:justify-center pointer-events-none">
            <CardHeader />
            <CardHeader />
            <CardHeader endCard={true} />
        </div>
    );
}

export default ModalHeader;