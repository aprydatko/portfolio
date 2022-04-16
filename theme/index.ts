import {
    Colors,
    FontFamily,
    FontWeights,
    LineHeights,
    FontSize,
} from "./interfaces";

import { dark } from "./themes/dark";
import { light } from "./themes/light";
import { base } from "./themes/base";

const defaultTheme = { ...base };

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };

declare module "styled-components" {
    export interface DefaultTheme {
        fontFamily: FontFamily;
        fontSize: FontSize;
        fontWeight: FontWeights;
        lineHeight: LineHeights;
        color: Colors;
    }
}
