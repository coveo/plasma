// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2191-1071
// component=NumberInput

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer46 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        required: nestedLayer46.type !== 'ERROR' ? nestedLayer46.getBoolean('Asterisk') : undefined,
        label: nestedLayer46.type !== 'ERROR' ? nestedLayer46.getString('Label') : undefined,
    };
})();
const wrapperProps = (function () {
    const nestedLayer47 = figma.selectedInstance.findInstance('Input.Wrapper');
    return {
        descriptionProps:
            nestedLayer47.type !== 'ERROR'
                ? nestedLayer47.getBoolean('Description', {
                      true: (function () {
                          const nestedLayer48 = figma.selectedInstance.findInstance('.Input.Description');
                          return {
                              description:
                                  nestedLayer48.type !== 'ERROR' ? nestedLayer48.getString('Description') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
        errorProps:
            nestedLayer47.type !== 'ERROR'
                ? nestedLayer47.getBoolean('Error', {
                      true: (function () {
                          const nestedLayer49 = figma.selectedInstance.findInstance('.Input.Error');
                          return {
                              error: nestedLayer49.type !== 'ERROR' ? nestedLayer49.getString('Error') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
    };
})();
const inputProps = (function () {
    const nestedLayer50 = figma.selectedInstance.findInstance('.NumberInput.Input');
    return {
        placeholder:
            nestedLayer50.type !== 'ERROR'
                ? nestedLayer50.getBoolean('Placeholder', {
                      true: nestedLayer50.findText('0').__render__(),
                      false: undefined,
                  })
                : undefined,
        leftSection:
            nestedLayer50.type !== 'ERROR'
                ? nestedLayer50.getBoolean('Left Section', {
                      true: nestedLayer50.getInstanceSwap('Swap Left')?.executeTemplate().example,
                  })
                : undefined,
        disabled:
            nestedLayer50.type !== 'ERROR'
                ? nestedLayer50.getEnum('State', {
                      Disabled: true,
                  })
                : undefined,
        readOnly:
            nestedLayer50.type !== 'ERROR'
                ? nestedLayer50.getEnum('State', {
                      'Read-only': true,
                  })
                : undefined,
    };
})();

export default {
    id: 'NumberInput',
    imports: ["import { NumberInput } from '@coveord/plasma-mantine';"],
    example: figma.code`<NumberInput${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp(
        'description',
        wrapperProps.descriptionProps?.description,
    )}${figma.helpers.react.renderProp('placeholder', inputProps.placeholder)}${figma.helpers.react.renderProp(
        'leftSection',
        inputProps.leftSection,
    )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
        'disabled',
        inputProps.disabled,
    )}${figma.helpers.react.renderProp('readOnly', inputProps.readOnly)}${figma.helpers.react.renderProp(
        'error',
        wrapperProps.errorProps?.error,
    )}/>`,
    metadata: {nestable: true},
};
