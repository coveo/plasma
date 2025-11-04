(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [49854],
    {
        15997: function (a, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/navigation/Tabs',
                function () {
                    return n(51657);
                },
            ]);
        },
        51657: function (a, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    TabsDemos: function () {
                        return h;
                    },
                    default: function () {
                        return u;
                    },
                }));
            var e = n(97458),
                o = n(19523),
                d = n(52071),
                i = n(88966),
                r = n(39668),
                s = n(94807),
                b = function () {
                    return (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsxs)(s.LUO, {
                                children: [
                                    (0, e.jsx)(s.y$$, {
                                        groupId: 'patate',
                                        id: 'tab2',
                                        title: 'Gyarados',
                                        tooltip: 'I have a toolip!',
                                    }),
                                    (0, e.jsx)(s.y$$, {
                                        groupId: 'patate',
                                        id: 'tab13',
                                        title: 'Mr. Mime',
                                        tooltip: 'I have a badge!',
                                        badge: (0, e.jsx)(s.Cts, {
                                            label: 'Beta',
                                            isSmall: !0,
                                            type: s.gZO.Beta,
                                            extraClasses: ['ml1'],
                                        }),
                                    }),
                                    (0, e.jsx)(s.y$$, {
                                        groupId: 'patate',
                                        id: 'tab4',
                                        title: 'Rapidash',
                                        tooltip: "I'm disabled",
                                        disabled: !0,
                                    }),
                                ],
                            }),
                            (0, e.jsxs)(s.I5H, {
                                children: [
                                    (0, e.jsx)(s.d68, {
                                        groupId: 'patate',
                                        id: 'tab2',
                                        children: (0, e.jsx)('div', {
                                            className: 'mod-header-padding mod-form-top-bottom-padding',
                                            children: 'Content of the second tab.',
                                        }),
                                    }),
                                    (0, e.jsx)(s.d68, {
                                        groupId: 'patate',
                                        id: 'tab4',
                                        children: (0, e.jsx)('div', {
                                            className: 'mod-header-padding mod-form-top-bottom-padding',
                                            children: 'Content of the fourth tab.',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                c = function (a) {
                    return (0, e.jsx)(
                        r.Z,
                        (0, i._)(
                            (0, d._)(
                                {
                                    snippet:
                                        'import {Badge, BadgeType, TabConnected, TabContent, TabNavigation, TabPaneConnected} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <>\n        <TabNavigation>\n            <TabConnected groupId="patate" id="tab2" title="Gyarados" tooltip="I have a toolip!" />\n            <TabConnected\n                groupId="patate"\n                id="tab13"\n                title="Mr. Mime"\n                tooltip="I have a badge!"\n                badge={<Badge label="Beta" isSmall type={BadgeType.Beta} extraClasses={[\'ml1\']} />}\n            />\n            <TabConnected groupId="patate" id="tab4" title="Rapidash" tooltip="I\'m disabled" disabled />\n        </TabNavigation>\n        <TabContent>\n            <TabPaneConnected groupId="patate" id="tab2">\n                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>\n            </TabPaneConnected>\n            <TabPaneConnected groupId="patate" id="tab4">\n                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the fourth tab.</div>\n            </TabPaneConnected>\n        </TabContent>\n    </>\n);\nexport default Demo;\n',
                                },
                                a,
                            ),
                            {children: (0, e.jsx)(b, {})},
                        ),
                    );
                },
                p = n(4778),
                m = function () {
                    return (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsxs)(s.LUO, {
                                children: [
                                    (0, e.jsx)(s.y$$, {
                                        groupId: 'banane',
                                        id: 'tab5',
                                        title: 'Pikachu',
                                        icon: p.LightningSize16Px,
                                    }),
                                    (0, e.jsx)(s.y$$, {
                                        groupId: 'banane',
                                        id: 'tab6',
                                        title: 'Gyarados',
                                        icon: p.HeartSize16Px,
                                    }),
                                    (0, e.jsx)(s.y$$, {
                                        groupId: 'banane',
                                        id: 'tab7',
                                        title: 'Charmander',
                                        icon: p.RocketSize16Px,
                                    }),
                                ],
                            }),
                            (0, e.jsxs)(s.I5H, {
                                children: [
                                    (0, e.jsx)(s.d68, {
                                        groupId: 'banane',
                                        id: 'tab5',
                                        children: (0, e.jsx)('div', {
                                            className: 'mod-header-padding mod-form-top-bottom-padding',
                                            children: 'Content of the first tab.',
                                        }),
                                    }),
                                    (0, e.jsx)(s.d68, {
                                        groupId: 'banane',
                                        id: 'tab6',
                                        children: (0, e.jsx)('div', {
                                            className: 'mod-header-padding mod-form-top-bottom-padding',
                                            children: 'Content of the second tab.',
                                        }),
                                    }),
                                    (0, e.jsx)(s.d68, {
                                        groupId: 'banane',
                                        id: 'tab7',
                                        children: (0, e.jsx)('div', {
                                            className: 'mod-header-padding mod-form-top-bottom-padding',
                                            children: 'Content of the third tab .',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                l = function (a) {
                    return (0, e.jsx)(
                        r.Z,
                        (0, i._)(
                            (0, d._)(
                                {
                                    snippet:
                                        'import {TabConnected, TabContent, TabNavigation, TabPaneConnected} from \'@coveord/plasma-react\';\nimport {HeartSize16Px, LightningSize16Px, RocketSize16Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <>\n        <TabNavigation>\n            <TabConnected groupId="banane" id="tab5" title="Pikachu" icon={LightningSize16Px} />\n            <TabConnected groupId="banane" id="tab6" title="Gyarados" icon={HeartSize16Px} />\n            <TabConnected groupId="banane" id="tab7" title="Charmander" icon={RocketSize16Px} />\n        </TabNavigation>\n        <TabContent>\n            <TabPaneConnected groupId="banane" id="tab5">\n                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the first tab.</div>\n            </TabPaneConnected>\n            <TabPaneConnected groupId="banane" id="tab6">\n                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>\n            </TabPaneConnected>\n            <TabPaneConnected groupId="banane" id="tab7">\n                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the third tab .</div>\n            </TabPaneConnected>\n        </TabContent>\n    </>\n);\nexport default Demo;\n',
                                },
                                a,
                            ),
                            {children: (0, e.jsx)(m, {})},
                        ),
                    );
                },
                g = n(66809),
                h = function () {
                    return (0, e.jsx)(g.X, {
                        id: 'Tab',
                        sourcePath: '/packages/react/src/components/tab/Tab.tsx',
                        title: 'Tab',
                        section: 'Navigation',
                        description: 'A set of tabs allows users to navigate between sections of the same interface.',
                        thumbnail: 'tab',
                        demo: (0, e.jsx)(c, {}),
                        propsMetadata: o.jq,
                        examples: {withIcons: (0, e.jsx)(l, {title: 'Tab with icons'})},
                    });
                },
                u = h;
        },
    },
    function (a) {
        (a.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return a((a.s = 15997));
        }),
            (_N_E = a.O()));
    },
]);
