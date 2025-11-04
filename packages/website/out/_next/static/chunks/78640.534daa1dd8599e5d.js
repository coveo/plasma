'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [78640],
    {
        78640: function (e, t, i) {
            (i.r(t),
                i.d(t, {
                    atomic_smart_snippet_source: function () {
                        return l;
                    },
                }));
            var n = i(5991),
                o = i(8807),
                r = i(31257);
            (i(66038), i(87856));
            let l = class {
                constructor(e) {
                    ((0, n.r)(this, e),
                        (this.selectSource = (0, n.c)(this, 'selectSource', 7)),
                        (this.beginDelayedSelectSource = (0, n.c)(this, 'beginDelayedSelectSource', 7)),
                        (this.cancelPendingSelectSource = (0, n.c)(this, 'cancelPendingSelectSource', 7)));
                }
                resolveResult(e) {
                    (e.preventDefault(), e.stopPropagation(), this.source && e.detail(this.source));
                }
                render() {
                    return (0, n.h)(
                        n.H,
                        null,
                        (0, n.h)(
                            r.L,
                            {
                                title: this.source.clickUri,
                                href: this.source.clickUri,
                                className: 'block',
                                part: 'source-url',
                                attributes: this.anchorAttributes,
                                onSelect: () => this.selectSource.emit(),
                                onBeginDelayedSelect: () => this.beginDelayedSelectSource.emit(),
                                onCancelPendingSelect: () => this.cancelPendingSelectSource.emit(),
                            },
                            this.source.clickUri,
                        ),
                        (0, n.h)(
                            r.L,
                            {
                                title: this.source.title,
                                href: this.source.clickUri,
                                attributes: this.anchorAttributes,
                                className: 'block',
                                part: 'source-title',
                                onSelect: () => this.selectSource.emit(),
                                onBeginDelayedSelect: () => this.beginDelayedSelectSource.emit(),
                                onCancelPendingSelect: () => this.cancelPendingSelectSource.emit(),
                            },
                            (0, n.h)('atomic-result-text', {
                                field: 'title',
                                default: 'no-title',
                                key: this.source.uniqueId,
                            }),
                        ),
                    );
                }
            };
            !(function (e, t, i, n) {
                var o,
                    r = arguments.length,
                    l = r < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    l = Reflect.decorate(e, t, i, n);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (o = e[c]) && (l = (r < 3 ? o(l) : r > 3 ? o(t, i, l) : o(t, i)) || l);
                r > 3 && l && Object.defineProperty(t, i, l);
            })([(0, o.I)()], l.prototype, 'bindings', void 0);
        },
        75291: function (e, t, i) {
            function n(e, t) {
                return new CustomEvent(e, {detail: t, bubbles: !0, cancelable: !0, composed: !0});
            }
            function o(e, t, i, n) {
                let o = (r) => {
                    (e.removeEventListener(t, o, n), 'object' == typeof i ? i.handleEvent.call(e, r) : i.call(e, r));
                };
                e.addEventListener(t, o, n);
            }
            i.d(t, {
                b: function () {
                    return n;
                },
                l: function () {
                    return o;
                },
            });
        },
        8807: function (e, t, i) {
            i.d(t, {
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
                    return c;
                },
                b: function () {
                    return u;
                },
            });
            var n = i(5991),
                o = i(75291),
                r = i(66038);
            let l = () => (0, n.h)(n.H, {class: 'atomic-hidden'}),
                c = 'atomic/initializeComponent',
                s = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class a extends Error {
                constructor(e) {
                    super(`The "${e}" element must be the child of the following elements: ${s.join(', ')}`);
                }
            }
            function u(e) {
                if (e.shadowRoot) {
                    if (window.applyFocusVisiblePolyfill) {
                        window.applyFocusVisiblePolyfill(e.shadowRoot);
                        return;
                    }
                    window.addEventListener(
                        'focus-visible-polyfill-ready',
                        () => {
                            var t;
                            return null === (t = window.applyFocusVisiblePolyfill) || void 0 === t
                                ? void 0
                                : t.call(window, e.shadowRoot);
                        },
                        {once: !0},
                    );
                }
            }
            let d = 'data-atomic-rendered',
                h = 'data-atomic-loaded';
            function f({forceUpdate: e} = {}) {
                return (t, i) => {
                    let {
                            componentWillLoad: f,
                            render: b,
                            componentDidRender: p,
                            componentDidLoad: g,
                            disconnectedCallback: m,
                        } = t,
                        v = () => {};
                    if ('bindings' !== i)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${i}"`,
                            t,
                        );
                    ((t.componentWillLoad = function () {
                        let t = (0, n.g)(this);
                        (t.setAttribute(d, 'false'), t.setAttribute(h, 'false'));
                        let i = (0, o.b)(c, (t) => {
                            this.bindings = t;
                            let i = () => (0, n.f)(this);
                            (this.bindings.i18n.on('languageChanged', i),
                                (v = () => this.bindings.i18n.off('languageChanged', i)));
                            try {
                                this.initialize ? (this.initialize(), e && (0, n.f)(this)) : (0, n.f)(this);
                            } catch (e) {
                                this.error = e;
                            }
                        });
                        if ((t.dispatchEvent(i), !(0, r.c)(t, s.join(', ')))) {
                            this.error = new a(t.nodeName.toLowerCase());
                            return;
                        }
                        return f && f.call(this);
                    }),
                        (t.render = function () {
                            return this.error
                                ? (0, n.h)('atomic-component-error', {element: (0, n.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, n.g)(this).setAttribute(d, 'true'), b && b.call(this))
                                  : (0, n.h)(l, null);
                        }),
                        (t.disconnectedCallback = function () {
                            let e = (0, n.g)(this);
                            (e.setAttribute(d, 'false'), e.setAttribute(h, 'false'), v(), m && m.call(this));
                        }),
                        (t.componentDidRender = function () {
                            let e = (0, n.g)(this);
                            'false' !== e.getAttribute(d) &&
                                (p && p.call(this),
                                'false' === e.getAttribute(h) &&
                                    (e.setAttribute(h, 'true'), u((0, n.g)(this)), g && g.call(this)));
                        }),
                        (t.componentDidLoad = function () {}));
                };
            }
            function b(e, t) {
                return (i, o) => {
                    let {disconnectedCallback: r, initialize: l} = i;
                    ((i.initialize = function () {
                        return (l && l.call(this), l)
                            ? this[e]
                                ? (null == t ? void 0 : t.onUpdateCallbackMethod) && !this[t.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${t.onUpdateCallbackMethod}" is not defined`,
                                          i,
                                      )
                                    : void (this.unsubscribeController = this[e].subscribe(() => {
                                          ((this[o] = this[e].state),
                                              (null == t ? void 0 : t.onUpdateCallbackMethod) &&
                                                  this[t.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${e}`,
                                  i,
                              );
                    }),
                        (i.disconnectedCallback = function () {
                            var e;
                            ((0, n.g)(this).isConnected ||
                                null === (e = this.unsubscribeController) ||
                                void 0 === e ||
                                e.call(this),
                                r && r.call(this));
                        }));
                };
            }
        },
        31257: function (e, t, i) {
            i.d(t, {
                L: function () {
                    return l;
                },
                b: function () {
                    return r;
                },
            });
            var n = i(5991),
                o = i(2995);
            let r = (e, {onSelect: t, onBeginDelayedSelect: i, onCancelPendingSelect: n, stopPropagation: o = !0}) => {
                    let r = (e, t) => {
                        (o && e.stopPropagation(), t());
                    };
                    (['click', 'contextmenu', 'mousedown', 'mouseup'].forEach((i) =>
                        e.addEventListener(i, (e) => r(e, t)),
                    ),
                        e.addEventListener('touchstart', (e) => r(e, i), {passive: !0}),
                        e.addEventListener('touchend', (e) => r(e, n), {passive: !0}));
                },
                l = (
                    {
                        href: e,
                        className: t,
                        part: i,
                        title: l,
                        onSelect: c,
                        onBeginDelayedSelect: s,
                        onCancelPendingSelect: a,
                        ref: u,
                        attributes: d,
                        tabIndex: h,
                        ariaHidden: f,
                        rel: b,
                        stopPropagation: p = !0,
                        target: g = '_self',
                    },
                    m,
                ) =>
                    (0, n.h)(
                        'a',
                        {
                            class: t,
                            part: i,
                            href: (0, o.f)(e),
                            target: g,
                            title: l,
                            rel: b,
                            ref: (e) => {
                                (u && u(e),
                                    e &&
                                        (r(e, {
                                            onSelect: c,
                                            onBeginDelayedSelect: s,
                                            onCancelPendingSelect: a,
                                            stopPropagation: p,
                                        }),
                                        (null == d ? void 0 : d.length) &&
                                            [...d].forEach(({nodeName: t, nodeValue: i}) => {
                                                e.setAttribute(t, i);
                                            }),
                                        f && e.setAttribute('aria-hidden', 'true')));
                            },
                            tabIndex: h,
                        },
                        m,
                    );
        },
        2995: function (e, t, i) {
            i.d(t, {
                f: function () {
                    return n;
                },
            });
            function n(e) {
                let t = /^(https?|ftp|file|mailto|tel|sip):/i.test(e),
                    i = /^\//.test(e);
                return t || i ? e : '';
            }
        },
    },
]);
