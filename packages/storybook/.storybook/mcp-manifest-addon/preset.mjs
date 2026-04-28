import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {withCompilerOptions} from 'react-docgen-typescript';
import {babelParse, resolveExpression, types as t} from 'storybook/internal/babel';

const addonDir = path.dirname(fileURLToPath(import.meta.url));
const storybookRoot = path.resolve(addonDir, '..', '..');
const mantineComponentsRoot = path.resolve(storybookRoot, '../mantine/src/components');
const sourceFileExtensions = ['.tsx', '.ts'];
const largeNonUserSourceThreshold = 30;
const docgenParser = withCompilerOptions(
    {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        jsx: 4,
        noErrorTruncation: true,
        skipLibCheck: true,
    },
    {
        savePropValueAsString: true,
        shouldExtractLiteralValuesFromEnum: true,
        shouldRemoveUndefinedFromOptional: true,
    },
);
const docgenCache = new Map();
const moduleCache = new Map();
const storyFallbackCache = new Map();

const getComponentBaseName = (componentName) => String(componentName ?? '').split('.')[0] ?? '';
const getComponentLeafName = (componentName) => {
    const segments = String(componentName ?? '').split('.');
    return segments.at(-1) ?? '';
};

const getComponentSourceFile = (componentName) => {
    const baseName = getComponentBaseName(componentName);

    if (!baseName) {
        return undefined;
    }

    for (const extension of sourceFileExtensions) {
        const candidate = path.join(mantineComponentsRoot, baseName, `${baseName}${extension}`);

        if (fs.existsSync(candidate)) {
            return candidate;
        }
    }

    return undefined;
};

const isPlainObject = (value) => Boolean(value) && typeof value === 'object' && !Array.isArray(value);

const resolveLocalImport = (fromFile, importSource) => {
    if (!importSource.startsWith('.')) {
        return undefined;
    }

    const resolvedBasePath = path.resolve(path.dirname(fromFile), importSource);
    const candidates = [
        resolvedBasePath,
        `${resolvedBasePath}.ts`,
        `${resolvedBasePath}.tsx`,
        `${resolvedBasePath}.js`,
        `${resolvedBasePath}.jsx`,
        path.join(resolvedBasePath, 'index.ts'),
        path.join(resolvedBasePath, 'index.tsx'),
        path.join(resolvedBasePath, 'index.js'),
        path.join(resolvedBasePath, 'index.jsx'),
    ];

    return candidates.find((candidate) => fs.existsSync(candidate));
};

const getModuleInfo = (filePath) => {
    if (moduleCache.has(filePath)) {
        return moduleCache.get(filePath);
    }

    const source = fs.readFileSync(filePath, 'utf8');
    const ast = babelParse(source, {
        plugins: ['jsx', 'typescript'],
        sourceType: 'module',
    });
    const imports = new Map();
    const exports = new Map();

    for (const node of ast.program.body) {
        if (t.isImportDeclaration(node)) {
            for (const specifier of node.specifiers ?? []) {
                if (!('local' in specifier) || !specifier.local?.name) {
                    continue;
                }

                if (t.isImportSpecifier(specifier)) {
                    imports.set(specifier.local.name, {
                        importedName: t.isIdentifier(specifier.imported)
                            ? specifier.imported.name
                            : specifier.imported.value,
                        source: node.source.value,
                        type: 'named',
                    });
                    continue;
                }

                if (t.isImportDefaultSpecifier(specifier)) {
                    imports.set(specifier.local.name, {
                        importedName: 'default',
                        source: node.source.value,
                        type: 'default',
                    });
                    continue;
                }

                if (t.isImportNamespaceSpecifier(specifier)) {
                    imports.set(specifier.local.name, {
                        importedName: '*',
                        source: node.source.value,
                        type: 'namespace',
                    });
                }
            }
        }

        if (t.isExportDefaultDeclaration(node)) {
            exports.set('default', node.declaration);
        }

        if (t.isExportNamedDeclaration(node)) {
            if (node.declaration && t.isVariableDeclaration(node.declaration)) {
                for (const declaration of node.declaration.declarations) {
                    if (t.isIdentifier(declaration.id) && declaration.init) {
                        exports.set(declaration.id.name, declaration.init);
                    }
                }
            }

            for (const specifier of node.specifiers ?? []) {
                if (t.isExportSpecifier(specifier)) {
                    const localName = t.isIdentifier(specifier.local) ? specifier.local.name : undefined;
                    const exportedName = t.isIdentifier(specifier.exported)
                        ? specifier.exported.name
                        : specifier.exported.value;

                    if (!localName || !exportedName) {
                        continue;
                    }

                    exports.set(exportedName, t.identifier(localName));
                }
            }
        }
    }

    const moduleInfo = {ast, exports, filePath, imports};
    moduleCache.set(filePath, moduleInfo);
    return moduleInfo;
};

