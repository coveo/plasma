import {getParameters} from 'codesandbox-import-utils/lib/api/define';

const packageJson = {
    dependencies: {
        react: 'latest',
        'react-dom': 'latest',
        '@coveord/plasma-mantine': 'latest',
        '@emotion/react': 'latest',
        '@mantine/core': 'latest',
        '@mantine/dates': 'latest',
        '@mantine/form': 'latest',
        '@mantine/hooks': 'latest',
        '@mantine/modals': 'latest',
        '@mantine/carousel': 'latest',
        'embla-carousel-react': 'latest',
    },
    devDependencies: {
        tslib: 'latest',
        typescript: 'latest',
        '@types/react': 'latest',
        '@types/react-dom': 'latest',
    },
};

const indexTs = `
import {createRoot} from 'react-dom/client';
import {Container, Plasmantine} from '@coveord/plasma-mantine';
import Demo from './Demo';
import './font.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <Plasmantine>
        <Container p="md">
            <Demo />
        </Container>
    </Plasmantine>
);
`;

const getSandboxLink = (snippet: string): string => {
    const parameters = getParameters({
        template: 'create-react-app',
        files: {
            'package.json': {
                content: packageJson as unknown as string, // https://github.com/codesandbox/codesandbox-importers/issues/137
                isBinary: false,
            },
            'src/index.tsx': {
                content: indexTs,
                isBinary: false,
            },
            'src/Demo.tsx': {
                content: snippet,
                isBinary: false,
            },
            'src/font.css': {
                content: '@import url("https://use.typekit.net/wqe4zqp.css");',
                isBinary: false,
            },
        },
    });
    return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&query=module=/src/Demo.tsx`;
};

export default getSandboxLink;
