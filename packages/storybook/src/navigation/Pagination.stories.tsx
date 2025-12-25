import {Pagination} from '@coveord/plasma-mantine/components/Pagination';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';

const meta: Meta<typeof Pagination> = {
    title: '@components/navigation/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    args: {
        total: 10,
    },
    argTypes: {
        total: {
            control: 'number',
            description: 'Total number of pages',
            table: {
                type: {summary: 'number'},
            },
        },
        siblings: {
            control: 'number',
            description: 'Number of siblings on each side of the current page',
            table: {
                defaultValue: {summary: '1'},
                type: {summary: 'number'},
            },
        },
        boundaries: {
            control: 'number',
            description: 'Number of elements visible on each side of the pagination',
            table: {
                defaultValue: {summary: '1'},
                type: {summary: 'number'},
            },
        },
        withEdges: {
            control: 'boolean',
            description: 'Show first/last page buttons',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disable all controls',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Demo: Story = {
    render: (props: any) => {
        const [activePage, setActivePage] = useState(1);
        return <Pagination value={activePage} onChange={setActivePage} {...props} />;
    },
};
