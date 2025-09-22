import { IFontStyles, IPalette, ISemanticColors, ITheme } from 'office-ui-fabric-react/lib/Styling';

export declare interface IReadonlyTheme extends ITheme {
    /**
     * {@inheritdoc ITheme.palette}
     */
    readonly palette: Readonly<IPalette>;
    /**
     * {@inheritdoc ITheme.fonts}
     */
    readonly fonts: Readonly<IFontStyles>;
    /**
     * {@inheritdoc ITheme.semanticColors}
     */
    readonly semanticColors: Readonly<ISemanticColors>;
}

// https://learn.microsoft.com/en-us/sharepoint/dev/spfx/use-theme-colors-in-your-customizations
// https://learn.microsoft.com/en-us/sharepoint/dev/design/themes-colors
export const DefaultTheme: IReadonlyTheme = {
    disableGlobalClassNames: false,
    isInverted: false,
    palette: {
        // themeDark: '#7c1d21', // Learn link
        themeDark: '#4f5b5f', // SharePoint Online
        // themeDarkAlt: '#932227', // Learn link
        themeDarkAlt: '#5d6c70', // SharePoint Online
        // themeDarker: '#5b1519', // Learn link
        themeDarker: '#3a4346', // SharePoint Online
        // themeLight: '#e3afb2', // Learn link
        themeLight: '#cdd5d8', // SharePoint Online
        // themeLighter: '#f0d3d4', // Learn link
        themeLighter: '#e4e9ea', // SharePoint Online
        // themeLighterAlt: '#fbf4f4', // Learn link
        themeLighterAlt: '#f8f9fa', // SharePoint Online
        // themePrimary: '#a4262c', // Learn link
        themePrimary: '#69797e', // SharePoint Online
        // themeSecondary: '#ae383e', // Learn link
        themeSecondary: '#78888d', // SharePoint Online
        // themeTertiary: '#c86c70', // Learn link
        themeTertiary: '#9fadb1', // SharePoint Online
        // neutralDark: '#212121', // Learn link
        neutralDark: '#141414', // SharePoint Online
        // neutralLight: '#eaeaea', // Learn link
        neutralLight: '#ebebeb', // SharePoint Online
        // neutralLighter: '#f4f4f4', // Learn link
        neutralLighter: '#f0f0f0', // SharePoint Online
        // neutralLighterAlt: '#f8f8f8', // Learn link
        neutralLighterAlt: '#fafafa', // SharePoint Online
        // neutralPrimary: '#333333', // Learn link
        neutralPrimary: '#242424', // SharePoint Online
        // neutralPrimaryAlt: '#3c3c3c', // Learn link
        neutralPrimaryAlt: '#424242', // SharePoint Online
        // neutralSecondary: '#666666', // Learn link
        neutralSecondary: '#616161', // SharePoint Online
        // neutralTertiary: '#a6a6a6', // Learn link
        neutralTertiary: '#9e9e9e', // SharePoint Online
        // neutralTertiaryAlt: '#c8c8c8', // Learn link
        neutralTertiaryAlt: '#c7c7c7', // SharePoint Online
        // neutralQuaternary: '#d0d0d0', // Learn link
        neutralQuaternary: '#d1d1d1', // SharePoint Online
        black: '#000000', // Learn link
        white: '#ffffff', // Learn link & SharePoint Online
        // neutralQuaternaryAlt: '#dadada', // Learn link
        neutralQuaternaryAlt: '#e0e0e0', // SharePoint Online
        // accent: '#ca5010', // Learn link
        accent: '#69797e', // SharePoint Online
        whiteTranslucent40: 'rgba(255,255,255,.4)', // Learn link & SharePoint Online
        blackTranslucent40: 'rgba(0,0,0,.4)', // Learn link & SharePoint Online
        red: '#e81123', // SharePoint Online
        orange: '#d83b01', // SharePoint Online
        green: '#107c10', // SharePoint Online
        teal: '#008272', // SharePoint Online
        blue: '#0078d4', // Learn link & SharePoint Online
        blueDark: '#002050', // SharePoint Online
        blueMid: '#00188f',
        blueLight: '#00bcf2',
        greenDark: '#004b1c', // SharePoint Online
        greenLight: '#bad80a', // SharePoint Online
        magenta: '#b4009e', // SharePoint Online
        magentaDark: '#5c005c', // SharePoint Online
        magentaLight: '#e3008c', // SharePoint Online
        orangeLight: '#ea4300', // SharePoint Online
        orangeLighter: '#ff8c00', // SharePoint Online
        purple: '#5c2d91', // SharePoint Online
        purpleDark: '#32145a', // SharePoint Online
        purpleLight: '#b4a0ff', // SharePoint Online
        redDark: '#a4262c', // SharePoint Online
        tealDark: '#004b50', // SharePoint Online
        tealLight: '#00b294', // SharePoint Online
        yellow: '#ffb900', // SharePoint Online
        yellowLight: '#fff100' // SharePoint Online
    },
    fonts: {
        tiny: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '10px',
            fontWeight: 400
        },
        xSmall: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '10px',
            fontWeight: 400
        },
        small: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '12px',
            fontWeight: 400
        },
        smallPlus: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '12px',
            fontWeight: 400
        },
        medium: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '14px',
            fontWeight: 400
        },
        mediumPlus: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '16px',
            fontWeight: 400
        },
        large: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '18px',
            fontWeight: 400
        },
        xLarge: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '20px',
            fontWeight: 600
        },
        xxLarge: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '28px',
            fontWeight: 600
        },
        superLarge: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '42px',
            fontWeight: 600
        },
        mega: {
            fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '68px',
            fontWeight: 600
        }
    },
    semanticColors: {
        accentButtonBackground: '#69797e',
        accentButtonText: '#ffffff',
        actionLink: '#323130',
        actionLinkHovered: '#201f1e',
        blockingBackground: '#FDE7E9',
        bodyBackground: '#ffffff',
        bodyDivider: '#edebe9',
        bodyFrameBackground: '#ffffff',
        bodyFrameDivider: '#edebe9',
        bodyStandoutBackground: '#faf9f8',
        bodySubtext: '#605e5c',
        bodyText: '#323130',
        bodyTextChecked: '#000000',
        buttonBackground: '#ffffff',
        buttonBackgroundChecked: '#c8c6c4',
        buttonBackgroundCheckedHovered: '#edebe9',
        buttonBackgroundDisabled: '#f3f2f1',
        buttonBackgroundHovered: '#f3f2f1',
        buttonBackgroundPressed: '#edebe9',
        buttonBorder: '#8a8886',
        buttonBorderDisabled: '#f3f2f1',
        buttonText: '#323130',
        buttonTextChecked: '#201f1e',
        buttonTextCheckedHovered: '#000000',
        buttonTextDisabled: '#a19f9d',
        buttonTextHovered: '#201f1e',
        buttonTextPressed: '#201f1e',
        defaultStateBackground: '#faf9f8',
        disabledBackground: '#f3f2f1',
        disabledBodySubtext: '#c8c6c4',
        disabledBodyText: '#a19f9d',
        disabledSubtext: '#d2d0ce',
        disabledText: '#a19f9d',
        errorBackground: '#FDE7E9',
        errorText: '#a4262c',
        focusBorder: '#605e5c',
        inputBackground: '#ffffff',
        inputBackgroundChecked: '#69797e',
        inputBackgroundCheckedHovered: '#4f5b5f',
        inputBorder: '#605e5c',
        inputBorderHovered: '#323130',
        inputFocusBorderAlt: '#69797e',
        inputForegroundChecked: '#ffffff',
        inputPlaceholderText: '#605e5c',
        inputText: '#323130',
        inputTextHovered: '#201f1e',
        link: '#69797e',
        linkHovered: '#3a4346',
        listBackground: '#ffffff',
        listHeaderBackgroundHovered: '#f3f2f1',
        listHeaderBackgroundPressed: '#edebe9',
        listItemBackgroundChecked: '#edebe9',
        listItemBackgroundCheckedHovered: '#e1dfdd',
        listItemBackgroundHovered: '#f3f2f1',
        listText: '#323130',
        listTextColor: '#323130',
        menuBackground: '#ffffff',
        menuDivider: '#c8c6c4',
        menuHeader: '#69797e',
        menuIcon: '#69797e',
        menuItemBackgroundChecked: '#edebe9',
        menuItemBackgroundHovered: '#f3f2f1',
        menuItemBackgroundPressed: '#edebe9',
        menuItemText: '#323130',
        menuItemTextHovered: '#201f1e',
        primaryButtonBackground: '#69797e',
        primaryButtonBackgroundDisabled: '#f3f2f1',
        primaryButtonBackgroundHovered: '#5d6c70',
        primaryButtonBackgroundPressed: '#4f5b5f',
        primaryButtonBorder: 'transparent',
        primaryButtonText: '#ffffff',
        primaryButtonTextDisabled: '#d2d0ce',
        primaryButtonTextHovered: '#ffffff',
        primaryButtonTextPressed: '#ffffff',
        smallInputBorder: '#605e5c',
        successBackground: '#dff6dd',
        variantBorder: '#edebe9',
        variantBorderHovered: '#a19f9d',
        warningBackground: '#fff4ce',
        warningHighlight: '#ffb900',
        warningText: '#323130'
    }
};
