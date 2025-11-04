(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47168],
    {
        28809: function (t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/SplitLayout',
                function () {
                    return n(23299);
                },
            ]);
        },
        23299: function (t, e, n) {
            'use strict';
            (n.r(e),
                n.d(e, {
                    default: function () {
                        return d;
                    },
                }));
            var o = n(97458),
                r = n(19523),
                l = n(52071),
                i = n(88966),
                s = n(39668),
                a = n(94807),
                p = function () {
                    return (0, o.jsx)(a.KH4, {
                        leftChildren: (0, o.jsx)('p', {className: 'p1', children: 'Hello from the left!'}),
                        rightChildren: (0, o.jsx)('p', {className: 'p1', children: 'Hello from the right!'}),
                    });
                },
                c = function (t) {
                    return (0, o.jsx)(
                        s.Z,
                        (0, i._)(
                            (0, l._)(
                                {
                                    snippet:
                                        'import {SplitLayout} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <SplitLayout\n        leftChildren={<p className="p1">Hello from the left!</p>}\n        rightChildren={<p className="p1">Hello from the right!</p>}\n    />\n);\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, o.jsx)(p, {})},
                        ),
                    );
                },
                u = function () {
                    return (0, o.jsx)(a.KH4, {
                        mods: a.bJn.noBorder,
                        leftChildren: (0, o.jsx)('p', {className: 'p1', children: 'Hello from the left!'}),
                        rightChildren: (0, o.jsx)('p', {className: 'p1', children: 'Hello from the right!'}),
                    });
                },
                h = function (t) {
                    return (0, o.jsx)(
                        s.Z,
                        (0, i._)(
                            (0, l._)(
                                {
                                    snippet:
                                        'import {SplitLayout, SplitLayoutMods} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <SplitLayout\n        mods={SplitLayoutMods.noBorder}\n        leftChildren={<p className="p1">Hello from the left!</p>}\n        rightChildren={<p className="p1">Hello from the right!</p>}\n    />\n);\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, o.jsx)(u, {})},
                        ),
                    );
                },
                f = n(66809),
                d = function () {
                    return (0, o.jsx)(f.X, {
                        id: 'SplitLayout',
                        title: 'Split Layout',
                        section: 'Layout',
                        description: 'A split layout organizes information in two vertical columns.',
                        sourcePath: '/packages/react/src/components/splitlayout/SplitLayout.tsx',
                        demo: (0, o.jsx)(c, {}),
                        propsMetadata: r.XN,
                        examples: {noBorder: (0, o.jsx)(h, {title: 'Without a border'})},
                    });
                };
        },
    },
    function (t) {
        (t.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return t((t.s = 28809));
        }),
            (_N_E = t.O()));
    },
]);
