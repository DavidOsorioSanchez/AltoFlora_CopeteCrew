import Image from "next/image";
import Map from "@/public/map.jpg";
export default function Register ( {children} ){
    return (
        <div className="h-screen w-screen relative bg-[#222287] overflow-hidden">
            <Image 
                src={Map}
                alt="AltoFlora"
                className="h-auto w-screen max-h-screen max-w-2xl aspect-square absolute top-[50%] left-[50%] brightness-75 -translate-y-1/2 -translate-x-1/2  lg:left-0 lg:translate-x-0 lg:max-w-[50vw]"
                priority
            />
            {children}
        </div>
    )
}