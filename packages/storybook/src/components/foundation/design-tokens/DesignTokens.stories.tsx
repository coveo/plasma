import {plasmaCSSVariablesResolver} from '@coveord/plasma-mantine';
import {
    Badge,
    Code,
    ColorSwatch,
    CssVariables,
    Group,
    keys,
    Stack,
    Table,
    Text,
    Title,
    useMantineTheme,
} from '@mantine/core';
import {Meta, StoryObj} from '@storybook/react-vite';
import {useEffect, useState} from 'react';
import {FoundationWrapper} from '../FoundationWrapper.js';
import classes from './DesignTokens.module.css';

const meta: Meta = {
    title: 'Foundations/Design tokens',
    id: 'foundation-design-tokens',
    tags: ['!dev'],
    parameters: {
        layout: 'padded',
        controls: {disable: true},
        chromatic: {disableSnapshot: true},
    },
};

export default meta;
type Story = StoryObj;

/** Resolve any CSS colour expression to rgb by letting the browser do it. */
const resolveToRgb = (cssValue: string): [number, number, number] | null => {
    const probe = document.createElement('span');
    probe.style.color = cssValue;
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    document.body.appendChild(probe);
    const computed = getComputedStyle(probe).color;
    probe.remove();
    const match = computed.match(/rgba?\(([^)]+)\)/);
    if (!match) {
        return null;
    }
    const [r, g, b] = match[1].split(',').map((part) => parseFloat(part));
    return [r, g, b];
};

