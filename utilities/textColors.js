import _, { isObject } from "lodash";
import { FadgramTheme } from "../theme";
import { resolvedColor } from "../utils";
export const textColors = ({
    ..._.transform(FadgramTheme.colors, (out, colorValue, colorName) => {
        if (isObject(colorValue)) {
            const defaultColorShade = resolvedColor(colorValue);
            if (defaultColorShade) {
                out[`.text-${colorName}`] = {
                    color: defaultColorShade,
                };
            }
            _.forEach(colorValue, (shadeValue, shade) => {
                out[`.text-${colorName}-${shade}`] = {
                    color: shadeValue,
                };
            });
        } else {
            out[`.text-${colorName}`] = {
                color: colorValue,
            };
        }
        return
    }, {}),
});