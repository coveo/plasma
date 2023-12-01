import {CheckSize16Px, InfoSize24Px} from '@coveord/plasma-react-icons';
import {color} from '@coveord/plasma-tokens';
import {
    Alert,
    Anchor,
    Badge,
    Button,
    Checkbox,
    ColorSwatch,
    Divider,
    InputWrapper,
    List,
    Loader,
    MantineThemeOverride,
    MenuItem,
    Modal,
    ModalOverlay,
    Notification,
    Popover,
    Radio,
    SegmentedControl,
    Skeleton,
    Stepper,
    Tabs,
    Text,
    TextInput,
    Title,
    Tooltip,
    createTheme,
} from '@mantine/core';
import {DatePicker} from '@mantine/dates';
import AlertClasses from '../styles/Alert.module.css';
import AnchorClasses from '../styles/Anchor.module.css';
import BadgeClasses from '../styles/Badge.module.css';
import ButtonClasses from '../styles/Button.module.css';
import CheckboxClasses from '../styles/Checkbox.module.css';
import DatePickerClasses from '../styles/DatePicker.module.css';
import InputWrapperClasses from '../styles/InputWrapper.module.css';
import ListClasses from '../styles/List.module.css';
import NotificationClasses from '../styles/Notification.module.css';
import RadioClasses from '../styles/Radio.module.css';
import SegmentedControlClasses from '../styles/SegmentedControl.module.css';
import SkeletonClasses from '../styles/Skeleton.module.css';
import StepperClasses from '../styles/Stepper.module.css';
import TabsClasses from '../styles/Tabs.module.css';
import TitleClasses from '../styles/Title.module.css';

import TextClasses from '../styles/Text.module.css';
import {NotificationVars} from '../vars/Notification.vars';
import {PlasmaColors} from './PlasmaColors';

export const plasmaTheme: MantineThemeOverride = createTheme({
    // These are overrides over https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts
    fontFamily: 'canada-type-gibson, sans-serif',
    black: color.primary.gray[9],
    defaultRadius: 8,
    lineHeights: {md: '1.5'},
    spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
    },
    primaryColor: 'action',
    headings: {
        fontFamily: 'canada-type-gibson, sans-serif',
        fontWeight: '500',
        sizes: {
            h1: {fontSize: '48px', lineHeight: undefined, fontWeight: '300'},
            h2: {fontSize: '32px', lineHeight: undefined, fontWeight: '500'},
            h3: {fontSize: '24px', lineHeight: undefined, fontWeight: '500'},
            h4: {fontSize: '18px', lineHeight: undefined, fontWeight: '300'},
            h5: {fontSize: '14px', lineHeight: undefined, fontWeight: '500'},
            h6: {fontSize: '12px', lineHeight: undefined, fontWeight: '500'},
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
        Alert: Alert.extend({
            defaultProps: {
                icon: <InfoSize24Px height={24} />,
                color: 'navy',
            },
            classNames: {title: AlertClasses.title},
        }),
        Title: Title.extend({
            classNames: {root: TitleClasses.root},
        }),
        Text: Text.extend({
            classNames: TextClasses.root, // essayer l'ajout de data-size dans module
            // vars: TextVars,
        }),
        Button: Button.extend({
            classNames: {root: ButtonClasses.root},
        }),
        Modal: Modal.extend({}),
        // styles: (theme, {fullScreen, padding}, {size, variant}) => ({
        //     content: {
        //         flex: fullScreen
        //             ? '0 0 100%'
        //             : `0 0 ${getSize({
        //                   size,
        //                   sizes: {
        //                       xs: rem(432),
        //                       sm: rem(664),
        //                       md: rem(896),
        //                       lg: rem(1120),
        //                       xl: rem('88%'),
        //                   },
        //               })}`,
        //         overflow: 'auto',
        //     },
        //     title: {
        //         width: '100%',
        //         fontSize: theme.headings.sizes.h3.fontSize,
        //         lineHeight: theme.headings.sizes.h3.lineHeight,
        //         fontWeight: 500,
        //     },
        //     header: {
        //         borderBottom: variant !== 'prompt' ? `1px solid ${color.primary.gray[3]}` : null,
        //     },
        //     body: {
        //         '&:not(:only-child)': {
        //             paddingTop: variant === 'prompt' ? 0 : getSize({size: padding, sizes: plasmaTheme.spacing}),
        //         },
        //     },
        // }),
        ModalOverlay: ModalOverlay.extend({
            defaultProps: {
                color: color.primary.navy[9],
                opacity: 0.9,
            },
        }),
        InputWrapper: InputWrapper.extend({
            classNames: {
                label: InputWrapperClasses.label,
                description: InputWrapperClasses.description,
                error: InputWrapperClasses.error,
            },
        }),
        TextInput: TextInput.extend({
            defaultProps: {
                radius: 8,
            },
        }),
        Tooltip: Tooltip.extend({
            defaultProps: {
                color: 'navy',
                maw: 300,
                multiline: true,
                withArrow: true,
                withinPortal: true,
                zIndex: 10000,
            },
        }),
        Loader: Loader.extend({
            defaultProps: {
                type: 'dots',
                color: 'action',
            },
        }),
        DatePicker: DatePicker.extend({
            classNames: {monthCell: DatePickerClasses.monthCell},
        }),
        Anchor: Anchor.extend({
            defaultProps: {
                color: 'action.6',
            },
            classNames: {root: AnchorClasses.root},
        }),
        Checkbox: Checkbox.extend({
            defaultProps: {
                radius: 'sm',
            },
            classNames: {label: CheckboxClasses.label},
        }),
        List: List.extend({
            classNames: {root: ListClasses.root},
        }),
        Radio: Radio.extend({
            classNames: {labelWrapper: RadioClasses.labelWrapper},
        }),
        Popover: Popover.extend({
            defaultProps: {
                shadow: 'md',
                withArrow: true,
            },
        }),
        Badge: Badge.extend({
            classNames: {root: BadgeClasses.root},
        }),
        ColorSwatch: ColorSwatch.extend({
            defaultProps: {
                size: 8,
                withShadow: false,
            },
        }),
        MenuItem: MenuItem.extend({
            defaultProps: {
                fw: 300,
            },
        }),
        Notification: Notification.extend({
            defaultProps: {
                icon: <InfoSize24Px height={24} />,
                color: 'info',
            },
            classNames: {
                root: NotificationClasses.root,
                icon: NotificationClasses.icon,
                closeButton: NotificationClasses.closeButton,
            },
            vars: NotificationVars,
        }),
        Skeleton: Skeleton.extend({
            classNames: {root: SkeletonClasses.root},
        }),
        SegmentedControl: SegmentedControl.extend({
            classNames: {root: SegmentedControlClasses.root},
        }),
        Stepper: Stepper.extend({
            defaultProps: {
                size: 'xs',
                completedIcon: <CheckSize16Px />,
            },
            classNames: {
                step: StepperClasses.step,
                stepIcon: StepperClasses.stepIcon,
                stepCompletedIcon: StepperClasses.stepCompletedIcon,
                stepDescription: StepperClasses.stepDescription,
                separator: StepperClasses.separator,
                verticalSeparator: StepperClasses.verticalSeparator,
            },
        }),
        Tabs: Tabs.extend({
            classNames: {list: TabsClasses.list, tab: TabsClasses.tab},
        }),
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
        Divider: Divider.extend({
            defaultProps: {
                color: 'gray.3',
            },
        }),
    },
});
