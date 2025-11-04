(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [22082],
    {
        30366: function (n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/FlatSelect',
                function () {
                    return e(72280);
                },
            ]);
        },
        72280: function (n, t, e) {
            'use strict';
            (e.r(t),
                e.d(t, {
                    default: function () {
                        return h;
                    },
                }));
            var o = e(97458),
                i = e(19523),
                p = e(52071),
                d = e(88966),
                c = e(39668),
                r = e(94807),
                l = function () {
                    return (0, o.jsx)(r.Hhi, {
                        id: 'flat-select-id',
                        options: [
                            {id: 'item-id-1', option: {content: 'Option 1'}},
                            {id: 'item-id-2', option: {content: 'Option 2'}},
                            {
                                id: 'item-id-3',
                                option: {content: 'Option 3'},
                                tooltip: {title: 'Option 3 tooltip', container: 'body', placement: 'bottom'},
                            },
                            {id: 'item-id-4', option: {content: 'Option 4'}, disabled: !0},
                        ],
                    });
                },
                s = function (n) {
                    return (0, o.jsx)(
                        c.Z,
                        (0, d._)(
                            (0, p._)(
                                {
                                    snippet:
                                        "import {FlatSelectConnected} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <FlatSelectConnected\n        id=\"flat-select-id\"\n        options={[\n            {\n                id: 'item-id-1',\n                option: {content: 'Option 1'},\n            },\n            {\n                id: 'item-id-2',\n                option: {content: 'Option 2'},\n            },\n            {\n                id: 'item-id-3',\n                option: {content: 'Option 3'},\n                tooltip: {\n                    title: 'Option 3 tooltip',\n                    container: 'body',\n                    placement: 'bottom',\n                },\n            },\n            {\n                id: 'item-id-4',\n                option: {content: 'Option 4'},\n                disabled: true,\n            },\n        ]}\n    />\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(l, {})},
                        ),
                    );
                },
                a = e(4778),
                m = function () {
                    return (0, o.jsx)(r.Hhi, {
                        id: 'flat-select-append-prepend-id',
                        options: [
                            {
                                id: 'item-prepend',
                                option: {content: 'Option 1'},
                                prepend: {content: (0, o.jsx)(a.ZombieSize16Px, {})},
                            },
                            {
                                id: 'item-append',
                                option: {content: 'Option 2'},
                                append: {content: (0, o.jsx)(a.ZombieSize16Px, {})},
                            },
                            {
                                id: 'item-append2',
                                option: {content: 'Disabled 3'},
                                append: {content: (0, o.jsx)(a.ZombieSize16Px, {})},
                                disabled: !0,
                            },
                        ],
                    });
                },
                u = function (n) {
                    return (0, o.jsx)(
                        c.Z,
                        (0, d._)(
                            (0, p._)(
                                {
                                    snippet:
                                        "import {FlatSelectConnected} from '@coveord/plasma-react';\nimport {ZombieSize16Px} from '@coveord/plasma-react-icons';\n\nconst Demo = () => (\n    <FlatSelectConnected\n        id=\"flat-select-append-prepend-id\"\n        options={[\n            {\n                id: 'item-prepend',\n                option: {content: 'Option 1'},\n                prepend: {content: <ZombieSize16Px />},\n            },\n            {\n                id: 'item-append',\n                option: {content: 'Option 2'},\n                append: {content: <ZombieSize16Px />},\n            },\n            {\n                id: 'item-append2',\n                option: {content: 'Disabled 3'},\n                append: {content: <ZombieSize16Px />},\n                disabled: true,\n            },\n        ]}\n    />\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(m, {})},
                        ),
                    );
                },
                x = function () {
                    return (0, o.jsx)(r.Hhi, {
                        id: 'flat-select-disabled',
                        options: [
                            {id: 'item-disabled-1', option: {content: 'Option 1'}},
                            {id: 'item-disabled-2', option: {content: 'Option 2'}},
                            {id: 'item-disabled-3', option: {content: 'Option 3'}},
                        ],
                        disabled: !0,
                    });
                },
                f = function (n) {
                    return (0, o.jsx)(
                        c.Z,
                        (0, d._)(
                            (0, p._)(
                                {
                                    snippet:
                                        "import {FlatSelectConnected} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <FlatSelectConnected\n        id=\"flat-select-disabled\"\n        options={[\n            {\n                id: 'item-disabled-1',\n                option: {content: 'Option 1'},\n            },\n            {\n                id: 'item-disabled-2',\n                option: {content: 'Option 2'},\n            },\n            {\n                id: 'item-disabled-3',\n                option: {content: 'Option 3'},\n            },\n        ]}\n        disabled\n    />\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(x, {})},
                        ),
                    );
                },
                b = function () {
                    return (0, o.jsx)(r.Hhi, {
                        id: 'flat-select-group',
                        options: [
                            {id: 'item-group-1', option: {content: 'Option 1'}},
                            {id: 'item-group-2', option: {content: 'Option 2'}},
                            {id: 'item-group-3', option: {content: 'Option 3'}},
                        ],
                        group: !0,
                    });
                },
                O = function (n) {
                    return (0, o.jsx)(
                        c.Z,
                        (0, d._)(
                            (0, p._)(
                                {
                                    snippet:
                                        "import {FlatSelectConnected} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <FlatSelectConnected\n        id=\"flat-select-group\"\n        options={[\n            {\n                id: 'item-group-1',\n                option: {content: 'Option 1'},\n            },\n            {\n                id: 'item-group-2',\n                option: {content: 'Option 2'},\n            },\n            {\n                id: 'item-group-3',\n                option: {content: 'Option 3'},\n            },\n        ]}\n        group\n    />\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(b, {})},
                        ),
                    );
                },
                j = function () {
                    return (0, o.jsx)(r.Hhi, {
                        id: 'flat-select-id',
                        options: [
                            {id: 'item-id-1', option: {content: (0, o.jsx)(a.Donut64Size24Px, {})}},
                            {id: 'item-id-2', option: {content: (0, o.jsx)(a.Donut64Size24Px, {})}},
                            {id: 'item-id-3', option: {content: (0, o.jsx)(a.Donut64Size24Px, {})}, disabled: !0},
                        ],
                    });
                },
                S = function (n) {
                    return (0, o.jsx)(
                        c.Z,
                        (0, d._)(
                            (0, p._)(
                                {
                                    snippet:
                                        "import {FlatSelectConnected} from '@coveord/plasma-react';\nimport {Donut64Size24Px} from '@coveord/plasma-react-icons';\n\nconst Demo = () => (\n    <FlatSelectConnected\n        id=\"flat-select-id\"\n        options={[\n            {\n                id: 'item-id-1',\n                option: {content: <Donut64Size24Px />},\n            },\n            {\n                id: 'item-id-2',\n                option: {content: <Donut64Size24Px />},\n            },\n            {\n                id: 'item-id-3',\n                option: {content: <Donut64Size24Px />},\n                disabled: true,\n            },\n        ]}\n    />\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(j, {})},
                        ),
                    );
                },
                _ = function () {
                    return (0, o.jsx)(r.Hhi, {
                        id: 'flat-select-option-picker',
                        options: [
                            {id: 'item-option-picker-1', option: {content: 'Option 1'}},
                            {id: 'item-option-picker-2', option: {content: 'Option 2'}},
                            {id: 'item-option-picker-3', option: {content: 'Option 3'}},
                        ],
                        optionPicker: !0,
                    });
                },
                D = function (n) {
                    return (0, o.jsx)(
                        c.Z,
                        (0, d._)(
                            (0, p._)(
                                {
                                    snippet:
                                        "import {FlatSelectConnected} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <FlatSelectConnected\n        id=\"flat-select-option-picker\"\n        options={[\n            {\n                id: 'item-option-picker-1',\n                option: {content: 'Option 1'},\n            },\n            {\n                id: 'item-option-picker-2',\n                option: {content: 'Option 2'},\n            },\n            {\n                id: 'item-option-picker-3',\n                option: {content: 'Option 3'},\n            },\n        ]}\n        optionPicker\n    />\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(_, {})},
                        ),
                    );
                },
                P = e(66809),
                h = function () {
                    return (0, o.jsx)(P.X, {
                        id: 'FlatSelectConnected',
                        title: 'Flat Select',
                        section: 'Form',
                        description:
                            'A flat select is a group of mutually exclusive buttons aligned horizontally. It is used to allow users to switch between interface displays or binary options.',
                        sourcePath: '/packages/react/src/components/flatSelect/FlatSelect.tsx',
                        demo: (0, o.jsx)(s, {center: !0}),
                        propsMetadata: i.o0,
                        examples: {
                            disabled: (0, o.jsx)(f, {center: !0, title: 'Disabled'}),
                            group: (0, o.jsx)(O, {center: !0, title: 'Grouped'}),
                            optionPicker: (0, o.jsx)(D, {center: !0, title: 'Option Picker'}),
                            appendPrepend: (0, o.jsx)(u, {center: !0, title: 'Append and prepend'}),
                            iconOnly: (0, o.jsx)(S, {center: !0, title: 'Icon only'}),
                        },
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 30366));
        }),
            (_N_E = n.O()));
    },
]);
