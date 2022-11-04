import {appendFile, ensureDirSync, outputFile, outputFileSync} from 'fs-extra';
import * as rimraf from 'rimraf';

import componentsList from '../src/ComponentsList';
import {getPropsOfComponent} from './getPropsOfComponent';

const generateProps = async () => {
    const promises = componentsList.map(async (component) => {
        const props = await getPropsOfComponent(component);
        await outputFile(
            `./src/components/${component.name}.ts`,
            `// Don't edit this file, it gets overwriten on each build
            import {ComponentMetadata} from '../ComponentsList';
            export const ${component.name}Metadata: ComponentMetadata[] = ${JSON.stringify(props)};`
        );
        appendFile('./src/components/index.ts', `export * from './${component.name}';\n`);
    });

    await Promise.all(promises);
};

rimraf.sync('./src/components');
ensureDirSync('./src/components');
outputFileSync('./src/components/index.ts', '');

generateProps();
