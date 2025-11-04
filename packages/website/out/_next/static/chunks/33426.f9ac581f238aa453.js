'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [33426],
    {
        33426: function (e, a, _) {
            (_.r(a),
                _.d(a, {
                    e: function () {
                        return u;
                    },
                }));
            var t = _(87856),
                n = _(30839),
                r = (0, t.c)(function (e, a) {
                    var _, r;
                    (t.a,
                        (e.exports =
                            ((_ = n.d),
                            (r = {
                                name: 'en-nz',
                                weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                                months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                                    '_',
                                ),
                                weekStart: 1,
                                weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
                                monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
                                weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
                                ordinal: function (e) {
                                    var a = ['th', 'st', 'nd', 'rd'],
                                        _ = e % 100;
                                    return '[' + e + (a[(_ - 20) % 10] || a[_] || 'th') + ']';
                                },
                                formats: {
                                    LT: 'h:mm A',
                                    LTS: 'h:mm:ss A',
                                    L: 'DD/MM/YYYY',
                                    LL: 'D MMMM YYYY',
                                    LLL: 'D MMMM YYYY h:mm A',
                                    LLLL: 'dddd, D MMMM YYYY h:mm A',
                                },
                                relativeTime: {
                                    future: 'in %s',
                                    past: '%s ago',
                                    s: 'a few seconds',
                                    m: 'a minute',
                                    mm: '%d minutes',
                                    h: 'an hour',
                                    hh: '%d hours',
                                    d: 'a day',
                                    dd: '%d days',
                                    M: 'a month',
                                    MM: '%d months',
                                    y: 'a year',
                                    yy: '%d years',
                                },
                            }),
                            (_ && 'object' == typeof _ && 'default' in _ ? _ : {default: _}).default.locale(
                                r,
                                null,
                                !0,
                            ),
                            r)));
                });
            let u = Object.freeze(Object.assign(Object.create(null), r, {default: r}));
        },
    },
]);
