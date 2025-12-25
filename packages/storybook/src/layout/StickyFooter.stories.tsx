import type {StoryObj, Meta} from '@storybook/react-vite';
import {StickyFooter} from '@coveord/plasma-mantine/components/StickyFooter';
import {Button} from '@coveord/plasma-mantine';

const meta: Meta<typeof StickyFooter> = {
    title: '@components/layout/StickyFooter',
    component: StickyFooter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof StickyFooter>;

export const Default: Story = {
    render: () => (
        <StickyFooter borderTop>
            <Button.Secondary>Cancel</Button.Secondary>
            <Button.Primary>Save</Button.Primary>
        </StickyFooter>
    ),
};
