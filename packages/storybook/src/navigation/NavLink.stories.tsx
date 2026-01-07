import {Badge} from '@coveord/plasma-mantine';
import {NavLink} from '@coveord/plasma-mantine/components/NavLink';
import {IconHome2} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {BaseInputArgs, InputWrapperArgs} from '../form/InputWrapperArgs.js';

const meta: Meta<typeof NavLink> = {
    title: '@components/navigation/NavLink',
    component: NavLink,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: InputWrapperArgs.ArgsTypes.label,
        disabled: BaseInputArgs.ArgsTypes.disabled,
        href: {
            control: 'text',
            description: 'The href of the NavLink',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: '#'},
            },
        },
    } as any,
    args: {
        label: 'NavLink',
        disabled: false,
        href: '#',
    },
};
export default meta;
type Story = StoryObj<typeof NavLink>;

export const Demo: Story = {
    argTypes: {
        active: {
            control: 'boolean',
            description: 'Whether the NavLink is active',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        rightSection: {
            control: 'boolean',
            description: 'Right section content',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
        leftSection: {
            control: 'boolean',
            description: 'Left section content',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
    },
    args: {
        active: false,
        rightSection: false,
        leftSection: false,
    },
    render: (props: any) => (
        <NavLink
            {...props}
            leftSection={props.leftSection ? <IconHome2 size={16} /> : undefined}
            rightSection={props.rightSection ? <Badge.Primary>New</Badge.Primary> : undefined}
        />
    ),
};

export const WithChildren: Story = {
    decorators: [
        (Story: any) => (
            <div style={{width: 200}}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        activeChildren: {
            control: 'select',
            options: [0, 1, 2],
            description: 'Index of the active child NavLink',
            table: {
                type: {summary: 'number'},
                defaultValue: {summary: 'undefined'},
            },
        },
    },
    args: {
        activeChildren: undefined,
    },
    render: (props: any) => (
        <NavLink {...props} leftSection={props.leftSection ? <IconHome2 size={16} /> : undefined}>
            <NavLink label="Child Link 1" href="#" active={props.activeChildren === 0} />
            <NavLink label="Child Link 2" href="#" active={props.activeChildren === 1} />
            <NavLink label="Child Link 3" href="#" active={props.activeChildren === 2} />
        </NavLink>
    ),
};
