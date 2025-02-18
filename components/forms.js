export const inputSizes = ({ theme }) => ({
    'xs': {
        paddingInline: theme('padding.3'),
        paddingBlock: theme('padding')['1'],
        fontSize: theme('fontSize.xs'),
    },
    'sm': {
        paddingInline: theme('padding.3'),
        paddingBlock: theme('padding')['1.5'],
        fontSize: theme('fontSize.xs'),
    },
    'lg': {
        paddingInline: theme('padding.5'),
        paddingBlock: theme('padding.2'),
        fontSize: theme('fontSize.base'),
    },
    'xl': {
        paddingInline: theme('padding.6'),
        paddingBlock: theme('padding.3'),
        fontSize: theme('fontSize.lg'),
    },
    'xxl': {
        paddingInline: theme('padding.8'),
        paddingBlock: theme('padding.4'),
        fontSize: theme('fontSize.xl'),
    },
});
export const formLabel = ({ theme }) => ({
    '.form-label': {
        display: 'block',
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.medium'),
        cursor: 'pointer',
        marginBottom: theme('margin.2'),
        color: theme('colors.gray.900'),
        '.dark &': {
            color: theme('colors.white'),
        },
        '&.success': {
            color: theme('colors.green.700'),
            '.dark &': {
                color: theme('colors.green.500'),
            },
        },
        '&.error': {
            color: theme('colors.red.700'),
            '.dark &': {
                color: theme('colors.red.500'),
            },
        },
    },
});
export const formInfo = ({ theme }) => ({
    '.form-info': {
        display: 'block',
        fontSize: theme('fontSize.xs'),
        fontWeight: theme('fontWeight.light'),
        marginBottom: theme('margin')['1.5'],
        color: theme('colors.gray.600'),
        '.dark &': {
            color: theme('colors.gray.400'),
        },
        '&.success': {
            color: theme('colors.green.700'),
            '.dark &': {
                color: theme('colors.green.500'),
            },
        },
        '&.error': {
            color: theme('colors.red.700'),
            '.dark &': {
                color: theme('colors.red.500'),
            },
        },
    },
});
export const formControl = ({ theme }) => ({
    '.form-control, .form-select': {
        display: 'block',
        width: '100%',
        borderColor: theme('colors.gray.300'),
        borderWidth: theme('borderWidth.1'),
        backgroundColor: theme('colors.gray.50'),
        color: theme('colors.gray.900'),
        borderRadius: theme('borderRadius.lg'),
        fontSize: theme('fontSize.sm'),
        padding: theme('padding')['2'],
        lineHeight: 1.5,
        appearance: 'none',
        '&:disabled': {
            opacity: '0.6',
            cursor: 'not-allowed',
        },
        '&.pill': {
            borderRadius: theme('borderRadius.full'),
        },
        '&:focus': {
            borderColor: theme('colors.primary.DEFAULT'),
            outlineWidth: '0px',
            '@apply ring-4 ring-primary/50': {},
        },
        '.dark &': {
            backgroundColor: theme('colors.gray.700'),
            borderColor: theme('colors.gray.600'),
            color: theme('colors.white'),
            '&:focus': {
                '@apply ring-primary/30': {},
            },
            '&::placeholder': {
                color: theme('colors.gray.400'),
            },
        },
        ...Object.keys(inputSizes({ theme })).reduce((ret, size) => {
            ret[`&.${size}`] = inputSizes({ theme })[size];
            return ret;
        }, {}),
        '&.success': {
            borderColor: theme('colors.green.700'),
            backgroundColor: theme('colors.green.100'),
            color: theme('colors.green.700'),
            '.dark &': {
                borderColor: theme('colors.green.500'),
                color: theme('colors.green.500'),
            },
            '@apply ring-green-300': {},
            '&:focus': {
                borderColor: theme('colors.green.700'),
                '@apply ring-green-300': {},
                '.dark &': {
                    '@apply ring-green-300': {},
                    borderColor: theme('colors.green.500'),
                },
            },
            '&::placeholder': {
                color: theme('colors.green.500'),
            },
        },
        '&.error': {
            borderColor: theme('colors.red.700'),
            backgroundColor: theme('colors.red.100'),
            color: theme('colors.red.700'),
            '.dark &': {
                borderColor: theme('colors.red.500'),
                color: theme('colors.red.500'),
            },
            '@apply ring-red-300': {},
            '&:focus': {
                borderColor: theme('colors.red.700'),
                '@apply ring-red-300': {},
                '.dark &': {
                    '@apply ring-red-300': {},
                    borderColor: theme('colors.red.500'),
                },
            },
            '&::placeholder': {
                color: theme('colors.red.500'),
            },
        },
    },
    '.form-select': {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='%2333343d' fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' clip-rule='evenodd'/%3e%3c/svg%3e")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `right ${theme('spacing.2')} center`,
        backgroundSize: '1em',
        paddingRight: theme('spacing.8'),
        '[dir="rtl"] &': {
            backgroundPosition: `left ${theme('spacing.2')} center`,
            paddingRight: theme('spacing.3'),
            paddingLeft: theme('spacing.8')
        },
        '.dark &': {
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='%23ffffff' fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' clip-rule='evenodd'/%3e%3c/svg%3e")`,
            backgroundColor: theme('colors.slate.800'),
            color: theme('colors.slate.100'),
            borderColor: theme('colors.slate.700')
        },
    },
});
export const formControlIcons = ({ theme }) => ({
    '.form-control-container': {
        position: 'relative',
    },
    '.has-start-icon': {
        paddingInlineStart: theme('padding.8'),
    },
    '.has-end-icon': {
        paddingInlineEnd: theme('padding.8'),
    },
    '.start-icon, .end-icon': {
        '@apply absolute inset-y-[1px] flex-space-1 px-2': {},
    },
    '.start-icon': {
        '@apply start-[1px] rounded-s': {},
    },
    '.end-icon': {
        '@apply end-[1px] rounded-e': {},
    },
    '.password-toggle': {
        '@apply cursor-pointer text-gray-600 dark:text-white focus:outline-none': {},
    }
});
export const formCheckRadio = ({ theme }) => ({
    '.form-check, .form-radio': {
        display: 'flex',
        alignItems: 'center',
        gap: theme('spacing.2'),
        width: '100%',
        '&:disabled, &.disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },
        'label': {
            ...formLabel({ theme })['.form-label'],
            ...{
                marginBottom: 0,
            },
        },
        'input': {
            '@apply w-4 h-4 border border-gray-300 rounded-sm bg-gray-100 focus:ring focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800': {},
        },
        '&.success': {
            'label': {
                color: theme('colors.green.600'),
                '.dark &': {
                    color: theme('colors.green.500'),
                },
            },
            'input': {
                '@apply border-green-600 dark:border-green-500 bg-green-50 ring ring-green-300': {},
                color: theme('colors.green.600'),
                'accent-color': theme('colors.green.600'),
            },
        },
        '&.error': {
            'label': {
                color: theme('colors.red.700'),
                '.dark &': {
                    color: theme('colors.red.500'),
                },
            },
            'input': {
                '@apply border-red-600 dark:border-red-500 bg-red-50 ring ring-red-300': {},
                color: theme('colors.red.600'),
                'accent-color': theme('colors.red.600'),
            },
        },
    }
});

