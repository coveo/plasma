import {Image} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Image> = {
    title: '@components/Data display/Image',
    id: 'Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    width: 400,
                    height: 300,
                    border: '2px dashed #ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Story />
            </div>
        ),
    ],
    argTypes: {
        src: {
            control: 'text',
            description: 'Sets the image source URL.',
            table: {
                type: {summary: 'string | null'},
                defaultValue: {summary: 'undefined'},
            },
        },
        alt: {
            control: 'text',
            description: 'Provides a text alternative for the image.',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'undefined'},
            },
        },
        fit: {
            control: 'select',
            options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            description: 'Controls how the image fits within its dimensions.',
            table: {
                type: {summary: "'fill' | 'contain' | 'cover' | 'none' | 'scale-down'"},
                defaultValue: {summary: "'cover'"},
            },
        },
    },
    args: {
        src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
        alt: 'Rocky coast beside the ocean',
        fit: 'cover',
    },
};
export default meta;
type Story = StoryObj<typeof Image>;

export const Demo: Story = {
    render: (props) => <Image {...props} w={400} h={300} />,
};
