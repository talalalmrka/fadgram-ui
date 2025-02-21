import _ from "lodash";
import { FadgramTheme } from "../theme";
import { resolvedColor, resolvedColorOn } from "../utils";
export const backgroundColors = ({ theme }) => ({
    ..._.transform(FadgramTheme.colors, (out, colorValue, colorName) => {
        if (_.isObject(colorValue)) {
            const defaultColorShade = resolvedColor(colorValue);
            if (defaultColorShade) {
                out[`.bg-${colorName}`] = {
                    backgroundColor: defaultColorShade,
                };
            }
            _.forEach(colorValue, (shadeValue, shade) => {
                out[`.bg-${colorName}-${shade}`] = {
                    backgroundColor: shadeValue,
                };
            });
        } else {
            out[`.bg-${colorName}`] = {
                backgroundColor: colorValue,
            };
        }
        const surfaceColor = resolvedColorOn(colorValue);
        if (surfaceColor) {
            out[`.text-bg-${colorName}`] = {
                color: surfaceColor,
            }
        }
        return out;
    }, {}),
});