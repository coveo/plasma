const fs = require('fs-extra');
const glob = require('glob');
const svgr = require('@svgr/core');
const groupBy = require('lodash.groupby');
const upperFirst = require('lodash.upperfirst');
const {rmSync} = require('fs-extra');
const template = require('./template');

const iconsSourceDirPath = 'node_modules/@coveord/plasma-tokens/icons';

const findIconName = (filename) => filename.replace(iconsSourceDirPath, '').substring(1).split('/')[0];
const findVariantName = (filename) => filename.replace(iconsSourceDirPath, '').split('/').pop().replace('.svg', '');
const getComponentName = (file) => {
    const iconName = findIconName(file);
    const variantName = findVariantName(file);
    return `${upperFirst(iconName)}${upperFirst(variantName)}`;
};

const convertIcons = async (grouped) => Promise.all(Object.entries(grouped).map(convertIcon));

const convertIcon = async ([iconName, variants]) => {
    await fs.ensureDir(`./generated/${iconName}`);
    return Promise.all(variants.map(convertVariant));
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
                typescript: true,
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
            fs.appendFile(
                './generated/index.ts',
                `export const ${componentName} = loadable(() => import('./${iconName}/${variantName}'));\n`
            ),
            fs.appendFile(
                `./generated/${iconName}/index.ts`,
                `export {default as ${componentName}} from './${variantName}';\n`
            ),
            fs.outputFile(`./generated/${iconName}/${variantName}.tsx`, tsCode),
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
    return fs.appendFile('./generated/index.ts', `export const iconsList = ${JSON.stringify(list)};\n`);
};

const generateIconType = async (grouped) => {
    const [iconSet, variants] = Object.entries(grouped)[0];
    const iconComponent = getComponentName(variants[0]);
    const output = `export type Icon = typeof ${iconComponent};\n`;
    return fs.appendFile(`./generated/index.ts`, output);
};

const importLoadable = () => fs.appendFile('./generated/index.ts', 'import loadable from "@loadable/component";\n\n');

const handleSvgFiles = (err, files) => {
    if (err) {
        console.error(err);
    }

    const grouped = groupBy(files, findIconName);
    Promise.all([importLoadable(), convertIcons(grouped), generateIconType(grouped), listIconVariants(grouped)]);
};

rmSync('./generated', {recursive: true, force: true});
rmSync('./dist', {recursive: true, force: true});
fs.ensureDirSync('./generated');
glob(`${iconsSourceDirPath}/**/*.svg`, handleSvgFiles);
