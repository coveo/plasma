(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        56749, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        3518: function (t, e, n) {
            'use strict';
            (n.r(e),
                n.d(e, {
                    atomic_result_localized_text: function () {
                        return c;
                    },
                }));
            var i = n(5991),
                r = n(98214),
                o = n(64977),
                l = n(8807),
                s = n(53049),
                u = n(18043);
            (n(66038), n(87856));
            var a = function (t, e, n, i) {
                var r,
                    o = arguments.length,
                    l = o < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    l = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)
                        (r = t[s]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, n, l) : r(e, n)) || l);
                return (o > 3 && l && Object.defineProperty(e, n, l), l);
            };
            let c = class {
                constructor(t) {
                    ((0, i.r)(this, t), (this.field = {}));
                }
                render() {
                    return this.bindings.i18n.t(this.localeKey, {
                        ...this.parseFieldValues(),
                        ...this.parseFieldCount(),
                    });
                }
                parseFieldValues() {
                    let t = {};
                    return (
                        0 === Object.keys(this.field).length ||
                            Object.entries(this.field).forEach(([e, n]) => {
                                let i = o.a.getResultProperty(this.result, e);
                                (0, r.c)(i) || (t[n] = i);
                            }),
                        t
                    );
                }
                parseFieldCount() {
                    var t;
                    return this.fieldCount
                        ? {
                              count:
                                  null !== (t = o.a.getResultProperty(this.result, this.fieldCount)) && void 0 !== t
                                      ? t
                                      : 1,
                          }
                        : {};
                }
            };
            (a([(0, l.I)()], c.prototype, 'bindings', void 0),
                a([(0, u.R)()], c.prototype, 'result', void 0),
                a([(0, s.M)()], c.prototype, 'field', void 0));
        },
        98214: function (t, e, n) {
            'use strict';
            n.d(e, {
                B: function () {
                    return a;
                },
                N: function () {
                    return u;
                },
                S: function () {
                    return r;
                },
                a: function () {
                    return d;
                },
                b: function () {
                    return l;
                },
                c: function () {
                    return s;
                },
                i: function () {
                    return f;
                },
            });
            var i = class extends Error {
                    constructor(t) {
                        (super(t), (this.name = 'SchemaValidationError'));
                    }
                },
                r = class {
                    constructor(t) {
                        this.definition = t;
                    }
                    validate(t = {}, e = '') {
                        let n = {...this.default, ...t},
                            r = [];
                        for (let t in this.definition) {
                            let e = this.definition[t].validate(n[t]);
                            e && r.push(`${t}: ${e}`);
                        }
                        if (r.length)
                            throw (
                                /**
                                 * @license
                                 *
                                 * Copyright 2023 Coveo Solutions Inc.
                                 *
                                 * Licensed under the Apache License, Version 2.0 (the "License");
                                 * you may not use this file except in compliance with the License.
                                 * You may obtain a copy of the License at
                                 *
                                 *       http://www.apache.org/licenses/LICENSE-2.0
                                 *
                                 * Unless required by applicable law or agreed to in writing, software
                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                 * See the License for the specific language governing permissions and
                                 * limitations under the License.
                                 */ (function (t, e) {
                                    let n = `
  The following properties are invalid:

    ${t.join('\n	')}
  
  ${e}
  `;
                                    return new i(n);
                                })(r, e)
                            );
                        return n;
                    }
                    get default() {
                        let t = {};
                        for (let e in this.definition) {
                            let n = this.definition[e].default;
                            void 0 !== n && (t[e] = n);
                        }
                        return t;
                    }
                },
                o = class {
                    constructor(t = {}) {
                        this.baseConfig = t;
                    }
                    validate(t) {
                        return this.baseConfig.required && s(t) ? 'value is required.' : null;
                    }
                    get default() {
                        return this.baseConfig.default instanceof Function
                            ? this.baseConfig.default()
                            : this.baseConfig.default;
                    }
                    get required() {
                        return !0 === this.baseConfig.required;
                    }
                };
            function l(t) {
                return void 0 === t;
            }
            function s(t) {
                return l(t) || null === t;
            }
            var u = class {
                    constructor(t = {}) {
                        ((this.config = t), (this.value = new o(t)));
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return (
                            e ||
                            (l(t) || ('number' == typeof t && !isNaN(t))
                                ? t < this.config.min
                                    ? `minimum value of ${this.config.min} not respected.`
                                    : t > this.config.max
                                      ? `maximum value of ${this.config.max} not respected.`
                                      : null
                                : 'value is not a number.')
                        );
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                },
                a = class {
                    constructor(t = {}) {
                        this.value = new o(t);
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return e || (l(t) || 'boolean' == typeof t ? null : 'value is not a boolean.');
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                },
                c =
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
                d = class {
                    constructor(t = {}) {
                        ((this.config = {emptyAllowed: !0, url: !1, ...t}), (this.value = new o(this.config)));
                    }
                    validate(t) {
                        let {emptyAllowed: e, url: n, regex: i, constrainTo: r} = this.config,
                            o = this.value.validate(t);
                        if (o) return o;
                        if (l(t)) return null;
                        if ('[object String]' !== Object.prototype.toString.call(t)) return 'value is not a string.';
                        if (!e && !t.length) return 'value is an empty string.';
                        if (n && !c.test(t)) return 'value is not a valid URL.';
                        if (i && !i.test(t)) return `value did not match provided regex ${i}`;
                        if (r && !r.includes(t)) {
                            let t = r.join(', ');
                            return `value should be one of: ${t}.`;
                        }
                        return null;
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                };
            function f(t) {
                return Array.isArray(t);
            }
        },
        75291: function (t, e, n) {
            'use strict';
            function i(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function r(t, e, n, i) {
                let r = (o) => {
                    (t.removeEventListener(e, r, i), 'object' == typeof n ? n.handleEvent.call(t, o) : n.call(t, o));
                };
                t.addEventListener(e, r, i);
            }
            n.d(e, {
                b: function () {
                    return i;
                },
                l: function () {
                    return r;
                },
            });
        },
        8807: function (t, e, n) {
            'use strict';
            n.d(e, {
                B: function () {
                    return p;
                },
                H: function () {
                    return l;
                },
                I: function () {
                    return h;
                },
                a: function () {
                    return s;
                },
                b: function () {
                    return c;
                },
            });
            var i = n(5991),
                r = n(75291),
                o = n(66038);
            let l = () => (0, i.h)(i.H, {class: 'atomic-hidden'}),
                s = 'atomic/initializeComponent',
                u = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class a extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of the following elements: ${u.join(', ')}`);
                }
            }
            function c(t) {
                if (t.shadowRoot) {
                    if (window.applyFocusVisiblePolyfill) {
                        window.applyFocusVisiblePolyfill(t.shadowRoot);
                        return;
                    }
                    window.addEventListener(
                        'focus-visible-polyfill-ready',
                        () => {
                            var e;
                            return null === (e = window.applyFocusVisiblePolyfill) || void 0 === e
                                ? void 0
                                : e.call(window, t.shadowRoot);
                        },
                        {once: !0},
                    );
                }
            }
            let d = 'data-atomic-rendered',
                f = 'data-atomic-loaded';
            function h({forceUpdate: t} = {}) {
                return (e, n) => {
                    let {
                            componentWillLoad: h,
                            render: p,
                            componentDidRender: v,
                            componentDidLoad: b,
                            disconnectedCallback: g,
                        } = e,
                        m = () => {};
                    if ('bindings' !== n)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${n}"`,
                            e,
                        );
                    ((e.componentWillLoad = function () {
                        let e = (0, i.g)(this);
                        (e.setAttribute(d, 'false'), e.setAttribute(f, 'false'));
                        let n = (0, r.b)(s, (e) => {
                            this.bindings = e;
                            let n = () => (0, i.f)(this);
                            (this.bindings.i18n.on('languageChanged', n),
                                (m = () => this.bindings.i18n.off('languageChanged', n)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, i.f)(this)) : (0, i.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((e.dispatchEvent(n), !(0, o.c)(e, u.join(', ')))) {
                            this.error = new a(e.nodeName.toLowerCase());
                            return;
                        }
                        return h && h.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(d, 'true'), p && p.call(this))
                                  : (0, i.h)(l, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, i.g)(this);
                            (t.setAttribute(d, 'false'), t.setAttribute(f, 'false'), m(), g && g.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, i.g)(this);
                            'false' !== t.getAttribute(d) &&
                                (v && v.call(this),
                                'false' === t.getAttribute(f) &&
                                    (t.setAttribute(f, 'true'), c((0, i.g)(this)), b && b.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function p(t, e) {
                return (n, r) => {
                    let {disconnectedCallback: o, initialize: l} = n;
                    ((n.initialize = function () {
                        return (l && l.call(this), l)
                            ? this[t]
                                ? (null == e ? void 0 : e.onUpdateCallbackMethod) && !this[e.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${e.onUpdateCallbackMethod}" is not defined`,
                                          n,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[r] = this[t].state),
                                              (null == e ? void 0 : e.onUpdateCallbackMethod) &&
                                                  this[e.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${t}`,
                                  n,
                              );
                    }),
                        (n.disconnectedCallback = function () {
                            var t;
                            ((0, i.g)(this).isConnected ||
                                null === (t = this.unsubscribeController) ||
                                void 0 === t ||
                                t.call(this),
                                o && o.call(this));
                        }));
                };
            }
        },
        53049: function (t, e, n) {
            'use strict';
            n.d(e, {
                A: function () {
                    return s;
                },
                M: function () {
                    return l;
                },
            });
            var i = n(98214),
                r = n(5991),
                o = n(66038);
            function l(t) {
                return (e, n) => {
                    let {componentWillLoad: i} = e;
                    if (!i) {
                        console.error(
                            'The "componentWillLoad" lifecycle method has to be defined for the MapProp decorator to work.',
                        );
                        return;
                    }
                    e.componentWillLoad = function () {
                        var e;
                        let l = (t && t.attributePrefix) || n,
                            s = this[n],
                            u = (0, r.g)(this).attributes;
                        ((function (t, e, n, i) {
                            let r = (function (t, e) {
                                let n = {},
                                    i = (0, o.a)(t) + '-';
                                for (let t = 0; t < e.length; t++) {
                                    let r = e[t];
                                    if (0 !== r.name.indexOf(i)) continue;
                                    let l = (0, o.k)(r.name.replace(i, ''));
                                    n[l] = `${r.value}`;
                                }
                                return n;
                            })(t, n);
                            Object.assign(
                                e,
                                i
                                    ? Object.entries(r).reduce(
                                          (t, [e, n]) => ({
                                              ...t,
                                              [e]: (function (t) {
                                                  var e;
                                                  let [...n] =
                                                          null !== (e = t.matchAll(/(?:\\.|[^,])+/g)) && void 0 !== e
                                                              ? e
                                                              : [],
                                                      i = /\\(.)/g;
                                                  return n.map(([t]) => t.replace(i, '$1'));
                                              })(n).map((t) => t.trim()),
                                          }),
                                          {},
                                      )
                                    : r,
                            );
                        })(l, s, Array.from(u), null !== (e = null == t ? void 0 : t.splitValues) && void 0 !== e && e),
                            i.call(this));
                    };
                };
            }
            function s() {
                return (t, e) => {
                    let {componentWillLoad: n} = t,
                        l = (0, o.a)(e);
                    t.componentWillLoad = function () {
                        let t = this[e];
                        if (!t || (0, i.i)(t)) {
                            null == n || n.call(this);
                            return;
                        }
                        try {
                            let n = JSON.parse(t);
                            (0, i.i)(n)
                                ? (this[e] = n)
                                : console.error(`Property ${l} should be an array`, (0, r.g)(this));
                        } catch (t) {
                            console.error(`Error while parsing attribute ${l} as array`, t);
                        }
                        null == n || n.call(this);
                    };
                };
            }
        },
        18043: function (t, e, n) {
            'use strict';
            n.d(e, {
                C: function () {
                    return d;
                },
                I: function () {
                    return s;
                },
                R: function () {
                    return l;
                },
                a: function () {
                    return f;
                },
            });
            var i = n(5991),
                r = n(75291);
            n(66038);
            class o extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of an "atomic-result" element.`);
                }
            }
            function l(t = {folded: !1}) {
                return (e, n) => {
                    let {connectedCallback: l, componentWillRender: s, render: a} = e;
                    ((e.connectedCallback = function () {
                        let e = (0, i.g)(this),
                            s = (0, r.b)(u, (e) => {
                                t.folded
                                    ? c(e)
                                        ? (this[n] = e)
                                        : (this[n] = {children: [], result: e})
                                    : (this[n] = c(e) ? e.result : e);
                            }),
                            a = e.dispatchEvent(s);
                        if (a) {
                            this.error = new o(e.nodeName.toLowerCase());
                            return;
                        }
                        return l && l.call(this);
                    }),
                        (e.componentWillRender = function () {
                            if (!this.error) return s && s.call(this);
                        }),
                        (e.render = function () {
                            if (this.error) {
                                let t = (0, i.g)(this);
                                (t.remove(),
                                    console.error(
                                        'Result component is in error and has been removed from the DOM',
                                        this.error,
                                        this,
                                        t,
                                    ));
                                return;
                            }
                            return a && a.call(this);
                        }));
                };
            }
            function s() {
                return (t, e) => {
                    let {connectedCallback: n} = t;
                    t.connectedCallback = function () {
                        let t = (0, i.g)(this),
                            o = (0, r.b)(a, (t) => {
                                this[e] = t;
                            });
                        return (t.dispatchEvent(o), n && n.call(this));
                    };
                };
            }
            let u = 'atomic/resolveResult',
                a = 'atomic/resolveInteractiveResult';
            function c(t) {
                return 'children' in t;
            }
            function d() {
                return (t, e) => {
                    let {componentWillRender: n} = t;
                    t.componentWillRender = function () {
                        let t = (0, i.g)(this),
                            o = (0, r.b)('atomic/resolveChildTemplates', (t) => {
                                this.resultTemplateProvider || (this[e] = t);
                            }),
                            l = t.dispatchEvent(o);
                        if (l) {
                            this[e] = null;
                            return;
                        }
                        return n && n.call(this);
                    };
                };
            }
            function f() {
                return (t, e) => {
                    let {componentWillRender: n} = t;
                    t.componentWillRender = function () {
                        let t = (0, i.g)(this),
                            o = (0, r.b)('atomic/resolveResultDisplayConfig', (t) => {
                                this[e] = t;
                            }),
                            l = t.dispatchEvent(o);
                        if (!l) return n && n.call(this);
                    };
                };
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
