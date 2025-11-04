'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [81744],
    {
        11312: function (e, t, s) {
            s.d(t, {
                F: function () {
                    return y;
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
                    return C;
                },
                f: function () {
                    return V;
                },
                p: function () {
                    return w;
                },
                s: function () {
                    return x;
                },
                v: function () {
                    return S;
                },
            });
            var a = s(98214),
                n = s(5991),
                r = s(78681),
                l = s(88780),
                i = s(8807),
                c = s(30257),
                o = s(5812),
                u = s(71343),
                h = s(33290),
                d = s(2108);
            let f = (e) => {
                let t;
                let s = e.i18n.t(e.label),
                    a = e.i18n.t('facet-search-input'),
                    r = e.i18n.t('facet-search', {label: s}),
                    l = e.i18n.t('clear');
                return (0, n.h)(
                    'div',
                    {class: 'px-2 mt-3', part: 'search-wrapper'},
                    (0, n.h)(
                        'div',
                        {class: 'relative h-10'},
                        (0, n.h)('input', {
                            part: 'search-input',
                            class: 'input-primary w-full h-full px-9 placeholder-neutral-dark text-sm group',
                            type: 'text',
                            placeholder: a,
                            'aria-label': r,
                            value: e.query,
                            onInput: (t) => e.onChange(t.target.value),
                            ref: (e) => (t = e),
                        }),
                        (0, n.h)(
                            'div',
                            {
                                part: 'search-icon',
                                class: 'search-icon pointer-events-none absolute inline-flex justify-center items-center left-0 w-9 h-full text-on-background',
                            },
                            (0, n.h)('atomic-icon', {class: 'w-3', icon: h.S}),
                        ),
                        '' !== e.query &&
                            (0, n.h)(
                                d.B,
                                {
                                    style: 'text-transparent',
                                    title: l,
                                    part: 'search-clear-button',
                                    class: 'search-clear-button absolute inline-flex justify-center items-center right-px w-9 top-px bottom-px',
                                    onClick: () => {
                                        (e.onClear(), t.focus());
                                    },
                                },
                                (0, n.h)('atomic-icon', {class: 'w-2.5', icon: u.C}),
                            ),
                    ),
                );
            };
            function p(e, t, s) {
                return s.t(e, {
                    query: `<span class="font-bold italic text-on-background" part="matches-query">${(0, c.e)(t)}</span>`,
                    interpolation: {escapeValue: !1},
                });
            }
            let g = (e) =>
                    e.numberOfMatches
                        ? e.hasMoreMatches
                            ? (0, n.h)(
                                  'div',
                                  {class: 'px-2'},
                                  (0, n.h)('div', {
                                      part: 'more-matches',
                                      class: 'truncate mt-3 text-neutral-dark text-sm',
                                      innerHTML: p('more-matches-for', e.query, e.i18n),
                                  }),
                              )
                            : void 0
                        : (0, n.h)(
                              'div',
                              {class: 'px-2'},
                              (0, n.h)('div', {
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
                        a = e.i18n.t('show-more-facet-values', {label: t}),
                        r = e.i18n.t('show-less'),
                        l = e.i18n.t('show-less-facet-values', {label: t}),
                        i = 'flex items-baseline text-left p-2 text-sm max-w-full',
                        c = 'w-2 h-2 mr-1';
                    if (e.canShowLessValues || e.canShowMoreValues)
                        return (0, n.h)(
                            'div',
                            {class: 'mt-2'},
                            (0, n.h)(
                                d.B,
                                {
                                    style: 'text-primary',
                                    part: 'show-less',
                                    class: `${i} ${e.canShowLessValues ? '' : 'hidden'}`,
                                    ariaLabel: l,
                                    onClick: () => e.onShowLess(),
                                    ref: e.showLessRef,
                                },
                                (0, n.h)('atomic-icon', {
                                    part: 'show-more-less-icon',
                                    class: c,
                                    icon: '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m64 208h384v96h-384z"/></svg>',
                                }),
                                (0, n.h)('span', {class: 'truncate'}, r),
                            ),
                            (0, n.h)(
                                d.B,
                                {
                                    style: 'text-primary',
                                    part: 'show-more',
                                    class: `${i} ${e.canShowMoreValues ? '' : 'hidden'}`,
                                    ariaLabel: a,
                                    onClick: () => e.onShowMore(),
                                    ref: e.showMoreRef,
                                },
                                (0, n.h)('atomic-icon', {part: 'show-more-less-icon', class: c, icon: b}),
                                (0, n.h)('span', {class: 'truncate'}, s),
                            ),
                        );
                },
                v = (e, t) => {
                    let s = new Intl.NumberFormat(e.i18n.language, {notation: 'compact'}).format(e.numberOfResults),
                        a = e.numberOfResults.toLocaleString(e.i18n.language),
                        r = e.i18n.t('facet-value', {value: e.displayValue, count: e.numberOfResults});
                    return (0, n.h)(
                        'li',
                        {key: e.displayValue},
                        (0, n.h)(
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
                            (0, n.h)(
                                'span',
                                {
                                    title: a,
                                    part: 'value-count',
                                    class: 'value-box-count text-neutral-dark truncate w-full text-sm mt-1',
                                },
                                e.i18n.t('between-parentheses', {text: s}),
                            ),
                        ),
                    );
                },
                y = (e, t) => {
                    var s;
                    let a = e.numberOfResults.toLocaleString(e.i18n.language),
                        r = e.i18n.t('facet-value', {
                            value: e.displayValue,
                            count: e.numberOfResults,
                            interpolation: {escapeValue: !1},
                        }),
                        l =
                            null !== (s = e.part) && void 0 !== s
                                ? s
                                : `value-link${e.isSelected ? ' value-link-selected' : ''}`;
                    return (
                        e.additionalPart && (l += ` ${e.additionalPart}`),
                        (0, n.h)(
                            'li',
                            {key: e.displayValue, class: e.class},
                            (0, n.h)(
                                d.B,
                                {
                                    style: 'text-neutral',
                                    part: l,
                                    onClick: () => e.onClick(),
                                    class: 'group w-full flex items-center px-2 py-2.5 text-left truncate no-outline',
                                    ariaPressed: e.isSelected.toString(),
                                    ariaLabel: r,
                                    ref: e.buttonRef,
                                },
                                t,
                                (0, n.h)(
                                    'span',
                                    {part: 'value-count', class: 'value-count'},
                                    e.i18n.t('between-parentheses', {text: a}),
                                ),
                            ),
                            e.subList,
                        )
                    );
                };
            function w(e) {
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
            function S(e) {
                if (Object.keys(e).length > 1) throw "Depending on multiple facets isn't supported";
            }
            function x(e) {
                let {hasInput: t, hasInputRange: s, searchStatusState: a, facetValues: n} = e;
                if (!t) return !1;
                if (s) return !0;
                if (!a.hasResults) return !1;
                let r = n.filter((e) => e.numberOfResults || 'idle' !== e.state) || [];
                return !!r.length;
            }
            function V(e, t) {
                return e + 1 > t;
            }
            class C {
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
                        (0, l.i)(this.host, {
                            ...t,
                            hasValues: () => !!this.facet.state.values.length,
                            numberOfSelectedValues: () => this.numberOfSelectedValues,
                        }));
                }
                validateProps() {
                    (new a.S({displayValuesAs: new a.a({constrainTo: ['checkbox', 'link', 'box']})}).validate({
                        displayValuesAs: this.displayValuesAs,
                    }),
                        S(this.dependsOn));
                }
                disconnectedCallback() {
                    var e;
                    this.host.isConnected ||
                        null === (e = this.dependenciesManager) ||
                        void 0 === e ||
                        e.stopWatching();
                }
                componentShouldUpdate(e, t, s) {
                    return 'facetState' !== s || !t || !this.withSearch || (0, c.s)(e, t);
                }
                renderHeader(e, t, s) {
                    return (0, n.h)(c.d, {
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
                        return (0, n.h)(f, {
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
                    return (0, n.h)(g, {
                        i18n: this.bindings.i18n,
                        query: this.facet.state.facetSearch.query,
                        numberOfMatches: this.facet.state.facetSearch.values.length,
                        hasMoreMatches: this.facet.state.facetSearch.moreValuesAvailable,
                    });
                }
                renderValuesContainer(e, t) {
                    let s = `mt-3 ${'box' === this.displayValuesAs ? 'box-container' : ''}`;
                    return (0, n.h)(
                        c.b,
                        {i18n: this.bindings.i18n, label: this.label, query: t},
                        (0, n.h)('ul', {class: s, part: 'values'}, e),
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
                        this.facet.state.values.map((s, a) =>
                            this.renderValue(
                                s,
                                () =>
                                    'link' === this.displayValuesAs
                                        ? this.facet.toggleSingleSelect(s)
                                        : this.facet.toggleSelect(s),
                                0 === a,
                                a === ('automatic' === this.sortCriteria ? 0 : this.resultIndexToFocusOnShowMore),
                                e,
                                t,
                            ),
                        ),
                    );
                }
                renderValue(e, t, s, a, l, i) {
                    let o = (0, r.g)(this.field, e.value, this.bindings.i18n),
                        u = 'selected' === e.state;
                    switch (this.displayValuesAs) {
                        case 'checkbox':
                            return (0, n.h)(
                                c.f,
                                {
                                    displayValue: o,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: u,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (s && l.setTarget(e), a && i.setTarget(e));
                                    },
                                },
                                (0, n.h)(c.F, {
                                    displayValue: o,
                                    isSelected: u,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                        case 'link':
                            return (0, n.h)(
                                y,
                                {
                                    displayValue: o,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: u,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (s && l.setTarget(e), a && i.setTarget(e));
                                    },
                                },
                                (0, n.h)(c.F, {
                                    displayValue: o,
                                    isSelected: u,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                        case 'box':
                            return (0, n.h)(
                                v,
                                {
                                    displayValue: o,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: u,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (s && l.setTarget(e), a && i.setTarget(e));
                                    },
                                },
                                (0, n.h)(c.F, {
                                    displayValue: o,
                                    isSelected: u,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                    }
                }
                renderShowMoreLess(e, t) {
                    return (0, n.h)(m, {
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
                        (0, c.a)(this.facet.state.facetSearch)
                            ? [this.renderSearchResults(e, t), this.renderMatches()]
                            : [this.renderValues(e, t), this.renderShowMoreLess(e, t)],
                    ];
                }
                render({
                    hasError: e,
                    firstSearchExecuted: t,
                    isCollapsed: s,
                    numberOfValues: a,
                    headerFocus: r,
                    showLessFocus: l,
                    showMoreFocus: u,
                    onToggleCollapse: h,
                }) {
                    return e || !this.facet.state.enabled
                        ? (0, n.h)(i.H, null)
                        : t
                          ? this.facet.state.values.length
                              ? (0, n.h)(c.c, null, this.renderHeader(r, s, h), !s && this.renderBody(l, u))
                              : (0, n.h)(i.H, null)
                          : (0, n.h)(o.F, {numberOfValues: a, isCollapsed: s});
                }
            }
        },
        5812: function (e, t, s) {
            s.d(t, {
                F: function () {
                    return r;
                },
            });
            var a = s(5991),
                n = s(66038);
            let r = ({numberOfValues: e, isCollapsed: t}) => {
                let s = [];
                for (let t = 0; t < e; t++) {
                    let e = `${(0, n.g)(60, 100)}%`,
                        t = `${(0, n.g)(0.3, 1)}`;
                    s.push((0, a.h)('div', {class: 'flex bg-neutral h-5 mt-4', style: {width: e, opacity: t}}));
                }
                return (0, a.h)(
                    'div',
                    {
                        part: 'placeholder',
                        class: 'bg-background animate-pulse border border-neutral rounded-lg mb-4 p-7',
                        'aria-hidden': 'true',
                    },
                    (0, a.h)('div', {class: 'bg-neutral rounded h-8', style: {width: `${(0, n.g)(25, 75)}%`}}),
                    !t && (0, a.h)('div', {class: 'mt-7'}, s),
                );
            };
        },
        88780: function (e, t, s) {
            s.d(t, {
                i: function () {
                    return r;
                },
                p: function () {
                    return n;
                },
            });
            var a = s(75291);
            let n = 'popover-nested';
            function r(e, t) {
                e.dispatchEvent((0, a.b)('atomic/initializePopover', t));
            }
        },
        81744: function (e, t, s) {
            s.d(t, {
                R: function () {
                    return o;
                },
                g: function () {
                    return u;
                },
            });
            var a = s(5991),
                n = s(71343),
                r = s(88780),
                l = s(2108),
                i = s(11312),
                c = s(23318);
            let o = (e, t) => {
                let s = () => {
                        var t;
                        null === (t = e.host.querySelector('div[slot="facets"]')) || void 0 === t || t.remove();
                    },
                    r = () => {
                        var t;
                        null === (t = e.host.querySelector('atomic-automatic-facet-slot-content')) ||
                            void 0 === t ||
                            t.remove();
                    };
                return (0, a.h)(
                    'atomic-modal',
                    {
                        fullscreen: !0,
                        isOpen: e.isOpen,
                        source: e.openButton,
                        container: e.host,
                        close: e.onClose,
                        onAnimationEnded: () => {
                            e.isOpen || (s(), r());
                        },
                        exportparts:
                            'container,header,header-wrapper,header-ruler,body,body-wrapper,footer,footer-wrapper,footer-wrapper',
                        boundary: e.boundary,
                        scope: e.scope,
                    },
                    (0, a.h)(
                        'div',
                        {slot: 'header', class: 'contents'},
                        (0, a.h)('h1', {part: 'title', class: 'truncate'}, e.title),
                        (0, a.h)(
                            l.B,
                            {
                                style: 'text-transparent',
                                class: 'grid place-items-center',
                                part: 'close-button',
                                onClick: e.onClose,
                                ariaLabel: e.bindings.i18n.t('close'),
                            },
                            (0, a.h)('atomic-icon', {part: 'close-icon', class: 'w-5 h-5', icon: n.C}),
                        ),
                    ),
                    ...t,
                    (0, a.h)(
                        'div',
                        {part: 'footer-content', slot: 'footer'},
                        (0, a.h)(
                            l.B,
                            {
                                style: 'primary',
                                part: 'footer-button',
                                class: 'w-full p-3 flex text-lg justify-center',
                                onClick: e.onClose,
                            },
                            (0, a.h)(
                                'span',
                                {part: 'footer-button-text', class: 'truncate mr-1'},
                                e.bindings.i18n.t('view-results'),
                            ),
                            (0, a.h)(
                                'span',
                                {part: 'footer-button-count'},
                                e.bindings.i18n.t('between-parentheses', {
                                    text: e.querySummaryState.total.toLocaleString(e.bindings.i18n.language),
                                }),
                            ),
                        ),
                    ),
                );
            };
            function u(e, t, s) {
                let a = document.createElement('div');
                (a.setAttribute('slot', 'facets'),
                    (a.style.display = 'flex'),
                    (a.style.flexDirection = 'column'),
                    (a.style.gap = 'var(--atomic-refine-modal-facet-margin, 20px)'));
                let n = Array.from(new Set(e.map((e) => e.tagName.toLowerCase()))),
                    l = n.length ? s.querySelectorAll(n.join(',')) : [];
                return (
                    l.forEach((e, s) => {
                        let n = e.cloneNode(!0);
                        ((n.isCollapsed = (0, i.f)(s, t)),
                            n.classList.remove(r.p),
                            n.setAttribute(c.i, ''),
                            a.append(n));
                    }),
                    a
                );
            }
        },
        33290: function (e, t, s) {
            s.d(t, {
                S: function () {
                    return a;
                },
            });
            let a =
                '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6.4 0c3.5 0 6.4 2.9 6.4 6.4 0 1.4-.4 2.7-1.2 3.7l4 4c.4.4.4 1 .1 1.5l-.1.1c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-4-4c-1 .7-2.3 1.2-3.7 1.2-3.4-.1-6.3-3-6.3-6.5s2.9-6.4 6.4-6.4zm0 2.1c-2.3 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z"/></svg>';
        },
        23318: function (e, t, s) {
            let a;
            s.d(t, {
                c: function () {
                    return g;
                },
                i: function () {
                    return p;
                },
            });
            var n,
                r = s(5991),
                l = s(66038);
            let i = (e, t, s) => {
                    let a = e.get(t);
                    a ? a.includes(s) || a.push(s) : e.set(t, [s]);
                },
                c = (e) => !('isConnected' in e) || e.isConnected,
                o =
                    ((n = (e) => {
                        for (let t of e.keys()) e.set(t, e.get(t).filter(c));
                    }),
                    (...e) => {
                        (a && clearTimeout(a),
                            (a = setTimeout(() => {
                                ((a = 0), n(...e));
                            }, 2e3)));
                    }),
                u = () => {
                    if ('function' != typeof r.d) return {};
                    let e = new Map();
                    return {
                        dispose: () => e.clear(),
                        get: (t) => {
                            let s = (0, r.d)();
                            s && i(e, t, s);
                        },
                        set: (t) => {
                            let s = e.get(t);
                            (s && e.set(t, s.filter(r.f)), o(e));
                        },
                        reset: () => {
                            (e.forEach((e) => e.forEach(r.f)), o(e));
                        },
                    };
                },
                h = (e, t = (e, t) => e !== t) => {
                    let s = new Map(Object.entries(null != e ? e : {})),
                        a = {dispose: [], get: [], set: [], reset: []},
                        n = () => {
                            ((s = new Map(Object.entries(null != e ? e : {}))), a.reset.forEach((e) => e()));
                        },
                        r = (e) => (a.get.forEach((t) => t(e)), s.get(e)),
                        l = (e, n) => {
                            let r = s.get(e);
                            t(n, r, e) && (s.set(e, n), a.set.forEach((t) => t(e, n, r)));
                        },
                        i =
                            'undefined' == typeof Proxy
                                ? {}
                                : new Proxy(e, {
                                      get: (e, t) => r(t),
                                      ownKeys: (e) => Array.from(s.keys()),
                                      getOwnPropertyDescriptor: () => ({enumerable: !0, configurable: !0}),
                                      has: (e, t) => s.has(t),
                                      set: (e, t, s) => (l(t, s), !0),
                                  }),
                        c = (e, t) => (
                            a[e].push(t),
                            () => {
                                d(a[e], t);
                            }
                        );
                    return {
                        state: i,
                        get: r,
                        set: l,
                        on: c,
                        onChange: (t, s) => {
                            let a = c('set', (e, a) => {
                                    e === t && s(a);
                                }),
                                n = c('reset', () => s(e[t]));
                            return () => {
                                (a(), n());
                            };
                        },
                        use: (...e) => {
                            let t = e.reduce(
                                (e, t) => (
                                    t.set && e.push(c('set', t.set)),
                                    t.get && e.push(c('get', t.get)),
                                    t.reset && e.push(c('reset', t.reset)),
                                    t.dispose && e.push(c('dispose', t.dispose)),
                                    e
                                ),
                                [],
                            );
                            return () => t.forEach((e) => e());
                        },
                        dispose: () => {
                            (a.dispose.forEach((e) => e()), n());
                        },
                        reset: n,
                        forceUpdate: (e) => {
                            let t = s.get(e);
                            a.set.forEach((s) => s(e, t, t));
                        },
                    };
                },
                d = (e, t) => {
                    let s = e.indexOf(t);
                    s >= 0 && ((e[s] = e[e.length - 1]), e.length--);
                },
                f = (e, t) => {
                    let s = h(e, t);
                    return (s.use(u()), s);
                },
                p = 'is-refine-modal';
            function g(e) {
                let t = f(e),
                    s = (e, s) => {
                        t.state[e][s] &&
                            (t.state.facetElements = t.state.facetElements.filter(
                                (e) => e.getAttribute('facet-id') !== s,
                            ));
                    };
                return {
                    ...t,
                    registerFacet(e, a) {
                        null === a.element.getAttribute(p) &&
                            (s(e, a.facetId), t.state.facetElements.push(a.element), (t.state[e][a.facetId] = a));
                    },
                    getIconAssetsPath: () => t.get('iconAssetsPath'),
                    setLoadingFlag(e) {
                        let s = t.get('loadingFlags');
                        t.set('loadingFlags', s.concat(e));
                    },
                    unsetLoadingFlag(e) {
                        let s = t.get('loadingFlags');
                        t.set(
                            'loadingFlags',
                            s.filter((t) => t !== e),
                        );
                    },
                    hasLoadingFlag: (e) => -1 !== t.get('loadingFlags').indexOf(e),
                    registerResultList(e) {
                        t.set('resultList', e);
                    },
                    addFieldsToInclude(e) {
                        t.set('fieldsToInclude', [...t.get('fieldsToInclude'), ...e]);
                    },
                    waitUntilAppLoaded(e) {
                        t.get('loadingFlags').length
                            ? t.onChange('loadingFlags', (t) => {
                                  t.length || e();
                              })
                            : e();
                    },
                    isAppLoaded: () => !t.get('loadingFlags').length,
                    getUniqueIDFromEngine(e) {
                        throw Error('getUniqueIDFromEngine not implemented at the common store level.');
                    },
                    getFacetElements: () => t.get('facetElements').filter((e) => (0, l.f)(e)),
                };
            }
        },
    },
]);
