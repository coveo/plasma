'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15354],
    {
        15354: function (e, t, r) {
            (r.r(t),
                r.d(t, {
                    s: function () {
                        return i;
                    },
                }));
            var a = r(87856),
                _ = r(30839),
                m = (0, a.c)(function (e, t) {
                    var r, m, i;
                    (a.a,
                        (e.exports =
                            ((r = _.d),
                            (m = {
                                words: {
                                    m: ['један минут', 'једног минута'],
                                    mm: ['%d минут', '%d минута', '%d минута'],
                                    h: ['један сат', 'једног сата'],
                                    hh: ['%d сат', '%d сата', '%d сати'],
                                    d: ['један дан', 'једног дана'],
                                    dd: ['%d дан', '%d дана', '%d дана'],
                                    M: ['један месец', 'једног месеца'],
                                    MM: ['%d месец', '%d месеца', '%d месеци'],
                                    y: ['једну годину', 'једне године'],
                                    yy: ['%d годину', '%d године', '%d година'],
                                },
                                correctGrammarCase: function (e, t) {
                                    return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                                        ? e % 10 == 1
                                            ? t[0]
                                            : t[1]
                                        : t[2];
                                },
                                relativeTimeFormatter: function (e, t, r, a) {
                                    var _ = m.words[r];
                                    if (1 === r.length) return 'y' === r && t ? 'једна година' : a || t ? _[0] : _[1];
                                    var i = m.correctGrammarCase(e, _);
                                    return 'yy' === r && t && '%d годину' === i ? e + ' година' : i.replace('%d', e);
                                },
                            }),
                            (i = {
                                name: 'sr-cyrl',
                                weekdays: 'Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота'.split('_'),
                                weekdaysShort: 'Нед._Пон._Уто._Сре._Чет._Пет._Суб.'.split('_'),
                                weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
                                months: 'Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар'.split(
                                    '_',
                                ),
                                monthsShort: 'Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.'.split('_'),
                                weekStart: 1,
                                relativeTime: {
                                    future: 'за %s',
                                    past: 'пре %s',
                                    s: 'неколико секунди',
                                    m: m.relativeTimeFormatter,
                                    mm: m.relativeTimeFormatter,
                                    h: m.relativeTimeFormatter,
                                    hh: m.relativeTimeFormatter,
                                    d: m.relativeTimeFormatter,
                                    dd: m.relativeTimeFormatter,
                                    M: m.relativeTimeFormatter,
                                    MM: m.relativeTimeFormatter,
                                    y: m.relativeTimeFormatter,
                                    yy: m.relativeTimeFormatter,
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
                            (r && 'object' == typeof r && 'default' in r ? r : {default: r}).default.locale(
                                i,
                                null,
                                !0,
                            ),
                            i)));
                });
            let i = Object.freeze(Object.assign(Object.create(null), m, {default: m}));
        },
    },
]);
