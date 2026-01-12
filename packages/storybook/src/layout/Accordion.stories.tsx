import {Accordion} from '@coveord/plasma-mantine';
import {IconApple, IconAvocado, IconCherry, IconLemon} from '@coveord/plasma-react-icons';
import {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Accordion> = {
    title: '@components/layout/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'filled', 'separated', 'contained', 'unstyled'],
            description: 'Accordion variant',
            table: {
                type: {summary: 'default | filled | separated | contained | unstyled'},
                defaultValue: {summary: 'default'},
            },
        },
        multiple: {
            control: 'boolean',
            description: 'Allow multiple items to be opened at once',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
    },
    args: {
        variant: 'default',
        multiple: false,
    },
    decorators: [
        (Story) => (
            <div style={{width: 400}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Demo: Story = {
    render: (props) => {
        const data = [
            {
                value: 'Apple',
                label: 'Apple',
                icon: <IconApple />,
                description:
                    'Apples are crisp, sweet fruits packed with fiber and vitamin C. They come in many varieties including Granny Smith, Fuji, and Honeycrisp.',
            },
            {
                value: 'Avocado',
                label: 'Avocado',
                icon: <IconAvocado />,
                description:
                    'Avocados are creamy, nutrient-dense fruits rich in healthy fats, potassium, and vitamins. Perfect for guacamole, salads, or toast.',
            },
            {
                value: 'Cherry',
                label: 'Cherry',
                icon: <IconCherry />,
                description:
                    "Cherries are small, sweet or tart stone fruits loaded with antioxidants. They're delicious fresh, dried, or in desserts.",
            },
            {
                value: 'Lemon',
                label: 'Lemon',
                icon: <IconLemon />,
                description:
                    'Lemons are tangy citrus fruits high in vitamin C and antioxidants. Essential for adding bright flavor to drinks, cooking, and baking.',
            },
        ];

        const items = data.map((item) => (
            <Accordion.Item value={item.value} key={item.value}>
                <Accordion.Control icon={item.icon}>{item.label}</Accordion.Control>
                <Accordion.Panel>{item.description}</Accordion.Panel>
            </Accordion.Item>
        ));

        if (props.multiple) {
            return (
                <Accordion defaultValue={['Apple', 'Avocado']} multiple={props.multiple} variant={props.variant}>
                    {items}
                </Accordion>
            );
        }
        return (
            <Accordion defaultValue="Apple" multiple={props.multiple} variant={props.variant}>
                {items}
            </Accordion>
        );
    },
};
