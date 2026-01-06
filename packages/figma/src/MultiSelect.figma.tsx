import {figma} from '@figma/code-connect';
import {MultiSelect} from '@coveord/plasma-mantine';

figma.connect(
    MultiSelect,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50811',
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
