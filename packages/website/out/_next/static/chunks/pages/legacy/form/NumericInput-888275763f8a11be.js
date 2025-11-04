(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [31834],
    {
        20717: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/NumericInput',
                function () {
                    return t(18941);
                },
            ]);
        },
        18941: function (n, e, t) {
            'use strict';
            (t.r(e),
                t.d(e, {
                    default: function () {
                        return f;
                    },
                }));
            var i = t(97458),
                u = t(19523),
                r = t(52071),
                c = t(88966),
                a = t(39668),
                s = t(94807),
                o = function () {
                    return (0, i.jsx)(s.dK0, {
                        id: 'numeric-1',
                        initialValue: 500,
                        step: 50,
                        min: 25,
                        max: 950,
                        maxLength: 3,
                        invalidMessage: 'The value must be between 25 and 950.',
                    });
                },
                d = function (n) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, c._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {NumericInputConnected} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <NumericInputConnected\n        id="numeric-1"\n        initialValue={500}\n        step={50}\n        min={25}\n        max={950}\n        maxLength={3}\n        invalidMessage="The value must be between 25 and 950."\n    />\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(o, {})},
                        ),
                    );
                },
                m = function () {
                    return (0, i.jsx)(s.dK0, {id: 'numeric-2', initialValue: 100, disabled: !0});
                },
                l = function (n) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, c._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {NumericInputConnected} from \'@coveord/plasma-react\';\n\nconst Demo = () => <NumericInputConnected id="numeric-2" initialValue={100} disabled />;\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(m, {})},
                        ),
                    );
                },
                p = t(66809),
                f = function () {
                    return (0, i.jsx)(p.X, {
                        id: 'NumericInputConnected',
                        title: 'Numeric Input',
                        section: 'Form',
                        description:
                            'A numeric input allows users to enter and edit numerical values, either manually or using an input stepper.',
                        sourcePath: '/packages/react/src/components/numericInput/NumericInputConnected.tsx',
                        propsMetadata: u.QI,
                        demo: (0, i.jsx)(d, {center: !0}),
                        examples: {disabled: (0, i.jsx)(l, {center: !0, title: 'Disabled'})},
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 20717));
        }),
            (_N_E = n.O()));
    },
]);
