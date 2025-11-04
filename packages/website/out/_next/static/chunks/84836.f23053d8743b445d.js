(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        84836, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        82703: function (t, e, n) {
            'use strict';
            (n.r(e),
                n.d(e, {
                    atomic_result_html: function () {
                        return c;
                    },
                }));
            var i = n(5991),
                r = n(8807),
                o = n(84036),
                l = n(18043);
            (n(66038), n(87856), n(64977));
            var s = function (t, e, n, i) {
                var r,
                    o = arguments.length,
                    l = o < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    l = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)
                        (r = t[s]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, n, l) : r(e, n)) || l);
                return (o > 3 && l && Object.defineProperty(e, n, l), l);
            };
            let c = class {
                constructor(t) {
                    ((0, i.r)(this, t), (this.sanitize = !0));
                }
                render() {
                    let t = (0, o.g)(this.result, this.field);
                    if (!t) {
                        this.host.remove();
                        return;
                    }
                    return (0, i.h)('atomic-html', {value: t, sanitize: this.sanitize});
                }
                get host() {
                    return (0, i.g)(this);
                }
            };
            (s([(0, r.I)()], c.prototype, 'bindings', void 0), s([(0, l.R)()], c.prototype, 'result', void 0));
        },
        75291: function (t, e, n) {
            'use strict';
            function i(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function r(t, e, n, i) {
                let r = (o) => {
                    (t.removeEventListener(e, r, i), 'object' == typeof n ? n.handleEvent.call(t, o) : n.call(t, o));
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
                    return a;
                },
            });
            var i = n(5991),
                r = n(75291),
                o = n(66038);
            let l = () => (0, i.h)(i.H, {class: 'atomic-hidden'}),
                s = 'atomic/initializeComponent',
                c = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class u extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of the following elements: ${c.join(', ')}`);
                }
            }
            function a(t) {
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
            let d = 'data-atomic-rendered',
                h = 'data-atomic-loaded';
            function f({forceUpdate: t} = {}) {
                return (e, n) => {
                    let {
                            componentWillLoad: f,
                            render: b,
                            componentDidRender: p,
                            componentDidLoad: m,
                            disconnectedCallback: g,
                        } = e,
                        v = () => {};
                    if ('bindings' !== n)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${n}"`,
                            e,
                        );
                    ((e.componentWillLoad = function () {
                        let e = (0, i.g)(this);
                        (e.setAttribute(d, 'false'), e.setAttribute(h, 'false'));
                        let n = (0, r.b)(s, (e) => {
                            this.bindings = e;
                            let n = () => (0, i.f)(this);
                            (this.bindings.i18n.on('languageChanged', n),
                                (v = () => this.bindings.i18n.off('languageChanged', n)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, i.f)(this)) : (0, i.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((e.dispatchEvent(n), !(0, o.c)(e, c.join(', ')))) {
                            this.error = new u(e.nodeName.toLowerCase());
                            return;
                        }
                        return f && f.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(d, 'true'), b && b.call(this))
                                  : (0, i.h)(l, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, i.g)(this);
                            (t.setAttribute(d, 'false'), t.setAttribute(h, 'false'), v(), g && g.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, i.g)(this);
                            'false' !== t.getAttribute(d) &&
                                (p && p.call(this),
                                'false' === t.getAttribute(h) &&
                                    (t.setAttribute(h, 'true'), a((0, i.g)(this)), m && m.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function b(t, e) {
                return (n, r) => {
                    let {disconnectedCallback: o, initialize: l} = n;
                    ((n.initialize = function () {
                        return (l && l.call(this), l)
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
                                o && o.call(this));
                        }));
                };
            }
        },
        18043: function (t, e, n) {
            'use strict';
            n.d(e, {
                C: function () {
                    return d;
                },
                I: function () {
                    return s;
                },
                R: function () {
                    return l;
                },
                a: function () {
                    return h;
                },
            });
            var i = n(5991),
                r = n(75291);
            n(66038);
            class o extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of an "atomic-result" element.`);
                }
            }
            function l(t = {folded: !1}) {
                return (e, n) => {
                    let {connectedCallback: l, componentWillRender: s, render: u} = e;
                    ((e.connectedCallback = function () {
                        let e = (0, i.g)(this),
                            s = (0, r.b)(c, (e) => {
                                t.folded
                                    ? a(e)
                                        ? (this[n] = e)
                                        : (this[n] = {children: [], result: e})
                                    : (this[n] = a(e) ? e.result : e);
                            }),
                            u = e.dispatchEvent(s);
                        if (u) {
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
                            return u && u.call(this);
                        }));
                };
            }
            function s() {
                return (t, e) => {
                    let {connectedCallback: n} = t;
                    t.connectedCallback = function () {
                        let t = (0, i.g)(this),
                            o = (0, r.b)(u, (t) => {
                                this[e] = t;
                            });
                        return (t.dispatchEvent(o), n && n.call(this));
                    };
                };
            }
            let c = 'atomic/resolveResult',
                u = 'atomic/resolveInteractiveResult';
            function a(t) {
                return 'children' in t;
            }
            function d() {
                return (t, e) => {
                    let {componentWillRender: n} = t;
                    t.componentWillRender = function () {
                        let t = (0, i.g)(this),
                            o = (0, r.b)('atomic/resolveChildTemplates', (t) => {
                                this.resultTemplateProvider || (this[e] = t);
                            }),
                            l = t.dispatchEvent(o);
                        if (l) {
                            this[e] = null;
                            return;
                        }
                        return n && n.call(this);
                    };
                };
            }
            function h() {
                return (t, e) => {
                    let {componentWillRender: n} = t;
                    t.componentWillRender = function () {
                        let t = (0, i.g)(this),
                            o = (0, r.b)('atomic/resolveResultDisplayConfig', (t) => {
                                this[e] = t;
                            }),
                            l = t.dispatchEvent(o);
                        if (!l) return n && n.call(this);
                    };
                };
            }
        },
        84036: function (t, e, n) {
            'use strict';
            n.d(e, {
                a: function () {
                    return r;
                },
                g: function () {
                    return o;
                },
            });
            var i = n(64977);
            function r(t, e, n) {
                return t.replace(/\${(.*?)}/g, (t) => {
                    let i = t.substring(2, t.length - 1),
                        r = l(e, i);
                    return (r || (r = l(window, i)), r)
                        ? r
                        : (n.engine.logger.warn(
                              `${i} used in the href template is undefined for this result: ${e.uniqueId}`,
                          ),
                          '');
                });
            }
            function o(t, e) {
                let n = i.a.getResultProperty(t, e);
                return 'string' != typeof n || '' === n.trim() ? null : n;
            }
            function l(t, e) {
                let n = e.indexOf('.');
                if (t && -1 !== n) {
                    let i = e.substring(n + 1);
                    return l(t[(e = e.substring(0, n))], i);
                }
                return t ? t[e] : void 0;
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
