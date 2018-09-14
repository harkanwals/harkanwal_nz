import Typography from "typography";
import twinPeaksTheme from "typography-theme-twin-peaks";
twinPeaksTheme.baseFontSize = "22px";

twinPeaksTheme.overrideThemeStyles = ({ rhythm}, options ) => ({
    'h2,h3':{
        marginTop: (rhythm(1/6))
    }
})

const typography = new Typography(twinPeaksTheme)

export default typography;