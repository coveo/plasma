(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [50480],
    {
        11641: function (t, n, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/feedback/Toast',
                function () {
                    return o(8174);
                },
            ]);
        },
        8174: function (t, n, o) {
            'use strict';
            (o.r(n),
                o.d(n, {
                    ToastDemos: function () {
                        return _;
                    },
                    default: function () {
                        return j;
                    },
                }));
            var e = o(97458),
                s = o(19523),
                r = o(52071),
                a = o(88966),
                i = o(39668),
                c = o(94807),
                d = function () {
                    return (0, e.jsx)(c.FNi, {
                        title: 'Preparing file for download...',
                        type: 'download',
                        children: (0, e.jsx)('div', {children: 'some_file.csv'}),
                    });
                },
                l = function (t) {
                    return (0, e.jsx)(
                        i.Z,
                        (0, a._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {Toast} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <Toast title="Preparing file for download..." type="download">\n        <div>some_file.csv</div>\n    </Toast>\n);\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, e.jsx)(d, {})},
                        ),
                    );
                },
                u = function () {
                    return (0, e.jsx)(c.FNi, {title: 'Hello World!', type: 'success'});
                },
                p = function (t) {
                    return (0, e.jsx)(
                        i.Z,
                        (0, a._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {Toast} from \'@coveord/plasma-react\';\n\nconst Demo = () => <Toast title="Hello World!" type="success" />;\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, e.jsx)(u, {})},
                        ),
                    );
                },
                f = o(48692),
                m = function () {
                    var t = (0, f.I0)();
                    return (0, e.jsx)(c.zxk, {
                        onClick: function () {
                            t((0, c.fz3)('toast-container-id', 'Hello World!', {dismiss: 3e3, type: 'error'}));
                        },
                        children: 'Show toast',
                    });
                },
                x = function () {
                    return (0, e.jsxs)(e.Fragment, {
                        children: [(0, e.jsx)(c.nxI, {id: 'toast-container-id'}), (0, e.jsx)(m, {})],
                    });
                },
                h = function (t) {
                    return (0, e.jsx)(
                        i.Z,
                        (0, a._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {useDispatch} from 'react-redux';\nimport {addToast, Button, IDispatch, ToastContainerConnected} from '@coveord/plasma-react';\n\nconst ShowToastButton: React.FunctionComponent = () => {\n    const dispatch: IDispatch = useDispatch();\n    return (\n        <Button\n            onClick={() => {\n                dispatch(\n                    addToast('toast-container-id', 'Hello World!', {\n                        dismiss: 3000,\n                        type: 'error',\n                    }),\n                );\n            }}\n        >\n            Show toast\n        </Button>\n    );\n};\n\nconst Demo = () => (\n    <>\n        <ToastContainerConnected id=\"toast-container-id\" />\n        <ShowToastButton />\n    </>\n);\nexport default Demo;\n",
                                },
                                t,
                            ),
                            {children: (0, e.jsx)(x, {})},
                        ),
                    );
                },
                T = o(66809),
                _ = function () {
                    return (0, e.jsx)(T.X, {
                        id: 'Toast',
                        sourcePath: '/packages/react/src/components/toast/Toast.tsx',
                        title: 'Toast',
                        thumbnail: 'toast',
                        section: 'Feedback',
                        description: 'A toast displays a short message related to an action performed by a user.',
                        demo: (0, e.jsx)(p, {center: !0}),
                        propsMetadata: s.iL,
                        examples: {
                            download: (0, e.jsx)(l, {center: !0, title: 'Download Toast'}),
                            container: (0, e.jsx)(h, {center: !0, title: 'Toast Notifier'}),
                        },
                    });
                },
                j = _;
        },
    },
    function (t) {
        (t.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return t((t.s = 11641));
        }),
            (_N_E = t.O()));
    },
]);
