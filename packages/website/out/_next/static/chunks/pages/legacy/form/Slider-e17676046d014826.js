(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38109],
    {
        79920: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/Slider',
                function () {
                    return t(86285);
                },
            ]);
        },
        86285: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    default: function () {
                        return j;
                    },
                }));
            var a = t(97458),
                i = t(19523),
                l = t(52071),
                r = t(88966),
                o = t(39668),
                s = t(94807),
                u = function () {
                    return (0, a.jsx)(s.iRW, {
                        id: '\uD83C\uDF44',
                        hasTooltip: !0,
                        step: 25,
                        marks: {0: 'Lower', 50: 'Middle', 100: 'Higher'},
                        initialValue: 50,
                        appendValueFormatter: function (e) {
                            return ''.concat(e, '$');
                        },
                    });
                },
                d = function (e) {
                    return (0, a.jsx)(
                        o.Z,
                        (0, r._)(
                            (0, l._)(
                                {
                                    snippet:
                                        "import {Slider} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <Slider\n        id=\"\uD83C\uDF44\"\n        hasTooltip\n        step={25}\n        marks={{\n            0: 'Lower',\n            50: 'Middle',\n            100: 'Higher',\n        }}\n        initialValue={50}\n        appendValueFormatter={(value: number) => `${value}$`}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(u, {})},
                        ),
                    );
                },
                p = function (e) {
                    var n = e.value,
                        t = e.label;
                    return (0, a.jsxs)('div', {
                        style: {textAlign: 'center'},
                        children: [
                            (0, a.jsx)('label', {
                                style: {display: 'block', marginBottom: '10px', textAlign: 'center'},
                                children: t,
                            }),
                            (0, a.jsx)('span', {style: {margin: '0 auto'}, children: n}),
                        ],
                    });
                },
                c = function () {
                    return (0, a.jsx)(s.iRW, {
                        id: 'slider-append',
                        min: -50,
                        max: 50,
                        appendValueFormatter: function (e, n) {
                            var t = ''.concat(e + 50, '%'),
                                i = 'Right Label';
                            return (
                                n === s.odX.left && ((t = ''.concat(50 - e, '%')), (i = 'Left Label')),
                                (0, a.jsx)(p, {value: t, label: i})
                            );
                        },
                        appendValue: s.odX.both,
                    });
                },
                m = function (e) {
                    return (0, a.jsx)(
                        o.Z,
                        (0, r._)(
                            (0, l._)(
                                {
                                    snippet:
                                        "import {AppendedValueSide, Slider} from '@coveord/plasma-react';\nimport {FunctionComponent} from 'react';\n\nconst AppendLabel: FunctionComponent<{value: string; label: string}> = ({value, label}) => (\n    <div style={{textAlign: 'center'}}>\n        <label style={{display: 'block', marginBottom: '10px', textAlign: 'center'}}>{label}</label>\n        <span style={{margin: '0 auto'}}>{value}</span>\n    </div>\n);\n\nconst Demo = () => {\n    const appendValueFormatter = (value: number, side: string) => {\n        let formattedValue = `${value + 50}%`;\n        let valueLabel = 'Right Label';\n\n        if (side === AppendedValueSide.left) {\n            formattedValue = `${50 - value}%`;\n            valueLabel = 'Left Label';\n        }\n\n        return <AppendLabel value={formattedValue} label={valueLabel} />;\n    };\n\n    return (\n        <Slider\n            id=\"slider-append\"\n            min={-50}\n            max={50}\n            appendValueFormatter={appendValueFormatter}\n            appendValue={AppendedValueSide.both}\n        />\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(c, {})},
                        ),
                    );
                },
                f = function () {
                    return (0, a.jsx)(s.iRW, {
                        id: 'asymetric-slider',
                        min: -2e3,
                        max: 1e4,
                        initialValue: 2e3,
                        marks: {'-2000': '-2000', 2e3: '2000', 0: '0', 1e4: '10,000'},
                        hasTooltip: !0,
                        appendValue: !0,
                    });
                },
                h = function (e) {
                    return (0, a.jsx)(
                        o.Z,
                        (0, r._)(
                            (0, l._)(
                                {
                                    snippet:
                                        "import {Slider} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <Slider\n        id=\"asymetric-slider\"\n        min={-2000}\n        max={10000}\n        initialValue={2000}\n        marks={{'-2000': '-2000', 2000: '2000', 0: '0', 10000: '10,000'}}\n        hasTooltip\n        appendValue\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(f, {})},
                        ),
                    );
                },
                x = t(53520),
                v = t(52983),
                V = function () {
                    var e = (0, x._)((0, v.useState)(0), 2),
                        n = e[0],
                        t = e[1];
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(s.iRW, {
                                id: 'slider-on-change',
                                min: -100,
                                max: 100,
                                marks: {'-100': '-100%', '-50': '-50%', 0: '0', 50: '50%', 100: '100%'},
                                step: 5,
                                initialValue: 0,
                                onChange: function (e) {
                                    t(e);
                                },
                                hasTooltip: !0,
                                customTooltip: function () {
                                    return (0, a.jsxs)('span', {
                                        children: ['this custom tooltip shows the slider current value of ', n],
                                    });
                                },
                            }),
                            'The current value is ',
                            n,
                        ],
                    });
                },
                b = function (e) {
                    return (0, a.jsx)(
                        o.Z,
                        (0, r._)(
                            (0, l._)(
                                {
                                    snippet:
                                        "import {Slider} from '@coveord/plasma-react';\nimport {useState} from 'react';\n\nconst Demo = () => {\n    const initialValue = 0;\n    const [value, setValue] = useState(initialValue);\n    return (\n        <>\n            <Slider\n                id=\"slider-on-change\"\n                min={-100}\n                max={100}\n                marks={{\n                    '-100': '-100%',\n                    '-50': '-50%',\n                    0: '0',\n                    50: '50%',\n                    100: '100%',\n                }}\n                step={5}\n                initialValue={initialValue}\n                onChange={(currentValue) => {\n                    setValue(currentValue);\n                }}\n                hasTooltip\n                customTooltip={() => <span>this custom tooltip shows the slider current value of {value}</span>}\n            />\n            The current value is {value}\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(V, {})},
                        ),
                    );
                },
                g = t(66809),
                j = function () {
                    return (0, a.jsx)(g.X, {
                        id: 'Slider',
                        title: 'Slider',
                        section: 'Form',
                        description:
                            'A slider offers a quick and visual way for users to select a value within a given range.',
                        sourcePath: '/packages/react/src/components/slider/Slider.tsx',
                        demo: (0, a.jsx)(d, {}),
                        propsMetadata: i.q3,
                        examples: {
                            asymetric: (0, a.jsx)(h, {title: 'Asymetric'}),
                            onChange: (0, a.jsx)(b, {title: 'Change handler'}),
                            append: (0, a.jsx)(m, {title: 'Append values'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 79920));
        }),
            (_N_E = e.O()));
    },
]);
