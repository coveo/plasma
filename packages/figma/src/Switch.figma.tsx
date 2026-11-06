import {Group, Switch} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Switch, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2250-5136', {
    props: {
        checked: figma.enum('checked', {true: true}),
        disabled: figma.enum('state', {
            disabled: true,
        }),
        readOnly: figma.enum('state', {
            'read-only': true,
        }),
        labelProps: figma.nestedProps('.Input.Label', {
            required: figma.boolean('withAsterisk'),
            label: figma.string('label'),
        }),

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
    },
    example: (props) => (
        <Switch
            checked={props.checked}
            label={props.labelProps.label}
            description={props.descriptionProps.description}
            disabled={props.disabled}
            readOnly={props.readOnly}
            required={props.labelProps.required}
            error={props.errorProps.error}
        />
    ),
});

figma.connect(
    Switch.Group,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2557-11353',
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
        },
        example: (props) => (
            <Switch.Group
                label={props.labelProps.label}
                description={props.wrapperProps.descriptionProps.description}
                required={props.labelProps.required}
                error={props.wrapperProps.errorProps.error}
            >
                <Group mt="xs">
                    <Switch label="Label" />
                    <Switch label="Label" />
                    <Switch label="Label" />
                </Group>
            </Switch.Group>
        ),
    },
);
