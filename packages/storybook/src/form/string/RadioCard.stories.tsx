import {RadioCard} from '@coveord/plasma-mantine/components/RadioCard';
import {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {useArgs} from 'storybook/preview-api';
import {InlineInputArgs, type InlineInputStoryArgs} from '../InputWrapperArgs.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';

const meta: Meta<typeof RadioCard> = {
    title: '@components/form/string/RadioCard',
    id: 'RadioCard',
    component: RadioCard,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        ...InlineInputArgs.ArgsTypes,
        checked: {
            control: 'boolean',
            description: 'Checked state',
        },
        disabledTooltip: {
            control: 'text',
            description: 'The tooltip message to display when disabled',
        },
    },
    args: {
        ...InlineInputArgs.Args,
        checked: false,
        disabledTooltip: 'Disabled tooltip example',
    },
};
export default meta;
type RadioCardStoryArgs = ComponentProps<typeof RadioCard> & InlineInputStoryArgs;

type Story = StoryObj<RadioCardStoryArgs>;
export const Demo: Story = {
    render: (props) => {
        const [{checked}, updateArgs] = useArgs<RadioCardStoryArgs>();
        const onClick = () => updateArgs({checked: !checked});

        return <RadioCard {...withLabelInfoProps(props)} onClick={onClick} />;
    },
};
