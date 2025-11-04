'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [64227],
    {
        11810: function (e, t, r) {
            r.d(t, {
                D: function () {
                    return af;
                },
                L: function () {
                    return a$;
                },
                O: function () {
                    return sh;
                },
                R: function () {
                    return aV;
                },
                T: function () {
                    return ad;
                },
                a: function () {
                    return sf;
                },
                i: function () {
                    return ex;
                },
                r: function () {
                    return a_;
                },
                w: function () {
                    return ah;
                },
            });
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
             */ var n,
                i,
                a,
                o,
                s,
                u,
                l,
                c,
                d,
                h,
                f,
                p,
                g,
                m,
                v,
                y,
                S = Object.create,
                b = Object.defineProperty,
                w = Object.getOwnPropertyDescriptor,
                k = Object.getOwnPropertyNames,
                O = Object.getPrototypeOf,
                I = Object.prototype.hasOwnProperty,
                C = (e) => b(e, '__esModule', {value: !0}),
                D = r(22029),
                E = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports),
                R = (e, t, r) => {
                    if ((t && 'object' == typeof t) || 'function' == typeof t)
                        for (let n of k(t))
                            I.call(e, n) ||
                                'default' === n ||
                                b(e, n, {get: () => t[n], enumerable: !(r = w(t, n)) || r.enumerable});
                    return e;
                },
                q = (e) =>
                    R(
                        C(
                            b(
                                null != e ? S(O(e)) : {},
                                'default',
                                e && e.__esModule && 'default' in e
                                    ? {get: () => e.default, enumerable: !0}
                                    : {value: e, enumerable: !0},
                            ),
                        ),
                        e,
                    ),
                A = E((e, t) => {
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
                x = E((e, t) => {
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
                U = E((e, t) => {
                    var r = A(),
                        n = x();
                    t.exports = {atob: r, btoa: n};
                }),
                P = E((e, t) => {
                    t.exports = fetch;
                }),
                j = E((e) => {
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
                F = E((e) => {
                    (Object.defineProperty(e, '__esModule', {value: !0}),
                        (e.fullJitter = function (e) {
                            return Math.round(Math.random() * e);
                        }));
                }),
                T = E((e) => {
                    (Object.defineProperty(e, '__esModule', {value: !0}),
                        (e.noJitter = function (e) {
                            return e;
                        }));
                }),
                M = E((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = F(),
                        r = T();
                    e.JitterFactory = function (e) {
                        return 'full' === e.jitter ? t.fullJitter : r.noJitter;
                    };
                }),
                $ = E((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = M(),
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
                L = E((e) => {
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
                                return new (r || (r = Promise))(function (i, a) {
                                    function o(e) {
                                        try {
                                            u(n.next(e));
                                        } catch (e) {
                                            a(e);
                                        }
                                    }
                                    function s(e) {
                                        try {
                                            u(n.throw(e));
                                        } catch (e) {
                                            a(e);
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
                                              ).then(o, s);
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
                                    a,
                                    o = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & i[0]) throw i[1];
                                            return i[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (a = {next: s(0), throw: s(1), return: s(2)}),
                                    'function' == typeof Symbol &&
                                        (a[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    a
                                );
                                function s(a) {
                                    return function (s) {
                                        return (function (a) {
                                            if (r) throw TypeError('Generator is already executing.');
                                            for (; o; )
                                                try {
                                                    if (
                                                        ((r = 1),
                                                        n &&
                                                            (i =
                                                                2 & a[0]
                                                                    ? n.return
                                                                    : a[0]
                                                                      ? n.throw || ((i = n.return) && i.call(n), 0)
                                                                      : n.next) &&
                                                            !(i = i.call(n, a[1])).done)
                                                    )
                                                        return i;
                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                        case 0:
                                                        case 1:
                                                            i = a;
                                                            break;
                                                        case 4:
                                                            return (o.label++, {value: a[1], done: !1});
                                                        case 5:
                                                            (o.label++, (n = a[1]), (a = [0]));
                                                            continue;
                                                        case 7:
                                                            ((a = o.ops.pop()), o.trys.pop());
                                                            continue;
                                                        default:
                                                            if (
                                                                !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                                                                (6 === a[0] || 2 === a[0])
                                                            ) {
                                                                o = 0;
                                                                continue;
                                                            }
                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                o.label = a[1];
                                                                break;
                                                            }
                                                            if (6 === a[0] && o.label < i[1]) {
                                                                ((o.label = i[1]), (i = a));
                                                                break;
                                                            }
                                                            if (i && o.label < i[2]) {
                                                                ((o.label = i[2]), o.ops.push(a));
                                                                break;
                                                            }
                                                            (i[2] && o.ops.pop(), o.trys.pop());
                                                            continue;
                                                    }
                                                    a = t.call(e, o);
                                                } catch (e) {
                                                    ((a = [6, e]), (n = 0));
                                                } finally {
                                                    r = i = 0;
                                                }
                                            if (5 & a[0]) throw a[1];
                                            return {value: a[0] ? a[1] : void 0, done: !0};
                                        })([a, s]);
                                    };
                                }
                            };
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var a = (function (e) {
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
                    })($().Delay);
                    e.SkipFirstDelay = a;
                }),
                _ = E((e) => {
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
                    })($().Delay);
                    e.AlwaysDelay = n;
                }),
                V = E((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = L(),
                        r = _();
                    e.DelayFactory = function (e, n) {
                        var i = e.delayFirstAttempt ? new r.AlwaysDelay(e) : new t.SkipFirstDelay(e);
                        return (i.setAttemptNumber(n), i);
                    };
                }),
                N = E((e) => {
                    var t =
                            (e && e.__awaiter) ||
                            function (e, t, r, n) {
                                return new (r || (r = Promise))(function (i, a) {
                                    function o(e) {
                                        try {
                                            u(n.next(e));
                                        } catch (e) {
                                            a(e);
                                        }
                                    }
                                    function s(e) {
                                        try {
                                            u(n.throw(e));
                                        } catch (e) {
                                            a(e);
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
                                              ).then(o, s);
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
                                    a,
                                    o = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & i[0]) throw i[1];
                                            return i[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (a = {next: s(0), throw: s(1), return: s(2)}),
                                    'function' == typeof Symbol &&
                                        (a[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    a
                                );
                                function s(a) {
                                    return function (s) {
                                        return (function (a) {
                                            if (r) throw TypeError('Generator is already executing.');
                                            for (; o; )
                                                try {
                                                    if (
                                                        ((r = 1),
                                                        n &&
                                                            (i =
                                                                2 & a[0]
                                                                    ? n.return
                                                                    : a[0]
                                                                      ? n.throw || ((i = n.return) && i.call(n), 0)
                                                                      : n.next) &&
                                                            !(i = i.call(n, a[1])).done)
                                                    )
                                                        return i;
                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                        case 0:
                                                        case 1:
                                                            i = a;
                                                            break;
                                                        case 4:
                                                            return (o.label++, {value: a[1], done: !1});
                                                        case 5:
                                                            (o.label++, (n = a[1]), (a = [0]));
                                                            continue;
                                                        case 7:
                                                            ((a = o.ops.pop()), o.trys.pop());
                                                            continue;
                                                        default:
                                                            if (
                                                                !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                                                                (6 === a[0] || 2 === a[0])
                                                            ) {
                                                                o = 0;
                                                                continue;
                                                            }
                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                o.label = a[1];
                                                                break;
                                                            }
                                                            if (6 === a[0] && o.label < i[1]) {
                                                                ((o.label = i[1]), (i = a));
                                                                break;
                                                            }
                                                            if (i && o.label < i[2]) {
                                                                ((o.label = i[2]), o.ops.push(a));
                                                                break;
                                                            }
                                                            (i[2] && o.ops.pop(), o.trys.pop());
                                                            continue;
                                                    }
                                                    a = t.call(e, o);
                                                } catch (e) {
                                                    ((a = [6, e]), (n = 0));
                                                } finally {
                                                    r = i = 0;
                                                }
                                            if (5 & a[0]) throw a[1];
                                            return {value: a[0] ? a[1] : void 0, done: !0};
                                        })([a, s]);
                                    };
                                }
                            };
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var n = j(),
                        i = V();
                    e.backOff = function (e, i) {
                        return (
                            void 0 === i && (i = {}),
                            t(this, void 0, void 0, function () {
                                var t;
                                return r(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return ((t = n.getSanitizedOptions(i)), [4, new a(e, t).execute()]);
                                        case 1:
                                            return [2, r.sent()];
                                    }
                                });
                            })
                        );
                    };
                    var a = (function () {
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
                z = E((e, t) => {
                    var r = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0;
                    if (!r) throw Error('Unable to find global scope. Are you sure this is running in the browser?');
                    if (!r.AbortController)
                        throw Error(
                            'Could not find "AbortController" in the global scope. You need to polyfill it first',
                        );
                    ((t.exports = r.AbortController), (t.exports.default = r.AbortController));
                }),
                Q = E((e, t) => {
                    var n, i;
                    ((n = e),
                        (i = function () {
                            var e = 'millisecond',
                                t = 'second',
                                r = 'minute',
                                n = 'hour',
                                i = 'week',
                                a = 'month',
                                o = 'quarter',
                                s = 'year',
                                u = 'date',
                                l = 'Invalid Date',
                                c =
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
                            var g = function (e) {
                                    return e instanceof S;
                                },
                                m = function e(t, r, n) {
                                    var i;
                                    if (!t) return f;
                                    if ('string' == typeof t) {
                                        var a = t.toLowerCase();
                                        (p[a] && (i = a), r && ((p[a] = r), (i = a)));
                                        var o = t.split('-');
                                        if (!i && o.length > 1) return e(o[0]);
                                    } else {
                                        var s = t.name;
                                        ((p[s] = t), (i = s));
                                    }
                                    return (!n && i && (f = i), i || (!n && f));
                                },
                                v = function (e, t) {
                                    if (g(e)) return e.clone();
                                    var r = 'object' == typeof t ? t : {};
                                    return ((r.date = e), (r.args = arguments), new S(r));
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
                                            i = t.clone().add(n, a),
                                            o = r - i < 0,
                                            s = t.clone().add(n + (o ? -1 : 1), a);
                                        return +(-(n + (r - i) / (o ? i - s : s - i)) || 0);
                                    },
                                    a: function (e) {
                                        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
                                    },
                                    p: function (l) {
                                        return (
                                            {M: a, y: s, w: i, d: 'day', D: u, h: n, m: r, s: t, ms: e, Q: o}[l] ||
                                            String(l || '')
                                                .toLowerCase()
                                                .replace(/s$/, '')
                                        );
                                    },
                                    u: function (e) {
                                        return void 0 === e;
                                    },
                                };
                            ((y.l = m),
                                (y.i = g),
                                (y.w = function (e, t) {
                                    return v(e, {locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset});
                                }));
                            var S = (function () {
                                    function h(e) {
                                        ((this.$L = m(e.locale, null, !0)), this.parse(e));
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
                                                    var n = t.match(c);
                                                    if (n) {
                                                        var i = n[2] - 1 || 0,
                                                            a = (n[7] || '0').substring(0, 3);
                                                        return r
                                                            ? new Date(
                                                                  Date.UTC(
                                                                      n[1],
                                                                      i,
                                                                      n[3] || 1,
                                                                      n[4] || 0,
                                                                      n[5] || 0,
                                                                      n[6] || 0,
                                                                      a,
                                                                  ),
                                                              )
                                                            : new Date(
                                                                  n[1],
                                                                  i,
                                                                  n[3] || 1,
                                                                  n[4] || 0,
                                                                  n[5] || 0,
                                                                  n[6] || 0,
                                                                  a,
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
                                            return this.$d.toString() !== l;
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
                                        (f.startOf = function (e, o) {
                                            var l = this,
                                                c = !!y.u(o) || o,
                                                d = y.p(e),
                                                h = function (e, t) {
                                                    var r = y.w(l.$u ? Date.UTC(l.$y, t, e) : new Date(l.$y, t, e), l);
                                                    return c ? r : r.endOf('day');
                                                },
                                                f = function (e, t) {
                                                    return y.w(
                                                        l
                                                            .toDate()
                                                            [
                                                                e
                                                            ].apply(l.toDate('s'), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)),
                                                        l,
                                                    );
                                                },
                                                p = this.$W,
                                                g = this.$M,
                                                m = this.$D,
                                                v = 'set' + (this.$u ? 'UTC' : '');
                                            switch (d) {
                                                case s:
                                                    return c ? h(1, 0) : h(31, 11);
                                                case a:
                                                    return c ? h(1, g) : h(0, g + 1);
                                                case i:
                                                    var S = this.$locale().weekStart || 0,
                                                        b = (p < S ? p + 7 : p) - S;
                                                    return h(c ? m - b : m + (6 - b), g);
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
                                        (f.$set = function (i, o) {
                                            var l,
                                                c = y.p(i),
                                                d = 'set' + (this.$u ? 'UTC' : ''),
                                                h = (((l = {}).day = d + 'Date'),
                                                (l[u] = d + 'Date'),
                                                (l[a] = d + 'Month'),
                                                (l[s] = d + 'FullYear'),
                                                (l[n] = d + 'Hours'),
                                                (l[r] = d + 'Minutes'),
                                                (l[t] = d + 'Seconds'),
                                                (l[e] = d + 'Milliseconds'),
                                                l)[c],
                                                f = 'day' === c ? this.$D + (o - this.$W) : o;
                                            if (c === a || c === s) {
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
                                        (f.add = function (e, o) {
                                            var u,
                                                l = this;
                                            e = Number(e);
                                            var c = y.p(o),
                                                d = function (t) {
                                                    var r = v(l);
                                                    return y.w(r.date(r.date() + Math.round(t * e)), l);
                                                };
                                            if (c === a) return this.set(a, this.$M + e);
                                            if (c === s) return this.set(s, this.$y + e);
                                            if ('day' === c) return d(1);
                                            if (c === i) return d(7);
                                            var h = (((u = {})[r] = 6e4), (u[n] = 36e5), (u[t] = 1e3), u)[c] || 1,
                                                f = this.$d.getTime() + e * h;
                                            return y.w(f, this);
                                        }),
                                        (f.subtract = function (e, t) {
                                            return this.add(-1 * e, t);
                                        }),
                                        (f.format = function (e) {
                                            var t = this,
                                                r = this.$locale();
                                            if (!this.isValid()) return r.invalidDate || l;
                                            var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                                                i = y.z(this),
                                                a = this.$H,
                                                o = this.$m,
                                                s = this.$M,
                                                u = r.weekdays,
                                                c = r.months,
                                                h = function (e, r, i, a) {
                                                    return (e && (e[r] || e(t, n))) || i[r].slice(0, a);
                                                },
                                                f = function (e) {
                                                    return y.s(a % 12 || 12, e, '0');
                                                },
                                                p =
                                                    r.meridiem ||
                                                    function (e, t, r) {
                                                        var n = e < 12 ? 'AM' : 'PM';
                                                        return r ? n.toLowerCase() : n;
                                                    },
                                                g = {
                                                    YY: String(this.$y).slice(-2),
                                                    YYYY: this.$y,
                                                    M: s + 1,
                                                    MM: y.s(s + 1, 2, '0'),
                                                    MMM: h(r.monthsShort, s, c, 3),
                                                    MMMM: h(c, s),
                                                    D: this.$D,
                                                    DD: y.s(this.$D, 2, '0'),
                                                    d: String(this.$W),
                                                    dd: h(r.weekdaysMin, this.$W, u, 2),
                                                    ddd: h(r.weekdaysShort, this.$W, u, 3),
                                                    dddd: u[this.$W],
                                                    H: String(a),
                                                    HH: y.s(a, 2, '0'),
                                                    h: f(1),
                                                    hh: f(2),
                                                    a: p(a, o, !0),
                                                    A: p(a, o, !1),
                                                    m: String(o),
                                                    mm: y.s(o, 2, '0'),
                                                    s: String(this.$s),
                                                    ss: y.s(this.$s, 2, '0'),
                                                    SSS: y.s(this.$ms, 3, '0'),
                                                    Z: i,
                                                };
                                            return n.replace(d, function (e, t) {
                                                return t || g[e] || i.replace(':', '');
                                            });
                                        }),
                                        (f.utcOffset = function () {
                                            return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
                                        }),
                                        (f.diff = function (e, u, l) {
                                            var c,
                                                d = y.p(u),
                                                h = v(e),
                                                f = (h.utcOffset() - this.utcOffset()) * 6e4,
                                                p = this - h,
                                                g = y.m(this, h);
                                            return (
                                                (g =
                                                    (((c = {})[s] = g / 12),
                                                    (c[a] = g),
                                                    (c[o] = g / 3),
                                                    (c[i] = (p - f) / 6048e5),
                                                    (c.day = (p - f) / 864e5),
                                                    (c[n] = p / 36e5),
                                                    (c[r] = p / 6e4),
                                                    (c[t] = p / 1e3),
                                                    c)[d] || p),
                                                l ? g : y.a(g)
                                            );
                                        }),
                                        (f.daysInMonth = function () {
                                            return this.endOf(a).$D;
                                        }),
                                        (f.$locale = function () {
                                            return p[this.$L];
                                        }),
                                        (f.locale = function (e, t) {
                                            if (!e) return this.$L;
                                            var r = this.clone(),
                                                n = m(e, t, !0);
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
                                b = S.prototype;
                            return (
                                (v.prototype = b),
                                [
                                    ['$ms', e],
                                    ['$s', t],
                                    ['$m', r],
                                    ['$H', n],
                                    ['$W', 'day'],
                                    ['$M', a],
                                    ['$y', s],
                                    ['$D', u],
                                ].forEach(function (e) {
                                    b[e[1]] = function (t) {
                                        return this.$g(t, e[0], e[1]);
                                    };
                                }),
                                (v.extend = function (e, t) {
                                    return (e.$i || (e(t, S, v), (e.$i = !0)), v);
                                }),
                                (v.locale = m),
                                (v.isDayjs = g),
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
                H = E((e, t) => {
                    var n, i;
                    ((n = e),
                        (i = function () {
                            var e = {year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5},
                                t = {};
                            return function (r, n, i) {
                                var a,
                                    o = function (e, r, n) {
                                        void 0 === n && (n = {});
                                        var i,
                                            a,
                                            o,
                                            s,
                                            u = new Date(e);
                                        return (void 0 === (i = n) && (i = {}),
                                        (s = t[(o = r + '|' + (a = i.timeZoneName || 'short'))]) ||
                                            ((s = new Intl.DateTimeFormat('en-US', {
                                                hour12: !1,
                                                timeZone: r,
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                timeZoneName: a,
                                            })),
                                            (t[o] = s)),
                                        s).formatToParts(u);
                                    },
                                    s = function (t, r) {
                                        for (var n = o(t, r), a = [], s = 0; s < n.length; s += 1) {
                                            var u = n[s],
                                                l = u.type,
                                                c = u.value,
                                                d = e[l];
                                            d >= 0 && (a[d] = parseInt(c, 10));
                                        }
                                        var h = a[3],
                                            f =
                                                a[0] +
                                                '-' +
                                                a[1] +
                                                '-' +
                                                a[2] +
                                                ' ' +
                                                (24 === h ? 0 : h) +
                                                ':' +
                                                a[4] +
                                                ':' +
                                                a[5] +
                                                ':000',
                                            p = +t;
                                        return (i.utc(f).valueOf() - (p -= p % 1e3)) / 6e4;
                                    },
                                    u = n.prototype;
                                ((u.tz = function (e, t) {
                                    void 0 === e && (e = a);
                                    var r = this.utcOffset(),
                                        n = this.toDate(),
                                        o = n.toLocaleString('en-US', {timeZone: e}),
                                        s = Math.round((n - new Date(o)) / 1e3 / 60),
                                        u = i(o)
                                            .$set('millisecond', this.$ms)
                                            .utcOffset(-(15 * Math.round(n.getTimezoneOffset() / 15)) - s, !0);
                                    if (t) {
                                        var l = u.utcOffset();
                                        u = u.add(r - l, 'minute');
                                    }
                                    return ((u.$x.$timezone = e), u);
                                }),
                                    (u.offsetName = function (e) {
                                        var t = this.$x.$timezone || i.tz.guess(),
                                            r = o(this.valueOf(), t, {timeZoneName: e}).find(function (e) {
                                                return 'timezonename' === e.type.toLowerCase();
                                            });
                                        return r && r.value;
                                    }));
                                var l = u.startOf;
                                ((u.startOf = function (e, t) {
                                    if (!this.$x || !this.$x.$timezone) return l.call(this, e, t);
                                    var r = i(this.format('YYYY-MM-DD HH:mm:ss:SSS'));
                                    return l.call(r, e, t).tz(this.$x.$timezone, !0);
                                }),
                                    (i.tz = function (e, t, r) {
                                        var n = r && t,
                                            o = r || t || a,
                                            u = s(+i(), o);
                                        if ('string' != typeof e) return i(e).tz(o);
                                        var l = (function (e, t, r) {
                                                var n = e - 60 * t * 1e3,
                                                    i = s(n, r);
                                                if (t === i) return [n, t];
                                                var a = s((n -= 60 * (i - t) * 1e3), r);
                                                return i === a
                                                    ? [n, i]
                                                    : [e - 60 * Math.min(i, a) * 1e3, Math.max(i, a)];
                                            })(i.utc(e, n).valueOf(), u, o),
                                            c = l[0],
                                            d = l[1],
                                            h = i(c).utcOffset(d);
                                        return ((h.$x.$timezone = o), h);
                                    }),
                                    (i.tz.guess = function () {
                                        return Intl.DateTimeFormat().resolvedOptions().timeZone;
                                    }),
                                    (i.tz.setDefault = function (e) {
                                        a = e;
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
                Y = E((e, t) => {
                    var n, i;
                    ((n = e),
                        (i = function () {
                            var e = 'minute',
                                t = /[+-]\d\d(?::?\d\d)?/g,
                                r = /([+-]|\d\d)/g;
                            return function (n, i, a) {
                                var o = i.prototype;
                                ((a.utc = function (e) {
                                    var t = {date: e, utc: !0, args: arguments};
                                    return new i(t);
                                }),
                                    (o.utc = function (t) {
                                        var r = a(this.toDate(), {locale: this.$L, utc: !0});
                                        return t ? r.add(this.utcOffset(), e) : r;
                                    }),
                                    (o.local = function () {
                                        return a(this.toDate(), {locale: this.$L, utc: !1});
                                    }));
                                var s = o.parse;
                                o.parse = function (e) {
                                    (e.utc && (this.$u = !0),
                                        this.$utils().u(e.$offset) || (this.$offset = e.$offset),
                                        s.call(this, e));
                                };
                                var u = o.init;
                                o.init = function () {
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
                                var l = o.utcOffset;
                                o.utcOffset = function (n, i) {
                                    var a = this.$utils().u;
                                    if (a(n)) return this.$u ? 0 : a(this.$offset) ? l.call(this) : this.$offset;
                                    if (
                                        'string' == typeof n &&
                                        null ===
                                            (n = (function (e) {
                                                void 0 === e && (e = '');
                                                var n = e.match(t);
                                                if (!n) return null;
                                                var i = ('' + n[0]).match(r) || ['-', 0, 0],
                                                    a = i[0],
                                                    o = 60 * +i[1] + +i[2];
                                                return 0 === o ? 0 : '+' === a ? o : -o;
                                            })(n))
                                    )
                                        return this;
                                    var o = 16 >= Math.abs(n) ? 60 * n : n,
                                        s = this;
                                    if (i) return ((s.$offset = o), (s.$u = 0 === n), s);
                                    if (0 !== n) {
                                        var u = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                                        (((s = this.local().add(o + u, e)).$offset = o), (s.$x.$localOffset = u));
                                    } else s = this.utc();
                                    return s;
                                };
                                var c = o.format;
                                ((o.format = function (e) {
                                    var t = e || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '');
                                    return c.call(this, t);
                                }),
                                    (o.valueOf = function () {
                                        var e = this.$utils().u(this.$offset)
                                            ? 0
                                            : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                                        return this.$d.valueOf() - 6e4 * e;
                                    }),
                                    (o.isUTC = function () {
                                        return !!this.$u;
                                    }),
                                    (o.toISOString = function () {
                                        return this.toDate().toISOString();
                                    }),
                                    (o.toString = function () {
                                        return this.toDate().toUTCString();
                                    }));
                                var d = o.toDate;
                                o.toDate = function (e) {
                                    return 's' === e && this.$offset
                                        ? a(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
                                        : d.call(this);
                                };
                                var h = o.diff;
                                o.diff = function (e, t, r) {
                                    if (e && this.$u === e.$u) return h.call(this, e, t, r);
                                    var n = this.local(),
                                        i = a(e).local();
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
                B = E((e, t) => {
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
                            var a = t.length + 1;
                            if (1 === a) return e;
                            var o = Array(a);
                            o[0] = i(e);
                            for (var s = 1; s < a; s++) o[s] = i(t[s]);
                            return o.join(' ');
                        }
                        if ('string' != typeof e) return e;
                        var u = t.length;
                        if (0 === u) return e;
                        for (var l = '', c = 0, d = -1, h = (e && e.length) || 0, f = 0; f < h; ) {
                            if (37 === e.charCodeAt(f) && f + 1 < h) {
                                switch (((d = d > -1 ? d : 0), e.charCodeAt(f + 1))) {
                                    case 100:
                                    case 102:
                                        if (c >= u || null == t[c]) break;
                                        (d < f && (l += e.slice(d, f)), (l += Number(t[c])), (d = f + 2), f++);
                                        break;
                                    case 105:
                                        if (c >= u || null == t[c]) break;
                                        (d < f && (l += e.slice(d, f)),
                                            (l += Math.floor(Number(t[c]))),
                                            (d = f + 2),
                                            f++);
                                        break;
                                    case 79:
                                    case 111:
                                    case 106:
                                        if (c >= u || void 0 === t[c]) break;
                                        d < f && (l += e.slice(d, f));
                                        var p = typeof t[c];
                                        if ('string' === p) {
                                            ((l += "'" + t[c] + "'"), (d = f + 2), f++);
                                            break;
                                        }
                                        if ('function' === p) {
                                            ((l += t[c].name || '<anonymous>'), (d = f + 2), f++);
                                            break;
                                        }
                                        ((l += i(t[c])), (d = f + 2), f++);
                                        break;
                                    case 115:
                                        if (c >= u) break;
                                        (d < f && (l += e.slice(d, f)), (l += String(t[c])), (d = f + 2), f++);
                                        break;
                                    case 37:
                                        (d < f && (l += e.slice(d, f)), (l += '%'), (d = f + 2), f++, c--);
                                }
                                ++c;
                            }
                            ++f;
                        }
                        return -1 === d ? e : (d < h && (l += e.slice(d)), l);
                    };
                }),
                W = E((e, t) => {
                    var r = B();
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
                        let l = e.browser.transmit;
                        if (l && 'function' != typeof l.send)
                            throw Error('pino: transmit option must have a send function');
                        let c = e.browser.write || n;
                        e.browser.write && (e.browser.asObject = !0);
                        let p = e.serializers || {},
                            g = Array.isArray((t = e.browser.serialize))
                                ? t.filter(function (e) {
                                      return '!stdSerializers.err' !== e;
                                  })
                                : !0 === t && Object.keys(p),
                            m = e.browser.serialize;
                        (Array.isArray(e.browser.serialize) &&
                            e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
                            (m = !1),
                            'function' == typeof c && (c.error = c.fatal = c.warn = c.info = c.debug = c.trace = c),
                            (!1 === e.enabled || e.browser.disabled) && (e.level = 'silent'));
                        let v = e.level || 'info',
                            y = Object.create(c);
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
                                        a(S, y, 'error', 'log'),
                                        a(S, y, 'fatal', 'error'),
                                        a(S, y, 'warn', 'error'),
                                        a(S, y, 'info', 'log'),
                                        a(S, y, 'debug', 'log'),
                                        a(S, y, 'trace', 'log'));
                                },
                            }));
                        let S = {
                            transmit: l,
                            serialize: g,
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
                            (y._serialize = g),
                            (y._stdErrSerialize = m),
                            (y.child = function (t, r) {
                                if (!t) throw Error('missing bindings for child Pino');
                                ((r = r || {}), g && t.serializers && (r.serializers = t.serializers));
                                let n = r.serializers;
                                if (g && n) {
                                    var i = Object.assign({}, p, n),
                                        a = !0 === e.browser.serialize ? Object.keys(i) : g;
                                    (delete t.serializers, o([t], a, i, this._stdErrSerialize));
                                }
                                function c(e) {
                                    ((this._childLevel = (0 | e._childLevel) + 1),
                                        (this.error = s(e, t, 'error')),
                                        (this.fatal = s(e, t, 'fatal')),
                                        (this.warn = s(e, t, 'warn')),
                                        (this.info = s(e, t, 'info')),
                                        (this.debug = s(e, t, 'debug')),
                                        (this.trace = s(e, t, 'trace')),
                                        i && ((this.serializers = i), (this._serialize = a)),
                                        l && (this._logEvent = u([].concat(e._logEvent.bindings, t))));
                                }
                                return ((c.prototype = this), new c(this));
                            }),
                            l && (y._logEvent = u()),
                            y
                        );
                    }
                    function a(e, t, a, s) {
                        var l;
                        let c = Object.getPrototypeOf(t);
                        ((t[a] = t.levelVal > t.levels.values[a] ? d : c[a] ? c[a] : n[a] || n[s] || d),
                            (e.transmit || t[a] !== d) &&
                                (t[a] =
                                    ((l = t[a]),
                                    function () {
                                        let s = e.timestamp(),
                                            c = Array(arguments.length),
                                            d = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                        for (var h, f = 0; f < c.length; f++) c[f] = arguments[f];
                                        if (
                                            (e.serialize &&
                                                !e.asObject &&
                                                o(c, this._serialize, this.serializers, this._stdErrSerialize),
                                            e.asObject
                                                ? l.call(
                                                      d,
                                                      (function (e, t, n, a) {
                                                          e._serialize &&
                                                              o(n, e._serialize, e.serializers, e._stdErrSerialize);
                                                          let s = n.slice(),
                                                              u = s[0],
                                                              l = {};
                                                          (a && (l.time = a), (l.level = i.levels.values[t]));
                                                          let c = (0 | e._childLevel) + 1;
                                                          if ((c < 1 && (c = 1), null !== u && 'object' == typeof u)) {
                                                              for (; c-- && 'object' == typeof s[0]; )
                                                                  Object.assign(l, s.shift());
                                                              u = s.length ? r(s.shift(), s) : void 0;
                                                          } else 'string' == typeof u && (u = r(s.shift(), s));
                                                          return (void 0 !== u && (l.msg = u), l);
                                                      })(this, a, c, s),
                                                  )
                                                : l.apply(d, c),
                                            e.transmit)
                                        ) {
                                            let r,
                                                n,
                                                l,
                                                d,
                                                f,
                                                p,
                                                g = e.transmit.level || t.level,
                                                m = i.levels.values[g],
                                                v = i.levels.values[a];
                                            if (v < m) return;
                                            ((r = (h = {
                                                ts: s,
                                                methodLevel: a,
                                                methodValue: v,
                                                transmitLevel: g,
                                                transmitValue: i.levels.values[e.transmit.level || t.level],
                                                send: e.transmit.send,
                                                val: t.levelVal,
                                            }).send),
                                                (n = h.ts),
                                                (l = h.methodLevel),
                                                (d = h.methodValue),
                                                (f = h.val),
                                                (p = this._logEvent.bindings),
                                                o(
                                                    c,
                                                    this._serialize || Object.keys(this.serializers),
                                                    this.serializers,
                                                    void 0 === this._stdErrSerialize || this._stdErrSerialize,
                                                ),
                                                (this._logEvent.ts = n),
                                                (this._logEvent.messages = c.filter(function (e) {
                                                    return -1 === p.indexOf(e);
                                                })),
                                                (this._logEvent.level.label = l),
                                                (this._logEvent.level.value = d),
                                                r(l, this._logEvent, f),
                                                (this._logEvent = u(p)));
                                        }
                                    })));
                    }
                    function o(e, t, r, n) {
                        for (let a in e)
                            if (n && e[a] instanceof Error) e[a] = i.stdSerializers.err(e[a]);
                            else if ('object' == typeof e[a] && !Array.isArray(e[a]))
                                for (let n in e[a]) t && t.indexOf(n) > -1 && n in r && (e[a][n] = r[n](e[a][n]));
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
                    function l() {
                        return {};
                    }
                    function c(e) {
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
                            mapHttpRequest: l,
                            mapHttpResponse: l,
                            wrapRequestSerializer: c,
                            wrapResponseSerializer: c,
                            wrapErrorSerializer: c,
                            req: l,
                            res: l,
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
                G = E((e, t) => {
                    var n, i;
                    ((n = e),
                        (i = function () {
                            var e = {
                                    LTS: 'h:mm:ss A',
                                    LT: 'h:mm A',
                                    L: 'MM/DD/YYYY',
                                    LL: 'MMMM D, YYYY',
                                    LLL: 'MMMM D, YYYY h:mm A',
                                    LLLL: 'dddd, MMMM D, YYYY h:mm A',
                                },
                                t =
                                    /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                                r = /\d\d/,
                                n = /\d\d?/,
                                i = /\d*[^-_:/,()\s\d]+/,
                                a = {},
                                o = function (e) {
                                    return (e = +e) + (e > 68 ? 1900 : 2e3);
                                },
                                s = function (e) {
                                    return function (t) {
                                        this[e] = +t;
                                    };
                                },
                                u = [
                                    /[+-]\d\d:?(\d\d)?|Z/,
                                    function (e) {
                                        (this.zone || (this.zone = {})).offset = (function (e) {
                                            if (!e || 'Z' === e) return 0;
                                            var t = e.match(/([+-]|\d\d)/g),
                                                r = 60 * t[1] + (+t[2] || 0);
                                            return 0 === r ? 0 : '+' === t[0] ? -r : r;
                                        })(e);
                                    },
                                ],
                                l = function (e) {
                                    var t = a[e];
                                    return t && (t.indexOf ? t : t.s.concat(t.f));
                                },
                                c = function (e, t) {
                                    var r,
                                        n = a.meridiem;
                                    if (n) {
                                        for (var i = 1; i <= 24; i += 1)
                                            if (e.indexOf(n(i, 0, t)) > -1) {
                                                r = i > 12;
                                                break;
                                            }
                                    } else r = e === (t ? 'pm' : 'PM');
                                    return r;
                                },
                                d = {
                                    A: [
                                        i,
                                        function (e) {
                                            this.afternoon = c(e, !1);
                                        },
                                    ],
                                    a: [
                                        i,
                                        function (e) {
                                            this.afternoon = c(e, !0);
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
                                    s: [n, s('seconds')],
                                    ss: [n, s('seconds')],
                                    m: [n, s('minutes')],
                                    mm: [n, s('minutes')],
                                    H: [n, s('hours')],
                                    h: [n, s('hours')],
                                    HH: [n, s('hours')],
                                    hh: [n, s('hours')],
                                    D: [n, s('day')],
                                    DD: [r, s('day')],
                                    Do: [
                                        i,
                                        function (e) {
                                            var t = a.ordinal;
                                            if (((this.day = e.match(/\d+/)[0]), t))
                                                for (var r = 1; r <= 31; r += 1)
                                                    t(r).replace(/\[|\]/g, '') === e && (this.day = r);
                                        },
                                    ],
                                    M: [n, s('month')],
                                    MM: [r, s('month')],
                                    MMM: [
                                        i,
                                        function (e) {
                                            var t = l('months'),
                                                r =
                                                    (
                                                        l('monthsShort') ||
                                                        t.map(function (e) {
                                                            return e.slice(0, 3);
                                                        })
                                                    ).indexOf(e) + 1;
                                            if (r < 1) throw Error();
                                            this.month = r % 12 || r;
                                        },
                                    ],
                                    MMMM: [
                                        i,
                                        function (e) {
                                            var t = l('months').indexOf(e) + 1;
                                            if (t < 1) throw Error();
                                            this.month = t % 12 || t;
                                        },
                                    ],
                                    Y: [/[+-]?\d+/, s('year')],
                                    YY: [
                                        r,
                                        function (e) {
                                            this.year = o(e);
                                        },
                                    ],
                                    YYYY: [/\d{4}/, s('year')],
                                    Z: u,
                                    ZZ: u,
                                };
                            return function (r, n, i) {
                                ((i.p.customParseFormat = !0), r && r.parseTwoDigitYear && (o = r.parseTwoDigitYear));
                                var s = n.prototype,
                                    u = s.parse;
                                s.parse = function (r) {
                                    var n = r.date,
                                        o = r.utc,
                                        s = r.args;
                                    this.$u = o;
                                    var l = s[1];
                                    if ('string' == typeof l) {
                                        var c = !0 === s[2],
                                            h = !0 === s[3],
                                            f = s[2];
                                        (h && (f = s[2]),
                                            (a = this.$locale()),
                                            !c && f && (a = i.Ls[f]),
                                            (this.$d = (function (r, n, i) {
                                                try {
                                                    if (['x', 'X'].indexOf(n) > -1)
                                                        return new Date(('X' === n ? 1e3 : 1) * r);
                                                    var o = (function (r) {
                                                            var n, i;
                                                            ((n = r), (i = a && a.formats));
                                                            for (
                                                                var o = (r = n.replace(
                                                                        /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                                                                        function (t, r, n) {
                                                                            var a = n && n.toUpperCase();
                                                                            return (
                                                                                r ||
                                                                                i[n] ||
                                                                                e[n] ||
                                                                                i[a].replace(
                                                                                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                                                                                    function (e, t, r) {
                                                                                        return t || r.slice(1);
                                                                                    },
                                                                                )
                                                                            );
                                                                        },
                                                                    )).match(t),
                                                                    s = o.length,
                                                                    u = 0;
                                                                u < s;
                                                                u += 1
                                                            ) {
                                                                var l = o[u],
                                                                    c = d[l],
                                                                    h = c && c[0],
                                                                    f = c && c[1];
                                                                o[u] = f
                                                                    ? {regex: h, parser: f}
                                                                    : l.replace(/^\[|\]$/g, '');
                                                            }
                                                            return function (e) {
                                                                for (var t = {}, r = 0, n = 0; r < s; r += 1) {
                                                                    var i = o[r];
                                                                    if ('string' == typeof i) n += i.length;
                                                                    else {
                                                                        var a = i.regex,
                                                                            u = i.parser,
                                                                            l = e.slice(n),
                                                                            c = a.exec(l)[0];
                                                                        (u.call(t, c), (e = e.replace(c, '')));
                                                                    }
                                                                }
                                                                return (
                                                                    (function (e) {
                                                                        var t = e.afternoon;
                                                                        if (void 0 !== t) {
                                                                            var r = e.hours;
                                                                            (t
                                                                                ? r < 12 && (e.hours += 12)
                                                                                : 12 === r && (e.hours = 0),
                                                                                delete e.afternoon);
                                                                        }
                                                                    })(t),
                                                                    t
                                                                );
                                                            };
                                                        })(n)(r),
                                                        s = o.year,
                                                        u = o.month,
                                                        l = o.day,
                                                        c = o.hours,
                                                        h = o.minutes,
                                                        f = o.seconds,
                                                        p = o.milliseconds,
                                                        g = o.zone,
                                                        m = new Date(),
                                                        v = l || (s || u ? 1 : m.getDate()),
                                                        y = s || m.getFullYear(),
                                                        S = 0;
                                                    (s && !u) || (S = u > 0 ? u - 1 : m.getMonth());
                                                    var b = c || 0,
                                                        w = h || 0,
                                                        k = f || 0,
                                                        O = p || 0;
                                                    return g
                                                        ? new Date(Date.UTC(y, S, v, b, w, k, O + 60 * g.offset * 1e3))
                                                        : i
                                                          ? new Date(Date.UTC(y, S, v, b, w, k, O))
                                                          : new Date(y, S, v, b, w, k, O);
                                                } catch {
                                                    return new Date('');
                                                }
                                            })(n, l, o)),
                                            this.init(),
                                            f && !0 !== f && (this.$L = this.locale(f).$L),
                                            (c || h) && n != this.format(l) && (this.$d = new Date('')),
                                            (a = {}));
                                    } else if (l instanceof Array)
                                        for (var p = l.length, g = 1; g <= p; g += 1) {
                                            s[1] = l[g - 1];
                                            var m = i.apply(this, s);
                                            if (m.isValid()) {
                                                ((this.$d = m.$d), (this.$L = m.$L), this.init());
                                                break;
                                            }
                                            g === p && (this.$d = new Date(''));
                                        }
                                    else u.call(this, r);
                                };
                            };
                        }),
                        'object' == typeof e && void 0 !== t
                            ? (t.exports = i())
                            : 'function' == typeof define && r.amdO
                              ? define(i)
                              : ((n =
                                    'undefined' != typeof globalThis
                                        ? globalThis
                                        : n || self).dayjs_plugin_customParseFormat = i()));
                }),
                K = E((e, t) => {
                    var n, i;
                    ((n = e),
                        (i = function () {
                            var e = 'month',
                                t = 'quarter';
                            return function (r, n) {
                                var i = n.prototype;
                                i.quarter = function (e) {
                                    return this.$utils().u(e)
                                        ? Math.ceil((this.month() + 1) / 3)
                                        : this.month((this.month() % 3) + 3 * (e - 1));
                                };
                                var a = i.add;
                                i.add = function (r, n) {
                                    return (
                                        (r = Number(r)),
                                        this.$utils().p(n) === t ? this.add(3 * r, e) : a.bind(this)(r, n)
                                    );
                                };
                                var o = i.startOf;
                                i.startOf = function (r, n) {
                                    var i = this.$utils(),
                                        a = !!i.u(n) || n;
                                    if (i.p(r) === t) {
                                        var s = this.quarter() - 1;
                                        return a
                                            ? this.month(3 * s)
                                                  .startOf(e)
                                                  .startOf('day')
                                            : this.month(3 * s + 2)
                                                  .endOf(e)
                                                  .endOf('day');
                                    }
                                    return o.bind(this)(r, n);
                                };
                            };
                        }),
                        'object' == typeof e && void 0 !== t
                            ? (t.exports = i())
                            : 'function' == typeof define && r.amdO
                              ? define(i)
                              : ((n =
                                    'undefined' != typeof globalThis
                                        ? globalThis
                                        : n || self).dayjs_plugin_quarterOfYear = i()));
                }),
                J = class extends Error {
                    constructor(e) {
                        (super(e), (this.name = 'SchemaValidationError'));
                    }
                },
                Z = class {
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
                                new J(e)
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
                X = class {
                    constructor(e = {}) {
                        this.baseConfig = e;
                    }
                    validate(e) {
                        return this.baseConfig.required && et(e) ? 'value is required.' : null;
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
            function ee(e) {
                return void 0 === e;
            }
            function et(e) {
                return ee(e) || null === e;
            }
            var er = class {
                constructor(e = {}) {
                    ((this.config = e), (this.value = new X(e)));
                }
                validate(e) {
                    return (
                        this.value.validate(e) ||
                        (ee(e) || en(e)
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
            function en(e) {
                return 'number' == typeof e && !isNaN(e);
            }
            var ei = class {
                constructor(e = {}) {
                    this.value = new X(e);
                }
                validate(e) {
                    return this.value.validate(e) || (ee(e) || ea(e) ? null : 'value is not a boolean.');
                }
                get default() {
                    return this.value.default;
                }
                get required() {
                    return this.value.required;
                }
            };
            function ea(e) {
                return 'boolean' == typeof e;
            }
            var eo =
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
                es = class {
                    constructor(e = {}) {
                        ((this.config = {emptyAllowed: !0, url: !1, ...e}), (this.value = new X(this.config)));
                    }
                    validate(e) {
                        let {emptyAllowed: t, url: r, regex: n, constrainTo: i} = this.config;
                        return (
                            this.value.validate(e) ||
                            (ee(e)
                                ? null
                                : eu(e)
                                  ? t || e.length
                                      ? r && !eo.test(e)
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
            function eu(e) {
                return '[object String]' === Object.prototype.toString.call(e);
            }
            var el = class {
                constructor(e = {}) {
                    this.config = {options: {required: !1}, values: {}, ...e};
                }
                validate(e) {
                    if (ee(e))
                        return this.config.options.required ? 'value is required and is currently undefined' : null;
                    if (!ec(e)) return 'value is not an object';
                    for (let [t, r] of Object.entries(this.config.values))
                        if (r.required && et(e[t])) return `value does not contain ${t}`;
                    let t = '';
                    for (let [r, n] of Object.entries(this.config.values)) {
                        let i = e[r],
                            a = n.validate(i);
                        null !== a && (t += ' ' + a);
                    }
                    return '' === t ? null : t;
                }
                get default() {}
                get required() {
                    return !!this.config.options.required;
                }
            };
            function ec(e) {
                return void 0 !== e && 'object' == typeof e;
            }
            var ed = class {
                constructor(e = {}) {
                    ((this.config = e), (this.value = new X(this.config)));
                }
                validate(e) {
                    if (!et(e) && !Array.isArray(e)) return 'value is not an array';
                    let t = this.value.validate(e);
                    if (null !== t) return t;
                    if (et(e)) return null;
                    if (void 0 !== this.config.max && e.length > this.config.max)
                        return `value contains more than ${this.config.max}`;
                    if (void 0 !== this.config.min && e.length < this.config.min)
                        return `value contains less than ${this.config.min}`;
                    if (void 0 !== this.config.each) {
                        let t = '';
                        return (
                            e.forEach((r) => {
                                this.config.each.required &&
                                    et(r) &&
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
                    return ea(e) || eu(e) || en(e) || ec(e) ? t.validate(e) : 'value is not a primitive value';
                }
                get default() {}
                get required() {
                    return this.value.required;
                }
            };
            q(U());
            var eh = new Set(['1', 1, 'yes', !0]);
            function ef() {
                if ('undefined' == typeof navigator || 'undefined' == typeof window) return !1;
                let e = navigator,
                    t = window;
                return [e.globalPrivacyControl, e.doNotTrack, e.msDoNotTrack, t.doNotTrack].some((e) => eh.has(e));
            }
            var ep = (e, t) => (et(e[t]) ? (et(e.raw[t]) ? null : e.raw[t]) : e[t]),
                eg = (e, t) => {
                    let r = ep(t, e);
                    return Array.isArray(r) ? r : [r];
                },
                em = (e) => e;
            function ev() {
                return {
                    answerSnippet: '',
                    documentId: {contentIdKey: '', contentIdValue: ''},
                    question: '',
                    relatedQuestions: [],
                    score: 0,
                };
            }
            function ey() {
                return {
                    response: {
                        results: [],
                        searchUid: '',
                        totalCountFiltered: 0,
                        facets: [],
                        generateAutomaticFacets: {facets: []},
                        queryCorrections: [],
                        triggers: [],
                        questionAnswer: ev(),
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
                    questionAnswer: ev(),
                    extendedResults: {},
                };
            }
            function eS(e) {
                let {url: t, accessToken: r, organizationId: n, authentication: i, ...a} = e;
                return a;
            }
            var eb = (e) => {
                    let {response: t} = e;
                    return t.body ? ew(e) : ek(t);
                },
                ew = (e) =>
                    void 0 !== e.body.exception
                        ? eO(e)
                        : void 0 !== e.body.statusCode
                          ? e.body
                          : {message: 'unknown', statusCode: 0, type: 'unknown'},
                ek = (e) => {
                    let t = JSON.parse(JSON.stringify(e, Object.getOwnPropertyNames(e)));
                    return {
                        ...t,
                        message: `Client side error: ${t.message || ''}`,
                        statusCode: 400,
                        type: 'ClientError',
                    };
                },
                eO = (e) => ({
                    message: e.body.exception.code,
                    statusCode: e.response.status,
                    type: e.body.exception.code,
                }),
                eI = q(P()),
                eC = q(N()),
                eD = class extends Error {
                    constructor() {
                        (super(),
                            (this.name = 'ExpiredToken'),
                            (this.message = 'The token being used to perform the request is expired.'));
                    }
                },
                eE = class extends Error {
                    constructor(e, t) {
                        (super(),
                            (this.name = 'Disconnected'),
                            (this.message = `Client could not connect to the following URL: ${e}`),
                            (this.statusCode = null != t ? t : 0));
                    }
                };
            function eR(e) {
                return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e;
            }
            var eq = class {
                static async call(e) {
                    let t = (function (e) {
                            var t;
                            let {url: r, method: n, requestParams: i, contentType: a, accessToken: o, signal: s} = e,
                                u = 'POST' === e.method || 'PUT' === e.method,
                                l =
                                    ((t = i),
                                    'application/x-www-form-urlencoded' === a
                                        ? 'object' == typeof t && t && Object.values(t).every(eR)
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
                                headers: {'Content-Type': a, Authorization: `Bearer ${o}`, ...e.headers},
                                ...(u && {body: l}),
                                signal: s,
                            };
                        })(e),
                        {origin: r, preprocessRequest: n, logger: i, requestMetadata: a} = e,
                        o = {...t, ...(n ? await n(t, r, a) : {})};
                    i.info(o, 'Platform request');
                    let {url: s, ...u} = o,
                        l = async () => {
                            let e = await (0, eI.default)(s, u);
                            if (429 === e.status) throw e;
                            return e;
                        };
                    try {
                        let e = await (0, eC.backOff)(l, {
                            retry: (e) => {
                                var t;
                                let r = e && ((t = e.status), 429 === t);
                                return (r && i.info('Platform retrying request'), r);
                            },
                        });
                        if (419 === e.status) throw (i.info('Platform renewing token'), new eD());
                        if (404 === e.status) throw new eE(s, e.status);
                        return (i.info({response: e, requestInfo: o}, 'Platform response'), e);
                    } catch (e) {
                        return 'Failed to fetch' === e.message ? new eE(s) : e;
                    }
                }
            };
            function eA(e, t) {
                return `https://${e}${t && t.environment && 'prod' !== t.environment ? t.environment : ''}${t && t.region && 'us' !== t.region ? `-${t.region}` : ''}.cloud.coveo.com`;
            }
            function ex(e, t = 'prod') {
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
            function eU(e) {
                return (null == e ? void 0 : e.multiRegionSubDomain)
                    ? `https://${e.multiRegionSubDomain}.org.coveo.com`
                    : eA('platform', e);
            }
            var eP = class {
                    constructor() {
                        this.currentAbortController = null;
                    }
                    async enqueue(e, t) {
                        var r;
                        let n = this.currentAbortController,
                            i = (this.currentAbortController =
                                'undefined' == typeof window
                                    ? new (z())()
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
                ej = TextDecoder,
                eF = class {
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
                eT = (e) => /^https:\/\/platform(dev|stg|hipaa)?(-)?(eu|au)?\.cloud\.coveo\.com/.test(e),
                eM = (e, t) => {
                    let r = e$(e);
                    return r && r.organizationId === t ? r : null;
                },
                e$ = (e) => {
                    let t = e.match(/^https:\/\/(?<organizationId>\w+)\.org(?<environment>dev|stg|hipaa)?\.coveo\.com/);
                    return (null == t ? void 0 : t.groups) ? t.groups : null;
                },
                eL = (e, t, r, n) => {
                    let i = new eF(`${e.url}${n}`);
                    return (
                        i.addParam('organizationId', e.organizationId),
                        e.authentication && i.addParam('authentication', e.authentication),
                        {accessToken: e.accessToken, method: t, contentType: r, url: i.href, origin: 'searchApiFetch'}
                    );
                },
                e_ = async (e, t) => {
                    let r = await eq.call({
                        ...eL(e, 'POST', 'application/x-www-form-urlencoded', '/html'),
                        requestParams: eS(e),
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
                        a = new ej(n).decode(i);
                    return 'string' == typeof a ? {success: a} : {error: eb({response: r, body: a})};
                };
            function eV(e, t) {
                if (t && 'AbortError' === e.name)
                    return {error: {statusCode: e.code, type: e.name, message: e.message, ignored: !0}};
                if (e instanceof eE) return {error: {statusCode: e.statusCode, type: e.name, message: e.message}};
                throw e;
            }
            var eN = class {
                    constructor(e) {
                        ((this.options = e),
                            (this.apiCallsQueues = {
                                unknown: new eP(),
                                mainSearch: new eP(),
                                facetValues: new eP(),
                                foldingCollection: new eP(),
                                instantResults: new eP(),
                            }));
                    }
                    async plan(e) {
                        let t = await eq.call({
                            ...eL(e, 'POST', 'application/json', '/plan'),
                            requestParams: eS(e),
                            requestMetadata: {method: 'plan'},
                            ...this.options,
                        });
                        if (t instanceof Error) return eV(t);
                        let r = await t.json();
                        return void 0 !== r.preprocessingOutput ? {success: r} : {error: eb({response: t, body: r})};
                    }
                    async querySuggest(e) {
                        let t = await eq.call({
                            ...eL(e, 'POST', 'application/json', '/querySuggest'),
                            requestMetadata: {method: 'querySuggest'},
                            requestParams: eS(e),
                            ...this.options,
                        });
                        if (t instanceof Error) return eV(t);
                        let r = await t.json(),
                            n = {response: t, body: r};
                        return void 0 !== r.completions
                            ? {success: (await this.options.postprocessQuerySuggestResponseMiddleware(n)).body}
                            : {error: eb(n)};
                    }
                    async search(e, t) {
                        var r;
                        let n;
                        let i = null != (r = null == t ? void 0 : t.origin) ? r : 'unknown',
                            a = await this.apiCallsQueues[i].enqueue(
                                (r) =>
                                    eq.call({
                                        ...eL(e, 'POST', 'application/json', ''),
                                        requestParams: eS(e),
                                        requestMetadata: {method: 'search', origin: null == t ? void 0 : t.origin},
                                        ...this.options,
                                        signal: null != r ? r : void 0,
                                    }),
                                {
                                    logger: this.options.logger,
                                    warnOnAbort: !(null == t ? void 0 : t.disableAbortWarning),
                                },
                            );
                        if (a instanceof Error) return eV(a, null == t ? void 0 : t.disableAbortWarning);
                        let o = await a.json(),
                            s = {response: a, body: o};
                        return eH(o)
                            ? ((s.body =
                                  ((n = ev()),
                                  et(o.questionAnswer)
                                      ? (o.questionAnswer = n)
                                      : (o.questionAnswer = {...n, ...o.questionAnswer}),
                                  o)),
                              {success: (await this.options.postprocessSearchResponseMiddleware(s)).body})
                            : {error: eb(s)};
                    }
                    async facetSearch(e) {
                        let t = await eq.call({
                            ...eL(e, 'POST', 'application/json', '/facet'),
                            requestParams: eS(e),
                            requestMetadata: {method: 'facetSearch'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return (await this.options.postprocessFacetSearchResponseMiddleware({response: t, body: r}))
                            .body;
                    }
                    async recommendations(e) {
                        let t = await eq.call({
                            ...eL(e, 'POST', 'application/json', ''),
                            requestParams: eS(e),
                            requestMetadata: {method: 'recommendations'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return eH(r) ? {success: r} : {error: eb({response: t, body: r})};
                    }
                    async html(e) {
                        return e_(e, {...this.options});
                    }
                    async productRecommendations(e) {
                        let t = await eq.call({
                            ...eL(e, 'POST', 'application/json', ''),
                            requestParams: eS(e),
                            requestMetadata: {method: 'productRecommendations'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return eH(r) ? {success: r} : {error: eb({response: t, body: r})};
                    }
                    async fieldDescriptions(e) {
                        let t = await eq.call({
                            ...eL(e, 'GET', 'application/json', '/fields'),
                            requestParams: {},
                            requestMetadata: {method: 'fieldDescriptions'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return void 0 !== r.fields ? {success: r} : {error: eb({response: t, body: r})};
                    }
                },
                ez = (e) => void 0 !== e.success,
                eQ = (e) => void 0 !== e.error;
            function eH(e) {
                return void 0 !== e.results;
            }
            var eY = (e) => e,
                eB = (e) => e,
                eW = (e) => e;
            function eG(e) {
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
            function eK(e) {
                return !!e && !!e[tI];
            }
            function eJ(e) {
                var t;
                return (
                    !!e &&
                    ((function (e) {
                        if (!e || 'object' != typeof e) return !1;
                        var t = Object.getPrototypeOf(e);
                        if (null === t) return !0;
                        var r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
                        return r === Object || ('function' == typeof r && Function.toString.call(r) === tC);
                    })(e) ||
                        Array.isArray(e) ||
                        !!e[tO] ||
                        !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[tO]) ||
                        e5(e) ||
                        e3(e))
                );
            }
            function eZ(e, t, r) {
                (void 0 === r && (r = !1),
                    0 === eX(e)
                        ? (r ? Object.keys : tD)(e).forEach(function (n) {
                              (r && 'symbol' == typeof n) || t(n, e[n], e);
                          })
                        : e.forEach(function (r, n) {
                              return t(n, r, e);
                          }));
            }
            function eX(e) {
                var t = e[tI];
                return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : e5(e) ? 2 : e3(e) ? 3 : 0;
            }
            function e0(e, t) {
                return 2 === eX(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
            }
            function e1(e, t, r) {
                var n = eX(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
            }
            function e2(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            }
            function e5(e) {
                return tS && e instanceof Map;
            }
            function e3(e) {
                return tb && e instanceof Set;
            }
            function e4(e) {
                return e.o || e.t;
            }
            function e6(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                var t = tE(e);
                delete t[tI];
                for (var r = tD(t), n = 0; n < r.length; n++) {
                    var i = r[n],
                        a = t[i];
                    (!1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
                        (a.get || a.set) &&
                            (t[i] = {configurable: !0, writable: !0, enumerable: a.enumerable, value: e[i]}));
                }
                return Object.create(Object.getPrototypeOf(e), t);
            }
            function e8(e, t) {
                return (
                    void 0 === t && (t = !1),
                    e7(e) ||
                        eK(e) ||
                        !eJ(e) ||
                        (eX(e) > 1 && (e.set = e.add = e.clear = e.delete = e9),
                        Object.freeze(e),
                        t &&
                            eZ(
                                e,
                                function (e, t) {
                                    return e8(t, !0);
                                },
                                !0,
                            )),
                    e
                );
            }
            function e9() {
                eG(2);
            }
            function e7(e) {
                return null == e || 'object' != typeof e || Object.isFrozen(e);
            }
            function te(e) {
                var t = tR[e];
                return (t || eG(18, e), t);
            }
            function tt(e, t) {
                t && (te('Patches'), (e.u = []), (e.s = []), (e.v = t));
            }
            function tr(e) {
                (tn(e), e.p.forEach(ta), (e.p = null));
            }
            function tn(e) {
                e === tv && (tv = e.l);
            }
            function ti(e) {
                return (tv = {p: [], l: tv, h: e, m: !0, _: 0});
            }
            function ta(e) {
                var t = e[tI];
                0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
            }
            function to(e, t) {
                t._ = t.p.length;
                var r = t.p[0],
                    n = void 0 !== e && e !== r;
                return (
                    t.h.O || te('ES5').S(t, e, n),
                    n
                        ? (r[tI].P && (tr(t), eG(4)),
                          eJ(e) && ((e = ts(t, e)), t.l || tl(t, e)),
                          t.u && te('Patches').M(r[tI].t, e, t.u, t.s))
                        : (e = ts(t, r, [])),
                    tr(t),
                    t.u && t.v(t.u, t.s),
                    e !== tk ? e : void 0
                );
            }
            function ts(e, t, r) {
                if (e7(t)) return t;
                var n = t[tI];
                if (!n)
                    return (
                        eZ(
                            t,
                            function (i, a) {
                                return tu(e, n, t, i, a, r);
                            },
                            !0,
                        ),
                        t
                    );
                if (n.A !== e) return t;
                if (!n.P) return (tl(e, n.t, !0), n.t);
                if (!n.I) {
                    ((n.I = !0), n.A._--);
                    var i = 4 === n.i || 5 === n.i ? (n.o = e6(n.k)) : n.o,
                        a = i,
                        o = !1;
                    (3 === n.i && ((a = new Set(i)), i.clear(), (o = !0)),
                        eZ(a, function (t, a) {
                            return tu(e, n, i, t, a, r, o);
                        }),
                        tl(e, i, !1),
                        r && e.u && te('Patches').N(n, r, e.u, e.s));
                }
                return n.o;
            }
            function tu(e, t, r, n, i, a, o) {
                if (eK(i)) {
                    var s = ts(e, i, a && t && 3 !== t.i && !e0(t.R, n) ? a.concat(n) : void 0);
                    if ((e1(r, n, s), !eK(s))) return;
                    e.m = !1;
                } else o && r.add(i);
                if (eJ(i) && !e7(i)) {
                    if (!e.h.D && e._ < 1) return;
                    (ts(e, i), (t && t.A.l) || tl(e, i));
                }
            }
            function tl(e, t, r) {
                (void 0 === r && (r = !1), !e.l && e.h.D && e.m && e8(t, r));
            }
            function tc(e, t) {
                var r = e[tI];
                return (r ? e4(r) : e)[t];
            }
            function td(e, t) {
                if (t in e)
                    for (var r = Object.getPrototypeOf(e); r; ) {
                        var n = Object.getOwnPropertyDescriptor(r, t);
                        if (n) return n;
                        r = Object.getPrototypeOf(r);
                    }
            }
            function th(e) {
                e.P || ((e.P = !0), e.l && th(e.l));
            }
            function tf(e) {
                e.o || (e.o = e6(e.t));
            }
            function tp(e, t, r) {
                var n,
                    i,
                    a,
                    o,
                    s,
                    u,
                    l,
                    c = e5(t)
                        ? te('MapSet').F(t, r)
                        : e3(t)
                          ? te('MapSet').T(t, r)
                          : e.O
                            ? ((a = i =
                                  {
                                      i: (n = Array.isArray(t)) ? 1 : 0,
                                      A: r ? r.A : tv,
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
                              (o = tq),
                              n && ((a = [i]), (o = tA)),
                              (u = (s = Proxy.revocable(a, o)).revoke),
                              (l = s.proxy),
                              (i.k = l),
                              (i.j = u),
                              l)
                            : te('ES5').J(t, r);
                return ((r ? r.A : tv).p.push(c), c);
            }
            function tg(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e);
                }
                return e6(e);
            }
            var tm,
                tv,
                ty = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
                tS = 'undefined' != typeof Map,
                tb = 'undefined' != typeof Set,
                tw = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
                tk = ty ? Symbol.for('immer-nothing') : (((tm = {})['immer-nothing'] = !0), tm),
                tO = ty ? Symbol.for('immer-draftable') : '__$immer_draftable',
                tI = ty ? Symbol.for('immer-state') : '__$immer_state',
                tC = '' + Object.prototype.constructor,
                tD =
                    'undefined' != typeof Reflect && Reflect.ownKeys
                        ? Reflect.ownKeys
                        : void 0 !== Object.getOwnPropertySymbols
                          ? function (e) {
                                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                            }
                          : Object.getOwnPropertyNames,
                tE =
                    Object.getOwnPropertyDescriptors ||
                    function (e) {
                        var t = {};
                        return (
                            tD(e).forEach(function (r) {
                                t[r] = Object.getOwnPropertyDescriptor(e, r);
                            }),
                            t
                        );
                    },
                tR = {},
                tq = {
                    get: function (e, t) {
                        if (t === tI) return e;
                        var r,
                            n,
                            i = e4(e);
                        if (!e0(i, t))
                            return (n = td(i, t))
                                ? 'value' in n
                                    ? n.value
                                    : null === (r = n.get) || void 0 === r
                                      ? void 0
                                      : r.call(e.k)
                                : void 0;
                        var a = i[t];
                        return e.I || !eJ(a) ? a : a === tc(e.t, t) ? (tf(e), (e.o[t] = tp(e.A.h, a, e))) : a;
                    },
                    has: function (e, t) {
                        return t in e4(e);
                    },
                    ownKeys: function (e) {
                        return Reflect.ownKeys(e4(e));
                    },
                    set: function (e, t, r) {
                        var n = td(e4(e), t);
                        if (null == n ? void 0 : n.set) return (n.set.call(e.k, r), !0);
                        if (!e.P) {
                            var i = tc(e4(e), t),
                                a = null == i ? void 0 : i[tI];
                            if (a && a.t === r) return ((e.o[t] = r), (e.R[t] = !1), !0);
                            if (e2(r, i) && (void 0 !== r || e0(e.t, t))) return !0;
                            (tf(e), th(e));
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
                            void 0 !== tc(e.t, t) || t in e.t ? ((e.R[t] = !1), tf(e), th(e)) : delete e.R[t],
                            e.o && delete e.o[t],
                            !0
                        );
                    },
                    getOwnPropertyDescriptor: function (e, t) {
                        var r = e4(e),
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
                        eG(11);
                    },
                    getPrototypeOf: function (e) {
                        return Object.getPrototypeOf(e.t);
                    },
                    setPrototypeOf: function () {
                        eG(12);
                    },
                },
                tA = {};
            (eZ(tq, function (e, t) {
                tA[e] = function () {
                    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
                };
            }),
                (tA.deleteProperty = function (e, t) {
                    return tA.set.call(this, e, t, void 0);
                }),
                (tA.set = function (e, t, r) {
                    return tq.set.call(this, e[0], t, r, e[0]);
                }));
            var tx = new ((function () {
                    function e(e) {
                        var t = this;
                        ((this.O = tw),
                            (this.D = !0),
                            (this.produce = function (e, r, n) {
                                if ('function' == typeof e && 'function' != typeof r) {
                                    var i,
                                        a = r;
                                    return (
                                        (r = e),
                                        function (e) {
                                            var n = this;
                                            void 0 === e && (e = a);
                                            for (
                                                var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), s = 1;
                                                s < i;
                                                s++
                                            )
                                                o[s - 1] = arguments[s];
                                            return t.produce(e, function (e) {
                                                var t;
                                                return (t = r).call.apply(t, [n, e].concat(o));
                                            });
                                        }
                                    );
                                }
                                if (
                                    ('function' != typeof r && eG(6),
                                    void 0 !== n && 'function' != typeof n && eG(7),
                                    eJ(e))
                                ) {
                                    var o = ti(t),
                                        s = tp(t, e, void 0),
                                        u = !0;
                                    try {
                                        ((i = r(s)), (u = !1));
                                    } finally {
                                        u ? tr(o) : tn(o);
                                    }
                                    return 'undefined' != typeof Promise && i instanceof Promise
                                        ? i.then(
                                              function (e) {
                                                  return (tt(o, n), to(e, o));
                                              },
                                              function (e) {
                                                  throw (tr(o), e);
                                              },
                                          )
                                        : (tt(o, n), to(i, o));
                                }
                                if (!e || 'object' != typeof e) {
                                    if (
                                        (void 0 === (i = r(e)) && (i = e),
                                        i === tk && (i = void 0),
                                        t.D && e8(i, !0),
                                        n)
                                    ) {
                                        var l = [],
                                            c = [];
                                        (te('Patches').M(e, i, l, c), n(l, c));
                                    }
                                    return i;
                                }
                                eG(21, e);
                            }),
                            (this.produceWithPatches = function (e, r) {
                                if ('function' == typeof e)
                                    return function (r) {
                                        for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                                            i[a - 1] = arguments[a];
                                        return t.produceWithPatches(r, function (t) {
                                            return e.apply(void 0, [t].concat(i));
                                        });
                                    };
                                var n,
                                    i,
                                    a = t.produce(e, r, function (e, t) {
                                        ((n = e), (i = t));
                                    });
                                return 'undefined' != typeof Promise && a instanceof Promise
                                    ? a.then(function (e) {
                                          return [e, n, i];
                                      })
                                    : [a, n, i];
                            }),
                            'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                            'boolean' == typeof (null == e ? void 0 : e.autoFreeze) &&
                                this.setAutoFreeze(e.autoFreeze));
                    }
                    var t = e.prototype;
                    return (
                        (t.createDraft = function (e) {
                            (eJ(e) || eG(8),
                                eK(e) &&
                                    (eK((t = e)) || eG(22, t),
                                    (e = (function e(t) {
                                        if (!eJ(t)) return t;
                                        var r,
                                            n = t[tI],
                                            i = eX(t);
                                        if (n) {
                                            if (!n.P && (n.i < 4 || !te('ES5').K(n))) return n.t;
                                            ((n.I = !0), (r = tg(t, i)), (n.I = !1));
                                        } else r = tg(t, i);
                                        return (
                                            eZ(r, function (t, i) {
                                                var a;
                                                (n && (2 === eX((a = n.t)) ? a.get(t) : a[t]) === i) || e1(r, t, e(i));
                                            }),
                                            3 === i ? new Set(r) : r
                                        );
                                    })(t))));
                            var t,
                                r = ti(this),
                                n = tp(this, e, void 0);
                            return ((n[tI].C = !0), tn(r), n);
                        }),
                        (t.finishDraft = function (e, t) {
                            var r = (e && e[tI]).A;
                            return (tt(r, t), to(void 0, r));
                        }),
                        (t.setAutoFreeze = function (e) {
                            this.D = e;
                        }),
                        (t.setUseProxies = function (e) {
                            (e && !tw && eG(20), (this.O = e));
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
                            var i = te('Patches').$;
                            return eK(e)
                                ? i(e, t)
                                : this.produce(e, function (e) {
                                      return i(e, t);
                                  });
                        }),
                        e
                    );
                })())(),
                tU = tx.produce;
            function tP(e) {
                return (tP =
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
            function tj(e, t) {
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
            function tF(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? tj(Object(r), !0).forEach(function (t) {
                              !(function (e, t, r) {
                                  var n;
                                  ((n = (function (e, t) {
                                      if ('object' !== tP(e) || null === e) return e;
                                      var r = e[Symbol.toPrimitive];
                                      if (void 0 !== r) {
                                          var n = r.call(e, t || 'default');
                                          if ('object' !== tP(n)) return n;
                                          throw TypeError('@@toPrimitive must return a primitive value.');
                                      }
                                      return ('string' === t ? String : Number)(e);
                                  })(t, 'string')),
                                      (t = 'symbol' === tP(n) ? n : String(n)) in e
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
                          : tj(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function tT(e) {
                return (
                    'Minified Redux error #' +
                    e +
                    '; visit https://redux.js.org/Errors?code=' +
                    e +
                    ' for the full message or use the non-minified dev environment for full errors. '
                );
            }
            (tx.produceWithPatches.bind(tx),
                tx.setAutoFreeze.bind(tx),
                tx.setUseProxies.bind(tx),
                tx.applyPatches.bind(tx),
                tx.createDraft.bind(tx),
                tx.finishDraft.bind(tx));
            var tM = ('function' == typeof Symbol && Symbol.observable) || '@@observable',
                t$ = function () {
                    return Math.random().toString(36).substring(7).split('').join('.');
                },
                tL = {
                    INIT: '@@redux/INIT' + t$(),
                    REPLACE: '@@redux/REPLACE' + t$(),
                    PROBE_UNKNOWN_ACTION: function () {
                        return '@@redux/PROBE_UNKNOWN_ACTION' + t$();
                    },
                };
            function t_(e) {
                for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                    var i = t[n];
                    'function' == typeof e[i] && (r[i] = e[i]);
                }
                var a,
                    o = Object.keys(r);
                try {
                    !(function (e) {
                        Object.keys(e).forEach(function (t) {
                            var r = e[t];
                            if (void 0 === r(void 0, {type: tL.INIT})) throw Error(tT(12));
                            if (void 0 === r(void 0, {type: tL.PROBE_UNKNOWN_ACTION()})) throw Error(tT(13));
                        });
                    })(r);
                } catch (e) {
                    a = e;
                }
                return function (e, t) {
                    if ((void 0 === e && (e = {}), a)) throw a;
                    for (var n = !1, i = {}, s = 0; s < o.length; s++) {
                        var u = o[s],
                            l = r[u],
                            c = e[u],
                            d = l(c, t);
                        if (void 0 === d) throw Error(tT(14));
                        ((i[u] = d), (n = n || d !== c));
                    }
                    return (n = n || o.length !== Object.keys(e).length) ? i : e;
                };
            }
            function tV() {
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
            function tN() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return function (e) {
                    return function () {
                        var r = e.apply(void 0, arguments),
                            n = function () {
                                throw Error(tT(15));
                            },
                            i = {
                                getState: r.getState,
                                dispatch: function () {
                                    return n.apply(void 0, arguments);
                                },
                            },
                            a = t.map(function (e) {
                                return e(i);
                            });
                        return ((n = tV.apply(void 0, a)(r.dispatch)), tF(tF({}, r), {}, {dispatch: n}));
                    };
                };
            }
            function tz(e) {
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
            var tQ = tz();
            tQ.withExtraArgument = tz;
            var tH =
                    ((rB = function (e, t) {
                        return (rB =
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
                        (rB(e, t),
                            (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
                    }),
                tY = function (e, t) {
                    var r,
                        n,
                        i,
                        a,
                        o = {
                            label: 0,
                            sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (a = {next: s(0), throw: s(1), return: s(2)}),
                        'function' == typeof Symbol &&
                            (a[Symbol.iterator] = function () {
                                return this;
                            }),
                        a
                    );
                    function s(a) {
                        return function (s) {
                            return (function (a) {
                                if (r) throw TypeError('Generator is already executing.');
                                for (; o; )
                                    try {
                                        if (
                                            ((r = 1),
                                            n &&
                                                (i =
                                                    2 & a[0]
                                                        ? n.return
                                                        : a[0]
                                                          ? n.throw || ((i = n.return) && i.call(n), 0)
                                                          : n.next) &&
                                                !(i = i.call(n, a[1])).done)
                                        )
                                            return i;
                                        switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                            case 0:
                                            case 1:
                                                i = a;
                                                break;
                                            case 4:
                                                return (o.label++, {value: a[1], done: !1});
                                            case 5:
                                                (o.label++, (n = a[1]), (a = [0]));
                                                continue;
                                            case 7:
                                                ((a = o.ops.pop()), o.trys.pop());
                                                continue;
                                            default:
                                                if (
                                                    !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                                                    (6 === a[0] || 2 === a[0])
                                                ) {
                                                    o = 0;
                                                    continue;
                                                }
                                                if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                    o.label = a[1];
                                                    break;
                                                }
                                                if (6 === a[0] && o.label < i[1]) {
                                                    ((o.label = i[1]), (i = a));
                                                    break;
                                                }
                                                if (i && o.label < i[2]) {
                                                    ((o.label = i[2]), o.ops.push(a));
                                                    break;
                                                }
                                                (i[2] && o.ops.pop(), o.trys.pop());
                                                continue;
                                        }
                                        a = t.call(e, o);
                                    } catch (e) {
                                        ((a = [6, e]), (n = 0));
                                    } finally {
                                        r = i = 0;
                                    }
                                if (5 & a[0]) throw a[1];
                                return {value: a[0] ? a[1] : void 0, done: !0};
                            })([a, s]);
                        };
                    }
                },
                tB = function (e, t) {
                    for (var r = 0, n = t.length, i = e.length; r < n; r++, i++) e[i] = t[r];
                    return e;
                },
                tW = Object.defineProperty,
                tG = Object.defineProperties,
                tK = Object.getOwnPropertyDescriptors,
                tJ = Object.getOwnPropertySymbols,
                tZ = Object.prototype.hasOwnProperty,
                tX = Object.prototype.propertyIsEnumerable,
                t0 = function (e, t, r) {
                    return t in e ? tW(e, t, {enumerable: !0, configurable: !0, writable: !0, value: r}) : (e[t] = r);
                },
                t1 = function (e, t) {
                    for (var r in t || (t = {})) tZ.call(t, r) && t0(e, r, t[r]);
                    if (tJ)
                        for (var n = 0, i = tJ(t); n < i.length; n++) {
                            var r = i[n];
                            tX.call(t, r) && t0(e, r, t[r]);
                        }
                    return e;
                },
                t2 = function (e, t) {
                    return tG(e, tK(t));
                },
                t5 =
                    'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                        : function () {
                              if (0 != arguments.length)
                                  return 'object' == typeof arguments[0] ? tV : tV.apply(null, arguments);
                          },
                t3 = (function (e) {
                    function t() {
                        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                        var i = e.apply(this, r) || this;
                        return (Object.setPrototypeOf(i, t.prototype), i);
                    }
                    return (
                        tH(t, e),
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
                                ? new (t.bind.apply(t, tB([void 0], e[0].concat(this))))()
                                : new (t.bind.apply(t, tB([void 0], e.concat(this))))();
                        }),
                        t
                    );
                })(Array);
            function t4(e) {
                return eJ(e) ? tU(e, function () {}) : e;
            }
            function t6(e, t) {
                function r() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    if (t) {
                        var i = t.apply(void 0, r);
                        if (!i) throw Error('prepareAction did not return an object');
                        return t1(
                            t1({type: e, payload: i.payload}, 'meta' in i && {meta: i.meta}),
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
            function t8(e, t, r, n) {
                void 0 === r && (r = []);
                var i,
                    a,
                    o,
                    s,
                    u,
                    l =
                        'function' == typeof t
                            ? ((a = {}),
                              (o = []),
                              t(
                                  (s = {
                                      addCase: function (e, t) {
                                          var r = 'string' == typeof e ? e : e.type;
                                          if (r in a)
                                              throw Error(
                                                  'addCase cannot be called with two reducers for the same action type',
                                              );
                                          return ((a[r] = t), s);
                                      },
                                      addMatcher: function (e, t) {
                                          return (o.push({matcher: e, reducer: t}), s);
                                      },
                                      addDefaultCase: function (e) {
                                          return ((i = e), s);
                                      },
                                  }),
                              ),
                              [a, o, i])
                            : [t, r, n],
                    c = l[0],
                    d = l[1],
                    h = l[2];
                if ('function' == typeof e)
                    u = function () {
                        return t4(e());
                    };
                else {
                    var f = t4(e);
                    u = function () {
                        return f;
                    };
                }
                function p(e, t) {
                    void 0 === e && (e = u());
                    var r = tB(
                        [c[t.type]],
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
                                if (eK(e)) {
                                    var n = r(e, t);
                                    return void 0 === n ? e : n;
                                }
                                if (eJ(e))
                                    return tU(e, function (e) {
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
            var t9 = function (e) {
                    void 0 === e && (e = 21);
                    for (var t = '', r = e; r--; )
                        t += 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[
                            (64 * Math.random()) | 0
                        ];
                    return t;
                },
                t7 = ['name', 'message', 'stack', 'code'],
                re = function (e, t) {
                    ((this.payload = e), (this.meta = t));
                },
                rt = function (e, t) {
                    ((this.payload = e), (this.meta = t));
                },
                rr = function (e) {
                    if ('object' == typeof e && null !== e) {
                        for (var t = {}, r = 0; r < t7.length; r++) {
                            var n = t7[r];
                            'string' == typeof e[n] && (t[n] = e[n]);
                        }
                        return t;
                    }
                    return {message: String(e)};
                };
            function rn(e, t, r) {
                var n = t6(e + '/fulfilled', function (e, t, r, n) {
                        return {
                            payload: e,
                            meta: t2(t1({}, n || {}), {arg: r, requestId: t, requestStatus: 'fulfilled'}),
                        };
                    }),
                    i = t6(e + '/pending', function (e, t, r) {
                        return {
                            payload: void 0,
                            meta: t2(t1({}, r || {}), {arg: t, requestId: e, requestStatus: 'pending'}),
                        };
                    }),
                    a = t6(e + '/rejected', function (e, t, n, i, a) {
                        return {
                            payload: i,
                            error: ((r && r.serializeError) || rr)(e || 'Rejected'),
                            meta: t2(t1({}, a || {}), {
                                arg: n,
                                requestId: t,
                                rejectedWithValue: !!i,
                                requestStatus: 'rejected',
                                aborted: (null == e ? void 0 : e.name) === 'AbortError',
                                condition: (null == e ? void 0 : e.name) === 'ConditionError',
                            }),
                        };
                    }),
                    o =
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
                        return function (s, u, l) {
                            var c,
                                d = (null == r ? void 0 : r.idGenerator) ? r.idGenerator(e) : t9(),
                                h = new o(),
                                f = new Promise(function (e, t) {
                                    return h.signal.addEventListener('abort', function () {
                                        return t({name: 'AbortError', message: c || 'Aborted'});
                                    });
                                }),
                                p = !1,
                                g = (function () {
                                    var o, c;
                                    return (
                                        (o = this),
                                        (c = function () {
                                            var o, c, g, m, v;
                                            return tY(this, function (y) {
                                                switch (y.label) {
                                                    case 0:
                                                        var S;
                                                        return (
                                                            y.trys.push([0, 4, , 5]),
                                                            null !==
                                                                (S = m =
                                                                    null == (o = null == r ? void 0 : r.condition)
                                                                        ? void 0
                                                                        : o.call(r, e, {getState: u, extra: l})) &&
                                                            'object' == typeof S &&
                                                            'function' == typeof S.then
                                                                ? [4, m]
                                                                : [3, 2]
                                                        );
                                                    case 1:
                                                        ((m = y.sent()), (y.label = 2));
                                                    case 2:
                                                        if (!1 === m)
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
                                                                    null == (c = null == r ? void 0 : r.getPendingMeta)
                                                                        ? void 0
                                                                        : c.call(
                                                                              r,
                                                                              {requestId: d, arg: e},
                                                                              {getState: u, extra: l},
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
                                                                            extra: l,
                                                                            requestId: d,
                                                                            signal: h.signal,
                                                                            rejectWithValue: function (e, t) {
                                                                                return new re(e, t);
                                                                            },
                                                                            fulfillWithValue: function (e, t) {
                                                                                return new rt(e, t);
                                                                            },
                                                                        }),
                                                                    ).then(function (t) {
                                                                        if (t instanceof re) throw t;
                                                                        return t instanceof rt
                                                                            ? n(t.payload, d, e, t.meta)
                                                                            : n(t, d, e);
                                                                    }),
                                                                ]),
                                                            ]
                                                        );
                                                    case 3:
                                                        return ((g = y.sent()), [3, 5]);
                                                    case 4:
                                                        return (
                                                            (g =
                                                                (v = y.sent()) instanceof re
                                                                    ? a(null, d, e, v.payload, v.meta)
                                                                    : a(v, d, e)),
                                                            [3, 5]
                                                        );
                                                    case 5:
                                                        return (
                                                            (r &&
                                                                !r.dispatchConditionRejection &&
                                                                a.match(g) &&
                                                                g.meta.condition) ||
                                                                s(g),
                                                            [2, g]
                                                        );
                                                }
                                            });
                                        }),
                                        new Promise(function (e, t) {
                                            var r = function (e) {
                                                    try {
                                                        i(c.next(e));
                                                    } catch (e) {
                                                        t(e);
                                                    }
                                                },
                                                n = function (e) {
                                                    try {
                                                        i(c.throw(e));
                                                    } catch (e) {
                                                        t(e);
                                                    }
                                                },
                                                i = function (t) {
                                                    return t.done ? e(t.value) : Promise.resolve(t.value).then(r, n);
                                                };
                                            i((c = c.apply(o, null)).next());
                                        })
                                    );
                                })();
                            return Object.assign(g, {
                                abort: function (e) {
                                    p && ((c = e), h.abort());
                                },
                                requestId: d,
                                arg: e,
                                unwrap: function () {
                                    return g.then(ri);
                                },
                            });
                        };
                    },
                    {pending: i, rejected: a, fulfilled: n, typePrefix: e},
                );
            }
            function ri(e) {
                if (e.meta && e.meta.rejectedWithValue) throw e.payload;
                if (e.error) throw e.error;
                return e.payload;
            }
            var ra = 'listenerMiddleware';
            (t6(ra + '/add'),
                t6(ra + '/removeAll'),
                t6(ra + '/remove'),
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
                                              var t = this[tI];
                                              return tq.get(t, e);
                                          },
                                          set: function (t) {
                                              var r = this[tI];
                                              tq.set(r, e, t);
                                          },
                                      }),
                            r
                        );
                    }
                    function t(e) {
                        for (var t = e.length - 1; t >= 0; t--) {
                            var i = e[t][tI];
                            if (!i.P)
                                switch (i.i) {
                                    case 5:
                                        n(i) && th(i);
                                        break;
                                    case 4:
                                        r(i) && th(i);
                                }
                        }
                    }
                    function r(e) {
                        for (var t = e.t, r = e.k, n = tD(r), i = n.length - 1; i >= 0; i--) {
                            var a = n[i];
                            if (a !== tI) {
                                var o = t[a];
                                if (void 0 === o && !e0(t, a)) return !0;
                                var s = r[a],
                                    u = s && s[tI];
                                if (u ? u.t !== o : !e2(s, o)) return !0;
                            }
                        }
                        var l = !!t[tI];
                        return n.length !== tD(t).length + (l ? 0 : 1);
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
                    tR.ES5 ||
                        (tR.ES5 = {
                            J: function (t, r) {
                                var n = Array.isArray(t),
                                    i = (function (t, r) {
                                        if (t) {
                                            for (var n = Array(r.length), i = 0; i < r.length; i++)
                                                Object.defineProperty(n, '' + i, e(i, !0));
                                            return n;
                                        }
                                        var a = tE(r);
                                        delete a[tI];
                                        for (var o = tD(a), s = 0; s < o.length; s++) {
                                            var u = o[s];
                                            a[u] = e(u, t || !!a[u].enumerable);
                                        }
                                        return Object.create(Object.getPrototypeOf(r), a);
                                    })(n, t),
                                    a = {
                                        i: n ? 5 : 4,
                                        A: r ? r.A : tv,
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
                                return (Object.defineProperty(i, tI, {value: a, writable: !0}), i);
                            },
                            S: function (e, r, i) {
                                i
                                    ? eK(r) && r[tI].A === e && t(e.p)
                                    : (e.u &&
                                          (function e(t) {
                                              if (t && 'object' == typeof t) {
                                                  var r = t[tI];
                                                  if (r) {
                                                      var i = r.t,
                                                          a = r.k,
                                                          o = r.R,
                                                          s = r.i;
                                                      if (4 === s)
                                                          (eZ(a, function (t) {
                                                              t !== tI &&
                                                                  (void 0 !== i[t] || e0(i, t)
                                                                      ? o[t] || e(a[t])
                                                                      : ((o[t] = !0), th(r)));
                                                          }),
                                                              eZ(i, function (e) {
                                                                  void 0 !== a[e] || e0(a, e) || ((o[e] = !1), th(r));
                                                              }));
                                                      else if (5 === s) {
                                                          if ((n(r) && (th(r), (o.length = !0)), a.length < i.length))
                                                              for (var u = a.length; u < i.length; u++) o[u] = !1;
                                                          else for (var l = i.length; l < a.length; l++) o[l] = !0;
                                                          for (var c = Math.min(a.length, i.length), d = 0; d < c; d++)
                                                              (a.hasOwnProperty(d) || (o[d] = !0),
                                                                  void 0 === o[d] && e(a[d]));
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
                })());
            var ro = new es({required: !0, emptyAllowed: !1}),
                rs = new es({required: !1, emptyAllowed: !1}),
                ru = new es({required: !0, emptyAllowed: !0}),
                rl = ({message: e, name: t, stack: r}) => ({message: e, name: t, stack: r}),
                rc = (e, t) => {
                    if ('required' in t) return {payload: new Z({value: t}).validate({value: e}).value};
                    let r = new el({options: {required: !0}, values: t}).validate(e);
                    if (r) throw new J(r);
                    return {payload: e};
                },
                rd = (e, t) => {
                    try {
                        return rc(e, t);
                    } catch (t) {
                        return {payload: e, error: rl(t)};
                    }
                },
                rh = (e, t, r, n) => rf(e, t, r, `Check the options of ${n}`, 'Controller initialization error'),
                rf = (e, t, r, n, i) => {
                    try {
                        return t.validate(r, n);
                    } catch (t) {
                        throw (e.logger.error(t, i), t);
                    }
                },
                rp = () => rs,
                rg = () => ro,
                rm = t6('configuration/updateBasicConfiguration', (e) =>
                    rd(e, {accessToken: rs, organizationId: rs, platformUrl: rs}),
                ),
                rv = t6('configuration/updateSearchConfiguration', (e) =>
                    rd(e, {
                        apiBaseUrl: rs,
                        pipeline: new es({required: !1, emptyAllowed: !0}),
                        searchHub: rs,
                        timezone: rs,
                        locale: rs,
                        authenticationProviders: new ed({required: !1, each: ro}),
                    }),
                ),
                ry = t6(
                    'configuration/updateAnalyticsConfiguration',
                    (e) => (
                        ef() && (e.enabled = !1),
                        rd(e, {
                            enabled: new ei({default: !0}),
                            originContext: rp(),
                            originLevel2: rp(),
                            originLevel3: rp(),
                            apiBaseUrl: rs,
                            runtimeEnvironment: new X(),
                            anonymous: new ei({default: !1}),
                            deviceId: rs,
                            userDisplayName: rs,
                            documentLocation: rs,
                        })
                    ),
                ),
                rS = t6('configuration/analytics/disable'),
                rb = t6('configuration/analytics/enable'),
                rw = t6('configuration/analytics/originlevel2', (e) => rd(e, {originLevel2: rg()})),
                rk = t6('configuration/analytics/originlevel3', (e) => rd(e, {originLevel3: rg()})),
                rO = {
                    q: new es(),
                    enableQuerySyntax: new ei(),
                    aq: new es(),
                    cq: new es(),
                    firstResult: new er({min: 0}),
                    numberOfResults: new er({min: 0}),
                    sortCriteria: new es(),
                    f: new el(),
                    cf: new el(),
                    nf: new el(),
                    df: new el(),
                    debug: new ei(),
                    sf: new el(),
                    tab: new es(),
                    af: new el(),
                },
                rI = t6('searchParameters/restore', (e) => rd(e, rO)),
                rC = t6('debug/enable'),
                rD = t6('debug/disable'),
                rE = () => !1,
                rR = t8(rE(), (e) => {
                    e.addCase(rC, () => !0)
                        .addCase(rD, () => !1)
                        .addCase(rI, (e, t) => {
                            var r;
                            return null != (r = t.payload.debug) ? r : e;
                        });
                }),
                rq = t6('pipeline/set', (e) => rd(e, new es({required: !0, emptyAllowed: !0}))),
                rA = t6('history/undo'),
                rx = t6('history/redo'),
                rU = t6('history/snapshot');
            (rn('history/back', async (e, {dispatch: t}) => {
                (t(rA()), await t(rP()));
            }),
                rn('history/forward', async (e, {dispatch: t}) => {
                    (t(rx()), await t(rP()));
                }));
            var rP = rn('history/change', async (e, {getState: t}) => t().history.present),
                rj = () => '',
                rF = t8(rj(), (e) => {
                    e.addCase(rq, (e, t) => t.payload)
                        .addCase(rP.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.pipeline) ? n : e;
                        })
                        .addCase(rv, (e, t) => t.payload.pipeline || e);
                });
            function rT(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        0 > t.indexOf(n[i]) &&
                            Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                            (r[n[i]] = e[n[i]]);
                return r;
            }
            function rM(e, t, r, n) {
                return new (r || (r = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(n.next(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function s(e) {
                        try {
                            u(n.throw(e));
                        } catch (e) {
                            a(e);
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
                              ).then(o, s);
                    }
                    u((n = n.apply(e, t || [])).next());
                });
            }
            function r$() {
                return 'undefined' != typeof navigator;
            }
            function rL() {
                return 'undefined' != typeof document;
            }
            function r_() {
                try {
                    return 'undefined' != typeof localStorage;
                } catch {
                    return !1;
                }
            }
            function rV() {
                return r$() && navigator.cookieEnabled;
            }
            (((rW = rG || (rG = {})).search = 'search'),
                (rW.click = 'click'),
                (rW.custom = 'custom'),
                (rW.view = 'view'),
                (rW.collect = 'collect'));
            var rN = [rG.click, rG.custom, rG.search, rG.view],
                rz = (e, t) =>
                    -1 !== rN.indexOf(e)
                        ? Object.assign(
                              {
                                  language: rL() ? document.documentElement.lang : 'unknown',
                                  userAgent: r$() ? navigator.userAgent : 'unknown',
                              },
                              t,
                          )
                        : t,
                rQ = class {
                    static set(e, t, r) {
                        var n, i, a;
                        (r && (n = new Date()).setTime(n.getTime() + r),
                            -1 === (a = window.location.hostname).indexOf('.')
                                ? rH(e, t, n)
                                : rH(e, t, n, (i = a.split('.'))[i.length - 2] + '.' + i[i.length - 1]));
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
                        rQ.set(e, '', -1);
                    }
                };
            function rH(e, t, r, n) {
                document.cookie =
                    `${e}=${t}` +
                    (r ? `;expires=${r.toUTCString()}` : '') +
                    (n ? `;domain=${n}` : '') +
                    ';path=/;SameSite=Lax';
            }
            var rY = class {
                getItem(e) {
                    return rQ.get(`${rY.prefix}${e}`);
                }
                removeItem(e) {
                    rQ.erase(`${rY.prefix}${e}`);
                }
                setItem(e, t, r) {
                    rQ.set(`${rY.prefix}${e}`, t, r);
                }
            };
            rY.prefix = 'coveo_';
            var rB,
                rW,
                rG,
                rK,
                rJ = class {
                    constructor() {
                        this.cookieStorage = new rY();
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
                rZ = class {
                    getItem(e) {
                        return null;
                    }
                    removeItem(e) {}
                    setItem(e, t) {}
                },
                rX = '__coveo.analytics.history',
                r0 = class {
                    constructor(e) {
                        this.store =
                            e ||
                            (r_()
                                ? localStorage
                                : rV()
                                  ? new rY()
                                  : !(function () {
                                          try {
                                              return 'undefined' != typeof sessionStorage;
                                          } catch {
                                              return !1;
                                          }
                                      })()
                                    ? new rZ()
                                    : sessionStorage);
                    }
                    addElement(e) {
                        ((e.internalTime = new Date().getTime()), (e = this.cropQueryElement(this.stripEmptyQuery(e))));
                        let t = this.getHistoryWithInternalTime();
                        null != t ? this.isValidEntry(e) && this.setHistory([e].concat(t)) : this.setHistory([e]);
                    }
                    addElementAsync(e) {
                        return rM(this, void 0, void 0, function* () {
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
                        return rM(this, void 0, void 0, function* () {
                            let e = yield this.getHistoryWithInternalTimeAsync();
                            return this.stripEmptyQueries(this.stripInternalTime(e));
                        });
                    }
                    getHistoryWithInternalTime() {
                        try {
                            let e = this.store.getItem(rX);
                            return e && 'string' == typeof e ? JSON.parse(e) : [];
                        } catch {
                            return [];
                        }
                    }
                    getHistoryWithInternalTimeAsync() {
                        return rM(this, void 0, void 0, function* () {
                            try {
                                let e = yield this.store.getItem(rX);
                                return e ? JSON.parse(e) : [];
                            } catch {
                                return [];
                            }
                        });
                    }
                    setHistory(e) {
                        try {
                            this.store.setItem(rX, JSON.stringify(e.slice(0, 20)));
                        } catch {}
                    }
                    clear() {
                        try {
                            this.store.removeItem(rX);
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
                r1 = Object.freeze({
                    __proto__: null,
                    HistoryStore: r0,
                    MAX_NUMBER_OF_HISTORY_ELEMENTS: 20,
                    MAX_VALUE_SIZE: 75,
                    MIN_THRESHOLD_FOR_DUPLICATE_VALUE: 6e4,
                    STORE_KEY: rX,
                    default: r0,
                }),
                r2 = (e, t) =>
                    rM(void 0, void 0, void 0, function* () {
                        return e === rG.view
                            ? (yield r5(t.contentIdValue),
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
                r5 = (e) =>
                    rM(void 0, void 0, void 0, function* () {
                        let t = new r0(),
                            r = {name: 'PageView', value: e, time: new Date().toISOString()};
                        yield t.addElementAsync(r);
                    }),
                r3 = new Uint8Array(16),
                r4 =
                    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            function r6(e) {
                return 'string' == typeof e && r4.test(e);
            }
            var r8 = [];
            for (let e = 0; e < 256; ++e) r8.push((e + 256).toString(16).slice(1));
            function r9(e, t = 0) {
                return (
                    r8[e[t + 0]] +
                    r8[e[t + 1]] +
                    r8[e[t + 2]] +
                    r8[e[t + 3]] +
                    '-' +
                    r8[e[t + 4]] +
                    r8[e[t + 5]] +
                    '-' +
                    r8[e[t + 6]] +
                    r8[e[t + 7]] +
                    '-' +
                    r8[e[t + 8]] +
                    r8[e[t + 9]] +
                    '-' +
                    r8[e[t + 10]] +
                    r8[e[t + 11]] +
                    r8[e[t + 12]] +
                    r8[e[t + 13]] +
                    r8[e[t + 14]] +
                    r8[e[t + 15]]
                ).toLowerCase();
            }
            var r7 = {randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)};
            function ne(e, t, r) {
                if (r7.randomUUID && !t && !e) return r7.randomUUID();
                let n =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (
                                !rK &&
                                !(rK =
                                    'undefined' != typeof crypto &&
                                    crypto.getRandomValues &&
                                    crypto.getRandomValues.bind(crypto))
                            )
                                throw Error(
                                    'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
                                );
                            return rK(r3);
                        }
                    )();
                if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = n[e];
                    return t;
                }
                return r9(n);
            }
            function nt(e, t) {
                return (e << t) | (e >>> (32 - t));
            }
            var nr = (function (e, t, r) {
                    function n(e, t, n, i) {
                        var a;
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
                                    if (!r6(e)) throw TypeError('Invalid UUID');
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
                            (null === (a = t) || void 0 === a ? void 0 : a.length) !== 16)
                        )
                            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
                        let o = new Uint8Array(16 + e.length);
                        if (
                            (o.set(t),
                            o.set(e, t.length),
                            ((o = r(o))[6] = (15 & o[6]) | 80),
                            (o[8] = (63 & o[8]) | 128),
                            n)
                        ) {
                            i = i || 0;
                            for (let e = 0; e < 16; ++e) n[i + e] = o[e];
                            return n;
                        }
                        return r9(o);
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
                        for (let e = 16; e < 80; ++e) n[e] = nt(n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16], 1);
                        let a = r[0],
                            o = r[1],
                            s = r[2],
                            u = r[3],
                            l = r[4];
                        for (let e = 0; e < 80; ++e) {
                            let r = Math.floor(e / 20),
                                i =
                                    (nt(a, 5) +
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
                                        })(r, o, s, u) +
                                        l +
                                        t[r] +
                                        n[e]) >>>
                                    0;
                            ((l = u), (u = s), (s = nt(o, 30) >>> 0), (o = a), (a = i));
                        }
                        ((r[0] = (r[0] + a) >>> 0),
                            (r[1] = (r[1] + o) >>> 0),
                            (r[2] = (r[2] + s) >>> 0),
                            (r[3] = (r[3] + u) >>> 0),
                            (r[4] = (r[4] + l) >>> 0));
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
                nn = '2.28.12',
                ni = class {
                    constructor(e, t) {
                        if (!r6(e)) throw Error('Not a valid uuid');
                        ((this.clientId = e), (this.creationDate = Math.floor(t / 1e3)));
                    }
                    toString() {
                        return this.clientId.replace(/-/g, '') + '.' + this.creationDate.toString();
                    }
                    get expired() {
                        let e = Math.floor(Date.now() / 1e3) - this.creationDate;
                        return e < 0 || e > ni.expirationTime;
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
                        return r6(i) ? new ni(i, 1e3 * Number.parseInt(n)) : null;
                    }
                };
            ((ni.cvo_cid = 'cvo_cid'), (ni.expirationTime = 120));
            var na = Object.keys;
            function no(e) {
                return null !== e && 'object' == typeof e && !Array.isArray(e);
            }
            var ns = {
                    id: 'svc_ticket_id',
                    subject: 'svc_ticket_subject',
                    description: 'svc_ticket_description',
                    category: 'svc_ticket_category',
                    productId: 'svc_ticket_product_id',
                    custom: 'svc_ticket_custom',
                },
                nu = RegExp(`^(${[...na(ns).map((e) => ns[e])].join('|')}$)`),
                nl = [(e) => nu.test(e)],
                nc = {
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
                nd = {
                    id: 'id',
                    name: 'nm',
                    brand: 'br',
                    category: 'ca',
                    variant: 'va',
                    position: 'ps',
                    price: 'pr',
                    group: 'group',
                },
                nh = {action: 'pa', list: 'pal', listSource: 'pls'},
                nf = {
                    id: 'ti',
                    revenue: 'tr',
                    tax: 'tt',
                    shipping: 'ts',
                    coupon: 'tcc',
                    affiliation: 'ta',
                    step: 'cos',
                    option: 'col',
                },
                np = {id: 'quoteId', affiliation: 'quoteAffiliation'},
                ng = {id: 'reviewId', rating: 'reviewRating', comment: 'reviewComment'},
                nm = {
                    add: nh,
                    bookmark_add: nh,
                    bookmark_remove: nh,
                    click: nh,
                    checkout: nh,
                    checkout_option: nh,
                    detail: nh,
                    impression: nh,
                    remove: nh,
                    refund: Object.assign(Object.assign({}, nh), nf),
                    purchase: Object.assign(Object.assign({}, nh), nf),
                    quickview: nh,
                    quote: Object.assign(Object.assign({}, nh), np),
                    review: Object.assign(Object.assign({}, nh), ng),
                },
                nv = na(nc).map((e) => nc[e]),
                ny = na(nd).map((e) => nd[e]),
                nS = na(nh).map((e) => nh[e]),
                nb = na(nf).map((e) => nf[e]),
                nw = na(ng).map((e) => ng[e]),
                nk = na(np).map((e) => np[e]),
                nO = [...nv, 'custom'].join('|'),
                nI = [...ny, 'custom'].join('|'),
                nC = '(pr[0-9]+)',
                nD = '(il[0-9]+pi[0-9]+)',
                nE = RegExp(`^${nC}(${nO})$`),
                nR = RegExp(`^(${nD}(${nI}))|(il[0-9]+nm)$`),
                nq = RegExp(`^(${nS.join('|')})$`),
                nA = RegExp(`^(${nb.join('|')})$`),
                nx = RegExp(`^${nC}custom$`),
                nU = RegExp(`^${nD}custom$`),
                nP = RegExp(
                    `^(${['loyaltyCardId', 'loyaltyTier', 'thirdPartyPersona', 'companyName', 'favoriteStore', 'storeName', 'userIndustry', 'userRole', 'userDepartment', 'businessUnit', ...nw, ...nk].join('|')})$`,
                ),
                nj = [(e) => nR.test(e), (e) => nE.test(e), (e) => nq.test(e), (e) => nA.test(e), (e) => nP.test(e)],
                nF = [nx, nU],
                nT = Object.assign(
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
                nM = (e) => {
                    let t = (!!e.action && nm[e.action]) || {};
                    return na(e).reduce((r, n) => {
                        let i = t[n] || nT[n] || n;
                        return Object.assign(Object.assign({}, r), {[i]: e[n]});
                    }, {});
                },
                n$ = na(nT).map((e) => nT[e]),
                nL = (e) => -1 !== n$.indexOf(e),
                n_ = (e) => 'custom' === e,
                nV = (e) => [...nj, ...nl, nL, n_].some((t) => t(e)),
                nN = (e) =>
                    na(e).reduce((t, r) => {
                        let n = nz(r);
                        return n
                            ? Object.assign(Object.assign({}, t), nQ(n, e[r]))
                            : Object.assign(Object.assign({}, t), {[r]: e[r]});
                    }, {}),
                nz = (e) => {
                    let t;
                    return (
                        [...nF].every((r) => {
                            var n;
                            return !(t = null === (n = r.exec(e)) || void 0 === n ? void 0 : n[1]);
                        }),
                        t
                    );
                },
                nQ = (e, t) => na(t).reduce((r, n) => Object.assign(Object.assign({}, r), {[`${e}${n}`]: t[n]}), {}),
                nH = class {
                    constructor(e) {
                        this.opts = e;
                    }
                    sendEvent(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            if (!navigator.sendBeacon)
                                throw Error(
                                    'navigator.sendBeacon is not supported in this browser. Consider adding a polyfill like "sendbeacon-polyfill".',
                                );
                            let {baseUrl: r, preprocessRequest: n} = this.opts,
                                i = this.encodeForEventType(e, t),
                                a = {
                                    url: `${r}/analytics/${e}?${yield this.getQueryParamsForEventType(e)}`,
                                    body: new Blob([i], {type: 'application/x-www-form-urlencoded'}),
                                },
                                {url: o, body: s} = Object.assign(
                                    Object.assign({}, a),
                                    n ? yield n(a, 'analyticsBeacon') : {},
                                );
                            (console.log(`Sending beacon for "${e}" with: `, JSON.stringify(t)),
                                navigator.sendBeacon(o, s));
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
                        return rM(this, void 0, void 0, function* () {
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
                        return -1 !== [rG.click, rG.custom, rG.search, rG.view].indexOf(e);
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
                nY = class {
                    sendEvent(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return Promise.resolve();
                        });
                    }
                    deleteHttpCookieVisitorId() {
                        return rM(this, void 0, void 0, function* () {
                            return Promise.resolve();
                        });
                    }
                },
                nB = window.fetch,
                nW = class {
                    constructor(e) {
                        this.opts = e;
                    }
                    sendEvent(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            let {baseUrl: r, visitorIdProvider: n, preprocessRequest: i} = this.opts,
                                a = {
                                    url: `${r}/analytics/${e}${this.shouldAppendVisitorId(e) ? yield this.getVisitorIdParam() : ''}`,
                                    credentials: 'include',
                                    mode: 'cors',
                                    headers: this.getHeaders(),
                                    method: 'POST',
                                    body: JSON.stringify(t),
                                },
                                o = Object.assign(Object.assign({}, a), i ? yield i(a, 'analyticsFetch') : {}),
                                {url: s} = o,
                                u = rT(o, ['url']),
                                l = yield nB(s, u);
                            if (l.ok) {
                                let e = yield l.json();
                                return (e.visitorId && n.setCurrentVisitorId(e.visitorId), e);
                            }
                            try {
                                l.json();
                            } catch {}
                            throw (
                                console.error(`An error has occured when sending the "${e}" event.`, l, t),
                                Error(
                                    `An error has occurred when sending the "${e}" event. Check the console logs for more details.`,
                                )
                            );
                        });
                    }
                    deleteHttpCookieVisitorId() {
                        return rM(this, void 0, void 0, function* () {
                            let {baseUrl: e} = this.opts,
                                t = `${e}/analytics/visit`;
                            yield nB(t, {headers: this.getHeaders(), method: 'DELETE'});
                        });
                    }
                    shouldAppendVisitorId(e) {
                        return -1 !== [rG.click, rG.custom, rG.search, rG.view].indexOf(e);
                    }
                    getVisitorIdParam() {
                        return rM(this, void 0, void 0, function* () {
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
                nG = class {
                    constructor(e, t) {
                        (r_() && rV()
                            ? (this.storage = new rJ())
                            : r_()
                              ? (this.storage = localStorage)
                              : (console.warn('BrowserRuntime detected no valid storage available.', this),
                                (this.storage = new rZ())),
                            (this.client = new nW(e)),
                            (this.beaconClient = new nH(e)),
                            window.addEventListener('beforeunload', () => {
                                for (let {eventType: e, payload: r} of t()) this.beaconClient.sendEvent(e, r);
                            }));
                    }
                },
                nK = class {
                    constructor(e, t) {
                        ((this.storage = t || new rZ()), (this.client = new nW(e)));
                    }
                },
                nJ = class {
                    constructor() {
                        ((this.storage = new rZ()), (this.client = new nY()));
                    }
                },
                nZ = (e) => (null == e ? void 0 : e.startsWith('xx')) || !1,
                nX = `
        We've detected you're using React Native but have not provided the corresponding runtime, 
        for an optimal experience please use the "coveo.analytics/react-native" subpackage.
        Follow the Readme on how to set it up: https://github.com/coveo/coveo.analytics.js#using-react-native
    `,
                n0 = ['1', 1, 'yes', !0];
            function n1() {
                return (
                    r$() &&
                    [
                        navigator.globalPrivacyControl,
                        navigator.doNotTrack,
                        navigator.msDoNotTrack,
                        window.doNotTrack,
                    ].some((e) => -1 !== n0.indexOf(e))
                );
            }
            var n2,
                n5 = {default: 'https://analytics.cloud.coveo.com/rest/ua'},
                n3 = class {
                    get defaultOptions() {
                        return {
                            endpoint: n5.default,
                            isCustomEndpoint: !1,
                            token: '',
                            version: 'v15',
                            beforeSendHooks: [],
                            afterSendHooks: [],
                        };
                    }
                    get version() {
                        return nn;
                    }
                    constructor(e) {
                        if (((this.acceptedLinkReferrers = []), !e))
                            throw Error('You have to pass options to this constructor');
                        ((this.options = Object.assign(Object.assign({}, this.defaultOptions), e)),
                            (this.visitorId = ''),
                            (this.bufferedRequests = []),
                            (this.beforeSendHooks = [r2, rz].concat(this.options.beforeSendHooks)),
                            (this.afterSendHooks = this.options.afterSendHooks),
                            (this.eventTypeMapping = {}));
                        let t = {
                            baseUrl: this.baseUrl,
                            token: this.options.token,
                            visitorIdProvider: this,
                            preprocessRequest: this.options.preprocessRequest,
                        };
                        ((this.runtime = this.options.runtimeEnvironment || this.initRuntime(t)),
                            n1() && (this.clear(), (this.runtime.storage = new rZ())));
                    }
                    initRuntime(e) {
                        return 'undefined' != typeof window && rL()
                            ? new nG(e, () => {
                                  let e = [...this.bufferedRequests];
                                  return ((this.bufferedRequests = []), e);
                              })
                            : ('undefined' != typeof navigator &&
                                  'ReactNative' == navigator.product &&
                                  console.warn(nX),
                              new nK(e));
                    }
                    get storage() {
                        return this.runtime.storage;
                    }
                    determineVisitorId() {
                        return rM(this, void 0, void 0, function* () {
                            try {
                                return (
                                    this.extractClientIdFromLink(window.location.href) ||
                                    (yield this.storage.getItem('visitorId')) ||
                                    ne()
                                );
                            } catch (e) {
                                return (
                                    console.log(
                                        'Could not get visitor ID from the current runtime environment storage. Using a random ID instead.',
                                        e,
                                    ),
                                    ne()
                                );
                            }
                        });
                    }
                    getCurrentVisitorId() {
                        return rM(this, void 0, void 0, function* () {
                            if (!this.visitorId) {
                                let e = yield this.determineVisitorId();
                                yield this.setCurrentVisitorId(e);
                            }
                            return this.visitorId;
                        });
                    }
                    setCurrentVisitorId(e) {
                        return rM(this, void 0, void 0, function* () {
                            ((this.visitorId = e), yield this.storage.setItem('visitorId', e));
                        });
                    }
                    setClientId(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            if (r6(e)) this.setCurrentVisitorId(e.toLowerCase());
                            else {
                                if (!t)
                                    throw Error('Cannot generate uuid client id without a specific namespace string.');
                                this.setCurrentVisitorId(nr(e, nr(t, '38824e1f-37f5-42d3-8372-a4b8fa9df946')));
                            }
                        });
                    }
                    getParameters(e, ...t) {
                        return rM(this, void 0, void 0, function* () {
                            return yield this.resolveParameters(e, ...t);
                        });
                    }
                    getPayload(e, ...t) {
                        return rM(this, void 0, void 0, function* () {
                            let r = yield this.resolveParameters(e, ...t);
                            return yield this.resolvePayloadForParameters(e, r);
                        });
                    }
                    get currentVisitorId() {
                        return (
                            'string' != typeof (this.visitorId || this.storage.getItem('visitorId')) &&
                                this.setCurrentVisitorId(ne()),
                            this.visitorId
                        );
                    }
                    set currentVisitorId(e) {
                        ((this.visitorId = e), this.storage.setItem('visitorId', e));
                    }
                    extractClientIdFromLink(e) {
                        if (n1()) return null;
                        try {
                            let t = new URL(e).searchParams.get(ni.cvo_cid);
                            if (null == t) return null;
                            let r = ni.fromString(t);
                            return r && rL() && r.validate(document.referrer, this.acceptedLinkReferrers)
                                ? r.clientId
                                : null;
                        } catch {}
                        return null;
                    }
                    resolveParameters(e, ...t) {
                        return rM(this, void 0, void 0, function* () {
                            let {
                                variableLengthArgumentsNames: r = [],
                                addVisitorIdParameter: n = !1,
                                usesMeasurementProtocol: i = !1,
                                addClientIdParameter: a = !1,
                            } = this.eventTypeMapping[e] || {};
                            return yield [
                                (e) => (r.length > 0 ? this.parseVariableArgumentsPayload(r, e) : e[0]),
                                (e) =>
                                    rM(this, void 0, void 0, function* () {
                                        return Object.assign(Object.assign({}, e), {
                                            visitorId: n ? yield this.getCurrentVisitorId() : '',
                                        });
                                    }),
                                (e) =>
                                    rM(this, void 0, void 0, function* () {
                                        return a
                                            ? Object.assign(Object.assign({}, e), {
                                                  clientId: yield this.getCurrentVisitorId(),
                                              })
                                            : e;
                                    }),
                                (e) => (i ? this.ensureAnonymousUserWhenUsingApiKey(e) : e),
                                (t) =>
                                    this.beforeSendHooks.reduce(
                                        (t, r) =>
                                            rM(this, void 0, void 0, function* () {
                                                let n = yield t;
                                                return yield r(e, n);
                                            }),
                                        t,
                                    ),
                            ].reduce(
                                (e, t) =>
                                    rM(this, void 0, void 0, function* () {
                                        let r = yield e;
                                        return yield t(r);
                                    }),
                                Promise.resolve(t),
                            );
                        });
                    }
                    resolvePayloadForParameters(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            let {usesMeasurementProtocol: r = !1} = this.eventTypeMapping[e] || {};
                            return yield [
                                (e) => this.setTrackingIdIfTrackingIdNotPresent(e),
                                (t) => this.removeEmptyPayloadValues(t, e),
                                (t) => this.validateParams(t, e),
                                (e) => (r ? nM(e) : e),
                                (e) => (r ? this.removeUnknownParameters(e) : e),
                                (e) => (r ? this.processCustomParameters(e) : this.mapCustomParametersToCustomData(e)),
                            ].reduce(
                                (e, t) =>
                                    rM(this, void 0, void 0, function* () {
                                        let r = yield e;
                                        return yield t(r);
                                    }),
                                Promise.resolve(t),
                            );
                        });
                    }
                    makeEvent(e, ...t) {
                        return rM(this, void 0, void 0, function* () {
                            let {newEventType: r = e} = this.eventTypeMapping[e] || {},
                                n = yield this.resolveParameters(e, ...t),
                                i = yield this.resolvePayloadForParameters(e, n);
                            return {
                                eventType: r,
                                payload: i,
                                log: (t) =>
                                    rM(this, void 0, void 0, function* () {
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
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeEvent(e, ...t)).log({});
                        });
                    }
                    deferExecution() {
                        return new Promise((e) => setTimeout(e, 0));
                    }
                    sendFromBufferWithFetch() {
                        return rM(this, void 0, void 0, function* () {
                            let e = this.bufferedRequests.shift();
                            if (e) {
                                let {eventType: t, payload: r} = e;
                                return this.runtime.client.sendEvent(t, r);
                            }
                        });
                    }
                    clear() {
                        (this.storage.removeItem('visitorId'), new r0().clear());
                    }
                    deleteHttpOnlyVisitorId() {
                        this.runtime.client.deleteHttpCookieVisitorId();
                    }
                    makeSearchEvent(e) {
                        return rM(this, void 0, void 0, function* () {
                            return this.makeEvent(rG.search, e);
                        });
                    }
                    sendSearchEvent(e) {
                        var {searchQueryUid: t} = e,
                            r = rT(e, ['searchQueryUid']);
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeSearchEvent(r)).log({searchQueryUid: t});
                        });
                    }
                    makeClickEvent(e) {
                        return rM(this, void 0, void 0, function* () {
                            return this.makeEvent(rG.click, e);
                        });
                    }
                    sendClickEvent(e) {
                        var {searchQueryUid: t} = e,
                            r = rT(e, ['searchQueryUid']);
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeClickEvent(r)).log({searchQueryUid: t});
                        });
                    }
                    makeCustomEvent(e) {
                        return rM(this, void 0, void 0, function* () {
                            return this.makeEvent(rG.custom, e);
                        });
                    }
                    sendCustomEvent(e) {
                        var {lastSearchQueryUid: t} = e,
                            r = rT(e, ['lastSearchQueryUid']);
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEvent(r)).log({lastSearchQueryUid: t});
                        });
                    }
                    makeViewEvent(e) {
                        return rM(this, void 0, void 0, function* () {
                            return this.makeEvent(rG.view, e);
                        });
                    }
                    sendViewEvent(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeViewEvent(e)).log({});
                        });
                    }
                    getVisit() {
                        return rM(this, void 0, void 0, function* () {
                            let e = yield (yield fetch(`${this.baseUrl}/analytics/visit`)).json();
                            return ((this.visitorId = e.visitorId), e);
                        });
                    }
                    getHealth() {
                        return rM(this, void 0, void 0, function* () {
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
                        return -1 !== ({[rG.search]: ['queryText']}[e] || []).indexOf(t);
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
                                if (nV(e)) return !0;
                                console.log(e, 'is not processed by coveoua');
                            })
                            .reduce((t, r) => Object.assign(Object.assign({}, t), {[r]: e[r]}), {});
                    }
                    processCustomParameters(e) {
                        let {custom: t} = e,
                            r = rT(e, ['custom']),
                            n = {};
                        t && no(t) && (n = this.lowercaseKeys(t));
                        let i = nN(r);
                        return Object.assign(Object.assign({}, n), i);
                    }
                    mapCustomParametersToCustomData(e) {
                        let {custom: t} = e,
                            r = rT(e, ['custom']);
                        if (!(t && no(t))) return e;
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
                            n = rT(e, ['anonymizeIp']);
                        return (
                            void 0 !== r &&
                                -1 ==
                                    ['0', 'false', 'undefined', 'null', '{}', '[]', ''].indexOf(`${r}`.toLowerCase()) &&
                                (n.anonymizeIp = 1),
                            (t == rG.view || t == rG.click || t == rG.search || t == rG.custom) &&
                                (n.originLevel3 = this.limit(n.originLevel3, 128)),
                            t == rG.view && (n.location = this.limit(n.location, 128)),
                            ('pageview' == t || 'event' == t) &&
                                ((n.referrer = this.limit(n.referrer, 2048)),
                                (n.location = this.limit(n.location, 2048)),
                                (n.page = this.limit(n.page, 2048))),
                            n
                        );
                    }
                    ensureAnonymousUserWhenUsingApiKey(e) {
                        let {userId: t} = e,
                            r = rT(e, ['userId']);
                        return nZ(this.options.token) && !t ? ((r.userId = 'anonymous'), r) : e;
                    }
                    setTrackingIdIfTrackingIdNotPresent(e) {
                        let {trackingId: t} = e,
                            r = rT(e, ['trackingId']);
                        return t
                            ? e
                            : (r.hasOwnProperty('custom') &&
                                  no(r.custom) &&
                                  (r.custom.hasOwnProperty('context_website') || r.custom.hasOwnProperty('siteName')) &&
                                  (r.trackingId = r.custom.context_website || r.custom.siteName),
                              r.hasOwnProperty('customData') &&
                                  no(r.customData) &&
                                  (r.customData.hasOwnProperty('context_website') ||
                                      r.customData.hasOwnProperty('siteName')) &&
                                  (r.trackingId = r.customData.context_website || r.customData.siteName),
                              r);
                    }
                    limit(e, t) {
                        return 'string' != typeof e ? e : e.substring(0, t);
                    }
                    get baseUrl() {
                        return (function (e = n5.default, t = 'v15', r = !1) {
                            return ((e = e.replace(/\/$/, '')), r)
                                ? `${e}/${t}`
                                : `${e}${e.endsWith('/rest') || e.endsWith('/rest/ua') ? '' : '/rest'}/${t}`;
                        })(this.options.endpoint, this.options.version, this.options.isCustomEndpoint);
                    }
                };
            (((n = n2 || (n2 = {})).contextChanged = 'contextChanged'),
                (n.expandToFullUI = 'expandToFullUI'),
                (n.openUserActions = 'openUserActions'),
                (n.showPrecedingSessions = 'showPrecedingSessions'),
                (n.showFollowingSessions = 'showFollowingSessions'),
                (n.clickViewedDocument = 'clickViewedDocument'),
                (n.clickPageView = 'clickPageView'),
                ((i = p || (p = {})).interfaceLoad = 'interfaceLoad'),
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
            var n4 = {
                    [p.triggerNotify]: 'queryPipelineTriggers',
                    [p.triggerExecute]: 'queryPipelineTriggers',
                    [p.triggerQuery]: 'queryPipelineTriggers',
                    [p.triggerRedirect]: 'queryPipelineTriggers',
                    [p.queryError]: 'errors',
                    [p.queryErrorBack]: 'errors',
                    [p.queryErrorClear]: 'errors',
                    [p.queryErrorRetry]: 'errors',
                    [p.pagerNext]: 'getMoreResults',
                    [p.pagerPrevious]: 'getMoreResults',
                    [p.pagerNumber]: 'getMoreResults',
                    [p.pagerResize]: 'getMoreResults',
                    [p.pagerScrolling]: 'getMoreResults',
                    [p.facetSearch]: 'facet',
                    [p.facetShowLess]: 'facet',
                    [p.facetShowMore]: 'facet',
                    [p.recommendation]: 'recommendation',
                    [p.likeSmartSnippet]: 'smartSnippet',
                    [p.dislikeSmartSnippet]: 'smartSnippet',
                    [p.expandSmartSnippet]: 'smartSnippet',
                    [p.collapseSmartSnippet]: 'smartSnippet',
                    [p.openSmartSnippetFeedbackModal]: 'smartSnippet',
                    [p.closeSmartSnippetFeedbackModal]: 'smartSnippet',
                    [p.sendSmartSnippetReason]: 'smartSnippet',
                    [p.expandSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [p.collapseSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [p.showMoreSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [p.showLessSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [p.clearRecentQueries]: 'recentQueries',
                    [p.recentResultClick]: 'recentlyClickedDocuments',
                    [p.clearRecentResults]: 'recentlyClickedDocuments',
                    [p.showLessFoldedResults]: 'folding',
                    [n2.expandToFullUI]: 'interface',
                    [n2.openUserActions]: 'User Actions',
                    [n2.showPrecedingSessions]: 'User Actions',
                    [n2.showFollowingSessions]: 'User Actions',
                    [n2.clickViewedDocument]: 'User Actions',
                    [n2.clickPageView]: 'User Actions',
                    [p.caseDetach]: 'case',
                    [p.likeGeneratedAnswer]: 'generatedAnswer',
                    [p.dislikeGeneratedAnswer]: 'generatedAnswer',
                    [p.openGeneratedAnswerSource]: 'generatedAnswer',
                    [p.generatedAnswerStreamEnd]: 'generatedAnswer',
                },
                n6 = class {
                    constructor() {
                        ((this.runtime = new nJ()), (this.currentVisitorId = ''));
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
                        return this.makeEvent(rG.search);
                    }
                    sendSearchEvent() {
                        return Promise.resolve();
                    }
                    makeClickEvent() {
                        return this.makeEvent(rG.click);
                    }
                    sendClickEvent() {
                        return Promise.resolve();
                    }
                    makeCustomEvent() {
                        return this.makeEvent(rG.custom);
                    }
                    sendCustomEvent() {
                        return Promise.resolve();
                    }
                    makeViewEvent() {
                        return this.makeEvent(rG.view);
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
                        return nn;
                    }
                },
                n8 = (e) => {
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
            function n9(e) {
                let t = 'string' == typeof e.partialQueries ? e.partialQueries : n8(e.partialQueries),
                    r = 'string' == typeof e.suggestions ? e.suggestions : n8(e.suggestions);
                return Object.assign(Object.assign({}, e), {partialQueries: t, suggestions: r});
            }
            var n7 = class {
                    constructor(e, t) {
                        ((this.opts = e), (this.provider = t));
                        let r = !1 === e.enableAnalytics || n1();
                        this.coveoAnalyticsClient = r ? new n6() : new n3(e);
                    }
                    disable() {
                        (this.coveoAnalyticsClient instanceof n3 && this.coveoAnalyticsClient.clear(),
                            (this.coveoAnalyticsClient = new n6()));
                    }
                    enable() {
                        this.coveoAnalyticsClient = new n3(this.opts);
                    }
                    makeInterfaceLoad() {
                        return this.makeSearchEvent(p.interfaceLoad);
                    }
                    logInterfaceLoad() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeInterfaceLoad()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecommendationInterfaceLoad() {
                        return this.makeSearchEvent(p.recommendationInterfaceLoad);
                    }
                    logRecommendationInterfaceLoad() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendationInterfaceLoad()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRecommendation() {
                        return this.makeCustomEvent(p.recommendation);
                    }
                    logRecommendation() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendation()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecommendationOpen(e, t) {
                        return this.makeClickEvent(p.recommendationOpen, e, t);
                    }
                    logRecommendationOpen(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendationOpen(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterClearAll(e) {
                        return this.makeSearchEvent(p.staticFilterClearAll, e);
                    }
                    logStaticFilterClearAll(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterClearAll(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterSelect(e) {
                        return this.makeSearchEvent(p.staticFilterSelect, e);
                    }
                    logStaticFilterSelect(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterSelect(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterDeselect(e) {
                        return this.makeSearchEvent(p.staticFilterDeselect, e);
                    }
                    logStaticFilterDeselect(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterDeselect(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeFetchMoreResults() {
                        return this.makeCustomEvent(p.pagerScrolling, {type: 'getMoreResults'});
                    }
                    logFetchMoreResults() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFetchMoreResults()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeInterfaceChange(e) {
                        return this.makeSearchEvent(p.interfaceChange, e);
                    }
                    logInterfaceChange(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeInterfaceChange(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDidYouMeanAutomatic() {
                        return this.makeSearchEvent(p.didyoumeanAutomatic);
                    }
                    logDidYouMeanAutomatic() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeDidYouMeanAutomatic()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDidYouMeanClick() {
                        return this.makeSearchEvent(p.didyoumeanClick);
                    }
                    logDidYouMeanClick() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeDidYouMeanClick()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeResultsSort(e) {
                        return this.makeSearchEvent(p.resultsSort, e);
                    }
                    logResultsSort(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeResultsSort(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxSubmit() {
                        return this.makeSearchEvent(p.searchboxSubmit);
                    }
                    logSearchboxSubmit() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxSubmit()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxClear() {
                        return this.makeSearchEvent(p.searchboxClear);
                    }
                    logSearchboxClear() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxClear()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxAsYouType() {
                        return this.makeSearchEvent(p.searchboxAsYouType);
                    }
                    logSearchboxAsYouType() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxAsYouType()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeBreadcrumbFacet(e) {
                        return this.makeSearchEvent(p.breadcrumbFacet, e);
                    }
                    logBreadcrumbFacet(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeBreadcrumbFacet(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeBreadcrumbResetAll() {
                        return this.makeSearchEvent(p.breadcrumbResetAll);
                    }
                    logBreadcrumbResetAll() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeBreadcrumbResetAll()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDocumentQuickview(e, t) {
                        return this.makeClickEvent(p.documentQuickview, e, t);
                    }
                    logDocumentQuickview(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeDocumentQuickview(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDocumentOpen(e, t) {
                        return this.makeClickEvent(p.documentOpen, e, t);
                    }
                    logDocumentOpen(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeDocumentOpen(e, t)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeOmniboxAnalytics(e) {
                        return this.makeSearchEvent(p.omniboxAnalytics, n9(e));
                    }
                    logOmniboxAnalytics(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeOmniboxAnalytics(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeOmniboxFromLink(e) {
                        return this.makeSearchEvent(p.omniboxFromLink, n9(e));
                    }
                    logOmniboxFromLink(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeOmniboxFromLink(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchFromLink() {
                        return this.makeSearchEvent(p.searchFromLink);
                    }
                    logSearchFromLink() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeSearchFromLink()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerNotify(e) {
                        return this.makeCustomEvent(p.triggerNotify, e);
                    }
                    logTriggerNotify(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerNotify(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerExecute(e) {
                        return this.makeCustomEvent(p.triggerExecute, e);
                    }
                    logTriggerExecute(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerExecute(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerQuery() {
                        return this.makeCustomEvent(
                            p.triggerQuery,
                            {query: this.provider.getSearchEventRequestPayload().queryText},
                            'queryPipelineTriggers',
                        );
                    }
                    logTriggerQuery() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerQuery()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeUndoTriggerQuery(e) {
                        return this.makeSearchEvent(p.undoTriggerQuery, e);
                    }
                    logUndoTriggerQuery(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeUndoTriggerQuery(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerRedirect(e) {
                        return this.makeCustomEvent(
                            p.triggerRedirect,
                            Object.assign(Object.assign({}, e), {
                                query: this.provider.getSearchEventRequestPayload().queryText,
                            }),
                        );
                    }
                    logTriggerRedirect(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerRedirect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerResize(e) {
                        return this.makeCustomEvent(p.pagerResize, e);
                    }
                    logPagerResize(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makePagerResize(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerNumber(e) {
                        return this.makeCustomEvent(p.pagerNumber, e);
                    }
                    logPagerNumber(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makePagerNumber(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerNext(e) {
                        return this.makeCustomEvent(p.pagerNext, e);
                    }
                    logPagerNext(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makePagerNext(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerPrevious(e) {
                        return this.makeCustomEvent(p.pagerPrevious, e);
                    }
                    logPagerPrevious(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makePagerPrevious(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerScrolling() {
                        return this.makeCustomEvent(p.pagerScrolling);
                    }
                    logPagerScrolling() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makePagerScrolling()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetClearAll(e) {
                        return this.makeSearchEvent(p.facetClearAll, e);
                    }
                    logFacetClearAll(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFacetClearAll(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSearch(e) {
                        return this.makeSearchEvent(p.facetSearch, e);
                    }
                    logFacetSearch(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSearch(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSelect(e) {
                        return this.makeSearchEvent(p.facetSelect, e);
                    }
                    logFacetSelect(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSelect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetDeselect(e) {
                        return this.makeSearchEvent(p.facetDeselect, e);
                    }
                    logFacetDeselect(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFacetDeselect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetExclude(e) {
                        return this.makeSearchEvent(p.facetExclude, e);
                    }
                    logFacetExclude(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFacetExclude(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetUnexclude(e) {
                        return this.makeSearchEvent(p.facetUnexclude, e);
                    }
                    logFacetUnexclude(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFacetUnexclude(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSelectAll(e) {
                        return this.makeSearchEvent(p.facetSelectAll, e);
                    }
                    logFacetSelectAll(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSelectAll(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetUpdateSort(e) {
                        return this.makeSearchEvent(p.facetUpdateSort, e);
                    }
                    logFacetUpdateSort(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFacetUpdateSort(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetShowMore(e) {
                        return this.makeCustomEvent(p.facetShowMore, e);
                    }
                    logFacetShowMore(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFacetShowMore(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetShowLess(e) {
                        return this.makeCustomEvent(p.facetShowLess, e);
                    }
                    logFacetShowLess(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeFacetShowLess(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryError(e) {
                        return this.makeCustomEvent(p.queryError, e);
                    }
                    logQueryError(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeQueryError(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorBack() {
                        return rM(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(p.queryErrorBack);
                            return {
                                description: e.description,
                                log: () =>
                                    rM(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(p.queryErrorBack)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorBack() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorBack()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorRetry() {
                        return rM(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(p.queryErrorRetry);
                            return {
                                description: e.description,
                                log: () =>
                                    rM(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(p.queryErrorRetry)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorRetry() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorRetry()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorClear() {
                        return rM(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(p.queryErrorClear);
                            return {
                                description: e.description,
                                log: () =>
                                    rM(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(p.queryErrorClear)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorClear() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorClear()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeLikeSmartSnippet() {
                        return this.makeCustomEvent(p.likeSmartSnippet);
                    }
                    logLikeSmartSnippet() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeLikeSmartSnippet()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDislikeSmartSnippet() {
                        return this.makeCustomEvent(p.dislikeSmartSnippet);
                    }
                    logDislikeSmartSnippet() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeDislikeSmartSnippet()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeExpandSmartSnippet() {
                        return this.makeCustomEvent(p.expandSmartSnippet);
                    }
                    logExpandSmartSnippet() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeExpandSmartSnippet()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeCollapseSmartSnippet() {
                        return this.makeCustomEvent(p.collapseSmartSnippet);
                    }
                    logCollapseSmartSnippet() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeCollapseSmartSnippet()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetFeedbackModal() {
                        return this.makeCustomEvent(p.openSmartSnippetFeedbackModal);
                    }
                    logOpenSmartSnippetFeedbackModal() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetFeedbackModal()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeCloseSmartSnippetFeedbackModal() {
                        return this.makeCustomEvent(p.closeSmartSnippetFeedbackModal);
                    }
                    logCloseSmartSnippetFeedbackModal() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeCloseSmartSnippetFeedbackModal()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeSmartSnippetFeedbackReason(e, t) {
                        return this.makeCustomEvent(p.sendSmartSnippetReason, {reason: e, details: t});
                    }
                    logSmartSnippetFeedbackReason(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeSmartSnippetFeedbackReason(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeExpandSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(
                            p.expandSmartSnippetSuggestion,
                            'documentId' in e ? e : {documentId: e},
                        );
                    }
                    logExpandSmartSnippetSuggestion(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeExpandSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeCollapseSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(
                            p.collapseSmartSnippetSuggestion,
                            'documentId' in e ? e : {documentId: e},
                        );
                    }
                    logCollapseSmartSnippetSuggestion(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeCollapseSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowMoreSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(p.showMoreSmartSnippetSuggestion, e);
                    }
                    logShowMoreSmartSnippetSuggestion(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeShowMoreSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowLessSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(p.showLessSmartSnippetSuggestion, e);
                    }
                    logShowLessSmartSnippetSuggestion(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeShowLessSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetSource(e, t) {
                        return this.makeClickEvent(p.openSmartSnippetSource, e, t);
                    }
                    logOpenSmartSnippetSource(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetSource(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetSuggestionSource(e, t) {
                        return this.makeClickEvent(
                            p.openSmartSnippetSuggestionSource,
                            e,
                            {contentIDKey: t.documentId.contentIdKey, contentIDValue: t.documentId.contentIdValue},
                            t,
                        );
                    }
                    makeCopyToClipboard(e, t) {
                        return this.makeClickEvent(p.copyToClipboard, e, t);
                    }
                    logCopyToClipboard(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeCopyToClipboard(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    logOpenSmartSnippetSuggestionSource(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetSuggestionSource(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetInlineLink(e, t) {
                        return this.makeClickEvent(
                            p.openSmartSnippetInlineLink,
                            e,
                            {contentIDKey: t.contentIDKey, contentIDValue: t.contentIDValue},
                            t,
                        );
                    }
                    logOpenSmartSnippetInlineLink(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetInlineLink(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetSuggestionInlineLink(e, t) {
                        return this.makeClickEvent(
                            p.openSmartSnippetSuggestionInlineLink,
                            e,
                            {contentIDKey: t.documentId.contentIdKey, contentIDValue: t.documentId.contentIdValue},
                            t,
                        );
                    }
                    logOpenSmartSnippetSuggestionInlineLink(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetSuggestionInlineLink(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRecentQueryClick() {
                        return this.makeSearchEvent(p.recentQueryClick);
                    }
                    logRecentQueryClick() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeRecentQueryClick()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeClearRecentQueries() {
                        return this.makeCustomEvent(p.clearRecentQueries);
                    }
                    logClearRecentQueries() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeClearRecentQueries()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecentResultClick(e, t) {
                        return this.makeCustomEvent(p.recentResultClick, {info: e, identifier: t});
                    }
                    logRecentResultClick(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeRecentResultClick(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeClearRecentResults() {
                        return this.makeCustomEvent(p.clearRecentResults);
                    }
                    logClearRecentResults() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeClearRecentResults()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeNoResultsBack() {
                        return this.makeSearchEvent(p.noResultsBack);
                    }
                    logNoResultsBack() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeNoResultsBack()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeShowMoreFoldedResults(e, t) {
                        return this.makeClickEvent(p.showMoreFoldedResults, e, t);
                    }
                    logShowMoreFoldedResults(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeShowMoreFoldedResults(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowLessFoldedResults() {
                        return this.makeCustomEvent(p.showLessFoldedResults);
                    }
                    logShowLessFoldedResults() {
                        return rM(this, void 0, void 0, function* () {
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
                    makeCustomEvent(e, t, r = n4[e]) {
                        return rM(this, void 0, void 0, function* () {
                            let n = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), t),
                                i = Object.assign(Object.assign({}, yield this.getBaseEventRequest(n)), {
                                    eventType: r,
                                    eventValue: e,
                                }),
                                a = yield this.coveoAnalyticsClient.makeCustomEvent(i);
                            return {
                                description: this.makeEventDescription(a, e),
                                log: ({searchUID: e}) => a.log({lastSearchQueryUid: e}),
                            };
                        });
                    }
                    logCustomEvent(e, t, r = n4[e]) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEvent(e, t, r)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeCustomEventWithType(e, t, r) {
                        return rM(this, void 0, void 0, function* () {
                            let n = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), r),
                                i = Object.assign(Object.assign({}, yield this.getBaseEventRequest(n)), {
                                    eventType: t,
                                    eventValue: e,
                                }),
                                a = yield this.coveoAnalyticsClient.makeCustomEvent(i);
                            return {
                                description: this.makeEventDescription(a, e),
                                log: ({searchUID: e}) => a.log({lastSearchQueryUid: e}),
                            };
                        });
                    }
                    logCustomEventWithType(e, t, r) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEventWithType(e, t, r)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    logSearchEvent(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeSearchEvent(e, t)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchEvent(e, t) {
                        return rM(this, void 0, void 0, function* () {
                            let r = yield this.getBaseSearchEventRequest(e, t),
                                n = yield this.coveoAnalyticsClient.makeSearchEvent(r);
                            return {
                                description: this.makeEventDescription(n, e),
                                log: ({searchUID: e}) => n.log({searchQueryUid: e}),
                            };
                        });
                    }
                    makeClickEvent(e, t, r, n) {
                        return rM(this, void 0, void 0, function* () {
                            let i = Object.assign(
                                    Object.assign(
                                        Object.assign({}, t),
                                        yield this.getBaseEventRequest(Object.assign(Object.assign({}, r), n)),
                                    ),
                                    {queryPipeline: this.provider.getPipeline(), actionCause: e},
                                ),
                                a = yield this.coveoAnalyticsClient.makeClickEvent(i);
                            return {
                                description: this.makeEventDescription(a, e),
                                log: ({searchUID: e}) => a.log({searchQueryUid: e}),
                            };
                        });
                    }
                    logClickEvent(e, t, r, n) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeClickEvent(e, t, r, n)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    getBaseSearchEventRequest(e, t) {
                        return rM(this, void 0, void 0, function* () {
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
                        return rM(this, void 0, void 0, function* () {
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
                        return this.coveoAnalyticsClient instanceof n3
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
                        return this.makeCustomEvent(p.likeGeneratedAnswer, e);
                    }
                    logLikeGeneratedAnswer(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeLikeGeneratedAnswer(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDislikeGeneratedAnswer(e) {
                        return this.makeCustomEvent(p.dislikeGeneratedAnswer, e);
                    }
                    logDislikeGeneratedAnswer(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeDislikeGeneratedAnswer(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenGeneratedAnswerSource(e) {
                        return this.makeCustomEvent(p.openGeneratedAnswerSource, e);
                    }
                    logOpenGeneratedAnswerSource(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeOpenGeneratedAnswerSource(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRetryGeneratedAnswer() {
                        return this.makeSearchEvent(p.retryGeneratedAnswer);
                    }
                    logRetryGeneratedAnswer() {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeRetryGeneratedAnswer()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeGeneratedAnswerStreamEnd(e) {
                        return this.makeCustomEvent(p.generatedAnswerStreamEnd, e);
                    }
                    logGeneratedAnswerStreamEnd(e) {
                        return rM(this, void 0, void 0, function* () {
                            return (yield this.makeGeneratedAnswerStreamEnd(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                },
                ie = Object.assign({}, {pageview: 'pageview', event: 'event'});
            (Object.keys(ie).map((e) => ie[e]),
                ((a = g || (g = {})).click = 'click'),
                (a.flowStart = 'flowStart'),
                ((o = m || (m = {})).enterInterface = 'ticket_create_start'),
                (o.fieldUpdate = 'ticket_field_update'),
                (o.fieldSuggestionClick = 'ticket_classification_click'),
                (o.suggestionClick = 'suggestion_click'),
                (o.suggestionRate = 'suggestion_rate'),
                (o.nextCaseStep = 'ticket_next_stage'),
                (o.caseCancelled = 'ticket_cancel'),
                (o.caseSolved = 'ticket_cancel'),
                (o.caseCreated = 'ticket_create'),
                ((s = v || (v = {})).quit = 'Quit'),
                (s.solved = 'Solved'));
            var it = (e) => new n3(e).getCurrentVisitorId(),
                ir = (e) => {
                    let t = new n3(e);
                    (t.clear(), t.deleteHttpOnlyVisitorId());
                },
                ii = new r1.HistoryStore();
            function ia() {
                return {desiredCount: 5, numberOfValues: 8, set: {}};
            }
            var io = (e, t) => {
                    var r;
                    return null == (r = e.categoryFacetSet[t]) ? void 0 : r.request;
                },
                is = (e, t) => {
                    let r = io(e, t);
                    return (function (e) {
                        if (!e) return {parents: [], values: []};
                        let t = [],
                            r = e;
                        for (; r.length && r[0].children.length; ) ((t = [...t, ...r]), (r = r[0].children));
                        let n = r.find((e) => 'selected' === e.state);
                        return (n && ((t = [...t, n]), (r = [])), {parents: t, values: r});
                    })(null == r ? void 0 : r.currentValues).parents;
                },
                iu = (e) => {
                    let t = [];
                    return (
                        id(e).forEach((r, n) => {
                            let i = iO(e, r.facetId),
                                a = ib(r, n + 1);
                            if (ic(r)) {
                                if (!is(e, r.facetId).length) return;
                                t.push({...a, ...iy(e, r.facetId), facetType: i, state: 'selected'});
                                return;
                            }
                            r.currentValues.forEach((e, n) => {
                                if ('idle' === e.state) return;
                                let o = ip(e, n + 1, i),
                                    s = il(r) ? im(e) : ig(e);
                                t.push({...a, ...o, ...s});
                            });
                        }),
                        ih(e).forEach((e, r) => {
                            let n = iS(e, r + 1);
                            e.values.forEach((e, r) => {
                                if ('idle' === e.state) return;
                                let i = ip(e, r + 1, 'specific'),
                                    a = im(e);
                                t.push({...n, ...i, ...a});
                            });
                        }),
                        t
                    );
                },
                il = (e) => 'specific' === e.type,
                ic = (e) => 'hierarchical' === e.type,
                id = (e) =>
                    [
                        ...Object.values(e.facetSet),
                        ...Object.values(e.categoryFacetSet),
                        ...Object.values(e.dateFacetSet),
                        ...Object.values(e.numericFacetSet),
                    ].map((e) => e.request),
                ih = (e) => [...Object.values(e.automaticFacetSet.set)].map((e) => e.response),
                ip = (e, t, r) => ({state: e.state, valuePosition: t, facetType: r}),
                ig = (e) => ({
                    displayValue: `${e.start}..${e.end}`,
                    value: `${e.start}..${e.end}`,
                    start: e.start,
                    end: e.end,
                    endInclusive: e.endInclusive,
                }),
                im = (e) => ({displayValue: e.value, value: e.value}),
                iv = (e, t) =>
                    is(e, t)
                        .map((e) => e.value)
                        .join(';'),
                iy = (e, t) => {
                    let r = iv(e, t);
                    return {value: r, valuePosition: 1, displayValue: r};
                },
                iS = (e, t) => ({title: iw(e.field, e.field), field: e.field, id: e.field, facetPosition: t}),
                ib = (e, t) => ({title: iw(e.field, e.facetId), field: e.field, id: e.facetId, facetPosition: t}),
                iw = (e, t) => `${e}_${t}`,
                ik = (e, t) => {
                    var r, n, i, a, o;
                    return (
                        (null == (r = e.facetSet[t]) ? void 0 : r.request) ||
                        (null == (n = e.categoryFacetSet[t]) ? void 0 : n.request) ||
                        (null == (i = e.dateFacetSet[t]) ? void 0 : i.request) ||
                        (null == (a = e.numericFacetSet[t]) ? void 0 : a.request) ||
                        (null == (o = e.automaticFacetSet.set[t]) ? void 0 : o.response)
                    );
                },
                iO = (e, t) => {
                    let r = ik(e, t);
                    return r ? r.type : 'specific';
                },
                iI = () => ({q: '', enableQuerySyntax: !1}),
                iC = () => 'default',
                iD = '2.27.0',
                iE = (e) => {
                    let t = e.configuration.search.locale.split('-')[0];
                    return t && 2 === t.length ? t : 'en';
                },
                iR = class {
                    constructor(e) {
                        ((this.getState = e), (this.state = e()));
                    }
                    getLanguage() {
                        return iE(this.state);
                    }
                    getBaseMetadata() {
                        let {context: e} = this.state,
                            t = (null == e ? void 0 : e.contextValues) || {},
                            r = {};
                        for (let [e, n] of Object.entries(t)) r[`context_${e}`] = n;
                        return ((r.coveoHeadlessVersion = iD), r);
                    }
                    getOriginContext() {
                        return this.state.configuration.analytics.originContext;
                    }
                    getOriginLevel1() {
                        return this.state.searchHub || iC();
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
                iq = class extends iR {
                    getFacetState() {
                        var e, t, r, n, i, a;
                        return iu({
                            facetSet: null != (t = (e = this.getState()).facetSet) ? t : {},
                            categoryFacetSet: null != (r = e.categoryFacetSet) ? r : {},
                            dateFacetSet: null != (n = e.dateFacetSet) ? n : {},
                            numericFacetSet: null != (i = e.numericFacetSet) ? i : {},
                            automaticFacetSet: null != (a = e.automaticFacetSet) ? a : ia(),
                        });
                    }
                    getPipeline() {
                        var e;
                        return (
                            this.state.pipeline ||
                            (null == (e = this.state.search) ? void 0 : e.response.pipeline) ||
                            iq.fallbackPipelineName
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
                            ey().response.searchUid
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
                                iq.fallbackPipelineName;
                        return t ? r : void 0;
                    }
                    getBaseMetadata() {
                        var e, t, r;
                        let n = this.getState(),
                            i = super.getBaseMetadata(),
                            a =
                                null ==
                                (r =
                                    null == (t = null == (e = n.search) ? void 0 : e.response)
                                        ? void 0
                                        : t.extendedResults)
                                    ? void 0
                                    : r.generativeQuestionAnsweringId;
                        return (a && (i.generativeQuestionAnsweringId = a), i);
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
                        return (null == (e = this.state.query) ? void 0 : e.q) || iI().q;
                    }
                    get responseTime() {
                        var e;
                        return (null == (e = this.state.search) ? void 0 : e.duration) || ey().duration;
                    }
                    get numberOfResults() {
                        var e;
                        return (
                            (null == (e = this.state.search) ? void 0 : e.response.totalCountFiltered) ||
                            ey().response.totalCountFiltered
                        );
                    }
                },
                iA = iq;
            iA.fallbackPipelineName = 'default';
            var ix = ({
                    logger: e,
                    getState: t,
                    analyticsClientMiddleware: r = (e, t) => t,
                    preprocessRequest: n,
                    provider: i = new iA(t),
                }) => {
                    let a = t(),
                        o = a.configuration.accessToken,
                        s = a.configuration.analytics.apiBaseUrl,
                        u = a.configuration.analytics.runtimeEnvironment,
                        l = a.configuration.analytics.enabled,
                        c = new n7(
                            {
                                token: o,
                                endpoint: s,
                                runtimeEnvironment: u,
                                preprocessRequest: n,
                                beforeSendHooks: [
                                    r,
                                    (t, r) => (e.info({...r, type: t, endpoint: s, token: o}, 'Analytics request'), r),
                                ],
                            },
                            i,
                        );
                    return (l || c.disable(), c);
                },
                iU = () => {
                    let e = ii
                        .getHistory()
                        .reverse()
                        .find((e) => 'PageView' === e.name && e.value);
                    return e ? e.value : '';
                },
                iP = async (e, t) => ({
                    analytics: {
                        clientId: await it(e),
                        clientTimestamp: new Date().toISOString(),
                        documentReferrer: e.originLevel3,
                        originContext: e.originContext,
                        ...(t && {actionCause: t.actionCause, customData: t.customData}),
                        ...(e.userDisplayName && {userDisplayName: e.userDisplayName}),
                        ...(e.documentLocation && {documentLocation: e.documentLocation}),
                        ...(e.deviceId && {deviceId: e.deviceId}),
                        ...(iU() && {pageId: iU()}),
                    },
                }),
                ij = () => ({
                    duration: 0,
                    error: null,
                    isLoading: !1,
                    id: 'Recommendation',
                    recommendations: [],
                    searchUid: '',
                    splitTestRun: '',
                    pipeline: '',
                }),
                iF = class extends iR {
                    getPipeline() {
                        var e;
                        return (
                            this.state.pipeline ||
                            (null == (e = this.state.recommendation) ? void 0 : e.pipeline) ||
                            'default'
                        );
                    }
                    getSearchEventRequestPayload() {
                        return {
                            queryText: iI().q,
                            responseTime: this.responseTime,
                            results: this.mapResultsToAnalyticsDocument(),
                            numberOfResults: this.numberOfResults,
                        };
                    }
                    getSearchUID() {
                        var e;
                        return (null == (e = this.getState().recommendation) ? void 0 : e.searchUid) || ij().searchUid;
                    }
                    getSplitTestRunName() {
                        var e;
                        return null == (e = this.state.recommendation) ? void 0 : e.splitTestRun;
                    }
                    getSplitTestRunVersion() {
                        var e;
                        let t = !!this.getSplitTestRunName(),
                            r =
                                (null == (e = this.state.recommendation) ? void 0 : e.pipeline) ||
                                this.state.pipeline ||
                                'default';
                        return t ? r : void 0;
                    }
                    get responseTime() {
                        var e;
                        return (null == (e = this.state.recommendation) ? void 0 : e.duration) || ij().duration;
                    }
                    mapResultsToAnalyticsDocument() {
                        var e;
                        return null == (e = this.state.recommendation)
                            ? void 0
                            : e.recommendations.map((e) => ({documentUri: e.uri, documentUriHash: e.raw.urihash}));
                    }
                    get numberOfResults() {
                        var e;
                        return (
                            (null == (e = this.state.recommendation) ? void 0 : e.recommendations.length) ||
                            ij().recommendations.length
                        );
                    }
                },
                iT = () => ({
                    url: '',
                    clientId: '',
                    additionalFields: [],
                    advancedParameters: {debug: !1},
                    products: [],
                    facets: {results: []},
                    error: null,
                    isLoading: !1,
                    responseId: '',
                }),
                iM = class extends iR {
                    constructor() {
                        (super(...arguments), (this.initialState = iT()));
                    }
                    getPipeline() {
                        return '';
                    }
                    getSearchEventRequestPayload() {
                        return {
                            queryText: '',
                            responseTime: 0,
                            results: this.mapResultsToAnalyticsDocument(),
                            numberOfResults: this.numberOfResults,
                        };
                    }
                    getSearchUID() {
                        var e;
                        return (
                            (null == (e = this.getState().productListing) ? void 0 : e.responseId) ||
                            this.initialState.responseId
                        );
                    }
                    mapResultsToAnalyticsDocument() {
                        var e;
                        return null == (e = this.state.productListing)
                            ? void 0
                            : e.products.map((e) => ({
                                  documentUri: e.documentUri,
                                  documentUriHash: e.documentUriHash,
                                  permanentid: e.permanentid,
                              }));
                    }
                    get numberOfResults() {
                        return this.state.productListing.products.length;
                    }
                },
                i$ = ({
                    logger: e,
                    getState: t,
                    analyticsClientMiddleware: r = (e, t) => t,
                    preprocessRequest: n,
                    provider: i = new iM(t),
                }) => {
                    let a = t(),
                        o = a.configuration.accessToken,
                        s = a.configuration.analytics.apiBaseUrl,
                        u = a.configuration.analytics.runtimeEnvironment,
                        l = a.configuration.analytics.enabled,
                        c = new n7(
                            {
                                token: o,
                                endpoint: s,
                                runtimeEnvironment: u,
                                preprocessRequest: n,
                                beforeSendHooks: [
                                    r,
                                    (t, r) => (e.info({...r, type: t, endpoint: s, token: o}, 'Analytics request'), r),
                                ],
                            },
                            i,
                        );
                    return (l || c.disable(), c);
                },
                iL =
                    (((u = iL || {})[(u.Search = 0)] = 'Search'),
                    (u[(u.Custom = 1)] = 'Custom'),
                    (u[(u.Click = 2)] = 'Click'),
                    u);
            function i_(e, t) {
                let r = (t) => Object.assign(rn(e, t), {instantlyCallable: !0}),
                    n = r(async (e, {getState: r, extra: n}) => {
                        let {analyticsClientMiddleware: i, preprocessRequest: a, logger: o} = n;
                        return await (
                            await t({getState: r, analyticsClientMiddleware: i, preprocessRequest: a, logger: o})
                        ).log({state: r(), extra: n});
                    });
                return (
                    Object.assign(n, {
                        prepare: async ({
                            getState: e,
                            analyticsClientMiddleware: n,
                            preprocessRequest: i,
                            logger: a,
                        }) => {
                            let {description: o, log: s} = await t({
                                getState: e,
                                analyticsClientMiddleware: n,
                                preprocessRequest: i,
                                logger: a,
                            });
                            return {
                                description: o,
                                action: r(async (e, {getState: t, extra: r}) => await s({state: t(), extra: r})),
                            };
                        },
                    }),
                    n
                );
            }
            var iV = (e, t, r, n = (e) => new iA(e)) =>
                    i_(e, async ({getState: e, analyticsClientMiddleware: i, preprocessRequest: a, logger: o}) => {
                        let s = ix({
                                getState: e,
                                logger: o,
                                analyticsClientMiddleware: i,
                                preprocessRequest: a,
                                provider: n(e),
                            }),
                            u = await r(s, e());
                        return {
                            description: null == u ? void 0 : u.description,
                            log: async ({state: e}) => {
                                let r = await (null == u ? void 0 : u.log({searchUID: n(() => e).getSearchUID()}));
                                return (
                                    o.info({client: s.coveoAnalyticsClient, response: r}, 'Analytics response'),
                                    {analyticsType: t}
                                );
                            },
                        };
                    }),
                iN = (e, t) => {
                    var r;
                    let n, i, a;
                    let o =
                        (null == (r = t.recommendation)
                            ? void 0
                            : r.recommendations.findIndex(({uniqueId: t}) => e.uniqueId === t)) || 0;
                    return {
                        collectionName: 'string' == typeof (n = e.raw.collection) ? n : 'default',
                        documentAuthor: et((i = e.raw.author)) ? 'unknown' : Array.isArray(i) ? i.join(';') : `${i}`,
                        documentPosition: o + 1,
                        documentTitle: e.title,
                        documentUri: e.uri,
                        documentUriHash: e.raw.urihash,
                        documentUrl: e.clickUri,
                        rankingModifier: e.rankingModifier || '',
                        sourceName: et((a = e.raw.source)) ? 'unknown' : a,
                        queryPipeline: t.pipeline || rj(),
                    };
                },
                iz = (e) => (
                    e.raw.permanentid ||
                        console.warn(
                            'Missing field permanentid on result. This might cause many issues with your Coveo deployment. See https://docs.coveo.com/en/1913 and https://docs.coveo.com/en/1640 for more information.',
                            e,
                        ),
                    {contentIDKey: 'permanentid', contentIDValue: e.raw.permanentid || ''}
                ),
                iQ = {urihash: new es(), sourcetype: new es(), permanentid: new es()},
                iH = {
                    uniqueId: ro,
                    raw: new el({values: iQ}),
                    title: ro,
                    uri: ro,
                    clickUri: ro,
                    rankingModifier: new es({required: !1, emptyAllowed: !0}),
                },
                iY = (e) => {
                    var t;
                    return new Z(iH).validate(
                        Object.assign({}, ...Object.keys(iH).map((t) => ({[t]: e[t]})), {
                            raw: ((t = e.raw), Object.assign({}, ...Object.keys(iQ).map((e) => ({[e]: t[e]})))),
                        }),
                    );
                },
                iB = (e, t, r, n = (e) => new iM(e)) =>
                    i_(e, async ({getState: e, analyticsClientMiddleware: i, preprocessRequest: a, logger: o}) => {
                        let s = i$({
                                getState: e,
                                logger: o,
                                analyticsClientMiddleware: i,
                                preprocessRequest: a,
                                provider: n(e),
                            }),
                            u = await r(s, e());
                        return {
                            description: null == u ? void 0 : u.description,
                            log: async ({state: e}) => {
                                let r = await (null == u ? void 0 : u.log({searchUID: n(() => e).getSearchUID()}));
                                return (
                                    o.info({client: s.coveoAnalyticsClient, response: r}, 'Analytics response'),
                                    {analyticsType: t}
                                );
                            },
                        };
                    }),
                iW = () =>
                    iV(
                        'analytics/recommendation/update',
                        iL.Search,
                        (e) => e.makeRecommendationInterfaceLoad(),
                        (e) => new iF(e),
                    ),
                iG = (e) =>
                    iV(
                        'analytics/recommendation/open',
                        iL.Click,
                        (t, r) => (iY(e), t.makeRecommendationOpen(iN(e, r), iz(e))),
                        (e) => new iF(e),
                    ),
                iK = t6('recommendation/set', (e) => rd(e, {id: ro})),
                iJ = rn('recommendation/get', async (e, {getState: t, rejectWithValue: r, extra: {apiClient: n}}) => {
                    let i = t(),
                        a = new Date().getTime(),
                        o = await n.recommendations(await iZ(i)),
                        s = new Date().getTime() - a;
                    return eQ(o)
                        ? r(o.error)
                        : {
                              recommendations: o.success.results,
                              analyticsAction: iW(),
                              duration: s,
                              searchUid: o.success.searchUid,
                              splitTestRun: o.success.splitTestRun,
                              pipeline: o.success.pipeline,
                          };
                }),
                iZ = async (e) => ({
                    accessToken: e.configuration.accessToken,
                    organizationId: e.configuration.organizationId,
                    url: e.configuration.search.apiBaseUrl,
                    recommendation: e.recommendation.id,
                    tab: e.configuration.analytics.originLevel2,
                    referrer: e.configuration.analytics.originLevel3,
                    timezone: e.configuration.search.timezone,
                    locale: e.configuration.search.locale,
                    actionsHistory: e.configuration.analytics.enabled ? ii.getHistory() : [],
                    ...(e.advancedSearchQueries && {aq: e.advancedSearchQueries.aq, cq: e.advancedSearchQueries.cq}),
                    ...(e.pipeline && {pipeline: e.pipeline}),
                    ...(e.searchHub && {searchHub: e.searchHub}),
                    ...(e.context && {context: e.context.contextValues}),
                    ...(e.dictionaryFieldContext && {dictionaryFieldContext: e.dictionaryFieldContext.contextValues}),
                    ...(e.fields && {fieldsToInclude: e.fields.fieldsToInclude}),
                    ...(e.configuration.analytics.enabled && {visitorId: await it(e.configuration.analytics)}),
                    ...(e.configuration.analytics.enabled && (await iP(e.configuration.analytics))),
                    ...(e.configuration.search.authenticationProviders.length && {
                        authentication: e.configuration.search.authenticationProviders.join(','),
                    }),
                    ...(e.pagination && {numberOfResults: e.pagination.numberOfResults}),
                }),
                iX = t8(ij(), (e) => {
                    e.addCase(iK, (e, t) => {
                        e.id = t.payload.id;
                    })
                        .addCase(iJ.rejected, (e, t) => {
                            ((e.error = t.payload ? t.payload : null), (e.isLoading = !1));
                        })
                        .addCase(iJ.fulfilled, (e, t) => {
                            ((e.error = null),
                                (e.recommendations = t.payload.recommendations),
                                (e.duration = t.payload.duration),
                                (e.isLoading = !1),
                                (e.searchUid = t.payload.searchUid),
                                (e.splitTestRun = t.payload.splitTestRun),
                                (e.pipeline = t.payload.pipeline));
                        })
                        .addCase(iJ.pending, (e) => {
                            e.isLoading = !0;
                        });
                }),
                i0 = t6('searchHub/set', (e) => rd(e, new es({required: !0, emptyAllowed: !0}))),
                i1 = t8(iC(), (e) => {
                    e.addCase(i0, (e, t) => t.payload)
                        .addCase(rP.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.searchHub) ? n : e;
                        })
                        .addCase(rv, (e, t) => t.payload.searchHub || e);
                }),
                i2 = t8(iD, (e) => e),
                i5 = (e) => (t) => (r) => {
                    var n, i;
                    let a = null == (n = r.payload) ? void 0 : n.analyticsAction;
                    void 0 !== a && (null == (i = r.payload) || delete i.analyticsAction);
                    let o = t(r);
                    return (
                        'search/executeSearch/fullfilled' === r.type &&
                            void 0 === a &&
                            console.error('No analytics action associated with search:', r),
                        'recommendation/get/fullfilled' === r.type &&
                            void 0 === a &&
                            console.error('No analytics action associated with recommendation:', r),
                        'productRecommendations/get/fullfilled' === r.type &&
                            void 0 === a &&
                            console.error('No analytics action associated with product recommendation:', r),
                        void 0 !== a && e.dispatch(a),
                        o
                    );
                };
            t6('tab/register', (e) => rd(e, new el({values: {id: ro, expression: ru}})));
            var i3 = t6('tab/updateActiveTab', (e) => rd(e, ro)),
                i4 = q(Q()),
                i6 = q(H()),
                i8 = q(Y());
            (i4.default.extend(i8.default), i4.default.extend(i6.default));
            var i9 = '/rest/search/v2',
                i7 = '/rest/ua',
                ae = t8(
                    {
                        organizationId: '',
                        accessToken: '',
                        platformUrl: eU(),
                        search: {
                            apiBaseUrl: `${eU()}${i9}`,
                            locale: 'en-US',
                            timezone: i4.default.tz.guess(),
                            authenticationProviders: [],
                        },
                        analytics: {
                            enabled: !0,
                            apiBaseUrl: `${eA('analytics', void 0)}${i7}`,
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
                            .addCase(rm, (e, t) => {
                                (t.payload.accessToken && (e.accessToken = t.payload.accessToken),
                                    t.payload.organizationId && (e.organizationId = t.payload.organizationId),
                                    t.payload.platformUrl &&
                                        ((e.platformUrl = t.payload.platformUrl),
                                        (e.search.apiBaseUrl = `${t.payload.platformUrl}${i9}`),
                                        (e.analytics.apiBaseUrl = (function (e, t) {
                                            if (eT(e)) return e.replace(/^(https:\/\/)platform/, '$1analytics') + i7;
                                            let r = eM(e, t);
                                            return r ? ex(t, r.environment).analytics : e;
                                        })(t.payload.platformUrl, e.organizationId))));
                            })
                            .addCase(rv, (e, t) => {
                                (t.payload.apiBaseUrl && (e.search.apiBaseUrl = t.payload.apiBaseUrl),
                                    t.payload.locale && (e.search.locale = t.payload.locale),
                                    t.payload.timezone && (e.search.timezone = t.payload.timezone),
                                    t.payload.authenticationProviders &&
                                        (e.search.authenticationProviders = t.payload.authenticationProviders));
                            })
                            .addCase(ry, (e, t) => {
                                (et(t.payload.enabled) ||
                                    (!t.payload.enabled && e.analytics.enabled && ir(e.analytics),
                                    (e.analytics.enabled = t.payload.enabled)),
                                    et(t.payload.originContext) ||
                                        (e.analytics.originContext = t.payload.originContext),
                                    et(t.payload.originLevel2) || (e.analytics.originLevel2 = t.payload.originLevel2),
                                    et(t.payload.originLevel3) || (e.analytics.originLevel3 = t.payload.originLevel3),
                                    et(t.payload.apiBaseUrl) || (e.analytics.apiBaseUrl = t.payload.apiBaseUrl),
                                    et(t.payload.runtimeEnvironment) ||
                                        (e.analytics.runtimeEnvironment = t.payload.runtimeEnvironment),
                                    et(t.payload.anonymous) || (e.analytics.anonymous = t.payload.anonymous),
                                    et(t.payload.deviceId) || (e.analytics.deviceId = t.payload.deviceId),
                                    et(t.payload.userDisplayName) ||
                                        (e.analytics.userDisplayName = t.payload.userDisplayName),
                                    et(t.payload.documentLocation) ||
                                        (e.analytics.documentLocation = t.payload.documentLocation));
                            })
                            .addCase(rS, (e) => {
                                ((e.analytics.enabled = !1), ir(e.analytics));
                            })
                            .addCase(rb, (e) => {
                                e.analytics.enabled = !0;
                            })
                            .addCase(rw, (e, t) => {
                                e.analytics.originLevel2 = t.payload.originLevel2;
                            })
                            .addCase(rk, (e, t) => {
                                e.analytics.originLevel3 = t.payload.originLevel3;
                            })
                            .addCase(i3, (e, t) => {
                                e.analytics.originLevel2 = t.payload;
                            })
                            .addCase(rI, (e, t) => {
                                e.analytics.originLevel2 = t.payload.tab || e.analytics.originLevel2;
                            }),
                ),
                at = () => (e) => (t) => e(t.instantlyCallable ? t() : t),
                ar = (e) => () => (t) => (r) => {
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
                an = (e) => (t) => (r) => (n) => (
                    e.debug({action: n, nextState: t.getState()}, `Action dispatched: ${n.type}`),
                    r(n)
                );
            function ai(e, t, r) {
                (void 0 === t && (t = 50), void 0 === r && (r = {}));
                var n,
                    i,
                    a,
                    o = null != (n = r.isImmediate) && n,
                    s = null != (i = r.callback) && i,
                    u = r.maxWait,
                    l = Date.now(),
                    c = [],
                    d = function () {
                        var r = [].slice.call(arguments),
                            n = this;
                        return new Promise(function (i, d) {
                            var h = o && void 0 === a;
                            if (
                                (void 0 !== a && clearTimeout(a),
                                (a = setTimeout(
                                    function () {
                                        if (((a = void 0), (l = Date.now()), !o)) {
                                            var t = e.apply(n, r);
                                            (s && s(t),
                                                c.forEach(function (e) {
                                                    return (0, e.resolve)(t);
                                                }),
                                                (c = []));
                                        }
                                    },
                                    (function () {
                                        if (void 0 !== u) {
                                            var e = Date.now() - l;
                                            if (e + t >= u) return u - e;
                                        }
                                        return t;
                                    })(),
                                )),
                                h)
                            ) {
                                var f = e.apply(n, r);
                                return (s && s(f), i(f));
                            }
                            c.push({resolve: i, reject: d});
                        });
                    };
                return (
                    (d.cancel = function (e) {
                        (void 0 !== a && clearTimeout(a),
                            c.forEach(function (t) {
                                return (0, t.reject)(e);
                            }),
                            (c = []));
                    }),
                    d
                );
            }
            async function aa(e) {
                try {
                    return await e();
                } catch (e) {
                    return '';
                }
            }
            var ao = {configuration: ae, version: i2},
                as = q(W()),
                au = {
                    organizationId: ro,
                    accessToken: ro,
                    platformUrl: new es({required: !1, emptyAllowed: !1}),
                    name: new es({required: !1, emptyAllowed: !1}),
                    analytics: new el({
                        options: {required: !1},
                        values: {
                            enabled: new ei({required: !1}),
                            originContext: new es({required: !1}),
                            originLevel2: new es({required: !1}),
                            originLevel3: new es({required: !1}),
                        },
                    }),
                },
                al = new Z({
                    ...au,
                    pipeline: new es({required: !1, emptyAllowed: !0}),
                    searchHub: rs,
                    locale: rs,
                    timezone: rs,
                }),
                ac = {debug: rR, pipeline: rF, searchHub: i1, recommendation: iX};
            function ad(e) {
                var t, r, n;
                let i =
                    ((t = e.loggerOptions),
                    (0, as.default)({
                        name: '@coveo/headless',
                        level: (null == t ? void 0 : t.level) || 'warn',
                        formatters: {log: null == t ? void 0 : t.logFormatter},
                        browser: {transmit: {send: (null == t ? void 0 : t.browserPostLogHook) || (() => {})}},
                    }));
                !(function (e, t) {
                    try {
                        al.validate(e);
                    } catch (e) {
                        throw (t.error(e, 'Recommendation engine configuration error'), e);
                    }
                })(e.configuration, i);
                let a =
                        ((n = e.configuration),
                        new eN({
                            logger: i,
                            preprocessRequest: n.preprocessRequest || em,
                            postprocessSearchResponseMiddleware: eY,
                            postprocessFacetSearchResponseMiddleware: eB,
                            postprocessQuerySuggestResponseMiddleware: eW,
                        })),
                    o = {
                        analyticsClientMiddleware: (function (e) {
                            let {analytics: t} = e;
                            return (null == t ? void 0 : t.analyticsClientMiddleware) || ((e, t) => t);
                        })((r = e.configuration)),
                        validatePayload: rc,
                        preprocessRequest: r.preprocessRequest || em,
                        logger: i,
                        apiClient: a,
                    },
                    s = (function (e, t) {
                        var r, n;
                        let i = (function (e, t) {
                                var r, n, i;
                                let a, o, s;
                                let {reducers: u} = e,
                                    l =
                                        ((n = {...ao, ...u}),
                                        (i = null != (r = e.preloadedState) ? r : {}),
                                        (a = {...n}),
                                        (s = (e) => (t, r) => {
                                            let n = e(t, r);
                                            return o ? o(n, r) : n;
                                        }),
                                        {
                                            get combinedReducer() {
                                                return s(
                                                    t_({
                                                        ...(function (e) {
                                                            let t = {};
                                                            for (let [r, n] of e) t[r] = n;
                                                            return t;
                                                        })(
                                                            Object.entries(i)
                                                                .filter(([e]) => !(e in a))
                                                                .map(([e, t]) => [e, () => t]),
                                                        ),
                                                        ...a,
                                                    }),
                                                );
                                            },
                                            containsAll: (e) => Object.keys(e).every((e) => e in a),
                                            add(e) {
                                                Object.keys(e)
                                                    .filter((e) => !(e in a))
                                                    .forEach((t) => (a[t] = e[t]));
                                            },
                                            addCrossReducer(e) {
                                                o = e;
                                            },
                                        });
                                e.crossReducer && l.addCrossReducer(e.crossReducer);
                                let c = t.logger,
                                    d = (function (e, t, r) {
                                        let {preloadedState: n, configuration: i} = e,
                                            a = i.name || 'coveo-headless',
                                            o = (function (e, t) {
                                                let r, n;
                                                let {renewAccessToken: i} = e.configuration;
                                                return [
                                                    at,
                                                    ((r = 0),
                                                    (n = ai(() => (r = 0), 500)),
                                                    (e) => (a) => async (o) => {
                                                        var s;
                                                        if ('function' != typeof o) return a(o);
                                                        let u = await a(o);
                                                        if (
                                                            (null == (s = null == u ? void 0 : u.error)
                                                                ? void 0
                                                                : s.name) !== new eD().name
                                                        )
                                                            return u;
                                                        if ('function' != typeof i)
                                                            return (
                                                                t.warn(
                                                                    'Unable to renew the expired token because a renew function was not provided. Please specify the #renewAccessToken option when initializing the engine.',
                                                                ),
                                                                u
                                                            );
                                                        if (r >= 5)
                                                            return (
                                                                t.warn(
                                                                    'Attempted to renew the token but was not successful. Please check the #renewAccessToken function.',
                                                                ),
                                                                u
                                                            );
                                                        (r++, n());
                                                        let l = await aa(i);
                                                        (e.dispatch(rm({accessToken: l})), e.dispatch(o));
                                                    }),
                                                    ar(t),
                                                    i5,
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
                                                            (i = new t3()),
                                                            n &&
                                                                ('boolean' == typeof n
                                                                    ? i.push(tQ)
                                                                    : i.push(tQ.withExtraArgument(n.extraArgument))),
                                                            i
                                                        );
                                                    },
                                                    n = e || {},
                                                    i = n.reducer,
                                                    a = void 0 === i ? void 0 : i,
                                                    o = n.middleware,
                                                    s = void 0 === o ? r() : o,
                                                    u = n.devTools,
                                                    l = void 0 === u || u,
                                                    c = n.preloadedState,
                                                    d = void 0 === c ? void 0 : c,
                                                    h = n.enhancers,
                                                    f = void 0 === h ? void 0 : h;
                                                if ('function' == typeof a) t = a;
                                                else if (
                                                    (function (e) {
                                                        if ('object' != typeof e || null === e) return !1;
                                                        var t = Object.getPrototypeOf(e);
                                                        if (null === t) return !0;
                                                        for (var r = t; null !== Object.getPrototypeOf(r); )
                                                            r = Object.getPrototypeOf(r);
                                                        return t === r;
                                                    })(a)
                                                )
                                                    t = t_(a);
                                                else
                                                    throw Error(
                                                        '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
                                                    );
                                                var p = s;
                                                'function' == typeof p && (p = p(r));
                                                var g = tN.apply(void 0, p),
                                                    m = tV;
                                                l && (m = t5(t1({trace: !1}, 'object' == typeof l && l)));
                                                var v = [g];
                                                return (
                                                    Array.isArray(f)
                                                        ? (v = tB([g], f))
                                                        : 'function' == typeof f && (v = f(v)),
                                                    (function e(t, r, n) {
                                                        if (
                                                            ('function' == typeof r && 'function' == typeof n) ||
                                                            ('function' == typeof n &&
                                                                'function' == typeof arguments[3])
                                                        )
                                                            throw Error(tT(0));
                                                        if (
                                                            ('function' == typeof r &&
                                                                void 0 === n &&
                                                                ((n = r), (r = void 0)),
                                                            void 0 !== n)
                                                        ) {
                                                            if ('function' != typeof n) throw Error(tT(1));
                                                            return n(e)(t, r);
                                                        }
                                                        if ('function' != typeof t) throw Error(tT(2));
                                                        var i,
                                                            a = t,
                                                            o = r,
                                                            s = [],
                                                            u = s,
                                                            l = !1;
                                                        function c() {
                                                            u === s && (u = s.slice());
                                                        }
                                                        function d() {
                                                            if (l) throw Error(tT(3));
                                                            return o;
                                                        }
                                                        function h(e) {
                                                            if ('function' != typeof e) throw Error(tT(4));
                                                            if (l) throw Error(tT(5));
                                                            var t = !0;
                                                            return (
                                                                c(),
                                                                u.push(e),
                                                                function () {
                                                                    if (t) {
                                                                        if (l) throw Error(tT(6));
                                                                        ((t = !1), c());
                                                                        var r = u.indexOf(e);
                                                                        (u.splice(r, 1), (s = null));
                                                                    }
                                                                }
                                                            );
                                                        }
                                                        function f(e) {
                                                            if (
                                                                !(function (e) {
                                                                    if ('object' != typeof e || null === e) return !1;
                                                                    for (var t = e; null !== Object.getPrototypeOf(t); )
                                                                        t = Object.getPrototypeOf(t);
                                                                    return Object.getPrototypeOf(e) === t;
                                                                })(e)
                                                            )
                                                                throw Error(tT(7));
                                                            if (void 0 === e.type) throw Error(tT(8));
                                                            if (l) throw Error(tT(9));
                                                            try {
                                                                ((l = !0), (o = a(o, e)));
                                                            } finally {
                                                                l = !1;
                                                            }
                                                            for (var t = (s = u), r = 0; r < t.length; r++) (0, t[r])();
                                                            return e;
                                                        }
                                                        return (
                                                            f({type: tL.INIT}),
                                                            ((i = {
                                                                dispatch: f,
                                                                subscribe: h,
                                                                getState: d,
                                                                replaceReducer: function (e) {
                                                                    if ('function' != typeof e) throw Error(tT(10));
                                                                    ((a = e), f({type: tL.REPLACE}));
                                                                },
                                                            })[tM] = function () {
                                                                var e;
                                                                return (
                                                                    ((e = {
                                                                        subscribe: function (e) {
                                                                            if ('object' != typeof e || null === e)
                                                                                throw Error(tT(11));
                                                                            function t() {
                                                                                e.next && e.next(d());
                                                                            }
                                                                            return (t(), {unsubscribe: h(t)});
                                                                        },
                                                                    })[tM] = function () {
                                                                        return this;
                                                                    }),
                                                                    e
                                                                );
                                                            }),
                                                            i
                                                        );
                                                    })(t, d, m.apply(void 0, v))
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
                                                    an(n.logger),
                                                ],
                                            });
                                        })({
                                            preloadedState: n,
                                            reducer: r.combinedReducer,
                                            middlewares: o,
                                            thunkExtraArguments: t,
                                            name: a,
                                        });
                                    })(e, t, l);
                                return {
                                    addReducers(e) {
                                        l.containsAll(e) || (l.add(e), d.replaceReducer(l.combinedReducer));
                                    },
                                    dispatch: d.dispatch,
                                    subscribe: d.subscribe,
                                    enableAnalytics() {
                                        d.dispatch(rb());
                                    },
                                    disableAnalytics() {
                                        d.dispatch(rS());
                                    },
                                    get state() {
                                        return d.getState();
                                    },
                                    logger: c,
                                    store: d,
                                };
                            })(e, t),
                            {accessToken: a, organizationId: o} = e.configuration,
                            {organizationEndpoints: s} = e.configuration,
                            u = (null == s ? void 0 : s.platform) || e.configuration.platformUrl;
                        ((!et(e.configuration.platformUrl) ||
                            et(null == (n = e.configuration.organizationEndpoints) ? void 0 : n.platform)) &&
                            i.logger.warn(
                                `The \`platformUrl\` (${e.configuration.platformUrl}) option will be deprecated in the next major version. Consider using the \`organizationEndpoints\` option instead. See [Organization endpoints](https://docs.coveo.com/en/mcc80216).`,
                            ),
                            ee(e.configuration.organizationEndpoints)
                                ? i.logger.warn(
                                      'The `organizationEndpoints` options was not explicitly set in the Headless engine configuration. Coveo recommends setting this option, as it has resiliency benefits and simplifies the overall configuration for multi-region deployments. See [Organization endpoints](https://docs.coveo.com/en/mcc80216).',
                                  )
                                : (function (e) {
                                      let {platform: t} = e.configuration.organizationEndpoints;
                                      if (ee(t)) return !1;
                                      let r = e$(t);
                                      return r && r.organizationId !== e.configuration.organizationId;
                                  })(e) &&
                                  i.logger.warn(
                                      `There is a mismatch between the \`organizationId\` option (${e.configuration.organizationId}) and the organization configured in the \`organizationEndpoints\` option (${null == (r = e.configuration.organizationEndpoints) ? void 0 : r.platform}). This could lead to issues that are complex to troubleshoot. Please make sure both values match.`,
                                  ),
                            i.dispatch(rm({accessToken: a, organizationId: o, platformUrl: u})));
                        let l = (function (e, t) {
                            var r, n;
                            let i =
                                    (null == (r = e.configuration.organizationEndpoints) ? void 0 : r.analytics) ||
                                    void 0,
                                {analyticsClientMiddleware: a, ...o} = null != (n = e.configuration.analytics) ? n : {},
                                s = {...o, apiBaseUrl: i};
                            return ef()
                                ? (t.info('Analytics disabled since doNotTrack is active.'), {...s, enabled: !1})
                                : s;
                        })(e, i.logger);
                        return (l && i.dispatch(ry(l)), i);
                    })({...e, reducers: ac}, o),
                    {pipeline: u, searchHub: l, timezone: c, locale: d} = e.configuration;
                return (
                    s.dispatch(rv({timezone: c, locale: d})),
                    et(u) || s.dispatch(rq(u)),
                    et(l) || s.dispatch(i0(l)),
                    {
                        ...s,
                        get state() {
                            return s.state;
                        },
                    }
                );
            }
            function ah(e) {
                return (
                    e.addReducers({configuration: ae}),
                    {
                        disableAnalytics: rS,
                        enableAnalytics: rb,
                        setOriginLevel2: rw,
                        setOriginLevel3: rk,
                        updateAnalyticsConfiguration: ry,
                        updateBasicConfiguration: rm,
                    }
                );
            }
            function af(e) {
                return (
                    e.addReducers({configuration: ae, pipeline: rF, searchHub: i1}),
                    {updateSearchConfiguration: rv}
                );
            }
            var ap = () => new es({required: !1, emptyAllowed: !0}),
                ag = t6('advancedSearchQueries/update', (e) => rd(e, {aq: ap(), cq: ap(), lq: ap(), dq: ap()})),
                am = t6('advancedSearchQueries/register', (e) => rd(e, {aq: ap(), cq: ap(), lq: ap(), dq: ap()})),
                av = () => ({
                    cq: '',
                    cqWasSet: !1,
                    aq: '',
                    aqWasSet: !1,
                    lq: '',
                    lqWasSet: !1,
                    dq: '',
                    dqWasSet: !1,
                    defaultFilters: {cq: '', aq: '', lq: '', dq: ''},
                });
            t8(av(), (e) => {
                e.addCase(ag, (e, t) => {
                    let {aq: r, cq: n, lq: i, dq: a} = t.payload;
                    (ee(r) || ((e.aq = r), (e.aqWasSet = !0)),
                        ee(n) || ((e.cq = n), (e.cqWasSet = !0)),
                        ee(i) || ((e.lq = i), (e.lqWasSet = !0)),
                        ee(a) || ((e.dq = a), (e.dqWasSet = !0)));
                })
                    .addCase(am, (e, t) => {
                        let {aq: r, cq: n, lq: i, dq: a} = t.payload;
                        (ee(r) || ((e.defaultFilters.aq = r), e.aqWasSet || (e.aq = r)),
                            ee(n) || ((e.defaultFilters.cq = n), e.cqWasSet || (e.cq = n)),
                            ee(i) || ((e.defaultFilters.lq = i), e.lqWasSet || (e.lq = i)),
                            ee(a) || ((e.defaultFilters.dq = a), e.dqWasSet || (e.dq = a)));
                    })
                    .addCase(rP.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.advancedSearchQueries) ? n : e;
                    })
                    .addCase(rI, (e, t) => {
                        let {aq: r, cq: n} = t.payload;
                        (ee(r) || ((e.aq = r), (e.aqWasSet = !0)), ee(n) || ((e.cq = n), (e.cqWasSet = !0)));
                    });
            });
            var ay = new ed({each: ro, required: !0}),
                aS = (e, t) => (rd(e, ro), eu(t) ? rd(t, ro) : rd(t, ay), {payload: {contextKey: e, contextValue: t}}),
                ab = t6('context/set', (e) => {
                    for (let [t, r] of Object.entries(e)) aS(t, r);
                    return {payload: e};
                }),
                aw = t6('context/add', (e) => aS(e.contextKey, e.contextValue)),
                ak = t6('context/remove', (e) => rd(e, ro));
            function aO() {
                return {contextValues: {}};
            }
            t8(aO(), (e) => {
                e.addCase(ab, (e, t) => {
                    e.contextValues = t.payload;
                })
                    .addCase(aw, (e, t) => {
                        e.contextValues[t.payload.contextKey] = t.payload.contextValue;
                    })
                    .addCase(ak, (e, t) => {
                        delete e.contextValues[t.payload];
                    })
                    .addCase(rP.fulfilled, (e, t) => {
                        t.payload && (e.contextValues = t.payload.context.contextValues);
                    });
            });
            var aI = t6('dictionaryFieldContext/set', (e) => {
                    let t = rd(e, new el({options: {required: !0}})).error;
                    if (t) return {payload: e, error: t};
                    let r = rd(Object.values(e), new ed({each: ru})).error;
                    return r ? {payload: e, error: r} : {payload: e};
                }),
                aC = t6('dictionaryFieldContext/add', (e) =>
                    rd(e, new el({options: {required: !0}, values: {field: ru, key: ru}})),
                ),
                aD = t6('dictionaryFieldContext/remove', (e) => rd(e, ru));
            function aE() {
                return {contextValues: {}};
            }
            t8(aE(), (e) => {
                e.addCase(aI, (e, t) => {
                    e.contextValues = t.payload;
                })
                    .addCase(aC, (e, t) => {
                        let {field: r, key: n} = t.payload;
                        e.contextValues[r] = n;
                    })
                    .addCase(aD, (e, t) => {
                        delete e.contextValues[t.payload];
                    })
                    .addCase(rP.fulfilled, (e, t) => {
                        t.payload && (e.contextValues = t.payload.dictionaryFieldContext.contextValues);
                    });
            });
            var aR = async (e, t) => {
                    var r, n, i, a;
                    return {
                        accessToken: e.configuration.accessToken,
                        organizationId: e.configuration.organizationId,
                        url: e.configuration.search.apiBaseUrl,
                        locale: e.configuration.search.locale,
                        debug: e.debug,
                        tab: e.configuration.analytics.originLevel2,
                        referrer: e.configuration.analytics.originLevel3,
                        timezone: e.configuration.search.timezone,
                        ...(e.configuration.analytics.enabled && {
                            visitorId: await it(e.configuration.analytics),
                            actionsHistory: ii.getHistory(),
                        }),
                        ...((null == (r = e.advancedSearchQueries) ? void 0 : r.aq) && {
                            aq: e.advancedSearchQueries.aq,
                        }),
                        ...((null == (n = e.advancedSearchQueries) ? void 0 : n.cq) && {
                            cq: e.advancedSearchQueries.cq,
                        }),
                        ...((null == (i = e.advancedSearchQueries) ? void 0 : i.lq) && {
                            lq: e.advancedSearchQueries.lq,
                        }),
                        ...((null == (a = e.advancedSearchQueries) ? void 0 : a.dq) && {
                            dq: e.advancedSearchQueries.dq,
                        }),
                        ...(e.context && {context: e.context.contextValues}),
                        ...(e.fields && !e.fields.fetchAllFields && {fieldsToInclude: e.fields.fieldsToInclude}),
                        ...(e.dictionaryFieldContext && {
                            dictionaryFieldContext: e.dictionaryFieldContext.contextValues,
                        }),
                        ...(e.pipeline && {pipeline: e.pipeline}),
                        ...(e.query && {q: e.query.q, enableQuerySyntax: e.query.enableQuerySyntax}),
                        ...(e.searchHub && {searchHub: e.searchHub}),
                        ...(e.sortCriteria && {sortCriteria: e.sortCriteria}),
                        ...(e.configuration.analytics.enabled && (await iP(e.configuration.analytics, t))),
                        ...(e.excerptLength && !et(e.excerptLength.length) && {excerptLength: e.excerptLength.length}),
                        ...(e.configuration.search.authenticationProviders.length && {
                            authentication: e.configuration.search.authenticationProviders.join(','),
                        }),
                    };
                },
                aq = {
                    collectionField: new es({emptyAllowed: !1, required: !1}),
                    parentField: new es({emptyAllowed: !1, required: !1}),
                    childField: new es({emptyAllowed: !1, required: !1}),
                    numberOfFoldedResults: new er({min: 0, required: !1}),
                },
                aA = t6('folding/register', (e) => rd(e, aq));
            rn('folding/loadCollection', async (e, {getState: t, rejectWithValue: r, extra: {apiClient: n}}) => {
                let i = t(),
                    a = await aR(i),
                    o = await n.search(
                        {
                            ...a,
                            q:
                                '' === i.query.q
                                    ? ''
                                    : i.query.enableQuerySyntax
                                      ? `${i.query.q} OR @uri`
                                      : `( <@- ${i.query.q} -@> ) OR @uri`,
                            enableQuerySyntax: !0,
                            cq: `@${i.folding.fields.collection}="${e}"`,
                            filterField: i.folding.fields.collection,
                            childField: i.folding.fields.parent,
                            parentField: i.folding.fields.child,
                            filterFieldRange: 100,
                        },
                        {origin: 'foldingCollection'},
                    );
                return eQ(o)
                    ? r(o.error)
                    : {collectionId: e, results: o.success.results, rootResult: i.folding.collections[e].result};
            });
            var ax = () => ({
                    enabled: !1,
                    fields: {collection: 'foldingcollection', parent: 'foldingparent', child: 'foldingchild'},
                    filterFieldRange: 2,
                    collections: {},
                }),
                aU = new ed({each: ro, required: !0}),
                aP = t6('fields/registerFieldsToInclude', (e) => rd(e, aU)),
                aj = t6('fields/fetchall/enable'),
                aF = t6('fields/fetchall/disable'),
                aT = rn('fields/fetchDescription', async (e, {extra: t, getState: r, rejectWithValue: n}) => {
                    let i = r(),
                        {accessToken: a, organizationId: o} = i.configuration,
                        {apiBaseUrl: s} = i.configuration.search,
                        u = await t.apiClient.fieldDescriptions({accessToken: a, organizationId: o, url: s});
                    return eQ(u) ? n(u.error) : u.success.fields;
                }),
                aM = ['author', 'language', 'urihash', 'objecttype', 'collection', 'source', 'permanentid'],
                a$ = [
                    ...aM,
                    'date',
                    'filetype',
                    'parents',
                    'ec_price',
                    'ec_name',
                    'ec_description',
                    'ec_brand',
                    'ec_category',
                    'ec_item_group_id',
                    'ec_shortdesc',
                    'ec_thumbnails',
                    'ec_images',
                    'ec_promo_price',
                    'ec_in_stock',
                    'ec_rating',
                ],
                aL = t8({fieldsToInclude: aM, fetchAllFields: !1, fieldsDescription: []}, (e) =>
                    e
                        .addCase(aP, (e, t) => {
                            e.fieldsToInclude = [...new Set(e.fieldsToInclude.concat(t.payload))];
                        })
                        .addCase(aj, (e) => {
                            e.fetchAllFields = !0;
                        })
                        .addCase(aF, (e) => {
                            e.fetchAllFields = !1;
                        })
                        .addCase(aT.fulfilled, (e, {payload: t}) => {
                            e.fieldsDescription = t;
                        })
                        .addCase(aA, (e, {payload: t}) => {
                            var r, n, i;
                            let a = ax().fields;
                            e.fieldsToInclude.push(
                                null != (r = t.collectionField) ? r : a.collection,
                                null != (n = t.parentField) ? n : a.parent,
                                null != (i = t.childField) ? i : a.child,
                            );
                        }),
                );
            function a_(e) {
                return (
                    e.addReducers({fields: aL}),
                    {
                        registerFieldsToInclude: aP,
                        enableFetchAllFields: aj,
                        disableFetchAllFields: aF,
                        fetchFieldsDescription: aT,
                    }
                );
            }
            function aV(e) {
                return (e.addReducers({recommendation: iX}), {getRecommendations: iJ, setRecommendationId: iK});
            }
            var aN = t6('breadcrumb/deselectAll'),
                az = t6('breadcrumb/deselectAllNonBreadcrumbs'),
                aQ = {value: ro, numberOfResults: new er({min: 0}), state: ro},
                aH = new er({min: 1, default: 8, required: !1}),
                aY = {desiredCount: new er({min: 1, max: 10, default: 5, required: !1}), numberOfValues: aH};
            (t6('automaticFacet/setOptions', (e) => rd(e, aY)), t6('automaticFacet/deselectAll', (e) => rd(e, ro)));
            var aB = t6('automaticFacet/toggleSelectValue', (e) => rd(e, {field: ro, selection: new el({values: aQ})})),
                aW = {
                    state: new X({required: !0}),
                    numberOfResults: new er({required: !0, min: 0}),
                    value: new es({required: !0, emptyAllowed: !0}),
                    path: new ed({required: !0, each: ro}),
                    moreValuesAvailable: new ei({required: !1}),
                },
                aG = {
                    facetId: ro,
                    field: ro,
                    delimitingCharacter: new es({required: !1, emptyAllowed: !0}),
                    filterFacetCount: new ei({required: !1}),
                    injectionDepth: new er({required: !1, min: 0}),
                    numberOfValues: new er({required: !1, min: 1}),
                    sortCriteria: new X({required: !1}),
                    basePath: new ed({required: !1, each: ro}),
                    filterByBasePath: new ei({required: !1}),
                };
            t6('categoryFacet/register', (e) => rd(e, aG));
            var aK = t6('categoryFacet/toggleSelectValue', (e) => {
                    try {
                        return (
                            rc(e.facetId, ro),
                            (function e(t) {
                                (t.children.forEach((t) => {
                                    e(t);
                                }),
                                    rc(
                                        {
                                            state: t.state,
                                            numberOfResults: t.numberOfResults,
                                            value: t.value,
                                            path: t.path,
                                            moreValuesAvailable: t.moreValuesAvailable,
                                        },
                                        aW,
                                    ));
                            })(e.selection),
                            {payload: e, error: null}
                        );
                    } catch (t) {
                        return {payload: e, error: rl(t)};
                    }
                }),
                aJ = t6('categoryFacet/deselectAll', (e) => rd(e, aG.facetId));
            (t6('categoryFacet/updateNumberOfValues', (e) =>
                rd(e, {facetId: aG.facetId, numberOfValues: aG.numberOfValues}),
            ),
                t6('categoryFacet/updateSortCriterion', (e) => rd(e, {facetId: aG.facetId, criterion: new X()})),
                t6('categoryFacet/updateBasePath', (e) => rd(e, {facetId: aG.facetId, basePath: new ed({each: ro})})));
            var aZ = {
                    facetId: ro,
                    captions: new el({options: {required: !1}}),
                    numberOfValues: new er({required: !1, min: 1}),
                    query: new es({required: !1, emptyAllowed: !0}),
                },
                aX = {
                    path: new ed({required: !0, each: ro}),
                    displayValue: ru,
                    rawValue: ru,
                    count: new er({required: !0, min: 0}),
                },
                a0 = t6('categoryFacet/selectSearchResult', (e) => rd(e, {facetId: ro, value: new el({values: aX})}));
            t6('categoryFacetSearch/register', (e) => rd(e, aZ));
            var a1 = {
                facetId: ro,
                value: new el({values: {displayValue: ru, rawValue: ru, count: new er({required: !0, min: 0})}}),
            };
            (t6('facetSearch/register', (e) => rd(e, aZ)), t6('facetSearch/update', (e) => rd(e, aZ)));
            var a2 = t6('facetSearch/toggleSelectValue', (e) => rd(e, a1));
            t6('facetSearch/toggleExcludeValue', (e) => rd(e, a1));
            var a5 = q(Q()),
                a3 = q(G());
            a5.default.extend(a3.default);
            var a4 = 'YYYY/MM/DD@HH:mm:ss';
            function a6(e, t) {
                let r = (0, a5.default)(e, t);
                return r.isValid() || t ? r : (0, a5.default)(e, a4);
            }
            function a8(e) {
                if (e.isBefore('1401-01-01'))
                    throw Error(`Date is before year 1401, which is unsupported by the API: ${e}`);
            }
            var a9 = q(Q()),
                a7 = q(K());
            a9.default.extend(a7.default);
            var oe = ['past', 'now', 'next'],
                ot = ['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'],
                or = (e) => {
                    let t = 'now' === e;
                    return {
                        amount: new er({required: !t, min: 1}),
                        unit: new es({required: !t, constrainTo: ot}),
                        period: new es({required: !0, constrainTo: oe}),
                    };
                };
            function on(e) {
                if ('string' == typeof e && !os(e))
                    throw Error(`The value "${e}" is not respecting the relative date format "period-amount-unit"`);
                let t = 'string' == typeof e ? ou(e) : e;
                new Z(or(t.period)).validate(t);
                let r = oi(t),
                    n = JSON.stringify(t);
                if (!r.isValid()) throw Error(`Date is invalid: ${n}`);
                a8(r);
            }
            function oi(e) {
                let {period: t, amount: r, unit: n} = e;
                switch (t) {
                    case 'past':
                        return (0, a9.default)().subtract(r, n);
                    case 'next':
                        return (0, a9.default)().add(r, n);
                    case 'now':
                        return (0, a9.default)();
                }
            }
            function oa(e) {
                return oi(ou(e)).format(a4);
            }
            function oo(e) {
                return e.toLocaleLowerCase().split('-');
            }
            function os(e) {
                let [t, r, n] = oo(e);
                if ('now' === t) return !0;
                if (!oe.includes(t) || !ot.includes(n)) return !1;
                let i = parseInt(r);
                return !(isNaN(i) || i <= 0);
            }
            function ou(e) {
                let [t, r, n] = oo(e);
                return 'now' === t ? {period: 'now'} : {period: t, amount: r ? parseInt(r) : void 0, unit: n || void 0};
            }
            function ol(e, t) {
                let {dateFormat: r} = t;
                return e && 'object' == typeof e && 'period' in e
                    ? (on(e),
                      (function (e) {
                          let {period: t, amount: r, unit: n} = e;
                          switch (t) {
                              case 'past':
                              case 'next':
                                  return `${t}-${r}-${n}`;
                              case 'now':
                                  return t;
                          }
                      })(e))
                    : 'string' == typeof e && os(e)
                      ? (on(e), e)
                      : ((function (e, t) {
                            let r = a6(e, t);
                            if (!r.isValid())
                                throw Error(
                                    `Could not parse the provided date "${e}"${t ? ` with the format "${t}""` : '. Please provide a date format string in the configuration options. See https://day.js.org/docs/en/parse/string-format for more information.'}`,
                                );
                            a8(r);
                        })(e, r),
                        a6(e, r).format(a4));
            }
            var oc = new el({
                    options: {required: !1},
                    values: {
                        type: new es({constrainTo: ['simple'], emptyAllowed: !1, required: !0}),
                        values: new ed({required: !0, max: 25, each: new es({emptyAllowed: !1, required: !0})}),
                    },
                }),
                od = new ed({min: 1, max: 25, required: !1, each: new es({emptyAllowed: !1, required: !0})}),
                oh = {
                    facetId: ro,
                    field: new es({required: !0, emptyAllowed: !0}),
                    filterFacetCount: new ei({required: !1}),
                    injectionDepth: new er({required: !1, min: 0}),
                    numberOfValues: new er({required: !1, min: 1}),
                    sortCriteria: new X({required: !1}),
                    allowedValues: oc,
                    customSort: od,
                };
            t6('facet/register', (e) => rd(e, oh));
            var of = t6('facet/toggleSelectValue', (e) => rd(e, {facetId: ro, selection: new el({values: aQ})}));
            t6('facet/toggleExcludeValue', (e) => rd(e, {facetId: ro, selection: new el({values: aQ})}));
            var op = t6('facet/deselectAll', (e) => rd(e, ro));
            (t6('facet/updateSortCriterion', (e) => rd(e, {facetId: ro, criterion: new X({required: !0})})),
                t6('facet/updateNumberOfValues', (e) =>
                    rd(e, {facetId: ro, numberOfValues: new er({required: !0, min: 1})}),
                ),
                t6('facet/updateIsFieldExpanded', (e) => rd(e, {facetId: ro, isFieldExpanded: new ei({required: !0})})),
                t6('facet/updateFreezeCurrentValues', (e) =>
                    rd(e, {facetId: ro, freezeCurrentValues: new ei({required: !0})}),
                ),
                t6('rangeFacet/updateSortCriterion', (e) => rd(e, {facetId: ro, criterion: new X({required: !0})})));
            var og = {
                    state: ro,
                    start: new er({required: !0}),
                    end: new er({required: !0}),
                    endInclusive: new ei({required: !0}),
                    numberOfResults: new er({required: !0, min: 0}),
                },
                om = {
                    start: ro,
                    end: ro,
                    endInclusive: new ei({required: !0}),
                    state: ro,
                    numberOfResults: new er({required: !0, min: 0}),
                },
                ov = {start: ro, end: ro, endInclusive: new ei({required: !0}), state: ro},
                oy = {
                    facetId: ro,
                    field: ro,
                    currentValues: new ed({required: !1, each: new el({values: ov})}),
                    generateAutomaticRanges: new ei({required: !0}),
                    filterFacetCount: new ei({required: !1}),
                    injectionDepth: new er({required: !1, min: 0}),
                    numberOfValues: new er({required: !1, min: 1}),
                    sortCriteria: new X({required: !1}),
                    rangeAlgorithm: new X({required: !1}),
                };
            function oS(e) {
                e.currentValues &&
                    e.currentValues.forEach((e) => {
                        var t, r;
                        let {start: n, end: i} = {
                            start: ol(e.start, e),
                            end: ol(e.end, e),
                            endInclusive: null != (t = e.endInclusive) && t,
                            state: null != (r = e.state) ? r : 'idle',
                        };
                        if (a6(os(n) ? oa(n) : n).isAfter(a6(os(i) ? oa(i) : i)))
                            throw Error(
                                `The start value is greater than the end value for the date range ${e.start} to ${e.end}`,
                            );
                    });
            }
            t6('dateFacet/register', (e) => {
                try {
                    return (rc(e, oy), oS(e), {payload: e, error: null});
                } catch (t) {
                    return {payload: e, error: rl(t)};
                }
            });
            var ob = t6('dateFacet/toggleSelectValue', (e) => rd(e, {facetId: ro, selection: new el({values: om})}));
            t6('dateFacet/toggleExcludeValue', (e) => rd(e, {facetId: ro, selection: new el({values: om})}));
            var ow = t6('dateFacet/updateFacetValues', (e) => {
                    try {
                        return (
                            rc(e, {facetId: ro, values: new ed({each: new el({values: om})})}),
                            oS({currentValues: e.values}),
                            {payload: e, error: null}
                        );
                    } catch (t) {
                        return {payload: e, error: rl(t)};
                    }
                }),
                ok = {
                    state: ro,
                    start: new er({required: !0}),
                    end: new er({required: !0}),
                    endInclusive: new ei({required: !0}),
                },
                oO = {
                    facetId: ro,
                    field: ro,
                    currentValues: new ed({required: !1, each: new el({values: ok})}),
                    generateAutomaticRanges: new ei({required: !0}),
                    filterFacetCount: new ei({required: !1}),
                    injectionDepth: new er({required: !1, min: 0}),
                    numberOfValues: new er({required: !1, min: 1}),
                    sortCriteria: new X({required: !1}),
                    rangeAlgorithm: new X({required: !1}),
                };
            function oI(e) {
                e.currentValues &&
                    e.currentValues.forEach(({start: e, end: t}) => {
                        if (e > t)
                            throw Error(
                                `The start value is greater than the end value for the numeric range ${e} to ${t}`,
                            );
                    });
            }
            t6('numericFacet/register', (e) => {
                try {
                    return (rd(e, oO), oI(e), {payload: e, error: null});
                } catch (t) {
                    return {payload: e, error: rl(t)};
                }
            });
            var oC = t6('numericFacet/toggleSelectValue', (e) => rd(e, {facetId: ro, selection: new el({values: og})}));
            t6('numericFacet/toggleExcludeValue', (e) => rd(e, {facetId: ro, selection: new el({values: og})}));
            var oD = t6('numericFacet/updateFacetValues', (e) => {
                try {
                    return (
                        rc(e, {facetId: ro, values: new ed({each: new el({values: og})})}),
                        oI({currentValues: e.values}),
                        {payload: e, error: null}
                    );
                } catch (t) {
                    return {payload: e, error: rl(t)};
                }
            });
            function oE(e, t) {
                let r = {};
                e.forEach((e) => (r[e.facetId] = e));
                let n = [];
                return (
                    t.forEach((e) => {
                        e in r && (n.push(r[e]), delete r[e]);
                    }),
                    [...n, ...Object.values(r)]
                );
            }
            function oR(e) {
                return Object.values(e).map((e) => e.request);
            }
            var oq = () => iV('search/logFetchMoreResults', iL.Search, (e) => e.makeFetchMoreResults()),
                oA = (e) =>
                    iV('search/queryError', iL.Search, (t, r) => {
                        var n, i, a, o;
                        return t.makeQueryError({
                            query: (null == (n = r.query) ? void 0 : n.q) || iI().q,
                            aq: (null == (i = r.advancedSearchQueries) ? void 0 : i.aq) || av().aq,
                            cq: (null == (a = r.advancedSearchQueries) ? void 0 : a.cq) || av().cq,
                            dq: (null == (o = r.advancedSearchQueries) ? void 0 : o.dq) || av().dq,
                            errorType: e.type,
                            errorMessage: e.message,
                        });
                    }),
                ox = (((l = ox || {}).Relevance = 'relevance'), (l.Fields = 'fields'), l),
                oU = (((c = oU || {}).Ascending = 'asc'), (c.Descending = 'desc'), c),
                oP = () =>
                    iB(
                        'analytics/productListing/load',
                        iL.Search,
                        (e) => e.makeInterfaceLoad(),
                        (e) => new iM(e),
                    );
            (t6('productlisting/setUrl', (e) => rd(e, {url: new es({required: !0, url: !0})})),
                t6('productlisting/setAdditionalFields', (e) =>
                    rd(e, {additionalFields: new ed({required: !0, each: new es({required: !0, emptyAllowed: !1})})}),
                ));
            var oj = rn('productlisting/fetch', async (e, {getState: t, dispatch: r, rejectWithValue: n, extra: i}) => {
                    let a = t(),
                        {apiClient: o} = i,
                        s = await o.getProducts(await oF(a));
                    return eQ(s) ? (r(oA(s.error)), n(s.error)) : {response: s.success, analyticsAction: oP()};
                }),
                oF = async (e) => {
                    var t, r, n, i, a, o, s, u;
                    let l = oE(
                            [
                                ...oR(null != (a = e.facetSet) ? a : {}),
                                ...oR(null != (o = e.numericFacetSet) ? o : {}),
                                ...oR(null != (s = e.dateFacetSet) ? s : {}),
                                ...oR(null != (u = e.categoryFacetSet) ? u : {}),
                            ],
                            null != (i = e.facetOrder) ? i : [],
                        ),
                        c = await it(e.configuration.analytics);
                    return {
                        accessToken: e.configuration.accessToken,
                        organizationId: e.configuration.organizationId,
                        platformUrl: e.configuration.platformUrl,
                        url: null == (t = e.productListing) ? void 0 : t.url,
                        ...(e.configuration.analytics.enabled && c ? {clientId: c} : {}),
                        ...((null == (r = e.productListing.additionalFields) ? void 0 : r.length)
                            ? {additionalFields: e.productListing.additionalFields}
                            : {}),
                        ...(e.productListing.advancedParameters && e.productListing.advancedParameters.debug
                            ? {advancedParameters: e.productListing.advancedParameters || {}}
                            : {}),
                        ...(l.length && {facets: {requests: l}}),
                        ...(e.pagination && {
                            pagination: {
                                numberOfValues: e.pagination.numberOfResults,
                                page: Math.ceil(e.pagination.firstResult / (e.pagination.numberOfResults || 1)) + 1,
                            },
                        }),
                        ...(((null == (n = e.sort) ? void 0 : n.by) || ox.Relevance) !== ox.Relevance && {
                            sort: e.sort,
                        }),
                        ...(e.context && {userContext: e.context.contextValues}),
                    };
                },
                oT = t6('facet/updateFacetAutoSelection', (e) => rd(e, {allow: new ei({required: !0})})),
                oM = class extends iA {
                    constructor(e) {
                        (super(e), (this.getState = e));
                    }
                    get activeInstantResultQuery() {
                        let e = this.getState().instantResults;
                        for (let t in e) for (let r in e[t].cache) if (e[t].cache[r].isActive) return e[t].q;
                        return null;
                    }
                    get activeInstantResultCache() {
                        let e = this.getState().instantResults;
                        for (let t in e) for (let r in e[t].cache) if (e[t].cache[r].isActive) return e[t].cache[r];
                        return null;
                    }
                    get results() {
                        var e;
                        return null == (e = this.activeInstantResultCache) ? void 0 : e.results;
                    }
                    get queryText() {
                        var e;
                        return null != (e = this.activeInstantResultQuery) ? e : iI().q;
                    }
                    get responseTime() {
                        var e, t;
                        return null != (t = null == (e = this.activeInstantResultCache) ? void 0 : e.duration)
                            ? t
                            : ey().duration;
                    }
                    get numberOfResults() {
                        var e, t;
                        return null != (t = null == (e = this.activeInstantResultCache) ? void 0 : e.totalCountFiltered)
                            ? t
                            : ey().response.totalCountFiltered;
                    }
                    getSearchUID() {
                        var e;
                        return (
                            (null == (e = this.activeInstantResultCache) ? void 0 : e.searchUid) || super.getSearchUID()
                        );
                    }
                },
                o$ = () =>
                    iV(
                        'analytics/instantResult/searchboxAsYouType',
                        iL.Search,
                        (e) => e.makeSearchboxAsYouType(),
                        (e) => new oM(e),
                    ),
                oL = {id: ro},
                o_ = {...oL, q: ru};
            t6('instantResults/register', (e) => rd(e, oL));
            var oV = t6('instantResults/updateQuery', (e) => rd(e, o_));
            t6('instantResults/clearExpired', (e) => rd(e, oL));
            var oN = new er({required: !0, min: 0}),
                oz = t6('pagination/registerNumberOfResults', (e) => rd(e, oN)),
                oQ = t6('pagination/updateNumberOfResults', (e) => rd(e, oN)),
                oH = t6('pagination/registerPage', (e) => rd(e, oN)),
                oY = t6('pagination/updatePage', (e) => rd(e, oN)),
                oB = t6('pagination/nextPage'),
                oW = t6('pagination/previousPage'),
                oG = t6('query/updateQuery', (e) => rd(e, {q: new es(), enableQuerySyntax: new ei()}));
            (t6('didYouMean/enable'), t6('didYouMean/disable'));
            var oK = t6('didYouMean/correction', (e) => rd(e, ro)),
                oJ = () => iV('analytics/didyoumean/automatic', iL.Search, (e) => e.makeDidYouMeanAutomatic());
            function oZ() {
                return {firstResult: 0, defaultNumberOfResults: 10, numberOfResults: 10, totalCountFiltered: 0};
            }
            var oX = (((d = oX || {}).Ascending = 'ascending'), (d.Descending = 'descending'), d),
                o0 =
                    (((h = o0 || {}).Relevancy = 'relevancy'),
                    (h.QRE = 'qre'),
                    (h.Date = 'date'),
                    (h.Field = 'field'),
                    (h.NoSort = 'nosort'),
                    h),
                o1 = (e) => {
                    if (Array.isArray(e)) return e.map((e) => o1(e)).join(',');
                    switch (e.by) {
                        case 'relevancy':
                        case 'qre':
                        case 'nosort':
                            return e.by;
                        case 'date':
                            return `date ${e.order}`;
                        case 'field':
                            return `@${e.field} ${e.order}`;
                        default:
                            return '';
                    }
                },
                o2 = () => ({by: 'relevancy'});
            function o5(e) {
                var t, r, n;
                return {
                    context: e.context || aO(),
                    dictionaryFieldContext: e.dictionaryFieldContext || aE(),
                    facetSet: e.facetSet || {},
                    numericFacetSet: e.numericFacetSet || {},
                    dateFacetSet: e.dateFacetSet || {},
                    categoryFacetSet: e.categoryFacetSet || {},
                    automaticFacetSet: null != (t = e.automaticFacetSet) ? t : ia(),
                    pagination: e.pagination || oZ(),
                    query: e.query || iI(),
                    tabSet: e.tabSet || {},
                    advancedSearchQueries: e.advancedSearchQueries || av(),
                    staticFilterSet: e.staticFilterSet || {},
                    querySet: e.querySet || {},
                    instantResults: e.instantResults || {},
                    sortCriteria: e.sortCriteria || o1(o2()),
                    pipeline: e.pipeline || rj(),
                    searchHub: e.searchHub || iC(),
                    facetOptions: e.facetOptions || {freezeFacetOrder: !1, facets: {}},
                    facetOrder: null != (r = e.facetOrder) ? r : [],
                    debug: null != (n = e.debug) ? n : rE(),
                };
            }
            var o3 = () =>
                    iV('analytics/trigger/query', iL.Search, (e, t) => {
                        var r;
                        return (null == (r = t.triggers) ? void 0 : r.queryModification.newQuery)
                            ? e.makeTriggerQuery()
                            : null;
                    }),
                o4 = t6('trigger/query/ignore', (e) => rd(e, new es({emptyAllowed: !0, required: !0}))),
                o6 = t6('trigger/query/modification', (e) =>
                    rd(e, new el({values: {originalQuery: rs, modification: rs}})),
                ),
                o8 = () => ({dateFacetValueMap: {}});
            function o9(e) {
                var t;
                let r = o8();
                return {
                    request: {
                        ...e,
                        facets:
                            null == (t = e.facets)
                                ? void 0
                                : t.map((e) =>
                                      (function (e, t) {
                                          if ('dateRange' === e.type) {
                                              let {facetId: r, currentValues: n} = e;
                                              return (
                                                  (t.dateFacetValueMap[r] = {}),
                                                  {
                                                      ...e,
                                                      currentValues: n.map((e) => {
                                                          let n, i;
                                                          return (
                                                              (n = e.start),
                                                              (i = e.end),
                                                              os(n) &&
                                                                  ((n = oa(n)),
                                                                  (t.dateFacetValueMap[r][`start${n}`] = e.start)),
                                                              os(i) &&
                                                                  ((i = oa(i)),
                                                                  (t.dateFacetValueMap[r][`end${i}`] = e.end)),
                                                              {...e, start: n, end: i}
                                                          );
                                                      }),
                                                  }
                                              );
                                          }
                                          return e;
                                      })(e, r),
                                  ),
                    },
                    mappings: r,
                };
            }
            var o7 = async (e, t) => {
                var r, n, i, a, o, s, u, l;
                let c, d;
                let h = [
                        (null == (n = e.advancedSearchQueries) ? void 0 : n.cq.trim()) || '',
                        (null == (c = Object.values(e.tabSet || {}).find((e) => e.isActive))
                            ? void 0
                            : c.expression.trim()) || '',
                        ...Object.values(e.staticFilterSet || {}).map((e) => {
                            let t = e.values.filter((e) => 'selected' === e.state && !!e.expression.trim()),
                                r = t.map((e) => e.expression).join(' OR ');
                            return t.length > 1 ? `(${r})` : r;
                        }),
                    ]
                        .filter((e) => !!e)
                        .join(' AND '),
                    f = oE(
                        [
                            ...oR(null != (a = e.facetSet) ? a : {}).map((e) =>
                                'alphanumericDescending' === e.sortCriteria
                                    ? {...e, sortCriteria: {type: 'alphanumeric', order: 'descending'}}
                                    : e,
                            ),
                            ...st(null != (o = e.numericFacetSet) ? o : {}),
                            ...st(null != (s = e.dateFacetSet) ? s : {}),
                            ...oR(null != (u = e.categoryFacetSet) ? u : {}),
                        ].filter(({facetId: t}) => {
                            var r, n, i;
                            return (
                                null ==
                                    (i =
                                        null == (n = null == (r = e.facetOptions) ? void 0 : r.facets[t])
                                            ? void 0
                                            : n.enabled) || i
                            );
                        }),
                        null != (i = e.facetOrder) ? i : [],
                    ),
                    p = (d = null == (l = e.automaticFacetSet) ? void 0 : l.set)
                        ? Object.values(d)
                              .map((e) => e.response)
                              .map(se)
                              .filter((e) => e.currentValues.length > 0)
                        : void 0,
                    g = await aR(e, t);
                return o9({
                    ...g,
                    ...(e.didYouMean && {enableDidYouMean: e.didYouMean.enableDidYouMean}),
                    ...(h && {cq: h}),
                    ...(f.length && {facets: f}),
                    ...(e.pagination && {
                        numberOfResults: e.pagination
                            ? e.pagination.firstResult + e.pagination.numberOfResults > 5e3
                                ? 5e3 - e.pagination.firstResult
                                : e.pagination.numberOfResults
                            : void 0,
                        firstResult: e.pagination.firstResult,
                    }),
                    ...(e.facetOptions && {facetOptions: {freezeFacetOrder: e.facetOptions.freezeFacetOrder}}),
                    ...((null == (r = e.folding) ? void 0 : r.enabled) && {
                        filterField: e.folding.fields.collection,
                        childField: e.folding.fields.parent,
                        parentField: e.folding.fields.child,
                        filterFieldRange: e.folding.filterFieldRange,
                    }),
                    ...(e.automaticFacetSet && {
                        generateAutomaticFacets: {
                            desiredCount: e.automaticFacetSet.desiredCount,
                            numberOfValues: e.automaticFacetSet.numberOfValues,
                            currentFacets: p,
                        },
                    }),
                });
            };
            function se(e) {
                let {field: t, label: r, values: n} = e;
                return {field: t, label: r, currentValues: n.filter((e) => 'selected' === e.state)};
            }
            function st(e) {
                return oR(e).map((e) => {
                    let t = e.currentValues.some(({state: e}) => 'idle' !== e);
                    return e.generateAutomaticRanges && !t ? {...e, currentValues: []} : e;
                });
            }
            var sr = class {
                constructor(
                    e,
                    t = (e) => {
                        this.dispatch(oG({q: e}));
                    },
                ) {
                    ((this.config = e), (this.onUpdateQueryForCorrection = t));
                }
                async fetchFromAPI({mappings: e, request: t}, r) {
                    var n, i, a;
                    let o = new Date().getTime();
                    return {
                        response:
                            'success' in (i = await this.extra.apiClient.search(t, r))
                                ? {
                                      success: {
                                          ...i.success,
                                          facets:
                                              null == (a = i.success.facets)
                                                  ? void 0
                                                  : a.map((t) =>
                                                        t.facetId in e.dateFacetValueMap
                                                            ? {
                                                                  ...t,
                                                                  values: t.values.map((r) => {
                                                                      var n;
                                                                      return (
                                                                          (n = t.facetId),
                                                                          {
                                                                              ...r,
                                                                              start:
                                                                                  e.dateFacetValueMap[n][
                                                                                      `start${r.start}`
                                                                                  ] || r.start,
                                                                              end:
                                                                                  e.dateFacetValueMap[n][
                                                                                      `end${r.end}`
                                                                                  ] || r.end,
                                                                          }
                                                                      );
                                                                  }),
                                                              }
                                                            : t,
                                                    ),
                                      },
                                  }
                                : i,
                        duration: new Date().getTime() - o,
                        queryExecuted: (null == (n = this.getState().query) ? void 0 : n.q) || '',
                        requestExecuted: t,
                    };
                }
                async process(e) {
                    var t, r, n;
                    return null !=
                        (n =
                            null !=
                            (r =
                                null != (t = this.processQueryErrorOrContinue(e))
                                    ? t
                                    : await this.processQueryCorrectionsOrContinue(e))
                                ? r
                                : await this.processQueryTriggersOrContinue(e))
                        ? n
                        : this.processSuccessResponse(e);
                }
                processQueryErrorOrContinue(e) {
                    return eQ(e.response)
                        ? (this.dispatch(oA(e.response.error)), this.rejectWithValue(e.response.error))
                        : null;
                }
                async processQueryCorrectionsOrContinue(e) {
                    var t;
                    let r = this.getState(),
                        n = this.getSuccessResponse(e);
                    if (
                        !n ||
                        (null == (t = r.didYouMean) ? void 0 : t.enableDidYouMean) === !1 ||
                        0 !== n.results.length ||
                        0 === n.queryCorrections.length
                    )
                        return null;
                    let i = this.getCurrentQuery(),
                        {correctedQuery: a} = n.queryCorrections[0],
                        o = await this.automaticallyRetryQueryWithCorrection(a);
                    return eQ(o.response)
                        ? (this.dispatch(oA(o.response.error)), this.rejectWithValue(o.response.error))
                        : (this.analyticsAction &&
                              this.analyticsAction()(
                                  this.dispatch,
                                  () => this.getStateAfterResponse(e.queryExecuted, e.duration, r, n),
                                  this.extra,
                              ),
                          this.dispatch(rU(o5(this.getState()))),
                          {
                              ...o,
                              response: {...o.response.success, queryCorrections: n.queryCorrections},
                              automaticallyCorrected: !0,
                              originalQuery: i,
                              analyticsAction: oJ(),
                          });
                }
                async processQueryTriggersOrContinue(e) {
                    var t, r;
                    let n = this.getSuccessResponse(e);
                    if (!n) return null;
                    let i = (null == (t = n.triggers.find((e) => 'query' === e.type)) ? void 0 : t.content) || '';
                    if (!i) return null;
                    if ((null == (r = this.getState().triggers) ? void 0 : r.queryModification.queryToIgnore) === i)
                        return (this.dispatch(o4('')), null);
                    this.analyticsAction && (await this.dispatch(this.analyticsAction));
                    let a = this.getCurrentQuery(),
                        o = await this.automaticallyRetryQueryWithTriggerModification(i);
                    return eQ(o.response)
                        ? (this.dispatch(oA(o.response.error)), this.rejectWithValue(o.response.error))
                        : (this.dispatch(rU(o5(this.getState()))),
                          {
                              ...o,
                              response: {...o.response.success},
                              automaticallyCorrected: !1,
                              originalQuery: a,
                              analyticsAction: o3(),
                          });
                }
                processSuccessResponse(e) {
                    return (
                        this.dispatch(rU(o5(this.getState()))),
                        {
                            ...e,
                            response: this.getSuccessResponse(e),
                            automaticallyCorrected: !1,
                            originalQuery: this.getCurrentQuery(),
                            analyticsAction: this.analyticsAction,
                        }
                    );
                }
                getSuccessResponse(e) {
                    return ez(e.response) ? e.response.success : null;
                }
                async automaticallyRetryQueryWithCorrection(e) {
                    this.onUpdateQueryForCorrection(e);
                    let t = await this.fetchFromAPI(await o7(this.getState()), {origin: 'mainSearch'});
                    return (this.dispatch(oK(e)), t);
                }
                async automaticallyRetryQueryWithTriggerModification(e) {
                    return (
                        this.dispatch(o6({newQuery: e, originalQuery: this.getCurrentQuery()})),
                        this.onUpdateQueryForCorrection(e),
                        await this.fetchFromAPI(await o7(this.getState()), {origin: 'mainSearch'})
                    );
                }
                getStateAfterResponse(e, t, r, n) {
                    var i, a;
                    return {
                        ...r,
                        query: {
                            q: e,
                            enableQuerySyntax:
                                null != (a = null == (i = r.query) ? void 0 : i.enableQuerySyntax)
                                    ? a
                                    : iI().enableQuerySyntax,
                        },
                        search: {...ey(), duration: t, response: n, results: n.results},
                    };
                }
                getCurrentQuery() {
                    var e;
                    let t = this.getState();
                    return (null == (e = t.query) ? void 0 : e.q) !== void 0 ? t.query.q : '';
                }
                get extra() {
                    return this.config.extra;
                }
                getState() {
                    return this.config.getState();
                }
                get dispatch() {
                    return this.config.dispatch;
                }
                get analyticsAction() {
                    return this.config.analyticsAction;
                }
                get rejectWithValue() {
                    return this.config.rejectWithValue;
                }
            };
            rn('search/prepareForSearchWithQuery', (e, t) => {
                let {dispatch: r} = t;
                (rd(e, {q: new es(), enableQuerySyntax: new ei(), clearFilters: new ei()}),
                    e.clearFilters && (r(aN()), r(az())),
                    r(oT({allow: !0})),
                    r(oG({q: e.q, enableQuerySyntax: e.enableQuerySyntax})),
                    r(oY(1)));
            });
            var sn = rn('search/executeSearch', async (e, t) => {
                let r = t.getState();
                ss(r);
                let {analyticsClientMiddleware: n, preprocessRequest: i, logger: a} = t.extra,
                    {description: o} = await e.prepare({
                        getState: () => t.getState(),
                        analyticsClientMiddleware: n,
                        preprocessRequest: i,
                        logger: a,
                    }),
                    s = await o7(r, o),
                    u = new sr({...t, analyticsAction: e}),
                    l = await u.fetchFromAPI(s, {origin: 'mainSearch'});
                return await u.process(l);
            });
            (rn('search/fetchPage', async (e, t) => {
                let r = t.getState();
                ss(r);
                let {analyticsClientMiddleware: n, preprocessRequest: i, logger: a} = t.extra,
                    {description: o} = await e.prepare({
                        getState: () => t.getState(),
                        analyticsClientMiddleware: n,
                        preprocessRequest: i,
                        logger: a,
                    }),
                    s = new sr({...t, analyticsAction: e}),
                    u = await o7(r, o),
                    l = await s.fetchFromAPI(u, {origin: 'mainSearch'});
                return await s.process(l);
            }),
                rn('search/fetchMoreResults', async (e, t) => {
                    let r = t.getState(),
                        {analyticsClientMiddleware: n, preprocessRequest: i, logger: a} = t.extra,
                        {description: o} = await oq().prepare({
                            getState: () => t.getState(),
                            analyticsClientMiddleware: n,
                            preprocessRequest: i,
                            logger: a,
                        }),
                        s = new sr({...t, analyticsAction: oq()}),
                        u = await si(r, o),
                        l = await s.fetchFromAPI(u, {origin: 'mainSearch'});
                    return await s.process(l);
                }),
                rn('search/fetchFacetValues', async (e, t) => {
                    let r = t.getState(),
                        {analyticsClientMiddleware: n, preprocessRequest: i, logger: a} = t.extra,
                        {description: o} = await e.prepare({
                            getState: () => t.getState(),
                            analyticsClientMiddleware: n,
                            preprocessRequest: i,
                            logger: a,
                        }),
                        s = new sr({...t, analyticsAction: e}),
                        u = await so(r, o),
                        l = await s.fetchFromAPI(u, {origin: 'facetValues'});
                    return await s.process(l);
                }),
                rn('search/fetchInstantResults', async (e, t) => {
                    rd(e, {id: ro, q: ro, maxResultsPerQuery: new er({required: !0, min: 1}), cacheTimeout: new er()});
                    let {q: r, maxResultsPerQuery: n} = e,
                        i = t.getState(),
                        a = new sr({...t, analyticsAction: o$()}, (r) => {
                            t.dispatch(oV({q: r, id: e.id}));
                        }),
                        o = await sa(i, r, n),
                        s = await a.fetchFromAPI(o, {origin: 'instantResults', disableAbortWarning: !0}),
                        u = await a.process(s);
                    return 'response' in u
                        ? {
                              results: u.response.results,
                              searchUid: u.response.searchUid,
                              analyticsAction: u.analyticsAction,
                              totalCountFiltered: u.response.totalCountFiltered,
                              duration: u.duration,
                          }
                        : u;
                }));
            var si = async (e, t) => {
                    var r, n, i, a;
                    let o = await o7(e, t);
                    return (
                        (o.request = {
                            ...o.request,
                            firstResult:
                                (null != (n = null == (r = e.pagination) ? void 0 : r.firstResult) ? n : 0) +
                                (null != (a = null == (i = e.search) ? void 0 : i.results.length) ? a : 0),
                        }),
                        o
                    );
                },
                sa = async (e, t, r) => {
                    let n = await aR(e);
                    return o9({
                        ...n,
                        ...(e.didYouMean && {enableDidYouMean: e.didYouMean.enableDidYouMean}),
                        numberOfResults: r,
                        q: t,
                    });
                },
                so = async (e, t) => {
                    let r = await o7(e, t);
                    return ((r.request.numberOfResults = 0), r);
                },
                ss = (e) => {
                    var t;
                    e.configuration.analytics.enabled &&
                        ii.addElement({
                            name: 'Query',
                            ...((null == (t = e.query) ? void 0 : t.q) && {value: e.query.q}),
                            time: JSON.stringify(new Date()),
                        });
                },
                su = t8(oZ(), (e) => {
                    e.addCase(oz, (e, t) => {
                        let r = sc(e),
                            n = t.payload;
                        ((e.defaultNumberOfResults = e.numberOfResults = n), (e.firstResult = (r - 1) * n));
                    })
                        .addCase(oQ, (e, t) => {
                            ((e.numberOfResults = t.payload), (e.firstResult = 0));
                        })
                        .addCase(i3, (e) => {
                            e.firstResult = 0;
                        })
                        .addCase(oH, (e, t) => {
                            var r;
                            let n = t.payload;
                            e.firstResult = (n - 1) * e.numberOfResults;
                        })
                        .addCase(oY, (e, t) => {
                            var r;
                            let n = t.payload;
                            e.firstResult = (n - 1) * e.numberOfResults;
                        })
                        .addCase(oW, (e) => {
                            var t;
                            let r = sc(e);
                            e.firstResult = (Math.max(r - 1, 1) - 1) * e.numberOfResults;
                        })
                        .addCase(oB, (e) => {
                            var t;
                            let r = Math.min(
                                sc(e) + 1,
                                (function (e) {
                                    let {totalCountFiltered: t, numberOfResults: r} = e;
                                    return Math.ceil(Math.min(t, 5e3) / r);
                                })(e),
                            );
                            e.firstResult = (r - 1) * e.numberOfResults;
                        })
                        .addCase(rP.fulfilled, (e, t) => {
                            t.payload &&
                                ((e.numberOfResults = t.payload.pagination.numberOfResults),
                                (e.firstResult = t.payload.pagination.firstResult));
                        })
                        .addCase(rI, (e, t) => {
                            var r, n;
                            ((e.firstResult = null != (r = t.payload.firstResult) ? r : e.firstResult),
                                (e.numberOfResults =
                                    null != (n = t.payload.numberOfResults) ? n : e.defaultNumberOfResults));
                        })
                        .addCase(sn.fulfilled, (e, t) => {
                            let {response: r} = t.payload;
                            e.totalCountFiltered = r.totalCountFiltered;
                        })
                        .addCase(oj.fulfilled, (e, t) => {
                            let {response: r} = t.payload;
                            e.totalCountFiltered = r.pagination.totalCount;
                        })
                        .addCase(op, (e) => {
                            sl(e);
                        })
                        .addCase(of, (e) => {
                            sl(e);
                        })
                        .addCase(aJ, (e) => {
                            sl(e);
                        })
                        .addCase(aK, (e) => {
                            sl(e);
                        })
                        .addCase(a0, (e) => {
                            sl(e);
                        })
                        .addCase(ob, (e) => {
                            sl(e);
                        })
                        .addCase(oC, (e) => {
                            sl(e);
                        })
                        .addCase(aN, (e) => {
                            sl(e);
                        })
                        .addCase(ow, (e) => {
                            sl(e);
                        })
                        .addCase(oD, (e) => {
                            sl(e);
                        })
                        .addCase(a2, (e) => {
                            sl(e);
                        })
                        .addCase(aB, (e) => {
                            sl(e);
                        });
                });
            function sl(e) {
                e.firstResult = oZ().firstResult;
            }
            function sc(e) {
                let {firstResult: t, numberOfResults: r} = e;
                return Math.round(t / r) + 1;
            }
            var sd = new Z({
                id: new es({emptyAllowed: !0, required: !1, default: ''}),
                numberOfRecommendations: new er({min: 0}),
            });
            function sh(e, t = {}) {
                let r, n, i, a;
                !(function (e) {
                    e.addReducers({recommendation: iX, configuration: ae});
                })(e);
                let o =
                        ((n = new Map()),
                        (i = () => 0 === n.size),
                        (a = (e) => {
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
                                let o = Symbol(),
                                    s;
                                return (
                                    i() &&
                                        ((r = JSON.stringify(this.state)),
                                        (s = e.subscribe(() => {
                                            a(this.state) && n.forEach((e) => e());
                                        }))),
                                    n.set(o, t),
                                    () => {
                                        (n.delete(o), i() && s && s());
                                    }
                                );
                            },
                            get state() {
                                return {};
                            },
                        }),
                    {dispatch: s} = e,
                    u = () => e.state,
                    l = rh(e, sd, t.options, 'buildRecommendationList');
                return (
                    '' !== l.id && s(iK({id: l.id})),
                    l.numberOfRecommendations &&
                        s(
                            (e.addReducers({pagination: su}),
                            {
                                nextPage: oB,
                                previousPage: oW,
                                registerNumberOfResults: oz,
                                registerPage: oH,
                                updateNumberOfResults: oQ,
                                updatePage: oY,
                            }).updateNumberOfResults(l.numberOfRecommendations),
                        ),
                    {
                        ...o,
                        refresh() {
                            s(iJ());
                        },
                        get state() {
                            let e = u();
                            return {
                                recommendations: e.recommendation.recommendations,
                                error: e.recommendation.error,
                                isLoading: e.recommendation.isLoading,
                                searchResponseId: e.recommendation.searchUid,
                            };
                        },
                    }
                );
            }
            function sf(e, t) {
                var r;
                let n,
                    i,
                    a = !1,
                    o = () => {
                        a || ((a = !0), e.dispatch(iG(t.options.result)));
                    };
                return (
                    (r = () => {
                        o();
                    }),
                    !(function (e) {
                        e.addReducers({configuration: ae});
                    })(e),
                    {
                        select: ai(r, (n = {selectionDelay: 1e3, debounceWait: 1e3, ...t.options}).debounceWait, {
                            isImmediate: !0,
                        }),
                        beginDelayedSelect() {
                            i = setTimeout(r, n.selectionDelay);
                        },
                        cancelPendingSelect() {
                            i && clearTimeout(i);
                        },
                    }
                );
            }
            ('undefined' == typeof window &&
                (r.g.crypto || (r.g.crypto = D('crypto')),
                !r.g.crypto.getRandomValues &&
                    r.g.crypto.webcrypto &&
                    (r.g.crypto.getRandomValues = (0, r.g.crypto).webcrypto.getRandomValues.bind(
                        r.g.crypto.webcrypto,
                    ))),
                ((f = y || (y = {})).getResultProperty = ep),
                (f.fieldsMustBeDefined = (e) => (t) => e.every((e) => !et(ep(t, e)))),
                (f.fieldsMustNotBeDefined = (e) => (t) => e.every((e) => et(ep(t, e)))),
                (f.fieldMustMatch = (e, t) => (r) => {
                    let n = eg(e, r);
                    return t.some((e) => n.some((t) => `${t}`.toLowerCase() === e.toLowerCase()));
                }),
                (f.fieldMustNotMatch = (e, t) => (r) => {
                    let n = eg(e, r);
                    return t.every((e) => n.every((t) => `${t}`.toLowerCase() !== e.toLowerCase()));
                }));
        },
    },
]);
