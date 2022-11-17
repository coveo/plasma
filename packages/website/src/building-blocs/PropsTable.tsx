import {ComponentMetadata} from '@coveord/plasma-components-props-analyzer';
import {Code, Text} from '@coveord/plasma-mantine';
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
            <table className="full-content-x">
                <thead className="body-m">
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
                                    {optional ? null : <span className="body-s-book-italic-subdued ml2">required</span>}
                                    {deprecation !== null ? (
                                        <span className="body-s-book-italic-subdued ml2">deprecated</span>
                                    ) : null}
                                </td>
                                <td>
                                    <Code>{type}</Code>
                                </td>
                                <td>{defaultValue ? <Code>{defaultValue}</Code> : null}</td>
                                <td className="py1">
                                    <Text size="sm">
                                        {deprecation !== null && <div>{deprecation}</div>}
                                        {description}
                                        {params?.length > 0 && (
                                            <ul>
                                                {params.map(({parameterName, text}) => (
                                                    <li key={parameterName}>
                                                        <span className="code">{parameterName}</span>
                                                        <span className="mx1">&ndash;</span>
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
