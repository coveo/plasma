import {Group, Radio, RadioCard, Stack} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Radio, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2208-496', {
    props: {
        labelProps: figma.nestedProps('.Input.Label', {
            label: figma.string('Label'),
            required: figma.boolean('Asterisk'),
        }),
        descriptionProps: figma.nestedProps('.Input.Description', {
            description: figma.string('Description'),
        }),
        errorProps: figma.nestedProps('.Input.Error', {
            error: figma.string('Error'),
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
    example: ({labelProps, descriptionProps, errorProps, disabled, readOnly, checked}) => (
        <Radio
            checked={checked}
            label={labelProps.label}
            description={descriptionProps.description}
            required={labelProps.required}
            disabled={disabled}
            readOnly={readOnly}
            error={errorProps.error}
        />
    ),
});

figma.connect(
    RadioCard,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50839',
    {
        props: {
            labelProps: figma.nestedProps('.Input.Label', {
                label: figma.string('Label'),
                required: figma.boolean('Asterisk'),
            }),
            descriptionProps: figma.nestedProps('.Input.Description', {
                description: figma.string('Description'),
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
        example: ({labelProps, descriptionProps, disabled, readOnly, checked}) => (
            <RadioCard
                checked={checked}
                label={labelProps.label}
                description={descriptionProps.description}
                disabled={disabled}
                readOnly={readOnly}
            />
        ),
    },
);

figma.connect(
    Radio.Group,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-47863',
    {
        variant: {Type: 'Card'},
        example: () => (
            <Stack>
                <RadioCard label="Label" description="Description" />
                <RadioCard label="Label" description="Description" />
                <RadioCard label="Label" description="Description" />
                <RadioCard label="Label" description="Description" />
            </Stack>
        ),
    },
);

figma.connect(
    Radio.Group,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-47863',
    {
        variant: {Align: 'Default'},
        example: () => (
            <Group>
                <Radio label="Label" />
                <Radio label="Label" />
                <Radio label="Label" />
                <Radio label="Label" />
            </Group>
        ),
    },
);

figma.connect(
    Radio.Group,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-47863',
    {
        variant: {Align: 'Vertical'},
        example: () => (
            <Stack>
                <Radio label="Label" />
                <Radio label="Label" />
                <Radio label="Label" />
                <Radio label="Label" />
            </Stack>
        ),
    },
);

figma.connect(
    Radio.Group,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2484-10754',
    {
        props: {
            inputWrapperProps: figma.nestedProps('Input.Wrapper', {
                descriptionProps: figma.boolean('Description', {
                    true: figma.nestedProps('.Input.Description', {
                        description: figma.string('Description'),
                    }),
                    false: {description: undefined},
                }),
                errorProps: figma.boolean('Error', {
                    true: figma.nestedProps('.Input.Error', {
                        error: figma.string('Error'),
                    }),
                    false: {error: undefined},
                }),
                groupChildren: figma.children('Radio.Group'),
            }),
            labelProps: figma.nestedProps('.Input.Label', {
                required: figma.boolean('Asterisk'),
                label: figma.string('Label'),
            }),
            radioGroupProps: figma.nestedProps('Radio.Group', {
                disabled: figma.enum('State', {
                    Disabled: true,
                }),
                readOnly: figma.enum('State', {
                    'Read-only': true,
                }),
            }),
        },
        example: ({labelProps, inputWrapperProps, radioGroupProps}) => (
            <Radio.Group
                label={labelProps.label}
                description={inputWrapperProps.descriptionProps.description}
                required={labelProps.required}
                error={inputWrapperProps.errorProps.error}
                disabled={radioGroupProps.disabled}
                readOnly={radioGroupProps.readOnly}
            >
                {inputWrapperProps.groupChildren}
            </Radio.Group>
        ),
    },
);
