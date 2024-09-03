'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEvent, useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { useParams } from 'next/navigation';
import { useTranslations, useLocale } from "next-intl";
import { locales } from "@/i18n";
import '@/app/[locale]/global.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#76ABAE',
        },
        secondary: {
            main: '#0E8388',
        },
        text: {
            primary: '#eeeeee',
            secondary: '#222831',
        },
    },
});

export default function LocaleSwitcherSelect() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    const t = useTranslations('localeSwitcher');
    const localeIntl = useLocale();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(
                // @ts-ignore  
                { pathname, params },
                { locale: nextLocale },

            );
        });
    }
    return (
        <ThemeProvider theme={theme}>
            <FormControl fullWidth size='small' className="myFormControl" >
                <InputLabel variant="standard" htmlFor="uncontrolled-native" className="myInputLabel">
                    {t("label")}
                </InputLabel>
                <NativeSelect
                    defaultValue={localeIntl}
                    onChange={onSelectChange}
                    disabled={isPending}
                    inputProps={{
                        id: 'uncontrolled-native',
                    }}
                >
                    {locales.map((loca) => (
                        <option value={loca} key={loca} className="myOption" >
                            {t("locale", { locale: loca })}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </ThemeProvider>

        // <Select
        //     label={t("label")}
        //     className="min-w-40 max-h-xs hover:bg-blackest active:bg-blackest focus:bg-blackest after:*:bg-blackest rounded-md"
        //     disabled={isPending}
        //     onChange={onSelectChange}
        //     value={localeIntl}
        //     variant="flat"
        //     radius="full"
        //     selectionMode="single"
        //     size="sm"
        // >
        //     {locales.map((loca) => (
        //     <SelectItem className="bg-blackest/80 text-white" key={loca} value={loca}>
        //         {t("locale", {locale: loca})}
        //     </SelectItem>
        //     ))}
        // </Select>

        // <label
        //     className={clsx(
        //         "relative text-white",
        //         isPending && "transition-opacity [&:disabled]:opacity-50",
        //         "active:scale-95 active:border-none active:outline-none focus:none"
        //     )}
        // >
        //     <p className='sr-only'>{label}</p>
        //     <select 
        //         className='inline-flex appearance-none bg-transparente py-3 pl-2 pr-6'
        //         defaultValue={defaultValue}
        //         disabled={isPending}
        //         onChange={onSelectChange}
        //     >
        //         {children}
        //     </select>
        //     <span className="absolute inset-y-0 right-0 flex items-center pr-2">
        //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
        //             <path fillRule="evenodd" d="M9.47 15.28a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 1 0-1.06-1.06L10 13.69 6.28 9.97a.75.75 0 0 0-1.06 1.06l4.25 4.25ZM5.22 6.03l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L10 8.69 6.28 4.97a.75.75 0 0 0-1.06 1.06Z" clipRule="evenodd" />
        //         </svg>
        //     </span>
        // </label>
    );
}