import {Button} from '@coveord/plasma-mantine';
import {StickyFooter} from '@coveord/plasma-mantine/components/StickyFooter';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof StickyFooter> = {
    title: '@components/layout/StickyFooter',
    id: 'StickyFooter',
    component: StickyFooter,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        borderTop: {
            control: 'boolean',
            description: 'Whether to show a border on the top of the footer',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
    },
    args: {
        borderTop: false,
    },
    decorators: [
        (Story: any) => (
            <div
                style={{
                    width: 1000,
                }}
            >
                <Story />
            </div>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof StickyFooter>;

export const Default: Story = {
    render: (props) => (
        <StickyFooter {...props}>
            <Button.Secondary>Cancel</Button.Secondary>
            <Button.Secondary>Back</Button.Secondary>
            <Button.Primary>Save</Button.Primary>
        </StickyFooter>
    ),
};
