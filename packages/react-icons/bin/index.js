import fs from 'fs-extra';
import {globSync} from 'glob';
import {transform} from '@svgr/core';
import groupBy from 'lodash.groupby';
import upperFirst from 'lodash.upperfirst';
import path from 'node:path';
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
    await fs.ensureDir(`${outDirPath}/${iconName}`);
    return Promise.all(variants.map(convertVariant));
};

const convertVariant = async (file) => {
    try {
        const iconName = findIconName(file);
        const variantName = findVariantName(file);
        const componentName = getComponentName(file);
        const fileContent = await fs.readFile(file);
        const tsCode = await transform(
            fileContent.toString('utf8'),
            {
                plugins: ['@svgr/plugin-jsx'],
                typescript: true,
                jsxRuntime: 'automatic',
                exportType: 'default',
                namedExport: componentName,
                template,
                expandProps: false,
                svgProps: {
                    ref: '{ref}',
                    'aria-label': iconName,
                    role: 'img',
                    height: '{height || width || "1em"}',
                    width: '{width || height || "1em"}',
                    '{...svgProps}': {},
                },
            },
            {componentName},
        );
        return Promise.all([
            fs.appendFile(
                `${outDirPath}/index.ts`,
                `export {default as ${componentName}} from './${iconName}/${variantName}.js';\n`,
            ),
            fs.outputFile(`${outDirPath}/${iconName}/${variantName}.tsx`, tsCode),
        ]);
    } catch (err) {
        console.error(`Error: could not convert svg at "${file}" into a React component.`);
        console.error(err);
    }
};

const listIconVariants = async (grouped) => {
    const list = Object.entries(grouped)
        .map(([iconName, variantsPaths]) => ({
            iconName,
            variants: variantsPaths.map(getComponentName),
        }))
        .sort((a, b) => a.iconName.localeCompare(b.iconName));
    return fs.appendFile(`${outDirPath}/index.ts`, `export const plasmaIconsList = ${JSON.stringify(list)};\n`);
};

const handleSvgFiles = (files) => {
    const grouped = groupBy(files, findIconName);
    return Promise.all([convertIcons(grouped), listIconVariants(grouped)]);
};

fs.rmSync(outDirPath, {recursive: true, force: true});
fs.rmSync('./dist', {recursive: true, force: true});
fs.ensureDirSync(outDirPath);

const svgs = globSync(`${iconsSourceDirPath}/**/*.svg`).map((svgPath) => svgPath.split(path.sep).join(path.posix.sep));
void handleSvgFiles(svgs);
