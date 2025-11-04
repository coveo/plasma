(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [20872],
    {
        29768: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/DatePicker',
                function () {
                    return n(4115);
                },
            ]);
        },
        4115: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    default: function () {
                        return y;
                    },
                }));
            var a = n(97458),
                o = n(19523),
                i = n(52071),
                l = n(88966),
                r = n(39668),
                s = n(94807),
                c = n(6901),
                d = n.n(c),
                u = function () {
                    return (0, a.jsx)(s.nkC, {
                        id: 'range-date-picker',
                        datesSelectionBoxes: p,
                        selectionRules: D,
                        initiallyUnselected: !0,
                        isClearable: !0,
                        label: 'Select a date range',
                    });
                },
                p = [
                    {
                        title: 'Select a date range',
                        quickOptions: [
                            {
                                label: 'Last Week',
                                value: function () {
                                    return (
                                        d()().subtract(1, 'week').toDate().toString() + s.wJQ + new Date().toString()
                                    );
                                },
                            },
                            {
                                label: 'Last day',
                                value: function () {
                                    return d()().subtract(1, 'day').toDate().toString() + s.wJQ + new Date().toString();
                                },
                            },
                        ],
                        isRange: !0,
                        withTime: !1,
                        hasSetToNowButton: !0,
                    },
                ],
                D = [
                    {
                        test: function (e) {
                            return e <= new Date() && e >= d()().subtract(2, 'weeks').toDate();
                        },
                        isFor: s.uPs.all,
                    },
                    {
                        test: function (e, t) {
                            return d()(t).diff(d()(e), 'day') >= 0;
                        },
                        isFor: s.uPs.upper,
                    },
                ],
                m = function (e) {
                    return (0, a.jsx)(
                        r.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {\n    CalendarSelectionRuleType,\n    DATES_SEPARATOR,\n    DatePickerDropdownConnected,\n    IDatesSelectionBox,\n    ICalendarSelectionRule,\n} from '@coveord/plasma-react';\nimport moment from 'moment';\n\nconst Demo = () => (\n    <DatePickerDropdownConnected\n        id=\"range-date-picker\"\n        datesSelectionBoxes={selectionOptions}\n        selectionRules={rules}\n        initiallyUnselected\n        isClearable\n        label=\"Select a date range\"\n    />\n);\nexport default Demo;\n\nconst selectionOptions: IDatesSelectionBox[] = [\n    {\n        title: 'Select a date range',\n        quickOptions: [\n            {\n                label: 'Last Week',\n                value: () => moment().subtract(1, 'week').toDate().toString() + DATES_SEPARATOR + new Date().toString(),\n            },\n            {\n                label: 'Last day',\n                value: () => moment().subtract(1, 'day').toDate().toString() + DATES_SEPARATOR + new Date().toString(),\n            },\n        ],\n        isRange: true,\n        withTime: false,\n        hasSetToNowButton: true,\n    },\n];\n\nconst rules: ICalendarSelectionRule[] = [\n    {\n        test: (date: Date) => date <= new Date() && date >= moment().subtract(2, 'weeks').toDate(), // the date is within the last two weeks\n        isFor: CalendarSelectionRuleType.all,\n    },\n    {\n        test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') >= 0, // The end date cannot be before the start date\n        isFor: CalendarSelectionRuleType.upper,\n    },\n];\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(u, {})},
                        ),
                    );
                },
                S = function () {
                    return (0, a.jsx)(s.nkC, {
                        id: 'readonly-date-picker',
                        datesSelectionBoxes: [{title: 'Select a date', isRange: !0, withTime: !0}],
                        readonly: !0,
                    });
                },
                w = function (e) {
                    return (0, a.jsx)(
                        r.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {DatePickerDropdownConnected} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <DatePickerDropdownConnected\n        id=\"readonly-date-picker\"\n        datesSelectionBoxes={[\n            {\n                title: 'Select a date',\n                isRange: true,\n                withTime: true,\n            },\n        ]}\n        readonly\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(S, {})},
                        ),
                    );
                },
                f = function () {
                    return (0, a.jsx)(s.nkC, {
                        id: 'single-date-picker',
                        datesSelectionBoxes: k,
                        selectionRules: g,
                        initiallyUnselected: !0,
                        isClearable: !0,
                        label: 'Select a date',
                        isLinkedToDateRange: !1,
                    });
                },
                k = [{title: 'Select a date', isRange: !1, withTime: !1, hasSetToNowButton: !0}],
                g = [
                    {
                        test: function (e) {
                            return d()(e).day() > 0 && 6 > d()(e).day();
                        },
                        isFor: s.uPs.all,
                    },
                ],
                x = function (e) {
                    return (0, a.jsx)(
                        r.Z,
                        (0, l._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {\n    CalendarSelectionRuleType,\n    DatePickerDropdownConnected,\n    IDatesSelectionBox,\n    ICalendarSelectionRule,\n} from '@coveord/plasma-react';\nimport moment from 'moment';\n\nconst Demo = () => (\n    <DatePickerDropdownConnected\n        id=\"single-date-picker\"\n        datesSelectionBoxes={selectionOptions}\n        selectionRules={rules}\n        initiallyUnselected\n        isClearable\n        label=\"Select a date\"\n        isLinkedToDateRange={false}\n    />\n);\nexport default Demo;\n\nconst selectionOptions: IDatesSelectionBox[] = [\n    {\n        title: 'Select a date',\n        isRange: false,\n        withTime: false,\n        hasSetToNowButton: true,\n    },\n];\n\nconst rules: ICalendarSelectionRule[] = [\n    {\n        test: (date: Date) => moment(date).day() > 0 && moment(date).day() < 6, // the date is not a week-end day\n        isFor: CalendarSelectionRuleType.all,\n    },\n];\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(f, {})},
                        ),
                    );
                },
                R = n(66809),
                y = function () {
                    return (0, a.jsx)(R.X, {
                        id: 'DatePickerDropdownConnected',
                        title: 'Date Picker',
                        section: 'Form',
                        description:
                            'A date picker is a calendar interface that allows users to select a single date or a date range.',
                        sourcePath: '/packages/react/src/components/datePicker/DatePickerDropdown.tsx',
                        demo: (0, a.jsx)(m, {}),
                        propsMetadata: o.IF,
                        examples: {
                            singleDate: (0, a.jsx)(x, {title: 'Single Date'}),
                            readOnly: (0, a.jsx)(w, {title: 'Disabled'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 29768));
        }),
            (_N_E = e.O()));
    },
]);
