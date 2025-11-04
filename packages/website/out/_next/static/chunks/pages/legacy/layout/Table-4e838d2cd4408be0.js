(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [17351],
    {
        72174: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/Table',
                function () {
                    return t(27813);
                },
            ]);
        },
        27813: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    default: function () {
                        return ev;
                    },
                }));
            var a = t(97458),
                r = t(19523),
                o = t(52071),
                s = t(88966),
                d = t(39668),
                i = t(94807),
                l = t(4778),
                c = t(58085),
                u = 'mainExampleTableId',
                m = function () {
                    return (0, a.jsx)(i.s_h, {
                        id: u,
                        className: 'table',
                        data: w,
                        renderBody: function (e) {
                            return h(e, u);
                        },
                        tableHeader: p(),
                        showBorderTop: !0,
                        showBorderBottom: !0,
                    });
                },
                p = function () {
                    return (0, a.jsx)('thead', {
                        children: (0, a.jsxs)('tr', {
                            children: [
                                (0, a.jsx)('th', {children: 'City'}),
                                (0, a.jsx)('th', {children: 'Username'}),
                                (0, a.jsx)('th', {children: 'Password'}),
                                (0, a.jsx)('th', {children: 'Badge'}),
                            ],
                        }),
                    });
                },
                h = function (e, n) {
                    return null == e
                        ? void 0
                        : e.map(function (e) {
                              return (0, a.jsxs)(
                                  i.vit,
                                  {
                                      id: e.id,
                                      tableId: n,
                                      children: [
                                          (0, a.jsx)('td', {children: e.city}, 'city'),
                                          (0, a.jsx)('td', {children: e.username.toLowerCase()}, 'username'),
                                          (0, a.jsx)('td', {children: e.password.toLowerCase()}, 'password'),
                                          (0, a.jsx)('td', {
                                              children: (0, a.jsx)(i.Cts, {
                                                  label: 'King',
                                                  icon: l.CloudSize16Px,
                                                  isSmall: !0,
                                                  type: i.gZO.Success,
                                              }),
                                          }),
                                      ],
                                  },
                                  e.id,
                              );
                          });
                },
                w = Array.from([, , , , ,]).map(function () {
                    return {
                        city: (0, c.fH)({count: 1, units: 'word'}),
                        username: (0, c.fH)({count: 2, units: 'word'}),
                        password: (0, c.fH)({count: 1, units: 'word'}),
                        id: (0, c.fH)({count: 1, units: 'word'}),
                    };
                }),
                b = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {Badge, BadgeType, TableHOC, TableRowConnected} from '@coveord/plasma-react';\nimport {CloudSize16Px} from '@coveord/plasma-react-icons';\nimport {loremIpsum} from 'lorem-ipsum';\n\nconst TABLE_ID: string = 'mainExampleTableId';\n\nconst Demo = () => (\n    <TableHOC\n        id={TABLE_ID}\n        className=\"table\"\n        data={dataForRows}\n        renderBody={(data: IExampleRowData[]) => generateRows(data, TABLE_ID)}\n        tableHeader={renderHeader()}\n        showBorderTop\n        showBorderBottom\n    />\n);\nexport default Demo;\n\nconst renderHeader = () => (\n    <thead>\n        <tr>\n            <th>City</th>\n            <th>Username</th>\n            <th>Password</th>\n            <th>Badge</th>\n        </tr>\n    </thead>\n);\n\nconst generateRows = (allData: IExampleRowData[], tableId: string) =>\n    allData?.map((data: IExampleRowData) => (\n        <TableRowConnected id={data.id} tableId={tableId} key={data.id}>\n            <td key=\"city\">{data.city}</td>\n            <td key=\"username\">{data.username.toLowerCase()}</td>\n            <td key=\"password\">{data.password.toLowerCase()}</td>\n            <td>\n                <Badge label={'King'} icon={CloudSize16Px} isSmall type={BadgeType.Success} />\n            </td>\n        </TableRowConnected>\n    ));\n\ninterface IExampleRowData {\n    city: string;\n    username: string;\n    password: string;\n    id: string;\n}\n\nconst generateData = (length: number): IExampleRowData[] =>\n    Array.from(Array(length)).map(() => ({\n        city: loremIpsum({count: 1, units: 'word'}),\n        username: loremIpsum({count: 2, units: 'word'}),\n        password: loremIpsum({count: 1, units: 'word'}),\n        id: loremIpsum({count: 1, units: 'word'}),\n    }));\n\nconst dataForRows = generateData(5);\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(m, {})},
                        ),
                    );
                },
                y = t(2031),
                x = 'withActionsTableId',
                f = function () {
                    return (0, a.jsx)(g, {
                        id: x,
                        className: 'table',
                        data: D,
                        renderBody: function (e) {
                            return C(e, x);
                        },
                        tableHeader: T(),
                        showBorderTop: !0,
                        showBorderBottom: !0,
                    });
                },
                g = (0, y.qC)((0, i.bfr)())(i.s_h),
                I = [
                    {
                        primary: !0,
                        icon: l.EditSize24Px,
                        name: 'Edit',
                        enabled: !0,
                        trigger: function () {
                            return alert('trigger on action');
                        },
                        callOnDoubleClick: !0,
                    },
                ],
                T = function () {
                    return (0, a.jsx)('thead', {
                        children: (0, a.jsxs)('tr', {
                            children: [
                                (0, a.jsx)('th', {children: 'City'}),
                                (0, a.jsx)('th', {children: 'Username'}),
                                (0, a.jsx)('th', {children: 'Password'}),
                            ],
                        }),
                    });
                },
                C = function (e, n) {
                    return null == e
                        ? void 0
                        : e.map(function (e) {
                              return (0, a.jsxs)(
                                  i.vit,
                                  {
                                      id: e.id,
                                      tableId: n,
                                      actions: I,
                                      children: [
                                          (0, a.jsx)('td', {children: e.city}, 'city'),
                                          (0, a.jsx)('td', {children: e.username.toLowerCase()}, 'username'),
                                          (0, a.jsx)('td', {children: e.password.toLowerCase()}, 'password'),
                                      ],
                                  },
                                  e.id,
                              );
                          });
                },
                D = Array.from([, , , , ,]).map(function () {
                    return {
                        city: (0, c.fH)({count: 1, units: 'word'}),
                        username: (0, c.fH)({count: 2, units: 'word'}),
                        password: (0, c.fH)({count: 1, units: 'word'}),
                        id: (0, c.fH)({count: 1, units: 'word'}),
                    };
                }),
                j = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {IActionOptions, TableHOC, TableRowConnected, tableWithActions} from '@coveord/plasma-react';\nimport {compose} from 'redux';\nimport {loremIpsum} from 'lorem-ipsum';\nimport {EditSize24Px} from '@coveord/plasma-react-icons';\n\nconst TABLE_ID: string = 'withActionsTableId';\n\nconst Demo = () => (\n    <TableComposed\n        id={TABLE_ID}\n        className=\"table\"\n        data={dataForRows}\n        renderBody={(data: IExampleRowData[]) => generateRows(data, TABLE_ID)}\n        tableHeader={renderHeader()}\n        showBorderTop\n        showBorderBottom\n    />\n);\nexport default Demo;\n\nconst TableComposed = compose<any>(tableWithActions())(TableHOC);\n\nconst rowActions: IActionOptions[] = [\n    {\n        primary: true,\n        icon: EditSize24Px,\n        name: 'Edit',\n        enabled: true,\n        trigger: () => alert('trigger on action'),\n        callOnDoubleClick: true,\n    },\n];\n\nconst renderHeader = () => (\n    <thead>\n        <tr>\n            <th>City</th>\n            <th>Username</th>\n            <th>Password</th>\n        </tr>\n    </thead>\n);\n\nconst generateRows = (allData: IExampleRowData[], tableId: string) =>\n    allData?.map((data: IExampleRowData) => (\n        <TableRowConnected id={data.id} tableId={tableId} key={data.id} actions={rowActions}>\n            <td key=\"city\">{data.city}</td>\n            <td key=\"username\">{data.username.toLowerCase()}</td>\n            <td key=\"password\">{data.password.toLowerCase()}</td>\n        </TableRowConnected>\n    ));\n\ninterface IExampleRowData {\n    city: string;\n    username: string;\n    password: string;\n    id: string;\n}\n\nconst generateData = (length: number): IExampleRowData[] =>\n    Array.from(Array(length)).map(() => ({\n        city: loremIpsum({count: 1, units: 'word'}),\n        username: loremIpsum({count: 2, units: 'word'}),\n        password: loremIpsum({count: 1, units: 'word'}),\n        id: loremIpsum({count: 1, units: 'word'}),\n    }));\n\nconst dataForRows = generateData(5);\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(f, {})},
                        ),
                    );
                },
                B = 'withBlankslateTableId',
                R = function () {
                    return (0, a.jsx)(E, {});
                },
                E = function () {
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(H, {
                            id: B,
                            className: 'table',
                            data: [],
                            renderBody: function () {
                                return S;
                            },
                            tableHeader: k(),
                        }),
                    });
                },
                H = (0, y.qC)((0, i.JlW)({title: 'No data caused the table to be empty'}), (0, i.d$A)())(i.s_h),
                k = function () {
                    return (0, a.jsx)('thead', {
                        children: (0, a.jsxs)('tr', {
                            children: [
                                (0, a.jsx)('th', {children: 'City'}),
                                (0, a.jsx)('th', {children: 'Username'}),
                                (0, a.jsx)('th', {children: 'Badge'}),
                            ],
                        }),
                    });
                },
                S = [
                    {city: 'Qu\xe9bec', username: 'germinator', id: 'id-1'},
                    {city: 'Ottawa', username: 'canitalktoyouaboutvisualtesting', id: 'id-2'},
                    {city: 'Toronto', username: 'kienposter', id: 'id-3'},
                    {city: 'Montr\xe9al', username: 'notfound', id: 'id-3'},
                ].map(function (e) {
                    return (0, a.jsxs)(
                        i.vit,
                        {
                            id: e.id,
                            tableId: B,
                            children: [
                                (0, a.jsx)('td', {children: e.city}, 'city'),
                                (0, a.jsx)('td', {children: e.username.toLowerCase()}, 'username'),
                                (0, a.jsx)('td', {
                                    children: (0, a.jsx)(i.Cts, {
                                        label: 'King',
                                        icon: l.CloudSize16Px,
                                        isSmall: !0,
                                        type: i.gZO.Success,
                                    }),
                                }),
                            ],
                        },
                        e.id,
                    );
                }),
                _ = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {\n    Badge,\n    BadgeType,\n    TableHOC,\n    TableRowConnected,\n    tableWithBlankSlate,\n    tableWithNewPagination,\n} from '@coveord/plasma-react';\nimport {CloudSize16Px} from '@coveord/plasma-react-icons';\nimport {FunctionComponent} from 'react';\nimport {compose} from 'redux';\n\nconst TABLE_ID: string = 'withBlankslateTableId';\n\nconst Demo = () => <WithBlankSlate />;\nexport default Demo;\n\nconst WithBlankSlate: FunctionComponent = () => (\n    <>\n        <TableComposed\n            id={TABLE_ID}\n            className=\"table\"\n            data={[]}\n            renderBody={() => renderRows}\n            tableHeader={renderHeader()}\n        />\n    </>\n);\n\nconst TableComposed = compose(\n    tableWithBlankSlate({title: 'No data caused the table to be empty'}),\n    tableWithNewPagination(),\n)(TableHOC);\n\nconst renderHeader = () => (\n    <thead>\n        <tr>\n            <th>City</th>\n            <th>Username</th>\n            <th>Badge</th>\n        </tr>\n    </thead>\n);\n\nconst data = [\n    {\n        city: 'Qu\xe9bec',\n        username: 'germinator',\n        id: 'id-1',\n    },\n    {\n        city: 'Ottawa',\n        username: 'canitalktoyouaboutvisualtesting',\n        id: 'id-2',\n    },\n    {\n        city: 'Toronto',\n        username: 'kienposter',\n        id: 'id-3',\n    },\n    {\n        city: 'Montr\xe9al',\n        username: 'notfound',\n        id: 'id-3',\n    },\n];\n\nconst renderRows = data?.map((item) => (\n    <TableRowConnected id={item.id} tableId={TABLE_ID} key={item.id}>\n        <td key=\"city\">{item.city}</td>\n        <td key=\"username\">{item.username.toLowerCase()}</td>\n        <td>\n            <Badge label={'King'} icon={CloudSize16Px} isSmall type={BadgeType.Success} />\n        </td>\n    </TableRowConnected>\n));\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(R, {})},
                        ),
                    );
                },
                L = t(6901),
                A = t.n(L),
                v = 'withDatePickerTableId',
                P = function () {
                    return (0, a.jsx)(N, {
                        id: v,
                        className: 'table',
                        data: F,
                        renderBody: function (e) {
                            return W(e, v);
                        },
                        tableHeader: U(),
                        showBorderTop: !0,
                        showBorderBottom: !0,
                    });
                },
                O = [
                    {
                        title: 'Select a date range',
                        quickOptions: [
                            {
                                label: 'Last Week',
                                value: function () {
                                    return A()().subtract(1, 'week').toDate().toString() + '%' + new Date().toString();
                                },
                            },
                            {
                                label: 'Last day',
                                value: function () {
                                    return A()().subtract(1, 'day').toDate().toString() + '%' + new Date().toString();
                                },
                            },
                        ],
                        isRange: !0,
                        withTime: !1,
                        hasSetToNowButton: !0,
                    },
                ],
                N = (0, y.qC)(
                    (0, i.xYK)(function () {
                        return {
                            datesSelectionBoxes: O,
                            initialDateRange: [A()().subtract(75, 'years').toDate(), A()().toDate()],
                        };
                    }),
                )(i.s_h),
                U = function () {
                    return (0, a.jsx)('thead', {
                        children: (0, a.jsxs)('tr', {
                            children: [
                                (0, a.jsx)('th', {children: 'City'}),
                                (0, a.jsx)('th', {children: 'Username'}),
                                (0, a.jsx)('th', {children: 'Password'}),
                            ],
                        }),
                    });
                },
                W = function (e, n) {
                    return null == e
                        ? void 0
                        : e.map(function (e) {
                              return (0, a.jsxs)(
                                  i.vit,
                                  {
                                      id: e.id,
                                      tableId: n,
                                      children: [
                                          (0, a.jsx)('td', {children: e.city}, 'city'),
                                          (0, a.jsx)('td', {children: e.username.toLowerCase()}, 'username'),
                                          (0, a.jsx)('td', {children: e.password.toLowerCase()}, 'password'),
                                      ],
                                  },
                                  e.id,
                              );
                          });
                },
                F = Array.from([, , , , ,]).map(function () {
                    return {
                        city: (0, c.fH)({count: 1, units: 'word'}),
                        username: (0, c.fH)({count: 2, units: 'word'}),
                        password: (0, c.fH)({count: 1, units: 'word'}),
                        id: (0, c.fH)({count: 1, units: 'word'}),
                    };
                }),
                q = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {\n    ConfigSupplier,\n    IDatesSelectionBox,\n    ITableWithDatePickerConfig,\n    TableHOC,\n    TableRowConnected,\n    tableWithDatePicker,\n} from '@coveord/plasma-react';\nimport {compose} from 'redux';\nimport moment from 'moment';\nimport {loremIpsum} from 'lorem-ipsum';\n\nconst TABLE_ID: string = 'withDatePickerTableId';\n\nconst Demo = () => (\n    <TableComposed\n        id={TABLE_ID}\n        className=\"table\"\n        data={dataForRows}\n        renderBody={(data: IExampleRowData[]) => generateRows(data, TABLE_ID)}\n        tableHeader={renderHeader()}\n        showBorderTop\n        showBorderBottom\n    />\n);\nexport default Demo;\n\nconst selectionOptions: IDatesSelectionBox[] = [\n    {\n        title: 'Select a date range',\n        quickOptions: [\n            {\n                label: 'Last Week',\n                value: () => moment().subtract(1, 'week').toDate().toString() + '%' + new Date().toString(),\n            },\n            {\n                label: 'Last day',\n                value: () => moment().subtract(1, 'day').toDate().toString() + '%' + new Date().toString(),\n            },\n        ],\n        isRange: true,\n        withTime: false,\n        hasSetToNowButton: true,\n    },\n];\n\nconst tableDatePickerConfig: ConfigSupplier<ITableWithDatePickerConfig> = () => ({\n    datesSelectionBoxes: selectionOptions,\n    initialDateRange: [moment().subtract(75, 'years').toDate(), moment().toDate()],\n});\n\nconst TableComposed = compose<any>(tableWithDatePicker(tableDatePickerConfig))(TableHOC);\n\nconst renderHeader = () => (\n    <thead>\n        <tr>\n            <th>City</th>\n            <th>Username</th>\n            <th>Password</th>\n        </tr>\n    </thead>\n);\n\nconst generateRows = (allData: IExampleRowData[], tableId: string) =>\n    allData?.map((data: IExampleRowData) => (\n        <TableRowConnected id={data.id} tableId={tableId} key={data.id}>\n            <td key=\"city\">{data.city}</td>\n            <td key=\"username\">{data.username.toLowerCase()}</td>\n            <td key=\"password\">{data.password.toLowerCase()}</td>\n        </TableRowConnected>\n    ));\n\ninterface IExampleRowData {\n    city: string;\n    username: string;\n    password: string;\n    id: string;\n}\n\nconst generateData = (length: number): IExampleRowData[] =>\n    Array.from(Array(length)).map(() => ({\n        city: loremIpsum({count: 1, units: 'word'}),\n        username: loremIpsum({count: 2, units: 'word'}),\n        password: loremIpsum({count: 1, units: 'word'}),\n        id: loremIpsum({count: 1, units: 'word'}),\n    }));\n\nconst dataForRows = generateData(5);\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(P, {})},
                        ),
                    );
                },
                Z = 'withFilterTableId',
                z = function () {
                    return (0, a.jsx)(M, {
                        id: Z,
                        className: 'table',
                        data: $,
                        renderBody: function (e) {
                            return V(e, Z);
                        },
                        tableHeader: K(),
                        showBorderTop: !0,
                        showBorderBottom: !0,
                    });
                },
                M = (0, y.qC)((0, i.EL7)({filter: {isAutoFocus: !1}}), (0, i.JlW)({title: 'No results'}))(i.s_h),
                K = function () {
                    return (0, a.jsx)('thead', {
                        children: (0, a.jsxs)('tr', {
                            children: [
                                (0, a.jsx)('th', {children: 'City'}),
                                (0, a.jsx)('th', {children: 'Username'}),
                                (0, a.jsx)('th', {children: 'Password'}),
                            ],
                        }),
                    });
                },
                V = function (e, n) {
                    return null == e
                        ? void 0
                        : e.map(function (e) {
                              return (0, a.jsxs)(
                                  i.vit,
                                  {
                                      id: e.id,
                                      tableId: n,
                                      children: [
                                          (0, a.jsx)('td', {children: e.city}, 'city'),
                                          (0, a.jsx)('td', {children: e.username.toLowerCase()}, 'username'),
                                          (0, a.jsx)('td', {children: e.password.toLowerCase()}, 'password'),
                                      ],
                                  },
                                  e.id,
                              );
                          });
                },
                $ = Array.from([, , , , ,]).map(function () {
                    return {
                        city: (0, c.fH)({count: 1, units: 'word'}),
                        username: (0, c.fH)({count: 2, units: 'word'}),
                        password: (0, c.fH)({count: 1, units: 'word'}),
                        id: (0, c.fH)({count: 1, units: 'word'}),
                    };
                }),
                Q = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {TableHOC, TableRowConnected, tableWithBlankSlate, tableWithFilter} from '@coveord/plasma-react';\nimport {compose} from 'redux';\nimport {loremIpsum} from 'lorem-ipsum';\n\nconst TABLE_ID: string = 'withFilterTableId';\n\nconst Demo = () => (\n    <TableComposed\n        id={TABLE_ID}\n        className=\"table\"\n        data={dataForRows}\n        renderBody={(data: IExampleRowData[]) => generateRows(data, TABLE_ID)}\n        tableHeader={renderHeader()}\n        showBorderTop\n        showBorderBottom\n    />\n);\nexport default Demo;\n\nconst TableComposed = compose<any>(\n    tableWithFilter({filter: {isAutoFocus: false}}), // using the default matchfilter\n    tableWithBlankSlate({\n        title: 'No results',\n    }),\n)(TableHOC);\n\nconst renderHeader = () => (\n    <thead>\n        <tr>\n            <th>City</th>\n            <th>Username</th>\n            <th>Password</th>\n        </tr>\n    </thead>\n);\n\nconst generateRows = (allData: IExampleRowData[], tableId: string) =>\n    allData?.map((data: IExampleRowData) => (\n        <TableRowConnected id={data.id} tableId={tableId} key={data.id}>\n            <td key=\"city\">{data.city}</td>\n            <td key=\"username\">{data.username.toLowerCase()}</td>\n            <td key=\"password\">{data.password.toLowerCase()}</td>\n        </TableRowConnected>\n    ));\n\ninterface IExampleRowData {\n    city: string;\n    username: string;\n    password: string;\n    id: string;\n}\n\nconst generateData = (length: number): IExampleRowData[] =>\n    Array.from(Array(length)).map(() => ({\n        city: loremIpsum({count: 1, units: 'word'}),\n        username: loremIpsum({count: 2, units: 'word'}),\n        password: loremIpsum({count: 1, units: 'word'}),\n        id: loremIpsum({count: 1, units: 'word'}),\n    }));\n\nconst dataForRows = generateData(5);\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(z, {})},
                        ),
                    );
                },
                X = 'withLoadingTableId',
                J = function () {
                    return (0, a.jsx)(i.s_h, {
                        id: X,
                        className: 'table',
                        data: G,
                        renderBody: function () {
                            return ee;
                        },
                        tableHeader: Y(),
                        showBorderTop: !0,
                        showBorderBottom: !0,
                        isLoading: !0,
                        loading: {isCard: !1, numberOfColumns: 3, defaultLoadingRow: 1, numberOfSubRow: 3},
                    });
                },
                Y = function () {
                    return (0, a.jsx)('thead', {
                        children: (0, a.jsxs)('tr', {
                            children: [
                                (0, a.jsx)('th', {children: 'City'}),
                                (0, a.jsx)('th', {children: 'Username'}),
                                (0, a.jsx)('th', {children: 'Badge'}),
                            ],
                        }),
                    });
                },
                G = [
                    {city: 'Qu\xe9bec', username: 'germinator', id: 'id-1'},
                    {city: 'Ottawa', username: 'canitalktoyouaboutvisualtesting', id: 'id-2'},
                    {city: 'Toronto', username: 'kienposter', id: 'id-3'},
                    {city: 'Montr\xe9al', username: 'notfound', id: 'id-3'},
                ],
                ee =
                    null == G
                        ? void 0
                        : G.map(function (e) {
                              return (0, a.jsxs)(
                                  i.vit,
                                  {
                                      id: e.id,
                                      tableId: X,
                                      children: [
                                          (0, a.jsx)('td', {children: e.city}, 'city'),
                                          (0, a.jsx)('td', {children: e.username.toLowerCase()}, 'username'),
                                          (0, a.jsx)('td', {
                                              children: (0, a.jsx)(i.Cts, {
                                                  label: 'King',
                                                  icon: l.CloudSize16Px,
                                                  isSmall: !0,
                                                  type: i.gZO.Success,
                                              }),
                                          }),
                                      ],
                                  },
                                  e.id,
                              );
                          }),
                en = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {Badge, BadgeType, TableHOC, TableRowConnected} from '@coveord/plasma-react';\nimport {CloudSize16Px} from '@coveord/plasma-react-icons';\n\nconst TABLE_ID: string = 'withLoadingTableId';\n\nconst Demo = () => (\n    <TableHOC\n        id={TABLE_ID}\n        className=\"table\"\n        data={data}\n        renderBody={() => renderRows}\n        tableHeader={renderHeader()}\n        showBorderTop\n        showBorderBottom\n        isLoading\n        loading={{\n            isCard: false,\n            numberOfColumns: 3,\n            defaultLoadingRow: 1,\n            numberOfSubRow: 3,\n        }}\n    />\n);\nexport default Demo;\n\nconst renderHeader = () => (\n    <thead>\n        <tr>\n            <th>City</th>\n            <th>Username</th>\n            <th>Badge</th>\n        </tr>\n    </thead>\n);\n\nconst data = [\n    {\n        city: 'Qu\xe9bec',\n        username: 'germinator',\n        id: 'id-1',\n    },\n    {\n        city: 'Ottawa',\n        username: 'canitalktoyouaboutvisualtesting',\n        id: 'id-2',\n    },\n    {\n        city: 'Toronto',\n        username: 'kienposter',\n        id: 'id-3',\n    },\n    {\n        city: 'Montr\xe9al',\n        username: 'notfound',\n        id: 'id-3',\n    },\n];\n\nconst renderRows = data?.map((item) => (\n    <TableRowConnected id={item.id} tableId={TABLE_ID} key={item.id}>\n        <td key=\"city\">{item.city}</td>\n        <td key=\"username\">{item.username.toLowerCase()}</td>\n        <td>\n            <Badge label={'King'} icon={CloudSize16Px} isSmall type={BadgeType.Success} />\n        </td>\n    </TableRowConnected>\n));\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(J, {})},
                        ),
                    );
                },
                et = 'withPaginationTableId',
                ea = function () {
                    return (0, a.jsx)(er, {
                        id: et,
                        className: 'table',
                        data: ed,
                        renderBody: function (e) {
                            return es(e, et);
                        },
                        tableHeader: eo(),
                        showBorderTop: !0,
                        showBorderBottom: !0,
                    });
                },
                er = (0, y.qC)((0, i.d$A)({perPageNumbers: [3, 5, 10]}))(i.s_h),
                eo = function () {
                    return (0, a.jsx)('thead', {
                        children: (0, a.jsxs)('tr', {
                            children: [
                                (0, a.jsx)('th', {children: 'City'}),
                                (0, a.jsx)('th', {children: 'Username'}),
                                (0, a.jsx)('th', {children: 'Password'}),
                            ],
                        }),
                    });
                },
                es = function (e, n) {
                    return null == e
                        ? void 0
                        : e.map(function (e) {
                              return (0, a.jsxs)(
                                  i.vit,
                                  {
                                      id: e.id,
                                      tableId: n,
                                      children: [
                                          (0, a.jsx)('td', {children: e.city}, 'city'),
                                          (0, a.jsx)('td', {children: e.username.toLowerCase()}, 'username'),
                                          (0, a.jsx)('td', {children: e.password.toLowerCase()}, 'password'),
                                      ],
                                  },
                                  e.id,
                              );
                          });
                },
                ed = Array.from(Array(15)).map(function () {
                    return {
                        city: (0, c.fH)({count: 1, units: 'word'}),
                        username: (0, c.fH)({count: 2, units: 'word'}),
                        password: (0, c.fH)({count: 1, units: 'word'}),
                        id: (0, c.fH)({count: 1, units: 'word'}),
                    };
                }),
                ei = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {TableHOC, TableRowConnected, tableWithNewPagination} from '@coveord/plasma-react';\nimport {compose} from 'redux';\nimport {loremIpsum} from 'lorem-ipsum';\n\nconst TABLE_ID: string = 'withPaginationTableId';\n\nconst Demo = () => (\n    <TableComposed\n        id={TABLE_ID}\n        className=\"table\"\n        data={dataForRows}\n        renderBody={(data: IExampleRowData[]) => generateRows(data, TABLE_ID)}\n        tableHeader={renderHeader()}\n        showBorderTop\n        showBorderBottom\n    />\n);\nexport default Demo;\n\nconst TableComposed = compose<any>(tableWithNewPagination({perPageNumbers: [3, 5, 10]}))(TableHOC);\n\nconst renderHeader = () => (\n    <thead>\n        <tr>\n            <th>City</th>\n            <th>Username</th>\n            <th>Password</th>\n        </tr>\n    </thead>\n);\n\nconst generateRows = (allData: IExampleRowData[], tableId: string) =>\n    allData?.map((data: IExampleRowData) => (\n        <TableRowConnected id={data.id} tableId={tableId} key={data.id}>\n            <td key=\"city\">{data.city}</td>\n            <td key=\"username\">{data.username.toLowerCase()}</td>\n            <td key=\"password\">{data.password.toLowerCase()}</td>\n        </TableRowConnected>\n    ));\n\ninterface IExampleRowData {\n    city: string;\n    username: string;\n    password: string;\n    id: string;\n}\n\nconst generateData = (length: number): IExampleRowData[] =>\n    Array.from(Array(length)).map(() => ({\n        city: loremIpsum({count: 1, units: 'word'}),\n        username: loremIpsum({count: 2, units: 'word'}),\n        password: loremIpsum({count: 1, units: 'word'}),\n        id: loremIpsum({count: 1, units: 'word'}),\n    }));\n\nconst dataForRows = generateData(15);\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(ea, {})},
                        ),
                    );
                },
                el = 'withPredicateTableId',
                ec = function () {
                    return (0, a.jsx)(ew, {
                        id: el,
                        className: 'table',
                        data: ep,
                        renderBody: function (e) {
                            return em(e, el);
                        },
                        tableHeader: eu(),
                        showBorderTop: !0,
                        showBorderBottom: !0,
                    });
                },
                eu = function () {
                    return (0, a.jsx)('thead', {
                        children: (0, a.jsxs)('tr', {
                            children: [
                                (0, a.jsx)('th', {children: 'City'}),
                                (0, a.jsx)('th', {children: 'Username'}),
                                (0, a.jsx)('th', {children: 'Password'}),
                            ],
                        }),
                    });
                },
                em = function (e, n) {
                    return null == e
                        ? void 0
                        : e.map(function (e) {
                              return (0, a.jsxs)(
                                  i.vit,
                                  {
                                      id: e.id,
                                      tableId: n,
                                      children: [
                                          (0, a.jsx)('td', {children: e.city}, 'city'),
                                          (0, a.jsx)('td', {children: e.username.toLowerCase()}, 'username'),
                                          (0, a.jsx)('td', {children: e.password.toLowerCase()}, 'password'),
                                      ],
                                  },
                                  e.id,
                              );
                          });
                },
                ep = Array.from([, , , , ,]).map(function () {
                    return {
                        city: (0, c.fH)({count: 1, units: 'word'}),
                        username: (0, c.fH)({count: 2, units: 'word'}),
                        password: (0, c.fH)({count: 1, units: 'word'}),
                        id: (0, c.fH)({count: 1, units: 'word'}),
                    };
                }),
                eh = {
                    id: 'firstPredicate',
                    prepend: (0, a.jsx)('span', {className: 'dropdown-prepend', children: 'prepend:'}),
                    values: [
                        {displayValue: 'All', value: '', selected: !0},
                        {displayValue: ep[2].city, value: ep[2].city},
                        {displayValue: ep[1].username, value: ep[1].username},
                    ],
                },
                ew = (0, y.qC)(
                    (0, i.myF)(
                        (0, s._)((0, o._)({}, eh), {
                            matchPredicate: function (e, n) {
                                var t = e === n.city;
                                return !e || t;
                            },
                        }),
                    ),
                )(i.s_h),
                eb = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {TableHOC, TableRowConnected, tableWithPredicate} from '@coveord/plasma-react';\nimport {compose} from 'redux';\nimport {loremIpsum} from 'lorem-ipsum';\n\nconst TABLE_ID: string = 'withPredicateTableId';\n\nconst Demo = () => (\n    <TableComposed\n        id={TABLE_ID}\n        className=\"table\"\n        data={dataForRows}\n        renderBody={(data: IExampleRowData[]) => generateRows(data, TABLE_ID)}\n        tableHeader={renderHeader()}\n        showBorderTop\n        showBorderBottom\n    />\n);\nexport default Demo;\n\nconst renderHeader = () => (\n    <thead>\n        <tr>\n            <th>City</th>\n            <th>Username</th>\n            <th>Password</th>\n        </tr>\n    </thead>\n);\n\nconst matchPredicate = (predicate: string, rowData: IExampleRowData) => {\n    const matchCity = predicate === rowData.city;\n    return !predicate || matchCity;\n};\n\nconst generateRows = (allData: IExampleRowData[], tableId: string) =>\n    allData?.map((data: IExampleRowData) => (\n        <TableRowConnected id={data.id} tableId={tableId} key={data.id}>\n            <td key=\"city\">{data.city}</td>\n            <td key=\"username\">{data.username.toLowerCase()}</td>\n            <td key=\"password\">{data.password.toLowerCase()}</td>\n        </TableRowConnected>\n    ));\n\ninterface IExampleRowData {\n    city: string;\n    username: string;\n    password: string;\n    id: string;\n}\n\nconst generateData = (length: number): IExampleRowData[] =>\n    Array.from(Array(length)).map(() => ({\n        city: loremIpsum({count: 1, units: 'word'}),\n        username: loremIpsum({count: 2, units: 'word'}),\n        password: loremIpsum({count: 1, units: 'word'}),\n        id: loremIpsum({count: 1, units: 'word'}),\n    }));\n\nconst dataForRows = generateData(5);\n\nconst predicateSetup = {\n    id: 'firstPredicate',\n    prepend: <span className=\"dropdown-prepend\">prepend:</span>,\n    values: [\n        {displayValue: 'All', value: '', selected: true},\n        {displayValue: dataForRows[2].city, value: dataForRows[2].city},\n        {displayValue: dataForRows[1].username, value: dataForRows[1].username},\n    ],\n};\n\nconst TableComposed = compose<any>(\n    tableWithPredicate({\n        ...predicateSetup,\n        matchPredicate,\n    }),\n)(TableHOC);\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(ec, {})},
                        ),
                    );
                },
                ey = t(53520),
                ex = t(7300),
                ef = t(52983),
                eg = 'withServerTableId',
                eI = (0, y.qC)(i.Lvu, i.wAW)(i.s_h),
                eT = function () {
                    var e = (0, ey._)(eC(), 3),
                        n = e[0],
                        t = (e[1], e[2]);
                    return (
                        (0, ef.useEffect)(function () {
                            t({_page: 1, _limit: 5});
                        }, []),
                        (0, a.jsx)(eI, {
                            id: eg,
                            className: 'table table-numbered mod-collapsible-rows',
                            data: n,
                            renderBody: function (e) {
                                return ej(e);
                            },
                            tableHeader: eD(),
                            onUpdate: function () {
                                return t();
                            },
                            onUpdateUrl: function (e) {
                                window.location.href = ''.concat(window.location.pathname, '?search=').concat(e);
                            },
                            showBorderTop: !0,
                            showBorderBottom: !0,
                        })
                    );
                },
                eC = function () {
                    var e = (0, ey._)((0, ef.useState)([]), 2),
                        n = e[0],
                        t = e[1],
                        a = (0, ey._)((0, ef.useState)(0), 2),
                        r = a[0],
                        o = a[1];
                    return [
                        n,
                        r,
                        function (e) {
                            var a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                r =
                                    (Object.keys(e).forEach(function (n) {
                                        return void 0 === e[n] ? delete e[n] : {};
                                    }),
                                    e),
                                s =
                                    r && Object.keys(r).length > 0
                                        ? '?'.concat(new URLSearchParams(Object.entries(r)).toString())
                                        : '';
                            return fetch('https://jsonplaceholder.typicode.com/users'.concat(s))
                                .then(function (e) {
                                    return (o(parseInt(e.headers.get('x-total-count'), 10)), e.json());
                                })
                                .then(function (e) {
                                    a ? t(e) : t((0, ex._)(n).concat((0, ex._)(e)));
                                });
                        },
                    ];
                },
                eD = function () {
                    return (0, a.jsx)('thead', {
                        children: (0, a.jsxs)('tr', {
                            children: [
                                (0, a.jsx)('th', {}),
                                (0, a.jsx)('th', {children: 'Name'}),
                                (0, a.jsx)('th', {children: 'Username'}),
                                (0, a.jsx)('th', {children: 'Email'}),
                                (0, a.jsx)('th', {}),
                            ],
                        }),
                    });
                },
                ej = function (e) {
                    return e.map(function (e, n) {
                        return (0, a.jsxs)(
                            i.vit,
                            {
                                id: e.username,
                                tableId: eg,
                                isMultiselect: !0,
                                disabled: n % 3 == 0,
                                collapsible: {
                                    content:
                                        n % 2 ? (0, a.jsx)('div', {className: 'py2', children: '\uD83D\uDC4B'}) : null,
                                },
                                children: [
                                    (0, a.jsx)(i.aS, {number: n + 1}),
                                    (0, a.jsx)('td', {children: e.name}, 'name'),
                                    (0, a.jsx)('td', {children: e.username}, 'username'),
                                    (0, a.jsx)('td', {children: e.email}, 'password'),
                                ],
                            },
                            e.username,
                        );
                    });
                },
                eB = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {useEffect, useState} from 'react';\nimport {\n    TableHOC,\n    tableWithUrlState,\n    withServerSideProcessing,\n    TableRowConnected,\n    TableRowNumberColumn,\n} from '@coveord/plasma-react';\n\nimport {compose} from 'redux';\n\nconst TABLE_ID: string = 'withServerTableId';\nconst ServerTableComposed = compose<any>(withServerSideProcessing, tableWithUrlState)(TableHOC);\n\nconst Demo = () => {\n    const [users, _totalEntries, fetchUsers] = useAPIMock();\n\n    const updateUrl = (query: string) => {\n        window.location.href = `${window.location.pathname}?search=${query}`;\n    };\n\n    useEffect(() => {\n        fetchUsers({_page: 1, _limit: 5});\n    }, []);\n\n    return (\n        <ServerTableComposed\n            id={TABLE_ID}\n            className=\"table table-numbered mod-collapsible-rows\"\n            data={users}\n            renderBody={(allData: IExampleRowData[]) => generateRows(allData)}\n            tableHeader={renderHeader()}\n            onUpdate={() => fetchUsers()}\n            onUpdateUrl={updateUrl}\n            showBorderTop\n            showBorderBottom\n        />\n    );\n};\nexport default Demo;\n\nconst clean = <T extends Record<string, unknown>>(object: T) => {\n    Object.keys(object).forEach((key) => (object[key] === undefined ? delete object[key] : {}));\n    return object;\n};\n\nconst useAPIMock = (): [any[], number, (params?: any, overwrite?: boolean) => void] => {\n    const [users, setUsers] = useState([]);\n    const [totalEntries, setTotalEntries] = useState(0);\n\n    const fetchUsers = (params?: any, overwrite = true) => {\n        const cleanParams = clean(params);\n        const queryString =\n            cleanParams && Object.keys(cleanParams).length > 0\n                ? `?${new URLSearchParams(Object.entries(cleanParams)).toString()}`\n                : '';\n\n        return fetch(`https://jsonplaceholder.typicode.com/users${queryString}`)\n            .then((response) => {\n                setTotalEntries(parseInt(response.headers.get('x-total-count'), 10));\n                return response.json();\n            })\n            .then((newUsers) => {\n                if (overwrite) {\n                    setUsers(newUsers);\n                } else {\n                    setUsers([...users, ...newUsers]);\n                }\n            });\n    };\n\n    return [users, totalEntries, fetchUsers];\n};\n\nconst renderHeader = () => (\n    <thead>\n        <tr>\n            <th></th>\n            <th>Name</th>\n            <th>Username</th>\n            <th>Email</th>\n            <th></th>\n        </tr>\n    </thead>\n);\n\nconst generateRows = (allData: IExampleRowData[]) =>\n    allData.map((data: IExampleRowData, i: number) => (\n        <TableRowConnected\n            id={data.username}\n            tableId={TABLE_ID}\n            key={data.username}\n            isMultiselect\n            disabled={i % 3 === 0}\n            collapsible={{content: i % 2 ? <div className=\"py2\">\uD83D\uDC4B</div> : null}}\n        >\n            <TableRowNumberColumn number={i + 1} />\n            <td key=\"name\">{data.name}</td>\n            <td key=\"username\">{data.username}</td>\n            <td key=\"password\">{data.email}</td>\n        </TableRowConnected>\n    ));\ninterface IExampleRowData {\n    name: string;\n    username: string;\n    email: string;\n    id: string;\n}\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(eT, {})},
                        ),
                    );
                },
                eR = 'withSortTableId',
                eE = function () {
                    return (0, a.jsx)(ek, {
                        id: eR,
                        className: 'table',
                        data: e_,
                        renderBody: function (e) {
                            return eS(e, eR);
                        },
                        tableHeader: eH(eR),
                        showBorderTop: !0,
                        showBorderBottom: !0,
                    });
                },
                eH = function (e) {
                    return (0, a.jsx)('thead', {
                        children: (0, a.jsxs)('tr', {
                            children: [
                                (0, a.jsx)(i.CME, {id: 'city', tableId: e, children: 'City'}),
                                (0, a.jsx)(i.CME, {id: 'username', tableId: e, children: 'Username'}),
                                (0, a.jsx)(i.CME, {id: 'password', tableId: e, children: 'Password'}),
                            ],
                        }),
                    });
                },
                ek = (0, y.qC)(
                    (0, i.ggH)({
                        sort: function (e, n, t, a) {
                            if (e) {
                                var r = t[e].toLowerCase().localeCompare(a[e].toLowerCase());
                                return n ? r : -1 * r;
                            }
                            return 0;
                        },
                    }),
                )(i.s_h),
                eS = function (e, n) {
                    return null == e
                        ? void 0
                        : e.map(function (e) {
                              return (0, a.jsxs)(
                                  i.vit,
                                  {
                                      id: e.id,
                                      tableId: n,
                                      children: [
                                          (0, a.jsx)('td', {children: e.city}, 'city'),
                                          (0, a.jsx)('td', {children: e.username.toLowerCase()}, 'username'),
                                          (0, a.jsx)('td', {children: e.password.toLowerCase()}, 'password'),
                                      ],
                                  },
                                  e.id,
                              );
                          });
                },
                e_ = Array.from([, , , , ,]).map(function () {
                    return {
                        city: (0, c.fH)({count: 1, units: 'word'}),
                        username: (0, c.fH)({count: 2, units: 'word'}),
                        password: (0, c.fH)({count: 1, units: 'word'}),
                        id: (0, c.fH)({count: 1, units: 'word'}),
                    };
                }),
                eL = function (e) {
                    return (0, a.jsx)(
                        d.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {TableHeaderWithSort, TableHOC, TableRowConnected, tableWithSort} from '@coveord/plasma-react';\nimport {compose} from 'redux';\nimport {loremIpsum} from 'lorem-ipsum';\n\nconst TABLE_ID: string = 'withSortTableId';\n\nconst Demo = () => (\n    <TableComposed\n        id={TABLE_ID}\n        className=\"table\"\n        data={dataForRows}\n        renderBody={(data: IExampleRowData[]) => generateRows(data, TABLE_ID)}\n        tableHeader={renderHeader(TABLE_ID)}\n        showBorderTop\n        showBorderBottom\n    />\n);\nexport default Demo;\n\nconst renderHeader = (tableId: string) => (\n    <thead>\n        <tr>\n            <TableHeaderWithSort id=\"city\" tableId={tableId}>\n                City\n            </TableHeaderWithSort>\n            <TableHeaderWithSort id=\"username\" tableId={tableId}>\n                Username\n            </TableHeaderWithSort>\n            <TableHeaderWithSort id=\"password\" tableId={tableId}>\n                Password\n            </TableHeaderWithSort>\n        </tr>\n    </thead>\n);\n\nconst sort = (key: keyof IExampleRowData, isAsc: boolean, a: IExampleRowData, b: IExampleRowData) => {\n    if (key) {\n        const compare = (a[key] as string).toLowerCase().localeCompare((b[key] as string).toLowerCase());\n\n        return isAsc ? compare : -1 * compare;\n    }\n    return 0;\n};\n\nconst TableComposed = compose<any>(tableWithSort({sort}))(TableHOC);\n\nconst generateRows = (allData: IExampleRowData[], tableId: string) =>\n    allData?.map((data: IExampleRowData) => (\n        <TableRowConnected id={data.id} tableId={tableId} key={data.id}>\n            <td key=\"city\">{data.city}</td>\n            <td key=\"username\">{data.username.toLowerCase()}</td>\n            <td key=\"password\">{data.password.toLowerCase()}</td>\n        </TableRowConnected>\n    ));\n\ninterface IExampleRowData {\n    city: string;\n    username: string;\n    password: string;\n    id: string;\n}\n\nconst generateData = (length: number): IExampleRowData[] =>\n    Array.from(Array(length)).map(() => ({\n        city: loremIpsum({count: 1, units: 'word'}),\n        username: loremIpsum({count: 2, units: 'word'}),\n        password: loremIpsum({count: 1, units: 'word'}),\n        id: loremIpsum({count: 1, units: 'word'}),\n    }));\n\nconst dataForRows = generateData(5);\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(eE, {})},
                        ),
                    );
                },
                eA = t(66809),
                ev = function () {
                    return (0, a.jsx)(eA.X, {
                        id: 'TableHOC',
                        sourcePath: '/packages/react/src/components/table-hoc/TableHOC.tsx',
                        title: 'Table',
                        section: 'Layout',
                        description:
                            'A table displays large quantities of items or data in a list format. Filtering features and actions may be added.',
                        demo: (0, a.jsx)(b, {}),
                        propsMetadata: r._g,
                        examples: {
                            withLoading: (0, a.jsx)(en, {title: 'Loading table'}),
                            withBlankslate: (0, a.jsx)(_, {title: 'Table blankslate'}),
                            withPagination: (0, a.jsx)(ei, {title: 'With pagination'}),
                            withPredicate: (0, a.jsx)(eb, {title: 'With predicate'}),
                            withAction: (0, a.jsx)(j, {title: 'With actions'}),
                            withSort: (0, a.jsx)(eL, {title: 'With colum sort'}),
                            withFilter: (0, a.jsx)(Q, {title: 'With filter box'}),
                            withDatePicker: (0, a.jsx)(q, {title: 'With date picker'}),
                            withServer: (0, a.jsx)(eB, {title: 'With server side rendering'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 58085, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 72174));
        }),
            (_N_E = e.O()));
    },
]);
