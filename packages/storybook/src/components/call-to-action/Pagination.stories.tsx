import {Pagination} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';

const meta: Meta<typeof Pagination> = {
    title: '@components/Call to action/Pagination',
    id: 'Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    args: {
        total: 10,
    },
    argTypes: {
        total: {
            control: {type: 'number', min: 2},
            description: 'Sets the total number of pages.',
            table: {
                type: {summary: 'number'},
                defaultValue: {summary: 'undefined'},
            },
        },
        siblings: {
            control: {type: 'number', min: 0},
            description: 'Sets the pages shown on each side of the active page.',
            table: {
                defaultValue: {summary: '1'},
                type: {summary: 'number'},
            },
        },
        boundaries: {
            control: {type: 'number', min: 0},
            description: 'Sets the pages always shown at the start and end.',
            table: {
                defaultValue: {summary: '1'},
                type: {summary: 'number'},
            },
        },
        withEdges: {
            control: 'boolean',
            description: 'Shows first-page and last-page controls.',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disables all pagination controls.',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        value: {table: {disable: true}},
        onChange: {table: {disable: true}},
    },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Demo: Story = {
    render: (props) => {
        const [activePage, setActivePage] = useState(1);
        return <Pagination {...props} value={activePage} onChange={setActivePage} />;
    },
};
