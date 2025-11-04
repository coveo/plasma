'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [19014],
    {
        19014: function (t, e, i) {
            (i.r(e),
                i.d(e, {
                    atomic_external: function () {
                        return l;
                    },
                }));
            var n = i(5991),
                o = i(75291),
                r = i(8807);
            (i(66038), i(87856));
            let l = class {
                constructor(t) {
                    ((0, n.r)(this, t), (this.selector = 'atomic-search-interface'));
                }
                handleInitialization(t) {
                    (t.preventDefault(), t.stopPropagation(), this.interface.dispatchEvent((0, o.b)(r.a, t.detail)));
                }
                handleScrollToTop(t) {
                    (t.preventDefault(),
                        t.stopPropagation(),
                        this.interface.dispatchEvent((0, o.b)('atomic/scrollToTop', t.detail)));
                }
                get interface() {
                    let t = document.querySelector(this.selector);
                    if (!t) throw Error(`Cannot find interface element with selector "${this.selector}"`);
                    return t;
                }
            };
        },
        75291: function (t, e, i) {
            function n(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function o(t, e, i, n) {
                let o = (r) => {
                    (t.removeEventListener(e, o, n), 'object' == typeof i ? i.handleEvent.call(t, r) : i.call(t, r));
                };
                t.addEventListener(e, o, n);
            }
            i.d(e, {
                b: function () {
                    return n;
                },
                l: function () {
                    return o;
                },
            });
        },
        8807: function (t, e, i) {
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
                    return a;
                },
                b: function () {
                    return d;
                },
            });
            var n = i(5991),
                o = i(75291),
                r = i(66038);
            let l = () => (0, n.h)(n.H, {class: 'atomic-hidden'}),
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
                return (e, i) => {
                    let {
                            componentWillLoad: f,
                            render: b,
                            componentDidRender: p,
                            componentDidLoad: m,
                            disconnectedCallback: g,
                        } = e,
                        v = () => {};
                    if ('bindings' !== i)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${i}"`,
                            e,
                        );
                    ((e.componentWillLoad = function () {
                        let e = (0, n.g)(this);
                        (e.setAttribute(u, 'false'), e.setAttribute(h, 'false'));
                        let i = (0, o.b)(a, (e) => {
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
                        if ((e.dispatchEvent(i), !(0, r.c)(e, s.join(', ')))) {
                            this.error = new c(e.nodeName.toLowerCase());
                            return;
                        }
                        return f && f.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, n.h)('atomic-component-error', {element: (0, n.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, n.g)(this).setAttribute(u, 'true'), b && b.call(this))
                                  : (0, n.h)(l, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, n.g)(this);
                            (t.setAttribute(u, 'false'), t.setAttribute(h, 'false'), v(), g && g.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, n.g)(this);
                            'false' !== t.getAttribute(u) &&
                                (p && p.call(this),
                                'false' === t.getAttribute(h) &&
                                    (t.setAttribute(h, 'true'), d((0, n.g)(this)), m && m.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function b(t, e) {
                return (i, o) => {
                    let {disconnectedCallback: r, initialize: l} = i;
                    ((i.initialize = function () {
                        return (l && l.call(this), l)
                            ? this[t]
                                ? (null == e ? void 0 : e.onUpdateCallbackMethod) && !this[e.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${e.onUpdateCallbackMethod}" is not defined`,
                                          i,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[o] = this[t].state),
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
                                r && r.call(this));
                        }));
                };
            }
        },
    },
]);
