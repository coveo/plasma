import type {StoryObj, Meta} from '@storybook/react-vite';
import {BrowserPreview} from '@coveord/plasma-mantine/components/BrowserPreview';
import {Center} from '@coveord/plasma-mantine/components/Center';

const Placeholder = () => (
    <Center
        c="var(--mantine-color-blue-text)"
        bg="var(--mantine-color-blue-light)"
        fw="var(--coveo-fw-bold)"
        bd="2px dashed var(--mantine-color-blue-filled)"
        bdrs="sm"
        mih={224}
        miw={400}
    >
        Children
    </Center>
);
Placeholder.displayName = 'Placeholder';

const meta: Meta<typeof BrowserPreview> = {
    title: '@components/layout/BrowserPreview',
    id: 'BrowserPreview',
    component: BrowserPreview,
    parameters: {
        layout: 'centered',
    },
    tags: ['!autodocs'],
    argTypes: {
        title: {control: 'text'},
        headerTooltip: {control: 'text'},
    },
};
export default meta;
type Story = StoryObj<typeof BrowserPreview>;

export const Demo: Story = {
    args: {
        title: 'Preview Title',
        headerTooltip: 'Tooltip',
    },
    render: (args) => (
        <BrowserPreview {...args}>
            <Placeholder />
        </BrowserPreview>
    ),
};
