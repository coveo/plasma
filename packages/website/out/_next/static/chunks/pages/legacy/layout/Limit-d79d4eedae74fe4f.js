(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [36423],
    {
        559: function (t, i, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/Limit',
                function () {
                    return e(78260);
                },
            ]);
        },
        78260: function (t, i, e) {
            'use strict';
            (e.r(i),
                e.d(i, {
                    default: function () {
                        return _;
                    },
                }));
            var n = e(97458),
                o = e(19523),
                r = e(52071),
                a = e(88966),
                u = e(39668),
                l = e(94807),
                s = function () {
                    return (0, n.jsx)(l.cdV, {id: '\uD83E\uDD54', title: 'Limit example', usage: 42, limit: 100});
                },
                m = function (t) {
                    return (0, n.jsx)(
                        u.Z,
                        (0, a._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {Limit} from \'@coveord/plasma-react\';\n\nconst Demo = () => <Limit id="\uD83E\uDD54" title="Limit example" usage={42} limit={100} />;\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, n.jsx)(s, {})},
                        ),
                    );
                },
                c = function () {
                    return (0, n.jsx)(l.cdV, {
                        id: '\uD83D\uDCB5',
                        title: 'Supreme leader Snoke',
                        usage: 57,
                        isLimitEditable: !0,
                        limit: 100,
                    });
                },
                d = function (t) {
                    return (0, n.jsx)(
                        u.Z,
                        (0, a._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {Limit} from \'@coveord/plasma-react\';\n\nconst Demo = () => <Limit id="\uD83D\uDCB5" title="Supreme leader Snoke" usage={57} isLimitEditable limit={100} />;\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, n.jsx)(c, {})},
                        ),
                    );
                },
                p = function () {
                    return (0, n.jsx)(l.cdV, {
                        id: '\uD83D\uDC51',
                        title: 'Patate King',
                        usage: 42,
                        limit: 130,
                        limitLabel: 'Throttling limit',
                    });
                },
                D = function (t) {
                    return (0, n.jsx)(
                        u.Z,
                        (0, a._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {Limit} from \'@coveord/plasma-react\';\n\nconst Demo = () => <Limit id="\uD83D\uDC51" title="Patate King" usage={42} limit={130} limitLabel="Throttling limit" />;\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, n.jsx)(p, {})},
                        ),
                    );
                },
                f = function () {
                    return (0, n.jsx)(l.cdV, {
                        id: '❗',
                        title: 'Limit example',
                        usage: 100,
                        limit: 100,
                        isLimitTheGoalToReach: !0,
                    });
                },
                x = function (t) {
                    return (0, n.jsx)(
                        u.Z,
                        (0, a._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {Limit} from \'@coveord/plasma-react\';\n\nconst Demo = () => <Limit id="❗" title="Limit example" usage={100} limit={100} isLimitTheGoalToReach />;\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, n.jsx)(f, {})},
                        ),
                    );
                },
                h = function () {
                    return (0, n.jsx)(l.cdV, {
                        id: '\uD83D\uDC04',
                        title: 'Hey',
                        usage: 82,
                        isHistoryIncluded: !0,
                        limit: 100,
                        onHistoryIconClick: function () {
                            return alert('Patate!');
                        },
                    });
                },
                L = function (t) {
                    return (0, n.jsx)(
                        u.Z,
                        (0, a._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {Limit} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <Limit id="\uD83D\uDC04" title="Hey" usage={82} isHistoryIncluded limit={100} onHistoryIconClick={() => alert(\'Patate!\')} />\n);\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, n.jsx)(h, {})},
                        ),
                    );
                },
                j = e(66809),
                _ = function () {
                    return (0, n.jsx)(j.X, {
                        id: 'Limit',
                        sourcePath: '/packages/react/src/components/limit/Limit.tsx',
                        title: 'Limit card',
                        section: 'Layout',
                        description:
                            'A limit card displays the limit and usage of a resource. It includes a bar illustrating the usage against the limit.',
                        demo: (0, n.jsx)(m, {}),
                        propsMetadata: o.jS,
                        examples: {
                            withGoal: (0, n.jsx)(x, {title: 'With goal to reach'}),
                            withHistory: (0, n.jsx)(L, {title: 'With History'}),
                            withCustomValue: (0, n.jsx)(D, {title: 'With custom value'}),
                            isLimitEditable: (0, n.jsx)(d, {title: 'With editable limit'}),
                        },
                    });
                };
        },
    },
    function (t) {
        (t.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return t((t.s = 559));
        }),
            (_N_E = t.O()));
    },
]);
