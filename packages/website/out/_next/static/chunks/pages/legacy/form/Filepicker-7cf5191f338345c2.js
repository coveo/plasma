(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1761],
    {
        89366: function (e, i, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/Filepicker',
                function () {
                    return t(62655);
                },
            ]);
        },
        62655: function (e, i, t) {
            'use strict';
            (t.r(i),
                t.d(i, {
                    default: function () {
                        return f;
                    },
                }));
            var n = t(97458),
                c = t(19523),
                r = t(52071),
                o = t(88966),
                p = t(39668),
                s = t(94807),
                a = function () {
                    return (0, n.jsx)(s.tIr, {
                        id: 'input-id',
                        accept: '.jpg,.png,.csv,.txt',
                        placeholder: 'Choose a file...',
                    });
                },
                l = function (e) {
                    return (0, n.jsx)(
                        p.Z,
                        (0, o._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {Filepicker} from \'@coveord/plasma-react\';\n\nconst Demo = () => <Filepicker id="input-id" accept=".jpg,.png,.csv,.txt" placeholder="Choose a file..." />;\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, n.jsx)(a, {})},
                        ),
                    );
                },
                u = t(66809),
                f = function () {
                    return (0, n.jsx)(u.X, {
                        id: 'Filepicker',
                        title: 'File Picker',
                        section: 'Form',
                        description: 'A file picker is a dialog that allows users to upload a file.',
                        sourcePath: '/packages/react/src/components/filepicker/FilePicker.tsx',
                        demo: (0, n.jsx)(l, {center: !0}),
                        propsMetadata: c.pG,
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 89366));
        }),
            (_N_E = e.O()));
    },
]);
