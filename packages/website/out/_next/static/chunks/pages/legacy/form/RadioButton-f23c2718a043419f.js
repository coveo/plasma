(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [98892],
    {
        86842: function (n, e, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/RadioButton',
                function () {
                    return i(31403);
                },
            ]);
        },
        31403: function (n, e, i) {
            'use strict';
            (i.r(e),
                i.d(e, {
                    default: function () {
                        return h;
                    },
                }));
            var o = i(97458),
                a = i(19523),
                t = i(52071),
                d = i(88966),
                l = i(39668),
                s = i(94807),
                c = function () {
                    return (0, o.jsxs)(s.Ayv, {
                        id: 'radio-select-id',
                        valueOnMount: '1',
                        disabledValuesOnMount: ['3'],
                        disabledTooltip: 'This option is disabled',
                        children: [
                            (0, o.jsx)(s.Y8K, {
                                id: 'Option1',
                                name: 'enabledOptions',
                                value: '1',
                                children: (0, o.jsx)(s.__J, {children: 'Option 1'}),
                            }),
                            (0, o.jsxs)(s.Y8K, {
                                id: 'Option2',
                                name: 'enabledOptions',
                                value: '2',
                                children: [
                                    (0, o.jsx)(s.__J, {children: 'Option 2'}),
                                    (0, o.jsx)('div', {
                                        className: 'mod-align-with-radio-label',
                                        children: 'An optional description.',
                                    }),
                                ],
                            }),
                            (0, o.jsx)(s.Y8K, {
                                id: 'Option3',
                                name: 'enabledOptions',
                                value: '3',
                                children: (0, o.jsx)(s.__J, {children: 'Option 3'}),
                            }),
                        ],
                    });
                },
                r = function (n) {
                    return (0, o.jsx)(
                        l.Z,
                        (0, d._)(
                            (0, t._)(
                                {
                                    snippet:
                                        'import {RadioSelectConnected, Radio, Label} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <RadioSelectConnected\n        id="radio-select-id"\n        valueOnMount="1"\n        disabledValuesOnMount={[\'3\']}\n        disabledTooltip="This option is disabled"\n    >\n        <Radio id="Option1" name="enabledOptions" value="1">\n            <Label>Option 1</Label>\n        </Radio>\n        <Radio id="Option2" name="enabledOptions" value="2">\n            <Label>Option 2</Label>\n            <div className="mod-align-with-radio-label">An optional description.</div>\n        </Radio>\n        <Radio id="Option3" name="enabledOptions" value="3">\n            <Label>Option 3</Label>\n        </Radio>\n    </RadioSelectConnected>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(c, {})},
                        ),
                    );
                },
                p = function () {
                    return (0, o.jsxs)(s.Ayv, {
                        id: 'radio-card-select-example',
                        valueOnMount: '1',
                        className: 'flex flex-wrap',
                        disabledValuesOnMount: ['2'],
                        disabledTooltip: 'This option is disabled',
                        children: [
                            (0, o.jsxs)(s.ROx, {
                                id: 'Option1',
                                name: 'card-option',
                                value: '1',
                                children: [
                                    (0, o.jsx)('img', {className: 'mb2', src: 'https://via.placeholder.com/150x100'}),
                                    (0, o.jsx)(s.__J, {children: 'Option 1'}),
                                    (0, o.jsx)('div', {children: 'Description for the first option.'}),
                                ],
                            }),
                            (0, o.jsxs)(s.ROx, {
                                id: 'Option2',
                                name: 'card-option',
                                value: '2',
                                children: [
                                    (0, o.jsx)('img', {className: 'mb2', src: 'https://via.placeholder.com/150x100'}),
                                    (0, o.jsx)(s.__J, {children: 'Option 2'}),
                                    (0, o.jsx)('div', {children: 'Description for the second option.'}),
                                ],
                            }),
                            (0, o.jsxs)(s.ROx, {
                                id: 'Option3',
                                name: 'card-option',
                                value: '3',
                                children: [
                                    (0, o.jsx)('img', {className: 'mb2', src: 'https://via.placeholder.com/150x100'}),
                                    (0, o.jsx)(s.__J, {children: 'Option 3'}),
                                    (0, o.jsx)('div', {children: 'Description for the third option.'}),
                                ],
                            }),
                        ],
                    });
                },
                u = function (n) {
                    return (0, o.jsx)(
                        l.Z,
                        (0, d._)(
                            (0, t._)(
                                {
                                    snippet:
                                        'import {RadioSelectConnected, RadioCard, Label} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <RadioSelectConnected\n        id="radio-card-select-example"\n        valueOnMount="1"\n        className="flex flex-wrap"\n        disabledValuesOnMount={[\'2\']}\n        disabledTooltip="This option is disabled"\n    >\n        <RadioCard id="Option1" name="card-option" value="1">\n            <img className="mb2" src="https://via.placeholder.com/150x100" />\n            <Label>Option 1</Label>\n            <div>Description for the first option.</div>\n        </RadioCard>\n        <RadioCard id="Option2" name="card-option" value="2">\n            <img className="mb2" src="https://via.placeholder.com/150x100" />\n            <Label>Option 2</Label>\n            <div>Description for the second option.</div>\n        </RadioCard>\n        <RadioCard id="Option3" name="card-option" value="3">\n            <img className="mb2" src="https://via.placeholder.com/150x100" />\n            <Label>Option 3</Label>\n            <div>Description for the third option.</div>\n        </RadioCard>\n    </RadioSelectConnected>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(p, {})},
                        ),
                    );
                },
                m = i(66809),
                h = function () {
                    return (0, o.jsx)(m.X, {
                        id: 'RadioSelectConnected',
                        title: 'Radio Buttons',
                        section: 'Form',
                        description:
                            'A radio button allows users to select exactly one option from a list of mutually exclusive options.',
                        sourcePath: '/packages/react/src/components/radio/RadioSelectConnected.tsx',
                        demo: (0, o.jsx)(r, {center: !0}),
                        propsMetadata: a.f0,
                        examples: {radioCard: (0, o.jsx)(u, {center: !0, title: 'Radio cards'})},
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 86842));
        }),
            (_N_E = n.O()));
    },
]);
