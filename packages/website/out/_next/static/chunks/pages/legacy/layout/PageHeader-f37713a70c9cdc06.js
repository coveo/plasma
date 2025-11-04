(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71098],
    {
        81727: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/PageHeader',
                function () {
                    return n(19284);
                },
            ]);
        },
        19284: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    PageHeaderDemos: function () {
                        return f;
                    },
                    default: function () {
                        return x;
                    },
                }));
            var a = n(97458),
                i = n(19523),
                r = n(52071),
                o = n(88966),
                d = n(39668),
                s = n(94807),
                c = function () {
                    return (0, a.jsx)(s.$A6, {});
                },
                u = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, o._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {BasicHeaderLoading} from '@coveord/plasma-react';\n\nconst Demo = () => <BasicHeaderLoading />;\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(c, {})},
                        ),
                    );
                },
                l = function () {
                    return (0, a.jsx)(s.v7X, {
                        title: {text: 'Charmeleon title'},
                        description: 'Simple description for the title',
                        tabs: [
                            {groupId: 'example1', id: 'tab1', title: 'Digimon'},
                            {groupId: 'example1', id: 'tab2', title: 'Beyblade'},
                            {groupId: 'example1', id: 'tab3', title: 'Pokemon'},
                        ],
                    });
                },
                p = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, o._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {BasicHeader} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <BasicHeader\n        title={{\n            text: 'Charmeleon title',\n        }}\n        description=\"Simple description for the title\"\n        tabs={[\n            {groupId: 'example1', id: 'tab1', title: 'Digimon'},\n            {groupId: 'example1', id: 'tab2', title: 'Beyblade'},\n            {groupId: 'example1', id: 'tab3', title: 'Pokemon'},\n        ]}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(l, {})},
                        ),
                    );
                },
                m = n(66809),
                f = function () {
                    return (0, a.jsx)(m.X, {
                        id: 'BasicHeader',
                        sourcePath: '/packages/react/src/components/headers/BasicHeader.tsx',
                        title: 'Page header',
                        section: 'Layout',
                        description:
                            'A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional tabs.',
                        thumbnail: 'header',
                        demo: (0, a.jsx)(p, {}),
                        propsMetadata: i.Pu,
                        examples: {loading: (0, a.jsx)(u, {title: 'Loading'})},
                    });
                },
                x = f;
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 81727));
        }),
            (_N_E = e.O()));
    },
]);
