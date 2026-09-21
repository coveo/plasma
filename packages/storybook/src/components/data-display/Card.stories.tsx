import {Card, type CardProps, Stack, Text, Title} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';

type CardStoryArgs = Omit<CardProps, 'children' | 'mod'> & {
    disabled: boolean;
    selected: boolean;
};

const meta: Meta<CardStoryArgs> = {
    title: '@components/Data display/Card',
    id: 'Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: undefined,
        disabled: false,
        selected: false,
    },
    argTypes: {
        variant: {
            control: 'select',
            options: [undefined, 'hover'],
            description: 'Adds hover styling when the entire card is interactive.',
            table: {
                type: {summary: "'hover' | undefined"},
                defaultValue: {summary: 'undefined'},
            },
        },
        disabled: {
            control: 'boolean',
            if: {arg: 'variant', eq: 'hover'},
            description: 'Disables interaction for the hover card in this example.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        selected: {
            control: 'boolean',
            if: {arg: 'variant', eq: 'hover'},
            description: 'Sets the selected state of the hover card in this example.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({disabled, selected, variant, ...props}) => {
        const [, updateArgs] = useArgs<CardStoryArgs>();
        const interactive = variant === 'hover';
        const activate = () => {
            if (interactive && !disabled) {
                updateArgs({selected: !selected});
            }
        };

        return (
            <Card
                {...props}
                variant={variant}
                mod={interactive ? {disabled, selected} : undefined}
                onClick={interactive ? activate : undefined}
                onKeyDown={
                    interactive
                        ? (event) => {
                              if (event.key === 'Enter' || event.key === ' ') {
                                  event.preventDefault();
                                  activate();
                              }
                          }
                        : undefined
                }
                role={interactive ? 'button' : undefined}
                tabIndex={interactive && !disabled ? 0 : undefined}
                aria-pressed={interactive ? selected : undefined}
                aria-disabled={interactive ? disabled : undefined}
                w={280}
            >
                <Stack gap="xxs">
                    <Title order={4}>Search analytics</Title>
                    <Text c="dimmed">Review usage trends and identify opportunities to improve search relevance.</Text>
                </Stack>
            </Card>
        );
    },
};
