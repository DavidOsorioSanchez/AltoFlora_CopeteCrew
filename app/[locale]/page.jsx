import { getTranslations } from 'next-intl/server';
import NavbarPrincipal from "../../components/navbar/NavbarPrincipal.jsx"
import Model from "../../components/Modelo3D/Model.jsx"
import Image from "next/image";
export default async function HomePage() {
    const t = await getTranslations('navbar');
    return (
        <>
            <NavbarPrincipal home={t("home")} login={t("login")} />
            <main className="w-full h-screen overflow-hidden flex justify-center items-center">
                <div className="w-full max-w-1/2 h-full flex justify-center items-center ">
                    <Image
                        className='grayscale invert contrast-200 brightness-150'
                        src="https://images.vexels.com/media/users/3/206486/isolated/preview/98aa8797614f462e0035b129115fcae9-letra-del-alfabeto-floral-a.png"
                        alt="AltoFlora"
                        height={125}
                        width={125}
                        priority
                        />
                    <p className="font-bold font-sarabun text-9xl text-white text-inherit">
                        ltoFlora
                    </p>
                </div>
                <Model className="h-full min-h-[40rem] min-w-[40rem] " Url="https://prod.spline.design/xxyp3g4mlgx5v6KD/scene.splinecode" />
            </main>
        </>
    );
}
