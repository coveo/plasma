(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [31821],
    {
        60594: function (e, o, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/ChildForm',
                function () {
                    return n(9842);
                },
            ]);
        },
        39668: function (e, o, n) {
            'use strict';
            n.d(o, {
                Z: function () {
                    return b;
                },
            });
            var r = n(80762),
                t = n(43112),
                i = n(97458),
                s = n(15084),
                a = n(4778),
                c = n(21876),
                d = n(85319),
                m = n(25545),
                l = n(52071),
                p = n(96846),
                u = JSON.parse(
                    '{"HO":{"@braintree/sanitize-url":"6.0.4","@coveo/atomic-react":"2.5.7","@coveord/plasma-components-props-analyzer":"workspace:*","@coveord/plasma-mantine":"workspace:*","@coveord/plasma-react":"workspace:*","@coveord/plasma-react-icons":"workspace:*","@coveord/plasma-style":"workspace:*","@coveord/plasma-tokens":"workspace:*","@emotion/react":"11.11.1","@emotion/server":"11.11.0","@faker-js/faker":"8.0.2","@mantine/carousel":"6.0.19","@mantine/core":"6.0.19","@mantine/dates":"6.0.19","@mantine/form":"6.0.19","@mantine/hooks":"6.0.19","@mantine/modals":"6.0.19","@mantine/next":"6.0.19","@mantine/notifications":"6.0.19","@mantine/prism":"6.0.19","@swc/helpers":"0.5.1","@tanstack/match-sorter-utils":"8.8.4","clsx":"2.0.0","codesandbox-import-utils":"2.2.3","dayjs":"1.11.9","embla-carousel-react":"7.1.0","flagg":"1.1.2","lodash.kebabcase":"4.1.1","lorem-ipsum":"2.0.8","moment":"2.29.4","next":"13.4.19","next-global-css":"1.3.1","next-images":"1.8.5","next-sitemap":"4.2.2","rc-slider":"9.7.5","react":"18.2.0","react-diff-view":"3.0.3","react-dom":"18.2.0","react-hook-form":"7.45.4","react-markdown":"8.0.7","react-redux":"8.1.2","redux":"4.2.1","redux-devtools-extension":"2.13.9","redux-promise-middleware":"6.1.3","redux-thunk":"2.4.2","remark-gfm":"3.0.1","reselect":"4.1.8","underscore":"1.13.6"},"v6":{"gg":"18.2.20","Qe":"18.2.7","Up":"2.6.2","NN":"5.1.6"}}',
                ),
                h = function (e, o) {
                    return e.indexOf("from '".concat(o, "';")) > -1;
                },
                x = function (e) {
                    var o,
                        n = {react: u.HO.react, 'react-dom': u.HO['react-dom']};
                    return (
                        null === (o = e.match(RegExp("(?<=from ')[^']*", 'gm'))) ||
                            void 0 === o ||
                            o.map(function (e) {
                                n[e] = u.HO[e];
                            }),
                        n
                    );
                },
                f = function (e, o) {
                    if (
                        (h(e, '@coveord/plasma-react-icons') && (o['@coveord/plasma-react-icons'] = 'latest'),
                        h(e, '@coveord/plasma-mantine'))
                    ) {
                        var n;
                        ((o['@coveord/plasma-mantine'] = 'latest'),
                            (o['@emotion/react'] = u.HO['@emotion/react']),
                            (o['embla-carousel-react'] = u.HO['embla-carousel-react']),
                            null === (n = Object.keys(u.HO)) ||
                                void 0 === n ||
                                n.map(function (e) {
                                    e.match(/^(@mantine).*/) && (o[e] = u.HO[e]);
                                }));
                    }
                    return (
                        h(e, '@coveord/plasma-react') &&
                            ((o['@coveord/plasma-react'] = 'latest'),
                            (o['react-redux'] = u.HO['react-redux']),
                            (o.redux = u.HO.redux),
                            (o['redux-devtools-extension'] = u.HO['redux-devtools-extension']),
                            (o['redux-promise-middleware'] = u.HO['redux-promise-middleware']),
                            (o['redux-thunk'] = u.HO['redux-thunk']),
                            (o.jquery = 'latest')),
                        o
                    );
                },
                v = function (e) {
                    var o = x(e),
                        n = (0, p.Z)({
                            template: 'node',
                            files: (0, l._)(
                                {
                                    'package.json': {
                                        content: {
                                            scripts: {dev: 'vite', build: 'tsc && vite build', serve: 'vite preview'},
                                            dependencies: f(e, o),
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
                                        content: h(e, '@coveord/plasma-mantine')
                                            ? "\nimport {createRoot} from 'react-dom/client';\nimport {Container, Plasmantine, Notifications} from '@coveord/plasma-mantine';\nimport Demo from './Demo';\nimport './font.css';\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(\n    <Plasmantine>\n        <Notifications position=\"top-center\" />\n        <Container p=\"md\">\n            <Demo />\n        </Container>\n    </Plasmantine>\n);\n        "
                                            : h(e, '@coveord/plasma-react')
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
                                h(e, '@coveord/plasma-react')
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
                g = (0, s.kcS)(function (e, o) {
                    var n = o.grow,
                        r = o.noPadding;
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
                        previewWrapper: {padding: r ? 0 : e.spacing.md, height: n ? 500 : '100%'},
                        code: {minHeight: 100, position: 'relative', backgroundColor: '#1E1E1E'},
                    };
                }),
                b = function (e) {
                    var o,
                        n = e.children,
                        l = e.snippet,
                        p = e.center,
                        u = void 0 !== p && p,
                        h = e.grow,
                        x = e.title,
                        f = e.layout,
                        b = g({center: u, grow: void 0 !== h && h, noPadding: e.noPadding}).classes,
                        y = (0, s.VPI)(),
                        k =
                            ((o = (0, r._)(function () {
                                var e;
                                return (0, t.Jh)(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return (o.trys.push([0, 3, , 4]), [4, fetch(v(l))]);
                                        case 1:
                                            return [4, o.sent().json()];
                                        case 2:
                                            return (
                                                (e = o.sent().sandbox_id),
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
                                            return (console.error(o.sent()), [3, 4]);
                                        case 4:
                                            return [2];
                                    }
                                });
                            })),
                            function () {
                                return o.apply(this, arguments);
                            });
                    return (0, i.jsxs)('div', {
                        className: b.root,
                        children: [
                            x ? (0, i.jsx)(s.Dxz, {order: 5, mb: 'xs', children: x}) : null,
                            (0, i.jsxs)(s.MIq, {
                                className: b.sandbox,
                                cols: 'vertical' === f ? 1 : 2,
                                spacing: 0,
                                children: [
                                    (0, i.jsx)(s.xuv, {
                                        component: u ? s.M5Y : 'div',
                                        className: b.preview,
                                        children: (0, i.jsx)(s.xrM.Autosize, {
                                            mah: 500,
                                            children: (0, i.jsx)('div', {className: b.previewWrapper, children: n}),
                                        }),
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: b.code,
                                        children: [
                                            (0, i.jsx)(c.p, {
                                                withLineNumbers: !0,
                                                language: 'tsx',
                                                colorScheme: 'dark',
                                                getPrismTheme: function (e, o) {
                                                    return 'light' === o ? m.Z : d.Z;
                                                },
                                                radius: 0,
                                                noCopy: !0,
                                                scrollAreaComponent: s.xrM.Autosize,
                                                styles: {scrollArea: {maxHeight: 500, minHeight: 100}},
                                                children: l,
                                            }),
                                            (0, i.jsxs)(s.Kqy, {
                                                className: b.actions,
                                                spacing: 'xs',
                                                children: [
                                                    (0, i.jsx)(s.ua7, {
                                                        label: y.copied ? 'Copied' : 'Copy',
                                                        position: 'left',
                                                        children: (0, i.jsx)(s.Aar, {
                                                            radius: 'sm',
                                                            onClick: function () {
                                                                return y.copy(l);
                                                            },
                                                            children: y.copied
                                                                ? (0, i.jsx)(a.CheckSize16Px, {height: 16})
                                                                : (0, i.jsx)(a.CopySize16Px, {height: 16}),
                                                        }),
                                                    }),
                                                    (0, i.jsx)(s.ua7, {
                                                        label: 'Open in CodeSanbox',
                                                        position: 'left',
                                                        children: (0, i.jsx)(s.Aar, {
                                                            radius: 'sm',
                                                            onClick: k,
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
        9842: function (e, o, n) {
            'use strict';
            (n.r(o),
                n.d(o, {
                    default: function () {
                        return u;
                    },
                }));
            var r = n(97458),
                t = n(52071),
                i = n(88966),
                s = n(39668),
                a = n(94807),
                c = function () {
                    return (0, r.jsxs)(r.Fragment, {children: ['Parent', (0, r.jsx)(a.S0G, {children: 'Child'})]});
                },
                d = function (e) {
                    return (0, r.jsx)(
                        s.Z,
                        (0, i._)(
                            (0, t._)(
                                {
                                    snippet:
                                        "import {ChildForm} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <>\n        Parent\n        <ChildForm>Child</ChildForm>\n    </>\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(c, {})},
                        ),
                    );
                },
                m = function () {
                    return (0, r.jsxs)('div', {
                        className: 'inline-flex center-align',
                        children: ['Parent', (0, r.jsx)(a.S0G, {className: 'vertical', children: 'Child'})],
                    });
                },
                l = function (e) {
                    return (0, r.jsx)(
                        s.Z,
                        (0, i._)(
                            (0, t._)(
                                {
                                    snippet:
                                        'import {ChildForm} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <div className="inline-flex center-align">\n        Parent\n        <ChildForm className="vertical">Child</ChildForm>\n    </div>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(m, {})},
                        ),
                    );
                },
                p = n(66809),
                u = function () {
                    return (0, r.jsx)(p.X, {
                        id: 'ChildForm',
                        title: 'Child Form',
                        section: 'Layout',
                        description: 'A child form associates a subset of options or content to its parent option.',
                        sourcePath: '/packages/react/src/components/childForm/ChildForm.tsx',
                        demo: (0, r.jsx)(d, {}),
                        examples: {vertical: (0, r.jsx)(l, {title: 'Vertical'})},
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 49774, 92888, 40179], function () {
            return e((e.s = 60594));
        }),
            (_N_E = e.O()));
    },
]);
