(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [68470],
    {
        80004: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/Search',
                function () {
                    return n(47594);
                },
            ]);
        },
        29171: function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: !0});
            var r = n(52071),
                a = n(88966);
            (Object.defineProperty(t, '__esModule', {value: !0}),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, {enumerable: !0, get: t[n]});
                })(t, {
                    noSSR: function () {
                        return i;
                    },
                    default: function () {
                        return s;
                    },
                }));
            var u = n(60005),
                o = (n(52983), u._(n(79102)));
            function l(e) {
                return {default: (null == e ? void 0 : e.default) || e};
            }
            function i(e, t) {
                return (delete t.webpack, delete t.modules, e(t));
            }
            function s(e, t) {
                var n = o.default,
                    u = {
                        loading: function (e) {
                            return (e.error, e.isLoading, e.pastDelay, null);
                        },
                    };
                e instanceof Promise
                    ? (u.loader = function () {
                          return e;
                      })
                    : 'function' == typeof e
                      ? (u.loader = e)
                      : 'object' == typeof e && (u = r._({}, u, e));
                var s = (u = r._({}, u, t)).loader;
                return (u.loadableGenerated && ((u = r._({}, u, u.loadableGenerated)), delete u.loadableGenerated),
                'boolean' != typeof u.ssr || u.ssr)
                    ? n(
                          a._(r._({}, u), {
                              loader: function () {
                                  return null != s
                                      ? s().then(l)
                                      : Promise.resolve(
                                            l(function () {
                                                return null;
                                            }),
                                        );
                              },
                          }),
                      )
                    : (delete u.webpack, delete u.modules, i(n, u));
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', {value: !0}),
                Object.assign(t.default, t),
                (e.exports = t.default));
        },
        55530: function (e, t, n) {
            'use strict';
            (Object.defineProperty(t, '__esModule', {value: !0}),
                Object.defineProperty(t, 'LoadableContext', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            var r = n(60005)._(n(52983)).default.createContext(null);
        },
        79102: function (e, t, n) {
            'use strict';
            /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ Object.defineProperty(t, '__esModule', {value: !0});
            var r = n(15992),
                a = n(52617),
                u = n(52071),
                o = n(88966);
            (Object.defineProperty(t, '__esModule', {value: !0}),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return m;
                    },
                }));
            var l = n(60005)._(n(52983)),
                i = n(55530),
                s = [],
                d = [],
                c = !1;
            function f(e) {
                var t = e(),
                    n = {loading: !0, loaded: null, error: null};
                return (
                    (n.promise = t
                        .then(function (e) {
                            return ((n.loading = !1), (n.loaded = e), e);
                        })
                        .catch(function (e) {
                            throw ((n.loading = !1), (n.error = e), e);
                        })),
                    n
                );
            }
            var _ = (function () {
                function e(t, n) {
                    (r._(this, e),
                        (this._loadFn = t),
                        (this._opts = n),
                        (this._callbacks = new Set()),
                        (this._delay = null),
                        (this._timeout = null),
                        this.retry());
                }
                return (
                    a._(e, [
                        {
                            key: 'promise',
                            value: function () {
                                return this._res.promise;
                            },
                        },
                        {
                            key: 'retry',
                            value: function () {
                                var e = this;
                                (this._clearTimeouts(),
                                    (this._res = this._loadFn(this._opts.loader)),
                                    (this._state = {pastDelay: !1, timedOut: !1}));
                                var t = this._res,
                                    n = this._opts;
                                (t.loading &&
                                    ('number' == typeof n.delay &&
                                        (0 === n.delay
                                            ? (this._state.pastDelay = !0)
                                            : (this._delay = setTimeout(function () {
                                                  e._update({pastDelay: !0});
                                              }, n.delay))),
                                    'number' == typeof n.timeout &&
                                        (this._timeout = setTimeout(function () {
                                            e._update({timedOut: !0});
                                        }, n.timeout))),
                                    this._res.promise
                                        .then(function () {
                                            (e._update({}), e._clearTimeouts());
                                        })
                                        .catch(function (t) {
                                            (e._update({}), e._clearTimeouts());
                                        }),
                                    this._update({}));
                            },
                        },
                        {
                            key: '_update',
                            value: function (e) {
                                ((this._state = u._(
                                    o._(u._({}, this._state), {
                                        error: this._res.error,
                                        loaded: this._res.loaded,
                                        loading: this._res.loading,
                                    }),
                                    e,
                                )),
                                    this._callbacks.forEach(function (e) {
                                        return e();
                                    }));
                            },
                        },
                        {
                            key: '_clearTimeouts',
                            value: function () {
                                (clearTimeout(this._delay), clearTimeout(this._timeout));
                            },
                        },
                        {
                            key: 'getCurrentValue',
                            value: function () {
                                return this._state;
                            },
                        },
                        {
                            key: 'subscribe',
                            value: function (e) {
                                var t = this;
                                return (
                                    this._callbacks.add(e),
                                    function () {
                                        t._callbacks.delete(e);
                                    }
                                );
                            },
                        },
                    ]),
                    e
                );
            })();
            function p(e) {
                return (function (e, t) {
                    var n = function () {
                            if (!o) {
                                var t = new _(e, u);
                                o = {
                                    getCurrentValue: t.getCurrentValue.bind(t),
                                    subscribe: t.subscribe.bind(t),
                                    retry: t.retry.bind(t),
                                    promise: t.promise.bind(t),
                                };
                            }
                            return o.promise();
                        },
                        r = function () {
                            n();
                            var e = l.default.useContext(i.LoadableContext);
                            e &&
                                Array.isArray(u.modules) &&
                                u.modules.forEach(function (t) {
                                    e(t);
                                });
                        },
                        a = function (e, t) {
                            r();
                            var n = l.default.useSyncExternalStore(o.subscribe, o.getCurrentValue, o.getCurrentValue);
                            return (
                                l.default.useImperativeHandle(
                                    t,
                                    function () {
                                        return {retry: o.retry};
                                    },
                                    [],
                                ),
                                l.default.useMemo(
                                    function () {
                                        var t;
                                        return n.loading || n.error
                                            ? l.default.createElement(u.loading, {
                                                  isLoading: n.loading,
                                                  pastDelay: n.pastDelay,
                                                  timedOut: n.timedOut,
                                                  error: n.error,
                                                  retry: o.retry,
                                              })
                                            : n.loaded
                                              ? l.default.createElement((t = n.loaded) && t.default ? t.default : t, e)
                                              : null;
                                    },
                                    [e, n],
                                )
                            );
                        },
                        u = Object.assign(
                            {loader: null, loading: null, delay: 200, timeout: null, webpack: null, modules: null},
                            t,
                        ),
                        o = null;
                    if (!c) {
                        var s = u.webpack ? u.webpack() : u.modules;
                        s &&
                            d.push(function (e) {
                                var t = !0,
                                    r = !1,
                                    a = void 0;
                                try {
                                    for (var u, o = s[Symbol.iterator](); !(t = (u = o.next()).done); t = !0) {
                                        var l = u.value;
                                        if (e.includes(l)) return n();
                                    }
                                } catch (e) {
                                    ((r = !0), (a = e));
                                } finally {
                                    try {
                                        t || null == o.return || o.return();
                                    } finally {
                                        if (r) throw a;
                                    }
                                }
                            });
                    }
                    return (
                        (a.preload = function () {
                            return n();
                        }),
                        (a.displayName = 'LoadableComponent'),
                        l.default.forwardRef(a)
                    );
                })(f, e);
            }
            function h(e, t) {
                for (var n = []; e.length; ) {
                    var r = e.pop();
                    n.push(r(t));
                }
                return Promise.all(n).then(function () {
                    if (e.length) return h(e, t);
                });
            }
            ((p.preloadAll = function () {
                return new Promise(function (e, t) {
                    h(s).then(e, t);
                });
            }),
                (p.preloadReady = function (e) {
                    return (
                        void 0 === e && (e = []),
                        new Promise(function (t) {
                            var n = function () {
                                return ((c = !0), t());
                            };
                            h(d, e).then(n, n);
                        })
                    );
                }),
                (window.__NEXT_PRELOADREADY = p.preloadReady));
            var m = p;
        },
        31328: function (e, t, n) {
            'use strict';
            n.d(t, {
                d: function () {
                    return a;
                },
            });
            var r = n(97458),
                a = function () {
                    return (0, r.jsxs)('div', {
                        className: 'plasma-spinner',
                        children: [
                            (0, r.jsx)('div', {className: 'bounce1'}),
                            (0, r.jsx)('div', {className: 'bounce2'}),
                            (0, r.jsx)('div', {className: 'bounce3'}),
                            (0, r.jsx)('div', {className: 'bounce4'}),
                        ],
                    });
                };
        },
        47594: function (e, t, n) {
            'use strict';
            n.r(t);
            var r = n(97458),
                a = n(60868),
                u = n(52983),
                o = n(52659),
                l = n.n(o),
                i = n(79585),
                s = n(31328),
                d = l()(
                    Promise.all([n.e(37791), n.e(35728)])
                        .then(n.bind(n, 35728))
                        .then(function (e) {
                            return e.ResultList;
                        }),
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [35728];
                            },
                        },
                        ssr: !1,
                        loading: function () {
                            return (0, r.jsx)(s.d, {});
                        },
                    },
                ),
                c = function () {
                    var e,
                        t = (0, u.useContext)(i.r),
                        n = localStorage.getItem('coveo-standalone-search-box-data'),
                        o = (0, a.ys)(t).registerNumberOfResults;
                    if (n) {
                        localStorage.removeItem('coveo-standalone-search-box-data');
                        var l = JSON.parse(n),
                            s = l.value,
                            c = l.analytics,
                            f = c.cause,
                            _ = c.metadata;
                        e = s;
                        var p = (0, a.WS)(t).updateQuery,
                            h = (0, a.bK)(t),
                            m = h.logOmniboxFromLink,
                            b = h.logSearchFromLink,
                            v = (0, a.wP)(t).executeSearch,
                            y = 'searchFromLink' === f ? b() : m(_);
                        (t.dispatch(o(1e3)), t.dispatch(p({q: s})), t.dispatch(v(y)));
                    } else (t.dispatch(o(1e3)), t.executeFirstSearch());
                    var g = (0, a.q)(t);
                    return (0, r.jsx)(d, {controller: g, engine: t, query: e});
                };
            t.default = function () {
                return c();
            };
        },
        52659: function (e, t, n) {
            e.exports = n(29171);
        },
    },
    function (e) {
        (e.O(0, [49774, 92888, 40179], function () {
            return e((e.s = 80004));
        }),
            (_N_E = e.O()));
    },
]);
