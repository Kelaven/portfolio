import ScrollSmooth from "@/components/common/ScrollSmooth";
import "./globals.css";
import { Space_Grotesk, Roboto } from 'next/font/google';


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-spaceGrotesk'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-roboto'
});



export const metadata = {
  title: "Portfolio - Kévin Lavenant, Développeur Web & Photographe",
  description: "Découvrez le portfolio de Kévin Lavenant, développeur web passionné et photographe. Présentation, compétences, projets, contact et recommandations.",
  openGraph: {
    title: "Portfolio - Kévin Lavenant",
    description: "Développeur Web & Photographe passionné, découvrez mes projets et compétences.",
    url: "https://kevin-lavenant.fr/",
    type: "website",
    images: [
      {
        url: "https://https://kevin-lavenant.fr/assets/images/cv-photo-profil-650-100.jpg",
        width: 800,
        height: 600,
        alt: "Portfolio de Kévin Lavenant"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${roboto.variable}`}>
        <ScrollSmooth>
          {children}
        </ScrollSmooth>
      </body>
    </html>
  );
}
