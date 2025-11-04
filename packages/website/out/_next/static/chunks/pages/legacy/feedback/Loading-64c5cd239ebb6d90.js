(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [39570],
    {
        99260: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/feedback/Loading',
                function () {
                    return t(62687);
                },
            ]);
        },
        62687: function (n, e, t) {
            'use strict';
            (t.r(e),
                t.d(e, {
                    default: function () {
                        return m;
                    },
                }));
            var o = t(97458),
                i = t(19523),
                r = t(66809),
                a = t(52071),
                s = t(88966),
                c = t(39668),
                d = t(94807),
                u = function () {
                    return (0, o.jsx)(d.gbz, {});
                },
                p = function (n) {
                    return (0, o.jsx)(
                        c.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {Loading} from '@coveord/plasma-react';\n\nconst Demo = () => <Loading />;\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(u, {})},
                        ),
                    );
                },
                l = function () {
                    return (0, o.jsx)(d.gbz, {fullContent: !0});
                },
                f = function (n) {
                    return (0, o.jsx)(
                        c.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {Loading} from '@coveord/plasma-react';\n\nconst Demo = () => <Loading fullContent />;\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(l, {})},
                        ),
                    );
                },
                g = function () {
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(d.TKf, {size: 16}), (0, o.jsx)(d.TKf, {}), (0, o.jsx)(d.TKf, {size: 32})],
                    });
                },
                x = function (n) {
                    return (0, o.jsx)(
                        c.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {LoadingSpinner} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <>\n        <LoadingSpinner size={16} />\n        <LoadingSpinner />\n        <LoadingSpinner size={32} />\n    </>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(g, {})},
                        ),
                    );
                },
                m = function () {
                    return (0, o.jsx)(r.X, {
                        id: 'Loading',
                        title: 'Loading Spinner',
                        section: 'Feedback',
                        description: 'A loading spinner indicates that content or data is actively being loaded.',
                        demo: (0, o.jsx)(p, {center: !0}),
                        sourcePath: '/packages/react/src/components/loading/Loading.tsx',
                        propsMetadata: i.J$,
                        examples: {
                            fullContent: (0, o.jsx)(f, {center: !0, title: 'Vertically centered'}),
                            loadingSpinner: (0, o.jsx)(x, {
                                center: !0,
                                title: 'Loading spinner that can be used in other components',
                            }),
                        },
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 99260));
        }),
            (_N_E = n.O()));
    },
]);
