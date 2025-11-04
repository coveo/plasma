(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [95677],
    {
        43120: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/advanced/SlideY',
                function () {
                    return t(15603);
                },
            ]);
        },
        15603: function (n, e, t) {
            'use strict';
            (t.r(e),
                t.d(e, {
                    default: function () {
                        return h;
                    },
                }));
            var o = t(97458),
                i = t(19523),
                s = t(52071),
                r = t(88966),
                c = t(53520),
                a = t(39668),
                d = t(94807),
                u = t(58085),
                l = t(52983),
                p = (0, u.fH)({count: 20}),
                m = function () {
                    var n = (0, c._)((0, l.useState)(!1), 2),
                        e = n[0],
                        t = n[1];
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(d.zxk, {
                                onClick: function () {
                                    return t(!e);
                                },
                                children: e ? 'Close' : 'Open',
                            }),
                            (0, o.jsx)(d.BwE, {in: e, children: (0, o.jsx)('div', {className: 'mt2', children: p})}),
                        ],
                    });
                },
                f = function (n) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, r._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {Button, SlideY} from '@coveord/plasma-react';\nimport {loremIpsum} from 'lorem-ipsum';\nimport {useState} from 'react';\n\nconst content = loremIpsum({count: 20});\n\nconst Demo = () => {\n    const [opened, setOpened] = useState(false);\n    return (\n        <>\n            <Button onClick={() => setOpened(!opened)}>{opened ? 'Close' : 'Open'}</Button>\n            <SlideY in={opened}>\n                <div className=\"mt2\">{content}</div>\n            </SlideY>\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(m, {})},
                        ),
                    );
                },
                _ = t(66809),
                h = function () {
                    return (0, o.jsx)(_.X, {
                        id: 'SlideY',
                        title: 'Slide Y',
                        section: 'Advanced',
                        description: 'Allows to hide and show content using a vertical expand animation.',
                        demo: (0, o.jsx)(f, {}),
                        sourcePath: '/packages/react/src/animations/SlideY.tsx',
                        propsMetadata: i.rE,
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 58085, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 43120));
        }),
            (_N_E = n.O()));
    },
]);
