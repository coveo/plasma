(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8340],
    {
        5940: function (e, n, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/foundations/Spacing',
                function () {
                    return s(94686);
                },
            ]);
        },
        39668: function (e, n, s) {
            'use strict';
            s.d(n, {
                Z: function () {
                    return j;
                },
            });
            var t = s(80762),
                o = s(43112),
                r = s(97458),
                i = s(15084),
                a = s(4778),
                c = s(21876),
                d = s(85319),
                l = s(25545),
                p = s(52071),
                m = s(96846),
                h = JSON.parse(
                    '{"HO":{"@braintree/sanitize-url":"6.0.4","@coveo/atomic-react":"2.5.7","@coveord/plasma-components-props-analyzer":"workspace:*","@coveord/plasma-mantine":"workspace:*","@coveord/plasma-react":"workspace:*","@coveord/plasma-react-icons":"workspace:*","@coveord/plasma-style":"workspace:*","@coveord/plasma-tokens":"workspace:*","@emotion/react":"11.11.1","@emotion/server":"11.11.0","@faker-js/faker":"8.0.2","@mantine/carousel":"6.0.19","@mantine/core":"6.0.19","@mantine/dates":"6.0.19","@mantine/form":"6.0.19","@mantine/hooks":"6.0.19","@mantine/modals":"6.0.19","@mantine/next":"6.0.19","@mantine/notifications":"6.0.19","@mantine/prism":"6.0.19","@swc/helpers":"0.5.1","@tanstack/match-sorter-utils":"8.8.4","clsx":"2.0.0","codesandbox-import-utils":"2.2.3","dayjs":"1.11.9","embla-carousel-react":"7.1.0","flagg":"1.1.2","lodash.kebabcase":"4.1.1","lorem-ipsum":"2.0.8","moment":"2.29.4","next":"13.4.19","next-global-css":"1.3.1","next-images":"1.8.5","next-sitemap":"4.2.2","rc-slider":"9.7.5","react":"18.2.0","react-diff-view":"3.0.3","react-dom":"18.2.0","react-hook-form":"7.45.4","react-markdown":"8.0.7","react-redux":"8.1.2","redux":"4.2.1","redux-devtools-extension":"2.13.9","redux-promise-middleware":"6.1.3","redux-thunk":"2.4.2","remark-gfm":"3.0.1","reselect":"4.1.8","underscore":"1.13.6"},"v6":{"gg":"18.2.20","Qe":"18.2.7","Up":"2.6.2","NN":"5.1.6"}}',
                ),
                u = function (e, n) {
                    return e.indexOf("from '".concat(n, "';")) > -1;
                },
                x = function (e) {
                    var n,
                        s = {react: h.HO.react, 'react-dom': h.HO['react-dom']};
                    return (
                        null === (n = e.match(RegExp("(?<=from ')[^']*", 'gm'))) ||
                            void 0 === n ||
                            n.map(function (e) {
                                s[e] = h.HO[e];
                            }),
                        s
                    );
                },
                v = function (e, n) {
                    if (
                        (u(e, '@coveord/plasma-react-icons') && (n['@coveord/plasma-react-icons'] = 'latest'),
                        u(e, '@coveord/plasma-mantine'))
                    ) {
                        var s;
                        ((n['@coveord/plasma-mantine'] = 'latest'),
                            (n['@emotion/react'] = h.HO['@emotion/react']),
                            (n['embla-carousel-react'] = h.HO['embla-carousel-react']),
                            null === (s = Object.keys(h.HO)) ||
                                void 0 === s ||
                                s.map(function (e) {
                                    e.match(/^(@mantine).*/) && (n[e] = h.HO[e]);
                                }));
                    }
                    return (
                        u(e, '@coveord/plasma-react') &&
                            ((n['@coveord/plasma-react'] = 'latest'),
                            (n['react-redux'] = h.HO['react-redux']),
                            (n.redux = h.HO.redux),
                            (n['redux-devtools-extension'] = h.HO['redux-devtools-extension']),
                            (n['redux-promise-middleware'] = h.HO['redux-promise-middleware']),
                            (n['redux-thunk'] = h.HO['redux-thunk']),
                            (n.jquery = 'latest')),
                        n
                    );
                },
                g = function (e) {
                    var n = x(e),
                        s = (0, m.Z)({
                            template: 'node',
                            files: (0, p._)(
                                {
                                    'package.json': {
                                        content: {
                                            scripts: {dev: 'vite', build: 'tsc && vite build', serve: 'vite preview'},
                                            dependencies: v(e, n),
                                            devDependencies: {
                                                vite: '^4.2.1',
                                                '@vitejs/plugin-react': '^3.1.0',
                                                tslib: h.v6.Up,
                                                typescript: h.v6.NN,
                                                '@types/react': h.v6.gg,
                                                '@types/react-dom': h.v6.Qe,
                                            },
                                        },
                                        isBinary: !1,
                                    },
                                    'src/index.tsx': {
                                        content: u(e, '@coveord/plasma-mantine')
                                            ? "\nimport {createRoot} from 'react-dom/client';\nimport {Container, Plasmantine, Notifications} from '@coveord/plasma-mantine';\nimport Demo from './Demo';\nimport './font.css';\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(\n    <Plasmantine>\n        <Notifications position=\"top-center\" />\n        <Container p=\"md\">\n            <Demo />\n        </Container>\n    </Plasmantine>\n);\n        "
                                            : u(e, '@coveord/plasma-react')
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
                                u(e, '@coveord/plasma-react')
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
                    return 'https://codesandbox.io/api/v1/sandboxes/define?parameters='.concat(s, '&json=1');
                },
                f = (0, i.kcS)(function (e, n) {
                    var s = n.grow,
                        t = n.noPadding;
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
                        previewWrapper: {padding: t ? 0 : e.spacing.md, height: s ? 500 : '100%'},
                        code: {minHeight: 100, position: 'relative', backgroundColor: '#1E1E1E'},
                    };
                }),
                j = function (e) {
                    var n,
                        s = e.children,
                        p = e.snippet,
                        m = e.center,
                        h = void 0 !== m && m,
                        u = e.grow,
                        x = e.title,
                        v = e.layout,
                        j = f({center: h, grow: void 0 !== u && u, noPadding: e.noPadding}).classes,
                        b = (0, i.VPI)(),
                        y =
                            ((n = (0, t._)(function () {
                                var e;
                                return (0, o.Jh)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return (n.trys.push([0, 3, , 4]), [4, fetch(g(p))]);
                                        case 1:
                                            return [4, n.sent().json()];
                                        case 2:
                                            return (
                                                (e = n.sent().sandbox_id),
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
                                            return (console.error(n.sent()), [3, 4]);
                                        case 4:
                                            return [2];
                                    }
                                });
                            })),
                            function () {
                                return n.apply(this, arguments);
                            });
                    return (0, r.jsxs)('div', {
                        className: j.root,
                        children: [
                            x ? (0, r.jsx)(i.Dxz, {order: 5, mb: 'xs', children: x}) : null,
                            (0, r.jsxs)(i.MIq, {
                                className: j.sandbox,
                                cols: 'vertical' === v ? 1 : 2,
                                spacing: 0,
                                children: [
                                    (0, r.jsx)(i.xuv, {
                                        component: h ? i.M5Y : 'div',
                                        className: j.preview,
                                        children: (0, r.jsx)(i.xrM.Autosize, {
                                            mah: 500,
                                            children: (0, r.jsx)('div', {className: j.previewWrapper, children: s}),
                                        }),
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: j.code,
                                        children: [
                                            (0, r.jsx)(c.p, {
                                                withLineNumbers: !0,
                                                language: 'tsx',
                                                colorScheme: 'dark',
                                                getPrismTheme: function (e, n) {
                                                    return 'light' === n ? l.Z : d.Z;
                                                },
                                                radius: 0,
                                                noCopy: !0,
                                                scrollAreaComponent: i.xrM.Autosize,
                                                styles: {scrollArea: {maxHeight: 500, minHeight: 100}},
                                                children: p,
                                            }),
                                            (0, r.jsxs)(i.Kqy, {
                                                className: j.actions,
                                                spacing: 'xs',
                                                children: [
                                                    (0, r.jsx)(i.ua7, {
                                                        label: b.copied ? 'Copied' : 'Copy',
                                                        position: 'left',
                                                        children: (0, r.jsx)(i.Aar, {
                                                            radius: 'sm',
                                                            onClick: function () {
                                                                return b.copy(p);
                                                            },
                                                            children: b.copied
                                                                ? (0, r.jsx)(a.CheckSize16Px, {height: 16})
                                                                : (0, r.jsx)(a.CopySize16Px, {height: 16}),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(i.ua7, {
                                                        label: 'Open in CodeSanbox',
                                                        position: 'left',
                                                        children: (0, r.jsx)(i.Aar, {
                                                            radius: 'sm',
                                                            onClick: y,
                                                            children: (0, r.jsx)(a.PlaySize16Px, {height: 16}),
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
        94686: function (e, n, s) {
            'use strict';
            (s.r(n),
                s.d(n, {
                    Spacing: function () {
                        return p;
                    },
                    default: function () {
                        return m;
                    },
                }));
            var t = s(7300),
                o = s(97458),
                r = s(52071),
                i = s(88966),
                a = s(39668),
                c = function () {
                    return (0, o.jsx)('div', {
                        className: 'highlight-padding highlight-margin',
                        children: (0, o.jsx)('div', {className: 'p2 m2', children: 'Content'}),
                    });
                },
                d = function (e) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, i._)(
                            (0, r._)(
                                {
                                    snippet:
                                        '// red is margin\n// blue is padding\n// highlight-padding and highlight-margin classes are only available on the Plasma website\n\nconst Demo = () => (\n    <div className="highlight-padding highlight-margin">\n        <div className="p2 m2">Content</div>\n    </div>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(c, {})},
                        ),
                    );
                },
                l = s(66809),
                p = function () {
                    return (0, o.jsxs)(l.X, {
                        id: 'Spacing',
                        demo: (0, o.jsx)(d, {center: !0}),
                        section: 'Foundations',
                        title: 'Spacing',
                        description:
                            'Spacing is the standard padding and margin size that one can adjust to customize the layout of an interface.',
                        withPropsTable: !1,
                        sourcePath: '/packages/style/scss/utility/white-space.scss',
                        children: [
                            (0, o.jsxs)('div', {
                                className: 'plasma-page-layout__section',
                                children: [
                                    (0, o.jsx)('h4', {className: 'h2 mb1', children: 'The spacing mechanism'}),
                                    (0, o.jsx)('p', {
                                        children:
                                            'Spacing can be applied to any element by setting one or more of the spacing classes.',
                                    }),
                                    (0, o.jsxs)('p', {
                                        children: [
                                            'Considering ',
                                            (0, o.jsx)('span', {className: 'code', children: 'N'}),
                                            ' is a level (see the available spacing levels in the section bellow), here are the 7 different targets supported by our spacing mechanism.',
                                        ],
                                    }),
                                    (0, o.jsxs)('ul', {
                                        className: 'list-disc mt2',
                                        children: [
                                            (0, o.jsxs)('li', {
                                                children: [
                                                    (0, o.jsx)('span', {className: 'code', children: 'pN'}),
                                                    ': uniform (all sides)',
                                                ],
                                            }),
                                            (0, o.jsxs)('li', {
                                                children: [
                                                    (0, o.jsx)('span', {className: 'code', children: 'pyN'}),
                                                    ': vertical (top and bottom sides)',
                                                ],
                                            }),
                                            (0, o.jsxs)('li', {
                                                children: [
                                                    (0, o.jsx)('span', {className: 'code', children: 'pxN'}),
                                                    ': horizontal (left and right sides)',
                                                ],
                                            }),
                                            (0, o.jsxs)('li', {
                                                children: [
                                                    (0, o.jsx)('span', {className: 'code', children: 'ptN'}),
                                                    ': top side',
                                                ],
                                            }),
                                            (0, o.jsxs)('li', {
                                                children: [
                                                    (0, o.jsx)('span', {className: 'code', children: 'prN'}),
                                                    ': right side',
                                                ],
                                            }),
                                            (0, o.jsxs)('li', {
                                                children: [
                                                    (0, o.jsx)('span', {className: 'code', children: 'pbN'}),
                                                    ': bottom side',
                                                ],
                                            }),
                                            (0, o.jsxs)('li', {
                                                children: [
                                                    (0, o.jsx)('span', {className: 'code', children: 'plN'}),
                                                    ': left side',
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, o.jsxs)('div', {
                                className: 'plasma-page-layout__section',
                                children: [
                                    (0, o.jsx)('h4', {className: 'h2 mb1', children: 'The spacing levels'}),
                                    (0, o.jsx)('p', {
                                        children: 'With each level, the size of the spacing increases proportionally.',
                                    }),
                                    (0, o.jsxs)('p', {
                                        children: [
                                            'Only padding is showcased in the section below for the sake of simplicity, but the exact same classes exist for the margin as well. Just replace the ',
                                            (0, o.jsx)('span', {className: 'code', children: 'p'}),
                                            ' by a',
                                            ' ',
                                            (0, o.jsx)('span', {className: 'code', children: 'm'}),
                                            ' to apply a spacing to the margin.',
                                        ],
                                    }),
                                    (0, t._)([, , , , ,]).map(function (e, n) {
                                        var s = n + 1;
                                        return (0, o.jsxs)(
                                            'div',
                                            {
                                                className: 'mt3',
                                                children: [
                                                    (0, o.jsxs)('h6', {
                                                        className: 'h6-subdued mb1',
                                                        children: ['Level ', s],
                                                    }),
                                                    (0, o.jsxs)('div', {
                                                        className: 'highlight-padding spacing-grid',
                                                        children: [
                                                            (0, o.jsxs)('div', {
                                                                className: 'p'.concat(s, ' spacing-viewer'),
                                                                children: ['.p', s],
                                                            }),
                                                            (0, o.jsxs)('div', {
                                                                className: 'py'.concat(s, ' spacing-viewer'),
                                                                children: ['.py', s],
                                                            }),
                                                            (0, o.jsxs)('div', {
                                                                className: 'px'.concat(s, ' spacing-viewer'),
                                                                children: ['.px', s],
                                                            }),
                                                            (0, o.jsxs)('div', {
                                                                className: 'pt'.concat(s, ' spacing-viewer'),
                                                                children: ['.pt', s],
                                                            }),
                                                            (0, o.jsxs)('div', {
                                                                className: 'pr'.concat(s, ' spacing-viewer'),
                                                                children: ['.pr', s],
                                                            }),
                                                            (0, o.jsxs)('div', {
                                                                className: 'pb'.concat(s, ' spacing-viewer'),
                                                                children: ['.pb', s],
                                                            }),
                                                            (0, o.jsxs)('div', {
                                                                className: 'pl'.concat(s, ' spacing-viewer'),
                                                                children: ['.pl', s],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            },
                                            n,
                                        );
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                m = p;
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 49774, 92888, 40179], function () {
            return e((e.s = 5940));
        }),
            (_N_E = e.O()));
    },
]);
