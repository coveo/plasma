import {
    createTheme,
    ThemeOptions,
    PaletteColorOptions,
    experimental_sx as sx,
    SimplePaletteColorOptions,
    TypeText,
    TypeBackground,
} from '@mui/material';
import {Shadows} from '@mui/material/styles/shadows';

declare module '@mui/material/styles' {
    export interface PaletteOptions {
        primary_gray?: SimplePaletteColorOptions;
        accent_red?: PaletteColorOptions;
        accent_blue?: PaletteColorOptions;
        accent_yellow?: PaletteColorOptions;
        accent_turquoise?: PaletteColorOptions;
        secondary_purple?: PaletteColorOptions;
        secondary_green?: PaletteColorOptions;
        secondary_blue?: PaletteColorOptions;
    }
}

const createShadows = (
    color: string,
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    r1: number,
    r2: number
): Shadows => {
    const steps: string[] = ['none'];
    for (let elevation = 1; elevation <= 24; ++elevation) {
        const factor = elevation / 24;
        const compute = (v1: number, v2: number) => Math.round(v1 + (v2 - v1) * factor);
        steps.push(`${compute(x1, x2)}px ${compute(y1, y2)}px ${compute(r1, r2)}px ${color}`);
    }

    return steps as Shadows;
};

const navyBlue = {
    main: '#333357', // --navy-blue-80
};

const digitalBlue = {
    light: '#c7e4ff', // digital-blue-20
    main: '#1372ec', // digital-blue-60
    '800': '#1a50ad', // digital-blue-80
    dark: '#062d70', // digital-blue-100
};

const gray = {
    light: '#f6f7f9', // gray-20
    main: '#e5e8e8', // gray-40
    dark: '#c5cacf', // gray-50
    contrastText: '#333357', // gray-80
};

const pomegranateRed = {
    main: '#f05245', // --pomegranate-red-50
};

const ceruleanBlue = {
    main: '#00adff', // --cerulean-blue-50
};

const turboYellow = {
    main: '#ffe300', // --turbo-yellow-50
};

const brightTurquoise = {
    main: '#1cebcf', // --bright-turquoise-40
};

const grapePurple = {
    main: '#451c5c', // --grape-purple-70
};

const rainForestGreen = {
    main: '#00634f', // --rain-forest-green-60
};

const governorBlue = {
    main: '#2e45ba', // --governor-blue-60
};

const lightBackground = {
    default: '#ffffff',
};

const createCoveoTheme = (variant: 'light' | 'medium' | 'dark'): ThemeOptions => {
    let text: Partial<TypeText>;
    switch (variant) {
        case 'light':
            text = {
                primary: '#282829',
                secondary: '#626971',
                disabled: '#bcc3ca',
            };
            break;
        case 'medium':
        case 'dark':
        default:
            text = {
                primary: '#282829',
                secondary: '#626971',
                disabled: '#bcc3ca',
            };
            break;
    }

    let background: Partial<TypeBackground>;
    switch (variant) {
        case 'light':
            background = {
                default: '#ffffff',
            };
            break;
        case 'medium':
            background = {
                default: '#ffffff',
            };
            break;
        case 'dark':
        default:
            background = {
                default: '#ffffff',
            };
            break;
    }

    let shadows: Shadows;
    switch (variant) {
        case 'light':
            shadows = createShadows('rgba(229, 232, 232, 0.6)', 0, 0, 2, 10, 2, 25);
            break;
        case 'medium':
            shadows = createShadows('rgba(113, 113, 113, 0.16)', 0, 0, 2, 14, 3, 26);
            break;
        case 'dark':
        default:
            shadows = createShadows('rgba(24, 29, 58, 0.5)', 0, 0, 2, 8, 3, 24);
            break;
    }

    return createTheme({
        palette: {
            primary: digitalBlue,
            primary_gray: gray,
            accent_red: pomegranateRed,
            accent_blue: ceruleanBlue,
            accent_yellow: turboYellow,
            accent_turquoise: brightTurquoise,
            secondary: navyBlue,
            secondary_purple: grapePurple,
            secondary_green: rainForestGreen,
            secondary_blue: governorBlue,
            info: {
                main: '#525296', // --info-60
            },
            warning: {
                main: '#e2b104', // --warn-70
            },
            success: {
                main: '#12a344', // --success-60
            },
            error: {
                main: '#cd2113', // --critical-70
            },
            text,
            background,
        },
        typography: {
            fontFamily: 'canada-type-gibson, sans-serif',
            fontSize: 14,
            fontWeightRegular: '--font-weight-book',
        },
        shape: {
            borderRadius: 4,
        },
        components: {
            MuiButtonBase: {
                defaultProps: {
                    disableRipple: true,
                },
            },
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                },
                styleOverrides: {
                    root: sx({
                        fontSize: 16,
                        fontWeight: 400,
                        textTransform: 'none',
                        borderRadius: 2,
                    }),
                },
                variants: [
                    {
                        props: {variant: 'contained'},
                        style: {
                            background: '--digital-blue-60',
                        },
                    },
                    {
                        props: {size: 'small'},
                        style: {
                            fontSize: 14,
                        },
                    },
                ],
            },
            MuiInput: {
                styleOverrides: {
                    root: sx({fontSize: 14}),
                },
            },
            MuiSelect: {
                styleOverrides: {
                    outlined: sx({color: digitalBlue['800']}),
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: sx({
                        backgroundColor: lightBackground.default,
                        borderRadius: 2,
                        fontSize: 14,

                        // I don't quite know why the `focused` member exists on level above, but this is the only
                        // thing I did that actually worked.
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 1,
                            borderColor: digitalBlue.main,
                            boxShadow: '0px 0px 0px 4px #c7e4ff',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 1,
                            borderColor: gray.dark,
                        },
                    }),
                    notchedOutline: sx({
                        border: 1,
                        borderColor: gray.main,
                        borderRadius: 2,
                    }),
                },
            },
            MuiInputAdornment: {
                styleOverrides: {
                    root: sx({
                        color: text.secondary,
                    }),
                },
            },
            MuiTextField: {
                defaultProps: {
                    variant: 'standard',
                },
            },
            MuiFormControlLabel: {
                styleOverrides: {
                    label: sx({fontSize: 14}),
                },
            },
            MuiFormHelperText: {
                styleOverrides: {
                    root: sx({fontSize: 14}),
                    contained: sx({mx: 4}),
                },
            },
            MuiCard: {
                defaultProps: {
                    elevation: 0,
                },
            },
            MuiAccordion: {
                defaultProps: {
                    disableGutters: true,
                    elevation: 0,
                },
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    root: sx({px: 5, py: 1, backgroundColor: gray.main}),
                    content: sx({fontWeight: 400, textTransform: 'uppercase'}),
                },
            },
        },
        shadows,
    });
};

export const lightBackgroundTheme = createCoveoTheme('light');
