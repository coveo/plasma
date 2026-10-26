import {CodeEditor} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    CodeEditor,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=9279-8771',
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
            inputProps: figma.nestedProps('.CodeEditor.Input', {
                disabled: figma.enum('state', {disabled: true}),
            }),
        },
        example: (props) => (
            <CodeEditor
                label={props.labelProps.label}
                required={props.labelProps.required}
                disabled={props.inputProps.disabled}
                error={props.wrapperProps.errorProps.error}
                description={props.wrapperProps.descriptionProps.description}
            />
        ),
    },
);
