//import React, { lazy, Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import GenericButton from "@/components/mui/GenericButton";
//import Icons from "@/components/mui/Icons";
//import Waiting from "@/components/mui/Waiting.tsx";
import NavbarPrincipal from "@/components/navbar/NavbarPrincipal.jsx"
import Model from '@/components/Modelo3D/Model.tsx';
import Image from "next/image";
import { Link } from "@/navigation";
import { MyCarrusel } from "@/components/magicui/marquee/MyCarrusel.tsx";
export default async function HomePage() {
    const t = await getTranslations('');
    return (
        <>
            <NavbarPrincipal />
            <main className="w-screen min-h-screen overflow-hidden flex flex-col gap-40 justify-center items-center md:gap-4">
                {/* portada */}
                <div className="w-full h-screen overflow-hidden flex flex-wrap-reverse justify-center  items-center md:flex-nowrap">
                    <div className="w-full max-w-1/2 h-auto flex flex-col gap-0 md:gap-4">
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
                        <div className="w-full h-full flex justify-center items-center gap-4">

                            <GenericButton
                                variant="contained"
                                text={t('landingPage.main.download')}
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                    </svg>
                                }
                                minWidth='10rem'
                                backgroundColor='#0E8388'
                                hoverBackgroundColor='#76ABAE'
                                textBold='bold'
                                textColor='#eeeeee'
                            />

                            <GenericButton
                                variant="contained"
                                text={t('landingPage.main.tutorial')}
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                }
                                minWidth='10rem'
                                backgroundColor='#EE9322'
                                hoverBackgroundColor='#E9B824'
                                textBold='bold'
                                textColor='#eeeeee'
                            />
                        </div>
                    </div>
                    <Model className="h-full min-h-[40rem] min-w-[40rem] " Url="https://prod.spline.design/xxyp3g4mlgx5v6KD/scene.splinecode" />
                </div>
                {/* carrusel */}
                <MyCarrusel />
            </main>

        </>
    );
}
