import {Checkbox, Group, Stack} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Checkbox, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50069', {
    props: {
        labelProps: figma.nestedProps('Input.Label', {
            label: figma.string('Label'),
            required: figma.boolean('Asterisk'),
        }),
        descriptionProps: figma.nestedProps('Input.Description', {
            description: figma.string('Description'),
        }),
        errorProps: figma.nestedProps('Input.Error', {
            error: figma.string('Error'),
        }),
        indeterminate: figma.enum('Checked', {
            Indeterminate: true,
        }),
        disabled: figma.enum('State', {
            Disabled: true,
        }),
        readOnly: figma.enum('State', {
            'Read-only': true,
        }),
        checked: figma.enum('Checked', {
            True: true,
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
        variant: {Align: 'Horizontal'},
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
        variant: {Align: 'Vertical'},
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
            inputWrapperProps: figma.nestedProps('Input.Wrapper', {
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
                groupChildren: figma.children('Checkbox.Group'),
            }),
            labelProps: figma.nestedProps('Input.Label', {
                required: figma.boolean('Asterisk'),
                label: figma.string('Label'),
            }),
            checkboxGroupProps: figma.nestedProps('Checkbox.Group', {
                disabled: figma.enum('State', {
                    Disabled: true,
                }),
                readOnly: figma.enum('State', {
                    'Read-only': true,
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
                readOnly={checkboxGroupProps.readOnly}
            >
                {inputWrapperProps.groupChildren}
            </Checkbox.Group>
        ),
    },
);
