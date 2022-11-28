import {getParameters} from 'codesandbox-import-utils/lib/api/define';
// @ts-ignore
import packageConfig from '../../package.json';

const packageJson = {
    dependencies: {
        react: packageConfig.dependencies.react,
        'react-dom': packageConfig.dependencies['react-dom'],
        '@coveord/plasma-mantine': 'latest',
        '@coveord/plasma-react-icons': 'latest',
        '@emotion/react': packageConfig.dependencies['@emotion/react'],
        '@mantine/core': packageConfig.dependencies['@mantine/core'],
        '@mantine/dates': packageConfig.dependencies['@mantine/dates'],
        '@mantine/form': packageConfig.dependencies['@mantine/form'],
        '@mantine/hooks': packageConfig.dependencies['@mantine/hooks'],
        '@mantine/modals': packageConfig.dependencies['@mantine/modals'],
        '@mantine/carousel': packageConfig.dependencies['@mantine/carousel'],
        'embla-carousel-react': packageConfig.dependencies['embla-carousel-react'],
        'lorem-ipsum': packageConfig.dependencies['lorem-ipsum'],
    },
    devDependencies: {
        tslib: packageConfig.devDependencies.tslib,
        typescript: packageConfig.devDependencies.typescript,
        '@types/react': packageConfig.devDependencies['@types/react'],
        '@types/react-dom': packageConfig.devDependencies['@types/react-dom'],
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
