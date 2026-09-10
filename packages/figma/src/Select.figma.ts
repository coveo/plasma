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
const wrapperProps = (function () {
    const nestedLayer28 = figma.selectedInstance.findInstance('Input.Wrapper');
    return {
        description:
            nestedLayer28.type !== 'ERROR'
                ? nestedLayer28.getBoolean('Description', {
                      true: (function () {
                          const nestedLayer29 = figma.selectedInstance.findInstance('.Input.Description');
                          return nestedLayer29.type !== 'ERROR' ? nestedLayer29.getString('Description') : undefined;
                      })(),
                  })
                : undefined,
        error:
            nestedLayer28.type !== 'ERROR'
                ? nestedLayer28.getBoolean('Error', {
                      true: (function () {
                          const nestedLayer30 = figma.selectedInstance.findInstance('.Input.Error');
                          return nestedLayer30.type !== 'ERROR' ? nestedLayer30.getString('Error') : undefined;
                      })(),
                  })
                : undefined,
    };
})();
const disabled = figma.selectedInstance.getEnum('State', {
    Disabled: true,
});
const readOnly = figma.selectedInstance.getEnum('State', {
    'Read-only': true,
});
const placeholder = (function () {
    const nestedLayer31 = figma.selectedInstance.findInstance('.Input.Input');
    return {
        text:
            nestedLayer31.type !== 'ERROR'
                ? nestedLayer31.getBoolean('Placeholder', {
                      true: nestedLayer31.getString('Text'),
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
    )}${figma.helpers.react.renderProp('description', wrapperProps.description)}${figma.helpers.react.renderProp(
        'placeholder',
        placeholder.text,
    )}${figma.helpers.react.renderProp('error', wrapperProps.error)}${figma.helpers.react.renderProp(
        'required',
        labelProps.required,
    )}${figma.helpers.react.renderProp('disabled', disabled)}${figma.helpers.react.renderProp('readOnly', readOnly)}/>`,
    metadata: {nestable: true},
};
