(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [82344],
    {
        29430: function (e, r, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/foundations/Typekit',
                function () {
                    return n(57122);
                },
            ]);
        },
        39668: function (e, r, n) {
            'use strict';
            n.d(r, {
                Z: function () {
                    return y;
                },
            });
            var o = n(80762),
                s = n(43112),
                t = n(97458),
                i = n(15084),
                c = n(4778),
                d = n(21876),
                a = n(85319),
                l = n(25545),
                u = n(52071),
                h = n(96846),
                m = JSON.parse(
                    '{"HO":{"@braintree/sanitize-url":"6.0.4","@coveo/atomic-react":"2.5.7","@coveord/plasma-components-props-analyzer":"workspace:*","@coveord/plasma-mantine":"workspace:*","@coveord/plasma-react":"workspace:*","@coveord/plasma-react-icons":"workspace:*","@coveord/plasma-style":"workspace:*","@coveord/plasma-tokens":"workspace:*","@emotion/react":"11.11.1","@emotion/server":"11.11.0","@faker-js/faker":"8.0.2","@mantine/carousel":"6.0.19","@mantine/core":"6.0.19","@mantine/dates":"6.0.19","@mantine/form":"6.0.19","@mantine/hooks":"6.0.19","@mantine/modals":"6.0.19","@mantine/next":"6.0.19","@mantine/notifications":"6.0.19","@mantine/prism":"6.0.19","@swc/helpers":"0.5.1","@tanstack/match-sorter-utils":"8.8.4","clsx":"2.0.0","codesandbox-import-utils":"2.2.3","dayjs":"1.11.9","embla-carousel-react":"7.1.0","flagg":"1.1.2","lodash.kebabcase":"4.1.1","lorem-ipsum":"2.0.8","moment":"2.29.4","next":"13.4.19","next-global-css":"1.3.1","next-images":"1.8.5","next-sitemap":"4.2.2","rc-slider":"9.7.5","react":"18.2.0","react-diff-view":"3.0.3","react-dom":"18.2.0","react-hook-form":"7.45.4","react-markdown":"8.0.7","react-redux":"8.1.2","redux":"4.2.1","redux-devtools-extension":"2.13.9","redux-promise-middleware":"6.1.3","redux-thunk":"2.4.2","remark-gfm":"3.0.1","reselect":"4.1.8","underscore":"1.13.6"},"v6":{"gg":"18.2.20","Qe":"18.2.7","Up":"2.6.2","NN":"5.1.6"}}',
                ),
                p = function (e, r) {
                    return e.indexOf("from '".concat(r, "';")) > -1;
                },
                b = function (e) {
                    var r,
                        n = {react: m.HO.react, 'react-dom': m.HO['react-dom']};
                    return (
                        null === (r = e.match(RegExp("(?<=from ')[^']*", 'gm'))) ||
                            void 0 === r ||
                            r.map(function (e) {
                                n[e] = m.HO[e];
                            }),
                        n
                    );
                },
                v = function (e, r) {
                    if (
                        (p(e, '@coveord/plasma-react-icons') && (r['@coveord/plasma-react-icons'] = 'latest'),
                        p(e, '@coveord/plasma-mantine'))
                    ) {
                        var n;
                        ((r['@coveord/plasma-mantine'] = 'latest'),
                            (r['@emotion/react'] = m.HO['@emotion/react']),
                            (r['embla-carousel-react'] = m.HO['embla-carousel-react']),
                            null === (n = Object.keys(m.HO)) ||
                                void 0 === n ||
                                n.map(function (e) {
                                    e.match(/^(@mantine).*/) && (r[e] = m.HO[e]);
                                }));
                    }
                    return (
                        p(e, '@coveord/plasma-react') &&
                            ((r['@coveord/plasma-react'] = 'latest'),
                            (r['react-redux'] = m.HO['react-redux']),
                            (r.redux = m.HO.redux),
                            (r['redux-devtools-extension'] = m.HO['redux-devtools-extension']),
                            (r['redux-promise-middleware'] = m.HO['redux-promise-middleware']),
                            (r['redux-thunk'] = m.HO['redux-thunk']),
                            (r.jquery = 'latest')),
                        r
                    );
                },
                x = function (e) {
                    var r = b(e),
                        n = (0, h.Z)({
                            template: 'node',
                            files: (0, u._)(
                                {
                                    'package.json': {
                                        content: {
                                            scripts: {dev: 'vite', build: 'tsc && vite build', serve: 'vite preview'},
                                            dependencies: v(e, r),
                                            devDependencies: {
                                                vite: '^4.2.1',
                                                '@vitejs/plugin-react': '^3.1.0',
                                                tslib: m.v6.Up,
                                                typescript: m.v6.NN,
                                                '@types/react': m.v6.gg,
                                                '@types/react-dom': m.v6.Qe,
                                            },
                                        },
                                        isBinary: !1,
                                    },
                                    'src/index.tsx': {
                                        content: p(e, '@coveord/plasma-mantine')
                                            ? "\nimport {createRoot} from 'react-dom/client';\nimport {Container, Plasmantine, Notifications} from '@coveord/plasma-mantine';\nimport Demo from './Demo';\nimport './font.css';\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(\n    <Plasmantine>\n        <Notifications position=\"top-center\" />\n        <Container p=\"md\">\n            <Demo />\n        </Container>\n    </Plasmantine>\n);\n        "
                                            : p(e, '@coveord/plasma-react')
                                              ? "\nimport {createRoot} from 'react-dom/client';\nimport {Provider} from 'react-redux';\nimport Demo from './Demo';\nimport Store from './Store';\nimport {Defaults} from '@coveord/plasma-react';\nimport '@coveord/plasma-style/dist/style.css';\nimport './font.css';\n\nconst root = createRoot(document.getElementById('App'));\nDefaults.APP_ELEMENT = '#App';\nDefaults.MODAL_ROOT = '#Modals';\n\nroot.render(\n    <Provider store={Store}>\n        <Demo />\n    </Provider>\n);\n        "
                                              : "\nimport {createRoot} from 'react-dom/client';\nimport Demo from './Demo';\nimport './font.css';\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(<Demo />);\n    ",
                                        isBinary: !1,
                                    },
                                    'src/Demo.tsx': {content: e, isBinary: !1},
                                    'src/font.css': {
                                        content: '@import url("https://use.typekit.net/wqe4zqp.css");',
                                        isBinary: !1,
                                    },
                                    'vite.config.ts': {
                                        content:
                                            "\nimport { defineConfig } from 'vite'\nimport reactRefresh from '@vitejs/plugin-react'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [reactRefresh()]\n})\n",
                                        isBinary: !1,
                                    },
                                    'index.html': {
                                        content:
                                            '\n<!DOCTYPE html>\n<html>\n<body class="coveo-styleguide">\n    <div id="root" />\n    <div id="Modals" />\n    <div id="plasma-dropdowns" />\n    <div id="App" />\n    <script type="module" src="./src/index.tsx"></script>\n</body>\n</html>\n',
                                        isBinary: !1,
                                    },
                                },
                                p(e, '@coveord/plasma-react')
                                    ? {
                                          'src/Store.ts': {
                                              content:
                                                  "\nimport {IDispatch, PlasmaReducers} from '@coveord/plasma-react';\nimport {applyMiddleware, combineReducers, createStore} from 'redux';\nimport {composeWithDevTools} from 'redux-devtools-extension';\nimport promise from 'redux-promise-middleware';\nimport thunk from 'redux-thunk';\n\nconst composeEnhancers = composeWithDevTools({name: 'Plasma Sandbox Store'});\nconst Store = createStore(combineReducers(PlasmaReducers), {}, composeEnhancers(applyMiddleware<IDispatch>(...[thunk, promise])));\nexport default Store;\n",
                                              isBinary: !1,
                                          },
                                      }
                                    : {},
                            ),
                        });
                    return 'https://codesandbox.io/api/v1/sandboxes/define?parameters='.concat(n, '&json=1');
                },
                f = (0, i.kcS)(function (e, r) {
                    var n = r.grow,
                        o = r.noPadding;
                    return {
                        root: {},
                        sandbox: {
                            border: '1px solid '.concat(e.colors.gray[3]),
                            borderRadius: e.radius.md,
                            overflow: 'hidden',
                        },
                        actions: {
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            zIndex: 2,
                            padding: e.spacing.xs,
                            backgroundColor: '#1E1E1E',
                            'button:hover, a:hover': {backgroundColor: e.colors.gray[8]},
                        },
                        preview: {backgroundColor: 'white', minHeight: 100},
                        previewWrapper: {padding: o ? 0 : e.spacing.md, height: n ? 500 : '100%'},
                        code: {minHeight: 100, position: 'relative', backgroundColor: '#1E1E1E'},
                    };
                }),
                y = function (e) {
                    var r,
                        n = e.children,
                        u = e.snippet,
                        h = e.center,
                        m = void 0 !== h && h,
                        p = e.grow,
                        b = e.title,
                        v = e.layout,
                        y = f({center: m, grow: void 0 !== p && p, noPadding: e.noPadding}).classes,
                        j = (0, i.VPI)(),
                        k =
                            ((r = (0, o._)(function () {
                                var e;
                                return (0, s.Jh)(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return (r.trys.push([0, 3, , 4]), [4, fetch(x(u))]);
                                        case 1:
                                            return [4, r.sent().json()];
                                        case 2:
                                            return (
                                                (e = r.sent().sandbox_id),
                                                window.open(
                                                    'https://codesandbox.io/p/sandbox/'.concat(
                                                        e,
                                                        '?file=%2Fsrc%2FDemo.tsx',
                                                    ),
                                                    '_blank',
                                                ),
                                                [3, 4]
                                            );
                                        case 3:
                                            return (console.error(r.sent()), [3, 4]);
                                        case 4:
                                            return [2];
                                    }
                                });
                            })),
                            function () {
                                return r.apply(this, arguments);
                            });
                    return (0, t.jsxs)('div', {
                        className: y.root,
                        children: [
                            b ? (0, t.jsx)(i.Dxz, {order: 5, mb: 'xs', children: b}) : null,
                            (0, t.jsxs)(i.MIq, {
                                className: y.sandbox,
                                cols: 'vertical' === v ? 1 : 2,
                                spacing: 0,
                                children: [
                                    (0, t.jsx)(i.xuv, {
                                        component: m ? i.M5Y : 'div',
                                        className: y.preview,
                                        children: (0, t.jsx)(i.xrM.Autosize, {
                                            mah: 500,
                                            children: (0, t.jsx)('div', {className: y.previewWrapper, children: n}),
                                        }),
                                    }),
                                    (0, t.jsxs)('div', {
                                        className: y.code,
                                        children: [
                                            (0, t.jsx)(d.p, {
                                                withLineNumbers: !0,
                                                language: 'tsx',
                                                colorScheme: 'dark',
                                                getPrismTheme: function (e, r) {
                                                    return 'light' === r ? l.Z : a.Z;
                                                },
                                                radius: 0,
                                                noCopy: !0,
                                                scrollAreaComponent: i.xrM.Autosize,
                                                styles: {scrollArea: {maxHeight: 500, minHeight: 100}},
                                                children: u,
                                            }),
                                            (0, t.jsxs)(i.Kqy, {
                                                className: y.actions,
                                                spacing: 'xs',
                                                children: [
                                                    (0, t.jsx)(i.ua7, {
                                                        label: j.copied ? 'Copied' : 'Copy',
                                                        position: 'left',
                                                        children: (0, t.jsx)(i.Aar, {
                                                            radius: 'sm',
                                                            onClick: function () {
                                                                return j.copy(u);
                                                            },
                                                            children: j.copied
                                                                ? (0, t.jsx)(c.CheckSize16Px, {height: 16})
                                                                : (0, t.jsx)(c.CopySize16Px, {height: 16}),
                                                        }),
                                                    }),
                                                    (0, t.jsx)(i.ua7, {
                                                        label: 'Open in CodeSanbox',
                                                        position: 'left',
                                                        children: (0, t.jsx)(i.Aar, {
                                                            radius: 'sm',
                                                            onClick: k,
                                                            children: (0, t.jsx)(c.PlaySize16Px, {height: 16}),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                };
        },
        57122: function (e, r, n) {
            'use strict';
            (n.r(r),
                n.d(r, {
                    Typekit: function () {
                        return m;
                    },
                    default: function () {
                        return p;
                    },
                }));
            var o = n(97458),
                s = n(52071),
                t = n(88966),
                i = n(39668),
                c = function () {
                    return (0, o.jsx)('h1', {children: 'Hello World!'});
                },
                d = function (e) {
                    return (0, o.jsx)(
                        i.Z,
                        (0, t._)(
                            (0, s._)({snippet: 'const Demo = () => <h1>Hello World!</h1>;\nexport default Demo;\n'}, e),
                            {children: (0, o.jsx)(c, {})},
                        ),
                    );
                },
                a = n(28934),
                l = n(66809),
                u = n(21468).lW,
                h = [
                    {
                        name: 'Code',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('span', {className: 'code', children: r});
                                },
                                selectors: ['.code'],
                            },
                        ],
                    },
                    {
                        name: 'Caption',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'caption', children: r});
                                },
                                selectors: ['.caption'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'caption-book', children: r});
                                },
                                selectors: ['.caption-book'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'caption-subdued', children: r});
                                },
                                selectors: ['.caption-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'caption-book-subdued', children: r});
                                },
                                selectors: ['.caption-book-subdued'],
                            },
                        ],
                    },
                    {
                        name: 'Body small',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-s', children: r});
                                },
                                selectors: ['.body-s'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-s-book', children: r});
                                },
                                selectors: ['.body-s-book'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-s-book-italic', children: r});
                                },
                                selectors: ['.body-s-book-italic'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-s-subdued', children: r});
                                },
                                selectors: ['.body-s-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-s-book-subdued', children: r});
                                },
                                selectors: ['.body-s-book-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-s-book-italic-subdued', children: r});
                                },
                                selectors: ['.body-s-book-italic-subdued'],
                            },
                        ],
                    },
                    {
                        name: 'Body medium',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-m', children: r});
                                },
                                selectors: ['.body-m'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('p', {children: r});
                                },
                                selectors: ['p', '.p', '.body-m-book'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-m-book-italic', children: r});
                                },
                                selectors: ['.body-m-book-italic'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-m-subdued', children: r});
                                },
                                selectors: ['.body-m-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-m-book-subdued', children: r});
                                },
                                selectors: ['.body-m-book-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-m-book-italic-subdued', children: r});
                                },
                                selectors: ['.body-m-book-italic-subdued'],
                            },
                        ],
                    },
                    {
                        name: 'Body large',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-l', children: r});
                                },
                                selectors: ['.body-l'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-l-book', children: r});
                                },
                                selectors: ['.body-l-book'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-l-book-italic', children: r});
                                },
                                selectors: ['.body-l-book-italic'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-l-subdued', children: r});
                                },
                                selectors: ['.body-l-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-l-book-subdued', children: r});
                                },
                                selectors: ['.body-l-book-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'body-l-book-italic-subdued', children: r});
                                },
                                selectors: ['.body-l-book-italic-subdued'],
                            },
                        ],
                    },
                    {
                        name: 'Heading 6',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h6', {children: r});
                                },
                                selectors: ['h6', '.h6'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h6', {className: 'h6-subdued', children: r});
                                },
                                selectors: ['.h6-subdued'],
                            },
                        ],
                    },
                    {
                        name: 'Heading 5',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h5', {children: r});
                                },
                                selectors: ['h5', '.h5'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h5', {className: 'h5-subdued', children: r});
                                },
                                selectors: ['.h5-subdued'],
                            },
                        ],
                    },
                    {
                        name: 'Heading 4',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h4', {children: r});
                                },
                                selectors: ['h4', '.h4'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h4', {className: 'h4-subdued', children: r});
                                },
                                selectors: ['.h4-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h4', {className: 'h4-book', children: r});
                                },
                                selectors: ['.h4-book'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h4', {className: 'h4-book-subdued', children: r});
                                },
                                selectors: ['.h4-book-subdued'],
                            },
                        ],
                    },
                    {
                        name: 'Heading 3',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h3', {children: r});
                                },
                                selectors: ['h3', '.h3'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h3', {className: 'h3-subdued', children: r});
                                },
                                selectors: ['.h3-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h3', {className: 'h3-book', children: r});
                                },
                                selectors: ['.h3-book'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h3', {className: 'h3-book-subdued', children: r});
                                },
                                selectors: ['.h3-book-subdued'],
                            },
                        ],
                    },
                    {
                        name: 'Heading 2',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h2', {children: r});
                                },
                                selectors: ['h2', '.h2'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h2', {className: 'h2-subdued', children: r});
                                },
                                selectors: ['.h2-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h2', {className: 'h2-book', children: r});
                                },
                                selectors: ['.h2-book'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h2', {className: 'h2-book-subdued', children: r});
                                },
                                selectors: ['.h2-book-subdued'],
                            },
                        ],
                    },
                    {
                        name: 'Heading 1',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h1', {children: r});
                                },
                                selectors: ['h1', '.h1'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h1', {className: 'h1-subdued', children: r});
                                },
                                selectors: ['.h1-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h1', {className: 'h1-light', children: r});
                                },
                                selectors: ['.h1-light'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('h1', {className: 'h1-light-subdued', children: r});
                                },
                                selectors: ['.h1-light-subdued'],
                            },
                        ],
                    },
                    {
                        name: 'Hero',
                        variants: [
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'hero', children: r});
                                },
                                selectors: ['.hero'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'hero-light', children: r});
                                },
                                selectors: ['.hero-light'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'hero-subdued', children: r});
                                },
                                selectors: ['.hero-subdued'],
                            },
                            {
                                renderer: function (e) {
                                    var r = e.children;
                                    return (0, o.jsx)('div', {className: 'hero-light-subdued', children: r});
                                },
                                selectors: ['.hero-light-subdued'],
                            },
                        ],
                    },
                ],
                m = function () {
                    return (0, o.jsx)(l.X, {
                        id: 'Typekit',
                        section: 'Foundations',
                        title: 'Typekit',
                        thumbnail: 'typekit',
                        description:
                            'The Typekit covers all typography styles designed specifically to work with the Plasma ecosystem.',
                        demo: (0, o.jsx)(d, {center: !0}),
                        sourcePath: '/packages/style/scss/typekit.scss',
                        withPropsTable: !1,
                        children: (0, o.jsx)('div', {
                            className: 'plasma-page-layout__section full-content flex-column',
                            children: h.map(function (e) {
                                var r = e.name,
                                    n = e.variants;
                                return (0, o.jsxs)(
                                    'div',
                                    {
                                        className: 'p2 mb3',
                                        children: [
                                            (0, o.jsx)('h6', {className: 'h6-subdued mb2', children: r}),
                                            (0, o.jsxs)('table', {
                                                className: 'table',
                                                children: [
                                                    (0, o.jsx)('thead', {
                                                        className: 'mod-no-border-top',
                                                        children: (0, o.jsxs)('tr', {
                                                            children: [
                                                                (0, o.jsx)('th', {
                                                                    style: {width: '300px'},
                                                                    children: 'Usage',
                                                                }),
                                                                (0, o.jsx)('th', {children: 'Preview'}),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, o.jsx)('tbody', {
                                                        children: n.map(function (e) {
                                                            var r = e.selectors,
                                                                n = e.renderer;
                                                            return (0, o.jsxs)(
                                                                'tr',
                                                                {
                                                                    children: [
                                                                        (0, o.jsx)('td', {
                                                                            className: 'mod-no-border-bottom',
                                                                            children: r.map(function (e, n) {
                                                                                return (0, o.jsx)(
                                                                                    'span',
                                                                                    {
                                                                                        className: (0, a.Z)('code', {
                                                                                            mr1: n + 1 !== r.length,
                                                                                        }),
                                                                                        children: e,
                                                                                    },
                                                                                    e,
                                                                                );
                                                                            }),
                                                                        }),
                                                                        (0, o.jsx)('td', {
                                                                            className: 'mod-no-border-bottom',
                                                                            children: (0, o.jsx)(n, {
                                                                                children:
                                                                                    'Deliver breakthrough digital experiences',
                                                                            }),
                                                                        }),
                                                                    ],
                                                                },
                                                                u.from(r.join('-')).toString('base64'),
                                                            );
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    r,
                                );
                            }),
                        }),
                    });
                },
                p = m;
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 21468, 37791, 66809, 49774, 92888, 40179], function () {
            return e((e.s = 29430));
        }),
            (_N_E = e.O()));
    },
]);
