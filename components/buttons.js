export const buttonSizes = ({ theme }) => ({
    'xs': {
        paddingInline: theme('padding.3'),
        paddingBlock: theme('padding')['1.5'],
        fontSize: theme('fontSize.xs'),
    },
    'sm': {
        paddingInline: theme('padding.3'),
        paddingBlock: theme('padding.2'),
        fontSize: theme('fontSize.sm'),
    },
    'lg': {
        paddingInline: theme('padding.5'),
        paddingBlock: theme('padding.3'),
        fontSize: theme('fontSize.base'),
    },
    'xl': {
        paddingInline: theme('padding.6'),
        paddingBlock: theme('padding.4'),
        fontSize: theme('fontSize.lg'),
    },
    'xxl': {
        paddingInline: theme('padding.8'),
        paddingBlock: theme('padding.6'),
        fontSize: theme('fontSize.xl'),
    },
});
export const buttons = ({ theme }) => ({
    '.btn': {
        display: 'flex',
        '@apply space-x-2 rtl:space-x-reverse': {},
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme('borderRadius.lg'),
        borderWidth: theme('borderWidth.1'),
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.medium'),
        paddingInline: theme('padding.5'),
        paddingBlock: theme('padding')['2.5'],
        borderColor: 'inherit',
        lineHeight: 1,
        '@apply focus:outline-none focus:ring-4': {},
        '&:disabled': {
            opacity: '0.6',
            cursor: 'not-allowed',
        },
        '&.gradient': {
            border: 'none',
            '&:hover': {
                border: 'none',
            },
        },
        '&.pill': {
            borderRadius: theme('borderRadius.full'),
        },
        ...Object.keys(buttonSizes({ theme })).reduce((ret, size) => {
            ret[`&.${size}`] = buttonSizes({ theme })[size];
            return ret;
        }, {}),
        ...Object.keys(theme('colors')).reduce((ret, colorName) => {
            const color = theme(`colors.${colorName}.DEFAULT`);
            const lightColors = [
                'white',
                'light',
            ];
            const textColor = lightColors.includes(colorName) ? theme('colors.black') : theme('colors.white');
            if (typeof color !== 'undefined') {
                ret[`&.${colorName}`] = {
                    color: textColor,
                    backgroundColor: color,
                    borderColor: color,
                    '&:hover': {
                        backgroundColor: theme(`colors.${colorName}.700`),
                        borderColor: theme(`colors.${colorName}.700`),
                        color: textColor,
                    },
                    '&:focus': {
                        //ringColor: theme(`colors.${colorName}.300`),
                        [`@apply ring-${colorName}/30`]: {},
                    },
                    '&.gradient': {
                        backgroundImage: `linear-gradient(to top left, ${theme(`colors.${colorName}.500`)}, ${color}, ${theme(`colors.${colorName}.700`)})`,
                        '&:hover': {
                            backgroundImage: `linear-gradient(to bottom right, ${theme(`colors.${colorName}.500`)}, ${color}, ${theme(`colors.${colorName}.700`)})`,
                        },
                    },
                };
            }
            return ret;
        }, {}),
    },
});