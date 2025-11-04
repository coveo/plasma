'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9343],
    {
        9343: function (t, e, i) {
            (i.r(e),
                i.d(e, {
                    atomic_icon: function () {
                        return a;
                    },
                }));
            var n = i(5991),
                o = i(66038),
                r = i(8807);
            i(87856);
            class s extends Error {
                constructor(t, e, i) {
                    (super(`Could not fetch icon from ${t}, got ${e}.`), (this.url = t), (this.errorObject = i));
                }
                static fromStatusCode(t, e, i) {
                    return new s(t, `status code ${e} (${i})`);
                }
                static fromError(t, e) {
                    return new s(t, 'an error', e);
                }
            }
            let a = class {
                constructor(t) {
                    ((0, n.r)(this, t), (this.svg = null));
                }
                async fetchIcon(t) {
                    try {
                        let e = await fetch(t).catch((e) => {
                            throw s.fromError(t, e);
                        });
                        if (200 !== e.status && 304 !== e.status) throw s.fromStatusCode(t, e.status, e.statusText);
                        return await e.text();
                    } catch (t) {
                        return ((this.error = t), (0, n.f)(this), null);
                    }
                }
                validateSVG(t) {
                    /^<svg[\s\S]+<\/svg>$/gm.test(t) ||
                        this.bindings.engine.logger.warn(
                            'The inline "icon" prop is not an svg element. You may encounter rendering issues.',
                            this.icon,
                        );
                }
                async getIcon() {
                    let t = (0, o.v)(this.icon, this.bindings.store.getIconAssetsPath()),
                        e = t ? await this.fetchIcon(t) : this.icon;
                    e && this.validateSVG(e);
                    let i = e ? o.p.sanitize(e, {USE_PROFILES: {svg: !0, svgFilters: !0}}) : null;
                    return i;
                }
                async updateIcon() {
                    let t = this.getIcon();
                    this.svg = await t;
                }
                initialize() {
                    this.updateIcon();
                }
                render() {
                    if (this.error) {
                        (console.error(this.error, this.host), this.host.remove());
                        return;
                    }
                    return (0, n.h)(n.H, {innerHTML: this.svg, 'aria-hidden': 'true'});
                }
                static get assetsDirs() {
                    return ['assets'];
                }
                get host() {
                    return (0, n.g)(this);
                }
                static get watchers() {
                    return {icon: ['updateIcon']};
                }
            };
            (!(function (t, e, i, n) {
                var o,
                    r = arguments.length,
                    s = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    s = Reflect.decorate(t, e, i, n);
                else
                    for (var a = t.length - 1; a >= 0; a--)
                        (o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, i, s) : o(e, i)) || s);
                r > 3 && s && Object.defineProperty(e, i, s);
            })([(0, r.I)()], a.prototype, 'bindings', void 0),
                (a.style =
                    'atomic-icon{display:inline-block;fill:currentColor;aspect-ratio:1 / 1;height:auto}@supports not (aspect-ratio: 1 / 1){atomic-icon{height:auto}}atomic-icon>svg{width:100%;max-height:100%;aspect-ratio:1 / 1;height:auto}@supports not (aspect-ratio: 1 / 1){atomic-icon>svg{height:auto}}'));
        },
        75291: function (t, e, i) {
            function n(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function o(t, e, i, n) {
                let o = (r) => {
                    (t.removeEventListener(e, o, n), 'object' == typeof i ? i.handleEvent.call(t, r) : i.call(t, r));
                };
                t.addEventListener(e, o, n);
            }
            i.d(e, {
                b: function () {
                    return n;
                },
                l: function () {
                    return o;
                },
            });
        },
        8807: function (t, e, i) {
            i.d(e, {
                B: function () {
                    return g;
                },
                H: function () {
                    return s;
                },
                I: function () {
                    return f;
                },
                a: function () {
                    return a;
                },
                b: function () {
                    return h;
                },
            });
            var n = i(5991),
                o = i(75291),
                r = i(66038);
            let s = () => (0, n.h)(n.H, {class: 'atomic-hidden'}),
                a = 'atomic/initializeComponent',
                c = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class l extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of the following elements: ${c.join(', ')}`);
                }
            }
            function h(t) {
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
            let u = 'data-atomic-rendered',
                d = 'data-atomic-loaded';
            function f({forceUpdate: t} = {}) {
                return (e, i) => {
                    let {
                            componentWillLoad: f,
                            render: g,
                            componentDidRender: p,
                            componentDidLoad: b,
                            disconnectedCallback: m,
                        } = e,
                        v = () => {};
                    if ('bindings' !== i)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${i}"`,
                            e,
                        );
                    ((e.componentWillLoad = function () {
                        let e = (0, n.g)(this);
                        (e.setAttribute(u, 'false'), e.setAttribute(d, 'false'));
                        let i = (0, o.b)(a, (e) => {
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
                        if ((e.dispatchEvent(i), !(0, r.c)(e, c.join(', ')))) {
                            this.error = new l(e.nodeName.toLowerCase());
                            return;
                        }
                        return f && f.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, n.h)('atomic-component-error', {element: (0, n.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, n.g)(this).setAttribute(u, 'true'), g && g.call(this))
                                  : (0, n.h)(s, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, n.g)(this);
                            (t.setAttribute(u, 'false'), t.setAttribute(d, 'false'), v(), m && m.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, n.g)(this);
                            'false' !== t.getAttribute(u) &&
                                (p && p.call(this),
                                'false' === t.getAttribute(d) &&
                                    (t.setAttribute(d, 'true'), h((0, n.g)(this)), b && b.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function g(t, e) {
                return (i, o) => {
                    let {disconnectedCallback: r, initialize: s} = i;
                    ((i.initialize = function () {
                        return (s && s.call(this), s)
                            ? this[t]
                                ? (null == e ? void 0 : e.onUpdateCallbackMethod) && !this[e.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${e.onUpdateCallbackMethod}" is not defined`,
                                          i,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[o] = this[t].state),
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
                                r && r.call(this));
                        }));
                };
            }
        },
    },
]);
