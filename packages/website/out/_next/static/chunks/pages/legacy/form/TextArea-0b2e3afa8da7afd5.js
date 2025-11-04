(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [563],
    {
        25402: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/TextArea',
                function () {
                    return n(43361);
                },
            ]);
        },
        43361: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    default: function () {
                        return f;
                    },
                }));
            var a = n(97458),
                r = n(19523),
                i = n(52071),
                u = n(88966),
                o = n(53520),
                s = n(39668),
                l = n(94807),
                c = n(52983),
                d = function () {
                    var e = (0, o._)((0, c.useState)(''), 2),
                        t = e[0],
                        n = e[1];
                    return (0, a.jsx)('div', {
                        className: 'input-field',
                        children: (0, a.jsx)(l.Kx8, {
                            id: 'textarea-1',
                            value: t,
                            validationMessage: 'Cannot be empty.',
                            validate: function (e) {
                                return !!e.trim();
                            },
                            onChange: function (e) {
                                return n(e.currentTarget.value);
                            },
                            additionalAttributes: {required: !0},
                            isAutosize: !0,
                            children: (0, a.jsx)(l.__J, {htmlFor: 'textarea-1', children: 'Label'}),
                        }),
                    });
                },
                x = function (e) {
                    return (0, a.jsx)(
                        s.Z,
                        (0, u._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {Label, TextArea} from \'@coveord/plasma-react\';\nimport {useState} from \'react\';\n\nconst Demo = () => {\n    const [value, setValue] = useState(\'\');\n\n    return (\n        <div className="input-field">\n            <TextArea\n                id="textarea-1"\n                value={value}\n                validationMessage="Cannot be empty."\n                validate={(val) => !!val.trim()}\n                onChange={(e) => setValue(e.currentTarget.value)}\n                additionalAttributes={{required: true}}\n                isAutosize\n            >\n                <Label htmlFor="textarea-1">Label</Label>\n            </TextArea>\n        </div>\n    );\n};\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(d, {})},
                        ),
                    );
                },
                p = n(66809),
                f = function () {
                    return (0, a.jsx)(p.X, {
                        id: 'TextArea',
                        title: 'Text Area',
                        section: 'Form',
                        description:
                            'A text area allows users to enter and edit longer text, often on multiple lines or in a paragraph.',
                        sourcePath: '/packages/react/src/components/textarea/TextArea.tsx',
                        demo: (0, a.jsx)(x, {}),
                        propsMetadata: r.uZ,
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 25402));
        }),
            (_N_E = e.O()));
    },
]);
