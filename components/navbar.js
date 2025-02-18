import _ from "underscore";
import { isDarkColor, isHexColor } from "../utils";
export const nav = ({ theme }) => ({
    '.nav': {
        '@apply flex space-x-2 rtl:space-x-reverse md:space-x-3 items-center': {},
        '&.vertical': {
            '@apply flex-col space-x-0 md:space-x-0 space-y-3': {},
            '.nav-link': {
                '@apply flex w-full truncate space-x-2 rtl:space-x-reverse px-3 py-2': {},
            },
        }
    }
});
export const navLink = ({ theme }) => ({
    '.nav-link': {
        '@apply inline-flex space-x-1 rtl:space-x-reverse items-center text-sm font-medium leading-5 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 transition duration-150 ease-in-out': {},
        '&.bordered': {
            '@apply border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700  focus:border-gray-300 dark:focus:border-gray-700': {},
        },
        '&.active': {
            '@apply text-gray-900 dark:text-gray-100': {},
            '&.bordered': {
                '@apply border-primary-400 dark:border-primary-600': {},
            },
        },
    },
});
export const navbarToggle = ({ theme }) => ({
    '.navbar-toggle': {
        '@apply flex items-center justify-center p-2 rounded-lg transition-colors relative w-8 h-8': {},
        'color': 'currentColor',
        '& span': {
            '@apply absolute block w-5 h-0.5 bg-current transition-transform': {},
            'top': '50%',
            'left': '0',
            'transform': 'translateY(-50%)',
        },
        '&::before, &::after': {
            'content': '""',
            '@apply absolute block w-5 h-0.5 bg-current transition-transform': {},
            'left': '0',
        },
        '&::before': {
            'top': '25%',
        },
        '&::after': {
            'bottom': '25%',
        },
    },
});
export const navbar = ({ theme }) => ({
    '.navbar': {
        '@apply flex flex-wrap items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8': {},
        ...Object.keys(theme('colors')).reduce((acc, colorName) => {
            const color = theme(`colors.${colorName}`);
            if (typeof color === 'object') {
                const hex = theme(`colors.${colorName}.DEFAULT`);
                const textColor = isDarkColor(hex) ? theme('colors.white') : theme('colors.black');
                acc[`&.${colorName}`] = {
                    backgroundColor: theme(`colors.${colorName}.DEFAULT`),
                    color: textColor,
                    '.navbar-brand': {
                        color: isDarkColor(hex) ? theme('colors.white') : theme('colors.gray.800'),
                    },
                    '.nav-link': {
                        color: isDarkColor(hex) ? theme('colors.gray.300') : theme('colors.gray.500'),
                        '&:hover, &.active': {
                            color: isDarkColor(hex) ? theme('colors.white') : theme('colors.gray.900'),
                        },
                    },
                    '.navbar-toggle': {
                        color: isDarkColor(hex) ? theme('colors.gray.300') : theme('colors.gray.500'),
                        '&:hover': {
                            color: isDarkColor(hex) ? theme('colors.white') : theme('colors.gray.900'),
                        },
                    },
                };
            }
            return acc;
        }, {}),
        '&.transparent': {
            backgroundColor: 'transparent !important',
        },
    },
    ...nav({ theme }),
    ...navLink({ theme }),
    ...navbarToggle({ theme }),
});