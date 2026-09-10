// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51022
// component=YearPickerInput

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Variant') === 'Year') {
    const labelProps = (function () {
        const nestedLayer0 = figma.selectedInstance.findInstance('.Input.Label');
        return {
            required: nestedLayer0.type !== 'ERROR' ? nestedLayer0.getBoolean('Asterisk') : undefined,
            label: nestedLayer0.type !== 'ERROR' ? nestedLayer0.getString('Label') : undefined,
        };
    })();
    const wrapperProps = (function () {
        const nestedLayer1 = figma.selectedInstance.findInstance('Input.Wrapper');
        return {
            descriptionProps:
                nestedLayer1.type !== 'ERROR'
                    ? nestedLayer1.getBoolean('Description', {
                          true: (function () {
                              const nestedLayer2 = figma.selectedInstance.findInstance('.Input.Description');
                              return {
                                  description:
                                      nestedLayer2.type !== 'ERROR' ? nestedLayer2.getString('Description') : undefined,
                              };
                          })(),
                          false: figma.helpers.react.object({}),
                      })
                    : undefined,
            errorProps:
                nestedLayer1.type !== 'ERROR'
                    ? nestedLayer1.getBoolean('Error', {
                          true: (function () {
                              const nestedLayer3 = figma.selectedInstance.findInstance('.Input.Error');
                              return {
                                  error: nestedLayer3.type !== 'ERROR' ? nestedLayer3.getString('Error') : undefined,
                              };
                          })(),
                          false: figma.helpers.react.object({}),
                      })
                    : undefined,
        };
    })();
    const inputProps = (function () {
        const nestedLayer4 = figma.selectedInstance.findInstance('.Input.Input');
        return {
            placeholder:
                nestedLayer4.type !== 'ERROR'
                    ? nestedLayer4.getBoolean('Placeholder', {
                          true: nestedLayer4.getString('Text'),
                          false: undefined,
                      })
                    : undefined,
            leftSection:
                nestedLayer4.type !== 'ERROR'
                    ? nestedLayer4.getBoolean('Left Section', {
                          true: nestedLayer4.getInstanceSwap('Swap Left')?.executeTemplate().example,
                      })
                    : undefined,
            rightSection:
                nestedLayer4.type !== 'ERROR'
                    ? nestedLayer4.getBoolean('Right Section', {
                          true: nestedLayer4.getInstanceSwap('Swap Right')?.executeTemplate().example,
                      })
                    : undefined,
            disabled:
                nestedLayer4.type !== 'ERROR'
                    ? nestedLayer4.getEnum('State', {
                          Disabled: true,
                      })
                    : undefined,
            readOnly:
                nestedLayer4.type !== 'ERROR'
                    ? nestedLayer4.getEnum('State', {
                          'Read-only': true,
                      })
                    : undefined,
        };
    })();

    template = {
        id: 'YearPickerInput',
        imports: ["import { YearPickerInput } from '@coveord/plasma-mantine';"],
        example: figma.code`<YearPickerInput${figma.helpers.react.renderProp(
            'label',
            labelProps.label,
        )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
            'description',
            wrapperProps.descriptionProps.description,
        )}${figma.helpers.react.renderProp('error', wrapperProps.errorProps.error)}${figma.helpers.react.renderProp(
            'placeholder',
            inputProps.placeholder,
        )}${figma.helpers.react.renderProp('leftSection', inputProps.leftSection)}${figma.helpers.react.renderProp(
            'rightSection',
            inputProps.rightSection,
        )}${figma.helpers.react.renderProp(
            'disabled',
            inputProps.disabled,
        )}${figma.helpers.react.renderProp('readOnly', inputProps.readOnly)}/>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Month') {
    const labelProps = (function () {
        const nestedLayer55 = figma.selectedInstance.findInstance('.Input.Label');
        return {
            required: nestedLayer55.type !== 'ERROR' ? nestedLayer55.getBoolean('Asterisk') : undefined,
            label: nestedLayer55.type !== 'ERROR' ? nestedLayer55.getString('Label') : undefined,
        };
    })();
    const wrapperProps = (function () {
        const nestedLayer56 = figma.selectedInstance.findInstance('Input.Wrapper');
        return {
            descriptionProps:
                nestedLayer56.type !== 'ERROR'
                    ? nestedLayer56.getBoolean('Description', {
                          true: (function () {
                              const nestedLayer57 = figma.selectedInstance.findInstance('.Input.Description');
                              return {
                                  description:
                                      nestedLayer57.type !== 'ERROR'
                                          ? nestedLayer57.getString('Description')
                                          : undefined,
                              };
                          })(),
                          false: figma.helpers.react.object({}),
                      })
                    : undefined,
            errorProps:
                nestedLayer56.type !== 'ERROR'
                    ? nestedLayer56.getBoolean('Error', {
                          true: (function () {
                              const nestedLayer58 = figma.selectedInstance.findInstance('.Input.Error');
                              return {
                                  error: nestedLayer58.type !== 'ERROR' ? nestedLayer58.getString('Error') : undefined,
                              };
                          })(),
                          false: figma.helpers.react.object({}),
                      })
                    : undefined,
        };
    })();
    const inputProps = (function () {
        const nestedLayer59 = figma.selectedInstance.findInstance('.Input.Input');
        return {
            placeholder:
                nestedLayer59.type !== 'ERROR'
                    ? nestedLayer59.getBoolean('Placeholder', {
                          true: nestedLayer59.getString('Text'),
                          false: undefined,
                      })
                    : undefined,
            leftSection:
                nestedLayer59.type !== 'ERROR'
                    ? nestedLayer59.getBoolean('Left Section', {
                          true: nestedLayer59.getInstanceSwap('Swap Left')?.executeTemplate().example,
                      })
                    : undefined,
            rightSection:
                nestedLayer59.type !== 'ERROR'
                    ? nestedLayer59.getBoolean('Right Section', {
                          true: nestedLayer59.getInstanceSwap('Swap Right')?.executeTemplate().example,
                      })
                    : undefined,
            disabled:
                nestedLayer59.type !== 'ERROR'
                    ? nestedLayer59.getEnum('State', {
                          Disabled: true,
                      })
                    : undefined,
            readOnly:
                nestedLayer59.type !== 'ERROR'
                    ? nestedLayer59.getEnum('State', {
                          'Read-only': true,
                      })
                    : undefined,
        };
    })();

    template = {
        id: 'MonthPickerInput',
        imports: ["import { MonthPickerInput } from '@coveord/plasma-mantine';"],
        example: figma.code`<MonthPickerInput${figma.helpers.react.renderProp(
            'label',
            labelProps.label,
        )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
            'description',
            wrapperProps.descriptionProps.description,
        )}${figma.helpers.react.renderProp('error', wrapperProps.errorProps.error)}${figma.helpers.react.renderProp(
            'placeholder',
            inputProps.placeholder,
        )}${figma.helpers.react.renderProp('leftSection', inputProps.leftSection)}${figma.helpers.react.renderProp(
            'rightSection',
            inputProps.rightSection,
        )}${figma.helpers.react.renderProp(
            'disabled',
            inputProps.disabled,
        )}${figma.helpers.react.renderProp('readOnly', inputProps.readOnly)}/>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Date') {
    const labelProps = (function () {
        const nestedLayer60 = figma.selectedInstance.findInstance('.Input.Label');
        return {
            required: nestedLayer60.type !== 'ERROR' ? nestedLayer60.getBoolean('Asterisk') : undefined,
            label: nestedLayer60.type !== 'ERROR' ? nestedLayer60.getString('Label') : undefined,
        };
    })();
    const wrapperProps = (function () {
        const nestedLayer61 = figma.selectedInstance.findInstance('Input.Wrapper');
        return {
            descriptionProps:
                nestedLayer61.type !== 'ERROR'
                    ? nestedLayer61.getBoolean('Description', {
                          true: (function () {
                              const nestedLayer62 = figma.selectedInstance.findInstance('.Input.Description');
                              return {
                                  description:
                                      nestedLayer62.type !== 'ERROR'
                                          ? nestedLayer62.getString('Description')
                                          : undefined,
                              };
                          })(),
                          false: figma.helpers.react.object({}),
                      })
                    : undefined,
            errorProps:
                nestedLayer61.type !== 'ERROR'
                    ? nestedLayer61.getBoolean('Error', {
                          true: (function () {
                              const nestedLayer63 = figma.selectedInstance.findInstance('.Input.Error');
                              return {
                                  error: nestedLayer63.type !== 'ERROR' ? nestedLayer63.getString('Error') : undefined,
                              };
                          })(),
                          false: figma.helpers.react.object({}),
                      })
                    : undefined,
        };
    })();
    const inputProps = (function () {
        const nestedLayer64 = figma.selectedInstance.findInstance('.Input.Input');
        return {
            placeholder:
                nestedLayer64.type !== 'ERROR'
                    ? nestedLayer64.getBoolean('Placeholder', {
                          true: nestedLayer64.getString('Text'),
                          false: undefined,
                      })
                    : undefined,
            leftSection:
                nestedLayer64.type !== 'ERROR'
                    ? nestedLayer64.getBoolean('Left Section', {
                          true: nestedLayer64.getInstanceSwap('Swap Left')?.executeTemplate().example,
                      })
                    : undefined,
            rightSection:
                nestedLayer64.type !== 'ERROR'
                    ? nestedLayer64.getBoolean('Right Section', {
                          true: nestedLayer64.getInstanceSwap('Swap Right')?.executeTemplate().example,
                      })
                    : undefined,
            disabled:
                nestedLayer64.type !== 'ERROR'
                    ? nestedLayer64.getEnum('State', {
                          Disabled: true,
                      })
                    : undefined,
            readOnly:
                nestedLayer64.type !== 'ERROR'
                    ? nestedLayer64.getEnum('State', {
                          'Read-only': true,
                      })
                    : undefined,
        };
    })();

    template = {
        id: 'DatePickerInput',
        imports: ["import { DatePickerInput } from '@coveord/plasma-mantine';"],
        example: figma.code`<DatePickerInput${figma.helpers.react.renderProp(
            'label',
            labelProps.label,
        )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
            'description',
            wrapperProps.descriptionProps.description,
        )}${figma.helpers.react.renderProp('error', wrapperProps.errorProps.error)}${figma.helpers.react.renderProp(
            'placeholder',
            inputProps.placeholder,
        )}${figma.helpers.react.renderProp('leftSection', inputProps.leftSection)}${figma.helpers.react.renderProp(
            'rightSection',
            inputProps.rightSection,
        )}${figma.helpers.react.renderProp(
            'disabled',
            inputProps.disabled,
        )}${figma.helpers.react.renderProp('readOnly', inputProps.readOnly)}/>`,
        metadata: {nestable: true},
    };
} else {
    const labelProps = (function () {
        const nestedLayer60 = figma.selectedInstance.findInstance('.Input.Label');
        return {
            required: nestedLayer60.type !== 'ERROR' ? nestedLayer60.getBoolean('Asterisk') : undefined,
            label: nestedLayer60.type !== 'ERROR' ? nestedLayer60.getString('Label') : undefined,
        };
    })();
    const wrapperProps = (function () {
        const nestedLayer61 = figma.selectedInstance.findInstance('Input.Wrapper');
        return {
            descriptionProps:
                nestedLayer61.type !== 'ERROR'
                    ? nestedLayer61.getBoolean('Description', {
                          true: (function () {
                              const nestedLayer62 = figma.selectedInstance.findInstance('.Input.Description');
                              return {
                                  description:
                                      nestedLayer62.type !== 'ERROR'
                                          ? nestedLayer62.getString('Description')
                                          : undefined,
                              };
                          })(),
                          false: figma.helpers.react.object({}),
                      })
                    : undefined,
            errorProps:
                nestedLayer61.type !== 'ERROR'
                    ? nestedLayer61.getBoolean('Error', {
                          true: (function () {
                              const nestedLayer63 = figma.selectedInstance.findInstance('.Input.Error');
                              return {
                                  error: nestedLayer63.type !== 'ERROR' ? nestedLayer63.getString('Error') : undefined,
                              };
                          })(),
                          false: figma.helpers.react.object({}),
                      })
                    : undefined,
        };
    })();
    const inputProps = (function () {
        const nestedLayer64 = figma.selectedInstance.findInstance('.Input.Input');
        return {
            placeholder:
                nestedLayer64.type !== 'ERROR'
                    ? nestedLayer64.getBoolean('Placeholder', {
                          true: nestedLayer64.getString('Text'),
                          false: undefined,
                      })
                    : undefined,
            leftSection:
                nestedLayer64.type !== 'ERROR'
                    ? nestedLayer64.getBoolean('Left Section', {
                          true: nestedLayer64.getInstanceSwap('Swap Left')?.executeTemplate().example,
                      })
                    : undefined,
            rightSection:
                nestedLayer64.type !== 'ERROR'
                    ? nestedLayer64.getBoolean('Right Section', {
                          true: nestedLayer64.getInstanceSwap('Swap Right')?.executeTemplate().example,
                      })
                    : undefined,
            disabled:
                nestedLayer64.type !== 'ERROR'
                    ? nestedLayer64.getEnum('State', {
                          Disabled: true,
                      })
                    : undefined,
            readOnly:
                nestedLayer64.type !== 'ERROR'
                    ? nestedLayer64.getEnum('State', {
                          'Read-only': true,
                      })
                    : undefined,
        };
    })();

    template = {
        id: 'DatePickerInput',
        imports: ["import { DatePickerInput } from '@coveord/plasma-mantine';"],
        example: figma.code`<DatePickerInput${figma.helpers.react.renderProp(
            'label',
            labelProps.label,
        )}${figma.helpers.react.renderProp('required', labelProps.required)}${figma.helpers.react.renderProp(
            'description',
            wrapperProps.descriptionProps.description,
        )}${figma.helpers.react.renderProp('error', wrapperProps.errorProps.error)}${figma.helpers.react.renderProp(
            'placeholder',
            inputProps.placeholder,
        )}${figma.helpers.react.renderProp('leftSection', inputProps.leftSection)}${figma.helpers.react.renderProp(
            'rightSection',
            inputProps.rightSection,
        )}${figma.helpers.react.renderProp(
            'disabled',
            inputProps.disabled,
        )}${figma.helpers.react.renderProp('readOnly', inputProps.readOnly)}/>`,
        metadata: {nestable: true},
    };
}

export default template;
