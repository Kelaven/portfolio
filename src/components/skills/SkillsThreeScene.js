"use client";


import React from 'react'
import MeteorCanva from './MeteorCanva';
import { METEORSDATA } from '@/constants/meteorsData';

function SkillsThreeScene() {
    // console.log(METEORSDATA);

    return (
        <div className='w-full bg-black flex flex-row flex-wrap justify-center'>
            {/* <div className='bg-gray-400 flex w-fit items-center h-24'>
                <MeteorCanva img="/assets/logos/javascript.svg" color='#f7df1e' colormap='/assets/textures/Rock01_4K-PNG_Color.webp' normalmap='/assets/textures/Rock01_4K-PNG_NormalGL.png' roughnessmap='/assets/textures/Rock01_4K-PNG_Roughness.png' />
            </div> */}
            {METEORSDATA.map((meteordata) => (<div className='bg-gray-400 flex w-fit items-center h-24' key={meteordata.name}>
                <MeteorCanva img={meteordata.img} color={meteordata.color} colormap={meteordata.colormap} normalmap={meteordata.normalmap} roughnessmap={meteordata.roughnessmap} />
            </div>))}
        </div>
    )
}

export default SkillsThreeScene;