(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        90959, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        43171: function (t, e, i) {
            'use strict';
            (i.r(e),
                i.d(e, {
                    atomic_folded_result_list: function () {
                        return m;
                    },
                }));
            var l = i(5991),
                r = i(64977),
                s = i(80421),
                o = i(8807),
                a = i(66038),
                n = i(60562),
                p = i(1212);
            (i(87856), i(35295), i(70835), i(2456), i(27964), i(31257));
            var d = function (t, e, i, l) {
                var r,
                    s = arguments.length,
                    o = s < 3 ? e : null === l ? (l = Object.getOwnPropertyDescriptor(e, i)) : l;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    o = Reflect.decorate(t, e, i, l);
                else
                    for (var a = t.length - 1; a >= 0; a--)
                        (r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, i, o) : r(e, i)) || o);
                return (s > 3 && o && Object.defineProperty(e, i, o), o);
            };
            let m = class {
                constructor(t) {
                    ((0, l.r)(this, t),
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
                            (this.resultsPerPage = (0, r.f)(this.bindings.engine)));
                    } catch (t) {
                        this.error = t;
                    }
                    let t = new p.R({
                        includeDefaultTemplate: !0,
                        templateElements: Array.from(this.host.querySelectorAll('atomic-result-template')),
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
                        renderResult: (t) => (0, l.h)('atomic-result', {...t}),
                        getInteractiveResult: (t) => (0, r.u)(this.bindings.engine, {options: {result: t}}),
                    });
                }
                initFolding(t = {options: {}}) {
                    return (0, r.j)(this.bindings.engine, {
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
                    return (0, l.g)(this);
                }
            };
            (d([(0, o.I)()], m.prototype, 'bindings', void 0),
                d([(0, o.B)('foldedResultList')], m.prototype, 'foldedResultListState', void 0),
                d([(0, o.B)('resultsPerPage')], m.prototype, 'resultsPerPageState', void 0),
                d([(0, s.F)()], m.prototype, 'nextNewResultTarget', void 0),
                (m.style =
                    ".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}@media (min-width: 1024px){.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list.image-large [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list.image-large [part~='outline']:first-of-type::before{display:none}.list-root.display-list.image-large atomic-result-placeholder::before{background-color:transparent}.list-root.display-list.image-large{display:grid;justify-content:space-evenly;grid-template-columns:minmax(auto, 35rem)}.list-root.display-list.image-small,.list-root.display-list.image-icon,.list-root.display-list.image-none{grid-row-gap:1rem}.list-root.display-list.image-small [part~='outline'],.list-root.display-list.image-icon [part~='outline'],.list-root.display-list.image-none [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-list.image-small atomic-result-placeholder,.list-root.display-list.image-icon atomic-result-placeholder,.list-root.display-list.image-none atomic-result-placeholder{border-color:transparent}}"));
        },
        1212: function (t, e, i) {
            'use strict';
            i.d(e, {
                R: function () {
                    return s;
                },
            });
            var l = i(64977),
                r = i(95640);
            class s {
                constructor(t) {
                    ((this.props = t), this.registerResultTemplates());
                }
                makeDefaultTemplate() {
                    let t = document.createDocumentFragment(),
                        e = document.createElement('atomic-result-link');
                    return (t.appendChild(e), {content: t, conditions: []});
                }
                async registerResultTemplates() {
                    this.resultTemplatesManager = (0, l.O)(this.props.bindings.engine);
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
