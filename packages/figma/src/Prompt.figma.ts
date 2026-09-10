// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=4751-2416
// component=Prompt.Information

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Variant') === 'Information') {
    const title = figma.selectedInstance.getString('Title');
    const children = figma.selectedInstance.getString('Text');

    template = {
        id: 'Prompt.Information',
        imports: ["import { Prompt } from '@coveord/plasma-mantine';"],
        example: figma.code`<Prompt.Information${figma.helpers.react.renderProp(
            'title',
            title,
        )} opened onClose={() => void 0}>
                ${figma.helpers.react.renderChildren(children)}
            </Prompt.Information>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Success') {
    const title = figma.selectedInstance.getString('Title');
    const children = figma.selectedInstance.getString('Text');

    template = {
        id: 'Prompt.Success',
        imports: ["import { Prompt } from '@coveord/plasma-mantine';"],
        example: figma.code`<Prompt.Success${figma.helpers.react.renderProp(
            'title',
            title,
        )} opened onClose={() => void 0}>
                ${figma.helpers.react.renderChildren(children)}
            </Prompt.Success>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Warning') {
    const title = figma.selectedInstance.getString('Title');
    const children = figma.selectedInstance.getString('Text');

    template = {
        id: 'Prompt.Warning',
        imports: ["import { Prompt } from '@coveord/plasma-mantine';"],
        example: figma.code`<Prompt.Warning${figma.helpers.react.renderProp(
            'title',
            title,
        )} opened onClose={() => void 0}>
                ${figma.helpers.react.renderChildren(children)}
            </Prompt.Warning>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Critical') {
    const title = figma.selectedInstance.getString('Title');
    const children = figma.selectedInstance.getString('Text');

    template = {
        id: 'Prompt.Critical',
        imports: ["import { Prompt } from '@coveord/plasma-mantine';"],
        example: figma.code`<Prompt.Critical${figma.helpers.react.renderProp(
            'title',
            title,
        )} opened onClose={() => void 0}>
                ${figma.helpers.react.renderChildren(children)}
            </Prompt.Critical>`,
        metadata: {nestable: true},
    };
} else {
    const title = figma.selectedInstance.getString('Title');
    const children = figma.selectedInstance.getString('Text');

    template = {
        id: 'Prompt.Information',
        imports: ["import { Prompt } from '@coveord/plasma-mantine';"],
        example: figma.code`<Prompt.Information${figma.helpers.react.renderProp(
            'title',
            title,
        )} opened onClose={() => void 0}>
                ${figma.helpers.react.renderChildren(children)}
            </Prompt.Information>`,
        metadata: {nestable: true},
    };
}

export default template;
