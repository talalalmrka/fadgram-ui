import { color } from "jodit/types/plugins/color/color";

export const alert = ({ theme }) => ({
    '.alert': {
        '@apply flex-space-2 p-3 mb-3 text-sm rounded-lg': {},
        '@apply text-primary-800 bg-primary-50 dark:bg-primary-800 dark:text-primary-400': {},
        '&.bordered': {
            '@apply border border-primary-300 dark:border-primary-700': {},
        },
        '&.xxs': {
            fontSize: theme('fontSize.xxs', '0.5rem'),
            padding: theme('padding.1.5', '0.375rem'),
            //'@apply p-1.5 text-xxs': {},
        },
        '&.xs': {
            fontSize: theme('fontSize.xxs', '0.5rem'),
            padding: theme('padding.2', '0.5rem'),
            //'@apply p-2 text-xxs': {},
        },
        '&.sm': {
            fontSize: theme('fontSize.sm', '0.75rem'),
            padding: theme('padding.2.5', '0.625rem'),
            //'@apply p-2.5 text-xs': {},
        },
        '&.lg': {
            '@apply p-3.5 text-lg': {},
        },
        '&.xl': {
            '@apply p-4 text-xl': {},
        },
        '&.xxl': {
            '@apply p-5 text-2xl': {},
        },
        '&.alert-success, &.alert-green': {
            color: theme('colors.green.800'),
            backgroundColor: theme('colors.green.50'),
            dark: {
                color: theme('colors.green.400'),
            },
            '&.bordered': {
                borderColor: theme('colors.green.300'),
            },
        },
        '&.alert-info, &.alert-cyan': {
            color: theme('colors.cyan.800'),
            backgroundColor: theme('colors.cyan.50'),
            dark: {
                color: theme('colors.cyan.400'),
            },
            '&.bordered': {
                borderColor: theme('colors.cyan.300'),
            },
        },
        '&.alert-warning, &.alert-orange': {
            color: theme('colors.orange.800'),
            backgroundColor: theme('colors.orange.50'),
            dark: {
                color: theme('colors.orange.400'),
            },
            '&.bordered': {
                borderColor: theme('colors.orange.300'),
            },
        },
        '&.alert-danger, &.alert-error, &.alert-red': {
            color: theme('colors.red.800'),
            backgroundColor: theme('colors.red.50'),
            dark: {
                color: theme('colors.red.400'),
            },
            '&.bordered': {
                borderColor: theme('colors.red.300'),
            },
        },
    },
});