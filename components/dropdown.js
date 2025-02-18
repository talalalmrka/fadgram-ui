export const dropdown = ({ theme }) => ({
    '.dropdown': {
        '@apply relative': {},
    },
    '.dropdown-menu': {
        '@apply absolute z-50 top-[100%] mt-2 w-48 rounded-md shadow bg-white dark:bg-gray-700 ltr:origin-top-right rtl:origin-top-left end-0': {},
        '@apply transition-transform -translate-y-5 opacity-0': {},
        '&:not(.show)': {
            '@apply collapse': {},
        },
        '&.show': {
            '@apply translate-y-0 opacity-100': {},
        },
        '&.left': {
            '@apply ltr:origin-top-left rtl:origin-top-right start-0': {},
        },
        '&.top': {
            '@apply origin-top': {},
        },

    },
    '.dropdown-link': {
        '@apply inline-flex space-x-1 rtl:space-x-reverse items-center p-2 text-sm font-medium leading-5 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 transition duration-150 ease-in-out w-full': {},
    },
});