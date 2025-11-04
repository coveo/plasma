(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [22161],
    {
        76546: function (e, n, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/Checkbox',
                function () {
                    return c(75367);
                },
            ]);
        },
        75367: function (e, n, c) {
            'use strict';
            (c.r(n),
                c.d(n, {
                    default: function () {
                        return m;
                    },
                }));
            var t = c(97458),
                o = c(19523),
                r = c(52071),
                d = c(88966),
                i = c(53520),
                a = c(39668),
                l = c(94807),
                s = c(52983),
                b = function () {
                    var e = (0, i._)((0, s.useState)(!1), 2),
                        n = e[0],
                        c = e[1];
                    return (0, t.jsx)(l.XZJ, {
                        checked: n,
                        onClick: function () {
                            return c(!n);
                        },
                        children: (0, t.jsx)(l.__J, {children: 'Label'}),
                    });
                },
                h = function (e) {
                    return (0, t.jsx)(
                        a.Z,
                        (0, d._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {Checkbox, Label} from '@coveord/plasma-react';\nimport {useState} from 'react';\n\nconst Demo = () => {\n    const [checked, setChecked] = useState(false);\n    return (\n        <Checkbox checked={checked} onClick={() => setChecked(!checked)}>\n            <Label>Label</Label>\n        </Checkbox>\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, t.jsx)(b, {})},
                        ),
                    );
                },
                x = function () {
                    return (0, t.jsx)(l.VEv, {children: (0, t.jsx)(l.__J, {children: 'Label'})});
                },
                p = function (e) {
                    return (0, t.jsx)(
                        a.Z,
                        (0, d._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {CheckboxConnected, Label} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <CheckboxConnected>\n        <Label>Label</Label>\n    </CheckboxConnected>\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, t.jsx)(x, {})},
                        ),
                    );
                },
                u = function () {
                    return (0, t.jsx)(l.XZJ, {disabled: !0, children: (0, t.jsx)(l.__J, {children: 'Label'})});
                },
                C = function (e) {
                    return (0, t.jsx)(
                        a.Z,
                        (0, d._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {Checkbox, Label} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <Checkbox disabled>\n        <Label>Label</Label>\n    </Checkbox>\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, t.jsx)(u, {})},
                        ),
                    );
                },
                k = function () {
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(l.bzR, {
                                id: 'parent-id',
                                isParent: !0,
                                clearSides: !0,
                                classes: 'mb1',
                                children: (0, t.jsx)(l.__J, {children: 'Parent'}),
                            }),
                            (0, t.jsx)(l.bzR, {
                                id: 'child-1-id',
                                parentId: 'parent-id',
                                children: (0, t.jsx)(l.__J, {children: 'Child 1'}),
                            }),
                            (0, t.jsx)(l.bzR, {
                                id: 'child-2-id',
                                parentId: 'parent-id',
                                children: (0, t.jsx)(l.__J, {children: 'Child 2'}),
                            }),
                            (0, t.jsx)(l.bzR, {
                                id: 'child-3-id',
                                parentId: 'parent-id',
                                children: (0, t.jsx)(l.__J, {children: 'Child 3'}),
                            }),
                        ],
                    });
                },
                _ = function (e) {
                    return (0, t.jsx)(
                        a.Z,
                        (0, d._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {GroupableCheckboxConnected, Label} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <>\n        <GroupableCheckboxConnected id="parent-id" isParent clearSides classes="mb1">\n            <Label>Parent</Label>\n        </GroupableCheckboxConnected>\n        <GroupableCheckboxConnected id="child-1-id" parentId="parent-id">\n            <Label>Child 1</Label>\n        </GroupableCheckboxConnected>\n        <GroupableCheckboxConnected id="child-2-id" parentId="parent-id">\n            <Label>Child 2</Label>\n        </GroupableCheckboxConnected>\n        <GroupableCheckboxConnected id="child-3-id" parentId="parent-id">\n            <Label>Child 3</Label>\n        </GroupableCheckboxConnected>\n    </>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, t.jsx)(k, {})},
                        ),
                    );
                },
                f = c(66809),
                m = function () {
                    return (0, t.jsx)(f.X, {
                        id: 'Checkbox',
                        title: 'Checkbox',
                        section: 'Form',
                        description:
                            'A set of checkboxes allow users to select multiple options from a list. A single checkbox can be used to enable/disable an option.',
                        sourcePath: '/packages/react/src/components/checkbox/Checkbox.tsx',
                        demo: (0, t.jsx)(h, {center: !0}),
                        examples: {
                            connected: (0, t.jsx)(p, {center: !0, title: 'Connected to the PlasmaState'}),
                            disabled: (0, t.jsx)(C, {center: !0, title: 'Disabled'}),
                            group: (0, t.jsx)(_, {center: !0, title: 'A group of checkboxes'}),
                        },
                        propsMetadata: o.$,
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 76546));
        }),
            (_N_E = e.O()));
    },
]);
