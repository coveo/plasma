'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [50254],
    {
        80421: function (e, t, s) {
            s.d(t, {
                A: function () {
                    return r;
                },
                F: function () {
                    return i;
                },
                g: function () {
                    return l;
                },
            });
            var n = s(75291),
                a = s(66038);
            function r(e, t = !1) {
                function s() {
                    let e = (0, n.b)('atomic/accessibility/findAriaLive', {});
                    document.dispatchEvent(e);
                    let {element: t} = e.detail;
                    return t;
                }
                return (n, a) => {
                    let {componentWillRender: r} = n;
                    (Object.defineProperty(n, a, {
                        set: (n) => {
                            var a;
                            null === (a = s()) || void 0 === a || a.updateMessage(e, n, t);
                        },
                    }),
                        (n.componentWillRender = function () {
                            var n;
                            (r && r.call(this), null === (n = s()) || void 0 === n || n.registerRegion(e, t));
                        }));
                };
            }
            function i() {
                return (e, t) => {
                    let {componentWillLoad: s} = e;
                    e.componentWillLoad = function () {
                        let e, n;
                        s && s.call(this);
                        let {componentDidRender: r} = this,
                            i = !1,
                            l = !1,
                            u = null;
                        this.componentDidRender = function () {
                            if (
                                (r && r.call(this),
                                this.bindings &&
                                    i &&
                                    this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== e &&
                                    ((i = !1), n))
                            ) {
                                let e = n;
                                (0, a.d)().then(() => {
                                    (e.focus(), null == u || u());
                                });
                            }
                        };
                        let o = {
                            setTarget: (e) => {
                                e && ((n = e), l && ((l = !1), o.focus()));
                            },
                            focus: async () => {
                                (await (0, a.d)(), null == n || n.focus(), null == u || u());
                            },
                            focusAfterSearch: () => (
                                (e = this.bindings.store.getUniqueIDFromEngine(this.bindings.engine)),
                                (i = !0),
                                new Promise((e) => (u = e))
                            ),
                            focusOnNextTarget: () => ((l = !0), new Promise((e) => (u = e))),
                            disableForCurrentSearch: () =>
                                this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== e && (i = !1),
                        };
                        this[t] = o;
                    };
                };
            }
            function l(e) {
                var t;
                return null !==
                    (t = (function* e(t) {
                        (function (e) {
                            if ('-1' === e.getAttribute('tabindex')) return !1;
                            if (e.hasAttribute('tabindex') || 'true' === e.getAttribute('contentEditable')) return !0;
                            switch (e.tagName) {
                                case 'A':
                                case 'AREA':
                                    return e.hasAttribute('href');
                                case 'INPUT':
                                case 'SELECT':
                                case 'TEXTAREA':
                                case 'BUTTON':
                                    return !e.hasAttribute('disabled');
                                case 'IFRAME':
                                    return !0;
                                default:
                                    return !1;
                            }
                        })(t) && (yield t);
                        let s = Array.from(t.children);
                        for (let n of (t instanceof HTMLSlotElement
                            ? (s = t.assignedElements())
                            : t.shadowRoot && s.push(...Array.from(t.shadowRoot.children)),
                        s))
                            yield* e(n);
                    })(e).next().value) && void 0 !== t
                    ? t
                    : null;
            }
        },
        11312: function (e, t, s) {
            s.d(t, {
                F: function () {
                    return S;
                },
                a: function () {
                    return m;
                },
                b: function () {
                    return f;
                },
                c: function () {
                    return g;
                },
                d: function () {
                    return v;
                },
                e: function () {
                    return x;
                },
                f: function () {
                    return R;
                },
                p: function () {
                    return y;
                },
                s: function () {
                    return V;
                },
                v: function () {
                    return w;
                },
            });
            var n = s(98214),
                a = s(5991),
                r = s(78681),
                i = s(88780),
                l = s(8807),
                u = s(30257),
                o = s(5812),
                c = s(71343),
                h = s(33290),
                d = s(2108);
            let f = (e) => {
                let t;
                let s = e.i18n.t(e.label),
                    n = e.i18n.t('facet-search-input'),
                    r = e.i18n.t('facet-search', {label: s}),
                    i = e.i18n.t('clear');
                return (0, a.h)(
                    'div',
                    {class: 'px-2 mt-3', part: 'search-wrapper'},
                    (0, a.h)(
                        'div',
                        {class: 'relative h-10'},
                        (0, a.h)('input', {
                            part: 'search-input',
                            class: 'input-primary w-full h-full px-9 placeholder-neutral-dark text-sm group',
                            type: 'text',
                            placeholder: n,
                            'aria-label': r,
                            value: e.query,
                            onInput: (t) => e.onChange(t.target.value),
                            ref: (e) => (t = e),
                        }),
                        (0, a.h)(
                            'div',
                            {
                                part: 'search-icon',
                                class: 'search-icon pointer-events-none absolute inline-flex justify-center items-center left-0 w-9 h-full text-on-background',
                            },
                            (0, a.h)('atomic-icon', {class: 'w-3', icon: h.S}),
                        ),
                        '' !== e.query &&
                            (0, a.h)(
                                d.B,
                                {
                                    style: 'text-transparent',
                                    title: i,
                                    part: 'search-clear-button',
                                    class: 'search-clear-button absolute inline-flex justify-center items-center right-px w-9 top-px bottom-px',
                                    onClick: () => {
                                        (e.onClear(), t.focus());
                                    },
                                },
                                (0, a.h)('atomic-icon', {class: 'w-2.5', icon: c.C}),
                            ),
                    ),
                );
            };
            function p(e, t, s) {
                return s.t(e, {
                    query: `<span class="font-bold italic text-on-background" part="matches-query">${(0, u.e)(t)}</span>`,
                    interpolation: {escapeValue: !1},
                });
            }
            let g = (e) =>
                    e.numberOfMatches
                        ? e.hasMoreMatches
                            ? (0, a.h)(
                                  'div',
                                  {class: 'px-2'},
                                  (0, a.h)('div', {
                                      part: 'more-matches',
                                      class: 'truncate mt-3 text-neutral-dark text-sm',
                                      innerHTML: p('more-matches-for', e.query, e.i18n),
                                  }),
                              )
                            : void 0
                        : (0, a.h)(
                              'div',
                              {class: 'px-2'},
                              (0, a.h)('div', {
                                  part: 'no-matches',
                                  class: 'truncate p-3 bg-neutral-light text-neutral-dark text-sm rounded',
                                  innerHTML: p('no-matches-found-for', e.query, e.i18n),
                              }),
                          ),
                b = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M496 208H304V16h-96v192H16v96h192v192h96V304h192"/>
</svg>
`,
                m = (e) => {
                    let t = e.i18n.t(e.label),
                        s = e.i18n.t('show-more'),
                        n = e.i18n.t('show-more-facet-values', {label: t}),
                        r = e.i18n.t('show-less'),
                        i = e.i18n.t('show-less-facet-values', {label: t}),
                        l = 'flex items-baseline text-left p-2 text-sm max-w-full',
                        u = 'w-2 h-2 mr-1';
                    if (e.canShowLessValues || e.canShowMoreValues)
                        return (0, a.h)(
                            'div',
                            {class: 'mt-2'},
                            (0, a.h)(
                                d.B,
                                {
                                    style: 'text-primary',
                                    part: 'show-less',
                                    class: `${l} ${e.canShowLessValues ? '' : 'hidden'}`,
                                    ariaLabel: i,
                                    onClick: () => e.onShowLess(),
                                    ref: e.showLessRef,
                                },
                                (0, a.h)('atomic-icon', {
                                    part: 'show-more-less-icon',
                                    class: u,
                                    icon: '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m64 208h384v96h-384z"/></svg>',
                                }),
                                (0, a.h)('span', {class: 'truncate'}, r),
                            ),
                            (0, a.h)(
                                d.B,
                                {
                                    style: 'text-primary',
                                    part: 'show-more',
                                    class: `${l} ${e.canShowMoreValues ? '' : 'hidden'}`,
                                    ariaLabel: n,
                                    onClick: () => e.onShowMore(),
                                    ref: e.showMoreRef,
                                },
                                (0, a.h)('atomic-icon', {part: 'show-more-less-icon', class: u, icon: b}),
                                (0, a.h)('span', {class: 'truncate'}, s),
                            ),
                        );
                },
                v = (e, t) => {
                    let s = new Intl.NumberFormat(e.i18n.language, {notation: 'compact'}).format(e.numberOfResults),
                        n = e.numberOfResults.toLocaleString(e.i18n.language),
                        r = e.i18n.t('facet-value', {value: e.displayValue, count: e.numberOfResults});
                    return (0, a.h)(
                        'li',
                        {key: e.displayValue},
                        (0, a.h)(
                            d.B,
                            {
                                style: 'outline-bg-neutral',
                                part: `value-box${e.isSelected ? ' value-box-selected' : ''}`,
                                onClick: () => e.onClick(),
                                class: `value-box box-border w-full h-full items-center p-2 group ${e.isSelected ? 'selected' : ''}`,
                                ariaPressed: e.isSelected.toString(),
                                ariaLabel: r,
                                ref: e.buttonRef,
                            },
                            t,
                            (0, a.h)(
                                'span',
                                {
                                    title: n,
                                    part: 'value-count',
                                    class: 'value-box-count text-neutral-dark truncate w-full text-sm mt-1',
                                },
                                e.i18n.t('between-parentheses', {text: s}),
                            ),
                        ),
                    );
                },
                S = (e, t) => {
                    var s;
                    let n = e.numberOfResults.toLocaleString(e.i18n.language),
                        r = e.i18n.t('facet-value', {
                            value: e.displayValue,
                            count: e.numberOfResults,
                            interpolation: {escapeValue: !1},
                        }),
                        i =
                            null !== (s = e.part) && void 0 !== s
                                ? s
                                : `value-link${e.isSelected ? ' value-link-selected' : ''}`;
                    return (
                        e.additionalPart && (i += ` ${e.additionalPart}`),
                        (0, a.h)(
                            'li',
                            {key: e.displayValue, class: e.class},
                            (0, a.h)(
                                d.B,
                                {
                                    style: 'text-neutral',
                                    part: i,
                                    onClick: () => e.onClick(),
                                    class: 'group w-full flex items-center px-2 py-2.5 text-left truncate no-outline',
                                    ariaPressed: e.isSelected.toString(),
                                    ariaLabel: r,
                                    ref: e.buttonRef,
                                },
                                t,
                                (0, a.h)(
                                    'span',
                                    {part: 'value-count', class: 'value-count'},
                                    e.i18n.t('between-parentheses', {text: n}),
                                ),
                            ),
                            e.subList,
                        )
                    );
                };
            function y(e) {
                return Object.entries(e).map(([e, t]) => ({
                    parentFacetId: e,
                    condition: (e) =>
                        e.some((e) => {
                            if ('children' in e && Array.isArray(e.children)) {
                                let s = (function e(t) {
                                    if ('selected' === t.state) return t;
                                    for (let s of t.children) {
                                        let t = e(s);
                                        if (null !== t) return t;
                                    }
                                    return null;
                                })(e);
                                return !!s && (!t || s.value === t);
                            }
                            return (
                                'value' in e &&
                                'string' == typeof e.value &&
                                !('children' in e) &&
                                'selected' === e.state &&
                                (!t || e.value === t)
                            );
                        }),
                }));
            }
            function w(e) {
                if (Object.keys(e).length > 1) throw "Depending on multiple facets isn't supported";
            }
            function V(e) {
                let {hasInput: t, hasInputRange: s, searchStatusState: n, facetValues: a} = e;
                if (!t) return !1;
                if (s) return !0;
                if (!n.hasResults) return !1;
                let r = a.filter((e) => e.numberOfResults || 'idle' !== e.state) || [];
                return !!r.length;
            }
            function R(e, t) {
                return e + 1 > t;
            }
            class x {
                constructor(e) {
                    ((this.resultIndexToFocusOnShowMore = 0),
                        (this.host = e.host),
                        (this.bindings = e.bindings),
                        (this.label = e.label),
                        (this.field = e.field),
                        (this.headingLevel = e.headingLevel),
                        (this.displayValuesAs = e.displayValuesAs),
                        (this.dependsOn = e.dependsOn),
                        (this.dependenciesManager = e.dependenciesManager),
                        (this.facet = e.facet),
                        (this.facetId = e.facetId),
                        (this.sortCriteria = e.sortCriteria),
                        (this.withSearch = e.withSearch),
                        this.validateProps());
                    let t = {label: () => this.bindings.i18n.t(this.label), facetId: this.facetId, element: this.host};
                    (this.bindings.store.registerFacet('facets', t),
                        (0, i.i)(this.host, {
                            ...t,
                            hasValues: () => !!this.facet.state.values.length,
                            numberOfSelectedValues: () => this.numberOfSelectedValues,
                        }));
                }
                validateProps() {
                    (new n.S({displayValuesAs: new n.a({constrainTo: ['checkbox', 'link', 'box']})}).validate({
                        displayValuesAs: this.displayValuesAs,
                    }),
                        w(this.dependsOn));
                }
                disconnectedCallback() {
                    var e;
                    this.host.isConnected ||
                        null === (e = this.dependenciesManager) ||
                        void 0 === e ||
                        e.stopWatching();
                }
                componentShouldUpdate(e, t, s) {
                    return 'facetState' !== s || !t || !this.withSearch || (0, u.s)(e, t);
                }
                renderHeader(e, t, s) {
                    return (0, a.h)(u.d, {
                        i18n: this.bindings.i18n,
                        label: this.label,
                        onClearFilters: () => {
                            (e.focusAfterSearch(), this.facet.deselectAll());
                        },
                        numberOfSelectedValues: this.numberOfSelectedValues,
                        isCollapsed: t,
                        headingLevel: this.headingLevel,
                        onToggleCollapse: s,
                        headerRef: e.setTarget,
                    });
                }
                get numberOfSelectedValues() {
                    return this.facet.state.values.filter(({state: e}) => 'selected' === e).length;
                }
                renderSearchInput() {
                    if (this.withSearch)
                        return (0, a.h)(f, {
                            i18n: this.bindings.i18n,
                            label: this.label,
                            query: this.facet.state.facetSearch.query,
                            onChange: (e) => {
                                if ('' === e) {
                                    this.facet.facetSearch.clear();
                                    return;
                                }
                                (this.facet.facetSearch.updateCaptions((0, r.a)(this.field, this.bindings.i18n)),
                                    this.facet.facetSearch.updateText(e),
                                    this.facet.facetSearch.search());
                            },
                            onClear: () => this.facet.facetSearch.clear(),
                        });
                }
                renderMatches() {
                    return (0, a.h)(g, {
                        i18n: this.bindings.i18n,
                        query: this.facet.state.facetSearch.query,
                        numberOfMatches: this.facet.state.facetSearch.values.length,
                        hasMoreMatches: this.facet.state.facetSearch.moreValuesAvailable,
                    });
                }
                renderValuesContainer(e, t) {
                    let s = `mt-3 ${'box' === this.displayValuesAs ? 'box-container' : ''}`;
                    return (0, a.h)(
                        u.b,
                        {i18n: this.bindings.i18n, label: this.label, query: t},
                        (0, a.h)('ul', {class: s, part: 'values'}, e),
                    );
                }
                renderSearchResults(e, t) {
                    return this.renderValuesContainer(
                        this.facet.state.facetSearch.values.map((s) =>
                            this.renderValue(
                                {state: 'idle', numberOfResults: s.count, value: s.rawValue},
                                () =>
                                    'link' === this.displayValuesAs
                                        ? this.facet.facetSearch.singleSelect(s)
                                        : this.facet.facetSearch.select(s),
                                !1,
                                !1,
                                e,
                                t,
                            ),
                        ),
                        this.facet.state.facetSearch.query,
                    );
                }
                renderValues(e, t) {
                    return this.renderValuesContainer(
                        this.facet.state.values.map((s, n) =>
                            this.renderValue(
                                s,
                                () =>
                                    'link' === this.displayValuesAs
                                        ? this.facet.toggleSingleSelect(s)
                                        : this.facet.toggleSelect(s),
                                0 === n,
                                n === ('automatic' === this.sortCriteria ? 0 : this.resultIndexToFocusOnShowMore),
                                e,
                                t,
                            ),
                        ),
                    );
                }
                renderValue(e, t, s, n, i, l) {
                    let o = (0, r.g)(this.field, e.value, this.bindings.i18n),
                        c = 'selected' === e.state;
                    switch (this.displayValuesAs) {
                        case 'checkbox':
                            return (0, a.h)(
                                u.f,
                                {
                                    displayValue: o,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: c,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (s && i.setTarget(e), n && l.setTarget(e));
                                    },
                                },
                                (0, a.h)(u.F, {
                                    displayValue: o,
                                    isSelected: c,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                        case 'link':
                            return (0, a.h)(
                                S,
                                {
                                    displayValue: o,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: c,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (s && i.setTarget(e), n && l.setTarget(e));
                                    },
                                },
                                (0, a.h)(u.F, {
                                    displayValue: o,
                                    isSelected: c,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                        case 'box':
                            return (0, a.h)(
                                v,
                                {
                                    displayValue: o,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: c,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (s && i.setTarget(e), n && l.setTarget(e));
                                    },
                                },
                                (0, a.h)(u.F, {
                                    displayValue: o,
                                    isSelected: c,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                    }
                }
                renderShowMoreLess(e, t) {
                    return (0, a.h)(m, {
                        label: this.label,
                        i18n: this.bindings.i18n,
                        onShowMore: () => {
                            ((this.resultIndexToFocusOnShowMore = this.facet.state.values.length),
                                t.focusAfterSearch(),
                                this.facet.showMoreValues());
                        },
                        onShowLess: () => {
                            (e.focusAfterSearch(), this.facet.showLessValues());
                        },
                        canShowMoreValues: this.facet.state.canShowMoreValues,
                        canShowLessValues: this.facet.state.canShowLessValues,
                    });
                }
                renderBody(e, t) {
                    return [
                        this.renderSearchInput(),
                        (0, u.a)(this.facet.state.facetSearch)
                            ? [this.renderSearchResults(e, t), this.renderMatches()]
                            : [this.renderValues(e, t), this.renderShowMoreLess(e, t)],
                    ];
                }
                render({
                    hasError: e,
                    firstSearchExecuted: t,
                    isCollapsed: s,
                    numberOfValues: n,
                    headerFocus: r,
                    showLessFocus: i,
                    showMoreFocus: c,
                    onToggleCollapse: h,
                }) {
                    return e || !this.facet.state.enabled
                        ? (0, a.h)(l.H, null)
                        : t
                          ? this.facet.state.values.length
                              ? (0, a.h)(u.c, null, this.renderHeader(r, s, h), !s && this.renderBody(i, c))
                              : (0, a.h)(l.H, null)
                          : (0, a.h)(o.F, {numberOfValues: n, isCollapsed: s});
                }
            }
        },
        5812: function (e, t, s) {
            s.d(t, {
                F: function () {
                    return r;
                },
            });
            var n = s(5991),
                a = s(66038);
            let r = ({numberOfValues: e, isCollapsed: t}) => {
                let s = [];
                for (let t = 0; t < e; t++) {
                    let e = `${(0, a.g)(60, 100)}%`,
                        t = `${(0, a.g)(0.3, 1)}`;
                    s.push((0, n.h)('div', {class: 'flex bg-neutral h-5 mt-4', style: {width: e, opacity: t}}));
                }
                return (0, n.h)(
                    'div',
                    {
                        part: 'placeholder',
                        class: 'bg-background animate-pulse border border-neutral rounded-lg mb-4 p-7',
                        'aria-hidden': 'true',
                    },
                    (0, n.h)('div', {class: 'bg-neutral rounded h-8', style: {width: `${(0, a.g)(25, 75)}%`}}),
                    !t && (0, n.h)('div', {class: 'mt-7'}, s),
                );
            };
        },
        63975: function (e, t, s) {
            s.d(t, {
                a: function () {
                    return r;
                },
                d: function () {
                    return a;
                },
            });
            var n = s(75291);
            let a = (e, t) => {
                    let s = (0, n.b)('atomic/numberFormat', e),
                        a = t.dispatchEvent(s);
                    if (a)
                        throw Error(
                            'The Atomic number format component was not handled, as it is not a child of a compatible component',
                        );
                },
                r = (e, t) => e.toLocaleString(t);
        },
        95800: function (e, t, s) {
            s.d(t, {
                N: function () {
                    return d;
                },
            });
            var n = s(98214),
                a = s(5991),
                r = s(78681),
                i = s(66038),
                l = s(88780),
                u = s(8807),
                o = s(11312),
                c = s(30257),
                h = s(5812);
            class d {
                constructor(e) {
                    ((this.props = e),
                        (this.manualRanges = []),
                        this.validateProps(),
                        (this.facetId = this.determineFacetId),
                        this.props.setFacetId(this.facetId),
                        this.props.numberOfValues > 0 &&
                            ((this.manualRanges = this.props.setManualRanges(
                                Array.from(this.props.host.querySelectorAll('atomic-numeric-range')).map(
                                    ({start: e, end: t, endInclusive: s, label: n}) => ({
                                        ...this.props.buildNumericRange({start: e, end: t, endInclusive: s}),
                                        label: n,
                                    }),
                                ),
                            )),
                            (this.facetForRange = this.props.initializeFacetForRange())),
                        this.props.withInput &&
                            ((this.facetForInput = this.props.initializeFacetForInput()),
                            (this.filter = this.props.initializeFilter())),
                        (this.dependenciesManager = this.props.buildDependenciesManager()),
                        this.registerFacetToStore());
                }
                get determineFacetId() {
                    return this.props.facetId
                        ? this.props.facetId
                        : this.props.bindings.store.get('numericFacets')[this.props.field]
                          ? (0, i.r)(`${this.props.field}_`)
                          : this.props.field;
                }
                get formatter() {
                    return this.props.getFormatter();
                }
                get enabled() {
                    var e, t, s, n;
                    return (
                        null ===
                            (n =
                                null !==
                                    (t =
                                        null === (e = this.facetForRange) || void 0 === e ? void 0 : e.state.enabled) &&
                                void 0 !== t
                                    ? t
                                    : null === (s = this.filter) || void 0 === s
                                      ? void 0
                                      : s.state.enabled) ||
                        void 0 === n ||
                        n
                    );
                }
                get hasValues() {
                    var e;
                    return (
                        (null !== (e = this.facetForInput) && void 0 !== e && !!e.state.values.length) ||
                        !!this.valuesToRender.length
                    );
                }
                get numberOfSelectedValues() {
                    var e, t;
                    return (null === (e = this.filter) || void 0 === e ? void 0 : e.state.range)
                        ? 1
                        : (null === (t = this.facetForRange) || void 0 === t
                              ? void 0
                              : t.state.values.filter(({state: e}) => 'selected' === e).length) || 0;
                }
                get hasInputRange() {
                    var e;
                    return !!(null === (e = this.filter) || void 0 === e ? void 0 : e.state.range);
                }
                get shouldRenderFacet() {
                    return this.shouldRenderInput || this.shouldRenderValues;
                }
                get searchStatusState() {
                    return this.props.getSearchStatusState();
                }
                get shouldRenderInput() {
                    var e;
                    return (0, o.s)({
                        hasInputRange: this.hasInputRange,
                        searchStatusState: this.searchStatusState,
                        facetValues:
                            (null === (e = this.facetForInput) || void 0 === e ? void 0 : e.state.values) || [],
                        hasInput: !!this.props.withInput,
                    });
                }
                get shouldRenderValues() {
                    return !this.hasInputRange && this.props.numberOfValues > 0 && !!this.valuesToRender.length;
                }
                validateProps() {
                    (new n.S({
                        displayValuesAs: new n.a({constrainTo: ['checkbox', 'link']}),
                        withInput: new n.a({constrainTo: ['integer', 'decimal']}),
                    }).validate({displayValuesAs: this.props.displayValuesAs, withInput: this.props.withInput}),
                        (0, o.v)(this.props.dependsOn));
                }
                disconnectedCallback() {
                    var e;
                    this.props.host.isConnected ||
                        null === (e = this.dependenciesManager) ||
                        void 0 === e ||
                        e.stopWatching();
                }
                registerFacetToStore() {
                    let e = {
                        label: () => this.props.bindings.i18n.t(this.props.label),
                        facetId: this.facetId,
                        element: this.props.host,
                    };
                    (this.props.bindings.store.registerFacet('numericFacets', {
                        ...e,
                        format: (e) => this.formatFacetValue(e),
                    }),
                        (0, l.i)(this.props.host, {
                            ...e,
                            hasValues: () => this.hasValues,
                            numberOfSelectedValues: () => this.numberOfSelectedValues,
                        }),
                        this.filter &&
                            (this.props.bindings.store.state.numericFacets[this.filter.state.facetId] =
                                this.props.bindings.store.state.numericFacets[this.facetId]));
                }
                formatFacetValue(e) {
                    var t;
                    let s =
                        null === (t = this.manualRanges.find((t) => this.areRangesEqual(t, e))) || void 0 === t
                            ? void 0
                            : t.label;
                    return s
                        ? (0, r.g)(this.props.field, s, this.props.bindings.i18n)
                        : this.props.bindings.i18n.t('to', {
                              start: this.formatValue(e.start),
                              end: this.formatValue(e.end),
                          });
                }
                formatValue(e) {
                    try {
                        return this.formatter(e, this.props.bindings.i18n.languages);
                    } catch (t) {
                        return (
                            this.props.bindings.engine.logger.error(
                                `atomic-numeric-facet facet value "${e}" could not be formatted correctly.`,
                                t,
                            ),
                            e
                        );
                    }
                }
                areRangesEqual(e, t) {
                    return e.start === t.start && e.end === t.end && e.endInclusive === t.endInclusive;
                }
                renderValue(e, t) {
                    let s = this.formatFacetValue(e),
                        n = 'selected' === e.state;
                    switch (this.props.displayValuesAs) {
                        case 'checkbox':
                            return (0, a.h)(
                                c.f,
                                {
                                    displayValue: s,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: n,
                                    i18n: this.props.bindings.i18n,
                                    onClick: t,
                                },
                                (0, a.h)(c.F, {displayValue: s, isSelected: n}),
                            );
                        case 'link':
                            return (0, a.h)(
                                o.F,
                                {
                                    displayValue: s,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: n,
                                    i18n: this.props.bindings.i18n,
                                    onClick: t,
                                },
                                (0, a.h)(c.F, {displayValue: s, isSelected: n}),
                            );
                    }
                }
                renderValuesContainer(e) {
                    return (0, a.h)(
                        c.b,
                        {i18n: this.props.bindings.i18n, label: this.props.label},
                        (0, a.h)('ul', {class: 'mt-3', part: 'values'}, e),
                    );
                }
                get valuesToRender() {
                    var e;
                    return (
                        (null === (e = this.facetForRange) || void 0 === e
                            ? void 0
                            : e.state.values.filter((e) => e.numberOfResults || 'idle' !== e.state)) || []
                    );
                }
                renderValues() {
                    return this.renderValuesContainer(
                        this.valuesToRender.map((e) =>
                            this.renderValue(e, () =>
                                'link' === this.props.displayValuesAs
                                    ? this.facetForRange.toggleSingleSelect(e)
                                    : this.facetForRange.toggleSelect(e),
                            ),
                        ),
                    );
                }
                renderNumberInput() {
                    return (0, a.h)('atomic-facet-number-input', {
                        type: this.props.withInput,
                        bindings: this.props.bindings,
                        label: this.props.label,
                        filter: this.filter,
                        filterState: this.filter.state,
                    });
                }
                renderHeader(e, t, s) {
                    return (0, a.h)(c.d, {
                        i18n: this.props.bindings.i18n,
                        label: this.props.label,
                        onClearFilters: () => {
                            var t, s, n;
                            if (
                                (e.focusAfterSearch(),
                                null === (t = this.filter) || void 0 === t ? void 0 : t.state.range)
                            ) {
                                null === (s = this.filter) || void 0 === s || s.clear();
                                return;
                            }
                            null === (n = this.facetForRange) || void 0 === n || n.deselectAll();
                        },
                        numberOfSelectedValues: this.numberOfSelectedValues,
                        isCollapsed: t,
                        headingLevel: this.props.headingLevel,
                        onToggleCollapse: s,
                        headerRef: e.setTarget,
                    });
                }
                render({hasError: e, firstSearchExecuted: t, isCollapsed: s, headerFocus: n, onToggleCollapse: r}) {
                    return e || !this.enabled
                        ? (0, a.h)(u.H, null)
                        : t
                          ? this.shouldRenderFacet
                              ? (0, a.h)(
                                    c.c,
                                    null,
                                    this.renderHeader(n, s, r),
                                    !s && [
                                        this.shouldRenderValues && this.renderValues(),
                                        this.shouldRenderInput && this.renderNumberInput(),
                                    ],
                                )
                              : (0, a.h)(u.H, null)
                          : (0, a.h)(h.F, {numberOfValues: this.props.numberOfValues, isCollapsed: s});
                }
            }
        },
        88780: function (e, t, s) {
            s.d(t, {
                i: function () {
                    return r;
                },
                p: function () {
                    return a;
                },
            });
            var n = s(75291);
            let a = 'popover-nested';
            function r(e, t) {
                e.dispatchEvent((0, n.b)('atomic/initializePopover', t));
            }
        },
        53049: function (e, t, s) {
            s.d(t, {
                A: function () {
                    return l;
                },
                M: function () {
                    return i;
                },
            });
            var n = s(98214),
                a = s(5991),
                r = s(66038);
            function i(e) {
                return (t, s) => {
                    let {componentWillLoad: n} = t;
                    if (!n) {
                        console.error(
                            'The "componentWillLoad" lifecycle method has to be defined for the MapProp decorator to work.',
                        );
                        return;
                    }
                    t.componentWillLoad = function () {
                        var t;
                        let i = (e && e.attributePrefix) || s,
                            l = this[s],
                            u = (0, a.g)(this).attributes;
                        ((function (e, t, s, n) {
                            let a = (function (e, t) {
                                let s = {},
                                    n = (0, r.a)(e) + '-';
                                for (let e = 0; e < t.length; e++) {
                                    let a = t[e];
                                    if (0 !== a.name.indexOf(n)) continue;
                                    let i = (0, r.k)(a.name.replace(n, ''));
                                    s[i] = `${a.value}`;
                                }
                                return s;
                            })(e, s);
                            Object.assign(
                                t,
                                n
                                    ? Object.entries(a).reduce(
                                          (e, [t, s]) => ({
                                              ...e,
                                              [t]: (function (e) {
                                                  var t;
                                                  let [...s] =
                                                          null !== (t = e.matchAll(/(?:\\.|[^,])+/g)) && void 0 !== t
                                                              ? t
                                                              : [],
                                                      n = /\\(.)/g;
                                                  return s.map(([e]) => e.replace(n, '$1'));
                                              })(s).map((e) => e.trim()),
                                          }),
                                          {},
                                      )
                                    : a,
                            );
                        })(i, l, Array.from(u), null !== (t = null == e ? void 0 : e.splitValues) && void 0 !== t && t),
                            n.call(this));
                    };
                };
            }
            function l() {
                return (e, t) => {
                    let {componentWillLoad: s} = e,
                        i = (0, r.a)(t);
                    e.componentWillLoad = function () {
                        let e = this[t];
                        if (!e || (0, n.i)(e)) {
                            null == s || s.call(this);
                            return;
                        }
                        try {
                            let s = JSON.parse(e);
                            (0, n.i)(s)
                                ? (this[t] = s)
                                : console.error(`Property ${i} should be an array`, (0, a.g)(this));
                        } catch (e) {
                            console.error(`Error while parsing attribute ${i} as array`, e);
                        }
                        null == s || s.call(this);
                    };
                };
            }
        },
        33290: function (e, t, s) {
            s.d(t, {
                S: function () {
                    return n;
                },
            });
            let n =
                '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6.4 0c3.5 0 6.4 2.9 6.4 6.4 0 1.4-.4 2.7-1.2 3.7l4 4c.4.4.4 1 .1 1.5l-.1.1c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-4-4c-1 .7-2.3 1.2-3.7 1.2-3.4-.1-6.3-3-6.3-6.5s2.9-6.4 6.4-6.4zm0 2.1c-2.3 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z"/></svg>';
        },
    },
]);
