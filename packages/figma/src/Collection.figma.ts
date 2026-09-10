// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=176%3A38103
// component=Collection

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer65 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        text: nestedLayer65.type !== 'ERROR' ? nestedLayer65.getString('Label') : undefined,
        required: nestedLayer65.type !== 'ERROR' ? nestedLayer65.getBoolean('Asterisk') : undefined,
    };
})();
const description = (function () {
    const nestedLayer66 = figma.selectedInstance.findInstance('.Input.Description');
    return {
        text: nestedLayer66.type !== 'ERROR' ? nestedLayer66.getString('Description') : undefined,
    };
})();
const error = (function () {
    const nestedLayer67 = figma.selectedInstance.findInstance('.Input.Error');
    return {
        text: nestedLayer67.type !== 'ERROR' ? nestedLayer67.getString('Error') : undefined,
    };
})();
const addButton = (function () {
    const nestedLayer68 = figma.selectedInstance.findInstance('Button');
    return {
        text: nestedLayer68.type !== 'ERROR' ? nestedLayer68.getString('Placeholder') : undefined,
    };
})();

export default {
    id: 'Collection',
    imports: ["import { Collection } from '@coveord/plasma-mantine';"],
    example: figma.code`<Collection newItem={{ name: '' }}${figma.helpers.react.renderProp(
        'required',
        labelProps.required,
    )}${figma.helpers.react.renderProp('label', labelProps.text)}${figma.helpers.react.renderProp(
        'description',
        description.text,
    )}${figma.helpers.react.renderProp(
        'error',
        error.text,
    )}${figma.helpers.react.renderProp('addLabel', addButton.text)} columns={[
        {
            header: 'Name',
            cell: (item) => <div>{item.name}</div>,
        },
    ]}/>`,
    metadata: {nestable: true},
};
