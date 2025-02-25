import { isDarkColor } from "../utils";
import { navbarToggle, navLink } from "./navbar";
export const drawerColor = ({ theme }) => ({
    '.drawer-color': {
        backgroundColor: theme('colors.gray.100'),
    }
});
export const drawer = ({ theme }) => ({
    '.drawer': {
        //'@apply flex flex-col overflow-hidden fixed top-0 h-[100vh] transition-transform z-50 w-'
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: 'fixed',
        top: '0',
        height: '100vh',
        overflow: 'hidden',
        transitionProperty: 'transform',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: theme('zIndex.30', '30'),
        width: theme('drawer.width', theme('width.64')),
        transitionDuration: theme('drawer.duration', '300ms'),
        'inset-inline-start': '0',
        transform: 'translateX(-100%)',
        ...Object.keys(theme('colors')).reduce((acc, colorName) => {
            const color = theme(`colors.${colorName}`);
            if (typeof color === 'object') {
                const hex = theme(`colors.${colorName}.DEFAULT`);
                const textColor = isDarkColor(hex) ? theme('colors.white') : theme('colors.black');
                acc[`&.${colorName}`] = {
                    backgroundColor: theme(`colors.${colorName}.DEFAULT`),
                    color: textColor,
                    '.nav-link': {
                        color: isDarkColor(hex) ? theme('colors.gray.200') : theme('colors.gray.500'),
                        '&:hover, &.active': {
                            color: isDarkColor(hex) ? theme('colors.white') : theme('colors.gray.900'),
                        },
                    },
                    '.drawer-header': {
                        '@apply border-b-black/10': {},
                    },
                };
            }
            return acc;
        }, {}),
        '&.show': {
            transform: 'translateX(0)',
        },
        '&.drawer-start': {
            'inset-inline-start': '0',
            transform: 'translateX(-100%)',
        },
        '&.drawer-end': {
            '@apply border-red-500': {},
            'inset-inline-start': 'auto',
            'inset-inline-end': '0',
            transform: 'translateX(100%)',
        },
        '&.drawer-start, &.drawer-end': {
            '&.show': {
                transform: 'translateX(0)',
            },
            '&.expand-sm': {
                '@media (min-width: 640px)': {
                    transform: 'translateX(0) !important',
                }
            },
            '&.expand-sm': {
                '@media (min-width: 640px)': {
                    transform: 'translateX(0) !important',
                }
            },
            '&.expand-md': {
                '@media (min-width: 768px)': {
                    transform: 'translateX(0) !important',
                }
            },
            '&.expand-lg': {
                '@media (min-width: 1024px)': {
                    transform: 'translateX(0) !important',
                }
            },
            '&.expand-xl': {
                '@media (min-width: 1200px)': {
                    transform: 'translateX(0) !important',
                }
            },
        },
        '&.drawer-top': {
            width: '100%',
            height: theme('drawer.height', '40vh'),
            top: 'auto',
            bottom: '100%',
            'inset-inline-start': '0',
            transitionDuration: theme('drawer.duration', '300ms'),
            transform: 'translateY(0)',
            '&.show': {
                transform: 'translateY(100%)',
            },
        },
        '&.drawer-bottom': {
            width: '100%',
            height: theme('drawer.height', '40vh'),
            top: '100%',
            'inset-inline-start': '0',
            transitionDuration: theme('drawer.duration', '300ms'),
            transform: 'translateY(0)',
            '&.show': {
                transform: 'translateY(-100%)',
            },
        },
    },
    '.drawer-header': {
        flex: "none",
        paddingInline: theme('padding.3'),
        paddingBlock: theme('padding.1'),
    },
    '.drawer-title': {
        marginBottom: 0,
        lineHeight: 1,
    },
    '.drawer-body': {
        flexGrow: 1,
        padding: theme('padding.2'),
        overflowY: 'auto',
    },
    '.drawer-close': {
        '@apply flex items-center justify-center p-2 rounded-lg transition-colors relative w-8 h-8 border-0': {},
        'color': 'currentColor',
    }
});