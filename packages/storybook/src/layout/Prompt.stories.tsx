import {Prompt, type PromptProps} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';

type PromptTypes = 'Information' | 'Success' | 'Warning' | 'Critical';

type PromptStoryArgs = PromptProps & {
    type: PromptTypes;
};

const meta: Meta<PromptStoryArgs> = {
    title: '@components/layout/Prompt',
    id: 'Prompt',
    component: Prompt.Information,
    args: {
        opened: true,
        title: 'Title',
        type: 'Information',
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['Information', 'Success', 'Warning', 'Critical'] as PromptTypes[],
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({type, ...args}) => {
        const [{opened}, updateArgs] = useArgs();
        const close = () => updateArgs({opened: false});
        const Component = Prompt[type];
        return (
            <Component opened={opened} title={args.title} onClose={close}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id
                sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.
                <Prompt.Footer>
                    <Prompt.CancelButton onClick={close}>Cancel</Prompt.CancelButton>
                    <Prompt.ConfirmButton onClick={close}>Continue</Prompt.ConfirmButton>
                </Prompt.Footer>
            </Component>
        );
    },
};
