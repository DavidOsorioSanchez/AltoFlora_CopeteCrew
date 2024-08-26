
//import React, { lazy, Suspense } from 'react';
//import Icons from "@/components/mui/Icons";
//import Waiting from "@/components/mui/Waiting.tsx";
import NavbarPrincipal from "@/components/page/navbar/NavbarPrincipal.jsx";
import Main from "@/components/page/main/Main.tsx";
import Footer from "@/components/page/footer/Footer.tsx";
import About from "@/components/page/About/About.tsx";
import { MyCarrusel } from "@/components/magicui/marquee/MyCarrusel.tsx";

export default function HomePage() {
    return (
        <>
            <NavbarPrincipal />
            <main className="min-w-screen min-h-screen overflow-hidden flex flex-col gap-40 justify-center items-center md:gap-4">
                {/* portada */}
                <Main/>
                {/* carrusel */}
                <MyCarrusel />
                <About />
            </main>
            


            <Footer />
        </>
    );
}
