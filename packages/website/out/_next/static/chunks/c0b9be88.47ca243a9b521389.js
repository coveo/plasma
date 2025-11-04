'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [74831],
    {
        92370: function (e, t, r) {
            r.d(t, {
                A: function () {
                    return dI;
                },
                B: function () {
                    return d$;
                },
                F: function () {
                    return uc;
                },
                G: function () {
                    return dJ;
                },
                H: function () {
                    return up;
                },
                K: function () {
                    return dK;
                },
                M: function () {
                    return dP;
                },
                O: function () {
                    return dE;
                },
                P: function () {
                    return dO;
                },
                Q: function () {
                    return dV;
                },
                R: function () {
                    return fa;
                },
                Y: function () {
                    return uF;
                },
                a: function () {
                    return c5;
                },
                b: function () {
                    return oq;
                },
                c: function () {
                    return fi;
                },
                d: function () {
                    return iq;
                },
                e: function () {
                    return lt;
                },
                f: function () {
                    return pi;
                },
                g: function () {
                    return dS;
                },
                h: function () {
                    return dd;
                },
                i: function () {
                    return db;
                },
                o: function () {
                    return d4;
                },
                p: function () {
                    return dy;
                },
                q: function () {
                    return cI;
                },
                s: function () {
                    return d6;
                },
                t: function () {
                    return dm;
                },
                v: function () {
                    return ei;
                },
                w: function () {
                    return of;
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
                a,
                i,
                s,
                o,
                l,
                u,
                c,
                d,
                f,
                p,
                h,
                g,
                v,
                m,
                y,
                S = Object.create,
                b = Object.defineProperty,
                w = Object.getOwnPropertyDescriptor,
                C = Object.getOwnPropertyNames,
                I = Object.getPrototypeOf,
                k = Object.prototype.hasOwnProperty,
                O = (e) => b(e, '__esModule', {value: !0}),
                q = r(22029),
                x = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports),
                E = (e, t, r) => {
                    if ((t && 'object' == typeof t) || 'function' == typeof t)
                        for (let n of C(t))
                            k.call(e, n) ||
                                'default' === n ||
                                b(e, n, {get: () => t[n], enumerable: !(r = w(t, n)) || r.enumerable});
                    return e;
                },
                R = (e) =>
                    E(
                        O(
                            b(
                                null != e ? S(I(e)) : {},
                                'default',
                                e && e.__esModule && 'default' in e
                                    ? {get: () => e.default, enumerable: !0}
                                    : {value: e, enumerable: !0},
                            ),
                        ),
                        e,
                    ),
                A = x((e, t) => {
                    t.exports = fetch;
                }),
                F = x((e) => {
                    var t =
                        (e && e.__assign) ||
                        function () {
                            return (t =
                                Object.assign ||
                                function (e) {
                                    for (var t, r = 1, n = arguments.length; r < n; r++)
                                        for (var a in (t = arguments[r]))
                                            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
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
                D = x((e) => {
                    (Object.defineProperty(e, '__esModule', {value: !0}),
                        (e.fullJitter = function (e) {
                            return Math.round(Math.random() * e);
                        }));
                }),
                j = x((e) => {
                    (Object.defineProperty(e, '__esModule', {value: !0}),
                        (e.noJitter = function (e) {
                            return e;
                        }));
                }),
                P = x((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = D(),
                        r = j();
                    e.JitterFactory = function (e) {
                        return 'full' === e.jitter ? t.fullJitter : r.noJitter;
                    };
                }),
                T = x((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = P(),
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
                U = x((e) => {
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
                                return new (r || (r = Promise))(function (a, i) {
                                    function s(e) {
                                        try {
                                            l(n.next(e));
                                        } catch (e) {
                                            i(e);
                                        }
                                    }
                                    function o(e) {
                                        try {
                                            l(n.throw(e));
                                        } catch (e) {
                                            i(e);
                                        }
                                    }
                                    function l(e) {
                                        var t;
                                        e.done
                                            ? a(e.value)
                                            : ((t = e.value) instanceof r
                                                  ? t
                                                  : new r(function (e) {
                                                        e(t);
                                                    })
                                              ).then(s, o);
                                    }
                                    l((n = n.apply(e, t || [])).next());
                                });
                            },
                        a =
                            (e && e.__generator) ||
                            function (e, t) {
                                var r,
                                    n,
                                    a,
                                    i,
                                    s = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & a[0]) throw a[1];
                                            return a[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (i = {next: o(0), throw: o(1), return: o(2)}),
                                    'function' == typeof Symbol &&
                                        (i[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    i
                                );
                                function o(i) {
                                    return function (o) {
                                        return (function (i) {
                                            if (r) throw TypeError('Generator is already executing.');
                                            for (; s; )
                                                try {
                                                    if (
                                                        ((r = 1),
                                                        n &&
                                                            (a =
                                                                2 & i[0]
                                                                    ? n.return
                                                                    : i[0]
                                                                      ? n.throw || ((a = n.return) && a.call(n), 0)
                                                                      : n.next) &&
                                                            !(a = a.call(n, i[1])).done)
                                                    )
                                                        return a;
                                                    switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                                                        case 0:
                                                        case 1:
                                                            a = i;
                                                            break;
                                                        case 4:
                                                            return (s.label++, {value: i[1], done: !1});
                                                        case 5:
                                                            (s.label++, (n = i[1]), (i = [0]));
                                                            continue;
                                                        case 7:
                                                            ((i = s.ops.pop()), s.trys.pop());
                                                            continue;
                                                        default:
                                                            if (
                                                                !(a = (a = s.trys).length > 0 && a[a.length - 1]) &&
                                                                (6 === i[0] || 2 === i[0])
                                                            ) {
                                                                s = 0;
                                                                continue;
                                                            }
                                                            if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                                                s.label = i[1];
                                                                break;
                                                            }
                                                            if (6 === i[0] && s.label < a[1]) {
                                                                ((s.label = a[1]), (a = i));
                                                                break;
                                                            }
                                                            if (a && s.label < a[2]) {
                                                                ((s.label = a[2]), s.ops.push(i));
                                                                break;
                                                            }
                                                            (a[2] && s.ops.pop(), s.trys.pop());
                                                            continue;
                                                    }
                                                    i = t.call(e, s);
                                                } catch (e) {
                                                    ((i = [6, e]), (n = 0));
                                                } finally {
                                                    r = a = 0;
                                                }
                                            if (5 & i[0]) throw i[1];
                                            return {value: i[0] ? i[1] : void 0, done: !0};
                                        })([i, o]);
                                    };
                                }
                            };
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var i = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            r(t, e),
                            (t.prototype.apply = function () {
                                return n(this, void 0, void 0, function () {
                                    return a(this, function (t) {
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
                    })(T().Delay);
                    e.SkipFirstDelay = i;
                }),
                V = x((e) => {
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
                    })(T().Delay);
                    e.AlwaysDelay = n;
                }),
                M = x((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = U(),
                        r = V();
                    e.DelayFactory = function (e, n) {
                        var a = e.delayFirstAttempt ? new r.AlwaysDelay(e) : new t.SkipFirstDelay(e);
                        return (a.setAttemptNumber(n), a);
                    };
                }),
                L = x((e) => {
                    var t =
                            (e && e.__awaiter) ||
                            function (e, t, r, n) {
                                return new (r || (r = Promise))(function (a, i) {
                                    function s(e) {
                                        try {
                                            l(n.next(e));
                                        } catch (e) {
                                            i(e);
                                        }
                                    }
                                    function o(e) {
                                        try {
                                            l(n.throw(e));
                                        } catch (e) {
                                            i(e);
                                        }
                                    }
                                    function l(e) {
                                        var t;
                                        e.done
                                            ? a(e.value)
                                            : ((t = e.value) instanceof r
                                                  ? t
                                                  : new r(function (e) {
                                                        e(t);
                                                    })
                                              ).then(s, o);
                                    }
                                    l((n = n.apply(e, t || [])).next());
                                });
                            },
                        r =
                            (e && e.__generator) ||
                            function (e, t) {
                                var r,
                                    n,
                                    a,
                                    i,
                                    s = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & a[0]) throw a[1];
                                            return a[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (i = {next: o(0), throw: o(1), return: o(2)}),
                                    'function' == typeof Symbol &&
                                        (i[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    i
                                );
                                function o(i) {
                                    return function (o) {
                                        return (function (i) {
                                            if (r) throw TypeError('Generator is already executing.');
                                            for (; s; )
                                                try {
                                                    if (
                                                        ((r = 1),
                                                        n &&
                                                            (a =
                                                                2 & i[0]
                                                                    ? n.return
                                                                    : i[0]
                                                                      ? n.throw || ((a = n.return) && a.call(n), 0)
                                                                      : n.next) &&
                                                            !(a = a.call(n, i[1])).done)
                                                    )
                                                        return a;
                                                    switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                                                        case 0:
                                                        case 1:
                                                            a = i;
                                                            break;
                                                        case 4:
                                                            return (s.label++, {value: i[1], done: !1});
                                                        case 5:
                                                            (s.label++, (n = i[1]), (i = [0]));
                                                            continue;
                                                        case 7:
                                                            ((i = s.ops.pop()), s.trys.pop());
                                                            continue;
                                                        default:
                                                            if (
                                                                !(a = (a = s.trys).length > 0 && a[a.length - 1]) &&
                                                                (6 === i[0] || 2 === i[0])
                                                            ) {
                                                                s = 0;
                                                                continue;
                                                            }
                                                            if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                                                s.label = i[1];
                                                                break;
                                                            }
                                                            if (6 === i[0] && s.label < a[1]) {
                                                                ((s.label = a[1]), (a = i));
                                                                break;
                                                            }
                                                            if (a && s.label < a[2]) {
                                                                ((s.label = a[2]), s.ops.push(i));
                                                                break;
                                                            }
                                                            (a[2] && s.ops.pop(), s.trys.pop());
                                                            continue;
                                                    }
                                                    i = t.call(e, s);
                                                } catch (e) {
                                                    ((i = [6, e]), (n = 0));
                                                } finally {
                                                    r = a = 0;
                                                }
                                            if (5 & i[0]) throw i[1];
                                            return {value: i[0] ? i[1] : void 0, done: !0};
                                        })([i, o]);
                                    };
                                }
                            };
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var n = F(),
                        a = M();
                    e.backOff = function (e, a) {
                        return (
                            void 0 === a && (a = {}),
                            t(this, void 0, void 0, function () {
                                var t;
                                return r(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return ((t = n.getSanitizedOptions(a)), [4, new i(e, t).execute()]);
                                        case 1:
                                            return [2, r.sent()];
                                    }
                                });
                            })
                        );
                    };
                    var i = (function () {
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
                                                return [4, a.DelayFactory(this.options, this.attemptNumber).apply()];
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
                $ = x((e, t) => {
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
                        for (let a = 0; a < e.length; a++)
                            ((r <<= 6),
                                (r |= (function (e) {
                                    let t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
                                        e,
                                    );
                                    return t < 0 ? void 0 : t;
                                })(e[a])),
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
                _ = x((e, t) => {
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
                N = x((e, t) => {
                    var r = $(),
                        n = _();
                    t.exports = {atob: r, btoa: n};
                }),
                Q = x((e, t) => {
                    var n, a;
                    ((n = e),
                        (a = function () {
                            var e = 'millisecond',
                                t = 'second',
                                r = 'minute',
                                n = 'hour',
                                a = 'week',
                                i = 'month',
                                s = 'quarter',
                                o = 'year',
                                l = 'date',
                                u = 'Invalid Date',
                                c =
                                    /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                                d =
                                    /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                                f = function (e, t, r) {
                                    var n = String(e);
                                    return !n || n.length >= t ? e : '' + Array(t + 1 - n.length).join(r) + e;
                                },
                                p = 'en',
                                h = {};
                            h[p] = {
                                name: 'en',
                                weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                                months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                                    '_',
                                ),
                            };
                            var g = function (e) {
                                    return e instanceof S;
                                },
                                v = function e(t, r, n) {
                                    var a;
                                    if (!t) return p;
                                    if ('string' == typeof t) {
                                        var i = t.toLowerCase();
                                        (h[i] && (a = i), r && ((h[i] = r), (a = i)));
                                        var s = t.split('-');
                                        if (!a && s.length > 1) return e(s[0]);
                                    } else {
                                        var o = t.name;
                                        ((h[o] = t), (a = o));
                                    }
                                    return (!n && a && (p = a), a || (!n && p));
                                },
                                m = function (e, t) {
                                    if (g(e)) return e.clone();
                                    var r = 'object' == typeof t ? t : {};
                                    return ((r.date = e), (r.args = arguments), new S(r));
                                },
                                y = {
                                    s: f,
                                    z: function (e) {
                                        var t = -e.utcOffset(),
                                            r = Math.abs(t);
                                        return (
                                            (t <= 0 ? '+' : '-') +
                                            f(Math.floor(r / 60), 2, '0') +
                                            ':' +
                                            f(r % 60, 2, '0')
                                        );
                                    },
                                    m: function e(t, r) {
                                        if (t.date() < r.date()) return -e(r, t);
                                        var n = 12 * (r.year() - t.year()) + (r.month() - t.month()),
                                            a = t.clone().add(n, i),
                                            s = r - a < 0,
                                            o = t.clone().add(n + (s ? -1 : 1), i);
                                        return +(-(n + (r - a) / (s ? a - o : o - a)) || 0);
                                    },
                                    a: function (e) {
                                        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
                                    },
                                    p: function (u) {
                                        return (
                                            {M: i, y: o, w: a, d: 'day', D: l, h: n, m: r, s: t, ms: e, Q: s}[u] ||
                                            String(u || '')
                                                .toLowerCase()
                                                .replace(/s$/, '')
                                        );
                                    },
                                    u: function (e) {
                                        return void 0 === e;
                                    },
                                };
                            ((y.l = v),
                                (y.i = g),
                                (y.w = function (e, t) {
                                    return m(e, {locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset});
                                }));
                            var S = (function () {
                                    function f(e) {
                                        ((this.$L = v(e.locale, null, !0)), this.parse(e));
                                    }
                                    var p = f.prototype;
                                    return (
                                        (p.parse = function (e) {
                                            ((this.$d = (function (e) {
                                                var t = e.date,
                                                    r = e.utc;
                                                if (null === t) return new Date(NaN);
                                                if (y.u(t)) return new Date();
                                                if (t instanceof Date) return new Date(t);
                                                if ('string' == typeof t && !/Z$/i.test(t)) {
                                                    var n = t.match(c);
                                                    if (n) {
                                                        var a = n[2] - 1 || 0,
                                                            i = (n[7] || '0').substring(0, 3);
                                                        return r
                                                            ? new Date(
                                                                  Date.UTC(
                                                                      n[1],
                                                                      a,
                                                                      n[3] || 1,
                                                                      n[4] || 0,
                                                                      n[5] || 0,
                                                                      n[6] || 0,
                                                                      i,
                                                                  ),
                                                              )
                                                            : new Date(
                                                                  n[1],
                                                                  a,
                                                                  n[3] || 1,
                                                                  n[4] || 0,
                                                                  n[5] || 0,
                                                                  n[6] || 0,
                                                                  i,
                                                              );
                                                    }
                                                }
                                                return new Date(t);
                                            })(e)),
                                                (this.$x = e.x || {}),
                                                this.init());
                                        }),
                                        (p.init = function () {
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
                                        (p.$utils = function () {
                                            return y;
                                        }),
                                        (p.isValid = function () {
                                            return this.$d.toString() !== u;
                                        }),
                                        (p.isSame = function (e, t) {
                                            var r = m(e);
                                            return this.startOf(t) <= r && r <= this.endOf(t);
                                        }),
                                        (p.isAfter = function (e, t) {
                                            return m(e) < this.startOf(t);
                                        }),
                                        (p.isBefore = function (e, t) {
                                            return this.endOf(t) < m(e);
                                        }),
                                        (p.$g = function (e, t, r) {
                                            return y.u(e) ? this[t] : this.set(r, e);
                                        }),
                                        (p.unix = function () {
                                            return Math.floor(this.valueOf() / 1e3);
                                        }),
                                        (p.valueOf = function () {
                                            return this.$d.getTime();
                                        }),
                                        (p.startOf = function (e, s) {
                                            var u = this,
                                                c = !!y.u(s) || s,
                                                d = y.p(e),
                                                f = function (e, t) {
                                                    var r = y.w(u.$u ? Date.UTC(u.$y, t, e) : new Date(u.$y, t, e), u);
                                                    return c ? r : r.endOf('day');
                                                },
                                                p = function (e, t) {
                                                    return y.w(
                                                        u
                                                            .toDate()
                                                            [
                                                                e
                                                            ].apply(u.toDate('s'), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)),
                                                        u,
                                                    );
                                                },
                                                h = this.$W,
                                                g = this.$M,
                                                v = this.$D,
                                                m = 'set' + (this.$u ? 'UTC' : '');
                                            switch (d) {
                                                case o:
                                                    return c ? f(1, 0) : f(31, 11);
                                                case i:
                                                    return c ? f(1, g) : f(0, g + 1);
                                                case a:
                                                    var S = this.$locale().weekStart || 0,
                                                        b = (h < S ? h + 7 : h) - S;
                                                    return f(c ? v - b : v + (6 - b), g);
                                                case 'day':
                                                case l:
                                                    return p(m + 'Hours', 0);
                                                case n:
                                                    return p(m + 'Minutes', 1);
                                                case r:
                                                    return p(m + 'Seconds', 2);
                                                case t:
                                                    return p(m + 'Milliseconds', 3);
                                                default:
                                                    return this.clone();
                                            }
                                        }),
                                        (p.endOf = function (e) {
                                            return this.startOf(e, !1);
                                        }),
                                        (p.$set = function (a, s) {
                                            var u,
                                                c = y.p(a),
                                                d = 'set' + (this.$u ? 'UTC' : ''),
                                                f = (((u = {}).day = d + 'Date'),
                                                (u[l] = d + 'Date'),
                                                (u[i] = d + 'Month'),
                                                (u[o] = d + 'FullYear'),
                                                (u[n] = d + 'Hours'),
                                                (u[r] = d + 'Minutes'),
                                                (u[t] = d + 'Seconds'),
                                                (u[e] = d + 'Milliseconds'),
                                                u)[c],
                                                p = 'day' === c ? this.$D + (s - this.$W) : s;
                                            if (c === i || c === o) {
                                                var h = this.clone().set(l, 1);
                                                (h.$d[f](p),
                                                    h.init(),
                                                    (this.$d = h.set(l, Math.min(this.$D, h.daysInMonth())).$d));
                                            } else f && this.$d[f](p);
                                            return (this.init(), this);
                                        }),
                                        (p.set = function (e, t) {
                                            return this.clone().$set(e, t);
                                        }),
                                        (p.get = function (e) {
                                            return this[y.p(e)]();
                                        }),
                                        (p.add = function (e, s) {
                                            var l,
                                                u = this;
                                            e = Number(e);
                                            var c = y.p(s),
                                                d = function (t) {
                                                    var r = m(u);
                                                    return y.w(r.date(r.date() + Math.round(t * e)), u);
                                                };
                                            if (c === i) return this.set(i, this.$M + e);
                                            if (c === o) return this.set(o, this.$y + e);
                                            if ('day' === c) return d(1);
                                            if (c === a) return d(7);
                                            var f = (((l = {})[r] = 6e4), (l[n] = 36e5), (l[t] = 1e3), l)[c] || 1,
                                                p = this.$d.getTime() + e * f;
                                            return y.w(p, this);
                                        }),
                                        (p.subtract = function (e, t) {
                                            return this.add(-1 * e, t);
                                        }),
                                        (p.format = function (e) {
                                            var t = this,
                                                r = this.$locale();
                                            if (!this.isValid()) return r.invalidDate || u;
                                            var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                                                a = y.z(this),
                                                i = this.$H,
                                                s = this.$m,
                                                o = this.$M,
                                                l = r.weekdays,
                                                c = r.months,
                                                f = function (e, r, a, i) {
                                                    return (e && (e[r] || e(t, n))) || a[r].slice(0, i);
                                                },
                                                p = function (e) {
                                                    return y.s(i % 12 || 12, e, '0');
                                                },
                                                h =
                                                    r.meridiem ||
                                                    function (e, t, r) {
                                                        var n = e < 12 ? 'AM' : 'PM';
                                                        return r ? n.toLowerCase() : n;
                                                    },
                                                g = {
                                                    YY: String(this.$y).slice(-2),
                                                    YYYY: this.$y,
                                                    M: o + 1,
                                                    MM: y.s(o + 1, 2, '0'),
                                                    MMM: f(r.monthsShort, o, c, 3),
                                                    MMMM: f(c, o),
                                                    D: this.$D,
                                                    DD: y.s(this.$D, 2, '0'),
                                                    d: String(this.$W),
                                                    dd: f(r.weekdaysMin, this.$W, l, 2),
                                                    ddd: f(r.weekdaysShort, this.$W, l, 3),
                                                    dddd: l[this.$W],
                                                    H: String(i),
                                                    HH: y.s(i, 2, '0'),
                                                    h: p(1),
                                                    hh: p(2),
                                                    a: h(i, s, !0),
                                                    A: h(i, s, !1),
                                                    m: String(s),
                                                    mm: y.s(s, 2, '0'),
                                                    s: String(this.$s),
                                                    ss: y.s(this.$s, 2, '0'),
                                                    SSS: y.s(this.$ms, 3, '0'),
                                                    Z: a,
                                                };
                                            return n.replace(d, function (e, t) {
                                                return t || g[e] || a.replace(':', '');
                                            });
                                        }),
                                        (p.utcOffset = function () {
                                            return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
                                        }),
                                        (p.diff = function (e, l, u) {
                                            var c,
                                                d = y.p(l),
                                                f = m(e),
                                                p = (f.utcOffset() - this.utcOffset()) * 6e4,
                                                h = this - f,
                                                g = y.m(this, f);
                                            return (
                                                (g =
                                                    (((c = {})[o] = g / 12),
                                                    (c[i] = g),
                                                    (c[s] = g / 3),
                                                    (c[a] = (h - p) / 6048e5),
                                                    (c.day = (h - p) / 864e5),
                                                    (c[n] = h / 36e5),
                                                    (c[r] = h / 6e4),
                                                    (c[t] = h / 1e3),
                                                    c)[d] || h),
                                                u ? g : y.a(g)
                                            );
                                        }),
                                        (p.daysInMonth = function () {
                                            return this.endOf(i).$D;
                                        }),
                                        (p.$locale = function () {
                                            return h[this.$L];
                                        }),
                                        (p.locale = function (e, t) {
                                            if (!e) return this.$L;
                                            var r = this.clone(),
                                                n = v(e, t, !0);
                                            return (n && (r.$L = n), r);
                                        }),
                                        (p.clone = function () {
                                            return y.w(this.$d, this);
                                        }),
                                        (p.toDate = function () {
                                            return new Date(this.valueOf());
                                        }),
                                        (p.toJSON = function () {
                                            return this.isValid() ? this.toISOString() : null;
                                        }),
                                        (p.toISOString = function () {
                                            return this.$d.toISOString();
                                        }),
                                        (p.toString = function () {
                                            return this.$d.toUTCString();
                                        }),
                                        f
                                    );
                                })(),
                                b = S.prototype;
                            return (
                                (m.prototype = b),
                                [
                                    ['$ms', e],
                                    ['$s', t],
                                    ['$m', r],
                                    ['$H', n],
                                    ['$W', 'day'],
                                    ['$M', i],
                                    ['$y', o],
                                    ['$D', l],
                                ].forEach(function (e) {
                                    b[e[1]] = function (t) {
                                        return this.$g(t, e[0], e[1]);
                                    };
                                }),
                                (m.extend = function (e, t) {
                                    return (e.$i || (e(t, S, m), (e.$i = !0)), m);
                                }),
                                (m.locale = v),
                                (m.isDayjs = g),
                                (m.unix = function (e) {
                                    return m(1e3 * e);
                                }),
                                (m.en = h[p]),
                                (m.Ls = h),
                                (m.p = {}),
                                m
                            );
                        }),
                        'object' == typeof e && void 0 !== t
                            ? (t.exports = a())
                            : 'function' == typeof define && r.amdO
                              ? define(a)
                              : ((n = 'undefined' != typeof globalThis ? globalThis : n || self).dayjs = a()));
                }),
                z = x((e, t) => {
                    var n, a;
                    ((n = e),
                        (a = function () {
                            var e = 'month',
                                t = 'quarter';
                            return function (r, n) {
                                var a = n.prototype;
                                a.quarter = function (e) {
                                    return this.$utils().u(e)
                                        ? Math.ceil((this.month() + 1) / 3)
                                        : this.month((this.month() % 3) + 3 * (e - 1));
                                };
                                var i = a.add;
                                a.add = function (r, n) {
                                    return (
                                        (r = Number(r)),
                                        this.$utils().p(n) === t ? this.add(3 * r, e) : i.bind(this)(r, n)
                                    );
                                };
                                var s = a.startOf;
                                a.startOf = function (r, n) {
                                    var a = this.$utils(),
                                        i = !!a.u(n) || n;
                                    if (a.p(r) === t) {
                                        var o = this.quarter() - 1;
                                        return i
                                            ? this.month(3 * o)
                                                  .startOf(e)
                                                  .startOf('day')
                                            : this.month(3 * o + 2)
                                                  .endOf(e)
                                                  .endOf('day');
                                    }
                                    return s.bind(this)(r, n);
                                };
                            };
                        }),
                        'object' == typeof e && void 0 !== t
                            ? (t.exports = a())
                            : 'function' == typeof define && r.amdO
                              ? define(a)
                              : ((n =
                                    'undefined' != typeof globalThis
                                        ? globalThis
                                        : n || self).dayjs_plugin_quarterOfYear = a()));
                }),
                B = x((e, t) => {
                    var n, a;
                    ((n = e),
                        (a = function () {
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
                                a = /\d*[^-_:/,()\s\d]+/,
                                i = {},
                                s = function (e) {
                                    return (e = +e) + (e > 68 ? 1900 : 2e3);
                                },
                                o = function (e) {
                                    return function (t) {
                                        this[e] = +t;
                                    };
                                },
                                l = [
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
                                u = function (e) {
                                    var t = i[e];
                                    return t && (t.indexOf ? t : t.s.concat(t.f));
                                },
                                c = function (e, t) {
                                    var r,
                                        n = i.meridiem;
                                    if (n) {
                                        for (var a = 1; a <= 24; a += 1)
                                            if (e.indexOf(n(a, 0, t)) > -1) {
                                                r = a > 12;
                                                break;
                                            }
                                    } else r = e === (t ? 'pm' : 'PM');
                                    return r;
                                },
                                d = {
                                    A: [
                                        a,
                                        function (e) {
                                            this.afternoon = c(e, !1);
                                        },
                                    ],
                                    a: [
                                        a,
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
                                    s: [n, o('seconds')],
                                    ss: [n, o('seconds')],
                                    m: [n, o('minutes')],
                                    mm: [n, o('minutes')],
                                    H: [n, o('hours')],
                                    h: [n, o('hours')],
                                    HH: [n, o('hours')],
                                    hh: [n, o('hours')],
                                    D: [n, o('day')],
                                    DD: [r, o('day')],
                                    Do: [
                                        a,
                                        function (e) {
                                            var t = i.ordinal;
                                            if (((this.day = e.match(/\d+/)[0]), t))
                                                for (var r = 1; r <= 31; r += 1)
                                                    t(r).replace(/\[|\]/g, '') === e && (this.day = r);
                                        },
                                    ],
                                    M: [n, o('month')],
                                    MM: [r, o('month')],
                                    MMM: [
                                        a,
                                        function (e) {
                                            var t = u('months'),
                                                r =
                                                    (
                                                        u('monthsShort') ||
                                                        t.map(function (e) {
                                                            return e.slice(0, 3);
                                                        })
                                                    ).indexOf(e) + 1;
                                            if (r < 1) throw Error();
                                            this.month = r % 12 || r;
                                        },
                                    ],
                                    MMMM: [
                                        a,
                                        function (e) {
                                            var t = u('months').indexOf(e) + 1;
                                            if (t < 1) throw Error();
                                            this.month = t % 12 || t;
                                        },
                                    ],
                                    Y: [/[+-]?\d+/, o('year')],
                                    YY: [
                                        r,
                                        function (e) {
                                            this.year = s(e);
                                        },
                                    ],
                                    YYYY: [/\d{4}/, o('year')],
                                    Z: l,
                                    ZZ: l,
                                };
                            return function (r, n, a) {
                                ((a.p.customParseFormat = !0), r && r.parseTwoDigitYear && (s = r.parseTwoDigitYear));
                                var o = n.prototype,
                                    l = o.parse;
                                o.parse = function (r) {
                                    var n = r.date,
                                        s = r.utc,
                                        o = r.args;
                                    this.$u = s;
                                    var u = o[1];
                                    if ('string' == typeof u) {
                                        var c = !0 === o[2],
                                            f = !0 === o[3],
                                            p = o[2];
                                        (f && (p = o[2]),
                                            (i = this.$locale()),
                                            !c && p && (i = a.Ls[p]),
                                            (this.$d = (function (r, n, a) {
                                                try {
                                                    if (['x', 'X'].indexOf(n) > -1)
                                                        return new Date(('X' === n ? 1e3 : 1) * r);
                                                    var s = (function (r) {
                                                            var n, a;
                                                            ((n = r), (a = i && i.formats));
                                                            for (
                                                                var s = (r = n.replace(
                                                                        /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                                                                        function (t, r, n) {
                                                                            var i = n && n.toUpperCase();
                                                                            return (
                                                                                r ||
                                                                                a[n] ||
                                                                                e[n] ||
                                                                                a[i].replace(
                                                                                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                                                                                    function (e, t, r) {
                                                                                        return t || r.slice(1);
                                                                                    },
                                                                                )
                                                                            );
                                                                        },
                                                                    )).match(t),
                                                                    o = s.length,
                                                                    l = 0;
                                                                l < o;
                                                                l += 1
                                                            ) {
                                                                var u = s[l],
                                                                    c = d[u],
                                                                    f = c && c[0],
                                                                    p = c && c[1];
                                                                s[l] = p
                                                                    ? {regex: f, parser: p}
                                                                    : u.replace(/^\[|\]$/g, '');
                                                            }
                                                            return function (e) {
                                                                for (var t = {}, r = 0, n = 0; r < o; r += 1) {
                                                                    var a = s[r];
                                                                    if ('string' == typeof a) n += a.length;
                                                                    else {
                                                                        var i = a.regex,
                                                                            l = a.parser,
                                                                            u = e.slice(n),
                                                                            c = i.exec(u)[0];
                                                                        (l.call(t, c), (e = e.replace(c, '')));
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
                                                        o = s.year,
                                                        l = s.month,
                                                        u = s.day,
                                                        c = s.hours,
                                                        f = s.minutes,
                                                        p = s.seconds,
                                                        h = s.milliseconds,
                                                        g = s.zone,
                                                        v = new Date(),
                                                        m = u || (o || l ? 1 : v.getDate()),
                                                        y = o || v.getFullYear(),
                                                        S = 0;
                                                    (o && !l) || (S = l > 0 ? l - 1 : v.getMonth());
                                                    var b = c || 0,
                                                        w = f || 0,
                                                        C = p || 0,
                                                        I = h || 0;
                                                    return g
                                                        ? new Date(Date.UTC(y, S, m, b, w, C, I + 60 * g.offset * 1e3))
                                                        : a
                                                          ? new Date(Date.UTC(y, S, m, b, w, C, I))
                                                          : new Date(y, S, m, b, w, C, I);
                                                } catch {
                                                    return new Date('');
                                                }
                                            })(n, u, s)),
                                            this.init(),
                                            p && !0 !== p && (this.$L = this.locale(p).$L),
                                            (c || f) && n != this.format(u) && (this.$d = new Date('')),
                                            (i = {}));
                                    } else if (u instanceof Array)
                                        for (var h = u.length, g = 1; g <= h; g += 1) {
                                            o[1] = u[g - 1];
                                            var v = a.apply(this, o);
                                            if (v.isValid()) {
                                                ((this.$d = v.$d), (this.$L = v.$L), this.init());
                                                break;
                                            }
                                            g === h && (this.$d = new Date(''));
                                        }
                                    else l.call(this, r);
                                };
                            };
                        }),
                        'object' == typeof e && void 0 !== t
                            ? (t.exports = a())
                            : 'function' == typeof define && r.amdO
                              ? define(a)
                              : ((n =
                                    'undefined' != typeof globalThis
                                        ? globalThis
                                        : n || self).dayjs_plugin_customParseFormat = a()));
                }),
                H = x((e, t) => {
                    var n, a;
                    ((n = e),
                        (a = function () {
                            var e = {year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5},
                                t = {};
                            return function (r, n, a) {
                                var i,
                                    s = function (e, r, n) {
                                        void 0 === n && (n = {});
                                        var a,
                                            i,
                                            s,
                                            o,
                                            l = new Date(e);
                                        return (void 0 === (a = n) && (a = {}),
                                        (o = t[(s = r + '|' + (i = a.timeZoneName || 'short'))]) ||
                                            ((o = new Intl.DateTimeFormat('en-US', {
                                                hour12: !1,
                                                timeZone: r,
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                timeZoneName: i,
                                            })),
                                            (t[s] = o)),
                                        o).formatToParts(l);
                                    },
                                    o = function (t, r) {
                                        for (var n = s(t, r), i = [], o = 0; o < n.length; o += 1) {
                                            var l = n[o],
                                                u = l.type,
                                                c = l.value,
                                                d = e[u];
                                            d >= 0 && (i[d] = parseInt(c, 10));
                                        }
                                        var f = i[3],
                                            p =
                                                i[0] +
                                                '-' +
                                                i[1] +
                                                '-' +
                                                i[2] +
                                                ' ' +
                                                (24 === f ? 0 : f) +
                                                ':' +
                                                i[4] +
                                                ':' +
                                                i[5] +
                                                ':000',
                                            h = +t;
                                        return (a.utc(p).valueOf() - (h -= h % 1e3)) / 6e4;
                                    },
                                    l = n.prototype;
                                ((l.tz = function (e, t) {
                                    void 0 === e && (e = i);
                                    var r = this.utcOffset(),
                                        n = this.toDate(),
                                        s = n.toLocaleString('en-US', {timeZone: e}),
                                        o = Math.round((n - new Date(s)) / 1e3 / 60),
                                        l = a(s)
                                            .$set('millisecond', this.$ms)
                                            .utcOffset(-(15 * Math.round(n.getTimezoneOffset() / 15)) - o, !0);
                                    if (t) {
                                        var u = l.utcOffset();
                                        l = l.add(r - u, 'minute');
                                    }
                                    return ((l.$x.$timezone = e), l);
                                }),
                                    (l.offsetName = function (e) {
                                        var t = this.$x.$timezone || a.tz.guess(),
                                            r = s(this.valueOf(), t, {timeZoneName: e}).find(function (e) {
                                                return 'timezonename' === e.type.toLowerCase();
                                            });
                                        return r && r.value;
                                    }));
                                var u = l.startOf;
                                ((l.startOf = function (e, t) {
                                    if (!this.$x || !this.$x.$timezone) return u.call(this, e, t);
                                    var r = a(this.format('YYYY-MM-DD HH:mm:ss:SSS'));
                                    return u.call(r, e, t).tz(this.$x.$timezone, !0);
                                }),
                                    (a.tz = function (e, t, r) {
                                        var n = r && t,
                                            s = r || t || i,
                                            l = o(+a(), s);
                                        if ('string' != typeof e) return a(e).tz(s);
                                        var u = (function (e, t, r) {
                                                var n = e - 60 * t * 1e3,
                                                    a = o(n, r);
                                                if (t === a) return [n, t];
                                                var i = o((n -= 60 * (a - t) * 1e3), r);
                                                return a === i
                                                    ? [n, a]
                                                    : [e - 60 * Math.min(a, i) * 1e3, Math.max(a, i)];
                                            })(a.utc(e, n).valueOf(), l, s),
                                            c = u[0],
                                            d = u[1],
                                            f = a(c).utcOffset(d);
                                        return ((f.$x.$timezone = s), f);
                                    }),
                                    (a.tz.guess = function () {
                                        return Intl.DateTimeFormat().resolvedOptions().timeZone;
                                    }),
                                    (a.tz.setDefault = function (e) {
                                        i = e;
                                    }));
                            };
                        }),
                        'object' == typeof e && void 0 !== t
                            ? (t.exports = a())
                            : 'function' == typeof define && r.amdO
                              ? define(a)
                              : ((n = 'undefined' != typeof globalThis ? globalThis : n || self).dayjs_plugin_timezone =
                                    a()));
                }),
                Y = x((e, t) => {
                    var n, a;
                    ((n = e),
                        (a = function () {
                            var e = 'minute',
                                t = /[+-]\d\d(?::?\d\d)?/g,
                                r = /([+-]|\d\d)/g;
                            return function (n, a, i) {
                                var s = a.prototype;
                                ((i.utc = function (e) {
                                    var t = {date: e, utc: !0, args: arguments};
                                    return new a(t);
                                }),
                                    (s.utc = function (t) {
                                        var r = i(this.toDate(), {locale: this.$L, utc: !0});
                                        return t ? r.add(this.utcOffset(), e) : r;
                                    }),
                                    (s.local = function () {
                                        return i(this.toDate(), {locale: this.$L, utc: !1});
                                    }));
                                var o = s.parse;
                                s.parse = function (e) {
                                    (e.utc && (this.$u = !0),
                                        this.$utils().u(e.$offset) || (this.$offset = e.$offset),
                                        o.call(this, e));
                                };
                                var l = s.init;
                                s.init = function () {
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
                                    } else l.call(this);
                                };
                                var u = s.utcOffset;
                                s.utcOffset = function (n, a) {
                                    var i = this.$utils().u;
                                    if (i(n)) return this.$u ? 0 : i(this.$offset) ? u.call(this) : this.$offset;
                                    if (
                                        'string' == typeof n &&
                                        null ===
                                            (n = (function (e) {
                                                void 0 === e && (e = '');
                                                var n = e.match(t);
                                                if (!n) return null;
                                                var a = ('' + n[0]).match(r) || ['-', 0, 0],
                                                    i = a[0],
                                                    s = 60 * +a[1] + +a[2];
                                                return 0 === s ? 0 : '+' === i ? s : -s;
                                            })(n))
                                    )
                                        return this;
                                    var s = 16 >= Math.abs(n) ? 60 * n : n,
                                        o = this;
                                    if (a) return ((o.$offset = s), (o.$u = 0 === n), o);
                                    if (0 !== n) {
                                        var l = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                                        (((o = this.local().add(s + l, e)).$offset = s), (o.$x.$localOffset = l));
                                    } else o = this.utc();
                                    return o;
                                };
                                var c = s.format;
                                ((s.format = function (e) {
                                    var t = e || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '');
                                    return c.call(this, t);
                                }),
                                    (s.valueOf = function () {
                                        var e = this.$utils().u(this.$offset)
                                            ? 0
                                            : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                                        return this.$d.valueOf() - 6e4 * e;
                                    }),
                                    (s.isUTC = function () {
                                        return !!this.$u;
                                    }),
                                    (s.toISOString = function () {
                                        return this.toDate().toISOString();
                                    }),
                                    (s.toString = function () {
                                        return this.toDate().toUTCString();
                                    }));
                                var d = s.toDate;
                                s.toDate = function (e) {
                                    return 's' === e && this.$offset
                                        ? i(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
                                        : d.call(this);
                                };
                                var f = s.diff;
                                s.diff = function (e, t, r) {
                                    if (e && this.$u === e.$u) return f.call(this, e, t, r);
                                    var n = this.local(),
                                        a = i(e).local();
                                    return f.call(n, a, t, r);
                                };
                            };
                        }),
                        'object' == typeof e && void 0 !== t
                            ? (t.exports = a())
                            : 'function' == typeof define && r.amdO
                              ? define(a)
                              : ((n = 'undefined' != typeof globalThis ? globalThis : n || self).dayjs_plugin_utc =
                                    a()));
                }),
                W = x((e, t) => {
                    function r(e) {
                        try {
                            return JSON.stringify(e);
                        } catch {
                            return '"[Circular]"';
                        }
                    }
                    t.exports = function (e, t, n) {
                        var a = (n && n.stringify) || r;
                        if ('object' == typeof e && null !== e) {
                            var i = t.length + 1;
                            if (1 === i) return e;
                            var s = Array(i);
                            s[0] = a(e);
                            for (var o = 1; o < i; o++) s[o] = a(t[o]);
                            return s.join(' ');
                        }
                        if ('string' != typeof e) return e;
                        var l = t.length;
                        if (0 === l) return e;
                        for (var u = '', c = 0, d = -1, f = (e && e.length) || 0, p = 0; p < f; ) {
                            if (37 === e.charCodeAt(p) && p + 1 < f) {
                                switch (((d = d > -1 ? d : 0), e.charCodeAt(p + 1))) {
                                    case 100:
                                    case 102:
                                        if (c >= l || null == t[c]) break;
                                        (d < p && (u += e.slice(d, p)), (u += Number(t[c])), (d = p + 2), p++);
                                        break;
                                    case 105:
                                        if (c >= l || null == t[c]) break;
                                        (d < p && (u += e.slice(d, p)),
                                            (u += Math.floor(Number(t[c]))),
                                            (d = p + 2),
                                            p++);
                                        break;
                                    case 79:
                                    case 111:
                                    case 106:
                                        if (c >= l || void 0 === t[c]) break;
                                        d < p && (u += e.slice(d, p));
                                        var h = typeof t[c];
                                        if ('string' === h) {
                                            ((u += "'" + t[c] + "'"), (d = p + 2), p++);
                                            break;
                                        }
                                        if ('function' === h) {
                                            ((u += t[c].name || '<anonymous>'), (d = p + 2), p++);
                                            break;
                                        }
                                        ((u += a(t[c])), (d = p + 2), p++);
                                        break;
                                    case 115:
                                        if (c >= l) break;
                                        (d < p && (u += e.slice(d, p)), (u += String(t[c])), (d = p + 2), p++);
                                        break;
                                    case 37:
                                        (d < p && (u += e.slice(d, p)), (u += '%'), (d = p + 2), p++, c--);
                                }
                                ++c;
                            }
                            ++p;
                        }
                        return -1 === d ? e : (d < f && (u += e.slice(d)), u);
                    };
                }),
                J = x((e, t) => {
                    var r = W();
                    t.exports = a;
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
                    function a(e) {
                        var t, r;
                        (e = e || {}).browser = e.browser || {};
                        let u = e.browser.transmit;
                        if (u && 'function' != typeof u.send)
                            throw Error('pino: transmit option must have a send function');
                        let c = e.browser.write || n;
                        e.browser.write && (e.browser.asObject = !0);
                        let h = e.serializers || {},
                            g = Array.isArray((t = e.browser.serialize))
                                ? t.filter(function (e) {
                                      return '!stdSerializers.err' !== e;
                                  })
                                : !0 === t && Object.keys(h),
                            v = e.browser.serialize;
                        (Array.isArray(e.browser.serialize) &&
                            e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
                            (v = !1),
                            'function' == typeof c && (c.error = c.fatal = c.warn = c.info = c.debug = c.trace = c),
                            (!1 === e.enabled || e.browser.disabled) && (e.level = 'silent'));
                        let m = e.level || 'info',
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
                                        i(S, y, 'error', 'log'),
                                        i(S, y, 'fatal', 'error'),
                                        i(S, y, 'warn', 'error'),
                                        i(S, y, 'info', 'log'),
                                        i(S, y, 'debug', 'log'),
                                        i(S, y, 'trace', 'log'));
                                },
                            }));
                        let S = {
                            transmit: u,
                            serialize: g,
                            asObject: e.browser.asObject,
                            levels: ['error', 'fatal', 'warn', 'info', 'debug', 'trace'],
                            timestamp:
                                'function' == typeof (r = e).timestamp ? r.timestamp : !1 === r.timestamp ? f : p,
                        };
                        return (
                            (y.levels = a.levels),
                            (y.level = m),
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
                            (y.serializers = h),
                            (y._serialize = g),
                            (y._stdErrSerialize = v),
                            (y.child = function (t, r) {
                                if (!t) throw Error('missing bindings for child Pino');
                                ((r = r || {}), g && t.serializers && (r.serializers = t.serializers));
                                let n = r.serializers;
                                if (g && n) {
                                    var a = Object.assign({}, h, n),
                                        i = !0 === e.browser.serialize ? Object.keys(a) : g;
                                    (delete t.serializers, s([t], i, a, this._stdErrSerialize));
                                }
                                function c(e) {
                                    ((this._childLevel = (0 | e._childLevel) + 1),
                                        (this.error = o(e, t, 'error')),
                                        (this.fatal = o(e, t, 'fatal')),
                                        (this.warn = o(e, t, 'warn')),
                                        (this.info = o(e, t, 'info')),
                                        (this.debug = o(e, t, 'debug')),
                                        (this.trace = o(e, t, 'trace')),
                                        a && ((this.serializers = a), (this._serialize = i)),
                                        u && (this._logEvent = l([].concat(e._logEvent.bindings, t))));
                                }
                                return ((c.prototype = this), new c(this));
                            }),
                            u && (y._logEvent = l()),
                            y
                        );
                    }
                    function i(e, t, i, o) {
                        var u;
                        let c = Object.getPrototypeOf(t);
                        ((t[i] = t.levelVal > t.levels.values[i] ? d : c[i] ? c[i] : n[i] || n[o] || d),
                            (e.transmit || t[i] !== d) &&
                                (t[i] =
                                    ((u = t[i]),
                                    function () {
                                        let o = e.timestamp(),
                                            c = Array(arguments.length),
                                            d = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                        for (var f, p = 0; p < c.length; p++) c[p] = arguments[p];
                                        if (
                                            (e.serialize &&
                                                !e.asObject &&
                                                s(c, this._serialize, this.serializers, this._stdErrSerialize),
                                            e.asObject
                                                ? u.call(
                                                      d,
                                                      (function (e, t, n, i) {
                                                          e._serialize &&
                                                              s(n, e._serialize, e.serializers, e._stdErrSerialize);
                                                          let o = n.slice(),
                                                              l = o[0],
                                                              u = {};
                                                          (i && (u.time = i), (u.level = a.levels.values[t]));
                                                          let c = (0 | e._childLevel) + 1;
                                                          if ((c < 1 && (c = 1), null !== l && 'object' == typeof l)) {
                                                              for (; c-- && 'object' == typeof o[0]; )
                                                                  Object.assign(u, o.shift());
                                                              l = o.length ? r(o.shift(), o) : void 0;
                                                          } else 'string' == typeof l && (l = r(o.shift(), o));
                                                          return (void 0 !== l && (u.msg = l), u);
                                                      })(this, i, c, o),
                                                  )
                                                : u.apply(d, c),
                                            e.transmit)
                                        ) {
                                            let r,
                                                n,
                                                u,
                                                d,
                                                p,
                                                h,
                                                g = e.transmit.level || t.level,
                                                v = a.levels.values[g],
                                                m = a.levels.values[i];
                                            if (m < v) return;
                                            ((r = (f = {
                                                ts: o,
                                                methodLevel: i,
                                                methodValue: m,
                                                transmitLevel: g,
                                                transmitValue: a.levels.values[e.transmit.level || t.level],
                                                send: e.transmit.send,
                                                val: t.levelVal,
                                            }).send),
                                                (n = f.ts),
                                                (u = f.methodLevel),
                                                (d = f.methodValue),
                                                (p = f.val),
                                                (h = this._logEvent.bindings),
                                                s(
                                                    c,
                                                    this._serialize || Object.keys(this.serializers),
                                                    this.serializers,
                                                    void 0 === this._stdErrSerialize || this._stdErrSerialize,
                                                ),
                                                (this._logEvent.ts = n),
                                                (this._logEvent.messages = c.filter(function (e) {
                                                    return -1 === h.indexOf(e);
                                                })),
                                                (this._logEvent.level.label = u),
                                                (this._logEvent.level.value = d),
                                                r(u, this._logEvent, p),
                                                (this._logEvent = l(h)));
                                        }
                                    })));
                    }
                    function s(e, t, r, n) {
                        for (let i in e)
                            if (n && e[i] instanceof Error) e[i] = a.stdSerializers.err(e[i]);
                            else if ('object' == typeof e[i] && !Array.isArray(e[i]))
                                for (let n in e[i]) t && t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]));
                    }
                    function o(e, t, r) {
                        return function () {
                            let n = Array(1 + arguments.length);
                            n[0] = t;
                            for (var a = 1; a < n.length; a++) n[a] = arguments[a - 1];
                            return e[r].apply(this, n);
                        };
                    }
                    function l(e) {
                        return {ts: 0, messages: [], bindings: e || [], level: {label: '', value: 0}};
                    }
                    function u() {
                        return {};
                    }
                    function c(e) {
                        return e;
                    }
                    function d() {}
                    function f() {
                        return !1;
                    }
                    function p() {
                        return Date.now();
                    }
                    ((a.levels = {
                        values: {fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10},
                        labels: {10: 'trace', 20: 'debug', 30: 'info', 40: 'warn', 50: 'error', 60: 'fatal'},
                    }),
                        (a.stdSerializers = {
                            mapHttpRequest: u,
                            mapHttpResponse: u,
                            wrapRequestSerializer: c,
                            wrapResponseSerializer: c,
                            wrapErrorSerializer: c,
                            req: u,
                            res: u,
                            err: function (e) {
                                let t = {type: e.constructor.name, msg: e.message, stack: e.stack};
                                for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                                return t;
                            },
                        }),
                        (a.stdTimeFunctions = Object.assign(
                            {},
                            {
                                nullTime: f,
                                epochTime: p,
                                unixTime: function () {
                                    return Math.round(Date.now() / 1e3);
                                },
                                isoTime: function () {
                                    return new Date(Date.now()).toISOString();
                                },
                            },
                        )));
                }),
                K = x((e, t) => {
                    var n, a;
                    ((n = e),
                        (a = function (e) {
                            var t = 'function' == typeof WeakSet,
                                r = Object.keys;
                            function n(e, t) {
                                return e === t || (e != e && t != t);
                            }
                            function a(e) {
                                return e.constructor === Object || null == e.constructor;
                            }
                            function i(e) {
                                return !!e && 'function' == typeof e.then;
                            }
                            function s(e) {
                                return !!(e && e.$$typeof);
                            }
                            var o = t
                                ? function () {
                                      return new WeakSet();
                                  }
                                : function () {
                                      var e = [];
                                      return {
                                          add: function (t) {
                                              e.push(t);
                                          },
                                          has: function (t) {
                                              return -1 !== e.indexOf(t);
                                          },
                                      };
                                  };
                            function l(e) {
                                return function (t) {
                                    var r = e || t;
                                    return function (e, t, n) {
                                        void 0 === n && (n = o());
                                        var a = !!e && 'object' == typeof e,
                                            i = !!t && 'object' == typeof t;
                                        if (a || i) {
                                            var s = a && n.has(e),
                                                l = i && n.has(t);
                                            if (s || l) return s && l;
                                            (a && n.add(e), i && n.add(t));
                                        }
                                        return r(e, t, n);
                                    };
                                };
                            }
                            var u = Function.prototype.bind.call(
                                Function.prototype.call,
                                Object.prototype.hasOwnProperty,
                            );
                            function c(e, t, n, a) {
                                var i = r(e),
                                    o = i.length;
                                if (r(t).length !== o) return !1;
                                if (o)
                                    for (var l = void 0; o-- > 0; ) {
                                        if ('_owner' === (l = i[o])) {
                                            var c = s(e),
                                                d = s(t);
                                            if ((c || d) && c !== d) return !1;
                                        }
                                        if (!u(t, l) || !n(e[l], t[l], a)) return !1;
                                    }
                                return !0;
                            }
                            var d = 'function' == typeof Map,
                                f = 'function' == typeof Set;
                            function p(e) {
                                var t = 'function' == typeof e ? e(r) : r;
                                function r(e, r, s) {
                                    if (e === r) return !0;
                                    if (e && r && 'object' == typeof e && 'object' == typeof r) {
                                        if (a(e) && a(r)) return c(e, r, t, s);
                                        var o = Array.isArray(e),
                                            l = Array.isArray(r);
                                        return o || l
                                            ? o === l &&
                                                  (function (e, t, r, n) {
                                                      var a = e.length;
                                                      if (t.length !== a) return !1;
                                                      for (; a-- > 0; ) if (!r(e[a], t[a], n)) return !1;
                                                      return !0;
                                                  })(e, r, t, s)
                                            : ((o = e instanceof Date),
                                              (l = r instanceof Date),
                                              o || l
                                                  ? o === l && n(e.getTime(), r.getTime())
                                                  : ((o = e instanceof RegExp),
                                                    (l = r instanceof RegExp),
                                                    o || l
                                                        ? o === l &&
                                                          e.source === r.source &&
                                                          e.global === r.global &&
                                                          e.ignoreCase === r.ignoreCase &&
                                                          e.multiline === r.multiline &&
                                                          e.unicode === r.unicode &&
                                                          e.sticky === r.sticky &&
                                                          e.lastIndex === r.lastIndex
                                                        : i(e) || i(r)
                                                          ? e === r
                                                          : d &&
                                                              ((o = e instanceof Map), (l = r instanceof Map), o || l)
                                                            ? o === l &&
                                                              (function (e, t, r, n) {
                                                                  var a = e.size === t.size;
                                                                  if (a && e.size) {
                                                                      var i = {};
                                                                      e.forEach(function (e, s) {
                                                                          if (a) {
                                                                              var o = !1,
                                                                                  l = 0;
                                                                              (t.forEach(function (t, a) {
                                                                                  (!o &&
                                                                                      !i[l] &&
                                                                                      (o = r(s, a, n) && r(e, t, n)) &&
                                                                                      (i[l] = !0),
                                                                                      l++);
                                                                              }),
                                                                                  (a = o));
                                                                          }
                                                                      });
                                                                  }
                                                                  return a;
                                                              })(e, r, t, s)
                                                            : f &&
                                                                ((o = e instanceof Set), (l = r instanceof Set), o || l)
                                                              ? o === l &&
                                                                (function (e, t, r, n) {
                                                                    var a = e.size === t.size;
                                                                    if (a && e.size) {
                                                                        var i = {};
                                                                        e.forEach(function (e) {
                                                                            if (a) {
                                                                                var s = !1,
                                                                                    o = 0;
                                                                                (t.forEach(function (t) {
                                                                                    (!s &&
                                                                                        !i[o] &&
                                                                                        (s = r(e, t, n)) &&
                                                                                        (i[o] = !0),
                                                                                        o++);
                                                                                }),
                                                                                    (a = s));
                                                                            }
                                                                        });
                                                                    }
                                                                    return a;
                                                                })(e, r, t, s)
                                                              : c(e, r, t, s)));
                                    }
                                    return e != e && r != r;
                                }
                                return r;
                            }
                            var h = p(),
                                g = p(function () {
                                    return n;
                                }),
                                v = p(l()),
                                m = p(l(n));
                            ((e.circularDeepEqual = v),
                                (e.circularShallowEqual = m),
                                (e.createCustomEqual = p),
                                (e.deepEqual = h),
                                (e.sameValueZeroEqual = n),
                                (e.shallowEqual = g),
                                Object.defineProperty(e, '__esModule', {value: !0}));
                        }),
                        'object' == typeof e && void 0 !== t
                            ? a(e)
                            : 'function' == typeof define && r.amdO
                              ? define(['exports'], a)
                              : a(
                                    ((n = 'undefined' != typeof globalThis ? globalThis : n || self)['fast-equals'] =
                                        {}),
                                ));
                }),
                G = (e) => e,
                Z = R(A()),
                X = R(L()),
                ee = class extends Error {
                    constructor() {
                        (super(),
                            (this.name = 'ExpiredToken'),
                            (this.message = 'The token being used to perform the request is expired.'));
                    }
                },
                et = class extends Error {
                    constructor(e, t) {
                        (super(),
                            (this.name = 'Disconnected'),
                            (this.message = `Client could not connect to the following URL: ${e}`),
                            (this.statusCode = null != t ? t : 0));
                    }
                };
            function er(e) {
                return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e;
            }
            var en = class {
                static async call(e) {
                    let t = (function (e) {
                            var t;
                            let {url: r, method: n, requestParams: a, contentType: i, accessToken: s, signal: o} = e,
                                l = 'POST' === e.method || 'PUT' === e.method,
                                u =
                                    ((t = a),
                                    'application/x-www-form-urlencoded' === i
                                        ? 'object' == typeof t && t && Object.values(t).every(er)
                                            ? (function (e) {
                                                  let t = [];
                                                  for (let r in e) {
                                                      let n = encodeURIComponent(r),
                                                          a = encodeURIComponent(e[r]);
                                                      t.push(`${n}=${a}`);
                                                  }
                                                  return t.join('&');
                                              })(t)
                                            : ''
                                        : JSON.stringify(t));
                            return {
                                url: r,
                                method: n,
                                headers: {'Content-Type': i, Authorization: `Bearer ${s}`, ...e.headers},
                                ...(l && {body: u}),
                                signal: o,
                            };
                        })(e),
                        {origin: r, preprocessRequest: n, logger: a, requestMetadata: i} = e,
                        s = {...t, ...(n ? await n(t, r, i) : {})};
                    a.info(s, 'Platform request');
                    let {url: o, ...l} = s,
                        u = async () => {
                            let e = await (0, Z.default)(o, l);
                            if (429 === e.status) throw e;
                            return e;
                        };
                    try {
                        let e = await (0, X.backOff)(u, {
                            retry: (e) => {
                                var t;
                                let r = e && ((t = e.status), 429 === t);
                                return (r && a.info('Platform retrying request'), r);
                            },
                        });
                        if (419 === e.status) throw (a.info('Platform renewing token'), new ee());
                        if (404 === e.status) throw new et(o, e.status);
                        return (a.info({response: e, requestInfo: s}, 'Platform response'), e);
                    } catch (e) {
                        return 'Failed to fetch' === e.message ? new et(o) : e;
                    }
                }
            };
            function ea(e, t) {
                return `https://${e}${t && t.environment && 'prod' !== t.environment ? t.environment : ''}${t && t.region && 'us' !== t.region ? `-${t.region}` : ''}.cloud.coveo.com`;
            }
            function ei(e, t = 'prod') {
                let r = 'prod' === t ? '' : t,
                    n = `https://${e}.org${r}.coveo.com`,
                    a = `${n}/rest/search/v2`;
                return {
                    platform: n,
                    analytics: `https://${e}.analytics.org${r}.coveo.com`,
                    search: a,
                    admin: `https://${e}.admin.org${r}.coveo.com`,
                };
            }
            function es(e) {
                return (null == e ? void 0 : e.multiRegionSubDomain)
                    ? `https://${e.multiRegionSubDomain}.org.coveo.com`
                    : ea('platform', e);
            }
            var eo = class extends Error {
                    constructor(e) {
                        (super(e), (this.name = 'SchemaValidationError'));
                    }
                },
                el = class {
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
                                new eo(e)
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
                eu = class {
                    constructor(e = {}) {
                        this.baseConfig = e;
                    }
                    validate(e) {
                        return this.baseConfig.required && ed(e) ? 'value is required.' : null;
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
            function ec(e) {
                return void 0 === e;
            }
            function ed(e) {
                return ec(e) || null === e;
            }
            var ef = class {
                constructor(e = {}) {
                    ((this.config = e), (this.value = new eu(e)));
                }
                validate(e) {
                    return (
                        this.value.validate(e) ||
                        (ec(e) || ep(e)
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
            function ep(e) {
                return 'number' == typeof e && !isNaN(e);
            }
            var eh = class {
                constructor(e = {}) {
                    this.value = new eu(e);
                }
                validate(e) {
                    return this.value.validate(e) || (ec(e) || eg(e) ? null : 'value is not a boolean.');
                }
                get default() {
                    return this.value.default;
                }
                get required() {
                    return this.value.required;
                }
            };
            function eg(e) {
                return 'boolean' == typeof e;
            }
            var ev =
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
                em = class {
                    constructor(e = {}) {
                        ((this.config = {emptyAllowed: !0, url: !1, ...e}), (this.value = new eu(this.config)));
                    }
                    validate(e) {
                        let {emptyAllowed: t, url: r, regex: n, constrainTo: a} = this.config;
                        return (
                            this.value.validate(e) ||
                            (ec(e)
                                ? null
                                : ey(e)
                                  ? t || e.length
                                      ? r && !ev.test(e)
                                          ? 'value is not a valid URL.'
                                          : n && !n.test(e)
                                            ? `value did not match provided regex ${n}`
                                            : a && !a.includes(e)
                                              ? `value should be one of: ${a.join(', ')}.`
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
            function ey(e) {
                return '[object String]' === Object.prototype.toString.call(e);
            }
            var eS = class {
                constructor(e = {}) {
                    this.config = {options: {required: !1}, values: {}, ...e};
                }
                validate(e) {
                    if (ec(e))
                        return this.config.options.required ? 'value is required and is currently undefined' : null;
                    if (!eb(e)) return 'value is not an object';
                    for (let [t, r] of Object.entries(this.config.values))
                        if (r.required && ed(e[t])) return `value does not contain ${t}`;
                    let t = '';
                    for (let [r, n] of Object.entries(this.config.values)) {
                        let a = e[r],
                            i = n.validate(a);
                        null !== i && (t += ' ' + i);
                    }
                    return '' === t ? null : t;
                }
                get default() {}
                get required() {
                    return !!this.config.options.required;
                }
            };
            function eb(e) {
                return void 0 !== e && 'object' == typeof e;
            }
            var ew = class {
                constructor(e = {}) {
                    ((this.config = e), (this.value = new eu(this.config)));
                }
                validate(e) {
                    if (!ed(e) && !Array.isArray(e)) return 'value is not an array';
                    let t = this.value.validate(e);
                    if (null !== t) return t;
                    if (ed(e)) return null;
                    if (void 0 !== this.config.max && e.length > this.config.max)
                        return `value contains more than ${this.config.max}`;
                    if (void 0 !== this.config.min && e.length < this.config.min)
                        return `value contains less than ${this.config.min}`;
                    if (void 0 !== this.config.each) {
                        let t = '';
                        return (
                            e.forEach((r) => {
                                this.config.each.required &&
                                    ed(r) &&
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
                    return eg(e) || ey(e) || ep(e) || eb(e) ? t.validate(e) : 'value is not a primitive value';
                }
                get default() {}
                get required() {
                    return this.value.required;
                }
            };
            function eC(e) {
                return Array.isArray(e);
            }
            var eI = class {
                constructor(e) {
                    ((this.config = e), (this.value = new eu(e)));
                }
                validate(e) {
                    let t = this.value.validate(e);
                    return null !== t
                        ? t
                        : ec(e) || Object.values(this.config.enum).find((t) => t === e)
                          ? null
                          : 'value is not in enum.';
                }
                get default() {
                    return this.value.default;
                }
                get required() {
                    return this.value.required;
                }
            };
            function ek() {
                return {
                    answerSnippet: '',
                    documentId: {contentIdKey: '', contentIdValue: ''},
                    question: '',
                    relatedQuestions: [],
                    score: 0,
                };
            }
            function eO() {
                return {
                    response: {
                        results: [],
                        searchUid: '',
                        totalCountFiltered: 0,
                        facets: [],
                        generateAutomaticFacets: {facets: []},
                        queryCorrections: [],
                        triggers: [],
                        questionAnswer: ek(),
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
                    questionAnswer: ek(),
                    extendedResults: {},
                };
            }
            var eq = class {
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
                ex = (e) => /^https:\/\/platform(dev|stg|hipaa)?(-)?(eu|au)?\.cloud\.coveo\.com/.test(e),
                eE = (e, t) => {
                    let r = eR(e);
                    return r && r.organizationId === t ? r : null;
                },
                eR = (e) => {
                    let t = e.match(/^https:\/\/(?<organizationId>\w+)\.org(?<environment>dev|stg|hipaa)?\.coveo\.com/);
                    return (null == t ? void 0 : t.groups) ? t.groups : null;
                },
                eA = (e, t) => {
                    let r = new eq(`${e.url}${t}`);
                    return (
                        r.addParam('access_token', e.accessToken),
                        r.addParam('organizationId', e.organizationId),
                        r.addParam('uniqueId', e.uniqueId),
                        void 0 !== e.q && r.addParam('q', e.q),
                        void 0 !== e.enableNavigation && r.addParam('enableNavigation', `${e.enableNavigation}`),
                        void 0 !== e.requestedOutputSize &&
                            r.addParam('requestedOutputSize', `${e.requestedOutputSize}`),
                        void 0 !== e.visitorId && r.addParam('visitorId', `${e.visitorId}`),
                        r.href
                    );
                };
            function eF(e, t) {
                if (t && 'AbortError' === e.name)
                    return {error: {statusCode: e.code, type: e.name, message: e.message, ignored: !0}};
                if (e instanceof et) return {error: {statusCode: e.statusCode, type: e.name, message: e.message}};
                throw e;
            }
            var eD = (e) => void 0 !== e.success,
                ej = (e) => void 0 !== e.error,
                eP = (e, t) =>
                    `${e.url}/rest/organizations/${e.organizationId}/insight/v1/configs/${e.insightId}${null != t ? t : ''}`,
                eT = (e, t, r, n) => {
                    eV(e);
                    let a = eP(e, n);
                    return {accessToken: e.accessToken, method: t, contentType: r, url: a, origin: 'insightApiFetch'};
                },
                eU = (e) => {
                    let {insightId: t, ...r} = (function (e) {
                        let {url: t, accessToken: r, organizationId: n, authentication: a, ...i} = e;
                        return i;
                    })(e);
                    return r;
                },
                eV = (e) => {
                    if (!e.url) throw Error("The 'url' attribute must contain a valid platform URL.");
                    if (!e.organizationId)
                        throw Error("The 'organizationId' attribute must contain a valid organization ID.");
                    if (!e.accessToken)
                        throw Error("The 'accessToken' attribute must contain a valid platform access token.");
                    if (!e.insightId)
                        throw Error("The 'insightId' attribute must contain a valid Insight Panel configuration ID.");
                },
                eM = (e) => ({...eT(e, 'GET', 'application/json', '/interface'), requestParams: {}}),
                eL = (e) => ({...eT(e, 'POST', 'application/json', '/search'), requestParams: eU(e)}),
                e$ = (e) => ({...eT(e, 'POST', 'application/json', '/querysuggest'), requestParams: eU(e)}),
                e_ = (e) => {
                    var t, r, n, a;
                    let i = eU(e);
                    return {
                        ...eT(e, 'POST', 'application/json', '/useractions'),
                        requestParams: {
                            ticketCreationDate: i.ticketCreationDate,
                            numberSessionsBefore: null != (t = i.numberSessionsBefore) ? t : 50,
                            numberSessionsAfter: null != (r = i.numberSessionsAfter) ? r : 50,
                            maximumSessionInactivityMinutes: null != (n = i.maximumSessionInactivityMinutes) ? n : 30,
                            excludedCustomActions: null != (a = i.excludedCustomActions) ? a : [],
                        },
                    };
                },
                eN = class {
                    constructor(e) {
                        this.options = e;
                    }
                    async getInterface(e) {
                        let t = await en.call({...eM(e), ...this.options});
                        if (t instanceof Error) return eF(t);
                        let r = await t.json();
                        return t.ok ? {success: r} : {error: r};
                    }
                    async query(e, t) {
                        var r;
                        let n,
                            a = await en.call({
                                ...eL(e),
                                requestMetadata: {method: 'search', origin: null == t ? void 0 : t.origin},
                                ...this.options,
                            });
                        if (a instanceof Error) return eF(a);
                        let i = await a.json();
                        return (
                            void 0 !== i.results &&
                                ((r = i),
                                (n = ek()),
                                ed(r.questionAnswer)
                                    ? (r.questionAnswer = n)
                                    : (r.questionAnswer = {...n, ...r.questionAnswer}),
                                (i = r)),
                            a.ok ? {success: i} : {error: i}
                        );
                    }
                    async querySuggest(e) {
                        let t = await en.call({...e$(e), ...this.options});
                        if (t instanceof Error) return eF(t);
                        let r = await t.json();
                        return r.completions ? {success: r} : {error: r};
                    }
                    async userActions(e) {
                        let t = await en.call({...e_(e), ...this.options});
                        if (t instanceof Error) return eF(t);
                        let r = await t.json();
                        return t.ok ? {success: r} : {error: r};
                    }
                },
                eQ = (e) => ({
                    caseContext: (null == e ? void 0 : e.caseContext) || {},
                    caseId: null == e ? void 0 : e.caseId,
                    caseNumber: null == e ? void 0 : e.caseNumber,
                });
            function ez(e) {
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
            function eB(e) {
                return !!e && !!e[tS];
            }
            function eH(e) {
                var t;
                return (
                    !!e &&
                    ((function (e) {
                        if (!e || 'object' != typeof e) return !1;
                        var t = Object.getPrototypeOf(e);
                        if (null === t) return !0;
                        var r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
                        return r === Object || ('function' == typeof r && Function.toString.call(r) === tb);
                    })(e) ||
                        Array.isArray(e) ||
                        !!e[ty] ||
                        !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[ty]) ||
                        eZ(e) ||
                        eX(e))
                );
            }
            function eY(e, t, r) {
                (void 0 === r && (r = !1),
                    0 === eW(e)
                        ? (r ? Object.keys : tw)(e).forEach(function (n) {
                              (r && 'symbol' == typeof n) || t(n, e[n], e);
                          })
                        : e.forEach(function (r, n) {
                              return t(n, r, e);
                          }));
            }
            function eW(e) {
                var t = e[tS];
                return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : eZ(e) ? 2 : eX(e) ? 3 : 0;
            }
            function eJ(e, t) {
                return 2 === eW(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
            }
            function eK(e, t, r) {
                var n = eW(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
            }
            function eG(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            }
            function eZ(e) {
                return th && e instanceof Map;
            }
            function eX(e) {
                return tg && e instanceof Set;
            }
            function e0(e) {
                return e.o || e.t;
            }
            function e1(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                var t = tC(e);
                delete t[tS];
                for (var r = tw(t), n = 0; n < r.length; n++) {
                    var a = r[n],
                        i = t[a];
                    (!1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
                        (i.get || i.set) &&
                            (t[a] = {configurable: !0, writable: !0, enumerable: i.enumerable, value: e[a]}));
                }
                return Object.create(Object.getPrototypeOf(e), t);
            }
            function e2(e, t) {
                return (
                    void 0 === t && (t = !1),
                    e3(e) ||
                        eB(e) ||
                        !eH(e) ||
                        (eW(e) > 1 && (e.set = e.add = e.clear = e.delete = e5),
                        Object.freeze(e),
                        t &&
                            eY(
                                e,
                                function (e, t) {
                                    return e2(t, !0);
                                },
                                !0,
                            )),
                    e
                );
            }
            function e5() {
                ez(2);
            }
            function e3(e) {
                return null == e || 'object' != typeof e || Object.isFrozen(e);
            }
            function e4(e) {
                var t = tI[e];
                return (t || ez(18, e), t);
            }
            function e6(e, t) {
                t && (e4('Patches'), (e.u = []), (e.s = []), (e.v = t));
            }
            function e8(e) {
                (e9(e), e.p.forEach(te), (e.p = null));
            }
            function e9(e) {
                e === tf && (tf = e.l);
            }
            function e7(e) {
                return (tf = {p: [], l: tf, h: e, m: !0, _: 0});
            }
            function te(e) {
                var t = e[tS];
                0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
            }
            function tt(e, t) {
                t._ = t.p.length;
                var r = t.p[0],
                    n = void 0 !== e && e !== r;
                return (
                    t.h.O || e4('ES5').S(t, e, n),
                    n
                        ? (r[tS].P && (e8(t), ez(4)),
                          eH(e) && ((e = tr(t, e)), t.l || ta(t, e)),
                          t.u && e4('Patches').M(r[tS].t, e, t.u, t.s))
                        : (e = tr(t, r, [])),
                    e8(t),
                    t.u && t.v(t.u, t.s),
                    e !== tm ? e : void 0
                );
            }
            function tr(e, t, r) {
                if (e3(t)) return t;
                var n = t[tS];
                if (!n)
                    return (
                        eY(
                            t,
                            function (a, i) {
                                return tn(e, n, t, a, i, r);
                            },
                            !0,
                        ),
                        t
                    );
                if (n.A !== e) return t;
                if (!n.P) return (ta(e, n.t, !0), n.t);
                if (!n.I) {
                    ((n.I = !0), n.A._--);
                    var a = 4 === n.i || 5 === n.i ? (n.o = e1(n.k)) : n.o,
                        i = a,
                        s = !1;
                    (3 === n.i && ((i = new Set(a)), a.clear(), (s = !0)),
                        eY(i, function (t, i) {
                            return tn(e, n, a, t, i, r, s);
                        }),
                        ta(e, a, !1),
                        r && e.u && e4('Patches').N(n, r, e.u, e.s));
                }
                return n.o;
            }
            function tn(e, t, r, n, a, i, s) {
                if (eB(a)) {
                    var o = tr(e, a, i && t && 3 !== t.i && !eJ(t.R, n) ? i.concat(n) : void 0);
                    if ((eK(r, n, o), !eB(o))) return;
                    e.m = !1;
                } else s && r.add(a);
                if (eH(a) && !e3(a)) {
                    if (!e.h.D && e._ < 1) return;
                    (tr(e, a), (t && t.A.l) || ta(e, a));
                }
            }
            function ta(e, t, r) {
                (void 0 === r && (r = !1), !e.l && e.h.D && e.m && e2(t, r));
            }
            function ti(e, t) {
                var r = e[tS];
                return (r ? e0(r) : e)[t];
            }
            function ts(e, t) {
                if (t in e)
                    for (var r = Object.getPrototypeOf(e); r; ) {
                        var n = Object.getOwnPropertyDescriptor(r, t);
                        if (n) return n;
                        r = Object.getPrototypeOf(r);
                    }
            }
            function to(e) {
                e.P || ((e.P = !0), e.l && to(e.l));
            }
            function tl(e) {
                e.o || (e.o = e1(e.t));
            }
            function tu(e, t, r) {
                var n,
                    a,
                    i,
                    s,
                    o,
                    l,
                    u,
                    c = eZ(t)
                        ? e4('MapSet').F(t, r)
                        : eX(t)
                          ? e4('MapSet').T(t, r)
                          : e.O
                            ? ((i = a =
                                  {
                                      i: (n = Array.isArray(t)) ? 1 : 0,
                                      A: r ? r.A : tf,
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
                              (s = tk),
                              n && ((i = [a]), (s = tO)),
                              (l = (o = Proxy.revocable(i, s)).revoke),
                              (u = o.proxy),
                              (a.k = u),
                              (a.j = l),
                              u)
                            : e4('ES5').J(t, r);
                return ((r ? r.A : tf).p.push(c), c);
            }
            function tc(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e);
                }
                return e1(e);
            }
            var td,
                tf,
                tp = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
                th = 'undefined' != typeof Map,
                tg = 'undefined' != typeof Set,
                tv = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
                tm = tp ? Symbol.for('immer-nothing') : (((td = {})['immer-nothing'] = !0), td),
                ty = tp ? Symbol.for('immer-draftable') : '__$immer_draftable',
                tS = tp ? Symbol.for('immer-state') : '__$immer_state',
                tb = '' + Object.prototype.constructor,
                tw =
                    'undefined' != typeof Reflect && Reflect.ownKeys
                        ? Reflect.ownKeys
                        : void 0 !== Object.getOwnPropertySymbols
                          ? function (e) {
                                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                            }
                          : Object.getOwnPropertyNames,
                tC =
                    Object.getOwnPropertyDescriptors ||
                    function (e) {
                        var t = {};
                        return (
                            tw(e).forEach(function (r) {
                                t[r] = Object.getOwnPropertyDescriptor(e, r);
                            }),
                            t
                        );
                    },
                tI = {},
                tk = {
                    get: function (e, t) {
                        if (t === tS) return e;
                        var r,
                            n,
                            a = e0(e);
                        if (!eJ(a, t))
                            return (n = ts(a, t))
                                ? 'value' in n
                                    ? n.value
                                    : null === (r = n.get) || void 0 === r
                                      ? void 0
                                      : r.call(e.k)
                                : void 0;
                        var i = a[t];
                        return e.I || !eH(i) ? i : i === ti(e.t, t) ? (tl(e), (e.o[t] = tu(e.A.h, i, e))) : i;
                    },
                    has: function (e, t) {
                        return t in e0(e);
                    },
                    ownKeys: function (e) {
                        return Reflect.ownKeys(e0(e));
                    },
                    set: function (e, t, r) {
                        var n = ts(e0(e), t);
                        if (null == n ? void 0 : n.set) return (n.set.call(e.k, r), !0);
                        if (!e.P) {
                            var a = ti(e0(e), t),
                                i = null == a ? void 0 : a[tS];
                            if (i && i.t === r) return ((e.o[t] = r), (e.R[t] = !1), !0);
                            if (eG(r, a) && (void 0 !== r || eJ(e.t, t))) return !0;
                            (tl(e), to(e));
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
                            void 0 !== ti(e.t, t) || t in e.t ? ((e.R[t] = !1), tl(e), to(e)) : delete e.R[t],
                            e.o && delete e.o[t],
                            !0
                        );
                    },
                    getOwnPropertyDescriptor: function (e, t) {
                        var r = e0(e),
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
                        ez(11);
                    },
                    getPrototypeOf: function (e) {
                        return Object.getPrototypeOf(e.t);
                    },
                    setPrototypeOf: function () {
                        ez(12);
                    },
                },
                tO = {};
            (eY(tk, function (e, t) {
                tO[e] = function () {
                    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
                };
            }),
                (tO.deleteProperty = function (e, t) {
                    return tO.set.call(this, e, t, void 0);
                }),
                (tO.set = function (e, t, r) {
                    return tk.set.call(this, e[0], t, r, e[0]);
                }));
            var tq = new ((function () {
                    function e(e) {
                        var t = this;
                        ((this.O = tv),
                            (this.D = !0),
                            (this.produce = function (e, r, n) {
                                if ('function' == typeof e && 'function' != typeof r) {
                                    var a,
                                        i = r;
                                    return (
                                        (r = e),
                                        function (e) {
                                            var n = this;
                                            void 0 === e && (e = i);
                                            for (
                                                var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1;
                                                o < a;
                                                o++
                                            )
                                                s[o - 1] = arguments[o];
                                            return t.produce(e, function (e) {
                                                var t;
                                                return (t = r).call.apply(t, [n, e].concat(s));
                                            });
                                        }
                                    );
                                }
                                if (
                                    ('function' != typeof r && ez(6),
                                    void 0 !== n && 'function' != typeof n && ez(7),
                                    eH(e))
                                ) {
                                    var s = e7(t),
                                        o = tu(t, e, void 0),
                                        l = !0;
                                    try {
                                        ((a = r(o)), (l = !1));
                                    } finally {
                                        l ? e8(s) : e9(s);
                                    }
                                    return 'undefined' != typeof Promise && a instanceof Promise
                                        ? a.then(
                                              function (e) {
                                                  return (e6(s, n), tt(e, s));
                                              },
                                              function (e) {
                                                  throw (e8(s), e);
                                              },
                                          )
                                        : (e6(s, n), tt(a, s));
                                }
                                if (!e || 'object' != typeof e) {
                                    if (
                                        (void 0 === (a = r(e)) && (a = e),
                                        a === tm && (a = void 0),
                                        t.D && e2(a, !0),
                                        n)
                                    ) {
                                        var u = [],
                                            c = [];
                                        (e4('Patches').M(e, a, u, c), n(u, c));
                                    }
                                    return a;
                                }
                                ez(21, e);
                            }),
                            (this.produceWithPatches = function (e, r) {
                                if ('function' == typeof e)
                                    return function (r) {
                                        for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                                            a[i - 1] = arguments[i];
                                        return t.produceWithPatches(r, function (t) {
                                            return e.apply(void 0, [t].concat(a));
                                        });
                                    };
                                var n,
                                    a,
                                    i = t.produce(e, r, function (e, t) {
                                        ((n = e), (a = t));
                                    });
                                return 'undefined' != typeof Promise && i instanceof Promise
                                    ? i.then(function (e) {
                                          return [e, n, a];
                                      })
                                    : [i, n, a];
                            }),
                            'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                            'boolean' == typeof (null == e ? void 0 : e.autoFreeze) &&
                                this.setAutoFreeze(e.autoFreeze));
                    }
                    var t = e.prototype;
                    return (
                        (t.createDraft = function (e) {
                            (eH(e) || ez(8),
                                eB(e) &&
                                    (eB((t = e)) || ez(22, t),
                                    (e = (function e(t) {
                                        if (!eH(t)) return t;
                                        var r,
                                            n = t[tS],
                                            a = eW(t);
                                        if (n) {
                                            if (!n.P && (n.i < 4 || !e4('ES5').K(n))) return n.t;
                                            ((n.I = !0), (r = tc(t, a)), (n.I = !1));
                                        } else r = tc(t, a);
                                        return (
                                            eY(r, function (t, a) {
                                                var i;
                                                (n && (2 === eW((i = n.t)) ? i.get(t) : i[t]) === a) || eK(r, t, e(a));
                                            }),
                                            3 === a ? new Set(r) : r
                                        );
                                    })(t))));
                            var t,
                                r = e7(this),
                                n = tu(this, e, void 0);
                            return ((n[tS].C = !0), e9(r), n);
                        }),
                        (t.finishDraft = function (e, t) {
                            var r = (e && e[tS]).A;
                            return (e6(r, t), tt(void 0, r));
                        }),
                        (t.setAutoFreeze = function (e) {
                            this.D = e;
                        }),
                        (t.setUseProxies = function (e) {
                            (e && !tv && ez(20), (this.O = e));
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
                            var a = e4('Patches').$;
                            return eB(e)
                                ? a(e, t)
                                : this.produce(e, function (e) {
                                      return a(e, t);
                                  });
                        }),
                        e
                    );
                })())(),
                tx = tq.produce;
            function tE(e) {
                return (tE =
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
            function tR(e, t) {
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
            function tA(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? tR(Object(r), !0).forEach(function (t) {
                              !(function (e, t, r) {
                                  var n;
                                  ((n = (function (e, t) {
                                      if ('object' !== tE(e) || null === e) return e;
                                      var r = e[Symbol.toPrimitive];
                                      if (void 0 !== r) {
                                          var n = r.call(e, t || 'default');
                                          if ('object' !== tE(n)) return n;
                                          throw TypeError('@@toPrimitive must return a primitive value.');
                                      }
                                      return ('string' === t ? String : Number)(e);
                                  })(t, 'string')),
                                      (t = 'symbol' === tE(n) ? n : String(n)) in e
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
                          : tR(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function tF(e) {
                return (
                    'Minified Redux error #' +
                    e +
                    '; visit https://redux.js.org/Errors?code=' +
                    e +
                    ' for the full message or use the non-minified dev environment for full errors. '
                );
            }
            (tq.produceWithPatches.bind(tq),
                tq.setAutoFreeze.bind(tq),
                tq.setUseProxies.bind(tq),
                tq.applyPatches.bind(tq),
                tq.createDraft.bind(tq),
                tq.finishDraft.bind(tq));
            var tD = ('function' == typeof Symbol && Symbol.observable) || '@@observable',
                tj = function () {
                    return Math.random().toString(36).substring(7).split('').join('.');
                },
                tP = {
                    INIT: '@@redux/INIT' + tj(),
                    REPLACE: '@@redux/REPLACE' + tj(),
                    PROBE_UNKNOWN_ACTION: function () {
                        return '@@redux/PROBE_UNKNOWN_ACTION' + tj();
                    },
                };
            function tT(e) {
                for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                    var a = t[n];
                    'function' == typeof e[a] && (r[a] = e[a]);
                }
                var i,
                    s = Object.keys(r);
                try {
                    !(function (e) {
                        Object.keys(e).forEach(function (t) {
                            var r = e[t];
                            if (void 0 === r(void 0, {type: tP.INIT})) throw Error(tF(12));
                            if (void 0 === r(void 0, {type: tP.PROBE_UNKNOWN_ACTION()})) throw Error(tF(13));
                        });
                    })(r);
                } catch (e) {
                    i = e;
                }
                return function (e, t) {
                    if ((void 0 === e && (e = {}), i)) throw i;
                    for (var n = !1, a = {}, o = 0; o < s.length; o++) {
                        var l = s[o],
                            u = r[l],
                            c = e[l],
                            d = u(c, t);
                        if (void 0 === d) throw Error(tF(14));
                        ((a[l] = d), (n = n || d !== c));
                    }
                    return (n = n || s.length !== Object.keys(e).length) ? a : e;
                };
            }
            function tU() {
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
            function tV() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return function (e) {
                    return function () {
                        var r = e.apply(void 0, arguments),
                            n = function () {
                                throw Error(tF(15));
                            },
                            a = {
                                getState: r.getState,
                                dispatch: function () {
                                    return n.apply(void 0, arguments);
                                },
                            },
                            i = t.map(function (e) {
                                return e(a);
                            });
                        return ((n = tU.apply(void 0, i)(r.dispatch)), tA(tA({}, r), {}, {dispatch: n}));
                    };
                };
            }
            function tM(e) {
                return function (t) {
                    var r = t.dispatch,
                        n = t.getState;
                    return function (t) {
                        return function (a) {
                            return 'function' == typeof a ? a(r, n, e) : t(a);
                        };
                    };
                };
            }
            var tL = tM();
            tL.withExtraArgument = tM;
            var t$ =
                    ((rf = function (e, t) {
                        return (rf =
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
                        (rf(e, t),
                            (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
                    }),
                t_ = function (e, t) {
                    var r,
                        n,
                        a,
                        i,
                        s = {
                            label: 0,
                            sent: function () {
                                if (1 & a[0]) throw a[1];
                                return a[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (i = {next: o(0), throw: o(1), return: o(2)}),
                        'function' == typeof Symbol &&
                            (i[Symbol.iterator] = function () {
                                return this;
                            }),
                        i
                    );
                    function o(i) {
                        return function (o) {
                            return (function (i) {
                                if (r) throw TypeError('Generator is already executing.');
                                for (; s; )
                                    try {
                                        if (
                                            ((r = 1),
                                            n &&
                                                (a =
                                                    2 & i[0]
                                                        ? n.return
                                                        : i[0]
                                                          ? n.throw || ((a = n.return) && a.call(n), 0)
                                                          : n.next) &&
                                                !(a = a.call(n, i[1])).done)
                                        )
                                            return a;
                                        switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                                            case 0:
                                            case 1:
                                                a = i;
                                                break;
                                            case 4:
                                                return (s.label++, {value: i[1], done: !1});
                                            case 5:
                                                (s.label++, (n = i[1]), (i = [0]));
                                                continue;
                                            case 7:
                                                ((i = s.ops.pop()), s.trys.pop());
                                                continue;
                                            default:
                                                if (
                                                    !(a = (a = s.trys).length > 0 && a[a.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                                    s.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && s.label < a[1]) {
                                                    ((s.label = a[1]), (a = i));
                                                    break;
                                                }
                                                if (a && s.label < a[2]) {
                                                    ((s.label = a[2]), s.ops.push(i));
                                                    break;
                                                }
                                                (a[2] && s.ops.pop(), s.trys.pop());
                                                continue;
                                        }
                                        i = t.call(e, s);
                                    } catch (e) {
                                        ((i = [6, e]), (n = 0));
                                    } finally {
                                        r = a = 0;
                                    }
                                if (5 & i[0]) throw i[1];
                                return {value: i[0] ? i[1] : void 0, done: !0};
                            })([i, o]);
                        };
                    }
                },
                tN = function (e, t) {
                    for (var r = 0, n = t.length, a = e.length; r < n; r++, a++) e[a] = t[r];
                    return e;
                },
                tQ = Object.defineProperty,
                tz = Object.defineProperties,
                tB = Object.getOwnPropertyDescriptors,
                tH = Object.getOwnPropertySymbols,
                tY = Object.prototype.hasOwnProperty,
                tW = Object.prototype.propertyIsEnumerable,
                tJ = function (e, t, r) {
                    return t in e ? tQ(e, t, {enumerable: !0, configurable: !0, writable: !0, value: r}) : (e[t] = r);
                },
                tK = function (e, t) {
                    for (var r in t || (t = {})) tY.call(t, r) && tJ(e, r, t[r]);
                    if (tH)
                        for (var n = 0, a = tH(t); n < a.length; n++) {
                            var r = a[n];
                            tW.call(t, r) && tJ(e, r, t[r]);
                        }
                    return e;
                },
                tG = function (e, t) {
                    return tz(e, tB(t));
                },
                tZ =
                    'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                        : function () {
                              if (0 != arguments.length)
                                  return 'object' == typeof arguments[0] ? tU : tU.apply(null, arguments);
                          },
                tX = (function (e) {
                    function t() {
                        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                        var a = e.apply(this, r) || this;
                        return (Object.setPrototypeOf(a, t.prototype), a);
                    }
                    return (
                        t$(t, e),
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
                                ? new (t.bind.apply(t, tN([void 0], e[0].concat(this))))()
                                : new (t.bind.apply(t, tN([void 0], e.concat(this))))();
                        }),
                        t
                    );
                })(Array);
            function t0(e) {
                return eH(e) ? tx(e, function () {}) : e;
            }
            function t1(e, t) {
                function r() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    if (t) {
                        var a = t.apply(void 0, r);
                        if (!a) throw Error('prepareAction did not return an object');
                        return tK(
                            tK({type: e, payload: a.payload}, 'meta' in a && {meta: a.meta}),
                            'error' in a && {error: a.error},
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
            function t2(e, t, r, n) {
                void 0 === r && (r = []);
                var a,
                    i,
                    s,
                    o,
                    l,
                    u =
                        'function' == typeof t
                            ? ((i = {}),
                              (s = []),
                              t(
                                  (o = {
                                      addCase: function (e, t) {
                                          var r = 'string' == typeof e ? e : e.type;
                                          if (r in i)
                                              throw Error(
                                                  'addCase cannot be called with two reducers for the same action type',
                                              );
                                          return ((i[r] = t), o);
                                      },
                                      addMatcher: function (e, t) {
                                          return (s.push({matcher: e, reducer: t}), o);
                                      },
                                      addDefaultCase: function (e) {
                                          return ((a = e), o);
                                      },
                                  }),
                              ),
                              [i, s, a])
                            : [t, r, n],
                    c = u[0],
                    d = u[1],
                    f = u[2];
                if ('function' == typeof e)
                    l = function () {
                        return t0(e());
                    };
                else {
                    var p = t0(e);
                    l = function () {
                        return p;
                    };
                }
                function h(e, t) {
                    void 0 === e && (e = l());
                    var r = tN(
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
                            }).length && (r = [f]),
                        r.reduce(function (e, r) {
                            if (r) {
                                if (eB(e)) {
                                    var n = r(e, t);
                                    return void 0 === n ? e : n;
                                }
                                if (eH(e))
                                    return tx(e, function (e) {
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
                return ((h.getInitialState = l), h);
            }
            var t5 = function (e) {
                    void 0 === e && (e = 21);
                    for (var t = '', r = e; r--; )
                        t += 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[
                            (64 * Math.random()) | 0
                        ];
                    return t;
                },
                t3 = ['name', 'message', 'stack', 'code'],
                t4 = function (e, t) {
                    ((this.payload = e), (this.meta = t));
                },
                t6 = function (e, t) {
                    ((this.payload = e), (this.meta = t));
                },
                t8 = function (e) {
                    if ('object' == typeof e && null !== e) {
                        for (var t = {}, r = 0; r < t3.length; r++) {
                            var n = t3[r];
                            'string' == typeof e[n] && (t[n] = e[n]);
                        }
                        return t;
                    }
                    return {message: String(e)};
                };
            function t9(e, t, r) {
                var n = t1(e + '/fulfilled', function (e, t, r, n) {
                        return {
                            payload: e,
                            meta: tG(tK({}, n || {}), {arg: r, requestId: t, requestStatus: 'fulfilled'}),
                        };
                    }),
                    a = t1(e + '/pending', function (e, t, r) {
                        return {
                            payload: void 0,
                            meta: tG(tK({}, r || {}), {arg: t, requestId: e, requestStatus: 'pending'}),
                        };
                    }),
                    i = t1(e + '/rejected', function (e, t, n, a, i) {
                        return {
                            payload: a,
                            error: ((r && r.serializeError) || t8)(e || 'Rejected'),
                            meta: tG(tK({}, i || {}), {
                                arg: n,
                                requestId: t,
                                rejectedWithValue: !!a,
                                requestStatus: 'rejected',
                                aborted: (null == e ? void 0 : e.name) === 'AbortError',
                                condition: (null == e ? void 0 : e.name) === 'ConditionError',
                            }),
                        };
                    }),
                    s =
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
                        return function (o, l, u) {
                            var c,
                                d = (null == r ? void 0 : r.idGenerator) ? r.idGenerator(e) : t5(),
                                f = new s(),
                                p = new Promise(function (e, t) {
                                    return f.signal.addEventListener('abort', function () {
                                        return t({name: 'AbortError', message: c || 'Aborted'});
                                    });
                                }),
                                h = !1,
                                g = (function () {
                                    var s, c;
                                    return (
                                        (s = this),
                                        (c = function () {
                                            var s, c, g, v, m;
                                            return t_(this, function (y) {
                                                switch (y.label) {
                                                    case 0:
                                                        var S;
                                                        return (
                                                            y.trys.push([0, 4, , 5]),
                                                            null !==
                                                                (S = v =
                                                                    null == (s = null == r ? void 0 : r.condition)
                                                                        ? void 0
                                                                        : s.call(r, e, {getState: l, extra: u})) &&
                                                            'object' == typeof S &&
                                                            'function' == typeof S.then
                                                                ? [4, v]
                                                                : [3, 2]
                                                        );
                                                    case 1:
                                                        ((v = y.sent()), (y.label = 2));
                                                    case 2:
                                                        if (!1 === v)
                                                            throw {
                                                                name: 'ConditionError',
                                                                message:
                                                                    'Aborted due to condition callback returning false.',
                                                            };
                                                        return (
                                                            (h = !0),
                                                            o(
                                                                a(
                                                                    d,
                                                                    e,
                                                                    null == (c = null == r ? void 0 : r.getPendingMeta)
                                                                        ? void 0
                                                                        : c.call(
                                                                              r,
                                                                              {requestId: d, arg: e},
                                                                              {getState: l, extra: u},
                                                                          ),
                                                                ),
                                                            ),
                                                            [
                                                                4,
                                                                Promise.race([
                                                                    p,
                                                                    Promise.resolve(
                                                                        t(e, {
                                                                            dispatch: o,
                                                                            getState: l,
                                                                            extra: u,
                                                                            requestId: d,
                                                                            signal: f.signal,
                                                                            rejectWithValue: function (e, t) {
                                                                                return new t4(e, t);
                                                                            },
                                                                            fulfillWithValue: function (e, t) {
                                                                                return new t6(e, t);
                                                                            },
                                                                        }),
                                                                    ).then(function (t) {
                                                                        if (t instanceof t4) throw t;
                                                                        return t instanceof t6
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
                                                                (m = y.sent()) instanceof t4
                                                                    ? i(null, d, e, m.payload, m.meta)
                                                                    : i(m, d, e)),
                                                            [3, 5]
                                                        );
                                                    case 5:
                                                        return (
                                                            (r &&
                                                                !r.dispatchConditionRejection &&
                                                                i.match(g) &&
                                                                g.meta.condition) ||
                                                                o(g),
                                                            [2, g]
                                                        );
                                                }
                                            });
                                        }),
                                        new Promise(function (e, t) {
                                            var r = function (e) {
                                                    try {
                                                        a(c.next(e));
                                                    } catch (e) {
                                                        t(e);
                                                    }
                                                },
                                                n = function (e) {
                                                    try {
                                                        a(c.throw(e));
                                                    } catch (e) {
                                                        t(e);
                                                    }
                                                },
                                                a = function (t) {
                                                    return t.done ? e(t.value) : Promise.resolve(t.value).then(r, n);
                                                };
                                            a((c = c.apply(s, null)).next());
                                        })
                                    );
                                })();
                            return Object.assign(g, {
                                abort: function (e) {
                                    h && ((c = e), f.abort());
                                },
                                requestId: d,
                                arg: e,
                                unwrap: function () {
                                    return g.then(t7);
                                },
                            });
                        };
                    },
                    {pending: a, rejected: i, fulfilled: n, typePrefix: e},
                );
            }
            function t7(e) {
                if (e.meta && e.meta.rejectedWithValue) throw e.payload;
                if (e.error) throw e.error;
                return e.payload;
            }
            var re = 'listenerMiddleware';
            function rt(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                        0 > t.indexOf(n[a]) &&
                            Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                            (r[n[a]] = e[n[a]]);
                return r;
            }
            function rr(e, t, r, n) {
                return new (r || (r = Promise))(function (a, i) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            }
            function rn() {
                return 'undefined' != typeof navigator;
            }
            function ra() {
                return 'undefined' != typeof document;
            }
            function ri() {
                try {
                    return 'undefined' != typeof localStorage;
                } catch {
                    return !1;
                }
            }
            function rs() {
                return rn() && navigator.cookieEnabled;
            }
            (t1(re + '/add'),
                t1(re + '/removeAll'),
                t1(re + '/remove'),
                (function () {
                    function e(e, t) {
                        var r = a[e];
                        return (
                            r
                                ? (r.enumerable = t)
                                : (a[e] = r =
                                      {
                                          configurable: !0,
                                          enumerable: t,
                                          get: function () {
                                              var t = this[tS];
                                              return tk.get(t, e);
                                          },
                                          set: function (t) {
                                              var r = this[tS];
                                              tk.set(r, e, t);
                                          },
                                      }),
                            r
                        );
                    }
                    function t(e) {
                        for (var t = e.length - 1; t >= 0; t--) {
                            var a = e[t][tS];
                            if (!a.P)
                                switch (a.i) {
                                    case 5:
                                        n(a) && to(a);
                                        break;
                                    case 4:
                                        r(a) && to(a);
                                }
                        }
                    }
                    function r(e) {
                        for (var t = e.t, r = e.k, n = tw(r), a = n.length - 1; a >= 0; a--) {
                            var i = n[a];
                            if (i !== tS) {
                                var s = t[i];
                                if (void 0 === s && !eJ(t, i)) return !0;
                                var o = r[i],
                                    l = o && o[tS];
                                if (l ? l.t !== s : !eG(o, s)) return !0;
                            }
                        }
                        var u = !!t[tS];
                        return n.length !== tw(t).length + (u ? 0 : 1);
                    }
                    function n(e) {
                        var t = e.k;
                        if (t.length !== e.t.length) return !0;
                        var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
                        if (r && !r.get) return !0;
                        for (var n = 0; n < t.length; n++) if (!t.hasOwnProperty(n)) return !0;
                        return !1;
                    }
                    var a = {};
                    tI.ES5 ||
                        (tI.ES5 = {
                            J: function (t, r) {
                                var n = Array.isArray(t),
                                    a = (function (t, r) {
                                        if (t) {
                                            for (var n = Array(r.length), a = 0; a < r.length; a++)
                                                Object.defineProperty(n, '' + a, e(a, !0));
                                            return n;
                                        }
                                        var i = tC(r);
                                        delete i[tS];
                                        for (var s = tw(i), o = 0; o < s.length; o++) {
                                            var l = s[o];
                                            i[l] = e(l, t || !!i[l].enumerable);
                                        }
                                        return Object.create(Object.getPrototypeOf(r), i);
                                    })(n, t),
                                    i = {
                                        i: n ? 5 : 4,
                                        A: r ? r.A : tf,
                                        P: !1,
                                        I: !1,
                                        R: {},
                                        l: r,
                                        t: t,
                                        k: a,
                                        o: null,
                                        g: !1,
                                        C: !1,
                                    };
                                return (Object.defineProperty(a, tS, {value: i, writable: !0}), a);
                            },
                            S: function (e, r, a) {
                                a
                                    ? eB(r) && r[tS].A === e && t(e.p)
                                    : (e.u &&
                                          (function e(t) {
                                              if (t && 'object' == typeof t) {
                                                  var r = t[tS];
                                                  if (r) {
                                                      var a = r.t,
                                                          i = r.k,
                                                          s = r.R,
                                                          o = r.i;
                                                      if (4 === o)
                                                          (eY(i, function (t) {
                                                              t !== tS &&
                                                                  (void 0 !== a[t] || eJ(a, t)
                                                                      ? s[t] || e(i[t])
                                                                      : ((s[t] = !0), to(r)));
                                                          }),
                                                              eY(a, function (e) {
                                                                  void 0 !== i[e] || eJ(i, e) || ((s[e] = !1), to(r));
                                                              }));
                                                      else if (5 === o) {
                                                          if ((n(r) && (to(r), (s.length = !0)), i.length < a.length))
                                                              for (var l = i.length; l < a.length; l++) s[l] = !1;
                                                          else for (var u = a.length; u < i.length; u++) s[u] = !0;
                                                          for (var c = Math.min(i.length, a.length), d = 0; d < c; d++)
                                                              (i.hasOwnProperty(d) || (s[d] = !0),
                                                                  void 0 === s[d] && e(i[d]));
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
                ((rp = rh || (rh = {})).search = 'search'),
                (rp.click = 'click'),
                (rp.custom = 'custom'),
                (rp.view = 'view'),
                (rp.collect = 'collect'));
            var ro = [rh.click, rh.custom, rh.search, rh.view],
                rl = (e, t) =>
                    -1 !== ro.indexOf(e)
                        ? Object.assign(
                              {
                                  language: ra() ? document.documentElement.lang : 'unknown',
                                  userAgent: rn() ? navigator.userAgent : 'unknown',
                              },
                              t,
                          )
                        : t,
                ru = class {
                    static set(e, t, r) {
                        var n, a, i;
                        (r && (n = new Date()).setTime(n.getTime() + r),
                            -1 === (i = window.location.hostname).indexOf('.')
                                ? rc(e, t, n)
                                : rc(e, t, n, (a = i.split('.'))[a.length - 2] + '.' + a[a.length - 1]));
                    }
                    static get(e) {
                        for (var t = e + '=', r = document.cookie.split(';'), n = 0; n < r.length; n++) {
                            var a = r[n];
                            if (0 === (a = a.replace(/^\s+/, '')).lastIndexOf(t, 0))
                                return a.substring(t.length, a.length);
                        }
                        return null;
                    }
                    static erase(e) {
                        ru.set(e, '', -1);
                    }
                };
            function rc(e, t, r, n) {
                document.cookie =
                    `${e}=${t}` +
                    (r ? `;expires=${r.toUTCString()}` : '') +
                    (n ? `;domain=${n}` : '') +
                    ';path=/;SameSite=Lax';
            }
            var rd = class {
                getItem(e) {
                    return ru.get(`${rd.prefix}${e}`);
                }
                removeItem(e) {
                    ru.erase(`${rd.prefix}${e}`);
                }
                setItem(e, t, r) {
                    ru.set(`${rd.prefix}${e}`, t, r);
                }
            };
            rd.prefix = 'coveo_';
            var rf,
                rp,
                rh,
                rg,
                rv = class {
                    constructor() {
                        this.cookieStorage = new rd();
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
                rm = class {
                    getItem(e) {
                        return null;
                    }
                    removeItem(e) {}
                    setItem(e, t) {}
                },
                ry = '__coveo.analytics.history',
                rS = class {
                    constructor(e) {
                        this.store =
                            e ||
                            (ri()
                                ? localStorage
                                : rs()
                                  ? new rd()
                                  : !(function () {
                                          try {
                                              return 'undefined' != typeof sessionStorage;
                                          } catch {
                                              return !1;
                                          }
                                      })()
                                    ? new rm()
                                    : sessionStorage);
                    }
                    addElement(e) {
                        ((e.internalTime = new Date().getTime()), (e = this.cropQueryElement(this.stripEmptyQuery(e))));
                        let t = this.getHistoryWithInternalTime();
                        null != t ? this.isValidEntry(e) && this.setHistory([e].concat(t)) : this.setHistory([e]);
                    }
                    addElementAsync(e) {
                        return rr(this, void 0, void 0, function* () {
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
                        return rr(this, void 0, void 0, function* () {
                            let e = yield this.getHistoryWithInternalTimeAsync();
                            return this.stripEmptyQueries(this.stripInternalTime(e));
                        });
                    }
                    getHistoryWithInternalTime() {
                        try {
                            let e = this.store.getItem(ry);
                            return e && 'string' == typeof e ? JSON.parse(e) : [];
                        } catch {
                            return [];
                        }
                    }
                    getHistoryWithInternalTimeAsync() {
                        return rr(this, void 0, void 0, function* () {
                            try {
                                let e = yield this.store.getItem(ry);
                                return e ? JSON.parse(e) : [];
                            } catch {
                                return [];
                            }
                        });
                    }
                    setHistory(e) {
                        try {
                            this.store.setItem(ry, JSON.stringify(e.slice(0, 20)));
                        } catch {}
                    }
                    clear() {
                        try {
                            this.store.removeItem(ry);
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
                rb = Object.freeze({
                    __proto__: null,
                    HistoryStore: rS,
                    MAX_NUMBER_OF_HISTORY_ELEMENTS: 20,
                    MAX_VALUE_SIZE: 75,
                    MIN_THRESHOLD_FOR_DUPLICATE_VALUE: 6e4,
                    STORE_KEY: ry,
                    default: rS,
                }),
                rw = (e, t) =>
                    rr(void 0, void 0, void 0, function* () {
                        return e === rh.view
                            ? (yield rC(t.contentIdValue),
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
                rC = (e) =>
                    rr(void 0, void 0, void 0, function* () {
                        let t = new rS(),
                            r = {name: 'PageView', value: e, time: new Date().toISOString()};
                        yield t.addElementAsync(r);
                    }),
                rI = new Uint8Array(16),
                rk =
                    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            function rO(e) {
                return 'string' == typeof e && rk.test(e);
            }
            var rq = [];
            for (let e = 0; e < 256; ++e) rq.push((e + 256).toString(16).slice(1));
            function rx(e, t = 0) {
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
            var rE = {randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)};
            function rR(e, t, r) {
                if (rE.randomUUID && !t && !e) return rE.randomUUID();
                let n =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (
                                !rg &&
                                !(rg =
                                    'undefined' != typeof crypto &&
                                    crypto.getRandomValues &&
                                    crypto.getRandomValues.bind(crypto))
                            )
                                throw Error(
                                    'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
                                );
                            return rg(rI);
                        }
                    )();
                if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = n[e];
                    return t;
                }
                return rx(n);
            }
            function rA(e, t) {
                return (e << t) | (e >>> (32 - t));
            }
            var rF = (function (e, t, r) {
                    function n(e, t, n, a) {
                        var i;
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
                                    if (!rO(e)) throw TypeError('Invalid UUID');
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
                            (null === (i = t) || void 0 === i ? void 0 : i.length) !== 16)
                        )
                            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
                        let s = new Uint8Array(16 + e.length);
                        if (
                            (s.set(t),
                            s.set(e, t.length),
                            ((s = r(s))[6] = (15 & s[6]) | 80),
                            (s[8] = (63 & s[8]) | 128),
                            n)
                        ) {
                            a = a || 0;
                            for (let e = 0; e < 16; ++e) n[a + e] = s[e];
                            return n;
                        }
                        return rx(s);
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
                        a = Array(n);
                    for (let t = 0; t < n; ++t) {
                        let r = new Uint32Array(16);
                        for (let n = 0; n < 16; ++n)
                            r[n] =
                                (e[64 * t + 4 * n] << 24) |
                                (e[64 * t + 4 * n + 1] << 16) |
                                (e[64 * t + 4 * n + 2] << 8) |
                                e[64 * t + 4 * n + 3];
                        a[t] = r;
                    }
                    ((a[n - 1][14] = ((e.length - 1) * 8) / 4294967296),
                        (a[n - 1][14] = Math.floor(a[n - 1][14])),
                        (a[n - 1][15] = ((e.length - 1) * 8) & 4294967295));
                    for (let e = 0; e < n; ++e) {
                        let n = new Uint32Array(80);
                        for (let t = 0; t < 16; ++t) n[t] = a[e][t];
                        for (let e = 16; e < 80; ++e) n[e] = rA(n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16], 1);
                        let i = r[0],
                            s = r[1],
                            o = r[2],
                            l = r[3],
                            u = r[4];
                        for (let e = 0; e < 80; ++e) {
                            let r = Math.floor(e / 20),
                                a =
                                    (rA(i, 5) +
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
                                        })(r, s, o, l) +
                                        u +
                                        t[r] +
                                        n[e]) >>>
                                    0;
                            ((u = l), (l = o), (o = rA(s, 30) >>> 0), (s = i), (i = a));
                        }
                        ((r[0] = (r[0] + i) >>> 0),
                            (r[1] = (r[1] + s) >>> 0),
                            (r[2] = (r[2] + o) >>> 0),
                            (r[3] = (r[3] + l) >>> 0),
                            (r[4] = (r[4] + u) >>> 0));
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
                rD = '2.28.12',
                rj = class {
                    constructor(e, t) {
                        if (!rO(e)) throw Error('Not a valid uuid');
                        ((this.clientId = e), (this.creationDate = Math.floor(t / 1e3)));
                    }
                    toString() {
                        return this.clientId.replace(/-/g, '') + '.' + this.creationDate.toString();
                    }
                    get expired() {
                        let e = Math.floor(Date.now() / 1e3) - this.creationDate;
                        return e < 0 || e > rj.expirationTime;
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
                        let a =
                            r.substring(0, 8) +
                            '-' +
                            r.substring(8, 12) +
                            '-' +
                            r.substring(12, 16) +
                            '-' +
                            r.substring(16, 20) +
                            '-' +
                            r.substring(20, 32);
                        return rO(a) ? new rj(a, 1e3 * Number.parseInt(n)) : null;
                    }
                };
            ((rj.cvo_cid = 'cvo_cid'), (rj.expirationTime = 120));
            var rP = Object.keys;
            function rT(e) {
                return null !== e && 'object' == typeof e && !Array.isArray(e);
            }
            var rU = {
                    id: 'svc_ticket_id',
                    subject: 'svc_ticket_subject',
                    description: 'svc_ticket_description',
                    category: 'svc_ticket_category',
                    productId: 'svc_ticket_product_id',
                    custom: 'svc_ticket_custom',
                },
                rV = RegExp(`^(${[...rP(rU).map((e) => rU[e])].join('|')}$)`),
                rM = [(e) => rV.test(e)],
                rL = {
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
                r$ = {
                    id: 'id',
                    name: 'nm',
                    brand: 'br',
                    category: 'ca',
                    variant: 'va',
                    position: 'ps',
                    price: 'pr',
                    group: 'group',
                },
                r_ = {action: 'pa', list: 'pal', listSource: 'pls'},
                rN = {
                    id: 'ti',
                    revenue: 'tr',
                    tax: 'tt',
                    shipping: 'ts',
                    coupon: 'tcc',
                    affiliation: 'ta',
                    step: 'cos',
                    option: 'col',
                },
                rQ = {id: 'quoteId', affiliation: 'quoteAffiliation'},
                rz = {id: 'reviewId', rating: 'reviewRating', comment: 'reviewComment'},
                rB = {
                    add: r_,
                    bookmark_add: r_,
                    bookmark_remove: r_,
                    click: r_,
                    checkout: r_,
                    checkout_option: r_,
                    detail: r_,
                    impression: r_,
                    remove: r_,
                    refund: Object.assign(Object.assign({}, r_), rN),
                    purchase: Object.assign(Object.assign({}, r_), rN),
                    quickview: r_,
                    quote: Object.assign(Object.assign({}, r_), rQ),
                    review: Object.assign(Object.assign({}, r_), rz),
                },
                rH = rP(rL).map((e) => rL[e]),
                rY = rP(r$).map((e) => r$[e]),
                rW = rP(r_).map((e) => r_[e]),
                rJ = rP(rN).map((e) => rN[e]),
                rK = rP(rz).map((e) => rz[e]),
                rG = rP(rQ).map((e) => rQ[e]),
                rZ = [...rH, 'custom'].join('|'),
                rX = [...rY, 'custom'].join('|'),
                r0 = '(pr[0-9]+)',
                r1 = '(il[0-9]+pi[0-9]+)',
                r2 = RegExp(`^${r0}(${rZ})$`),
                r5 = RegExp(`^(${r1}(${rX}))|(il[0-9]+nm)$`),
                r3 = RegExp(`^(${rW.join('|')})$`),
                r4 = RegExp(`^(${rJ.join('|')})$`),
                r6 = RegExp(`^${r0}custom$`),
                r8 = RegExp(`^${r1}custom$`),
                r9 = RegExp(
                    `^(${['loyaltyCardId', 'loyaltyTier', 'thirdPartyPersona', 'companyName', 'favoriteStore', 'storeName', 'userIndustry', 'userRole', 'userDepartment', 'businessUnit', ...rK, ...rG].join('|')})$`,
                ),
                r7 = [(e) => r5.test(e), (e) => r2.test(e), (e) => r3.test(e), (e) => r4.test(e), (e) => r9.test(e)],
                ne = [r6, r8],
                nt = Object.assign(
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
                nr = (e) => {
                    let t = (!!e.action && rB[e.action]) || {};
                    return rP(e).reduce((r, n) => {
                        let a = t[n] || nt[n] || n;
                        return Object.assign(Object.assign({}, r), {[a]: e[n]});
                    }, {});
                },
                nn = rP(nt).map((e) => nt[e]),
                na = (e) => -1 !== nn.indexOf(e),
                ni = (e) => 'custom' === e,
                ns = (e) => [...r7, ...rM, na, ni].some((t) => t(e)),
                no = (e) =>
                    rP(e).reduce((t, r) => {
                        let n = nl(r);
                        return n
                            ? Object.assign(Object.assign({}, t), nu(n, e[r]))
                            : Object.assign(Object.assign({}, t), {[r]: e[r]});
                    }, {}),
                nl = (e) => {
                    let t;
                    return (
                        [...ne].every((r) => {
                            var n;
                            return !(t = null === (n = r.exec(e)) || void 0 === n ? void 0 : n[1]);
                        }),
                        t
                    );
                },
                nu = (e, t) => rP(t).reduce((r, n) => Object.assign(Object.assign({}, r), {[`${e}${n}`]: t[n]}), {}),
                nc = class {
                    constructor(e) {
                        this.opts = e;
                    }
                    sendEvent(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            if (!navigator.sendBeacon)
                                throw Error(
                                    'navigator.sendBeacon is not supported in this browser. Consider adding a polyfill like "sendbeacon-polyfill".',
                                );
                            let {baseUrl: r, preprocessRequest: n} = this.opts,
                                a = this.encodeForEventType(e, t),
                                i = {
                                    url: `${r}/analytics/${e}?${yield this.getQueryParamsForEventType(e)}`,
                                    body: new Blob([a], {type: 'application/x-www-form-urlencoded'}),
                                },
                                {url: s, body: o} = Object.assign(
                                    Object.assign({}, i),
                                    n ? yield n(i, 'analyticsBeacon') : {},
                                );
                            (console.log(`Sending beacon for "${e}" with: `, JSON.stringify(t)),
                                navigator.sendBeacon(s, o));
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
                        return rr(this, void 0, void 0, function* () {
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
                        return -1 !== [rh.click, rh.custom, rh.search, rh.view].indexOf(e);
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
                nd = class {
                    sendEvent(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return Promise.resolve();
                        });
                    }
                    deleteHttpCookieVisitorId() {
                        return rr(this, void 0, void 0, function* () {
                            return Promise.resolve();
                        });
                    }
                },
                nf = window.fetch,
                np = class {
                    constructor(e) {
                        this.opts = e;
                    }
                    sendEvent(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            let {baseUrl: r, visitorIdProvider: n, preprocessRequest: a} = this.opts,
                                i = {
                                    url: `${r}/analytics/${e}${this.shouldAppendVisitorId(e) ? yield this.getVisitorIdParam() : ''}`,
                                    credentials: 'include',
                                    mode: 'cors',
                                    headers: this.getHeaders(),
                                    method: 'POST',
                                    body: JSON.stringify(t),
                                },
                                s = Object.assign(Object.assign({}, i), a ? yield a(i, 'analyticsFetch') : {}),
                                {url: o} = s,
                                l = rt(s, ['url']),
                                u = yield nf(o, l);
                            if (u.ok) {
                                let e = yield u.json();
                                return (e.visitorId && n.setCurrentVisitorId(e.visitorId), e);
                            }
                            try {
                                u.json();
                            } catch {}
                            throw (
                                console.error(`An error has occured when sending the "${e}" event.`, u, t),
                                Error(
                                    `An error has occurred when sending the "${e}" event. Check the console logs for more details.`,
                                )
                            );
                        });
                    }
                    deleteHttpCookieVisitorId() {
                        return rr(this, void 0, void 0, function* () {
                            let {baseUrl: e} = this.opts,
                                t = `${e}/analytics/visit`;
                            yield nf(t, {headers: this.getHeaders(), method: 'DELETE'});
                        });
                    }
                    shouldAppendVisitorId(e) {
                        return -1 !== [rh.click, rh.custom, rh.search, rh.view].indexOf(e);
                    }
                    getVisitorIdParam() {
                        return rr(this, void 0, void 0, function* () {
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
                nh = class {
                    constructor(e, t) {
                        (ri() && rs()
                            ? (this.storage = new rv())
                            : ri()
                              ? (this.storage = localStorage)
                              : (console.warn('BrowserRuntime detected no valid storage available.', this),
                                (this.storage = new rm())),
                            (this.client = new np(e)),
                            (this.beaconClient = new nc(e)),
                            window.addEventListener('beforeunload', () => {
                                for (let {eventType: e, payload: r} of t()) this.beaconClient.sendEvent(e, r);
                            }));
                    }
                },
                ng = class {
                    constructor(e, t) {
                        ((this.storage = t || new rm()), (this.client = new np(e)));
                    }
                },
                nv = class {
                    constructor() {
                        ((this.storage = new rm()), (this.client = new nd()));
                    }
                },
                nm = (e) => (null == e ? void 0 : e.startsWith('xx')) || !1,
                ny = `
        We've detected you're using React Native but have not provided the corresponding runtime, 
        for an optimal experience please use the "coveo.analytics/react-native" subpackage.
        Follow the Readme on how to set it up: https://github.com/coveo/coveo.analytics.js#using-react-native
    `,
                nS = ['1', 1, 'yes', !0];
            function nb() {
                return (
                    rn() &&
                    [
                        navigator.globalPrivacyControl,
                        navigator.doNotTrack,
                        navigator.msDoNotTrack,
                        window.doNotTrack,
                    ].some((e) => -1 !== nS.indexOf(e))
                );
            }
            var nw,
                nC = {default: 'https://analytics.cloud.coveo.com/rest/ua'},
                nI = class {
                    get defaultOptions() {
                        return {
                            endpoint: nC.default,
                            isCustomEndpoint: !1,
                            token: '',
                            version: 'v15',
                            beforeSendHooks: [],
                            afterSendHooks: [],
                        };
                    }
                    get version() {
                        return rD;
                    }
                    constructor(e) {
                        if (((this.acceptedLinkReferrers = []), !e))
                            throw Error('You have to pass options to this constructor');
                        ((this.options = Object.assign(Object.assign({}, this.defaultOptions), e)),
                            (this.visitorId = ''),
                            (this.bufferedRequests = []),
                            (this.beforeSendHooks = [rw, rl].concat(this.options.beforeSendHooks)),
                            (this.afterSendHooks = this.options.afterSendHooks),
                            (this.eventTypeMapping = {}));
                        let t = {
                            baseUrl: this.baseUrl,
                            token: this.options.token,
                            visitorIdProvider: this,
                            preprocessRequest: this.options.preprocessRequest,
                        };
                        ((this.runtime = this.options.runtimeEnvironment || this.initRuntime(t)),
                            nb() && (this.clear(), (this.runtime.storage = new rm())));
                    }
                    initRuntime(e) {
                        return 'undefined' != typeof window && ra()
                            ? new nh(e, () => {
                                  let e = [...this.bufferedRequests];
                                  return ((this.bufferedRequests = []), e);
                              })
                            : ('undefined' != typeof navigator &&
                                  'ReactNative' == navigator.product &&
                                  console.warn(ny),
                              new ng(e));
                    }
                    get storage() {
                        return this.runtime.storage;
                    }
                    determineVisitorId() {
                        return rr(this, void 0, void 0, function* () {
                            try {
                                return (
                                    this.extractClientIdFromLink(window.location.href) ||
                                    (yield this.storage.getItem('visitorId')) ||
                                    rR()
                                );
                            } catch (e) {
                                return (
                                    console.log(
                                        'Could not get visitor ID from the current runtime environment storage. Using a random ID instead.',
                                        e,
                                    ),
                                    rR()
                                );
                            }
                        });
                    }
                    getCurrentVisitorId() {
                        return rr(this, void 0, void 0, function* () {
                            if (!this.visitorId) {
                                let e = yield this.determineVisitorId();
                                yield this.setCurrentVisitorId(e);
                            }
                            return this.visitorId;
                        });
                    }
                    setCurrentVisitorId(e) {
                        return rr(this, void 0, void 0, function* () {
                            ((this.visitorId = e), yield this.storage.setItem('visitorId', e));
                        });
                    }
                    setClientId(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            if (rO(e)) this.setCurrentVisitorId(e.toLowerCase());
                            else {
                                if (!t)
                                    throw Error('Cannot generate uuid client id without a specific namespace string.');
                                this.setCurrentVisitorId(rF(e, rF(t, '38824e1f-37f5-42d3-8372-a4b8fa9df946')));
                            }
                        });
                    }
                    getParameters(e, ...t) {
                        return rr(this, void 0, void 0, function* () {
                            return yield this.resolveParameters(e, ...t);
                        });
                    }
                    getPayload(e, ...t) {
                        return rr(this, void 0, void 0, function* () {
                            let r = yield this.resolveParameters(e, ...t);
                            return yield this.resolvePayloadForParameters(e, r);
                        });
                    }
                    get currentVisitorId() {
                        return (
                            'string' != typeof (this.visitorId || this.storage.getItem('visitorId')) &&
                                this.setCurrentVisitorId(rR()),
                            this.visitorId
                        );
                    }
                    set currentVisitorId(e) {
                        ((this.visitorId = e), this.storage.setItem('visitorId', e));
                    }
                    extractClientIdFromLink(e) {
                        if (nb()) return null;
                        try {
                            let t = new URL(e).searchParams.get(rj.cvo_cid);
                            if (null == t) return null;
                            let r = rj.fromString(t);
                            return r && ra() && r.validate(document.referrer, this.acceptedLinkReferrers)
                                ? r.clientId
                                : null;
                        } catch {}
                        return null;
                    }
                    resolveParameters(e, ...t) {
                        return rr(this, void 0, void 0, function* () {
                            let {
                                variableLengthArgumentsNames: r = [],
                                addVisitorIdParameter: n = !1,
                                usesMeasurementProtocol: a = !1,
                                addClientIdParameter: i = !1,
                            } = this.eventTypeMapping[e] || {};
                            return yield [
                                (e) => (r.length > 0 ? this.parseVariableArgumentsPayload(r, e) : e[0]),
                                (e) =>
                                    rr(this, void 0, void 0, function* () {
                                        return Object.assign(Object.assign({}, e), {
                                            visitorId: n ? yield this.getCurrentVisitorId() : '',
                                        });
                                    }),
                                (e) =>
                                    rr(this, void 0, void 0, function* () {
                                        return i
                                            ? Object.assign(Object.assign({}, e), {
                                                  clientId: yield this.getCurrentVisitorId(),
                                              })
                                            : e;
                                    }),
                                (e) => (a ? this.ensureAnonymousUserWhenUsingApiKey(e) : e),
                                (t) =>
                                    this.beforeSendHooks.reduce(
                                        (t, r) =>
                                            rr(this, void 0, void 0, function* () {
                                                let n = yield t;
                                                return yield r(e, n);
                                            }),
                                        t,
                                    ),
                            ].reduce(
                                (e, t) =>
                                    rr(this, void 0, void 0, function* () {
                                        let r = yield e;
                                        return yield t(r);
                                    }),
                                Promise.resolve(t),
                            );
                        });
                    }
                    resolvePayloadForParameters(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            let {usesMeasurementProtocol: r = !1} = this.eventTypeMapping[e] || {};
                            return yield [
                                (e) => this.setTrackingIdIfTrackingIdNotPresent(e),
                                (t) => this.removeEmptyPayloadValues(t, e),
                                (t) => this.validateParams(t, e),
                                (e) => (r ? nr(e) : e),
                                (e) => (r ? this.removeUnknownParameters(e) : e),
                                (e) => (r ? this.processCustomParameters(e) : this.mapCustomParametersToCustomData(e)),
                            ].reduce(
                                (e, t) =>
                                    rr(this, void 0, void 0, function* () {
                                        let r = yield e;
                                        return yield t(r);
                                    }),
                                Promise.resolve(t),
                            );
                        });
                    }
                    makeEvent(e, ...t) {
                        return rr(this, void 0, void 0, function* () {
                            let {newEventType: r = e} = this.eventTypeMapping[e] || {},
                                n = yield this.resolveParameters(e, ...t),
                                a = yield this.resolvePayloadForParameters(e, n);
                            return {
                                eventType: r,
                                payload: a,
                                log: (t) =>
                                    rr(this, void 0, void 0, function* () {
                                        return (
                                            this.bufferedRequests.push({
                                                eventType: r,
                                                payload: Object.assign(Object.assign({}, a), t),
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
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeEvent(e, ...t)).log({});
                        });
                    }
                    deferExecution() {
                        return new Promise((e) => setTimeout(e, 0));
                    }
                    sendFromBufferWithFetch() {
                        return rr(this, void 0, void 0, function* () {
                            let e = this.bufferedRequests.shift();
                            if (e) {
                                let {eventType: t, payload: r} = e;
                                return this.runtime.client.sendEvent(t, r);
                            }
                        });
                    }
                    clear() {
                        (this.storage.removeItem('visitorId'), new rS().clear());
                    }
                    deleteHttpOnlyVisitorId() {
                        this.runtime.client.deleteHttpCookieVisitorId();
                    }
                    makeSearchEvent(e) {
                        return rr(this, void 0, void 0, function* () {
                            return this.makeEvent(rh.search, e);
                        });
                    }
                    sendSearchEvent(e) {
                        var {searchQueryUid: t} = e,
                            r = rt(e, ['searchQueryUid']);
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeSearchEvent(r)).log({searchQueryUid: t});
                        });
                    }
                    makeClickEvent(e) {
                        return rr(this, void 0, void 0, function* () {
                            return this.makeEvent(rh.click, e);
                        });
                    }
                    sendClickEvent(e) {
                        var {searchQueryUid: t} = e,
                            r = rt(e, ['searchQueryUid']);
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeClickEvent(r)).log({searchQueryUid: t});
                        });
                    }
                    makeCustomEvent(e) {
                        return rr(this, void 0, void 0, function* () {
                            return this.makeEvent(rh.custom, e);
                        });
                    }
                    sendCustomEvent(e) {
                        var {lastSearchQueryUid: t} = e,
                            r = rt(e, ['lastSearchQueryUid']);
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEvent(r)).log({lastSearchQueryUid: t});
                        });
                    }
                    makeViewEvent(e) {
                        return rr(this, void 0, void 0, function* () {
                            return this.makeEvent(rh.view, e);
                        });
                    }
                    sendViewEvent(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeViewEvent(e)).log({});
                        });
                    }
                    getVisit() {
                        return rr(this, void 0, void 0, function* () {
                            let e = yield (yield fetch(`${this.baseUrl}/analytics/visit`)).json();
                            return ((this.visitorId = e.visitorId), e);
                        });
                    }
                    getHealth() {
                        return rr(this, void 0, void 0, function* () {
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
                        for (let n = 0, a = t.length; n < a; n++) {
                            let a = t[n];
                            if ('string' == typeof a) r[e[n]] = a;
                            else if ('object' == typeof a) return Object.assign(Object.assign({}, r), a);
                        }
                        return r;
                    }
                    isKeyAllowedEmpty(e, t) {
                        return -1 !== ({[rh.search]: ['queryText']}[e] || []).indexOf(t);
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
                                if (ns(e)) return !0;
                                console.log(e, 'is not processed by coveoua');
                            })
                            .reduce((t, r) => Object.assign(Object.assign({}, t), {[r]: e[r]}), {});
                    }
                    processCustomParameters(e) {
                        let {custom: t} = e,
                            r = rt(e, ['custom']),
                            n = {};
                        t && rT(t) && (n = this.lowercaseKeys(t));
                        let a = no(r);
                        return Object.assign(Object.assign({}, n), a);
                    }
                    mapCustomParametersToCustomData(e) {
                        let {custom: t} = e,
                            r = rt(e, ['custom']);
                        if (!(t && rT(t))) return e;
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
                            n = rt(e, ['anonymizeIp']);
                        return (
                            void 0 !== r &&
                                -1 ==
                                    ['0', 'false', 'undefined', 'null', '{}', '[]', ''].indexOf(`${r}`.toLowerCase()) &&
                                (n.anonymizeIp = 1),
                            (t == rh.view || t == rh.click || t == rh.search || t == rh.custom) &&
                                (n.originLevel3 = this.limit(n.originLevel3, 128)),
                            t == rh.view && (n.location = this.limit(n.location, 128)),
                            ('pageview' == t || 'event' == t) &&
                                ((n.referrer = this.limit(n.referrer, 2048)),
                                (n.location = this.limit(n.location, 2048)),
                                (n.page = this.limit(n.page, 2048))),
                            n
                        );
                    }
                    ensureAnonymousUserWhenUsingApiKey(e) {
                        let {userId: t} = e,
                            r = rt(e, ['userId']);
                        return nm(this.options.token) && !t ? ((r.userId = 'anonymous'), r) : e;
                    }
                    setTrackingIdIfTrackingIdNotPresent(e) {
                        let {trackingId: t} = e,
                            r = rt(e, ['trackingId']);
                        return t
                            ? e
                            : (r.hasOwnProperty('custom') &&
                                  rT(r.custom) &&
                                  (r.custom.hasOwnProperty('context_website') || r.custom.hasOwnProperty('siteName')) &&
                                  (r.trackingId = r.custom.context_website || r.custom.siteName),
                              r.hasOwnProperty('customData') &&
                                  rT(r.customData) &&
                                  (r.customData.hasOwnProperty('context_website') ||
                                      r.customData.hasOwnProperty('siteName')) &&
                                  (r.trackingId = r.customData.context_website || r.customData.siteName),
                              r);
                    }
                    limit(e, t) {
                        return 'string' != typeof e ? e : e.substring(0, t);
                    }
                    get baseUrl() {
                        return (function (e = nC.default, t = 'v15', r = !1) {
                            return ((e = e.replace(/\/$/, '')), r)
                                ? `${e}/${t}`
                                : `${e}${e.endsWith('/rest') || e.endsWith('/rest/ua') ? '' : '/rest'}/${t}`;
                        })(this.options.endpoint, this.options.version, this.options.isCustomEndpoint);
                    }
                };
            (((n = nw || (nw = {})).contextChanged = 'contextChanged'),
                (n.expandToFullUI = 'expandToFullUI'),
                (n.openUserActions = 'openUserActions'),
                (n.showPrecedingSessions = 'showPrecedingSessions'),
                (n.showFollowingSessions = 'showFollowingSessions'),
                (n.clickViewedDocument = 'clickViewedDocument'),
                (n.clickPageView = 'clickPageView'),
                ((a = h || (h = {})).interfaceLoad = 'interfaceLoad'),
                (a.interfaceChange = 'interfaceChange'),
                (a.didyoumeanAutomatic = 'didyoumeanAutomatic'),
                (a.didyoumeanClick = 'didyoumeanClick'),
                (a.resultsSort = 'resultsSort'),
                (a.searchboxSubmit = 'searchboxSubmit'),
                (a.searchboxClear = 'searchboxClear'),
                (a.searchboxAsYouType = 'searchboxAsYouType'),
                (a.breadcrumbFacet = 'breadcrumbFacet'),
                (a.breadcrumbResetAll = 'breadcrumbResetAll'),
                (a.documentQuickview = 'documentQuickview'),
                (a.documentOpen = 'documentOpen'),
                (a.omniboxAnalytics = 'omniboxAnalytics'),
                (a.omniboxFromLink = 'omniboxFromLink'),
                (a.searchFromLink = 'searchFromLink'),
                (a.triggerNotify = 'notify'),
                (a.triggerExecute = 'execute'),
                (a.triggerQuery = 'query'),
                (a.undoTriggerQuery = 'undoQuery'),
                (a.triggerRedirect = 'redirect'),
                (a.pagerResize = 'pagerResize'),
                (a.pagerNumber = 'pagerNumber'),
                (a.pagerNext = 'pagerNext'),
                (a.pagerPrevious = 'pagerPrevious'),
                (a.pagerScrolling = 'pagerScrolling'),
                (a.staticFilterClearAll = 'staticFilterClearAll'),
                (a.staticFilterSelect = 'staticFilterSelect'),
                (a.staticFilterDeselect = 'staticFilterDeselect'),
                (a.facetClearAll = 'facetClearAll'),
                (a.facetSearch = 'facetSearch'),
                (a.facetSelect = 'facetSelect'),
                (a.facetSelectAll = 'facetSelectAll'),
                (a.facetDeselect = 'facetDeselect'),
                (a.facetExclude = 'facetExclude'),
                (a.facetUnexclude = 'facetUnexclude'),
                (a.facetUpdateSort = 'facetUpdateSort'),
                (a.facetShowMore = 'showMoreFacetResults'),
                (a.facetShowLess = 'showLessFacetResults'),
                (a.queryError = 'query'),
                (a.queryErrorBack = 'errorBack'),
                (a.queryErrorClear = 'errorClearQuery'),
                (a.queryErrorRetry = 'errorRetry'),
                (a.recommendation = 'recommendation'),
                (a.recommendationInterfaceLoad = 'recommendationInterfaceLoad'),
                (a.recommendationOpen = 'recommendationOpen'),
                (a.likeSmartSnippet = 'likeSmartSnippet'),
                (a.dislikeSmartSnippet = 'dislikeSmartSnippet'),
                (a.expandSmartSnippet = 'expandSmartSnippet'),
                (a.collapseSmartSnippet = 'collapseSmartSnippet'),
                (a.openSmartSnippetFeedbackModal = 'openSmartSnippetFeedbackModal'),
                (a.closeSmartSnippetFeedbackModal = 'closeSmartSnippetFeedbackModal'),
                (a.sendSmartSnippetReason = 'sendSmartSnippetReason'),
                (a.expandSmartSnippetSuggestion = 'expandSmartSnippetSuggestion'),
                (a.collapseSmartSnippetSuggestion = 'collapseSmartSnippetSuggestion'),
                (a.showMoreSmartSnippetSuggestion = 'showMoreSmartSnippetSuggestion'),
                (a.showLessSmartSnippetSuggestion = 'showLessSmartSnippetSuggestion'),
                (a.openSmartSnippetSource = 'openSmartSnippetSource'),
                (a.openSmartSnippetSuggestionSource = 'openSmartSnippetSuggestionSource'),
                (a.openSmartSnippetInlineLink = 'openSmartSnippetInlineLink'),
                (a.openSmartSnippetSuggestionInlineLink = 'openSmartSnippetSuggestionInlineLink'),
                (a.recentQueryClick = 'recentQueriesClick'),
                (a.clearRecentQueries = 'clearRecentQueries'),
                (a.recentResultClick = 'recentResultClick'),
                (a.clearRecentResults = 'clearRecentResults'),
                (a.noResultsBack = 'noResultsBack'),
                (a.showMoreFoldedResults = 'showMoreFoldedResults'),
                (a.showLessFoldedResults = 'showLessFoldedResults'),
                (a.copyToClipboard = 'copyToClipboard'),
                (a.caseSendEmail = 'Case.SendEmail'),
                (a.feedItemTextPost = 'FeedItem.TextPost'),
                (a.caseAttach = 'caseAttach'),
                (a.caseDetach = 'caseDetach'),
                (a.retryGeneratedAnswer = 'retryGeneratedAnswer'),
                (a.likeGeneratedAnswer = 'likeGeneratedAnswer'),
                (a.dislikeGeneratedAnswer = 'dislikeGeneratedAnswer'),
                (a.openGeneratedAnswerSource = 'openGeneratedAnswerSource'),
                (a.generatedAnswerStreamEnd = 'generatedAnswerStreamEnd'));
            var nk = {
                    [h.triggerNotify]: 'queryPipelineTriggers',
                    [h.triggerExecute]: 'queryPipelineTriggers',
                    [h.triggerQuery]: 'queryPipelineTriggers',
                    [h.triggerRedirect]: 'queryPipelineTriggers',
                    [h.queryError]: 'errors',
                    [h.queryErrorBack]: 'errors',
                    [h.queryErrorClear]: 'errors',
                    [h.queryErrorRetry]: 'errors',
                    [h.pagerNext]: 'getMoreResults',
                    [h.pagerPrevious]: 'getMoreResults',
                    [h.pagerNumber]: 'getMoreResults',
                    [h.pagerResize]: 'getMoreResults',
                    [h.pagerScrolling]: 'getMoreResults',
                    [h.facetSearch]: 'facet',
                    [h.facetShowLess]: 'facet',
                    [h.facetShowMore]: 'facet',
                    [h.recommendation]: 'recommendation',
                    [h.likeSmartSnippet]: 'smartSnippet',
                    [h.dislikeSmartSnippet]: 'smartSnippet',
                    [h.expandSmartSnippet]: 'smartSnippet',
                    [h.collapseSmartSnippet]: 'smartSnippet',
                    [h.openSmartSnippetFeedbackModal]: 'smartSnippet',
                    [h.closeSmartSnippetFeedbackModal]: 'smartSnippet',
                    [h.sendSmartSnippetReason]: 'smartSnippet',
                    [h.expandSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [h.collapseSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [h.showMoreSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [h.showLessSmartSnippetSuggestion]: 'smartSnippetSuggestions',
                    [h.clearRecentQueries]: 'recentQueries',
                    [h.recentResultClick]: 'recentlyClickedDocuments',
                    [h.clearRecentResults]: 'recentlyClickedDocuments',
                    [h.showLessFoldedResults]: 'folding',
                    [nw.expandToFullUI]: 'interface',
                    [nw.openUserActions]: 'User Actions',
                    [nw.showPrecedingSessions]: 'User Actions',
                    [nw.showFollowingSessions]: 'User Actions',
                    [nw.clickViewedDocument]: 'User Actions',
                    [nw.clickPageView]: 'User Actions',
                    [h.caseDetach]: 'case',
                    [h.likeGeneratedAnswer]: 'generatedAnswer',
                    [h.dislikeGeneratedAnswer]: 'generatedAnswer',
                    [h.openGeneratedAnswerSource]: 'generatedAnswer',
                    [h.generatedAnswerStreamEnd]: 'generatedAnswer',
                },
                nO = class {
                    constructor() {
                        ((this.runtime = new nv()), (this.currentVisitorId = ''));
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
                        return this.makeEvent(rh.search);
                    }
                    sendSearchEvent() {
                        return Promise.resolve();
                    }
                    makeClickEvent() {
                        return this.makeEvent(rh.click);
                    }
                    sendClickEvent() {
                        return Promise.resolve();
                    }
                    makeCustomEvent() {
                        return this.makeEvent(rh.custom);
                    }
                    sendCustomEvent() {
                        return Promise.resolve();
                    }
                    makeViewEvent() {
                        return this.makeEvent(rh.view);
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
                        return rD;
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
            function nx(e) {
                let t = 'string' == typeof e.partialQueries ? e.partialQueries : nq(e.partialQueries),
                    r = 'string' == typeof e.suggestions ? e.suggestions : nq(e.suggestions);
                return Object.assign(Object.assign({}, e), {partialQueries: t, suggestions: r});
            }
            var nE = class {
                    constructor(e, t) {
                        ((this.opts = e), (this.provider = t));
                        let r = !1 === e.enableAnalytics || nb();
                        this.coveoAnalyticsClient = r ? new nO() : new nI(e);
                    }
                    disable() {
                        (this.coveoAnalyticsClient instanceof nI && this.coveoAnalyticsClient.clear(),
                            (this.coveoAnalyticsClient = new nO()));
                    }
                    enable() {
                        this.coveoAnalyticsClient = new nI(this.opts);
                    }
                    makeInterfaceLoad() {
                        return this.makeSearchEvent(h.interfaceLoad);
                    }
                    logInterfaceLoad() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeInterfaceLoad()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecommendationInterfaceLoad() {
                        return this.makeSearchEvent(h.recommendationInterfaceLoad);
                    }
                    logRecommendationInterfaceLoad() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendationInterfaceLoad()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRecommendation() {
                        return this.makeCustomEvent(h.recommendation);
                    }
                    logRecommendation() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendation()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecommendationOpen(e, t) {
                        return this.makeClickEvent(h.recommendationOpen, e, t);
                    }
                    logRecommendationOpen(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendationOpen(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterClearAll(e) {
                        return this.makeSearchEvent(h.staticFilterClearAll, e);
                    }
                    logStaticFilterClearAll(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterClearAll(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterSelect(e) {
                        return this.makeSearchEvent(h.staticFilterSelect, e);
                    }
                    logStaticFilterSelect(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterSelect(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterDeselect(e) {
                        return this.makeSearchEvent(h.staticFilterDeselect, e);
                    }
                    logStaticFilterDeselect(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterDeselect(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeFetchMoreResults() {
                        return this.makeCustomEvent(h.pagerScrolling, {type: 'getMoreResults'});
                    }
                    logFetchMoreResults() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFetchMoreResults()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeInterfaceChange(e) {
                        return this.makeSearchEvent(h.interfaceChange, e);
                    }
                    logInterfaceChange(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeInterfaceChange(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDidYouMeanAutomatic() {
                        return this.makeSearchEvent(h.didyoumeanAutomatic);
                    }
                    logDidYouMeanAutomatic() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeDidYouMeanAutomatic()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDidYouMeanClick() {
                        return this.makeSearchEvent(h.didyoumeanClick);
                    }
                    logDidYouMeanClick() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeDidYouMeanClick()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeResultsSort(e) {
                        return this.makeSearchEvent(h.resultsSort, e);
                    }
                    logResultsSort(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeResultsSort(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxSubmit() {
                        return this.makeSearchEvent(h.searchboxSubmit);
                    }
                    logSearchboxSubmit() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxSubmit()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxClear() {
                        return this.makeSearchEvent(h.searchboxClear);
                    }
                    logSearchboxClear() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxClear()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxAsYouType() {
                        return this.makeSearchEvent(h.searchboxAsYouType);
                    }
                    logSearchboxAsYouType() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxAsYouType()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeBreadcrumbFacet(e) {
                        return this.makeSearchEvent(h.breadcrumbFacet, e);
                    }
                    logBreadcrumbFacet(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeBreadcrumbFacet(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeBreadcrumbResetAll() {
                        return this.makeSearchEvent(h.breadcrumbResetAll);
                    }
                    logBreadcrumbResetAll() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeBreadcrumbResetAll()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDocumentQuickview(e, t) {
                        return this.makeClickEvent(h.documentQuickview, e, t);
                    }
                    logDocumentQuickview(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeDocumentQuickview(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDocumentOpen(e, t) {
                        return this.makeClickEvent(h.documentOpen, e, t);
                    }
                    logDocumentOpen(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeDocumentOpen(e, t)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeOmniboxAnalytics(e) {
                        return this.makeSearchEvent(h.omniboxAnalytics, nx(e));
                    }
                    logOmniboxAnalytics(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeOmniboxAnalytics(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeOmniboxFromLink(e) {
                        return this.makeSearchEvent(h.omniboxFromLink, nx(e));
                    }
                    logOmniboxFromLink(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeOmniboxFromLink(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchFromLink() {
                        return this.makeSearchEvent(h.searchFromLink);
                    }
                    logSearchFromLink() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeSearchFromLink()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerNotify(e) {
                        return this.makeCustomEvent(h.triggerNotify, e);
                    }
                    logTriggerNotify(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerNotify(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerExecute(e) {
                        return this.makeCustomEvent(h.triggerExecute, e);
                    }
                    logTriggerExecute(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerExecute(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerQuery() {
                        return this.makeCustomEvent(
                            h.triggerQuery,
                            {query: this.provider.getSearchEventRequestPayload().queryText},
                            'queryPipelineTriggers',
                        );
                    }
                    logTriggerQuery() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerQuery()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeUndoTriggerQuery(e) {
                        return this.makeSearchEvent(h.undoTriggerQuery, e);
                    }
                    logUndoTriggerQuery(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeUndoTriggerQuery(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerRedirect(e) {
                        return this.makeCustomEvent(
                            h.triggerRedirect,
                            Object.assign(Object.assign({}, e), {
                                query: this.provider.getSearchEventRequestPayload().queryText,
                            }),
                        );
                    }
                    logTriggerRedirect(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerRedirect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerResize(e) {
                        return this.makeCustomEvent(h.pagerResize, e);
                    }
                    logPagerResize(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makePagerResize(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerNumber(e) {
                        return this.makeCustomEvent(h.pagerNumber, e);
                    }
                    logPagerNumber(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makePagerNumber(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerNext(e) {
                        return this.makeCustomEvent(h.pagerNext, e);
                    }
                    logPagerNext(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makePagerNext(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerPrevious(e) {
                        return this.makeCustomEvent(h.pagerPrevious, e);
                    }
                    logPagerPrevious(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makePagerPrevious(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerScrolling() {
                        return this.makeCustomEvent(h.pagerScrolling);
                    }
                    logPagerScrolling() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makePagerScrolling()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetClearAll(e) {
                        return this.makeSearchEvent(h.facetClearAll, e);
                    }
                    logFacetClearAll(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFacetClearAll(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSearch(e) {
                        return this.makeSearchEvent(h.facetSearch, e);
                    }
                    logFacetSearch(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSearch(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSelect(e) {
                        return this.makeSearchEvent(h.facetSelect, e);
                    }
                    logFacetSelect(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSelect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetDeselect(e) {
                        return this.makeSearchEvent(h.facetDeselect, e);
                    }
                    logFacetDeselect(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFacetDeselect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetExclude(e) {
                        return this.makeSearchEvent(h.facetExclude, e);
                    }
                    logFacetExclude(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFacetExclude(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetUnexclude(e) {
                        return this.makeSearchEvent(h.facetUnexclude, e);
                    }
                    logFacetUnexclude(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFacetUnexclude(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSelectAll(e) {
                        return this.makeSearchEvent(h.facetSelectAll, e);
                    }
                    logFacetSelectAll(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSelectAll(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetUpdateSort(e) {
                        return this.makeSearchEvent(h.facetUpdateSort, e);
                    }
                    logFacetUpdateSort(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFacetUpdateSort(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetShowMore(e) {
                        return this.makeCustomEvent(h.facetShowMore, e);
                    }
                    logFacetShowMore(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFacetShowMore(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetShowLess(e) {
                        return this.makeCustomEvent(h.facetShowLess, e);
                    }
                    logFacetShowLess(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeFacetShowLess(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryError(e) {
                        return this.makeCustomEvent(h.queryError, e);
                    }
                    logQueryError(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeQueryError(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorBack() {
                        return rr(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(h.queryErrorBack);
                            return {
                                description: e.description,
                                log: () =>
                                    rr(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(h.queryErrorBack)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorBack() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorBack()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorRetry() {
                        return rr(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(h.queryErrorRetry);
                            return {
                                description: e.description,
                                log: () =>
                                    rr(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(h.queryErrorRetry)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorRetry() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorRetry()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorClear() {
                        return rr(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(h.queryErrorClear);
                            return {
                                description: e.description,
                                log: () =>
                                    rr(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(h.queryErrorClear)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorClear() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorClear()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeLikeSmartSnippet() {
                        return this.makeCustomEvent(h.likeSmartSnippet);
                    }
                    logLikeSmartSnippet() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeLikeSmartSnippet()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDislikeSmartSnippet() {
                        return this.makeCustomEvent(h.dislikeSmartSnippet);
                    }
                    logDislikeSmartSnippet() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeDislikeSmartSnippet()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeExpandSmartSnippet() {
                        return this.makeCustomEvent(h.expandSmartSnippet);
                    }
                    logExpandSmartSnippet() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeExpandSmartSnippet()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeCollapseSmartSnippet() {
                        return this.makeCustomEvent(h.collapseSmartSnippet);
                    }
                    logCollapseSmartSnippet() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeCollapseSmartSnippet()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetFeedbackModal() {
                        return this.makeCustomEvent(h.openSmartSnippetFeedbackModal);
                    }
                    logOpenSmartSnippetFeedbackModal() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetFeedbackModal()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeCloseSmartSnippetFeedbackModal() {
                        return this.makeCustomEvent(h.closeSmartSnippetFeedbackModal);
                    }
                    logCloseSmartSnippetFeedbackModal() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeCloseSmartSnippetFeedbackModal()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeSmartSnippetFeedbackReason(e, t) {
                        return this.makeCustomEvent(h.sendSmartSnippetReason, {reason: e, details: t});
                    }
                    logSmartSnippetFeedbackReason(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeSmartSnippetFeedbackReason(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeExpandSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(
                            h.expandSmartSnippetSuggestion,
                            'documentId' in e ? e : {documentId: e},
                        );
                    }
                    logExpandSmartSnippetSuggestion(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeExpandSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeCollapseSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(
                            h.collapseSmartSnippetSuggestion,
                            'documentId' in e ? e : {documentId: e},
                        );
                    }
                    logCollapseSmartSnippetSuggestion(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeCollapseSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowMoreSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(h.showMoreSmartSnippetSuggestion, e);
                    }
                    logShowMoreSmartSnippetSuggestion(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeShowMoreSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowLessSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(h.showLessSmartSnippetSuggestion, e);
                    }
                    logShowLessSmartSnippetSuggestion(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeShowLessSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetSource(e, t) {
                        return this.makeClickEvent(h.openSmartSnippetSource, e, t);
                    }
                    logOpenSmartSnippetSource(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetSource(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetSuggestionSource(e, t) {
                        return this.makeClickEvent(
                            h.openSmartSnippetSuggestionSource,
                            e,
                            {contentIDKey: t.documentId.contentIdKey, contentIDValue: t.documentId.contentIdValue},
                            t,
                        );
                    }
                    makeCopyToClipboard(e, t) {
                        return this.makeClickEvent(h.copyToClipboard, e, t);
                    }
                    logCopyToClipboard(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeCopyToClipboard(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    logOpenSmartSnippetSuggestionSource(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetSuggestionSource(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetInlineLink(e, t) {
                        return this.makeClickEvent(
                            h.openSmartSnippetInlineLink,
                            e,
                            {contentIDKey: t.contentIDKey, contentIDValue: t.contentIDValue},
                            t,
                        );
                    }
                    logOpenSmartSnippetInlineLink(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetInlineLink(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetSuggestionInlineLink(e, t) {
                        return this.makeClickEvent(
                            h.openSmartSnippetSuggestionInlineLink,
                            e,
                            {contentIDKey: t.documentId.contentIdKey, contentIDValue: t.documentId.contentIdValue},
                            t,
                        );
                    }
                    logOpenSmartSnippetSuggestionInlineLink(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetSuggestionInlineLink(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRecentQueryClick() {
                        return this.makeSearchEvent(h.recentQueryClick);
                    }
                    logRecentQueryClick() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeRecentQueryClick()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeClearRecentQueries() {
                        return this.makeCustomEvent(h.clearRecentQueries);
                    }
                    logClearRecentQueries() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeClearRecentQueries()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecentResultClick(e, t) {
                        return this.makeCustomEvent(h.recentResultClick, {info: e, identifier: t});
                    }
                    logRecentResultClick(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeRecentResultClick(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeClearRecentResults() {
                        return this.makeCustomEvent(h.clearRecentResults);
                    }
                    logClearRecentResults() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeClearRecentResults()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeNoResultsBack() {
                        return this.makeSearchEvent(h.noResultsBack);
                    }
                    logNoResultsBack() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeNoResultsBack()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeShowMoreFoldedResults(e, t) {
                        return this.makeClickEvent(h.showMoreFoldedResults, e, t);
                    }
                    logShowMoreFoldedResults(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeShowMoreFoldedResults(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowLessFoldedResults() {
                        return this.makeCustomEvent(h.showLessFoldedResults);
                    }
                    logShowLessFoldedResults() {
                        return rr(this, void 0, void 0, function* () {
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
                    makeCustomEvent(e, t, r = nk[e]) {
                        return rr(this, void 0, void 0, function* () {
                            let n = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), t),
                                a = Object.assign(Object.assign({}, yield this.getBaseEventRequest(n)), {
                                    eventType: r,
                                    eventValue: e,
                                }),
                                i = yield this.coveoAnalyticsClient.makeCustomEvent(a);
                            return {
                                description: this.makeEventDescription(i, e),
                                log: ({searchUID: e}) => i.log({lastSearchQueryUid: e}),
                            };
                        });
                    }
                    logCustomEvent(e, t, r = nk[e]) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEvent(e, t, r)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeCustomEventWithType(e, t, r) {
                        return rr(this, void 0, void 0, function* () {
                            let n = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), r),
                                a = Object.assign(Object.assign({}, yield this.getBaseEventRequest(n)), {
                                    eventType: t,
                                    eventValue: e,
                                }),
                                i = yield this.coveoAnalyticsClient.makeCustomEvent(a);
                            return {
                                description: this.makeEventDescription(i, e),
                                log: ({searchUID: e}) => i.log({lastSearchQueryUid: e}),
                            };
                        });
                    }
                    logCustomEventWithType(e, t, r) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEventWithType(e, t, r)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    logSearchEvent(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeSearchEvent(e, t)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchEvent(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            let r = yield this.getBaseSearchEventRequest(e, t),
                                n = yield this.coveoAnalyticsClient.makeSearchEvent(r);
                            return {
                                description: this.makeEventDescription(n, e),
                                log: ({searchUID: e}) => n.log({searchQueryUid: e}),
                            };
                        });
                    }
                    makeClickEvent(e, t, r, n) {
                        return rr(this, void 0, void 0, function* () {
                            let a = Object.assign(
                                    Object.assign(
                                        Object.assign({}, t),
                                        yield this.getBaseEventRequest(Object.assign(Object.assign({}, r), n)),
                                    ),
                                    {queryPipeline: this.provider.getPipeline(), actionCause: e},
                                ),
                                i = yield this.coveoAnalyticsClient.makeClickEvent(a);
                            return {
                                description: this.makeEventDescription(i, e),
                                log: ({searchUID: e}) => i.log({searchQueryUid: e}),
                            };
                        });
                    }
                    logClickEvent(e, t, r, n) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeClickEvent(e, t, r, n)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    getBaseSearchEventRequest(e, t) {
                        return rr(this, void 0, void 0, function* () {
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
                        return rr(this, void 0, void 0, function* () {
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
                        return this.coveoAnalyticsClient instanceof nI
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
                        return this.makeCustomEvent(h.likeGeneratedAnswer, e);
                    }
                    logLikeGeneratedAnswer(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeLikeGeneratedAnswer(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDislikeGeneratedAnswer(e) {
                        return this.makeCustomEvent(h.dislikeGeneratedAnswer, e);
                    }
                    logDislikeGeneratedAnswer(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeDislikeGeneratedAnswer(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenGeneratedAnswerSource(e) {
                        return this.makeCustomEvent(h.openGeneratedAnswerSource, e);
                    }
                    logOpenGeneratedAnswerSource(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeOpenGeneratedAnswerSource(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRetryGeneratedAnswer() {
                        return this.makeSearchEvent(h.retryGeneratedAnswer);
                    }
                    logRetryGeneratedAnswer() {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeRetryGeneratedAnswer()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeGeneratedAnswerStreamEnd(e) {
                        return this.makeCustomEvent(h.generatedAnswerStreamEnd, e);
                    }
                    logGeneratedAnswerStreamEnd(e) {
                        return rr(this, void 0, void 0, function* () {
                            return (yield this.makeGeneratedAnswerStreamEnd(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                },
                nR = Object.assign({}, {pageview: 'pageview', event: 'event'});
            (Object.keys(nR).map((e) => nR[e]),
                ((i = g || (g = {})).click = 'click'),
                (i.flowStart = 'flowStart'),
                ((s = v || (v = {})).enterInterface = 'ticket_create_start'),
                (s.fieldUpdate = 'ticket_field_update'),
                (s.fieldSuggestionClick = 'ticket_classification_click'),
                (s.suggestionClick = 'suggestion_click'),
                (s.suggestionRate = 'suggestion_rate'),
                (s.nextCaseStep = 'ticket_next_stage'),
                (s.caseCancelled = 'ticket_cancel'),
                (s.caseSolved = 'ticket_cancel'),
                (s.caseCreated = 'ticket_create'),
                ((o = m || (m = {})).quit = 'Quit'),
                (o.solved = 'Solved'));
            var nA = (e) => {
                    let t = {};
                    return (
                        e.caseContext &&
                            Object.keys(e.caseContext).forEach((r) => {
                                var n;
                                let a = null === (n = e.caseContext) || void 0 === n ? void 0 : n[r];
                                a && (t[`context_${r}`] = a);
                            }),
                        t
                    );
                },
                nF = (e, t = !0) => {
                    let {caseContext: r, caseId: n, caseNumber: a} = e,
                        i = rt(e, ['caseContext', 'caseId', 'caseNumber']),
                        s = nA(e);
                    return Object.assign(
                        Object.assign(
                            Object.assign({CaseId: n, CaseNumber: a}, i),
                            !!s.context_Case_Subject && {CaseSubject: s.context_Case_Subject},
                        ),
                        t && s,
                    );
                },
                nD = class {
                    constructor(e, t) {
                        ((this.opts = e), (this.provider = t));
                        let r = !1 === e.enableAnalytics || nb();
                        this.coveoAnalyticsClient = r ? new nO() : new nI(e);
                    }
                    disable() {
                        (this.coveoAnalyticsClient instanceof nI && this.coveoAnalyticsClient.clear(),
                            (this.coveoAnalyticsClient = new nO()));
                    }
                    enable() {
                        this.coveoAnalyticsClient = new nI(this.opts);
                    }
                    logInterfaceLoad(e) {
                        if (e) {
                            let t = nF(e);
                            return this.logSearchEvent(h.interfaceLoad, t);
                        }
                        return this.logSearchEvent(h.interfaceLoad);
                    }
                    logInterfaceChange(e) {
                        let t = nF(e);
                        return this.logSearchEvent(h.interfaceChange, t);
                    }
                    logStaticFilterDeselect(e) {
                        let t = nF(e);
                        return this.logSearchEvent(h.staticFilterDeselect, t);
                    }
                    logFetchMoreResults(e) {
                        if (e) {
                            let t = nF(e);
                            return this.logCustomEvent(
                                h.pagerScrolling,
                                Object.assign(Object.assign({}, t), {type: 'getMoreResults'}),
                            );
                        }
                        return this.logCustomEvent(h.pagerScrolling, {type: 'getMoreResults'});
                    }
                    logBreadcrumbFacet(e) {
                        let t = nF(e);
                        return this.logSearchEvent(h.breadcrumbFacet, t);
                    }
                    logBreadcrumbResetAll(e) {
                        if (e) {
                            let t = nF(e);
                            return this.logSearchEvent(h.breadcrumbResetAll, t);
                        }
                        return this.logSearchEvent(h.breadcrumbResetAll);
                    }
                    logFacetSelect(e) {
                        let t = nF(e);
                        return this.logSearchEvent(h.facetSelect, t);
                    }
                    logFacetExclude(e) {
                        let t = nF(e);
                        return this.logSearchEvent(h.facetExclude, t);
                    }
                    logFacetDeselect(e) {
                        let t = nF(e);
                        return this.logSearchEvent(h.facetDeselect, t);
                    }
                    logFacetUpdateSort(e) {
                        let t = nF(e);
                        return this.logSearchEvent(h.facetUpdateSort, t);
                    }
                    logFacetClearAll(e) {
                        let t = nF(e);
                        return this.logSearchEvent(h.facetClearAll, t);
                    }
                    logFacetShowMore(e) {
                        let t = nF(e, !1);
                        return this.logCustomEvent(h.facetShowMore, t);
                    }
                    logFacetShowLess(e) {
                        let t = nF(e, !1);
                        return this.logCustomEvent(h.facetShowLess, t);
                    }
                    logQueryError(e) {
                        let t = nF(e, !1);
                        return this.logCustomEvent(h.queryError, t);
                    }
                    logPagerNumber(e) {
                        let t = nF(e, !1);
                        return this.logCustomEvent(h.pagerNumber, t);
                    }
                    logPagerNext(e) {
                        let t = nF(e, !1);
                        return this.logCustomEvent(h.pagerNext, t);
                    }
                    logPagerPrevious(e) {
                        let t = nF(e, !1);
                        return this.logCustomEvent(h.pagerPrevious, t);
                    }
                    logDidYouMeanAutomatic(e) {
                        if (e) {
                            let t = nF(e);
                            return this.logSearchEvent(h.didyoumeanAutomatic, t);
                        }
                        return this.logSearchEvent(h.didyoumeanAutomatic);
                    }
                    logDidYouMeanClick(e) {
                        if (e) {
                            let t = nF(e);
                            return this.logSearchEvent(h.didyoumeanClick, t);
                        }
                        return this.logSearchEvent(h.didyoumeanClick);
                    }
                    logResultsSort(e) {
                        let t = nF(e);
                        return this.logSearchEvent(h.resultsSort, t);
                    }
                    logSearchboxSubmit(e) {
                        if (e) {
                            let t = nF(e);
                            return this.logSearchEvent(h.searchboxSubmit, t);
                        }
                        return this.logSearchEvent(h.searchboxSubmit);
                    }
                    logContextChanged(e) {
                        let t = nF(e);
                        return this.logSearchEvent(nw.contextChanged, t);
                    }
                    logExpandToFullUI(e) {
                        let t = nF(e);
                        return this.logCustomEvent(nw.expandToFullUI, t);
                    }
                    logOpenUserActions(e) {
                        let t = nF(e, !1);
                        return this.logCustomEvent(nw.openUserActions, t);
                    }
                    logShowPrecedingSessions(e) {
                        let t = nF(e, !1);
                        return this.logCustomEvent(nw.showPrecedingSessions, t);
                    }
                    logShowFollowingSessions(e) {
                        let t = nF(e, !1);
                        return this.logCustomEvent(nw.showFollowingSessions, t);
                    }
                    logViewedDocumentClick(e, t) {
                        return this.logCustomEvent(
                            nw.clickViewedDocument,
                            Object.assign(Object.assign({}, nF(t, !1)), {document: e}),
                        );
                    }
                    logPageViewClick(e, t) {
                        return this.logCustomEvent(
                            nw.clickPageView,
                            Object.assign(Object.assign({}, nF(t, !1)), {pageView: e}),
                        );
                    }
                    logDocumentOpen(e, t, r) {
                        return this.logClickEvent(h.documentOpen, e, t, r ? nF(r, !1) : void 0);
                    }
                    logCopyToClipboard(e, t, r) {
                        return this.logClickEvent(h.copyToClipboard, e, t, r ? nF(r, !1) : void 0);
                    }
                    logCaseSendEmail(e, t, r) {
                        return this.logClickEvent(h.caseSendEmail, e, t, r ? nF(r, !1) : void 0);
                    }
                    logFeedItemTextPost(e, t, r) {
                        return this.logClickEvent(h.feedItemTextPost, e, t, r ? nF(r, !1) : void 0);
                    }
                    logDocumentQuickview(e, t, r) {
                        let n = {documentTitle: e.documentTitle, documentURL: e.documentUrl};
                        return this.logClickEvent(
                            h.documentQuickview,
                            e,
                            t,
                            r ? Object.assign(Object.assign({}, nF(r, !1)), n) : n,
                        );
                    }
                    logCaseAttach(e, t, r) {
                        let n = {
                            documentTitle: e.documentTitle,
                            documentURL: e.documentUrl,
                            resultUriHash: e.documentUriHash,
                        };
                        return this.logClickEvent(
                            h.caseAttach,
                            e,
                            t,
                            r ? Object.assign(Object.assign({}, nF(r, !1)), n) : n,
                        );
                    }
                    logCaseDetach(e, t) {
                        return this.logCustomEvent(
                            h.caseDetach,
                            t ? Object.assign(Object.assign({}, nF(t, !1)), {resultUriHash: e}) : {resultUriHash: e},
                        );
                    }
                    logLikeSmartSnippet(e) {
                        return this.logCustomEvent(h.likeSmartSnippet, e ? nF(e, !1) : void 0);
                    }
                    logDislikeSmartSnippet(e) {
                        return this.logCustomEvent(h.dislikeSmartSnippet, e ? nF(e, !1) : void 0);
                    }
                    logExpandSmartSnippet(e) {
                        return this.logCustomEvent(h.expandSmartSnippet, e ? nF(e, !1) : void 0);
                    }
                    logCollapseSmartSnippet(e) {
                        return this.logCustomEvent(h.collapseSmartSnippet, e ? nF(e, !1) : void 0);
                    }
                    logOpenSmartSnippetFeedbackModal(e) {
                        return this.logCustomEvent(h.openSmartSnippetFeedbackModal, e ? nF(e, !1) : void 0);
                    }
                    logCloseSmartSnippetFeedbackModal(e) {
                        return this.logCustomEvent(h.closeSmartSnippetFeedbackModal, e ? nF(e, !1) : void 0);
                    }
                    logSmartSnippetFeedbackReason(e, t, r) {
                        return this.logCustomEvent(
                            h.sendSmartSnippetReason,
                            r
                                ? Object.assign(Object.assign({}, nF(r, !1)), {reason: e, details: t})
                                : {reason: e, details: t},
                        );
                    }
                    logExpandSmartSnippetSuggestion(e, t) {
                        let r = 'documentId' in e ? e : {documentId: e};
                        return this.logCustomEvent(
                            h.expandSmartSnippetSuggestion,
                            t ? Object.assign(Object.assign({}, nF(t, !1)), r) : r,
                        );
                    }
                    logCollapseSmartSnippetSuggestion(e, t) {
                        let r = 'documentId' in e ? e : {documentId: e};
                        return this.logCustomEvent(
                            h.collapseSmartSnippetSuggestion,
                            t ? Object.assign(Object.assign({}, nF(t, !1)), r) : r,
                        );
                    }
                    logOpenSmartSnippetSource(e, t, r) {
                        return this.logClickEvent(h.openSmartSnippetSource, e, t, r ? nF(r, !1) : void 0);
                    }
                    logOpenSmartSnippetSuggestionSource(e, t, r) {
                        return this.logClickEvent(
                            h.openSmartSnippetSuggestionSource,
                            e,
                            {contentIDKey: t.documentId.contentIdKey, contentIDValue: t.documentId.contentIdValue},
                            r ? Object.assign(Object.assign({}, nF(r, !1)), t) : t,
                        );
                    }
                    logOpenSmartSnippetInlineLink(e, t, r) {
                        return this.logClickEvent(
                            h.openSmartSnippetInlineLink,
                            e,
                            {contentIDKey: t.contentIDKey, contentIDValue: t.contentIDValue},
                            r ? Object.assign(Object.assign({}, nF(r, !1)), t) : t,
                        );
                    }
                    logOpenSmartSnippetSuggestionInlineLink(e, t, r) {
                        return this.logClickEvent(
                            h.openSmartSnippetSuggestionInlineLink,
                            e,
                            {contentIDKey: t.documentId.contentIdKey, contentIDValue: t.documentId.contentIdValue},
                            r ? Object.assign(Object.assign({}, nF(r, !1)), t) : t,
                        );
                    }
                    logCustomEvent(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            let r = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), t),
                                n = Object.assign(Object.assign({}, yield this.getBaseCustomEventRequest(r)), {
                                    eventType: nk[e],
                                    eventValue: e,
                                });
                            return this.coveoAnalyticsClient.sendCustomEvent(n);
                        });
                    }
                    logSearchEvent(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return this.coveoAnalyticsClient.sendSearchEvent(
                                yield this.getBaseSearchEventRequest(e, t),
                            );
                        });
                    }
                    logClickEvent(e, t, r, n) {
                        return rr(this, void 0, void 0, function* () {
                            let a = Object.assign(
                                Object.assign(
                                    Object.assign({}, t),
                                    yield this.getBaseEventRequest(Object.assign(Object.assign({}, r), n)),
                                ),
                                {
                                    searchQueryUid: this.provider.getSearchUID(),
                                    queryPipeline: this.provider.getPipeline(),
                                    actionCause: e,
                                },
                            );
                            return this.coveoAnalyticsClient.sendClickEvent(a);
                        });
                    }
                    logShowMoreFoldedResults(e, t, r) {
                        return rr(this, void 0, void 0, function* () {
                            return this.logClickEvent(h.showMoreFoldedResults, e, t, r ? nF(r, !1) : void 0);
                        });
                    }
                    logShowLessFoldedResults(e) {
                        return rr(this, void 0, void 0, function* () {
                            return this.logCustomEvent(h.showLessFoldedResults, e ? nF(e, !1) : void 0);
                        });
                    }
                    getBaseCustomEventRequest(e) {
                        return rr(this, void 0, void 0, function* () {
                            return Object.assign(Object.assign({}, yield this.getBaseEventRequest(e)), {
                                lastSearchQueryUid: this.provider.getSearchUID(),
                            });
                        });
                    }
                    getBaseSearchEventRequest(e, t) {
                        return rr(this, void 0, void 0, function* () {
                            return Object.assign(
                                Object.assign(
                                    Object.assign({}, yield this.getBaseEventRequest(t)),
                                    this.provider.getSearchEventRequestPayload(),
                                ),
                                {
                                    searchQueryUid: this.provider.getSearchUID(),
                                    queryPipeline: this.provider.getPipeline(),
                                    actionCause: e,
                                },
                            );
                        });
                    }
                    getBaseEventRequest(e) {
                        return rr(this, void 0, void 0, function* () {
                            let t = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), e);
                            return Object.assign(Object.assign({}, this.getOrigins()), {
                                customData: t,
                                language: this.provider.getLanguage(),
                                facetState: this.provider.getFacetState ? this.provider.getFacetState() : [],
                                anonymous: this.provider.getIsAnonymous(),
                                clientId: yield this.getClientId(),
                            });
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
                        return this.coveoAnalyticsClient instanceof nI
                            ? this.coveoAnalyticsClient.getCurrentVisitorId()
                            : void 0;
                    }
                },
                nj = () => 'default';
            function nP() {
                return {desiredCount: 5, numberOfValues: 8, set: {}};
            }
            var nT = (e, t) =>
                    'productListing' in e && e.productListing
                        ? e.productListing.facets.results.find((e) => e.facetId === t)
                        : 'search' in e && e.search
                          ? e.search.response.facets.find((e) => e.facetId === t)
                          : void 0,
                nU = (e, t) => {
                    var r;
                    return null == (r = e.facetSet[t]) ? void 0 : r.request;
                },
                nV = (e, t) => {
                    let r = nT(e, t);
                    if (r && r.facetId in e.facetSet) return r;
                },
                nM = (e, t) => {
                    let r = nV(e, t);
                    return r ? r.values.filter((e) => 'idle' !== e.state) : [];
                },
                nL = (e) => ('productListing' in e ? e.productListing.isLoading : e.search.isLoading);
            function n$(e) {
                if (!e) return {parents: [], values: []};
                let t = [],
                    r = e;
                for (; r.length && r[0].children.length; ) ((t = [...t, ...r]), (r = r[0].children));
                let n = r.find((e) => 'selected' === e.state);
                return (n && ((t = [...t, n]), (r = [])), {parents: t, values: r});
            }
            var n_ = (e, t) => {
                    let r = nT(e, t);
                    if (r && r.facetId in e.categoryFacetSet) return r;
                },
                nN = (e, t) => {
                    var r;
                    return null == (r = e.categoryFacetSet[t]) ? void 0 : r.request;
                },
                nQ = (e, t) => {
                    let r = n_(e, t);
                    return n$(null == r ? void 0 : r.values).parents;
                },
                nz = (e, t) => {
                    let r = nN(e, t);
                    return n$(null == r ? void 0 : r.currentValues).parents;
                },
                nB = (e, t) => {
                    let r = n8(t, e),
                        n = r ? r.field : '',
                        a = n6(n, e);
                    return {facetId: e, facetField: n, facetTitle: a};
                };
            function nH(e, t) {
                let {facetId: r, facetValue: n} = e,
                    a = nB(r, t),
                    i = n9(t, r);
                return {...a, facetValue: 'hierarchical' === i ? n2(t, r) : n};
            }
            function nY(e) {
                var t, r, n, a, i;
                return {
                    facetSet: null != (t = e.facetSet) ? t : {},
                    categoryFacetSet: null != (r = e.categoryFacetSet) ? r : {},
                    dateFacetSet: null != (n = e.dateFacetSet) ? n : {},
                    numericFacetSet: null != (a = e.numericFacetSet) ? a : {},
                    automaticFacetSet: null != (i = e.automaticFacetSet) ? i : nP(),
                };
            }
            var nW = (e) => {
                    let t = [];
                    return (
                        nG(e).forEach((r, n) => {
                            let a = n9(e, r.facetId),
                                i = n4(r, n + 1);
                            if (nK(r)) {
                                if (!nz(e, r.facetId).length) return;
                                t.push({...i, ...n5(e, r.facetId), facetType: a, state: 'selected'});
                                return;
                            }
                            r.currentValues.forEach((e, n) => {
                                if ('idle' === e.state) return;
                                let s = nX(e, n + 1, a),
                                    o = nJ(r) ? n1(e) : n0(e);
                                t.push({...i, ...s, ...o});
                            });
                        }),
                        nZ(e).forEach((e, r) => {
                            let n = n3(e, r + 1);
                            e.values.forEach((e, r) => {
                                if ('idle' === e.state) return;
                                let a = nX(e, r + 1, 'specific'),
                                    i = n1(e);
                                t.push({...n, ...a, ...i});
                            });
                        }),
                        t
                    );
                },
                nJ = (e) => 'specific' === e.type,
                nK = (e) => 'hierarchical' === e.type,
                nG = (e) =>
                    [
                        ...Object.values(e.facetSet),
                        ...Object.values(e.categoryFacetSet),
                        ...Object.values(e.dateFacetSet),
                        ...Object.values(e.numericFacetSet),
                    ].map((e) => e.request),
                nZ = (e) => [...Object.values(e.automaticFacetSet.set)].map((e) => e.response),
                nX = (e, t, r) => ({state: e.state, valuePosition: t, facetType: r}),
                n0 = (e) => ({
                    displayValue: `${e.start}..${e.end}`,
                    value: `${e.start}..${e.end}`,
                    start: e.start,
                    end: e.end,
                    endInclusive: e.endInclusive,
                }),
                n1 = (e) => ({displayValue: e.value, value: e.value}),
                n2 = (e, t) =>
                    nz(e, t)
                        .map((e) => e.value)
                        .join(';'),
                n5 = (e, t) => {
                    let r = n2(e, t);
                    return {value: r, valuePosition: 1, displayValue: r};
                },
                n3 = (e, t) => ({title: n6(e.field, e.field), field: e.field, id: e.field, facetPosition: t}),
                n4 = (e, t) => ({title: n6(e.field, e.facetId), field: e.field, id: e.facetId, facetPosition: t}),
                n6 = (e, t) => `${e}_${t}`,
                n8 = (e, t) => {
                    var r, n, a, i, s;
                    return (
                        (null == (r = e.facetSet[t]) ? void 0 : r.request) ||
                        (null == (n = e.categoryFacetSet[t]) ? void 0 : n.request) ||
                        (null == (a = e.dateFacetSet[t]) ? void 0 : a.request) ||
                        (null == (i = e.numericFacetSet[t]) ? void 0 : i.request) ||
                        (null == (s = e.automaticFacetSet.set[t]) ? void 0 : s.response)
                    );
                },
                n9 = (e, t) => {
                    let r = n8(e, t);
                    return r ? r.type : 'specific';
                },
                n7 = () => ({q: '', enableQuerySyntax: !1}),
                ae = '2.27.0',
                at = (e) => {
                    let t = e.configuration.search.locale.split('-')[0];
                    return t && 2 === t.length ? t : 'en';
                },
                ar = class {
                    constructor(e) {
                        ((this.getState = e), (this.state = e()));
                    }
                    getLanguage() {
                        return at(this.state);
                    }
                    getBaseMetadata() {
                        let {context: e} = this.state,
                            t = (null == e ? void 0 : e.contextValues) || {},
                            r = {};
                        for (let [e, n] of Object.entries(t)) r[`context_${e}`] = n;
                        return ((r.coveoHeadlessVersion = ae), r);
                    }
                    getOriginContext() {
                        return this.state.configuration.analytics.originContext;
                    }
                    getOriginLevel1() {
                        return this.state.searchHub || nj();
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
                an = class extends ar {
                    getSearchUID() {
                        var e, t;
                        let r = this.getState();
                        return (
                            (null == (e = r.search) ? void 0 : e.searchResponseId) ||
                            (null == (t = r.search) ? void 0 : t.response.searchUid) ||
                            eO().response.searchUid
                        );
                    }
                    getPipeline() {
                        var e;
                        return (
                            this.state.pipeline ||
                            (null == (e = this.state.search) ? void 0 : e.response.pipeline) ||
                            'default'
                        );
                    }
                    getSearchEventRequestPayload() {
                        return {
                            queryText: this.queryText,
                            responseTime: this.responseTime,
                            results: this.mapResultsToAnalyticsDocument(),
                            numberOfResults: this.numberOfResults,
                        };
                    }
                    getFacetState() {
                        return nW(nY(this.state));
                    }
                    get queryText() {
                        var e;
                        return (null == (e = this.state.query) ? void 0 : e.q) || n7().q;
                    }
                    get responseTime() {
                        var e;
                        return (null == (e = this.state.search) ? void 0 : e.duration) || eO().duration;
                    }
                    mapResultsToAnalyticsDocument() {
                        var e;
                        return null == (e = this.state.search)
                            ? void 0
                            : e.response.results.map((e) => ({documentUri: e.uri, documentUriHash: e.raw.urihash}));
                    }
                    get numberOfResults() {
                        var e;
                        return (
                            (null == (e = this.state.search) ? void 0 : e.response.results.length) ||
                            eO().response.results.length
                        );
                    }
                },
                aa = ({
                    logger: e,
                    getState: t,
                    analyticsClientMiddleware: r = (e, t) => t,
                    preprocessRequest: n,
                    provider: a = new an(t),
                }) => {
                    let i = t(),
                        s = i.configuration.accessToken,
                        o = i.configuration.analytics.apiBaseUrl,
                        l = i.configuration.analytics.runtimeEnvironment,
                        u = i.configuration.analytics.enabled,
                        c = new nD(
                            {
                                enableAnalytics: u,
                                token: s,
                                endpoint: o,
                                runtimeEnvironment: l,
                                preprocessRequest: n,
                                beforeSendHooks: [
                                    r,
                                    (t, r) => (e.info({...r, type: t, endpoint: o, token: s}, 'Analytics request'), r),
                                ],
                            },
                            a,
                        );
                    return (u || c.disable(), c);
                },
                ai = () => ({
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
                as = class extends ar {
                    constructor() {
                        (super(...arguments), (this.initialState = ai()));
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
                ao = ({
                    logger: e,
                    getState: t,
                    analyticsClientMiddleware: r = (e, t) => t,
                    preprocessRequest: n,
                    provider: a = new as(t),
                }) => {
                    let i = t(),
                        s = i.configuration.accessToken,
                        o = i.configuration.analytics.apiBaseUrl,
                        l = i.configuration.analytics.runtimeEnvironment,
                        u = i.configuration.analytics.enabled,
                        c = new nE(
                            {
                                token: s,
                                endpoint: o,
                                runtimeEnvironment: l,
                                preprocessRequest: n,
                                beforeSendHooks: [
                                    r,
                                    (t, r) => (e.info({...r, type: t, endpoint: o, token: s}, 'Analytics request'), r),
                                ],
                            },
                            a,
                        );
                    return (u || c.disable(), c);
                },
                al = (e) => new nI(e).getCurrentVisitorId(),
                au = (e) => {
                    let t = new nI(e);
                    (t.clear(), t.deleteHttpOnlyVisitorId());
                },
                ac = new rb.HistoryStore(),
                ad = class extends ar {
                    getFacetState() {
                        return nW(nY(this.getState()));
                    }
                    getPipeline() {
                        var e;
                        return (
                            this.state.pipeline ||
                            (null == (e = this.state.search) ? void 0 : e.response.pipeline) ||
                            ad.fallbackPipelineName
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
                            eO().response.searchUid
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
                                ad.fallbackPipelineName;
                        return t ? r : void 0;
                    }
                    getBaseMetadata() {
                        var e, t, r;
                        let n = this.getState(),
                            a = super.getBaseMetadata(),
                            i =
                                null ==
                                (r =
                                    null == (t = null == (e = n.search) ? void 0 : e.response)
                                        ? void 0
                                        : t.extendedResults)
                                    ? void 0
                                    : r.generativeQuestionAnsweringId;
                        return (i && (a.generativeQuestionAnsweringId = i), a);
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
                        return (null == (e = this.state.query) ? void 0 : e.q) || n7().q;
                    }
                    get responseTime() {
                        var e;
                        return (null == (e = this.state.search) ? void 0 : e.duration) || eO().duration;
                    }
                    get numberOfResults() {
                        var e;
                        return (
                            (null == (e = this.state.search) ? void 0 : e.response.totalCountFiltered) ||
                            eO().response.totalCountFiltered
                        );
                    }
                },
                af = ad;
            af.fallbackPipelineName = 'default';
            var ap = ({
                    logger: e,
                    getState: t,
                    analyticsClientMiddleware: r = (e, t) => t,
                    preprocessRequest: n,
                    provider: a = new af(t),
                }) => {
                    let i = t(),
                        s = i.configuration.accessToken,
                        o = i.configuration.analytics.apiBaseUrl,
                        l = i.configuration.analytics.runtimeEnvironment,
                        u = i.configuration.analytics.enabled,
                        c = new nE(
                            {
                                token: s,
                                endpoint: o,
                                runtimeEnvironment: l,
                                preprocessRequest: n,
                                beforeSendHooks: [
                                    r,
                                    (t, r) => (e.info({...r, type: t, endpoint: o, token: s}, 'Analytics request'), r),
                                ],
                            },
                            a,
                        );
                    return (u || c.disable(), c);
                },
                ah = () => {
                    let e = ac
                        .getHistory()
                        .reverse()
                        .find((e) => 'PageView' === e.name && e.value);
                    return e ? e.value : '';
                },
                ag = new em({required: !0, emptyAllowed: !1}),
                av = new em({required: !1, emptyAllowed: !1}),
                am = new em({required: !0, emptyAllowed: !0}),
                ay = ({message: e, name: t, stack: r}) => ({message: e, name: t, stack: r}),
                aS = (e, t) => {
                    if ('required' in t) return {payload: new el({value: t}).validate({value: e}).value};
                    let r = new eS({options: {required: !0}, values: t}).validate(e);
                    if (r) throw new eo(r);
                    return {payload: e};
                },
                ab = (e, t) => {
                    try {
                        return aS(e, t);
                    } catch (t) {
                        return {payload: e, error: ay(t)};
                    }
                },
                aw = (e, t, r, n) => aI(e, t, r, `Check the initialState of ${n}`, 'Controller initialization error'),
                aC = (e, t, r, n) => aI(e, t, r, `Check the options of ${n}`, 'Controller initialization error'),
                aI = (e, t, r, n, a) => {
                    try {
                        return t.validate(r, n);
                    } catch (t) {
                        throw (e.logger.error(t, a), t);
                    }
                },
                ak = R(N()),
                aO = (e, t = 5) =>
                    e +
                    Math.random()
                        .toString(36)
                        .substring(2, 2 + t);
            function aq(e) {
                return Array.isArray(e);
            }
            function ax(e) {
                var t;
                return ((t = JSON.stringify(e)), ('undefined' != typeof btoa ? btoa : ak.btoa)(encodeURI(t)));
            }
            var aE = new Set(['1', 1, 'yes', !0]);
            function aR() {
                if ('undefined' == typeof navigator || 'undefined' == typeof window) return !1;
                let e = navigator,
                    t = window;
                return [e.globalPrivacyControl, e.doNotTrack, e.msDoNotTrack, t.doNotTrack].some((e) => aE.has(e));
            }
            function aA(e) {
                var t, r;
                let n = (function e(t) {
                        return t.childResults ? t.childResults.flatMap((t) => [t, ...e(t)]) : [];
                    })(e),
                    a = [e, ...n].filter((e) => e.parentResult).map((e) => e.parentResult);
                return (
                    (t = [e, ...n, ...a]),
                    (r = (e) => e.uniqueId),
                    Object.values(t.reduce((e, t, n) => ({...e, [r(t, n)]: t}), {}))
                );
            }
            var aF = () => '',
                aD =
                    (((l = aD || {})[(l.Search = 0)] = 'Search'),
                    (l[(l.Custom = 1)] = 'Custom'),
                    (l[(l.Click = 2)] = 'Click'),
                    l);
            function aj(e, t) {
                let r = (t) => Object.assign(t9(e, t), {instantlyCallable: !0}),
                    n = r(async (e, {getState: r, extra: n}) => {
                        let {analyticsClientMiddleware: a, preprocessRequest: i, logger: s} = n;
                        return await (
                            await t({getState: r, analyticsClientMiddleware: a, preprocessRequest: i, logger: s})
                        ).log({state: r(), extra: n});
                    });
                return (
                    Object.assign(n, {
                        prepare: async ({
                            getState: e,
                            analyticsClientMiddleware: n,
                            preprocessRequest: a,
                            logger: i,
                        }) => {
                            let {description: s, log: o} = await t({
                                getState: e,
                                analyticsClientMiddleware: n,
                                preprocessRequest: a,
                                logger: i,
                            });
                            return {
                                description: s,
                                action: r(async (e, {getState: t, extra: r}) => await o({state: t(), extra: r})),
                            };
                        },
                    }),
                    n
                );
            }
            var aP = (e, t, r, n = (e) => new af(e)) =>
                    aj(e, async ({getState: e, analyticsClientMiddleware: a, preprocessRequest: i, logger: s}) => {
                        let o = ap({
                                getState: e,
                                logger: s,
                                analyticsClientMiddleware: a,
                                preprocessRequest: i,
                                provider: n(e),
                            }),
                            l = await r(o, e());
                        return {
                            description: null == l ? void 0 : l.description,
                            log: async ({state: e}) => {
                                let r = await (null == l ? void 0 : l.log({searchUID: n(() => e).getSearchUID()}));
                                return (
                                    s.info({client: o.coveoAnalyticsClient, response: r}, 'Analytics response'),
                                    {analyticsType: t}
                                );
                            },
                        };
                    }),
                aT = (e, t, r, n = (e) => new an(e)) =>
                    aj(e, async ({getState: e, analyticsClientMiddleware: a, preprocessRequest: i, logger: s}) => {
                        let o = aa({
                            getState: e,
                            logger: s,
                            analyticsClientMiddleware: a,
                            preprocessRequest: i,
                            provider: n(e),
                        });
                        return {
                            log: async () => {
                                let n = await r(o, e());
                                return (
                                    s.info({client: o.coveoAnalyticsClient, response: n}, 'Analytics response'),
                                    {analyticsType: t}
                                );
                            },
                        };
                    }),
                aU = (e, t) => {
                    var r, n, a, i;
                    let s, o, l;
                    let u = -1,
                        c = null == (r = t.search) ? void 0 : r.results;
                    return (
                        (u = a_(e, c)) < 0 &&
                            (u = (function (e, t) {
                                for (let [r, n] of t.entries()) if (-1 !== a_(e, aA(n))) return r;
                                return -1;
                            })(e, c)),
                        u < 0 && (u = 0),
                        (i = u + (null != (a = null == (n = t.pagination) ? void 0 : n.firstResult) ? a : 0)),
                        {
                            collectionName: 'string' == typeof (s = e.raw.collection) ? s : 'default',
                            documentAuthor: ed((o = e.raw.author))
                                ? 'unknown'
                                : Array.isArray(o)
                                  ? o.join(';')
                                  : `${o}`,
                            documentPosition: i + 1,
                            documentTitle: e.title,
                            documentUri: e.uri,
                            documentUriHash: e.raw.urihash,
                            documentUrl: e.clickUri,
                            rankingModifier: e.rankingModifier || '',
                            sourceName: ed((l = e.raw.source)) ? 'unknown' : l,
                            queryPipeline: t.pipeline || aF(),
                        }
                    );
                },
                aV = (e) => (
                    e.raw.permanentid ||
                        console.warn(
                            'Missing field permanentid on result. This might cause many issues with your Coveo deployment. See https://docs.coveo.com/en/1913 and https://docs.coveo.com/en/1640 for more information.',
                            e,
                        ),
                    {contentIDKey: 'permanentid', contentIDValue: e.raw.permanentid || ''}
                ),
                aM = {urihash: new em(), sourcetype: new em(), permanentid: new em()},
                aL = {
                    uniqueId: ag,
                    raw: new eS({values: aM}),
                    title: ag,
                    uri: ag,
                    clickUri: ag,
                    rankingModifier: new em({required: !1, emptyAllowed: !0}),
                },
                a$ = (e) => {
                    var t;
                    return new el(aL).validate(
                        Object.assign({}, ...Object.keys(aL).map((t) => ({[t]: e[t]})), {
                            raw: ((t = e.raw), Object.assign({}, ...Object.keys(aM).map((e) => ({[e]: t[e]})))),
                        }),
                    );
                };
            function a_(e, t = []) {
                return t.findIndex(({uniqueId: t}) => t === e.uniqueId);
            }
            var aN = (e, t, r, n = (e) => new as(e)) =>
                    aj(e, async ({getState: e, analyticsClientMiddleware: a, preprocessRequest: i, logger: s}) => {
                        let o = ao({
                                getState: e,
                                logger: s,
                                analyticsClientMiddleware: a,
                                preprocessRequest: i,
                                provider: n(e),
                            }),
                            l = await r(o, e());
                        return {
                            description: null == l ? void 0 : l.description,
                            log: async ({state: e}) => {
                                let r = await (null == l ? void 0 : l.log({searchUID: n(() => e).getSearchUID()}));
                                return (
                                    s.info({client: o.coveoAnalyticsClient, response: r}, 'Analytics response'),
                                    {analyticsType: t}
                                );
                            },
                        };
                    }),
                aQ = () =>
                    aT('analytics/interface/load', aD.Search, (e, t) => e.logInterfaceLoad(eQ(t.insightCaseContext))),
                az = () =>
                    aT('analytics/interface/change', aD.Search, (e, t) => {
                        e.logInterfaceChange({
                            ...eQ(t.insightCaseContext),
                            interfaceChangeTo: t.configuration.analytics.originLevel2,
                        });
                    }),
                aB = t1('insightConfiguration/set', (e) => ab(e, {insightId: ag})),
                aH = t2({insightId: ''}, (e) => {
                    e.addCase(aB, (e, t) => {
                        e.insightId = t.payload.insightId;
                    });
                }),
                aY = t1('searchHub/set', (e) => ab(e, new em({required: !0, emptyAllowed: !0}))),
                aW = t9(
                    'insight/interface/fetch',
                    async (e, {getState: t, dispatch: r, rejectWithValue: n, extra: {apiClient: a}}) => {
                        let i = t(),
                            s = await a.getInterface(aJ(i));
                        return ej(s) ? n(s.error) : (r(aY(s.success.searchHub)), {response: s.success});
                    },
                ),
                aJ = (e) => ({
                    accessToken: e.configuration.accessToken,
                    organizationId: e.configuration.organizationId,
                    url: e.configuration.platformUrl,
                    insightId: e.insightConfiguration.insightId,
                }),
                aK = t2({loading: !1, config: void 0}, (e) => {
                    e.addCase(aW.pending, (e) => {
                        ((e.loading = !0), (e.error = void 0));
                    })
                        .addCase(aW.rejected, (e, t) => {
                            ((e.loading = !1), (e.error = t.payload));
                        })
                        .addCase(aW.fulfilled, (e, t) => {
                            ((e.loading = !1), (e.error = void 0));
                            let {searchHub: r, ...n} = t.payload.response;
                            e.config = n;
                        });
                }),
                aG = t1('didYouMean/enable'),
                aZ = t1('didYouMean/disable'),
                aX = t1('didYouMean/correction', (e) => ab(e, ag)),
                a0 = () =>
                    aT('analytics/didyoumean/automatic', aD.Search, (e, t) =>
                        e.logDidYouMeanAutomatic(eQ(t.insightCaseContext)),
                    ),
                a1 = t1('history/undo'),
                a2 = t1('history/redo'),
                a5 = t1('history/snapshot');
            (t9('history/back', async (e, {dispatch: t}) => {
                (t(a1()), await t(a3()));
            }),
                t9('history/forward', async (e, {dispatch: t}) => {
                    (t(a2()), await t(a3()));
                }));
            var a3 = t9('history/change', async (e, {getState: t}) => t().history.present),
                a4 = () => ({
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
            function a6() {
                return {contextValues: {}};
            }
            var a8 = () => !1;
            function a9() {
                return {contextValues: {}};
            }
            function a7() {
                return {enabled: !0};
            }
            function ie() {
                return {freezeFacetOrder: !1, facets: {}};
            }
            function it() {
                return {firstResult: 0, defaultNumberOfResults: 10, numberOfResults: 10, totalCountFiltered: 0};
            }
            var ir = (((u = ir || {}).Ascending = 'ascending'), (u.Descending = 'descending'), u),
                ia =
                    (((c = ia || {}).Relevancy = 'relevancy'),
                    (c.QRE = 'qre'),
                    (c.Date = 'date'),
                    (c.Field = 'field'),
                    (c.NoSort = 'nosort'),
                    c),
                ii = (e) => {
                    if (eC(e)) return e.map((e) => ii(e)).join(',');
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
                is = () => ({by: 'relevancy'});
            function io(e) {
                var t, r, n;
                return {
                    context: e.context || a6(),
                    dictionaryFieldContext: e.dictionaryFieldContext || a9(),
                    facetSet: e.facetSet || {},
                    numericFacetSet: e.numericFacetSet || {},
                    dateFacetSet: e.dateFacetSet || {},
                    categoryFacetSet: e.categoryFacetSet || {},
                    automaticFacetSet: null != (t = e.automaticFacetSet) ? t : nP(),
                    pagination: e.pagination || it(),
                    query: e.query || n7(),
                    tabSet: e.tabSet || {},
                    advancedSearchQueries: e.advancedSearchQueries || a4(),
                    staticFilterSet: e.staticFilterSet || {},
                    querySet: e.querySet || {},
                    instantResults: e.instantResults || {},
                    sortCriteria: e.sortCriteria || ii(is()),
                    pipeline: e.pipeline || aF(),
                    searchHub: e.searchHub || nj(),
                    facetOptions: e.facetOptions || ie(),
                    facetOrder: null != (r = e.facetOrder) ? r : [],
                    debug: null != (n = e.debug) ? n : a8(),
                };
            }
            var il = t1('query/updateQuery', (e) => ab(e, {q: new em(), enableQuerySyntax: new eh()})),
                iu = R(Q()),
                ic = R(z()),
                id = R(Q()),
                ip = R(B());
            id.default.extend(ip.default);
            var ih = 'YYYY/MM/DD@HH:mm:ss';
            function ig(e, t) {
                let r = (0, id.default)(e, t);
                return r.isValid() || t ? r : (0, id.default)(e, ih);
            }
            function iv(e) {
                if (e.isBefore('1401-01-01'))
                    throw Error(`Date is before year 1401, which is unsupported by the API: ${e}`);
            }
            iu.default.extend(ic.default);
            var im = ['past', 'now', 'next'],
                iy = ['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'],
                iS = (e) => {
                    let t = 'now' === e;
                    return {
                        amount: new ef({required: !t, min: 1}),
                        unit: new em({required: !t, constrainTo: iy}),
                        period: new em({required: !0, constrainTo: im}),
                    };
                };
            function ib(e) {
                if ('string' == typeof e && !ik(e))
                    throw Error(`The value "${e}" is not respecting the relative date format "period-amount-unit"`);
                let t = 'string' == typeof e ? iO(e) : e;
                new el(iS(t.period)).validate(t);
                let r = iw(t),
                    n = JSON.stringify(t);
                if (!r.isValid()) throw Error(`Date is invalid: ${n}`);
                iv(r);
            }
            function iw(e) {
                let {period: t, amount: r, unit: n} = e;
                switch (t) {
                    case 'past':
                        return (0, iu.default)().subtract(r, n);
                    case 'next':
                        return (0, iu.default)().add(r, n);
                    case 'now':
                        return (0, iu.default)();
                }
            }
            function iC(e) {
                return iw(iO(e)).format(ih);
            }
            function iI(e) {
                return e.toLocaleLowerCase().split('-');
            }
            function ik(e) {
                let [t, r, n] = iI(e);
                if ('now' === t) return !0;
                if (!im.includes(t) || !iy.includes(n)) return !1;
                let a = parseInt(r);
                return !(isNaN(a) || a <= 0);
            }
            function iO(e) {
                let [t, r, n] = iI(e);
                return 'now' === t ? {period: 'now'} : {period: t, amount: r ? parseInt(r) : void 0, unit: n || void 0};
            }
            function iq(e) {
                return (ib(e), iO(e));
            }
            var ix = () => ({dateFacetValueMap: {}});
            function iE(e) {
                var t;
                let r = ix();
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
                                                          let n, a;
                                                          return (
                                                              (n = e.start),
                                                              (a = e.end),
                                                              ik(n) &&
                                                                  ((n = iC(n)),
                                                                  (t.dateFacetValueMap[r][`start${n}`] = e.start)),
                                                              ik(a) &&
                                                                  ((a = iC(a)),
                                                                  (t.dateFacetValueMap[r][`end${a}`] = e.end)),
                                                              {...e, start: n, end: a}
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
            function iR(e, t) {
                var r;
                return 'success' in e
                    ? {
                          success: {
                              ...e.success,
                              facets:
                                  null == (r = e.success.facets)
                                      ? void 0
                                      : r.map((e) =>
                                            e.facetId in t.dateFacetValueMap
                                                ? {
                                                      ...e,
                                                      values: e.values.map((r) => {
                                                          var n;
                                                          return (
                                                              (n = e.facetId),
                                                              {
                                                                  ...r,
                                                                  start:
                                                                      t.dateFacetValueMap[n][`start${r.start}`] ||
                                                                      r.start,
                                                                  end: t.dateFacetValueMap[n][`end${r.end}`] || r.end,
                                                              }
                                                          );
                                                      }),
                                                  }
                                                : e,
                                        ),
                          },
                      }
                    : e;
            }
            var iA = async (e, t) => ({
                    analytics: {
                        clientId: await al(e),
                        clientTimestamp: new Date().toISOString(),
                        documentReferrer: e.originLevel3,
                        originContext: e.originContext,
                        ...(t && {actionCause: t.actionCause, customData: t.customData}),
                        ...(e.userDisplayName && {userDisplayName: e.userDisplayName}),
                        ...(e.documentLocation && {documentLocation: e.documentLocation}),
                        ...(e.deviceId && {deviceId: e.deviceId}),
                        ...(ah() && {pageId: ah()}),
                    },
                }),
                iF = async (e, t) => {
                    var r, n;
                    return {
                        accessToken: t.configuration.accessToken,
                        organizationId: t.configuration.organizationId,
                        url: t.configuration.platformUrl,
                        count: t.querySuggest[e].count,
                        insightId: t.insightConfiguration.insightId,
                        q: null == (r = t.querySet) ? void 0 : r[e],
                        timezone: t.configuration.search.timezone,
                        actionsHistory: t.configuration.analytics.enabled ? ac.getHistory() : [],
                        ...((null == (n = t.insightCaseContext) ? void 0 : n.caseContext) && {
                            context: t.insightCaseContext.caseContext,
                        }),
                        ...(t.configuration.analytics.enabled && {
                            visitorId: await al(t.configuration.analytics),
                            ...(t.configuration.analytics.enabled && (await iA(t.configuration.analytics))),
                        }),
                    };
                },
                iD = () =>
                    aT('search/logFetchMoreResults', aD.Search, (e, t) =>
                        e.logFetchMoreResults(eQ(t.insightCaseContext)),
                    ),
                ij = (e) =>
                    aT('search/queryError', aD.Search, (t, r) => {
                        var n;
                        return t.logQueryError({
                            ...eQ(r.insightCaseContext),
                            query: (null == (n = r.query) ? void 0 : n.q) || n7().q,
                            aq: '',
                            cq: '',
                            dq: '',
                            errorType: e.type,
                            errorMessage: e.message,
                        });
                    });
            function iP(e) {
                return Object.values(e).map((e) => e.request);
            }
            var iT = (e) => {
                    var t, r;
                    let n;
                    let a =
                            (null == (n = Object.values(e.tabSet || {}).find((e) => e.isActive))
                                ? void 0
                                : n.expression.trim()) || '',
                        i = iP({...e.facetSet, ...e.numericFacetSet, ...e.dateFacetSet, ...e.categoryFacetSet});
                    return iE({
                        accessToken: e.configuration.accessToken,
                        organizationId: e.configuration.organizationId,
                        url: e.configuration.platformUrl,
                        insightId: e.insightConfiguration.insightId,
                        q: null == (t = e.query) ? void 0 : t.q,
                        ...(i.length && {facets: i}),
                        caseContext: null == (r = e.insightCaseContext) ? void 0 : r.caseContext,
                        ...(a && {cq: a}),
                        ...(e.fields && !e.fields.fetchAllFields && {fieldsToInclude: e.fields.fieldsToInclude}),
                        ...(e.didYouMean && {enableDidYouMean: e.didYouMean.enableDidYouMean}),
                        ...(e.sortCriteria && {sortCriteria: e.sortCriteria}),
                        tab: e.configuration.analytics.originLevel2,
                        ...(e.folding && {
                            filterField: e.folding.fields.collection,
                            childField: e.folding.fields.parent,
                            parentField: e.folding.fields.child,
                            filterFieldRange: e.folding.filterFieldRange,
                        }),
                    });
                },
                iU = (e) => {
                    let t = iT(e);
                    return {
                        ...t,
                        request: {
                            ...t.request,
                            ...(e.pagination && {
                                firstResult: e.pagination.firstResult,
                                numberOfResults: e.pagination
                                    ? e.pagination.firstResult + e.pagination.numberOfResults > 5e3
                                        ? 5e3 - e.pagination.firstResult
                                        : e.pagination.numberOfResults
                                    : void 0,
                            }),
                        },
                    };
                },
                iV = (e, t) => {
                    var r;
                    let n = iT(e);
                    return {
                        ...n,
                        request: {
                            ...n.request,
                            filterFieldRange: 100,
                            cq: `@${null == (r = null == e ? void 0 : e.folding) ? void 0 : r.fields.collection}="${t}"`,
                        },
                    };
                },
                iM = async (e) => {
                    var t, r, n, a;
                    let i = await iU(e);
                    return (
                        (i.request = {
                            ...i.request,
                            firstResult:
                                (null != (r = null == (t = e.pagination) ? void 0 : t.firstResult) ? r : 0) +
                                (null != (a = null == (n = e.pagination) ? void 0 : n.numberOfResults) ? a : 0),
                        }),
                        i
                    );
                },
                iL = async (e) => {
                    let t = await iU(e);
                    return ((t.request = {...t.request, numberOfResults: 0}), t);
                },
                i$ = async (e, t, {request: r, mappings: n}, a) => {
                    var i;
                    let s = new Date().getTime();
                    return {
                        response: iR(await e.query(r, a), n),
                        duration: new Date().getTime() - s,
                        queryExecuted: (null == (i = t.query) ? void 0 : i.q) || '',
                        requestExecuted: r,
                    };
                },
                i_ = t9('search/executeSearch', async (e, {getState: t, dispatch: r, rejectWithValue: n, extra: a}) => {
                    let i = t();
                    iK(i);
                    let s = iU(i),
                        o = await i$(a.apiClient, i, s);
                    if (ej(o.response)) return (r(ij(o.response.error)), n(o.response.error));
                    if (!iY(i, o.response.success))
                        return (
                            r(a5(io(i))),
                            {
                                ...o,
                                response: o.response.success,
                                automaticallyCorrected: !1,
                                originalQuery: iW(i),
                                analyticsAction: e,
                            }
                        );
                    let {correctedQuery: l} = o.response.success.queryCorrections[0],
                        u = await iH(a.apiClient, l, t, r);
                    if (ej(u.response)) return (r(ij(u.response.error)), n(u.response.error));
                    let c = iR(o.response, s.mappings).success;
                    return (
                        e()(r, () => iJ(o.queryExecuted, o.duration, i, c), a),
                        r(a5(io(t()))),
                        {
                            ...u,
                            response: {...u.response.success, queryCorrections: o.response.success.queryCorrections},
                            automaticallyCorrected: !0,
                            originalQuery: iW(i),
                            analyticsAction: a0(),
                        }
                    );
                }),
                iN = t9('search/fetchPage', async (e, {getState: t, dispatch: r, rejectWithValue: n, extra: a}) => {
                    let i = t();
                    iK(i);
                    let s = await i$(a.apiClient, i, iU(i));
                    return ej(s.response)
                        ? (r(ij(s.response.error)), n(s.response.error))
                        : (r(a5(io(i))),
                          {
                              ...s,
                              response: s.response.success,
                              automaticallyCorrected: !1,
                              originalQuery: iW(i),
                              analyticsAction: e,
                          });
                }),
                iQ = t9(
                    'search/fetchMoreResults',
                    async (e, {getState: t, dispatch: r, rejectWithValue: n, extra: {apiClient: a}}) => {
                        let i = t(),
                            s = await i$(a, i, await iM(i));
                        return ej(s.response)
                            ? (r(ij(s.response.error)), n(s.response.error))
                            : (r(a5(io(i))),
                              {
                                  ...s,
                                  response: s.response.success,
                                  automaticallyCorrected: !1,
                                  originalQuery: iW(i),
                                  analyticsAction: iD(),
                              });
                    },
                ),
                iz = t9(
                    'search/fetchFacetValues',
                    async (e, {getState: t, dispatch: r, rejectWithValue: n, extra: {apiClient: a}}) => {
                        let i = t(),
                            s = await i$(a, i, await iL(i));
                        return ej(s.response)
                            ? (r(ij(s.response.error)), n(s.response.error))
                            : (r(a5(io(i))),
                              {
                                  ...s,
                                  response: s.response.success,
                                  automaticallyCorrected: !1,
                                  originalQuery: iW(i),
                                  analyticsAction: e,
                              });
                    },
                ),
                iB = t9(
                    'querySuggest/fetch',
                    async (e, {getState: t, rejectWithValue: r, extra: {apiClient: n, validatePayload: a}}) => {
                        a(e, {id: ag});
                        let i = e.id,
                            s = await iF(i, t()),
                            o = await n.querySuggest(s);
                        return ej(o) ? r(o.error) : {id: i, q: s.q, ...o.success};
                    },
                ),
                iH = async (e, t, r, n) => {
                    n(il({q: t}));
                    let a = await i$(e, r(), await iU(r()));
                    return (n(aX(t)), a);
                },
                iY = (e, t) => {
                    var r;
                    return (
                        (null == (r = e.didYouMean) ? void 0 : r.enableDidYouMean) === !0 &&
                        0 === t.results.length &&
                        0 !== t.queryCorrections.length
                    );
                },
                iW = (e) => {
                    var t;
                    return (null == (t = e.query) ? void 0 : t.q) !== void 0 ? e.query.q : '';
                },
                iJ = (e, t, r, n) => {
                    var a, i;
                    return {
                        ...r,
                        query: {
                            q: e,
                            enableQuerySyntax:
                                null != (i = null == (a = r.query) ? void 0 : a.enableQuerySyntax)
                                    ? i
                                    : n7().enableQuerySyntax,
                        },
                        search: {...eO(), duration: t, response: n, results: n.results},
                    };
                },
                iK = (e) => {
                    var t;
                    e.configuration.analytics.enabled &&
                        ac.addElement({
                            name: 'Query',
                            ...((null == (t = e.query) ? void 0 : t.q) && {value: e.query.q}),
                            time: JSON.stringify(new Date()),
                        });
                },
                iG = t1('breadcrumb/deselectAll'),
                iZ = t1('breadcrumb/deselectAllNonBreadcrumbs'),
                iX = t1('facet/updateFacetAutoSelection', (e) => ab(e, {allow: new eh({required: !0})})),
                i0 = class extends af {
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
                        return null != (e = this.activeInstantResultQuery) ? e : n7().q;
                    }
                    get responseTime() {
                        var e, t;
                        return null != (t = null == (e = this.activeInstantResultCache) ? void 0 : e.duration)
                            ? t
                            : eO().duration;
                    }
                    get numberOfResults() {
                        var e, t;
                        return null != (t = null == (e = this.activeInstantResultCache) ? void 0 : e.totalCountFiltered)
                            ? t
                            : eO().response.totalCountFiltered;
                    }
                    getSearchUID() {
                        var e;
                        return (
                            (null == (e = this.activeInstantResultCache) ? void 0 : e.searchUid) || super.getSearchUID()
                        );
                    }
                },
                i1 = () =>
                    aP(
                        'analytics/instantResult/searchboxAsYouType',
                        aD.Search,
                        (e) => e.makeSearchboxAsYouType(),
                        (e) => new i0(e),
                    ),
                i2 = {id: ag},
                i5 = {...i2, q: am},
                i3 = t1('instantResults/register', (e) => ab(e, i2)),
                i4 = t1('instantResults/updateQuery', (e) => ab(e, i5)),
                i6 = t1('instantResults/clearExpired', (e) => ab(e, i2)),
                i8 = new ef({required: !0, min: 0}),
                i9 = t1('pagination/registerNumberOfResults', (e) => ab(e, i8)),
                i7 = t1('pagination/updateNumberOfResults', (e) => ab(e, i8)),
                se = t1('pagination/registerPage', (e) => ab(e, i8)),
                st = t1('pagination/updatePage', (e) => ab(e, i8)),
                sr = t1('pagination/nextPage'),
                sn = t1('pagination/previousPage'),
                sa = async (e, t) => {
                    var r, n, a, i;
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
                            visitorId: await al(e.configuration.analytics),
                            actionsHistory: ac.getHistory(),
                        }),
                        ...((null == (r = e.advancedSearchQueries) ? void 0 : r.aq) && {
                            aq: e.advancedSearchQueries.aq,
                        }),
                        ...((null == (n = e.advancedSearchQueries) ? void 0 : n.cq) && {
                            cq: e.advancedSearchQueries.cq,
                        }),
                        ...((null == (a = e.advancedSearchQueries) ? void 0 : a.lq) && {
                            lq: e.advancedSearchQueries.lq,
                        }),
                        ...((null == (i = e.advancedSearchQueries) ? void 0 : i.dq) && {
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
                        ...(e.configuration.analytics.enabled && (await iA(e.configuration.analytics, t))),
                        ...(e.excerptLength && !ed(e.excerptLength.length) && {excerptLength: e.excerptLength.length}),
                        ...(e.configuration.search.authenticationProviders.length && {
                            authentication: e.configuration.search.authenticationProviders.join(','),
                        }),
                    };
                },
                si = () => aP('analytics/didyoumean/automatic', aD.Search, (e) => e.makeDidYouMeanAutomatic()),
                ss = () =>
                    aP('analytics/trigger/query', aD.Search, (e, t) => {
                        var r;
                        return (null == (r = t.triggers) ? void 0 : r.queryModification.newQuery)
                            ? e.makeTriggerQuery()
                            : null;
                    }),
                so = t1('trigger/query/ignore', (e) => ab(e, new em({emptyAllowed: !0, required: !0}))),
                sl = t1('trigger/query/modification', (e) =>
                    ab(e, new eS({values: {originalQuery: av, modification: av}})),
                ),
                su = () => aP('search/logFetchMoreResults', aD.Search, (e) => e.makeFetchMoreResults()),
                sc = (e) =>
                    aP('search/queryError', aD.Search, (t, r) => {
                        var n, a, i, s;
                        return t.makeQueryError({
                            query: (null == (n = r.query) ? void 0 : n.q) || n7().q,
                            aq: (null == (a = r.advancedSearchQueries) ? void 0 : a.aq) || a4().aq,
                            cq: (null == (i = r.advancedSearchQueries) ? void 0 : i.cq) || a4().cq,
                            dq: (null == (s = r.advancedSearchQueries) ? void 0 : s.dq) || a4().dq,
                            errorType: e.type,
                            errorMessage: e.message,
                        });
                    });
            function sd(e, t) {
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
            var sf = async (e, t) => {
                var r, n, a, i, s, o, l, u;
                let c, d;
                let f = [
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
                    p = sd(
                        [
                            ...iP(null != (i = e.facetSet) ? i : {}).map((e) =>
                                'alphanumericDescending' === e.sortCriteria
                                    ? {...e, sortCriteria: {type: 'alphanumeric', order: 'descending'}}
                                    : e,
                            ),
                            ...sh(null != (s = e.numericFacetSet) ? s : {}),
                            ...sh(null != (o = e.dateFacetSet) ? o : {}),
                            ...iP(null != (l = e.categoryFacetSet) ? l : {}),
                        ].filter(({facetId: t}) => {
                            var r, n, a;
                            return (
                                null ==
                                    (a =
                                        null == (n = null == (r = e.facetOptions) ? void 0 : r.facets[t])
                                            ? void 0
                                            : n.enabled) || a
                            );
                        }),
                        null != (a = e.facetOrder) ? a : [],
                    ),
                    h = (d = null == (u = e.automaticFacetSet) ? void 0 : u.set)
                        ? Object.values(d)
                              .map((e) => e.response)
                              .map(sp)
                              .filter((e) => e.currentValues.length > 0)
                        : void 0,
                    g = await sa(e, t);
                return iE({
                    ...g,
                    ...(e.didYouMean && {enableDidYouMean: e.didYouMean.enableDidYouMean}),
                    ...(f && {cq: f}),
                    ...(p.length && {facets: p}),
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
                            currentFacets: h,
                        },
                    }),
                });
            };
            function sp(e) {
                let {field: t, label: r, values: n} = e;
                return {field: t, label: r, currentValues: n.filter((e) => 'selected' === e.state)};
            }
            function sh(e) {
                return iP(e).map((e) => {
                    let t = e.currentValues.some(({state: e}) => 'idle' !== e);
                    return e.generateAutomaticRanges && !t ? {...e, currentValues: []} : e;
                });
            }
            var sg = class {
                    constructor(
                        e,
                        t = (e) => {
                            this.dispatch(il({q: e}));
                        },
                    ) {
                        ((this.config = e), (this.onUpdateQueryForCorrection = t));
                    }
                    async fetchFromAPI({mappings: e, request: t}, r) {
                        var n;
                        let a = new Date().getTime();
                        return {
                            response: iR(await this.extra.apiClient.search(t, r), e),
                            duration: new Date().getTime() - a,
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
                        return ej(e.response)
                            ? (this.dispatch(sc(e.response.error)), this.rejectWithValue(e.response.error))
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
                        let a = this.getCurrentQuery(),
                            {correctedQuery: i} = n.queryCorrections[0],
                            s = await this.automaticallyRetryQueryWithCorrection(i);
                        return ej(s.response)
                            ? (this.dispatch(sc(s.response.error)), this.rejectWithValue(s.response.error))
                            : (this.analyticsAction &&
                                  this.analyticsAction()(
                                      this.dispatch,
                                      () => this.getStateAfterResponse(e.queryExecuted, e.duration, r, n),
                                      this.extra,
                                  ),
                              this.dispatch(a5(io(this.getState()))),
                              {
                                  ...s,
                                  response: {...s.response.success, queryCorrections: n.queryCorrections},
                                  automaticallyCorrected: !0,
                                  originalQuery: a,
                                  analyticsAction: si(),
                              });
                    }
                    async processQueryTriggersOrContinue(e) {
                        var t, r;
                        let n = this.getSuccessResponse(e);
                        if (!n) return null;
                        let a = (null == (t = n.triggers.find((e) => 'query' === e.type)) ? void 0 : t.content) || '';
                        if (!a) return null;
                        if ((null == (r = this.getState().triggers) ? void 0 : r.queryModification.queryToIgnore) === a)
                            return (this.dispatch(so('')), null);
                        this.analyticsAction && (await this.dispatch(this.analyticsAction));
                        let i = this.getCurrentQuery(),
                            s = await this.automaticallyRetryQueryWithTriggerModification(a);
                        return ej(s.response)
                            ? (this.dispatch(sc(s.response.error)), this.rejectWithValue(s.response.error))
                            : (this.dispatch(a5(io(this.getState()))),
                              {
                                  ...s,
                                  response: {...s.response.success},
                                  automaticallyCorrected: !1,
                                  originalQuery: i,
                                  analyticsAction: ss(),
                              });
                    }
                    processSuccessResponse(e) {
                        return (
                            this.dispatch(a5(io(this.getState()))),
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
                        return eD(e.response) ? e.response.success : null;
                    }
                    async automaticallyRetryQueryWithCorrection(e) {
                        this.onUpdateQueryForCorrection(e);
                        let t = await this.fetchFromAPI(await sf(this.getState()), {origin: 'mainSearch'});
                        return (this.dispatch(aX(e)), t);
                    }
                    async automaticallyRetryQueryWithTriggerModification(e) {
                        return (
                            this.dispatch(sl({newQuery: e, originalQuery: this.getCurrentQuery()})),
                            this.onUpdateQueryForCorrection(e),
                            await this.fetchFromAPI(await sf(this.getState()), {origin: 'mainSearch'})
                        );
                    }
                    getStateAfterResponse(e, t, r, n) {
                        var a, i;
                        return {
                            ...r,
                            query: {
                                q: e,
                                enableQuerySyntax:
                                    null != (i = null == (a = r.query) ? void 0 : a.enableQuerySyntax)
                                        ? i
                                        : n7().enableQuerySyntax,
                            },
                            search: {...eO(), duration: t, response: n, results: n.results},
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
                },
                sv = t9('search/prepareForSearchWithQuery', (e, t) => {
                    let {dispatch: r} = t;
                    (ab(e, {q: new em(), enableQuerySyntax: new eh(), clearFilters: new eh()}),
                        e.clearFilters && (r(iG()), r(iZ())),
                        r(iX({allow: !0})),
                        r(il({q: e.q, enableQuerySyntax: e.enableQuerySyntax})),
                        r(st(1)));
                }),
                sm = t9('search/executeSearch', async (e, t) => {
                    let r = t.getState();
                    sO(r);
                    let {analyticsClientMiddleware: n, preprocessRequest: a, logger: i} = t.extra,
                        {description: s} = await e.prepare({
                            getState: () => t.getState(),
                            analyticsClientMiddleware: n,
                            preprocessRequest: a,
                            logger: i,
                        }),
                        o = await sf(r, s),
                        l = new sg({...t, analyticsAction: e}),
                        u = await l.fetchFromAPI(o, {origin: 'mainSearch'});
                    return await l.process(u);
                }),
                sy = t9('search/fetchPage', async (e, t) => {
                    let r = t.getState();
                    sO(r);
                    let {analyticsClientMiddleware: n, preprocessRequest: a, logger: i} = t.extra,
                        {description: s} = await e.prepare({
                            getState: () => t.getState(),
                            analyticsClientMiddleware: n,
                            preprocessRequest: a,
                            logger: i,
                        }),
                        o = new sg({...t, analyticsAction: e}),
                        l = await sf(r, s),
                        u = await o.fetchFromAPI(l, {origin: 'mainSearch'});
                    return await o.process(u);
                }),
                sS = t9('search/fetchMoreResults', async (e, t) => {
                    let r = t.getState(),
                        {analyticsClientMiddleware: n, preprocessRequest: a, logger: i} = t.extra,
                        {description: s} = await su().prepare({
                            getState: () => t.getState(),
                            analyticsClientMiddleware: n,
                            preprocessRequest: a,
                            logger: i,
                        }),
                        o = new sg({...t, analyticsAction: su()}),
                        l = await sC(r, s),
                        u = await o.fetchFromAPI(l, {origin: 'mainSearch'});
                    return await o.process(u);
                }),
                sb = t9('search/fetchFacetValues', async (e, t) => {
                    let r = t.getState(),
                        {analyticsClientMiddleware: n, preprocessRequest: a, logger: i} = t.extra,
                        {description: s} = await e.prepare({
                            getState: () => t.getState(),
                            analyticsClientMiddleware: n,
                            preprocessRequest: a,
                            logger: i,
                        }),
                        o = new sg({...t, analyticsAction: e}),
                        l = await sk(r, s),
                        u = await o.fetchFromAPI(l, {origin: 'facetValues'});
                    return await o.process(u);
                }),
                sw = t9('search/fetchInstantResults', async (e, t) => {
                    ab(e, {id: ag, q: ag, maxResultsPerQuery: new ef({required: !0, min: 1}), cacheTimeout: new ef()});
                    let {q: r, maxResultsPerQuery: n} = e,
                        a = t.getState(),
                        i = new sg({...t, analyticsAction: i1()}, (r) => {
                            t.dispatch(i4({q: r, id: e.id}));
                        }),
                        s = await sI(a, r, n),
                        o = await i.fetchFromAPI(s, {origin: 'instantResults', disableAbortWarning: !0}),
                        l = await i.process(o);
                    return 'response' in l
                        ? {
                              results: l.response.results,
                              searchUid: l.response.searchUid,
                              analyticsAction: l.analyticsAction,
                              totalCountFiltered: l.response.totalCountFiltered,
                              duration: l.duration,
                          }
                        : l;
                }),
                sC = async (e, t) => {
                    var r, n, a, i;
                    let s = await sf(e, t);
                    return (
                        (s.request = {
                            ...s.request,
                            firstResult:
                                (null != (n = null == (r = e.pagination) ? void 0 : r.firstResult) ? n : 0) +
                                (null != (i = null == (a = e.search) ? void 0 : a.results.length) ? i : 0),
                        }),
                        s
                    );
                },
                sI = async (e, t, r) => {
                    let n = await sa(e);
                    return iE({
                        ...n,
                        ...(e.didYouMean && {enableDidYouMean: e.didYouMean.enableDidYouMean}),
                        numberOfResults: r,
                        q: t,
                    });
                },
                sk = async (e, t) => {
                    let r = await sf(e, t);
                    return ((r.request.numberOfResults = 0), r);
                },
                sO = (e) => {
                    var t;
                    e.configuration.analytics.enabled &&
                        ac.addElement({
                            name: 'Query',
                            ...((null == (t = e.query) ? void 0 : t.q) && {value: e.query.q}),
                            time: JSON.stringify(new Date()),
                        });
                };
            async function sq(e, t) {
                var r;
                let {search: n, accessToken: a, organizationId: i, analytics: s} = e.configuration,
                    o = (null == (r = e.query) ? void 0 : r.q) || '';
                return {
                    url: n.apiBaseUrl,
                    accessToken: a,
                    organizationId: i,
                    enableNavigation: !1,
                    ...(s.enabled && {visitorId: await al(e.configuration.analytics)}),
                    q: o,
                    ...t,
                    requestedOutputSize: t.requestedOutputSize || 0,
                    ...(n.authenticationProviders.length && {authentication: n.authenticationProviders.join(',')}),
                };
            }
            var sx = t9('resultPreview/fetchResultContent', async (e, {extra: t, getState: r, rejectWithValue: n}) => {
                    let a = r(),
                        i = await sq(a, e),
                        s = await t.apiClient.html(i);
                    return ej(s) ? n(s.error) : {content: s.success, uniqueId: e.uniqueId};
                }),
                sE = t1('resultPreview/next'),
                sR = t1('resultPreview/previous'),
                sA = t1('resultPreview/prepare', (e) => ab(e, {results: new ew({required: !0})})),
                sF = t9('resultPreview/updateContentURL', async (e, {getState: t, extra: r}) => {
                    let n = t(),
                        a = eA(
                            await e.buildResultPreviewRequest(n, {
                                uniqueId: e.uniqueId,
                                requestedOutputSize: e.requestedOutputSize,
                            }),
                            e.path,
                        );
                    return (
                        (null == a ? void 0 : a.length) > 2048 &&
                            r.logger.error(
                                'The content URL was truncated as it exceeds the maximum allowed length of 2048 characters.',
                            ),
                        {contentURL: a}
                    );
                });
            function sD() {
                return {uniqueId: '', content: '', isLoading: !1, position: -1, resultsWithPreview: []};
            }
            var sj = (e) => {
                    let {content: t, isLoading: r, uniqueId: n, contentURL: a} = sD();
                    ((e.content = t), (e.isLoading = r), (e.uniqueId = n), (e.contentURL = a));
                },
                sP = (e) => e.filter((e) => e.hasHtmlVersion).map((e) => e.uniqueId),
                sT = t2(sD(), (e) => {
                    e.addCase(sx.pending, (e) => {
                        e.isLoading = !0;
                    })
                        .addCase(sx.fulfilled, (e, t) => {
                            let {content: r, uniqueId: n} = t.payload;
                            ((e.position = e.resultsWithPreview.indexOf(n)),
                                (e.content = r),
                                (e.uniqueId = n),
                                (e.isLoading = !1));
                        })
                        .addCase(sm.fulfilled, (e, t) => {
                            (sj(e), (e.resultsWithPreview = sP(t.payload.response.results)));
                        })
                        .addCase(sS.fulfilled, (e, t) => {
                            (sj(e),
                                (e.resultsWithPreview = e.resultsWithPreview.concat(sP(t.payload.response.results))));
                        })
                        .addCase(sy.fulfilled, sj)
                        .addCase(sA, (e, t) => {
                            e.resultsWithPreview = sP(t.payload.results);
                        })
                        .addCase(sE, (e) => {
                            if (e.isLoading) return;
                            let t = e.position + 1;
                            (t > e.resultsWithPreview.length - 1 && (t = 0), (e.position = t));
                        })
                        .addCase(sR, (e) => {
                            if (e.isLoading) return;
                            let t = e.position - 1;
                            (t < 0 && (t = e.resultsWithPreview.length - 1), (e.position = t));
                        })
                        .addCase(sF.fulfilled, (e, t) => {
                            e.contentURL = t.payload.contentURL;
                        });
                }),
                sU = () => av,
                sV = () => ag,
                sM = t1('configuration/updateBasicConfiguration', (e) =>
                    ab(e, {accessToken: av, organizationId: av, platformUrl: av}),
                ),
                sL = t1('configuration/updateSearchConfiguration', (e) =>
                    ab(e, {
                        apiBaseUrl: av,
                        pipeline: new em({required: !1, emptyAllowed: !0}),
                        searchHub: av,
                        timezone: av,
                        locale: av,
                        authenticationProviders: new ew({required: !1, each: ag}),
                    }),
                ),
                s$ = t1(
                    'configuration/updateAnalyticsConfiguration',
                    (e) => (
                        aR() && (e.enabled = !1),
                        ab(e, {
                            enabled: new eh({default: !0}),
                            originContext: sU(),
                            originLevel2: sU(),
                            originLevel3: sU(),
                            apiBaseUrl: av,
                            runtimeEnvironment: new eu(),
                            anonymous: new eh({default: !1}),
                            deviceId: av,
                            userDisplayName: av,
                            documentLocation: av,
                        })
                    ),
                ),
                s_ = t1('configuration/analytics/disable'),
                sN = t1('configuration/analytics/enable'),
                sQ = t1('configuration/analytics/originlevel2', (e) => ab(e, {originLevel2: sV()})),
                sz = t1('configuration/analytics/originlevel3', (e) => ab(e, {originLevel3: sV()})),
                sB = t2(nj(), (e) => {
                    e.addCase(aY, (e, t) => t.payload)
                        .addCase(a3.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.searchHub) ? n : e;
                        })
                        .addCase(sL, (e, t) => t.payload.searchHub || e);
                }),
                sH = (e, t) => (ed(e[t]) ? (ed(e.raw[t]) ? null : e.raw[t]) : e[t]),
                sY = (e, t) => {
                    let r = sH(t, e);
                    return aq(r) ? r : [r];
                };
            function sW(e) {
                return '' !== e.search.response.searchUid;
            }
            function sJ(e, t) {
                var r;
                let n = null != (r = t.payload) ? r : null;
                (n && ((e.response = eO().response), (e.results = []), (e.questionAnswer = ek())),
                    (e.error = n),
                    (e.isLoading = !1));
            }
            function sK(e, t) {
                ((e.error = null),
                    (e.response = t.payload.response),
                    (e.queryExecuted = t.payload.queryExecuted),
                    (e.duration = t.payload.duration),
                    (e.isLoading = !1));
            }
            function sG(e, t) {
                ((e.isLoading = !0), (e.requestId = t.meta.requestId));
            }
            var sZ = t2(eO(), (e) => {
                    (e.addCase(sm.rejected, (e, t) => sJ(e, t)),
                        e.addCase(sS.rejected, (e, t) => sJ(e, t)),
                        e.addCase(sy.rejected, (e, t) => sJ(e, t)),
                        e.addCase(sm.fulfilled, (e, t) => {
                            (sK(e, t),
                                (e.results = t.payload.response.results),
                                (e.searchResponseId = t.payload.response.searchUid),
                                (e.questionAnswer = t.payload.response.questionAnswer),
                                (e.extendedResults = t.payload.response.extendedResults));
                        }),
                        e.addCase(sS.fulfilled, (e, t) => {
                            (sK(e, t), (e.results = [...e.results, ...t.payload.response.results]));
                        }),
                        e.addCase(sy.fulfilled, (e, t) => {
                            (sK(e, t), (e.results = t.payload.response.results));
                        }),
                        e.addCase(sb.fulfilled, (e, t) => {
                            ((e.response.facets = t.payload.response.facets),
                                (e.response.searchUid = t.payload.response.searchUid));
                        }),
                        e.addCase(sm.pending, sG),
                        e.addCase(sS.pending, sG),
                        e.addCase(sy.pending, sG));
                }),
                sX = t2(ae, (e) => e),
                s0 = (e) => (t) => (r) => {
                    var n, a;
                    let i = null == (n = r.payload) ? void 0 : n.analyticsAction;
                    void 0 !== i && (null == (a = r.payload) || delete a.analyticsAction);
                    let s = t(r);
                    return (
                        'search/executeSearch/fullfilled' === r.type &&
                            void 0 === i &&
                            console.error('No analytics action associated with search:', r),
                        'recommendation/get/fullfilled' === r.type &&
                            void 0 === i &&
                            console.error('No analytics action associated with recommendation:', r),
                        'productRecommendations/get/fullfilled' === r.type &&
                            void 0 === i &&
                            console.error('No analytics action associated with product recommendation:', r),
                        void 0 !== i && e.dispatch(i),
                        s
                    );
                },
                s1 = {
                    q: new em(),
                    enableQuerySyntax: new eh(),
                    aq: new em(),
                    cq: new em(),
                    firstResult: new ef({min: 0}),
                    numberOfResults: new ef({min: 0}),
                    sortCriteria: new em(),
                    f: new eS(),
                    cf: new eS(),
                    nf: new eS(),
                    df: new eS(),
                    debug: new eh(),
                    sf: new eS(),
                    tab: new em(),
                    af: new eS(),
                },
                s2 = t1('searchParameters/restore', (e) => ab(e, s1)),
                s5 = t1('tab/register', (e) => ab(e, new eS({values: {id: ag, expression: am}}))),
                s3 = t1('tab/updateActiveTab', (e) => ab(e, ag)),
                s4 = R(Q()),
                s6 = R(H()),
                s8 = R(Y());
            (s4.default.extend(s8.default), s4.default.extend(s6.default));
            var s9 = '/rest/search/v2',
                s7 = '/rest/ua',
                oe = () => ({
                    organizationId: '',
                    accessToken: '',
                    platformUrl: es(),
                    search: {
                        apiBaseUrl: `${es()}${s9}`,
                        locale: 'en-US',
                        timezone: s4.default.tz.guess(),
                        authenticationProviders: [],
                    },
                    analytics: {
                        enabled: !0,
                        apiBaseUrl: `${ea('analytics', void 0)}${s7}`,
                        originContext: 'Search',
                        originLevel2: 'default',
                        originLevel3: 'default',
                        anonymous: !1,
                        deviceId: '',
                        userDisplayName: '',
                        documentLocation: '',
                    },
                }),
                ot = t2(oe(), (e) =>
                    e
                        .addCase(sM, (e, t) => {
                            (t.payload.accessToken && (e.accessToken = t.payload.accessToken),
                                t.payload.organizationId && (e.organizationId = t.payload.organizationId),
                                t.payload.platformUrl &&
                                    ((e.platformUrl = t.payload.platformUrl),
                                    (e.search.apiBaseUrl = `${t.payload.platformUrl}${s9}`),
                                    (e.analytics.apiBaseUrl = (function (e, t) {
                                        if (ex(e)) return e.replace(/^(https:\/\/)platform/, '$1analytics') + s7;
                                        let r = eE(e, t);
                                        return r ? ei(t, r.environment).analytics : e;
                                    })(t.payload.platformUrl, e.organizationId))));
                        })
                        .addCase(sL, (e, t) => {
                            (t.payload.apiBaseUrl && (e.search.apiBaseUrl = t.payload.apiBaseUrl),
                                t.payload.locale && (e.search.locale = t.payload.locale),
                                t.payload.timezone && (e.search.timezone = t.payload.timezone),
                                t.payload.authenticationProviders &&
                                    (e.search.authenticationProviders = t.payload.authenticationProviders));
                        })
                        .addCase(s$, (e, t) => {
                            (ed(t.payload.enabled) ||
                                (!t.payload.enabled && e.analytics.enabled && au(e.analytics),
                                (e.analytics.enabled = t.payload.enabled)),
                                ed(t.payload.originContext) || (e.analytics.originContext = t.payload.originContext),
                                ed(t.payload.originLevel2) || (e.analytics.originLevel2 = t.payload.originLevel2),
                                ed(t.payload.originLevel3) || (e.analytics.originLevel3 = t.payload.originLevel3),
                                ed(t.payload.apiBaseUrl) || (e.analytics.apiBaseUrl = t.payload.apiBaseUrl),
                                ed(t.payload.runtimeEnvironment) ||
                                    (e.analytics.runtimeEnvironment = t.payload.runtimeEnvironment),
                                ed(t.payload.anonymous) || (e.analytics.anonymous = t.payload.anonymous),
                                ed(t.payload.deviceId) || (e.analytics.deviceId = t.payload.deviceId),
                                ed(t.payload.userDisplayName) ||
                                    (e.analytics.userDisplayName = t.payload.userDisplayName),
                                ed(t.payload.documentLocation) ||
                                    (e.analytics.documentLocation = t.payload.documentLocation));
                        })
                        .addCase(s_, (e) => {
                            ((e.analytics.enabled = !1), au(e.analytics));
                        })
                        .addCase(sN, (e) => {
                            e.analytics.enabled = !0;
                        })
                        .addCase(sQ, (e, t) => {
                            e.analytics.originLevel2 = t.payload.originLevel2;
                        })
                        .addCase(sz, (e, t) => {
                            e.analytics.originLevel3 = t.payload.originLevel3;
                        })
                        .addCase(s3, (e, t) => {
                            e.analytics.originLevel2 = t.payload;
                        })
                        .addCase(s2, (e, t) => {
                            e.analytics.originLevel2 = t.payload.tab || e.analytics.originLevel2;
                        }),
                ),
                or = () => (e) => (t) => e(t.instantlyCallable ? t() : t),
                on = (e) => () => (t) => (r) => {
                    var n;
                    if (!r.error) return t(r);
                    let a = r.error;
                    if (
                        ((null == (n = r.payload) ? void 0 : n.ignored) ||
                            e.error(a.stack || a.message || a.name || 'Error', `Action dispatch error ${r.type}`, r),
                        'SchemaValidationError' !== r.error.name)
                    )
                        return t(r);
                },
                oa = (e) => (t) => (r) => (n) => (
                    e.debug({action: n, nextState: t.getState()}, `Action dispatched: ${n.type}`),
                    r(n)
                );
            function oi(e, t, r) {
                (void 0 === t && (t = 50), void 0 === r && (r = {}));
                var n,
                    a,
                    i,
                    s = null != (n = r.isImmediate) && n,
                    o = null != (a = r.callback) && a,
                    l = r.maxWait,
                    u = Date.now(),
                    c = [],
                    d = function () {
                        var r = [].slice.call(arguments),
                            n = this;
                        return new Promise(function (a, d) {
                            var f = s && void 0 === i;
                            if (
                                (void 0 !== i && clearTimeout(i),
                                (i = setTimeout(
                                    function () {
                                        if (((i = void 0), (u = Date.now()), !s)) {
                                            var t = e.apply(n, r);
                                            (o && o(t),
                                                c.forEach(function (e) {
                                                    return (0, e.resolve)(t);
                                                }),
                                                (c = []));
                                        }
                                    },
                                    (function () {
                                        if (void 0 !== l) {
                                            var e = Date.now() - u;
                                            if (e + t >= l) return l - e;
                                        }
                                        return t;
                                    })(),
                                )),
                                f)
                            ) {
                                var p = e.apply(n, r);
                                return (o && o(p), a(p));
                            }
                            c.push({resolve: a, reject: d});
                        });
                    };
                return (
                    (d.cancel = function (e) {
                        (void 0 !== i && clearTimeout(i),
                            c.forEach(function (t) {
                                return (0, t.reject)(e);
                            }),
                            (c = []));
                    }),
                    d
                );
            }
            async function os(e) {
                try {
                    return await e();
                } catch (e) {
                    return '';
                }
            }
            var oo = {configuration: ot, version: sX},
                ol = R(J()),
                ou = {
                    organizationId: ag,
                    accessToken: ag,
                    platformUrl: new em({required: !1, emptyAllowed: !1}),
                    name: new em({required: !1, emptyAllowed: !1}),
                    analytics: new eS({
                        options: {required: !1},
                        values: {
                            enabled: new eh({required: !1}),
                            originContext: new em({required: !1}),
                            originLevel2: new em({required: !1}),
                            originLevel3: new em({required: !1}),
                        },
                    }),
                },
                oc = new el({...ou, insightId: ag}),
                od = {insightConfiguration: aH, search: sZ, insightInterface: aK, searchHub: sB, resultPreview: sT};
            function of(e) {
                var t, r, n;
                let a =
                    ((t = e.loggerOptions),
                    (0, ol.default)({
                        name: '@coveo/headless',
                        level: (null == t ? void 0 : t.level) || 'warn',
                        formatters: {log: null == t ? void 0 : t.logFormatter},
                        browser: {transmit: {send: (null == t ? void 0 : t.browserPostLogHook) || (() => {})}},
                    }));
                !(function (e, t) {
                    try {
                        oc.validate(e);
                    } catch (e) {
                        throw (t.error(e, 'Insight engine configuration error'), e);
                    }
                })(e.configuration, a);
                let i = ((n = e.configuration), new eN({logger: a, preprocessRequest: n.preprocessRequest || G})),
                    s = {
                        analyticsClientMiddleware: (function (e) {
                            let {analytics: t} = e;
                            return (null == t ? void 0 : t.analyticsClientMiddleware) || ((e, t) => t);
                        })((r = e.configuration)),
                        validatePayload: aS,
                        preprocessRequest: r.preprocessRequest || G,
                        logger: a,
                        apiClient: i,
                    },
                    o = (function (e, t) {
                        var r, n;
                        let a = (function (e, t) {
                                var r, n, a;
                                let i, s, o;
                                let {reducers: l} = e,
                                    u =
                                        ((n = {...oo, ...l}),
                                        (a = null != (r = e.preloadedState) ? r : {}),
                                        (i = {...n}),
                                        (o = (e) => (t, r) => {
                                            let n = e(t, r);
                                            return s ? s(n, r) : n;
                                        }),
                                        {
                                            get combinedReducer() {
                                                return o(
                                                    tT({
                                                        ...(function (e) {
                                                            let t = {};
                                                            for (let [r, n] of e) t[r] = n;
                                                            return t;
                                                        })(
                                                            Object.entries(a)
                                                                .filter(([e]) => !(e in i))
                                                                .map(([e, t]) => [e, () => t]),
                                                        ),
                                                        ...i,
                                                    }),
                                                );
                                            },
                                            containsAll: (e) => Object.keys(e).every((e) => e in i),
                                            add(e) {
                                                Object.keys(e)
                                                    .filter((e) => !(e in i))
                                                    .forEach((t) => (i[t] = e[t]));
                                            },
                                            addCrossReducer(e) {
                                                s = e;
                                            },
                                        });
                                e.crossReducer && u.addCrossReducer(e.crossReducer);
                                let c = t.logger,
                                    d = (function (e, t, r) {
                                        let {preloadedState: n, configuration: a} = e,
                                            i = a.name || 'coveo-headless',
                                            s = (function (e, t) {
                                                let r, n;
                                                let {renewAccessToken: a} = e.configuration;
                                                return [
                                                    or,
                                                    ((r = 0),
                                                    (n = oi(() => (r = 0), 500)),
                                                    (e) => (i) => async (s) => {
                                                        var o;
                                                        if ('function' != typeof s) return i(s);
                                                        let l = await i(s);
                                                        if (
                                                            (null == (o = null == l ? void 0 : l.error)
                                                                ? void 0
                                                                : o.name) !== new ee().name
                                                        )
                                                            return l;
                                                        if ('function' != typeof a)
                                                            return (
                                                                t.warn(
                                                                    'Unable to renew the expired token because a renew function was not provided. Please specify the #renewAccessToken option when initializing the engine.',
                                                                ),
                                                                l
                                                            );
                                                        if (r >= 5)
                                                            return (
                                                                t.warn(
                                                                    'Attempted to renew the token but was not successful. Please check the #renewAccessToken function.',
                                                                ),
                                                                l
                                                            );
                                                        (r++, n());
                                                        let u = await os(a);
                                                        (e.dispatch(sM({accessToken: u})), e.dispatch(s));
                                                    }),
                                                    on(t),
                                                    s0,
                                                ].concat(e.middlewares || []);
                                            })(e, t.logger);
                                        return (function ({
                                            reducer: e,
                                            preloadedState: t,
                                            middlewares: r = [],
                                            thunkExtraArguments: n,
                                            name: a,
                                        }) {
                                            return (function (e) {
                                                var t,
                                                    r = function (e) {
                                                        var t, r, n, a;
                                                        return (
                                                            void 0 === (t = e) && (t = {}),
                                                            (n = void 0 === (r = t.thunk) || r),
                                                            (a = new tX()),
                                                            n &&
                                                                ('boolean' == typeof n
                                                                    ? a.push(tL)
                                                                    : a.push(tL.withExtraArgument(n.extraArgument))),
                                                            a
                                                        );
                                                    },
                                                    n = e || {},
                                                    a = n.reducer,
                                                    i = void 0 === a ? void 0 : a,
                                                    s = n.middleware,
                                                    o = void 0 === s ? r() : s,
                                                    l = n.devTools,
                                                    u = void 0 === l || l,
                                                    c = n.preloadedState,
                                                    d = void 0 === c ? void 0 : c,
                                                    f = n.enhancers,
                                                    p = void 0 === f ? void 0 : f;
                                                if ('function' == typeof i) t = i;
                                                else if (
                                                    (function (e) {
                                                        if ('object' != typeof e || null === e) return !1;
                                                        var t = Object.getPrototypeOf(e);
                                                        if (null === t) return !0;
                                                        for (var r = t; null !== Object.getPrototypeOf(r); )
                                                            r = Object.getPrototypeOf(r);
                                                        return t === r;
                                                    })(i)
                                                )
                                                    t = tT(i);
                                                else
                                                    throw Error(
                                                        '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
                                                    );
                                                var h = o;
                                                'function' == typeof h && (h = h(r));
                                                var g = tV.apply(void 0, h),
                                                    v = tU;
                                                u && (v = tZ(tK({trace: !1}, 'object' == typeof u && u)));
                                                var m = [g];
                                                return (
                                                    Array.isArray(p)
                                                        ? (m = tN([g], p))
                                                        : 'function' == typeof p && (m = p(m)),
                                                    (function e(t, r, n) {
                                                        if (
                                                            ('function' == typeof r && 'function' == typeof n) ||
                                                            ('function' == typeof n &&
                                                                'function' == typeof arguments[3])
                                                        )
                                                            throw Error(tF(0));
                                                        if (
                                                            ('function' == typeof r &&
                                                                void 0 === n &&
                                                                ((n = r), (r = void 0)),
                                                            void 0 !== n)
                                                        ) {
                                                            if ('function' != typeof n) throw Error(tF(1));
                                                            return n(e)(t, r);
                                                        }
                                                        if ('function' != typeof t) throw Error(tF(2));
                                                        var a,
                                                            i = t,
                                                            s = r,
                                                            o = [],
                                                            l = o,
                                                            u = !1;
                                                        function c() {
                                                            l === o && (l = o.slice());
                                                        }
                                                        function d() {
                                                            if (u) throw Error(tF(3));
                                                            return s;
                                                        }
                                                        function f(e) {
                                                            if ('function' != typeof e) throw Error(tF(4));
                                                            if (u) throw Error(tF(5));
                                                            var t = !0;
                                                            return (
                                                                c(),
                                                                l.push(e),
                                                                function () {
                                                                    if (t) {
                                                                        if (u) throw Error(tF(6));
                                                                        ((t = !1), c());
                                                                        var r = l.indexOf(e);
                                                                        (l.splice(r, 1), (o = null));
                                                                    }
                                                                }
                                                            );
                                                        }
                                                        function p(e) {
                                                            if (
                                                                !(function (e) {
                                                                    if ('object' != typeof e || null === e) return !1;
                                                                    for (var t = e; null !== Object.getPrototypeOf(t); )
                                                                        t = Object.getPrototypeOf(t);
                                                                    return Object.getPrototypeOf(e) === t;
                                                                })(e)
                                                            )
                                                                throw Error(tF(7));
                                                            if (void 0 === e.type) throw Error(tF(8));
                                                            if (u) throw Error(tF(9));
                                                            try {
                                                                ((u = !0), (s = i(s, e)));
                                                            } finally {
                                                                u = !1;
                                                            }
                                                            for (var t = (o = l), r = 0; r < t.length; r++) (0, t[r])();
                                                            return e;
                                                        }
                                                        return (
                                                            p({type: tP.INIT}),
                                                            ((a = {
                                                                dispatch: p,
                                                                subscribe: f,
                                                                getState: d,
                                                                replaceReducer: function (e) {
                                                                    if ('function' != typeof e) throw Error(tF(10));
                                                                    ((i = e), p({type: tP.REPLACE}));
                                                                },
                                                            })[tD] = function () {
                                                                var e;
                                                                return (
                                                                    ((e = {
                                                                        subscribe: function (e) {
                                                                            if ('object' != typeof e || null === e)
                                                                                throw Error(tF(11));
                                                                            function t() {
                                                                                e.next && e.next(d());
                                                                            }
                                                                            return (t(), {unsubscribe: f(t)});
                                                                        },
                                                                    })[tD] = function () {
                                                                        return this;
                                                                    }),
                                                                    e
                                                                );
                                                            }),
                                                            a
                                                        );
                                                    })(t, d, v.apply(void 0, m))
                                                );
                                            })({
                                                reducer: e,
                                                preloadedState: t,
                                                devTools: {
                                                    stateSanitizer: (e) =>
                                                        e.history ? {...e, history: '<<OMIT>>'} : e,
                                                    name: a,
                                                    shouldHotReload: !1,
                                                },
                                                middleware: (e) => [
                                                    ...r,
                                                    ...e({thunk: {extraArgument: n}}),
                                                    oa(n.logger),
                                                ],
                                            });
                                        })({
                                            preloadedState: n,
                                            reducer: r.combinedReducer,
                                            middlewares: s,
                                            thunkExtraArguments: t,
                                            name: i,
                                        });
                                    })(e, t, u);
                                return {
                                    addReducers(e) {
                                        u.containsAll(e) || (u.add(e), d.replaceReducer(u.combinedReducer));
                                    },
                                    dispatch: d.dispatch,
                                    subscribe: d.subscribe,
                                    enableAnalytics() {
                                        d.dispatch(sN());
                                    },
                                    disableAnalytics() {
                                        d.dispatch(s_());
                                    },
                                    get state() {
                                        return d.getState();
                                    },
                                    logger: c,
                                    store: d,
                                };
                            })(e, t),
                            {accessToken: i, organizationId: s} = e.configuration,
                            {organizationEndpoints: o} = e.configuration,
                            l = (null == o ? void 0 : o.platform) || e.configuration.platformUrl;
                        ((!ed(e.configuration.platformUrl) ||
                            ed(null == (n = e.configuration.organizationEndpoints) ? void 0 : n.platform)) &&
                            a.logger.warn(
                                `The \`platformUrl\` (${e.configuration.platformUrl}) option will be deprecated in the next major version. Consider using the \`organizationEndpoints\` option instead. See [Organization endpoints](https://docs.coveo.com/en/mcc80216).`,
                            ),
                            ec(e.configuration.organizationEndpoints)
                                ? a.logger.warn(
                                      'The `organizationEndpoints` options was not explicitly set in the Headless engine configuration. Coveo recommends setting this option, as it has resiliency benefits and simplifies the overall configuration for multi-region deployments. See [Organization endpoints](https://docs.coveo.com/en/mcc80216).',
                                  )
                                : (function (e) {
                                      let {platform: t} = e.configuration.organizationEndpoints;
                                      if (ec(t)) return !1;
                                      let r = eR(t);
                                      return r && r.organizationId !== e.configuration.organizationId;
                                  })(e) &&
                                  a.logger.warn(
                                      `There is a mismatch between the \`organizationId\` option (${e.configuration.organizationId}) and the organization configured in the \`organizationEndpoints\` option (${null == (r = e.configuration.organizationEndpoints) ? void 0 : r.platform}). This could lead to issues that are complex to troubleshoot. Please make sure both values match.`,
                                  ),
                            a.dispatch(sM({accessToken: i, organizationId: s, platformUrl: l})));
                        let u = (function (e, t) {
                            var r, n;
                            let a =
                                    (null == (r = e.configuration.organizationEndpoints) ? void 0 : r.analytics) ||
                                    void 0,
                                {analyticsClientMiddleware: i, ...s} = null != (n = e.configuration.analytics) ? n : {},
                                o = {...s, apiBaseUrl: a};
                            return aR()
                                ? (t.info('Analytics disabled since doNotTrack is active.'), {...o, enabled: !1})
                                : o;
                        })(e, a.logger);
                        return (u && a.dispatch(s$(u)), a);
                    })({...e, reducers: od}, s),
                    {insightId: l} = e.configuration;
                return (
                    o.dispatch(aB({insightId: l})),
                    {
                        ...o,
                        get state() {
                            return o.state;
                        },
                        executeFirstSearch(e = aQ()) {
                            sW(o.state) || o.dispatch(i_(e));
                        },
                    }
                );
            }
            var op = {id: ag},
                oh = t1('querySuggest/register', (e) => ab(e, {...op, count: new ef({min: 0})})),
                og = t1('querySuggest/unregister', (e) => ab(e, op)),
                ov = t1('querySuggest/selectSuggestion', (e) => ab(e, {...op, expression: am})),
                om = t1('querySuggest/clear', (e) => ab(e, op)),
                oy = t9(
                    'querySuggest/fetch',
                    async (e, {getState: t, rejectWithValue: r, extra: {apiClient: n, validatePayload: a}}) => {
                        a(e, op);
                        let i = e.id,
                            s = await oS(i, t()),
                            o = await n.querySuggest(s);
                        return ej(o) ? r(o.error) : {id: i, q: s.q, ...o.success};
                    },
                ),
                oS = async (e, t) => ({
                    accessToken: t.configuration.accessToken,
                    organizationId: t.configuration.organizationId,
                    url: t.configuration.search.apiBaseUrl,
                    count: t.querySuggest[e].count,
                    q: t.querySet[e],
                    locale: t.configuration.search.locale,
                    timezone: t.configuration.search.timezone,
                    actionsHistory: t.configuration.analytics.enabled ? ac.getHistory() : [],
                    ...(t.context && {context: t.context.contextValues}),
                    ...(t.pipeline && {pipeline: t.pipeline}),
                    ...(t.searchHub && {searchHub: t.searchHub}),
                    ...(t.configuration.analytics.enabled && {
                        visitorId: await al(t.configuration.analytics),
                        ...(t.configuration.analytics.enabled && (await iA(t.configuration.analytics))),
                    }),
                    ...(t.configuration.search.authenticationProviders.length && {
                        authentication: t.configuration.search.authenticationProviders.join(','),
                    }),
                }),
                ob = {id: ag, query: am},
                ow = t1('querySet/register', (e) => ab(e, ob)),
                oC = t1('querySet/update', (e) => ab(e, ob)),
                oI = t2({}, (e) => {
                    e.addCase(ow, (e, t) => {
                        let {id: r, query: n} = t.payload;
                        r in e || (e[r] = n);
                    })
                        .addCase(oC, (e, t) => {
                            let {id: r, query: n} = t.payload;
                            oO(e, r, n);
                        })
                        .addCase(ov, (e, t) => {
                            let {id: r, expression: n} = t.payload;
                            oO(e, r, n);
                        })
                        .addCase(sm.fulfilled, (e, t) => {
                            let {queryExecuted: r} = t.payload;
                            ok(e, r);
                        })
                        .addCase(s2, (e, t) => {
                            ed(t.payload.q) || ok(e, t.payload.q);
                        })
                        .addCase(a3.fulfilled, (e, t) => {
                            if (t.payload) for (let [r, n] of Object.entries(t.payload.querySet)) oO(e, r, n);
                        });
                });
            function ok(e, t) {
                Object.keys(e).forEach((r) => (e[r] = t));
            }
            var oO = (e, t, r) => {
                t in e && (e[t] = r);
            };
            function oq(e) {
                return (e.addReducers({querySet: oI}), {registerQuerySetQuery: ow, updateQuerySetQuery: oC});
            }
            var ox = {categoryFacetId: ag, categoryFacetPath: new ew({required: !0, each: ag})},
                oE = (e, {categoryFacetId: t, categoryFacetPath: r}) => {
                    let n = e.categoryFacetSet[t],
                        a = null == n ? void 0 : n.request.field,
                        i = `${a}_${t}`;
                    return {categoryFacetId: t, categoryFacetPath: r, categoryFacetField: a, categoryFacetTitle: i};
                },
                oR = (e) =>
                    aT('analytics/categoryFacet/breadcrumb', aD.Search, (t, r) => {
                        ab(e, ox);
                        let n = {...oE(r, e), ...eQ(r.insightCaseContext)};
                        return t.logBreadcrumbFacet(n);
                    }),
                oA = (e) =>
                    aT('analytics/facet/showMore', aD.Search, (t, r) => {
                        ab(e, ag);
                        let n = {...nB(e, nY(r)), ...eQ(r.insightCaseContext)};
                        return t.logFacetShowMore(n);
                    }),
                oF = (e) =>
                    aT('analytics/facet/showLess', aD.Search, (t, r) => {
                        ab(e, ag);
                        let n = {...nB(e, nY(r)), ...eQ(r.insightCaseContext)};
                        return t.logFacetShowLess(n);
                    }),
                oD = (e) =>
                    aT('analytics/facet/sortChange', aD.Search, (t, r) => {
                        ab(e, {facetId: ag, sortCriterion: new eu({required: !0})});
                        let {facetId: n, sortCriterion: a} = e,
                            i = {...nB(n, nY(r)), criteria: a, ...eQ(r.insightCaseContext)};
                        return t.logFacetUpdateSort(i);
                    }),
                oj = (e) =>
                    aT('analytics/facet/reset', aD.Search, (t, r) => {
                        ab(e, ag);
                        let n = {...nB(e, nY(r)), ...eQ(r.insightCaseContext)};
                        return t.logFacetClearAll(n);
                    }),
                oP = (e) =>
                    aT('analytics/facet/select', aD.Search, (t, r) => {
                        ab(e, {facetId: ag, facetValue: ag});
                        let n = {...nH(e, nY(r)), ...eQ(r.insightCaseContext)};
                        return t.logFacetSelect(n);
                    }),
                oT = (e) =>
                    aT('analytics/facet/deselect', aD.Search, (t, r) => {
                        ab(e, {facetId: ag, facetValue: ag});
                        let n = {...nH(e, nY(r)), ...eQ(r.insightCaseContext)};
                        return t.logFacetDeselect(n);
                    }),
                oU = (e) =>
                    aT('analytics/facet/breadcrumb', aD.Search, (t, r) => {
                        ab(e, {facetId: ag, facetValue: ag});
                        let n = {...nH(e, nY(r)), ...eQ(r.insightCaseContext)};
                        return t.logBreadcrumbFacet(n);
                    }),
                oV = () =>
                    aT('analytics/facet/deselectAllBreadcrumbs', aD.Search, (e, t) =>
                        e.logBreadcrumbResetAll(eQ(t.insightCaseContext)),
                    ),
                oM = (e, {facetId: t, selection: r}) => {
                    let n = (e.dateFacetSet[t] || e.numericFacetSet[t]).request.field,
                        a = `${n}_${t}`;
                    return {
                        facetId: t,
                        facetField: n,
                        facetTitle: a,
                        facetRangeEndInclusive: r.endInclusive,
                        facetRangeEnd: `${r.end}`,
                        facetRangeStart: `${r.start}`,
                    };
                },
                oL = {
                    state: ag,
                    start: new ef({required: !0}),
                    end: new ef({required: !0}),
                    endInclusive: new eh({required: !0}),
                    numberOfResults: new ef({required: !0, min: 0}),
                },
                o$ = {
                    start: ag,
                    end: ag,
                    endInclusive: new eh({required: !0}),
                    state: ag,
                    numberOfResults: new ef({required: !0, min: 0}),
                },
                o_ = (e) => ({
                    facetId: ag,
                    selection: new eS('string' == typeof e.start ? {values: o$} : {values: oL}),
                }),
                oN = (e) =>
                    aT('analytics/dateFacet/breadcrumb', aD.Search, (t, r) => {
                        ab(e, o_(e.selection));
                        let n = {...oM(r, e), ...eQ(r.insightCaseContext)};
                        return t.logBreadcrumbFacet(n);
                    }),
                oQ = (e, {facetId: t, selection: r}) => {
                    let n = (e.dateFacetSet[t] || e.numericFacetSet[t]).request.field,
                        a = `${n}_${t}`;
                    return {
                        facetId: t,
                        facetField: n,
                        facetTitle: a,
                        facetRangeEndInclusive: r.endInclusive,
                        facetRangeEnd: `${r.end}`,
                        facetRangeStart: `${r.start}`,
                    };
                },
                oz = (e) =>
                    aT('analytics/numericFacet/breadcrumb', aD.Search, (t, r) => {
                        ab(e, o_(e.selection));
                        let n = {...oQ(r, e), ...eQ(r.insightCaseContext)};
                        return t.logBreadcrumbFacet(n);
                    }),
                oB = {value: ag, numberOfResults: new ef({min: 0}), state: ag},
                oH = new ef({min: 1, default: 8, required: !1}),
                oY = {desiredCount: new ef({min: 1, max: 10, default: 5, required: !1}), numberOfValues: oH};
            (t1('automaticFacet/setOptions', (e) => ab(e, oY)), t1('automaticFacet/deselectAll', (e) => ab(e, ag)));
            var oW = t1('automaticFacet/toggleSelectValue', (e) => ab(e, {field: ag, selection: new eS({values: oB})})),
                oJ = {
                    state: new eu({required: !0}),
                    numberOfResults: new ef({required: !0, min: 0}),
                    value: new em({required: !0, emptyAllowed: !0}),
                    path: new ew({required: !0, each: ag}),
                    moreValuesAvailable: new eh({required: !1}),
                },
                oK = {
                    facetId: ag,
                    field: ag,
                    delimitingCharacter: new em({required: !1, emptyAllowed: !0}),
                    filterFacetCount: new eh({required: !1}),
                    injectionDepth: new ef({required: !1, min: 0}),
                    numberOfValues: new ef({required: !1, min: 1}),
                    sortCriteria: new eu({required: !1}),
                    basePath: new ew({required: !1, each: ag}),
                    filterByBasePath: new eh({required: !1}),
                },
                oG = t1('categoryFacet/register', (e) => ab(e, oK)),
                oZ = t1('categoryFacet/toggleSelectValue', (e) => {
                    try {
                        return (
                            aS(e.facetId, ag),
                            (function e(t) {
                                (t.children.forEach((t) => {
                                    e(t);
                                }),
                                    aS(
                                        {
                                            state: t.state,
                                            numberOfResults: t.numberOfResults,
                                            value: t.value,
                                            path: t.path,
                                            moreValuesAvailable: t.moreValuesAvailable,
                                        },
                                        oJ,
                                    ));
                            })(e.selection),
                            {payload: e, error: null}
                        );
                    } catch (t) {
                        return {payload: e, error: ay(t)};
                    }
                }),
                oX = t1('categoryFacet/deselectAll', (e) => ab(e, oK.facetId)),
                o0 = t1('categoryFacet/updateNumberOfValues', (e) =>
                    ab(e, {facetId: oK.facetId, numberOfValues: oK.numberOfValues}),
                ),
                o1 = t1('categoryFacet/updateSortCriterion', (e) => ab(e, {facetId: oK.facetId, criterion: new eu()})),
                o2 = t1('categoryFacet/updateBasePath', (e) =>
                    ab(e, {facetId: oK.facetId, basePath: new ew({each: ag})}),
                ),
                o5 = {
                    facetId: ag,
                    captions: new eS({options: {required: !1}}),
                    numberOfValues: new ef({required: !1, min: 1}),
                    query: new em({required: !1, emptyAllowed: !0}),
                },
                o3 = {
                    path: new ew({required: !0, each: ag}),
                    displayValue: am,
                    rawValue: am,
                    count: new ef({required: !0, min: 0}),
                },
                o4 = t1('categoryFacet/selectSearchResult', (e) => ab(e, {facetId: ag, value: new eS({values: o3})})),
                o6 = t1('categoryFacetSearch/register', (e) => ab(e, o5)),
                o8 = {
                    facetId: ag,
                    value: new eS({values: {displayValue: am, rawValue: am, count: new ef({required: !0, min: 0})}}),
                },
                o9 = t1('facetSearch/register', (e) => ab(e, o5)),
                o7 = t1('facetSearch/update', (e) => ab(e, o5)),
                le = t1('facetSearch/toggleSelectValue', (e) => ab(e, o8));
            function lt(e) {
                var t, r;
                return {
                    start: lr(e.start, e),
                    end: lr(e.end, e),
                    endInclusive: null != (t = e.endInclusive) && t,
                    state: null != (r = e.state) ? r : 'idle',
                };
            }
            function lr(e, t) {
                let {dateFormat: r} = t;
                return e && 'object' == typeof e && 'period' in e
                    ? (ib(e),
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
                    : 'string' == typeof e && ik(e)
                      ? (ib(e), e)
                      : ((function (e, t) {
                            let r = ig(e, t);
                            if (!r.isValid())
                                throw Error(
                                    `Could not parse the provided date "${e}"${t ? ` with the format "${t}""` : '. Please provide a date format string in the configuration options. See https://day.js.org/docs/en/parse/string-format for more information.'}`,
                                );
                            iv(r);
                        })(e, r),
                        ig(e, r).format(ih));
            }
            t1('facetSearch/toggleExcludeValue', (e) => ab(e, o8));
            var ln = new em({regex: /^[a-zA-Z0-9-_]+$/}),
                la = new em({required: !0}),
                li = new eh(),
                ls = new ef({min: 0}),
                lo = new ef({min: 1}),
                ll = new eh({required: !0}),
                lu = new eS(),
                lc = new em(),
                ld = new eS({values: {captions: lu, numberOfValues: lo, query: lc}}),
                lf = new eS({
                    options: {required: !1},
                    values: {
                        type: new em({constrainTo: ['simple'], emptyAllowed: !1, required: !0}),
                        values: new ew({required: !0, max: 25, each: new em({emptyAllowed: !1, required: !0})}),
                    },
                }),
                lp = new ew({min: 1, max: 25, required: !1, each: new em({emptyAllowed: !1, required: !0})}),
                lh = {
                    facetId: ag,
                    field: new em({required: !0, emptyAllowed: !0}),
                    filterFacetCount: new eh({required: !1}),
                    injectionDepth: new ef({required: !1, min: 0}),
                    numberOfValues: new ef({required: !1, min: 1}),
                    sortCriteria: new eu({required: !1}),
                    allowedValues: lf,
                    customSort: lp,
                },
                lg = t1('facet/register', (e) => ab(e, lh)),
                lv = t1('facet/toggleSelectValue', (e) => ab(e, {facetId: ag, selection: new eS({values: oB})})),
                lm = t1('facet/toggleExcludeValue', (e) => ab(e, {facetId: ag, selection: new eS({values: oB})})),
                ly = t1('facet/deselectAll', (e) => ab(e, ag)),
                lS = t1('facet/updateSortCriterion', (e) => ab(e, {facetId: ag, criterion: new eu({required: !0})})),
                lb = t1('facet/updateNumberOfValues', (e) =>
                    ab(e, {facetId: ag, numberOfValues: new ef({required: !0, min: 1})}),
                ),
                lw = t1('facet/updateIsFieldExpanded', (e) =>
                    ab(e, {facetId: ag, isFieldExpanded: new eh({required: !0})}),
                ),
                lC = t1('facet/updateFreezeCurrentValues', (e) =>
                    ab(e, {facetId: ag, freezeCurrentValues: new eh({required: !0})}),
                ),
                lI = t1('rangeFacet/updateSortCriterion', (e) =>
                    ab(e, {facetId: ag, criterion: new eu({required: !0})}),
                ),
                lk = {start: ag, end: ag, endInclusive: new eh({required: !0}), state: ag},
                lO = {
                    facetId: ag,
                    field: ag,
                    currentValues: new ew({required: !1, each: new eS({values: lk})}),
                    generateAutomaticRanges: new eh({required: !0}),
                    filterFacetCount: new eh({required: !1}),
                    injectionDepth: new ef({required: !1, min: 0}),
                    numberOfValues: new ef({required: !1, min: 1}),
                    sortCriteria: new eu({required: !1}),
                    rangeAlgorithm: new eu({required: !1}),
                };
            function lq(e) {
                e.currentValues &&
                    e.currentValues.forEach((e) => {
                        let {start: t, end: r} = lt(e);
                        if (ig(ik(t) ? iC(t) : t).isAfter(ig(ik(r) ? iC(r) : r)))
                            throw Error(
                                `The start value is greater than the end value for the date range ${e.start} to ${e.end}`,
                            );
                    });
            }
            var lx = t1('dateFacet/register', (e) => {
                    try {
                        return (aS(e, lO), lq(e), {payload: e, error: null});
                    } catch (t) {
                        return {payload: e, error: ay(t)};
                    }
                }),
                lE = t1('dateFacet/toggleSelectValue', (e) => ab(e, {facetId: ag, selection: new eS({values: o$})})),
                lR = t1('dateFacet/toggleExcludeValue', (e) => ab(e, {facetId: ag, selection: new eS({values: o$})})),
                lA = t1('dateFacet/updateFacetValues', (e) => {
                    try {
                        return (
                            aS(e, {facetId: ag, values: new ew({each: new eS({values: o$})})}),
                            lq({currentValues: e.values}),
                            {payload: e, error: null}
                        );
                    } catch (t) {
                        return {payload: e, error: ay(t)};
                    }
                }),
                lF = {
                    state: ag,
                    start: new ef({required: !0}),
                    end: new ef({required: !0}),
                    endInclusive: new eh({required: !0}),
                },
                lD = {
                    facetId: ag,
                    field: ag,
                    currentValues: new ew({required: !1, each: new eS({values: lF})}),
                    generateAutomaticRanges: new eh({required: !0}),
                    filterFacetCount: new eh({required: !1}),
                    injectionDepth: new ef({required: !1, min: 0}),
                    numberOfValues: new ef({required: !1, min: 1}),
                    sortCriteria: new eu({required: !1}),
                    rangeAlgorithm: new eu({required: !1}),
                };
            function lj(e) {
                e.currentValues &&
                    e.currentValues.forEach(({start: e, end: t}) => {
                        if (e > t)
                            throw Error(
                                `The start value is greater than the end value for the numeric range ${e} to ${t}`,
                            );
                    });
            }
            var lP = t1('numericFacet/register', (e) => {
                    try {
                        return (ab(e, lD), lj(e), {payload: e, error: null});
                    } catch (t) {
                        return {payload: e, error: ay(t)};
                    }
                }),
                lT = t1('numericFacet/toggleSelectValue', (e) => ab(e, {facetId: ag, selection: new eS({values: oL})})),
                lU = t1('numericFacet/toggleExcludeValue', (e) =>
                    ab(e, {facetId: ag, selection: new eS({values: oL})}),
                ),
                lV = t1('numericFacet/updateFacetValues', (e) => {
                    try {
                        return (
                            aS(e, {facetId: ag, values: new ew({each: new eS({values: oL})})}),
                            lj({currentValues: e.values}),
                            {payload: e, error: null}
                        );
                    } catch (t) {
                        return {payload: e, error: ay(t)};
                    }
                }),
                lM = (((d = lM || {}).Relevance = 'relevance'), (d.Fields = 'fields'), d),
                lL = (((f = lL || {}).Ascending = 'asc'), (f.Descending = 'desc'), f),
                l$ = () =>
                    aN(
                        'analytics/productListing/load',
                        aD.Search,
                        (e) => e.makeInterfaceLoad(),
                        (e) => new as(e),
                    );
            (t1('productlisting/setUrl', (e) => ab(e, {url: new em({required: !0, url: !0})})),
                t1('productlisting/setAdditionalFields', (e) =>
                    ab(e, {additionalFields: new ew({required: !0, each: new em({required: !0, emptyAllowed: !1})})}),
                ));
            var l_ = t9('productlisting/fetch', async (e, {getState: t, dispatch: r, rejectWithValue: n, extra: a}) => {
                    let i = t(),
                        {apiClient: s} = a,
                        o = await s.getProducts(await lN(i));
                    return ej(o) ? (r(sc(o.error)), n(o.error)) : {response: o.success, analyticsAction: l$()};
                }),
                lN = async (e) => {
                    var t, r, n, a, i, s, o, l;
                    let u = sd(
                            [
                                ...iP(null != (i = e.facetSet) ? i : {}),
                                ...iP(null != (s = e.numericFacetSet) ? s : {}),
                                ...iP(null != (o = e.dateFacetSet) ? o : {}),
                                ...iP(null != (l = e.categoryFacetSet) ? l : {}),
                            ],
                            null != (a = e.facetOrder) ? a : [],
                        ),
                        c = await al(e.configuration.analytics);
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
                        ...(u.length && {facets: {requests: u}}),
                        ...(e.pagination && {
                            pagination: {
                                numberOfValues: e.pagination.numberOfResults,
                                page: Math.ceil(e.pagination.firstResult / (e.pagination.numberOfResults || 1)) + 1,
                            },
                        }),
                        ...(((null == (n = e.sort) ? void 0 : n.by) || lM.Relevance) !== lM.Relevance && {
                            sort: e.sort,
                        }),
                        ...(e.context && {userContext: e.context.contextValues}),
                    };
                },
                lQ = t2(it(), (e) => {
                    e.addCase(i9, (e, t) => {
                        let r = lB(e),
                            n = t.payload;
                        ((e.defaultNumberOfResults = e.numberOfResults = n), (e.firstResult = (r - 1) * n));
                    })
                        .addCase(i7, (e, t) => {
                            ((e.numberOfResults = t.payload), (e.firstResult = 0));
                        })
                        .addCase(s3, (e) => {
                            e.firstResult = 0;
                        })
                        .addCase(se, (e, t) => {
                            var r;
                            let n = t.payload;
                            e.firstResult = (n - 1) * e.numberOfResults;
                        })
                        .addCase(st, (e, t) => {
                            var r;
                            let n = t.payload;
                            e.firstResult = (n - 1) * e.numberOfResults;
                        })
                        .addCase(sn, (e) => {
                            var t;
                            let r = lB(e);
                            e.firstResult = (Math.max(r - 1, 1) - 1) * e.numberOfResults;
                        })
                        .addCase(sr, (e) => {
                            var t;
                            let r = Math.min(
                                lB(e) + 1,
                                (function (e) {
                                    let {totalCountFiltered: t, numberOfResults: r} = e;
                                    return lY(t, r);
                                })(e),
                            );
                            e.firstResult = (r - 1) * e.numberOfResults;
                        })
                        .addCase(a3.fulfilled, (e, t) => {
                            t.payload &&
                                ((e.numberOfResults = t.payload.pagination.numberOfResults),
                                (e.firstResult = t.payload.pagination.firstResult));
                        })
                        .addCase(s2, (e, t) => {
                            var r, n;
                            ((e.firstResult = null != (r = t.payload.firstResult) ? r : e.firstResult),
                                (e.numberOfResults =
                                    null != (n = t.payload.numberOfResults) ? n : e.defaultNumberOfResults));
                        })
                        .addCase(sm.fulfilled, (e, t) => {
                            let {response: r} = t.payload;
                            e.totalCountFiltered = r.totalCountFiltered;
                        })
                        .addCase(l_.fulfilled, (e, t) => {
                            let {response: r} = t.payload;
                            e.totalCountFiltered = r.pagination.totalCount;
                        })
                        .addCase(ly, (e) => {
                            lz(e);
                        })
                        .addCase(lv, (e) => {
                            lz(e);
                        })
                        .addCase(oX, (e) => {
                            lz(e);
                        })
                        .addCase(oZ, (e) => {
                            lz(e);
                        })
                        .addCase(o4, (e) => {
                            lz(e);
                        })
                        .addCase(lE, (e) => {
                            lz(e);
                        })
                        .addCase(lT, (e) => {
                            lz(e);
                        })
                        .addCase(iG, (e) => {
                            lz(e);
                        })
                        .addCase(lA, (e) => {
                            lz(e);
                        })
                        .addCase(lV, (e) => {
                            lz(e);
                        })
                        .addCase(le, (e) => {
                            lz(e);
                        })
                        .addCase(oW, (e) => {
                            lz(e);
                        });
                });
            function lz(e) {
                e.firstResult = it().firstResult;
            }
            function lB(e) {
                let {firstResult: t, numberOfResults: r} = e;
                return lH(t, r);
            }
            function lH(e, t) {
                return Math.round(e / t) + 1;
            }
            function lY(e, t) {
                return Math.ceil(Math.min(e, 5e3) / t);
            }
            function lW(e) {
                return e.pagination.numberOfResults;
            }
            var lJ = (e) => lH(e.pagination.firstResult, lW(e)),
                lK = (e) => lY(e.pagination.totalCountFiltered, lW(e)),
                lG = (e, t) => {
                    var r, n;
                    let a, i, s;
                    let o = lJ(e),
                        l = lK(e),
                        u = {start: o - (a = Math.floor(t / 2)), end: o + (t % 2 == 0 ? a - 1 : a)};
                    return (function (e) {
                        let t = [];
                        for (let r = e.start; r <= e.end; ++r) t.push(r);
                        return t;
                    })(
                        ((i = Math.max(1 - (r = u).start, 0)),
                        (s = Math.max((n = u = {start: r.start + i, end: r.end + i}).end - l, 0)),
                        (u = {start: Math.max(n.start - s, 1), end: n.end - s})),
                    );
                },
                lZ = () =>
                    aT('analytics/pager/number', aD.Search, (e, t) =>
                        e.logPagerNumber({pagerNumber: lJ(t), ...eQ(t.insightCaseContext)}),
                    ),
                lX = () =>
                    aT('analytics/pager/next', aD.Search, (e, t) =>
                        e.logPagerNext({pagerNumber: lJ(t), ...eQ(t.insightCaseContext)}),
                    ),
                l0 = () =>
                    aT('analytics/pager/previous', aD.Search, (e, t) =>
                        e.logPagerPrevious({pagerNumber: lJ(t), ...eQ(t.insightCaseContext)}),
                    ),
                l1 = (e) =>
                    aT('analytics/staticFilter/deselect', aD.Search, (t, r) =>
                        t.logStaticFilterDeselect({...e, ...eQ(r.insightCaseContext)}),
                    ),
                l2 = t1('facetOptions/update', (e = {freezeFacetOrder: !0}) =>
                    ab(e, {freezeFacetOrder: new eh({required: !1})}),
                ),
                l5 = t1('facetOptions/facet/enable', (e) => ab(e, ag)),
                l3 = t1('facetOptions/facet/disable', (e) => ab(e, ag));
            function l4(e, t) {
                var r;
                let {facetId: n, criterion: a} = t,
                    i = null == (r = e[n]) ? void 0 : r.request;
                i && (i.sortCriteria = a);
            }
            function l6(e) {
                e &&
                    ((e.currentValues = e.currentValues.map((e) => ({...e, state: 'idle'}))),
                    (e.preventAutoSelect = !0));
            }
            function l8(e, t) {
                e && (e.numberOfValues = t);
            }
            var l9 = {
                filterFacetCount: !0,
                injectionDepth: 1e3,
                numberOfValues: 8,
                sortCriteria: 'ascending',
                rangeAlgorithm: 'even',
            };
            function l7(e, t) {
                let {request: r} = t,
                    {facetId: n} = r;
                if (n in e) return;
                let a = uo(r);
                ((r.numberOfValues = a), (e[n] = t));
            }
            function ue(e, t, r) {
                var n;
                let a = null == (n = e[t]) ? void 0 : n.request;
                a && ((a.currentValues = r), (a.numberOfValues = uo(a)));
            }
            function ut(e, t, r) {
                var n;
                let a = null == (n = e[t]) ? void 0 : n.request;
                if (!a) return;
                let i = us(a.currentValues, r);
                if (!i) return;
                let s = 'selected' === i.state;
                ((i.state = s ? 'idle' : 'selected'), (a.preventAutoSelect = !0));
            }
            function ur(e, t, r) {
                var n;
                let a = null == (n = e[t]) ? void 0 : n.request;
                if (!a) return;
                let i = us(a.currentValues, r);
                if (!i) return;
                let s = 'excluded' === i.state;
                ((i.state = s ? 'idle' : 'excluded'), (a.preventAutoSelect = !0));
            }
            function un(e, t) {
                var r;
                let n = null == (r = e[t]) ? void 0 : r.request;
                n && n.currentValues.forEach((e) => (e.state = 'idle'));
            }
            function ua(e, t) {
                Object.entries(e).forEach(([e, {request: r}]) => {
                    let n = t[e] || [];
                    r.currentValues.forEach((e) => {
                        let t = !!us(n, e);
                        return ((e.state = t ? 'selected' : 'idle'), e);
                    });
                    let a = n.filter((e) => !us(r.currentValues, e)),
                        i = r.currentValues;
                    (i.push(...a), (r.numberOfValues = Math.max(r.numberOfValues, i.length)));
                });
            }
            function ui(e, t, r) {
                t.forEach((t) => {
                    var n;
                    let a = null == (n = e[t.facetId]) ? void 0 : n.request;
                    if (!a) return;
                    let i = r(t.values);
                    ((a.currentValues = i), (a.preventAutoSelect = !1));
                });
            }
            function us(e, t) {
                let {start: r, end: n} = t;
                return e.find((e) => e.start === r && e.end === n);
            }
            function uo(e) {
                let {generateAutomaticRanges: t, currentValues: r, numberOfValues: n} = e;
                return t ? Math.max(n, r.length) : r.length;
            }
            var ul = t2({}, (e) => {
                e.addCase(lx, (e, t) => {
                    let {payload: r} = t;
                    l7(e, {request: {...l9, currentValues: [], preventAutoSelect: !1, type: 'dateRange', ...r}});
                })
                    .addCase(a3.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.dateFacetSet) ? n : e;
                    })
                    .addCase(s2, (e, t) => {
                        ua(e, t.payload.df || {});
                    })
                    .addCase(lE, (e, t) => {
                        let {facetId: r, selection: n} = t.payload;
                        ut(e, r, n);
                    })
                    .addCase(lR, (e, t) => {
                        let {facetId: r, selection: n} = t.payload;
                        ur(e, r, n);
                    })
                    .addCase(lA, (e, t) => {
                        let {facetId: r, values: n} = t.payload;
                        ue(e, r, n);
                    })
                    .addCase(ly, (e, t) => {
                        un(e, t.payload);
                    })
                    .addCase(iG, (e) => {
                        Object.keys(e).forEach((t) => {
                            un(e, t);
                        });
                    })
                    .addCase(lI, (e, t) => {
                        l4(e, t.payload);
                    })
                    .addCase(sm.fulfilled, (e, t) => {
                        ui(e, t.payload.response.facets, uu);
                    })
                    .addCase(l_.fulfilled, (e, t) => {
                        var r, n;
                        ui(
                            e,
                            (null == (n = null == (r = t.payload.response) ? void 0 : r.facets) ? void 0 : n.results) ||
                                [],
                            uu,
                        );
                    })
                    .addCase(l3, (e, t) => {
                        un(e, t.payload);
                    });
            });
            function uu(e) {
                return e.map((e) => {
                    let {numberOfResults: t, ...r} = e;
                    return r;
                });
            }
            function uc(e) {
                return (
                    e.addReducers({dateFacetSet: ul}),
                    {
                        deselectAllDateFacetValues: ly,
                        registerDateFacet: lx,
                        toggleSelectDateFacetValue: lE,
                        toggleExcludeDateFacetValue: lR,
                        updateDateFacetSortCriterion: lI,
                        updateDateFacetValues: lA,
                    }
                );
            }
            var ud = t2({}, (e) => {
                e.addCase(lP, (e, t) => {
                    let {payload: r} = t;
                    l7(e, {request: {...l9, currentValues: [], preventAutoSelect: !1, type: 'numericalRange', ...r}});
                })
                    .addCase(a3.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.numericFacetSet) ? n : e;
                    })
                    .addCase(s2, (e, t) => {
                        ua(e, t.payload.nf || {});
                    })
                    .addCase(lT, (e, t) => {
                        let {facetId: r, selection: n} = t.payload;
                        ut(e, r, n);
                    })
                    .addCase(lU, (e, t) => {
                        let {facetId: r, selection: n} = t.payload;
                        ur(e, r, n);
                    })
                    .addCase(lV, (e, t) => {
                        let {facetId: r, values: n} = t.payload;
                        ue(e, r, n);
                    })
                    .addCase(ly, (e, t) => {
                        un(e, t.payload);
                    })
                    .addCase(iG, (e) => {
                        Object.keys(e).forEach((t) => {
                            un(e, t);
                        });
                    })
                    .addCase(lI, (e, t) => {
                        l4(e, t.payload);
                    })
                    .addCase(sm.fulfilled, (e, t) => {
                        ui(e, t.payload.response.facets, uf);
                    })
                    .addCase(l_.fulfilled, (e, t) => {
                        var r, n;
                        ui(
                            e,
                            (null == (n = null == (r = t.payload.response) ? void 0 : r.facets) ? void 0 : n.results) ||
                                [],
                            uf,
                        );
                    })
                    .addCase(l3, (e, t) => {
                        un(e, t.payload);
                    });
            });
            function uf(e) {
                return e.map((e) => {
                    let {numberOfResults: t, ...r} = e;
                    return r;
                });
            }
            function up(e) {
                return (
                    e.addReducers({numericFacetSet: ud}),
                    {
                        deselectAllNumericFacetValues: ly,
                        registerNumericFacet: lP,
                        toggleSelectNumericFacetValue: lT,
                        toggleExcludeNumericFacetValue: lU,
                        updateNumericFacetSortCriterion: lI,
                        updateNumericFacetValues: lV,
                    }
                );
            }
            var uh = {
                    results: new ew({required: !0, each: new eS({values: aL})}),
                    maxLength: new ef({required: !0, min: 1, default: 10}),
                },
                ug = t1('recentResults/registerRecentResults', (e) => ab(e, uh)),
                uv = t1('recentResults/pushRecentResult', (e) => (a$(e), {payload: e})),
                um = t1('recentResults/clearRecentResults');
            t2({results: [], maxLength: 10}, (e) => {
                e.addCase(ug, (e, t) => {
                    ((e.results = t.payload.results.slice(0, t.payload.maxLength)),
                        (e.maxLength = t.payload.maxLength));
                })
                    .addCase(um, (e) => {
                        e.results = [];
                    })
                    .addCase(uv, (e, t) => {
                        let r = t.payload;
                        e.results = e.results.filter((e) => e.uniqueId !== r.uniqueId);
                        let n = e.results.slice(0, e.maxLength - 1);
                        e.results = [r, ...n];
                    });
            });
            var uy = t1('insight/caseContext/set', (e) => {
                    let t = ab(e, new eS({options: {required: !0}})).error;
                    if (t) return {payload: e, error: t};
                    let r = ab(Object.values(e), new ew({each: am})).error;
                    return r ? {payload: e, error: r} : {payload: e};
                }),
                uS = t1('insight/caseId/set', (e) => {
                    let t = ab(e, am).error;
                    return t ? {payload: e, error: t} : {payload: e};
                }),
                ub = t1('insight/caseNumber/set', (e) => {
                    let t = ab(e, am).error;
                    return t ? {payload: e, error: t} : {payload: e};
                });
            t2({caseContext: {}, caseId: '', caseNumber: ''}, (e) => {
                e.addCase(uy, (e, t) => {
                    e.caseContext = t.payload;
                })
                    .addCase(uS, (e, t) => {
                        e.caseId = t.payload;
                    })
                    .addCase(ub, (e, t) => {
                        e.caseNumber = t.payload;
                    });
            });
            var uw = {
                    collectionField: new em({emptyAllowed: !1, required: !1}),
                    parentField: new em({emptyAllowed: !1, required: !1}),
                    childField: new em({emptyAllowed: !1, required: !1}),
                    numberOfFoldedResults: new ef({min: 0, required: !1}),
                },
                uC = t1('folding/register', (e) => ab(e, uw)),
                uI = t9(
                    'folding/loadCollection',
                    async (e, {getState: t, rejectWithValue: r, extra: {apiClient: n}}) => {
                        let a = t(),
                            i = await sa(a),
                            s = await n.search(
                                {
                                    ...i,
                                    q:
                                        '' === a.query.q
                                            ? ''
                                            : a.query.enableQuerySyntax
                                              ? `${a.query.q} OR @uri`
                                              : `( <@- ${a.query.q} -@> ) OR @uri`,
                                    enableQuerySyntax: !0,
                                    cq: `@${a.folding.fields.collection}="${e}"`,
                                    filterField: a.folding.fields.collection,
                                    childField: a.folding.fields.parent,
                                    parentField: a.folding.fields.child,
                                    filterFieldRange: 100,
                                },
                                {origin: 'foldingCollection'},
                            );
                        return ej(s)
                            ? r(s.error)
                            : {
                                  collectionId: e,
                                  results: s.success.results,
                                  rootResult: a.folding.collections[e].result,
                              };
                    },
                ),
                uk = () => ({
                    enabled: !1,
                    fields: {collection: 'foldingcollection', parent: 'foldingparent', child: 'foldingchild'},
                    filterFieldRange: 2,
                    collections: {},
                }),
                uO = new ew({each: ag, required: !0}),
                uq = t1('fields/registerFieldsToInclude', (e) => ab(e, uO)),
                ux = t1('fields/fetchall/enable'),
                uE = t1('fields/fetchall/disable'),
                uR = t9('fields/fetchDescription', async (e, {extra: t, getState: r, rejectWithValue: n}) => {
                    let a = r(),
                        {accessToken: i, organizationId: s} = a.configuration,
                        {apiBaseUrl: o} = a.configuration.search,
                        l = await t.apiClient.fieldDescriptions({accessToken: i, organizationId: s, url: o});
                    return ej(l) ? n(l.error) : l.success.fields;
                }),
                uA = t2(
                    {
                        fieldsToInclude: [
                            'author',
                            'language',
                            'urihash',
                            'objecttype',
                            'collection',
                            'source',
                            'permanentid',
                        ],
                        fetchAllFields: !1,
                        fieldsDescription: [],
                    },
                    (e) =>
                        e
                            .addCase(uq, (e, t) => {
                                e.fieldsToInclude = [...new Set(e.fieldsToInclude.concat(t.payload))];
                            })
                            .addCase(ux, (e) => {
                                e.fetchAllFields = !0;
                            })
                            .addCase(uE, (e) => {
                                e.fetchAllFields = !1;
                            })
                            .addCase(uR.fulfilled, (e, {payload: t}) => {
                                e.fieldsDescription = t;
                            })
                            .addCase(uC, (e, {payload: t}) => {
                                var r, n, a;
                                let i = uk().fields;
                                e.fieldsToInclude.push(
                                    null != (r = t.collectionField) ? r : i.collection,
                                    null != (n = t.parentField) ? n : i.parent,
                                    null != (a = t.childField) ? a : i.child,
                                );
                            }),
                );
            function uF(e) {
                return (
                    e.addReducers({fields: uA}),
                    {
                        registerFieldsToInclude: uq,
                        enableFetchAllFields: ux,
                        disableFetchAllFields: uE,
                        fetchFieldsDescription: uR,
                    }
                );
            }
            var uD = new eS({
                    options: {required: !0},
                    values: {
                        articleLanguage: av,
                        articlePublishStatus: av,
                        articleVersionNumber: av,
                        caseId: ag,
                        knowledgeArticleId: av,
                        name: av,
                        permanentId: av,
                        resultUrl: av,
                        source: av,
                        title: ag,
                        uriHash: av,
                    },
                }),
                uj = t1('insight/attachToCase/setAttachedResults', (e) =>
                    ab(e, {results: new ew({each: uD}), loading: new eh({required: !1, default: !1})}),
                ),
                uP = t1('insight/attachToCase/attach', (e) => uU(e)),
                uT = t1('insight/attachToCase/detach', (e) => uU(e)),
                uU = (e) =>
                    ed(e.result.permanentId) && ed(e.result.uriHash)
                        ? {payload: e, error: ay(new eo('Either permanentId or uriHash is required'))}
                        : ab(e, {result: uD});
            t2({results: [], loading: !1}, (e) => {
                e.addCase(uj, (e, t) => {
                    var r;
                    let {results: n, loading: a} = t.payload;
                    ('results' in e && (null == (r = e.results) ? void 0 : r.length) > 0) ||
                        ((e.results = n), a && (e.loading = a));
                })
                    .addCase(uP, (e, t) => {
                        (ed(t.payload.result.permanentId) && ed(t.payload.result.uriHash)) ||
                            (e.results = [...e.results, t.payload.result]);
                    })
                    .addCase(uT, (e, t) => {
                        e.results = e.results.filter((e) => uV(e, t.payload.result));
                    });
            });
            var uV = (e, t) => {
                    let r =
                            !ed(e.permanentId) &&
                            (null == e ? void 0 : e.permanentId) === (null == t ? void 0 : t.permanentId),
                        n = !ed(e.uriHash) && (null == e ? void 0 : e.uriHash) === (null == t ? void 0 : t.uriHash);
                    return e.caseId !== t.caseId || (!r && !n);
                },
                uM = () => new eS({values: {questionAnswerId: ag}, options: {required: !0}}),
                uL = () => new eS({values: {linkText: am, linkURL: am}, options: {required: !0}});
            function u$(e) {
                return ab(e, uM());
            }
            var u_ = t1('smartSnippet/expand'),
                uN = t1('smartSnippet/collapse'),
                uQ = t1('smartSnippet/like'),
                uz = t1('smartSnippet/dislike'),
                uB = t1('smartSnippet/feedbackModal/open'),
                uH = t1('smartSnippet/feedbackModal/close'),
                uY = t1('smartSnippet/related/expand', (e) => u$(e)),
                uW = t1('smartSnippet/related/collapse', (e) => u$(e)),
                uJ = () => ({liked: !1, disliked: !1, expanded: !1, feedbackModalOpen: !1, relatedQuestions: []}),
                uK = (e, t) => e.findIndex((e) => e.questionAnswerId === t.questionAnswerId);
            function uG({question: e, answerSnippet: t, documentId: {contentIdKey: r, contentIdValue: n}}) {
                return ax({question: e, answerSnippet: t, contentIdKey: r, contentIdValue: n});
            }
            var uZ = t2(uJ(), (e) =>
                e
                    .addCase(u_, (e) => {
                        e.expanded = !0;
                    })
                    .addCase(uN, (e) => {
                        e.expanded = !1;
                    })
                    .addCase(uQ, (e) => {
                        ((e.liked = !0), (e.disliked = !1), (e.feedbackModalOpen = !1));
                    })
                    .addCase(uz, (e) => {
                        ((e.liked = !1), (e.disliked = !0));
                    })
                    .addCase(uB, (e) => {
                        e.feedbackModalOpen = !0;
                    })
                    .addCase(uH, (e) => {
                        e.feedbackModalOpen = !1;
                    })
                    .addCase(sm.fulfilled, (e, t) => {
                        let r = t.payload.response.questionAnswer.relatedQuestions.map((t, r) => {
                                var n;
                                let a;
                                return (
                                    (n = e.relatedQuestions[r]),
                                    (a = uG(t)),
                                    n && a === n.questionAnswerId
                                        ? n
                                        : {
                                              contentIdKey: t.documentId.contentIdKey,
                                              contentIdValue: t.documentId.contentIdValue,
                                              expanded: !1,
                                              questionAnswerId: a,
                                          }
                                );
                            }),
                            n = uG(t.payload.response.questionAnswer);
                        return e.questionAnswerId === n
                            ? {...e, relatedQuestions: r}
                            : {...uJ(), relatedQuestions: r, questionAnswerId: n};
                    })
                    .addCase(uY, (e, t) => {
                        let r = uK(e.relatedQuestions, t.payload);
                        -1 !== r && (e.relatedQuestions[r].expanded = !0);
                    })
                    .addCase(uW, (e, t) => {
                        let r = uK(e.relatedQuestions, t.payload);
                        -1 !== r && (e.relatedQuestions[r].expanded = !1);
                    }),
            );
            function uX(e, t) {
                return e.raw[t.parent];
            }
            function u0(e, t) {
                let r = e.raw[t.child];
                return aq(r) ? r[0] : r;
            }
            function u1(e, t, r) {
                let n = {};
                return (
                    e.forEach((e) => {
                        var a;
                        let i, s;
                        let o = e.raw[t.collection];
                        o &&
                            (u0(e, t) || e.parentResult) &&
                            (n[o] =
                                ((i = aA(e)),
                                {
                                    result: (s =
                                        null !=
                                        (a =
                                            null != r
                                                ? r
                                                : i.find((e) => {
                                                      var r, n;
                                                      let a = void 0 === uX(e, t),
                                                          i =
                                                              ((r = uX(e, t)),
                                                              (n = u0(e, t)),
                                                              (r || n) !== void 0 && r === n);
                                                      return a || i;
                                                  }))
                                            ? a
                                            : (function e(t) {
                                                  return t.parentResult ? e(t.parentResult) : t;
                                              })(e)),
                                    children: (function e(t, r, n, a = []) {
                                        let i = u0(t, n);
                                        return i
                                            ? -1 !== a.indexOf(i)
                                                ? []
                                                : r
                                                      .filter((e) => {
                                                          let r = u0(e, n) === u0(t, n);
                                                          return uX(e, n) === i && !r;
                                                      })
                                                      .map((t) => ({result: t, children: e(t, r, n, [...a, i])}))
                                            : [];
                                    })(s, i, t),
                                    moreResultsAvailable: !0,
                                    isLoadingMoreResults: !1,
                                }));
                    }),
                    n
                );
            }
            function u2(e, t) {
                if (!e.collections[t])
                    throw Error(
                        `Missing collection ${t} from ${Object.keys(e.collections)}: Folding most probably in an invalid state...`,
                    );
                return e.collections[t];
            }
            var u5 = t2(uk(), (e) =>
                e
                    .addCase(sm.fulfilled, (e, {payload: t}) => {
                        e.collections = e.enabled ? u1(t.response.results, e.fields) : {};
                    })
                    .addCase(sy.fulfilled, (e, {payload: t}) => {
                        e.collections = e.enabled ? u1(t.response.results, e.fields) : {};
                    })
                    .addCase(sS.fulfilled, (e, {payload: t}) => {
                        e.collections = e.enabled ? {...e.collections, ...u1(t.response.results, e.fields)} : {};
                    })
                    .addCase(uC, (e, {payload: t}) => {
                        var r, n, a, i;
                        return e.enabled
                            ? e
                            : {
                                  enabled: !0,
                                  collections: {},
                                  fields: {
                                      collection: null != (r = t.collectionField) ? r : e.fields.collection,
                                      parent: null != (n = t.parentField) ? n : e.fields.parent,
                                      child: null != (a = t.childField) ? a : e.fields.child,
                                  },
                                  filterFieldRange: null != (i = t.numberOfFoldedResults) ? i : e.filterFieldRange,
                              };
                    })
                    .addCase(uI.pending, (e, {meta: t}) => {
                        u2(e, t.arg).isLoadingMoreResults = !0;
                    })
                    .addCase(uI.rejected, (e, {meta: t}) => {
                        u2(e, t.arg).isLoadingMoreResults = !1;
                    })
                    .addCase(uI.fulfilled, (e, {payload: {collectionId: t, results: r, rootResult: n}}) => {
                        let a = u1(r, e.fields, n);
                        if (!a || !a[t])
                            throw Error(
                                `Unable to create collection ${t} from received results: ${JSON.stringify(r)}. Folding most probably in an invalid state... `,
                            );
                        ((e.collections[t] = a[t]), (e.collections[t].moreResultsAvailable = !1));
                    }),
            );
            function u3(e) {
                let t,
                    r = new Map(),
                    n = () => 0 === r.size,
                    a = (e) => {
                        try {
                            let r = JSON.stringify(e),
                                n = t !== r;
                            return ((t = r), n);
                        } catch (e) {
                            return (
                                console.warn(
                                    'Could not detect if state has changed, check the controller "get state method"',
                                    e,
                                ),
                                !0
                            );
                        }
                    };
                return {
                    subscribe(i) {
                        i();
                        let s = Symbol(),
                            o;
                        return (
                            n() &&
                                ((t = JSON.stringify(this.state)),
                                (o = e.subscribe(() => {
                                    a(this.state) && r.forEach((e) => e());
                                }))),
                            r.set(s, i),
                            () => {
                                (r.delete(s), n() && o && o());
                            }
                        );
                    },
                    get state() {
                        return {};
                    },
                };
            }
            var u4 = () => ({correctedQuery: '', wordCorrections: [], originalQuery: ''});
            function u6(e, t) {
                let r = e[t];
                r &&
                    ((r.request.numberOfValues = r.initialNumberOfValues),
                    (r.request.currentValues = []),
                    (r.request.preventAutoSelect = !0));
            }
            function u8(e, t, r) {
                ((e.currentValues = (function (e, t) {
                    if (!e.length) return [];
                    let r = u9(e[0], t),
                        n = r;
                    for (let r of e.splice(1)) {
                        let e = u9(r, t);
                        (n.children.push(e), (n = e));
                    }
                    return ((n.state = 'selected'), (n.retrieveChildren = !0), [r]);
                })(t, r)),
                    (e.numberOfValues = t.length ? 1 : r),
                    (e.preventAutoSelect = !0));
            }
            function u9(e, t) {
                return {value: e, retrieveCount: t, children: [], state: 'idle', retrieveChildren: !1};
            }
            t2(
                {
                    enableDidYouMean: !1,
                    wasCorrectedTo: '',
                    wasAutomaticallyCorrected: !1,
                    queryCorrection: u4(),
                    originalQuery: '',
                },
                (e) => {
                    e.addCase(aG, (e) => {
                        e.enableDidYouMean = !0;
                    })
                        .addCase(aZ, (e) => {
                            e.enableDidYouMean = !1;
                        })
                        .addCase(sm.pending, (e) => {
                            ((e.queryCorrection = u4()), (e.wasAutomaticallyCorrected = !1), (e.wasCorrectedTo = ''));
                        })
                        .addCase(sm.fulfilled, (e, t) => {
                            ((e.queryCorrection = t.payload.response.queryCorrections[0] || u4()),
                                (e.originalQuery = t.payload.originalQuery),
                                (e.wasAutomaticallyCorrected = t.payload.automaticallyCorrected));
                        })
                        .addCase(aX, (e, t) => {
                            e.wasCorrectedTo = t.payload;
                        });
                },
            );
            var u7 = t2({}, (e) => {
                    e.addCase(oG, (e, t) => {
                        let r = t.payload,
                            {facetId: n} = r;
                        if (n in e) return;
                        let a = {...ce, currentValues: [], preventAutoSelect: !1, type: 'hierarchical', ...r},
                            i = a.numberOfValues;
                        e[n] = {request: a, initialNumberOfValues: i};
                    })
                        .addCase(a3.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.categoryFacetSet) ? n : e;
                        })
                        .addCase(s2, (e, t) => {
                            let r = t.payload.cf || {};
                            Object.keys(e).forEach((t) => {
                                let n = e[t].request,
                                    a = r[t] || [];
                                (a.length || n.currentValues.length) && u8(n, a, e[t].initialNumberOfValues);
                            });
                        })
                        .addCase(o1, (e, t) => {
                            var r;
                            let {facetId: n, criterion: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            i && (i.sortCriteria = a);
                        })
                        .addCase(o2, (e, t) => {
                            var r;
                            let {facetId: n, basePath: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            i && (i.basePath = [...a]);
                        })
                        .addCase(oZ, (e, t) => {
                            var r;
                            let {facetId: n, selection: a, retrieveCount: i} = t.payload,
                                s = null == (r = e[n]) ? void 0 : r.request;
                            if (!s) return;
                            let {path: o} = a,
                                l = (function (e, t, r) {
                                    let n = e.currentValues;
                                    for (let e of t) {
                                        let t = n[0];
                                        ((t && e === t.value) || ((t = ct(e, r)), (n.length = 0), n.push(t)),
                                            (t.retrieveChildren = !1),
                                            (t.state = 'idle'),
                                            (n = t.children));
                                    }
                                    return n;
                                })(s, o.slice(0, o.length - 1), i);
                            if (l.length) {
                                let e = l[0];
                                ((e.retrieveChildren = !0), (e.state = 'selected'), (e.children = []));
                                return;
                            }
                            let u = ct(a.value, i);
                            ((u.state = 'selected'), l.push(u), (s.numberOfValues = 1));
                        })
                        .addCase(oX, (e, t) => {
                            u6(e, t.payload);
                        })
                        .addCase(iG, (e) => {
                            Object.keys(e).forEach((t) => u6(e, t));
                        })
                        .addCase(iX, (e, t) =>
                            Object.keys(e).forEach((r) => {
                                e[r].request.preventAutoSelect = !t.payload.allow;
                            }),
                        )
                        .addCase(o0, (e, t) => {
                            var r;
                            let {facetId: n, numberOfValues: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            if (i) {
                                if (!i.currentValues.length) return l8(i, a);
                                !(function (e, t) {
                                    var r;
                                    let {facetId: n, numberOfValues: a} = t,
                                        i = null == (r = e[n]) ? void 0 : r.request.currentValues[0];
                                    if (i) {
                                        for (; i.children.length && (null == i ? void 0 : i.state) !== 'selected'; )
                                            i = i.children[0];
                                        i.retrieveCount = a;
                                    }
                                })(e, t.payload);
                            }
                        })
                        .addCase(o4, (e, t) => {
                            let {facetId: r, value: n} = t.payload,
                                a = e[r];
                            if (!a) return;
                            let i = [...n.path, n.rawValue];
                            u8(a.request, i, a.initialNumberOfValues);
                        })
                        .addCase(sb.fulfilled, (e, t) => {
                            cr(e, t.payload.response.facets);
                        })
                        .addCase(sm.fulfilled, (e, t) => {
                            cr(e, t.payload.response.facets);
                        })
                        .addCase(l3, (e, t) => {
                            u6(e, t.payload);
                        });
                }),
                ce = {
                    delimitingCharacter: ';',
                    filterFacetCount: !0,
                    injectionDepth: 1e3,
                    numberOfValues: 5,
                    sortCriteria: 'occurrences',
                    basePath: [],
                    filterByBasePath: !0,
                };
            function ct(e, t) {
                return {value: e, state: 'idle', children: [], retrieveChildren: !0, retrieveCount: t};
            }
            function cr(e, t) {
                t.forEach((t) => {
                    var r;
                    let n, a;
                    if (!(t.facetId in e)) return;
                    let i = null == (r = e[t.facetId]) ? void 0 : r.request;
                    if (!i) return;
                    let s = ((n = n$(i.currentValues).parents), (a = n$(t.values).parents), n.length !== a.length);
                    ((i.currentValues = s ? [] : i.currentValues), (i.preventAutoSelect = !1));
                });
            }
            var cn = t2({}, (e) => {
                e.addCase(lg, (e, t) => {
                    var r;
                    let {facetId: n} = t.payload;
                    n in e ||
                        (e[n] = {
                            request:
                                ((r = t.payload),
                                {
                                    ...cs,
                                    type: 'specific',
                                    currentValues: [],
                                    freezeCurrentValues: !1,
                                    isFieldExpanded: !1,
                                    preventAutoSelect: !1,
                                    ...r,
                                }),
                            hasBreadcrumbs: !0,
                        });
                })
                    .addCase(a3.fulfilled, (e, t) => {
                        if (t.payload && 0 !== Object.keys(t.payload.facetSet).length) return t.payload.facetSet;
                    })
                    .addCase(s2, (e, t) => {
                        let r = t.payload.f || {};
                        Object.keys(e).forEach((t) => {
                            let {request: n} = e[t],
                                a = r[t] || [],
                                i = n.currentValues.filter((e) => !a.includes(e.value));
                            ((n.currentValues = [...a.map(cl), ...i.map(cu)]),
                                (n.preventAutoSelect = a.length > 0),
                                (n.numberOfValues = Math.max(a.length, n.numberOfValues)));
                        });
                    })
                    .addCase(lv, (e, t) => {
                        var r;
                        let {facetId: n, selection: a} = t.payload,
                            i = null == (r = e[n]) ? void 0 : r.request;
                        if (!i) return;
                        i.preventAutoSelect = !0;
                        let s = i.currentValues.find((e) => e.value === a.value);
                        if (!s) {
                            ca(i, a);
                            return;
                        }
                        let o = 'selected' === s.state;
                        ((s.state = o ? 'idle' : 'selected'), (i.freezeCurrentValues = !0));
                    })
                    .addCase(lm, (e, t) => {
                        var r;
                        let {facetId: n, selection: a} = t.payload,
                            i = null == (r = e[n]) ? void 0 : r.request;
                        if (!i) return;
                        i.preventAutoSelect = !0;
                        let s = i.currentValues.find((e) => e.value === a.value);
                        if (!s) {
                            ca(i, a);
                            return;
                        }
                        let o = 'excluded' === s.state;
                        ((s.state = o ? 'idle' : 'excluded'), (i.freezeCurrentValues = !0));
                    })
                    .addCase(lC, (e, t) => {
                        var r;
                        let {facetId: n, freezeCurrentValues: a} = t.payload,
                            i = null == (r = e[n]) ? void 0 : r.request;
                        i && (i.freezeCurrentValues = a);
                    })
                    .addCase(ly, (e, t) => {
                        var r;
                        l6(null == (r = e[t.payload]) ? void 0 : r.request);
                    })
                    .addCase(iG, (e) => {
                        Object.values(e)
                            .filter((e) => e.hasBreadcrumbs)
                            .forEach(({request: e}) => l6(e));
                    })
                    .addCase(iZ, (e) => {
                        Object.values(e)
                            .filter((e) => !e.hasBreadcrumbs)
                            .forEach(({request: e}) => l6(e));
                    })
                    .addCase(iX, (e, t) =>
                        Object.values(e).forEach((e) => {
                            e.request.preventAutoSelect = !t.payload.allow;
                        }),
                    )
                    .addCase(lS, (e, t) => {
                        l4(e, t.payload);
                    })
                    .addCase(lb, (e, t) => {
                        var r;
                        let {facetId: n, numberOfValues: a} = t.payload;
                        l8(null == (r = e[n]) ? void 0 : r.request, a);
                    })
                    .addCase(lw, (e, t) => {
                        var r;
                        let {facetId: n, isFieldExpanded: a} = t.payload,
                            i = null == (r = e[n]) ? void 0 : r.request;
                        i && (i.isFieldExpanded = a);
                    })
                    .addCase(sm.fulfilled, (e, t) => {
                        t.payload.response.facets.forEach((t) => {
                            var r;
                            return ci(null == (r = e[t.facetId]) ? void 0 : r.request, t);
                        });
                    })
                    .addCase(l_.fulfilled, (e, t) => {
                        var r, n;
                        (
                            (null == (n = null == (r = t.payload.response) ? void 0 : r.facets) ? void 0 : n.results) ||
                            []
                        ).forEach((t) => {
                            var r;
                            return ci(null == (r = e[t.facetId]) ? void 0 : r.request, t);
                        });
                    })
                    .addCase(sb.fulfilled, (e, t) => {
                        t.payload.response.facets.forEach((t) => {
                            var r;
                            return ci(null == (r = e[t.facetId]) ? void 0 : r.request, t);
                        });
                    })
                    .addCase(le, (e, t) => {
                        var r;
                        let {facetId: n, value: a} = t.payload,
                            i = null == (r = e[n]) ? void 0 : r.request;
                        if (!i) return;
                        let {rawValue: s} = a,
                            {currentValues: o} = i,
                            l = o.find((e) => e.value === s);
                        if (l) {
                            l.state = 'selected';
                            return;
                        }
                        (ca(i, cl(s)), (i.freezeCurrentValues = !0), (i.preventAutoSelect = !0));
                    })
                    .addCase(l3, (e, t) => {
                        if (!(t.payload in e)) return;
                        let {request: r} = e[t.payload];
                        l6(r);
                    });
            });
            function ca(e, t) {
                let {currentValues: r} = e,
                    n = r.findIndex((e) => 'idle' === e.state),
                    a = -1 === n ? r.length : n,
                    i = r.slice(0, a),
                    s = r.slice(a + 1);
                ((e.currentValues = [...i, t, ...s]), (e.numberOfValues = e.currentValues.length));
            }
            function ci(e, t) {
                e && ((e.currentValues = t.values.map(co)), (e.freezeCurrentValues = !1), (e.preventAutoSelect = !1));
            }
            var cs = {filterFacetCount: !0, injectionDepth: 1e3, numberOfValues: 8, sortCriteria: 'automatic'};
            function co(e) {
                let {value: t, state: r} = e;
                return {value: t, state: r};
            }
            function cl(e) {
                return {value: e, state: 'selected'};
            }
            function cu(e) {
                return {...e, state: 'idle'};
            }
            var cc = (e, t) => {
                    let r = nT(e, t);
                    if (r && r.facetId in e.dateFacetSet) return r;
                },
                cd = (e, t) => (cc(e, t) || {values: []}).values.filter((e) => 'selected' === e.state),
                cf = (e, t) => (cc(e, t) || {values: []}).values.filter((e) => 'idle' !== e.state),
                cp = (e, t) => {
                    let r = nT(e, t);
                    if (r && r.facetId in e.numericFacetSet) return r;
                },
                ch = (e, t) => (cp(e, t) || {values: []}).values.filter((e) => 'idle' !== e.state),
                cg = (e, t) => (cp(e, t) || {values: []}).values.filter((e) => 'selected' === e.state),
                cv = new eS({
                    options: {required: !0},
                    values: {
                        caption: am,
                        expression: am,
                        state: new em({constrainTo: ['idle', 'selected', 'excluded']}),
                    },
                }),
                cm = new ew({required: !0, each: cv}),
                cy = t1('staticFilter/register', (e) => ab(e, {id: ag, values: cm})),
                cS = t1('staticFilter/toggleSelect', (e) => ab(e, {id: ag, value: cv})),
                cb = t1('staticFilter/toggleExclude', (e) => ab(e, {id: ag, value: cv})),
                cw = t1('staticFilter/deselectAllFilterValues', (e) => ab(e, ag)),
                cC = (e) =>
                    Object.keys(e.facetSet)
                        .map((t) => {
                            let r = e.facetValuesSelector(e.engine.state, t).map((r) => ({
                                value: r,
                                deselect: () => {
                                    'selected' === r.state
                                        ? e.executeToggleSelect({facetId: t, selection: r})
                                        : 'excluded' === r.state && e.executeToggleExclude({facetId: t, selection: r});
                                },
                            }));
                            return {facetId: t, field: e.facetSet[t].request.field, values: r};
                        })
                        .filter((e) => e.values.length);
            function cI(e) {
                !(function (e) {
                    e.addReducers({
                        configuration: ot,
                        search: sZ,
                        facetSet: cn,
                        numericFacetSet: ud,
                        dateFacetSet: ul,
                        categoryFacetSet: u7,
                    });
                })(e);
                let t = (function (e) {
                        let t = u3(e),
                            {dispatch: r} = e;
                        return {
                            ...t,
                            get state() {
                                return {
                                    facetBreadcrumbs: [],
                                    categoryFacetBreadcrumbs: [],
                                    numericFacetBreadcrumbs: [],
                                    dateFacetBreadcrumbs: [],
                                    staticFilterBreadcrumbs: [],
                                    hasBreadcrumbs: !1,
                                };
                            },
                            deselectAll: () => {
                                r(iG());
                            },
                            deselectBreadcrumb(e) {
                                e.deselect();
                            },
                        };
                    })(e),
                    {dispatch: r} = e,
                    n = () => e.state,
                    a = () => {
                        let t = {
                            engine: e,
                            facetSet: n().facetSet,
                            executeToggleSelect: ({facetId: e, selection: t}) => {
                                let n = oU({facetId: e, facetValue: t.value});
                                (r(lv({facetId: e, selection: t})),
                                    r(lC({facetId: e, freezeCurrentValues: !1})),
                                    r(i_(n)));
                            },
                            executeToggleExclude: ({facetId: e, selection: t}) => {
                                let n = oU({facetId: e, facetValue: t.value});
                                (r(lm({facetId: e, selection: t})),
                                    r(lC({facetId: e, freezeCurrentValues: !1})),
                                    r(i_(n)));
                            },
                            facetValuesSelector: nM,
                        };
                        return cC(t);
                    },
                    i = () => {
                        let t = {
                            engine: e,
                            facetSet: n().numericFacetSet,
                            executeToggleSelect: (e) => {
                                (r(lT(e)), r(i_(oz(e))));
                            },
                            executeToggleExclude: (e) => {
                                (r(lU(e)), r(i_(oz(e))));
                            },
                            facetValuesSelector: ch,
                        };
                        return cC(t);
                    },
                    s = () => {
                        let t = {
                            engine: e,
                            facetSet: n().dateFacetSet,
                            executeToggleSelect: (e) => {
                                (r(lE(e)), r(i_(oN(e))));
                            },
                            executeToggleExclude: (e) => {
                                (r(lR(e)), r(i_(oN(e))));
                            },
                            facetValuesSelector: cf,
                        };
                        return cC(t);
                    },
                    o = (e) => {
                        let t = nQ(n(), e);
                        return {
                            facetId: e,
                            field: n().categoryFacetSet[e].request.field,
                            path: t,
                            deselect: () => {
                                (r(oX(e)), r(i_(oR({categoryFacetPath: t.map((e) => e.value), categoryFacetId: e}))));
                            },
                        };
                    },
                    l = () =>
                        Object.keys(n().categoryFacetSet)
                            .map(o)
                            .filter((e) => e.path.length),
                    u = () => Object.values(n().staticFilterSet || {}).map(c),
                    c = (e) => {
                        let {id: t, values: r} = e,
                            n = r.filter((e) => 'idle' !== e.state).map((e) => d(t, e));
                        return {id: t, values: n};
                    },
                    d = (e, t) => ({
                        value: t,
                        deselect: () => {
                            let {caption: n, expression: a} = t,
                                i = l1({staticFilterId: e, staticFilterValue: {caption: n, expression: a}});
                            ('selected' === t.state
                                ? r(cS({id: e, value: t}))
                                : 'excluded' === t.state && r(cb({id: e, value: t})),
                                r(i_(i)));
                        },
                    });
                return {
                    ...t,
                    get state() {
                        return {
                            facetBreadcrumbs: a(),
                            categoryFacetBreadcrumbs: l(),
                            numericFacetBreadcrumbs: i(),
                            dateFacetBreadcrumbs: s(),
                            staticFilterBreadcrumbs: u(),
                            hasBreadcrumbs: !![...a(), ...i(), ...s(), ...l(), ...u()].length,
                        };
                    },
                    deselectAll: () => {
                        (t.deselectAll(), r(i_(oV())));
                    },
                };
            }
            var ck = () =>
                aT('analytics/searchbox/submit', aD.Search, (e, t) => e.logSearchboxSubmit(eQ(t.insightCaseContext)));
            (0, R(K()).createCustomEqual)(
                (e) => (t, r) =>
                    Array.isArray(t) && Array.isArray(r)
                        ? t.length === r.length && t.every((t) => -1 !== r.findIndex((r) => e(t, r)))
                        : e(t, r),
            );
            var cO = t2(ie(), (e) => {
                    e.addCase(l2, (e, t) => ({...e, ...t.payload}))
                        .addCase(sm.fulfilled, (e) => {
                            e.freezeFacetOrder = !1;
                        })
                        .addCase(sm.rejected, (e) => {
                            e.freezeFacetOrder = !1;
                        })
                        .addCase(a3.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.facetOptions) ? n : e;
                        })
                        .addCase(oG, (e, t) => {
                            e.facets[t.payload.facetId] = a7();
                        })
                        .addCase(lg, (e, t) => {
                            e.facets[t.payload.facetId] = a7();
                        })
                        .addCase(lx, (e, t) => {
                            e.facets[t.payload.facetId] = a7();
                        })
                        .addCase(lP, (e, t) => {
                            e.facets[t.payload.facetId] = a7();
                        })
                        .addCase(l5, (e, t) => {
                            e.facets[t.payload].enabled = !0;
                        })
                        .addCase(l3, (e, t) => {
                            e.facets[t.payload].enabled = !1;
                        })
                        .addCase(s2, (e, t) => {
                            var r, n, a, i;
                            [
                                ...Object.keys(null != (r = t.payload.f) ? r : {}),
                                ...Object.keys(null != (n = t.payload.cf) ? n : {}),
                                ...Object.keys(null != (a = t.payload.nf) ? a : {}),
                                ...Object.keys(null != (i = t.payload.df) ? i : {}),
                            ].forEach((t) => {
                                (t in e || (e.facets[t] = a7()), (e.facets[t].enabled = !0));
                            });
                        });
                }),
                cq = (e, t) => {
                    var r, n;
                    return null == (n = null == (r = e.facetOptions.facets[t]) ? void 0 : r.enabled) || n;
                };
            function cx(e, t, r) {
                let {facetId: n} = t;
                if (e[n]) return;
                let a = {...cP, ...t},
                    i = r();
                e[n] = {options: a, isLoading: !1, response: i, initialNumberOfValues: a.numberOfValues, requestId: ''};
            }
            function cE(e, t) {
                let {facetId: r, ...n} = t,
                    a = e[r];
                a && (a.options = {...a.options, ...n});
            }
            function cR(e, t, r) {
                let n = e[t];
                n && ((n.requestId = r), (n.isLoading = !0));
            }
            function cA(e, t) {
                let r = e[t];
                r && (r.isLoading = !1);
            }
            function cF(e, t, r) {
                let {facetId: n, response: a} = t,
                    i = e[n];
                i && (i.requestId !== r || ((i.isLoading = !1), (i.response = a)));
            }
            function cD(e, t, r) {
                let {facetId: n} = t,
                    a = e[n];
                a &&
                    ((a.requestId = ''),
                    (a.isLoading = !1),
                    (a.response = r()),
                    (a.options.numberOfValues = a.initialNumberOfValues),
                    (a.options.query = cP.query));
            }
            function cj(e, t) {
                Object.keys(e).forEach((r) => cD(e, {facetId: r}, t));
            }
            var cP = {captions: {}, numberOfValues: 10, query: ''},
                cT = async (e, t, r) => {
                    let n = t.categoryFacetSearchSet[e].options,
                        a = t.categoryFacetSet[e].request,
                        {captions: i, query: s, numberOfValues: o} = n,
                        {field: l, delimitingCharacter: u, basePath: c, filterFacetCount: d} = a,
                        f = cU(a),
                        p = f.length ? [f] : [],
                        h = `*${s}*`;
                    return {
                        url: t.configuration.search.apiBaseUrl,
                        accessToken: t.configuration.accessToken,
                        organizationId: t.configuration.organizationId,
                        ...(t.configuration.search.authenticationProviders.length && {
                            authentication: t.configuration.search.authenticationProviders.join(','),
                        }),
                        basePath: c,
                        captions: i,
                        numberOfValues: o,
                        query: h,
                        field: l,
                        delimitingCharacter: u,
                        ignorePaths: p,
                        filterFacetCount: d,
                        type: 'hierarchical',
                        ...(r ? {} : {searchContext: (await sf(t)).request}),
                    };
                },
                cU = (e) => {
                    let t = [],
                        r = e.currentValues[0];
                    for (; r; ) (t.push(r.value), (r = r.children[0]));
                    return t;
                },
                cV = async (e, t, r) => {
                    let {captions: n, query: a, numberOfValues: i} = t.facetSearchSet[e].options,
                        {field: s, currentValues: o, filterFacetCount: l} = t.facetSet[e].request,
                        u = o.filter((e) => 'idle' !== e.state).map((e) => e.value),
                        c = `*${a}*`;
                    return {
                        url: t.configuration.search.apiBaseUrl,
                        accessToken: t.configuration.accessToken,
                        organizationId: t.configuration.organizationId,
                        ...(t.configuration.search.authenticationProviders && {
                            authentication: t.configuration.search.authenticationProviders.join(','),
                        }),
                        captions: n,
                        numberOfValues: i,
                        query: c,
                        field: s,
                        ignoreValues: u,
                        filterFacetCount: l,
                        type: 'specific',
                        ...(r ? {} : {searchContext: (await sf(t)).request}),
                    };
                },
                cM =
                    (e) =>
                    async (t, {getState: r, extra: {apiClient: n, validatePayload: a}}) => {
                        let i = r(),
                            s;
                        (a(t, ag), (s = c_(i, t) ? await cV(t, i, e) : await cT(t, i, e)));
                        let o = await n.facetSearch(s);
                        return {facetId: t, response: o};
                    },
                cL = t9('facetSearch/executeSearch', cM(!1));
            t9('facetSearch/executeSearch', cM(!0));
            var c$ = t1('facetSearch/clearResults', (e) => ab(e, {facetId: ag})),
                c_ = (e, t) => void 0 !== e.facetSearchSet && void 0 !== e.facetSet && void 0 !== e.facetSet[t];
            function cN() {
                return {moreValuesAvailable: !1, values: []};
            }
            function cQ(e) {
                let {facetSet: t, numericFacetSet: r, dateFacetSet: n, categoryFacetSet: a} = e;
                return [t, r, n, a];
            }
            function cz(e, t) {
                let {state: r, logger: n} = e,
                    {field: a, facetId: i} = t;
                return (
                    i ||
                    (function (e, t) {
                        let r,
                            {field: n, state: a} = e;
                        if (
                            !(function (e) {
                                let {field: t, state: r} = e;
                                return cQ(r).some((e) => e && t in e);
                            })(e)
                        )
                            return n;
                        let i = `${n}_`,
                            s =
                                (null !=
                                (r = cQ(a)
                                    .map((e) => Object.keys(e || {}))
                                    .reduce((e, t) => e.concat(t), [])
                                    .map((e) => {
                                        let t = parseInt(e.split(i)[1], 10);
                                        return Number.isNaN(t) ? 0 : t;
                                    })
                                    .sort()
                                    .pop())
                                    ? r
                                    : 0) + 1;
                        return (
                            (function (e, t) {
                                let r = `A facet with field "${e}" already exists.
  To avoid unexpected behaviour, configure the #id option on the facet controller.`;
                                t.warn(r);
                            })(n, t),
                            `${i}${s}`
                        );
                    })({field: a, state: r}, n)
                );
            }
            t2({}, (e) => {
                e.addCase(o6, (e, t) => {
                    cx(e, t.payload, cN);
                })
                    .addCase(o7, (e, t) => {
                        cE(e, t.payload);
                    })
                    .addCase(cL.pending, (e, t) => {
                        cR(e, t.meta.arg, t.meta.requestId);
                    })
                    .addCase(cL.rejected, (e, t) => {
                        cA(e, t.meta.arg);
                    })
                    .addCase(cL.fulfilled, (e, t) => {
                        cF(e, t.payload, t.meta.requestId);
                    })
                    .addCase(c$, (e, {payload: {facetId: t}}) => {
                        cD(e, {facetId: t}, cN);
                    })
                    .addCase(sm.fulfilled, (e) => {
                        cj(e, cN);
                    });
            });
            var cB = t2({}, (e) => {
                e.addCase(o9, (e, t) => {
                    cx(e, t.payload, cH);
                })
                    .addCase(o7, (e, t) => {
                        cE(e, t.payload);
                    })
                    .addCase(cL.pending, (e, t) => {
                        cR(e, t.meta.arg, t.meta.requestId);
                    })
                    .addCase(cL.rejected, (e, t) => {
                        cA(e, t.meta.arg);
                    })
                    .addCase(cL.fulfilled, (e, t) => {
                        cF(e, t.payload, t.meta.requestId);
                    })
                    .addCase(c$, (e, {payload: t}) => {
                        cD(e, t, cH);
                    })
                    .addCase(sm.fulfilled, (e) => {
                        cj(e, cH);
                    });
            });
            function cH() {
                return {moreValuesAvailable: !1, values: []};
            }
            var cY = (e) => 'selected' === e.state,
                cW = (e, t) => {
                    let r = {facetId: e, facetValue: t.value};
                    return cY(t) ? oT(r) : oP(r);
                },
                cJ = {facetId: ag, selection: new eS({values: oB})},
                cK = t9('facet/executeToggleSelect', ({facetId: e, selection: t}, r) => {
                    let {
                        dispatch: n,
                        extra: {validatePayload: a},
                    } = r;
                    (a({facetId: e, selection: t}, cJ), n(lv({facetId: e, selection: t})), n(l2()));
                }),
                cG = t9('facet/executeToggleExclude', ({facetId: e, selection: t}, r) => {
                    let {
                        dispatch: n,
                        extra: {validatePayload: a},
                    } = r;
                    (a({facetId: e, selection: t}, cJ), n(lm({facetId: e, selection: t})), n(l2()));
                }),
                cZ = (e) => 'selected' === e.state,
                cX = (e) => 'excluded' === e.state,
                c0 = ['score', 'alphanumeric', 'alphanumericDescending', 'occurrences', 'automatic'],
                c1 = new el({
                    facetId: ln,
                    field: la,
                    filterFacetCount: li,
                    injectionDepth: ls,
                    numberOfValues: lo,
                    sortCriteria: new em({constrainTo: c0}),
                    facetSearch: ld,
                }),
                c2 = new el({
                    facetId: ln,
                    field: la,
                    filterFacetCount: li,
                    injectionDepth: ls,
                    numberOfValues: lo,
                    sortCriteria: new em({constrainTo: c0}),
                    facetSearch: ld,
                    allowedValues: lf,
                    customSort: lp,
                });
            function c5(e, t) {
                !(function (e) {
                    e.addReducers({facetSet: cn, configuration: ot, facetSearchSet: cB, search: sZ});
                })(e);
                let {dispatch: r} = e,
                    n = (function (e, t, r = c1) {
                        !(function (e) {
                            e.addReducers({facetSet: cn, facetOptions: cO, configuration: ot, facetSearchSet: cB});
                        })(e);
                        let {dispatch: n} = e,
                            a = u3(e),
                            i = cz(e, t.options),
                            s = {
                                ...cs,
                                ...(function (e, t) {
                                    let {[e]: r, ...n} = t;
                                    return n;
                                })('facetSearch', t.options),
                                field: t.options.field,
                                facetId: i,
                            },
                            o = {facetSearch: {...cP, ...t.options.facetSearch}, ...s};
                        aC(e, r, o, 'buildFacet');
                        let l = () => nU(e.state, i),
                            u = () => nV(e.state, i),
                            c = () => nL(e.state),
                            d = () => cq(e.state, i),
                            f = () => {
                                let {currentValues: e} = l();
                                return e.filter((e) => 'idle' !== e.state).length;
                            },
                            p = () => {
                                let {currentValues: e} = l(),
                                    t = o.numberOfValues,
                                    r = !!e.find((e) => 'idle' === e.state);
                                return t < e.length && r;
                            };
                        return (
                            n(lg(s)),
                            {
                                ...a,
                                toggleSelect: (e) => n(cK({facetId: o.facetId, selection: e})),
                                toggleExclude: (e) => n(cG({facetId: o.facetId, selection: e})),
                                toggleSingleSelect: function (e) {
                                    ('idle' === e.state && n(ly(i)), this.toggleSelect(e));
                                },
                                toggleSingleExclude: function (e) {
                                    ('idle' === e.state && n(ly(i)), this.toggleExclude(e));
                                },
                                isValueSelected: cZ,
                                isValueExcluded: cX,
                                deselectAll() {
                                    (n(ly(i)), n(l2()));
                                },
                                sortBy(e) {
                                    (n(lS({facetId: i, criterion: e})), n(l2()));
                                },
                                isSortedBy(e) {
                                    return this.state.sortCriterion === e;
                                },
                                showMoreValues() {
                                    let e = l().numberOfValues,
                                        t = o.numberOfValues;
                                    (n(lb({facetId: i, numberOfValues: e + (t - (e % t))})),
                                        n(lw({facetId: i, isFieldExpanded: !0})),
                                        n(l2()));
                                },
                                showLessValues() {
                                    let e = Math.max(o.numberOfValues, f());
                                    (n(lb({facetId: i, numberOfValues: e})),
                                        n(lw({facetId: i, isFieldExpanded: !1})),
                                        n(l2()));
                                },
                                enable() {
                                    n(l5(i));
                                },
                                disable() {
                                    n(l3(i));
                                },
                                get state() {
                                    let e = l(),
                                        t = u(),
                                        r = c(),
                                        n = d(),
                                        a;
                                    a =
                                        'object' == typeof e.sortCriteria
                                            ? 'descending' === e.sortCriteria.order
                                                ? 'alphanumericDescending'
                                                : 'alphanumeric'
                                            : e.sortCriteria;
                                    let s = t ? t.values : [],
                                        o = s.some((e) => 'idle' !== e.state);
                                    return {
                                        facetId: i,
                                        values: s,
                                        sortCriterion: a,
                                        isLoading: r,
                                        hasActiveValues: o,
                                        canShowMoreValues: !!t && t.moreValuesAvailable,
                                        canShowLessValues: p(),
                                        enabled: n,
                                    };
                                },
                            }
                        );
                    })(
                        e,
                        {
                            ...t,
                            options: {
                                ...t.options,
                                ...(t.options.allowedValues && {
                                    allowedValues: {type: 'simple', values: t.options.allowedValues},
                                }),
                            },
                        },
                        c2,
                    ),
                    a = () => n.state.facetId,
                    i = {
                        updateText() {},
                        showMoreResults() {},
                        search() {},
                        clear() {},
                        updateCaptions() {},
                        select() {},
                        exclude() {},
                        singleSelect() {},
                        singleExclude() {},
                        get state() {
                            return {values: [], isLoading: !1, moreValuesAvailable: !1, query: ''};
                        },
                    },
                    {state: s, ...o} = i;
                return {
                    ...n,
                    facetSearch: o,
                    toggleSelect(e) {
                        (n.toggleSelect(e), r(i_(cW(a(), e))));
                    },
                    deselectAll() {
                        (n.deselectAll(), r(i_(oj(a()))));
                    },
                    sortBy(e) {
                        (n.sortBy(e), r(i_(oD({facetId: a(), sortCriterion: e}))));
                    },
                    isSortedBy(e) {
                        return this.state.sortCriterion === e;
                    },
                    showMoreValues() {
                        (n.showMoreValues(), r(iz(oA(a()))));
                    },
                    showLessValues() {
                        (n.showLessValues(), r(iz(oF(a()))));
                    },
                    get state() {
                        return {...n.state, facetSearch: i.state};
                    },
                };
            }
            var c3 = (e) => 'selected' === e.state,
                c4 = (e) => 'excluded' === e.state,
                c6 = (e, t) => {
                    let r = {facetId: e, facetValue: `${t.start}..${t.end}`};
                    return c3(t) ? oT(r) : oP(r);
                },
                c8 = t1('rangeFacet/executeToggleSelect', (e) => ab(e, o_(e.selection))),
                c9 = t1('rangeFacet/executeToggleExclude', (e) => ab(e, o_(e.selection))),
                c7 = {facetId: ag, selection: new eS({values: o$})},
                de = t9('dateFacet/executeToggleSelect', (e, {dispatch: t, extra: {validatePayload: r}}) => {
                    (r(e, c7), t(lE(e)), t(c8(e)), t(l2()));
                }),
                dt = t9('dateFacet/executeToggleExclude', (e, {dispatch: t, extra: {validatePayload: r}}) => {
                    (r(e, c7), t(lR(e)), t(c9(e)), t(l2()));
                });
            function dr(e, t) {
                let {facetId: r, getRequest: n} = t,
                    a = u3(e),
                    i = e.dispatch,
                    s = () => cq(e.state, r);
                return {
                    ...a,
                    isValueSelected: c3,
                    isValueExcluded: c4,
                    deselectAll() {
                        (i(ly(r)), i(l2()));
                    },
                    sortBy(e) {
                        (i(lI({facetId: r, criterion: e})), i(l2()));
                    },
                    isSortedBy(e) {
                        return this.state.sortCriterion === e;
                    },
                    enable() {
                        i(l5(r));
                    },
                    disable() {
                        i(l3(r));
                    },
                    get state() {
                        let t = n(),
                            a = nT(e.state, r),
                            i = t.sortCriteria,
                            o = a ? a.values : [],
                            l = nL(e.state),
                            u = s(),
                            c = o.some((e) => 'idle' !== e.state);
                        return {facetId: r, values: o, sortCriterion: i, hasActiveValues: c, isLoading: l, enabled: u};
                    },
                };
            }
            function dn(e, t) {
                if (!e.generateAutomaticRanges && void 0 === e.currentValues)
                    throw Error(`currentValues should be specified for ${t} when generateAutomaticRanges is false.`);
            }
            var da = ['idle', 'selected', 'excluded'],
                di = ['ascending', 'descending'],
                ds = ['even', 'equiprobable'],
                dl = {start: new em(), end: new em(), endInclusive: new eh(), state: new em({constrainTo: da})},
                du = new el({
                    facetId: ln,
                    field: la,
                    generateAutomaticRanges: ll,
                    filterFacetCount: li,
                    injectionDepth: ls,
                    numberOfValues: lo,
                    currentValues: new ew({each: new eS({values: dl})}),
                    sortCriteria: new em({constrainTo: di}),
                    rangeAlgorithm: new em({constrainTo: ds}),
                });
            function dc(e, t) {
                (aC(e, du, t, 'buildDateFacet'), lq(t));
            }
            function dd(e, t) {
                let r, n, a, i;
                let s =
                        (!(function (e) {
                            e.addReducers({configuration: ot, search: sZ, dateFacetSet: ul, facetOptions: cO});
                        })(e),
                        dn(t.options, 'buildDateFacet'),
                        (r = e.dispatch),
                        (n = cz(e, t.options)),
                        dc(e, (a = {currentValues: [], ...t.options, facetId: n})),
                        r(lx(a)),
                        {
                            ...(i = dr(e, {facetId: n, getRequest: () => e.state.dateFacetSet[n].request})),
                            toggleSelect: (e) => r(de({facetId: n, selection: e})),
                            toggleSingleSelect: function (e) {
                                ('idle' === e.state && r(ly(n)), this.toggleSelect(e));
                            },
                            toggleExclude: (e) => r(dt({facetId: n, selection: e})),
                            toggleSingleExclude: function (e) {
                                ('idle' === e.state && r(ly(n)), this.toggleExclude(e));
                            },
                            get state() {
                                return i.state;
                            },
                        }),
                    o = e.dispatch,
                    l = () => s.state.facetId;
                return {
                    ...s,
                    deselectAll() {
                        (s.deselectAll(), o(i_(oj(l()))));
                    },
                    sortBy(e) {
                        (s.sortBy(e), o(i_(oD({facetId: l(), sortCriterion: e}))));
                    },
                    toggleSelect: (e) => {
                        (s.toggleSelect(e), o(i_(c6(l(), e))));
                    },
                    get state() {
                        return s.state;
                    },
                };
            }
            var df = {facetId: ag, selection: new eS({values: oL})},
                dp = t9('numericFacet/executeToggleSelect', (e, {dispatch: t, extra: {validatePayload: r}}) => {
                    (r(e, df), t(lT(e)), t(c8(e)), t(l2()));
                });
            t9('numericFacet/executeToggleExclude', (e, {dispatch: t, extra: {validatePayload: r}}) => {
                (r(e, df), t(lU(e)), t(c9(e)), t(l2()));
            });
            var dh = {start: new ef(), end: new ef(), endInclusive: new eh(), state: new em({constrainTo: da})},
                dg = new el({
                    facetId: ln,
                    field: la,
                    generateAutomaticRanges: ll,
                    filterFacetCount: li,
                    injectionDepth: ls,
                    numberOfValues: lo,
                    currentValues: new ew({each: new eS({values: dh})}),
                    sortCriteria: new em({constrainTo: di}),
                    rangeAlgorithm: new em({constrainTo: ds}),
                });
            function dv(e, t) {
                (aC(e, dg, t, 'buildNumericFacet'), lj(t));
            }
            function dm(e) {
                return {endInclusive: !1, state: 'idle', ...e};
            }
            function dy(e, t) {
                let r, n, a, i;
                let s =
                        (!(function (e) {
                            e.addReducers({numericFacetSet: ud, facetOptions: cO, configuration: ot, search: sZ});
                        })(e),
                        dn(t.options, 'buildNumericFacet'),
                        (r = e.dispatch),
                        (n = cz(e, t.options)),
                        dv(e, (a = {currentValues: [], ...t.options, facetId: n})),
                        r(lP(a)),
                        {
                            ...(i = dr(e, {facetId: n, getRequest: () => e.state.numericFacetSet[n].request})),
                            toggleSelect: (e) => r(dp({facetId: n, selection: e})),
                            toggleSingleSelect(e) {
                                ('idle' === e.state && r(ly(n)), this.toggleSelect(e));
                            },
                            get state() {
                                return i.state;
                            },
                        }),
                    o = e.dispatch,
                    l = () => s.state.facetId;
                return {
                    ...s,
                    deselectAll() {
                        (s.deselectAll(), o(i_(oj(l()))));
                    },
                    sortBy(e) {
                        (s.sortBy(e), o(i_(oD({facetId: l(), sortCriterion: e}))));
                    },
                    toggleSelect: (e) => {
                        (s.toggleSelect(e), o(i_(c6(l(), e))));
                    },
                    get state() {
                        return {...s.state};
                    },
                };
            }
            function dS(e, t) {
                let r = (function (e, t) {
                        var r;
                        !(function (e) {
                            e.addReducers({numericFacetSet: ud, facetOptions: cO, configuration: ot, search: sZ});
                        })(e);
                        let n = u3(e),
                            {dispatch: a} = e,
                            i = () => e.state,
                            s = cz(e, t.options),
                            o = {
                                ...t.options,
                                currentValues: (null == (r = t.initialState) ? void 0 : r.range)
                                    ? [{...t.initialState.range, endInclusive: !0, state: 'selected'}]
                                    : [],
                                generateAutomaticRanges: !1,
                                facetId: s,
                            };
                        (dv(e, o), a(lP(o)));
                        let l = () => cq(e.state, s);
                        return {
                            ...n,
                            clear: () => {
                                (a(lV({facetId: s, values: []})), a(l2()));
                            },
                            setRange: (e) => {
                                let t = lV({
                                    facetId: s,
                                    values: [{...e, state: 'selected', numberOfResults: 0, endInclusive: !0}],
                                });
                                return !t.error && (a(t), a(l2()), !0);
                            },
                            enable() {
                                a(l5(s));
                            },
                            disable() {
                                a(l3(s));
                            },
                            get state() {
                                let e = nL(i()),
                                    t = l(),
                                    r = cg(i(), s),
                                    n = r.length ? r[0] : void 0;
                                return {facetId: s, isLoading: e, range: n, enabled: t};
                            },
                        };
                    })(e, t),
                    {dispatch: n} = e,
                    a = () => r.state.facetId;
                return {
                    ...r,
                    clear: () => {
                        (r.clear(), n(i_(oj(a()))));
                    },
                    setRange: (e) => {
                        let t = r.setRange(e);
                        return (t && n(i_(oP({facetId: a(), facetValue: `${e.start}..${e.end}`}))), t);
                    },
                    get state() {
                        return {...r.state};
                    },
                };
            }
            function db(e, t) {
                !(function (e) {
                    e.addReducers({dateFacetSet: ul, configuration: ot, search: sZ});
                })(e);
                let r = (function (e, t) {
                        var r;
                        !(function (e) {
                            e.addReducers({dateFacetSet: ul, facetOptions: cO, configuration: ot, search: sZ});
                        })(e);
                        let n = u3(e),
                            {dispatch: a} = e,
                            i = () => e.state,
                            s = cz(e, t.options),
                            o = {
                                ...t.options,
                                currentValues: (null == (r = t.initialState) ? void 0 : r.range)
                                    ? [{...t.initialState.range, endInclusive: !0, state: 'selected'}]
                                    : [],
                                generateAutomaticRanges: !1,
                                facetId: s,
                            };
                        (dc(e, o), a(lx(o)));
                        let l = () => cq(e.state, s);
                        return {
                            ...n,
                            clear: () => {
                                (a(lA({facetId: s, values: []})), a(l2()));
                            },
                            setRange: (e) => {
                                let t = lA({
                                    facetId: s,
                                    values: [{...e, state: 'selected', numberOfResults: 0, endInclusive: !0}],
                                });
                                return !t.error && (a(t), a(l2()), !0);
                            },
                            enable() {
                                a(l5(s));
                            },
                            disable() {
                                a(l3(s));
                            },
                            get state() {
                                let e = nL(i()),
                                    t = l(),
                                    r = cd(i(), s),
                                    n = r.length ? r[0] : void 0;
                                return {facetId: s, isLoading: e, range: n, enabled: t};
                            },
                        };
                    })(e, t),
                    {dispatch: n} = e,
                    a = () => r.state.facetId;
                return {
                    ...r,
                    clear: () => {
                        (r.clear(), n(i_(oj(a()))));
                    },
                    setRange: (e) => {
                        let t = r.setRange(e);
                        return (t && n(i_(oP({facetId: a(), facetValue: `${e.start}..${e.end}`}))), t);
                    },
                    get state() {
                        return {...r.state};
                    },
                };
            }
            var dw = new el({numberOfPages: new ef({default: 5, min: 0})}),
                dC = new el({page: new ef({min: 1})});
            function dI(e, t = {}) {
                let {dispatch: r} = e,
                    n = (function (e, t = {}) {
                        !(function (e) {
                            e.addReducers({configuration: ot, pagination: lQ});
                        })(e);
                        let r = u3(e),
                            {dispatch: n} = e,
                            a = aC(e, dw, t.options, 'buildPager'),
                            i = aw(e, dC, t.initialState, 'buildPager').page;
                        i && n(se(i));
                        let s = () => lJ(e.state),
                            o = () => {
                                let {numberOfPages: t} = a;
                                return lG(e.state, t);
                            },
                            l = () => lK(e.state);
                        return {
                            ...r,
                            get state() {
                                let e = s(),
                                    t = l();
                                return {
                                    currentPage: e,
                                    currentPages: o(),
                                    maxPage: t,
                                    hasPreviousPage: e > 1 && t > 0,
                                    hasNextPage: e < t,
                                };
                            },
                            selectPage(e) {
                                n(st(e));
                            },
                            nextPage() {
                                n(sr());
                            },
                            previousPage() {
                                n(sn());
                            },
                            isCurrentPage(e) {
                                return e === this.state.currentPage;
                            },
                        };
                    })(e, t);
                return {
                    ...n,
                    get state() {
                        return n.state;
                    },
                    selectPage(e) {
                        (n.selectPage(e), r(iN(lZ())));
                    },
                    nextPage() {
                        (n.nextPage(), r(iN(lX())));
                    },
                    previousPage() {
                        (n.previousPage(), r(iN(l0())));
                    },
                };
            }
            function dk(e) {
                !(function (e) {
                    e.addReducers({search: sZ});
                })(e);
                let t = u3(e),
                    r = () => e.state;
                return {
                    ...t,
                    get state() {
                        let e = r();
                        return {
                            hasError: null !== e.search.error,
                            isLoading: e.search.isLoading,
                            hasResults: !!e.search.results.length,
                            firstSearchExecuted: sW(e),
                        };
                    },
                };
            }
            function dO(e) {
                let t, r, n, a;
                return (
                    !(function (e) {
                        e.addReducers({search: sZ, pagination: lQ});
                    })(e),
                    (t = u3(e)),
                    (r = dk(e)),
                    (n = () => e.state),
                    (a = () => Math.round((n().search.duration / 1e3 + Number.EPSILON) * 100) / 100),
                    {
                        ...t,
                        get state() {
                            return {
                                ...r.state,
                                durationInMilliseconds: n().search.duration,
                                durationInSeconds: a(),
                                firstResult: n().pagination.firstResult + 1,
                                hasDuration: 0 !== n().search.duration,
                                hasQuery: '' !== n().search.queryExecuted,
                                lastResult: n().pagination.firstResult + n().search.results.length,
                                query: n().search.queryExecuted,
                                total: n().pagination.totalCountFiltered,
                            };
                        },
                    }
                );
            }
            var dq = new el({fieldsToInclude: new ew({required: !1, each: new em({required: !0, emptyAllowed: !1})})});
            function dx(e, t) {
                !(function (e) {
                    e.addReducers({search: sZ, configuration: ot, fields: uA});
                })(e);
                let r = u3(e),
                    n = dk(e),
                    {dispatch: a} = e,
                    i = () => e.state,
                    s = aC(e, dq, null == t ? void 0 : t.options, 'buildCoreResultList');
                s.fieldsToInclude && a(uq(s.fieldsToInclude));
                let o = () => e.state.search.results.length < e.state.search.response.totalCountFiltered,
                    l = 0,
                    u = 0,
                    c = !1;
                return {
                    ...r,
                    get state() {
                        let e = i();
                        return {
                            ...n.state,
                            results: e.search.results,
                            moreResultsAvailable: o(),
                            searchResponseId: e.search.searchResponseId,
                        };
                    },
                    fetchMoreResults: () => {
                        if (!e.state.search.isLoading) {
                            if (!o()) {
                                e.logger.info('No more results are available for the result list to fetch.');
                                return;
                            }
                            if (Date.now() - l < 200) {
                                if (++u >= 5) {
                                    ((l = Date.now()),
                                        c ||
                                            e.logger.error(
                                                'The result list method "fetchMoreResults" execution prevented because it has been triggered consecutively 5 times, with little delay. Please verify the conditions under which the function is called.',
                                            ),
                                        (c = !0));
                                    return;
                                }
                            } else u = 0;
                            ((c = !1),
                                (null == t ? void 0 : t.fetchMoreResultsActionCreator) &&
                                    a(null == t ? void 0 : t.fetchMoreResultsActionCreator()).then(
                                        () => (l = Date.now()),
                                    ));
                        }
                    },
                };
            }
            function dE(e, t) {
                return dx(e, {...t, fetchMoreResultsActionCreator: iQ});
            }
            var dR = {
                logShowMoreFoldedResults: (e) =>
                    aT(
                        'analytics/folding/showMore',
                        aD.Click,
                        (t, r) => (a$(e), t.logShowMoreFoldedResults(aU(e, r), aV(e), eQ(r.insightCaseContext))),
                    ),
                logShowLessFoldedResults: () =>
                    aT('analytics/folding/showLess', aD.Custom, (e, t) =>
                        e.logShowLessFoldedResults(eQ(t.insightCaseContext)),
                    ),
            };
            t1('folding/register', (e) => ab(e, uw));
            var dA = t9(
                    'folding/loadCollection',
                    async (e, {getState: t, rejectWithValue: r, extra: {apiClient: n}}) => {
                        let a = t(),
                            i = iV(a, e),
                            s = (await i$(n, a, i, {origin: 'foldingCollection'})).response;
                        return ej(s)
                            ? r(s.error)
                            : {
                                  collectionId: e,
                                  results: s.success.results,
                                  rootResult: a.folding.collections[e].result,
                              };
                    },
                ),
                dF = t2(n7(), (e) =>
                    e
                        .addCase(il, (e, t) => ({...e, ...t.payload}))
                        .addCase(aX, (e, t) => {
                            e.q = t.payload;
                        })
                        .addCase(ov, (e, t) => {
                            e.q = t.payload.expression;
                        })
                        .addCase(a3.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.query) ? n : e;
                        })
                        .addCase(s2, (e, t) => {
                            var r, n;
                            ((e.q = null != (r = t.payload.q) ? r : e.q),
                                (e.enableQuerySyntax =
                                    null != (n = t.payload.enableQuerySyntax) ? n : e.enableQuerySyntax));
                        }),
                ),
                dD = new el(uw);
            function dj(e, t) {
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    if (t(n)) return n;
                    if (n.children.length) {
                        let e = dj(n.children, t);
                        if (e) return e;
                    }
                }
                return null;
            }
            function dP(e, t = {}) {
                let r = (function (e, t, r) {
                    var n;
                    !(function (e) {
                        e.addReducers({search: sZ, configuration: ot, folding: u5, query: dF});
                    })(e);
                    let a = dx(e, t),
                        {dispatch: i} = e,
                        s = () => e.state;
                    return (
                        i(
                            uC({
                                ...((null == (n = t.options) ? void 0 : n.folding)
                                    ? aC(e, dD, t.options.folding, 'buildFoldedResultList')
                                    : {}),
                            }),
                        ),
                        {
                            ...a,
                            loadCollection: (n) => {
                                (i(t.loadCollectionActionCreator(n.result.raw[e.state.folding.fields.collection])),
                                    i(r.logShowMoreFoldedResults(n.result)));
                            },
                            logShowMoreFoldedResults: (e) => {
                                i(r.logShowMoreFoldedResults(e));
                            },
                            logShowLessFoldedResults: () => {
                                i(r.logShowLessFoldedResults());
                            },
                            findResultById(e) {
                                return dj(this.state.results, (t) => t.result.uniqueId === e.result.uniqueId);
                            },
                            findResultByCollection(e) {
                                return dj(
                                    this.state.results,
                                    (t) => t.result.raw.foldingcollection === e.result.raw.foldingcollection,
                                );
                            },
                            get state() {
                                let e = s();
                                return {
                                    ...a.state,
                                    results: a.state.results.map((t) => {
                                        let r = t.raw[e.folding.fields.collection];
                                        return r && e.folding.collections[r]
                                            ? e.folding.collections[r]
                                            : {
                                                  result: t,
                                                  moreResultsAvailable: !1,
                                                  isLoadingMoreResults: !1,
                                                  children: [],
                                              };
                                    }),
                                };
                            },
                        }
                    );
                })(e, {...t, loadCollectionActionCreator: dA}, dR);
                return {
                    ...r,
                    get state() {
                        return r.state;
                    },
                };
            }
            var dT = (e) =>
                aT('analytics/insight/result/open', aD.Click, (t, r) => {
                    a$(e);
                    let n = eQ(r.insightCaseContext);
                    return t.logDocumentOpen(aU(e, r), aV(e), n);
                });
            function dU(e, t, r) {
                let n;
                !(function (e) {
                    e.addReducers({configuration: ot});
                })(e);
                return (
                    t.options,
                    {
                        select: oi(r, 1e3, {isImmediate: !0}),
                        beginDelayedSelect() {
                            n = setTimeout(r, 1e3);
                        },
                        cancelPendingSelect() {
                            n && clearTimeout(n);
                        },
                    }
                );
            }
            function dV(e, t) {
                let r = !1,
                    n = () => {
                        r || ((r = !0), e.dispatch(dT(t.options.result)));
                    };
                return dU(e, t, () => {
                    (n(), e.dispatch(uv(t.options.result)));
                });
            }
            var dM = () =>
                    aP('analytics/pager/resize', aD.Search, (e, t) => {
                        var r;
                        return e.makePagerResize({
                            currentResultsPerPage:
                                (null == (r = t.pagination) ? void 0 : r.numberOfResults) || it().numberOfResults,
                        });
                    }),
                dL = new el({numberOfResults: new ef({min: 0})});
            function d$(e, t = {}) {
                let r = (function (e, t = {}) {
                        !(function (e) {
                            e.addReducers({pagination: lQ, configuration: ot});
                        })(e);
                        let r = u3(e),
                            {dispatch: n} = e,
                            a = () => e.state,
                            i = aw(e, dL, t.initialState, 'buildResultsPerPage').numberOfResults;
                        return (
                            void 0 !== i && n(i9(i)),
                            {
                                ...r,
                                get state() {
                                    return {numberOfResults: a().pagination.numberOfResults};
                                },
                                set(e) {
                                    n(i7(e));
                                },
                                isSetTo(e) {
                                    return e === this.state.numberOfResults;
                                },
                            }
                        );
                    })(e, t),
                    {dispatch: n} = e;
                return {
                    ...r,
                    get state() {
                        return {...r.state};
                    },
                    set(e) {
                        (r.set(e), n(i_(dM())));
                    },
                };
            }
            var d_ = (e) =>
                    aP('analytics/querySuggest', aD.Search, (t, r) => {
                        let n = (function (e, t) {
                            let {id: r, suggestion: n} = t,
                                a = e.querySuggest && e.querySuggest[r];
                            if (!a)
                                throw Error(
                                    `Unable to determine the query suggest analytics metadata to send because no query suggest with id "${r}" was found. Please check the sent #id.`,
                                );
                            let i = a.completions.map((e) => e.expression),
                                s = a.partialQueries.length - 1,
                                o = a.partialQueries[s] || '',
                                l = a.responseId;
                            return {
                                suggestionRanking: i.indexOf(n),
                                partialQuery: o,
                                partialQueries: a.partialQueries,
                                suggestions: i,
                                querySuggestResponseId: l,
                            };
                        })(r, e);
                        return t.makeOmniboxAnalytics(n);
                    }),
                dN = t2({}, (e) =>
                    e
                        .addCase(oh, (e, t) => {
                            let r = t.payload.id;
                            r in e ||
                                (e[r] = {
                                    id: '',
                                    completions: [],
                                    responseId: '',
                                    count: 5,
                                    currentRequestId: '',
                                    error: null,
                                    partialQueries: [],
                                    isLoading: !1,
                                    ...t.payload,
                                });
                        })
                        .addCase(og, (e, t) => {
                            delete e[t.payload.id];
                        })
                        .addCase(oy.pending, (e, t) => {
                            let r = e[t.meta.arg.id];
                            r && ((r.currentRequestId = t.meta.requestId), (r.isLoading = !0));
                        })
                        .addCase(oy.fulfilled, (e, t) => {
                            let r = e[t.meta.arg.id];
                            if (!r || t.meta.requestId !== r.currentRequestId) return;
                            let {q: n} = t.payload;
                            (n && r.partialQueries.push(n.replace(/;/, encodeURIComponent(';'))),
                                (r.responseId = t.payload.responseId),
                                (r.completions = t.payload.completions),
                                (r.isLoading = !1),
                                (r.error = null));
                        })
                        .addCase(oy.rejected, (e, t) => {
                            let r = e[t.meta.arg.id];
                            r && ((r.error = t.payload || null), (r.isLoading = !1));
                        })
                        .addCase(om, (e, t) => {
                            let r = e[t.payload.id];
                            r && ((r.responseId = ''), (r.completions = []), (r.partialQueries = []));
                        }),
                ),
                dQ = () => aP('analytics/searchbox/submit', aD.Search, (e) => e.makeSearchboxSubmit());
            function dz(e, t) {
                return t ? t.open + e + t.close : e;
            }
            var dB = {enableQuerySyntax: !1, numberOfSuggestions: 5, clearFilters: !0},
                dH = {open: new em(), close: new em()},
                dY = {
                    id: ag,
                    numberOfSuggestions: new ef({min: 0}),
                    enableQuerySyntax: new eh(),
                    highlightOptions: new eS({
                        values: {
                            notMatchDelimiters: new eS({values: dH}),
                            exactMatchDelimiters: new eS({values: dH}),
                            correctionDelimiters: new eS({values: dH}),
                        },
                    }),
                    clearFilters: new eh(),
                },
                dW = new el(dY);
            function dJ(e, t = {}) {
                let r = (function (e, t) {
                    var r, n;
                    !(function (e) {
                        e.addReducers({query: dF, querySuggest: dN, configuration: ot, querySet: oI, search: sZ});
                    })(e);
                    let a = u3(e),
                        {dispatch: i} = e,
                        s = () => e.state,
                        o = (null == (r = t.options) ? void 0 : r.id) || aO('search_box'),
                        l = {
                            id: o,
                            highlightOptions: {...(null == (n = t.options) ? void 0 : n.highlightOptions)},
                            ...dB,
                            ...t.options,
                        };
                    (aC(e, dW, l, 'buildSearchBox'),
                        i(ow({id: o, query: e.state.query.q})),
                        l.numberOfSuggestions && i(oh({id: o, count: l.numberOfSuggestions})));
                    let u = () => e.state.querySet[l.id],
                        c = async (e) => {
                            let {enableQuerySyntax: r, clearFilters: n} = l;
                            (i(sv({q: u(), enableQuerySyntax: r, clearFilters: n})),
                                await i(t.executeSearchActionCreator(e)));
                        };
                    return {
                        ...a,
                        updateText(e) {
                            (i(oC({id: o, query: e})), this.showSuggestions());
                        },
                        clear() {
                            (i(oC({id: o, query: ''})), i(om({id: o})));
                        },
                        showSuggestions() {
                            l.numberOfSuggestions && i(t.fetchQuerySuggestionsActionCreator({id: o}));
                        },
                        selectSuggestion(e) {
                            (i(ov({id: o, expression: e})),
                                c(d_({id: o, suggestion: e})).then(() => {
                                    i(om({id: o}));
                                }));
                        },
                        submit(e = dQ()) {
                            (c(e), i(om({id: o})));
                        },
                        get state() {
                            var d;
                            let e = s(),
                                t = e.querySuggest[l.id],
                                r =
                                    ((d = l.highlightOptions),
                                    t
                                        ? t.completions.map((e) => {
                                              var t, r;
                                              let n, a, i, s;
                                              return {
                                                  highlightedValue: ((r = e.highlighted),
                                                  (i = RegExp(
                                                      (a =
                                                          '(?:' +
                                                          Object.keys(
                                                              (n = {
                                                                  '&': '&amp;',
                                                                  '<': '&lt;',
                                                                  '>': '&gt;',
                                                                  '"': '&quot;',
                                                                  "'": '&#x27;',
                                                                  '`': '&#x60;',
                                                              }),
                                                          ).join('|') +
                                                          ')'),
                                                  )),
                                                  (s = RegExp(a, 'g')),
                                                  i.test(r) ? r.replace(s, (e) => n[e]) : r).replace(
                                                      /\[(.*?)\]|\{(.*?)\}|\((.*?)\)/g,
                                                      (e, t, r, n) =>
                                                          t
                                                              ? dz(t, d.notMatchDelimiters)
                                                              : r
                                                                ? dz(r, d.exactMatchDelimiters)
                                                                : n
                                                                  ? dz(n, d.correctionDelimiters)
                                                                  : e,
                                                  ),
                                                  rawValue: e.expression,
                                              };
                                          })
                                        : []),
                                n = !!t && t.isLoading;
                            return {value: u(), suggestions: r, isLoading: e.search.isLoading, isLoadingSuggestions: n};
                        },
                    };
                })(e, {...t, executeSearchActionCreator: i_, fetchQuerySuggestionsActionCreator: iB});
                return {
                    ...r,
                    submit() {
                        r.submit(ck());
                    },
                    get state() {
                        return r.state;
                    },
                };
            }
            function dK(e) {
                return dk(e);
            }
            var dG = {by: new eI({enum: ia, required: !0})},
                dZ = t1('sortCriteria/register', (e) => d0(e)),
                dX = t1('sortCriteria/update', (e) => d0(e)),
                d0 = (e) => (eC(e) ? (e.forEach((e) => ab(e, dG)), {payload: e}) : ab(e, dG));
            t2(ii(is()), (e) => {
                e.addCase(dZ, (e, t) => ii(t.payload))
                    .addCase(dX, (e, t) => ii(t.payload))
                    .addCase(a3.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.sortCriteria) ? n : e;
                    })
                    .addCase(s2, (e, t) => {
                        var r;
                        return null != (r = t.payload.sortCriteria) ? r : e;
                    });
            });
            var d1 = t2({}, (e) => {
                e.addCase(s5, (e, t) => {
                    let r = t.payload,
                        {id: n} = r;
                    n in e || (e[n] = {...r, isActive: !1});
                })
                    .addCase(s3, (e, t) => {
                        d2(e, t.payload);
                    })
                    .addCase(s2, (e, t) => {
                        d2(e, t.payload.tab || '');
                    })
                    .addCase(a3.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.tabSet) ? n : e;
                    });
            });
            function d2(e, t) {
                t in e &&
                    Object.keys(e).forEach((r) => {
                        e[r].isActive = r === t;
                    });
            }
            var d5 = new el({expression: am, id: ag}),
                d3 = new el({isActive: new eh()});
            function d4(e, t) {
                let {dispatch: r} = e,
                    n = (function (e, t) {
                        ((function (e) {
                            let t = oe().analytics.originLevel2;
                            if (e === t)
                                throw Error(
                                    `The #id option on the Tab controller cannot use the reserved value "${t}". Please specify a different value.`,
                                );
                        })(t.options.id),
                            (function (e) {
                                e.addReducers({configuration: ot, tabSet: d1});
                            })(e));
                        let r = u3(e),
                            {dispatch: n} = e;
                        aC(e, d5, t.options, 'buildTab');
                        let a = aw(e, d3, t.initialState, 'buildTab'),
                            {id: i, expression: s} = t.options;
                        return (
                            n(s5({id: i, expression: s})),
                            a.isActive && n(s3(i)),
                            {
                                ...r,
                                select() {
                                    n(s3(i));
                                },
                                get state() {
                                    var o;
                                    return {isActive: null == (o = e.state.tabSet[i]) ? void 0 : o.isActive};
                                },
                            }
                        );
                    })(e, t),
                    a = () => r(i_(az()));
                return {
                    ...n,
                    get state() {
                        return n.state;
                    },
                    select() {
                        (n.select(), a());
                    },
                };
            }
            function d6(e, t) {
                return (function (e, t) {
                    !(function (e) {
                        e.addReducers({facetOptions: cO});
                    })(e);
                    let r = (t) => {
                            var r, n;
                            return null != (n = null == (r = e.state.facetOptions.facets[t]) ? void 0 : r.enabled) && n;
                        },
                        n = (t) => {
                            var r, n, a, i, s, o, l, u, c, d, f, p, h, g, v, m;
                            return null !=
                                (m =
                                    null !=
                                    (v =
                                        null !=
                                        (f =
                                            null !=
                                            (l =
                                                null ==
                                                (a =
                                                    null == (n = null == (r = e.state.facetSet) ? void 0 : r[t])
                                                        ? void 0
                                                        : n.request)
                                                    ? void 0
                                                    : a.currentValues)
                                                ? l
                                                : null ==
                                                    (o =
                                                        null ==
                                                        (s = null == (i = e.state.categoryFacetSet) ? void 0 : i[t])
                                                            ? void 0
                                                            : s.request)
                                                  ? void 0
                                                  : o.currentValues)
                                            ? f
                                            : null ==
                                                (d =
                                                    null == (c = null == (u = e.state.numericFacetSet) ? void 0 : u[t])
                                                        ? void 0
                                                        : c.request)
                                              ? void 0
                                              : d.currentValues)
                                        ? v
                                        : null ==
                                            (g =
                                                null == (h = null == (p = e.state.dateFacetSet) ? void 0 : p[t])
                                                    ? void 0
                                                    : h.request)
                                          ? void 0
                                          : g.currentValues)
                                ? m
                                : null;
                        },
                        a = (t) => t in e.state.facetOptions.facets,
                        i = () =>
                            ax({
                                isFacetRegistered: a(t.facetId),
                                parentFacets: t.conditions.map(({parentFacetId: e}) =>
                                    a(e) ? {enabled: r(e), values: n(e)} : null,
                                ),
                            }),
                        s = () => {
                            let e = i();
                            return e !== c && ((c = e), !0);
                        },
                        o = () =>
                            t.conditions.some((e) => {
                                if (!r(e.parentFacetId)) return !1;
                                let t = n(e.parentFacetId);
                                return null !== t && e.condition(t);
                            }),
                        l = () => {
                            e.state.facetSet &&
                                Object.entries(e.state.facetSet).forEach(
                                    ([t, r]) =>
                                        r.request.freezeCurrentValues &&
                                        e.dispatch(lC({facetId: t, freezeCurrentValues: !1})),
                                );
                        },
                        u = () => {
                            if (!a(t.facetId)) return;
                            let n = r(t.facetId),
                                i = o();
                            n !== i && (e.dispatch(i ? l5(t.facetId) : l3(t.facetId)), l());
                        };
                    if (!t.conditions.length) return {stopWatching() {}};
                    let c = i(),
                        d = e.subscribe(() => {
                            s() && u();
                        });
                    return (
                        u(),
                        {
                            stopWatching() {
                                d();
                            },
                        }
                    );
                })(e, t);
            }
            function d8(e, t) {
                var r, n, a, i;
                let s =
                    null != t
                        ? t
                        : null == (n = null == (r = e.search) ? void 0 : r.questionAnswer)
                          ? void 0
                          : n.documentId;
                return (
                    s &&
                    e.search &&
                    ((a = s.contentIdKey), (i = s.contentIdValue), e.search.results.find((e) => sH(e, a) === i))
                );
            }
            function d9(e, t) {
                var r, n, a, i, s;
                let o =
                    null !=
                    (n =
                        null == (r = e.questionAnswering)
                            ? void 0
                            : r.relatedQuestions.findIndex((e) => e.questionAnswerId === t))
                        ? n
                        : -1;
                if (-1 === o) return null;
                let l =
                    null ==
                    (s = null == (i = null == (a = e.search) ? void 0 : a.questionAnswer) ? void 0 : i.relatedQuestions)
                        ? void 0
                        : s[o];
                return null != l ? l : null;
            }
            var d7 = (e) =>
                    aT('analytics/smartSnippet/source/open', aD.Click, (t, r) => {
                        ab(e, uL());
                        let n = d8(r);
                        return t.logOpenSmartSnippetInlineLink(aU(n, r), {...aV(n), ...e}, eQ(r.insightCaseContext));
                    }),
                fe = (e) =>
                    aT('analytics/smartSnippetSuggestion/source/open', aD.Click, (t, r) => {
                        ab(e, uM());
                        let n = d9(r, e.questionAnswerId);
                        if (!n) return null;
                        let a = d8(r, n.documentId);
                        return a
                            ? t.logOpenSmartSnippetSuggestionSource(
                                  aU(a, r),
                                  {question: n.question, answerSnippet: n.answerSnippet, documentId: n.documentId},
                                  eQ(r.insightCaseContext),
                              )
                            : null;
                    }),
                ft = (e, t) =>
                    aT('analytics/smartSnippetSuggestion/source/open', aD.Click, (r, n) => {
                        (ab(e, uM()), ab(t, uL()));
                        let a = d9(n, e.questionAnswerId);
                        if (!a) return null;
                        let i = d8(n, a.documentId);
                        return i
                            ? r.logOpenSmartSnippetSuggestionInlineLink(
                                  aU(i, n),
                                  {
                                      question: a.question,
                                      answerSnippet: a.answerSnippet,
                                      documentId: a.documentId,
                                      linkText: t.linkText,
                                      linkURL: t.linkURL,
                                  },
                                  eQ(n.insightCaseContext),
                              )
                            : null;
                    }),
                fr = {
                    logExpandSmartSnippet: () =>
                        aT('analytics/smartSnippet/expand', aD.Custom, (e, t) =>
                            e.logExpandSmartSnippet(eQ(t.insightCaseContext)),
                        ),
                    logCollapseSmartSnippet: () =>
                        aT('analytics/smartSnippet/collapse', aD.Custom, (e, t) =>
                            e.logCollapseSmartSnippet(eQ(t.insightCaseContext)),
                        ),
                    logLikeSmartSnippet: () =>
                        aT('analytics/smartSnippet/like', aD.Custom, (e, t) =>
                            e.logLikeSmartSnippet(eQ(t.insightCaseContext)),
                        ),
                    logDislikeSmartSnippet: () =>
                        aT('analytics/smartSnippet/dislike', aD.Custom, (e, t) =>
                            e.logDislikeSmartSnippet(eQ(t.insightCaseContext)),
                        ),
                    logOpenSmartSnippetSource: () =>
                        aT('analytics/smartSnippet/source/open', aD.Click, (e, t) => {
                            let r = d8(t);
                            return e.logOpenSmartSnippetSource(aU(r, t), aV(r), eQ(t.insightCaseContext));
                        }),
                    logOpenSmartSnippetInlineLink: d7,
                    logOpenSmartSnippetFeedbackModal: () =>
                        aT('analytics/smartSnippet/feedbackModal/open', aD.Custom, (e, t) =>
                            e.logOpenSmartSnippetFeedbackModal(eQ(t.insightCaseContext)),
                        ),
                    logCloseSmartSnippetFeedbackModal: () =>
                        aT('analytics/smartSnippet/feedbackModal/close', aD.Custom, (e, t) =>
                            e.logCloseSmartSnippetFeedbackModal(eQ(t.insightCaseContext)),
                        ),
                    logSmartSnippetFeedback: (e) =>
                        aT('analytics/smartSnippet/sendFeedback', aD.Custom, (t, r) =>
                            t.logSmartSnippetFeedbackReason(e, void 0, eQ(r.insightCaseContext)),
                        ),
                    logSmartSnippetDetailedFeedback: (e) =>
                        aT('analytics/smartSnippet/sendFeedback', aD.Custom, (t, r) =>
                            t.logSmartSnippetFeedbackReason('other', e, eQ(r.insightCaseContext)),
                        ),
                    logExpandSmartSnippetSuggestion: (e) =>
                        aT('analytics/smartSnippetSuggestion/expand', aD.Custom, (t, r) => {
                            u$(e);
                            let n = d9(r, e.questionAnswerId);
                            return n
                                ? t.logExpandSmartSnippetSuggestion(
                                      {question: n.question, answerSnippet: n.answerSnippet, documentId: n.documentId},
                                      eQ(r.insightCaseContext),
                                  )
                                : null;
                        }),
                    logCollapseSmartSnippetSuggestion: (e) =>
                        aT('analytics/smartSnippetSuggestion/collapse', aD.Custom, (t, r) => {
                            u$(e);
                            let n = d9(r, e.questionAnswerId);
                            return n
                                ? t.logCollapseSmartSnippetSuggestion(
                                      {question: n.question, answerSnippet: n.answerSnippet, documentId: n.documentId},
                                      eQ(r.insightCaseContext),
                                  )
                                : null;
                        }),
                    logOpenSmartSnippetSuggestionSource: fe,
                };
            function fn(e, t) {
                !(function (e) {
                    e.addReducers({search: sZ, questionAnswering: uZ});
                })(e);
                let r = () => e.state,
                    n = new Set(),
                    a = (e) => !!n.has(e) || (n.add(e), !1),
                    i = null,
                    s = (e) => {
                        i !== e && ((i = e), (l = {}), n.clear());
                    },
                    o = (r, n, i) => {
                        var s;
                        return dU(
                            e,
                            {
                                options: {
                                    selectionDelay:
                                        null == (s = null == t ? void 0 : t.options) ? void 0 : s.selectionDelay,
                                },
                            },
                            () => {
                                a(n) || e.dispatch(i ? ft({questionAnswerId: i}, r) : d7(r));
                            },
                        );
                    },
                    l = {},
                    u = (e, t) => {
                        let {searchResponseId: n} = r().search;
                        s(n);
                        let a = ax({...e, questionAnswerId: t});
                        return (a in l || (l[a] = o(e, a, t)), l[a]);
                    };
                return {
                    selectInlineLink(e, t) {
                        var r;
                        null == (r = u(e, t)) || r.select();
                    },
                    beginDelayedSelectInlineLink(e, t) {
                        var r;
                        null == (r = u(e, t)) || r.beginDelayedSelect();
                    },
                    cancelPendingSelectInlineLink(e, t) {
                        var r;
                        null == (r = u(e, t)) || r.cancelPendingSelect();
                    },
                };
            }
            function fa(e, t) {
                var r, n;
                let a, i, s, o, l;
                let u =
                        (!(function (e) {
                            e.addReducers({search: sZ, questionAnswering: uZ});
                        })(e),
                        (a = u3(e)),
                        (i = () => e.state),
                        (s = () => d8(i())),
                        (o = null),
                        (l = dU(
                            e,
                            {
                                options: {
                                    selectionDelay:
                                        null == (n = null == t ? void 0 : t.options) ? void 0 : n.selectionDelay,
                                },
                            },
                            () => {
                                let t = s();
                                if (!t) {
                                    o = null;
                                    return;
                                }
                                let {searchResponseId: r} = i().search;
                                o !== r && ((o = r), e.dispatch(fr.logOpenSmartSnippetSource()), e.dispatch(uv(t)));
                            },
                        )),
                        {
                            ...a,
                            get state() {
                                let e = i();
                                return {
                                    question: e.search.questionAnswer.question,
                                    answer: e.search.questionAnswer.answerSnippet,
                                    documentId: e.search.questionAnswer.documentId,
                                    expanded: e.questionAnswering.expanded,
                                    answerFound: '' !== e.search.questionAnswer.answerSnippet,
                                    liked: e.questionAnswering.liked,
                                    disliked: e.questionAnswering.disliked,
                                    feedbackModalOpen: e.questionAnswering.feedbackModalOpen,
                                    source: s(),
                                };
                            },
                            expand() {
                                (e.dispatch(fr.logExpandSmartSnippet()), e.dispatch(u_()));
                            },
                            collapse() {
                                (e.dispatch(fr.logCollapseSmartSnippet()), e.dispatch(uN()));
                            },
                            like() {
                                (e.dispatch(fr.logLikeSmartSnippet()), e.dispatch(uQ()));
                            },
                            dislike() {
                                (e.dispatch(fr.logDislikeSmartSnippet()), e.dispatch(uz()));
                            },
                            openFeedbackModal() {
                                (e.dispatch(fr.logOpenSmartSnippetFeedbackModal()), e.dispatch(uB()));
                            },
                            closeFeedbackModal() {
                                (e.dispatch(fr.logCloseSmartSnippetFeedbackModal()), e.dispatch(uH()));
                            },
                            sendFeedback(t) {
                                (e.dispatch(fr.logSmartSnippetFeedback(t)), e.dispatch(uH()));
                            },
                            sendDetailedFeedback(t) {
                                (e.dispatch(fr.logSmartSnippetDetailedFeedback(t)), e.dispatch(uH()));
                            },
                            selectSource() {
                                l.select();
                            },
                            beginDelayedSelectSource() {
                                l.beginDelayedSelect();
                            },
                            cancelPendingSelectSource() {
                                l.cancelPendingSelect();
                            },
                        }),
                    c = fn(e, {
                        options: {
                            selectionDelay: null == (r = null == t ? void 0 : t.options) ? void 0 : r.selectionDelay,
                        },
                    });
                return {
                    ...u,
                    get state() {
                        return u.state;
                    },
                    selectInlineLink(e) {
                        c.selectInlineLink(e);
                    },
                    beginDelayedSelectInlineLink(e) {
                        c.beginDelayedSelectInlineLink(e);
                    },
                    cancelPendingSelectInlineLink(e) {
                        c.cancelPendingSelectInlineLink(e);
                    },
                };
            }
            function fi(e, t) {
                var r, n, a;
                let i, s, o, l, u, c, d, f, p, h, g, v;
                let m =
                        (!(function (e) {
                            e.addReducers({search: sZ, questionAnswering: uZ});
                        })(e),
                        (i = u3(e)),
                        (s = () => e.state),
                        (o = (t) => {
                            let {contentIdKey: r, contentIdValue: n} = t;
                            return e.state.search.results.find((e) => sH(e, r) === n);
                        }),
                        {
                            ...i,
                            get state() {
                                let e = s();
                                return {
                                    questions: e.search.questionAnswer.relatedQuestions.map((t, r) => ({
                                        question: t.question,
                                        answer: t.answerSnippet,
                                        documentId: t.documentId,
                                        questionAnswerId: e.questionAnswering.relatedQuestions[r].questionAnswerId,
                                        expanded: e.questionAnswering.relatedQuestions[r].expanded,
                                        source: o(t.documentId),
                                    })),
                                };
                            },
                            expand(t) {
                                let r = {questionAnswerId: t};
                                (e.dispatch(fr.logExpandSmartSnippetSuggestion(r)), e.dispatch(uY(r)));
                            },
                            collapse(t) {
                                let r = {questionAnswerId: t};
                                (e.dispatch(fr.logCollapseSmartSnippetSuggestion(r)), e.dispatch(uW(r)));
                            },
                        }),
                    y = fn(e, {
                        options: {
                            selectionDelay: null == (r = null == t ? void 0 : t.options) ? void 0 : r.selectionDelay,
                        },
                    }),
                    S =
                        ((a = {
                            options: {
                                selectionDelay:
                                    null == (n = null == t ? void 0 : t.options) ? void 0 : n.selectionDelay,
                            },
                        }),
                        !(function (e) {
                            e.addReducers({search: sZ, questionAnswering: uZ});
                        })(e),
                        (l = () => e.state),
                        (u = (e) => {
                            let t = l(),
                                r = d9(t, e);
                            return r ? d8(t, r.documentId) : null;
                        }),
                        (c = new Set()),
                        (d = (e) => !!c.has(e) || (c.add(e), !1)),
                        (f = null),
                        (p = (e) => {
                            f !== e && ((f = e), (g = {}), c.clear());
                        }),
                        (h = (t, r) => {
                            var n;
                            return dU(
                                e,
                                {
                                    options: {
                                        selectionDelay:
                                            null == (n = null == a ? void 0 : a.options) ? void 0 : n.selectionDelay,
                                    },
                                },
                                () => {
                                    d(r) || (e.dispatch(fe({questionAnswerId: r})), e.dispatch(uv(t)));
                                },
                            );
                        }),
                        (g = {}),
                        (v = (e) => {
                            let {searchResponseId: t} = l().search;
                            p(t);
                            let r = u(e);
                            return r ? (e in g || (g[e] = h(r, e)), g[e]) : null;
                        }),
                        {
                            selectSource(e) {
                                var t;
                                null == (t = v(e)) || t.select();
                            },
                            beginDelayedSelectSource(e) {
                                var t;
                                null == (t = v(e)) || t.beginDelayedSelect();
                            },
                            cancelPendingSelectSource(e) {
                                var t;
                                null == (t = v(e)) || t.cancelPendingSelect();
                            },
                        });
                return {
                    ...m,
                    get state() {
                        return m.state;
                    },
                    selectSource(e) {
                        S.selectSource(e);
                    },
                    beginDelayedSelectSource(e) {
                        S.beginDelayedSelectSource(e);
                    },
                    cancelPendingSelectSource(e) {
                        S.cancelPendingSelectSource(e);
                    },
                    selectInlineLink(e, t) {
                        y.selectInlineLink(t, e);
                    },
                    beginDelayedSelectInlineLink(e, t) {
                        y.beginDelayedSelectInlineLink(t, e);
                    },
                    cancelPendingSelectInlineLink(e, t) {
                        y.cancelPendingSelectInlineLink(t, e);
                    },
                };
            }
            var fs = () => new em({required: !1, emptyAllowed: !0}),
                fo = t1('advancedSearchQueries/update', (e) => ab(e, {aq: fs(), cq: fs(), lq: fs(), dq: fs()})),
                fl = t1('advancedSearchQueries/register', (e) => ab(e, {aq: fs(), cq: fs(), lq: fs(), dq: fs()}));
            t2(a4(), (e) => {
                e.addCase(fo, (e, t) => {
                    let {aq: r, cq: n, lq: a, dq: i} = t.payload;
                    (ec(r) || ((e.aq = r), (e.aqWasSet = !0)),
                        ec(n) || ((e.cq = n), (e.cqWasSet = !0)),
                        ec(a) || ((e.lq = a), (e.lqWasSet = !0)),
                        ec(i) || ((e.dq = i), (e.dqWasSet = !0)));
                })
                    .addCase(fl, (e, t) => {
                        let {aq: r, cq: n, lq: a, dq: i} = t.payload;
                        (ec(r) || ((e.defaultFilters.aq = r), e.aqWasSet || (e.aq = r)),
                            ec(n) || ((e.defaultFilters.cq = n), e.cqWasSet || (e.cq = n)),
                            ec(a) || ((e.defaultFilters.lq = a), e.lqWasSet || (e.lq = a)),
                            ec(i) || ((e.defaultFilters.dq = i), e.dqWasSet || (e.dq = i)));
                    })
                    .addCase(a3.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.advancedSearchQueries) ? n : e;
                    })
                    .addCase(s2, (e, t) => {
                        let {aq: r, cq: n} = t.payload;
                        (ec(r) || ((e.aq = r), (e.aqWasSet = !0)), ec(n) || ((e.cq = n), (e.cqWasSet = !0)));
                    });
            });
            var fu = t1('pipeline/set', (e) => ab(e, new em({required: !0, emptyAllowed: !0})));
            t2(aF(), (e) => {
                e.addCase(fu, (e, t) => t.payload)
                    .addCase(a3.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.pipeline) ? n : e;
                    })
                    .addCase(sL, (e, t) => t.payload.pipeline || e);
            });
            var fc = new ew({each: ag, required: !0}),
                fd = (e, t) => (ab(e, ag), ey(t) ? ab(t, ag) : ab(t, fc), {payload: {contextKey: e, contextValue: t}}),
                ff = t1('context/set', (e) => {
                    for (let [t, r] of Object.entries(e)) fd(t, r);
                    return {payload: e};
                }),
                fp = t1('context/add', (e) => fd(e.contextKey, e.contextValue)),
                fh = t1('context/remove', (e) => ab(e, ag));
            t2(a6(), (e) => {
                e.addCase(ff, (e, t) => {
                    e.contextValues = t.payload;
                })
                    .addCase(fp, (e, t) => {
                        e.contextValues[t.payload.contextKey] = t.payload.contextValue;
                    })
                    .addCase(fh, (e, t) => {
                        delete e.contextValues[t.payload];
                    })
                    .addCase(a3.fulfilled, (e, t) => {
                        t.payload && (e.contextValues = t.payload.context.contextValues);
                    });
            });
            var fg = t1('dictionaryFieldContext/set', (e) => {
                    let t = ab(e, new eS({options: {required: !0}})).error;
                    if (t) return {payload: e, error: t};
                    let r = ab(Object.values(e), new ew({each: am})).error;
                    return r ? {payload: e, error: r} : {payload: e};
                }),
                fv = t1('dictionaryFieldContext/add', (e) =>
                    ab(e, new eS({options: {required: !0}, values: {field: am, key: am}})),
                ),
                fm = t1('dictionaryFieldContext/remove', (e) => ab(e, am));
            t2(a9(), (e) => {
                e.addCase(fg, (e, t) => {
                    e.contextValues = t.payload;
                })
                    .addCase(fv, (e, t) => {
                        let {field: r, key: n} = t.payload;
                        e.contextValues[r] = n;
                    })
                    .addCase(fm, (e, t) => {
                        delete e.contextValues[t.payload];
                    })
                    .addCase(a3.fulfilled, (e, t) => {
                        t.payload && (e.contextValues = t.payload.dictionaryFieldContext.contextValues);
                    });
            });
            var fy = t1('debug/enable'),
                fS = t1('debug/disable');
            (t2(a8(), (e) => {
                e.addCase(fy, () => !0)
                    .addCase(fS, () => !1)
                    .addCase(s2, (e, t) => {
                        var r;
                        return null != (r = t.payload.debug) ? r : e;
                    });
            }),
                t2([], (e) => {
                    e.addCase(sm.fulfilled, (e, t) => t.payload.response.facets.map((e) => e.facetId)).addCase(
                        a3.fulfilled,
                        (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.facetOrder) ? n : e;
                        },
                    );
                }),
                t2(io({}), (e) => {
                    e.addCase(a5, (e, t) => (fb(e, t.payload) ? void 0 : t.payload));
                }));
            var fb = (e, t) =>
                    fw(e.context, t.context) &&
                    fC(e.dictionaryFieldContext, t.dictionaryFieldContext) &&
                    fD(e.advancedSearchQueries, t.advancedSearchQueries) &&
                    fI(e.tabSet, t.tabSet) &&
                    fO(e.staticFilterSet, t.staticFilterSet) &&
                    fx(e.facetSet, t.facetSet) &&
                    fx(e.dateFacetSet, t.dateFacetSet) &&
                    fx(e.numericFacetSet, t.numericFacetSet) &&
                    fR(e.automaticFacetSet, t.automaticFacetSet) &&
                    fE(e.categoryFacetSet, t.categoryFacetSet) &&
                    fA(e.pagination, t.pagination) &&
                    fF(e.query, t.query) &&
                    fj(e, t) &&
                    fP(e.pipeline, t.pipeline) &&
                    fT(e.searchHub, t.searchHub) &&
                    fU(e.facetOrder, t.facetOrder) &&
                    fV(e.debug, t.debug),
                fw = (e, t) => JSON.stringify(e.contextValues) === JSON.stringify(t.contextValues),
                fC = (e, t) => JSON.stringify(e.contextValues) === JSON.stringify(t.contextValues),
                fI = (e, t) => {
                    let r = fk(e),
                        n = fk(t);
                    return (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id);
                },
                fk = (e) => Object.values(e).find((e) => e.isActive),
                fO = (e, t) => {
                    for (let [r, n] of Object.entries(t)) {
                        if (!e[r]) return !1;
                        let t = fq(e[r]),
                            a = fq(n);
                        if (JSON.stringify(t) !== JSON.stringify(a)) return !1;
                    }
                    return !0;
                },
                fq = (e) => e.values.filter((e) => 'idle' !== e.state),
                fx = (e, t) => {
                    for (let [r, n] of Object.entries(t)) {
                        if (!e[r]) return !1;
                        let t = e[r].request.currentValues.filter((e) => 'idle' !== e.state),
                            a = n.request.currentValues.filter((e) => 'idle' !== e.state);
                        if (JSON.stringify(t) !== JSON.stringify(a)) return !1;
                    }
                    return !0;
                },
                fE = (e, t) => {
                    var r;
                    for (let [n, a] of Object.entries(t)) {
                        if (!e[n]) return !1;
                        let t = n$(null == (r = e[n]) ? void 0 : r.request.currentValues).parents.map(
                                ({value: e}) => e,
                            ),
                            i = n$(null == a ? void 0 : a.request.currentValues).parents.map(({value: e}) => e);
                        if (JSON.stringify(t) !== JSON.stringify(i)) return !1;
                    }
                    return !0;
                },
                fR = (e, t) => {
                    for (let [r, n] of Object.entries(t.set)) {
                        if (!e.set[r]) return !1;
                        let t = e.set[r].response.values.filter((e) => 'idle' !== e.state),
                            a = n.response.values.filter((e) => 'idle' !== e.state);
                        if (JSON.stringify(t) !== JSON.stringify(a)) return !1;
                    }
                    return !0;
                },
                fA = (e, t) => e.firstResult === t.firstResult && e.numberOfResults === t.numberOfResults,
                fF = (e, t) => JSON.stringify(e) === JSON.stringify(t),
                fD = (e, t) => JSON.stringify(e) === JSON.stringify(t),
                fj = (e, t) => e.sortCriteria === t.sortCriteria,
                fP = (e, t) => e === t,
                fT = (e, t) => e === t,
                fU = (e, t) =>
                    (function (e, t, r = (e, t) => e === t) {
                        return e.length === t.length && -1 === e.findIndex((e, n) => !r(t[n], e));
                    })(e, t),
                fV = (e, t) => e === t;
            t2({}, (e) => {
                (e.addCase(i3, (e, t) => {
                    let {id: r} = t.payload;
                    e[r] || (e[r] = {q: '', cache: {}});
                }),
                    e.addCase(i4, (e, t) => {
                        let {q: r, id: n} = t.payload;
                        r && (e[n].q = r);
                    }),
                    e.addCase(i6, (e, t) => {
                        let {id: r} = t.payload;
                        Object.entries(e[r].cache).forEach(([t, n]) => {
                            n && n.expiresAt && Date.now() >= n.expiresAt && delete e[r].cache[t];
                        });
                    }),
                    e.addCase(sw.pending, (e, t) => {
                        for (let t in e) for (let r in e[t].cache) e[t].cache[r].isActive = !1;
                        if (!fL(e, t.meta)) {
                            fM(e, t.meta);
                            return;
                        }
                        let r = fL(e, t.meta);
                        ((r.isLoading = !0), (r.isActive = !0), (r.error = null));
                    }),
                    e.addCase(sw.fulfilled, (e, t) => {
                        let {results: r, searchUid: n, totalCountFiltered: a, duration: i} = t.payload,
                            {cacheTimeout: s} = t.meta.arg,
                            o = fL(e, t.meta);
                        ((o.isActive = !0),
                            (o.searchUid = n),
                            (o.isLoading = !1),
                            (o.error = null),
                            (o.results = r),
                            (o.expiresAt = s ? s + Date.now() : 0),
                            (o.totalCountFiltered = a),
                            (o.duration = i));
                    }),
                    e.addCase(sw.rejected, (e, t) => {
                        let r = fL(e, t.meta);
                        ((r.error = t.error || null), (r.isLoading = !1), (r.isActive = !1));
                    }));
            });
            var fM = (e, t) => {
                    let {q: r, id: n} = t.arg;
                    e[n].cache[r] = {
                        isLoading: !0,
                        error: null,
                        results: [],
                        expiresAt: 0,
                        isActive: !0,
                        searchUid: '',
                        totalCountFiltered: 0,
                        duration: 0,
                    };
                },
                fL = (e, t) => {
                    let {q: r, id: n} = t.arg;
                    return e[n].cache[r] || null;
                };
            function f$(e) {
                return 'redirect' === e.type;
            }
            var f_ = class {
                    constructor(e) {
                        this.response = e;
                    }
                    get basicExpression() {
                        return this.response.parsedInput.basicExpression;
                    }
                    get largeExpression() {
                        return this.response.parsedInput.largeExpression;
                    }
                    get redirectionUrl() {
                        let e = this.response.preprocessingOutput.triggers.filter(f$);
                        return e.length ? e[0].content : null;
                    }
                },
                fN = t1('standaloneSearchBox/register', (e) => ab(e, {id: ag, redirectionUrl: ag})),
                fQ = t1('standaloneSearchBox/reset', (e) => ab(e, {id: ag})),
                fz = t1('standaloneSearchBox/updateAnalyticsToSearchFromLink', (e) => ab(e, {id: ag})),
                fB = t1('standaloneSearchBox/updateAnalyticsToOmniboxFromLink'),
                fH = t9(
                    'standaloneSearchBox/fetchRedirect',
                    async (
                        e,
                        {dispatch: t, getState: r, rejectWithValue: n, extra: {apiClient: a, validatePayload: i}},
                    ) => {
                        i(e, {id: new em({emptyAllowed: !1})});
                        let s = await fW(r()),
                            o = await a.plan(s);
                        if (ej(o)) return n(o.error);
                        let {redirectionUrl: l} = new f_(o.success);
                        return (l && t(fY(l)), l || '');
                    },
                ),
                fY = (e) =>
                    aP('analytics/standaloneSearchBox/redirect', aD.Custom, (t) =>
                        t.makeTriggerRedirect({redirectedTo: e}),
                    ),
                fW = async (e) => ({
                    accessToken: e.configuration.accessToken,
                    organizationId: e.configuration.organizationId,
                    url: e.configuration.search.apiBaseUrl,
                    locale: e.configuration.search.locale,
                    timezone: e.configuration.search.timezone,
                    q: e.query.q,
                    ...(e.context && {context: e.context.contextValues}),
                    ...(e.pipeline && {pipeline: e.pipeline}),
                    ...(e.searchHub && {searchHub: e.searchHub}),
                    ...(e.configuration.analytics.enabled && {visitorId: await al(e.configuration.analytics)}),
                    ...(e.configuration.analytics.enabled && (await iA(e.configuration.analytics))),
                    ...(e.configuration.search.authenticationProviders.length && {
                        authentication: e.configuration.search.authenticationProviders.join(','),
                    }),
                });
            function fJ(e) {
                return {
                    defaultRedirectionUrl: e,
                    redirectTo: '',
                    isLoading: !1,
                    analytics: {cause: '', metadata: null},
                };
            }
            (t2({}, (e) =>
                e
                    .addCase(fN, (e, t) => {
                        let {id: r, redirectionUrl: n} = t.payload;
                        r in e || (e[r] = fJ(n));
                    })
                    .addCase(fQ, (e, t) => {
                        let {id: r} = t.payload,
                            n = e[r];
                        if (n) {
                            e[r] = fJ(n.defaultRedirectionUrl);
                            return;
                        }
                    })
                    .addCase(fH.pending, (e, t) => {
                        let r = e[t.meta.arg.id];
                        r && (r.isLoading = !0);
                    })
                    .addCase(fH.fulfilled, (e, t) => {
                        let r = t.payload,
                            n = e[t.meta.arg.id];
                        n && ((n.redirectTo = r || n.defaultRedirectionUrl), (n.isLoading = !1));
                    })
                    .addCase(fH.rejected, (e, t) => {
                        let r = e[t.meta.arg.id];
                        r && (r.isLoading = !1);
                    })
                    .addCase(fz, (e, t) => {
                        let r = e[t.payload.id];
                        r && (r.analytics.cause = 'searchFromLink');
                    })
                    .addCase(fB, (e, t) => {
                        let r = e[t.payload.id];
                        r && ((r.analytics.cause = 'omniboxFromLink'), (r.analytics.metadata = t.payload.metadata));
                    }),
            ),
                t2({}, (e) =>
                    e
                        .addCase(cy, (e, t) => {
                            let r = t.payload,
                                {id: n} = r;
                            n in e || (e[n] = r);
                        })
                        .addCase(cS, (e, t) => {
                            let {id: r, value: n} = t.payload,
                                a = e[r];
                            if (!a) return;
                            let i = a.values.find((e) => e.caption === n.caption);
                            if (!i) return;
                            let s = 'selected' === i.state;
                            i.state = s ? 'idle' : 'selected';
                        })
                        .addCase(cb, (e, t) => {
                            let {id: r, value: n} = t.payload,
                                a = e[r];
                            if (!a) return;
                            let i = a.values.find((e) => e.caption === n.caption);
                            if (!i) return;
                            let s = 'excluded' === i.state;
                            i.state = s ? 'idle' : 'excluded';
                        })
                        .addCase(cw, (e, t) => {
                            let r = e[t.payload];
                            r && r.values.forEach((e) => (e.state = 'idle'));
                        })
                        .addCase(iG, (e) => {
                            Object.values(e).forEach((e) => {
                                e.values.forEach((e) => (e.state = 'idle'));
                            });
                        })
                        .addCase(s2, (e, t) => {
                            let r = t.payload.sf || {};
                            Object.entries(e).forEach(([e, t]) => {
                                let n = r[e] || [];
                                t.values.forEach((e) => {
                                    e.state = n.includes(e.caption) ? 'selected' : 'idle';
                                });
                            });
                        }),
                ));
            var fK = {
                    queries: new ew({required: !0, each: new em({emptyAllowed: !1})}),
                    maxLength: new ef({required: !0, min: 1, default: 10}),
                },
                fG = t1('recentQueries/registerRecentQueries', (e) => ab(e, fK)),
                fZ = t1('recentQueries/clearRecentQueries');
            t2({queries: [], maxLength: 10}, (e) => {
                e.addCase(fG, (e, t) => {
                    ((e.queries = t.payload.queries.slice(0, t.payload.maxLength)),
                        (e.maxLength = t.payload.maxLength));
                })
                    .addCase(fZ, (e) => {
                        e.queries = [];
                    })
                    .addCase(sm.fulfilled, (e, t) => {
                        let r = t.payload.queryExecuted.trim(),
                            n = t.payload.response.results;
                        if (!r.length || !n.length) return;
                        e.queries = e.queries.filter((e) => e !== r);
                        let a = e.queries.slice(0, e.maxLength - 1);
                        e.queries = [r, ...a];
                    });
            });
            var fX = t1('excerptLength/set', (e) => ab(e, new ef({min: 0, required: !0})));
            t2({length: void 0}, (e) => {
                e.addCase(fX, (e, t) => {
                    e.length = t.payload;
                });
            });
            var f0 = (e) =>
                    aP('analytics/generatedAnswer/streamEnd', aD.Custom, (t, r) => {
                        var n, a, i;
                        let s =
                            null ==
                            (i =
                                null == (a = null == (n = r.search) ? void 0 : n.response) ? void 0 : a.extendedResults)
                                ? void 0
                                : i.generativeQuestionAnsweringId;
                        return s
                            ? t.makeGeneratedAnswerStreamEnd({generativeQuestionAnsweringId: s, answerGenerated: e})
                            : null;
                    }),
                f1 = async (e) => {
                    var t;
                    return {
                        accessToken: e.configuration.accessToken,
                        organizationId: e.configuration.organizationId,
                        url: e.configuration.platformUrl,
                        streamId: null == (t = e.search.extendedResults) ? void 0 : t.generativeQuestionAnsweringId,
                    };
                },
                f2 = new em({required: !0}),
                f5 = new em(),
                f3 = new eh({required: !0}),
                f4 = {id: f2, title: f2, uri: f2, permanentid: f2, clickUri: f5},
                f6 = t1('generatedAnswer/updateMessage', (e) => ab(e, {textDelta: f2})),
                f8 = t1('generatedAnswer/updateCitations', (e) =>
                    ab(e, {citations: new ew({required: !0, each: new eS({values: f4})})}),
                ),
                f9 = t1('generatedAnswer/updateError', (e) => ab(e, {message: f5, code: new ef({min: 0})})),
                f7 = t1('generatedAnswer/resetAnswer'),
                pe = t1('generatedAnswer/like'),
                pt = t1('generatedAnswer/dislike'),
                pr = t1('generatedAnswer/setIsLoading', (e) => ab(e, f3)),
                pn = t1('generatedAnswer/setIsStreaming', (e) => ab(e, f3));
            function pa() {
                return {isLoading: !1, isStreaming: !1, citations: [], liked: !1, disliked: !1};
            }
            function pi(e) {
                let t, r;
                return (
                    !(function (e) {
                        e.addReducers({search: sZ});
                    })(e),
                    (t = u3(e)),
                    (r = () => e.state),
                    {
                        ...t,
                        get state() {
                            return {hasError: null !== r().search.error, error: r().search.error};
                        },
                    }
                );
            }
            (t9('generatedAnswer/streamAnswer', async (e, t) => {
                var r;
                let n = t.getState(),
                    {dispatch: a, extra: i} = t,
                    {setAbortControllerRef: s} = e,
                    o = await f1(n),
                    l = (e, t) => {
                        switch (e) {
                            case 'genqa.messageType':
                                a(f6(JSON.parse(t)));
                                break;
                            case 'genqa.citationsType':
                                a(f8(JSON.parse(t)));
                                break;
                            case 'genqa.endOfStreamType':
                                (a(pn(!1)), a(f0(JSON.parse(t).answerGenerated)));
                                break;
                            default:
                                n.debug && i.logger.warn(`Unknown payloadType: "${e}"`);
                        }
                    };
                a(pr(!0));
                let u =
                    null == (r = i.streamingClient)
                        ? void 0
                        : r.streamGeneratedAnswer(o, {
                              write: (e) => {
                                  o.streamId === n.search.extendedResults.generativeQuestionAnsweringId &&
                                      (a(pr(!1)), e.payload && e.payloadType && l(e.payloadType, e.payload));
                              },
                              abort: (e) => {
                                  o.streamId === n.search.extendedResults.generativeQuestionAnsweringId && a(f9(e));
                              },
                              close: () => {
                                  o.streamId === n.search.extendedResults.generativeQuestionAnsweringId && a(pn(!1));
                              },
                              resetAnswer: () => {
                                  o.streamId === n.search.extendedResults.generativeQuestionAnsweringId && a(f7());
                              },
                          });
                u ? s(u) : a(pr(!1));
            }),
                t2(pa(), (e) =>
                    e
                        .addCase(f6, (e, {payload: t}) => {
                            ((e.isLoading = !1),
                                (e.isStreaming = !0),
                                e.answer || (e.answer = ''),
                                (e.answer += t.textDelta),
                                delete e.error);
                        })
                        .addCase(f8, (e, {payload: t}) => {
                            ((e.isLoading = !1),
                                (e.isStreaming = !0),
                                (e.citations = e.citations.concat(t.citations)),
                                delete e.error);
                        })
                        .addCase(f9, (e, {payload: t}) => {
                            ((e.isLoading = !1),
                                (e.isStreaming = !1),
                                (e.error = {...t, isRetryable: 1 === t.code}),
                                (e.citations = []),
                                delete e.answer);
                        })
                        .addCase(pe, (e) => {
                            ((e.liked = !0), (e.disliked = !1));
                        })
                        .addCase(pt, (e) => {
                            ((e.liked = !1), (e.disliked = !0));
                        })
                        .addCase(f7, () => pa())
                        .addCase(pr, (e, {payload: t}) => {
                            e.isLoading = t;
                        })
                        .addCase(pn, (e, {payload: t}) => {
                            e.isStreaming = t;
                        }),
                ),
                ((p = y || (y = {})).getResultProperty = sH),
                (p.fieldsMustBeDefined = (e) => (t) => e.every((e) => !ed(sH(t, e)))),
                (p.fieldsMustNotBeDefined = (e) => (t) => e.every((e) => ed(sH(t, e)))),
                (p.fieldMustMatch = (e, t) => (r) => {
                    let n = sY(e, r);
                    return t.some((e) => n.some((t) => `${t}`.toLowerCase() === e.toLowerCase()));
                }),
                (p.fieldMustNotMatch = (e, t) => (r) => {
                    let n = sY(e, r);
                    return t.every((e) => n.every((t) => `${t}`.toLowerCase() !== e.toLowerCase()));
                }),
                'undefined' == typeof window &&
                    (r.g.crypto || (r.g.crypto = q('crypto')),
                    !r.g.crypto.getRandomValues &&
                        r.g.crypto.webcrypto &&
                        (r.g.crypto.getRandomValues = (0, r.g.crypto).webcrypto.getRandomValues.bind(
                            r.g.crypto.webcrypto,
                        ))));
        },
    },
]);
