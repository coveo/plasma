import {TextInput} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import {ReactNode} from 'react';

figma.connect(
    TextInput,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50528&m=dev',
    {
        props: {
            inputProps: figma.nestedProps('Input', {
                placeholder: figma.boolean('Show Placeholder', {true: figma.string('Placeholder'), false: undefined}),
                leftSection: figma.boolean<ReactNode, never>('Left Icon', {true: figma.instance('Swap Left')}),
                rightSection: figma.boolean<ReactNode, never>('Right Icon', {true: figma.instance('Swap Right')}),
                disabled: figma.enum('State', {Disabled: true}),
                readOnly: figma.enum('State', {'Read-only': true}),
            }),
            labelProps: figma.boolean('Main Label', {
                true: figma.nestedProps('Input.Label', {
                    label: figma.boolean<ReactNode, never>('Show Label', {true: 'Label'}),
                    description: figma.boolean<ReactNode, never>('Show Description', {true: 'Description'}),
                    required: figma.boolean('Show Asterisk'),
                }),
                false: {label: undefined, description: undefined, required: false},
            }),
            errorProps: figma.boolean('Show Caption Error', {
                true: figma.nestedProps('Input.Error', {
                    error: figma.boolean<ReactNode, never>('Show Error', {true: 'Error'}),
                }),
                false: {error: undefined},
            }),
        },
        example: ({inputProps, labelProps, errorProps}) => (
            <TextInput
                label={labelProps.label}
                description={labelProps.description}
                placeholder={inputProps.placeholder}
                leftSection={inputProps.leftSection}
                rightSection={inputProps.rightSection}
                required={labelProps.required}
                disabled={inputProps.disabled}
                readOnly={inputProps.readOnly}
                error={errorProps.error}
            />
        ),
    },
);
