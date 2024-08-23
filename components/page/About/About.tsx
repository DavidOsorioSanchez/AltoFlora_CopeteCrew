import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function About() {
    const t = await getTranslations("about");
    return (
        <div className="w-full h-full flex flex-col gap-4 justify-around items-center md:flex-row">
            <Image
                src="https://i.imgur.com/Wyh3TDu.png"
                alt="imagenes de pokemon"
                width={400}
                height={400}
                className="rounded-medium"
            />
            <div className=" w-auto h-auto flex flex-col flex-nowrap justify-center  gap-6 max-w-full md:max-w-[40%]">
                <h1 className="text-start text-nowrap text-2xl font-bold">{t("title")}</h1>
                <p className="text-lg text-center text-wrap md:text-xl text-normal">{t("description")}</p>
            </div>
        </div>
    )
}