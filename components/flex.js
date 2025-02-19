export const flex = ({ theme }) => ({
    ...Array.from({ length: 11 }, (_, i) => ({
        [`.flex-space-${i}`]: {
            '@apply flex items-center': {},
            [`@apply space-x-${i} rtl:space-x-reverse`]: {}
        }
    })).reduce((acc, cur) => ({ ...acc, ...cur }), {})
});