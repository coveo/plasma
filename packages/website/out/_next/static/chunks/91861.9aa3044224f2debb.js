(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        91861, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        13839: function (t, e, n) {
            'use strict';
            (n.r(e),
                n.d(e, {
                    atomic_result_timespan: function () {
                        return d;
                    },
                }));
            var i = n(5991),
                r = n(98214),
                s = n(64977),
                o = n(30839),
                u = n(87856),
                a = n(8807),
                l = n(18043);
            n(66038);
            var c = (0, u.c)(function (t, e) {
                    var n, i, r, s, o, a, l, c, h, d, f, m;
                    (u.a,
                        (t.exports =
                            ((r =
                                /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g),
                            (s =
                                /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/),
                            (o = {
                                years: 31536e6,
                                months: 2592e6,
                                days: 864e5,
                                hours: 36e5,
                                minutes: 6e4,
                                seconds: 1e3,
                                milliseconds: 1,
                                weeks: 6048e5,
                            }),
                            (a = function (t) {
                                return t instanceof m;
                            }),
                            (l = function (t, e, n) {
                                return new m(t, n, e.$l);
                            }),
                            (c = function (t) {
                                return i.p(t) + 's';
                            }),
                            (h = function (t) {
                                return t < 0;
                            }),
                            (d = function (t) {
                                return h(t) ? Math.ceil(t) : Math.floor(t);
                            }),
                            (f = function (t, e) {
                                return t
                                    ? h(t)
                                        ? {negative: !0, format: '' + Math.abs(t) + e}
                                        : {negative: !1, format: '' + t + e}
                                    : {negative: !1, format: ''};
                            }),
                            (m = (function () {
                                function t(t, e, n) {
                                    var i = this;
                                    if (
                                        ((this.$d = {}),
                                        (this.$l = n),
                                        void 0 === t && ((this.$ms = 0), this.parseFromMilliseconds()),
                                        e)
                                    )
                                        return l(t * o[c(e)], this);
                                    if ('number' == typeof t)
                                        return ((this.$ms = t), this.parseFromMilliseconds(), this);
                                    if ('object' == typeof t)
                                        return (
                                            Object.keys(t).forEach(function (e) {
                                                i.$d[c(e)] = t[e];
                                            }),
                                            this.calMilliseconds(),
                                            this
                                        );
                                    if ('string' == typeof t) {
                                        var r = t.match(s);
                                        if (r) {
                                            var u = r.slice(2).map(function (t) {
                                                return null != t ? Number(t) : 0;
                                            });
                                            return (
                                                (this.$d.years = u[0]),
                                                (this.$d.months = u[1]),
                                                (this.$d.weeks = u[2]),
                                                (this.$d.days = u[3]),
                                                (this.$d.hours = u[4]),
                                                (this.$d.minutes = u[5]),
                                                (this.$d.seconds = u[6]),
                                                this.calMilliseconds(),
                                                this
                                            );
                                        }
                                    }
                                    return this;
                                }
                                var e = t.prototype;
                                return (
                                    (e.calMilliseconds = function () {
                                        var t = this;
                                        this.$ms = Object.keys(this.$d).reduce(function (e, n) {
                                            return e + (t.$d[n] || 0) * o[n];
                                        }, 0);
                                    }),
                                    (e.parseFromMilliseconds = function () {
                                        var t = this.$ms;
                                        ((this.$d.years = d(t / 31536e6)),
                                            (t %= 31536e6),
                                            (this.$d.months = d(t / 2592e6)),
                                            (t %= 2592e6),
                                            (this.$d.days = d(t / 864e5)),
                                            (t %= 864e5),
                                            (this.$d.hours = d(t / 36e5)),
                                            (t %= 36e5),
                                            (this.$d.minutes = d(t / 6e4)),
                                            (t %= 6e4),
                                            (this.$d.seconds = d(t / 1e3)),
                                            (t %= 1e3),
                                            (this.$d.milliseconds = t));
                                    }),
                                    (e.toISOString = function () {
                                        var t = f(this.$d.years, 'Y'),
                                            e = f(this.$d.months, 'M'),
                                            n = +this.$d.days || 0;
                                        this.$d.weeks && (n += 7 * this.$d.weeks);
                                        var i = f(n, 'D'),
                                            r = f(this.$d.hours, 'H'),
                                            s = f(this.$d.minutes, 'M'),
                                            o = this.$d.seconds || 0;
                                        this.$d.milliseconds && (o += this.$d.milliseconds / 1e3);
                                        var u = f(o, 'S'),
                                            a =
                                                t.negative ||
                                                e.negative ||
                                                i.negative ||
                                                r.negative ||
                                                s.negative ||
                                                u.negative,
                                            l = r.format || s.format || u.format ? 'T' : '',
                                            c =
                                                (a ? '-' : '') +
                                                'P' +
                                                t.format +
                                                e.format +
                                                i.format +
                                                l +
                                                r.format +
                                                s.format +
                                                u.format;
                                        return 'P' === c || '-P' === c ? 'P0D' : c;
                                    }),
                                    (e.toJSON = function () {
                                        return this.toISOString();
                                    }),
                                    (e.format = function (t) {
                                        var e = {
                                            Y: this.$d.years,
                                            YY: i.s(this.$d.years, 2, '0'),
                                            YYYY: i.s(this.$d.years, 4, '0'),
                                            M: this.$d.months,
                                            MM: i.s(this.$d.months, 2, '0'),
                                            D: this.$d.days,
                                            DD: i.s(this.$d.days, 2, '0'),
                                            H: this.$d.hours,
                                            HH: i.s(this.$d.hours, 2, '0'),
                                            m: this.$d.minutes,
                                            mm: i.s(this.$d.minutes, 2, '0'),
                                            s: this.$d.seconds,
                                            ss: i.s(this.$d.seconds, 2, '0'),
                                            SSS: i.s(this.$d.milliseconds, 3, '0'),
                                        };
                                        return (t || 'YYYY-MM-DDTHH:mm:ss').replace(r, function (t, n) {
                                            return n || String(e[t]);
                                        });
                                    }),
                                    (e.as = function (t) {
                                        return this.$ms / o[c(t)];
                                    }),
                                    (e.get = function (t) {
                                        var e = this.$ms,
                                            n = c(t);
                                        return (
                                            'milliseconds' === n
                                                ? (e %= 1e3)
                                                : (e = 'weeks' === n ? d(e / o[n]) : this.$d[n]),
                                            0 === e ? 0 : e
                                        );
                                    }),
                                    (e.add = function (t, e, n) {
                                        var i;
                                        return (
                                            (i = e ? t * o[c(e)] : a(t) ? t.$ms : l(t, this).$ms),
                                            l(this.$ms + i * (n ? -1 : 1), this)
                                        );
                                    }),
                                    (e.subtract = function (t, e) {
                                        return this.add(t, e, !0);
                                    }),
                                    (e.locale = function (t) {
                                        var e = this.clone();
                                        return ((e.$l = t), e);
                                    }),
                                    (e.clone = function () {
                                        return l(this.$ms, this);
                                    }),
                                    (e.humanize = function (t) {
                                        return n().add(this.$ms, 'ms').locale(this.$l).fromNow(!t);
                                    }),
                                    (e.milliseconds = function () {
                                        return this.get('milliseconds');
                                    }),
                                    (e.asMilliseconds = function () {
                                        return this.as('milliseconds');
                                    }),
                                    (e.seconds = function () {
                                        return this.get('seconds');
                                    }),
                                    (e.asSeconds = function () {
                                        return this.as('seconds');
                                    }),
                                    (e.minutes = function () {
                                        return this.get('minutes');
                                    }),
                                    (e.asMinutes = function () {
                                        return this.as('minutes');
                                    }),
                                    (e.hours = function () {
                                        return this.get('hours');
                                    }),
                                    (e.asHours = function () {
                                        return this.as('hours');
                                    }),
                                    (e.days = function () {
                                        return this.get('days');
                                    }),
                                    (e.asDays = function () {
                                        return this.as('days');
                                    }),
                                    (e.weeks = function () {
                                        return this.get('weeks');
                                    }),
                                    (e.asWeeks = function () {
                                        return this.as('weeks');
                                    }),
                                    (e.months = function () {
                                        return this.get('months');
                                    }),
                                    (e.asMonths = function () {
                                        return this.as('months');
                                    }),
                                    (e.years = function () {
                                        return this.get('years');
                                    }),
                                    (e.asYears = function () {
                                        return this.as('years');
                                    }),
                                    t
                                );
                            })()),
                            function (t, e, r) {
                                ((n = r),
                                    (i = r().$utils()),
                                    (r.duration = function (t, e) {
                                        var n = r.locale();
                                        return l(t, {$l: n}, e);
                                    }),
                                    (r.isDuration = a));
                                var s = e.prototype.add,
                                    o = e.prototype.subtract;
                                ((e.prototype.add = function (t, e) {
                                    return (a(t) && (t = t.asMilliseconds()), s.bind(this)(t, e));
                                }),
                                    (e.prototype.subtract = function (t, e) {
                                        return (a(t) && (t = t.asMilliseconds()), o.bind(this)(t, e));
                                    }));
                            })));
                }),
                h = function (t, e, n, i) {
                    var r,
                        s = arguments.length,
                        o = s < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i;
                    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                        o = Reflect.decorate(t, e, n, i);
                    else
                        for (var u = t.length - 1; u >= 0; u--)
                            (r = t[u]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
                    return (s > 3 && o && Object.defineProperty(e, n, o), o);
                };
            o.d.extend(c);
            let d = class {
                constructor(t) {
                    ((0, i.r)(this, t), (this.unit = 'ms'));
                }
                initialize() {
                    if (
                        (new r.S({field: new r.a({required: !0, emptyAllowed: !1})}).validate({field: this.field}),
                        !this.value)
                    ) {
                        this.error = Error(`No value found for field ${this.field}`);
                        return;
                    }
                    isNaN(this.value) &&
                        (this.error = Error(`Value ${this.value} for field ${this.field} is not a number`));
                }
                render() {
                    let t = o.d.duration(this.value, this.unit);
                    return this.format
                        ? t.format(this.format)
                        : t.asYears() >= 1
                          ? this.bindings.i18n.t('approx_year', {count: Math.round(t.asYears())})
                          : t.asMonths() >= 1
                            ? this.bindings.i18n.t('approx_month', {count: Math.round(t.asMonths())})
                            : t.asDays() >= 1
                              ? this.bindings.i18n.t('approx_day', {count: Math.round(t.asDays())})
                              : t.format('HH:mm:ss');
                }
                get value() {
                    return s.a.getResultProperty(this.result, this.field);
                }
            };
            (h([(0, a.I)()], d.prototype, 'bindings', void 0), h([(0, l.R)()], d.prototype, 'result', void 0));
        },
        98214: function (t, e, n) {
            'use strict';
            n.d(e, {
                B: function () {
                    return l;
                },
                N: function () {
                    return a;
                },
                S: function () {
                    return r;
                },
                a: function () {
                    return h;
                },
                b: function () {
                    return o;
                },
                c: function () {
                    return u;
                },
                i: function () {
                    return d;
                },
            });
            var i = class extends Error {
                    constructor(t) {
                        (super(t), (this.name = 'SchemaValidationError'));
                    }
                },
                r = class {
                    constructor(t) {
                        this.definition = t;
                    }
                    validate(t = {}, e = '') {
                        let n = {...this.default, ...t},
                            r = [];
                        for (let t in this.definition) {
                            let e = this.definition[t].validate(n[t]);
                            e && r.push(`${t}: ${e}`);
                        }
                        if (r.length)
                            throw (
                                /**
                                 * @license
                                 *
                                 * Copyright 2023 Coveo Solutions Inc.
                                 *
                                 * Licensed under the Apache License, Version 2.0 (the "License");
                                 * you may not use this file except in compliance with the License.
                                 * You may obtain a copy of the License at
                                 *
                                 *       http://www.apache.org/licenses/LICENSE-2.0
                                 *
                                 * Unless required by applicable law or agreed to in writing, software
                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                 * See the License for the specific language governing permissions and
                                 * limitations under the License.
                                 */ (function (t, e) {
                                    let n = `
  The following properties are invalid:

    ${t.join('\n	')}
  
  ${e}
  `;
                                    return new i(n);
                                })(r, e)
                            );
                        return n;
                    }
                    get default() {
                        let t = {};
                        for (let e in this.definition) {
                            let n = this.definition[e].default;
                            void 0 !== n && (t[e] = n);
                        }
                        return t;
                    }
                },
                s = class {
                    constructor(t = {}) {
                        this.baseConfig = t;
                    }
                    validate(t) {
                        return this.baseConfig.required && u(t) ? 'value is required.' : null;
                    }
                    get default() {
                        return this.baseConfig.default instanceof Function
                            ? this.baseConfig.default()
                            : this.baseConfig.default;
                    }
                    get required() {
                        return !0 === this.baseConfig.required;
                    }
                };
            function o(t) {
                return void 0 === t;
            }
            function u(t) {
                return o(t) || null === t;
            }
            var a = class {
                    constructor(t = {}) {
                        ((this.config = t), (this.value = new s(t)));
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return (
                            e ||
                            (o(t) || ('number' == typeof t && !isNaN(t))
                                ? t < this.config.min
                                    ? `minimum value of ${this.config.min} not respected.`
                                    : t > this.config.max
                                      ? `maximum value of ${this.config.max} not respected.`
                                      : null
                                : 'value is not a number.')
                        );
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                },
                l = class {
                    constructor(t = {}) {
                        this.value = new s(t);
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return e || (o(t) || 'boolean' == typeof t ? null : 'value is not a boolean.');
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                },
                c =
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
                h = class {
                    constructor(t = {}) {
                        ((this.config = {emptyAllowed: !0, url: !1, ...t}), (this.value = new s(this.config)));
                    }
                    validate(t) {
                        let {emptyAllowed: e, url: n, regex: i, constrainTo: r} = this.config,
                            s = this.value.validate(t);
                        if (s) return s;
                        if (o(t)) return null;
                        if ('[object String]' !== Object.prototype.toString.call(t)) return 'value is not a string.';
                        if (!e && !t.length) return 'value is an empty string.';
                        if (n && !c.test(t)) return 'value is not a valid URL.';
                        if (i && !i.test(t)) return `value did not match provided regex ${i}`;
                        if (r && !r.includes(t)) {
                            let t = r.join(', ');
                            return `value should be one of: ${t}.`;
                        }
                        return null;
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                };
            function d(t) {
                return Array.isArray(t);
            }
        },
        30839: function (t, e, n) {
            'use strict';
            n.d(e, {
                d: function () {
                    return r;
                },
            });
            var i = n(87856),
                r = (0, i.c)(function (t, e) {
                    var n, r, s, o, u, a, l, c, h, d, f, m, $, v, g, p, y, b, M, w, S;
                    (i.a,
                        (t.exports =
                            ((n = 'millisecond'),
                            (r = 'second'),
                            (s = 'minute'),
                            (o = 'hour'),
                            (u = 'week'),
                            (a = 'month'),
                            (l = 'quarter'),
                            (c = 'year'),
                            (h = 'date'),
                            (d = 'Invalid Date'),
                            (f =
                                /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/),
                            (m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g),
                            ($ = function (t, e, n) {
                                var i = String(t);
                                return !i || i.length >= e ? t : '' + Array(e + 1 - i.length).join(n) + t;
                            }),
                            ((g = {})[(v = 'en')] = {
                                name: 'en',
                                weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                                months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                                    '_',
                                ),
                            }),
                            (p = function (t) {
                                return t instanceof w;
                            }),
                            (y = function t(e, n, i) {
                                var r;
                                if (!e) return v;
                                if ('string' == typeof e) {
                                    var s = e.toLowerCase();
                                    (g[s] && (r = s), n && ((g[s] = n), (r = s)));
                                    var o = e.split('-');
                                    if (!r && o.length > 1) return t(o[0]);
                                } else {
                                    var u = e.name;
                                    ((g[u] = e), (r = u));
                                }
                                return (!i && r && (v = r), r || (!i && v));
                            }),
                            (b = function (t, e) {
                                if (p(t)) return t.clone();
                                var n = 'object' == typeof e ? e : {};
                                return ((n.date = t), (n.args = arguments), new w(n));
                            }),
                            ((M = {
                                s: $,
                                z: function (t) {
                                    var e = -t.utcOffset(),
                                        n = Math.abs(e);
                                    return (
                                        (e <= 0 ? '+' : '-') + $(Math.floor(n / 60), 2, '0') + ':' + $(n % 60, 2, '0')
                                    );
                                },
                                m: function t(e, n) {
                                    if (e.date() < n.date()) return -t(n, e);
                                    var i = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                                        r = e.clone().add(i, a),
                                        s = n - r < 0,
                                        o = e.clone().add(i + (s ? -1 : 1), a);
                                    return +(-(i + (n - r) / (s ? r - o : o - r)) || 0);
                                },
                                a: function (t) {
                                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                                },
                                p: function (t) {
                                    return (
                                        {M: a, y: c, w: u, d: 'day', D: h, h: o, m: s, s: r, ms: n, Q: l}[t] ||
                                        String(t || '')
                                            .toLowerCase()
                                            .replace(/s$/, '')
                                    );
                                },
                                u: function (t) {
                                    return void 0 === t;
                                },
                            }).l = y),
                            (M.i = p),
                            (M.w = function (t, e) {
                                return b(t, {locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset});
                            }),
                            (S = (w = (function () {
                                function t(t) {
                                    ((this.$L = y(t.locale, null, !0)), this.parse(t));
                                }
                                var e = t.prototype;
                                return (
                                    (e.parse = function (t) {
                                        ((this.$d = (function (t) {
                                            var e = t.date,
                                                n = t.utc;
                                            if (null === e) return new Date(NaN);
                                            if (M.u(e)) return new Date();
                                            if (e instanceof Date) return new Date(e);
                                            if ('string' == typeof e && !/Z$/i.test(e)) {
                                                var i = e.match(f);
                                                if (i) {
                                                    var r = i[2] - 1 || 0,
                                                        s = (i[7] || '0').substring(0, 3);
                                                    return n
                                                        ? new Date(
                                                              Date.UTC(
                                                                  i[1],
                                                                  r,
                                                                  i[3] || 1,
                                                                  i[4] || 0,
                                                                  i[5] || 0,
                                                                  i[6] || 0,
                                                                  s,
                                                              ),
                                                          )
                                                        : new Date(
                                                              i[1],
                                                              r,
                                                              i[3] || 1,
                                                              i[4] || 0,
                                                              i[5] || 0,
                                                              i[6] || 0,
                                                              s,
                                                          );
                                                }
                                            }
                                            return new Date(e);
                                        })(t)),
                                            (this.$x = t.x || {}),
                                            this.init());
                                    }),
                                    (e.init = function () {
                                        var t = this.$d;
                                        ((this.$y = t.getFullYear()),
                                            (this.$M = t.getMonth()),
                                            (this.$D = t.getDate()),
                                            (this.$W = t.getDay()),
                                            (this.$H = t.getHours()),
                                            (this.$m = t.getMinutes()),
                                            (this.$s = t.getSeconds()),
                                            (this.$ms = t.getMilliseconds()));
                                    }),
                                    (e.$utils = function () {
                                        return M;
                                    }),
                                    (e.isValid = function () {
                                        return this.$d.toString() !== d;
                                    }),
                                    (e.isSame = function (t, e) {
                                        var n = b(t);
                                        return this.startOf(e) <= n && n <= this.endOf(e);
                                    }),
                                    (e.isAfter = function (t, e) {
                                        return b(t) < this.startOf(e);
                                    }),
                                    (e.isBefore = function (t, e) {
                                        return this.endOf(e) < b(t);
                                    }),
                                    (e.$g = function (t, e, n) {
                                        return M.u(t) ? this[e] : this.set(n, t);
                                    }),
                                    (e.unix = function () {
                                        return Math.floor(this.valueOf() / 1e3);
                                    }),
                                    (e.valueOf = function () {
                                        return this.$d.getTime();
                                    }),
                                    (e.startOf = function (t, e) {
                                        var n = this,
                                            i = !!M.u(e) || e,
                                            l = M.p(t),
                                            d = function (t, e) {
                                                var r = M.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                                                return i ? r : r.endOf('day');
                                            },
                                            f = function (t, e) {
                                                return M.w(
                                                    n
                                                        .toDate()
                                                        [
                                                            t
                                                        ].apply(n.toDate('s'), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)),
                                                    n,
                                                );
                                            },
                                            m = this.$W,
                                            $ = this.$M,
                                            v = this.$D,
                                            g = 'set' + (this.$u ? 'UTC' : '');
                                        switch (l) {
                                            case c:
                                                return i ? d(1, 0) : d(31, 11);
                                            case a:
                                                return i ? d(1, $) : d(0, $ + 1);
                                            case u:
                                                var p = this.$locale().weekStart || 0,
                                                    y = (m < p ? m + 7 : m) - p;
                                                return d(i ? v - y : v + (6 - y), $);
                                            case 'day':
                                            case h:
                                                return f(g + 'Hours', 0);
                                            case o:
                                                return f(g + 'Minutes', 1);
                                            case s:
                                                return f(g + 'Seconds', 2);
                                            case r:
                                                return f(g + 'Milliseconds', 3);
                                            default:
                                                return this.clone();
                                        }
                                    }),
                                    (e.endOf = function (t) {
                                        return this.startOf(t, !1);
                                    }),
                                    (e.$set = function (t, e) {
                                        var i,
                                            u = M.p(t),
                                            l = 'set' + (this.$u ? 'UTC' : ''),
                                            d = (((i = {}).day = l + 'Date'),
                                            (i[h] = l + 'Date'),
                                            (i[a] = l + 'Month'),
                                            (i[c] = l + 'FullYear'),
                                            (i[o] = l + 'Hours'),
                                            (i[s] = l + 'Minutes'),
                                            (i[r] = l + 'Seconds'),
                                            (i[n] = l + 'Milliseconds'),
                                            i)[u],
                                            f = 'day' === u ? this.$D + (e - this.$W) : e;
                                        if (u === a || u === c) {
                                            var m = this.clone().set(h, 1);
                                            (m.$d[d](f),
                                                m.init(),
                                                (this.$d = m.set(h, Math.min(this.$D, m.daysInMonth())).$d));
                                        } else d && this.$d[d](f);
                                        return (this.init(), this);
                                    }),
                                    (e.set = function (t, e) {
                                        return this.clone().$set(t, e);
                                    }),
                                    (e.get = function (t) {
                                        return this[M.p(t)]();
                                    }),
                                    (e.add = function (t, e) {
                                        var n,
                                            i = this;
                                        t = Number(t);
                                        var l = M.p(e),
                                            h = function (e) {
                                                var n = b(i);
                                                return M.w(n.date(n.date() + Math.round(e * t)), i);
                                            };
                                        if (l === a) return this.set(a, this.$M + t);
                                        if (l === c) return this.set(c, this.$y + t);
                                        if ('day' === l) return h(1);
                                        if (l === u) return h(7);
                                        var d = (((n = {})[s] = 6e4), (n[o] = 36e5), (n[r] = 1e3), n)[l] || 1,
                                            f = this.$d.getTime() + t * d;
                                        return M.w(f, this);
                                    }),
                                    (e.subtract = function (t, e) {
                                        return this.add(-1 * t, e);
                                    }),
                                    (e.format = function (t) {
                                        var e = this,
                                            n = this.$locale();
                                        if (!this.isValid()) return n.invalidDate || d;
                                        var i = t || 'YYYY-MM-DDTHH:mm:ssZ',
                                            r = M.z(this),
                                            s = this.$H,
                                            o = this.$m,
                                            u = this.$M,
                                            a = n.weekdays,
                                            l = n.months,
                                            c = function (t, n, r, s) {
                                                return (t && (t[n] || t(e, i))) || r[n].slice(0, s);
                                            },
                                            h = function (t) {
                                                return M.s(s % 12 || 12, t, '0');
                                            },
                                            f =
                                                n.meridiem ||
                                                function (t, e, n) {
                                                    var i = t < 12 ? 'AM' : 'PM';
                                                    return n ? i.toLowerCase() : i;
                                                },
                                            $ = {
                                                YY: String(this.$y).slice(-2),
                                                YYYY: this.$y,
                                                M: u + 1,
                                                MM: M.s(u + 1, 2, '0'),
                                                MMM: c(n.monthsShort, u, l, 3),
                                                MMMM: c(l, u),
                                                D: this.$D,
                                                DD: M.s(this.$D, 2, '0'),
                                                d: String(this.$W),
                                                dd: c(n.weekdaysMin, this.$W, a, 2),
                                                ddd: c(n.weekdaysShort, this.$W, a, 3),
                                                dddd: a[this.$W],
                                                H: String(s),
                                                HH: M.s(s, 2, '0'),
                                                h: h(1),
                                                hh: h(2),
                                                a: f(s, o, !0),
                                                A: f(s, o, !1),
                                                m: String(o),
                                                mm: M.s(o, 2, '0'),
                                                s: String(this.$s),
                                                ss: M.s(this.$s, 2, '0'),
                                                SSS: M.s(this.$ms, 3, '0'),
                                                Z: r,
                                            };
                                        return i.replace(m, function (t, e) {
                                            return e || $[t] || r.replace(':', '');
                                        });
                                    }),
                                    (e.utcOffset = function () {
                                        return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
                                    }),
                                    (e.diff = function (t, e, n) {
                                        var i,
                                            h = M.p(e),
                                            d = b(t),
                                            f = (d.utcOffset() - this.utcOffset()) * 6e4,
                                            m = this - d,
                                            $ = M.m(this, d);
                                        return (
                                            ($ =
                                                (((i = {})[c] = $ / 12),
                                                (i[a] = $),
                                                (i[l] = $ / 3),
                                                (i[u] = (m - f) / 6048e5),
                                                (i.day = (m - f) / 864e5),
                                                (i[o] = m / 36e5),
                                                (i[s] = m / 6e4),
                                                (i[r] = m / 1e3),
                                                i)[h] || m),
                                            n ? $ : M.a($)
                                        );
                                    }),
                                    (e.daysInMonth = function () {
                                        return this.endOf(a).$D;
                                    }),
                                    (e.$locale = function () {
                                        return g[this.$L];
                                    }),
                                    (e.locale = function (t, e) {
                                        if (!t) return this.$L;
                                        var n = this.clone(),
                                            i = y(t, e, !0);
                                        return (i && (n.$L = i), n);
                                    }),
                                    (e.clone = function () {
                                        return M.w(this.$d, this);
                                    }),
                                    (e.toDate = function () {
                                        return new Date(this.valueOf());
                                    }),
                                    (e.toJSON = function () {
                                        return this.isValid() ? this.toISOString() : null;
                                    }),
                                    (e.toISOString = function () {
                                        return this.$d.toISOString();
                                    }),
                                    (e.toString = function () {
                                        return this.$d.toUTCString();
                                    }),
                                    t
                                );
                            })()).prototype),
                            (b.prototype = S),
                            [
                                ['$ms', n],
                                ['$s', r],
                                ['$m', s],
                                ['$H', o],
                                ['$W', 'day'],
                                ['$M', a],
                                ['$y', c],
                                ['$D', h],
                            ].forEach(function (t) {
                                S[t[1]] = function (e) {
                                    return this.$g(e, t[0], t[1]);
                                };
                            }),
                            (b.extend = function (t, e) {
                                return (t.$i || (t(e, w, b), (t.$i = !0)), b);
                            }),
                            (b.locale = y),
                            (b.isDayjs = p),
                            (b.unix = function (t) {
                                return b(1e3 * t);
                            }),
                            (b.en = g[v]),
                            (b.Ls = g),
                            (b.p = {}),
                            b)));
                });
        },
        75291: function (t, e, n) {
            'use strict';
            function i(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function r(t, e, n, i) {
                let r = (s) => {
                    (t.removeEventListener(e, r, i), 'object' == typeof n ? n.handleEvent.call(t, s) : n.call(t, s));
                };
                t.addEventListener(e, r, i);
            }
            n.d(e, {
                b: function () {
                    return i;
                },
                l: function () {
                    return r;
                },
            });
        },
        8807: function (t, e, n) {
            'use strict';
            n.d(e, {
                B: function () {
                    return m;
                },
                H: function () {
                    return o;
                },
                I: function () {
                    return f;
                },
                a: function () {
                    return u;
                },
                b: function () {
                    return c;
                },
            });
            var i = n(5991),
                r = n(75291),
                s = n(66038);
            let o = () => (0, i.h)(i.H, {class: 'atomic-hidden'}),
                u = 'atomic/initializeComponent',
                a = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class l extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of the following elements: ${a.join(', ')}`);
                }
            }
            function c(t) {
                if (t.shadowRoot) {
                    if (window.applyFocusVisiblePolyfill) {
                        window.applyFocusVisiblePolyfill(t.shadowRoot);
                        return;
                    }
                    window.addEventListener(
                        'focus-visible-polyfill-ready',
                        () => {
                            var e;
                            return null === (e = window.applyFocusVisiblePolyfill) || void 0 === e
                                ? void 0
                                : e.call(window, t.shadowRoot);
                        },
                        {once: !0},
                    );
                }
            }
            let h = 'data-atomic-rendered',
                d = 'data-atomic-loaded';
            function f({forceUpdate: t} = {}) {
                return (e, n) => {
                    let {
                            componentWillLoad: f,
                            render: m,
                            componentDidRender: $,
                            componentDidLoad: v,
                            disconnectedCallback: g,
                        } = e,
                        p = () => {};
                    if ('bindings' !== n)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${n}"`,
                            e,
                        );
                    ((e.componentWillLoad = function () {
                        let e = (0, i.g)(this);
                        (e.setAttribute(h, 'false'), e.setAttribute(d, 'false'));
                        let n = (0, r.b)(u, (e) => {
                            this.bindings = e;
                            let n = () => (0, i.f)(this);
                            (this.bindings.i18n.on('languageChanged', n),
                                (p = () => this.bindings.i18n.off('languageChanged', n)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, i.f)(this)) : (0, i.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((e.dispatchEvent(n), !(0, s.c)(e, a.join(', ')))) {
                            this.error = new l(e.nodeName.toLowerCase());
                            return;
                        }
                        return f && f.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(h, 'true'), m && m.call(this))
                                  : (0, i.h)(o, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, i.g)(this);
                            (t.setAttribute(h, 'false'), t.setAttribute(d, 'false'), p(), g && g.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, i.g)(this);
                            'false' !== t.getAttribute(h) &&
                                ($ && $.call(this),
                                'false' === t.getAttribute(d) &&
                                    (t.setAttribute(d, 'true'), c((0, i.g)(this)), v && v.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function m(t, e) {
                return (n, r) => {
                    let {disconnectedCallback: s, initialize: o} = n;
                    ((n.initialize = function () {
                        return (o && o.call(this), o)
                            ? this[t]
                                ? (null == e ? void 0 : e.onUpdateCallbackMethod) && !this[e.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${e.onUpdateCallbackMethod}" is not defined`,
                                          n,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[r] = this[t].state),
                                              (null == e ? void 0 : e.onUpdateCallbackMethod) &&
                                                  this[e.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${t}`,
                                  n,
                              );
                    }),
                        (n.disconnectedCallback = function () {
                            var t;
                            ((0, i.g)(this).isConnected ||
                                null === (t = this.unsubscribeController) ||
                                void 0 === t ||
                                t.call(this),
                                s && s.call(this));
                        }));
                };
            }
        },
        18043: function (t, e, n) {
            'use strict';
            n.d(e, {
                C: function () {
                    return h;
                },
                I: function () {
                    return u;
                },
                R: function () {
                    return o;
                },
                a: function () {
                    return d;
                },
            });
            var i = n(5991),
                r = n(75291);
            n(66038);
            class s extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of an "atomic-result" element.`);
                }
            }
            function o(t = {folded: !1}) {
                return (e, n) => {
                    let {connectedCallback: o, componentWillRender: u, render: l} = e;
                    ((e.connectedCallback = function () {
                        let e = (0, i.g)(this),
                            u = (0, r.b)(a, (e) => {
                                t.folded
                                    ? c(e)
                                        ? (this[n] = e)
                                        : (this[n] = {children: [], result: e})
                                    : (this[n] = c(e) ? e.result : e);
                            }),
                            l = e.dispatchEvent(u);
                        if (l) {
                            this.error = new s(e.nodeName.toLowerCase());
                            return;
                        }
                        return o && o.call(this);
                    }),
                        (e.componentWillRender = function () {
                            if (!this.error) return u && u.call(this);
                        }),
                        (e.render = function () {
                            if (this.error) {
                                let t = (0, i.g)(this);
                                (t.remove(),
                                    console.error(
                                        'Result component is in error and has been removed from the DOM',
                                        this.error,
                                        this,
                                        t,
                                    ));
                                return;
                            }
                            return l && l.call(this);
                        }));
                };
            }
            function u() {
                return (t, e) => {
                    let {connectedCallback: n} = t;
                    t.connectedCallback = function () {
                        let t = (0, i.g)(this),
                            s = (0, r.b)(l, (t) => {
                                this[e] = t;
                            });
                        return (t.dispatchEvent(s), n && n.call(this));
                    };
                };
            }
            let a = 'atomic/resolveResult',
                l = 'atomic/resolveInteractiveResult';
            function c(t) {
                return 'children' in t;
            }
            function h() {
                return (t, e) => {
                    let {componentWillRender: n} = t;
                    t.componentWillRender = function () {
                        let t = (0, i.g)(this),
                            s = (0, r.b)('atomic/resolveChildTemplates', (t) => {
                                this.resultTemplateProvider || (this[e] = t);
                            }),
                            o = t.dispatchEvent(s);
                        if (o) {
                            this[e] = null;
                            return;
                        }
                        return n && n.call(this);
                    };
                };
            }
            function d() {
                return (t, e) => {
                    let {componentWillRender: n} = t;
                    t.componentWillRender = function () {
                        let t = (0, i.g)(this),
                            s = (0, r.b)('atomic/resolveResultDisplayConfig', (t) => {
                                this[e] = t;
                            }),
                            o = t.dispatchEvent(s);
                        if (!o) return n && n.call(this);
                    };
                };
            }
        },
        22029: function (t) {
            function e(t) {
                var e = Error("Cannot find module '" + t + "'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
            }
            ((e.keys = function () {
                return [];
            }),
                (e.resolve = e),
                (e.id = 22029),
                (t.exports = e));
        },
    },
]);
