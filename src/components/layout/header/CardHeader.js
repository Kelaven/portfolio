'use client';

import React from 'react'

function CardHeader({ endCard }) {
    console.log(endCard);
    return (
        <>
            {
                endCard ? (<div className='bg-black min-w-64 md:w-2/4 lg:w-1/4 h-1/2 2xl:h-3/4 ms-6 me-6 lg:mx-auto' >
                    Carte
                </div>) : (<div className='bg-black min-w-64 md:w-2/4 lg:w-1/4 h-1/2 2xl:h-3/4 ms-6 lg:mx-auto'>
                    Carte
                </div>)
            }
        </>
    )
}

export default CardHeader
