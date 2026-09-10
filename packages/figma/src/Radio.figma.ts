// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2208-496
// component=Radio

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer31 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        label: nestedLayer31.type !== 'ERROR' ? nestedLayer31.getString('Label') : undefined,
        required: nestedLayer31.type !== 'ERROR' ? nestedLayer31.getBoolean('Asterisk') : undefined,
    };
})();
const descriptionProps = (function () {
    const nestedLayer32 = figma.selectedInstance.findInstance('.Input.Description');
    return {
        description: nestedLayer32.type !== 'ERROR' ? nestedLayer32.getString('Description') : undefined,
    };
})();
const errorProps = (function () {
    const nestedLayer33 = figma.selectedInstance.findInstance('.Input.Error');
    return {
        error: nestedLayer33.type !== 'ERROR' ? nestedLayer33.getString('Error') : undefined,
    };
})();
const disabled = figma.selectedInstance.getEnum('State', {
    Disabled: true,
});
const readOnly = figma.selectedInstance.getEnum('State', {
    'Read-only': true,
});
const checked = figma.selectedInstance.getEnum('Checked', {
    True: true,
});

export default {
    id: 'Radio',
    imports: ["import { Radio } from '@coveord/plasma-mantine';"],
    example: figma.code`<Radio${figma.helpers.react.renderProp('checked', checked)}${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp('description', descriptionProps.description)}${figma.helpers.react.renderProp(
        'required',
        labelProps.required,
    )}${figma.helpers.react.renderProp('disabled', disabled)}${figma.helpers.react.renderProp(
        'readOnly',
        readOnly,
    )}${figma.helpers.react.renderProp('error', errorProps.error)}/>`,
    metadata: {nestable: true},
};
