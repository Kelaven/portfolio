"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

function ProjetsSectionCard() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/projects');
                if (response.ok) {
                    const projects = await response.json();
                    if (Array.isArray(projects)) {
                        // si on récupère plusieurs projects (ça sera un tableau)
                        setProjects(projects);
                    } else {
                        // si on récupère un seul project
                        setProjects([projects]);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchProjects()
    }, [])

    console.log(projects);


    return (



        projects.map((project, id) => (
            <div key={id} className="card bg-gray-900 p-6 rounded-sm w-full mx-auto my-10">
                <div className="flex justify-between items-center mb-4">  {/*  header  */}
                    <div className="flex space-x-2"> {/*  traffic-lights   */}
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center bg-gray-700 text-white rounded-lg px-4 py-1 w-full max-w-xs md:max-w-none ml-6"> {/*  url-bar   */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 mr-2" />
                        <a href="https://uiverse.io" target="_blank" className="bg-transparent text-white outline-none">
                            {project.name}
                        </a>
                    </div>
                </div>
                <div className='text-white pt-4 md:flex w-full'> {/*  body  */}
                    <div className='flex-1 pe-4'>
                        <p>
                            {project.description}
                        </p>
                        <div className="flex flex-wrap space-x-4 pt-4">

                            {project.languages.map((language, id) => (
                                <span key={id} className="relative py-1 px-3 rounded-full shadow-md text-sm font-medium tracking-wide text-white bg-black border-2 border-yellow-500">
                                    {language}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center pt-6 md:pt-0'> {/* Conteneur de l'image */}
                        <Image
                            src={project.picture}
                            alt="Photo de présentation du projet"
                            width={500}
                            height={500}
                            className='object-cover shadow-sm md:w-[233px]'
                        />
                    </div>
                </div>
            </div>
        ))



    )
}

export default ProjetsSectionCard