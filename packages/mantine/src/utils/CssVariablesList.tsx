import {Code, ColorSwatch, keys, Table, Title, useMantineTheme} from '@mantine/core';
import {plasmaCSSVariablesResolver} from '../theme/plasmaCSSVariablesResolver';

export const ColorPreview = ({value}: {value: string}) => {
    if (!value || !value.match(/^(var\(--mantine-color[\w-]+\)|#\w+|rgba?\([\w,. ]+\))$/gm)) {
        return null;
    }

    return <ColorSwatch size={20} color={value} />;
};

interface DataTableProps {
    data: React.ReactNode[][];
    head?: string[];
}

const removeScale = (input: string): string => {
    const regex = /calc\((.*?)\)/g;
    const matches = input.match(regex);
    if (!matches) {
        return input;
    }
    let output = input;
    matches.forEach((match) => {
        const transformed = match.replace('calc(', '').replace(')', '').split('*')[0].trim();
        output = output.replace(match, transformed);
    });
    return output.replaceAll('rem)', 'rem');
};

const getTransformedScaledValue = (value: unknown) => {
    if (typeof value !== 'string' || !value.includes('var(--mantine-scale)')) {
        return value as string;
    }

    return removeScale(value);
};

const MdxDataTable = ({data, head}: DataTableProps) => {
    const rows = data.map((row, index) => {
        const cells = row.map((cell, cellIndex) => (
            <Table.Td key={cellIndex}>{getTransformedScaledValue(cell)}</Table.Td>
        ));
        return <Table.Tr key={index}>{cells}</Table.Tr>;
    });

    const ths = Array.isArray(head) ? head.map((cell, index) => <Table.Th key={index}>{cell}</Table.Th>) : null;

    return (
        <div>
            <Table.ScrollContainer minWidth={500}>
                <Table>
                    {ths && (
                        <Table.Thead>
                            <Table.Tr>{ths}</Table.Tr>
                        </Table.Thead>
                    )}
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </div>
    );
};
export const CssVariablesList = () => {
    // Get the current theme which includes any runtime changes (like primary color)
    const currentTheme = useMantineTheme();
    const resolvedVariables = plasmaCSSVariablesResolver(currentTheme);
    const variables = keys(resolvedVariables.variables).map((key) => [
        <Code style={{whiteSpace: 'nowrap'}} key="code">
            {String(key)}
        </Code>,
        resolvedVariables.variables[key],
        <ColorPreview value={resolvedVariables.variables[key]} key="swatch" />,
    ]);

    const lightVariables = keys(resolvedVariables.light).map((key) => [
        <Code style={{whiteSpace: 'nowrap'}} key="code">
            {String(key)}
        </Code>,
        resolvedVariables.light[key],
        <ColorPreview value={resolvedVariables.light[key]} key="swatch" />,
    ]);

    const darkVariables = keys(resolvedVariables.dark).map((key) => [
        <Code style={{whiteSpace: 'nowrap'}} key="code">
            {String(key)}
        </Code>,
        resolvedVariables.dark[key],
        <ColorPreview value={resolvedVariables.dark[key]} key="swatch" />,
    ]);

    return (
        <>
            <Title order={2} id="no-dependency">
                CSS variables not depending on color scheme
            </Title>
            <MdxDataTable data={variables} />

            <Title order={2} id="light-only">
                Light color scheme only variables
            </Title>
            <MdxDataTable data={lightVariables} />

            <Title order={2} id="dark-only">
                Dark color scheme only variables
            </Title>
            <MdxDataTable data={darkVariables} />
        </>
    );
};
