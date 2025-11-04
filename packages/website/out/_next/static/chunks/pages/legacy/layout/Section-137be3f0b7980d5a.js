(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [76213],
    {
        80103: function (e, i, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/Section',
                function () {
                    return t(27692);
                },
            ]);
        },
        27692: function (e, i, t) {
            'use strict';
            (t.r(i),
                t.d(i, {
                    default: function () {
                        return v;
                    },
                }));
            var n = t(97458),
                o = t(19523),
                s = t(52071),
                c = t(88966),
                r = t(39668),
                l = t(94807),
                d = function () {
                    return (0, n.jsx)(l.$0h, {
                        title: 'Section title',
                        description: 'Section description.',
                        children: (0, n.jsx)(l.$0h, {
                            level: 2,
                            mods: 'mod-header-padding',
                            title: 'Look at my cool mod',
                            children: (0, n.jsx)('div', {children: 'Children'}),
                        }),
                    });
                },
                p = function (e) {
                    return (0, n.jsx)(
                        r.Z,
                        (0, c._)(
                            (0, s._)(
                                {
                                    snippet:
                                        'import {Section} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <Section title="Section title" description="Section description.">\n        <Section level={2} mods={\'mod-header-padding\'} title="Look at my cool mod">\n            <div>Children</div>\n        </Section>\n    </Section>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, n.jsx)(d, {})},
                        ),
                    );
                },
                a = function () {
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.$0h, {
                                title: 'This is a level 1 section',
                                description: 'Section description.',
                                level: 1,
                            }),
                            (0, n.jsx)(l.$0h, {
                                title: 'This is a level 2 section',
                                description: 'Section description.',
                                level: 2,
                            }),
                            (0, n.jsx)(l.$0h, {
                                title: 'This is a level 3 section',
                                description: 'Section description.',
                                level: 3,
                            }),
                        ],
                    });
                },
                h = function (e) {
                    return (0, n.jsx)(
                        r.Z,
                        (0, c._)(
                            (0, s._)(
                                {
                                    snippet:
                                        'import {Section} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <>\n        <Section title="This is a level 1 section" description="Section description." level={1} />\n        <Section title="This is a level 2 section" description="Section description." level={2} />\n        <Section title="This is a level 3 section" description="Section description." level={3} />\n    </>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, n.jsx)(a, {})},
                        ),
                    );
                },
                m = function () {
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.$0h, {
                                mods: 'mod-header-padding',
                                title: 'This is a level 1 section',
                                description: 'Section description.',
                            }),
                            (0, n.jsx)(l.$0h, {
                                mods: 'mod-form-top-bottom-padding',
                                title: 'This is a level 2 section',
                                description: 'Section description.',
                            }),
                            (0, n.jsx)(l.$0h, {
                                mods: 'material-card',
                                title: 'This is a level 3 section',
                                description: 'Section description.',
                            }),
                        ],
                    });
                },
                u = function (e) {
                    return (0, n.jsx)(
                        r.Z,
                        (0, c._)(
                            (0, s._)(
                                {
                                    snippet:
                                        'import {Section} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <>\n        <Section mods={\'mod-header-padding\'} title="This is a level 1 section" description="Section description." />\n        <Section\n            mods={\'mod-form-top-bottom-padding\'}\n            title="This is a level 2 section"\n            description="Section description."\n        />\n        <Section mods={\'material-card\'} title="This is a level 3 section" description="Section description." />\n    </>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, n.jsx)(m, {})},
                        ),
                    );
                },
                S = t(66809),
                v = function () {
                    return (0, n.jsx)(S.X, {
                        id: 'Section',
                        sourcePath: '/packages/react/src/components/section/Section.tsx',
                        title: 'Section',
                        section: 'Layout',
                        thumbnail: 'placeholder',
                        demo: (0, n.jsx)(p, {}),
                        examples: {
                            withLevel: (0, n.jsx)(h, {title: 'With Level option'}),
                            withMods: (0, n.jsx)(u, {title: 'With Mods option'}),
                        },
                        propsMetadata: o.Dx,
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 80103));
        }),
            (_N_E = e.O()));
    },
]);
