import {VirtualTypeScriptEnvironment} from '@typescript/vfs';
import ts from 'typescript';

import {Component, ComponentMetadata} from '../src/ComponentsList.js';

const getContent = ({name, packageName, propsType = 'auto'}: Component) => {
    if (propsType && propsType !== 'auto') {
        return `import {${propsType}} from '${packageName}';const props: ${propsType} = { `;
    } else {
        return `import {ComponentProps} from 'react';import {${name}} from '${packageName}';const props: ComponentProps<typeof ${name}> = { `;
    }
};

export const getPropsOfComponent = (component: Component, env: VirtualTypeScriptEnvironment): ComponentMetadata[] => {
    const fileName = `${component.name}.tsx`;
    const content = getContent(component);
    env.createFile(fileName, content);
    const {entries} = env.languageService.getCompletionsAtPosition(fileName, content.length + 1, {
        triggerKind: ts.CompletionTriggerKind.Invoked,
    }) ?? {entries: []};

    const checker = env.languageService.getProgram()!.getTypeChecker();
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

    env.sys.deleteFile?.(fileName);

    return accumulator;
};
