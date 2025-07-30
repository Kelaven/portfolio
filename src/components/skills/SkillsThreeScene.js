"use client";


import React from 'react';
import dynamic from 'next/dynamic';

// import MeteorCanva from './MeteorCanva';
import { METEORSDATA } from '@/constants/meteorsData';


// Charger MeteorCanva de manière dynamique et désactiver SSR
const MeteorCanva = dynamic(() => import('./MeteorCanva'), { ssr: false });

function SkillsThreeScene() {
    // console.log(METEORSDATA);

    return (
        <div className='w-full flex flex-row flex-wrap justify-center'>
            {METEORSDATA.map((meteordata) => (<div className='flex w-fit items-center h-24' key={meteordata.name}>
                <MeteorCanva img={meteordata.img} color={meteordata.color} colormap={meteordata.colormap} normalmap={meteordata.normalmap} roughnessmap={meteordata.roughnessmap} />
            </div>))}
        </div>
    )
}

export default SkillsThreeScene;