(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        27886, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        40485: function (t, e, n) {
            'use strict';
            (n.r(e),
                n.d(e, {
                    atomic_search_box_instant_results: function () {
                        return o;
                    },
                }));
            var r = n(5991),
                s = n(64977),
                i = n(20714),
                a = n(35126),
                l = n(1212),
                u = n(84230);
            (n(66038), n(87856));
            let o = class {
                constructor(t) {
                    ((0, r.r)(this, t),
                        (this.results = []),
                        (this.display = 'list'),
                        (this.templateHasError = !1),
                        (this.maxResultsPerQuery = 4),
                        (this.density = 'normal'),
                        (this.imageSize = 'icon'));
                }
                async setRenderFunction(t) {
                    this.resultRenderingFunction = t;
                }
                componentWillLoad() {
                    try {
                        (0, u.d)((t) => ((this.bindings = t), this.initialize()), this.host);
                    } catch (t) {
                        this.error = t;
                    }
                }
                getLink(t) {
                    var e, n;
                    return (
                        (null ===
                            (n =
                                null === (e = null == t ? void 0 : t.querySelector('atomic-result')) || void 0 === e
                                    ? void 0
                                    : e.shadowRoot) || void 0 === n
                            ? void 0
                            : n.querySelector('atomic-result-link a')) || null
                    );
                }
                handleLinkClick(t, e) {
                    let n = (e) => t.setAttribute('target', e),
                        r = t.getAttribute('target');
                    return (e && n('_blank'), t.click(), e && n(r || ''), !0);
                }
                renderItems() {
                    if (!this.bindings.suggestedQuery() || this.bindings.store.isMobile()) return [];
                    let t = this.instantResults.state.results.length ? this.instantResults.state.results : this.results,
                        e = t.map((t) => {
                            var e;
                            return {
                                key: `instant-result-${(0, i.e)(t.uniqueId)}`,
                                part: 'instant-results-item',
                                content: (0, r.h)('atomic-result', {
                                    key: `instant-result-${(0, i.e)(t.uniqueId)}`,
                                    part: 'outline',
                                    result: t,
                                    interactiveResult: (0, s.p)(this.bindings.engine, {options: {result: t}}),
                                    display: this.display,
                                    density: this.density,
                                    imageSize: this.imageSize,
                                    content: this.resultTemplateProvider.getTemplateContent(t),
                                    stopPropagation: !1,
                                    renderingFunction: this.resultRenderingFunction,
                                }),
                                ariaLabel: this.bindings.i18n.t('instant-results-suggestion-label', {
                                    title:
                                        (null === (e = this.ariaLabelGenerator) || void 0 === e
                                            ? void 0
                                            : e.call(this, this.bindings, t)) || t.title,
                                    interpolation: {escapeValue: !1},
                                }),
                                onSelect: (t) => {
                                    let e = this.getLink(t.target);
                                    e && this.handleLinkClick(e, t.ctrlKey || t.metaKey);
                                },
                            };
                        });
                    if (e.length) {
                        let t = this.bindings.i18n.t('show-all-results');
                        e.push({
                            key: 'instant-results-show-all-button',
                            content: (0, r.h)(
                                'div',
                                {part: 'instant-results-show-all-button', class: (0, a.a)('text-primary')},
                                t,
                            ),
                            part: 'instant-results-show-all',
                            ariaLabel: t,
                            onSelect: () => {
                                (this.bindings.clearSuggestions(),
                                    this.bindings.searchBoxController.updateText(this.instantResults.state.q),
                                    this.bindings.searchBoxController.submit());
                            },
                        });
                    }
                    return e;
                }
                initialize() {
                    return (
                        (this.instantResults = (0, s.C)(this.bindings.engine, {
                            options: {maxResultsPerQuery: this.maxResultsPerQuery},
                        })),
                        (this.resultTemplateProvider = new l.R({
                            includeDefaultTemplate: !0,
                            templateElements: Array.from(this.host.querySelectorAll('atomic-result-template')),
                            getResultTemplateRegistered: () => !0,
                            setResultTemplateRegistered: () => {},
                            getTemplateHasError: () => this.templateHasError,
                            setTemplateHasError: (t) => {
                                this.templateHasError = t;
                            },
                            bindings: this.bindings,
                        })),
                        {
                            position: Array.from(this.host.parentNode.children).indexOf(this.host),
                            panel: 'right',
                            onSuggestedQueryChange: (t) => (
                                this.instantResults.updateQuery(t),
                                this.onSuggestedQueryChange()
                            ),
                            renderItems: () => this.renderItems(),
                        }
                    );
                }
                onSuggestedQueryChange() {
                    return (
                        this.bindings.getSuggestionElements().length ||
                            this.bindings.searchBoxController.state.value ||
                            console.warn(
                                "There doesn't seem to be any query suggestions configured. Make sure to include either an atomic-search-box-query-suggestions or atomic-search-box-recent-queries in your search box in order to see some instant results.",
                            ),
                        new Promise((t) => {
                            let e = this.instantResults.subscribe(() => {
                                let n = this.instantResults.state;
                                n.isLoading || (n.results.length && (this.results = n.results), e(), t());
                            });
                        })
                    );
                }
                render() {
                    if (this.error) return (0, r.h)('atomic-component-error', {element: this.host, error: this.error});
                }
                get host() {
                    return (0, r.g)(this);
                }
            };
        },
        35126: function (t, e, n) {
            'use strict';
            function r(t) {
                switch (t) {
                    case 'primary':
                        return 'btn-primary';
                    case 'outline-primary':
                        return 'btn-outline-primary';
                    case 'outline-neutral':
                        return 'btn-outline-neutral';
                    case 'outline-bg-neutral':
                        return 'btn-outline-bg-neutral';
                    case 'text-primary':
                        return 'btn-text-primary';
                    case 'text-neutral':
                        return 'btn-text-neutral';
                    case 'text-transparent':
                        return 'btn-text-transparent';
                    case 'square-neutral':
                        return 'btn-square-neutral';
                }
            }
            function s(t) {
                switch (t) {
                    case 'primary':
                        return 'primary';
                    case 'text-transparent':
                        return 'neutral-light';
                    default:
                        return 'neutral';
                }
            }
            n.d(e, {
                a: function () {
                    return r;
                },
                g: function () {
                    return s;
                },
            });
        },
        75291: function (t, e, n) {
            'use strict';
            function r(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function s(t, e, n, r) {
                let s = (i) => {
                    (t.removeEventListener(e, s, r), 'object' == typeof n ? n.handleEvent.call(t, i) : n.call(t, i));
                };
                t.addEventListener(e, s, r);
            }
            n.d(e, {
                b: function () {
                    return r;
                },
                l: function () {
                    return s;
                },
            });
        },
        95640: function (t, e, n) {
            'use strict';
            function r(t) {
                return t.result || t;
            }
            n.d(e, {
                e: function () {
                    return r;
                },
            });
        },
        1212: function (t, e, n) {
            'use strict';
            n.d(e, {
                R: function () {
                    return i;
                },
            });
            var r = n(64977),
                s = n(95640);
            class i {
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
                    return this.resultTemplatesManager.selectTemplate((0, s.e)(t));
                }
                get templatesRegistered() {
                    return this.props.getResultTemplateRegistered();
                }
                get hasError() {
                    return this.props.getTemplateHasError();
                }
            }
        },
        20714: function (t, e, n) {
            'use strict';
            function r(t) {
                return t.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
            }
            function s(t) {
                return t
                    .split('')
                    .map((t) => (t.match(/(\d|\w)+/g) ? t : t.charCodeAt(0)))
                    .join('');
            }
            n.d(e, {
                e: function () {
                    return s;
                },
                r: function () {
                    return r;
                },
            });
        },
        84230: function (t, e, n) {
            'use strict';
            n.d(e, {
                a: function () {
                    return u;
                },
                d: function () {
                    return a;
                },
                e: function () {
                    return l;
                },
            });
            var r = n(75291),
                s = n(66038);
            let i = ['atomic-search-box', 'atomic-insight-search-box'],
                a = (t, e) => {
                    if (
                        (e.dispatchEvent((0, r.b)('atomic/searchBoxSuggestion/register', t)),
                        !(0, s.c)(e, i.join(', ')))
                    )
                        throw Error(
                            `The "${e.nodeName.toLowerCase()}" component was not handled, as it is not a child of the following elements: ${i.join(', ')}`,
                        );
                };
            function l(t) {
                return !t.query;
            }
            function u(t) {
                return !!t.query;
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
