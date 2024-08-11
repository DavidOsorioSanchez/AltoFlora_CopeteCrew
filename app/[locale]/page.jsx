import { getTranslations } from 'next-intl/server';
import NavbarPrincipal from "../../components/navbar/NavbarPrincipal.jsx"
export default async function HomePage() {
    const t = await getTranslations('navbar');
    return (
        <>
            <NavbarPrincipal home={t("home")} login={t("login")} />
        </>
    );
}
