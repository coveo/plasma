'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [33638],
    {
        80421: function (t, e, n) {
            n.d(e, {
                A: function () {
                    return a;
                },
                F: function () {
                    return o;
                },
                g: function () {
                    return s;
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
            function o() {
                return (t, e) => {
                    let {componentWillLoad: n} = t;
                    t.componentWillLoad = function () {
                        let t, i;
                        n && n.call(this);
                        let {componentDidRender: a} = this,
                            o = !1,
                            s = !1,
                            l = null;
                        this.componentDidRender = function () {
                            if (
                                (a && a.call(this),
                                this.bindings &&
                                    o &&
                                    this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t &&
                                    ((o = !1), i))
                            ) {
                                let t = i;
                                (0, r.d)().then(() => {
                                    (t.focus(), null == l || l());
                                });
                            }
                        };
                        let u = {
                            setTarget: (t) => {
                                t && ((i = t), s && ((s = !1), u.focus()));
                            },
                            focus: async () => {
                                (await (0, r.d)(), null == i || i.focus(), null == l || l());
                            },
                            focusAfterSearch: () => (
                                (t = this.bindings.store.getUniqueIDFromEngine(this.bindings.engine)),
                                (o = !0),
                                new Promise((t) => (l = t))
                            ),
                            focusOnNextTarget: () => ((s = !0), new Promise((t) => (l = t))),
                            disableForCurrentSearch: () =>
                                this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t && (o = !1),
                        };
                        this[e] = u;
                    };
                };
            }
            function s(t) {
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
        2108: function (t, e, n) {
            n.d(e, {
                B: function () {
                    return o;
                },
            });
            var i = n(5991),
                r = n(60375),
                a = n(35126);
            let o = (t, e) => {
                let n = (0, a.g)(t.style),
                    o = (0, a.a)(t.style),
                    s = {
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
                return (0, i.h)(
                    'button',
                    {...s, onMouseDown: (t) => (0, r.c)(t, {color: n})},
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
        92695: function (t, e, n) {
            function i() {
                let t = /iPad|iPhone|iPod/.test(navigator.userAgent),
                    e = navigator.userAgent.includes('Macintosh'),
                    n = navigator.maxTouchPoints >= 1;
                return (
                    t ||
                    (e &&
                        (n ||
                            (() => {
                                let t = new Audio();
                                return ((t.volume = 0.5), 1 === t.volume);
                            })()))
                );
            }
            function r() {
                return navigator.platform.startsWith('Mac');
            }
            function a() {
                return window.matchMedia('(any-hover: hover)').matches;
            }
            n.d(e, {
                a: function () {
                    return i;
                },
                h: function () {
                    return a;
                },
                i: function () {
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
                    return g;
                },
                H: function () {
                    return o;
                },
                I: function () {
                    return p;
                },
                a: function () {
                    return s;
                },
                b: function () {
                    return c;
                },
            });
            var i = n(5991),
                r = n(75291),
                a = n(66038);
            let o = () => (0, i.h)(i.H, {class: 'atomic-hidden'}),
                s = 'atomic/initializeComponent',
                l = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class u extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of the following elements: ${l.join(', ')}`);
                }
            }
            function c(t) {
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
                            render: g,
                            componentDidRender: f,
                            componentDidLoad: b,
                            disconnectedCallback: v,
                        } = e,
                        m = () => {};
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
                                (m = () => this.bindings.i18n.off('languageChanged', n)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, i.f)(this)) : (0, i.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((e.dispatchEvent(n), !(0, a.c)(e, l.join(', ')))) {
                            this.error = new u(e.nodeName.toLowerCase());
                            return;
                        }
                        return p && p.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(d, 'true'), g && g.call(this))
                                  : (0, i.h)(o, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, i.g)(this);
                            (t.setAttribute(d, 'false'), t.setAttribute(h, 'false'), m(), v && v.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, i.g)(this);
                            'false' !== t.getAttribute(d) &&
                                (f && f.call(this),
                                'false' === t.getAttribute(h) &&
                                    (t.setAttribute(h, 'true'), c((0, i.g)(this)), b && b.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function g(t, e) {
                return (n, r) => {
                    let {disconnectedCallback: a, initialize: o} = n;
                    ((n.initialize = function () {
                        return (o && o.call(this), o)
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
        60375: function (t, e, n) {
            n.d(e, {
                c: function () {
                    return o;
                },
            });
            var i = n(75291);
            let r = 'ripple';
            function a(t) {
                'static' === getComputedStyle(t).position && t.classList.add('ripple-relative');
            }
            function o(t, e) {
                var n;
                let i = null !== (n = e.parent) && void 0 !== n ? n : t.currentTarget,
                    o = i.getElementsByClassName(r)[0];
                (o && o.remove(), i.classList.add('ripple-parent'), a(i), Array.from(i.children).forEach(a));
                let l = document.createElement('span');
                (l.classList.add(r), (l.style.backgroundColor = `var(--atomic-${e.color})`), l.setAttribute('part', r));
                let u = Math.max(i.clientWidth, i.clientHeight),
                    c = u / 2,
                    d = 129.21 * Math.cbrt(c),
                    {top: h, left: p} = i.getBoundingClientRect();
                ((l.style.width = l.style.height = `${u}px`),
                    (l.style.left = `${t.clientX - (p + c)}px`),
                    (l.style.top = `${t.clientY - (h + c)}px`),
                    l.style.setProperty('--animation-duration', `${d}ms`),
                    i.prepend(l),
                    s(l, d));
            }
            async function s(t, e) {
                ((0, i.l)(t, 'animationend', () => {
                    t && t.remove();
                }),
                    setTimeout(() => (null == t ? void 0 : t.remove()), e + 0.1 * e));
            }
        },
        33290: function (t, e, n) {
            n.d(e, {
                S: function () {
                    return i;
                },
            });
            let i =
                '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6.4 0c3.5 0 6.4 2.9 6.4 6.4 0 1.4-.4 2.7-1.2 3.7l4 4c.4.4.4 1 .1 1.5l-.1.1c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-4-4c-1 .7-2.3 1.2-3.7 1.2-3.4-.1-6.3-3-6.3-6.5s2.9-6.4 6.4-6.4zm0 2.1c-2.3 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z"/></svg>';
        },
        12287: function (t, e, n) {
            n.d(e, {
                B: function () {
                    return f;
                },
                S: function () {
                    return o;
                },
                a: function () {
                    return u;
                },
                b: function () {
                    return s;
                },
                c: function () {
                    return g;
                },
                q: function () {
                    return c;
                },
            });
            var i = n(92695),
                r = n(5991),
                a = n(2108);
            class o {
                constructor(t) {
                    this.props = t;
                }
                get popupId() {
                    return `${this.props.id}-popup`;
                }
                get hasSuggestions() {
                    return !!this.props.getAllSuggestionElements().length;
                }
                get hasActiveDescendant() {
                    return '' !== this.props.getActiveDescendant();
                }
                get firstValue() {
                    var t;
                    return null === (t = this.props.getPanelInFocus()) || void 0 === t ? void 0 : t.firstElementChild;
                }
                get lastValue() {
                    var t;
                    return null === (t = this.props.getPanelInFocus()) || void 0 === t ? void 0 : t.lastElementChild;
                }
                get nextOrFirstValue() {
                    var t;
                    return (
                        (this.hasActiveDescendant &&
                            (null === (t = this.props.getActiveDescendantElement()) || void 0 === t
                                ? void 0
                                : t.nextElementSibling)) ||
                        this.firstValue
                    );
                }
                get previousOrLastValue() {
                    var t;
                    return (
                        (this.hasActiveDescendant &&
                            (null === (t = this.props.getActiveDescendantElement()) || void 0 === t
                                ? void 0
                                : t.previousElementSibling)) ||
                        this.lastValue
                    );
                }
                get showSuggestions() {
                    return this.hasSuggestions && this.props.getIsExpanded() && !this.props.getIsSearchDisabled();
                }
                scrollActiveDescendantIntoView() {
                    var t;
                    null === (t = this.props.getActiveDescendantElement()) ||
                        void 0 === t ||
                        t.scrollIntoView({block: 'nearest'});
                }
                focusNextValue() {
                    this.hasSuggestions && this.nextOrFirstValue && this.props.focusValue(this.nextOrFirstValue);
                }
                focusPreviousValue() {
                    this.hasSuggestions && this.previousOrLastValue && this.props.focusValue(this.previousOrLastValue);
                }
                updateQuery(t) {
                    this.props.bindings.engine.dispatch(
                        this.props.querySetActions.updateQuerySetQuery({id: this.props.id, query: t}),
                    );
                }
                onSuggestionClick(t, e) {
                    (t.onSelect && t.onSelect(e), t.query && this.props.clearSuggestions());
                }
                getSearchInputLabel(t = 0) {
                    return this.props.getIsSearchDisabled()
                        ? this.props.bindings.i18n.t('search-disabled', {length: t})
                        : (0, i.i)()
                          ? this.props.bindings.i18n.t('search-box-with-suggestions-macos')
                          : (0, i.h)()
                            ? this.props.bindings.i18n.t('search-box-with-suggestions')
                            : this.props.bindings.i18n.t('search-box-with-suggestions-keyboardless');
                }
            }
            let s = (t, e) =>
                    (0, r.h)(
                        'div',
                        {
                            part: 'wrapper',
                            class: `relative flex bg-background h-full w-full border border-neutral rounded-md focus-within:ring ${t.disabled ? 'focus-within:border-disabled focus-within:ring-neutral' : 'focus-within:border-primary focus-within:ring-ring-primary'}`,
                        },
                        e,
                    ),
                l = ({inputRef: t, bindings: e, onClick: n, ...i}) =>
                    (0, r.h)(
                        a.B,
                        {
                            style: 'text-transparent',
                            part: 'clear-button',
                            class: 'w-8 h-8 mr-1.5 text-neutral-dark',
                            onClick: () => {
                                (null == n || n(), null == t || t.focus());
                            },
                            ariaLabel: e.i18n.t('clear'),
                            ...i,
                        },
                        (0, r.h)('atomic-icon', {
                            part: 'clear-icon',
                            icon: '<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m18 2-1.8-2-7.1 7.1-7.1-7.1-2 2 7.1 7.1-7.1 7.1 2 1.8 7.1-6.9 7.1 6.9 1.8-1.8-6.9-7.1z"/></svg>',
                            class: 'w-3 h-3',
                        }),
                    ),
                u = ({
                    inputRef: t,
                    loading: e,
                    bindings: n,
                    onKeyDown: i,
                    value: a,
                    ariaLabel: o,
                    onClear: s,
                    popup: u,
                    ...c
                }) =>
                    (0, r.h)(
                        'div',
                        {class: 'grow flex items-center'},
                        (0, r.h)('input', {
                            part: 'input',
                            'aria-label': o,
                            placeholder: n.i18n.t('search'),
                            type: 'text',
                            class: 'h-full outline-none bg-transparent w-0 grow px-4 py-3.5 text-neutral-dark placeholder-neutral-dark text-lg',
                            onKeyDown: (t) => {
                                null == i || i(t);
                            },
                            ...(u && {
                                role: 'combobox',
                                autocomplete: 'off',
                                autocapitalize: 'off',
                                autocorrect: 'off',
                                'aria-activedescendant': u.activeDescendant,
                                'aria-expanded': `${u.hasSuggestions && u.expanded}`,
                                'aria-autocomplete': 'both',
                                'aria-haspopup': 'true',
                                'aria-controls': u.id,
                            }),
                            ...c,
                            value: a,
                        }),
                        e &&
                            (0, r.h)('span', {
                                part: 'loading',
                                class: 'loading w-5 h-5 rounded-full bg-gradient-to-r animate-spin mr-3 grid place-items-center',
                            }),
                        !e && a && (0, r.h)(l, {inputRef: t, bindings: n, onClick: () => s()}),
                    ),
                c = 'data-query';
            function d(t) {
                return t instanceof HTMLElement;
            }
            function h(t) {
                return d(t.content) ? (0, r.h)(r.F, null) : t.content;
            }
            function p(
                {bindings: t, id: e, suggestion: n, isSelected: r, side: a, index: o, lastIndex: s, isDoubleList: l},
                u,
            ) {
                let c;
                return {
                    id: e,
                    key: n.key,
                    part:
                        ((c = 'suggestion'),
                        r && (c += ' active-suggestion'),
                        n.query && (c += ' suggestion-with-query'),
                        n.part && (c += ` ${n.part}`),
                        c),
                    class: `flex px-4 min-h-[40px] items-center text-left text-neutral-dark hover:bg-neutral-light cursor-pointer ${r ? 'bg-neutral-light' : ''}`,
                    ref: (e) => {
                        e &&
                            (!(function ({renderedSuggestion: t, suggestion: e}) {
                                d(e.content) && t.replaceChildren(e.content);
                            })({renderedSuggestion: e, suggestion: n}),
                            e.setAttribute(
                                'aria-label',
                                (function ({
                                    bindings: t,
                                    renderedSuggestion: e,
                                    suggestion: n,
                                    side: r,
                                    index: a,
                                    lastIndex: o,
                                    isDoubleList: s,
                                    isButton: l,
                                }) {
                                    var u, c, d;
                                    let h =
                                            null !==
                                                (d =
                                                    null !==
                                                        (c =
                                                            null !== (u = n.ariaLabel) && void 0 !== u ? u : n.query) &&
                                                    void 0 !== c
                                                        ? c
                                                        : e.innerText) && void 0 !== d
                                                ? d
                                                : t.i18n.t('no-title'),
                                        p =
                                            (0, i.i)() && l
                                                ? t.i18n.t('search-suggestion-button', {
                                                      label: h,
                                                      interpolation: {escapeValue: !1},
                                                  })
                                                : h,
                                        g = a + 1,
                                        f = o + 1;
                                    return s
                                        ? t.i18n.t('search-suggestion-double-list', {
                                              label: p,
                                              position: g,
                                              count: f,
                                              side: t.i18n.t('left' === r ? 'left' : 'right'),
                                              interpolation: {escapeValue: !1},
                                          })
                                        : t.i18n.t('search-suggestion-single-list', {
                                              label: p,
                                              position: g,
                                              count: f,
                                              interpolation: {escapeValue: !1},
                                          });
                                })({
                                    bindings: t,
                                    renderedSuggestion: e,
                                    suggestion: n,
                                    side: a,
                                    index: o,
                                    lastIndex: s,
                                    isDoubleList: l,
                                    isButton: u,
                                }),
                            ));
                    },
                };
            }
            let g = (t) => (0, r.h)('span', {...p(t, !1)}, h(t.suggestion)),
                f = (t) =>
                    (0, r.h)(
                        'button',
                        {
                            ...p(t, !0),
                            onMouseDown: (t) => t.preventDefault(),
                            onClick: (e) => {
                                var n;
                                return null === (n = t.onClick) || void 0 === n ? void 0 : n.call(t, e);
                            },
                            onMouseOver: (e) => {
                                var n;
                                return null === (n = t.onMouseOver) || void 0 === n ? void 0 : n.call(t, e);
                            },
                            [c]: t.suggestion.query,
                        },
                        h(t.suggestion),
                    );
        },
        84230: function (t, e, n) {
            n.d(e, {
                a: function () {
                    return l;
                },
                d: function () {
                    return o;
                },
                e: function () {
                    return s;
                },
            });
            var i = n(75291),
                r = n(66038);
            let a = ['atomic-search-box', 'atomic-insight-search-box'],
                o = (t, e) => {
                    if (
                        (e.dispatchEvent((0, i.b)('atomic/searchBoxSuggestion/register', t)),
                        !(0, r.c)(e, a.join(', ')))
                    )
                        throw Error(
                            `The "${e.nodeName.toLowerCase()}" component was not handled, as it is not a child of the following elements: ${a.join(', ')}`,
                        );
                };
            function s(t) {
                return !t.query;
            }
            function l(t) {
                return !!t.query;
            }
        },
    },
]);
