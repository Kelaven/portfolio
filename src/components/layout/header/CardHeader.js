'use client';

import React, { useEffect, useRef } from 'react'
import Image from 'next/image';

function CardHeader({ neonColor, imgSrc, isTheLast, children }) {
    console.log(children);

    const backColor = useRef(null);

    useEffect(() => {
        if (backColor.current) {
            // Nettoyage des classes avant d'ajouter la bonne
            backColor.current.classList.remove('neonWhite', 'neonYellow', 'neonGold');

            switch (neonColor) {
                case "white":
                    backColor.current.classList.add('neonWhite')
                    break;
                case "yellow":
                    backColor.current.classList.add('neonYellow')
                    break;
                case "darkgold":
                    backColor.current.classList.add('neonGold')
                    break;

                default:
                    break;
            }
        }
    }, [neonColor])




    return (
        <>
            {isTheLast ? (<div className='bg-black min-w-64 md:w-2/4 lg:w-1/4 h-1/2 2xl:h-3/4 ms-6 me-6 lg:mx-auto rounded-sm cursor-pointer'>
                <div className='w-full h-full preserve-3d rounded-sm'>
                    <div ref={backColor} className='back bg-[#151515] absolute w-full h-full backface-hidden rounded-sm overflow-hidden flex justify-center items-center'>
                        <div className='absolute w-[99%] h-[99%] bg-[#141213] rounded-sm text-white flex flex-col justify-center items-center gap-[30px]'>
                            <h3 className='absolute z-10 top-8 text-2xl'>
                                {children}
                            </h3>
                            <Image src={imgSrc} alt="Illustration de la catégorie"
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 100vw"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </div>) : (<div className='bg-black min-w-64 md:w-2/4 lg:w-1/4 h-1/2 2xl:h-3/4 ms-6 lg:mx-auto rounded-sm cursor-pointer'>
                <div className='w-full h-full preserve-3d rounded-sm'>
                    <div ref={backColor} className='back bg-[#151515] absolute w-full h-full backface-hidden rounded-sm overflow-hidden flex justify-center items-center'>
                        <div className='absolute w-[99%] h-[99%] bg-[#141213] rounded-sm text-white flex flex-col justify-center items-center gap-[30px]'>
                            <h3 className='absolute z-10 top-8 text-2xl'>
                                {children}
                            </h3>
                            <Image src={imgSrc} alt="Illustration de la catégorie"
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 100vw"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </div>)}
        </>

    )
}

export default CardHeader
