'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2286],
    {
        2286: function (e, n, u) {
            (u.r(n),
                u.d(n, {
                    b: function () {
                        return a;
                    },
                }));
            var r = u(87856),
                t = u(30839),
                _ = (0, r.c)(function (e, n) {
                    (r.a,
                        (e.exports = (function (e) {
                            function n(e, n, u) {
                                var r;
                                return (
                                    e +
                                    ' ' +
                                    ((r = {mm: 'munutenn', MM: 'miz', dd: 'devezh'}[u]),
                                    2 === e ? {m: 'v', b: 'v', d: 'z'}[r.charAt(0)] + r.substring(1) : r)
                                );
                            }
                            var u = {
                                name: 'br',
                                weekdays: 'Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn'.split('_'),
                                months: 'Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split(
                                    '_',
                                ),
                                weekStart: 1,
                                weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
                                monthsShort: 'Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
                                weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
                                ordinal: function (e) {
                                    return e;
                                },
                                formats: {
                                    LT: 'h[e]mm A',
                                    LTS: 'h[e]mm:ss A',
                                    L: 'DD/MM/YYYY',
                                    LL: 'D [a viz] MMMM YYYY',
                                    LLL: 'D [a viz] MMMM YYYY h[e]mm A',
                                    LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A',
                                },
                                relativeTime: {
                                    future: 'a-benn %s',
                                    past: '%s ʼzo',
                                    s: 'un nebeud segondenno\xf9',
                                    m: 'ur vunutenn',
                                    mm: n,
                                    h: 'un eur',
                                    hh: '%d eur',
                                    d: 'un devezh',
                                    dd: n,
                                    M: 'ur miz',
                                    MM: n,
                                    y: 'ur bloaz',
                                    yy: function (e) {
                                        switch (
                                            (function e(n) {
                                                return n > 9 ? e(n % 10) : n;
                                            })(e)
                                        ) {
                                            case 1:
                                            case 3:
                                            case 4:
                                            case 5:
                                            case 9:
                                                return e + ' bloaz';
                                            default:
                                                return e + ' vloaz';
                                        }
                                    },
                                },
                                meridiem: function (e) {
                                    return e < 12 ? 'a.m.' : 'g.m.';
                                },
                            };
                            return (
                                (e && 'object' == typeof e && 'default' in e ? e : {default: e}).default.locale(
                                    u,
                                    null,
                                    !0,
                                ),
                                u
                            );
                        })(t.d)));
                });
            let a = Object.freeze(Object.assign(Object.create(null), _, {default: _}));
        },
    },
]);
