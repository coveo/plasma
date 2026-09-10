// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49714
// component=Breadcrumbs

import figma from 'figma';

// Branch per variant combination.

let template;
if (figma.selectedInstance.getPropertyValue('Levels') === '2') {
    const crumb = (function () {
        const nestedLayer80 = figma.selectedInstance.findInstance('.Breadcrumbs.Breadcrumb');
        return {
            label: nestedLayer80.type !== 'ERROR' ? nestedLayer80.getString('Tabs') : undefined,
        };
    })();
    const link = (function () {
        const nestedLayer81 = figma.selectedInstance.findInstance('Anchor');
        return {
            label: nestedLayer81.type !== 'ERROR' ? nestedLayer81.getString('Label') : undefined,
        };
    })();

    template = {
        id: 'Breadcrumbs',
        imports: [
            "import { Anchor, Breadcrumbs, Flex } from '@coveord/plasma-mantine';",
            "import { IconChevronLeft } from '@coveord/plasma-react-icons';",
        ],
        example: figma.code`<Breadcrumbs>
                <Anchor href="#" inherit>
                    <Flex align="center">
                        <IconChevronLeft aria-label="arrow pointing back" size={16}/>
                        ${figma.helpers.react.renderChildren(link.label)}
                    </Flex>
                </Anchor>

                <span>${figma.helpers.react.renderChildren(crumb.label)}</span>
            </Breadcrumbs>`,
        metadata: {nestable: true},
    };
} else {
    template = {
        id: 'Breadcrumbs',
        imports: ["import { Anchor, Breadcrumbs } from '@coveord/plasma-mantine';"],
        example: figma.code`<Breadcrumbs>
                <Anchor href="#" inherit>
                    Level 3
                </Anchor>
                <Anchor href="#" inherit>
                    Level 2
                </Anchor>
                <Anchor href="#" inherit>
                    Level 1
                </Anchor>
                <span>Current</span>
            </Breadcrumbs>`,
        metadata: {nestable: true},
    };
}

export default template;
