import {Button, Header, Modal, Tabs} from '@coveord/plasma-mantine';
import {useState} from 'react';
import classes from './ModalWithTabs.module.css';

const Demo = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Modal.Root opened={opened} onClose={() => setOpened(false)}>
                <Modal.Overlay />
                <Modal.Content>
                    <Modal.Header className={classes.headerWithTabs}>
                        <Header variant="secondary" description="Modal description">
                            Modal Title
                            <Header.DocAnchor href="https://about:blank" label="Tooltip text" />
                        </Header>
                        <Modal.CloseButton />
                    </Modal.Header>
                    <Tabs defaultValue="tab-1">
                        <Tabs.List pl="lg">
                            <Tabs.Tab value="tab-1">Tab 1</Tabs.Tab>
                            <Tabs.Tab value="tab-2">Tab 2</Tabs.Tab>
                            <Tabs.Tab value="tab-3">Tab 3</Tabs.Tab>
                        </Tabs.List>
                        <Modal.Body mih={500}>
                            <Tabs.Panel value="tab-1">Tab 1 content</Tabs.Panel>
                            <Tabs.Panel value="tab-2">Tab 2 content</Tabs.Panel>
                            <Tabs.Panel value="tab-3">Tab 3 content</Tabs.Panel>
                        </Modal.Body>
                    </Tabs>
                    <Modal.Footer>
                        <Button variant="outline" onClick={() => setOpened(false)}>
                            Cancel
                        </Button>
                        <Button>Save</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal.Root>
            <Button onClick={() => setOpened(true)}>Open Modal</Button>
        </>
    );
};
export default Demo;
