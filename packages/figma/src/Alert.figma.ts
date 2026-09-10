// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50375
// component=Alert.Information

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Variant') === 'Information') {
    const message = figma.selectedInstance.findText('Message').__render__();
    const withCloseButton = figma.selectedInstance.getBoolean('Show CloseButton');
    const title = figma.selectedInstance.getBoolean('Show Title', {
        true: figma.selectedInstance.findText('Title').__render__(),
    });
    const contentSwap = figma.selectedInstance.getBoolean('Show ContentSwap', {
        true: figma.selectedInstance.getInstanceSwap('Instance')?.executeTemplate().example,
    });

    template = {
        id: 'Alert.Information',
        imports: ["import { Alert, Text } from '@coveord/plasma-mantine';"],
        example: figma.code`<Alert.Information${figma.helpers.react.renderProp(
            'withCloseButton',
            withCloseButton,
        )}${figma.helpers.react.renderProp('title', title)}>
                <Text>${figma.helpers.react.renderChildren(message)}</Text>
                ${figma.helpers.react.renderChildren(contentSwap)}
            </Alert.Information>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Advice') {
    const message = figma.selectedInstance.findText('Message').__render__();
    const withCloseButton = figma.selectedInstance.getBoolean('Show CloseButton');
    const title = figma.selectedInstance.getBoolean('Show Title', {
        true: figma.selectedInstance.findText('Title').__render__(),
    });
    const contentSwap = figma.selectedInstance.getBoolean('Show ContentSwap', {
        true: figma.selectedInstance.getInstanceSwap('Instance')?.executeTemplate().example,
    });

    template = {
        id: 'Alert.Advice',
        imports: ["import { Alert, Text } from '@coveord/plasma-mantine';"],
        example: figma.code`<Alert.Advice${figma.helpers.react.renderProp(
            'withCloseButton',
            withCloseButton,
        )}${figma.helpers.react.renderProp('title', title)}>
                <Text>${figma.helpers.react.renderChildren(message)}</Text>
                ${figma.helpers.react.renderChildren(contentSwap)}
            </Alert.Advice>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Warning') {
    const message = figma.selectedInstance.findText('Message').__render__();
    const withCloseButton = figma.selectedInstance.getBoolean('Show CloseButton');
    const title = figma.selectedInstance.getBoolean('Show Title', {
        true: figma.selectedInstance.findText('Title').__render__(),
    });
    const contentSwap = figma.selectedInstance.getBoolean('Show ContentSwap', {
        true: figma.selectedInstance.getInstanceSwap('Instance')?.executeTemplate().example,
    });

    template = {
        id: 'Alert.Warning',
        imports: ["import { Alert, Text } from '@coveord/plasma-mantine';"],
        example: figma.code`<Alert.Warning${figma.helpers.react.renderProp(
            'withCloseButton',
            withCloseButton,
        )}${figma.helpers.react.renderProp('title', title)}>
                <Text>${figma.helpers.react.renderChildren(message)}</Text>
                ${figma.helpers.react.renderChildren(contentSwap)}
            </Alert.Warning>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Critical') {
    const message = figma.selectedInstance.findText('Message').__render__();
    const withCloseButton = figma.selectedInstance.getBoolean('Show CloseButton');
    const title = figma.selectedInstance.getBoolean('Show Title', {
        true: figma.selectedInstance.findText('Title').__render__(),
    });
    const contentSwap = figma.selectedInstance.getBoolean('Show ContentSwap', {
        true: figma.selectedInstance.getInstanceSwap('Instance')?.executeTemplate().example,
    });

    template = {
        id: 'Alert.Critical',
        imports: ["import { Alert, Text } from '@coveord/plasma-mantine';"],
        example: figma.code`<Alert.Critical${figma.helpers.react.renderProp(
            'withCloseButton',
            withCloseButton,
        )}${figma.helpers.react.renderProp('title', title)}>
                <Text>${figma.helpers.react.renderChildren(message)}</Text>
                ${figma.helpers.react.renderChildren(contentSwap)}
            </Alert.Critical>`,
        metadata: {nestable: true},
    };
} else {
    const message = figma.selectedInstance.findText('Message').__render__();
    const withCloseButton = figma.selectedInstance.getBoolean('Show CloseButton');
    const title = figma.selectedInstance.getBoolean('Show Title', {
        true: figma.selectedInstance.findText('Title').__render__(),
    });
    const contentSwap = figma.selectedInstance.getBoolean('Show ContentSwap', {
        true: figma.selectedInstance.getInstanceSwap('Instance')?.executeTemplate().example,
    });

    template = {
        id: 'Alert.Critical',
        imports: ["import { Alert, Text } from '@coveord/plasma-mantine';"],
        example: figma.code`<Alert.Critical${figma.helpers.react.renderProp(
            'withCloseButton',
            withCloseButton,
        )}${figma.helpers.react.renderProp('title', title)}>
                <Text>${figma.helpers.react.renderChildren(message)}</Text>
                ${figma.helpers.react.renderChildren(contentSwap)}
            </Alert.Critical>`,
        metadata: {nestable: true},
    };
}

export default template;
