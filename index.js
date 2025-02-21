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
import { code } from './components/code.js';
import { tables } from './components/tables.js';
export const FadgramUI = ({ addUtilities, addComponents, theme, config }) => {
    addUtilities({
        ...fontSize({ theme }),
        ...textColors({ theme }),
        ...backgroundColors({ theme }),
    });
    addComponents({
        ...typography({ theme }),
        ...flex({ theme }),
        ...buttons({ theme }),
        ...dropdown({ theme }),
        ...buttonGroup({ theme }),
        ...forms({ theme }),
        ...card({ theme }),
        ...overviewCard({ theme }),
        ...badge({ theme }),
        ...navbar({ theme }),
        ...progress({ theme }),
        ...drawer({ theme }),
        ...alert({ theme }),
        ...code({ theme }),
        ...tables({ theme }),
    });
};