"use client";


import React from 'react'
import MeteorCanva from './MeteorCanva';
import { METEORSDATA } from '@/constants/meteorsData';

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