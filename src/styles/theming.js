import { createMuiTheme } from '@material-ui/core/styles';
import WhitneyWoff2 from '../fonts/Whitney-Medium.woff2';
import WhitneySemiboldWoff2 from '../fonts/Whitney-Semibold.woff2';

const whitney = {
    fontFamily: 'Whitney',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('Whitney-Book'),
      local('Whitney-Book'),
      url(${WhitneyWoff2}) format('woff2')
    `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const whitneySemibold = {
    fontFamily: 'Whitney',
    fontStyle: 'bold',
    fontDisplay: 'swap',
    fontWeight: 600,
    src: `
      local('Whitney-Semibold'),
      local('Whitney-Semibold'),
      url(${WhitneySemiboldWoff2}) format('woff2')
    `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    breakpoints: {
        keys: {
            0: "xs",
            1: "sm",
            2: "md",
            3: "lg",
            4: "xl",
        },
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        }
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: "'Whitney','Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: "'Whitney','Roboto', 'Helvetica', 'Arial', sans-serif",
            fontSize: '2rem',
            fontWeight: 600,
        },
        h2: {
            fontFamily: "'Whitney','Roboto', 'Helvetica', 'Arial', sans-serif",
            fontSize: '1.75rem',
            fontWeight: 600,
        },
        h3: {
            fontFamily: "'Whitney','Roboto', 'Helvetica', 'Arial', sans-serif",
            fontSize: '1.5rem',
            fontWeight: 600,
        },
        h4: {
            fontFamily: "'Whitney','Roboto', 'Helvetica', 'Arial', sans-serif",
            fontSize: '1.31rem',
            fontWeight: 600,
        },
        h5: {
            fontFamily: "'Whitney','Roboto', 'Helvetica', 'Arial', sans-serif",
            fontSize: '1.125rem',
            fontWeight: 600,
        },
        h6: {
            fontFamily: "'Whitney','Roboto', 'Helvetica', 'Arial', sans-serif",
            fontSize: '1rem',
            fontWeight: 600,
        },
    },
    palette: {
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            light: "#00AA9E",
            main: "#00AA9E",
            dark: "#019389",
            contrastText: "#ffffff",
        },
        secondary: {
            light: "#E8467C",
            main: "#E8467C",
            dark: "#DD2C60",
            contrastText: "#ffffff",
        },
        error: {
            light: "#E8467C",
            main: "#E8467C",
            dark: "#DD2C60",
            contrastText: "#ffffff",
        },
        warning: {
            light: "#ff9800",
            main: "#ff9800",
            dark: "#663c00",
            contrastText: "#fff",
        },
        info: {
            light: "#2196f3",
            main: "#2196f3",
            dark: "#2196f3",
            contrastText: "#ffffff",
        },
        success: {
            light: "#00AA9E",
            main: "#00AA9E",
            dark: "#019389",
            contrastText: "#ffffff",
        },
    },
    mixins: {
        toolbar: {
            minHeight: 56,
            '@media (min-width:0px) and (orientation: landscape)': {
                minHeight: 56,
            },
            '@media (min-width:600px)': {
                minHeight: 56,
            },
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [whitney, whitneySemibold],
            },
        },
    },
});

export default theme;