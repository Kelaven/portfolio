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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
