import React  from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import cn from "@/lib/utils";
import { useTranslations } from "next-intl";

interface Props {
    title: string;
    img: string;
    icon: string;
    description: string;
    available: boolean;
}

export default function CardCarrusel({
    title,
    img,
    icon,
    description,
    available,
}: Props){
    const t = useTranslations('cardCarrusel');
    return (
        <figure
            className={cn(
                "relative min-w-[25rem] max-w-[35rem] cursor-pointer overflow-hidden rounded-xl",
            )}
        >
            <Card isFooterBlurred className=" top-0 left-0 w-full h-[350px] col-span-12 sm:col-span-7">
                
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src={img}
                />
                <CardFooter className="absolute min-h-[150px] text-white bottom-0 z-10 border-t-1 bg-blackest/80 border-default-600">
                    <div className="flex flex-grow gap-2  items-center">
                        <Image
                            alt="Breathing app icon"
                            className="radius-none h-12 w-14 p-1 object-cover "
                            src={icon}
                        />
                        <div className="flex flex-col">
                            <p className="font-semibold text-medium text-white">{title}</p>
                            <p className="text-tiny text-white/80 line-clamp-2 text-wrap">{description}</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
            <span className={` ${available ? "hidden":"block"} z-10 bg-blackest/80 text-white absolute top-0 left-0 w-full h-[350px]`}> 
                <div className=" h-full flex justify-center items-center">
                    <p className=" font-bold text-2xl"> {t("notAvailable")} </p>
                </div>
            </span>
        </figure>
    );
};
