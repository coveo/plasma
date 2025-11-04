(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        49381, 22029, 20337, 29889, 26155, 21730, 20946, 29343, 25908, 22035, 21187, 51367, 98309, 168, 77895, 51621,
        95153, 97612, 73877, 51843, 96429, 78364, 27682, 36569, 89613, 73492, 17036,
    ],
    {
        95568: function (t, e, i) {
            'use strict';
            (i.r(e),
                i.d(e, {
                    atomic_automatic_facet_slot_content: function () {
                        return l;
                    },
                }));
            var n = i(5991),
                o = i(64977),
                a = i(8807);
            (i(66038), i(87856));
            var r = function (t, e, i, n) {
                var o,
                    a = arguments.length,
                    r = a < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, i, n);
                else
                    for (var l = t.length - 1; l >= 0; l--)
                        (o = t[l]) && (r = (a < 3 ? o(r) : a > 3 ? o(e, i, r) : o(e, i)) || r);
                return (a > 3 && r && Object.defineProperty(e, i, r), r);
            };
            let l = class {
                constructor(t) {
                    (0, n.r)(this, t);
                }
                initialize() {
                    var t, e;
                    let i =
                            null === (t = this.bindings.engine.state.automaticFacetSet) || void 0 === t
                                ? void 0
                                : t.desiredCount,
                        n =
                            null === (e = this.bindings.engine.state.automaticFacetSet) || void 0 === e
                                ? void 0
                                : e.numberOfValues;
                    (i &&
                        (this.automaticFacetGenerator = (0, o.A)(this.bindings.engine, {
                            options: {desiredCount: i, numberOfValues: n},
                        })),
                        (this.searchStatus = (0, o.E)(this.bindings.engine)));
                }
                render() {
                    var t;
                    let e =
                        null === (t = this.automaticFacetGenerator) || void 0 === t
                            ? void 0
                            : t.state.automaticFacets.map((t) =>
                                  (0, n.h)('atomic-automatic-facet', {
                                      key: t.state.field,
                                      field: t.state.field,
                                      facetId: t.state.field,
                                      facet: t,
                                      searchStatus: this.searchStatus,
                                      isCollapsed: !0,
                                  }),
                              );
                    return (0, n.h)(
                        n.H,
                        {
                            slot: 'automatic-facets',
                            class: 'flex flex-col',
                            style: {
                                gap: 'var(--atomic-refine-modal-facet-margin, 20px)',
                                marginTop: this.isThereStaticFacets
                                    ? 'var(--atomic-refine-modal-facet-margin, 20px)'
                                    : '',
                            },
                        },
                        e,
                    );
                }
            };
            (r([(0, a.I)()], l.prototype, 'bindings', void 0),
                r([(0, a.B)('automaticFacetGenerator')], l.prototype, 'automaticFacetGeneratorState', void 0));
        },
        75291: function (t, e, i) {
            'use strict';
            function n(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function o(t, e, i, n) {
                let o = (a) => {
                    (t.removeEventListener(e, o, n), 'object' == typeof i ? i.handleEvent.call(t, a) : i.call(t, a));
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
            'use strict';
            i.d(e, {
                B: function () {
                    return b;
                },
                H: function () {
                    return r;
                },
                I: function () {
                    return f;
                },
                a: function () {
                    return l;
                },
                b: function () {
                    return d;
                },
            });
            var n = i(5991),
                o = i(75291),
                a = i(66038);
            let r = () => (0, n.h)(n.H, {class: 'atomic-hidden'}),
                l = 'atomic/initializeComponent',
                s = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class c extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of the following elements: ${s.join(', ')}`);
                }
            }
            function d(t) {
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
                h = 'data-atomic-loaded';
            function f({forceUpdate: t} = {}) {
                return (e, i) => {
                    let {
                            componentWillLoad: f,
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
                        (e.setAttribute(u, 'false'), e.setAttribute(h, 'false'));
                        let i = (0, o.b)(l, (e) => {
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
                        if ((e.dispatchEvent(i), !(0, a.c)(e, s.join(', ')))) {
                            this.error = new c(e.nodeName.toLowerCase());
                            return;
                        }
                        return f && f.call(this);
                    }),
                        (e.render = function () {
                            return this.error
                                ? (0, n.h)('atomic-component-error', {element: (0, n.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, n.g)(this).setAttribute(u, 'true'), b && b.call(this))
                                  : (0, n.h)(r, null);
                        }),
                        (e.disconnectedCallback = function () {
                            let t = (0, n.g)(this);
                            (t.setAttribute(u, 'false'), t.setAttribute(h, 'false'), v(), g && g.call(this));
                        }),
                        (e.componentDidRender = function () {
                            let t = (0, n.g)(this);
                            'false' !== t.getAttribute(u) &&
                                (p && p.call(this),
                                'false' === t.getAttribute(h) &&
                                    (t.setAttribute(h, 'true'), d((0, n.g)(this)), m && m.call(this)));
                        }),
                        (e.componentDidLoad = function () {}));
                };
            }
            function b(t, e) {
                return (i, o) => {
                    let {disconnectedCallback: a, initialize: r} = i;
                    ((i.initialize = function () {
                        return (r && r.call(this), r)
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
                                a && a.call(this));
                        }));
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
