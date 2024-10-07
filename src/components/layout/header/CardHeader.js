'use client';

import React from 'react'

function CardHeader({ endCard }) {
    console.log(endCard);
    return (
        <>
            {
                endCard ? (<div className='bg-black min-w-64 md:w-2/4 lg:w-1/5 h-1/2 ms-6 me-6' >
                    Carte
                </div>) : (<div className='bg-black min-w-64 md:w-2/4 lg:w-1/5 h-1/2 ms-6'>
                    Carte
                </div>)
            }
        </>
    )
}

export default CardHeader

// 235 * 455
// 325 * 628
// 412 * 798