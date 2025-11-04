(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [53972],
    {
        98542: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/foundations/Links',
                function () {
                    return t(81932);
                },
            ]);
        },
        39668: function (e, n, t) {
            'use strict';
            t.d(n, {
                Z: function () {
                    return k;
                },
            });
            var o = t(80762),
                r = t(43112),
                i = t(97458),
                s = t(15084),
                a = t(4778),
                c = t(21876),
                d = t(85319),
                l = t(25545),
                m = t(52071),
                p = t(96846),
                u = JSON.parse(
                    '{"HO":{"@braintree/sanitize-url":"6.0.4","@coveo/atomic-react":"2.5.7","@coveord/plasma-components-props-analyzer":"workspace:*","@coveord/plasma-mantine":"workspace:*","@coveord/plasma-react":"workspace:*","@coveord/plasma-react-icons":"workspace:*","@coveord/plasma-style":"workspace:*","@coveord/plasma-tokens":"workspace:*","@emotion/react":"11.11.1","@emotion/server":"11.11.0","@faker-js/faker":"8.0.2","@mantine/carousel":"6.0.19","@mantine/core":"6.0.19","@mantine/dates":"6.0.19","@mantine/form":"6.0.19","@mantine/hooks":"6.0.19","@mantine/modals":"6.0.19","@mantine/next":"6.0.19","@mantine/notifications":"6.0.19","@mantine/prism":"6.0.19","@swc/helpers":"0.5.1","@tanstack/match-sorter-utils":"8.8.4","clsx":"2.0.0","codesandbox-import-utils":"2.2.3","dayjs":"1.11.9","embla-carousel-react":"7.1.0","flagg":"1.1.2","lodash.kebabcase":"4.1.1","lorem-ipsum":"2.0.8","moment":"2.29.4","next":"13.4.19","next-global-css":"1.3.1","next-images":"1.8.5","next-sitemap":"4.2.2","rc-slider":"9.7.5","react":"18.2.0","react-diff-view":"3.0.3","react-dom":"18.2.0","react-hook-form":"7.45.4","react-markdown":"8.0.7","react-redux":"8.1.2","redux":"4.2.1","redux-devtools-extension":"2.13.9","redux-promise-middleware":"6.1.3","redux-thunk":"2.4.2","remark-gfm":"3.0.1","reselect":"4.1.8","underscore":"1.13.6"},"v6":{"gg":"18.2.20","Qe":"18.2.7","Up":"2.6.2","NN":"5.1.6"}}',
                ),
                x = function (e, n) {
                    return e.indexOf("from '".concat(n, "';")) > -1;
                },
                h = function (e) {
                    var n,
                        t = {react: u.HO.react, 'react-dom': u.HO['react-dom']};
                    return (
                        null === (n = e.match(RegExp("(?<=from ')[^']*", 'gm'))) ||
                            void 0 === n ||
                            n.map(function (e) {
                                t[e] = u.HO[e];
                            }),
                        t
                    );
                },
                f = function (e, n) {
                    if (
                        (x(e, '@coveord/plasma-react-icons') && (n['@coveord/plasma-react-icons'] = 'latest'),
                        x(e, '@coveord/plasma-mantine'))
                    ) {
                        var t;
                        ((n['@coveord/plasma-mantine'] = 'latest'),
                            (n['@emotion/react'] = u.HO['@emotion/react']),
                            (n['embla-carousel-react'] = u.HO['embla-carousel-react']),
                            null === (t = Object.keys(u.HO)) ||
                                void 0 === t ||
                                t.map(function (e) {
                                    e.match(/^(@mantine).*/) && (n[e] = u.HO[e]);
                                }));
                    }
                    return (
                        x(e, '@coveord/plasma-react') &&
                            ((n['@coveord/plasma-react'] = 'latest'),
                            (n['react-redux'] = u.HO['react-redux']),
                            (n.redux = u.HO.redux),
                            (n['redux-devtools-extension'] = u.HO['redux-devtools-extension']),
                            (n['redux-promise-middleware'] = u.HO['redux-promise-middleware']),
                            (n['redux-thunk'] = u.HO['redux-thunk']),
                            (n.jquery = 'latest')),
                        n
                    );
                },
                v = function (e) {
                    var n = h(e),
                        t = (0, p.Z)({
                            template: 'node',
                            files: (0, m._)(
                                {
                                    'package.json': {
                                        content: {
                                            scripts: {dev: 'vite', build: 'tsc && vite build', serve: 'vite preview'},
                                            dependencies: f(e, n),
                                            devDependencies: {
                                                vite: '^4.2.1',
                                                '@vitejs/plugin-react': '^3.1.0',
                                                tslib: u.v6.Up,
                                                typescript: u.v6.NN,
                                                '@types/react': u.v6.gg,
                                                '@types/react-dom': u.v6.Qe,
                                            },
                                        },
                                        isBinary: !1,
                                    },
                                    'src/index.tsx': {
                                        content: x(e, '@coveord/plasma-mantine')
                                            ? "\nimport {createRoot} from 'react-dom/client';\nimport {Container, Plasmantine, Notifications} from '@coveord/plasma-mantine';\nimport Demo from './Demo';\nimport './font.css';\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(\n    <Plasmantine>\n        <Notifications position=\"top-center\" />\n        <Container p=\"md\">\n            <Demo />\n        </Container>\n    </Plasmantine>\n);\n        "
                                            : x(e, '@coveord/plasma-react')
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
                                x(e, '@coveord/plasma-react')
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
                    return 'https://codesandbox.io/api/v1/sandboxes/define?parameters='.concat(t, '&json=1');
                },
                g = (0, s.kcS)(function (e, n) {
                    var t = n.grow,
                        o = n.noPadding;
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
                        previewWrapper: {padding: o ? 0 : e.spacing.md, height: t ? 500 : '100%'},
                        code: {minHeight: 100, position: 'relative', backgroundColor: '#1E1E1E'},
                    };
                }),
                k = function (e) {
                    var n,
                        t = e.children,
                        m = e.snippet,
                        p = e.center,
                        u = void 0 !== p && p,
                        x = e.grow,
                        h = e.title,
                        f = e.layout,
                        k = g({center: u, grow: void 0 !== x && x, noPadding: e.noPadding}).classes,
                        b = (0, s.VPI)(),
                        j =
                            ((n = (0, o._)(function () {
                                var e;
                                return (0, r.Jh)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return (n.trys.push([0, 3, , 4]), [4, fetch(v(m))]);
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
                    return (0, i.jsxs)('div', {
                        className: k.root,
                        children: [
                            h ? (0, i.jsx)(s.Dxz, {order: 5, mb: 'xs', children: h}) : null,
                            (0, i.jsxs)(s.MIq, {
                                className: k.sandbox,
                                cols: 'vertical' === f ? 1 : 2,
                                spacing: 0,
                                children: [
                                    (0, i.jsx)(s.xuv, {
                                        component: u ? s.M5Y : 'div',
                                        className: k.preview,
                                        children: (0, i.jsx)(s.xrM.Autosize, {
                                            mah: 500,
                                            children: (0, i.jsx)('div', {className: k.previewWrapper, children: t}),
                                        }),
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: k.code,
                                        children: [
                                            (0, i.jsx)(c.p, {
                                                withLineNumbers: !0,
                                                language: 'tsx',
                                                colorScheme: 'dark',
                                                getPrismTheme: function (e, n) {
                                                    return 'light' === n ? l.Z : d.Z;
                                                },
                                                radius: 0,
                                                noCopy: !0,
                                                scrollAreaComponent: s.xrM.Autosize,
                                                styles: {scrollArea: {maxHeight: 500, minHeight: 100}},
                                                children: m,
                                            }),
                                            (0, i.jsxs)(s.Kqy, {
                                                className: k.actions,
                                                spacing: 'xs',
                                                children: [
                                                    (0, i.jsx)(s.ua7, {
                                                        label: b.copied ? 'Copied' : 'Copy',
                                                        position: 'left',
                                                        children: (0, i.jsx)(s.Aar, {
                                                            radius: 'sm',
                                                            onClick: function () {
                                                                return b.copy(m);
                                                            },
                                                            children: b.copied
                                                                ? (0, i.jsx)(a.CheckSize16Px, {height: 16})
                                                                : (0, i.jsx)(a.CopySize16Px, {height: 16}),
                                                        }),
                                                    }),
                                                    (0, i.jsx)(s.ua7, {
                                                        label: 'Open in CodeSanbox',
                                                        position: 'left',
                                                        children: (0, i.jsx)(s.Aar, {
                                                            radius: 'sm',
                                                            onClick: j,
                                                            children: (0, i.jsx)(a.PlaySize16Px, {height: 16}),
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
        81932: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    Links: function () {
                        return h;
                    },
                    default: function () {
                        return f;
                    },
                }));
            var o = t(97458),
                r = t(52071),
                i = t(88966),
                s = t(39668),
                a = t(4778),
                c = function () {
                    return (0, o.jsxs)('button', {
                        className: 'link',
                        onClick: function () {
                            return alert('The button was clicked');
                        },
                        children: ['Link ', (0, o.jsx)(a.TargetSize16Px, {height: 16})],
                    });
                },
                d = function (e) {
                    return (0, o.jsx)(
                        s.Z,
                        (0, i._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {TargetSize16Px} from '@coveord/plasma-react-icons';\n\nconst Demo = () => (\n    <button className=\"link\" onClick={() => alert('The button was clicked')}>\n        Link <TargetSize16Px height={16} />\n    </button>\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(c, {})},
                        ),
                    );
                },
                l = function () {
                    return (0, o.jsxs)('a', {
                        className: 'link',
                        href: '/foundations/Links',
                        children: ['Link ', (0, o.jsx)(a.TargetSize16Px, {height: 16})],
                    });
                },
                m = function (e) {
                    return (0, o.jsx)(
                        s.Z,
                        (0, i._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {TargetSize16Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <a className="link" href="/foundations/Links">\n        Link <TargetSize16Px height={16} />\n    </a>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(l, {})},
                        ),
                    );
                },
                p = function () {
                    return (0, o.jsxs)('a', {
                        className: 'link disabled',
                        href: '/foundations/Links',
                        children: ['Link ', (0, o.jsx)(a.TargetSize16Px, {height: 16})],
                    });
                },
                u = function (e) {
                    return (0, o.jsx)(
                        s.Z,
                        (0, i._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {TargetSize16Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <a className="link disabled" href="/foundations/Links">\n        Link <TargetSize16Px height={16} />\n    </a>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(p, {})},
                        ),
                    );
                },
                x = t(66809),
                h = function () {
                    return (0, o.jsx)(x.X, {
                        id: 'Links',
                        demo: (0, o.jsx)(m, {center: !0}),
                        section: 'Foundations',
                        title: 'Links',
                        thumbnail: 'links',
                        withPropsTable: !1,
                        description:
                            'A link is a navigational element that guides users to external resources or other sections of the product.',
                        sourcePath: '/packages/style/scss/elements/links.scss',
                        examples: {
                            disabledLink: (0, o.jsx)(u, {center: !0, title: 'Disabled'}),
                            buttonLink: (0, o.jsx)(d, {center: !0, title: 'A button disguised as a link'}),
                        },
                    });
                },
                f = h;
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 49774, 92888, 40179], function () {
            return e((e.s = 98542));
        }),
            (_N_E = e.O()));
    },
]);
