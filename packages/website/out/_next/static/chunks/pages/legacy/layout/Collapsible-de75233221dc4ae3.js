(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54510],
    {
        33728: function (n, e, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/Collapsible',
                function () {
                    return o(38301);
                },
            ]);
        },
        38301: function (n, e, o) {
            'use strict';
            (o.r(e),
                o.d(e, {
                    default: function () {
                        return h;
                    },
                }));
            var t = o(97458),
                l = o(19523),
                i = o(52071),
                a = o(88966),
                s = o(39668),
                r = o(94807),
                p = function () {
                    return (0, t.jsx)(r.UMY, {
                        id: 'collapsible-example-1',
                        headerContent: (0, t.jsx)('h6', {className: 'p2', children: "Q: Why can't you trust an atom?"}),
                        children: (0, t.jsx)('div', {className: 'p2', children: 'A: Because they make up everything'}),
                    });
                },
                c = function (n) {
                    return (0, t.jsx)(
                        s.Z,
                        (0, a._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {CollapsibleConnected} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <CollapsibleConnected\n        id="collapsible-example-1"\n        headerContent={<h6 className="p2">Q: Why can\'t you trust an atom?</h6>}\n    >\n        <div className="p2">A: Because they make up everything</div>\n    </CollapsibleConnected>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, t.jsx)(p, {})},
                        ),
                    );
                },
                d = function () {
                    return (0, t.jsx)(r.Z3M, {
                        id: 'collapsible-container-example-3',
                        title: 'Collapsible Container disabled',
                        informationUrl: 'https://www.coveo.com/en',
                        informationTooltip: {
                            title: "I display information and if you click me you'll be led to a URL that was provided to me.",
                        },
                        disabled: !0,
                        children: 'something!',
                    });
                },
                m = function (n) {
                    return (0, t.jsx)(
                        s.Z,
                        (0, a._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {CollapsibleContainerConnected} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <CollapsibleContainerConnected\n        id="collapsible-container-example-3"\n        title="Collapsible Container disabled"\n        informationUrl="https://www.coveo.com/en"\n        informationTooltip={{\n            title: "I display information and if you click me you\'ll be led to a URL that was provided to me.",\n        }}\n        disabled\n    >\n        something!\n    </CollapsibleContainerConnected>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, t.jsx)(d, {})},
                        ),
                    );
                },
                u = function () {
                    return (0, t.jsx)(r.Z3M, {
                        id: 'collapsible-container-example-1',
                        title: 'Collapsible Container expanded on mount',
                        informationUrl: 'https://www.coveo.com/en',
                        informationTooltip: {
                            title: "I display information and if you click me you'll be led to a URL that was provided to me.",
                        },
                        expandedOnMount: !0,
                        children: 'I am expanded on mount!',
                    });
                },
                f = function (n) {
                    return (0, t.jsx)(
                        s.Z,
                        (0, a._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {CollapsibleContainerConnected} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <CollapsibleContainerConnected\n        id="collapsible-container-example-1"\n        title="Collapsible Container expanded on mount"\n        informationUrl="https://www.coveo.com/en"\n        informationTooltip={{\n            title: "I display information and if you click me you\'ll be led to a URL that was provided to me.",\n        }}\n        expandedOnMount\n    >\n        I am expanded on mount!\n    </CollapsibleContainerConnected>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, t.jsx)(u, {})},
                        ),
                    );
                },
                b = function () {
                    return (0, t.jsx)(r.y9v, {
                        id: 'collapsible-info-box-example-1',
                        title: 'Lean more about collapsible info boxes.',
                        children: 'By default, this component will render with an info icon',
                    });
                },
                x = function (n) {
                    return (0, t.jsx)(
                        s.Z,
                        (0, a._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {CollapsibleInfoBox} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <CollapsibleInfoBox id="collapsible-info-box-example-1" title="Lean more about collapsible info boxes.">\n        By default, this component will render with an info icon\n    </CollapsibleInfoBox>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, t.jsx)(b, {})},
                        ),
                    );
                },
                C = o(66809),
                h = function () {
                    return (0, t.jsx)(C.X, {
                        id: 'CollapsibleConnected',
                        sourcePath: '/packages/react/src/components/collapsible/CollapsibleConnected.tsx',
                        title: 'Collapsible',
                        section: 'Layout',
                        description: 'A collapsible allows users to hide or display a section of content.',
                        demo: (0, t.jsx)(c, {}),
                        propsMetadata: l.B6,
                        examples: {
                            infoBoxWrapper: (0, t.jsx)(x, {title: 'Info box wrapper'}),
                            expanded: (0, t.jsx)(f, {title: 'Expanded on mount'}),
                            disabled: (0, t.jsx)(m, {title: 'Disabled'}),
                        },
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 33728));
        }),
            (_N_E = n.O()));
    },
]);
