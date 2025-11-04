(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [58121],
    {
        29956: function (t, n, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/layout/StickyFooter',
                function () {
                    return o(14482);
                },
            ]);
        },
        14482: function (t, n, o) {
            'use strict';
            (o.r(n),
                o.d(n, {
                    default: function () {
                        return d;
                    },
                }));
            var e = o(97458),
                r = o(19523),
                i = o(52071),
                c = o(88966),
                u = o(39668),
                a = o(15084),
                s = function () {
                    return (0, e.jsxs)(a.oWq, {
                        borderTop: !0,
                        children: [
                            (0, e.jsx)(a.zxk, {variant: 'outline', children: 'Cancel'}),
                            (0, e.jsx)(a.zxk, {variant: 'filled', children: 'Save'}),
                        ],
                    });
                },
                f = function (t) {
                    return (0, e.jsx)(
                        u.Z,
                        (0, c._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {Button, StickyFooter} from \'@coveord/plasma-mantine\';\n\nconst Demo = () => (\n    <StickyFooter borderTop>\n        <Button variant="outline">Cancel</Button>\n        <Button variant="filled">Save</Button>\n    </StickyFooter>\n);\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, e.jsx)(s, {})},
                        ),
                    );
                },
                l = o(66809);
            function d() {
                return (0, e.jsx)(l.X, {
                    section: 'Layout',
                    title: 'Sticky Footer',
                    sourcePath: '/packages/mantine/src/components/sticky-footer/StickyFooter.tsx',
                    description: 'A page footer that sticks to the bottom of the screen.',
                    id: 'StickyFooter',
                    propsMetadata: r.wG,
                    demo: (0, e.jsx)(f, {}),
                });
            }
        },
    },
    function (t) {
        (t.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return t((t.s = 29956));
        }),
            (_N_E = t.O()));
    },
]);
