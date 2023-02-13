import {ArrowHeadRightSize24Px, InfoSize24Px} from '@coveord/plasma-react-icons';
import {color} from '@coveord/plasma-tokens';
import {ButtonStylesParams, MantineThemeOverride, ModalStylesParams} from '@mantine/core';

import {PlasmaColors} from './PlasmaColors';

export const plasmaTheme: MantineThemeOverride = {
    // These are overrides over https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts
    colorScheme: 'light',
    fontFamily: 'canada-type-gibson, sans-serif',
    black: color.primary.gray[9],
    defaultRadius: 8,
    spacing: {
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
        xl: 40,
    },
    primaryColor: 'action',
    headings: {
        fontFamily: 'canada-type-gibson, sans-serif',
        fontWeight: 500,
        sizes: {
            h1: {fontSize: 48, lineHeight: '56px', fontWeight: 300},
            h2: {fontSize: 32, lineHeight: '40px', fontWeight: 500},
            h3: {fontSize: 24, lineHeight: '32px', fontWeight: 500},
            h4: {fontSize: 18, lineHeight: '28px', fontWeight: 300},
            h5: {fontSize: 14, lineHeight: '20px', fontWeight: 500},
            h6: {fontSize: 12, lineHeight: '16px', fontWeight: 500},
        },
    },
    shadows: {
        xs: '0px 1px 0px rgba(4, 8, 31, 0.08)',
        sm: '0px 2px 4px rgba(4, 8, 31, 0.12)',
        md: '0px 4px 8px rgba(4, 8, 31, 0.08)',
        lg: '0px 8px 16px rgba(7, 12, 41, 0.06)',
        xl: '0px 16px 24px rgba(4, 8, 31, 0.06)',
    },
    colors: PlasmaColors,
    components: {
        Alert: {
            defaultProps: {
                icon: <InfoSize24Px height={24} />,
                color: 'navy',
            },
            styles: {
                title: {
                    fontWeight: 500,
                },
            },
        },
        Title: {
            styles: (theme) => ({
                root: {
                    '&:is(h1,h2,h3,h4,h5,h6)': {letterSpacing: '0.011em', color: theme.colors.gray[9]},
                },
            }),
        },
        Button: {
            styles: (theme, params: ButtonStylesParams) => ({
                root: {
                    fontWeight: 400,
                    backgroundColor: params.variant === 'outline' ? 'white' : undefined,
                },
            }),
        },
        Modal: {
            styles: (theme, {size, fullScreen}: ModalStylesParams) => ({
                modal: {
                    width: fullScreen
                        ? undefined
                        : theme.fn.size({size, sizes: {xs: 440, sm: 550, md: 800, lg: 1334, xl: '85%'}}),
                },
            }),
            defaultProps: {
                overlayColor: color.primary.navy[9],
                overlayOpacity: 0.9,
            },
        },
        InputWrapper: {
            defaultProps: {
                withAsterisk: false,
            },
            styles: (theme) => ({
                label: {
                    marginBottom: theme.spacing.xs,
                    lineHeight: '20px',
                },
                description: {
                    lineHeight: '20px',
                    fontSize: theme.fontSizes.sm,
                    color: theme.colors.gray[7],
                    marginBottom: theme.spacing.xs,
                },
                invalid: {
                    color: theme.colors.red[9],
                    borderColor: theme.colors.red[6],
                },
                error: {
                    color: theme.colors.red[9],
                },
            }),
        },
        TextInput: {
            defaultProps: {
                radius: 8,
            },
        },
        Tooltip: {
            defaultProps: {
                color: 'navy',
                withArrow: true,
                withinPortal: true,
                multiline: true,
            },
        },
        Breadcrumbs: {
            defaultProps: {
                separator: <ArrowHeadRightSize24Px height={24} />,
            },
        },
        Loader: {
            defaultProps: {
                variant: 'dots',
                color: 'action',
            },
        },
        DateRangePicker: {
            styles: {
                cell: {
                    textAlign: 'center',
                },
            },
        },
        Anchor: {
            defaultProps: {
                color: 'action',
            },
            styles: (theme) => ({
                root: {
                    ...theme.fn.hover({
                        textDecoration: 'underline',
                        color: theme.colors.action[8],
                    }),
                },
            }),
        },
        Checkbox: {
            defaultProps: {
                radius: 'sm',
            },
        },
        List: {
            styles: () => ({
                root: {
                    listStyleType: 'disc',
                },
            }),
        },
        Radio: {
            styles: {
                labelWrapper: {
                    display: 'flex',
                    alignItems: 'flex-start',
                },
            },
        },
        Popover: {
            defaultProps: {
                shadow: 'md',
                withArrow: true,
            },
        },
        Badge: {
            styles: {
                root: {
                    textTransform: 'none',
                    padding: '4px 8px',
                    fontWeight: 500,
                },
            },
        },
        ColorSwatch: {
            defaultProps: {
                size: 8,
                withShadow: false,
            },
        },
        MenuItem: {
            defaultProps: {
                fw: 300,
            },
        },
    },
};
