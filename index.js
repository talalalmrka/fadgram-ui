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
export const FadgramUI = ({ addUtilities, addComponents, theme, e }) => {
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
    });
};