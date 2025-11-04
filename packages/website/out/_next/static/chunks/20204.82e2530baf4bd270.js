'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [20204],
    {
        20204: function (e, t, a) {
            (a.r(t),
                a.d(t, {
                    s: function () {
                        return o;
                    },
                }));
            var r = a(87856),
                n = a(30839),
                s = (0, r.c)(function (e, t) {
                    (r.a,
                        (e.exports = (function (e) {
                            function t(e) {
                                return e > 1 && e < 5 && 1 != ~~(e / 10);
                            }
                            function a(e, a, r, n) {
                                var s = e + ' ';
                                switch (r) {
                                    case 's':
                                        return a || n ? 'p\xe1r sek\xfand' : 'p\xe1r sekundami';
                                    case 'm':
                                        return a ? 'min\xfata' : n ? 'min\xfatu' : 'min\xfatou';
                                    case 'mm':
                                        return a || n ? s + (t(e) ? 'min\xfaty' : 'min\xfat') : s + 'min\xfatami';
                                    case 'h':
                                        return a ? 'hodina' : n ? 'hodinu' : 'hodinou';
                                    case 'hh':
                                        return a || n ? s + (t(e) ? 'hodiny' : 'hod\xedn') : s + 'hodinami';
                                    case 'd':
                                        return a || n ? 'deň' : 'dňom';
                                    case 'dd':
                                        return a || n ? s + (t(e) ? 'dni' : 'dn\xed') : s + 'dňami';
                                    case 'M':
                                        return a || n ? 'mesiac' : 'mesiacom';
                                    case 'MM':
                                        return a || n ? s + (t(e) ? 'mesiace' : 'mesiacov') : s + 'mesiacmi';
                                    case 'y':
                                        return a || n ? 'rok' : 'rokom';
                                    case 'yy':
                                        return a || n ? s + (t(e) ? 'roky' : 'rokov') : s + 'rokmi';
                                }
                            }
                            var r = {
                                name: 'sk',
                                weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
                                weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
                                weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
                                months: 'janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december'.split(
                                    '_',
                                ),
                                monthsShort: 'jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec'.split('_'),
                                weekStart: 1,
                                yearStart: 4,
                                ordinal: function (e) {
                                    return e + '.';
                                },
                                formats: {
                                    LT: 'H:mm',
                                    LTS: 'H:mm:ss',
                                    L: 'DD.MM.YYYY',
                                    LL: 'D. MMMM YYYY',
                                    LLL: 'D. MMMM YYYY H:mm',
                                    LLLL: 'dddd D. MMMM YYYY H:mm',
                                    l: 'D. M. YYYY',
                                },
                                relativeTime: {
                                    future: 'za %s',
                                    past: 'pred %s',
                                    s: a,
                                    m: a,
                                    mm: a,
                                    h: a,
                                    hh: a,
                                    d: a,
                                    dd: a,
                                    M: a,
                                    MM: a,
                                    y: a,
                                    yy: a,
                                },
                            };
                            return (
                                (e && 'object' == typeof e && 'default' in e ? e : {default: e}).default.locale(
                                    r,
                                    null,
                                    !0,
                                ),
                                r
                            );
                        })(n.d)));
                });
            let o = Object.freeze(Object.assign(Object.create(null), s, {default: s}));
        },
    },
]);
