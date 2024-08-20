import Marquee from "@/components/magicui/marquee/Marquee";
import { InformationCarrusel as i } from "./InformationCarrusel";
import CardCarrusel from "./CardCarrusel";


const firstRow = i.slice(0, i.length / 2);


export function MyCarrusel() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:30s]">
                {firstRow.map((i) => (
                    <CardCarrusel key={i.title} {...i} title={i.title} img={i.img} icon={i.icon} description={i.description} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}