const getPropertyKey = (property) => {
    if (t.isIdentifier(property.key) && !property.computed) {
        return property.key.name;
    }

    if (t.isStringLiteral(property.key)) {
        return property.key.value;
    }

    return undefined;
};

const evaluateImportedBinding = (importInfo, moduleInfo, seen) => {
    const targetFile = resolveLocalImport(moduleInfo.filePath, importInfo.source);

    if (!targetFile) {
        return undefined;
    }

    const cacheKey = `${targetFile}:${importInfo.type}:${importInfo.importedName}`;

    if (seen.has(cacheKey)) {
        return undefined;
    }

    seen.add(cacheKey);

    try {
        const importedModule = getModuleInfo(targetFile);

        if (importInfo.type === 'namespace') {
            const namespaceValue = Object.fromEntries(
                [...importedModule.exports.entries()]
                    .filter(([exportName]) => exportName !== 'default')
                    .map(([exportName, expression]) => [
                        exportName,
                        evaluateExpression(expression, importedModule, seen),
                    ])
                    .filter(([, value]) => value !== undefined),
            );

            return namespaceValue;
        }

        const exportedExpression = importedModule.exports.get(importInfo.importedName);
        return exportedExpression ? evaluateExpression(exportedExpression, importedModule, seen) : undefined;
    } finally {
        seen.delete(cacheKey);
    }
};

const evaluateExpression = (expression, moduleInfo, seen = new Set()) => {
    if (!expression) {
        return undefined;
    }

    const resolvedExpression = resolveExpression(expression, moduleInfo.ast) ?? expression;

    if (t.isTSAsExpression(resolvedExpression) || t.isTSTypeAssertion(resolvedExpression)) {
        return evaluateExpression(resolvedExpression.expression, moduleInfo, seen);
    }

    if (t.isTSSatisfiesExpression(resolvedExpression) || t.isTSNonNullExpression(resolvedExpression)) {
        return evaluateExpression(resolvedExpression.expression, moduleInfo, seen);
    }

    if (t.isStringLiteral(resolvedExpression)) {
        return resolvedExpression.value;
    }

    if (t.isNumericLiteral(resolvedExpression) || t.isBooleanLiteral(resolvedExpression)) {
        return resolvedExpression.value;
    }

    if (t.isNullLiteral(resolvedExpression)) {
        return null;
    }

    if (t.isTemplateLiteral(resolvedExpression) && resolvedExpression.expressions.length === 0) {
        return resolvedExpression.quasis[0]?.value.cooked ?? resolvedExpression.quasis[0]?.value.raw;
    }

    if (t.isIdentifier(resolvedExpression)) {
        if (resolvedExpression.name === 'undefined') {
            return undefined;
        }

        const importInfo = moduleInfo.imports.get(resolvedExpression.name);
        return importInfo ? evaluateImportedBinding(importInfo, moduleInfo, seen) : undefined;
    }

    if (t.isArrayExpression(resolvedExpression)) {
        return resolvedExpression.elements
            .map((element) =>
                element && !t.isSpreadElement(element) ? evaluateExpression(element, moduleInfo, seen) : undefined,
            )
            .filter((element) => element !== undefined);
    }

    if (t.isObjectExpression(resolvedExpression)) {
        const result = {};

        for (const property of resolvedExpression.properties) {
            if (t.isObjectProperty(property)) {
                const key = getPropertyKey(property);

                if (!key) {
                    continue;
                }

                const value = evaluateExpression(property.value, moduleInfo, seen);

                if (value !== undefined) {
                    result[key] = value;
                }

                continue;
            }

            if (t.isSpreadElement(property)) {
                const value = evaluateExpression(property.argument, moduleInfo, seen);

                if (isPlainObject(value)) {
                    Object.assign(result, value);
                }
            }
        }

        return result;
    }

    if (t.isMemberExpression(resolvedExpression)) {
        const propertyName =
            !resolvedExpression.computed && t.isIdentifier(resolvedExpression.property)
                ? resolvedExpression.property.name
                : t.isStringLiteral(resolvedExpression.property)
                  ? resolvedExpression.property.value
                  : undefined;

        if (!propertyName) {
            return undefined;
        }

        const objectValue = evaluateExpression(resolvedExpression.object, moduleInfo, seen);

        return isPlainObject(objectValue) || Array.isArray(objectValue) ? objectValue[propertyName] : undefined;
    }

    return undefined;
};

