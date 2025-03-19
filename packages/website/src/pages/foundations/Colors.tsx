import {Group, Stack, Title} from '@coveord/plasma-mantine';
import {ExternalSize16Px} from '@coveord/plasma-react-icons';
import {color} from '@coveord/plasma-tokens';
import {InlineCodeHighlight} from '@mantine/code-highlight';
import {Anchor, Box, Table as MantineTable} from '@mantine/core';
import kebabCase from 'lodash.kebabcase';
import {FunctionComponent} from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

type Color = string;
type ColorPalette = Record<number, Color>;
type ColorPaletteGroup = Record<string, ColorPalette>;

const isColor = (value: unknown): value is Color => typeof value === 'string';
const isPalette = (value: unknown): value is ColorPalette =>
    typeof value === 'object' && Object.keys(value).some((key) => /^\d$/.test(key));
const isColorGroup = (value: unknown): value is ColorPaletteGroup => typeof value !== 'string';

const ColorBlock: FunctionComponent<{colorName: string; colorValue: string}> = ({colorName, colorValue}) => (
    <div className="color-box">
        <div className="mb1 overflow-hidden color-sticker card" style={{background: colorValue}} />
        <div className="color-details">
            <MantineTable fz="xs">
                <MantineTable.Tr>
                    <MantineTable.Td>TS</MantineTable.Td>
                    <MantineTable.Td>
                        <InlineCodeHighlight fz="xs" lang="ts" code={colorName.replace(/-/g, '.')} />
                    </MantineTable.Td>
                </MantineTable.Tr>
                <MantineTable.Tr>
                    <MantineTable.Td>SCSS</MantineTable.Td>
                    <MantineTable.Td>
                        <InlineCodeHighlight fz="xs" lang="scss" code={`$plasma-${kebabCase(colorName)}`} />
                    </MantineTable.Td>
                </MantineTable.Tr>
                <MantineTable.Tr>
                    <MantineTable.Td>CSS</MantineTable.Td>
                    <MantineTable.Td>
                        <InlineCodeHighlight fz="xs" lang="css" code={`--plasma-${kebabCase(colorName)}`} />
                    </MantineTable.Td>
                </MantineTable.Tr>
            </MantineTable>
        </div>
    </div>
);

const primaryFirst = (a: string, b: string) => {
    if (a === 'primary') {
        return -1;
    }
    if (b === 'primary') {
        return 1;
    }
    return 0;
};

const ColorGroup: FunctionComponent<{
    name: string;
    value: Color | ColorPalette | ColorPaletteGroup;
}> = ({name, value}) => {
    if (isColor(value)) {
        return <ColorBlock colorName={name} colorValue={value} />;
    }

    return (
        <>
            {Object.keys(value)
                .sort() // Alphabetical
                .sort(primaryFirst)
                .sort((a, b) => Number(isColorGroup(value[a])) - Number(isColorGroup(value[b]))) // ColorBlock first
                .map((child) => {
                    if (isColor(value[child])) {
                        const isNumeric = /\d+/.test(child);
                        return (
                            <Stack key={child} gap={0}>
                                <Title ta={isNumeric ? 'center' : undefined} fz="sm" order={4}>
                                    {child}
                                </Title>
                                <Group gap="sm">
                                    <ColorGroup name={`${name}-${child}`} value={value[child]} />
                                </Group>
                            </Stack>
                        );
                    }
                    if (isPalette(value[child])) {
                        return (
                            <Stack key={child} gap={0}>
                                <Title fz="md" order={3}>
                                    {child}
                                </Title>
                                <Group gap="sm" align="flex-start">
                                    <ColorGroup name={`${name}-${child}`} value={value[child]} />
                                </Group>
                            </Stack>
                        );
                    }

                    return (
                        <Stack key={child} mb="sm" justify="center" gap={0}>
                            <Title fz="xl" order={2}>
                                {child}
                            </Title>
                            <Stack gap="xl" pl="lg">
                                <ColorGroup name={`${name}-${child}`} value={(value as ColorPaletteGroup)[child]} />
                            </Stack>
                        </Stack>
                    );
                })}
        </>
    );
};

export const ColorsExamples = () => (
    <PageLayout
        id="Colors"
        section="Foundations"
        title="Colors"
        thumbnail="colors"
        description="The colors that give Plasma its identity"
        sourcePath="/packages/tokens#readme"
        withPropsTable={false}
    >
        <div className="plasma-page-layout__section pl5">
            <p>
                All colors are exposed through the{' '}
                <Anchor href="https://github.com/coveo/plasma/tree/master/packages/tokens#readme" target="_blank">
                    @coveord/plasma-tokens
                    <Box component={ExternalSize16Px} height={16} ml="xxs" />
                </Anchor>{' '}
                package in 3 formats: TypeScript, Sass and CSS. Hover over any color to see its name in any of those
                formats.
            </p>
            <ColorGroup name="color" value={color} />
        </div>
    </PageLayout>
);

export default ColorsExamples;
