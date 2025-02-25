import _ from "lodash";
export const dropdownPositions = ({
    'top': {
        '@apply bottom-full top-auto mt-auto mb-3': {},
    },
    'start': {
        '@apply start-0': {},
    },
    'center': {
        '@apply start-1/2 -translate-x-1/2': {},
    },
    'end': {
        '@apply end-0': {},
    },
});
export const dropdown = ({
    '.dropdown': {
        '@apply relative inline-block': {},
    },
    '.dropdown-menu': {
        '@apply absolute z-20 min-w-[12rem] rounded-lg bg-white p-2 shadow dark:bg-gray-800': {},
        '@apply mt-3': {},
        '&:not(.show)': {
            '@apply collapse': {},
        },
        ..._.reduce(dropdownPositions, function (result, value, key) {
            result[`&.dropdown-${key}`] = value;
            return result;
        }, {}),
    },
    '.dropdown-link': {
        '@apply inline-flex space-x-1 rtl:space-x-reverse items-center p-2 text-sm font-medium leading-5 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 transition duration-150 ease-in-out w-full border-red': {},
    },
});