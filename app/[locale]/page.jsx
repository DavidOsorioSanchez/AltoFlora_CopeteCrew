import { getTranslations } from 'next-intl/server';
import GenericButton from "../../components/GenericButton";
//import Icons from "../../components/Icons";
import NavbarPrincipal from "../../components/navbar/NavbarPrincipal.jsx"
import Model from "../../components/Modelo3D/Model.tsx"
import Image from "next/image";
export default async function HomePage() {
    const t = await getTranslations('');
    return (
        <>
            <NavbarPrincipal/>
            <main className="w-full h-screen overflow-hidden flex justify-center items-center">
                <div className="w-full max-w-1/2 h-auto flex flex-col gap-4">
                    <div className="w-full max-w-1/2 h-full flex justify-center items-center ">
                        <Image
                            src="https://i.imgur.com/Tt6QQCT.png"
                            alt="AltoFlora"
                            height={125}
                            width={125}
                            priority
                            />
                        <p className="font-bold font-sarabun text-9xl text-white text-inherit">
                            ltoFlora
                        </p>
                    </div>
                    <div className="w-full h-full flex justify-center items-center ">
                    <GenericButton

                  
                            variant="contained"
                            text={t('landingPage.main.download')}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                                </svg>
                            } 
                            minWidth='10rem'
                            backgroundColor='#DC143C'
                            hoverBackgroundColor='#8B0000'
                            textBold='bold'
                            textColor='#eeeeee'
                        />
                    </div>
                    
                </div>
                
                <Model className="h-full min-h-[40rem] min-w-[40rem] " Url="https://prod.spline.design/xxyp3g4mlgx5v6KD/scene.splinecode" />
            </main>
        </>
    );
}
