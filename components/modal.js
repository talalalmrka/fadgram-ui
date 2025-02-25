export const modal = ({
    '.modal': {
        '@apply fixed hidden z-50 inset-0': {},
        'pointer-events': 'none',
        '&.fade': {
            '@apply opacity-0 transition-opacity duration-150 ease-linear': {},
        },
        '&.show': {
            '@apply block opacity-100': {},
        },
        '&.lg': {
            '.modal-dialog': {
                '@apply max-w-screen-lg': {},
            },
        },
    },
    '.modal-dialog': {
        'max-width': 'calc(100% - 1.75rem * 2)',
        '@apply relative mx-auto md:max-w-screen-md flex items-center overflow-hidden': {},
        'height': 'calc(100% - 1.75rem * 2)',
        'margin-top': '1.75rem',
        'margin-bottom': '1.75rem',
        'pointer-events': 'none',
    },
    '.modal-content': {
        '@apply relative flex flex-col w-full max-h-full border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-700': {},
        'pointer-events': 'auto',
        'background-clip': 'padding-box',
        'outline': '0',
    },
    '.modal-header': {
        '@apply flex items-center justify-between px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-white border-b border-gray-200 dark:border-gray-700 rounded-t-lg': {},
        '.btn-close': {
            '@apply text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white': {},
        },
    },
    '.modal-title': {
        '@apply font-semibold mb-0': {},
    },
    '.modal-body': {
        '@apply relative p-3 text-gray-700 dark:text-gray-300 overflow-y-auto': {},
        'flex': '1 1 auto',
    },
    '.modal-footer': {
        '@apply flex px-3 py-1.5 items-center space-x-2 rtl:space-x-reverse bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-white border-t border-gray-200 dark:border-gray-700 rounded-b-lg': {},
    },
    '.modal-backdrop': {
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'opacity': '0.5',
        'background-color': '#000000',
        'z-index': '40',
        'display': 'none',
        '@apply transition-opacity': {},
        //'@apply fixed inset-0 z-40 bg-dark bg-opacity-50 hidden': {},
        '&.show': {
            '@apply block': {},
            /*'display': 'block',
            'opacity': '1',
            '@apply block': {},*/
        },
    },
});