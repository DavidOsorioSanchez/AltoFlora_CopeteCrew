import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {locales, localePrefix, pathnames} from './config';

export const {Link, redirect, usePathname, getPathname, useRouter} =
createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});