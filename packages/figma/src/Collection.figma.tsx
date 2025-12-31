import {Collection} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Collection,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=176%3A38103',
    {
        props: {
            label: figma.nestedProps('Input.Label', {
                text: figma.string('Label'),
            }),
            codeConnectBS: figma.nestedProps('Input.Label', {
                required: figma.boolean('Asterisk'),
            }),
            description: figma.nestedProps('Input.Description', {
                text: figma.string('Description'),
            }),
            error: figma.nestedProps('Input.Error', {
                text: figma.string('Error'),
            }),
            addButton: figma.nestedProps('Button', {
                text: figma.string('Placeholder'),
            }),
        },
        example: (props) => (
            <Collection
                newItem=""
                required={props.codeConnectBS.required}
                label={props.label.text}
                description={props.description.text}
                error={props.error.text}
                addLabel={props.addButton.text}
            >
                {(item) => <div>{item}</div>}
            </Collection>
        ),
    },
);
