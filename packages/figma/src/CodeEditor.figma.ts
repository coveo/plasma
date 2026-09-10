// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50649
// component=CodeEditor

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer69 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        required: nestedLayer69.type !== 'ERROR' ? nestedLayer69.getBoolean('Asterisk') : undefined,
        label: nestedLayer69.type !== 'ERROR' ? nestedLayer69.getString('Label') : undefined,
    };
})();
const descriptionProps = (function () {
    const nestedLayer70 = figma.selectedInstance.findInstance('.Input.Description');
    return {
        description: nestedLayer70.type !== 'ERROR' ? nestedLayer70.getString('Description') : undefined,
    };
})();
const disabled = figma.selectedInstance.getEnum('Variant', {
    Disabled: true,
});
const error = figma.selectedInstance.getEnum('Variant', {
    Error: (function () {
        const nestedLayer71 = figma.selectedInstance.findInstance('.Input.Error');
        return {
            errorMessage: nestedLayer71.type !== 'ERROR' ? nestedLayer71.getString('Error') : undefined,
        };
    })(),
    Disabled: figma.helpers.react.object({}),
    Default: figma.helpers.react.object({}),
});

export default {
    id: 'CodeEditor',
    imports: ["import { CodeEditor } from '@coveord/plasma-mantine';"],
    example: figma.code`<CodeEditor${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
        'disabled',
        disabled,
    )}${figma.helpers.react.renderProp('error', error.errorMessage)}${figma.helpers.react.renderProp(
        'description',
        descriptionProps?.description,
    )}/>`,
    metadata: {nestable: true},
};
