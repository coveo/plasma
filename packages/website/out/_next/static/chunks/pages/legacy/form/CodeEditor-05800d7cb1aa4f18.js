(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [60236],
    {
        93677: function (o, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/CodeEditor',
                function () {
                    return e(66408);
                },
            ]);
        },
        66408: function (o, t, e) {
            'use strict';
            (e.r(t),
                e.d(t, {
                    default: function () {
                        return f;
                    },
                }));
            var n = e(97458),
                r = e(19523),
                i = e(52071),
                d = e(88966),
                a = e(39668),
                s = e(94807),
                u = function () {
                    return (0, n.jsx)(s.pq4, {
                        value: 'from math import pi as PI\nprint(PI) // 3.141592653589793\n',
                        mode: s.aCD.Python,
                        options: {lineWrapping: !0},
                    });
                },
                p = function (o) {
                    return (0, n.jsx)(
                        a.Z,
                        (0, d._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {CodeEditor, CodeMirrorModes} from '@coveord/plasma-react';\n\nconst defaultValue = `from math import pi as PI\nprint(PI) // 3.141592653589793\n`;\n\nconst Demo = () => <CodeEditor value={defaultValue} mode={CodeMirrorModes.Python} options={{lineWrapping: true}} />;\nexport default Demo;\n",
                                },
                                o,
                            ),
                            {children: (0, n.jsx)(u, {})},
                        ),
                    );
                },
                c = function () {
                    return (0, n.jsx)(s.pq4, {
                        value: 'from math import pi as PI\nprint(PI) // 3.141592653589793\n',
                        mode: s.aCD.Python,
                        readOnly: !0,
                    });
                },
                l = function (o) {
                    return (0, n.jsx)(
                        a.Z,
                        (0, d._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {CodeEditor, CodeMirrorModes} from '@coveord/plasma-react';\n\nconst defaultValue = `from math import pi as PI\nprint(PI) // 3.141592653589793\n`;\n\nconst Demo = () => <CodeEditor value={defaultValue} mode={CodeMirrorModes.Python} readOnly />;\nexport default Demo;\n",
                                },
                                o,
                            ),
                            {children: (0, n.jsx)(c, {})},
                        ),
                    );
                },
                m = e(66809),
                f = function () {
                    return (0, n.jsx)(m.X, {
                        id: 'CodeEditor',
                        title: 'Code Editor',
                        section: 'Form',
                        description:
                            'A code editor is a text area that allows users to edit code. A coding syntax is built in.',
                        thumbnail: 'codeEditor',
                        demo: (0, n.jsx)(p, {}),
                        sourcePath: '/packages/react/src/components/editor/CodeEditor.tsx',
                        propsMetadata: r.tk,
                        examples: {readOnly: (0, n.jsx)(l, {title: 'Read only'})},
                    });
                };
        },
    },
    function (o) {
        (o.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return o((o.s = 93677));
        }),
            (_N_E = o.O()));
    },
]);
