'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [81503],
    {
        80421: function (t, r, e) {
            e.d(r, {
                A: function () {
                    return a;
                },
                F: function () {
                    return n;
                },
                g: function () {
                    return l;
                },
            });
            var i = e(75291),
                o = e(66038);
            function a(t, r = !1) {
                function e() {
                    let t = (0, i.b)('atomic/accessibility/findAriaLive', {});
                    document.dispatchEvent(t);
                    let {element: r} = t.detail;
                    return r;
                }
                return (i, o) => {
                    let {componentWillRender: a} = i;
                    (Object.defineProperty(i, o, {
                        set: (i) => {
                            var o;
                            null === (o = e()) || void 0 === o || o.updateMessage(t, i, r);
                        },
                    }),
                        (i.componentWillRender = function () {
                            var i;
                            (a && a.call(this), null === (i = e()) || void 0 === i || i.registerRegion(t, r));
                        }));
                };
            }
            function n() {
                return (t, r) => {
                    let {componentWillLoad: e} = t;
                    t.componentWillLoad = function () {
                        let t, i;
                        e && e.call(this);
                        let {componentDidRender: a} = this,
                            n = !1,
                            l = !1,
                            s = null;
                        this.componentDidRender = function () {
                            if (
                                (a && a.call(this),
                                this.bindings &&
                                    n &&
                                    this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t &&
                                    ((n = !1), i))
                            ) {
                                let t = i;
                                (0, o.d)().then(() => {
                                    (t.focus(), null == s || s());
                                });
                            }
                        };
                        let c = {
                            setTarget: (t) => {
                                t && ((i = t), l && ((l = !1), c.focus()));
                            },
                            focus: async () => {
                                (await (0, o.d)(), null == i || i.focus(), null == s || s());
                            },
                            focusAfterSearch: () => (
                                (t = this.bindings.store.getUniqueIDFromEngine(this.bindings.engine)),
                                (n = !0),
                                new Promise((t) => (s = t))
                            ),
                            focusOnNextTarget: () => ((l = !0), new Promise((t) => (s = t))),
                            disableForCurrentSearch: () =>
                                this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t && (n = !1),
                        };
                        this[r] = c;
                    };
                };
            }
            function l(t) {
                var r;
                return null !==
                    (r = (function* t(r) {
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
                        })(r) && (yield r);
                        let e = Array.from(r.children);
                        for (let i of (r instanceof HTMLSlotElement
                            ? (e = r.assignedElements())
                            : r.shadowRoot && e.push(...Array.from(r.shadowRoot.children)),
                        e))
                            yield* t(i);
                    })(t).next().value) && void 0 !== r
                    ? r
                    : null;
            }
        },
        81503: function (t, r, e) {
            (e.r(r),
                e.d(r, {
                    atomic_quickview: function () {
                        return m;
                    },
                }));
            var i = e(5991),
                o = e(98214),
                a = e(64977),
                n = e(80603),
                l = e(80421),
                s = e(8807),
                c = e(2108),
                d = e(18043);
            (e(66038), e(87856));
            var u = function (t, r, e, i) {
                var o,
                    a = arguments.length,
                    n = a < 3 ? r : null === i ? (i = Object.getOwnPropertyDescriptor(r, e)) : i;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    n = Reflect.decorate(t, r, e, i);
                else
                    for (var l = t.length - 1; l >= 0; l--)
                        (o = t[l]) && (n = (a < 3 ? o(n) : a > 3 ? o(r, e, n) : o(r, e)) || n);
                return (a > 3 && n && Object.defineProperty(r, e, n), n);
            };
            let m = class {
                constructor(t) {
                    ((0, i.r)(this, t), (this.sandbox = 'allow-popups allow-top-navigation allow-same-origin'));
                }
                onNextQuickview(t) {
                    (t.stopImmediatePropagation(), this.quickview.next());
                }
                onPreviousQuickview(t) {
                    (t.stopImmediatePropagation(), this.quickview.previous());
                }
                initialize() {
                    ((this.quickview = (0, a.n)(this.bindings.engine, {options: {result: this.result}})),
                        new o.S({sandbox: new o.a({required: !0, regex: /allow-same-origin/})}).validate({
                            sandbox: this.sandbox,
                        }));
                }
                addQuickviewModalIfNeeded() {
                    if (this.quickviewModalRef) return;
                    let t = this.bindings.interfaceElement.querySelector('atomic-quickview-modal');
                    if (t) {
                        this.quickviewModalRef = t;
                        return;
                    }
                    ((this.quickviewModalRef = document.createElement('atomic-quickview-modal')),
                        this.quickviewModalRef.setAttribute('sandbox', this.sandbox),
                        this.bindings.interfaceElement.appendChild(this.quickviewModalRef));
                }
                updateModalContent() {
                    this.quickviewModalRef &&
                        this.quickview.state.content &&
                        ((this.quickviewModalRef.content = this.quickview.state.content),
                        (this.quickviewModalRef.result = this.result),
                        (this.quickviewModalRef.total = this.quickviewState.totalResults),
                        (this.quickviewModalRef.current = this.quickviewState.currentResult),
                        (this.quickviewModalRef.modalCloseCallback = () => this.buttonFocusTarget.focus()),
                        (this.quickviewAriaMessage = this.quickviewState.isLoading
                            ? this.bindings.i18n.t('quickview-loading')
                            : this.bindings.i18n.t('quickview-loaded', {
                                  first: this.quickviewState.currentResult,
                                  last: this.quickviewState.totalResults,
                                  title: this.result.title,
                              })));
                }
                onClick(t) {
                    (null == t || t.stopPropagation(), this.quickview.fetchResultContent());
                }
                render() {
                    if (
                        (this.addQuickviewModalIfNeeded(),
                        this.updateModalContent(),
                        this.quickviewState.resultHasPreview)
                    )
                        return (0, i.h)(
                            c.B,
                            {
                                title: this.bindings.i18n.t('quickview'),
                                style: 'outline-primary',
                                class: 'p-2',
                                onClick: (t) => this.onClick(t),
                                ref: this.buttonFocusTarget.setTarget,
                            },
                            (0, i.h)('atomic-icon', {class: 'w-5', icon: n.Q}),
                        );
                }
            };
            (u([(0, s.I)()], m.prototype, 'bindings', void 0),
                u([(0, d.R)()], m.prototype, 'result', void 0),
                u([(0, l.F)()], m.prototype, 'buttonFocusTarget', void 0),
                u([(0, s.B)('quickview')], m.prototype, 'quickviewState', void 0),
                u([(0, l.A)('quickview')], m.prototype, 'quickviewAriaMessage', void 0),
                (m.style =
                    "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--atomic-font-family);font-feature-settings:normal;font-variation-settings:normal;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}:host{display:block;--tw-ring-inset:var(--tw-empty,  )}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);font-weight:var(--atomic-font-normal)}:host(.atomic-hidden){display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.\\!link{color:var(--atomic-primary)}.\\!link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link{color:var(--atomic-primary)}.link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.input-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background)}.input-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:hover{border-color:var(--atomic-primary-light)}.input-primary.focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.input-primary:focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-radio::before{--tw-content:attr(value);content:var(--tw-content)}.btn-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-primary);color:var(--atomic-on-primary)}.btn-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:hover{background-color:var(--atomic-primary-light)}.btn-primary.focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:disabled{cursor:not-allowed;background-color:var(--atomic-disabled)}.btn-outline-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-outline-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:hover{border-color:var(--atomic-primary-light);color:var(--atomic-primary-light)}.btn-outline-primary.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-neutral)}.btn-text-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-text-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:hover{background-color:var(--atomic-neutral-light)}.btn-text-primary.focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-primary:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-neutral{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:hover{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral.focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral:focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-transparent{color:var(--atomic-on-background)}.btn-text-transparent.focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:hover{color:var(--atomic-primary-light)}.btn-text-transparent.focus-visible{color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{color:var(--atomic-primary-light)}.btn-square-neutral{border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-square-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-square-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-square-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-pill{border-radius:var(--atomic-border-radius-xl)}.btn-page{display:grid;place-items:center;border-width:0px;font-size:var(--atomic-text-lg)}.btn-page:hover{border-width:1px}.btn-page.focus-visible{border-width:1px}.btn-page:focus-visible{border-width:1px}.btn-page.selected{border-width:2px;border-color:var(--atomic-primary);font-weight:var(--atomic-font-bold)}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-0.5rem}.-top-2{top:-0.5rem}.bottom-0{bottom:0px}.bottom-px{bottom:1px}.left-0{left:0px}.right-0{right:0px}.right-px{right:1px}.top-0{top:0px}.top-\\[50\\%\\]{top:50%}.top-full{top:100%}.top-px{top:1px}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.z-\\[9999\\]{z-index:9999}.col-span-2{grid-column:span 2 / span 2}.m-0{margin:0px}.m-2{margin:0.5rem}.-my-px{margin-top:-1px;margin-bottom:-1px}.mx-0{margin-left:0px;margin-right:0px}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem}.mx-1{margin-left:0.25rem;margin-right:0.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mr-px{margin-right:-1px}.mb-0{margin-bottom:0px}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:0.25rem}.ml-2{margin-left:0.5rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.mr-0{margin-right:0px}.mr-0\\.5{margin-right:0.125rem}.mr-1{margin-right:0.25rem}.mr-1\\.5{margin-right:0.375rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-6{margin-right:1.5rem}.mt-0{margin-top:0px}.mt-1{margin-top:0.25rem}.mt-1\\.5{margin-top:0.375rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:0.5rem}.mt-2\\.5{margin-top:0.625rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-px{margin-top:1px}.box-border{box-sizing:border-box}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-1{height:0.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-2{height:0.5rem}.h-2\\.5{height:0.625rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-\\[2\\.6rem\\]{height:2.6rem}.h-auto{height:auto}.h-full{height:100%}.min-h-\\[2\\.5rem\\]{min-height:2.5rem}.min-h-\\[40px\\]{min-height:40px}.w-0{width:0px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-2{width:0.5rem}.w-2\\.5{width:0.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:0.75rem}.w-3\\.5{width:0.875rem}.w-3\\/5{width:60%}.w-32{width:8rem}.w-4{width:1rem}.w-44{width:11rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[2\\.6rem\\]{width:2.6rem}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[2\\.5rem\\]{min-width:2.5rem}.min-w-\\[6rem\\]{min-width:6rem}.max-w-\\[15rem\\]{max-width:15rem}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-8{flex-basis:2rem}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes scaleUp{0%{transform:scale(0.7) translateY(150vh);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}.animate-scaleUpModal{animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards}@keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}.animate-slideDownModal{animation:slideDown .5s linear forwards}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-\\[min-content_auto\\]{grid-template-columns:min-content auto}.grid-cols-min-1fr{grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-items-center{place-items:center}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-0\\.5{gap:0.125rem}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem}.gap-x-1\\.5{-moz-column-gap:0.375rem;column-gap:0.375rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-0{row-gap:0px}.gap-y-0\\.5{row-gap:0.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.375rem * var(--tw-space-x-reverse));margin-left:calc(0.375rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-neutral>:not([hidden])~:not([hidden]){border-color:var(--atomic-neutral)}.self-start{align-self:flex-start}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-scroll{overflow-x:scroll}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:var(--atomic-border-radius)}.rounded-\\[100\\%\\]{border-radius:100%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0px}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-r-md{border-top-right-radius:var(--atomic-border-radius-md);border-bottom-right-radius:var(--atomic-border-radius-md)}.border{border-width:1px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-neutral{border-color:var(--atomic-neutral)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.border-primary{border-color:var(--atomic-primary)}.bg-\\[\\#F1F2FF\\]{--tw-bg-opacity:1;background-color:rgb(241 242 255 / var(--tw-bg-opacity))}.bg-background{background-color:var(--atomic-background)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-primary{background-color:var(--atomic-primary)}.bg-transparent{background-color:transparent}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-background-60{--tw-gradient-from:var(--atomic-background) 60% var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.fill-current{fill:currentColor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-\\[0\\.625rem\\]{padding-top:0.625rem;padding-bottom:0.625rem}.pb-1{padding-bottom:0.25rem}.pb-3{padding-bottom:0.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-0{padding-left:0px}.pl-1{padding-left:0.25rem}.pl-10{padding-left:2.5rem}.pl-3{padding-left:0.75rem}.pl-9{padding-left:2.25rem}.pr-2{padding-right:0.5rem}.pr-24{padding-right:6rem}.pr-6{padding-right:1.5rem}.pt-0{padding-top:0px}.pt-0\\.5{padding-top:0.125rem}.text-left{text-align:left}.text-center{text-align:center}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.text-2xl{font-size:var(--atomic-text-2xl)}.text-base{font-size:var(--atomic-text-base)}.text-lg{font-size:var(--atomic-text-lg)}.text-sm{font-size:var(--atomic-text-sm)}.text-xl{font-size:var(--atomic-text-xl)}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:var(--atomic-font-bold)}.font-medium{font-weight:500}.font-normal{font-weight:var(--atomic-font-normal)}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-10{line-height:2.5rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-8{line-height:2rem}.text-\\[\\#54698D\\]{--tw-text-opacity:1;color:rgb(84 105 141 / var(--tw-text-opacity))}.text-error{color:var(--atomic-error)}.text-inherit{color:inherit}.text-neutral{color:var(--atomic-neutral)}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-on-background{color:var(--atomic-on-background)}.text-on-primary{color:var(--atomic-on-primary)}.text-primary{color:var(--atomic-primary)}.text-success{color:var(--atomic-success)}.text-transparent{color:transparent}.placeholder-neutral-dark::-moz-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark::placeholder{color:var(--atomic-neutral-dark)}.opacity-0{opacity:0}.opacity-50{opacity:0.5}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--atomic-primary);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-neutral{outline-color:var(--atomic-neutral)}.outline-primary{outline-color:var(--atomic-primary)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.ring-ring-primary{--tw-ring-color:var(--atomic-ring-primary)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-visi-opacity{transition-property:visibility, opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-outline.focus-visible{outline:2px solid transparent;outline-offset:2px}.no-outline:focus-visible{outline:2px solid transparent;outline-offset:2px}.accessibility-only{position:absolute;display:block;height:0;overflow:hidden;margin:0}.text-inherit{font-size:inherit}.cursor-inherit{cursor:inherit}.shadow-lg{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}.ripple{position:absolute;pointer-events:none;transform:scale(0);border-radius:50%;animation:ripple var(--animation-duration) linear}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@keyframes ripple{to{transform:scale(4);opacity:0}}.focus-within\\:border-disabled:focus-within{border-color:var(--atomic-disabled)}.focus-within\\:border-primary:focus-within{border-color:var(--atomic-primary)}.focus-within\\:ring:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-neutral:focus-within{--tw-ring-color:var(--atomic-neutral)}.focus-within\\:ring-ring-primary:focus-within{--tw-ring-color:var(--atomic-ring-primary)}.hover\\:border-primary-light:hover{border-color:var(--atomic-primary-light)}.hover\\:bg-neutral-light:hover{background-color:var(--atomic-neutral-light)}.hover\\:bg-primary-light:hover{background-color:var(--atomic-primary-light)}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.focus-visible\\:border-primary-light.focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:border-primary-light:focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:bg-neutral-light.focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-neutral-light:focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-primary-light.focus-visible{background-color:var(--atomic-primary-light)}.focus-visible\\:bg-primary-light:focus-visible{background-color:var(--atomic-primary-light)}.group:hover .group-hover\\:text-primary{color:var(--atomic-primary)}.group:hover .group-hover\\:text-primary-light{color:var(--atomic-primary-light)}.group:focus .group-focus\\:text-primary{color:var(--atomic-primary)}.group:focus .group-focus\\:text-primary-light{color:var(--atomic-primary-light)}.group.focus-visible .group-focus-visible\\:text-primary{color:var(--atomic-primary)}.group:focus-visible .group-focus-visible\\:text-primary{color:var(--atomic-primary)}"));
        },
        98214: function (t, r, e) {
            e.d(r, {
                B: function () {
                    return c;
                },
                N: function () {
                    return s;
                },
                S: function () {
                    return o;
                },
                a: function () {
                    return u;
                },
                b: function () {
                    return n;
                },
                c: function () {
                    return l;
                },
                i: function () {
                    return m;
                },
            });
            var i = class extends Error {
                    constructor(t) {
                        (super(t), (this.name = 'SchemaValidationError'));
                    }
                },
                o = class {
                    constructor(t) {
                        this.definition = t;
                    }
                    validate(t = {}, r = '') {
                        let e = {...this.default, ...t},
                            o = [];
                        for (let t in this.definition) {
                            let r = this.definition[t].validate(e[t]);
                            r && o.push(`${t}: ${r}`);
                        }
                        if (o.length)
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
                                 */ (function (t, r) {
                                    let e = `
  The following properties are invalid:

    ${t.join('\n	')}
  
  ${r}
  `;
                                    return new i(e);
                                })(o, r)
                            );
                        return e;
                    }
                    get default() {
                        let t = {};
                        for (let r in this.definition) {
                            let e = this.definition[r].default;
                            void 0 !== e && (t[r] = e);
                        }
                        return t;
                    }
                },
                a = class {
                    constructor(t = {}) {
                        this.baseConfig = t;
                    }
                    validate(t) {
                        return this.baseConfig.required && l(t) ? 'value is required.' : null;
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
            function n(t) {
                return void 0 === t;
            }
            function l(t) {
                return n(t) || null === t;
            }
            var s = class {
                    constructor(t = {}) {
                        ((this.config = t), (this.value = new a(t)));
                    }
                    validate(t) {
                        let r = this.value.validate(t);
                        return (
                            r ||
                            (n(t) || ('number' == typeof t && !isNaN(t))
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
                c = class {
                    constructor(t = {}) {
                        this.value = new a(t);
                    }
                    validate(t) {
                        let r = this.value.validate(t);
                        return r || (n(t) || 'boolean' == typeof t ? null : 'value is not a boolean.');
                    }
                    get default() {
                        return this.value.default;
                    }
                    get required() {
                        return this.value.required;
                    }
                },
                d =
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
                u = class {
                    constructor(t = {}) {
                        ((this.config = {emptyAllowed: !0, url: !1, ...t}), (this.value = new a(this.config)));
                    }
                    validate(t) {
                        let {emptyAllowed: r, url: e, regex: i, constrainTo: o} = this.config,
                            a = this.value.validate(t);
                        if (a) return a;
                        if (n(t)) return null;
                        if ('[object String]' !== Object.prototype.toString.call(t)) return 'value is not a string.';
                        if (!r && !t.length) return 'value is an empty string.';
                        if (e && !d.test(t)) return 'value is not a valid URL.';
                        if (i && !i.test(t)) return `value did not match provided regex ${i}`;
                        if (o && !o.includes(t)) {
                            let t = o.join(', ');
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
            function m(t) {
                return Array.isArray(t);
            }
        },
        2108: function (t, r, e) {
            e.d(r, {
                B: function () {
                    return n;
                },
            });
            var i = e(5991),
                o = e(60375),
                a = e(35126);
            let n = (t, r) => {
                let e = (0, a.g)(t.style),
                    n = (0, a.a)(t.style),
                    l = {
                        class: t.class ? `${n} ${t.class}` : n,
                        part: t.part,
                        onClick: t.onClick,
                        title: t.title,
                        type: t.type,
                        role: t.role,
                        'aria-label': t.ariaLabel,
                        'aria-expanded': t.ariaExpanded,
                        'aria-pressed': t.ariaPressed,
                        'aria-checked': t.ariaChecked,
                        'aria-current': t.ariaCurrent,
                        'aria-controls': t.ariaControls,
                        'aria-hidden': t.ariaHidden,
                        disabled: t.disabled,
                        ref(r) {
                            var e;
                            (t.form && (null == r || r.setAttribute('form', t.form)),
                                t.ariaHidden && (null == r || r.setAttribute('aria-hidden', t.ariaHidden)),
                                t.tabIndex && (null == r || r.setAttribute('tabindex', t.tabIndex)),
                                null === (e = t.ref) || void 0 === e || e.call(t, r));
                        },
                    };
                return (0, i.h)(
                    'button',
                    {...l, onMouseDown: (t) => (0, o.c)(t, {color: e})},
                    t.text ? (0, i.h)('span', {class: 'truncate'}, t.text) : null,
                    r,
                );
            };
        },
        35126: function (t, r, e) {
            function i(t) {
                switch (t) {
                    case 'primary':
                        return 'btn-primary';
                    case 'outline-primary':
                        return 'btn-outline-primary';
                    case 'outline-neutral':
                        return 'btn-outline-neutral';
                    case 'outline-bg-neutral':
                        return 'btn-outline-bg-neutral';
                    case 'text-primary':
                        return 'btn-text-primary';
                    case 'text-neutral':
                        return 'btn-text-neutral';
                    case 'text-transparent':
                        return 'btn-text-transparent';
                    case 'square-neutral':
                        return 'btn-square-neutral';
                }
            }
            function o(t) {
                switch (t) {
                    case 'primary':
                        return 'primary';
                    case 'text-transparent':
                        return 'neutral-light';
                    default:
                        return 'neutral';
                }
            }
            e.d(r, {
                a: function () {
                    return i;
                },
                g: function () {
                    return o;
                },
            });
        },
        75291: function (t, r, e) {
            function i(t, r) {
                return new CustomEvent(t, {detail: r, bubbles: !0, cancelable: !0, composed: !0});
            }
            function o(t, r, e, i) {
                let o = (a) => {
                    (t.removeEventListener(r, o, i), 'object' == typeof e ? e.handleEvent.call(t, a) : e.call(t, a));
                };
                t.addEventListener(r, o, i);
            }
            e.d(r, {
                b: function () {
                    return i;
                },
                l: function () {
                    return o;
                },
            });
        },
        8807: function (t, r, e) {
            e.d(r, {
                B: function () {
                    return g;
                },
                H: function () {
                    return n;
                },
                I: function () {
                    return p;
                },
                a: function () {
                    return l;
                },
                b: function () {
                    return d;
                },
            });
            var i = e(5991),
                o = e(75291),
                a = e(66038);
            let n = () => (0, i.h)(i.H, {class: 'atomic-hidden'}),
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
                            var r;
                            return null === (r = window.applyFocusVisiblePolyfill) || void 0 === r
                                ? void 0
                                : r.call(window, t.shadowRoot);
                        },
                        {once: !0},
                    );
                }
            }
            let u = 'data-atomic-rendered',
                m = 'data-atomic-loaded';
            function p({forceUpdate: t} = {}) {
                return (r, e) => {
                    let {
                            componentWillLoad: p,
                            render: g,
                            componentDidRender: w,
                            componentDidLoad: h,
                            disconnectedCallback: f,
                        } = r,
                        b = () => {};
                    if ('bindings' !== e)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${e}"`,
                            r,
                        );
                    ((r.componentWillLoad = function () {
                        let r = (0, i.g)(this);
                        (r.setAttribute(u, 'false'), r.setAttribute(m, 'false'));
                        let e = (0, o.b)(l, (r) => {
                            this.bindings = r;
                            let e = () => (0, i.f)(this);
                            (this.bindings.i18n.on('languageChanged', e),
                                (b = () => this.bindings.i18n.off('languageChanged', e)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, i.f)(this)) : (0, i.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((r.dispatchEvent(e), !(0, a.c)(r, s.join(', ')))) {
                            this.error = new c(r.nodeName.toLowerCase());
                            return;
                        }
                        return p && p.call(this);
                    }),
                        (r.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(u, 'true'), g && g.call(this))
                                  : (0, i.h)(n, null);
                        }),
                        (r.disconnectedCallback = function () {
                            let t = (0, i.g)(this);
                            (t.setAttribute(u, 'false'), t.setAttribute(m, 'false'), b(), f && f.call(this));
                        }),
                        (r.componentDidRender = function () {
                            let t = (0, i.g)(this);
                            'false' !== t.getAttribute(u) &&
                                (w && w.call(this),
                                'false' === t.getAttribute(m) &&
                                    (t.setAttribute(m, 'true'), d((0, i.g)(this)), h && h.call(this)));
                        }),
                        (r.componentDidLoad = function () {}));
                };
            }
            function g(t, r) {
                return (e, o) => {
                    let {disconnectedCallback: a, initialize: n} = e;
                    ((e.initialize = function () {
                        return (n && n.call(this), n)
                            ? this[t]
                                ? (null == r ? void 0 : r.onUpdateCallbackMethod) && !this[r.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${r.onUpdateCallbackMethod}" is not defined`,
                                          e,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[o] = this[t].state),
                                              (null == r ? void 0 : r.onUpdateCallbackMethod) &&
                                                  this[r.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${t}`,
                                  e,
                              );
                    }),
                        (e.disconnectedCallback = function () {
                            var t;
                            ((0, i.g)(this).isConnected ||
                                null === (t = this.unsubscribeController) ||
                                void 0 === t ||
                                t.call(this),
                                a && a.call(this));
                        }));
                };
            }
        },
        80603: function (t, r, e) {
            e.d(r, {
                Q: function () {
                    return i;
                },
            });
            let i =
                '<svg focusable="false" enable-background="new 0 0 20 12" viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quickview"><title>Quickview</title><g fill="currentColor"><path d="m10 4.3c-1 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7 1 0 1.7-.8 1.7-1.7 0-1-.7-1.7-1.7-1.7m0 4.7c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3"/><path d="m19.8 6.4v-.001c.069-.117.109-.253.109-.399s-.04-.282-.109-.399v-.001c-.005-.008.005.007 0 0-2.203-3.473-5.917-5.6-9.8-5.6-3.884 0-7.655 2.091-9.8 5.602l0 0c-.069.117-.109.253-.109.398s.04.281.109.398c0 0-.001-.002 0 0 2.203 3.475 5.916 5.602 9.8 5.602 3.883 0 7.597-2.127 9.8-5.6.005-.007-.005.008 0 0zm-9.8 4.1c-3.236 0-6.28-1.635-8.189-4.339-.067-.095-.067-.228-.002-.324 1.908-2.797 4.953-4.337 8.191-4.337 3.235 0 6.278 1.634 8.187 4.337.068.096.068.231 0 .327-1.909 2.702-4.952 4.336-8.187 4.336z"/></g></svg>';
        },
        18043: function (t, r, e) {
            e.d(r, {
                C: function () {
                    return u;
                },
                I: function () {
                    return l;
                },
                R: function () {
                    return n;
                },
                a: function () {
                    return m;
                },
            });
            var i = e(5991),
                o = e(75291);
            e(66038);
            class a extends Error {
                constructor(t) {
                    super(`The "${t}" element must be the child of an "atomic-result" element.`);
                }
            }
            function n(t = {folded: !1}) {
                return (r, e) => {
                    let {connectedCallback: n, componentWillRender: l, render: c} = r;
                    ((r.connectedCallback = function () {
                        let r = (0, i.g)(this),
                            l = (0, o.b)(s, (r) => {
                                t.folded
                                    ? d(r)
                                        ? (this[e] = r)
                                        : (this[e] = {children: [], result: r})
                                    : (this[e] = d(r) ? r.result : r);
                            }),
                            c = r.dispatchEvent(l);
                        if (c) {
                            this.error = new a(r.nodeName.toLowerCase());
                            return;
                        }
                        return n && n.call(this);
                    }),
                        (r.componentWillRender = function () {
                            if (!this.error) return l && l.call(this);
                        }),
                        (r.render = function () {
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
                            return c && c.call(this);
                        }));
                };
            }
            function l() {
                return (t, r) => {
                    let {connectedCallback: e} = t;
                    t.connectedCallback = function () {
                        let t = (0, i.g)(this),
                            a = (0, o.b)(c, (t) => {
                                this[r] = t;
                            });
                        return (t.dispatchEvent(a), e && e.call(this));
                    };
                };
            }
            let s = 'atomic/resolveResult',
                c = 'atomic/resolveInteractiveResult';
            function d(t) {
                return 'children' in t;
            }
            function u() {
                return (t, r) => {
                    let {componentWillRender: e} = t;
                    t.componentWillRender = function () {
                        let t = (0, i.g)(this),
                            a = (0, o.b)('atomic/resolveChildTemplates', (t) => {
                                this.resultTemplateProvider || (this[r] = t);
                            }),
                            n = t.dispatchEvent(a);
                        if (n) {
                            this[r] = null;
                            return;
                        }
                        return e && e.call(this);
                    };
                };
            }
            function m() {
                return (t, r) => {
                    let {componentWillRender: e} = t;
                    t.componentWillRender = function () {
                        let t = (0, i.g)(this),
                            a = (0, o.b)('atomic/resolveResultDisplayConfig', (t) => {
                                this[r] = t;
                            }),
                            n = t.dispatchEvent(a);
                        if (!n) return e && e.call(this);
                    };
                };
            }
        },
        60375: function (t, r, e) {
            e.d(r, {
                c: function () {
                    return n;
                },
            });
            var i = e(75291);
            let o = 'ripple';
            function a(t) {
                'static' === getComputedStyle(t).position && t.classList.add('ripple-relative');
            }
            function n(t, r) {
                var e;
                let i = null !== (e = r.parent) && void 0 !== e ? e : t.currentTarget,
                    n = i.getElementsByClassName(o)[0];
                (n && n.remove(), i.classList.add('ripple-parent'), a(i), Array.from(i.children).forEach(a));
                let s = document.createElement('span');
                (s.classList.add(o), (s.style.backgroundColor = `var(--atomic-${r.color})`), s.setAttribute('part', o));
                let c = Math.max(i.clientWidth, i.clientHeight),
                    d = c / 2,
                    u = 129.21 * Math.cbrt(d),
                    {top: m, left: p} = i.getBoundingClientRect();
                ((s.style.width = s.style.height = `${c}px`),
                    (s.style.left = `${t.clientX - (p + d)}px`),
                    (s.style.top = `${t.clientY - (m + d)}px`),
                    s.style.setProperty('--animation-duration', `${u}ms`),
                    i.prepend(s),
                    l(s, u));
            }
            async function l(t, r) {
                ((0, i.l)(t, 'animationend', () => {
                    t && t.remove();
                }),
                    setTimeout(() => (null == t ? void 0 : t.remove()), r + 0.1 * r));
            }
        },
    },
]);
