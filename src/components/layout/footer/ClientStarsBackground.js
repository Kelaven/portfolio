"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const StarsBackground = dynamic(() => import("./StarsBackground"), {
    ssr: false,
});

const ClientStarsBackground = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById("stars-background-placeholder");
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return isVisible ? (
        <StarsBackground />
    ) : (
        <div id="stars-background-placeholder" className="h-96 w-full"></div>
    );
};

export default ClientStarsBackground;