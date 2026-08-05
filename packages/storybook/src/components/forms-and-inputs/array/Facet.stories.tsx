import {Facet} from '@coveord/plasma-mantine/components/Facet';
import {Box} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {faker} from '@faker-js/faker';
import type {ComponentProps} from 'react';
import {Args} from '../../Args.js';
import {withTitleInfoProps} from '../LabelInfoArgs.js';

// Set the seed for faker to avoid mismatch in chromatic
faker.seed(42);

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
            {value: 'apple', label: 'Apple', count: faker.number.int({min: 1, max: 1000}), group: 'Fruits'},
            {value: 'banana', label: 'Banana', count: faker.number.int({min: 1, max: 1000}), group: 'Fruits'},
            {value: 'kiwi', label: 'Kiwi', count: faker.number.int({min: 1, max: 1000}), group: 'Fruits'},
            {value: 'mango', label: 'Mango', count: faker.number.int({min: 1, max: 1000}), group: 'Fruits'},
            {value: 'orange', label: 'Orange', count: faker.number.int({min: 1, max: 1000}), group: 'Fruits'},
            {value: 'pear', label: 'Pear', count: faker.number.int({min: 1, max: 1000}), group: 'Fruits'},
            {value: 'strawberry', label: 'Strawberry', count: faker.number.int({min: 1, max: 1000}), group: 'Fruits'},
            {value: 'broccoli', label: 'Broccoli', count: faker.number.int({min: 1, max: 1000}), group: 'Vegetables'},
            {value: 'carrot', label: 'Carrot', count: faker.number.int({min: 1, max: 1000}), group: 'Vegetables'},
            {value: 'cucumber', label: 'Cucumber', count: faker.number.int({min: 1, max: 1000}), group: 'Vegetables'},
            {value: 'onion', label: 'Onion', count: faker.number.int({min: 1, max: 1000}), group: 'Vegetables'},
            {value: 'pepper', label: 'Pepper', count: faker.number.int({min: 1, max: 1000}), group: 'Vegetables'},
            {value: 'potato', label: 'Potato', count: faker.number.int({min: 1, max: 1000}), group: 'Vegetables'},
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
        removable: {
            control: 'boolean',
            description: 'Determines if the facet is removable',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
    },
    render: (props) => (
        <Box w={280}>
            <Facet {...withTitleInfoProps(props)} />
        </Box>
    ),
};
