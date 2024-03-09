import Image from "next/image";

export default function ButtonLandingPage () {
    return (
        <>
         <div className="container mx-auto opacity-60">
                    <div className="w-32 h-32 rounded-full overflow-hidden m-auto">
                        <Image src={'/home_landpage.gif'} width={600} height={540} alt={""} className=" z-20" />
                    </div>
                </div>
        </>
    )
}