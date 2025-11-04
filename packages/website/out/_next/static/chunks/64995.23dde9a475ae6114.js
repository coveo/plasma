'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [64995],
    {
        64995: function (_, e, t) {
            (t.r(e),
                t.d(e, {
                    b: function () {
                        return n;
                    },
                }));
            var s = t(87856),
                a = t(30839),
                d = (0, s.c)(function (_, e) {
                    var t, d;
                    (s.a,
                        (_.exports =
                            ((t = a.d),
                            (d = {
                                name: 'bg',
                                weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
                                weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
                                weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
                                months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split(
                                    '_',
                                ),
                                monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
                                weekStart: 1,
                                ordinal: function (_) {
                                    var e = _ % 100;
                                    if (e > 10 && e < 20) return _ + '-ти';
                                    var t = _ % 10;
                                    return 1 === t
                                        ? _ + '-ви'
                                        : 2 === t
                                          ? _ + '-ри'
                                          : 7 === t || 8 === t
                                            ? _ + '-ми'
                                            : _ + '-ти';
                                },
                                formats: {
                                    LT: 'H:mm',
                                    LTS: 'H:mm:ss',
                                    L: 'D.MM.YYYY',
                                    LL: 'D MMMM YYYY',
                                    LLL: 'D MMMM YYYY H:mm',
                                    LLLL: 'dddd, D MMMM YYYY H:mm',
                                },
                                relativeTime: {
                                    future: 'след %s',
                                    past: 'преди %s',
                                    s: 'няколко секунди',
                                    m: 'минута',
                                    mm: '%d минути',
                                    h: 'час',
                                    hh: '%d часа',
                                    d: 'ден',
                                    dd: '%d дена',
                                    M: 'месец',
                                    MM: '%d месеца',
                                    y: 'година',
                                    yy: '%d години',
                                },
                            }),
                            (t && 'object' == typeof t && 'default' in t ? t : {default: t}).default.locale(
                                d,
                                null,
                                !0,
                            ),
                            d)));
                });
            let n = Object.freeze(Object.assign(Object.create(null), d, {default: d}));
        },
    },
]);
