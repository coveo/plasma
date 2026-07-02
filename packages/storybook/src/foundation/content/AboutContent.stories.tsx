import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta = {
    title: '@foundation/Content/About',
    id: 'content-about',
    tags: ['!dev'],
    parameters: {
        layout: 'padded',
        controls: {disable: true},
    },
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {};
