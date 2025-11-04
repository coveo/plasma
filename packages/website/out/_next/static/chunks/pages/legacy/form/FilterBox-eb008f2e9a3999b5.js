(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71732],
    {
        56451: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/FilterBox',
                function () {
                    return n(65018);
                },
            ]);
        },
        65018: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    default: function () {
                        return _;
                    },
                }));
            var o = n(97458),
                r = n(19523),
                i = n(52071),
                d = n(88966),
                l = n(39668),
                c = n(94807),
                s = function () {
                    return (0, o.jsx)(c.ZqF, {id: 'filter-box-id-1', filterPlaceholder: 'Custom Placeholder'});
                },
                a = function (e) {
                    return (0, o.jsx)(
                        l.Z,
                        (0, d._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {FilterBoxConnected} from \'@coveord/plasma-react\';\n\nconst Demo = () => <FilterBoxConnected id="filter-box-id-1" filterPlaceholder="Custom Placeholder" />;\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(s, {})},
                        ),
                    );
                },
                x = function () {
                    return (0, o.jsx)(c.ZqF, {id: 'filter-box-id-3', disabled: !0});
                },
                u = function (e) {
                    return (0, o.jsx)(
                        l.Z,
                        (0, d._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {FilterBoxConnected} from \'@coveord/plasma-react\';\n\nconst Demo = () => <FilterBoxConnected id="filter-box-id-3" disabled />;\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(x, {})},
                        ),
                    );
                },
                f = function () {
                    return (0, o.jsx)(c.ZqF, {id: 'filter-box-id-2', maxWidth: 160});
                },
                m = function (e) {
                    return (0, o.jsx)(
                        l.Z,
                        (0, d._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {FilterBoxConnected} from \'@coveord/plasma-react\';\n\nconst Demo = () => <FilterBoxConnected id="filter-box-id-2" maxWidth={160} />;\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(f, {})},
                        ),
                    );
                },
                p = n(66809),
                _ = function () {
                    return (0, o.jsx)(p.X, {
                        id: 'FilterBoxConnected',
                        title: 'Filter Box',
                        section: 'Form',
                        description:
                            'A filter box allows users to enter text to filter data. It is frequently used with tables and dropdown menus.',
                        sourcePath: '/packages/react/src/components/filterBox/FilterBoxConnected.tsx',
                        demo: (0, o.jsx)(a, {center: !0}),
                        propsMetadata: r.M_,
                        examples: {
                            maxWidth: (0, o.jsx)(m, {center: !0, title: 'Maximum width'}),
                            disabled: (0, o.jsx)(u, {center: !0, title: 'Disabled'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 56451));
        }),
            (_N_E = e.O()));
    },
]);
