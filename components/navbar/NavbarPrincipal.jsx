import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import IconNavbar from "./IconNavbar";
import ButtonNavbarContained from "./ButtonNavbarcontained";
import ButtonNavbarOutlined from "./ButtonNavbarOutlined";

export default function NavbarPrincipal() {
  return (
    <Navbar className="bg-blackest shadow-large">
      <NavbarBrand justify="start">
        <Image
          src="https://images.vexels.com/media/users/3/206486/isolated/preview/98aa8797614f462e0035b129115fcae9-letra-del-alfabeto-floral-a.png"
          alt="AltoFlora"
          height={35}
          width={35}
          priority
        />
        <p className="font-bold font-sarabun text-4xl text-white text-inherit">
          ltoFlora
        </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/dashboard">
            <ButtonNavbarContained
              
              text={"Dashboard"}
              icon={
                <IconNavbar
                  path1={
                    "M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
                  }
                  path2={
                    "m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
                  }
                />
              }
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/login">
            <ButtonNavbarOutlined
              textOUT={"Sign in"}
              iconOUT={
                <IconNavbar
                  path1={"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" }
                />
              }
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
