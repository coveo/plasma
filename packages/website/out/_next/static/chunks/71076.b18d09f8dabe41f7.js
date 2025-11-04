'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71076],
    {
        71076: function (e, t, r) {
            (r.r(t),
                r.d(t, {
                    atomic_frequently_bought_together: function () {
                        return i8;
                    },
                }));
            var n,
                i,
                o,
                a,
                s,
                u,
                c,
                l,
                d,
                h,
                f = r(5991),
                p = Object.create,
                m = Object.defineProperty,
                g = Object.getOwnPropertyDescriptor,
                v = Object.getOwnPropertyNames,
                y = Object.getPrototypeOf,
                b = Object.prototype.hasOwnProperty,
                S = (e) => m(e, '__esModule', {value: !0}),
                w = r(22029),
                k = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports),
                O = (e, t, r) => {
                    if ((t && 'object' == typeof t) || 'function' == typeof t)
                        for (let n of v(t))
                            b.call(e, n) ||
                                'default' === n ||
                                m(e, n, {get: () => t[n], enumerable: !(r = g(t, n)) || r.enumerable});
                    return e;
                },
                I = (e) =>
                    O(
                        S(
                            m(
                                null != e ? p(y(e)) : {},
                                'default',
                                e && e.__esModule && 'default' in e
                                    ? {get: () => e.default, enumerable: !0}
                                    : {value: e, enumerable: !0},
                            ),
                        ),
                        e,
                    ),
                E = k((e, t) => {
                    t.exports = fetch;
                }),
                C = k((e) => {
                    var t =
                        (e && e.__assign) ||
                        function () {
                            return (t =
                                Object.assign ||
                                function (e) {
                                    for (var t, r = 1, n = arguments.length; r < n; r++)
                                        for (var i in (t = arguments[r]))
                                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                    return e;
                                }).apply(this, arguments);
                        };
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var r = {
                        delayFirstAttempt: !1,
                        jitter: 'none',
                        maxDelay: 1 / 0,
                        numOfAttempts: 10,
                        retry: function () {
                            return !0;
                        },
                        startingDelay: 100,
                        timeMultiple: 2,
                    };
                    e.getSanitizedOptions = function (e) {
                        var n = t(t({}, r), e);
                        return (n.numOfAttempts < 1 && (n.numOfAttempts = 1), n);
                    };
                }),
                D = k((e) => {
                    (Object.defineProperty(e, '__esModule', {value: !0}),
                        (e.fullJitter = function (e) {
                            return Math.round(Math.random() * e);
                        }));
                }),
                U = k((e) => {
                    (Object.defineProperty(e, '__esModule', {value: !0}),
                        (e.noJitter = function (e) {
                            return e;
                        }));
                }),
                R = k((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = D(),
                        r = U();
                    e.JitterFactory = function (e) {
                        return 'full' === e.jitter ? t.fullJitter : r.noJitter;
                    };
                }),
                A = k((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = R(),
                        r = (function () {
                            function e(e) {
                                ((this.options = e), (this.attempt = 0));
                            }
                            return (
                                (e.prototype.apply = function () {
                                    var e = this;
                                    return new Promise(function (t) {
                                        return setTimeout(t, e.jitteredDelay);
                                    });
                                }),
                                (e.prototype.setAttemptNumber = function (e) {
                                    this.attempt = e;
                                }),
                                Object.defineProperty(e.prototype, 'jitteredDelay', {
                                    get: function () {
                                        return t.JitterFactory(this.options)(this.delay);
                                    },
                                    enumerable: !0,
                                    configurable: !0,
                                }),
                                Object.defineProperty(e.prototype, 'delay', {
                                    get: function () {
                                        return Math.min(
                                            this.options.startingDelay *
                                                Math.pow(this.options.timeMultiple, this.numOfDelayedAttempts),
                                            this.options.maxDelay,
                                        );
                                    },
                                    enumerable: !0,
                                    configurable: !0,
                                }),
                                Object.defineProperty(e.prototype, 'numOfDelayedAttempts', {
                                    get: function () {
                                        return this.attempt;
                                    },
                                    enumerable: !0,
                                    configurable: !0,
                                }),
                                e
                            );
                        })();
                    e.Delay = r;
                }),
                x = k((e) => {
                    var t,
                        r =
                            (e && e.__extends) ||
                            ((t = function (e, r) {
                                return (t =
                                    Object.setPrototypeOf ||
                                    ({__proto__: []} instanceof Array &&
                                        function (e, t) {
                                            e.__proto__ = t;
                                        }) ||
                                    function (e, t) {
                                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                                    })(e, r);
                            }),
                            function (e, r) {
                                function n() {
                                    this.constructor = e;
                                }
                                (t(e, r),
                                    (e.prototype =
                                        null === r ? Object.create(r) : ((n.prototype = r.prototype), new n())));
                            }),
                        n =
                            (e && e.__awaiter) ||
                            function (e, t, r, n) {
                                return new (r || (r = Promise))(function (i, o) {
                                    function a(e) {
                                        try {
                                            u(n.next(e));
                                        } catch (e) {
                                            o(e);
                                        }
                                    }
                                    function s(e) {
                                        try {
                                            u(n.throw(e));
                                        } catch (e) {
                                            o(e);
                                        }
                                    }
                                    function u(e) {
                                        var t;
                                        e.done
                                            ? i(e.value)
                                            : ((t = e.value) instanceof r
                                                  ? t
                                                  : new r(function (e) {
                                                        e(t);
                                                    })
                                              ).then(a, s);
                                    }
                                    u((n = n.apply(e, t || [])).next());
                                });
                            },
                        i =
                            (e && e.__generator) ||
                            function (e, t) {
                                var r,
                                    n,
                                    i,
                                    o,
                                    a = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & i[0]) throw i[1];
                                            return i[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (o = {next: s(0), throw: s(1), return: s(2)}),
                                    'function' == typeof Symbol &&
                                        (o[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    o
                                );
                                function s(o) {
                                    return function (s) {
                                        return (function (o) {
                                            if (r) throw TypeError('Generator is already executing.');
                                            for (; a; )
                                                try {
                                                    if (
                                                        ((r = 1),
                                                        n &&
                                                            (i =
                                                                2 & o[0]
                                                                    ? n.return
                                                                    : o[0]
                                                                      ? n.throw || ((i = n.return) && i.call(n), 0)
                                                                      : n.next) &&
                                                            !(i = i.call(n, o[1])).done)
                                                    )
                                                        return i;
                                                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                                        case 0:
                                                        case 1:
                                                            i = o;
                                                            break;
                                                        case 4:
                                                            return (a.label++, {value: o[1], done: !1});
                                                        case 5:
                                                            (a.label++, (n = o[1]), (o = [0]));
                                                            continue;
                                                        case 7:
                                                            ((o = a.ops.pop()), a.trys.pop());
                                                            continue;
                                                        default:
                                                            if (
                                                                !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                                                                (6 === o[0] || 2 === o[0])
                                                            ) {
                                                                a = 0;
                                                                continue;
                                                            }
                                                            if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                                                a.label = o[1];
                                                                break;
                                                            }
                                                            if (6 === o[0] && a.label < i[1]) {
                                                                ((a.label = i[1]), (i = o));
                                                                break;
                                                            }
                                                            if (i && a.label < i[2]) {
                                                                ((a.label = i[2]), a.ops.push(o));
                                                                break;
                                                            }
                                                            (i[2] && a.ops.pop(), a.trys.pop());
                                                            continue;
                                                    }
                                                    o = t.call(e, a);
                                                } catch (e) {
                                                    ((o = [6, e]), (n = 0));
                                                } finally {
                                                    r = i = 0;
                                                }
                                            if (5 & o[0]) throw o[1];
                                            return {value: o[0] ? o[1] : void 0, done: !0};
                                        })([o, s]);
                                    };
                                }
                            };
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var o = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            r(t, e),
                            (t.prototype.apply = function () {
                                return n(this, void 0, void 0, function () {
                                    return i(this, function (t) {
                                        return [2, !!this.isFirstAttempt || e.prototype.apply.call(this)];
                                    });
                                });
                            }),
                            Object.defineProperty(t.prototype, 'isFirstAttempt', {
                                get: function () {
                                    return 0 === this.attempt;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, 'numOfDelayedAttempts', {
                                get: function () {
                                    return this.attempt - 1;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            t
                        );
                    })(A().Delay);
                    e.SkipFirstDelay = o;
                }),
                j = k((e) => {
                    var t,
                        r =
                            (e && e.__extends) ||
                            ((t = function (e, r) {
                                return (t =
                                    Object.setPrototypeOf ||
                                    ({__proto__: []} instanceof Array &&
                                        function (e, t) {
                                            e.__proto__ = t;
                                        }) ||
                                    function (e, t) {
                                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                                    })(e, r);
                            }),
                            function (e, r) {
                                function n() {
                                    this.constructor = e;
                                }
                                (t(e, r),
                                    (e.prototype =
                                        null === r ? Object.create(r) : ((n.prototype = r.prototype), new n())));
                            });
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var n = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (r(t, e), t);
                    })(A().Delay);
                    e.AlwaysDelay = n;
                }),
                P = k((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = x(),
                        r = j();
                    e.DelayFactory = function (e, n) {
                        var i = e.delayFirstAttempt ? new r.AlwaysDelay(e) : new t.SkipFirstDelay(e);
                        return (i.setAttemptNumber(n), i);
                    };
                }),
                T = k((e) => {
                    var t =
                            (e && e.__awaiter) ||
                            function (e, t, r, n) {
                                return new (r || (r = Promise))(function (i, o) {
                                    function a(e) {
                                        try {
                                            u(n.next(e));
                                        } catch (e) {
                                            o(e);
                                        }
                                    }
                                    function s(e) {
                                        try {
                                            u(n.throw(e));
                                        } catch (e) {
                                            o(e);
                                        }
                                    }
                                    function u(e) {
                                        var t;
                                        e.done
                                            ? i(e.value)
                                            : ((t = e.value) instanceof r
                                                  ? t
                                                  : new r(function (e) {
                                                        e(t);
                                                    })
                                              ).then(a, s);
                                    }
                                    u((n = n.apply(e, t || [])).next());
                                });
                            },
                        r =
                            (e && e.__generator) ||
                            function (e, t) {
                                var r,
                                    n,
                                    i,
                                    o,
                                    a = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & i[0]) throw i[1];
                                            return i[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (o = {next: s(0), throw: s(1), return: s(2)}),
                                    'function' == typeof Symbol &&
                                        (o[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    o
                                );
                                function s(o) {
                                    return function (s) {
                                        return (function (o) {
                                            if (r) throw TypeError('Generator is already executing.');
                                            for (; a; )
                                                try {
                                                    if (
                                                        ((r = 1),
                                                        n &&
                                                            (i =
                                                                2 & o[0]
                                                                    ? n.return
                                                                    : o[0]
                                                                      ? n.throw || ((i = n.return) && i.call(n), 0)
                                                                      : n.next) &&
                                                            !(i = i.call(n, o[1])).done)
                                                    )
                                                        return i;
                                                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                                        case 0:
                                                        case 1:
                                                            i = o;
                                                            break;
                                                        case 4:
                                                            return (a.label++, {value: o[1], done: !1});
                                                        case 5:
                                                            (a.label++, (n = o[1]), (o = [0]));
                                                            continue;
                                                        case 7:
                                                            ((o = a.ops.pop()), a.trys.pop());
                                                            continue;
                                                        default:
                                                            if (
                                                                !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                                                                (6 === o[0] || 2 === o[0])
                                                            ) {
                                                                a = 0;
                                                                continue;
                                                            }
                                                            if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                                                a.label = o[1];
                                                                break;
                                                            }
                                                            if (6 === o[0] && a.label < i[1]) {
                                                                ((a.label = i[1]), (i = o));
                                                                break;
                                                            }
                                                            if (i && a.label < i[2]) {
                                                                ((a.label = i[2]), a.ops.push(o));
                                                                break;
                                                            }
                                                            (i[2] && a.ops.pop(), a.trys.pop());
                                                            continue;
                                                    }
                                                    o = t.call(e, a);
                                                } catch (e) {
                                                    ((o = [6, e]), (n = 0));
                                                } finally {
                                                    r = i = 0;
                                                }
                                            if (5 & o[0]) throw o[1];
                                            return {value: o[0] ? o[1] : void 0, done: !0};
                                        })([o, s]);
                                    };
                                }
                            };
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var n = C(),
                        i = P();
                    e.backOff = function (e, i) {
                        return (
                            void 0 === i && (i = {}),
                            t(this, void 0, void 0, function () {
                                var t;
                                return r(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return ((t = n.getSanitizedOptions(i)), [4, new o(e, t).execute()]);
                                        case 1:
                                            return [2, r.sent()];
                                    }
                                });
                            })
                        );
                    };
                    var o = (function () {
                        function e(e, t) {
                            ((this.request = e), (this.options = t), (this.attemptNumber = 0));
                        }
                        return (
                            (e.prototype.execute = function () {
                                return t(this, void 0, void 0, function () {
                                    var e;
                                    return r(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                if (this.attemptLimitReached) return [3, 7];
                                                t.label = 1;
                                            case 1:
                                                return (t.trys.push([1, 4, , 6]), [4, this.applyDelay()]);
                                            case 2:
                                                return (t.sent(), [4, this.request()]);
                                            case 3:
                                                return [2, t.sent()];
                                            case 4:
                                                return (
                                                    (e = t.sent()),
                                                    this.attemptNumber++,
                                                    [4, this.options.retry(e, this.attemptNumber)]
                                                );
                                            case 5:
                                                if (!t.sent() || this.attemptLimitReached) throw e;
                                                return [3, 6];
                                            case 6:
                                                return [3, 0];
                                            case 7:
                                                throw Error('Something went wrong.');
                                        }
                                    });
                                });
                            }),
                            Object.defineProperty(e.prototype, 'attemptLimitReached', {
                                get: function () {
                                    return this.attemptNumber >= this.options.numOfAttempts;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (e.prototype.applyDelay = function () {
                                return t(this, void 0, void 0, function () {
                                    return r(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, i.DelayFactory(this.options, this.attemptNumber).apply()];
                                            case 1:
                                                return (e.sent(), [2]);
                                        }
                                    });
                                });
                            }),
                            e
                        );
                    })();
                }),
                _ = k((e, t) => {
                    var r = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0;
                    if (!r) throw Error('Unable to find global scope. Are you sure this is running in the browser?');
                    if (!r.AbortController)
                        throw Error(
                            'Could not find "AbortController" in the global scope. You need to polyfill it first',
                        );
                    ((t.exports = r.AbortController), (t.exports.default = r.AbortController));
                }),
                $ = k((e, t) => {
                    t.exports = function (e) {
                        if (0 == arguments.length) throw TypeError('1 argument required, but only 0 present.');
                        if (
                            ((e = (e = `${e}`).replace(/[ \t\n\f\r]/g, '')).length % 4 == 0 &&
                                (e = e.replace(/==?$/, '')),
                            e.length % 4 == 1 || /[^+/0-9A-Za-z]/.test(e))
                        )
                            return null;
                        let t = '',
                            r = 0,
                            n = 0;
                        for (let i = 0; i < e.length; i++)
                            ((r <<= 6),
                                (r |= (function (e) {
                                    let t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
                                        e,
                                    );
                                    return t < 0 ? void 0 : t;
                                })(e[i])),
                                24 === (n += 6) &&
                                    ((t +=
                                        String.fromCharCode((16711680 & r) >> 16) +
                                        String.fromCharCode((65280 & r) >> 8) +
                                        String.fromCharCode(255 & r)),
                                    (r = n = 0)));
                        return (
                            12 === n
                                ? ((r >>= 4), (t += String.fromCharCode(r)))
                                : 18 === n &&
                                  ((r >>= 2),
                                  (t += String.fromCharCode((65280 & r) >> 8) + String.fromCharCode(255 & r))),
                            t
                        );
                    };
                }),
                F = k((e, t) => {
                    t.exports = function (e) {
                        let t;
                        if (0 == arguments.length) throw TypeError('1 argument required, but only 0 present.');
                        for (e = `${e}`, t = 0; t < e.length; t++) if (e.charCodeAt(t) > 255) return null;
                        let r = '';
                        for (t = 0; t < e.length; t += 3) {
                            let n = [void 0, void 0, void 0, void 0];
                            ((n[0] = e.charCodeAt(t) >> 2),
                                (n[1] = (3 & e.charCodeAt(t)) << 4),
                                e.length > t + 1 &&
                                    ((n[1] |= e.charCodeAt(t + 1) >> 4), (n[2] = (15 & e.charCodeAt(t + 1)) << 2)),
                                e.length > t + 2 &&
                                    ((n[2] |= e.charCodeAt(t + 2) >> 6), (n[3] = 63 & e.charCodeAt(t + 2))));
                            for (let e = 0; e < n.length; e++)
                                void 0 === n[e]
                                    ? (r += '=')
                                    : (r += (function (e) {
                                          if (e >= 0 && e < 64)
                                              return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[
                                                  e
                                              ];
                                      })(n[e]));
                        }
                        return r;
                    };
                }),
                q = k((e, t) => {
                    var r = $(),
                        n = F();
                    t.exports = {atob: r, btoa: n};
                }),
                M = k((e, t) => {
                    var n, i;
                    ((n = e),
                        (i = function () {
                            var e = 'millisecond',
                                t = 'second',
                                r = 'minute',
                                n = 'hour',
                                i = 'week',
                                o = 'month',
                                a = 'quarter',
                                s = 'year',
                                u = 'date',
                                c = 'Invalid Date',
                                l =
                                    /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                                d =
                                    /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                                h = function (e, t, r) {
                                    var n = String(e);
                                    return !n || n.length >= t ? e : '' + Array(t + 1 - n.length).join(r) + e;
                                },
                                f = 'en',
                                p = {};
                            p[f] = {
                                name: 'en',
                                weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                                months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                                    '_',
                                ),
                            };
                            var m = function (e) {
                                    return e instanceof b;
                                },
                                g = function e(t, r, n) {
                                    var i;
                                    if (!t) return f;
                                    if ('string' == typeof t) {
                                        var o = t.toLowerCase();
                                        (p[o] && (i = o), r && ((p[o] = r), (i = o)));
                                        var a = t.split('-');
                                        if (!i && a.length > 1) return e(a[0]);
                                    } else {
                                        var s = t.name;
                                        ((p[s] = t), (i = s));
                                    }
                                    return (!n && i && (f = i), i || (!n && f));
                                },
                                v = function (e, t) {
                                    if (m(e)) return e.clone();
                                    var r = 'object' == typeof t ? t : {};
                                    return ((r.date = e), (r.args = arguments), new b(r));
                                },
                                y = {
                                    s: h,
                                    z: function (e) {
                                        var t = -e.utcOffset(),
                                            r = Math.abs(t);
                                        return (
                                            (t <= 0 ? '+' : '-') +
                                            h(Math.floor(r / 60), 2, '0') +
                                            ':' +
                                            h(r % 60, 2, '0')
                                        );
                                    },
                                    m: function e(t, r) {
                                        if (t.date() < r.date()) return -e(r, t);
                                        var n = 12 * (r.year() - t.year()) + (r.month() - t.month()),
                                            i = t.clone().add(n, o),
                                            a = r - i < 0,
                                            s = t.clone().add(n + (a ? -1 : 1), o);
                                        return +(-(n + (r - i) / (a ? i - s : s - i)) || 0);
                                    },
                                    a: function (e) {
                                        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
                                    },
                                    p: function (c) {
                                        return (
                                            {M: o, y: s, w: i, d: 'day', D: u, h: n, m: r, s: t, ms: e, Q: a}[c] ||
                                            String(c || '')
                                                .toLowerCase()
                                                .replace(/s$/, '')
                                        );
                                    },
                                    u: function (e) {
                                        return void 0 === e;
                                    },
                                };
                            ((y.l = g),
                                (y.i = m),
                                (y.w = function (e, t) {
                                    return v(e, {locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset});
                                }));
                            var b = (function () {
                                    function h(e) {
                                        ((this.$L = g(e.locale, null, !0)), this.parse(e));
                                    }
                                    var f = h.prototype;
                                    return (
                                        (f.parse = function (e) {
                                            ((this.$d = (function (e) {
                                                var t = e.date,
                                                    r = e.utc;
                                                if (null === t) return new Date(NaN);
                                                if (y.u(t)) return new Date();
                                                if (t instanceof Date) return new Date(t);
                                                if ('string' == typeof t && !/Z$/i.test(t)) {
                                                    var n = t.match(l);
                                                    if (n) {
                                                        var i = n[2] - 1 || 0,
                                                            o = (n[7] || '0').substring(0, 3);
                                                        return r
                                                            ? new Date(
                                                                  Date.UTC(
                                                                      n[1],
                                                                      i,
                                                                      n[3] || 1,
                                                                      n[4] || 0,
                                                                      n[5] || 0,
                                                                      n[6] || 0,
                                                                      o,
                                                                  ),
                                                              )
                                                            : new Date(
                                                                  n[1],
                                                                  i,
                                                                  n[3] || 1,
                                                                  n[4] || 0,
                                                                  n[5] || 0,
                                                                  n[6] || 0,
                                                                  o,
                                                              );
                                                    }
                                                }
                                                return new Date(t);
                                            })(e)),
                                                (this.$x = e.x || {}),
                                                this.init());
                                        }),
                                        (f.init = function () {
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
                                        (f.$utils = function () {
                                            return y;
                                        }),
                                        (f.isValid = function () {
                                            return this.$d.toString() !== c;
                                        }),
                                        (f.isSame = function (e, t) {
                                            var r = v(e);
                                            return this.startOf(t) <= r && r <= this.endOf(t);
                                        }),
                                        (f.isAfter = function (e, t) {
                                            return v(e) < this.startOf(t);
                                        }),
                                        (f.isBefore = function (e, t) {
                                            return this.endOf(t) < v(e);
                                        }),
                                        (f.$g = function (e, t, r) {
                                            return y.u(e) ? this[t] : this.set(r, e);
                                        }),
                                        (f.unix = function () {
                                            return Math.floor(this.valueOf() / 1e3);
                                        }),
                                        (f.valueOf = function () {
                                            return this.$d.getTime();
                                        }),
                                        (f.startOf = function (e, a) {
                                            var c = this,
                                                l = !!y.u(a) || a,
                                                d = y.p(e),
                                                h = function (e, t) {
                                                    var r = y.w(c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y, t, e), c);
                                                    return l ? r : r.endOf('day');
                                                },
                                                f = function (e, t) {
                                                    return y.w(
                                                        c
                                                            .toDate()
                                                            [
                                                                e
                                                            ].apply(c.toDate('s'), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)),
                                                        c,
                                                    );
                                                },
                                                p = this.$W,
                                                m = this.$M,
                                                g = this.$D,
                                                v = 'set' + (this.$u ? 'UTC' : '');
                                            switch (d) {
                                                case s:
                                                    return l ? h(1, 0) : h(31, 11);
                                                case o:
                                                    return l ? h(1, m) : h(0, m + 1);
                                                case i:
                                                    var b = this.$locale().weekStart || 0,
                                                        S = (p < b ? p + 7 : p) - b;
                                                    return h(l ? g - S : g + (6 - S), m);
                                                case 'day':
                                                case u:
                                                    return f(v + 'Hours', 0);
                                                case n:
                                                    return f(v + 'Minutes', 1);
                                                case r:
                                                    return f(v + 'Seconds', 2);
                                                case t:
                                                    return f(v + 'Milliseconds', 3);
                                                default:
                                                    return this.clone();
                                            }
                                        }),
                                        (f.endOf = function (e) {
                                            return this.startOf(e, !1);
                                        }),
                                        (f.$set = function (i, a) {
                                            var c,
                                                l = y.p(i),
                                                d = 'set' + (this.$u ? 'UTC' : ''),
                                                h = (((c = {}).day = d + 'Date'),
                                                (c[u] = d + 'Date'),
                                                (c[o] = d + 'Month'),
                                                (c[s] = d + 'FullYear'),
                                                (c[n] = d + 'Hours'),
                                                (c[r] = d + 'Minutes'),
                                                (c[t] = d + 'Seconds'),
                                                (c[e] = d + 'Milliseconds'),
                                                c)[l],
                                                f = 'day' === l ? this.$D + (a - this.$W) : a;
                                            if (l === o || l === s) {
                                                var p = this.clone().set(u, 1);
                                                (p.$d[h](f),
                                                    p.init(),
                                                    (this.$d = p.set(u, Math.min(this.$D, p.daysInMonth())).$d));
                                            } else h && this.$d[h](f);
                                            return (this.init(), this);
                                        }),
                                        (f.set = function (e, t) {
                                            return this.clone().$set(e, t);
                                        }),
                                        (f.get = function (e) {
                                            return this[y.p(e)]();
                                        }),
                                        (f.add = function (e, a) {
                                            var u,
                                                c = this;
                                            e = Number(e);
                                            var l = y.p(a),
                                                d = function (t) {
                                                    var r = v(c);
                                                    return y.w(r.date(r.date() + Math.round(t * e)), c);
                                                };
                                            if (l === o) return this.set(o, this.$M + e);
                                            if (l === s) return this.set(s, this.$y + e);
                                            if ('day' === l) return d(1);
                                            if (l === i) return d(7);
                                            var h = (((u = {})[r] = 6e4), (u[n] = 36e5), (u[t] = 1e3), u)[l] || 1,
                                                f = this.$d.getTime() + e * h;
                                            return y.w(f, this);
                                        }),
                                        (f.subtract = function (e, t) {
                                            return this.add(-1 * e, t);
                                        }),
                                        (f.format = function (e) {
                                            var t = this,
                                                r = this.$locale();
                                            if (!this.isValid()) return r.invalidDate || c;
                                            var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                                                i = y.z(this),
                                                o = this.$H,
                                                a = this.$m,
                                                s = this.$M,
                                                u = r.weekdays,
                                                l = r.months,
                                                h = function (e, r, i, o) {
                                                    return (e && (e[r] || e(t, n))) || i[r].slice(0, o);
                                                },
                                                f = function (e) {
                                                    return y.s(o % 12 || 12, e, '0');
                                                },
                                                p =
                                                    r.meridiem ||
                                                    function (e, t, r) {
                                                        var n = e < 12 ? 'AM' : 'PM';
                                                        return r ? n.toLowerCase() : n;
                                                    },
                                                m = {
                                                    YY: String(this.$y).slice(-2),
                                                    YYYY: this.$y,
                                                    M: s + 1,
                                                    MM: y.s(s + 1, 2, '0'),
                                                    MMM: h(r.monthsShort, s, l, 3),
                                                    MMMM: h(l, s),
                                                    D: this.$D,
                                                    DD: y.s(this.$D, 2, '0'),
                                                    d: String(this.$W),
                                                    dd: h(r.weekdaysMin, this.$W, u, 2),
                                                    ddd: h(r.weekdaysShort, this.$W, u, 3),
                                                    dddd: u[this.$W],
                                                    H: String(o),
                                                    HH: y.s(o, 2, '0'),
                                                    h: f(1),
                                                    hh: f(2),
                                                    a: p(o, a, !0),
                                                    A: p(o, a, !1),
                                                    m: String(a),
                                                    mm: y.s(a, 2, '0'),
                                                    s: String(this.$s),
                                                    ss: y.s(this.$s, 2, '0'),
                                                    SSS: y.s(this.$ms, 3, '0'),
                                                    Z: i,
                                                };
                                            return n.replace(d, function (e, t) {
                                                return t || m[e] || i.replace(':', '');
                                            });
                                        }),
                                        (f.utcOffset = function () {
                                            return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
                                        }),
                                        (f.diff = function (e, u, c) {
                                            var l,
                                                d = y.p(u),
                                                h = v(e),
                                                f = (h.utcOffset() - this.utcOffset()) * 6e4,
                                                p = this - h,
                                                m = y.m(this, h);
                                            return (
                                                (m =
                                                    (((l = {})[s] = m / 12),
                                                    (l[o] = m),
                                                    (l[a] = m / 3),
                                                    (l[i] = (p - f) / 6048e5),
                                                    (l.day = (p - f) / 864e5),
                                                    (l[n] = p / 36e5),
                                                    (l[r] = p / 6e4),
                                                    (l[t] = p / 1e3),
                                                    l)[d] || p),
                                                c ? m : y.a(m)
                                            );
                                        }),
                                        (f.daysInMonth = function () {
                                            return this.endOf(o).$D;
                                        }),
                                        (f.$locale = function () {
                                            return p[this.$L];
                                        }),
                                        (f.locale = function (e, t) {
                                            if (!e) return this.$L;
                                            var r = this.clone(),
                                                n = g(e, t, !0);
                                            return (n && (r.$L = n), r);
                                        }),
                                        (f.clone = function () {
                                            return y.w(this.$d, this);
                                        }),
                                        (f.toDate = function () {
                                            return new Date(this.valueOf());
                                        }),
                                        (f.toJSON = function () {
                                            return this.isValid() ? this.toISOString() : null;
                                        }),
                                        (f.toISOString = function () {
                                            return this.$d.toISOString();
                                        }),
                                        (f.toString = function () {
                                            return this.$d.toUTCString();
                                        }),
                                        h
                                    );
                                })(),
                                S = b.prototype;
                            return (
                                (v.prototype = S),
                                [
                                    ['$ms', e],
                                    ['$s', t],
                                    ['$m', r],
                                    ['$H', n],
                                    ['$W', 'day'],
                                    ['$M', o],
                                    ['$y', s],
                                    ['$D', u],
                                ].forEach(function (e) {
                                    S[e[1]] = function (t) {
                                        return this.$g(t, e[0], e[1]);
                                    };
                                }),
                                (v.extend = function (e, t) {
                                    return (e.$i || (e(t, b, v), (e.$i = !0)), v);
                                }),
                                (v.locale = g),
                                (v.isDayjs = m),
                                (v.unix = function (e) {
                                    return v(1e3 * e);
                                }),
                                (v.en = p[f]),
                                (v.Ls = p),
                                (v.p = {}),
                                v
                            );
                        }),
                        'object' == typeof e && void 0 !== t
                            ? (t.exports = i())
                            : 'function' == typeof define && r.amdO
                              ? define(i)
                              : ((n = 'undefined' != typeof globalThis ? globalThis : n || self).dayjs = i()));
                }),
                L = k((e, t) => {
                    var n, i;
                    ((n = e),
                        (i = function () {
                            var e = {year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5},
                                t = {};
                            return function (r, n, i) {
                                var o,
                                    a = function (e, r, n) {
                                        void 0 === n && (n = {});
                                        var i,
                                            o,
                                            a,
                                            s,
                                            u = new Date(e);
                                        return (void 0 === (i = n) && (i = {}),
                                        (s = t[(a = r + '|' + (o = i.timeZoneName || 'short'))]) ||
                                            ((s = new Intl.DateTimeFormat('en-US', {
                                                hour12: !1,
                                                timeZone: r,
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                timeZoneName: o,
                                            })),
                                            (t[a] = s)),
                                        s).formatToParts(u);
                                    },
                                    s = function (t, r) {
                                        for (var n = a(t, r), o = [], s = 0; s < n.length; s += 1) {
                                            var u = n[s],
                                                c = u.type,
                                                l = u.value,
                                                d = e[c];
                                            d >= 0 && (o[d] = parseInt(l, 10));
                                        }
                                        var h = o[3],
                                            f =
                                                o[0] +
                                                '-' +
                                                o[1] +
                                                '-' +
                                                o[2] +
                                                ' ' +
                                                (24 === h ? 0 : h) +
                                                ':' +
                                                o[4] +
                                                ':' +
                                                o[5] +
                                                ':000',
                                            p = +t;
                                        return (i.utc(f).valueOf() - (p -= p % 1e3)) / 6e4;
                                    },
                                    u = n.prototype;
                                ((u.tz = function (e, t) {
                                    void 0 === e && (e = o);
                                    var r = this.utcOffset(),
                                        n = this.toDate(),
                                        a = n.toLocaleString('en-US', {timeZone: e}),
                                        s = Math.round((n - new Date(a)) / 1e3 / 60),
                                        u = i(a)
                                            .$set('millisecond', this.$ms)
                                            .utcOffset(-(15 * Math.round(n.getTimezoneOffset() / 15)) - s, !0);
                                    if (t) {
                                        var c = u.utcOffset();
                                        u = u.add(r - c, 'minute');
                                    }
                                    return ((u.$x.$timezone = e), u);
                                }),
                                    (u.offsetName = function (e) {
                                        var t = this.$x.$timezone || i.tz.guess(),
                                            r = a(this.valueOf(), t, {timeZoneName: e}).find(function (e) {
                                                return 'timezonename' === e.type.toLowerCase();
                                            });
                                        return r && r.value;
                                    }));
                                var c = u.startOf;
                                ((u.startOf = function (e, t) {
                                    if (!this.$x || !this.$x.$timezone) return c.call(this, e, t);
                                    var r = i(this.format('YYYY-MM-DD HH:mm:ss:SSS'));
                                    return c.call(r, e, t).tz(this.$x.$timezone, !0);
                                }),
                                    (i.tz = function (e, t, r) {
                                        var n = r && t,
                                            a = r || t || o,
                                            u = s(+i(), a);
                                        if ('string' != typeof e) return i(e).tz(a);
                                        var c = (function (e, t, r) {
                                                var n = e - 60 * t * 1e3,
                                                    i = s(n, r);
                                                if (t === i) return [n, t];
                                                var o = s((n -= 60 * (i - t) * 1e3), r);
                                                return i === o
                                                    ? [n, i]
                                                    : [e - 60 * Math.min(i, o) * 1e3, Math.max(i, o)];
                                            })(i.utc(e, n).valueOf(), u, a),
                                            l = c[0],
                                            d = c[1],
                                            h = i(l).utcOffset(d);
                                        return ((h.$x.$timezone = a), h);
                                    }),
                                    (i.tz.guess = function () {
                                        return Intl.DateTimeFormat().resolvedOptions().timeZone;
                                    }),
                                    (i.tz.setDefault = function (e) {
                                        o = e;
                                    }));
                            };
                        }),
                        'object' == typeof e && void 0 !== t
                            ? (t.exports = i())
                            : 'function' == typeof define && r.amdO
                              ? define(i)
                              : ((n = 'undefined' != typeof globalThis ? globalThis : n || self).dayjs_plugin_timezone =
                                    i()));
                }),
                N = k((e, t) => {
                    var n, i;
                    ((n = e),
                        (i = function () {
                            var e = 'minute',
                                t = /[+-]\d\d(?::?\d\d)?/g,
                                r = /([+-]|\d\d)/g;
                            return function (n, i, o) {
                                var a = i.prototype;
                                ((o.utc = function (e) {
                                    var t = {date: e, utc: !0, args: arguments};
                                    return new i(t);
                                }),
                                    (a.utc = function (t) {
                                        var r = o(this.toDate(), {locale: this.$L, utc: !0});
                                        return t ? r.add(this.utcOffset(), e) : r;
                                    }),
                                    (a.local = function () {
                                        return o(this.toDate(), {locale: this.$L, utc: !1});
                                    }));
                                var s = a.parse;
                                a.parse = function (e) {
                                    (e.utc && (this.$u = !0),
                                        this.$utils().u(e.$offset) || (this.$offset = e.$offset),
                                        s.call(this, e));
                                };
                                var u = a.init;
                                a.init = function () {
                                    if (this.$u) {
                                        var e = this.$d;
                                        ((this.$y = e.getUTCFullYear()),
                                            (this.$M = e.getUTCMonth()),
                                            (this.$D = e.getUTCDate()),
                                            (this.$W = e.getUTCDay()),
                                            (this.$H = e.getUTCHours()),
                                            (this.$m = e.getUTCMinutes()),
                                            (this.$s = e.getUTCSeconds()),
                                            (this.$ms = e.getUTCMilliseconds()));
                                    } else u.call(this);
                                };
                                var c = a.utcOffset;
                                a.utcOffset = function (n, i) {
                                    var o = this.$utils().u;
                                    if (o(n)) return this.$u ? 0 : o(this.$offset) ? c.call(this) : this.$offset;
                                    if (
                                        'string' == typeof n &&
                                        null ===
                                            (n = (function (e) {
                                                void 0 === e && (e = '');
                                                var n = e.match(t);
                                                if (!n) return null;
                                                var i = ('' + n[0]).match(r) || ['-', 0, 0],
                                                    o = i[0],
                                                    a = 60 * +i[1] + +i[2];
                                                return 0 === a ? 0 : '+' === o ? a : -a;
                                            })(n))
                                    )
                                        return this;
                                    var a = 16 >= Math.abs(n) ? 60 * n : n,
                                        s = this;
                                    if (i) return ((s.$offset = a), (s.$u = 0 === n), s);
                                    if (0 !== n) {
                                        var u = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                                        (((s = this.local().add(a + u, e)).$offset = a), (s.$x.$localOffset = u));
                                    } else s = this.utc();
                                    return s;
                                };
                                var l = a.format;
                                ((a.format = function (e) {
                                    var t = e || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '');
                                    return l.call(this, t);
                                }),
                                    (a.valueOf = function () {
                                        var e = this.$utils().u(this.$offset)
                                            ? 0
                                            : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                                        return this.$d.valueOf() - 6e4 * e;
                                    }),
                                    (a.isUTC = function () {
                                        return !!this.$u;
                                    }),
                                    (a.toISOString = function () {
                                        return this.toDate().toISOString();
                                    }),
                                    (a.toString = function () {
                                        return this.toDate().toUTCString();
                                    }));
                                var d = a.toDate;
                                a.toDate = function (e) {
                                    return 's' === e && this.$offset
                                        ? o(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
                                        : d.call(this);
                                };
                                var h = a.diff;
                                a.diff = function (e, t, r) {
                                    if (e && this.$u === e.$u) return h.call(this, e, t, r);
                                    var n = this.local(),
                                        i = o(e).local();
                                    return h.call(n, i, t, r);
                                };
                            };
                        }),
                        'object' == typeof e && void 0 !== t
                            ? (t.exports = i())
                            : 'function' == typeof define && r.amdO
                              ? define(i)
                              : ((n = 'undefined' != typeof globalThis ? globalThis : n || self).dayjs_plugin_utc =
                                    i()));
                }),
                z = k((e, t) => {
                    function r(e) {
                        try {
                            return JSON.stringify(e);
                        } catch {
                            return '"[Circular]"';
                        }
                    }
                    t.exports = function (e, t, n) {
                        var i = (n && n.stringify) || r;
                        if ('object' == typeof e && null !== e) {
                            var o = t.length + 1;
                            if (1 === o) return e;
                            var a = Array(o);
                            a[0] = i(e);
                            for (var s = 1; s < o; s++) a[s] = i(t[s]);
                            return a.join(' ');
                        }
                        if ('string' != typeof e) return e;
                        var u = t.length;
                        if (0 === u) return e;
                        for (var c = '', l = 0, d = -1, h = (e && e.length) || 0, f = 0; f < h; ) {
                            if (37 === e.charCodeAt(f) && f + 1 < h) {
                                switch (((d = d > -1 ? d : 0), e.charCodeAt(f + 1))) {
                                    case 100:
                                    case 102:
                                        if (l >= u || null == t[l]) break;
                                        (d < f && (c += e.slice(d, f)), (c += Number(t[l])), (d = f + 2), f++);
                                        break;
                                    case 105:
                                        if (l >= u || null == t[l]) break;
                                        (d < f && (c += e.slice(d, f)),
                                            (c += Math.floor(Number(t[l]))),
                                            (d = f + 2),
                                            f++);
                                        break;
                                    case 79:
                                    case 111:
                                    case 106:
                                        if (l >= u || void 0 === t[l]) break;
                                        d < f && (c += e.slice(d, f));
                                        var p = typeof t[l];
                                        if ('string' === p) {
                                            ((c += "'" + t[l] + "'"), (d = f + 2), f++);
                                            break;
                                        }
                                        if ('function' === p) {
                                            ((c += t[l].name || '<anonymous>'), (d = f + 2), f++);
                                            break;
                                        }
                                        ((c += i(t[l])), (d = f + 2), f++);
                                        break;
                                    case 115:
                                        if (l >= u) break;
                                        (d < f && (c += e.slice(d, f)), (c += String(t[l])), (d = f + 2), f++);
                                        break;
                                    case 37:
                                        (d < f && (c += e.slice(d, f)), (c += '%'), (d = f + 2), f++, l--);
                                }
                                ++l;
                            }
                            ++f;
                        }
                        return -1 === d ? e : (d < h && (c += e.slice(d)), c);
                    };
                }),
                V = k((e, t) => {
                    var r = z();
                    t.exports = i;
                    var n =
                        (function () {
                            function e(e) {
                                return void 0 !== e && e;
                            }
                            try {
                                return (
                                    'undefined' != typeof globalThis ||
                                        Object.defineProperty(Object.prototype, 'globalThis', {
                                            get: function () {
                                                return (delete Object.prototype.globalThis, (this.globalThis = this));
                                            },
                                            configurable: !0,
                                        }),
                                    globalThis
                                );
                            } catch {
                                return e(self) || e(window) || e(this) || {};
                            }
                        })().console || {};
                    function i(e) {
                        var t, r;
                        (e = e || {}).browser = e.browser || {};
                        let c = e.browser.transmit;
                        if (c && 'function' != typeof c.send)
                            throw Error('pino: transmit option must have a send function');
                        let l = e.browser.write || n;
                        e.browser.write && (e.browser.asObject = !0);
                        let p = e.serializers || {},
                            m = Array.isArray((t = e.browser.serialize))
                                ? t.filter(function (e) {
                                      return '!stdSerializers.err' !== e;
                                  })
                                : !0 === t && Object.keys(p),
                            g = e.browser.serialize;
                        (Array.isArray(e.browser.serialize) &&
                            e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
                            (g = !1),
                            'function' == typeof l && (l.error = l.fatal = l.warn = l.info = l.debug = l.trace = l),
                            (!1 === e.enabled || e.browser.disabled) && (e.level = 'silent'));
                        let v = e.level || 'info',
                            y = Object.create(l);
                        (y.log || (y.log = d),
                            Object.defineProperty(y, 'levelVal', {
                                get: function () {
                                    return 'silent' === this.level ? 1 / 0 : this.levels.values[this.level];
                                },
                            }),
                            Object.defineProperty(y, 'level', {
                                get: function () {
                                    return this._level;
                                },
                                set: function (e) {
                                    if ('silent' !== e && !this.levels.values[e]) throw Error('unknown level ' + e);
                                    ((this._level = e),
                                        o(b, y, 'error', 'log'),
                                        o(b, y, 'fatal', 'error'),
                                        o(b, y, 'warn', 'error'),
                                        o(b, y, 'info', 'log'),
                                        o(b, y, 'debug', 'log'),
                                        o(b, y, 'trace', 'log'));
                                },
                            }));
                        let b = {
                            transmit: c,
                            serialize: m,
                            asObject: e.browser.asObject,
                            levels: ['error', 'fatal', 'warn', 'info', 'debug', 'trace'],
                            timestamp:
                                'function' == typeof (r = e).timestamp ? r.timestamp : !1 === r.timestamp ? h : f,
                        };
                        return (
                            (y.levels = i.levels),
                            (y.level = v),
                            (y.setMaxListeners =
                                y.getMaxListeners =
                                y.emit =
                                y.addListener =
                                y.on =
                                y.prependListener =
                                y.once =
                                y.prependOnceListener =
                                y.removeListener =
                                y.removeAllListeners =
                                y.listeners =
                                y.listenerCount =
                                y.eventNames =
                                y.write =
                                y.flush =
                                    d),
                            (y.serializers = p),
                            (y._serialize = m),
                            (y._stdErrSerialize = g),
                            (y.child = function (t, r) {
                                if (!t) throw Error('missing bindings for child Pino');
                                ((r = r || {}), m && t.serializers && (r.serializers = t.serializers));
                                let n = r.serializers;
                                if (m && n) {
                                    var i = Object.assign({}, p, n),
                                        o = !0 === e.browser.serialize ? Object.keys(i) : m;
                                    (delete t.serializers, a([t], o, i, this._stdErrSerialize));
                                }
                                function l(e) {
                                    ((this._childLevel = (0 | e._childLevel) + 1),
                                        (this.error = s(e, t, 'error')),
                                        (this.fatal = s(e, t, 'fatal')),
                                        (this.warn = s(e, t, 'warn')),
                                        (this.info = s(e, t, 'info')),
                                        (this.debug = s(e, t, 'debug')),
                                        (this.trace = s(e, t, 'trace')),
                                        i && ((this.serializers = i), (this._serialize = o)),
                                        c && (this._logEvent = u([].concat(e._logEvent.bindings, t))));
                                }
                                return ((l.prototype = this), new l(this));
                            }),
                            c && (y._logEvent = u()),
                            y
                        );
                    }
                    function o(e, t, o, s) {
                        var c;
                        let l = Object.getPrototypeOf(t);
                        ((t[o] = t.levelVal > t.levels.values[o] ? d : l[o] ? l[o] : n[o] || n[s] || d),
                            (e.transmit || t[o] !== d) &&
                                (t[o] =
                                    ((c = t[o]),
                                    function () {
                                        let s = e.timestamp(),
                                            l = Array(arguments.length),
                                            d = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                        for (var h, f = 0; f < l.length; f++) l[f] = arguments[f];
                                        if (
                                            (e.serialize &&
                                                !e.asObject &&
                                                a(l, this._serialize, this.serializers, this._stdErrSerialize),
                                            e.asObject
                                                ? c.call(
                                                      d,
                                                      (function (e, t, n, o) {
                                                          e._serialize &&
                                                              a(n, e._serialize, e.serializers, e._stdErrSerialize);
                                                          let s = n.slice(),
                                                              u = s[0],
                                                              c = {};
                                                          (o && (c.time = o), (c.level = i.levels.values[t]));
                                                          let l = (0 | e._childLevel) + 1;
                                                          if ((l < 1 && (l = 1), null !== u && 'object' == typeof u)) {
                                                              for (; l-- && 'object' == typeof s[0]; )
                                                                  Object.assign(c, s.shift());
                                                              u = s.length ? r(s.shift(), s) : void 0;
                                                          } else 'string' == typeof u && (u = r(s.shift(), s));
                                                          return (void 0 !== u && (c.msg = u), c);
                                                      })(this, o, l, s),
                                                  )
                                                : c.apply(d, l),
                                            e.transmit)
                                        ) {
                                            let r,
                                                n,
                                                c,
                                                d,
                                                f,
                                                p,
                                                m = e.transmit.level || t.level,
                                                g = i.levels.values[m],
                                                v = i.levels.values[o];
                                            if (v < g) return;
                                            ((r = (h = {
                                                ts: s,
                                                methodLevel: o,
                                                methodValue: v,
                                                transmitLevel: m,
                                                transmitValue: i.levels.values[e.transmit.level || t.level],
                                                send: e.transmit.send,
                                                val: t.levelVal,
                                            }).send),
                                                (n = h.ts),
                                                (c = h.methodLevel),
                                                (d = h.methodValue),
                                                (f = h.val),
                                                (p = this._logEvent.bindings),
                                                a(
                                                    l,
                                                    this._serialize || Object.keys(this.serializers),
                                                    this.serializers,
                                                    void 0 === this._stdErrSerialize || this._stdErrSerialize,
                                                ),
                                                (this._logEvent.ts = n),
                                                (this._logEvent.messages = l.filter(function (e) {
                                                    return -1 === p.indexOf(e);
                                                })),
                                                (this._logEvent.level.label = c),
                                                (this._logEvent.level.value = d),
                                                r(c, this._logEvent, f),
                                                (this._logEvent = u(p)));
                                        }
                                    })));
                    }
                    function a(e, t, r, n) {
                        for (let o in e)
                            if (n && e[o] instanceof Error) e[o] = i.stdSerializers.err(e[o]);
                            else if ('object' == typeof e[o] && !Array.isArray(e[o]))
                                for (let n in e[o]) t && t.indexOf(n) > -1 && n in r && (e[o][n] = r[n](e[o][n]));
                    }
                    function s(e, t, r) {
                        return function () {
                            let n = Array(1 + arguments.length);
                            n[0] = t;
                            for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
                            return e[r].apply(this, n);
                        };
                    }
                    function u(e) {
                        return {ts: 0, messages: [], bindings: e || [], level: {label: '', value: 0}};
                    }
                    function c() {
                        return {};
                    }
                    function l(e) {
                        return e;
                    }
                    function d() {}
                    function h() {
                        return !1;
                    }
                    function f() {
                        return Date.now();
                    }
                    ((i.levels = {
                        values: {fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10},
                        labels: {10: 'trace', 20: 'debug', 30: 'info', 40: 'warn', 50: 'error', 60: 'fatal'},
                    }),
                        (i.stdSerializers = {
                            mapHttpRequest: c,
                            mapHttpResponse: c,
                            wrapRequestSerializer: l,
                            wrapResponseSerializer: l,
                            wrapErrorSerializer: l,
                            req: c,
                            res: c,
                            err: function (e) {
                                let t = {type: e.constructor.name, msg: e.message, stack: e.stack};
                                for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                                return t;
                            },
                        }),
                        (i.stdTimeFunctions = Object.assign(
                            {},
                            {
                                nullTime: h,
                                epochTime: f,
                                unixTime: function () {
                                    return Math.round(Date.now() / 1e3);
                                },
                                isoTime: function () {
                                    return new Date(Date.now()).toISOString();
                                },
                            },
                        )));
                }),
                H = class extends Error {
                    constructor(e) {
                        (super(e), (this.name = 'SchemaValidationError'));
                    }
                },
                Q = class {
                    constructor(e) {
                        this.definition = e;
                    }
                    validate(e = {}, t = '') {
                        let r = {...this.default, ...e},
                            n = [];
                        for (let e in this.definition) {
                            let t = this.definition[e].validate(r[e]);
                            t && n.push(`${e}: ${t}`);
                        }
                        if (n.length) {
                            let e;
                            throw (
                                (e = `
  The following properties are invalid:

    ${n.join(`
	`)}
  
  ${t}
  `),
                                new H(e)
                            );
                        }
                        return r;
                    }
                    get default() {
                        let e = {};
                        for (let t in this.definition) {
                            let r = this.definition[t].default;
                            void 0 !== r && (e[t] = r);
                        }
                        return e;
                    }
                },
                B = class {
                    constructor(e = {}) {
                        this.baseConfig = e;
                    }
                    validate(e) {
                        return this.baseConfig.required && Y(e) ? 'value is required.' : null;
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
            function W(e) {
                return void 0 === e;
            }
            function Y(e) {
                return W(e) || null === e;
            }
            var G = class {
                constructor(e = {}) {
                    ((this.config = e), (this.value = new B(e)));
                }
                validate(e) {
                    return (
                        this.value.validate(e) ||
                        (W(e) || K(e)
                            ? e < this.config.min
                                ? `minimum value of ${this.config.min} not respected.`
                                : e > this.config.max
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
            };
            function K(e) {
                return 'number' == typeof e && !isNaN(e);
            }
            var J = class {
                constructor(e = {}) {
                    this.value = new B(e);
                }
                validate(e) {
                    return this.value.validate(e) || (W(e) || Z(e) ? null : 'value is not a boolean.');
                }
                get default() {
                    return this.value.default;
                }
                get required() {
                    return this.value.required;
                }
            };
            function Z(e) {
                return 'boolean' == typeof e;
            }
            var X =
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
                ee = class {
                    constructor(e = {}) {
                        ((this.config = {emptyAllowed: !0, url: !1, ...e}), (this.value = new B(this.config)));
                    }
                    validate(e) {
                        let {emptyAllowed: t, url: r, regex: n, constrainTo: i} = this.config;
                        return (
                            this.value.validate(e) ||
                            (W(e)
                                ? null
                                : et(e)
                                  ? t || e.length
                                      ? r && !X.test(e)
                                          ? 'value is not a valid URL.'
                                          : n && !n.test(e)
                                            ? `value did not match provided regex ${n}`
                                            : i && !i.includes(e)
                                              ? `value should be one of: ${i.join(', ')}.`
                                              : null
                                      : 'value is an empty string.'
                                  : 'value is not a string.')
                        );
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                };
            function et(e) {
                return '[object String]' === Object.prototype.toString.call(e);
            }
            var er = class {
                constructor(e = {}) {
                    this.config = {options: {required: !1}, values: {}, ...e};
                }
                validate(e) {
                    if (W(e))
                        return this.config.options.required ? 'value is required and is currently undefined' : null;
                    if (!en(e)) return 'value is not an object';
                    for (let [t, r] of Object.entries(this.config.values))
                        if (r.required && Y(e[t])) return `value does not contain ${t}`;
                    let t = '';
                    for (let [r, n] of Object.entries(this.config.values)) {
                        let i = e[r],
                            o = n.validate(i);
                        null !== o && (t += ' ' + o);
                    }
                    return '' === t ? null : t;
                }
                get default() {}
                get required() {
                    return !!this.config.options.required;
                }
            };
            function en(e) {
                return void 0 !== e && 'object' == typeof e;
            }
            var ei = class {
                    constructor(e = {}) {
                        ((this.config = e), (this.value = new B(this.config)));
                    }
                    validate(e) {
                        if (!Y(e) && !Array.isArray(e)) return 'value is not an array';
                        let t = this.value.validate(e);
                        if (null !== t) return t;
                        if (Y(e)) return null;
                        if (void 0 !== this.config.max && e.length > this.config.max)
                            return `value contains more than ${this.config.max}`;
                        if (void 0 !== this.config.min && e.length < this.config.min)
                            return `value contains less than ${this.config.min}`;
                        if (void 0 !== this.config.each) {
                            let t = '';
                            return (
                                e.forEach((r) => {
                                    this.config.each.required &&
                                        Y(r) &&
                                        (t = `value is null or undefined: ${e.join(',')}`);
                                    let n = this.validatePrimitiveValue(r, this.config.each);
                                    null !== n && (t += ' ' + n);
                                }),
                                '' === t ? null : t
                            );
                        }
                        return null;
                    }
                    validatePrimitiveValue(e, t) {
                        return Z(e) || et(e) || K(e) || en(e) ? t.validate(e) : 'value is not a primitive value';
                    }
                    get default() {}
                    get required() {
                        return this.value.required;
                    }
                },
                eo = (e) => e;
            function ea() {
                return {
                    answerSnippet: '',
                    documentId: {contentIdKey: '', contentIdValue: ''},
                    question: '',
                    relatedQuestions: [],
                    score: 0,
                };
            }
            function es() {
                return {
                    response: {
                        results: [],
                        searchUid: '',
                        totalCountFiltered: 0,
                        facets: [],
                        generateAutomaticFacets: {facets: []},
                        queryCorrections: [],
                        triggers: [],
                        questionAnswer: ea(),
                        pipeline: '',
                        splitTestRun: '',
                        termsToHighlight: {},
                        phrasesToHighlight: {},
                        extendedResults: {},
                    },
                    duration: 0,
                    queryExecuted: '',
                    error: null,
                    automaticallyCorrected: !1,
                    isLoading: !1,
                    results: [],
                    searchResponseId: '',
                    requestId: '',
                    questionAnswer: ea(),
                    extendedResults: {},
                };
            }
            function eu(e) {
                let {url: t, accessToken: r, organizationId: n, authentication: i, ...o} = e;
                return o;
            }
            var ec = (e) => {
                    let {response: t} = e;
                    return t.body ? el(e) : ed(t);
                },
                el = (e) =>
                    void 0 !== e.body.exception
                        ? eh(e)
                        : void 0 !== e.body.statusCode
                          ? e.body
                          : {message: 'unknown', statusCode: 0, type: 'unknown'},
                ed = (e) => {
                    let t = JSON.parse(JSON.stringify(e, Object.getOwnPropertyNames(e)));
                    return {
                        ...t,
                        message: `Client side error: ${t.message || ''}`,
                        statusCode: 400,
                        type: 'ClientError',
                    };
                },
                eh = (e) => ({
                    message: e.body.exception.code,
                    statusCode: e.response.status,
                    type: e.body.exception.code,
                }),
                ef = I(E()),
                ep = I(T()),
                em = class extends Error {
                    constructor() {
                        (super(),
                            (this.name = 'ExpiredToken'),
                            (this.message = 'The token being used to perform the request is expired.'));
                    }
                },
                eg = class extends Error {
                    constructor(e, t) {
                        (super(),
                            (this.name = 'Disconnected'),
                            (this.message = `Client could not connect to the following URL: ${e}`),
                            (this.statusCode = null != t ? t : 0));
                    }
                };
            function ev(e) {
                return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e;
            }
            var ey = class {
                static async call(e) {
                    let t = (function (e) {
                            var t;
                            let {url: r, method: n, requestParams: i, contentType: o, accessToken: a, signal: s} = e,
                                u = 'POST' === e.method || 'PUT' === e.method,
                                c =
                                    ((t = i),
                                    'application/x-www-form-urlencoded' === o
                                        ? 'object' == typeof t && t && Object.values(t).every(ev)
                                            ? (function (e) {
                                                  let t = [];
                                                  for (let r in e) {
                                                      let n = encodeURIComponent(r),
                                                          i = encodeURIComponent(e[r]);
                                                      t.push(`${n}=${i}`);
                                                  }
                                                  return t.join('&');
                                              })(t)
                                            : ''
                                        : JSON.stringify(t));
                            return {
                                url: r,
                                method: n,
                                headers: {'Content-Type': o, Authorization: `Bearer ${a}`, ...e.headers},
                                ...(u && {body: c}),
                                signal: s,
                            };
                        })(e),
                        {origin: r, preprocessRequest: n, logger: i, requestMetadata: o} = e,
                        a = {...t, ...(n ? await n(t, r, o) : {})};
                    i.info(a, 'Platform request');
                    let {url: s, ...u} = a,
                        c = async () => {
                            let e = await (0, ef.default)(s, u);
                            if (429 === e.status) throw e;
                            return e;
                        };
                    try {
                        let e = await (0, ep.backOff)(c, {
                            retry: (e) => {
                                var t;
                                let r = e && ((t = e.status), 429 === t);
                                return (r && i.info('Platform retrying request'), r);
                            },
                        });
                        if (419 === e.status) throw (i.info('Platform renewing token'), new em());
                        if (404 === e.status) throw new eg(s, e.status);
                        return (i.info({response: e, requestInfo: a}, 'Platform response'), e);
                    } catch (e) {
                        return 'Failed to fetch' === e.message ? new eg(s) : e;
                    }
                }
            };
            function eb(e, t) {
                return `https://${e}${t && t.environment && 'prod' !== t.environment ? t.environment : ''}${t && t.region && 'us' !== t.region ? `-${t.region}` : ''}.cloud.coveo.com`;
            }
            function eS(e, t = 'prod') {
                let r = 'prod' === t ? '' : t,
                    n = `https://${e}.org${r}.coveo.com`,
                    i = `${n}/rest/search/v2`;
                return {
                    platform: n,
                    analytics: `https://${e}.analytics.org${r}.coveo.com`,
                    search: i,
                    admin: `https://${e}.admin.org${r}.coveo.com`,
                };
            }
            function ew(e) {
                return (null == e ? void 0 : e.multiRegionSubDomain)
                    ? `https://${e.multiRegionSubDomain}.org.coveo.com`
                    : eb('platform', e);
            }
            var ek = class {
                    constructor() {
                        this.currentAbortController = null;
                    }
                    async enqueue(e, t) {
                        var r;
                        let n = this.currentAbortController,
                            i = (this.currentAbortController =
                                'undefined' == typeof window
                                    ? new (_())()
                                    : 'undefined' == typeof AbortController
                                      ? null
                                      : new AbortController());
                        n && (t.warnOnAbort && t.logger.warn('Cancelling current pending search query'), n.abort());
                        try {
                            return await e(null != (r = null == i ? void 0 : i.signal) ? r : null);
                        } finally {
                            this.currentAbortController === i && (this.currentAbortController = null);
                        }
                    }
                },
                eO = TextDecoder,
                eI = class {
                    constructor(e) {
                        ((this._params = {}), (this._basePath = e));
                    }
                    addParam(e, t) {
                        this._params = {...this.params, [e]: t};
                    }
                    get basePath() {
                        return this._basePath;
                    }
                    get params() {
                        return this._params;
                    }
                    get hasParams() {
                        return Object.entries(this._params).length;
                    }
                    get href() {
                        return this.hasParams
                            ? `${this.basePath}?${Object.entries(this.params)
                                  .map(([e, t]) => `${e}=${encodeURIComponent(t)}`)
                                  .join('&')}`
                            : this.basePath;
                    }
                },
                eE = (e) => /^https:\/\/platform(dev|stg|hipaa)?(-)?(eu|au)?\.cloud\.coveo\.com/.test(e),
                eC = (e, t) => {
                    let r = eD(e);
                    return r && r.organizationId === t ? r : null;
                },
                eD = (e) => {
                    let t = e.match(/^https:\/\/(?<organizationId>\w+)\.org(?<environment>dev|stg|hipaa)?\.coveo\.com/);
                    return (null == t ? void 0 : t.groups) ? t.groups : null;
                },
                eU = (e, t, r, n) => {
                    let i = new eI(`${e.url}${n}`);
                    return (
                        i.addParam('organizationId', e.organizationId),
                        e.authentication && i.addParam('authentication', e.authentication),
                        {accessToken: e.accessToken, method: t, contentType: r, url: i.href, origin: 'searchApiFetch'}
                    );
                },
                eR = async (e, t) => {
                    let r = await ey.call({
                        ...eU(e, 'POST', 'application/x-www-form-urlencoded', '/html'),
                        requestParams: eu(e),
                        requestMetadata: {method: 'html'},
                        ...t,
                    });
                    if (r instanceof Error) throw r;
                    let n =
                            (
                                (r.headers.get('content-type') || '')
                                    .split(';')
                                    .find((e) => -1 !== e.indexOf('charset=')) || ''
                            ).split('=')[1] || 'UTF-8',
                        i = await r.arrayBuffer(),
                        o = new eO(n).decode(i);
                    return 'string' == typeof o ? {success: o} : {error: ec({response: r, body: o})};
                };
            function eA(e, t) {
                if (t && 'AbortError' === e.name)
                    return {error: {statusCode: e.code, type: e.name, message: e.message, ignored: !0}};
                if (e instanceof eg) return {error: {statusCode: e.statusCode, type: e.name, message: e.message}};
                throw e;
            }
            var ex = class {
                    constructor(e) {
                        ((this.options = e),
                            (this.apiCallsQueues = {
                                unknown: new ek(),
                                mainSearch: new ek(),
                                facetValues: new ek(),
                                foldingCollection: new ek(),
                                instantResults: new ek(),
                            }));
                    }
                    async plan(e) {
                        let t = await ey.call({
                            ...eU(e, 'POST', 'application/json', '/plan'),
                            requestParams: eu(e),
                            requestMetadata: {method: 'plan'},
                            ...this.options,
                        });
                        if (t instanceof Error) return eA(t);
                        let r = await t.json();
                        return void 0 !== r.preprocessingOutput ? {success: r} : {error: ec({response: t, body: r})};
                    }
                    async querySuggest(e) {
                        let t = await ey.call({
                            ...eU(e, 'POST', 'application/json', '/querySuggest'),
                            requestMetadata: {method: 'querySuggest'},
                            requestParams: eu(e),
                            ...this.options,
                        });
                        if (t instanceof Error) return eA(t);
                        let r = await t.json(),
                            n = {response: t, body: r};
                        return void 0 !== r.completions
                            ? {success: (await this.options.postprocessQuerySuggestResponseMiddleware(n)).body}
                            : {error: ec(n)};
                    }
                    async search(e, t) {
                        var r;
                        let n;
                        let i = null != (r = null == t ? void 0 : t.origin) ? r : 'unknown',
                            o = await this.apiCallsQueues[i].enqueue(
                                (r) =>
                                    ey.call({
                                        ...eU(e, 'POST', 'application/json', ''),
                                        requestParams: eu(e),
                                        requestMetadata: {method: 'search', origin: null == t ? void 0 : t.origin},
                                        ...this.options,
                                        signal: null != r ? r : void 0,
                                    }),
                                {
                                    logger: this.options.logger,
                                    warnOnAbort: !(null == t ? void 0 : t.disableAbortWarning),
                                },
                            );
                        if (o instanceof Error) return eA(o, null == t ? void 0 : t.disableAbortWarning);
                        let a = await o.json(),
                            s = {response: o, body: a};
                        return eP(a)
                            ? ((s.body =
                                  ((n = ea()),
                                  Y(a.questionAnswer)
                                      ? (a.questionAnswer = n)
                                      : (a.questionAnswer = {...n, ...a.questionAnswer}),
                                  a)),
                              {success: (await this.options.postprocessSearchResponseMiddleware(s)).body})
                            : {error: ec(s)};
                    }
                    async facetSearch(e) {
                        let t = await ey.call({
                            ...eU(e, 'POST', 'application/json', '/facet'),
                            requestParams: eu(e),
                            requestMetadata: {method: 'facetSearch'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return (await this.options.postprocessFacetSearchResponseMiddleware({response: t, body: r}))
                            .body;
                    }
                    async recommendations(e) {
                        let t = await ey.call({
                            ...eU(e, 'POST', 'application/json', ''),
                            requestParams: eu(e),
                            requestMetadata: {method: 'recommendations'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return eP(r) ? {success: r} : {error: ec({response: t, body: r})};
                    }
                    async html(e) {
                        return eR(e, {...this.options});
                    }
                    async productRecommendations(e) {
                        let t = await ey.call({
                            ...eU(e, 'POST', 'application/json', ''),
                            requestParams: eu(e),
                            requestMetadata: {method: 'productRecommendations'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return eP(r) ? {success: r} : {error: ec({response: t, body: r})};
                    }
                    async fieldDescriptions(e) {
                        let t = await ey.call({
                            ...eU(e, 'GET', 'application/json', '/fields'),
                            requestParams: {},
                            requestMetadata: {method: 'fieldDescriptions'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return void 0 !== r.fields ? {success: r} : {error: ec({response: t, body: r})};
                    }
                },
                ej = (e) => void 0 !== e.error;
            function eP(e) {
                return void 0 !== e.results;
            }
            var eT = (e) => e,
                e_ = (e) => e,
                e$ = (e) => e;
            function eF(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                throw Error(
                    '[Immer] minified error nr: ' +
                        e +
                        (r.length
                            ? ' ' +
                              r
                                  .map(function (e) {
                                      return "'" + e + "'";
                                  })
                                  .join(',')
                            : '') +
                        '. Find the full error at: https://bit.ly/3cXEKWf',
                );
            }
            function eq(e) {
                return !!e && !!e[th];
            }
            function eM(e) {
                var t;
                return (
                    !!e &&
                    ((function (e) {
                        if (!e || 'object' != typeof e) return !1;
                        var t = Object.getPrototypeOf(e);
                        if (null === t) return !0;
                        var r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
                        return r === Object || ('function' == typeof r && Function.toString.call(r) === tf);
                    })(e) ||
                        Array.isArray(e) ||
                        !!e[td] ||
                        !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[td]) ||
                        eQ(e) ||
                        eB(e))
                );
            }
            function eL(e, t, r) {
                (void 0 === r && (r = !1),
                    0 === eN(e)
                        ? (r ? Object.keys : tp)(e).forEach(function (n) {
                              (r && 'symbol' == typeof n) || t(n, e[n], e);
                          })
                        : e.forEach(function (r, n) {
                              return t(n, r, e);
                          }));
            }
            function eN(e) {
                var t = e[th];
                return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : eQ(e) ? 2 : eB(e) ? 3 : 0;
            }
            function ez(e, t) {
                return 2 === eN(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
            }
            function eV(e, t, r) {
                var n = eN(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
            }
            function eH(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            }
            function eQ(e) {
                return ts && e instanceof Map;
            }
            function eB(e) {
                return tu && e instanceof Set;
            }
            function eW(e) {
                return e.o || e.t;
            }
            function eY(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                var t = tm(e);
                delete t[th];
                for (var r = tp(t), n = 0; n < r.length; n++) {
                    var i = r[n],
                        o = t[i];
                    (!1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
                        (o.get || o.set) &&
                            (t[i] = {configurable: !0, writable: !0, enumerable: o.enumerable, value: e[i]}));
                }
                return Object.create(Object.getPrototypeOf(e), t);
            }
            function eG(e, t) {
                return (
                    void 0 === t && (t = !1),
                    eJ(e) ||
                        eq(e) ||
                        !eM(e) ||
                        (eN(e) > 1 && (e.set = e.add = e.clear = e.delete = eK),
                        Object.freeze(e),
                        t &&
                            eL(
                                e,
                                function (e, t) {
                                    return eG(t, !0);
                                },
                                !0,
                            )),
                    e
                );
            }
            function eK() {
                eF(2);
            }
            function eJ(e) {
                return null == e || 'object' != typeof e || Object.isFrozen(e);
            }
            function eZ(e) {
                var t = tg[e];
                return (t || eF(18, e), t);
            }
            function eX(e, t) {
                t && (eZ('Patches'), (e.u = []), (e.s = []), (e.v = t));
            }
            function e0(e) {
                (e1(e), e.p.forEach(e5), (e.p = null));
            }
            function e1(e) {
                e === to && (to = e.l);
            }
            function e2(e) {
                return (to = {p: [], l: to, h: e, m: !0, _: 0});
            }
            function e5(e) {
                var t = e[th];
                0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
            }
            function e3(e, t) {
                t._ = t.p.length;
                var r = t.p[0],
                    n = void 0 !== e && e !== r;
                return (
                    t.h.O || eZ('ES5').S(t, e, n),
                    n
                        ? (r[th].P && (e0(t), eF(4)),
                          eM(e) && ((e = e4(t, e)), t.l || e8(t, e)),
                          t.u && eZ('Patches').M(r[th].t, e, t.u, t.s))
                        : (e = e4(t, r, [])),
                    e0(t),
                    t.u && t.v(t.u, t.s),
                    e !== tl ? e : void 0
                );
            }
            function e4(e, t, r) {
                if (eJ(t)) return t;
                var n = t[th];
                if (!n)
                    return (
                        eL(
                            t,
                            function (i, o) {
                                return e6(e, n, t, i, o, r);
                            },
                            !0,
                        ),
                        t
                    );
                if (n.A !== e) return t;
                if (!n.P) return (e8(e, n.t, !0), n.t);
                if (!n.I) {
                    ((n.I = !0), n.A._--);
                    var i = 4 === n.i || 5 === n.i ? (n.o = eY(n.k)) : n.o,
                        o = i,
                        a = !1;
                    (3 === n.i && ((o = new Set(i)), i.clear(), (a = !0)),
                        eL(o, function (t, o) {
                            return e6(e, n, i, t, o, r, a);
                        }),
                        e8(e, i, !1),
                        r && e.u && eZ('Patches').N(n, r, e.u, e.s));
                }
                return n.o;
            }
            function e6(e, t, r, n, i, o, a) {
                if (eq(i)) {
                    var s = e4(e, i, o && t && 3 !== t.i && !ez(t.R, n) ? o.concat(n) : void 0);
                    if ((eV(r, n, s), !eq(s))) return;
                    e.m = !1;
                } else a && r.add(i);
                if (eM(i) && !eJ(i)) {
                    if (!e.h.D && e._ < 1) return;
                    (e4(e, i), (t && t.A.l) || e8(e, i));
                }
            }
            function e8(e, t, r) {
                (void 0 === r && (r = !1), !e.l && e.h.D && e.m && eG(t, r));
            }
            function e9(e, t) {
                var r = e[th];
                return (r ? eW(r) : e)[t];
            }
            function e7(e, t) {
                if (t in e)
                    for (var r = Object.getPrototypeOf(e); r; ) {
                        var n = Object.getOwnPropertyDescriptor(r, t);
                        if (n) return n;
                        r = Object.getPrototypeOf(r);
                    }
            }
            function te(e) {
                e.P || ((e.P = !0), e.l && te(e.l));
            }
            function tt(e) {
                e.o || (e.o = eY(e.t));
            }
            function tr(e, t, r) {
                var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    c,
                    l = eQ(t)
                        ? eZ('MapSet').F(t, r)
                        : eB(t)
                          ? eZ('MapSet').T(t, r)
                          : e.O
                            ? ((o = i =
                                  {
                                      i: (n = Array.isArray(t)) ? 1 : 0,
                                      A: r ? r.A : to,
                                      P: !1,
                                      I: !1,
                                      R: {},
                                      l: r,
                                      t: t,
                                      k: null,
                                      o: null,
                                      j: null,
                                      C: !1,
                                  }),
                              (a = tv),
                              n && ((o = [i]), (a = ty)),
                              (u = (s = Proxy.revocable(o, a)).revoke),
                              (c = s.proxy),
                              (i.k = c),
                              (i.j = u),
                              c)
                            : eZ('ES5').J(t, r);
                return ((r ? r.A : to).p.push(l), l);
            }
            function tn(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e);
                }
                return eY(e);
            }
            var ti,
                to,
                ta = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
                ts = 'undefined' != typeof Map,
                tu = 'undefined' != typeof Set,
                tc = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
                tl = ta ? Symbol.for('immer-nothing') : (((ti = {})['immer-nothing'] = !0), ti),
                td = ta ? Symbol.for('immer-draftable') : '__$immer_draftable',
                th = ta ? Symbol.for('immer-state') : '__$immer_state',
                tf = '' + Object.prototype.constructor,
                tp =
                    'undefined' != typeof Reflect && Reflect.ownKeys
                        ? Reflect.ownKeys
                        : void 0 !== Object.getOwnPropertySymbols
                          ? function (e) {
                                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                            }
                          : Object.getOwnPropertyNames,
                tm =
                    Object.getOwnPropertyDescriptors ||
                    function (e) {
                        var t = {};
                        return (
                            tp(e).forEach(function (r) {
                                t[r] = Object.getOwnPropertyDescriptor(e, r);
                            }),
                            t
                        );
                    },
                tg = {},
                tv = {
                    get: function (e, t) {
                        if (t === th) return e;
                        var r,
                            n,
                            i = eW(e);
                        if (!ez(i, t))
                            return (n = e7(i, t))
                                ? 'value' in n
                                    ? n.value
                                    : null === (r = n.get) || void 0 === r
                                      ? void 0
                                      : r.call(e.k)
                                : void 0;
                        var o = i[t];
                        return e.I || !eM(o) ? o : o === e9(e.t, t) ? (tt(e), (e.o[t] = tr(e.A.h, o, e))) : o;
                    },
                    has: function (e, t) {
                        return t in eW(e);
                    },
                    ownKeys: function (e) {
                        return Reflect.ownKeys(eW(e));
                    },
                    set: function (e, t, r) {
                        var n = e7(eW(e), t);
                        if (null == n ? void 0 : n.set) return (n.set.call(e.k, r), !0);
                        if (!e.P) {
                            var i = e9(eW(e), t),
                                o = null == i ? void 0 : i[th];
                            if (o && o.t === r) return ((e.o[t] = r), (e.R[t] = !1), !0);
                            if (eH(r, i) && (void 0 !== r || ez(e.t, t))) return !0;
                            (tt(e), te(e));
                        }
                        return (
                            (e.o[t] === r && (void 0 !== r || t in e.o)) ||
                                (Number.isNaN(r) && Number.isNaN(e.o[t])) ||
                                ((e.o[t] = r), (e.R[t] = !0)),
                            !0
                        );
                    },
                    deleteProperty: function (e, t) {
                        return (
                            void 0 !== e9(e.t, t) || t in e.t ? ((e.R[t] = !1), tt(e), te(e)) : delete e.R[t],
                            e.o && delete e.o[t],
                            !0
                        );
                    },
                    getOwnPropertyDescriptor: function (e, t) {
                        var r = eW(e),
                            n = Reflect.getOwnPropertyDescriptor(r, t);
                        return (
                            n && {
                                writable: !0,
                                configurable: 1 !== e.i || 'length' !== t,
                                enumerable: n.enumerable,
                                value: r[t],
                            }
                        );
                    },
                    defineProperty: function () {
                        eF(11);
                    },
                    getPrototypeOf: function (e) {
                        return Object.getPrototypeOf(e.t);
                    },
                    setPrototypeOf: function () {
                        eF(12);
                    },
                },
                ty = {};
            (eL(tv, function (e, t) {
                ty[e] = function () {
                    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
                };
            }),
                (ty.deleteProperty = function (e, t) {
                    return ty.set.call(this, e, t, void 0);
                }),
                (ty.set = function (e, t, r) {
                    return tv.set.call(this, e[0], t, r, e[0]);
                }));
            var tb = new ((function () {
                    function e(e) {
                        var t = this;
                        ((this.O = tc),
                            (this.D = !0),
                            (this.produce = function (e, r, n) {
                                if ('function' == typeof e && 'function' != typeof r) {
                                    var i,
                                        o = r;
                                    return (
                                        (r = e),
                                        function (e) {
                                            var n = this;
                                            void 0 === e && (e = o);
                                            for (
                                                var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), s = 1;
                                                s < i;
                                                s++
                                            )
                                                a[s - 1] = arguments[s];
                                            return t.produce(e, function (e) {
                                                var t;
                                                return (t = r).call.apply(t, [n, e].concat(a));
                                            });
                                        }
                                    );
                                }
                                if (
                                    ('function' != typeof r && eF(6),
                                    void 0 !== n && 'function' != typeof n && eF(7),
                                    eM(e))
                                ) {
                                    var a = e2(t),
                                        s = tr(t, e, void 0),
                                        u = !0;
                                    try {
                                        ((i = r(s)), (u = !1));
                                    } finally {
                                        u ? e0(a) : e1(a);
                                    }
                                    return 'undefined' != typeof Promise && i instanceof Promise
                                        ? i.then(
                                              function (e) {
                                                  return (eX(a, n), e3(e, a));
                                              },
                                              function (e) {
                                                  throw (e0(a), e);
                                              },
                                          )
                                        : (eX(a, n), e3(i, a));
                                }
                                if (!e || 'object' != typeof e) {
                                    if (
                                        (void 0 === (i = r(e)) && (i = e),
                                        i === tl && (i = void 0),
                                        t.D && eG(i, !0),
                                        n)
                                    ) {
                                        var c = [],
                                            l = [];
                                        (eZ('Patches').M(e, i, c, l), n(c, l));
                                    }
                                    return i;
                                }
                                eF(21, e);
                            }),
                            (this.produceWithPatches = function (e, r) {
                                if ('function' == typeof e)
                                    return function (r) {
                                        for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                            i[o - 1] = arguments[o];
                                        return t.produceWithPatches(r, function (t) {
                                            return e.apply(void 0, [t].concat(i));
                                        });
                                    };
                                var n,
                                    i,
                                    o = t.produce(e, r, function (e, t) {
                                        ((n = e), (i = t));
                                    });
                                return 'undefined' != typeof Promise && o instanceof Promise
                                    ? o.then(function (e) {
                                          return [e, n, i];
                                      })
                                    : [o, n, i];
                            }),
                            'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                            'boolean' == typeof (null == e ? void 0 : e.autoFreeze) &&
                                this.setAutoFreeze(e.autoFreeze));
                    }
                    var t = e.prototype;
                    return (
                        (t.createDraft = function (e) {
                            (eM(e) || eF(8),
                                eq(e) &&
                                    (eq((t = e)) || eF(22, t),
                                    (e = (function e(t) {
                                        if (!eM(t)) return t;
                                        var r,
                                            n = t[th],
                                            i = eN(t);
                                        if (n) {
                                            if (!n.P && (n.i < 4 || !eZ('ES5').K(n))) return n.t;
                                            ((n.I = !0), (r = tn(t, i)), (n.I = !1));
                                        } else r = tn(t, i);
                                        return (
                                            eL(r, function (t, i) {
                                                var o;
                                                (n && (2 === eN((o = n.t)) ? o.get(t) : o[t]) === i) || eV(r, t, e(i));
                                            }),
                                            3 === i ? new Set(r) : r
                                        );
                                    })(t))));
                            var t,
                                r = e2(this),
                                n = tr(this, e, void 0);
                            return ((n[th].C = !0), e1(r), n);
                        }),
                        (t.finishDraft = function (e, t) {
                            var r = (e && e[th]).A;
                            return (eX(r, t), e3(void 0, r));
                        }),
                        (t.setAutoFreeze = function (e) {
                            this.D = e;
                        }),
                        (t.setUseProxies = function (e) {
                            (e && !tc && eF(20), (this.O = e));
                        }),
                        (t.applyPatches = function (e, t) {
                            for (r = t.length - 1; r >= 0; r--) {
                                var r,
                                    n = t[r];
                                if (0 === n.path.length && 'replace' === n.op) {
                                    e = n.value;
                                    break;
                                }
                            }
                            r > -1 && (t = t.slice(r + 1));
                            var i = eZ('Patches').$;
                            return eq(e)
                                ? i(e, t)
                                : this.produce(e, function (e) {
                                      return i(e, t);
                                  });
                        }),
                        e
                    );
                })())(),
                tS = tb.produce;
            function tw(e) {
                return (tw =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function tk(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    (t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n));
                }
                return r;
            }
            function tO(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? tk(Object(r), !0).forEach(function (t) {
                              !(function (e, t, r) {
                                  var n;
                                  ((n = (function (e, t) {
                                      if ('object' !== tw(e) || null === e) return e;
                                      var r = e[Symbol.toPrimitive];
                                      if (void 0 !== r) {
                                          var n = r.call(e, t || 'default');
                                          if ('object' !== tw(n)) return n;
                                          throw TypeError('@@toPrimitive must return a primitive value.');
                                      }
                                      return ('string' === t ? String : Number)(e);
                                  })(t, 'string')),
                                      (t = 'symbol' === tw(n) ? n : String(n)) in e
                                          ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                            })
                                          : (e[t] = r));
                              })(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : tk(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function tI(e) {
                return (
                    'Minified Redux error #' +
                    e +
                    '; visit https://redux.js.org/Errors?code=' +
                    e +
                    ' for the full message or use the non-minified dev environment for full errors. '
                );
            }
            (tb.produceWithPatches.bind(tb),
                tb.setAutoFreeze.bind(tb),
                tb.setUseProxies.bind(tb),
                tb.applyPatches.bind(tb),
                tb.createDraft.bind(tb),
                tb.finishDraft.bind(tb));
            var tE = ('function' == typeof Symbol && Symbol.observable) || '@@observable',
                tC = function () {
                    return Math.random().toString(36).substring(7).split('').join('.');
                },
                tD = {
                    INIT: '@@redux/INIT' + tC(),
                    REPLACE: '@@redux/REPLACE' + tC(),
                    PROBE_UNKNOWN_ACTION: function () {
                        return '@@redux/PROBE_UNKNOWN_ACTION' + tC();
                    },
                };
            function tU(e) {
                for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                    var i = t[n];
                    'function' == typeof e[i] && (r[i] = e[i]);
                }
                var o,
                    a = Object.keys(r);
                try {
                    !(function (e) {
                        Object.keys(e).forEach(function (t) {
                            var r = e[t];
                            if (void 0 === r(void 0, {type: tD.INIT})) throw Error(tI(12));
                            if (void 0 === r(void 0, {type: tD.PROBE_UNKNOWN_ACTION()})) throw Error(tI(13));
                        });
                    })(r);
                } catch (e) {
                    o = e;
                }
                return function (e, t) {
                    if ((void 0 === e && (e = {}), o)) throw o;
                    for (var n = !1, i = {}, s = 0; s < a.length; s++) {
                        var u = a[s],
                            c = r[u],
                            l = e[u],
                            d = c(l, t);
                        if (void 0 === d) throw Error(tI(14));
                        ((i[u] = d), (n = n || d !== l));
                    }
                    return (n = n || a.length !== Object.keys(e).length) ? i : e;
                };
            }
            function tR() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return 0 === t.length
                    ? function (e) {
                          return e;
                      }
                    : 1 === t.length
                      ? t[0]
                      : t.reduce(function (e, t) {
                            return function () {
                                return e(t.apply(void 0, arguments));
                            };
                        });
            }
            function tA() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return function (e) {
                    return function () {
                        var r = e.apply(void 0, arguments),
                            n = function () {
                                throw Error(tI(15));
                            },
                            i = {
                                getState: r.getState,
                                dispatch: function () {
                                    return n.apply(void 0, arguments);
                                },
                            },
                            o = t.map(function (e) {
                                return e(i);
                            });
                        return ((n = tR.apply(void 0, o)(r.dispatch)), tO(tO({}, r), {}, {dispatch: n}));
                    };
                };
            }
            function tx(e) {
                return function (t) {
                    var r = t.dispatch,
                        n = t.getState;
                    return function (t) {
                        return function (i) {
                            return 'function' == typeof i ? i(r, n, e) : t(i);
                        };
                    };
                };
            }
            var tj = tx();
            tj.withExtraArgument = tx;
            var tP =
                    ((rI = function (e, t) {
                        return (rI =
                            Object.setPrototypeOf ||
                            ({__proto__: []} instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            })(e, t);
                    }),
                    function (e, t) {
                        if ('function' != typeof t && null !== t)
                            throw TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
                        function r() {
                            this.constructor = e;
                        }
                        (rI(e, t),
                            (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
                    }),
                tT = function (e, t) {
                    var r,
                        n,
                        i,
                        o,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = {next: s(0), throw: s(1), return: s(2)}),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function () {
                                return this;
                            }),
                        o
                    );
                    function s(o) {
                        return function (s) {
                            return (function (o) {
                                if (r) throw TypeError('Generator is already executing.');
                                for (; a; )
                                    try {
                                        if (
                                            ((r = 1),
                                            n &&
                                                (i =
                                                    2 & o[0]
                                                        ? n.return
                                                        : o[0]
                                                          ? n.throw || ((i = n.return) && i.call(n), 0)
                                                          : n.next) &&
                                                !(i = i.call(n, o[1])).done)
                                        )
                                            return i;
                                        switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return (a.label++, {value: o[1], done: !1});
                                            case 5:
                                                (a.label++, (n = o[1]), (o = [0]));
                                                continue;
                                            case 7:
                                                ((o = a.ops.pop()), a.trys.pop());
                                                continue;
                                            default:
                                                if (
                                                    !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                                                    (6 === o[0] || 2 === o[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                                    a.label = o[1];
                                                    break;
                                                }
                                                if (6 === o[0] && a.label < i[1]) {
                                                    ((a.label = i[1]), (i = o));
                                                    break;
                                                }
                                                if (i && a.label < i[2]) {
                                                    ((a.label = i[2]), a.ops.push(o));
                                                    break;
                                                }
                                                (i[2] && a.ops.pop(), a.trys.pop());
                                                continue;
                                        }
                                        o = t.call(e, a);
                                    } catch (e) {
                                        ((o = [6, e]), (n = 0));
                                    } finally {
                                        r = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return {value: o[0] ? o[1] : void 0, done: !0};
                            })([o, s]);
                        };
                    }
                },
                t_ = function (e, t) {
                    for (var r = 0, n = t.length, i = e.length; r < n; r++, i++) e[i] = t[r];
                    return e;
                },
                t$ = Object.defineProperty,
                tF = Object.defineProperties,
                tq = Object.getOwnPropertyDescriptors,
                tM = Object.getOwnPropertySymbols,
                tL = Object.prototype.hasOwnProperty,
                tN = Object.prototype.propertyIsEnumerable,
                tz = function (e, t, r) {
                    return t in e ? t$(e, t, {enumerable: !0, configurable: !0, writable: !0, value: r}) : (e[t] = r);
                },
                tV = function (e, t) {
                    for (var r in t || (t = {})) tL.call(t, r) && tz(e, r, t[r]);
                    if (tM)
                        for (var n = 0, i = tM(t); n < i.length; n++) {
                            var r = i[n];
                            tN.call(t, r) && tz(e, r, t[r]);
                        }
                    return e;
                },
                tH = function (e, t) {
                    return tF(e, tq(t));
                },
                tQ =
                    'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                        : function () {
                              if (0 != arguments.length)
                                  return 'object' == typeof arguments[0] ? tR : tR.apply(null, arguments);
                          },
                tB = (function (e) {
                    function t() {
                        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                        var i = e.apply(this, r) || this;
                        return (Object.setPrototypeOf(i, t.prototype), i);
                    }
                    return (
                        tP(t, e),
                        Object.defineProperty(t, Symbol.species, {
                            get: function () {
                                return t;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.concat = function () {
                            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return e.prototype.concat.apply(this, t);
                        }),
                        (t.prototype.prepend = function () {
                            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                            return 1 === e.length && Array.isArray(e[0])
                                ? new (t.bind.apply(t, t_([void 0], e[0].concat(this))))()
                                : new (t.bind.apply(t, t_([void 0], e.concat(this))))();
                        }),
                        t
                    );
                })(Array);
            function tW(e) {
                return eM(e) ? tS(e, function () {}) : e;
            }
            function tY(e, t) {
                function r() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    if (t) {
                        var i = t.apply(void 0, r);
                        if (!i) throw Error('prepareAction did not return an object');
                        return tV(
                            tV({type: e, payload: i.payload}, 'meta' in i && {meta: i.meta}),
                            'error' in i && {error: i.error},
                        );
                    }
                    return {type: e, payload: r[0]};
                }
                return (
                    (r.toString = function () {
                        return '' + e;
                    }),
                    (r.type = e),
                    (r.match = function (t) {
                        return t.type === e;
                    }),
                    r
                );
            }
            function tG(e, t, r, n) {
                void 0 === r && (r = []);
                var i,
                    o,
                    a,
                    s,
                    u,
                    c =
                        'function' == typeof t
                            ? ((o = {}),
                              (a = []),
                              t(
                                  (s = {
                                      addCase: function (e, t) {
                                          var r = 'string' == typeof e ? e : e.type;
                                          if (r in o)
                                              throw Error(
                                                  'addCase cannot be called with two reducers for the same action type',
                                              );
                                          return ((o[r] = t), s);
                                      },
                                      addMatcher: function (e, t) {
                                          return (a.push({matcher: e, reducer: t}), s);
                                      },
                                      addDefaultCase: function (e) {
                                          return ((i = e), s);
                                      },
                                  }),
                              ),
                              [o, a, i])
                            : [t, r, n],
                    l = c[0],
                    d = c[1],
                    h = c[2];
                if ('function' == typeof e)
                    u = function () {
                        return tW(e());
                    };
                else {
                    var f = tW(e);
                    u = function () {
                        return f;
                    };
                }
                function p(e, t) {
                    void 0 === e && (e = u());
                    var r = t_(
                        [l[t.type]],
                        d
                            .filter(function (e) {
                                return (0, e.matcher)(t);
                            })
                            .map(function (e) {
                                return e.reducer;
                            }),
                    );
                    return (
                        0 ===
                            r.filter(function (e) {
                                return !!e;
                            }).length && (r = [h]),
                        r.reduce(function (e, r) {
                            if (r) {
                                if (eq(e)) {
                                    var n = r(e, t);
                                    return void 0 === n ? e : n;
                                }
                                if (eM(e))
                                    return tS(e, function (e) {
                                        return r(e, t);
                                    });
                                var n = r(e, t);
                                if (void 0 === n) {
                                    if (null === e) return e;
                                    throw Error('A case reducer on a non-draftable value must not return undefined');
                                }
                                return n;
                            }
                            return e;
                        }, e)
                    );
                }
                return ((p.getInitialState = u), p);
            }
            var tK = function (e) {
                    void 0 === e && (e = 21);
                    for (var t = '', r = e; r--; )
                        t += 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[
                            (64 * Math.random()) | 0
                        ];
                    return t;
                },
                tJ = ['name', 'message', 'stack', 'code'],
                tZ = function (e, t) {
                    ((this.payload = e), (this.meta = t));
                },
                tX = function (e, t) {
                    ((this.payload = e), (this.meta = t));
                },
                t0 = function (e) {
                    if ('object' == typeof e && null !== e) {
                        for (var t = {}, r = 0; r < tJ.length; r++) {
                            var n = tJ[r];
                            'string' == typeof e[n] && (t[n] = e[n]);
                        }
                        return t;
                    }
                    return {message: String(e)};
                };
            function t1(e, t, r) {
                var n = tY(e + '/fulfilled', function (e, t, r, n) {
                        return {
                            payload: e,
                            meta: tH(tV({}, n || {}), {arg: r, requestId: t, requestStatus: 'fulfilled'}),
                        };
                    }),
                    i = tY(e + '/pending', function (e, t, r) {
                        return {
                            payload: void 0,
                            meta: tH(tV({}, r || {}), {arg: t, requestId: e, requestStatus: 'pending'}),
                        };
                    }),
                    o = tY(e + '/rejected', function (e, t, n, i, o) {
                        return {
                            payload: i,
                            error: ((r && r.serializeError) || t0)(e || 'Rejected'),
                            meta: tH(tV({}, o || {}), {
                                arg: n,
                                requestId: t,
                                rejectedWithValue: !!i,
                                requestStatus: 'rejected',
                                aborted: (null == e ? void 0 : e.name) === 'AbortError',
                                condition: (null == e ? void 0 : e.name) === 'ConditionError',
                            }),
                        };
                    }),
                    a =
                        'undefined' != typeof AbortController
                            ? AbortController
                            : (function () {
                                  function e() {
                                      this.signal = {
                                          aborted: !1,
                                          addEventListener: function () {},
                                          dispatchEvent: function () {
                                              return !1;
                                          },
                                          onabort: function () {},
                                          removeEventListener: function () {},
                                          reason: void 0,
                                          throwIfAborted: function () {},
                                      };
                                  }
                                  return ((e.prototype.abort = function () {}), e);
                              })();
                return Object.assign(
                    function (e) {
                        return function (s, u, c) {
                            var l,
                                d = (null == r ? void 0 : r.idGenerator) ? r.idGenerator(e) : tK(),
                                h = new a(),
                                f = new Promise(function (e, t) {
                                    return h.signal.addEventListener('abort', function () {
                                        return t({name: 'AbortError', message: l || 'Aborted'});
                                    });
                                }),
                                p = !1,
                                m = (function () {
                                    var a, l;
                                    return (
                                        (a = this),
                                        (l = function () {
                                            var a, l, m, g, v;
                                            return tT(this, function (y) {
                                                switch (y.label) {
                                                    case 0:
                                                        var b;
                                                        return (
                                                            y.trys.push([0, 4, , 5]),
                                                            null !==
                                                                (b = g =
                                                                    null == (a = null == r ? void 0 : r.condition)
                                                                        ? void 0
                                                                        : a.call(r, e, {getState: u, extra: c})) &&
                                                            'object' == typeof b &&
                                                            'function' == typeof b.then
                                                                ? [4, g]
                                                                : [3, 2]
                                                        );
                                                    case 1:
                                                        ((g = y.sent()), (y.label = 2));
                                                    case 2:
                                                        if (!1 === g)
                                                            throw {
                                                                name: 'ConditionError',
                                                                message:
                                                                    'Aborted due to condition callback returning false.',
                                                            };
                                                        return (
                                                            (p = !0),
                                                            s(
                                                                i(
                                                                    d,
                                                                    e,
                                                                    null == (l = null == r ? void 0 : r.getPendingMeta)
                                                                        ? void 0
                                                                        : l.call(
                                                                              r,
                                                                              {requestId: d, arg: e},
                                                                              {getState: u, extra: c},
                                                                          ),
                                                                ),
                                                            ),
                                                            [
                                                                4,
                                                                Promise.race([
                                                                    f,
                                                                    Promise.resolve(
                                                                        t(e, {
                                                                            dispatch: s,
                                                                            getState: u,
                                                                            extra: c,
                                                                            requestId: d,
                                                                            signal: h.signal,
                                                                            rejectWithValue: function (e, t) {
                                                                                return new tZ(e, t);
                                                                            },
                                                                            fulfillWithValue: function (e, t) {
                                                                                return new tX(e, t);
                                                                            },
                                                                        }),
                                                                    ).then(function (t) {
                                                                        if (t instanceof tZ) throw t;
                                                                        return t instanceof tX
                                                                            ? n(t.payload, d, e, t.meta)
                                                                            : n(t, d, e);
                                                                    }),
                                                                ]),
                                                            ]
                                                        );
                                                    case 3:
                                                        return ((m = y.sent()), [3, 5]);
                                                    case 4:
                                                        return (
                                                            (m =
                                                                (v = y.sent()) instanceof tZ
                                                                    ? o(null, d, e, v.payload, v.meta)
                                                                    : o(v, d, e)),
                                                            [3, 5]
                                                        );
                                                    case 5:
                                                        return (
                                                            (r &&
                                                                !r.dispatchConditionRejection &&
                                                                o.match(m) &&
                                                                m.meta.condition) ||
                                                                s(m),
                                                            [2, m]
                                                        );
                                                }
                                            });
                                        }),
                                        new Promise(function (e, t) {
                                            var r = function (e) {
                                                    try {
                                                        i(l.next(e));
                                                    } catch (e) {
                                                        t(e);
                                                    }
                                                },
                                                n = function (e) {
                                                    try {
                                                        i(l.throw(e));
                                                    } catch (e) {
                                                        t(e);
                                                    }
                                                },
                                                i = function (t) {
                                                    return t.done ? e(t.value) : Promise.resolve(t.value).then(r, n);
                                                };
                                            i((l = l.apply(a, null)).next());
                                        })
                                    );
                                })();
                            return Object.assign(m, {
                                abort: function (e) {
                                    p && ((l = e), h.abort());
                                },
                                requestId: d,
                                arg: e,
                                unwrap: function () {
                                    return m.then(t2);
                                },
                            });
                        };
                    },
                    {pending: i, rejected: o, fulfilled: n, typePrefix: e},
                );
            }
            function t2(e) {
                if (e.meta && e.meta.rejectedWithValue) throw e.payload;
                if (e.error) throw e.error;
                return e.payload;
            }
            var t5 = 'listenerMiddleware';
            (tY(t5 + '/add'),
                tY(t5 + '/removeAll'),
                tY(t5 + '/remove'),
                (function () {
                    function e(e, t) {
                        var r = i[e];
                        return (
                            r
                                ? (r.enumerable = t)
                                : (i[e] = r =
                                      {
                                          configurable: !0,
                                          enumerable: t,
                                          get: function () {
                                              var t = this[th];
                                              return tv.get(t, e);
                                          },
                                          set: function (t) {
                                              var r = this[th];
                                              tv.set(r, e, t);
                                          },
                                      }),
                            r
                        );
                    }
                    function t(e) {
                        for (var t = e.length - 1; t >= 0; t--) {
                            var i = e[t][th];
                            if (!i.P)
                                switch (i.i) {
                                    case 5:
                                        n(i) && te(i);
                                        break;
                                    case 4:
                                        r(i) && te(i);
                                }
                        }
                    }
                    function r(e) {
                        for (var t = e.t, r = e.k, n = tp(r), i = n.length - 1; i >= 0; i--) {
                            var o = n[i];
                            if (o !== th) {
                                var a = t[o];
                                if (void 0 === a && !ez(t, o)) return !0;
                                var s = r[o],
                                    u = s && s[th];
                                if (u ? u.t !== a : !eH(s, a)) return !0;
                            }
                        }
                        var c = !!t[th];
                        return n.length !== tp(t).length + (c ? 0 : 1);
                    }
                    function n(e) {
                        var t = e.k;
                        if (t.length !== e.t.length) return !0;
                        var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
                        if (r && !r.get) return !0;
                        for (var n = 0; n < t.length; n++) if (!t.hasOwnProperty(n)) return !0;
                        return !1;
                    }
                    var i = {};
                    tg.ES5 ||
                        (tg.ES5 = {
                            J: function (t, r) {
                                var n = Array.isArray(t),
                                    i = (function (t, r) {
                                        if (t) {
                                            for (var n = Array(r.length), i = 0; i < r.length; i++)
                                                Object.defineProperty(n, '' + i, e(i, !0));
                                            return n;
                                        }
                                        var o = tm(r);
                                        delete o[th];
                                        for (var a = tp(o), s = 0; s < a.length; s++) {
                                            var u = a[s];
                                            o[u] = e(u, t || !!o[u].enumerable);
                                        }
                                        return Object.create(Object.getPrototypeOf(r), o);
                                    })(n, t),
                                    o = {
                                        i: n ? 5 : 4,
                                        A: r ? r.A : to,
                                        P: !1,
                                        I: !1,
                                        R: {},
                                        l: r,
                                        t: t,
                                        k: i,
                                        o: null,
                                        g: !1,
                                        C: !1,
                                    };
                                return (Object.defineProperty(i, th, {value: o, writable: !0}), i);
                            },
                            S: function (e, r, i) {
                                i
                                    ? eq(r) && r[th].A === e && t(e.p)
                                    : (e.u &&
                                          (function e(t) {
                                              if (t && 'object' == typeof t) {
                                                  var r = t[th];
                                                  if (r) {
                                                      var i = r.t,
                                                          o = r.k,
                                                          a = r.R,
                                                          s = r.i;
                                                      if (4 === s)
                                                          (eL(o, function (t) {
                                                              t !== th &&
                                                                  (void 0 !== i[t] || ez(i, t)
                                                                      ? a[t] || e(o[t])
                                                                      : ((a[t] = !0), te(r)));
                                                          }),
                                                              eL(i, function (e) {
                                                                  void 0 !== o[e] || ez(o, e) || ((a[e] = !1), te(r));
                                                              }));
                                                      else if (5 === s) {
                                                          if ((n(r) && (te(r), (a.length = !0)), o.length < i.length))
                                                              for (var u = o.length; u < i.length; u++) a[u] = !1;
                                                          else for (var c = i.length; c < o.length; c++) a[c] = !0;
                                                          for (var l = Math.min(o.length, i.length), d = 0; d < l; d++)
                                                              (o.hasOwnProperty(d) || (a[d] = !0),
                                                                  void 0 === a[d] && e(o[d]));
                                                      }
                                                  }
                                              }
                                          })(e.p[0]),
                                      t(e.p));
                            },
                            K: function (e) {
                                return 4 === e.i ? r(e) : n(e);
                            },
                        });
                })(),
                I(q()));
            var t3 = new Set(['1', 1, 'yes', !0]);
            function t4() {
                if ('undefined' == typeof navigator || 'undefined' == typeof window) return !1;
                let e = navigator,
                    t = window;
                return [e.globalPrivacyControl, e.doNotTrack, e.msDoNotTrack, t.doNotTrack].some((e) => t3.has(e));
            }
            var t6 = new ee({required: !0, emptyAllowed: !1}),
                t8 = new ee({required: !1, emptyAllowed: !1}),
                t9 = new ee({required: !0, emptyAllowed: !0}),
                t7 = ({message: e, name: t, stack: r}) => ({message: e, name: t, stack: r}),
                re = (e, t) => {
                    if ('required' in t) return {payload: new Q({value: t}).validate({value: e}).value};
                    let r = new er({options: {required: !0}, values: t}).validate(e);
                    if (r) throw new H(r);
                    return {payload: e};
                },
                rt = (e, t) => {
                    try {
                        return re(e, t);
                    } catch (t) {
                        return {payload: e, error: t7(t)};
                    }
                },
                rr = (e, t, r, n) => rn(e, t, r, `Check the options of ${n}`, 'Controller initialization error'),
                rn = (e, t, r, n, i) => {
                    try {
                        return t.validate(r, n);
                    } catch (t) {
                        throw (e.logger.error(t, i), t);
                    }
                },
                ri = () => t8,
                ro = () => t6,
                ra = tY('configuration/updateBasicConfiguration', (e) =>
                    rt(e, {accessToken: t8, organizationId: t8, platformUrl: t8}),
                ),
                rs = tY('configuration/updateSearchConfiguration', (e) =>
                    rt(e, {
                        apiBaseUrl: t8,
                        pipeline: new ee({required: !1, emptyAllowed: !0}),
                        searchHub: t8,
                        timezone: t8,
                        locale: t8,
                        authenticationProviders: new ei({required: !1, each: t6}),
                    }),
                ),
                ru = tY(
                    'configuration/updateAnalyticsConfiguration',
                    (e) => (
                        t4() && (e.enabled = !1),
                        rt(e, {
                            enabled: new J({default: !0}),
                            originContext: ri(),
                            originLevel2: ri(),
                            originLevel3: ri(),
                            apiBaseUrl: t8,
                            runtimeEnvironment: new B(),
                            anonymous: new J({default: !1}),
                            deviceId: t8,
                            userDisplayName: t8,
                            documentLocation: t8,
                        })
                    ),
                ),
                rc = tY('configuration/analytics/disable'),
                rl = tY('configuration/analytics/enable'),
                rd = tY('configuration/analytics/originlevel2', (e) => rt(e, {originLevel2: ro()})),
                rh = tY('configuration/analytics/originlevel3', (e) => rt(e, {originLevel3: ro()}));
            function rf(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        0 > t.indexOf(n[i]) &&
                            Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                            (r[n[i]] = e[n[i]]);
                return r;
            }
            function rp(e, t, r, n) {
                return new (r || (r = Promise))(function (i, o) {
                    function a(e) {
                        try {
                            u(n.next(e));
                        } catch (e) {
                            o(e);
                        }
                    }
                    function s(e) {
                        try {
                            u(n.throw(e));
                        } catch (e) {
                            o(e);
                        }
                    }
                    function u(e) {
                        var t;
                        e.done
                            ? i(e.value)
                            : ((t = e.value) instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t);
                                    })
                              ).then(a, s);
                    }
                    u((n = n.apply(e, t || [])).next());
                });
            }
            function rm() {
                return 'undefined' != typeof navigator;
            }
            function rg() {
                return 'undefined' != typeof document;
            }
            function rv() {
                try {
                    return 'undefined' != typeof localStorage;
                } catch {
                    return !1;
                }
            }
            function ry() {
                return rm() && navigator.cookieEnabled;
            }
            (((rE = rC || (rC = {})).search = 'search'),
                (rE.click = 'click'),
                (rE.custom = 'custom'),
                (rE.view = 'view'),
                (rE.collect = 'collect'));
            var rb = [rC.click, rC.custom, rC.search, rC.view],
                rS = (e, t) =>
                    -1 !== rb.indexOf(e)
                        ? Object.assign(
                              {
                                  language: rg() ? document.documentElement.lang : 'unknown',
                                  userAgent: rm() ? navigator.userAgent : 'unknown',
                              },
                              t,
                          )
                        : t,
                rw = class {
                    static set(e, t, r) {
                        var n, i, o;
                        (r && (n = new Date()).setTime(n.getTime() + r),
                            -1 === (o = window.location.hostname).indexOf('.')
                                ? rk(e, t, n)
                                : rk(e, t, n, (i = o.split('.'))[i.length - 2] + '.' + i[i.length - 1]));
                    }
                    static get(e) {
                        for (var t = e + '=', r = document.cookie.split(';'), n = 0; n < r.length; n++) {
                            var i = r[n];
                            if (0 === (i = i.replace(/^\s+/, '')).lastIndexOf(t, 0))
                                return i.substring(t.length, i.length);
                        }
                        return null;
                    }
                    static erase(e) {
                        rw.set(e, '', -1);
                    }
                };
            function rk(e, t, r, n) {
                document.cookie =
                    `${e}=${t}` +
                    (r ? `;expires=${r.toUTCString()}` : '') +
                    (n ? `;domain=${n}` : '') +
                    ';path=/;SameSite=Lax';
            }
            var rO = class {
                getItem(e) {
                    return rw.get(`${rO.prefix}${e}`);
                }
                removeItem(e) {
                    rw.erase(`${rO.prefix}${e}`);
                }
                setItem(e, t, r) {
                    rw.set(`${rO.prefix}${e}`, t, r);
                }
            };
            rO.prefix = 'coveo_';
            var rI,
                rE,
                rC,
                rD,
                rU = class {
                    constructor() {
                        this.cookieStorage = new rO();
                    }
                    getItem(e) {
                        return localStorage.getItem(e) || this.cookieStorage.getItem(e);
                    }
                    removeItem(e) {
                        (this.cookieStorage.removeItem(e), localStorage.removeItem(e));
                    }
                    setItem(e, t) {
                        (localStorage.setItem(e, t), this.cookieStorage.setItem(e, t, 31556926e3));
                    }
                },
                rR = class {
                    getItem(e) {
                        return null;
                    }
                    removeItem(e) {}
                    setItem(e, t) {}
                },
                rA = '__coveo.analytics.history',
                rx = class {
                    constructor(e) {
                        this.store =
                            e ||
                            (rv()
                                ? localStorage
                                : ry()
                                  ? new rO()
                                  : !(function () {
                                          try {
                                              return 'undefined' != typeof sessionStorage;
                                          } catch {
                                              return !1;
                                          }
                                      })()
                                    ? new rR()
                                    : sessionStorage);
                    }
                    addElement(e) {
                        ((e.internalTime = new Date().getTime()), (e = this.cropQueryElement(this.stripEmptyQuery(e))));
                        let t = this.getHistoryWithInternalTime();
                        null != t ? this.isValidEntry(e) && this.setHistory([e].concat(t)) : this.setHistory([e]);
                    }
                    addElementAsync(e) {
                        return rp(this, void 0, void 0, function* () {
                            ((e.internalTime = new Date().getTime()),
                                (e = this.cropQueryElement(this.stripEmptyQuery(e))));
                            let t = yield this.getHistoryWithInternalTimeAsync();
                            null != t ? this.isValidEntry(e) && this.setHistory([e].concat(t)) : this.setHistory([e]);
                        });
                    }
                    getHistory() {
                        let e = this.getHistoryWithInternalTime();
                        return this.stripEmptyQueries(this.stripInternalTime(e));
                    }
                    getHistoryAsync() {
                        return rp(this, void 0, void 0, function* () {
                            let e = yield this.getHistoryWithInternalTimeAsync();
                            return this.stripEmptyQueries(this.stripInternalTime(e));
                        });
                    }
                    getHistoryWithInternalTime() {
                        try {
                            let e = this.store.getItem(rA);
                            return e && 'string' == typeof e ? JSON.parse(e) : [];
                        } catch {
                            return [];
                        }
                    }
                    getHistoryWithInternalTimeAsync() {
                        return rp(this, void 0, void 0, function* () {
                            try {
                                let e = yield this.store.getItem(rA);
                                return e ? JSON.parse(e) : [];
                            } catch {
                                return [];
                            }
                        });
                    }
                    setHistory(e) {
                        try {
                            this.store.setItem(rA, JSON.stringify(e.slice(0, 20)));
                        } catch {}
                    }
                    clear() {
                        try {
                            this.store.removeItem(rA);
                        } catch {}
                    }
                    getMostRecentElement() {
                        let e = this.getHistoryWithInternalTime();
                        return Array.isArray(e)
                            ? e.sort((e, t) => (t.internalTime || 0) - (e.internalTime || 0))[0]
                            : null;
                    }
                    cropQueryElement(e) {
                        return (
                            e.name && e.value && 'query' === e.name.toLowerCase() && (e.value = e.value.slice(0, 75)),
                            e
                        );
                    }
                    isValidEntry(e) {
                        let t = this.getMostRecentElement();
                        return !t || t.value != e.value || (e.internalTime || 0) - (t.internalTime || 0) > 6e4;
                    }
                    stripInternalTime(e) {
                        return Array.isArray(e)
                            ? e.map((e) => {
                                  let {name: t, time: r, value: n} = e;
                                  return {name: t, time: r, value: n};
                              })
                            : [];
                    }
                    stripEmptyQuery(e) {
                        let {name: t, time: r, value: n} = e;
                        return t && 'string' == typeof n && 'query' === t.toLowerCase() && '' === n.trim()
                            ? {name: t, time: r}
                            : e;
                    }
                    stripEmptyQueries(e) {
                        return e.map((e) => this.stripEmptyQuery(e));
                    }
                },
                rj = Object.freeze({
                    __proto__: null,
                    HistoryStore: rx,
                    MAX_NUMBER_OF_HISTORY_ELEMENTS: 20,
                    MAX_VALUE_SIZE: 75,
                    MIN_THRESHOLD_FOR_DUPLICATE_VALUE: 6e4,
                    STORE_KEY: rA,
                    default: rx,
                }),
                rP = (e, t) =>
                    rp(void 0, void 0, void 0, function* () {
                        return e === rC.view
                            ? (yield rT(t.contentIdValue),
                              Object.assign(
                                  {
                                      location: window.location.toString(),
                                      referrer: document.referrer,
                                      title: document.title,
                                  },
                                  t,
                              ))
                            : t;
                    }),
                rT = (e) =>
                    rp(void 0, void 0, void 0, function* () {
                        let t = new rx(),
                            r = {name: 'PageView', value: e, time: new Date().toISOString()};
                        yield t.addElementAsync(r);
                    }),
                r_ = new Uint8Array(16),
                r$ =
                    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            function rF(e) {
                return 'string' == typeof e && r$.test(e);
            }
            var rq = [];
            for (let e = 0; e < 256; ++e) rq.push((e + 256).toString(16).slice(1));
            function rM(e, t = 0) {
                return (
                    rq[e[t + 0]] +
                    rq[e[t + 1]] +
                    rq[e[t + 2]] +
                    rq[e[t + 3]] +
                    '-' +
                    rq[e[t + 4]] +
                    rq[e[t + 5]] +
                    '-' +
                    rq[e[t + 6]] +
                    rq[e[t + 7]] +
                    '-' +
                    rq[e[t + 8]] +
                    rq[e[t + 9]] +
                    '-' +
                    rq[e[t + 10]] +
                    rq[e[t + 11]] +
                    rq[e[t + 12]] +
                    rq[e[t + 13]] +
                    rq[e[t + 14]] +
                    rq[e[t + 15]]
                ).toLowerCase();
            }
            var rL = {randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)};
            function rN(e, t, r) {
                if (rL.randomUUID && !t && !e) return rL.randomUUID();
                let n =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (
                                !rD &&
                                !(rD =
                                    'undefined' != typeof crypto &&
                                    crypto.getRandomValues &&
                                    crypto.getRandomValues.bind(crypto))
                            )
                                throw Error(
                                    'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
                                );
                            return rD(r_);
                        }
                    )();
                if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = n[e];
                    return t;
                }
                return rM(n);
            }
            function rz(e, t) {
                return (e << t) | (e >>> (32 - t));
            }
            var rV = (function (e, t, r) {
                    function n(e, t, n, i) {
                        var o;
                        if (
                            ('string' == typeof e &&
                                (e = (function (e) {
                                    e = unescape(encodeURIComponent(e));
                                    let t = [];
                                    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
                                    return t;
                                })(e)),
                            'string' == typeof t &&
                                (t = (function (e) {
                                    if (!rF(e)) throw TypeError('Invalid UUID');
                                    let t,
                                        r = new Uint8Array(16);
                                    return (
                                        (r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
                                        (r[1] = (t >>> 16) & 255),
                                        (r[2] = (t >>> 8) & 255),
                                        (r[3] = 255 & t),
                                        (r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
                                        (r[5] = 255 & t),
                                        (r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
                                        (r[7] = 255 & t),
                                        (r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
                                        (r[9] = 255 & t),
                                        (r[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
                                        (r[11] = (t / 4294967296) & 255),
                                        (r[12] = (t >>> 24) & 255),
                                        (r[13] = (t >>> 16) & 255),
                                        (r[14] = (t >>> 8) & 255),
                                        (r[15] = 255 & t),
                                        r
                                    );
                                })(t)),
                            (null === (o = t) || void 0 === o ? void 0 : o.length) !== 16)
                        )
                            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
                        let a = new Uint8Array(16 + e.length);
                        if (
                            (a.set(t),
                            a.set(e, t.length),
                            ((a = r(a))[6] = (15 & a[6]) | 80),
                            (a[8] = (63 & a[8]) | 128),
                            n)
                        ) {
                            i = i || 0;
                            for (let e = 0; e < 16; ++e) n[i + e] = a[e];
                            return n;
                        }
                        return rM(a);
                    }
                    try {
                        n.name = 'v5';
                    } catch {}
                    return (
                        (n.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'),
                        (n.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'),
                        n
                    );
                })(0, 0, function (e) {
                    let t = [1518500249, 1859775393, 2400959708, 3395469782],
                        r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    if ('string' == typeof e) {
                        let t = unescape(encodeURIComponent(e));
                        e = [];
                        for (let r = 0; r < t.length; ++r) e.push(t.charCodeAt(r));
                    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                    e.push(128);
                    let n = Math.ceil((e.length / 4 + 2) / 16),
                        i = Array(n);
                    for (let t = 0; t < n; ++t) {
                        let r = new Uint32Array(16);
                        for (let n = 0; n < 16; ++n)
                            r[n] =
                                (e[64 * t + 4 * n] << 24) |
                                (e[64 * t + 4 * n + 1] << 16) |
                                (e[64 * t + 4 * n + 2] << 8) |
                                e[64 * t + 4 * n + 3];
                        i[t] = r;
                    }
                    ((i[n - 1][14] = ((e.length - 1) * 8) / 4294967296),
                        (i[n - 1][14] = Math.floor(i[n - 1][14])),
                        (i[n - 1][15] = ((e.length - 1) * 8) & 4294967295));
                    for (let e = 0; e < n; ++e) {
                        let n = new Uint32Array(80);
                        for (let t = 0; t < 16; ++t) n[t] = i[e][t];
                        for (let e = 16; e < 80; ++e) n[e] = rz(n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16], 1);
                        let o = r[0],
                            a = r[1],
                            s = r[2],
                            u = r[3],
                            c = r[4];
                        for (let e = 0; e < 80; ++e) {
                            let r = Math.floor(e / 20),
                                i =
                                    (rz(o, 5) +
                                        (function (e, t, r, n) {
                                            switch (e) {
                                                case 0:
                                                    return (t & r) ^ (~t & n);
                                                case 1:
                                                case 3:
                                                    return t ^ r ^ n;
                                                case 2:
                                                    return (t & r) ^ (t & n) ^ (r & n);
                                            }
                                        })(r, a, s, u) +
                                        c +
                                        t[r] +
                                        n[e]) >>>
                                    0;
                            ((c = u), (u = s), (s = rz(a, 30) >>> 0), (a = o), (o = i));
                        }
                        ((r[0] = (r[0] + o) >>> 0),
                            (r[1] = (r[1] + a) >>> 0),
                            (r[2] = (r[2] + s) >>> 0),
                            (r[3] = (r[3] + u) >>> 0),
                            (r[4] = (r[4] + c) >>> 0));
                    }
                    return [
                        (r[0] >> 24) & 255,
                        (r[0] >> 16) & 255,
                        (r[0] >> 8) & 255,
                        255 & r[0],
                        (r[1] >> 24) & 255,
                        (r[1] >> 16) & 255,
                        (r[1] >> 8) & 255,
                        255 & r[1],
                        (r[2] >> 24) & 255,
                        (r[2] >> 16) & 255,
                        (r[2] >> 8) & 255,
                        255 & r[2],
                        (r[3] >> 24) & 255,
                        (r[3] >> 16) & 255,
                        (r[3] >> 8) & 255,
                        255 & r[3],
                        (r[4] >> 24) & 255,
                        (r[4] >> 16) & 255,
                        (r[4] >> 8) & 255,
                        255 & r[4],
                    ];
                }),
                rH = '2.28.12',
                rQ = class {
                    constructor(e, t) {
                        if (!rF(e)) throw Error('Not a valid uuid');
                        ((this.clientId = e), (this.creationDate = Math.floor(t / 1e3)));
                    }
                    toString() {
                        return this.clientId.replace(/-/g, '') + '.' + this.creationDate.toString();
                    }
                    get expired() {
                        let e = Math.floor(Date.now() / 1e3) - this.creationDate;
                        return e < 0 || e > rQ.expirationTime;
                    }
                    validate(e, t) {
                        return !this.expired && this.matchReferrer(e, t);
                    }
                    matchReferrer(e, t) {
                        try {
                            let r = new URL(e);
                            return t.some((e) =>
                                RegExp(e.replace(/\\/g, '\\\\').replace(/\./g, '\\.').replace(/\*/g, '.*') + '$').test(
                                    r.host,
                                ),
                            );
                        } catch {
                            return !1;
                        }
                    }
                    static fromString(e) {
                        let t = e.split('.');
                        if (2 !== t.length) return null;
                        let [r, n] = t;
                        if (32 !== r.length || isNaN(parseInt(n))) return null;
                        let i =
                            r.substring(0, 8) +
                            '-' +
                            r.substring(8, 12) +
                            '-' +
                            r.substring(12, 16) +
                            '-' +
                            r.substring(16, 20) +
                            '-' +
                            r.substring(20, 32);
                        return rF(i) ? new rQ(i, 1e3 * Number.parseInt(n)) : null;
                    }
                };
            ((rQ.cvo_cid = 'cvo_cid'), (rQ.expirationTime = 120));
            var rB = Object.keys;
            function rW(e) {
                return null !== e && 'object' == typeof e && !Array.isArray(e);
            }
            var rY = {
                    id: 'svc_ticket_id',
                    subject: 'svc_ticket_subject',
                    description: 'svc_ticket_description',
                    category: 'svc_ticket_category',
                    productId: 'svc_ticket_product_id',
                    custom: 'svc_ticket_custom',
                },
                rG = RegExp(`^(${[...rB(rY).map((e) => rY[e])].join('|')}$)`),
                rK = [(e) => rG.test(e)],
                rJ = {
                    id: 'id',
                    name: 'nm',
                    brand: 'br',
                    category: 'ca',
                    variant: 'va',
                    price: 'pr',
                    quantity: 'qt',
                    coupon: 'cc',
                    position: 'ps',
                    group: 'group',
                },
                rZ = {
                    id: 'id',
                    name: 'nm',
                    brand: 'br',
                    category: 'ca',
                    variant: 'va',
                    position: 'ps',
                    price: 'pr',
                    group: 'group',
                },
                rX = {action: 'pa', list: 'pal', listSource: 'pls'},
                r0 = {
                    id: 'ti',
                    revenue: 'tr',
                    tax: 'tt',
                    shipping: 'ts',
                    coupon: 'tcc',
                    affiliation: 'ta',
                    step: 'cos',
                    option: 'col',
                },
                r1 = {id: 'quoteId', affiliation: 'quoteAffiliation'},
                r2 = {id: 'reviewId', rating: 'reviewRating', comment: 'reviewComment'},
                r5 = {
                    add: rX,
                    bookmark_add: rX,
                    bookmark_remove: rX,
                    click: rX,
                    checkout: rX,
                    checkout_option: rX,
                    detail: rX,
                    impression: rX,
                    remove: rX,
                    refund: Object.assign(Object.assign({}, rX), r0),
                    purchase: Object.assign(Object.assign({}, rX), r0),
                    quickview: rX,
                    quote: Object.assign(Object.assign({}, rX), r1),
                    review: Object.assign(Object.assign({}, rX), r2),
                },
                r3 = rB(rJ).map((e) => rJ[e]),
                r4 = rB(rZ).map((e) => rZ[e]),
                r6 = rB(rX).map((e) => rX[e]),
                r8 = rB(r0).map((e) => r0[e]),
                r9 = rB(r2).map((e) => r2[e]),
                r7 = rB(r1).map((e) => r1[e]),
                ne = [...r3, 'custom'].join('|'),
                nt = [...r4, 'custom'].join('|'),
                nr = '(pr[0-9]+)',
                nn = '(il[0-9]+pi[0-9]+)',
                ni = RegExp(`^${nr}(${ne})$`),
                no = RegExp(`^(${nn}(${nt}))|(il[0-9]+nm)$`),
                na = RegExp(`^(${r6.join('|')})$`),
                ns = RegExp(`^(${r8.join('|')})$`),
                nu = RegExp(`^${nr}custom$`),
                nc = RegExp(`^${nn}custom$`),
                nl = RegExp(
                    `^(${['loyaltyCardId', 'loyaltyTier', 'thirdPartyPersona', 'companyName', 'favoriteStore', 'storeName', 'userIndustry', 'userRole', 'userDepartment', 'businessUnit', ...r9, ...r7].join('|')})$`,
                ),
                nd = [(e) => no.test(e), (e) => ni.test(e), (e) => na.test(e), (e) => ns.test(e), (e) => nl.test(e)],
                nh = [nu, nc],
                nf = Object.assign(
                    Object.assign(
                        {},
                        Object.assign(
                            Object.assign(
                                Object.assign(Object.assign({}, {anonymizeIp: 'aip'}), {
                                    eventCategory: 'ec',
                                    eventAction: 'ea',
                                    eventLabel: 'el',
                                    eventValue: 'ev',
                                    page: 'dp',
                                    visitorId: 'cid',
                                    clientId: 'cid',
                                    userId: 'uid',
                                    currencyCode: 'cu',
                                }),
                                {
                                    hitType: 't',
                                    pageViewId: 'pid',
                                    encoding: 'de',
                                    location: 'dl',
                                    referrer: 'dr',
                                    screenColor: 'sd',
                                    screenResolution: 'sr',
                                    title: 'dt',
                                    userAgent: 'ua',
                                    language: 'ul',
                                    eventId: 'z',
                                    time: 'tm',
                                },
                            ),
                            [
                                'contentId',
                                'contentIdKey',
                                'contentType',
                                'searchHub',
                                'tab',
                                'searchUid',
                                'permanentId',
                                'contentLocale',
                                'trackingId',
                            ].reduce((e, t) => Object.assign(Object.assign({}, e), {[t]: t}), {}),
                        ),
                    ),
                    {svcAction: 'svc_action', svcActionData: 'svc_action_data'},
                ),
                np = (e) => {
                    let t = (!!e.action && r5[e.action]) || {};
                    return rB(e).reduce((r, n) => {
                        let i = t[n] || nf[n] || n;
                        return Object.assign(Object.assign({}, r), {[i]: e[n]});
                    }, {});
                },
                nm = rB(nf).map((e) => nf[e]),
                ng = (e) => -1 !== nm.indexOf(e),
                nv = (e) => 'custom' === e,
                ny = (e) => [...nd, ...rK, ng, nv].some((t) => t(e)),
                nb = (e) =>
                    rB(e).reduce((t, r) => {
                        let n = nS(r);
                        return n
                            ? Object.assign(Object.assign({}, t), nw(n, e[r]))
                            : Object.assign(Object.assign({}, t), {[r]: e[r]});
                    }, {}),
                nS = (e) => {
                    let t;
                    return (
                        [...nh].every((r) => {
                            var n;
                            return !(t = null === (n = r.exec(e)) || void 0 === n ? void 0 : n[1]);
                        }),
                        t
                    );
                },
                nw = (e, t) => rB(t).reduce((r, n) => Object.assign(Object.assign({}, r), {[`${e}${n}`]: t[n]}), {}),
                nk = class {
                    constructor(e) {
                        this.opts = e;
                    }
                    sendEvent(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            if (!navigator.sendBeacon)
                                throw Error(
                                    'navigator.sendBeacon is not supported in this browser. Consider adding a polyfill like "sendbeacon-polyfill".',
                                );
                            let {baseUrl: r, preprocessRequest: n} = this.opts,
                                i = this.encodeForEventType(e, t),
                                o = {
                                    url: `${r}/analytics/${e}?${yield this.getQueryParamsForEventType(e)}`,
                                    body: new Blob([i], {type: 'application/x-www-form-urlencoded'}),
                                },
                                {url: a, body: s} = Object.assign(
                                    Object.assign({}, o),
                                    n ? yield n(o, 'analyticsBeacon') : {},
                                );
                            (console.log(`Sending beacon for "${e}" with: `, JSON.stringify(t)),
                                navigator.sendBeacon(a, s));
                        });
                    }
                    deleteHttpCookieVisitorId() {
                        return Promise.resolve();
                    }
                    encodeForEventType(e, t) {
                        return this.isEventTypeLegacy(e)
                            ? this.encodeForLegacyType(e, t)
                            : this.encodeForFormUrlEncoded(Object.assign({access_token: this.opts.token}, t));
                    }
                    getQueryParamsForEventType(e) {
                        return rp(this, void 0, void 0, function* () {
                            let {token: t, visitorIdProvider: r} = this.opts,
                                n = yield r.getCurrentVisitorId();
                            return [
                                t && this.isEventTypeLegacy(e) ? `access_token=${t}` : '',
                                n ? `visitorId=${n}` : '',
                                'discardVisitInfo=true',
                            ]
                                .filter((e) => !!e)
                                .join('&');
                        });
                    }
                    isEventTypeLegacy(e) {
                        return -1 !== [rC.click, rC.custom, rC.search, rC.view].indexOf(e);
                    }
                    encodeForLegacyType(e, t) {
                        return `${e}Event=${encodeURIComponent(JSON.stringify(t))}`;
                    }
                    encodeForFormUrlEncoded(e) {
                        return Object.keys(e)
                            .filter((t) => !!e[t])
                            .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(this.encodeValue(e[t]))}`)
                            .join('&');
                    }
                    encodeValue(e) {
                        return 'number' == typeof e || 'string' == typeof e || 'boolean' == typeof e
                            ? e
                            : JSON.stringify(e);
                    }
                },
                nO = class {
                    sendEvent(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return Promise.resolve();
                        });
                    }
                    deleteHttpCookieVisitorId() {
                        return rp(this, void 0, void 0, function* () {
                            return Promise.resolve();
                        });
                    }
                },
                nI = window.fetch,
                nE = class {
                    constructor(e) {
                        this.opts = e;
                    }
                    sendEvent(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            let {baseUrl: r, visitorIdProvider: n, preprocessRequest: i} = this.opts,
                                o = {
                                    url: `${r}/analytics/${e}${this.shouldAppendVisitorId(e) ? yield this.getVisitorIdParam() : ''}`,
                                    credentials: 'include',
                                    mode: 'cors',
                                    headers: this.getHeaders(),
                                    method: 'POST',
                                    body: JSON.stringify(t),
                                },
                                a = Object.assign(Object.assign({}, o), i ? yield i(o, 'analyticsFetch') : {}),
                                {url: s} = a,
                                u = rf(a, ['url']),
                                c = yield nI(s, u);
                            if (c.ok) {
                                let e = yield c.json();
                                return (e.visitorId && n.setCurrentVisitorId(e.visitorId), e);
                            }
                            try {
                                c.json();
                            } catch {}
                            throw (
                                console.error(`An error has occured when sending the "${e}" event.`, c, t),
                                Error(
                                    `An error has occurred when sending the "${e}" event. Check the console logs for more details.`,
                                )
                            );
                        });
                    }
                    deleteHttpCookieVisitorId() {
                        return rp(this, void 0, void 0, function* () {
                            let {baseUrl: e} = this.opts,
                                t = `${e}/analytics/visit`;
                            yield nI(t, {headers: this.getHeaders(), method: 'DELETE'});
                        });
                    }
                    shouldAppendVisitorId(e) {
                        return -1 !== [rC.click, rC.custom, rC.search, rC.view].indexOf(e);
                    }
                    getVisitorIdParam() {
                        return rp(this, void 0, void 0, function* () {
                            let {visitorIdProvider: e} = this.opts,
                                t = yield e.getCurrentVisitorId();
                            return t ? `?visitor=${t}` : '';
                        });
                    }
                    getHeaders() {
                        let {token: e} = this.opts;
                        return Object.assign(Object.assign({}, e ? {Authorization: `Bearer ${e}`} : {}), {
                            'Content-Type': 'application/json',
                        });
                    }
                },
                nC = class {
                    constructor(e, t) {
                        (rv() && ry()
                            ? (this.storage = new rU())
                            : rv()
                              ? (this.storage = localStorage)
                              : (console.warn('BrowserRuntime detected no valid storage available.', this),
                                (this.storage = new rR())),
                            (this.client = new nE(e)),
                            (this.beaconClient = new nk(e)),
                            window.addEventListener('beforeunload', () => {
                                for (let {eventType: e, payload: r} of t()) this.beaconClient.sendEvent(e, r);
                            }));
                    }
                },
                nD = class {
                    constructor(e, t) {
                        ((this.storage = t || new rR()), (this.client = new nE(e)));
                    }
                },
                nU = class {
                    constructor() {
                        ((this.storage = new rR()), (this.client = new nO()));
                    }
                },
                nR = (e) => (null == e ? void 0 : e.startsWith('xx')) || !1,
                nA = `
        We've detected you're using React Native but have not provided the corresponding runtime, 
        for an optimal experience please use the "coveo.analytics/react-native" subpackage.
        Follow the Readme on how to set it up: https://github.com/coveo/coveo.analytics.js#using-react-native
    `,
                nx = ['1', 1, 'yes', !0];
            function nj() {
                return (
                    rm() &&
                    [
                        navigator.globalPrivacyControl,
                        navigator.doNotTrack,
                        navigator.msDoNotTrack,
                        window.doNotTrack,
                    ].some((e) => -1 !== nx.indexOf(e))
                );
            }
            var nP,
                nT = {default: 'https://analytics.cloud.coveo.com/rest/ua'},
                n_ = class {
                    get defaultOptions() {
                        return {
                            endpoint: nT.default,
                            isCustomEndpoint: !1,
                            token: '',
                            version: 'v15',
                            beforeSendHooks: [],
                            afterSendHooks: [],
                        };
                    }
                    get version() {
                        return rH;
                    }
                    constructor(e) {
                        if (((this.acceptedLinkReferrers = []), !e))
                            throw Error('You have to pass options to this constructor');
                        ((this.options = Object.assign(Object.assign({}, this.defaultOptions), e)),
                            (this.visitorId = ''),
                            (this.bufferedRequests = []),
                            (this.beforeSendHooks = [rP, rS].concat(this.options.beforeSendHooks)),
                            (this.afterSendHooks = this.options.afterSendHooks),
                            (this.eventTypeMapping = {}));
                        let t = {
                            baseUrl: this.baseUrl,
                            token: this.options.token,
                            visitorIdProvider: this,
                            preprocessRequest: this.options.preprocessRequest,
                        };
                        ((this.runtime = this.options.runtimeEnvironment || this.initRuntime(t)),
                            nj() && (this.clear(), (this.runtime.storage = new rR())));
                    }
                    initRuntime(e) {
                        return 'undefined' != typeof window && rg()
                            ? new nC(e, () => {
                                  let e = [...this.bufferedRequests];
                                  return ((this.bufferedRequests = []), e);
                              })
                            : ('undefined' != typeof navigator &&
                                  'ReactNative' == navigator.product &&
                                  console.warn(nA),
                              new nD(e));
                    }
                    get storage() {
                        return this.runtime.storage;
                    }
                    determineVisitorId() {
                        return rp(this, void 0, void 0, function* () {
                            try {
                                return (
                                    this.extractClientIdFromLink(window.location.href) ||
                                    (yield this.storage.getItem('visitorId')) ||
                                    rN()
                                );
                            } catch (e) {
                                return (
                                    console.log(
                                        'Could not get visitor ID from the current runtime environment storage. Using a random ID instead.',
                                        e,
                                    ),
                                    rN()
                                );
                            }
                        });
                    }
                    getCurrentVisitorId() {
                        return rp(this, void 0, void 0, function* () {
                            if (!this.visitorId) {
                                let e = yield this.determineVisitorId();
                                yield this.setCurrentVisitorId(e);
                            }
                            return this.visitorId;
                        });
                    }
                    setCurrentVisitorId(e) {
                        return rp(this, void 0, void 0, function* () {
                            ((this.visitorId = e), yield this.storage.setItem('visitorId', e));
                        });
                    }
                    setClientId(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            if (rF(e)) this.setCurrentVisitorId(e.toLowerCase());
                            else {
                                if (!t)
                                    throw Error('Cannot generate uuid client id without a specific namespace string.');
                                this.setCurrentVisitorId(rV(e, rV(t, '38824e1f-37f5-42d3-8372-a4b8fa9df946')));
                            }
                        });
                    }
                    getParameters(e, ...t) {
                        return rp(this, void 0, void 0, function* () {
                            return yield this.resolveParameters(e, ...t);
                        });
                    }
                    getPayload(e, ...t) {
                        return rp(this, void 0, void 0, function* () {
                            let r = yield this.resolveParameters(e, ...t);
                            return yield this.resolvePayloadForParameters(e, r);
                        });
                    }
                    get currentVisitorId() {
                        return (
                            'string' != typeof (this.visitorId || this.storage.getItem('visitorId')) &&
                                this.setCurrentVisitorId(rN()),
                            this.visitorId
                        );
                    }
                    set currentVisitorId(e) {
                        ((this.visitorId = e), this.storage.setItem('visitorId', e));
                    }
                    extractClientIdFromLink(e) {
                        if (nj()) return null;
                        try {
                            let t = new URL(e).searchParams.get(rQ.cvo_cid);
                            if (null == t) return null;
                            let r = rQ.fromString(t);
                            return r && rg() && r.validate(document.referrer, this.acceptedLinkReferrers)
                                ? r.clientId
                                : null;
                        } catch {}
                        return null;
                    }
                    resolveParameters(e, ...t) {
                        return rp(this, void 0, void 0, function* () {
                            let {
                                variableLengthArgumentsNames: r = [],
                                addVisitorIdParameter: n = !1,
                                usesMeasurementProtocol: i = !1,
                                addClientIdParameter: o = !1,
                            } = this.eventTypeMapping[e] || {};
                            return yield [
                                (e) => (r.length > 0 ? this.parseVariableArgumentsPayload(r, e) : e[0]),
                                (e) =>
                                    rp(this, void 0, void 0, function* () {
                                        return Object.assign(Object.assign({}, e), {
                                            visitorId: n ? yield this.getCurrentVisitorId() : '',
                                        });
                                    }),
                                (e) =>
                                    rp(this, void 0, void 0, function* () {
                                        return o
                                            ? Object.assign(Object.assign({}, e), {
                                                  clientId: yield this.getCurrentVisitorId(),
                                              })
                                            : e;
                                    }),
                                (e) => (i ? this.ensureAnonymousUserWhenUsingApiKey(e) : e),
                                (t) =>
                                    this.beforeSendHooks.reduce(
                                        (t, r) =>
                                            rp(this, void 0, void 0, function* () {
                                                let n = yield t;
                                                return yield r(e, n);
                                            }),
                                        t,
                                    ),
                            ].reduce(
                                (e, t) =>
                                    rp(this, void 0, void 0, function* () {
                                        let r = yield e;
                                        return yield t(r);
                                    }),
                                Promise.resolve(t),
                            );
                        });
                    }
                    resolvePayloadForParameters(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            let {usesMeasurementProtocol: r = !1} = this.eventTypeMapping[e] || {};
                            return yield [
                                (e) => this.setTrackingIdIfTrackingIdNotPresent(e),
                                (t) => this.removeEmptyPayloadValues(t, e),
                                (t) => this.validateParams(t, e),
                                (e) => (r ? np(e) : e),
                                (e) => (r ? this.removeUnknownParameters(e) : e),
                                (e) => (r ? this.processCustomParameters(e) : this.mapCustomParametersToCustomData(e)),
                            ].reduce(
                                (e, t) =>
                                    rp(this, void 0, void 0, function* () {
                                        let r = yield e;
                                        return yield t(r);
                                    }),
                                Promise.resolve(t),
                            );
                        });
                    }
                    makeEvent(e, ...t) {
                        return rp(this, void 0, void 0, function* () {
                            let {newEventType: r = e} = this.eventTypeMapping[e] || {},
                                n = yield this.resolveParameters(e, ...t),
                                i = yield this.resolvePayloadForParameters(e, n);
                            return {
                                eventType: r,
                                payload: i,
                                log: (t) =>
                                    rp(this, void 0, void 0, function* () {
                                        return (
                                            this.bufferedRequests.push({
                                                eventType: r,
                                                payload: Object.assign(Object.assign({}, i), t),
                                            }),
                                            yield Promise.all(
                                                this.afterSendHooks.map((r) =>
                                                    r(e, Object.assign(Object.assign({}, n), t)),
                                                ),
                                            ),
                                            yield this.deferExecution(),
                                            yield this.sendFromBufferWithFetch()
                                        );
                                    }),
                            };
                        });
                    }
                    sendEvent(e, ...t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeEvent(e, ...t)).log({});
                        });
                    }
                    deferExecution() {
                        return new Promise((e) => setTimeout(e, 0));
                    }
                    sendFromBufferWithFetch() {
                        return rp(this, void 0, void 0, function* () {
                            let e = this.bufferedRequests.shift();
                            if (e) {
                                let {eventType: t, payload: r} = e;
                                return this.runtime.client.sendEvent(t, r);
                            }
                        });
                    }
                    clear() {
                        (this.storage.removeItem('visitorId'), new rx().clear());
                    }
                    deleteHttpOnlyVisitorId() {
                        this.runtime.client.deleteHttpCookieVisitorId();
                    }
                    makeSearchEvent(e) {
                        return rp(this, void 0, void 0, function* () {
                            return this.makeEvent(rC.search, e);
                        });
                    }
                    sendSearchEvent(e) {
                        var {searchQueryUid: t} = e,
                            r = rf(e, ['searchQueryUid']);
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeSearchEvent(r)).log({searchQueryUid: t});
                        });
                    }
                    makeClickEvent(e) {
                        return rp(this, void 0, void 0, function* () {
                            return this.makeEvent(rC.click, e);
                        });
                    }
                    sendClickEvent(e) {
                        var {searchQueryUid: t} = e,
                            r = rf(e, ['searchQueryUid']);
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeClickEvent(r)).log({searchQueryUid: t});
                        });
                    }
                    makeCustomEvent(e) {
                        return rp(this, void 0, void 0, function* () {
                            return this.makeEvent(rC.custom, e);
                        });
                    }
                    sendCustomEvent(e) {
                        var {lastSearchQueryUid: t} = e,
                            r = rf(e, ['lastSearchQueryUid']);
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEvent(r)).log({lastSearchQueryUid: t});
                        });
                    }
                    makeViewEvent(e) {
                        return rp(this, void 0, void 0, function* () {
                            return this.makeEvent(rC.view, e);
                        });
                    }
                    sendViewEvent(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeViewEvent(e)).log({});
                        });
                    }
                    getVisit() {
                        return rp(this, void 0, void 0, function* () {
                            let e = yield (yield fetch(`${this.baseUrl}/analytics/visit`)).json();
                            return ((this.visitorId = e.visitorId), e);
                        });
                    }
                    getHealth() {
                        return rp(this, void 0, void 0, function* () {
                            return yield (yield fetch(`${this.baseUrl}/analytics/monitoring/health`)).json();
                        });
                    }
                    registerBeforeSendEventHook(e) {
                        this.beforeSendHooks.push(e);
                    }
                    registerAfterSendEventHook(e) {
                        this.afterSendHooks.push(e);
                    }
                    addEventTypeMapping(e, t) {
                        this.eventTypeMapping[e] = t;
                    }
                    setAcceptedLinkReferrers(e) {
                        if (Array.isArray(e) && e.every((e) => 'string' == typeof e)) this.acceptedLinkReferrers = e;
                        else throw Error('Parameter should be an array of domain strings');
                    }
                    parseVariableArgumentsPayload(e, t) {
                        let r = {};
                        for (let n = 0, i = t.length; n < i; n++) {
                            let i = t[n];
                            if ('string' == typeof i) r[e[n]] = i;
                            else if ('object' == typeof i) return Object.assign(Object.assign({}, r), i);
                        }
                        return r;
                    }
                    isKeyAllowedEmpty(e, t) {
                        return -1 !== ({[rC.search]: ['queryText']}[e] || []).indexOf(t);
                    }
                    removeEmptyPayloadValues(e, t) {
                        let r = (e) => null != e && '' !== e;
                        return Object.keys(e)
                            .filter((n) => this.isKeyAllowedEmpty(t, n) || r(e[n]))
                            .reduce((t, r) => Object.assign(Object.assign({}, t), {[r]: e[r]}), {});
                    }
                    removeUnknownParameters(e) {
                        return Object.keys(e)
                            .filter((e) => {
                                if (ny(e)) return !0;
                                console.log(e, 'is not processed by coveoua');
                            })
                            .reduce((t, r) => Object.assign(Object.assign({}, t), {[r]: e[r]}), {});
                    }
                    processCustomParameters(e) {
                        let {custom: t} = e,
                            r = rf(e, ['custom']),
                            n = {};
                        t && rW(t) && (n = this.lowercaseKeys(t));
                        let i = nb(r);
                        return Object.assign(Object.assign({}, n), i);
                    }
                    mapCustomParametersToCustomData(e) {
                        let {custom: t} = e,
                            r = rf(e, ['custom']);
                        if (!(t && rW(t))) return e;
                        {
                            let n = this.lowercaseKeys(t);
                            return Object.assign(Object.assign({}, r), {
                                customData: Object.assign(Object.assign({}, n), e.customData),
                            });
                        }
                    }
                    lowercaseKeys(e) {
                        let t = Object.keys(e),
                            r = {};
                        return (
                            t.forEach((t) => {
                                r[t.toLowerCase()] = e[t];
                            }),
                            r
                        );
                    }
                    validateParams(e, t) {
                        let {anonymizeIp: r} = e,
                            n = rf(e, ['anonymizeIp']);
                        return (
                            void 0 !== r &&
                                -1 ==
                                    ['0', 'false', 'undefined', 'null', '{}', '[]', ''].indexOf(`${r}`.toLowerCase()) &&
                                (n.anonymizeIp = 1),
                            (t == rC.view || t == rC.click || t == rC.search || t == rC.custom) &&
                                (n.originLevel3 = this.limit(n.originLevel3, 128)),
                            t == rC.view && (n.location = this.limit(n.location, 128)),
                            ('pageview' == t || 'event' == t) &&
                                ((n.referrer = this.limit(n.referrer, 2048)),
                                (n.location = this.limit(n.location, 2048)),
                                (n.page = this.limit(n.page, 2048))),
                            n
                        );
                    }
                    ensureAnonymousUserWhenUsingApiKey(e) {
                        let {userId: t} = e,
                            r = rf(e, ['userId']);
                        return nR(this.options.token) && !t ? ((r.userId = 'anonymous'), r) : e;
                    }
                    setTrackingIdIfTrackingIdNotPresent(e) {
                        let {trackingId: t} = e,
                            r = rf(e, ['trackingId']);
                        return t
                            ? e
                            : (r.hasOwnProperty('custom') &&
                                  rW(r.custom) &&
                                  (r.custom.hasOwnProperty('context_website') || r.custom.hasOwnProperty('siteName')) &&
                                  (r.trackingId = r.custom.context_website || r.custom.siteName),
                              r.hasOwnProperty('customData') &&
                                  rW(r.customData) &&
                                  (r.customData.hasOwnProperty('context_website') ||
                                      r.customData.hasOwnProperty('siteName')) &&
                                  (r.trackingId = r.customData.context_website || r.customData.siteName),
                              r);
                    }
                    limit(e, t) {
                        return 'string' != typeof e ? e : e.substring(0, t);
                    }
                    get baseUrl() {
                        return (function (e = nT.default, t = 'v15', r = !1) {
                            return ((e = e.replace(/\/$/, '')), r)
                                ? `${e}/${t}`
                                : `${e}${e.endsWith('/rest') || e.endsWith('/rest/ua') ? '' : '/rest'}/${t}`;
                        })(this.options.endpoint, this.options.version, this.options.isCustomEndpoint);
                    }
                };
            (((n = nP || (nP = {})).contextChanged = 'contextChanged'),
                (n.expandToFullUI = 'expandToFullUI'),
                (n.openUserActions = 'openUserActions'),
                (n.showPrecedingSessions = 'showPrecedingSessions'),
                (n.showFollowingSessions = 'showFollowingSessions'),
                (n.clickViewedDocument = 'clickViewedDocument'),
                (n.clickPageView = 'clickPageView'),
                ((i = c || (c = {})).interfaceLoad = 'interfaceLoad'),
                (i.interfaceChange = 'interfaceChange'),
                (i.didyoumeanAutomatic = 'didyoumeanAutomatic'),
                (i.didyoumeanClick = 'didyoumeanClick'),
                (i.resultsSort = 'resultsSort'),
                (i.searchboxSubmit = 'searchboxSubmit'),
                (i.searchboxClear = 'searchboxClear'),
                (i.searchboxAsYouType = 'searchboxAsYouType'),
                (i.breadcrumbFacet = 'breadcrumbFacet'),
                (i.breadcrumbResetAll = 'breadcrumbResetAll'),
                (i.documentQuickview = 'documentQuickview'),
                (i.documentOpen = 'documentOpen'),
                (i.omniboxAnalytics = 'omniboxAnalytics'),
                (i.omniboxFromLink = 'omniboxFromLink'),
                (i.searchFromLink = 'searchFromLink'),
                (i.triggerNotify = 'notify'),
                (i.triggerExecute = 'execute'),
                (i.triggerQuery = 'query'),
                (i.undoTriggerQuery = 'undoQuery'),
                (i.triggerRedirect = 'redirect'),
                (i.pagerResize = 'pagerResize'),
                (i.pagerNumber = 'pagerNumber'),
                (i.pagerNext = 'pagerNext'),
                (i.pagerPrevious = 'pagerPrevious'),
                (i.pagerScrolling = 'pagerScrolling'),
                (i.staticFilterClearAll = 'staticFilterClearAll'),
                (i.staticFilterSelect = 'staticFilterSelect'),
                (i.staticFilterDeselect = 'staticFilterDeselect'),
                (i.facetClearAll = 'facetClearAll'),
                (i.facetSearch = 'facetSearch'),
                (i.facetSelect = 'facetSelect'),
                (i.facetSelectAll = 'facetSelectAll'),
                (i.facetDeselect = 'facetDeselect'),
                (i.facetExclude = 'facetExclude'),
                (i.facetUnexclude = 'facetUnexclude'),
                (i.facetUpdateSort = 'facetUpdateSort'),
                (i.facetShowMore = 'showMoreFacetResults'),
                (i.facetShowLess = 'showLessFacetResults'),
                (i.queryError = 'query'),
                (i.queryErrorBack = 'errorBack'),
                (i.queryErrorClear = 'errorClearQuery'),
                (i.queryErrorRetry = 'errorRetry'),
                (i.recommendation = 'recommendation'),
                (i.recommendationInterfaceLoad = 'recommendationInterfaceLoad'),
                (i.recommendationOpen = 'recommendationOpen'),
                (i.likeSmartSnippet = 'likeSmartSnippet'),
                (i.dislikeSmartSnippet = 'dislikeSmartSnippet'),
                (i.expandSmartSnippet = 'expandSmartSnippet'),
                (i.collapseSmartSnippet = 'collapseSmartSnippet'),
                (i.openSmartSnippetFeedbackModal = 'openSmartSnippetFeedbackModal'),
                (i.closeSmartSnippetFeedbackModal = 'closeSmartSnippetFeedbackModal'),
                (i.sendSmartSnippetReason = 'sendSmartSnippetReason'),
                (i.expandSmartSnippetSuggestion = 'expandSmartSnippetSuggestion'),
                (i.collapseSmartSnippetSuggestion = 'collapseSmartSnippetSuggestion'),
                (i.showMoreSmartSnippetSuggestion = 'showMoreSmartSnippetSuggestion'),
                (i.showLessSmartSnippetSuggestion = 'showLessSmartSnippetSuggestion'),
                (i.openSmartSnippetSource = 'openSmartSnippetSource'),
                (i.openSmartSnippetSuggestionSource = 'openSmartSnippetSuggestionSource'),
                (i.openSmartSnippetInlineLink = 'openSmartSnippetInlineLink'),
                (i.openSmartSnippetSuggestionInlineLink = 'openSmartSnippetSuggestionInlineLink'),
                (i.recentQueryClick = 'recentQueriesClick'),
                (i.clearRecentQueries = 'clearRecentQueries'),
                (i.recentResultClick = 'recentResultClick'),
                (i.clearRecentResults = 'clearRecentResults'),
                (i.noResultsBack = 'noResultsBack'),
                (i.showMoreFoldedResults = 'showMoreFoldedResults'),
                (i.showLessFoldedResults = 'showLessFoldedResults'),
                (i.copyToClipboard = 'copyToClipboard'),
                (i.caseSendEmail = 'Case.SendEmail'),
                (i.feedItemTextPost = 'FeedItem.TextPost'),
                (i.caseAttach = 'caseAttach'),
                (i.caseDetach = 'caseDetach'),
                (i.retryGeneratedAnswer = 'retryGeneratedAnswer'),
                (i.likeGeneratedAnswer = 'likeGeneratedAnswer'),
                (i.dislikeGeneratedAnswer = 'dislikeGeneratedAnswer'),
                (i.openGeneratedAnswerSource = 'openGeneratedAnswerSource'),
                (i.generatedAnswerStreamEnd = 'generatedAnswerStreamEnd'));
            var n$ = {
                    [c.triggerNotify]: 'queryPipelineTriggers',
                    [c.triggerExecute]: 'queryPipelineTriggers',
                    [c.triggerQuery]: 'queryPipelineTriggers',
                    [c.triggerRedirect]: 'queryPipelineTriggers',
                    [c.queryError]: 'errors',
                    [c.queryErrorBack]: 'errors',
                    [c.queryErrorClear]: 'errors',
                    [c.queryErrorRetry]: 'errors',
                    [c.pagerNext]: 'getMoreResults',
                    [c.pagerPrevious]: 'getMoreResults',
                    [c.pagerNumber]: 'getMoreResults',
                    [c.pagerResize]: 'getMoreResults',
                    [c.pagerScrolling]: 'getMoreResults',
                    [c.facetSearch]: 'facet',
                    [c.facetShowLess]: 'facet',
                    [c.facetShowMore]: 'facet',
                    [c.recommendation]: 'recommendation',
                    [c.likeSmartSnippet]: 'smartSnippet',
                    [c.dislikeSmartSnippet]: 'smartSnippet',
                    [c.expandSmartSnippet]: 'smartSnippet',
                    [c.collapseSmartSnippet]: 'smartSnippet',
                    [c.openSmartSnippetFeedbackModal]: 'smartSnippet',
                    [c.closeSmartSnippetFeedbackModal]: 'smartSnippet',
                    [c.sendSmartSnippetReason]: 'smartSnippet',
                    [c.expandSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [c.collapseSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [c.showMoreSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [c.showLessSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [c.clearRecentQueries]: 'recentQueries',
                    [c.recentResultClick]: 'recentlyClickedDocuments',
                    [c.clearRecentResults]: 'recentlyClickedDocuments',
                    [c.showLessFoldedResults]: 'folding',
                    [nP.expandToFullUI]: 'interface',
                    [nP.openUserActions]: 'User Actions',
                    [nP.showPrecedingSessions]: 'User Actions',
                    [nP.showFollowingSessions]: 'User Actions',
                    [nP.clickViewedDocument]: 'User Actions',
                    [nP.clickPageView]: 'User Actions',
                    [c.caseDetach]: 'case',
                    [c.likeGeneratedAnswer]: 'generatedAnswer',
                    [c.dislikeGeneratedAnswer]: 'generatedAnswer',
                    [c.openGeneratedAnswerSource]: 'generatedAnswer',
                    [c.generatedAnswerStreamEnd]: 'generatedAnswer',
                },
                nF = class {
                    constructor() {
                        ((this.runtime = new nU()), (this.currentVisitorId = ''));
                    }
                    getPayload() {
                        return Promise.resolve();
                    }
                    getParameters() {
                        return Promise.resolve();
                    }
                    makeEvent(e) {
                        return Promise.resolve({eventType: e, payload: null, log: () => Promise.resolve()});
                    }
                    sendEvent() {
                        return Promise.resolve();
                    }
                    makeSearchEvent() {
                        return this.makeEvent(rC.search);
                    }
                    sendSearchEvent() {
                        return Promise.resolve();
                    }
                    makeClickEvent() {
                        return this.makeEvent(rC.click);
                    }
                    sendClickEvent() {
                        return Promise.resolve();
                    }
                    makeCustomEvent() {
                        return this.makeEvent(rC.custom);
                    }
                    sendCustomEvent() {
                        return Promise.resolve();
                    }
                    makeViewEvent() {
                        return this.makeEvent(rC.view);
                    }
                    sendViewEvent() {
                        return Promise.resolve();
                    }
                    getVisit() {
                        return Promise.resolve({id: '', visitorId: ''});
                    }
                    getHealth() {
                        return Promise.resolve({status: ''});
                    }
                    registerBeforeSendEventHook() {}
                    registerAfterSendEventHook() {}
                    addEventTypeMapping() {}
                    get version() {
                        return rH;
                    }
                },
                nq = (e) => {
                    let t;
                    return (function e(t) {
                        let r = t.join(';');
                        return r.length <= 256 ? r : e(t.slice(1));
                    })(
                        ((t = ''),
                        e
                            .map((e) => e.replace(/;/g, ''))
                            .filter((e) => {
                                let r = e !== t;
                                return ((t = e), r);
                            })),
                    );
                };
            function nM(e) {
                let t = 'string' == typeof e.partialQueries ? e.partialQueries : nq(e.partialQueries),
                    r = 'string' == typeof e.suggestions ? e.suggestions : nq(e.suggestions);
                return Object.assign(Object.assign({}, e), {partialQueries: t, suggestions: r});
            }
            var nL = class {
                    constructor(e, t) {
                        ((this.opts = e), (this.provider = t));
                        let r = !1 === e.enableAnalytics || nj();
                        this.coveoAnalyticsClient = r ? new nF() : new n_(e);
                    }
                    disable() {
                        (this.coveoAnalyticsClient instanceof n_ && this.coveoAnalyticsClient.clear(),
                            (this.coveoAnalyticsClient = new nF()));
                    }
                    enable() {
                        this.coveoAnalyticsClient = new n_(this.opts);
                    }
                    makeInterfaceLoad() {
                        return this.makeSearchEvent(c.interfaceLoad);
                    }
                    logInterfaceLoad() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeInterfaceLoad()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecommendationInterfaceLoad() {
                        return this.makeSearchEvent(c.recommendationInterfaceLoad);
                    }
                    logRecommendationInterfaceLoad() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendationInterfaceLoad()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRecommendation() {
                        return this.makeCustomEvent(c.recommendation);
                    }
                    logRecommendation() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendation()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecommendationOpen(e, t) {
                        return this.makeClickEvent(c.recommendationOpen, e, t);
                    }
                    logRecommendationOpen(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendationOpen(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterClearAll(e) {
                        return this.makeSearchEvent(c.staticFilterClearAll, e);
                    }
                    logStaticFilterClearAll(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterClearAll(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterSelect(e) {
                        return this.makeSearchEvent(c.staticFilterSelect, e);
                    }
                    logStaticFilterSelect(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterSelect(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterDeselect(e) {
                        return this.makeSearchEvent(c.staticFilterDeselect, e);
                    }
                    logStaticFilterDeselect(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterDeselect(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeFetchMoreResults() {
                        return this.makeCustomEvent(c.pagerScrolling, {type: 'getMoreResults'});
                    }
                    logFetchMoreResults() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFetchMoreResults()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeInterfaceChange(e) {
                        return this.makeSearchEvent(c.interfaceChange, e);
                    }
                    logInterfaceChange(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeInterfaceChange(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDidYouMeanAutomatic() {
                        return this.makeSearchEvent(c.didyoumeanAutomatic);
                    }
                    logDidYouMeanAutomatic() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeDidYouMeanAutomatic()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDidYouMeanClick() {
                        return this.makeSearchEvent(c.didyoumeanClick);
                    }
                    logDidYouMeanClick() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeDidYouMeanClick()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeResultsSort(e) {
                        return this.makeSearchEvent(c.resultsSort, e);
                    }
                    logResultsSort(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeResultsSort(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxSubmit() {
                        return this.makeSearchEvent(c.searchboxSubmit);
                    }
                    logSearchboxSubmit() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxSubmit()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxClear() {
                        return this.makeSearchEvent(c.searchboxClear);
                    }
                    logSearchboxClear() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxClear()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxAsYouType() {
                        return this.makeSearchEvent(c.searchboxAsYouType);
                    }
                    logSearchboxAsYouType() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxAsYouType()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeBreadcrumbFacet(e) {
                        return this.makeSearchEvent(c.breadcrumbFacet, e);
                    }
                    logBreadcrumbFacet(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeBreadcrumbFacet(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeBreadcrumbResetAll() {
                        return this.makeSearchEvent(c.breadcrumbResetAll);
                    }
                    logBreadcrumbResetAll() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeBreadcrumbResetAll()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDocumentQuickview(e, t) {
                        return this.makeClickEvent(c.documentQuickview, e, t);
                    }
                    logDocumentQuickview(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeDocumentQuickview(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDocumentOpen(e, t) {
                        return this.makeClickEvent(c.documentOpen, e, t);
                    }
                    logDocumentOpen(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeDocumentOpen(e, t)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeOmniboxAnalytics(e) {
                        return this.makeSearchEvent(c.omniboxAnalytics, nM(e));
                    }
                    logOmniboxAnalytics(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeOmniboxAnalytics(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeOmniboxFromLink(e) {
                        return this.makeSearchEvent(c.omniboxFromLink, nM(e));
                    }
                    logOmniboxFromLink(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeOmniboxFromLink(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchFromLink() {
                        return this.makeSearchEvent(c.searchFromLink);
                    }
                    logSearchFromLink() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeSearchFromLink()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerNotify(e) {
                        return this.makeCustomEvent(c.triggerNotify, e);
                    }
                    logTriggerNotify(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerNotify(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerExecute(e) {
                        return this.makeCustomEvent(c.triggerExecute, e);
                    }
                    logTriggerExecute(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerExecute(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerQuery() {
                        return this.makeCustomEvent(
                            c.triggerQuery,
                            {query: this.provider.getSearchEventRequestPayload().queryText},
                            'queryPipelineTriggers',
                        );
                    }
                    logTriggerQuery() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerQuery()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeUndoTriggerQuery(e) {
                        return this.makeSearchEvent(c.undoTriggerQuery, e);
                    }
                    logUndoTriggerQuery(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeUndoTriggerQuery(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerRedirect(e) {
                        return this.makeCustomEvent(
                            c.triggerRedirect,
                            Object.assign(Object.assign({}, e), {
                                query: this.provider.getSearchEventRequestPayload().queryText,
                            }),
                        );
                    }
                    logTriggerRedirect(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerRedirect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerResize(e) {
                        return this.makeCustomEvent(c.pagerResize, e);
                    }
                    logPagerResize(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makePagerResize(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerNumber(e) {
                        return this.makeCustomEvent(c.pagerNumber, e);
                    }
                    logPagerNumber(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makePagerNumber(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerNext(e) {
                        return this.makeCustomEvent(c.pagerNext, e);
                    }
                    logPagerNext(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makePagerNext(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerPrevious(e) {
                        return this.makeCustomEvent(c.pagerPrevious, e);
                    }
                    logPagerPrevious(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makePagerPrevious(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerScrolling() {
                        return this.makeCustomEvent(c.pagerScrolling);
                    }
                    logPagerScrolling() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makePagerScrolling()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetClearAll(e) {
                        return this.makeSearchEvent(c.facetClearAll, e);
                    }
                    logFacetClearAll(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFacetClearAll(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSearch(e) {
                        return this.makeSearchEvent(c.facetSearch, e);
                    }
                    logFacetSearch(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSearch(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSelect(e) {
                        return this.makeSearchEvent(c.facetSelect, e);
                    }
                    logFacetSelect(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSelect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetDeselect(e) {
                        return this.makeSearchEvent(c.facetDeselect, e);
                    }
                    logFacetDeselect(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFacetDeselect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetExclude(e) {
                        return this.makeSearchEvent(c.facetExclude, e);
                    }
                    logFacetExclude(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFacetExclude(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetUnexclude(e) {
                        return this.makeSearchEvent(c.facetUnexclude, e);
                    }
                    logFacetUnexclude(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFacetUnexclude(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSelectAll(e) {
                        return this.makeSearchEvent(c.facetSelectAll, e);
                    }
                    logFacetSelectAll(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSelectAll(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetUpdateSort(e) {
                        return this.makeSearchEvent(c.facetUpdateSort, e);
                    }
                    logFacetUpdateSort(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFacetUpdateSort(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetShowMore(e) {
                        return this.makeCustomEvent(c.facetShowMore, e);
                    }
                    logFacetShowMore(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFacetShowMore(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetShowLess(e) {
                        return this.makeCustomEvent(c.facetShowLess, e);
                    }
                    logFacetShowLess(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeFacetShowLess(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryError(e) {
                        return this.makeCustomEvent(c.queryError, e);
                    }
                    logQueryError(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeQueryError(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorBack() {
                        return rp(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(c.queryErrorBack);
                            return {
                                description: e.description,
                                log: () =>
                                    rp(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(c.queryErrorBack)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorBack() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorBack()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorRetry() {
                        return rp(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(c.queryErrorRetry);
                            return {
                                description: e.description,
                                log: () =>
                                    rp(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(c.queryErrorRetry)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorRetry() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorRetry()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorClear() {
                        return rp(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(c.queryErrorClear);
                            return {
                                description: e.description,
                                log: () =>
                                    rp(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(c.queryErrorClear)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorClear() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorClear()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeLikeSmartSnippet() {
                        return this.makeCustomEvent(c.likeSmartSnippet);
                    }
                    logLikeSmartSnippet() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeLikeSmartSnippet()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDislikeSmartSnippet() {
                        return this.makeCustomEvent(c.dislikeSmartSnippet);
                    }
                    logDislikeSmartSnippet() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeDislikeSmartSnippet()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeExpandSmartSnippet() {
                        return this.makeCustomEvent(c.expandSmartSnippet);
                    }
                    logExpandSmartSnippet() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeExpandSmartSnippet()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeCollapseSmartSnippet() {
                        return this.makeCustomEvent(c.collapseSmartSnippet);
                    }
                    logCollapseSmartSnippet() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeCollapseSmartSnippet()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetFeedbackModal() {
                        return this.makeCustomEvent(c.openSmartSnippetFeedbackModal);
                    }
                    logOpenSmartSnippetFeedbackModal() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetFeedbackModal()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeCloseSmartSnippetFeedbackModal() {
                        return this.makeCustomEvent(c.closeSmartSnippetFeedbackModal);
                    }
                    logCloseSmartSnippetFeedbackModal() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeCloseSmartSnippetFeedbackModal()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeSmartSnippetFeedbackReason(e, t) {
                        return this.makeCustomEvent(c.sendSmartSnippetReason, {reason: e, details: t});
                    }
                    logSmartSnippetFeedbackReason(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeSmartSnippetFeedbackReason(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeExpandSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(
                            c.expandSmartSnippetSuggestion,
                            'documentId' in e ? e : {documentId: e},
                        );
                    }
                    logExpandSmartSnippetSuggestion(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeExpandSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeCollapseSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(
                            c.collapseSmartSnippetSuggestion,
                            'documentId' in e ? e : {documentId: e},
                        );
                    }
                    logCollapseSmartSnippetSuggestion(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeCollapseSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowMoreSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(c.showMoreSmartSnippetSuggestion, e);
                    }
                    logShowMoreSmartSnippetSuggestion(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeShowMoreSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowLessSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(c.showLessSmartSnippetSuggestion, e);
                    }
                    logShowLessSmartSnippetSuggestion(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeShowLessSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetSource(e, t) {
                        return this.makeClickEvent(c.openSmartSnippetSource, e, t);
                    }
                    logOpenSmartSnippetSource(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetSource(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetSuggestionSource(e, t) {
                        return this.makeClickEvent(
                            c.openSmartSnippetSuggestionSource,
                            e,
                            {contentIDKey: t.documentId.contentIdKey, contentIDValue: t.documentId.contentIdValue},
                            t,
                        );
                    }
                    makeCopyToClipboard(e, t) {
                        return this.makeClickEvent(c.copyToClipboard, e, t);
                    }
                    logCopyToClipboard(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeCopyToClipboard(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    logOpenSmartSnippetSuggestionSource(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetSuggestionSource(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetInlineLink(e, t) {
                        return this.makeClickEvent(
                            c.openSmartSnippetInlineLink,
                            e,
                            {contentIDKey: t.contentIDKey, contentIDValue: t.contentIDValue},
                            t,
                        );
                    }
                    logOpenSmartSnippetInlineLink(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetInlineLink(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetSuggestionInlineLink(e, t) {
                        return this.makeClickEvent(
                            c.openSmartSnippetSuggestionInlineLink,
                            e,
                            {contentIDKey: t.documentId.contentIdKey, contentIDValue: t.documentId.contentIdValue},
                            t,
                        );
                    }
                    logOpenSmartSnippetSuggestionInlineLink(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetSuggestionInlineLink(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRecentQueryClick() {
                        return this.makeSearchEvent(c.recentQueryClick);
                    }
                    logRecentQueryClick() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeRecentQueryClick()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeClearRecentQueries() {
                        return this.makeCustomEvent(c.clearRecentQueries);
                    }
                    logClearRecentQueries() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeClearRecentQueries()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecentResultClick(e, t) {
                        return this.makeCustomEvent(c.recentResultClick, {info: e, identifier: t});
                    }
                    logRecentResultClick(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeRecentResultClick(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeClearRecentResults() {
                        return this.makeCustomEvent(c.clearRecentResults);
                    }
                    logClearRecentResults() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeClearRecentResults()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeNoResultsBack() {
                        return this.makeSearchEvent(c.noResultsBack);
                    }
                    logNoResultsBack() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeNoResultsBack()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeShowMoreFoldedResults(e, t) {
                        return this.makeClickEvent(c.showMoreFoldedResults, e, t);
                    }
                    logShowMoreFoldedResults(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeShowMoreFoldedResults(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowLessFoldedResults() {
                        return this.makeCustomEvent(c.showLessFoldedResults);
                    }
                    logShowLessFoldedResults() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeShowLessFoldedResults()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeEventDescription(e, t) {
                        var r;
                        return {
                            actionCause: t,
                            customData: null === (r = e.payload) || void 0 === r ? void 0 : r.customData,
                        };
                    }
                    makeCustomEvent(e, t, r = n$[e]) {
                        return rp(this, void 0, void 0, function* () {
                            let n = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), t),
                                i = Object.assign(Object.assign({}, yield this.getBaseEventRequest(n)), {
                                    eventType: r,
                                    eventValue: e,
                                }),
                                o = yield this.coveoAnalyticsClient.makeCustomEvent(i);
                            return {
                                description: this.makeEventDescription(o, e),
                                log: ({searchUID: e}) => o.log({lastSearchQueryUid: e}),
                            };
                        });
                    }
                    logCustomEvent(e, t, r = n$[e]) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEvent(e, t, r)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeCustomEventWithType(e, t, r) {
                        return rp(this, void 0, void 0, function* () {
                            let n = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), r),
                                i = Object.assign(Object.assign({}, yield this.getBaseEventRequest(n)), {
                                    eventType: t,
                                    eventValue: e,
                                }),
                                o = yield this.coveoAnalyticsClient.makeCustomEvent(i);
                            return {
                                description: this.makeEventDescription(o, e),
                                log: ({searchUID: e}) => o.log({lastSearchQueryUid: e}),
                            };
                        });
                    }
                    logCustomEventWithType(e, t, r) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEventWithType(e, t, r)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    logSearchEvent(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeSearchEvent(e, t)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchEvent(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            let r = yield this.getBaseSearchEventRequest(e, t),
                                n = yield this.coveoAnalyticsClient.makeSearchEvent(r);
                            return {
                                description: this.makeEventDescription(n, e),
                                log: ({searchUID: e}) => n.log({searchQueryUid: e}),
                            };
                        });
                    }
                    makeClickEvent(e, t, r, n) {
                        return rp(this, void 0, void 0, function* () {
                            let i = Object.assign(
                                    Object.assign(
                                        Object.assign({}, t),
                                        yield this.getBaseEventRequest(Object.assign(Object.assign({}, r), n)),
                                    ),
                                    {queryPipeline: this.provider.getPipeline(), actionCause: e},
                                ),
                                o = yield this.coveoAnalyticsClient.makeClickEvent(i);
                            return {
                                description: this.makeEventDescription(o, e),
                                log: ({searchUID: e}) => o.log({searchQueryUid: e}),
                            };
                        });
                    }
                    logClickEvent(e, t, r, n) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeClickEvent(e, t, r, n)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    getBaseSearchEventRequest(e, t) {
                        return rp(this, void 0, void 0, function* () {
                            return Object.assign(
                                Object.assign(
                                    Object.assign({}, yield this.getBaseEventRequest(t)),
                                    this.provider.getSearchEventRequestPayload(),
                                ),
                                {queryPipeline: this.provider.getPipeline(), actionCause: e},
                            );
                        });
                    }
                    getBaseEventRequest(e) {
                        return rp(this, void 0, void 0, function* () {
                            let t = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), e);
                            return Object.assign(
                                Object.assign(Object.assign({}, this.getOrigins()), this.getSplitTestRun()),
                                {
                                    customData: t,
                                    language: this.provider.getLanguage(),
                                    facetState: this.provider.getFacetState ? this.provider.getFacetState() : [],
                                    anonymous: this.provider.getIsAnonymous(),
                                    clientId: yield this.getClientId(),
                                },
                            );
                        });
                    }
                    getOrigins() {
                        var e, t;
                        return {
                            originContext:
                                null === (t = (e = this.provider).getOriginContext) || void 0 === t
                                    ? void 0
                                    : t.call(e),
                            originLevel1: this.provider.getOriginLevel1(),
                            originLevel2: this.provider.getOriginLevel2(),
                            originLevel3: this.provider.getOriginLevel3(),
                        };
                    }
                    getClientId() {
                        return this.coveoAnalyticsClient instanceof n_
                            ? this.coveoAnalyticsClient.getCurrentVisitorId()
                            : void 0;
                    }
                    getSplitTestRun() {
                        let e = this.provider.getSplitTestRunName ? this.provider.getSplitTestRunName() : '',
                            t = this.provider.getSplitTestRunVersion ? this.provider.getSplitTestRunVersion() : '';
                        return Object.assign(
                            Object.assign({}, e && {splitTestRunName: e}),
                            t && {splitTestRunVersion: t},
                        );
                    }
                    makeLikeGeneratedAnswer(e) {
                        return this.makeCustomEvent(c.likeGeneratedAnswer, e);
                    }
                    logLikeGeneratedAnswer(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeLikeGeneratedAnswer(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDislikeGeneratedAnswer(e) {
                        return this.makeCustomEvent(c.dislikeGeneratedAnswer, e);
                    }
                    logDislikeGeneratedAnswer(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeDislikeGeneratedAnswer(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenGeneratedAnswerSource(e) {
                        return this.makeCustomEvent(c.openGeneratedAnswerSource, e);
                    }
                    logOpenGeneratedAnswerSource(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeOpenGeneratedAnswerSource(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRetryGeneratedAnswer() {
                        return this.makeSearchEvent(c.retryGeneratedAnswer);
                    }
                    logRetryGeneratedAnswer() {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeRetryGeneratedAnswer()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeGeneratedAnswerStreamEnd(e) {
                        return this.makeCustomEvent(c.generatedAnswerStreamEnd, e);
                    }
                    logGeneratedAnswerStreamEnd(e) {
                        return rp(this, void 0, void 0, function* () {
                            return (yield this.makeGeneratedAnswerStreamEnd(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                },
                nN = Object.assign({}, {pageview: 'pageview', event: 'event'});
            (Object.keys(nN).map((e) => nN[e]),
                ((o = l || (l = {})).click = 'click'),
                (o.flowStart = 'flowStart'),
                ((a = d || (d = {})).enterInterface = 'ticket_create_start'),
                (a.fieldUpdate = 'ticket_field_update'),
                (a.fieldSuggestionClick = 'ticket_classification_click'),
                (a.suggestionClick = 'suggestion_click'),
                (a.suggestionRate = 'suggestion_rate'),
                (a.nextCaseStep = 'ticket_next_stage'),
                (a.caseCancelled = 'ticket_cancel'),
                (a.caseSolved = 'ticket_cancel'),
                (a.caseCreated = 'ticket_create'),
                ((s = h || (h = {})).quit = 'Quit'),
                (s.solved = 'Solved'));
            var nz = (e) => new n_(e).getCurrentVisitorId(),
                nV = (e) => {
                    let t = new n_(e);
                    (t.clear(), t.deleteHttpOnlyVisitorId());
                },
                nH = new rj.HistoryStore(),
                nQ = [
                    'uri',
                    'urihash',
                    'documentUri',
                    'documentUriHash',
                    'permanentid',
                    'ec_name',
                    'ec_brand',
                    'ec_category',
                    'ec_item_group_id',
                    'ec_price',
                    'ec_promo_price',
                    'ec_shortdesc',
                    'ec_thumbnails',
                    'ec_images',
                    'ec_in_stock',
                    'ec_rating',
                    'childResults',
                    'totalNumberOfChildResults',
                ],
                nB = () => ({
                    id: '',
                    skus: [],
                    maxNumberOfRecommendations: 5,
                    filter: {brand: '', category: ''},
                    additionalFields: [],
                    recommendations: [],
                    error: null,
                    isLoading: !1,
                    searchUid: '',
                    duration: 0,
                }),
                nW = () => 'default',
                nY = '2.27.0',
                nG = (e) => {
                    let t = e.configuration.search.locale.split('-')[0];
                    return t && 2 === t.length ? t : 'en';
                },
                nK = class {
                    constructor(e) {
                        ((this.getState = e), (this.state = e()));
                    }
                    getLanguage() {
                        return nG(this.state);
                    }
                    getBaseMetadata() {
                        let {context: e} = this.state,
                            t = (null == e ? void 0 : e.contextValues) || {},
                            r = {};
                        for (let [e, n] of Object.entries(t)) r[`context_${e}`] = n;
                        return ((r.coveoHeadlessVersion = nY), r);
                    }
                    getOriginContext() {
                        return this.state.configuration.analytics.originContext;
                    }
                    getOriginLevel1() {
                        return this.state.searchHub || nW();
                    }
                    getOriginLevel2() {
                        return this.state.configuration.analytics.originLevel2;
                    }
                    getOriginLevel3() {
                        return this.state.configuration.analytics.originLevel3;
                    }
                    getIsAnonymous() {
                        return this.state.configuration.analytics.anonymous;
                    }
                },
                nJ = class extends nK {
                    constructor() {
                        (super(...arguments), (this.initialState = nB()));
                    }
                    getPipeline() {
                        return '';
                    }
                    getSearchEventRequestPayload() {
                        return {
                            queryText: '',
                            responseTime: this.responseTime,
                            results: this.mapResultsToAnalyticsDocument(),
                            numberOfResults: this.numberOfResults,
                        };
                    }
                    getSearchUID() {
                        var e;
                        return (
                            (null == (e = this.getState().productRecommendations) ? void 0 : e.searchUid) ||
                            this.initialState.searchUid
                        );
                    }
                    mapResultsToAnalyticsDocument() {
                        var e;
                        return null == (e = this.state.productRecommendations)
                            ? void 0
                            : e.recommendations.map((e) => ({
                                  documentUri: e.documentUri,
                                  documentUriHash: e.documentUriHash,
                                  permanentid: e.permanentid,
                              }));
                    }
                    get responseTime() {
                        var e;
                        return (
                            (null == (e = this.state.productRecommendations) ? void 0 : e.duration) ||
                            this.initialState.duration
                        );
                    }
                    get numberOfResults() {
                        var e;
                        return (
                            (null == (e = this.state.productRecommendations) ? void 0 : e.recommendations.length) ||
                            this.initialState.recommendations.length
                        );
                    }
                },
                nZ = (e, t) => {
                    var r;
                    return null == (r = e.categoryFacetSet[t]) ? void 0 : r.request;
                },
                nX = (e, t) => {
                    let r = nZ(e, t);
                    return (function (e) {
                        if (!e) return {parents: [], values: []};
                        let t = [],
                            r = e;
                        for (; r.length && r[0].children.length; ) ((t = [...t, ...r]), (r = r[0].children));
                        let n = r.find((e) => 'selected' === e.state);
                        return (n && ((t = [...t, n]), (r = [])), {parents: t, values: r});
                    })(null == r ? void 0 : r.currentValues).parents;
                },
                n0 = (e) => {
                    let t = [];
                    return (
                        n5(e).forEach((r, n) => {
                            let i = io(e, r.facetId),
                                o = it(r, n + 1);
                            if (n2(r)) {
                                if (!nX(e, r.facetId).length) return;
                                t.push({...o, ...n7(e, r.facetId), facetType: i, state: 'selected'});
                                return;
                            }
                            r.currentValues.forEach((e, n) => {
                                if ('idle' === e.state) return;
                                let a = n4(e, n + 1, i),
                                    s = n1(r) ? n8(e) : n6(e);
                                t.push({...o, ...a, ...s});
                            });
                        }),
                        n3(e).forEach((e, r) => {
                            let n = ie(e, r + 1);
                            e.values.forEach((e, r) => {
                                if ('idle' === e.state) return;
                                let i = n4(e, r + 1, 'specific'),
                                    o = n8(e);
                                t.push({...n, ...i, ...o});
                            });
                        }),
                        t
                    );
                },
                n1 = (e) => 'specific' === e.type,
                n2 = (e) => 'hierarchical' === e.type,
                n5 = (e) =>
                    [
                        ...Object.values(e.facetSet),
                        ...Object.values(e.categoryFacetSet),
                        ...Object.values(e.dateFacetSet),
                        ...Object.values(e.numericFacetSet),
                    ].map((e) => e.request),
                n3 = (e) => [...Object.values(e.automaticFacetSet.set)].map((e) => e.response),
                n4 = (e, t, r) => ({state: e.state, valuePosition: t, facetType: r}),
                n6 = (e) => ({
                    displayValue: `${e.start}..${e.end}`,
                    value: `${e.start}..${e.end}`,
                    start: e.start,
                    end: e.end,
                    endInclusive: e.endInclusive,
                }),
                n8 = (e) => ({displayValue: e.value, value: e.value}),
                n9 = (e, t) =>
                    nX(e, t)
                        .map((e) => e.value)
                        .join(';'),
                n7 = (e, t) => {
                    let r = n9(e, t);
                    return {value: r, valuePosition: 1, displayValue: r};
                },
                ie = (e, t) => ({title: ir(e.field, e.field), field: e.field, id: e.field, facetPosition: t}),
                it = (e, t) => ({title: ir(e.field, e.facetId), field: e.field, id: e.facetId, facetPosition: t}),
                ir = (e, t) => `${e}_${t}`,
                ii = (e, t) => {
                    var r, n, i, o, a;
                    return (
                        (null == (r = e.facetSet[t]) ? void 0 : r.request) ||
                        (null == (n = e.categoryFacetSet[t]) ? void 0 : n.request) ||
                        (null == (i = e.dateFacetSet[t]) ? void 0 : i.request) ||
                        (null == (o = e.numericFacetSet[t]) ? void 0 : o.request) ||
                        (null == (a = e.automaticFacetSet.set[t]) ? void 0 : a.response)
                    );
                },
                io = (e, t) => {
                    let r = ii(e, t);
                    return r ? r.type : 'specific';
                },
                ia = () => ({q: '', enableQuerySyntax: !1}),
                is = class extends nK {
                    getFacetState() {
                        var e, t, r, n, i, o;
                        return n0({
                            facetSet: null != (t = (e = this.getState()).facetSet) ? t : {},
                            categoryFacetSet: null != (r = e.categoryFacetSet) ? r : {},
                            dateFacetSet: null != (n = e.dateFacetSet) ? n : {},
                            numericFacetSet: null != (i = e.numericFacetSet) ? i : {},
                            automaticFacetSet:
                                null != (o = e.automaticFacetSet) ? o : {desiredCount: 5, numberOfValues: 8, set: {}},
                        });
                    }
                    getPipeline() {
                        var e;
                        return (
                            this.state.pipeline ||
                            (null == (e = this.state.search) ? void 0 : e.response.pipeline) ||
                            is.fallbackPipelineName
                        );
                    }
                    getSearchEventRequestPayload() {
                        return {
                            queryText: this.queryText,
                            responseTime: this.responseTime,
                            results: this.resultURIs,
                            numberOfResults: this.numberOfResults,
                        };
                    }
                    getSearchUID() {
                        var e, t;
                        let r = this.getState();
                        return (
                            (null == (e = r.search) ? void 0 : e.searchResponseId) ||
                            (null == (t = r.search) ? void 0 : t.response.searchUid) ||
                            es().response.searchUid
                        );
                    }
                    getSplitTestRunName() {
                        var e;
                        return null == (e = this.state.search) ? void 0 : e.response.splitTestRun;
                    }
                    getSplitTestRunVersion() {
                        var e;
                        let t = !!this.getSplitTestRunName(),
                            r =
                                (null == (e = this.state.search) ? void 0 : e.response.pipeline) ||
                                this.state.pipeline ||
                                is.fallbackPipelineName;
                        return t ? r : void 0;
                    }
                    getBaseMetadata() {
                        var e, t, r;
                        let n = this.getState(),
                            i = super.getBaseMetadata(),
                            o =
                                null ==
                                (r =
                                    null == (t = null == (e = n.search) ? void 0 : e.response)
                                        ? void 0
                                        : t.extendedResults)
                                    ? void 0
                                    : r.generativeQuestionAnsweringId;
                        return (o && (i.generativeQuestionAnsweringId = o), i);
                    }
                    get resultURIs() {
                        var e;
                        return null == (e = this.results)
                            ? void 0
                            : e.map((e) => ({documentUri: e.uri, documentUriHash: e.raw.urihash}));
                    }
                    get results() {
                        var e;
                        return null == (e = this.state.search) ? void 0 : e.response.results;
                    }
                    get queryText() {
                        var e;
                        return (null == (e = this.state.query) ? void 0 : e.q) || ia().q;
                    }
                    get responseTime() {
                        var e;
                        return (null == (e = this.state.search) ? void 0 : e.duration) || es().duration;
                    }
                    get numberOfResults() {
                        var e;
                        return (
                            (null == (e = this.state.search) ? void 0 : e.response.totalCountFiltered) ||
                            es().response.totalCountFiltered
                        );
                    }
                },
                iu = is;
            iu.fallbackPipelineName = 'default';
            var ic = ({
                    logger: e,
                    getState: t,
                    analyticsClientMiddleware: r = (e, t) => t,
                    preprocessRequest: n,
                    provider: i = new iu(t),
                }) => {
                    let o = t(),
                        a = o.configuration.accessToken,
                        s = o.configuration.analytics.apiBaseUrl,
                        u = o.configuration.analytics.runtimeEnvironment,
                        c = o.configuration.analytics.enabled,
                        l = new nL(
                            {
                                token: a,
                                endpoint: s,
                                runtimeEnvironment: u,
                                preprocessRequest: n,
                                beforeSendHooks: [
                                    r,
                                    (t, r) => (e.info({...r, type: t, endpoint: s, token: a}, 'Analytics request'), r),
                                ],
                            },
                            i,
                        );
                    return (c || l.disable(), l);
                },
                il =
                    (((u = il || {})[(u.Search = 0)] = 'Search'),
                    (u[(u.Custom = 1)] = 'Custom'),
                    (u[(u.Click = 2)] = 'Click'),
                    u),
                id = (e, t, r, n = (e) => new iu(e)) => {
                    var i;
                    let o, a;
                    return (
                        (i = async ({getState: e, analyticsClientMiddleware: i, preprocessRequest: o, logger: a}) => {
                            let s = ic({
                                    getState: e,
                                    logger: a,
                                    analyticsClientMiddleware: i,
                                    preprocessRequest: o,
                                    provider: n(e),
                                }),
                                u = await r(s, e());
                            return {
                                description: null == u ? void 0 : u.description,
                                log: async ({state: e}) => {
                                    let r = await (null == u ? void 0 : u.log({searchUID: n(() => e).getSearchUID()}));
                                    return (
                                        a.info({client: s.coveoAnalyticsClient, response: r}, 'Analytics response'),
                                        {analyticsType: t}
                                    );
                                },
                            };
                        }),
                        Object.assign(
                            (a = (o = (t) => Object.assign(t1(e, t), {instantlyCallable: !0}))(
                                async (e, {getState: t, extra: r}) => {
                                    let {analyticsClientMiddleware: n, preprocessRequest: o, logger: a} = r;
                                    return await (
                                        await i({
                                            getState: t,
                                            analyticsClientMiddleware: n,
                                            preprocessRequest: o,
                                            logger: a,
                                        })
                                    ).log({state: t(), extra: r});
                                },
                            )),
                            {
                                prepare: async ({
                                    getState: e,
                                    analyticsClientMiddleware: t,
                                    preprocessRequest: r,
                                    logger: n,
                                }) => {
                                    let {description: a, log: s} = await i({
                                        getState: e,
                                        analyticsClientMiddleware: t,
                                        preprocessRequest: r,
                                        logger: n,
                                    });
                                    return {
                                        description: a,
                                        action: o(
                                            async (e, {getState: t, extra: r}) => await s({state: t(), extra: r}),
                                        ),
                                    };
                                },
                            },
                        ),
                        a
                    );
                },
                ih = () =>
                    id(
                        'analytics/productRecommendations/load',
                        il.Search,
                        (e) => e.makeRecommendationInterfaceLoad(),
                        (e) => new nJ(e),
                    ),
                ip = tY('productrecommendations/setId', (e) => rt(e, {id: t6})),
                im = tY('productrecommendations/setSku', (e) =>
                    rt(e, {skus: new ei({required: !0, min: 1, each: t8})}),
                ),
                ig = tY('productrecommendations/setBrand', (e) =>
                    rt(e, {brand: new ee({required: !0, emptyAllowed: !0})}),
                ),
                iv = tY('productrecommendations/setCategory', (e) =>
                    rt(e, {category: new ee({required: !0, emptyAllowed: !0})}),
                ),
                iy = tY('productrecommendations/setAdditionalFields', (e) =>
                    rt(e, {additionalFields: new ei({required: !0, each: t8})}),
                ),
                ib = tY('productrecommendations/setMaxNumberOfRecommendations', (e) =>
                    rt(e, {number: new G({required: !0, max: 50, min: 1})}),
                ),
                iS = t1(
                    'productRecommendations/get',
                    async (e, {getState: t, rejectWithValue: r, extra: {apiClient: n}}) => {
                        let i = t(),
                            o = new Date().getTime(),
                            a = await n.productRecommendations(await ik(i)),
                            s = new Date().getTime() - o;
                        if (ej(a)) return r(a.error);
                        let u = i.productRecommendations.additionalFields || [];
                        return {
                            recommendations: a.success.results.map((e) => iw(e, {additionalFields: u})),
                            analyticsAction: ih(),
                            searchUid: a.success.searchUid,
                            duration: s,
                        };
                    },
                ),
                iw = (e, {additionalFields: t}) => {
                    let r = e.raw.ec_price,
                        n = e.raw.ec_promo_price,
                        i = e.raw.ec_in_stock,
                        o = {
                            documentUri: e.uri,
                            documentUriHash: e.raw.urihash,
                            permanentid: e.raw.permanentid,
                            clickUri: e.clickUri,
                            ec_name: e.raw.ec_name,
                            ec_brand: e.raw.ec_brand,
                            ec_category: e.raw.ec_category,
                            ec_item_group_id: e.raw.ec_item_group_id,
                            ec_price: r,
                            ec_shortdesc: e.raw.ec_shortdesc,
                            ec_thumbnails: e.raw.ec_thumbnails,
                            ec_images: e.raw.ec_images,
                            ec_promo_price: void 0 === n || (void 0 !== r && n >= r) ? void 0 : n,
                            ec_in_stock:
                                void 0 === i ? void 0 : 'yes' === i.toLowerCase() || 'true' === i.toLowerCase(),
                            ec_rating: e.raw.ec_rating,
                            additionalFields: t.reduce((t, r) => ({...t, [r]: e.raw[r]}), {}),
                            childResults: [],
                            totalNumberOfChildResults: 0,
                        };
                    return (
                        e &&
                            'childResults' in e &&
                            'totalNumberOfChildResults' in e &&
                            ((o.childResults = e.childResults.map((e) => iw(e, {additionalFields: t}))),
                            (o.totalNumberOfChildResults = e.totalNumberOfChildResults)),
                        o
                    );
                },
                ik = async (e) => ({
                    accessToken: e.configuration.accessToken,
                    organizationId: e.configuration.organizationId,
                    url: e.configuration.search.apiBaseUrl,
                    locale: e.configuration.search.locale,
                    timezone: e.configuration.search.timezone,
                    ...(e.configuration.analytics.enabled && {visitorId: await nz(e.configuration.analytics)}),
                    recommendation: e.productRecommendations.id,
                    numberOfResults: e.productRecommendations.maxNumberOfRecommendations,
                    fieldsToInclude: [...nQ, ...(e.productRecommendations.additionalFields || [])],
                    mlParameters: {
                        ...(e.productRecommendations.skus &&
                            e.productRecommendations.skus.length > 0 && {itemIds: e.productRecommendations.skus}),
                        ...(e.productRecommendations.filter.brand && {
                            brandFilter: e.productRecommendations.filter.brand,
                        }),
                        ...(e.productRecommendations.filter.category && {
                            categoryFilter: e.productRecommendations.filter.category,
                        }),
                    },
                    actionsHistory: e.configuration.analytics.enabled ? nH.getHistory() : [],
                    ...(e.context && {context: e.context.contextValues}),
                    ...(e.dictionaryFieldContext && {dictionaryFieldContext: e.dictionaryFieldContext.contextValues}),
                    ...(e.searchHub && {searchHub: e.searchHub}),
                }),
                iO = tG(nB(), (e) => {
                    e.addCase(ip, (e, t) => {
                        e.id = t.payload.id;
                    })
                        .addCase(im, (e, t) => {
                            e.skus = t.payload.skus;
                        })
                        .addCase(ig, (e, t) => {
                            e.filter.brand = t.payload.brand;
                        })
                        .addCase(iv, (e, t) => {
                            e.filter.category = t.payload.category;
                        })
                        .addCase(ib, (e, t) => {
                            e.maxNumberOfRecommendations = t.payload.number;
                        })
                        .addCase(iy, (e, t) => {
                            e.additionalFields = t.payload.additionalFields;
                        })
                        .addCase(iS.rejected, (e, t) => {
                            ((e.error = t.payload ? t.payload : null), (e.isLoading = !1));
                        })
                        .addCase(iS.fulfilled, (e, t) => {
                            ((e.error = null),
                                (e.searchUid = t.payload.searchUid),
                                (e.recommendations = t.payload.recommendations),
                                (e.isLoading = !1));
                        })
                        .addCase(iS.pending, (e) => {
                            e.isLoading = !0;
                        });
                }),
                iI = tY('searchHub/set', (e) => rt(e, new ee({required: !0, emptyAllowed: !0}))),
                iE = tY('history/undo'),
                iC = tY('history/redo');
            (tY('history/snapshot'),
                t1('history/back', async (e, {dispatch: t}) => {
                    (t(iE()), await t(iD()));
                }),
                t1('history/forward', async (e, {dispatch: t}) => {
                    (t(iC()), await t(iD()));
                }));
            var iD = t1('history/change', async (e, {getState: t}) => t().history.present),
                iU = tG(nW(), (e) => {
                    e.addCase(iI, (e, t) => t.payload)
                        .addCase(iD.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.searchHub) ? n : e;
                        })
                        .addCase(rs, (e, t) => t.payload.searchHub || e);
                }),
                iR = tG(nY, (e) => e),
                iA = (e) => (t) => (r) => {
                    var n, i;
                    let o = null == (n = r.payload) ? void 0 : n.analyticsAction;
                    void 0 !== o && (null == (i = r.payload) || delete i.analyticsAction);
                    let a = t(r);
                    return (
                        'search/executeSearch/fullfilled' === r.type &&
                            void 0 === o &&
                            console.error('No analytics action associated with search:', r),
                        'recommendation/get/fullfilled' === r.type &&
                            void 0 === o &&
                            console.error('No analytics action associated with recommendation:', r),
                        'productRecommendations/get/fullfilled' === r.type &&
                            void 0 === o &&
                            console.error('No analytics action associated with product recommendation:', r),
                        void 0 !== o && e.dispatch(o),
                        a
                    );
                },
                ix = {
                    q: new ee(),
                    enableQuerySyntax: new J(),
                    aq: new ee(),
                    cq: new ee(),
                    firstResult: new G({min: 0}),
                    numberOfResults: new G({min: 0}),
                    sortCriteria: new ee(),
                    f: new er(),
                    cf: new er(),
                    nf: new er(),
                    df: new er(),
                    debug: new J(),
                    sf: new er(),
                    tab: new ee(),
                    af: new er(),
                },
                ij = tY('searchParameters/restore', (e) => rt(e, ix));
            tY('tab/register', (e) => rt(e, new er({values: {id: t6, expression: t9}})));
            var iP = tY('tab/updateActiveTab', (e) => rt(e, t6)),
                iT = I(M()),
                i_ = I(L()),
                i$ = I(N());
            (iT.default.extend(i$.default), iT.default.extend(i_.default));
            var iF = '/rest/search/v2',
                iq = '/rest/ua',
                iM = tG(
                    {
                        organizationId: '',
                        accessToken: '',
                        platformUrl: ew(),
                        search: {
                            apiBaseUrl: `${ew()}${iF}`,
                            locale: 'en-US',
                            timezone: iT.default.tz.guess(),
                            authenticationProviders: [],
                        },
                        analytics: {
                            enabled: !0,
                            apiBaseUrl: `${eb('analytics', void 0)}${iq}`,
                            originContext: 'Search',
                            originLevel2: 'default',
                            originLevel3: 'default',
                            anonymous: !1,
                            deviceId: '',
                            userDisplayName: '',
                            documentLocation: '',
                        },
                    },
                    (e) =>
                        e
                            .addCase(ra, (e, t) => {
                                (t.payload.accessToken && (e.accessToken = t.payload.accessToken),
                                    t.payload.organizationId && (e.organizationId = t.payload.organizationId),
                                    t.payload.platformUrl &&
                                        ((e.platformUrl = t.payload.platformUrl),
                                        (e.search.apiBaseUrl = `${t.payload.platformUrl}${iF}`),
                                        (e.analytics.apiBaseUrl = (function (e, t) {
                                            if (eE(e)) return e.replace(/^(https:\/\/)platform/, '$1analytics') + iq;
                                            let r = eC(e, t);
                                            return r ? eS(t, r.environment).analytics : e;
                                        })(t.payload.platformUrl, e.organizationId))));
                            })
                            .addCase(rs, (e, t) => {
                                (t.payload.apiBaseUrl && (e.search.apiBaseUrl = t.payload.apiBaseUrl),
                                    t.payload.locale && (e.search.locale = t.payload.locale),
                                    t.payload.timezone && (e.search.timezone = t.payload.timezone),
                                    t.payload.authenticationProviders &&
                                        (e.search.authenticationProviders = t.payload.authenticationProviders));
                            })
                            .addCase(ru, (e, t) => {
                                (Y(t.payload.enabled) ||
                                    (!t.payload.enabled && e.analytics.enabled && nV(e.analytics),
                                    (e.analytics.enabled = t.payload.enabled)),
                                    Y(t.payload.originContext) || (e.analytics.originContext = t.payload.originContext),
                                    Y(t.payload.originLevel2) || (e.analytics.originLevel2 = t.payload.originLevel2),
                                    Y(t.payload.originLevel3) || (e.analytics.originLevel3 = t.payload.originLevel3),
                                    Y(t.payload.apiBaseUrl) || (e.analytics.apiBaseUrl = t.payload.apiBaseUrl),
                                    Y(t.payload.runtimeEnvironment) ||
                                        (e.analytics.runtimeEnvironment = t.payload.runtimeEnvironment),
                                    Y(t.payload.anonymous) || (e.analytics.anonymous = t.payload.anonymous),
                                    Y(t.payload.deviceId) || (e.analytics.deviceId = t.payload.deviceId),
                                    Y(t.payload.userDisplayName) ||
                                        (e.analytics.userDisplayName = t.payload.userDisplayName),
                                    Y(t.payload.documentLocation) ||
                                        (e.analytics.documentLocation = t.payload.documentLocation));
                            })
                            .addCase(rc, (e) => {
                                ((e.analytics.enabled = !1), nV(e.analytics));
                            })
                            .addCase(rl, (e) => {
                                e.analytics.enabled = !0;
                            })
                            .addCase(rd, (e, t) => {
                                e.analytics.originLevel2 = t.payload.originLevel2;
                            })
                            .addCase(rh, (e, t) => {
                                e.analytics.originLevel3 = t.payload.originLevel3;
                            })
                            .addCase(iP, (e, t) => {
                                e.analytics.originLevel2 = t.payload;
                            })
                            .addCase(ij, (e, t) => {
                                e.analytics.originLevel2 = t.payload.tab || e.analytics.originLevel2;
                            }),
                ),
                iL = () => (e) => (t) => e(t.instantlyCallable ? t() : t),
                iN = (e) => () => (t) => (r) => {
                    var n;
                    if (!r.error) return t(r);
                    let i = r.error;
                    if (
                        ((null == (n = r.payload) ? void 0 : n.ignored) ||
                            e.error(i.stack || i.message || i.name || 'Error', `Action dispatch error ${r.type}`, r),
                        'SchemaValidationError' !== r.error.name)
                    )
                        return t(r);
                },
                iz = (e) => (t) => (r) => (n) => (
                    e.debug({action: n, nextState: t.getState()}, `Action dispatched: ${n.type}`),
                    r(n)
                );
            async function iV(e) {
                try {
                    return await e();
                } catch (e) {
                    return '';
                }
            }
            var iH = {configuration: iM, version: iR},
                iQ = I(V()),
                iB = {
                    organizationId: t6,
                    accessToken: t6,
                    platformUrl: new ee({required: !1, emptyAllowed: !1}),
                    name: new ee({required: !1, emptyAllowed: !1}),
                    analytics: new er({
                        options: {required: !1},
                        values: {
                            enabled: new J({required: !1}),
                            originContext: new ee({required: !1}),
                            originLevel2: new ee({required: !1}),
                            originLevel3: new ee({required: !1}),
                        },
                    }),
                },
                iW = new Q({...iB, searchHub: t8, locale: t8, timezone: t8}),
                iY = {searchHub: iU, productRecommendations: iO},
                iG = new ei({each: t6, required: !0}),
                iK = (e, t) => (rt(e, t6), et(t) ? rt(t, t6) : rt(t, iG), {payload: {contextKey: e, contextValue: t}}),
                iJ = tY('context/set', (e) => {
                    for (let [t, r] of Object.entries(e)) iK(t, r);
                    return {payload: e};
                }),
                iZ = tY('context/add', (e) => iK(e.contextKey, e.contextValue)),
                iX = tY('context/remove', (e) => rt(e, t6));
            tG({contextValues: {}}, (e) => {
                e.addCase(iJ, (e, t) => {
                    e.contextValues = t.payload;
                })
                    .addCase(iZ, (e, t) => {
                        e.contextValues[t.payload.contextKey] = t.payload.contextValue;
                    })
                    .addCase(iX, (e, t) => {
                        delete e.contextValues[t.payload];
                    })
                    .addCase(iD.fulfilled, (e, t) => {
                        t.payload && (e.contextValues = t.payload.context.contextValues);
                    });
            });
            var i0 = tY('dictionaryFieldContext/set', (e) => {
                    let t = rt(e, new er({options: {required: !0}})).error;
                    if (t) return {payload: e, error: t};
                    let r = rt(Object.values(e), new ei({each: t9})).error;
                    return r ? {payload: e, error: r} : {payload: e};
                }),
                i1 = tY('dictionaryFieldContext/add', (e) =>
                    rt(e, new er({options: {required: !0}, values: {field: t9, key: t9}})),
                ),
                i2 = tY('dictionaryFieldContext/remove', (e) => rt(e, t9));
            tG({contextValues: {}}, (e) => {
                e.addCase(i0, (e, t) => {
                    e.contextValues = t.payload;
                })
                    .addCase(i1, (e, t) => {
                        let {field: r, key: n} = t.payload;
                        e.contextValues[r] = n;
                    })
                    .addCase(i2, (e, t) => {
                        delete e.contextValues[t.payload];
                    })
                    .addCase(iD.fulfilled, (e, t) => {
                        t.payload && (e.contextValues = t.payload.dictionaryFieldContext.contextValues);
                    });
            });
            var i5 = {
                    additionalFields: new ei({required: !1, each: t8}),
                    skus: new ei({required: !1, each: t8}),
                    maxNumberOfRecommendations: new G({required: !1, max: 50, min: 1, default: 5}),
                },
                i3 = new Q({id: t6, ...i5}),
                i4 = (e, t = {}) => {
                    let r, n, i, o;
                    !(function (e) {
                        e.addReducers({productRecommendations: iO, configuration: iM});
                    })(e);
                    let a =
                            ((n = new Map()),
                            (i = () => 0 === n.size),
                            (o = (e) => {
                                try {
                                    let t = JSON.stringify(e),
                                        n = r !== t;
                                    return ((r = t), n);
                                } catch (e) {
                                    return (
                                        console.warn(
                                            'Could not detect if state has changed, check the controller "get state method"',
                                            e,
                                        ),
                                        !0
                                    );
                                }
                            }),
                            {
                                subscribe(t) {
                                    t();
                                    let a = Symbol(),
                                        s;
                                    return (
                                        i() &&
                                            ((r = JSON.stringify(this.state)),
                                            (s = e.subscribe(() => {
                                                o(this.state) && n.forEach((e) => e());
                                            }))),
                                        n.set(a, t),
                                        () => {
                                            (n.delete(a), i() && s && s());
                                        }
                                    );
                                },
                                get state() {
                                    return {};
                                },
                            }),
                        {dispatch: s} = e,
                        u = () => e.state,
                        c = rr(e, i3, t.options, 'buildBaseProductRecommendationsList');
                    return (
                        s(ip({id: c.id})),
                        s(ib({number: c.maxNumberOfRecommendations})),
                        c.additionalFields && s(iy({additionalFields: c.additionalFields})),
                        c.skus && s(im({skus: c.skus})),
                        {
                            ...a,
                            setSkus(e) {
                                s(im({skus: e}));
                            },
                            refresh() {
                                s(iS());
                            },
                            get state() {
                                let {
                                    skus: e,
                                    maxNumberOfRecommendations: t,
                                    recommendations: r,
                                    error: n,
                                    isLoading: i,
                                } = u().productRecommendations;
                                return {
                                    skus: e,
                                    maxNumberOfRecommendations: t,
                                    recommendations: r,
                                    error: n,
                                    isLoading: i,
                                };
                            },
                        }
                    );
                },
                i6 = new Q({
                    sku: new ee({required: !0, emptyAllowed: !1}),
                    maxNumberOfRecommendations: i5.maxNumberOfRecommendations,
                    additionalFields: i5.additionalFields,
                });
            'undefined' == typeof window &&
                (r.g.crypto || (r.g.crypto = w('crypto')),
                !r.g.crypto.getRandomValues &&
                    r.g.crypto.webcrypto &&
                    (r.g.crypto.getRandomValues = (0, r.g.crypto).webcrypto.getRandomValues.bind(
                        r.g.crypto.webcrypto,
                    )));
            let i8 = class {
                constructor(e) {
                    ((0, f.r)(this, e), (this.unsubscribe = () => {}));
                }
                componentWillLoad() {
                    let e = {
                        organizationId: 'searchuisamples',
                        accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
                        organizationEndpoints: eS('searchuisamples'),
                        searchHub: 'default',
                    };
                    ((this.engine = (function (e) {
                        var t, r, n;
                        let i =
                            ((t = e.loggerOptions),
                            (0, iQ.default)({
                                name: '@coveo/headless',
                                level: (null == t ? void 0 : t.level) || 'warn',
                                formatters: {log: null == t ? void 0 : t.logFormatter},
                                browser: {transmit: {send: (null == t ? void 0 : t.browserPostLogHook) || (() => {})}},
                            }));
                        (function (e, t) {
                            try {
                                iW.validate(e);
                            } catch (e) {
                                throw (t.error('Product Recommendation engine configuration error', e), e);
                            }
                        })(e.configuration, i);
                        let o =
                                ((n = e.configuration),
                                new ex({
                                    logger: i,
                                    preprocessRequest: n.preprocessRequest || eo,
                                    postprocessSearchResponseMiddleware: eT,
                                    postprocessFacetSearchResponseMiddleware: e_,
                                    postprocessQuerySuggestResponseMiddleware: e$,
                                })),
                            a = {
                                analyticsClientMiddleware: (function (e) {
                                    let {analytics: t} = e;
                                    return (null == t ? void 0 : t.analyticsClientMiddleware) || ((e, t) => t);
                                })((r = e.configuration)),
                                validatePayload: re,
                                preprocessRequest: r.preprocessRequest || eo,
                                logger: i,
                                apiClient: o,
                            },
                            s = (function (e, t) {
                                var r, n;
                                let i = (function (e, t) {
                                        var r, n, i;
                                        let o, a, s;
                                        let {reducers: u} = e,
                                            c =
                                                ((n = {...iH, ...u}),
                                                (i = null != (r = e.preloadedState) ? r : {}),
                                                (o = {...n}),
                                                (s = (e) => (t, r) => {
                                                    let n = e(t, r);
                                                    return a ? a(n, r) : n;
                                                }),
                                                {
                                                    get combinedReducer() {
                                                        return s(
                                                            tU({
                                                                ...(function (e) {
                                                                    let t = {};
                                                                    for (let [r, n] of e) t[r] = n;
                                                                    return t;
                                                                })(
                                                                    Object.entries(i)
                                                                        .filter(([e]) => !(e in o))
                                                                        .map(([e, t]) => [e, () => t]),
                                                                ),
                                                                ...o,
                                                            }),
                                                        );
                                                    },
                                                    containsAll: (e) => Object.keys(e).every((e) => e in o),
                                                    add(e) {
                                                        Object.keys(e)
                                                            .filter((e) => !(e in o))
                                                            .forEach((t) => (o[t] = e[t]));
                                                    },
                                                    addCrossReducer(e) {
                                                        a = e;
                                                    },
                                                });
                                        e.crossReducer && c.addCrossReducer(e.crossReducer);
                                        let l = t.logger,
                                            d = (function (e, t, r) {
                                                let {preloadedState: n, configuration: i} = e,
                                                    o = i.name || 'coveo-headless',
                                                    a = (function (e, t) {
                                                        var r, n, i, o, a, s, u, c, l, d, h;
                                                        let f;
                                                        let {renewAccessToken: p} = e.configuration;
                                                        return [
                                                            iL,
                                                            ((f = 0),
                                                            (r = () => (f = 0)),
                                                            void 0 === n && (n = {}),
                                                            (s = null != (i = n.isImmediate) && i),
                                                            (u = null != (o = n.callback) && o),
                                                            (c = n.maxWait),
                                                            (l = Date.now()),
                                                            (d = []),
                                                            ((h = function () {
                                                                var e = [].slice.call(arguments),
                                                                    t = this;
                                                                return new Promise(function (n, i) {
                                                                    var o = s && void 0 === a;
                                                                    if (
                                                                        (void 0 !== a && clearTimeout(a),
                                                                        (a = setTimeout(
                                                                            function () {
                                                                                if (
                                                                                    ((a = void 0), (l = Date.now()), !s)
                                                                                ) {
                                                                                    var n = r.apply(t, e);
                                                                                    (u && u(n),
                                                                                        d.forEach(function (e) {
                                                                                            return (0, e.resolve)(n);
                                                                                        }),
                                                                                        (d = []));
                                                                                }
                                                                            },
                                                                            (function () {
                                                                                if (void 0 !== c) {
                                                                                    var e = Date.now() - l;
                                                                                    if (e + 500 >= c) return c - e;
                                                                                }
                                                                                return 500;
                                                                            })(),
                                                                        )),
                                                                        o)
                                                                    ) {
                                                                        var h = r.apply(t, e);
                                                                        return (u && u(h), n(h));
                                                                    }
                                                                    d.push({resolve: n, reject: i});
                                                                });
                                                            }).cancel = function (e) {
                                                                (void 0 !== a && clearTimeout(a),
                                                                    d.forEach(function (t) {
                                                                        return (0, t.reject)(e);
                                                                    }),
                                                                    (d = []));
                                                            }),
                                                            (e) => (r) => async (n) => {
                                                                var i;
                                                                if ('function' != typeof n) return r(n);
                                                                let o = await r(n);
                                                                if (
                                                                    (null == (i = null == o ? void 0 : o.error)
                                                                        ? void 0
                                                                        : i.name) !== new em().name
                                                                )
                                                                    return o;
                                                                if ('function' != typeof p)
                                                                    return (
                                                                        t.warn(
                                                                            'Unable to renew the expired token because a renew function was not provided. Please specify the #renewAccessToken option when initializing the engine.',
                                                                        ),
                                                                        o
                                                                    );
                                                                if (f >= 5)
                                                                    return (
                                                                        t.warn(
                                                                            'Attempted to renew the token but was not successful. Please check the #renewAccessToken function.',
                                                                        ),
                                                                        o
                                                                    );
                                                                (f++, h());
                                                                let a = await iV(p);
                                                                (e.dispatch(ra({accessToken: a})), e.dispatch(n));
                                                            }),
                                                            iN(t),
                                                            iA,
                                                        ].concat(e.middlewares || []);
                                                    })(e, t.logger);
                                                return (function ({
                                                    reducer: e,
                                                    preloadedState: t,
                                                    middlewares: r = [],
                                                    thunkExtraArguments: n,
                                                    name: i,
                                                }) {
                                                    return (function (e) {
                                                        var t,
                                                            r = function (e) {
                                                                var t, r, n, i;
                                                                return (
                                                                    void 0 === (t = e) && (t = {}),
                                                                    (n = void 0 === (r = t.thunk) || r),
                                                                    (i = new tB()),
                                                                    n &&
                                                                        ('boolean' == typeof n
                                                                            ? i.push(tj)
                                                                            : i.push(
                                                                                  tj.withExtraArgument(n.extraArgument),
                                                                              )),
                                                                    i
                                                                );
                                                            },
                                                            n = e || {},
                                                            i = n.reducer,
                                                            o = void 0 === i ? void 0 : i,
                                                            a = n.middleware,
                                                            s = void 0 === a ? r() : a,
                                                            u = n.devTools,
                                                            c = void 0 === u || u,
                                                            l = n.preloadedState,
                                                            d = void 0 === l ? void 0 : l,
                                                            h = n.enhancers,
                                                            f = void 0 === h ? void 0 : h;
                                                        if ('function' == typeof o) t = o;
                                                        else if (
                                                            (function (e) {
                                                                if ('object' != typeof e || null === e) return !1;
                                                                var t = Object.getPrototypeOf(e);
                                                                if (null === t) return !0;
                                                                for (var r = t; null !== Object.getPrototypeOf(r); )
                                                                    r = Object.getPrototypeOf(r);
                                                                return t === r;
                                                            })(o)
                                                        )
                                                            t = tU(o);
                                                        else
                                                            throw Error(
                                                                '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
                                                            );
                                                        var p = s;
                                                        'function' == typeof p && (p = p(r));
                                                        var m = tA.apply(void 0, p),
                                                            g = tR;
                                                        c && (g = tQ(tV({trace: !1}, 'object' == typeof c && c)));
                                                        var v = [m];
                                                        return (
                                                            Array.isArray(f)
                                                                ? (v = t_([m], f))
                                                                : 'function' == typeof f && (v = f(v)),
                                                            (function e(t, r, n) {
                                                                if (
                                                                    ('function' == typeof r &&
                                                                        'function' == typeof n) ||
                                                                    ('function' == typeof n &&
                                                                        'function' == typeof arguments[3])
                                                                )
                                                                    throw Error(tI(0));
                                                                if (
                                                                    ('function' == typeof r &&
                                                                        void 0 === n &&
                                                                        ((n = r), (r = void 0)),
                                                                    void 0 !== n)
                                                                ) {
                                                                    if ('function' != typeof n) throw Error(tI(1));
                                                                    return n(e)(t, r);
                                                                }
                                                                if ('function' != typeof t) throw Error(tI(2));
                                                                var i,
                                                                    o = t,
                                                                    a = r,
                                                                    s = [],
                                                                    u = s,
                                                                    c = !1;
                                                                function l() {
                                                                    u === s && (u = s.slice());
                                                                }
                                                                function d() {
                                                                    if (c) throw Error(tI(3));
                                                                    return a;
                                                                }
                                                                function h(e) {
                                                                    if ('function' != typeof e) throw Error(tI(4));
                                                                    if (c) throw Error(tI(5));
                                                                    var t = !0;
                                                                    return (
                                                                        l(),
                                                                        u.push(e),
                                                                        function () {
                                                                            if (t) {
                                                                                if (c) throw Error(tI(6));
                                                                                ((t = !1), l());
                                                                                var r = u.indexOf(e);
                                                                                (u.splice(r, 1), (s = null));
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                                function f(e) {
                                                                    if (
                                                                        !(function (e) {
                                                                            if ('object' != typeof e || null === e)
                                                                                return !1;
                                                                            for (
                                                                                var t = e;
                                                                                null !== Object.getPrototypeOf(t);

                                                                            )
                                                                                t = Object.getPrototypeOf(t);
                                                                            return Object.getPrototypeOf(e) === t;
                                                                        })(e)
                                                                    )
                                                                        throw Error(tI(7));
                                                                    if (void 0 === e.type) throw Error(tI(8));
                                                                    if (c) throw Error(tI(9));
                                                                    try {
                                                                        ((c = !0), (a = o(a, e)));
                                                                    } finally {
                                                                        c = !1;
                                                                    }
                                                                    for (var t = (s = u), r = 0; r < t.length; r++)
                                                                        (0, t[r])();
                                                                    return e;
                                                                }
                                                                return (
                                                                    f({type: tD.INIT}),
                                                                    ((i = {
                                                                        dispatch: f,
                                                                        subscribe: h,
                                                                        getState: d,
                                                                        replaceReducer: function (e) {
                                                                            if ('function' != typeof e)
                                                                                throw Error(tI(10));
                                                                            ((o = e), f({type: tD.REPLACE}));
                                                                        },
                                                                    })[tE] = function () {
                                                                        var e;
                                                                        return (
                                                                            ((e = {
                                                                                subscribe: function (e) {
                                                                                    if (
                                                                                        'object' != typeof e ||
                                                                                        null === e
                                                                                    )
                                                                                        throw Error(tI(11));
                                                                                    function t() {
                                                                                        e.next && e.next(d());
                                                                                    }
                                                                                    return (t(), {unsubscribe: h(t)});
                                                                                },
                                                                            })[tE] = function () {
                                                                                return this;
                                                                            }),
                                                                            e
                                                                        );
                                                                    }),
                                                                    i
                                                                );
                                                            })(t, d, g.apply(void 0, v))
                                                        );
                                                    })({
                                                        reducer: e,
                                                        preloadedState: t,
                                                        devTools: {
                                                            stateSanitizer: (e) =>
                                                                e.history ? {...e, history: '<<OMIT>>'} : e,
                                                            name: i,
                                                            shouldHotReload: !1,
                                                        },
                                                        middleware: (e) => [
                                                            ...r,
                                                            ...e({thunk: {extraArgument: n}}),
                                                            iz(n.logger),
                                                        ],
                                                    });
                                                })({
                                                    preloadedState: n,
                                                    reducer: r.combinedReducer,
                                                    middlewares: a,
                                                    thunkExtraArguments: t,
                                                    name: o,
                                                });
                                            })(e, t, c);
                                        return {
                                            addReducers(e) {
                                                c.containsAll(e) || (c.add(e), d.replaceReducer(c.combinedReducer));
                                            },
                                            dispatch: d.dispatch,
                                            subscribe: d.subscribe,
                                            enableAnalytics() {
                                                d.dispatch(rl());
                                            },
                                            disableAnalytics() {
                                                d.dispatch(rc());
                                            },
                                            get state() {
                                                return d.getState();
                                            },
                                            logger: l,
                                            store: d,
                                        };
                                    })(e, t),
                                    {accessToken: o, organizationId: a} = e.configuration,
                                    {organizationEndpoints: s} = e.configuration,
                                    u = (null == s ? void 0 : s.platform) || e.configuration.platformUrl;
                                ((!Y(e.configuration.platformUrl) ||
                                    Y(null == (n = e.configuration.organizationEndpoints) ? void 0 : n.platform)) &&
                                    i.logger.warn(
                                        `The \`platformUrl\` (${e.configuration.platformUrl}) option will be deprecated in the next major version. Consider using the \`organizationEndpoints\` option instead. See [Organization endpoints](https://docs.coveo.com/en/mcc80216).`,
                                    ),
                                    W(e.configuration.organizationEndpoints)
                                        ? i.logger.warn(
                                              'The `organizationEndpoints` options was not explicitly set in the Headless engine configuration. Coveo recommends setting this option, as it has resiliency benefits and simplifies the overall configuration for multi-region deployments. See [Organization endpoints](https://docs.coveo.com/en/mcc80216).',
                                          )
                                        : (function (e) {
                                              let {platform: t} = e.configuration.organizationEndpoints;
                                              if (W(t)) return !1;
                                              let r = eD(t);
                                              return r && r.organizationId !== e.configuration.organizationId;
                                          })(e) &&
                                          i.logger.warn(
                                              `There is a mismatch between the \`organizationId\` option (${e.configuration.organizationId}) and the organization configured in the \`organizationEndpoints\` option (${null == (r = e.configuration.organizationEndpoints) ? void 0 : r.platform}). This could lead to issues that are complex to troubleshoot. Please make sure both values match.`,
                                          ),
                                    i.dispatch(ra({accessToken: o, organizationId: a, platformUrl: u})));
                                let c = (function (e, t) {
                                    var r, n;
                                    let i =
                                            (null == (r = e.configuration.organizationEndpoints)
                                                ? void 0
                                                : r.analytics) || void 0,
                                        {analyticsClientMiddleware: o, ...a} =
                                            null != (n = e.configuration.analytics) ? n : {},
                                        s = {...a, apiBaseUrl: i};
                                    return t4()
                                        ? (t.info('Analytics disabled since doNotTrack is active.'),
                                          {...s, enabled: !1})
                                        : s;
                                })(e, i.logger);
                                return (c && i.dispatch(ru(c)), i);
                            })({...e, reducers: iY}, a),
                            {searchHub: u, timezone: c, locale: l} = e.configuration;
                        return (
                            s.dispatch(rs({timezone: c, locale: l})),
                            Y(u) || s.dispatch(iI(u)),
                            {
                                ...s,
                                get state() {
                                    return s.state;
                                },
                            }
                        );
                    })({configuration: {...e, searchHub: 'frequently_bought_recommendations'}})),
                        (this.frequentlyBoughtTogether = (function (e, t) {
                            let r = rr(e, i6, t.options, 'buildFrequentlyBoughtTogetherList'),
                                n = i4(e, {
                                    ...t,
                                    options: {
                                        maxNumberOfRecommendations: r.maxNumberOfRecommendations,
                                        additionalFields: r.additionalFields,
                                        skus: [r.sku],
                                        id: 'frequentBought',
                                    },
                                }),
                                {setSkus: i, ...o} = n;
                            return {
                                ...o,
                                setSku(e) {
                                    i([e]);
                                },
                                get state() {
                                    let {skus: e, ...t} = n.state;
                                    return {...t, sku: e[0]};
                                },
                            };
                        })(this.engine, {options: {sku: 'abc'}})),
                        (this.unsubscribe = this.frequentlyBoughtTogether.subscribe(() => this.updateState())),
                        this.frequentlyBoughtTogether.refresh());
                }
                disconnectedCallback() {
                    this.unsubscribe();
                }
                updateState() {
                    this.state = this.frequentlyBoughtTogether.state;
                }
                render() {
                    return (0, f.h)(
                        'div',
                        null,
                        'FREQUENTLY BOUGHT TOGETHER:',
                        (0, f.h)(
                            'ul',
                            null,
                            this.state.recommendations.map((e) => (0, f.h)('li', null, e.ec_name)),
                        ),
                    );
                }
            };
        },
    },
]);
