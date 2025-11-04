(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [35339],
    {
        53930: function (e, n, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/Banner',
                function () {
                    return o(32260);
                },
            ]);
        },
        39668: function (e, n, o) {
            'use strict';
            o.d(n, {
                Z: function () {
                    return b;
                },
            });
            var r = o(80762),
                t = o(43112),
                a = o(97458),
                s = o(15084),
                i = o(4778),
                c = o(21876),
                d = o(85319),
                m = o(25545),
                l = o(52071),
                p = o(96846),
                u = JSON.parse(
                    '{"HO":{"@braintree/sanitize-url":"6.0.4","@coveo/atomic-react":"2.5.7","@coveord/plasma-components-props-analyzer":"workspace:*","@coveord/plasma-mantine":"workspace:*","@coveord/plasma-react":"workspace:*","@coveord/plasma-react-icons":"workspace:*","@coveord/plasma-style":"workspace:*","@coveord/plasma-tokens":"workspace:*","@emotion/react":"11.11.1","@emotion/server":"11.11.0","@faker-js/faker":"8.0.2","@mantine/carousel":"6.0.19","@mantine/core":"6.0.19","@mantine/dates":"6.0.19","@mantine/form":"6.0.19","@mantine/hooks":"6.0.19","@mantine/modals":"6.0.19","@mantine/next":"6.0.19","@mantine/notifications":"6.0.19","@mantine/prism":"6.0.19","@swc/helpers":"0.5.1","@tanstack/match-sorter-utils":"8.8.4","clsx":"2.0.0","codesandbox-import-utils":"2.2.3","dayjs":"1.11.9","embla-carousel-react":"7.1.0","flagg":"1.1.2","lodash.kebabcase":"4.1.1","lorem-ipsum":"2.0.8","moment":"2.29.4","next":"13.4.19","next-global-css":"1.3.1","next-images":"1.8.5","next-sitemap":"4.2.2","rc-slider":"9.7.5","react":"18.2.0","react-diff-view":"3.0.3","react-dom":"18.2.0","react-hook-form":"7.45.4","react-markdown":"8.0.7","react-redux":"8.1.2","redux":"4.2.1","redux-devtools-extension":"2.13.9","redux-promise-middleware":"6.1.3","redux-thunk":"2.4.2","remark-gfm":"3.0.1","reselect":"4.1.8","underscore":"1.13.6"},"v6":{"gg":"18.2.20","Qe":"18.2.7","Up":"2.6.2","NN":"5.1.6"}}',
                ),
                x = function (e, n) {
                    return e.indexOf("from '".concat(n, "';")) > -1;
                },
                f = function (e) {
                    var n,
                        o = {react: u.HO.react, 'react-dom': u.HO['react-dom']};
                    return (
                        null === (n = e.match(RegExp("(?<=from ')[^']*", 'gm'))) ||
                            void 0 === n ||
                            n.map(function (e) {
                                o[e] = u.HO[e];
                            }),
                        o
                    );
                },
                v = function (e, n) {
                    if (
                        (x(e, '@coveord/plasma-react-icons') && (n['@coveord/plasma-react-icons'] = 'latest'),
                        x(e, '@coveord/plasma-mantine'))
                    ) {
                        var o;
                        ((n['@coveord/plasma-mantine'] = 'latest'),
                            (n['@emotion/react'] = u.HO['@emotion/react']),
                            (n['embla-carousel-react'] = u.HO['embla-carousel-react']),
                            null === (o = Object.keys(u.HO)) ||
                                void 0 === o ||
                                o.map(function (e) {
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
                h = function (e) {
                    var n = f(e),
                        o = (0, p.Z)({
                            template: 'node',
                            files: (0, l._)(
                                {
                                    'package.json': {
                                        content: {
                                            scripts: {dev: 'vite', build: 'tsc && vite build', serve: 'vite preview'},
                                            dependencies: v(e, n),
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
                    return 'https://codesandbox.io/api/v1/sandboxes/define?parameters='.concat(o, '&json=1');
                },
                g = (0, s.kcS)(function (e, n) {
                    var o = n.grow,
                        r = n.noPadding;
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
                        previewWrapper: {padding: r ? 0 : e.spacing.md, height: o ? 500 : '100%'},
                        code: {minHeight: 100, position: 'relative', backgroundColor: '#1E1E1E'},
                    };
                }),
                b = function (e) {
                    var n,
                        o = e.children,
                        l = e.snippet,
                        p = e.center,
                        u = void 0 !== p && p,
                        x = e.grow,
                        f = e.title,
                        v = e.layout,
                        b = g({center: u, grow: void 0 !== x && x, noPadding: e.noPadding}).classes,
                        y = (0, s.VPI)(),
                        k =
                            ((n = (0, r._)(function () {
                                var e;
                                return (0, t.Jh)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return (n.trys.push([0, 3, , 4]), [4, fetch(h(l))]);
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
                    return (0, a.jsxs)('div', {
                        className: b.root,
                        children: [
                            f ? (0, a.jsx)(s.Dxz, {order: 5, mb: 'xs', children: f}) : null,
                            (0, a.jsxs)(s.MIq, {
                                className: b.sandbox,
                                cols: 'vertical' === v ? 1 : 2,
                                spacing: 0,
                                children: [
                                    (0, a.jsx)(s.xuv, {
                                        component: u ? s.M5Y : 'div',
                                        className: b.preview,
                                        children: (0, a.jsx)(s.xrM.Autosize, {
                                            mah: 500,
                                            children: (0, a.jsx)('div', {className: b.previewWrapper, children: o}),
                                        }),
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: b.code,
                                        children: [
                                            (0, a.jsx)(c.p, {
                                                withLineNumbers: !0,
                                                language: 'tsx',
                                                colorScheme: 'dark',
                                                getPrismTheme: function (e, n) {
                                                    return 'light' === n ? m.Z : d.Z;
                                                },
                                                radius: 0,
                                                noCopy: !0,
                                                scrollAreaComponent: s.xrM.Autosize,
                                                styles: {scrollArea: {maxHeight: 500, minHeight: 100}},
                                                children: l,
                                            }),
                                            (0, a.jsxs)(s.Kqy, {
                                                className: b.actions,
                                                spacing: 'xs',
                                                children: [
                                                    (0, a.jsx)(s.ua7, {
                                                        label: y.copied ? 'Copied' : 'Copy',
                                                        position: 'left',
                                                        children: (0, a.jsx)(s.Aar, {
                                                            radius: 'sm',
                                                            onClick: function () {
                                                                return y.copy(l);
                                                            },
                                                            children: y.copied
                                                                ? (0, a.jsx)(i.CheckSize16Px, {height: 16})
                                                                : (0, a.jsx)(i.CopySize16Px, {height: 16}),
                                                        }),
                                                    }),
                                                    (0, a.jsx)(s.ua7, {
                                                        label: 'Open in CodeSanbox',
                                                        position: 'left',
                                                        children: (0, a.jsx)(s.Aar, {
                                                            radius: 'sm',
                                                            onClick: k,
                                                            children: (0, a.jsx)(i.PlaySize16Px, {height: 16}),
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
        32260: function (e, n, o) {
            'use strict';
            (o.r(n),
                o.d(n, {
                    BannerDemos: function () {
                        return l;
                    },
                    default: function () {
                        return p;
                    },
                }));
            var r = o(97458),
                t = o(52071),
                a = o(88966),
                s = o(39668),
                i = o(94807),
                c = function () {
                    return (0, r.jsx)(i.UPP, {});
                },
                d = function (e) {
                    return (0, r.jsx)(
                        s.Z,
                        (0, a._)(
                            (0, t._)(
                                {
                                    snippet:
                                        "import {BannerContainer} from '@coveord/plasma-react';\n\nconst Demo = () => <BannerContainer />;\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(c, {})},
                        ),
                    );
                },
                m = o(66809),
                l = function () {
                    return (0, r.jsx)(m.X, {
                        id: 'BannerContainer',
                        sourcePath: '/packages/react/src/components/banner/BannerContainer.tsx',
                        title: 'Banner',
                        withPropsTable: !1,
                        section: 'Layout',
                        thumbnail: 'placeholder',
                        demo: (0, r.jsx)(d, {}),
                    });
                },
                p = l;
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 49774, 92888, 40179], function () {
            return e((e.s = 53930));
        }),
            (_N_E = e.O()));
    },
]);
