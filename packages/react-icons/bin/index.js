const fs = require('fs-extra');
const glob = require('glob');
const svgr = require('@svgr/core');
const groupBy = require('lodash.groupby');
const upperFirst = require('lodash.upperfirst');
const {rmSync} = require('fs-extra');

const iconsSourceDirPath = 'node_modules/@coveord/plasma-tokens/icons';

const convertIcon = async ([iconName, variants]) =>
    Promise.all([
        fs.appendFile('./generated/index.ts', `export * from './${iconName}';\n`),
        ...variants.map(convertVariant),
    ]);

const convertVariant = async (file) => {
    try {
        const iconName = findIconName(file);
        const variantName = findVariantName(file);
        const componentName = `${upperFirst(iconName)}${upperFirst(variantName)}`;
        const fileContent = await fs.readFile(file);
        const tsCode = await svgr.transform(
            fileContent.toString('utf8'),
            {typescript: true, exportType: 'named', namedExport: componentName},
            {componentName}
        );
        await fs.ensureDir(`./generated/${iconName}`);
        return Promise.all([
            fs.appendFile(`./generated/${iconName}/index.ts`, `export * from './${variantName}';\n`),
            fs.outputFile(`./generated/${iconName}/${variantName}.tsx`, tsCode),
        ]);
    } catch (err) {
        console.error(`Error: could not convert svg at "${file}" into a React component.`);
        console.error(err);
    }
};

const findIconName = (filename) => filename.replace(iconsSourceDirPath, '').substring(1).split('/')[0];
const findVariantName = (filename) => filename.replace(iconsSourceDirPath, '').split('/').pop().replace('.svg', '');

const handleSvgFiles = (err, files) => {
    if (err) {
        console.error(err);
    }

    const grouped = groupBy(files, findIconName);
    Promise.all(Object.entries(grouped).map(convertIcon));
};

rmSync('./generated', {recursive: true, force: true});
rmSync('./dist', {recursive: true, force: true});
fs.ensureDirSync('./generated');
glob(`${iconsSourceDirPath}/**/*.svg`, handleSvgFiles);
