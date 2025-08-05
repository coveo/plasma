import {LinksSize16Px} from '@coveord/plasma-react-icons';
import {Anchor, Code, ColorSwatch, CssVariables, keys, Table, Title, useMantineTheme} from '@mantine/core';
import {FunctionComponent, ReactNode} from 'react';
import {plasmaCSSVariablesResolver} from '../theme/plasmaCSSVariablesResolver';
import VariableClasses from './CssVariablesList.module.css';

export const ColorPreview = ({value}: {value: string}) => {
    if (
        !value ||
        !value.match(
            /^(var\(--mantine-color[\w-]+\)|var\(--mantine-primary[\w-]*\)|color-mix\(.*\)|#\w+|rgba?\([\w,. ]+\))$/gm,
        )
    ) {
        return null;
    }
    return <ColorSwatch size={20} color={value} withShadow />;
};

interface DataTableProps {
    data: ReactNode[][];
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

const getVariables = (resolvedVariables: CssVariables, prefix: string) =>
    keys(resolvedVariables)
        .filter((key) => String(key).startsWith(prefix))
        .map((key) => [
            <Code style={{whiteSpace: 'nowrap'}} key="code">
                {String(key)}
            </Code>,
            resolvedVariables[key],
            <ColorPreview value={resolvedVariables[key]} key="swatch" />,
        ]);

const MdxDataTable = ({data}: DataTableProps) => {
    const rows = data.map((row, index) => {
        const cells = row.map((cell, cellIndex) => (
            <Table.Td key={cellIndex}>{getTransformedScaledValue(cell)}</Table.Td>
        ));
        return <Table.Tr key={index}>{cells}</Table.Tr>;
    });

    return (
        <div>
            <Table.ScrollContainer minWidth={500}>
                <Table className={VariableClasses.table}>
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

    // Separate Mantine and Coveo variables
    const mantineVariables = getVariables(resolvedVariables.variables, '--mantine-');

    const lightMantineVariables = getVariables(resolvedVariables.light, '--mantine-');

    const darkMantineVariables = getVariables(resolvedVariables.dark, '--mantine-');

    const coveoVariables = getVariables(resolvedVariables.variables, '--coveo-');

    const lightCoveoVariables = getVariables(resolvedVariables.light, '--coveo-');

    const darkCoveoVariables = getVariables(resolvedVariables.dark, '--coveo-');

    const VariableBlock: FunctionComponent<{id: string; children: ReactNode; data: ReactNode[][]}> = ({
        id,
        children,
        data,
    }) => {
        if (data.length === 0) {
            return null;
        }
        return (
            <div style={{scrollMarginTop: '100px'}} id={id}>
                <Anchor href={`#${id}`} className={VariableClasses.anchor}>
                    {children}
                    <LinksSize16Px className={VariableClasses.anchorIcon} height={16} />
                </Anchor>
                <MdxDataTable data={data} />
            </div>
        );
    };

    return (
        <>
            <VariableBlock id="coveo-variables" data={coveoVariables}>
                <Title order={4} id="coveo-variables" display={'inline-block'}>
                    Coveo custom CSS variables
                </Title>
            </VariableBlock>
            <VariableBlock id="light-coveo-variables" data={lightCoveoVariables}>
                <Title order={5} id="light-coveo-variables" display={'inline-block'}>
                    Light color scheme - Coveo custom CSS variables
                </Title>
            </VariableBlock>
            <VariableBlock id="dark-coveo-variables" data={darkCoveoVariables}>
                <Title order={4} id="dark-coveo-variables" display={'inline-block'}>
                    Dark color scheme - Coveo variables
                </Title>
            </VariableBlock>
            <VariableBlock id="mantine-variables" data={mantineVariables}>
                <Title order={4} id="mantine-variables" display={'inline-block'}>
                    Mantine CSS variables
                </Title>
            </VariableBlock>
            <VariableBlock id="light-mantine-variables" data={lightMantineVariables}>
                <Title order={5} id="light-mantine-variables" display={'inline-block'}>
                    Light color scheme - Mantine variables
                </Title>
            </VariableBlock>
            <VariableBlock id="dark-mantine-variables" data={darkMantineVariables}>
                <Title order={5} id="dark-mantine-variables" display={'inline-block'}>
                    Dark color scheme - Mantine variables
                </Title>
            </VariableBlock>
        </>
    );
};
