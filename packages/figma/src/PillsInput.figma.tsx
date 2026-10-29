import {Pill, PillsInput} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import type {ReactElement} from 'react';

figma.connect(
    PillsInput,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2845-3284',
    {
        props: {
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
            labelProps: figma.nestedProps('.Input.Label', {
                required: figma.boolean('withAsterisk'),
                label: figma.string('label'),
            }),

            inputProps: figma.nestedProps('.PillsInput.Input', {
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
        example: (props) => (
            <PillsInput
                label={props.labelProps.label}
                description={props.wrapperProps.descriptionProps.description}
                leftSection={props.inputProps.leftSection}
                rightSection={props.inputProps.rightSection}
                required={props.labelProps.required}
                disabled={props.inputProps.disabled}
                error={props.wrapperProps.errorProps.error}
            >
                <Pill.Group>
                    <Pill withRemoveButton>Item</Pill>
                    <Pill withRemoveButton>Item</Pill>
                </Pill.Group>
            </PillsInput>
        ),
    },
);
