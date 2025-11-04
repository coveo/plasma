'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [52415],
    {
        80421: function (t, e, n) {
            n.d(e, {
                A: function () {
                    return a;
                },
                F: function () {
                    return l;
                },
                g: function () {
                    return o;
                },
            });
            var i = n(75291),
                r = n(66038);
            function a(t, e = !1) {
                function n() {
                    let t = (0, i.b)('atomic/accessibility/findAriaLive', {});
                    document.dispatchEvent(t);
                    let {element: e} = t.detail;
                    return e;
                }
                return (i, r) => {
                    let {componentWillRender: a} = i;
                    (Object.defineProperty(i, r, {
                        set: (i) => {
                            var r;
                            null === (r = n()) || void 0 === r || r.updateMessage(t, i, e);
                        },
                    }),
                        (i.componentWillRender = function () {
                            var i;
                            (a && a.call(this), null === (i = n()) || void 0 === i || i.registerRegion(t, e));
                        }));
                };
            }
            function l() {
                return (t, e) => {
                    let {componentWillLoad: n} = t;
                    t.componentWillLoad = function () {
                        let t, i;
                        n && n.call(this);
                        let {componentDidRender: a} = this,
                            l = !1,
                            o = !1,
                            s = null;
                        this.componentDidRender = function () {
                            if (
                                (a && a.call(this),
                                this.bindings &&
                                    l &&
                                    this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t &&
                                    ((l = !1), i))
                            ) {
                                let t = i;
                                (0, r.d)().then(() => {
                                    (t.focus(), null == s || s());
                                });
                            }
                        };
                        let c = {
                            setTarget: (t) => {
                                t && ((i = t), o && ((o = !1), c.focus()));
                            },
                            focus: async () => {
                                (await (0, r.d)(), null == i || i.focus(), null == s || s());
                            },
                            focusAfterSearch: () => (
                                (t = this.bindings.store.getUniqueIDFromEngine(this.bindings.engine)),
                                (l = !0),
                                new Promise((t) => (s = t))
                            ),
                            focusOnNextTarget: () => ((o = !0), new Promise((t) => (s = t))),
                            disableForCurrentSearch: () =>
                                this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t && (l = !1),
                        };
                        this[e] = c;
                    };
                };
            }
            function o(t) {
                var e;
                return null !==
                    (e = (function* t(e) {
                        (function (t) {
                            if ('-1' === t.getAttribute('tabindex')) return !1;
                            if (t.hasAttribute('tabindex') || 'true' === t.getAttribute('contentEditable')) return !0;
                            switch (t.tagName) {
                                case 'A':
                                case 'AREA':
                                    return t.hasAttribute('href');
                                case 'INPUT':
                                case 'SELECT':
                                case 'TEXTAREA':
                                case 'BUTTON':
                                    return !t.hasAttribute('disabled');
                                case 'IFRAME':
                                    return !0;
                                default:
                                    return !1;
                            }
                        })(e) && (yield e);
                        let n = Array.from(e.children);
                        for (let i of (e instanceof HTMLSlotElement
                            ? (n = e.assignedElements())
                            : e.shadowRoot && n.push(...Array.from(e.shadowRoot.children)),
                        n))
                            yield* t(i);
                    })(t).next().value) && void 0 !== e
                    ? e
                    : null;
            }
        },
        51343: function (t, e, n) {
            n.d(e, {
                A: function () {
                    return i;
                },
            });
            let i =
                '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.5 4.8-4.3 4.5c-.3.4-.3.9 0 1.3l4.3 4.6c.3.4.9.4 1.2 0s.3-.9 0-1.3l-3.7-4 3.7-3.9c.3-.4.3-.9 0-1.3-.3-.3-.9-.3-1.2.1z"/></svg>';
        },
        27626: function (t, e, n) {
            n.d(e, {
                A: function () {
                    return i;
                },
            });
            let i =
                '<svg viewBox="0 0 20 20"><path d="m8.5 15.2 4.3-4.6c.3-.4.3-.9 0-1.3l-4.4-4.5c-.3-.4-.9-.4-1.2 0s-.3.9 0 1.3l3.7 4-3.7 3.9c-.3.4-.3.9 0 1.3.4.3 1 .3 1.3-.1z"/></svg>';
        },
        2108: function (t, e, n) {
            n.d(e, {
                B: function () {
                    return l;
                },
            });
            var i = n(5991),
                r = n(60375),
                a = n(35126);
            let l = (t, e) => {
                let n = (0, a.g)(t.style),
                    l = (0, a.a)(t.style),
                    o = {
                        class: t.class ? `${l} ${t.class}` : l,
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
                return (0, i.h)(
                    'button',
                    {...o, onMouseDown: (t) => (0, r.c)(t, {color: n})},
                    t.text ? (0, i.h)('span', {class: 'truncate'}, t.text) : null,
                    e,
                );
            };
        },
        35126: function (t, e, n) {
            function i(t) {
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
            function r(t) {
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
                    return i;
                },
                g: function () {
                    return r;
                },
            });
        },
        75291: function (t, e, n) {
            function i(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function r(t, e, n, i) {
                let r = (a) => {
                    (t.removeEventListener(e, r, i), 'object' == typeof n ? n.handleEvent.call(t, a) : n.call(t, a));
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
            n.d(e, {
                B: function () {
                    return f;
                },
                H: function () {
                    return l;
                },
                I: function () {
                    return p;
                },
                a: function () {
                    return o;
                },
                b: function () {
                    return u;
                },
            });
            var i = n(5991),
                r = n(75291),
                a = n(66038);
            let l = () => (0, i.h)(i.H, {class: 'atomic-hidden'}),
                o = 'atomic/initializeComponent',
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
            function p({forceUpdate: t} = {}) {
                return (e, n) => {
                    let {
                            componentWillLoad: p,
                            render: f,
                            componentDidRender: b,
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
                        (e.setAttribute(d, 'false'), e.setAttribute(h, 'false'));
                        let n = (0, r.b)(o, (e) => {
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
                        if ((e.dispatchEvent(n), !(0, a.c)(e, s.join(', ')))) {
                            this.error = new c(e.nodeName.toLowerCase());
                            return;
                        }
                        return p && p.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(d, 'true'), f && f.call(this))
                                  : (0, i.h)(l, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, i.g)(this);
                            (t.setAttribute(d, 'false'), t.setAttribute(h, 'false'), v(), m && m.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, i.g)(this);
                            'false' !== t.getAttribute(d) &&
                                (b && b.call(this),
                                'false' === t.getAttribute(h) &&
                                    (t.setAttribute(h, 'true'), u((0, i.g)(this)), g && g.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function f(t, e) {
                return (n, r) => {
                    let {disconnectedCallback: a, initialize: l} = n;
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
                                a && a.call(this));
                        }));
                };
            }
        },
        61790: function (t, e, n) {
            n.d(e, {
                P: function () {
                    return u;
                },
            });
            var i = n(5991),
                r = n(51343),
                a = n(27626),
                l = n(66038),
                o = n(2108),
                s = n(8807),
                c = n(12634);
            let u = (t) => {
                let e = (0, l.r)('atomic-insight-pager-'),
                    n = async () => {
                        var e, n;
                        (await (null === (e = t.bindings.store.state.resultList) || void 0 === e
                            ? void 0
                            : e.focusOnFirstResultAfterNextSearch()),
                            null === (n = t.eventEmitter) || void 0 === n || n.emit());
                    },
                    u = async (e) => {
                        (t.pager.selectPage(e), n());
                    },
                    d = t.nextButtonIcon || a.A,
                    h = t.previousButtonIcon || r.A,
                    p = 'w-5 align-middle',
                    f = (n) => {
                        var r;
                        let a = t.pager.isCurrentPage(n),
                            l = ['page-button'];
                        return (
                            a && l.push('active-page-button'),
                            (0, i.h)(c.R, {
                                key: n,
                                groupName: e,
                                style: 'outline-neutral',
                                checked: a,
                                ariaCurrent: a ? 'page' : 'false',
                                ariaLabel: t.bindings.i18n.t('page-number', {page: n}),
                                onChecked: () => u(n),
                                class: 'btn-page focus-visible:bg-neutral-light p-1 min-w-[2.5rem] min-h-[2.5rem]',
                                part: l.join(' '),
                                text: n.toLocaleString(t.bindings.i18n.language),
                                ref: a ? (null === (r = t.activePage) || void 0 === r ? void 0 : r.setTarget) : void 0,
                            })
                        );
                    };
                return t.searchStatusState.hasError
                    ? (0, i.h)(s.H, null)
                    : t.bindings.store.isAppLoaded() && t.searchStatusState.hasResults
                      ? (0, i.h)(
                            'nav',
                            {'aria-label': t.bindings.i18n.t('pagination')},
                            (0, i.h)(
                                'div',
                                {part: 'buttons', class: 'flex gap-2 flex-wrap'},
                                (0, i.h)(
                                    o.B,
                                    {
                                        style: 'outline-primary',
                                        ariaLabel: t.bindings.i18n.t('previous'),
                                        onClick: () => {
                                            (t.pager.previousPage(), n());
                                        },
                                        part: 'previous-button',
                                        disabled: !t.pagerState.hasPreviousPage,
                                        class: 'p-1 min-w-[2.5rem] min-h-[2.5rem]',
                                    },
                                    (0, i.h)('atomic-icon', {icon: h, part: 'previous-button-icon', class: p}),
                                ),
                                (() => {
                                    let e = t.pagerState.currentPages;
                                    return (0, i.h)(
                                        'div',
                                        {part: 'page-buttons', role: 'radiogroup', class: 'contents'},
                                        e.map(f),
                                    );
                                })(),
                                (0, i.h)(
                                    o.B,
                                    {
                                        style: 'outline-primary',
                                        ariaLabel: t.bindings.i18n.t('next'),
                                        onClick: () => {
                                            (t.pager.nextPage(), n());
                                        },
                                        part: 'next-button',
                                        disabled: !t.pagerState.hasNextPage,
                                        class: 'p-1 min-w-[2.5rem] min-h-[2.5rem]',
                                    },
                                    (0, i.h)('atomic-icon', {icon: d, part: 'next-button-icon', class: p}),
                                ),
                            ),
                        )
                      : void 0;
            };
        },
        12634: function (t, e, n) {
            n.d(e, {
                R: function () {
                    return l;
                },
            });
            var i = n(5991),
                r = n(60375),
                a = n(35126);
            let l = (t) => {
                var e;
                let n;
                let l = ['btn-radio'];
                if (t.style) {
                    let e = (0, a.g)(t.style);
                    (l.push((0, a.a)(t.style)), (n = (t) => (0, r.c)(t, {color: e})));
                }
                (t.checked && l.push('selected'), t.class && l.push(t.class));
                let o = {
                    name: t.groupName,
                    key: t.key,
                    checked: t.checked,
                    class: l.join(' '),
                    part: t.part,
                    'aria-label': null !== (e = t.ariaLabel) && void 0 !== e ? e : t.text,
                    'aria-current': t.ariaCurrent,
                    value: t.text,
                    ref: t.ref,
                };
                return (0, i.h)('input', {
                    type: 'radio',
                    onChange: (e) => {
                        var n;
                        return (
                            e.currentTarget.checked && (null === (n = t.onChecked) || void 0 === n ? void 0 : n.call(t))
                        );
                    },
                    onMouseDown: n,
                    ...o,
                });
            };
        },
        60375: function (t, e, n) {
            n.d(e, {
                c: function () {
                    return l;
                },
            });
            var i = n(75291);
            let r = 'ripple';
            function a(t) {
                'static' === getComputedStyle(t).position && t.classList.add('ripple-relative');
            }
            function l(t, e) {
                var n;
                let i = null !== (n = e.parent) && void 0 !== n ? n : t.currentTarget,
                    l = i.getElementsByClassName(r)[0];
                (l && l.remove(), i.classList.add('ripple-parent'), a(i), Array.from(i.children).forEach(a));
                let s = document.createElement('span');
                (s.classList.add(r), (s.style.backgroundColor = `var(--atomic-${e.color})`), s.setAttribute('part', r));
                let c = Math.max(i.clientWidth, i.clientHeight),
                    u = c / 2,
                    d = 129.21 * Math.cbrt(u),
                    {top: h, left: p} = i.getBoundingClientRect();
                ((s.style.width = s.style.height = `${c}px`),
                    (s.style.left = `${t.clientX - (p + u)}px`),
                    (s.style.top = `${t.clientY - (h + u)}px`),
                    s.style.setProperty('--animation-duration', `${d}ms`),
                    i.prepend(s),
                    o(s, d));
            }
            async function o(t, e) {
                ((0, i.l)(t, 'animationend', () => {
                    t && t.remove();
                }),
                    setTimeout(() => (null == t ? void 0 : t.remove()), e + 0.1 * e));
            }
        },
    },
]);
