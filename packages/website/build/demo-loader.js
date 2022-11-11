const path = require('path');

module.exports = function (source) {
    const name = path.basename(this.resourcePath).split('.')[0];
    const content = `
import Demo from '@demo';

${source.replace('export default', `const ${name}Preview =`)}

const snippet = \`${source.replace(/\\|`|\$/g, '\\$&')}\`;
const ${name}Demo = () => (
    <Demo snippet={snippet}>
        <${name}Preview />
    </Demo>
);
export default ${name}Demo;
`;
    return content;
};
