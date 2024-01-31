import path from 'node:path';
import {Plugin} from 'vite';

const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const demoSnippets = (): Plugin => ({
    name: 'demo-snippets',
    transform: (source, id) => {
        if (/\.demo(\.\w+)?\.tsx\?demo$/.test(id)) {
            const name = capitalizeFirstLetter(path.basename(id).split('.')[0]);
            const content = `
import DemoContainer from '@demo';

${source.replace('export default', `const ${name}Preview =`)}

const snippet = \`${source.replace(/\\|`|\$/g, '\\$&')}\`;
const ${name}Demo = (props: DemoComponentProps) => (
    <DemoContainer snippet={snippet} {...props}>
        <${name}Preview />
    </DemoContainer>
);

export default ${name}Demo;
`;
            return {
                code: content,
                map: null,
            };
        }
    },
    enforce: 'pre', // we want this plugin to run before the react() plugin
});

export default demoSnippets;
