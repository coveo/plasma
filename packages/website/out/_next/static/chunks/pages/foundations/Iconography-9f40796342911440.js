(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [24954],
    {
        95507: function (e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/foundations/Iconography',
                function () {
                    return r(55619);
                },
            ]);
        },
        39668: function (e, n, r) {
            'use strict';
            r.d(n, {
                Z: function () {
                    return j;
                },
            });
            var t = r(80762),
                o = r(43112),
                i = r(97458),
                a = r(15084),
                s = r(4778),
                c = r(21876),
                l = r(85319),
                d = r(25545),
                u = r(52071),
                m = r(96846),
                p = JSON.parse(
                    '{"HO":{"@braintree/sanitize-url":"6.0.4","@coveo/atomic-react":"2.5.7","@coveord/plasma-components-props-analyzer":"workspace:*","@coveord/plasma-mantine":"workspace:*","@coveord/plasma-react":"workspace:*","@coveord/plasma-react-icons":"workspace:*","@coveord/plasma-style":"workspace:*","@coveord/plasma-tokens":"workspace:*","@emotion/react":"11.11.1","@emotion/server":"11.11.0","@faker-js/faker":"8.0.2","@mantine/carousel":"6.0.19","@mantine/core":"6.0.19","@mantine/dates":"6.0.19","@mantine/form":"6.0.19","@mantine/hooks":"6.0.19","@mantine/modals":"6.0.19","@mantine/next":"6.0.19","@mantine/notifications":"6.0.19","@mantine/prism":"6.0.19","@swc/helpers":"0.5.1","@tanstack/match-sorter-utils":"8.8.4","clsx":"2.0.0","codesandbox-import-utils":"2.2.3","dayjs":"1.11.9","embla-carousel-react":"7.1.0","flagg":"1.1.2","lodash.kebabcase":"4.1.1","lorem-ipsum":"2.0.8","moment":"2.29.4","next":"13.4.19","next-global-css":"1.3.1","next-images":"1.8.5","next-sitemap":"4.2.2","rc-slider":"9.7.5","react":"18.2.0","react-diff-view":"3.0.3","react-dom":"18.2.0","react-hook-form":"7.45.4","react-markdown":"8.0.7","react-redux":"8.1.2","redux":"4.2.1","redux-devtools-extension":"2.13.9","redux-promise-middleware":"6.1.3","redux-thunk":"2.4.2","remark-gfm":"3.0.1","reselect":"4.1.8","underscore":"1.13.6"},"v6":{"gg":"18.2.20","Qe":"18.2.7","Up":"2.6.2","NN":"5.1.6"}}',
                ),
                h = function (e, n) {
                    return e.indexOf("from '".concat(n, "';")) > -1;
                },
                x = function (e) {
                    var n,
                        r = {react: p.HO.react, 'react-dom': p.HO['react-dom']};
                    return (
                        null === (n = e.match(RegExp("(?<=from ')[^']*", 'gm'))) ||
                            void 0 === n ||
                            n.map(function (e) {
                                r[e] = p.HO[e];
                            }),
                        r
                    );
                },
                f = function (e, n) {
                    if (
                        (h(e, '@coveord/plasma-react-icons') && (n['@coveord/plasma-react-icons'] = 'latest'),
                        h(e, '@coveord/plasma-mantine'))
                    ) {
                        var r;
                        ((n['@coveord/plasma-mantine'] = 'latest'),
                            (n['@emotion/react'] = p.HO['@emotion/react']),
                            (n['embla-carousel-react'] = p.HO['embla-carousel-react']),
                            null === (r = Object.keys(p.HO)) ||
                                void 0 === r ||
                                r.map(function (e) {
                                    e.match(/^(@mantine).*/) && (n[e] = p.HO[e]);
                                }));
                    }
                    return (
                        h(e, '@coveord/plasma-react') &&
                            ((n['@coveord/plasma-react'] = 'latest'),
                            (n['react-redux'] = p.HO['react-redux']),
                            (n.redux = p.HO.redux),
                            (n['redux-devtools-extension'] = p.HO['redux-devtools-extension']),
                            (n['redux-promise-middleware'] = p.HO['redux-promise-middleware']),
                            (n['redux-thunk'] = p.HO['redux-thunk']),
                            (n.jquery = 'latest')),
                        n
                    );
                },
                v = function (e) {
                    var n = x(e),
                        r = (0, m.Z)({
                            template: 'node',
                            files: (0, u._)(
                                {
                                    'package.json': {
                                        content: {
                                            scripts: {dev: 'vite', build: 'tsc && vite build', serve: 'vite preview'},
                                            dependencies: f(e, n),
                                            devDependencies: {
                                                vite: '^4.2.1',
                                                '@vitejs/plugin-react': '^3.1.0',
                                                tslib: p.v6.Up,
                                                typescript: p.v6.NN,
                                                '@types/react': p.v6.gg,
                                                '@types/react-dom': p.v6.Qe,
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
                    return 'https://codesandbox.io/api/v1/sandboxes/define?parameters='.concat(r, '&json=1');
                },
                g = (0, a.kcS)(function (e, n) {
                    var r = n.grow,
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
                        previewWrapper: {padding: t ? 0 : e.spacing.md, height: r ? 500 : '100%'},
                        code: {minHeight: 100, position: 'relative', backgroundColor: '#1E1E1E'},
                    };
                }),
                j = function (e) {
                    var n,
                        r = e.children,
                        u = e.snippet,
                        m = e.center,
                        p = void 0 !== m && m,
                        h = e.grow,
                        x = e.title,
                        f = e.layout,
                        j = g({center: p, grow: void 0 !== h && h, noPadding: e.noPadding}).classes,
                        A = (0, a.VPI)(),
                        b =
                            ((n = (0, t._)(function () {
                                var e;
                                return (0, o.Jh)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return (n.trys.push([0, 3, , 4]), [4, fetch(v(u))]);
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
                        className: j.root,
                        children: [
                            x ? (0, i.jsx)(a.Dxz, {order: 5, mb: 'xs', children: x}) : null,
                            (0, i.jsxs)(a.MIq, {
                                className: j.sandbox,
                                cols: 'vertical' === f ? 1 : 2,
                                spacing: 0,
                                children: [
                                    (0, i.jsx)(a.xuv, {
                                        component: p ? a.M5Y : 'div',
                                        className: j.preview,
                                        children: (0, i.jsx)(a.xrM.Autosize, {
                                            mah: 500,
                                            children: (0, i.jsx)('div', {className: j.previewWrapper, children: r}),
                                        }),
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: j.code,
                                        children: [
                                            (0, i.jsx)(c.p, {
                                                withLineNumbers: !0,
                                                language: 'tsx',
                                                colorScheme: 'dark',
                                                getPrismTheme: function (e, n) {
                                                    return 'light' === n ? d.Z : l.Z;
                                                },
                                                radius: 0,
                                                noCopy: !0,
                                                scrollAreaComponent: a.xrM.Autosize,
                                                styles: {scrollArea: {maxHeight: 500, minHeight: 100}},
                                                children: u,
                                            }),
                                            (0, i.jsxs)(a.Kqy, {
                                                className: j.actions,
                                                spacing: 'xs',
                                                children: [
                                                    (0, i.jsx)(a.ua7, {
                                                        label: A.copied ? 'Copied' : 'Copy',
                                                        position: 'left',
                                                        children: (0, i.jsx)(a.Aar, {
                                                            radius: 'sm',
                                                            onClick: function () {
                                                                return A.copy(u);
                                                            },
                                                            children: A.copied
                                                                ? (0, i.jsx)(s.CheckSize16Px, {height: 16})
                                                                : (0, i.jsx)(s.CopySize16Px, {height: 16}),
                                                        }),
                                                    }),
                                                    (0, i.jsx)(a.ua7, {
                                                        label: 'Open in CodeSanbox',
                                                        position: 'left',
                                                        children: (0, i.jsx)(a.Aar, {
                                                            radius: 'sm',
                                                            onClick: b,
                                                            children: (0, i.jsx)(s.PlaySize16Px, {height: 16}),
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
        55619: function (e, n, r) {
            'use strict';
            (r.r(n),
                r.d(n, {
                    IconographyExamples: function () {
                        return S;
                    },
                    default: function () {
                        return I;
                    },
                }));
            var t,
                o = r(52071),
                i = r(29145),
                a = r(53520),
                s = r(97458),
                c = r(4778),
                l = r(88966),
                d = r(39668),
                u = r(9985),
                m = function () {
                    return (0, s.jsx)('div', {
                        style: {color: 'green'},
                        children: (0, s.jsx)(u.u, {
                            label: 'Dollar',
                            position: 'left',
                            children: (0, s.jsx)(c.DollarsSize64Px, {height: 64}),
                        }),
                    });
                },
                p = function (e) {
                    return (0, s.jsx)(
                        d.Z,
                        (0, l._)(
                            (0, o._)(
                                {
                                    snippet:
                                        'import {DollarsSize64Px} from \'@coveord/plasma-react-icons\';\nimport {Tooltip} from \'@mantine/core\';\n\n// Control the size using "height" or "width" attributes (defaults to 1em)\n// The icon takes the same color as the text around it\n\nconst Demo = () => (\n    <div style={{color: \'green\'}}>\n        <Tooltip label="Dollar" position="left">\n            <DollarsSize64Px height={64} />\n        </Tooltip>\n    </div>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, s.jsx)(m, {})},
                        ),
                    );
                },
                h = r(52983),
                x = r(15084),
                f = r(58506),
                v = r(66809),
                g = c.iconsList,
                j = (0, i._)(c, ['iconsList']),
                A = function (e) {
                    var n = e.getVisibleCells,
                        r = (0, a._)((0, x.qY0)(!1), 2),
                        t = r[0],
                        o = r[1].toggle,
                        i = n(),
                        c = i.find(function (e) {
                            return 'name' === e.column.id;
                        }),
                        l = i.find(function (e) {
                            return 'render' === e.column.id;
                        }),
                        d = i.find(function (e) {
                            return 'variants' === e.column.id;
                        });
                    return (0, s.jsx)('div', {
                        children: (0, s.jsxs)(x.Zbd, {
                            shadow: 'md',
                            radius: 'md',
                            px: 'md',
                            pb: 0,
                            children: [
                                (0, s.jsx)(x.Zbd.Section, {
                                    children: (0, s.jsxs)(x.ZAu, {
                                        noWrap: !0,
                                        p: 'md',
                                        position: 'apart',
                                        onClick: o,
                                        sx: {cursor: 'pointer'},
                                        children: [
                                            (0, s.jsxs)(x.ZAu, {
                                                children: [
                                                    (0, x.HCB)(l.column.columnDef.cell, l.getContext()),
                                                    (0, s.jsx)(x.Dxz, {
                                                        order: 5,
                                                        children: (0, x.HCB)(c.column.columnDef.cell, c.getContext()),
                                                    }),
                                                ],
                                            }),
                                            t
                                                ? (0, s.jsx)(j.ArrowHeadUpSize16Px, {height: 16})
                                                : (0, s.jsx)(j.ArrowHeadDownSize16Px, {height: 16}),
                                        ],
                                    }),
                                }),
                                (0, s.jsxs)(x.UO1, {
                                    in: t,
                                    children: [
                                        t
                                            ? (0, x.HCB)(d.column.columnDef.cell, d.getContext())
                                            : (0, s.jsx)(x.TaI, {h: 180}),
                                        (0, s.jsx)(x.TaI, {h: 'md'}),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                b = {
                    name: 'Cards',
                    Body: function (e) {
                        var n = e.table.getRowModel().rows.map(function (e) {
                            return (0, s.jsx)(A, (0, o._)({}, e), e.id);
                        });
                        return (0, s.jsx)('tr', {
                            children: (0, s.jsx)('td', {
                                style: {padding: 0},
                                children: (0, s.jsx)(x.MIq, {cols: 3, p: 'lg', children: n}),
                            }),
                        });
                    },
                    Header: function () {
                        return null;
                    },
                },
                y = {
                    globalFilterFn: function (e, n, r, t) {
                        var o = (0, f.O4)(e.getValue('name'), r);
                        return (t(o), o.passed);
                    },
                    getFilteredRowModel: (0, x.vLR)(),
                },
                C = (0, x.ClD)(),
                E = function (e) {
                    var n;
                    return parseInt(
                        null !== (t = null === (n = /(\d+)px/i.exec(e)) || void 0 === n ? void 0 : n[0]) && void 0 !== t
                            ? t
                            : '16',
                        10,
                    );
                },
                O = [
                    C.accessor('iconName', {
                        id: 'name',
                        header: 'Name',
                        cell: function (e) {
                            var n = e.getValue;
                            return n().charAt(0).toUpperCase() + n().slice(1);
                        },
                    }),
                    C.accessor('variants', {
                        id: 'render',
                        header: 'Icon',
                        enableGlobalFilter: !1,
                        cell: function (e) {
                            var n =
                                j[
                                    (0, e.getValue)().find(function (e) {
                                        return 32 === E(e);
                                    })
                                ];
                            return (0, s.jsx)(n, {height: 32});
                        },
                    }),
                    C.accessor('variants', {
                        id: 'variants',
                        header: 'Variants',
                        enableGlobalFilter: !1,
                        cell: function (e) {
                            var n = e.getValue;
                            return (0, s.jsx)(x.rjZ, {
                                columns: 4,
                                align: 'center',
                                children: n().map(function (e) {
                                    var n,
                                        r,
                                        t = j[e],
                                        o = parseInt(
                                            null !==
                                                (r =
                                                    null === (n = /(\d+)px/i.exec(e)) || void 0 === n
                                                        ? void 0
                                                        : n[0]) && void 0 !== r
                                                ? r
                                                : '16',
                                            10,
                                        );
                                    return t
                                        ? (0, s.jsxs)(
                                              h.Fragment,
                                              {
                                                  children: [
                                                      (0, s.jsx)(x.rjZ.Col, {
                                                          span: 1,
                                                          children: (0, s.jsx)(x.M5Y, {
                                                              children: (0, s.jsx)(t, {height: o}),
                                                          }),
                                                      }),
                                                      (0, s.jsx)(x.rjZ.Col, {
                                                          span: 3,
                                                          children: (0, s.jsx)(x.h9, {
                                                              value: '<'.concat(e, ' height={').concat(o, '} />'),
                                                              withLabel: !0,
                                                          }),
                                                      }),
                                                  ],
                                              },
                                              e,
                                          )
                                        : null;
                                }),
                            });
                        },
                    }),
                ],
                k = function () {
                    var e = (0, x.x6s)().state;
                    return (0, s.jsx)(x.xuv, {
                        mih: 500,
                        children: (0, s.jsx)(x.M5Y, {
                            p: 'lg',
                            children: (0, s.jsxs)(x.ZAu, {
                                children: [
                                    (0, s.jsx)(j.BrokenSearchSize32Px, {height: 32}),
                                    (0, s.jsxs)(x.Dxz, {
                                        order: 5,
                                        children: ['No icons match the filter "', e.globalFilter, '".'],
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                w = function () {
                    return (0, s.jsx)(x.iA_, {
                        data: g,
                        layouts: [b],
                        columns: O,
                        getRowId: function (e) {
                            return e.iconName;
                        },
                        options: y,
                        noDataChildren: (0, s.jsx)(k, {}),
                        children: (0, s.jsx)(x.iA_.Header, {
                            bg: 'gray.0',
                            children: (0, s.jsx)(x.iA_.Filter, {placeholder: 'Search icon'}),
                        }),
                    });
                },
                S = function () {
                    return (0, s.jsx)(v.X, {
                        id: 'Iconography',
                        section: 'Foundations',
                        title: 'Iconography',
                        thumbnail: 'iconography',
                        description: 'Icons are used to visually represent actions, functionalities, and features.',
                        demo: (0, s.jsx)(p, {center: !0}),
                        withPropsTable: !1,
                        children: (0, s.jsx)(w, {}),
                    });
                },
                I = S;
        },
        58506: function (e, n, r) {
            'use strict';
            r.d(n, {
                O4: function () {
                    return s;
                },
            });
            /**
             * match-sorter-utils
             *
             * Copyright (c) TanStack
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE.md file in the root directory of this source tree.
             *
             * @license MIT
             */ let t = {
                    À: 'A',
                    Á: 'A',
                    Â: 'A',
                    Ã: 'A',
                    Ä: 'A',
                    Å: 'A',
                    Ấ: 'A',
                    Ắ: 'A',
                    Ẳ: 'A',
                    Ẵ: 'A',
                    Ặ: 'A',
                    Æ: 'AE',
                    Ầ: 'A',
                    Ằ: 'A',
                    Ȃ: 'A',
                    Ç: 'C',
                    Ḉ: 'C',
                    È: 'E',
                    É: 'E',
                    Ê: 'E',
                    Ë: 'E',
                    Ế: 'E',
                    Ḗ: 'E',
                    Ề: 'E',
                    Ḕ: 'E',
                    Ḝ: 'E',
                    Ȇ: 'E',
                    Ì: 'I',
                    Í: 'I',
                    Î: 'I',
                    Ï: 'I',
                    Ḯ: 'I',
                    Ȋ: 'I',
                    Ð: 'D',
                    Ñ: 'N',
                    Ò: 'O',
                    Ó: 'O',
                    Ô: 'O',
                    Õ: 'O',
                    Ö: 'O',
                    Ø: 'O',
                    Ố: 'O',
                    Ṍ: 'O',
                    Ṓ: 'O',
                    Ȏ: 'O',
                    Ù: 'U',
                    Ú: 'U',
                    Û: 'U',
                    Ü: 'U',
                    Ý: 'Y',
                    à: 'a',
                    á: 'a',
                    â: 'a',
                    ã: 'a',
                    ä: 'a',
                    å: 'a',
                    ấ: 'a',
                    ắ: 'a',
                    ẳ: 'a',
                    ẵ: 'a',
                    ặ: 'a',
                    æ: 'ae',
                    ầ: 'a',
                    ằ: 'a',
                    ȃ: 'a',
                    ç: 'c',
                    ḉ: 'c',
                    è: 'e',
                    é: 'e',
                    ê: 'e',
                    ë: 'e',
                    ế: 'e',
                    ḗ: 'e',
                    ề: 'e',
                    ḕ: 'e',
                    ḝ: 'e',
                    ȇ: 'e',
                    ì: 'i',
                    í: 'i',
                    î: 'i',
                    ï: 'i',
                    ḯ: 'i',
                    ȋ: 'i',
                    ð: 'd',
                    ñ: 'n',
                    ò: 'o',
                    ó: 'o',
                    ô: 'o',
                    õ: 'o',
                    ö: 'o',
                    ø: 'o',
                    ố: 'o',
                    ṍ: 'o',
                    ṓ: 'o',
                    ȏ: 'o',
                    ù: 'u',
                    ú: 'u',
                    û: 'u',
                    ü: 'u',
                    ý: 'y',
                    ÿ: 'y',
                    Ā: 'A',
                    ā: 'a',
                    Ă: 'A',
                    ă: 'a',
                    Ą: 'A',
                    ą: 'a',
                    Ć: 'C',
                    ć: 'c',
                    Ĉ: 'C',
                    ĉ: 'c',
                    Ċ: 'C',
                    ċ: 'c',
                    Č: 'C',
                    č: 'c',
                    C̆: 'C',
                    c̆: 'c',
                    Ď: 'D',
                    ď: 'd',
                    Đ: 'D',
                    đ: 'd',
                    Ē: 'E',
                    ē: 'e',
                    Ĕ: 'E',
                    ĕ: 'e',
                    Ė: 'E',
                    ė: 'e',
                    Ę: 'E',
                    ę: 'e',
                    Ě: 'E',
                    ě: 'e',
                    Ĝ: 'G',
                    Ǵ: 'G',
                    ĝ: 'g',
                    ǵ: 'g',
                    Ğ: 'G',
                    ğ: 'g',
                    Ġ: 'G',
                    ġ: 'g',
                    Ģ: 'G',
                    ģ: 'g',
                    Ĥ: 'H',
                    ĥ: 'h',
                    Ħ: 'H',
                    ħ: 'h',
                    Ḫ: 'H',
                    ḫ: 'h',
                    Ĩ: 'I',
                    ĩ: 'i',
                    Ī: 'I',
                    ī: 'i',
                    Ĭ: 'I',
                    ĭ: 'i',
                    Į: 'I',
                    į: 'i',
                    İ: 'I',
                    ı: 'i',
                    Ĳ: 'IJ',
                    ĳ: 'ij',
                    Ĵ: 'J',
                    ĵ: 'j',
                    Ķ: 'K',
                    ķ: 'k',
                    Ḱ: 'K',
                    ḱ: 'k',
                    K̆: 'K',
                    k̆: 'k',
                    Ĺ: 'L',
                    ĺ: 'l',
                    Ļ: 'L',
                    ļ: 'l',
                    Ľ: 'L',
                    ľ: 'l',
                    Ŀ: 'L',
                    ŀ: 'l',
                    Ł: 'l',
                    ł: 'l',
                    Ḿ: 'M',
                    ḿ: 'm',
                    M̆: 'M',
                    m̆: 'm',
                    Ń: 'N',
                    ń: 'n',
                    Ņ: 'N',
                    ņ: 'n',
                    Ň: 'N',
                    ň: 'n',
                    ŉ: 'n',
                    N̆: 'N',
                    n̆: 'n',
                    Ō: 'O',
                    ō: 'o',
                    Ŏ: 'O',
                    ŏ: 'o',
                    Ő: 'O',
                    ő: 'o',
                    Œ: 'OE',
                    œ: 'oe',
                    P̆: 'P',
                    p̆: 'p',
                    Ŕ: 'R',
                    ŕ: 'r',
                    Ŗ: 'R',
                    ŗ: 'r',
                    Ř: 'R',
                    ř: 'r',
                    R̆: 'R',
                    r̆: 'r',
                    Ȓ: 'R',
                    ȓ: 'r',
                    Ś: 'S',
                    ś: 's',
                    Ŝ: 'S',
                    ŝ: 's',
                    Ş: 'S',
                    Ș: 'S',
                    ș: 's',
                    ş: 's',
                    Š: 'S',
                    š: 's',
                    Ţ: 'T',
                    ţ: 't',
                    ț: 't',
                    Ț: 'T',
                    Ť: 'T',
                    ť: 't',
                    Ŧ: 'T',
                    ŧ: 't',
                    T̆: 'T',
                    t̆: 't',
                    Ũ: 'U',
                    ũ: 'u',
                    Ū: 'U',
                    ū: 'u',
                    Ŭ: 'U',
                    ŭ: 'u',
                    Ů: 'U',
                    ů: 'u',
                    Ű: 'U',
                    ű: 'u',
                    Ų: 'U',
                    ų: 'u',
                    Ȗ: 'U',
                    ȗ: 'u',
                    V̆: 'V',
                    v̆: 'v',
                    Ŵ: 'W',
                    ŵ: 'w',
                    Ẃ: 'W',
                    ẃ: 'w',
                    X̆: 'X',
                    x̆: 'x',
                    Ŷ: 'Y',
                    ŷ: 'y',
                    Ÿ: 'Y',
                    Y̆: 'Y',
                    y̆: 'y',
                    Ź: 'Z',
                    ź: 'z',
                    Ż: 'Z',
                    ż: 'z',
                    Ž: 'Z',
                    ž: 'z',
                    ſ: 's',
                    ƒ: 'f',
                    Ơ: 'O',
                    ơ: 'o',
                    Ư: 'U',
                    ư: 'u',
                    Ǎ: 'A',
                    ǎ: 'a',
                    Ǐ: 'I',
                    ǐ: 'i',
                    Ǒ: 'O',
                    ǒ: 'o',
                    Ǔ: 'U',
                    ǔ: 'u',
                    Ǖ: 'U',
                    ǖ: 'u',
                    Ǘ: 'U',
                    ǘ: 'u',
                    Ǚ: 'U',
                    ǚ: 'u',
                    Ǜ: 'U',
                    ǜ: 'u',
                    Ứ: 'U',
                    ứ: 'u',
                    Ṹ: 'U',
                    ṹ: 'u',
                    Ǻ: 'A',
                    ǻ: 'a',
                    Ǽ: 'AE',
                    ǽ: 'ae',
                    Ǿ: 'O',
                    ǿ: 'o',
                    Þ: 'TH',
                    þ: 'th',
                    Ṕ: 'P',
                    ṕ: 'p',
                    Ṥ: 'S',
                    ṥ: 's',
                    X́: 'X',
                    x́: 'x',
                    Ѓ: 'Г',
                    ѓ: 'г',
                    Ќ: 'К',
                    ќ: 'к',
                    A̋: 'A',
                    a̋: 'a',
                    E̋: 'E',
                    e̋: 'e',
                    I̋: 'I',
                    i̋: 'i',
                    Ǹ: 'N',
                    ǹ: 'n',
                    Ồ: 'O',
                    ồ: 'o',
                    Ṑ: 'O',
                    ṑ: 'o',
                    Ừ: 'U',
                    ừ: 'u',
                    Ẁ: 'W',
                    ẁ: 'w',
                    Ỳ: 'Y',
                    ỳ: 'y',
                    Ȁ: 'A',
                    ȁ: 'a',
                    Ȅ: 'E',
                    ȅ: 'e',
                    Ȉ: 'I',
                    ȉ: 'i',
                    Ȍ: 'O',
                    ȍ: 'o',
                    Ȑ: 'R',
                    ȑ: 'r',
                    Ȕ: 'U',
                    ȕ: 'u',
                    B̌: 'B',
                    b̌: 'b',
                    Č̣: 'C',
                    č̣: 'c',
                    Ê̌: 'E',
                    ê̌: 'e',
                    F̌: 'F',
                    f̌: 'f',
                    Ǧ: 'G',
                    ǧ: 'g',
                    Ȟ: 'H',
                    ȟ: 'h',
                    J̌: 'J',
                    ǰ: 'j',
                    Ǩ: 'K',
                    ǩ: 'k',
                    M̌: 'M',
                    m̌: 'm',
                    P̌: 'P',
                    p̌: 'p',
                    Q̌: 'Q',
                    q̌: 'q',
                    Ř̩: 'R',
                    ř̩: 'r',
                    Ṧ: 'S',
                    ṧ: 's',
                    V̌: 'V',
                    v̌: 'v',
                    W̌: 'W',
                    w̌: 'w',
                    X̌: 'X',
                    x̌: 'x',
                    Y̌: 'Y',
                    y̌: 'y',
                    A̧: 'A',
                    a̧: 'a',
                    B̧: 'B',
                    b̧: 'b',
                    Ḑ: 'D',
                    ḑ: 'd',
                    Ȩ: 'E',
                    ȩ: 'e',
                    Ɛ̧: 'E',
                    ɛ̧: 'e',
                    Ḩ: 'H',
                    ḩ: 'h',
                    I̧: 'I',
                    i̧: 'i',
                    Ɨ̧: 'I',
                    ɨ̧: 'i',
                    M̧: 'M',
                    m̧: 'm',
                    O̧: 'O',
                    o̧: 'o',
                    Q̧: 'Q',
                    q̧: 'q',
                    U̧: 'U',
                    u̧: 'u',
                    X̧: 'X',
                    x̧: 'x',
                    Z̧: 'Z',
                    z̧: 'z',
                },
                o = Object.keys(t).join('|'),
                i = RegExp(o, 'g'),
                a = {
                    CASE_SENSITIVE_EQUAL: 7,
                    EQUAL: 6,
                    STARTS_WITH: 5,
                    WORD_STARTS_WITH: 4,
                    CONTAINS: 3,
                    ACRONYM: 2,
                    MATCHES: 1,
                    NO_MATCH: 0,
                };
            function s(e, n, r) {
                var t;
                if ((((r = r || {}).threshold = null != (t = r.threshold) ? t : a.MATCHES), !r.accessors)) {
                    let t = c(e, n, r);
                    return {
                        rankedValue: e,
                        rank: t,
                        accessorIndex: -1,
                        accessorThreshold: r.threshold,
                        passed: t >= r.threshold,
                    };
                }
                let o = (function (e, n) {
                        let r = [];
                        for (let t = 0, o = n.length; t < o; t++) {
                            let o = n[t],
                                i = 'function' == typeof o ? d : {...d, ...o},
                                a = (function (e, n) {
                                    let r = n;
                                    'object' == typeof n && (r = n.accessor);
                                    let t = r(e);
                                    return null == t ? [] : Array.isArray(t) ? t : [String(t)];
                                })(e, o);
                            for (let e = 0, n = a.length; e < n; e++) r.push({itemValue: a[e], attributes: i});
                        }
                        return r;
                    })(e, r.accessors),
                    i = {
                        rankedValue: e,
                        rank: a.NO_MATCH,
                        accessorIndex: -1,
                        accessorThreshold: r.threshold,
                        passed: !1,
                    };
                for (let e = 0; e < o.length; e++) {
                    let t = o[e],
                        s = c(t.itemValue, n, r),
                        {minRanking: l, maxRanking: d, threshold: u = r.threshold} = t.attributes;
                    (s < l && s >= a.MATCHES ? (s = l) : s > d && (s = d),
                        (s = Math.min(s, d)) >= u &&
                            s > i.rank &&
                            ((i.rank = s),
                            (i.passed = !0),
                            (i.accessorIndex = e),
                            (i.accessorThreshold = u),
                            (i.rankedValue = t.itemValue)));
                }
                return i;
            }
            function c(e, n, r) {
                return ((e = l(e, r)), (n = l(n, r)).length > e.length)
                    ? a.NO_MATCH
                    : e === n
                      ? a.CASE_SENSITIVE_EQUAL
                      : (e = e.toLowerCase()) === (n = n.toLowerCase())
                        ? a.EQUAL
                        : e.startsWith(n)
                          ? a.STARTS_WITH
                          : e.includes(` ${n}`)
                            ? a.WORD_STARTS_WITH
                            : e.includes(n)
                              ? a.CONTAINS
                              : 1 === n.length
                                ? a.NO_MATCH
                                : (function (e) {
                                        let n = '',
                                            r = e.split(' ');
                                        return (
                                            r.forEach((e) => {
                                                let r = e.split('-');
                                                r.forEach((e) => {
                                                    n += e.substr(0, 1);
                                                });
                                            }),
                                            n
                                        );
                                    })(e).includes(n)
                                  ? a.ACRONYM
                                  : (function (e, n) {
                                        let r = 0,
                                            t = 0;
                                        function o(e, n, t) {
                                            for (let o = t, i = n.length; o < i; o++) {
                                                let t = n[o];
                                                if (t === e) return ((r += 1), o + 1);
                                            }
                                            return -1;
                                        }
                                        let i = o(n[0], e, 0);
                                        if (i < 0) return a.NO_MATCH;
                                        t = i;
                                        for (let r = 1, i = n.length; r < i; r++) {
                                            let i = n[r];
                                            t = o(i, e, t);
                                            let s = t > -1;
                                            if (!s) return a.NO_MATCH;
                                        }
                                        let s = t - i;
                                        return (function (e) {
                                            let t = r / n.length,
                                                o = a.MATCHES + t * (1 / e);
                                            return o;
                                        })(s);
                                    })(e, n);
            }
            function l(e, n) {
                let {keepDiacritics: r} = n;
                return ((e = `${e}`), r || (e = e.replace(i, (e) => t[e])), e);
            }
            let d = {maxRanking: 1 / 0, minRanking: -1 / 0};
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 49774, 92888, 40179], function () {
            return e((e.s = 95507));
        }),
            (_N_E = e.O()));
    },
]);
