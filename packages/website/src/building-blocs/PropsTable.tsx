import {ComponentMetadata} from '@coveord/plasma-components-props-analyzer';
import {Badge, Box, Code, Text} from '@coveord/plasma-mantine';
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
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {propsMetadata
                        .sort(requiredFirst)
                        .map(({name, type, description, optional, deprecation, defaultValue, params}) => (
                            <tr key={name}>
                                <td>
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
                                </td>
                                <td>
                                    <Code>{type}</Code>
                                </td>
                                <td>{defaultValue ? <Code>{defaultValue}</Code> : null}</td>
                                <td>
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
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const requiredFirst = (a: ComponentMetadata, b: ComponentMetadata): number => {
    if (a.optional === b.optional) {
        return 0;
    }

    return a.optional ? 1 : -1;
};
