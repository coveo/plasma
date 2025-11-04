'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1459],
    {
        2108: function (e, t, n) {
            n.d(t, {
                B: function () {
                    return l;
                },
            });
            var i = n(5991),
                r = n(60375),
                a = n(35126);
            let l = (e, t) => {
                let n = (0, a.g)(e.style),
                    l = (0, a.a)(e.style),
                    o = {
                        class: e.class ? `${l} ${e.class}` : l,
                        part: e.part,
                        onClick: e.onClick,
                        title: e.title,
                        type: e.type,
                        role: e.role,
                        'aria-label': e.ariaLabel,
                        'aria-expanded': e.ariaExpanded,
                        'aria-pressed': e.ariaPressed,
                        'aria-checked': e.ariaChecked,
                        'aria-current': e.ariaCurrent,
                        'aria-controls': e.ariaControls,
                        'aria-hidden': e.ariaHidden,
                        disabled: e.disabled,
                        ref(t) {
                            var n;
                            (e.form && (null == t || t.setAttribute('form', e.form)),
                                e.ariaHidden && (null == t || t.setAttribute('aria-hidden', e.ariaHidden)),
                                e.tabIndex && (null == t || t.setAttribute('tabindex', e.tabIndex)),
                                null === (n = e.ref) || void 0 === n || n.call(e, t));
                        },
                    };
                return (0, i.h)(
                    'button',
                    {...o, onMouseDown: (e) => (0, r.c)(e, {color: n})},
                    e.text ? (0, i.h)('span', {class: 'truncate'}, e.text) : null,
                    t,
                );
            };
        },
        35126: function (e, t, n) {
            function i(e) {
                switch (e) {
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
            function r(e) {
                switch (e) {
                    case 'primary':
                        return 'primary';
                    case 'text-transparent':
                        return 'neutral-light';
                    default:
                        return 'neutral';
                }
            }
            n.d(t, {
                a: function () {
                    return i;
                },
                g: function () {
                    return r;
                },
            });
        },
        75291: function (e, t, n) {
            function i(e, t) {
                return new CustomEvent(e, {detail: t, bubbles: !0, cancelable: !0, composed: !0});
            }
            function r(e, t, n, i) {
                let r = (a) => {
                    (e.removeEventListener(t, r, i), 'object' == typeof n ? n.handleEvent.call(e, a) : n.call(e, a));
                };
                e.addEventListener(t, r, i);
            }
            n.d(t, {
                b: function () {
                    return i;
                },
                l: function () {
                    return r;
                },
            });
        },
        9224: function (e, t, n) {
            n.d(t, {
                H: function () {
                    return r;
                },
            });
            var i = n(5991);
            let r = ({level: e, ...t}, n) => {
                let r = e > 0 && e <= 6 ? `h${e}` : 'div';
                return (0, i.h)(r, {...t}, n);
            };
        },
        8807: function (e, t, n) {
            n.d(t, {
                B: function () {
                    return f;
                },
                H: function () {
                    return l;
                },
                I: function () {
                    return h;
                },
                a: function () {
                    return o;
                },
                b: function () {
                    return d;
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
                constructor(e) {
                    super(`The "${e}" element must be the child of the following elements: ${s.join(', ')}`);
                }
            }
            function d(e) {
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
            let p = 'data-atomic-rendered',
                u = 'data-atomic-loaded';
            function h({forceUpdate: e} = {}) {
                return (t, n) => {
                    let {
                            componentWillLoad: h,
                            render: f,
                            componentDidRender: b,
                            componentDidLoad: g,
                            disconnectedCallback: m,
                        } = t,
                        k = () => {};
                    if ('bindings' !== n)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${n}"`,
                            t,
                        );
                    ((t.componentWillLoad = function () {
                        let t = (0, i.g)(this);
                        (t.setAttribute(p, 'false'), t.setAttribute(u, 'false'));
                        let n = (0, r.b)(o, (t) => {
                            this.bindings = t;
                            let n = () => (0, i.f)(this);
                            (this.bindings.i18n.on('languageChanged', n),
                                (k = () => this.bindings.i18n.off('languageChanged', n)));
                            try {
                                this.initialize ? (this.initialize(), e && (0, i.f)(this)) : (0, i.f)(this);
                            } catch (e) {
                                this.error = e;
                            }
                        });
                        if ((t.dispatchEvent(n), !(0, a.c)(t, s.join(', ')))) {
                            this.error = new c(t.nodeName.toLowerCase());
                            return;
                        }
                        return h && h.call(this);
                    }),
                        (t.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(p, 'true'), f && f.call(this))
                                  : (0, i.h)(l, null);
                        }),
                        (t.disconnectedCallback = function () {
                            let e = (0, i.g)(this);
                            (e.setAttribute(p, 'false'), e.setAttribute(u, 'false'), k(), m && m.call(this));
                        }),
                        (t.componentDidRender = function () {
                            let e = (0, i.g)(this);
                            'false' !== e.getAttribute(p) &&
                                (b && b.call(this),
                                'false' === e.getAttribute(u) &&
                                    (e.setAttribute(u, 'true'), d((0, i.g)(this)), g && g.call(this)));
                        }),
                        (t.componentDidLoad = function () {}));
                };
            }
            function f(e, t) {
                return (n, r) => {
                    let {disconnectedCallback: a, initialize: l} = n;
                    ((n.initialize = function () {
                        return (l && l.call(this), l)
                            ? this[e]
                                ? (null == t ? void 0 : t.onUpdateCallbackMethod) && !this[t.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${t.onUpdateCallbackMethod}" is not defined`,
                                          n,
                                      )
                                    : void (this.unsubscribeController = this[e].subscribe(() => {
                                          ((this[r] = this[e].state),
                                              (null == t ? void 0 : t.onUpdateCallbackMethod) &&
                                                  this[t.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${e}`,
                                  n,
                              );
                    }),
                        (n.disconnectedCallback = function () {
                            var e;
                            ((0, i.g)(this).isConnected ||
                                null === (e = this.unsubscribeController) ||
                                void 0 === e ||
                                e.call(this),
                                a && a.call(this));
                        }));
                };
            }
        },
        12634: function (e, t, n) {
            n.d(t, {
                R: function () {
                    return l;
                },
            });
            var i = n(5991),
                r = n(60375),
                a = n(35126);
            let l = (e) => {
                var t;
                let n;
                let l = ['btn-radio'];
                if (e.style) {
                    let t = (0, a.g)(e.style);
                    (l.push((0, a.a)(e.style)), (n = (e) => (0, r.c)(e, {color: t})));
                }
                (e.checked && l.push('selected'), e.class && l.push(e.class));
                let o = {
                    name: e.groupName,
                    key: e.key,
                    checked: e.checked,
                    class: l.join(' '),
                    part: e.part,
                    'aria-label': null !== (t = e.ariaLabel) && void 0 !== t ? t : e.text,
                    'aria-current': e.ariaCurrent,
                    value: e.text,
                    ref: e.ref,
                };
                return (0, i.h)('input', {
                    type: 'radio',
                    onChange: (t) => {
                        var n;
                        return (
                            t.currentTarget.checked && (null === (n = e.onChecked) || void 0 === n ? void 0 : n.call(e))
                        );
                    },
                    onMouseDown: n,
                    ...o,
                });
            };
        },
        60375: function (e, t, n) {
            n.d(t, {
                c: function () {
                    return l;
                },
            });
            var i = n(75291);
            let r = 'ripple';
            function a(e) {
                'static' === getComputedStyle(e).position && e.classList.add('ripple-relative');
            }
            function l(e, t) {
                var n;
                let i = null !== (n = t.parent) && void 0 !== n ? n : e.currentTarget,
                    l = i.getElementsByClassName(r)[0];
                (l && l.remove(), i.classList.add('ripple-parent'), a(i), Array.from(i.children).forEach(a));
                let s = document.createElement('span');
                (s.classList.add(r), (s.style.backgroundColor = `var(--atomic-${t.color})`), s.setAttribute('part', r));
                let c = Math.max(i.clientWidth, i.clientHeight),
                    d = c / 2,
                    p = 129.21 * Math.cbrt(d),
                    {top: u, left: h} = i.getBoundingClientRect();
                ((s.style.width = s.style.height = `${c}px`),
                    (s.style.left = `${e.clientX - (h + d)}px`),
                    (s.style.top = `${e.clientY - (u + d)}px`),
                    s.style.setProperty('--animation-duration', `${p}ms`),
                    i.prepend(s),
                    o(s, p));
            }
            async function o(e, t) {
                ((0, i.l)(e, 'animationend', () => {
                    e && e.remove();
                }),
                    setTimeout(() => (null == e ? void 0 : e.remove()), t + 0.1 * t));
            }
        },
        1459: function (e, t, n) {
            n.d(t, {
                S: function () {
                    return c;
                },
            });
            var i = n(5991),
                r = n(9224),
                a = n(8807),
                l = n(2108),
                o = n(12634);
            let s = (e) => {
                let t = 'feedback-inquiry-' + e.id,
                    n = 'feedback-thank-you-' + e.id,
                    r = 'feedback-options-' + e.id,
                    a = () =>
                        (0, i.h)(
                            'span',
                            {id: n, part: 'feedback-thank-you', class: 'inline-flex'},
                            e.i18n.t('smart-snippet-feedback-thanks'),
                        ),
                    s = () =>
                        (0, i.h)(
                            l.B,
                            {
                                part: 'feedback-explain-why-button',
                                style: 'text-primary',
                                onClick: () => e.onPressExplainWhy(),
                                ref: (t) => {
                                    var n;
                                    return null === (n = e.explainWhyRef) || void 0 === n ? void 0 : n.call(e, t);
                                },
                            },
                            e.i18n.t('smart-snippet-feedback-explain-why'),
                        );
                return (0, i.h)(
                    'div',
                    {part: 'feedback-banner', class: 'flex flex-wrap items-center gap-4 text-sm leading-4'},
                    (0, i.h)(
                        'div',
                        {
                            part: 'feedback-inquiry-and-buttons',
                            role: 'radiogroup',
                            'aria-labelledby': t,
                            class: 'inline-flex flex-wrap gap-4',
                        },
                        (0, i.h)(
                            () =>
                                (0, i.h)(
                                    'span',
                                    {id: t, part: 'feedback-inquiry', class: 'shrink-0'},
                                    e.i18n.t('smart-snippet-feedback-inquiry'),
                                ),
                            null,
                        ),
                        (0, i.h)(
                            () =>
                                (0, i.h)(
                                    'div',
                                    {part: 'feedback-buttons', class: 'flex gap-x-4'},
                                    (0, i.h)(
                                        'label',
                                        {
                                            part: 'feedback-like-button',
                                            class:
                                                'flex items-center gap-x-1.5 ' +
                                                (e.liked ? 'text-success' : 'cursor-pointer hover:underline'),
                                        },
                                        (0, i.h)('atomic-icon', {
                                            icon: '<svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="currentColor" stroke-linecap="round"/><path d="M4 7.07692L6 9L10 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                                            class: 'w-3.5',
                                        }),
                                        (0, i.h)(o.R, {
                                            groupName: r,
                                            text: e.i18n.t('yes'),
                                            checked: e.liked,
                                            onChecked: () => e.onLike(),
                                            class: 'text-inherit cursor-inherit',
                                        }),
                                    ),
                                    (0, i.h)(
                                        'label',
                                        {
                                            part: 'feedback-dislike-button',
                                            class:
                                                'flex items-center gap-x-1.5 ' +
                                                (e.disliked ? 'text-error' : 'cursor-pointer hover:underline'),
                                        },
                                        (0, i.h)('atomic-icon', {
                                            icon: '<svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="currentColor" stroke-linecap="round"/><path d="M5 9L9 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                                            class: 'w-3.5',
                                        }),
                                        (0, i.h)(o.R, {
                                            groupName: r,
                                            text: e.i18n.t('no'),
                                            checked: e.disliked,
                                            onChecked: () => e.onDislike(),
                                            class: 'text-inherit cursor-inherit',
                                        }),
                                    ),
                                ),
                            null,
                        ),
                    ),
                    (0, i.h)(
                        ({visible: t}) =>
                            t
                                ? (0, i.h)(
                                      'div',
                                      {part: 'feedback-thank-you-wrapper', class: 'flex flex-wrap gap-1'},
                                      (0, i.h)(a, null),
                                      e.disliked && !e.feedbackSent ? (0, i.h)(s, null) : [],
                                  )
                                : [],
                        {visible: e.liked || e.disliked},
                    ),
                );
            };
            class c {
                constructor(e) {
                    this.props = e;
                }
                get style() {
                    var e;
                    let t =
                        null === (e = this.props.getHost().querySelector('template')) || void 0 === e
                            ? void 0
                            : e.content.querySelector('style');
                    return t ? t.innerHTML : this.props.getSnippetStyle();
                }
                loadModal() {
                    if (this.props.getModalRef()) return;
                    let e = document.createElement(this.props.modalTagName);
                    (e.addEventListener('feedbackSent', () => {
                        this.props.setFeedbackSent(!0);
                    }),
                        this.props.setModalRef(e),
                        this.props.getHost().insertAdjacentElement('beforebegin', e));
                }
                renderQuestion() {
                    let e = this.props.getHeadingLevel();
                    return (0, i.h)(
                        r.H,
                        {level: e ? e + 1 : 0, class: 'text-xl font-bold', part: 'question'},
                        this.props.getSmartSnippetState().question,
                    );
                }
                renderContent() {
                    let e = this.props.getSmartSnippetState();
                    return (0, i.h)('atomic-smart-snippet-expandable-answer', {
                        exportparts: 'answer,show-more-button,show-less-button,truncated-answer',
                        part: 'body',
                        htmlContent: e.answer,
                        expanded: e.expanded,
                        maximumHeight: this.props.getMaximumHeight(),
                        collapsedHeight: this.props.getCollapsedHeight(),
                        snippetStyle: this.style,
                        onExpand: () => this.props.getSmartSnippet().expand(),
                        onCollapse: () => this.props.getSmartSnippet().collapse(),
                        onSelectInlineLink: (e) => this.props.getSmartSnippet().selectInlineLink(e.detail),
                        onBeginDelayedSelectInlineLink: (e) =>
                            this.props.getSmartSnippet().beginDelayedSelectInlineLink(e.detail),
                        onCancelPendingSelectInlineLink: (e) =>
                            this.props.getSmartSnippet().cancelPendingSelectInlineLink(e.detail),
                    });
                }
                renderFeedbackBanner() {
                    let e = this.props.getSmartSnippetState();
                    return (0, i.h)(s, {
                        i18n: this.props.getBindings().i18n,
                        id: this.props.id,
                        liked: e.liked,
                        disliked: e.disliked,
                        feedbackSent: this.props.getFeedbackSent(),
                        onLike: () => this.props.getSmartSnippet().like(),
                        onDislike: () => {
                            (this.loadModal(), this.props.getSmartSnippet().dislike());
                        },
                        onPressExplainWhy: () => (this.props.getModalRef().isOpen = !0),
                        explainWhyRef: (e) => {
                            this.props.getModalRef() && (this.props.getModalRef().source = e);
                        },
                    });
                }
                hideDuringRender(e) {
                    let t = this.props.getHost();
                    ((t.style.visibility = e ? 'hidden' : ''), (t.style.position = e ? 'absolute' : ''));
                }
                render() {
                    var e, t, n;
                    if (!this.props.getSmartSnippetState().answerFound) return (0, i.h)(a.H, null);
                    this.props.getHost().classList.contains('atomic-hidden') && this.hideDuringRender(!0);
                    let l = this.props.getSmartSnippetState().source;
                    return (0, i.h)(
                        'aside',
                        null,
                        (0, i.h)(
                            r.H,
                            {
                                level: null !== (e = this.props.getHeadingLevel()) && void 0 !== e ? e : 0,
                                class: 'accessibility-only',
                            },
                            this.props.getBindings().i18n.t('smart-snippet'),
                        ),
                        (0, i.h)(
                            'article',
                            {
                                class: 'bg-background border border-neutral rounded-lg p-6 pb-4 text-on-background',
                                part: 'smart-snippet',
                            },
                            this.renderQuestion(),
                            this.renderContent(),
                            (0, i.h)(
                                'footer',
                                {part: 'footer', 'aria-label': this.props.getBindings().i18n.t('smart-snippet-source')},
                                l &&
                                    (0, i.h)('atomic-smart-snippet-source', {
                                        anchorAttributes:
                                            null === (n = (t = this.props).getSourceAnchorAttributes) || void 0 === n
                                                ? void 0
                                                : n.call(t),
                                        source: l,
                                        onSelectSource: this.props.getSmartSnippet().selectSource,
                                        onBeginDelayedSelectSource:
                                            this.props.getSmartSnippet().beginDelayedSelectSource,
                                        onCancelPendingSelectSource:
                                            this.props.getSmartSnippet().cancelPendingSelectSource,
                                    }),
                                this.renderFeedbackBanner(),
                            ),
                        ),
                    );
                }
            }
        },
    },
]);
