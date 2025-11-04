(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [37335],
    {
        3512: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/advanced/LinkSvg',
                function () {
                    return t(24416);
                },
            ]);
        },
        24416: function (n, e, t) {
            'use strict';
            (t.r(e),
                t.d(e, {
                    default: function () {
                        return v;
                    },
                }));
            var o = t(97458),
                r = t(19523),
                c = t(52071),
                i = t(88966),
                a = t(39668),
                s = t(94807),
                u = t(4778),
                p = function () {
                    return (0, o.jsx)(s.KyN, {
                        url: 'https://www.coveo.com/',
                        icon: u.ExternalSize16Px,
                        children: 'Learn more about Coveo',
                    });
                },
                d = function (n) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, i._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {LinkSvg} from '@coveord/plasma-react';\nimport {ExternalSize16Px} from '@coveord/plasma-react-icons';\n\nconst Demo = () => (\n    <LinkSvg url=\"https://www.coveo.com/\" icon={ExternalSize16Px}>\n        Learn more about Coveo\n    </LinkSvg>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(p, {})},
                        ),
                    );
                },
                l = t(66809),
                v = function () {
                    return (0, o.jsx)(l.X, {
                        id: 'LinkSvg',
                        title: 'Link SVG',
                        section: 'Advanced',
                        description: 'A SVG that acts as a link.',
                        demo: (0, o.jsx)(d, {center: !0}),
                        sourcePath: '/packages/react/src/components/svg/LinkSvg.tsx',
                        propsMetadata: r.DA,
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 3512));
        }),
            (_N_E = n.O()));
    },
]);
