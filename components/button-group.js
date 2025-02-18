import { buttonSizes } from "./buttons";
export const buttonGroup = ({ theme }) => ({
    '.btn-group': {
        display: 'inline-flex',
        alignItems: 'center',
        '& > .btn': {
            borderRadius: '0',
            marginLeft: '-1px',
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
        ...Object.keys(buttonSizes({ theme })).reduce((ret, size) => {
            ret[`&.${size} > .btn`] = buttonSizes({ theme })[size];
            return ret;
        }, {}),
    },
});