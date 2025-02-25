import _ from "lodash";
import { FadgramTheme } from "../theme";
import { resolvedColor, resolvedColorOn } from "../utils";
export const backgroundColors = ({
    //background colors
    ..._.transform(FadgramTheme().colors, (out, colorValue, colorName) => {
        if (_.isObject(colorValue)) {
            const defaultColorShade = resolvedColor(colorValue);
            if (defaultColorShade) {
                out[`.bg-${colorName}`] = {
                    backgroundColor: defaultColorShade,
                };
            }
            _.forEach(colorValue, (shadeValue, shade) => {
                const selector = shade === 'DEFAULT' ? `.bg-${colorName}` : `.bg-${colorName}-${shade}`;
                out[selector] = {
                    backgroundColor: shadeValue,
                };
            });
        } else {
            out[`.bg-${colorName}`] = {
                backgroundColor: colorValue,
            };
        }
        const surfaceColor = resolvedColorOn(colorValue);
        return out;
    }, {}),

    //surface color
    ..._.transform(FadgramTheme().colors, (out, colorValue, colorName) => {
        const surfaceColor = resolvedColorOn(colorValue);
        if (surfaceColor) {
            out[`.text-bg-${colorName}`] = {
                color: surfaceColor,
            }
        }
        return out;
    }, {}),

    //gradient
    ..._.transform(FadgramTheme().colors, (out, colorValue, colorName) => {
        if (_.isObject(colorValue)) {
            out[`.bg-${colorName}.bg-gradient`] = {
                backgroundImage: `linear-gradient(to top left, ${_.get(colorValue, '400')}, ${_.get(colorValue, '600')}, ${_.get(colorValue, '700')})`,
            }
        }
        return out;
    }, {}),
});