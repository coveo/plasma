import {Button, useDisclosure} from '@coveord/plasma-mantine';
import {Prompt} from '@coveord/plasma-mantine/components/Prompt';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Prompt> = {
    title: '@components/layout/Prompt',
    id: 'Prompt',
    component: Prompt,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Prompt>;

export const Default: Story = {
    render: () => {
        const [opened, {open, close}] = useDisclosure();
        return (
            <>
                <Prompt opened={opened} title="Prompt title" onClose={close}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada
                    id sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.
                    <Prompt.Footer>
                        <Prompt.ConfirmButton onClick={close}>Continue</Prompt.ConfirmButton>
                    </Prompt.Footer>
                </Prompt>
                <Button.Primary onClick={open}>Open Prompt</Button.Primary>
            </>
        );
    },
};

export const PromptCritical: Story = {
    render: () => {
        const [opened, {open, close}] = useDisclosure();
        const onCancel = () => {
            console.log('User clicked on cancel');
            close();
        };
        const onConfirm = () => {
            console.log('User clicked on confirm');
            close();
        };
        return (
            <>
                <Prompt variant="critical" opened={opened} title="Prompt title" onClose={close}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada
                    id sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.
                    <Prompt.Footer>
                        <Prompt.CancelButton onClick={onCancel}>Cancel</Prompt.CancelButton>
                        <Prompt.ConfirmButton onClick={onConfirm}>Continue</Prompt.ConfirmButton>
                    </Prompt.Footer>
                </Prompt>
                <Button.Primary onClick={open}>Open Prompt</Button.Primary>
            </>
        );
    },
};

export const PromptSuccess: Story = {
    render: () => {
        const [opened, {open, close}] = useDisclosure();
        return (
            <>
                <Prompt variant="success" opened={opened} title="Prompt title" onClose={close}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada
                    id sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.
                    <Prompt.Footer>
                        <Prompt.ConfirmButton onClick={close}>Continue</Prompt.ConfirmButton>
                    </Prompt.Footer>
                </Prompt>
                <Button.Primary onClick={open}>Open Prompt</Button.Primary>
            </>
        );
    },
};

export const PromptWarning: Story = {
    render: () => {
        const [opened, {open, close}] = useDisclosure();
        const onCancel = () => {
            console.log('User clicked on cancel');
            close();
        };
        const onConfirm = () => {
            console.log('User clicked on confirm');
            close();
        };
        return (
            <>
                <Prompt variant="warning" opened={opened} title="Prompt title" onClose={close}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada
                    id sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.
                    <Prompt.Footer>
                        <Prompt.CancelButton onClick={onCancel}>Cancel</Prompt.CancelButton>
                        <Prompt.ConfirmButton onClick={onConfirm}>Continue</Prompt.ConfirmButton>
                    </Prompt.Footer>
                </Prompt>
                <Button.Primary onClick={open}>Open Prompt</Button.Primary>
            </>
        );
    },
};
