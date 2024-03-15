import {CheckSize16Px, InfoSize24Px} from '@coveord/plasma-react-icons';
import {color} from '@coveord/plasma-tokens';
import {
    ActionIcon,
    Alert,
    Anchor,
    AppShellNavbar,
    Badge,
    Button,
    Checkbox,
    ColorSwatch,
    Combobox,
    Divider,
    InputWrapper,
    List,
    Loader,
    MantineThemeOverride,
    MenuItem,
    Modal,
    ModalOverlay,
    NavLink,
    Notification,
    Popover,
    Radio,
    ScrollArea,
    SegmentedControl,
    Select,
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
import ActionIconClasses from '../styles/ActionIcon.module.css';
import AlertClasses from '../styles/Alert.module.css';
import AnchorClasses from '../styles/Anchor.module.css';
import AppShellNavBarClasses from '../styles/AppShellNavBar.module.css';
import BadgeClasses from '../styles/Badge.module.css';
import ButtonClasses from '../styles/Button.module.css';
import CheckboxClasses from '../styles/Checkbox.module.css';
import DatePickerClasses from '../styles/DatePicker.module.css';
import InputWrapperClasses from '../styles/InputWrapper.module.css';
import ListClasses from '../styles/List.module.css';
import ModalClasses from '../styles/Modal.module.css';
import NavLinkClasses from '../styles/NavLink.module.css';
import NotificationClasses from '../styles/Notification.module.css';
import RadioClasses from '../styles/Radio.module.css';
import ScrollAreaClasses from '../styles/ScrollArea.module.css';
import SegmentedControlClasses from '../styles/SegmentedControl.module.css';
import SelectClasses from '../styles/Select.module.css';
import SkeletonClasses from '../styles/Skeleton.module.css';
import StepperClasses from '../styles/Stepper.module.css';
import TabsClasses from '../styles/Tabs.module.css';
import TextClasses from '../styles/Text.module.css';
import TitleClasses from '../styles/Title.module.css';
import {NotificationVars} from '../vars/Notification.vars';
import {TextVars} from '../vars/Text.vars';
import {PlasmaColors} from './PlasmaColors';

export const plasmaTheme: MantineThemeOverride = createTheme({
    // These are overrides over https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-theme.ts
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
            h1: {fontSize: '48px', lineHeight: '1.5', fontWeight: '300'},
            h2: {fontSize: '32px', lineHeight: '1.5', fontWeight: '500'},
            h3: {fontSize: '24px', lineHeight: '1.5', fontWeight: '500'},
            h4: {fontSize: '18px', lineHeight: '1.5', fontWeight: '300'},
            h5: {fontSize: '14px', lineHeight: '1.5', fontWeight: '500'},
            h6: {fontSize: '12px', lineHeight: '1.5', fontWeight: '500'},
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
        ActionIcon: ActionIcon.extend({
            classNames: {root: ActionIconClasses.root},
        }),
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
            classNames: TextClasses,
            vars: TextVars,
        }),
        Button: Button.extend({
            classNames: {root: ButtonClasses.root, label: ButtonClasses.label},
        }),
        Modal: Modal.extend({
            classNames: {
                root: ModalClasses.root,
                content: ModalClasses.content,
                title: ModalClasses.title,
                header: ModalClasses.header,
                body: ModalClasses.body,
            },
        }),
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
                zIndex: 10000,
            },
        }),
        Loader: Loader.extend({
            defaultProps: {
                type: 'dots',
                color: 'action',
                role: 'presentation',
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
            classNames: {label: CheckboxClasses.label, input: CheckboxClasses.input},
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
        Select: Select.extend({
            defaultProps: {withCheckIcon: false, allowDeselect: false},
            classNames: {input: SelectClasses.input, option: SelectClasses.option},
        }),
        Combobox: Combobox.extend({
            classNames: {option: SelectClasses.option},
        }),
        NavLink: NavLink.extend({classNames: NavLinkClasses}),
        AppShellNavbar: AppShellNavbar.extend({
            classNames: {navbar: AppShellNavBarClasses.navbar},
        }),
        ScrollArea: ScrollArea.extend({
            classNames: {viewport: ScrollAreaClasses.viewport},
        }),
        Divider: Divider.extend({
            defaultProps: {
                color: 'gray.3',
            },
        }),
    },
});
