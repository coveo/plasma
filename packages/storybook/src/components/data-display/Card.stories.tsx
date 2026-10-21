import {Card, type CardProps} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';
import {Placeholder} from '../../Placeholder.js';

type CardStoryArgs = Omit<CardProps, 'children' | 'mod'> & {
    disabled: boolean;
    selected: boolean;
    section: boolean;
    sectionInheritPadding: boolean;
    sectionWithBorder: boolean;
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
        section: false,
        sectionInheritPadding: false,
        sectionWithBorder: true,
    },
    argTypes: {
        variant: {
            control: 'select',
            options: [undefined, 'hover'],
            description: 'Adds hover styling when the entire card is interactive.',
            table: {
                category: 'Card',
                type: {summary: "'hover' | undefined"},
                defaultValue: {summary: 'undefined'},
            },
        },
        disabled: {
            control: 'boolean',
            if: {arg: 'variant', eq: 'hover'},
            description: 'Disables interaction for the hover card in this example.',
            table: {
                category: 'Card',
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        selected: {
            control: 'boolean',
            if: {arg: 'variant', eq: 'hover'},
            description: 'Sets the selected state of the hover card in this example.',
            table: {
                category: 'Card',
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        section: {
            control: 'boolean',
            description: 'Adds a `Card.Section` with placeholder content in this example.',
            table: {
                category: 'Card.Section',
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        sectionInheritPadding: {
            name: 'inheritPadding',
            control: 'boolean',
            if: {arg: 'section'},
            description: 'Applies the parent card horizontal padding to the section.',
            table: {
                category: 'Card.Section',
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        sectionWithBorder: {
            name: 'withBorder',
            control: 'boolean',
            if: {arg: 'section'},
            description: 'Adds top and bottom borders to the section, except on the first and last sections.',
            table: {
                category: 'Card.Section',
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({disabled, selected, section, sectionInheritPadding, sectionWithBorder, variant, ...props}) => {
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
                {section && (
                    <Card.Section inheritPadding={sectionInheritPadding} withBorder={sectionWithBorder}>
                        <Placeholder h={80}>Card.Section</Placeholder>
                    </Card.Section>
                )}
                <Placeholder h={80}>Card Content</Placeholder>
            </Card>
        );
    },
};
