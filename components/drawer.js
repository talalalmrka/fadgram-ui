import { isDarkColor } from "../utils";
export const drawerColor = ({ theme }) => ({
    '.drawer-color': {
        backgroundColor: theme('colors.gray.100'),
    }
});
export const drawer = ({ theme }) => ({
    '.drawer': {
        position: 'fixed',
        top: '0',
        height: '100vh',
        overflowY: 'auto',
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
                        color: isDarkColor(hex) ? theme('colors.gray.300') : theme('colors.gray.500'),
                        '&:hover, &.active': {
                            color: isDarkColor(hex) ? theme('colors.white') : theme('colors.gray.900'),
                        },
                    },
                };
            }
            return acc;
        }, {}),
        transitionDuration: theme('drawer.duration', '300ms'),
    },
    '.drawer-start': {
        'inset-inline-start': '0',
        transform: 'translateX(-100%)',
    },
    '.drawer-end': {
        'inset-inline-end': '0',
        transform: 'translateX(100%)',
    },
    '.drawer-start, .drawer-end': {
        '&.show': {
            transform: 'translateX(0)',
        },
    },
    '.drawer-top': {
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
    '.drawer-bottom': {
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
});