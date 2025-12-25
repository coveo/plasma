import {Skeleton} from '@coveord/plasma-mantine/components/Skeleton';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Skeleton> = {
    title: '@components/feedback/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    args: {
        height: 16,
        width: 320,
    },
    argTypes: {
        height: {
            control: 'number',
            description: 'Height of the skeleton',
            table: {
                type: {summary: 'number | string'},
            },
        },
        width: {
            control: 'number',
            description: 'Width of the skeleton',
            table: {
                type: {summary: 'number | string'},
            },
        },
        circle: {
            control: 'boolean',
            description: 'If true, border-radius will be set to 50%',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        animate: {
            control: 'boolean',
            description: 'Determines whether skeleton should be animated',
            table: {
                defaultValue: {summary: 'true'},
                type: {summary: 'boolean'},
            },
        },
        visible: {
            control: 'boolean',
            description: 'Determines whether skeleton is visible',
            table: {
                defaultValue: {summary: 'true'},
                type: {summary: 'boolean'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Demo: Story = {
    render: (props: any) => <Skeleton {...props} />,
};
