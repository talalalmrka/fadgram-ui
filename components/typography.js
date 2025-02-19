export const typography = ({ theme }) => ({
    'h1': {
        '@apply text-5xl mb-3': {},
    },
    'h2': {
        '@apply text-4xl mb-3': {},
    },
    'h3': {
        '@apply text-3xl mb-3': {},
    },
    'h4': {
        '@apply text-2xl mb-3': {},
    },
    'h5': {
        '@apply text-xl mb-3': {},
    },
    'h6': {
        '@apply text-lg mb-3': {},
    },
    'p': {
        '@apply mb-2': {},
    },
    '.text-muted': {
        '@apply text-gray-500 dark:text-gray-400': {},
    },
});

/*import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addBase, theme }) {
    const base = {
        'h1': {
            '@apply text-5xl mb-3': {},
        },
        'h2': {
            '@apply text-4xl mb-3': {},
        },
        'h3': {
            '@apply text-3xl mb-3': {},
        },
        'h4': {
            '@apply text-2xl mb-3': {},
        },
        'h5': {
            '@apply text-xl mb-3': {},
        },
        'h6': {
            '@apply text-lg mb-3': {},
        },
        'p': {
            '@apply mb-2': {},
        },
        '.text-muted': {
            '@apply text-gray-500 dark:text-gray-400': {},
        },
    };
    addBase(base);
});*/