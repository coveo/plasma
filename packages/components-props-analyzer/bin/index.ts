import {appendFile} from 'fs/promises';
import {ensureDirSync, outputFile, outputFileSync} from 'fs-extra/esm';
import {sync as deleteDirSync} from 'rimraf';

import componentsList from '../src/ComponentsList.js';
import buildTypeScriptEnvironment from './buildTypeScriptEnvironment.js';
import {getPropsOfComponent} from './getPropsOfComponent.js';

const generateProps = async () => {
    ensureDirSync('./src/components');
    outputFileSync(
        './src/components/index.ts',
        "// Don't edit this file, it is automatically generated on each build\n"
    );
    const env = buildTypeScriptEnvironment();

    const promises = componentsList.map(async (component) => {
        const operations: Array<Promise<void>> = [];
        const props = getPropsOfComponent(component, env);
        const name = component.name + (component?.suffix ?? '');
        operations.push(
            outputFile(
                `./src/components/${name}.ts`,
                `// Don't edit this file, it is automatically generated on each build
                import {ComponentMetadata} from '../ComponentsList.js';
                export const ${name}Metadata: ComponentMetadata[] = ${JSON.stringify(props)};`
            )
        );
        operations.push(appendFile('./src/components/index.ts', `export * from './${name}.js';\n`));
        return Promise.all(operations);
    });

    await Promise.all(promises);
};

deleteDirSync('./src/components');

generateProps();
