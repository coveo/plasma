import {ScrollArea} from '@coveord/plasma-mantine/components/ScrollArea';
import {faker} from '@faker-js/faker';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof ScrollArea> = {
    title: '@components/layout/ScrollArea',
    id: 'ScrollArea',
    component: ScrollArea,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        h: {
            control: {type: 'number', max: 550},
            description: 'Height of the scroll area',
            table: {
                type: {summary: 'string | number'},
                defaultValue: {summary: '100%'},
            },
        },
    },
    args: {
        h: 250,
    },
    decorators: [
        (Story: any) => (
            <div style={{width: 300, border: '2px dashed #ccc'}}>
                <Story />
            </div>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Demo: Story = {
    render: (props: any) => <ScrollArea {...props}>{faker.lorem.paragraph(30)}</ScrollArea>,
};
