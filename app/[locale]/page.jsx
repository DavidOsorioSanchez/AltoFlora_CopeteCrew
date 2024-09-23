
//import React, { lazy, Suspense } from 'react';
//import Icons from "@mui/Icons";
//import Waiting from "@mui/Waiting.tsx";
import NavbarPrincipal from "@pageComp/navbar/NavbarPrincipal.jsx";
import Main from "@pageComp/main/Main.tsx";
import Footer from "@pageComp/footer/Footer.tsx";
import About from "@pageComp/About/About.tsx";
import { MyCarrusel } from "@magicui/marquee/MyCarrusel.tsx";

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
