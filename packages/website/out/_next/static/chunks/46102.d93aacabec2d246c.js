'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [46102],
    {
        46102: function (e, a, t) {
            (t.r(a),
                t.d(a, {
                    h: function () {
                        return i;
                    },
                }));
            var _ = t(87856),
                s = t(30839),
                n = (0, _.c)(function (e, a) {
                    var t, n, i, o, r, u;
                    (_.a,
                        (e.exports =
                            ((t = s.d),
                            (n =
                                'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split(
                                    '_',
                                )),
                            (i =
                                'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split(
                                    '_',
                                )),
                            (o = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/),
                            ((r = function (e, a) {
                                return o.test(a) ? n[e.month()] : i[e.month()];
                            }).s = i),
                            (r.f = n),
                            (u = {
                                name: 'hr',
                                weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
                                weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
                                weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
                                months: r,
                                monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
                                weekStart: 1,
                                formats: {
                                    LT: 'H:mm',
                                    LTS: 'H:mm:ss',
                                    L: 'DD.MM.YYYY',
                                    LL: 'D. MMMM YYYY',
                                    LLL: 'D. MMMM YYYY H:mm',
                                    LLLL: 'dddd, D. MMMM YYYY H:mm',
                                },
                                relativeTime: {
                                    future: 'za %s',
                                    past: 'prije %s',
                                    s: 'sekunda',
                                    m: 'minuta',
                                    mm: '%d minuta',
                                    h: 'sat',
                                    hh: '%d sati',
                                    d: 'dan',
                                    dd: '%d dana',
                                    M: 'mjesec',
                                    MM: '%d mjeseci',
                                    y: 'godina',
                                    yy: '%d godine',
                                },
                                ordinal: function (e) {
                                    return e + '.';
                                },
                            }),
                            (t && 'object' == typeof t && 'default' in t ? t : {default: t}).default.locale(
                                u,
                                null,
                                !0,
                            ),
                            u)));
                });
            let i = Object.freeze(Object.assign(Object.create(null), n, {default: n}));
        },
    },
]);
