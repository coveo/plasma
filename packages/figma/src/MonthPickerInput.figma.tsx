import {MonthPickerInput} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import {ReactNode} from 'react';

figma.connect(
    MonthPickerInput,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51022',
    {
        props: {
            labelProps: figma.nestedProps('.Input.Label', {
                required: figma.boolean('Asterisk'),
                label: figma.string('Label'),
            }),
            wrapperProps: figma.nestedProps('Input.Wrapper', {
                descriptionProps: figma.boolean('Description', {
                    true: figma.nestedProps('.Input.Description', {
                        description: figma.string('Description'),
                    }),
                    false: {description: undefined},
                }),
                errorProps: figma.boolean('Error', {
                    true: figma.nestedProps('.Input.Error', {
                        error: figma.string('Error'),
                    }),
                    false: {error: undefined},
                }),
            }),
            inputProps: figma.nestedProps('.Input.Input', {
                placeholder: figma.boolean('Placeholder', {true: figma.string('Text'), false: undefined}),
                leftSection: figma.boolean<ReactNode, never>('Left Section', {true: figma.instance('Swap Left')}),
                rightSection: figma.boolean<ReactNode, never>('Right Section', {true: figma.instance('Swap Right')}),
                disabled: figma.enum('State', {Disabled: true}),
                readOnly: figma.enum('State', {'Read-only': true}),
            }),
        },
        variant: {Variant: 'Month'},
        example: (props) => (
            <MonthPickerInput
                label={props.labelProps.label}
                required={props.labelProps.required}
                description={props.wrapperProps.descriptionProps.description}
                error={props.wrapperProps.errorProps.error}
                placeholder={props.inputProps.placeholder}
                leftSection={props.inputProps.leftSection}
                rightSection={props.inputProps.rightSection}
                disabled={props.inputProps.disabled}
                readOnly={props.inputProps.readOnly}
            />
        ),
    },
);
