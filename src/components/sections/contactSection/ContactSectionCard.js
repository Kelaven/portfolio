import React from 'react';
import { CONTACTDATA } from '@/constants/contactData.js';

function ContactSectionCard() {

    return (
        <>
            {CONTACTDATA.map((data, i) => (
                <div key={i}
                    className={`relative ${i === 2 ? 'h-[400px] xl:h-[290px]' : 'h-[250px]'} bg-[#243137] grid place-content-center rounded-md overflow-hidden card transition-all duration-500 ease-in-out hover:scale-110 hover:rounded-none`}>
                    <div className="absolute inset-0 border-2 border-[#bd9f67] opacity-0 transition-all duration-500 ease-in-out card-border"></div>

                    <div className="relative text-center card-content transition-all duration-500 ease-in-out">
                        <p className="text-[#bd9f67] text-lg font-bold mb-4">
                            {data.header}</p>
                        <p className="text-[#bd9f67] text-xs tracking-widest opacity-0 card-description transition-opacity duration-500 ease-in-out px-10">
                            {data.content}
                        </p>
                    </div>

                    <span className="absolute left-1/2 bottom-3 transform -translate-x-1/2 text-[#bd9f67] text-[10px] uppercase bg-[#243137] px-2 opacity-0 card-bottom-text transition-all duration-500 ease-in-out">
                        {data.footer}
                    </span>
                </div>
            )

            )}


        </>
    )
}

export default ContactSectionCard;