"use client";


import { useEffect, useRef, useState } from "react";

const ProjectsSectionObserverWrapper = ({ children, id }) => {
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
                // rootMargin: "100px 0px"
                rootMargin: "0px 0px"
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

    return isVisible ? children : (
        <div ref={wrapperRef} className="flex justify-center items-center h-40 flex-col mb-4">
            <p className='font-space_grotesk text-[#ed471a] text-center'>Chargement...</p>

            <div className="loaderSpinnerProjects"></div>
        </div>
    );
};

export default ProjectsSectionObserverWrapper;