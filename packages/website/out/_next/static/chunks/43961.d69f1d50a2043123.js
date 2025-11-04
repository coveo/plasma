'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [43961],
    {
        43961: function (e, u, a) {
            (a.r(u),
                a.d(u, {
                    i: function () {
                        return f;
                    },
                }));
            var r = a(87856),
                x = a(30839),
                n = (0, r.c)(function (e, u) {
                    (r.a,
                        (e.exports = (function (e) {
                            var u = {
                                s: ['nokkrar sek\xfandur', 'nokkrar sek\xfandur', 'nokkrum sek\xfandum'],
                                m: ['m\xedn\xfata', 'm\xedn\xfatu', 'm\xedn\xfatu'],
                                mm: ['m\xedn\xfatur', 'm\xedn\xfatur', 'm\xedn\xfatum'],
                                h: ['klukkustund', 'klukkustund', 'klukkustund'],
                                hh: ['klukkustundir', 'klukkustundir', 'klukkustundum'],
                                d: ['dagur', 'dag', 'degi'],
                                dd: ['dagar', 'daga', 'd\xf6gum'],
                                M: ['m\xe1nu\xf0ur', 'm\xe1nu\xf0', 'm\xe1nu\xf0i'],
                                MM: ['m\xe1nu\xf0ir', 'm\xe1nu\xf0i', 'm\xe1nu\xf0um'],
                                y: ['\xe1r', '\xe1r', '\xe1ri'],
                                yy: ['\xe1r', '\xe1r', '\xe1rum'],
                            };
                            function a(e, a, r, x) {
                                var n;
                                return ((n = u[2 === r.length && e % 10 == 1 ? r[0] : r][a ? 0 : x ? 1 : 2]),
                                1 === r.length ? n : '%d ' + n).replace('%d', e);
                            }
                            var r = {
                                name: 'is',
                                weekdays:
                                    'sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur'.split(
                                        '_',
                                    ),
                                months: 'jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember'.split(
                                    '_',
                                ),
                                weekStart: 1,
                                weekdaysShort: 'sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau'.split('_'),
                                monthsShort: 'jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des'.split(
                                    '_',
                                ),
                                weekdaysMin: 'Su_M\xe1_\xder_Mi_Fi_F\xf6_La'.split('_'),
                                ordinal: function (e) {
                                    return e;
                                },
                                formats: {
                                    LT: 'H:mm',
                                    LTS: 'H:mm:ss',
                                    L: 'DD.MM.YYYY',
                                    LL: 'D. MMMM YYYY',
                                    LLL: 'D. MMMM YYYY [kl.] H:mm',
                                    LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
                                },
                                relativeTime: {
                                    future: 'eftir %s',
                                    past: 'fyrir %s s\xed\xf0an',
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
                        })(x.d)));
                });
            let f = Object.freeze(Object.assign(Object.create(null), n, {default: n}));
        },
    },
]);