export const formSwitch = ({ theme }) => ({
    '.form-switch': {
        display: 'inline-flex',
        alignItems: 'center',
        'input': {
            width: 0,
            height: 0,
            display: 'none',
            '&:focus + .toggle-slider': {
                outline: 'none',
                '@apply ring-4 ring-primary/30 dark:ring-primary/80': {},
            },
            '&:checked + .toggle-slider': {
                backgroundColor: theme('colors.primary.DEFAULT'),
            },
            '&:checked + .toggle-slider:before': {
                '@apply translate-x-full rtl:-translate-x-full border-white': {},
            },
        },
        '&.error': {
            '.toggle-slider': {
                '@apply ring-4 ring-red/50 dark:ring-red/30': {},
            },
            '.form-switch-label': {
                '@apply text-red-700 dark:text-red-500': {},
            },
        },
        '&.success': {
            '.toggle-slider': {
                '@apply ring-4 ring-green/50 dark:ring-green/30': {},
            },
            '.form-switch-label': {
                '@apply text-green-700 dark:text-green-500': {},
            },
        },
    },
    '.form-switch-label': {
        ...formLabel({ theme }),
        ...{
            marginBottom: 0,
        },
    },
    '.toggle-slider': {
        '@apply relative w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full me-3': {},
        '&:before': {
            content: '""',
            '@apply absolute top-[2px] start-[2px] bg-white border-gray-300 border rounded-full w-5 h-5': {},
            '@apply transition-all': {},
        },
    },
});

export const inputGroup = ({ theme }) => ({
    '.input-group': {
        display: 'inline-flex',
        position: 'relative',
        alignItems: 'center',
        '& > .form-control, .form-select': {
            borderRadius: '0',
            marginLeft: '-1px',
            height: '100%',
            '&:first-child': {
                borderTopLeftRadius: theme('borderRadius.lg'),
                borderBottomLeftRadius: theme('borderRadius.lg'),
                marginLeft: '0',
            },
            '&:last-child': {
                borderTopRightRadius: theme('borderRadius.lg'),
                borderBottomRightRadius: theme('borderRadius.lg'),
            },
        },
        ...Object.keys(inputSizes({ theme })).reduce((ret, size) => {
            ret[`&.${size} > .form-control, &.${size} > .form-select, &.${size} > .btn`] = inputSizes({ theme })[size];
            return ret;
        }, {}),
    },
});
export const formDropZone = ({ theme }) => ({
    '.form-drop-zone': {
        '@apply form-control': {},
        '@apply border-dashed border-2 border-gray-300 dark:border-gray-600': {},
        '@apply flex items-center justify-center': {},
        '@apply text-gray-400 dark:text-gray-300': {},
        '@apply rounded-lg': {},
        '@apply cursor-pointer': {},
        '@apply transition-colors duration-200': {},
        '@apply hover:bg-gray-100 dark:hover:bg-gray-800': {},
        '@apply hover:border-primary-500 dark:hover:border-primary-500': {},
    },
});
export const forms = ({ theme }) => ({
    ...formLabel({ theme }),
    ...formInfo({ theme }),
    ...formControl({ theme }),
    ...formControlIcons({ theme }),
    ...formCheckRadio({ theme }),
    ...formSwitch({ theme }),
    ...inputGroup({ theme }),
    ...formDropZone({ theme }),
});