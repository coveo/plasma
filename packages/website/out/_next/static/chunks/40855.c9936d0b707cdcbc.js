'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [40855],
    {
        40855: function (e, a, t) {
            (t.r(a),
                t.d(a, {
                    s: function () {
                        return i;
                    },
                }));
            var r = t(87856),
                d = t(30839),
                n = (0, r.c)(function (e, a) {
                    var t, n, i;
                    (r.a,
                        (e.exports =
                            ((t = d.d),
                            (n = {
                                words: {
                                    m: ['jedan minut', 'jednog minuta'],
                                    mm: ['%d minut', '%d minuta', '%d minuta'],
                                    h: ['jedan sat', 'jednog sata'],
                                    hh: ['%d sat', '%d sata', '%d sati'],
                                    d: ['jedan dan', 'jednog dana'],
                                    dd: ['%d dan', '%d dana', '%d dana'],
                                    M: ['jedan mesec', 'jednog meseca'],
                                    MM: ['%d mesec', '%d meseca', '%d meseci'],
                                    y: ['jednu godinu', 'jedne godine'],
                                    yy: ['%d godinu', '%d godine', '%d godina'],
                                },
                                correctGrammarCase: function (e, a) {
                                    return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                                        ? e % 10 == 1
                                            ? a[0]
                                            : a[1]
                                        : a[2];
                                },
                                relativeTimeFormatter: function (e, a, t, r) {
                                    var d = n.words[t];
                                    if (1 === t.length) return 'y' === t && a ? 'jedna godina' : r || a ? d[0] : d[1];
                                    var i = n.correctGrammarCase(e, d);
                                    return 'yy' === t && a && '%d godinu' === i ? e + ' godina' : i.replace('%d', e);
                                },
                            }),
                            (i = {
                                name: 'sr',
                                weekdays: 'Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota'.split('_'),
                                weekdaysShort: 'Ned._Pon._Uto._Sre._Čet._Pet._Sub.'.split('_'),
                                weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
                                months: 'Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar'.split(
                                    '_',
                                ),
                                monthsShort: 'Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.'.split('_'),
                                weekStart: 1,
                                relativeTime: {
                                    future: 'za %s',
                                    past: 'pre %s',
                                    s: 'nekoliko sekundi',
                                    m: n.relativeTimeFormatter,
                                    mm: n.relativeTimeFormatter,
                                    h: n.relativeTimeFormatter,
                                    hh: n.relativeTimeFormatter,
                                    d: n.relativeTimeFormatter,
                                    dd: n.relativeTimeFormatter,
                                    M: n.relativeTimeFormatter,
                                    MM: n.relativeTimeFormatter,
                                    y: n.relativeTimeFormatter,
                                    yy: n.relativeTimeFormatter,
                                },
                                ordinal: function (e) {
                                    return e + '.';
                                },
                                formats: {
                                    LT: 'H:mm',
                                    LTS: 'H:mm:ss',
                                    L: 'D. M. YYYY.',
                                    LL: 'D. MMMM YYYY.',
                                    LLL: 'D. MMMM YYYY. H:mm',
                                    LLLL: 'dddd, D. MMMM YYYY. H:mm',
                                },
                            }),
                            (t && 'object' == typeof t && 'default' in t ? t : {default: t}).default.locale(
                                i,
                                null,
                                !0,
                            ),
                            i)));
                });
            let i = Object.freeze(Object.assign(Object.create(null), n, {default: n}));
        },
    },
]);
