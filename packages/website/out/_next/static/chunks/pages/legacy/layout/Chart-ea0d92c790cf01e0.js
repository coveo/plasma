(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [77904],
    {
        28343: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/Chart',
                function () {
                    return t(69109);
                },
            ]);
        },
        69109: function (n, e, t) {
            'use strict';
            (t.r(e),
                t.d(e, {
                    ChartDemos: function () {
                        return O;
                    },
                    default: function () {
                        return P;
                    },
                }));
            var r = t(97458),
                i = t(19523),
                a = t(52071),
                s = t(88966),
                d = t(39668),
                x = t(94807),
                h = [
                    {
                        label: 'First',
                        data: [
                            {x: -1, y: 3},
                            {x: 2, y: 6},
                            {x: 3, y: 2},
                            {x: 4, y: 12},
                            {x: 5, y: 8},
                        ],
                    },
                ],
                o = function () {
                    return (0, r.jsx)('div', {
                        style: {height: 400},
                        children: (0, r.jsx)(x.BOj, {
                            renderChart: function (n, e) {
                                return (0, r.jsx)(x.zOv, {
                                    series: [h[0]],
                                    height: e,
                                    width: n,
                                    padding: {left: n / 12, right: n / 12},
                                    children: (0, r.jsx)(x.QG9, {}),
                                });
                            },
                        }),
                    });
                },
                y = function (n) {
                    return (0, r.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {BarSeries, ChartContainer, XYChart} from '@coveord/plasma-react';\n\nconst DemoPage = () => (\n    <div style={{height: 400}}>\n        <ChartContainer\n            renderChart={(width, height) => (\n                <XYChart\n                    series={[data[0]]}\n                    height={height}\n                    width={width}\n                    padding={{left: width / 12, right: width / 12}}\n                >\n                    {<BarSeries />}\n                </XYChart>\n            )}\n        />\n    </div>\n);\n\nconst data = [\n    {\n        label: 'First',\n        data: [\n            {x: -1, y: 3},\n            {x: 2, y: 6},\n            {x: 3, y: 2},\n            {x: 4, y: 12},\n            {x: 5, y: 8},\n        ],\n    },\n];\n\nexport default DemoPage;\n",
                                },
                                n,
                            ),
                            {children: (0, r.jsx)(o, {})},
                        ),
                    );
                },
                l = t(6901),
                c = t.n(l),
                u = function () {
                    return (0, r.jsx)('div', {
                        style: {height: 400},
                        children: (0, r.jsx)(x.BOj, {
                            renderChart: function (n, e) {
                                return (0, r.jsx)(x.zOv, {
                                    series: p,
                                    height: e,
                                    width: n,
                                    xFormat: function (n) {
                                        return c().unix(n).format('YYYY-MM-DD');
                                    },
                                    children: (0, r.jsxs)(x._dS, {
                                        x: {tickTextSize: 120},
                                        y: {show: !1},
                                        children: [(0, r.jsx)(x.QG9, {}), (0, r.jsx)(x.h7M, {sort: !0})],
                                    }),
                                });
                            },
                        }),
                    });
                },
                p = [
                    {
                        label: 'First',
                        data: Array.from(Array(25).keys()).map(function (n) {
                            return {x: c()().startOf('day').subtract(n, 'day').unix(), y: n + 1};
                        }),
                    },
                ],
                g = function (n) {
                    return (0, r.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import moment from 'moment';\nimport {BarSeries, ChartTooltip, ChartContainer, XYAxis, XYChart} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <div style={{height: 400}}>\n        <ChartContainer\n            renderChart={(width, height) => (\n                <XYChart\n                    series={dateData}\n                    height={height}\n                    width={width}\n                    xFormat={(value: number) => moment.unix(value).format('YYYY-MM-DD')}\n                >\n                    <XYAxis x={{tickTextSize: 120}} y={{show: false}}>\n                        <BarSeries />\n                        <ChartTooltip sort />\n                    </XYAxis>\n                </XYChart>\n            )}\n        />\n    </div>\n);\nexport default Demo;\n\nconst dateData = [\n    {\n        label: 'First',\n        data: Array.from(Array(25).keys()).map((i: number) => ({\n            x: moment().startOf('day').subtract(i, 'day').unix(),\n            y: i + 1,\n        })),\n    },\n];\n",
                                },
                                n,
                            ),
                            {children: (0, r.jsx)(u, {})},
                        ),
                    );
                },
                C = [
                    {
                        label: 'First',
                        data: [
                            {x: -1, y: 3},
                            {x: 2, y: 6},
                            {x: 3, y: 2},
                            {x: 4, y: 12},
                            {x: 5, y: 8},
                        ],
                    },
                ],
                m = function () {
                    return (0, r.jsx)('div', {
                        style: {height: 400},
                        children: (0, r.jsx)(x.BOj, {
                            renderChart: function (n, e) {
                                return (0, r.jsx)(x.zOv, {
                                    series: [C[0]],
                                    height: e,
                                    width: n,
                                    padding: void 0,
                                    children: (0, r.jsx)(x.ehF, {}),
                                });
                            },
                        }),
                    });
                },
                f = function (n) {
                    return (0, r.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {LineSeries, ChartContainer, XYChart} from '@coveord/plasma-react';\n\nconst data = [\n    {\n        label: 'First',\n        data: [\n            {x: -1, y: 3},\n            {x: 2, y: 6},\n            {x: 3, y: 2},\n            {x: 4, y: 12},\n            {x: 5, y: 8},\n        ],\n    },\n];\nconst DemoPage = () => (\n    <div style={{height: 400}}>\n        <ChartContainer\n            renderChart={(width, height) => (\n                <XYChart series={[data[0]]} height={height} width={width} padding={undefined}>\n                    {<LineSeries />}\n                </XYChart>\n            )}\n        />\n    </div>\n);\n\nexport default DemoPage;\n",
                                },
                                n,
                            ),
                            {children: (0, r.jsx)(m, {})},
                        ),
                    );
                },
                j = function () {
                    return (0, r.jsx)('div', {
                        style: {height: 400},
                        children: (0, r.jsx)(x.BOj, {
                            renderChart: function (n, e) {
                                return (0, r.jsx)(x.zOv, {
                                    series: v,
                                    height: e,
                                    width: n,
                                    children: (0, r.jsxs)(x._dS, {
                                        x: {innerPadding: 30},
                                        y: {innerPadding: 30},
                                        children: [
                                            (0, r.jsx)(x.asu, {padding: 30}),
                                            (0, r.jsx)(x._NO, {padding: 30}),
                                            (0, r.jsx)(x.ehF, {}),
                                            (0, r.jsx)(x.mJX, {value: 3, label: 'Three', padding: 30}),
                                            (0, r.jsx)(x.mJX, {value: 2, label: 'Two', padding: 30, isVertical: !0}),
                                        ],
                                    }),
                                });
                            },
                        }),
                    });
                },
                v = [
                    {
                        label: 'First',
                        data: [
                            {x: -1, y: 3},
                            {x: 0, y: 3},
                            {x: 1, y: 3},
                            {x: 2, y: 6},
                            {x: 3, y: 2},
                            {x: 4, y: 12},
                            {x: 5, y: 8},
                        ],
                    },
                    {
                        label: 'Second',
                        data: [
                            {x: -1, y: 1},
                            {x: 0, y: 5},
                            {x: 1, y: 4},
                            {x: 2, y: 0},
                            {x: 3, y: 6},
                            {x: 4, y: 7},
                            {x: 5, y: 4},
                        ],
                    },
                    {
                        label: 'Third',
                        data: [
                            {x: -1, y: 4},
                            {x: 0, y: 7},
                            {x: 1, y: 1},
                            {x: 2, y: 1},
                            {x: 3, y: 1},
                            {x: 4, y: 2},
                            {x: 5, y: 7},
                        ],
                    },
                ],
                w = function (n) {
                    return (0, r.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {LineSeries, InfoLine, ChartContainer, XGrid, YGrid, XYAxis, XYChart} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <div style={{height: 400}}>\n        <ChartContainer\n            renderChart={(width, height) => (\n                <XYChart series={data} height={height} width={width}>\n                    <XYAxis x={{innerPadding: 30}} y={{innerPadding: 30}}>\n                        <XGrid padding={30} />\n                        <YGrid padding={30} />\n                        <LineSeries />\n                        <InfoLine value={3} label=\"Three\" padding={30} />\n                        <InfoLine value={2} label=\"Two\" padding={30} isVertical />\n                    </XYAxis>\n                </XYChart>\n            )}\n        />\n    </div>\n);\nexport default Demo;\n\nconst data = [\n    {\n        label: 'First',\n        data: [\n            {x: -1, y: 3},\n            {x: 0, y: 3},\n            {x: 1, y: 3},\n            {x: 2, y: 6},\n            {x: 3, y: 2},\n            {x: 4, y: 12},\n            {x: 5, y: 8},\n        ],\n    },\n    {\n        label: 'Second',\n        data: [\n            {x: -1, y: 1},\n            {x: 0, y: 5},\n            {x: 1, y: 4},\n            {x: 2, y: 0},\n            {x: 3, y: 6},\n            {x: 4, y: 7},\n            {x: 5, y: 4},\n        ],\n    },\n    {\n        label: 'Third',\n        data: [\n            {x: -1, y: 4},\n            {x: 0, y: 7},\n            {x: 1, y: 1},\n            {x: 2, y: 1},\n            {x: 3, y: 1},\n            {x: 4, y: 2},\n            {x: 5, y: 7},\n        ],\n    },\n];\n",
                                },
                                n,
                            ),
                            {children: (0, r.jsx)(j, {})},
                        ),
                    );
                },
                Y = function () {
                    return (0, r.jsx)('div', {
                        style: {height: 400},
                        children: (0, r.jsx)(x.BOj, {
                            renderChart: function (n, e) {
                                return (0, r.jsx)(x.zOv, {
                                    series: S,
                                    height: e,
                                    width: n,
                                    color: function (n, e, t) {
                                        return t && t.y > 7 ? X[n] : e[n];
                                    },
                                    xFormat: function (n) {
                                        return ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'][n + 1];
                                    },
                                    yFormat: function (n) {
                                        return 10 * n + '%';
                                    },
                                    children: (0, r.jsxs)(x._dS, {
                                        x: {innerPadding: n / 12},
                                        y: {show: !1},
                                        children: [
                                            (0, r.jsx)(x.QG9, {}),
                                            (0, r.jsx)(x.ehF, {}),
                                            (0, r.jsx)(x.nCZ, {}),
                                            (0, r.jsx)(x.h7M, {sort: !0}),
                                        ],
                                    }),
                                });
                            },
                        }),
                    });
                },
                S = [
                    {
                        label: 'First',
                        data: [
                            {x: -1, y: 3},
                            {x: 0, y: 3},
                            {x: 1, y: 3},
                            {x: 2, y: 6},
                            {x: 3, y: 2},
                            {x: 4, y: 12},
                            {x: 5, y: 8},
                        ],
                    },
                    {
                        label: 'Second',
                        data: [
                            {x: -1, y: 1},
                            {x: 0, y: 5},
                            {x: 1, y: 4},
                            {x: 2, y: 0},
                            {x: 3, y: 6},
                            {x: 4, y: 7},
                            {x: 5, y: 4},
                        ],
                    },
                    {
                        label: 'Third',
                        data: [
                            {x: -1, y: 4},
                            {x: 0, y: 7},
                            {x: 1, y: 1},
                            {x: 2, y: 1},
                            {x: 3, y: 1},
                            {x: 4, y: 2},
                            {x: 5, y: 7},
                        ],
                    },
                ],
                X = ['var(--deprecated-orange-1)', 'var(--deprecated-orange)', 'var(--deprecated-coveo-orange)'],
                b = function (n) {
                    return (0, r.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {\n    BarSeries,\n    LineSeries,\n    ScatterSeries,\n    ChartTooltip,\n    ChartContainer,\n    XYChart,\n    XYAxis,\n    XYPoint,\n} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <div style={{height: 400}}>\n        <ChartContainer\n            renderChart={(width, height) => (\n                <XYChart\n                    series={data}\n                    height={height}\n                    width={width}\n                    color={(serie: number, colorPattern: string[], point?: XYPoint) =>\n                        point && point.y > 7 ? overPattern[serie] : colorPattern[serie]\n                    }\n                    xFormat={(value: number) => ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'][value + 1]}\n                    yFormat={(value: number) => value * 10 + '%'}\n                >\n                    <XYAxis x={{innerPadding: width / 12}} y={{show: false}}>\n                        <BarSeries />\n                        <LineSeries />\n                        <ScatterSeries />\n                        <ChartTooltip sort />\n                    </XYAxis>\n                </XYChart>\n            )}\n        />\n    </div>\n);\nexport default Demo;\n\nconst data = [\n    {\n        label: 'First',\n        data: [\n            {x: -1, y: 3},\n            {x: 0, y: 3},\n            {x: 1, y: 3},\n            {x: 2, y: 6},\n            {x: 3, y: 2},\n            {x: 4, y: 12},\n            {x: 5, y: 8},\n        ],\n    },\n    {\n        label: 'Second',\n        data: [\n            {x: -1, y: 1},\n            {x: 0, y: 5},\n            {x: 1, y: 4},\n            {x: 2, y: 0},\n            {x: 3, y: 6},\n            {x: 4, y: 7},\n            {x: 5, y: 4},\n        ],\n    },\n    {\n        label: 'Third',\n        data: [\n            {x: -1, y: 4},\n            {x: 0, y: 7},\n            {x: 1, y: 1},\n            {x: 2, y: 1},\n            {x: 3, y: 1},\n            {x: 4, y: 2},\n            {x: 5, y: 7},\n        ],\n    },\n];\n\nconst overPattern = ['var(--deprecated-orange-1)', 'var(--deprecated-orange)', 'var(--deprecated-coveo-orange)'];\n",
                                },
                                n,
                            ),
                            {children: (0, r.jsx)(Y, {})},
                        ),
                    );
                },
                _ = function () {
                    return (0, r.jsx)('div', {
                        style: {height: 400},
                        children: (0, r.jsx)(x.BOj, {
                            renderChart: function (n, e) {
                                return (0, r.jsx)(x.zOv, {
                                    series: [F[0]],
                                    height: e,
                                    width: n,
                                    padding: void 0,
                                    children: (0, r.jsx)(x.nCZ, {}),
                                });
                            },
                        }),
                    });
                },
                F = [
                    {
                        label: 'First',
                        data: [
                            {x: -1, y: 3},
                            {x: 2, y: 6},
                            {x: 3, y: 2},
                            {x: 4, y: 12},
                            {x: 5, y: 8},
                        ],
                    },
                ],
                D = function (n) {
                    return (0, r.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {ScatterSeries, ChartContainer, XYChart} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <div style={{height: 400}}>\n        <ChartContainer\n            renderChart={(width, height) => (\n                <XYChart series={[data[0]]} height={height} width={width} padding={undefined}>\n                    {<ScatterSeries />}\n                </XYChart>\n            )}\n        />\n    </div>\n);\nexport default Demo;\n\nconst data = [\n    {\n        label: 'First',\n        data: [\n            {x: -1, y: 3},\n            {x: 2, y: 6},\n            {x: 3, y: 2},\n            {x: 4, y: 12},\n            {x: 5, y: 8},\n        ],\n    },\n];\n",
                                },
                                n,
                            ),
                            {children: (0, r.jsx)(_, {})},
                        ),
                    );
                },
                T = t(66809),
                O = function () {
                    return (0, r.jsx)(T.X, {
                        id: 'ChartContainer',
                        sourcePath: '/packages/react/src/components/chart/ChartContainer.tsx',
                        title: 'Charts',
                        section: 'Layout',
                        description:
                            'A chart compares sets of complex data to provide insights on their relationship and status.',
                        demo: (0, r.jsx)(f, {}),
                        propsMetadata: i.gW,
                        examples: {
                            scatterSeries: (0, r.jsx)(D, {title: 'Scatter series'}),
                            barSeries: (0, r.jsx)(y, {title: 'Bar series'}),
                            infoLines: (0, r.jsx)(w, {title: 'With info lines'}),
                            dateChart: (0, r.jsx)(g, {title: 'Date chart'}),
                            complex: (0, r.jsx)(b, {title: 'Complex chart'}),
                        },
                    });
                },
                P = O;
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 28343));
        }),
            (_N_E = n.O()));
    },
]);
