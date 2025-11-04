'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [80007],
    {
        80007: function (_, t, e) {
            (e.r(t),
                e.d(t, {
                    u: function () {
                        return u;
                    },
                }));
            var n = e(87856),
                s = e(30839),
                r = (0, n.c)(function (_, t) {
                    (n.a,
                        (_.exports = (function (_) {
                            var t =
                                    'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split(
                                        '_',
                                    ),
                                e =
                                    'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split(
                                        '_',
                                    ),
                                n = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
                            function s(_, t, e) {
                                var n, s;
                                return 'm' === e
                                    ? t
                                        ? 'хвилина'
                                        : 'хвилину'
                                    : 'h' === e
                                      ? t
                                          ? 'година'
                                          : 'годину'
                                      : _ +
                                        ' ' +
                                        ((n = +_),
                                        (s = {
                                            ss: t ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
                                            mm: t ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
                                            hh: t ? 'година_години_годин' : 'годину_години_годин',
                                            dd: 'день_дні_днів',
                                            MM: 'місяць_місяці_місяців',
                                            yy: 'рік_роки_років',
                                        }[e].split('_')),
                                        n % 10 == 1 && n % 100 != 11
                                            ? s[0]
                                            : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
                                              ? s[1]
                                              : s[2]);
                            }
                            var r = function (_, s) {
                                return n.test(s) ? t[_.month()] : e[_.month()];
                            };
                            ((r.s = e), (r.f = t));
                            var u = {
                                name: 'uk',
                                weekdays: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
                                weekdaysShort: 'ндл_пнд_втр_срд_чтв_птн_сбт'.split('_'),
                                weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
                                months: r,
                                monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
                                weekStart: 1,
                                relativeTime: {
                                    future: 'за %s',
                                    past: '%s тому',
                                    s: 'декілька секунд',
                                    m: s,
                                    mm: s,
                                    h: s,
                                    hh: s,
                                    d: 'день',
                                    dd: s,
                                    M: 'місяць',
                                    MM: s,
                                    y: 'рік',
                                    yy: s,
                                },
                                ordinal: function (_) {
                                    return _;
                                },
                                formats: {
                                    LT: 'HH:mm',
                                    LTS: 'HH:mm:ss',
                                    L: 'DD.MM.YYYY',
                                    LL: 'D MMMM YYYY р.',
                                    LLL: 'D MMMM YYYY р., HH:mm',
                                    LLLL: 'dddd, D MMMM YYYY р., HH:mm',
                                },
                            };
                            return (
                                (_ && 'object' == typeof _ && 'default' in _ ? _ : {default: _}).default.locale(
                                    u,
                                    null,
                                    !0,
                                ),
                                u
                            );
                        })(s.d)));
                });
            let u = Object.freeze(Object.assign(Object.create(null), r, {default: r}));
        },
    },
]);
