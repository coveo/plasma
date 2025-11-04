(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        88061, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        80421: function (t, e, i) {
            'use strict';
            i.d(e, {
                A: function () {
                    return l;
                },
                F: function () {
                    return o;
                },
                g: function () {
                    return a;
                },
            });
            var n = i(75291),
                r = i(66038);
            function l(t, e = !1) {
                function i() {
                    let t = (0, n.b)('atomic/accessibility/findAriaLive', {});
                    document.dispatchEvent(t);
                    let {element: e} = t.detail;
                    return e;
                }
                return (n, r) => {
                    let {componentWillRender: l} = n;
                    (Object.defineProperty(n, r, {
                        set: (n) => {
                            var r;
                            null === (r = i()) || void 0 === r || r.updateMessage(t, n, e);
                        },
                    }),
                        (n.componentWillRender = function () {
                            var n;
                            (l && l.call(this), null === (n = i()) || void 0 === n || n.registerRegion(t, e));
                        }));
                };
            }
            function o() {
                return (t, e) => {
                    let {componentWillLoad: i} = t;
                    t.componentWillLoad = function () {
                        let t, n;
                        i && i.call(this);
                        let {componentDidRender: l} = this,
                            o = !1,
                            a = !1,
                            s = null;
                        this.componentDidRender = function () {
                            if (
                                (l && l.call(this),
                                this.bindings &&
                                    o &&
                                    this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t &&
                                    ((o = !1), n))
                            ) {
                                let t = n;
                                (0, r.d)().then(() => {
                                    (t.focus(), null == s || s());
                                });
                            }
                        };
                        let u = {
                            setTarget: (t) => {
                                t && ((n = t), a && ((a = !1), u.focus()));
                            },
                            focus: async () => {
                                (await (0, r.d)(), null == n || n.focus(), null == s || s());
                            },
                            focusAfterSearch: () => (
                                (t = this.bindings.store.getUniqueIDFromEngine(this.bindings.engine)),
                                (o = !0),
                                new Promise((t) => (s = t))
                            ),
                            focusOnNextTarget: () => ((a = !0), new Promise((t) => (s = t))),
                            disableForCurrentSearch: () =>
                                this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t && (o = !1),
                        };
                        this[e] = u;
                    };
                };
            }
            function a(t) {
                var e;
                return null !==
                    (e = (function* t(e) {
                        (function (t) {
                            if ('-1' === t.getAttribute('tabindex')) return !1;
                            if (t.hasAttribute('tabindex') || 'true' === t.getAttribute('contentEditable')) return !0;
                            switch (t.tagName) {
                                case 'A':
                                case 'AREA':
                                    return t.hasAttribute('href');
                                case 'INPUT':
                                case 'SELECT':
                                case 'TEXTAREA':
                                case 'BUTTON':
                                    return !t.hasAttribute('disabled');
                                case 'IFRAME':
                                    return !0;
                                default:
                                    return !1;
                            }
                        })(e) && (yield e);
                        let i = Array.from(e.children);
                        for (let n of (e instanceof HTMLSlotElement
                            ? (i = e.assignedElements())
                            : e.shadowRoot && i.push(...Array.from(e.shadowRoot.children)),
                        i))
                            yield* t(n);
                    })(t).next().value) && void 0 !== e
                    ? e
                    : null;
            }
        },
        55704: function (t, e, i) {
            'use strict';
            i.d(e, {
                A: function () {
                    return n;
                },
            });
            let n = `<svg viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.09619 10.5962L5.69239 6L1.09619 1.40381" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
        },
        639: function (t, e, i) {
            'use strict';
            (i.r(e),
                i.d(e, {
                    atomic_result_printable_uri: function () {
                        return b;
                    },
                }));
            var n = i(5991),
                r = i(98214),
                l = i(64977),
                o = i(55704),
                a = i(80421),
                s = i(8807),
                u = i(66038),
                c = i(39881),
                d = i(31257),
                f = i(18043);
            i(87856);
            var h = function (t, e, i, n) {
                var r,
                    l = arguments.length,
                    o = l < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    o = Reflect.decorate(t, e, i, n);
                else
                    for (var a = t.length - 1; a >= 0; a--)
                        (r = t[a]) && (o = (l < 3 ? r(o) : l > 3 ? r(e, i, o) : r(e, i)) || o);
                return (l > 3 && o && Object.defineProperty(e, i, o), o);
            };
            let b = class {
                constructor(t) {
                    ((0, n.r)(this, t), (this.listExpanded = !1), (this.maxNumberOfParts = 5));
                }
                connectedCallback() {
                    try {
                        new r.S({maxNumberOfParts: new r.N({min: 3})}).validate({
                            maxNumberOfParts: this.maxNumberOfParts,
                        });
                    } catch (t) {
                        this.error = t;
                    }
                    this.linkAttributes = (0, c.a)(this.host, 'attributes');
                }
                initialize() {
                    this.interactiveResult = (0, l.u)(this.bindings.engine, {options: {result: this.result}});
                }
                getIndexOfEllipsis(t) {
                    let e = Math.max(2, t - this.maxNumberOfParts);
                    return t - e - 1;
                }
                renderEllipsis() {
                    return (0, n.h)(
                        'li',
                        null,
                        (0, n.h)(
                            'button',
                            {
                                'aria-label': this.bindings.i18n.t('collapsed-uri-parts'),
                                onClick: (t) => {
                                    (t.stopPropagation(),
                                        this.expandedPartFocus.focusOnNextTarget(),
                                        (this.listExpanded = !0));
                                },
                            },
                            '...',
                        ),
                        this.renderSeparator(),
                    );
                }
                get allParents() {
                    let t = (0, u.l)(`${this.result.raw.parents}`),
                        e = Array.from(t.getElementsByTagName('parent')),
                        i = this.getIndexOfEllipsis(e.length);
                    return e.map((t, r) => {
                        let l = t.getAttribute('name'),
                            o = t.getAttribute('uri');
                        return (0, n.h)(
                            'li',
                            null,
                            this.renderLink(l, o, r === i),
                            r === e.length - 1 ? null : this.renderSeparator(),
                        );
                    });
                }
                renderSeparator() {
                    return (0, n.h)('atomic-icon', {
                        class: 'result-printable-uri-separator',
                        icon: o.A,
                        role: 'separator',
                    });
                }
                renderParents() {
                    let t = this.allParents;
                    return this.listExpanded || t.length <= this.maxNumberOfParts
                        ? t
                        : [t.slice(0, this.getIndexOfEllipsis(t.length)), this.renderEllipsis(), t.slice(-1)];
                }
                renderLink(t, e, i) {
                    return (0, n.h)(
                        d.L,
                        {
                            href: e,
                            title: 'string' == typeof t ? t : void 0,
                            onSelect: () => this.interactiveResult.select(),
                            onBeginDelayedSelect: () => this.interactiveResult.beginDelayedSelect(),
                            onCancelPendingSelect: () => this.interactiveResult.cancelPendingSelect(),
                            attributes: this.linkAttributes,
                            ref: i ? this.expandedPartFocus.setTarget : void 0,
                        },
                        t,
                    );
                }
                render() {
                    let t = this.renderParents();
                    return t.length
                        ? (0, n.h)('ul', {'aria-label': this.bindings.i18n.t('printable-uri')}, t)
                        : this.renderLink(
                              (0, n.h)('atomic-result-text', {field: 'printableUri'}),
                              this.result.clickUri,
                              !1,
                          );
                }
                get host() {
                    return (0, n.g)(this);
                }
            };
            (h([(0, s.I)()], b.prototype, 'bindings', void 0),
                h([(0, f.R)()], b.prototype, 'result', void 0),
                h([(0, a.F)()], b.prototype, 'expandedPartFocus', void 0),
                (b.style =
                    'atomic-result-printable-uri{max-width:100%;word-break:break-word}atomic-result-printable-uri a,atomic-result-printable-uri button{color:var(--atomic-primary)}atomic-result-printable-uri a:hover,atomic-result-printable-uri a.focus-visible,atomic-result-printable-uri button:hover,atomic-result-printable-uri button.focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-printable-uri a:hover,atomic-result-printable-uri a:focus-visible,atomic-result-printable-uri button:hover,atomic-result-printable-uri button:focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-printable-uri a:focus,atomic-result-printable-uri button:focus{outline:none}atomic-result-printable-uri a:visited,atomic-result-printable-uri button:visited{color:var(--atomic-visited)}atomic-result-printable-uri ul{display:flex;flex-wrap:wrap}atomic-result-printable-uri li{display:inline-flex;align-items:center;max-width:100%}atomic-result-printable-uri li a{display:inline-block;vertical-align:middle;max-width:100%;text-overflow:ellipsis;overflow:hidden}atomic-result-printable-uri li{white-space:nowrap}atomic-result-printable-uri li:last-child{white-space:normal}atomic-result-printable-uri li:last-child::after{content:none}atomic-result-printable-uri li .result-printable-uri-separator{display:inline-block;margin:0 0.5rem;vertical-align:middle;width:0.75rem;height:0.75rem;color:var(--atomic-neutral-dark)}'));
        },
        39881: function (t, e, i) {
            'use strict';
            function n(t) {
                let e = Array.from(t.children),
                    i = e.filter((t) => !t.hasAttribute('slot') || '' === t.getAttribute('slot'));
                if (i.length)
                    return (i.length > 1 && console.warn('Element should only have 1 default slot.', t), i[0]);
            }
            function r(t, e) {
                let i = (function (t, e) {
                    let i = Array.from(t.children),
                        n = i.filter((t) => t.getAttribute('slot') === e);
                    if (n.length)
                        return (n.length > 1 && console.warn(`Element should only have 1 slot named "${e}".`, t), n[0]);
                })(t, e);
                if (i) {
                    if ('A' !== i.nodeName) {
                        console.warn(`Slot named "${e}" should be an "a" tag`, i);
                        return;
                    }
                    return Array.from(i.attributes).filter(
                        ({nodeName: t}) =>
                            'slot' !== t &&
                            ('href' !== t ||
                                (console.warn(
                                    'The "href" attribute set on the "attributes" slot element will be ignored.',
                                ),
                                !1)),
                    );
                }
            }
            i.d(e, {
                a: function () {
                    return r;
                },
                g: function () {
                    return n;
                },
            });
        },
        98214: function (t, e, i) {
            'use strict';
            i.d(e, {
                B: function () {
                    return u;
                },
                N: function () {
                    return s;
                },
                S: function () {
                    return r;
                },
                a: function () {
                    return d;
                },
                b: function () {
                    return o;
                },
                c: function () {
                    return a;
                },
                i: function () {
                    return f;
                },
            });
            var n = class extends Error {
                    constructor(t) {
                        (super(t), (this.name = 'SchemaValidationError'));
                    }
                },
                r = class {
                    constructor(t) {
                        this.definition = t;
                    }
                    validate(t = {}, e = '') {
                        let i = {...this.default, ...t},
                            r = [];
                        for (let t in this.definition) {
                            let e = this.definition[t].validate(i[t]);
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
                                    let i = `
  The following properties are invalid:

    ${t.join('\n	')}
  
  ${e}
  `;
                                    return new n(i);
                                })(r, e)
                            );
                        return i;
                    }
                    get default() {
                        let t = {};
                        for (let e in this.definition) {
                            let i = this.definition[e].default;
                            void 0 !== i && (t[e] = i);
                        }
                        return t;
                    }
                },
                l = class {
                    constructor(t = {}) {
                        this.baseConfig = t;
                    }
                    validate(t) {
                        return this.baseConfig.required && a(t) ? 'value is required.' : null;
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
            function o(t) {
                return void 0 === t;
            }
            function a(t) {
                return o(t) || null === t;
            }
            var s = class {
                    constructor(t = {}) {
                        ((this.config = t), (this.value = new l(t)));
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return (
                            e ||
                            (o(t) || ('number' == typeof t && !isNaN(t))
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
                u = class {
                    constructor(t = {}) {
                        this.value = new l(t);
                    }
                    validate(t) {
                        let e = this.value.validate(t);
                        return e || (o(t) || 'boolean' == typeof t ? null : 'value is not a boolean.');
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
                        ((this.config = {emptyAllowed: !0, url: !1, ...t}), (this.value = new l(this.config)));
                    }
                    validate(t) {
                        let {emptyAllowed: e, url: i, regex: n, constrainTo: r} = this.config,
                            l = this.value.validate(t);
                        if (l) return l;
                        if (o(t)) return null;
                        if ('[object String]' !== Object.prototype.toString.call(t)) return 'value is not a string.';
                        if (!e && !t.length) return 'value is an empty string.';
                        if (i && !c.test(t)) return 'value is not a valid URL.';
                        if (n && !n.test(t)) return `value did not match provided regex ${n}`;
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
        75291: function (t, e, i) {
            'use strict';
            function n(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function r(t, e, i, n) {
                let r = (l) => {
                    (t.removeEventListener(e, r, n), 'object' == typeof i ? i.handleEvent.call(t, l) : i.call(t, l));
                };
                t.addEventListener(e, r, n);
            }
            i.d(e, {
                b: function () {
                    return n;
                },
                l: function () {
                    return r;
                },
            });
        },
        8807: function (t, e, i) {
            'use strict';
            i.d(e, {
                B: function () {
                    return b;
                },
                H: function () {
                    return o;
                },
                I: function () {
                    return h;
                },
                a: function () {
                    return a;
                },
                b: function () {
                    return c;
                },
            });
            var n = i(5991),
                r = i(75291),
                l = i(66038);
            let o = () => (0, n.h)(n.H, {class: 'atomic-hidden'}),
                a = 'atomic/initializeComponent',
                s = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class u extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of the following elements: ${s.join(', ')}`);
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
                return (e, i) => {
                    let {
                            componentWillLoad: h,
                            render: b,
                            componentDidRender: p,
                            componentDidLoad: m,
                            disconnectedCallback: g,
                        } = e,
                        v = () => {};
                    if ('bindings' !== i)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${i}"`,
                            e,
                        );
                    ((e.componentWillLoad = function () {
                        let e = (0, n.g)(this);
                        (e.setAttribute(d, 'false'), e.setAttribute(f, 'false'));
                        let i = (0, r.b)(a, (e) => {
                            this.bindings = e;
                            let i = () => (0, n.f)(this);
                            (this.bindings.i18n.on('languageChanged', i),
                                (v = () => this.bindings.i18n.off('languageChanged', i)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, n.f)(this)) : (0, n.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((e.dispatchEvent(i), !(0, l.c)(e, s.join(', ')))) {
                            this.error = new u(e.nodeName.toLowerCase());
                            return;
                        }
                        return h && h.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, n.h)('atomic-component-error', {element: (0, n.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, n.g)(this).setAttribute(d, 'true'), b && b.call(this))
                                  : (0, n.h)(o, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, n.g)(this);
                            (t.setAttribute(d, 'false'), t.setAttribute(f, 'false'), v(), g && g.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, n.g)(this);
                            'false' !== t.getAttribute(d) &&
                                (p && p.call(this),
                                'false' === t.getAttribute(f) &&
                                    (t.setAttribute(f, 'true'), c((0, n.g)(this)), m && m.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function b(t, e) {
                return (i, r) => {
                    let {disconnectedCallback: l, initialize: o} = i;
                    ((i.initialize = function () {
                        return (o && o.call(this), o)
                            ? this[t]
                                ? (null == e ? void 0 : e.onUpdateCallbackMethod) && !this[e.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${e.onUpdateCallbackMethod}" is not defined`,
                                          i,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[r] = this[t].state),
                                              (null == e ? void 0 : e.onUpdateCallbackMethod) &&
                                                  this[e.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${t}`,
                                  i,
                              );
                    }),
                        (i.disconnectedCallback = function () {
                            var t;
                            ((0, n.g)(this).isConnected ||
                                null === (t = this.unsubscribeController) ||
                                void 0 === t ||
                                t.call(this),
                                l && l.call(this));
                        }));
                };
            }
        },
        31257: function (t, e, i) {
            'use strict';
            i.d(e, {
                L: function () {
                    return o;
                },
                b: function () {
                    return l;
                },
            });
            var n = i(5991),
                r = i(2995);
            let l = (t, {onSelect: e, onBeginDelayedSelect: i, onCancelPendingSelect: n, stopPropagation: r = !0}) => {
                    let l = (t, e) => {
                        (r && t.stopPropagation(), e());
                    };
                    (['click', 'contextmenu', 'mousedown', 'mouseup'].forEach((i) =>
                        t.addEventListener(i, (t) => l(t, e)),
                    ),
                        t.addEventListener('touchstart', (t) => l(t, i), {passive: !0}),
                        t.addEventListener('touchend', (t) => l(t, n), {passive: !0}));
                },
                o = (
                    {
                        href: t,
                        className: e,
                        part: i,
                        title: o,
                        onSelect: a,
                        onBeginDelayedSelect: s,
                        onCancelPendingSelect: u,
                        ref: c,
                        attributes: d,
                        tabIndex: f,
                        ariaHidden: h,
                        rel: b,
                        stopPropagation: p = !0,
                        target: m = '_self',
                    },
                    g,
                ) =>
                    (0, n.h)(
                        'a',
                        {
                            class: e,
                            part: i,
                            href: (0, r.f)(t),
                            target: m,
                            title: o,
                            rel: b,
                            ref: (t) => {
                                (c && c(t),
                                    t &&
                                        (l(t, {
                                            onSelect: a,
                                            onBeginDelayedSelect: s,
                                            onCancelPendingSelect: u,
                                            stopPropagation: p,
                                        }),
                                        (null == d ? void 0 : d.length) &&
                                            [...d].forEach(({nodeName: e, nodeValue: i}) => {
                                                t.setAttribute(e, i);
                                            }),
                                        h && t.setAttribute('aria-hidden', 'true')));
                            },
                            tabIndex: f,
                        },
                        g,
                    );
        },
        18043: function (t, e, i) {
            'use strict';
            i.d(e, {
                C: function () {
                    return d;
                },
                I: function () {
                    return a;
                },
                R: function () {
                    return o;
                },
                a: function () {
                    return f;
                },
            });
            var n = i(5991),
                r = i(75291);
            i(66038);
            class l extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of an "atomic-result" element.`);
                }
            }
            function o(t = {folded: !1}) {
                return (e, i) => {
                    let {connectedCallback: o, componentWillRender: a, render: u} = e;
                    ((e.connectedCallback = function () {
                        let e = (0, n.g)(this),
                            a = (0, r.b)(s, (e) => {
                                t.folded
                                    ? c(e)
                                        ? (this[i] = e)
                                        : (this[i] = {children: [], result: e})
                                    : (this[i] = c(e) ? e.result : e);
                            }),
                            u = e.dispatchEvent(a);
                        if (u) {
                            this.error = new l(e.nodeName.toLowerCase());
                            return;
                        }
                        return o && o.call(this);
                    }),
                        (e.componentWillRender = function () {
                            if (!this.error) return a && a.call(this);
                        }),
                        (e.render = function () {
                            if (this.error) {
                                let t = (0, n.g)(this);
                                (t.remove(),
                                    console.error(
                                        'Result component is in error and has been removed from the DOM',
                                        this.error,
                                        this,
                                        t,
                                    ));
                                return;
                            }
                            return u && u.call(this);
                        }));
                };
            }
            function a() {
                return (t, e) => {
                    let {connectedCallback: i} = t;
                    t.connectedCallback = function () {
                        let t = (0, n.g)(this),
                            l = (0, r.b)(u, (t) => {
                                this[e] = t;
                            });
                        return (t.dispatchEvent(l), i && i.call(this));
                    };
                };
            }
            let s = 'atomic/resolveResult',
                u = 'atomic/resolveInteractiveResult';
            function c(t) {
                return 'children' in t;
            }
            function d() {
                return (t, e) => {
                    let {componentWillRender: i} = t;
                    t.componentWillRender = function () {
                        let t = (0, n.g)(this),
                            l = (0, r.b)('atomic/resolveChildTemplates', (t) => {
                                this.resultTemplateProvider || (this[e] = t);
                            }),
                            o = t.dispatchEvent(l);
                        if (o) {
                            this[e] = null;
                            return;
                        }
                        return i && i.call(this);
                    };
                };
            }
            function f() {
                return (t, e) => {
                    let {componentWillRender: i} = t;
                    t.componentWillRender = function () {
                        let t = (0, n.g)(this),
                            l = (0, r.b)('atomic/resolveResultDisplayConfig', (t) => {
                                this[e] = t;
                            }),
                            o = t.dispatchEvent(l);
                        if (!o) return i && i.call(this);
                    };
                };
            }
        },
        2995: function (t, e, i) {
            'use strict';
            function n(t) {
                let e = /^(https?|ftp|file|mailto|tel|sip):/i.test(t),
                    i = /^\//.test(t);
                return e || i ? t : '';
            }
            i.d(e, {
                f: function () {
                    return n;
                },
            });
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
