import { Moon_Dance, Ubuntu } from 'next/font/google';

const dance = Moon_Dance({
    subsets: ['latin'],
    weight: "400"
})

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: "300"
})

export const font = {
    dance,
    ubuntu
}