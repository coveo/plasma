(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [48614],
    {
        19124: function (n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/form/Button',
                function () {
                    return e(89037);
                },
            ]);
        },
        89037: function (n, t, e) {
            'use strict';
            (e.r(t),
                e.d(t, {
                    default: function () {
                        return v;
                    },
                }));
            var o,
                i = e(97458),
                s = e(19523),
                c = e(52071),
                a = e(88966),
                r = e(39668),
                u = e(15084),
                l = function () {
                    return (0, i.jsx)(u.zxk, {
                        onClick: function () {
                            return (0, u.c0f)({message: 'Button clicked'});
                        },
                        children: 'Default button',
                    });
                },
                d = function (n) {
                    return (0, i.jsx)(
                        r.Z,
                        (0, a._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {Button, showNotification} from '@coveord/plasma-mantine';\n\nconst Demo = () => <Button onClick={() => showNotification({message: 'Button clicked'})}>Default button</Button>;\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(l, {})},
                        ),
                    );
                },
                m = function () {
                    return (0, i.jsx)(u.zxk, {
                        disabled: !0,
                        disabledTooltip: 'This button is disabled',
                        onClick: function () {
                            return alert('button clicked');
                        },
                        children: 'Disabled button',
                    });
                },
                f = function (n) {
                    return (0, i.jsx)(
                        r.Z,
                        (0, a._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {Button} from '@coveord/plasma-mantine';\n\nconst Demo = () => (\n    <Button disabled disabledTooltip=\"This button is disabled\" onClick={() => alert('button clicked')}>\n        Disabled button\n    </Button>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(m, {})},
                        ),
                    );
                },
                h = function () {
                    return (0, i.jsx)(u.zxk, {
                        variant: 'outline',
                        onClick: function () {
                            return (0, u.c0f)({message: 'Button clicked'});
                        },
                        children: 'Secondary button',
                    });
                },
                p = function (n) {
                    return (0, i.jsx)(
                        r.Z,
                        (0, a._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {Button, showNotification} from '@coveord/plasma-mantine';\n\nconst Demo = () => (\n    <Button variant=\"outline\" onClick={() => showNotification({message: 'Button clicked'})}>\n        Secondary button\n    </Button>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(h, {})},
                        ),
                    );
                },
                k = e(80762),
                x = e(43112),
                b = e(4778),
                w =
                    ((o = (0, k._)(function () {
                        return (0, x.Jh)(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return [
                                        4,
                                        new Promise(function (n) {
                                            return setTimeout(n, 3e3);
                                        }),
                                    ];
                                case 1:
                                    return (
                                        n.sent(),
                                        (0, u.c0f)({
                                            title: 'Saved successfully',
                                            message:
                                                'The save disabled was put in a loading state while it was waiting for the save to resolve.',
                                            autoClose: !1,
                                            icon: (0, i.jsx)(b.CheckmarkSize24Px, {height: 24}),
                                            color: 'success',
                                        }),
                                        [2]
                                    );
                            }
                        });
                    })),
                    function () {
                        return o.apply(this, arguments);
                    }),
                B = function () {
                    return (0, i.jsx)(u.zxk, {onClick: w, children: 'Save'});
                },
                _ = function (n) {
                    return (0, i.jsx)(
                        r.Z,
                        (0, a._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {Button, showNotification} from '@coveord/plasma-mantine';\nimport {CheckmarkSize24Px} from '@coveord/plasma-react-icons';\n\nconst somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));\n\nconst promise = async () => {\n    await somethingAsync(3000);\n    showNotification({\n        title: 'Saved successfully',\n        message: 'The save disabled was put in a loading state while it was waiting for the save to resolve.',\n        autoClose: false,\n        icon: <CheckmarkSize24Px height={24} />,\n        color: 'success',\n    });\n};\n\nconst Demo = () => <Button onClick={promise}>Save</Button>;\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(B, {})},
                        ),
                    );
                },
                j = e(66809),
                v = function () {
                    return (0, i.jsx)(j.X, {
                        id: 'Button',
                        title: 'Button',
                        section: 'Form',
                        thumbnail: 'actionButton',
                        description:
                            'A button draws attention to an important action and initializes this action when clicked.',
                        demo: (0, i.jsx)(d, {center: !0}),
                        examples: {
                            secondary: (0, i.jsx)(p, {center: !0, title: 'Secondary'}),
                            disabled: (0, i.jsx)(f, {center: !0, title: 'Disabled'}),
                            promiseHandler: (0, i.jsx)(_, {center: !0, title: 'Async click handler'}),
                        },
                        sourcePath: '/packages/mantine/src/components/button/Button.tsx',
                        propsMetadata: s.tf,
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 19124));
        }),
            (_N_E = n.O()));
    },
]);
