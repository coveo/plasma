(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        91490, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        13801: function (t, e, i) {
            'use strict';
            (i.r(e),
                i.d(e, {
                    atomic_insight_folded_result_list: function () {
                        return u;
                    },
                }));
            var s = i(5991),
                r = i(92370),
                l = i(80421),
                o = i(8807),
                a = i(66038),
                n = i(60562),
                p = i(1212);
            (i(87856), i(35295), i(70835), i(2456), i(27964), i(31257), i(64977));
            var d = function (t, e, i, s) {
                var r,
                    l = arguments.length,
                    o = l < 3 ? e : null === s ? (s = Object.getOwnPropertyDescriptor(e, i)) : s;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    o = Reflect.decorate(t, e, i, s);
                else
                    for (var a = t.length - 1; a >= 0; a--)
                        (r = t[a]) && (o = (l < 3 ? r(o) : l > 3 ? r(e, i, o) : r(e, i)) || o);
                return (l > 3 && o && Object.defineProperty(e, i, o), o);
            };
            let u = class {
                constructor(t) {
                    ((0, s.r)(this, t),
                        (this.loadingFlag = (0, a.r)('firstResultLoaded-')),
                        (this.display = 'list'),
                        (this.resultTemplateRegistered = !1),
                        (this.templateHasError = !1),
                        (this.density = 'normal'),
                        (this.imageSize = 'icon'));
                }
                async setRenderFunction(t) {
                    this.resultRenderingFunction = t;
                }
                resolveFoldedResultList(t) {
                    (t.preventDefault(), t.stopPropagation(), t.detail(this.foldedResultList));
                }
                loadCollection(t) {
                    (t.preventDefault(), t.stopPropagation(), this.foldedResultList.loadCollection(t.detail));
                }
                initialize() {
                    try {
                        ((this.foldedResultList = this.initFolding()),
                            (this.resultsPerPage = (0, r.B)(this.bindings.engine)));
                    } catch (t) {
                        this.error = t;
                    }
                    let t = new p.R({
                        includeDefaultTemplate: !0,
                        templateElements: Array.from(this.host.querySelectorAll('atomic-insight-result-template')),
                        getResultTemplateRegistered: () => this.resultTemplateRegistered,
                        getTemplateHasError: () => this.templateHasError,
                        setResultTemplateRegistered: (t) => {
                            this.resultTemplateRegistered = t;
                        },
                        setTemplateHasError: (t) => {
                            this.templateHasError = t;
                        },
                        bindings: this.bindings,
                    });
                    this.resultListCommon = new n.R({
                        resultTemplateProvider: t,
                        getNumberOfPlaceholders: () => this.resultsPerPageState.numberOfResults,
                        host: this.host,
                        bindings: this.bindings,
                        getDensity: () => this.density,
                        getResultDisplay: () => this.display,
                        getLayoutDisplay: () => this.display,
                        getImageSize: () => this.imageSize,
                        nextNewResultTarget: this.nextNewResultTarget,
                        loadingFlag: this.loadingFlag,
                        getResultListState: () => this.foldedResultListState,
                        getResultRenderingFunction: () => this.resultRenderingFunction,
                        renderResult: (t) => (0, s.h)('atomic-insight-result', {...t}),
                        getInteractiveResult: (t) => (0, r.Q)(this.bindings.engine, {options: {result: t}}),
                    });
                }
                initFolding(t = {options: {}}) {
                    return (0, r.M)(this.bindings.engine, {
                        options: {
                            ...t.options,
                            folding: {
                                collectionField: this.collectionField,
                                parentField: this.parentField,
                                childField: this.childField,
                            },
                        },
                    });
                }
                render() {
                    return this.resultListCommon.render();
                }
                get host() {
                    return (0, s.g)(this);
                }
            };
            (d([(0, o.I)()], u.prototype, 'bindings', void 0),
                d([(0, o.B)('foldedResultList')], u.prototype, 'foldedResultListState', void 0),
                d([(0, o.B)('resultsPerPage')], u.prototype, 'resultsPerPageState', void 0),
                d([(0, l.F)()], u.prototype, 'nextNewResultTarget', void 0),
                (u.style =
                    ".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}.list-root.display-list .result-component[part~='outline']::before{margin-top:0px;margin-bottom:0px;margin-left:1.5rem;margin-right:1.5rem}.list-root.placeholder{padding:0.5rem 1.5rem}"));
        },
        1212: function (t, e, i) {
            'use strict';
            i.d(e, {
                R: function () {
                    return l;
                },
            });
            var s = i(64977),
                r = i(95640);
            class l {
                constructor(t) {
                    ((this.props = t), this.registerResultTemplates());
                }
                makeDefaultTemplate() {
                    let t = document.createDocumentFragment(),
                        e = document.createElement('atomic-result-link');
                    return (t.appendChild(e), {content: t, conditions: []});
                }
                async registerResultTemplates() {
                    this.resultTemplatesManager = (0, s.O)(this.props.bindings.engine);
                    let t = await Promise.all(
                            this.props.templateElements.map(async (t) => {
                                let e = await t.getTemplate();
                                return (e || this.props.setTemplateHasError(!0), e);
                            }),
                        ),
                        e = (!t.length && this.props.includeDefaultTemplate ? [this.makeDefaultTemplate()] : []).concat(
                            t.filter((t) => t),
                        );
                    (this.resultTemplatesManager.registerTemplates(...e), this.props.setResultTemplateRegistered(!0));
                }
                getTemplateContent(t) {
                    return this.resultTemplatesManager.selectTemplate((0, r.e)(t));
                }
                get templatesRegistered() {
                    return this.props.getResultTemplateRegistered();
                }
                get hasError() {
                    return this.props.getTemplateHasError();
                }
            }
        },
        22029: function (t) {
            function e(t) {
                var e = Error("Cannot find module '" + t + "'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
            }
            ((e.keys = function () {
                return [];
            }),
                (e.resolve = e),
                (e.id = 22029),
                (t.exports = e));
        },
    },
]);
