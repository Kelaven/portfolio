import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


function ProjectsSection() {
    return (
        <>
            <div className='relative min-h-screen w-full bg-black px-4 md:px-12 lg:px-24'>
                <div className="blurred-background absolute top-[15%] left-[15%] xl:top-[15%] lg:left-[7%] w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] z-0"></div>
                <div className="blurred-background-reverse absolute bottom-[15%] right-[15%] w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] z-0"></div>
                <div className='relative z-10'>
                    <h2 className='text-white text-4xl pb-10'>ProjectsSection</h2>


                    <div className="card bg-gray-900 p-6 rounded-sm w-full mx-auto my-10">
                        <div className="flex justify-between items-center mb-4">  {/*  header  */}
                            <div className="flex space-x-2"> {/*  traffic-lights   */}
                                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex items-center bg-gray-700 text-white rounded-lg px-4 py-1 w-full max-w-xs md:max-w-none ml-6"> {/*  url-bar   */}
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 mr-2" />
                                <a href="https://uiverse.io" target="_blank" className="bg-transparent text-white outline-none font-space_grotesk">
                                    visiterlesite.fr
                                </a>
                            </div>
                        </div>
                        <div className='text-white pt-4 md:flex w-full'> {/*  body  */}
                            <div className='flex-1 pe-4'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet diam ut orci sagittis suscipit. Integer non eros nec purus feugiat interdum a nec turpis. Morbi vulputate eros ex, vitae congue nibh placerat ac. Phasellus id magna nec augue convallis efficitur. Nullam malesuada nisi in sapien commodo, ac vulputate libero facilisis. Nam tristique mauris ut ligula scelerisque, a sodales magna tristique. Etiam semper eros nec sem blandit, id feugiat eros gravida. Fusce non metus non lorem suscipit pellentesque sit amet eget orci.
                                </p>
                                <div className="flex flex-wrap space-x-4 pt-4">
                                    <span className="relative py-1 px-3 rounded-full shadow-md text-sm font-medium tracking-wide text-white bg-black border-2 border-yellow-500">
                                        React
                                    </span>
                                    <span className="relative py-1 px-3 rounded-full shadow-md text-sm font-medium tracking-wide text-white bg-black border-2 border-yellow-500">
                                        Next
                                    </span>
                                </div>
                            </div>
                            <div className='flex-1 ps-4 flex justify-center pt-6 md:pt-0'> {/* Conteneur de l'image */}
                                <Image
                                    src='/assets/images/cv-photo-profil-650-100.jpg'
                                    alt="Photo de profil"
                                    width={233}
                                    height={500}
                                    className='object-cover'
                                />
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default ProjectsSection