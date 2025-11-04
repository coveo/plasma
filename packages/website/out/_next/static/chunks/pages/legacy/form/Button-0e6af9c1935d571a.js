(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9801],
    {
        93620: function (n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/Button',
                function () {
                    return e(7292);
                },
            ]);
        },
        7292: function (n, t, e) {
            'use strict';
            (e.r(t),
                e.d(t, {
                    default: function () {
                        return v;
                    },
                }));
            var o = e(97458),
                r = e(19523),
                i = e(52071),
                l = e(88966),
                a = e(39668),
                s = e(94807),
                c = function () {
                    return (0, o.jsx)(s.zxk, {children: 'Hello World!'});
                },
                u = function (n) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {Button} from '@coveord/plasma-react';\n\nconst Demo = () => <Button>Hello World!</Button>;\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(c, {})},
                        ),
                    );
                },
                d = function () {
                    return (0, o.jsx)(s.zxk, {primary: !0, enabled: !1, children: 'Hello World!'});
                },
                p = function (n) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {Button} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <Button primary enabled={false}>\n        Hello World!\n    </Button>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(d, {})},
                        ),
                    );
                },
                m = e(4778),
                x = function () {
                    return (0, o.jsx)(s.zxk, {
                        link: 'https://www.coveo.com',
                        children: (0, o.jsx)(m.ZombieSize24Px, {height: 24, 'aria-label': 'zombie'}),
                    });
                },
                f = function (n) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {Button} from \'@coveord/plasma-react\';\nimport {ZombieSize24Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <Button link="https://www.coveo.com">\n        <ZombieSize24Px height={24} aria-label="zombie" />\n    </Button>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(x, {})},
                        ),
                    );
                },
                h = function () {
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(s.zxk, {isLoading: !0, enabled: !1, children: 'Disabled'}),
                            (0, o.jsx)(s.zxk, {isLoading: !0, primary: !0, enabled: !1, children: 'Primary disabled'}),
                        ],
                    });
                },
                j = function (n) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {Button} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <>\n        <Button isLoading enabled={false}>\n            Disabled\n        </Button>\n        <Button isLoading primary enabled={false}>\n            Primary disabled\n        </Button>\n    </>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(h, {})},
                        ),
                    );
                },
                B = function () {
                    return (0, o.jsxs)(s.zxk, {
                        classes: ['mod-prepend'],
                        children: [(0, o.jsx)('span', {className: 'btn-prepend', children: 'P'}), 'Hello World!'],
                    });
                },
                _ = function (n) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {Button} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <Button classes={['mod-prepend']}>\n        <span className=\"btn-prepend\">P</span>\n        Hello World!\n    </Button>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(B, {})},
                        ),
                    );
                },
                b = function () {
                    return (0, o.jsx)(s.zxk, {primary: !0, children: 'Hello World!'});
                },
                D = function (n) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {Button} from '@coveord/plasma-react';\n\nconst Demo = () => <Button primary>Hello World!</Button>;\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(b, {})},
                        ),
                    );
                },
                k = function () {
                    return (0, o.jsx)(s.zxk, {small: !0, children: 'Hello World!'});
                },
                z = function (n) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {Button} from '@coveord/plasma-react';\n\nconst Demo = () => <Button small>Hello World!</Button>;\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(k, {})},
                        ),
                    );
                },
                P = function () {
                    return (0, o.jsx)(s.zxk, {
                        primary: !0,
                        tooltip: 'Hello there!',
                        tooltipPlacement: s.TQc.Top,
                        children: 'Hover me!',
                    });
                },
                w = function (n) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {Button, TooltipPlacement} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <Button primary tooltip="Hello there!" tooltipPlacement={TooltipPlacement.Top}>\n        Hover me!\n    </Button>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(P, {})},
                        ),
                    );
                },
                y = e(66809),
                v = function () {
                    return (0, o.jsx)(y.X, {
                        id: 'Button',
                        title: 'Button',
                        section: 'Form',
                        thumbnail: 'actionButton',
                        description:
                            'A button draws attention to an important action and initializes this action when clicked.',
                        demo: (0, o.jsx)(u, {center: !0}),
                        examples: {
                            primary: (0, o.jsx)(D, {center: !0, title: 'Primary, Default size'}),
                            small: (0, o.jsx)(z, {center: !0, title: 'Secondary, Small size'}),
                            disabled: (0, o.jsx)(p, {center: !0, title: 'Disabled'}),
                            loading: (0, o.jsx)(j, {center: !0, title: 'Loading'}),
                            prepend: (0, o.jsx)(_, {center: !0, title: 'Prepended icon'}),
                            iconAndLink: (0, o.jsx)(f, {center: !0, title: 'Icon only with an hyperlink'}),
                            withTooltip: (0, o.jsx)(w, {center: !0, title: 'With tooltip'}),
                        },
                        sourcePath: '/packages/react/src/components/button/Button.tsx',
                        propsMetadata: r.JP,
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 93620));
        }),
            (_N_E = n.O()));
    },
]);
