import { IFontStyles, IPalette, ISemanticColors, ITheme } from 'office-ui-fabric-react/lib/Styling'

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
