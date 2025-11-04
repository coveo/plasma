(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [82317],
    {
        97759: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/SingleSelect',
                function () {
                    return t(76845);
                },
            ]);
        },
        76845: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    default: function () {
                        return I;
                    },
                }));
            var o = t(97458),
                i = t(19523),
                l = t(52071),
                s = t(88966),
                a = t(39668),
                r = t(94807),
                c = function () {
                    return (0, o.jsx)(r.fjW, {
                        id: 'single-select-1',
                        items: [
                            {value: 'one', displayValue: 'Option 1'},
                            {value: 'two', displayValue: 'Option 2'},
                            {value: 'three', displayValue: 'Option 3'},
                        ],
                    });
                },
                u = function (e) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, s._)(
                            (0, l._)(
                                {
                                    snippet:
                                        "import {SingleSelectConnected} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <SingleSelectConnected\n        id=\"single-select-1\"\n        items={[\n            {value: 'one', displayValue: 'Option 1'},\n            {value: 'two', displayValue: 'Option 2'},\n            {value: 'three', displayValue: 'Option 3'},\n        ]}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(c, {})},
                        ),
                    );
                },
                p = function () {
                    return (0, o.jsx)(r.is, {
                        id: 'single-select-2',
                        items: [
                            {value: 'one', displayValue: 'Option 1'},
                            {value: 'two', displayValue: 'Option 2'},
                            {value: 'three', displayValue: 'Option 3'},
                            {value: 'four', displayValue: 'Option 4'},
                            {value: 'five', displayValue: 'Option 5'},
                        ],
                    });
                },
                d = function (e) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, s._)(
                            (0, l._)(
                                {
                                    snippet:
                                        "import {SingleSelectWithFilter} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <SingleSelectWithFilter\n        id=\"single-select-2\"\n        items={[\n            {value: 'one', displayValue: 'Option 1'},\n            {value: 'two', displayValue: 'Option 2'},\n            {value: 'three', displayValue: 'Option 3'},\n            {value: 'four', displayValue: 'Option 4'},\n            {value: 'five', displayValue: 'Option 5'},\n        ]}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(p, {})},
                        ),
                    );
                },
                h = t(53520),
                f = t(7300),
                m = t(52983),
                g = t(48692),
                v = (0, t(2031).qC)(r.Lvu, r.SXo, r.TAq)(r.fjW),
                S = function () {
                    var e = (0, g.v9)(function (e) {
                            return r.yRR.getFilterText(e, {id: 'single-select-4'});
                        }),
                        n = (0, h._)(_(), 3),
                        t = n[0],
                        i = n[1],
                        s = n[2],
                        a = (0, h._)((0, m.useState)(1), 2),
                        c = a[0],
                        u = a[1];
                    return (
                        (0, m.useEffect)(function () {
                            s({_page: 1, _limit: x});
                        }, []),
                        (0, o.jsx)(v, {
                            id: 'single-select-4',
                            items: t.map(function (e) {
                                return {value: e.id, displayValue: (0, o.jsx)(P, (0, l._)({}, e))};
                            }),
                            totalEntries: i,
                            next: function () {
                                (s({_page: c + 1, _limit: x, q: e}, !1), u(c + 1));
                            },
                            onUpdate: function () {
                                (s({_page: 1, _limit: x, q: e}), u(1));
                            },
                            canClear: !0,
                            noFixedWidth: !0,
                        })
                    );
                },
                P = function (e) {
                    var n = e.url,
                        t = e.title,
                        i = e.thumbnailUrl;
                    return (0, o.jsxs)('div', {
                        className: 'flex flex-center',
                        children: [
                            (0, o.jsx)('a', {
                                href: n,
                                target: '__blank',
                                className: 'mr2 flex',
                                children: (0, o.jsx)('img', {src: i, alt: t, width: y, height: y}),
                            }),
                            (0, o.jsx)('span', {children: t}),
                        ],
                    });
                },
                x = 10,
                y = 50,
                _ = function () {
                    var e = (0, h._)((0, m.useState)([]), 2),
                        n = e[0],
                        t = e[1],
                        o = (0, h._)((0, m.useState)(0), 2),
                        i = o[0],
                        l = o[1];
                    return [
                        n,
                        i,
                        function (e) {
                            var o = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                i =
                                    (Object.keys(e).forEach(function (n) {
                                        return void 0 === e[n] ? delete e[n] : {};
                                    }),
                                    e),
                                s =
                                    i && Object.keys(i).length > 0
                                        ? '?'.concat(new URLSearchParams(Object.entries(i)).toString())
                                        : '';
                            return fetch('https://jsonplaceholder.typicode.com/photos'.concat(s))
                                .then(function (e) {
                                    return (l(parseInt(e.headers.get('x-total-count'), 10)), e.json());
                                })
                                .then(function (e) {
                                    o ? t(e) : t((0, f._)(n).concat((0, f._)(e)));
                                });
                        },
                    ];
                },
                j = function (e) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, s._)(
                            (0, l._)(
                                {
                                    snippet:
                                        "import {\n    FilterBoxSelectors,\n    IItemBoxProps,\n    ISingleSelectOwnProps,\n    selectWithFilter,\n    selectWithInfiniteScroll,\n    SelectWithInfiniteScrollProps,\n    SingleSelectConnected,\n    withServerSideProcessing,\n} from '@coveord/plasma-react';\nimport {ComponentType, FunctionComponent, useState, useEffect} from 'react';\nimport {useSelector} from 'react-redux';\nimport {compose} from 'redux';\n\nconst ServerSideSingleSelect: ComponentType<\n    React.PropsWithChildren<ISingleSelectOwnProps & SelectWithInfiniteScrollProps>\n> = compose<any>(withServerSideProcessing, selectWithFilter, selectWithInfiniteScroll)(SingleSelectConnected);\n\nconst Demo = () => {\n    const filterValue = useSelector((state) => FilterBoxSelectors.getFilterText(state, {id: 'single-select-4'}));\n    const [photos, totalEntries, fetchPhotos] = usePhotosAPIMock();\n    const [pageNbr, setPage] = useState(1);\n\n    useEffect(() => {\n        fetchPhotos({_page: 1, _limit: PER_PAGE});\n    }, []);\n\n    const fetchNextPage = () => {\n        fetchPhotos({_page: pageNbr + 1, _limit: PER_PAGE, q: filterValue}, false);\n        setPage(pageNbr + 1);\n    };\n\n    const applyFilter = () => {\n        fetchPhotos({_page: 1, _limit: PER_PAGE, q: filterValue});\n        setPage(1);\n    };\n\n    return (\n        <ServerSideSingleSelect\n            id=\"single-select-4\"\n            items={photos.map(\n                (photo: PhotoProps): IItemBoxProps => ({\n                    value: photo.id,\n                    displayValue: <PhotoItem {...photo} />,\n                }),\n            )}\n            totalEntries={totalEntries}\n            next={fetchNextPage}\n            onUpdate={applyFilter}\n            canClear\n            noFixedWidth\n        />\n    );\n};\nexport default Demo;\n\nexport interface PhotoProps {\n    albumId: string;\n    id: string;\n    title: string;\n    url: string;\n    thumbnailUrl: string;\n}\n\nconst PhotoItem: FunctionComponent<PhotoProps> = ({url, title, thumbnailUrl}) => (\n    <div className=\"flex flex-center\">\n        <a href={url} target=\"__blank\" className=\"mr2 flex\">\n            <img src={thumbnailUrl} alt={title} width={IMG_SIZE} height={IMG_SIZE} />\n        </a>\n        <span>{title}</span>\n    </div>\n);\n\nconst PER_PAGE = 10;\nconst IMG_SIZE = 50;\n\nconst clean = <T extends Record<string, unknown>>(object: T) => {\n    Object.keys(object).forEach((key) => (object[key] === undefined ? delete object[key] : {}));\n    return object;\n};\n\nconst usePhotosAPIMock = (): [any[], number, (params?: any, overwrite?: boolean) => void] => {\n    const [photos, setPhotos] = useState([]);\n    const [totalEntries, setTotalEntries] = useState(0);\n\n    const fetchPhotos = (params?: any, overwrite = true) => {\n        const cleanParams = clean(params);\n        const queryString =\n            cleanParams && Object.keys(cleanParams).length > 0\n                ? `?${new URLSearchParams(Object.entries(cleanParams)).toString()}`\n                : '';\n\n        return fetch(`https://jsonplaceholder.typicode.com/photos${queryString}`)\n            .then((response) => {\n                setTotalEntries(parseInt(response.headers.get('x-total-count'), 10));\n                return response.json();\n            })\n            .then((newPhotos) => {\n                if (overwrite) {\n                    setPhotos(newPhotos);\n                } else {\n                    setPhotos([...photos, ...newPhotos]);\n                }\n            });\n    };\n\n    return [photos, totalEntries, fetchPhotos];\n};\n",
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(S, {})},
                        ),
                    );
                },
                O = function () {
                    return (0, o.jsx)(r.Jv4, {
                        id: 'single-select-3',
                        items: [
                            {value: '1', displayValue: 'Option 1'},
                            {value: '2', displayValue: 'Option 2'},
                            {value: '3', displayValue: 'Option 3'},
                            {value: '4', displayValue: 'Option 4'},
                            {value: '5', displayValue: 'Option 5'},
                        ],
                        options: [
                            {id: 'all', option: {content: 'All'}, selected: !0},
                            {id: 'even', option: {content: 'Even'}},
                            {id: 'odd', option: {content: 'Odd'}},
                        ],
                        matchPredicate: function (e, n) {
                            var t = parseInt(n.value, 10);
                            switch (e) {
                                case 'even':
                                    return t % 2 == 0;
                                case 'odd':
                                    return t % 2 == 1;
                                default:
                                    return !0;
                            }
                        },
                    });
                },
                w = function (e) {
                    return (0, o.jsx)(
                        a.Z,
                        (0, s._)(
                            (0, l._)(
                                {
                                    snippet:
                                        "import {IItemBoxProps, SingleSelectWithPredicate} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <SingleSelectWithPredicate\n        id=\"single-select-3\"\n        items={[\n            {value: '1', displayValue: 'Option 1'},\n            {value: '2', displayValue: 'Option 2'},\n            {value: '3', displayValue: 'Option 3'},\n            {value: '4', displayValue: 'Option 4'},\n            {value: '5', displayValue: 'Option 5'},\n        ]}\n        options={[\n            {id: 'all', option: {content: 'All'}, selected: true},\n            {id: 'even', option: {content: 'Even'}},\n            {id: 'odd', option: {content: 'Odd'}},\n        ]}\n        matchPredicate={(predicate: string, item: IItemBoxProps) => {\n            const value = parseInt(item.value, 10);\n            switch (predicate) {\n                case 'even':\n                    return value % 2 === 0;\n                case 'odd':\n                    return value % 2 === 1;\n                default:\n                    return true;\n            }\n        }}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(O, {})},
                        ),
                    );
                },
                E = t(66809),
                I = function () {
                    return (0, o.jsx)(E.X, {
                        id: 'SingleSelectConnected',
                        title: 'Single Select',
                        section: 'Form',
                        description:
                            'A single select allows users to select only one option from a list. It is typically used when there are a large number of options.',
                        sourcePath: '/packages/react/src/components/select/SingleSelectConnected.tsx',
                        demo: (0, o.jsx)(u, {center: !0}),
                        propsMetadata: i.bp,
                        examples: {
                            withFilter: (0, o.jsx)(d, {center: !0, title: 'With a filter box'}),
                            withPredicate: (0, o.jsx)(w, {center: !0, title: 'With predicates options'}),
                            withInfiniteScroll: (0, o.jsx)(j, {
                                center: !0,
                                title: 'With infinite scroll and server side handling of pagination and filtering',
                            }),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 97759));
        }),
            (_N_E = e.O()));
    },
]);
