import {
    ArrowHeadLeftSize16Px,
    ArrowHeadRightSize16Px,
    CheckSize16Px,
    CrossSize16Px,
    FilterSize16Px,
    InfoSize16Px,
    InfoSize24Px,
} from '@coveord/plasma-react-icons';
import {color} from '@coveord/plasma-tokens';
import {
    Alert,
    AppShell,
    Badge,
    Button,
    Checkbox,
    CloseButton,
    ColorSwatch,
    Combobox,
    ComboboxSearch,
    createTheme,
    deepMerge,
    Divider,
    Input,
    InputWrapper,
    List,
    Loader,
    MantineThemeOverride,
    Modal,
    MultiSelect,
    NavLink,
    Notification,
    Pagination,
    Popover,
    Radio,
    ScrollArea,
    SegmentedControl,
    Select,
    Skeleton,
    Stepper,
    Switch,
    Table,
    Tabs,
    Text,
    Tooltip,
} from '@mantine/core';
import AlertClasses from '../styles/Alert.module.css';
import BadgeClasses from '../styles/Badge.module.css';
import ButtonClasses from '../styles/Button.module.css';
import CheckboxClasses from '../styles/Checkbox.module.css';
import ComboboxClasses from '../styles/Combobox.module.css';
import InputClasses from '../styles/Input.module.css';
import InputWrapperClasses from '../styles/InputWrapper.module.css';
import ListClasses from '../styles/List.module.css';
import ModalClasses from '../styles/Modal.module.css';
import NavLinkClasses from '../styles/NavLink.module.css';
import PaginationClasses from '../styles/Pagination.module.css';
import RadioClasses from '../styles/Radio.module.css';
import ReadOnlyInputClasses from '../styles/ReadOnlyInput.module.css';
import ReadOnlyStateClasses from '../styles/ReadOnlyState.module.css';
import ScrollAreaClasses from '../styles/ScrollArea.module.css';
import SegmentedControlClasses from '../styles/SegmentedControl.module.css';
import SkeletonClasses from '../styles/Skeleton.module.css';
import StepperClasses from '../styles/Stepper.module.css';
import TableClasses from '../styles/Table.module.css';
import TabsClasses from '../styles/Tabs.module.css';
import TextClasses from '../styles/Text.module.css';
import TooltipClasses from '../styles/Tooltip.module.css';
import {PlasmaColors} from './PlasmaColors';

