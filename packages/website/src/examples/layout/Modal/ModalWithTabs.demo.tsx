import {Button, Modal, Tabs} from '@coveord/plasma-mantine';
import {useState} from 'react';

const Demo = () => {
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
};
export default Demo;
