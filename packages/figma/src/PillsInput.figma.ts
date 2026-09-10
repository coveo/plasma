// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2845-3284
// component=PillsInput

import figma from 'figma';

const wrapperProps = (function () {
    const nestedLayer41 = figma.selectedInstance.findInstance('Input.Wrapper');
    return {
        descriptionProps:
            nestedLayer41.type !== 'ERROR'
                ? nestedLayer41.getBoolean('Description', {
                      true: (function () {
                          const nestedLayer42 = figma.selectedInstance.findInstance('.Input.Description');
                          return {
                              description:
                                  nestedLayer42.type !== 'ERROR' ? nestedLayer42.getString('Description') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
        errorProps:
            nestedLayer41.type !== 'ERROR'
                ? nestedLayer41.getBoolean('Error', {
                      true: (function () {
                          const nestedLayer43 = figma.selectedInstance.findInstance('.Input.Error');
                          return {
                              error: nestedLayer43.type !== 'ERROR' ? nestedLayer43.getString('Error') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
    };
})();
const labelProps = (function () {
    const nestedLayer44 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        required: nestedLayer44.type !== 'ERROR' ? nestedLayer44.getBoolean('Asterisk') : undefined,
        label: nestedLayer44.type !== 'ERROR' ? nestedLayer44.getString('Label') : undefined,
    };
})();
const inputProps = (function () {
    const nestedLayer45 = figma.selectedInstance.findInstance('.PillsInput.Input');
    return {
        leftSection:
            nestedLayer45.type !== 'ERROR'
                ? nestedLayer45.getBoolean('Left Section', {
                      true: nestedLayer45.getInstanceSwap('Swap Left')?.executeTemplate().example,
                  })
                : undefined,
        rightSection:
            nestedLayer45.type !== 'ERROR'
                ? nestedLayer45.getBoolean('Right Section', {
                      true: nestedLayer45.getInstanceSwap('Swap Right')?.executeTemplate().example,
                  })
                : undefined,
        disabled:
            nestedLayer45.type !== 'ERROR'
                ? nestedLayer45.getEnum('State', {
                      Disabled: true,
                  })
                : undefined,
        readOnly:
            nestedLayer45.type !== 'ERROR'
                ? nestedLayer45.getEnum('State', {
                      'Read-only': true,
                  })
                : undefined,
    };
})();

export default {
    id: 'PillsInput',
    imports: ["import { Pill, PillsInput } from '@coveord/plasma-mantine';"],
    example: figma.code`<PillsInput${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp(
        'description',
        wrapperProps.descriptionProps?.description,
    )}${figma.helpers.react.renderProp('leftSection', inputProps.leftSection)}${figma.helpers.react.renderProp(
        'rightSection',
        inputProps.rightSection,
    )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
        'disabled',
        inputProps.disabled,
    )}${figma.helpers.react.renderProp('error', wrapperProps.errorProps?.error)}>
                <Pill.Group>
                    <Pill withRemoveButton>Item</Pill>
                    <Pill withRemoveButton>Item</Pill>
                </Pill.Group>
            </PillsInput>`,
    metadata: {nestable: true},
};
