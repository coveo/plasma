(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [56561],
    {
        10882: function (e, t, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/feedback/ColorDot',
                function () {
                    return o(32982);
                },
            ]);
        },
        39668: function (e, t, o) {
            'use strict';
            o.d(t, {
                Z: function () {
                    return v;
                },
            });
            var s = o(80762),
                a = o(43112),
                r = o(97458),
                n = o(15084),
                c = o(4778),
                i = o(21876),
                l = o(85319),
                m = o(25545),
                d = o(52071),
                p = o(96846),
                u = JSON.parse(
                    '{"HO":{"@braintree/sanitize-url":"6.0.4","@coveo/atomic-react":"2.5.7","@coveord/plasma-components-props-analyzer":"workspace:*","@coveord/plasma-mantine":"workspace:*","@coveord/plasma-react":"workspace:*","@coveord/plasma-react-icons":"workspace:*","@coveord/plasma-style":"workspace:*","@coveord/plasma-tokens":"workspace:*","@emotion/react":"11.11.1","@emotion/server":"11.11.0","@faker-js/faker":"8.0.2","@mantine/carousel":"6.0.19","@mantine/core":"6.0.19","@mantine/dates":"6.0.19","@mantine/form":"6.0.19","@mantine/hooks":"6.0.19","@mantine/modals":"6.0.19","@mantine/next":"6.0.19","@mantine/notifications":"6.0.19","@mantine/prism":"6.0.19","@swc/helpers":"0.5.1","@tanstack/match-sorter-utils":"8.8.4","clsx":"2.0.0","codesandbox-import-utils":"2.2.3","dayjs":"1.11.9","embla-carousel-react":"7.1.0","flagg":"1.1.2","lodash.kebabcase":"4.1.1","lorem-ipsum":"2.0.8","moment":"2.29.4","next":"13.4.19","next-global-css":"1.3.1","next-images":"1.8.5","next-sitemap":"4.2.2","rc-slider":"9.7.5","react":"18.2.0","react-diff-view":"3.0.3","react-dom":"18.2.0","react-hook-form":"7.45.4","react-markdown":"8.0.7","react-redux":"8.1.2","redux":"4.2.1","redux-devtools-extension":"2.13.9","redux-promise-middleware":"6.1.3","redux-thunk":"2.4.2","remark-gfm":"3.0.1","reselect":"4.1.8","underscore":"1.13.6"},"v6":{"gg":"18.2.20","Qe":"18.2.7","Up":"2.6.2","NN":"5.1.6"}}',
                ),
                x = function (e, t) {
                    return e.indexOf("from '".concat(t, "';")) > -1;
                },
                f = function (e) {
                    var t,
                        o = {react: u.HO.react, 'react-dom': u.HO['react-dom']};
                    return (
                        null === (t = e.match(RegExp("(?<=from ')[^']*", 'gm'))) ||
                            void 0 === t ||
                            t.map(function (e) {
                                o[e] = u.HO[e];
                            }),
                        o
                    );
                },
                g = function (e, t) {
                    if (
                        (x(e, '@coveord/plasma-react-icons') && (t['@coveord/plasma-react-icons'] = 'latest'),
                        x(e, '@coveord/plasma-mantine'))
                    ) {
                        var o;
                        ((t['@coveord/plasma-mantine'] = 'latest'),
                            (t['@emotion/react'] = u.HO['@emotion/react']),
                            (t['embla-carousel-react'] = u.HO['embla-carousel-react']),
                            null === (o = Object.keys(u.HO)) ||
                                void 0 === o ||
                                o.map(function (e) {
                                    e.match(/^(@mantine).*/) && (t[e] = u.HO[e]);
                                }));
                    }
                    return (
                        x(e, '@coveord/plasma-react') &&
                            ((t['@coveord/plasma-react'] = 'latest'),
                            (t['react-redux'] = u.HO['react-redux']),
                            (t.redux = u.HO.redux),
                            (t['redux-devtools-extension'] = u.HO['redux-devtools-extension']),
                            (t['redux-promise-middleware'] = u.HO['redux-promise-middleware']),
                            (t['redux-thunk'] = u.HO['redux-thunk']),
                            (t.jquery = 'latest')),
                        t
                    );
                },
                h = function (e) {
                    var t = f(e),
                        o = (0, p.Z)({
                            template: 'node',
                            files: (0, d._)(
                                {
                                    'package.json': {
                                        content: {
                                            scripts: {dev: 'vite', build: 'tsc && vite build', serve: 'vite preview'},
                                            dependencies: g(e, t),
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
                N = (0, n.kcS)(function (e, t) {
                    var o = t.grow,
                        s = t.noPadding;
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
                        previewWrapper: {padding: s ? 0 : e.spacing.md, height: o ? 500 : '100%'},
                        code: {minHeight: 100, position: 'relative', backgroundColor: '#1E1E1E'},
                    };
                }),
                v = function (e) {
                    var t,
                        o = e.children,
                        d = e.snippet,
                        p = e.center,
                        u = void 0 !== p && p,
                        x = e.grow,
                        f = e.title,
                        g = e.layout,
                        v = N({center: u, grow: void 0 !== x && x, noPadding: e.noPadding}).classes,
                        j = (0, n.VPI)(),
                        b =
                            ((t = (0, s._)(function () {
                                var e;
                                return (0, a.Jh)(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return (t.trys.push([0, 3, , 4]), [4, fetch(h(d))]);
                                        case 1:
                                            return [4, t.sent().json()];
                                        case 2:
                                            return (
                                                (e = t.sent().sandbox_id),
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
                                            return (console.error(t.sent()), [3, 4]);
                                        case 4:
                                            return [2];
                                    }
                                });
                            })),
                            function () {
                                return t.apply(this, arguments);
                            });
                    return (0, r.jsxs)('div', {
                        className: v.root,
                        children: [
                            f ? (0, r.jsx)(n.Dxz, {order: 5, mb: 'xs', children: f}) : null,
                            (0, r.jsxs)(n.MIq, {
                                className: v.sandbox,
                                cols: 'vertical' === g ? 1 : 2,
                                spacing: 0,
                                children: [
                                    (0, r.jsx)(n.xuv, {
                                        component: u ? n.M5Y : 'div',
                                        className: v.preview,
                                        children: (0, r.jsx)(n.xrM.Autosize, {
                                            mah: 500,
                                            children: (0, r.jsx)('div', {className: v.previewWrapper, children: o}),
                                        }),
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: v.code,
                                        children: [
                                            (0, r.jsx)(i.p, {
                                                withLineNumbers: !0,
                                                language: 'tsx',
                                                colorScheme: 'dark',
                                                getPrismTheme: function (e, t) {
                                                    return 'light' === t ? m.Z : l.Z;
                                                },
                                                radius: 0,
                                                noCopy: !0,
                                                scrollAreaComponent: n.xrM.Autosize,
                                                styles: {scrollArea: {maxHeight: 500, minHeight: 100}},
                                                children: d,
                                            }),
                                            (0, r.jsxs)(n.Kqy, {
                                                className: v.actions,
                                                spacing: 'xs',
                                                children: [
                                                    (0, r.jsx)(n.ua7, {
                                                        label: j.copied ? 'Copied' : 'Copy',
                                                        position: 'left',
                                                        children: (0, r.jsx)(n.Aar, {
                                                            radius: 'sm',
                                                            onClick: function () {
                                                                return j.copy(d);
                                                            },
                                                            children: j.copied
                                                                ? (0, r.jsx)(c.CheckSize16Px, {height: 16})
                                                                : (0, r.jsx)(c.CopySize16Px, {height: 16}),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(n.ua7, {
                                                        label: 'Open in CodeSanbox',
                                                        position: 'left',
                                                        children: (0, r.jsx)(n.Aar, {
                                                            radius: 'sm',
                                                            onClick: b,
                                                            children: (0, r.jsx)(c.PlaySize16Px, {height: 16}),
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
        32982: function (e, t, o) {
            'use strict';
            (o.r(t),
                o.d(t, {
                    ColorDotsDemos: function () {
                        return x;
                    },
                    default: function () {
                        return f;
                    },
                }));
            var s = o(97458),
                a = o(52071),
                r = o(88966),
                n = o(39668),
                c = function () {
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)('span', {
                            className: 'inline-flex label',
                            children: [(0, s.jsx)('i', {className: 'color-dot mr1'}), 'Success'],
                        }),
                    });
                },
                i = function (e) {
                    return (0, s.jsx)(
                        n.Z,
                        (0, r._)(
                            (0, a._)(
                                {
                                    snippet:
                                        'const Demo = () => (\n    <>\n        <span className="inline-flex label">\n            <i className="color-dot mr1" />\n            Success\n        </span>\n    </>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, s.jsx)(c, {})},
                        ),
                    );
                },
                l = function () {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)('i', {className: 'color-dot state-executing mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-executing state-critical mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-executing state-major mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-executing state-minor mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-executing state-warning mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-executing state-info mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-executing state-disabled mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-executing state-waiting mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-executing state-new mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-executing state-maintenance'}),
                        ],
                    });
                },
                m = function (e) {
                    return (0, s.jsx)(
                        n.Z,
                        (0, r._)(
                            (0, a._)(
                                {
                                    snippet:
                                        'const Demo = () => (\n    <>\n        <i className="color-dot state-executing mr1" />\n        <i className="color-dot state-executing state-critical mr1" />\n        <i className="color-dot state-executing state-major mr1" />\n        <i className="color-dot state-executing state-minor mr1" />\n        <i className="color-dot state-executing state-warning mr1" />\n        <i className="color-dot state-executing state-info mr1" />\n        <i className="color-dot state-executing state-disabled mr1" />\n        <i className="color-dot state-executing state-waiting mr1" />\n        <i className="color-dot state-executing state-new mr1" />\n        <i className="color-dot state-executing state-maintenance" />\n    </>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, s.jsx)(l, {})},
                        ),
                    );
                },
                d = function () {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)('i', {className: 'color-dot mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-critical mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-major mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-minor mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-warning mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-info mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-disabled mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-waiting mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-new mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot state-maintenance mr1'}),
                            (0, s.jsx)('br', {}),
                            (0, s.jsx)('br', {}),
                            (0, s.jsx)('i', {className: 'color-dot mod-small mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot mod-small state-critical mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot mod-small state-major mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot mod-small state-minor mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot mod-small state-warning mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot mod-small state-info mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot mod-small state-disabled mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot mod-small state-waiting mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot mod-small state-new mr1'}),
                            (0, s.jsx)('i', {className: 'color-dot mod-small state-maintenance'}),
                        ],
                    });
                },
                p = function (e) {
                    return (0, s.jsx)(
                        n.Z,
                        (0, r._)(
                            (0, a._)(
                                {
                                    snippet:
                                        'const Demo = () => (\n    <>\n        <i className="color-dot mr1" />\n        <i className="color-dot state-critical mr1" />\n        <i className="color-dot state-major mr1" />\n        <i className="color-dot state-minor mr1" />\n        <i className="color-dot state-warning mr1" />\n        <i className="color-dot state-info mr1" />\n        <i className="color-dot state-disabled mr1" />\n        <i className="color-dot state-waiting mr1" />\n        <i className="color-dot state-new mr1" />\n        <i className="color-dot state-maintenance mr1" />\n        <br></br>\n        <br></br>\n        <i className="color-dot mod-small mr1" />\n        <i className="color-dot mod-small state-critical mr1" />\n        <i className="color-dot mod-small state-major mr1" />\n        <i className="color-dot mod-small state-minor mr1" />\n        <i className="color-dot mod-small state-warning mr1" />\n        <i className="color-dot mod-small state-info mr1" />\n        <i className="color-dot mod-small state-disabled mr1" />\n        <i className="color-dot mod-small state-waiting mr1" />\n        <i className="color-dot mod-small state-new mr1" />\n        <i className="color-dot mod-small state-maintenance" />\n    </>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, s.jsx)(d, {})},
                        ),
                    );
                },
                u = o(66809),
                x = function () {
                    return (0, s.jsx)(u.X, {
                        id: 'ColorDot',
                        sourcePath: '/packages/style/scss/elements/color-dot.scss',
                        title: 'Color dot',
                        section: 'Feedback',
                        withPropsTable: !1,
                        description: 'A color dot indicates the status of an item.',
                        thumbnail: 'placeholder',
                        demo: (0, s.jsx)(i, {center: !0}),
                        examples: {
                            size: (0, s.jsx)(p, {center: !0, title: 'Color dots sizes'}),
                            executing: (0, s.jsx)(m, {center: !0, title: 'Flashing color dots'}),
                        },
                    });
                },
                f = x;
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 49774, 92888, 40179], function () {
            return e((e.s = 10882));
        }),
            (_N_E = e.O()));
    },
]);
