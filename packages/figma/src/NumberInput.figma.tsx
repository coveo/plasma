import {NumberInput} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import type {ReactElement} from 'react';

figma.connect(
    NumberInput,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2191-1071',
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
            inputProps: figma.nestedProps('.NumberInput.Input', {
                placeholder: figma.boolean('withPlaceholder', {true: figma.string('placeholder'), false: undefined}),
                leftSection: figma.boolean<ReactElement, undefined>('leftSection', {
                    true: figma.instance<ReactElement>('swapLeft'),
                }),
                disabled: figma.enum('state', {disabled: true}),
            }),
        },
        example: (props) => (
            <NumberInput
                label={props.labelProps.label}
                description={props.wrapperProps.descriptionProps.description}
                placeholder={props.inputProps.placeholder}
                leftSection={props.inputProps.leftSection}
                required={props.labelProps.required}
                disabled={props.inputProps.disabled}
                error={props.wrapperProps.errorProps.error}
            />
        ),
    },
);
