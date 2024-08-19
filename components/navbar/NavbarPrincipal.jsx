import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import Icons from "../Icons";
import GenericButton from "../GenericButton";
import { Link } from "../../navigation";
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
              variant="contained"
              text={t("home")}
              icon={
                <Icons
                  path1={
                    "M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
                  }
                  path2={
                    "m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
                  }
                />
              }
              textColor="#31363F"
              backgroundColor="#eeeeee"
              textBold="bold"

              hoverBackgroundColor="#76ABAE"
              hoverTextColor="#eeeeee"
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
