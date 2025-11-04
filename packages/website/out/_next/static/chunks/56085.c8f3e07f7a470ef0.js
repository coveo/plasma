'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [56085],
    {
        80421: function (t, e, i) {
            i.d(e, {
                A: function () {
                    return r;
                },
                F: function () {
                    return l;
                },
                g: function () {
                    return o;
                },
            });
            var s = i(75291),
                n = i(66038);
            function r(t, e = !1) {
                function i() {
                    let t = (0, s.b)('atomic/accessibility/findAriaLive', {});
                    document.dispatchEvent(t);
                    let {element: e} = t.detail;
                    return e;
                }
                return (s, n) => {
                    let {componentWillRender: r} = s;
                    (Object.defineProperty(s, n, {
                        set: (s) => {
                            var n;
                            null === (n = i()) || void 0 === n || n.updateMessage(t, s, e);
                        },
                    }),
                        (s.componentWillRender = function () {
                            var s;
                            (r && r.call(this), null === (s = i()) || void 0 === s || s.registerRegion(t, e));
                        }));
                };
            }
            function l() {
                return (t, e) => {
                    let {componentWillLoad: i} = t;
                    t.componentWillLoad = function () {
                        let t, s;
                        i && i.call(this);
                        let {componentDidRender: r} = this,
                            l = !1,
                            o = !1,
                            a = null;
                        this.componentDidRender = function () {
                            if (
                                (r && r.call(this),
                                this.bindings &&
                                    l &&
                                    this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t &&
                                    ((l = !1), s))
                            ) {
                                let t = s;
                                (0, n.d)().then(() => {
                                    (t.focus(), null == a || a());
                                });
                            }
                        };
                        let u = {
                            setTarget: (t) => {
                                t && ((s = t), o && ((o = !1), u.focus()));
                            },
                            focus: async () => {
                                (await (0, n.d)(), null == s || s.focus(), null == a || a());
                            },
                            focusAfterSearch: () => (
                                (t = this.bindings.store.getUniqueIDFromEngine(this.bindings.engine)),
                                (l = !0),
                                new Promise((t) => (a = t))
                            ),
                            focusOnNextTarget: () => ((o = !0), new Promise((t) => (a = t))),
                            disableForCurrentSearch: () =>
                                this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t && (l = !1),
                        };
                        this[e] = u;
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
                        let i = Array.from(e.children);
                        for (let s of (e instanceof HTMLSlotElement
                            ? (i = e.assignedElements())
                            : e.shadowRoot && i.push(...Array.from(e.shadowRoot.children)),
                        i))
                            yield* t(s);
                    })(t).next().value) && void 0 !== e
                    ? e
                    : null;
            }
        },
        2456: function (t, e, i) {
            i.d(e, {
                R: function () {
                    return r;
                },
                g: function () {
                    return n;
                },
            });
            var s = i(27964);
            function n(t, e, i) {
                let s = [
                    (function (t) {
                        switch (t) {
                            case 'grid':
                                return 'display-grid';
                            case 'list':
                            default:
                                return 'display-list';
                            case 'table':
                                return 'display-table';
                        }
                    })(t),
                    (function (t) {
                        switch (t) {
                            case 'comfortable':
                                return 'density-comfortable';
                            case 'normal':
                            default:
                                return 'density-normal';
                            case 'compact':
                                return 'density-compact';
                        }
                    })(e),
                    (function (t) {
                        switch (t) {
                            case 'large':
                                return 'image-large';
                            case 'small':
                                return 'image-small';
                            case 'icon':
                            default:
                                return 'image-icon';
                            case 'none':
                                return 'image-none';
                        }
                    })(i),
                ];
                return s;
            }
            class r {
                constructor(t, e, i, s) {
                    ((this.children = t), (this.display = e), (this.density = i), (this.imageSize = s));
                }
                getImageSizeFromSections() {
                    var t;
                    let e =
                        null === (t = this.getSection('atomic-result-section-visual')) || void 0 === t
                            ? void 0
                            : t.getAttribute('image-size');
                    if (e) return e;
                }
                getSection(t) {
                    return Array.from(this.children).find((e) => e.tagName.toLowerCase() === t);
                }
                getClasses(t) {
                    var e;
                    let i = n(
                        this.display,
                        this.density,
                        null !== (e = this.getImageSizeFromSections()) && void 0 !== e ? e : this.imageSize,
                    );
                    return ((t ? (0, s.c)(t) : (0, s.c)(this.children)) && i.push('with-sections'), i);
                }
            }
        },
        75291: function (t, e, i) {
            function s(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function n(t, e, i, s) {
                let n = (r) => {
                    (t.removeEventListener(e, n, s), 'object' == typeof i ? i.handleEvent.call(t, r) : i.call(t, r));
                };
                t.addEventListener(e, n, s);
            }
            i.d(e, {
                b: function () {
                    return s;
                },
                l: function () {
                    return n;
                },
            });
        },
        8807: function (t, e, i) {
            i.d(e, {
                B: function () {
                    return p;
                },
                H: function () {
                    return l;
                },
                I: function () {
                    return g;
                },
                a: function () {
                    return o;
                },
                b: function () {
                    return c;
                },
            });
            var s = i(5991),
                n = i(75291),
                r = i(66038);
            let l = () => (0, s.h)(s.H, {class: 'atomic-hidden'}),
                o = 'atomic/initializeComponent',
                a = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class u extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of the following elements: ${a.join(', ')}`);
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
            function g({forceUpdate: t} = {}) {
                return (e, i) => {
                    let {
                            componentWillLoad: g,
                            render: p,
                            componentDidRender: f,
                            componentDidLoad: m,
                            disconnectedCallback: b,
                        } = e,
                        R = () => {};
                    if ('bindings' !== i)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${i}"`,
                            e,
                        );
                    ((e.componentWillLoad = function () {
                        let e = (0, s.g)(this);
                        (e.setAttribute(d, 'false'), e.setAttribute(h, 'false'));
                        let i = (0, n.b)(o, (e) => {
                            this.bindings = e;
                            let i = () => (0, s.f)(this);
                            (this.bindings.i18n.on('languageChanged', i),
                                (R = () => this.bindings.i18n.off('languageChanged', i)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, s.f)(this)) : (0, s.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((e.dispatchEvent(i), !(0, r.c)(e, a.join(', ')))) {
                            this.error = new u(e.nodeName.toLowerCase());
                            return;
                        }
                        return g && g.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, s.h)('atomic-component-error', {element: (0, s.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, s.g)(this).setAttribute(d, 'true'), p && p.call(this))
                                  : (0, s.h)(l, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, s.g)(this);
                            (t.setAttribute(d, 'false'), t.setAttribute(h, 'false'), R(), b && b.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, s.g)(this);
                            'false' !== t.getAttribute(d) &&
                                (f && f.call(this),
                                'false' === t.getAttribute(h) &&
                                    (t.setAttribute(h, 'true'), c((0, s.g)(this)), m && m.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function p(t, e) {
                return (i, n) => {
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
                                          ((this[n] = this[t].state),
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
                            ((0, s.g)(this).isConnected ||
                                null === (t = this.unsubscribeController) ||
                                void 0 === t ||
                                t.call(this),
                                r && r.call(this));
                        }));
                };
            }
        },
        70835: function (t, e, i) {
            i.d(e, {
                R: function () {
                    return n;
                },
                T: function () {
                    return r;
                },
            });
            var s = i(5991);
            let n = (t) =>
                    Array.from({length: t.numberOfPlaceholders}, (e, i) =>
                        (0, s.h)('atomic-result-placeholder', {
                            key: `placeholder-${i}`,
                            density: t.density,
                            display: t.display || 'list',
                            imageSize: t.imageSize,
                        }),
                    ),
                r = (t) =>
                    (0, s.h)('atomic-result-table-placeholder', {
                        density: t.density,
                        imageSize: t.imageSize,
                        rows: t.numberOfPlaceholders,
                    });
        },
        35295: function (t, e, i) {
            i.d(e, {
                D: function () {
                    return n;
                },
                u: function () {
                    return o;
                },
            });
            var s = i(66038);
            let n = '1024px';
            function r(t, e) {
                return t.replace(RegExp(`\\(min-width: ${n}\\)`, 'g'), `(min-width: ${e})`);
            }
            let l = ['atomic-search-layout', 'atomic-insight-layout'];
            function o(t) {
                let e = (0, s.c)(t, l.join(', '));
                (null == e ? void 0 : e.mobileBreakpoint) &&
                    e.mobileBreakpoint !== n &&
                    (!(function (t, e) {
                        var i, s;
                        let n = null === (i = t.shadowRoot) || void 0 === i ? void 0 : i.adoptedStyleSheets;
                        if (!n || !n.length) return;
                        let l = n[0],
                            o = Object.values(l.cssRules)
                                .map((t) => t.cssText)
                                .join('');
                        null === (s = l.replaceSync) || void 0 === s || s.call(l, r(o, e));
                    })(t, e.mobileBreakpoint),
                    (function (t, e) {
                        var i;
                        let s = null === (i = t.shadowRoot) || void 0 === i ? void 0 : i.querySelector('style');
                        s && (s.textContent = r(s.textContent, e));
                    })(t, e.mobileBreakpoint));
            }
        },
        95640: function (t, e, i) {
            i.d(e, {
                e: function () {
                    return s;
                },
            });
            function s(t) {
                return t.result || t;
            }
        },
        31257: function (t, e, i) {
            i.d(e, {
                L: function () {
                    return l;
                },
                b: function () {
                    return r;
                },
            });
            var s = i(5991),
                n = i(2995);
            let r = (t, {onSelect: e, onBeginDelayedSelect: i, onCancelPendingSelect: s, stopPropagation: n = !0}) => {
                    let r = (t, e) => {
                        (n && t.stopPropagation(), e());
                    };
                    (['click', 'contextmenu', 'mousedown', 'mouseup'].forEach((i) =>
                        t.addEventListener(i, (t) => r(t, e)),
                    ),
                        t.addEventListener('touchstart', (t) => r(t, i), {passive: !0}),
                        t.addEventListener('touchend', (t) => r(t, s), {passive: !0}));
                },
                l = (
                    {
                        href: t,
                        className: e,
                        part: i,
                        title: l,
                        onSelect: o,
                        onBeginDelayedSelect: a,
                        onCancelPendingSelect: u,
                        ref: c,
                        attributes: d,
                        tabIndex: h,
                        ariaHidden: g,
                        rel: p,
                        stopPropagation: f = !0,
                        target: m = '_self',
                    },
                    b,
                ) =>
                    (0, s.h)(
                        'a',
                        {
                            class: e,
                            part: i,
                            href: (0, n.f)(t),
                            target: m,
                            title: l,
                            rel: p,
                            ref: (t) => {
                                (c && c(t),
                                    t &&
                                        (r(t, {
                                            onSelect: o,
                                            onBeginDelayedSelect: a,
                                            onCancelPendingSelect: u,
                                            stopPropagation: f,
                                        }),
                                        (null == d ? void 0 : d.length) &&
                                            [...d].forEach(({nodeName: e, nodeValue: i}) => {
                                                t.setAttribute(e, i);
                                            }),
                                        g && t.setAttribute('aria-hidden', 'true')));
                            },
                            tabIndex: h,
                        },
                        b,
                    );
        },
        60562: function (t, e, i) {
            i.d(e, {
                R: function () {
                    return y;
                },
                r: function () {
                    return R;
                },
            });
            var s = i(5991),
                n = i(80421),
                r = i(35295),
                l = i(66038),
                o = i(70835),
                a = i(95640),
                u = i(2456),
                c = i(31257),
                d = i(49800);
            let h = (t) =>
                    t.getResultListState().results.map((e, i) => {
                        let n = (0, a.e)(e),
                            r = t.getInteractiveResult(n);
                        return (0, s.h)(
                            'div',
                            {
                                part: 'result-list-grid-clickable-container outline',
                                ref: (e) => t.setNewResultRef(e, i),
                                onClick: (e) => {
                                    (e.preventDefault(),
                                        r.select(),
                                        window.open(
                                            n.clickUri,
                                            e.ctrlKey || e.metaKey ? '_blank' : t.gridCellLinkTarget,
                                            'noopener',
                                        ));
                                },
                            },
                            (0, s.h)(
                                c.L,
                                {
                                    part: 'result-list-grid-clickable',
                                    onSelect: () => r.select(),
                                    onBeginDelayedSelect: () => r.beginDelayedSelect(),
                                    onCancelPendingSelect: () => r.cancelPendingSelect(),
                                    href: n.clickUri,
                                    title: n.title,
                                    target: t.gridCellLinkTarget,
                                    rel: 'noopener',
                                },
                                n.title,
                            ),
                            t.renderResult({
                                key: t.getResultId(e),
                                result: e,
                                interactiveResult: t.getInteractiveResult(n),
                                store: t.bindings.store,
                                content: t.resultTemplateProvider.getTemplateContent(e),
                                loadingFlag: t.loadingFlag,
                                display: t.getResultDisplay(),
                                density: t.getDensity(),
                                imageSize: t.getImageSize(),
                                renderingFunction: t.getResultRenderingFunction(),
                            }),
                        );
                    }),
                g = (t) =>
                    t.getResultListState().results.map((e, i) =>
                        t.renderResult({
                            key: t.getResultId(e),
                            part: 'outline',
                            result: e,
                            interactiveResult: t.getInteractiveResult((0, a.e)(e)),
                            store: t.bindings.store,
                            content: t.resultTemplateProvider.getTemplateContent(e),
                            loadingFlag: t.loadingFlag,
                            display: t.getResultDisplay(),
                            density: t.getDensity(),
                            imageSize: t.getImageSize(),
                            ref: (e) => t.setNewResultRef(e, i),
                            renderingFunction: t.getResultRenderingFunction(),
                        }),
                    ),
                p = (t) => {
                    let e = f(t);
                    return (
                        e.length ||
                            t.bindings.engine.logger.error(
                                'atomic-table-element elements missing in the result template to display columns.',
                                t.host,
                            ),
                        (0, s.h)(
                            'table',
                            {class: `list-root ${t.listClasses}`, part: 'result-table'},
                            (0, s.h)(
                                'thead',
                                {part: 'result-table-heading'},
                                (0, s.h)(
                                    'tr',
                                    {part: 'result-table-heading-row'},
                                    e.map((t) =>
                                        (0, s.h)(
                                            'th',
                                            {part: 'result-table-heading-cell'},
                                            (0, s.h)('atomic-text', {value: t.getAttribute('label')}),
                                        ),
                                    ),
                                ),
                            ),
                            (0, s.h)(
                                'tbody',
                                {part: 'result-table-body'},
                                t.getResultListState().results.map((i, n) =>
                                    (0, s.h)(
                                        'tr',
                                        {
                                            key: t.getResultId(i),
                                            part:
                                                'result-table-row ' +
                                                (n % 2 == 1 ? 'result-table-row-even' : 'result-table-row-odd'),
                                            ref: (e) => t.setNewResultRef(e, n),
                                        },
                                        e.map((e) => {
                                            let n = e.getAttribute('label') + t.getResultId(i);
                                            return (0, s.h)(
                                                'td',
                                                {key: n, part: 'result-table-cell'},
                                                t.renderResult({
                                                    result: i,
                                                    interactiveResult: t.getInteractiveResult((0, a.e)(i)),
                                                    store: t.bindings.store,
                                                    content: e,
                                                    loadingFlag: t.loadingFlag,
                                                    display: t.getResultDisplay(),
                                                    density: t.getDensity(),
                                                    imageSize: t.getImageSize(),
                                                }),
                                            );
                                        }),
                                    ),
                                ),
                            ),
                        )
                    );
                },
                f = (t) => (t.getResultRenderingFunction() ? m(t) : b(t)),
                m = (t) => {
                    let e = document.createElement('div'),
                        i = t.getResultRenderingFunction(),
                        s = i(t.getResultListState().results[0], document.createElement('div'));
                    return ((e.innerHTML = s), Array.from(e.querySelectorAll(d.t)));
                },
                b = (t) =>
                    Array.from(
                        t.resultTemplateProvider
                            .getTemplateContent(t.getResultListState().results[0])
                            .querySelectorAll(d.t),
                    ),
                R = 'result-component';
            class y {
                constructor(t) {
                    ((this.props = t),
                        this.props.bindings.store.setLoadingFlag(this.props.loadingFlag),
                        this.props.bindings.store.registerResultList(this),
                        this.addUpdateBreakpointOnce());
                }
                addUpdateBreakpointOnce() {
                    this.updateBreakpoints = (0, l.o)((t) => {
                        (0, r.u)(t);
                    });
                }
                getResultId(t) {
                    return `${(0, a.e)(t).uniqueId}${this.props.getResultListState().searchResponseId}${this.props.getDensity()}${this.props.getImageSize()}`;
                }
                setNewResultRef(t, e) {
                    var i, s;
                    if (
                        (0 === e && (this.firstResultEl = t),
                        e !== this.indexOfResultToFocus ||
                            (!t.children.length &&
                                !(null === (i = t.shadowRoot) || void 0 === i ? void 0 : i.children.length)))
                    )
                        return;
                    this.indexOfResultToFocus = void 0;
                    let r = null !== (s = (0, n.g)(t)) && void 0 !== s ? s : t;
                    this.props.nextNewResultTarget.setTarget(r);
                }
                focusOnNextNewResult() {
                    ((this.indexOfResultToFocus = this.props.getResultListState().results.length),
                        this.props.nextNewResultTarget.focusOnNextTarget());
                }
                async focusOnFirstResultAfterNextSearch() {
                    return (
                        await (0, l.d)(),
                        new Promise((t) => {
                            this.props.getResultListState().isLoading && (this.firstResultEl = void 0);
                            let e = this.props.bindings.engine.subscribe(async () => {
                                var i;
                                if (
                                    (await (0, l.d)(), !this.props.getResultListState().isLoading && this.firstResultEl)
                                ) {
                                    let s =
                                        null !== (i = (0, n.g)(this.firstResultEl)) && void 0 !== i
                                            ? i
                                            : this.firstResultEl;
                                    (this.props.nextNewResultTarget.setTarget(s),
                                        this.props.nextNewResultTarget.focus(),
                                        (this.firstResultEl = void 0),
                                        e(),
                                        t());
                                }
                            });
                        })
                    );
                }
                get displayPlaceholders() {
                    return !this.props.bindings.store.isAppLoaded();
                }
                get listClasses() {
                    let t = (0, u.g)(this.props.getLayoutDisplay(), this.props.getDensity(), this.props.getImageSize());
                    return (
                        this.props.getResultListState().firstSearchExecuted &&
                            this.props.getResultListState().isLoading &&
                            t.push('loading'),
                        this.displayPlaceholders && t.push('placeholder'),
                        t.join(' ')
                    );
                }
                render() {
                    var t;
                    if (
                        (null === (t = this.updateBreakpoints) || void 0 === t || t.call(this, this.props.host),
                        this.props.resultTemplateProvider.templatesRegistered &&
                            !this.props.getResultListState().hasError &&
                            (!this.props.getResultListState().firstSearchExecuted ||
                                this.props.getResultListState().hasResults))
                    )
                        return (0, s.h)(
                            s.F,
                            null,
                            this.props.resultTemplateProvider.hasError && (0, s.h)('slot', null),
                            (0, s.h)(
                                'div',
                                {class: `list-wrapper ${this.listClasses}`},
                                (0, s.h)(
                                    v,
                                    {listClasses: this.listClasses, display: this.props.getLayoutDisplay()},
                                    this.displayPlaceholders &&
                                        (0, s.h)(w, {
                                            numberOfPlaceholders: this.props.getNumberOfPlaceholders(),
                                            density: this.props.getDensity(),
                                            display: this.props.getResultDisplay(),
                                            imageSize: this.props.getImageSize(),
                                        }),
                                    this.props.getResultListState().firstSearchExecuted &&
                                        (0, s.h)(S, {
                                            getResultId: (t) => this.getResultId(t),
                                            listClasses: this.listClasses,
                                            setNewResultRef: (...t) => this.setNewResultRef(...t),
                                            ...this.props,
                                        }),
                                ),
                            ),
                        );
                }
            }
            let v = (t, e) =>
                    'table' === t.display
                        ? e
                        : (0, s.h)('div', {class: `list-root ${t.listClasses}`, part: 'result-list'}, e),
                w = (t) => ('table' === t.display ? (0, s.h)(o.T, {...t}) : (0, s.h)(o.R, {...t})),
                S = (t) => {
                    if (!t.getResultListState().results.length) return null;
                    switch (t.getLayoutDisplay()) {
                        case 'table':
                            return (0, s.h)(p, {...t});
                        case 'grid':
                            return (0, s.h)(h, {...t});
                        default:
                            return (0, s.h)(g, {...t});
                    }
                };
        },
        27964: function (t, e, i) {
            i.d(e, {
                c: function () {
                    return l;
                },
                i: function () {
                    return r;
                },
            });
            var s = i(66038);
            let n = new Set([
                'atomic-result-section-visual',
                'atomic-result-section-badges',
                'atomic-result-section-actions',
                'atomic-result-section-title',
                'atomic-result-section-title-metadata',
                'atomic-result-section-emphasized',
                'atomic-result-section-excerpt',
                'atomic-result-section-bottom-metadata',
                'atomic-result-section-children',
            ]);
            function r(t) {
                return !!(0, s.e)(t) && n.has(t.tagName.toLowerCase());
            }
            function l(t) {
                return 'string' == typeof t
                    ? Array.from(n.values()).some((e) => t.includes(e))
                    : Array.from(t).some((t) => r(t));
            }
        },
        49800: function (t, e, i) {
            i.d(e, {
                t: function () {
                    return s;
                },
            });
            let s = 'atomic-table-element';
        },
        2995: function (t, e, i) {
            i.d(e, {
                f: function () {
                    return s;
                },
            });
            function s(t) {
                let e = /^(https?|ftp|file|mailto|tel|sip):/i.test(t),
                    i = /^\//.test(t);
                return e || i ? t : '';
            }
        },
    },
]);
