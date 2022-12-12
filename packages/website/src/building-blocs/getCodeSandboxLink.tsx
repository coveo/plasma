import {getParameters} from 'codesandbox-import-utils/lib/api/define';
// @ts-ignore
import packageConfig from '../../package.json';

type Dependencies = {
    [Dep in keyof Partial<typeof packageConfig['dependencies']>]: string;
};

const snippetUsesPackage = (snippet: string, packageName: keyof typeof packageConfig['dependencies']): boolean =>
    snippet.indexOf(`from '${packageName}';`) > -1;

const guessDependenciesFromSnippet = (snippet: string): Dependencies => {
    const dependencies: Dependencies = {
        react: packageConfig.dependencies.react,
        'react-dom': packageConfig.dependencies['react-dom'],
    };

    if (snippetUsesPackage(snippet, '@coveord/plasma-react-icons')) {
        dependencies['@coveord/plasma-react-icons'] = 'latest';
    }

    if (snippetUsesPackage(snippet, '@coveord/plasma-mantine')) {
        dependencies['@coveord/plasma-mantine'] = 'latest';
        dependencies['@emotion/react'] = packageConfig.dependencies['@emotion/react'];
        dependencies['@mantine/core'] = packageConfig.dependencies['@mantine/core'];
        dependencies['@mantine/dates'] = packageConfig.dependencies['@mantine/dates'];
        dependencies['@mantine/form'] = packageConfig.dependencies['@mantine/form'];
        dependencies['@mantine/hooks'] = packageConfig.dependencies['@mantine/hooks'];
        dependencies['@mantine/modals'] = packageConfig.dependencies['@mantine/modals'];
        dependencies['@mantine/carousel'] = packageConfig.dependencies['@mantine/carousel'];
        dependencies['embla-carousel-react'] = packageConfig.dependencies['embla-carousel-react'];
    }

    if (snippetUsesPackage(snippet, '@coveord/plasma-react')) {
        dependencies['@coveord/plasma-react'] = 'latest';
        dependencies['react-redux'] = packageConfig.dependencies['react-redux'];
        dependencies['redux'] = packageConfig.dependencies['redux'];
        dependencies['redux-devtools-extension'] = packageConfig.dependencies['redux-devtools-extension'];
        dependencies['redux-promise-middleware'] = packageConfig.dependencies['redux-promise-middleware'];
        dependencies['redux-thunk'] = packageConfig.dependencies['redux-thunk'];
        (dependencies as any)['jquery'] = 'latest';
    }

    if (snippetUsesPackage(snippet, 'lorem-ipsum')) {
        dependencies['lorem-ipsum'] = packageConfig.dependencies['lorem-ipsum'];
    }

    return dependencies;
};

const getIndexOfSnippet = (snippet: string): string => {
    if (snippetUsesPackage(snippet, '@coveord/plasma-mantine')) {
        return `
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
    }

    if (snippetUsesPackage(snippet, '@coveord/plasma-react')) {
        return `
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import Demo from './Demo';
import Store from './Store';
import {Defaults} from '@coveord/plasma-react';
import '@coveord/plasma-style/dist/css/CoveoStyleGuide.css';
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
import {composeWithDevTools} from 'redux-devtools-extension';
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
    <div id="Modals" />
    <div id="plasma-dropdowns" />
    <div id="App" />
</body>
</html>
`;

const getSandboxLink = (snippet: string): string => {
    const parameters = getParameters({
        template: 'create-react-app',
        files: {
            'package.json': {
                content: {
                    dependencies: guessDependenciesFromSnippet(snippet),
                    devDependencies: {
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
            ...(snippetUsesPackage(snippet, '@coveord/plasma-react')
                ? {
                      'public/index.html': {
                          content: indexHtml,
                          isBinary: false,
                      },
                      'src/Store.ts': {
                          content: storeTs,
                          isBinary: false,
                      },
                  }
                : {}),
        },
    });
    return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&query=module=/src/Demo.tsx`;
};

export default getSandboxLink;
