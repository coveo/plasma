(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        68771, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        65057: function (e, t, s) {
            'use strict';
            (s.r(t),
                s.d(t, {
                    atomic_facet_manager: function () {
                        return u;
                    },
                }));
            var a = s(5991),
                r = s(98214),
                n = s(64977),
                i = s(8807),
                l = s(11312);
            (s(66038), s(87856), s(30257), s(55294), s(2108), s(9224), s(47104), s(5812));
            var c = function (e, t, s, a) {
                var r,
                    n = arguments.length,
                    i = n < 3 ? t : null === a ? (a = Object.getOwnPropertyDescriptor(t, s)) : a;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    i = Reflect.decorate(e, t, s, a);
                else
                    for (var l = e.length - 1; l >= 0; l--)
                        (r = e[l]) && (i = (n < 3 ? r(i) : n > 3 ? r(t, s, i) : r(t, s)) || i);
                return (n > 3 && i && Object.defineProperty(t, s, i), i);
            };
            let u = class {
                constructor(e) {
                    ((0, a.r)(this, e),
                        (this.collapseFacetsAfter = 4),
                        (this.sortFacets = () => {
                            if (!this.searchStatusState.firstSearchExecuted) {
                                this.updateCollapsedState(this.facets);
                                return;
                            }
                            let e = this.facets.map((e) => ({facetId: e.facetId, payload: e})),
                                t = this.facetManager.sort(e).map((e) => e.payload);
                            (this.updateCollapsedState(t), this.host.append(...t));
                        }));
                }
                initialize() {
                    (this.validateProps(),
                        (this.searchStatus = (0, n.E)(this.bindings.engine)),
                        (this.facetManager = (0, n.N)(this.bindings.engine)),
                        this.bindings.i18n.on('languageChanged', this.sortFacets));
                }
                updateCollapsedState(e) {
                    -1 !== this.collapseFacetsAfter &&
                        e.forEach((e, t) => {
                            e.isCollapsed = (0, l.f)(t, this.collapseFacetsAfter);
                        });
                }
                validateProps() {
                    new r.S({collapseFacetAfter: new r.N({min: -1, required: !0})}).validate({
                        collapseFacetAfter: this.collapseFacetsAfter,
                    });
                }
                get facets() {
                    let e = Array.from(this.host.children),
                        t = e.filter((e) => this.isPseudoFacet(e) || 'ATOMIC-AUTOMATIC-FACET-GENERATOR' === e.tagName);
                    return t;
                }
                isPseudoFacet(e) {
                    return 'facetId' in e;
                }
                disconnectedCallback() {
                    this.bindings.i18n.off('languageChanged', this.sortFacets);
                }
                render() {
                    return (0, a.h)('slot', null);
                }
                get host() {
                    return (0, a.g)(this);
                }
            };
            (c([(0, i.I)()], u.prototype, 'bindings', void 0),
                c([(0, i.B)('searchStatus')], u.prototype, 'searchStatusState', void 0),
                c(
                    [(0, i.B)('facetManager', {onUpdateCallbackMethod: 'sortFacets'})],
                    u.prototype,
                    'facetManagerState',
                    void 0,
                ));
        },
        11312: function (e, t, s) {
            'use strict';
            s.d(t, {
                F: function () {
                    return S;
                },
                a: function () {
                    return v;
                },
                b: function () {
                    return f;
                },
                c: function () {
                    return g;
                },
                d: function () {
                    return m;
                },
                e: function () {
                    return C;
                },
                f: function () {
                    return V;
                },
                p: function () {
                    return y;
                },
                s: function () {
                    return x;
                },
                v: function () {
                    return w;
                },
            });
            var a = s(98214),
                r = s(5991),
                n = s(78681),
                i = s(88780),
                l = s(8807),
                c = s(30257),
                u = s(5812),
                h = s(71343),
                o = s(33290),
                d = s(2108);
            let f = (e) => {
                let t;
                let s = e.i18n.t(e.label),
                    a = e.i18n.t('facet-search-input'),
                    n = e.i18n.t('facet-search', {label: s}),
                    i = e.i18n.t('clear');
                return (0, r.h)(
                    'div',
                    {class: 'px-2 mt-3', part: 'search-wrapper'},
                    (0, r.h)(
                        'div',
                        {class: 'relative h-10'},
                        (0, r.h)('input', {
                            part: 'search-input',
                            class: 'input-primary w-full h-full px-9 placeholder-neutral-dark text-sm group',
                            type: 'text',
                            placeholder: a,
                            'aria-label': n,
                            value: e.query,
                            onInput: (t) => e.onChange(t.target.value),
                            ref: (e) => (t = e),
                        }),
                        (0, r.h)(
                            'div',
                            {
                                part: 'search-icon',
                                class: 'search-icon pointer-events-none absolute inline-flex justify-center items-center left-0 w-9 h-full text-on-background',
                            },
                            (0, r.h)('atomic-icon', {class: 'w-3', icon: o.S}),
                        ),
                        '' !== e.query &&
                            (0, r.h)(
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
                                (0, r.h)('atomic-icon', {class: 'w-2.5', icon: h.C}),
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
                            ? (0, r.h)(
                                  'div',
                                  {class: 'px-2'},
                                  (0, r.h)('div', {
                                      part: 'more-matches',
                                      class: 'truncate mt-3 text-neutral-dark text-sm',
                                      innerHTML: p('more-matches-for', e.query, e.i18n),
                                  }),
                              )
                            : void 0
                        : (0, r.h)(
                              'div',
                              {class: 'px-2'},
                              (0, r.h)('div', {
                                  part: 'no-matches',
                                  class: 'truncate p-3 bg-neutral-light text-neutral-dark text-sm rounded',
                                  innerHTML: p('no-matches-found-for', e.query, e.i18n),
                              }),
                          ),
                b = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M496 208H304V16h-96v192H16v96h192v192h96V304h192"/>
</svg>
`,
                v = (e) => {
                    let t = e.i18n.t(e.label),
                        s = e.i18n.t('show-more'),
                        a = e.i18n.t('show-more-facet-values', {label: t}),
                        n = e.i18n.t('show-less'),
                        i = e.i18n.t('show-less-facet-values', {label: t}),
                        l = 'flex items-baseline text-left p-2 text-sm max-w-full',
                        c = 'w-2 h-2 mr-1';
                    if (e.canShowLessValues || e.canShowMoreValues)
                        return (0, r.h)(
                            'div',
                            {class: 'mt-2'},
                            (0, r.h)(
                                d.B,
                                {
                                    style: 'text-primary',
                                    part: 'show-less',
                                    class: `${l} ${e.canShowLessValues ? '' : 'hidden'}`,
                                    ariaLabel: i,
                                    onClick: () => e.onShowLess(),
                                    ref: e.showLessRef,
                                },
                                (0, r.h)('atomic-icon', {
                                    part: 'show-more-less-icon',
                                    class: c,
                                    icon: '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m64 208h384v96h-384z"/></svg>',
                                }),
                                (0, r.h)('span', {class: 'truncate'}, n),
                            ),
                            (0, r.h)(
                                d.B,
                                {
                                    style: 'text-primary',
                                    part: 'show-more',
                                    class: `${l} ${e.canShowMoreValues ? '' : 'hidden'}`,
                                    ariaLabel: a,
                                    onClick: () => e.onShowMore(),
                                    ref: e.showMoreRef,
                                },
                                (0, r.h)('atomic-icon', {part: 'show-more-less-icon', class: c, icon: b}),
                                (0, r.h)('span', {class: 'truncate'}, s),
                            ),
                        );
                },
                m = (e, t) => {
                    let s = new Intl.NumberFormat(e.i18n.language, {notation: 'compact'}).format(e.numberOfResults),
                        a = e.numberOfResults.toLocaleString(e.i18n.language),
                        n = e.i18n.t('facet-value', {value: e.displayValue, count: e.numberOfResults});
                    return (0, r.h)(
                        'li',
                        {key: e.displayValue},
                        (0, r.h)(
                            d.B,
                            {
                                style: 'outline-bg-neutral',
                                part: `value-box${e.isSelected ? ' value-box-selected' : ''}`,
                                onClick: () => e.onClick(),
                                class: `value-box box-border w-full h-full items-center p-2 group ${e.isSelected ? 'selected' : ''}`,
                                ariaPressed: e.isSelected.toString(),
                                ariaLabel: n,
                                ref: e.buttonRef,
                            },
                            t,
                            (0, r.h)(
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
                S = (e, t) => {
                    var s;
                    let a = e.numberOfResults.toLocaleString(e.i18n.language),
                        n = e.i18n.t('facet-value', {
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
                        (0, r.h)(
                            'li',
                            {key: e.displayValue, class: e.class},
                            (0, r.h)(
                                d.B,
                                {
                                    style: 'text-neutral',
                                    part: i,
                                    onClick: () => e.onClick(),
                                    class: 'group w-full flex items-center px-2 py-2.5 text-left truncate no-outline',
                                    ariaPressed: e.isSelected.toString(),
                                    ariaLabel: n,
                                    ref: e.buttonRef,
                                },
                                t,
                                (0, r.h)(
                                    'span',
                                    {part: 'value-count', class: 'value-count'},
                                    e.i18n.t('between-parentheses', {text: a}),
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
            function x(e) {
                let {hasInput: t, hasInputRange: s, searchStatusState: a, facetValues: r} = e;
                if (!t) return !1;
                if (s) return !0;
                if (!a.hasResults) return !1;
                let n = r.filter((e) => e.numberOfResults || 'idle' !== e.state) || [];
                return !!n.length;
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
                        (0, i.i)(this.host, {
                            ...t,
                            hasValues: () => !!this.facet.state.values.length,
                            numberOfSelectedValues: () => this.numberOfSelectedValues,
                        }));
                }
                validateProps() {
                    (new a.S({displayValuesAs: new a.a({constrainTo: ['checkbox', 'link', 'box']})}).validate({
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
                    return 'facetState' !== s || !t || !this.withSearch || (0, c.s)(e, t);
                }
                renderHeader(e, t, s) {
                    return (0, r.h)(c.d, {
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
                        return (0, r.h)(f, {
                            i18n: this.bindings.i18n,
                            label: this.label,
                            query: this.facet.state.facetSearch.query,
                            onChange: (e) => {
                                if ('' === e) {
                                    this.facet.facetSearch.clear();
                                    return;
                                }
                                (this.facet.facetSearch.updateCaptions((0, n.a)(this.field, this.bindings.i18n)),
                                    this.facet.facetSearch.updateText(e),
                                    this.facet.facetSearch.search());
                            },
                            onClear: () => this.facet.facetSearch.clear(),
                        });
                }
                renderMatches() {
                    return (0, r.h)(g, {
                        i18n: this.bindings.i18n,
                        query: this.facet.state.facetSearch.query,
                        numberOfMatches: this.facet.state.facetSearch.values.length,
                        hasMoreMatches: this.facet.state.facetSearch.moreValuesAvailable,
                    });
                }
                renderValuesContainer(e, t) {
                    let s = `mt-3 ${'box' === this.displayValuesAs ? 'box-container' : ''}`;
                    return (0, r.h)(
                        c.b,
                        {i18n: this.bindings.i18n, label: this.label, query: t},
                        (0, r.h)('ul', {class: s, part: 'values'}, e),
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
                renderValue(e, t, s, a, i, l) {
                    let u = (0, n.g)(this.field, e.value, this.bindings.i18n),
                        h = 'selected' === e.state;
                    switch (this.displayValuesAs) {
                        case 'checkbox':
                            return (0, r.h)(
                                c.f,
                                {
                                    displayValue: u,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: h,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (s && i.setTarget(e), a && l.setTarget(e));
                                    },
                                },
                                (0, r.h)(c.F, {
                                    displayValue: u,
                                    isSelected: h,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                        case 'link':
                            return (0, r.h)(
                                S,
                                {
                                    displayValue: u,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: h,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (s && i.setTarget(e), a && l.setTarget(e));
                                    },
                                },
                                (0, r.h)(c.F, {
                                    displayValue: u,
                                    isSelected: h,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                        case 'box':
                            return (0, r.h)(
                                m,
                                {
                                    displayValue: u,
                                    numberOfResults: e.numberOfResults,
                                    isSelected: h,
                                    i18n: this.bindings.i18n,
                                    onClick: t,
                                    searchQuery: this.facet.state.facetSearch.query,
                                    buttonRef: (e) => {
                                        (s && i.setTarget(e), a && l.setTarget(e));
                                    },
                                },
                                (0, r.h)(c.F, {
                                    displayValue: u,
                                    isSelected: h,
                                    searchQuery: this.facet.state.facetSearch.query,
                                }),
                            );
                    }
                }
                renderShowMoreLess(e, t) {
                    return (0, r.h)(v, {
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
                    headerFocus: n,
                    showLessFocus: i,
                    showMoreFocus: h,
                    onToggleCollapse: o,
                }) {
                    return e || !this.facet.state.enabled
                        ? (0, r.h)(l.H, null)
                        : t
                          ? this.facet.state.values.length
                              ? (0, r.h)(c.c, null, this.renderHeader(n, s, o), !s && this.renderBody(i, h))
                              : (0, r.h)(l.H, null)
                          : (0, r.h)(u.F, {numberOfValues: a, isCollapsed: s});
                }
            }
        },
        5812: function (e, t, s) {
            'use strict';
            s.d(t, {
                F: function () {
                    return n;
                },
            });
            var a = s(5991),
                r = s(66038);
            let n = ({numberOfValues: e, isCollapsed: t}) => {
                let s = [];
                for (let t = 0; t < e; t++) {
                    let e = `${(0, r.g)(60, 100)}%`,
                        t = `${(0, r.g)(0.3, 1)}`;
                    s.push((0, a.h)('div', {class: 'flex bg-neutral h-5 mt-4', style: {width: e, opacity: t}}));
                }
                return (0, a.h)(
                    'div',
                    {
                        part: 'placeholder',
                        class: 'bg-background animate-pulse border border-neutral rounded-lg mb-4 p-7',
                        'aria-hidden': 'true',
                    },
                    (0, a.h)('div', {class: 'bg-neutral rounded h-8', style: {width: `${(0, r.g)(25, 75)}%`}}),
                    !t && (0, a.h)('div', {class: 'mt-7'}, s),
                );
            };
        },
        88780: function (e, t, s) {
            'use strict';
            s.d(t, {
                i: function () {
                    return n;
                },
                p: function () {
                    return r;
                },
            });
            var a = s(75291);
            let r = 'popover-nested';
            function n(e, t) {
                e.dispatchEvent((0, a.b)('atomic/initializePopover', t));
            }
        },
        33290: function (e, t, s) {
            'use strict';
            s.d(t, {
                S: function () {
                    return a;
                },
            });
            let a =
                '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6.4 0c3.5 0 6.4 2.9 6.4 6.4 0 1.4-.4 2.7-1.2 3.7l4 4c.4.4.4 1 .1 1.5l-.1.1c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-4-4c-1 .7-2.3 1.2-3.7 1.2-3.4-.1-6.3-3-6.3-6.5s2.9-6.4 6.4-6.4zm0 2.1c-2.3 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z"/></svg>';
        },
        22029: function (e) {
            function t(e) {
                var t = Error("Cannot find module '" + e + "'");
                throw ((t.code = 'MODULE_NOT_FOUND'), t);
            }
            ((t.keys = function () {
                return [];
            }),
                (t.resolve = t),
                (t.id = 22029),
                (e.exports = t));
        },
    },
]);
