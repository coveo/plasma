import {Button, CloseButton, Header, Modal, StickyFooter, Tabs} from '@coveord/plasma-mantine';
import {useState} from 'react';

const Demo = () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal size="lg" opened={opened} padding={0} withCloseButton={false} onClose={() => setOpened(false)}>
                <Header variant="modal" p="lg" description="Modal description">
                    <Header.Actions>
                        <CloseButton onClick={() => setOpened(false)} />
                    </Header.Actions>
                    Modal Title
                    <Header.DocAnchor href="https://about:blank" label="Tooltip text" />
                </Header>
                <Tabs defaultValue="tab-1" mih={500}>
                    <Tabs.List pl="xs">
                        <Tabs.Tab value="tab-1">Tab 1</Tabs.Tab>
                        <Tabs.Tab value="tab-2">Tab 2</Tabs.Tab>
                        <Tabs.Tab value="tab-3">Tab 3</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="tab-1" p="lg">
                        Tab 1 content
                    </Tabs.Panel>
                    <Tabs.Panel value="tab-2" p="lg">
                        Tab 2 content
                    </Tabs.Panel>
                    <Tabs.Panel value="tab-3" p="lg">
                        Tab 3 content
                    </Tabs.Panel>
                </Tabs>
                <StickyFooter borderTop>
                    <Button variant="outline" onClick={() => setOpened(false)}>
                        Cancel
                    </Button>
                    <Button>Save</Button>
                </StickyFooter>
            </Modal>
            <Button onClick={() => setOpened(true)}>Open Modal</Button>
        </>
    );
};
export default Demo;
