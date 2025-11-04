'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [85876],
    {
        79116: function (t, e, n) {
            n.d(e, {
                C: function () {
                    return tJ;
                },
                a: function () {
                    return tY;
                },
                b: function () {
                    return tW;
                },
                c: function () {
                    return tX;
                },
                i: function () {
                    return tv;
                },
                m: function () {
                    return tK;
                },
            });
            var r,
                i,
                o,
                a = n(5991),
                s = n(87856),
                u = n(30839),
                c = n(66038),
                l = n(64977);
            function f(t) {
                return (f =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            function h(t, e) {
                if (!(t instanceof e)) throw TypeError('Cannot call a class as a function');
            }
            function d(t) {
                var e = (function (t, e) {
                    if ('object' !== f(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || 'default');
                        if ('object' !== f(r)) return r;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === e ? String : Number)(t);
                })(t, 'string');
                return 'symbol' === f(e) ? e : String(e);
            }
            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    ((r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(t, d(r.key), r));
                }
            }
            function g(t, e, n) {
                return (e && p(t.prototype, e), n && p(t, n), Object.defineProperty(t, 'prototype', {writable: !1}), t);
            }
            function y(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function v(t, e) {
                return (v = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (t, e) {
                          return ((t.__proto__ = e), t);
                      })(t, e);
            }
            function b(t, e) {
                if ('function' != typeof e && null !== e)
                    throw TypeError('Super expression must either be null or a function');
                ((t.prototype = Object.create(e && e.prototype, {
                    constructor: {value: t, writable: !0, configurable: !0},
                })),
                    Object.defineProperty(t, 'prototype', {writable: !1}),
                    e && v(t, e));
            }
            function m(t, e) {
                if (e && ('object' === f(e) || 'function' == typeof e)) return e;
                if (void 0 !== e) throw TypeError('Derived constructors may only return object or undefined');
                return y(t);
            }
            function O(t) {
                return (O = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function w(t, e, n) {
                return (
                    (e = d(e)) in t
                        ? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0})
                        : (t[e] = n),
                    t
                );
            }
            function k(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function S(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    (e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            function x(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? S(Object(n), !0).forEach(function (e) {
                              w(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : S(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            var j = {
                    type: 'logger',
                    log: function (t) {
                        this.output('log', t);
                    },
                    warn: function (t) {
                        this.output('warn', t);
                    },
                    error: function (t) {
                        this.output('error', t);
                    },
                    output: function (t, e) {
                        console && console[t] && console[t].apply(console, e);
                    },
                },
                P = new ((function () {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (h(this, t), this.init(e, n));
                    }
                    return (
                        g(t, [
                            {
                                key: 'init',
                                value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    ((this.prefix = e.prefix || 'i18next:'),
                                        (this.logger = t || j),
                                        (this.options = e),
                                        (this.debug = e.debug));
                                },
                            },
                            {
                                key: 'setDebug',
                                value: function (t) {
                                    this.debug = t;
                                },
                            },
                            {
                                key: 'log',
                                value: function () {
                                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                    return this.forward(e, 'log', '', !0);
                                },
                            },
                            {
                                key: 'warn',
                                value: function () {
                                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                    return this.forward(e, 'warn', '', !0);
                                },
                            },
                            {
                                key: 'error',
                                value: function () {
                                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                    return this.forward(e, 'error', '');
                                },
                            },
                            {
                                key: 'deprecate',
                                value: function () {
                                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                    return this.forward(e, 'warn', 'WARNING DEPRECATED: ', !0);
                                },
                            },
                            {
                                key: 'forward',
                                value: function (t, e, n, r) {
                                    return r && !this.debug
                                        ? null
                                        : ('string' == typeof t[0] &&
                                              (t[0] = ''.concat(n).concat(this.prefix, ' ').concat(t[0])),
                                          this.logger[e](t));
                                },
                            },
                            {
                                key: 'create',
                                value: function (e) {
                                    return new t(
                                        this.logger,
                                        x(x({}, {prefix: ''.concat(this.prefix, ':').concat(e, ':')}), this.options),
                                    );
                                },
                            },
                            {
                                key: 'clone',
                                value: function (e) {
                                    return (
                                        ((e = e || this.options).prefix = e.prefix || this.prefix),
                                        new t(this.logger, e)
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })())(),
                L = (function () {
                    function t() {
                        (h(this, t), (this.observers = {}));
                    }
                    return (
                        g(t, [
                            {
                                key: 'on',
                                value: function (t, e) {
                                    var n = this;
                                    return (
                                        t.split(' ').forEach(function (t) {
                                            ((n.observers[t] = n.observers[t] || []), n.observers[t].push(e));
                                        }),
                                        this
                                    );
                                },
                            },
                            {
                                key: 'off',
                                value: function (t, e) {
                                    if (this.observers[t]) {
                                        if (!e) {
                                            delete this.observers[t];
                                            return;
                                        }
                                        this.observers[t] = this.observers[t].filter(function (t) {
                                            return t !== e;
                                        });
                                    }
                                },
                            },
                            {
                                key: 'emit',
                                value: function (t) {
                                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                                        n[r - 1] = arguments[r];
                                    (this.observers[t] &&
                                        [].concat(this.observers[t]).forEach(function (t) {
                                            t.apply(void 0, n);
                                        }),
                                        this.observers['*'] &&
                                            [].concat(this.observers['*']).forEach(function (e) {
                                                e.apply(e, [t].concat(n));
                                            }));
                                },
                            },
                        ]),
                        t
                    );
                })();
            function E() {
                var t,
                    e,
                    n = new Promise(function (n, r) {
                        ((t = n), (e = r));
                    });
                return ((n.resolve = t), (n.reject = e), n);
            }
            function R(t) {
                return null == t ? '' : '' + t;
            }
            function C(t, e, n) {
                function r(t) {
                    return t && t.indexOf('###') > -1 ? t.replace(/###/g, '.') : t;
                }
                function i() {
                    return !t || 'string' == typeof t;
                }
                for (var o = 'string' != typeof e ? [].concat(e) : e.split('.'); o.length > 1; ) {
                    if (i()) return {};
                    var a = r(o.shift());
                    (!t[a] && n && (t[a] = new n()), (t = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : {}));
                }
                return i() ? {} : {obj: t, k: r(o.shift())};
            }
            function D(t, e, n) {
                var r = C(t, e, Object);
                r.obj[r.k] = n;
            }
            function N(t, e) {
                var n = C(t, e),
                    r = n.obj,
                    i = n.k;
                if (r) return r[i];
            }
            function A(t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            }
            var T = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;'};
            function I(t) {
                return 'string' == typeof t
                    ? t.replace(/[&<>"'\/]/g, function (t) {
                          return T[t];
                      })
                    : t;
            }
            var $ =
                    'undefined' != typeof window &&
                    window.navigator &&
                    void 0 === window.navigator.userAgentData &&
                    window.navigator.userAgent &&
                    window.navigator.userAgent.indexOf('MSIE') > -1,
                M = [' ', ',', '?', '!', ';'];
            function F(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.';
                if (t) {
                    if (t[e]) return t[e];
                    for (var r = e.split(n), i = t, o = 0; o < r.length; ++o) {
                        if (!i || ('string' == typeof i[r[o]] && o + 1 < r.length)) return;
                        if (void 0 === i[r[o]]) {
                            for (var a = 2, s = r.slice(o, o + a).join(n), u = i[s]; void 0 === u && r.length > o + a; )
                                (a++, (u = i[(s = r.slice(o, o + a).join(n))]));
                            if (void 0 === u) return;
                            if (null === u) return null;
                            if (e.endsWith(s)) {
                                if ('string' == typeof u) return u;
                                if (s && 'string' == typeof u[s]) return u[s];
                            }
                            var c = r.slice(o + a).join(n);
                            if (c) return F(u, c, n);
                            return;
                        }
                        i = i[r[o]];
                    }
                    return i;
                }
            }
            function _(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    (e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            function U(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? _(Object(n), !0).forEach(function (e) {
                              w(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : _(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            var B = (function (t) {
                    b(r, t);
                    var e,
                        n =
                            ((e = (function () {
                                if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                                    return !1;
                                if ('function' == typeof Proxy) return !0;
                                try {
                                    return (
                                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                                        !0
                                    );
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    n = O(r);
                                if (e) {
                                    var i = O(this).constructor;
                                    t = Reflect.construct(n, arguments, i);
                                } else t = n.apply(this, arguments);
                                return m(this, t);
                            });
                    function r(t) {
                        var e,
                            i =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {ns: ['translation'], defaultNS: 'translation'};
                        return (
                            h(this, r),
                            (e = n.call(this)),
                            $ && L.call(y(e)),
                            (e.data = t || {}),
                            (e.options = i),
                            void 0 === e.options.keySeparator && (e.options.keySeparator = '.'),
                            void 0 === e.options.ignoreJSONStructure && (e.options.ignoreJSONStructure = !0),
                            e
                        );
                    }
                    return (
                        g(r, [
                            {
                                key: 'addNamespaces',
                                value: function (t) {
                                    0 > this.options.ns.indexOf(t) && this.options.ns.push(t);
                                },
                            },
                            {
                                key: 'removeNamespaces',
                                value: function (t) {
                                    var e = this.options.ns.indexOf(t);
                                    e > -1 && this.options.ns.splice(e, 1);
                                },
                            },
                            {
                                key: 'getResource',
                                value: function (t, e, n) {
                                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                        i = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                                        o =
                                            void 0 !== r.ignoreJSONStructure
                                                ? r.ignoreJSONStructure
                                                : this.options.ignoreJSONStructure,
                                        a = [t, e];
                                    (n && 'string' != typeof n && (a = a.concat(n)),
                                        n && 'string' == typeof n && (a = a.concat(i ? n.split(i) : n)),
                                        t.indexOf('.') > -1 && (a = t.split('.')));
                                    var s = N(this.data, a);
                                    return s || !o || 'string' != typeof n
                                        ? s
                                        : F(this.data && this.data[t] && this.data[t][e], n, i);
                                },
                            },
                            {
                                key: 'addResource',
                                value: function (t, e, n, r) {
                                    var i =
                                            arguments.length > 4 && void 0 !== arguments[4]
                                                ? arguments[4]
                                                : {silent: !1},
                                        o = this.options.keySeparator;
                                    void 0 === o && (o = '.');
                                    var a = [t, e];
                                    (n && (a = a.concat(o ? n.split(o) : n)),
                                        t.indexOf('.') > -1 && ((a = t.split('.')), (r = e), (e = a[1])),
                                        this.addNamespaces(e),
                                        D(this.data, a, r),
                                        i.silent || this.emit('added', t, e, n, r));
                                },
                            },
                            {
                                key: 'addResources',
                                value: function (t, e, n) {
                                    var r =
                                        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {silent: !1};
                                    for (var i in n)
                                        ('string' == typeof n[i] ||
                                            '[object Array]' === Object.prototype.toString.apply(n[i])) &&
                                            this.addResource(t, e, i, n[i], {silent: !0});
                                    r.silent || this.emit('added', t, e, n);
                                },
                            },
                            {
                                key: 'addResourceBundle',
                                value: function (t, e, n, r, i) {
                                    var o =
                                            arguments.length > 5 && void 0 !== arguments[5]
                                                ? arguments[5]
                                                : {silent: !1},
                                        a = [t, e];
                                    (t.indexOf('.') > -1 && ((a = t.split('.')), (r = n), (n = e), (e = a[1])),
                                        this.addNamespaces(e));
                                    var s = N(this.data, a) || {};
                                    (r
                                        ? (function t(e, n, r) {
                                              for (var i in n)
                                                  '__proto__' !== i &&
                                                      'constructor' !== i &&
                                                      (i in e
                                                          ? 'string' == typeof e[i] ||
                                                            e[i] instanceof String ||
                                                            'string' == typeof n[i] ||
                                                            n[i] instanceof String
                                                              ? r && (e[i] = n[i])
                                                              : t(e[i], n[i], r)
                                                          : (e[i] = n[i]));
                                              return e;
                                          })(s, n, i)
                                        : (s = U(U({}, s), n)),
                                        D(this.data, a, s),
                                        o.silent || this.emit('added', t, e, n));
                                },
                            },
                            {
                                key: 'removeResourceBundle',
                                value: function (t, e) {
                                    (this.hasResourceBundle(t, e) && delete this.data[t][e],
                                        this.removeNamespaces(e),
                                        this.emit('removed', t, e));
                                },
                            },
                            {
                                key: 'hasResourceBundle',
                                value: function (t, e) {
                                    return void 0 !== this.getResource(t, e);
                                },
                            },
                            {
                                key: 'getResourceBundle',
                                value: function (t, e) {
                                    return (e || (e = this.options.defaultNS), 'v1' === this.options.compatibilityAPI)
                                        ? U(U({}, {}), this.getResource(t, e))
                                        : this.getResource(t, e);
                                },
                            },
                            {
                                key: 'getDataByLanguage',
                                value: function (t) {
                                    return this.data[t];
                                },
                            },
                            {
                                key: 'hasLanguageSomeTranslations',
                                value: function (t) {
                                    var e = this.getDataByLanguage(t);
                                    return !!((e && Object.keys(e)) || []).find(function (t) {
                                        return e[t] && Object.keys(e[t]).length > 0;
                                    });
                                },
                            },
                            {
                                key: 'toJSON',
                                value: function () {
                                    return this.data;
                                },
                            },
                        ]),
                        r
                    );
                })(L),
                H = {
                    processors: {},
                    addPostProcessor: function (t) {
                        this.processors[t.name] = t;
                    },
                    handle: function (t, e, n, r, i) {
                        var o = this;
                        return (
                            t.forEach(function (t) {
                                o.processors[t] && (e = o.processors[t].process(e, n, r, i));
                            }),
                            e
                        );
                    },
                };
            function q(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    (e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            function z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? q(Object(n), !0).forEach(function (e) {
                              w(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : q(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            var V = {},
                K = (function (t) {
                    b(r, t);
                    var e,
                        n =
                            ((e = (function () {
                                if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                                    return !1;
                                if ('function' == typeof Proxy) return !0;
                                try {
                                    return (
                                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                                        !0
                                    );
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    n = O(r);
                                if (e) {
                                    var i = O(this).constructor;
                                    t = Reflect.construct(n, arguments, i);
                                } else t = n.apply(this, arguments);
                                return m(this, t);
                            });
                    function r(t) {
                        var e,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (
                            h(this, r),
                            (e = n.call(this)),
                            $ && L.call(y(e)),
                            !(function (t, e, n) {
                                t.forEach(function (t) {
                                    e[t] && (n[t] = e[t]);
                                });
                            })(
                                [
                                    'resourceStore',
                                    'languageUtils',
                                    'pluralResolver',
                                    'interpolator',
                                    'backendConnector',
                                    'i18nFormat',
                                    'utils',
                                ],
                                t,
                                y(e),
                            ),
                            (e.options = i),
                            void 0 === e.options.keySeparator && (e.options.keySeparator = '.'),
                            (e.logger = P.create('translator')),
                            e
                        );
                    }
                    return (
                        g(
                            r,
                            [
                                {
                                    key: 'changeLanguage',
                                    value: function (t) {
                                        t && (this.language = t);
                                    },
                                },
                                {
                                    key: 'exists',
                                    value: function (t) {
                                        var e =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : {interpolation: {}};
                                        if (null == t) return !1;
                                        var n = this.resolve(t, e);
                                        return n && void 0 !== n.res;
                                    },
                                },
                                {
                                    key: 'extractFromKey',
                                    value: function (t, e) {
                                        var n = void 0 !== e.nsSeparator ? e.nsSeparator : this.options.nsSeparator;
                                        void 0 === n && (n = ':');
                                        var r = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                                            i = e.ns || this.options.defaultNS || [],
                                            o = n && t.indexOf(n) > -1,
                                            a =
                                                !this.options.userDefinedKeySeparator &&
                                                !e.keySeparator &&
                                                !this.options.userDefinedNsSeparator &&
                                                !e.nsSeparator &&
                                                !(function (t, e, n) {
                                                    ((e = e || ''), (n = n || ''));
                                                    var r = M.filter(function (t) {
                                                        return 0 > e.indexOf(t) && 0 > n.indexOf(t);
                                                    });
                                                    if (0 === r.length) return !0;
                                                    var i = new RegExp(
                                                            '('.concat(
                                                                r
                                                                    .map(function (t) {
                                                                        return '?' === t ? '\\?' : t;
                                                                    })
                                                                    .join('|'),
                                                                ')',
                                                            ),
                                                        ),
                                                        o = !i.test(t);
                                                    if (!o) {
                                                        var a = t.indexOf(n);
                                                        a > 0 && !i.test(t.substring(0, a)) && (o = !0);
                                                    }
                                                    return o;
                                                })(t, n, r);
                                        if (o && !a) {
                                            var s = t.match(this.interpolator.nestingRegexp);
                                            if (s && s.length > 0) return {key: t, namespaces: i};
                                            var u = t.split(n);
                                            ((n !== r || (n === r && this.options.ns.indexOf(u[0]) > -1)) &&
                                                (i = u.shift()),
                                                (t = u.join(r)));
                                        }
                                        return ('string' == typeof i && (i = [i]), {key: t, namespaces: i});
                                    },
                                },
                                {
                                    key: 'translate',
                                    value: function (t, e, n) {
                                        var i = this;
                                        if (
                                            ('object' !== f(e) &&
                                                this.options.overloadTranslationOptionHandler &&
                                                (e = this.options.overloadTranslationOptionHandler(arguments)),
                                            e || (e = {}),
                                            null == t)
                                        )
                                            return '';
                                        Array.isArray(t) || (t = [String(t)]);
                                        var o =
                                                void 0 !== e.returnDetails
                                                    ? e.returnDetails
                                                    : this.options.returnDetails,
                                            a = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                                            s = this.extractFromKey(t[t.length - 1], e),
                                            u = s.key,
                                            c = s.namespaces,
                                            l = c[c.length - 1],
                                            h = e.lng || this.language,
                                            d = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                                        if (h && 'cimode' === h.toLowerCase()) {
                                            if (d) {
                                                var p = e.nsSeparator || this.options.nsSeparator;
                                                return o
                                                    ? {
                                                          res: ''.concat(l).concat(p).concat(u),
                                                          usedKey: u,
                                                          exactUsedKey: u,
                                                          usedLng: h,
                                                          usedNS: l,
                                                      }
                                                    : ''.concat(l).concat(p).concat(u);
                                            }
                                            return o ? {res: u, usedKey: u, exactUsedKey: u, usedLng: h, usedNS: l} : u;
                                        }
                                        var g = this.resolve(t, e),
                                            y = g && g.res,
                                            v = (g && g.usedKey) || u,
                                            b = (g && g.exactUsedKey) || u,
                                            m = Object.prototype.toString.apply(y),
                                            O = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays,
                                            w = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                            k = 'string' != typeof y && 'boolean' != typeof y && 'number' != typeof y;
                                        if (
                                            w &&
                                            y &&
                                            k &&
                                            0 >
                                                ['[object Number]', '[object Function]', '[object RegExp]'].indexOf(
                                                    m,
                                                ) &&
                                            !('string' == typeof O && '[object Array]' === m)
                                        ) {
                                            if (!e.returnObjects && !this.options.returnObjects) {
                                                this.options.returnedObjectHandler ||
                                                    this.logger.warn(
                                                        'accessing an object - but returnObjects options is not enabled!',
                                                    );
                                                var S = this.options.returnedObjectHandler
                                                    ? this.options.returnedObjectHandler(v, y, z(z({}, e), {}, {ns: c}))
                                                    : "key '"
                                                          .concat(u, ' (')
                                                          .concat(
                                                              this.language,
                                                              ")' returned an object instead of string.",
                                                          );
                                                return o ? ((g.res = S), g) : S;
                                            }
                                            if (a) {
                                                var x = '[object Array]' === m,
                                                    j = x ? [] : {},
                                                    P = x ? b : v;
                                                for (var L in y)
                                                    if (Object.prototype.hasOwnProperty.call(y, L)) {
                                                        var E = ''.concat(P).concat(a).concat(L);
                                                        ((j[L] = this.translate(
                                                            E,
                                                            z(z({}, e), {joinArrays: !1, ns: c}),
                                                        )),
                                                            j[L] === E && (j[L] = y[L]));
                                                    }
                                                y = j;
                                            }
                                        } else if (w && 'string' == typeof O && '[object Array]' === m)
                                            (y = y.join(O)) && (y = this.extendTranslation(y, t, e, n));
                                        else {
                                            var R = !1,
                                                C = !1,
                                                D = void 0 !== e.count && 'string' != typeof e.count,
                                                N = r.hasDefaultValue(e),
                                                A = D ? this.pluralResolver.getSuffix(h, e.count, e) : '',
                                                T = e['defaultValue'.concat(A)] || e.defaultValue;
                                            (!this.isValidLookup(y) && N && ((R = !0), (y = T)),
                                                this.isValidLookup(y) || ((C = !0), (y = u)));
                                            var I =
                                                    (e.missingKeyNoValueFallbackToKey ||
                                                        this.options.missingKeyNoValueFallbackToKey) &&
                                                    C
                                                        ? void 0
                                                        : y,
                                                $ = N && T !== y && this.options.updateMissing;
                                            if (C || R || $) {
                                                if (
                                                    (this.logger.log(
                                                        $ ? 'updateKey' : 'missingKey',
                                                        h,
                                                        l,
                                                        u,
                                                        $ ? T : y,
                                                    ),
                                                    a)
                                                ) {
                                                    var M = this.resolve(u, z(z({}, e), {}, {keySeparator: !1}));
                                                    M &&
                                                        M.res &&
                                                        this.logger.warn(
                                                            'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                                                        );
                                                }
                                                var F = [],
                                                    _ = this.languageUtils.getFallbackCodes(
                                                        this.options.fallbackLng,
                                                        e.lng || this.language,
                                                    );
                                                if ('fallback' === this.options.saveMissingTo && _ && _[0])
                                                    for (var U = 0; U < _.length; U++) F.push(_[U]);
                                                else
                                                    'all' === this.options.saveMissingTo
                                                        ? (F = this.languageUtils.toResolveHierarchy(
                                                              e.lng || this.language,
                                                          ))
                                                        : F.push(e.lng || this.language);
                                                var B = function (t, n, r) {
                                                    var o = N && r !== y ? r : I;
                                                    (i.options.missingKeyHandler
                                                        ? i.options.missingKeyHandler(t, l, n, o, $, e)
                                                        : i.backendConnector &&
                                                          i.backendConnector.saveMissing &&
                                                          i.backendConnector.saveMissing(t, l, n, o, $, e),
                                                        i.emit('missingKey', t, l, n, y));
                                                };
                                                this.options.saveMissing &&
                                                    (this.options.saveMissingPlurals && D
                                                        ? F.forEach(function (t) {
                                                              i.pluralResolver.getSuffixes(t, e).forEach(function (n) {
                                                                  B([t], u + n, e['defaultValue'.concat(n)] || T);
                                                              });
                                                          })
                                                        : B(F, u, T));
                                            }
                                            ((y = this.extendTranslation(y, t, e, g, n)),
                                                C &&
                                                    y === u &&
                                                    this.options.appendNamespaceToMissingKey &&
                                                    (y = ''.concat(l, ':').concat(u)),
                                                (C || R) &&
                                                    this.options.parseMissingKeyHandler &&
                                                    (y =
                                                        'v1' !== this.options.compatibilityAPI
                                                            ? this.options.parseMissingKeyHandler(
                                                                  this.options.appendNamespaceToMissingKey
                                                                      ? ''.concat(l, ':').concat(u)
                                                                      : u,
                                                                  R ? y : void 0,
                                                              )
                                                            : this.options.parseMissingKeyHandler(y)));
                                        }
                                        return o ? ((g.res = y), g) : y;
                                    },
                                },
                                {
                                    key: 'extendTranslation',
                                    value: function (t, e, n, r, i) {
                                        var o = this;
                                        if (this.i18nFormat && this.i18nFormat.parse)
                                            t = this.i18nFormat.parse(
                                                t,
                                                z(z({}, this.options.interpolation.defaultVariables), n),
                                                r.usedLng,
                                                r.usedNS,
                                                r.usedKey,
                                                {resolved: r},
                                            );
                                        else if (!n.skipInterpolation) {
                                            n.interpolation &&
                                                this.interpolator.init(
                                                    z(z({}, n), {
                                                        interpolation: z(
                                                            z({}, this.options.interpolation),
                                                            n.interpolation,
                                                        ),
                                                    }),
                                                );
                                            var a,
                                                s =
                                                    'string' == typeof t &&
                                                    (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables
                                                        ? n.interpolation.skipOnVariables
                                                        : this.options.interpolation.skipOnVariables);
                                            if (s) {
                                                var u = t.match(this.interpolator.nestingRegexp);
                                                a = u && u.length;
                                            }
                                            var c = n.replace && 'string' != typeof n.replace ? n.replace : n;
                                            if (
                                                (this.options.interpolation.defaultVariables &&
                                                    (c = z(z({}, this.options.interpolation.defaultVariables), c)),
                                                (t = this.interpolator.interpolate(t, c, n.lng || this.language, n)),
                                                s)
                                            ) {
                                                var l = t.match(this.interpolator.nestingRegexp);
                                                a < (l && l.length) && (n.nest = !1);
                                            }
                                            (!1 !== n.nest &&
                                                (t = this.interpolator.nest(
                                                    t,
                                                    function () {
                                                        for (var t = arguments.length, r = Array(t), a = 0; a < t; a++)
                                                            r[a] = arguments[a];
                                                        return i && i[0] === r[0] && !n.context
                                                            ? (o.logger.warn(
                                                                  'It seems you are nesting recursively key: '
                                                                      .concat(r[0], ' in key: ')
                                                                      .concat(e[0]),
                                                              ),
                                                              null)
                                                            : o.translate.apply(o, r.concat([e]));
                                                    },
                                                    n,
                                                )),
                                                n.interpolation && this.interpolator.reset());
                                        }
                                        var f = n.postProcess || this.options.postProcess,
                                            h = 'string' == typeof f ? [f] : f;
                                        return (
                                            null != t &&
                                                h &&
                                                h.length &&
                                                !1 !== n.applyPostProcessor &&
                                                (t = H.handle(
                                                    h,
                                                    t,
                                                    e,
                                                    this.options && this.options.postProcessPassResolved
                                                        ? z({i18nResolved: r}, n)
                                                        : n,
                                                    this,
                                                )),
                                            t
                                        );
                                    },
                                },
                                {
                                    key: 'resolve',
                                    value: function (t) {
                                        var e,
                                            n,
                                            r,
                                            i,
                                            o,
                                            a = this,
                                            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return (
                                            'string' == typeof t && (t = [t]),
                                            t.forEach(function (t) {
                                                if (!a.isValidLookup(e)) {
                                                    var u = a.extractFromKey(t, s),
                                                        c = u.key;
                                                    n = c;
                                                    var l = u.namespaces;
                                                    a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                                                    var f = void 0 !== s.count && 'string' != typeof s.count,
                                                        h =
                                                            f &&
                                                            !s.ordinal &&
                                                            0 === s.count &&
                                                            a.pluralResolver.shouldUseIntlApi(),
                                                        d =
                                                            void 0 !== s.context &&
                                                            ('string' == typeof s.context ||
                                                                'number' == typeof s.context) &&
                                                            '' !== s.context,
                                                        p = s.lngs
                                                            ? s.lngs
                                                            : a.languageUtils.toResolveHierarchy(
                                                                  s.lng || a.language,
                                                                  s.fallbackLng,
                                                              );
                                                    l.forEach(function (t) {
                                                        a.isValidLookup(e) ||
                                                            ((o = t),
                                                            !V[''.concat(p[0], '-').concat(t)] &&
                                                                a.utils &&
                                                                a.utils.hasLoadedNamespace &&
                                                                !a.utils.hasLoadedNamespace(o) &&
                                                                ((V[''.concat(p[0], '-').concat(t)] = !0),
                                                                a.logger.warn(
                                                                    'key "'
                                                                        .concat(n, '" for languages "')
                                                                        .concat(
                                                                            p.join(', '),
                                                                            '" won\'t get resolved as namespace "',
                                                                        )
                                                                        .concat(o, '" was not yet loaded'),
                                                                    'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                                                                )),
                                                            p.forEach(function (n) {
                                                                if (!a.isValidLookup(e)) {
                                                                    i = n;
                                                                    var o,
                                                                        u = [c];
                                                                    if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                                                        a.i18nFormat.addLookupKeys(u, c, n, t, s);
                                                                    else {
                                                                        f &&
                                                                            (l = a.pluralResolver.getSuffix(
                                                                                n,
                                                                                s.count,
                                                                                s,
                                                                            ));
                                                                        var l,
                                                                            p = ''.concat(
                                                                                a.options.pluralSeparator,
                                                                                'zero',
                                                                            );
                                                                        if (
                                                                            (f && (u.push(c + l), h && u.push(c + p)),
                                                                            d)
                                                                        ) {
                                                                            var g = ''
                                                                                .concat(c)
                                                                                .concat(a.options.contextSeparator)
                                                                                .concat(s.context);
                                                                            (u.push(g),
                                                                                f &&
                                                                                    (u.push(g + l),
                                                                                    h && u.push(g + p)));
                                                                        }
                                                                    }
                                                                    for (; (o = u.pop()); )
                                                                        a.isValidLookup(e) ||
                                                                            ((r = o), (e = a.getResource(n, t, o, s)));
                                                                }
                                                            }));
                                                    });
                                                }
                                            }),
                                            {res: e, usedKey: n, exactUsedKey: r, usedLng: i, usedNS: o}
                                        );
                                    },
                                },
                                {
                                    key: 'isValidLookup',
                                    value: function (t) {
                                        return (
                                            void 0 !== t &&
                                            !(!this.options.returnNull && null === t) &&
                                            !(!this.options.returnEmptyString && '' === t)
                                        );
                                    },
                                },
                                {
                                    key: 'getResource',
                                    value: function (t, e, n) {
                                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                        return this.i18nFormat && this.i18nFormat.getResource
                                            ? this.i18nFormat.getResource(t, e, n, r)
                                            : this.resourceStore.getResource(t, e, n, r);
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'hasDefaultValue',
                                    value: function (t) {
                                        var e = 'defaultValue';
                                        for (var n in t)
                                            if (
                                                Object.prototype.hasOwnProperty.call(t, n) &&
                                                e === n.substring(0, e.length) &&
                                                void 0 !== t[n]
                                            )
                                                return !0;
                                        return !1;
                                    },
                                },
                            ],
                        ),
                        r
                    );
                })(L);
            function J(t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
            }
            var Y = (function () {
                    function t(e) {
                        (h(this, t),
                            (this.options = e),
                            (this.supportedLngs = this.options.supportedLngs || !1),
                            (this.logger = P.create('languageUtils')));
                    }
                    return (
                        g(t, [
                            {
                                key: 'getScriptPartFromCode',
                                value: function (t) {
                                    if (!t || 0 > t.indexOf('-')) return null;
                                    var e = t.split('-');
                                    return 2 === e.length
                                        ? null
                                        : (e.pop(), 'x' === e[e.length - 1].toLowerCase())
                                          ? null
                                          : this.formatLanguageCode(e.join('-'));
                                },
                            },
                            {
                                key: 'getLanguagePartFromCode',
                                value: function (t) {
                                    if (!t || 0 > t.indexOf('-')) return t;
                                    var e = t.split('-');
                                    return this.formatLanguageCode(e[0]);
                                },
                            },
                            {
                                key: 'formatLanguageCode',
                                value: function (t) {
                                    if ('string' == typeof t && t.indexOf('-') > -1) {
                                        var e = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'],
                                            n = t.split('-');
                                        return (
                                            this.options.lowerCaseLng
                                                ? (n = n.map(function (t) {
                                                      return t.toLowerCase();
                                                  }))
                                                : 2 === n.length
                                                  ? ((n[0] = n[0].toLowerCase()),
                                                    (n[1] = n[1].toUpperCase()),
                                                    e.indexOf(n[1].toLowerCase()) > -1 &&
                                                        (n[1] = J(n[1].toLowerCase())))
                                                  : 3 === n.length &&
                                                    ((n[0] = n[0].toLowerCase()),
                                                    2 === n[1].length && (n[1] = n[1].toUpperCase()),
                                                    'sgn' !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                                                    e.indexOf(n[1].toLowerCase()) > -1 &&
                                                        (n[1] = J(n[1].toLowerCase())),
                                                    e.indexOf(n[2].toLowerCase()) > -1 &&
                                                        (n[2] = J(n[2].toLowerCase()))),
                                            n.join('-')
                                        );
                                    }
                                    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
                                },
                            },
                            {
                                key: 'isSupportedCode',
                                value: function (t) {
                                    return (
                                        ('languageOnly' === this.options.load ||
                                            this.options.nonExplicitSupportedLngs) &&
                                            (t = this.getLanguagePartFromCode(t)),
                                        !this.supportedLngs ||
                                            !this.supportedLngs.length ||
                                            this.supportedLngs.indexOf(t) > -1
                                    );
                                },
                            },
                            {
                                key: 'getBestMatchFromCodes',
                                value: function (t) {
                                    var e,
                                        n = this;
                                    return t
                                        ? (t.forEach(function (t) {
                                              if (!e) {
                                                  var r = n.formatLanguageCode(t);
                                                  (!n.options.supportedLngs || n.isSupportedCode(r)) && (e = r);
                                              }
                                          }),
                                          !e &&
                                              this.options.supportedLngs &&
                                              t.forEach(function (t) {
                                                  if (!e) {
                                                      var r = n.getLanguagePartFromCode(t);
                                                      if (n.isSupportedCode(r)) return (e = r);
                                                      e = n.options.supportedLngs.find(function (t) {
                                                          if (
                                                              t === r ||
                                                              (!(0 > t.indexOf('-') && 0 > r.indexOf('-')) &&
                                                                  0 === t.indexOf(r))
                                                          )
                                                              return t;
                                                      });
                                                  }
                                              }),
                                          e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]),
                                          e)
                                        : null;
                                },
                            },
                            {
                                key: 'getFallbackCodes',
                                value: function (t, e) {
                                    if (!t) return [];
                                    if (
                                        ('function' == typeof t && (t = t(e)),
                                        'string' == typeof t && (t = [t]),
                                        '[object Array]' === Object.prototype.toString.apply(t))
                                    )
                                        return t;
                                    if (!e) return t.default || [];
                                    var n = t[e];
                                    return (
                                        n || (n = t[this.getScriptPartFromCode(e)]),
                                        n || (n = t[this.formatLanguageCode(e)]),
                                        n || (n = t[this.getLanguagePartFromCode(e)]),
                                        n || (n = t.default),
                                        n || []
                                    );
                                },
                            },
                            {
                                key: 'toResolveHierarchy',
                                value: function (t, e) {
                                    var n = this,
                                        r = this.getFallbackCodes(e || this.options.fallbackLng || [], t),
                                        i = [],
                                        o = function (t) {
                                            t &&
                                                (n.isSupportedCode(t)
                                                    ? i.push(t)
                                                    : n.logger.warn(
                                                          'rejecting language code not found in supportedLngs: '.concat(
                                                              t,
                                                          ),
                                                      ));
                                        };
                                    return (
                                        'string' == typeof t && t.indexOf('-') > -1
                                            ? ('languageOnly' !== this.options.load && o(this.formatLanguageCode(t)),
                                              'languageOnly' !== this.options.load &&
                                                  'currentOnly' !== this.options.load &&
                                                  o(this.getScriptPartFromCode(t)),
                                              'currentOnly' !== this.options.load && o(this.getLanguagePartFromCode(t)))
                                            : 'string' == typeof t && o(this.formatLanguageCode(t)),
                                        r.forEach(function (t) {
                                            0 > i.indexOf(t) && o(n.formatLanguageCode(t));
                                        }),
                                        i
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(),
                W = [
                    {
                        lngs: [
                            'ach',
                            'ak',
                            'am',
                            'arn',
                            'br',
                            'fil',
                            'gun',
                            'ln',
                            'mfe',
                            'mg',
                            'mi',
                            'oc',
                            'pt',
                            'pt-BR',
                            'tg',
                            'tl',
                            'ti',
                            'tr',
                            'uz',
                            'wa',
                        ],
                        nr: [1, 2],
                        fc: 1,
                    },
                    {
                        lngs: [
                            'af',
                            'an',
                            'ast',
                            'az',
                            'bg',
                            'bn',
                            'ca',
                            'da',
                            'de',
                            'dev',
                            'el',
                            'en',
                            'eo',
                            'es',
                            'et',
                            'eu',
                            'fi',
                            'fo',
                            'fur',
                            'fy',
                            'gl',
                            'gu',
                            'ha',
                            'hi',
                            'hu',
                            'hy',
                            'ia',
                            'it',
                            'kk',
                            'kn',
                            'ku',
                            'lb',
                            'mai',
                            'ml',
                            'mn',
                            'mr',
                            'nah',
                            'nap',
                            'nb',
                            'ne',
                            'nl',
                            'nn',
                            'no',
                            'nso',
                            'pa',
                            'pap',
                            'pms',
                            'ps',
                            'pt-PT',
                            'rm',
                            'sco',
                            'se',
                            'si',
                            'so',
                            'son',
                            'sq',
                            'sv',
                            'sw',
                            'ta',
                            'te',
                            'tk',
                            'ur',
                            'yo',
                        ],
                        nr: [1, 2],
                        fc: 2,
                    },
                    {
                        lngs: [
                            'ay',
                            'bo',
                            'cgg',
                            'fa',
                            'ht',
                            'id',
                            'ja',
                            'jbo',
                            'ka',
                            'km',
                            'ko',
                            'ky',
                            'lo',
                            'ms',
                            'sah',
                            'su',
                            'th',
                            'tt',
                            'ug',
                            'vi',
                            'wo',
                            'zh',
                        ],
                        nr: [1],
                        fc: 3,
                    },
                    {lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4},
                    {lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5},
                    {lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6},
                    {lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7},
                    {lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8},
                    {lngs: ['fr'], nr: [1, 2], fc: 9},
                    {lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10},
                    {lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11},
                    {lngs: ['is'], nr: [1, 2], fc: 12},
                    {lngs: ['jv'], nr: [0, 1], fc: 13},
                    {lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14},
                    {lngs: ['lt'], nr: [1, 2, 10], fc: 15},
                    {lngs: ['lv'], nr: [1, 2, 0], fc: 16},
                    {lngs: ['mk'], nr: [1, 2], fc: 17},
                    {lngs: ['mnk'], nr: [0, 1, 2], fc: 18},
                    {lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19},
                    {lngs: ['or'], nr: [2, 1], fc: 2},
                    {lngs: ['ro'], nr: [1, 2, 20], fc: 20},
                    {lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21},
                    {lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22},
                ],
                X = {
                    1: function (t) {
                        return Number(t > 1);
                    },
                    2: function (t) {
                        return Number(1 != t);
                    },
                    3: function (t) {
                        return 0;
                    },
                    4: function (t) {
                        return Number(
                            t % 10 == 1 && t % 100 != 11
                                ? 0
                                : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
                                  ? 1
                                  : 2,
                        );
                    },
                    5: function (t) {
                        return Number(
                            0 == t
                                ? 0
                                : 1 == t
                                  ? 1
                                  : 2 == t
                                    ? 2
                                    : t % 100 >= 3 && t % 100 <= 10
                                      ? 3
                                      : t % 100 >= 11
                                        ? 4
                                        : 5,
                        );
                    },
                    6: function (t) {
                        return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2);
                    },
                    7: function (t) {
                        return Number(
                            1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
                        );
                    },
                    8: function (t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3);
                    },
                    9: function (t) {
                        return Number(t >= 2);
                    },
                    10: function (t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4);
                    },
                    11: function (t) {
                        return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3);
                    },
                    12: function (t) {
                        return Number(t % 10 != 1 || t % 100 == 11);
                    },
                    13: function (t) {
                        return Number(0 !== t);
                    },
                    14: function (t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3);
                    },
                    15: function (t) {
                        return Number(
                            t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
                        );
                    },
                    16: function (t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2);
                    },
                    17: function (t) {
                        return Number(1 == t || (t % 10 == 1 && t % 100 != 11) ? 0 : 1);
                    },
                    18: function (t) {
                        return Number(0 == t ? 0 : 1 == t ? 1 : 2);
                    },
                    19: function (t) {
                        return Number(
                            1 == t
                                ? 0
                                : 0 == t || (t % 100 > 1 && t % 100 < 11)
                                  ? 1
                                  : t % 100 > 10 && t % 100 < 20
                                    ? 2
                                    : 3,
                        );
                    },
                    20: function (t) {
                        return Number(1 == t ? 0 : 0 == t || (t % 100 > 0 && t % 100 < 20) ? 1 : 2);
                    },
                    21: function (t) {
                        return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0);
                    },
                    22: function (t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3);
                    },
                },
                G = ['v1', 'v2', 'v3'],
                Z = {zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5},
                Q = (function () {
                    function t(e) {
                        var n,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (h(this, t),
                            (this.languageUtils = e),
                            (this.options = r),
                            (this.logger = P.create('pluralResolver')),
                            (this.options.compatibilityJSON && 'v4' !== this.options.compatibilityJSON) ||
                                ('undefined' != typeof Intl && Intl.PluralRules) ||
                                ((this.options.compatibilityJSON = 'v3'),
                                this.logger.error(
                                    'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
                                )),
                            (this.rules =
                                ((n = {}),
                                W.forEach(function (t) {
                                    t.lngs.forEach(function (e) {
                                        n[e] = {numbers: t.nr, plurals: X[t.fc]};
                                    });
                                }),
                                n)));
                    }
                    return (
                        g(t, [
                            {
                                key: 'addRule',
                                value: function (t, e) {
                                    this.rules[t] = e;
                                },
                            },
                            {
                                key: 'getRule',
                                value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    if (this.shouldUseIntlApi())
                                        try {
                                            return new Intl.PluralRules(t, {type: e.ordinal ? 'ordinal' : 'cardinal'});
                                        } catch (t) {
                                            return;
                                        }
                                    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
                                },
                            },
                            {
                                key: 'needsPlural',
                                value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = this.getRule(t, e);
                                    return this.shouldUseIntlApi()
                                        ? n && n.resolvedOptions().pluralCategories.length > 1
                                        : n && n.numbers.length > 1;
                                },
                            },
                            {
                                key: 'getPluralFormsOfKey',
                                value: function (t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return this.getSuffixes(t, n).map(function (t) {
                                        return ''.concat(e).concat(t);
                                    });
                                },
                            },
                            {
                                key: 'getSuffixes',
                                value: function (t) {
                                    var e = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = this.getRule(t, n);
                                    return r
                                        ? this.shouldUseIntlApi()
                                            ? r
                                                  .resolvedOptions()
                                                  .pluralCategories.sort(function (t, e) {
                                                      return Z[t] - Z[e];
                                                  })
                                                  .map(function (t) {
                                                      return ''.concat(e.options.prepend).concat(t);
                                                  })
                                            : r.numbers.map(function (r) {
                                                  return e.getSuffix(t, r, n);
                                              })
                                        : [];
                                },
                            },
                            {
                                key: 'getSuffix',
                                value: function (t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        r = this.getRule(t, n);
                                    return r
                                        ? this.shouldUseIntlApi()
                                            ? ''.concat(this.options.prepend).concat(r.select(e))
                                            : this.getSuffixRetroCompatible(r, e)
                                        : (this.logger.warn('no plural rule found for: '.concat(t)), '');
                                },
                            },
                            {
                                key: 'getSuffixRetroCompatible',
                                value: function (t, e) {
                                    var n = this,
                                        r = t.noAbs ? t.plurals(e) : t.plurals(Math.abs(e)),
                                        i = t.numbers[r];
                                    this.options.simplifyPluralSuffix &&
                                        2 === t.numbers.length &&
                                        1 === t.numbers[0] &&
                                        (2 === i ? (i = 'plural') : 1 === i && (i = ''));
                                    var o = function () {
                                        return n.options.prepend && i.toString()
                                            ? n.options.prepend + i.toString()
                                            : i.toString();
                                    };
                                    return 'v1' === this.options.compatibilityJSON
                                        ? 1 === i
                                            ? ''
                                            : 'number' == typeof i
                                              ? '_plural_'.concat(i.toString())
                                              : o()
                                        : 'v2' === this.options.compatibilityJSON ||
                                            (this.options.simplifyPluralSuffix &&
                                                2 === t.numbers.length &&
                                                1 === t.numbers[0])
                                          ? o()
                                          : this.options.prepend && r.toString()
                                            ? this.options.prepend + r.toString()
                                            : r.toString();
                                },
                            },
                            {
                                key: 'shouldUseIntlApi',
                                value: function () {
                                    return !G.includes(this.options.compatibilityJSON);
                                },
                            },
                        ]),
                        t
                    );
                })();
            function tt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    (e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            function te(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? tt(Object(n), !0).forEach(function (e) {
                              w(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : tt(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            function tn(t, e, n) {
                var r,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '.',
                    o = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                    a = void 0 !== (r = N(t, n)) ? r : N(e, n);
                return (!a && o && 'string' == typeof n && void 0 === (a = F(t, n, i)) && (a = F(e, n, i)), a);
            }
            var tr = (function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (h(this, t),
                        (this.logger = P.create('interpolator')),
                        (this.options = e),
                        (this.format =
                            (e.interpolation && e.interpolation.format) ||
                            function (t) {
                                return t;
                            }),
                        this.init(e));
                }
                return (
                    g(t, [
                        {
                            key: 'init',
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                t.interpolation || (t.interpolation = {escapeValue: !0});
                                var e = t.interpolation;
                                ((this.escape = void 0 !== e.escape ? e.escape : I),
                                    (this.escapeValue = void 0 === e.escapeValue || e.escapeValue),
                                    (this.useRawValueToEscape =
                                        void 0 !== e.useRawValueToEscape && e.useRawValueToEscape),
                                    (this.prefix = e.prefix ? A(e.prefix) : e.prefixEscaped || '{{'),
                                    (this.suffix = e.suffix ? A(e.suffix) : e.suffixEscaped || '}}'),
                                    (this.formatSeparator = e.formatSeparator
                                        ? e.formatSeparator
                                        : e.formatSeparator || ','),
                                    (this.unescapePrefix = e.unescapeSuffix ? '' : e.unescapePrefix || '-'),
                                    (this.unescapeSuffix = this.unescapePrefix ? '' : e.unescapeSuffix || ''),
                                    (this.nestingPrefix = e.nestingPrefix
                                        ? A(e.nestingPrefix)
                                        : e.nestingPrefixEscaped || A('$t(')),
                                    (this.nestingSuffix = e.nestingSuffix
                                        ? A(e.nestingSuffix)
                                        : e.nestingSuffixEscaped || A(')')),
                                    (this.nestingOptionsSeparator = e.nestingOptionsSeparator
                                        ? e.nestingOptionsSeparator
                                        : e.nestingOptionsSeparator || ','),
                                    (this.maxReplaces = e.maxReplaces ? e.maxReplaces : 1e3),
                                    (this.alwaysFormat = void 0 !== e.alwaysFormat && e.alwaysFormat),
                                    this.resetRegExp());
                            },
                        },
                        {
                            key: 'reset',
                            value: function () {
                                this.options && this.init(this.options);
                            },
                        },
                        {
                            key: 'resetRegExp',
                            value: function () {
                                var t = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
                                this.regexp = RegExp(t, 'g');
                                var e = ''
                                    .concat(this.prefix)
                                    .concat(this.unescapePrefix, '(.+?)')
                                    .concat(this.unescapeSuffix)
                                    .concat(this.suffix);
                                this.regexpUnescape = RegExp(e, 'g');
                                var n = ''.concat(this.nestingPrefix, '(.+?)').concat(this.nestingSuffix);
                                this.nestingRegexp = RegExp(n, 'g');
                            },
                        },
                        {
                            key: 'interpolate',
                            value: function (t, e, n, r) {
                                var i,
                                    o,
                                    a,
                                    s = this,
                                    u =
                                        (this.options &&
                                            this.options.interpolation &&
                                            this.options.interpolation.defaultVariables) ||
                                        {};
                                function c(t) {
                                    return t.replace(/\$/g, '$$$$');
                                }
                                var l = function (t) {
                                    if (0 > t.indexOf(s.formatSeparator)) {
                                        var i = tn(e, u, t, s.options.keySeparator, s.options.ignoreJSONStructure);
                                        return s.alwaysFormat
                                            ? s.format(i, void 0, n, te(te(te({}, r), e), {}, {interpolationkey: t}))
                                            : i;
                                    }
                                    var o = t.split(s.formatSeparator),
                                        a = o.shift().trim(),
                                        c = o.join(s.formatSeparator).trim();
                                    return s.format(
                                        tn(e, u, a, s.options.keySeparator, s.options.ignoreJSONStructure),
                                        c,
                                        n,
                                        te(te(te({}, r), e), {}, {interpolationkey: a}),
                                    );
                                };
                                this.resetRegExp();
                                var f =
                                        (r && r.missingInterpolationHandler) ||
                                        this.options.missingInterpolationHandler,
                                    h =
                                        r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
                                            ? r.interpolation.skipOnVariables
                                            : this.options.interpolation.skipOnVariables;
                                return (
                                    [
                                        {
                                            regex: this.regexpUnescape,
                                            safeValue: function (t) {
                                                return c(t);
                                            },
                                        },
                                        {
                                            regex: this.regexp,
                                            safeValue: function (t) {
                                                return s.escapeValue ? c(s.escape(t)) : c(t);
                                            },
                                        },
                                    ].forEach(function (e) {
                                        for (a = 0; (i = e.regex.exec(t)); ) {
                                            var n = i[1].trim();
                                            if (void 0 === (o = l(n))) {
                                                if ('function' == typeof f) {
                                                    var u = f(t, i, r);
                                                    o = 'string' == typeof u ? u : '';
                                                } else if (r && Object.prototype.hasOwnProperty.call(r, n)) o = '';
                                                else if (h) {
                                                    o = i[0];
                                                    continue;
                                                } else
                                                    (s.logger.warn(
                                                        'missed to pass in variable '
                                                            .concat(n, ' for interpolating ')
                                                            .concat(t),
                                                    ),
                                                        (o = ''));
                                            } else 'string' == typeof o || s.useRawValueToEscape || (o = R(o));
                                            var c = e.safeValue(o);
                                            if (
                                                ((t = t.replace(i[0], c)),
                                                h
                                                    ? ((e.regex.lastIndex += o.length),
                                                      (e.regex.lastIndex -= i[0].length))
                                                    : (e.regex.lastIndex = 0),
                                                ++a >= s.maxReplaces)
                                            )
                                                break;
                                        }
                                    }),
                                    t
                                );
                            },
                        },
                        {
                            key: 'nest',
                            value: function (t, e) {
                                var n,
                                    r,
                                    i,
                                    o = this,
                                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                function s(t, e) {
                                    var n = this.nestingOptionsSeparator;
                                    if (0 > t.indexOf(n)) return t;
                                    var r = t.split(new RegExp(''.concat(n, '[ ]*{'))),
                                        o = '{'.concat(r[1]);
                                    t = r[0];
                                    var a = (o = this.interpolate(o, i)).match(/'/g),
                                        s = o.match(/"/g);
                                    ((a && a.length % 2 == 0 && !s) || s.length % 2 != 0) && (o = o.replace(/'/g, '"'));
                                    try {
                                        ((i = JSON.parse(o)), e && (i = te(te({}, e), i)));
                                    } catch (e) {
                                        return (
                                            this.logger.warn(
                                                'failed parsing options string in nesting for key '.concat(t),
                                                e,
                                            ),
                                            ''.concat(t).concat(n).concat(o)
                                        );
                                    }
                                    return (delete i.defaultValue, t);
                                }
                                for (; (n = this.nestingRegexp.exec(t)); ) {
                                    var u = [];
                                    (((i =
                                        (i = te({}, a)).replace && 'string' != typeof i.replace
                                            ? i.replace
                                            : i).applyPostProcessor = !1),
                                        delete i.defaultValue);
                                    var c = !1;
                                    if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                        var l = n[1].split(this.formatSeparator).map(function (t) {
                                            return t.trim();
                                        });
                                        ((n[1] = l.shift()), (u = l), (c = !0));
                                    }
                                    if ((r = e(s.call(this, n[1].trim(), i), i)) && n[0] === t && 'string' != typeof r)
                                        return r;
                                    ('string' != typeof r && (r = R(r)),
                                        r ||
                                            (this.logger.warn(
                                                'missed to resolve '.concat(n[1], ' for nesting ').concat(t),
                                            ),
                                            (r = '')),
                                        c &&
                                            (r = u.reduce(function (t, e) {
                                                return o.format(
                                                    t,
                                                    e,
                                                    a.lng,
                                                    te(te({}, a), {}, {interpolationkey: n[1].trim()}),
                                                );
                                            }, r.trim())),
                                        (t = t.replace(n[0], r)),
                                        (this.regexp.lastIndex = 0));
                                }
                                return t;
                            },
                        },
                    ]),
                    t
                );
            })();
            function ti(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    (e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            function to(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? ti(Object(n), !0).forEach(function (e) {
                              w(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : ti(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            function ta(t) {
                var e = {};
                return function (n, r, i) {
                    var o = r + JSON.stringify(i),
                        a = e[o];
                    return (a || ((a = t(r, i)), (e[o] = a)), a(n));
                };
            }
            var ts = (function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (h(this, t),
                        (this.logger = P.create('formatter')),
                        (this.options = e),
                        (this.formats = {
                            number: ta(function (t, e) {
                                var n = new Intl.NumberFormat(t, to({}, e));
                                return function (t) {
                                    return n.format(t);
                                };
                            }),
                            currency: ta(function (t, e) {
                                var n = new Intl.NumberFormat(t, to(to({}, e), {}, {style: 'currency'}));
                                return function (t) {
                                    return n.format(t);
                                };
                            }),
                            datetime: ta(function (t, e) {
                                var n = new Intl.DateTimeFormat(t, to({}, e));
                                return function (t) {
                                    return n.format(t);
                                };
                            }),
                            relativetime: ta(function (t, e) {
                                var n = new Intl.RelativeTimeFormat(t, to({}, e));
                                return function (t) {
                                    return n.format(t, e.range || 'day');
                                };
                            }),
                            list: ta(function (t, e) {
                                var n = new Intl.ListFormat(t, to({}, e));
                                return function (t) {
                                    return n.format(t);
                                };
                            }),
                        }),
                        this.init(e));
                }
                return (
                    g(t, [
                        {
                            key: 'init',
                            value: function (t) {
                                var e =
                                        arguments.length > 1 && void 0 !== arguments[1]
                                            ? arguments[1]
                                            : {interpolation: {}},
                                    n = e.interpolation;
                                this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ',';
                            },
                        },
                        {
                            key: 'add',
                            value: function (t, e) {
                                this.formats[t.toLowerCase().trim()] = e;
                            },
                        },
                        {
                            key: 'addCached',
                            value: function (t, e) {
                                this.formats[t.toLowerCase().trim()] = ta(e);
                            },
                        },
                        {
                            key: 'format',
                            value: function (t, e, n) {
                                var r = this,
                                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                return e.split(this.formatSeparator).reduce(function (t, e) {
                                    var o = (function (t) {
                                            var e = t.toLowerCase().trim(),
                                                n = {};
                                            if (t.indexOf('(') > -1) {
                                                var r = t.split('(');
                                                e = r[0].toLowerCase().trim();
                                                var i = r[1].substring(0, r[1].length - 1);
                                                'currency' === e && 0 > i.indexOf(':')
                                                    ? n.currency || (n.currency = i.trim())
                                                    : 'relativetime' === e && 0 > i.indexOf(':')
                                                      ? n.range || (n.range = i.trim())
                                                      : i.split(';').forEach(function (t) {
                                                            if (t) {
                                                                var e,
                                                                    r =
                                                                        (function (t) {
                                                                            if (Array.isArray(t)) return t;
                                                                        })((e = t.split(':'))) ||
                                                                        (function (t) {
                                                                            if (
                                                                                ('undefined' != typeof Symbol &&
                                                                                    null != t[Symbol.iterator]) ||
                                                                                null != t['@@iterator']
                                                                            )
                                                                                return Array.from(t);
                                                                        })(e) ||
                                                                        (function (t, e) {
                                                                            if (t) {
                                                                                if ('string' == typeof t)
                                                                                    return k(t, e);
                                                                                var n = Object.prototype.toString
                                                                                    .call(t)
                                                                                    .slice(8, -1);
                                                                                if (
                                                                                    ('Object' === n &&
                                                                                        t.constructor &&
                                                                                        (n = t.constructor.name),
                                                                                    'Map' === n || 'Set' === n)
                                                                                )
                                                                                    return Array.from(t);
                                                                                if (
                                                                                    'Arguments' === n ||
                                                                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                        n,
                                                                                    )
                                                                                )
                                                                                    return k(t, e);
                                                                            }
                                                                        })(e) ||
                                                                        (function () {
                                                                            throw TypeError(
                                                                                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                            );
                                                                        })(),
                                                                    i = r[0],
                                                                    o = r
                                                                        .slice(1)
                                                                        .join(':')
                                                                        .trim()
                                                                        .replace(/^'+|'+$/g, '');
                                                                (n[i.trim()] || (n[i.trim()] = o),
                                                                    'false' === o && (n[i.trim()] = !1),
                                                                    'true' === o && (n[i.trim()] = !0),
                                                                    isNaN(o) || (n[i.trim()] = parseInt(o, 10)));
                                                            }
                                                        });
                                            }
                                            return {formatName: e, formatOptions: n};
                                        })(e),
                                        a = o.formatName,
                                        s = o.formatOptions;
                                    if (r.formats[a]) {
                                        var u = t;
                                        try {
                                            var c = (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
                                                l = c.locale || c.lng || i.locale || i.lng || n;
                                            u = r.formats[a](t, l, to(to(to({}, s), i), c));
                                        } catch (t) {
                                            r.logger.warn(t);
                                        }
                                        return u;
                                    }
                                    return (r.logger.warn('there was no format function for '.concat(a)), t);
                                }, t);
                            },
                        },
                    ]),
                    t
                );
            })();
            function tu(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    (e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            function tc(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? tu(Object(n), !0).forEach(function (e) {
                              w(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : tu(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            var tl = (function (t) {
                b(r, t);
                var e,
                    n =
                        ((e = (function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                                return !1;
                            if ('function' == typeof Proxy) return !0;
                            try {
                                return (
                                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                                    !0
                                );
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                n = O(r);
                            if (e) {
                                var i = O(this).constructor;
                                t = Reflect.construct(n, arguments, i);
                            } else t = n.apply(this, arguments);
                            return m(this, t);
                        });
                function r(t, e, i) {
                    var o,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return (
                        h(this, r),
                        (o = n.call(this)),
                        $ && L.call(y(o)),
                        (o.backend = t),
                        (o.store = e),
                        (o.services = i),
                        (o.languageUtils = i.languageUtils),
                        (o.options = a),
                        (o.logger = P.create('backendConnector')),
                        (o.waitingReads = []),
                        (o.maxParallelReads = a.maxParallelReads || 10),
                        (o.readingCalls = 0),
                        (o.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
                        (o.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
                        (o.state = {}),
                        (o.queue = []),
                        o.backend && o.backend.init && o.backend.init(i, a.backend, a),
                        o
                    );
                }
                return (
                    g(r, [
                        {
                            key: 'queueLoad',
                            value: function (t, e, n, r) {
                                var i = this,
                                    o = {},
                                    a = {},
                                    s = {},
                                    u = {};
                                return (
                                    t.forEach(function (t) {
                                        var r = !0;
                                        (e.forEach(function (e) {
                                            var s = ''.concat(t, '|').concat(e);
                                            !n.reload && i.store.hasResourceBundle(t, e)
                                                ? (i.state[s] = 2)
                                                : i.state[s] < 0 ||
                                                  (1 === i.state[s]
                                                      ? void 0 === a[s] && (a[s] = !0)
                                                      : ((i.state[s] = 1),
                                                        (r = !1),
                                                        void 0 === a[s] && (a[s] = !0),
                                                        void 0 === o[s] && (o[s] = !0),
                                                        void 0 === u[e] && (u[e] = !0)));
                                        }),
                                            r || (s[t] = !0));
                                    }),
                                    (Object.keys(o).length || Object.keys(a).length) &&
                                        this.queue.push({
                                            pending: a,
                                            pendingCount: Object.keys(a).length,
                                            loaded: {},
                                            errors: [],
                                            callback: r,
                                        }),
                                    {
                                        toLoad: Object.keys(o),
                                        pending: Object.keys(a),
                                        toLoadLanguages: Object.keys(s),
                                        toLoadNamespaces: Object.keys(u),
                                    }
                                );
                            },
                        },
                        {
                            key: 'loaded',
                            value: function (t, e, n) {
                                var r = t.split('|'),
                                    i = r[0],
                                    o = r[1];
                                (e && this.emit('failedLoading', i, o, e),
                                    n && this.store.addResourceBundle(i, o, n),
                                    (this.state[t] = e ? -1 : 2));
                                var a = {};
                                (this.queue.forEach(function (n) {
                                    var r, s, u, c;
                                    (((u = (s = C(n.loaded, [i], Object)).obj)[(c = s.k)] = u[c] || []),
                                        r && (u[c] = u[c].concat(o)),
                                        r || u[c].push(o),
                                        void 0 !== n.pending[t] && (delete n.pending[t], n.pendingCount--),
                                        e && n.errors.push(e),
                                        0 !== n.pendingCount ||
                                            n.done ||
                                            (Object.keys(n.loaded).forEach(function (t) {
                                                a[t] || (a[t] = {});
                                                var e = n.loaded[t];
                                                e.length &&
                                                    e.forEach(function (e) {
                                                        void 0 === a[t][e] && (a[t][e] = !0);
                                                    });
                                            }),
                                            (n.done = !0),
                                            n.errors.length ? n.callback(n.errors) : n.callback()));
                                }),
                                    this.emit('loaded', a),
                                    (this.queue = this.queue.filter(function (t) {
                                        return !t.done;
                                    })));
                            },
                        },
                        {
                            key: 'read',
                            value: function (t, e, n) {
                                var r = this,
                                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                    o =
                                        arguments.length > 4 && void 0 !== arguments[4]
                                            ? arguments[4]
                                            : this.retryTimeout,
                                    a = arguments.length > 5 ? arguments[5] : void 0;
                                if (!t.length) return a(null, {});
                                if (this.readingCalls >= this.maxParallelReads) {
                                    this.waitingReads.push({lng: t, ns: e, fcName: n, tried: i, wait: o, callback: a});
                                    return;
                                }
                                this.readingCalls++;
                                var s = function (s, u) {
                                        if ((r.readingCalls--, r.waitingReads.length > 0)) {
                                            var c = r.waitingReads.shift();
                                            r.read(c.lng, c.ns, c.fcName, c.tried, c.wait, c.callback);
                                        }
                                        if (s && u && i < r.maxRetries) {
                                            setTimeout(function () {
                                                r.read.call(r, t, e, n, i + 1, 2 * o, a);
                                            }, o);
                                            return;
                                        }
                                        a(s, u);
                                    },
                                    u = this.backend[n].bind(this.backend);
                                if (2 === u.length) {
                                    try {
                                        var c = u(t, e);
                                        c && 'function' == typeof c.then
                                            ? c
                                                  .then(function (t) {
                                                      return s(null, t);
                                                  })
                                                  .catch(s)
                                            : s(null, c);
                                    } catch (t) {
                                        s(t);
                                    }
                                    return;
                                }
                                return u(t, e, s);
                            },
                        },
                        {
                            key: 'prepareLoading',
                            value: function (t, e) {
                                var n = this,
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    i = arguments.length > 3 ? arguments[3] : void 0;
                                if (!this.backend)
                                    return (
                                        this.logger.warn(
                                            'No backend was added via i18next.use. Will not load resources.',
                                        ),
                                        i && i()
                                    );
                                ('string' == typeof t && (t = this.languageUtils.toResolveHierarchy(t)),
                                    'string' == typeof e && (e = [e]));
                                var o = this.queueLoad(t, e, r, i);
                                if (!o.toLoad.length) return (o.pending.length || i(), null);
                                o.toLoad.forEach(function (t) {
                                    n.loadOne(t);
                                });
                            },
                        },
                        {
                            key: 'load',
                            value: function (t, e, n) {
                                this.prepareLoading(t, e, {}, n);
                            },
                        },
                        {
                            key: 'reload',
                            value: function (t, e, n) {
                                this.prepareLoading(t, e, {reload: !0}, n);
                            },
                        },
                        {
                            key: 'loadOne',
                            value: function (t) {
                                var e = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                                    r = t.split('|'),
                                    i = r[0],
                                    o = r[1];
                                this.read(i, o, 'read', void 0, void 0, function (r, a) {
                                    (r &&
                                        e.logger.warn(
                                            ''
                                                .concat(n, 'loading namespace ')
                                                .concat(o, ' for language ')
                                                .concat(i, ' failed'),
                                            r,
                                        ),
                                        !r &&
                                            a &&
                                            e.logger.log(
                                                ''.concat(n, 'loaded namespace ').concat(o, ' for language ').concat(i),
                                                a,
                                            ),
                                        e.loaded(t, r, a));
                                });
                            },
                        },
                        {
                            key: 'saveMissing',
                            value: function (t, e, n, r, i) {
                                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                                    a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function () {};
                                if (
                                    this.services.utils &&
                                    this.services.utils.hasLoadedNamespace &&
                                    !this.services.utils.hasLoadedNamespace(e)
                                ) {
                                    this.logger.warn(
                                        'did not save key "'
                                            .concat(n, '" as the namespace "')
                                            .concat(e, '" was not yet loaded'),
                                        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                                    );
                                    return;
                                }
                                if (null != n && '' !== n) {
                                    if (this.backend && this.backend.create) {
                                        var s,
                                            u = tc(tc({}, o), {}, {isUpdate: i}),
                                            c = this.backend.create.bind(this.backend);
                                        if (c.length < 6)
                                            try {
                                                (s = 5 === c.length ? c(t, e, n, r, u) : c(t, e, n, r)) &&
                                                'function' == typeof s.then
                                                    ? s
                                                          .then(function (t) {
                                                              return a(null, t);
                                                          })
                                                          .catch(a)
                                                    : a(null, s);
                                            } catch (t) {
                                                a(t);
                                            }
                                        else c(t, e, n, r, a, u);
                                    }
                                    t && t[0] && this.store.addResource(t[0], e, n, r);
                                }
                            },
                        },
                    ]),
                    r
                );
            })(L);
            function tf() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ['translation'],
                    defaultNS: ['translation'],
                    fallbackLng: ['dev'],
                    fallbackNS: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: 'all',
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: '.',
                    nsSeparator: ':',
                    pluralSeparator: '_',
                    contextSeparator: '_',
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: 'fallback',
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !0,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function (t) {
                        var e = {};
                        if (
                            ('object' === f(t[1]) && (e = t[1]),
                            'string' == typeof t[1] && (e.defaultValue = t[1]),
                            'string' == typeof t[2] && (e.tDescription = t[2]),
                            'object' === f(t[2]) || 'object' === f(t[3]))
                        ) {
                            var n = t[3] || t[2];
                            Object.keys(n).forEach(function (t) {
                                e[t] = n[t];
                            });
                        }
                        return e;
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: function (t, e, n, r) {
                            return t;
                        },
                        prefix: '{{',
                        suffix: '}}',
                        formatSeparator: ',',
                        unescapePrefix: '-',
                        nestingPrefix: '$t(',
                        nestingSuffix: ')',
                        nestingOptionsSeparator: ',',
                        maxReplaces: 1e3,
                        skipOnVariables: !0,
                    },
                };
            }
            function th(t) {
                return (
                    'string' == typeof t.ns && (t.ns = [t.ns]),
                    'string' == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]),
                    'string' == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]),
                    t.supportedLngs &&
                        0 > t.supportedLngs.indexOf('cimode') &&
                        (t.supportedLngs = t.supportedLngs.concat(['cimode'])),
                    t
                );
            }
            function td(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    (e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            function tp(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? td(Object(n), !0).forEach(function (e) {
                              w(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : td(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            function tg() {}
            var ty = (function (t) {
                b(r, t);
                var e,
                    n =
                        ((e = (function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                                return !1;
                            if ('function' == typeof Proxy) return !0;
                            try {
                                return (
                                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                                    !0
                                );
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                n = O(r);
                            if (e) {
                                var i = O(this).constructor;
                                t = Reflect.construct(n, arguments, i);
                            } else t = n.apply(this, arguments);
                            return m(this, t);
                        });
                function r() {
                    var t,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments.length > 1 ? arguments[1] : void 0;
                    if (
                        (h(this, r),
                        (t = n.call(this)),
                        $ && L.call(y(t)),
                        (t.options = th(e)),
                        (t.services = {}),
                        (t.logger = P),
                        (t.modules = {external: []}),
                        !(function (t) {
                            Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(function (e) {
                                'function' == typeof t[e] && (t[e] = t[e].bind(t));
                            });
                        })(y(t)),
                        i && !t.isInitialized && !e.isClone)
                    ) {
                        if (!t.options.initImmediate) return (t.init(e, i), m(t, y(t)));
                        setTimeout(function () {
                            t.init(e, i);
                        }, 0);
                    }
                    return t;
                }
                return (
                    g(r, [
                        {
                            key: 'init',
                            value: function () {
                                var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = arguments.length > 1 ? arguments[1] : void 0;
                                ('function' == typeof e && ((n = e), (e = {})),
                                    !e.defaultNS &&
                                        !1 !== e.defaultNS &&
                                        e.ns &&
                                        ('string' == typeof e.ns
                                            ? (e.defaultNS = e.ns)
                                            : 0 > e.ns.indexOf('translation') && (e.defaultNS = e.ns[0])));
                                var r = tf();
                                function i(t) {
                                    return t ? ('function' == typeof t ? new t() : t) : null;
                                }
                                if (
                                    ((this.options = tp(tp(tp({}, r), this.options), th(e))),
                                    'v1' !== this.options.compatibilityAPI &&
                                        (this.options.interpolation = tp(
                                            tp({}, r.interpolation),
                                            this.options.interpolation,
                                        )),
                                    void 0 !== e.keySeparator &&
                                        (this.options.userDefinedKeySeparator = e.keySeparator),
                                    void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator),
                                    !this.options.isClone)
                                ) {
                                    (this.modules.logger
                                        ? P.init(i(this.modules.logger), this.options)
                                        : P.init(null, this.options),
                                        this.modules.formatter
                                            ? (o = this.modules.formatter)
                                            : 'undefined' != typeof Intl && (o = ts));
                                    var o,
                                        a = new Y(this.options);
                                    this.store = new B(this.options.resources, this.options);
                                    var s = this.services;
                                    ((s.logger = P),
                                        (s.resourceStore = this.store),
                                        (s.languageUtils = a),
                                        (s.pluralResolver = new Q(a, {
                                            prepend: this.options.pluralSeparator,
                                            compatibilityJSON: this.options.compatibilityJSON,
                                            simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                                        })),
                                        o &&
                                            (!this.options.interpolation.format ||
                                                this.options.interpolation.format === r.interpolation.format) &&
                                            ((s.formatter = i(o)),
                                            s.formatter.init(s, this.options),
                                            (this.options.interpolation.format = s.formatter.format.bind(s.formatter))),
                                        (s.interpolator = new tr(this.options)),
                                        (s.utils = {hasLoadedNamespace: this.hasLoadedNamespace.bind(this)}),
                                        (s.backendConnector = new tl(
                                            i(this.modules.backend),
                                            s.resourceStore,
                                            s,
                                            this.options,
                                        )),
                                        s.backendConnector.on('*', function (e) {
                                            for (
                                                var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
                                                i < n;
                                                i++
                                            )
                                                r[i - 1] = arguments[i];
                                            t.emit.apply(t, [e].concat(r));
                                        }),
                                        this.modules.languageDetector &&
                                            ((s.languageDetector = i(this.modules.languageDetector)),
                                            s.languageDetector.init &&
                                                s.languageDetector.init(s, this.options.detection, this.options)),
                                        this.modules.i18nFormat &&
                                            ((s.i18nFormat = i(this.modules.i18nFormat)),
                                            s.i18nFormat.init && s.i18nFormat.init(this)),
                                        (this.translator = new K(this.services, this.options)),
                                        this.translator.on('*', function (e) {
                                            for (
                                                var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
                                                i < n;
                                                i++
                                            )
                                                r[i - 1] = arguments[i];
                                            t.emit.apply(t, [e].concat(r));
                                        }),
                                        this.modules.external.forEach(function (e) {
                                            e.init && e.init(t);
                                        }));
                                }
                                if (
                                    ((this.format = this.options.interpolation.format),
                                    n || (n = tg),
                                    this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
                                ) {
                                    var u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                    u.length > 0 && 'dev' !== u[0] && (this.options.lng = u[0]);
                                }
                                (this.services.languageDetector ||
                                    this.options.lng ||
                                    this.logger.warn('init: no languageDetector is used and no lng is defined'),
                                    [
                                        'getResource',
                                        'hasResourceBundle',
                                        'getResourceBundle',
                                        'getDataByLanguage',
                                    ].forEach(function (e) {
                                        t[e] = function () {
                                            var n;
                                            return (n = t.store)[e].apply(n, arguments);
                                        };
                                    }),
                                    [
                                        'addResource',
                                        'addResources',
                                        'addResourceBundle',
                                        'removeResourceBundle',
                                    ].forEach(function (e) {
                                        t[e] = function () {
                                            var n;
                                            return ((n = t.store)[e].apply(n, arguments), t);
                                        };
                                    }));
                                var c = E(),
                                    l = function () {
                                        var e = function (e, r) {
                                            (t.isInitialized &&
                                                !t.initializedStoreOnce &&
                                                t.logger.warn(
                                                    'init: i18next is already initialized. You should call init just once!',
                                                ),
                                                (t.isInitialized = !0),
                                                t.options.isClone || t.logger.log('initialized', t.options),
                                                t.emit('initialized', t.options),
                                                c.resolve(r),
                                                n(e, r));
                                        };
                                        if (t.languages && 'v1' !== t.options.compatibilityAPI && !t.isInitialized)
                                            return e(null, t.t.bind(t));
                                        t.changeLanguage(t.options.lng, e);
                                    };
                                return (
                                    this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0),
                                    c
                                );
                            },
                        },
                        {
                            key: 'loadResources',
                            value: function (t) {
                                var e = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tg,
                                    r = n,
                                    i = 'string' == typeof t ? t : this.language;
                                if (
                                    ('function' == typeof t && (r = t),
                                    !this.options.resources || this.options.partialBundledLanguages)
                                ) {
                                    if (i && 'cimode' === i.toLowerCase()) return r();
                                    var o = [],
                                        a = function (t) {
                                            t &&
                                                e.services.languageUtils.toResolveHierarchy(t).forEach(function (t) {
                                                    0 > o.indexOf(t) && o.push(t);
                                                });
                                        };
                                    (i
                                        ? a(i)
                                        : this.services.languageUtils
                                              .getFallbackCodes(this.options.fallbackLng)
                                              .forEach(function (t) {
                                                  return a(t);
                                              }),
                                        this.options.preload &&
                                            this.options.preload.forEach(function (t) {
                                                return a(t);
                                            }),
                                        this.services.backendConnector.load(o, this.options.ns, function (t) {
                                            (t ||
                                                e.resolvedLanguage ||
                                                !e.language ||
                                                e.setResolvedLanguage(e.language),
                                                r(t));
                                        }));
                                } else r(null);
                            },
                        },
                        {
                            key: 'reloadResources',
                            value: function (t, e, n) {
                                var r = E();
                                return (
                                    t || (t = this.languages),
                                    e || (e = this.options.ns),
                                    n || (n = tg),
                                    this.services.backendConnector.reload(t, e, function (t) {
                                        (r.resolve(), n(t));
                                    }),
                                    r
                                );
                            },
                        },
                        {
                            key: 'use',
                            value: function (t) {
                                if (!t)
                                    throw Error(
                                        'You are passing an undefined module! Please check the object you are passing to i18next.use()',
                                    );
                                if (!t.type)
                                    throw Error(
                                        'You are passing a wrong module! Please check the object you are passing to i18next.use()',
                                    );
                                return (
                                    'backend' === t.type && (this.modules.backend = t),
                                    ('logger' === t.type || (t.log && t.warn && t.error)) && (this.modules.logger = t),
                                    'languageDetector' === t.type && (this.modules.languageDetector = t),
                                    'i18nFormat' === t.type && (this.modules.i18nFormat = t),
                                    'postProcessor' === t.type && H.addPostProcessor(t),
                                    'formatter' === t.type && (this.modules.formatter = t),
                                    '3rdParty' === t.type && this.modules.external.push(t),
                                    this
                                );
                            },
                        },
                        {
                            key: 'setResolvedLanguage',
                            value: function (t) {
                                if (t && this.languages && !(['cimode', 'dev'].indexOf(t) > -1))
                                    for (var e = 0; e < this.languages.length; e++) {
                                        var n = this.languages[e];
                                        if (
                                            !(['cimode', 'dev'].indexOf(n) > -1) &&
                                            this.store.hasLanguageSomeTranslations(n)
                                        ) {
                                            this.resolvedLanguage = n;
                                            break;
                                        }
                                    }
                            },
                        },
                        {
                            key: 'changeLanguage',
                            value: function (t, e) {
                                var n = this;
                                this.isLanguageChangingTo = t;
                                var r = E();
                                this.emit('languageChanging', t);
                                var i = function (t) {
                                        ((n.language = t),
                                            (n.languages = n.services.languageUtils.toResolveHierarchy(t)),
                                            (n.resolvedLanguage = void 0),
                                            n.setResolvedLanguage(t));
                                    },
                                    o = function (t, o) {
                                        (o
                                            ? (i(o),
                                              n.translator.changeLanguage(o),
                                              (n.isLanguageChangingTo = void 0),
                                              n.emit('languageChanged', o),
                                              n.logger.log('languageChanged', o))
                                            : (n.isLanguageChangingTo = void 0),
                                            r.resolve(function () {
                                                return n.t.apply(n, arguments);
                                            }),
                                            e &&
                                                e(t, function () {
                                                    return n.t.apply(n, arguments);
                                                }));
                                    },
                                    a = function (e) {
                                        t || e || !n.services.languageDetector || (e = []);
                                        var r =
                                            'string' == typeof e
                                                ? e
                                                : n.services.languageUtils.getBestMatchFromCodes(e);
                                        (r &&
                                            (n.language || i(r),
                                            n.translator.language || n.translator.changeLanguage(r),
                                            n.services.languageDetector &&
                                                n.services.languageDetector.cacheUserLanguage &&
                                                n.services.languageDetector.cacheUserLanguage(r)),
                                            n.loadResources(r, function (t) {
                                                o(t, r);
                                            }));
                                    };
                                return (
                                    t || !this.services.languageDetector || this.services.languageDetector.async
                                        ? !t && this.services.languageDetector && this.services.languageDetector.async
                                            ? 0 === this.services.languageDetector.detect.length
                                                ? this.services.languageDetector.detect().then(a)
                                                : this.services.languageDetector.detect(a)
                                            : a(t)
                                        : a(this.services.languageDetector.detect()),
                                    r
                                );
                            },
                        },
                        {
                            key: 'getFixedT',
                            value: function (t, e, n) {
                                var r = this,
                                    i = function t(e, i) {
                                        if ('object' !== f(i)) {
                                            for (
                                                var o, a, s = arguments.length, u = Array(s > 2 ? s - 2 : 0), c = 2;
                                                c < s;
                                                c++
                                            )
                                                u[c - 2] = arguments[c];
                                            o = r.options.overloadTranslationOptionHandler([e, i].concat(u));
                                        } else o = tp({}, i);
                                        ((o.lng = o.lng || t.lng),
                                            (o.lngs = o.lngs || t.lngs),
                                            (o.ns = o.ns || t.ns),
                                            (o.keyPrefix = o.keyPrefix || n || t.keyPrefix));
                                        var l = r.options.keySeparator || '.';
                                        return (
                                            (a =
                                                o.keyPrefix && Array.isArray(e)
                                                    ? e.map(function (t) {
                                                          return ''.concat(o.keyPrefix).concat(l).concat(t);
                                                      })
                                                    : o.keyPrefix
                                                      ? ''.concat(o.keyPrefix).concat(l).concat(e)
                                                      : e),
                                            r.t(a, o)
                                        );
                                    };
                                return (
                                    'string' == typeof t ? (i.lng = t) : (i.lngs = t),
                                    (i.ns = e),
                                    (i.keyPrefix = n),
                                    i
                                );
                            },
                        },
                        {
                            key: 't',
                            value: function () {
                                var t;
                                return this.translator && (t = this.translator).translate.apply(t, arguments);
                            },
                        },
                        {
                            key: 'exists',
                            value: function () {
                                var t;
                                return this.translator && (t = this.translator).exists.apply(t, arguments);
                            },
                        },
                        {
                            key: 'setDefaultNamespace',
                            value: function (t) {
                                this.options.defaultNS = t;
                            },
                        },
                        {
                            key: 'hasLoadedNamespace',
                            value: function (t) {
                                var e = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (!this.isInitialized)
                                    return (
                                        this.logger.warn(
                                            'hasLoadedNamespace: i18next was not initialized',
                                            this.languages,
                                        ),
                                        !1
                                    );
                                if (!this.languages || !this.languages.length)
                                    return (
                                        this.logger.warn(
                                            'hasLoadedNamespace: i18n.languages were undefined or empty',
                                            this.languages,
                                        ),
                                        !1
                                    );
                                var r = this.resolvedLanguage || this.languages[0],
                                    i = !!this.options && this.options.fallbackLng,
                                    o = this.languages[this.languages.length - 1];
                                if ('cimode' === r.toLowerCase()) return !0;
                                var a = function (t, n) {
                                    var r = e.services.backendConnector.state[''.concat(t, '|').concat(n)];
                                    return -1 === r || 2 === r;
                                };
                                if (n.precheck) {
                                    var s = n.precheck(this, a);
                                    if (void 0 !== s) return s;
                                }
                                return !!(
                                    this.hasResourceBundle(r, t) ||
                                    !this.services.backendConnector.backend ||
                                    (this.options.resources && !this.options.partialBundledLanguages) ||
                                    (a(r, t) && (!i || a(o, t)))
                                );
                            },
                        },
                        {
                            key: 'loadNamespaces',
                            value: function (t, e) {
                                var n = this,
                                    r = E();
                                return this.options.ns
                                    ? ('string' == typeof t && (t = [t]),
                                      t.forEach(function (t) {
                                          0 > n.options.ns.indexOf(t) && n.options.ns.push(t);
                                      }),
                                      this.loadResources(function (t) {
                                          (r.resolve(), e && e(t));
                                      }),
                                      r)
                                    : (e && e(), Promise.resolve());
                            },
                        },
                        {
                            key: 'loadLanguages',
                            value: function (t, e) {
                                var n = E();
                                'string' == typeof t && (t = [t]);
                                var r = this.options.preload || [],
                                    i = t.filter(function (t) {
                                        return 0 > r.indexOf(t);
                                    });
                                return i.length
                                    ? ((this.options.preload = r.concat(i)),
                                      this.loadResources(function (t) {
                                          (n.resolve(), e && e(t));
                                      }),
                                      n)
                                    : (e && e(), Promise.resolve());
                            },
                        },
                        {
                            key: 'dir',
                            value: function (t) {
                                return (t ||
                                    (t =
                                        this.resolvedLanguage ||
                                        (this.languages && this.languages.length > 0
                                            ? this.languages[0]
                                            : this.language)),
                                t)
                                    ? [
                                          'ar',
                                          'shu',
                                          'sqr',
                                          'ssh',
                                          'xaa',
                                          'yhd',
                                          'yud',
                                          'aao',
                                          'abh',
                                          'abv',
                                          'acm',
                                          'acq',
                                          'acw',
                                          'acx',
                                          'acy',
                                          'adf',
                                          'ads',
                                          'aeb',
                                          'aec',
                                          'afb',
                                          'ajp',
                                          'apc',
                                          'apd',
                                          'arb',
                                          'arq',
                                          'ars',
                                          'ary',
                                          'arz',
                                          'auz',
                                          'avl',
                                          'ayh',
                                          'ayl',
                                          'ayn',
                                          'ayp',
                                          'bbz',
                                          'pga',
                                          'he',
                                          'iw',
                                          'ps',
                                          'pbt',
                                          'pbu',
                                          'pst',
                                          'prp',
                                          'prd',
                                          'ug',
                                          'ur',
                                          'ydd',
                                          'yds',
                                          'yih',
                                          'ji',
                                          'yi',
                                          'hbo',
                                          'men',
                                          'xmn',
                                          'fa',
                                          'jpr',
                                          'peo',
                                          'pes',
                                          'prs',
                                          'dv',
                                          'sam',
                                          'ckb',
                                      ].indexOf(
                                          (
                                              (this.services && this.services.languageUtils) ||
                                              new Y(tf())
                                          ).getLanguagePartFromCode(t),
                                      ) > -1 || t.toLowerCase().indexOf('-arab') > 1
                                        ? 'rtl'
                                        : 'ltr'
                                    : 'rtl';
                            },
                        },
                        {
                            key: 'cloneInstance',
                            value: function () {
                                var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tg,
                                    i = tp(tp(tp({}, this.options), e), {isClone: !0}),
                                    o = new r(i);
                                return (
                                    (void 0 !== e.debug || void 0 !== e.prefix) && (o.logger = o.logger.clone(e)),
                                    ['store', 'services', 'language'].forEach(function (e) {
                                        o[e] = t[e];
                                    }),
                                    (o.services = tp({}, this.services)),
                                    (o.services.utils = {hasLoadedNamespace: o.hasLoadedNamespace.bind(o)}),
                                    (o.translator = new K(o.services, o.options)),
                                    o.translator.on('*', function (t) {
                                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                                            n[r - 1] = arguments[r];
                                        o.emit.apply(o, [t].concat(n));
                                    }),
                                    o.init(i, n),
                                    (o.translator.options = o.options),
                                    (o.translator.backendConnector.services.utils = {
                                        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
                                    }),
                                    o
                                );
                            },
                        },
                        {
                            key: 'toJSON',
                            value: function () {
                                return {
                                    options: this.options,
                                    store: this.store,
                                    language: this.language,
                                    languages: this.languages,
                                    resolvedLanguage: this.resolvedLanguage,
                                };
                            },
                        },
                    ]),
                    r
                );
            })(L);
            w(ty, 'createInstance', function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 ? arguments[1] : void 0;
                return new ty(t, e);
            });
            var tv = ty.createInstance();
            function tb(t) {
                return (tb =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            tv.createInstance = ty.createInstance;
            var tm = [],
                tO = tm.forEach,
                tw = tm.slice;
            function tk(t) {
                return (
                    tO.call(tw.call(arguments, 1), function (e) {
                        if (e) for (var n in e) void 0 === t[n] && (t[n] = e[n]);
                    }),
                    t
                );
            }
            function tS() {
                return (
                    'function' == typeof XMLHttpRequest ||
                    ('undefined' == typeof XMLHttpRequest ? 'undefined' : tb(XMLHttpRequest)) === 'object'
                );
            }
            var tx = (0, s.c)(function (t, e) {
                    var n = 'undefined' != typeof self ? self : s.a,
                        r = (function () {
                            function t() {
                                ((this.fetch = !1), (this.DOMException = n.DOMException));
                            }
                            return ((t.prototype = n), new t());
                        })();
                    ((function (t) {
                        var e = {
                            searchParams: 'URLSearchParams' in r,
                            iterable: 'Symbol' in r && 'iterator' in Symbol,
                            blob:
                                'FileReader' in r &&
                                'Blob' in r &&
                                (function () {
                                    try {
                                        return (new Blob(), !0);
                                    } catch (t) {
                                        return !1;
                                    }
                                })(),
                            formData: 'FormData' in r,
                            arrayBuffer: 'ArrayBuffer' in r,
                        };
                        if (e.arrayBuffer)
                            var n = [
                                    '[object Int8Array]',
                                    '[object Uint8Array]',
                                    '[object Uint8ClampedArray]',
                                    '[object Int16Array]',
                                    '[object Uint16Array]',
                                    '[object Int32Array]',
                                    '[object Uint32Array]',
                                    '[object Float32Array]',
                                    '[object Float64Array]',
                                ],
                                i =
                                    ArrayBuffer.isView ||
                                    function (t) {
                                        return t && n.indexOf(Object.prototype.toString.call(t)) > -1;
                                    };
                        function o(t) {
                            if (('string' != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)))
                                throw TypeError('Invalid character in header field name');
                            return t.toLowerCase();
                        }
                        function a(t) {
                            return ('string' != typeof t && (t = String(t)), t);
                        }
                        function s(t) {
                            var n = {
                                next: function () {
                                    var e = t.shift();
                                    return {done: void 0 === e, value: e};
                                },
                            };
                            return (
                                e.iterable &&
                                    (n[Symbol.iterator] = function () {
                                        return n;
                                    }),
                                n
                            );
                        }
                        function u(t) {
                            ((this.map = {}),
                                t instanceof u
                                    ? t.forEach(function (t, e) {
                                          this.append(e, t);
                                      }, this)
                                    : Array.isArray(t)
                                      ? t.forEach(function (t) {
                                            this.append(t[0], t[1]);
                                        }, this)
                                      : t &&
                                        Object.getOwnPropertyNames(t).forEach(function (e) {
                                            this.append(e, t[e]);
                                        }, this));
                        }
                        function c(t) {
                            if (t.bodyUsed) return Promise.reject(TypeError('Already read'));
                            t.bodyUsed = !0;
                        }
                        function l(t) {
                            return new Promise(function (e, n) {
                                ((t.onload = function () {
                                    e(t.result);
                                }),
                                    (t.onerror = function () {
                                        n(t.error);
                                    }));
                            });
                        }
                        function f(t) {
                            var e = new FileReader(),
                                n = l(e);
                            return (e.readAsArrayBuffer(t), n);
                        }
                        function h(t) {
                            if (t.slice) return t.slice(0);
                            var e = new Uint8Array(t.byteLength);
                            return (e.set(new Uint8Array(t)), e.buffer);
                        }
                        function d() {
                            return (
                                (this.bodyUsed = !1),
                                (this._initBody = function (t) {
                                    if (((this._bodyInit = t), t)) {
                                        if ('string' == typeof t) this._bodyText = t;
                                        else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                                        else if (e.formData && FormData.prototype.isPrototypeOf(t))
                                            this._bodyFormData = t;
                                        else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
                                            this._bodyText = t.toString();
                                        else {
                                            var n;
                                            e.arrayBuffer && e.blob && (n = t) && DataView.prototype.isPrototypeOf(n)
                                                ? ((this._bodyArrayBuffer = h(t.buffer)),
                                                  (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                                                : e.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || i(t))
                                                  ? (this._bodyArrayBuffer = h(t))
                                                  : (this._bodyText = t = Object.prototype.toString.call(t));
                                        }
                                    } else this._bodyText = '';
                                    !this.headers.get('content-type') &&
                                        ('string' == typeof t
                                            ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                                            : this._bodyBlob && this._bodyBlob.type
                                              ? this.headers.set('content-type', this._bodyBlob.type)
                                              : e.searchParams &&
                                                URLSearchParams.prototype.isPrototypeOf(t) &&
                                                this.headers.set(
                                                    'content-type',
                                                    'application/x-www-form-urlencoded;charset=UTF-8',
                                                ));
                                }),
                                e.blob &&
                                    ((this.blob = function () {
                                        var t = c(this);
                                        if (t) return t;
                                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                                        if (this._bodyArrayBuffer)
                                            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                                        throw Error('could not read FormData body as blob');
                                    }),
                                    (this.arrayBuffer = function () {
                                        return this._bodyArrayBuffer
                                            ? c(this) || Promise.resolve(this._bodyArrayBuffer)
                                            : this.blob().then(f);
                                    })),
                                (this.text = function () {
                                    var t,
                                        e,
                                        n,
                                        r = c(this);
                                    if (r) return r;
                                    if (this._bodyBlob)
                                        return (
                                            (t = this._bodyBlob),
                                            (n = l((e = new FileReader()))),
                                            e.readAsText(t),
                                            n
                                        );
                                    if (this._bodyArrayBuffer)
                                        return Promise.resolve(
                                            (function (t) {
                                                for (
                                                    var e = new Uint8Array(t), n = Array(e.length), r = 0;
                                                    r < e.length;
                                                    r++
                                                )
                                                    n[r] = String.fromCharCode(e[r]);
                                                return n.join('');
                                            })(this._bodyArrayBuffer),
                                        );
                                    if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                                    throw Error('could not read FormData body as text');
                                }),
                                e.formData &&
                                    (this.formData = function () {
                                        return this.text().then(y);
                                    }),
                                (this.json = function () {
                                    return this.text().then(JSON.parse);
                                }),
                                this
                            );
                        }
                        ((u.prototype.append = function (t, e) {
                            ((t = o(t)), (e = a(e)));
                            var n = this.map[t];
                            this.map[t] = n ? n + ', ' + e : e;
                        }),
                            (u.prototype.delete = function (t) {
                                delete this.map[o(t)];
                            }),
                            (u.prototype.get = function (t) {
                                return ((t = o(t)), this.has(t) ? this.map[t] : null);
                            }),
                            (u.prototype.has = function (t) {
                                return this.map.hasOwnProperty(o(t));
                            }),
                            (u.prototype.set = function (t, e) {
                                this.map[o(t)] = a(e);
                            }),
                            (u.prototype.forEach = function (t, e) {
                                for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
                            }),
                            (u.prototype.keys = function () {
                                var t = [];
                                return (
                                    this.forEach(function (e, n) {
                                        t.push(n);
                                    }),
                                    s(t)
                                );
                            }),
                            (u.prototype.values = function () {
                                var t = [];
                                return (
                                    this.forEach(function (e) {
                                        t.push(e);
                                    }),
                                    s(t)
                                );
                            }),
                            (u.prototype.entries = function () {
                                var t = [];
                                return (
                                    this.forEach(function (e, n) {
                                        t.push([n, e]);
                                    }),
                                    s(t)
                                );
                            }),
                            e.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries));
                        var p = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
                        function g(t, e) {
                            var n,
                                r,
                                i = (e = e || {}).body;
                            if (t instanceof g) {
                                if (t.bodyUsed) throw TypeError('Already read');
                                ((this.url = t.url),
                                    (this.credentials = t.credentials),
                                    e.headers || (this.headers = new u(t.headers)),
                                    (this.method = t.method),
                                    (this.mode = t.mode),
                                    (this.signal = t.signal),
                                    i || null == t._bodyInit || ((i = t._bodyInit), (t.bodyUsed = !0)));
                            } else this.url = String(t);
                            if (
                                ((this.credentials = e.credentials || this.credentials || 'same-origin'),
                                (e.headers || !this.headers) && (this.headers = new u(e.headers)),
                                (this.method =
                                    ((r = (n = e.method || this.method || 'GET').toUpperCase()),
                                    p.indexOf(r) > -1 ? r : n)),
                                (this.mode = e.mode || this.mode || null),
                                (this.signal = e.signal || this.signal),
                                (this.referrer = null),
                                ('GET' === this.method || 'HEAD' === this.method) && i)
                            )
                                throw TypeError('Body not allowed for GET or HEAD requests');
                            this._initBody(i);
                        }
                        function y(t) {
                            var e = new FormData();
                            return (
                                t
                                    .trim()
                                    .split('&')
                                    .forEach(function (t) {
                                        if (t) {
                                            var n = t.split('='),
                                                r = n.shift().replace(/\+/g, ' '),
                                                i = n.join('=').replace(/\+/g, ' ');
                                            e.append(decodeURIComponent(r), decodeURIComponent(i));
                                        }
                                    }),
                                e
                            );
                        }
                        function v(t, e) {
                            (e || (e = {}),
                                (this.type = 'default'),
                                (this.status = void 0 === e.status ? 200 : e.status),
                                (this.ok = this.status >= 200 && this.status < 300),
                                (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
                                (this.headers = new u(e.headers)),
                                (this.url = e.url || ''),
                                this._initBody(t));
                        }
                        ((g.prototype.clone = function () {
                            return new g(this, {body: this._bodyInit});
                        }),
                            d.call(g.prototype),
                            d.call(v.prototype),
                            (v.prototype.clone = function () {
                                return new v(this._bodyInit, {
                                    status: this.status,
                                    statusText: this.statusText,
                                    headers: new u(this.headers),
                                    url: this.url,
                                });
                            }),
                            (v.error = function () {
                                var t = new v(null, {status: 0, statusText: ''});
                                return ((t.type = 'error'), t);
                            }));
                        var b = [301, 302, 303, 307, 308];
                        ((v.redirect = function (t, e) {
                            if (-1 === b.indexOf(e)) throw RangeError('Invalid status code');
                            return new v(null, {status: e, headers: {location: t}});
                        }),
                            (t.DOMException = r.DOMException));
                        try {
                            new t.DOMException();
                        } catch (e) {
                            ((t.DOMException = function (t, e) {
                                ((this.message = t), (this.name = e));
                                var n = Error(t);
                                this.stack = n.stack;
                            }),
                                (t.DOMException.prototype = Object.create(Error.prototype)),
                                (t.DOMException.prototype.constructor = t.DOMException));
                        }
                        function m(n, r) {
                            return new Promise(function (i, o) {
                                var a = new g(n, r);
                                if (a.signal && a.signal.aborted) return o(new t.DOMException('Aborted', 'AbortError'));
                                var s = new XMLHttpRequest();
                                function c() {
                                    s.abort();
                                }
                                ((s.onload = function () {
                                    var t,
                                        e,
                                        n = {
                                            status: s.status,
                                            statusText: s.statusText,
                                            headers:
                                                ((t = s.getAllResponseHeaders() || ''),
                                                (e = new u()),
                                                t
                                                    .replace(/\r?\n[\t ]+/g, ' ')
                                                    .split(/\r?\n/)
                                                    .forEach(function (t) {
                                                        var n = t.split(':'),
                                                            r = n.shift().trim();
                                                        if (r) {
                                                            var i = n.join(':').trim();
                                                            e.append(r, i);
                                                        }
                                                    }),
                                                e),
                                        };
                                    n.url = 'responseURL' in s ? s.responseURL : n.headers.get('X-Request-URL');
                                    var r = 'response' in s ? s.response : s.responseText;
                                    i(new v(r, n));
                                }),
                                    (s.onerror = function () {
                                        o(TypeError('Network request failed'));
                                    }),
                                    (s.ontimeout = function () {
                                        o(TypeError('Network request failed'));
                                    }),
                                    (s.onabort = function () {
                                        o(new t.DOMException('Aborted', 'AbortError'));
                                    }),
                                    s.open(a.method, a.url, !0),
                                    'include' === a.credentials
                                        ? (s.withCredentials = !0)
                                        : 'omit' === a.credentials && (s.withCredentials = !1),
                                    'responseType' in s && e.blob && (s.responseType = 'blob'),
                                    a.headers.forEach(function (t, e) {
                                        s.setRequestHeader(e, t);
                                    }),
                                    a.signal &&
                                        (a.signal.addEventListener('abort', c),
                                        (s.onreadystatechange = function () {
                                            4 === s.readyState && a.signal.removeEventListener('abort', c);
                                        })),
                                    s.send(void 0 === a._bodyInit ? null : a._bodyInit));
                            });
                        }
                        ((m.polyfill = !0),
                            r.fetch || ((r.fetch = m), (r.Headers = u), (r.Request = g), (r.Response = v)),
                            (t.Headers = u),
                            (t.Request = g),
                            (t.Response = v),
                            (t.fetch = m),
                            Object.defineProperty(t, '__esModule', {value: !0}));
                    })({}),
                        (r.fetch.ponyfill = !0),
                        delete r.fetch.polyfill,
                        ((e = r.fetch).default = r.fetch),
                        (e.fetch = r.fetch),
                        (e.Headers = r.Headers),
                        (e.Request = r.Request),
                        (e.Response = r.Response),
                        (t.exports = e));
                }),
                tj = (0, s.c)(function (t, e) {
                    var n;
                    if (
                        ('function' == typeof fetch &&
                            (n =
                                void 0 !== s.a && s.a.fetch
                                    ? s.a.fetch
                                    : 'undefined' != typeof window && window.fetch
                                      ? window.fetch
                                      : fetch),
                        void 0 !== s.b && ('undefined' == typeof window || void 0 === window.document))
                    ) {
                        var r = n || tx;
                        (r.default && (r = r.default), (e.default = r), (t.exports = e.default));
                    }
                });
            let tP = Object.freeze(Object.assign(Object.create(null), tj, {default: tj}));
            function tL(t) {
                return (tL =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            ('function' == typeof fetch &&
                (r =
                    void 0 !== n.g && n.g.fetch
                        ? n.g.fetch
                        : 'undefined' != typeof window && window.fetch
                          ? window.fetch
                          : fetch),
                tS() &&
                    (void 0 !== n.g && n.g.XMLHttpRequest
                        ? (i = n.g.XMLHttpRequest)
                        : 'undefined' != typeof window && window.XMLHttpRequest && (i = window.XMLHttpRequest)),
                'function' == typeof ActiveXObject &&
                    (void 0 !== n.g && n.g.ActiveXObject
                        ? (o = n.g.ActiveXObject)
                        : 'undefined' != typeof window && window.ActiveXObject && (o = window.ActiveXObject)),
                r || !tP || i || o || (r = tj || tP),
                'function' != typeof r && (r = void 0));
            var tE = function (t, e) {
                    if (e && 'object' === tL(e)) {
                        var n = '';
                        for (var r in e) n += '&' + encodeURIComponent(r) + '=' + encodeURIComponent(e[r]);
                        if (!n) return t;
                        t = t + (-1 !== t.indexOf('?') ? '&' : '?') + n.slice(1);
                    }
                    return t;
                },
                tR = function (t, e, n) {
                    r(t, e)
                        .then(function (t) {
                            if (!t.ok) return n(t.statusText || 'Error', {status: t.status});
                            t.text()
                                .then(function (e) {
                                    n(null, {status: t.status, data: e});
                                })
                                .catch(n);
                        })
                        .catch(n);
                },
                tC = !1,
                tD = function (t, e, n, r) {
                    t.queryStringParams && (e = tE(e, t.queryStringParams));
                    var i = tk({}, 'function' == typeof t.customHeaders ? t.customHeaders() : t.customHeaders);
                    n && (i['Content-Type'] = 'application/json');
                    var o = 'function' == typeof t.requestOptions ? t.requestOptions(n) : t.requestOptions,
                        a = tk(
                            {method: n ? 'POST' : 'GET', body: n ? t.stringify(n) : void 0, headers: i},
                            tC ? {} : o,
                        );
                    try {
                        tR(e, a, r);
                    } catch (t) {
                        if (!o || 0 === Object.keys(o).length || !t.message || 0 > t.message.indexOf('not implemented'))
                            return r(t);
                        try {
                            (Object.keys(o).forEach(function (t) {
                                delete a[t];
                            }),
                                tR(e, a, r),
                                (tC = !0));
                        } catch (t) {
                            r(t);
                        }
                    }
                },
                tN = function (t, e, n, r) {
                    (n && 'object' === tL(n) && (n = tE('', n).slice(1)),
                        t.queryStringParams && (e = tE(e, t.queryStringParams)));
                    try {
                        ((a = i ? new i() : new o('MSXML2.XMLHTTP.3.0')).open(n ? 'POST' : 'GET', e, 1),
                            t.crossDomain || a.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
                            (a.withCredentials = !!t.withCredentials),
                            n && a.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                            a.overrideMimeType && a.overrideMimeType('application/json'));
                        var a,
                            s = t.customHeaders;
                        if ((s = 'function' == typeof s ? s() : s)) for (var u in s) a.setRequestHeader(u, s[u]);
                        ((a.onreadystatechange = function () {
                            a.readyState > 3 &&
                                r(a.status >= 400 ? a.statusText : null, {status: a.status, data: a.responseText});
                        }),
                            a.send(n));
                    } catch (t) {
                        console && console.log(t);
                    }
                },
                tA = function (t, e, n, i) {
                    return ('function' == typeof n && ((i = n), (n = void 0)),
                    (i = i || function () {}),
                    r && 0 !== e.indexOf('file:'))
                        ? tD(t, e, n, i)
                        : tS() || 'function' == typeof ActiveXObject
                          ? tN(t, e, n, i)
                          : void i(Error('No fetch and no xhr implementation found!'));
                };
            function tT(t) {
                return (tT =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            function tI(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    ((r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(t, t$(r.key), r));
                }
            }
            function t$(t) {
                var e = (function (t, e) {
                    if ('object' !== tT(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || 'default');
                        if ('object' !== tT(r)) return r;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === e ? String : Number)(t);
                })(t, 'string');
                return 'symbol' === tT(e) ? e : String(e);
            }
            var tM = (function () {
                var t, e;
                function n(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    (!(function (t, e) {
                        if (!(t instanceof e)) throw TypeError('Cannot call a class as a function');
                    })(this, n),
                        (this.services = t),
                        (this.options = e),
                        (this.allOptions = r),
                        (this.type = 'backend'),
                        this.init(t, e, r));
                }
                return (
                    (t = [
                        {
                            key: 'init',
                            value: function (t) {
                                var e = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                ((this.services = t),
                                    (this.options = tk(n, this.options || {}, {
                                        loadPath: '/locales/{{lng}}/{{ns}}.json',
                                        addPath: '/locales/add/{{lng}}/{{ns}}',
                                        allowMultiLoading: !1,
                                        parse: function (t) {
                                            return JSON.parse(t);
                                        },
                                        stringify: JSON.stringify,
                                        parsePayload: function (t, e, n) {
                                            var r, i, o;
                                            return (
                                                (r = {}),
                                                (i = e),
                                                (o = n || ''),
                                                (i = t$(i)) in r
                                                    ? Object.defineProperty(r, i, {
                                                          value: o,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (r[i] = o),
                                                r
                                            );
                                        },
                                        parseLoadPayload: function (t, e) {},
                                        request: tA,
                                        reloadInterval: 'undefined' == typeof window && 36e5,
                                        customHeaders: {},
                                        queryStringParams: {},
                                        crossDomain: !1,
                                        withCredentials: !1,
                                        overrideMimeType: !1,
                                        requestOptions: {mode: 'cors', credentials: 'same-origin', cache: 'default'},
                                    })),
                                    (this.allOptions = r),
                                    this.services &&
                                        this.options.reloadInterval &&
                                        setInterval(function () {
                                            return e.reload();
                                        }, this.options.reloadInterval));
                            },
                        },
                        {
                            key: 'readMulti',
                            value: function (t, e, n) {
                                this._readAny(t, t, e, e, n);
                            },
                        },
                        {
                            key: 'read',
                            value: function (t, e, n) {
                                this._readAny([t], t, [e], e, n);
                            },
                        },
                        {
                            key: '_readAny',
                            value: function (t, e, n, r, i) {
                                var o,
                                    a,
                                    s = this,
                                    u = this.options.loadPath;
                                ('function' == typeof this.options.loadPath && (u = this.options.loadPath(t, n)),
                                    (u = (a = o = u) && 'function' == typeof a.then ? o : Promise.resolve(o)).then(
                                        function (o) {
                                            if (!o) return i(null, {});
                                            var a = s.services.interpolator.interpolate(o, {
                                                lng: t.join('+'),
                                                ns: n.join('+'),
                                            });
                                            s.loadUrl(a, i, e, r);
                                        },
                                    ));
                            },
                        },
                        {
                            key: 'loadUrl',
                            value: function (t, e, n, r) {
                                var i = this,
                                    o = 'string' == typeof n ? [n] : n,
                                    a = 'string' == typeof r ? [r] : r,
                                    s = this.options.parseLoadPayload(o, a);
                                this.options.request(this.options, t, s, function (o, a) {
                                    var s, u;
                                    if (a && ((a.status >= 500 && a.status < 600) || !a.status))
                                        return e('failed loading ' + t + '; status code: ' + a.status, !0);
                                    if (a && a.status >= 400 && a.status < 500)
                                        return e('failed loading ' + t + '; status code: ' + a.status, !1);
                                    if (!a && o && o.message && o.message.indexOf('Failed to fetch') > -1)
                                        return e('failed loading ' + t + ': ' + o.message, !0);
                                    if (o) return e(o, !1);
                                    try {
                                        s = 'string' == typeof a.data ? i.options.parse(a.data, n, r) : a.data;
                                    } catch (e) {
                                        u = 'failed parsing ' + t + ' to json';
                                    }
                                    if (u) return e(u, !1);
                                    e(null, s);
                                });
                            },
                        },
                        {
                            key: 'create',
                            value: function (t, e, n, r, i) {
                                var o = this;
                                if (this.options.addPath) {
                                    'string' == typeof t && (t = [t]);
                                    var a = this.options.parsePayload(e, n, r),
                                        s = 0,
                                        u = [],
                                        c = [];
                                    t.forEach(function (n) {
                                        var r = o.options.addPath;
                                        'function' == typeof o.options.addPath && (r = o.options.addPath(n, e));
                                        var l = o.services.interpolator.interpolate(r, {lng: n, ns: e});
                                        o.options.request(o.options, l, a, function (e, n) {
                                            ((s += 1),
                                                u.push(e),
                                                c.push(n),
                                                s === t.length && 'function' == typeof i && i(u, c));
                                        });
                                    });
                                }
                            },
                        },
                        {
                            key: 'reload',
                            value: function () {
                                var t = this,
                                    e = this.services,
                                    n = e.backendConnector,
                                    r = e.languageUtils,
                                    i = e.logger,
                                    o = n.language;
                                if (!o || 'cimode' !== o.toLowerCase()) {
                                    var a = [],
                                        s = function (t) {
                                            r.toResolveHierarchy(t).forEach(function (t) {
                                                0 > a.indexOf(t) && a.push(t);
                                            });
                                        };
                                    (s(o),
                                        this.allOptions.preload &&
                                            this.allOptions.preload.forEach(function (t) {
                                                return s(t);
                                            }),
                                        a.forEach(function (e) {
                                            t.allOptions.ns.forEach(function (t) {
                                                n.read(e, t, 'read', null, null, function (r, o) {
                                                    (r &&
                                                        i.warn(
                                                            'loading namespace '
                                                                .concat(t, ' for language ')
                                                                .concat(e, ' failed'),
                                                            r,
                                                        ),
                                                        !r &&
                                                            o &&
                                                            i.log(
                                                                'loaded namespace '
                                                                    .concat(t, ' for language ')
                                                                    .concat(e),
                                                                o,
                                                            ),
                                                        n.loaded(''.concat(e, '|').concat(t), r, o));
                                                });
                                            });
                                        }));
                                }
                            },
                        },
                    ]),
                    tI(n.prototype, t),
                    e && tI(n, e),
                    Object.defineProperty(n, 'prototype', {writable: !1}),
                    n
                );
            })();
            function tF() {
                return {version: '2.41.0', headlessVersion: l.d};
            }
            tM.type = 'backend';
            let t_ = {
                    af: () =>
                        n
                            .e(13431)
                            .then(n.bind(n, 13431))
                            .then(function (t) {
                                return t.a;
                            }),
                    am: () =>
                        n
                            .e(44624)
                            .then(n.bind(n, 44624))
                            .then(function (t) {
                                return t.a;
                            }),
                    'ar-DZ': () =>
                        n
                            .e(86049)
                            .then(n.bind(n, 86049))
                            .then(function (t) {
                                return t.a;
                            }),
                    'ar-IQ': () =>
                        n
                            .e(79597)
                            .then(n.bind(n, 79597))
                            .then(function (t) {
                                return t.a;
                            }),
                    'ar-KW': () =>
                        n
                            .e(1291)
                            .then(n.bind(n, 1291))
                            .then(function (t) {
                                return t.a;
                            }),
                    'ar-LY': () =>
                        n
                            .e(57198)
                            .then(n.bind(n, 57198))
                            .then(function (t) {
                                return t.a;
                            }),
                    'ar-MA': () =>
                        n
                            .e(63424)
                            .then(n.bind(n, 63424))
                            .then(function (t) {
                                return t.a;
                            }),
                    'ar-SA': () =>
                        n
                            .e(93172)
                            .then(n.bind(n, 93172))
                            .then(function (t) {
                                return t.a;
                            }),
                    'ar-TN': () =>
                        n
                            .e(41125)
                            .then(n.bind(n, 41125))
                            .then(function (t) {
                                return t.a;
                            }),
                    ar: () =>
                        n
                            .e(13214)
                            .then(n.bind(n, 13214))
                            .then(function (t) {
                                return t.a;
                            }),
                    az: () =>
                        n
                            .e(74482)
                            .then(n.bind(n, 74482))
                            .then(function (t) {
                                return t.a;
                            }),
                    be: () =>
                        n
                            .e(18125)
                            .then(n.bind(n, 18125))
                            .then(function (t) {
                                return t.b;
                            }),
                    bg: () =>
                        n
                            .e(64995)
                            .then(n.bind(n, 64995))
                            .then(function (t) {
                                return t.b;
                            }),
                    bi: () =>
                        n
                            .e(95504)
                            .then(n.bind(n, 95504))
                            .then(function (t) {
                                return t.b;
                            }),
                    bm: () =>
                        n
                            .e(60797)
                            .then(n.bind(n, 60797))
                            .then(function (t) {
                                return t.b;
                            }),
                    'bn-BD': () =>
                        n
                            .e(80125)
                            .then(n.bind(n, 80125))
                            .then(function (t) {
                                return t.b;
                            }),
                    bn: () =>
                        n
                            .e(37460)
                            .then(n.bind(n, 37460))
                            .then(function (t) {
                                return t.b;
                            }),
                    bo: () =>
                        n
                            .e(79455)
                            .then(n.bind(n, 79455))
                            .then(function (t) {
                                return t.b;
                            }),
                    br: () =>
                        n
                            .e(2286)
                            .then(n.bind(n, 2286))
                            .then(function (t) {
                                return t.b;
                            }),
                    bs: () =>
                        n
                            .e(26496)
                            .then(n.bind(n, 26496))
                            .then(function (t) {
                                return t.b;
                            }),
                    ca: () =>
                        n
                            .e(76140)
                            .then(n.bind(n, 76140))
                            .then(function (t) {
                                return t.c;
                            }),
                    cs: () =>
                        n
                            .e(23363)
                            .then(n.bind(n, 23363))
                            .then(function (t) {
                                return t.c;
                            }),
                    cv: () =>
                        n
                            .e(59846)
                            .then(n.bind(n, 59846))
                            .then(function (t) {
                                return t.c;
                            }),
                    cy: () =>
                        n
                            .e(20063)
                            .then(n.bind(n, 20063))
                            .then(function (t) {
                                return t.c;
                            }),
                    da: () =>
                        n
                            .e(71308)
                            .then(n.bind(n, 71308))
                            .then(function (t) {
                                return t.d;
                            }),
                    'de-AT': () =>
                        n
                            .e(68080)
                            .then(n.bind(n, 68080))
                            .then(function (t) {
                                return t.d;
                            }),
                    'de-CH': () =>
                        n
                            .e(29890)
                            .then(n.bind(n, 29890))
                            .then(function (t) {
                                return t.d;
                            }),
                    de: () =>
                        n
                            .e(32328)
                            .then(n.bind(n, 32328))
                            .then(function (t) {
                                return t.d;
                            }),
                    dv: () =>
                        n
                            .e(22546)
                            .then(n.bind(n, 22546))
                            .then(function (t) {
                                return t.d;
                            }),
                    el: () =>
                        n
                            .e(51097)
                            .then(n.bind(n, 51097))
                            .then(function (t) {
                                return t.e;
                            }),
                    'en-AU': () =>
                        n
                            .e(12191)
                            .then(n.bind(n, 29232))
                            .then(function (t) {
                                return t.e;
                            }),
                    'en-CA': () =>
                        n
                            .e(72871)
                            .then(n.bind(n, 72871))
                            .then(function (t) {
                                return t.e;
                            }),
                    'en-GB': () =>
                        n
                            .e(32436)
                            .then(n.bind(n, 32436))
                            .then(function (t) {
                                return t.e;
                            }),
                    'en-IE': () =>
                        n
                            .e(44130)
                            .then(n.bind(n, 44130))
                            .then(function (t) {
                                return t.e;
                            }),
                    'en-IL': () =>
                        n
                            .e(43715)
                            .then(n.bind(n, 43715))
                            .then(function (t) {
                                return t.e;
                            }),
                    'en-IN': () =>
                        n
                            .e(18450)
                            .then(n.bind(n, 18450))
                            .then(function (t) {
                                return t.e;
                            }),
                    'en-NZ': () =>
                        n
                            .e(33426)
                            .then(n.bind(n, 33426))
                            .then(function (t) {
                                return t.e;
                            }),
                    'en-SG': () =>
                        n
                            .e(57060)
                            .then(n.bind(n, 57060))
                            .then(function (t) {
                                return t.e;
                            }),
                    'en-TT': () =>
                        n
                            .e(77938)
                            .then(n.bind(n, 77938))
                            .then(function (t) {
                                return t.e;
                            }),
                    en: () =>
                        n
                            .e(82062)
                            .then(n.bind(n, 82062))
                            .then(function (t) {
                                return t.e;
                            }),
                    eo: () =>
                        n
                            .e(50681)
                            .then(n.bind(n, 50681))
                            .then(function (t) {
                                return t.e;
                            }),
                    'es-DO': () =>
                        n
                            .e(73512)
                            .then(n.bind(n, 73512))
                            .then(function (t) {
                                return t.e;
                            }),
                    es: () =>
                        n
                            .e(82657)
                            .then(n.bind(n, 82657))
                            .then(function (t) {
                                return t.e;
                            }),
                    et: () =>
                        n
                            .e(36555)
                            .then(n.bind(n, 36555))
                            .then(function (t) {
                                return t.e;
                            }),
                    eu: () =>
                        n
                            .e(79494)
                            .then(n.bind(n, 79494))
                            .then(function (t) {
                                return t.e;
                            }),
                    fa: () =>
                        n
                            .e(44335)
                            .then(n.bind(n, 44335))
                            .then(function (t) {
                                return t.f;
                            }),
                    fi: () =>
                        n
                            .e(6474)
                            .then(n.bind(n, 6474))
                            .then(function (t) {
                                return t.f;
                            }),
                    fo: () =>
                        n
                            .e(44951)
                            .then(n.bind(n, 44951))
                            .then(function (t) {
                                return t.f;
                            }),
                    'fr-CA': () =>
                        n
                            .e(76099)
                            .then(n.bind(n, 76099))
                            .then(function (t) {
                                return t.f;
                            }),
                    'fr-CH': () =>
                        n
                            .e(4934)
                            .then(n.bind(n, 4934))
                            .then(function (t) {
                                return t.f;
                            }),
                    fr: () =>
                        n
                            .e(47888)
                            .then(n.bind(n, 47888))
                            .then(function (t) {
                                return t.f;
                            }),
                    fy: () =>
                        n
                            .e(78555)
                            .then(n.bind(n, 78555))
                            .then(function (t) {
                                return t.f;
                            }),
                    ga: () =>
                        n
                            .e(63949)
                            .then(n.bind(n, 63949))
                            .then(function (t) {
                                return t.g;
                            }),
                    gd: () =>
                        n
                            .e(59397)
                            .then(n.bind(n, 59397))
                            .then(function (t) {
                                return t.g;
                            }),
                    gl: () =>
                        n
                            .e(36922)
                            .then(n.bind(n, 36922))
                            .then(function (t) {
                                return t.g;
                            }),
                    'gom-LATN': () =>
                        n
                            .e(97623)
                            .then(n.bind(n, 97623))
                            .then(function (t) {
                                return t.g;
                            }),
                    gu: () =>
                        n
                            .e(48860)
                            .then(n.bind(n, 48860))
                            .then(function (t) {
                                return t.g;
                            }),
                    he: () =>
                        n
                            .e(26281)
                            .then(n.bind(n, 26281))
                            .then(function (t) {
                                return t.h;
                            }),
                    hi: () =>
                        n
                            .e(21973)
                            .then(n.bind(n, 21973))
                            .then(function (t) {
                                return t.h;
                            }),
                    hr: () =>
                        n
                            .e(46102)
                            .then(n.bind(n, 46102))
                            .then(function (t) {
                                return t.h;
                            }),
                    ht: () =>
                        n
                            .e(39385)
                            .then(n.bind(n, 39385))
                            .then(function (t) {
                                return t.h;
                            }),
                    hu: () =>
                        n
                            .e(41823)
                            .then(n.bind(n, 41823))
                            .then(function (t) {
                                return t.h;
                            }),
                    'hy-AM': () =>
                        n
                            .e(85379)
                            .then(n.bind(n, 85379))
                            .then(function (t) {
                                return t.h;
                            }),
                    id: () =>
                        n
                            .e(9169)
                            .then(n.bind(n, 9169))
                            .then(function (t) {
                                return t.i;
                            }),
                    is: () =>
                        n
                            .e(43961)
                            .then(n.bind(n, 43961))
                            .then(function (t) {
                                return t.i;
                            }),
                    'it-CH': () =>
                        n
                            .e(87442)
                            .then(n.bind(n, 87442))
                            .then(function (t) {
                                return t.i;
                            }),
                    it: () =>
                        n
                            .e(84320)
                            .then(n.bind(n, 84320))
                            .then(function (t) {
                                return t.i;
                            }),
                    ja: () =>
                        n
                            .e(34412)
                            .then(n.bind(n, 34412))
                            .then(function (t) {
                                return t.j;
                            }),
                    jv: () =>
                        n
                            .e(21544)
                            .then(n.bind(n, 21544))
                            .then(function (t) {
                                return t.j;
                            }),
                    ka: () =>
                        n
                            .e(48855)
                            .then(n.bind(n, 48855))
                            .then(function (t) {
                                return t.k;
                            }),
                    kk: () =>
                        n
                            .e(64962)
                            .then(n.bind(n, 64962))
                            .then(function (t) {
                                return t.k;
                            }),
                    km: () =>
                        n
                            .e(81312)
                            .then(n.bind(n, 81312))
                            .then(function (t) {
                                return t.k;
                            }),
                    kn: () =>
                        n
                            .e(15295)
                            .then(n.bind(n, 15295))
                            .then(function (t) {
                                return t.k;
                            }),
                    ko: () =>
                        n
                            .e(10256)
                            .then(n.bind(n, 10256))
                            .then(function (t) {
                                return t.k;
                            }),
                    ku: () =>
                        n
                            .e(2308)
                            .then(n.bind(n, 2308))
                            .then(function (t) {
                                return t.k;
                            }),
                    ky: () =>
                        n
                            .e(93100)
                            .then(n.bind(n, 93100))
                            .then(function (t) {
                                return t.k;
                            }),
                    lb: () =>
                        n
                            .e(48705)
                            .then(n.bind(n, 48705))
                            .then(function (t) {
                                return t.l;
                            }),
                    lo: () =>
                        n
                            .e(23759)
                            .then(n.bind(n, 23759))
                            .then(function (t) {
                                return t.l;
                            }),
                    lt: () =>
                        n
                            .e(87823)
                            .then(n.bind(n, 87823))
                            .then(function (t) {
                                return t.l;
                            }),
                    lv: () =>
                        n
                            .e(18766)
                            .then(n.bind(n, 18766))
                            .then(function (t) {
                                return t.l;
                            }),
                    me: () =>
                        n
                            .e(37025)
                            .then(n.bind(n, 37025))
                            .then(function (t) {
                                return t.m;
                            }),
                    mi: () =>
                        n
                            .e(10082)
                            .then(n.bind(n, 10082))
                            .then(function (t) {
                                return t.m;
                            }),
                    mk: () =>
                        n
                            .e(94249)
                            .then(n.bind(n, 94249))
                            .then(function (t) {
                                return t.m;
                            }),
                    ml: () =>
                        n
                            .e(59213)
                            .then(n.bind(n, 59213))
                            .then(function (t) {
                                return t.m;
                            }),
                    mn: () =>
                        n
                            .e(39215)
                            .then(n.bind(n, 39215))
                            .then(function (t) {
                                return t.m;
                            }),
                    mr: () =>
                        n
                            .e(85689)
                            .then(n.bind(n, 85689))
                            .then(function (t) {
                                return t.m;
                            }),
                    'ms-MY': () =>
                        n
                            .e(68749)
                            .then(n.bind(n, 68749))
                            .then(function (t) {
                                return t.m;
                            }),
                    ms: () =>
                        n
                            .e(32922)
                            .then(n.bind(n, 32922))
                            .then(function (t) {
                                return t.m;
                            }),
                    mt: () =>
                        n
                            .e(20168)
                            .then(n.bind(n, 20168))
                            .then(function (t) {
                                return t.m;
                            }),
                    my: () =>
                        n
                            .e(257)
                            .then(n.bind(n, 257))
                            .then(function (t) {
                                return t.m;
                            }),
                    nb: () =>
                        n
                            .e(54404)
                            .then(n.bind(n, 54404))
                            .then(function (t) {
                                return t.n;
                            }),
                    ne: () =>
                        n
                            .e(50246)
                            .then(n.bind(n, 50246))
                            .then(function (t) {
                                return t.n;
                            }),
                    'nl-BE': () =>
                        n
                            .e(11758)
                            .then(n.bind(n, 11758))
                            .then(function (t) {
                                return t.n;
                            }),
                    nl: () =>
                        n
                            .e(96141)
                            .then(n.bind(n, 96141))
                            .then(function (t) {
                                return t.n;
                            }),
                    nn: () =>
                        n
                            .e(14879)
                            .then(n.bind(n, 14879))
                            .then(function (t) {
                                return t.n;
                            }),
                    'oc-LNC': () =>
                        n
                            .e(73820)
                            .then(n.bind(n, 73820))
                            .then(function (t) {
                                return t.o;
                            }),
                    'pa-IN': () =>
                        n
                            .e(15382)
                            .then(n.bind(n, 15382))
                            .then(function (t) {
                                return t.p;
                            }),
                    pl: () =>
                        n
                            .e(4721)
                            .then(n.bind(n, 4721))
                            .then(function (t) {
                                return t.p;
                            }),
                    'pt-BR': () =>
                        n
                            .e(52846)
                            .then(n.bind(n, 52846))
                            .then(function (t) {
                                return t.p;
                            }),
                    pt: () =>
                        n
                            .e(27054)
                            .then(n.bind(n, 27054))
                            .then(function (t) {
                                return t.p;
                            }),
                    rn: () =>
                        n
                            .e(33032)
                            .then(n.bind(n, 33032))
                            .then(function (t) {
                                return t.r;
                            }),
                    ro: () =>
                        n
                            .e(93691)
                            .then(n.bind(n, 93691))
                            .then(function (t) {
                                return t.r;
                            }),
                    ru: () =>
                        n
                            .e(49652)
                            .then(n.bind(n, 49652))
                            .then(function (t) {
                                return t.r;
                            }),
                    rw: () =>
                        n
                            .e(89307)
                            .then(n.bind(n, 89307))
                            .then(function (t) {
                                return t.r;
                            }),
                    sd: () =>
                        n
                            .e(58126)
                            .then(n.bind(n, 58126))
                            .then(function (t) {
                                return t.s;
                            }),
                    se: () =>
                        n
                            .e(57839)
                            .then(n.bind(n, 57839))
                            .then(function (t) {
                                return t.s;
                            }),
                    si: () =>
                        n
                            .e(85493)
                            .then(n.bind(n, 85493))
                            .then(function (t) {
                                return t.s;
                            }),
                    sk: () =>
                        n
                            .e(20204)
                            .then(n.bind(n, 20204))
                            .then(function (t) {
                                return t.s;
                            }),
                    sl: () =>
                        n
                            .e(60675)
                            .then(n.bind(n, 60675))
                            .then(function (t) {
                                return t.s;
                            }),
                    sq: () =>
                        n
                            .e(26093)
                            .then(n.bind(n, 26093))
                            .then(function (t) {
                                return t.s;
                            }),
                    'sr-CYRL': () =>
                        n
                            .e(15354)
                            .then(n.bind(n, 15354))
                            .then(function (t) {
                                return t.s;
                            }),
                    sr: () =>
                        n
                            .e(40855)
                            .then(n.bind(n, 40855))
                            .then(function (t) {
                                return t.s;
                            }),
                    ss: () =>
                        n
                            .e(31109)
                            .then(n.bind(n, 31109))
                            .then(function (t) {
                                return t.s;
                            }),
                    'sv-FI': () =>
                        n
                            .e(49077)
                            .then(n.bind(n, 49077))
                            .then(function (t) {
                                return t.s;
                            }),
                    sv: () =>
                        n
                            .e(23513)
                            .then(n.bind(n, 23513))
                            .then(function (t) {
                                return t.s;
                            }),
                    sw: () =>
                        n
                            .e(415)
                            .then(n.bind(n, 415))
                            .then(function (t) {
                                return t.s;
                            }),
                    ta: () =>
                        n
                            .e(27081)
                            .then(n.bind(n, 27081))
                            .then(function (t) {
                                return t.t;
                            }),
                    te: () =>
                        n
                            .e(3806)
                            .then(n.bind(n, 3806))
                            .then(function (t) {
                                return t.t;
                            }),
                    tet: () =>
                        n
                            .e(2123)
                            .then(n.bind(n, 2123))
                            .then(function (t) {
                                return t.t;
                            }),
                    tg: () =>
                        n
                            .e(55630)
                            .then(n.bind(n, 55630))
                            .then(function (t) {
                                return t.t;
                            }),
                    th: () =>
                        n
                            .e(10641)
                            .then(n.bind(n, 10641))
                            .then(function (t) {
                                return t.t;
                            }),
                    tk: () =>
                        n
                            .e(19355)
                            .then(n.bind(n, 19355))
                            .then(function (t) {
                                return t.t;
                            }),
                    'tl-PH': () =>
                        n
                            .e(69682)
                            .then(n.bind(n, 69682))
                            .then(function (t) {
                                return t.t;
                            }),
                    tlh: () =>
                        n
                            .e(9740)
                            .then(n.bind(n, 9740))
                            .then(function (t) {
                                return t.t;
                            }),
                    tr: () =>
                        n
                            .e(25206)
                            .then(n.bind(n, 25206))
                            .then(function (t) {
                                return t.t;
                            }),
                    tzl: () =>
                        n
                            .e(95450)
                            .then(n.bind(n, 95450))
                            .then(function (t) {
                                return t.t;
                            }),
                    'tzm-LATN': () =>
                        n
                            .e(16706)
                            .then(n.bind(n, 16706))
                            .then(function (t) {
                                return t.t;
                            }),
                    tzm: () =>
                        n
                            .e(48652)
                            .then(n.bind(n, 48652))
                            .then(function (t) {
                                return t.t;
                            }),
                    'ug-CN': () =>
                        n
                            .e(9721)
                            .then(n.bind(n, 9721))
                            .then(function (t) {
                                return t.u;
                            }),
                    uk: () =>
                        n
                            .e(80007)
                            .then(n.bind(n, 80007))
                            .then(function (t) {
                                return t.u;
                            }),
                    ur: () =>
                        n
                            .e(76340)
                            .then(n.bind(n, 76340))
                            .then(function (t) {
                                return t.u;
                            }),
                    'uz-LATN': () =>
                        n
                            .e(62804)
                            .then(n.bind(n, 62804))
                            .then(function (t) {
                                return t.u;
                            }),
                    uz: () =>
                        n
                            .e(59988)
                            .then(n.bind(n, 59988))
                            .then(function (t) {
                                return t.u;
                            }),
                    vi: () =>
                        n
                            .e(92687)
                            .then(n.bind(n, 92687))
                            .then(function (t) {
                                return t.v;
                            }),
                    'x-PSEUDO': () =>
                        n
                            .e(12438)
                            .then(n.bind(n, 12438))
                            .then(function (t) {
                                return t.x;
                            }),
                    yo: () =>
                        n
                            .e(39162)
                            .then(n.bind(n, 39162))
                            .then(function (t) {
                                return t.y;
                            }),
                    'zh-CN': () =>
                        n
                            .e(12896)
                            .then(n.bind(n, 12896))
                            .then(function (t) {
                                return t.z;
                            }),
                    'zh-HK': () =>
                        n
                            .e(18991)
                            .then(n.bind(n, 18991))
                            .then(function (t) {
                                return t.z;
                            }),
                    'zh-TW': () =>
                        n
                            .e(14508)
                            .then(n.bind(n, 14508))
                            .then(function (t) {
                                return t.z;
                            }),
                    zh: () =>
                        n
                            .e(61028)
                            .then(n.bind(n, 61028))
                            .then(function (t) {
                                return t.z;
                            }),
                    'es-PR': () =>
                        n
                            .e(66370)
                            .then(n.bind(n, 66370))
                            .then(function (t) {
                                return t.e;
                            }),
                    'es-MX': () =>
                        n
                            .e(98440)
                            .then(n.bind(n, 98440))
                            .then(function (t) {
                                return t.e;
                            }),
                    'es-US': () =>
                        n
                            .e(82530)
                            .then(n.bind(n, 82530))
                            .then(function (t) {
                                return t.e;
                            }),
                },
                tU = (t) => console.warn(`Cannot load dayjs locale file file for "${t}"`),
                tB = (t) => {
                    if (t_[t]) return t;
                    if (t.includes('-')) {
                        let e = t.split('-')[0];
                        if (t_[e]) return e;
                    }
                    return t;
                };
            function tH(t) {
                let e = tB(t);
                if (!t_[e]) {
                    tU(e);
                    return;
                }
                try {
                    t_[e]().then(() => u.d.locale(e));
                } catch (t) {
                    tU(e);
                }
            }
            let tq = [
                    'dev',
                    'en',
                    'fr',
                    'cs',
                    'da',
                    'de',
                    'el',
                    'es',
                    'fi',
                    'hu',
                    'id',
                    'it',
                    'ja',
                    'ko',
                    'nl',
                    'no',
                    'pl',
                    'pt',
                    'pt-br',
                    'ru',
                    'sv',
                    'th',
                    'tr',
                    'zh',
                    'zh-cn',
                    'zh-tw',
                    'zn',
                    'es-es',
                ],
                tz = 'translation';
            function tV(t) {
                return {
                    loadPath: `${(0, a.a)(t.languageAssetsPath)}/{{lng}}.json?lng={{lng}}&ns={{ns}}`,
                    request: async (t, e, n, r) => {
                        try {
                            let [t, n] = e.split('?'),
                                i = new URLSearchParams(n),
                                o = i.get('lng'),
                                a = i.get('ns');
                            if (!tq.includes(o.toLowerCase())) throw Error(`Unsupported locale "${o}"`);
                            if (a !== tz) throw Error(`Unsupported namespace "${a}"`);
                            let s = await fetch(t);
                            if (200 !== s.status && 304 !== s.status)
                                throw Error(`Unsuccessful request returned status "${s.status}"`);
                            r(null, {status: s.status, data: await s.json()});
                        } catch (t) {
                            r(t, {status: 404, data: ''});
                        }
                    },
                };
            }
            let tK = (t, e) =>
                `A ${e} is configured on the ${t} interface element, but the ${t} interface was initialized with an engine. You should only configure the ${e} in the target engine.`;
            class tJ {
                constructor(t, e) {
                    ((this.atomicInterface = t),
                        (this.hangingComponentsInitialization = []),
                        window[e] || (window[e] = tF()),
                        (function () {
                            if (!window.applyFocusVisiblePolyfill)
                                try {
                                    document.body.querySelector(':focus-visible');
                                } catch (t) {
                                    n.e(41777)
                                        .then(n.bind(n, 41777))
                                        .then(function (t) {
                                            return t.f;
                                        });
                                }
                        })());
                    let {connectedCallback: r, render: i} = t;
                    ((t.connectedCallback = () => (
                        (this.i18nPromise = t.i18n.use(tM).init({
                            debug: 'debug' === t.logLevel,
                            lng: t.language,
                            nsSeparator: '___',
                            fallbackLng: 'en',
                            backend: tV(t),
                            interpolation: {escape: (t) => c.p.sanitize(t)},
                            compatibilityJSON: 'v3',
                        })),
                        r && r.call(t)
                    )),
                        (t.render = () =>
                            t.error
                                ? (0, a.h)('atomic-component-error', {element: t.host, error: t.error})
                                : i && i.call(t)));
                }
                onComponentInitializing(t) {
                    if ((t.preventDefault(), t.stopPropagation(), this.atomicInterface.engine)) {
                        t.detail(this.atomicInterface.bindings);
                        return;
                    }
                    this.hangingComponentsInitialization.push(t);
                }
                async onInitialization(t) {
                    if (this.atomicInterface.engine) {
                        this.atomicInterface.engine.logger.warn(
                            `The ${this.interfaceTagname} component "initialize" has already been called.`,
                            this.atomicInterface.host,
                        );
                        return;
                    }
                    (this.atomicInterface.updateIconAssetsPath(),
                        t(),
                        this.atomicInterface.registerFieldsToInclude(),
                        tH(this.atomicInterface.language),
                        await this.i18nPromise,
                        this.initComponents());
                }
                onAnalyticsChange() {
                    let {engine: t, analytics: e} = this.atomicInterface;
                    if (this.engineIsCreated(t)) {
                        if (!e) {
                            t.disableAnalytics();
                            return;
                        }
                        t.enableAnalytics();
                    }
                }
                onLanguageChange() {
                    let {i18n: t, language: e} = this.atomicInterface;
                    (tH(e),
                        new tM(t.services, tV(this.atomicInterface)).read(e, tz, (n, r) => {
                            (t.addResourceBundle(e, tz, r, !0, !1), t.changeLanguage(e));
                        }));
                }
                engineIsCreated(t) {
                    return (
                        !!t ||
                        (console.error(
                            `You have to call "initialize" on the ${this.interfaceTagname} component before modifying the props or calling other public methods.`,
                            this.atomicInterface.host,
                        ),
                        !1)
                    );
                }
                get interfaceTagname() {
                    return this.atomicInterface.host.tagName.toLowerCase();
                }
                initComponents() {
                    this.hangingComponentsInitialization.forEach((t) => t.detail(this.atomicInterface.bindings));
                }
            }
            function tY(t, e, n) {
                var r;
                return (null === (r = n.analytics) || void 0 === r ? void 0 : r.analyticsClientMiddleware)
                    ? n.analytics.analyticsClientMiddleware(t, e)
                    : e;
            }
            function tW(t) {
                return (t.customData && (t.customData.coveoAtomicVersion = tF().version), t);
            }
            function tX() {
                return {
                    documentLocation: document.location.href,
                    ...(document.referrer && {originLevel3: document.referrer}),
                };
            }
        },
        98214: function (t, e, n) {
            n.d(e, {
                B: function () {
                    return c;
                },
                N: function () {
                    return u;
                },
                S: function () {
                    return i;
                },
                a: function () {
                    return f;
                },
                b: function () {
                    return a;
                },
                c: function () {
                    return s;
                },
                i: function () {
                    return h;
                },
            });
            var r = class extends Error {
                    constructor(t) {
                        (super(t), (this.name = 'SchemaValidationError'));
                    }
                },
                i = class {
                    constructor(t) {
                        this.definition = t;
                    }
                    validate(t = {}, e = '') {
                        let n = {...this.default, ...t},
                            i = [];
                        for (let t in this.definition) {
                            let e = this.definition[t].validate(n[t]);
                            e && i.push(`${t}: ${e}`);
                        }
                        if (i.length)
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
                                    return new r(n);
                                })(i, e)
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
                o = class {
                    constructor(t = {}) {
                        this.baseConfig = t;
                    }
                    validate(t) {
                        return this.baseConfig.required && s(t) ? 'value is required.' : null;
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
            function a(t) {
                return void 0 === t;
            }
            function s(t) {
                return a(t) || null === t;
            }
            var u = class {
                    constructor(t = {}) {
                        ((this.config = t), (this.value = new o(t)));
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return (
                            e ||
                            (a(t) || ('number' == typeof t && !isNaN(t))
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
                c = class {
                    constructor(t = {}) {
                        this.value = new o(t);
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return e || (a(t) || 'boolean' == typeof t ? null : 'value is not a boolean.');
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                },
                l =
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
                f = class {
                    constructor(t = {}) {
                        ((this.config = {emptyAllowed: !0, url: !1, ...t}), (this.value = new o(this.config)));
                    }
                    validate(t) {
                        let {emptyAllowed: e, url: n, regex: r, constrainTo: i} = this.config,
                            o = this.value.validate(t);
                        if (o) return o;
                        if (a(t)) return null;
                        if ('[object String]' !== Object.prototype.toString.call(t)) return 'value is not a string.';
                        if (!e && !t.length) return 'value is an empty string.';
                        if (n && !l.test(t)) return 'value is not a valid URL.';
                        if (r && !r.test(t)) return `value did not match provided regex ${r}`;
                        if (i && !i.includes(t)) {
                            let t = i.join(', ');
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
            function h(t) {
                return Array.isArray(t);
            }
        },
        30839: function (t, e, n) {
            n.d(e, {
                d: function () {
                    return i;
                },
            });
            var r = n(87856),
                i = (0, r.c)(function (t, e) {
                    var n, i, o, a, s, u, c, l, f, h, d, p, g, y, v, b, m, O, w, k, S;
                    (r.a,
                        (t.exports =
                            ((n = 'millisecond'),
                            (i = 'second'),
                            (o = 'minute'),
                            (a = 'hour'),
                            (s = 'week'),
                            (u = 'month'),
                            (c = 'quarter'),
                            (l = 'year'),
                            (f = 'date'),
                            (h = 'Invalid Date'),
                            (d =
                                /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/),
                            (p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g),
                            (g = function (t, e, n) {
                                var r = String(t);
                                return !r || r.length >= e ? t : '' + Array(e + 1 - r.length).join(n) + t;
                            }),
                            ((v = {})[(y = 'en')] = {
                                name: 'en',
                                weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                                months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                                    '_',
                                ),
                            }),
                            (b = function (t) {
                                return t instanceof k;
                            }),
                            (m = function t(e, n, r) {
                                var i;
                                if (!e) return y;
                                if ('string' == typeof e) {
                                    var o = e.toLowerCase();
                                    (v[o] && (i = o), n && ((v[o] = n), (i = o)));
                                    var a = e.split('-');
                                    if (!i && a.length > 1) return t(a[0]);
                                } else {
                                    var s = e.name;
                                    ((v[s] = e), (i = s));
                                }
                                return (!r && i && (y = i), i || (!r && y));
                            }),
                            (O = function (t, e) {
                                if (b(t)) return t.clone();
                                var n = 'object' == typeof e ? e : {};
                                return ((n.date = t), (n.args = arguments), new k(n));
                            }),
                            ((w = {
                                s: g,
                                z: function (t) {
                                    var e = -t.utcOffset(),
                                        n = Math.abs(e);
                                    return (
                                        (e <= 0 ? '+' : '-') + g(Math.floor(n / 60), 2, '0') + ':' + g(n % 60, 2, '0')
                                    );
                                },
                                m: function t(e, n) {
                                    if (e.date() < n.date()) return -t(n, e);
                                    var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                                        i = e.clone().add(r, u),
                                        o = n - i < 0,
                                        a = e.clone().add(r + (o ? -1 : 1), u);
                                    return +(-(r + (n - i) / (o ? i - a : a - i)) || 0);
                                },
                                a: function (t) {
                                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                                },
                                p: function (t) {
                                    return (
                                        {M: u, y: l, w: s, d: 'day', D: f, h: a, m: o, s: i, ms: n, Q: c}[t] ||
                                        String(t || '')
                                            .toLowerCase()
                                            .replace(/s$/, '')
                                    );
                                },
                                u: function (t) {
                                    return void 0 === t;
                                },
                            }).l = m),
                            (w.i = b),
                            (w.w = function (t, e) {
                                return O(t, {locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset});
                            }),
                            (S = (k = (function () {
                                function t(t) {
                                    ((this.$L = m(t.locale, null, !0)), this.parse(t));
                                }
                                var e = t.prototype;
                                return (
                                    (e.parse = function (t) {
                                        ((this.$d = (function (t) {
                                            var e = t.date,
                                                n = t.utc;
                                            if (null === e) return new Date(NaN);
                                            if (w.u(e)) return new Date();
                                            if (e instanceof Date) return new Date(e);
                                            if ('string' == typeof e && !/Z$/i.test(e)) {
                                                var r = e.match(d);
                                                if (r) {
                                                    var i = r[2] - 1 || 0,
                                                        o = (r[7] || '0').substring(0, 3);
                                                    return n
                                                        ? new Date(
                                                              Date.UTC(
                                                                  r[1],
                                                                  i,
                                                                  r[3] || 1,
                                                                  r[4] || 0,
                                                                  r[5] || 0,
                                                                  r[6] || 0,
                                                                  o,
                                                              ),
                                                          )
                                                        : new Date(
                                                              r[1],
                                                              i,
                                                              r[3] || 1,
                                                              r[4] || 0,
                                                              r[5] || 0,
                                                              r[6] || 0,
                                                              o,
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
                                        return w;
                                    }),
                                    (e.isValid = function () {
                                        return this.$d.toString() !== h;
                                    }),
                                    (e.isSame = function (t, e) {
                                        var n = O(t);
                                        return this.startOf(e) <= n && n <= this.endOf(e);
                                    }),
                                    (e.isAfter = function (t, e) {
                                        return O(t) < this.startOf(e);
                                    }),
                                    (e.isBefore = function (t, e) {
                                        return this.endOf(e) < O(t);
                                    }),
                                    (e.$g = function (t, e, n) {
                                        return w.u(t) ? this[e] : this.set(n, t);
                                    }),
                                    (e.unix = function () {
                                        return Math.floor(this.valueOf() / 1e3);
                                    }),
                                    (e.valueOf = function () {
                                        return this.$d.getTime();
                                    }),
                                    (e.startOf = function (t, e) {
                                        var n = this,
                                            r = !!w.u(e) || e,
                                            c = w.p(t),
                                            h = function (t, e) {
                                                var i = w.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                                                return r ? i : i.endOf('day');
                                            },
                                            d = function (t, e) {
                                                return w.w(
                                                    n
                                                        .toDate()
                                                        [
                                                            t
                                                        ].apply(n.toDate('s'), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)),
                                                    n,
                                                );
                                            },
                                            p = this.$W,
                                            g = this.$M,
                                            y = this.$D,
                                            v = 'set' + (this.$u ? 'UTC' : '');
                                        switch (c) {
                                            case l:
                                                return r ? h(1, 0) : h(31, 11);
                                            case u:
                                                return r ? h(1, g) : h(0, g + 1);
                                            case s:
                                                var b = this.$locale().weekStart || 0,
                                                    m = (p < b ? p + 7 : p) - b;
                                                return h(r ? y - m : y + (6 - m), g);
                                            case 'day':
                                            case f:
                                                return d(v + 'Hours', 0);
                                            case a:
                                                return d(v + 'Minutes', 1);
                                            case o:
                                                return d(v + 'Seconds', 2);
                                            case i:
                                                return d(v + 'Milliseconds', 3);
                                            default:
                                                return this.clone();
                                        }
                                    }),
                                    (e.endOf = function (t) {
                                        return this.startOf(t, !1);
                                    }),
                                    (e.$set = function (t, e) {
                                        var r,
                                            s = w.p(t),
                                            c = 'set' + (this.$u ? 'UTC' : ''),
                                            h = (((r = {}).day = c + 'Date'),
                                            (r[f] = c + 'Date'),
                                            (r[u] = c + 'Month'),
                                            (r[l] = c + 'FullYear'),
                                            (r[a] = c + 'Hours'),
                                            (r[o] = c + 'Minutes'),
                                            (r[i] = c + 'Seconds'),
                                            (r[n] = c + 'Milliseconds'),
                                            r)[s],
                                            d = 'day' === s ? this.$D + (e - this.$W) : e;
                                        if (s === u || s === l) {
                                            var p = this.clone().set(f, 1);
                                            (p.$d[h](d),
                                                p.init(),
                                                (this.$d = p.set(f, Math.min(this.$D, p.daysInMonth())).$d));
                                        } else h && this.$d[h](d);
                                        return (this.init(), this);
                                    }),
                                    (e.set = function (t, e) {
                                        return this.clone().$set(t, e);
                                    }),
                                    (e.get = function (t) {
                                        return this[w.p(t)]();
                                    }),
                                    (e.add = function (t, e) {
                                        var n,
                                            r = this;
                                        t = Number(t);
                                        var c = w.p(e),
                                            f = function (e) {
                                                var n = O(r);
                                                return w.w(n.date(n.date() + Math.round(e * t)), r);
                                            };
                                        if (c === u) return this.set(u, this.$M + t);
                                        if (c === l) return this.set(l, this.$y + t);
                                        if ('day' === c) return f(1);
                                        if (c === s) return f(7);
                                        var h = (((n = {})[o] = 6e4), (n[a] = 36e5), (n[i] = 1e3), n)[c] || 1,
                                            d = this.$d.getTime() + t * h;
                                        return w.w(d, this);
                                    }),
                                    (e.subtract = function (t, e) {
                                        return this.add(-1 * t, e);
                                    }),
                                    (e.format = function (t) {
                                        var e = this,
                                            n = this.$locale();
                                        if (!this.isValid()) return n.invalidDate || h;
                                        var r = t || 'YYYY-MM-DDTHH:mm:ssZ',
                                            i = w.z(this),
                                            o = this.$H,
                                            a = this.$m,
                                            s = this.$M,
                                            u = n.weekdays,
                                            c = n.months,
                                            l = function (t, n, i, o) {
                                                return (t && (t[n] || t(e, r))) || i[n].slice(0, o);
                                            },
                                            f = function (t) {
                                                return w.s(o % 12 || 12, t, '0');
                                            },
                                            d =
                                                n.meridiem ||
                                                function (t, e, n) {
                                                    var r = t < 12 ? 'AM' : 'PM';
                                                    return n ? r.toLowerCase() : r;
                                                },
                                            g = {
                                                YY: String(this.$y).slice(-2),
                                                YYYY: this.$y,
                                                M: s + 1,
                                                MM: w.s(s + 1, 2, '0'),
                                                MMM: l(n.monthsShort, s, c, 3),
                                                MMMM: l(c, s),
                                                D: this.$D,
                                                DD: w.s(this.$D, 2, '0'),
                                                d: String(this.$W),
                                                dd: l(n.weekdaysMin, this.$W, u, 2),
                                                ddd: l(n.weekdaysShort, this.$W, u, 3),
                                                dddd: u[this.$W],
                                                H: String(o),
                                                HH: w.s(o, 2, '0'),
                                                h: f(1),
                                                hh: f(2),
                                                a: d(o, a, !0),
                                                A: d(o, a, !1),
                                                m: String(a),
                                                mm: w.s(a, 2, '0'),
                                                s: String(this.$s),
                                                ss: w.s(this.$s, 2, '0'),
                                                SSS: w.s(this.$ms, 3, '0'),
                                                Z: i,
                                            };
                                        return r.replace(p, function (t, e) {
                                            return e || g[t] || i.replace(':', '');
                                        });
                                    }),
                                    (e.utcOffset = function () {
                                        return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
                                    }),
                                    (e.diff = function (t, e, n) {
                                        var r,
                                            f = w.p(e),
                                            h = O(t),
                                            d = (h.utcOffset() - this.utcOffset()) * 6e4,
                                            p = this - h,
                                            g = w.m(this, h);
                                        return (
                                            (g =
                                                (((r = {})[l] = g / 12),
                                                (r[u] = g),
                                                (r[c] = g / 3),
                                                (r[s] = (p - d) / 6048e5),
                                                (r.day = (p - d) / 864e5),
                                                (r[a] = p / 36e5),
                                                (r[o] = p / 6e4),
                                                (r[i] = p / 1e3),
                                                r)[f] || p),
                                            n ? g : w.a(g)
                                        );
                                    }),
                                    (e.daysInMonth = function () {
                                        return this.endOf(u).$D;
                                    }),
                                    (e.$locale = function () {
                                        return v[this.$L];
                                    }),
                                    (e.locale = function (t, e) {
                                        if (!t) return this.$L;
                                        var n = this.clone(),
                                            r = m(t, e, !0);
                                        return (r && (n.$L = r), n);
                                    }),
                                    (e.clone = function () {
                                        return w.w(this.$d, this);
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
                            (O.prototype = S),
                            [
                                ['$ms', n],
                                ['$s', i],
                                ['$m', o],
                                ['$H', a],
                                ['$W', 'day'],
                                ['$M', u],
                                ['$y', l],
                                ['$D', f],
                            ].forEach(function (t) {
                                S[t[1]] = function (e) {
                                    return this.$g(e, t[0], t[1]);
                                };
                            }),
                            (O.extend = function (t, e) {
                                return (t.$i || (t(e, k, O), (t.$i = !0)), O);
                            }),
                            (O.locale = m),
                            (O.isDayjs = b),
                            (O.unix = function (t) {
                                return O(1e3 * t);
                            }),
                            (O.en = v[y]),
                            (O.Ls = v),
                            (O.p = {}),
                            O)));
                });
        },
        53049: function (t, e, n) {
            n.d(e, {
                A: function () {
                    return s;
                },
                M: function () {
                    return a;
                },
            });
            var r = n(98214),
                i = n(5991),
                o = n(66038);
            function a(t) {
                return (e, n) => {
                    let {componentWillLoad: r} = e;
                    if (!r) {
                        console.error(
                            'The "componentWillLoad" lifecycle method has to be defined for the MapProp decorator to work.',
                        );
                        return;
                    }
                    e.componentWillLoad = function () {
                        var e;
                        let a = (t && t.attributePrefix) || n,
                            s = this[n],
                            u = (0, i.g)(this).attributes;
                        ((function (t, e, n, r) {
                            let i = (function (t, e) {
                                let n = {},
                                    r = (0, o.a)(t) + '-';
                                for (let t = 0; t < e.length; t++) {
                                    let i = e[t];
                                    if (0 !== i.name.indexOf(r)) continue;
                                    let a = (0, o.k)(i.name.replace(r, ''));
                                    n[a] = `${i.value}`;
                                }
                                return n;
                            })(t, n);
                            Object.assign(
                                e,
                                r
                                    ? Object.entries(i).reduce(
                                          (t, [e, n]) => ({
                                              ...t,
                                              [e]: (function (t) {
                                                  var e;
                                                  let [...n] =
                                                          null !== (e = t.matchAll(/(?:\\.|[^,])+/g)) && void 0 !== e
                                                              ? e
                                                              : [],
                                                      r = /\\(.)/g;
                                                  return n.map(([t]) => t.replace(r, '$1'));
                                              })(n).map((t) => t.trim()),
                                          }),
                                          {},
                                      )
                                    : i,
                            );
                        })(a, s, Array.from(u), null !== (e = null == t ? void 0 : t.splitValues) && void 0 !== e && e),
                            r.call(this));
                    };
                };
            }
            function s() {
                return (t, e) => {
                    let {componentWillLoad: n} = t,
                        a = (0, o.a)(e);
                    t.componentWillLoad = function () {
                        let t = this[e];
                        if (!t || (0, r.i)(t)) {
                            null == n || n.call(this);
                            return;
                        }
                        try {
                            let n = JSON.parse(t);
                            (0, r.i)(n)
                                ? (this[e] = n)
                                : console.error(`Property ${a} should be an array`, (0, i.g)(this));
                        } catch (t) {
                            console.error(`Error while parsing attribute ${a} as array`, t);
                        }
                        null == n || n.call(this);
                    };
                };
            }
        },
        23318: function (t, e, n) {
            let r;
            n.d(e, {
                c: function () {
                    return g;
                },
                i: function () {
                    return p;
                },
            });
            var i,
                o = n(5991),
                a = n(66038);
            let s = (t, e, n) => {
                    let r = t.get(e);
                    r ? r.includes(n) || r.push(n) : t.set(e, [n]);
                },
                u = (t) => !('isConnected' in t) || t.isConnected,
                c =
                    ((i = (t) => {
                        for (let e of t.keys()) t.set(e, t.get(e).filter(u));
                    }),
                    (...t) => {
                        (r && clearTimeout(r),
                            (r = setTimeout(() => {
                                ((r = 0), i(...t));
                            }, 2e3)));
                    }),
                l = () => {
                    if ('function' != typeof o.d) return {};
                    let t = new Map();
                    return {
                        dispose: () => t.clear(),
                        get: (e) => {
                            let n = (0, o.d)();
                            n && s(t, e, n);
                        },
                        set: (e) => {
                            let n = t.get(e);
                            (n && t.set(e, n.filter(o.f)), c(t));
                        },
                        reset: () => {
                            (t.forEach((t) => t.forEach(o.f)), c(t));
                        },
                    };
                },
                f = (t, e = (t, e) => t !== e) => {
                    let n = new Map(Object.entries(null != t ? t : {})),
                        r = {dispose: [], get: [], set: [], reset: []},
                        i = () => {
                            ((n = new Map(Object.entries(null != t ? t : {}))), r.reset.forEach((t) => t()));
                        },
                        o = (t) => (r.get.forEach((e) => e(t)), n.get(t)),
                        a = (t, i) => {
                            let o = n.get(t);
                            e(i, o, t) && (n.set(t, i), r.set.forEach((e) => e(t, i, o)));
                        },
                        s =
                            'undefined' == typeof Proxy
                                ? {}
                                : new Proxy(t, {
                                      get: (t, e) => o(e),
                                      ownKeys: (t) => Array.from(n.keys()),
                                      getOwnPropertyDescriptor: () => ({enumerable: !0, configurable: !0}),
                                      has: (t, e) => n.has(e),
                                      set: (t, e, n) => (a(e, n), !0),
                                  }),
                        u = (t, e) => (
                            r[t].push(e),
                            () => {
                                h(r[t], e);
                            }
                        );
                    return {
                        state: s,
                        get: o,
                        set: a,
                        on: u,
                        onChange: (e, n) => {
                            let r = u('set', (t, r) => {
                                    t === e && n(r);
                                }),
                                i = u('reset', () => n(t[e]));
                            return () => {
                                (r(), i());
                            };
                        },
                        use: (...t) => {
                            let e = t.reduce(
                                (t, e) => (
                                    e.set && t.push(u('set', e.set)),
                                    e.get && t.push(u('get', e.get)),
                                    e.reset && t.push(u('reset', e.reset)),
                                    e.dispose && t.push(u('dispose', e.dispose)),
                                    t
                                ),
                                [],
                            );
                            return () => e.forEach((t) => t());
                        },
                        dispose: () => {
                            (r.dispose.forEach((t) => t()), i());
                        },
                        reset: i,
                        forceUpdate: (t) => {
                            let e = n.get(t);
                            r.set.forEach((n) => n(t, e, e));
                        },
                    };
                },
                h = (t, e) => {
                    let n = t.indexOf(e);
                    n >= 0 && ((t[n] = t[t.length - 1]), t.length--);
                },
                d = (t, e) => {
                    let n = f(t, e);
                    return (n.use(l()), n);
                },
                p = 'is-refine-modal';
            function g(t) {
                let e = d(t),
                    n = (t, n) => {
                        e.state[t][n] &&
                            (e.state.facetElements = e.state.facetElements.filter(
                                (t) => t.getAttribute('facet-id') !== n,
                            ));
                    };
                return {
                    ...e,
                    registerFacet(t, r) {
                        null === r.element.getAttribute(p) &&
                            (n(t, r.facetId), e.state.facetElements.push(r.element), (e.state[t][r.facetId] = r));
                    },
                    getIconAssetsPath: () => e.get('iconAssetsPath'),
                    setLoadingFlag(t) {
                        let n = e.get('loadingFlags');
                        e.set('loadingFlags', n.concat(t));
                    },
                    unsetLoadingFlag(t) {
                        let n = e.get('loadingFlags');
                        e.set(
                            'loadingFlags',
                            n.filter((e) => e !== t),
                        );
                    },
                    hasLoadingFlag: (t) => -1 !== e.get('loadingFlags').indexOf(t),
                    registerResultList(t) {
                        e.set('resultList', t);
                    },
                    addFieldsToInclude(t) {
                        e.set('fieldsToInclude', [...e.get('fieldsToInclude'), ...t]);
                    },
                    waitUntilAppLoaded(t) {
                        e.get('loadingFlags').length
                            ? e.onChange('loadingFlags', (e) => {
                                  e.length || t();
                              })
                            : t();
                    },
                    isAppLoaded: () => !e.get('loadingFlags').length,
                    getUniqueIDFromEngine(t) {
                        throw Error('getUniqueIDFromEngine not implemented at the common store level.');
                    },
                    getFacetElements: () => e.get('facetElements').filter((t) => (0, a.f)(t)),
                };
            }
        },
    },
]);
