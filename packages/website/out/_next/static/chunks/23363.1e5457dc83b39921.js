'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [23363],
    {
        23363: function (e, t, n) {
            (n.r(t),
                n.d(t, {
                    c: function () {
                        return a;
                    },
                }));
            var r = n(87856),
                s = n(30839),
                d = (0, r.c)(function (e, t) {
                    (r.a,
                        (e.exports = (function (e) {
                            function t(e) {
                                return e > 1 && e < 5 && 1 != ~~(e / 10);
                            }
                            function n(e, n, r, s) {
                                var d = e + ' ';
                                switch (r) {
                                    case 's':
                                        return n || s ? 'p\xe1r sekund' : 'p\xe1r sekundami';
                                    case 'm':
                                        return n ? 'minuta' : s ? 'minutu' : 'minutou';
                                    case 'mm':
                                        return n || s ? d + (t(e) ? 'minuty' : 'minut') : d + 'minutami';
                                    case 'h':
                                        return n ? 'hodina' : s ? 'hodinu' : 'hodinou';
                                    case 'hh':
                                        return n || s ? d + (t(e) ? 'hodiny' : 'hodin') : d + 'hodinami';
                                    case 'd':
                                        return n || s ? 'den' : 'dnem';
                                    case 'dd':
                                        return n || s ? d + (t(e) ? 'dny' : 'dn\xed') : d + 'dny';
                                    case 'M':
                                        return n || s ? 'měs\xedc' : 'měs\xedcem';
                                    case 'MM':
                                        return n || s ? d + (t(e) ? 'měs\xedce' : 'měs\xedců') : d + 'měs\xedci';
                                    case 'y':
                                        return n || s ? 'rok' : 'rokem';
                                    case 'yy':
                                        return n || s ? d + (t(e) ? 'roky' : 'let') : d + 'lety';
                                }
                            }
                            var r = {
                                name: 'cs',
                                weekdays: 'neděle_ponděl\xed_\xfater\xfd_středa_čtvrtek_p\xe1tek_sobota'.split('_'),
                                weekdaysShort: 'ne_po_\xfat_st_čt_p\xe1_so'.split('_'),
                                weekdaysMin: 'ne_po_\xfat_st_čt_p\xe1_so'.split('_'),
                                months: 'leden_\xfanor_březen_duben_květen_červen_červenec_srpen_z\xe1ř\xed_ř\xedjen_listopad_prosinec'.split(
                                    '_',
                                ),
                                monthsShort: 'led_\xfano_bře_dub_kvě_čvn_čvc_srp_z\xe1ř_ř\xedj_lis_pro'.split('_'),
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
                                    past: 'před %s',
                                    s: n,
                                    m: n,
                                    mm: n,
                                    h: n,
                                    hh: n,
                                    d: n,
                                    dd: n,
                                    M: n,
                                    MM: n,
                                    y: n,
                                    yy: n,
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
                        })(s.d)));
                });
            let a = Object.freeze(Object.assign(Object.create(null), d, {default: d}));
        },
    },
]);
