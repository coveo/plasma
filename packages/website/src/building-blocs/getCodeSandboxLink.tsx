import {getParameters} from 'codesandbox-import-utils/lib/api/define';
import packageConfig from '../../package.json';

type Dependencies = {
    [Dep in keyof Partial<(typeof packageConfig)['dependencies']>]: string;
};

type PackageDependencies = keyof (typeof packageConfig)['dependencies'];

const snippetUsesPackage = (snippet: string, packageName: PackageDependencies): boolean =>
    snippet.indexOf(`from '${packageName}';`) > -1;

const getRawDependenciesFromSnippet = (snippet: string): Dependencies => {
    const dependencies: Dependencies = {
        react: packageConfig.dependencies.react,
        'react-dom': packageConfig.dependencies['react-dom'],
    };
    snippet.match(/(?<=from ')[^']*/gm)?.forEach((value) => {
        const entry = value as PackageDependencies;
        dependencies[entry] = packageConfig.dependencies[entry];
    });
    return dependencies;
};

const addAndFineTuneDependencies = (snippet: string, dependencies: Dependencies): Dependencies => {
    if (snippetUsesPackage(snippet, '@coveord/plasma-react-icons')) {
        dependencies['@coveord/plasma-react-icons'] = 'latest';
    }

    if (snippetUsesPackage(snippet, '@coveord/plasma-mantine')) {
        dependencies['@coveord/plasma-mantine'] = 'latest';
        dependencies['@emotion/react'] = packageConfig.dependencies['@emotion/react'];
        dependencies['embla-carousel-react'] = packageConfig.dependencies['embla-carousel-react'];
        // Add all @mantine matching dependencies from package.json to the sandbox dependencies
        Object.keys(packageConfig.dependencies)?.forEach((value) => {
            const entry = value as PackageDependencies;
            if (entry.match(/^(@mantine).*/)) {
                dependencies[entry] = packageConfig.dependencies[entry];
            }
        });
    }

    return dependencies;
};

const getIndexOfSnippet = (snippet: string): string => {
    if (snippetUsesPackage(snippet, '@coveord/plasma-mantine')) {
        return `
import {createRoot} from 'react-dom/client';
import {Container, Plasmantine, Notifications} from '@coveord/plasma-mantine';
import Demo from './Demo';
import './font.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <Plasmantine>
        <Notifications position="top-center" />
        <Container p="md">
            <Demo />
        </Container>
    </Plasmantine>
);
        `;
    }

    return `
import {createRoot} from 'react-dom/client';
import Demo from './Demo';
import './font.css';

const root = createRoot(document.getElementById('root'));
root.render(<Demo />);
    `;
};

const indexHtml = `
<!DOCTYPE html>
<html>
<body class="coveo-styleguide">
    <div id="root" />
    <div id="Modals" />
    <div id="plasma-dropdowns" />
    <div id="App" />
    <script type="module" src="./src/index.tsx"></script>
</body>
</html>
`;

const viteConfig = `
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()]
})
`;

const getSandboxLink = (snippet: string): string => {
    const dependencies = getRawDependenciesFromSnippet(snippet);
    const parameters = getParameters({
        template: 'node',
        files: {
            'package.json': {
                content: {
                    scripts: {
                        dev: 'vite',
                        build: 'tsc && vite build',
                        serve: 'vite preview',
                    },
                    dependencies: addAndFineTuneDependencies(snippet, dependencies),
                    devDependencies: {
                        vite: '^4.2.1',
                        '@vitejs/plugin-react': '^3.1.0',
                        tslib: packageConfig.devDependencies.tslib,
                        typescript: packageConfig.devDependencies.typescript,
                        '@types/react': packageConfig.devDependencies['@types/react'],
                        '@types/react-dom': packageConfig.devDependencies['@types/react-dom'],
                    },
                } as unknown as string, // https://github.com/codesandbox/codesandbox-importers/issues/137
                isBinary: false,
            },
            'src/index.tsx': {
                content: getIndexOfSnippet(snippet),
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
            'vite.config.ts': {
                content: viteConfig,
                isBinary: false,
            },
            'index.html': {
                content: indexHtml,
                isBinary: false,
            },
        },
    });
    return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&json=1`;
};

export default getSandboxLink;
