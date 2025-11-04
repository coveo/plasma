(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [87839],
    {
        68837: function (e, o, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/feedback/ColorBar',
                function () {
                    return t(6198);
                },
            ]);
        },
        6198: function (e, o, t) {
            'use strict';
            (t.r(o),
                t.d(o, {
                    default: function () {
                        return h;
                    },
                }));
            var r = t(97458),
                n = t(19523),
                c = t(52071),
                f = t(88966),
                l = t(39668),
                i = t(94807),
                a = function () {
                    return (0, r.jsx)(i.UBh, {
                        widthPerColor: {'#1372ec': 30, '#ffe300': 15, '#f05245': 10, '#1cebcf': 25, '#7d458f': 20},
                        tooltipPerColor: {
                            '#1372ec': {title: 'blue', placement: 'top'},
                            '#ffe300': {title: 'yellow', placement: 'top'},
                        },
                    });
                },
                s = function (e) {
                    return (0, r.jsx)(
                        l.Z,
                        (0, f._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {ColorBar} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <ColorBar\n        widthPerColor={{'#1372ec': 30, '#ffe300': 15, '#f05245': 10, '#1cebcf': 25, '#7d458f': 20}}\n        tooltipPerColor={{\n            '#1372ec': {title: 'blue', placement: 'top'},\n            '#ffe300': {title: 'yellow', placement: 'top'},\n        }}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(a, {})},
                        ),
                    );
                },
                p = function () {
                    return (0, r.jsx)(i.UBh, {
                        widthPerColor: {'#1372ec': 200, '#ffe300': 50, '#f05245': 300, '#1cebcf': 25, '#7d458f': 1e3},
                    });
                },
                u = function (e) {
                    return (0, r.jsx)(
                        l.Z,
                        (0, f._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {ColorBar} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <ColorBar widthPerColor={{'#1372ec': 200, '#ffe300': 50, '#f05245': 300, '#1cebcf': 25, '#7d458f': 1000}} />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(p, {})},
                        ),
                    );
                },
                d = function () {
                    return (0, r.jsx)(i.UBh, {
                        widthPerColor: {'#1372ec': 20, '#ffe300': 5, '#f05245': 10, '#1cebcf': 5, '#7d458f': 20},
                    });
                },
                m = function (e) {
                    return (0, r.jsx)(
                        l.Z,
                        (0, f._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {ColorBar} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <ColorBar widthPerColor={{'#1372ec': 20, '#ffe300': 5, '#f05245': 10, '#1cebcf': 5, '#7d458f': 20}} />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(d, {})},
                        ),
                    );
                },
                C = t(66809),
                h = function () {
                    return (0, r.jsx)(C.X, {
                        id: 'ColorBar',
                        title: 'Color Bar',
                        section: 'Feedback',
                        description: 'A color bar is used to indicate the ratio between things.',
                        demo: (0, r.jsx)(s, {}),
                        sourcePath: '/packages/react/src/components/colorBar/ColorBar.tsx',
                        propsMetadata: n.Yq,
                        examples: {
                            partial: (0, r.jsx)(m, {title: 'Partially filled'}),
                            overflow: (0, r.jsx)(u, {title: 'Overflow'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 68837));
        }),
            (_N_E = e.O()));
    },
]);
