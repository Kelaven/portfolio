import { Space_Grotesk, Roboto } from 'next/font/google';

export const space_grotesk_init = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const roboto_init = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const space_grotesk = space_grotesk_init.variable;
export const roboto = roboto_init.variable;