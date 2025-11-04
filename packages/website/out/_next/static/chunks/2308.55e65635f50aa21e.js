'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2308],
    {
        2308: function (e, t, r) {
            (r.r(t),
                r.d(t, {
                    k: function () {
                        return s;
                    },
                }));
            var n = r(87856),
                u = r(30839),
                a = (0, n.c)(function (e, t) {
                    var r, a, d, s, _, l;
                    (n.a,
                        (r = t),
                        (a = u.d),
                        (d = {1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠'}),
                        (s = {
                            '١': '1',
                            '٢': '2',
                            '٣': '3',
                            '٤': '4',
                            '٥': '5',
                            '٦': '6',
                            '٧': '7',
                            '٨': '8',
                            '٩': '9',
                            '٠': '0',
                        }),
                        (l = {
                            name: 'ku',
                            months: (_ = [
                                'کانوونی دووەم',
                                'شوبات',
                                'ئادار',
                                'نیسان',
                                'ئایار',
                                'حوزەیران',
                                'تەممووز',
                                'ئاب',
                                'ئەیلوول',
                                'تشرینی یەکەم',
                                'تشرینی دووەم',
                                'کانوونی یەکەم',
                            ]),
                            monthsShort: _,
                            weekdays: 'یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە'.split('_'),
                            weekdaysShort: 'یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە'.split('_'),
                            weekStart: 6,
                            weekdaysMin: 'ی_د_س_چ_پ_هـ_ش'.split('_'),
                            preparse: function (e) {
                                return e
                                    .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                                        return s[e];
                                    })
                                    .replace(/،/g, ',');
                            },
                            postformat: function (e) {
                                return e
                                    .replace(/\d/g, function (e) {
                                        return d[e];
                                    })
                                    .replace(/,/g, '،');
                            },
                            ordinal: function (e) {
                                return e;
                            },
                            formats: {
                                LT: 'HH:mm',
                                LTS: 'HH:mm:ss',
                                L: 'DD/MM/YYYY',
                                LL: 'D MMMM YYYY',
                                LLL: 'D MMMM YYYY HH:mm',
                                LLLL: 'dddd, D MMMM YYYY HH:mm',
                            },
                            meridiem: function (e) {
                                return e < 12 ? 'پ.ن' : 'د.ن';
                            },
                            relativeTime: {
                                future: 'لە %s',
                                past: 'لەمەوپێش %s',
                                s: 'چەند چرکەیەک',
                                m: 'یەک خولەک',
                                mm: '%d خولەک',
                                h: 'یەک کاتژمێر',
                                hh: '%d کاتژمێر',
                                d: 'یەک ڕۆژ',
                                dd: '%d ڕۆژ',
                                M: 'یەک مانگ',
                                MM: '%d مانگ',
                                y: 'یەک ساڵ',
                                yy: '%d ساڵ',
                            },
                        }),
                        (a && 'object' == typeof a && 'default' in a ? a : {default: a}).default.locale(l, null, !0),
                        (r.default = l),
                        (r.englishToArabicNumbersMap = d),
                        Object.defineProperty(r, '__esModule', {value: !0}));
                });
            let d = (0, n.g)(a),
                s = Object.freeze(Object.assign(Object.create(null), a, {default: d}));
        },
    },
]);
