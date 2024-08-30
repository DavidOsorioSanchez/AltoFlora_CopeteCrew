import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import Icons from "@/components/mui/Icons";
import GenericButton from "@/components/mui/GenericButton";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
//import NavbarLocaleSwicher from '@/components/localeSwitcher/NavbarLocaleSwitcher';

export default function NavbarPrincipal() {
  const t = useTranslations('navbar');
  return (
    <Navbar className="bg-lessBlack" position="static" >
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/register/singup">
            <GenericButton
              variant="outlined"
              text={t("signUp")}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>

              }
              borderColor="#eeeeee"
              textColor="#eeeeee"
              textBold="bold"
              hoverBorderColor="#76ABAE"
              hoverTextColor="#76ABAE"
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/register/login">
            <GenericButton
              variant="outlined"
              text={t("login")}
              icon={
                <Icons
                  path1={"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" }
                />
              }
              borderColor="#eeeeee"
              textColor="#eeeeee"
              textBold="bold"
              hoverBorderColor="#76ABAE"
              hoverTextColor="#76ABAE"
            />
          </Link>
        </NavbarItem>   
        <NavbarItem>
          {/* <NavbarLocaleSwicher/>  */}
        </NavbarItem> 
      </NavbarContent>
    </Navbar>
  );
}
