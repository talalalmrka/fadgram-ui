export const tooltip = ({ theme }) => {
    const tooltipBg = theme('colors.gray.900', '#111827');
    const tooltipText = theme('colors.white', '#fff');
    return {
        '.tooltip': {
            position: 'fixed',
            zIndex: '50',
            padding: theme('spacing.2'),
            paddingLeft: theme('spacing.3'),
            paddingRight: theme('spacing.3'),
            fontSize: theme('fontSize.sm'),
            fontWeight: theme('fontWeight.medium'),
            color: tooltipText,
            backgroundColor: tooltipBg,
            borderRadius: theme('borderRadius.lg'),
            boxShadow: theme('boxShadow.sm'),
            transitionProperty: 'opacity',
            transitionDuration: theme('transitionDuration.300'),
            opacity: '0',
            pointerEvents: 'none',
            maxWidth: '18rem',
            textAlign: 'center',
            '&::after': {
                content: '""',
                position: 'absolute',
                borderWidth: '5px',
                borderStyle: 'solid',
            },
            '&.show': {
                opacity: '1',
            },
            '&.tooltip-top': {
                '&::after': {
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderColor: `${tooltipBg} transparent transparent transparent`,
                }
            },
            '&.tooltip-bottom': {
                '&::after': {
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderColor: `transparent transparent ${tooltipBg} transparent`,
                }
            },
            '&.tooltip-start': {
                '&::after': {
                    insetInlineStart: '100%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderColor: `transparent transparent transparent ${tooltipBg}`,
                },
                '[dir="rtl"] &::after': {
                    borderColor: `transparent ${tooltipBg} transparent transparent`,
                }
            },
            '&.tooltip-end': {
                '&::after': {
                    insetInlineEnd: '100%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderColor: `transparent ${tooltipBg} transparent transparent`,
                },
                '[dir="rtl"] &::after': {
                    borderColor: `transparent transparent transparent ${tooltipBg}`,
                }
            }
        },
    };
};