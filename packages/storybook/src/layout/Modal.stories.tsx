import type {StoryObj, Meta} from '@storybook/react-vite';
import {Modal} from '@coveord/plasma-mantine/components/Modal';
import {useState} from 'react';
import {Button, Tabs} from '@coveord/plasma-mantine';

const meta: Meta<typeof Modal> = {
    title: '@components/layout/Modal',
    id: 'Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: () => {
        const [opened, setOpened] = useState(false);
        return (
            <>
                <Modal
                    size="md"
                    opened={opened}
                    title="Modal Title"
                    description="Modal description"
                    help={{href: 'https://about:blank', label: 'Tooltip text'}}
                    onClose={() => setOpened(false)}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada
                    id sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.
                    Phasellus lacinia sem nunc, vel dapibus odio suscipit id. Aenean lobortis sollicitudin suscipit.
                    Cras vitae ipsum sit amet nibh efficitur imperdiet. Praesent scelerisque erat est. Cras dictum
                    sodales tellus sed pretium
                    <Modal.Footer>
                        <Button.Tertiary onClick={() => setOpened(false)}>Cancel</Button.Tertiary>
                        <Button.Primary onClick={() => setOpened(false)}>Accept</Button.Primary>
                    </Modal.Footer>
                </Modal>
                <Button.Primary onClick={() => setOpened(true)}>Open Modal</Button.Primary>
            </>
        );
    },
};

export const ModalWithTabs: Story = {
    render: () => {
        const [opened, setOpened] = useState(false);
        return (
            <>
                <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Modal Title"
                    description="Modal description"
                    help={{href: 'https://about:blank', label: 'Tooltip text'}}
                >
                    <Tabs defaultValue="tab-1" mih={500}>
                        <Tabs.List>
                            <Tabs.Tab value="tab-1">Tab 1</Tabs.Tab>
                            <Tabs.Tab value="tab-2">Tab 2</Tabs.Tab>
                            <Tabs.Tab value="tab-3">Tab 3</Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="tab-1">Tab 1 content</Tabs.Panel>
                        <Tabs.Panel value="tab-2">Tab 2 content</Tabs.Panel>
                        <Tabs.Panel value="tab-3">Tab 3 content</Tabs.Panel>
                    </Tabs>
                    <Modal.Footer>
                        <Button.Tertiary onClick={() => setOpened(false)}>Cancel</Button.Tertiary>
                        <Button.Primary>Save</Button.Primary>
                    </Modal.Footer>
                </Modal>
                <Button.Primary onClick={() => setOpened(true)}>Open Modal</Button.Primary>
            </>
        );
    },
};
