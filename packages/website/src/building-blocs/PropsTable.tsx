import {ComponentMetadata} from '@coveord/plasma-components-props-analyzer';
import {FunctionComponent} from 'react';

export interface PropsTableProps {
    propsMetadata?: ComponentMetadata[];
}

export const PropsDoc: FunctionComponent<PropsTableProps> = ({propsMetadata = []}) => {
    if (propsMetadata.length < 1) {
        return <p>This component has no props.</p>;
    }

    return (
        <div className="props-doc">
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
                                    <span className="code">{name}</span>
                                    {optional ? null : <span className="body-s-book-italic-subdued ml2">required</span>}
                                    {deprecation !== null ? (
                                        <span className="body-s-book-italic-subdued ml2">deprecated</span>
                                    ) : null}
                                </td>
                                <td>
                                    <span className="code">{type}</span>
                                </td>
                                <td>{defaultValue}</td>
                                <td className="py1">
                                    {deprecation !== null && <div>{deprecation}</div>}
                                    <div>{description}</div>
                                    {params && (
                                        <ul className="mt1">
                                            {params.map(({parameterName, text}) => (
                                                <li key={parameterName}>
                                                    <span className="code">{parameterName}</span>
                                                    <span className="mx1">&ndash;</span>
                                                    {text}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
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
