import Image from "next/image";
import MyImagen from "@/public/LogoAltoFlora.png";
import GenericButton from "@mui/GenericButton";
import { Link } from "@/navigation";

export default function PrincipalCard() {
    return (
        <div className="absolute right-0 w-screen lg:w-[50vw] h-screen flex flex-col p-4">
            <header className="w-full h-fit flex justify-center items-center min-[440px]:justify-between">
                <Link href="/" className="block min-[440px]:hidden" passHref>
                    <Image src={MyImagen} alt="AltoFlora" height={200} width={200} />
                </Link>
                <Image src={MyImagen} alt="AltoFlora" className="hidden min-[440px]:block" height={200} width={200} />
                <div className="hidden min-[440px]:block w-auto h-auto">
                    <GenericButton
                        variant="contained"
                        href="/"
                        text="Home"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                                />
                            </svg>
                        }
                        minWidth="10rem"
                        backgroundColor="#EE9322"
                        hoverBackgroundColor="#E9B824"
                        textBold="bold"
                        textColor="#eeeeee"
                    />
                </div>
            </header>
        </div>
    );
}
