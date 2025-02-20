export const overviewCard = ({ theme }) => ({
    '.overview-card': {
        backgroundColor: theme('colors.white'),
        borderRadius: theme('borderRadius.lg'),
        borderWidth: theme('borderWidth.1', '1px'),
        borderColor: theme('colors.gray.200'),
        boxShadow: theme('boxShadow.sm'),
        padding: theme('padding.2'),
        overflow: "hidden",
        borderInlineStartWidth: theme('borderWidth.6', '6px'),
        borderInlineStartColor: theme('colors.primary.DEFAULT'),
        '.dark &': {
            backgroundColor: theme('colors.gray.800'),
            borderColor: theme('colors.gray.700'),
        },
        ...Object.keys(theme('colors')).reduce((ret, colorName) => {
            const color = theme(`colors.${colorName}.DEFAULT`);
            if (typeof color !== 'undefined') {
                ret[`&.${colorName}`] = {
                    borderInlineStartColor: color,
                    '.overview-card-title, .overview-card-icon': {
                        color: color,
                    },
                };
            }
            return ret;
        }, {}),
    },
    '.overview-card-title ': {
        fontSize: theme('fontSize.xs'),
        fontWeight: theme('fontWeight.bold'),
        color: theme('colors.primary.DEFAULT') ?? theme('colors.blue.DEFAULT'),
        textTransform: 'uppercase',
        marginBottom: theme('margin.1'),
    },
    '.overview-card-number': {
        fontSize: theme('fontSize.2xl'),
        fontWeight: theme('fontWeight.bold'),
        marginBottom: theme('margin.0'),
    },
    '.overview-card-icon': {
        color: theme('colors.primary.DEFAULT') ?? theme('colors.blue.DEFAULT'),
        width: theme('width.10'),
        height: theme('height.10'),
    },
});