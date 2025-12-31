import {CodeEditor} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    CodeEditor,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50649',
    {
        props: {
            labelProps: figma.nestedProps('Input.Label', {
                required: figma.boolean('Asterisk'),
                label: figma.string('Label'),
            }),
            descriptionProps: figma.nestedProps('Input.Description', {
                description: figma.string('Description'),
            }),
            disabled: figma.enum('Variant', {Disabled: true}),
            error: figma.enum('Variant', {
                Error: figma.nestedProps('Input.Error', {errorMessage: figma.string('Error')}),
                Disabled: {errorMessage: undefined},
                Default: {errorMessage: undefined},
            }),
        },
        example: (props) => (
            <CodeEditor
                label={props.labelProps.label}
                required={props.labelProps.required}
                disabled={props.disabled}
                error={props.error.errorMessage}
                description={props.descriptionProps.description}
            />
        ),
    },
);
