import {FunctionComponent, useState, useEffect} from 'react';
import * as ts from 'typescript';

import {useTypescriptServer} from './useTypescriptServer';

interface PropInfo {
    name: string;
    description: string;
    type: string;
    optional: boolean;
    defaultValue: string | null;
    deprecation: string | null;
    params: Array<{parameterName: string; text: string}>;
}

export const PropsDoc: FunctionComponent<{componentName: string}> = ({componentName}) => {
    const [propsList, setPropsList] = useState<PropInfo[]>();
    const {env} = useTypescriptServer();

    useEffect(() => {
        if (!env) {
            return;
        }

        const content = `import {${componentName}} from '@coveord/plasma-react';
const props: React.ComponentProps<typeof ${componentName}> = {`;
        env.createFile('props.ts', content);

        const checker = env.languageService.getProgram().getTypeChecker();
        const {entries} = env.languageService.getCompletionsAtPosition('props.ts', content.length, {
            triggerKind: ts.CompletionTriggerKind.Invoked,
        });
        const accumulator: PropInfo[] = [];

        if (entries) {
            entries.forEach((entry) => {
                const symbol = env.languageService.getCompletionEntrySymbol(
                    'props.ts',
                    content.length,
                    entry.name,
                    entry.source
                );
                if (symbol) {
                    const type = checker.getTypeOfSymbolAtLocation(
                        symbol,
                        symbol.valueDeclaration || symbol.declarations[0]
                    );
                    const jsDocTags = symbol.getJsDocTags(checker);

                    let defaultValue: string | null = null;
                    const defaultTag = jsDocTags.find((tag) => tag.name === 'default');
                    if (defaultTag) {
                        defaultValue = ts.displayPartsToString(defaultTag.text);
                    }

                    let deprecation: string | null = null;
                    if (entry.kindModifiers.includes('deprecated')) {
                        const deprecatedTag = jsDocTags.find((tag) => tag.name === 'deprecated');
                        deprecation = ts.displayPartsToString(deprecatedTag?.text) || '';
                    }

                    const params: Array<{parameterName: string; text: string}> = jsDocTags
                        .filter((tag) => tag.name === 'param')
                        .map((param) => ({
                            parameterName: param.text.find((jsDocComment) => jsDocComment.kind === 'parameterName')
                                .text,
                            text: param.text.find((jsDocComment) => jsDocComment.kind === 'text').text,
                        }));

                    accumulator.push({
                        name: entry.name,
                        description: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
                        type: checker.typeToString(type),
                        optional: entry.kindModifiers.includes('optional'),
                        defaultValue,
                        deprecation,
                        params,
                    });
                }
            });
        }

        setPropsList(accumulator);
    }, [componentName, env]);

    if (!propsList) {
        return <PlasmaLoading />;
    }

    if (propsList.length < 1) {
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
                    {propsList
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

const requiredFirst = (a: PropInfo, b: PropInfo): number => {
    if (a.optional === b.optional) {
        return 0;
    }

    return a.optional ? 1 : -1;
};