const getObjectPropertyExpression = (expression, propertyName, moduleInfo) => {
    const resolvedExpression = resolveExpression(expression, moduleInfo.ast) ?? expression;

    if (!resolvedExpression || !t.isObjectExpression(resolvedExpression)) {
        return undefined;
    }

    return resolvedExpression.properties.find(
        (property) => t.isObjectProperty(property) && getPropertyKey(property) === propertyName,
    )?.value;
};

const inferTypeFromValue = (value) => {
    if (Array.isArray(value)) {
        return 'array';
    }

    if (value === null) {
        return 'null';
    }

    if (isPlainObject(value)) {
        return 'object';
    }

    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        return typeof value;
    }

    return undefined;
};

const serializeValue = (value) => {
    if (value === undefined) {
        return undefined;
    }

    if (typeof value === 'string') {
        return JSON.stringify(value);
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
    }

    if (value === null) {
        return 'null';
    }

    try {
        return JSON.stringify(value);
    } catch {
        return undefined;
    }
};

const inferControlType = (control) => {
    const controlType = typeof control === 'string' ? control : control?.type;

    switch (controlType) {
        case 'boolean':
            return 'boolean';
        case 'number':
        case 'range':
            return 'number';
        case 'object':
            return 'object';
        case 'array':
            return 'array';
        case 'date':
            return 'Date';
        default:
            return controlType === 'text' || controlType === 'select' || controlType === 'radio' ? 'string' : undefined;
    }
};

const getArgTypeSummary = (argType, argValue) => {
    if (!isPlainObject(argType)) {
        return inferTypeFromValue(argValue);
    }

    const tableTypeSummary = argType.table?.type?.summary;

    if (typeof tableTypeSummary === 'string' && tableTypeSummary.trim()) {
        return tableTypeSummary.trim();
    }

    if (Array.isArray(argType.options) && argType.options.length > 0) {
        const serializedOptions = argType.options.map((option) => serializeValue(option) ?? String(option));
        return serializedOptions.join(' | ');
    }

    return inferControlType(argType.control) ?? inferTypeFromValue(argValue);
};

const mergeStoryPropDefinitions = (propDefinitions, argTypes, args) => {
    if (isPlainObject(argTypes)) {
        for (const [propName, argType] of Object.entries(argTypes)) {
            const currentDefinition = propDefinitions[propName] ?? {};
            const argValue = isPlainObject(args) ? args[propName] : undefined;
            const typeSummary = getArgTypeSummary(argType, argValue);
            const defaultValueSummary =
                serializeValue(argValue) ??
                (typeof argType?.table?.defaultValue?.summary === 'string'
                    ? argType.table.defaultValue.summary
                    : undefined);

            propDefinitions[propName] = {
                ...currentDefinition,
                ...(typeof argType?.description === 'string' && argType.description.trim()
                    ? {description: argType.description.trim()}
                    : {}),
                ...(typeSummary ? {type: {name: typeSummary, raw: typeSummary}} : {}),
                ...(defaultValueSummary !== undefined ? {defaultValue: {value: defaultValueSummary}} : {}),
                required: currentDefinition.required ?? Boolean(argType?.required),
            };
        }
    }

    if (isPlainObject(args)) {
        for (const [propName, argValue] of Object.entries(args)) {
            const currentDefinition = propDefinitions[propName] ?? {};
            const inferredType = inferTypeFromValue(argValue);
            const defaultValueSummary = serializeValue(argValue);

            propDefinitions[propName] = {
                ...currentDefinition,
                ...(currentDefinition.type || !inferredType ? {} : {type: {name: inferredType, raw: inferredType}}),
                ...(currentDefinition.defaultValue || defaultValueSummary === undefined
                    ? {}
                    : {defaultValue: {value: defaultValueSummary}}),
                required: currentDefinition.required ?? false,
            };
        }
    }
};

