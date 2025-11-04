(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        34198, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        84897: function (t, e, n) {
            'use strict';
            (n.r(e),
                n.d(e, {
                    atomic_field_condition: function () {
                        return a;
                    },
                }));
            var i = n(5991),
                r = n(64977),
                o = n(53049),
                l = n(11579),
                s = n(18043);
            (n(66038), n(87856), n(27964));
            var u = function (t, e, n, i) {
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
            let a = class {
                constructor(t) {
                    ((0, i.r)(this, t),
                        (this.conditions = []),
                        (this.mustMatch = {}),
                        (this.mustNotMatch = {}),
                        (this.shouldBeRemoved = !1));
                }
                componentWillLoad() {
                    if (this.ifDefined) {
                        let t = this.ifDefined.split(',');
                        this.conditions.push(r.a.fieldsMustBeDefined(t));
                    }
                    if (this.ifNotDefined) {
                        let t = this.ifNotDefined.split(',');
                        this.conditions.push(r.a.fieldsMustNotBeDefined(t));
                    }
                    this.conditions.push(...(0, l.m)(this.mustMatch, this.mustNotMatch));
                }
                render() {
                    return this.conditions.every((t) => t(this.result))
                        ? (0, i.h)('slot', null)
                        : ((this.shouldBeRemoved = !0), '');
                }
                componentDidLoad() {
                    this.shouldBeRemoved && this.host.remove();
                }
                get host() {
                    return (0, i.g)(this);
                }
            };
            (u([(0, o.M)({splitValues: !0})], a.prototype, 'mustMatch', void 0),
                u([(0, o.M)({splitValues: !0})], a.prototype, 'mustNotMatch', void 0),
                u([(0, s.R)()], a.prototype, 'result', void 0),
                (a.style = 'atomic-field-condition{max-width:100%}'));
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
                    return f;
                },
                b: function () {
                    return l;
                },
                c: function () {
                    return s;
                },
                i: function () {
                    return d;
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
                f = class {
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
            function d(t) {
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
        11579: function (t, e, n) {
            'use strict';
            n.d(e, {
                R: function () {
                    return u;
                },
                a: function () {
                    return c;
                },
                m: function () {
                    return a;
                },
            });
            var i = n(64977),
                r = n(5991),
                o = n(66038),
                l = n(49800),
                s = n(27964);
            class u {
                constructor({host: t, setError: e, validParents: n, allowEmpty: i = !1}) {
                    ((this.matchConditions = []), (this.host = t), this.validateTemplate(t, e, n, i));
                }
                validateTemplate(t, e, n, i = !0) {
                    var r, u;
                    let a = n
                            .map((t) => t.toUpperCase())
                            .includes((null === (r = t.parentElement) || void 0 === r ? void 0 : r.nodeName) || ''),
                        c = t.nodeName.toLowerCase();
                    if (!a) {
                        e(
                            Error(
                                `The "${c}" component has to be the child of one of the following: ${n.map((t) => `"${t.toLowerCase()}"`).join(', ')}.`,
                            ),
                        );
                        return;
                    }
                    let f = t.querySelector('template');
                    if (!f) {
                        e(Error(`The "${c}" component has to contain a "template" element as a child.`));
                        return;
                    }
                    if (!i && !f.innerHTML.trim()) {
                        e(Error(`The "template" tag inside "${c}" cannot be empty.`));
                        return;
                    }
                    f.content.querySelector('script') &&
                        console.warn(
                            'Any "script" tags defined inside of "template" elements are not supported and will not be executed when the results are rendered.',
                            t,
                        );
                    let {section: d, other: h} =
                        ((u = f.content.childNodes),
                        (0, o.b)(Array.from(u), (t) =>
                            (0, s.i)(t)
                                ? 'section'
                                : (0, o.i)(t)
                                  ? (0, o.e)(t) && t.tagName.toLowerCase() === l.t
                                      ? 'table-column-definition'
                                      : 'other'
                                  : 'metadata',
                        ));
                    (null == d ? void 0 : d.length) &&
                        (null == h ? void 0 : h.length) &&
                        console.warn(
                            'Result templates should only contain section elements or non-section elements. Future updates could unpredictably affect this result template.',
                            t,
                            {sectionNodes: d, otherNodes: h},
                        );
                }
                getTemplate(t, e) {
                    return e
                        ? null
                        : {
                              conditions: t.concat(this.matchConditions),
                              content: this.host.querySelector('template').content,
                              priority: 1,
                          };
                }
                renderIfError(t) {
                    if (t) return (0, r.h)('atomic-component-error', {element: this.host, error: t});
                }
            }
            function a(t, e) {
                let n = [];
                for (let e in t) n.push(i.a.fieldMustMatch(e, t[e]));
                for (let t in e) n.push(i.a.fieldMustNotMatch(t, e[t]));
                return n;
            }
            function c(t, e) {
                let n = [];
                if (t) {
                    let e = t.split(',');
                    n.push(i.a.fieldsMustBeDefined(e));
                }
                if (e) {
                    let t = e.split(',');
                    n.push(i.a.fieldsMustNotBeDefined(t));
                }
                return n;
            }
        },
        18043: function (t, e, n) {
            'use strict';
            n.d(e, {
                C: function () {
                    return f;
                },
                I: function () {
                    return s;
                },
                R: function () {
                    return l;
                },
                a: function () {
                    return d;
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
            function f() {
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
            function d() {
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
        27964: function (t, e, n) {
            'use strict';
            n.d(e, {
                c: function () {
                    return l;
                },
                i: function () {
                    return o;
                },
            });
            var i = n(66038);
            let r = new Set([
                'atomic-result-section-visual',
                'atomic-result-section-badges',
                'atomic-result-section-actions',
                'atomic-result-section-title',
                'atomic-result-section-title-metadata',
                'atomic-result-section-emphasized',
                'atomic-result-section-excerpt',
                'atomic-result-section-bottom-metadata',
                'atomic-result-section-children',
            ]);
            function o(t) {
                return !!(0, i.e)(t) && r.has(t.tagName.toLowerCase());
            }
            function l(t) {
                return 'string' == typeof t
                    ? Array.from(r.values()).some((e) => t.includes(e))
                    : Array.from(t).some((t) => o(t));
            }
        },
        49800: function (t, e, n) {
            'use strict';
            n.d(e, {
                t: function () {
                    return i;
                },
            });
            let i = 'atomic-table-element';
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
