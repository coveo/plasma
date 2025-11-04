(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47828],
    {
        36113: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/feedback/LastUpdated',
                function () {
                    return n(73017);
                },
            ]);
        },
        73017: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    default: function () {
                        return l;
                    },
                }));
            var a = n(97458),
                s = n(19523),
                o = n(52071),
                i = n(88966),
                r = n(39668),
                d = n(94807),
                c = function () {
                    return (0, a.jsx)(d.O9T, {});
                },
                p = function (e) {
                    return (0, a.jsx)(
                        r.Z,
                        (0, i._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {LastUpdated} from '@coveord/plasma-react';\n\nconst Demo = () => <LastUpdated />;\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(c, {})},
                        ),
                    );
                },
                u = function () {
                    var e = new Date(new Date().getTime() - 36e5);
                    return (0, a.jsx)(d.O9T, {time: e, label: 'Derni\xe8re modification \xe0'});
                },
                f = function (e) {
                    return (0, a.jsx)(
                        r.Z,
                        (0, i._)(
                            (0, o._)(
                                {
                                    snippet:
                                        'import {LastUpdated} from \'@coveord/plasma-react\';\n\nconst ONE_HOUR = 60 * 60 * 1000;\n\nconst Demo = () => {\n    const OneHourAgo = new Date(new Date().getTime() - ONE_HOUR);\n    return <LastUpdated time={OneHourAgo} label="Derni\xe8re modification \xe0" />;\n};\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(u, {})},
                        ),
                    );
                },
                m = n(66809),
                l = function () {
                    return (0, a.jsx)(m.X, {
                        id: 'LastUpdated',
                        title: 'Last Updated',
                        section: 'Feedback',
                        description:
                            'A “last updated” string displays the time a set of data has been last updated by a system.',
                        demo: (0, a.jsx)(p, {}),
                        sourcePath: '/packages/react/src/components/lastUpdated/LastUpdated.tsx',
                        propsMetadata: s.W3,
                        examples: {specificTime: (0, a.jsx)(f, {title: 'Specific date'})},
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 36113));
        }),
            (_N_E = e.O()));
    },
]);
