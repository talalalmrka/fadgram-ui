import plugin from "tailwindcss";
export const codeLight = ({ theme }) => ({

    '.code-highlight': {
        color: theme('colors.black'),
        backgroundColor: theme('colors.gray.100'),
        textShadow: '0 1px white',
        fontFamily: theme('fontFamily.mono'),
        fontSize: theme('fontSize.base'),
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: theme('lineHeight.relaxed'),
        tabSize: '4',
        hyphens: 'none',
    },
    '.code-highlight pre': {
        padding: theme('spacing.4'),
        margin: `${theme('spacing.2')} 0`,
        overflow: 'auto',
    },
    '.code-highlight :not(pre) > code': {
        padding: theme('spacing.1'),
        borderRadius: theme('borderRadius.DEFAULT'),
        whiteSpace: 'normal',
    },
    '.code-highlight .token.comment, .code-highlight .token.prolog, .code-highlight .token.doctype, .code-highlight .token.cdata': {
        color: theme('colors.slate.500'),
    },
    '.code-highlight .token.punctuation': {
        color: theme('colors.gray.600'),
    },
    '.code-highlight .token.namespace': {
        opacity: '0.7',
    },
    '.code-highlight .token.property, .code-highlight .token.tag, .code-highlight .token.boolean, .code-highlight .token.number, .code-highlight .token.constant, .code-highlight .token.symbol, .code-highlight .token.deleted': {
        color: theme('colors.pink.700'),
    },
    '.code-highlight .token.selector, .code-highlight .token.attr-name, .code-highlight .token.string, .code-highlight .token.char, .code-highlight .token.builtin, .code-highlight .token.inserted': {
        color: theme('colors.green.700'),
    },
    '.code-highlight .token.operator, .code-highlight .token.entity, .code-highlight .token.url, .code-highlight .language-css .token.string, .code-highlight .style .token.string': {
        color: theme('colors.amber.700'),
        backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
    },
    '.code-highlight .token.atrule, .code-highlight .token.attr-value, .code-highlight .token.keyword': {
        color: theme('colors.blue.600'),
    },
    '.code-highlight .token.function, .code-highlight .token.class-name': {
        color: theme('colors.red.600'),
    },
    '.code-highlight .token.regex, .code-highlight .token.important, .code-highlight .token.variable': {
        color: theme('colors.orange.500'),
    },
    '.code-highlight .token.important, .code-highlight .token.bold': {
        fontWeight: 'bold',
    },
    '.code-highlight .token.italic': {
        fontStyle: 'italic',
    },
    '.code-highlight .token.entity': {
        cursor: 'help',
    },
});

export const codeDark = ({ theme }) => ({
    '.dark .code-highlight': {
        color: theme('colors.white'),
        backgroundColor: theme('colors.gray.800'),
        textShadow: '0 1px black',
    },
    '.dark .code-highlight :not(pre) > code': {
        backgroundColor: theme('colors.gray.700'),
    },
    '.dark .code-highlight .token.comment, .dark .code-highlight .token.prolog, .dark .code-highlight .token.doctype, .dark .code-highlight .token.cdata': {
        color: theme('colors.slate.400'),
    },
    '.dark .code-highlight .token.punctuation': {
        color: theme('colors.gray.400'),
    },
    '.dark .code-highlight .token.property, .dark .code-highlight .token.tag, .dark .code-highlight .token.boolean, .dark .code-highlight .token.number, .dark .code-highlight .token.constant, .dark .code-highlight .token.symbol, .dark .code-highlight .token.deleted': {
        color: theme('colors.pink.400'),
    },
    '.dark .code-highlight .token.selector, .dark .code-highlight .token.attr-name, .dark .code-highlight .token.string, .dark .code-highlight .token.char, .dark .code-highlight .token.builtin, .dark .code-highlight .token.inserted': {
        color: theme('colors.green.400'),
    },
    '.dark .code-highlight .token.operator, .dark .code-highlight .token.entity, .dark .code-highlight .token.url, .dark .code-highlight .language-css .token.string, .dark .code-highlight .style .token.string': {
        color: theme('colors.amber.400'),
        backgroundColor: 'hsla(0, 0%, 0%, 0.5)',
    },
    '.dark .code-highlight .token.atrule, .dark .code-highlight .token.attr-value, .dark .code-highlight .token.keyword': {
        color: theme('colors.blue.400'),
    },
    '.dark .code-highlight .token.function, .dark .code-highlight .token.class-name': {
        color: theme('colors.red.400'),
    },
    '.dark .code-highlight .token.regex, .dark .code-highlight .token.important, .dark .code-highlight .token.variable': {
        color: theme('colors.orange.400'),
    },
});
