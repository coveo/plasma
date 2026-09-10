// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2557-11353
// component=Switch.Group

import figma from 'figma';

const wrapperProps = (function () {
    const nestedLayer23 = figma.selectedInstance.findInstance('Input.Wrapper');
    return {
        descriptionProps:
            nestedLayer23.type !== 'ERROR'
                ? nestedLayer23.getBoolean('Description', {
                      true: (function () {
                          const nestedLayer24 = figma.selectedInstance.findInstance('.Input.Description');
                          return {
                              description:
                                  nestedLayer24.type !== 'ERROR' ? nestedLayer24.getString('Description') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
        errorProps:
            nestedLayer23.type !== 'ERROR'
                ? nestedLayer23.getBoolean('Error', {
                      true: (function () {
                          const nestedLayer25 = figma.selectedInstance.findInstance('.Input.Error');
                          return {
                              error: nestedLayer25.type !== 'ERROR' ? nestedLayer25.getString('Error') : undefined,
                          };
                      })(),
                      false: figma.helpers.react.object({}),
                  })
                : undefined,
    };
})();
const labelProps = (function () {
    const nestedLayer26 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        required: nestedLayer26.type !== 'ERROR' ? nestedLayer26.getBoolean('Asterisk') : undefined,
        label: nestedLayer26.type !== 'ERROR' ? nestedLayer26.getString('Label') : undefined,
    };
})();

export default {
    id: 'Switch.Group',
    imports: ["import { Group, Switch } from '@coveord/plasma-mantine';"],
    example: figma.code`<Switch.Group${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp(
        'description',
        wrapperProps.descriptionProps?.description,
    )}${figma.helpers.react.renderProp(
        'required',
        labelProps.required,
    )}${figma.helpers.react.renderProp('error', wrapperProps.errorProps?.error)}>
                <Group mt="xs">
                    <Switch label="Label"/>
                    <Switch label="Label"/>
                    <Switch label="Label"/>
                </Group>
            </Switch.Group>`,
    metadata: {nestable: true},
};
