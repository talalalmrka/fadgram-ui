import _ from "lodash";
import { FadgramTheme } from "../theme";
export const boxShadow = ({
    ..._.transform(FadgramTheme().boxShadow, (out, value, name) => {
        const selector = name === 'DEFAULT' ? '.shadow' : `.shadow-${name}`;
        out[selector] = {
            'box-shadow': value,
        };
        return out;
    }, {}),
});