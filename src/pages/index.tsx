import { useEffect, useState } from "react";
import ButtonLandingPage from "../components/buttons/ButtonLandingpage";
import { font } from "@/components/fonts/Fonts";

export default function LandingPage() {

    const [isAnimation, setAnimation] = useState<boolean>(false);

    const handleAnimation = () => {
        if(!isAnimation) setAnimation(true);
        console.log(isAnimation)
    }
    useEffect(() => {
        handleAnimation()
    }, [])
   
    return (
        <div className="background min-h-screen flex flex-col justify-center items-center opacity-90 ">
            <div className=" z-10">
                <h1 className={`${font.dance.className} text-4xl fontTitler text-center text-white`}>Ethereal Witch</h1>
            </div>
            <div className="text-center mt-8 mx-4 z-10">
                <p className={`${font.ubuntu.className} text-white leading-7 text-center`}>
                    Prepare-se para ser transportado para além dos limites da percepção com a Ethereal Witch. Aqui, a realidade se entrelaça com o desconhecido, onde cada produto é uma ponte para os reinos além do comum. Explore nosso arsenal de artefatos encantados e poções efervescentes, criados para despertar os poderes adormecidos em cada alma curiosa. Sinta o pulsar da energia ancestral enquanto você se aventura pelas nossas ofertas cuidadosamente selecionadas. Bem-vindo a uma jornada além da compreensão, bem-vindo ao Ethereal Witch.
                </p>
            </div>
            <div className="mt-12 z-10 ">
                <p className={`${font.ubuntu.className} text-white text-center mr-3 mb-5`}>Explore agora</p>
                <div className={`transform transition-transform duration-500 ${isAnimation ? 'scale-300' : 'scale-100'}`}>
                    <button
                        onClick={handleAnimation}
                    >
                        <ButtonLandingPage />
                    </button>
                </div>
        
            </div>
        </div>
    )
}
