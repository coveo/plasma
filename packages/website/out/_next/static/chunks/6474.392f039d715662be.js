'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6474],
    {
        6474: function (e, u, t) {
            (t.r(u),
                t.d(u, {
                    f: function () {
                        return _;
                    },
                }));
            var n = t(87856),
                a = t(30839),
                i = (0, n.c)(function (e, u) {
                    (n.a,
                        (e.exports = (function (e) {
                            function u(e, u, t, n) {
                                var a =
                                        n && !u
                                            ? {
                                                  s: 'muutaman sekunnin',
                                                  m: 'minuutin',
                                                  mm: '%d minuutin',
                                                  h: 'tunnin',
                                                  hh: '%d tunnin',
                                                  d: 'p\xe4iv\xe4n',
                                                  dd: '%d p\xe4iv\xe4n',
                                                  M: 'kuukauden',
                                                  MM: '%d kuukauden',
                                                  y: 'vuoden',
                                                  yy: '%d vuoden',
                                                  numbers:
                                                      'nollan_yhden_kahden_kolmen_nelj\xe4n_viiden_kuuden_seitsem\xe4n_kahdeksan_yhdeks\xe4n'.split(
                                                          '_',
                                                      ),
                                              }
                                            : {
                                                  s: 'muutama sekunti',
                                                  m: 'minuutti',
                                                  mm: '%d minuuttia',
                                                  h: 'tunti',
                                                  hh: '%d tuntia',
                                                  d: 'p\xe4iv\xe4',
                                                  dd: '%d p\xe4iv\xe4\xe4',
                                                  M: 'kuukausi',
                                                  MM: '%d kuukautta',
                                                  y: 'vuosi',
                                                  yy: '%d vuotta',
                                                  numbers:
                                                      'nolla_yksi_kaksi_kolme_nelj\xe4_viisi_kuusi_seitsem\xe4n_kahdeksan_yhdeks\xe4n'.split(
                                                          '_',
                                                      ),
                                              },
                                    i = a[t];
                                return e < 10 ? i.replace('%d', a.numbers[e]) : i.replace('%d', e);
                            }
                            var t = {
                                name: 'fi',
                                weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split(
                                    '_',
                                ),
                                weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
                                weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
                                months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split(
                                    '_',
                                ),
                                monthsShort:
                                    'tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu'.split(
                                        '_',
                                    ),
                                ordinal: function (e) {
                                    return e + '.';
                                },
                                weekStart: 1,
                                yearStart: 4,
                                relativeTime: {
                                    future: '%s p\xe4\xe4st\xe4',
                                    past: '%s sitten',
                                    s: u,
                                    m: u,
                                    mm: u,
                                    h: u,
                                    hh: u,
                                    d: u,
                                    dd: u,
                                    M: u,
                                    MM: u,
                                    y: u,
                                    yy: u,
                                },
                                formats: {
                                    LT: 'HH.mm',
                                    LTS: 'HH.mm.ss',
                                    L: 'DD.MM.YYYY',
                                    LL: 'D. MMMM[ta] YYYY',
                                    LLL: 'D. MMMM[ta] YYYY, [klo] HH.mm',
                                    LLLL: 'dddd, D. MMMM[ta] YYYY, [klo] HH.mm',
                                    l: 'D.M.YYYY',
                                    ll: 'D. MMM YYYY',
                                    lll: 'D. MMM YYYY, [klo] HH.mm',
                                    llll: 'ddd, D. MMM YYYY, [klo] HH.mm',
                                },
                            };
                            return (
                                (e && 'object' == typeof e && 'default' in e ? e : {default: e}).default.locale(
                                    t,
                                    null,
                                    !0,
                                ),
                                t
                            );
                        })(a.d)));
                });
            let _ = Object.freeze(Object.assign(Object.create(null), i, {default: i}));
        },
    },
]);
