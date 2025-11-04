(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        15249, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        84577: function (e, t, i) {
            'use strict';
            (i.r(t),
                i.d(t, {
                    atomic_insight_result_list: function () {
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
            var d = function (e, t, i, s) {
                var r,
                    l = arguments.length,
                    o = l < 3 ? t : null === s ? (s = Object.getOwnPropertyDescriptor(t, i)) : s;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    o = Reflect.decorate(e, t, i, s);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (r = e[a]) && (o = (l < 3 ? r(o) : l > 3 ? r(t, i, o) : r(t, i)) || o);
                return (l > 3 && o && Object.defineProperty(t, i, o), o);
            };
            let u = class {
                constructor(e) {
                    ((0, s.r)(this, e),
                        (this.loadingFlag = (0, a.r)('firstInsightResultLoaded-')),
                        (this.display = 'list'),
                        (this.templateHasError = !1),
                        (this.resultTemplateRegistered = !1),
                        (this.density = 'normal'),
                        (this.imageSize = 'icon'));
                }
                async setRenderFunction(e) {
                    this.resultRenderingFunction = e;
                }
                initialize() {
                    ((this.resultList = (0, r.O)(this.bindings.engine, {
                        options: {fieldsToInclude: this.bindings.store.state.fieldsToInclude || void 0},
                    })),
                        (this.resultsPerPage = (0, r.B)(this.bindings.engine)));
                    let e = new p.R({
                        includeDefaultTemplate: !0,
                        templateElements: Array.from(this.host.querySelectorAll('atomic-insight-result-template')),
                        getResultTemplateRegistered: () => this.resultTemplateRegistered,
                        getTemplateHasError: () => this.templateHasError,
                        setResultTemplateRegistered: (e) => {
                            this.resultTemplateRegistered = e;
                        },
                        setTemplateHasError: (e) => {
                            this.templateHasError = e;
                        },
                        bindings: this.bindings,
                    });
                    this.resultListCommon = new n.R({
                        resultTemplateProvider: e,
                        getNumberOfPlaceholders: () => this.resultsPerPageState.numberOfResults,
                        host: this.host,
                        bindings: this.bindings,
                        getDensity: () => this.density,
                        getResultDisplay: () => this.display,
                        getLayoutDisplay: () => this.display,
                        getImageSize: () => this.imageSize,
                        nextNewResultTarget: this.nextNewResultTarget,
                        loadingFlag: this.loadingFlag,
                        getResultListState: () => this.resultListState,
                        getResultRenderingFunction: () => this.resultRenderingFunction,
                        renderResult: (e) => (0, s.h)('atomic-insight-result', {...e}),
                        getInteractiveResult: (e) => (0, r.Q)(this.bindings.engine, {options: {result: e}}),
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
                d([(0, o.B)('resultsPerPage')], u.prototype, 'resultsPerPageState', void 0),
                d([(0, o.B)('resultList')], u.prototype, 'resultListState', void 0),
                d([(0, l.F)()], u.prototype, 'nextNewResultTarget', void 0),
                (u.style =
                    ".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}.list-root.display-list .result-component[part~='outline']::before{margin-top:0px;margin-bottom:0px;margin-left:1.5rem;margin-right:1.5rem}.list-root.placeholder{padding:0.5rem 1.5rem}"));
        },
        1212: function (e, t, i) {
            'use strict';
            i.d(t, {
                R: function () {
                    return l;
                },
            });
            var s = i(64977),
                r = i(95640);
            class l {
                constructor(e) {
                    ((this.props = e), this.registerResultTemplates());
                }
                makeDefaultTemplate() {
                    let e = document.createDocumentFragment(),
                        t = document.createElement('atomic-result-link');
                    return (e.appendChild(t), {content: e, conditions: []});
                }
                async registerResultTemplates() {
                    this.resultTemplatesManager = (0, s.O)(this.props.bindings.engine);
                    let e = await Promise.all(
                            this.props.templateElements.map(async (e) => {
                                let t = await e.getTemplate();
                                return (t || this.props.setTemplateHasError(!0), t);
                            }),
                        ),
                        t = (!e.length && this.props.includeDefaultTemplate ? [this.makeDefaultTemplate()] : []).concat(
                            e.filter((e) => e),
                        );
                    (this.resultTemplatesManager.registerTemplates(...t), this.props.setResultTemplateRegistered(!0));
                }
                getTemplateContent(e) {
                    return this.resultTemplatesManager.selectTemplate((0, r.e)(e));
                }
                get templatesRegistered() {
                    return this.props.getResultTemplateRegistered();
                }
                get hasError() {
                    return this.props.getTemplateHasError();
                }
            }
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
