import {Switch} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Switch, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2250-5136', {
    props: {
        checked: figma.boolean('Checked'),
        disabled: figma.enum('State', {
            Disabled: true,
        }),
        readOnly: figma.enum('State', {
            'Read-Only': true,
        }),
        labelProps: figma.nestedProps('Input.Label', {
            required: figma.boolean('Asterisk'),
            label: figma.string('Label'),
        }),

        descriptionProps: figma.boolean('Description', {
            true: figma.nestedProps('Input.Description', {
                description: figma.string('Description'),
            }),
            false: {description: undefined},
        }),
        errorProps: figma.boolean('Error', {
            true: figma.nestedProps('Input.Error', {
                error: figma.string('Error'),
            }),
            false: {error: undefined},
        }),
    },
    example: (props) => (
        <Switch
            checked={props.checked}
            label={props.labelProps.label}
            description={props.descriptionProps.description}
            disabled={props.disabled}
            readOnly={props.readOnly}
            required={props.labelProps.required}
            error={props.errorProps.error}
        />
    ),
});
