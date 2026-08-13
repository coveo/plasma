import type {PlasmaColors} from '@coveord/plasma-mantine';
import {getContrastColor, Group, Stack, Text, Tooltip, UnstyledButton, useMantineTheme} from '@mantine/core';
import {useClipboard} from '@mantine/hooks';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';
import {FoundationWrapper} from '../FoundationWrapper.js';
import classes from './Colors.module.css';

type ColorName = keyof typeof PlasmaColors;

const colorSections = [
    {
        title: 'Colors',
        colors: [
            'red',
            'orange',
            'yellow',
            'green',
            'teal',
            'cyan',
            'blue',
            'indigo',
            'navy',
            'violet',
            'grape',
            'gray',
            'dark',
        ],
    },
] as const satisfies ReadonlyArray<{title: string; colors: readonly ColorName[]}>;

const defaultShadeIndex = 5;

const meta: Meta = {
    title: '@foundation/Colors',
    id: 'colors',
    tags: ['!dev'],
    parameters: {
        layout: 'padded',
        controls: {
            disable: true,
        },
    },
};

export default meta;
type Story = StoryObj;

const getDefaultShade = (colors: readonly string[]) => Math.min(defaultShadeIndex, colors.length - 1);

const ColorsGroup = ({group}: {group: ColorName}) => {
    const theme = useMantineTheme();
    const colors = theme.colors[group];
    const initialIndex = getDefaultShade(colors);
    const [active, setActive] = useState({color: colors[initialIndex], index: initialIndex});
    const clipboard = useClipboard({timeout: 1000});

    const swatches = colors.map((color, index) => (
        <UnstyledButton
            key={`${group}-${color}-${index}`}
            aria-label={`Copy ${group} shade ${index}`}
            className={classes.secondarySwatch}
            onMouseEnter={() => setActive({color, index})}
            onFocus={() => setActive({color, index})}
            onClick={() => clipboard.copy(color)}
            style={{
                background: color,
                color: getContrastColor({
                    color,
                    theme: {...theme, luminanceThreshold: 0.25},
                    autoContrast: true,
                }),
            }}
        >
            <span className={classes.secondarySwatchLabel}>{index}</span>
        </UnstyledButton>
    ));

    return (
        <Tooltip
            color={clipboard.copied ? 'teal.8' : undefined}
            label={clipboard.copied ? `Copied ${active.color}` : 'Hover shades for preview, click to copy HEX value'}
            multiline
            maw={220}
        >
            <div
                className={classes.card}
                onMouseLeave={() => setActive({color: colors[initialIndex], index: initialIndex})}
            >
                <div className={classes.cardInner}>
                    <UnstyledButton
                        aria-label={`Copy ${group} active shade`}
                        className={classes.primarySwatch}
                        onClick={() => clipboard.copy(active.color)}
                        style={{
                            background: active.color,
                            color: getContrastColor({color: active.color, theme, autoContrast: true}),
                        }}
                    >
                        <Stack justify="space-between">
                            <Group justify="space-between">
                                <Text className={classes.groupName}>{group}</Text>
                                <div className={classes.activeMeta}>
                                    <span className={classes.activeIndex}>{active.index}</span>
                                    <span className={classes.activeValue}>{active.color}</span>
                                </div>
                            </Group>
                            <Text>{`--mantine-color-${group}-${active.index}`}</Text>
                        </Stack>
                    </UnstyledButton>

                    <div className={classes.swatches}>{swatches}</div>
                </div>
            </div>
        </Tooltip>
    );
};

export const Overview: Story = {
    render: () => (
        <FoundationWrapper
            title="Colors"
            description="The Plasma theme defines semantic and palette color tokens used across components and states."
        >
            {colorSections.map(({title, colors}) => (
                <section key={title} className={classes.section}>
                    <div className={classes.grid}>
                        {colors.map((colorName) => (
                            <ColorsGroup key={colorName} group={colorName} />
                        ))}
                    </div>
                </section>
            ))}
        </FoundationWrapper>
    ),
};
