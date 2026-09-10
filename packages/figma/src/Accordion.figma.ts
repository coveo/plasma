// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=2879-916
// component=Accordion.Item

import figma from 'figma';

const value = figma.selectedInstance.getString('Label');
const control = figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example;

export default {
    id: 'Accordion.Item',
    imports: ["import { Accordion } from '@coveord/plasma-mantine';"],
    example: figma.code`<Accordion.Item${figma.helpers.react.renderProp('value', value)}>
                <Accordion.Control${figma.helpers.react.renderProp(
                    'icon',
                    control,
                )}>${figma.helpers.react.renderChildren(value)}</Accordion.Control>
                <Accordion.Panel>
                    {'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.'}
                </Accordion.Panel>
            </Accordion.Item>`,
    metadata: {nestable: true},
};
