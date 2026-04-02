import {InfoToken, type InfoTokenProps} from '@coveord/plasma-mantine/components/InfoToken';
import type {Meta, StoryObj} from '@storybook/react-vite';

type InfoTokenTypes = keyof typeof InfoToken;

type InfoTokenStoryArgs = InfoTokenProps & {
    type: InfoTokenTypes;
};

const meta: Meta<InfoTokenStoryArgs> = {
    title: '@components/feedback/InfoToken',
    id: 'InfoToken',
    component: InfoToken.Information,
    parameters: {
        layout: 'centered',
    },
    args: {
        type: 'Information',
        variant: 'outline',
        size: 'xs',
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['Information', 'Advice', 'Success', 'Warning', 'Error', 'Question'] as InfoTokenTypes[],
            table: {
                defaultValue: {summary: 'Information'},
            },
        },
        variant: {
            control: 'select',
            options: ['outline', 'light'],
            table: {
                defaultValue: {summary: 'Information'},
            },
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
            table: {
                defaultValue: {summary: 'xs'},
                type: {summary: 'sm | lg'},
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({type, variant, ...props}) => {
        const Component = InfoToken[type];
        return <Component variant={variant} {...props} />;
    },
};
