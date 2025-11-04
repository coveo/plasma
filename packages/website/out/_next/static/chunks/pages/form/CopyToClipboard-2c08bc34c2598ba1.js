(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [89794],
    {
        51840: function (o, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/form/CopyToClipboard',
                function () {
                    return n(47151);
                },
            ]);
        },
        47151: function (o, e, n) {
            'use strict';
            (n.r(e),
                n.d(e, {
                    default: function () {
                        return m;
                    },
                }));
            var t = n(97458),
                r = n(19523),
                i = n(52071),
                p = n(88966),
                a = n(39668),
                c = n(15084),
                s = function () {
                    return (0, t.jsx)(c.h9, {value: 'Copy me!'});
                },
                u = function (o) {
                    return (0, t.jsx)(
                        a.Z,
                        (0, p._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {CopyToClipboard} from \'@coveord/plasma-mantine\';\n\nconst Demo = () => <CopyToClipboard value="Copy me!" />;\nexport default Demo;\n',
                                },
                                o,
                            ),
                            {children: (0, t.jsx)(s, {})},
                        ),
                    );
                },
                l = function () {
                    return (0, t.jsx)(c.h9, {value: 'Copy me!', withLabel: !0});
                },
                d = function (o) {
                    return (0, t.jsx)(
                        a.Z,
                        (0, p._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {CopyToClipboard} from \'@coveord/plasma-mantine\';\n\nconst Demo = () => <CopyToClipboard value="Copy me!" withLabel />;\nexport default Demo;\n',
                                },
                                o,
                            ),
                            {children: (0, t.jsx)(l, {})},
                        ),
                    );
                },
                C = n(66809),
                m = function () {
                    return (0, t.jsx)(C.X, {
                        id: 'CopyToClipboard',
                        title: 'CopyToClipboard',
                        section: 'Form',
                        description:
                            "A Copy to Clipboard button offers a button which copies given content to the user's clipboard when clicked.",
                        demo: (0, t.jsx)(u, {center: !0}),
                        examples: {withLabel: (0, t.jsx)(d, {center: !0, title: 'With Label'})},
                        sourcePath: '/packages/mantine/src/components/copyToClipboard/CopyToClipboard.tsx',
                        propsMetadata: r.T9,
                    });
                };
        },
    },
    function (o) {
        (o.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return o((o.s = 51840));
        }),
            (_N_E = o.O()));
    },
]);
