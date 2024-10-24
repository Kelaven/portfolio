"use client";

import { useEffect, useRef, useState } from "react";

const FooterObserverWrapper = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "1150px 0px"
            }
        );

        const element = wrapperRef.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div ref={wrapperRef} className="flex justify-center items-center h-40 flex-col">
            {isVisible ? children :
                (
                    <div className="flex flex-col items-center">
                        <p className='font-space_grotesk text-[#ed471a] text-center mb-14'>Chargement...</p>
                        <div className="loaderSpinnerFooter"></div>
                    </div>
                )}
        </div>
    );
};

export default FooterObserverWrapper;