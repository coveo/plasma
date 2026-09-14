import {Anchor, Breadcrumbs, Flex} from '@coveord/plasma-mantine';
import {IconChevronLeft} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';

interface BreadcrumbsStoryArgs {
    ancestorCount: 1 | 2 | 3;
}

const meta: Meta<BreadcrumbsStoryArgs> = {
    title: '@components/Call to action/Breadcrumbs',
    id: 'Breadcrumbs',
    parameters: {
        layout: 'centered',
    },
    args: {
        ancestorCount: 1,
    },
    argTypes: {
        ancestorCount: {
            control: 'inline-radio',
            options: [1, 2, 3],
            description: 'Sets the number of ancestor links shown in this example.',
            table: {
                defaultValue: {summary: '1'},
                type: {summary: '1 | 2 | 3'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({ancestorCount}) => {
        switch (ancestorCount) {
            case 2:
                return (
                    <Breadcrumbs>
                        <Anchor href="#" inherit>
                            Grandparent
                        </Anchor>
                        <Anchor href="#" inherit>
                            Parent
                        </Anchor>
                    </Breadcrumbs>
                );
            case 3:
                return (
                    <Breadcrumbs>
                        <Anchor href="#" inherit>
                            Great-grandparent
                        </Anchor>
                        <Anchor href="#" inherit>
                            Grandparent
                        </Anchor>
                        <Anchor href="#" inherit>
                            Parent
                        </Anchor>
                    </Breadcrumbs>
                );
            case 1:
            default:
                return (
                    <Breadcrumbs>
                        <Anchor href="#" inherit>
                            <Flex align="center">
                                <IconChevronLeft aria-hidden="true" size={16} />
                                Parent
                            </Flex>
                        </Anchor>
                    </Breadcrumbs>
                );
        }
    },
};
