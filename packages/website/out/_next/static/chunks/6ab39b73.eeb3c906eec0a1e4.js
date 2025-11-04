'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [70922],
    {
        64977: function (e, t, r) {
            r.d(t, {
                $: function () {
                    return pr;
                },
                A: function () {
                    return gu;
                },
                B: function () {
                    return cV;
                },
                C: function () {
                    return pl;
                },
                D: function () {
                    return px;
                },
                E: function () {
                    return hp;
                },
                F: function () {
                    return gB;
                },
                G: function () {
                    return gU;
                },
                H: function () {
                    return sZ;
                },
                I: function () {
                    return dq;
                },
                J: function () {
                    return gT;
                },
                K: function () {
                    return dN;
                },
                L: function () {
                    return gV;
                },
                M: function () {
                    return g_;
                },
                N: function () {
                    return pR;
                },
                O: function () {
                    return gz;
                },
                P: function () {
                    return pg;
                },
                Q: function () {
                    return pM;
                },
                R: function () {
                    return go;
                },
                S: function () {
                    return gs;
                },
                T: function () {
                    return n1;
                },
                U: function () {
                    return cd;
                },
                V: function () {
                    return gM;
                },
                W: function () {
                    return hV;
                },
                X: function () {
                    return fx;
                },
                Z: function () {
                    return c4;
                },
                _: function () {
                    return hT;
                },
                a: function () {
                    return h;
                },
                b: function () {
                    return sU;
                },
                c: function () {
                    return gF;
                },
                d: function () {
                    return op;
                },
                e: function () {
                    return fE;
                },
                f: function () {
                    return fN;
                },
                g: function () {
                    return fo;
                },
                h: function () {
                    return dP;
                },
                i: function () {
                    return fj;
                },
                j: function () {
                    return hj;
                },
                k: function () {
                    return fR;
                },
                l: function () {
                    return dT;
                },
                m: function () {
                    return dL;
                },
                n: function () {
                    return hk;
                },
                o: function () {
                    return pG;
                },
                p: function () {
                    return f_;
                },
                q: function () {
                    return gL;
                },
                r: function () {
                    return rK;
                },
                s: function () {
                    return hd;
                },
                t: function () {
                    return lV;
                },
                u: function () {
                    return f$;
                },
                v: function () {
                    return nI;
                },
                w: function () {
                    return h3;
                },
                x: function () {
                    return g$;
                },
                y: function () {
                    return l2;
                },
                z: function () {
                    return h4;
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
                o,
                s,
                l,
                u,
                c,
                d,
                f,
                p,
                h,
                g = Object.create,
                v = Object.defineProperty,
                m = Object.getOwnPropertyDescriptor,
                y = Object.getOwnPropertyNames,
                S = Object.getPrototypeOf,
                b = Object.prototype.hasOwnProperty,
                w = (e) => v(e, '__esModule', {value: !0}),
                I = r(22029),
                C = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports),
                k = (e, t) => {
                    for (var r in (w(e), t)) v(e, r, {get: t[r], enumerable: !0});
                },
                O = (e, t, r) => {
                    if ((t && 'object' == typeof t) || 'function' == typeof t)
                        for (let n of y(t))
                            b.call(e, n) ||
                                'default' === n ||
                                v(e, n, {get: () => t[n], enumerable: !(r = m(t, n)) || r.enumerable});
                    return e;
                },
                q = (e) =>
                    O(
                        w(
                            v(
                                null != e ? g(S(e)) : {},
                                'default',
                                e && e.__esModule && 'default' in e
                                    ? {get: () => e.default, enumerable: !0}
                                    : {value: e, enumerable: !0},
                            ),
                        ),
                        e,
                    ),
                x = C((e, t) => {
                    function r(e) {
                        return (
                            (t.exports = r =
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
                                      }),
                            (t.exports.__esModule = !0),
                            (t.exports.default = t.exports),
                            r(e)
                        );
                    }
                    ((t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports));
                }),
                R = C((e, t) => {
                    var r = x().default;
                    ((t.exports = function (e, t) {
                        if ('object' !== r(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var a = n.call(e, t || 'default');
                            if ('object' !== r(a)) return a;
                            throw TypeError('@@toPrimitive must return a primitive value.');
                        }
                        return ('string' === t ? String : Number)(e);
                    }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports));
                }),
                A = C((e, t) => {
                    var r = x().default,
                        n = R();
                    ((t.exports = function (e) {
                        var t = n(e, 'string');
                        return 'symbol' === r(t) ? t : String(t);
                    }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports));
                }),
                E = C((e, t) => {
                    var r = A();
                    ((t.exports = function (e, t, n) {
                        return (
                            (t = r(t)) in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n),
                            e
                        );
                    }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports));
                }),
                F = C((e, t) => {
                    var r = E();
                    function n(e, t) {
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
                    ((t.exports = function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2
                                ? n(Object(a), !0).forEach(function (t) {
                                      r(e, t, a[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                                  : n(Object(a)).forEach(function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                                    });
                        }
                        return e;
                    }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports));
                }),
                D = C((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = F(),
                        r = t && 'object' == typeof t && 'default' in t ? t : {default: t};
                    function n(e) {
                        return (
                            'Minified Redux error #' +
                            e +
                            '; visit https://redux.js.org/Errors?code=' +
                            e +
                            ' for the full message or use the non-minified dev environment for full errors. '
                        );
                    }
                    var a = ('function' == typeof Symbol && Symbol.observable) || '@@observable',
                        i = function () {
                            return Math.random().toString(36).substring(7).split('').join('.');
                        },
                        o = {
                            INIT: '@@redux/INIT' + i(),
                            REPLACE: '@@redux/REPLACE' + i(),
                            PROBE_UNKNOWN_ACTION: function () {
                                return '@@redux/PROBE_UNKNOWN_ACTION' + i();
                            },
                        };
                    function s(e, t, r) {
                        if (
                            ('function' == typeof t && 'function' == typeof r) ||
                            ('function' == typeof r && 'function' == typeof arguments[3])
                        )
                            throw Error(n(0));
                        if (('function' == typeof t && void 0 === r && ((r = t), (t = void 0)), void 0 !== r)) {
                            if ('function' != typeof r) throw Error(n(1));
                            return r(s)(e, t);
                        }
                        if ('function' != typeof e) throw Error(n(2));
                        var i,
                            l = e,
                            u = t,
                            c = [],
                            d = c,
                            f = !1;
                        function p() {
                            d === c && (d = c.slice());
                        }
                        function h() {
                            if (f) throw Error(n(3));
                            return u;
                        }
                        function g(e) {
                            if ('function' != typeof e) throw Error(n(4));
                            if (f) throw Error(n(5));
                            var t = !0;
                            return (
                                p(),
                                d.push(e),
                                function () {
                                    if (t) {
                                        if (f) throw Error(n(6));
                                        ((t = !1), p());
                                        var r = d.indexOf(e);
                                        (d.splice(r, 1), (c = null));
                                    }
                                }
                            );
                        }
                        function v(e) {
                            if (
                                !(function (e) {
                                    if ('object' != typeof e || null === e) return !1;
                                    for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
                                    return Object.getPrototypeOf(e) === t;
                                })(e)
                            )
                                throw Error(n(7));
                            if (void 0 === e.type) throw Error(n(8));
                            if (f) throw Error(n(9));
                            try {
                                ((f = !0), (u = l(u, e)));
                            } finally {
                                f = !1;
                            }
                            for (var t = (c = d), r = 0; r < t.length; r++) (0, t[r])();
                            return e;
                        }
                        return (
                            v({type: o.INIT}),
                            ((i = {
                                dispatch: v,
                                subscribe: g,
                                getState: h,
                                replaceReducer: function (e) {
                                    if ('function' != typeof e) throw Error(n(10));
                                    ((l = e), v({type: o.REPLACE}));
                                },
                            })[a] = function () {
                                var e;
                                return (
                                    ((e = {
                                        subscribe: function (e) {
                                            if ('object' != typeof e || null === e) throw Error(n(11));
                                            function t() {
                                                e.next && e.next(h());
                                            }
                                            return (t(), {unsubscribe: g(t)});
                                        },
                                    })[a] = function () {
                                        return this;
                                    }),
                                    e
                                );
                            }),
                            i
                        );
                    }
                    function l(e, t) {
                        return function () {
                            return t(e.apply(this, arguments));
                        };
                    }
                    function u() {
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
                    ((e.__DO_NOT_USE__ActionTypes = o),
                        (e.applyMiddleware = function () {
                            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                            return function (e) {
                                return function () {
                                    var a = e.apply(void 0, arguments),
                                        i = function () {
                                            throw Error(n(15));
                                        },
                                        o = {
                                            getState: a.getState,
                                            dispatch: function () {
                                                return i.apply(void 0, arguments);
                                            },
                                        },
                                        s = t.map(function (e) {
                                            return e(o);
                                        });
                                    return (
                                        (i = u.apply(void 0, s)(a.dispatch)),
                                        r.default(r.default({}, a), {}, {dispatch: i})
                                    );
                                };
                            };
                        }),
                        (e.bindActionCreators = function (e, t) {
                            if ('function' == typeof e) return l(e, t);
                            if ('object' != typeof e || null === e) throw Error(n(16));
                            var r = {};
                            for (var a in e) {
                                var i = e[a];
                                'function' == typeof i && (r[a] = l(i, t));
                            }
                            return r;
                        }),
                        (e.combineReducers = function (e) {
                            for (var t = Object.keys(e), r = {}, a = 0; a < t.length; a++) {
                                var i = t[a];
                                'function' == typeof e[i] && (r[i] = e[i]);
                            }
                            var s,
                                l = Object.keys(r);
                            try {
                                !(function (e) {
                                    Object.keys(e).forEach(function (t) {
                                        var r = e[t];
                                        if (void 0 === r(void 0, {type: o.INIT})) throw Error(n(12));
                                        if (void 0 === r(void 0, {type: o.PROBE_UNKNOWN_ACTION()})) throw Error(n(13));
                                    });
                                })(r);
                            } catch (e) {
                                s = e;
                            }
                            return function (e, t) {
                                if ((void 0 === e && (e = {}), s)) throw s;
                                for (var a = !1, i = {}, o = 0; o < l.length; o++) {
                                    var u = l[o],
                                        c = r[u],
                                        d = e[u],
                                        f = c(d, t);
                                    if (void 0 === f) throw Error(n(14));
                                    ((i[u] = f), (a = a || f !== d));
                                }
                                return (a = a || l.length !== Object.keys(e).length) ? i : e;
                            };
                        }),
                        (e.compose = u),
                        (e.createStore = s),
                        (e.legacy_createStore = s));
                }),
                j = C((e, t) => {
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
                            var o = Array(i);
                            o[0] = a(e);
                            for (var s = 1; s < i; s++) o[s] = a(t[s]);
                            return o.join(' ');
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
                P = C((e, t) => {
                    var r = j();
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
                                    (delete t.serializers, o([t], i, a, this._stdErrSerialize));
                                }
                                function c(e) {
                                    ((this._childLevel = (0 | e._childLevel) + 1),
                                        (this.error = s(e, t, 'error')),
                                        (this.fatal = s(e, t, 'fatal')),
                                        (this.warn = s(e, t, 'warn')),
                                        (this.info = s(e, t, 'info')),
                                        (this.debug = s(e, t, 'debug')),
                                        (this.trace = s(e, t, 'trace')),
                                        a && ((this.serializers = a), (this._serialize = i)),
                                        u && (this._logEvent = l([].concat(e._logEvent.bindings, t))));
                                }
                                return ((c.prototype = this), new c(this));
                            }),
                            u && (y._logEvent = l()),
                            y
                        );
                    }
                    function i(e, t, i, s) {
                        var u;
                        let c = Object.getPrototypeOf(t);
                        ((t[i] = t.levelVal > t.levels.values[i] ? d : c[i] ? c[i] : n[i] || n[s] || d),
                            (e.transmit || t[i] !== d) &&
                                (t[i] =
                                    ((u = t[i]),
                                    function () {
                                        let s = e.timestamp(),
                                            c = Array(arguments.length),
                                            d = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                        for (var f, p = 0; p < c.length; p++) c[p] = arguments[p];
                                        if (
                                            (e.serialize &&
                                                !e.asObject &&
                                                o(c, this._serialize, this.serializers, this._stdErrSerialize),
                                            e.asObject
                                                ? u.call(
                                                      d,
                                                      (function (e, t, n, i) {
                                                          e._serialize &&
                                                              o(n, e._serialize, e.serializers, e._stdErrSerialize);
                                                          let s = n.slice(),
                                                              l = s[0],
                                                              u = {};
                                                          (i && (u.time = i), (u.level = a.levels.values[t]));
                                                          let c = (0 | e._childLevel) + 1;
                                                          if ((c < 1 && (c = 1), null !== l && 'object' == typeof l)) {
                                                              for (; c-- && 'object' == typeof s[0]; )
                                                                  Object.assign(u, s.shift());
                                                              l = s.length ? r(s.shift(), s) : void 0;
                                                          } else 'string' == typeof l && (l = r(s.shift(), s));
                                                          return (void 0 !== l && (u.msg = l), u);
                                                      })(this, i, c, s),
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
                                                ts: s,
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
                                                o(
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
                    function o(e, t, r, n) {
                        for (let i in e)
                            if (n && e[i] instanceof Error) e[i] = a.stdSerializers.err(e[i]);
                            else if ('object' == typeof e[i] && !Array.isArray(e[i]))
                                for (let n in e[i]) t && t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]));
                    }
                    function s(e, t, r) {
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
                T = C((e, t) => {
                    var r,
                        n,
                        a = Object.prototype,
                        i = Function.prototype.toString,
                        o = a.hasOwnProperty,
                        s = i.call(Object),
                        l = a.toString,
                        u =
                            ((r = Object.getPrototypeOf),
                            (n = Object),
                            function (e) {
                                return r(n(e));
                            });
                    t.exports = function (e) {
                        if (
                            !(e && 'object' == typeof e) ||
                            '[object Object]' != l.call(e) ||
                            (function (e) {
                                var t = !1;
                                if (null != e && 'function' != typeof e.toString)
                                    try {
                                        t = !!(e + '');
                                    } catch {}
                                return t;
                            })(e)
                        )
                            return !1;
                        var t = u(e);
                        if (null === t) return !0;
                        var r = o.call(t, 'constructor') && t.constructor;
                        return 'function' == typeof r && r instanceof r && i.call(r) == s;
                    };
                }),
                V = C((e) => {
                    (Object.defineProperty(e, '__esModule', {value: !0}),
                        (e.default = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            return function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return r.applyMiddleware.apply(
                                    void 0,
                                    (function (e) {
                                        if (!Array.isArray(e)) return Array.from(e);
                                        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                                        return r;
                                    })(e),
                                )(function () {
                                    var e = [],
                                        r = [];
                                    return {
                                        getState: function () {
                                            return a(t) ? t(e) : t;
                                        },
                                        getActions: function () {
                                            return e;
                                        },
                                        dispatch: function (t) {
                                            if (!(0, n.default)(t))
                                                throw Error(
                                                    'Actions must be plain objects. Use custom middleware for async actions.',
                                                );
                                            if (void 0 === t.type)
                                                throw Error(
                                                    'Actions may not have an undefined "type" property. Have you misspelled a constant? Action: ' +
                                                        JSON.stringify(t),
                                                );
                                            e.push(t);
                                            for (var a = 0; a < r.length; a++) r[a]();
                                            return t;
                                        },
                                        clearActions: function () {
                                            e = [];
                                        },
                                        subscribe: function (e) {
                                            return (
                                                a(e) && r.push(e),
                                                function () {
                                                    var t = r.indexOf(e);
                                                    t < 0 || r.splice(t, 1);
                                                }
                                            );
                                        },
                                        replaceReducer: function (e) {
                                            if (!a(e)) throw Error('Expected the nextReducer to be a function.');
                                        },
                                    };
                                })();
                            };
                        }));
                    var t,
                        r = D(),
                        n = (t = T()) && t.__esModule ? t : {default: t},
                        a = function (e) {
                            return 'function' == typeof e;
                        };
                }),
                M = C((e, t) => {
                    var n, a;
                    ((n = e),
                        (a = function () {
                            var e = 'millisecond',
                                t = 'second',
                                r = 'minute',
                                n = 'hour',
                                a = 'week',
                                i = 'month',
                                o = 'quarter',
                                s = 'year',
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
                                        var o = t.split('-');
                                        if (!a && o.length > 1) return e(o[0]);
                                    } else {
                                        var s = t.name;
                                        ((h[s] = t), (a = s));
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
                                            o = r - a < 0,
                                            s = t.clone().add(n + (o ? -1 : 1), i);
                                        return +(-(n + (r - a) / (o ? a - s : s - a)) || 0);
                                    },
                                    a: function (e) {
                                        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
                                    },
                                    p: function (u) {
                                        return (
                                            {M: i, y: s, w: a, d: 'day', D: l, h: n, m: r, s: t, ms: e, Q: o}[u] ||
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
                                        (p.startOf = function (e, o) {
                                            var u = this,
                                                c = !!y.u(o) || o,
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
                                                case s:
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
                                        (p.$set = function (a, o) {
                                            var u,
                                                c = y.p(a),
                                                d = 'set' + (this.$u ? 'UTC' : ''),
                                                f = (((u = {}).day = d + 'Date'),
                                                (u[l] = d + 'Date'),
                                                (u[i] = d + 'Month'),
                                                (u[s] = d + 'FullYear'),
                                                (u[n] = d + 'Hours'),
                                                (u[r] = d + 'Minutes'),
                                                (u[t] = d + 'Seconds'),
                                                (u[e] = d + 'Milliseconds'),
                                                u)[c],
                                                p = 'day' === c ? this.$D + (o - this.$W) : o;
                                            if (c === i || c === s) {
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
                                        (p.add = function (e, o) {
                                            var l,
                                                u = this;
                                            e = Number(e);
                                            var c = y.p(o),
                                                d = function (t) {
                                                    var r = m(u);
                                                    return y.w(r.date(r.date() + Math.round(t * e)), u);
                                                };
                                            if (c === i) return this.set(i, this.$M + e);
                                            if (c === s) return this.set(s, this.$y + e);
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
                                                o = this.$m,
                                                s = this.$M,
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
                                                    M: s + 1,
                                                    MM: y.s(s + 1, 2, '0'),
                                                    MMM: f(r.monthsShort, s, c, 3),
                                                    MMMM: f(c, s),
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
                                                    a: h(i, o, !0),
                                                    A: h(i, o, !1),
                                                    m: String(o),
                                                    mm: y.s(o, 2, '0'),
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
                                                    (((c = {})[s] = g / 12),
                                                    (c[i] = g),
                                                    (c[o] = g / 3),
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
                                    ['$y', s],
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
                U = C((e, t) => {
                    var n, a;
                    ((n = e),
                        (a = function () {
                            var e = {year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5},
                                t = {};
                            return function (r, n, a) {
                                var i,
                                    o = function (e, r, n) {
                                        void 0 === n && (n = {});
                                        var a,
                                            i,
                                            o,
                                            s,
                                            l = new Date(e);
                                        return (void 0 === (a = n) && (a = {}),
                                        (s = t[(o = r + '|' + (i = a.timeZoneName || 'short'))]) ||
                                            ((s = new Intl.DateTimeFormat('en-US', {
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
                                            (t[o] = s)),
                                        s).formatToParts(l);
                                    },
                                    s = function (t, r) {
                                        for (var n = o(t, r), i = [], s = 0; s < n.length; s += 1) {
                                            var l = n[s],
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
                                        o = n.toLocaleString('en-US', {timeZone: e}),
                                        s = Math.round((n - new Date(o)) / 1e3 / 60),
                                        l = a(o)
                                            .$set('millisecond', this.$ms)
                                            .utcOffset(-(15 * Math.round(n.getTimezoneOffset() / 15)) - s, !0);
                                    if (t) {
                                        var u = l.utcOffset();
                                        l = l.add(r - u, 'minute');
                                    }
                                    return ((l.$x.$timezone = e), l);
                                }),
                                    (l.offsetName = function (e) {
                                        var t = this.$x.$timezone || a.tz.guess(),
                                            r = o(this.valueOf(), t, {timeZoneName: e}).find(function (e) {
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
                                            o = r || t || i,
                                            l = s(+a(), o);
                                        if ('string' != typeof e) return a(e).tz(o);
                                        var u = (function (e, t, r) {
                                                var n = e - 60 * t * 1e3,
                                                    a = s(n, r);
                                                if (t === a) return [n, t];
                                                var i = s((n -= 60 * (a - t) * 1e3), r);
                                                return a === i
                                                    ? [n, a]
                                                    : [e - 60 * Math.min(a, i) * 1e3, Math.max(a, i)];
                                            })(a.utc(e, n).valueOf(), l, o),
                                            c = u[0],
                                            d = u[1],
                                            f = a(c).utcOffset(d);
                                        return ((f.$x.$timezone = o), f);
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
                L = C((e, t) => {
                    var n, a;
                    ((n = e),
                        (a = function () {
                            var e = 'minute',
                                t = /[+-]\d\d(?::?\d\d)?/g,
                                r = /([+-]|\d\d)/g;
                            return function (n, a, i) {
                                var o = a.prototype;
                                ((i.utc = function (e) {
                                    var t = {date: e, utc: !0, args: arguments};
                                    return new a(t);
                                }),
                                    (o.utc = function (t) {
                                        var r = i(this.toDate(), {locale: this.$L, utc: !0});
                                        return t ? r.add(this.utcOffset(), e) : r;
                                    }),
                                    (o.local = function () {
                                        return i(this.toDate(), {locale: this.$L, utc: !1});
                                    }));
                                var s = o.parse;
                                o.parse = function (e) {
                                    (e.utc && (this.$u = !0),
                                        this.$utils().u(e.$offset) || (this.$offset = e.$offset),
                                        s.call(this, e));
                                };
                                var l = o.init;
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
                                    } else l.call(this);
                                };
                                var u = o.utcOffset;
                                o.utcOffset = function (n, a) {
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
                                                    o = 60 * +a[1] + +a[2];
                                                return 0 === o ? 0 : '+' === i ? o : -o;
                                            })(n))
                                    )
                                        return this;
                                    var o = 16 >= Math.abs(n) ? 60 * n : n,
                                        s = this;
                                    if (a) return ((s.$offset = o), (s.$u = 0 === n), s);
                                    if (0 !== n) {
                                        var l = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                                        (((s = this.local().add(o + l, e)).$offset = o), (s.$x.$localOffset = l));
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
                                        ? i(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
                                        : d.call(this);
                                };
                                var f = o.diff;
                                o.diff = function (e, t, r) {
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
                $ = C((e, t) => {
                    t.exports = fetch;
                }),
                _ = C((e) => {
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
                Q = C((e) => {
                    (Object.defineProperty(e, '__esModule', {value: !0}),
                        (e.fullJitter = function (e) {
                            return Math.round(Math.random() * e);
                        }));
                }),
                N = C((e) => {
                    (Object.defineProperty(e, '__esModule', {value: !0}),
                        (e.noJitter = function (e) {
                            return e;
                        }));
                }),
                z = C((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = Q(),
                        r = N();
                    e.JitterFactory = function (e) {
                        return 'full' === e.jitter ? t.fullJitter : r.noJitter;
                    };
                }),
                B = C((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = z(),
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
                H = C((e) => {
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
                                    function o(e) {
                                        try {
                                            l(n.next(e));
                                        } catch (e) {
                                            i(e);
                                        }
                                    }
                                    function s(e) {
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
                                              ).then(o, s);
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
                                    o = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & a[0]) throw a[1];
                                            return a[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (i = {next: s(0), throw: s(1), return: s(2)}),
                                    'function' == typeof Symbol &&
                                        (i[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    i
                                );
                                function s(i) {
                                    return function (s) {
                                        return (function (i) {
                                            if (r) throw TypeError('Generator is already executing.');
                                            for (; o; )
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
                                                            return (o.label++, {value: i[1], done: !1});
                                                        case 5:
                                                            (o.label++, (n = i[1]), (i = [0]));
                                                            continue;
                                                        case 7:
                                                            ((i = o.ops.pop()), o.trys.pop());
                                                            continue;
                                                        default:
                                                            if (
                                                                !(a = (a = o.trys).length > 0 && a[a.length - 1]) &&
                                                                (6 === i[0] || 2 === i[0])
                                                            ) {
                                                                o = 0;
                                                                continue;
                                                            }
                                                            if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                                                o.label = i[1];
                                                                break;
                                                            }
                                                            if (6 === i[0] && o.label < a[1]) {
                                                                ((o.label = a[1]), (a = i));
                                                                break;
                                                            }
                                                            if (a && o.label < a[2]) {
                                                                ((o.label = a[2]), o.ops.push(i));
                                                                break;
                                                            }
                                                            (a[2] && o.ops.pop(), o.trys.pop());
                                                            continue;
                                                    }
                                                    i = t.call(e, o);
                                                } catch (e) {
                                                    ((i = [6, e]), (n = 0));
                                                } finally {
                                                    r = a = 0;
                                                }
                                            if (5 & i[0]) throw i[1];
                                            return {value: i[0] ? i[1] : void 0, done: !0};
                                        })([i, s]);
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
                    })(B().Delay);
                    e.SkipFirstDelay = i;
                }),
                Y = C((e) => {
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
                    })(B().Delay);
                    e.AlwaysDelay = n;
                }),
                W = C((e) => {
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var t = H(),
                        r = Y();
                    e.DelayFactory = function (e, n) {
                        var a = e.delayFirstAttempt ? new r.AlwaysDelay(e) : new t.SkipFirstDelay(e);
                        return (a.setAttemptNumber(n), a);
                    };
                }),
                J = C((e) => {
                    var t =
                            (e && e.__awaiter) ||
                            function (e, t, r, n) {
                                return new (r || (r = Promise))(function (a, i) {
                                    function o(e) {
                                        try {
                                            l(n.next(e));
                                        } catch (e) {
                                            i(e);
                                        }
                                    }
                                    function s(e) {
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
                                              ).then(o, s);
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
                                    o = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & a[0]) throw a[1];
                                            return a[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (i = {next: s(0), throw: s(1), return: s(2)}),
                                    'function' == typeof Symbol &&
                                        (i[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    i
                                );
                                function s(i) {
                                    return function (s) {
                                        return (function (i) {
                                            if (r) throw TypeError('Generator is already executing.');
                                            for (; o; )
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
                                                            return (o.label++, {value: i[1], done: !1});
                                                        case 5:
                                                            (o.label++, (n = i[1]), (i = [0]));
                                                            continue;
                                                        case 7:
                                                            ((i = o.ops.pop()), o.trys.pop());
                                                            continue;
                                                        default:
                                                            if (
                                                                !(a = (a = o.trys).length > 0 && a[a.length - 1]) &&
                                                                (6 === i[0] || 2 === i[0])
                                                            ) {
                                                                o = 0;
                                                                continue;
                                                            }
                                                            if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                                                o.label = i[1];
                                                                break;
                                                            }
                                                            if (6 === i[0] && o.label < a[1]) {
                                                                ((o.label = a[1]), (a = i));
                                                                break;
                                                            }
                                                            if (a && o.label < a[2]) {
                                                                ((o.label = a[2]), o.ops.push(i));
                                                                break;
                                                            }
                                                            (a[2] && o.ops.pop(), o.trys.pop());
                                                            continue;
                                                    }
                                                    i = t.call(e, o);
                                                } catch (e) {
                                                    ((i = [6, e]), (n = 0));
                                                } finally {
                                                    r = a = 0;
                                                }
                                            if (5 & i[0]) throw i[1];
                                            return {value: i[0] ? i[1] : void 0, done: !0};
                                        })([i, s]);
                                    };
                                }
                            };
                    Object.defineProperty(e, '__esModule', {value: !0});
                    var n = _(),
                        a = W();
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
                G = C((e, t) => {
                    var r = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0;
                    if (!r) throw Error('Unable to find global scope. Are you sure this is running in the browser?');
                    if (!r.AbortController)
                        throw Error(
                            'Could not find "AbortController" in the global scope. You need to polyfill it first',
                        );
                    ((t.exports = r.AbortController), (t.exports.default = r.AbortController));
                }),
                K = C((e, t) => {
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
                Z = C((e, t) => {
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
                X = C((e, t) => {
                    var r = K(),
                        n = Z();
                    t.exports = {atob: r, btoa: n};
                }),
                ee = C((e, t) => {
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
                                var o = a.startOf;
                                a.startOf = function (r, n) {
                                    var a = this.$utils(),
                                        i = !!a.u(n) || n;
                                    if (a.p(r) === t) {
                                        var s = this.quarter() - 1;
                                        return i
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
                            ? (t.exports = a())
                            : 'function' == typeof define && r.amdO
                              ? define(a)
                              : ((n =
                                    'undefined' != typeof globalThis
                                        ? globalThis
                                        : n || self).dayjs_plugin_quarterOfYear = a()));
                }),
                et = C((e, t) => {
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
                                o = function (e) {
                                    return (e = +e) + (e > 68 ? 1900 : 2e3);
                                },
                                s = function (e) {
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
                                        a,
                                        function (e) {
                                            var t = i.ordinal;
                                            if (((this.day = e.match(/\d+/)[0]), t))
                                                for (var r = 1; r <= 31; r += 1)
                                                    t(r).replace(/\[|\]/g, '') === e && (this.day = r);
                                        },
                                    ],
                                    M: [n, s('month')],
                                    MM: [r, s('month')],
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
                                    Y: [/[+-]?\d+/, s('year')],
                                    YY: [
                                        r,
                                        function (e) {
                                            this.year = o(e);
                                        },
                                    ],
                                    YYYY: [/\d{4}/, s('year')],
                                    Z: l,
                                    ZZ: l,
                                };
                            return function (r, n, a) {
                                ((a.p.customParseFormat = !0), r && r.parseTwoDigitYear && (o = r.parseTwoDigitYear));
                                var s = n.prototype,
                                    l = s.parse;
                                s.parse = function (r) {
                                    var n = r.date,
                                        o = r.utc,
                                        s = r.args;
                                    this.$u = o;
                                    var u = s[1];
                                    if ('string' == typeof u) {
                                        var c = !0 === s[2],
                                            f = !0 === s[3],
                                            p = s[2];
                                        (f && (p = s[2]),
                                            (i = this.$locale()),
                                            !c && p && (i = a.Ls[p]),
                                            (this.$d = (function (r, n, a) {
                                                try {
                                                    if (['x', 'X'].indexOf(n) > -1)
                                                        return new Date(('X' === n ? 1e3 : 1) * r);
                                                    var o = (function (r) {
                                                            var n, a;
                                                            ((n = r), (a = i && i.formats));
                                                            for (
                                                                var o = (r = n.replace(
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
                                                                    s = o.length,
                                                                    l = 0;
                                                                l < s;
                                                                l += 1
                                                            ) {
                                                                var u = o[l],
                                                                    c = d[u],
                                                                    f = c && c[0],
                                                                    p = c && c[1];
                                                                o[l] = p
                                                                    ? {regex: f, parser: p}
                                                                    : u.replace(/^\[|\]$/g, '');
                                                            }
                                                            return function (e) {
                                                                for (var t = {}, r = 0, n = 0; r < s; r += 1) {
                                                                    var a = o[r];
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
                                                        s = o.year,
                                                        l = o.month,
                                                        u = o.day,
                                                        c = o.hours,
                                                        f = o.minutes,
                                                        p = o.seconds,
                                                        h = o.milliseconds,
                                                        g = o.zone,
                                                        v = new Date(),
                                                        m = u || (s || l ? 1 : v.getDate()),
                                                        y = s || v.getFullYear(),
                                                        S = 0;
                                                    (s && !l) || (S = l > 0 ? l - 1 : v.getMonth());
                                                    var b = c || 0,
                                                        w = f || 0,
                                                        I = p || 0,
                                                        C = h || 0;
                                                    return g
                                                        ? new Date(Date.UTC(y, S, m, b, w, I, C + 60 * g.offset * 1e3))
                                                        : a
                                                          ? new Date(Date.UTC(y, S, m, b, w, I, C))
                                                          : new Date(y, S, m, b, w, I, C);
                                                } catch {
                                                    return new Date('');
                                                }
                                            })(n, u, o)),
                                            this.init(),
                                            p && !0 !== p && (this.$L = this.locale(p).$L),
                                            (c || f) && n != this.format(u) && (this.$d = new Date('')),
                                            (i = {}));
                                    } else if (u instanceof Array)
                                        for (var h = u.length, g = 1; g <= h; g += 1) {
                                            s[1] = u[g - 1];
                                            var v = a.apply(this, s);
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
                er = C((e, t) => {
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
                            function o(e) {
                                return !!(e && e.$$typeof);
                            }
                            var s = t
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
                                        void 0 === n && (n = s());
                                        var a = !!e && 'object' == typeof e,
                                            i = !!t && 'object' == typeof t;
                                        if (a || i) {
                                            var o = a && n.has(e),
                                                l = i && n.has(t);
                                            if (o || l) return o && l;
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
                                    s = i.length;
                                if (r(t).length !== s) return !1;
                                if (s)
                                    for (var l = void 0; s-- > 0; ) {
                                        if ('_owner' === (l = i[s])) {
                                            var c = o(e),
                                                d = o(t);
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
                                function r(e, r, o) {
                                    if (e === r) return !0;
                                    if (e && r && 'object' == typeof e && 'object' == typeof r) {
                                        if (a(e) && a(r)) return c(e, r, t, o);
                                        var s = Array.isArray(e),
                                            l = Array.isArray(r);
                                        return s || l
                                            ? s === l &&
                                                  (function (e, t, r, n) {
                                                      var a = e.length;
                                                      if (t.length !== a) return !1;
                                                      for (; a-- > 0; ) if (!r(e[a], t[a], n)) return !1;
                                                      return !0;
                                                  })(e, r, t, o)
                                            : ((s = e instanceof Date),
                                              (l = r instanceof Date),
                                              s || l
                                                  ? s === l && n(e.getTime(), r.getTime())
                                                  : ((s = e instanceof RegExp),
                                                    (l = r instanceof RegExp),
                                                    s || l
                                                        ? s === l &&
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
                                                              ((s = e instanceof Map), (l = r instanceof Map), s || l)
                                                            ? s === l &&
                                                              (function (e, t, r, n) {
                                                                  var a = e.size === t.size;
                                                                  if (a && e.size) {
                                                                      var i = {};
                                                                      e.forEach(function (e, o) {
                                                                          if (a) {
                                                                              var s = !1,
                                                                                  l = 0;
                                                                              (t.forEach(function (t, a) {
                                                                                  (!s &&
                                                                                      !i[l] &&
                                                                                      (s = r(o, a, n) && r(e, t, n)) &&
                                                                                      (i[l] = !0),
                                                                                      l++);
                                                                              }),
                                                                                  (a = s));
                                                                          }
                                                                      });
                                                                  }
                                                                  return a;
                                                              })(e, r, t, o)
                                                            : f &&
                                                                ((s = e instanceof Set), (l = r instanceof Set), s || l)
                                                              ? s === l &&
                                                                (function (e, t, r, n) {
                                                                    var a = e.size === t.size;
                                                                    if (a && e.size) {
                                                                        var i = {};
                                                                        e.forEach(function (e) {
                                                                            if (a) {
                                                                                var o = !1,
                                                                                    s = 0;
                                                                                (t.forEach(function (t) {
                                                                                    (!o &&
                                                                                        !i[s] &&
                                                                                        (o = r(e, t, n)) &&
                                                                                        (i[s] = !0),
                                                                                        s++);
                                                                                }),
                                                                                    (a = o));
                                                                            }
                                                                        });
                                                                    }
                                                                    return a;
                                                                })(e, r, t, o)
                                                              : c(e, r, t, o)));
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
                en = {};
            function ea(e) {
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
            function ei(e) {
                return !!e && !!e[eB];
            }
            function eo(e) {
                var t;
                return (
                    !!e &&
                    ((function (e) {
                        if (!e || 'object' != typeof e) return !1;
                        var t = Object.getPrototypeOf(e);
                        if (null === t) return !0;
                        var r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
                        return r === Object || ('function' == typeof r && Function.toString.call(r) === eH);
                    })(e) ||
                        Array.isArray(e) ||
                        !!e[ez] ||
                        !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[ez]) ||
                        ep(e) ||
                        eh(e))
                );
            }
            function es(e) {
                return (ei(e) || ea(23, e), e[eB].t);
            }
            function el(e, t, r) {
                (void 0 === r && (r = !1),
                    0 === eu(e)
                        ? (r ? Object.keys : eY)(e).forEach(function (n) {
                              (r && 'symbol' == typeof n) || t(n, e[n], e);
                          })
                        : e.forEach(function (r, n) {
                              return t(n, r, e);
                          }));
            }
            function eu(e) {
                var t = e[eB];
                return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : ep(e) ? 2 : eh(e) ? 3 : 0;
            }
            function ec(e, t) {
                return 2 === eu(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
            }
            function ed(e, t, r) {
                var n = eu(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
            }
            function ef(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            }
            function ep(e) {
                return e$ && e instanceof Map;
            }
            function eh(e) {
                return e_ && e instanceof Set;
            }
            function eg(e) {
                return e.o || e.t;
            }
            function ev(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                var t = eW(e);
                delete t[eB];
                for (var r = eY(t), n = 0; n < r.length; n++) {
                    var a = r[n],
                        i = t[a];
                    (!1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
                        (i.get || i.set) &&
                            (t[a] = {configurable: !0, writable: !0, enumerable: i.enumerable, value: e[a]}));
                }
                return Object.create(Object.getPrototypeOf(e), t);
            }
            function em(e, t) {
                return (
                    void 0 === t && (t = !1),
                    eS(e) ||
                        ei(e) ||
                        !eo(e) ||
                        (eu(e) > 1 && (e.set = e.add = e.clear = e.delete = ey),
                        Object.freeze(e),
                        t &&
                            el(
                                e,
                                function (e, t) {
                                    return em(t, !0);
                                },
                                !0,
                            )),
                    e
                );
            }
            function ey() {
                ea(2);
            }
            function eS(e) {
                return null == e || 'object' != typeof e || Object.isFrozen(e);
            }
            function eb(e) {
                var t = eJ[e];
                return (t || ea(18, e), t);
            }
            function ew(e, t) {
                t && (eb('Patches'), (e.u = []), (e.s = []), (e.v = t));
            }
            function eI(e) {
                (eC(e), e.p.forEach(eO), (e.p = null));
            }
            function eC(e) {
                e === eU && (eU = e.l);
            }
            function ek(e) {
                return (eU = {p: [], l: eU, h: e, m: !0, _: 0});
            }
            function eO(e) {
                var t = e[eB];
                0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
            }
            function eq(e, t) {
                t._ = t.p.length;
                var r = t.p[0],
                    n = void 0 !== e && e !== r;
                return (
                    t.h.O || eb('ES5').S(t, e, n),
                    n
                        ? (r[eB].P && (eI(t), ea(4)),
                          eo(e) && ((e = ex(t, e)), t.l || eA(t, e)),
                          t.u && eb('Patches').M(r[eB].t, e, t.u, t.s))
                        : (e = ex(t, r, [])),
                    eI(t),
                    t.u && t.v(t.u, t.s),
                    e !== eN ? e : void 0
                );
            }
            function ex(e, t, r) {
                if (eS(t)) return t;
                var n = t[eB];
                if (!n)
                    return (
                        el(
                            t,
                            function (a, i) {
                                return eR(e, n, t, a, i, r);
                            },
                            !0,
                        ),
                        t
                    );
                if (n.A !== e) return t;
                if (!n.P) return (eA(e, n.t, !0), n.t);
                if (!n.I) {
                    ((n.I = !0), n.A._--);
                    var a = 4 === n.i || 5 === n.i ? (n.o = ev(n.k)) : n.o,
                        i = a,
                        o = !1;
                    (3 === n.i && ((i = new Set(a)), a.clear(), (o = !0)),
                        el(i, function (t, i) {
                            return eR(e, n, a, t, i, r, o);
                        }),
                        eA(e, a, !1),
                        r && e.u && eb('Patches').N(n, r, e.u, e.s));
                }
                return n.o;
            }
            function eR(e, t, r, n, a, i, o) {
                if (ei(a)) {
                    var s = ex(e, a, i && t && 3 !== t.i && !ec(t.R, n) ? i.concat(n) : void 0);
                    if ((ed(r, n, s), !ei(s))) return;
                    e.m = !1;
                } else o && r.add(a);
                if (eo(a) && !eS(a)) {
                    if (!e.h.D && e._ < 1) return;
                    (ex(e, a), (t && t.A.l) || eA(e, a));
                }
            }
            function eA(e, t, r) {
                (void 0 === r && (r = !1), !e.l && e.h.D && e.m && em(t, r));
            }
            function eE(e, t) {
                var r = e[eB];
                return (r ? eg(r) : e)[t];
            }
            function eF(e, t) {
                if (t in e)
                    for (var r = Object.getPrototypeOf(e); r; ) {
                        var n = Object.getOwnPropertyDescriptor(r, t);
                        if (n) return n;
                        r = Object.getPrototypeOf(r);
                    }
            }
            function eD(e) {
                e.P || ((e.P = !0), e.l && eD(e.l));
            }
            function ej(e) {
                e.o || (e.o = ev(e.t));
            }
            function eP(e, t, r) {
                var n,
                    a,
                    i,
                    o,
                    s,
                    l,
                    u,
                    c = ep(t)
                        ? eb('MapSet').F(t, r)
                        : eh(t)
                          ? eb('MapSet').T(t, r)
                          : e.O
                            ? ((i = a =
                                  {
                                      i: (n = Array.isArray(t)) ? 1 : 0,
                                      A: r ? r.A : eU,
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
                              (o = eG),
                              n && ((i = [a]), (o = eK)),
                              (l = (s = Proxy.revocable(i, o)).revoke),
                              (u = s.proxy),
                              (a.k = u),
                              (a.j = l),
                              u)
                            : eb('ES5').J(t, r);
                return ((r ? r.A : eU).p.push(c), c);
            }
            function eT(e) {
                return (
                    ei(e) || ea(22, e),
                    (function e(t) {
                        if (!eo(t)) return t;
                        var r,
                            n = t[eB],
                            a = eu(t);
                        if (n) {
                            if (!n.P && (n.i < 4 || !eb('ES5').K(n))) return n.t;
                            ((n.I = !0), (r = eV(t, a)), (n.I = !1));
                        } else r = eV(t, a);
                        return (
                            el(r, function (t, a) {
                                var i;
                                (n && (2 === eu((i = n.t)) ? i.get(t) : i[t]) === a) || ed(r, t, e(a));
                            }),
                            3 === a ? new Set(r) : r
                        );
                    })(e)
                );
            }
            function eV(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e);
                }
                return ev(e);
            }
            k(en, {
                MiddlewareArray: () => th,
                TaskAbortError: () => t3,
                addListener: () => ri,
                clearAllListeners: () => ro,
                configureStore: () => tw,
                createAction: () => tI,
                createAsyncThunk: () => tU,
                createDraftSafeSelector: () => td,
                createEntityAdapter: () => tD,
                createImmutableStateInvariantMiddleware: () => tm,
                createListenerMiddleware: () => rc,
                createNextState: () => e0,
                createReducer: () => tq,
                createSelector: () => e5,
                createSerializableStateInvariantMiddleware: () => tS,
                createSlice: () => tx,
                current: () => eT,
                findNonSerializableValue: () =>
                    function e(t, r, n, a, i) {
                        if ((void 0 === r && (r = ''), void 0 === n && (n = ty), void 0 === i && (i = []), !n(t)))
                            return {keyPath: r || '<root>', value: t};
                        if ('object' != typeof t || null === t) return !1;
                        for (
                            var o, s = null != a ? a(t) : Object.entries(t), l = i.length > 0, u = 0;
                            u < s.length;
                            u++
                        ) {
                            var c = s[u],
                                d = c[0],
                                f = c[1],
                                p = r ? r + '.' + d : d;
                            if (!(l && i.indexOf(p) >= 0)) {
                                if (!n(f)) return {keyPath: p, value: f};
                                if ('object' == typeof f && (o = e(f, p, n, a, i))) return o;
                            }
                        }
                        return !1;
                    },
                freeze: () => em,
                getDefaultMiddleware: () => tb,
                getType: () => tk,
                isAllOf: () => tQ,
                isAnyOf: () => t_,
                isAsyncThunkAction: () =>
                    function e() {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        return 0 === t.length
                            ? function (e) {
                                  return tN(e, ['pending', 'fulfilled', 'rejected']);
                              }
                            : tz(t)
                              ? function (e) {
                                    for (var r = [], n = 0; n < t.length; n++) {
                                        var a = t[n];
                                        r.push(a.pending, a.rejected, a.fulfilled);
                                    }
                                    return t_.apply(void 0, r)(e);
                                }
                              : e()(t[0]);
                    },
                isDraft: () => ei,
                isFulfilled: () =>
                    function e() {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        return 0 === t.length
                            ? function (e) {
                                  return tN(e, ['fulfilled']);
                              }
                            : tz(t)
                              ? function (e) {
                                    var r = t.map(function (e) {
                                        return e.fulfilled;
                                    });
                                    return t_.apply(void 0, r)(e);
                                }
                              : e()(t[0]);
                    },
                isImmutableDefault: () => tv,
                isPending: () =>
                    function e() {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        return 0 === t.length
                            ? function (e) {
                                  return tN(e, ['pending']);
                              }
                            : tz(t)
                              ? function (e) {
                                    var r = t.map(function (e) {
                                        return e.pending;
                                    });
                                    return t_.apply(void 0, r)(e);
                                }
                              : e()(t[0]);
                    },
                isPlain: () => ty,
                isPlainObject: () => tp,
                isRejected: () => tB,
                isRejectedWithValue: () =>
                    function e() {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        var n = function (e) {
                            return e && e.meta && e.meta.rejectedWithValue;
                        };
                        return 0 === t.length
                            ? function (e) {
                                  return tQ(tB.apply(void 0, t), n)(e);
                              }
                            : tz(t)
                              ? function (e) {
                                    return tQ(tB.apply(void 0, t), n)(e);
                                }
                              : e()(t[0]);
                    },
                miniSerializeError: () => tM,
                nanoid: () => tj,
                original: () => es,
                removeListener: () => rs,
                unwrapResult: () => tL,
            });
            var eM,
                eU,
                eL = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
                e$ = 'undefined' != typeof Map,
                e_ = 'undefined' != typeof Set,
                eQ = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
                eN = eL ? Symbol.for('immer-nothing') : (((eM = {})['immer-nothing'] = !0), eM),
                ez = eL ? Symbol.for('immer-draftable') : '__$immer_draftable',
                eB = eL ? Symbol.for('immer-state') : '__$immer_state',
                eH = '' + Object.prototype.constructor,
                eY =
                    'undefined' != typeof Reflect && Reflect.ownKeys
                        ? Reflect.ownKeys
                        : void 0 !== Object.getOwnPropertySymbols
                          ? function (e) {
                                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                            }
                          : Object.getOwnPropertyNames,
                eW =
                    Object.getOwnPropertyDescriptors ||
                    function (e) {
                        var t = {};
                        return (
                            eY(e).forEach(function (r) {
                                t[r] = Object.getOwnPropertyDescriptor(e, r);
                            }),
                            t
                        );
                    },
                eJ = {},
                eG = {
                    get: function (e, t) {
                        if (t === eB) return e;
                        var r,
                            n,
                            a = eg(e);
                        if (!ec(a, t))
                            return (n = eF(a, t))
                                ? 'value' in n
                                    ? n.value
                                    : null === (r = n.get) || void 0 === r
                                      ? void 0
                                      : r.call(e.k)
                                : void 0;
                        var i = a[t];
                        return e.I || !eo(i) ? i : i === eE(e.t, t) ? (ej(e), (e.o[t] = eP(e.A.h, i, e))) : i;
                    },
                    has: function (e, t) {
                        return t in eg(e);
                    },
                    ownKeys: function (e) {
                        return Reflect.ownKeys(eg(e));
                    },
                    set: function (e, t, r) {
                        var n = eF(eg(e), t);
                        if (null == n ? void 0 : n.set) return (n.set.call(e.k, r), !0);
                        if (!e.P) {
                            var a = eE(eg(e), t),
                                i = null == a ? void 0 : a[eB];
                            if (i && i.t === r) return ((e.o[t] = r), (e.R[t] = !1), !0);
                            if (ef(r, a) && (void 0 !== r || ec(e.t, t))) return !0;
                            (ej(e), eD(e));
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
                            void 0 !== eE(e.t, t) || t in e.t ? ((e.R[t] = !1), ej(e), eD(e)) : delete e.R[t],
                            e.o && delete e.o[t],
                            !0
                        );
                    },
                    getOwnPropertyDescriptor: function (e, t) {
                        var r = eg(e),
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
                        ea(11);
                    },
                    getPrototypeOf: function (e) {
                        return Object.getPrototypeOf(e.t);
                    },
                    setPrototypeOf: function () {
                        ea(12);
                    },
                },
                eK = {};
            (el(eG, function (e, t) {
                eK[e] = function () {
                    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
                };
            }),
                (eK.deleteProperty = function (e, t) {
                    return eK.set.call(this, e, t, void 0);
                }),
                (eK.set = function (e, t, r) {
                    return eG.set.call(this, e[0], t, r, e[0]);
                }));
            var eZ = new ((function () {
                    function e(e) {
                        var t = this;
                        ((this.O = eQ),
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
                                                var a = arguments.length, o = Array(a > 1 ? a - 1 : 0), s = 1;
                                                s < a;
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
                                    ('function' != typeof r && ea(6),
                                    void 0 !== n && 'function' != typeof n && ea(7),
                                    eo(e))
                                ) {
                                    var o = ek(t),
                                        s = eP(t, e, void 0),
                                        l = !0;
                                    try {
                                        ((a = r(s)), (l = !1));
                                    } finally {
                                        l ? eI(o) : eC(o);
                                    }
                                    return 'undefined' != typeof Promise && a instanceof Promise
                                        ? a.then(
                                              function (e) {
                                                  return (ew(o, n), eq(e, o));
                                              },
                                              function (e) {
                                                  throw (eI(o), e);
                                              },
                                          )
                                        : (ew(o, n), eq(a, o));
                                }
                                if (!e || 'object' != typeof e) {
                                    if (
                                        (void 0 === (a = r(e)) && (a = e),
                                        a === eN && (a = void 0),
                                        t.D && em(a, !0),
                                        n)
                                    ) {
                                        var u = [],
                                            c = [];
                                        (eb('Patches').M(e, a, u, c), n(u, c));
                                    }
                                    return a;
                                }
                                ea(21, e);
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
                            (eo(e) || ea(8), ei(e) && (e = eT(e)));
                            var t = ek(this),
                                r = eP(this, e, void 0);
                            return ((r[eB].C = !0), eC(t), r);
                        }),
                        (t.finishDraft = function (e, t) {
                            var r = (e && e[eB]).A;
                            return (ew(r, t), eq(void 0, r));
                        }),
                        (t.setAutoFreeze = function (e) {
                            this.D = e;
                        }),
                        (t.setUseProxies = function (e) {
                            (e && !eQ && ea(20), (this.O = e));
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
                            var a = eb('Patches').$;
                            return ei(e)
                                ? a(e, t)
                                : this.produce(e, function (e) {
                                      return a(e, t);
                                  });
                        }),
                        e
                    );
                })())(),
                eX = eZ.produce;
            (eZ.produceWithPatches.bind(eZ),
                eZ.setAutoFreeze.bind(eZ),
                eZ.setUseProxies.bind(eZ),
                eZ.applyPatches.bind(eZ),
                eZ.createDraft.bind(eZ),
                eZ.finishDraft.bind(eZ));
            var e0 = eX;
            O(en, q(D()));
            var e1 = 'NOT_FOUND',
                e2 = function (e, t) {
                    return e === t;
                },
                e5 = (function (e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                        r[n - 1] = arguments[n];
                    return function () {
                        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                        var i,
                            o = 0,
                            s = {memoizeOptions: void 0},
                            l = n.pop();
                        if (('object' == typeof l && ((s = l), (l = n.pop())), 'function' != typeof l))
                            throw Error(
                                'createSelector expects an output function after the inputs, but received: [' +
                                    typeof l +
                                    ']',
                            );
                        var u = s.memoizeOptions,
                            c = void 0 === u ? r : u,
                            d = Array.isArray(c) ? c : [c],
                            f = (function (e) {
                                var t = Array.isArray(e[0]) ? e[0] : e;
                                if (
                                    !t.every(function (e) {
                                        return 'function' == typeof e;
                                    })
                                )
                                    throw Error(
                                        'createSelector expects all input-selectors to be functions, but received the following types: [' +
                                            t
                                                .map(function (e) {
                                                    return 'function' == typeof e
                                                        ? 'function ' + (e.name || 'unnamed') + '()'
                                                        : typeof e;
                                                })
                                                .join(', ') +
                                            ']',
                                    );
                                return t;
                            })(n),
                            p = e.apply(
                                void 0,
                                [
                                    function () {
                                        return (o++, l.apply(null, arguments));
                                    },
                                ].concat(d),
                            ),
                            h = e(function () {
                                for (var e = [], t = f.length, r = 0; r < t; r++) e.push(f[r].apply(null, arguments));
                                return (i = p.apply(null, e));
                            });
                        return (
                            Object.assign(h, {
                                resultFunc: l,
                                memoizedResultFunc: p,
                                dependencies: f,
                                lastResult: function () {
                                    return i;
                                },
                                recomputations: function () {
                                    return o;
                                },
                                resetRecomputations: function () {
                                    return (o = 0);
                                },
                            }),
                            h
                        );
                    };
                })(function (e, t) {
                    var r,
                        n,
                        a = 'object' == typeof t ? t : {equalityCheck: t},
                        i = a.equalityCheck,
                        o = a.maxSize,
                        s = void 0 === o ? 1 : o,
                        l = a.resultEqualityCheck,
                        u =
                            ((r = void 0 === i ? e2 : i),
                            function (e, t) {
                                if (null === e || null === t || e.length !== t.length) return !1;
                                for (var n = e.length, a = 0; a < n; a++) if (!r(e[a], t[a])) return !1;
                                return !0;
                            }),
                        c =
                            1 === s
                                ? {
                                      get: function (e) {
                                          return n && u(n.key, e) ? n.value : e1;
                                      },
                                      put: function (e, t) {
                                          n = {key: e, value: t};
                                      },
                                      getEntries: function () {
                                          return n ? [n] : [];
                                      },
                                      clear: function () {
                                          n = void 0;
                                      },
                                  }
                                : (function (e, t) {
                                      var r = [];
                                      function n(e) {
                                          var n = r.findIndex(function (r) {
                                              return t(e, r.key);
                                          });
                                          if (n > -1) {
                                              var a = r[n];
                                              return (n > 0 && (r.splice(n, 1), r.unshift(a)), a.value);
                                          }
                                          return e1;
                                      }
                                      return {
                                          get: n,
                                          put: function (t, a) {
                                              n(t) === e1 && (r.unshift({key: t, value: a}), r.length > e && r.pop());
                                          },
                                          getEntries: function () {
                                              return r;
                                          },
                                          clear: function () {
                                              r = [];
                                          },
                                      };
                                  })(s, u);
                    function d() {
                        var t = c.get(arguments);
                        if (t === e1) {
                            if (((t = e.apply(null, arguments)), l)) {
                                var r = c.getEntries().find(function (e) {
                                    return l(e.value, t);
                                });
                                r && (t = r.value);
                            }
                            c.put(arguments, t);
                        }
                        return t;
                    }
                    return (
                        (d.clearCache = function () {
                            return c.clear();
                        }),
                        d
                    );
                }),
                e3 = q(D()),
                e4 = q(D());
            function e6(e) {
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
            var e8 = e6();
            e8.withExtraArgument = e6;
            var e9 =
                    ((aO = function (e, t) {
                        return (aO =
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
                        (aO(e, t),
                            (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
                    }),
                e7 = function (e, t) {
                    var r,
                        n,
                        a,
                        i,
                        o = {
                            label: 0,
                            sent: function () {
                                if (1 & a[0]) throw a[1];
                                return a[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (i = {next: s(0), throw: s(1), return: s(2)}),
                        'function' == typeof Symbol &&
                            (i[Symbol.iterator] = function () {
                                return this;
                            }),
                        i
                    );
                    function s(i) {
                        return function (s) {
                            return (function (i) {
                                if (r) throw TypeError('Generator is already executing.');
                                for (; o; )
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
                                                return (o.label++, {value: i[1], done: !1});
                                            case 5:
                                                (o.label++, (n = i[1]), (i = [0]));
                                                continue;
                                            case 7:
                                                ((i = o.ops.pop()), o.trys.pop());
                                                continue;
                                            default:
                                                if (
                                                    !(a = (a = o.trys).length > 0 && a[a.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    o = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                                    o.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && o.label < a[1]) {
                                                    ((o.label = a[1]), (a = i));
                                                    break;
                                                }
                                                if (a && o.label < a[2]) {
                                                    ((o.label = a[2]), o.ops.push(i));
                                                    break;
                                                }
                                                (a[2] && o.ops.pop(), o.trys.pop());
                                                continue;
                                        }
                                        i = t.call(e, o);
                                    } catch (e) {
                                        ((i = [6, e]), (n = 0));
                                    } finally {
                                        r = a = 0;
                                    }
                                if (5 & i[0]) throw i[1];
                                return {value: i[0] ? i[1] : void 0, done: !0};
                            })([i, s]);
                        };
                    }
                },
                te = function (e, t) {
                    for (var r = 0, n = t.length, a = e.length; r < n; r++, a++) e[a] = t[r];
                    return e;
                },
                tt = Object.defineProperty,
                tr = Object.defineProperties,
                tn = Object.getOwnPropertyDescriptors,
                ta = Object.getOwnPropertySymbols,
                ti = Object.prototype.hasOwnProperty,
                to = Object.prototype.propertyIsEnumerable,
                ts = function (e, t, r) {
                    return t in e ? tt(e, t, {enumerable: !0, configurable: !0, writable: !0, value: r}) : (e[t] = r);
                },
                tl = function (e, t) {
                    for (var r in t || (t = {})) ti.call(t, r) && ts(e, r, t[r]);
                    if (ta)
                        for (var n = 0, a = ta(t); n < a.length; n++) {
                            var r = a[n];
                            to.call(t, r) && ts(e, r, t[r]);
                        }
                    return e;
                },
                tu = function (e, t) {
                    return tr(e, tn(t));
                },
                tc = function (e, t, r) {
                    return new Promise(function (n, a) {
                        var i = function (e) {
                                try {
                                    s(r.next(e));
                                } catch (e) {
                                    a(e);
                                }
                            },
                            o = function (e) {
                                try {
                                    s(r.throw(e));
                                } catch (e) {
                                    a(e);
                                }
                            },
                            s = function (e) {
                                return e.done ? n(e.value) : Promise.resolve(e.value).then(i, o);
                            };
                        s((r = r.apply(e, t)).next());
                    });
                },
                td = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var r = e5.apply(void 0, e);
                    return function (e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        return r.apply(void 0, te([ei(e) ? eT(e) : e], t));
                    };
                },
                tf =
                    'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                        : function () {
                              if (0 != arguments.length)
                                  return 'object' == typeof arguments[0]
                                      ? e4.compose
                                      : e4.compose.apply(null, arguments);
                          };
            function tp(e) {
                if ('object' != typeof e || null === e) return !1;
                var t = Object.getPrototypeOf(e);
                if (null === t) return !0;
                for (var r = t; null !== Object.getPrototypeOf(r); ) r = Object.getPrototypeOf(r);
                return t === r;
            }
            var th = (function (e) {
                function t() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    var a = e.apply(this, r) || this;
                    return (Object.setPrototypeOf(a, t.prototype), a);
                }
                return (
                    e9(t, e),
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
                            ? new (t.bind.apply(t, te([void 0], e[0].concat(this))))()
                            : new (t.bind.apply(t, te([void 0], e.concat(this))))();
                    }),
                    t
                );
            })(Array);
            function tg(e) {
                return eo(e) ? e0(e, function () {}) : e;
            }
            function tv(e) {
                return 'object' != typeof e || null == e || Object.isFrozen(e);
            }
            function tm(e) {
                return function () {
                    return function (e) {
                        return function (t) {
                            return e(t);
                        };
                    };
                };
            }
            function ty(e) {
                var t = typeof e;
                return null == e || 'string' === t || 'boolean' === t || 'number' === t || Array.isArray(e) || tp(e);
            }
            function tS(e) {
                return function () {
                    return function (e) {
                        return function (t) {
                            return e(t);
                        };
                    };
                };
            }
            function tb(e) {
                void 0 === e && (e = {});
                var t = e.thunk,
                    r = void 0 === t || t,
                    n = new th();
                return (r && ('boolean' == typeof r ? n.push(e8) : n.push(e8.withExtraArgument(r.extraArgument))), n);
            }
            function tw(e) {
                var t,
                    r = function (e) {
                        return tb(e);
                    },
                    n = e || {},
                    a = n.reducer,
                    i = void 0 === a ? void 0 : a,
                    o = n.middleware,
                    s = void 0 === o ? r() : o,
                    l = n.devTools,
                    u = void 0 === l || l,
                    c = n.preloadedState,
                    d = void 0 === c ? void 0 : c,
                    f = n.enhancers,
                    p = void 0 === f ? void 0 : f;
                if ('function' == typeof i) t = i;
                else if (tp(i)) t = (0, e3.combineReducers)(i);
                else
                    throw Error(
                        '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
                    );
                var h = s;
                'function' == typeof h && (h = h(r));
                var g = e3.applyMiddleware.apply(void 0, h),
                    v = e3.compose;
                u && (v = tf(tl({trace: !1}, 'object' == typeof u && u)));
                var m = [g];
                Array.isArray(p) ? (m = te([g], p)) : 'function' == typeof p && (m = p(m));
                var y = v.apply(void 0, m);
                return (0, e3.createStore)(t, d, y);
            }
            function tI(e, t) {
                function r() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    if (t) {
                        var a = t.apply(void 0, r);
                        if (!a) throw Error('prepareAction did not return an object');
                        return tl(
                            tl({type: e, payload: a.payload}, 'meta' in a && {meta: a.meta}),
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
            function tC(e) {
                return ['type', 'payload', 'error', 'meta'].indexOf(e) > -1;
            }
            function tk(e) {
                return '' + e;
            }
            function tO(e) {
                var t,
                    r = {},
                    n = [],
                    a = {
                        addCase: function (e, t) {
                            var n = 'string' == typeof e ? e : e.type;
                            if (n in r)
                                throw Error('addCase cannot be called with two reducers for the same action type');
                            return ((r[n] = t), a);
                        },
                        addMatcher: function (e, t) {
                            return (n.push({matcher: e, reducer: t}), a);
                        },
                        addDefaultCase: function (e) {
                            return ((t = e), a);
                        },
                    };
                return (e(a), [r, n, t]);
            }
            function tq(e, t, r, n) {
                void 0 === r && (r = []);
                var a,
                    i = 'function' == typeof t ? tO(t) : [t, r, n],
                    o = i[0],
                    s = i[1],
                    l = i[2];
                if ('function' == typeof e)
                    a = function () {
                        return tg(e());
                    };
                else {
                    var u = tg(e);
                    a = function () {
                        return u;
                    };
                }
                function c(e, t) {
                    void 0 === e && (e = a());
                    var r = te(
                        [o[t.type]],
                        s
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
                            }).length && (r = [l]),
                        r.reduce(function (e, r) {
                            if (r) {
                                if (ei(e)) {
                                    var n = r(e, t);
                                    return void 0 === n ? e : n;
                                }
                                if (eo(e))
                                    return e0(e, function (e) {
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
                return ((c.getInitialState = a), c);
            }
            function tx(e) {
                var t,
                    r = e.name;
                if (!r) throw Error('`name` is a required option for createSlice');
                var n = 'function' == typeof e.initialState ? e.initialState : tg(e.initialState),
                    a = e.reducers || {},
                    i = Object.keys(a),
                    o = {},
                    s = {},
                    l = {};
                function u() {
                    var t = 'function' == typeof e.extraReducers ? tO(e.extraReducers) : [e.extraReducers],
                        r = t[0],
                        a = t[1],
                        i = void 0 === a ? [] : a,
                        o = t[2],
                        l = void 0 === o ? void 0 : o;
                    return tq(n, tl(tl({}, void 0 === r ? {} : r), s), i, l);
                }
                return (
                    i.forEach(function (e) {
                        var t,
                            n,
                            i = a[e],
                            u = r + '/' + e;
                        ('reducer' in i ? ((t = i.reducer), (n = i.prepare)) : (t = i),
                            (o[e] = t),
                            (s[u] = t),
                            (l[e] = n ? tI(u, n) : tI(u)));
                    }),
                    {
                        name: r,
                        reducer: function (e, r) {
                            return (t || (t = u()), t(e, r));
                        },
                        actions: l,
                        caseReducers: o,
                        getInitialState: function () {
                            return (t || (t = u()), t.getInitialState());
                        },
                    }
                );
            }
            function tR(e) {
                return function (t, r) {
                    var n = function (t) {
                        tp(r) && 'string' == typeof r.type && Object.keys(r).every(tC) ? e(r.payload, t) : e(r, t);
                    };
                    return ei(t) ? (n(t), t) : e0(t, n);
                };
            }
            function tA(e) {
                return (Array.isArray(e) || (e = Object.values(e)), e);
            }
            function tE(e, t, r) {
                e = tA(e);
                for (var n = [], a = [], i = 0, o = e; i < o.length; i++) {
                    var s = o[i],
                        l = t(s);
                    l in r.entities ? a.push({id: l, changes: s}) : n.push(s);
                }
                return [n, a];
            }
            function tF(e) {
                var t, r;
                function n(t, r) {
                    var n = e(t);
                    n in r.entities || (r.ids.push(n), (r.entities[n] = t));
                }
                function a(e, t) {
                    e = tA(e);
                    for (var r = 0, a = e; r < a.length; r++) n(a[r], t);
                }
                function i(t, r) {
                    var n = e(t);
                    (n in r.entities || r.ids.push(n), (r.entities[n] = t));
                }
                function o(e, t) {
                    var r = !1;
                    (e.forEach(function (e) {
                        e in t.entities && (delete t.entities[e], (r = !0));
                    }),
                        r &&
                            (t.ids = t.ids.filter(function (e) {
                                return e in t.entities;
                            })));
                }
                function s(t, r) {
                    var n = {},
                        a = {};
                    (t.forEach(function (e) {
                        e.id in r.entities &&
                            (a[e.id] = {id: e.id, changes: tl(tl({}, a[e.id] ? a[e.id].changes : null), e.changes)});
                    }),
                        (t = Object.values(a)).length > 0 &&
                            t.filter(function (t) {
                                var a, i, o;
                                return (
                                    (o = (i = e((a = Object.assign({}, r.entities[t.id], t.changes)))) !== t.id) &&
                                        ((n[t.id] = i), delete r.entities[t.id]),
                                    (r.entities[i] = a),
                                    o
                                );
                            }).length > 0 &&
                            (r.ids = Object.keys(r.entities)));
                }
                function l(t, r) {
                    var n = tE(t, e, r),
                        i = n[0];
                    (s(n[1], r), a(i, r));
                }
                return {
                    removeAll:
                        ((t = function (e) {
                            Object.assign(e, {ids: [], entities: {}});
                        }),
                        (r = tR(function (e, r) {
                            return t(r);
                        })),
                        function (e) {
                            return r(e, void 0);
                        }),
                    addOne: tR(n),
                    addMany: tR(a),
                    setOne: tR(i),
                    setMany: tR(function (e, t) {
                        e = tA(e);
                        for (var r = 0, n = e; r < n.length; r++) i(n[r], t);
                    }),
                    setAll: tR(function (e, t) {
                        ((e = tA(e)), (t.ids = []), (t.entities = {}), a(e, t));
                    }),
                    updateOne: tR(function (e, t) {
                        return s([e], t);
                    }),
                    updateMany: tR(s),
                    upsertOne: tR(function (e, t) {
                        return l([e], t);
                    }),
                    upsertMany: tR(l),
                    removeOne: tR(function (e, t) {
                        return o([e], t);
                    }),
                    removeMany: tR(o),
                };
            }
            function tD(e) {
                void 0 === e && (e = {});
                var t = tl(
                        {
                            sortComparer: !1,
                            selectId: function (e) {
                                return e.id;
                            },
                        },
                        e,
                    ),
                    r = t.selectId,
                    n = t.sortComparer,
                    a = n
                        ? (function (e, t) {
                              var r = tF(e);
                              function n(t, r) {
                                  var n = (t = tA(t)).filter(function (t) {
                                      return !(e(t) in r.entities);
                                  });
                                  0 !== n.length && s(n, r);
                              }
                              function a(e, t) {
                                  0 !== (e = tA(e)).length && s(e, t);
                              }
                              function i(t, r) {
                                  for (var n = !1, a = 0; a < t.length; a++) {
                                      var i = t[a],
                                          o = r.entities[i.id];
                                      if (o) {
                                          ((n = !0), Object.assign(o, i.changes));
                                          var s = e(o);
                                          i.id !== s && (delete r.entities[i.id], (r.entities[s] = o));
                                      }
                                  }
                                  n && l(r);
                              }
                              function o(t, r) {
                                  var a = tE(t, e, r),
                                      o = a[0];
                                  (i(a[1], r), n(o, r));
                              }
                              function s(t, r) {
                                  (t.forEach(function (t) {
                                      r.entities[e(t)] = t;
                                  }),
                                      l(r));
                              }
                              function l(r) {
                                  var n = Object.values(r.entities);
                                  n.sort(t);
                                  var a = n.map(e);
                                  (function (e, t) {
                                      if (e.length !== t.length) return !1;
                                      for (var r = 0; r < e.length && r < t.length; r++) if (e[r] !== t[r]) return !1;
                                      return !0;
                                  })(r.ids, a) || (r.ids = a);
                              }
                              return {
                                  removeOne: r.removeOne,
                                  removeMany: r.removeMany,
                                  removeAll: r.removeAll,
                                  addOne: tR(function (e, t) {
                                      return n([e], t);
                                  }),
                                  updateOne: tR(function (e, t) {
                                      return i([e], t);
                                  }),
                                  upsertOne: tR(function (e, t) {
                                      return o([e], t);
                                  }),
                                  setOne: tR(function (e, t) {
                                      return a([e], t);
                                  }),
                                  setMany: tR(a),
                                  setAll: tR(function (e, t) {
                                      ((e = tA(e)), (t.entities = {}), (t.ids = []), n(e, t));
                                  }),
                                  addMany: tR(n),
                                  updateMany: tR(i),
                                  upsertMany: tR(o),
                              };
                          })(r, n)
                        : tF(r);
                return tl(
                    tl(
                        tl(
                            {selectId: r, sortComparer: n},
                            {
                                getInitialState: function (e) {
                                    return (void 0 === e && (e = {}), Object.assign({ids: [], entities: {}}, e));
                                },
                            },
                        ),
                        {
                            getSelectors: function (e) {
                                var t = function (e) {
                                        return e.ids;
                                    },
                                    r = function (e) {
                                        return e.entities;
                                    },
                                    n = td(t, r, function (e, t) {
                                        return e.map(function (e) {
                                            return t[e];
                                        });
                                    }),
                                    a = function (e, t) {
                                        return t;
                                    },
                                    i = function (e, t) {
                                        return e[t];
                                    },
                                    o = td(t, function (e) {
                                        return e.length;
                                    });
                                if (!e)
                                    return {
                                        selectIds: t,
                                        selectEntities: r,
                                        selectAll: n,
                                        selectTotal: o,
                                        selectById: td(r, a, i),
                                    };
                                var s = td(e, r);
                                return {
                                    selectIds: td(e, t),
                                    selectEntities: s,
                                    selectAll: td(e, n),
                                    selectTotal: td(e, o),
                                    selectById: td(s, a, i),
                                };
                            },
                        },
                    ),
                    a,
                );
            }
            var tj = function (e) {
                    void 0 === e && (e = 21);
                    for (var t = '', r = e; r--; )
                        t += 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[
                            (64 * Math.random()) | 0
                        ];
                    return t;
                },
                tP = ['name', 'message', 'stack', 'code'],
                tT = function (e, t) {
                    ((this.payload = e), (this.meta = t));
                },
                tV = function (e, t) {
                    ((this.payload = e), (this.meta = t));
                },
                tM = function (e) {
                    if ('object' == typeof e && null !== e) {
                        for (var t = {}, r = 0; r < tP.length; r++) {
                            var n = tP[r];
                            'string' == typeof e[n] && (t[n] = e[n]);
                        }
                        return t;
                    }
                    return {message: String(e)};
                };
            function tU(e, t, r) {
                var n = tI(e + '/fulfilled', function (e, t, r, n) {
                        return {
                            payload: e,
                            meta: tu(tl({}, n || {}), {arg: r, requestId: t, requestStatus: 'fulfilled'}),
                        };
                    }),
                    a = tI(e + '/pending', function (e, t, r) {
                        return {
                            payload: void 0,
                            meta: tu(tl({}, r || {}), {arg: t, requestId: e, requestStatus: 'pending'}),
                        };
                    }),
                    i = tI(e + '/rejected', function (e, t, n, a, i) {
                        return {
                            payload: a,
                            error: ((r && r.serializeError) || tM)(e || 'Rejected'),
                            meta: tu(tl({}, i || {}), {
                                arg: n,
                                requestId: t,
                                rejectedWithValue: !!a,
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
                        return function (s, l, u) {
                            var c,
                                d = (null == r ? void 0 : r.idGenerator) ? r.idGenerator(e) : tj(),
                                f = new o(),
                                p = new Promise(function (e, t) {
                                    return f.signal.addEventListener('abort', function () {
                                        return t({name: 'AbortError', message: c || 'Aborted'});
                                    });
                                }),
                                h = !1,
                                g = (function () {
                                    return tc(this, null, function () {
                                        var o, c, g, v, m;
                                        return e7(this, function (y) {
                                            switch (y.label) {
                                                case 0:
                                                    var S;
                                                    return (
                                                        y.trys.push([0, 4, , 5]),
                                                        null !==
                                                            (S = v =
                                                                null == (o = null == r ? void 0 : r.condition)
                                                                    ? void 0
                                                                    : o.call(r, e, {getState: l, extra: u})) &&
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
                                                        s(
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
                                                                        dispatch: s,
                                                                        getState: l,
                                                                        extra: u,
                                                                        requestId: d,
                                                                        signal: f.signal,
                                                                        rejectWithValue: function (e, t) {
                                                                            return new tT(e, t);
                                                                        },
                                                                        fulfillWithValue: function (e, t) {
                                                                            return new tV(e, t);
                                                                        },
                                                                    }),
                                                                ).then(function (t) {
                                                                    if (t instanceof tT) throw t;
                                                                    return t instanceof tV
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
                                                            (m = y.sent()) instanceof tT
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
                                                            s(g),
                                                        [2, g]
                                                    );
                                            }
                                        });
                                    });
                                })();
                            return Object.assign(g, {
                                abort: function (e) {
                                    h && ((c = e), f.abort());
                                },
                                requestId: d,
                                arg: e,
                                unwrap: function () {
                                    return g.then(tL);
                                },
                            });
                        };
                    },
                    {pending: a, rejected: i, fulfilled: n, typePrefix: e},
                );
            }
            function tL(e) {
                if (e.meta && e.meta.rejectedWithValue) throw e.payload;
                if (e.error) throw e.error;
                return e.payload;
            }
            var t$ = function (e, t) {
                return e && 'function' == typeof e.match ? e.match(t) : e(t);
            };
            function t_() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return function (t) {
                    return e.some(function (e) {
                        return t$(e, t);
                    });
                };
            }
            function tQ() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return function (t) {
                    return e.every(function (e) {
                        return t$(e, t);
                    });
                };
            }
            function tN(e, t) {
                if (!e || !e.meta) return !1;
                var r = 'string' == typeof e.meta.requestId,
                    n = t.indexOf(e.meta.requestStatus) > -1;
                return r && n;
            }
            function tz(e) {
                return 'function' == typeof e[0] && 'pending' in e[0] && 'fulfilled' in e[0] && 'rejected' in e[0];
            }
            function tB() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return 0 === e.length
                    ? function (e) {
                          return tN(e, ['rejected']);
                      }
                    : tz(e)
                      ? function (t) {
                            var r = e.map(function (e) {
                                return e.rejected;
                            });
                            return t_.apply(void 0, r)(t);
                        }
                      : tB()(e[0]);
            }
            var tH = function (e, t) {
                    if ('function' != typeof e) throw TypeError(t + ' is not a function');
                },
                tY = function () {},
                tW = function (e, t) {
                    return (void 0 === t && (t = tY), e.catch(t), e);
                },
                tJ = function (e, t) {
                    e.addEventListener('abort', t, {once: !0});
                },
                tG = function (e, t) {
                    var r = e.signal;
                    r.aborted ||
                        ('reason' in r ||
                            Object.defineProperty(r, 'reason', {
                                enumerable: !0,
                                value: t,
                                configurable: !0,
                                writable: !0,
                            }),
                        e.abort(t));
                },
                tK = 'listener',
                tZ = 'completed',
                tX = 'cancelled',
                t0 = 'task-' + tX,
                t1 = 'task-' + tZ,
                t2 = tK + '-' + tX,
                t5 = tK + '-' + tZ,
                t3 = function (e) {
                    ((this.code = e),
                        (this.name = 'TaskAbortError'),
                        (this.message = 'task ' + tX + ' (reason: ' + e + ')'));
                },
                t4 = function (e) {
                    if (e.aborted) throw new t3(e.reason);
                },
                t6 = function (e) {
                    return tW(
                        new Promise(function (t, r) {
                            var n = function () {
                                return r(new t3(e.reason));
                            };
                            e.aborted ? n() : tJ(e, n);
                        }),
                    );
                },
                t8 = function (e) {
                    return function (t) {
                        return tW(
                            Promise.race([t6(e), t]).then(function (t) {
                                return (t4(e), t);
                            }),
                        );
                    };
                },
                t9 = function (e) {
                    var t = t8(e);
                    return function (e) {
                        return t(
                            new Promise(function (t) {
                                return setTimeout(t, e);
                            }),
                        );
                    };
                },
                t7 = Object.assign,
                re = {},
                rt = 'listenerMiddleware',
                rr = function (e) {
                    var t = e.type,
                        r = e.actionCreator,
                        n = e.matcher,
                        a = e.predicate,
                        i = e.effect;
                    if (t) a = tI(t).match;
                    else if (r) ((t = r.type), (a = r.match));
                    else if (n) a = n;
                    else if (!a)
                        throw Error(
                            'Creating or removing a listener requires one of the known fields for matching an action',
                        );
                    return (tH(i, 'options.listener'), {predicate: a, type: t, effect: i});
                },
                rn = function (e) {
                    var t = rr(e),
                        r = t.type,
                        n = t.predicate,
                        a = t.effect;
                    return {
                        id: tj(),
                        effect: a,
                        type: r,
                        predicate: n,
                        pending: new Set(),
                        unsubscribe: function () {
                            throw Error('Unsubscribe not initialized');
                        },
                    };
                },
                ra = function (e, t, r) {
                    try {
                        e(t, r);
                    } catch (e) {
                        setTimeout(function () {
                            throw e;
                        }, 0);
                    }
                },
                ri = tI(rt + '/add'),
                ro = tI(rt + '/removeAll'),
                rs = tI(rt + '/remove'),
                rl = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    console.error.apply(console, te([rt + '/error'], e));
                },
                ru = function (e) {
                    e.pending.forEach(function (e) {
                        tG(e, t2);
                    });
                };
            function rc(e) {
                var t = this;
                void 0 === e && (e = {});
                var r = new Map(),
                    n = e.extra,
                    a = e.onError,
                    i = void 0 === a ? rl : a;
                tH(i, 'onError');
                var o = function (e) {
                        for (var t = 0, n = Array.from(r.values()); t < n.length; t++) {
                            var a = n[t];
                            if (e(a)) return a;
                        }
                    },
                    s = function (e) {
                        var t,
                            n = o(function (t) {
                                return t.effect === e.effect;
                            });
                        return (
                            n || (n = rn(e)),
                            ((t = n).unsubscribe = function () {
                                return r.delete(t.id);
                            }),
                            r.set(t.id, t),
                            function (e) {
                                (t.unsubscribe(), (null == e ? void 0 : e.cancelActive) && ru(t));
                            }
                        );
                    },
                    l = function (e) {
                        var t = rr(e),
                            r = t.type,
                            n = t.effect,
                            a = t.predicate,
                            i = o(function (e) {
                                return ('string' == typeof r ? e.type === r : e.predicate === a) && e.effect === n;
                            });
                        return (i && (i.unsubscribe(), e.cancelActive && ru(i)), !!i);
                    },
                    u = function (e, a, o, l) {
                        return tc(t, null, function () {
                            var t, u, c;
                            return e7(this, function (d) {
                                var f, p;
                                switch (d.label) {
                                    case 0:
                                        ((f = (t = new AbortController()).signal),
                                            (u = function (e, t) {
                                                return tW(
                                                    tc(void 0, null, function () {
                                                        var r, n, a, i;
                                                        return e7(this, function (o) {
                                                            switch (o.label) {
                                                                case 0:
                                                                    (t4(f),
                                                                        (r = function () {}),
                                                                        (n = new Promise(function (t) {
                                                                            r = s({
                                                                                predicate: e,
                                                                                effect: function (e, r) {
                                                                                    (r.unsubscribe(),
                                                                                        t([
                                                                                            e,
                                                                                            r.getState(),
                                                                                            r.getOriginalState(),
                                                                                        ]));
                                                                                },
                                                                            });
                                                                        })),
                                                                        (a = [t6(f), n]),
                                                                        null != t &&
                                                                            a.push(
                                                                                new Promise(function (e) {
                                                                                    return setTimeout(e, t, null);
                                                                                }),
                                                                            ),
                                                                        (o.label = 1));
                                                                case 1:
                                                                    return (
                                                                        o.trys.push([1, , 3, 4]),
                                                                        [4, Promise.race(a)]
                                                                    );
                                                                case 2:
                                                                    return ((i = o.sent()), t4(f), [2, i]);
                                                                case 3:
                                                                    return (r(), [7]);
                                                                case 4:
                                                                    return [2];
                                                            }
                                                        });
                                                    }),
                                                );
                                            }),
                                            (d.label = 1));
                                    case 1:
                                        return (
                                            d.trys.push([1, 3, 4, 5]),
                                            e.pending.add(t),
                                            [
                                                4,
                                                Promise.resolve(
                                                    e.effect(
                                                        a,
                                                        t7({}, o, {
                                                            getOriginalState: l,
                                                            condition: function (e, t) {
                                                                return u(e, t).then(Boolean);
                                                            },
                                                            take: u,
                                                            delay: t9(t.signal),
                                                            pause: t8(t.signal),
                                                            extra: n,
                                                            signal: t.signal,
                                                            fork:
                                                                ((p = t.signal),
                                                                function (e) {
                                                                    tH(e, 'taskExecutor');
                                                                    var t,
                                                                        r = new AbortController();
                                                                    tJ(p, function () {
                                                                        return tG(r, p.reason);
                                                                    });
                                                                    var n =
                                                                        ((t = function () {
                                                                            return tG(r, t1);
                                                                        }),
                                                                        tc(void 0, null, function () {
                                                                            var n;
                                                                            return e7(this, function (a) {
                                                                                switch (a.label) {
                                                                                    case 0:
                                                                                        return (
                                                                                            a.trys.push([0, 3, 4, 5]),
                                                                                            [4, Promise.resolve()]
                                                                                        );
                                                                                    case 1:
                                                                                        return (
                                                                                            a.sent(),
                                                                                            [
                                                                                                4,
                                                                                                tc(
                                                                                                    void 0,
                                                                                                    null,
                                                                                                    function () {
                                                                                                        var t;
                                                                                                        return e7(
                                                                                                            this,
                                                                                                            function (
                                                                                                                n,
                                                                                                            ) {
                                                                                                                switch (
                                                                                                                    n.label
                                                                                                                ) {
                                                                                                                    case 0:
                                                                                                                        return (
                                                                                                                            t4(
                                                                                                                                p,
                                                                                                                            ),
                                                                                                                            t4(
                                                                                                                                r.signal,
                                                                                                                            ),
                                                                                                                            [
                                                                                                                                4,
                                                                                                                                e(
                                                                                                                                    {
                                                                                                                                        pause: t8(
                                                                                                                                            r.signal,
                                                                                                                                        ),
                                                                                                                                        delay: t9(
                                                                                                                                            r.signal,
                                                                                                                                        ),
                                                                                                                                        signal: r.signal,
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            ]
                                                                                                                        );
                                                                                                                    case 1:
                                                                                                                        return (
                                                                                                                            (t =
                                                                                                                                n.sent()),
                                                                                                                            t4(
                                                                                                                                r.signal,
                                                                                                                            ),
                                                                                                                            [
                                                                                                                                2,
                                                                                                                                t,
                                                                                                                            ]
                                                                                                                        );
                                                                                                                }
                                                                                                            },
                                                                                                        );
                                                                                                    },
                                                                                                ),
                                                                                            ]
                                                                                        );
                                                                                    case 2:
                                                                                        return [
                                                                                            2,
                                                                                            {
                                                                                                status: 'ok',
                                                                                                value: a.sent(),
                                                                                            },
                                                                                        ];
                                                                                    case 3:
                                                                                        return [
                                                                                            2,
                                                                                            {
                                                                                                status:
                                                                                                    (n =
                                                                                                        a.sent()) instanceof
                                                                                                    t3
                                                                                                        ? 'cancelled'
                                                                                                        : 'rejected',
                                                                                                error: n,
                                                                                            },
                                                                                        ];
                                                                                    case 4:
                                                                                        return (null == t || t(), [7]);
                                                                                    case 5:
                                                                                        return [2];
                                                                                }
                                                                            });
                                                                        }));
                                                                    return {
                                                                        result: t8(p)(n),
                                                                        cancel: function () {
                                                                            tG(r, t0);
                                                                        },
                                                                    };
                                                                }),
                                                            unsubscribe: e.unsubscribe,
                                                            subscribe: function () {
                                                                r.set(e.id, e);
                                                            },
                                                            cancelActiveListeners: function () {
                                                                e.pending.forEach(function (e, r, n) {
                                                                    e !== t && (tG(e, t2), n.delete(e));
                                                                });
                                                            },
                                                        }),
                                                    ),
                                                ),
                                            ]
                                        );
                                    case 2:
                                        return (d.sent(), [3, 5]);
                                    case 3:
                                        return ((c = d.sent()) instanceof t3 || ra(i, c, {raisedBy: 'effect'}), [3, 5]);
                                    case 4:
                                        return (tG(t, t5), e.pending.delete(t), [7]);
                                    case 5:
                                        return [2];
                                }
                            });
                        });
                    },
                    c = function () {
                        (r.forEach(ru), r.clear());
                    };
                return {
                    middleware: function (e) {
                        return function (t) {
                            return function (n) {
                                if (ri.match(n)) return s(n.payload);
                                if (ro.match(n)) {
                                    c();
                                    return;
                                }
                                if (rs.match(n)) return l(n.payload);
                                var a,
                                    o = e.getState(),
                                    d = function () {
                                        if (o === re)
                                            throw Error(rt + ': getOriginalState can only be called synchronously');
                                        return o;
                                    };
                                try {
                                    if (((a = t(n)), r.size > 0))
                                        for (
                                            var f = e.getState(), p = Array.from(r.values()), h = 0;
                                            h < p.length;
                                            h++
                                        ) {
                                            var g = p[h],
                                                v = !1;
                                            try {
                                                v = g.predicate(n, f, o);
                                            } catch (e) {
                                                ((v = !1), ra(i, e, {raisedBy: 'predicate'}));
                                            }
                                            v && u(g, n, e, d);
                                        }
                                } finally {
                                    o = re;
                                }
                                return a;
                            };
                        };
                    },
                    startListening: s,
                    stopListening: l,
                    clearListeners: c,
                };
            }
            (!(function () {
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
                                          var t = this[eB];
                                          return eG.get(t, e);
                                      },
                                      set: function (t) {
                                          var r = this[eB];
                                          eG.set(r, e, t);
                                      },
                                  }),
                        r
                    );
                }
                function t(e) {
                    for (var t = e.length - 1; t >= 0; t--) {
                        var a = e[t][eB];
                        if (!a.P)
                            switch (a.i) {
                                case 5:
                                    n(a) && eD(a);
                                    break;
                                case 4:
                                    r(a) && eD(a);
                            }
                    }
                }
                function r(e) {
                    for (var t = e.t, r = e.k, n = eY(r), a = n.length - 1; a >= 0; a--) {
                        var i = n[a];
                        if (i !== eB) {
                            var o = t[i];
                            if (void 0 === o && !ec(t, i)) return !0;
                            var s = r[i],
                                l = s && s[eB];
                            if (l ? l.t !== o : !ef(s, o)) return !0;
                        }
                    }
                    var u = !!t[eB];
                    return n.length !== eY(t).length + (u ? 0 : 1);
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
                eJ.ES5 ||
                    (eJ.ES5 = {
                        J: function (t, r) {
                            var n = Array.isArray(t),
                                a = (function (t, r) {
                                    if (t) {
                                        for (var n = Array(r.length), a = 0; a < r.length; a++)
                                            Object.defineProperty(n, '' + a, e(a, !0));
                                        return n;
                                    }
                                    var i = eW(r);
                                    delete i[eB];
                                    for (var o = eY(i), s = 0; s < o.length; s++) {
                                        var l = o[s];
                                        i[l] = e(l, t || !!i[l].enumerable);
                                    }
                                    return Object.create(Object.getPrototypeOf(r), i);
                                })(n, t),
                                i = {
                                    i: n ? 5 : 4,
                                    A: r ? r.A : eU,
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
                            return (Object.defineProperty(a, eB, {value: i, writable: !0}), a);
                        },
                        S: function (e, r, a) {
                            a
                                ? ei(r) && r[eB].A === e && t(e.p)
                                : (e.u &&
                                      (function e(t) {
                                          if (t && 'object' == typeof t) {
                                              var r = t[eB];
                                              if (r) {
                                                  var a = r.t,
                                                      i = r.k,
                                                      o = r.R,
                                                      s = r.i;
                                                  if (4 === s)
                                                      (el(i, function (t) {
                                                          t !== eB &&
                                                              (void 0 !== a[t] || ec(a, t)
                                                                  ? o[t] || e(i[t])
                                                                  : ((o[t] = !0), eD(r)));
                                                      }),
                                                          el(a, function (e) {
                                                              void 0 !== i[e] || ec(i, e) || ((o[e] = !1), eD(r));
                                                          }));
                                                  else if (5 === s) {
                                                      if ((n(r) && (eD(r), (o.length = !0)), i.length < a.length))
                                                          for (var l = i.length; l < a.length; l++) o[l] = !1;
                                                      else for (var u = a.length; u < i.length; u++) o[u] = !0;
                                                      for (var c = Math.min(i.length, a.length), d = 0; d < c; d++)
                                                          (i.hasOwnProperty(d) || (o[d] = !0),
                                                              void 0 === o[d] && e(i[d]));
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
                q(P()),
                q(V()));
            var rd = (e) => (t) => (r) => {
                    var n, a;
                    let i = null == (n = r.payload) ? void 0 : n.analyticsAction;
                    void 0 !== i && (null == (a = r.payload) || delete a.analyticsAction);
                    let o = t(r);
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
                        o
                    );
                },
                rf = () => (e) => (t) => e(t.instantlyCallable ? t() : t),
                rp = (e) => () => (t) => (r) => {
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
                rh = (e) => (t) => (r) => (n) => (
                    e.debug({action: n, nextState: t.getState()}, `Action dispatched: ${n.type}`),
                    r(n)
                ),
                rg = class extends Error {
                    constructor(e) {
                        (super(e), (this.name = 'SchemaValidationError'));
                    }
                },
                rv = class {
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
                                new rg(e)
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
                rm = class {
                    constructor(e = {}) {
                        this.baseConfig = e;
                    }
                    validate(e) {
                        return this.baseConfig.required && rS(e) ? 'value is required.' : null;
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
            function ry(e) {
                return void 0 === e;
            }
            function rS(e) {
                return ry(e) || null === e;
            }
            var rb = class {
                constructor(e = {}) {
                    ((this.config = e), (this.value = new rm(e)));
                }
                validate(e) {
                    return (
                        this.value.validate(e) ||
                        (ry(e) || rw(e)
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
            function rw(e) {
                return 'number' == typeof e && !isNaN(e);
            }
            var rI = class {
                constructor(e = {}) {
                    this.value = new rm(e);
                }
                validate(e) {
                    return this.value.validate(e) || (ry(e) || rC(e) ? null : 'value is not a boolean.');
                }
                get default() {
                    return this.value.default;
                }
                get required() {
                    return this.value.required;
                }
            };
            function rC(e) {
                return 'boolean' == typeof e;
            }
            var rk =
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
                rO = class {
                    constructor(e = {}) {
                        ((this.config = {emptyAllowed: !0, url: !1, ...e}), (this.value = new rm(this.config)));
                    }
                    validate(e) {
                        let {emptyAllowed: t, url: r, regex: n, constrainTo: a} = this.config;
                        return (
                            this.value.validate(e) ||
                            (ry(e)
                                ? null
                                : rq(e)
                                  ? t || e.length
                                      ? r && !rk.test(e)
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
            function rq(e) {
                return '[object String]' === Object.prototype.toString.call(e);
            }
            var rx = class {
                constructor(e = {}) {
                    this.config = {options: {required: !1}, values: {}, ...e};
                }
                validate(e) {
                    if (ry(e))
                        return this.config.options.required ? 'value is required and is currently undefined' : null;
                    if (!rR(e)) return 'value is not an object';
                    for (let [t, r] of Object.entries(this.config.values))
                        if (r.required && rS(e[t])) return `value does not contain ${t}`;
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
            function rR(e) {
                return void 0 !== e && 'object' == typeof e;
            }
            var rA = class {
                constructor(e = {}) {
                    ((this.config = e), (this.value = new rm(this.config)));
                }
                validate(e) {
                    if (!rS(e) && !Array.isArray(e)) return 'value is not an array';
                    let t = this.value.validate(e);
                    if (null !== t) return t;
                    if (rS(e)) return null;
                    if (void 0 !== this.config.max && e.length > this.config.max)
                        return `value contains more than ${this.config.max}`;
                    if (void 0 !== this.config.min && e.length < this.config.min)
                        return `value contains less than ${this.config.min}`;
                    if (void 0 !== this.config.each) {
                        let t = '';
                        return (
                            e.forEach((r) => {
                                this.config.each.required &&
                                    rS(r) &&
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
                    return rC(e) || rq(e) || rw(e) || rR(e) ? t.validate(e) : 'value is not a primitive value';
                }
                get default() {}
                get required() {
                    return this.value.required;
                }
            };
            function rE(e) {
                return Array.isArray(e);
            }
            var rF = class {
                    constructor(e) {
                        ((this.config = e), (this.value = new rm(e)));
                    }
                    validate(e) {
                        let t = this.value.validate(e);
                        return null !== t
                            ? t
                            : ry(e) || Object.values(this.config.enum).find((t) => t === e)
                              ? null
                              : 'value is not in enum.';
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                },
                rD = new rO({required: !0, emptyAllowed: !1}),
                rj = new rO({required: !1, emptyAllowed: !1}),
                rP = new rO({required: !0, emptyAllowed: !0}),
                rT = ({message: e, name: t, stack: r}) => ({message: e, name: t, stack: r}),
                rV = (e, t) => {
                    if ('required' in t) return {payload: new rv({value: t}).validate({value: e}).value};
                    let r = new rx({options: {required: !0}, values: t}).validate(e);
                    if (r) throw new rg(r);
                    return {payload: e};
                },
                rM = (e, t) => {
                    try {
                        return rV(e, t);
                    } catch (t) {
                        return {payload: e, error: rT(t)};
                    }
                },
                rU = (e, t, r, n) => r$(e, t, r, `Check the initialState of ${n}`, 'Controller initialization error'),
                rL = (e, t, r, n) => r$(e, t, r, `Check the options of ${n}`, 'Controller initialization error'),
                r$ = (e, t, r, n, a) => {
                    try {
                        return t.validate(r, n);
                    } catch (t) {
                        throw (e.logger.error(t, a), t);
                    }
                },
                r_ = q(M()),
                rQ = q(U()),
                rN = q(L()),
                rz = q($()),
                rB = q(J()),
                rH = class extends Error {
                    constructor() {
                        (super(),
                            (this.name = 'ExpiredToken'),
                            (this.message = 'The token being used to perform the request is expired.'));
                    }
                },
                rY = class extends Error {
                    constructor(e, t) {
                        (super(),
                            (this.name = 'Disconnected'),
                            (this.message = `Client could not connect to the following URL: ${e}`),
                            (this.statusCode = null != t ? t : 0));
                    }
                };
            function rW(e) {
                return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e;
            }
            var rJ = class {
                static async call(e) {
                    let t = (function (e) {
                            var t;
                            let {url: r, method: n, requestParams: a, contentType: i, accessToken: o, signal: s} = e,
                                l = 'POST' === e.method || 'PUT' === e.method,
                                u =
                                    ((t = a),
                                    'application/x-www-form-urlencoded' === i
                                        ? 'object' == typeof t && t && Object.values(t).every(rW)
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
                                headers: {'Content-Type': i, Authorization: `Bearer ${o}`, ...e.headers},
                                ...(l && {body: u}),
                                signal: s,
                            };
                        })(e),
                        {origin: r, preprocessRequest: n, logger: a, requestMetadata: i} = e,
                        o = {...t, ...(n ? await n(t, r, i) : {})};
                    a.info(o, 'Platform request');
                    let {url: s, ...l} = o,
                        u = async () => {
                            let e = await (0, rz.default)(s, l);
                            if (429 === e.status) throw e;
                            return e;
                        };
                    try {
                        let e = await (0, rB.backOff)(u, {
                            retry: (e) => {
                                var t;
                                let r = e && ((t = e.status), 429 === t);
                                return (r && a.info('Platform retrying request'), r);
                            },
                        });
                        if (419 === e.status) throw (a.info('Platform renewing token'), new rH());
                        if (404 === e.status) throw new rY(s, e.status);
                        return (a.info({response: e, requestInfo: o}, 'Platform response'), e);
                    } catch (e) {
                        return 'Failed to fetch' === e.message ? new rY(s) : e;
                    }
                }
            };
            function rG(e, t) {
                return `https://${e}${t && t.environment && 'prod' !== t.environment ? t.environment : ''}${t && t.region && 'us' !== t.region ? `-${t.region}` : ''}.cloud.coveo.com`;
            }
            function rK(e, t = 'prod') {
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
            function rZ(e) {
                return (null == e ? void 0 : e.multiRegionSubDomain)
                    ? `https://${e.multiRegionSubDomain}.org.coveo.com`
                    : rG('platform', e);
            }
            (r_.default.extend(rN.default), r_.default.extend(rQ.default));
            var rX = '/rest/search/v2',
                r0 = '/rest/ua',
                r1 = () => ({
                    organizationId: '',
                    accessToken: '',
                    platformUrl: rZ(),
                    search: {
                        apiBaseUrl: `${rZ()}${rX}`,
                        locale: 'en-US',
                        timezone: r_.default.tz.guess(),
                        authenticationProviders: [],
                    },
                    analytics: {
                        enabled: !0,
                        apiBaseUrl: `${rG('analytics', void 0)}${r0}`,
                        originContext: 'Search',
                        originLevel2: 'default',
                        originLevel3: 'default',
                        anonymous: !1,
                        deviceId: '',
                        userDisplayName: '',
                        documentLocation: '',
                    },
                }),
                r2 = () => !1;
            function r5() {
                return {uniqueId: '', content: '', isLoading: !1, position: -1, resultsWithPreview: []};
            }
            var r3 = () => 'default';
            q(P());
            var r4 = (e) => e;
            function r6() {
                return {
                    answerSnippet: '',
                    documentId: {contentIdKey: '', contentIdValue: ''},
                    question: '',
                    relatedQuestions: [],
                    score: 0,
                };
            }
            function r8() {
                return {
                    response: {
                        results: [],
                        searchUid: '',
                        totalCountFiltered: 0,
                        facets: [],
                        generateAutomaticFacets: {facets: []},
                        queryCorrections: [],
                        triggers: [],
                        questionAnswer: r6(),
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
                    questionAnswer: r6(),
                    extendedResults: {},
                };
            }
            function r9(e) {
                let {url: t, accessToken: r, organizationId: n, authentication: a, ...i} = e;
                return i;
            }
            var r7 = (e) => {
                    let {response: t} = e;
                    return t.body ? ne(e) : nt(t);
                },
                ne = (e) =>
                    void 0 !== e.body.exception
                        ? nr(e)
                        : void 0 !== e.body.statusCode
                          ? e.body
                          : {message: 'unknown', statusCode: 0, type: 'unknown'},
                nt = (e) => {
                    let t = JSON.parse(JSON.stringify(e, Object.getOwnPropertyNames(e)));
                    return {
                        ...t,
                        message: `Client side error: ${t.message || ''}`,
                        statusCode: 400,
                        type: 'ClientError',
                    };
                },
                nr = (e) => ({
                    message: e.body.exception.code,
                    statusCode: e.response.status,
                    type: e.body.exception.code,
                });
            function nn() {
                return 'undefined' == typeof window
                    ? new (G())()
                    : 'undefined' == typeof AbortController
                      ? null
                      : new AbortController();
            }
            var na = class {
                    constructor() {
                        this.currentAbortController = null;
                    }
                    async enqueue(e, t) {
                        var r;
                        let n = this.currentAbortController,
                            a = (this.currentAbortController = nn());
                        n && (t.warnOnAbort && t.logger.warn('Cancelling current pending search query'), n.abort());
                        try {
                            return await e(null != (r = null == a ? void 0 : a.signal) ? r : null);
                        } finally {
                            this.currentAbortController === a && (this.currentAbortController = null);
                        }
                    }
                },
                ni = TextDecoder,
                no = class {
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
                ns = (e) => /^https:\/\/platform(dev|stg|hipaa)?(-)?(eu|au)?\.cloud\.coveo\.com/.test(e),
                nl = (e, t) => {
                    let r = nu(e);
                    return r && r.organizationId === t ? r : null;
                },
                nu = (e) => {
                    let t = e.match(/^https:\/\/(?<organizationId>\w+)\.org(?<environment>dev|stg|hipaa)?\.coveo\.com/);
                    return (null == t ? void 0 : t.groups) ? t.groups : null;
                },
                nc = (e, t, r, n) => {
                    let a = new no(`${e.url}${n}`);
                    return (
                        a.addParam('organizationId', e.organizationId),
                        e.authentication && a.addParam('authentication', e.authentication),
                        {accessToken: e.accessToken, method: t, contentType: r, url: a.href, origin: 'searchApiFetch'}
                    );
                },
                nd = (e, t) => {
                    let r = new no(`${e.url}${t}`);
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
                },
                nf = async (e, t) => {
                    let r = await rJ.call({
                        ...nc(e, 'POST', 'application/x-www-form-urlencoded', '/html'),
                        requestParams: r9(e),
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
                        a = await r.arrayBuffer(),
                        i = new ni(n).decode(a);
                    return 'string' == typeof i ? {success: i} : {error: r7({response: r, body: i})};
                };
            function np(e, t) {
                if (t && 'AbortError' === e.name)
                    return {error: {statusCode: e.code, type: e.name, message: e.message, ignored: !0}};
                if (e instanceof rY) return {error: {statusCode: e.statusCode, type: e.name, message: e.message}};
                throw e;
            }
            var nh = class {
                    constructor(e) {
                        ((this.options = e),
                            (this.apiCallsQueues = {
                                unknown: new na(),
                                mainSearch: new na(),
                                facetValues: new na(),
                                foldingCollection: new na(),
                                instantResults: new na(),
                            }));
                    }
                    async plan(e) {
                        let t = await rJ.call({
                            ...nc(e, 'POST', 'application/json', '/plan'),
                            requestParams: r9(e),
                            requestMetadata: {method: 'plan'},
                            ...this.options,
                        });
                        if (t instanceof Error) return np(t);
                        let r = await t.json();
                        return void 0 !== r.preprocessingOutput ? {success: r} : {error: r7({response: t, body: r})};
                    }
                    async querySuggest(e) {
                        let t = await rJ.call({
                            ...nc(e, 'POST', 'application/json', '/querySuggest'),
                            requestMetadata: {method: 'querySuggest'},
                            requestParams: r9(e),
                            ...this.options,
                        });
                        if (t instanceof Error) return np(t);
                        let r = await t.json(),
                            n = {response: t, body: r};
                        return void 0 !== r.completions
                            ? {success: (await this.options.postprocessQuerySuggestResponseMiddleware(n)).body}
                            : {error: r7(n)};
                    }
                    async search(e, t) {
                        var r;
                        let n;
                        let a = null != (r = null == t ? void 0 : t.origin) ? r : 'unknown',
                            i = await this.apiCallsQueues[a].enqueue(
                                (r) =>
                                    rJ.call({
                                        ...nc(e, 'POST', 'application/json', ''),
                                        requestParams: r9(e),
                                        requestMetadata: {method: 'search', origin: null == t ? void 0 : t.origin},
                                        ...this.options,
                                        signal: null != r ? r : void 0,
                                    }),
                                {
                                    logger: this.options.logger,
                                    warnOnAbort: !(null == t ? void 0 : t.disableAbortWarning),
                                },
                            );
                        if (i instanceof Error) return np(i, null == t ? void 0 : t.disableAbortWarning);
                        let o = await i.json(),
                            s = {response: i, body: o};
                        return nm(o)
                            ? ((s.body =
                                  ((n = r6()),
                                  rS(o.questionAnswer)
                                      ? (o.questionAnswer = n)
                                      : (o.questionAnswer = {...n, ...o.questionAnswer}),
                                  o)),
                              {success: (await this.options.postprocessSearchResponseMiddleware(s)).body})
                            : {error: r7(s)};
                    }
                    async facetSearch(e) {
                        let t = await rJ.call({
                            ...nc(e, 'POST', 'application/json', '/facet'),
                            requestParams: r9(e),
                            requestMetadata: {method: 'facetSearch'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return (await this.options.postprocessFacetSearchResponseMiddleware({response: t, body: r}))
                            .body;
                    }
                    async recommendations(e) {
                        let t = await rJ.call({
                            ...nc(e, 'POST', 'application/json', ''),
                            requestParams: r9(e),
                            requestMetadata: {method: 'recommendations'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return nm(r) ? {success: r} : {error: r7({response: t, body: r})};
                    }
                    async html(e) {
                        return nf(e, {...this.options});
                    }
                    async productRecommendations(e) {
                        let t = await rJ.call({
                            ...nc(e, 'POST', 'application/json', ''),
                            requestParams: r9(e),
                            requestMetadata: {method: 'productRecommendations'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return nm(r) ? {success: r} : {error: r7({response: t, body: r})};
                    }
                    async fieldDescriptions(e) {
                        let t = await rJ.call({
                            ...nc(e, 'GET', 'application/json', '/fields'),
                            requestParams: {},
                            requestMetadata: {method: 'fieldDescriptions'},
                            ...this.options,
                        });
                        if (t instanceof Error) throw t;
                        let r = await t.json();
                        return void 0 !== r.fields ? {success: r} : {error: r7({response: t, body: r})};
                    }
                },
                ng = (e) => void 0 !== e.success,
                nv = (e) => void 0 !== e.error;
            function nm(e) {
                return void 0 !== e.results;
            }
            var ny = () => ({correctedQuery: '', wordCorrections: [], originalQuery: ''});
            function nS() {
                return {enabled: !0};
            }
            function nb() {
                return {freezeFacetOrder: !1, facets: {}};
            }
            var nw = ['author', 'language', 'urihash', 'objecttype', 'collection', 'source', 'permanentid'],
                nI = [
                    ...nw,
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
                nC = () => ({
                    enabled: !1,
                    fields: {collection: 'foldingcollection', parent: 'foldingparent', child: 'foldingchild'},
                    filterFieldRange: 2,
                    collections: {},
                });
            function nk() {
                return {firstResult: 0, defaultNumberOfResults: 10, numberOfResults: 10, totalCountFiltered: 0};
            }
            var nO = () => ({q: '', enableQuerySyntax: !1}),
                nq = () => ({liked: !1, disliked: !1, expanded: !1, feedbackModalOpen: !1, relatedQuestions: []}),
                nx = (((aq = nx || {}).Ascending = 'ascending'), (aq.Descending = 'descending'), aq),
                nR =
                    (((ax = nR || {}).Relevancy = 'relevancy'),
                    (ax.QRE = 'qre'),
                    (ax.Date = 'date'),
                    (ax.Field = 'field'),
                    (ax.NoSort = 'nosort'),
                    ax),
                nA = (e) => {
                    if (rE(e)) return e.map((e) => nA(e)).join(',');
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
                nE = () => ({by: 'relevancy'}),
                nF = (e) => ({by: 'date', order: e}),
                nD = (e, t) => ({by: 'field', order: t, field: e}),
                nj = () => ({by: 'qre'}),
                nP = () => ({by: 'nosort'}),
                nT = new rx({
                    values: {by: new rF({enum: nR, required: !0}), order: new rF({enum: nx}), field: new rO()},
                });
            function nV() {
                return nA(nE());
            }
            function nM() {
                return {contextValues: {}};
            }
            var nU = () => ({
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
                nL = (((aR = nL || {}).Relevance = 'relevance'), (aR.Fields = 'fields'), aR),
                n$ = (((aA = n$ || {}).Ascending = 'asc'), (aA.Descending = 'desc'), aA);
            function n_() {
                return {contextValues: {}};
            }
            var nQ = () => ({
                    cq: '',
                    cqWasSet: !1,
                    aq: '',
                    aqWasSet: !1,
                    lq: '',
                    lqWasSet: !1,
                    dq: '',
                    dqWasSet: !1,
                    defaultFilters: {cq: '', aq: '', lq: '', dq: ''},
                }),
                nN = () => '';
            q(P());
            var nz = (e) => e,
                nB = (e) => e,
                nH = (e) => e,
                nY = (e) => ({past: [], present: e, future: []}),
                nW = (e) => {
                    let {past: t, present: r, future: n} = e;
                    if (!r || 0 === t.length) return e;
                    let a = t[t.length - 1];
                    return {past: t.slice(0, t.length - 1), present: a, future: [r, ...n]};
                },
                nJ = (e) => {
                    let {past: t, present: r, future: n} = e;
                    return r && 0 !== n.length ? {past: [...t, r], present: n[0], future: n.slice(1)} : e;
                },
                nG = (e) => {
                    let {action: t, state: r, reducer: n} = e,
                        {past: a, present: i} = r,
                        o = n(i, t);
                    return i ? (i === o ? r : {past: [...a, i], present: o, future: []}) : nY(o);
                };
            function nK() {
                return {desiredCount: 5, numberOfValues: 8, set: {}};
            }
            function nZ() {
                return {isLoading: !1, isStreaming: !1, citations: [], liked: !1, disliked: !1};
            }
            function nX(e) {
                return !!e && e.expiresAt && Date.now() >= e.expiresAt;
            }
            function n0(e) {
                var t, r, n;
                return {
                    context: e.context || nM(),
                    dictionaryFieldContext: e.dictionaryFieldContext || n_(),
                    facetSet: e.facetSet || {},
                    numericFacetSet: e.numericFacetSet || {},
                    dateFacetSet: e.dateFacetSet || {},
                    categoryFacetSet: e.categoryFacetSet || {},
                    automaticFacetSet: null != (t = e.automaticFacetSet) ? t : nK(),
                    pagination: e.pagination || nk(),
                    query: e.query || nO(),
                    tabSet: e.tabSet || {},
                    advancedSearchQueries: e.advancedSearchQueries || nQ(),
                    staticFilterSet: e.staticFilterSet || {},
                    querySet: e.querySet || {},
                    instantResults: e.instantResults || {},
                    sortCriteria: e.sortCriteria || nV(),
                    pipeline: e.pipeline || nN(),
                    searchHub: e.searchHub || r3(),
                    facetOptions: e.facetOptions || nb(),
                    facetOrder: null != (r = e.facetOrder) ? r : [],
                    debug: null != (n = e.debug) ? n : r2(),
                };
            }
            var n1 = {};
            k(n1, {escape: () => an, getHighlightedSuggestion: () => at, highlightString: () => ae});
            var n2 = q(X()),
                n5 = (e, t = 5) =>
                    e +
                    Math.random()
                        .toString(36)
                        .substring(2, 2 + t);
            function n3(e) {
                return Array.isArray(e);
            }
            function n4(e) {
                return '' === e.trim();
            }
            function n6(e, t) {
                let {[e]: r, ...n} = t;
                return n;
            }
            function n8(e) {
                var t;
                return ((t = JSON.stringify(e)), ('undefined' != typeof btoa ? btoa : n2.btoa)(encodeURI(t)));
            }
            var n9 = new Set(['1', 1, 'yes', !0]);
            function n7() {
                if ('undefined' == typeof navigator || 'undefined' == typeof window) return !1;
                let e = navigator,
                    t = window;
                return [e.globalPrivacyControl, e.doNotTrack, e.msDoNotTrack, t.doNotTrack].some((e) => n9.has(e));
            }
            function ae(e) {
                if (n4(e.openingDelimiter) || n4(e.closingDelimiter))
                    throw Error('delimiters should be a non-empty string');
                if (rS(e.content) || n4(e.content)) return e.content;
                if (0 === e.highlights.length) return an(e.content);
                let t = e.content.length,
                    r = '',
                    n = 0;
                for (let a = 0; a < e.highlights.length; a++) {
                    let i = e.highlights[a],
                        o = i.offset,
                        s = o + i.length;
                    if (s > t) break;
                    ((r +=
                        an(e.content.slice(n, o)) +
                        e.openingDelimiter +
                        an(e.content.slice(o, s)) +
                        e.closingDelimiter),
                        (n = s));
                }
                return (n !== t && (r += an(e.content.slice(n))), r);
            }
            function at(e, t) {
                return (e = an(e)).replace(/\[(.*?)\]|\{(.*?)\}|\((.*?)\)/g, (e, r, n, a) =>
                    r
                        ? ar(r, t.notMatchDelimiters)
                        : n
                          ? ar(n, t.exactMatchDelimiters)
                          : a
                            ? ar(a, t.correctionDelimiters)
                            : e,
                );
            }
            function ar(e, t) {
                return t ? t.open + e + t.close : e;
            }
            function an(e) {
                let t = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '`': '&#x60;'},
                    r = '(?:' + Object.keys(t).join('|') + ')',
                    n = RegExp(r),
                    a = RegExp(r, 'g');
                return n.test(e) ? e.replace(a, (e) => t[e]) : e;
            }
            async function aa(e, t) {
                let r = e.getReader(),
                    n;
                for (; !(n = await r.read()).done; ) t(n.value);
            }
            function ai() {
                return {data: '', event: '', id: '', retry: void 0};
            }
            var ao = function (e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                            0 > t.indexOf(n[a]) &&
                                Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                                (r[n[a]] = e[n[a]]);
                    return r;
                },
                as = 'text/event-stream',
                al = 'last-event-id';
            function au(e) {
                let t = e.headers.get('content-type');
                if (!(null == t ? void 0 : t.startsWith(as)))
                    throw Error(`Expected content-type to be ${as}, Actual: ${t}`);
            }
            var ac = (e, t, r) => new no(`${e}/rest/organizations/${t}/machinelearning/streaming/${r}`).href,
                ad = class extends Error {},
                af = class extends Error {
                    constructor(e) {
                        (super(e.message), (this.payload = e));
                    }
                },
                ap = class {
                    constructor(e) {
                        this.logger = e.logger;
                    }
                    streamGeneratedAnswer(e, t) {
                        let {url: r, organizationId: n, streamId: a, accessToken: i} = e,
                            {write: o, abort: s, close: l, resetAnswer: u} = t;
                        if (!a) {
                            this.logger.error('No stream ID found');
                            return;
                        }
                        let c = 0,
                            d,
                            f = () => {
                                (null == h || h.abort(), u(), g());
                            },
                            p = () => {
                                (clearTimeout(d), (d = setTimeout(f, 5e3)));
                            },
                            h = nn(),
                            g = () =>
                                (function (e, t) {
                                    var {
                                            signal: r,
                                            headers: n,
                                            onopen: a,
                                            onmessage: i,
                                            onclose: o,
                                            onerror: s,
                                            openWhenHidden: l,
                                            fetch: u,
                                        } = t,
                                        c = ao(t, [
                                            'signal',
                                            'headers',
                                            'onopen',
                                            'onmessage',
                                            'onclose',
                                            'onerror',
                                            'openWhenHidden',
                                            'fetch',
                                        ]);
                                    return new Promise((t, d) => {
                                        let f,
                                            p = Object.assign({}, n);
                                        function h() {
                                            (f.abort(), document.hidden || b());
                                        }
                                        (p.accept || (p.accept = as),
                                            l || document.addEventListener('visibilitychange', h));
                                        let g = 1e3,
                                            v = 0;
                                        function m() {
                                            (document.removeEventListener('visibilitychange', h),
                                                window.clearTimeout(v),
                                                f.abort());
                                        }
                                        null == r ||
                                            r.addEventListener('abort', () => {
                                                (m(), t());
                                            });
                                        let y = u ?? window.fetch,
                                            S = a ?? au;
                                        async function b() {
                                            var r, n, a, l;
                                            f = new AbortController();
                                            try {
                                                let r,
                                                    s,
                                                    u,
                                                    d,
                                                    h,
                                                    v,
                                                    b = await y(
                                                        e,
                                                        Object.assign(Object.assign({}, c), {
                                                            headers: p,
                                                            signal: f.signal,
                                                        }),
                                                    );
                                                (await S(b),
                                                    await aa(
                                                        b.body,
                                                        ((n = (e) => {
                                                            e ? (p[al] = e) : delete p[al];
                                                        }),
                                                        (a = (e) => {
                                                            g = e;
                                                        }),
                                                        (r = ai()),
                                                        (s = new TextDecoder()),
                                                        (l = function (e, t) {
                                                            if (0 === e.length) (null == i || i(r), (r = ai()));
                                                            else if (t > 0) {
                                                                let i = s.decode(e.subarray(0, t)),
                                                                    o = t + (32 === e[t + 1] ? 2 : 1),
                                                                    l = s.decode(e.subarray(o));
                                                                switch (i) {
                                                                    case 'data':
                                                                        r.data = r.data
                                                                            ? r.data +
                                                                              `
` +
                                                                              l
                                                                            : l;
                                                                        break;
                                                                    case 'event':
                                                                        r.event = l;
                                                                        break;
                                                                    case 'id':
                                                                        n((r.id = l));
                                                                        break;
                                                                    case 'retry':
                                                                        let u = parseInt(l, 10);
                                                                        isNaN(u) || a((r.retry = u));
                                                                }
                                                            }
                                                        }),
                                                        (v = !1),
                                                        function (e) {
                                                            var t;
                                                            let r;
                                                            void 0 === u
                                                                ? ((u = e), (d = 0), (h = -1))
                                                                : ((t = u),
                                                                  (r = new Uint8Array(t.length + e.length)).set(t),
                                                                  r.set(e, t.length),
                                                                  (u = r));
                                                            let n = u.length,
                                                                a = 0;
                                                            for (; d < n; ) {
                                                                v && (10 === u[d] && (a = ++d), (v = !1));
                                                                let e = -1;
                                                                for (; d < n && -1 === e; ++d)
                                                                    switch (u[d]) {
                                                                        case 58:
                                                                            -1 === h && (h = d - a);
                                                                            break;
                                                                        case 13:
                                                                            v = !0;
                                                                        case 10:
                                                                            e = d;
                                                                    }
                                                                if (-1 === e) break;
                                                                (l(u.subarray(a, e), h), (a = d), (h = -1));
                                                            }
                                                            a === n
                                                                ? (u = void 0)
                                                                : 0 !== a && ((u = u.subarray(a)), (d -= a));
                                                        }),
                                                    ),
                                                    null == o || o(),
                                                    m(),
                                                    t());
                                            } catch (e) {
                                                if (!f.signal.aborted)
                                                    try {
                                                        let t =
                                                            null !== (r = null == s ? void 0 : s(e)) && void 0 !== r
                                                                ? r
                                                                : g;
                                                        (window.clearTimeout(v), (v = window.setTimeout(b, t)));
                                                    } catch (e) {
                                                        (m(), d(e));
                                                    }
                                            }
                                        }
                                        b();
                                    });
                                })(ac(r, n, a), {
                                    method: 'GET',
                                    headers: {Authorization: `Bearer ${i}`, accept: '*/*'},
                                    signal: null == h ? void 0 : h.signal,
                                    async onopen(e) {
                                        if (!e.ok || 'text/event-stream' !== e.headers.get('content-type'))
                                            throw e.status >= 400 && e.status < 500 && 429 !== e.status
                                                ? new af({message: 'Error opening stream', code: e.status})
                                                : new ad();
                                    },
                                    onmessage: (e) => {
                                        let t = JSON.parse(e.data);
                                        if ('ERROR' === t.finishReason) {
                                            (clearTimeout(d),
                                                null == h || h.abort(),
                                                s({message: t.errorMessage, code: t.statusCode}));
                                            return;
                                        }
                                        (o(t), (c = 0), 'COMPLETED' === t.finishReason ? (clearTimeout(d), l()) : p());
                                    },
                                    onerror: (e) => {
                                        if ((clearTimeout(d), e instanceof af)) throw (null == h || h.abort(), s(e), e);
                                        if (++c > 3) {
                                            this.logger.info('Maximum retry exceeded.');
                                            let e = {message: 'Failed to complete stream.', code: 1};
                                            throw (null == h || h.abort(), s(e), new af(e));
                                        }
                                        (this.logger.info(`Retrying...(${c}/3)`), u());
                                    },
                                });
                        return (g(), h);
                    }
                };
            function ah(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                        0 > t.indexOf(n[a]) &&
                            Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                            (r[n[a]] = e[n[a]]);
                return r;
            }
            function ag(e, t, r, n) {
                return new (r || (r = Promise))(function (a, i) {
                    function o(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function s(e) {
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
                              ).then(o, s);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            }
            function av() {
                return 'undefined' != typeof navigator;
            }
            function am() {
                return 'undefined' != typeof document;
            }
            function ay() {
                try {
                    return 'undefined' != typeof localStorage;
                } catch {
                    return !1;
                }
            }
            function aS() {
                return av() && navigator.cookieEnabled;
            }
            (((aE = aF || (aF = {})).search = 'search'),
                (aE.click = 'click'),
                (aE.custom = 'custom'),
                (aE.view = 'view'),
                (aE.collect = 'collect'));
            var ab = [aF.click, aF.custom, aF.search, aF.view],
                aw = (e, t) =>
                    -1 !== ab.indexOf(e)
                        ? Object.assign(
                              {
                                  language: am() ? document.documentElement.lang : 'unknown',
                                  userAgent: av() ? navigator.userAgent : 'unknown',
                              },
                              t,
                          )
                        : t,
                aI = class {
                    static set(e, t, r) {
                        var n, a, i;
                        (r && (n = new Date()).setTime(n.getTime() + r),
                            -1 === (i = window.location.hostname).indexOf('.')
                                ? aC(e, t, n)
                                : aC(e, t, n, (a = i.split('.'))[a.length - 2] + '.' + a[a.length - 1]));
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
                        aI.set(e, '', -1);
                    }
                };
            function aC(e, t, r, n) {
                document.cookie =
                    `${e}=${t}` +
                    (r ? `;expires=${r.toUTCString()}` : '') +
                    (n ? `;domain=${n}` : '') +
                    ';path=/;SameSite=Lax';
            }
            var ak = class {
                getItem(e) {
                    return aI.get(`${ak.prefix}${e}`);
                }
                removeItem(e) {
                    aI.erase(`${ak.prefix}${e}`);
                }
                setItem(e, t, r) {
                    aI.set(`${ak.prefix}${e}`, t, r);
                }
            };
            ak.prefix = 'coveo_';
            var aO,
                aq,
                ax,
                aR,
                aA,
                aE,
                aF,
                aD,
                aj = class {
                    constructor() {
                        this.cookieStorage = new ak();
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
                aP = class {
                    getItem(e) {
                        return null;
                    }
                    removeItem(e) {}
                    setItem(e, t) {}
                },
                aT = '__coveo.analytics.history',
                aV = class {
                    constructor(e) {
                        this.store =
                            e ||
                            (ay()
                                ? localStorage
                                : aS()
                                  ? new ak()
                                  : !(function () {
                                          try {
                                              return 'undefined' != typeof sessionStorage;
                                          } catch {
                                              return !1;
                                          }
                                      })()
                                    ? new aP()
                                    : sessionStorage);
                    }
                    addElement(e) {
                        ((e.internalTime = new Date().getTime()), (e = this.cropQueryElement(this.stripEmptyQuery(e))));
                        let t = this.getHistoryWithInternalTime();
                        null != t ? this.isValidEntry(e) && this.setHistory([e].concat(t)) : this.setHistory([e]);
                    }
                    addElementAsync(e) {
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
                            let e = yield this.getHistoryWithInternalTimeAsync();
                            return this.stripEmptyQueries(this.stripInternalTime(e));
                        });
                    }
                    getHistoryWithInternalTime() {
                        try {
                            let e = this.store.getItem(aT);
                            return e && 'string' == typeof e ? JSON.parse(e) : [];
                        } catch {
                            return [];
                        }
                    }
                    getHistoryWithInternalTimeAsync() {
                        return ag(this, void 0, void 0, function* () {
                            try {
                                let e = yield this.store.getItem(aT);
                                return e ? JSON.parse(e) : [];
                            } catch {
                                return [];
                            }
                        });
                    }
                    setHistory(e) {
                        try {
                            this.store.setItem(aT, JSON.stringify(e.slice(0, 20)));
                        } catch {}
                    }
                    clear() {
                        try {
                            this.store.removeItem(aT);
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
                aM = Object.freeze({
                    __proto__: null,
                    HistoryStore: aV,
                    MAX_NUMBER_OF_HISTORY_ELEMENTS: 20,
                    MAX_VALUE_SIZE: 75,
                    MIN_THRESHOLD_FOR_DUPLICATE_VALUE: 6e4,
                    STORE_KEY: aT,
                    default: aV,
                }),
                aU = (e, t) =>
                    ag(void 0, void 0, void 0, function* () {
                        return e === aF.view
                            ? (yield aL(t.contentIdValue),
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
                aL = (e) =>
                    ag(void 0, void 0, void 0, function* () {
                        let t = new aV(),
                            r = {name: 'PageView', value: e, time: new Date().toISOString()};
                        yield t.addElementAsync(r);
                    }),
                a$ = new Uint8Array(16),
                a_ =
                    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            function aQ(e) {
                return 'string' == typeof e && a_.test(e);
            }
            var aN = [];
            for (let e = 0; e < 256; ++e) aN.push((e + 256).toString(16).slice(1));
            function az(e, t = 0) {
                return (
                    aN[e[t + 0]] +
                    aN[e[t + 1]] +
                    aN[e[t + 2]] +
                    aN[e[t + 3]] +
                    '-' +
                    aN[e[t + 4]] +
                    aN[e[t + 5]] +
                    '-' +
                    aN[e[t + 6]] +
                    aN[e[t + 7]] +
                    '-' +
                    aN[e[t + 8]] +
                    aN[e[t + 9]] +
                    '-' +
                    aN[e[t + 10]] +
                    aN[e[t + 11]] +
                    aN[e[t + 12]] +
                    aN[e[t + 13]] +
                    aN[e[t + 14]] +
                    aN[e[t + 15]]
                ).toLowerCase();
            }
            var aB = {randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)};
            function aH(e, t, r) {
                if (aB.randomUUID && !t && !e) return aB.randomUUID();
                let n =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (
                                !aD &&
                                !(aD =
                                    'undefined' != typeof crypto &&
                                    crypto.getRandomValues &&
                                    crypto.getRandomValues.bind(crypto))
                            )
                                throw Error(
                                    'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
                                );
                            return aD(a$);
                        }
                    )();
                if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = n[e];
                    return t;
                }
                return az(n);
            }
            function aY(e, t) {
                return (e << t) | (e >>> (32 - t));
            }
            var aW = (function (e, t, r) {
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
                                    if (!aQ(e)) throw TypeError('Invalid UUID');
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
                        let o = new Uint8Array(16 + e.length);
                        if (
                            (o.set(t),
                            o.set(e, t.length),
                            ((o = r(o))[6] = (15 & o[6]) | 80),
                            (o[8] = (63 & o[8]) | 128),
                            n)
                        ) {
                            a = a || 0;
                            for (let e = 0; e < 16; ++e) n[a + e] = o[e];
                            return n;
                        }
                        return az(o);
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
                        for (let e = 16; e < 80; ++e) n[e] = aY(n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16], 1);
                        let i = r[0],
                            o = r[1],
                            s = r[2],
                            l = r[3],
                            u = r[4];
                        for (let e = 0; e < 80; ++e) {
                            let r = Math.floor(e / 20),
                                a =
                                    (aY(i, 5) +
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
                                        })(r, o, s, l) +
                                        u +
                                        t[r] +
                                        n[e]) >>>
                                    0;
                            ((u = l), (l = s), (s = aY(o, 30) >>> 0), (o = i), (i = a));
                        }
                        ((r[0] = (r[0] + i) >>> 0),
                            (r[1] = (r[1] + o) >>> 0),
                            (r[2] = (r[2] + s) >>> 0),
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
                aJ = '2.28.12',
                aG = class {
                    constructor(e, t) {
                        if (!aQ(e)) throw Error('Not a valid uuid');
                        ((this.clientId = e), (this.creationDate = Math.floor(t / 1e3)));
                    }
                    toString() {
                        return this.clientId.replace(/-/g, '') + '.' + this.creationDate.toString();
                    }
                    get expired() {
                        let e = Math.floor(Date.now() / 1e3) - this.creationDate;
                        return e < 0 || e > aG.expirationTime;
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
                        return aQ(a) ? new aG(a, 1e3 * Number.parseInt(n)) : null;
                    }
                };
            ((aG.cvo_cid = 'cvo_cid'), (aG.expirationTime = 120));
            var aK = Object.keys;
            function aZ(e) {
                return null !== e && 'object' == typeof e && !Array.isArray(e);
            }
            var aX = {
                    id: 'svc_ticket_id',
                    subject: 'svc_ticket_subject',
                    description: 'svc_ticket_description',
                    category: 'svc_ticket_category',
                    productId: 'svc_ticket_product_id',
                    custom: 'svc_ticket_custom',
                },
                a0 = RegExp(`^(${[...aK(aX).map((e) => aX[e])].join('|')}$)`),
                a1 = [(e) => a0.test(e)],
                a2 = {
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
                a5 = {
                    id: 'id',
                    name: 'nm',
                    brand: 'br',
                    category: 'ca',
                    variant: 'va',
                    position: 'ps',
                    price: 'pr',
                    group: 'group',
                },
                a3 = {action: 'pa', list: 'pal', listSource: 'pls'},
                a4 = {
                    id: 'ti',
                    revenue: 'tr',
                    tax: 'tt',
                    shipping: 'ts',
                    coupon: 'tcc',
                    affiliation: 'ta',
                    step: 'cos',
                    option: 'col',
                },
                a6 = {id: 'quoteId', affiliation: 'quoteAffiliation'},
                a8 = {id: 'reviewId', rating: 'reviewRating', comment: 'reviewComment'},
                a9 = {
                    add: a3,
                    bookmark_add: a3,
                    bookmark_remove: a3,
                    click: a3,
                    checkout: a3,
                    checkout_option: a3,
                    detail: a3,
                    impression: a3,
                    remove: a3,
                    refund: Object.assign(Object.assign({}, a3), a4),
                    purchase: Object.assign(Object.assign({}, a3), a4),
                    quickview: a3,
                    quote: Object.assign(Object.assign({}, a3), a6),
                    review: Object.assign(Object.assign({}, a3), a8),
                },
                a7 = aK(a2).map((e) => a2[e]),
                ie = aK(a5).map((e) => a5[e]),
                it = aK(a3).map((e) => a3[e]),
                ir = aK(a4).map((e) => a4[e]),
                ia = aK(a8).map((e) => a8[e]),
                ii = aK(a6).map((e) => a6[e]),
                io = [...a7, 'custom'].join('|'),
                is = [...ie, 'custom'].join('|'),
                il = '(pr[0-9]+)',
                iu = '(il[0-9]+pi[0-9]+)',
                ic = RegExp(`^${il}(${io})$`),
                id = RegExp(`^(${iu}(${is}))|(il[0-9]+nm)$`),
                ip = RegExp(`^(${it.join('|')})$`),
                ih = RegExp(`^(${ir.join('|')})$`),
                ig = RegExp(`^${il}custom$`),
                iv = RegExp(`^${iu}custom$`),
                im = RegExp(
                    `^(${['loyaltyCardId', 'loyaltyTier', 'thirdPartyPersona', 'companyName', 'favoriteStore', 'storeName', 'userIndustry', 'userRole', 'userDepartment', 'businessUnit', ...ia, ...ii].join('|')})$`,
                ),
                iy = [(e) => id.test(e), (e) => ic.test(e), (e) => ip.test(e), (e) => ih.test(e), (e) => im.test(e)],
                iS = [ig, iv],
                ib = Object.assign(
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
                iw = (e) => {
                    let t = (!!e.action && a9[e.action]) || {};
                    return aK(e).reduce((r, n) => {
                        let a = t[n] || ib[n] || n;
                        return Object.assign(Object.assign({}, r), {[a]: e[n]});
                    }, {});
                },
                iI = aK(ib).map((e) => ib[e]),
                iC = (e) => -1 !== iI.indexOf(e),
                ik = (e) => 'custom' === e,
                iO = (e) => [...iy, ...a1, iC, ik].some((t) => t(e)),
                iq = (e) =>
                    aK(e).reduce((t, r) => {
                        let n = ix(r);
                        return n
                            ? Object.assign(Object.assign({}, t), iR(n, e[r]))
                            : Object.assign(Object.assign({}, t), {[r]: e[r]});
                    }, {}),
                ix = (e) => {
                    let t;
                    return (
                        [...iS].every((r) => {
                            var n;
                            return !(t = null === (n = r.exec(e)) || void 0 === n ? void 0 : n[1]);
                        }),
                        t
                    );
                },
                iR = (e, t) => aK(t).reduce((r, n) => Object.assign(Object.assign({}, r), {[`${e}${n}`]: t[n]}), {}),
                iA = class {
                    constructor(e) {
                        this.opts = e;
                    }
                    sendEvent(e, t) {
                        return ag(this, void 0, void 0, function* () {
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
                                {url: o, body: s} = Object.assign(
                                    Object.assign({}, i),
                                    n ? yield n(i, 'analyticsBeacon') : {},
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
                        return ag(this, void 0, void 0, function* () {
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
                        return -1 !== [aF.click, aF.custom, aF.search, aF.view].indexOf(e);
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
                iE = class {
                    sendEvent(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            return Promise.resolve();
                        });
                    }
                    deleteHttpCookieVisitorId() {
                        return ag(this, void 0, void 0, function* () {
                            return Promise.resolve();
                        });
                    }
                },
                iF = window.fetch,
                iD = class {
                    constructor(e) {
                        this.opts = e;
                    }
                    sendEvent(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            let {baseUrl: r, visitorIdProvider: n, preprocessRequest: a} = this.opts,
                                i = {
                                    url: `${r}/analytics/${e}${this.shouldAppendVisitorId(e) ? yield this.getVisitorIdParam() : ''}`,
                                    credentials: 'include',
                                    mode: 'cors',
                                    headers: this.getHeaders(),
                                    method: 'POST',
                                    body: JSON.stringify(t),
                                },
                                o = Object.assign(Object.assign({}, i), a ? yield a(i, 'analyticsFetch') : {}),
                                {url: s} = o,
                                l = ah(o, ['url']),
                                u = yield iF(s, l);
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
                        return ag(this, void 0, void 0, function* () {
                            let {baseUrl: e} = this.opts,
                                t = `${e}/analytics/visit`;
                            yield iF(t, {headers: this.getHeaders(), method: 'DELETE'});
                        });
                    }
                    shouldAppendVisitorId(e) {
                        return -1 !== [aF.click, aF.custom, aF.search, aF.view].indexOf(e);
                    }
                    getVisitorIdParam() {
                        return ag(this, void 0, void 0, function* () {
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
                ij = class {
                    constructor(e, t) {
                        (ay() && aS()
                            ? (this.storage = new aj())
                            : ay()
                              ? (this.storage = localStorage)
                              : (console.warn('BrowserRuntime detected no valid storage available.', this),
                                (this.storage = new aP())),
                            (this.client = new iD(e)),
                            (this.beaconClient = new iA(e)),
                            window.addEventListener('beforeunload', () => {
                                for (let {eventType: e, payload: r} of t()) this.beaconClient.sendEvent(e, r);
                            }));
                    }
                },
                iP = class {
                    constructor(e, t) {
                        ((this.storage = t || new aP()), (this.client = new iD(e)));
                    }
                },
                iT = class {
                    constructor() {
                        ((this.storage = new aP()), (this.client = new iE()));
                    }
                },
                iV = (e) => (null == e ? void 0 : e.startsWith('xx')) || !1,
                iM = `
        We've detected you're using React Native but have not provided the corresponding runtime, 
        for an optimal experience please use the "coveo.analytics/react-native" subpackage.
        Follow the Readme on how to set it up: https://github.com/coveo/coveo.analytics.js#using-react-native
    `,
                iU = ['1', 1, 'yes', !0];
            function iL() {
                return (
                    av() &&
                    [
                        navigator.globalPrivacyControl,
                        navigator.doNotTrack,
                        navigator.msDoNotTrack,
                        window.doNotTrack,
                    ].some((e) => -1 !== iU.indexOf(e))
                );
            }
            var i$,
                i_ = {default: 'https://analytics.cloud.coveo.com/rest/ua'},
                iQ = class {
                    get defaultOptions() {
                        return {
                            endpoint: i_.default,
                            isCustomEndpoint: !1,
                            token: '',
                            version: 'v15',
                            beforeSendHooks: [],
                            afterSendHooks: [],
                        };
                    }
                    get version() {
                        return aJ;
                    }
                    constructor(e) {
                        if (((this.acceptedLinkReferrers = []), !e))
                            throw Error('You have to pass options to this constructor');
                        ((this.options = Object.assign(Object.assign({}, this.defaultOptions), e)),
                            (this.visitorId = ''),
                            (this.bufferedRequests = []),
                            (this.beforeSendHooks = [aU, aw].concat(this.options.beforeSendHooks)),
                            (this.afterSendHooks = this.options.afterSendHooks),
                            (this.eventTypeMapping = {}));
                        let t = {
                            baseUrl: this.baseUrl,
                            token: this.options.token,
                            visitorIdProvider: this,
                            preprocessRequest: this.options.preprocessRequest,
                        };
                        ((this.runtime = this.options.runtimeEnvironment || this.initRuntime(t)),
                            iL() && (this.clear(), (this.runtime.storage = new aP())));
                    }
                    initRuntime(e) {
                        return 'undefined' != typeof window && am()
                            ? new ij(e, () => {
                                  let e = [...this.bufferedRequests];
                                  return ((this.bufferedRequests = []), e);
                              })
                            : ('undefined' != typeof navigator &&
                                  'ReactNative' == navigator.product &&
                                  console.warn(iM),
                              new iP(e));
                    }
                    get storage() {
                        return this.runtime.storage;
                    }
                    determineVisitorId() {
                        return ag(this, void 0, void 0, function* () {
                            try {
                                return (
                                    this.extractClientIdFromLink(window.location.href) ||
                                    (yield this.storage.getItem('visitorId')) ||
                                    aH()
                                );
                            } catch (e) {
                                return (
                                    console.log(
                                        'Could not get visitor ID from the current runtime environment storage. Using a random ID instead.',
                                        e,
                                    ),
                                    aH()
                                );
                            }
                        });
                    }
                    getCurrentVisitorId() {
                        return ag(this, void 0, void 0, function* () {
                            if (!this.visitorId) {
                                let e = yield this.determineVisitorId();
                                yield this.setCurrentVisitorId(e);
                            }
                            return this.visitorId;
                        });
                    }
                    setCurrentVisitorId(e) {
                        return ag(this, void 0, void 0, function* () {
                            ((this.visitorId = e), yield this.storage.setItem('visitorId', e));
                        });
                    }
                    setClientId(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            if (aQ(e)) this.setCurrentVisitorId(e.toLowerCase());
                            else {
                                if (!t)
                                    throw Error('Cannot generate uuid client id without a specific namespace string.');
                                this.setCurrentVisitorId(aW(e, aW(t, '38824e1f-37f5-42d3-8372-a4b8fa9df946')));
                            }
                        });
                    }
                    getParameters(e, ...t) {
                        return ag(this, void 0, void 0, function* () {
                            return yield this.resolveParameters(e, ...t);
                        });
                    }
                    getPayload(e, ...t) {
                        return ag(this, void 0, void 0, function* () {
                            let r = yield this.resolveParameters(e, ...t);
                            return yield this.resolvePayloadForParameters(e, r);
                        });
                    }
                    get currentVisitorId() {
                        return (
                            'string' != typeof (this.visitorId || this.storage.getItem('visitorId')) &&
                                this.setCurrentVisitorId(aH()),
                            this.visitorId
                        );
                    }
                    set currentVisitorId(e) {
                        ((this.visitorId = e), this.storage.setItem('visitorId', e));
                    }
                    extractClientIdFromLink(e) {
                        if (iL()) return null;
                        try {
                            let t = new URL(e).searchParams.get(aG.cvo_cid);
                            if (null == t) return null;
                            let r = aG.fromString(t);
                            return r && am() && r.validate(document.referrer, this.acceptedLinkReferrers)
                                ? r.clientId
                                : null;
                        } catch {}
                        return null;
                    }
                    resolveParameters(e, ...t) {
                        return ag(this, void 0, void 0, function* () {
                            let {
                                variableLengthArgumentsNames: r = [],
                                addVisitorIdParameter: n = !1,
                                usesMeasurementProtocol: a = !1,
                                addClientIdParameter: i = !1,
                            } = this.eventTypeMapping[e] || {};
                            return yield [
                                (e) => (r.length > 0 ? this.parseVariableArgumentsPayload(r, e) : e[0]),
                                (e) =>
                                    ag(this, void 0, void 0, function* () {
                                        return Object.assign(Object.assign({}, e), {
                                            visitorId: n ? yield this.getCurrentVisitorId() : '',
                                        });
                                    }),
                                (e) =>
                                    ag(this, void 0, void 0, function* () {
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
                                            ag(this, void 0, void 0, function* () {
                                                let n = yield t;
                                                return yield r(e, n);
                                            }),
                                        t,
                                    ),
                            ].reduce(
                                (e, t) =>
                                    ag(this, void 0, void 0, function* () {
                                        let r = yield e;
                                        return yield t(r);
                                    }),
                                Promise.resolve(t),
                            );
                        });
                    }
                    resolvePayloadForParameters(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            let {usesMeasurementProtocol: r = !1} = this.eventTypeMapping[e] || {};
                            return yield [
                                (e) => this.setTrackingIdIfTrackingIdNotPresent(e),
                                (t) => this.removeEmptyPayloadValues(t, e),
                                (t) => this.validateParams(t, e),
                                (e) => (r ? iw(e) : e),
                                (e) => (r ? this.removeUnknownParameters(e) : e),
                                (e) => (r ? this.processCustomParameters(e) : this.mapCustomParametersToCustomData(e)),
                            ].reduce(
                                (e, t) =>
                                    ag(this, void 0, void 0, function* () {
                                        let r = yield e;
                                        return yield t(r);
                                    }),
                                Promise.resolve(t),
                            );
                        });
                    }
                    makeEvent(e, ...t) {
                        return ag(this, void 0, void 0, function* () {
                            let {newEventType: r = e} = this.eventTypeMapping[e] || {},
                                n = yield this.resolveParameters(e, ...t),
                                a = yield this.resolvePayloadForParameters(e, n);
                            return {
                                eventType: r,
                                payload: a,
                                log: (t) =>
                                    ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeEvent(e, ...t)).log({});
                        });
                    }
                    deferExecution() {
                        return new Promise((e) => setTimeout(e, 0));
                    }
                    sendFromBufferWithFetch() {
                        return ag(this, void 0, void 0, function* () {
                            let e = this.bufferedRequests.shift();
                            if (e) {
                                let {eventType: t, payload: r} = e;
                                return this.runtime.client.sendEvent(t, r);
                            }
                        });
                    }
                    clear() {
                        (this.storage.removeItem('visitorId'), new aV().clear());
                    }
                    deleteHttpOnlyVisitorId() {
                        this.runtime.client.deleteHttpCookieVisitorId();
                    }
                    makeSearchEvent(e) {
                        return ag(this, void 0, void 0, function* () {
                            return this.makeEvent(aF.search, e);
                        });
                    }
                    sendSearchEvent(e) {
                        var {searchQueryUid: t} = e,
                            r = ah(e, ['searchQueryUid']);
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeSearchEvent(r)).log({searchQueryUid: t});
                        });
                    }
                    makeClickEvent(e) {
                        return ag(this, void 0, void 0, function* () {
                            return this.makeEvent(aF.click, e);
                        });
                    }
                    sendClickEvent(e) {
                        var {searchQueryUid: t} = e,
                            r = ah(e, ['searchQueryUid']);
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeClickEvent(r)).log({searchQueryUid: t});
                        });
                    }
                    makeCustomEvent(e) {
                        return ag(this, void 0, void 0, function* () {
                            return this.makeEvent(aF.custom, e);
                        });
                    }
                    sendCustomEvent(e) {
                        var {lastSearchQueryUid: t} = e,
                            r = ah(e, ['lastSearchQueryUid']);
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEvent(r)).log({lastSearchQueryUid: t});
                        });
                    }
                    makeViewEvent(e) {
                        return ag(this, void 0, void 0, function* () {
                            return this.makeEvent(aF.view, e);
                        });
                    }
                    sendViewEvent(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeViewEvent(e)).log({});
                        });
                    }
                    getVisit() {
                        return ag(this, void 0, void 0, function* () {
                            let e = yield (yield fetch(`${this.baseUrl}/analytics/visit`)).json();
                            return ((this.visitorId = e.visitorId), e);
                        });
                    }
                    getHealth() {
                        return ag(this, void 0, void 0, function* () {
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
                        return -1 !== ({[aF.search]: ['queryText']}[e] || []).indexOf(t);
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
                                if (iO(e)) return !0;
                                console.log(e, 'is not processed by coveoua');
                            })
                            .reduce((t, r) => Object.assign(Object.assign({}, t), {[r]: e[r]}), {});
                    }
                    processCustomParameters(e) {
                        let {custom: t} = e,
                            r = ah(e, ['custom']),
                            n = {};
                        t && aZ(t) && (n = this.lowercaseKeys(t));
                        let a = iq(r);
                        return Object.assign(Object.assign({}, n), a);
                    }
                    mapCustomParametersToCustomData(e) {
                        let {custom: t} = e,
                            r = ah(e, ['custom']);
                        if (!(t && aZ(t))) return e;
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
                            n = ah(e, ['anonymizeIp']);
                        return (
                            void 0 !== r &&
                                -1 ==
                                    ['0', 'false', 'undefined', 'null', '{}', '[]', ''].indexOf(`${r}`.toLowerCase()) &&
                                (n.anonymizeIp = 1),
                            (t == aF.view || t == aF.click || t == aF.search || t == aF.custom) &&
                                (n.originLevel3 = this.limit(n.originLevel3, 128)),
                            t == aF.view && (n.location = this.limit(n.location, 128)),
                            ('pageview' == t || 'event' == t) &&
                                ((n.referrer = this.limit(n.referrer, 2048)),
                                (n.location = this.limit(n.location, 2048)),
                                (n.page = this.limit(n.page, 2048))),
                            n
                        );
                    }
                    ensureAnonymousUserWhenUsingApiKey(e) {
                        let {userId: t} = e,
                            r = ah(e, ['userId']);
                        return iV(this.options.token) && !t ? ((r.userId = 'anonymous'), r) : e;
                    }
                    setTrackingIdIfTrackingIdNotPresent(e) {
                        let {trackingId: t} = e,
                            r = ah(e, ['trackingId']);
                        return t
                            ? e
                            : (r.hasOwnProperty('custom') &&
                                  aZ(r.custom) &&
                                  (r.custom.hasOwnProperty('context_website') || r.custom.hasOwnProperty('siteName')) &&
                                  (r.trackingId = r.custom.context_website || r.custom.siteName),
                              r.hasOwnProperty('customData') &&
                                  aZ(r.customData) &&
                                  (r.customData.hasOwnProperty('context_website') ||
                                      r.customData.hasOwnProperty('siteName')) &&
                                  (r.trackingId = r.customData.context_website || r.customData.siteName),
                              r);
                    }
                    limit(e, t) {
                        return 'string' != typeof e ? e : e.substring(0, t);
                    }
                    get baseUrl() {
                        return (function (e = i_.default, t = 'v15', r = !1) {
                            return ((e = e.replace(/\/$/, '')), r)
                                ? `${e}/${t}`
                                : `${e}${e.endsWith('/rest') || e.endsWith('/rest/ua') ? '' : '/rest'}/${t}`;
                        })(this.options.endpoint, this.options.version, this.options.isCustomEndpoint);
                    }
                };
            (((n = i$ || (i$ = {})).contextChanged = 'contextChanged'),
                (n.expandToFullUI = 'expandToFullUI'),
                (n.openUserActions = 'openUserActions'),
                (n.showPrecedingSessions = 'showPrecedingSessions'),
                (n.showFollowingSessions = 'showFollowingSessions'),
                (n.clickViewedDocument = 'clickViewedDocument'),
                (n.clickPageView = 'clickPageView'),
                ((a = c || (c = {})).interfaceLoad = 'interfaceLoad'),
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
            var iN = {
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
                    [i$.expandToFullUI]: 'interface',
                    [i$.openUserActions]: 'User Actions',
                    [i$.showPrecedingSessions]: 'User Actions',
                    [i$.showFollowingSessions]: 'User Actions',
                    [i$.clickViewedDocument]: 'User Actions',
                    [i$.clickPageView]: 'User Actions',
                    [c.caseDetach]: 'case',
                    [c.likeGeneratedAnswer]: 'generatedAnswer',
                    [c.dislikeGeneratedAnswer]: 'generatedAnswer',
                    [c.openGeneratedAnswerSource]: 'generatedAnswer',
                    [c.generatedAnswerStreamEnd]: 'generatedAnswer',
                },
                iz = class {
                    constructor() {
                        ((this.runtime = new iT()), (this.currentVisitorId = ''));
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
                        return this.makeEvent(aF.search);
                    }
                    sendSearchEvent() {
                        return Promise.resolve();
                    }
                    makeClickEvent() {
                        return this.makeEvent(aF.click);
                    }
                    sendClickEvent() {
                        return Promise.resolve();
                    }
                    makeCustomEvent() {
                        return this.makeEvent(aF.custom);
                    }
                    sendCustomEvent() {
                        return Promise.resolve();
                    }
                    makeViewEvent() {
                        return this.makeEvent(aF.view);
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
                        return aJ;
                    }
                },
                iB = (e) => {
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
            function iH(e) {
                let t = 'string' == typeof e.partialQueries ? e.partialQueries : iB(e.partialQueries),
                    r = 'string' == typeof e.suggestions ? e.suggestions : iB(e.suggestions);
                return Object.assign(Object.assign({}, e), {partialQueries: t, suggestions: r});
            }
            var iY = class {
                    constructor(e, t) {
                        ((this.opts = e), (this.provider = t));
                        let r = !1 === e.enableAnalytics || iL();
                        this.coveoAnalyticsClient = r ? new iz() : new iQ(e);
                    }
                    disable() {
                        (this.coveoAnalyticsClient instanceof iQ && this.coveoAnalyticsClient.clear(),
                            (this.coveoAnalyticsClient = new iz()));
                    }
                    enable() {
                        this.coveoAnalyticsClient = new iQ(this.opts);
                    }
                    makeInterfaceLoad() {
                        return this.makeSearchEvent(c.interfaceLoad);
                    }
                    logInterfaceLoad() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeInterfaceLoad()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecommendationInterfaceLoad() {
                        return this.makeSearchEvent(c.recommendationInterfaceLoad);
                    }
                    logRecommendationInterfaceLoad() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendationInterfaceLoad()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRecommendation() {
                        return this.makeCustomEvent(c.recommendation);
                    }
                    logRecommendation() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendation()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecommendationOpen(e, t) {
                        return this.makeClickEvent(c.recommendationOpen, e, t);
                    }
                    logRecommendationOpen(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeRecommendationOpen(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterClearAll(e) {
                        return this.makeSearchEvent(c.staticFilterClearAll, e);
                    }
                    logStaticFilterClearAll(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterClearAll(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterSelect(e) {
                        return this.makeSearchEvent(c.staticFilterSelect, e);
                    }
                    logStaticFilterSelect(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterSelect(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeStaticFilterDeselect(e) {
                        return this.makeSearchEvent(c.staticFilterDeselect, e);
                    }
                    logStaticFilterDeselect(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeStaticFilterDeselect(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeFetchMoreResults() {
                        return this.makeCustomEvent(c.pagerScrolling, {type: 'getMoreResults'});
                    }
                    logFetchMoreResults() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFetchMoreResults()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeInterfaceChange(e) {
                        return this.makeSearchEvent(c.interfaceChange, e);
                    }
                    logInterfaceChange(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeInterfaceChange(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDidYouMeanAutomatic() {
                        return this.makeSearchEvent(c.didyoumeanAutomatic);
                    }
                    logDidYouMeanAutomatic() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeDidYouMeanAutomatic()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDidYouMeanClick() {
                        return this.makeSearchEvent(c.didyoumeanClick);
                    }
                    logDidYouMeanClick() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeDidYouMeanClick()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeResultsSort(e) {
                        return this.makeSearchEvent(c.resultsSort, e);
                    }
                    logResultsSort(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeResultsSort(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxSubmit() {
                        return this.makeSearchEvent(c.searchboxSubmit);
                    }
                    logSearchboxSubmit() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxSubmit()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxClear() {
                        return this.makeSearchEvent(c.searchboxClear);
                    }
                    logSearchboxClear() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxClear()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchboxAsYouType() {
                        return this.makeSearchEvent(c.searchboxAsYouType);
                    }
                    logSearchboxAsYouType() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeSearchboxAsYouType()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeBreadcrumbFacet(e) {
                        return this.makeSearchEvent(c.breadcrumbFacet, e);
                    }
                    logBreadcrumbFacet(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeBreadcrumbFacet(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeBreadcrumbResetAll() {
                        return this.makeSearchEvent(c.breadcrumbResetAll);
                    }
                    logBreadcrumbResetAll() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeBreadcrumbResetAll()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDocumentQuickview(e, t) {
                        return this.makeClickEvent(c.documentQuickview, e, t);
                    }
                    logDocumentQuickview(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeDocumentQuickview(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDocumentOpen(e, t) {
                        return this.makeClickEvent(c.documentOpen, e, t);
                    }
                    logDocumentOpen(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeDocumentOpen(e, t)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeOmniboxAnalytics(e) {
                        return this.makeSearchEvent(c.omniboxAnalytics, iH(e));
                    }
                    logOmniboxAnalytics(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeOmniboxAnalytics(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeOmniboxFromLink(e) {
                        return this.makeSearchEvent(c.omniboxFromLink, iH(e));
                    }
                    logOmniboxFromLink(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeOmniboxFromLink(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchFromLink() {
                        return this.makeSearchEvent(c.searchFromLink);
                    }
                    logSearchFromLink() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeSearchFromLink()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerNotify(e) {
                        return this.makeCustomEvent(c.triggerNotify, e);
                    }
                    logTriggerNotify(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerNotify(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeTriggerExecute(e) {
                        return this.makeCustomEvent(c.triggerExecute, e);
                    }
                    logTriggerExecute(e) {
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerQuery()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeUndoTriggerQuery(e) {
                        return this.makeSearchEvent(c.undoTriggerQuery, e);
                    }
                    logUndoTriggerQuery(e) {
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeTriggerRedirect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerResize(e) {
                        return this.makeCustomEvent(c.pagerResize, e);
                    }
                    logPagerResize(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makePagerResize(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerNumber(e) {
                        return this.makeCustomEvent(c.pagerNumber, e);
                    }
                    logPagerNumber(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makePagerNumber(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerNext(e) {
                        return this.makeCustomEvent(c.pagerNext, e);
                    }
                    logPagerNext(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makePagerNext(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerPrevious(e) {
                        return this.makeCustomEvent(c.pagerPrevious, e);
                    }
                    logPagerPrevious(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makePagerPrevious(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makePagerScrolling() {
                        return this.makeCustomEvent(c.pagerScrolling);
                    }
                    logPagerScrolling() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makePagerScrolling()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetClearAll(e) {
                        return this.makeSearchEvent(c.facetClearAll, e);
                    }
                    logFacetClearAll(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFacetClearAll(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSearch(e) {
                        return this.makeSearchEvent(c.facetSearch, e);
                    }
                    logFacetSearch(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSearch(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSelect(e) {
                        return this.makeSearchEvent(c.facetSelect, e);
                    }
                    logFacetSelect(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSelect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetDeselect(e) {
                        return this.makeSearchEvent(c.facetDeselect, e);
                    }
                    logFacetDeselect(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFacetDeselect(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetExclude(e) {
                        return this.makeSearchEvent(c.facetExclude, e);
                    }
                    logFacetExclude(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFacetExclude(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetUnexclude(e) {
                        return this.makeSearchEvent(c.facetUnexclude, e);
                    }
                    logFacetUnexclude(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFacetUnexclude(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetSelectAll(e) {
                        return this.makeSearchEvent(c.facetSelectAll, e);
                    }
                    logFacetSelectAll(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFacetSelectAll(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetUpdateSort(e) {
                        return this.makeSearchEvent(c.facetUpdateSort, e);
                    }
                    logFacetUpdateSort(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFacetUpdateSort(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetShowMore(e) {
                        return this.makeCustomEvent(c.facetShowMore, e);
                    }
                    logFacetShowMore(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFacetShowMore(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeFacetShowLess(e) {
                        return this.makeCustomEvent(c.facetShowLess, e);
                    }
                    logFacetShowLess(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeFacetShowLess(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryError(e) {
                        return this.makeCustomEvent(c.queryError, e);
                    }
                    logQueryError(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeQueryError(e)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorBack() {
                        return ag(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(c.queryErrorBack);
                            return {
                                description: e.description,
                                log: () =>
                                    ag(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(c.queryErrorBack)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorBack() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorBack()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorRetry() {
                        return ag(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(c.queryErrorRetry);
                            return {
                                description: e.description,
                                log: () =>
                                    ag(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(c.queryErrorRetry)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorRetry() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorRetry()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeQueryErrorClear() {
                        return ag(this, void 0, void 0, function* () {
                            let e = yield this.makeCustomEvent(c.queryErrorClear);
                            return {
                                description: e.description,
                                log: () =>
                                    ag(this, void 0, void 0, function* () {
                                        return (
                                            yield e.log({searchUID: this.provider.getSearchUID()}),
                                            this.logSearchEvent(c.queryErrorClear)
                                        );
                                    }),
                            };
                        });
                    }
                    logQueryErrorClear() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeQueryErrorClear()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeLikeSmartSnippet() {
                        return this.makeCustomEvent(c.likeSmartSnippet);
                    }
                    logLikeSmartSnippet() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeLikeSmartSnippet()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeDislikeSmartSnippet() {
                        return this.makeCustomEvent(c.dislikeSmartSnippet);
                    }
                    logDislikeSmartSnippet() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeDislikeSmartSnippet()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeExpandSmartSnippet() {
                        return this.makeCustomEvent(c.expandSmartSnippet);
                    }
                    logExpandSmartSnippet() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeExpandSmartSnippet()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeCollapseSmartSnippet() {
                        return this.makeCustomEvent(c.collapseSmartSnippet);
                    }
                    logCollapseSmartSnippet() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeCollapseSmartSnippet()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetFeedbackModal() {
                        return this.makeCustomEvent(c.openSmartSnippetFeedbackModal);
                    }
                    logOpenSmartSnippetFeedbackModal() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetFeedbackModal()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeCloseSmartSnippetFeedbackModal() {
                        return this.makeCustomEvent(c.closeSmartSnippetFeedbackModal);
                    }
                    logCloseSmartSnippetFeedbackModal() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeCloseSmartSnippetFeedbackModal()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeSmartSnippetFeedbackReason(e, t) {
                        return this.makeCustomEvent(c.sendSmartSnippetReason, {reason: e, details: t});
                    }
                    logSmartSnippetFeedbackReason(e, t) {
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeCollapseSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowMoreSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(c.showMoreSmartSnippetSuggestion, e);
                    }
                    logShowMoreSmartSnippetSuggestion(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeShowMoreSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowLessSmartSnippetSuggestion(e) {
                        return this.makeCustomEvent(c.showLessSmartSnippetSuggestion, e);
                    }
                    logShowLessSmartSnippetSuggestion(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeShowLessSmartSnippetSuggestion(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenSmartSnippetSource(e, t) {
                        return this.makeClickEvent(c.openSmartSnippetSource, e, t);
                    }
                    logOpenSmartSnippetSource(e, t) {
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeCopyToClipboard(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    logOpenSmartSnippetSuggestionSource(e, t) {
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeOpenSmartSnippetSuggestionInlineLink(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRecentQueryClick() {
                        return this.makeSearchEvent(c.recentQueryClick);
                    }
                    logRecentQueryClick() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeRecentQueryClick()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeClearRecentQueries() {
                        return this.makeCustomEvent(c.clearRecentQueries);
                    }
                    logClearRecentQueries() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeClearRecentQueries()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeRecentResultClick(e, t) {
                        return this.makeCustomEvent(c.recentResultClick, {info: e, identifier: t});
                    }
                    logRecentResultClick(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeRecentResultClick(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeClearRecentResults() {
                        return this.makeCustomEvent(c.clearRecentResults);
                    }
                    logClearRecentResults() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeClearRecentResults()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeNoResultsBack() {
                        return this.makeSearchEvent(c.noResultsBack);
                    }
                    logNoResultsBack() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeNoResultsBack()).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeShowMoreFoldedResults(e, t) {
                        return this.makeClickEvent(c.showMoreFoldedResults, e, t);
                    }
                    logShowMoreFoldedResults(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeShowMoreFoldedResults(e, t)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeShowLessFoldedResults() {
                        return this.makeCustomEvent(c.showLessFoldedResults);
                    }
                    logShowLessFoldedResults() {
                        return ag(this, void 0, void 0, function* () {
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
                    makeCustomEvent(e, t, r = iN[e]) {
                        return ag(this, void 0, void 0, function* () {
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
                    logCustomEvent(e, t, r = iN[e]) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEvent(e, t, r)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeCustomEventWithType(e, t, r) {
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeCustomEventWithType(e, t, r)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    logSearchEvent(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeSearchEvent(e, t)).log({searchUID: this.provider.getSearchUID()});
                        });
                    }
                    makeSearchEvent(e, t) {
                        return ag(this, void 0, void 0, function* () {
                            let r = yield this.getBaseSearchEventRequest(e, t),
                                n = yield this.coveoAnalyticsClient.makeSearchEvent(r);
                            return {
                                description: this.makeEventDescription(n, e),
                                log: ({searchUID: e}) => n.log({searchQueryUid: e}),
                            };
                        });
                    }
                    makeClickEvent(e, t, r, n) {
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeClickEvent(e, t, r, n)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    getBaseSearchEventRequest(e, t) {
                        return ag(this, void 0, void 0, function* () {
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
                        return ag(this, void 0, void 0, function* () {
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
                        return this.coveoAnalyticsClient instanceof iQ
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
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeLikeGeneratedAnswer(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeDislikeGeneratedAnswer(e) {
                        return this.makeCustomEvent(c.dislikeGeneratedAnswer, e);
                    }
                    logDislikeGeneratedAnswer(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeDislikeGeneratedAnswer(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeOpenGeneratedAnswerSource(e) {
                        return this.makeCustomEvent(c.openGeneratedAnswerSource, e);
                    }
                    logOpenGeneratedAnswerSource(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeOpenGeneratedAnswerSource(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeRetryGeneratedAnswer() {
                        return this.makeSearchEvent(c.retryGeneratedAnswer);
                    }
                    logRetryGeneratedAnswer() {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeRetryGeneratedAnswer()).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                    makeGeneratedAnswerStreamEnd(e) {
                        return this.makeCustomEvent(c.generatedAnswerStreamEnd, e);
                    }
                    logGeneratedAnswerStreamEnd(e) {
                        return ag(this, void 0, void 0, function* () {
                            return (yield this.makeGeneratedAnswerStreamEnd(e)).log({
                                searchUID: this.provider.getSearchUID(),
                            });
                        });
                    }
                },
                iW = Object.assign({}, {pageview: 'pageview', event: 'event'});
            (Object.keys(iW).map((e) => iW[e]),
                ((i = d || (d = {})).click = 'click'),
                (i.flowStart = 'flowStart'),
                ((o = f || (f = {})).enterInterface = 'ticket_create_start'),
                (o.fieldUpdate = 'ticket_field_update'),
                (o.fieldSuggestionClick = 'ticket_classification_click'),
                (o.suggestionClick = 'suggestion_click'),
                (o.suggestionRate = 'suggestion_rate'),
                (o.nextCaseStep = 'ticket_next_stage'),
                (o.caseCancelled = 'ticket_cancel'),
                (o.caseSolved = 'ticket_cancel'),
                (o.caseCreated = 'ticket_create'),
                ((s = p || (p = {})).quit = 'Quit'),
                (s.solved = 'Solved'));
            var iJ = (e, t) =>
                    'productListing' in e && e.productListing
                        ? e.productListing.facets.results.find((e) => e.facetId === t)
                        : 'search' in e && e.search
                          ? e.search.response.facets.find((e) => e.facetId === t)
                          : void 0,
                iG = (e, t) => {
                    var r;
                    return null == (r = e.facetSet[t]) ? void 0 : r.request;
                },
                iK = (e, t) => {
                    let r = iJ(e, t);
                    if (r && r.facetId in e.facetSet) return r;
                },
                iZ = (e, t) => {
                    let r = iK(e, t);
                    return r ? r.values.filter((e) => 'idle' !== e.state) : [];
                },
                iX = (e) => ('productListing' in e ? e.productListing.isLoading : e.search.isLoading);
            function i0(e) {
                if (!e) return {parents: [], values: []};
                let t = [],
                    r = e;
                for (; r.length && r[0].children.length; ) ((t = [...t, ...r]), (r = r[0].children));
                let n = r.find((e) => 'selected' === e.state);
                return (n && ((t = [...t, n]), (r = [])), {parents: t, values: r});
            }
            var i1 = (e, t) => {
                    let r = iJ(e, t);
                    if (r && r.facetId in e.categoryFacetSet) return r;
                },
                i2 = (e, t) => {
                    var r;
                    return null == (r = e.categoryFacetSet[t]) ? void 0 : r.request;
                },
                i5 = (e, t) => {
                    let r = i1(e, t);
                    return i0(null == r ? void 0 : r.values).parents;
                },
                i3 = (e, t) => {
                    let r = i2(e, t);
                    return i0(null == r ? void 0 : r.currentValues).parents;
                },
                i4 = (e, t) => {
                    let r = od(t, e),
                        n = r ? r.field : '',
                        a = oc(n, e);
                    return {facetId: e, facetField: n, facetTitle: a};
                };
            function i6(e, t) {
                let {facetId: r, facetValue: n} = e,
                    a = i4(r, t),
                    i = of(t, r);
                return {...a, facetValue: 'hierarchical' === i ? oo(t, r) : n};
            }
            function i8(e) {
                var t, r, n, a, i;
                return {
                    facetSet: null != (t = e.facetSet) ? t : {},
                    categoryFacetSet: null != (r = e.categoryFacetSet) ? r : {},
                    dateFacetSet: null != (n = e.dateFacetSet) ? n : {},
                    numericFacetSet: null != (a = e.numericFacetSet) ? a : {},
                    automaticFacetSet: null != (i = e.automaticFacetSet) ? i : nK(),
                };
            }
            var i9 = (e) => {
                    let t = [];
                    return (
                        ot(e).forEach((r, n) => {
                            let a = of(e, r.facetId),
                                i = ou(r, n + 1);
                            if (oe(r)) {
                                if (!i3(e, r.facetId).length) return;
                                t.push({...i, ...os(e, r.facetId), facetType: a, state: 'selected'});
                                return;
                            }
                            r.currentValues.forEach((e, n) => {
                                if ('idle' === e.state) return;
                                let o = on(e, n + 1, a),
                                    s = i7(r) ? oi(e) : oa(e);
                                t.push({...i, ...o, ...s});
                            });
                        }),
                        or(e).forEach((e, r) => {
                            let n = ol(e, r + 1);
                            e.values.forEach((e, r) => {
                                if ('idle' === e.state) return;
                                let a = on(e, r + 1, 'specific'),
                                    i = oi(e);
                                t.push({...n, ...a, ...i});
                            });
                        }),
                        t
                    );
                },
                i7 = (e) => 'specific' === e.type,
                oe = (e) => 'hierarchical' === e.type,
                ot = (e) =>
                    [
                        ...Object.values(e.facetSet),
                        ...Object.values(e.categoryFacetSet),
                        ...Object.values(e.dateFacetSet),
                        ...Object.values(e.numericFacetSet),
                    ].map((e) => e.request),
                or = (e) => [...Object.values(e.automaticFacetSet.set)].map((e) => e.response),
                on = (e, t, r) => ({state: e.state, valuePosition: t, facetType: r}),
                oa = (e) => ({
                    displayValue: `${e.start}..${e.end}`,
                    value: `${e.start}..${e.end}`,
                    start: e.start,
                    end: e.end,
                    endInclusive: e.endInclusive,
                }),
                oi = (e) => ({displayValue: e.value, value: e.value}),
                oo = (e, t) =>
                    i3(e, t)
                        .map((e) => e.value)
                        .join(';'),
                os = (e, t) => {
                    let r = oo(e, t);
                    return {value: r, valuePosition: 1, displayValue: r};
                },
                ol = (e, t) => ({title: oc(e.field, e.field), field: e.field, id: e.field, facetPosition: t}),
                ou = (e, t) => ({title: oc(e.field, e.facetId), field: e.field, id: e.facetId, facetPosition: t}),
                oc = (e, t) => `${e}_${t}`,
                od = (e, t) => {
                    var r, n, a, i, o;
                    return (
                        (null == (r = e.facetSet[t]) ? void 0 : r.request) ||
                        (null == (n = e.categoryFacetSet[t]) ? void 0 : n.request) ||
                        (null == (a = e.dateFacetSet[t]) ? void 0 : a.request) ||
                        (null == (i = e.numericFacetSet[t]) ? void 0 : i.request) ||
                        (null == (o = e.automaticFacetSet.set[t]) ? void 0 : o.response)
                    );
                },
                of = (e, t) => {
                    let r = od(e, t);
                    return r ? r.type : 'specific';
                },
                op = '2.27.0',
                oh = (e) => {
                    let t = e.configuration.search.locale.split('-')[0];
                    return t && 2 === t.length ? t : 'en';
                },
                og = class {
                    constructor(e) {
                        ((this.getState = e), (this.state = e()));
                    }
                    getLanguage() {
                        return oh(this.state);
                    }
                    getBaseMetadata() {
                        let {context: e} = this.state,
                            t = (null == e ? void 0 : e.contextValues) || {},
                            r = {};
                        for (let [e, n] of Object.entries(t)) r[`context_${e}`] = n;
                        return ((r.coveoHeadlessVersion = op), r);
                    }
                    getOriginContext() {
                        return this.state.configuration.analytics.originContext;
                    }
                    getOriginLevel1() {
                        return this.state.searchHub || r3();
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
                ov = class extends og {
                    constructor() {
                        (super(...arguments), (this.initialState = nU()));
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
                om = ({
                    logger: e,
                    getState: t,
                    analyticsClientMiddleware: r = (e, t) => t,
                    preprocessRequest: n,
                    provider: a = new ov(t),
                }) => {
                    let i = t(),
                        o = i.configuration.accessToken,
                        s = i.configuration.analytics.apiBaseUrl,
                        l = i.configuration.analytics.runtimeEnvironment,
                        u = i.configuration.analytics.enabled,
                        c = new iY(
                            {
                                token: o,
                                endpoint: s,
                                runtimeEnvironment: l,
                                preprocessRequest: n,
                                beforeSendHooks: [
                                    r,
                                    (t, r) => (e.info({...r, type: t, endpoint: s, token: o}, 'Analytics request'), r),
                                ],
                            },
                            a,
                        );
                    return (u || c.disable(), c);
                },
                oy = (e) => new iQ(e).getCurrentVisitorId(),
                oS = (e) => {
                    let t = new iQ(e);
                    (t.clear(), t.deleteHttpOnlyVisitorId());
                },
                ob = new aM.HistoryStore(),
                ow = class extends og {
                    getFacetState() {
                        return i9(i8(this.getState()));
                    }
                    getPipeline() {
                        var e;
                        return (
                            this.state.pipeline ||
                            (null == (e = this.state.search) ? void 0 : e.response.pipeline) ||
                            ow.fallbackPipelineName
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
                            r8().response.searchUid
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
                                ow.fallbackPipelineName;
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
                        return (null == (e = this.state.query) ? void 0 : e.q) || nO().q;
                    }
                    get responseTime() {
                        var e;
                        return (null == (e = this.state.search) ? void 0 : e.duration) || r8().duration;
                    }
                    get numberOfResults() {
                        var e;
                        return (
                            (null == (e = this.state.search) ? void 0 : e.response.totalCountFiltered) ||
                            r8().response.totalCountFiltered
                        );
                    }
                },
                oI = ow;
            oI.fallbackPipelineName = 'default';
            var oC = ({
                    logger: e,
                    getState: t,
                    analyticsClientMiddleware: r = (e, t) => t,
                    preprocessRequest: n,
                    provider: a = new oI(t),
                }) => {
                    let i = t(),
                        o = i.configuration.accessToken,
                        s = i.configuration.analytics.apiBaseUrl,
                        l = i.configuration.analytics.runtimeEnvironment,
                        u = i.configuration.analytics.enabled,
                        c = new iY(
                            {
                                token: o,
                                endpoint: s,
                                runtimeEnvironment: l,
                                preprocessRequest: n,
                                beforeSendHooks: [
                                    r,
                                    (t, r) => (e.info({...r, type: t, endpoint: s, token: o}, 'Analytics request'), r),
                                ],
                            },
                            a,
                        );
                    return (u || c.disable(), c);
                },
                ok = () => {
                    let e = ob
                        .getHistory()
                        .reverse()
                        .find((e) => 'PageView' === e.name && e.value);
                    return e ? e.value : '';
                };
            function oO(e) {
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
            var oq =
                (((l = oq || {})[(l.Search = 0)] = 'Search'),
                (l[(l.Custom = 1)] = 'Custom'),
                (l[(l.Click = 2)] = 'Click'),
                l);
            function ox(e, t) {
                let r = (t) => Object.assign(tU(e, t), {instantlyCallable: !0}),
                    n = r(async (e, {getState: r, extra: n}) => {
                        let {analyticsClientMiddleware: a, preprocessRequest: i, logger: o} = n;
                        return await (
                            await t({getState: r, analyticsClientMiddleware: a, preprocessRequest: i, logger: o})
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
                            let {description: o, log: s} = await t({
                                getState: e,
                                analyticsClientMiddleware: n,
                                preprocessRequest: a,
                                logger: i,
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
            var oR = (e, t, r, n = (e) => new oI(e)) =>
                    ox(e, async ({getState: e, analyticsClientMiddleware: a, preprocessRequest: i, logger: o}) => {
                        let s = oC({
                                getState: e,
                                logger: o,
                                analyticsClientMiddleware: a,
                                preprocessRequest: i,
                                provider: n(e),
                            }),
                            l = await r(s, e());
                        return {
                            description: null == l ? void 0 : l.description,
                            log: async ({state: e}) => {
                                let r = await (null == l ? void 0 : l.log({searchUID: n(() => e).getSearchUID()}));
                                return (
                                    o.info({client: s.coveoAnalyticsClient, response: r}, 'Analytics response'),
                                    {analyticsType: t}
                                );
                            },
                        };
                    }),
                oA = (e, t) => {
                    var r, n, a, i;
                    let o, s, l;
                    let u = -1,
                        c = null == (r = t.search) ? void 0 : r.results;
                    return (
                        (u = oP(e, c)) < 0 &&
                            (u = (function (e, t) {
                                for (let [r, n] of t.entries()) if (-1 !== oP(e, oO(n))) return r;
                                return -1;
                            })(e, c)),
                        u < 0 && (u = 0),
                        (i = u + (null != (a = null == (n = t.pagination) ? void 0 : n.firstResult) ? a : 0)),
                        {
                            collectionName: 'string' == typeof (o = e.raw.collection) ? o : 'default',
                            documentAuthor: rS((s = e.raw.author))
                                ? 'unknown'
                                : Array.isArray(s)
                                  ? s.join(';')
                                  : `${s}`,
                            documentPosition: i + 1,
                            documentTitle: e.title,
                            documentUri: e.uri,
                            documentUriHash: e.raw.urihash,
                            documentUrl: e.clickUri,
                            rankingModifier: e.rankingModifier || '',
                            sourceName: rS((l = e.raw.source)) ? 'unknown' : l,
                            queryPipeline: t.pipeline || nN(),
                        }
                    );
                },
                oE = (e) => (
                    e.raw.permanentid ||
                        console.warn(
                            'Missing field permanentid on result. This might cause many issues with your Coveo deployment. See https://docs.coveo.com/en/1913 and https://docs.coveo.com/en/1640 for more information.',
                            e,
                        ),
                    {contentIDKey: 'permanentid', contentIDValue: e.raw.permanentid || ''}
                ),
                oF = {urihash: new rO(), sourcetype: new rO(), permanentid: new rO()},
                oD = {
                    uniqueId: rD,
                    raw: new rx({values: oF}),
                    title: rD,
                    uri: rD,
                    clickUri: rD,
                    rankingModifier: new rO({required: !1, emptyAllowed: !0}),
                },
                oj = (e) => {
                    var t;
                    return new rv(oD).validate(
                        Object.assign({}, ...Object.keys(oD).map((t) => ({[t]: e[t]})), {
                            raw: ((t = e.raw), Object.assign({}, ...Object.keys(oF).map((e) => ({[e]: t[e]})))),
                        }),
                    );
                };
            function oP(e, t = []) {
                return t.findIndex(({uniqueId: t}) => t === e.uniqueId);
            }
            var oT = (e, t, r, n = (e) => new ov(e)) =>
                    ox(e, async ({getState: e, analyticsClientMiddleware: a, preprocessRequest: i, logger: o}) => {
                        let s = om({
                                getState: e,
                                logger: o,
                                analyticsClientMiddleware: a,
                                preprocessRequest: i,
                                provider: n(e),
                            }),
                            l = await r(s, e());
                        return {
                            description: null == l ? void 0 : l.description,
                            log: async ({state: e}) => {
                                let r = await (null == l ? void 0 : l.log({searchUID: n(() => e).getSearchUID()}));
                                return (
                                    o.info({client: s.coveoAnalyticsClient, response: r}, 'Analytics response'),
                                    {analyticsType: t}
                                );
                            },
                        };
                    }),
                oV = () => oR('analytics/interface/load', oq.Search, (e) => e.makeInterfaceLoad()),
                oM = () =>
                    oR('analytics/interface/change', oq.Search, (e, t) =>
                        e.makeInterfaceChange({interfaceChangeTo: t.configuration.analytics.originLevel2}),
                    ),
                oU = () => oR('analytics/interface/searchFromLink', oq.Search, (e) => e.makeSearchFromLink()),
                oL = (e) => oR('analytics/interface/omniboxFromLink', oq.Search, (t) => t.makeOmniboxFromLink(e)),
                o$ = () => rj,
                o_ = () => rD,
                oQ = tI('configuration/updateBasicConfiguration', (e) =>
                    rM(e, {accessToken: rj, organizationId: rj, platformUrl: rj}),
                ),
                oN = tI('configuration/updateSearchConfiguration', (e) =>
                    rM(e, {
                        apiBaseUrl: rj,
                        pipeline: new rO({required: !1, emptyAllowed: !0}),
                        searchHub: rj,
                        timezone: rj,
                        locale: rj,
                        authenticationProviders: new rA({required: !1, each: rD}),
                    }),
                ),
                oz = tI(
                    'configuration/updateAnalyticsConfiguration',
                    (e) => (
                        n7() && (e.enabled = !1),
                        rM(e, {
                            enabled: new rI({default: !0}),
                            originContext: o$(),
                            originLevel2: o$(),
                            originLevel3: o$(),
                            apiBaseUrl: rj,
                            runtimeEnvironment: new rm(),
                            anonymous: new rI({default: !1}),
                            deviceId: rj,
                            userDisplayName: rj,
                            documentLocation: rj,
                        })
                    ),
                ),
                oB = tI('configuration/analytics/disable'),
                oH = tI('configuration/analytics/enable'),
                oY = tI('configuration/analytics/originlevel2', (e) => rM(e, {originLevel2: o_()})),
                oW = tI('configuration/analytics/originlevel3', (e) => rM(e, {originLevel3: o_()})),
                oJ = {
                    q: new rO(),
                    enableQuerySyntax: new rI(),
                    aq: new rO(),
                    cq: new rO(),
                    firstResult: new rb({min: 0}),
                    numberOfResults: new rb({min: 0}),
                    sortCriteria: new rO(),
                    f: new rx(),
                    cf: new rx(),
                    nf: new rx(),
                    df: new rx(),
                    debug: new rI(),
                    sf: new rx(),
                    tab: new rO(),
                    af: new rx(),
                },
                oG = tI('searchParameters/restore', (e) => rM(e, oJ)),
                oK = tI('debug/enable'),
                oZ = tI('debug/disable'),
                oX = tq(r2(), (e) => {
                    e.addCase(oK, () => !0)
                        .addCase(oZ, () => !1)
                        .addCase(oG, (e, t) => {
                            var r;
                            return null != (r = t.payload.debug) ? r : e;
                        });
                }),
                o0 = tI('history/undo'),
                o1 = tI('history/redo'),
                o2 = tI('history/snapshot'),
                o5 = tU('history/back', async (e, {dispatch: t}) => {
                    (t(o0()), await t(o4()));
                }),
                o3 = tU('history/forward', async (e, {dispatch: t}) => {
                    (t(o1()), await t(o4()));
                }),
                o4 = tU('history/change', async (e, {getState: t}) => t().history.present),
                o6 = tI('pipeline/set', (e) => rM(e, new rO({required: !0, emptyAllowed: !0}))),
                o8 = tq(nN(), (e) => {
                    e.addCase(o6, (e, t) => t.payload)
                        .addCase(o4.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.pipeline) ? n : e;
                        })
                        .addCase(oN, (e, t) => t.payload.pipeline || e);
                }),
                o9 = tI('searchHub/set', (e) => rM(e, new rO({required: !0, emptyAllowed: !0}))),
                o7 = tq(r3(), (e) => {
                    e.addCase(o9, (e, t) => t.payload)
                        .addCase(o4.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.searchHub) ? n : e;
                        })
                        .addCase(oN, (e, t) => t.payload.searchHub || e);
                }),
                se = tI('breadcrumb/deselectAll'),
                st = tI('breadcrumb/deselectAllNonBreadcrumbs'),
                sr = tI('facet/updateFacetAutoSelection', (e) => rM(e, {allow: new rI({required: !0})})),
                sn = class extends oI {
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
                        return null != (e = this.activeInstantResultQuery) ? e : nO().q;
                    }
                    get responseTime() {
                        var e, t;
                        return null != (t = null == (e = this.activeInstantResultCache) ? void 0 : e.duration)
                            ? t
                            : r8().duration;
                    }
                    get numberOfResults() {
                        var e, t;
                        return null != (t = null == (e = this.activeInstantResultCache) ? void 0 : e.totalCountFiltered)
                            ? t
                            : r8().response.totalCountFiltered;
                    }
                    getSearchUID() {
                        var e;
                        return (
                            (null == (e = this.activeInstantResultCache) ? void 0 : e.searchUid) || super.getSearchUID()
                        );
                    }
                },
                sa = (e) =>
                    oR(
                        'analytics/instantResult/open',
                        oq.Click,
                        (t, r) => (oj(e), t.makeDocumentOpen(oA(e, r), oE(e))),
                        (e) => new sn(e),
                    ),
                si = () =>
                    oR(
                        'analytics/instantResult/searchboxAsYouType',
                        oq.Search,
                        (e) => e.makeSearchboxAsYouType(),
                        (e) => new sn(e),
                    ),
                so = {id: rD},
                ss = {...so, q: rP},
                sl = tI('instantResults/register', (e) => rM(e, so)),
                su = tI('instantResults/updateQuery', (e) => rM(e, ss)),
                sc = tI('instantResults/clearExpired', (e) => rM(e, so)),
                sd = new rb({required: !0, min: 0}),
                sf = tI('pagination/registerNumberOfResults', (e) => rM(e, sd)),
                sp = tI('pagination/updateNumberOfResults', (e) => rM(e, sd)),
                sh = tI('pagination/registerPage', (e) => rM(e, sd)),
                sg = tI('pagination/updatePage', (e) => rM(e, sd)),
                sv = tI('pagination/nextPage'),
                sm = tI('pagination/previousPage'),
                sy = tI('query/updateQuery', (e) => rM(e, {q: new rO(), enableQuerySyntax: new rI()})),
                sS = async (e, t) => ({
                    analytics: {
                        clientId: await oy(e),
                        clientTimestamp: new Date().toISOString(),
                        documentReferrer: e.originLevel3,
                        originContext: e.originContext,
                        ...(t && {actionCause: t.actionCause, customData: t.customData}),
                        ...(e.userDisplayName && {userDisplayName: e.userDisplayName}),
                        ...(e.documentLocation && {documentLocation: e.documentLocation}),
                        ...(e.deviceId && {deviceId: e.deviceId}),
                        ...(ok() && {pageId: ok()}),
                    },
                }),
                sb = async (e, t) => {
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
                            visitorId: await oy(e.configuration.analytics),
                            actionsHistory: ob.getHistory(),
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
                        ...(e.configuration.analytics.enabled && (await sS(e.configuration.analytics, t))),
                        ...(e.excerptLength && !rS(e.excerptLength.length) && {excerptLength: e.excerptLength.length}),
                        ...(e.configuration.search.authenticationProviders.length && {
                            authentication: e.configuration.search.authenticationProviders.join(','),
                        }),
                    };
                },
                sw = tI('didYouMean/enable'),
                sI = tI('didYouMean/disable'),
                sC = tI('didYouMean/correction', (e) => rM(e, rD)),
                sk = () => oR('analytics/didyoumean/click', oq.Search, (e) => e.makeDidYouMeanClick()),
                sO = () => oR('analytics/didyoumean/automatic', oq.Search, (e) => e.makeDidYouMeanAutomatic()),
                sq = new rx({values: {undoneQuery: rP}, options: {required: !0}}),
                sx = () =>
                    oR('analytics/trigger/query', oq.Search, (e, t) => {
                        var r;
                        return (null == (r = t.triggers) ? void 0 : r.queryModification.newQuery)
                            ? e.makeTriggerQuery()
                            : null;
                    }),
                sR = (e) =>
                    oR('analytics/trigger/query/undo', oq.Search, (t) => (rM(e, sq), t.makeUndoTriggerQuery(e))),
                sA = () =>
                    oR('analytics/trigger/notify', oq.Search, (e, t) => {
                        var r;
                        return (null == (r = t.triggers) ? void 0 : r.notifications.length)
                            ? e.makeTriggerNotify({notifications: t.triggers.notifications})
                            : null;
                    }),
                sE = tI('trigger/query/ignore', (e) => rM(e, new rO({emptyAllowed: !0, required: !0}))),
                sF = tI('trigger/query/modification', (e) =>
                    rM(e, new rx({values: {originalQuery: rj, modification: rj}})),
                ),
                sD = () => oR('search/logFetchMoreResults', oq.Search, (e) => e.makeFetchMoreResults()),
                sj = (e) =>
                    oR('search/queryError', oq.Search, (t, r) => {
                        var n, a, i, o;
                        return t.makeQueryError({
                            query: (null == (n = r.query) ? void 0 : n.q) || nO().q,
                            aq: (null == (a = r.advancedSearchQueries) ? void 0 : a.aq) || nQ().aq,
                            cq: (null == (i = r.advancedSearchQueries) ? void 0 : i.cq) || nQ().cq,
                            dq: (null == (o = r.advancedSearchQueries) ? void 0 : o.dq) || nQ().dq,
                            errorType: e.type,
                            errorMessage: e.message,
                        });
                    }),
                sP = q(M()),
                sT = q(ee()),
                sV = q(M()),
                sM = q(et());
            sV.default.extend(sM.default);
            var sU = 'YYYY/MM/DD@HH:mm:ss';
            function sL(e, t) {
                let r = (0, sV.default)(e, t);
                return r.isValid() || t ? r : (0, sV.default)(e, sU);
            }
            function s$(e) {
                return e.format(sU);
            }
            function s_(e, t) {
                let r = sL(e, t);
                if (!r.isValid())
                    throw Error(
                        `Could not parse the provided date "${e}"${t ? ` with the format "${t}""` : '. Please provide a date format string in the configuration options. See https://day.js.org/docs/en/parse/string-format for more information.'}`,
                    );
                sQ(r);
            }
            function sQ(e) {
                if (e.isBefore('1401-01-01'))
                    throw Error(`Date is before year 1401, which is unsupported by the API: ${e}`);
            }
            sP.default.extend(sT.default);
            var sN = ['past', 'now', 'next'],
                sz = ['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'],
                sB = (e) => {
                    let t = 'now' === e;
                    return {
                        amount: new rb({required: !t, min: 1}),
                        unit: new rO({required: !t, constrainTo: sz}),
                        period: new rO({required: !0, constrainTo: sN}),
                    };
                };
            function sH(e) {
                if ('string' == typeof e && !sG(e))
                    throw Error(`The value "${e}" is not respecting the relative date format "period-amount-unit"`);
                let t = 'string' == typeof e ? sK(e) : e;
                new rv(sB(t.period)).validate(t);
                let r = sY(t),
                    n = JSON.stringify(t);
                if (!r.isValid()) throw Error(`Date is invalid: ${n}`);
                sQ(r);
            }
            function sY(e) {
                let {period: t, amount: r, unit: n} = e;
                switch (t) {
                    case 'past':
                        return (0, sP.default)().subtract(r, n);
                    case 'next':
                        return (0, sP.default)().add(r, n);
                    case 'now':
                        return (0, sP.default)();
                }
            }
            function sW(e) {
                return s$(sY(sK(e)));
            }
            function sJ(e) {
                return e.toLocaleLowerCase().split('-');
            }
            function sG(e) {
                let [t, r, n] = sJ(e);
                if ('now' === t) return !0;
                if (!sN.includes(t) || !sz.includes(n)) return !1;
                let a = parseInt(r);
                return !(isNaN(a) || a <= 0);
            }
            function sK(e) {
                let [t, r, n] = sJ(e);
                return 'now' === t ? {period: 'now'} : {period: t, amount: r ? parseInt(r) : void 0, unit: n || void 0};
            }
            function sZ(e) {
                return (sH(e), sK(e));
            }
            var sX = () => ({dateFacetValueMap: {}});
            function s0(e) {
                var t;
                let r = sX();
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
                                                              sG(n) &&
                                                                  ((n = sW(n)),
                                                                  (t.dateFacetValueMap[r][`start${n}`] = e.start)),
                                                              sG(a) &&
                                                                  ((a = sW(a)),
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
            function s1(e, t) {
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
            function s2(e) {
                return Object.values(e).map((e) => e.request);
            }
            var s5 = async (e, t) => {
                var r, n, a, i, o, s, l, u;
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
                    p = s1(
                        [
                            ...s2(null != (i = e.facetSet) ? i : {}).map((e) =>
                                'alphanumericDescending' === e.sortCriteria
                                    ? {...e, sortCriteria: {type: 'alphanumeric', order: 'descending'}}
                                    : e,
                            ),
                            ...s4(null != (o = e.numericFacetSet) ? o : {}),
                            ...s4(null != (s = e.dateFacetSet) ? s : {}),
                            ...s2(null != (l = e.categoryFacetSet) ? l : {}),
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
                              .map(s3)
                              .filter((e) => e.currentValues.length > 0)
                        : void 0,
                    g = await sb(e, t);
                return s0({
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
            function s3(e) {
                let {field: t, label: r, values: n} = e;
                return {field: t, label: r, currentValues: n.filter((e) => 'selected' === e.state)};
            }
            function s4(e) {
                return s2(e).map((e) => {
                    let t = e.currentValues.some(({state: e}) => 'idle' !== e);
                    return e.generateAutomaticRanges && !t ? {...e, currentValues: []} : e;
                });
            }
            var s6 = class {
                    constructor(
                        e,
                        t = (e) => {
                            this.dispatch(sy({q: e}));
                        },
                    ) {
                        ((this.config = e), (this.onUpdateQueryForCorrection = t));
                    }
                    async fetchFromAPI({mappings: e, request: t}, r) {
                        var n, a, i;
                        let o = new Date().getTime();
                        return {
                            response:
                                'success' in (a = await this.extra.apiClient.search(t, r))
                                    ? {
                                          success: {
                                              ...a.success,
                                              facets:
                                                  null == (i = a.success.facets)
                                                      ? void 0
                                                      : i.map((t) =>
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
                                    : a,
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
                        return nv(e.response)
                            ? (this.dispatch(sj(e.response.error)), this.rejectWithValue(e.response.error))
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
                            o = await this.automaticallyRetryQueryWithCorrection(i);
                        return nv(o.response)
                            ? (this.dispatch(sj(o.response.error)), this.rejectWithValue(o.response.error))
                            : (this.analyticsAction &&
                                  this.analyticsAction()(
                                      this.dispatch,
                                      () => this.getStateAfterResponse(e.queryExecuted, e.duration, r, n),
                                      this.extra,
                                  ),
                              this.dispatch(o2(n0(this.getState()))),
                              {
                                  ...o,
                                  response: {...o.response.success, queryCorrections: n.queryCorrections},
                                  automaticallyCorrected: !0,
                                  originalQuery: a,
                                  analyticsAction: sO(),
                              });
                    }
                    async processQueryTriggersOrContinue(e) {
                        var t, r;
                        let n = this.getSuccessResponse(e);
                        if (!n) return null;
                        let a = (null == (t = n.triggers.find((e) => 'query' === e.type)) ? void 0 : t.content) || '';
                        if (!a) return null;
                        if ((null == (r = this.getState().triggers) ? void 0 : r.queryModification.queryToIgnore) === a)
                            return (this.dispatch(sE('')), null);
                        this.analyticsAction && (await this.dispatch(this.analyticsAction));
                        let i = this.getCurrentQuery(),
                            o = await this.automaticallyRetryQueryWithTriggerModification(a);
                        return nv(o.response)
                            ? (this.dispatch(sj(o.response.error)), this.rejectWithValue(o.response.error))
                            : (this.dispatch(o2(n0(this.getState()))),
                              {
                                  ...o,
                                  response: {...o.response.success},
                                  automaticallyCorrected: !1,
                                  originalQuery: i,
                                  analyticsAction: sx(),
                              });
                    }
                    processSuccessResponse(e) {
                        return (
                            this.dispatch(o2(n0(this.getState()))),
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
                        return ng(e.response) ? e.response.success : null;
                    }
                    async automaticallyRetryQueryWithCorrection(e) {
                        this.onUpdateQueryForCorrection(e);
                        let t = await this.fetchFromAPI(await s5(this.getState()), {origin: 'mainSearch'});
                        return (this.dispatch(sC(e)), t);
                    }
                    async automaticallyRetryQueryWithTriggerModification(e) {
                        return (
                            this.dispatch(sF({newQuery: e, originalQuery: this.getCurrentQuery()})),
                            this.onUpdateQueryForCorrection(e),
                            await this.fetchFromAPI(await s5(this.getState()), {origin: 'mainSearch'})
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
                                        : nO().enableQuerySyntax,
                            },
                            search: {...r8(), duration: t, response: n, results: n.results},
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
                s8 = tU('search/prepareForSearchWithQuery', (e, t) => {
                    let {dispatch: r} = t;
                    (rM(e, {q: new rO(), enableQuerySyntax: new rI(), clearFilters: new rI()}),
                        e.clearFilters && (r(se()), r(st())),
                        r(sr({allow: !0})),
                        r(sy({q: e.q, enableQuerySyntax: e.enableQuerySyntax})),
                        r(sg(1)));
                }),
                s9 = tU('search/executeSearch', async (e, t) => {
                    let r = t.getState();
                    lo(r);
                    let {analyticsClientMiddleware: n, preprocessRequest: a, logger: i} = t.extra,
                        {description: o} = await e.prepare({
                            getState: () => t.getState(),
                            analyticsClientMiddleware: n,
                            preprocessRequest: a,
                            logger: i,
                        }),
                        s = await s5(r, o),
                        l = new s6({...t, analyticsAction: e}),
                        u = await l.fetchFromAPI(s, {origin: 'mainSearch'});
                    return await l.process(u);
                }),
                s7 = tU('search/fetchPage', async (e, t) => {
                    let r = t.getState();
                    lo(r);
                    let {analyticsClientMiddleware: n, preprocessRequest: a, logger: i} = t.extra,
                        {description: o} = await e.prepare({
                            getState: () => t.getState(),
                            analyticsClientMiddleware: n,
                            preprocessRequest: a,
                            logger: i,
                        }),
                        s = new s6({...t, analyticsAction: e}),
                        l = await s5(r, o),
                        u = await s.fetchFromAPI(l, {origin: 'mainSearch'});
                    return await s.process(u);
                }),
                le = tU('search/fetchMoreResults', async (e, t) => {
                    let r = t.getState(),
                        {analyticsClientMiddleware: n, preprocessRequest: a, logger: i} = t.extra,
                        {description: o} = await sD().prepare({
                            getState: () => t.getState(),
                            analyticsClientMiddleware: n,
                            preprocessRequest: a,
                            logger: i,
                        }),
                        s = new s6({...t, analyticsAction: sD()}),
                        l = await ln(r, o),
                        u = await s.fetchFromAPI(l, {origin: 'mainSearch'});
                    return await s.process(u);
                }),
                lt = tU('search/fetchFacetValues', async (e, t) => {
                    let r = t.getState(),
                        {analyticsClientMiddleware: n, preprocessRequest: a, logger: i} = t.extra,
                        {description: o} = await e.prepare({
                            getState: () => t.getState(),
                            analyticsClientMiddleware: n,
                            preprocessRequest: a,
                            logger: i,
                        }),
                        s = new s6({...t, analyticsAction: e}),
                        l = await li(r, o),
                        u = await s.fetchFromAPI(l, {origin: 'facetValues'});
                    return await s.process(u);
                }),
                lr = tU('search/fetchInstantResults', async (e, t) => {
                    rM(e, {id: rD, q: rD, maxResultsPerQuery: new rb({required: !0, min: 1}), cacheTimeout: new rb()});
                    let {q: r, maxResultsPerQuery: n} = e,
                        a = t.getState(),
                        i = new s6({...t, analyticsAction: si()}, (r) => {
                            t.dispatch(su({q: r, id: e.id}));
                        }),
                        o = await la(a, r, n),
                        s = await i.fetchFromAPI(o, {origin: 'instantResults', disableAbortWarning: !0}),
                        l = await i.process(s);
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
                ln = async (e, t) => {
                    var r, n, a, i;
                    let o = await s5(e, t);
                    return (
                        (o.request = {
                            ...o.request,
                            firstResult:
                                (null != (n = null == (r = e.pagination) ? void 0 : r.firstResult) ? n : 0) +
                                (null != (i = null == (a = e.search) ? void 0 : a.results.length) ? i : 0),
                        }),
                        o
                    );
                },
                la = async (e, t, r) => {
                    let n = await sb(e);
                    return s0({
                        ...n,
                        ...(e.didYouMean && {enableDidYouMean: e.didYouMean.enableDidYouMean}),
                        numberOfResults: r,
                        q: t,
                    });
                },
                li = async (e, t) => {
                    let r = await s5(e, t);
                    return ((r.request.numberOfResults = 0), r);
                },
                lo = (e) => {
                    var t;
                    e.configuration.analytics.enabled &&
                        ob.addElement({
                            name: 'Query',
                            ...((null == (t = e.query) ? void 0 : t.q) && {value: e.query.q}),
                            time: JSON.stringify(new Date()),
                        });
                },
                ls = (e, t) => (rS(e[t]) ? (rS(e.raw[t]) ? null : e.raw[t]) : e[t]),
                ll = (e, t) => {
                    let r = ls(t, e);
                    return n3(r) ? r : [r];
                };
            function lu(e) {
                return '' !== e.search.response.searchUid;
            }
            function lc(e, t) {
                var r;
                let n = null != (r = t.payload) ? r : null;
                (n && ((e.response = r8().response), (e.results = []), (e.questionAnswer = r6())),
                    (e.error = n),
                    (e.isLoading = !1));
            }
            function ld(e, t) {
                ((e.error = null),
                    (e.response = t.payload.response),
                    (e.queryExecuted = t.payload.queryExecuted),
                    (e.duration = t.payload.duration),
                    (e.isLoading = !1));
            }
            function lf(e, t) {
                ((e.isLoading = !0), (e.requestId = t.meta.requestId));
            }
            var lp = tq(r8(), (e) => {
                    (e.addCase(s9.rejected, (e, t) => lc(e, t)),
                        e.addCase(le.rejected, (e, t) => lc(e, t)),
                        e.addCase(s7.rejected, (e, t) => lc(e, t)),
                        e.addCase(s9.fulfilled, (e, t) => {
                            (ld(e, t),
                                (e.results = t.payload.response.results),
                                (e.searchResponseId = t.payload.response.searchUid),
                                (e.questionAnswer = t.payload.response.questionAnswer),
                                (e.extendedResults = t.payload.response.extendedResults));
                        }),
                        e.addCase(le.fulfilled, (e, t) => {
                            (ld(e, t), (e.results = [...e.results, ...t.payload.response.results]));
                        }),
                        e.addCase(s7.fulfilled, (e, t) => {
                            (ld(e, t), (e.results = t.payload.response.results));
                        }),
                        e.addCase(lt.fulfilled, (e, t) => {
                            ((e.response.facets = t.payload.response.facets),
                                (e.response.searchUid = t.payload.response.searchUid));
                        }),
                        e.addCase(s9.pending, lf),
                        e.addCase(le.pending, lf),
                        e.addCase(s7.pending, lf));
                }),
                lh = tq(op, (e) => e),
                lg = tI('tab/register', (e) => rM(e, new rx({values: {id: rD, expression: rP}}))),
                lv = tI('tab/updateActiveTab', (e) => rM(e, rD)),
                lm = tq(r1(), (e) =>
                    e
                        .addCase(oQ, (e, t) => {
                            (t.payload.accessToken && (e.accessToken = t.payload.accessToken),
                                t.payload.organizationId && (e.organizationId = t.payload.organizationId),
                                t.payload.platformUrl &&
                                    ((e.platformUrl = t.payload.platformUrl),
                                    (e.search.apiBaseUrl = `${t.payload.platformUrl}${rX}`),
                                    (e.analytics.apiBaseUrl = (function (e, t) {
                                        if (ns(e)) return e.replace(/^(https:\/\/)platform/, '$1analytics') + r0;
                                        let r = nl(e, t);
                                        return r ? rK(t, r.environment).analytics : e;
                                    })(t.payload.platformUrl, e.organizationId))));
                        })
                        .addCase(oN, (e, t) => {
                            (t.payload.apiBaseUrl && (e.search.apiBaseUrl = t.payload.apiBaseUrl),
                                t.payload.locale && (e.search.locale = t.payload.locale),
                                t.payload.timezone && (e.search.timezone = t.payload.timezone),
                                t.payload.authenticationProviders &&
                                    (e.search.authenticationProviders = t.payload.authenticationProviders));
                        })
                        .addCase(oz, (e, t) => {
                            (rS(t.payload.enabled) ||
                                (!t.payload.enabled && e.analytics.enabled && oS(e.analytics),
                                (e.analytics.enabled = t.payload.enabled)),
                                rS(t.payload.originContext) || (e.analytics.originContext = t.payload.originContext),
                                rS(t.payload.originLevel2) || (e.analytics.originLevel2 = t.payload.originLevel2),
                                rS(t.payload.originLevel3) || (e.analytics.originLevel3 = t.payload.originLevel3),
                                rS(t.payload.apiBaseUrl) || (e.analytics.apiBaseUrl = t.payload.apiBaseUrl),
                                rS(t.payload.runtimeEnvironment) ||
                                    (e.analytics.runtimeEnvironment = t.payload.runtimeEnvironment),
                                rS(t.payload.anonymous) || (e.analytics.anonymous = t.payload.anonymous),
                                rS(t.payload.deviceId) || (e.analytics.deviceId = t.payload.deviceId),
                                rS(t.payload.userDisplayName) ||
                                    (e.analytics.userDisplayName = t.payload.userDisplayName),
                                rS(t.payload.documentLocation) ||
                                    (e.analytics.documentLocation = t.payload.documentLocation));
                        })
                        .addCase(oB, (e) => {
                            ((e.analytics.enabled = !1), oS(e.analytics));
                        })
                        .addCase(oH, (e) => {
                            e.analytics.enabled = !0;
                        })
                        .addCase(oY, (e, t) => {
                            e.analytics.originLevel2 = t.payload.originLevel2;
                        })
                        .addCase(oW, (e, t) => {
                            e.analytics.originLevel3 = t.payload.originLevel3;
                        })
                        .addCase(lv, (e, t) => {
                            e.analytics.originLevel2 = t.payload;
                        })
                        .addCase(oG, (e, t) => {
                            e.analytics.originLevel2 = t.payload.tab || e.analytics.originLevel2;
                        }),
                );
            function ly(e, t, r) {
                (void 0 === t && (t = 50), void 0 === r && (r = {}));
                var n,
                    a,
                    i,
                    o = null != (n = r.isImmediate) && n,
                    s = null != (a = r.callback) && a,
                    l = r.maxWait,
                    u = Date.now(),
                    c = [],
                    d = function () {
                        var r = [].slice.call(arguments),
                            n = this;
                        return new Promise(function (a, d) {
                            var f = o && void 0 === i;
                            if (
                                (void 0 !== i && clearTimeout(i),
                                (i = setTimeout(
                                    function () {
                                        if (((i = void 0), (u = Date.now()), !o)) {
                                            var t = e.apply(n, r);
                                            (s && s(t),
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
                                return (s && s(p), a(p));
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
            async function lS(e) {
                try {
                    return await e();
                } catch (e) {
                    return '';
                }
            }
            var lb = {configuration: lm, version: lh},
                lw = q(P()),
                lI = q(X()),
                lC = (e, t, r, n, a, i) => {
                    let o = e[t];
                    rS(o) ||
                        rS(a) ||
                        (a !== o &&
                            a !== n &&
                            (i.warn(`Mismatch on access token (JWT Token) ${t} and engine configuration.`),
                            i.warn(
                                `To remove this warning, make sure that access token value [${o}] matches engine configuration value [${r}]`,
                            )));
                },
                lk = (e, t) => !(rS(e) || t === e),
                lO = (e) => {
                    try {
                        let t = 'undefined' != typeof atob ? atob : lI.atob,
                            r = e.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'),
                            n = t(r);
                        if (!n) return !1;
                        let a = decodeURIComponent(
                            n
                                .split('')
                                .map((e) => '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2))
                                .join(''),
                        );
                        return JSON.parse(a);
                    } catch (e) {
                        return !1;
                    }
                },
                lq = (e, t) => (lk(e.searchHub, t.searchHub) && (t.searchHub = e.searchHub), t),
                lx = (e, t, r, n) => (lC(e, 'searchHub', t.searchHub, r3(), r, n), lq(e, t)),
                lR = (e, t) => (lk(e.pipeline, t.pipeline) && (t.pipeline = e.pipeline), t),
                lA = (e, t, r, n) => (lC(e, 'pipeline', t.pipeline, nN(), r, n), lR(e, t)),
                lE = (e, t) => (
                    lk(e.userDisplayName, t.configuration.analytics.userDisplayName) &&
                        (t.configuration.analytics.userDisplayName = e.userDisplayName),
                    t
                ),
                lF = (e, t, r, n) => (
                    lC(
                        e,
                        'userDisplayName',
                        t.configuration.analytics.userDisplayName,
                        r1().analytics.userDisplayName,
                        r,
                        n,
                    ),
                    lE(e, t)
                ),
                lD = (e) =>
                    tq({}, (t) => {
                        t.addCase(o9, (t, r) => {
                            let n = lO(t.configuration.accessToken);
                            return n ? lx(n, t, r.payload, e) : t;
                        })
                            .addCase(o6, (t, r) => {
                                let n = lO(t.configuration.accessToken);
                                return n ? lA(n, t, r.payload, e) : t;
                            })
                            .addCase(oQ, (e, t) => {
                                if (e.configuration.accessToken !== t.payload.accessToken) return e;
                                let {accessToken: r} = t.payload;
                                if (!r) return e;
                                let n = lO(r);
                                return n ? [lR, lq, lE].reduce((e, t) => t(n, e), e) : e;
                            })
                            .addCase(oN, (t, r) => {
                                var n;
                                let a = lO(t.configuration.accessToken);
                                if (!a) return t;
                                let i = lx(a, t, r.payload.searchHub, e);
                                return lA(a, i, null == (n = r.payload) ? void 0 : n.pipeline, e);
                            })
                            .addCase(oz, (t, r) => {
                                let n = lO(t.configuration.accessToken);
                                return n ? lF(n, t, r.payload.userDisplayName, e) : t;
                            });
                    }),
                lj = {
                    organizationId: rD,
                    accessToken: rD,
                    platformUrl: new rO({required: !1, emptyAllowed: !1}),
                    name: new rO({required: !1, emptyAllowed: !1}),
                    analytics: new rx({
                        options: {required: !1},
                        values: {
                            enabled: new rI({required: !1}),
                            originContext: new rO({required: !1}),
                            originLevel2: new rO({required: !1}),
                            originLevel3: new rO({required: !1}),
                        },
                    }),
                },
                lP = new rv({
                    ...lj,
                    search: new rx({
                        options: {required: !1},
                        values: {
                            pipeline: new rO({required: !1, emptyAllowed: !0}),
                            searchHub: rj,
                            locale: rj,
                            timezone: rj,
                            authenticationProviders: new rA({required: !1, each: rD}),
                        },
                    }),
                }),
                lT = {debug: oX, pipeline: o8, searchHub: o7, search: lp};
            function lV(e) {
                var t, r, n;
                let a, i;
                let o =
                    ((t = e.loggerOptions),
                    (0, lw.default)({
                        name: '@coveo/headless',
                        level: (null == t ? void 0 : t.level) || 'warn',
                        formatters: {log: null == t ? void 0 : t.logFormatter},
                        browser: {transmit: {send: (null == t ? void 0 : t.browserPostLogHook) || (() => {})}},
                    }));
                !(function (e, t) {
                    try {
                        lP.validate(e);
                    } catch (e) {
                        throw (t.error(e, 'Search engine configuration error'), e);
                    }
                })(e.configuration, o);
                let s = (function (e, t) {
                        let {search: r} = e;
                        return new nh({
                            logger: t,
                            preprocessRequest: e.preprocessRequest || r4,
                            postprocessSearchResponseMiddleware:
                                (null == r ? void 0 : r.preprocessSearchResponseMiddleware) || nz,
                            postprocessFacetSearchResponseMiddleware:
                                (null == r ? void 0 : r.preprocessFacetSearchResponseMiddleware) || nB,
                            postprocessQuerySuggestResponseMiddleware:
                                (null == r ? void 0 : r.preprocessQuerySuggestResponseMiddleware) || nH,
                        });
                    })(e.configuration, o),
                    l = new ap({logger: o}),
                    u = {
                        analyticsClientMiddleware: (function (e) {
                            let {analytics: t} = e;
                            return (null == t ? void 0 : t.analyticsClientMiddleware) || ((e, t) => t);
                        })((r = e.configuration)),
                        validatePayload: rV,
                        preprocessRequest: r.preprocessRequest || r4,
                        logger: o,
                        apiClient: s,
                        streamingClient: l,
                    },
                    c = (function (e, t) {
                        var r, n;
                        let a = (function (e, t) {
                                var r, n, a;
                                let i, o, s;
                                let {reducers: l} = e,
                                    u =
                                        ((n = {...lb, ...l}),
                                        (a = null != (r = e.preloadedState) ? r : {}),
                                        (i = {...n}),
                                        (s = (e) => (t, r) => {
                                            let n = e(t, r);
                                            return o ? o(n, r) : n;
                                        }),
                                        {
                                            get combinedReducer() {
                                                let e = (function (e) {
                                                    let t = {};
                                                    for (let [r, n] of e) t[r] = n;
                                                    return t;
                                                })(
                                                    Object.entries(a)
                                                        .filter(([e]) => !(e in i))
                                                        .map(([e, t]) => [e, () => t]),
                                                );
                                                return s((0, en.combineReducers)({...e, ...i}));
                                            },
                                            containsAll: (e) => Object.keys(e).every((e) => e in i),
                                            add(e) {
                                                Object.keys(e)
                                                    .filter((e) => !(e in i))
                                                    .forEach((t) => (i[t] = e[t]));
                                            },
                                            addCrossReducer(e) {
                                                o = e;
                                            },
                                        });
                                e.crossReducer && u.addCrossReducer(e.crossReducer);
                                let c = t.logger,
                                    d = (function (e, t, r) {
                                        let {preloadedState: n, configuration: a} = e,
                                            i = a.name || 'coveo-headless',
                                            o = (function (e, t) {
                                                let r, n;
                                                let {renewAccessToken: a} = e.configuration;
                                                return [
                                                    rf,
                                                    ((r = 0),
                                                    (n = ly(() => (r = 0), 500)),
                                                    (e) => (i) => async (o) => {
                                                        var s;
                                                        if ('function' != typeof o) return i(o);
                                                        let l = await i(o);
                                                        if (
                                                            (null == (s = null == l ? void 0 : l.error)
                                                                ? void 0
                                                                : s.name) !== new rH().name
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
                                                        let u = await lS(a);
                                                        (e.dispatch(oQ({accessToken: u})), e.dispatch(o));
                                                    }),
                                                    rp(t),
                                                    rd,
                                                ].concat(e.middlewares || []);
                                            })(e, t.logger);
                                        return (function ({
                                            reducer: e,
                                            preloadedState: t,
                                            middlewares: r = [],
                                            thunkExtraArguments: n,
                                            name: a,
                                        }) {
                                            return tw({
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
                                                    rh(n.logger),
                                                ],
                                            });
                                        })({
                                            preloadedState: n,
                                            reducer: r.combinedReducer,
                                            middlewares: o,
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
                                        d.dispatch(oH());
                                    },
                                    disableAnalytics() {
                                        d.dispatch(oB());
                                    },
                                    get state() {
                                        return d.getState();
                                    },
                                    logger: c,
                                    store: d,
                                };
                            })(e, t),
                            {accessToken: i, organizationId: o} = e.configuration,
                            {organizationEndpoints: s} = e.configuration,
                            l = (null == s ? void 0 : s.platform) || e.configuration.platformUrl;
                        ((!rS(e.configuration.platformUrl) ||
                            rS(null == (n = e.configuration.organizationEndpoints) ? void 0 : n.platform)) &&
                            a.logger.warn(
                                `The \`platformUrl\` (${e.configuration.platformUrl}) option will be deprecated in the next major version. Consider using the \`organizationEndpoints\` option instead. See [Organization endpoints](https://docs.coveo.com/en/mcc80216).`,
                            ),
                            ry(e.configuration.organizationEndpoints)
                                ? a.logger.warn(
                                      'The `organizationEndpoints` options was not explicitly set in the Headless engine configuration. Coveo recommends setting this option, as it has resiliency benefits and simplifies the overall configuration for multi-region deployments. See [Organization endpoints](https://docs.coveo.com/en/mcc80216).',
                                  )
                                : (function (e) {
                                      let {platform: t} = e.configuration.organizationEndpoints;
                                      if (ry(t)) return !1;
                                      let r = nu(t);
                                      return r && r.organizationId !== e.configuration.organizationId;
                                  })(e) &&
                                  a.logger.warn(
                                      `There is a mismatch between the \`organizationId\` option (${e.configuration.organizationId}) and the organization configured in the \`organizationEndpoints\` option (${null == (r = e.configuration.organizationEndpoints) ? void 0 : r.platform}). This could lead to issues that are complex to troubleshoot. Please make sure both values match.`,
                                  ),
                            a.dispatch(oQ({accessToken: i, organizationId: o, platformUrl: l})));
                        let u = (function (e, t) {
                            var r, n;
                            let a =
                                    (null == (r = e.configuration.organizationEndpoints) ? void 0 : r.analytics) ||
                                    void 0,
                                {analyticsClientMiddleware: i, ...o} = null != (n = e.configuration.analytics) ? n : {},
                                s = {...o, apiBaseUrl: a};
                            return n7()
                                ? (t.info('Analytics disabled since doNotTrack is active.'), {...s, enabled: !1})
                                : s;
                        })(e, a.logger);
                        return (u && a.dispatch(oz(u)), a);
                    })({...e, reducers: lT, crossReducer: lD(o)}, u),
                    d =
                        ((a = e.configuration.search),
                        (i = (null == (n = e.configuration.organizationEndpoints) ? void 0 : n.search) || void 0),
                        {...a, apiBaseUrl: i});
                return (
                    d && c.dispatch(oN(d)),
                    {
                        ...c,
                        get state() {
                            return c.state;
                        },
                        executeFirstSearch(e = oV()) {
                            if (lu(c.state)) return;
                            let t = s9(e);
                            c.dispatch(t);
                        },
                        executeFirstSearchAfterStandaloneSearchBoxRedirect(e) {
                            let {cause: t, metadata: r} = e,
                                n = r && 'omniboxFromLink' === t ? oL(r) : oU();
                            this.executeFirstSearch(n);
                        },
                    }
                );
            }
            function lM(e) {
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
                        let o = Symbol(),
                            s;
                        return (
                            n() &&
                                ((t = JSON.stringify(this.state)),
                                (s = e.subscribe(() => {
                                    a(this.state) && r.forEach((e) => e());
                                }))),
                            r.set(o, i),
                            () => {
                                (r.delete(o), n() && s && s());
                            }
                        );
                    },
                    get state() {
                        return {};
                    },
                };
            }
            var lU = new rA({each: rD, required: !0}),
                lL = tI('fields/registerFieldsToInclude', (e) => rM(e, lU)),
                l$ = tI('fields/fetchall/enable'),
                l_ = tI('fields/fetchall/disable'),
                lQ = tU('fields/fetchDescription', async (e, {extra: t, getState: r, rejectWithValue: n}) => {
                    let a = r(),
                        {accessToken: i, organizationId: o} = a.configuration,
                        {apiBaseUrl: s} = a.configuration.search,
                        l = await t.apiClient.fieldDescriptions({accessToken: i, organizationId: o, url: s});
                    return nv(l) ? n(l.error) : l.success.fields;
                }),
                lN = {
                    collectionField: new rO({emptyAllowed: !1, required: !1}),
                    parentField: new rO({emptyAllowed: !1, required: !1}),
                    childField: new rO({emptyAllowed: !1, required: !1}),
                    numberOfFoldedResults: new rb({min: 0, required: !1}),
                },
                lz = tI('folding/register', (e) => rM(e, lN)),
                lB = tU(
                    'folding/loadCollection',
                    async (e, {getState: t, rejectWithValue: r, extra: {apiClient: n}}) => {
                        let a = t(),
                            i = await sb(a),
                            o = await n.search(
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
                        return nv(o)
                            ? r(o.error)
                            : {
                                  collectionId: e,
                                  results: o.success.results,
                                  rootResult: a.folding.collections[e].result,
                              };
                    },
                ),
                lH = tq({fieldsToInclude: nw, fetchAllFields: !1, fieldsDescription: []}, (e) =>
                    e
                        .addCase(lL, (e, t) => {
                            e.fieldsToInclude = [...new Set(e.fieldsToInclude.concat(t.payload))];
                        })
                        .addCase(l$, (e) => {
                            e.fetchAllFields = !0;
                        })
                        .addCase(l_, (e) => {
                            e.fetchAllFields = !1;
                        })
                        .addCase(lQ.fulfilled, (e, {payload: t}) => {
                            e.fieldsDescription = t;
                        })
                        .addCase(lz, (e, {payload: t}) => {
                            var r, n, a;
                            let i = nC().fields;
                            e.fieldsToInclude.push(
                                null != (r = t.collectionField) ? r : i.collection,
                                null != (n = t.parentField) ? n : i.parent,
                                null != (a = t.childField) ? a : i.child,
                            );
                        }),
                ),
                lY = new rA({each: rD, required: !0}),
                lW = (e, t) => (rM(e, rD), rq(t) ? rM(t, rD) : rM(t, lY), {payload: {contextKey: e, contextValue: t}}),
                lJ = tI('context/set', (e) => {
                    for (let [t, r] of Object.entries(e)) lW(t, r);
                    return {payload: e};
                }),
                lG = tI('context/add', (e) => lW(e.contextKey, e.contextValue)),
                lK = tI('context/remove', (e) => rM(e, rD));
            tq(nM(), (e) => {
                e.addCase(lJ, (e, t) => {
                    e.contextValues = t.payload;
                })
                    .addCase(lG, (e, t) => {
                        e.contextValues[t.payload.contextKey] = t.payload.contextValue;
                    })
                    .addCase(lK, (e, t) => {
                        delete e.contextValues[t.payload];
                    })
                    .addCase(o4.fulfilled, (e, t) => {
                        t.payload && (e.contextValues = t.payload.context.contextValues);
                    });
            });
            var lZ = tI('dictionaryFieldContext/set', (e) => {
                    let t = rM(e, new rx({options: {required: !0}})).error;
                    if (t) return {payload: e, error: t};
                    let r = rM(Object.values(e), new rA({each: rP})).error;
                    return r ? {payload: e, error: r} : {payload: e};
                }),
                lX = tI('dictionaryFieldContext/add', (e) =>
                    rM(e, new rx({options: {required: !0}, values: {field: rP, key: rP}})),
                ),
                l0 = tI('dictionaryFieldContext/remove', (e) => rM(e, rP));
            tq(n_(), (e) => {
                e.addCase(lZ, (e, t) => {
                    e.contextValues = t.payload;
                })
                    .addCase(lX, (e, t) => {
                        let {field: r, key: n} = t.payload;
                        e.contextValues[r] = n;
                    })
                    .addCase(l0, (e, t) => {
                        delete e.contextValues[t.payload];
                    })
                    .addCase(o4.fulfilled, (e, t) => {
                        t.payload && (e.contextValues = t.payload.dictionaryFieldContext.contextValues);
                    });
            });
            var l1 = tq(
                {
                    enableDidYouMean: !1,
                    wasCorrectedTo: '',
                    wasAutomaticallyCorrected: !1,
                    queryCorrection: ny(),
                    originalQuery: '',
                },
                (e) => {
                    e.addCase(sw, (e) => {
                        e.enableDidYouMean = !0;
                    })
                        .addCase(sI, (e) => {
                            e.enableDidYouMean = !1;
                        })
                        .addCase(s9.pending, (e) => {
                            ((e.queryCorrection = ny()), (e.wasAutomaticallyCorrected = !1), (e.wasCorrectedTo = ''));
                        })
                        .addCase(s9.fulfilled, (e, t) => {
                            ((e.queryCorrection = t.payload.response.queryCorrections[0] || ny()),
                                (e.originalQuery = t.payload.originalQuery),
                                (e.wasAutomaticallyCorrected = t.payload.automaticallyCorrected));
                        })
                        .addCase(sC, (e, t) => {
                            e.wasCorrectedTo = t.payload;
                        });
                },
            );
            function l2(e) {
                let t = (function (e) {
                        !(function (e) {
                            e.addReducers({configuration: lm, didYouMean: l1});
                        })(e);
                        let t = lM(e),
                            {dispatch: r} = e;
                        r(sw());
                        let n = () => e.state;
                        return {
                            ...t,
                            get state() {
                                let e = n();
                                return {
                                    originalQuery: e.didYouMean.originalQuery,
                                    wasCorrectedTo: e.didYouMean.wasCorrectedTo,
                                    wasAutomaticallyCorrected: e.didYouMean.wasAutomaticallyCorrected,
                                    queryCorrection: e.didYouMean.queryCorrection,
                                    hasQueryCorrection:
                                        '' !== e.didYouMean.queryCorrection.correctedQuery ||
                                        '' !== e.didYouMean.wasCorrectedTo,
                                };
                            },
                            applyCorrection() {
                                r(sC(this.state.queryCorrection.correctedQuery));
                            },
                        };
                    })(e),
                    {dispatch: r} = e;
                return {
                    ...t,
                    get state() {
                        return t.state;
                    },
                    applyCorrection() {
                        (t.applyCorrection(), r(s9(sk())));
                    },
                };
            }
            var l5 = tI('facetOptions/update', (e = {freezeFacetOrder: !0}) =>
                    rM(e, {freezeFacetOrder: new rI({required: !1})}),
                ),
                l3 = tI('facetOptions/facet/enable', (e) => rM(e, rD)),
                l4 = tI('facetOptions/facet/disable', (e) => rM(e, rD)),
                l6 = {
                    facetId: rD,
                    captions: new rx({options: {required: !1}}),
                    numberOfValues: new rb({required: !1, min: 1}),
                    query: new rO({required: !1, emptyAllowed: !0}),
                },
                l8 = {
                    path: new rA({required: !0, each: rD}),
                    displayValue: rP,
                    rawValue: rP,
                    count: new rb({required: !0, min: 0}),
                },
                l9 = tI('categoryFacet/selectSearchResult', (e) => rM(e, {facetId: rD, value: new rx({values: l8})})),
                l7 = tI('categoryFacetSearch/register', (e) => rM(e, l6));
            function ue(e, t) {
                var r;
                let {facetId: n, criterion: a} = t,
                    i = null == (r = e[n]) ? void 0 : r.request;
                i && (i.sortCriteria = a);
            }
            function ut(e) {
                e &&
                    ((e.currentValues = e.currentValues.map((e) => ({...e, state: 'idle'}))),
                    (e.preventAutoSelect = !0));
            }
            function ur(e, t) {
                e && (e.numberOfValues = t);
            }
            function un(e, t) {
                let r = e[t];
                r &&
                    ((r.request.numberOfValues = r.initialNumberOfValues),
                    (r.request.currentValues = []),
                    (r.request.preventAutoSelect = !0));
            }
            function ua(e, t, r) {
                ((e.currentValues = (function (e, t) {
                    if (!e.length) return [];
                    let r = ui(e[0], t),
                        n = r;
                    for (let r of e.splice(1)) {
                        let e = ui(r, t);
                        (n.children.push(e), (n = e));
                    }
                    return ((n.state = 'selected'), (n.retrieveChildren = !0), [r]);
                })(t, r)),
                    (e.numberOfValues = t.length ? 1 : r),
                    (e.preventAutoSelect = !0));
            }
            function ui(e, t) {
                return {value: e, retrieveCount: t, children: [], state: 'idle', retrieveChildren: !1};
            }
            var uo = {
                    state: new rm({required: !0}),
                    numberOfResults: new rb({required: !0, min: 0}),
                    value: new rO({required: !0, emptyAllowed: !0}),
                    path: new rA({required: !0, each: rD}),
                    moreValuesAvailable: new rI({required: !1}),
                },
                us = {
                    facetId: rD,
                    field: rD,
                    delimitingCharacter: new rO({required: !1, emptyAllowed: !0}),
                    filterFacetCount: new rI({required: !1}),
                    injectionDepth: new rb({required: !1, min: 0}),
                    numberOfValues: new rb({required: !1, min: 1}),
                    sortCriteria: new rm({required: !1}),
                    basePath: new rA({required: !1, each: rD}),
                    filterByBasePath: new rI({required: !1}),
                },
                ul = tI('categoryFacet/register', (e) => rM(e, us)),
                uu = tI('categoryFacet/toggleSelectValue', (e) => {
                    try {
                        return (
                            rV(e.facetId, rD),
                            (function e(t) {
                                (t.children.forEach((t) => {
                                    e(t);
                                }),
                                    rV(
                                        {
                                            state: t.state,
                                            numberOfResults: t.numberOfResults,
                                            value: t.value,
                                            path: t.path,
                                            moreValuesAvailable: t.moreValuesAvailable,
                                        },
                                        uo,
                                    ));
                            })(e.selection),
                            {payload: e, error: null}
                        );
                    } catch (t) {
                        return {payload: e, error: rT(t)};
                    }
                }),
                uc = tI('categoryFacet/deselectAll', (e) => rM(e, us.facetId)),
                ud = tI('categoryFacet/updateNumberOfValues', (e) =>
                    rM(e, {facetId: us.facetId, numberOfValues: us.numberOfValues}),
                ),
                uf = tI('categoryFacet/updateSortCriterion', (e) => rM(e, {facetId: us.facetId, criterion: new rm()})),
                up = tI('categoryFacet/updateBasePath', (e) =>
                    rM(e, {facetId: us.facetId, basePath: new rA({each: rD})}),
                ),
                uh = tq({}, (e) => {
                    e.addCase(ul, (e, t) => {
                        let r = t.payload,
                            {facetId: n} = r;
                        if (n in e) return;
                        let a = {...ug, currentValues: [], preventAutoSelect: !1, type: 'hierarchical', ...r},
                            i = a.numberOfValues;
                        e[n] = {request: a, initialNumberOfValues: i};
                    })
                        .addCase(o4.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.categoryFacetSet) ? n : e;
                        })
                        .addCase(oG, (e, t) => {
                            let r = t.payload.cf || {};
                            Object.keys(e).forEach((t) => {
                                let n = e[t].request,
                                    a = r[t] || [];
                                (a.length || n.currentValues.length) && ua(n, a, e[t].initialNumberOfValues);
                            });
                        })
                        .addCase(uf, (e, t) => {
                            var r;
                            let {facetId: n, criterion: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            i && (i.sortCriteria = a);
                        })
                        .addCase(up, (e, t) => {
                            var r;
                            let {facetId: n, basePath: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            i && (i.basePath = [...a]);
                        })
                        .addCase(uu, (e, t) => {
                            var r;
                            let {facetId: n, selection: a, retrieveCount: i} = t.payload,
                                o = null == (r = e[n]) ? void 0 : r.request;
                            if (!o) return;
                            let {path: s} = a,
                                l = (function (e, t, r) {
                                    let n = e.currentValues;
                                    for (let e of t) {
                                        let t = n[0];
                                        ((t && e === t.value) || ((t = uv(e, r)), (n.length = 0), n.push(t)),
                                            (t.retrieveChildren = !1),
                                            (t.state = 'idle'),
                                            (n = t.children));
                                    }
                                    return n;
                                })(o, s.slice(0, s.length - 1), i);
                            if (l.length) {
                                let e = l[0];
                                ((e.retrieveChildren = !0), (e.state = 'selected'), (e.children = []));
                                return;
                            }
                            let u = uv(a.value, i);
                            ((u.state = 'selected'), l.push(u), (o.numberOfValues = 1));
                        })
                        .addCase(uc, (e, t) => {
                            un(e, t.payload);
                        })
                        .addCase(se, (e) => {
                            Object.keys(e).forEach((t) => un(e, t));
                        })
                        .addCase(sr, (e, t) =>
                            Object.keys(e).forEach((r) => {
                                e[r].request.preventAutoSelect = !t.payload.allow;
                            }),
                        )
                        .addCase(ud, (e, t) => {
                            var r;
                            let {facetId: n, numberOfValues: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            if (i) {
                                if (!i.currentValues.length) return ur(i, a);
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
                        .addCase(l9, (e, t) => {
                            let {facetId: r, value: n} = t.payload,
                                a = e[r];
                            if (!a) return;
                            let i = [...n.path, n.rawValue];
                            ua(a.request, i, a.initialNumberOfValues);
                        })
                        .addCase(lt.fulfilled, (e, t) => {
                            um(e, t.payload.response.facets);
                        })
                        .addCase(s9.fulfilled, (e, t) => {
                            um(e, t.payload.response.facets);
                        })
                        .addCase(l4, (e, t) => {
                            un(e, t.payload);
                        });
                }),
                ug = {
                    delimitingCharacter: ';',
                    filterFacetCount: !0,
                    injectionDepth: 1e3,
                    numberOfValues: 5,
                    sortCriteria: 'occurrences',
                    basePath: [],
                    filterByBasePath: !0,
                };
            function uv(e, t) {
                return {value: e, state: 'idle', children: [], retrieveChildren: !0, retrieveCount: t};
            }
            function um(e, t) {
                t.forEach((t) => {
                    var r;
                    let n, a;
                    if (!(t.facetId in e)) return;
                    let i = null == (r = e[t.facetId]) ? void 0 : r.request;
                    if (!i) return;
                    let o = ((n = i0(i.currentValues).parents), (a = i0(t.values).parents), n.length !== a.length);
                    ((i.currentValues = o ? [] : i.currentValues), (i.preventAutoSelect = !1));
                });
            }
            function uy(e, t, r) {
                let {facetId: n} = t;
                if (e[n]) return;
                let a = {...uO, ...t},
                    i = r();
                e[n] = {options: a, isLoading: !1, response: i, initialNumberOfValues: a.numberOfValues, requestId: ''};
            }
            function uS(e, t) {
                let {facetId: r, ...n} = t,
                    a = e[r];
                a && (a.options = {...a.options, ...n});
            }
            function ub(e, t, r) {
                let n = e[t];
                n && ((n.requestId = r), (n.isLoading = !0));
            }
            function uw(e, t) {
                let r = e[t];
                r && (r.isLoading = !1);
            }
            function uI(e, t, r) {
                let {facetId: n, response: a} = t,
                    i = e[n];
                i && (i.requestId !== r || ((i.isLoading = !1), (i.response = a)));
            }
            function uC(e, t, r) {
                let {facetId: n} = t,
                    a = e[n];
                a &&
                    ((a.requestId = ''),
                    (a.isLoading = !1),
                    (a.response = r()),
                    (a.options.numberOfValues = a.initialNumberOfValues),
                    (a.options.query = uO.query));
            }
            function uk(e, t) {
                Object.keys(e).forEach((r) => uC(e, {facetId: r}, t));
            }
            var uO = {captions: {}, numberOfValues: 10, query: ''},
                uq = async (e, t, r) => {
                    let n = t.categoryFacetSearchSet[e].options,
                        a = t.categoryFacetSet[e].request,
                        {captions: i, query: o, numberOfValues: s} = n,
                        {field: l, delimitingCharacter: u, basePath: c, filterFacetCount: d} = a,
                        f = ux(a),
                        p = f.length ? [f] : [],
                        h = `*${o}*`;
                    return {
                        url: t.configuration.search.apiBaseUrl,
                        accessToken: t.configuration.accessToken,
                        organizationId: t.configuration.organizationId,
                        ...(t.configuration.search.authenticationProviders.length && {
                            authentication: t.configuration.search.authenticationProviders.join(','),
                        }),
                        basePath: c,
                        captions: i,
                        numberOfValues: s,
                        query: h,
                        field: l,
                        delimitingCharacter: u,
                        ignorePaths: p,
                        filterFacetCount: d,
                        type: 'hierarchical',
                        ...(r ? {} : {searchContext: (await s5(t)).request}),
                    };
                },
                ux = (e) => {
                    let t = [],
                        r = e.currentValues[0];
                    for (; r; ) (t.push(r.value), (r = r.children[0]));
                    return t;
                },
                uR = async (e, t, r) => {
                    let {captions: n, query: a, numberOfValues: i} = t.facetSearchSet[e].options,
                        {field: o, currentValues: s, filterFacetCount: l} = t.facetSet[e].request,
                        u = s.filter((e) => 'idle' !== e.state).map((e) => e.value),
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
                        field: o,
                        ignoreValues: u,
                        filterFacetCount: l,
                        type: 'specific',
                        ...(r ? {} : {searchContext: (await s5(t)).request}),
                    };
                },
                uA =
                    (e) =>
                    async (t, {getState: r, extra: {apiClient: n, validatePayload: a}}) => {
                        let i = r(),
                            o;
                        (a(t, rD), (o = uj(i, t) ? await uR(t, i, e) : await uq(t, i, e)));
                        let s = await n.facetSearch(o);
                        return {facetId: t, response: s};
                    },
                uE = tU('facetSearch/executeSearch', uA(!1)),
                uF = tU('facetSearch/executeSearch', uA(!0)),
                uD = tI('facetSearch/clearResults', (e) => rM(e, {facetId: rD})),
                uj = (e, t) => void 0 !== e.facetSearchSet && void 0 !== e.facetSet && void 0 !== e.facetSet[t],
                uP = {
                    facetId: rD,
                    value: new rx({values: {displayValue: rP, rawValue: rP, count: new rb({required: !0, min: 0})}}),
                },
                uT = tI('facetSearch/register', (e) => rM(e, l6)),
                uV = tI('facetSearch/update', (e) => rM(e, l6)),
                uM = tI('facetSearch/toggleSelectValue', (e) => rM(e, uP)),
                uU = tI('facetSearch/toggleExcludeValue', (e) => rM(e, uP)),
                uL = tq({}, (e) => {
                    e.addCase(l7, (e, t) => {
                        uy(e, t.payload, u$);
                    })
                        .addCase(uV, (e, t) => {
                            uS(e, t.payload);
                        })
                        .addCase(uE.pending, (e, t) => {
                            ub(e, t.meta.arg, t.meta.requestId);
                        })
                        .addCase(uE.rejected, (e, t) => {
                            uw(e, t.meta.arg);
                        })
                        .addCase(uE.fulfilled, (e, t) => {
                            uI(e, t.payload, t.meta.requestId);
                        })
                        .addCase(uD, (e, {payload: {facetId: t}}) => {
                            uC(e, {facetId: t}, u$);
                        })
                        .addCase(s9.fulfilled, (e) => {
                            uk(e, u$);
                        });
                });
            function u$() {
                return {moreValuesAvailable: !1, values: []};
            }
            var u_ = (e) =>
                    oR('analytics/facet/showMore', oq.Search, (t, r) => {
                        rM(e, rD);
                        let n = i4(e, i8(r));
                        return t.makeFacetShowMore(n);
                    }),
                uQ = (e) =>
                    oR('analytics/facet/showLess', oq.Search, (t, r) => {
                        rM(e, rD);
                        let n = i4(e, i8(r));
                        return t.makeFacetShowLess(n);
                    }),
                uN = (e) =>
                    oR('analytics/facet/sortChange', oq.Search, (t, r) => {
                        rM(e, {facetId: rD, criterion: new rm({required: !0})});
                        let {facetId: n, criterion: a} = e,
                            i = {...i4(n, i8(r)), criteria: a};
                        return t.makeFacetUpdateSort(i);
                    }),
                uz = (e) =>
                    oR('analytics/facet/reset', oq.Search, (t, r) => {
                        rM(e, rD);
                        let n = i4(e, i8(r));
                        return t.makeFacetClearAll(n);
                    }),
                uB = (e) =>
                    oR('analytics/facet/select', oq.Search, (t, r) => {
                        rM(e, {facetId: rD, facetValue: rD});
                        let n = i6(e, i8(r));
                        return t.makeFacetSelect(n);
                    }),
                uH = (e) =>
                    oR('analytics/facet/exclude', oq.Search, (t, r) => {
                        rM(e, {facetId: rD, facetValue: rD});
                        let n = i6(e, i8(r));
                        return t.makeFacetExclude(n);
                    }),
                uY = (e) =>
                    oR('analytics/facet/deselect', oq.Search, (t, r) => {
                        rM(e, {facetId: rD, facetValue: rD});
                        let n = i6(e, i8(r));
                        return t.makeFacetDeselect(n);
                    }),
                uW = (e) =>
                    oR('analytics/facet/breadcrumb', oq.Search, (t, r) => {
                        rM(e, {facetId: rD, facetValue: rD});
                        let n = i6(e, i8(r));
                        return t.makeBreadcrumbFacet(n);
                    }),
                uJ = (e, t) => {
                    var r, n;
                    return null == (n = null == (r = e.facetOptions.facets[t]) ? void 0 : r.enabled) || n;
                },
                uG = new rO({regex: /^[a-zA-Z0-9-_]+$/}),
                uK = new rO({required: !0}),
                uZ = new rA({each: new rO()}),
                uX = new rO(),
                u0 = new rI(),
                u1 = new rI(),
                u2 = new rb({min: 0}),
                u5 = new rb({min: 1}),
                u3 = new rI({required: !0}),
                u4 = new rx(),
                u6 = new rO(),
                u8 = new rx({values: {captions: u4, numberOfValues: u5, query: u6}}),
                u9 = new rx({
                    options: {required: !1},
                    values: {
                        type: new rO({constrainTo: ['simple'], emptyAllowed: !1, required: !0}),
                        values: new rA({required: !0, max: 25, each: new rO({emptyAllowed: !1, required: !0})}),
                    },
                }),
                u7 = new rI(),
                ce = new rA({min: 1, max: 25, required: !1, each: new rO({emptyAllowed: !1, required: !0})}),
                ct = {value: rD, numberOfResults: new rb({min: 0}), state: rD},
                cr = {
                    facetId: rD,
                    field: new rO({required: !0, emptyAllowed: !0}),
                    filterFacetCount: new rI({required: !1}),
                    injectionDepth: new rb({required: !1, min: 0}),
                    numberOfValues: new rb({required: !1, min: 1}),
                    sortCriteria: new rm({required: !1}),
                    allowedValues: u9,
                    customSort: ce,
                },
                cn = tI('facet/register', (e) => rM(e, cr)),
                ca = tI('facet/toggleSelectValue', (e) => rM(e, {facetId: rD, selection: new rx({values: ct})})),
                ci = tI('facet/toggleExcludeValue', (e) => rM(e, {facetId: rD, selection: new rx({values: ct})})),
                co = tI('facet/deselectAll', (e) => rM(e, rD)),
                cs = tI('facet/updateSortCriterion', (e) => rM(e, {facetId: rD, criterion: new rm({required: !0})})),
                cl = tI('facet/updateNumberOfValues', (e) =>
                    rM(e, {facetId: rD, numberOfValues: new rb({required: !0, min: 1})}),
                ),
                cu = tI('facet/updateIsFieldExpanded', (e) =>
                    rM(e, {facetId: rD, isFieldExpanded: new rI({required: !0})}),
                ),
                cc = tI('facet/updateFreezeCurrentValues', (e) =>
                    rM(e, {facetId: rD, freezeCurrentValues: new rI({required: !0})}),
                );
            function cd(e) {
                var t, r;
                return {
                    start: cf(e.start, e),
                    end: cf(e.end, e),
                    endInclusive: null != (t = e.endInclusive) && t,
                    state: null != (r = e.state) ? r : 'idle',
                };
            }
            function cf(e, t) {
                let {dateFormat: r} = t;
                return e && 'object' == typeof e && 'period' in e
                    ? (sH(e),
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
                    : 'string' == typeof e && sG(e)
                      ? (sH(e), e)
                      : (s_(e, r), s$(sL(e, r)));
            }
            var cp = tI('rangeFacet/updateSortCriterion', (e) =>
                    rM(e, {facetId: rD, criterion: new rm({required: !0})}),
                ),
                ch = {
                    state: rD,
                    start: new rb({required: !0}),
                    end: new rb({required: !0}),
                    endInclusive: new rI({required: !0}),
                    numberOfResults: new rb({required: !0, min: 0}),
                },
                cg = {
                    start: rD,
                    end: rD,
                    endInclusive: new rI({required: !0}),
                    state: rD,
                    numberOfResults: new rb({required: !0, min: 0}),
                },
                cv = (e) => ({
                    facetId: rD,
                    selection: new rx('string' == typeof e.start ? {values: cg} : {values: ch}),
                }),
                cm = {start: rD, end: rD, endInclusive: new rI({required: !0}), state: rD},
                cy = {
                    facetId: rD,
                    field: rD,
                    currentValues: new rA({required: !1, each: new rx({values: cm})}),
                    generateAutomaticRanges: new rI({required: !0}),
                    filterFacetCount: new rI({required: !1}),
                    injectionDepth: new rb({required: !1, min: 0}),
                    numberOfValues: new rb({required: !1, min: 1}),
                    sortCriteria: new rm({required: !1}),
                    rangeAlgorithm: new rm({required: !1}),
                };
            function cS(e) {
                e.currentValues &&
                    e.currentValues.forEach((e) => {
                        let {start: t, end: r} = cd(e);
                        if (sL(sG(t) ? sW(t) : t).isAfter(sL(sG(r) ? sW(r) : r)))
                            throw Error(
                                `The start value is greater than the end value for the date range ${e.start} to ${e.end}`,
                            );
                    });
            }
            var cb = tI('dateFacet/register', (e) => {
                    try {
                        return (rV(e, cy), cS(e), {payload: e, error: null});
                    } catch (t) {
                        return {payload: e, error: rT(t)};
                    }
                }),
                cw = tI('dateFacet/toggleSelectValue', (e) => rM(e, {facetId: rD, selection: new rx({values: cg})})),
                cI = tI('dateFacet/toggleExcludeValue', (e) => rM(e, {facetId: rD, selection: new rx({values: cg})})),
                cC = tI('dateFacet/updateFacetValues', (e) => {
                    try {
                        return (
                            rV(e, {facetId: rD, values: new rA({each: new rx({values: cg})})}),
                            cS({currentValues: e.values}),
                            {payload: e, error: null}
                        );
                    } catch (t) {
                        return {payload: e, error: rT(t)};
                    }
                }),
                ck = {
                    state: rD,
                    start: new rb({required: !0}),
                    end: new rb({required: !0}),
                    endInclusive: new rI({required: !0}),
                },
                cO = {
                    facetId: rD,
                    field: rD,
                    currentValues: new rA({required: !1, each: new rx({values: ck})}),
                    generateAutomaticRanges: new rI({required: !0}),
                    filterFacetCount: new rI({required: !1}),
                    injectionDepth: new rb({required: !1, min: 0}),
                    numberOfValues: new rb({required: !1, min: 1}),
                    sortCriteria: new rm({required: !1}),
                    rangeAlgorithm: new rm({required: !1}),
                };
            function cq(e) {
                e.currentValues &&
                    e.currentValues.forEach(({start: e, end: t}) => {
                        if (e > t)
                            throw Error(
                                `The start value is greater than the end value for the numeric range ${e} to ${t}`,
                            );
                    });
            }
            var cx = tI('numericFacet/register', (e) => {
                    try {
                        return (rM(e, cO), cq(e), {payload: e, error: null});
                    } catch (t) {
                        return {payload: e, error: rT(t)};
                    }
                }),
                cR = tI('numericFacet/toggleSelectValue', (e) => rM(e, {facetId: rD, selection: new rx({values: ch})})),
                cA = tI('numericFacet/toggleExcludeValue', (e) =>
                    rM(e, {facetId: rD, selection: new rx({values: ch})}),
                ),
                cE = tI('numericFacet/updateFacetValues', (e) => {
                    try {
                        return (
                            rV(e, {facetId: rD, values: new rA({each: new rx({values: ch})})}),
                            cq({currentValues: e.values}),
                            {payload: e, error: null}
                        );
                    } catch (t) {
                        return {payload: e, error: rT(t)};
                    }
                }),
                cF = tq(nb(), (e) => {
                    e.addCase(l5, (e, t) => ({...e, ...t.payload}))
                        .addCase(s9.fulfilled, (e) => {
                            e.freezeFacetOrder = !1;
                        })
                        .addCase(s9.rejected, (e) => {
                            e.freezeFacetOrder = !1;
                        })
                        .addCase(o4.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.facetOptions) ? n : e;
                        })
                        .addCase(ul, (e, t) => {
                            e.facets[t.payload.facetId] = nS();
                        })
                        .addCase(cn, (e, t) => {
                            e.facets[t.payload.facetId] = nS();
                        })
                        .addCase(cb, (e, t) => {
                            e.facets[t.payload.facetId] = nS();
                        })
                        .addCase(cx, (e, t) => {
                            e.facets[t.payload.facetId] = nS();
                        })
                        .addCase(l3, (e, t) => {
                            e.facets[t.payload].enabled = !0;
                        })
                        .addCase(l4, (e, t) => {
                            e.facets[t.payload].enabled = !1;
                        })
                        .addCase(oG, (e, t) => {
                            var r, n, a, i;
                            [
                                ...Object.keys(null != (r = t.payload.f) ? r : {}),
                                ...Object.keys(null != (n = t.payload.cf) ? n : {}),
                                ...Object.keys(null != (a = t.payload.nf) ? a : {}),
                                ...Object.keys(null != (i = t.payload.df) ? i : {}),
                            ].forEach((t) => {
                                (t in e || (e.facets[t] = nS()), (e.facets[t].enabled = !0));
                            });
                        });
                });
            function cD(e) {
                let {facetSet: t, numericFacetSet: r, dateFacetSet: n, categoryFacetSet: a} = e;
                return [t, r, n, a];
            }
            function cj(e, t) {
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
                                return cD(r).some((e) => e && t in e);
                            })(e)
                        )
                            return n;
                        let i = `${n}_`,
                            o =
                                (null !=
                                (r = cD(a)
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
                            `${i}${o}`
                        );
                    })({field: a, state: r}, n)
                );
            }
            var cP = new rv({
                field: uK,
                basePath: uZ,
                delimitingCharacter: uX,
                facetId: uG,
                facetSearch: u8,
                filterByBasePath: u0,
                filterFacetCount: u1,
                injectionDepth: u2,
                numberOfValues: u5,
                sortCriteria: new rO({constrainTo: ['alphanumeric', 'occurrences']}),
            });
            function cT(e, t) {
                let r = e.dispatch,
                    {options: n, getFacetSearch: a} = t,
                    {facetId: i} = n;
                return {
                    updateText(e) {
                        r(uV({facetId: i, query: e, numberOfValues: a().initialNumberOfValues}));
                    },
                    showMoreResults() {
                        let {initialNumberOfValues: e, options: n} = a();
                        (r(uV({facetId: i, numberOfValues: n.numberOfValues + e})),
                            r(t.isForFieldSuggestions ? uF(i) : uE(i)));
                    },
                    search() {
                        r(t.isForFieldSuggestions ? uF(i) : uE(i));
                    },
                    clear() {
                        r(uD({facetId: i}));
                    },
                    updateCaptions(e) {
                        r(uV({facetId: i, captions: e}));
                    },
                    get state() {
                        let {response: e, isLoading: t, options: r} = a(),
                            {query: n} = r,
                            i = e.values;
                        return {...e, values: i, isLoading: t, query: n};
                    },
                };
            }
            function cV(e, t) {
                !(function (e) {
                    e.addReducers({categoryFacetSet: uh, categoryFacetSearchSet: uL, configuration: lm, search: lp});
                })(e);
                let r = (function (e, t) {
                        !(function (e) {
                            e.addReducers({
                                categoryFacetSet: uh,
                                categoryFacetSearchSet: uL,
                                facetOptions: cF,
                                configuration: lm,
                                search: lp,
                            });
                        })(e);
                        let r = lM(e),
                            {dispatch: n} = e,
                            a = cj(e, t.options),
                            i = {...ug, ...n6('facetSearch', t.options), field: t.options.field, facetId: a},
                            o = {facetSearch: {...uO, ...t.options.facetSearch}, ...i};
                        rL(e, cP, o, 'buildCategoryFacet');
                        let s = () => i2(e.state, a),
                            l = () => i1(e.state, a),
                            u = () => iX(e.state),
                            c = () => uJ(e.state, a);
                        return (
                            n(ul(i)),
                            {
                                ...r,
                                toggleSelect(e) {
                                    let t = o.numberOfValues;
                                    (n(uu({facetId: a, selection: e, retrieveCount: t})), n(l5()));
                                },
                                deselectAll() {
                                    (n(uc(a)), n(l5()));
                                },
                                sortBy(e) {
                                    (n(uf({facetId: a, criterion: e})), n(l5()));
                                },
                                isSortedBy: (e) => s().sortCriteria === e,
                                showMoreValues() {
                                    let {numberOfValues: e} = o,
                                        {values: t} = this.state;
                                    (n(ud({facetId: a, numberOfValues: t.length + e})), n(l5()));
                                },
                                showLessValues() {
                                    let {numberOfValues: e} = o;
                                    (n(ud({facetId: a, numberOfValues: e})), n(l5()));
                                },
                                enable() {
                                    n(l3(a));
                                },
                                disable() {
                                    n(l4(a));
                                },
                                get state() {
                                    let e = s(),
                                        t = l(),
                                        r = u(),
                                        n = c(),
                                        {parents: i, values: d} = i0(null == t ? void 0 : t.values),
                                        f = 0 !== i.length,
                                        p =
                                            i.length > 0
                                                ? i[i.length - 1].moreValuesAvailable
                                                : (null == t ? void 0 : t.moreValuesAvailable) || !1,
                                        h = d.length > o.numberOfValues;
                                    return {
                                        facetId: a,
                                        parents: i,
                                        values: d,
                                        isLoading: r,
                                        hasActiveValues: f,
                                        canShowMoreValues: p,
                                        canShowLessValues: h,
                                        sortCriteria: e.sortCriteria,
                                        enabled: n,
                                    };
                                },
                            }
                        );
                    })(e, t),
                    {dispatch: n} = e,
                    a = () => r.state.facetId,
                    i = (function (e, t) {
                        let {dispatch: r} = e,
                            n = {...uO, ...t.options},
                            {facetId: a} = n,
                            i = (function (e, t) {
                                let {dispatch: r} = e,
                                    n = {...uO, ...t.options},
                                    {facetId: a} = n;
                                r(l7(n));
                                let i = cT(e, {
                                    options: n,
                                    getFacetSearch: () => e.state.categoryFacetSearchSet[a],
                                    isForFieldSuggestions: t.isForFieldSuggestions,
                                });
                                return {
                                    ...i,
                                    select(e) {
                                        r(l9({facetId: a, value: e}));
                                    },
                                    get state() {
                                        return i.state;
                                    },
                                };
                            })(e, {options: {...n}, isForFieldSuggestions: t.isForFieldSuggestions});
                        r(l7(n));
                        let o = cT(e, {
                            options: n,
                            getFacetSearch: () => e.state.categoryFacetSearchSet[a],
                            isForFieldSuggestions: t.isForFieldSuggestions,
                        });
                        return {
                            ...o,
                            ...i,
                            select: (e) => {
                                (i.select(e), r(l5()), r(s9(uB({facetId: a, facetValue: e.rawValue}))));
                            },
                            get state() {
                                return {...o.state, ...i.state};
                            },
                        };
                    })(e, {options: {facetId: a(), ...t.options.facetSearch}, isForFieldSuggestions: !1}),
                    {state: o, ...s} = i;
                return {
                    ...r,
                    facetSearch: s,
                    toggleSelect(e) {
                        let t;
                        (r.toggleSelect(e),
                            n(s9(((t = {facetId: a(), facetValue: e.value}), 'selected' === e.state ? uY(t) : uB(t)))));
                    },
                    deselectAll() {
                        (r.deselectAll(), n(s9(uz(a()))));
                    },
                    sortBy(e) {
                        (r.sortBy(e), n(s9(uN({facetId: a(), criterion: e}))));
                    },
                    showMoreValues() {
                        (r.showMoreValues(), n(lt(u_(a()))));
                    },
                    showLessValues() {
                        (r.showLessValues(), n(lt(uQ(a()))));
                    },
                    get state() {
                        return {...r.state, facetSearch: i.state};
                    },
                };
            }
            var cM = tq({}, (e) => {
                e.addCase(uT, (e, t) => {
                    uy(e, t.payload, cU);
                })
                    .addCase(uV, (e, t) => {
                        uS(e, t.payload);
                    })
                    .addCase(uE.pending, (e, t) => {
                        ub(e, t.meta.arg, t.meta.requestId);
                    })
                    .addCase(uE.rejected, (e, t) => {
                        uw(e, t.meta.arg);
                    })
                    .addCase(uE.fulfilled, (e, t) => {
                        uI(e, t.payload, t.meta.requestId);
                    })
                    .addCase(uD, (e, {payload: t}) => {
                        uC(e, t, cU);
                    })
                    .addCase(s9.fulfilled, (e) => {
                        uk(e, cU);
                    });
            });
            function cU() {
                return {moreValuesAvailable: !1, values: []};
            }
            var cL = () =>
                oT(
                    'analytics/productListing/load',
                    oq.Search,
                    (e) => e.makeInterfaceLoad(),
                    (e) => new ov(e),
                );
            (tI('productlisting/setUrl', (e) => rM(e, {url: new rO({required: !0, url: !0})})),
                tI('productlisting/setAdditionalFields', (e) =>
                    rM(e, {additionalFields: new rA({required: !0, each: new rO({required: !0, emptyAllowed: !1})})}),
                ));
            var c$ = tU('productlisting/fetch', async (e, {getState: t, dispatch: r, rejectWithValue: n, extra: a}) => {
                    let i = t(),
                        {apiClient: o} = a,
                        s = await o.getProducts(await c_(i));
                    return nv(s) ? (r(sj(s.error)), n(s.error)) : {response: s.success, analyticsAction: cL()};
                }),
                c_ = async (e) => {
                    var t, r, n, a, i, o, s, l;
                    let u = s1(
                            [
                                ...s2(null != (i = e.facetSet) ? i : {}),
                                ...s2(null != (o = e.numericFacetSet) ? o : {}),
                                ...s2(null != (s = e.dateFacetSet) ? s : {}),
                                ...s2(null != (l = e.categoryFacetSet) ? l : {}),
                            ],
                            null != (a = e.facetOrder) ? a : [],
                        ),
                        c = await oy(e.configuration.analytics);
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
                        ...(((null == (n = e.sort) ? void 0 : n.by) || nL.Relevance) !== nL.Relevance && {
                            sort: e.sort,
                        }),
                        ...(e.context && {userContext: e.context.contextValues}),
                    };
                },
                cQ = tq({}, (e) => {
                    e.addCase(cn, (e, t) => {
                        var r;
                        let {facetId: n} = t.payload;
                        n in e ||
                            (e[n] = {
                                request:
                                    ((r = t.payload),
                                    {
                                        ...cB,
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
                        .addCase(o4.fulfilled, (e, t) => {
                            if (t.payload && 0 !== Object.keys(t.payload.facetSet).length) return t.payload.facetSet;
                        })
                        .addCase(oG, (e, t) => {
                            let r = t.payload.f || {};
                            Object.keys(e).forEach((t) => {
                                let {request: n} = e[t],
                                    a = r[t] || [],
                                    i = n.currentValues.filter((e) => !a.includes(e.value));
                                ((n.currentValues = [...a.map(cY), ...i.map(cW)]),
                                    (n.preventAutoSelect = a.length > 0),
                                    (n.numberOfValues = Math.max(a.length, n.numberOfValues)));
                            });
                        })
                        .addCase(ca, (e, t) => {
                            var r;
                            let {facetId: n, selection: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            if (!i) return;
                            i.preventAutoSelect = !0;
                            let o = i.currentValues.find((e) => e.value === a.value);
                            if (!o) {
                                cN(i, a);
                                return;
                            }
                            let s = 'selected' === o.state;
                            ((o.state = s ? 'idle' : 'selected'), (i.freezeCurrentValues = !0));
                        })
                        .addCase(ci, (e, t) => {
                            var r;
                            let {facetId: n, selection: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            if (!i) return;
                            i.preventAutoSelect = !0;
                            let o = i.currentValues.find((e) => e.value === a.value);
                            if (!o) {
                                cN(i, a);
                                return;
                            }
                            let s = 'excluded' === o.state;
                            ((o.state = s ? 'idle' : 'excluded'), (i.freezeCurrentValues = !0));
                        })
                        .addCase(cc, (e, t) => {
                            var r;
                            let {facetId: n, freezeCurrentValues: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            i && (i.freezeCurrentValues = a);
                        })
                        .addCase(co, (e, t) => {
                            var r;
                            ut(null == (r = e[t.payload]) ? void 0 : r.request);
                        })
                        .addCase(se, (e) => {
                            Object.values(e)
                                .filter((e) => e.hasBreadcrumbs)
                                .forEach(({request: e}) => ut(e));
                        })
                        .addCase(st, (e) => {
                            Object.values(e)
                                .filter((e) => !e.hasBreadcrumbs)
                                .forEach(({request: e}) => ut(e));
                        })
                        .addCase(sr, (e, t) =>
                            Object.values(e).forEach((e) => {
                                e.request.preventAutoSelect = !t.payload.allow;
                            }),
                        )
                        .addCase(cs, (e, t) => {
                            ue(e, t.payload);
                        })
                        .addCase(cl, (e, t) => {
                            var r;
                            let {facetId: n, numberOfValues: a} = t.payload;
                            ur(null == (r = e[n]) ? void 0 : r.request, a);
                        })
                        .addCase(cu, (e, t) => {
                            var r;
                            let {facetId: n, isFieldExpanded: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            i && (i.isFieldExpanded = a);
                        })
                        .addCase(s9.fulfilled, (e, t) => {
                            t.payload.response.facets.forEach((t) => {
                                var r;
                                return cz(null == (r = e[t.facetId]) ? void 0 : r.request, t);
                            });
                        })
                        .addCase(c$.fulfilled, (e, t) => {
                            var r, n;
                            (
                                (null == (n = null == (r = t.payload.response) ? void 0 : r.facets)
                                    ? void 0
                                    : n.results) || []
                            ).forEach((t) => {
                                var r;
                                return cz(null == (r = e[t.facetId]) ? void 0 : r.request, t);
                            });
                        })
                        .addCase(lt.fulfilled, (e, t) => {
                            t.payload.response.facets.forEach((t) => {
                                var r;
                                return cz(null == (r = e[t.facetId]) ? void 0 : r.request, t);
                            });
                        })
                        .addCase(uM, (e, t) => {
                            var r;
                            let {facetId: n, value: a} = t.payload,
                                i = null == (r = e[n]) ? void 0 : r.request;
                            if (!i) return;
                            let {rawValue: o} = a,
                                {currentValues: s} = i,
                                l = s.find((e) => e.value === o);
                            if (l) {
                                l.state = 'selected';
                                return;
                            }
                            (cN(i, cY(o)), (i.freezeCurrentValues = !0), (i.preventAutoSelect = !0));
                        })
                        .addCase(l4, (e, t) => {
                            if (!(t.payload in e)) return;
                            let {request: r} = e[t.payload];
                            ut(r);
                        });
                });
            function cN(e, t) {
                let {currentValues: r} = e,
                    n = r.findIndex((e) => 'idle' === e.state),
                    a = -1 === n ? r.length : n,
                    i = r.slice(0, a),
                    o = r.slice(a + 1);
                ((e.currentValues = [...i, t, ...o]), (e.numberOfValues = e.currentValues.length));
            }
            function cz(e, t) {
                e && ((e.currentValues = t.values.map(cH)), (e.freezeCurrentValues = !1), (e.preventAutoSelect = !1));
            }
            var cB = {filterFacetCount: !0, injectionDepth: 1e3, numberOfValues: 8, sortCriteria: 'automatic'};
            function cH(e) {
                let {value: t, state: r} = e;
                return {value: t, state: r};
            }
            function cY(e) {
                return {value: e, state: 'selected'};
            }
            function cW(e) {
                return {...e, state: 'idle'};
            }
            var cJ = (e) => 'selected' === e.state,
                cG = (e) => 'excluded' === e.state,
                cK = (e, t) => {
                    let r = {facetId: e, facetValue: t.value};
                    return cJ(t) ? uY(r) : uB(r);
                },
                cZ = (e, t) => {
                    let r = {facetId: e, facetValue: t.value};
                    return cG(t) ? uY(r) : uH(r);
                },
                cX = {facetId: rD, selection: new rx({values: ct})},
                c0 = tU('facet/executeToggleSelect', ({facetId: e, selection: t}, r) => {
                    let {
                        dispatch: n,
                        extra: {validatePayload: a},
                    } = r;
                    (a({facetId: e, selection: t}, cX), n(ca({facetId: e, selection: t})), n(l5()));
                }),
                c1 = tU('facet/executeToggleExclude', ({facetId: e, selection: t}, r) => {
                    let {
                        dispatch: n,
                        extra: {validatePayload: a},
                    } = r;
                    (a({facetId: e, selection: t}, cX), n(ci({facetId: e, selection: t})), n(l5()));
                }),
                c2 = ['score', 'alphanumeric', 'alphanumericDescending', 'occurrences', 'automatic'],
                c5 = new rv({
                    facetId: uG,
                    field: uK,
                    filterFacetCount: u1,
                    injectionDepth: u2,
                    numberOfValues: u5,
                    sortCriteria: new rO({constrainTo: c2}),
                    facetSearch: u8,
                }),
                c3 = new rv({
                    facetId: uG,
                    field: uK,
                    filterFacetCount: u1,
                    injectionDepth: u2,
                    numberOfValues: u5,
                    sortCriteria: new rO({constrainTo: c2}),
                    facetSearch: u8,
                    allowedValues: u9,
                    hasBreadcrumbs: u7,
                    customSort: ce,
                });
            function c4(e, t) {
                !(function (e) {
                    e.addReducers({facetSet: cQ, configuration: lm, facetSearchSet: cM, search: lp});
                })(e);
                let {dispatch: r} = e,
                    n = (function (e, t, r = c5) {
                        !(function (e) {
                            e.addReducers({facetSet: cQ, facetOptions: cF, configuration: lm, facetSearchSet: cM});
                        })(e);
                        let {dispatch: n} = e,
                            a = lM(e),
                            i = cj(e, t.options),
                            o = {...cB, ...n6('facetSearch', t.options), field: t.options.field, facetId: i},
                            s = {facetSearch: {...uO, ...t.options.facetSearch}, ...o};
                        rL(e, r, s, 'buildFacet');
                        let l = () => iG(e.state, i),
                            u = () => iK(e.state, i),
                            c = () => iX(e.state),
                            d = () => uJ(e.state, i),
                            f = () => {
                                let {currentValues: e} = l();
                                return e.filter((e) => 'idle' !== e.state).length;
                            },
                            p = () => {
                                let {currentValues: e} = l(),
                                    t = s.numberOfValues,
                                    r = !!e.find((e) => 'idle' === e.state);
                                return t < e.length && r;
                            };
                        return (
                            n(cn(o)),
                            {
                                ...a,
                                toggleSelect: (e) => n(c0({facetId: s.facetId, selection: e})),
                                toggleExclude: (e) => n(c1({facetId: s.facetId, selection: e})),
                                toggleSingleSelect: function (e) {
                                    ('idle' === e.state && n(co(i)), this.toggleSelect(e));
                                },
                                toggleSingleExclude: function (e) {
                                    ('idle' === e.state && n(co(i)), this.toggleExclude(e));
                                },
                                isValueSelected: cJ,
                                isValueExcluded: cG,
                                deselectAll() {
                                    (n(co(i)), n(l5()));
                                },
                                sortBy(e) {
                                    (n(cs({facetId: i, criterion: e})), n(l5()));
                                },
                                isSortedBy(e) {
                                    return this.state.sortCriterion === e;
                                },
                                showMoreValues() {
                                    let e = l().numberOfValues,
                                        t = s.numberOfValues;
                                    (n(cl({facetId: i, numberOfValues: e + (t - (e % t))})),
                                        n(cu({facetId: i, isFieldExpanded: !0})),
                                        n(l5()));
                                },
                                showLessValues() {
                                    let e = Math.max(s.numberOfValues, f());
                                    (n(cl({facetId: i, numberOfValues: e})),
                                        n(cu({facetId: i, isFieldExpanded: !1})),
                                        n(l5()));
                                },
                                enable() {
                                    n(l3(i));
                                },
                                disable() {
                                    n(l4(i));
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
                                    let o = t ? t.values : [],
                                        s = o.some((e) => 'idle' !== e.state);
                                    return {
                                        facetId: i,
                                        values: o,
                                        sortCriterion: a,
                                        isLoading: r,
                                        hasActiveValues: s,
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
                        c3,
                    ),
                    a = () => n.state.facetId,
                    i = (() => {
                        let {facetSearch: n} = t.options;
                        return (function (e, t) {
                            let {dispatch: r} = e,
                                {options: n, select: a, exclude: i, isForFieldSuggestions: o} = t,
                                {facetId: s} = n;
                            r(uT(n));
                            let l = cT(e, {
                                options: n,
                                getFacetSearch: () => e.state.facetSearchSet[s],
                                isForFieldSuggestions: o,
                            });
                            return {
                                ...l,
                                select(e) {
                                    (r(uM({facetId: s, value: e})), a(e));
                                },
                                exclude(e) {
                                    (r(uU({facetId: s, value: e})), i(e));
                                },
                                singleSelect(e) {
                                    (r(co(s)), r(uM({facetId: s, value: e})), a(e));
                                },
                                singleExclude(e) {
                                    (r(co(s)), r(uU({facetId: s, value: e})), i(e));
                                },
                                get state() {
                                    let {values: e} = l.state;
                                    return {
                                        ...l.state,
                                        values: e.map(({count: e, displayValue: t, rawValue: r}) => ({
                                            count: e,
                                            displayValue: t,
                                            rawValue: r,
                                        })),
                                    };
                                },
                            };
                        })(e, {
                            options: {facetId: a(), ...n},
                            select: (e) => {
                                (r(l5()), r(s9(uB({facetId: a(), facetValue: e.rawValue}))));
                            },
                            exclude: (e) => {
                                (r(l5()), r(s9(uH({facetId: a(), facetValue: e.rawValue}))));
                            },
                            isForFieldSuggestions: !1,
                        });
                    })(),
                    {state: o, ...s} = i;
                return {
                    ...n,
                    facetSearch: s,
                    toggleSelect(e) {
                        (n.toggleSelect(e), r(s9(cK(a(), e))));
                    },
                    toggleExclude(e) {
                        (n.toggleExclude(e), r(s9(cZ(a(), e))));
                    },
                    deselectAll() {
                        (n.deselectAll(), r(s9(uz(a()))));
                    },
                    sortBy(e) {
                        (n.sortBy(e), r(s9(uN({facetId: a(), criterion: e}))));
                    },
                    isSortedBy(e) {
                        return this.state.sortCriterion === e;
                    },
                    showMoreValues() {
                        (n.showMoreValues(), r(lt(u_(a()))));
                    },
                    showLessValues() {
                        (n.showLessValues(), r(lt(uQ(a()))));
                    },
                    get state() {
                        return {...n.state, facetSearch: i.state};
                    },
                };
            }
            var c6 = (e) => 'selected' === e.state,
                c8 = (e) => 'excluded' === e.state,
                c9 = (e, t) => {
                    let r = {facetId: e, facetValue: `${t.start}..${t.end}`};
                    return c6(t) ? uY(r) : uB(r);
                },
                c7 = (e, t) => {
                    let r = {facetId: e, facetValue: `${t.start}..${t.end}`};
                    return c8(t) ? uY(r) : uH(r);
                },
                de = tI('rangeFacet/executeToggleSelect', (e) => rM(e, cv(e.selection))),
                dt = tI('rangeFacet/executeToggleExclude', (e) => rM(e, cv(e.selection))),
                dr = {facetId: rD, selection: new rx({values: cg})},
                dn = tU('dateFacet/executeToggleSelect', (e, {dispatch: t, extra: {validatePayload: r}}) => {
                    (r(e, dr), t(cw(e)), t(de(e)), t(l5()));
                }),
                da = tU('dateFacet/executeToggleExclude', (e, {dispatch: t, extra: {validatePayload: r}}) => {
                    (r(e, dr), t(cI(e)), t(dt(e)), t(l5()));
                }),
                di = {
                    filterFacetCount: !0,
                    injectionDepth: 1e3,
                    numberOfValues: 8,
                    sortCriteria: 'ascending',
                    rangeAlgorithm: 'even',
                };
            function ds(e, t) {
                let {request: r} = t,
                    {facetId: n} = r;
                if (n in e) return;
                let a = dg(r);
                ((r.numberOfValues = a), (e[n] = t));
            }
            function dl(e, t, r) {
                var n;
                let a = null == (n = e[t]) ? void 0 : n.request;
                a && ((a.currentValues = r), (a.numberOfValues = dg(a)));
            }
            function du(e, t, r) {
                var n;
                let a = null == (n = e[t]) ? void 0 : n.request;
                if (!a) return;
                let i = dh(a.currentValues, r);
                if (!i) return;
                let o = 'selected' === i.state;
                ((i.state = o ? 'idle' : 'selected'), (a.preventAutoSelect = !0));
            }
            function dc(e, t, r) {
                var n;
                let a = null == (n = e[t]) ? void 0 : n.request;
                if (!a) return;
                let i = dh(a.currentValues, r);
                if (!i) return;
                let o = 'excluded' === i.state;
                ((i.state = o ? 'idle' : 'excluded'), (a.preventAutoSelect = !0));
            }
            function dd(e, t) {
                var r;
                let n = null == (r = e[t]) ? void 0 : r.request;
                n && n.currentValues.forEach((e) => (e.state = 'idle'));
            }
            function df(e, t) {
                Object.entries(e).forEach(([e, {request: r}]) => {
                    let n = t[e] || [];
                    r.currentValues.forEach((e) => {
                        let t = !!dh(n, e);
                        return ((e.state = t ? 'selected' : 'idle'), e);
                    });
                    let a = n.filter((e) => !dh(r.currentValues, e)),
                        i = r.currentValues;
                    (i.push(...a), (r.numberOfValues = Math.max(r.numberOfValues, i.length)));
                });
            }
            function dp(e, t, r) {
                t.forEach((t) => {
                    var n;
                    let a = null == (n = e[t.facetId]) ? void 0 : n.request;
                    if (!a) return;
                    let i = r(t.values);
                    ((a.currentValues = i), (a.preventAutoSelect = !1));
                });
            }
            function dh(e, t) {
                let {start: r, end: n} = t;
                return e.find((e) => e.start === r && e.end === n);
            }
            function dg(e) {
                let {generateAutomaticRanges: t, currentValues: r, numberOfValues: n} = e;
                return t ? Math.max(n, r.length) : r.length;
            }
            var dv = tq({}, (e) => {
                e.addCase(cb, (e, t) => {
                    let {payload: r} = t;
                    ds(e, {request: {...di, currentValues: [], preventAutoSelect: !1, type: 'dateRange', ...r}});
                })
                    .addCase(o4.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.dateFacetSet) ? n : e;
                    })
                    .addCase(oG, (e, t) => {
                        df(e, t.payload.df || {});
                    })
                    .addCase(cw, (e, t) => {
                        let {facetId: r, selection: n} = t.payload;
                        du(e, r, n);
                    })
                    .addCase(cI, (e, t) => {
                        let {facetId: r, selection: n} = t.payload;
                        dc(e, r, n);
                    })
                    .addCase(cC, (e, t) => {
                        let {facetId: r, values: n} = t.payload;
                        dl(e, r, n);
                    })
                    .addCase(co, (e, t) => {
                        dd(e, t.payload);
                    })
                    .addCase(se, (e) => {
                        Object.keys(e).forEach((t) => {
                            dd(e, t);
                        });
                    })
                    .addCase(cp, (e, t) => {
                        ue(e, t.payload);
                    })
                    .addCase(s9.fulfilled, (e, t) => {
                        dp(e, t.payload.response.facets, dm);
                    })
                    .addCase(c$.fulfilled, (e, t) => {
                        var r, n;
                        dp(
                            e,
                            (null == (n = null == (r = t.payload.response) ? void 0 : r.facets) ? void 0 : n.results) ||
                                [],
                            dm,
                        );
                    })
                    .addCase(l4, (e, t) => {
                        dd(e, t.payload);
                    });
            });
            function dm(e) {
                return e.map((e) => {
                    let {numberOfResults: t, ...r} = e;
                    return r;
                });
            }
            function dy(e, t) {
                let {facetId: r, getRequest: n} = t,
                    a = lM(e),
                    i = e.dispatch,
                    o = () => uJ(e.state, r);
                return {
                    ...a,
                    isValueSelected: c6,
                    isValueExcluded: c8,
                    deselectAll() {
                        (i(co(r)), i(l5()));
                    },
                    sortBy(e) {
                        (i(cp({facetId: r, criterion: e})), i(l5()));
                    },
                    isSortedBy(e) {
                        return this.state.sortCriterion === e;
                    },
                    enable() {
                        i(l3(r));
                    },
                    disable() {
                        i(l4(r));
                    },
                    get state() {
                        let t = n(),
                            a = iJ(e.state, r),
                            i = t.sortCriteria,
                            s = a ? a.values : [],
                            l = iX(e.state),
                            u = o(),
                            c = s.some((e) => 'idle' !== e.state);
                        return {facetId: r, values: s, sortCriterion: i, hasActiveValues: c, isLoading: l, enabled: u};
                    },
                };
            }
            function dS(e, t) {
                if (!e.generateAutomaticRanges && void 0 === e.currentValues)
                    throw Error(`currentValues should be specified for ${t} when generateAutomaticRanges is false.`);
            }
            var db = ['idle', 'selected', 'excluded'],
                dw = ['ascending', 'descending'],
                dI = ['even', 'equiprobable'],
                dC = {start: new rO(), end: new rO(), endInclusive: new rI(), state: new rO({constrainTo: db})},
                dk = new rv({
                    facetId: uG,
                    field: uK,
                    generateAutomaticRanges: u3,
                    filterFacetCount: u1,
                    injectionDepth: u2,
                    numberOfValues: u5,
                    currentValues: new rA({each: new rx({values: dC})}),
                    sortCriteria: new rO({constrainTo: dw}),
                    rangeAlgorithm: new rO({constrainTo: dI}),
                });
            function dO(e, t) {
                (rL(e, dk, t, 'buildDateFacet'), cS(t));
            }
            function dq(e, t) {
                let r, n, a, i;
                let o =
                        (!(function (e) {
                            e.addReducers({configuration: lm, search: lp, dateFacetSet: dv, facetOptions: cF});
                        })(e),
                        dS(t.options, 'buildDateFacet'),
                        (r = e.dispatch),
                        (n = cj(e, t.options)),
                        dO(e, (a = {currentValues: [], ...t.options, facetId: n})),
                        r(cb(a)),
                        {
                            ...(i = dy(e, {facetId: n, getRequest: () => e.state.dateFacetSet[n].request})),
                            toggleSelect: (e) => r(dn({facetId: n, selection: e})),
                            toggleSingleSelect: function (e) {
                                ('idle' === e.state && r(co(n)), this.toggleSelect(e));
                            },
                            toggleExclude: (e) => r(da({facetId: n, selection: e})),
                            toggleSingleExclude: function (e) {
                                ('idle' === e.state && r(co(n)), this.toggleExclude(e));
                            },
                            get state() {
                                return i.state;
                            },
                        }),
                    s = e.dispatch,
                    l = () => o.state.facetId;
                return {
                    ...o,
                    deselectAll() {
                        (o.deselectAll(), s(s9(uz(l()))));
                    },
                    sortBy(e) {
                        (o.sortBy(e), s(s9(uN({facetId: l(), criterion: e}))));
                    },
                    toggleSelect: (e) => {
                        (o.toggleSelect(e), s(s9(c9(l(), e))));
                    },
                    toggleExclude: (e) => {
                        (o.toggleExclude(e), s(s9(c7(l(), e))));
                    },
                    get state() {
                        return o.state;
                    },
                };
            }
            var dx = tq({}, (e) => {
                e.addCase(cx, (e, t) => {
                    let {payload: r} = t;
                    ds(e, {request: {...di, currentValues: [], preventAutoSelect: !1, type: 'numericalRange', ...r}});
                })
                    .addCase(o4.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.numericFacetSet) ? n : e;
                    })
                    .addCase(oG, (e, t) => {
                        df(e, t.payload.nf || {});
                    })
                    .addCase(cR, (e, t) => {
                        let {facetId: r, selection: n} = t.payload;
                        du(e, r, n);
                    })
                    .addCase(cA, (e, t) => {
                        let {facetId: r, selection: n} = t.payload;
                        dc(e, r, n);
                    })
                    .addCase(cE, (e, t) => {
                        let {facetId: r, values: n} = t.payload;
                        dl(e, r, n);
                    })
                    .addCase(co, (e, t) => {
                        dd(e, t.payload);
                    })
                    .addCase(se, (e) => {
                        Object.keys(e).forEach((t) => {
                            dd(e, t);
                        });
                    })
                    .addCase(cp, (e, t) => {
                        ue(e, t.payload);
                    })
                    .addCase(s9.fulfilled, (e, t) => {
                        dp(e, t.payload.response.facets, dR);
                    })
                    .addCase(c$.fulfilled, (e, t) => {
                        var r, n;
                        dp(
                            e,
                            (null == (n = null == (r = t.payload.response) ? void 0 : r.facets) ? void 0 : n.results) ||
                                [],
                            dR,
                        );
                    })
                    .addCase(l4, (e, t) => {
                        dd(e, t.payload);
                    });
            });
            function dR(e) {
                return e.map((e) => {
                    let {numberOfResults: t, ...r} = e;
                    return r;
                });
            }
            var dA = {facetId: rD, selection: new rx({values: ch})},
                dE = tU('numericFacet/executeToggleSelect', (e, {dispatch: t, extra: {validatePayload: r}}) => {
                    (r(e, dA), t(cR(e)), t(de(e)), t(l5()));
                });
            tU('numericFacet/executeToggleExclude', (e, {dispatch: t, extra: {validatePayload: r}}) => {
                (r(e, dA), t(cA(e)), t(dt(e)), t(l5()));
            });
            var dF = {start: new rb(), end: new rb(), endInclusive: new rI(), state: new rO({constrainTo: db})},
                dD = new rv({
                    facetId: uG,
                    field: uK,
                    generateAutomaticRanges: u3,
                    filterFacetCount: u1,
                    injectionDepth: u2,
                    numberOfValues: u5,
                    currentValues: new rA({each: new rx({values: dF})}),
                    sortCriteria: new rO({constrainTo: dw}),
                    rangeAlgorithm: new rO({constrainTo: dI}),
                });
            function dj(e, t) {
                (rL(e, dD, t, 'buildNumericFacet'), cq(t));
            }
            function dP(e) {
                return {endInclusive: !1, state: 'idle', ...e};
            }
            function dT(e, t) {
                let r, n, a, i;
                !(function (e) {
                    e.addReducers({numericFacetSet: dx, configuration: lm, search: lp});
                })(e);
                let o =
                        (!(function (e) {
                            e.addReducers({numericFacetSet: dx, facetOptions: cF, configuration: lm, search: lp});
                        })(e),
                        dS(t.options, 'buildNumericFacet'),
                        (r = e.dispatch),
                        (n = cj(e, t.options)),
                        dj(e, (a = {currentValues: [], ...t.options, facetId: n})),
                        r(cx(a)),
                        {
                            ...(i = dy(e, {facetId: n, getRequest: () => e.state.numericFacetSet[n].request})),
                            toggleSelect: (e) => r(dE({facetId: n, selection: e})),
                            toggleSingleSelect(e) {
                                ('idle' === e.state && r(co(n)), this.toggleSelect(e));
                            },
                            get state() {
                                return i.state;
                            },
                        }),
                    s = e.dispatch,
                    l = () => o.state.facetId;
                return {
                    ...o,
                    deselectAll() {
                        (o.deselectAll(), s(s9(uz(l()))));
                    },
                    sortBy(e) {
                        (o.sortBy(e), s(s9(uN({facetId: l(), criterion: e}))));
                    },
                    toggleSelect: (e) => {
                        (o.toggleSelect(e), s(s9(c9(l(), e))));
                    },
                    get state() {
                        return {...o.state};
                    },
                };
            }
            var dV = (e, t) => {
                    let r = iJ(e, t);
                    if (r && r.facetId in e.numericFacetSet) return r;
                },
                dM = (e, t) => (dV(e, t) || {values: []}).values.filter((e) => 'idle' !== e.state),
                dU = (e, t) => (dV(e, t) || {values: []}).values.filter((e) => 'selected' === e.state);
            function dL(e, t) {
                !(function (e) {
                    e.addReducers({numericFacetSet: dx, configuration: lm, search: lp});
                })(e);
                let r = (function (e, t) {
                        var r;
                        !(function (e) {
                            e.addReducers({numericFacetSet: dx, facetOptions: cF, configuration: lm, search: lp});
                        })(e);
                        let n = lM(e),
                            {dispatch: a} = e,
                            i = () => e.state,
                            o = cj(e, t.options),
                            s = {
                                ...t.options,
                                currentValues: (null == (r = t.initialState) ? void 0 : r.range)
                                    ? [{...t.initialState.range, endInclusive: !0, state: 'selected'}]
                                    : [],
                                generateAutomaticRanges: !1,
                                facetId: o,
                            };
                        (dj(e, s), a(cx(s)));
                        let l = () => uJ(e.state, o);
                        return {
                            ...n,
                            clear: () => {
                                (a(cE({facetId: o, values: []})), a(l5()));
                            },
                            setRange: (e) => {
                                let t = cE({
                                    facetId: o,
                                    values: [{...e, state: 'selected', numberOfResults: 0, endInclusive: !0}],
                                });
                                return !t.error && (a(t), a(l5()), !0);
                            },
                            enable() {
                                a(l3(o));
                            },
                            disable() {
                                a(l4(o));
                            },
                            get state() {
                                let e = iX(i()),
                                    t = l(),
                                    r = dU(i(), o),
                                    n = r.length ? r[0] : void 0;
                                return {facetId: o, isLoading: e, range: n, enabled: t};
                            },
                        };
                    })(e, t),
                    {dispatch: n} = e,
                    a = () => r.state.facetId;
                return {
                    ...r,
                    clear: () => {
                        (r.clear(), n(s9(uz(a()))));
                    },
                    setRange: (e) => {
                        let t = r.setRange(e);
                        return (t && n(s9(uB({facetId: a(), facetValue: `${e.start}..${e.end}`}))), t);
                    },
                    get state() {
                        return {...r.state};
                    },
                };
            }
            var d$ = (e, t) => {
                    let r = iJ(e, t);
                    if (r && r.facetId in e.dateFacetSet) return r;
                },
                d_ = (e, t) => (d$(e, t) || {values: []}).values.filter((e) => 'selected' === e.state),
                dQ = (e, t) => (d$(e, t) || {values: []}).values.filter((e) => 'idle' !== e.state);
            function dN(e, t) {
                !(function (e) {
                    e.addReducers({dateFacetSet: dv, configuration: lm, search: lp});
                })(e);
                let r = (function (e, t) {
                        var r;
                        !(function (e) {
                            e.addReducers({dateFacetSet: dv, facetOptions: cF, configuration: lm, search: lp});
                        })(e);
                        let n = lM(e),
                            {dispatch: a} = e,
                            i = () => e.state,
                            o = cj(e, t.options),
                            s = {
                                ...t.options,
                                currentValues: (null == (r = t.initialState) ? void 0 : r.range)
                                    ? [{...t.initialState.range, endInclusive: !0, state: 'selected'}]
                                    : [],
                                generateAutomaticRanges: !1,
                                facetId: o,
                            };
                        (dO(e, s), a(cb(s)));
                        let l = () => uJ(e.state, o);
                        return {
                            ...n,
                            clear: () => {
                                (a(cC({facetId: o, values: []})), a(l5()));
                            },
                            setRange: (e) => {
                                let t = cC({
                                    facetId: o,
                                    values: [{...e, state: 'selected', numberOfResults: 0, endInclusive: !0}],
                                });
                                return !t.error && (a(t), a(l5()), !0);
                            },
                            enable() {
                                a(l3(o));
                            },
                            disable() {
                                a(l4(o));
                            },
                            get state() {
                                let e = iX(i()),
                                    t = l(),
                                    r = d_(i(), o),
                                    n = r.length ? r[0] : void 0;
                                return {facetId: o, isLoading: e, range: n, enabled: t};
                            },
                        };
                    })(e, t),
                    {dispatch: n} = e,
                    a = () => r.state.facetId;
                return {
                    ...r,
                    clear: () => {
                        (r.clear(), n(s9(uz(a()))));
                    },
                    setRange: (e) => {
                        let t = r.setRange(e);
                        return (t && n(s9(uB({facetId: a(), facetValue: `${e.start}..${e.end}`}))), t);
                    },
                    get state() {
                        return {...r.state};
                    },
                };
            }
            var dz = tq([], (e) => {
                    e.addCase(s9.fulfilled, (e, t) => t.payload.response.facets.map((e) => e.facetId)).addCase(
                        o4.fulfilled,
                        (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.facetOrder) ? n : e;
                        },
                    );
                }),
                dB = () => oR('history/analytics/forward', oq.Search, (e) => e.makeSearchEvent('historyForward')),
                dH = () => oR('history/analytics/backward', oq.Search, (e) => e.makeSearchEvent('historyBackward')),
                dY = () => oR('history/analytics/noresultsback', oq.Search, (e) => e.makeNoResultsBack());
            function dW(e, t, r = (e, t) => e === t) {
                return e.length === t.length && -1 === e.findIndex((e, n) => !r(t[n], e));
            }
            var dJ = (0, q(er()).createCustomEqual)(
                    (e) => (t, r) =>
                        Array.isArray(t) && Array.isArray(r)
                            ? t.length === r.length && t.every((t) => -1 !== r.findIndex((r) => e(t, r)))
                            : e(t, r),
                ),
                dG = tq(n0({}), (e) => {
                    e.addCase(o2, (e, t) => (dK(e, t.payload) ? void 0 : t.payload));
                }),
                dK = (e, t) =>
                    dZ(e.context, t.context) &&
                    dX(e.dictionaryFieldContext, t.dictionaryFieldContext) &&
                    d7(e.advancedSearchQueries, t.advancedSearchQueries) &&
                    d0(e.tabSet, t.tabSet) &&
                    d2(e.staticFilterSet, t.staticFilterSet) &&
                    d3(e.facetSet, t.facetSet) &&
                    d3(e.dateFacetSet, t.dateFacetSet) &&
                    d3(e.numericFacetSet, t.numericFacetSet) &&
                    d6(e.automaticFacetSet, t.automaticFacetSet) &&
                    d4(e.categoryFacetSet, t.categoryFacetSet) &&
                    d8(e.pagination, t.pagination) &&
                    d9(e.query, t.query) &&
                    fe(e, t) &&
                    ft(e.pipeline, t.pipeline) &&
                    fr(e.searchHub, t.searchHub) &&
                    fn(e.facetOrder, t.facetOrder) &&
                    fa(e.debug, t.debug),
                dZ = (e, t) => JSON.stringify(e.contextValues) === JSON.stringify(t.contextValues),
                dX = (e, t) => JSON.stringify(e.contextValues) === JSON.stringify(t.contextValues),
                d0 = (e, t) => {
                    let r = d1(e),
                        n = d1(t);
                    return (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id);
                },
                d1 = (e) => Object.values(e).find((e) => e.isActive),
                d2 = (e, t) => {
                    for (let [r, n] of Object.entries(t)) {
                        if (!e[r]) return !1;
                        let t = d5(e[r]),
                            a = d5(n);
                        if (JSON.stringify(t) !== JSON.stringify(a)) return !1;
                    }
                    return !0;
                },
                d5 = (e) => e.values.filter((e) => 'idle' !== e.state),
                d3 = (e, t) => {
                    for (let [r, n] of Object.entries(t)) {
                        if (!e[r]) return !1;
                        let t = e[r].request.currentValues.filter((e) => 'idle' !== e.state),
                            a = n.request.currentValues.filter((e) => 'idle' !== e.state);
                        if (JSON.stringify(t) !== JSON.stringify(a)) return !1;
                    }
                    return !0;
                },
                d4 = (e, t) => {
                    var r;
                    for (let [n, a] of Object.entries(t)) {
                        if (!e[n]) return !1;
                        let t = i0(null == (r = e[n]) ? void 0 : r.request.currentValues).parents.map(
                                ({value: e}) => e,
                            ),
                            i = i0(null == a ? void 0 : a.request.currentValues).parents.map(({value: e}) => e);
                        if (JSON.stringify(t) !== JSON.stringify(i)) return !1;
                    }
                    return !0;
                },
                d6 = (e, t) => {
                    for (let [r, n] of Object.entries(t.set)) {
                        if (!e.set[r]) return !1;
                        let t = e.set[r].response.values.filter((e) => 'idle' !== e.state),
                            a = n.response.values.filter((e) => 'idle' !== e.state);
                        if (JSON.stringify(t) !== JSON.stringify(a)) return !1;
                    }
                    return !0;
                },
                d8 = (e, t) => e.firstResult === t.firstResult && e.numberOfResults === t.numberOfResults,
                d9 = (e, t) => JSON.stringify(e) === JSON.stringify(t),
                d7 = (e, t) => JSON.stringify(e) === JSON.stringify(t),
                fe = (e, t) => e.sortCriteria === t.sortCriteria,
                ft = (e, t) => e === t,
                fr = (e, t) => e === t,
                fn = (e, t) => dW(e, t),
                fa = (e, t) => e === t,
                fi = ((e) => {
                    let {actionTypes: t, reducer: r} = e,
                        n = nY();
                    return (e = n, a) => {
                        switch (a.type) {
                            case t.undo:
                                return nW(e);
                            case t.redo:
                                return nJ(e);
                            case t.snapshot:
                                return nG({state: e, reducer: r, action: a});
                            default:
                                return e;
                        }
                    };
                })({actionTypes: {redo: o1.type, undo: o0.type, snapshot: o2.type}, reducer: dG});
            function fo(e) {
                !(function (e) {
                    e.addReducers({history: fi, configuration: lm, facetOrder: dz});
                })(e);
                let t = lM(e),
                    {dispatch: r} = e,
                    n = () => e.state,
                    a = (e) => e.past.length > 0 && !rS(e.present);
                return {
                    ...t,
                    get state() {
                        return n().history;
                    },
                    async back() {
                        a(this.state) && (await r(o5()), r(s9(dH())));
                    },
                    async forward() {
                        this.state.future.length && this.state.present && (await r(o3()), r(s9(dB())));
                    },
                    async backOnNoResults() {
                        a(this.state) && (await r(o5()), r(s9(dY())));
                    },
                };
            }
            var fs = new rb({min: 1, default: 8, required: !1}),
                fl = {desiredCount: new rb({min: 1, max: 10, default: 5, required: !1}), numberOfValues: fs},
                fu = tI('automaticFacet/setOptions', (e) => rM(e, fl)),
                fc = tI('automaticFacet/deselectAll', (e) => rM(e, rD)),
                fd = tI('automaticFacet/toggleSelectValue', (e) => rM(e, {field: rD, selection: new rx({values: ct})})),
                ff = tq(nk(), (e) => {
                    e.addCase(sf, (e, t) => {
                        let r = fh(e),
                            n = t.payload;
                        ((e.defaultNumberOfResults = e.numberOfResults = n), (e.firstResult = (r - 1) * n));
                    })
                        .addCase(sp, (e, t) => {
                            ((e.numberOfResults = t.payload), (e.firstResult = 0));
                        })
                        .addCase(lv, (e) => {
                            e.firstResult = 0;
                        })
                        .addCase(sh, (e, t) => {
                            var r;
                            let n = t.payload;
                            e.firstResult = (n - 1) * e.numberOfResults;
                        })
                        .addCase(sg, (e, t) => {
                            var r;
                            let n = t.payload;
                            e.firstResult = (n - 1) * e.numberOfResults;
                        })
                        .addCase(sm, (e) => {
                            var t;
                            let r = fh(e);
                            e.firstResult = (Math.max(r - 1, 1) - 1) * e.numberOfResults;
                        })
                        .addCase(sv, (e) => {
                            var t;
                            let r = Math.min(
                                fh(e) + 1,
                                (function (e) {
                                    let {totalCountFiltered: t, numberOfResults: r} = e;
                                    return fv(t, r);
                                })(e),
                            );
                            e.firstResult = (r - 1) * e.numberOfResults;
                        })
                        .addCase(o4.fulfilled, (e, t) => {
                            t.payload &&
                                ((e.numberOfResults = t.payload.pagination.numberOfResults),
                                (e.firstResult = t.payload.pagination.firstResult));
                        })
                        .addCase(oG, (e, t) => {
                            var r, n;
                            ((e.firstResult = null != (r = t.payload.firstResult) ? r : e.firstResult),
                                (e.numberOfResults =
                                    null != (n = t.payload.numberOfResults) ? n : e.defaultNumberOfResults));
                        })
                        .addCase(s9.fulfilled, (e, t) => {
                            let {response: r} = t.payload;
                            e.totalCountFiltered = r.totalCountFiltered;
                        })
                        .addCase(c$.fulfilled, (e, t) => {
                            let {response: r} = t.payload;
                            e.totalCountFiltered = r.pagination.totalCount;
                        })
                        .addCase(co, (e) => {
                            fp(e);
                        })
                        .addCase(ca, (e) => {
                            fp(e);
                        })
                        .addCase(uc, (e) => {
                            fp(e);
                        })
                        .addCase(uu, (e) => {
                            fp(e);
                        })
                        .addCase(l9, (e) => {
                            fp(e);
                        })
                        .addCase(cw, (e) => {
                            fp(e);
                        })
                        .addCase(cR, (e) => {
                            fp(e);
                        })
                        .addCase(se, (e) => {
                            fp(e);
                        })
                        .addCase(cC, (e) => {
                            fp(e);
                        })
                        .addCase(cE, (e) => {
                            fp(e);
                        })
                        .addCase(uM, (e) => {
                            fp(e);
                        })
                        .addCase(fd, (e) => {
                            fp(e);
                        });
                });
            function fp(e) {
                e.firstResult = nk().firstResult;
            }
            function fh(e) {
                let {firstResult: t, numberOfResults: r} = e;
                return fg(t, r);
            }
            function fg(e, t) {
                return Math.round(e / t) + 1;
            }
            function fv(e, t) {
                return Math.ceil(Math.min(e, 5e3) / t);
            }
            function fm(e) {
                return e.pagination.numberOfResults;
            }
            var fy = (e) => fg(e.pagination.firstResult, fm(e)),
                fS = (e) => fv(e.pagination.totalCountFiltered, fm(e)),
                fb = (e, t) => {
                    var r, n;
                    let a, i, o;
                    let s = fy(e),
                        l = fS(e),
                        u = {start: s - (a = Math.floor(t / 2)), end: s + (t % 2 == 0 ? a - 1 : a)};
                    return (function (e) {
                        let t = [];
                        for (let r = e.start; r <= e.end; ++r) t.push(r);
                        return t;
                    })(
                        ((i = Math.max(1 - (r = u).start, 0)),
                        (o = Math.max((n = u = {start: r.start + i, end: r.end + i}).end - l, 0)),
                        (u = {start: Math.max(n.start - o, 1), end: n.end - o})),
                    );
                },
                fw = () =>
                    oR('analytics/pager/resize', oq.Search, (e, t) => {
                        var r;
                        return e.makePagerResize({
                            currentResultsPerPage:
                                (null == (r = t.pagination) ? void 0 : r.numberOfResults) || nk().numberOfResults,
                        });
                    }),
                fI = () => oR('analytics/pager/number', oq.Search, (e, t) => e.makePagerNumber({pagerNumber: fy(t)})),
                fC = () => oR('analytics/pager/next', oq.Search, (e, t) => e.makePagerNext({pagerNumber: fy(t)})),
                fk = () =>
                    oR('analytics/pager/previous', oq.Search, (e, t) => e.makePagerPrevious({pagerNumber: fy(t)})),
                fO = new rv({numberOfPages: new rb({default: 5, min: 0})}),
                fq = new rv({page: new rb({min: 1})});
            function fx(e, t = {}) {
                let {dispatch: r} = e,
                    n = (function (e, t = {}) {
                        !(function (e) {
                            e.addReducers({configuration: lm, pagination: ff});
                        })(e);
                        let r = lM(e),
                            {dispatch: n} = e,
                            a = rL(e, fO, t.options, 'buildPager'),
                            i = rU(e, fq, t.initialState, 'buildPager').page;
                        i && n(sh(i));
                        let o = () => fy(e.state),
                            s = () => {
                                let {numberOfPages: t} = a;
                                return fb(e.state, t);
                            },
                            l = () => fS(e.state);
                        return {
                            ...r,
                            get state() {
                                let e = o(),
                                    t = l();
                                return {
                                    currentPage: e,
                                    currentPages: s(),
                                    maxPage: t,
                                    hasPreviousPage: e > 1 && t > 0,
                                    hasNextPage: e < t,
                                };
                            },
                            selectPage(e) {
                                n(sg(e));
                            },
                            nextPage() {
                                n(sv());
                            },
                            previousPage() {
                                n(sm());
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
                        (n.selectPage(e), r(s7(fI())));
                    },
                    nextPage() {
                        (n.nextPage(), r(s7(fC())));
                    },
                    previousPage() {
                        (n.previousPage(), r(s7(fk())));
                    },
                };
            }
            function fR(e) {
                let t, r;
                return (
                    !(function (e) {
                        e.addReducers({search: lp});
                    })(e),
                    (t = lM(e)),
                    (r = () => e.state),
                    {
                        ...t,
                        get state() {
                            return {hasError: null !== r().search.error, error: r().search.error};
                        },
                    }
                );
            }
            function fA(e) {
                !(function (e) {
                    e.addReducers({search: lp});
                })(e);
                let t = lM(e),
                    r = () => e.state;
                return {
                    ...t,
                    get state() {
                        let e = r();
                        return {
                            hasError: null !== e.search.error,
                            isLoading: e.search.isLoading,
                            hasResults: !!e.search.results.length,
                            firstSearchExecuted: lu(e),
                        };
                    },
                };
            }
            function fE(e) {
                let t, r, n, a;
                return (
                    !(function (e) {
                        e.addReducers({search: lp, pagination: ff});
                    })(e),
                    (t = lM(e)),
                    (r = fA(e)),
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
            var fF = new rv({fieldsToInclude: new rA({required: !1, each: new rO({required: !0, emptyAllowed: !1})})});
            function fD(e, t) {
                !(function (e) {
                    e.addReducers({search: lp, configuration: lm, fields: lH});
                })(e);
                let r = lM(e),
                    n = fA(e),
                    {dispatch: a} = e,
                    i = () => e.state,
                    o = rL(e, fF, null == t ? void 0 : t.options, 'buildCoreResultList');
                o.fieldsToInclude && a(lL(o.fieldsToInclude));
                let s = () => e.state.search.results.length < e.state.search.response.totalCountFiltered,
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
                            moreResultsAvailable: s(),
                            searchResponseId: e.search.searchResponseId,
                        };
                    },
                    fetchMoreResults: () => {
                        if (!e.state.search.isLoading) {
                            if (!s()) {
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
            function fj(e, t) {
                return fD(e, {...t, fetchMoreResultsActionCreator: le});
            }
            var fP = {
                    results: new rA({required: !0, each: new rx({values: oD})}),
                    maxLength: new rb({required: !0, min: 1, default: 10}),
                },
                fT = tI('recentResults/registerRecentResults', (e) => rM(e, fP)),
                fV = tI('recentResults/pushRecentResult', (e) => (oj(e), {payload: e})),
                fM = tI('recentResults/clearRecentResults'),
                fU = (e) =>
                    oR('analytics/result/open', oq.Click, (t, r) => (oj(e), t.makeDocumentOpen(oA(e, r), oE(e))));
            function fL(e, t, r) {
                let n;
                !(function (e) {
                    e.addReducers({configuration: lm});
                })(e);
                return (
                    t.options,
                    {
                        select: ly(r, 1e3, {isImmediate: !0}),
                        beginDelayedSelect() {
                            n = setTimeout(r, 1e3);
                        },
                        cancelPendingSelect() {
                            n && clearTimeout(n);
                        },
                    }
                );
            }
            function f$(e, t) {
                let r = !1,
                    n = () => {
                        r || ((r = !0), e.dispatch(fU(t.options.result)));
                    };
                return fL(e, t, () => {
                    (n(), e.dispatch(fV(t.options.result)));
                });
            }
            function f_(e, t) {
                let r = !1,
                    n = () => {
                        r || ((r = !0), e.dispatch(sa(t.options.result)));
                    };
                return fL(e, t, () => {
                    (n(), e.dispatch(fV(t.options.result)));
                });
            }
            var fQ = new rv({numberOfResults: new rb({min: 0})});
            function fN(e, t = {}) {
                !(function (e) {
                    e.addReducers({pagination: ff, configuration: lm});
                })(e);
                let r = (function (e, t = {}) {
                        !(function (e) {
                            e.addReducers({pagination: ff, configuration: lm});
                        })(e);
                        let r = lM(e),
                            {dispatch: n} = e,
                            a = () => e.state,
                            i = rU(e, fQ, t.initialState, 'buildResultsPerPage').numberOfResults;
                        return (
                            void 0 !== i && n(sf(i)),
                            {
                                ...r,
                                get state() {
                                    return {numberOfResults: a().pagination.numberOfResults};
                                },
                                set(e) {
                                    n(sp(e));
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
                        (r.set(e), n(s7(fw())));
                    },
                };
            }
            var fz = {id: rD},
                fB = tI('querySuggest/register', (e) => rM(e, {...fz, count: new rb({min: 0})})),
                fH = tI('querySuggest/unregister', (e) => rM(e, fz)),
                fY = tI('querySuggest/selectSuggestion', (e) => rM(e, {...fz, expression: rP})),
                fW = tI('querySuggest/clear', (e) => rM(e, fz)),
                fJ = tU(
                    'querySuggest/fetch',
                    async (e, {getState: t, rejectWithValue: r, extra: {apiClient: n, validatePayload: a}}) => {
                        a(e, fz);
                        let i = e.id,
                            o = await fG(i, t()),
                            s = await n.querySuggest(o);
                        return nv(s) ? r(s.error) : {id: i, q: o.q, ...s.success};
                    },
                ),
                fG = async (e, t) => ({
                    accessToken: t.configuration.accessToken,
                    organizationId: t.configuration.organizationId,
                    url: t.configuration.search.apiBaseUrl,
                    count: t.querySuggest[e].count,
                    q: t.querySet[e],
                    locale: t.configuration.search.locale,
                    timezone: t.configuration.search.timezone,
                    actionsHistory: t.configuration.analytics.enabled ? ob.getHistory() : [],
                    ...(t.context && {context: t.context.contextValues}),
                    ...(t.pipeline && {pipeline: t.pipeline}),
                    ...(t.searchHub && {searchHub: t.searchHub}),
                    ...(t.configuration.analytics.enabled && {
                        visitorId: await oy(t.configuration.analytics),
                        ...(t.configuration.analytics.enabled && (await sS(t.configuration.analytics))),
                    }),
                    ...(t.configuration.search.authenticationProviders.length && {
                        authentication: t.configuration.search.authenticationProviders.join(','),
                    }),
                }),
                fK = () => oR('analytics/searchbox/submit', oq.Search, (e) => e.makeSearchboxSubmit()),
                fZ = {id: rD, query: rP},
                fX = tI('querySet/register', (e) => rM(e, fZ)),
                f0 = tI('querySet/update', (e) => rM(e, fZ)),
                f1 = tq({}, (e) => {
                    e.addCase(fX, (e, t) => {
                        let {id: r, query: n} = t.payload;
                        r in e || (e[r] = n);
                    })
                        .addCase(f0, (e, t) => {
                            let {id: r, query: n} = t.payload;
                            f5(e, r, n);
                        })
                        .addCase(fY, (e, t) => {
                            let {id: r, expression: n} = t.payload;
                            f5(e, r, n);
                        })
                        .addCase(s9.fulfilled, (e, t) => {
                            let {queryExecuted: r} = t.payload;
                            f2(e, r);
                        })
                        .addCase(oG, (e, t) => {
                            rS(t.payload.q) || f2(e, t.payload.q);
                        })
                        .addCase(o4.fulfilled, (e, t) => {
                            if (t.payload) for (let [r, n] of Object.entries(t.payload.querySet)) f5(e, r, n);
                        });
                });
            function f2(e, t) {
                Object.keys(e).forEach((r) => (e[r] = t));
            }
            var f5 = (e, t, r) => {
                    t in e && (e[t] = r);
                },
                f3 = (e) =>
                    oR('analytics/querySuggest', oq.Search, (t, r) => {
                        let n = f4(r, e);
                        return t.makeOmniboxAnalytics(n);
                    });
            function f4(e, t) {
                let {id: r, suggestion: n} = t,
                    a = e.querySuggest && e.querySuggest[r];
                if (!a)
                    throw Error(
                        `Unable to determine the query suggest analytics metadata to send because no query suggest with id "${r}" was found. Please check the sent #id.`,
                    );
                let i = a.completions.map((e) => e.expression),
                    o = a.partialQueries.length - 1,
                    s = a.partialQueries[o] || '',
                    l = a.responseId;
                return {
                    suggestionRanking: i.indexOf(n),
                    partialQuery: s,
                    partialQueries: a.partialQueries,
                    suggestions: i,
                    querySuggestResponseId: l,
                };
            }
            var f6 = tq({}, (e) =>
                    e
                        .addCase(fB, (e, t) => {
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
                        .addCase(fH, (e, t) => {
                            delete e[t.payload.id];
                        })
                        .addCase(fJ.pending, (e, t) => {
                            let r = e[t.meta.arg.id];
                            r && ((r.currentRequestId = t.meta.requestId), (r.isLoading = !0));
                        })
                        .addCase(fJ.fulfilled, (e, t) => {
                            let r = e[t.meta.arg.id];
                            if (!r || t.meta.requestId !== r.currentRequestId) return;
                            let {q: n} = t.payload;
                            (n && r.partialQueries.push(n.replace(/;/, encodeURIComponent(';'))),
                                (r.responseId = t.payload.responseId),
                                (r.completions = t.payload.completions),
                                (r.isLoading = !1),
                                (r.error = null));
                        })
                        .addCase(fJ.rejected, (e, t) => {
                            let r = e[t.meta.arg.id];
                            r && ((r.error = t.payload || null), (r.isLoading = !1));
                        })
                        .addCase(fW, (e, t) => {
                            let r = e[t.payload.id];
                            r && ((r.responseId = ''), (r.completions = []), (r.partialQueries = []));
                        }),
                ),
                f8 = tq(nO(), (e) =>
                    e
                        .addCase(sy, (e, t) => ({...e, ...t.payload}))
                        .addCase(sC, (e, t) => {
                            e.q = t.payload;
                        })
                        .addCase(fY, (e, t) => {
                            e.q = t.payload.expression;
                        })
                        .addCase(o4.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.query) ? n : e;
                        })
                        .addCase(oG, (e, t) => {
                            var r, n;
                            ((e.q = null != (r = t.payload.q) ? r : e.q),
                                (e.enableQuerySyntax =
                                    null != (n = t.payload.enableQuerySyntax) ? n : e.enableQuerySyntax));
                        }),
                ),
                f9 = {enableQuerySyntax: !1, numberOfSuggestions: 5, clearFilters: !0},
                f7 = {open: new rO(), close: new rO()},
                pe = {
                    id: rD,
                    numberOfSuggestions: new rb({min: 0}),
                    enableQuerySyntax: new rI(),
                    highlightOptions: new rx({
                        values: {
                            notMatchDelimiters: new rx({values: f7}),
                            exactMatchDelimiters: new rx({values: f7}),
                            correctionDelimiters: new rx({values: f7}),
                        },
                    }),
                    clearFilters: new rI(),
                },
                pt = new rv(pe);
            function pr(e, t = {}) {
                let r = (function (e, t) {
                    var r, n;
                    !(function (e) {
                        e.addReducers({query: f8, querySuggest: f6, configuration: lm, querySet: f1, search: lp});
                    })(e);
                    let a = lM(e),
                        {dispatch: i} = e,
                        o = () => e.state,
                        s = (null == (r = t.options) ? void 0 : r.id) || n5('search_box'),
                        l = {
                            id: s,
                            highlightOptions: {...(null == (n = t.options) ? void 0 : n.highlightOptions)},
                            ...f9,
                            ...t.options,
                        };
                    (rL(e, pt, l, 'buildSearchBox'),
                        i(fX({id: s, query: e.state.query.q})),
                        l.numberOfSuggestions && i(fB({id: s, count: l.numberOfSuggestions})));
                    let u = () => e.state.querySet[l.id],
                        c = async (e) => {
                            let {enableQuerySyntax: r, clearFilters: n} = l;
                            (i(s8({q: u(), enableQuerySyntax: r, clearFilters: n})),
                                await i(t.executeSearchActionCreator(e)));
                        };
                    return {
                        ...a,
                        updateText(e) {
                            (i(f0({id: s, query: e})), this.showSuggestions());
                        },
                        clear() {
                            (i(f0({id: s, query: ''})), i(fW({id: s})));
                        },
                        showSuggestions() {
                            l.numberOfSuggestions && i(t.fetchQuerySuggestionsActionCreator({id: s}));
                        },
                        selectSuggestion(e) {
                            (i(fY({id: s, expression: e})),
                                c(f3({id: s, suggestion: e})).then(() => {
                                    i(fW({id: s}));
                                }));
                        },
                        submit(e = fK()) {
                            (c(e), i(fW({id: s})));
                        },
                        get state() {
                            var d;
                            let e = o(),
                                t = e.querySuggest[l.id],
                                r =
                                    ((d = l.highlightOptions),
                                    t
                                        ? t.completions.map((e) => ({
                                              highlightedValue: at(e.highlighted, d),
                                              rawValue: e.expression,
                                          }))
                                        : []),
                                n = !!t && t.isLoading;
                            return {value: u(), suggestions: r, isLoading: e.search.isLoading, isLoadingSuggestions: n};
                        },
                    };
                })(e, {...t, executeSearchActionCreator: s9, fetchQuerySuggestionsActionCreator: fJ});
                return {
                    ...r,
                    submit() {
                        r.submit(fK());
                    },
                    get state() {
                        return r.state;
                    },
                };
            }
            var pn = tq({}, (e) => {
                    (e.addCase(sl, (e, t) => {
                        let {id: r} = t.payload;
                        e[r] || (e[r] = {q: '', cache: {}});
                    }),
                        e.addCase(su, (e, t) => {
                            let {q: r, id: n} = t.payload;
                            r && (e[n].q = r);
                        }),
                        e.addCase(sc, (e, t) => {
                            let {id: r} = t.payload;
                            Object.entries(e[r].cache).forEach(([t, n]) => {
                                nX(n) && delete e[r].cache[t];
                            });
                        }),
                        e.addCase(lr.pending, (e, t) => {
                            for (let t in e) for (let r in e[t].cache) e[t].cache[r].isActive = !1;
                            if (!pi(e, t.meta)) {
                                pa(e, t.meta);
                                return;
                            }
                            let r = pi(e, t.meta);
                            ((r.isLoading = !0), (r.isActive = !0), (r.error = null));
                        }),
                        e.addCase(lr.fulfilled, (e, t) => {
                            let {results: r, searchUid: n, totalCountFiltered: a, duration: i} = t.payload,
                                {cacheTimeout: o} = t.meta.arg,
                                s = pi(e, t.meta);
                            ((s.isActive = !0),
                                (s.searchUid = n),
                                (s.isLoading = !1),
                                (s.error = null),
                                (s.results = r),
                                (s.expiresAt = o ? o + Date.now() : 0),
                                (s.totalCountFiltered = a),
                                (s.duration = i));
                        }),
                        e.addCase(lr.rejected, (e, t) => {
                            let r = pi(e, t.meta);
                            ((r.error = t.error || null), (r.isLoading = !1), (r.isActive = !1));
                        }));
                }),
                pa = (e, t) => {
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
                pi = (e, t) => {
                    let {q: r, id: n} = t.arg;
                    return e[n].cache[r] || null;
                },
                po = {searchBoxId: rj, maxResultsPerQuery: new rb({required: !0, min: 1}), cacheTimeout: new rb()},
                ps = new rv(po);
            function pl(e, t) {
                !(function (e) {
                    e.addReducers({instantResults: pn});
                })(e);
                let r = lM(e),
                    {dispatch: n} = e,
                    a = () => e.state,
                    i = {
                        searchBoxId: t.options.searchBoxId || n5('instant-results-'),
                        cacheTimeout: t.options.cacheTimeout || 6e4,
                        maxResultsPerQuery: t.options.maxResultsPerQuery,
                    };
                rL(e, ps, i, 'buildInstantResults');
                let o = i.searchBoxId;
                n(sl({id: o}));
                let s = () => a().instantResults[o],
                    l = (e) => s().cache[e],
                    u = () => s().q,
                    c = () => {
                        let e = l(u());
                        return e ? (e.isLoading ? [] : e.results) : [];
                    };
                return {
                    ...r,
                    updateQuery(e) {
                        if (!e) return;
                        let t = l(e);
                        ((!t || (!t.isLoading && (t.error || nX(t)))) &&
                            n(
                                lr({
                                    id: o,
                                    q: e,
                                    maxResultsPerQuery: i.maxResultsPerQuery,
                                    cacheTimeout: i.cacheTimeout,
                                }),
                            ),
                            n(su({id: o, q: e})));
                    },
                    clearExpired() {
                        n(sc({id: o}));
                    },
                    get state() {
                        let e = u(),
                            t = l(e);
                        return {
                            q: e,
                            isLoading: (null == t ? void 0 : t.isLoading) || !1,
                            error: (null == t ? void 0 : t.error) || null,
                            results: c(),
                        };
                    },
                };
            }
            var pu = () =>
                    oR('analytics/sort/results', oq.Search, (e, t) =>
                        e.makeResultsSort({resultsSortBy: t.sortCriteria || nV()}),
                    ),
                pc = {by: new rF({enum: nR, required: !0})},
                pd = tI('sortCriteria/register', (e) => pp(e)),
                pf = tI('sortCriteria/update', (e) => pp(e)),
                pp = (e) => (rE(e) ? (e.forEach((e) => rM(e, pc)), {payload: e}) : rM(e, pc)),
                ph = tq(nV(), (e) => {
                    e.addCase(pd, (e, t) => nA(t.payload))
                        .addCase(pf, (e, t) => nA(t.payload))
                        .addCase(o4.fulfilled, (e, t) => {
                            var r, n;
                            return null != (n = null == (r = t.payload) ? void 0 : r.sortCriteria) ? n : e;
                        })
                        .addCase(oG, (e, t) => {
                            var r;
                            return null != (r = t.payload.sortCriteria) ? r : e;
                        });
                });
            function pg(e, t = {}) {
                let {dispatch: r} = e,
                    n = (function (e, t) {
                        var r;
                        !(function (e) {
                            e.addReducers({configuration: lm, sortCriteria: ph});
                        })(e);
                        let n = lM(e),
                            {dispatch: a} = e,
                            i = () => e.state;
                        !(function (e, t) {
                            if (!t) return;
                            let r = new rv({criterion: new rA({each: nT})}),
                                n = t.criterion ? (rE(t.criterion) ? t.criterion : [t.criterion]) : [];
                            rU(e, r, {...t, criterion: n}, 'buildSort');
                        })(e, t.initialState);
                        let o = null == (r = t.initialState) ? void 0 : r.criterion;
                        return (
                            o && a(pd(o)),
                            {
                                ...n,
                                sortBy(e) {
                                    (a(pf(e)), a(sg(1)));
                                },
                                isSortedBy(e) {
                                    return this.state.sortCriteria === nA(e);
                                },
                                get state() {
                                    return {sortCriteria: i().sortCriteria};
                                },
                            }
                        );
                    })(e, t),
                    a = () => r(s9(pu()));
                return {
                    ...n,
                    get state() {
                        return n.state;
                    },
                    sortBy(e) {
                        (n.sortBy(e), a());
                    },
                };
            }
            var pv = new rx({
                    options: {required: !0},
                    values: {
                        caption: rP,
                        expression: rP,
                        state: new rO({constrainTo: ['idle', 'selected', 'excluded']}),
                    },
                }),
                pm = new rA({required: !0, each: pv}),
                py = tI('staticFilter/register', (e) => rM(e, {id: rD, values: pm})),
                pS = tI('staticFilter/toggleSelect', (e) => rM(e, {id: rD, value: pv})),
                pb = tI('staticFilter/toggleExclude', (e) => rM(e, {id: rD, value: pv})),
                pw = tI('staticFilter/deselectAllFilterValues', (e) => rM(e, rD)),
                pI = (e) => oR('analytics/staticFilter/deselect', oq.Search, (t) => t.makeStaticFilterDeselect(e));
            tq({}, (e) =>
                e
                    .addCase(py, (e, t) => {
                        let r = t.payload,
                            {id: n} = r;
                        n in e || (e[n] = r);
                    })
                    .addCase(pS, (e, t) => {
                        let {id: r, value: n} = t.payload,
                            a = e[r];
                        if (!a) return;
                        let i = a.values.find((e) => e.caption === n.caption);
                        if (!i) return;
                        let o = 'selected' === i.state;
                        i.state = o ? 'idle' : 'selected';
                    })
                    .addCase(pb, (e, t) => {
                        let {id: r, value: n} = t.payload,
                            a = e[r];
                        if (!a) return;
                        let i = a.values.find((e) => e.caption === n.caption);
                        if (!i) return;
                        let o = 'excluded' === i.state;
                        i.state = o ? 'idle' : 'excluded';
                    })
                    .addCase(pw, (e, t) => {
                        let r = e[t.payload];
                        r && r.values.forEach((e) => (e.state = 'idle'));
                    })
                    .addCase(se, (e) => {
                        Object.values(e).forEach((e) => {
                            e.values.forEach((e) => (e.state = 'idle'));
                        });
                    })
                    .addCase(oG, (e, t) => {
                        let r = t.payload.sf || {};
                        Object.entries(e).forEach(([e, t]) => {
                            let n = r[e] || [];
                            t.values.forEach((e) => {
                                e.state = n.includes(e.caption) ? 'selected' : 'idle';
                            });
                        });
                    }),
            );
            var pC = tq({}, (e) => {
                e.addCase(lg, (e, t) => {
                    let r = t.payload,
                        {id: n} = r;
                    n in e || (e[n] = {...r, isActive: !1});
                })
                    .addCase(lv, (e, t) => {
                        pk(e, t.payload);
                    })
                    .addCase(oG, (e, t) => {
                        pk(e, t.payload.tab || '');
                    })
                    .addCase(o4.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.tabSet) ? n : e;
                    });
            });
            function pk(e, t) {
                t in e &&
                    Object.keys(e).forEach((r) => {
                        e[r].isActive = r === t;
                    });
            }
            var pO = new rv({expression: rP, id: rD}),
                pq = new rv({isActive: new rI()});
            function px(e, t) {
                let {dispatch: r} = e,
                    n = (function (e, t) {
                        ((function (e) {
                            let t = r1().analytics.originLevel2;
                            if (e === t)
                                throw Error(
                                    `The #id option on the Tab controller cannot use the reserved value "${t}". Please specify a different value.`,
                                );
                        })(t.options.id),
                            (function (e) {
                                e.addReducers({configuration: lm, tabSet: pC});
                            })(e));
                        let r = lM(e),
                            {dispatch: n} = e;
                        rL(e, pO, t.options, 'buildTab');
                        let a = rU(e, pq, t.initialState, 'buildTab'),
                            {id: i, expression: o} = t.options;
                        return (
                            n(lg({id: i, expression: o})),
                            a.isActive && n(lv(i)),
                            {
                                ...r,
                                select() {
                                    n(lv(i));
                                },
                                get state() {
                                    var s;
                                    return {isActive: null == (s = e.state.tabSet[i]) ? void 0 : s.isActive};
                                },
                            }
                        );
                    })(e, t),
                    a = () => r(s9(oM()));
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
            function pR(e) {
                let t, r;
                return (
                    !(function (e) {
                        e.addReducers({search: lp, facetOptions: cF});
                    })(e),
                    (t = lM(e)),
                    (r = () => e.state),
                    {
                        ...t,
                        sort(e) {
                            return s1(e, this.state.facetIds);
                        },
                        get state() {
                            return {facetIds: r().search.response.facets.map((e) => e.facetId)};
                        },
                    }
                );
            }
            var pA = {categoryFacetId: rD, categoryFacetPath: new rA({required: !0, each: rD})},
                pE = (e, {categoryFacetId: t, categoryFacetPath: r}) => {
                    let n = e.categoryFacetSet[t],
                        a = null == n ? void 0 : n.request.field,
                        i = `${a}_${t}`;
                    return {categoryFacetId: t, categoryFacetPath: r, categoryFacetField: a, categoryFacetTitle: i};
                },
                pF = (e) =>
                    oR(
                        'analytics/categoryFacet/breadcrumb',
                        oq.Search,
                        (t, r) => (rM(e, pA), t.makeBreadcrumbFacet(pE(r, e))),
                    ),
                pD = () => oR('analytics/facet/deselectAllBreadcrumbs', oq.Search, (e) => e.makeBreadcrumbResetAll()),
                pj = (e, {facetId: t, selection: r}) => {
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
                pP = (e) =>
                    oR('analytics/dateFacet/breadcrumb', oq.Search, (t, r) => {
                        rM(e, cv(e.selection));
                        let n = pj(r, e);
                        return t.makeBreadcrumbFacet(n);
                    }),
                pT = (e) =>
                    oR('analytics/numericFacet/breadcrumb', oq.Search, (t, r) => {
                        rM(e, cv(e.selection));
                        let n = pj(r, e);
                        return t.makeBreadcrumbFacet(n);
                    }),
                pV = (e) =>
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
            function pM(e) {
                !(function (e) {
                    e.addReducers({
                        configuration: lm,
                        search: lp,
                        facetSet: cQ,
                        numericFacetSet: dx,
                        dateFacetSet: dv,
                        categoryFacetSet: uh,
                    });
                })(e);
                let t = (function (e) {
                        let t = lM(e),
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
                                r(se());
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
                                let n = uW({facetId: e, facetValue: t.value});
                                (r(ca({facetId: e, selection: t})),
                                    r(cc({facetId: e, freezeCurrentValues: !1})),
                                    r(s9(n)));
                            },
                            executeToggleExclude: ({facetId: e, selection: t}) => {
                                let n = uW({facetId: e, facetValue: t.value});
                                (r(ci({facetId: e, selection: t})),
                                    r(cc({facetId: e, freezeCurrentValues: !1})),
                                    r(s9(n)));
                            },
                            facetValuesSelector: iZ,
                        };
                        return pV(t);
                    },
                    i = () => {
                        let t = {
                            engine: e,
                            facetSet: n().numericFacetSet,
                            executeToggleSelect: (e) => {
                                (r(cR(e)), r(s9(pT(e))));
                            },
                            executeToggleExclude: (e) => {
                                (r(cA(e)), r(s9(pT(e))));
                            },
                            facetValuesSelector: dM,
                        };
                        return pV(t);
                    },
                    o = () => {
                        let t = {
                            engine: e,
                            facetSet: n().dateFacetSet,
                            executeToggleSelect: (e) => {
                                (r(cw(e)), r(s9(pP(e))));
                            },
                            executeToggleExclude: (e) => {
                                (r(cI(e)), r(s9(pP(e))));
                            },
                            facetValuesSelector: dQ,
                        };
                        return pV(t);
                    },
                    s = () =>
                        Object.keys(n().categoryFacetSet)
                            .map(l)
                            .filter((e) => e.path.length),
                    l = (e) => {
                        let t = i5(n(), e);
                        return {
                            facetId: e,
                            field: n().categoryFacetSet[e].request.field,
                            path: t,
                            deselect: () => {
                                (r(uc(e)), r(s9(pF({categoryFacetPath: t.map((e) => e.value), categoryFacetId: e}))));
                            },
                        };
                    },
                    u = () => {
                        var e;
                        return Object.values(null != (e = n().staticFilterSet) ? e : {}).map(c);
                    },
                    c = (e) => {
                        let {id: t, values: r} = e,
                            n = r.filter((e) => 'idle' !== e.state).map((e) => d(t, e));
                        return {id: t, values: n};
                    },
                    d = (e, t) => ({
                        value: t,
                        deselect: () => {
                            let {caption: n, expression: a} = t,
                                i = pI({staticFilterId: e, staticFilterValue: {caption: n, expression: a}});
                            ('selected' === t.state
                                ? r(pS({id: e, value: t}))
                                : 'excluded' === t.state && r(pb({id: e, value: t})),
                                r(s9(i)));
                        },
                    }),
                    f = () => {
                        var e, t;
                        return Object.values(
                            null != (t = null == (e = n().automaticFacetSet) ? void 0 : e.set) ? t : {},
                        ).map((e) => p(e.response));
                    },
                    p = (e) => {
                        let {field: t, label: r} = e,
                            n = e.values.filter((e) => 'selected' === e.state).map((e) => h(t, e));
                        return {facetId: t, field: t, label: r, values: n};
                    },
                    h = (e, t) => ({
                        value: t,
                        deselect: () => {
                            let n = uW({facetId: e, facetValue: t.value});
                            (r(fd({field: e, selection: t})), r(s9(n)));
                        },
                    });
                return {
                    ...t,
                    get state() {
                        return {
                            facetBreadcrumbs: a(),
                            categoryFacetBreadcrumbs: s(),
                            numericFacetBreadcrumbs: i(),
                            dateFacetBreadcrumbs: o(),
                            staticFilterBreadcrumbs: u(),
                            automaticFacetBreadcrumbs: f(),
                            hasBreadcrumbs: !![...a(), ...i(), ...o(), ...s(), ...u(), ...f()].length,
                        };
                    },
                    deselectAll: () => {
                        (t.deselectAll(), r(s9(pD())));
                    },
                };
            }
            function pU(e) {
                return 'redirect' === e.type;
            }
            var pL = class {
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
                        let e = this.response.preprocessingOutput.triggers.filter(pU);
                        return e.length ? e[0].content : null;
                    }
                },
                p$ = tI('standaloneSearchBox/register', (e) => rM(e, {id: rD, redirectionUrl: rD})),
                p_ = tI('standaloneSearchBox/reset', (e) => rM(e, {id: rD})),
                pQ = tI('standaloneSearchBox/updateAnalyticsToSearchFromLink', (e) => rM(e, {id: rD})),
                pN = tI('standaloneSearchBox/updateAnalyticsToOmniboxFromLink'),
                pz = tU(
                    'standaloneSearchBox/fetchRedirect',
                    async (
                        e,
                        {dispatch: t, getState: r, rejectWithValue: n, extra: {apiClient: a, validatePayload: i}},
                    ) => {
                        i(e, {id: new rO({emptyAllowed: !1})});
                        let o = await pH(r()),
                            s = await a.plan(o);
                        if (nv(s)) return n(s.error);
                        let {redirectionUrl: l} = new pL(s.success);
                        return (l && t(pB(l)), l || '');
                    },
                ),
                pB = (e) =>
                    oR('analytics/standaloneSearchBox/redirect', oq.Custom, (t) =>
                        t.makeTriggerRedirect({redirectedTo: e}),
                    ),
                pH = async (e) => ({
                    accessToken: e.configuration.accessToken,
                    organizationId: e.configuration.organizationId,
                    url: e.configuration.search.apiBaseUrl,
                    locale: e.configuration.search.locale,
                    timezone: e.configuration.search.timezone,
                    q: e.query.q,
                    ...(e.context && {context: e.context.contextValues}),
                    ...(e.pipeline && {pipeline: e.pipeline}),
                    ...(e.searchHub && {searchHub: e.searchHub}),
                    ...(e.configuration.analytics.enabled && {visitorId: await oy(e.configuration.analytics)}),
                    ...(e.configuration.analytics.enabled && (await sS(e.configuration.analytics))),
                    ...(e.configuration.search.authenticationProviders.length && {
                        authentication: e.configuration.search.authenticationProviders.join(','),
                    }),
                }),
                pY = tq({}, (e) =>
                    e
                        .addCase(p$, (e, t) => {
                            let {id: r, redirectionUrl: n} = t.payload;
                            r in e || (e[r] = pW(n));
                        })
                        .addCase(p_, (e, t) => {
                            let {id: r} = t.payload,
                                n = e[r];
                            if (n) {
                                e[r] = pW(n.defaultRedirectionUrl);
                                return;
                            }
                        })
                        .addCase(pz.pending, (e, t) => {
                            let r = e[t.meta.arg.id];
                            r && (r.isLoading = !0);
                        })
                        .addCase(pz.fulfilled, (e, t) => {
                            let r = t.payload,
                                n = e[t.meta.arg.id];
                            n && ((n.redirectTo = r || n.defaultRedirectionUrl), (n.isLoading = !1));
                        })
                        .addCase(pz.rejected, (e, t) => {
                            let r = e[t.meta.arg.id];
                            r && (r.isLoading = !1);
                        })
                        .addCase(pQ, (e, t) => {
                            let r = e[t.payload.id];
                            r && (r.analytics.cause = 'searchFromLink');
                        })
                        .addCase(pN, (e, t) => {
                            let r = e[t.payload.id];
                            r && ((r.analytics.cause = 'omniboxFromLink'), (r.analytics.metadata = t.payload.metadata));
                        }),
                );
            function pW(e) {
                return {
                    defaultRedirectionUrl: e,
                    redirectTo: '',
                    isLoading: !1,
                    analytics: {cause: '', metadata: null},
                };
            }
            var pJ = new rv({...pe, redirectionUrl: new rO({required: !0, emptyAllowed: !1})});
            function pG(e, t) {
                !(function (e) {
                    e.addReducers({standaloneSearchBoxSet: pY, configuration: lm, query: f8, querySuggest: f6});
                })(e);
                let {dispatch: r} = e,
                    n = () => e.state,
                    a = t.options.id || n5('standalone_search_box'),
                    i = {id: a, highlightOptions: {...t.options.highlightOptions}, ...f9, ...t.options};
                rL(e, pJ, i, 'buildStandaloneSearchBox');
                let o = pr(e, {options: i});
                return (
                    r(p$({id: a, redirectionUrl: i.redirectionUrl})),
                    {
                        ...o,
                        updateText(e) {
                            (o.updateText(e), r(pQ({id: a})));
                        },
                        selectSuggestion(e) {
                            let t = f4(n(), {id: a, suggestion: e});
                            (r(fY({id: a, expression: e})), r(pN({id: a, metadata: t})), this.submit());
                        },
                        afterRedirection() {
                            r(p_({id: a}));
                        },
                        submit() {
                            (r(sy({q: this.state.value, enableQuerySyntax: i.enableQuerySyntax})), r(pz({id: a})));
                        },
                        get state() {
                            let e = n().standaloneSearchBoxSet[a];
                            return {
                                ...o.state,
                                isLoading: e.isLoading,
                                redirectTo: e.redirectTo,
                                analytics: e.analytics,
                            };
                        },
                    }
                );
            }
            function pK(e = {}, t = {}) {
                return JSON.stringify(e) !== JSON.stringify(t);
            }
            function pZ(e) {
                let t = {};
                return (Object.keys(e).forEach((r) => (t[r] = e[r].map((e) => `${e.start}..${e.end}`))), t);
            }
            function pX(e = {}, t = {}) {
                let r = Object.keys(e),
                    n = Object.keys(t),
                    a = r.filter((e) => !n.includes(e));
                if (a.length) {
                    let t = a[0];
                    return e[t].length > 1 ? uz(t) : uY({facetId: t, facetValue: e[t][0]});
                }
                let i = n.filter((e) => !r.includes(e));
                if (i.length) {
                    let e = i[0];
                    return uB({facetId: e, facetValue: t[e][0]});
                }
                let o = n.find((r) => t[r].filter((t) => e[r].includes(t)));
                if (!o) return oM();
                let s = e[o],
                    l = t[o],
                    u = l.filter((e) => !s.includes(e));
                if (u.length) return uB({facetId: o, facetValue: u[0]});
                let c = s.filter((e) => !l.includes(e));
                return c.length ? uY({facetId: o, facetValue: c[0]}) : oM();
            }
            function p0(e = {}, t = {}) {
                return pX(pZ(e), pZ(t));
            }
            var p1 = new rv({parameters: new rx({options: {required: !0}, values: oJ})});
            function p2(e, t) {
                var r, n, a, i, o, s, l;
                return {
                    ...((r = e.state),
                    {
                        q: nO().q,
                        enableQuerySyntax: nO().enableQuerySyntax,
                        aq:
                            null != (a = null == (n = r.advancedSearchQueries) ? void 0 : n.defaultFilters.aq)
                                ? a
                                : nQ().defaultFilters.aq,
                        cq:
                            null != (o = null == (i = r.advancedSearchQueries) ? void 0 : i.defaultFilters.cq)
                                ? o
                                : nQ().defaultFilters.cq,
                        firstResult: nk().firstResult,
                        numberOfResults:
                            null != (l = null == (s = r.pagination) ? void 0 : s.defaultNumberOfResults)
                                ? l
                                : nk().defaultNumberOfResults,
                        sortCriteria: nV(),
                        f: {},
                        cf: {},
                        nf: {},
                        df: {},
                        debug: r2(),
                        sf: {},
                        tab: '',
                        af: {},
                    }),
                    ...t,
                };
            }
            function p5(e) {
                var t;
                let r,
                    n = e.state;
                return {
                    ...(function (e) {
                        if (void 0 === e.query) return {};
                        let t = e.query.q;
                        return t !== nO().q ? {q: t} : {};
                    })(n),
                    ...((r = Object.values(null != (t = n.tabSet) ? t : {}).find((e) => e.isActive))
                        ? {tab: r.id}
                        : {}),
                    ...(function (e) {
                        if (void 0 === e.sortCriteria) return {};
                        let t = e.sortCriteria;
                        return t !== nV() ? {sortCriteria: t} : {};
                    })(n),
                    ...(function (e) {
                        if (void 0 === e.facetSet) return {};
                        let t = Object.entries(e.facetSet)
                            .filter(([t]) => {
                                var r, n, a;
                                return (
                                    null ==
                                        (a =
                                            null == (n = null == (r = e.facetOptions) ? void 0 : r.facets[t])
                                                ? void 0
                                                : n.enabled) || a
                                );
                            })
                            .map(([e, {request: t}]) => {
                                let r = p3(t.currentValues);
                                return r.length ? {[e]: r} : {};
                            })
                            .reduce((e, t) => ({...e, ...t}), {});
                        return Object.keys(t).length ? {f: t} : {};
                    })(n),
                    ...(function (e) {
                        if (void 0 === e.categoryFacetSet) return {};
                        let t = Object.entries(e.categoryFacetSet)
                            .filter(([t]) => {
                                var r, n, a;
                                return (
                                    null ==
                                        (a =
                                            null == (n = null == (r = e.facetOptions) ? void 0 : r.facets[t])
                                                ? void 0
                                                : n.enabled) || a
                                );
                            })
                            .map(([e, t]) => {
                                let {parents: r} = i0(t.request.currentValues),
                                    n = r.map((e) => e.value);
                                return n.length ? {[e]: n} : {};
                            })
                            .reduce((e, t) => ({...e, ...t}), {});
                        return Object.keys(t).length ? {cf: t} : {};
                    })(n),
                    ...(function (e) {
                        if (void 0 === e.numericFacetSet) return {};
                        let t = Object.entries(e.numericFacetSet)
                            .filter(([t]) => {
                                var r, n, a;
                                return (
                                    null ==
                                        (a =
                                            null == (n = null == (r = e.facetOptions) ? void 0 : r.facets[t])
                                                ? void 0
                                                : n.enabled) || a
                                );
                            })
                            .map(([e, {request: t}]) => {
                                let r = p4(t.currentValues);
                                return r.length ? {[e]: r} : {};
                            })
                            .reduce((e, t) => ({...e, ...t}), {});
                        return Object.keys(t).length ? {nf: t} : {};
                    })(n),
                    ...(function (e) {
                        if (void 0 === e.dateFacetSet) return {};
                        let t = Object.entries(e.dateFacetSet)
                            .filter(([t]) => {
                                var r, n, a;
                                return (
                                    null ==
                                        (a =
                                            null == (n = null == (r = e.facetOptions) ? void 0 : r.facets[t])
                                                ? void 0
                                                : n.enabled) || a
                                );
                            })
                            .map(([e, {request: t}]) => {
                                let r = p4(t.currentValues);
                                return r.length ? {[e]: r} : {};
                            })
                            .reduce((e, t) => ({...e, ...t}), {});
                        return Object.keys(t).length ? {df: t} : {};
                    })(n),
                    ...(function (e) {
                        var t;
                        let r = null == (t = e.automaticFacetSet) ? void 0 : t.set;
                        if (void 0 === r) return {};
                        let n = Object.entries(r)
                            .map(([e, {response: t}]) => {
                                let r = p3(t.values);
                                return r.length ? {[e]: r} : {};
                            })
                            .reduce((e, t) => ({...e, ...t}), {});
                        return Object.keys(n).length ? {af: n} : {};
                    })(n),
                };
            }
            function p3(e) {
                return e.filter((e) => 'selected' === e.state).map((e) => e.value);
            }
            function p4(e) {
                return e.filter((e) => 'selected' === e.state);
            }
            function p6(e) {
                let t = e.state;
                return {
                    ...p5(e),
                    ...(function (e) {
                        if (void 0 === e.query) return {};
                        let t = e.query.enableQuerySyntax;
                        return void 0 !== t && t !== nO().enableQuerySyntax ? {enableQuerySyntax: t} : {};
                    })(t),
                    ...(function (e) {
                        if (void 0 === e.advancedSearchQueries) return {};
                        let {aq: t, defaultFilters: r} = e.advancedSearchQueries;
                        return t !== r.aq ? {aq: t} : {};
                    })(t),
                    ...(function (e) {
                        if (void 0 === e.advancedSearchQueries) return {};
                        let {cq: t, defaultFilters: r} = e.advancedSearchQueries;
                        return t !== r.cq ? {cq: t} : {};
                    })(t),
                    ...(function (e) {
                        if (void 0 === e.pagination) return {};
                        let t = e.pagination.firstResult;
                        return t !== nk().firstResult ? {firstResult: t} : {};
                    })(t),
                    ...(function (e) {
                        if (void 0 === e.pagination) return {};
                        let {numberOfResults: t, defaultNumberOfResults: r} = e.pagination;
                        return t !== r ? {numberOfResults: t} : {};
                    })(t),
                    ...(function (e) {
                        if (void 0 === e.debug) return {};
                        let t = e.debug;
                        return t !== r2() ? {debug: t} : {};
                    })(t),
                    ...(function (e) {
                        if (void 0 === e.staticFilterSet) return {};
                        let t = Object.entries(e.staticFilterSet)
                            .map(([e, t]) => {
                                let r = t.values.filter((e) => 'selected' === e.state).map((e) => e.caption);
                                return r.length ? {[e]: r} : {};
                            })
                            .reduce((e, t) => ({...e, ...t}), {});
                        return Object.keys(t).length ? {sf: t} : {};
                    })(t),
                };
            }
            function p8() {
                return {serialize: p9, deserialize: hr};
            }
            function p9(e) {
                return Object.entries(e)
                    .map(p7)
                    .filter((e) => e)
                    .join('&');
            }
            function p7(e) {
                let [t, r] = e;
                return ho(t)
                    ? 'f' === t || 'cf' === t || 'sf' === t || 'af' === t
                        ? he(r) && ht(r, (e) => 'string' == typeof e)
                            ? Object.entries(r)
                                  .map(([e, r]) => `${t}-${e}=${r.map((e) => encodeURIComponent(e)).join(',')}`)
                                  .join('&')
                            : ''
                        : 'nf' === t || 'df' === t
                          ? he(r) && ht(r, (e) => he(e) && 'start' in e && 'end' in e)
                              ? Object.entries(r)
                                    .map(
                                        ([e, r]) =>
                                            `${t}-${e}=${r.map(({start: e, end: t, endInclusive: r}) => `${e}${r ? '...' : '..'}${t}`).join(',')}`,
                                    )
                                    .join('&')
                              : ''
                          : `${t}=${encodeURIComponent(r)}`
                    : '';
            }
            function he(e) {
                return !!(e && 'object' == typeof e);
            }
            function ht(e, t) {
                return (
                    0 ===
                    Object.entries(e).filter((e) => {
                        let r = e[1];
                        return !Array.isArray(r) || !r.every(t);
                    }).length
                );
            }
            function hr(e) {
                return e
                    .split('&')
                    .map((e) =>
                        (function (e) {
                            let [t, ...r] = e.split('=');
                            return [t, r.join('=')];
                        })(e),
                    )
                    .map(hn)
                    .filter(hi)
                    .map(hs)
                    .reduce((e, t) => {
                        let [r, n] = t;
                        if (hl(r)) {
                            let t = {...e[r], ...n};
                            return {...e, [r]: t};
                        }
                        return {...e, [r]: n};
                    }, {});
            }
            function hn(e) {
                var t;
                let [r, n] = e,
                    a = /^(f|cf|nf|df|sf|af)-(.+)$/.exec(r);
                if (!a) return e;
                let i = a[1],
                    o = a[2],
                    s =
                        ((t = n.split(',')),
                        'nf' === i
                            ? t
                                  .map((e) => {
                                      let {startAsString: t, endAsString: r, isEndInclusive: n} = hu(e);
                                      return {start: parseFloat(t), end: parseFloat(r), endInclusive: n};
                                  })
                                  .filter(({start: e, end: t}) => Number.isFinite(e) && Number.isFinite(t))
                                  .map(({start: e, end: t, endInclusive: r}) =>
                                      dP({start: e, end: t, state: 'selected', endInclusive: r}),
                                  )
                            : 'df' === i
                              ? t
                                    .map((e) => {
                                        let {isEndInclusive: t, startAsString: r, endAsString: n} = hu(e);
                                        return {start: r, end: n, endInclusive: t};
                                    })
                                    .filter(({start: e, end: t}) => ha(e) && ha(t))
                                    .map(({start: e, end: t, endInclusive: r}) =>
                                        cd({start: e, end: t, state: 'selected', endInclusive: r}),
                                    )
                              : t);
                return [i, JSON.stringify({[o]: s})];
            }
            function ha(e) {
                try {
                    return s$(sL(e)) === e ? (s_(e, sU), !0) : !!sG(e) && (sH(e), !0);
                } catch (e) {
                    return !1;
                }
            }
            function hi(e) {
                let t = ho(e[0]),
                    r = 2 === e.length;
                return t && r;
            }
            function ho(e) {
                return (
                    e in
                    {
                        q: !0,
                        aq: !0,
                        cq: !0,
                        enableQuerySyntax: !0,
                        firstResult: !0,
                        numberOfResults: !0,
                        sortCriteria: !0,
                        f: !0,
                        cf: !0,
                        nf: !0,
                        df: !0,
                        debug: !0,
                        sf: !0,
                        tab: !0,
                        af: !0,
                    }
                );
            }
            function hs(e) {
                let t,
                    r,
                    [n, a] = e;
                return 'enableQuerySyntax' === n
                    ? [n, 'true' === a]
                    : 'debug' === n
                      ? [n, 'true' === a]
                      : 'firstResult' === n
                        ? [n, parseInt(a)]
                        : 'numberOfResults' === n
                          ? [n, parseInt(a)]
                          : hl(n)
                            ? [
                                  n,
                                  ((t = JSON.parse(a)),
                                  (r = {}),
                                  Object.entries(t).forEach((e) => {
                                      let [t, n] = e;
                                      r[t] = n.map((e) => (rq(e) ? decodeURIComponent(e) : e));
                                  }),
                                  r),
                              ]
                            : [n, decodeURIComponent(a)];
            }
            function hl(e) {
                return ['f', 'cf', 'nf', 'df', 'sf', 'af'].includes(e);
            }
            function hu(e) {
                let t = -1 !== e.indexOf('...'),
                    [r, n] = e.split(t ? '...' : '..');
                return {isEndInclusive: t, startAsString: r, endAsString: n};
            }
            var hc = new rv({fragment: new rO()});
            function hd(e, t) {
                let r;
                function n() {
                    r = e.state.search.requestId;
                }
                (!(function (e) {
                    e.addReducers({configuration: lm});
                })(e),
                    rU(e, hc, t.initialState, 'buildUrlManager'));
                let a = lM(e),
                    i = t.initialState.fragment;
                n();
                let o = (function (e, t) {
                    let {dispatch: r} = e,
                        n = (function (e, t) {
                            let {dispatch: r} = e,
                                n = lM(e);
                            return (
                                rU(e, p1, t.initialState, 'buildSearchParameterManager'),
                                r(oG(t.initialState.parameters)),
                                {
                                    ...n,
                                    synchronize(t) {
                                        r(oG(p2(e, t)));
                                    },
                                    get state() {
                                        return {parameters: p5(e)};
                                    },
                                }
                            );
                        })(e, t);
                    return {
                        ...n,
                        synchronize(t) {
                            let a = p6(e),
                                i = p2(e, a),
                                o = p2(e, t);
                            dJ(i, o) ||
                                !(function (e, t) {
                                    let r = e.state.tabSet,
                                        n = t.tab;
                                    if (!r || !Object.entries(r).length || !n) return !0;
                                    let a = n in r;
                                    return (
                                        a ||
                                            e.logger.warn(
                                                `The tab search parameter "${n}" is invalid. Ignoring change.`,
                                            ),
                                        a
                                    );
                                })(e, o) ||
                                (n.synchronize(t),
                                r(
                                    s9(
                                        i.q !== o.q
                                            ? fK()
                                            : i.sortCriteria !== o.sortCriteria
                                              ? pu()
                                              : i.firstResult !== o.firstResult
                                                ? fI()
                                                : i.numberOfResults !== o.numberOfResults
                                                  ? fw()
                                                  : pK(i.f, o.f)
                                                    ? pX(i.f, o.f)
                                                    : pK(i.cf, o.cf)
                                                      ? pX(i.cf, o.cf)
                                                      : pK(i.af, o.af)
                                                        ? pX(i.af, o.af)
                                                        : pK(i.nf, o.nf)
                                                          ? p0(i.nf, o.nf)
                                                          : pK(i.df, o.df)
                                                            ? p0(i.df, o.df)
                                                            : oM(),
                                    ),
                                ));
                        },
                        get state() {
                            return {parameters: p6(e)};
                        },
                    };
                })(e, {initialState: {parameters: hf(i)}});
                return {
                    ...a,
                    subscribe(t) {
                        let a = () => {
                            var a;
                            let o = this.state.fragment;
                            ((a = i) === o || dJ(hf(a), hf(o)) || r === e.state.search.requestId || ((i = o), t()),
                                n());
                        };
                        return (a(), e.subscribe(a));
                    },
                    get state() {
                        return {fragment: p8().serialize(o.state.parameters)};
                    },
                    synchronize(e) {
                        i = e;
                        let t = hf(e);
                        o.synchronize(t);
                    },
                };
            }
            function hf(e) {
                return p8().deserialize(e);
            }
            function hp(e) {
                return fA(e);
            }
            async function hh(e, t) {
                var r;
                let {search: n, accessToken: a, organizationId: i, analytics: o} = e.configuration,
                    s = (null == (r = e.query) ? void 0 : r.q) || '';
                return {
                    url: n.apiBaseUrl,
                    accessToken: a,
                    organizationId: i,
                    enableNavigation: !1,
                    ...(o.enabled && {visitorId: await oy(e.configuration.analytics)}),
                    q: s,
                    ...t,
                    requestedOutputSize: t.requestedOutputSize || 0,
                    ...(n.authenticationProviders.length && {authentication: n.authenticationProviders.join(',')}),
                };
            }
            var hg = tU('resultPreview/fetchResultContent', async (e, {extra: t, getState: r, rejectWithValue: n}) => {
                    let a = r(),
                        i = await hh(a, e),
                        o = await t.apiClient.html(i);
                    return nv(o) ? n(o.error) : {content: o.success, uniqueId: e.uniqueId};
                }),
                hv = tI('resultPreview/next'),
                hm = tI('resultPreview/previous'),
                hy = tI('resultPreview/prepare', (e) => rM(e, {results: new rA({required: !0})})),
                hS = tU('resultPreview/updateContentURL', async (e, {getState: t, extra: r}) => {
                    let n = t(),
                        a = nd(
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
                }),
                hb = (e) =>
                    oR('analytics/resultPreview/open', oq.Click, (t, r) => {
                        oj(e);
                        let n = oA(e, r),
                            a = oE(e);
                        return t.makeDocumentQuickview(n, a);
                    }),
                hw = (e) => {
                    let {content: t, isLoading: r, uniqueId: n, contentURL: a} = r5();
                    ((e.content = t), (e.isLoading = r), (e.uniqueId = n), (e.contentURL = a));
                },
                hI = (e) => e.filter((e) => e.hasHtmlVersion).map((e) => e.uniqueId),
                hC = tq(r5(), (e) => {
                    e.addCase(hg.pending, (e) => {
                        e.isLoading = !0;
                    })
                        .addCase(hg.fulfilled, (e, t) => {
                            let {content: r, uniqueId: n} = t.payload;
                            ((e.position = e.resultsWithPreview.indexOf(n)),
                                (e.content = r),
                                (e.uniqueId = n),
                                (e.isLoading = !1));
                        })
                        .addCase(s9.fulfilled, (e, t) => {
                            (hw(e), (e.resultsWithPreview = hI(t.payload.response.results)));
                        })
                        .addCase(le.fulfilled, (e, t) => {
                            (hw(e),
                                (e.resultsWithPreview = e.resultsWithPreview.concat(hI(t.payload.response.results))));
                        })
                        .addCase(s7.fulfilled, hw)
                        .addCase(hy, (e, t) => {
                            e.resultsWithPreview = hI(t.payload.results);
                        })
                        .addCase(hv, (e) => {
                            if (e.isLoading) return;
                            let t = e.position + 1;
                            (t > e.resultsWithPreview.length - 1 && (t = 0), (e.position = t));
                        })
                        .addCase(hm, (e) => {
                            if (e.isLoading) return;
                            let t = e.position - 1;
                            (t < 0 && (t = e.resultsWithPreview.length - 1), (e.position = t));
                        })
                        .addCase(hS.fulfilled, (e, t) => {
                            e.contentURL = t.payload.contentURL;
                        });
                });
            function hk(e, t) {
                !(function (e) {
                    e.addReducers({search: lp});
                })(e);
                let {dispatch: r} = e,
                    n = () => e.state,
                    a = () => n().search.results,
                    i = (function (e, t, r, n, a) {
                        !(function (e) {
                            e.addReducers({configuration: lm, resultPreview: hC});
                        })(e);
                        let {dispatch: i} = e,
                            o = () => e.state,
                            s = lM(e),
                            {result: l, maximumPreviewSize: u} = t.options,
                            c = () => {
                                let {resultsWithPreview: e, position: t} = o().resultPreview;
                                return e[t];
                            },
                            d = (e) => {
                                (i(hS({uniqueId: e, requestedOutputSize: u, buildResultPreviewRequest: r, path: n})),
                                    t.options.onlyContentURL || i(hg({uniqueId: e, requestedOutputSize: u})),
                                    a && a());
                            };
                        return {
                            ...s,
                            fetchResultContent() {
                                d(l.uniqueId);
                            },
                            next() {
                                (i(hv()), d(c()));
                            },
                            previous() {
                                (i(hm()), d(c()));
                            },
                            get state() {
                                let e = o(),
                                    t = l.hasHtmlVersion,
                                    r = e.resultPreview;
                                return {
                                    content: l.uniqueId === r.uniqueId ? r.content : '',
                                    resultHasPreview: t,
                                    isLoading: r.isLoading,
                                    contentURL: r.contentURL,
                                    currentResultUniqueId: c(),
                                };
                            },
                        };
                    })(e, t, hh, '/html', () => {
                        e.dispatch(hb(t.options.result));
                    });
                return (
                    r(hy({results: a()})),
                    {
                        ...i,
                        get state() {
                            return {
                                ...i.state,
                                currentResult: a().findIndex((e) => e.uniqueId === i.state.currentResultUniqueId) + 1,
                                totalResults: a().length,
                            };
                        },
                    }
                );
            }
            var hO = {
                logShowMoreFoldedResults: (e) =>
                    oR(
                        'analytics/folding/showMore',
                        oq.Click,
                        (t, r) => (oj(e), t.makeShowMoreFoldedResults(oA(e, r), oE(e))),
                    ),
                logShowLessFoldedResults: () =>
                    oR('analytics/folding/showLess', oq.Custom, (e) => e.makeShowLessFoldedResults()),
            };
            function hq(e, t) {
                return e.raw[t.parent];
            }
            function hx(e, t) {
                let r = e.raw[t.child];
                return n3(r) ? r[0] : r;
            }
            function hR(e, t, r) {
                let n = {};
                return (
                    e.forEach((e) => {
                        var a;
                        let i, o;
                        let s = e.raw[t.collection];
                        s &&
                            (hx(e, t) || e.parentResult) &&
                            (n[s] =
                                ((i = oO(e)),
                                {
                                    result: (o =
                                        null !=
                                        (a =
                                            null != r
                                                ? r
                                                : i.find((e) => {
                                                      var r, n;
                                                      let a = void 0 === hq(e, t),
                                                          i =
                                                              ((r = hq(e, t)),
                                                              (n = hx(e, t)),
                                                              (r || n) !== void 0 && r === n);
                                                      return a || i;
                                                  }))
                                            ? a
                                            : (function e(t) {
                                                  return t.parentResult ? e(t.parentResult) : t;
                                              })(e)),
                                    children: (function e(t, r, n, a = []) {
                                        let i = hx(t, n);
                                        return i
                                            ? -1 !== a.indexOf(i)
                                                ? []
                                                : r
                                                      .filter((e) => {
                                                          let r = hx(e, n) === hx(t, n);
                                                          return hq(e, n) === i && !r;
                                                      })
                                                      .map((t) => ({result: t, children: e(t, r, n, [...a, i])}))
                                            : [];
                                    })(o, i, t),
                                    moreResultsAvailable: !0,
                                    isLoadingMoreResults: !1,
                                }));
                    }),
                    n
                );
            }
            function hA(e, t) {
                if (!e.collections[t])
                    throw Error(
                        `Missing collection ${t} from ${Object.keys(e.collections)}: Folding most probably in an invalid state...`,
                    );
                return e.collections[t];
            }
            var hE = tq(nC(), (e) =>
                    e
                        .addCase(s9.fulfilled, (e, {payload: t}) => {
                            e.collections = e.enabled ? hR(t.response.results, e.fields) : {};
                        })
                        .addCase(s7.fulfilled, (e, {payload: t}) => {
                            e.collections = e.enabled ? hR(t.response.results, e.fields) : {};
                        })
                        .addCase(le.fulfilled, (e, {payload: t}) => {
                            e.collections = e.enabled ? {...e.collections, ...hR(t.response.results, e.fields)} : {};
                        })
                        .addCase(lz, (e, {payload: t}) => {
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
                        .addCase(lB.pending, (e, {meta: t}) => {
                            hA(e, t.arg).isLoadingMoreResults = !0;
                        })
                        .addCase(lB.rejected, (e, {meta: t}) => {
                            hA(e, t.arg).isLoadingMoreResults = !1;
                        })
                        .addCase(lB.fulfilled, (e, {payload: {collectionId: t, results: r, rootResult: n}}) => {
                            let a = hR(r, e.fields, n);
                            if (!a || !a[t])
                                throw Error(
                                    `Unable to create collection ${t} from received results: ${JSON.stringify(r)}. Folding most probably in an invalid state... `,
                                );
                            ((e.collections[t] = a[t]), (e.collections[t].moreResultsAvailable = !1));
                        }),
                ),
                hF = new rv(lN);
            function hD(e, t) {
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    if (t(n)) return n;
                    if (n.children.length) {
                        let e = hD(n.children, t);
                        if (e) return e;
                    }
                }
                return null;
            }
            function hj(e, t = {}) {
                let r = (function (e, t, r) {
                    var n;
                    !(function (e) {
                        e.addReducers({search: lp, configuration: lm, folding: hE, query: f8});
                    })(e);
                    let a = fD(e, t),
                        {dispatch: i} = e,
                        o = () => e.state;
                    return (
                        i(
                            lz({
                                ...((null == (n = t.options) ? void 0 : n.folding)
                                    ? rL(e, hF, t.options.folding, 'buildFoldedResultList')
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
                                return hD(this.state.results, (t) => t.result.uniqueId === e.result.uniqueId);
                            },
                            findResultByCollection(e) {
                                return hD(
                                    this.state.results,
                                    (t) => t.result.raw.foldingcollection === e.result.raw.foldingcollection,
                                );
                            },
                            get state() {
                                let e = o();
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
                })(e, {...t, loadCollectionActionCreator: lB}, hO);
                return {
                    ...r,
                    get state() {
                        return r.state;
                    },
                };
            }
            var hP = tq(
                {
                    redirectTo: '',
                    query: '',
                    executions: [],
                    notifications: [],
                    queryModification: {originalQuery: '', newQuery: '', queryToIgnore: ''},
                },
                (e) =>
                    e
                        .addCase(s9.pending, (e) => {
                            ((e.query = ''),
                                (e.queryModification = {
                                    originalQuery: '',
                                    newQuery: '',
                                    queryToIgnore: e.queryModification.queryToIgnore,
                                }));
                        })
                        .addCase(s9.fulfilled, (e, t) => {
                            var r;
                            let n = [],
                                a = [],
                                i = [];
                            (t.payload.response.triggers.forEach((e) => {
                                switch (e.type) {
                                    case 'redirect':
                                        n.push(e.content);
                                        break;
                                    case 'query':
                                        break;
                                    case 'execute':
                                        a.push({functionName: e.content.name, params: e.content.params});
                                        break;
                                    case 'notify':
                                        i.push(e.content);
                                }
                            }),
                                (e.redirectTo = null != (r = n[0]) ? r : ''),
                                (e.query = e.queryModification.newQuery),
                                (e.executions = a),
                                (e.notifications = i));
                        })
                        .addCase(sF, (e, t) => {
                            e.queryModification = {...t.payload, queryToIgnore: ''};
                        })
                        .addCase(sE, (e, t) => {
                            e.queryModification.queryToIgnore = t.payload;
                        }),
            );
            function hT(e) {
                !(function (e) {
                    e.addReducers({triggers: hP, query: f8});
                })(e);
                let t = lM(e),
                    {dispatch: r} = e,
                    n = () => e.state,
                    a = () => n().triggers.queryModification.newQuery,
                    i = () => n().triggers.queryModification.originalQuery;
                return {
                    ...t,
                    get state() {
                        return {newQuery: a(), originalQuery: i(), wasQueryModified: '' !== a()};
                    },
                    undo() {
                        (r(sE(a())), r(sy({q: i()})), r(s9(sR({undoneQuery: a()}))));
                    },
                };
            }
            function hV(e) {
                !(function (e) {
                    e.addReducers({triggers: hP});
                })(e);
                let t = lM(e),
                    {dispatch: r} = e,
                    n = () => e.state,
                    a = n().triggers.notifications;
                return {
                    ...t,
                    subscribe(t) {
                        let n = () => {
                            let e = !dW(a, this.state.notifications);
                            ((a = this.state.notifications), e && (t(), r(sA())));
                        };
                        return (n(), e.subscribe(n));
                    },
                    get state() {
                        return {notifications: n().triggers.notifications};
                    },
                };
            }
            var hM = () => new rx({values: {questionAnswerId: rD}, options: {required: !0}}),
                hU = () => new rx({values: {linkText: rP, linkURL: rP}, options: {required: !0}});
            function hL(e) {
                return rM(e, hM());
            }
            function h$(e, t) {
                var r, n, a, i;
                let o =
                    null != t
                        ? t
                        : null == (n = null == (r = e.search) ? void 0 : r.questionAnswer)
                          ? void 0
                          : n.documentId;
                return (
                    o &&
                    e.search &&
                    ((a = o.contentIdKey), (i = o.contentIdValue), e.search.results.find((e) => ls(e, a) === i))
                );
            }
            function h_(e, t) {
                var r, n, a, i, o;
                let s =
                    null !=
                    (n =
                        null == (r = e.questionAnswering)
                            ? void 0
                            : r.relatedQuestions.findIndex((e) => e.questionAnswerId === t))
                        ? n
                        : -1;
                if (-1 === s) return null;
                let l =
                    null ==
                    (o = null == (i = null == (a = e.search) ? void 0 : a.questionAnswer) ? void 0 : i.relatedQuestions)
                        ? void 0
                        : o[s];
                return null != l ? l : null;
            }
            var hQ = (e) =>
                    oR('analytics/smartSnippet/source/open', oq.Click, (t, r) => {
                        rM(e, hU());
                        let n = h$(r);
                        return t.makeOpenSmartSnippetInlineLink(oA(n, r), {...oE(n), ...e});
                    }),
                hN = (e) =>
                    oR('analytics/smartSnippet/source/open', oq.Click, (t, r) => {
                        rM(e, hM());
                        let n = h_(r, e.questionAnswerId);
                        if (!n) return null;
                        let a = h$(r, n.documentId);
                        return a
                            ? t.makeOpenSmartSnippetSuggestionSource(oA(a, r), {
                                  question: n.question,
                                  answerSnippet: n.answerSnippet,
                                  documentId: n.documentId,
                              })
                            : null;
                    }),
                hz = (e, t) =>
                    oR('analytics/smartSnippet/source/open', oq.Click, (r, n) => {
                        (rM(e, hM()), rM(t, hU()));
                        let a = h_(n, e.questionAnswerId);
                        if (!a) return null;
                        let i = h$(n, a.documentId);
                        return i
                            ? r.makeOpenSmartSnippetSuggestionInlineLink(oA(i, n), {
                                  question: a.question,
                                  answerSnippet: a.answerSnippet,
                                  documentId: a.documentId,
                                  linkText: t.linkText,
                                  linkURL: t.linkURL,
                              })
                            : null;
                    }),
                hB = {
                    logExpandSmartSnippet: () =>
                        oR('analytics/smartSnippet/expand', oq.Custom, (e) => e.makeExpandSmartSnippet()),
                    logCollapseSmartSnippet: () =>
                        oR('analytics/smartSnippet/collapse', oq.Custom, (e) => e.makeCollapseSmartSnippet()),
                    logLikeSmartSnippet: () =>
                        oR('analytics/smartSnippet/like', oq.Custom, (e) => e.makeLikeSmartSnippet()),
                    logDislikeSmartSnippet: () =>
                        oR('analytics/smartSnippet/dislike', oq.Custom, (e) => e.makeDislikeSmartSnippet()),
                    logOpenSmartSnippetSource: function () {
                        return oR('analytics/smartSnippet/source/open', oq.Click, (e, t) => {
                            let r = h$(t);
                            return e.makeOpenSmartSnippetSource(oA(r, t), oE(r));
                        });
                    },
                    logOpenSmartSnippetInlineLink: hQ,
                    logOpenSmartSnippetFeedbackModal: () =>
                        oR('analytics/smartSnippet/feedbackModal/open', oq.Custom, (e) =>
                            e.makeOpenSmartSnippetFeedbackModal(),
                        ),
                    logCloseSmartSnippetFeedbackModal: () =>
                        oR('analytics/smartSnippet/feedbackModal/close', oq.Custom, (e) =>
                            e.makeCloseSmartSnippetFeedbackModal(),
                        ),
                    logSmartSnippetFeedback: (e) =>
                        oR('analytics/smartSnippet/sendFeedback', oq.Custom, (t) =>
                            t.makeSmartSnippetFeedbackReason(e),
                        ),
                    logSmartSnippetDetailedFeedback: (e) =>
                        oR('analytics/smartSnippet/sendFeedback', oq.Custom, (t) =>
                            t.makeSmartSnippetFeedbackReason('other', e),
                        ),
                    logExpandSmartSnippetSuggestion: (e) =>
                        oR('analytics/smartSnippetSuggestion/expand', oq.Custom, (t, r) => {
                            hL(e);
                            let n = h_(r, e.questionAnswerId);
                            return n
                                ? t.makeExpandSmartSnippetSuggestion({
                                      question: n.question,
                                      answerSnippet: n.answerSnippet,
                                      documentId: n.documentId,
                                  })
                                : null;
                        }),
                    logCollapseSmartSnippetSuggestion: (e) =>
                        oR('analytics/smartSnippetSuggestion/expand', oq.Custom, (t, r) => {
                            hL(e);
                            let n = h_(r, e.questionAnswerId);
                            return n
                                ? t.makeCollapseSmartSnippetSuggestion({
                                      question: n.question,
                                      answerSnippet: n.answerSnippet,
                                      documentId: n.documentId,
                                  })
                                : null;
                        }),
                    logOpenSmartSnippetSuggestionSource: hN,
                },
                hH = tI('smartSnippet/expand'),
                hY = tI('smartSnippet/collapse'),
                hW = tI('smartSnippet/like'),
                hJ = tI('smartSnippet/dislike'),
                hG = tI('smartSnippet/feedbackModal/open'),
                hK = tI('smartSnippet/feedbackModal/close'),
                hZ = tI('smartSnippet/related/expand', (e) => hL(e)),
                hX = tI('smartSnippet/related/collapse', (e) => hL(e)),
                h0 = (e, t) => e.findIndex((e) => e.questionAnswerId === t.questionAnswerId);
            function h1({question: e, answerSnippet: t, documentId: {contentIdKey: r, contentIdValue: n}}) {
                return n8({question: e, answerSnippet: t, contentIdKey: r, contentIdValue: n});
            }
            var h2 = tq(nq(), (e) =>
                e
                    .addCase(hH, (e) => {
                        e.expanded = !0;
                    })
                    .addCase(hY, (e) => {
                        e.expanded = !1;
                    })
                    .addCase(hW, (e) => {
                        ((e.liked = !0), (e.disliked = !1), (e.feedbackModalOpen = !1));
                    })
                    .addCase(hJ, (e) => {
                        ((e.liked = !1), (e.disliked = !0));
                    })
                    .addCase(hG, (e) => {
                        e.feedbackModalOpen = !0;
                    })
                    .addCase(hK, (e) => {
                        e.feedbackModalOpen = !1;
                    })
                    .addCase(s9.fulfilled, (e, t) => {
                        let r = t.payload.response.questionAnswer.relatedQuestions.map((t, r) => {
                                var n;
                                let a;
                                return (
                                    (n = e.relatedQuestions[r]),
                                    (a = h1(t)),
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
                            n = h1(t.payload.response.questionAnswer);
                        return e.questionAnswerId === n
                            ? {...e, relatedQuestions: r}
                            : {...nq(), relatedQuestions: r, questionAnswerId: n};
                    })
                    .addCase(hZ, (e, t) => {
                        let r = h0(e.relatedQuestions, t.payload);
                        -1 !== r && (e.relatedQuestions[r].expanded = !0);
                    })
                    .addCase(hX, (e, t) => {
                        let r = h0(e.relatedQuestions, t.payload);
                        -1 !== r && (e.relatedQuestions[r].expanded = !1);
                    }),
            );
            function h5(e, t) {
                !(function (e) {
                    e.addReducers({search: lp, questionAnswering: h2});
                })(e);
                let r = () => e.state,
                    n = new Set(),
                    a = (e) => !!n.has(e) || (n.add(e), !1),
                    i = null,
                    o = (e) => {
                        i !== e && ((i = e), (l = {}), n.clear());
                    },
                    s = (r, n, i) => {
                        var o;
                        return fL(
                            e,
                            {
                                options: {
                                    selectionDelay:
                                        null == (o = null == t ? void 0 : t.options) ? void 0 : o.selectionDelay,
                                },
                            },
                            () => {
                                a(n) || e.dispatch(i ? hz({questionAnswerId: i}, r) : hQ(r));
                            },
                        );
                    },
                    l = {},
                    u = (e, t) => {
                        let {searchResponseId: n} = r().search;
                        o(n);
                        let a = n8({...e, questionAnswerId: t});
                        return (a in l || (l[a] = s(e, a, t)), l[a]);
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
            function h3(e, t) {
                var r, n;
                let a, i, o, s, l;
                let u =
                        (!(function (e) {
                            e.addReducers({search: lp, questionAnswering: h2});
                        })(e),
                        (a = lM(e)),
                        (i = () => e.state),
                        (o = () => h$(i())),
                        (s = null),
                        (l = fL(
                            e,
                            {
                                options: {
                                    selectionDelay:
                                        null == (n = null == t ? void 0 : t.options) ? void 0 : n.selectionDelay,
                                },
                            },
                            () => {
                                let t = o();
                                if (!t) {
                                    s = null;
                                    return;
                                }
                                let {searchResponseId: r} = i().search;
                                s !== r && ((s = r), e.dispatch(hB.logOpenSmartSnippetSource()), e.dispatch(fV(t)));
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
                                    source: o(),
                                };
                            },
                            expand() {
                                (e.dispatch(hB.logExpandSmartSnippet()), e.dispatch(hH()));
                            },
                            collapse() {
                                (e.dispatch(hB.logCollapseSmartSnippet()), e.dispatch(hY()));
                            },
                            like() {
                                (e.dispatch(hB.logLikeSmartSnippet()), e.dispatch(hW()));
                            },
                            dislike() {
                                (e.dispatch(hB.logDislikeSmartSnippet()), e.dispatch(hJ()));
                            },
                            openFeedbackModal() {
                                (e.dispatch(hB.logOpenSmartSnippetFeedbackModal()), e.dispatch(hG()));
                            },
                            closeFeedbackModal() {
                                (e.dispatch(hB.logCloseSmartSnippetFeedbackModal()), e.dispatch(hK()));
                            },
                            sendFeedback(t) {
                                (e.dispatch(hB.logSmartSnippetFeedback(t)), e.dispatch(hK()));
                            },
                            sendDetailedFeedback(t) {
                                (e.dispatch(hB.logSmartSnippetDetailedFeedback(t)), e.dispatch(hK()));
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
                    c = h5(e, {
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
            function h4(e, t) {
                var r, n, a;
                let i, o, s, l, u, c, d, f, p, h, g, v;
                let m =
                        (!(function (e) {
                            e.addReducers({search: lp, questionAnswering: h2});
                        })(e),
                        (i = lM(e)),
                        (o = () => e.state),
                        (s = (t) => {
                            let {contentIdKey: r, contentIdValue: n} = t;
                            return e.state.search.results.find((e) => ls(e, r) === n);
                        }),
                        {
                            ...i,
                            get state() {
                                let e = o();
                                return {
                                    questions: e.search.questionAnswer.relatedQuestions.map((t, r) => ({
                                        question: t.question,
                                        answer: t.answerSnippet,
                                        documentId: t.documentId,
                                        questionAnswerId: e.questionAnswering.relatedQuestions[r].questionAnswerId,
                                        expanded: e.questionAnswering.relatedQuestions[r].expanded,
                                        source: s(t.documentId),
                                    })),
                                };
                            },
                            expand(t) {
                                let r = {questionAnswerId: t};
                                (e.dispatch(hB.logExpandSmartSnippetSuggestion(r)), e.dispatch(hZ(r)));
                            },
                            collapse(t) {
                                let r = {questionAnswerId: t};
                                (e.dispatch(hB.logCollapseSmartSnippetSuggestion(r)), e.dispatch(hX(r)));
                            },
                        }),
                    y = h5(e, {
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
                            e.addReducers({search: lp, questionAnswering: h2});
                        })(e),
                        (l = () => e.state),
                        (u = (e) => {
                            let t = l(),
                                r = h_(t, e);
                            return r ? h$(t, r.documentId) : null;
                        }),
                        (c = new Set()),
                        (d = (e) => !!c.has(e) || (c.add(e), !1)),
                        (f = null),
                        (p = (e) => {
                            f !== e && ((f = e), (g = {}), c.clear());
                        }),
                        (h = (t, r) => {
                            var n;
                            return fL(
                                e,
                                {
                                    options: {
                                        selectionDelay:
                                            null == (n = null == a ? void 0 : a.options) ? void 0 : n.selectionDelay,
                                    },
                                },
                                () => {
                                    d(r) || (e.dispatch(hN({questionAnswerId: r})), e.dispatch(fV(t)));
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
            var h6 = {
                    queries: new rA({required: !0, each: new rO({emptyAllowed: !1})}),
                    maxLength: new rb({required: !0, min: 1, default: 10}),
                },
                h8 = tI('recentQueries/registerRecentQueries', (e) => rM(e, h6)),
                h9 = tI('recentQueries/clearRecentQueries'),
                h7 = () => oR('analytics/recentQueries/clear', oq.Custom, (e) => e.makeClearRecentQueries()),
                ge = () => oR('analytics/recentQueries/click', oq.Search, (e) => e.makeRecentQueryClick()),
                gt = tq({queries: [], maxLength: 10}, (e) => {
                    e.addCase(h8, (e, t) => {
                        ((e.queries = t.payload.queries.slice(0, t.payload.maxLength)),
                            (e.maxLength = t.payload.maxLength));
                    })
                        .addCase(h9, (e) => {
                            e.queries = [];
                        })
                        .addCase(s9.fulfilled, (e, t) => {
                            let r = t.payload.queryExecuted.trim(),
                                n = t.payload.response.results;
                            if (!r.length || !n.length) return;
                            e.queries = e.queries.filter((e) => e !== r);
                            let a = e.queries.slice(0, e.maxLength - 1);
                            e.queries = [r, ...a];
                        });
                }),
                gr = {queries: []},
                gn = {maxLength: 10, clearFilters: !0},
                ga = new rv({queries: new rA({required: !0})}),
                gi = new rv({maxLength: new rb({required: !0, min: 1}), clearFilters: new rI()});
            function go(e, t) {
                var r;
                !(function (e) {
                    e.addReducers({search: lp, recentQueries: gt});
                })(e);
                let n = lM(e),
                    {dispatch: a} = e,
                    i = () => e.state,
                    o = {...gn, ...(null == t ? void 0 : t.options)},
                    s = {...gr, ...(null == t ? void 0 : t.initialState)};
                return (
                    rL(e, gi, (r = {options: o, initialState: s}).options, 'buildRecentQueriesList'),
                    rU(e, ga, null == r ? void 0 : r.initialState, 'buildRecentQueriesList'),
                    a(h8({queries: s.queries, maxLength: o.maxLength})),
                    {
                        ...n,
                        get state() {
                            let e = i();
                            return {...e.recentQueries, analyticsEnabled: e.configuration.analytics.enabled};
                        },
                        clear() {
                            (a(h7()), a(h9()));
                        },
                        executeRecentQuery(e) {
                            let t = new rb({required: !0, min: 0, max: this.state.queries.length}).validate(e);
                            if (t) throw Error(t);
                            (a(s8({q: this.state.queries[e], clearFilters: o.clearFilters})), a(s9(ge())));
                        },
                    }
                );
            }
            function gs(e, t) {
                !(function (e) {
                    e.addReducers({facetOptions: cF});
                })(e);
                let r = (t) => {
                        var r, n;
                        return null != (n = null == (r = e.state.facetOptions.facets[t]) ? void 0 : r.enabled) && n;
                    },
                    n = (t) => {
                        var r, n, a, i, o, s, l, u, c, d, f, p, h, g, v, m;
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
                                                (s =
                                                    null == (o = null == (i = e.state.categoryFacetSet) ? void 0 : i[t])
                                                        ? void 0
                                                        : o.request)
                                              ? void 0
                                              : s.currentValues)
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
                        n8({
                            isFacetRegistered: a(t.facetId),
                            parentFacets: t.conditions.map(({parentFacetId: e}) =>
                                a(e) ? {enabled: r(e), values: n(e)} : null,
                            ),
                        }),
                    o = () => {
                        let e = i();
                        return e !== c && ((c = e), !0);
                    },
                    s = () =>
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
                                    e.dispatch(cc({facetId: t, freezeCurrentValues: !1})),
                            );
                    },
                    u = () => {
                        if (!a(t.facetId)) return;
                        let n = r(t.facetId),
                            i = s();
                        n !== i && (e.dispatch(i ? l3(t.facetId) : l4(t.facetId)), l());
                    };
                if (!t.conditions.length) return {stopWatching() {}};
                let c = i(),
                    d = e.subscribe(() => {
                        o() && u();
                    });
                return (
                    u(),
                    {
                        stopWatching() {
                            d();
                        },
                    }
                );
            }
            tq({results: [], maxLength: 10}, (e) => {
                e.addCase(fT, (e, t) => {
                    ((e.results = t.payload.results.slice(0, t.payload.maxLength)),
                        (e.maxLength = t.payload.maxLength));
                })
                    .addCase(fM, (e) => {
                        e.results = [];
                    })
                    .addCase(fV, (e, t) => {
                        let r = t.payload;
                        e.results = e.results.filter((e) => e.uniqueId !== r.uniqueId);
                        let n = e.results.slice(0, e.maxLength - 1);
                        e.results = [r, ...n];
                    });
            });
            var gl = tq(nK(), (e) => {
                e.addCase(s9.fulfilled, (e, t) => {
                    var r;
                    e.set = {};
                    let n = null == (r = t.payload.response.generateAutomaticFacets) ? void 0 : r.facets;
                    null == n ||
                        n.forEach((t) => {
                            e.set[t.field] = {response: t};
                        });
                })
                    .addCase(fu, (e, t) => {
                        (t.payload.desiredCount && (e.desiredCount = t.payload.desiredCount),
                            t.payload.numberOfValues && (e.numberOfValues = t.payload.numberOfValues));
                    })
                    .addCase(fd, (e, t) => {
                        var r;
                        let {field: n, selection: a} = t.payload,
                            i = null == (r = e.set[n]) ? void 0 : r.response;
                        if (!i) return;
                        let o = i.values.find((e) => e.value === a.value);
                        if (!o) return;
                        let s = 'selected' === o.state;
                        o.state = s ? 'idle' : 'selected';
                    })
                    .addCase(fc, (e, t) => {
                        var r;
                        let n = t.payload,
                            a = null == (r = e.set[n]) ? void 0 : r.response;
                        if (a) for (let e of a.values) e.state = 'idle';
                    })
                    .addCase(oG, (e, t) => {
                        var r, n, a;
                        let i = null != (r = t.payload.af) ? r : {},
                            o = Object.keys(e.set);
                        for (let t in i)
                            if (!e.set[t]) {
                                let r = {field: t, values: [], moreValuesAvailable: !1, label: '', indexScore: 0},
                                    n = i[t].map((e) => ({value: e, state: 'selected', numberOfResults: 0}));
                                (r.values.push(...n), (e.set[t] = {response: r}));
                            }
                        for (let t of o)
                            if (!(t in i))
                                for (let r of (null == (n = e.set[t]) ? void 0 : n.response).values) r.state = 'idle';
                        for (let t in i) {
                            let r = null == (a = e.set[t]) ? void 0 : a.response;
                            if (r)
                                for (let e of r.values)
                                    i[t].includes(e.value)
                                        ? 'idle' === e.state && (e.state = 'selected')
                                        : (e.state = 'idle');
                        }
                    })
                    .addCase(o4.fulfilled, (e, t) => {
                        if (t.payload && 0 !== Object.keys(t.payload.automaticFacetSet.set).length)
                            return t.payload.automaticFacetSet;
                    })
                    .addCase(se, (e) => {
                        Object.values(e.set).forEach(({response: e}) => {
                            e.values.forEach((e) => (e.state = 'idle'));
                        });
                    });
            });
            function gu(e, t) {
                var r;
                !(function (e) {
                    e.addReducers({automaticFacetSet: gl, configuration: lm, search: lp});
                })(e);
                let {dispatch: n} = e;
                return (
                    n(fu({desiredCount: (r = t.options).desiredCount, numberOfValues: r.numberOfValues})),
                    {
                        ...lM(e),
                        get state() {
                            var a, i;
                            return {
                                automaticFacets:
                                    null !=
                                    (i =
                                        null == (a = e.state.search.response.generateAutomaticFacets)
                                            ? void 0
                                            : a.facets.map((t) =>
                                                  (function (e, t) {
                                                      let {dispatch: r} = e,
                                                          n = lM(e),
                                                          {field: a} = t;
                                                      return {
                                                          ...n,
                                                          toggleSelect(e) {
                                                              (r(fd({field: a, selection: e})), r(s9(cK(a, e))));
                                                          },
                                                          deselectAll() {
                                                              (r(fc(a)), r(s9(uz(a))));
                                                          },
                                                          get state() {
                                                              var i, o;
                                                              let t =
                                                                  null ==
                                                                  (o =
                                                                      null == (i = e.state.automaticFacetSet)
                                                                          ? void 0
                                                                          : i.set[a])
                                                                      ? void 0
                                                                      : o.response;
                                                              return t
                                                                  ? {field: t.field, label: t.label, values: t.values}
                                                                  : {field: '', values: [], label: ''};
                                                          },
                                                      };
                                                  })(e, {field: t.field}),
                                              ))
                                        ? i
                                        : [],
                            };
                        },
                    }
                );
            }
            function gc(e) {
                var t, r, n;
                return null ==
                    (n = null == (r = null == (t = e.search) ? void 0 : t.response) ? void 0 : r.extendedResults)
                    ? void 0
                    : n.generativeQuestionAnsweringId;
            }
            var gd = () => oR('analytics/generatedAnswer/retry', oq.Search, (e) => e.makeRetryGeneratedAnswer()),
                gf = (e) =>
                    oR('analytics/generatedAnswer/openAnswerSource', oq.Custom, (t, r) => {
                        var n, a;
                        let i = gc(r),
                            o =
                                null == (a = null == (n = r.generatedAnswer) ? void 0 : n.citations)
                                    ? void 0
                                    : a.find((t) => t.id === e);
                        return i && o
                            ? t.makeOpenGeneratedAnswerSource({
                                  generativeQuestionAnsweringId: i,
                                  permanentId: o.permanentid,
                                  id: o.id,
                              })
                            : null;
                    }),
                gp = () =>
                    oR('analytics/generatedAnswer/like', oq.Custom, (e, t) => {
                        let r = gc(t);
                        return r ? e.makeLikeGeneratedAnswer({generativeQuestionAnsweringId: r}) : null;
                    }),
                gh = () =>
                    oR('analytics/generatedAnswer/dislike', oq.Custom, (e, t) => {
                        let r = gc(t);
                        return r ? e.makeDislikeGeneratedAnswer({generativeQuestionAnsweringId: r}) : null;
                    }),
                gg = (e) =>
                    oR('analytics/generatedAnswer/streamEnd', oq.Custom, (t, r) => {
                        let n = gc(r);
                        return n
                            ? t.makeGeneratedAnswerStreamEnd({generativeQuestionAnsweringId: n, answerGenerated: e})
                            : null;
                    }),
                gv = async (e) => {
                    var t;
                    return {
                        accessToken: e.configuration.accessToken,
                        organizationId: e.configuration.organizationId,
                        url: e.configuration.platformUrl,
                        streamId: null == (t = e.search.extendedResults) ? void 0 : t.generativeQuestionAnsweringId,
                    };
                },
                gm = new rO({required: !0}),
                gy = new rO(),
                gS = new rI({required: !0}),
                gb = {id: gm, title: gm, uri: gm, permanentid: gm, clickUri: gy},
                gw = tI('generatedAnswer/updateMessage', (e) => rM(e, {textDelta: gm})),
                gI = tI('generatedAnswer/updateCitations', (e) =>
                    rM(e, {citations: new rA({required: !0, each: new rx({values: gb})})}),
                ),
                gC = tI('generatedAnswer/updateError', (e) => rM(e, {message: gy, code: new rb({min: 0})})),
                gk = tI('generatedAnswer/resetAnswer'),
                gO = tI('generatedAnswer/like'),
                gq = tI('generatedAnswer/dislike'),
                gx = tI('generatedAnswer/setIsLoading', (e) => rM(e, gS)),
                gR = tI('generatedAnswer/setIsStreaming', (e) => rM(e, gS)),
                gA = tU('generatedAnswer/streamAnswer', async (e, t) => {
                    var r;
                    let n = t.getState(),
                        {dispatch: a, extra: i} = t,
                        {setAbortControllerRef: o} = e,
                        s = await gv(n),
                        l = (e, t) => {
                            switch (e) {
                                case 'genqa.messageType':
                                    a(gw(JSON.parse(t)));
                                    break;
                                case 'genqa.citationsType':
                                    a(gI(JSON.parse(t)));
                                    break;
                                case 'genqa.endOfStreamType':
                                    (a(gR(!1)), a(gg(JSON.parse(t).answerGenerated)));
                                    break;
                                default:
                                    n.debug && i.logger.warn(`Unknown payloadType: "${e}"`);
                            }
                        };
                    a(gx(!0));
                    let u =
                        null == (r = i.streamingClient)
                            ? void 0
                            : r.streamGeneratedAnswer(s, {
                                  write: (e) => {
                                      s.streamId === n.search.extendedResults.generativeQuestionAnsweringId &&
                                          (a(gx(!1)), e.payload && e.payloadType && l(e.payloadType, e.payload));
                                  },
                                  abort: (e) => {
                                      s.streamId === n.search.extendedResults.generativeQuestionAnsweringId && a(gC(e));
                                  },
                                  close: () => {
                                      s.streamId === n.search.extendedResults.generativeQuestionAnsweringId &&
                                          a(gR(!1));
                                  },
                                  resetAnswer: () => {
                                      s.streamId === n.search.extendedResults.generativeQuestionAnsweringId && a(gk());
                                  },
                              });
                    u ? o(u) : a(gx(!1));
                }),
                gE = tq(nZ(), (e) =>
                    e
                        .addCase(gw, (e, {payload: t}) => {
                            ((e.isLoading = !1),
                                (e.isStreaming = !0),
                                e.answer || (e.answer = ''),
                                (e.answer += t.textDelta),
                                delete e.error);
                        })
                        .addCase(gI, (e, {payload: t}) => {
                            ((e.isLoading = !1),
                                (e.isStreaming = !0),
                                (e.citations = e.citations.concat(t.citations)),
                                delete e.error);
                        })
                        .addCase(gC, (e, {payload: t}) => {
                            ((e.isLoading = !1),
                                (e.isStreaming = !1),
                                (e.error = {...t, isRetryable: 1 === t.code}),
                                (e.citations = []),
                                delete e.answer);
                        })
                        .addCase(gO, (e) => {
                            ((e.liked = !0), (e.disliked = !1));
                        })
                        .addCase(gq, (e) => {
                            ((e.liked = !1), (e.disliked = !0));
                        })
                        .addCase(gk, () => nZ())
                        .addCase(gx, (e, {payload: t}) => {
                            e.isLoading = t;
                        })
                        .addCase(gR, (e, {payload: t}) => {
                            e.isStreaming = t;
                        }),
                );
            function gF(e) {
                !(function (e) {
                    e.addReducers({generatedAnswer: gE});
                })(e);
                let {dispatch: t} = e,
                    r = lM(e),
                    n = () => e.state,
                    a,
                    i,
                    o,
                    s = (e) => {
                        a = e;
                    },
                    l = () => (!!a && (null == a || !a.signal.aborted)) || ((a = void 0), !1);
                return (
                    e.subscribe(() => {
                        let e = n(),
                            r = e.search.requestId,
                            u = e.search.extendedResults.generativeQuestionAnsweringId;
                        (i !== r && ((i = r), null == a || a.abort(), t(gk())),
                            !l() && u && u !== o && ((o = u), t(gA({setAbortControllerRef: s}))));
                    }),
                    {
                        ...r,
                        get state() {
                            return n().generatedAnswer;
                        },
                        retry() {
                            t(s9(gd()));
                        },
                        like() {
                            (t(gO()), t(gp()));
                        },
                        dislike() {
                            (t(gq()), t(gh()));
                        },
                        logCitationClick(e) {
                            t(gf(e));
                        },
                    }
                );
            }
            var gD = () => new rO({required: !1, emptyAllowed: !0}),
                gj = tI('advancedSearchQueries/update', (e) => rM(e, {aq: gD(), cq: gD(), lq: gD(), dq: gD()})),
                gP = tI('advancedSearchQueries/register', (e) => rM(e, {aq: gD(), cq: gD(), lq: gD(), dq: gD()}));
            function gT(e) {
                return (
                    e.addReducers({configuration: lm, pipeline: o8, searchHub: o7}),
                    {updateSearchConfiguration: oN}
                );
            }
            function gV(e) {
                return (
                    e.addReducers({dateFacetSet: dv}),
                    {
                        deselectAllDateFacetValues: co,
                        registerDateFacet: cb,
                        toggleSelectDateFacetValue: cw,
                        toggleExcludeDateFacetValue: cI,
                        updateDateFacetSortCriterion: cp,
                        updateDateFacetValues: cC,
                    }
                );
            }
            function gM(e) {
                return (
                    e.addReducers({fields: lH}),
                    {
                        registerFieldsToInclude: lL,
                        enableFetchAllFields: l$,
                        disableFetchAllFields: l_,
                        fetchFieldsDescription: lQ,
                    }
                );
            }
            function gU(e) {
                return (
                    e.addReducers({numericFacetSet: dx}),
                    {
                        deselectAllNumericFacetValues: co,
                        registerNumericFacet: cx,
                        toggleSelectNumericFacetValue: cR,
                        toggleExcludeNumericFacetValue: cA,
                        updateNumericFacetSortCriterion: cp,
                        updateNumericFacetValues: cE,
                    }
                );
            }
            function gL(e) {
                return (e.addReducers({query: f8}), {updateQuery: sy});
            }
            function g$(e) {
                return (e.addReducers({querySet: f1}), {registerQuerySetQuery: fX, updateQuerySetQuery: f0});
            }
            function g_(e) {
                return (
                    e.addReducers({querySuggest: f6, querySet: f1}),
                    {
                        clearQuerySuggest: fW,
                        fetchQuerySuggestions: fJ,
                        registerQuerySuggest: fB,
                        selectQuerySuggestion: fY,
                    }
                );
            }
            tq(nQ(), (e) => {
                e.addCase(gj, (e, t) => {
                    let {aq: r, cq: n, lq: a, dq: i} = t.payload;
                    (ry(r) || ((e.aq = r), (e.aqWasSet = !0)),
                        ry(n) || ((e.cq = n), (e.cqWasSet = !0)),
                        ry(a) || ((e.lq = a), (e.lqWasSet = !0)),
                        ry(i) || ((e.dq = i), (e.dqWasSet = !0)));
                })
                    .addCase(gP, (e, t) => {
                        let {aq: r, cq: n, lq: a, dq: i} = t.payload;
                        (ry(r) || ((e.defaultFilters.aq = r), e.aqWasSet || (e.aq = r)),
                            ry(n) || ((e.defaultFilters.cq = n), e.cqWasSet || (e.cq = n)),
                            ry(a) || ((e.defaultFilters.lq = a), e.lqWasSet || (e.lq = a)),
                            ry(i) || ((e.defaultFilters.dq = i), e.dqWasSet || (e.dq = i)));
                    })
                    .addCase(o4.fulfilled, (e, t) => {
                        var r, n;
                        return null != (n = null == (r = t.payload) ? void 0 : r.advancedSearchQueries) ? n : e;
                    })
                    .addCase(oG, (e, t) => {
                        let {aq: r, cq: n} = t.payload;
                        (ry(r) || ((e.aq = r), (e.aqWasSet = !0)), ry(n) || ((e.cq = n), (e.cqWasSet = !0)));
                    });
            });
            var gQ = tI('excerptLength/set', (e) => rM(e, new rb({min: 0, required: !0})));
            tq({length: void 0}, (e) => {
                e.addCase(gQ, (e, t) => {
                    e.length = t.payload;
                });
            });
            var gN = new rv({
                content: new rm({required: !0}),
                conditions: new rm({required: !0}),
                priority: new rb({required: !1, default: 0, min: 0}),
                fields: new rA({required: !1, each: rD}),
            });
            function gz(e) {
                !(function (e) {
                    e.addReducers({fields: lH});
                })(e);
                let t = [],
                    r = (e) => {
                        e.forEach((e) => {
                            if ((gN.validate(e), !e.conditions.every((e) => e instanceof Function)))
                                throw new rg(
                                    'Each result template conditions should be a function that takes a result as an argument and returns a boolean',
                                );
                        });
                    };
                return {
                    registerTemplates(...n) {
                        let a = [];
                        (r(n),
                            n.forEach((e) => {
                                let r = {...e, priority: e.priority || 0, fields: e.fields || []};
                                (t.push(r), a.push(...r.fields));
                            }),
                            t.sort((e, t) => t.priority - e.priority),
                            a.length && e.dispatch(lL(a)));
                    },
                    selectTemplate(e) {
                        let r = t.find((t) => t.conditions.every((t) => t(e)));
                        return r ? r.content : null;
                    },
                };
            }
            function gB(e) {
                let t = e.split(','),
                    r = Error(`Wrong criterion expression format for "${e}"`);
                if (!t.length) throw r;
                return t.map((t) => {
                    let n = t.trim().split(' '),
                        a = n[0].toLowerCase(),
                        i = n[1] && n[1].toLowerCase();
                    if (n.length > 2 || '' === a) throw r;
                    if (!(void 0 === i || i === nx.Ascending || i === nx.Descending))
                        throw Error(
                            `Wrong criterion sort order "${i}" in expression "${e}". Order should either be "${nx.Ascending}" or "${nx.Descending}"`,
                        );
                    return (function (e) {
                        let {by: t, order: r} = e;
                        switch (t) {
                            case nR.Relevancy:
                                return nE();
                            case nR.QRE:
                                return nj();
                            case nR.NoSort:
                                return nP();
                            case nR.Date:
                                if (!r)
                                    throw Error(
                                        'An order (i.e., ascending or descending) should be specified for a sort criterion sorted by "date"',
                                    );
                                return nF(r);
                            default:
                                if (!r)
                                    throw Error(
                                        `An order (i.e., ascending or descending) should be specified for a sort criterion sorted by a field, such as "${t}"`,
                                    );
                                return nD(t, r);
                        }
                    })({by: a, order: i});
                });
            }
            (((u = h || (h = {})).getResultProperty = ls),
                (u.fieldsMustBeDefined = (e) => (t) => e.every((e) => !rS(ls(t, e)))),
                (u.fieldsMustNotBeDefined = (e) => (t) => e.every((e) => rS(ls(t, e)))),
                (u.fieldMustMatch = (e, t) => (r) => {
                    let n = ll(e, r);
                    return t.some((e) => n.some((t) => `${t}`.toLowerCase() === e.toLowerCase()));
                }),
                (u.fieldMustNotMatch = (e, t) => (r) => {
                    let n = ll(e, r);
                    return t.every((e) => n.every((t) => `${t}`.toLowerCase() !== e.toLowerCase()));
                }),
                'undefined' == typeof window &&
                    (r.g.crypto || (r.g.crypto = I('crypto')),
                    !r.g.crypto.getRandomValues &&
                        r.g.crypto.webcrypto &&
                        (r.g.crypto.getRandomValues = (0, r.g.crypto).webcrypto.getRandomValues.bind(
                            r.g.crypto.webcrypto,
                        ))));
        },
    },
]);
