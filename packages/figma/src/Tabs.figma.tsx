import {Tabs} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Tabs,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2586-11355&m=dev',
    {
        props: {
            orientation: figma.enum('Orientation', {Default: undefined, Vertical: 'vertical'}),
        },
        example: (props) => (
            <Tabs defaultValue="tab1" {...props}>
                <Tabs.List>
                    <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
                    <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
                    <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
                <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
                <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
            </Tabs>
        ),
    },
);
