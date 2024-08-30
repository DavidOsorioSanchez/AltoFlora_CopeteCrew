import { CoolMode } from "./cool-mode";

interface Props {
    children: React.ReactNode;
}

export function CoolModeCustom({children}: Props) {
    return (
            <CoolMode
                options={{
                    particle:"https://i.pinimg.com/originals/92/64/d5/9264d5ec77eec85e69b81c66449afb3c.png"
                }}
            >
                {children}
            </CoolMode>
    );
}