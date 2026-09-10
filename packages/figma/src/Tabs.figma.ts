// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2586-11355&m=dev
// component=Tabs

import figma from 'figma';

const orientation = figma.selectedInstance.getEnum('Orientation', {
    Default: undefined,
    Vertical: 'vertical',
});

export default {
    id: 'Tabs',
    imports: ["import { Tabs } from '@coveord/plasma-mantine';"],
    example: figma.code`<Tabs defaultValue="tab1"${figma.helpers.react.renderProp('orientation', orientation)}>
                <Tabs.List>
                    <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
                    <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
                    <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
                <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
                <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
            </Tabs>`,
    metadata: {nestable: true},
};
