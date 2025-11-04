'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [88077],
    {
        92027: function (t, r, e) {
            e.d(r, {
                A: function () {
                    return i;
                },
            });
            let i =
                '<svg viewBox="0 0 12.6 7.2" xmlns="http://www.w3.org/2000/svg"><path d="m11.421 7.04c-.3 0-.5-.1-.7-.3l-4.6-4.6-4.6 4.6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l5.2-5.2c.4-.4 1.2-.4 1.6 0l5.2 5.2c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3" transform="matrix(-1 0 0 -1 12.366 7.086)"/></svg>';
        },
        88077: function (t, r, e) {
            (e.r(r),
                e.d(r, {
                    atomic_quickview_modal: function () {
                        return L;
                    },
                }));
            var i = e(5991),
                o = e(64977),
                a = e(71343),
                n = e(8807),
                l = e(2108),
                s = e(45584),
                c = e(31257),
                d = e(92027),
                h = e(55294),
                m = e(47104);
            (e(66038), e(87856));
            let g = 'coveo-quickview-sidebar-keywords',
                u = (t) => {
                    let {words: r, minimized: e} = t,
                        o = Object.values(r).length;
                    if (0 === o) return;
                    let a = (0, i.h)(p, {...t, wordsLength: o});
                    return (0, i.h)(
                        'div',
                        {class: 'p-4 border-r border-neutral h-full'},
                        e && a,
                        (0, i.h)(
                            'div',
                            {class: 'flex items-center justify-between'},
                            (0, i.h)('div', {class: 'flex items-center'}, (0, i.h)(w, {...t})),
                            !e && (0, i.h)('div', null, a),
                        ),
                        !e && (0, i.h)(v, {...t, words: r}),
                    );
                },
                p = ({i18n: t, minimized: r, onMinimize: e, highlightKeywords: o, wordsLength: a}) =>
                    (0, i.h)(s.I, {
                        partPrefix: 'sidebar-minimize',
                        icon: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" aria-label="menu" role="img" style="vertical-align: text-bottom;"><line x1="6.5" y1="10.5" x2="25.5" y2="10.5" stroke="currentColor" stroke-linecap="round"></line><line x1="6.5" y1="22.5" x2="25.5" y2="22.5" stroke="currentColor" stroke-linecap="round"></line><line x1="10.5" y1="16.5" x2="21.5" y2="16.5" stroke="currentColor" stroke-linecap="round"></line></svg>',
                        style: 'text-transparent',
                        title: t.t('quickview-toggle-navigation'),
                        ariaLabel: t.t('quickview-toggle-navigation'),
                        onClick: () => e(!r),
                        badge: o && r ? (0, i.h)('slot', null, a) : void 0,
                        class: `w-fit ${r ? '' : 'ml-auto'}`,
                        ariaExpanded: (!r).toString(),
                        ariaControls: g,
                    }),
                w = ({i18n: t, highlightKeywords: r, onHighlightKeywords: e, minimized: o}) =>
                    (0, i.h)(
                        i.F,
                        null,
                        (0, i.h)(h.C, {
                            text: t.t('keywords-highlight'),
                            class: 'mr-2',
                            id: 'atomic-quickview-sidebar-highlight-keywords',
                            checked: !r.highlightNone,
                            onToggle: (t) => e({...r, highlightNone: !t}),
                        }),
                        !o &&
                            (0, i.h)(
                                'label',
                                {
                                    class: 'font-bold cursor-pointer whitespace-nowrap',
                                    htmlFor: 'atomic-quickview-sidebar-highlight-keywords',
                                },
                                t.t('keywords-highlight'),
                            ),
                    ),
                v = ({words: t, i18n: r, highlightKeywords: e, onHighlightKeywords: o}) =>
                    (0, i.h)(
                        'div',
                        {id: g},
                        Object.values(t).map((t) => {
                            let a =
                                !e.highlightNone &&
                                (void 0 === e.keywords[t.text] || !0 === e.keywords[t.text].enabled);
                            return (0, i.h)(
                                'div',
                                {key: t.text, class: 'flex items-center justify-between gap-x-2 my-4 w-100'},
                                (0, i.h)(
                                    'div',
                                    {
                                        class: `flex grow items-center bg-background border border-neutral rounded-lg overflow-x-auto ${a ? '' : 'pointer-events-none opacity-50'}`,
                                    },
                                    (0, i.h)(
                                        'div',
                                        {class: 'flex items-center grow p-4 border-r', 'aria-hidden': 'true'},
                                        (0, i.h)('div', {
                                            class: 'w-5 h-5 flex-none mr-2',
                                            style: {backgroundColor: t.color},
                                        }),
                                        (0, i.h)('div', {class: 'grow mr-2 whitespace-nowrap'}, t.text),
                                        (0, i.h)(
                                            'div',
                                            {class: 'flex-none'},
                                            '(',
                                            new Intl.NumberFormat(r.language, {notation: 'compact'}).format(
                                                t.occurrences,
                                            ),
                                            ')',
                                        ),
                                    ),
                                    (0, i.h)(
                                        m.F,
                                        {
                                            label: r.t('quickview-navigate-keywords', {
                                                occurrences: t.occurrences,
                                                keyword: t.text,
                                            }),
                                        },
                                        (0, i.h)(
                                            'div',
                                            {class: 'flex px-2'},
                                            (0, i.h)(s.I, {
                                                partPrefix: 'sidebar-next',
                                                icon: d.A,
                                                disabled: !a,
                                                style: 'text-transparent',
                                                class: 'border-0',
                                                ariaLabel: r.t('next'),
                                                title: r.t('next'),
                                                onClick: () => t.navigateForward(),
                                            }),
                                            (0, i.h)(s.I, {
                                                partPrefix: 'sidebar-previous',
                                                icon: h.A,
                                                disabled: !a,
                                                style: 'text-transparent',
                                                class: 'border-0',
                                                ariaLabel: r.t('previous'),
                                                title: r.t('previous'),
                                                onClick: () => t.navigateBackward(),
                                            }),
                                        ),
                                    ),
                                ),
                                (0, i.h)(s.I, {
                                    partPrefix: 'sidebar-remove-word',
                                    class: `${e.highlightNone ? 'pointer-events-none opacity-50' : ''}`,
                                    tabIndex: e.highlightNone ? '-1' : '0',
                                    ariaPressed: (!a).toString(),
                                    style: 'text-transparent',
                                    icon: a
                                        ? '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" aria-label="remove" role="img" style="vertical-align: text-bottom;"><circle cx="16" cy="16" r="13.5" stroke="currentColor"></circle><path d="M9 16H23" stroke="currentColor" stroke-linecap="round"></path></svg>'
                                        : '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" aria-label="add" role="img" style="vertical-align: text-bottom;"><circle cx="16" cy="16" r="13.5" stroke="currentColor"></circle><path d="M9 16H23M16 9V23" stroke="currentColor" stroke-linecap="round"></path></svg>',
                                    ariaLabel: r.t('quickview-remove-word'),
                                    onClick: () => {
                                        o({
                                            ...e,
                                            keywords: {
                                                ...e.keywords,
                                                [t.text]: {enabled: !a, indexIdentifier: t.indexIdentifier},
                                            },
                                        });
                                    },
                                }),
                            );
                        }),
                    ),
                b = 'CoveoDocIdentifier',
                f = (t, r) => {
                    (t.open(), t.write(r), t.close(), t.scrollingElement && (t.scrollingElement.scrollTop = 0));
                },
                x = (t, r) => {
                    let e = t.getElementById(b);
                    return e && e.textContent === r;
                },
                y = (t, r) => {
                    let e = t.createElement('div');
                    ((e.style.display = 'none'),
                        e.setAttribute('aria-hidden', 'true'),
                        (e.id = b),
                        (e.textContent = r),
                        t.body.appendChild(e));
                },
                k = (t) => {
                    null == t ||
                        t.warn(
                            'Quickview initialized in restricted mode due to incompatible sandboxing environment. Keywords hit navigation will be disabled.',
                        );
                },
                C = ({onSetIframeRef: t, uniqueIdentifier: r, content: e, sandbox: o, src: a, logger: n}) => {
                    let l = () => new Promise((t) => setTimeout(t));
                    return (0, i.h)('iframe', {
                        src: 'about:blank',
                        class: 'w-full h-full',
                        sandbox: o,
                        ref: async (i) => {
                            if (!r || !e) return;
                            let o = i.contentDocument;
                            if (!o) {
                                a && (k(n), (i.src = a));
                                return;
                            }
                            x(o, r) || (f(o, e), y(o, r), await l(), t(i));
                        },
                    });
                },
                z = (t) => {
                    let r = 'CoveoPreviewBar',
                        e = t.getElementById(r) || t.createElement('div');
                    return (
                        (e.id = r),
                        (e.innerHTML = ''),
                        (e.style.position = 'fixed'),
                        (e.style.top = '0'),
                        (e.style.right = '0'),
                        (e.style.width = '15px'),
                        (e.style.height = '100%'),
                        e.setAttribute('aria-hidden', 'true'),
                        e
                    );
                },
                I = (t, r, e, i, o) => {
                    var a;
                    let n = t.createElement('div');
                    if ((null === (a = o.keywords[r.text]) || void 0 === a ? void 0 : a.enabled) === !1)
                        return ((n.style.display = 'none'), n);
                    let l = e.getBoundingClientRect().top;
                    return (
                        (n.style.position = 'absolute'),
                        (n.style.top = `${(l / i) * 100}%`),
                        (n.style.width = '100%'),
                        (n.style.height = '1px'),
                        (n.style.border = `1px solid ${r.previewBorderColor}`),
                        (n.style.backgroundColor = r.color),
                        n
                    );
                },
                q = (t, r, e) => {
                    if (!e) return;
                    let i = e.contentDocument;
                    if (!i) return;
                    let o = z(i);
                    if (r.highlightNone) {
                        o.remove();
                        return;
                    }
                    let a = i.body.scrollHeight;
                    (Object.values(t).forEach((t) => {
                        t.elements.forEach((e) => {
                            let n = I(i, t, e, a, r);
                            o.appendChild(n);
                        });
                    }),
                        i.body.appendChild(o));
                },
                E = (t, r, e) => {
                    let i;
                    let o = Math.max(t, r, e),
                        a = Math.min(t, r, e),
                        n = o - a;
                    if (o === a) i = 0;
                    else {
                        switch (o) {
                            case t:
                                i = (r - e) / n + (r < e ? 6 : 0);
                                break;
                            case r:
                                i = (e - t) / n + 2;
                                break;
                            default:
                                i = (t - r) / n + 4;
                        }
                        i /= 6;
                    }
                    return {h: i, s: 0 === o ? 0 : n / o, v: o};
                },
                H = (t, r, e) => {
                    let i, o, a;
                    let n = Math.floor(6 * t),
                        l = 6 * t - n,
                        s = e * (1 - r),
                        c = e * (1 - l * r),
                        d = e * (1 - (1 - l) * r);
                    switch (n % 6) {
                        case 0:
                            ((i = e), (o = d), (a = s));
                            break;
                        case 1:
                            ((i = c), (o = e), (a = s));
                            break;
                        case 2:
                            ((i = s), (o = e), (a = d));
                            break;
                        case 3:
                            ((i = s), (o = c), (a = e));
                            break;
                        case 4:
                            ((i = d), (o = s), (a = e));
                            break;
                        default:
                            ((i = e), (o = s), (a = c));
                    }
                    return {r: Math.round(i), g: Math.round(o), b: Math.round(a)};
                },
                $ = 'CoveoHighlight';
            class S {
                constructor(t, r) {
                    ((this.stemmingInfoFromIndex = t),
                        (this.occurrences = 0),
                        (this.elements = []),
                        (this.currentNavigationPosition = -1));
                    let e = this.parseKeywordIdentifier(r);
                    if (!e) throw 'Invalid keyword identifier for quickview';
                    ((this.text = this.getText(r)),
                        (this.indexIdentifier = `${e.keywordIdentifier}-${this.text}`),
                        (this.color = r.style.backgroundColor),
                        (this.focusedColor = this.computeInvertedColor()),
                        (this.previewBorderColor = this.computeSaturatedColor()),
                        this.addElement(r));
                }
                addElement(t) {
                    (this.occurrences++, this.elements.push(t));
                }
                navigateForward() {
                    return (
                        this.currentNavigationPosition++,
                        this.currentNavigationPosition >= this.elements.length && (this.currentNavigationPosition = 0),
                        this.highlightNavigation(),
                        this.putElementIntoView(),
                        this.elements[this.currentNavigationPosition]
                    );
                }
                navigateBackward() {
                    return (
                        this.currentNavigationPosition--,
                        this.currentNavigationPosition < 0 &&
                            (this.currentNavigationPosition = this.elements.length - 1),
                        this.highlightNavigation(),
                        this.putElementIntoView(),
                        this.elements[this.currentNavigationPosition]
                    );
                }
                isTaggedWord(t) {
                    return 'coveotaggedword' === t.nodeName.toLowerCase();
                }
                highlightNavigation() {
                    let t = this.elements[this.currentNavigationPosition],
                        r = this.elements.filter((r) => r !== t);
                    ((t.style.color = this.color),
                        (t.style.backgroundColor = this.focusedColor),
                        r.forEach((t) => {
                            ((t.style.color = ''), (t.style.backgroundColor = this.color));
                        }));
                }
                putElementIntoView() {
                    let t = this.elements[this.currentNavigationPosition];
                    t.scrollIntoView();
                }
                getText(t) {
                    let r = this.getHighlightedInnerText(t);
                    return this.resolveOriginalTerm(r).trim();
                }
                resolveOriginalTerm(t) {
                    let r = Object.keys(this.stemmingInfoFromIndex).find((r) => {
                        let e = r.toLowerCase() === t.toLowerCase();
                        if (e) return !0;
                        let i = this.stemmingInfoFromIndex[r];
                        if (!i) return !1;
                        let o = i.find((r) => r.toLowerCase() === t.toLowerCase());
                        return o;
                    });
                    return r || t;
                }
                getHighlightedInnerText(t) {
                    if (!this.isTaggedWord(t)) return this.getTextOfHTMLElement(t);
                    let r = Array.from(t.children);
                    return r.length >= 1 ? this.getTextOfHTMLElement(r[0]) : '';
                }
                parseKeywordIdentifier(t) {
                    let r = t.id.substring($.length + 1).match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/);
                    return !r || r.length <= 3 ? null : {keywordIdentifier: r[1], keywordTermPart: parseInt(r[3], 10)};
                }
                getTextOfHTMLElement(t) {
                    return t.innerText || t.textContent || '';
                }
                computeInvertedColor() {
                    let {r: t, g: r, b: e} = this.extractRgb();
                    return `rgb(${255 - t}, ${255 - r}, ${255 - e})`;
                }
                computeSaturatedColor() {
                    let {r: t, g: r, b: e} = this.extractRgb(),
                        {h: i, s: o, v: a} = E(t, r, e),
                        n = 2 * o;
                    n > 1 && (n = 1);
                    let {r: l, g: s, b: c} = H(i, n, a);
                    return `rgb(${l}, ${s}, ${c})`;
                }
                extractRgb() {
                    let t = this.color.match(/\d+/g);
                    return t
                        ? {r: parseInt(t[0], 10), g: parseInt(t[1], 10), b: parseInt(t[2], 10)}
                        : {r: 255, g: 255, b: 255};
                }
            }
            let P = (t, r) => {
                    var e;
                    let i = {};
                    return (
                        r &&
                            (null === (e = r.contentDocument) ||
                                void 0 === e ||
                                e.body.querySelectorAll(`[id^="${$}"]`).forEach((r) => {
                                    let e = new S(t, r);
                                    if (!e.text) return;
                                    let o = i[e.indexIdentifier];
                                    o ? o.addElement(r) : (i[e.indexIdentifier] = e);
                                })),
                        i
                    );
                },
                L = class {
                    constructor(t) {
                        ((0, i.r)(this, t),
                            (this.nextQuickview = (0, i.c)(this, 'atomic/quickview/next', 7)),
                            (this.previousQuickview = (0, i.c)(this, 'atomic/quickview/previous', 7)),
                            (this.highlightKeywords = {highlightNone: !1, keywords: {}}),
                            (this.minimizeSidebar = !1),
                            (this.words = {}));
                    }
                    watchHighlightKeywords() {
                        this.handleHighlightsScripts();
                    }
                    async reset() {
                        ((this.highlightKeywords = {highlightNone: !1, keywords: {}}),
                            (this.minimizeSidebar = !1),
                            (this.iframeRef = void 0),
                            (this.content = void 0),
                            (this.result = void 0),
                            (this.interactiveResult = void 0));
                    }
                    renderHeader() {
                        var t;
                        let r = null;
                        return (
                            this.result &&
                                ((this.interactiveResult = (0, o.u)(this.bindings.engine, {
                                    options: {result: this.result},
                                })),
                                (r = (0, i.h)(
                                    i.F,
                                    null,
                                    (0, i.h)(
                                        c.L,
                                        {
                                            href: null === (t = this.result) || void 0 === t ? void 0 : t.clickUri,
                                            onSelect: () => {
                                                var t;
                                                return null === (t = this.interactiveResult) || void 0 === t
                                                    ? void 0
                                                    : t.select();
                                            },
                                            onBeginDelayedSelect: () => {
                                                var t;
                                                return null === (t = this.interactiveResult) || void 0 === t
                                                    ? void 0
                                                    : t.beginDelayedSelect();
                                            },
                                            onCancelPendingSelect: () => {
                                                var t;
                                                return null === (t = this.interactiveResult) || void 0 === t
                                                    ? void 0
                                                    : t.cancelPendingSelect();
                                            },
                                        },
                                        this.result.title,
                                    ),
                                    (0, i.h)(s.I, {
                                        partPrefix: 'quickview-modal-header',
                                        icon: a.C,
                                        onClick: () => this.onClose(),
                                        ariaLabel: this.bindings.i18n.t('close'),
                                        style: 'text-transparent',
                                        title: this.bindings.i18n.t('close'),
                                    }),
                                ))),
                            (0, i.h)('div', {slot: 'header', class: 'w-full flex justify-between items-center'}, r)
                        );
                    }
                    renderBody() {
                        return (0, i.h)(
                            'div',
                            {slot: 'body', class: 'grid grid-cols-[min-content_auto] h-full'},
                            (0, i.h)(
                                'div',
                                {
                                    class: 'h-full overflow-y-auto',
                                    style: {backgroundColor: 'var(--atomic-neutral-light)'},
                                },
                                (0, i.h)(u, {
                                    words: this.words,
                                    i18n: this.bindings.i18n,
                                    highlightKeywords: this.highlightKeywords,
                                    onHighlightKeywords: (t) => (this.highlightKeywords = t),
                                    minimized: this.minimizeSidebar,
                                    onMinimize: (t) => (this.minimizeSidebar = t),
                                }),
                            ),
                            (0, i.h)(
                                'div',
                                {class: 'overflow-auto relative'},
                                (0, i.h)(C, {
                                    logger: this.logger,
                                    src: this.quickviewSrc,
                                    sandbox: this.sandbox,
                                    uniqueIdentifier: this.quickviewUniqueIdentifier,
                                    content: this.content,
                                    onSetIframeRef: async (t) => {
                                        ((this.iframeRef = t),
                                            (this.words = P(this.termsToHighlight, this.iframeRef)),
                                            this.handleHighlightsScripts());
                                    },
                                }),
                                q(this.words, this.highlightKeywords, this.iframeRef),
                            ),
                        );
                    }
                    renderFooter() {
                        return (0, i.h)(
                            'div',
                            {slot: 'footer', class: 'flex items-center gap-2'},
                            (0, i.h)(l.B, {
                                class: 'p-2',
                                style: 'square-neutral',
                                onClick: () => {
                                    var t;
                                    return null === (t = this.previousQuickview) || void 0 === t ? void 0 : t.emit();
                                },
                                text: this.bindings.i18n.t('quickview-previous'),
                            }),
                            (0, i.h)(
                                'p',
                                null,
                                this.bindings.i18n.t('showing-results-of', {first: this.current, total: this.total}),
                            ),
                            (0, i.h)(l.B, {
                                class: 'p-2',
                                style: 'square-neutral',
                                onClick: () => {
                                    var t;
                                    return null === (t = this.nextQuickview) || void 0 === t ? void 0 : t.emit();
                                },
                                text: this.bindings.i18n.t('quickview-next'),
                            }),
                        );
                    }
                    onClose() {
                        ((this.content = void 0),
                            (this.result = void 0),
                            this.modalCloseCallback && this.modalCloseCallback());
                    }
                    get isOpen() {
                        return !!this.content && !!this.result;
                    }
                    get highlightScriptId() {
                        return 'CoveoDisableHighlightStyle';
                    }
                    get logger() {
                        return this.bindings.engine.logger;
                    }
                    get quickviewSrc() {
                        var t;
                        return null === (t = this.bindings.engine.state.resultPreview) || void 0 === t
                            ? void 0
                            : t.contentURL;
                    }
                    enableHighlights() {
                        this.removeDisableHighlightScript();
                    }
                    enableHighlightsSpecificKeyword(t) {
                        this.removeDisableHighlightScript(t);
                    }
                    disableHighlights() {
                        this.createDisableHighlightScript();
                    }
                    disableHighlightsSpecificKeyword(t) {
                        this.createDisableHighlightScript(t);
                    }
                    removeDisableHighlightScript(t) {
                        var r, e, i;
                        let o =
                            null === (e = null === (r = this.iframeRef) || void 0 === r ? void 0 : r.contentWindow) ||
                            void 0 === e
                                ? void 0
                                : e.document;
                        o &&
                            (null === (i = o.getElementById(`${this.highlightScriptId}${t ? `:${t}` : ''}`)) ||
                                void 0 === i ||
                                i.remove());
                    }
                    createDisableHighlightScript(t) {
                        var r, e;
                        let i =
                            null === (e = null === (r = this.iframeRef) || void 0 === r ? void 0 : r.contentWindow) ||
                            void 0 === e
                                ? void 0
                                : e.document;
                        if (!i) return;
                        let o = i.head,
                            a = `${this.highlightScriptId}${t ? `:${t}` : ''}`,
                            n = i.getElementById(a) || i.createElement('style');
                        (n.setAttribute('id', a),
                            o.appendChild(n),
                            n.appendChild(
                                i.createTextNode(`[id^="${$}${t ? `:${t}` : ''}"] {
      background-color: inherit !important;
      color: inherit !important;
    }`),
                            ));
                    }
                    get termsToHighlight() {
                        let t = {},
                            r = this.bindings.engine.state.search.response.phrasesToHighlight;
                        return (
                            Object.entries(r).forEach(([r, e]) => {
                                t[r] = Object.entries(e).flatMap(([t, r]) => [t, ...r]);
                            }),
                            {...this.bindings.engine.state.search.response.termsToHighlight, ...t}
                        );
                    }
                    get requestId() {
                        return this.bindings.engine.state.search.requestId;
                    }
                    get quickviewUniqueIdentifier() {
                        var t;
                        return (null === (t = this.result) || void 0 === t ? void 0 : t.uniqueId) + this.requestId;
                    }
                    handleHighlightsScripts() {
                        (this.highlightKeywords.highlightNone ? this.disableHighlights() : this.enableHighlights(),
                            Object.values(this.highlightKeywords.keywords).forEach((t) => {
                                t.enabled
                                    ? this.enableHighlightsSpecificKeyword(t.indexIdentifier)
                                    : this.disableHighlightsSpecificKeyword(t.indexIdentifier);
                            }));
                    }
                    render() {
                        return (0, i.h)(
                            'atomic-modal',
                            {class: 'atomic-quickview-modal', isOpen: this.isOpen, close: () => this.onClose()},
                            this.renderHeader(),
                            this.renderBody(),
                            this.renderFooter(),
                        );
                    }
                    static get watchers() {
                        return {highlightKeywords: ['watchHighlightKeywords']};
                    }
                };
            (!(function (t, r, e, i) {
                var o,
                    a = arguments.length,
                    n = a < 3 ? r : null === i ? (i = Object.getOwnPropertyDescriptor(r, e)) : i;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    n = Reflect.decorate(t, r, e, i);
                else
                    for (var l = t.length - 1; l >= 0; l--)
                        (o = t[l]) && (n = (a < 3 ? o(n) : a > 3 ? o(r, e, n) : o(r, e)) || n);
                a > 3 && n && Object.defineProperty(r, e, n);
            })([(0, n.I)()], L.prototype, 'bindings', void 0),
                (L.style =
                    "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--atomic-font-family);font-feature-settings:normal;font-variation-settings:normal;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}:host{display:block;--tw-ring-inset:var(--tw-empty,  )}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);font-weight:var(--atomic-font-normal)}:host(.atomic-hidden){display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.\\!link{color:var(--atomic-primary)}.\\!link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link{color:var(--atomic-primary)}.link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.input-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background)}.input-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:hover{border-color:var(--atomic-primary-light)}.input-primary.focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.input-primary:focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-radio::before{--tw-content:attr(value);content:var(--tw-content)}.btn-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-primary);color:var(--atomic-on-primary)}.btn-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:hover{background-color:var(--atomic-primary-light)}.btn-primary.focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:disabled{cursor:not-allowed;background-color:var(--atomic-disabled)}.btn-outline-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-outline-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:hover{border-color:var(--atomic-primary-light);color:var(--atomic-primary-light)}.btn-outline-primary.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-neutral)}.btn-text-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-text-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:hover{background-color:var(--atomic-neutral-light)}.btn-text-primary.focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-primary:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-neutral{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:hover{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral.focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral:focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-transparent{color:var(--atomic-on-background)}.btn-text-transparent.focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:hover{color:var(--atomic-primary-light)}.btn-text-transparent.focus-visible{color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{color:var(--atomic-primary-light)}.btn-square-neutral{border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-square-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-square-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-square-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-pill{border-radius:var(--atomic-border-radius-xl)}.btn-page{display:grid;place-items:center;border-width:0px;font-size:var(--atomic-text-lg)}.btn-page:hover{border-width:1px}.btn-page.focus-visible{border-width:1px}.btn-page:focus-visible{border-width:1px}.btn-page.selected{border-width:2px;border-color:var(--atomic-primary);font-weight:var(--atomic-font-bold)}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-0.5rem}.-top-2{top:-0.5rem}.bottom-0{bottom:0px}.bottom-px{bottom:1px}.left-0{left:0px}.right-0{right:0px}.right-px{right:1px}.top-0{top:0px}.top-\\[50\\%\\]{top:50%}.top-full{top:100%}.top-px{top:1px}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.z-\\[9999\\]{z-index:9999}.col-span-2{grid-column:span 2 / span 2}.m-0{margin:0px}.m-2{margin:0.5rem}.-my-px{margin-top:-1px;margin-bottom:-1px}.mx-0{margin-left:0px;margin-right:0px}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem}.mx-1{margin-left:0.25rem;margin-right:0.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mr-px{margin-right:-1px}.mb-0{margin-bottom:0px}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:0.25rem}.ml-2{margin-left:0.5rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.mr-0{margin-right:0px}.mr-0\\.5{margin-right:0.125rem}.mr-1{margin-right:0.25rem}.mr-1\\.5{margin-right:0.375rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-6{margin-right:1.5rem}.mt-0{margin-top:0px}.mt-1{margin-top:0.25rem}.mt-1\\.5{margin-top:0.375rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:0.5rem}.mt-2\\.5{margin-top:0.625rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-px{margin-top:1px}.box-border{box-sizing:border-box}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-1{height:0.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-2{height:0.5rem}.h-2\\.5{height:0.625rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-\\[2\\.6rem\\]{height:2.6rem}.h-auto{height:auto}.h-full{height:100%}.min-h-\\[2\\.5rem\\]{min-height:2.5rem}.min-h-\\[40px\\]{min-height:40px}.w-0{width:0px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-2{width:0.5rem}.w-2\\.5{width:0.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:0.75rem}.w-3\\.5{width:0.875rem}.w-3\\/5{width:60%}.w-32{width:8rem}.w-4{width:1rem}.w-44{width:11rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[2\\.6rem\\]{width:2.6rem}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[2\\.5rem\\]{min-width:2.5rem}.min-w-\\[6rem\\]{min-width:6rem}.max-w-\\[15rem\\]{max-width:15rem}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-8{flex-basis:2rem}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes scaleUp{0%{transform:scale(0.7) translateY(150vh);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}.animate-scaleUpModal{animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards}@keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}.animate-slideDownModal{animation:slideDown .5s linear forwards}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-\\[min-content_auto\\]{grid-template-columns:min-content auto}.grid-cols-min-1fr{grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-items-center{place-items:center}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-0\\.5{gap:0.125rem}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem}.gap-x-1\\.5{-moz-column-gap:0.375rem;column-gap:0.375rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-0{row-gap:0px}.gap-y-0\\.5{row-gap:0.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.375rem * var(--tw-space-x-reverse));margin-left:calc(0.375rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-neutral>:not([hidden])~:not([hidden]){border-color:var(--atomic-neutral)}.self-start{align-self:flex-start}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-scroll{overflow-x:scroll}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:var(--atomic-border-radius)}.rounded-\\[100\\%\\]{border-radius:100%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0px}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-r-md{border-top-right-radius:var(--atomic-border-radius-md);border-bottom-right-radius:var(--atomic-border-radius-md)}.border{border-width:1px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-neutral{border-color:var(--atomic-neutral)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.border-primary{border-color:var(--atomic-primary)}.bg-\\[\\#F1F2FF\\]{--tw-bg-opacity:1;background-color:rgb(241 242 255 / var(--tw-bg-opacity))}.bg-background{background-color:var(--atomic-background)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-primary{background-color:var(--atomic-primary)}.bg-transparent{background-color:transparent}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-background-60{--tw-gradient-from:var(--atomic-background) 60% var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.fill-current{fill:currentColor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-\\[0\\.625rem\\]{padding-top:0.625rem;padding-bottom:0.625rem}.pb-1{padding-bottom:0.25rem}.pb-3{padding-bottom:0.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-0{padding-left:0px}.pl-1{padding-left:0.25rem}.pl-10{padding-left:2.5rem}.pl-3{padding-left:0.75rem}.pl-9{padding-left:2.25rem}.pr-2{padding-right:0.5rem}.pr-24{padding-right:6rem}.pr-6{padding-right:1.5rem}.pt-0{padding-top:0px}.pt-0\\.5{padding-top:0.125rem}.text-left{text-align:left}.text-center{text-align:center}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.text-2xl{font-size:var(--atomic-text-2xl)}.text-base{font-size:var(--atomic-text-base)}.text-lg{font-size:var(--atomic-text-lg)}.text-sm{font-size:var(--atomic-text-sm)}.text-xl{font-size:var(--atomic-text-xl)}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:var(--atomic-font-bold)}.font-medium{font-weight:500}.font-normal{font-weight:var(--atomic-font-normal)}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-10{line-height:2.5rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-8{line-height:2rem}.text-\\[\\#54698D\\]{--tw-text-opacity:1;color:rgb(84 105 141 / var(--tw-text-opacity))}.text-error{color:var(--atomic-error)}.text-inherit{color:inherit}.text-neutral{color:var(--atomic-neutral)}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-on-background{color:var(--atomic-on-background)}.text-on-primary{color:var(--atomic-on-primary)}.text-primary{color:var(--atomic-primary)}.text-success{color:var(--atomic-success)}.text-transparent{color:transparent}.placeholder-neutral-dark::-moz-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark::placeholder{color:var(--atomic-neutral-dark)}.opacity-0{opacity:0}.opacity-50{opacity:0.5}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--atomic-primary);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-neutral{outline-color:var(--atomic-neutral)}.outline-primary{outline-color:var(--atomic-primary)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.ring-ring-primary{--tw-ring-color:var(--atomic-ring-primary)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-visi-opacity{transition-property:visibility, opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-outline.focus-visible{outline:2px solid transparent;outline-offset:2px}.no-outline:focus-visible{outline:2px solid transparent;outline-offset:2px}.accessibility-only{position:absolute;display:block;height:0;overflow:hidden;margin:0}.text-inherit{font-size:inherit}.cursor-inherit{cursor:inherit}.shadow-lg{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}.ripple{position:absolute;pointer-events:none;transform:scale(0);border-radius:50%;animation:ripple var(--animation-duration) linear}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@keyframes ripple{to{transform:scale(4);opacity:0}}.atomic-quickview-modal::part(backdrop){grid-template-columns:1fr max(80vw, 30rem) 1fr}.atomic-quickview-modal::part(body),.atomic-quickview-modal::part(header),.atomic-quickview-modal::part(footer){max-width:100%}.atomic-quickview-modal::part(footer){display:flex;justify-content:center}.atomic-quickview-modal::part(body-wrapper){height:100%;overflow:hidden;padding:0px}.atomic-quickview-modal::part(body){height:100%}.atomic-quickview-modal::part(backdrop){grid-template-rows:1fr 100% 3fr}.atomic-quickview-modal::part(header-wrapper){background-color:var(--atomic-neutral-light)}.atomic-quickview-modal a{color:var(--atomic-on-background)}.atomic-quickview-modal a:hover,.atomic-quickview-modal a.focus-visible{text-decoration:underline;color:var(--atomic-primary)}.atomic-quickview-modal a:hover,.atomic-quickview-modal a:focus-visible{text-decoration:underline;color:var(--atomic-primary)}.atomic-quickview-modal a:focus{outline:none}.atomic-quickview-modal a:visited{color:var(--atomic-visited)}.focus-within\\:border-disabled:focus-within{border-color:var(--atomic-disabled)}.focus-within\\:border-primary:focus-within{border-color:var(--atomic-primary)}.focus-within\\:ring:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-neutral:focus-within{--tw-ring-color:var(--atomic-neutral)}.focus-within\\:ring-ring-primary:focus-within{--tw-ring-color:var(--atomic-ring-primary)}.hover\\:border-primary-light:hover{border-color:var(--atomic-primary-light)}.hover\\:bg-neutral-light:hover{background-color:var(--atomic-neutral-light)}.hover\\:bg-primary-light:hover{background-color:var(--atomic-primary-light)}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.focus-visible\\:border-primary-light.focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:border-primary-light:focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:bg-neutral-light.focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-neutral-light:focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-primary-light.focus-visible{background-color:var(--atomic-primary-light)}.focus-visible\\:bg-primary-light:focus-visible{background-color:var(--atomic-primary-light)}.group:hover .group-hover\\:text-primary{color:var(--atomic-primary)}.group:hover .group-hover\\:text-primary-light{color:var(--atomic-primary-light)}.group:focus .group-focus\\:text-primary{color:var(--atomic-primary)}.group:focus .group-focus\\:text-primary-light{color:var(--atomic-primary-light)}.group.focus-visible .group-focus-visible\\:text-primary{color:var(--atomic-primary)}.group:focus-visible .group-focus-visible\\:text-primary{color:var(--atomic-primary)}"));
        },
        2108: function (t, r, e) {
            e.d(r, {
                B: function () {
                    return n;
                },
            });
            var i = e(5991),
                o = e(60375),
                a = e(35126);
            let n = (t, r) => {
                let e = (0, a.g)(t.style),
                    n = (0, a.a)(t.style),
                    l = {
                        class: t.class ? `${n} ${t.class}` : n,
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
                        ref(r) {
                            var e;
                            (t.form && (null == r || r.setAttribute('form', t.form)),
                                t.ariaHidden && (null == r || r.setAttribute('aria-hidden', t.ariaHidden)),
                                t.tabIndex && (null == r || r.setAttribute('tabindex', t.tabIndex)),
                                null === (e = t.ref) || void 0 === e || e.call(t, r));
                        },
                    };
                return (0, i.h)(
                    'button',
                    {...l, onMouseDown: (t) => (0, o.c)(t, {color: e})},
                    t.text ? (0, i.h)('span', {class: 'truncate'}, t.text) : null,
                    r,
                );
            };
        },
        35126: function (t, r, e) {
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
            function o(t) {
                switch (t) {
                    case 'primary':
                        return 'primary';
                    case 'text-transparent':
                        return 'neutral-light';
                    default:
                        return 'neutral';
                }
            }
            e.d(r, {
                a: function () {
                    return i;
                },
                g: function () {
                    return o;
                },
            });
        },
        55294: function (t, r, e) {
            e.d(r, {
                A: function () {
                    return o;
                },
                C: function () {
                    return n;
                },
            });
            var i = e(5991);
            let o =
                    '<svg viewBox="0 0 12.6 7.2" xmlns="http://www.w3.org/2000/svg"><path d="m11.3 7.04c-.3 0-.5-.1-.7-.3l-4.6-4.6-4.6 4.6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l5.2-5.2c.4-.4 1.2-.4 1.6 0l5.2 5.2c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3"/></svg>',
                a = `<svg viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 5L4.6 7.99999L11 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,
                n = (t) => {
                    var r, e;
                    let o = null !== (r = t.part) && void 0 !== r ? r : 'checkbox',
                        n = [
                            'w-4 h-4 grid place-items-center rounded no-outline hover:border-primary-light focus-visible:border-primary-light',
                        ],
                        l = [o];
                    (t.checked
                        ? (n.push('selected bg-primary hover:bg-primary-light focus-visible:bg-primary-light'),
                          l.push(`${o}-checked`))
                        : n.push('border border-neutral-dark'),
                        t.class && n.push(t.class));
                    let s = {
                        key: t.key,
                        id: t.id,
                        class: n.join(' '),
                        part: l.join(' '),
                        'aria-checked': t.checked.toString(),
                        'aria-label': null !== (e = t.ariaLabel) && void 0 !== e ? e : t.text,
                        value: t.text,
                        ref: t.ref,
                    };
                    return (0, i.h)(
                        'button',
                        {
                            ...s,
                            role: 'checkbox',
                            onClick: () => {
                                var r;
                                return null === (r = t.onToggle) || void 0 === r ? void 0 : r.call(t, !t.checked);
                            },
                            onMouseDown: (r) => {
                                var e;
                                return null === (e = t.onMouseDown) || void 0 === e ? void 0 : e.call(t, r);
                            },
                        },
                        (0, i.h)('atomic-icon', {
                            style: {stroke: 'white'},
                            class: `w-3/5 ${t.checked ? 'block' : 'hidden'}`,
                            icon: a,
                            part: t.iconPart,
                        }),
                    );
                };
        },
        71343: function (t, r, e) {
            e.d(r, {
                C: function () {
                    return i;
                },
            });
            let i =
                '<svg viewBox="0 0 22 22"><g transform="matrix(.7071 -.7071 .7071 .7071 -3.142 11)"><path d="m9-3.4h2v26.9h-2z"/><path d="m-3.4 9h26.9v2h-26.9z"/></g></svg>';
        },
        75291: function (t, r, e) {
            function i(t, r) {
                return new CustomEvent(t, {detail: r, bubbles: !0, cancelable: !0, composed: !0});
            }
            function o(t, r, e, i) {
                let o = (a) => {
                    (t.removeEventListener(r, o, i), 'object' == typeof e ? e.handleEvent.call(t, a) : e.call(t, a));
                };
                t.addEventListener(r, o, i);
            }
            e.d(r, {
                b: function () {
                    return i;
                },
                l: function () {
                    return o;
                },
            });
        },
        47104: function (t, r, e) {
            e.d(r, {
                F: function () {
                    return o;
                },
            });
            var i = e(5991);
            let o = ({label: t}, r) =>
                (0, i.h)('fieldset', {class: 'contents'}, (0, i.h)('legend', {class: 'accessibility-only'}, t), r);
        },
        45584: function (t, r, e) {
            e.d(r, {
                I: function () {
                    return a;
                },
            });
            var i = e(5991),
                o = e(2108);
            let a = (t) =>
                (0, i.h)(
                    'div',
                    {class: 'relative', part: `${t.partPrefix}-container`},
                    (0, i.h)(
                        o.B,
                        {
                            ...t,
                            class: 'p-3 relative w-[2.6rem] h-[2.6rem]',
                            part: `${t.partPrefix}-button`,
                            ref: t.buttonRef,
                        },
                        (0, i.h)('atomic-icon', {
                            icon: t.icon,
                            class: 'w-4 h-4 shrink-0',
                            part: `${t.partPrefix}-icon`,
                        }),
                    ),
                    t.badge &&
                        (0, i.h)(
                            'span',
                            {
                                part: `${t.partPrefix}-badge`,
                                class: 'absolute block h-4 w-4 text-center bg-primary text-on-primary rounded-[100%] text-xs leading-4 -top-2 -right-2',
                            },
                            t.badge,
                        ),
                );
        },
        8807: function (t, r, e) {
            e.d(r, {
                B: function () {
                    return u;
                },
                H: function () {
                    return n;
                },
                I: function () {
                    return g;
                },
                a: function () {
                    return l;
                },
                b: function () {
                    return d;
                },
            });
            var i = e(5991),
                o = e(75291),
                a = e(66038);
            let n = () => (0, i.h)(i.H, {class: 'atomic-hidden'}),
                l = 'atomic/initializeComponent',
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
                            var r;
                            return null === (r = window.applyFocusVisiblePolyfill) || void 0 === r
                                ? void 0
                                : r.call(window, t.shadowRoot);
                        },
                        {once: !0},
                    );
                }
            }
            let h = 'data-atomic-rendered',
                m = 'data-atomic-loaded';
            function g({forceUpdate: t} = {}) {
                return (r, e) => {
                    let {
                            componentWillLoad: g,
                            render: u,
                            componentDidRender: p,
                            componentDidLoad: w,
                            disconnectedCallback: v,
                        } = r,
                        b = () => {};
                    if ('bindings' !== e)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${e}"`,
                            r,
                        );
                    ((r.componentWillLoad = function () {
                        let r = (0, i.g)(this);
                        (r.setAttribute(h, 'false'), r.setAttribute(m, 'false'));
                        let e = (0, o.b)(l, (r) => {
                            this.bindings = r;
                            let e = () => (0, i.f)(this);
                            (this.bindings.i18n.on('languageChanged', e),
                                (b = () => this.bindings.i18n.off('languageChanged', e)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, i.f)(this)) : (0, i.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((r.dispatchEvent(e), !(0, a.c)(r, s.join(', ')))) {
                            this.error = new c(r.nodeName.toLowerCase());
                            return;
                        }
                        return g && g.call(this);
                    }),
                        (r.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(h, 'true'), u && u.call(this))
                                  : (0, i.h)(n, null);
                        }),
                        (r.disconnectedCallback = function () {
                            let t = (0, i.g)(this);
                            (t.setAttribute(h, 'false'), t.setAttribute(m, 'false'), b(), v && v.call(this));
                        }),
                        (r.componentDidRender = function () {
                            let t = (0, i.g)(this);
                            'false' !== t.getAttribute(h) &&
                                (p && p.call(this),
                                'false' === t.getAttribute(m) &&
                                    (t.setAttribute(m, 'true'), d((0, i.g)(this)), w && w.call(this)));
                        }),
                        (r.componentDidLoad = function () {}));
                };
            }
            function u(t, r) {
                return (e, o) => {
                    let {disconnectedCallback: a, initialize: n} = e;
                    ((e.initialize = function () {
                        return (n && n.call(this), n)
                            ? this[t]
                                ? (null == r ? void 0 : r.onUpdateCallbackMethod) && !this[r.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${r.onUpdateCallbackMethod}" is not defined`,
                                          e,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[o] = this[t].state),
                                              (null == r ? void 0 : r.onUpdateCallbackMethod) &&
                                                  this[r.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${t}`,
                                  e,
                              );
                    }),
                        (e.disconnectedCallback = function () {
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
        31257: function (t, r, e) {
            e.d(r, {
                L: function () {
                    return n;
                },
                b: function () {
                    return a;
                },
            });
            var i = e(5991),
                o = e(2995);
            let a = (t, {onSelect: r, onBeginDelayedSelect: e, onCancelPendingSelect: i, stopPropagation: o = !0}) => {
                    let a = (t, r) => {
                        (o && t.stopPropagation(), r());
                    };
                    (['click', 'contextmenu', 'mousedown', 'mouseup'].forEach((e) =>
                        t.addEventListener(e, (t) => a(t, r)),
                    ),
                        t.addEventListener('touchstart', (t) => a(t, e), {passive: !0}),
                        t.addEventListener('touchend', (t) => a(t, i), {passive: !0}));
                },
                n = (
                    {
                        href: t,
                        className: r,
                        part: e,
                        title: n,
                        onSelect: l,
                        onBeginDelayedSelect: s,
                        onCancelPendingSelect: c,
                        ref: d,
                        attributes: h,
                        tabIndex: m,
                        ariaHidden: g,
                        rel: u,
                        stopPropagation: p = !0,
                        target: w = '_self',
                    },
                    v,
                ) =>
                    (0, i.h)(
                        'a',
                        {
                            class: r,
                            part: e,
                            href: (0, o.f)(t),
                            target: w,
                            title: n,
                            rel: u,
                            ref: (t) => {
                                (d && d(t),
                                    t &&
                                        (a(t, {
                                            onSelect: l,
                                            onBeginDelayedSelect: s,
                                            onCancelPendingSelect: c,
                                            stopPropagation: p,
                                        }),
                                        (null == h ? void 0 : h.length) &&
                                            [...h].forEach(({nodeName: r, nodeValue: e}) => {
                                                t.setAttribute(r, e);
                                            }),
                                        g && t.setAttribute('aria-hidden', 'true')));
                            },
                            tabIndex: m,
                        },
                        v,
                    );
        },
        60375: function (t, r, e) {
            e.d(r, {
                c: function () {
                    return n;
                },
            });
            var i = e(75291);
            let o = 'ripple';
            function a(t) {
                'static' === getComputedStyle(t).position && t.classList.add('ripple-relative');
            }
            function n(t, r) {
                var e;
                let i = null !== (e = r.parent) && void 0 !== e ? e : t.currentTarget,
                    n = i.getElementsByClassName(o)[0];
                (n && n.remove(), i.classList.add('ripple-parent'), a(i), Array.from(i.children).forEach(a));
                let s = document.createElement('span');
                (s.classList.add(o), (s.style.backgroundColor = `var(--atomic-${r.color})`), s.setAttribute('part', o));
                let c = Math.max(i.clientWidth, i.clientHeight),
                    d = c / 2,
                    h = 129.21 * Math.cbrt(d),
                    {top: m, left: g} = i.getBoundingClientRect();
                ((s.style.width = s.style.height = `${c}px`),
                    (s.style.left = `${t.clientX - (g + d)}px`),
                    (s.style.top = `${t.clientY - (m + d)}px`),
                    s.style.setProperty('--animation-duration', `${h}ms`),
                    i.prepend(s),
                    l(s, h));
            }
            async function l(t, r) {
                ((0, i.l)(t, 'animationend', () => {
                    t && t.remove();
                }),
                    setTimeout(() => (null == t ? void 0 : t.remove()), r + 0.1 * r));
            }
        },
        2995: function (t, r, e) {
            e.d(r, {
                f: function () {
                    return i;
                },
            });
            function i(t) {
                let r = /^(https?|ftp|file|mailto|tel|sip):/i.test(t),
                    e = /^\//.test(t);
                return r || e ? t : '';
            }
        },
    },
]);
