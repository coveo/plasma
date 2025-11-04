(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        29362, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        15141: function (e, t, i) {
            'use strict';
            (i.r(t),
                i.d(t, {
                    atomic_recs_interface: function () {
                        return l;
                    },
                }));
            var n = i(5991),
                s = i(11810),
                a = i(79116),
                o = i(53049),
                r = i(23318);
            (i(87856), i(30839), i(66038), i(64977));
            let c = 'firstRecommendationExecuted',
                l = class {
                    constructor(e) {
                        ((0, n.r)(this, e),
                            (this.store = (function () {
                                let e = (0, r.c)({
                                    loadingFlags: [],
                                    facets: {},
                                    numericFacets: {},
                                    dateFacets: {},
                                    categoryFacets: {},
                                    iconAssetsPath: '',
                                    facetElements: [],
                                    fieldsToInclude: [],
                                });
                                return {...e, getUniqueIDFromEngine: (e) => e.state.recommendation.searchUid};
                            })()),
                            (this.initialized = !1),
                            (this.analytics = !0),
                            (this.i18n = a.i.createInstance()),
                            (this.language = 'en'),
                            (this.fieldsToInclude = '[]'),
                            (this.languageAssetsPath = './lang'),
                            (this.iconAssetsPath = './assets'),
                            (this.commonInterfaceHelper = new a.C(this, 'CoveoAtomicRecs')));
                    }
                    get bindings() {
                        return {engine: this.engine, i18n: this.i18n, store: this.store, interfaceElement: this.host};
                    }
                    connectedCallback() {
                        this.store.setLoadingFlag(c);
                    }
                    initialize(e) {
                        return this.internalInitialization(() => this.initEngine(e));
                    }
                    initializeWithRecommendationEngine(e) {
                        return (
                            this.pipeline &&
                                this.pipeline !== e.state.pipeline &&
                                console.warn((0, a.m)('recommendation', 'query pipeline')),
                            this.searchHub &&
                                this.searchHub !== e.state.searchHub &&
                                console.warn((0, a.m)('recommendation', 'search hub')),
                            this.internalInitialization(() => (this.engine = e))
                        );
                    }
                    async getRecommendations() {
                        if (this.commonInterfaceHelper.engineIsCreated(this.engine)) {
                            if (!this.initialized) {
                                console.error(
                                    'You have to wait until the "initialize" promise is fulfilled before executing a search.',
                                    this.host,
                                );
                                return;
                            }
                            this.engine.dispatch((0, s.R)(this.engine).getRecommendations());
                        }
                    }
                    async getOrganizationEndpoints(e, t = 'prod') {
                        return (0, s.i)(e, t);
                    }
                    updateIconAssetsPath() {
                        this.store.set('iconAssetsPath', this.iconAssetsPath);
                    }
                    handleInitialization(e) {
                        this.commonInterfaceHelper.onComponentInitializing(e);
                    }
                    updateLanguage() {
                        if (!this.commonInterfaceHelper.engineIsCreated(this.engine)) return;
                        let {updateSearchConfiguration: e} = (0, s.D)(this.engine);
                        (this.engine.dispatch(e({locale: this.language})),
                            this.commonInterfaceHelper.onLanguageChange());
                    }
                    toggleAnalytics() {
                        this.commonInterfaceHelper.engineIsCreated(this.engine) &&
                            this.commonInterfaceHelper.onAnalyticsChange();
                    }
                    registerFieldsToInclude() {
                        let e = s.L.concat([...this.fieldsToInclude].filter((e) => !!e));
                        this.engine.dispatch((0, s.r)(this.engine).registerFieldsToInclude(e));
                    }
                    async internalInitialization(e) {
                        (await this.commonInterfaceHelper.onInitialization(e),
                            (this.pipeline = this.engine.state.pipeline),
                            (this.searchHub = this.engine.state.searchHub),
                            this.store.unsetLoadingFlag(c),
                            (this.initialized = !0));
                    }
                    initEngine(e) {
                        var t;
                        let i = (function (e, t) {
                            let i = (t, i) => {
                                    let n;
                                    return ((n = (0, a.a)(t, i, e)), (0, a.b)(n));
                                },
                                n = {analyticsClientMiddleware: i, enabled: t, ...(0, a.c)()};
                            return e.analytics ? {...n, ...e.analytics, analyticsClientMiddleware: i} : n;
                        })(e, this.analytics);
                        try {
                            this.engine = (0, s.T)({
                                configuration: {
                                    pipeline: this.pipeline,
                                    searchHub: null !== (t = this.searchHub) && void 0 !== t ? t : 'default',
                                    locale: this.language,
                                    timezone: this.timezone,
                                    ...e,
                                    analytics: i,
                                },
                                loggerOptions: {level: this.logLevel},
                            });
                        } catch (e) {
                            throw ((this.error = e), e);
                        }
                    }
                    render() {
                        return this.engine && (0, n.h)('slot', null);
                    }
                    get host() {
                        return (0, n.g)(this);
                    }
                    static get watchers() {
                        return {
                            iconAssetsPath: ['updateIconAssetsPath'],
                            language: ['updateLanguage'],
                            analytics: ['toggleAnalytics'],
                        };
                    }
                };
            !(function (e, t, i, n) {
                var s,
                    a = arguments.length,
                    o = a < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    o = Reflect.decorate(e, t, i, n);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (s = e[r]) && (o = (a < 3 ? s(o) : a > 3 ? s(t, i, o) : s(t, i)) || o);
                a > 3 && o && Object.defineProperty(t, i, o);
            })([(0, o.A)()], l.prototype, 'fieldsToInclude', void 0);
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
