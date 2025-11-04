(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [33460],
    {
        2028: function (e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/SearchBar',
                function () {
                    return r(16449);
                },
            ]);
        },
        16449: function (e, n, r) {
            'use strict';
            (r.r(n),
                r.d(n, {
                    default: function () {
                        return S;
                    },
                }));
            var t = r(97458),
                a = r(19523),
                s = r(52071),
                c = r(88966),
                o = r(53520),
                i = r(39668),
                u = r(94807),
                h = r(52983),
                l = function () {
                    var e = (0, o._)((0, h.useState)(!1), 2),
                        n = e[0],
                        r = e[1],
                        a = (0, o._)((0, h.useState)(''), 2),
                        s = a[0],
                        c = a[1];
                    return (0, t.jsx)(u.E1j, {
                        id: 'search-bar-1',
                        placeholder: 'Search for something...',
                        value: s,
                        disabled: !1,
                        searching: n,
                        onChange: function (e) {
                            return c(e.target.value);
                        },
                        onSearch: function () {
                            (r(!0),
                                setTimeout(function () {
                                    r(!1);
                                }, 800));
                        },
                    });
                },
                f = function (e) {
                    return (0, t.jsx)(
                        i.Z,
                        (0, c._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {SearchBar} from '@coveord/plasma-react';\nimport {useState} from 'react';\n\nconst Demo = () => {\n    const [isSearching, setSearching] = useState(false);\n    const [value, setValue] = useState('');\n\n    return (\n        <SearchBar\n            id=\"search-bar-1\"\n            placeholder=\"Search for something...\"\n            value={value}\n            disabled={false}\n            searching={isSearching}\n            onChange={(event) => setValue(event.target.value)}\n            onSearch={() => {\n                setSearching(true);\n                setTimeout(() => {\n                    setSearching(false);\n                }, 800);\n            }}\n        />\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, t.jsx)(l, {})},
                        ),
                    );
                },
                d = r(66809),
                S = function () {
                    return (0, t.jsx)(d.X, {
                        id: 'SearchBar',
                        title: 'Search Bar',
                        section: 'Form',
                        sourcePath: '/packages/react/src/components/searchBar/SearchBar.tsx',
                        propsMetadata: a.$O,
                        description:
                            'A search bar allows users to search a large set of data by entering keywords. A list of matching items is then returned.',
                        demo: (0, t.jsx)(f, {center: !0}),
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 2028));
        }),
            (_N_E = e.O()));
    },
]);
