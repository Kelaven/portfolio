import TextAnimation from "@/components/common/TextAnimation";
import ThreeScene from "@/components/hero/ThreeScene";
import Layout from "@/components/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ScrambleText from "@/components/common/ScrambleText";

export default function Home() {
  return (
    <Layout>
      <div className="relative w-full h-screen flex items-center justify-center flex-col bg-black">
        <div className="absolute z-10 text-white text-center font-thin px-4 md:px-10 lg:px-40 xl:px-96 text-2xl">
          <h1>
            <TextAnimation Yanimation={true}>
              Je suis <strong className="font-bold">développeur web</strong> et <strong className="font-bold">photographe</strong>.
            </TextAnimation>
          </h1>
          <p>
            <TextAnimation Yanimation={true}>
              J'aime <span className="font-bold">imaginer</span>, <span className="font-bold">créer</span>, et  <span className="font-bold">donner vie à mes idées</span>.
            </TextAnimation>
          </p>
          <div className="text-sm pt-10">
            <p>
              <TextAnimation Yanimation={true}>
                Actuellement :  <span className="font-bold">Ouvert aux opportunités</span>
              </TextAnimation>
            </p>
            <p className="text-pretty">
              <TextAnimation Yanimation={true}>
                Auparavant : <span className="font-bold">Conseiller commercial, 8 ans d'expérience</span>
              </TextAnimation>
            </p>
          </div>
        </div>
        <ThreeScene />
        <div className="absolute bottom-10 text-white">
          <TextAnimation Yanimation={false} >
            <p>
              <ScrambleText className="cursor-pointer font-space_grotesk">
                Découvrez-en plus
              </ScrambleText>
            </p>
            <span className="flex justify-center">
              <FontAwesomeIcon icon={faCaretDown} className="text-xl cursor-pointer" />
            </span>
          </TextAnimation>
        </div>
      </div>
    </Layout >
  );
}
