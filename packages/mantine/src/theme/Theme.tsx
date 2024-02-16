import {CheckSize16Px, InfoSize24Px} from '@coveord/plasma-react-icons';
import {color} from '@coveord/plasma-tokens';
import {
    getSize,
    getStylesRef,
    rem,
    type MantineThemeOverride,
    type NotificationProps,
    type StepperStylesParams,
    type TabsStylesParams,
} from '@mantine/core';

import {PlasmaColors} from './PlasmaColors';

export const plasmaTheme: MantineThemeOverride = {
    // These are overrides over https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts
    colorScheme: 'light',
    fontFamily: 'canada-type-gibson, sans-serif',
    black: color.primary.gray[9],
    defaultRadius: 8,
    lineHeight: 1.5,
    spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
    },
    globalStyles: (theme) => ({
        body: {
            ...theme.fn.fontStyles(),
            fontSize: theme.fontSizes.sm,
            lineHeight: theme.lineHeight,
            fontWeight: 300,
        },
    }),
    primaryColor: 'action',
    headings: {
        fontFamily: 'canada-type-gibson, sans-serif',
        fontWeight: 500,
        sizes: {
            h1: {fontSize: '48px', lineHeight: undefined, fontWeight: 300},
            h2: {fontSize: '32px', lineHeight: undefined, fontWeight: 500},
            h3: {fontSize: '24px', lineHeight: undefined, fontWeight: 500},
            h4: {fontSize: '18px', lineHeight: undefined, fontWeight: 300},
            h5: {fontSize: '14px', lineHeight: undefined, fontWeight: 500},
            h6: {fontSize: '12px', lineHeight: undefined, fontWeight: 500},
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
            styles: {
                root: {
                    '&:is(h1,h2,h3,h4,h5,h6)': {letterSpacing: '0.011em'},
                },
            },
        },
        Text: {
            defaultProps: {
                weight: 300,
            },
            styles: (theme, {}, {size}) => ({
                root: {
                    fontSize: getSize({size: size ?? 'sm', sizes: theme.fontSizes}),
                },
            }),
        },
        Button: {
            styles: () => ({
                root: {
                    fontWeight: 400,
                },
            }),
            variants: {
                outline: () => ({
                    root: {
                        backgroundColor: 'white',
                    },
                }),
            },
        },
        Modal: {
            styles: (theme, {fullScreen, padding}, {size, variant}) => ({
                content: {
                    flex: fullScreen
                        ? '0 0 100%'
                        : `0 0 ${getSize({
                              size,
                              sizes: {
                                  xs: rem(432),
                                  sm: rem(664),
                                  md: rem(896),
                                  lg: rem(1120),
                                  xl: rem('88%'),
                              },
                          })}`,
                    overflow: 'auto',
                },
                title: {
                    width: '100%',
                    fontSize: theme.headings.sizes.h3.fontSize,
                    lineHeight: theme.headings.sizes.h3.lineHeight,
                    fontWeight: 500,
                },
                header: {
                    borderBottom: variant !== 'prompt' ? `1px solid ${color.primary.gray[3]}` : null,
                },
                body: {
                    '&:not(:only-child)': {
                        paddingTop: variant === 'prompt' ? 0 : getSize({size: padding, sizes: plasmaTheme.spacing}),
                    },
                },
            }),
        },
        ModalOverlay: {
            defaultProps: {
                color: color.primary.navy[9],
                opacity: 0.9,
            },
        },
        InputWrapper: {
            defaultProps: {
                withAsterisk: false,
            },
            styles: (theme) => ({
                label: {
                    marginBottom: theme.spacing.xs,
                },
                description: {
                    fontSize: theme.fontSizes.sm,
                    color: theme.colors.gray[7],
                    marginBottom: theme.spacing.xs,
                    lineHeight: theme.lineHeight,
                },
                invalid: {
                    color: theme.colors.red[9],
                    borderColor: theme.colors.red[6],
                },
                error: {
                    color: theme.colors.red[9],
                    lineHeight: theme.lineHeight,
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
                maw: 300,
                multiline: true,
                withArrow: true,
                withinPortal: true,
                zIndex: 10000,
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
                color: 'action.6',
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
            styles: (theme) => ({
                label: {
                    fontSize: theme.fontSizes.sm,
                    fontWeight: 300,
                },
            }),
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
        Notification: {
            styles: (theme, {color: notificationType}: NotificationProps) => ({
                root: {
                    borderColor: theme.colors.gray[3],
                    backgroundColor: theme.colors.gray[0],
                    boxShadow: theme.shadows.lg,
                    padding: theme.spacing.sm,
                    '&[data-with-icon]': {
                        paddingLeft: theme.spacing.sm,
                    },
                },
                icon: {
                    backgroundColor: 'transparent',
                    marginRight: theme.spacing.sm,
                    color: theme.colors?.[notificationType][6],
                },
                closeButton: {
                    margin: theme.spacing.xs,
                    color: theme.colors.gray[5],
                },
            }),
            defaultProps: {
                icon: <InfoSize24Px height={24} />,
                color: 'info',
            },
        },
        Skeleton: {
            styles: {
                visible: {
                    '&::before': {zIndex: 'unset'},
                    '&::after': {zIndex: 'unset'},
                },
            },
        },
        SegmentedControl: {
            styles: (theme) => ({
                root: {
                    backgroundColor: theme.colors.gray[2],
                },
            }),
        },
        Stepper: {
            defaultProps: {
                size: 'xs',
                completedIcon: <CheckSize16Px />,
            },
            styles: (theme, {}: StepperStylesParams, {size}) => ({
                step: {
                    '&[disabled]': {
                        color: theme.colors.gray[5],
                        '& .mantine-Stepper-stepDescription': {
                            color: theme.colors.gray[5],
                        },
                        '& .mantine-Stepper-stepIcon': {
                            borderColor: theme.colors.gray[1],
                        },
                    },
                },
                stepIcon: {
                    fontWeight: 500,
                    backgroundColor: theme.colors.gray[1],
                    color: 'inherit',
                    border: `${rem(1)} solid ${theme.colors.gray[3]}`,
                    '&[data-progress]': {
                        backgroundColor: theme.white,
                    },

                    '&[data-completed]': {
                        backgroundColor: theme.white,
                        borderColor: theme.colors.lime[6],
                        color: theme.colors.lime[6],
                    },
                },
                stepCompletedIcon: {
                    color: theme.colors.lime[6],
                    fontSize: rem(16),
                },
                stepDescription: {
                    color: theme.colors.gray[7],
                    fontSize: getSize({size, sizes: theme.fontSizes}),
                },
                separator: {
                    height: rem(1),
                    backgroundColor: theme.colors.gray[3],
                },
                separatorActive: {
                    backgroundColor: theme.colors.gray[3],
                },
                verticalSeparator: {
                    borderLeft: `${rem(1)} solid ${theme.colors.gray[3]}`,
                },
                verticalSeparatorActive: {
                    borderColor: theme.colors.gray[3],
                },
            }),
        },
        Tabs: {
            styles: (theme, {orientation}: TabsStylesParams) => ({
                tabsList: {
                    [orientation === 'horizontal' ? 'borderBottom' : 'borderRight']: `${rem(1)} solid ${
                        theme.colors.gray[3]
                    }`,
                },
                tab: {
                    [orientation === 'horizontal' ? 'borderBottom' : 'borderRight']: `${rem(1)} solid transparent`,
                    [orientation === 'horizontal' ? 'marginBottom' : 'marginRight']: rem(-1),
                },
            }),
        },
        Select: {
            styles: (theme) => ({
                input: {
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
                },
                item: {
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

                    '&[data-hovered]': {
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
                    },

                    '&[data-selected]': {
                        backgroundColor: theme.fn.variant({variant: 'light'}).background,
                        color: theme.fn.variant({variant: 'light'}).color,
                        ...theme.fn.hover({backgroundColor: theme.fn.variant({variant: 'light'}).hover}),
                    },
                },
            }),
        },
        NavLink: {
            styles: (theme) => ({
                root: {
                    color: theme.colors.gray[6],
                    borderRadius: `${theme.defaultRadius}px 0px 0px ${theme.defaultRadius}px`,
                    ...theme.fn.hover({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
                    }),
                },
                label: {
                    ref: getStylesRef('label'),
                    fontWeight: 500,
                },
                children: {
                    [`.${getStylesRef('label')}`]: {
                        fontWeight: 300,
                    },
                },
            }),
        },
        Navbar: {
            styles: (theme) => ({
                root: {
                    borderColor: theme.colors.gray[3],
                },
            }),
        },
        ScrollArea: {
            styles: {
                viewport: {
                    // https://github.com/radix-ui/primitives/issues/926
                    '&[data-radix-scroll-area-viewport]': {
                        '& > :first-of-type': {
                            display: 'block !important',
                        },
                    },
                },
            },
        },
        Divider: {
            defaultProps: {
                color: 'gray.3',
            },
        },
    },
};
