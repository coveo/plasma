(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [10070],
    {
        72761: function (t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/StickyFooter',
                function () {
                    return n(25160);
                },
            ]);
        },
        25160: function (t, e, n) {
            'use strict';
            (n.r(e),
                n.d(e, {
                    default: function () {
                        return x;
                    },
                }));
            var o = n(97458),
                r = n(19523),
                s = n(52071),
                i = n(88966),
                c = n(53520),
                u = n(39668),
                a = n(94807),
                l = n(58085),
                p = n(52983),
                d = (0, l.fH)({count: 100}),
                m = function () {
                    var t = (0, c._)((0, p.useState)(!1), 2),
                        e = t[0],
                        n = t[1];
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(a.zxk, {
                                onClick: function () {
                                    return n(!0);
                                },
                                children: 'Open Footer',
                            }),
                            (0, o.jsxs)('div', {
                                style: {maxHeight: '300px'},
                                className: 'overflow-auto mt1',
                                children: [
                                    (0, o.jsx)('div', {children: d}),
                                    (0, o.jsxs)(a.oWq, {
                                        isOpened: e,
                                        children: [
                                            (0, o.jsx)(a.zxk, {
                                                onClick: function () {
                                                    return n(!1);
                                                },
                                                children: 'Cancel',
                                            }),
                                            (0, o.jsx)(a.zxk, {
                                                primary: !0,
                                                onClick: function () {
                                                    return n(!1);
                                                },
                                                children: 'Save',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                f = function (t) {
                    return (0, o.jsx)(
                        u.Z,
                        (0, i._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {Button, StickyFooter} from '@coveord/plasma-react';\nimport {loremIpsum} from 'lorem-ipsum';\nimport {useState} from 'react';\n\nconst lorem = loremIpsum({count: 100});\n\nconst Demo = () => {\n    const [isOpened, setIsOpened] = useState(false);\n    return (\n        <>\n            <Button onClick={() => setIsOpened(true)}>Open Footer</Button>\n            <div style={{maxHeight: '300px'}} className=\"overflow-auto mt1\">\n                <div>{lorem}</div>\n                <StickyFooter isOpened={isOpened}>\n                    <Button onClick={() => setIsOpened(false)}>Cancel</Button>\n                    <Button primary onClick={() => setIsOpened(false)}>\n                        Save\n                    </Button>\n                </StickyFooter>\n            </div>\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                t,
                            ),
                            {children: (0, o.jsx)(m, {})},
                        ),
                    );
                },
                k = n(66809),
                x = function () {
                    return (0, o.jsx)(k.X, {
                        id: 'StickyFooter',
                        title: 'Sticky Footer',
                        section: 'Layout',
                        description: 'A page footer that sticks to the bottom of the screen',
                        sourcePath: '/packages/react/src/components/stickyFooter/StickyFooter.tsx',
                        propsMetadata: r.oE,
                        demo: (0, o.jsx)(f, {}),
                    });
                };
        },
    },
    function (t) {
        (t.O(0, [59594, 73576, 58085, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return t((t.s = 72761));
        }),
            (_N_E = t.O()));
    },
]);
