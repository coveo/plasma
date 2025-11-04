(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [78785],
    {
        33009: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/MultiSelect',
                function () {
                    return n(62331);
                },
            ]);
        },
        62331: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    default: function () {
                        return h;
                    },
                }));
            var i = n(97458),
                l = n(19523),
                a = n(52071),
                o = n(88966),
                u = n(39668),
                s = n(94807),
                r = function () {
                    return (0, i.jsx)(s.oXo, {
                        id: 'mutli-select-1',
                        items: [
                            {value: 'one', displayValue: 'Option 1'},
                            {value: 'two', displayValue: 'Option 2'},
                            {value: 'three', displayValue: 'Option 3'},
                        ],
                    });
                },
                c = function (e) {
                    return (0, i.jsx)(
                        u.Z,
                        (0, o._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {MultiSelectConnected} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <MultiSelectConnected\n        id=\"mutli-select-1\"\n        items={[\n            {value: 'one', displayValue: 'Option 1'},\n            {value: 'two', displayValue: 'Option 2'},\n            {value: 'three', displayValue: 'Option 3'},\n        ]}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(r, {})},
                        ),
                    );
                },
                p = function () {
                    return (0, i.jsx)(s._Ch, {
                        id: 'mutli-select-2',
                        customValues: !0,
                        items: [
                            {value: 'one', displayValue: 'Option 1'},
                            {value: 'two', displayValue: 'Option 2'},
                            {value: 'three', displayValue: 'Option 3'},
                        ],
                    });
                },
                d = function (e) {
                    return (0, i.jsx)(
                        u.Z,
                        (0, o._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {MultiSelectWithFilter} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <MultiSelectWithFilter\n        id=\"mutli-select-2\"\n        customValues\n        items={[\n            {value: 'one', displayValue: 'Option 1'},\n            {value: 'two', displayValue: 'Option 2'},\n            {value: 'three', displayValue: 'Option 3'},\n        ]}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(p, {})},
                        ),
                    );
                },
                m = function () {
                    return (0, i.jsx)(s.xnF, {
                        id: 'multi-select-3',
                        items: [
                            {value: '1', displayValue: 'Option 1'},
                            {value: '2', displayValue: 'Option 2'},
                            {value: '3', displayValue: 'Option 3'},
                            {value: '4', displayValue: 'Option 4'},
                            {value: '5', displayValue: 'Option 5'},
                        ],
                        options: [
                            {id: 'all', option: {content: 'All'}, selected: !0},
                            {id: 'even', option: {content: 'Even'}},
                            {id: 'odd', option: {content: 'Odd'}},
                        ],
                        matchPredicate: function (e, t) {
                            var n = parseInt(t.value, 10);
                            switch (e) {
                                case 'even':
                                    return n % 2 == 0;
                                case 'odd':
                                    return n % 2 == 1;
                                default:
                                    return !0;
                            }
                        },
                    });
                },
                v = function (e) {
                    return (0, i.jsx)(
                        u.Z,
                        (0, o._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {IItemBoxProps, MultiSelectWithPredicate} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <MultiSelectWithPredicate\n        id=\"multi-select-3\"\n        items={[\n            {value: '1', displayValue: 'Option 1'},\n            {value: '2', displayValue: 'Option 2'},\n            {value: '3', displayValue: 'Option 3'},\n            {value: '4', displayValue: 'Option 4'},\n            {value: '5', displayValue: 'Option 5'},\n        ]}\n        options={[\n            {id: 'all', option: {content: 'All'}, selected: true},\n            {id: 'even', option: {content: 'Even'}},\n            {id: 'odd', option: {content: 'Odd'}},\n        ]}\n        matchPredicate={(predicate: string, item: IItemBoxProps) => {\n            const value = parseInt(item.value, 10);\n            switch (predicate) {\n                case 'even':\n                    return value % 2 === 0;\n                case 'odd':\n                    return value % 2 === 1;\n                default:\n                    return true;\n            }\n        }}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(m, {})},
                        ),
                    );
                },
                f = n(66809),
                h = function () {
                    return (0, i.jsx)(f.X, {
                        id: 'MultiSelectConnected',
                        title: 'Multi Select',
                        section: 'Form',
                        description:
                            'A multi select allows users to select multiple options from a list. It is typically used when there are a large number of options.',
                        sourcePath: '/packages/react/src/components/select/MultiSelectConnected.tsx',
                        demo: (0, i.jsx)(c, {center: !0}),
                        propsMetadata: l.rL,
                        examples: {
                            withFilter: (0, i.jsx)(d, {center: !0, title: 'With a filter and custom values'}),
                            withPredicates: (0, i.jsx)(v, {center: !0, title: 'With predicates'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 33009));
        }),
            (_N_E = e.O()));
    },
]);
