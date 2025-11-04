'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [12077],
    {
        12077: function (t, e, n) {
            (n.r(e),
                n.d(e, {
                    atomic_ipx_tabs: function () {
                        return r;
                    },
                }));
            var i = n(5991),
                o = n(8807);
            (n(66038), n(87856));
            let r = class {
                constructor(t) {
                    (0, i.r)(this, t);
                }
                render() {
                    return (0, i.h)('tab-bar', null, (0, i.h)('slot', null));
                }
            };
            !(function (t, e, n, i) {
                var o,
                    r = arguments.length,
                    l = r < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    l = Reflect.decorate(t, e, n, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)
                        (o = t[a]) && (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
                r > 3 && l && Object.defineProperty(e, n, l);
            })([(0, o.I)()], r.prototype, 'bindings', void 0);
        },
        75291: function (t, e, n) {
            function i(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function o(t, e, n, i) {
                let o = (r) => {
                    (t.removeEventListener(e, o, i), 'object' == typeof n ? n.handleEvent.call(t, r) : n.call(t, r));
                };
                t.addEventListener(e, o, i);
            }
            n.d(e, {
                b: function () {
                    return i;
                },
                l: function () {
                    return o;
                },
            });
        },
        8807: function (t, e, n) {
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
                    return a;
                },
                b: function () {
                    return d;
                },
            });
            var i = n(5991),
                o = n(75291),
                r = n(66038);
            let l = () => (0, i.h)(i.H, {class: 'atomic-hidden'}),
                a = 'atomic/initializeComponent',
                s = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class c extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of the following elements: ${s.join(', ')}`);
                }
            }
            function d(t) {
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
            let u = 'data-atomic-rendered',
                h = 'data-atomic-loaded';
            function f({forceUpdate: t} = {}) {
                return (e, n) => {
                    let {
                            componentWillLoad: f,
                            render: b,
                            componentDidRender: p,
                            componentDidLoad: g,
                            disconnectedCallback: m,
                        } = e,
                        v = () => {};
                    if ('bindings' !== n)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${n}"`,
                            e,
                        );
                    ((e.componentWillLoad = function () {
                        let e = (0, i.g)(this);
                        (e.setAttribute(u, 'false'), e.setAttribute(h, 'false'));
                        let n = (0, o.b)(a, (e) => {
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
                        if ((e.dispatchEvent(n), !(0, r.c)(e, s.join(', ')))) {
                            this.error = new c(e.nodeName.toLowerCase());
                            return;
                        }
                        return f && f.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(u, 'true'), b && b.call(this))
                                  : (0, i.h)(l, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, i.g)(this);
                            (t.setAttribute(u, 'false'), t.setAttribute(h, 'false'), v(), m && m.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, i.g)(this);
                            'false' !== t.getAttribute(u) &&
                                (p && p.call(this),
                                'false' === t.getAttribute(h) &&
                                    (t.setAttribute(h, 'true'), d((0, i.g)(this)), g && g.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function b(t, e) {
                return (n, o) => {
                    let {disconnectedCallback: r, initialize: l} = n;
                    ((n.initialize = function () {
                        return (l && l.call(this), l)
                            ? this[t]
                                ? (null == e ? void 0 : e.onUpdateCallbackMethod) && !this[e.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${e.onUpdateCallbackMethod}" is not defined`,
                                          n,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[o] = this[t].state),
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
                                r && r.call(this));
                        }));
                };
            }
        },
    },
]);
