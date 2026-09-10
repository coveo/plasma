// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50811
// component=MultiSelect

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer51 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        label: nestedLayer51.type !== 'ERROR' ? nestedLayer51.getString('Label') : undefined,
        required: nestedLayer51.type !== 'ERROR' ? nestedLayer51.getBoolean('Asterisk') : undefined,
    };
})();
const description = (function () {
    const nestedLayer52 = figma.selectedInstance.findInstance('.Input.Description');
    return {
        text: nestedLayer52.type !== 'ERROR' ? nestedLayer52.getString('Description') : undefined,
    };
})();
const disabled = figma.selectedInstance.getEnum('State', {
    Disabled: true,
});
const readOnly = figma.selectedInstance.getEnum('State', {
    'Read-only': true,
});
const error = (function () {
    const nestedLayer53 = figma.selectedInstance.findInstance('.Input.Error');
    return {
        message: nestedLayer53.type !== 'ERROR' ? nestedLayer53.getString('Error') : undefined,
    };
})();
const placeholder = (function () {
    const nestedLayer54 = figma.selectedInstance.findInstance('.Input.Input');
    return {
        text:
            nestedLayer54.type !== 'ERROR'
                ? nestedLayer54.getBoolean('Placeholder', {
                      true: nestedLayer54.getString('Text'),
                      false: undefined,
                  })
                : undefined,
    };
})();

export default {
    id: 'MultiSelect',
    imports: ["import { MultiSelect } from '@coveord/plasma-mantine';"],
    example: figma.code`<MultiSelect${figma.helpers.react.renderProp(
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
