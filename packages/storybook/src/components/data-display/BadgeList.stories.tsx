import {BadgeList, type BadgeListProps} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<BadgeListProps> = {
    title: '@components/Data display/BadgeList',
    id: 'BadgeList',
    component: BadgeList,
    parameters: {
        layout: 'centered',
    },
    args: {
        data: ['Homepage banner', 'Product detail page', 'Search results', 'Cart', 'Checkout'],
        maxDisplayed: 2,
        emptyLabel: 'No placement',
    },
    argTypes: {
        maxDisplayed: {control: {type: 'number', min: 0}},
        maxItemWidth: {control: {type: 'number', min: 0}},
        emptyLabel: {control: 'text'},
    },
};
export default meta;
type Story = StoryObj<BadgeListProps>;

export const Demo: Story = {};

export const Truncated: Story = {
    args: {maxItemWidth: 80},
};

export const Empty: Story = {
    args: {data: []},
};
