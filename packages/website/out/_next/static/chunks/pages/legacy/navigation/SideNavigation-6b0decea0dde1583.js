(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [21110],
    {
        29707: function (i, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/navigation/SideNavigation',
                function () {
                    return n(61703);
                },
            ]);
        },
        61703: function (i, e, n) {
            'use strict';
            (n.r(e),
                n.d(e, {
                    SideNavigationDemos: function () {
                        return x;
                    },
                    default: function () {
                        return f;
                    },
                }));
            var o = n(97458),
                t = n(19523),
                a = n(52071),
                c = n(88966),
                d = n(53520),
                r = n(39668),
                s = n(94807),
                v = n(4778),
                l = n(52983),
                m = function () {
                    var i = (0, d._)((0, l.useState)(!0), 2),
                        e = i[0],
                        n = i[1];
                    return (0, o.jsx)(s.Hyu, {
                        children: (0, o.jsxs)(s.P1O, {
                            title: 'Collapsible Section',
                            icon: v.CoveoIconSize16Px,
                            expandable: !0,
                            expanded: e,
                            onClick: function () {
                                return n(!e);
                            },
                            children: [
                                (0, o.jsx)(s.y4u, {
                                    children: (0, o.jsx)('a', {
                                        href: 'http://coveo.com',
                                        title: 'Link to Coveo',
                                        children: 'Link to Coveo',
                                    }),
                                }),
                                (0, o.jsx)(s.y4u, {
                                    children: (0, o.jsx)('a', {
                                        href: 'http://coveo.com',
                                        title: 'Link to Coveo',
                                        children: 'Another link to Coveo',
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                u = function (i) {
                    return (0, o.jsx)(
                        r.Z,
                        (0, c._)(
                            (0, a._)(
                                {
                                    snippet:
                                        'import {SideNavigation, SideNavigationItem, SideNavigationMenuSection} from \'@coveord/plasma-react\';\nimport {CoveoIconSize16Px} from \'@coveord/plasma-react-icons\';\nimport {useState} from \'react\';\n\nconst Demo = () => {\n    const [isExpanded, setIsExpanded] = useState(true);\n    return (\n        <SideNavigation>\n            <SideNavigationMenuSection\n                title="Collapsible Section"\n                icon={CoveoIconSize16Px}\n                expandable\n                expanded={isExpanded}\n                onClick={() => setIsExpanded(!isExpanded)}\n            >\n                <SideNavigationItem>\n                    <a href="http://coveo.com" title="Link to Coveo">\n                        Link to Coveo\n                    </a>\n                </SideNavigationItem>\n                <SideNavigationItem>\n                    <a href="http://coveo.com" title="Link to Coveo">\n                        Another link to Coveo\n                    </a>\n                </SideNavigationItem>\n            </SideNavigationMenuSection>\n        </SideNavigation>\n    );\n};\nexport default Demo;\n',
                                },
                                i,
                            ),
                            {children: (0, o.jsx)(m, {})},
                        ),
                    );
                },
                S = function () {
                    return (0, o.jsx)(s.Hyu, {
                        children: (0, o.jsxs)(s.P1O, {
                            title: 'Loading Section',
                            icon: v.CoveoIconSize16Px,
                            children: [
                                (0, o.jsx)(s.pFu, {className: 'mod-width-30'}),
                                (0, o.jsx)(s.pFu, {className: 'mod-width-50'}),
                                (0, o.jsx)(s.pFu, {className: 'mod-width-40'}),
                            ],
                        }),
                    });
                },
                p = function (i) {
                    return (0, o.jsx)(
                        r.Z,
                        (0, c._)(
                            (0, a._)(
                                {
                                    snippet:
                                        'import {SideNavigation, SideNavigationLoadingItem, SideNavigationMenuSection} from \'@coveord/plasma-react\';\nimport {CoveoIconSize16Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <SideNavigation>\n        <SideNavigationMenuSection title="Loading Section" icon={CoveoIconSize16Px}>\n            <SideNavigationLoadingItem className="mod-width-30" />\n            <SideNavigationLoadingItem className="mod-width-50" />\n            <SideNavigationLoadingItem className="mod-width-40" />\n        </SideNavigationMenuSection>\n    </SideNavigation>\n);\nexport default Demo;\n',
                                },
                                i,
                            ),
                            {children: (0, o.jsx)(S, {})},
                        ),
                    );
                },
                g = function () {
                    return (0, o.jsx)(s.Hyu, {
                        children: (0, o.jsxs)(s.P1O, {
                            title: 'Regular Section',
                            icon: v.CoveoIconSize16Px,
                            children: [
                                (0, o.jsx)(s.y4u, {
                                    isActive: !0,
                                    children: (0, o.jsx)('a', {
                                        href: 'http://coveo.com',
                                        title: 'Link to Coveo',
                                        children: 'Link to Coveo',
                                    }),
                                }),
                                (0, o.jsx)(s.y4u, {
                                    children: (0, o.jsx)('a', {
                                        href: 'http://coveo.com',
                                        title: 'Link to Coveo',
                                        children: 'Another link to Coveo',
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                h = function (i) {
                    return (0, o.jsx)(
                        r.Z,
                        (0, c._)(
                            (0, a._)(
                                {
                                    snippet:
                                        'import {SideNavigation, SideNavigationItem, SideNavigationMenuSection} from \'@coveord/plasma-react\';\nimport {CoveoIconSize16Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <SideNavigation>\n        <SideNavigationMenuSection title="Regular Section" icon={CoveoIconSize16Px}>\n            <SideNavigationItem isActive>\n                <a href="http://coveo.com" title="Link to Coveo">\n                    Link to Coveo\n                </a>\n            </SideNavigationItem>\n            <SideNavigationItem>\n                <a href="http://coveo.com" title="Link to Coveo">\n                    Another link to Coveo\n                </a>\n            </SideNavigationItem>\n        </SideNavigationMenuSection>\n    </SideNavigation>\n);\nexport default Demo;\n',
                                },
                                i,
                            ),
                            {children: (0, o.jsx)(g, {})},
                        ),
                    );
                },
                N = n(66809),
                x = function () {
                    return (0, o.jsx)(N.X, {
                        id: 'SideNavigation',
                        sourcePath: '/packages/react/src/components/sideNavigation/SideNavigation.tsx',
                        title: 'SideNavigation',
                        section: 'Navigation',
                        description:
                            'A sidebar navigation is a primary navigation element that displays the architecture of the product’s features.',
                        thumbnail: 'sideNav',
                        demo: (0, o.jsx)(h, {}),
                        propsMetadata: t.XX,
                        examples: {
                            loading: (0, o.jsx)(p, {title: 'Loading section'}),
                            collapsible: (0, o.jsx)(u, {title: 'Collapsible section'}),
                        },
                    });
                },
                f = x;
        },
    },
    function (i) {
        (i.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return i((i.s = 29707));
        }),
            (_N_E = i.O()));
    },
]);
