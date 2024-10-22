import React from 'react';
import ProjectsSectionCard from './ProjectsSectionCard';
import ScrollAnimation from '../../common/ScrollAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-solid-svg-icons";



function ProjectsSection() {
    return (
        <>
            <div className='relative min-h-200vh w-full bg-black px-4 md:px-12 lg:px-24'>
                <div className="blurred-background absolute top-[2.5%] left-[3%] lg:top-[5%] lg:left-[7%] w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] z-0"></div>
                <div className="blurred-background absolute top-[25%] left-[25%] w-[250px] h-[400px] md:w-[0px] md:h-[0px] z-0"></div>
                <div className="blurred-background absolute top-[45%] left-[70%] lg:top-[45%] lg:right-[6%] w-[250px] h-[400px] lg:w-[350px] lg:h-[500px] z-0"></div>
                <div className="blurred-background absolute top-[75%] left-[10%] w-[250px] h-[400px] lg:w-[0px] lg:h-[0px] z-0"></div>
                <div className="blurred-background-reverse absolute bottom-[3%] lg:bottom-[6%] right-[5%] lg:left-[10%] w-[200px] h-[200px] xl:w-[300px] xl:h-[150px] z-0"></div>
                <div className='relative z-10'>
                    <h2 className='text-white text-4xl pb-10 font-bold'>Projets en ligne</h2>
                    <ProjectsSectionCard />
                    <div className='h-24'></div>
                </div>
            </div>
            <div className="relative z-20 text-white flex justify-center bg-black">
                <ScrollAnimation>
                    <FontAwesomeIcon icon={faCircle} className="text-xl" />
                </ScrollAnimation>
            </div>
            <div className="h-24 sm:h-60 bg-white"></div>
        </>
    )
}

export default ProjectsSection;