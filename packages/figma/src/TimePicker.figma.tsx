import {TimePicker} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import type {ReactElement} from 'react';

figma.connect(
    TimePicker,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2781-26715',
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
            inputProps: figma.nestedProps('.TimePicker.Input', {
                leftSection: figma.boolean<ReactElement, undefined>('leftSection', {
                    true: figma.instance<ReactElement>('swapLeft'),
                }),
                disabled: figma.enum('state', {disabled: true}),
                readOnly: figma.enum('state', {'read-only': true}),
            }),
        },
        example: (props) => (
            <TimePicker
                label={props.labelProps.label}
                description={props.wrapperProps.descriptionProps.description}
                leftSection={props.inputProps.leftSection}
                required={props.labelProps.required}
                disabled={props.inputProps.disabled}
                readOnly={props.inputProps.readOnly}
                error={props.wrapperProps.errorProps.error}
            />
        ),
    },
);
