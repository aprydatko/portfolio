export interface FontFamily {
    primary: string;
    secondary: string;
}
export interface FontSize {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export interface FontWeight {
    text: number;
    link: number;
    subHeading: number;
    bold: number;
    heading: number;
}

export interface LineHeights {
    body: number;
    heading: number;
    subHeading: number;
    code: number;
}
export interface ColorBody {
    primary: string;
    secondary: string;
    tertiary: string;
}
export interface ColorMain {
    white: string;
    black: string;
    blue: string;
    orange: string;
    sky: string;
    violet: string;
    bronze: string;
}
export interface ColorFont {
    primary: string;
    secondary: string;
    tertiary: string;
}

export interface ColorFooter {
    primary: string;
    secondary: string;
    tertiary: string;
}

export interface ColorIcon {
    primary: string;
}

export interface ColorLink {
    primary: string;
    secondary: string;
}

export interface Colors {
    body: ColorBody;
    footer: ColorFooter;
    main: ColorMain;
    font: ColorFont;
    icon: ColorIcon;
    link: ColorLink;
}
