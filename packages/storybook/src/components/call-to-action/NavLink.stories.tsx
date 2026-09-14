import {Badge, NavLink, type NavLinkProps} from '@coveord/plasma-mantine';
import {IconHome2} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';

type NavLinkStoryArgs = Omit<NavLinkProps, 'leftSection' | 'rightSection'> & {
    activeChild?: 0 | 1 | 2;
    href: string;
    withLeftSection: boolean;
    withRightSection: boolean;
};

const meta: Meta<NavLinkStoryArgs> = {
    title: '@components/Call to action/NavLink',
    id: 'NavLink',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Sets the main link label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the navigation link.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        href: {
            control: 'text',
            description: 'Sets the link destination.',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'undefined'},
            },
        },
        active: {
            control: 'boolean',
            description: 'Applies the current-page styling.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        withRightSection: {
            control: 'boolean',
            description: 'Toggles a badge after the label in this example.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        withLeftSection: {
            control: 'boolean',
            description: 'Toggles an icon before the label in this example.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
    },
    args: {
        label: 'Home',
        disabled: false,
        href: '#',
        active: false,
        withRightSection: false,
        withLeftSection: false,
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    decorators: [
        (Story) => (
            <div style={{width: 200}}>
                <Story />
            </div>
        ),
    ],
    render: ({withLeftSection, withRightSection, ...props}) => (
        <NavLink
            {...props}
            leftSection={withLeftSection ? <IconHome2 size={16} /> : undefined}
            rightSection={withRightSection ? <Badge.Primary>New</Badge.Primary> : undefined}
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
        activeChild: {
            control: 'select',
            options: [0, 1, 2],
            description: 'Selects the active child link in this example.',
            table: {
                type: {summary: '0 | 1 | 2'},
                defaultValue: {summary: 'undefined'},
            },
        },
    },
    args: {
        activeChild: undefined,
    },
    render: ({activeChild, withLeftSection, withRightSection, ...props}) => (
        <NavLink
            {...props}
            leftSection={withLeftSection ? <IconHome2 size={16} /> : undefined}
            rightSection={withRightSection ? <Badge.Primary>New</Badge.Primary> : undefined}
        >
            <NavLink label="Child Link 1" href="#" active={activeChild === 0} />
            <NavLink label="Child Link 2" href="#" active={activeChild === 1} />
            <NavLink label="Child Link 3" href="#" active={activeChild === 2} />
        </NavLink>
    ),
};