export const plasmaTheme: MantineThemeOverride = createTheme({
    // These are overrides over https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-theme.ts
    fontFamily: 'canada-type-gibson, sans-serif',
    black: color.primary.gray[9],
    defaultRadius: 'md',
    lineHeights: {md: '1.5'},
    spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
    },
    radius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        xxl: '32px',
    },
    primaryColor: 'blue',
    headings: {
        fontFamily: 'canada-type-gibson, sans-serif',
        fontWeight: '500',
        sizes: {
            h1: {fontSize: '40px', lineHeight: '1.2', fontWeight: '500'},
            h2: {fontSize: '32px', lineHeight: '1.25', fontWeight: '500'},
            h3: {fontSize: '24px', lineHeight: '1.33', fontWeight: '500'},
            h4: {fontSize: '18px', lineHeight: '1.2', fontWeight: '400'},
            h5: {fontSize: '16px', lineHeight: '1.25', fontWeight: '500'},
            h6: {fontSize: '12px', lineHeight: '1.33', fontWeight: '500'},
        },
    },
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
    },
    shadows: {
        xs: '0px 1px 0px rgba(4, 8, 31, 0.08)',
        sm: '0px 2px 4px rgba(4, 8, 31, 0.12)',
        md: '0px 4px 8px rgba(4, 8, 31, 0.08)',
        lg: '0px 8px 16px rgba(7, 12, 41, 0.06)',
        xl: '0px 16px 24px rgba(4, 8, 31, 0.06)',
    },
    primaryShade: 5,
    colors: PlasmaColors,
    components: {
        AppShell: AppShell.extend({
            vars: (theme) =>
                ({
                    root: {'--app-shell-border-color': theme.colors.gray[2]},
                }) as any,
        }),
        Alert: Alert.extend({
            defaultProps: {
                icon: <InfoSize16Px height={16} />,
                p: 'xs',
            },
            classNames: AlertClasses,
        }),
        Badge: Badge.extend({
            classNames: BadgeClasses,
            defaultProps: {
                variant: 'light',
            },
        }),
        Button: Button.extend({
            defaultProps: {
                size: 'sm',
            },
            classNames: ButtonClasses,
        }),
        Checkbox: Checkbox.extend({
            defaultProps: {
                radius: 'sm',
            },
            classNames: (theme, props) => {
                if (props.readOnly && !props.disabled) {
                    return deepMerge(CheckboxClasses, ReadOnlyStateClasses);
                }
                return CheckboxClasses;
            },
            vars: (theme, props) => {
                if (props.readOnly && !props.disabled) {
                    return {
                        root: {
                            '--checkbox-icon-color': theme.colors.gray[7],
                            '--checkbox-color': theme.colors.gray[2],
                        },
                    };
                }
                return {root: {}};
            },
        }),
        CloseButton: CloseButton.extend({
            defaultProps: {
                icon: <CrossSize16Px height={16} aria-label="close" />,
            },
        }),
        ColorSwatch: ColorSwatch.extend({
            defaultProps: {
                size: 8,
                withShadow: false,
            },
        }),
        Combobox: Combobox.extend({
            classNames: ComboboxClasses,
        }),
        ComboboxSearch: ComboboxSearch.extend({
            defaultProps: {
                placeholder: 'Search',
                rightSection: <FilterSize16Px height={16} color="gray.5" />,
            },
        }),
        Divider: Divider.extend({
            defaultProps: {
                color: 'var(--mantine-color-default-border)',
            },
        }),
        Input: Input.extend({
            defaultProps: {
                size: 'sm',
            },
            classNames: (_theme, props) => {
                const anyProps = props as any;
                if (anyProps.readOnly && !props.disabled && !['Select'].includes(anyProps.__staticSelector)) {
                    return deepMerge(InputClasses, ReadOnlyInputClasses);
                }
                return InputClasses;
            },
        }),
        InputWrapper: InputWrapper.extend({
            defaultProps: {
                size: 'sm',
            },
            classNames: InputWrapperClasses,
            vars: (theme, props) => {
                const anyProps = props as any;
                if (anyProps.disabled || (anyProps.readOnly && !['Select'].includes(anyProps.__staticSelector))) {
                    return {
                        label: {'--input-asterisk-color': theme.colors.red[2]},
                        error: {},
                        description: {},
                    };
                }
                return {
                    label: {},
                    error: {},
                    description: {},
                };
            },
        }),
        Loader: Loader.extend({
            defaultProps: {
                type: 'dots',
                role: 'presentation',
            },
        }),
        List: List.extend({
            classNames: ListClasses,
        }),
        Modal: Modal.extend({
            classNames: ModalClasses,
            vars: () => {
                const sizes = {
                    '--modal-size-xs': '432px',
                    '--modal-size-sm': '664px',
                    '--modal-size-md': '896px',
                    '--modal-size-lg': '1120px',
                    '--modal-size-xl': '88%',
                } as any;
                return {
                    root: {
                        ...sizes,
                    },
                };
            },
        }),
        ModalOverlay: Modal.Overlay.extend({
            defaultProps: {
                color: color.primary.navy[9],
                backgroundOpacity: 0.9,
            },
        }),
        ModalRoot: Modal.Root.extend({
            defaultProps: {
                padding: 'lg',
            },
        }),
        MultiSelect: MultiSelect.extend({defaultProps: {hidePickedOptions: true}}),
        NavLink: NavLink.extend({classNames: NavLinkClasses}),
        Notification: Notification.extend({
            defaultProps: {
                icon: <InfoSize24Px height={24} />,
            },
        }),
        Pagination: Pagination.extend({
            classNames: PaginationClasses,
            defaultProps: {
                nextIcon: ArrowHeadRightSize16Px,
                previousIcon: ArrowHeadLeftSize16Px,
            },
        }),
        Popover: Popover.extend({
            defaultProps: {
                shadow: 'md',
                withArrow: true,
            },
        }),
        Radio: Radio.extend({
            classNames: (theme, props) => {
                if (props.readOnly && !props.disabled) {
                    return deepMerge(RadioClasses, ReadOnlyStateClasses);
                }
                return RadioClasses;
            },
            vars: (theme, props) => {
                if (props.readOnly && !props.disabled) {
                    return {
                        root: {
                            '--radio-icon-color': theme.colors.gray[7],
                            '--radio-color': theme.colors.gray[2],
                        },
                    };
                }
                return {root: {}};
            },
        }),
        ScrollArea: ScrollArea.extend({
            classNames: ScrollAreaClasses,
        }),
        SegmentedControl: SegmentedControl.extend({
            classNames: SegmentedControlClasses,
        }),
        Select: Select.extend({
            defaultProps: {allowDeselect: false},
        }),
        Skeleton: Skeleton.extend({
            classNames: SkeletonClasses,
        }),
        Stepper: Stepper.extend({
            defaultProps: {
                size: 'xs',
                completedIcon: <CheckSize16Px />,
            },
            classNames: StepperClasses,
        }),
        Switch: Switch.extend({
            classNames: (theme, props) => {
                if (props.readOnly && !props.disabled) {
                    return ReadOnlyStateClasses;
                }
                return {};
            },
            vars: (theme, props) => {
                if (props.readOnly && !props.disabled) {
                    return {
                        root: {},
                        track: {
                            '--switch-bg': theme.colors.gray[2],
                            '--switch-bd': 'transparent',
                        },
                        thumb: {
                            '--switch-thumb-bd': 'transparent',
                        },
                    };
                }
                return {root: {}, track: {}, thumb: {}};
            },
        }),
        Table: Table.extend({
            classNames: TableClasses,
        }),
        Tabs: Tabs.extend({
            classNames: TabsClasses,
        }),
        Text: Text.extend({
            defaultProps: {
                size: 'sm',
            },
            classNames: TextClasses,
        }),
        Tooltip: Tooltip.extend({
            defaultProps: {
                maw: 300,
                multiline: true,
                withArrow: true,
                zIndex: 10000,
            },
            classNames: TooltipClasses,
        }),
    },
});
