'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [80125],
    {
        80125: function (e, _, t) {
            (t.r(_),
                t.d(_, {
                    b: function () {
                        return s;
                    },
                }));
            var n = t(87856),
                r = t(30839),
                u = (0, n.c)(function (e, _) {
                    var t, u, s, a;
                    (n.a,
                        (e.exports =
                            ((t = r.d),
                            (u = {1: '১', 2: '২', 3: '৩', 4: '৪', 5: '৫', 6: '৬', 7: '৭', 8: '৮', 9: '৯', 0: '০'}),
                            (s = {
                                '১': '1',
                                '২': '2',
                                '৩': '3',
                                '৪': '4',
                                '৫': '5',
                                '৬': '6',
                                '৭': '7',
                                '৮': '8',
                                '৯': '9',
                                '০': '0',
                            }),
                            (a = {
                                name: 'bn-bd',
                                weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
                                months: 'জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split(
                                    '_',
                                ),
                                weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
                                monthsShort: 'জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে'.split(
                                    '_',
                                ),
                                weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
                                weekStart: 0,
                                preparse: function (e) {
                                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                                        return s[e];
                                    });
                                },
                                postformat: function (e) {
                                    return e.replace(/\d/g, function (e) {
                                        return u[e];
                                    });
                                },
                                ordinal: function (e) {
                                    var _ = ['ই', 'লা', 'রা', 'ঠা', 'শে'],
                                        t = e % 100;
                                    return '[' + e + (_[(t - 20) % 10] || _[t] || 'ই') + ']';
                                },
                                formats: {
                                    LT: 'A h:mm সময়',
                                    LTS: 'A h:mm:ss সময়',
                                    L: 'DD/MM/YYYY খ্রিস্টাব্দ',
                                    LL: 'D MMMM YYYY খ্রিস্টাব্দ',
                                    LLL: 'D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়',
                                    LLLL: 'dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়',
                                },
                                meridiem: function (e) {
                                    return e < 4
                                        ? 'রাত'
                                        : e < 6
                                          ? 'ভোর'
                                          : e < 12
                                            ? 'সকাল'
                                            : e < 15
                                              ? 'দুপুর'
                                              : e < 18
                                                ? 'বিকাল'
                                                : e < 20
                                                  ? 'সন্ধ্যা'
                                                  : 'রাত';
                                },
                                relativeTime: {
                                    future: '%s পরে',
                                    past: '%s আগে',
                                    s: 'কয়েক সেকেন্ড',
                                    m: 'এক মিনিট',
                                    mm: '%d মিনিট',
                                    h: 'এক ঘন্টা',
                                    hh: '%d ঘন্টা',
                                    d: 'এক দিন',
                                    dd: '%d দিন',
                                    M: 'এক মাস',
                                    MM: '%d মাস',
                                    y: 'এক বছর',
                                    yy: '%d বছর',
                                },
                            }),
                            (t && 'object' == typeof t && 'default' in t ? t : {default: t}).default.locale(
                                a,
                                null,
                                !0,
                            ),
                            a)));
                });
            let s = Object.freeze(Object.assign(Object.create(null), u, {default: u}));
        },
    },
]);
