// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2188-3792
// component=Textarea

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer10 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        required: nestedLayer10.type !== 'ERROR' ? nestedLayer10.getBoolean('Asterisk') : undefined,
        label: nestedLayer10.type !== 'ERROR' ? nestedLayer10.getString('Label') : undefined,
    };
})();
const wrapperProps = (function () {
    const nestedLayer11 = figma.selectedInstance.findInstance('Input.Wrapper');
    return {
        descriptionProps:
            nestedLayer11.type !== 'ERROR'
                ? nestedLayer11.getBoolean('Description', {
                      true: (function () {
                          const nestedLayer12 = figma.selectedInstance.findInstance('.Input.Description');
                          return {
                              description:
                                  nestedLayer12.type !== 'ERROR' ? nestedLayer12.getString('Description') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
        errorProps:
            nestedLayer11.type !== 'ERROR'
                ? nestedLayer11.getBoolean('Error', {
                      true: (function () {
                          const nestedLayer13 = figma.selectedInstance.findInstance('.Input.Error');
                          return {
                              error: nestedLayer13.type !== 'ERROR' ? nestedLayer13.getString('Error') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
    };
})();
const inputProps = (function () {
    const nestedLayer14 = figma.selectedInstance.findInstance('.Textarea.Input');
    return {
        placeholder:
            nestedLayer14.type !== 'ERROR'
                ? nestedLayer14.getBoolean('Placeholder', {
                      true: nestedLayer14.findText('Placeholder').__render__(),
                      false: undefined,
                  })
                : undefined,
        leftSection:
            nestedLayer14.type !== 'ERROR'
                ? nestedLayer14.getBoolean('Left Section', {
                      true: nestedLayer14.getInstanceSwap('Swap Left')?.executeTemplate().example,
                  })
                : undefined,
        rightSection:
            nestedLayer14.type !== 'ERROR'
                ? nestedLayer14.getBoolean('Right Section', {
                      true: nestedLayer14.getInstanceSwap('Swap Right')?.executeTemplate().example,
                  })
                : undefined,
        disabled:
            nestedLayer14.type !== 'ERROR'
                ? nestedLayer14.getEnum('State', {
                      Disabled: true,
                  })
                : undefined,
        readOnly:
            nestedLayer14.type !== 'ERROR'
                ? nestedLayer14.getEnum('State', {
                      'Read-only': true,
                  })
                : undefined,
    };
})();

export default {
    id: 'Textarea',
    imports: ["import { Textarea } from '@coveord/plasma-mantine';"],
    example: figma.code`<Textarea${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp(
        'description',
        wrapperProps.descriptionProps?.description,
    )}${figma.helpers.react.renderProp('placeholder', inputProps.placeholder)}${figma.helpers.react.renderProp(
        'leftSection',
        inputProps.leftSection,
    )}${figma.helpers.react.renderProp('rightSection', inputProps.rightSection)}${figma.helpers.react.renderProp(
        'required',
        labelProps.required,
    )}${figma.helpers.react.renderProp('disabled', inputProps.disabled)}${figma.helpers.react.renderProp(
        'readOnly',
        inputProps.readOnly,
    )}${figma.helpers.react.renderProp('error', wrapperProps.errorProps?.error)}/>`,
    metadata: {nestable: true},
};
