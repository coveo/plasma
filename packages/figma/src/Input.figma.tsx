import {Textarea, TextInput} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import {type ReactNode} from 'react';

const inputProps = {
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
};

figma.connect(
    TextInput,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50528&m=dev',
    {
        props: inputProps,
        example: (props) => (
            <TextInput
                label={props.labelProps.label}
                description={props.labelProps.description}
                placeholder={props.inputProps.placeholder}
                leftSection={props.inputProps.leftSection}
                rightSection={props.inputProps.rightSection}
                required={props.labelProps.required}
                disabled={props.inputProps.disabled}
                readOnly={props.inputProps.readOnly}
                error={props.errorProps.error}
            />
        ),
    },
);

figma.connect(
    Textarea,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50534&t=W55qhPhj21tmNF5t-4',
    {
        props: inputProps,
        example: (props) => (
            <Textarea
                label={props.labelProps.label}
                description={props.labelProps.description}
                placeholder={props.inputProps.placeholder}
                leftSection={props.inputProps.leftSection}
                rightSection={props.inputProps.rightSection}
                required={props.labelProps.required}
                disabled={props.inputProps.disabled}
                readOnly={props.inputProps.readOnly}
                error={props.errorProps.error}
            />
        ),
    },
);
