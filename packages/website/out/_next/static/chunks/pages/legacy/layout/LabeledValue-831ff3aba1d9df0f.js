(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [80169],
    {
        69646: function (e, l, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/LabeledValue',
                function () {
                    return a(23110);
                },
            ]);
        },
        23110: function (e, l, a) {
            'use strict';
            (a.r(l),
                a.d(l, {
                    default: function () {
                        return h;
                    },
                }));
            var o = a(97458),
                n = a(19523),
                t = a(52071),
                u = a(88966),
                r = a(39668),
                i = a(94807),
                c = function () {
                    return (0, o.jsx)(i.OKt, {label: 'Super cool label', value: 'Value under the super cool label'});
                },
                s = function (e) {
                    return (0, o.jsx)(
                        r.Z,
                        (0, u._)(
                            (0, t._)(
                                {
                                    snippet:
                                        'import {LabeledValue} from \'@coveord/plasma-react\';\n\nconst Demo = () => <LabeledValue label="Super cool label" value="Value under the super cool label" />;\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(c, {})},
                        ),
                    );
                },
                b = function () {
                    return (0, o.jsxs)('div', {
                        className: 'flex flex-wrap',
                        children: [
                            (0, o.jsx)(i.OKt, {
                                label: 'Super cool label taking the full row',
                                value: 'Value under the super cool label',
                                fullRow: !0,
                            }),
                            (0, o.jsx)(i.OKt, {label: 'Too much bubbly debat at the office', value: 'WE ARE TWO'}),
                            (0, o.jsx)(i.OKt, {label: 'Buddy', value: 'TO DANCE'}),
                        ],
                    });
                },
                d = function (e) {
                    return (0, o.jsx)(
                        r.Z,
                        (0, u._)(
                            (0, t._)(
                                {
                                    snippet:
                                        'import {LabeledValue} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <div className="flex flex-wrap">\n        <LabeledValue label="Super cool label taking the full row" value="Value under the super cool label" fullRow />\n        <LabeledValue label="Too much bubbly debat at the office" value="WE ARE TWO" />\n        <LabeledValue label="Buddy" value="TO DANCE" />\n    </div>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(b, {})},
                        ),
                    );
                },
                f = function () {
                    return (0, o.jsx)(i.OKt, {
                        label: 'Super cool label',
                        value: 'Value under the super cool label',
                        information: 'Some valuable informations go here.',
                        informationPlacement: i.TQc.Bottom,
                    });
                },
                p = function (e) {
                    return (0, o.jsx)(
                        r.Z,
                        (0, u._)(
                            (0, t._)(
                                {
                                    snippet:
                                        'import {LabeledValue, TooltipPlacement} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <LabeledValue\n        label="Super cool label"\n        value="Value under the super cool label"\n        information={\'Some valuable informations go here.\'}\n        informationPlacement={TooltipPlacement.Bottom}\n    />\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(f, {})},
                        ),
                    );
                },
                m = a(66809),
                h = function () {
                    return (0, o.jsx)(m.X, {
                        id: 'LabeledValue',
                        sourcePath: '/packages/react/src/components/labeledValue/LabeledValue.tsx',
                        title: 'Labeled value',
                        section: 'Layout',
                        thumbnail: 'placeholder',
                        propsMetadata: n._1,
                        demo: (0, o.jsx)(s, {}),
                        examples: {
                            withInformation: (0, o.jsx)(p, {title: 'With more information (tooltip)'}),
                            fullRow: (0, o.jsx)(d, {title: 'With fullRow option'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 69646));
        }),
            (_N_E = e.O()));
    },
]);
