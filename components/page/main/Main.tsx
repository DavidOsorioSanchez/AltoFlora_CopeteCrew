import Model from '@/components/Modelo3D/Model';
import Image from "next/image";
import { Link } from "@/navigation";
import GenericButton from "@/components/mui/GenericButton";
import DownloadZipButton from "@/components/componentsDownload/DownloadZipButton";
import { useTranslations } from "next-intl";
import MyImagen from "@/public/LogoAltoFlora.png";

export default function Main() {
    const t = useTranslations('landingPage');
    return (
        <div className="w-full h-screen overflow-hidden flex flex-wrap-reverse justify-center  items-center md:flex-nowrap">
            <div className="w-full max-w-1/2 h-auto flex flex-col p-4 gap-0 md:gap-4">
                <div className="w-full max-w-1/2 h-full flex flex-col">
                    <div className="w-full h-full flex justify-center items-center ">
                        <Image
                            src={MyImagen}
                            alt="AltoFlora"
                            height={505}
                            width={505}
                            priority
                        />
                    </div>
                    <p className="font-light font-sarabun text-medium text-white/70 text-inherit text-center">
                        Minecraft: Java Edition • {t('main.version')}: 1.20.1
                    </p>

                </div>
                <div className="w-full h-full flex justify-center items-center gap-4">
                    <DownloadZipButton
                        zipFileName='AltoFloraMods.zip'
                        text={t('main.download')}
                    />
                    <Link href="/dashboard" passHref>
                        <GenericButton
                            variant="contained"
                            text={t('main.tutorial')}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                            }
                            minWidth='10rem'
                            backgroundColor='#EE9322'
                            hoverBackgroundColor='#E9B824'
                            textBold='bold'
                            textColor='#eeeeee'
                        />
                    </Link>

                </div>
            </div>
                <Model Url="prod.spline.design/xxyp3g4mlgx5v6KD/scene.splinecode" />
        </div>
    );
}