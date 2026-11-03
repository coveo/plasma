import {Box, RadioCard} from '@coveord/plasma-mantine';
import {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {useArgs} from 'storybook/preview-api';
import {InlineInputArgs, type InlineInputStoryArgs} from '../InputWrapperArgs.js';
import {Args} from '../../../Args.js';
import {withLabelContextualHelpProps} from '../ContextualHelpArgs.js';

type RadioCardStoryArgs = ComponentProps<typeof RadioCard> & InlineInputStoryArgs;

const meta = {
    title: '@components/Forms and inputs/string/RadioCard',
    id: 'RadioCard',
    component: RadioCard,
    parameters: {
        layout: 'centered',
        controls: {
            include: [
                'label',
                'contextualHelp',
                'description',
                'error',
                'checked',
                'disabled',
                'readOnly',
                'disabledTooltip',
            ],
        },
    },
    argTypes: {
        ...InlineInputArgs.ArgsTypes,
        contextualHelp: Args.contextualHelp.type,
        checked: {
            control: 'boolean',
            description: 'Sets the selected state of the card.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        disabledTooltip: {
            control: 'text',
            description: 'Explains why the card is unavailable when disabled.',
            table: {type: {summary: 'string'}, defaultValue: {summary: 'undefined'}},
        },
    },
    args: {
        ...InlineInputArgs.Args,
        checked: false,
        disabledTooltip: 'Disabled tooltip example',
    },
} satisfies Meta<RadioCardStoryArgs>;
export default meta;

type Story = StoryObj<RadioCardStoryArgs>;
export const Demo: Story = {
    render: (props) => {
        const [{checked}, updateArgs] = useArgs<RadioCardStoryArgs>();
        const onClick = () => updateArgs({checked: !checked});

        return (
            <Box w={280}>
                <RadioCard {...withLabelContextualHelpProps(props)} onClick={onClick} />
            </Box>
        );
    },
};
