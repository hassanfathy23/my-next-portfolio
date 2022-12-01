import { Space_Mono, Playfair_Display, Inconsolata } from '@next/font/google'

// import AnimatedBg from "../components/UI/AnimatedBg";

const spaceMono = Space_Mono({
    weight: '400',
    style: 'italic',
    variable: '--font-space-mono'
})

const playFair = Playfair_Display({
    weight: '400',
    style: 'italic',
    variable: '--font-playfair',
    subsets: ['latin']
})

const inconsolata = Inconsolata({
    weight: '300',
    variable: '--font-inconsolata',
    subsets: ['latin']
})

function FeaturesPage() {
    return ( 
        <>
        {/* <AnimatedBg /> */}
        <p className={`w-full align-middle text-center text-4xl ${inconsolata.variable} font-inconsolata animate-fromTopToBottom`}>this is font test</p>
        </>
     );
}

export default FeaturesPage;