'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";

function Button({ children }) {

    const btnsRef = useRef(null);

    useEffect(() => {
        gsap.to(btnsRef.current, {
            opacity: 1,
            delay: 1,
            ease: "power1.out"
        })
    }, [])


    return (
        <button ref={btnsRef} className="px-4 py-2 border border-white rounded-sm text-white bg-black text-sm font-medium hover:bg-white hover:text-black transition-colors ease-in-out duration-300 opacity-0">{children}</button>
    )
}

export default Button