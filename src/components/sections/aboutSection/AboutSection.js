import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import ScrambleText from '../../common/ScrambleText';
import ScrollAnimation from '../../common/ScrollAnimation';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import SmoothScroll from '@/components/common/SmoothScroll';
import dynamic from 'next/dynamic';
import ObserverWrapper from '@/components/common/ObserverWrapper';


// Charger SkillsThreeScene de manière différée
const SkillsThreeScene = dynamic(() => import('../../skills/SkillsThreeScene'), {
    ssr: false, // Désactiver le rendu côté serveur pour ce composant
    loading: () => (
        <div className="flex justify-center items-center h-40 flex-col">
            <p className='font-space_grotesk text-[#ed471a] text-center'>Chargement...</p>
            <div className="loaderSpinner"></div>
        </div>
    ),
});

// Charger FontAwesomeIcon de manière différée pour l'icône de téléchargement
const DynamicFontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then(mod => mod.FontAwesomeIcon), {
    ssr: false // Désactiver le rendu côté serveur pour cette icône
});

function AboutSection() {
    return (
        <>
            <div className='min-h-svh px-4 md:px-12 lg:px-24 xl:flex pt-12'>
                <div className='xl:w-1/2 2xl:w-[700px] lg:pe-24'>
                    <h2 className='text-4xl font-bold'>
                        Hello world !
                    </h2>
                    <p className='pt-4 pb-2 text-lg'>
                        Moi c&apos;est Kévin, un <strong>passionné</strong> dans l'âme, qui s&apos;est tourné vers le développement web pour donner vie à ses idées et accompagner ses clients dans leurs plus beaux projets.
                    </p>
                    <p className='py-4'>
                        J&apos;aime sortir des sentiers battus pour proposer du contenu interactif, qui capte l&apos;attention des internautes et met en avant un travail rigoureux.
                    </p>
                    <p className='pb-4'>
                        Diplômé d&apos;une formation <em>Développeur Web et Web Mobile</em> en 2024, je continue de me former chaque jour pour maîtriser <strong>JavaScript</strong>, <strong>React</strong>, <strong>PHP</strong> & <strong>Symfony</strong>. <br />
                        Mon objectif est de maîtriser la création de sites et d&apos;applications performants et sécurisés, de bout en bout.
                    </p>
                    <p className='pb-4'>
                        Auparavant Conseiller Commercial, je cumule plus de <strong>8 ans d&apos;expérience professionnelle</strong>. J&apos;ai travaillé dans divers secteurs d&apos;activité, allant de la menuiserie à la banque, en passant par le marketing et la communication. Cela m&apos;a permis d&apos;acquérir plusieurs <em>soft skills</em> qui me distinguent aujourd&apos;hui.
                    </p>
                    <p className='pb-4'>
                        Je suis à l&apos;écoute de nouvelles opportunités, n&apos;hésitez pas à me contacter !
                    </p>
                    <ul className='pt-4 pb-6 flex flex-wrap'>
                        <li className='me-8 cursor-pointer'>
                            <a href="/assets/documents/CV_Kevin_LAVENANT-DW.pdf" download>
                                <ScrambleText className='font-space_grotesk pe-1'>
                                    Télécharger mon CV
                                </ScrambleText>
                            </a>
                            <DynamicFontAwesomeIcon icon={faDownload} />
                        </li>
                        <li className='cursor-pointer font-space_grotesk'>
                            <SmoothScroll href="#contactsection">
                                <ScrambleText className='font-space_grotesk'>
                                    Me contacter
                                </ScrambleText>
                            </SmoothScroll>
                        </li>
                    </ul>
                    {/* <div className='min-h-96 sm:min-h-64 2xl:min-h-48'> */}
                    <ObserverWrapper>
                        <SkillsThreeScene />
                    </ObserverWrapper>
                    {/* </div> */}
                </div>
                <div className='xl:w-1/2 flex justify-center items-center my-10 py-4 md:py-6 xl:my-0'>
                    <div className='w-72 h-96 lg:me-20 xl:me-0 xl:h-2/3 xl:w-96 relative'>
                        <Image
                            src='/assets/images/cv-photo-profil-650-100.jpg'
                            alt="Photo de profil"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='object-cover shadow-profile-picture'
                        />
                    </div>
                </div>
            </div>
            {/* <div className="bottom-10 text-black flex justify-center pt-14">
                <ScrollAnimation>
                    <FontAwesomeIcon icon={faCircle} className="text-xl" />
                </ScrollAnimation>
            </div>
            <div className="h-20 sm:h-48 bg-black"></div> */}
        </>
    )
}

export default AboutSection;