// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2781-26715
// component=TimePicker

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer5 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        required: nestedLayer5.type !== 'ERROR' ? nestedLayer5.getBoolean('Asterisk') : undefined,
        label: nestedLayer5.type !== 'ERROR' ? nestedLayer5.getString('Label') : undefined,
    };
})();
const wrapperProps = (function () {
    const nestedLayer6 = figma.selectedInstance.findInstance('Input.Wrapper');
    return {
        descriptionProps:
            nestedLayer6.type !== 'ERROR'
                ? nestedLayer6.getBoolean('Description', {
                      true: (function () {
                          const nestedLayer7 = figma.selectedInstance.findInstance('.Input.Description');
                          return {
                              description:
                                  nestedLayer7.type !== 'ERROR' ? nestedLayer7.getString('Description') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
        errorProps:
            nestedLayer6.type !== 'ERROR'
                ? nestedLayer6.getBoolean('Error', {
                      true: (function () {
                          const nestedLayer8 = figma.selectedInstance.findInstance('.Input.Error');
                          return {
                              error: nestedLayer8.type !== 'ERROR' ? nestedLayer8.getString('Error') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
    };
})();
const inputProps = (function () {
    const nestedLayer9 = figma.selectedInstance.findInstance('.Input.Input');
    return {
        leftSection:
            nestedLayer9.type !== 'ERROR'
                ? nestedLayer9.getBoolean('Left Section', {
                      true: nestedLayer9.getInstanceSwap('Swap Left')?.executeTemplate().example,
                  })
                : undefined,
        rightSection:
            nestedLayer9.type !== 'ERROR'
                ? nestedLayer9.getBoolean('Right Section', {
                      true: nestedLayer9.getInstanceSwap('Swap Right')?.executeTemplate().example,
                  })
                : undefined,
        disabled:
            nestedLayer9.type !== 'ERROR'
                ? nestedLayer9.getEnum('State', {
                      Disabled: true,
                  })
                : undefined,
        readOnly:
            nestedLayer9.type !== 'ERROR'
                ? nestedLayer9.getEnum('State', {
                      'Read-only': true,
                  })
                : undefined,
    };
})();

export default {
    id: 'TimePicker',
    imports: ["import { TimePicker } from '@coveord/plasma-mantine';"],
    example: figma.code`<TimePicker${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp(
        'description',
        wrapperProps.descriptionProps.description,
    )}${figma.helpers.react.renderProp('leftSection', inputProps.leftSection)}${figma.helpers.react.renderProp(
        'rightSection',
        inputProps.rightSection,
    )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
        'disabled',
        inputProps.disabled,
    )}${figma.helpers.react.renderProp('readOnly', inputProps.readOnly)}${figma.helpers.react.renderProp(
        'error',
        wrapperProps.errorProps.error,
    )}/>`,
    metadata: {nestable: true},
};
