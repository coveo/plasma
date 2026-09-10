// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2484-10754
// component=Radio.Group

import figma from 'figma';

const inputWrapperProps = (function () {
    const nestedLayer36 = figma.selectedInstance.findInstance('Input.Wrapper');
    return {
        descriptionProps:
            nestedLayer36.type !== 'ERROR'
                ? nestedLayer36.getBoolean('Description', {
                      true: (function () {
                          const nestedLayer37 = figma.selectedInstance.findInstance('.Input.Description');
                          return {
                              description:
                                  nestedLayer37.type !== 'ERROR' ? nestedLayer37.getString('Description') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
        errorProps:
            nestedLayer36.type !== 'ERROR'
                ? nestedLayer36.getBoolean('Error', {
                      true: (function () {
                          const nestedLayer38 = figma.selectedInstance.findInstance('.Input.Error');
                          return {
                              error: nestedLayer38.type !== 'ERROR' ? nestedLayer38.getString('Error') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
        groupChildren:
            nestedLayer36.type !== 'ERROR' ? nestedLayer36.__properties__.children(['Radio.Group']) : undefined,
    };
})();
const labelProps = (function () {
    const nestedLayer39 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        required: nestedLayer39.type !== 'ERROR' ? nestedLayer39.getBoolean('Asterisk') : undefined,
        label: nestedLayer39.type !== 'ERROR' ? nestedLayer39.getString('Label') : undefined,
    };
})();
const radioGroupProps = (function () {
    const nestedLayer40 = figma.selectedInstance.findInstance('Radio.Group');
    return {
        disabled:
            nestedLayer40.type !== 'ERROR'
                ? nestedLayer40.getEnum('State', {
                      Disabled: true,
                  })
                : undefined,
        readOnly:
            nestedLayer40.type !== 'ERROR'
                ? nestedLayer40.getEnum('State', {
                      'Read-only': true,
                  })
                : undefined,
    };
})();

export default {
    id: 'Radio.Group',
    imports: ["import { Radio } from '@coveord/plasma-mantine';"],
    example: figma.code`<Radio.Group${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp(
        'description',
        inputWrapperProps.descriptionProps?.description,
    )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
        'error',
        inputWrapperProps.errorProps?.error,
    )}${figma.helpers.react.renderProp(
        'disabled',
        radioGroupProps.disabled,
    )}${figma.helpers.react.renderProp('readOnly', radioGroupProps.readOnly)}>
                ${figma.helpers.react.renderChildren(inputWrapperProps.groupChildren)}
            </Radio.Group>`,
    metadata: {nestable: true},
};
