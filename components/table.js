export const table = ({ theme }) => ({

    '.table': {
        '@apply w-full align-middle': {},
        'border-spacing': '0 2px',
        'border-collapse': 'separate',

        // Default sizes
        'th, td': {
            '@apply px-4 py-3 text-left': {}
        },

        // Sizes variants
        '&.table-xs': {
            'th, td': {
                '@apply px-2 py-1 text-sm': {}
            }
        },
        '&.table-sm': {
            'th, td': {
                '@apply px-3 py-2 text-sm': {}
            }
        },
        '&.table-lg': {
            'th, td': {
                '@apply px-5 py-4 text-lg': {}
            }
        },
        '&.table-xl': {
            'th, td': {
                '@apply px-6 py-5 text-xl': {}
            }
        },

        // Striped variant
        '&.table-striped': {
            'tbody tr:nth-of-type(even)': {
                backgroundColor: theme('colors.gray.50')
            }
        },

        // Hover variant
        '&.table-hover': {
            'tbody tr': {
                '@apply transition-colors duration-150': {},
                '&:hover': {
                    backgroundColor: theme('colors.gray.100')
                }
            }
        },
        '&.table-collapse': {
            'border-collapse': 'collapse',
        },
        // Creative header styles
        '&.table-thead-primary thead': {
            'th': {
                '@apply bg-gradient-to-r from-blue-500 to-blue-600 text-white border-b-0': {},
                '&:first-child': {
                    '@apply rounded-l-lg': {}
                },
                '&:last-child': {
                    '@apply rounded-r-lg': {}
                }
            }
        },

        // Creative footer styles
        '&.table-tfoot-secondary tfoot': {
            'td': {
                '@apply bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold': {},
                '&:first-child': {
                    '@apply rounded-bl-lg': {}
                },
                '&:last-child': {
                    '@apply rounded-br-lg': {}
                }
            }
        },

        // Bordered variant
        '&.table-bordered': {
            'thead th': {
                '@apply border-b-2 border-gray-200': {}
            },
            'tfoot td': {
                '@apply border-t-2 border-gray-200': {}
            },
            'th, td': {
                '@apply border border-gray-100': {}
            }
        },

        // Shadow variant
        '&.table-shadow': {
            '@apply shadow-lg': {},
            'thead th': {
                '@apply shadow-sm': {}
            }
        },

        // Rounded container
        '&.table-container': {
            '@apply rounded-lg overflow-hidden shadow-sm': {}
        }
    }
}
);