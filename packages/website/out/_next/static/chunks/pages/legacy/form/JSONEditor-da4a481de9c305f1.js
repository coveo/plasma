(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [41759],
    {
        22321: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/JSONEditor',
                function () {
                    return t(23473);
                },
            ]);
        },
        23473: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    default: function () {
                        return w;
                    },
                }));
            var r = t(97458),
                o = t(19523),
                a = t(52071),
                l = t(88966),
                i = t(39668),
                s = t(94807),
                d = function () {
                    return (0, r.jsx)(s.vCw, {
                        id: 'example-3',
                        defaultValue: '{hello: world}',
                        errorMessage: 'Custom error message when JSON is invalid',
                    });
                },
                u = function (e) {
                    return (0, r.jsx)(
                        i.Z,
                        (0, l._)(
                            (0, a._)(
                                {
                                    snippet:
                                        'import {JSONEditorConnected} from \'@coveord/plasma-react\';\n\nconst invalidJSON = \'{hello: world}\';\n\nconst Demo = () => (\n    <JSONEditorConnected\n        id="example-3"\n        defaultValue={invalidJSON}\n        errorMessage="Custom error message when JSON is invalid"\n    />\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(d, {})},
                        ),
                    );
                },
                c = (0, s.rNO)({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}}),
                m = function () {
                    return (0, r.jsx)(s.vCw, {
                        id: 'example-1',
                        defaultValue: c,
                        onChange: function (e) {
                            return console.log(e);
                        },
                    });
                },
                p = function (e) {
                    return (0, r.jsx)(
                        i.Z,
                        (0, l._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {JSONEditorConnected, JSONToString} from '@coveord/plasma-react';\n\nconst defaultValue = JSONToString({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}});\n\nconst Demo = () => {\n    const logValue = (value: string) => console.log(value);\n    return <JSONEditorConnected id=\"example-1\" defaultValue={defaultValue} onChange={logValue} />;\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(m, {})},
                        ),
                    );
                },
                f = (0, s.rNO)({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}}),
                N = function () {
                    return (0, r.jsx)(s.vCw, {id: 'example-2', defaultValue: f, readOnly: !0});
                },
                S = function (e) {
                    return (0, r.jsx)(
                        i.Z,
                        (0, l._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {JSONEditorConnected, JSONToString} from '@coveord/plasma-react';\n\nconst defaultValue = JSONToString({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}});\n\nconst Demo = () => <JSONEditorConnected id=\"example-2\" defaultValue={defaultValue} readOnly />;\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(N, {})},
                        ),
                    );
                },
                x = t(48692),
                h = (0, s.rNO)({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}}),
                O = function () {
                    var e = (0, x.v9)(function (e) {
                        return s.WjX.getValue(e, 'example-4');
                    });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [e, (0, r.jsx)(s.vCw, {id: 'example-4', defaultValue: h})],
                    });
                },
                J = function (e) {
                    return (0, r.jsx)(
                        i.Z,
                        (0, l._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {useSelector} from 'react-redux';\nimport {JSONEditorConnected, JSONToString, JSONEditorSelectors, PlasmaState} from '@coveord/plasma-react';\n\nconst defaultValue = JSONToString({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}});\n\nconst Demo = () => {\n    const content = useSelector((state: PlasmaState) => JSONEditorSelectors.getValue(state, 'example-4'));\n    return (\n        <>\n            {content}\n            <JSONEditorConnected id=\"example-4\" defaultValue={defaultValue} />\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(O, {})},
                        ),
                    );
                },
                g = t(66809),
                w = function () {
                    return (0, r.jsx)(g.X, {
                        id: 'JSONEditorConnected',
                        title: 'JSON Editor',
                        section: 'Form',
                        description: 'A JSON editor is a text area where users can enter and edit data in JSON format.',
                        sourcePath: '/packages/react/src/components/editor/JSONEditor.tsx',
                        demo: (0, r.jsx)(p, {}),
                        propsMetadata: o.LZ,
                        examples: {
                            readOnly: (0, r.jsx)(S, {title: 'Read only'}),
                            inError: (0, r.jsx)(u, {title: 'Error Message'}),
                            valueFromState: (0, r.jsx)(J, {title: 'Selector'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 22321));
        }),
            (_N_E = e.O()));
    },
]);
