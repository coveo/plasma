'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [13214],
    {
        13214: function (e, t, _) {
            (_.r(t),
                _.d(t, {
                    a: function () {
                        return s;
                    },
                }));
            var r = _(87856),
                n = _(30839),
                a = (0, r.c)(function (e, t) {
                    var _, a, s, u, d;
                    (r.a,
                        (e.exports =
                            ((_ = n.d),
                            (a = 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
                                '_',
                            )),
                            (s = {1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠'}),
                            (u = {
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
                            (d = {
                                name: 'ar',
                                weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
                                weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
                                weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
                                months: a,
                                monthsShort: a,
                                weekStart: 6,
                                relativeTime: {
                                    future: 'بعد %s',
                                    past: 'منذ %s',
                                    s: 'ثانية واحدة',
                                    m: 'دقيقة واحدة',
                                    mm: '%d دقائق',
                                    h: 'ساعة واحدة',
                                    hh: '%d ساعات',
                                    d: 'يوم واحد',
                                    dd: '%d أيام',
                                    M: 'شهر واحد',
                                    MM: '%d أشهر',
                                    y: 'عام واحد',
                                    yy: '%d أعوام',
                                },
                                preparse: function (e) {
                                    return e
                                        .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                                            return u[e];
                                        })
                                        .replace(/،/g, ',');
                                },
                                postformat: function (e) {
                                    return e
                                        .replace(/\d/g, function (e) {
                                            return s[e];
                                        })
                                        .replace(/,/g, '،');
                                },
                                ordinal: function (e) {
                                    return e;
                                },
                                formats: {
                                    LT: 'HH:mm',
                                    LTS: 'HH:mm:ss',
                                    L: 'D/‏M/‏YYYY',
                                    LL: 'D MMMM YYYY',
                                    LLL: 'D MMMM YYYY HH:mm',
                                    LLLL: 'dddd D MMMM YYYY HH:mm',
                                },
                            }),
                            (_ && 'object' == typeof _ && 'default' in _ ? _ : {default: _}).default.locale(
                                d,
                                null,
                                !0,
                            ),
                            d)));
                });
            let s = Object.freeze(Object.assign(Object.create(null), a, {default: a}));
        },
    },
]);
