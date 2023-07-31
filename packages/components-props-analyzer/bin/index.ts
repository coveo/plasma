import {appendFile, ensureDirSync, outputFile, outputFileSync} from 'fs-extra';
import {rimrafSync} from 'rimraf';

import componentsList from '../src/ComponentsList';
import {getPropsOfComponent} from './getPropsOfComponent';
import buildTypeScriptEnvironment from './buildTypeScriptEnvironment';

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
                import {ComponentMetadata} from '../ComponentsList';
                export const ${name}Metadata: ComponentMetadata[] = ${JSON.stringify(props)};`
            )
        );
        operations.push(appendFile('./src/components/index.ts', `export * from './${name}';\n`));
        return Promise.all(operations);
    });

    await Promise.all(promises);
};

rimrafSync('./src/components');

generateProps();
