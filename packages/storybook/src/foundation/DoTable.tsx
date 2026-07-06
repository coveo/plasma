import {Table, Text} from '@mantine/core';
import {type ReactNode} from 'react';

const doStyle = {
    backgroundColor: 'light-dark(var(--mantine-color-green-1), var(--mantine-color-green-8))',
};

const dontStyle = {
    backgroundColor: 'light-dark(var(--mantine-color-red-2), var(--mantine-color-red-8))',
};

/** Two-column Do / Don't table. Rows accept strings or JSX nodes. */
interface DoTableProps {
    rows: Array<[ReactNode, ReactNode]>;
}

export const DoTable = ({rows}: DoTableProps) => (
    <Table withTableBorder withColumnBorders layout="auto">
        <Table.Thead>
            <Table.Tr>
                <Table.Th style={doStyle}>Do</Table.Th>
                <Table.Th style={dontStyle}>{"Don't"}</Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {rows.map((row, i) => (
                <Table.Tr key={i}>
                    <Table.Td>
                        <Text size="sm" component="span">{row[0]}</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text size="sm" component="span">{row[1]}</Text>
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
);

/** Two-column Use / Avoid table with green/red headers. Rows accept strings or JSX nodes. */
interface UseAvoidTableProps {
    rows: Array<[ReactNode, ReactNode]>;
}

export const UseAvoidTable = ({rows}: UseAvoidTableProps) => (
    <Table withTableBorder withColumnBorders layout="auto">
        <Table.Thead>
            <Table.Tr>
                <Table.Th style={doStyle}>Use</Table.Th>
                <Table.Th style={dontStyle}>Avoid</Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {rows.map((row, i) => (
                <Table.Tr key={i}>
                    <Table.Td>
                        <Text size="sm" component="span">{row[0]}</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text size="sm" component="span">{row[1]}</Text>
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
);

/** Three-column Scenario / Do / Don't table. Rows accept strings or JSX nodes. */
interface ScenarioDoTableProps {
    rows: Array<[ReactNode, ReactNode, ReactNode]>;
}

export const ScenarioDoTable = ({rows}: ScenarioDoTableProps) => (
    <Table withTableBorder withColumnBorders layout="auto">
        <Table.Thead>
            <Table.Tr>
                <Table.Th>Scenario</Table.Th>
                <Table.Th style={doStyle}>Do</Table.Th>
                <Table.Th style={dontStyle}>{"Don't"}</Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {rows.map((row, i) => (
                <Table.Tr key={i}>
                    <Table.Td>
                        <Text size="sm" component="span">{row[0]}</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text size="sm" component="span">{row[1]}</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text size="sm" component="span">{row[2]}</Text>
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
);
