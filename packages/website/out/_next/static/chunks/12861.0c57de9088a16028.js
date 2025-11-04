'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [12861],
    {
        12861: function (t, a, o) {
            (o.r(a),
                o.d(a, {
                    atomic_search_layout: function () {
                        return n;
                    },
                }));
            var i = o(5991),
                e = o(35295),
                c = o(66038),
                s = o(49416);
            o(87856);
            let n = class {
                constructor(t) {
                    ((0, i.r)(this, t), (this.mobileBreakpoint = e.D));
                }
                componentDidLoad() {
                    let t = this.host.id || (0, c.r)('atomic-search-layout-');
                    this.host.id = t;
                    let a = document.createElement('style');
                    ((a.innerHTML = (0, s.b)(this.host, this.mobileBreakpoint)), this.host.appendChild(a));
                }
                get host() {
                    return (0, i.g)(this);
                }
            };
            n.style =
                ".atomic-modal-opened{overflow-y:hidden}atomic-layout-section[section='search']{grid-area:atomic-section-search}atomic-layout-section[section='facets']{grid-area:atomic-section-facets}atomic-layout-section[section='main']{grid-area:atomic-section-main}atomic-layout-section[section='status']{grid-area:atomic-section-status}atomic-layout-section[section='pagination']{grid-area:atomic-section-pagination}atomic-search-layout{width:100%;height:100%;display:none;grid-template-areas:'. atomic-section-search .'\n    '. atomic-section-main .';grid-template-columns:var(--atomic-layout-spacing-x) minmax(0, 1fr) var(--atomic-layout-spacing-x)}atomic-search-layout atomic-layout-section[section='search']{margin:var(--atomic-layout-spacing-y) 0;max-width:var(--atomic-layout-max-search-box-input-width, 678px);width:100%;justify-self:center}atomic-search-layout atomic-layout-section[section='search'] atomic-search-box::part(suggestions-double-list){width:125%;max-width:var(--atomic-layout-max-search-box-double-suggestions-width, 800px)}atomic-search-layout atomic-layout-section[section='search'] atomic-search-box::part(suggestions-left){flex-basis:var(--atomic-layout-search-box-left-suggestions-width, 30%)}atomic-search-layout atomic-layout-section[section='search'] atomic-search-box::part(suggestions-right){flex-basis:calc(100% - var(--atomic-layout-search-box-left-suggestions-width, 30%))}atomic-search-layout atomic-layout-section[section='facets']{display:none}atomic-search-layout atomic-layout-section[section='facets'] *{margin-bottom:var(--atomic-layout-spacing-y)}atomic-search-layout atomic-layout-section[section='main']{margin-bottom:var(--atomic-layout-spacing-y)}atomic-search-layout atomic-layout-section[section='horizontal-facets']{display:flex;flex-wrap:wrap;margin-bottom:var(--atomic-layout-spacing-y);row-gap:0.5rem}atomic-search-layout atomic-layout-section[section='horizontal-facets']>*{max-width:100%}atomic-search-layout atomic-layout-section[section='horizontal-facets']>atomic-segmented-facet,atomic-search-layout atomic-layout-section[section='horizontal-facets']>atomic-popover{margin-right:0.5rem}atomic-search-layout atomic-layout-section[section='horizontal-facets']>atomic-popover{display:none}atomic-search-layout atomic-layout-section[section='status']{display:grid;justify-content:space-between;grid-template-areas:'atomic-breadbox       atomic-breadbox'\n      'atomic-query-summary  atomic-sort'\n      'atomic-did-you-mean   atomic-did-you-mean'\n      'atomic-notifications  atomic-notifications'}atomic-search-layout atomic-layout-section[section='status']>*{margin-bottom:var(--atomic-layout-spacing-y)}atomic-search-layout atomic-layout-section[section='status'] atomic-breadbox{grid-area:atomic-breadbox}atomic-search-layout atomic-layout-section[section='status'] atomic-query-summary{grid-area:atomic-query-summary;align-self:center;overflow:hidden}atomic-search-layout atomic-layout-section[section='status'] atomic-sort-dropdown{grid-area:atomic-sort;justify-self:end}atomic-search-layout atomic-layout-section[section='status'] atomic-refine-toggle{grid-area:atomic-sort}atomic-search-layout atomic-layout-section[section='status'] atomic-did-you-mean{grid-area:atomic-did-you-mean}atomic-search-layout atomic-layout-section[section='status'] atomic-notifications{grid-area:atomic-notifications}atomic-search-layout atomic-layout-section[section='results'] atomic-smart-snippet{margin-bottom:1.5rem}atomic-search-layout atomic-layout-section[section='results'] atomic-smart-snippet-suggestions{margin-bottom:1.5rem}atomic-search-layout atomic-layout-section[section='pagination']{display:flex;flex-direction:column;justify-content:space-between;align-items:center}atomic-search-layout atomic-layout-section[section='pagination'] atomic-load-more-results{width:100%}atomic-search-layout atomic-layout-section[section='pagination']>*{margin-top:var(--atomic-layout-spacing-y)}@media only screen and (min-width: 50rem){atomic-search-layout atomic-layout-section[section='pagination']{flex-direction:row}}";
        },
        35295: function (t, a, o) {
            o.d(a, {
                D: function () {
                    return e;
                },
                u: function () {
                    return n;
                },
            });
            var i = o(66038);
            let e = '1024px';
            function c(t, a) {
                return t.replace(RegExp(`\\(min-width: ${e}\\)`, 'g'), `(min-width: ${a})`);
            }
            let s = ['atomic-search-layout', 'atomic-insight-layout'];
            function n(t) {
                let a = (0, i.c)(t, s.join(', '));
                (null == a ? void 0 : a.mobileBreakpoint) &&
                    a.mobileBreakpoint !== e &&
                    (!(function (t, a) {
                        var o, i;
                        let e = null === (o = t.shadowRoot) || void 0 === o ? void 0 : o.adoptedStyleSheets;
                        if (!e || !e.length) return;
                        let s = e[0],
                            n = Object.values(s.cssRules)
                                .map((t) => t.cssText)
                                .join('');
                        null === (i = s.replaceSync) || void 0 === i || i.call(s, c(n, a));
                    })(t, a.mobileBreakpoint),
                    (function (t, a) {
                        var o;
                        let i = null === (o = t.shadowRoot) || void 0 === o ? void 0 : o.querySelector('style');
                        i && (i.textContent = c(i.textContent, a));
                    })(t, a.mobileBreakpoint));
            }
        },
        49416: function (t, a, o) {
            o.d(a, {
                b: function () {
                    return c;
                },
                m: function () {
                    return e;
                },
            });
            var i = o(98939);
            function e(t) {
                return `only screen and (min-width: ${t})`;
            }
            function c(t, a) {
                let o = t.id,
                    c = `atomic-search-layout#${o}`,
                    s =
                        'atomic-search-interface:not(.atomic-search-interface-no-results, .atomic-search-interface-error)',
                    n = `@media ${e(a)}`,
                    r = `${c} { display: grid }`,
                    m = `${n} {
    ${c} ${(0, i.s)('search')} {
      justify-self: start;
      width: 80%;
    }
  }`;
                return [
                    r,
                    m,
                    (() => {
                        let a = (0, i.f)(t, 'facets'),
                            o = (0, i.f)(t, 'main');
                        if (!a || !o) return '';
                        let e = a.minWidth || '17rem',
                            r = a.maxWidth || '22rem',
                            m = o.minWidth || '50%',
                            l = o.maxWidth || '70rem';
                        return `${n} {
      ${c} {
        grid-template-areas:
        '. .                     atomic-section-search .'
        '. atomic-section-main   atomic-section-main   .';
        grid-template-columns:
          1fr minmax(${e}, ${r}) minmax(${m}, ${l}) 1fr;
        column-gap: var(--atomic-layout-spacing-x);
      }

      ${s} ${c} {
        grid-template-areas:
          '. .                     atomic-section-search .'
          '. atomic-section-facets atomic-section-main   .'
          '. atomic-section-facets .                     .';
      }

      ${s} ${c} ${(0, i.s)('facets')} {
        display: block;
      }
    }`;
                    })(),
                    (() => {
                        let a = (0, i.f)(t, 'status');
                        if (!a) return '';
                        let o = a.querySelector('atomic-refine-toggle');
                        if (!o) return '';
                        let e = `${c} ${(0, i.s)('status')}`;
                        return `${e} atomic-sort-dropdown {
      display: none;
    }

    ${n} {
     ${e} atomic-sort-dropdown {
       display: block;
      }

      ${e} atomic-refine-toggle {
        display: none;
       }
    }`;
                    })(),
                    `${n} {
      ${c} ${(0, i.s)('horizontal-facets')} > atomic-popover:not(.atomic-hidden) {
        display: block;
      }
    }`,
                ]
                    .filter((t) => '' !== t)
                    .join('\n\n');
            }
        },
        98939: function (t, a, o) {
            function i(t, a) {
                return t.querySelector(e(a));
            }
            function e(t) {
                return `atomic-layout-section[section="${t}"]`;
            }
            o.d(a, {
                f: function () {
                    return i;
                },
                s: function () {
                    return e;
                },
            });
        },
    },
]);