const getStoryFallbackDocgen = (componentManifest) => {
    const cacheKey = componentManifest.path;

    if (storyFallbackCache.has(cacheKey)) {
        return storyFallbackCache.get(cacheKey);
    }

    const storyFilePath = path.resolve(storybookRoot, componentManifest.path.replace(/^\.\//, ''));

    if (!fs.existsSync(storyFilePath)) {
        storyFallbackCache.set(cacheKey, undefined);
        return undefined;
    }

    let fallbackDocgen;

    try {
        const moduleInfo = getModuleInfo(storyFilePath);
        const propDefinitions = {};

        for (const exportedExpression of moduleInfo.exports.values()) {
            const argTypes = evaluateExpression(
                getObjectPropertyExpression(exportedExpression, 'argTypes', moduleInfo),
                moduleInfo,
            );
            const args = evaluateExpression(
                getObjectPropertyExpression(exportedExpression, 'args', moduleInfo),
                moduleInfo,
            );

            mergeStoryPropDefinitions(propDefinitions, argTypes, args);
        }

        if (Object.keys(propDefinitions).length > 0) {
            fallbackDocgen = {
                displayName: componentManifest.name,
                props: propDefinitions,
            };
        }
    } catch {
        fallbackDocgen = undefined;
    }

    storyFallbackCache.set(cacheKey, fallbackDocgen);
    return fallbackDocgen;
};

const getPropSource = (prop) => prop.parent?.fileName ?? prop.declarations?.[0]?.fileName;

const trimLargeNonUserPropSources = (props = {}) => {
    const countBySource = new Map();

    for (const prop of Object.values(props)) {
        const source = getPropSource(prop);

        if (!source || (!source.includes('node_modules') && !source.endsWith('.d.ts'))) {
            continue;
        }

        countBySource.set(source, (countBySource.get(source) ?? 0) + 1);
    }

    const noisySources = new Set(
        [...countBySource.entries()]
            .filter(([, count]) => count > largeNonUserSourceThreshold)
            .map(([source]) => source),
    );

    if (noisySources.size === 0) {
        return props;
    }

    const filteredProps = Object.fromEntries(
        Object.entries(props).filter(([, prop]) => {
            const source = getPropSource(prop);
            return !source || !noisySources.has(source);
        }),
    );

    return Object.keys(filteredProps).length > 0 ? filteredProps : props;
};

const getComponentDocgen = (componentName) => {
    const sourceFile = getComponentSourceFile(componentName);

    if (!sourceFile) {
        return undefined;
    }

    const cacheKey = `${sourceFile}:${componentName}`;

    if (docgenCache.has(cacheKey)) {
        return docgenCache.get(cacheKey);
    }

    let docgen;

    try {
        const parsedDocs = docgenParser.parse(sourceFile);
        const baseName = getComponentBaseName(componentName);
        const leafName = getComponentLeafName(componentName);
        const matchedDoc =
            parsedDocs.find((entry) => entry.displayName === componentName) ??
            parsedDocs.find((entry) => entry.displayName === leafName) ??
            parsedDocs.find((entry) => entry.displayName === baseName) ??
            (parsedDocs.length === 1 ? parsedDocs[0] : undefined);

        if (matchedDoc) {
            docgen = {
                ...matchedDoc,
                displayName: componentName,
                props: trimLargeNonUserPropSources(matchedDoc.props),
            };
        }
    } catch {
        docgen = undefined;
    }

    docgenCache.set(cacheKey, docgen);
    return docgen;
};

const normalizeComponentManifest = (componentManifest) => {
    const componentName = componentManifest.name;
    const baseName = getComponentBaseName(componentName);
    const importStatement = baseName && `import { ${baseName} } from "@coveord/plasma-mantine";`;
    const sourceDocgen = getComponentDocgen(componentName);
    const storyFallbackDocgen =
        !sourceDocgen || Object.keys(sourceDocgen.props ?? {}).length === 0
            ? getStoryFallbackDocgen(componentManifest)
            : undefined;
    const docgen =
        storyFallbackDocgen && Object.keys(storyFallbackDocgen.props ?? {}).length > 0
            ? storyFallbackDocgen
            : sourceDocgen;
    const normalizedManifest = {
        ...componentManifest,
        ...(importStatement ? {import: importStatement} : {}),
    };

    if (docgen) {
        normalizedManifest.reactDocgenTypescript = docgen;

        if (!normalizedManifest.description && typeof docgen.description === 'string' && docgen.description.trim()) {
            normalizedManifest.description = docgen.description.trim();
        }
    } else if (
        normalizedManifest.error?.name === 'No component import found' ||
        normalizedManifest.error?.name === 'No component found' ||
        normalizedManifest.import?.includes('from "storybook"')
    ) {
        normalizedManifest.reactDocgenTypescript ??= {
            displayName: componentName,
            props: {},
        };
    }

    delete normalizedManifest.error;

    return normalizedManifest;
};

export const experimental_manifests = async (existingManifests = {}) => {
    const componentsManifest = existingManifests.components;

    if (!componentsManifest?.components) {
        return existingManifests;
    }

    return {
        ...existingManifests,
        components: {
            ...componentsManifest,
            components: Object.fromEntries(
                Object.entries(componentsManifest.components).map(([componentId, componentManifest]) => [
                    componentId,
                    normalizeComponentManifest(componentManifest),
                ]),
            ),
        },
    };
};
