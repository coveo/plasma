'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [87823],
    {
        87823: function (s, e, a) {
            (a.r(e),
                a.d(e, {
                    l: function () {
                        return Y;
                    },
                }));
            var i = a(87856),
                M = a(30839),
                l = (0, i.c)(function (s, e) {
                    var a, l, Y, d, _, t;
                    (i.a,
                        (s.exports =
                            ((a = M.d),
                            (l =
                                'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split(
                                    '_',
                                )),
                            (Y =
                                'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split(
                                    '_',
                                )),
                            (d = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/),
                            ((_ = function (s, e) {
                                return d.test(e) ? l[s.month()] : Y[s.month()];
                            }).s = Y),
                            (_.f = l),
                            (t = {
                                name: 'lt',
                                weekdays:
                                    'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split(
                                        '_',
                                    ),
                                weekdaysShort: 'sek_pir_ant_tre_ket_pen_šeš'.split('_'),
                                weekdaysMin: 's_p_a_t_k_pn_š'.split('_'),
                                months: _,
                                monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
                                ordinal: function (s) {
                                    return s + '.';
                                },
                                weekStart: 1,
                                relativeTime: {
                                    future: 'už %s',
                                    past: 'prieš %s',
                                    s: 'kelias sekundes',
                                    m: 'minutę',
                                    mm: '%d minutes',
                                    h: 'valandą',
                                    hh: '%d valandas',
                                    d: 'dieną',
                                    dd: '%d dienas',
                                    M: 'mėnesį',
                                    MM: '%d mėnesius',
                                    y: 'metus',
                                    yy: '%d metus',
                                },
                                format: {
                                    LT: 'HH:mm',
                                    LTS: 'HH:mm:ss',
                                    L: 'YYYY-MM-DD',
                                    LL: 'YYYY [m.] MMMM D [d.]',
                                    LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
                                    LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
                                    l: 'YYYY-MM-DD',
                                    ll: 'YYYY [m.] MMMM D [d.]',
                                    lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
                                    llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
                                },
                                formats: {
                                    LT: 'HH:mm',
                                    LTS: 'HH:mm:ss',
                                    L: 'YYYY-MM-DD',
                                    LL: 'YYYY [m.] MMMM D [d.]',
                                    LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
                                    LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
                                    l: 'YYYY-MM-DD',
                                    ll: 'YYYY [m.] MMMM D [d.]',
                                    lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
                                    llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
                                },
                            }),
                            (a && 'object' == typeof a && 'default' in a ? a : {default: a}).default.locale(
                                t,
                                null,
                                !0,
                            ),
                            t)));
                });
            let Y = Object.freeze(Object.assign(Object.create(null), l, {default: l}));
        },
    },
]);
