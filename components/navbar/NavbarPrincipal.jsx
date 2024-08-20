import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import Icons from "@/components/mui/Icons";
import GenericButton from "@/components/mui/GenericButton";
import { Link } from "@/navigation";
import { getLocale, getTranslations } from "next-intl/server";
//import NavbarLocaleSwicher from '../localeSwitcher/NavbarLocaleSwitcherer';

export default async function NavbarPrincipal() {
  const t = await getTranslations('navbar');
  const lang = await getLocale();
  return (
    <Navbar className="bg-lessBlack" position="static" >
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href={`${lang}/dashboard`} >
            <GenericButton
              variant="outlined"
              text={t("signUp")}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
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
          <Link href={`${lang}/login`} >
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
          {/* <NavbarLocaleSwicher/> */}

        </NavbarItem> 
      </NavbarContent>
    </Navbar>
  );
}
