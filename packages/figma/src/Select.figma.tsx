import {Select} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Select,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50555',
    {
        props: {
            labelProps: figma.nestedProps('.Input.Label', {
                label: figma.string('label'),
                required: figma.boolean('withAsterisk'),
            }),
            description: figma.nestedProps('.Input.Description', {
                text: figma.string('description'),
            }),
            disabled: figma.enum('state', {
                disabled: true,
            }),
            readOnly: figma.enum('state', {
                'read-only': true,
            }),
            error: figma.nestedProps('.Input.Error', {
                message: figma.string('error'),
            }),
            placeholder: figma.nestedProps('.Input.Input', {
                text: figma.boolean('withPlaceholder', {true: figma.string('text'), false: undefined}),
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