const relativeLuminance = ([r, g, b]: [number, number, number]): number => {
    const channel = (value: number) => {
        const c = value / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const contrastRatio = (fg: string, bg: string): number | null => {
    const a = resolveToRgb(fg);
    const b = resolveToRgb(bg);
    if (!a || !b) {
        return null;
    }
    const [l1, l2] = [relativeLuminance(a), relativeLuminance(b)];
    const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
    return (hi + 0.05) / (lo + 0.05);
};

/** WCAG verdict for normal-size text. Non-text roles are measured but not graded. */
const grade = (ratio: number, isText: boolean) => {
    if (!isText) {
        return ratio >= 3 ? {label: 'ok', color: 'green'} : {label: 'below 3:1', color: 'red'};
    }
    if (ratio >= 7) {
        return {label: 'AAA', color: 'green'};
    }
    if (ratio >= 4.5) {
        return {label: 'AA', color: 'green'};
    }
    return {label: 'fail', color: 'red'};
};

type Role = {name: string; cssVar: string; measure?: 'text' | 'boundary'; deprecated?: boolean; use?: string};

const ROLES: Role[] = [
    {name: 'Page background', cssVar: '--mantine-color-body'},
    {name: 'App background', cssVar: '--coveo-app-background'},
    {name: 'Text', cssVar: '--mantine-color-text', measure: 'text'},
    {name: 'Dimmed text', cssVar: '--mantine-color-dimmed', measure: 'text'},
    {name: 'Placeholder', cssVar: '--mantine-color-placeholder', measure: 'text'},
    {name: 'Primary action', cssVar: '--mantine-primary-color-filled'},
    {name: 'Primary text', cssVar: '--coveo-color-text-primary', measure: 'text'},
    {name: 'Error', cssVar: '--mantine-color-error', measure: 'text'},
    {name: 'Default border', cssVar: '--mantine-color-default-border', measure: 'boundary'},
    {name: 'Input border', cssVar: '--coveo-color-input-border', measure: 'boundary'},
    {name: 'Read-only background', cssVar: '--coveo-color-bg-readonly'},
    {name: 'Disabled', cssVar: '--mantine-color-disabled'},
    {name: 'Title', cssVar: '--coveo-color-title', deprecated: true, use: '--mantine-color-text'},
];

const RolesTable = () => {
    const theme = useMantineTheme();
    const resolved = plasmaCSSVariablesResolver(theme);
    const [measured, setMeasured] = useState<Record<string, number | null>>({});

    // Contrast has to be read from the rendered page: the resolver returns expressions
    // like var(--mantine-color-blue-5), which only the browser can flatten to rgb.
    useEffect(() => {
        const next: Record<string, number | null> = {};
        for (const role of ROLES) {
            if (!role.measure) {
                continue;
            }
            next[role.cssVar] = contrastRatio(`var(${role.cssVar})`, 'var(--mantine-color-body)');
        }
        setMeasured(next);
    }, [theme]);

    // Plasma does not support dark mode, so only the light values are published.
    const valueFor = (cssVar: string) =>
        (resolved.light as Record<string, string>)[cssVar] ??
        (resolved.variables as Record<string, string>)[cssVar] ??
        '—';

    return (
        <Table.ScrollContainer minWidth={620}>
            <Table withTableBorder withColumnBorders className={classes.table}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Role</Table.Th>
                        <Table.Th>CSS custom property</Table.Th>
                        <Table.Th>Value</Table.Th>
                        <Table.Th>Contrast on page background</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {ROLES.map((role) => {
                        const ratio = measured[role.cssVar];
                        const verdict = ratio != null ? grade(ratio, role.measure === 'text') : null;
                        return (
                            <Table.Tr key={role.cssVar}>
                                <Table.Td>{role.name}</Table.Td>
                                <Table.Td>
                                    <Group gap="xs" wrap="nowrap">
                                        <Code className={classes.nowrap}>{role.cssVar}</Code>
                                        {role.deprecated ? <Badge color="red">deprecated</Badge> : null}
                                    </Group>
                                </Table.Td>
                                {role.deprecated ? (
                                    <Table.Td>
                                        Use <Code>{role.use}</Code>.
                                    </Table.Td>
                                ) : (
                                    <Table.Td>
                                        <Group gap="xs" wrap="nowrap">
                                            <ColorSwatch size={16} color={valueFor(role.cssVar)} withShadow />
                                            <Text size="xs">{valueFor(role.cssVar)}</Text>
                                        </Group>
                                    </Table.Td>
                                )}
                                <Table.Td>
                                    {ratio != null && verdict ? (
                                        <Group gap="xs" wrap="nowrap">
                                            <Text size="xs">{ratio.toFixed(1)}</Text>
                                            <Badge color={verdict.color}>{verdict.label}</Badge>
                                        </Group>
                                    ) : (
                                        '—'
                                    )}
                                </Table.Td>
                            </Table.Tr>
                        );
                    })}
                </Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
};

const SCALES: Array<{title: string; prefix: string; sizes: string[]}> = [
    {title: 'Spacing', prefix: '--mantine-spacing-', sizes: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']},
    {title: 'Radius', prefix: '--mantine-radius-', sizes: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']},
    {title: 'Font size', prefix: '--mantine-font-size-', sizes: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']},
    {title: 'Heading', prefix: '--mantine-h', sizes: ['1', '2', '3', '4', '5', '6']},
];

const ScaleTable = ({prefix, sizes}: {prefix: string; sizes: string[]}) => {
    const [values, setValues] = useState<Record<string, string>>({});

    useEffect(() => {
        const root = getComputedStyle(document.documentElement);
        const next: Record<string, string> = {};
        for (const size of sizes) {
            const name = prefix.endsWith('-h') ? `${prefix}${size}-font-size` : `${prefix}${size}`;
            next[size] = root.getPropertyValue(name).trim() || '—';
        }
        setValues(next);
    }, [prefix, sizes]);

    return (
        <Table withTableBorder withColumnBorders>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th w="20%">Token</Table.Th>
                    <Table.Th>CSS</Table.Th>
                    <Table.Th w="20%">Value</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {sizes.map((size) => (
                    <Table.Tr key={size}>
                        <Table.Td>{prefix.endsWith('-h') ? `h${size}` : size}</Table.Td>
                        <Table.Td>
                            <Code className={classes.nowrap}>
                                {prefix.endsWith('-h') ? `${prefix}${size}-font-size` : `${prefix}${size}`}
                            </Code>
                        </Table.Td>
                        <Table.Td>{values[size] ?? '—'}</Table.Td>
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    );
};

const getVariables = (resolvedVariables: CssVariables, prefix: string) =>
    keys(resolvedVariables)
        .filter((key) => String(key).startsWith(prefix))
        .map((key) => ({name: String(key), value: resolvedVariables[key] as string}));

const FullReferenceTable = () => {
    const theme = useMantineTheme();
    const resolved = plasmaCSSVariablesResolver(theme);
    // The resolver also returns a `dark` set. It is not published: Plasma does not support
    // dark mode, and documenting values nobody can render invites them to be used.
    const blocks: Array<[string, CssVariables, string]> = [
        ['Coveo custom CSS variables', resolved.variables, '--coveo-'],
        ['Coveo — theme-dependent values', resolved.light, '--coveo-'],
        ['Mantine CSS variables', resolved.variables, '--mantine-'],
        ['Mantine — theme-dependent values', resolved.light, '--mantine-'],
    ];

    return (
        <Stack>
            {blocks.map(([title, source, prefix]) => {
                const rows = getVariables(source, prefix);
                if (rows.length === 0) {
                    return null;
                }
                return (
                    <div key={title}>
                        <Title order={5} mb="xs">
                            {title}
                        </Title>
                        <Table.ScrollContainer minWidth={500}>
                            <Table className={classes.table}>
                                <Table.Tbody>
                                    {rows.map(({name, value}) => (
                                        <Table.Tr key={name}>
                                            <Table.Td>
                                                <Code className={classes.nowrap}>{name}</Code>
                                            </Table.Td>
                                            <Table.Td>{value}</Table.Td>
                                            <Table.Td w={40}>
                                                {/^(var\(|#|rgb|color-mix)/.test(String(value)) ? (
                                                    <ColorSwatch size={16} color={value} withShadow />
                                                ) : null}
                                            </Table.Td>
                                        </Table.Tr>
                                    ))}
                                </Table.Tbody>
                            </Table>
                        </Table.ScrollContainer>
                    </div>
                );
            })}
        </Stack>
    );
};

export const Overview: Story = {
    render: () => (
        <FoundationWrapper
            title="Design tokens"
            description="Every value Plasma ships, the name it has in code, and what it resolves to."
        >
            <div />
        </FoundationWrapper>
    ),
};

export const Roles: Story = {render: () => <RolesTable />};

export const Scales: Story = {
    render: () => (
        <Stack>
            {SCALES.map(({title, prefix, sizes}) => (
                <div key={title}>
                    <Title order={5} mb="xs">
                        {title}
                    </Title>
                    <ScaleTable prefix={prefix} sizes={sizes} />
                </div>
            ))}
        </Stack>
    ),
};

export const FullReference: Story = {render: () => <FullReferenceTable />};
