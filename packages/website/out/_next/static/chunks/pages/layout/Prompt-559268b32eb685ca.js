(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54754],
    {
        34668: function (n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/layout/Prompt',
                function () {
                    return e(998);
                },
            ]);
        },
        998: function (n, t, e) {
            'use strict';
            (e.r(t),
                e.d(t, {
                    default: function () {
                        return f;
                    },
                }));
            var i = e(97458),
                o = e(19523),
                s = e(52071),
                r = e(88966),
                u = e(53520),
                a = e(39668),
                m = e(15084),
                p = e(52983),
                d = function () {
                    var n = (0, u._)((0, p.useState)(!1), 2),
                        t = n[0],
                        e = n[1];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(m.NL0, {
                                variant: 'warning',
                                opened: t,
                                title: 'Prompt title',
                                onClose: function () {
                                    return e(!1);
                                },
                                children: [
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.',
                                    (0, i.jsx)(m.NL0.Footer, {
                                        children: (0, i.jsx)(m.zxk, {
                                            variant: 'outline',
                                            onClick: function () {
                                                return e(!1);
                                            },
                                            children: 'Close',
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(m.zxk, {
                                onClick: function () {
                                    return e(!0);
                                },
                                children: 'Open Prompt',
                            }),
                        ],
                    });
                },
                c = function (n) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, r._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {Button, Prompt} from '@coveord/plasma-mantine';\nimport {useState} from 'react';\n\nconst Demo = () => {\n    const [opened, setOpened] = useState(false);\n\n    return (\n        <>\n            <Prompt variant=\"warning\" opened={opened} title={'Prompt title'} onClose={() => setOpened(false)}>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id\n                sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.\n                <Prompt.Footer>\n                    <Button variant=\"outline\" onClick={() => setOpened(false)}>\n                        Close\n                    </Button>\n                </Prompt.Footer>\n            </Prompt>\n            <Button onClick={() => setOpened(true)}>Open Prompt</Button>\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(d, {})},
                        ),
                    );
                },
                l = e(66809);
            function f() {
                return (0, i.jsx)(l.X, {
                    section: 'Layout',
                    title: 'Prompt',
                    sourcePath: '/packages/mantine/src/components/prompt/Prompt.tsx',
                    description: 'A Prompt is a visual communication from the system to the user.',
                    id: 'Prompt',
                    propsMetadata: o.MP,
                    demo: (0, i.jsx)(c, {}),
                });
            }
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 34668));
        }),
            (_N_E = n.O()));
    },
]);
