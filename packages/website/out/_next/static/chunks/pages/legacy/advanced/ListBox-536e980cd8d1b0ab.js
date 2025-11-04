(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [70235],
    {
        3777: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/advanced/ListBox',
                function () {
                    return t(77838);
                },
            ]);
        },
        77838: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    default: function () {
                        return w;
                    },
                }));
            var i = t(97458),
                o = t(19523),
                s = t(52071),
                a = t(88966),
                l = t(39668),
                d = t(94807),
                r = function () {
                    return (0, i.jsx)('div', {style: {width: 300}, children: (0, i.jsx)(d.wbU, {})});
                },
                p = function (e) {
                    return (0, i.jsx)(
                        l.Z,
                        (0, a._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {ListBox} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <div style={{width: 300}}>\n        <ListBox />\n    </div>\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(r, {})},
                        ),
                    );
                },
                u = function () {
                    return (0, i.jsx)('div', {style: {width: 300}, children: (0, i.jsx)(d.wbU, {isLoading: !0})});
                },
                c = function (e) {
                    return (0, i.jsx)(
                        l.Z,
                        (0, a._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {ListBox} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <div style={{width: 300}}>\n        <ListBox isLoading />\n    </div>\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(u, {})},
                        ),
                    );
                },
                x = function () {
                    return (0, i.jsx)('div', {
                        style: {width: 300},
                        children: (0, i.jsx)(d.wbU, {
                            items: [
                                {value: '1', displayValue: 'All'},
                                {value: 'soDivider', divider: !0},
                                {value: '2', displayValue: 'Option 2', disabled: !0},
                                {value: '3', displayValue: 'Option 3'},
                                {
                                    value: '4',
                                    displayValue: 'Option 4',
                                    prepend: {content: (0, i.jsx)(d.Cts, {label: 'Tag', isSmall: !0, type: d.gZO.New})},
                                },
                                {
                                    value: '5',
                                    displayValue: 'Option 5',
                                    append: {content: (0, i.jsx)(d.Cts, {label: 'Tag', isSmall: !0, type: d.gZO.New})},
                                },
                            ],
                        }),
                    });
                },
                v = function (e) {
                    return (0, i.jsx)(
                        l.Z,
                        (0, a._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {Badge, BadgeType, ListBox} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <div style={{width: 300}}>\n        <ListBox\n            items={[\n                {\n                    value: '1',\n                    displayValue: 'All',\n                },\n                {\n                    value: 'soDivider',\n                    divider: true,\n                },\n                {\n                    value: '2',\n                    displayValue: 'Option 2',\n                    disabled: true,\n                },\n                {value: '3', displayValue: 'Option 3'},\n                {\n                    value: '4',\n                    displayValue: 'Option 4',\n                    prepend: {content: <Badge label=\"Tag\" isSmall type={BadgeType.New} />},\n                },\n                {\n                    value: '5',\n                    displayValue: 'Option 5',\n                    append: {content: <Badge label=\"Tag\" isSmall type={BadgeType.New} />},\n                },\n            ]}\n        />\n    </div>\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(x, {})},
                        ),
                    );
                },
                m = t(4778),
                y = function () {
                    return (0, i.jsx)('div', {
                        style: {width: 300},
                        children: (0, i.jsx)(d.wbU, {
                            items: [
                                {value: '1', displayValue: 'Option 1'},
                                {value: '2', displayValue: 'Option 2'},
                                {value: '3', displayValue: 'Option 3'},
                            ],
                            footer: (0, i.jsxs)('div', {
                                className: 'select-footer',
                                children: [(0, i.jsx)(m.ClockSize24Px, {}), 'Look at my Footer'],
                            }),
                        }),
                    });
                },
                f = function (e) {
                    return (0, i.jsx)(
                        l.Z,
                        (0, a._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {ListBox} from '@coveord/plasma-react';\nimport {ClockSize24Px} from '@coveord/plasma-react-icons';\n\nconst Demo = () => (\n    <div style={{width: 300}}>\n        <ListBox\n            items={[\n                {\n                    value: '1',\n                    displayValue: 'Option 1',\n                },\n                {\n                    value: '2',\n                    displayValue: 'Option 2',\n                },\n                {\n                    value: '3',\n                    displayValue: 'Option 3',\n                },\n            ]}\n            footer={\n                <div className=\"select-footer\">\n                    <ClockSize24Px />\n                    Look at my Footer\n                </div>\n            }\n        />\n    </div>\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(y, {})},
                        ),
                    );
                },
                h = t(66809),
                w = function () {
                    return (0, i.jsx)(h.X, {
                        id: 'ListBox',
                        title: 'List Box',
                        section: 'Advanced',
                        description: 'A list of items from which to choose from.',
                        demo: (0, i.jsx)(v, {center: !0}),
                        sourcePath: '/packages/react/src/components/listBox/ListBox.tsx',
                        propsMetadata: o._w,
                        examples: {
                            loading: (0, i.jsx)(c, {center: !0, title: 'Loading'}),
                            empty: (0, i.jsx)(p, {center: !0, title: 'Empty state'}),
                            withFooter: (0, i.jsx)(f, {center: !0, title: 'List with a footer'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 3777));
        }),
            (_N_E = e.O()));
    },
]);
