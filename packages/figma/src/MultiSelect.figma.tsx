import {figma} from '@figma/code-connect';
import {MultiSelect} from '@coveord/plasma-mantine';

figma.connect(
    MultiSelect,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50811',
    {
        props: {
            label: figma.nestedProps('Input.Label', {
                text: figma.string('Label'),
            }),
            description: figma.nestedProps('Input.Description', {
                text: figma.string('Description'),
            }),
            codeConnectBS: figma.nestedProps('Input.Label', {
                required: figma.boolean('Asterisk'),
            }),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
            readOnly: figma.enum('State', {
                'Read-only': true,
            }),
            error: figma.nestedProps('Input.Error', {
                message: figma.string('Error'),
            }),
            placeholder: figma.nestedProps('Input.Input', {
                text: figma.boolean('Placeholder', {true: figma.string('Text'), false: undefined}),
            }),
        },
        example: (props) => (
            <MultiSelect
                label={props.label.text}
                description={props.description.text}
                placeholder={props.placeholder.text}
                error={props.error.message}
                required={props.codeConnectBS.required}
                disabled={props.disabled}
                readOnly={props.readOnly}
            />
        ),
    },
);
