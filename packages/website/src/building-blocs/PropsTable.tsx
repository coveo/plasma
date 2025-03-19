import {ComponentMetadata} from '@coveord/plasma-components-props-analyzer';
import {Badge, Box, Code, ScrollArea, Text} from '@coveord/plasma-mantine';
import {Table as MantineTable} from '@mantine/core';
import {FunctionComponent} from 'react';

export interface PropsTableProps {
    propsMetadata?: ComponentMetadata[];
}

export const PropsTable: FunctionComponent<PropsTableProps> = ({propsMetadata = []}) => {
    if (propsMetadata.length < 1) {
        return <p>This component has no props.</p>;
    }

    return (
        <div className="props-table">
            <ScrollArea.Autosize mah={500}>
                <MantineTable stickyHeader striped>
                    <MantineTable.Thead>
                        <MantineTable.Tr>
                            <MantineTable.Th>Name</MantineTable.Th>
                            <MantineTable.Th>Type</MantineTable.Th>
                            <MantineTable.Th>Default</MantineTable.Th>
                            <MantineTable.Th>Description</MantineTable.Th>
                        </MantineTable.Tr>
                    </MantineTable.Thead>
                    <MantineTable.Tbody>
                        {propsMetadata
                            .sort(requiredFirst)
                            .map(({name, type, description, optional, deprecation, defaultValue, params}) => (
                                <MantineTable.Tr key={name}>
                                    <MantineTable.Td>
                                        <Code>{name}</Code>
                                        {optional ? null : (
                                            <Badge color="info" ml="xs">
                                                REQUIRED
                                            </Badge>
                                        )}
                                        {deprecation !== null ? (
                                            <Badge color="warning" ml="xs">
                                                DEPRECATED
                                            </Badge>
                                        ) : null}
                                    </MantineTable.Td>
                                    <MantineTable.Td>
                                        <Code>{type}</Code>
                                    </MantineTable.Td>
                                    <MantineTable.Td>
                                        {defaultValue ? <Code>{defaultValue}</Code> : null}
                                    </MantineTable.Td>
                                    <MantineTable.Td>
                                        <Text span size="sm">
                                            {deprecation !== null && <div>{deprecation}</div>}
                                            {description}
                                            {params?.length > 0 && (
                                                <ul>
                                                    {params.map(({parameterName, text}) => (
                                                        <li key={parameterName}>
                                                            <Code>{parameterName}</Code>
                                                            <Box component="span" px="xs">
                                                                &ndash;
                                                            </Box>
                                                            {text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </Text>
                                    </MantineTable.Td>
                                </MantineTable.Tr>
                            ))}
                    </MantineTable.Tbody>
                </MantineTable>
            </ScrollArea.Autosize>
        </div>
    );
};

const requiredFirst = (a: ComponentMetadata, b: ComponentMetadata): number => {
    if (a.optional === b.optional) {
        return 0;
    }

    return a.optional ? 1 : -1;
};
