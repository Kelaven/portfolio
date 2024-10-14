import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import SkillsThreeScene from '../skills/SkillsThreeScene';
import Image from 'next/image';
import ScrambleText from '../common/ScrambleText';
import ScrollAnimation from '../common/ScrollAnimation';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import ImageAnimation from '../common/ImageAnimation';
import AboutSectionTextAnimation from '../aboutsection/AboutSectionTextAnimation';

function AboutSection() {
    return (
        <>
            <div className='px-4 md:px-12 lg:px-24 xl:flex'>
                <div className='xl:w-1/2 2xl:w-[700px] lg:pe-24'>
                    <h2 className='text-4xl'>
                        <AboutSectionTextAnimation Yanimation={true}>
                            Hello world !
                        </AboutSectionTextAnimation>
                    </h2>
                    <p className='pt-4 pb-2 text-lg'>
                        <AboutSectionTextAnimation Yanimation={true}>
                            Moi c'est Kévin, un <strong>passionné</strong> de nature qui s'est tourné vers le développement web pour donner vie à ses idées et accompagner ses clients dans leurs plus beaux projets.
                        </AboutSectionTextAnimation>
                    </p>
                    <p className='py-4'>
                        <AboutSectionTextAnimation Yanimation={true}>
                            J'aime sortir des sentiers battu pour proposer du contenu interactif, qui capte l'attention des internautes et met en avant un travail rigoureux.
                        </AboutSectionTextAnimation>
                    </p>
                    <p className='pb-4'>
                        <AboutSectionTextAnimation Yanimation={true}>
                            Diplômé d'une formation <em>Développeur Web et Web Mobile</em> en 2024, je continue de me former chaque jour pour maîtriser <strong>JavaScript</strong>, <strong>React</strong>, <strong>PHP</strong> & <strong>Symfony</strong>. <br />
                            Mon objectif est de maîtriser la création de sites et d’applications performants et sécurisés, de bout en bout.
                        </AboutSectionTextAnimation>
                    </p>
                    <p className='pb-4'>
                        <AboutSectionTextAnimation Yanimation={true}>
                            Auparavant Conseiller Commercial, je cumule plus de <strong>8 ans d'expérience profesionnelle</strong>. J'ai travaillé dans divers secteurs d'activité, allant de la mesuiserie à la banque, en passant par le marketing et la communication. Cela m'a permis d'acquérir plusieurs <em>softskills</em> qui me distinguent aujourd'hui.
                        </AboutSectionTextAnimation>
                    </p>
                    <p className='pb-4'>
                        <AboutSectionTextAnimation Yanimation={true}>
                            Je suis à l'écoute de nouvelles opportunités, n'hésitez pas à me contacter !
                        </AboutSectionTextAnimation>
                    </p>
                    <AboutSectionTextAnimation Yanimation={true}>
                        <ul className='py-4 flex'>
                            <li className='me-8 cursor-pointer'>
                                <ScrambleText className='font-space_grotesk pe-1'>
                                    Télécharger mon CV
                                </ScrambleText>
                                <FontAwesomeIcon icon={faDownload} /> </li>
                            <li className='cursor-pointer font-space_grotesk'>
                                <ScrambleText className='font-space_grotesk'>
                                    Me contacter
                                </ScrambleText>
                            </li>
                        </ul>
                    </AboutSectionTextAnimation>
                    <div>
                        <AboutSectionTextAnimation Yanimation={true}>
                            <SkillsThreeScene />
                        </AboutSectionTextAnimation>
                    </div>
                </div>
                <div className='xl:w-1/2 flex justify-center items-center my-10 md:py-6 xl:my-0'>
                    <div className='w-72 h-96 lg:me-20 xl:me-0 xl:h-2/3 xl:w-96 relative'>
                        <ImageAnimation Yanimation={true}>
                            <Image src='/assets/images/photo-profil-CV-numerique.webp' alt="Photo de profil"
                                fill
                                className='object-cover shadow-profile-picture'
                            />
                        </ImageAnimation>
                    </div>
                </div>



            </div>
            <div className="bottom-10 text-black flex justify-center pt-28">
                <AboutSectionTextAnimation Yanimation={false} >
                    {/* <span className="flex justify-center bg-yellow-200"> */}
                    <ScrollAnimation>
                        <FontAwesomeIcon icon={faCircle} className="text-xl cursor-pointer" />
                    </ScrollAnimation>
                    {/* </span> */}
                </AboutSectionTextAnimation>
            </div>
        </>
    )
}

export default AboutSection;