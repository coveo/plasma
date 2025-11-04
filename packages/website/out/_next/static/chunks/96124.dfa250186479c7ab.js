'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [96124],
    {
        96124: function (t, i, e) {
            (e.r(i),
                e.d(i, {
                    atomic_insight_layout: function () {
                        return l;
                    },
                }));
            var s = e(5991),
                r = e(66038),
                a = e(98939);
            e(87856);
            let n = 'atomic-insight-tabs',
                o = ['atomic-insight-refine-toggle', 'atomic-insight-edit-toggle', 'atomic-insight-history-toggle'],
                h = ['atomic-insight-smart-snippet-suggestions', 'atomic-insight-smart-snippet'];
            function g(t, i) {
                var e;
                let s = t.id,
                    r = `atomic-insight-layout#${s}`,
                    g = !!(null === (e = (0, a.f)(t, 'search')) || void 0 === e ? void 0 : e.querySelector(n)),
                    l = i
                        ? `
  ${r} {
    display: grid;
    grid-template-rows: auto auto 8fr 1fr;
    max-height: 100%;
    box-sizing: border-box;
  }
  ${r} atomic-insight-refine-modal {
    grid-row-start: 5;
  }`
                        : '',
                    c = `${(0, a.s)('search')} {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      grid-gap: 0.5rem;
      background: var(--atomic-neutral-light);
      padding-top: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      box-sizing: border-box;
      min-width: 0;
      ${g ? '' : 'padding-bottom: 1.5rem;'}
    }

    ${(0, a.s)('search')} atomic-insight-search-box {
      flex-grow: 1;
    }

    ${o.map(
        (t) => `${(0, a.s)('search')} ${t} {
      flex-shrink: 0;
    }`,
    )}

    ${(0, a.s)('search')} ${n} {
      width: 100%;
    }
    `,
                    d = `${(0, a.s)('facets')} {
      display: none;
    }
    `,
                    u = `
    ${(0, a.s)('results')} {
      overflow: auto;
    }

    ${(0, a.s)('results')} ${h.join(',')} {
      padding: 1.5rem 1.5rem 0px;
    }
    `;
                return [l, c, d, u].filter((t) => '' !== t).join('\n\n');
            }
            let l = class {
                constructor(t) {
                    ((0, s.r)(this, t), (this.widget = !1));
                }
                updateStyles() {
                    this.styleTag ? (this.styleTag.innerHTML = g(this.host, this.widget)) : this.makeStyleTag();
                }
                makeStyleTag() {
                    ((this.styleTag = document.createElement('style')),
                        (this.styleTag.innerHTML = g(this.host, this.widget)),
                        this.host.appendChild(this.styleTag));
                }
                componentDidLoad() {
                    let t = this.host.id || (0, r.r)('atomic-insight-layout-');
                    ((this.host.id = t), this.makeStyleTag());
                }
                get host() {
                    return (0, s.g)(this);
                }
                static get watchers() {
                    return {widget: ['updateStyles']};
                }
            };
        },
        98939: function (t, i, e) {
            function s(t, i) {
                return t.querySelector(r(i));
            }
            function r(t) {
                return `atomic-layout-section[section="${t}"]`;
            }
            e.d(i, {
                f: function () {
                    return s;
                },
                s: function () {
                    return r;
                },
            });
        },
    },
]);
