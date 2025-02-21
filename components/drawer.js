import { isDarkColor } from "../utils";
export const drawerColor = ({ theme }) => ({
    '.drawer-color': {
        backgroundColor: theme('colors.gray.100'),
    }
});
export const drawer = ({ theme }) => ({
    '.drawer': {
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: 'fixed',
        top: '0',
        height: '100vh',
        overflow: 'hidden',
        transitionProperty: 'transform',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: theme('zIndex.full', '999999'),
        width: theme('drawer.width', theme('width.64')),
        transitionDuration: theme('drawer.duration', '300ms'),
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
        transitionDuration: theme('drawer.duration', '300ms'),
        '&.drawer-start': {
            'inset-inline-start': '0',
            transform: 'translateX(-100%)',
        },
        '&.drawer-end': {
            '@apply border-red-500': {},
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
        //borderBottomWidth: theme('borderWidth.1', '1px'),
        //borderBottomColor: theme('colors.gray.200'),
        '.dark &': {
            //borderBottomColor: theme('colors.gray.700'),
        },
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
});