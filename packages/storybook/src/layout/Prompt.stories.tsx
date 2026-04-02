import {Prompt, PromptVariant} from '@coveord/plasma-mantine/components/Prompt';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';

const meta: Meta<typeof Prompt> = {
    title: '@components/layout/Prompt',
    id: 'Prompt',
    component: Prompt,
    args: {
        opened: true,
        title: 'Title',
        variant: 'info',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['info', 'success', 'warning', 'critical'] as PromptVariant[],
        },
    },
};
export default meta;
type Story = StoryObj<typeof Prompt>;

export const Demo: Story = {
    render: (args) => {
        const [{opened}, updateArgs] = useArgs();
        const close = () => updateArgs({opened: false});
        return (
            <Prompt variant={args.variant} opened={opened} title={args.title} onClose={close}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id
                sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.
                <Prompt.Footer>
                    <Prompt.CancelButton onClick={close}>Cancel</Prompt.CancelButton>
                    <Prompt.ConfirmButton onClick={close}>Continue</Prompt.ConfirmButton>
                </Prompt.Footer>
            </Prompt>
        );
    },
};
