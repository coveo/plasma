import {readdirSync, existsSync, mkdirSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const MANTINE_INDEX_URL =
    'https://raw.githubusercontent.com/mantinedev/mantine/refs/heads/master/packages/%40mantine/core/src/components/index.ts';

const fetchMantineComponents = async (): Promise<string[]> => {
    const response = await fetch(MANTINE_INDEX_URL);
    const content = await response.text();

    // Extract component names from export statements
    const exportRegex = /export \* from '.\/([^']+)';/g;
    const components = new Set<string>();

    let match;
    while ((match = exportRegex.exec(content)) !== null) {
        const name = match[1];
        console.log(`Detected ${name} in Mantine exports`);
        components.add(name);
    }

    return Array.from(components);
};

const getOverriddenComponents = (): string[] => {
    const componentsDir = join(__dirname, '../src/components');
    return readdirSync(componentsDir, {withFileTypes: true})
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
};

const generateMantineComponentExports = async (): Promise<void> => {
    console.log('Fetching Mantine components...');
    const mantineComponents = await fetchMantineComponents();

    console.log('Detecting overridden components...');
    const overridden = getOverriddenComponents();

    const componentsToProxy = mantineComponents.filter((comp) => !overridden.includes(comp));

    console.log(`Generating proxies for ${componentsToProxy.length} components...`);
    const componentsDir = join(__dirname, '../src/components');

    componentsToProxy.forEach((component) => {
        console.log(`Created proxy for ${component} from Mantine`);
        const dir = join(componentsDir, component);
        const indexPath = join(dir, `${component}.ts`);

        if (!existsSync(dir)) {
            mkdirSync(dir, {recursive: true});
        }

        const content = `export {${component}, type ${component}Factory, type ${component}Props} from '@mantine/core';\n`;
        writeFileSync(indexPath, content);
    });

    console.log('Done!');
};

generateMantineComponentExports().catch(console.error);
