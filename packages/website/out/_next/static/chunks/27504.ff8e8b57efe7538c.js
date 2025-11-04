'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [27504],
    {
        27504: function (t, e, r) {
            (r.r(e),
                r.d(e, {
                    atomic_search_box: function () {
                        return v;
                    },
                }));
            var i = r(5991),
                o = r(98214),
                a = r(64977),
                n = r(80421),
                s = r(92695),
                l = r(8807),
                c = r(9807),
                d = r(35295),
                g = r(66038),
                u = r(12287),
                h = r(33290),
                m = r(2108),
                p = r(84230);
            function w(t, e) {
                let r;
                let i = new Promise((t, i) => {
                    r = setTimeout(() => {
                        i(Error('Promise timed out.'));
                    }, e);
                });
                return Promise.race([t, i]).then(() => {
                    clearTimeout(r);
                });
            }
            r(87856);
            let f = ({bindings: t, onClick: e, ...r}) =>
                (0, i.h)(
                    m.B,
                    {
                        style: 'primary',
                        class: 'flex items-center justify-center w-12 h-auto rounded-r-md rounded-l-none -my-px -mr-px',
                        part: 'submit-button',
                        ariaLabel: t.i18n.t('search'),
                        onClick: () => {
                            null == e || e();
                        },
                        ...r,
                    },
                    (0, i.h)('atomic-icon', {part: 'submit-icon', icon: h.S, class: 'w-4 h-4'}),
                );
            var b = function (t, e, r, i) {
                var o,
                    a = arguments.length,
                    n = a < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, r)) : i;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    n = Reflect.decorate(t, e, r, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)
                        (o = t[s]) && (n = (a < 3 ? o(n) : a > 3 ? o(e, r, n) : o(e, r)) || n);
                return (a > 3 && n && Object.defineProperty(e, r, n), n);
            };
            let v = class {
                constructor(t) {
                    ((0, i.r)(this, t),
                        (this.redirect = (0, i.c)(this, 'redirect', 7)),
                        (this.suggestionEvents = []),
                        (this.suggestions = []),
                        (this.suggestedQuery = ''),
                        (this.isExpanded = !1),
                        (this.isSearchDisabled = !1),
                        (this.activeDescendant = ''),
                        (this.previousActiveDescendantElement = null),
                        (this.leftSuggestions = []),
                        (this.leftSuggestionElements = []),
                        (this.rightSuggestions = []),
                        (this.rightSuggestionElements = []),
                        (this.numberOfQueries = 8),
                        (this.suggestionTimeout = 400),
                        (this.disableSearch = !1),
                        (this.minimumQueryLength = 0),
                        (this.clearFilters = !0),
                        (this.enableQuerySyntax = !1),
                        (this.updateBreakpoints = (0, g.o)(() => (0, d.u)(this.host))));
                }
                initialize() {
                    ((this.id = (0, g.r)('atomic-search-box-')),
                        (this.querySetActions = (0, a.x)(this.bindings.engine)),
                        (this.isSearchDisabled = this.disableSearch || this.minimumQueryLength > 0));
                    let t = {
                        id: this.id,
                        numberOfSuggestions: 0,
                        highlightOptions: {
                            notMatchDelimiters: {open: '<span class="font-bold">', close: '</span>'},
                            correctionDelimiters: {open: '<span class="font-normal">', close: '</span>'},
                        },
                        clearFilters: this.clearFilters,
                        enableQuerySyntax: this.enableQuerySyntax,
                    };
                    ((this.searchBox = this.redirectionUrl
                        ? (0, a.o)(this.bindings.engine, {options: {...t, redirectionUrl: this.redirectionUrl}})
                        : (0, a.$)(this.bindings.engine, {options: t})),
                        (this.suggestions = this.suggestionEvents.map((t) => t(this.suggestionBindings))),
                        (this.searchBoxCommon = new u.S({
                            id: this.id,
                            bindings: this.bindings,
                            querySetActions: this.querySetActions,
                            focusValue: this.focusValue.bind(this),
                            clearSuggestions: this.clearSuggestions.bind(this),
                            getIsSearchDisabled: () => this.isSearchDisabled,
                            getIsExpanded: () => this.isExpanded,
                            getPanelInFocus: () => this.panelInFocus,
                            getActiveDescendant: () => this.activeDescendant,
                            getActiveDescendantElement: () => this.activeDescendantElement,
                            getAllSuggestionElements: () => this.allSuggestionElements,
                        })));
                }
                componentWillUpdate() {
                    if (!('redirectTo' in this.searchBoxState) || !('afterRedirection' in this.searchBox)) return;
                    let {redirectTo: t, value: e, analytics: r} = this.searchBoxState;
                    if ('' === t) return;
                    let i = {value: e, enableQuerySyntax: this.enableQuerySyntax, analytics: r},
                        o = new c.a();
                    (o.setJSON(c.S.STANDALONE_SEARCH_BOX_DATA, i), this.searchBox.afterRedirection());
                    let a = this.redirect.emit({redirectTo: t, value: e});
                    a.defaultPrevented || (window.location.href = t);
                }
                registerSuggestions(t) {
                    (t.preventDefault(),
                        t.stopPropagation(),
                        this.suggestionEvents.push(t.detail),
                        this.searchBox && this.suggestions.push(t.detail(this.suggestionBindings)));
                }
                watchRedirectionUrl() {
                    this.initialize();
                }
                get suggestionBindings() {
                    return {
                        ...this.bindings,
                        id: this.id,
                        isStandalone: !!this.redirectionUrl,
                        searchBoxController: this.searchBox,
                        numberOfQueries: this.numberOfQueries,
                        clearFilters: this.clearFilters,
                        suggestedQuery: () => this.suggestedQuery,
                        clearSuggestions: () => this.clearSuggestions(),
                        triggerSuggestions: () => this.triggerSuggestions(),
                        getSuggestions: () => this.suggestions,
                        getSuggestionElements: () => this.allSuggestionElements,
                    };
                }
                get isDoubleList() {
                    return !!(this.leftSuggestionElements.length && this.rightSuggestionElements.length);
                }
                updateActiveDescendant(t = '') {
                    this.activeDescendant = t;
                }
                updateDescendants(t = '') {
                    let e = this.activeDescendantElement;
                    (this.updateActiveDescendant(t), (this.previousActiveDescendantElement = e));
                }
                get activeDescendantElement() {
                    var t, e;
                    return (
                        (this.searchBoxCommon.hasActiveDescendant &&
                            ((null === (t = this.leftPanelRef) || void 0 === t
                                ? void 0
                                : t.querySelector(`#${this.activeDescendant}`)) ||
                                (null === (e = this.rightPanelRef) || void 0 === e
                                    ? void 0
                                    : e.querySelector(`#${this.activeDescendant}`)))) ||
                        null
                    );
                }
                get allSuggestionElements() {
                    return [...this.leftSuggestionElements, ...this.rightSuggestionElements];
                }
                get panelInFocus() {
                    var t, e;
                    return (
                        null === (t = this.leftPanelRef) || void 0 === t
                            ? void 0
                            : t.contains(this.activeDescendantElement)
                    )
                        ? this.leftPanelRef
                        : (
                                null === (e = this.rightPanelRef) || void 0 === e
                                    ? void 0
                                    : e.contains(this.activeDescendantElement)
                            )
                          ? this.rightPanelRef
                          : this.leftPanelRef || this.rightPanelRef;
                }
                getSuggestionElements(t) {
                    let e = t.map((t) => t.renderItems()).flat(),
                        r = this.numberOfQueries + e.filter(p.e).length;
                    return e.slice(0, r);
                }
                focusValue(t) {
                    (this.updateActiveDescendant(t.id),
                        this.searchBoxCommon.scrollActiveDescendantIntoView(),
                        this.updateQueryFromSuggestion(),
                        this.updateAriaLiveActiveDescendant(t));
                }
                focusPanel(t) {
                    if (this.panelInFocus !== t && t && t.firstElementChild) {
                        let e =
                                this.previousActiveDescendantElement &&
                                t.contains(this.previousActiveDescendantElement),
                            r = e ? this.previousActiveDescendantElement : t.firstElementChild;
                        (this.updateDescendants(r.id), this.updateAriaLiveActiveDescendant(r));
                    }
                }
                updateAriaMessage() {
                    let t = this.allSuggestionElements.filter(p.a).length;
                    this.searchBoxAriaMessage = t
                        ? this.bindings.i18n.t('query-suggestions-available', {count: t})
                        : this.bindings.i18n.t('query-suggestions-unavailable');
                }
                async triggerSuggestions() {
                    var t;
                    if (this.disableSearch) return;
                    let e = await Promise.allSettled(
                            this.suggestions.map((t) =>
                                w(t.onInput ? t.onInput() : Promise.resolve(), this.suggestionTimeout),
                            ),
                        ),
                        r = [];
                    e.forEach((t, e) => {
                        'fulfilled' === t.status
                            ? r.push(this.suggestions[e])
                            : this.bindings.engine.logger.warn(
                                  'Some query suggestions are not being shown because the promise timed out.',
                              );
                    });
                    let i = (t, e = !1) => r.filter((r) => r.panel === t || (!r.panel && e)).sort(this.sortSuggestions);
                    ((this.leftSuggestions = i('left', !0)),
                        (this.leftSuggestionElements = this.getAndFilterLeftSuggestionElements()),
                        (this.rightSuggestions = i('right')),
                        (this.rightSuggestionElements = this.getSuggestionElements(this.rightSuggestions)));
                    let o =
                        (null === (t = this.allSuggestionElements.find(p.a)) || void 0 === t ? void 0 : t.query) || '';
                    (this.updateSuggestedQuery(o), this.updateAriaMessage());
                }
                sortSuggestions(t, e) {
                    return t.position - e.position;
                }
                onInput(t) {
                    ((this.isSearchDisabled = this.disableSearch || this.minimumQueryLength > t.trim().length),
                        this.isSearchDisabled ||
                            ((this.isExpanded = !0),
                            this.searchBox.updateText(t),
                            this.updateActiveDescendant(),
                            this.triggerSuggestions()));
                }
                onFocus() {
                    ((this.isExpanded = !0), this.triggerSuggestions());
                }
                clearSuggestions() {
                    ((this.isExpanded = !1), this.updateActiveDescendant(), this.clearSuggestionElements());
                }
                onSubmit() {
                    if (this.activeDescendantElement) {
                        (this.activeDescendantElement.click(), this.updateActiveDescendant());
                        return;
                    }
                    (this.searchBox.submit(), this.updateActiveDescendant(), this.clearSuggestions());
                }
                isPanelInFocus(t, e) {
                    var r;
                    if (!this.activeDescendantElement) return !1;
                    if (e) {
                        let r = e.replace(/"/g, '\\"');
                        return !!(null == t ? void 0 : t.querySelector(`[${u.q}="${r}"]`));
                    }
                    return (
                        (null === (r = this.activeDescendantElement) || void 0 === r ? void 0 : r.closest('ul')) === t
                    );
                }
                updateQueryFromSuggestion() {
                    var t;
                    let e = null === (t = this.activeDescendantElement) || void 0 === t ? void 0 : t.getAttribute(u.q);
                    e &&
                        this.searchBoxState.value !== e &&
                        (this.searchBoxCommon.updateQuery(e), this.updateSuggestedQuery(e));
                }
                updateAriaLiveActiveDescendant(t) {
                    (0, s.i)() && (this.suggestionsAriaMessage = t.ariaLabel);
                }
                updateSuggestionElements(t) {
                    (this.isPanelInFocus(this.leftPanelRef, t) ||
                        (this.leftSuggestionElements = this.getAndFilterLeftSuggestionElements()),
                        this.isPanelInFocus(this.rightPanelRef, t) ||
                            (this.rightSuggestionElements = this.getSuggestionElements(this.rightSuggestions)));
                }
                getAndFilterLeftSuggestionElements() {
                    let t = this.getSuggestionElements(this.leftSuggestions),
                        e = new Set();
                    return t.filter((t) => !!(0, o.c)(t.query) || (!e.has(t.query) && (e.add(t.query), !0)));
                }
                onKeyDown(t) {
                    if (!this.isSearchDisabled)
                        switch (t.key) {
                            case 'Enter':
                                this.onSubmit();
                                break;
                            case 'Escape':
                            case 'Tab':
                                this.clearSuggestions();
                                break;
                            case 'ArrowDown':
                                (t.preventDefault(), this.searchBoxCommon.focusNextValue());
                                break;
                            case 'ArrowUp':
                                (t.preventDefault(),
                                    this.searchBoxCommon.firstValue === this.activeDescendantElement
                                        ? this.updateActiveDescendant()
                                        : this.searchBoxCommon.focusPreviousValue());
                                break;
                            case 'ArrowRight':
                                (this.activeDescendant || !this.searchBox.state.value) &&
                                    (t.preventDefault(), this.focusPanel(this.rightPanelRef));
                                break;
                            case 'ArrowLeft':
                                (this.activeDescendant || !this.searchBox.state.value) &&
                                    (t.preventDefault(), this.focusPanel(this.leftPanelRef));
                        }
                }
                clearSuggestionElements() {
                    ((this.leftSuggestionElements = []),
                        (this.rightSuggestionElements = []),
                        (this.searchBoxAriaMessage = ''));
                }
                onSuggestionMouseOver(t, e, r) {
                    let i = 'left' === e ? this.leftPanelRef : this.rightPanelRef;
                    (this.panelInFocus === i ? this.updateActiveDescendant(r) : this.updateDescendants(r),
                        t.query && this.updateSuggestedQuery(t.query));
                }
                renderSuggestion(t, e, r, o) {
                    let a = `${this.id}-${o}-suggestion-${t.key}`,
                        n = a === this.activeDescendant;
                    if (e === r && t.hideIfLast) return null;
                    let s = t.onSelect || t.query;
                    return s
                        ? (0, i.h)(u.B, {
                              bindings: this.bindings,
                              id: a,
                              suggestion: t,
                              isSelected: n,
                              side: o,
                              index: e,
                              lastIndex: r,
                              isDoubleList: this.isDoubleList,
                              onClick: (e) => {
                                  this.searchBoxCommon.onSuggestionClick(t, e);
                              },
                              onMouseOver: () => {
                                  this.onSuggestionMouseOver(t, o, a);
                              },
                          })
                        : (0, i.h)(u.c, {
                              bindings: this.bindings,
                              id: a,
                              suggestion: t,
                              isSelected: n,
                              side: o,
                              index: e,
                              lastIndex: r,
                              isDoubleList: this.isDoubleList,
                          });
                }
                async updateSuggestedQuery(t) {
                    let e = this.bindings.store.isMobile() ? '' : t;
                    (await Promise.allSettled(
                        this.suggestions.map((t) =>
                            w(
                                t.onSuggestedQueryChange ? t.onSuggestedQueryChange(e) : Promise.resolve(),
                                this.suggestionTimeout,
                            ),
                        ),
                    ),
                        (this.suggestedQuery = e),
                        this.updateSuggestionElements(e));
                }
                renderPanel(t, e, r, o) {
                    return e.length
                        ? (0, i.h)(
                              'div',
                              {
                                  part: `suggestions suggestions-${t}`,
                                  ref: r,
                                  class: 'flex flex-grow basis-1/2 flex-col',
                                  onMouseDown: (t) => {
                                      t.target === o() && t.preventDefault();
                                  },
                              },
                              e.map((r, i) => this.renderSuggestion(r, i, e.length - 1, t)),
                          )
                        : null;
                }
                renderSuggestions() {
                    return this.searchBoxCommon.hasSuggestions
                        ? (0, i.h)(
                              'div',
                              {
                                  id: this.searchBoxCommon.popupId,
                                  part: `suggestions-wrapper ${this.isDoubleList ? 'suggestions-double-list' : 'suggestions-single-list'}`,
                                  class: `flex w-full z-10 absolute left-0 top-full rounded-md bg-background border border-neutral ${this.searchBoxCommon.showSuggestions ? '' : 'hidden'}`,
                                  role: 'application',
                                  'aria-label': this.bindings.i18n.t(
                                      this.isDoubleList
                                          ? 'search-suggestions-double-list'
                                          : 'search-suggestions-single-list',
                                  ),
                                  'aria-activedescendant': this.activeDescendant,
                              },
                              this.renderPanel(
                                  'left',
                                  this.leftSuggestionElements,
                                  (t) => (this.leftPanelRef = t),
                                  () => this.leftPanelRef,
                              ),
                              this.renderPanel(
                                  'right',
                                  this.rightSuggestionElements,
                                  (t) => (this.rightPanelRef = t),
                                  () => this.rightPanelRef,
                              ),
                          )
                        : null;
                }
                render() {
                    this.updateBreakpoints();
                    let t = this.searchBoxCommon.getSearchInputLabel(this.minimumQueryLength);
                    return [
                        (0, i.h)(
                            u.b,
                            {disabled: this.isSearchDisabled},
                            (0, i.h)(
                                'atomic-focus-detector',
                                {style: {display: 'contents'}, onFocusExit: () => this.clearSuggestions()},
                                (0, i.h)(u.a, {
                                    inputRef: this.inputRef,
                                    loading: this.searchBoxState.isLoading,
                                    ref: (t) => (this.inputRef = t),
                                    bindings: this.bindings,
                                    value: this.searchBoxState.value,
                                    title: t,
                                    ariaLabel: t,
                                    onFocus: () => this.onFocus(),
                                    onInput: (t) => this.onInput(t.target.value),
                                    onKeyDown: (t) => this.onKeyDown(t),
                                    onClear: () => this.searchBox.clear(),
                                    popup: {
                                        id: this.searchBoxCommon.popupId,
                                        activeDescendant: this.activeDescendant,
                                        expanded: this.isExpanded,
                                        hasSuggestions: this.searchBoxCommon.hasSuggestions,
                                    },
                                }),
                                this.renderSuggestions(),
                                (0, i.h)(f, {
                                    bindings: this.bindings,
                                    disabled: this.isSearchDisabled,
                                    onClick: () => this.searchBox.submit(),
                                    title: t,
                                }),
                            ),
                        ),
                        !this.suggestions.length &&
                            (0, i.h)(
                                'slot',
                                null,
                                (0, i.h)('atomic-search-box-recent-queries', null),
                                (0, i.h)('atomic-search-box-query-suggestions', null),
                            ),
                    ];
                }
                get host() {
                    return (0, i.g)(this);
                }
                static get watchers() {
                    return {redirectionUrl: ['watchRedirectionUrl']};
                }
            };
            (b([(0, l.I)()], v.prototype, 'bindings', void 0),
                b([(0, l.B)('searchBox')], v.prototype, 'searchBoxState', void 0),
                b([(0, n.A)('search-box')], v.prototype, 'searchBoxAriaMessage', void 0),
                b([(0, n.A)('search-suggestions', !0)], v.prototype, 'suggestionsAriaMessage', void 0),
                (v.style =
                    "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--atomic-font-family);font-feature-settings:normal;font-variation-settings:normal;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}:host{display:block;--tw-ring-inset:var(--tw-empty,  )}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);font-weight:var(--atomic-font-normal)}:host(.atomic-hidden){display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.\\!link{color:var(--atomic-primary)}.\\!link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link{color:var(--atomic-primary)}.link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.input-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background)}.input-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:hover{border-color:var(--atomic-primary-light)}.input-primary.focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.input-primary:focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-radio::before{--tw-content:attr(value);content:var(--tw-content)}.btn-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-primary);color:var(--atomic-on-primary)}.btn-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:hover{background-color:var(--atomic-primary-light)}.btn-primary.focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:disabled{cursor:not-allowed;background-color:var(--atomic-disabled)}.btn-outline-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-outline-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:hover{border-color:var(--atomic-primary-light);color:var(--atomic-primary-light)}.btn-outline-primary.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-neutral)}.btn-text-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-text-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:hover{background-color:var(--atomic-neutral-light)}.btn-text-primary.focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-primary:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-neutral{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:hover{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral.focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral:focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-transparent{color:var(--atomic-on-background)}.btn-text-transparent.focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:hover{color:var(--atomic-primary-light)}.btn-text-transparent.focus-visible{color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{color:var(--atomic-primary-light)}.btn-square-neutral{border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-square-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-square-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-square-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-pill{border-radius:var(--atomic-border-radius-xl)}.btn-page{display:grid;place-items:center;border-width:0px;font-size:var(--atomic-text-lg)}.btn-page:hover{border-width:1px}.btn-page.focus-visible{border-width:1px}.btn-page:focus-visible{border-width:1px}.btn-page.selected{border-width:2px;border-color:var(--atomic-primary);font-weight:var(--atomic-font-bold)}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-0.5rem}.-top-2{top:-0.5rem}.bottom-0{bottom:0px}.bottom-px{bottom:1px}.left-0{left:0px}.right-0{right:0px}.right-px{right:1px}.top-0{top:0px}.top-\\[50\\%\\]{top:50%}.top-full{top:100%}.top-px{top:1px}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.z-\\[9999\\]{z-index:9999}.col-span-2{grid-column:span 2 / span 2}.m-0{margin:0px}.m-2{margin:0.5rem}.-my-px{margin-top:-1px;margin-bottom:-1px}.mx-0{margin-left:0px;margin-right:0px}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem}.mx-1{margin-left:0.25rem;margin-right:0.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mr-px{margin-right:-1px}.mb-0{margin-bottom:0px}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:0.25rem}.ml-2{margin-left:0.5rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.mr-0{margin-right:0px}.mr-0\\.5{margin-right:0.125rem}.mr-1{margin-right:0.25rem}.mr-1\\.5{margin-right:0.375rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-6{margin-right:1.5rem}.mt-0{margin-top:0px}.mt-1{margin-top:0.25rem}.mt-1\\.5{margin-top:0.375rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:0.5rem}.mt-2\\.5{margin-top:0.625rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-px{margin-top:1px}.box-border{box-sizing:border-box}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-1{height:0.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-2{height:0.5rem}.h-2\\.5{height:0.625rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-\\[2\\.6rem\\]{height:2.6rem}.h-auto{height:auto}.h-full{height:100%}.min-h-\\[2\\.5rem\\]{min-height:2.5rem}.min-h-\\[40px\\]{min-height:40px}.w-0{width:0px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-2{width:0.5rem}.w-2\\.5{width:0.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:0.75rem}.w-3\\.5{width:0.875rem}.w-3\\/5{width:60%}.w-32{width:8rem}.w-4{width:1rem}.w-44{width:11rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[2\\.6rem\\]{width:2.6rem}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[2\\.5rem\\]{min-width:2.5rem}.min-w-\\[6rem\\]{min-width:6rem}.max-w-\\[15rem\\]{max-width:15rem}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-8{flex-basis:2rem}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes scaleUp{0%{transform:scale(0.7) translateY(150vh);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}.animate-scaleUpModal{animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards}@keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}.animate-slideDownModal{animation:slideDown .5s linear forwards}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-\\[min-content_auto\\]{grid-template-columns:min-content auto}.grid-cols-min-1fr{grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-items-center{place-items:center}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-0\\.5{gap:0.125rem}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem}.gap-x-1\\.5{-moz-column-gap:0.375rem;column-gap:0.375rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-0{row-gap:0px}.gap-y-0\\.5{row-gap:0.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.375rem * var(--tw-space-x-reverse));margin-left:calc(0.375rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-neutral>:not([hidden])~:not([hidden]){border-color:var(--atomic-neutral)}.self-start{align-self:flex-start}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-scroll{overflow-x:scroll}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:var(--atomic-border-radius)}.rounded-\\[100\\%\\]{border-radius:100%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0px}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-r-md{border-top-right-radius:var(--atomic-border-radius-md);border-bottom-right-radius:var(--atomic-border-radius-md)}.border{border-width:1px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-neutral{border-color:var(--atomic-neutral)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.border-primary{border-color:var(--atomic-primary)}.bg-\\[\\#F1F2FF\\]{--tw-bg-opacity:1;background-color:rgb(241 242 255 / var(--tw-bg-opacity))}.bg-background{background-color:var(--atomic-background)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-primary{background-color:var(--atomic-primary)}.bg-transparent{background-color:transparent}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-background-60{--tw-gradient-from:var(--atomic-background) 60% var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.fill-current{fill:currentColor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-\\[0\\.625rem\\]{padding-top:0.625rem;padding-bottom:0.625rem}.pb-1{padding-bottom:0.25rem}.pb-3{padding-bottom:0.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-0{padding-left:0px}.pl-1{padding-left:0.25rem}.pl-10{padding-left:2.5rem}.pl-3{padding-left:0.75rem}.pl-9{padding-left:2.25rem}.pr-2{padding-right:0.5rem}.pr-24{padding-right:6rem}.pr-6{padding-right:1.5rem}.pt-0{padding-top:0px}.pt-0\\.5{padding-top:0.125rem}.text-left{text-align:left}.text-center{text-align:center}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.text-2xl{font-size:var(--atomic-text-2xl)}.text-base{font-size:var(--atomic-text-base)}.text-lg{font-size:var(--atomic-text-lg)}.text-sm{font-size:var(--atomic-text-sm)}.text-xl{font-size:var(--atomic-text-xl)}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:var(--atomic-font-bold)}.font-medium{font-weight:500}.font-normal{font-weight:var(--atomic-font-normal)}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-10{line-height:2.5rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-8{line-height:2rem}.text-\\[\\#54698D\\]{--tw-text-opacity:1;color:rgb(84 105 141 / var(--tw-text-opacity))}.text-error{color:var(--atomic-error)}.text-inherit{color:inherit}.text-neutral{color:var(--atomic-neutral)}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-on-background{color:var(--atomic-on-background)}.text-on-primary{color:var(--atomic-on-primary)}.text-primary{color:var(--atomic-primary)}.text-success{color:var(--atomic-success)}.text-transparent{color:transparent}.placeholder-neutral-dark::-moz-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark::placeholder{color:var(--atomic-neutral-dark)}.opacity-0{opacity:0}.opacity-50{opacity:0.5}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--atomic-primary);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-neutral{outline-color:var(--atomic-neutral)}.outline-primary{outline-color:var(--atomic-primary)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.ring-ring-primary{--tw-ring-color:var(--atomic-ring-primary)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-visi-opacity{transition-property:visibility, opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-outline.focus-visible{outline:2px solid transparent;outline-offset:2px}.no-outline:focus-visible{outline:2px solid transparent;outline-offset:2px}.accessibility-only{position:absolute;display:block;height:0;overflow:hidden;margin:0}.text-inherit{font-size:inherit}.cursor-inherit{cursor:inherit}.shadow-lg{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}.ripple{position:absolute;pointer-events:none;transform:scale(0);border-radius:50%;animation:ripple var(--animation-duration) linear}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@keyframes ripple{to{transform:scale(4);opacity:0}}.loading{--tw-gradient-from:var(--atomic-primary-dark);--tw-gradient-to:var(--atomic-primary-light);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.loading::after{content:'';position:absolute;height:83.333333%;width:83.333333%;border-radius:9999px;background-color:var(--atomic-background)}[part~='instant-results-item']{padding:0.75rem}[part~='instant-results-show-all']{justify-content:center;padding-top:0.25rem;padding-bottom:0.25rem;border-top:1px solid var(--atomic-neutral);margin-top:auto;box-sizing:content-box}[part~='instant-results-show-all'] button{background-color:transparent}[part~='suggestions-left']+[part~='suggestions-right']{border-left:1px solid var(--atomic-neutral)}[part~='suggestions-wrapper']{flex-direction:column}@media only screen and (min-width: 1024px){[part~='suggestions-wrapper']{flex-direction:row}}.focus-within\\:border-disabled:focus-within{border-color:var(--atomic-disabled)}.focus-within\\:border-primary:focus-within{border-color:var(--atomic-primary)}.focus-within\\:ring:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-neutral:focus-within{--tw-ring-color:var(--atomic-neutral)}.focus-within\\:ring-ring-primary:focus-within{--tw-ring-color:var(--atomic-ring-primary)}.hover\\:border-primary-light:hover{border-color:var(--atomic-primary-light)}.hover\\:bg-neutral-light:hover{background-color:var(--atomic-neutral-light)}.hover\\:bg-primary-light:hover{background-color:var(--atomic-primary-light)}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.focus-visible\\:border-primary-light.focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:border-primary-light:focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:bg-neutral-light.focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-neutral-light:focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-primary-light.focus-visible{background-color:var(--atomic-primary-light)}.focus-visible\\:bg-primary-light:focus-visible{background-color:var(--atomic-primary-light)}.group:hover .group-hover\\:text-primary{color:var(--atomic-primary)}.group:hover .group-hover\\:text-primary-light{color:var(--atomic-primary-light)}.group:focus .group-focus\\:text-primary{color:var(--atomic-primary)}.group:focus .group-focus\\:text-primary-light{color:var(--atomic-primary-light)}.group.focus-visible .group-focus-visible\\:text-primary{color:var(--atomic-primary)}.group:focus-visible .group-focus-visible\\:text-primary{color:var(--atomic-primary)}"));
        },
        98214: function (t, e, r) {
            r.d(e, {
                B: function () {
                    return c;
                },
                N: function () {
                    return l;
                },
                S: function () {
                    return o;
                },
                a: function () {
                    return g;
                },
                b: function () {
                    return n;
                },
                c: function () {
                    return s;
                },
                i: function () {
                    return u;
                },
            });
            var i = class extends Error {
                    constructor(t) {
                        (super(t), (this.name = 'SchemaValidationError'));
                    }
                },
                o = class {
                    constructor(t) {
                        this.definition = t;
                    }
                    validate(t = {}, e = '') {
                        let r = {...this.default, ...t},
                            o = [];
                        for (let t in this.definition) {
                            let e = this.definition[t].validate(r[t]);
                            e && o.push(`${t}: ${e}`);
                        }
                        if (o.length)
                            throw (
                                /**
                                 * @license
                                 *
                                 * Copyright 2023 Coveo Solutions Inc.
                                 *
                                 * Licensed under the Apache License, Version 2.0 (the "License");
                                 * you may not use this file except in compliance with the License.
                                 * You may obtain a copy of the License at
                                 *
                                 *       http://www.apache.org/licenses/LICENSE-2.0
                                 *
                                 * Unless required by applicable law or agreed to in writing, software
                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                 * See the License for the specific language governing permissions and
                                 * limitations under the License.
                                 */ (function (t, e) {
                                    let r = `
  The following properties are invalid:

    ${t.join('\n	')}
  
  ${e}
  `;
                                    return new i(r);
                                })(o, e)
                            );
                        return r;
                    }
                    get default() {
                        let t = {};
                        for (let e in this.definition) {
                            let r = this.definition[e].default;
                            void 0 !== r && (t[e] = r);
                        }
                        return t;
                    }
                },
                a = class {
                    constructor(t = {}) {
                        this.baseConfig = t;
                    }
                    validate(t) {
                        return this.baseConfig.required && s(t) ? 'value is required.' : null;
                    }
                    get default() {
                        return this.baseConfig.default instanceof Function
                            ? this.baseConfig.default()
                            : this.baseConfig.default;
                    }
                    get required() {
                        return !0 === this.baseConfig.required;
                    }
                };
            function n(t) {
                return void 0 === t;
            }
            function s(t) {
                return n(t) || null === t;
            }
            var l = class {
                    constructor(t = {}) {
                        ((this.config = t), (this.value = new a(t)));
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return (
                            e ||
                            (n(t) || ('number' == typeof t && !isNaN(t))
                                ? t < this.config.min
                                    ? `minimum value of ${this.config.min} not respected.`
                                    : t > this.config.max
                                      ? `maximum value of ${this.config.max} not respected.`
                                      : null
                                : 'value is not a number.')
                        );
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                },
                c = class {
                    constructor(t = {}) {
                        this.value = new a(t);
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return e || (n(t) || 'boolean' == typeof t ? null : 'value is not a boolean.');
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                },
                d =
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
                g = class {
                    constructor(t = {}) {
                        ((this.config = {emptyAllowed: !0, url: !1, ...t}), (this.value = new a(this.config)));
                    }
                    validate(t) {
                        let {emptyAllowed: e, url: r, regex: i, constrainTo: o} = this.config,
                            a = this.value.validate(t);
                        if (a) return a;
                        if (n(t)) return null;
                        if ('[object String]' !== Object.prototype.toString.call(t)) return 'value is not a string.';
                        if (!e && !t.length) return 'value is an empty string.';
                        if (r && !d.test(t)) return 'value is not a valid URL.';
                        if (i && !i.test(t)) return `value did not match provided regex ${i}`;
                        if (o && !o.includes(t)) {
                            let t = o.join(', ');
                            return `value should be one of: ${t}.`;
                        }
                        return null;
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                };
            function u(t) {
                return Array.isArray(t);
            }
        },
        9807: function (t, e, r) {
            var i, o;
            (r.d(e, {
                S: function () {
                    return i;
                },
                a: function () {
                    return a;
                },
            }),
                ((o = i || (i = {})).RECENT_QUERIES = 'coveo-recent-queries'),
                (o.STANDALONE_SEARCH_BOX_DATA = 'coveo-standalone-search-box-data'));
            class a {
                constructor() {}
                clear() {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.clear(),
                        () => {},
                    );
                }
                getItem(t) {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.getItem(t),
                        () => null,
                    );
                }
                getParsedJSON(t, e) {
                    let r = this.getItem(t);
                    return r
                        ? this.tryJSONOrWarn(
                              t,
                              () => JSON.parse(r),
                              () => e,
                          )
                        : e;
                }
                key(t) {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.key(t),
                        () => null,
                    );
                }
                get length() {
                    return this.tryOrElse(
                        () => localStorage.length,
                        () => 0,
                    );
                }
                removeItem(t) {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.removeItem(t),
                        () => {},
                    );
                }
                setItem(t, e) {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.setItem(t, e),
                        () => {},
                    );
                }
                setJSON(t, e) {
                    let r = this.tryJSONOrWarn(
                        t,
                        () => JSON.stringify(e),
                        () => JSON.stringify({}),
                    );
                    return this.setItem(t, r);
                }
                tryAccessLocalStorageOrWarn(t, e) {
                    return this.tryOrElse(
                        t,
                        () => (
                            console.warn(
                                'Error while trying to read or modify local storage. This can be caused by browser specific settings.',
                            ),
                            e()
                        ),
                    );
                }
                tryJSONOrWarn(t, e, r) {
                    return this.tryOrElse(
                        e,
                        () => (
                            console.warn(`Error while trying to do JSON manipulation with local storage entry. ${t}`),
                            r()
                        ),
                    );
                }
                tryOrElse(t, e) {
                    try {
                        return t();
                    } catch (t) {
                        return (console.warn(t), e());
                    }
                }
            }
        },
        35295: function (t, e, r) {
            r.d(e, {
                D: function () {
                    return o;
                },
                u: function () {
                    return s;
                },
            });
            var i = r(66038);
            let o = '1024px';
            function a(t, e) {
                return t.replace(RegExp(`\\(min-width: ${o}\\)`, 'g'), `(min-width: ${e})`);
            }
            let n = ['atomic-search-layout', 'atomic-insight-layout'];
            function s(t) {
                let e = (0, i.c)(t, n.join(', '));
                (null == e ? void 0 : e.mobileBreakpoint) &&
                    e.mobileBreakpoint !== o &&
                    (!(function (t, e) {
                        var r, i;
                        let o = null === (r = t.shadowRoot) || void 0 === r ? void 0 : r.adoptedStyleSheets;
                        if (!o || !o.length) return;
                        let n = o[0],
                            s = Object.values(n.cssRules)
                                .map((t) => t.cssText)
                                .join('');
                        null === (i = n.replaceSync) || void 0 === i || i.call(n, a(s, e));
                    })(t, e.mobileBreakpoint),
                    (function (t, e) {
                        var r;
                        let i = null === (r = t.shadowRoot) || void 0 === r ? void 0 : r.querySelector('style');
                        i && (i.textContent = a(i.textContent, e));
                    })(t, e.mobileBreakpoint));
            }
        },
    },
]);
