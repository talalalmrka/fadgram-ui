import { buttons } from './components/buttons.js';
import { buttonGroup } from './components/button-group.js';
import { dropdown } from './components/dropdown.js';
import { forms } from './components/forms.js';
import { card } from './components/card.js';
import { overviewCard } from './components/overview-card.js';
import { badge } from './components/badge.js';
import { navbar } from './components/navbar.js';
//import { formControls } from './components/form-controls.js';
//import { navbar } from './components/navbar.js';
//import { nav } from './components/nav.js';
//import { progress } from './components/progress.js';

export const FadgramUI = ({ addComponents, theme, e }) => {
    addComponents({
        ...buttons({ theme }),
        ...dropdown({ theme }),
        ...buttonGroup({ theme }),
        ...forms({ theme }),
        ...card({ theme }),
        ...overviewCard({ theme }),
        ...badge({ theme }),
        ...navbar({ theme }),
        //...formControls({ theme }),
        //...navbar({ theme }),
        //...nav({ theme }),
        //...progress({ theme })
    });
};