(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [39387],
    {
        39948: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/Facet',
                function () {
                    return n(89743);
                },
            ]);
        },
        89743: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    default: function () {
                        return l;
                    },
                }));
            var o = n(97458),
                a = n(19523),
                r = n(52071),
                c = n(88966),
                m = n(39668),
                f = n(94807),
                s = function () {
                    return (0, o.jsx)(f.Wc4, {
                        facet: {name: 'facet-1', formattedName: 'Simple Facet'},
                        facetRows: [
                            {name: 'row1', formattedName: 'Row 1'},
                            {name: 'row2', formattedName: 'The second row'},
                            {name: 'row3', formattedName: 'Third row with a count property', count: '23412'},
                        ],
                    });
                },
                w = function (e) {
                    return (0, o.jsx)(
                        m.Z,
                        (0, c._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {FacetConnected, IFacet} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const facet: IFacet = {name: 'facet-1', formattedName: 'Simple Facet'};\n\n    const facetRows: IFacet[] = [\n        {\n            name: 'row1',\n            formattedName: 'Row 1',\n        },\n        {\n            name: 'row2',\n            formattedName: 'The second row',\n        },\n        {\n            name: 'row3',\n            formattedName: 'Third row with a count property',\n            count: '23412',\n        },\n    ];\n    return <FacetConnected facet={facet} facetRows={facetRows} />;\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(s, {})},
                        ),
                    );
                },
                d = function () {
                    return (0, o.jsx)(f.Wc4, {
                        facet: {name: 'facet-2', formattedName: 'Facet with exclude'},
                        facetRows: [
                            {name: 'row1', formattedName: 'Row 1'},
                            {name: 'row2', formattedName: 'The second row'},
                        ],
                        enableExclusions: !0,
                    });
                },
                i = function (e) {
                    return (0, o.jsx)(
                        m.Z,
                        (0, c._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {FacetConnected, IFacet} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const facet: IFacet = {name: 'facet-2', formattedName: 'Facet with exclude'};\n\n    const facetRows: IFacet[] = [\n        {\n            name: 'row1',\n            formattedName: 'Row 1',\n        },\n        {\n            name: 'row2',\n            formattedName: 'The second row',\n        },\n    ];\n    return <FacetConnected facet={facet} facetRows={facetRows} enableExclusions />;\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(d, {})},
                        ),
                    );
                },
                u = function () {
                    return (0, o.jsx)(f.Wc4, {
                        facet: {name: 'facet-3', formattedName: 'Facet with more'},
                        facetRows: [
                            {name: 'row1', formattedName: 'The first row'},
                            {name: 'row2', formattedName: 'The second row'},
                            {name: 'row3', formattedName: 'The third row'},
                            {name: 'row4', formattedName: 'The fourth row'},
                        ],
                        maxRowsToShow: 2,
                    });
                },
                h = function (e) {
                    return (0, o.jsx)(
                        m.Z,
                        (0, c._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {FacetConnected, IFacet} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const facet: IFacet = {name: 'facet-3', formattedName: 'Facet with more'};\n\n    const facetRows: IFacet[] = [\n        {\n            name: 'row1',\n            formattedName: 'The first row',\n        },\n        {\n            name: 'row2',\n            formattedName: 'The second row',\n        },\n        {\n            name: 'row3',\n            formattedName: 'The third row',\n        },\n        {\n            name: 'row4',\n            formattedName: 'The fourth row',\n        },\n    ];\n    return <FacetConnected facet={facet} facetRows={facetRows} maxRowsToShow={2} />;\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, o.jsx)(u, {})},
                        ),
                    );
                },
                p = n(66809),
                l = function () {
                    return (0, o.jsx)(p.X, {
                        id: 'Facet',
                        title: 'Facet',
                        section: 'Form',
                        description: 'A facet is a set of options used to filter a list of content items.',
                        sourcePath: '/packages/react/src/components/facets/FacetConnected.tsx',
                        demo: (0, o.jsx)(w, {center: !0}),
                        propsMetadata: a.YN,
                        examples: {
                            withExclude: (0, o.jsx)(i, {center: !0, title: 'Allow exclusion'}),
                            withMore: (0, o.jsx)(h, {center: !0, title: 'Show more'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 39948));
        }),
            (_N_E = e.O()));
    },
]);
