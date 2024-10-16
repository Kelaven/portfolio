import React from 'react';
import ContactSectionCard from './ContactSectionCard';
import ScrambleText from '@/components/common/ScrambleText';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from '../../common/ScrollAnimation';

function ContactSection() {
    return (
        <>
            <div className='px-4 md:px-12 lg:px-24 min-h-screen bg-white text-black flex flex-col justify-center'>
                <h2 className='text-4xl font-bold pb-10'>
                    Contactez-moi
                </h2>
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* sidebar */}
                    <div className="text-left space-y-6">
                        <div>
                            <h3 className="uppercase font-bold text-gray-500 tracking-wide">Email</h3>
                            <p className="font-light">
                                kevin.lavenant@live.fr
                            </p>
                        </div>
                        <div>
                            <h3 className="uppercase font-bold text-gray-500 tracking-wide">Réseaux</h3>
                            <ul className="font-light list-none space-y-1">
                                <li>
                                    <a href="https://www.linkedin.com/in/kevin-lavenant/" target="_blank" rel="noopener noreferrer">
                                        <ScrambleText>
                                            LinkedIn
                                        </ScrambleText></a>
                                </li>
                                <li>
                                    <a href="https://github.com/Kelaven" target="_blank" rel="noopener noreferrer">
                                        <ScrambleText>
                                            Github
                                        </ScrambleText>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/klaven_portraits/" target="_blank" rel="noopener noreferrer">
                                        <ScrambleText>
                                            Instagram
                                        </ScrambleText>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="uppercase font-bold text-gray-500 tracking-wide">Adresse</h3>
                            <p className="font-light leading-relaxed">
                                allée du Coteau, <br />
                                80000 - AMIENS. <br />
                                {/* <span className='font-normal'>Mobilité nationale</span> */}
                                Mobilité nationale
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6 justify-center items-center">
                        <h4 className="text-2xl lg:text-xl font-bold leading-none text-right">
                            Ils me recommandent
                        </h4>
                        <ContactSectionCard />
                    </div>
                </div>
            </div>
            <div className="bottom-10 text-black flex justify-center pt-48">
                <ScrollAnimation>
                    <FontAwesomeIcon icon={faCircle} className="text-xl" />
                </ScrollAnimation>
            </div>
        </>
    );
}

export default ContactSection;