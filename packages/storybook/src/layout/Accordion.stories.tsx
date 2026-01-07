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
        switch (props.multiple) {
            case true:
                return (
                    <Accordion defaultValue={['Apple', 'Avocado']} multiple={props.multiple} variant={props.variant}>
                        <Accordion.Item value="Apple">
                            <Accordion.Control icon={<IconApple />}>Apple</Accordion.Control>
                            <Accordion.Panel>
                                Apples are crisp, sweet fruits packed with fiber and vitamin C. They come in many
                                varieties including Granny Smith, Fuji, and Honeycrisp.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Avocado">
                            <Accordion.Control icon={<IconAvocado />}>Avocado</Accordion.Control>
                            <Accordion.Panel>
                                Avocados are creamy, nutrient-dense fruits rich in healthy fats, potassium, and
                                vitamins. Perfect for guacamole, salads, or toast.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Cherry">
                            <Accordion.Control icon={<IconCherry />}>Cherry</Accordion.Control>
                            <Accordion.Panel>
                                Cherries are small, sweet or tart stone fruits loaded with antioxidants. They're
                                delicious fresh, dried, or in desserts.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Lemon">
                            <Accordion.Control icon={<IconLemon />}>Lemon</Accordion.Control>
                            <Accordion.Panel>
                                Lemons are tangy citrus fruits high in vitamin C and antioxidants. Essential for adding
                                bright flavor to drinks, cooking, and baking.
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                );
            default:
                return (
                    <Accordion defaultValue="Apple" multiple={props.multiple} variant={props.variant}>
                        <Accordion.Item value="Apple">
                            <Accordion.Control icon={<IconApple />}>Apple</Accordion.Control>
                            <Accordion.Panel>
                                Apples are crisp, sweet fruits packed with fiber and vitamin C. They come in many
                                varieties including Granny Smith, Fuji, and Honeycrisp.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Avocado">
                            <Accordion.Control icon={<IconAvocado />}>Avocado</Accordion.Control>
                            <Accordion.Panel>
                                Avocados are creamy, nutrient-dense fruits rich in healthy fats, potassium, and
                                vitamins. Perfect for guacamole, salads, or toast.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Cherry">
                            <Accordion.Control icon={<IconCherry />}>Cherry</Accordion.Control>
                            <Accordion.Panel>
                                Cherries are small, sweet or tart stone fruits loaded with antioxidants. They're
                                delicious fresh, dried, or in desserts.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Lemon">
                            <Accordion.Control icon={<IconLemon />}>Lemon</Accordion.Control>
                            <Accordion.Panel>
                                Lemons are tangy citrus fruits high in vitamin C and antioxidants. Essential for adding
                                bright flavor to drinks, cooking, and baking.
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                );
        }
    },
};
