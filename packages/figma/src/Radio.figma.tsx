import {Group, Radio, RadioCard, Stack} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Radio, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2208-496', {
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
                label: figma.string('label'),
                required: figma.boolean('withAsterisk'),
            }),
            descriptionProps: figma.nestedProps('.Input.Description', {
                description: figma.string('description'),
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
        variant: {type: 'card'},
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
        variant: {type: 'radio', align: 'default'},
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
        variant: {type: 'radio', align: 'vertical'},
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
                groupChildren: figma.children('.Radio.Group.Root'),
            }),
            labelProps: figma.nestedProps('.Input.Label', {
                required: figma.boolean('withAsterisk'),
                label: figma.string('label'),
            }),
            radioGroupProps: figma.nestedProps('.Radio.Group.Root', {
                disabled: figma.enum('state', {
                    disabled: true,
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
            >
                {inputWrapperProps.groupChildren}
            </Radio.Group>
        ),
    },
);
