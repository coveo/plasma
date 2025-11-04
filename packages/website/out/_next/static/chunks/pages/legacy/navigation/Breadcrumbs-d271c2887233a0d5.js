(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15333],
    {
        65624: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/navigation/Breadcrumbs',
                function () {
                    return n(93148);
                },
            ]);
        },
        93148: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    default: function () {
                        return h;
                    },
                }));
            var r = n(97458),
                i = n(19523),
                a = n(52071),
                o = n(88966),
                c = n(39668),
                d = n(94807),
                l = {
                    title: {
                        text: 'Charmeleon',
                        documentationLink: {
                            target: '_blank',
                            icon: n(4778).QuestionSize24Px,
                            tooltip: {title: "I'm a tooltip!", placement: 'bottom', container: 'body'},
                        },
                    },
                    links: [{name: 'Pikachu', link: 'https://www.google.ca/?q=pikachu'}],
                },
                u = function () {
                    return (0, r.jsx)(d.qgK, {
                        breadcrumb: l,
                        description: 'Simple description for the title',
                        tabs: [
                            {groupId: 'example2', id: 'tab1', title: 'Digimon'},
                            {groupId: 'example2', id: 'tab2', title: 'Beyblade'},
                            {groupId: 'example2', id: 'tab3', title: 'Pokemon'},
                        ],
                    });
                },
                m = function (e) {
                    return (0, r.jsx)(
                        c.Z,
                        (0, o._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {BreadcrumbHeader, IBreadcrumbProps} from '@coveord/plasma-react';\nimport {QuestionSize24Px} from '@coveord/plasma-react-icons';\n\nconst defaultBreadcrumb: IBreadcrumbProps = {\n    title: {\n        text: 'Charmeleon',\n        documentationLink: {\n            target: '_blank',\n            icon: QuestionSize24Px,\n            tooltip: {\n                title: \"I'm a tooltip!\",\n                placement: 'bottom',\n                container: 'body',\n            },\n        },\n    },\n    links: [\n        {\n            name: 'Pikachu',\n            link: 'https://www.google.ca/?q=pikachu',\n        },\n    ],\n};\n\nconst Demo = () => (\n    <BreadcrumbHeader\n        breadcrumb={defaultBreadcrumb}\n        description=\"Simple description for the title\"\n        tabs={[\n            {groupId: 'example2', id: 'tab1', title: 'Digimon'},\n            {groupId: 'example2', id: 'tab2', title: 'Beyblade'},\n            {groupId: 'example2', id: 'tab3', title: 'Pokemon'},\n        ]}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(u, {})},
                        ),
                    );
                },
                s = function () {
                    return (0, r.jsx)(d.qgK, {
                        breadcrumb: {
                            title: {text: 'Charmeleon'},
                            links: [{name: 'Pikachu', link: 'https://www.google.ca/?q=pikachu'}],
                        },
                        description: 'Simple description for the title',
                        hasBorderBottom: !1,
                    });
                },
                p = function (e) {
                    return (0, r.jsx)(
                        c.Z,
                        (0, o._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {BreadcrumbHeader} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <BreadcrumbHeader\n        breadcrumb={{\n            title: {\n                text: 'Charmeleon',\n            },\n            links: [\n                {\n                    name: 'Pikachu',\n                    link: 'https://www.google.ca/?q=pikachu',\n                },\n            ],\n        }}\n        description=\"Simple description for the title\"\n        hasBorderBottom={false}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(s, {})},
                        ),
                    );
                },
                b = n(66809),
                h = function () {
                    return (0, r.jsx)(b.X, {
                        id: 'BreadcrumbHeader',
                        sourcePath: '/packages/react/src/components/breadcrumbs/BreadcrumbHeader.tsx',
                        title: 'Breadcrumbs',
                        section: 'Navigation',
                        description:
                            'A breadcrumb is a secondary navigation that helps users to understand the hierarchy of interfaces and navigate through them.',
                        thumbnail: 'breadcrumb',
                        demo: (0, r.jsx)(p, {}),
                        propsMetadata: i.M2,
                        examples: {complex: (0, r.jsx)(m, {title: 'With documentation link and tabs'})},
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 65624));
        }),
            (_N_E = e.O()));
    },
]);
