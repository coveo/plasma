'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [18450],
    {
        18450: function (e, a, t) {
            (t.r(a),
                t.d(a, {
                    e: function () {
                        return u;
                    },
                }));
            var _ = t(87856),
                r = t(30839),
                n = (0, _.c)(function (e, a) {
                    var t, n;
                    (_.a,
                        (e.exports =
                            ((t = r.d),
                            (n = {
                                name: 'en-in',
                                weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                                weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
                                weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
                                months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                                    '_',
                                ),
                                monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
                                weekStart: 1,
                                yearStart: 4,
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
                                formats: {
                                    LT: 'HH:mm',
                                    LTS: 'HH:mm:ss',
                                    L: 'DD/MM/YYYY',
                                    LL: 'D MMMM YYYY',
                                    LLL: 'D MMMM YYYY HH:mm',
                                    LLLL: 'dddd, D MMMM YYYY HH:mm',
                                },
                                ordinal: function (e) {
                                    var a = ['th', 'st', 'nd', 'rd'],
                                        t = e % 100;
                                    return '[' + e + (a[(t - 20) % 10] || a[t] || 'th') + ']';
                                },
                            }),
                            (t && 'object' == typeof t && 'default' in t ? t : {default: t}).default.locale(
                                n,
                                null,
                                !0,
                            ),
                            n)));
                });
            let u = Object.freeze(Object.assign(Object.create(null), n, {default: n}));
        },
    },
]);
