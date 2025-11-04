(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [77970],
    {
        23536: function (t, n, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/ActionableItem',
                function () {
                    return e(56449);
                },
            ]);
        },
        56449: function (t, n, e) {
            'use strict';
            (e.r(n),
                e.d(n, {
                    default: function () {
                        return m;
                    },
                }));
            var o = e(97458),
                i = e(19523),
                c = e(52071),
                r = e(88966),
                a = e(39668),
                u = e(94807),
                l = function () {
                    return (0, o.jsx)(u.xxN, {
                        id: '\uD83C\uDD94',
                        onItemClick: function () {
                            return alert('you triggered the main button');
                        },
                        actions: [
                            {
                                value: 'action 1',
                                onOptionClick: function () {
                                    return alert('you triggered the first action');
                                },
                            },
                            {
                                value: 'action 2',
                                onOptionClick: function () {
                                    return alert('you triggered the second action');
                                },
                            },
                        ],
                        children: 'click on the dots',
                    });
                },
                s = function (t) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, r._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {ActionableItem} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <ActionableItem\n        id=\"\uD83C\uDD94\"\n        onItemClick={() => alert('you triggered the main button')}\n        actions={[\n            {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},\n            {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},\n        ]}\n    >\n        click on the dots\n    </ActionableItem>\n);\nexport default Demo;\n",
                                },
                                t,
                            ),
                            {children: (0, o.jsx)(l, {})},
                        ),
                    );
                },
                d = e(66809),
                m = function () {
                    return (0, o.jsx)(d.X, {
                        id: 'ActionableItem',
                        title: 'Actionable Item',
                        section: 'Form',
                        description:
                            'An actionable item is a dropdown menu listing actions associated with an element.',
                        demo: (0, o.jsx)(s, {center: !0}),
                        propsMetadata: i.s6,
                        sourcePath: '/packages/react/src/components/actionable-item/ActionableItem.tsx',
                    });
                };
        },
    },
    function (t) {
        (t.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return t((t.s = 23536));
        }),
            (_N_E = t.O()));
    },
]);
