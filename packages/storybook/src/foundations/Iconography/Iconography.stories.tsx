import type {StoryObj, Meta} from '@storybook/react-vite';
import {Tooltip} from '@coveord/plasma-mantine/components/Tooltip';
import {IconCurrencyDollar} from '@coveord/plasma-react-icons';

const meta: Meta<typeof Tooltip> = {
    title: '@components/foundations/Iconography',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Iconography: Story = {
    render: () => (
        <div style={{color: 'green'}}>
            <Tooltip label="Dollar" position="left">
                <IconCurrencyDollar size={64} />
            </Tooltip>
        </div>
    ),
};
