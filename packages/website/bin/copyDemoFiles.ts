import {outputFile, readFileSync} from 'fs-extra';
import path from 'node:path';
import {DEMO_FILENAME_PATTERN} from './constants';

export const copyDemoFiles = async (paths: string[], destinationFolder: string): Promise<string[]> => {
    const newFiles = [];
    for (const sourcePath of paths) {
        const fileName = path.basename(sourcePath).replace(/^_/, '');
        const destinationPath = path.join(destinationFolder, fileName);

        const content = readFileSync(sourcePath, 'utf-8');
        const updatedContent = fileName.match(DEMO_FILENAME_PATTERN)
            ? extractImportsAndDemoFunction(content, fileName)
            : content;

        if (updatedContent) {
            await outputFile(destinationPath, updatedContent);
            newFiles.push(sourcePath);
            console.log(`Updated: ${destinationPath}`);
        }
    }
    return newFiles;
};

const extractImportsAndDemoFunction = (content: string, fileName: string): string => {
    const cssModuleFileName = fileName.replace('.tsx', '.module.css');
    const lines = content.split('\n');
    let insideDemoFunction = false;
    const updatedLines = lines.reduce<string[]>((result, line) => {
        if (line.trim() === 'const code = `') {
            insideDemoFunction = true;
        } else if (insideDemoFunction && line === '}`;') {
            insideDemoFunction = false;
            result.push('};');
        } else if (insideDemoFunction && line === '`;') {
            insideDemoFunction = false;
        } else if (insideDemoFunction) {
            result.push(
                line
                    .replace("import React from 'react';\n", '')
                    .replace('import React, {', 'import {')
                    .replace('@mantine/core', '@coveord/plasma-mantine')
                    .replace('function Demo() {', 'const Demo = () => {')
                    .replace(
                        "import classes from './Demo.module.css';",
                        `import classes from './${cssModuleFileName}';`,
                    )
                    .replace('{{props}}', '')
                    .replace(/\\`/g, '`')
                    .replace(/\\\$\{/g, '${'),
            );
        }
        return result;
    }, []);
    if (updatedLines.length) {
        updatedLines.push('export default Demo;');
    }

    return updatedLines.join('\n');
};
