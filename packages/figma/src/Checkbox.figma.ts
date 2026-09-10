// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50069
// component=Checkbox

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer72 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        label: nestedLayer72.type !== 'ERROR' ? nestedLayer72.getString('Label') : undefined,
        required: nestedLayer72.type !== 'ERROR' ? nestedLayer72.getBoolean('Asterisk') : undefined,
    };
})();
const descriptionProps = (function () {
    const nestedLayer73 = figma.selectedInstance.findInstance('.Input.Description');
    return {
        description: nestedLayer73.type !== 'ERROR' ? nestedLayer73.getString('Description') : undefined,
    };
})();
const errorProps = (function () {
    const nestedLayer74 = figma.selectedInstance.findInstance('.Input.Error');
    return {
        error: nestedLayer74.type !== 'ERROR' ? nestedLayer74.getString('Error') : undefined,
    };
})();
const indeterminate = figma.selectedInstance.getEnum('Checked', {
    Indeterminate: true,
});
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
    id: 'Checkbox',
    imports: ["import { Checkbox } from '@coveord/plasma-mantine';"],
    example: figma.code`<Checkbox${figma.helpers.react.renderProp('checked', checked)}${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp('description', descriptionProps?.description)}${figma.helpers.react.renderProp(
        'indeterminate',
        indeterminate,
    )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
        'disabled',
        disabled,
    )}${figma.helpers.react.renderProp(
        'readOnly',
        readOnly,
    )}${figma.helpers.react.renderProp('error', errorProps?.error)}/>`,
    metadata: {nestable: true},
};
