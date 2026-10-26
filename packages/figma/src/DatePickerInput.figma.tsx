import {DatePickerInput} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import type {ReactElement} from 'react';

figma.connect(
    DatePickerInput,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51022',
    {
        props: {
            labelProps: figma.nestedProps('.Input.Label', {
                required: figma.boolean('withAsterisk'),
                label: figma.string('label'),
            }),
            wrapperProps: figma.nestedProps('.Input.Wrapper', {
                descriptionProps: figma.boolean('description', {
                    true: figma.nestedProps('.Input.Description', {
                        description: figma.string('description'),
                    }),
                    false: {description: undefined},
                }),
                errorProps: figma.boolean('error', {
                    true: figma.nestedProps('.Input.Error', {
                        error: figma.string('error'),
                    }),
                    false: {error: undefined},
                }),
            }),
            inputProps: figma.nestedProps('.Input.Input', {
                placeholder: figma.boolean('withPlaceholder', {true: figma.string('text'), false: undefined}),
                leftSection: figma.boolean<ReactElement, undefined>('leftSection', {
                    true: figma.instance<ReactElement>('swapLeft'),
                }),
                rightSection: figma.boolean<ReactElement, undefined>('rightSection', {
                    true: figma.instance<ReactElement>('swapRight'),
                }),
                disabled: figma.enum('state', {disabled: true}),
                readOnly: figma.enum('state', {'read-only': true}),
            }),
        },
        variant: {variant: 'date'},
        example: (props) => (
            <DatePickerInput
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
