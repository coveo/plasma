import {plasmaCSSVariablesResolver} from '@coveord/plasma-mantine';
import {LinksSize16Px} from '@coveord/plasma-react-icons';
import {Anchor, Box, Code, ColorSwatch, CssVariables, keys, Stack, Table, Title, useMantineTheme} from '@mantine/core';
import {Meta, StoryObj} from '@storybook/react-vite';
import {FunctionComponent, ReactNode} from 'react';
import {FoundationWrapper} from '../FoundationWrapper.js';
import classes from './Variables.module.css';

const ColorPreview = ({value}: {value: string}) => {
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
    if (typeof value !== 'string' || !value.includes('--mantine-scale')) {
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
            <ColorPreview value={resolvedVariables[key]!} key="swatch" />,
        ]);

const DataTable = ({data}: {data: ReactNode[][]}) => {
    const rows = data.map((row, index) => {
        const cells = row.map((cell, cellIndex) => (
            <Table.Td key={cellIndex}>{getTransformedScaledValue(cell)}</Table.Td>
        ));
        return <Table.Tr key={index}>{cells}</Table.Tr>;
    });

    return (
        <Table.ScrollContainer minWidth={500}>
            <Table className={classes.table}>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
};

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
            <Anchor href={`#${id}`} className={classes.anchor}>
                {children}
                <LinksSize16Px className={classes.anchorIcon} height={16} />
            </Anchor>
            <DataTable data={data} />
        </div>
    );
};

const CssVariablesList = () => {
    const currentTheme = useMantineTheme();
    const resolvedVariables = plasmaCSSVariablesResolver(currentTheme);

    const mantineVariables = getVariables(resolvedVariables.variables, '--mantine-');
    const lightMantineVariables = getVariables(resolvedVariables.light, '--mantine-');
    const darkMantineVariables = getVariables(resolvedVariables.dark, '--mantine-');
    const coveoVariables = getVariables(resolvedVariables.variables, '--coveo-');
    const lightCoveoVariables = getVariables(resolvedVariables.light, '--coveo-');
    const darkCoveoVariables = getVariables(resolvedVariables.dark, '--coveo-');

    return (
        <Stack align="center">
            <Box maw={1000}>
                <VariableBlock id="coveo-variables" data={coveoVariables}>
                    <Title order={4} display="inline-block">
                        Coveo custom CSS variables
                    </Title>
                </VariableBlock>
                <VariableBlock id="light-coveo-variables" data={lightCoveoVariables}>
                    <Title order={5} display="inline-block">
                        Light color scheme - Coveo custom CSS variables
                    </Title>
                </VariableBlock>
                <VariableBlock id="dark-coveo-variables" data={darkCoveoVariables}>
                    <Title order={4} display="inline-block">
                        Dark color scheme - Coveo variables
                    </Title>
                </VariableBlock>
                <VariableBlock id="mantine-variables" data={mantineVariables}>
                    <Title order={4} display="inline-block">
                        Mantine CSS variables
                    </Title>
                </VariableBlock>
                <VariableBlock id="light-mantine-variables" data={lightMantineVariables}>
                    <Title order={5} display="inline-block">
                        Light color scheme - Mantine variables
                    </Title>
                </VariableBlock>
                <VariableBlock id="dark-mantine-variables" data={darkMantineVariables}>
                    <Title order={5} display="inline-block">
                        Dark color scheme - Mantine variables
                    </Title>
                </VariableBlock>
            </Box>
        </Stack>
    );
};

const meta: Meta = {
    title: '@foundation/Variables',
    id: 'variables',
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

export const Overview: Story = {
    parameters: {
        chromatic: {disableSnapshot: true},
    },
    render: () => (
        <FoundationWrapper
            title="Variables"
            description="The list of all Mantine and Coveo CSS variables available to use in your application."
        >
            <CssVariablesList />
        </FoundationWrapper>
    ),
};
