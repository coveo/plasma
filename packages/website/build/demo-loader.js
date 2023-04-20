const path = require('path');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = function (source) {
    const name = capitalizeFirstLetter(path.basename(this.resourcePath).split('.')[0]);
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
    return content;
};
