(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        28888, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        49568: function (t, e, i) {
            'use strict';
            (i.r(e),
                i.d(e, {
                    atomic_result_list: function () {
                        return m;
                    },
                }));
            var r = i(5991),
                l = i(64977),
                a = i(80421),
                o = i(8807),
                s = i(66038),
                n = i(60562),
                d = i(1212);
            (i(87856), i(35295), i(70835), i(2456), i(27964), i(31257));
            var p = function (t, e, i, r) {
                var l,
                    a = arguments.length,
                    o = a < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, i)) : r;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    o = Reflect.decorate(t, e, i, r);
                else
                    for (var s = t.length - 1; s >= 0; s--)
                        (l = t[s]) && (o = (a < 3 ? l(o) : a > 3 ? l(e, i, o) : l(e, i)) || o);
                return (a > 3 && o && Object.defineProperty(e, i, o), o);
            };
            let m = class {
                constructor(t) {
                    ((0, r.r)(this, t),
                        (this.loadingFlag = (0, s.r)('firstResultLoaded-')),
                        (this.resultTemplateRegistered = !1),
                        (this.templateHasError = !1),
                        (this.display = 'list'),
                        (this.density = 'normal'),
                        (this.gridCellLinkTarget = '_self'),
                        (this.imageSize = 'icon'));
                }
                async setRenderFunction(t) {
                    this.resultRenderingFunction = t;
                }
                initialize() {
                    (this.host.innerHTML.includes('<atomic-result-children') &&
                        console.warn(
                            'Folded results will not render any children for the "atomic-result-list". Please use "atomic-folded-result-list" instead.',
                        ),
                        (this.resultList = (0, l.i)(this.bindings.engine)),
                        (this.resultsPerPage = (0, l.f)(this.bindings.engine)));
                    let t = new d.R({
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
                        gridCellLinkTarget: this.gridCellLinkTarget,
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
                        renderResult: (t) => (0, r.h)('atomic-result', {...t}),
                        getInteractiveResult: (t) => (0, l.u)(this.bindings.engine, {options: {result: t}}),
                    });
                }
                render() {
                    return this.resultListCommon.render();
                }
                get host() {
                    return (0, r.g)(this);
                }
            };
            (p([(0, o.I)()], m.prototype, 'bindings', void 0),
                p([(0, o.B)('resultList')], m.prototype, 'resultListState', void 0),
                p([(0, o.B)('resultsPerPage')], m.prototype, 'resultsPerPageState', void 0),
                p([(0, a.F)()], m.prototype, 'nextNewResultTarget', void 0),
                (m.style =
                    ".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}.list-wrapper.display-table{display:grid;overflow-x:auto}.list-root.display-table{min-width:100%;border-spacing:0;border-collapse:separate}.list-root.display-table th,.list-root.display-table td{font-family:var(--atomic-font-family);border:1px solid var(--atomic-neutral);--font-size:var(--atomic-text-sm);font-size:var(--font-size);line-height:1rem;white-space:nowrap}.list-root.display-table th:not(:first-child),.list-root.display-table td:not(:first-child){border-left:none}.list-root.display-table th:first-child,.list-root.display-table td:first-child{min-width:19rem}.list-root.display-table th{background-color:var(--atomic-neutral-light);border-bottom:none;font-weight:bold;color:black;padding:1rem var(--padding);text-align:left}.list-root.display-table th:first-child{border-top-left-radius:var(--atomic-border-radius-xl)}.list-root.display-table th:last-child{border-top-right-radius:var(--atomic-border-radius-xl)}.list-root.display-table td{color:var(--atomic-neutral-dark);border-top:none;vertical-align:top;padding:var(--padding)}.list-root.display-table.density-comfortable{--padding:2rem}.list-root.display-table.density-normal{--padding:1.5rem}.list-root.display-table.density-compact{--padding:1rem}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}@media (min-width: 1024px){.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list.image-large [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list.image-large [part~='outline']:first-of-type::before{display:none}.list-root.display-list.image-large atomic-result-placeholder::before{background-color:transparent}.list-root.display-list.image-large{display:grid;justify-content:space-evenly;grid-template-columns:minmax(auto, 35rem)}.list-root.display-list.image-small,.list-root.display-list.image-icon,.list-root.display-list.image-none{grid-row-gap:1rem}.list-root.display-list.image-small [part~='outline'],.list-root.display-list.image-icon [part~='outline'],.list-root.display-list.image-none [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-list.image-small atomic-result-placeholder,.list-root.display-list.image-icon atomic-result-placeholder,.list-root.display-list.image-none atomic-result-placeholder{border-color:transparent}}[part~='outline'][part~='result-list-grid-clickable-container']{position:relative}@media (min-width: 1024px){[part~='outline'][part~='result-list-grid-clickable-container']{border:1px solid transparent;padding:1rem;border-radius:1rem;transition:all 0.12s ease-out}[part~='outline'][part~='result-list-grid-clickable-container']:hover{border:1px solid var(--atomic-neutral);box-shadow:0px 10px 25px var(--atomic-neutral);cursor:pointer}}[part='result-list-grid-clickable'].focus-visible{border:2px solid var(--atomic-primary);border-radius:2px;color:var(--atomic-primary);cursor:pointer;display:inline-block;text-decoration:underline;text-align:center;position:absolute}[part='result-list-grid-clickable']:focus-visible{border:2px solid var(--atomic-primary);border-radius:2px;color:var(--atomic-primary);cursor:pointer;display:inline-block;text-decoration:underline;text-align:center;position:absolute}[part='result-list-grid-clickable']:not(:focus){clip:rect(1px, 1px, 1px, 1px);overflow:hidden;position:absolute;padding:0}.list-wrapper{word-break:break-word}.list-root.display-grid{display:grid;justify-content:space-evenly}.list-root.display-grid .result-component{height:100%;box-sizing:border-box}@media (min-width: 1024px){.list-root.display-grid{grid-template-columns:repeat(auto-fit, minmax(17rem, 1fr))}.list-root.display-grid.density-comfortable{grid-row-gap:4rem;grid-column-gap:1.5rem}.list-root.display-grid.density-normal,.list-root.display-grid.density-compact{grid-row-gap:3rem;grid-column-gap:1.5rem}.list-root.display-grid.image-large{grid-template-columns:repeat(auto-fill, minmax(19rem, 1fr))}@media not all and (min-width: 1024px){.list-root.display-grid.image-small{grid-template-columns:repeat(3, 1fr)}}@media (min-width: 1024px){.list-root.display-grid.image-small{grid-template-columns:repeat(4, 1fr)}}}@media not all and (min-width: 1024px){@media not all and (min-width: 768px){.list-root.display-grid.image-large.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-grid.image-large.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-grid.image-large.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-grid.image-large.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-grid.image-large.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-grid.image-large [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-grid.image-large [part~='outline']:first-of-type::before{display:none}.list-root.display-grid.image-large atomic-result-placeholder::before{background-color:transparent}.list-root.display-grid.image-large{grid-template-columns:minmax(auto, 35rem)}}@media (min-width: 768px){.list-root.display-grid.image-large [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-grid.image-large atomic-result-placeholder{border-color:transparent}.list-root.display-grid.image-large{grid-column-gap:0.5rem;grid-row-gap:0.5rem;grid-template-columns:1fr 1fr}}.list-root.display-grid.image-small [part~='outline'],.list-root.display-grid.image-icon [part~='outline'],.list-root.display-grid.image-none [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-grid.image-small atomic-result-placeholder,.list-root.display-grid.image-icon atomic-result-placeholder,.list-root.display-grid.image-none atomic-result-placeholder{border-color:transparent}.list-root.display-grid.image-small,.list-root.display-grid.image-icon,.list-root.display-grid.image-none{grid-column-gap:0.5rem;grid-row-gap:0.5rem}@media not all and (min-width: 640px){.list-root.display-grid.image-small,.list-root.display-grid.image-icon,.list-root.display-grid.image-none{grid-template-columns:minmax(0, 1fr)}}@media (min-width: 768px){.list-root.display-grid.image-small,.list-root.display-grid.image-icon,.list-root.display-grid.image-none{grid-template-columns:minmax(0, 1fr) minmax(0, 1fr)}}@media (min-width: 1024px){.list-root.display-grid.image-small,.list-root.display-grid.image-icon,.list-root.display-grid.image-none{grid-template-columns:minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)}}}"));
        },
        1212: function (t, e, i) {
            'use strict';
            i.d(e, {
                R: function () {
                    return a;
                },
            });
            var r = i(64977),
                l = i(95640);
            class a {
                constructor(t) {
                    ((this.props = t), this.registerResultTemplates());
                }
                makeDefaultTemplate() {
                    let t = document.createDocumentFragment(),
                        e = document.createElement('atomic-result-link');
                    return (t.appendChild(e), {content: t, conditions: []});
                }
                async registerResultTemplates() {
                    this.resultTemplatesManager = (0, r.O)(this.props.bindings.engine);
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
                    return this.resultTemplatesManager.selectTemplate((0, l.e)(t));
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
