(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [29612],
    {
        48187: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/layout/Header',
                function () {
                    return t(13202);
                },
            ]);
        },
        13202: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    default: function () {
                        return x;
                    },
                }));
            var r = t(97458),
                o = t(19523),
                a = t(52071),
                i = t(88966),
                c = t(39668),
                s = t(15084),
                d = function () {
                    return (0, r.jsxs)(s.h4i, {
                        description: 'The header description',
                        borderBottom: !0,
                        children: [
                            (0, r.jsxs)(s.h4i.Breadcrumbs, {
                                children: [
                                    (0, r.jsx)(s.eee, {children: 'One'}),
                                    (0, r.jsx)(s.eee, {children: 'Two'}),
                                    (0, r.jsx)(s.eee, {children: 'Three'}),
                                ],
                            }),
                            'Title',
                            (0, r.jsx)(s.h4i.DocAnchor, {href: 'https://about:blank', label: 'Tooltip text'}),
                            (0, r.jsxs)(s.h4i.Actions, {
                                children: [
                                    (0, r.jsx)(s.zxk, {children: 'Primary'}),
                                    (0, r.jsx)(s.zxk, {variant: 'outline', children: 'Secondary'}),
                                ],
                            }),
                        ],
                    });
                },
                l = function (e) {
                    return (0, r.jsx)(
                        c.Z,
                        (0, i._)(
                            (0, a._)(
                                {
                                    snippet:
                                        'import {Anchor, Button, Header} from \'@coveord/plasma-mantine\';\n\nconst Demo = () => (\n    <Header description="The header description" borderBottom>\n        <Header.Breadcrumbs>\n            <Anchor>One</Anchor>\n            <Anchor>Two</Anchor>\n            <Anchor>Three</Anchor>\n        </Header.Breadcrumbs>\n        Title\n        <Header.DocAnchor href="https://about:blank" label="Tooltip text" />\n        <Header.Actions>\n            <Button>Primary</Button>\n            <Button variant="outline">Secondary</Button>\n        </Header.Actions>\n    </Header>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(d, {})},
                        ),
                    );
                },
                h = function () {
                    return (0, r.jsxs)(s.h4i, {
                        variant: 'modal',
                        children: [
                            'Title',
                            (0, r.jsx)(s.h4i.DocAnchor, {href: 'https://about:blank', label: 'Tooltip text'}),
                            (0, r.jsx)(s.h4i.Actions, {children: (0, r.jsx)(s.PZ7, {})}),
                        ],
                    });
                },
                u = function (e) {
                    return (0, r.jsx)(
                        c.Z,
                        (0, i._)(
                            (0, a._)(
                                {
                                    snippet:
                                        'import {CloseButton, Header} from \'@coveord/plasma-mantine\';\n\nconst Demo = () => (\n    <Header variant="modal">\n        Title\n        <Header.DocAnchor href="https://about:blank" label="Tooltip text" />\n        <Header.Actions>\n            <CloseButton />\n        </Header.Actions>\n    </Header>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(h, {})},
                        ),
                    );
                },
                p = t(66809);
            function x() {
                return (0, r.jsx)(p.X, {
                    section: 'Layout',
                    title: 'Header',
                    sourcePath: '/packages/mantine/src/components/header/Header.tsx',
                    description:
                        'A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional call to actions.',
                    thumbnail: 'header',
                    id: 'Header',
                    propsMetadata: o.e3,
                    demo: (0, r.jsx)(l, {}),
                    examples: {modalVariant: (0, r.jsx)(u, {grow: !0, title: 'Modal variant'})},
                });
            }
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 48187));
        }),
            (_N_E = e.O()));
    },
]);
