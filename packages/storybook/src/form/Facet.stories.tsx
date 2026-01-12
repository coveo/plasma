import {Facet} from '@coveord/plasma-mantine/components/Facet';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../Args.js';

const meta: Meta<typeof Facet> = {
    title: '@components/form/Facet',
    component: Facet,
    parameters: {
        layout: 'centered',
    },
};
export default meta;
type Story = StoryObj<typeof Facet>;

export const Demo: Story = {
    args: {
        title: 'Title',
        data: [
            {value: 'apple', label: 'Apple', count: Math.floor(Math.random() * 1000), group: 'Fruits'},
            {value: 'banana', label: 'Banana', count: Math.floor(Math.random() * 1000), group: 'Fruits'},
            {value: 'kiwi', label: 'Kiwi', count: Math.floor(Math.random() * 1000), group: 'Fruits'},
            {value: 'mango', label: 'Mango', count: Math.floor(Math.random() * 1000), group: 'Fruits'},
            {value: 'orange', label: 'Orange', count: Math.floor(Math.random() * 1000), group: 'Fruits'},
            {value: 'pear', label: 'Pear', count: Math.floor(Math.random() * 1000), group: 'Fruits'},
            {value: 'strawberry', label: 'Strawberry', count: Math.floor(Math.random() * 1000), group: 'Fruits'},
            {value: 'broccoli', label: 'Broccoli', count: Math.floor(Math.random() * 1000), group: 'Vegetables'},
            {value: 'carrot', label: 'Carrot', count: Math.floor(Math.random() * 1000), group: 'Vegetables'},
            {value: 'cucumber', label: 'Cucumber', count: Math.floor(Math.random() * 1000), group: 'Vegetables'},
            {value: 'onion', label: 'Onion', count: Math.floor(Math.random() * 1000), group: 'Vegetables'},
            {value: 'pepper', label: 'Pepper', count: Math.floor(Math.random() * 1000), group: 'Vegetables'},
            {value: 'potato', label: 'Potato', count: Math.floor(Math.random() * 1000), group: 'Vegetables'},
        ],
        initialSelection: ['banana'],
        searchPlaceholder: 'Search',
    },
    argTypes: {
        nothingFound: {
            control: 'text',
            table: {
                defaultValue: {summary: 'No matching items'},
            },
        },
        placeholder: Args.placeholder.type,
        limit: {
            control: 'number',
            description: 'Limit amount of items showed at a time',
            table: {
                defaultValue: {summary: 'Infinity'},
            },
        },
        hideSearch: {
            control: 'boolean',
            description: 'Hides the search bar',
            table: {
                defaultValue: {summary: 'data.length <= 7'},
            },
        },
    },
};
