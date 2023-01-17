import glob from 'glob';
import svgr from '@svgr/core';
import groupBy from 'lodash.groupby';
import upperFirst from 'lodash.upperfirst';
import {rmSync} from 'fs';
import {readFile, appendFile} from 'fs/promises';
import {ensureDir, ensureDirSync, outputFile} from 'fs-extra/esm';
import template from './template.js';

const iconsSourceDirPath = 'node_modules/@coveord/plasma-tokens/icons';
const outDirPath = './src/generated';

const findIconName = (filename) => filename.replace(iconsSourceDirPath, '').substring(1).split('/')[0];
const findVariantName = (filename) => filename.replace(iconsSourceDirPath, '').split('/').pop().replace('.svg', '');
const getComponentName = (file) => {
    const iconName = findIconName(file);
    const variantName = findVariantName(file);
    return `${upperFirst(iconName)}${upperFirst(variantName)}`;
};

const convertIcons = async (grouped) => Promise.all(Object.entries(grouped).map(convertIcon));

const convertIcon = async ([iconName, variants]) => {
    await ensureDir(`${outDirPath}/${iconName}`);
    return Promise.all(
        variants.map(convertVariant),
        appendFile(`${outDirPath}/index.ts`, `export * from './${iconName}/index.js';\n`)
    );
};

const convertVariant = async (file) => {
    try {
        const iconName = findIconName(file);
        const variantName = findVariantName(file);
        const componentName = getComponentName(file);
        const fileContent = await readFile(file);
        const tsCode = await svgr.transform(
            fileContent.toString('utf8'),
            {
                typescript: true,
                jsxRuntime: 'automatic',
                exportType: 'default',
                namedExport: componentName,
                template,
                expandProps: false,
                svgProps: {
                    'aria-label': iconName,
                    role: 'img',
                    height: '{height || width || "1em"}',
                    width: '{width || height || "1em"}',
                },
            },
            {componentName}
        );
        return Promise.all([
            appendFile(
                `${outDirPath}/${iconName}/index.ts`,
                `export {default as ${componentName}} from './${variantName}.js';\n`
            ),
            outputFile(`${outDirPath}/${iconName}/${variantName}.tsx`, tsCode),
        ]);
    } catch (err) {
        console.error(`Error: could not convert svg at "${file}" into a React component.`);
        console.error(err);
    }
};

const listIconVariants = async (grouped) => {
    const list = Object.entries(grouped).map(([iconName, variantsPaths]) => ({
        iconName,
        variants: variantsPaths.map(getComponentName),
    }));
    return appendFile(`${outDirPath}/index.ts`, `export const iconsList = ${JSON.stringify(list)};\n`);
};

const handleSvgFiles = (err, files) => {
    if (err) {
        console.error(err);
    }

    const grouped = groupBy(files, findIconName);
    Promise.all([convertIcons(grouped), listIconVariants(grouped)]);
};

rmSync(outDirPath, {recursive: true, force: true});
rmSync('./dist', {recursive: true, force: true});
ensureDirSync(outDirPath);
glob(`${iconsSourceDirPath}/**/*.svg`, handleSvgFiles);
