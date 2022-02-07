import {Loading} from '@coveord/plasma-react';
import {createSystem, createVirtualTypeScriptEnvironment} from '@typescript/vfs';
import * as React from 'react';
import * as ts from 'typescript';
import '@styles/props-doc.scss';

import {useTypescriptServer} from './useTypescriptServer';

interface PropInfo {
    name: string;
    description: string;
    type: string;
    optional: boolean;
    defaultValue: string | null;
    deprecation: string | null;
}

export const PropsDoc: React.FunctionComponent<{componentName: string}> = ({componentName}) => {
    const [propsList, setPropsList] = React.useState<PropInfo[]>();
    const {fsMap, compilerOptions} = useTypescriptServer();

    React.useEffect(() => {
        if (fsMap === null) {
            return;
        }
        const system = createSystem(fsMap);
        const content = `import * as React from 'react';
import {${componentName}} from '@coveord/plasma-react';
const props: React.ComponentProps<typeof ${componentName}> = {`;
        fsMap.set('props.ts', content);

        const env = createVirtualTypeScriptEnvironment(system, [...fsMap.keys()], ts as any, compilerOptions as any);
        const checker = env.languageService.getProgram().getTypeChecker();
        const {entries} = env.languageService.getCompletionsAtPosition('props.ts', content.length, {
            triggerKind: ts.CompletionTriggerKind.Invoked,
        });
        const accumulator: PropInfo[] = [];

        if (!entries) {
            setPropsList(accumulator);
        } else {
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

                    accumulator.push({
                        name: entry.name,
                        description: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
                        type: checker.typeToString(type),
                        optional: entry.kindModifiers.includes('optional'),
                        defaultValue,
                        deprecation,
                    });
                }
            });
        }

        setPropsList(accumulator);
    }, [componentName, fsMap]);

    if (!propsList) {
        return <Loading />;
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
                        .map(({name, type, description, optional, deprecation, defaultValue}) => (
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
                                <td>
                                    {deprecation !== null && <div>{deprecation}</div>}
                                    <div>{description}</div>
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
