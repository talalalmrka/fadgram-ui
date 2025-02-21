export const tables = ({ theme }) => ({
    '.table': {
        '@apply w-full text-sm text-gray-500 dark:text-gray-400 divide-y dark:divide-gray-700': {},
        'thead, tfoot': {
            '@apply text-gray-700 uppercase bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700': {},
            'th': {
                '@apply text-nowrap': {},
            },
        },
        'thead': {
            '@apply border-t': {},
        },
        'tfoot': {
            '@apply border-b': {},
        },
        'tbody': {
            '@apply divide-y dark:divide-gray-700': {},
            'tr': {
                '@apply bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700': {},
            },
        },
        'th, td': {
            '@apply p-2.5 text-justify': {},
        },
        '&.table-striped': {
            'tbody tr:nth-of-type(even)': {
                '@apply bg-gray-50 dark:bg-gray-800': {},
            }
        },
        '&.table-xxs': {
            '@apply text-xxs': {},
            'th, td': {
                '@apply p-1': {},
            },
        },
        '&.table-xs': {
            '@apply text-xs': {},
            'th, td': {
                '@apply p-1.5': {},
            },
        },
        '&.table-sm': {
            '@apply text-sm': {},
            'th, td': {
                '@apply p-2': {},
            },
        },
        '&table-.md': {
            '@apply text-md': {},
            'th, td': {
                '@apply p-3': {},
            },
        },
        '&.table-lg': {
            '@apply text-lg': {},
            'th, td': {
                '@apply p-3.5': {},
            },
        },
        '&.table-xl': {
            '@apply text-xl': {},
            'th, td': {
                '@apply p-4': {},
            },
        },
        '&.table-xxl': {
            '@apply text-2xl': {},
            'th, td': {
                '@apply p-5': {},
            },
        },
    },
});