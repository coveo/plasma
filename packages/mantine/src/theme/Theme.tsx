import {
    ArrowHeadLeftSize16Px,
    ArrowHeadRightSize16Px,
    CrossSize16Px,
    FilterSize16Px,
    IconCalendarWeek,
    IconCheck,
    IconClock,
    IconInfoCircleFilled,
    IconSlash,
} from '@coveord/plasma-react-icons';
import {color} from '@coveord/plasma-tokens';
import {
    ActionIcon,
    Alert,
    AppShell,
    Badge,
    Breadcrumbs,
    Button,
    Card,
    Checkbox,
    Chip,
    CloseButton,
    ColorSwatch,
    Combobox,
    ComboboxSearch,
    createTheme,
    deepMerge,
    Divider,
    Image,
    Input,
    InputWrapper,
    List,
    Loader,
    MantineThemeOverride,
    Modal,
    MultiSelect,
    NavLink,
    Notification,
    NumberInput,
    Pagination,
    Paper,
    PasswordInput,
    Pill,
    Popover,
    Radio,
    ScrollArea,
    SegmentedControl,
    Select,
    Skeleton,
    Slider,
    Stepper,
    Switch,
    Table,
    Tabs,
    Text,
    Tooltip,
} from '@mantine/core';
import {
    DateInput,
    DatePicker,
    DateTimePicker,
    MonthPicker,
    PickerInputBase,
    TimeInput,
    TimePicker,
    YearPicker,
} from '@mantine/dates';
import {Accordion, CheckboxIcon, CircleLoader, InfoToken} from '../components/index.js';
import AccordionClasses from '../styles/Accordion.module.css';
import ActionIconClasses from '../styles/ActionIcon.module.css';
import AlertClasses from '../styles/Alert.module.css';
import BadgeClasses from '../styles/Badge.module.css';
import BreadcrumbsClasses from '../styles/Breadcrumbs.module.css';
import ButtonClasses from '../styles/Button.module.css';
import CardClasses from '../styles/Card.module.css';
import CheckboxClasses from '../styles/Checkbox.module.css';
import CheckboxIndicatorClasses from '../styles/CheckboxIndicator.module.css';
import ChipClasses from '../styles/Chip.module.css';
import ComboboxClasses from '../styles/Combobox.module.css';
import DatePickerClasses from '../styles/DatePicker.module.css';
import DateTimePickerClasses from '../styles/DateTimePicker.module.css';
import InputClasses from '../styles/Input.module.css';
import InputWrapperClasses from '../styles/InputWrapper.module.css';
import ListClasses from '../styles/List.module.css';
import ModalClasses from '../styles/Modal.module.css';
import MonthPickerClasses from '../styles/MonthPicker.module.css';
import NavLinkClasses from '../styles/NavLink.module.css';
import NotificationClasses from '../styles/Notifications.module.css';
import NumberInputClasses from '../styles/NumberInput.module.css';
import PaginationClasses from '../styles/Pagination.module.css';
import PaperClasses from '../styles/Paper.module.css';
import PillClasses from '../styles/Pill.module.css';
import PopoverClasses from '../styles/Popover.module.css';
import RadioClasses from '../styles/Radio.module.css';
import RadioCardClasses from '../styles/RadioCard.module.css';
import ReadOnlyInputClasses from '../styles/ReadOnlyInput.module.css';
import ReadOnlyStateClasses from '../styles/ReadOnlyState.module.css';
import ScrollAreaClasses from '../styles/ScrollArea.module.css';
import SegmentedControlClasses from '../styles/SegmentedControl.module.css';
import SelectClasses from '../styles/Select.module.css';
import SkeletonClasses from '../styles/Skeleton.module.css';
import SliderClasses from '../styles/Slider.module.css';
import StepperClasses from '../styles/Stepper.module.css';
import TableClasses from '../styles/Table.module.css';
import TabsClasses from '../styles/Tabs.module.css';
import TextClasses from '../styles/Text.module.css';
import TimePickerClasses from '../styles/TimePicker.module.css';
import TooltipClasses from '../styles/Tooltip.module.css';
import YearPickerClasses from '../styles/YearPicker.module.css';
import {PlasmaColors} from './PlasmaColors.js';

import placeholderSvg from '../images/placeholder.svg';
import {plasmaVariantColorResolver} from './plasmaVariantColorResolver.js';

