(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [16836],
    {
        24709: function (t, n, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/feedback/Tooltip',
                function () {
                    return o(56441);
                },
            ]);
        },
        56441: function (t, n, o) {
            'use strict';
            (o.r(n),
                o.d(n, {
                    TooltipDemos: function () {
                        return f;
                    },
                    default: function () {
                        return m;
                    },
                }));
            var e = o(97458),
                i = o(19523),
                a = o(52071),
                r = o(88966),
                p = o(39668),
                c = o(94807),
                l = function () {
                    return (0, e.jsx)(c.ua7, {
                        title: 'I am a tooltip!',
                        placement: 'right',
                        noSpanWrapper: !0,
                        children: (0, e.jsx)('button', {type: 'button', className: 'btn', children: 'Hover me!'}),
                    });
                },
                u = function (t) {
                    return (0, e.jsx)(
                        p.Z,
                        (0, r._)(
                            (0, a._)(
                                {
                                    snippet:
                                        'import {Tooltip} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <Tooltip title="I am a tooltip!" placement="right" noSpanWrapper>\n        <button type="button" className="btn">\n            Hover me!\n        </button>\n    </Tooltip>\n);\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, e.jsx)(l, {})},
                        ),
                    );
                },
                s = o(66809),
                f = function () {
                    return (0, e.jsx)(s.X, {
                        id: 'Tooltip',
                        sourcePath: '/packages/react/src/components/tooltip/Tooltip.tsx',
                        title: 'Tooltip',
                        section: 'Feedback',
                        description:
                            'A tooltip is a floating label that provides brief additional information about an interface component.',
                        thumbnail: 'tooltip',
                        demo: (0, e.jsx)(u, {center: !0}),
                        propsMetadata: i.o4,
                    });
                },
                m = f;
        },
    },
    function (t) {
        (t.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return t((t.s = 24709));
        }),
            (_N_E = t.O()));
    },
]);
