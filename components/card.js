export const card = ({ theme }) => ({
    '.card': {
        backgroundColor: theme('colors.white'),
        borderRadius: theme('borderRadius.lg'),
        borderWidth: theme('borderWidth.1', '1px'),
        borderColor: theme('colors.gray.200'),
        boxShadow: theme('boxShadow.sm'),
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        '.dark &': {
            backgroundColor: theme('colors.gray.800'),
            borderColor: theme('colors.gray.700'),
        },
    },
    '.card-header': {
        flex: "none",
        paddingInline: theme('padding.3'),
        paddingBlock: theme('padding.1'),
        backgroundColor: theme('colors.gray.100'),
        color: theme('colors.gray.600'),
        borderBottomWidth: theme('borderWidth.1', '1px'),
        borderBottomColor: theme('colors.gray.200'),
        '.dark &': {
            color: theme('colors.white'),
            backgroundColor: theme('colors.gray.800'),
            borderBottomColor: theme('colors.gray.700'),
        },
    },
    '.card-title': {
        marginBottom: 0,
    },
    '.card-body': {
        flexGrow: 1,
        padding: theme('padding.2'),
        color: theme('colors.gray.700'),
        '.dark &': {
            color: theme('colors.gray.300'),
        }
    },
    '.card-footer': {
        flex: "none",
        paddingInline: theme('padding.3'),
        paddingBlock: theme('padding.1'),
        backgroundColor: theme('colors.gray.100'),
        color: theme('colors.gray.600'),
        borderTopWidth: theme('borderWidth.1', '1px'),
        borderTopColor: theme('colors.gray.200'),
        '.dark &': {
            color: theme('colors.white'),
            backgroundColor: theme('colors.gray.800'),
            borderTopColor: theme('colors.gray.700'),
        },
    },
});