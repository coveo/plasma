import {MultiSelect} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    MultiSelect,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50811',
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
            <MultiSelect
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
