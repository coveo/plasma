(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83635],
    {
        91474: function (n, e, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/form/CodeEditor',
                function () {
                    return o(76080);
                },
            ]);
        },
        76080: function (n, e, o) {
            'use strict';
            (o.r(e),
                o.d(e, {
                    default: function () {
                        return x;
                    },
                }));
            var t = o(97458),
                r = o(19523),
                i = o(52071),
                a = o(88966),
                u = o(39668),
                s = o(15084),
                c = function () {
                    var n = (0, s.cIP)({
                        initialValues: {config: '{"key":"value"}'},
                        validate: {
                            config: function (n) {
                                try {
                                    if (!JSON.parse(n).key) return 'The key must have a value';
                                } catch (n) {
                                    return 'Invalid JSON';
                                }
                                return null;
                            },
                        },
                        validateInputOnBlur: !0,
                    });
                    return (0, t.jsx)(
                        s.pq4,
                        (0, i._)(
                            {
                                language: 'json',
                                label: 'Configuration',
                                description: 'This JSON configuration is very important',
                                monacoLoader: 'cdn',
                            },
                            n.getInputProps('config'),
                        ),
                    );
                },
                l = function (n) {
                    return (0, t.jsx)(
                        u.Z,
                        (0, a._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {CodeEditor, useForm} from \'@coveord/plasma-mantine\';\n\nconst Demo = () => {\n    const form = useForm({\n        initialValues: {\n            config: \'{"key":"value"}\',\n        },\n        validate: {\n            config: (jsonValue) => {\n                try {\n                    const config = JSON.parse(jsonValue);\n                    if (!config.key) {\n                        return \'The key must have a value\';\n                    }\n                } catch {\n                    return \'Invalid JSON\';\n                }\n                return null;\n            },\n        },\n        validateInputOnBlur: true,\n    });\n\n    return (\n        <CodeEditor\n            language="json"\n            label="Configuration"\n            description="This JSON configuration is very important"\n            monacoLoader="cdn"\n            {...form.getInputProps(\'config\')}\n        />\n    );\n};\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, t.jsx)(c, {})},
                        ),
                    );
                },
                d = function () {
                    var n = (0, s.cIP)({
                        initialValues: {config: '{"emptyKey":}'},
                        validate: {
                            config: function (n) {
                                try {
                                    if (!JSON.parse(n).key) return 'The key must have a value';
                                } catch (n) {
                                    return 'Invalid JSON';
                                }
                                return null;
                            },
                        },
                        validateInputOnBlur: !0,
                        validateInputOnChange: !0,
                    });
                    return (0, t.jsx)(
                        s.pq4,
                        (0, i._)(
                            {
                                language: 'json',
                                label: 'Error',
                                description: 'Indicates when the code is invalid',
                                monacoLoader: 'cdn',
                            },
                            n.getInputProps('config'),
                        ),
                    );
                },
                p = function (n) {
                    return (0, t.jsx)(
                        u.Z,
                        (0, a._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {CodeEditor, useForm} from \'@coveord/plasma-mantine\';\n\nconst Demo = () => {\n    const form = useForm({\n        initialValues: {\n            config: \'{"emptyKey":}\',\n        },\n        validate: {\n            config: (jsonValue) => {\n                try {\n                    const config = JSON.parse(jsonValue);\n                    if (!config.key) {\n                        return \'The key must have a value\';\n                    }\n                } catch {\n                    return \'Invalid JSON\';\n                }\n                return null;\n            },\n        },\n        validateInputOnBlur: true,\n        validateInputOnChange: true,\n    });\n\n    return (\n        <CodeEditor\n            language="json"\n            label="Error"\n            description="Indicates when the code is invalid"\n            monacoLoader="cdn"\n            {...form.getInputProps(\'config\')}\n        />\n    );\n};\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, t.jsx)(d, {})},
                        ),
                    );
                },
                m = function () {
                    var n = (0, s.cIP)({
                        initialValues: {code: 'def my_extension():\n	print("Not implemented yet.")\n\nmy_extension()'},
                    });
                    return (0, t.jsx)(
                        s.pq4,
                        (0, i._)(
                            {
                                language: 'python',
                                label: 'Extension',
                                description: 'Define an extension using Python',
                                monacoLoader: 'cdn',
                            },
                            n.getInputProps('code'),
                        ),
                    );
                },
                g = function (n) {
                    return (0, t.jsx)(
                        u.Z,
                        (0, a._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {CodeEditor, useForm} from \'@coveord/plasma-mantine\';\n\nconst Demo = () => {\n    const form = useForm({\n        initialValues: {\n            code: \'def my_extension():\\n\\tprint("Not implemented yet.")\\n\\nmy_extension()\',\n        },\n    });\n\n    return (\n        <CodeEditor\n            language="python"\n            label="Extension"\n            description="Define an extension using Python"\n            monacoLoader="cdn"\n            {...form.getInputProps(\'code\')}\n        />\n    );\n};\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, t.jsx)(m, {})},
                        ),
                    );
                },
                f = function () {
                    var n = (0, s.cIP)({
                        initialValues: {
                            markup: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><circle cx="8" cy="8" r="6.5" stroke="currentColor"/><path d="M5 8H11M8 5L8 11" stroke="currentColor" stroke-linecap="round"/></svg>',
                        },
                    });
                    return (0, t.jsx)(
                        s.pq4,
                        (0, i._)(
                            {
                                language: 'xml',
                                label: 'Some XML structure',
                                description: 'XML markup of the add icon svg',
                                monacoLoader: 'cdn',
                            },
                            n.getInputProps('markup'),
                        ),
                    );
                },
                h = function (n) {
                    return (0, t.jsx)(
                        u.Z,
                        (0, a._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {CodeEditor, useForm} from \'@coveord/plasma-mantine\';\n\nconst Demo = () => {\n    const form = useForm({\n        initialValues: {\n            markup: \'<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><circle cx="8" cy="8" r="6.5" stroke="currentColor"/><path d="M5 8H11M8 5L8 11" stroke="currentColor" stroke-linecap="round"/></svg>\',\n        },\n    });\n\n    return (\n        <CodeEditor\n            language="xml"\n            label="Some XML structure"\n            description="XML markup of the add icon svg"\n            monacoLoader="cdn"\n            {...form.getInputProps(\'markup\')}\n        />\n    );\n};\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, t.jsx)(f, {})},
                        ),
                    );
                },
                v = o(66809),
                x = function () {
                    return (0, t.jsx)(v.X, {
                        id: 'CodeEditor',
                        section: 'Form',
                        title: 'Code Editor',
                        sourcePath: '/packages/mantine/src/components/code-editor/CodeEditor.tsx',
                        description:
                            'A code editor is a text area that allows users to edit code. A coding syntax is built in.',
                        thumbnail: 'codeEditor',
                        propsMetadata: r.mJ,
                        demo: (0, t.jsx)(l, {grow: !0}),
                        examples: {
                            python: (0, t.jsx)(g, {grow: !0, title: 'Python language'}),
                            xml: (0, t.jsx)(h, {grow: !0, title: 'XML language'}),
                            error: (0, t.jsx)(p, {grow: !0, title: 'Validation'}),
                        },
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 91474));
        }),
            (_N_E = n.O()));
    },
]);
