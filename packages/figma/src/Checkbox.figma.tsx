import {Checkbox, Group, Stack} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Checkbox, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50069', {
    props: {
        labelProps: figma.nestedProps('.Input.Label', {
            label: figma.string('label'),
            required: figma.boolean('withAsterisk'),
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
        indeterminate: figma.enum('checked', {
            indeterminate: true,
        }),
        disabled: figma.enum('state', {
            disabled: true,
        }),
        readOnly: figma.enum('state', {
            'read-only': true,
        }),
        checked: figma.enum('checked', {
            true: true,
        }),
    },
    example: ({labelProps, descriptionProps, errorProps, indeterminate, disabled, readOnly, checked}) => (
        <Checkbox
            checked={checked}
            label={labelProps.label}
            description={descriptionProps.description}
            indeterminate={indeterminate}
            required={labelProps.required}
            disabled={disabled}
            readOnly={readOnly}
            error={errorProps.error}
        />
    ),
});

figma.connect(
    Checkbox.Group,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2246-3811',
    {
        variant: {type: 'checkbox', align: 'default'},
        example: () => (
            <Group>
                <Checkbox label="Label" />
                <Checkbox label="Label" />
                <Checkbox label="Label" />
                <Checkbox label="Label" />
            </Group>
        ),
    },
);

figma.connect(
    Checkbox.Group,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2246-3811',
    {
        variant: {type: 'checkbox', align: 'vertical'},
        example: () => (
            <Stack>
                <Checkbox label="Label" />
                <Checkbox label="Label" />
                <Checkbox label="Label" />
                <Checkbox label="Label" />
            </Stack>
        ),
    },
);

figma.connect(
    Checkbox.Group,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2557-11354',
    {
        props: {
            inputWrapperProps: figma.nestedProps('.Input.Wrapper', {
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
                groupChildren: figma.children('.Checkbox.Group.Root'),
            }),
            labelProps: figma.nestedProps('.Input.Label', {
                required: figma.boolean('withAsterisk'),
                label: figma.string('label'),
            }),
            checkboxGroupProps: figma.nestedProps('.Checkbox.Group.Root', {
                disabled: figma.enum('state', {
                    disabled: true,
                }),
            }),
        },
        example: ({labelProps, inputWrapperProps, checkboxGroupProps}) => (
            <Checkbox.Group
                label={labelProps.label}
                description={inputWrapperProps.descriptionProps.description}
                required={labelProps.required}
                error={inputWrapperProps.errorProps.error}
                disabled={checkboxGroupProps.disabled}
            >
                {inputWrapperProps.groupChildren}
            </Checkbox.Group>
        ),
    },
);