export const plasmaTheme: MantineThemeOverride = createTheme({
    variantColorResolver: plasmaVariantColorResolver,
    // These are overrides over https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-theme.ts
    fontFamily: 'canada-type-gibson, sans-serif',
    black: color.primary.gray[9],
    defaultRadius: 'md',
    lineHeights: {
        xxs: '1.2',
        xs: '1.16',
        sm: '1.14',
        md: '1.14',
        lg: '1.11',
        xl: '1.2',
    },
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
        fontWeight: 'var(--coveo-fw-bold)',
        sizes: {
            h1: {fontSize: '40px', lineHeight: '1.2', fontWeight: 'var(--coveo-fw-bold)'},
            h2: {fontSize: '32px', lineHeight: '1.35', fontWeight: 'var(--coveo-fw-normal)'},
            h3: {fontSize: '24px', lineHeight: '1.33', fontWeight: 'var(--coveo-fw-bold)'},
            h4: {fontSize: '18px', lineHeight: '1.2', fontWeight: 'var(--coveo-fw-bold)'},
            h5: {fontSize: '16px', lineHeight: '1.25', fontWeight: 'var(--coveo-fw-bold)'},
            h6: {fontSize: '12px', lineHeight: '1.33', fontWeight: 'var(--coveo-fw-bold)'},
        },
    },
    fontSizes: {
        xxs: '10px',
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
    },
    shadows: {
        xs: '0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05), 0px -0.5px 1px 0px rgba(0, 0, 0, 0.02)',
        sm: '0px 7px 7px -5px rgba(0, 0, 0, 0.04), 0px 10px 15px -5px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
        md: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
        lg: '0px 12px 12px -7px rgba(0, 0, 0, 0.04), 0px 28px 23px -7px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
        xl: '0px 17px 17px -7px rgba(0, 0, 0, 0.04), 0px 36px 28px -7px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
    },
    primaryShade: 5,
    colors: PlasmaColors,
    components: {
        Accordion: Accordion.extend({
            classNames: AccordionClasses,
        }),
        ActionIcon: ActionIcon.extend({
            defaultProps: {
                size: 'lg',
            },
            classNames: ActionIconClasses,
        }),
        AppShell: AppShell.extend({
            vars: (theme) =>
                ({
                    root: {'--app-shell-border-color': theme.colors.gray[2]},
                }) as any,
        }),
        Alert: Alert.extend({
            defaultProps: {
                icon: <InfoToken variant="advice" />,
                p: 'sm',
            },
            classNames: AlertClasses,
        }),
        Badge: Badge.extend({
            classNames: BadgeClasses,
            defaultProps: {
                variant: 'light',
                tt: 'none',
            },
        }),
        Breadcrumbs: Breadcrumbs.extend({
            classNames: BreadcrumbsClasses,
            defaultProps: {
                separator: <IconSlash size={16} color="var(--mantine-color-dimmed)" />,
                separatorMargin: 'xxs',
            },
        }),
        Button: Button.extend({
            defaultProps: {
                size: 'sm',
                vars: (theme) => ({
                    root: {
                        '--button-padding-x': theme.spacing.sm,
                    },
                }),
            },
            classNames: ButtonClasses,
        }),
        Card: Card.extend({
            defaultProps: {
                radius: 'lg',
                shadow: 'xs',
                padding: 'sm',
                withBorder: true,
            },
            classNames: CardClasses,
        }),
        Checkbox: Checkbox.extend({
            defaultProps: {
                radius: 'sm',
                icon: CheckboxIcon,
            },
            classNames: (theme, props) => {
                if (props.readOnly && !props.disabled) {
                    return deepMerge(CheckboxClasses, ReadOnlyStateClasses);
                }
                return CheckboxClasses;
            },
        }),
        CheckboxIndicator: Checkbox.Indicator.extend({
            defaultProps: {
                radius: 'sm',
                icon: CheckboxIcon,
            },
            classNames: CheckboxIndicatorClasses,
        }),
        Chip: Chip.extend({
            defaultProps: {
                icon: <IconCheck size={16} />,
            },
            classNames: ChipClasses,
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
            defaultProps: {
                middlewares: {inline: true},
            },
        }),
        ComboboxSearch: ComboboxSearch.extend({
            defaultProps: {
                placeholder: 'Search',
                rightSection: <FilterSize16Px height={16} color="gray.5" />,
            },
        }),
        DateInput: DateInput.extend({
            defaultProps: {
                miw: 250,
                leftSection: <IconCalendarWeek size={16} />,
            },
        }),
        DatePicker: DatePicker.extend({
            classNames: DatePickerClasses,
        }),
        DateTimePicker: DateTimePicker.extend({
            classNames: DateTimePickerClasses,
        }),
        Divider: Divider.extend({
            defaultProps: {
                color: 'var(--mantine-color-default-border)',
            },
        }),
        Image: Image.extend({
            defaultProps: {
                fallbackSrc: placeholderSvg,
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
                        root: {
                            '--input-margin-top': props?.label || props?.description ? theme.spacing.xxs : undefined,
                        },
                        label: {'--input-asterisk-color': theme.colors.red[2]},
                        error: {},
                        description: {},
                    };
                }
                return {
                    root: {'--input-margin-top': props?.label || props?.description ? theme.spacing.xxs : undefined},
                    label: {},
                    error: {},
                    description: {},
                };
            },
        }),
        PasswordInput: PasswordInput.extend({
            vars: () => ({
                root: {
                    '--psi-button-size': 'var(--mantine-spacing-lg)',
                },
            }),
        }),
        Loader: Loader.extend({
            defaultProps: {
                loaders: {...Loader.defaultLoaders, circle: CircleLoader},
                type: 'circle',
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
                color: PlasmaColors.indigo[8],
                backgroundOpacity: 0.7,
                blur: 2,
            },
        }),
        ModalRoot: Modal.Root.extend({
            defaultProps: {
                padding: 'lg',
            },
        }),
        MonthPicker: MonthPicker.extend({
            classNames: MonthPickerClasses,
        }),
        MultiSelect: MultiSelect.extend({defaultProps: {hidePickedOptions: true}}),
        NavLink: NavLink.extend({classNames: NavLinkClasses}),
        Notification: Notification.extend({
            classNames: NotificationClasses,
            defaultProps: {
                icon: <IconInfoCircleFilled height={20} />,
            },
        }),
        NumberInput: NumberInput.extend({
            classNames: NumberInputClasses,
        }),
        Pagination: Pagination.extend({
            classNames: PaginationClasses,
            defaultProps: {
                nextIcon: ArrowHeadRightSize16Px,
                previousIcon: ArrowHeadLeftSize16Px,
            },
        }),
        Paper: Paper.extend({
            classNames: PaperClasses,
        }),
        PickerInputBase: PickerInputBase.extend({
            defaultProps: {
                miw: 250,
                leftSection: <IconCalendarWeek size={16} />,
            },
        }),
        Pill: Pill.extend({
            classNames: PillClasses,
        }),
        Popover: Popover.extend({
            classNames: PopoverClasses,
            defaultProps: {
                middlewares: {inline: true},
                position: 'bottom-start',
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
        RadioCard: Radio.Card.extend({
            classNames: RadioCardClasses,
        }),
        ScrollArea: ScrollArea.extend({
            classNames: ScrollAreaClasses,
        }),
        SegmentedControl: SegmentedControl.extend({
            classNames: SegmentedControlClasses,
        }),
        Select: Select.extend({
            defaultProps: {allowDeselect: false, withCheckIcon: false},
            classNames: SelectClasses,
        }),
        Skeleton: Skeleton.extend({
            classNames: SkeletonClasses,
        }),
        Slider: Slider.extend({
            defaultProps: {
                size: 'md',
            },
            classNames: SliderClasses,
        }),
        Stepper: Stepper.extend({
            defaultProps: {
                size: 'xs',
                completedIcon: <IconCheck size={16} />,
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
            defaultProps: {
                withThumbIndicator: false,
            },
        }),
        Table: Table.extend({
            classNames: TableClasses,
            vars: () => ({
                table: {
                    '--table-border-color': 'var(--mantine-color-default-border)',
                },
            }),
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
        TimeInput: TimeInput.extend({
            defaultProps: {
                rightSection: <IconClock size={16} />,
            },
        }),
        TimePicker: TimePicker.extend({
            defaultProps: {
                withDropdown: true,
                format: '12h',
            },
            classNames: TimePickerClasses,
        }),
        Tooltip: Tooltip.extend({
            defaultProps: {
                maw: 280,
                multiline: true,
                withArrow: true,
                zIndex: 10000,
                color: PlasmaColors.violet[9],
            },
            classNames: TooltipClasses,
        }),
        YearPicker: YearPicker.extend({
            classNames: YearPickerClasses,
        }),
    },
});
