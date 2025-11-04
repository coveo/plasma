'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [85152],
    {
        85152: function (t, r, e) {
            (e.r(r),
                e.d(r, {
                    atomic_search_interface: function () {
                        return h;
                    },
                }));
            var i = e(5991),
                a = e(64977),
                o = e(79116),
                n = e(9807),
                s = e(53049),
                l = e(35295),
                c = e(23318),
                d = e(49416);
            (e(87856), e(30839), e(66038));
            let m = 'firstSearchExecuted',
                h = class {
                    constructor(t) {
                        ((0, i.r)(this, t),
                            (this.unsubscribeUrlManager = () => {}),
                            (this.unsubscribeSearchStatus = () => {}),
                            (this.initialized = !1),
                            (this.store = (function () {
                                let t = (0, c.c)({
                                    loadingFlags: [],
                                    facets: {},
                                    numericFacets: {},
                                    dateFacets: {},
                                    categoryFacets: {},
                                    facetElements: [],
                                    sortOptions: [],
                                    iconAssetsPath: '',
                                    mobileBreakpoint: l.D,
                                    fieldsToInclude: [],
                                    currentQuickviewPosition: -1,
                                });
                                return {
                                    ...t,
                                    getAllFacets: () => ({
                                        ...t.state.facets,
                                        ...t.state.dateFacets,
                                        ...t.state.categoryFacets,
                                        ...t.state.numericFacets,
                                    }),
                                    isMobile: () => !window.matchMedia((0, d.m)(t.state.mobileBreakpoint)).matches,
                                    getUniqueIDFromEngine: (t) => t.state.search.response.searchUid,
                                };
                            })()),
                            (this.relevanceInspectorIsOpen = !1),
                            (this.fieldsToInclude = '[]'),
                            (this.analytics = !0),
                            (this.i18n = o.i.createInstance()),
                            (this.language = 'en'),
                            (this.reflectStateInUrl = !0),
                            (this.scrollContainer = 'atomic-search-interface'),
                            (this.languageAssetsPath = './lang'),
                            (this.iconAssetsPath = './assets'),
                            (this.enableRelevanceInspector = !0),
                            (this.onHashChange = () => {
                                this.urlManager.synchronize(this.fragment);
                            }),
                            this.initRelevanceInspector(),
                            (this.commonInterfaceHelper = new o.C(this, 'CoveoAtomic')));
                    }
                    connectedCallback() {
                        (this.store.setLoadingFlag(m), this.updateMobileBreakpoint());
                    }
                    componentWillLoad() {
                        (this.initAriaLive(), this.initFieldsToInclude());
                    }
                    updateSearchConfiguration(t, r) {
                        if (!this.commonInterfaceHelper.engineIsCreated(this.engine) || this.engine.state[t] === r)
                            return;
                        let {updateSearchConfiguration: e} = (0, a.J)(this.engine);
                        this.engine.dispatch(e({[t]: r}));
                    }
                    updateSearchHub() {
                        var t;
                        this.updateSearchConfiguration(
                            'searchHub',
                            null !== (t = this.searchHub) && void 0 !== t ? t : 'default',
                        );
                    }
                    updatePipeline() {
                        this.updateSearchConfiguration('pipeline', this.pipeline);
                    }
                    toggleAnalytics() {
                        this.commonInterfaceHelper.engineIsCreated(this.engine) &&
                            this.commonInterfaceHelper.onAnalyticsChange();
                    }
                    updateLanguage() {
                        if (!this.commonInterfaceHelper.engineIsCreated(this.engine)) return;
                        let {updateSearchConfiguration: t} = (0, a.J)(this.engine);
                        (this.engine.dispatch(t({locale: this.language})),
                            this.commonInterfaceHelper.onLanguageChange());
                    }
                    updateIconAssetsPath() {
                        this.store.set('iconAssetsPath', this.iconAssetsPath);
                    }
                    disconnectedCallback() {
                        (this.unsubscribeUrlManager(),
                            this.unsubscribeSearchStatus(),
                            window.removeEventListener('hashchange', this.onHashChange));
                    }
                    handleInitialization(t) {
                        this.commonInterfaceHelper.onComponentInitializing(t);
                    }
                    scrollToTop() {
                        let t = document.querySelector(this.scrollContainer);
                        if (!t) {
                            this.bindings.engine.logger.warn(
                                `Could not find the scroll container with the selector "${this.scrollContainer}". This will prevent UX interactions that require a scroll from working correctly. Please check the CSS selector in the scrollContainer option`,
                            );
                            return;
                        }
                        t.scrollIntoView({behavior: 'smooth'});
                    }
                    closeRelevanceInspector() {
                        this.relevanceInspectorIsOpen = !1;
                    }
                    initialize(t) {
                        return this.internalInitialization(() => this.initEngine(t));
                    }
                    initializeWithSearchEngine(t) {
                        return (
                            this.pipeline &&
                                this.pipeline !== t.state.pipeline &&
                                console.warn((0, o.m)('search', 'query pipeline')),
                            this.searchHub &&
                                this.searchHub !== t.state.searchHub &&
                                console.warn((0, o.m)('search', 'search hub')),
                            this.internalInitialization(() => (this.engine = t))
                        );
                    }
                    async executeFirstSearch() {
                        if (!this.commonInterfaceHelper.engineIsCreated(this.engine)) return;
                        if (!this.initialized) {
                            console.error(
                                'You have to wait until the "initialize" promise is fulfilled before executing a search.',
                                this.host,
                            );
                            return;
                        }
                        let t = new n.a(),
                            r = t.getParsedJSON(n.S.STANDALONE_SEARCH_BOX_DATA, null);
                        if (!r) {
                            this.engine.executeFirstSearch();
                            return;
                        }
                        t.removeItem(n.S.STANDALONE_SEARCH_BOX_DATA);
                        let {updateQuery: e} = (0, a.q)(this.engine),
                            {value: i, enableQuerySyntax: o, analytics: s} = r;
                        (this.engine.dispatch(e({q: i, enableQuerySyntax: o})),
                            this.engine.executeFirstSearchAfterStandaloneSearchBoxRedirect(s));
                    }
                    async getOrganizationEndpoints(t, r = 'prod') {
                        return (0, a.r)(t, r);
                    }
                    get bindings() {
                        return {engine: this.engine, i18n: this.i18n, store: this.store, interfaceElement: this.host};
                    }
                    initFieldsToInclude() {
                        let t = a.v.concat(this.fieldsToInclude);
                        this.store.addFieldsToInclude(t);
                    }
                    registerFieldsToInclude() {
                        var t;
                        null === (t = this.engine) ||
                            void 0 === t ||
                            t.dispatch((0, a.V)(this.engine).registerFieldsToInclude(this.store.state.fieldsToInclude));
                    }
                    updateMobileBreakpoint() {
                        var t;
                        let r =
                            null === (t = this.host.querySelector('atomic-search-layout')) || void 0 === t
                                ? void 0
                                : t.mobileBreakpoint;
                        r && this.store.set('mobileBreakpoint', r);
                    }
                    initEngine(t) {
                        let r = this.getSearchConfiguration(t),
                            e = (function (t, r, e) {
                                let i = (r, i) => {
                                        let a;
                                        return (
                                            (a = (0, o.a)(r, i, t)),
                                            (function (t, r) {
                                                let e = r.getAllFacets(),
                                                    i = (t, r) => (e[t] ? e[t].label() : r);
                                                return (
                                                    t.facetState &&
                                                        (t.facetState = t.facetState.map((t) => {
                                                            let {id: r, title: e} = t;
                                                            return {...t, title: i(r, e)};
                                                        })),
                                                    t.customData &&
                                                        t.customData.facetTitle &&
                                                        t.customData.facetId &&
                                                        t.customData.facetTitle &&
                                                        (t.customData.facetTitle = i(
                                                            t.customData.facetId,
                                                            t.customData.facetTitle,
                                                        )),
                                                    t
                                                );
                                            })((a = (0, o.b)(a)), e)
                                        );
                                    },
                                    a = {analyticsClientMiddleware: i, enabled: r, ...(0, o.c)()};
                                return t.analytics ? {...a, ...t.analytics, analyticsClientMiddleware: i} : a;
                            })(t, this.analytics, this.store);
                        try {
                            this.engine = (0, a.t)({
                                configuration: {...t, search: r, analytics: e},
                                loggerOptions: {level: this.logLevel},
                            });
                        } catch (t) {
                            throw ((this.error = t), t);
                        }
                    }
                    getSearchConfiguration(t) {
                        var r;
                        let e = {
                            searchHub: null !== (r = this.searchHub) && void 0 !== r ? r : 'default',
                            pipeline: this.pipeline,
                            locale: this.language,
                            timezone: this.timezone,
                        };
                        return t.search ? {...e, ...t.search} : e;
                    }
                    get fragment() {
                        return window.location.hash.slice(1);
                    }
                    initUrlManager() {
                        this.reflectStateInUrl &&
                            ((this.urlManager = (0, a.s)(this.engine, {initialState: {fragment: this.fragment}})),
                            (this.unsubscribeUrlManager = this.urlManager.subscribe(() => this.updateHash())),
                            window.addEventListener('hashchange', this.onHashChange));
                    }
                    initAriaLive() {
                        Array.from(this.host.children).some((t) => 'ATOMIC-ARIA-LIVE' === t.tagName) ||
                            this.host.prepend(document.createElement('atomic-aria-live'));
                    }
                    initRelevanceInspector() {
                        this.enableRelevanceInspector &&
                            this.host.addEventListener('dblclick', (t) => {
                                t.altKey && (this.relevanceInspectorIsOpen = !this.relevanceInspectorIsOpen);
                            });
                    }
                    initSearchStatus() {
                        ((this.searchStatus = (0, a.E)(this.engine)),
                            (this.unsubscribeSearchStatus = this.searchStatus.subscribe(() => {
                                let t =
                                    !this.searchStatus.state.hasResults &&
                                    this.searchStatus.state.firstSearchExecuted &&
                                    !this.searchStatus.state.hasError;
                                (this.host.classList.toggle('atomic-search-interface-no-results', t),
                                    this.host.classList.toggle(
                                        'atomic-search-interface-error',
                                        this.searchStatus.state.hasError,
                                    ),
                                    this.host.classList.toggle(
                                        'atomic-search-interface-search-executed',
                                        this.searchStatus.state.firstSearchExecuted,
                                    ),
                                    this.searchStatus.state.firstSearchExecuted &&
                                        this.store.hasLoadingFlag(m) &&
                                        this.store.unsetLoadingFlag(m));
                            })));
                    }
                    updateHash() {
                        let t = this.urlManager.state.fragment;
                        if (!this.searchStatus.state.firstSearchExecuted) {
                            (history.replaceState(null, document.title, `#${t}`),
                                this.bindings.engine.logger.info(`History replaceState #${t}`));
                            return;
                        }
                        (history.pushState(null, document.title, `#${t}`),
                            this.bindings.engine.logger.info(`History pushState #${t}`));
                    }
                    async internalInitialization(t) {
                        (await this.commonInterfaceHelper.onInitialization(t),
                            (this.pipeline = this.engine.state.pipeline),
                            (this.searchHub = this.engine.state.searchHub),
                            this.initSearchStatus(),
                            this.initUrlManager(),
                            (this.initialized = !0));
                    }
                    render() {
                        return [
                            this.engine &&
                                this.enableRelevanceInspector &&
                                (0, i.h)('atomic-relevance-inspector', {
                                    open: this.relevanceInspectorIsOpen,
                                    bindings: this.bindings,
                                }),
                            (0, i.h)('slot', null),
                        ];
                    }
                    static get assetsDirs() {
                        return ['lang'];
                    }
                    get host() {
                        return (0, i.g)(this);
                    }
                    static get watchers() {
                        return {
                            searchHub: ['updateSearchHub'],
                            pipeline: ['updatePipeline'],
                            analytics: ['toggleAnalytics'],
                            language: ['updateLanguage'],
                            iconAssetsPath: ['updateIconAssetsPath'],
                        };
                    }
                };
            (!(function (t, r, e, i) {
                var a,
                    o = arguments.length,
                    n = o < 3 ? r : null === i ? (i = Object.getOwnPropertyDescriptor(r, e)) : i;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    n = Reflect.decorate(t, r, e, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)
                        (a = t[s]) && (n = (o < 3 ? a(n) : o > 3 ? a(r, e, n) : a(r, e)) || n);
                o > 3 && n && Object.defineProperty(r, e, n);
            })([(0, s.A)()], h.prototype, 'fieldsToInclude', void 0),
                (h.style =
                    "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--atomic-font-family);font-feature-settings:normal;font-variation-settings:normal;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}:host{display:block;--tw-ring-inset:var(--tw-empty,  )}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);font-weight:var(--atomic-font-normal)}:host(.atomic-hidden){display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.\\!link{color:var(--atomic-primary)}.\\!link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link{color:var(--atomic-primary)}.link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.input-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background)}.input-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:hover{border-color:var(--atomic-primary-light)}.input-primary.focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.input-primary:focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-radio::before{--tw-content:attr(value);content:var(--tw-content)}.btn-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-primary);color:var(--atomic-on-primary)}.btn-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:hover{background-color:var(--atomic-primary-light)}.btn-primary.focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:disabled{cursor:not-allowed;background-color:var(--atomic-disabled)}.btn-outline-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-outline-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:hover{border-color:var(--atomic-primary-light);color:var(--atomic-primary-light)}.btn-outline-primary.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-neutral)}.btn-text-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-text-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:hover{background-color:var(--atomic-neutral-light)}.btn-text-primary.focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-primary:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-neutral{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:hover{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral.focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral:focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-transparent{color:var(--atomic-on-background)}.btn-text-transparent.focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:hover{color:var(--atomic-primary-light)}.btn-text-transparent.focus-visible{color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{color:var(--atomic-primary-light)}.btn-square-neutral{border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-square-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-square-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-square-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-pill{border-radius:var(--atomic-border-radius-xl)}.btn-page{display:grid;place-items:center;border-width:0px;font-size:var(--atomic-text-lg)}.btn-page:hover{border-width:1px}.btn-page.focus-visible{border-width:1px}.btn-page:focus-visible{border-width:1px}.btn-page.selected{border-width:2px;border-color:var(--atomic-primary);font-weight:var(--atomic-font-bold)}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-0.5rem}.-top-2{top:-0.5rem}.bottom-0{bottom:0px}.bottom-px{bottom:1px}.left-0{left:0px}.right-0{right:0px}.right-px{right:1px}.top-0{top:0px}.top-\\[50\\%\\]{top:50%}.top-full{top:100%}.top-px{top:1px}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.z-\\[9999\\]{z-index:9999}.col-span-2{grid-column:span 2 / span 2}.m-0{margin:0px}.m-2{margin:0.5rem}.-my-px{margin-top:-1px;margin-bottom:-1px}.mx-0{margin-left:0px;margin-right:0px}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem}.mx-1{margin-left:0.25rem;margin-right:0.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mr-px{margin-right:-1px}.mb-0{margin-bottom:0px}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:0.25rem}.ml-2{margin-left:0.5rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.mr-0{margin-right:0px}.mr-0\\.5{margin-right:0.125rem}.mr-1{margin-right:0.25rem}.mr-1\\.5{margin-right:0.375rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-6{margin-right:1.5rem}.mt-0{margin-top:0px}.mt-1{margin-top:0.25rem}.mt-1\\.5{margin-top:0.375rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:0.5rem}.mt-2\\.5{margin-top:0.625rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-px{margin-top:1px}.box-border{box-sizing:border-box}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-1{height:0.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-2{height:0.5rem}.h-2\\.5{height:0.625rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-\\[2\\.6rem\\]{height:2.6rem}.h-auto{height:auto}.h-full{height:100%}.min-h-\\[2\\.5rem\\]{min-height:2.5rem}.min-h-\\[40px\\]{min-height:40px}.w-0{width:0px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-2{width:0.5rem}.w-2\\.5{width:0.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:0.75rem}.w-3\\.5{width:0.875rem}.w-3\\/5{width:60%}.w-32{width:8rem}.w-4{width:1rem}.w-44{width:11rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[2\\.6rem\\]{width:2.6rem}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[2\\.5rem\\]{min-width:2.5rem}.min-w-\\[6rem\\]{min-width:6rem}.max-w-\\[15rem\\]{max-width:15rem}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-8{flex-basis:2rem}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes scaleUp{0%{transform:scale(0.7) translateY(150vh);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}.animate-scaleUpModal{animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards}@keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}.animate-slideDownModal{animation:slideDown .5s linear forwards}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-\\[min-content_auto\\]{grid-template-columns:min-content auto}.grid-cols-min-1fr{grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-items-center{place-items:center}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-0\\.5{gap:0.125rem}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem}.gap-x-1\\.5{-moz-column-gap:0.375rem;column-gap:0.375rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-0{row-gap:0px}.gap-y-0\\.5{row-gap:0.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.375rem * var(--tw-space-x-reverse));margin-left:calc(0.375rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-neutral>:not([hidden])~:not([hidden]){border-color:var(--atomic-neutral)}.self-start{align-self:flex-start}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-scroll{overflow-x:scroll}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:var(--atomic-border-radius)}.rounded-\\[100\\%\\]{border-radius:100%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0px}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-r-md{border-top-right-radius:var(--atomic-border-radius-md);border-bottom-right-radius:var(--atomic-border-radius-md)}.border{border-width:1px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-neutral{border-color:var(--atomic-neutral)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.border-primary{border-color:var(--atomic-primary)}.bg-\\[\\#F1F2FF\\]{--tw-bg-opacity:1;background-color:rgb(241 242 255 / var(--tw-bg-opacity))}.bg-background{background-color:var(--atomic-background)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-primary{background-color:var(--atomic-primary)}.bg-transparent{background-color:transparent}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-background-60{--tw-gradient-from:var(--atomic-background) 60% var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.fill-current{fill:currentColor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-\\[0\\.625rem\\]{padding-top:0.625rem;padding-bottom:0.625rem}.pb-1{padding-bottom:0.25rem}.pb-3{padding-bottom:0.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-0{padding-left:0px}.pl-1{padding-left:0.25rem}.pl-10{padding-left:2.5rem}.pl-3{padding-left:0.75rem}.pl-9{padding-left:2.25rem}.pr-2{padding-right:0.5rem}.pr-24{padding-right:6rem}.pr-6{padding-right:1.5rem}.pt-0{padding-top:0px}.pt-0\\.5{padding-top:0.125rem}.text-left{text-align:left}.text-center{text-align:center}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.text-2xl{font-size:var(--atomic-text-2xl)}.text-base{font-size:var(--atomic-text-base)}.text-lg{font-size:var(--atomic-text-lg)}.text-sm{font-size:var(--atomic-text-sm)}.text-xl{font-size:var(--atomic-text-xl)}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:var(--atomic-font-bold)}.font-medium{font-weight:500}.font-normal{font-weight:var(--atomic-font-normal)}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-10{line-height:2.5rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-8{line-height:2rem}.text-\\[\\#54698D\\]{--tw-text-opacity:1;color:rgb(84 105 141 / var(--tw-text-opacity))}.text-error{color:var(--atomic-error)}.text-inherit{color:inherit}.text-neutral{color:var(--atomic-neutral)}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-on-background{color:var(--atomic-on-background)}.text-on-primary{color:var(--atomic-on-primary)}.text-primary{color:var(--atomic-primary)}.text-success{color:var(--atomic-success)}.text-transparent{color:transparent}.placeholder-neutral-dark::-moz-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark::placeholder{color:var(--atomic-neutral-dark)}.opacity-0{opacity:0}.opacity-50{opacity:0.5}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--atomic-primary);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-neutral{outline-color:var(--atomic-neutral)}.outline-primary{outline-color:var(--atomic-primary)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.ring-ring-primary{--tw-ring-color:var(--atomic-ring-primary)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-visi-opacity{transition-property:visibility, opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-outline.focus-visible{outline:2px solid transparent;outline-offset:2px}.no-outline:focus-visible{outline:2px solid transparent;outline-offset:2px}.accessibility-only{position:absolute;display:block;height:0;overflow:hidden;margin:0}.text-inherit{font-size:inherit}.cursor-inherit{cursor:inherit}.shadow-lg{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}.ripple{position:absolute;pointer-events:none;transform:scale(0);border-radius:50%;animation:ripple var(--animation-duration) linear}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@keyframes ripple{to{transform:scale(4);opacity:0}}:host{height:inherit;width:inherit}:host>slot{height:inherit}.focus-within\\:border-disabled:focus-within{border-color:var(--atomic-disabled)}.focus-within\\:border-primary:focus-within{border-color:var(--atomic-primary)}.focus-within\\:ring:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-neutral:focus-within{--tw-ring-color:var(--atomic-neutral)}.focus-within\\:ring-ring-primary:focus-within{--tw-ring-color:var(--atomic-ring-primary)}.hover\\:border-primary-light:hover{border-color:var(--atomic-primary-light)}.hover\\:bg-neutral-light:hover{background-color:var(--atomic-neutral-light)}.hover\\:bg-primary-light:hover{background-color:var(--atomic-primary-light)}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.focus-visible\\:border-primary-light.focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:border-primary-light:focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:bg-neutral-light.focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-neutral-light:focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-primary-light.focus-visible{background-color:var(--atomic-primary-light)}.focus-visible\\:bg-primary-light:focus-visible{background-color:var(--atomic-primary-light)}.group:hover .group-hover\\:text-primary{color:var(--atomic-primary)}.group:hover .group-hover\\:text-primary-light{color:var(--atomic-primary-light)}.group:focus .group-focus\\:text-primary{color:var(--atomic-primary)}.group:focus .group-focus\\:text-primary-light{color:var(--atomic-primary-light)}.group.focus-visible .group-focus-visible\\:text-primary{color:var(--atomic-primary)}.group:focus-visible .group-focus-visible\\:text-primary{color:var(--atomic-primary)}"));
        },
        9807: function (t, r, e) {
            var i, a;
            (e.d(r, {
                S: function () {
                    return i;
                },
                a: function () {
                    return o;
                },
            }),
                ((a = i || (i = {})).RECENT_QUERIES = 'coveo-recent-queries'),
                (a.STANDALONE_SEARCH_BOX_DATA = 'coveo-standalone-search-box-data'));
            class o {
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
                getParsedJSON(t, r) {
                    let e = this.getItem(t);
                    return e
                        ? this.tryJSONOrWarn(
                              t,
                              () => JSON.parse(e),
                              () => r,
                          )
                        : r;
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
                setItem(t, r) {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.setItem(t, r),
                        () => {},
                    );
                }
                setJSON(t, r) {
                    let e = this.tryJSONOrWarn(
                        t,
                        () => JSON.stringify(r),
                        () => JSON.stringify({}),
                    );
                    return this.setItem(t, e);
                }
                tryAccessLocalStorageOrWarn(t, r) {
                    return this.tryOrElse(
                        t,
                        () => (
                            console.warn(
                                'Error while trying to read or modify local storage. This can be caused by browser specific settings.',
                            ),
                            r()
                        ),
                    );
                }
                tryJSONOrWarn(t, r, e) {
                    return this.tryOrElse(
                        r,
                        () => (
                            console.warn(`Error while trying to do JSON manipulation with local storage entry. ${t}`),
                            e()
                        ),
                    );
                }
                tryOrElse(t, r) {
                    try {
                        return t();
                    } catch (t) {
                        return (console.warn(t), r());
                    }
                }
            }
        },
        35295: function (t, r, e) {
            e.d(r, {
                D: function () {
                    return a;
                },
                u: function () {
                    return s;
                },
            });
            var i = e(66038);
            let a = '1024px';
            function o(t, r) {
                return t.replace(RegExp(`\\(min-width: ${a}\\)`, 'g'), `(min-width: ${r})`);
            }
            let n = ['atomic-search-layout', 'atomic-insight-layout'];
            function s(t) {
                let r = (0, i.c)(t, n.join(', '));
                (null == r ? void 0 : r.mobileBreakpoint) &&
                    r.mobileBreakpoint !== a &&
                    (!(function (t, r) {
                        var e, i;
                        let a = null === (e = t.shadowRoot) || void 0 === e ? void 0 : e.adoptedStyleSheets;
                        if (!a || !a.length) return;
                        let n = a[0],
                            s = Object.values(n.cssRules)
                                .map((t) => t.cssText)
                                .join('');
                        null === (i = n.replaceSync) || void 0 === i || i.call(n, o(s, r));
                    })(t, r.mobileBreakpoint),
                    (function (t, r) {
                        var e;
                        let i = null === (e = t.shadowRoot) || void 0 === e ? void 0 : e.querySelector('style');
                        i && (i.textContent = o(i.textContent, r));
                    })(t, r.mobileBreakpoint));
            }
        },
        49416: function (t, r, e) {
            e.d(r, {
                b: function () {
                    return o;
                },
                m: function () {
                    return a;
                },
            });
            var i = e(98939);
            function a(t) {
                return `only screen and (min-width: ${t})`;
            }
            function o(t, r) {
                let e = t.id,
                    o = `atomic-search-layout#${e}`,
                    n =
                        'atomic-search-interface:not(.atomic-search-interface-no-results, .atomic-search-interface-error)',
                    s = `@media ${a(r)}`,
                    l = `${o} { display: grid }`,
                    c = `${s} {
    ${o} ${(0, i.s)('search')} {
      justify-self: start;
      width: 80%;
    }
  }`;
                return [
                    l,
                    c,
                    (() => {
                        let r = (0, i.f)(t, 'facets'),
                            e = (0, i.f)(t, 'main');
                        if (!r || !e) return '';
                        let a = r.minWidth || '17rem',
                            l = r.maxWidth || '22rem',
                            c = e.minWidth || '50%',
                            d = e.maxWidth || '70rem';
                        return `${s} {
      ${o} {
        grid-template-areas:
        '. .                     atomic-section-search .'
        '. atomic-section-main   atomic-section-main   .';
        grid-template-columns:
          1fr minmax(${a}, ${l}) minmax(${c}, ${d}) 1fr;
        column-gap: var(--atomic-layout-spacing-x);
      }

      ${n} ${o} {
        grid-template-areas:
          '. .                     atomic-section-search .'
          '. atomic-section-facets atomic-section-main   .'
          '. atomic-section-facets .                     .';
      }

      ${n} ${o} ${(0, i.s)('facets')} {
        display: block;
      }
    }`;
                    })(),
                    (() => {
                        let r = (0, i.f)(t, 'status');
                        if (!r) return '';
                        let e = r.querySelector('atomic-refine-toggle');
                        if (!e) return '';
                        let a = `${o} ${(0, i.s)('status')}`;
                        return `${a} atomic-sort-dropdown {
      display: none;
    }

    ${s} {
     ${a} atomic-sort-dropdown {
       display: block;
      }

      ${a} atomic-refine-toggle {
        display: none;
       }
    }`;
                    })(),
                    `${s} {
      ${o} ${(0, i.s)('horizontal-facets')} > atomic-popover:not(.atomic-hidden) {
        display: block;
      }
    }`,
                ]
                    .filter((t) => '' !== t)
                    .join('\n\n');
            }
        },
        98939: function (t, r, e) {
            function i(t, r) {
                return t.querySelector(a(r));
            }
            function a(t) {
                return `atomic-layout-section[section="${t}"]`;
            }
            e.d(r, {
                f: function () {
                    return i;
                },
                s: function () {
                    return a;
                },
            });
        },
    },
]);
