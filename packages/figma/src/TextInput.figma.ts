// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50528
// component=TextInput

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer15 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        required: nestedLayer15.type !== 'ERROR' ? nestedLayer15.getBoolean('Asterisk') : undefined,
        label: nestedLayer15.type !== 'ERROR' ? nestedLayer15.getString('Label') : undefined,
    };
})();
const wrapperProps = (function () {
    const nestedLayer16 = figma.selectedInstance.findInstance('Input.Wrapper');
    return {
        descriptionProps:
            nestedLayer16.type !== 'ERROR'
                ? nestedLayer16.getBoolean('Description', {
                      true: (function () {
                          const nestedLayer17 = figma.selectedInstance.findInstance('.Input.Description');
                          return {
                              description:
                                  nestedLayer17.type !== 'ERROR' ? nestedLayer17.getString('Description') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
        errorProps:
            nestedLayer16.type !== 'ERROR'
                ? nestedLayer16.getBoolean('Error', {
                      true: (function () {
                          const nestedLayer18 = figma.selectedInstance.findInstance('.Input.Error');
                          return {
                              error: nestedLayer18.type !== 'ERROR' ? nestedLayer18.getString('Error') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
    };
})();
const inputProps = (function () {
    const nestedLayer19 = figma.selectedInstance.findInstance('.Input.Input');
    return {
        placeholder:
            nestedLayer19.type !== 'ERROR'
                ? nestedLayer19.getBoolean('Placeholder', {
                      true: nestedLayer19.getString('Text'),
                      false: undefined,
                  })
                : undefined,
        leftSection:
            nestedLayer19.type !== 'ERROR'
                ? nestedLayer19.getBoolean('Left Section', {
                      true: nestedLayer19.getInstanceSwap('Swap Left')?.executeTemplate().example,
                  })
                : undefined,
        rightSection:
            nestedLayer19.type !== 'ERROR'
                ? nestedLayer19.getBoolean('Right Section', {
                      true: nestedLayer19.getInstanceSwap('Swap Right')?.executeTemplate().example,
                  })
                : undefined,
        disabled:
            nestedLayer19.type !== 'ERROR'
                ? nestedLayer19.getEnum('State', {
                      Disabled: true,
                  })
                : undefined,
        readOnly:
            nestedLayer19.type !== 'ERROR'
                ? nestedLayer19.getEnum('State', {
                      'Read-only': true,
                  })
                : undefined,
    };
})();

export default {
    id: 'TextInput',
    imports: ["import { TextInput } from '@coveord/plasma-mantine';"],
    example: figma.code`<TextInput${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp(
        'description',
        wrapperProps.descriptionProps.description,
    )}${figma.helpers.react.renderProp('placeholder', inputProps.placeholder)}${figma.helpers.react.renderProp(
        'leftSection',
        inputProps.leftSection,
    )}${figma.helpers.react.renderProp('rightSection', inputProps.rightSection)}${figma.helpers.react.renderProp(
        'required',
        labelProps.required,
    )}${figma.helpers.react.renderProp('disabled', inputProps.disabled)}${figma.helpers.react.renderProp(
        'readOnly',
        inputProps.readOnly,
    )}${figma.helpers.react.renderProp('error', wrapperProps.errorProps.error)}/>`,
    metadata: {nestable: true},
};
