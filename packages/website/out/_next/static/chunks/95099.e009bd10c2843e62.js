(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        95099, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        89932: function (t, e, i) {
            'use strict';
            (i.r(e),
                i.d(e, {
                    atomic_result_image: function () {
                        return c;
                    },
                }));
            var n = i(5991),
                r = i(64977),
                o = i(8807),
                l = i(2995),
                s = i(18043);
            (i(66038), i(87856));
            var a = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    l = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    l = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)
                        (r = t[s]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, i, l) : r(e, i)) || l);
                return (o > 3 && l && Object.defineProperty(e, i, l), l);
            };
            let c = class {
                constructor(t) {
                    ((0, n.r)(this, t), (this.useFallback = !1));
                }
                get url() {
                    let t = r.a.getResultProperty(this.result, this.field);
                    return Array.isArray(t) ? t[0] : t;
                }
                logWarning(t) {
                    this.bindings.engine.logger.warn(t, this.host);
                }
                handleImageError() {
                    let t = `The image url "${this.url}" is not valid or could not be loaded. You might want to add a "fallback" property.`;
                    this.fallback ? (this.useFallback = !0) : this.logWarning(t);
                }
                handleMissingFallback(t) {
                    return this.fallback ? this.fallback : (this.logWarning(t), this.host.remove(), null);
                }
                validateUrl(t) {
                    if (!t) {
                        let t = `"${this.field}" is missing. Please review your indexation. You might want to add a "fallback" property.`;
                        return this.handleMissingFallback(t);
                    }
                    if ('string' != typeof t) {
                        let t = `Expected "${this.field}" to be a text field. Please review your indexation. You might want to add a "fallback" property.`;
                        return this.handleMissingFallback(t);
                    }
                    return t;
                }
                render() {
                    let t = this.useFallback ? this.fallback : this.url;
                    if (this.useFallback || (t = this.validateUrl(t)))
                        return (0, n.h)('img', {
                            alt: `${this.field} image`,
                            src: (0, l.f)(t),
                            onError: () => this.handleImageError(),
                            loading: 'lazy',
                        });
                }
                get host() {
                    return (0, n.g)(this);
                }
            };
            (a([(0, o.I)()], c.prototype, 'bindings', void 0),
                a([(0, s.R)()], c.prototype, 'result', void 0),
                (c.style =
                    'atomic-result-image{display:grid;place-items:center;grid-template-rows:100%;width:100%;height:100%}atomic-result-image img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}'));
        },
        75291: function (t, e, i) {
            'use strict';
            function n(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function r(t, e, i, n) {
                let r = (o) => {
                    (t.removeEventListener(e, r, n), 'object' == typeof i ? i.handleEvent.call(t, o) : i.call(t, o));
                };
                t.addEventListener(e, r, n);
            }
            i.d(e, {
                b: function () {
                    return n;
                },
                l: function () {
                    return r;
                },
            });
        },
        8807: function (t, e, i) {
            'use strict';
            i.d(e, {
                B: function () {
                    return b;
                },
                H: function () {
                    return l;
                },
                I: function () {
                    return f;
                },
                a: function () {
                    return s;
                },
                b: function () {
                    return u;
                },
            });
            var n = i(5991),
                r = i(75291),
                o = i(66038);
            let l = () => (0, n.h)(n.H, {class: 'atomic-hidden'}),
                s = 'atomic/initializeComponent',
                a = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class c extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of the following elements: ${a.join(', ')}`);
                }
            }
            function u(t) {
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
                return (e, i) => {
                    let {
                            componentWillLoad: f,
                            render: b,
                            componentDidRender: g,
                            componentDidLoad: p,
                            disconnectedCallback: m,
                        } = e,
                        v = () => {};
                    if ('bindings' !== i)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${i}"`,
                            e,
                        );
                    ((e.componentWillLoad = function () {
                        let e = (0, n.g)(this);
                        (e.setAttribute(h, 'false'), e.setAttribute(d, 'false'));
                        let i = (0, r.b)(s, (e) => {
                            this.bindings = e;
                            let i = () => (0, n.f)(this);
                            (this.bindings.i18n.on('languageChanged', i),
                                (v = () => this.bindings.i18n.off('languageChanged', i)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, n.f)(this)) : (0, n.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((e.dispatchEvent(i), !(0, o.c)(e, a.join(', ')))) {
                            this.error = new c(e.nodeName.toLowerCase());
                            return;
                        }
                        return f && f.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, n.h)('atomic-component-error', {element: (0, n.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, n.g)(this).setAttribute(h, 'true'), b && b.call(this))
                                  : (0, n.h)(l, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, n.g)(this);
                            (t.setAttribute(h, 'false'), t.setAttribute(d, 'false'), v(), m && m.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, n.g)(this);
                            'false' !== t.getAttribute(h) &&
                                (g && g.call(this),
                                'false' === t.getAttribute(d) &&
                                    (t.setAttribute(d, 'true'), u((0, n.g)(this)), p && p.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function b(t, e) {
                return (i, r) => {
                    let {disconnectedCallback: o, initialize: l} = i;
                    ((i.initialize = function () {
                        return (l && l.call(this), l)
                            ? this[t]
                                ? (null == e ? void 0 : e.onUpdateCallbackMethod) && !this[e.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${e.onUpdateCallbackMethod}" is not defined`,
                                          i,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[r] = this[t].state),
                                              (null == e ? void 0 : e.onUpdateCallbackMethod) &&
                                                  this[e.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${t}`,
                                  i,
                              );
                    }),
                        (i.disconnectedCallback = function () {
                            var t;
                            ((0, n.g)(this).isConnected ||
                                null === (t = this.unsubscribeController) ||
                                void 0 === t ||
                                t.call(this),
                                o && o.call(this));
                        }));
                };
            }
        },
        18043: function (t, e, i) {
            'use strict';
            i.d(e, {
                C: function () {
                    return h;
                },
                I: function () {
                    return s;
                },
                R: function () {
                    return l;
                },
                a: function () {
                    return d;
                },
            });
            var n = i(5991),
                r = i(75291);
            i(66038);
            class o extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of an "atomic-result" element.`);
                }
            }
            function l(t = {folded: !1}) {
                return (e, i) => {
                    let {connectedCallback: l, componentWillRender: s, render: c} = e;
                    ((e.connectedCallback = function () {
                        let e = (0, n.g)(this),
                            s = (0, r.b)(a, (e) => {
                                t.folded
                                    ? u(e)
                                        ? (this[i] = e)
                                        : (this[i] = {children: [], result: e})
                                    : (this[i] = u(e) ? e.result : e);
                            }),
                            c = e.dispatchEvent(s);
                        if (c) {
                            this.error = new o(e.nodeName.toLowerCase());
                            return;
                        }
                        return l && l.call(this);
                    }),
                        (e.componentWillRender = function () {
                            if (!this.error) return s && s.call(this);
                        }),
                        (e.render = function () {
                            if (this.error) {
                                let t = (0, n.g)(this);
                                (t.remove(),
                                    console.error(
                                        'Result component is in error and has been removed from the DOM',
                                        this.error,
                                        this,
                                        t,
                                    ));
                                return;
                            }
                            return c && c.call(this);
                        }));
                };
            }
            function s() {
                return (t, e) => {
                    let {connectedCallback: i} = t;
                    t.connectedCallback = function () {
                        let t = (0, n.g)(this),
                            o = (0, r.b)(c, (t) => {
                                this[e] = t;
                            });
                        return (t.dispatchEvent(o), i && i.call(this));
                    };
                };
            }
            let a = 'atomic/resolveResult',
                c = 'atomic/resolveInteractiveResult';
            function u(t) {
                return 'children' in t;
            }
            function h() {
                return (t, e) => {
                    let {componentWillRender: i} = t;
                    t.componentWillRender = function () {
                        let t = (0, n.g)(this),
                            o = (0, r.b)('atomic/resolveChildTemplates', (t) => {
                                this.resultTemplateProvider || (this[e] = t);
                            }),
                            l = t.dispatchEvent(o);
                        if (l) {
                            this[e] = null;
                            return;
                        }
                        return i && i.call(this);
                    };
                };
            }
            function d() {
                return (t, e) => {
                    let {componentWillRender: i} = t;
                    t.componentWillRender = function () {
                        let t = (0, n.g)(this),
                            o = (0, r.b)('atomic/resolveResultDisplayConfig', (t) => {
                                this[e] = t;
                            }),
                            l = t.dispatchEvent(o);
                        if (!l) return i && i.call(this);
                    };
                };
            }
        },
        2995: function (t, e, i) {
            'use strict';
            function n(t) {
                let e = /^(https?|ftp|file|mailto|tel|sip):/i.test(t),
                    i = /^\//.test(t);
                return e || i ? t : '';
            }
            i.d(e, {
                f: function () {
                    return n;
                },
            });
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
