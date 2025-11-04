'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4721],
    {
        4721: function (e, t, i) {
            (i.r(t),
                i.d(t, {
                    p: function () {
                        return _;
                    },
                }));
            var a = i(87856),
                n = i(30839),
                r = (0, a.c)(function (e, t) {
                    (a.a,
                        (e.exports = (function (e) {
                            function t(e) {
                                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
                            }
                            function i(e, i, a) {
                                var n = e + ' ';
                                switch (a) {
                                    case 'm':
                                        return i ? 'minuta' : 'minutę';
                                    case 'mm':
                                        return n + (t(e) ? 'minuty' : 'minut');
                                    case 'h':
                                        return i ? 'godzina' : 'godzinę';
                                    case 'hh':
                                        return n + (t(e) ? 'godziny' : 'godzin');
                                    case 'MM':
                                        return n + (t(e) ? 'miesiące' : 'miesięcy');
                                    case 'yy':
                                        return n + (t(e) ? 'lata' : 'lat');
                                }
                            }
                            var a =
                                    'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
                                        '_',
                                    ),
                                n =
                                    'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
                                        '_',
                                    ),
                                r = /D MMMM/,
                                _ = function (e, t) {
                                    return r.test(t) ? a[e.month()] : n[e.month()];
                                };
                            ((_.s = n), (_.f = a));
                            var s = {
                                name: 'pl',
                                weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
                                weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
                                weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
                                months: _,
                                monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
                                ordinal: function (e) {
                                    return e + '.';
                                },
                                weekStart: 1,
                                yearStart: 4,
                                relativeTime: {
                                    future: 'za %s',
                                    past: '%s temu',
                                    s: 'kilka sekund',
                                    m: i,
                                    mm: i,
                                    h: i,
                                    hh: i,
                                    d: '1 dzień',
                                    dd: '%d dni',
                                    M: 'miesiąc',
                                    MM: i,
                                    y: 'rok',
                                    yy: i,
                                },
                                formats: {
                                    LT: 'HH:mm',
                                    LTS: 'HH:mm:ss',
                                    L: 'DD.MM.YYYY',
                                    LL: 'D MMMM YYYY',
                                    LLL: 'D MMMM YYYY HH:mm',
                                    LLLL: 'dddd, D MMMM YYYY HH:mm',
                                },
                            };
                            return (
                                (e && 'object' == typeof e && 'default' in e ? e : {default: e}).default.locale(
                                    s,
                                    null,
                                    !0,
                                ),
                                s
                            );
                        })(n.d)));
                });
            let _ = Object.freeze(Object.assign(Object.create(null), r, {default: r}));
        },
    },
]);
