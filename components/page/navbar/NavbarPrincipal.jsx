import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import GenericButton from "@mui/GenericButton";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from '@otherComp/localeSwitcher/LocaleSwitcherSelect';

export default function NavbarPrincipal() {
  const t = useTranslations('navbar');
  return (
    <Navbar className="bg-lessBlack" position="static" >
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/register/signup" passHref>
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
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
