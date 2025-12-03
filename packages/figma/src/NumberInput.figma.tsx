import {NumberInput} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import {type ReactNode} from 'react';

figma.connect(
    NumberInput,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2191-1071',
    {
        props: {
            wrapperProps: figma.nestedProps('Input.Wrapper', {
                labelProps: figma.boolean('Show Label', {
                    true: figma.nestedProps('Input.Label', {
                        required: figma.boolean('Show Asterisk'),
                        label: figma.string('Label'),
                    }),
                    false: {label: undefined, required: false},
                }),
                descriptionProps: figma.boolean('Show Description', {
                    true: figma.nestedProps('Input.Description', {
                        description: figma.string('Description'),
                    }),
                    false: {description: undefined},
                }),
                errorProps: figma.boolean('Show Error', {
                    true: figma.nestedProps('Input.Error', {
                        error: figma.string('Error'),
                    }),
                    false: {error: undefined},
                }),
            }),
            inputProps: figma.nestedProps('NumberInput.Input', {
                placeholder: figma.boolean('Show Placeholder', {true: figma.string('0'), false: undefined}),
                leftSection: figma.boolean<ReactNode, never>('Left Section', {true: figma.instance('Swap Left')}),
                disabled: figma.enum('State', {Disabled: true}),
                readOnly: figma.enum('State', {'Read-only': true}),
            }),
        },
        example: (props) => (
            <NumberInput
                label={props.wrapperProps.labelProps.label}
                description={props.wrapperProps.descriptionProps.description}
                placeholder={props.inputProps.placeholder}
                leftSection={props.inputProps.leftSection}
                required={props.wrapperProps.labelProps.required}
                disabled={props.inputProps.disabled}
                readOnly={props.inputProps.readOnly}
                error={props.wrapperProps.errorProps.error}
            />
        ),
    },
);
