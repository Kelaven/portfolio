import dynamic from "next/dynamic";

// Charger StarsBackground de manière différée
const StarsBackground = dynamic(() => import("./StarsBackground"), {
    ssr: false, // Désactiver le rendu côté serveur pour ce composant
    loading: () => (
        <div className="flex justify-center items-center h-40">
            <div className="loaderSpinnerFooter"></div>
        </div>
    ),
});

// components/Footer.js
const Footer = () => {
    return (
        <footer className="w-full min-h-[25vh] p-4 bg-black text-white text-center flex justify-center items-end sm:pt-32">
            <div className="relative w-full flex flex-col pt-0 sm:pt-10 h-96">
                <StarsBackground />
            </div>
            <p className="absolute">&copy; Site créé par Kévin Lavenant, 2024</p>
        </footer>
    );
}

export default Footer;