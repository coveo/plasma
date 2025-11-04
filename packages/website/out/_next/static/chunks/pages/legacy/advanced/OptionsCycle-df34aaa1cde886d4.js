(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [45561],
    {
        27377: function (n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/advanced/OptionsCycle',
                function () {
                    return e(34937);
                },
            ]);
        },
        34937: function (n, t, e) {
            'use strict';
            (e.r(t),
                e.d(t, {
                    default: function () {
                        return O;
                    },
                }));
            var o = e(97458),
                i = e(19523),
                s = e(52071),
                c = e(88966),
                r = e(39668),
                p = e(94807),
                l = function () {
                    return (0, o.jsx)(p.Dcm, {
                        id: 'Cycle-1',
                        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                    });
                },
                a = function (n) {
                    return (0, o.jsx)(
                        r.Z,
                        (0, c._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {OptionsCycleConnected} from '@coveord/plasma-react';\n\nconst Demo = () => <OptionsCycleConnected id=\"Cycle-1\" options={['Option 1', 'Option 2', 'Option 3', 'Option 4']} />;\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(l, {})},
                        ),
                    );
                },
                u = function () {
                    return (0, o.jsx)(p.Dcm, {
                        id: 'Cycle-1',
                        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                        previousClassName: 'btn mod-border w4 center',
                        buttonClassName: 'btn ml1',
                        nextClassName: 'btn mod-border ml1 w4 center',
                    });
                },
                d = function (n) {
                    return (0, o.jsx)(
                        r.Z,
                        (0, c._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {OptionsCycleConnected} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <OptionsCycleConnected\n        id=\"Cycle-1\"\n        options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}\n        previousClassName=\"btn mod-border w4 center\"\n        buttonClassName=\"btn ml1\"\n        nextClassName=\"btn mod-border ml1 w4 center\"\n    />\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, o.jsx)(u, {})},
                        ),
                    );
                },
                m = e(66809),
                O = function () {
                    return (0, o.jsx)(m.X, {
                        id: 'OptionsCycle',
                        title: 'Options Cycle',
                        section: 'Advanced',
                        description:
                            'Allows to cycle through an ordered list of options using right-left arrow buttons.',
                        demo: (0, o.jsx)(a, {center: !0}),
                        sourcePath: '/packages/react/src/components/optionsCycle/OptionsCycle.tsx',
                        propsMetadata: i.gJ,
                        examples: {buttonStyle: (0, o.jsx)(d, {center: !0, title: 'Styles like the Button'})},
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 27377));
        }),
            (_N_E = n.O()));
    },
]);
