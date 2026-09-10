// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2557-11354
// component=Checkbox.Group

import figma from 'figma';

const inputWrapperProps = (function () {
    const nestedLayer75 = figma.selectedInstance.findInstance('Input.Wrapper');
    return {
        descriptionProps:
            nestedLayer75.type !== 'ERROR'
                ? nestedLayer75.getBoolean('Description', {
                      true: (function () {
                          const nestedLayer76 = figma.selectedInstance.findInstance('.Input.Description');
                          return {
                              description:
                                  nestedLayer76.type !== 'ERROR' ? nestedLayer76.getString('Description') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
        errorProps:
            nestedLayer75.type !== 'ERROR'
                ? nestedLayer75.getBoolean('Error', {
                      true: (function () {
                          const nestedLayer77 = figma.selectedInstance.findInstance('.Input.Error');
                          return {
                              error: nestedLayer77.type !== 'ERROR' ? nestedLayer77.getString('Error') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
        groupChildren:
            nestedLayer75.type !== 'ERROR' ? nestedLayer75.__properties__.children(['Checkbox.Group']) : undefined,
    };
})();
const labelProps = (function () {
    const nestedLayer78 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        required: nestedLayer78.type !== 'ERROR' ? nestedLayer78.getBoolean('Asterisk') : undefined,
        label: nestedLayer78.type !== 'ERROR' ? nestedLayer78.getString('Label') : undefined,
    };
})();
const checkboxGroupProps = (function () {
    const nestedLayer79 = figma.selectedInstance.findInstance('Checkbox.Group');
    return {
        disabled:
            nestedLayer79.type !== 'ERROR'
                ? nestedLayer79.getEnum('State', {
                      Disabled: true,
                  })
                : undefined,
        readOnly:
            nestedLayer79.type !== 'ERROR'
                ? nestedLayer79.getEnum('State', {
                      'Read-only': true,
                  })
                : undefined,
    };
})();

export default {
    id: 'Checkbox.Group',
    imports: ["import { Checkbox } from '@coveord/plasma-mantine';"],
    example: figma.code`<Checkbox.Group${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp(
        'description',
        inputWrapperProps.descriptionProps.description,
    )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
        'error',
        inputWrapperProps.errorProps.error,
    )}${figma.helpers.react.renderProp(
        'disabled',
        checkboxGroupProps.disabled,
    )}${figma.helpers.react.renderProp('readOnly', checkboxGroupProps.readOnly)}>
                ${figma.helpers.react.renderChildren(inputWrapperProps.groupChildren)}
            </Checkbox.Group>`,
    metadata: {nestable: true},
};
