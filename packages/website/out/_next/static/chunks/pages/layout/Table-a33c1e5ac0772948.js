(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [90036],
    {
        74964: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/layout/Table',
                function () {
                    return t(44463);
                },
            ]);
        },
        44463: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    default: function () {
                        return en;
                    },
                }));
            var a = t(97458),
                o = t(19523),
                r = t(80762),
                i = t(52071),
                l = t(88966),
                s = t(53520),
                c = t(43112),
                u = t(39668),
                d = t(15084),
                m = t(4778),
                p = t(86977),
                g = t.n(p),
                h = t(52983),
                f = (0, d.ClD)(),
                b = [
                    f.accessor('userId', {
                        header: 'User ID',
                        cell: function (e) {
                            return e.row.original.userId;
                        },
                    }),
                    f.accessor('id', {
                        header: 'Post ID',
                        cell: function (e) {
                            return e.row.original.id;
                        },
                    }),
                    f.accessor('title', {
                        header: 'Title',
                        cell: function (e) {
                            return e.row.original.title;
                        },
                    }),
                    d.iA_.CollapsibleColumn,
                ],
                x = function () {
                    var e,
                        n = (0, s._)((0, h.useState)(null), 2),
                        t = n[0],
                        o = n[1],
                        i = (0, s._)((0, h.useState)(!0), 2),
                        l = i[0],
                        u = i[1],
                        m = (0, s._)((0, h.useState)(1), 2),
                        p = m[0],
                        f = m[1],
                        x =
                            ((e = (0, r._)(function (e) {
                                var n, t, a, r, i, l, s, d;
                                return (0, c.Jh)(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            (u(!0),
                                                (l = new URLSearchParams({
                                                    _sort:
                                                        null !==
                                                            (i =
                                                                null === (t = e.sorting) || void 0 === t
                                                                    ? void 0
                                                                    : null === (n = t[0]) || void 0 === n
                                                                      ? void 0
                                                                      : n.id) && void 0 !== i
                                                            ? i
                                                            : 'userId',
                                                    _order: (
                                                        null === (r = e.sorting) || void 0 === r
                                                            ? void 0
                                                            : null === (a = r[0]) || void 0 === a
                                                              ? void 0
                                                              : a.desc
                                                    )
                                                        ? 'desc'
                                                        : 'asc',
                                                    _page: (e.pagination.pageIndex + 1).toString(),
                                                    _limit: e.pagination.pageSize.toString(),
                                                    userId: e.predicates.user,
                                                    title_like: e.globalFilter,
                                                })),
                                                '' === e.predicates.user && l.delete('userId'),
                                                e.globalFilter || l.delete('title_like'),
                                                (c.label = 1));
                                        case 1:
                                            return (
                                                c.trys.push([1, 4, 5, 6]),
                                                [
                                                    4,
                                                    fetch(
                                                        'https://jsonplaceholder.typicode.com/posts?'.concat(
                                                            l.toString(),
                                                        ),
                                                    ),
                                                ]
                                            );
                                        case 2:
                                            return [4, (d = c.sent()).json()];
                                        case 3:
                                            return (
                                                o(c.sent()),
                                                f(
                                                    Math.ceil(
                                                        Number(d.headers.get('x-total-count')) /
                                                            (null === (s = e.pagination) || void 0 === s
                                                                ? void 0
                                                                : s.pageSize),
                                                    ),
                                                ),
                                                [3, 6]
                                            );
                                        case 4:
                                            return (console.error(c.sent()), [3, 6]);
                                        case 5:
                                            return (u(!1), [7]);
                                        case 6:
                                            return [2];
                                    }
                                });
                            })),
                            function (n) {
                                return e.apply(this, arguments);
                            });
                    return (0, a.jsxs)(d.iA_, {
                        data: t,
                        getRowId: function (e) {
                            return e.id.toString();
                        },
                        columns: b,
                        noDataChildren: (0, a.jsx)(S, {}),
                        onMount: x,
                        onChange: x,
                        loading: l,
                        initialState: {dateRange: [D, w], predicates: {user: ''}},
                        getExpandChildren: function (e) {
                            return (0, a.jsx)(d.xuv, {py: 'xs', children: e.body});
                        },
                        children: [
                            (0, a.jsxs)(d.iA_.Header, {
                                children: [
                                    (0, a.jsx)(d.iA_.Actions, {
                                        children: function (e) {
                                            return (0, a.jsx)(T, {datum: e});
                                        },
                                    }),
                                    (0, a.jsx)(y, {}),
                                    (0, a.jsx)(d.iA_.Filter, {placeholder: 'Search posts by title'}),
                                    (0, a.jsx)(d.iA_.DateRangePicker, {
                                        rangeCalendarProps: {maxDate: g()().endOf('day').toDate()},
                                        presets: v,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(d.iA_.Footer, {
                                children: [
                                    (0, a.jsx)(d.iA_.PerPage, {}),
                                    (0, a.jsx)(d.iA_.Pagination, {totalPages: p}),
                                ],
                            }),
                        ],
                    });
                },
                S = function () {
                    var e = (0, d.x6s)(),
                        n = e.clearFilters;
                    return e.isFiltered
                        ? (0, a.jsxs)(d.R$c, {
                              children: [
                                  (0, a.jsx)(d.Dxz, {order: 4, children: 'No data found for those filters'}),
                                  (0, a.jsx)(d.zxk, {onClick: n, children: 'Clear filters'}),
                              ],
                          })
                        : (0, a.jsx)(d.R$c, {children: (0, a.jsx)(d.Dxz, {order: 4, children: 'No Data'})});
                },
                w = g()().startOf('day').toDate(),
                D = g()().subtract(1, 'day').endOf('day').toDate(),
                v = {
                    lastDay: {label: 'Last 24 hours', range: [D, w]},
                    lastWeek: {label: 'Last week', range: [g()().subtract(1, 'week').endOf('day').toDate(), w]},
                },
                T = function (e) {
                    var n = e.datum.id % 2 == 0;
                    return (0, a.jsx)(a.Fragment, {
                        children: n
                            ? (0, a.jsx)(d.zxk, {
                                  variant: 'subtle',
                                  onClick: function () {
                                      return alert('Edit action is triggered!');
                                  },
                                  leftIcon: (0, a.jsx)(m.EditSize16Px, {height: 16}),
                                  children: 'Edit',
                              })
                            : null,
                    });
                },
                y = function () {
                    return (0, a.jsx)(d.iA_.Predicate, {
                        id: 'user',
                        label: 'User',
                        data: [
                            {value: '', label: 'All'},
                            {value: '1', label: '1'},
                            {value: '2', label: '2'},
                            {value: '3', label: '3'},
                            {value: '4', label: '4'},
                            {value: '5', label: '5'},
                            {value: '6', label: '6'},
                            {value: '7', label: '7'},
                            {value: '8', label: '8'},
                            {value: '9', label: '9'},
                            {value: '10', label: '10'},
                        ],
                    });
                },
                P = function (e) {
                    return (0, a.jsx)(
                        u.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {\n    BlankSlate,\n    Box,\n    Button,\n    ColumnDef,\n    createColumnHelper,\n    DateRangePickerPreset,\n    onTableChangeEvent,\n    Table,\n    Title,\n    useTable,\n} from '@coveord/plasma-mantine';\nimport {EditSize16Px} from '@coveord/plasma-react-icons';\nimport dayjs from 'dayjs';\nimport {FunctionComponent, useState} from 'react';\n\ninterface IExampleRowData {\n    userId: number;\n    id: number;\n    title: string;\n    body: string;\n}\n\nconst columnHelper = createColumnHelper<IExampleRowData>();\n\n/**\n * Define your columns outside the component rendering the table\n * (or memoize them) to avoid unnecessary render loops\n */\nconst columns: Array<ColumnDef<IExampleRowData>> = [\n    columnHelper.accessor('userId', {\n        header: 'User ID',\n        cell: (info) => info.row.original.userId,\n    }),\n    columnHelper.accessor('id', {\n        header: 'Post ID',\n        cell: (info) => info.row.original.id,\n    }),\n    columnHelper.accessor('title', {\n        header: 'Title',\n        cell: (info) => info.row.original.title,\n    }),\n    Table.CollapsibleColumn as ColumnDef<IExampleRowData>,\n    // or if you prefer an accordion behaviour\n    // Table.AccordionColumn as ColumnDef<IExampleRowData>,\n];\n\nconst Demo = () => {\n    const [data, setData] = useState(null);\n    const [loading, setLoading] = useState(true);\n    const [pages, setPages] = useState(1);\n\n    const fetchData: onTableChangeEvent<IExampleRowData> = async (state) => {\n        setLoading(true);\n        const searchParams = new URLSearchParams({\n            _sort: state.sorting?.[0]?.id ?? 'userId',\n            _order: state.sorting?.[0]?.desc ? 'desc' : 'asc',\n            _page: (state.pagination.pageIndex + 1).toString(),\n            _limit: state.pagination.pageSize.toString(),\n            userId: state.predicates.user,\n            title_like: state.globalFilter,\n        });\n        if (state.predicates.user === '') {\n            searchParams.delete('userId');\n        }\n        if (!state.globalFilter) {\n            searchParams.delete('title_like');\n        }\n        try {\n            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${searchParams.toString()}`);\n            const body = await response.json();\n            setData(body);\n            setPages(Math.ceil(Number(response.headers.get('x-total-count')) / state.pagination?.pageSize));\n        } catch (e) {\n            console.error(e);\n        } finally {\n            setLoading(false);\n        }\n    };\n\n    return (\n        <Table\n            data={data}\n            getRowId={({id}) => id.toString()}\n            columns={columns}\n            noDataChildren={<NoData />}\n            onMount={fetchData}\n            onChange={fetchData}\n            loading={loading}\n            initialState={{dateRange: [previousDay, today], predicates: {user: ''}}}\n            getExpandChildren={(datum) => <Box py=\"xs\">{datum.body}</Box>}\n        >\n            {/* you can override background color with: sx={{backgroundColor: 'white'}} for Header and Footer */}\n            <Table.Header>\n                <Table.Actions>{(datum: IExampleRowData) => <TableActions datum={datum} />}</Table.Actions>\n                <UserPredicate />\n                <Table.Filter placeholder=\"Search posts by title\" />\n                <Table.DateRangePicker\n                    rangeCalendarProps={{maxDate: dayjs().endOf('day').toDate()}}\n                    presets={DatePickerPresets}\n                />\n            </Table.Header>\n            <Table.Footer>\n                <Table.PerPage />\n                <Table.Pagination totalPages={pages} />\n            </Table.Footer>\n        </Table>\n    );\n};\nexport default Demo;\n\nconst NoData: FunctionComponent = () => {\n    const {clearFilters, isFiltered} = useTable();\n\n    return isFiltered ? (\n        <BlankSlate>\n            <Title order={4}>No data found for those filters</Title>\n            <Button onClick={clearFilters}>Clear filters</Button>\n        </BlankSlate>\n    ) : (\n        <BlankSlate>\n            <Title order={4}>No Data</Title>\n        </BlankSlate>\n    );\n};\n\nconst today: Date = dayjs().startOf('day').toDate();\nconst previousDay: Date = dayjs().subtract(1, 'day').endOf('day').toDate();\nconst previousWeek: Date = dayjs().subtract(1, 'week').endOf('day').toDate();\n\nconst DatePickerPresets: Record<string, DateRangePickerPreset> = {\n    lastDay: {label: 'Last 24 hours', range: [previousDay, today]},\n    lastWeek: {label: 'Last week', range: [previousWeek, today]},\n};\n\nconst TableActions: FunctionComponent<{datum: IExampleRowData}> = ({datum}) => {\n    const actionCondition = datum.id % 2 === 0 ? true : false;\n    const pressedAction = () => alert('Edit action is triggered!');\n    return (\n        <>\n            {actionCondition ? (\n                <Button variant=\"subtle\" onClick={pressedAction} leftIcon={<EditSize16Px height={16} />}>\n                    Edit\n                </Button>\n            ) : null}\n        </>\n    );\n};\n\nconst UserPredicate: FunctionComponent = () => (\n    <Table.Predicate\n        id=\"user\"\n        label=\"User\"\n        data={[\n            {\n                value: '',\n                label: 'All',\n            },\n            {value: '1', label: '1'},\n            {value: '2', label: '2'},\n            {value: '3', label: '3'},\n            {value: '4', label: '4'},\n            {value: '5', label: '5'},\n            {value: '6', label: '6'},\n            {value: '7', label: '7'},\n            {value: '8', label: '8'},\n            {value: '9', label: '9'},\n            {value: '10', label: '10'},\n        ]}\n    />\n);\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(x, {})},
                        ),
                    );
                },
                j = t(17696),
                C = t(58506),
                _ = (0, d.ClD)(),
                F = [
                    _.accessor('firstName', {
                        header: 'First name',
                        cell: function (e) {
                            return e.row.original.firstName;
                        },
                    }),
                    _.accessor('lastName', {
                        header: 'Last name',
                        cell: function (e) {
                            return e.row.original.lastName;
                        },
                    }),
                    _.accessor('age', {
                        header: 'Age',
                        cell: function (e) {
                            return e.row.original.age;
                        },
                    }),
                ],
                k = {
                    globalFilterFn: function (e, n, t) {
                        return (0, C.O4)(e.getValue(n), t).passed;
                    },
                    getFilteredRowModel: (0, d.vLR)(),
                    getPaginationRowModel: (0, d.G_O)(),
                    getSortedRowModel: (0, d.tjy)(),
                },
                I = function () {
                    var e = (0, h.useMemo)(function () {
                        return Array(45)
                            .fill(0)
                            .map(function () {
                                return {
                                    id: j.We.datatype.uuid(),
                                    firstName: j.We.name.firstName(),
                                    lastName: j.We.name.lastName(),
                                    age: j.We.datatype.number(40),
                                };
                            });
                    }, []);
                    return (0, a.jsxs)(d.iA_, {
                        data: e,
                        columns: F,
                        options: k,
                        initialState: {pagination: {pageSize: 5}},
                        getRowId: function (e) {
                            return e.id;
                        },
                        children: [
                            (0, a.jsx)(d.iA_.Header, {children: (0, a.jsx)(d.iA_.Filter, {placeholder: 'Search'})}),
                            (0, a.jsxs)(d.iA_.Footer, {
                                children: [
                                    (0, a.jsx)(d.iA_.PerPage, {values: [5, 10, 25]}),
                                    (0, a.jsx)(d.iA_.Pagination, {totalPages: null}),
                                ],
                            }),
                        ],
                    });
                },
                R = function (e) {
                    return (0, a.jsx)(
                        u.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {\n    ColumnDef,\n    createColumnHelper,\n    FilterFn,\n    getFilteredRowModel,\n    getPaginationRowModel,\n    getSortedRowModel,\n    Table,\n    TableProps,\n} from '@coveord/plasma-mantine';\nimport {faker} from '@faker-js/faker';\nimport {rankItem} from '@tanstack/match-sorter-utils';\nimport {useMemo} from 'react';\n\nexport type Person = {\n    id: string;\n    firstName: string;\n    lastName: string;\n    age: number;\n};\n\nconst makeData = (len: number): Person[] =>\n    Array(len)\n        .fill(0)\n        .map(() => ({\n            id: faker.datatype.uuid(),\n            firstName: faker.name.firstName(),\n            lastName: faker.name.lastName(),\n            age: faker.datatype.number(40),\n        }));\n\nconst fuzzyFilter: FilterFn<Person> = (row, columnId, value) => rankItem(row.getValue(columnId), value).passed;\n\nconst columnHelper = createColumnHelper<Person>();\n\nconst columns: Array<ColumnDef<Person>> = [\n    columnHelper.accessor('firstName', {\n        header: 'First name',\n        cell: (info) => info.row.original.firstName,\n    }),\n    columnHelper.accessor('lastName', {\n        header: 'Last name',\n        cell: (info) => info.row.original.lastName,\n    }),\n    columnHelper.accessor('age', {\n        header: 'Age',\n        cell: (info) => info.row.original.age,\n    }),\n];\n\nconst options: TableProps<Person>['options'] = {\n    globalFilterFn: fuzzyFilter,\n    getFilteredRowModel: getFilteredRowModel(),\n    getPaginationRowModel: getPaginationRowModel(),\n    getSortedRowModel: getSortedRowModel(),\n};\n\nconst Demo = () => {\n    const data = useMemo(() => makeData(45), []);\n    return (\n        <Table\n            data={data}\n            columns={columns}\n            options={options}\n            initialState={{pagination: {pageSize: 5}}}\n            getRowId={({id}) => id}\n        >\n            <Table.Header>\n                <Table.Filter placeholder=\"Search\" />\n            </Table.Header>\n            <Table.Footer>\n                <Table.PerPage values={[5, 10, 25]} />\n                <Table.Pagination totalPages={null} />\n            </Table.Footer>\n        </Table>\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(I, {})},
                        ),
                    );
                },
                A = (0, d.ClD)(),
                N = [
                    A.accessor('id', {header: 'Post ID', enableSorting: !1}),
                    A.accessor('title', {header: 'Title', enableSorting: !1}),
                ],
                E = function () {
                    var e,
                        n = (0, s._)((0, h.useState)(null), 2),
                        t = n[0],
                        o = n[1],
                        i = (0, s._)((0, h.useState)(!0), 2),
                        l = i[0],
                        u = i[1],
                        m =
                            ((e = (0, r._)(function () {
                                var e;
                                return (0, c.Jh)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            (u(!0), (n.label = 1));
                                        case 1:
                                            return (
                                                n.trys.push([1, 5, 6, 7]),
                                                [4, fetch('https://jsonplaceholder.typicode.com/posts')]
                                            );
                                        case 2:
                                            return [4, n.sent().json()];
                                        case 3:
                                            return (
                                                (e = n.sent()),
                                                [
                                                    4,
                                                    new Promise(function (e) {
                                                        return setTimeout(e, 1e3);
                                                    }),
                                                ]
                                            );
                                        case 4:
                                            return (n.sent(), o(e), [3, 7]);
                                        case 5:
                                            return (console.error(n.sent()), [3, 7]);
                                        case 6:
                                            return (u(!1), [7]);
                                        case 7:
                                            return [2];
                                    }
                                });
                            })),
                            function () {
                                return e.apply(this, arguments);
                            });
                    return (0, a.jsxs)(d.iA_, {
                        data: t,
                        getRowId: function (e) {
                            return e.id.toString();
                        },
                        columns: N,
                        onMount: m,
                        onChange: m,
                        loading: l,
                        children: [
                            (0, a.jsx)(d.iA_.Consumer, {children: (0, a.jsx)(H, {every: 1e4})}),
                            (0, a.jsx)(d.iA_.LastUpdated, {}),
                        ],
                    });
                },
                H = function (e) {
                    var n = e.every,
                        t = (0, d.x6s)().onChange;
                    return (
                        (0, h.useEffect)(
                            function () {
                                var e = setInterval(function () {
                                    return t();
                                }, n);
                                return function () {
                                    return clearInterval(e);
                                };
                            },
                            [n],
                        ),
                        null
                    );
                },
                z = function (e) {
                    return (0, a.jsx)(
                        u.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {ColumnDef, createColumnHelper, onTableChangeEvent, Table, useTable} from '@coveord/plasma-mantine';\nimport {FunctionComponent, useEffect, useState} from 'react';\n\ninterface PostData {\n    id: number;\n    title: string;\n}\n\nconst columnHelper = createColumnHelper<PostData>();\nconst columns: Array<ColumnDef<PostData>> = [\n    columnHelper.accessor('id', {\n        header: 'Post ID',\n        enableSorting: false,\n    }),\n    columnHelper.accessor('title', {\n        header: 'Title',\n        enableSorting: false,\n    }),\n];\n\nconst Demo = () => {\n    const [data, setData] = useState(null);\n    const [loading, setLoading] = useState(true);\n\n    const fetchData: onTableChangeEvent<PostData> = async () => {\n        setLoading(true);\n        try {\n            const response = await fetch('https://jsonplaceholder.typicode.com/posts');\n            const body = await response.json();\n\n            // slow down the fetch, to make the refresh more obvious\n            await new Promise((resolve) => setTimeout(resolve, 1000));\n\n            setData(body);\n        } catch (e) {\n            console.error(e);\n        } finally {\n            setLoading(false);\n        }\n    };\n\n    return (\n        <Table<PostData>\n            data={data}\n            getRowId={({id}) => id.toString()}\n            columns={columns}\n            onMount={fetchData}\n            onChange={fetchData}\n            loading={loading}\n        >\n            <Table.Consumer>\n                {/* Refresh the component every 10s, look at your network tab to validate it works */}\n                <IntervalRefresh every={10 * 1000} />\n            </Table.Consumer>\n            <Table.LastUpdated />\n        </Table>\n    );\n};\nexport default Demo;\n\nconst IntervalRefresh: FunctionComponent<{every: number}> = ({every}) => {\n    const {onChange} = useTable();\n    useEffect(() => {\n        const timer = setInterval(() => onChange(), every);\n        return () => clearInterval(timer);\n    }, [every]);\n\n    return null;\n};\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(E, {})},
                        ),
                    );
                },
                B = (0, d.ClD)(),
                q = [
                    B.accessor('userId', {
                        header: 'User ID',
                        cell: function (e) {
                            return e.row.original.userId;
                        },
                        enableSorting: !1,
                    }),
                    B.accessor('title', {
                        header: 'Title',
                        cell: function (e) {
                            return e.row.original.title;
                        },
                        enableSorting: !1,
                    }),
                ],
                L = function () {
                    var e,
                        n = (0, s._)((0, h.useState)(null), 2),
                        t = n[0],
                        o = n[1],
                        i = (0, s._)((0, h.useState)(!0), 2),
                        l = i[0],
                        u = i[1],
                        m = (0, s._)((0, h.useState)(1), 2),
                        p = m[0],
                        g = m[1],
                        f =
                            ((e = (0, r._)(function (e) {
                                var n, t, a;
                                return (0, c.Jh)(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            (u(!0),
                                                (n = new URLSearchParams({
                                                    _page: (e.pagination.pageIndex + 1).toString(),
                                                    _limit: e.pagination.pageSize.toString(),
                                                    title_like: e.globalFilter,
                                                })),
                                                e.globalFilter || n.delete('title_like'),
                                                (r.label = 1));
                                        case 1:
                                            return (
                                                r.trys.push([1, 4, 5, 6]),
                                                [
                                                    4,
                                                    fetch(
                                                        'https://jsonplaceholder.typicode.com/posts?'.concat(
                                                            n.toString(),
                                                        ),
                                                    ),
                                                ]
                                            );
                                        case 2:
                                            return [4, (a = r.sent()).json()];
                                        case 3:
                                            return (
                                                o(r.sent()),
                                                g(
                                                    Math.ceil(
                                                        Number(a.headers.get('x-total-count')) /
                                                            (null === (t = e.pagination) || void 0 === t
                                                                ? void 0
                                                                : t.pageSize),
                                                    ),
                                                ),
                                                [3, 6]
                                            );
                                        case 4:
                                            return (console.error(r.sent()), [3, 6]);
                                        case 5:
                                            return (u(!1), [7]);
                                        case 6:
                                            return [2];
                                    }
                                });
                            })),
                            function (n) {
                                return e.apply(this, arguments);
                            });
                    return (0, a.jsxs)(d.iA_, {
                        data: t,
                        getRowId: function (e) {
                            return e.id.toString();
                        },
                        columns: q,
                        noDataChildren: (0, a.jsx)(M, {}),
                        onMount: f,
                        onChange: f,
                        loading: l,
                        onRowSelectionChange: function (e) {
                            return console.info(
                                'Row selection changed, selected rows: '.concat(
                                    e
                                        .map(function (e) {
                                            return e.id;
                                        })
                                        .join(', '),
                                ),
                            );
                        },
                        multiRowSelectionEnabled: !0,
                        disableRowSelection: !0,
                        initialState: {
                            rowSelection: {
                                1: {
                                    userId: 1,
                                    id: 1,
                                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                                    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
                                },
                                2: {
                                    userId: 1,
                                    id: 2,
                                    title: 'qui est esse',
                                    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                                },
                            },
                        },
                        children: [
                            (0, a.jsx)(d.iA_.Header, {
                                children: (0, a.jsx)(d.iA_.Filter, {placeholder: 'Search posts by title'}),
                            }),
                            (0, a.jsxs)(d.iA_.Footer, {
                                children: [
                                    (0, a.jsx)(d.iA_.PerPage, {}),
                                    (0, a.jsx)(d.iA_.Pagination, {totalPages: p}),
                                ],
                            }),
                        ],
                    });
                },
                M = function () {
                    var e = (0, d.x6s)(),
                        n = e.isFiltered,
                        t = e.clearFilters;
                    return n
                        ? (0, a.jsxs)(d.R$c, {
                              children: [
                                  (0, a.jsx)(d.Dxz, {order: 4, children: 'No data found for those filters'}),
                                  (0, a.jsx)(d.zxk, {onClick: t, children: 'Clear filters'}),
                              ],
                          })
                        : (0, a.jsx)(d.R$c, {children: (0, a.jsx)(d.Dxz, {order: 4, children: 'No Data'})});
                },
                U = function (e) {
                    return (0, a.jsx)(
                        u.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {\n    BlankSlate,\n    Button,\n    ColumnDef,\n    createColumnHelper,\n    onTableChangeEvent,\n    Table,\n    Title,\n    useTable,\n} from '@coveord/plasma-mantine';\nimport {FunctionComponent, useState} from 'react';\n\ninterface IExampleRowData {\n    userId: number;\n    id: number;\n    title: string;\n    body: string;\n}\n\nconst columnHelper = createColumnHelper<IExampleRowData>();\nconst columns: Array<ColumnDef<IExampleRowData>> = [\n    columnHelper.accessor('userId', {\n        header: 'User ID',\n        cell: (info) => info.row.original.userId,\n        enableSorting: false,\n    }),\n    columnHelper.accessor('title', {\n        header: 'Title',\n        cell: (info) => info.row.original.title,\n        enableSorting: false,\n    }),\n];\n\nconst Demo = () => {\n    const [data, setData] = useState(null);\n    const [loading, setLoading] = useState(true);\n    const [pages, setPages] = useState(1);\n\n    const fetchData: onTableChangeEvent<IExampleRowData> = async (state) => {\n        setLoading(true);\n        const searchParams = new URLSearchParams({\n            _page: (state.pagination.pageIndex + 1).toString(),\n            _limit: state.pagination.pageSize.toString(),\n            title_like: state.globalFilter,\n        });\n        if (!state.globalFilter) {\n            searchParams.delete('title_like');\n        }\n        try {\n            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${searchParams.toString()}`);\n            const body = await response.json();\n            setData(body);\n            setPages(Math.ceil(Number(response.headers.get('x-total-count')) / state.pagination?.pageSize));\n        } catch (e) {\n            console.error(e);\n        } finally {\n            setLoading(false);\n        }\n    };\n\n    return (\n        <Table<IExampleRowData>\n            data={data}\n            getRowId={({id}) => id.toString()}\n            columns={columns}\n            noDataChildren={<NoData />}\n            onMount={fetchData}\n            onChange={fetchData}\n            loading={loading}\n            onRowSelectionChange={(selectedRows) =>\n                console.info(`Row selection changed, selected rows: ${selectedRows.map(({id}) => id).join(', ')}`)\n            }\n            multiRowSelectionEnabled\n            disableRowSelection\n            initialState={{\n                rowSelection: {\n                    '1': {\n                        userId: 1,\n                        id: 1,\n                        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',\n                        body: 'quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto',\n                    },\n                    '2': {\n                        userId: 1,\n                        id: 2,\n                        title: 'qui est esse',\n                        body: 'est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla',\n                    },\n                },\n            }}\n        >\n            <Table.Header>\n                <Table.Filter placeholder=\"Search posts by title\" />\n            </Table.Header>\n            <Table.Footer>\n                <Table.PerPage />\n                <Table.Pagination totalPages={pages} />\n            </Table.Footer>\n        </Table>\n    );\n};\nexport default Demo;\n\nconst NoData: FunctionComponent = () => {\n    const {isFiltered, clearFilters} = useTable();\n\n    return isFiltered ? (\n        <BlankSlate>\n            <Title order={4}>No data found for those filters</Title>\n            <Button onClick={clearFilters}>Clear filters</Button>\n        </BlankSlate>\n    ) : (\n        <BlankSlate>\n            <Title order={4}>No Data</Title>\n        </BlankSlate>\n    );\n};\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(L, {})},
                        ),
                    );
                },
                $ = function () {
                    var e = (0, d.x6s)(),
                        n = e.isFiltered,
                        t = e.clearFilters,
                        o = e.state;
                    return n
                        ? (0, a.jsxs)(d.R$c, {
                              children: [
                                  (0, a.jsxs)(d.Dxz, {
                                      order: 4,
                                      children: ['No data found for filter "', o.globalFilter, '"'],
                                  }),
                                  (0, a.jsx)(d.zxk, {onClick: t, children: 'Clear filter'}),
                              ],
                          })
                        : (0, a.jsxs)(d.R$c, {
                              withBorder: !1,
                              children: [
                                  (0, a.jsx)(m.NoContentSize32Px, {height: 64}),
                                  (0, a.jsx)(d.Dxz, {order: 4, children: 'Hello Empty State'}),
                              ],
                          });
                },
                O = function () {
                    return (0, a.jsxs)(d.iA_, {
                        data: [],
                        columns: Z,
                        noDataChildren: (0, a.jsx)($, {}),
                        initialState: {globalFilter: 'foo', pagination: {pageSize: 5}},
                        children: [
                            (0, a.jsx)(d.iA_.Header, {children: (0, a.jsx)(d.iA_.Filter, {placeholder: 'Search'})}),
                            (0, a.jsxs)(d.iA_.Footer, {
                                children: [
                                    (0, a.jsx)(d.iA_.PerPage, {values: [5, 10, 25]}),
                                    (0, a.jsx)(d.iA_.Pagination, {totalPages: null}),
                                ],
                            }),
                        ],
                    });
                },
                W = (0, d.ClD)(),
                Z = [
                    W.accessor('firstName', {
                        header: 'First name',
                        cell: function (e) {
                            return e.row.original.firstName;
                        },
                    }),
                    W.accessor('lastName', {
                        header: 'Last name',
                        cell: function (e) {
                            return e.row.original.lastName;
                        },
                    }),
                    W.accessor('age', {
                        header: 'Age',
                        cell: function (e) {
                            return e.row.original.age;
                        },
                    }),
                ],
                J = function (e) {
                    return (0, a.jsx)(
                        u.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {BlankSlate, Button, ColumnDef, createColumnHelper, Table, Title, useTable} from '@coveord/plasma-mantine';\nimport {NoContentSize32Px} from '@coveord/plasma-react-icons';\n\nexport type Person = {\n    firstName: string;\n    lastName: string;\n    age: number;\n};\n\nconst NoData = () => {\n    const {isFiltered, clearFilters, state} = useTable();\n\n    return isFiltered ? (\n        <BlankSlate>\n            <Title order={4}>No data found for filter \"{state.globalFilter}\"</Title>\n            <Button onClick={clearFilters}>Clear filter</Button>\n        </BlankSlate>\n    ) : (\n        <BlankSlate withBorder={false}>\n            <NoContentSize32Px height={64} />\n            <Title order={4}>Hello Empty State</Title>\n        </BlankSlate>\n    );\n};\n\nconst Demo = () => (\n    <Table\n        data={[]}\n        columns={columns}\n        noDataChildren={<NoData />}\n        initialState={{globalFilter: 'foo', pagination: {pageSize: 5}}}\n    >\n        <Table.Header>\n            <Table.Filter placeholder=\"Search\" />\n        </Table.Header>\n        <Table.Footer>\n            <Table.PerPage values={[5, 10, 25]} />\n            <Table.Pagination totalPages={null} />\n        </Table.Footer>\n    </Table>\n);\nexport default Demo;\n\nconst columnHelper = createColumnHelper<Person>();\n\nconst columns: Array<ColumnDef<Person>> = [\n    columnHelper.accessor('firstName', {\n        header: 'First name',\n        cell: (info) => info.row.original.firstName,\n    }),\n    columnHelper.accessor('lastName', {\n        header: 'Last name',\n        cell: (info) => info.row.original.lastName,\n    }),\n    columnHelper.accessor('age', {\n        header: 'Age',\n        cell: (info) => info.row.original.age,\n    }),\n];\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(O, {})},
                        ),
                    );
                },
                X = (0, d.ClD)(),
                V = [
                    X.accessor('userId', {
                        header: 'User ID',
                        cell: function (e) {
                            return e.row.original.userId;
                        },
                        enableSorting: !1,
                    }),
                    X.accessor('title', {
                        header: 'Title',
                        cell: function (e) {
                            return e.row.original.title;
                        },
                        enableSorting: !1,
                    }),
                ],
                G = function () {
                    var e,
                        n = (0, s._)((0, h.useState)(null), 2),
                        t = n[0],
                        o = n[1],
                        i = (0, s._)((0, h.useState)(!0), 2),
                        l = i[0],
                        u = i[1],
                        m = (0, s._)((0, h.useState)(1), 2),
                        p = m[0],
                        g = m[1],
                        f =
                            ((e = (0, r._)(function (e) {
                                var n, t, a;
                                return (0, c.Jh)(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            (u(!0),
                                                (n = new URLSearchParams({
                                                    _page: (e.pagination.pageIndex + 1).toString(),
                                                    _limit: e.pagination.pageSize.toString(),
                                                    title_like: e.globalFilter,
                                                })),
                                                e.globalFilter || n.delete('title_like'),
                                                (r.label = 1));
                                        case 1:
                                            return (
                                                r.trys.push([1, 4, 5, 6]),
                                                [
                                                    4,
                                                    fetch(
                                                        'https://jsonplaceholder.typicode.com/posts?'.concat(
                                                            n.toString(),
                                                        ),
                                                    ),
                                                ]
                                            );
                                        case 2:
                                            return [4, (a = r.sent()).json()];
                                        case 3:
                                            return (
                                                o(r.sent()),
                                                g(
                                                    Math.ceil(
                                                        Number(a.headers.get('x-total-count')) /
                                                            (null === (t = e.pagination) || void 0 === t
                                                                ? void 0
                                                                : t.pageSize),
                                                    ),
                                                ),
                                                [3, 6]
                                            );
                                        case 4:
                                            return (console.error(r.sent()), [3, 6]);
                                        case 5:
                                            return (u(!1), [7]);
                                        case 6:
                                            return [2];
                                    }
                                });
                            })),
                            function (n) {
                                return e.apply(this, arguments);
                            });
                    return (0, a.jsxs)(d.iA_, {
                        data: t,
                        getRowId: function (e) {
                            return e.id.toString();
                        },
                        columns: V,
                        noDataChildren: (0, a.jsx)(K, {}),
                        onMount: f,
                        onChange: f,
                        loading: l,
                        onRowSelectionChange: function (e) {
                            return console.info(
                                'Row selection changed, selected rows: '.concat(
                                    e
                                        .map(function (e) {
                                            return e.id;
                                        })
                                        .join(', '),
                                ),
                            );
                        },
                        multiRowSelectionEnabled: !0,
                        initialState: {
                            rowSelection: {
                                1: {
                                    userId: 1,
                                    id: 1,
                                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                                    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
                                },
                                2: {
                                    userId: 1,
                                    id: 2,
                                    title: 'qui est esse',
                                    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                                },
                            },
                        },
                        children: [
                            (0, a.jsxs)(d.iA_.Header, {
                                children: [
                                    (0, a.jsx)(d.iA_.Actions, {
                                        children: function (e) {
                                            return (0, a.jsx)(Q, {data: e});
                                        },
                                    }),
                                    (0, a.jsx)(d.iA_.Filter, {placeholder: 'Search posts by title'}),
                                ],
                            }),
                            (0, a.jsxs)(d.iA_.Footer, {
                                children: [
                                    (0, a.jsx)(d.iA_.PerPage, {}),
                                    (0, a.jsx)(d.iA_.Pagination, {totalPages: p}),
                                ],
                            }),
                        ],
                    });
                },
                K = function () {
                    var e = (0, d.x6s)(),
                        n = e.isFiltered,
                        t = e.clearFilters;
                    return n
                        ? (0, a.jsxs)(d.R$c, {
                              children: [
                                  (0, a.jsx)(d.Dxz, {order: 4, children: 'No data found for those filters'}),
                                  (0, a.jsx)(d.zxk, {onClick: t, children: 'Clear filters'}),
                              ],
                          })
                        : (0, a.jsx)(d.R$c, {children: (0, a.jsx)(d.Dxz, {order: 4, children: 'No Data'})});
                },
                Q = function (e) {
                    var n = e.data;
                    return 1 === n.length
                        ? (0, a.jsx)(d.zxk, {
                              variant: 'subtle',
                              onClick: function () {
                                  return alert('Action triggered on a single row: '.concat(n[0].id));
                              },
                              leftIcon: (0, a.jsx)(m.EditSize16Px, {height: 16}),
                              children: 'Single row action',
                          })
                        : n.length > 1
                          ? (0, a.jsx)(d.zxk, {
                                variant: 'subtle',
                                onClick: function () {
                                    return alert(
                                        'Bulk action triggered on multiple rows: '.concat(
                                            n
                                                .map(function (e) {
                                                    return e.id;
                                                })
                                                .join(', '),
                                        ),
                                    );
                                },
                                leftIcon: (0, a.jsx)(m.DeleteSize16Px, {height: 16}),
                                children: 'Bulk action',
                            })
                          : null;
                },
                Y = function (e) {
                    return (0, a.jsx)(
                        u.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {\n    BlankSlate,\n    Button,\n    ColumnDef,\n    createColumnHelper,\n    onTableChangeEvent,\n    Table,\n    Title,\n    useTable,\n} from '@coveord/plasma-mantine';\nimport {DeleteSize16Px, EditSize16Px} from '@coveord/plasma-react-icons';\nimport {FunctionComponent, useState} from 'react';\n\ninterface IExampleRowData {\n    userId: number;\n    id: number;\n    title: string;\n    body: string;\n}\n\nconst columnHelper = createColumnHelper<IExampleRowData>();\nconst columns: Array<ColumnDef<IExampleRowData>> = [\n    columnHelper.accessor('userId', {\n        header: 'User ID',\n        cell: (info) => info.row.original.userId,\n        enableSorting: false,\n    }),\n    columnHelper.accessor('title', {\n        header: 'Title',\n        cell: (info) => info.row.original.title,\n        enableSorting: false,\n    }),\n];\n\nconst Demo = () => {\n    const [data, setData] = useState(null);\n    const [loading, setLoading] = useState(true);\n    const [pages, setPages] = useState(1);\n\n    const fetchData: onTableChangeEvent<IExampleRowData> = async (state) => {\n        setLoading(true);\n        const searchParams = new URLSearchParams({\n            _page: (state.pagination.pageIndex + 1).toString(),\n            _limit: state.pagination.pageSize.toString(),\n            title_like: state.globalFilter,\n        });\n        if (!state.globalFilter) {\n            searchParams.delete('title_like');\n        }\n        try {\n            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${searchParams.toString()}`);\n            const body = await response.json();\n            setData(body);\n            setPages(Math.ceil(Number(response.headers.get('x-total-count')) / state.pagination?.pageSize));\n        } catch (e) {\n            console.error(e);\n        } finally {\n            setLoading(false);\n        }\n    };\n\n    return (\n        <Table<IExampleRowData>\n            data={data}\n            getRowId={({id}) => id.toString()}\n            columns={columns}\n            noDataChildren={<NoData />}\n            onMount={fetchData}\n            onChange={fetchData}\n            loading={loading}\n            onRowSelectionChange={(selectedRows) =>\n                console.info(`Row selection changed, selected rows: ${selectedRows.map(({id}) => id).join(', ')}`)\n            }\n            multiRowSelectionEnabled\n            initialState={{\n                rowSelection: {\n                    '1': {\n                        userId: 1,\n                        id: 1,\n                        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',\n                        body: 'quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto',\n                    },\n                    '2': {\n                        userId: 1,\n                        id: 2,\n                        title: 'qui est esse',\n                        body: 'est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla',\n                    },\n                },\n            }}\n        >\n            <Table.Header>\n                <Table.Actions>\n                    {(selectedRows: IExampleRowData[]) => <TableActions data={selectedRows} />}\n                </Table.Actions>\n                <Table.Filter placeholder=\"Search posts by title\" />\n            </Table.Header>\n            <Table.Footer>\n                <Table.PerPage />\n                <Table.Pagination totalPages={pages} />\n            </Table.Footer>\n        </Table>\n    );\n};\nexport default Demo;\n\nconst NoData: FunctionComponent = () => {\n    const {isFiltered, clearFilters} = useTable();\n\n    return isFiltered ? (\n        <BlankSlate>\n            <Title order={4}>No data found for those filters</Title>\n            <Button onClick={clearFilters}>Clear filters</Button>\n        </BlankSlate>\n    ) : (\n        <BlankSlate>\n            <Title order={4}>No Data</Title>\n        </BlankSlate>\n    );\n};\n\nconst TableActions: FunctionComponent<{data: IExampleRowData[]}> = ({data}) => {\n    if (data.length === 1) {\n        return (\n            <Button\n                variant=\"subtle\"\n                onClick={() => alert(`Action triggered on a single row: ${data[0].id}`)}\n                leftIcon={<EditSize16Px height={16} />}\n            >\n                Single row action\n            </Button>\n        );\n    }\n    if (data.length > 1) {\n        return (\n            <Button\n                variant=\"subtle\"\n                onClick={() => alert(`Bulk action triggered on multiple rows: ${data.map(({id}) => id).join(', ')}`)}\n                leftIcon={<DeleteSize16Px height={16} />}\n            >\n                Bulk action\n            </Button>\n        );\n    }\n\n    return null;\n};\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(G, {})},
                        ),
                    );
                },
                ee = t(66809),
                en = function () {
                    return (0, a.jsx)(ee.X, {
                        section: 'Layout',
                        title: 'Table',
                        sourcePath: '/packages/mantine/src/components/table/Table.tsx',
                        description:
                            'A table displays large quantities of items or data in a list format. Filtering features, date picker, collapsible rows and actions may be added.',
                        id: 'Table',
                        propsMetadata: o.FF,
                        demo: (0, a.jsx)(P, {noPadding: !0, layout: 'vertical'}),
                        examples: {
                            multiSelect: (0, a.jsx)(Y, {
                                noPadding: !0,
                                layout: 'vertical',
                                title: 'Table with bulk selection of rows',
                            }),
                            disableRowSelection: (0, a.jsx)(U, {
                                noPadding: !0,
                                layout: 'vertical',
                                title: 'Table with disabled row selection',
                            }),
                            clientSide: (0, a.jsx)(R, {
                                noPadding: !0,
                                layout: 'vertical',
                                title: 'Table with client side pagination, sorting, and filtering',
                            }),
                            emptyState: (0, a.jsx)(J, {
                                noPadding: !0,
                                layout: 'vertical',
                                title: 'Table with empty states',
                            }),
                            consumer: (0, a.jsx)(z, {
                                noPadding: !0,
                                layout: 'vertical',
                                title: 'Table with a child component using the hook to re-fetch',
                            }),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(
            0,
            [2876, 84528, 76358, 82272, 59827, 79012, 59594, 73576, 41690, 37791, 66809, 26412, 49774, 92888, 40179],
            function () {
                return e((e.s = 74964));
            },
        ),
            (_N_E = e.O()));
    },
]);
