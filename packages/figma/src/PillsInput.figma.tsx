import {Pill, PillsInput} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import {type ReactNode} from 'react';

figma.connect(
    PillsInput,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2845-3284',
    {
        props: {
            wrapperProps: figma.nestedProps('Input.Wrapper', {
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
            }),
            labelProps: figma.nestedProps('Input.Label', {
                required: figma.boolean('Asterisk'),
                label: figma.string('Label'),
            }),

            inputProps: figma.nestedProps('PillsInput.Input', {
                leftSection: figma.boolean<ReactNode, never>('Left Section', {true: figma.instance('Swap Left')}),
                rightSection: figma.boolean<ReactNode, never>('Right Section', {true: figma.instance('Swap Right')}),
                disabled: figma.enum('State', {Disabled: true}),
                readOnly: figma.enum('State', {'Read-only': true}),
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
