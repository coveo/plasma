'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [49652],
    {
        49652: function (_, t, e) {
            (e.r(t),
                e.d(t, {
                    r: function () {
                        return u;
                    },
                }));
            var n = e(87856),
                r = e(30839),
                s = (0, n.c)(function (_, t) {
                    (n.a,
                        (_.exports = (function (_) {
                            var t =
                                    'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
                                        '_',
                                    ),
                                e =
                                    'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
                                        '_',
                                    ),
                                n = 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
                                r = 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_'),
                                s = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
                            function u(_, t, e) {
                                var n, r;
                                return 'm' === e
                                    ? t
                                        ? 'минута'
                                        : 'минуту'
                                    : _ +
                                          ' ' +
                                          ((n = +_),
                                          (r = {
                                              mm: t ? 'минута_минуты_минут' : 'минуту_минуты_минут',
                                              hh: 'час_часа_часов',
                                              dd: 'день_дня_дней',
                                              MM: 'месяц_месяца_месяцев',
                                              yy: 'год_года_лет',
                                          }[e].split('_')),
                                          n % 10 == 1 && n % 100 != 11
                                              ? r[0]
                                              : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
                                                ? r[1]
                                                : r[2]);
                            }
                            var a = function (_, n) {
                                return s.test(n) ? t[_.month()] : e[_.month()];
                            };
                            ((a.s = e), (a.f = t));
                            var i = function (_, t) {
                                return s.test(t) ? n[_.month()] : r[_.month()];
                            };
                            ((i.s = r), (i.f = n));
                            var m = {
                                name: 'ru',
                                weekdays: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
                                weekdaysShort: 'вск_пнд_втр_срд_чтв_птн_сбт'.split('_'),
                                weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
                                months: a,
                                monthsShort: i,
                                weekStart: 1,
                                yearStart: 4,
                                formats: {
                                    LT: 'H:mm',
                                    LTS: 'H:mm:ss',
                                    L: 'DD.MM.YYYY',
                                    LL: 'D MMMM YYYY г.',
                                    LLL: 'D MMMM YYYY г., H:mm',
                                    LLLL: 'dddd, D MMMM YYYY г., H:mm',
                                },
                                relativeTime: {
                                    future: 'через %s',
                                    past: '%s назад',
                                    s: 'несколько секунд',
                                    m: u,
                                    mm: u,
                                    h: 'час',
                                    hh: u,
                                    d: 'день',
                                    dd: u,
                                    M: 'месяц',
                                    MM: u,
                                    y: 'год',
                                    yy: u,
                                },
                                ordinal: function (_) {
                                    return _;
                                },
                                meridiem: function (_) {
                                    return _ < 4 ? 'ночи' : _ < 12 ? 'утра' : _ < 17 ? 'дня' : 'вечера';
                                },
                            };
                            return (
                                (_ && 'object' == typeof _ && 'default' in _ ? _ : {default: _}).default.locale(
                                    m,
                                    null,
                                    !0,
                                ),
                                m
                            );
                        })(r.d)));
                });
            let u = Object.freeze(Object.assign(Object.create(null), s, {default: s}));
        },
    },
]);
