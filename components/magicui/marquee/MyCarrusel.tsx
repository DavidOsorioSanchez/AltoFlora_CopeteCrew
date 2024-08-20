import Marquee from "@/components/magicui/marquee/Marquee";
import CardCarrusel from "./CardCarrusel";
import { getTranslations } from "next-intl/server";

export async function MyCarrusel() {
    const t = await getTranslations("landingPage");
    return (
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <Marquee pauseOnHover  className="[--duration:30s]">
                    {/* tienda */}
                    <CardCarrusel title={t("marquee.shop.title")} img={"https://i.imgur.com/QeGxxCZ.jpeg"} icon={"https://i.imgur.com/mFWAVtj.png"} description={t("marquee.shop.description")} />
                    {/* pokedex */}
                    <CardCarrusel title={"Pokedex"} img={"https://i.imgur.com/Wyh3TDu.png"} icon={"https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"} description={t("marquee.pokedex.description")} />
                    {/* user */}
                    <CardCarrusel title={t("marquee.user.title")} img={"https://sm.ign.com/t/ign_latam/screenshot/default/jack-black-steve_kj32.1280.jpg"} icon={"https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"} description={t("marquee.user.description")} />
                    {/* info */}
                    <CardCarrusel title={t("marquee.information.title")} img={"https://i.pinimg.com/736x/4e/c2/5d/4ec25d41cb4aa33d840938f30de51539.jpg"} icon={"https://i.imgur.com/7twA7CV.png"} description={t("marquee.information.description")} />
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
        </div>
    );
}


