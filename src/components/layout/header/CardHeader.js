'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function CardHeader({ neonColor, imgSrc, isTheLast, children, link, onClick }) {
    const backColor = useRef(null);

    useEffect(() => {
        if (backColor.current) {
            // Nettoyage des classes avant d'ajouter la bonne
            backColor.current.classList.remove('neonWhite', 'neonYellow', 'neonGold');

            switch (neonColor) {
                case "white":
                    backColor.current.classList.add('neonWhite');
                    break;
                case "yellow":
                    backColor.current.classList.add('neonYellow');
                    break;
                case "darkgold":
                    backColor.current.classList.add('neonGold');
                    break;
                default:
                    break;
            }
        }
    }, [neonColor]);



    return (
        <div className={`min-w-64 md:w-2/4 lg:w-[20%] h-1/2 ms-6 ${isTheLast ? "me-6" : ''} lg:mx-auto rounded-sm cursor-pointer`}>
            <Link href={link} onClick={onClick}>
                <div className='w-full h-full preserve-3d rounded-sm'>
                    <div ref={backColor} className='back bg-[#151515] absolute w-full h-full backface-hidden rounded-sm overflow-hidden flex justify-center items-center'>
                        <div className='absolute w-[99%] h-[99%] bg-[#141213] rounded-sm text-white flex flex-col justify-center items-center gap-[30px]'>
                            <h3 className='absolute z-10 top-4 text-2xl'>
                                {children}
                            </h3>
                            <Image src={imgSrc} alt="Illustration de la catégorie"
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 100vw"
                                className='object-contain'
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardHeader;