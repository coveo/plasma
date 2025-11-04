(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71486],
    {
        13436: function (e, o, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/ColorPicker',
                function () {
                    return r(77349);
                },
            ]);
        },
        77349: function (e, o, r) {
            'use strict';
            (r.r(o),
                r.d(o, {
                    default: function () {
                        return x;
                    },
                }));
            var t = r(97458),
                n = r(19523),
                c = r(52071),
                l = r(88966),
                i = r(39668),
                s = r(94807),
                a = function () {
                    return (0, t.jsx)(s.zH8, {
                        id: 'color-picker-id',
                        defaultColor: '#F37231',
                        onChangeComplete: function (e) {
                            return console.log(e);
                        },
                    });
                },
                u = function (e) {
                    return (0, t.jsx)(
                        i.Z,
                        (0, l._)(
                            (0, c._)(
                                {
                                    snippet:
                                        'import {ColorPicker} from \'@coveord/plasma-react\';\nimport {ColorResult} from \'react-color\';\n\nconst Demo = () => {\n    const logColor = (color: ColorResult) => console.log(color);\n    return <ColorPicker id="color-picker-id" defaultColor="#F37231" onChangeComplete={logColor} />;\n};\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, t.jsx)(a, {})},
                        ),
                    );
                },
                d = function () {
                    return (0, t.jsx)(s.zH8, {
                        id: 'color-picker-id-2',
                        styles: {default: {controls: {display: 'none'}}},
                    });
                },
                p = function (e) {
                    return (0, t.jsx)(
                        i.Z,
                        (0, l._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {ColorPicker} from '@coveord/plasma-react';\n\nconst Demo = () => <ColorPicker id=\"color-picker-id-2\" styles={{default: {controls: {display: 'none'}}}} />;\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, t.jsx)(d, {})},
                        ),
                    );
                },
                f = r(48692),
                m = function () {
                    var e = (0, f.v9)(function (e) {
                        return s.VW_.getValue(e, {id: 'color-picker-id-3'});
                    });
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(s.zH8, {id: 'color-picker-id-3'}), 'Selected value: ', e],
                    });
                },
                k = function (e) {
                    return (0, t.jsx)(
                        i.Z,
                        (0, l._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {useSelector} from 'react-redux';\nimport {ColorPicker, PlasmaState, InputSelectors} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const selected = useSelector((state: PlasmaState) =>\n        InputSelectors.getValue(state, {\n            id: 'color-picker-id-3',\n        }),\n    );\n    return (\n        <>\n            <ColorPicker id=\"color-picker-id-3\" />\n            Selected value: {selected}\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, t.jsx)(m, {})},
                        ),
                    );
                },
                C = r(66809),
                x = function () {
                    return (0, t.jsx)(C.X, {
                        id: 'ColorPicker',
                        title: 'Color Picker',
                        section: 'Form',
                        description: (0, t.jsxs)(t.Fragment, {
                            children: [
                                'A color picker is a visual interface that allows users to select a color. Built using',
                                ' ',
                                (0, t.jsx)('a', {
                                    href: 'https://github.com/casesandberg/react-color/',
                                    children: 'React Color',
                                }),
                            ],
                        }),
                        sourcePath: '/packages/react/src/components/color-picker/ColorPicker.tsx',
                        demo: (0, t.jsx)(u, {center: !0}),
                        propsMetadata: n.ud,
                        examples: {
                            hiddenControls: (0, t.jsx)(p, {center: !0, title: 'Hidden Controls'}),
                            selector: (0, t.jsx)(k, {center: !0, title: 'Selector'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 13436));
        }),
            (_N_E = e.O()));
    },
]);
