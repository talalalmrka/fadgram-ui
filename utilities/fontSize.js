import _ from "lodash";
import { FadgramTheme } from "../theme.js";
export const fontSize = ({ theme }) => ({
    ..._.transform(FadgramTheme.fontSize, (out, value, name) => {
        out[`.text-${name}`] = {
            fontSize: value,
        };
        return out;
    }, {}),
});