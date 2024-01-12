// Generates separate css files for each @mantine/core component
const cssnano = require('cssnano');
const glob = require('fast-glob');
const fs = require('fs-extra');
const path = require('node:path');
const postcss = require('postcss');
const postcssModules = require('postcss-modules');
const postcssPresetMantine = require('postcss-preset-mantine');

function getFileName(filePath) {
    return filePath
        .replace(/\\/g, '/')
        .split('/')
        .pop()
        .replace('.module', '')
        .replace('.css', '')
        .replace('.scss', '');
}

function hashCSSSelector(selector, prefix = 'm') {
    let hash = 0;

    for (let i = 0; i < selector.length; i += 1) {
        const chr = selector.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }

    return `${prefix}-${(hash + 2147483648).toString(16)}`;
}

function createGenerateScopedName(prefix) {
    return function generateScopedName(selector, fileName) {
        return hashCSSSelector(`${getFileName(fileName)}-${selector}`, prefix);
    };
}

const generateScopedName = createGenerateScopedName('pm');

function transformFileName(filePath) {
    return path.basename(filePath).replace('.module.css', '.css');
}

async function processFile(filePath, outputFolder) {
    console.log('FILEPATH', filePath, path.basename(filePath));
    const result = await postcss([
        postcssPresetMantine,
        postcssModules({generateScopedName, getJSON: () => {}}),
        cssnano({preset: 'default'}),
    ]).process(fs.readFileSync(filePath, 'utf-8'), {from: path.basename(filePath)});

    const fileName = transformFileName(filePath);
    await fs.writeFile(path.join(outputFolder, fileName), result.css);
}

async function generateCoreCSS() {
    const files = await glob(path.join(process.cwd(), 'src/**/*.css'));
    const modules = files.filter((file) => file.endsWith('.module.css'));
    console.log('THE FILES ARE HERE');
    console.log(modules);

    fs.writeJsonSync('css-exports.json', {modules: modules.map(transformFileName)});

    const outputFolder = path.join(process.cwd(), 'src/test');

    await fs.ensureDir(outputFolder);

    modules.forEach((file) => processFile(file, outputFolder));
}
module.exports = {generateCoreCSS};
