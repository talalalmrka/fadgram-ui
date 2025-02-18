export const badgeSizes = ({ theme }) => ({
    '&.xs': {
        paddingInline: theme('padding.1'),
        paddingBlock: theme('padding.0'),
        fontWeight: theme('fontWeight.extralight'),
    },
    '&.sm': {
        paddingInline: theme('padding')['1.5'],
        paddingBlock: theme('padding.0'),
        fontWeight: theme('fontWeight.light'),
    },
    '&.lg': {
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.medium'),
    },
    '&.xl': {
        fontSize: theme('fontSize.base'),
        paddingInline: theme('padding.3'),
        paddingBlock: theme('padding.1'),
        fontWeight: theme('fontWeight.medium'),
    },
    '&.xxl': {
        fontSize: theme('fontSize.lg'),
        paddingInline: theme('padding.4'),
        paddingBlock: theme('padding')['1.5'],
        fontWeight: theme('fontWeight.medium'),
    },
});
export const badge = ({ theme }) => ({
    '.badge': {
        fontSize: theme('fontSize.xs'),
        fontWeight: theme('fontWeight.medium'),
        borderRadius: theme('borderRadius.DEFAULT'),
        paddingInline: theme('padding')['2.5'],
        paddingBlock: theme('padding')['0.5'],
        ...badgeSizes({ theme }),
        ...Object.keys(theme('colors')).reduce((acc, colorName) => {
            const color = theme(`colors.${colorName}`);
            if (typeof color === 'object') {
                acc[`&.${colorName}`] = {
                    backgroundColor: color[200],
                    color: color[800],
                    '.dark &': {
                        backgroundColor: color[900],
                        color: color[300],
                    },
                    '&.outline': {
                        'outline': 'none',
                        borderWidth: theme('borderWidth.1'),
                        borderColor: color[400],
                    }
                };
            }
            return acc;
        }, {}),

        '&.notification': {
            '@apply absolute inline-flex items-center justify-center text-xxs w-5 h-5 font-bold text-white bg-red-500 border-1 border-white rounded-full -top-1.5 -end-1.5 dark:border-gray-900': {},
        },
        '&.chip': {
            '@apply bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-light-300 cursor-pointer': {},
            '&.active': {
                '@apply bg-blue-600 dark:bg-blue-800 text-white dark:text-white': {},
            }
        }
    },
});