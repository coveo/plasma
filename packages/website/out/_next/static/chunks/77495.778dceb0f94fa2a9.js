(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        77495, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        39736: function (e, t, r) {
            'use strict';
            (r.r(t),
                r.d(t, {
                    atomic_search_box_query_suggestions: function () {
                        return h;
                    },
                    atomic_search_box_recent_queries: function () {
                        return g;
                    },
                }));
            var n = r(5991),
                i = r(64977),
                s = r(33290),
                a = r(20714),
                o = r(84230),
                c = r(10662),
                l = r(9807),
                u = r(66038);
            r(87856);
            let h = class {
                    constructor(e) {
                        (0, n.r)(this, e);
                    }
                    componentWillLoad() {
                        try {
                            (0, o.d)((e) => ((this.bindings = e), this.initialize()), this.host);
                        } catch (e) {
                            this.error = e;
                        }
                    }
                    renderIcon() {
                        return this.icon || s.S;
                    }
                    initialize() {
                        let e = this.bindings.engine,
                            {registerQuerySuggest: t, fetchQuerySuggestions: r} = (0, i.M)(e);
                        return (
                            e.dispatch(t({id: this.bindings.id, count: this.bindings.numberOfQueries})),
                            {
                                position: Array.from(this.host.parentNode.children).indexOf(this.host),
                                onInput: () => e.dispatch(r({id: this.bindings.id})),
                                renderItems: () => this.renderItems(),
                            }
                        );
                    }
                    renderItems() {
                        let e = '' !== this.bindings.searchBoxController.state.value,
                            t = e ? this.maxWithQuery : this.maxWithoutQuery;
                        return this.bindings.searchBoxController.state.suggestions
                            .slice(0, t)
                            .map((e) => this.renderItem(e));
                    }
                    renderItem(e) {
                        let t = '' !== this.bindings.searchBoxController.state.value;
                        return {
                            part: 'query-suggestion-item',
                            content: (0, n.h)(
                                'div',
                                {part: 'query-suggestion-content', class: 'flex items-center'},
                                this.bindings.getSuggestions().length > 1 &&
                                    (0, n.h)('atomic-icon', {
                                        part: 'query-suggestion-icon',
                                        icon: this.renderIcon(),
                                        class: 'w-4 h-4 mr-2 shrink-0',
                                    }),
                                t
                                    ? (0, n.h)('span', {
                                          part: 'query-suggestion-text',
                                          class: 'break-all line-clamp-2',
                                          innerHTML: e.highlightedValue,
                                      })
                                    : (0, n.h)(
                                          'span',
                                          {part: 'query-suggestion-text', class: 'break-all line-clamp-2'},
                                          e.rawValue,
                                      ),
                            ),
                            key: `qs-${(0, a.e)(e.rawValue)}`,
                            query: e.rawValue,
                            ariaLabel: this.bindings.i18n.t('query-suggestion-label', {
                                query: e.rawValue,
                                interpolation: {escapeValue: !1},
                            }),
                            onSelect: () => {
                                this.bindings.searchBoxController.selectSuggestion(e.rawValue);
                            },
                        };
                    }
                    render() {
                        if (this.error)
                            return (0, n.h)('atomic-component-error', {element: this.host, error: this.error});
                    }
                    get host() {
                        return (0, n.g)(this);
                    }
                },
                g = class {
                    constructor(e) {
                        ((0, n.r)(this, e),
                            (this.maxWithQuery = 3),
                            (this.warnUser = (0, u.o)(() =>
                                this.bindings.engine.logger.warn(
                                    'Because analytics are disabled, the recent queries feature is deactivated.',
                                ),
                            )));
                    }
                    componentWillLoad() {
                        try {
                            (0, o.d)((e) => ((this.bindings = e), this.initialize()), this.host);
                        } catch (e) {
                            this.error = e;
                        }
                    }
                    renderIcon() {
                        return this.icon || c.C;
                    }
                    initialize() {
                        return (
                            (this.storage = new l.a()),
                            (this.recentQueriesList = (0, i.R)(this.bindings.engine, {
                                initialState: {queries: this.retrieveLocalStorage()},
                                options: {maxLength: 1e3, clearFilters: this.bindings.clearFilters},
                            })),
                            this.recentQueriesList.subscribe(() => this.updateLocalStorage()),
                            {
                                position: Array.from(this.host.parentNode.children).indexOf(this.host),
                                renderItems: () => this.renderItems(),
                            }
                        );
                    }
                    retrieveLocalStorage() {
                        return this.storage.getParsedJSON(l.S.RECENT_QUERIES, []);
                    }
                    updateLocalStorage() {
                        return this.recentQueriesList.state.analyticsEnabled
                            ? this.storage.setJSON(l.S.RECENT_QUERIES, this.recentQueriesList.state.queries)
                            : this.disableFeature();
                    }
                    disableFeature() {
                        (this.warnUser(), this.storage.removeItem(l.S.RECENT_QUERIES));
                    }
                    renderItems() {
                        if (!this.recentQueriesList.state.analyticsEnabled) return [];
                        let e = this.bindings.searchBoxController.state.value,
                            t = '' !== e,
                            r = t ? this.maxWithQuery : this.maxWithoutQuery,
                            n = this.recentQueriesList.state.queries
                                .filter((t) => t !== e && t.toLowerCase().startsWith(e.toLowerCase()))
                                .slice(0, r),
                            i = n.map((e) => this.renderItem(e));
                        return (i.length && i.unshift(this.renderClear()), i);
                    }
                    renderClear() {
                        return {
                            key: 'recent-query-clear',
                            content: (0, n.h)(
                                'div',
                                {part: 'recent-query-title-content', class: 'flex justify-between w-full'},
                                (0, n.h)(
                                    'span',
                                    {class: 'font-bold', part: 'recent-query-title'},
                                    this.bindings.i18n.t('recent-searches'),
                                ),
                                (0, n.h)('span', {part: 'recent-query-clear'}, this.bindings.i18n.t('clear')),
                            ),
                            ariaLabel: this.bindings.i18n.t('clear-recent-searches', {
                                interpolation: {escapeValue: !1},
                            }),
                            onSelect: () => {
                                (this.recentQueriesList.clear(), this.bindings.triggerSuggestions());
                            },
                            part: 'recent-query-title-item suggestion-divider',
                            hideIfLast: !0,
                        };
                    }
                    renderItem(e) {
                        let t = this.bindings.searchBoxController.state.value;
                        return {
                            key: `recent-${(0, a.e)(e)}`,
                            query: e,
                            part: 'recent-query-item',
                            content: (0, n.h)(
                                'div',
                                {part: 'recent-query-content', class: 'flex items-center break-all text-left'},
                                (0, n.h)('atomic-icon', {
                                    part: 'recent-query-icon',
                                    icon: this.renderIcon(),
                                    class: 'w-4 h-4 mr-2 shrink-0',
                                }),
                                '' === t
                                    ? (0, n.h)('span', {part: 'recent-query-text', class: 'break-all line-clamp-2'}, e)
                                    : (0, n.h)('span', {
                                          part: 'recent-query-text',
                                          class: 'break-all line-clamp-2',
                                          innerHTML: i.T.highlightString({
                                              content: e,
                                              openingDelimiter:
                                                  '<span part="recent-query-text-highlight" class="font-bold">',
                                              closingDelimiter: '</span>',
                                              highlights: [{offset: t.length, length: e.length - t.length}],
                                          }),
                                      }),
                            ),
                            ariaLabel: this.bindings.i18n.t('recent-query-suggestion-label', {
                                query: e,
                                interpolation: {escapeValue: !1},
                            }),
                            onSelect: () => {
                                if (this.bindings.isStandalone) {
                                    (this.bindings.searchBoxController.updateText(e),
                                        this.bindings.searchBoxController.submit());
                                    return;
                                }
                                this.recentQueriesList.executeRecentQuery(
                                    this.recentQueriesList.state.queries.indexOf(e),
                                );
                            },
                        };
                    }
                    render() {
                        if (this.error)
                            return (0, n.h)('atomic-component-error', {element: this.host, error: this.error});
                    }
                    get host() {
                        return (0, n.g)(this);
                    }
                };
        },
        10662: function (e, t, r) {
            'use strict';
            r.d(t, {
                C: function () {
                    return n;
                },
            });
            let n =
                '<svg fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7.5"/><path d="m8.5 4.5v4"/><path d="m10.3066 10.1387-1.80932-1.5768"/></svg>';
        },
        75291: function (e, t, r) {
            'use strict';
            function n(e, t) {
                return new CustomEvent(e, {detail: t, bubbles: !0, cancelable: !0, composed: !0});
            }
            function i(e, t, r, n) {
                let i = (s) => {
                    (e.removeEventListener(t, i, n), 'object' == typeof r ? r.handleEvent.call(e, s) : r.call(e, s));
                };
                e.addEventListener(t, i, n);
            }
            r.d(t, {
                b: function () {
                    return n;
                },
                l: function () {
                    return i;
                },
            });
        },
        9807: function (e, t, r) {
            'use strict';
            var n, i;
            (r.d(t, {
                S: function () {
                    return n;
                },
                a: function () {
                    return s;
                },
            }),
                ((i = n || (n = {})).RECENT_QUERIES = 'coveo-recent-queries'),
                (i.STANDALONE_SEARCH_BOX_DATA = 'coveo-standalone-search-box-data'));
            class s {
                constructor() {}
                clear() {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.clear(),
                        () => {},
                    );
                }
                getItem(e) {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.getItem(e),
                        () => null,
                    );
                }
                getParsedJSON(e, t) {
                    let r = this.getItem(e);
                    return r
                        ? this.tryJSONOrWarn(
                              e,
                              () => JSON.parse(r),
                              () => t,
                          )
                        : t;
                }
                key(e) {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.key(e),
                        () => null,
                    );
                }
                get length() {
                    return this.tryOrElse(
                        () => localStorage.length,
                        () => 0,
                    );
                }
                removeItem(e) {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.removeItem(e),
                        () => {},
                    );
                }
                setItem(e, t) {
                    return this.tryAccessLocalStorageOrWarn(
                        () => localStorage.setItem(e, t),
                        () => {},
                    );
                }
                setJSON(e, t) {
                    let r = this.tryJSONOrWarn(
                        e,
                        () => JSON.stringify(t),
                        () => JSON.stringify({}),
                    );
                    return this.setItem(e, r);
                }
                tryAccessLocalStorageOrWarn(e, t) {
                    return this.tryOrElse(
                        e,
                        () => (
                            console.warn(
                                'Error while trying to read or modify local storage. This can be caused by browser specific settings.',
                            ),
                            t()
                        ),
                    );
                }
                tryJSONOrWarn(e, t, r) {
                    return this.tryOrElse(
                        t,
                        () => (
                            console.warn(`Error while trying to do JSON manipulation with local storage entry. ${e}`),
                            r()
                        ),
                    );
                }
                tryOrElse(e, t) {
                    try {
                        return e();
                    } catch (e) {
                        return (console.warn(e), t());
                    }
                }
            }
        },
        33290: function (e, t, r) {
            'use strict';
            r.d(t, {
                S: function () {
                    return n;
                },
            });
            let n =
                '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6.4 0c3.5 0 6.4 2.9 6.4 6.4 0 1.4-.4 2.7-1.2 3.7l4 4c.4.4.4 1 .1 1.5l-.1.1c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-4-4c-1 .7-2.3 1.2-3.7 1.2-3.4-.1-6.3-3-6.3-6.5s2.9-6.4 6.4-6.4zm0 2.1c-2.3 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z"/></svg>';
        },
        20714: function (e, t, r) {
            'use strict';
            function n(e) {
                return e.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
            }
            function i(e) {
                return e
                    .split('')
                    .map((e) => (e.match(/(\d|\w)+/g) ? e : e.charCodeAt(0)))
                    .join('');
            }
            r.d(t, {
                e: function () {
                    return i;
                },
                r: function () {
                    return n;
                },
            });
        },
        84230: function (e, t, r) {
            'use strict';
            r.d(t, {
                a: function () {
                    return c;
                },
                d: function () {
                    return a;
                },
                e: function () {
                    return o;
                },
            });
            var n = r(75291),
                i = r(66038);
            let s = ['atomic-search-box', 'atomic-insight-search-box'],
                a = (e, t) => {
                    if (
                        (t.dispatchEvent((0, n.b)('atomic/searchBoxSuggestion/register', e)),
                        !(0, i.c)(t, s.join(', ')))
                    )
                        throw Error(
                            `The "${t.nodeName.toLowerCase()}" component was not handled, as it is not a child of the following elements: ${s.join(', ')}`,
                        );
                };
            function o(e) {
                return !e.query;
            }
            function c(e) {
                return !!e.query;
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
