import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import SkillsThreeScene from '../skills/SkillsThreeScene';
import Image from 'next/image';

function AboutSection() {
    return (
        <div className='min-h-screen px-4'>
            <h2 className='text-4xl'>
                Hello world !
            </h2>
            <p className='pt-4 pb-2 text-lg'>
                Moi c'est Kévin, un <strong>passionné</strong> de nature qui s'est tourné vers le développement web pour donner vie à ses idées et accompagner ses clients dans leurs plus beaux projets.
            </p>
            <p className='py-4'>
                J'aime sortir des sentiers battu pour proposer du contenu interactif, qui capte l'attention des internautes et met en avant un travail rigoureux.
            </p>
            <p className='pb-4'>
                Diplômé d'une formation <em>Développeur Web et Web Mobile</em> en 2024, je continue de me former chaque jour pour maîtriser <strong>JavaScript</strong>, <strong>React</strong>, <strong>PHP</strong> & <strong>Symfony</strong>. <br />
                Mon objectif est de maîtriser la création de sites et d’applications performants et sécurisés, de bout en bout.
            </p>
            <p className='pb-4'>
                Auparavant Conseiller Commercial, je cumule plus de <strong>8 ans d'expérience profesionnelle</strong>. J'ai travaillé dans divers secteurs d'activité, allant de la mesuiserie à la banque, en passant par le marketing et la communication. Cela m'a permis d'acquérir plusieurs <em>softskills</em> qui me distinguent aujourd'hui.
            </p>
            <p className='pb-4'>
                Je suis à l'écoute de nouvelles opportunités, n'hésitez pas à me contacter !
            </p>
            <ul className='py-4 flex'>
                <li className='pe-8'>Télécharger mon CV <FontAwesomeIcon icon={faDownload} /> </li>
                <li>Me contacter</li>
            </ul>
            <SkillsThreeScene />
            <div className='max-w-72 mx-auto h-96 my-16 relative  shadow-profile-picture'>
                <Image src='/assets/images/photo-profil-CV-numerique.webp' alt="Photo de profil"
                    fill
                    className='object-cover'
                />
            </div>
        </div>
    )
}

export default AboutSection;