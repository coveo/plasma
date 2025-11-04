'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [55243],
    {
        2108: function (t, e, n) {
            n.d(e, {
                B: function () {
                    return o;
                },
            });
            var r = n(5991),
                i = n(60375),
                l = n(35126);
            let o = (t, e) => {
                let n = (0, l.g)(t.style),
                    o = (0, l.a)(t.style),
                    a = {
                        class: t.class ? `${o} ${t.class}` : o,
                        part: t.part,
                        onClick: t.onClick,
                        title: t.title,
                        type: t.type,
                        role: t.role,
                        'aria-label': t.ariaLabel,
                        'aria-expanded': t.ariaExpanded,
                        'aria-pressed': t.ariaPressed,
                        'aria-checked': t.ariaChecked,
                        'aria-current': t.ariaCurrent,
                        'aria-controls': t.ariaControls,
                        'aria-hidden': t.ariaHidden,
                        disabled: t.disabled,
                        ref(e) {
                            var n;
                            (t.form && (null == e || e.setAttribute('form', t.form)),
                                t.ariaHidden && (null == e || e.setAttribute('aria-hidden', t.ariaHidden)),
                                t.tabIndex && (null == e || e.setAttribute('tabindex', t.tabIndex)),
                                null === (n = t.ref) || void 0 === n || n.call(t, e));
                        },
                    };
                return (0, r.h)(
                    'button',
                    {...a, onMouseDown: (t) => (0, i.c)(t, {color: n})},
                    t.text ? (0, r.h)('span', {class: 'truncate'}, t.text) : null,
                    e,
                );
            };
        },
        35126: function (t, e, n) {
            function r(t) {
                switch (t) {
                    case 'primary':
                        return 'btn-primary';
                    case 'outline-primary':
                        return 'btn-outline-primary';
                    case 'outline-neutral':
                        return 'btn-outline-neutral';
                    case 'outline-bg-neutral':
                        return 'btn-outline-bg-neutral';
                    case 'text-primary':
                        return 'btn-text-primary';
                    case 'text-neutral':
                        return 'btn-text-neutral';
                    case 'text-transparent':
                        return 'btn-text-transparent';
                    case 'square-neutral':
                        return 'btn-square-neutral';
                }
            }
            function i(t) {
                switch (t) {
                    case 'primary':
                        return 'primary';
                    case 'text-transparent':
                        return 'neutral-light';
                    default:
                        return 'neutral';
                }
            }
            n.d(e, {
                a: function () {
                    return r;
                },
                g: function () {
                    return i;
                },
            });
        },
        75291: function (t, e, n) {
            function r(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function i(t, e, n, r) {
                let i = (l) => {
                    (t.removeEventListener(e, i, r), 'object' == typeof n ? n.handleEvent.call(t, l) : n.call(t, l));
                };
                t.addEventListener(e, i, r);
            }
            n.d(e, {
                b: function () {
                    return r;
                },
                l: function () {
                    return i;
                },
            });
        },
        8807: function (t, e, n) {
            n.d(e, {
                B: function () {
                    return p;
                },
                H: function () {
                    return o;
                },
                I: function () {
                    return f;
                },
                a: function () {
                    return a;
                },
                b: function () {
                    return u;
                },
            });
            var r = n(5991),
                i = n(75291),
                l = n(66038);
            let o = () => (0, r.h)(r.H, {class: 'atomic-hidden'}),
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
            let d = 'data-atomic-rendered',
                h = 'data-atomic-loaded';
            function f({forceUpdate: t} = {}) {
                return (e, n) => {
                    let {
                            componentWillLoad: f,
                            render: p,
                            componentDidRender: b,
                            componentDidLoad: m,
                            disconnectedCallback: v,
                        } = e,
                        g = () => {};
                    if ('bindings' !== n)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${n}"`,
                            e,
                        );
                    ((e.componentWillLoad = function () {
                        let e = (0, r.g)(this);
                        (e.setAttribute(d, 'false'), e.setAttribute(h, 'false'));
                        let n = (0, i.b)(a, (e) => {
                            this.bindings = e;
                            let n = () => (0, r.f)(this);
                            (this.bindings.i18n.on('languageChanged', n),
                                (g = () => this.bindings.i18n.off('languageChanged', n)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, r.f)(this)) : (0, r.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((e.dispatchEvent(n), !(0, l.c)(e, s.join(', ')))) {
                            this.error = new c(e.nodeName.toLowerCase());
                            return;
                        }
                        return f && f.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, r.h)('atomic-component-error', {element: (0, r.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, r.g)(this).setAttribute(d, 'true'), p && p.call(this))
                                  : (0, r.h)(o, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, r.g)(this);
                            (t.setAttribute(d, 'false'), t.setAttribute(h, 'false'), g(), v && v.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, r.g)(this);
                            'false' !== t.getAttribute(d) &&
                                (b && b.call(this),
                                'false' === t.getAttribute(h) &&
                                    (t.setAttribute(h, 'true'), u((0, r.g)(this)), m && m.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function p(t, e) {
                return (n, i) => {
                    let {disconnectedCallback: l, initialize: o} = n;
                    ((n.initialize = function () {
                        return (o && o.call(this), o)
                            ? this[t]
                                ? (null == e ? void 0 : e.onUpdateCallbackMethod) && !this[e.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${e.onUpdateCallbackMethod}" is not defined`,
                                          n,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[i] = this[t].state),
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
                            ((0, r.g)(this).isConnected ||
                                null === (t = this.unsubscribeController) ||
                                void 0 === t ||
                                t.call(this),
                                l && l.call(this));
                        }));
                };
            }
        },
        53630: function (t, e, n) {
            n.d(e, {
                F: function () {
                    return l;
                },
                a: function () {
                    return o;
                },
            });
            var r = n(5991),
                i = n(75291);
            function l() {
                return (t, e) => {
                    let {componentWillRender: n} = t;
                    t.componentWillRender = function () {
                        let t = (0, r.g)(this),
                            l = (0, i.b)('atomic/resolveFoldedResultList', (t) => {
                                this[e] = t;
                            }),
                            o = t.dispatchEvent(l);
                        if (!o) return n && n.call(this);
                    };
                };
            }
            function o() {
                return (t, e) => {
                    let {componentWillRender: n} = t;
                    t.componentWillRender = function () {
                        let t = (0, r.g)(this),
                            l = (0, i.b)('atomic/resolveFoldedResultList', (t) => {
                                null == t ||
                                    t.subscribe(() => {
                                        this[e] = t.state;
                                    });
                            }),
                            o = t.dispatchEvent(l);
                        if (!o) return n && n.call(this);
                    };
                };
            }
        },
        18043: function (t, e, n) {
            n.d(e, {
                C: function () {
                    return d;
                },
                I: function () {
                    return a;
                },
                R: function () {
                    return o;
                },
                a: function () {
                    return h;
                },
            });
            var r = n(5991),
                i = n(75291);
            n(66038);
            class l extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of an "atomic-result" element.`);
                }
            }
            function o(t = {folded: !1}) {
                return (e, n) => {
                    let {connectedCallback: o, componentWillRender: a, render: c} = e;
                    ((e.connectedCallback = function () {
                        let e = (0, r.g)(this),
                            a = (0, i.b)(s, (e) => {
                                t.folded
                                    ? u(e)
                                        ? (this[n] = e)
                                        : (this[n] = {children: [], result: e})
                                    : (this[n] = u(e) ? e.result : e);
                            }),
                            c = e.dispatchEvent(a);
                        if (c) {
                            this.error = new l(e.nodeName.toLowerCase());
                            return;
                        }
                        return o && o.call(this);
                    }),
                        (e.componentWillRender = function () {
                            if (!this.error) return a && a.call(this);
                        }),
                        (e.render = function () {
                            if (this.error) {
                                let t = (0, r.g)(this);
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
            function a() {
                return (t, e) => {
                    let {connectedCallback: n} = t;
                    t.connectedCallback = function () {
                        let t = (0, r.g)(this),
                            l = (0, i.b)(c, (t) => {
                                this[e] = t;
                            });
                        return (t.dispatchEvent(l), n && n.call(this));
                    };
                };
            }
            let s = 'atomic/resolveResult',
                c = 'atomic/resolveInteractiveResult';
            function u(t) {
                return 'children' in t;
            }
            function d() {
                return (t, e) => {
                    let {componentWillRender: n} = t;
                    t.componentWillRender = function () {
                        let t = (0, r.g)(this),
                            l = (0, i.b)('atomic/resolveChildTemplates', (t) => {
                                this.resultTemplateProvider || (this[e] = t);
                            }),
                            o = t.dispatchEvent(l);
                        if (o) {
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
                        let t = (0, r.g)(this),
                            l = (0, i.b)('atomic/resolveResultDisplayConfig', (t) => {
                                this[e] = t;
                            }),
                            o = t.dispatchEvent(l);
                        if (!o) return n && n.call(this);
                    };
                };
            }
        },
        60375: function (t, e, n) {
            n.d(e, {
                c: function () {
                    return o;
                },
            });
            var r = n(75291);
            let i = 'ripple';
            function l(t) {
                'static' === getComputedStyle(t).position && t.classList.add('ripple-relative');
            }
            function o(t, e) {
                var n;
                let r = null !== (n = e.parent) && void 0 !== n ? n : t.currentTarget,
                    o = r.getElementsByClassName(i)[0];
                (o && o.remove(), r.classList.add('ripple-parent'), l(r), Array.from(r.children).forEach(l));
                let s = document.createElement('span');
                (s.classList.add(i), (s.style.backgroundColor = `var(--atomic-${e.color})`), s.setAttribute('part', i));
                let c = Math.max(r.clientWidth, r.clientHeight),
                    u = c / 2,
                    d = 129.21 * Math.cbrt(u),
                    {top: h, left: f} = r.getBoundingClientRect();
                ((s.style.width = s.style.height = `${c}px`),
                    (s.style.left = `${t.clientX - (f + u)}px`),
                    (s.style.top = `${t.clientY - (h + u)}px`),
                    s.style.setProperty('--animation-duration', `${d}ms`),
                    r.prepend(s),
                    a(s, d));
            }
            async function a(t, e) {
                ((0, r.l)(t, 'animationend', () => {
                    t && t.remove();
                }),
                    setTimeout(() => (null == t ? void 0 : t.remove()), e + 0.1 * e));
            }
        },
    },
]);
