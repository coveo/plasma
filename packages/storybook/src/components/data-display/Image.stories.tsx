import {Image} from '@coveord/plasma-mantine/components/Image';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Image> = {
    title: '@components/data-display/Image',
    id: 'Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story: any) => (
            <div
                style={{
                    width: 500,
                    height: 500,
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
            description: 'Image source URL',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: ''},
            },
        },
        fit: {
            control: 'select',
            options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            description: 'How the image should fit within its container',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'cover'},
            },
        },
    },
    args: {
        src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
        fit: 'cover',
    },
};
export default meta;
type Story = StoryObj<typeof Image>;

export const Demo: Story = {
    render: (props: any) => <Image {...props} w={500} h={500} />,
};
