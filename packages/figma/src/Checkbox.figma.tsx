import {Checkbox} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Checkbox, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50069', {
    props: {
        labelProps: figma.nestedProps('Input.Label', {
            label: figma.string('Label'),
            required: figma.boolean('Asterisk'),
        }),
        descriptionProps: figma.nestedProps('Input.Description', {
            description: figma.string('Description'),
        }),
        errorProps: figma.nestedProps('Input.Error', {
            error: figma.string('Error'),
        }),
        indeterminate: figma.enum('Checked', {
            Indeterminate: true,
        }),
        disabled: figma.enum('State', {
            Disabled: true,
        }),
        readOnly: figma.enum('State', {
            'Read-only': true,
        }),
        checked: figma.enum('Checked', {
            True: true,
        }),
    },
    example: ({labelProps, descriptionProps, errorProps, indeterminate, disabled, readOnly, checked}) => (
        <Checkbox
            checked={checked}
            label={labelProps.label}
            description={descriptionProps.description}
            indeterminate={indeterminate}
            required={labelProps.required}
            disabled={disabled}
            readOnly={readOnly}
            error={errorProps.error}
        />
    ),
});
