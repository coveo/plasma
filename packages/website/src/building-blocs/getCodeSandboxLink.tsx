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

    if (snippetUsesPackage(snippet, '@coveord/plasma-react')) {
        dependencies['@coveord/plasma-react'] = 'latest';
        dependencies['@redux-devtools/extension'] = packageConfig.dependencies['@redux-devtools/extension'];
        dependencies['react-redux'] = packageConfig.dependencies['react-redux'];
        dependencies['redux'] = packageConfig.dependencies['redux'];
        dependencies['redux-promise-middleware'] = packageConfig.dependencies['redux-promise-middleware'];
        dependencies['redux-thunk'] = packageConfig.dependencies['redux-thunk'];
        dependencies['jquery'] = 'latest';
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

    if (snippetUsesPackage(snippet, '@coveord/plasma-react')) {
        return `
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import Demo from './Demo';
import Store from './Store';
import {Defaults} from '@coveord/plasma-react';
import '@coveord/plasma-style/dist/style.css';
import './font.css';

const root = createRoot(document.getElementById('App'));
Defaults.APP_ELEMENT = '#App';
Defaults.MODAL_ROOT = '#Modals';

root.render(
    <Provider store={Store}>
        <Demo />
    </Provider>
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

const storeTs = `
import {IDispatch, PlasmaReducers} from '@coveord/plasma-react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({name: 'Plasma Sandbox Store'});
const Store = createStore(combineReducers(PlasmaReducers), {}, composeEnhancers(applyMiddleware<IDispatch>(...[thunk, promise])));
export default Store;
`;

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
            ...(snippetUsesPackage(snippet, '@coveord/plasma-react')
                ? {
                      'src/Store.ts': {
                          content: storeTs,
                          isBinary: false,
                      },
                  }
                : {}),
        },
    });
    return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&json=1`;
};

export default getSandboxLink;
