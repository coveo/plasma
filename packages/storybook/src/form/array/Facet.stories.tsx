import {Facet} from '@coveord/plasma-mantine/components/Facet';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {Args} from '../../Args.js';
import {withTitleInfoProps} from '../LabelInfoArgs.js';

type FacetStoryArgs = ComponentProps<typeof Facet> & {
    labelInfo?: string;
};

const meta = {
    title: '@components/form/array/Facet',
    id: 'Facet',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<FacetStoryArgs>;
export default meta;
type Story = StoryObj<FacetStoryArgs>;

export const Demo: Story = {
    args: {
        title: 'Title',
        labelInfo: Args.labelInfo.initialValue,
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
        labelInfo: Args.labelInfo.type,
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
    render: (props) => <Facet {...withTitleInfoProps(props)} />,
};
