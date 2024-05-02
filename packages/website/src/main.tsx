import axios from 'axios';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import NotFound from './404.tsx';
import App from './App.tsx';
import Brand from './Brand.tsx';
import {UnexpectedError} from './UnexpectedError.tsx';
import {AuthProvider} from './authentication';

// needed for codemirror (legacy CodeEditor) to work locally
window.global ||= window;
const generateNavigation = (menu: any[] = []): any[] =>
    menu?.map(({path, items}) => [path, ...generateNavigation(items).flat()]);

const pathsBrandOwnedByStrapi = await axios
    .get(`${import.meta.env.VITE_ADMIN_API_URL}/navigation/render/main-navigation?type=TREE`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
        },
    })
    .then(({data}) =>
        generateNavigation(data)
            .flat()
            .map((path) => ({
                path,
                element: <Brand />,
            })),
    );

const pages = import.meta.glob<() => JSX.Element>('./pages/**/*.tsx', {import: 'default'});

const pagesRoutes = Object.entries(pages).map(([filePath, fileModule]) => {
    const pathSegments = filePath.split('/').slice(2);
    const path =
        pathSegments[pathSegments.length - 1] === 'index.tsx'
            ? pathSegments.slice(0, -1).join('/')
            : pathSegments.join('/').replace(/\.tsx$/, '');

    return {
        path,
        lazy: async () => {
            const Component = await fileModule();
            return {Component};
        },
        errorElement: <UnexpectedError />,
    };
});

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [{path: '*', element: <NotFound />}, ...pathsBrandOwnedByStrapi, ...pagesRoutes],
        },
    ],
    {basename: import.meta.env.BASE_URL},
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
);
