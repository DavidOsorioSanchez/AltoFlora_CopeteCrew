import React from "react";
import { Card, CardFooter, Image, } from "@nextui-org/react";
import { cn } from "@/lib/utils";

interface Props {
    title: string;
    img: string;
    icon: string;
    description: string;
}

export default function CardCarrusel({
    title,
    img,
    icon,
    description,
}: Props){
    return (
        <figure
            className={cn(
                "relative min-w-[20rem] cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src={img}
                />
                <CardFooter className="absolute min-h-[100px] bg-black/40 bottom-0 z-10 border-t-1 border-default-600">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src={icon}
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60">{title}</p>
                            <p className="text-tiny text-white/60">{description}</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </figure>
    );
};
