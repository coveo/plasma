(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [56637],
    {
        7729: function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/BrowserPreview',
                function () {
                    return r(17579);
                },
            ]);
        },
        29171: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: !0});
            var n = r(52071),
                o = r(88966);
            (Object.defineProperty(t, '__esModule', {value: !0}),
                (function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, {enumerable: !0, get: t[r]});
                })(t, {
                    noSSR: function () {
                        return l;
                    },
                    default: function () {
                        return s;
                    },
                }));
            var i = r(60005),
                u = (r(52983), i._(r(79102)));
            function a(e) {
                return {default: (null == e ? void 0 : e.default) || e};
            }
            function l(e, t) {
                return (delete t.webpack, delete t.modules, e(t));
            }
            function s(e, t) {
                var r = u.default,
                    i = {
                        loading: function (e) {
                            return (e.error, e.isLoading, e.pastDelay, null);
                        },
                    };
                e instanceof Promise
                    ? (i.loader = function () {
                          return e;
                      })
                    : 'function' == typeof e
                      ? (i.loader = e)
                      : 'object' == typeof e && (i = n._({}, i, e));
                var s = (i = n._({}, i, t)).loader;
                return (i.loadableGenerated && ((i = n._({}, i, i.loadableGenerated)), delete i.loadableGenerated),
                'boolean' != typeof i.ssr || i.ssr)
                    ? r(
                          o._(n._({}, i), {
                              loader: function () {
                                  return null != s
                                      ? s().then(a)
                                      : Promise.resolve(
                                            a(function () {
                                                return null;
                                            }),
                                        );
                              },
                          }),
                      )
                    : (delete i.webpack, delete i.modules, l(r, i));
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', {value: !0}),
                Object.assign(t.default, t),
                (e.exports = t.default));
        },
        55530: function (e, t, r) {
            'use strict';
            (Object.defineProperty(t, '__esModule', {value: !0}),
                Object.defineProperty(t, 'LoadableContext', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            var n = r(60005)._(r(52983)).default.createContext(null);
        },
        79102: function (e, t, r) {
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
            var n = r(15992),
                o = r(52617),
                i = r(52071),
                u = r(88966);
            (Object.defineProperty(t, '__esModule', {value: !0}),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return m;
                    },
                }));
            var a = r(60005)._(r(52983)),
                l = r(55530),
                s = [],
                c = [],
                d = !1;
            function f(e) {
                var t = e(),
                    r = {loading: !0, loaded: null, error: null};
                return (
                    (r.promise = t
                        .then(function (e) {
                            return ((r.loading = !1), (r.loaded = e), e);
                        })
                        .catch(function (e) {
                            throw ((r.loading = !1), (r.error = e), e);
                        })),
                    r
                );
            }
            var p = (function () {
                function e(t, r) {
                    (n._(this, e),
                        (this._loadFn = t),
                        (this._opts = r),
                        (this._callbacks = new Set()),
                        (this._delay = null),
                        (this._timeout = null),
                        this.retry());
                }
                return (
                    o._(e, [
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
                                    r = this._opts;
                                (t.loading &&
                                    ('number' == typeof r.delay &&
                                        (0 === r.delay
                                            ? (this._state.pastDelay = !0)
                                            : (this._delay = setTimeout(function () {
                                                  e._update({pastDelay: !0});
                                              }, r.delay))),
                                    'number' == typeof r.timeout &&
                                        (this._timeout = setTimeout(function () {
                                            e._update({timedOut: !0});
                                        }, r.timeout))),
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
                                ((this._state = i._(
                                    u._(i._({}, this._state), {
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
            function _(e) {
                return (function (e, t) {
                    var r = function () {
                            if (!u) {
                                var t = new p(e, i);
                                u = {
                                    getCurrentValue: t.getCurrentValue.bind(t),
                                    subscribe: t.subscribe.bind(t),
                                    retry: t.retry.bind(t),
                                    promise: t.promise.bind(t),
                                };
                            }
                            return u.promise();
                        },
                        n = function () {
                            r();
                            var e = a.default.useContext(l.LoadableContext);
                            e &&
                                Array.isArray(i.modules) &&
                                i.modules.forEach(function (t) {
                                    e(t);
                                });
                        },
                        o = function (e, t) {
                            n();
                            var r = a.default.useSyncExternalStore(u.subscribe, u.getCurrentValue, u.getCurrentValue);
                            return (
                                a.default.useImperativeHandle(
                                    t,
                                    function () {
                                        return {retry: u.retry};
                                    },
                                    [],
                                ),
                                a.default.useMemo(
                                    function () {
                                        var t;
                                        return r.loading || r.error
                                            ? a.default.createElement(i.loading, {
                                                  isLoading: r.loading,
                                                  pastDelay: r.pastDelay,
                                                  timedOut: r.timedOut,
                                                  error: r.error,
                                                  retry: u.retry,
                                              })
                                            : r.loaded
                                              ? a.default.createElement((t = r.loaded) && t.default ? t.default : t, e)
                                              : null;
                                    },
                                    [e, r],
                                )
                            );
                        },
                        i = Object.assign(
                            {loader: null, loading: null, delay: 200, timeout: null, webpack: null, modules: null},
                            t,
                        ),
                        u = null;
                    if (!d) {
                        var s = i.webpack ? i.webpack() : i.modules;
                        s &&
                            c.push(function (e) {
                                var t = !0,
                                    n = !1,
                                    o = void 0;
                                try {
                                    for (var i, u = s[Symbol.iterator](); !(t = (i = u.next()).done); t = !0) {
                                        var a = i.value;
                                        if (e.includes(a)) return r();
                                    }
                                } catch (e) {
                                    ((n = !0), (o = e));
                                } finally {
                                    try {
                                        t || null == u.return || u.return();
                                    } finally {
                                        if (n) throw o;
                                    }
                                }
                            });
                    }
                    return (
                        (o.preload = function () {
                            return r();
                        }),
                        (o.displayName = 'LoadableComponent'),
                        a.default.forwardRef(o)
                    );
                })(f, e);
            }
            function h(e, t) {
                for (var r = []; e.length; ) {
                    var n = e.pop();
                    r.push(n(t));
                }
                return Promise.all(r).then(function () {
                    if (e.length) return h(e, t);
                });
            }
            ((_.preloadAll = function () {
                return new Promise(function (e, t) {
                    h(s).then(e, t);
                });
            }),
                (_.preloadReady = function (e) {
                    return (
                        void 0 === e && (e = []),
                        new Promise(function (t) {
                            var r = function () {
                                return ((d = !0), t());
                            };
                            h(c, e).then(r, r);
                        })
                    );
                }),
                (window.__NEXT_PRELOADREADY = _.preloadReady));
            var m = _;
        },
        31328: function (e, t, r) {
            'use strict';
            r.d(t, {
                d: function () {
                    return o;
                },
            });
            var n = r(97458),
                o = function () {
                    return (0, n.jsxs)('div', {
                        className: 'plasma-spinner',
                        children: [
                            (0, n.jsx)('div', {className: 'bounce1'}),
                            (0, n.jsx)('div', {className: 'bounce2'}),
                            (0, n.jsx)('div', {className: 'bounce3'}),
                            (0, n.jsx)('div', {className: 'bounce4'}),
                        ],
                    });
                };
        },
        17579: function (e, t, r) {
            'use strict';
            (r.r(t),
                r.d(t, {
                    BrowserPreviewDemos: function () {
                        return b;
                    },
                    default: function () {
                        return w;
                    },
                }));
            var n = r(97458),
                o = r(19523),
                i = r(52071),
                u = r(88966),
                a = r(39668),
                l = r(94807),
                s = function () {
                    return (0, n.jsxs)(l.ykj, {
                        title: 'Custom title! Custom title!',
                        children: [
                            (0, n.jsx)('h4', {children: 'Hello World'}),
                            (0, n.jsx)('p', {children: "Here's the description"}),
                        ],
                    });
                },
                c = function (e) {
                    return (0, n.jsx)(
                        a.Z,
                        (0, u._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {BrowserPreview} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <BrowserPreview title={'Custom title! Custom title!'}>\n        <h4>Hello World</h4>\n        <p>Here's the description</p>\n    </BrowserPreview>\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, n.jsx)(s, {})},
                        ),
                    );
                },
                d = function () {
                    return (0, n.jsx)(l.ykj, {
                        children: (0, n.jsxs)(l.N7x, {
                            onClick: function () {
                                return alert('Clicked!');
                            },
                            children: [
                                (0, n.jsxs)('span', {
                                    children: [
                                        'Select a ',
                                        (0, n.jsx)('span', {className: 'bolder', children: 'Query Pipeline'}),
                                    ],
                                }),
                                (0, n.jsx)('span', {children: 'to see the preview'}),
                            ],
                        }),
                    });
                },
                f = function (e) {
                    return (0, n.jsx)(
                        a.Z,
                        (0, u._)(
                            (0, i._)(
                                {
                                    snippet:
                                        "import {BrowserPreview, BrowserPreviewEmpty} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <BrowserPreview>\n        <BrowserPreviewEmpty onClick={() => alert('Clicked!')}>\n            <span>\n                Select a <span className=\"bolder\">Query Pipeline</span>\n            </span>\n            <span>to see the preview</span>\n        </BrowserPreviewEmpty>\n    </BrowserPreview>\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, n.jsx)(d, {})},
                        ),
                    );
                },
                p = r(52659),
                _ = r.n(p),
                h = r(52983),
                m = r(66809),
                v = r(31328),
                y = _()(
                    function () {
                        return r.e(91365).then(r.bind(r, 91365));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [91365];
                            },
                        },
                        ssr: !1,
                    },
                ),
                b = function () {
                    return (0, n.jsx)(m.X, {
                        id: 'BrowserPreview',
                        title: 'Browser preview',
                        section: 'Layout',
                        thumbnail: 'placeholder',
                        description:
                            'A browser preview shows the result of configuration changes in a simplified representation of a browser interface.',
                        sourcePath: '/packages/react/src/components/browserPreview/BrowserPreview.tsx',
                        propsMetadata: o.LQ,
                        demo: (0, n.jsx)(c, {}),
                        examples: {
                            withError: (0, n.jsx)(h.Suspense, {
                                fallback: (0, n.jsx)(v.d, {}),
                                children: (0, n.jsx)(y, {title: 'With error'}),
                            }),
                            emptyState: (0, n.jsx)(f, {title: 'Empty state'}),
                        },
                    });
                },
                w = b;
        },
        52659: function (e, t, r) {
            e.exports = r(29171);
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 7729));
        }),
            (_N_E = e.O()));
    },
]);
