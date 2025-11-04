(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        74587, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        53498: function (t, e, n) {
            'use strict';
            (n.r(e),
                n.d(e, {
                    atomic_insight_result_children_template: function () {
                        return u;
                    },
                }));
            var r = n(5991),
                i = n(53049),
                o = n(11579);
            (n(66038), n(87856), n(64977), n(27964));
            var a = function (t, e, n, r) {
                var i,
                    o = arguments.length,
                    a = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    a = Reflect.decorate(t, e, n, r);
                else
                    for (var u = t.length - 1; u >= 0; u--)
                        (i = t[u]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
                return (o > 3 && a && Object.defineProperty(e, n, a), a);
            };
            let u = class {
                constructor(t) {
                    ((0, r.r)(this, t),
                        (this.conditions = []),
                        (this.mustMatch = {}),
                        (this.mustNotMatch = {}),
                        (this.resultTemplateCommon = new o.R({
                            host: this.host,
                            setError: (t) => {
                                this.error = t;
                            },
                            validParents: ['atomic-insight-result-children'],
                        })));
                }
                componentWillLoad() {
                    ((this.conditions = (0, o.a)(this.ifDefined, this.ifNotDefined)),
                        (this.resultTemplateCommon.matchConditions = (0, o.m)(this.mustMatch, this.mustNotMatch)));
                }
                async getTemplate() {
                    return this.resultTemplateCommon.getTemplate(this.conditions, this.error);
                }
                render() {
                    return this.resultTemplateCommon.renderIfError(this.error);
                }
                get host() {
                    return (0, r.g)(this);
                }
            };
            (a([(0, i.M)({splitValues: !0})], u.prototype, 'mustMatch', void 0),
                a([(0, i.M)({splitValues: !0})], u.prototype, 'mustNotMatch', void 0));
        },
        98214: function (t, e, n) {
            'use strict';
            n.d(e, {
                B: function () {
                    return l;
                },
                N: function () {
                    return s;
                },
                S: function () {
                    return i;
                },
                a: function () {
                    return f;
                },
                b: function () {
                    return a;
                },
                c: function () {
                    return u;
                },
                i: function () {
                    return d;
                },
            });
            var r = class extends Error {
                    constructor(t) {
                        (super(t), (this.name = 'SchemaValidationError'));
                    }
                },
                i = class {
                    constructor(t) {
                        this.definition = t;
                    }
                    validate(t = {}, e = '') {
                        let n = {...this.default, ...t},
                            i = [];
                        for (let t in this.definition) {
                            let e = this.definition[t].validate(n[t]);
                            e && i.push(`${t}: ${e}`);
                        }
                        if (i.length)
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
                                    return new r(n);
                                })(i, e)
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
                        return this.baseConfig.required && u(t) ? 'value is required.' : null;
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
            function a(t) {
                return void 0 === t;
            }
            function u(t) {
                return a(t) || null === t;
            }
            var s = class {
                    constructor(t = {}) {
                        ((this.config = t), (this.value = new o(t)));
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return (
                            e ||
                            (a(t) || ('number' == typeof t && !isNaN(t))
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
                l = class {
                    constructor(t = {}) {
                        this.value = new o(t);
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return e || (a(t) || 'boolean' == typeof t ? null : 'value is not a boolean.');
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
                        let {emptyAllowed: e, url: n, regex: r, constrainTo: i} = this.config,
                            o = this.value.validate(t);
                        if (o) return o;
                        if (a(t)) return null;
                        if ('[object String]' !== Object.prototype.toString.call(t)) return 'value is not a string.';
                        if (!e && !t.length) return 'value is an empty string.';
                        if (n && !c.test(t)) return 'value is not a valid URL.';
                        if (r && !r.test(t)) return `value did not match provided regex ${r}`;
                        if (i && !i.includes(t)) {
                            let t = i.join(', ');
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
        53049: function (t, e, n) {
            'use strict';
            n.d(e, {
                A: function () {
                    return u;
                },
                M: function () {
                    return a;
                },
            });
            var r = n(98214),
                i = n(5991),
                o = n(66038);
            function a(t) {
                return (e, n) => {
                    let {componentWillLoad: r} = e;
                    if (!r) {
                        console.error(
                            'The "componentWillLoad" lifecycle method has to be defined for the MapProp decorator to work.',
                        );
                        return;
                    }
                    e.componentWillLoad = function () {
                        var e;
                        let a = (t && t.attributePrefix) || n,
                            u = this[n],
                            s = (0, i.g)(this).attributes;
                        ((function (t, e, n, r) {
                            let i = (function (t, e) {
                                let n = {},
                                    r = (0, o.a)(t) + '-';
                                for (let t = 0; t < e.length; t++) {
                                    let i = e[t];
                                    if (0 !== i.name.indexOf(r)) continue;
                                    let a = (0, o.k)(i.name.replace(r, ''));
                                    n[a] = `${i.value}`;
                                }
                                return n;
                            })(t, n);
                            Object.assign(
                                e,
                                r
                                    ? Object.entries(i).reduce(
                                          (t, [e, n]) => ({
                                              ...t,
                                              [e]: (function (t) {
                                                  var e;
                                                  let [...n] =
                                                          null !== (e = t.matchAll(/(?:\\.|[^,])+/g)) && void 0 !== e
                                                              ? e
                                                              : [],
                                                      r = /\\(.)/g;
                                                  return n.map(([t]) => t.replace(r, '$1'));
                                              })(n).map((t) => t.trim()),
                                          }),
                                          {},
                                      )
                                    : i,
                            );
                        })(a, u, Array.from(s), null !== (e = null == t ? void 0 : t.splitValues) && void 0 !== e && e),
                            r.call(this));
                    };
                };
            }
            function u() {
                return (t, e) => {
                    let {componentWillLoad: n} = t,
                        a = (0, o.a)(e);
                    t.componentWillLoad = function () {
                        let t = this[e];
                        if (!t || (0, r.i)(t)) {
                            null == n || n.call(this);
                            return;
                        }
                        try {
                            let n = JSON.parse(t);
                            (0, r.i)(n)
                                ? (this[e] = n)
                                : console.error(`Property ${a} should be an array`, (0, i.g)(this));
                        } catch (t) {
                            console.error(`Error while parsing attribute ${a} as array`, t);
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
                    return s;
                },
                a: function () {
                    return c;
                },
                m: function () {
                    return l;
                },
            });
            var r = n(64977),
                i = n(5991),
                o = n(66038),
                a = n(49800),
                u = n(27964);
            class s {
                constructor({host: t, setError: e, validParents: n, allowEmpty: r = !1}) {
                    ((this.matchConditions = []), (this.host = t), this.validateTemplate(t, e, n, r));
                }
                validateTemplate(t, e, n, r = !0) {
                    var i, s;
                    let l = n
                            .map((t) => t.toUpperCase())
                            .includes((null === (i = t.parentElement) || void 0 === i ? void 0 : i.nodeName) || ''),
                        c = t.nodeName.toLowerCase();
                    if (!l) {
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
                    if (!r && !f.innerHTML.trim()) {
                        e(Error(`The "template" tag inside "${c}" cannot be empty.`));
                        return;
                    }
                    f.content.querySelector('script') &&
                        console.warn(
                            'Any "script" tags defined inside of "template" elements are not supported and will not be executed when the results are rendered.',
                            t,
                        );
                    let {section: d, other: h} =
                        ((s = f.content.childNodes),
                        (0, o.b)(Array.from(s), (t) =>
                            (0, u.i)(t)
                                ? 'section'
                                : (0, o.i)(t)
                                  ? (0, o.e)(t) && t.tagName.toLowerCase() === a.t
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
                    if (t) return (0, i.h)('atomic-component-error', {element: this.host, error: t});
                }
            }
            function l(t, e) {
                let n = [];
                for (let e in t) n.push(r.a.fieldMustMatch(e, t[e]));
                for (let t in e) n.push(r.a.fieldMustNotMatch(t, e[t]));
                return n;
            }
            function c(t, e) {
                let n = [];
                if (t) {
                    let e = t.split(',');
                    n.push(r.a.fieldsMustBeDefined(e));
                }
                if (e) {
                    let t = e.split(',');
                    n.push(r.a.fieldsMustNotBeDefined(t));
                }
                return n;
            }
        },
        27964: function (t, e, n) {
            'use strict';
            n.d(e, {
                c: function () {
                    return a;
                },
                i: function () {
                    return o;
                },
            });
            var r = n(66038);
            let i = new Set([
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
                return !!(0, r.e)(t) && i.has(t.tagName.toLowerCase());
            }
            function a(t) {
                return 'string' == typeof t
                    ? Array.from(i.values()).some((e) => t.includes(e))
                    : Array.from(t).some((t) => o(t));
            }
        },
        49800: function (t, e, n) {
            'use strict';
            n.d(e, {
                t: function () {
                    return r;
                },
            });
            let r = 'atomic-table-element';
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
