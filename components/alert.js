export const alert = ({ theme }) => ({
    '.alert': {
        '@apply flex-space-2 p-3 mb-3 text-sm rounded-lg': {},
        '@apply text-primary-800 bg-primary-50 dark:bg-primary-800 dark:text-primary-400': {},
        '&.bordered': {
            '@apply border border-cyan-300 dark:border-cyan-700': {},
        },
        '&.xxs': {
            '@apply p-1.5 text-xxs': {},
        },
        '&.xs': {
            '@apply p-2 text-xxs': {},
        },
        '&.sm': {
            '@apply p-2.5 text-xs': {},
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
    },
    '.alert-success, .alert-green': {
        '@apply text-green-800 bg-green-50 dark:text-green-400': {},
        '&.bordered': {
            '@apply border-green-300': {},
        },
    },
    '.alert-info, .alert-cyan': {
        '@apply text-cyan-800 bg-cyan-50 dark:text-cyan-400': {},
        '&.bordered': {
            '@apply border-green-300': {},
        },
    },
    '.alert-warning, .alert-orange': {
        '@apply text-orange-800 bg-orange-50 dark:text-orange-400': {},
        '&.bordered': {
            '@apply border-orange-300': {},
        },
    },
    '.alert-danger, .alert-error, .alert-red': {
        '@apply text-red-800 bg-red-50 dark:text-red-400': {},
        '&.bordered': {
            '@apply border-red-300': {},
        },
    },
    '.alert-blue': {
        '@apply text-blue-800 bg-blue-50 dark:text-blue-400': {},
        '&.bordered': {
            '@apply border-blue-300': {},
        },
    },
});