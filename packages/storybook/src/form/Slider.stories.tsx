import {Slider, SliderProps} from '@coveord/plasma-mantine/components/Slider';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Slider> = {
    title: '@components/feedback/Slider',
    component: Slider,
    decorators: [
        (Story) => (
            <div style={{width: 500}}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    args: {
        disabled: false,
        showLabelOnHover: true,
        labelAlwaysOn: false,
        marks: [
            {value: 25, label: '25%'},
            {value: 50, label: '50%'},
            {value: 75, label: '75%'},
        ],
    },
    argTypes: {
        disabled: {
            control: 'boolean',
            table: {
                defaultValue: {summary: ''},
            },
        },
        showLabelOnHover: {
            control: 'boolean',
            table: {
                defaultValue: {summary: ''},
            },
        },
        labelAlwaysOn: {
            control: 'boolean',
            table: {
                defaultValue: {summary: ''},
            },
        },
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Slider>;

const Content = (props: SliderProps) => <Slider {...props} />;
Content.displayName = 'Slider';

export const Demo: Story = {
    render: ({disabled, showLabelOnHover, labelAlwaysOn, marks}) => (
        <Content
            disabled={disabled}
            showLabelOnHover={showLabelOnHover ? undefined : false}
            labelAlwaysOn={labelAlwaysOn}
            marks={marks}
        />
    ),
};
