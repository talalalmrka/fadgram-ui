export const progressSizes = ({ theme }) => ({
    '&.xs': {
        height: theme('height.1'),
        '.progress-bar': {
            height: theme('height.1'),
            fontSize: theme('fontSize.xxs'),
        },
    },
    '&.sm': {
        height: theme('height.1.5'),
        '.progress-bar': {
            height: theme('height.1.5'),
            fontSize: theme('fontSize.xs'),
        },
    },
    '&.lg': {
        height: theme('height.4'),
        '.progress-bar': {
            height: theme('height.4'),
            fontSize: theme('fontSize.sm'),
        },
    },
    '&.xl': {
        height: theme('height.6'),
        '.progress-bar': {
            height: theme('height.6'),
            fontSize: theme('fontSize.base'),
        },
    },
});
export const progressBar = ({ theme }) => ({
    '.progress-bar': {
        '@apply flex items-center justify-center text-[0.5rem] font-medium text-primary-100 h-full rounded-full leading-none text-center bg-primary-600 dark:bg-primary-500': {},
    },
});
export const progress = ({ theme }) => ({
    '.progress': {
        '@apply h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 text-white text-xs': {},
        ...progressSizes({ theme }),
        ...progressBar({ theme }),
        ...Object.keys(theme('colors')).reduce((acc, colorName) => {
            const color = theme(`colors.${colorName}`);
            if (typeof color === 'object') {
                acc[`&.${colorName}`] = {
                    '.progress-bar': {
                        backgroundColor: theme(`colors.${colorName}.600`),
                        '&.dark': {
                            backgroundColor: theme(`colors.${colorName}.500`),
                        },
                    }
                };
            }
            return acc;
        }, {}),
    }
});
/*import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addComponents, theme }) {
    //console.log(theme('padding'));
    const base = {
        '@apply h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 text-white text-xs': {},
    };
    const sizes = {
        '&.xs': {
            '@apply h-1': {},
            '.progress-bar': {
                '@apply h-1 text-[0.12rem]': {},
            },
        },
        '&.sm': {
            '@apply h-1.5': {},
            '.progress-bar': {
                '@apply h-1.5 text-[0.25rem]': {},
            },
        },
        '&.lg': {
            '@apply h-4': {},
            '.progress-bar': {
                '@apply h-4 text-sm': {},
            },
        },
        '&.xl': {
            '@apply h-6': {},
            '.progress-bar': {
                '@apply h-6 text-base': {},
            },
        },
    };
    const progressBar = {
        '.progress-bar': {
            '@apply flex items-center justify-center text-[0.5rem] font-medium text-primary-100 h-full rounded-full leading-none text-center bg-primary-600 dark:bg-primary-500': {},
        },
    };
    const colors = () => {
        const colorObject = theme('colors');
        //console.log(colorObject);
        return Object.keys(colorObject).reduce((acc, colorName) => {
            const color = colorObject[colorName];
            if (typeof color === 'object') {
                const base = `@apply bg-${colorName}-600 dark:bg-${colorName}-500`;
                acc[`&.${colorName}`] = {
                    '.progress-bar': {
                        backgroundColor: color[600],
                        '&.dark': {
                            backgroundColor: color[500],
                        },
                    }
                };
            }
            return acc;
        }, {});
    };
    const progress = {
        '.progress': {
            ...base,
            ...sizes,
            //...progressBar,
            ...colors(),
        }
    };
    addComponents({
        ...progressBar,
        ...progress,
    });
});
*/