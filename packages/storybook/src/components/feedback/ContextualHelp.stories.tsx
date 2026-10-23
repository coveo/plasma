import {Anchor, ContextualHelp, type ContextualHelpProps} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<ContextualHelpProps> = {
    title: '@components/Feedback/ContextualHelp',
    id: 'ContextualHelp',
    component: ContextualHelp,
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: 'text',
        focusable: true,
        size: 'xs',
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['text', 'interactive'],
            description: 'Use text for plain text content, or interactive for content with links.',
            table: {
                type: {summary: "'text' | 'interactive'"},
                defaultValue: {summary: "'text'"},
            },
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
            description: 'Sets the size of the question icon.',
            table: {
                type: {summary: "'xs' | 'sm' | 'md' | 'lg'"},
                defaultValue: {summary: "'xs'"},
            },
        },
        position: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right', 'top-start', 'bottom-start'],
            description: 'Sets where the help appears relative to the icon.',
            table: {
                type: {summary: 'FloatingPosition'},
                defaultValue: {summary: "'top'"},
            },
        },
        children: {
            control: 'text',
            description: 'Sets the help content. With the interactive variant, the demo appends a link.',
            table: {
                type: {summary: 'ReactNode'},
                defaultValue: {summary: 'undefined'},
            },
        },
        focusable: {
            control: 'boolean',
            description:
                'Renders the icon as a focusable button. Turn it off only inside an interactive container, where the help opens on hover only.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'true'},
            },
        },
        'aria-label': {table: {disable: true}},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({children, ...props}) => (
        <ContextualHelp {...props}>
            {children}
            {props.variant === 'interactive' && (
                <>
                    {' '}
                    <Anchor href="https://docs.coveo.com" target="_blank">
                        Learn more
                    </Anchor>
                </>
            )}
        </ContextualHelp>
    ),
};
