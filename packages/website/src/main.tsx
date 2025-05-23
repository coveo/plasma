import './styles/reset.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '../scripts/i18n';

import {StrictMode, JSX, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import NotFound from './404.tsx';
import App from './App.tsx';
import {UnexpectedError} from './UnexpectedError.tsx';

// needed for codemirror (legacy CodeEditor) to work locally
window.global ||= window;

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
            children: [{path: '*', element: <NotFound />}, ...pagesRoutes],
        },
    ],
    {basename: import.meta.env.BASE_URL},
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<div>Loading...</div>}>
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    </Suspense>,
);
