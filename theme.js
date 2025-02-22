import defaultTheme from 'tailwindcss/defaultTheme.js';
import colors from 'tailwindcss/colors.js';
export const fgThemeColors = (customColors = {}) => {
    const defaultColors = {
        primary: colors.violet,
        secondary: colors.slate,
        light: {
            50: "#ffffff",
            100: "#fefefe",
            200: "#fdfdfd",
            300: "#fcfcfc",
            400: "#fbfbfb",
            500: "#f9f9f9",
            600: "#f7f7f7",
            700: "#f5f5f5",
            800: "#f3f3f3",
            900: "#f1f1f1",
            950: "#f0f0f0",
        },
        dark: {
            50: "#E3E4E8",
            100: "#C6C7D1",
            200: "#8F91A3",
            300: "#575A74",
            400: "#404356",
            500: "#292D38",
            600: "#252933",
            700: "#1A1D25",
            800: "#131418",
            900: "#0D0E10",
            950: "#020617",
        },
        white: colors.white,
        black: colors.black,
        red: colors.red,
        blue: colors.blue,
        green: colors.green,
        gray: colors.gray,
        slate: colors.slate,
        orange: colors.orange,
        yellow: colors.yellow,
        teal: colors.teal,
        cyan: colors.cyan,
        pink: colors.pink,
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        sky: colors.sky,
        lime: colors.lime,
        emerald: colors.emerald,
        amber: colors.amber,
        neutral: colors.neutral,
        zinc: colors.zinc,
    };
    const allColors = {
        ...defaultColors,
        ...customColors,
    };
    return Object.keys(allColors).reduce((acc, colorName) => {
        if (typeof allColors[colorName] === "object") {
            acc[colorName] = {
                ...allColors[colorName],
                DEFAULT: allColors[colorName][600], // Add DEFAULT key
            };
        } else {
            acc[colorName] = allColors[colorName]; // Keep non-object colors as-is
        }
        return acc;
    }, {});
};
export const FadgramTheme = {
    fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins, sans-serif'],
    },
    colors: fgThemeColors(),
    minHeight: {
        '10vh': '10vh',
        '25vh': '25vh',
        '50vh': '50vh',
        '75vh': '75vh',
        '100vh': '100vh',
        '1/10': '10%',
        '2/10': '20%',
        'full': '100%',
    },
    borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
    },
    boxShadow: {
        DEFAULT: '0 0 1rem 0 rgba(33, 37, 41, .15)',
        'sm': '0 0.125rem 0.5rem 0 rgba(33, 37, 41, .15)',
        'xs': '0 0.0625rem 0.25rem 0 rgba(33, 37, 41, .2)',
    },
    container: {
        center: true,
        padding: '1rem',
    },
    listStyleType: {
        circle: 'circle',
        square: 'square',
        'upper-roman': 'upper-roman',
        'lower-alpha': 'lower-alpha',
    },
    fontSize: {
        'xxs': '0.5rem',
        'xs': '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        'md': '.955rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
    },
    transitionDuration: {
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '2000': '2000ms',
    },
    zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
        '1000': '1000',
        '1050': '1050',
        '1055': '1055',
        'full': '999999'
    },
    width: {
        'content': 'fit-content'
    },
    borderRadius: {
        DEFAULT: '0.25rem',
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
        'b-full': '9999px',
    },
    padding: {
        '2.5': '0.625rem',
    },
};
