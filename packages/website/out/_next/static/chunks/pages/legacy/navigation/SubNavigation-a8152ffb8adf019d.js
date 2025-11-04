(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [63896],
    {
        69142: function (e, a, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/navigation/SubNavigation',
                function () {
                    return n(2018);
                },
            ]);
        },
        2018: function (e, a, n) {
            'use strict';
            (n.r(a),
                n.d(a, {
                    SubNavigationDemos: function () {
                        return g;
                    },
                    default: function () {
                        return w;
                    },
                }));
            var s = n(97458),
                i = n(19523),
                t = n(52071),
                r = n(88966),
                l = n(39668),
                c = n(94807),
                o = n(4778),
                d = function () {
                    return (0, s.jsx)(c.kp, {
                        id: 'third-sub-nav',
                        items: [
                            {
                                label: (0, s.jsxs)('span', {
                                    className: 'flex space-between',
                                    children: [
                                        (0, s.jsx)('span', {className: 'truncate', children: 'Avatar'}),
                                        (0, s.jsx)(o.ThumbsUpSize16Px, {}),
                                    ],
                                }),
                                id: 'avatar',
                                disabled: !0,
                            },
                            {
                                label: (0, s.jsxs)('span', {
                                    className: 'flex space-between',
                                    children: [
                                        (0, s.jsx)('span', {className: 'truncate', children: 'Titanic'}),
                                        (0, s.jsx)(o.ThumbsUpSize16Px, {}),
                                    ],
                                }),
                                id: 'titanic',
                            },
                            {
                                label: (0, s.jsxs)('span', {
                                    className: 'flex space-between',
                                    children: [
                                        (0, s.jsx)('span', {
                                            className: 'truncate pr1',
                                            children: 'Star Wars: The Force Awakens',
                                        }),
                                        (0, s.jsx)(o.ThumbsUpSize16Px, {}),
                                    ],
                                }),
                                id: 'star-wars',
                            },
                            {
                                label: (0, s.jsxs)('span', {
                                    className: 'flex space-between',
                                    children: [
                                        (0, s.jsx)('span', {className: 'truncate', children: 'Jurassic World'}),
                                        (0, s.jsx)(o.ThumbsDownSize16Px, {}),
                                    ],
                                }),
                                id: 'jurasic-world',
                            },
                            {
                                label: (0, s.jsxs)('span', {
                                    className: 'flex space-between',
                                    children: [
                                        (0, s.jsx)('span', {className: 'truncate', children: 'The Avengers'}),
                                        (0, s.jsx)(o.ThumbsDownSize16Px, {}),
                                    ],
                                }),
                                id: 'the-avengers',
                            },
                        ],
                        defaultSelected: 'titanic',
                    });
                },
                p = function (e) {
                    return (0, s.jsx)(
                        l.Z,
                        (0, r._)(
                            (0, t._)(
                                {
                                    snippet:
                                        'import {SubNavigationConnected} from \'@coveord/plasma-react\';\nimport {ThumbsDownSize16Px, ThumbsUpSize16Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <SubNavigationConnected\n        id="third-sub-nav"\n        items={[\n            {\n                label: (\n                    <span className="flex space-between">\n                        <span className="truncate">Avatar</span>\n                        <ThumbsUpSize16Px />\n                    </span>\n                ),\n                id: \'avatar\',\n                disabled: true,\n            },\n            {\n                label: (\n                    <span className="flex space-between">\n                        <span className="truncate">Titanic</span>\n                        <ThumbsUpSize16Px />\n                    </span>\n                ),\n                id: \'titanic\',\n            },\n            {\n                label: (\n                    <span className="flex space-between">\n                        <span className="truncate pr1">Star Wars: The Force Awakens</span>\n                        <ThumbsUpSize16Px />\n                    </span>\n                ),\n                id: \'star-wars\',\n            },\n            {\n                label: (\n                    <span className="flex space-between">\n                        <span className="truncate">Jurassic World</span>\n                        <ThumbsDownSize16Px />\n                    </span>\n                ),\n                id: \'jurasic-world\',\n            },\n            {\n                label: (\n                    <span className="flex space-between">\n                        <span className="truncate">The Avengers</span>\n                        <ThumbsDownSize16Px />\n                    </span>\n                ),\n                id: \'the-avengers\',\n            },\n        ]}\n        defaultSelected="titanic"\n    />\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, s.jsx)(d, {})},
                        ),
                    );
                },
                u = function () {
                    var e = [
                        {label: (0, s.jsx)('h3', {children: 'H3 React Node'}), id: 'react-node'},
                        {
                            label: 'Gummies',
                            id: 'gummies',
                            description:
                                'Brownie cheesecake brownie shortbread toffee. Candy danish gingerbread cake powder cake. Marzipan marzipan sweet roll apple pie cupcake lollipop.',
                        },
                        {
                            label: 'Cupcake',
                            id: 'cupcake',
                            description:
                                'Cupcake ipsum dolor sit amet. Lemon drops croissant sesame snaps cookie jelly beans tootsie roll muffin. Liquorice liquorice fruitcake tiramisu sesame snaps sugar plum lollipop gummi bears cookie',
                        },
                        {label: 'Chocolate', id: 'chocolate'},
                        {
                            label: 'Banana',
                            id: 'banana',
                            description:
                                'Sweet lollipop toffee donut candy brownie shortbread icing pudding. Caramels ice cream drag\xe9e lemon drops souffl\xe9 cotton candy cheesecake. Toffee apple pie pastry gummi bears danish.',
                        },
                    ];
                    return (0, s.jsx)(c.kp, {id: 'first-sub-nav', items: e});
                },
                m = function (e) {
                    return (0, s.jsx)(
                        l.Z,
                        (0, r._)(
                            (0, t._)(
                                {
                                    snippet:
                                        "import {SubNavigationConnected} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const exampleItems = [\n        {label: <h3>H3 React Node</h3>, id: 'react-node'},\n        {\n            label: 'Gummies',\n            id: 'gummies',\n            description:\n                'Brownie cheesecake brownie shortbread toffee. Candy danish gingerbread cake powder cake. Marzipan marzipan sweet roll apple pie cupcake lollipop.',\n        },\n        {\n            label: 'Cupcake',\n            id: 'cupcake',\n            description:\n                'Cupcake ipsum dolor sit amet. Lemon drops croissant sesame snaps cookie jelly beans tootsie roll muffin. Liquorice liquorice fruitcake tiramisu sesame snaps sugar plum lollipop gummi bears cookie',\n        },\n        {label: 'Chocolate', id: 'chocolate'},\n        {\n            label: 'Banana',\n            id: 'banana',\n            description:\n                'Sweet lollipop toffee donut candy brownie shortbread icing pudding. Caramels ice cream drag\xe9e lemon drops souffl\xe9 cotton candy cheesecake. Toffee apple pie pastry gummi bears danish.',\n        },\n    ];\n\n    return <SubNavigationConnected id=\"first-sub-nav\" items={exampleItems} />;\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, s.jsx)(u, {})},
                        ),
                    );
                },
                b = function () {
                    return (0, s.jsx)(c.kp, {
                        id: 'second-sub-nav',
                        items: [
                            {label: 'Avatar', id: 'avatar'},
                            {label: 'Titanic', id: 'titanic'},
                            {label: 'Star Wars: The Force Awakens', id: 'star-wars'},
                            {label: 'Jurassic World', id: 'jurasic-world'},
                            {label: 'The Avengers', id: 'the-avengers'},
                        ],
                        defaultSelected: 'star-wars',
                    });
                },
                h = function (e) {
                    return (0, s.jsx)(
                        l.Z,
                        (0, r._)(
                            (0, t._)(
                                {
                                    snippet:
                                        "import {SubNavigationConnected} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const exampleItems = [\n        {label: 'Avatar', id: 'avatar'},\n        {label: 'Titanic', id: 'titanic'},\n        {label: 'Star Wars: The Force Awakens', id: 'star-wars'},\n        {label: 'Jurassic World', id: 'jurasic-world'},\n        {label: 'The Avengers', id: 'the-avengers'},\n    ];\n\n    return <SubNavigationConnected id=\"second-sub-nav\" items={exampleItems} defaultSelected=\"star-wars\" />;\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, s.jsx)(b, {})},
                        ),
                    );
                },
                f = function () {
                    return (0, s.jsx)(c.kp, {
                        id: 'first-sub-nav',
                        items: [
                            {label: 'Avatar', id: 'avatar'},
                            {label: 'Titanic', id: 'titanic'},
                            {label: 'The Avengers', id: 'the-avengers'},
                            {label: 'Banana', id: 'banana'},
                        ],
                    });
                },
                x = function (e) {
                    return (0, s.jsx)(
                        l.Z,
                        (0, r._)(
                            (0, t._)(
                                {
                                    snippet:
                                        "import {SubNavigationConnected} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const exampleItems = [\n        {label: 'Avatar', id: 'avatar'},\n        {label: 'Titanic', id: 'titanic'},\n        {label: 'The Avengers', id: 'the-avengers'},\n        {label: 'Banana', id: 'banana'},\n    ];\n\n    return <SubNavigationConnected id=\"first-sub-nav\" items={exampleItems} />;\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, s.jsx)(f, {})},
                        ),
                    );
                },
                v = n(66809),
                g = function () {
                    return (0, s.jsx)(v.X, {
                        id: 'SubNavigation',
                        sourcePath: '/packages/react/src/components/subNavigation/SubNavigation.tsx',
                        title: 'SubNavigation',
                        section: 'Navigation',
                        description:
                            'A subnavigation is a secondary vertical navigation component that allows users to navigate between sections of the same interface.',
                        thumbnail: 'subNavigation',
                        propsMetadata: i.Ak,
                        demo: (0, s.jsx)(x, {}),
                        examples: {
                            defaultSelected: (0, s.jsx)(h, {title: 'Default selected'}),
                            custom: (0, s.jsx)(p, {title: 'Custom JSX labels and disabled item'}),
                            customWithDesc: (0, s.jsx)(m, {title: 'When there are descriptions in Sub Nav'}),
                        },
                    });
                },
                w = g;
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 69142));
        }),
            (_N_E = e.O()));
    },
]);
