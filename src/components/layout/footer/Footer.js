import StarsBackground from "./StarsBackground";

// components/Footer.js
const Footer = () => {
    return (
        <footer className="w-full min-h-[25vh] p-4 bg-black text-white text-center flex justify-center items-end sm:pt-32">
            <div className="relative flex flex-col pt-32 sm:pt-10">
                <StarsBackground />
            </div>
            <p className="absolute">&copy; Site créé par Kévin Lavenant, 2024</p>
        </footer>
    );
}

export default Footer;