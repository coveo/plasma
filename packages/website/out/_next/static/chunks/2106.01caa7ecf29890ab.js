'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2106],
    {
        2106: function (e, t, i) {
            (i.r(t),
                i.d(t, {
                    atomic_smart_snippet_answer: function () {
                        return l;
                    },
                }));
            var n = i(5991),
                r = i(66038),
                s = i(31257);
            i(87856);
            let l = class {
                constructor(e) {
                    ((0, n.r)(this, e),
                        (this.answerSizeUpdated = (0, n.c)(this, 'answerSizeUpdated', 3)),
                        (this.selectInlineLink = (0, n.c)(this, 'selectInlineLink', 3)),
                        (this.beginDelayedSelectInlineLink = (0, n.c)(this, 'beginDelayedSelectInlineLink', 3)),
                        (this.cancelPendingSelectInlineLink = (0, n.c)(this, 'cancelPendingSelectInlineLink', 3)),
                        (this.isRendering = !0));
                }
                componentWillRender() {
                    this.isRendering = !0;
                }
                componentDidRender() {
                    ((this.isRendering = !1), this.emitCurrentHeight());
                }
                componentDidLoad() {
                    setTimeout(() => {
                        this.host.classList.add('loaded');
                    }, 0);
                }
                connectedCallback() {
                    this.wrapperElement && this.resizeObserver && this.resizeObserver.observe(this.wrapperElement);
                }
                disconnectedCallback() {
                    var e;
                    null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
                }
                setWrapperElement(e) {
                    ((this.wrapperElement = e),
                        this.resizeObserver && this.resizeObserver.disconnect(),
                        (this.resizeObserver = new ResizeObserver(() => this.emitCurrentHeight())),
                        this.resizeObserver.observe(e));
                }
                get sanitizedStyle() {
                    if (this.innerStyle) return (0, r.m)(this.innerStyle);
                }
                emitCurrentHeight() {
                    this.isRendering || this.answerSizeUpdated.emit({height: this.wrapperElement.scrollHeight});
                }
                bindAnalyticsToLink(e) {
                    let t = {linkText: e.innerText, linkURL: e.href};
                    (0, s.b)(e, {
                        stopPropagation: !1,
                        onSelect: () => this.selectInlineLink.emit(t),
                        onBeginDelayedSelect: () => this.beginDelayedSelectInlineLink.emit(t),
                        onCancelPendingSelect: () => this.cancelPendingSelectInlineLink.emit(t),
                    });
                }
                bindAnalyticsToLinks(e) {
                    Array.from(e.querySelectorAll('a')).forEach((e) => this.bindAnalyticsToLink(e));
                }
                renderStyle() {
                    let e = this.sanitizedStyle;
                    if (e) return (0, n.h)('style', {innerHTML: e});
                }
                renderContent() {
                    return (0, n.h)(
                        'div',
                        {class: 'wrapper', ref: (e) => e && this.setWrapperElement(e)},
                        (0, n.h)('div', {
                            innerHTML: r.p.sanitize(this.htmlContent, {USE_PROFILES: {html: !0}}),
                            ref: (e) => e && this.bindAnalyticsToLinks(e),
                            part: 'answer',
                            class: 'margin',
                        }),
                    );
                }
                render() {
                    return (0, n.h)(n.H, null, this.renderStyle(), this.renderContent());
                }
                get host() {
                    return (0, n.g)(this);
                }
            };
            l.style =
                ':host{color:var(--atomic-on-background);font-size:var(--atomic-text-lg);line-height:calc(var(--atomic-text-lg) * var(--atomic-line-height-ratio))}:host .wrapper{display:flow-root}:host .wrapper .margin{margin:1rem 0}';
        },
        31257: function (e, t, i) {
            i.d(t, {
                L: function () {
                    return l;
                },
                b: function () {
                    return s;
                },
            });
            var n = i(5991),
                r = i(2995);
            let s = (e, {onSelect: t, onBeginDelayedSelect: i, onCancelPendingSelect: n, stopPropagation: r = !0}) => {
                    let s = (e, t) => {
                        (r && e.stopPropagation(), t());
                    };
                    (['click', 'contextmenu', 'mousedown', 'mouseup'].forEach((i) =>
                        e.addEventListener(i, (e) => s(e, t)),
                    ),
                        e.addEventListener('touchstart', (e) => s(e, i), {passive: !0}),
                        e.addEventListener('touchend', (e) => s(e, n), {passive: !0}));
                },
                l = (
                    {
                        href: e,
                        className: t,
                        part: i,
                        title: l,
                        onSelect: a,
                        onBeginDelayedSelect: c,
                        onCancelPendingSelect: h,
                        ref: o,
                        attributes: d,
                        tabIndex: p,
                        ariaHidden: u,
                        rel: m,
                        stopPropagation: g = !0,
                        target: f = '_self',
                    },
                    b,
                ) =>
                    (0, n.h)(
                        'a',
                        {
                            class: t,
                            part: i,
                            href: (0, r.f)(e),
                            target: f,
                            title: l,
                            rel: m,
                            ref: (e) => {
                                (o && o(e),
                                    e &&
                                        (s(e, {
                                            onSelect: a,
                                            onBeginDelayedSelect: c,
                                            onCancelPendingSelect: h,
                                            stopPropagation: g,
                                        }),
                                        (null == d ? void 0 : d.length) &&
                                            [...d].forEach(({nodeName: t, nodeValue: i}) => {
                                                e.setAttribute(t, i);
                                            }),
                                        u && e.setAttribute('aria-hidden', 'true')));
                            },
                            tabIndex: p,
                        },
                        b,
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
