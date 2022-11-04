import {createFSBackedSystem, createVirtualTypeScriptEnvironment} from '@typescript/vfs';
import ts from 'typescript';

import {Component, ComponentMetadata} from '../src/ComponentsList';

export const compilerOptions: ts.CompilerOptions = {
    jsx: ts.JsxEmit.ReactJSX,
    target: ts.ScriptTarget.ES2017,
    skipLibCheck: true,
    esModuleInterop: true,
    strict: false,
};

const fileName = 'index.tsx';

const getContent = ({name, packageName}: Component) =>
    `import {ComponentProps} from 'react';import {${name}} from '${packageName}';const props: ComponentProps<typeof ${name}> = { `;

export const getPropsOfComponent = async (component: Component): Promise<ComponentMetadata[]> => {
    const fsMap = new Map<string, string>();
    const content = getContent(component);
    fsMap.set(fileName, content);
    const system = createFSBackedSystem(fsMap, __dirname, ts);
    const env = createVirtualTypeScriptEnvironment(system, [fileName], ts, compilerOptions);

    const checker = env.languageService.getProgram()!.getTypeChecker();
    const {entries} = env.languageService.getCompletionsAtPosition(fileName, content.length + 1, {
        triggerKind: ts.CompletionTriggerKind.Invoked,
    }) ?? {entries: []};

    const accumulator: ComponentMetadata[] = [];

    if (entries) {
        entries.forEach((entry) => {
            const symbol = env.languageService.getCompletionEntrySymbol(
                fileName,
                content.length,
                entry.name,
                entry.source
            );
            if (symbol) {
                const node = symbol.valueDeclaration || symbol.declarations?.[0];
                const type = node ? checker.getTypeOfSymbolAtLocation(symbol, node) : undefined;
                const jsDocTags = symbol.getJsDocTags(checker);

                let defaultValue: string | null = null;
                const defaultTag = jsDocTags.find((tag) => tag.name === 'default');
                if (defaultTag) {
                    defaultValue = ts.displayPartsToString(defaultTag.text);
                }

                let deprecation: string | null = null;
                if (entry.kindModifiers?.includes('deprecated')) {
                    const deprecatedTag = jsDocTags.find((tag) => tag.name === 'deprecated');
                    deprecation = ts.displayPartsToString(deprecatedTag?.text) || '';
                }

                const params: Array<{parameterName: string; text: string}> = jsDocTags
                    .filter((tag) => tag.name === 'param')
                    .map((param) => ({
                        parameterName:
                            param.text?.find((jsDocComment) => jsDocComment.kind === 'parameterName')?.text ?? '',
                        text: param.text?.find((jsDocComment) => jsDocComment.kind === 'text')?.text ?? '',
                    }));

                accumulator.push({
                    name: entry.name,
                    description: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
                    type: type ? checker.typeToString(type) : 'unknown',
                    optional: !!entry.kindModifiers?.includes('optional'),
                    defaultValue,
                    deprecation,
                    params,
                });
            }
        });
    }

    return accumulator;
};
