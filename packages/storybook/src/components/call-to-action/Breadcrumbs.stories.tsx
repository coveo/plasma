import {Anchor} from '@coveord/plasma-mantine/components/Anchor';
import {Breadcrumbs} from '@coveord/plasma-mantine/components/Breadcrumbs';
import {Flex} from '@coveord/plasma-mantine/components/Flex';
import {Text} from '@coveord/plasma-mantine/components/Text';
import {IconChevronLeft} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Breadcrumbs> = {
    title: '@components/call-to-action/Breadcrumbs',
    id: 'Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        layout: 'centered',
    },
    args: {
        level: 1,
    } as any,
    argTypes: {
        level: {
            control: {type: 'number', min: 1, max: 3},
            description: 'The level of the breadcrumb',
            table: {
                defaultValue: {summary: '1'},
                type: {summary: 'number'},
            },
        },
    } as any,
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Demo: Story = {
    render: (props: any) => {
        switch (props.level) {
            case 2:
                return (
                    <Breadcrumbs>
                        <Anchor href="#" inherit>
                            Grand parent
                        </Anchor>
                        <Anchor href="#" inherit>
                            Parent
                        </Anchor>
                        <Text inherit>Current</Text>
                    </Breadcrumbs>
                );
            case 3:
                return (
                    <Breadcrumbs>
                        <Anchor href="#" inherit>
                            Great grand parent
                        </Anchor>
                        <Anchor href="#" inherit>
                            Grand parent
                        </Anchor>
                        <Anchor href="#" inherit>
                            Parent
                        </Anchor>
                        <Text inherit>Current</Text>
                    </Breadcrumbs>
                );
            case 1:
            default:
                return (
                    <Breadcrumbs>
                        <Anchor href="#" inherit>
                            <Flex align="center">
                                <IconChevronLeft aria-label="arrow pointing back" size={16} />
                                Parent
                            </Flex>
                        </Anchor>
                        <Text inherit>Current</Text>
                    </Breadcrumbs>
                );
        }
    },
};
