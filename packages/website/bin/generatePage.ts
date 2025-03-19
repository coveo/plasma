import {outputFile} from 'fs-extra';
import path from 'node:path';

const componentNameFromFileName = (fileName: string): string =>
    fileName
        .replace('.tsx', '')
        .split('.')
        .filter((part) => part !== 'demo')
        .map((p) => p.charAt(0).toUpperCase() + p.substring(1))
        .join('');

export const generatePage = async (
    page: string,
    files: string[],
    cssFileByTsxFile: Record<string, string>,
): Promise<void> => {
    const examplePage = `
    ${files
        .map((f) => `import ${componentNameFromFileName(f)} from '@examples/mantine/${f.replace('.tsx', '?demo')}';`)
        .join('\n')}
    ${files
        .filter((f) => cssFileByTsxFile[f])
        .map((f) => `import ${componentNameFromFileName(f)}CSS from '@examples/mantine/${cssFileByTsxFile[f]}?raw';`)
        .join('\n')}
    
    import {PageLayout} from '../../building-blocs/PageLayout';
    
    const MantinePage = () => (
        <PageLayout
            id="${page}"
            title="${page}"
            section="Mantine"
            description=""
            demo={<></>}
            examples={{
                ${files
                    .map(
                        (f) =>
                            `${componentNameFromFileName(f)}: <${componentNameFromFileName(
                                f,
                            )} center title="${componentNameFromFileName(f)}" ${
                                cssFileByTsxFile[f]
                                    ? `additionalFiles={[
                        {
                            fileName: '${cssFileByTsxFile[f]}',
                            code: ${componentNameFromFileName(f)}CSS,
                            language: 'css',
                            icon: null,
                        },
                    ]}`
                                    : ''
                            } />`,
                    )
                    .join(',\n')}
            }}
        />
    );
    export default MantinePage;
    `;
    await outputFile(path.join('src', 'pages', 'mantine', `${page}.tsx`), examplePage);
};
