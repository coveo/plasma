// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50555
// component=Select

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer27 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        label: nestedLayer27.type !== 'ERROR' ? nestedLayer27.getString('Label') : undefined,
        required: nestedLayer27.type !== 'ERROR' ? nestedLayer27.getBoolean('Asterisk') : undefined,
    };
})();
const description = (function () {
    const nestedLayer28 = figma.selectedInstance.findInstance('.Input.Description');
    return {
        text: nestedLayer28.type !== 'ERROR' ? nestedLayer28.getString('Description') : undefined,
    };
})();
const disabled = figma.selectedInstance.getEnum('State', {
    Disabled: true,
});
const readOnly = figma.selectedInstance.getEnum('State', {
    'Read-only': true,
});
const error = (function () {
    const nestedLayer29 = figma.selectedInstance.findInstance('.Input.Error');
    return {
        message: nestedLayer29.type !== 'ERROR' ? nestedLayer29.getString('Error') : undefined,
    };
})();
const placeholder = (function () {
    const nestedLayer30 = figma.selectedInstance.findInstance('.Input.Input');
    return {
        text:
            nestedLayer30.type !== 'ERROR'
                ? nestedLayer30.getBoolean('Placeholder', {
                      true: nestedLayer30.getString('Text'),
                      false: undefined,
                  })
                : undefined,
    };
})();

export default {
    id: 'Select',
    imports: ["import { Select } from '@coveord/plasma-mantine';"],
    example: figma.code`<Select${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp('description', description.text)}${figma.helpers.react.renderProp(
        'placeholder',
        placeholder.text,
    )}${figma.helpers.react.renderProp('error', error.message)}${figma.helpers.react.renderProp(
        'required',
        labelProps.required,
    )}${figma.helpers.react.renderProp('disabled', disabled)}${figma.helpers.react.renderProp('readOnly', readOnly)}/>`,
    metadata: {nestable: true},
};
