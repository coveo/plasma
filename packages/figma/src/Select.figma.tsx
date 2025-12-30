import {Select} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Select,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50555',
    {
        props: {
            labelProps: figma.nestedProps('Input.Label', {
                label: figma.string('Label'),
                required: figma.boolean('Asterisk'),
            }),
            description: figma.nestedProps('Input.Description', {
                text: figma.string('Description'),
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
            <Select
                label={props.labelProps.label}
                description={props.description.text}
                placeholder={props.placeholder.text}
                error={props.error.message}
                required={props.labelProps.required}
                disabled={props.disabled}
                readOnly={props.readOnly}
            />
        ),
    },
);
