import _ from 'lodash';
import { fontSize } from './utilities/fontSize.js';
import { textColors } from './utilities/textColors.js';
import { backgroundColors } from './utilities/backgroundColors.js';
import { flex } from './components/flex.js';
import { buttons } from './components/buttons.js';
import { buttonGroup } from './components/button-group.js';
import { dropdown } from './components/dropdown.js';
import { forms } from './components/forms.js';
import { card } from './components/card.js';
import { overviewCard } from './components/overview-card.js';
import { badge } from './components/badge.js';
import { navbar } from './components/navbar.js';
import { progress } from './components/progress.js';
import { typography } from './components/typography.js';
import { drawer } from './components/drawer.js';
import { alert } from './components/alert.js';
import { codeLight, codeDark } from './components/code.js';
import { tables } from './components/tables.js';
import { boxShadow } from './utilities/boxShadow.js';
import { tooltip } from './components/tooltip.js';
import { FadgramTheme } from './theme.js';
import { modal } from './components/modal.js';
import plugin from 'tailwindcss';
export const FadgramUII = plugin(function ({ addUtilities, addComponents, theme, config }) {
    addUtilities({
        ...fontSize,
        ...textColors,
        ...backgroundColors,
        ...boxShadow,
    });
    addComponents({
        ...typography({ theme }),
        ...flex({ theme }),
        ...buttons({ theme }),
        ...dropdown,
        ...buttonGroup({ theme }),
        ...forms({ theme }),
        ...card({ theme }),
        ...overviewCard({ theme }),
        ...badge({ theme }),
        ...navbar({ theme }),
        ...progress({ theme }),
        ...drawer({ theme }),
        ...alert({ theme }),
        ...tables({ theme }),
        ...tooltip({ theme }),
        ...modal,
    });
});

export const FadgramUI = ({ addUtilities, addComponents, theme, config }) => {
    addUtilities({
        ...fontSize,
        ...textColors,
        ...backgroundColors,
        ...boxShadow,
    });
    //console.log(modal);
    addUtilities(codeLight({ theme }));
    addUtilities(codeDark({ theme }), { variants: ['dark'] });
    addComponents({
        ...typography({ theme }),
        ...flex({ theme }),
        ...buttons({ theme }),
        ...dropdown,
        ...buttonGroup({ theme }),
        ...forms({ theme }),
        ...card({ theme }),
        ...overviewCard({ theme }),
        ...badge({ theme }),
        ...navbar({ theme }),
        ...progress({ theme }),
        ...drawer({ theme }),
        ...alert({ theme }),
        ...tables({ theme }),
        ...tooltip({ theme }),
        ...modal,
    });
};