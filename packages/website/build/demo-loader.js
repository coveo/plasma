const path = require('path');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = function (source) {
    const name = capitalizeFirstLetter(path.basename(this.resourcePath).split('.')[0]);
    const content = `
import Demo from '@demo';

${source.replace('export default', `const ${name}Preview =`)}

const snippet = \`${source.replace(/\\|`|\$/g, '\\$&')}\`;
const ${name}Demo = (props: DemoComponentProps) => (
    <Demo snippet={snippet} {...props}>
        <${name}Preview />
    </Demo>
);
export default ${name}Demo;
`;
    return content;
};
