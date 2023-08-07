/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs-extra');
const {globSync} = require('glob');
const svgr = require('@svgr/core');
const groupBy = require('lodash.groupby');
const upperFirst = require('lodash.upperfirst');
const {rmSync} = require('fs-extra');
const template = require('./template');

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
    return Promise.all(
        variants.map(convertVariant),
        fs.appendFile(`${outDirPath}/index.ts`, `export * from './${iconName}';\n`),
    );
};

const convertVariant = async (file) => {
    try {
        const iconName = findIconName(file);
        const variantName = findVariantName(file);
        const componentName = getComponentName(file);
        const fileContent = await fs.readFile(file);
        const tsCode = await svgr.transform(
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
                },
            },
            {componentName},
        );
        return Promise.all([
            fs.appendFile(
                `${outDirPath}/${iconName}/index.ts`,
                `export {default as ${componentName}} from './${variantName}';\n`,
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
    return fs.appendFile(`${outDirPath}/index.ts`, `export const iconsList = ${JSON.stringify(list)};\n`);
};

const handleSvgFiles = (files) => {
    const grouped = groupBy(files, findIconName);
    Promise.all([convertIcons(grouped), listIconVariants(grouped)]);
};

rmSync(outDirPath, {recursive: true, force: true});
rmSync('./dist', {recursive: true, force: true});
fs.ensureDirSync(outDirPath);

const svgs = globSync(`${iconsSourceDirPath}/**/*.svg`);
handleSvgFiles(svgs);
