'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [75547],
    {
        80421: function (e, t, i) {
            i.d(t, {
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
            var r = i(75291),
                n = i(66038);
            function l(e, t = !1) {
                function i() {
                    let e = (0, r.b)('atomic/accessibility/findAriaLive', {});
                    document.dispatchEvent(e);
                    let {element: t} = e.detail;
                    return t;
                }
                return (r, n) => {
                    let {componentWillRender: l} = r;
                    (Object.defineProperty(r, n, {
                        set: (r) => {
                            var n;
                            null === (n = i()) || void 0 === n || n.updateMessage(e, r, t);
                        },
                    }),
                        (r.componentWillRender = function () {
                            var r;
                            (l && l.call(this), null === (r = i()) || void 0 === r || r.registerRegion(e, t));
                        }));
                };
            }
            function o() {
                return (e, t) => {
                    let {componentWillLoad: i} = e;
                    e.componentWillLoad = function () {
                        let e, r;
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
                                    this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== e &&
                                    ((o = !1), r))
                            ) {
                                let e = r;
                                (0, n.d)().then(() => {
                                    (e.focus(), null == s || s());
                                });
                            }
                        };
                        let c = {
                            setTarget: (e) => {
                                e && ((r = e), a && ((a = !1), c.focus()));
                            },
                            focus: async () => {
                                (await (0, n.d)(), null == r || r.focus(), null == s || s());
                            },
                            focusAfterSearch: () => (
                                (e = this.bindings.store.getUniqueIDFromEngine(this.bindings.engine)),
                                (o = !0),
                                new Promise((e) => (s = e))
                            ),
                            focusOnNextTarget: () => ((a = !0), new Promise((e) => (s = e))),
                            disableForCurrentSearch: () =>
                                this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== e && (o = !1),
                        };
                        this[t] = c;
                    };
                };
            }
            function a(e) {
                var t;
                return null !==
                    (t = (function* e(t) {
                        (function (e) {
                            if ('-1' === e.getAttribute('tabindex')) return !1;
                            if (e.hasAttribute('tabindex') || 'true' === e.getAttribute('contentEditable')) return !0;
                            switch (e.tagName) {
                                case 'A':
                                case 'AREA':
                                    return e.hasAttribute('href');
                                case 'INPUT':
                                case 'SELECT':
                                case 'TEXTAREA':
                                case 'BUTTON':
                                    return !e.hasAttribute('disabled');
                                case 'IFRAME':
                                    return !0;
                                default:
                                    return !1;
                            }
                        })(t) && (yield t);
                        let i = Array.from(t.children);
                        for (let r of (t instanceof HTMLSlotElement
                            ? (i = t.assignedElements())
                            : t.shadowRoot && i.push(...Array.from(t.shadowRoot.children)),
                        i))
                            yield* e(r);
                    })(e).next().value) && void 0 !== t
                    ? t
                    : null;
            }
        },
        75291: function (e, t, i) {
            function r(e, t) {
                return new CustomEvent(e, {detail: t, bubbles: !0, cancelable: !0, composed: !0});
            }
            function n(e, t, i, r) {
                let n = (l) => {
                    (e.removeEventListener(t, n, r), 'object' == typeof i ? i.handleEvent.call(e, l) : i.call(e, l));
                };
                e.addEventListener(t, n, r);
            }
            i.d(t, {
                b: function () {
                    return r;
                },
                l: function () {
                    return n;
                },
            });
        },
        8807: function (e, t, i) {
            i.d(t, {
                B: function () {
                    return p;
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
                    return u;
                },
            });
            var r = i(5991),
                n = i(75291),
                l = i(66038);
            let o = () => (0, r.h)(r.H, {class: 'atomic-hidden'}),
                a = 'atomic/initializeComponent',
                s = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class c extends Error {
                constructor(e) {
                    super(`The "${e}" element must be the child of the following elements: ${s.join(', ')}`);
                }
            }
            function u(e) {
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
            let f = 'data-atomic-rendered',
                d = 'data-atomic-loaded';
            function h({forceUpdate: e} = {}) {
                return (t, i) => {
                    let {
                            componentWillLoad: h,
                            render: p,
                            componentDidRender: g,
                            componentDidLoad: m,
                            disconnectedCallback: y,
                        } = t,
                        x = () => {};
                    if ('bindings' !== i)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${i}"`,
                            t,
                        );
                    ((t.componentWillLoad = function () {
                        let t = (0, r.g)(this);
                        (t.setAttribute(f, 'false'), t.setAttribute(d, 'false'));
                        let i = (0, n.b)(a, (t) => {
                            this.bindings = t;
                            let i = () => (0, r.f)(this);
                            (this.bindings.i18n.on('languageChanged', i),
                                (x = () => this.bindings.i18n.off('languageChanged', i)));
                            try {
                                this.initialize ? (this.initialize(), e && (0, r.f)(this)) : (0, r.f)(this);
                            } catch (e) {
                                this.error = e;
                            }
                        });
                        if ((t.dispatchEvent(i), !(0, l.c)(t, s.join(', ')))) {
                            this.error = new c(t.nodeName.toLowerCase());
                            return;
                        }
                        return h && h.call(this);
                    }),
                        (t.render = function () {
                            return this.error
                                ? (0, r.h)('atomic-component-error', {element: (0, r.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, r.g)(this).setAttribute(f, 'true'), p && p.call(this))
                                  : (0, r.h)(o, null);
                        }),
                        (t.disconnectedCallback = function () {
                            let e = (0, r.g)(this);
                            (e.setAttribute(f, 'false'), e.setAttribute(d, 'false'), x(), y && y.call(this));
                        }),
                        (t.componentDidRender = function () {
                            let e = (0, r.g)(this);
                            'false' !== e.getAttribute(f) &&
                                (g && g.call(this),
                                'false' === e.getAttribute(d) &&
                                    (e.setAttribute(d, 'true'), u((0, r.g)(this)), m && m.call(this)));
                        }),
                        (t.componentDidLoad = function () {}));
                };
            }
            function p(e, t) {
                return (i, n) => {
                    let {disconnectedCallback: l, initialize: o} = i;
                    ((i.initialize = function () {
                        return (o && o.call(this), o)
                            ? this[e]
                                ? (null == t ? void 0 : t.onUpdateCallbackMethod) && !this[t.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${t.onUpdateCallbackMethod}" is not defined`,
                                          i,
                                      )
                                    : void (this.unsubscribeController = this[e].subscribe(() => {
                                          ((this[n] = this[e].state),
                                              (null == t ? void 0 : t.onUpdateCallbackMethod) &&
                                                  this[t.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${e}`,
                                  i,
                              );
                    }),
                        (i.disconnectedCallback = function () {
                            var e;
                            ((0, r.g)(this).isConnected ||
                                null === (e = this.unsubscribeController) ||
                                void 0 === e ||
                                e.call(this),
                                l && l.call(this));
                        }));
                };
            }
        },
        45403: function (e, t, i) {
            i.d(t, {
                L: function () {
                    return n;
                },
            });
            var r = i(5991);
            let n = ({bindings: e, key: t, params: i, count: n}) => {
                let l = (e) => `${e}`,
                    o = (e) => i[e.slice(1)],
                    a = Object.fromEntries(Object.keys(i).map((e) => [e, l(e)])),
                    s = e.i18n.t(t, {interpolation: {escapeValue: !1}, count: n, ...a});
                return (0, r.h)(
                    r.F,
                    null,
                    s.split('\x1d').map((e) => (e.startsWith('\x1a') ? o(e) : e)),
                );
            };
        },
        88485: function (e, t, i) {
            i.d(t, {
                N: function () {
                    return u;
                },
            });
            var r = i(5991),
                n = i(45403);
            let l = `<svg viewBox="0 0 312 312" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<g filter="url(#filter0_b)">
<rect x="156.118" width="220.784" height="220.784" rx="14.7189" transform="rotate(45 156.118 0)" fill="#F6F7F9"/>
</g>
<rect x="60.1178" y="126" width="34" height="9" rx="4.5" fill="#E5E8E8"/>
<rect x="102.118" y="126" width="67" height="9" rx="4.5" fill="#E5E8E8"/>
<rect x="177.118" y="126" width="67" height="9" rx="4.5" fill="#E5E8E8"/>
<rect x="60.1178" y="151" width="162" height="9" rx="4.5" fill="#E5E8E8"/>
<rect x="60.1178" y="176" width="177" height="9" rx="4.5" fill="#E5E8E8"/>
<g filter="url(#filter1_f)">
<path d="M183.857 226.206C179.378 223.774 178.389 217.774 181.85 214.033C184.309 211.374 188.273 210.753 191.427 212.532L247.561 244.198C251.767 246.571 252.551 252.302 249.136 255.717C246.849 258.004 243.331 258.513 240.49 256.97L183.857 226.206Z" fill="#E5E8E8"/>
</g>
<rect x="195.143" y="205.948" width="15.064" height="78.2384" rx="7.53201" transform="rotate(-45 195.143 205.948)" fill="#333357"/>
<g filter="url(#filter2_d)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M161.415 226.595C200.792 226.595 232.713 194.674 232.713 155.298C232.713 115.921 200.792 84 161.415 84C122.039 84 90.1178 115.921 90.1178 155.298C90.1178 194.674 122.039 226.595 161.415 226.595ZM161.441 212.539C193.041 212.539 218.657 186.922 218.657 155.323C218.657 123.724 193.041 98.108 161.441 98.108C129.842 98.108 104.226 123.724 104.226 155.323C104.226 186.922 129.842 212.539 161.441 212.539Z" fill="url(#paint0_linear)"/>
</g>
<g filter="url(#filter3_d)">
<circle cx="161.415" cy="155.298" r="59.6307" fill="url(#paint1_linear)"/>
</g>
<g filter="url(#filter4_i)">
<circle cx="161.441" cy="155.323" r="57.2153" fill="url(#paint2_linear)"/>
</g>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="104" y="98" width="115" height="115">
<circle cx="161.415" cy="155.298" r="57.038" fill="white"/>
</mask>
<g mask="url(#mask0)">
<rect opacity="0.5" x="104.118" y="126" width="37" height="18" rx="8" fill="url(#paint3_linear)"/>
<rect opacity="0.5" x="184.118" y="167" width="37" height="18" rx="8" fill="url(#paint4_linear)"/>
<g opacity="0.6" filter="url(#filter5_f)">
<path d="M179.303 90.5597L187.576 96.3233C187.576 96.3233 140.259 159.434 177.535 239.024C164.157 234.174 126.719 230.494 120.018 222.474C88.6871 131.944 179.303 90.5597 179.303 90.5597Z" fill="url(#paint5_linear)"/>
</g>
<g opacity="0.5" filter="url(#filter6_f)">
<circle cx="197.896" cy="133.778" r="7.77791" fill="white"/>
</g>
<g opacity="0.7" filter="url(#filter7_f)">
<circle cx="207.359" cy="150.241" r="3.2408" fill="white"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_b" x="-3.67968" y="-3.67973" width="319.595" height="319.595" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
</filter>
<filter id="filter1_f" x="171.347" y="190.878" width="88.139" height="88.139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.59264" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter2_d" x="59.0061" y="84" width="204.818" height="206.115" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="32.408"/>
<feGaussianBlur stdDeviation="15.5558"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.320677 0 0 0 0 0.320677 0 0 0 0 0.5875 0 0 0 0.38 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter3_d" x="91.4141" y="85.2963" width="140.002" height="140.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="5.18528"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.320677 0 0 0 0 0.320677 0 0 0 0 0.5875 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter4_i" x="104.226" y="98.108" width="114.431" height="124.801" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="10.3706"/>
<feGaussianBlur stdDeviation="5.83344"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.529306 0 0 0 0 0.529306 0 0 0 0 0.858333 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter5_f" x="93.7083" y="75.6215" width="134.473" height="171.666" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter6_f" x="187.525" y="123.407" width="20.7411" height="20.7411" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.29632" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter7_f" x="201.525" y="144.407" width="11.6669" height="11.6669" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.29632" result="effect1_foregroundBlur"/>
</filter>
<linearGradient id="paint0_linear" x1="106.615" y1="63.4032" x2="289.344" y2="240.521" gradientUnits="userSpaceOnUse">
<stop offset="0.505208" stop-color="#3F3F71"/>
<stop offset="1" stop-color="#5D237D"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="200.305" y1="208.447" x2="121.878" y2="98.259" gradientUnits="userSpaceOnUse">
<stop stop-color="#333357"/>
<stop offset="1" stop-color="#6B6BBD" stop-opacity="0.49"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="116.692" y1="142.334" x2="206.138" y2="195.483" gradientUnits="userSpaceOnUse">
<stop offset="0.0255459" stop-color="white"/>
<stop offset="1" stop-color="#E5E8E8"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="134.811" y1="148.895" x2="127.845" y2="133.378" gradientUnits="userSpaceOnUse">
<stop stop-color="#8787DB" stop-opacity="0.41"/>
<stop offset="1" stop-color="#C5CACF" stop-opacity="0.44"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="214.811" y1="189.895" x2="207.845" y2="174.378" gradientUnits="userSpaceOnUse">
<stop stop-color="#8787DB"/>
<stop offset="1" stop-color="#C5CACF" stop-opacity="0.44"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="164.859" y1="93.962" x2="143.031" y2="190.673" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.198345" stop-color="white" stop-opacity="0.72"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0">
<rect width="312" height="312" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                o = (e) =>
                    (0, r.h)(
                        'span',
                        {
                            class: 'font-bold truncate inline-block align-bottom max-w-full whitespace-normal',
                            part: 'highlight',
                        },
                        (0, r.h)(n.L, {key: 'between-quotations', params: {text: e.content}, bindings: e.bindings}),
                    ),
                a = () =>
                    (0, r.h)('atomic-icon', {
                        part: 'icon',
                        icon: l,
                        class: 'my-6 flex flex-col items-center w-1/2 max-w-lg',
                    }),
                s = (e) => {
                    let {hasQuery: t, query: i} = e.querySummaryState,
                        l = t
                            ? (0, r.h)(n.L, {
                                  bindings: e.bindings,
                                  key: 'no-results-for',
                                  params: {query: (0, r.h)(o, {bindings: e.bindings, content: i})},
                              })
                            : e.bindings.i18n.t('no-results');
                    return (0, r.h)(
                        'div',
                        {class: 'my-2 text-2xl font-medium max-w-full text-center', part: 'no-results'},
                        l,
                    );
                },
                c = (e) =>
                    (0, r.h)(
                        'div',
                        {class: 'my-2 text-lg text-neutral-dark text-center', part: 'search-tips'},
                        e.bindings.i18n.t('search-tips'),
                    ),
                u = (e, t) => {
                    e.setAriaLive(
                        e.searchStatusState.hasResults
                            ? ''
                            : e.querySummaryState.hasQuery
                              ? e.bindings.i18n.t('no-results-for', {
                                    interpolation: {escapeValue: !1},
                                    query: e.querySummaryState.query,
                                })
                              : e.bindings.i18n.t('no-results'),
                    );
                    let {firstSearchExecuted: i, isLoading: n, hasResults: l} = e.searchStatusState;
                    return !i || n || l
                        ? (0, r.h)('span', null)
                        : [
                              (0, r.h)(
                                  'div',
                                  {class: 'flex flex-col items-center h-full w-full text-on-background'},
                                  (0, r.h)(a, null),
                                  (0, r.h)(s, {...e}),
                                  (0, r.h)(c, {...e}),
                                  ...t,
                              ),
                              (0, r.h)('slot', null),
                          ];
                };
        },
    },
]);
