(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        66883, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        6692: function (e, t, r) {
            'use strict';
            (r.r(t),
                r.d(t, {
                    atomic_result_multi_value_text: function () {
                        return c;
                    },
                }));
            var i = r(5991),
                n = r(64977),
                l = r(78681),
                s = r(8807),
                o = r(66038),
                a = r(18043);
            r(87856);
            var u = function (e, t, r, i) {
                var n,
                    l = arguments.length,
                    s = l < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, r)) : i;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    s = Reflect.decorate(e, t, r, i);
                else
                    for (var o = e.length - 1; o >= 0; o--)
                        (n = e[o]) && (s = (l < 3 ? n(s) : l > 3 ? n(t, r, s) : n(t, r)) || s);
                return (l > 3 && s && Object.defineProperty(t, r, s), s);
            };
            let c = class {
                constructor(e) {
                    ((0, i.r)(this, e),
                        (this.maxValuesToDisplay = 3),
                        (this.delimiter = null),
                        (this.sortedValues = null));
                }
                initialize() {
                    this.breadcrumbManager = (0, n.Q)(this.bindings.engine);
                }
                get resultValues() {
                    let e = n.a.getResultProperty(this.result, this.field);
                    return null === e
                        ? null
                        : Array.isArray(e)
                          ? e.map((e) => `${e}`.trim())
                          : 'string' != typeof e || '' === e.trim()
                            ? ((this.error = Error(
                                  `Could not parse "${e}" from field "${this.field}" as a string array.`,
                              )),
                              null)
                            : this.delimiter
                              ? e.split(this.delimiter).map((e) => e.trim())
                              : [e];
                }
                get facetSelectedValues() {
                    return this.breadcrumbManager.state.facetBreadcrumbs
                        .filter((e) => e.field === this.field)
                        .reduce((e, t) => [...e, ...t.values.map(({value: e}) => e.value)], []);
                }
                updateSortedValues() {
                    let e = this.resultValues;
                    if (null === e) {
                        this.sortedValues = null;
                        return;
                    }
                    let t = new Set(e),
                        r = this.facetSelectedValues.filter((e) => t.has(e));
                    this.sortedValues = Array.from(e.reduce((e, t) => e.add(t), new Set(r)));
                }
                getShouldDisplayLabel(e) {
                    return this.maxValuesToDisplay > 0 && e.length > this.maxValuesToDisplay;
                }
                getNumberOfValuesToDisplay(e) {
                    return e.length <= this.maxValuesToDisplay
                        ? e.length
                        : this.maxValuesToDisplay < 2
                          ? this.maxValuesToDisplay
                          : Math.min(e.length - 2, this.maxValuesToDisplay);
                }
                renderValue(e) {
                    let t = (0, l.g)(this.field, e, this.bindings.i18n),
                        r = (0, o.t)(e);
                    return (0, i.h)(
                        'li',
                        {key: e, part: 'result-multi-value-text-value'},
                        (0, i.h)('slot', {name: `result-multi-value-text-value-${r}`}, t),
                    );
                }
                renderSeparator(e, t) {
                    return (0, i.h)('li', {
                        role: 'separator',
                        part: 'result-multi-value-text-separator',
                        key: `${e}~${t}`,
                        class: 'separator',
                    });
                }
                renderMoreLabel(e) {
                    return (0, i.h)(
                        'li',
                        {key: 'more-field-values', part: 'result-multi-value-text-value-more'},
                        this.bindings.i18n.t('n-more', {value: e}),
                    );
                }
                renderListItems(e) {
                    let t = this.getNumberOfValuesToDisplay(e),
                        r = [];
                    for (let i = 0; i < t; i++)
                        (i > 0 && r.push(this.renderSeparator(e[i - 1], e[i])), r.push(this.renderValue(e[i])));
                    return (
                        this.getShouldDisplayLabel(e) &&
                            (r.push(this.renderSeparator(e[t - 1], 'more-field-values')),
                            r.push(this.renderMoreLabel(e.length - t))),
                        r
                    );
                }
                componentWillRender() {
                    this.updateSortedValues();
                }
                render() {
                    if (null === this.sortedValues) {
                        this.host.remove();
                        return;
                    }
                    return (0, i.h)('ul', null, ...this.renderListItems(this.sortedValues));
                }
                get host() {
                    return (0, i.g)(this);
                }
            };
            (u([(0, s.I)()], c.prototype, 'bindings', void 0),
                u([(0, a.R)()], c.prototype, 'result', void 0),
                (c.style =
                    ":host>ul{display:flex;list-style:none;margin:0;padding:0}:host>ul li{display:inline-block}.separator::before{display:inline;content:',\\00a0'}"));
        },
        75291: function (e, t, r) {
            'use strict';
            function i(e, t) {
                return new CustomEvent(e, {detail: t, bubbles: !0, cancelable: !0, composed: !0});
            }
            function n(e, t, r, i) {
                let n = (l) => {
                    (e.removeEventListener(t, n, i), 'object' == typeof r ? r.handleEvent.call(e, l) : r.call(e, l));
                };
                e.addEventListener(t, n, i);
            }
            r.d(t, {
                b: function () {
                    return i;
                },
                l: function () {
                    return n;
                },
            });
        },
        78681: function (e, t, r) {
            'use strict';
            function i(e) {
                return `caption-${e}`;
            }
            function n(e, t) {
                return t.getResourceBundle(t.language, i(e)) || {};
            }
            function l(e, t, r) {
                return r.t(t, {ns: i(e)});
            }
            r.d(t, {
                a: function () {
                    return n;
                },
                g: function () {
                    return l;
                },
            });
        },
        8807: function (e, t, r) {
            'use strict';
            r.d(t, {
                B: function () {
                    return p;
                },
                H: function () {
                    return s;
                },
                I: function () {
                    return f;
                },
                a: function () {
                    return o;
                },
                b: function () {
                    return c;
                },
            });
            var i = r(5991),
                n = r(75291),
                l = r(66038);
            let s = () => (0, i.h)(i.H, {class: 'atomic-hidden'}),
                o = 'atomic/initializeComponent',
                a = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class u extends Error {
                constructor(e) {
                    super(`The "${e}" element must be the child of the following elements: ${a.join(', ')}`);
                }
            }
            function c(e) {
                if (e.shadowRoot) {
                    if (window.applyFocusVisiblePolyfill) {
                        window.applyFocusVisiblePolyfill(e.shadowRoot);
                        return;
                    }
                    window.addEventListener(
                        'focus-visible-polyfill-ready',
                        () => {
                            var t;
                            return null === (t = window.applyFocusVisiblePolyfill) || void 0 === t
                                ? void 0
                                : t.call(window, e.shadowRoot);
                        },
                        {once: !0},
                    );
                }
            }
            let h = 'data-atomic-rendered',
                d = 'data-atomic-loaded';
            function f({forceUpdate: e} = {}) {
                return (t, r) => {
                    let {
                            componentWillLoad: f,
                            render: p,
                            componentDidRender: m,
                            componentDidLoad: b,
                            disconnectedCallback: g,
                        } = t,
                        v = () => {};
                    if ('bindings' !== r)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${r}"`,
                            t,
                        );
                    ((t.componentWillLoad = function () {
                        let t = (0, i.g)(this);
                        (t.setAttribute(h, 'false'), t.setAttribute(d, 'false'));
                        let r = (0, n.b)(o, (t) => {
                            this.bindings = t;
                            let r = () => (0, i.f)(this);
                            (this.bindings.i18n.on('languageChanged', r),
                                (v = () => this.bindings.i18n.off('languageChanged', r)));
                            try {
                                this.initialize ? (this.initialize(), e && (0, i.f)(this)) : (0, i.f)(this);
                            } catch (e) {
                                this.error = e;
                            }
                        });
                        if ((t.dispatchEvent(r), !(0, l.c)(t, a.join(', ')))) {
                            this.error = new u(t.nodeName.toLowerCase());
                            return;
                        }
                        return f && f.call(this);
                    }),
                        (t.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(h, 'true'), p && p.call(this))
                                  : (0, i.h)(s, null);
                        }),
                        (t.disconnectedCallback = function () {
                            let e = (0, i.g)(this);
                            (e.setAttribute(h, 'false'), e.setAttribute(d, 'false'), v(), g && g.call(this));
                        }),
                        (t.componentDidRender = function () {
                            let e = (0, i.g)(this);
                            'false' !== e.getAttribute(h) &&
                                (m && m.call(this),
                                'false' === e.getAttribute(d) &&
                                    (e.setAttribute(d, 'true'), c((0, i.g)(this)), b && b.call(this)));
                        }),
                        (t.componentDidLoad = function () {}));
                };
            }
            function p(e, t) {
                return (r, n) => {
                    let {disconnectedCallback: l, initialize: s} = r;
                    ((r.initialize = function () {
                        return (s && s.call(this), s)
                            ? this[e]
                                ? (null == t ? void 0 : t.onUpdateCallbackMethod) && !this[t.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${t.onUpdateCallbackMethod}" is not defined`,
                                          r,
                                      )
                                    : void (this.unsubscribeController = this[e].subscribe(() => {
                                          ((this[n] = this[e].state),
                                              (null == t ? void 0 : t.onUpdateCallbackMethod) &&
                                                  this[t.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${e}`,
                                  r,
                              );
                    }),
                        (r.disconnectedCallback = function () {
                            var e;
                            ((0, i.g)(this).isConnected ||
                                null === (e = this.unsubscribeController) ||
                                void 0 === e ||
                                e.call(this),
                                l && l.call(this));
                        }));
                };
            }
        },
        18043: function (e, t, r) {
            'use strict';
            r.d(t, {
                C: function () {
                    return h;
                },
                I: function () {
                    return o;
                },
                R: function () {
                    return s;
                },
                a: function () {
                    return d;
                },
            });
            var i = r(5991),
                n = r(75291);
            r(66038);
            class l extends Error {
                constructor(e) {
                    super(`The "${e}" element must be the child of an "atomic-result" element.`);
                }
            }
            function s(e = {folded: !1}) {
                return (t, r) => {
                    let {connectedCallback: s, componentWillRender: o, render: u} = t;
                    ((t.connectedCallback = function () {
                        let t = (0, i.g)(this),
                            o = (0, n.b)(a, (t) => {
                                e.folded
                                    ? c(t)
                                        ? (this[r] = t)
                                        : (this[r] = {children: [], result: t})
                                    : (this[r] = c(t) ? t.result : t);
                            }),
                            u = t.dispatchEvent(o);
                        if (u) {
                            this.error = new l(t.nodeName.toLowerCase());
                            return;
                        }
                        return s && s.call(this);
                    }),
                        (t.componentWillRender = function () {
                            if (!this.error) return o && o.call(this);
                        }),
                        (t.render = function () {
                            if (this.error) {
                                let e = (0, i.g)(this);
                                (e.remove(),
                                    console.error(
                                        'Result component is in error and has been removed from the DOM',
                                        this.error,
                                        this,
                                        e,
                                    ));
                                return;
                            }
                            return u && u.call(this);
                        }));
                };
            }
            function o() {
                return (e, t) => {
                    let {connectedCallback: r} = e;
                    e.connectedCallback = function () {
                        let e = (0, i.g)(this),
                            l = (0, n.b)(u, (e) => {
                                this[t] = e;
                            });
                        return (e.dispatchEvent(l), r && r.call(this));
                    };
                };
            }
            let a = 'atomic/resolveResult',
                u = 'atomic/resolveInteractiveResult';
            function c(e) {
                return 'children' in e;
            }
            function h() {
                return (e, t) => {
                    let {componentWillRender: r} = e;
                    e.componentWillRender = function () {
                        let e = (0, i.g)(this),
                            l = (0, n.b)('atomic/resolveChildTemplates', (e) => {
                                this.resultTemplateProvider || (this[t] = e);
                            }),
                            s = e.dispatchEvent(l);
                        if (s) {
                            this[t] = null;
                            return;
                        }
                        return r && r.call(this);
                    };
                };
            }
            function d() {
                return (e, t) => {
                    let {componentWillRender: r} = e;
                    e.componentWillRender = function () {
                        let e = (0, i.g)(this),
                            l = (0, n.b)('atomic/resolveResultDisplayConfig', (e) => {
                                this[t] = e;
                            }),
                            s = e.dispatchEvent(l);
                        if (!s) return r && r.call(this);
                    };
                };
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
