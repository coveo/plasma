'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [80839],
    {
        80421: function (e, t, n) {
            n.d(t, {
                A: function () {
                    return i;
                },
                F: function () {
                    return a;
                },
                g: function () {
                    return l;
                },
            });
            var s = n(75291),
                r = n(66038);
            function i(e, t = !1) {
                function n() {
                    let e = (0, s.b)('atomic/accessibility/findAriaLive', {});
                    document.dispatchEvent(e);
                    let {element: t} = e.detail;
                    return t;
                }
                return (s, r) => {
                    let {componentWillRender: i} = s;
                    (Object.defineProperty(s, r, {
                        set: (s) => {
                            var r;
                            null === (r = n()) || void 0 === r || r.updateMessage(e, s, t);
                        },
                    }),
                        (s.componentWillRender = function () {
                            var s;
                            (i && i.call(this), null === (s = n()) || void 0 === s || s.registerRegion(e, t));
                        }));
                };
            }
            function a() {
                return (e, t) => {
                    let {componentWillLoad: n} = e;
                    e.componentWillLoad = function () {
                        let e, s;
                        n && n.call(this);
                        let {componentDidRender: i} = this,
                            a = !1,
                            l = !1,
                            u = null;
                        this.componentDidRender = function () {
                            if (
                                (i && i.call(this),
                                this.bindings &&
                                    a &&
                                    this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== e &&
                                    ((a = !1), s))
                            ) {
                                let e = s;
                                (0, r.d)().then(() => {
                                    (e.focus(), null == u || u());
                                });
                            }
                        };
                        let o = {
                            setTarget: (e) => {
                                e && ((s = e), l && ((l = !1), o.focus()));
                            },
                            focus: async () => {
                                (await (0, r.d)(), null == s || s.focus(), null == u || u());
                            },
                            focusAfterSearch: () => (
                                (e = this.bindings.store.getUniqueIDFromEngine(this.bindings.engine)),
                                (a = !0),
                                new Promise((e) => (u = e))
                            ),
                            focusOnNextTarget: () => ((l = !0), new Promise((e) => (u = e))),
                            disableForCurrentSearch: () =>
                                this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== e && (a = !1),
                        };
                        this[t] = o;
                    };
                };
            }
            function l(e) {
                var t;
                return null !==
                    (t = (function* e(t) {
                        (function (e) {
                            if ('-1' === e.getAttribute('tabindex')) return !1;
                            if (e.hasAttribute('tabindex') || 'true' === e.getAttribute('contentEditable')) return !0;
                            switch (e.tagName) {
                                case 'A':
                                case 'AREA':
                                    return e.hasAttribute('href');
                                case 'INPUT':
                                case 'SELECT':
                                case 'TEXTAREA':
                                case 'BUTTON':
                                    return !e.hasAttribute('disabled');
                                case 'IFRAME':
                                    return !0;
                                default:
                                    return !1;
                            }
                        })(t) && (yield t);
                        let n = Array.from(t.children);
                        for (let s of (t instanceof HTMLSlotElement
                            ? (n = t.assignedElements())
                            : t.shadowRoot && n.push(...Array.from(t.shadowRoot.children)),
                        n))
                            yield* e(s);
                    })(e).next().value) && void 0 !== t
                    ? t
                    : null;
            }
        },
        65146: function (e, t, n) {
            n.d(t, {
                p: function () {
                    return l;
                },
            });
            var s = n(64977),
                r = n(30839),
                i = n(87856),
                a = (0, i.c)(function (e, t) {
                    var n, s, r, a, l, u, o, h, c, d, f, p;
                    (i.a,
                        (e.exports =
                            ((n = {
                                LTS: 'h:mm:ss A',
                                LT: 'h:mm A',
                                L: 'MM/DD/YYYY',
                                LL: 'MMMM D, YYYY',
                                LLL: 'MMMM D, YYYY h:mm A',
                                LLLL: 'dddd, MMMM D, YYYY h:mm A',
                            }),
                            (s =
                                /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g),
                            (r = /\d\d/),
                            (a = /\d\d?/),
                            (l = /\d*[^-_:/,()\s\d]+/),
                            (u = {}),
                            (o = function (e) {
                                return (e = +e) + (e > 68 ? 1900 : 2e3);
                            }),
                            (h = function (e) {
                                return function (t) {
                                    this[e] = +t;
                                };
                            }),
                            (c = [
                                /[+-]\d\d:?(\d\d)?|Z/,
                                function (e) {
                                    (this.zone || (this.zone = {})).offset = (function (e) {
                                        if (!e || 'Z' === e) return 0;
                                        var t = e.match(/([+-]|\d\d)/g),
                                            n = 60 * t[1] + (+t[2] || 0);
                                        return 0 === n ? 0 : '+' === t[0] ? -n : n;
                                    })(e);
                                },
                            ]),
                            (d = function (e) {
                                var t = u[e];
                                return t && (t.indexOf ? t : t.s.concat(t.f));
                            }),
                            (f = function (e, t) {
                                var n,
                                    s = u.meridiem;
                                if (s) {
                                    for (var r = 1; r <= 24; r += 1)
                                        if (e.indexOf(s(r, 0, t)) > -1) {
                                            n = r > 12;
                                            break;
                                        }
                                } else n = e === (t ? 'pm' : 'PM');
                                return n;
                            }),
                            (p = {
                                A: [
                                    l,
                                    function (e) {
                                        this.afternoon = f(e, !1);
                                    },
                                ],
                                a: [
                                    l,
                                    function (e) {
                                        this.afternoon = f(e, !0);
                                    },
                                ],
                                S: [
                                    /\d/,
                                    function (e) {
                                        this.milliseconds = 100 * +e;
                                    },
                                ],
                                SS: [
                                    r,
                                    function (e) {
                                        this.milliseconds = 10 * +e;
                                    },
                                ],
                                SSS: [
                                    /\d{3}/,
                                    function (e) {
                                        this.milliseconds = +e;
                                    },
                                ],
                                s: [a, h('seconds')],
                                ss: [a, h('seconds')],
                                m: [a, h('minutes')],
                                mm: [a, h('minutes')],
                                H: [a, h('hours')],
                                h: [a, h('hours')],
                                HH: [a, h('hours')],
                                hh: [a, h('hours')],
                                D: [a, h('day')],
                                DD: [r, h('day')],
                                Do: [
                                    l,
                                    function (e) {
                                        var t = u.ordinal;
                                        if (((this.day = e.match(/\d+/)[0]), t))
                                            for (var n = 1; n <= 31; n += 1)
                                                t(n).replace(/\[|\]/g, '') === e && (this.day = n);
                                    },
                                ],
                                M: [a, h('month')],
                                MM: [r, h('month')],
                                MMM: [
                                    l,
                                    function (e) {
                                        var t = d('months'),
                                            n =
                                                (
                                                    d('monthsShort') ||
                                                    t.map(function (e) {
                                                        return e.slice(0, 3);
                                                    })
                                                ).indexOf(e) + 1;
                                        if (n < 1) throw Error();
                                        this.month = n % 12 || n;
                                    },
                                ],
                                MMMM: [
                                    l,
                                    function (e) {
                                        var t = d('months').indexOf(e) + 1;
                                        if (t < 1) throw Error();
                                        this.month = t % 12 || t;
                                    },
                                ],
                                Y: [/[+-]?\d+/, h('year')],
                                YY: [
                                    r,
                                    function (e) {
                                        this.year = o(e);
                                    },
                                ],
                                YYYY: [/\d{4}/, h('year')],
                                Z: c,
                                ZZ: c,
                            }),
                            function (e, t, r) {
                                ((r.p.customParseFormat = !0), e && e.parseTwoDigitYear && (o = e.parseTwoDigitYear));
                                var i = t.prototype,
                                    a = i.parse;
                                i.parse = function (e) {
                                    var t = e.date,
                                        i = e.utc,
                                        l = e.args;
                                    this.$u = i;
                                    var o = l[1];
                                    if ('string' == typeof o) {
                                        var h = !0 === l[2],
                                            c = !0 === l[3],
                                            d = l[2];
                                        (c && (d = l[2]),
                                            (u = this.$locale()),
                                            !h && d && (u = r.Ls[d]),
                                            (this.$d = (function (e, t, r) {
                                                try {
                                                    if (['x', 'X'].indexOf(t) > -1)
                                                        return new Date(('X' === t ? 1e3 : 1) * e);
                                                    var i = (function (e) {
                                                            var t, r;
                                                            ((t = e), (r = u && u.formats));
                                                            for (
                                                                var i = (e = t.replace(
                                                                        /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                                                                        function (e, t, s) {
                                                                            var i = s && s.toUpperCase();
                                                                            return (
                                                                                t ||
                                                                                r[s] ||
                                                                                n[s] ||
                                                                                r[i].replace(
                                                                                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                                                                                    function (e, t, n) {
                                                                                        return t || n.slice(1);
                                                                                    },
                                                                                )
                                                                            );
                                                                        },
                                                                    )).match(s),
                                                                    a = i.length,
                                                                    l = 0;
                                                                l < a;
                                                                l += 1
                                                            ) {
                                                                var o = i[l],
                                                                    h = p[o],
                                                                    c = h && h[0],
                                                                    d = h && h[1];
                                                                i[l] = d
                                                                    ? {regex: c, parser: d}
                                                                    : o.replace(/^\[|\]$/g, '');
                                                            }
                                                            return function (e) {
                                                                for (var t = {}, n = 0, s = 0; n < a; n += 1) {
                                                                    var r = i[n];
                                                                    if ('string' == typeof r) s += r.length;
                                                                    else {
                                                                        var l = r.regex,
                                                                            u = r.parser,
                                                                            o = e.slice(s),
                                                                            h = l.exec(o)[0];
                                                                        (u.call(t, h), (e = e.replace(h, '')));
                                                                    }
                                                                }
                                                                return (
                                                                    (function (e) {
                                                                        var t = e.afternoon;
                                                                        if (void 0 !== t) {
                                                                            var n = e.hours;
                                                                            (t
                                                                                ? n < 12 && (e.hours += 12)
                                                                                : 12 === n && (e.hours = 0),
                                                                                delete e.afternoon);
                                                                        }
                                                                    })(t),
                                                                    t
                                                                );
                                                            };
                                                        })(t)(e),
                                                        a = i.year,
                                                        l = i.month,
                                                        o = i.day,
                                                        h = i.hours,
                                                        c = i.minutes,
                                                        d = i.seconds,
                                                        f = i.milliseconds,
                                                        g = i.zone,
                                                        m = new Date(),
                                                        v = o || (a || l ? 1 : m.getDate()),
                                                        b = a || m.getFullYear(),
                                                        y = 0;
                                                    (a && !l) || (y = l > 0 ? l - 1 : m.getMonth());
                                                    var S = h || 0,
                                                        M = c || 0,
                                                        w = d || 0,
                                                        $ = f || 0;
                                                    return g
                                                        ? new Date(Date.UTC(b, y, v, S, M, w, $ + 60 * g.offset * 1e3))
                                                        : r
                                                          ? new Date(Date.UTC(b, y, v, S, M, w, $))
                                                          : new Date(b, y, v, S, M, w, $);
                                                } catch (e) {
                                                    return new Date('');
                                                }
                                            })(t, o, i)),
                                            this.init(),
                                            d && !0 !== d && (this.$L = this.locale(d).$L),
                                            (h || c) && t != this.format(o) && (this.$d = new Date('')),
                                            (u = {}));
                                    } else if (o instanceof Array)
                                        for (var f = o.length, g = 1; g <= f; g += 1) {
                                            l[1] = o[g - 1];
                                            var m = r.apply(this, l);
                                            if (m.isValid()) {
                                                ((this.$d = m.$d), (this.$L = m.$L), this.init());
                                                break;
                                            }
                                            g === f && (this.$d = new Date(''));
                                        }
                                    else a.call(this, e);
                                };
                            })));
                });
            function l(e, t) {
                let n = (0, r.d)(e, t);
                return n.isValid() || t ? n : (0, r.d)(e, s.b);
            }
            r.d.extend(a);
        },
        30839: function (e, t, n) {
            n.d(t, {
                d: function () {
                    return r;
                },
            });
            var s = n(87856),
                r = (0, s.c)(function (e, t) {
                    var n, r, i, a, l, u, o, h, c, d, f, p, g, m, v, b, y, S, M, w, $;
                    (s.a,
                        (e.exports =
                            ((n = 'millisecond'),
                            (r = 'second'),
                            (i = 'minute'),
                            (a = 'hour'),
                            (l = 'week'),
                            (u = 'month'),
                            (o = 'quarter'),
                            (h = 'year'),
                            (c = 'date'),
                            (d = 'Invalid Date'),
                            (f =
                                /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/),
                            (p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g),
                            (g = function (e, t, n) {
                                var s = String(e);
                                return !s || s.length >= t ? e : '' + Array(t + 1 - s.length).join(n) + e;
                            }),
                            ((v = {})[(m = 'en')] = {
                                name: 'en',
                                weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                                months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                                    '_',
                                ),
                            }),
                            (b = function (e) {
                                return e instanceof w;
                            }),
                            (y = function e(t, n, s) {
                                var r;
                                if (!t) return m;
                                if ('string' == typeof t) {
                                    var i = t.toLowerCase();
                                    (v[i] && (r = i), n && ((v[i] = n), (r = i)));
                                    var a = t.split('-');
                                    if (!r && a.length > 1) return e(a[0]);
                                } else {
                                    var l = t.name;
                                    ((v[l] = t), (r = l));
                                }
                                return (!s && r && (m = r), r || (!s && m));
                            }),
                            (S = function (e, t) {
                                if (b(e)) return e.clone();
                                var n = 'object' == typeof t ? t : {};
                                return ((n.date = e), (n.args = arguments), new w(n));
                            }),
                            ((M = {
                                s: g,
                                z: function (e) {
                                    var t = -e.utcOffset(),
                                        n = Math.abs(t);
                                    return (
                                        (t <= 0 ? '+' : '-') + g(Math.floor(n / 60), 2, '0') + ':' + g(n % 60, 2, '0')
                                    );
                                },
                                m: function e(t, n) {
                                    if (t.date() < n.date()) return -e(n, t);
                                    var s = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                        r = t.clone().add(s, u),
                                        i = n - r < 0,
                                        a = t.clone().add(s + (i ? -1 : 1), u);
                                    return +(-(s + (n - r) / (i ? r - a : a - r)) || 0);
                                },
                                a: function (e) {
                                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
                                },
                                p: function (e) {
                                    return (
                                        {M: u, y: h, w: l, d: 'day', D: c, h: a, m: i, s: r, ms: n, Q: o}[e] ||
                                        String(e || '')
                                            .toLowerCase()
                                            .replace(/s$/, '')
                                    );
                                },
                                u: function (e) {
                                    return void 0 === e;
                                },
                            }).l = y),
                            (M.i = b),
                            (M.w = function (e, t) {
                                return S(e, {locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset});
                            }),
                            ($ = (w = (function () {
                                function e(e) {
                                    ((this.$L = y(e.locale, null, !0)), this.parse(e));
                                }
                                var t = e.prototype;
                                return (
                                    (t.parse = function (e) {
                                        ((this.$d = (function (e) {
                                            var t = e.date,
                                                n = e.utc;
                                            if (null === t) return new Date(NaN);
                                            if (M.u(t)) return new Date();
                                            if (t instanceof Date) return new Date(t);
                                            if ('string' == typeof t && !/Z$/i.test(t)) {
                                                var s = t.match(f);
                                                if (s) {
                                                    var r = s[2] - 1 || 0,
                                                        i = (s[7] || '0').substring(0, 3);
                                                    return n
                                                        ? new Date(
                                                              Date.UTC(
                                                                  s[1],
                                                                  r,
                                                                  s[3] || 1,
                                                                  s[4] || 0,
                                                                  s[5] || 0,
                                                                  s[6] || 0,
                                                                  i,
                                                              ),
                                                          )
                                                        : new Date(
                                                              s[1],
                                                              r,
                                                              s[3] || 1,
                                                              s[4] || 0,
                                                              s[5] || 0,
                                                              s[6] || 0,
                                                              i,
                                                          );
                                                }
                                            }
                                            return new Date(t);
                                        })(e)),
                                            (this.$x = e.x || {}),
                                            this.init());
                                    }),
                                    (t.init = function () {
                                        var e = this.$d;
                                        ((this.$y = e.getFullYear()),
                                            (this.$M = e.getMonth()),
                                            (this.$D = e.getDate()),
                                            (this.$W = e.getDay()),
                                            (this.$H = e.getHours()),
                                            (this.$m = e.getMinutes()),
                                            (this.$s = e.getSeconds()),
                                            (this.$ms = e.getMilliseconds()));
                                    }),
                                    (t.$utils = function () {
                                        return M;
                                    }),
                                    (t.isValid = function () {
                                        return this.$d.toString() !== d;
                                    }),
                                    (t.isSame = function (e, t) {
                                        var n = S(e);
                                        return this.startOf(t) <= n && n <= this.endOf(t);
                                    }),
                                    (t.isAfter = function (e, t) {
                                        return S(e) < this.startOf(t);
                                    }),
                                    (t.isBefore = function (e, t) {
                                        return this.endOf(t) < S(e);
                                    }),
                                    (t.$g = function (e, t, n) {
                                        return M.u(e) ? this[t] : this.set(n, e);
                                    }),
                                    (t.unix = function () {
                                        return Math.floor(this.valueOf() / 1e3);
                                    }),
                                    (t.valueOf = function () {
                                        return this.$d.getTime();
                                    }),
                                    (t.startOf = function (e, t) {
                                        var n = this,
                                            s = !!M.u(t) || t,
                                            o = M.p(e),
                                            d = function (e, t) {
                                                var r = M.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                                                return s ? r : r.endOf('day');
                                            },
                                            f = function (e, t) {
                                                return M.w(
                                                    n
                                                        .toDate()
                                                        [
                                                            e
                                                        ].apply(n.toDate('s'), (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)),
                                                    n,
                                                );
                                            },
                                            p = this.$W,
                                            g = this.$M,
                                            m = this.$D,
                                            v = 'set' + (this.$u ? 'UTC' : '');
                                        switch (o) {
                                            case h:
                                                return s ? d(1, 0) : d(31, 11);
                                            case u:
                                                return s ? d(1, g) : d(0, g + 1);
                                            case l:
                                                var b = this.$locale().weekStart || 0,
                                                    y = (p < b ? p + 7 : p) - b;
                                                return d(s ? m - y : m + (6 - y), g);
                                            case 'day':
                                            case c:
                                                return f(v + 'Hours', 0);
                                            case a:
                                                return f(v + 'Minutes', 1);
                                            case i:
                                                return f(v + 'Seconds', 2);
                                            case r:
                                                return f(v + 'Milliseconds', 3);
                                            default:
                                                return this.clone();
                                        }
                                    }),
                                    (t.endOf = function (e) {
                                        return this.startOf(e, !1);
                                    }),
                                    (t.$set = function (e, t) {
                                        var s,
                                            l = M.p(e),
                                            o = 'set' + (this.$u ? 'UTC' : ''),
                                            d = (((s = {}).day = o + 'Date'),
                                            (s[c] = o + 'Date'),
                                            (s[u] = o + 'Month'),
                                            (s[h] = o + 'FullYear'),
                                            (s[a] = o + 'Hours'),
                                            (s[i] = o + 'Minutes'),
                                            (s[r] = o + 'Seconds'),
                                            (s[n] = o + 'Milliseconds'),
                                            s)[l],
                                            f = 'day' === l ? this.$D + (t - this.$W) : t;
                                        if (l === u || l === h) {
                                            var p = this.clone().set(c, 1);
                                            (p.$d[d](f),
                                                p.init(),
                                                (this.$d = p.set(c, Math.min(this.$D, p.daysInMonth())).$d));
                                        } else d && this.$d[d](f);
                                        return (this.init(), this);
                                    }),
                                    (t.set = function (e, t) {
                                        return this.clone().$set(e, t);
                                    }),
                                    (t.get = function (e) {
                                        return this[M.p(e)]();
                                    }),
                                    (t.add = function (e, t) {
                                        var n,
                                            s = this;
                                        e = Number(e);
                                        var o = M.p(t),
                                            c = function (t) {
                                                var n = S(s);
                                                return M.w(n.date(n.date() + Math.round(t * e)), s);
                                            };
                                        if (o === u) return this.set(u, this.$M + e);
                                        if (o === h) return this.set(h, this.$y + e);
                                        if ('day' === o) return c(1);
                                        if (o === l) return c(7);
                                        var d = (((n = {})[i] = 6e4), (n[a] = 36e5), (n[r] = 1e3), n)[o] || 1,
                                            f = this.$d.getTime() + e * d;
                                        return M.w(f, this);
                                    }),
                                    (t.subtract = function (e, t) {
                                        return this.add(-1 * e, t);
                                    }),
                                    (t.format = function (e) {
                                        var t = this,
                                            n = this.$locale();
                                        if (!this.isValid()) return n.invalidDate || d;
                                        var s = e || 'YYYY-MM-DDTHH:mm:ssZ',
                                            r = M.z(this),
                                            i = this.$H,
                                            a = this.$m,
                                            l = this.$M,
                                            u = n.weekdays,
                                            o = n.months,
                                            h = function (e, n, r, i) {
                                                return (e && (e[n] || e(t, s))) || r[n].slice(0, i);
                                            },
                                            c = function (e) {
                                                return M.s(i % 12 || 12, e, '0');
                                            },
                                            f =
                                                n.meridiem ||
                                                function (e, t, n) {
                                                    var s = e < 12 ? 'AM' : 'PM';
                                                    return n ? s.toLowerCase() : s;
                                                },
                                            g = {
                                                YY: String(this.$y).slice(-2),
                                                YYYY: this.$y,
                                                M: l + 1,
                                                MM: M.s(l + 1, 2, '0'),
                                                MMM: h(n.monthsShort, l, o, 3),
                                                MMMM: h(o, l),
                                                D: this.$D,
                                                DD: M.s(this.$D, 2, '0'),
                                                d: String(this.$W),
                                                dd: h(n.weekdaysMin, this.$W, u, 2),
                                                ddd: h(n.weekdaysShort, this.$W, u, 3),
                                                dddd: u[this.$W],
                                                H: String(i),
                                                HH: M.s(i, 2, '0'),
                                                h: c(1),
                                                hh: c(2),
                                                a: f(i, a, !0),
                                                A: f(i, a, !1),
                                                m: String(a),
                                                mm: M.s(a, 2, '0'),
                                                s: String(this.$s),
                                                ss: M.s(this.$s, 2, '0'),
                                                SSS: M.s(this.$ms, 3, '0'),
                                                Z: r,
                                            };
                                        return s.replace(p, function (e, t) {
                                            return t || g[e] || r.replace(':', '');
                                        });
                                    }),
                                    (t.utcOffset = function () {
                                        return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
                                    }),
                                    (t.diff = function (e, t, n) {
                                        var s,
                                            c = M.p(t),
                                            d = S(e),
                                            f = (d.utcOffset() - this.utcOffset()) * 6e4,
                                            p = this - d,
                                            g = M.m(this, d);
                                        return (
                                            (g =
                                                (((s = {})[h] = g / 12),
                                                (s[u] = g),
                                                (s[o] = g / 3),
                                                (s[l] = (p - f) / 6048e5),
                                                (s.day = (p - f) / 864e5),
                                                (s[a] = p / 36e5),
                                                (s[i] = p / 6e4),
                                                (s[r] = p / 1e3),
                                                s)[c] || p),
                                            n ? g : M.a(g)
                                        );
                                    }),
                                    (t.daysInMonth = function () {
                                        return this.endOf(u).$D;
                                    }),
                                    (t.$locale = function () {
                                        return v[this.$L];
                                    }),
                                    (t.locale = function (e, t) {
                                        if (!e) return this.$L;
                                        var n = this.clone(),
                                            s = y(e, t, !0);
                                        return (s && (n.$L = s), n);
                                    }),
                                    (t.clone = function () {
                                        return M.w(this.$d, this);
                                    }),
                                    (t.toDate = function () {
                                        return new Date(this.valueOf());
                                    }),
                                    (t.toJSON = function () {
                                        return this.isValid() ? this.toISOString() : null;
                                    }),
                                    (t.toISOString = function () {
                                        return this.$d.toISOString();
                                    }),
                                    (t.toString = function () {
                                        return this.$d.toUTCString();
                                    }),
                                    e
                                );
                            })()).prototype),
                            (S.prototype = $),
                            [
                                ['$ms', n],
                                ['$s', r],
                                ['$m', i],
                                ['$H', a],
                                ['$W', 'day'],
                                ['$M', u],
                                ['$y', h],
                                ['$D', c],
                            ].forEach(function (e) {
                                $[e[1]] = function (t) {
                                    return this.$g(t, e[0], e[1]);
                                };
                            }),
                            (S.extend = function (e, t) {
                                return (e.$i || (e(t, w, S), (e.$i = !0)), S);
                            }),
                            (S.locale = y),
                            (S.isDayjs = b),
                            (S.unix = function (e) {
                                return S(1e3 * e);
                            }),
                            (S.en = v[m]),
                            (S.Ls = v),
                            (S.p = {}),
                            S)));
                });
        },
        11312: function (e, t, n) {
            n.d(t, {
                F: function () {
                    return y;
                },
                a: function () {
                    return v;
                },
                b: function () {
                    return f;
                },
                c: function () {
                    return g;
                },
                d: function () {
                    return b;
                },
                e: function () {
                    return D;
                },
                f: function () {
                    return $;
                },
                p: function () {
                    return S;
                },
                s: function () {
                    return w;
                },
                v: function () {
                    return M;
                },
            });
            var s = n(98214),
                r = n(5991),
                i = n(78681),
                a = n(88780),
                l = n(8807),
                u = n(30257),
                o = n(5812),
                h = n(71343),
                c = n(33290),
                d = n(2108);
            let f = (e) => {
                let t;
                let n = e.i18n.t(e.label),
                    s = e.i18n.t('facet-search-input'),
                    i = e.i18n.t('facet-search', {label: n}),
                    a = e.i18n.t('clear');
                return (0, r.h)(
                    'div',
                    {class: 'px-2 mt-3', part: 'search-wrapper'},
                    (0, r.h)(
                        'div',
                        {class: 'relative h-10'},
                        (0, r.h)('input', {
                            part: 'search-input',
                            class: 'input-primary w-full h-full px-9 placeholder-neutral-dark text-sm group',
                            type: 'text',
                            placeholder: s,
                            'aria-label': i,
                            value: e.query,
                            onInput: (t) => e.onChange(t.target.value),
                            ref: (e) => (t = e),
                        }),
                        (0, r.h)(
                            'div',
                            {
                                part: 'search-icon',
                                class: 'search-icon pointer-events-none absolute inline-flex justify-center items-center left-0 w-9 h-full text-on-background',
                            },
                            (0, r.h)('atomic-icon', {class: 'w-3', icon: c.S}),
                        ),
                        '' !== e.query &&
                            (0, r.h)(
                                d.B,
                                {
                                    style: 'text-transparent',
                                    title: a,
                                    part: 'search-clear-button',
                                    class: 'search-clear-button absolute inline-flex justify-center items-center right-px w-9 top-px bottom-px',
                                    onClick: () => {
                                        (e.onClear(), t.focus());
                                    },
                                },
                                (0, r.h)('atomic-icon', {class: 'w-2.5', icon: h.C}),
                            ),
                    ),
                );
            };
            function p(e, t, n) {
                return n.t(e, {
                    query: `<span class="font-bold italic text-on-background" part="matches-query">${(0, u.e)(t)}</span>`,
                    interpolation: {escapeValue: !1},
                });
            }
            let g = (e) =>
                    e.numberOfMatches
                        ? e.hasMoreMatches
                            ? (0, r.h)(
                                  'div',
                                  {class: 'px-2'},
                                  (0, r.h)('div', {
                                      part: 'more-matches',
                                      class: 'truncate mt-3 text-neutral-dark text-sm',
                                      innerHTML: p('more-matches-for', e.query, e.i18n),
                                  }),
                              )
                            : void 0
                        : (0, r.h)(
                              'div',
                              {class: 'px-2'},
                              (0, r.h)('div', {
                                  part: 'no-matches',
                                  class: 'truncate p-3 bg-neutral-light text-neutral-dark text-sm rounded',
                                  innerHTML: p('no-matches-found-for', e.query, e.i18n),
                              }),
                          ),
                m = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M496 208H304V16h-96v192H16v96h192v192h96V304h192"/>
</svg>
`,
                v = (e) => {
                    let t = e.i18n.t(e.label),
                        n = e.i18n.t('show-more'),
                        s = e.i18n.t('show-more-facet-values', {label: t}),
                        i = e.i18n.t('show-less'),
                        a = e.i18n.t('show-less-facet-values', {label: t}),
                        l = 'flex items-baseline text-left p-2 text-sm max-w-full',
                        u = 'w-2 h-2 mr-1';
                    if (e.canShowLessValues || e.canShowMoreValues)
                        return (0, r.h)(
                            'div',
                            {class: 'mt-2'},
                            (0, r.h)(
                                d.B,
                                {
                                    style: 'text-primary',
                                    part: 'show-less',
                                    class: `${l} ${e.canShowLessValues ? '' : 'hidden'}`,
                                    ariaLabel: a,
                                    onClick: () => e.onShowLess(),
                                    ref: e.showLessRef,
                                },
                                (0, r.h)('atomic-icon', {
                                    part: 'show-more-less-icon',
                                    class: u,
                                    icon: '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m64 208h384v96h-384z"/></svg>',
                                }),
                                (0, r.h)('span', {class: 'truncate'}, i),
                            ),
                            (0, r.h)(
                                d.B,
                                {
                                    style: 'text-primary',
                                    part: 'show-more',
                                    class: `${l} ${e.canShowMoreValues ? '' : 'hidden'}`,
                                    ariaLabel: s,
                                    onClick: () => e.onShowMore(),
                                    ref: e.showMoreRef,
                                },
                                (0, r.h)('atomic-icon', {part: 'show-more-less-icon', class: u, icon: m}),
                                (0, r.h)('span', {class: 'truncate'}, n),
                            ),
                        );
                },
                b = (e, t) => {
                    let n = new Intl.NumberFormat(e.i18n.language, {notation: 'compact'}).format(e.numberOfResults),
                        s = e.numberOfResults.toLocaleString(e.i18n.language),
                        i = e.i18n.t('facet-value', {value: e.displayValue, count: e.numberOfResults});
                    return (0, r.h)(
                        'li',
                        {key: e.displayValue},
                        (0, r.h)(
                            d.B,
                            {
                                style: 'outline-bg-neutral',
                                part: `value-box${e.isSelected ? ' value-box-selected' : ''}`,
                                onClick: () => e.onClick(),
                                class: `value-box box-border w-full h-full items-center p-2 group ${e.isSelected ? 'selected' : ''}`,
                                ariaPressed: e.isSelected.toString(),
                                ariaLabel: i,
                                ref: e.buttonRef,
                            },
                            t,
                            (0, r.h)(
                                'span',
                                {
                                    title: s,
                                    part: 'value-count',
                                    class: 'value-box-count text-neutral-dark truncate w-full text-sm mt-1',
                                },
                                e.i18n.t('between-parentheses', {text: n}),
                            ),
                        ),
                    );
                },
                y = (e, t) => {
                    var n;
                    let s = e.numberOfResults.toLocaleString(e.i18n.language),
                        i = e.i18n.t('facet-value', {
                            value: e.displayValue,
                            count: e.numberOfResults,
                            interpolation: {escapeValue: !1},
                        }),
                        a =
                            null !== (n = e.part) && void 0 !== n
                                ? n
                                : `value-link${e.isSelected ? ' value-link-selected' : ''}`;
                    return (
                        e.additionalPart && (a += ` ${e.additionalPart}`),
                        (0, r.h)(
                            'li',
                            {key: e.displayValue, class: e.class},
                            (0, r.h)(
                                d.B,
                                {
                                    style: 'text-neutral',
                                    part: a,
                                    onClick: () => e.onClick(),
                                    class: 'group w-full flex items-center px-2 py-2.5 text-left truncate no-outline',
                                    ariaPressed: e.isSelected.toString(),
                                    ariaLabel: i,
                                    ref: e.buttonRef,
                                },
                                t,
                                (0, r.h)(
                                    'span',
                                    {part: 'value-count', class: 'value-count'},
                                    e.i18n.t('between-parentheses', {text: s}),
                                ),
                            ),
                            e.subList,
                        )
                    );
                };
            function S(e) {
                return Object.entries(e).map(([e, t]) => ({
                    parentFacetId: e,
                    condition: (e) =>
                        e.some((e) => {
                            if ('children' in e && Array.isArray(e.children)) {
                                let n = (function e(t) {
                                    if ('selected' === t.state) return t;
                                    for (let n of t.children) {
                                        let t = e(n);
                                        if (null !== t) return t;
                                    }
                                    return null;
                                })(e);
                                return !!n && (!t || n.value === t);
                            }
                            return (
                                'value' in e &&
                                'string' == typeof e.value &&
                                !('children' in e) &&
                                'selected' === e.state &&
                                (!t || e.value === t)
                            );
                        }),
                }));
            }
            function M(e) {
                if (Object.keys(e).length > 1) throw "Depending on multiple facets isn't supported";
            }
            function w(e) {
                let {hasInput: t, hasInputRange: n, searchStatusState: s, facetValues: r} = e;
                if (!t) return !1;
                if (n) return !0;
                if (!s.hasResults) return !1;
                let i = r.filter((e) => e.numberOfResults || 'idle' !== e.state) || [];
                return !!i.length;
            }
            function $(e, t) {
                return e + 1 > t;
            }
            class D {
                constructor(e) {
                    ((this.resultIndexToFocusOnShowMore = 0),
                        (this.host = e.host),
                        (this.bindings = e.bindings),
                        (this.label = e.label),
                        (this.field = e.field),
                        (this.headingLevel = e.headingLevel),
                        (this.displayValuesAs = e.displayValuesAs),
                        (this.dependsOn = e.dependsOn),
                        (this.dependenciesManager = e.dependenciesManager),
                        (this.facet = e.facet),
                        (this.facetId = e.facetId),
                        (this.sortCriteria = e.sortCriteria),
                        (this.withSearch = e.withSearch),
                        this.validateProps());
                    let t = {label: () => this.bindings.i18n.t(this.label), facetId: this.facetId, element: this.host};
                    (this.bindings.store.registerFacet('facets', t),
                        (0, a.i)(this.host, {
                            ...t,
                            hasValues: () => !!this.facet.state.values.length,
                            numberOfSelectedValues: () => this.numberOfSelectedValues,
                        }));
                }
                validateProps() {
                    (new s.S({displayValuesAs: new s.a({constrainTo: ['checkbox', 'link', 'box']})}).validate({
                        displayValuesAs: this.displayValuesAs,
                    }),
                        M(this.dependsOn));
                }
                disconnectedCallback() {
                    var e;
                    this.host.isConnected ||
                        null === (e = this.dependenciesManager) ||
                        void 0 === e ||
                        e.stopWatching();
                }
                componentShouldUpdate(e, t, n) {
                    return 'facetState' !== n || !t || !this.withSearch || (0, u.s)(e, t);
                }
                renderHeader(e, t, n) {
                    return (0, r.h)(u.d, {
                        i18n: this.bindings.i18n,
                        label: this.label,
                        onClearFilters: () => {
                            (e.focusAfterSearch(), this.facet.deselectAll());
                        },
                        numberOfSelectedValues: this.numberOfSelectedValues,
                        isCollapsed: t,
                        headingLevel: this.headingLevel,
                        onToggleCollapse: n,
                        headerRef: e.setTarget,
                    });
                }
                get numberOfSelectedValues() {
                    return this.facet.state.values.filter(({state: e}) => 'selected' === e).length;
                }
                renderSearchInput() {
                    if (this.withSearch)
                        return (0, r.h)(f, {
                            i18n: this.bindings.i18n,
                            label: this.label,
                            query: this.facet.state.facetSearch.query,
                            onChange: (e) => {
                                if ('' === e) {
                                    this.facet.facetSearch.clear();
                                    return;
                                }
                                (this.facet.facetSearch.updateCaptions((0, i.a)(this.field, this.bindings.i18n)),
                                    this.facet.facetSearch.updateText(e),
                                    this.facet.facetSearch.search());
                            },
                            onClear: () => this.facet.facetSearch.clear(),
                        });
                }
                renderMatches() {
                    return (0, r.h)(g, {
                        i18n: this.bindings.i18n,
                        query: this.facet.state.facetSearch.query,
                        numberOfMatches: this.facet.state.facetSearch.values.length,
                        hasMoreMatches: this.facet.state.facetSearch.moreValuesAvailable,
                    });
                }
                renderValuesContainer(e, t) {
                    let n = `mt-3 ${'box' === this.displayValuesAs ? 'box-container' : ''}`;
                    return (0, r.h)(
                        u.b,
                        {i18n: this.bindings.i18n, label: this.label, query: t},
                        (0, r.h)('ul', {class: n, part: 'values'}, e),
                    );
                }
                renderSearchResults(e, t) {
                    return this.renderValuesContainer(
                        this.facet.state.facetSearch.values.map((n) =>
                            this.renderValue(
                                {state: 'idle', numberOfResults: n.count, value: n.rawValue},
                                () =>
                                    'link' === this.displayValuesAs
                                        ? this.facet.facetSearch.singleSelect(n)
                                        : this.facet.facetSearch.select(n),
                                !1,
                                !1,
                                e,
                                t,
                            ),
                        ),
                        this.facet.state.facetSearch.query,
                    );
                }
                renderValues(e, t) {
                    return this.renderValuesContainer(
                        this.facet.state.values.map((n, s) =>
                            this.renderValue(
                                n,
                                () =>
                                    'link' === this.displayValuesAs
                                        ? this.facet.toggleSingleSelect(n)
                                        : this.facet.toggleSelect(n),
                                0 === s,
                                s === ('automatic' === this.sortCriteria ? 0 : this.resultIndexToFocusOnShowMore),
                                e,
                                t,
                            ),
                        ),
                    );
                }
                renderValue(e, t, n, s, a, l) {
                    let o = (0, i.g)(this.field, e.value, this.bindings.i18n),
                        h = 'selected' === e.state;
                    switch (this.displayValuesAs) {
                        case 'checkbox':
                            return (0, r.h)(
                                u.f,
                                {
                                    displayValue: o,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: h,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (n && a.setTarget(e), s && l.setTarget(e));
                                    },
                                },
                                (0, r.h)(u.F, {
                                    displayValue: o,
                                    isSelected: h,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                        case 'link':
                            return (0, r.h)(
                                y,
                                {
                                    displayValue: o,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: h,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (n && a.setTarget(e), s && l.setTarget(e));
                                    },
                                },
                                (0, r.h)(u.F, {
                                    displayValue: o,
                                    isSelected: h,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                        case 'box':
                            return (0, r.h)(
                                b,
                                {
                                    displayValue: o,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: h,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (n && a.setTarget(e), s && l.setTarget(e));
                                    },
                                },
                                (0, r.h)(u.F, {
                                    displayValue: o,
                                    isSelected: h,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                    }
                }
                renderShowMoreLess(e, t) {
                    return (0, r.h)(v, {
                        label: this.label,
                        i18n: this.bindings.i18n,
                        onShowMore: () => {
                            ((this.resultIndexToFocusOnShowMore = this.facet.state.values.length),
                                t.focusAfterSearch(),
                                this.facet.showMoreValues());
                        },
                        onShowLess: () => {
                            (e.focusAfterSearch(), this.facet.showLessValues());
                        },
                        canShowMoreValues: this.facet.state.canShowMoreValues,
                        canShowLessValues: this.facet.state.canShowLessValues,
                    });
                }
                renderBody(e, t) {
                    return [
                        this.renderSearchInput(),
                        (0, u.a)(this.facet.state.facetSearch)
                            ? [this.renderSearchResults(e, t), this.renderMatches()]
                            : [this.renderValues(e, t), this.renderShowMoreLess(e, t)],
                    ];
                }
                render({
                    hasError: e,
                    firstSearchExecuted: t,
                    isCollapsed: n,
                    numberOfValues: s,
                    headerFocus: i,
                    showLessFocus: a,
                    showMoreFocus: h,
                    onToggleCollapse: c,
                }) {
                    return e || !this.facet.state.enabled
                        ? (0, r.h)(l.H, null)
                        : t
                          ? this.facet.state.values.length
                              ? (0, r.h)(u.c, null, this.renderHeader(i, n, c), !n && this.renderBody(a, h))
                              : (0, r.h)(l.H, null)
                          : (0, r.h)(o.F, {numberOfValues: s, isCollapsed: n});
                }
            }
        },
        5812: function (e, t, n) {
            n.d(t, {
                F: function () {
                    return i;
                },
            });
            var s = n(5991),
                r = n(66038);
            let i = ({numberOfValues: e, isCollapsed: t}) => {
                let n = [];
                for (let t = 0; t < e; t++) {
                    let e = `${(0, r.g)(60, 100)}%`,
                        t = `${(0, r.g)(0.3, 1)}`;
                    n.push((0, s.h)('div', {class: 'flex bg-neutral h-5 mt-4', style: {width: e, opacity: t}}));
                }
                return (0, s.h)(
                    'div',
                    {
                        part: 'placeholder',
                        class: 'bg-background animate-pulse border border-neutral rounded-lg mb-4 p-7',
                        'aria-hidden': 'true',
                    },
                    (0, s.h)('div', {class: 'bg-neutral rounded h-8', style: {width: `${(0, r.g)(25, 75)}%`}}),
                    !t && (0, s.h)('div', {class: 'mt-7'}, n),
                );
            };
        },
        88780: function (e, t, n) {
            n.d(t, {
                i: function () {
                    return i;
                },
                p: function () {
                    return r;
                },
            });
            var s = n(75291);
            let r = 'popover-nested';
            function i(e, t) {
                e.dispatchEvent((0, s.b)('atomic/initializePopover', t));
            }
        },
        53049: function (e, t, n) {
            n.d(t, {
                A: function () {
                    return l;
                },
                M: function () {
                    return a;
                },
            });
            var s = n(98214),
                r = n(5991),
                i = n(66038);
            function a(e) {
                return (t, n) => {
                    let {componentWillLoad: s} = t;
                    if (!s) {
                        console.error(
                            'The "componentWillLoad" lifecycle method has to be defined for the MapProp decorator to work.',
                        );
                        return;
                    }
                    t.componentWillLoad = function () {
                        var t;
                        let a = (e && e.attributePrefix) || n,
                            l = this[n],
                            u = (0, r.g)(this).attributes;
                        ((function (e, t, n, s) {
                            let r = (function (e, t) {
                                let n = {},
                                    s = (0, i.a)(e) + '-';
                                for (let e = 0; e < t.length; e++) {
                                    let r = t[e];
                                    if (0 !== r.name.indexOf(s)) continue;
                                    let a = (0, i.k)(r.name.replace(s, ''));
                                    n[a] = `${r.value}`;
                                }
                                return n;
                            })(e, n);
                            Object.assign(
                                t,
                                s
                                    ? Object.entries(r).reduce(
                                          (e, [t, n]) => ({
                                              ...e,
                                              [t]: (function (e) {
                                                  var t;
                                                  let [...n] =
                                                          null !== (t = e.matchAll(/(?:\\.|[^,])+/g)) && void 0 !== t
                                                              ? t
                                                              : [],
                                                      s = /\\(.)/g;
                                                  return n.map(([e]) => e.replace(s, '$1'));
                                              })(n).map((e) => e.trim()),
                                          }),
                                          {},
                                      )
                                    : r,
                            );
                        })(a, l, Array.from(u), null !== (t = null == e ? void 0 : e.splitValues) && void 0 !== t && t),
                            s.call(this));
                    };
                };
            }
            function l() {
                return (e, t) => {
                    let {componentWillLoad: n} = e,
                        a = (0, i.a)(t);
                    e.componentWillLoad = function () {
                        let e = this[t];
                        if (!e || (0, s.i)(e)) {
                            null == n || n.call(this);
                            return;
                        }
                        try {
                            let n = JSON.parse(e);
                            (0, s.i)(n)
                                ? (this[t] = n)
                                : console.error(`Property ${a} should be an array`, (0, r.g)(this));
                        } catch (e) {
                            console.error(`Error while parsing attribute ${a} as array`, e);
                        }
                        null == n || n.call(this);
                    };
                };
            }
        },
        33290: function (e, t, n) {
            n.d(t, {
                S: function () {
                    return s;
                },
            });
            let s =
                '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6.4 0c3.5 0 6.4 2.9 6.4 6.4 0 1.4-.4 2.7-1.2 3.7l4 4c.4.4.4 1 .1 1.5l-.1.1c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-4-4c-1 .7-2.3 1.2-3.7 1.2-3.4-.1-6.3-3-6.3-6.5s2.9-6.4 6.4-6.4zm0 2.1c-2.3 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z"/></svg>';
        },
        8206: function (e, t, n) {
            n.d(t, {
                T: function () {
                    return d;
                },
            });
            var s = n(5991),
                r = n(65146),
                i = n(78681),
                a = n(66038),
                l = n(88780),
                u = n(8807),
                o = n(11312),
                h = n(30257),
                c = n(5812);
            class d {
                constructor(e) {
                    ((this.props = e),
                        (this.manualTimeframes = []),
                        this.validateProps(),
                        (this.facetId = this.determineFacetId),
                        this.props.setFacetId(this.facetId),
                        (this.manualTimeframes = this.getManualTimeframes()),
                        this.manualTimeframes.length > 0 &&
                            (this.facetForDateRange = this.props.initializeFacetForDateRange(this.currentValues)),
                        this.props.withDatePicker &&
                            ((this.facetForDatePicker = this.props.initializeFacetForDatePicker()),
                            (this.filter = this.props.initializeFilter())),
                        (this.facetForDateRange || this.filter) &&
                            (this.dependenciesManager = this.props.buildDependenciesManager()),
                        this.registerFacetToStore());
                }
                get determineFacetId() {
                    return this.props.facetId
                        ? this.props.facetId
                        : this.props.bindings.store.get('dateFacets')[this.props.field]
                          ? (0, a.r)(`${this.props.field}_`)
                          : this.props.field;
                }
                get enabled() {
                    var e, t, n, s;
                    return (
                        null ===
                            (s =
                                null !==
                                    (t =
                                        null === (e = this.facetForDateRange) || void 0 === e
                                            ? void 0
                                            : e.state.enabled) && void 0 !== t
                                    ? t
                                    : null === (n = this.filter) || void 0 === n
                                      ? void 0
                                      : n.state.enabled) ||
                        void 0 === s ||
                        s
                    );
                }
                get valuesToRender() {
                    var e;
                    return (
                        (null === (e = this.facetForDateRange) || void 0 === e
                            ? void 0
                            : e.state.values.filter((e) => e.numberOfResults || 'idle' !== e.state)) || []
                    );
                }
                get shouldRenderValues() {
                    return !this.hasInputRange && !!this.valuesToRender.length;
                }
                get shouldRenderFacet() {
                    return this.shouldRenderInput || this.shouldRenderValues;
                }
                get shouldRenderInput() {
                    var e, t;
                    return (0, o.s)({
                        hasInput: this.props.withDatePicker,
                        hasInputRange: this.hasInputRange,
                        searchStatusState: this.props.getSearchStatusState(),
                        facetValues:
                            (null === (t = null === (e = this.facetForDatePicker) || void 0 === e ? void 0 : e.state) ||
                            void 0 === t
                                ? void 0
                                : t.values) || [],
                    });
                }
                get hasValues() {
                    var e;
                    return (
                        (null !== (e = this.facetForDatePicker) && void 0 !== e && !!e.state.values.length) ||
                        !!this.valuesToRender.length
                    );
                }
                get numberOfSelectedValues() {
                    var e, t, n;
                    return (
                        null === (t = null === (e = this.filter) || void 0 === e ? void 0 : e.state) || void 0 === t
                            ? void 0
                            : t.range
                    )
                        ? 1
                        : (null === (n = this.facetForDateRange) || void 0 === n
                              ? void 0
                              : n.state.values.filter(({state: e}) => 'selected' === e).length) || 0;
                }
                get hasInputRange() {
                    var e;
                    return !!(null === (e = this.filter) || void 0 === e ? void 0 : e.state.range);
                }
                get currentValues() {
                    return this.manualTimeframes.map(({period: e, amount: t, unit: n}) =>
                        'past' === e
                            ? this.props.buildDateRange({start: {period: e, unit: n, amount: t}, end: {period: 'now'}})
                            : this.props.buildDateRange({start: {period: 'now'}, end: {period: e, unit: n, amount: t}}),
                    );
                }
                disconnectedCallback() {
                    var e;
                    this.props.host.isConnected ||
                        null === (e = this.dependenciesManager) ||
                        void 0 === e ||
                        e.stopWatching();
                }
                validateProps() {
                    (0, o.v)(this.props.dependsOn);
                }
                registerFacetToStore() {
                    let e = {
                        label: () => this.props.bindings.i18n.t(this.props.label),
                        facetId: this.facetId,
                        element: this.props.host,
                    };
                    (this.props.bindings.store.registerFacet('dateFacets', {
                        ...e,
                        format: (e) => this.formatFacetValue(e),
                    }),
                        (0, l.i)(this.props.host, {
                            ...e,
                            hasValues: () => this.hasValues,
                            numberOfSelectedValues: () => this.numberOfSelectedValues,
                        }),
                        this.filter &&
                            (this.props.bindings.store.state.dateFacets[this.filter.state.facetId] =
                                this.props.bindings.store.state.dateFacets[this.facetId]));
                }
                getManualTimeframes() {
                    return Array.from(this.props.host.querySelectorAll('atomic-timeframe')).map(
                        ({label: e, amount: t, unit: n, period: s}) => ({label: e, amount: t, unit: n, period: s}),
                    );
                }
                formatFacetValue(e) {
                    try {
                        let t = this.props.deserializeRelativeDate(e.start),
                            n = 'past' === t.period ? t : this.props.deserializeRelativeDate(e.end),
                            s = this.getManualTimeframes().find(
                                (e) => e.period === n.period && e.unit === n.unit && e.amount === n.amount,
                            );
                        if (null == s ? void 0 : s.label)
                            return (0, i.g)(this.props.field, s.label, this.props.bindings.i18n);
                        return this.props.bindings.i18n.t(`${n.period}-${n.unit}`, {count: n.amount});
                    } catch (t) {
                        return this.props.bindings.i18n.t('to', {
                            start: (0, r.p)(e.start).format('YYYY-MM-DD'),
                            end: (0, r.p)(e.end).format('YYYY-MM-DD'),
                        });
                    }
                }
                renderValues() {
                    return this.renderValuesContainer(this.valuesToRender.map((e) => this.renderValue(e)));
                }
                renderValue(e) {
                    let t = this.formatFacetValue(e),
                        n = 'selected' === e.state;
                    return (0, s.h)(
                        o.F,
                        {
                            displayValue: t,
                            isSelected: n,
                            numberOfResults: e.numberOfResults,
                            i18n: this.props.bindings.i18n,
                            onClick: () => this.facetForDateRange.toggleSingleSelect(e),
                        },
                        (0, s.h)(h.F, {displayValue: t, isSelected: n}),
                    );
                }
                renderValuesContainer(e) {
                    return (0, s.h)(
                        h.b,
                        {i18n: this.props.bindings.i18n, label: this.props.label},
                        (0, s.h)('ul', {class: 'mt-3', part: 'values'}, e),
                    );
                }
                renderHeader(e, t, n) {
                    return (0, s.h)(h.d, {
                        i18n: this.props.bindings.i18n,
                        label: this.props.label,
                        onClearFilters: () => {
                            var e, n, s;
                            if (
                                (t.focusAfterSearch(),
                                null === (e = this.filter) || void 0 === e ? void 0 : e.state.range)
                            ) {
                                null === (n = this.filter) || void 0 === n || n.clear();
                                return;
                            }
                            null === (s = this.facetForDateRange) || void 0 === s || s.deselectAll();
                        },
                        numberOfSelectedValues: this.numberOfSelectedValues,
                        isCollapsed: e,
                        headingLevel: this.props.headingLevel,
                        onToggleCollapse: n,
                        headerRef: t.setTarget,
                    });
                }
                renderDateInput() {
                    return (0, s.h)('atomic-facet-date-input', {
                        min: this.props.min,
                        max: this.props.max,
                        bindings: this.props.bindings,
                        label: this.props.label,
                        filter: this.filter,
                        filterState: this.filter.state,
                    });
                }
                render({hasError: e, firstSearchExecuted: t, isCollapsed: n, headerFocus: r, onToggleCollapse: i}) {
                    return e || !this.enabled
                        ? (0, s.h)(u.H, null)
                        : t
                          ? this.shouldRenderFacet
                              ? (0, s.h)(
                                    h.c,
                                    null,
                                    this.renderHeader(n, r, i),
                                    !n && [
                                        this.shouldRenderValues && this.renderValues(),
                                        this.shouldRenderInput && this.renderDateInput(),
                                    ],
                                )
                              : (0, s.h)(u.H, null)
                          : (0, s.h)(c.F, {numberOfValues: this.currentValues.length, isCollapsed: n});
                }
            }
        },
    },
]);
