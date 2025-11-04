'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [30770],
    {
        80421: function (t, r, e) {
            e.d(r, {
                A: function () {
                    return o;
                },
                F: function () {
                    return n;
                },
                g: function () {
                    return l;
                },
            });
            var i = e(75291),
                a = e(66038);
            function o(t, r = !1) {
                function e() {
                    let t = (0, i.b)('atomic/accessibility/findAriaLive', {});
                    document.dispatchEvent(t);
                    let {element: r} = t.detail;
                    return r;
                }
                return (i, a) => {
                    let {componentWillRender: o} = i;
                    (Object.defineProperty(i, a, {
                        set: (i) => {
                            var a;
                            null === (a = e()) || void 0 === a || a.updateMessage(t, i, r);
                        },
                    }),
                        (i.componentWillRender = function () {
                            var i;
                            (o && o.call(this), null === (i = e()) || void 0 === i || i.registerRegion(t, r));
                        }));
                };
            }
            function n() {
                return (t, r) => {
                    let {componentWillLoad: e} = t;
                    t.componentWillLoad = function () {
                        let t, i;
                        e && e.call(this);
                        let {componentDidRender: o} = this,
                            n = !1,
                            l = !1,
                            s = null;
                        this.componentDidRender = function () {
                            if (
                                (o && o.call(this),
                                this.bindings &&
                                    n &&
                                    this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !== t &&
                                    ((n = !1), i))
                            ) {
                                let t = i;
                                (0, a.d)().then(() => {
                                    (t.focus(), null == s || s());
                                });
                            }
                        };
                        let c = {
                            setTarget: (t) => {
                                t && ((i = t), l && ((l = !1), c.focus()));
                            },
                            focus: async () => {
                                (await (0, a.d)(), null == i || i.focus(), null == s || s());
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
        30770: function (t, r, e) {
            (e.r(r),
                e.d(r, {
                    atomic_breadbox: function () {
                        return m;
                    },
                }));
            var i = e(5991),
                a = e(64977),
                o = e(71343),
                n = e(80421),
                l = e(78681),
                s = e(8807),
                c = e(2108);
            (e(66038), e(87856));
            var d = function (t, r, e, i) {
                var a,
                    o = arguments.length,
                    n = o < 3 ? r : null === i ? (i = Object.getOwnPropertyDescriptor(r, e)) : i;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    n = Reflect.decorate(t, r, e, i);
                else
                    for (var l = t.length - 1; l >= 0; l--)
                        (a = t[l]) && (n = (o < 3 ? a(n) : o > 3 ? a(r, e, n) : a(r, e)) || n);
                return (o > 3 && n && Object.defineProperty(r, e, n), n);
            };
            let m = class {
                constructor(t) {
                    ((0, i.r)(this, t),
                        (this.lastRemovedBreadcrumbIndex = 0),
                        (this.numberOfBreadcrumbs = 0),
                        (this.numberOfCollapsedBreadcrumbs = 0),
                        (this.isCollapsed = !0));
                }
                initialize() {
                    ((this.breadcrumbManager = (0, a.Q)(this.bindings.engine)),
                        (this.facetManager = (0, a.N)(this.bindings.engine)),
                        window.ResizeObserver &&
                            ((this.resizeObserver = new ResizeObserver(() => this.adaptBreadcrumbs())),
                            this.resizeObserver.observe(this.host.parentElement)));
                }
                disconnectedCallback() {
                    var t;
                    null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
                }
                get breadcrumbs() {
                    return Array.from(this.host.shadowRoot.querySelectorAll('li.breadcrumb'));
                }
                hide(t) {
                    t.style.display = 'none';
                }
                show(t) {
                    t.style.display = '';
                }
                showAllBreadcrumbs() {
                    this.breadcrumbs.forEach((t) => this.show(t));
                }
                hideOverflowingBreadcrumbs() {
                    let t = 0;
                    for (let r = this.breadcrumbs.length - 1; this.isOverflowing && r >= 0; r--)
                        (this.hide(this.breadcrumbs[r]), t++);
                    this.updateShowMoreValue(t);
                }
                updateShowLessDisplay() {
                    (this.show(this.showLess), 0 === this.showLess.offsetTop && this.hide(this.showLess));
                }
                adaptBreadcrumbs() {
                    if (this.breadcrumbs.length) {
                        if ((this.showAllBreadcrumbs(), !this.isCollapsed)) {
                            this.updateShowLessDisplay();
                            return;
                        }
                        (this.updateShowMoreValue(this.breadcrumbs.length), this.hideOverflowingBreadcrumbs());
                    }
                }
                get isOverflowing() {
                    let t = this.host.shadowRoot.querySelector('ul');
                    return !!t && t.scrollWidth > t.clientWidth;
                }
                limitPath(t) {
                    if (t.length <= 3) return t.join(' / ');
                    let r = [t[0], '...', ...t.slice(-2)];
                    return r.join(' / ');
                }
                renderBreadcrumb(t, r, e) {
                    var a;
                    let n = Array.isArray(t.formattedValue) ? t.formattedValue.join(' / ') : t.formattedValue,
                        l = Array.isArray(t.formattedValue) ? this.limitPath(t.formattedValue) : t.formattedValue,
                        s = `${t.label}: ${n}`,
                        d = 1 === e;
                    return (0, i.h)(
                        'li',
                        {class: 'breadcrumb', key: l},
                        (0, i.h)(
                            c.B,
                            {
                                part: 'breadcrumb-button',
                                style: 'outline-bg-neutral',
                                class: 'py-2 px-3 flex items-center btn-pill group',
                                title: s,
                                ariaLabel: this.bindings.i18n.t('remove-filter-on', {value: s}),
                                onClick: () => {
                                    var e;
                                    (d
                                        ? null === (e = this.bindings.store.state.resultList) ||
                                          void 0 === e ||
                                          e.focusOnFirstResultAfterNextSearch()
                                        : this.numberOfBreadcrumbs > 1 &&
                                          this.breadcrumbRemovedFocus.focusAfterSearch(),
                                        (this.lastRemovedBreadcrumbIndex = r),
                                        t.deselect());
                                },
                                ref: (t) => {
                                    (this.lastRemovedBreadcrumbIndex === r && this.breadcrumbRemovedFocus.setTarget(t),
                                        this.firstExpandedBreadcrumbIndex === r &&
                                            this.breadcrumbShowMoreFocus.setTarget(t));
                                },
                            },
                            (0, i.h)(
                                'span',
                                {
                                    part: 'breadcrumb-label',
                                    class: 'max-w-snippet truncate text-neutral-dark mr-0.5 group-hover:text-primary group-focus-visible:text-primary',
                                },
                                this.bindings.i18n.t('with-colon', {text: t.label}),
                            ),
                            (0, i.h)(
                                'span',
                                {part: 'breadcrumb-value', class: t.content ? '' : 'max-w-snippet truncate'},
                                null !== (a = t.content) && void 0 !== a ? a : l,
                            ),
                            (0, i.h)('atomic-icon', {
                                part: 'breadcrumb-clear',
                                class: 'w-2.5 h-2.5 ml-2 mt-px',
                                icon: o.C,
                            }),
                        ),
                    );
                }
                updateShowMoreValue(t) {
                    if (((this.numberOfCollapsedBreadcrumbs = t), 0 === t)) {
                        this.hide(this.showMore);
                        return;
                    }
                    (this.show(this.showMore),
                        (this.showMore.textContent = `+ ${t.toLocaleString(this.bindings.i18n.language)}`),
                        this.showMore.setAttribute(
                            'aria-label',
                            this.bindings.i18n.t('show-n-more-filters', {value: t}),
                        ));
                }
                renderShowMore() {
                    return (0, i.h)(
                        'li',
                        {key: 'show-more'},
                        (0, i.h)(c.B, {
                            ref: (t) => {
                                (this.breadcrumbShowLessFocus.setTarget(t), (this.showMore = t));
                            },
                            part: 'show-more',
                            style: 'outline-primary',
                            class: 'p-2 btn-pill whitespace-nowrap',
                            onClick: () => {
                                ((this.firstExpandedBreadcrumbIndex =
                                    this.numberOfBreadcrumbs - this.numberOfCollapsedBreadcrumbs),
                                    this.breadcrumbShowMoreFocus.focusOnNextTarget(),
                                    (this.isCollapsed = !1));
                            },
                        }),
                    );
                }
                renderShowLess() {
                    return (0, i.h)(
                        'li',
                        {key: 'show-less'},
                        (0, i.h)(c.B, {
                            ref: (t) => (this.showLess = t),
                            part: 'show-less',
                            style: 'outline-primary',
                            text: this.bindings.i18n.t('show-less'),
                            class: 'p-2 btn-pill',
                            onClick: () => {
                                (this.breadcrumbShowLessFocus.focusOnNextTarget(), (this.isCollapsed = !0));
                            },
                        }),
                    );
                }
                renderClearAll() {
                    let t = this.lastRemovedBreadcrumbIndex === this.numberOfBreadcrumbs;
                    return (0, i.h)(
                        'li',
                        {key: 'clear-all'},
                        (0, i.h)(c.B, {
                            part: 'clear',
                            style: 'text-primary',
                            text: this.bindings.i18n.t('clear'),
                            class: 'p-2 btn-pill',
                            ariaLabel: this.bindings.i18n.t('clear-all-filters'),
                            onClick: async () => {
                                var t;
                                (this.breadcrumbManager.deselectAll(),
                                    null === (t = this.bindings.store.state.resultList) ||
                                        void 0 === t ||
                                        t.focusOnFirstResultAfterNextSearch());
                            },
                            ref: t ? this.breadcrumbRemovedFocus.setTarget : void 0,
                        }),
                    );
                }
                get facetBreadcrumbs() {
                    return this.breadcrumbManagerState.facetBreadcrumbs
                        .map(({facetId: t, field: r, values: e}) => e.map((e) => ({value: e, facetId: t, field: r})))
                        .flat()
                        .filter(({facetId: t}) => this.bindings.store.state.facets[t])
                        .map(({value: t, facetId: r, field: e}) => {
                            var i;
                            return {
                                facetId: r,
                                label:
                                    null === (i = this.bindings.store.state.facets[r]) || void 0 === i
                                        ? void 0
                                        : i.label(),
                                deselect: t.deselect,
                                formattedValue: [(0, l.g)(e, t.value.value, this.bindings.i18n)],
                            };
                        });
                }
                get categoryFacetBreadcrumbs() {
                    return this.breadcrumbManagerState.categoryFacetBreadcrumbs.map(
                        ({facetId: t, field: r, path: e, deselect: i}) => ({
                            facetId: t,
                            label: this.bindings.store.state.categoryFacets[t].label(),
                            deselect: i,
                            formattedValue: e.map((t) => (0, l.g)(r, t.value, this.bindings.i18n)),
                        }),
                    );
                }
                get numericFacetBreadcrumbs() {
                    return this.breadcrumbManagerState.numericFacetBreadcrumbs
                        .map(({facetId: t, field: r, values: e}) => e.map((e) => ({value: e, facetId: t, field: r})))
                        .flat()
                        .map(({value: t, facetId: r}) => {
                            var e, i;
                            return {
                                facetId: r,
                                label: this.bindings.store.state.numericFacets[r].label(),
                                deselect: t.deselect,
                                formattedValue: [this.bindings.store.state.numericFacets[r].format(t.value)],
                                content:
                                    null === (i = (e = this.bindings.store.state.numericFacets[r]).content) ||
                                    void 0 === i
                                        ? void 0
                                        : i.call(e, t.value),
                            };
                        });
                }
                get dateFacetBreadcrumbs() {
                    return this.breadcrumbManagerState.dateFacetBreadcrumbs
                        .map(({facetId: t, field: r, values: e}) => e.map((e) => ({value: e, facetId: t, field: r})))
                        .flat()
                        .map(({value: t, facetId: r}) => ({
                            facetId: r,
                            label: this.bindings.store.state.dateFacets[r].label(),
                            deselect: t.deselect,
                            formattedValue: [this.bindings.store.state.dateFacets[r].format(t.value)],
                        }));
                }
                get automaticFacetBreadcrumbs() {
                    return this.breadcrumbManagerState.automaticFacetBreadcrumbs
                        .flatMap(({facetId: t, field: r, label: e, values: i}) =>
                            i.map((i) => ({value: i, facetId: t, field: r, label: e})),
                        )
                        .map(({value: t, facetId: r, field: e, label: i}) => ({
                            facetId: r,
                            label: i || e,
                            deselect: t.deselect,
                            formattedValue: [(0, l.g)(e, t.value.value, this.bindings.i18n)],
                        }));
                }
                get allBreadcrumbs() {
                    return [
                        ...this.facetBreadcrumbs,
                        ...this.categoryFacetBreadcrumbs,
                        ...this.numericFacetBreadcrumbs,
                        ...this.dateFacetBreadcrumbs,
                        ...this.automaticFacetBreadcrumbs,
                    ];
                }
                renderBreadcrumbs(t) {
                    let r = t.sort((t, r) => {
                        let e = this.facetManagerState.facetIds.indexOf(t.facetId),
                            i = this.facetManagerState.facetIds.indexOf(r.facetId);
                        return e - i;
                    });
                    return (
                        (this.numberOfBreadcrumbs = r.length),
                        [
                            r.map((r, e) => this.renderBreadcrumb(r, e, t.length)),
                            this.isCollapsed && this.renderShowMore(),
                            !this.isCollapsed && this.renderShowLess(),
                            this.renderClearAll(),
                        ]
                    );
                }
                render() {
                    let t = this.allBreadcrumbs;
                    return t.length
                        ? (0, i.h)(
                              'div',
                              {part: 'container', class: 'text-on-background text-sm flex'},
                              (0, i.h)(
                                  'span',
                                  {part: 'label', class: 'font-bold py-[0.625rem] pl-0 pr-2'},
                                  this.bindings.i18n.t('with-colon', {text: this.bindings.i18n.t('filters')}),
                              ),
                              (0, i.h)(
                                  'div',
                                  {part: 'breadcrumb-list-container', class: 'relative grow'},
                                  (0, i.h)(
                                      'ul',
                                      {
                                          part: 'breadcrumb-list',
                                          class: `flex gap-1 ${this.isCollapsed ? 'flex-nowrap absolute w-full' : 'flex-wrap'}`,
                                      },
                                      this.renderBreadcrumbs(t),
                                  ),
                              ),
                          )
                        : (0, i.h)(s.H, null);
                }
                componentDidRender() {
                    this.adaptBreadcrumbs();
                }
                get host() {
                    return (0, i.g)(this);
                }
            };
            (d([(0, s.I)()], m.prototype, 'bindings', void 0),
                d([(0, s.B)('breadcrumbManager')], m.prototype, 'breadcrumbManagerState', void 0),
                d([(0, s.B)('facetManager')], m.prototype, 'facetManagerState', void 0),
                d([(0, n.F)()], m.prototype, 'breadcrumbRemovedFocus', void 0),
                d([(0, n.F)()], m.prototype, 'breadcrumbShowMoreFocus', void 0),
                d([(0, n.F)()], m.prototype, 'breadcrumbShowLessFocus', void 0),
                (m.style =
                    "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--atomic-font-family);font-feature-settings:normal;font-variation-settings:normal;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}:host{display:block;--tw-ring-inset:var(--tw-empty,  )}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);font-weight:var(--atomic-font-normal)}:host(.atomic-hidden){display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.\\!link{color:var(--atomic-primary)}.\\!link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link{color:var(--atomic-primary)}.link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.input-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background)}.input-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:hover{border-color:var(--atomic-primary-light)}.input-primary.focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.input-primary:focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-radio::before{--tw-content:attr(value);content:var(--tw-content)}.btn-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-primary);color:var(--atomic-on-primary)}.btn-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:hover{background-color:var(--atomic-primary-light)}.btn-primary.focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:disabled{cursor:not-allowed;background-color:var(--atomic-disabled)}.btn-outline-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-outline-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:hover{border-color:var(--atomic-primary-light);color:var(--atomic-primary-light)}.btn-outline-primary.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-neutral)}.btn-text-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-text-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:hover{background-color:var(--atomic-neutral-light)}.btn-text-primary.focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-primary:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-neutral{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:hover{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral.focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral:focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-transparent{color:var(--atomic-on-background)}.btn-text-transparent.focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:hover{color:var(--atomic-primary-light)}.btn-text-transparent.focus-visible{color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{color:var(--atomic-primary-light)}.btn-square-neutral{border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-square-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-square-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-square-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-pill{border-radius:var(--atomic-border-radius-xl)}.btn-page{display:grid;place-items:center;border-width:0px;font-size:var(--atomic-text-lg)}.btn-page:hover{border-width:1px}.btn-page.focus-visible{border-width:1px}.btn-page:focus-visible{border-width:1px}.btn-page.selected{border-width:2px;border-color:var(--atomic-primary);font-weight:var(--atomic-font-bold)}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-0.5rem}.-top-2{top:-0.5rem}.bottom-0{bottom:0px}.bottom-px{bottom:1px}.left-0{left:0px}.right-0{right:0px}.right-px{right:1px}.top-0{top:0px}.top-\\[50\\%\\]{top:50%}.top-full{top:100%}.top-px{top:1px}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.z-\\[9999\\]{z-index:9999}.col-span-2{grid-column:span 2 / span 2}.m-0{margin:0px}.m-2{margin:0.5rem}.-my-px{margin-top:-1px;margin-bottom:-1px}.mx-0{margin-left:0px;margin-right:0px}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem}.mx-1{margin-left:0.25rem;margin-right:0.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mr-px{margin-right:-1px}.mb-0{margin-bottom:0px}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:0.25rem}.ml-2{margin-left:0.5rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.mr-0{margin-right:0px}.mr-0\\.5{margin-right:0.125rem}.mr-1{margin-right:0.25rem}.mr-1\\.5{margin-right:0.375rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-6{margin-right:1.5rem}.mt-0{margin-top:0px}.mt-1{margin-top:0.25rem}.mt-1\\.5{margin-top:0.375rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:0.5rem}.mt-2\\.5{margin-top:0.625rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-px{margin-top:1px}.box-border{box-sizing:border-box}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-1{height:0.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-2{height:0.5rem}.h-2\\.5{height:0.625rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-\\[2\\.6rem\\]{height:2.6rem}.h-auto{height:auto}.h-full{height:100%}.min-h-\\[2\\.5rem\\]{min-height:2.5rem}.min-h-\\[40px\\]{min-height:40px}.w-0{width:0px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-2{width:0.5rem}.w-2\\.5{width:0.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:0.75rem}.w-3\\.5{width:0.875rem}.w-3\\/5{width:60%}.w-32{width:8rem}.w-4{width:1rem}.w-44{width:11rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[2\\.6rem\\]{width:2.6rem}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[2\\.5rem\\]{min-width:2.5rem}.min-w-\\[6rem\\]{min-width:6rem}.max-w-\\[15rem\\]{max-width:15rem}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-8{flex-basis:2rem}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes scaleUp{0%{transform:scale(0.7) translateY(150vh);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}.animate-scaleUpModal{animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards}@keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}.animate-slideDownModal{animation:slideDown .5s linear forwards}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-\\[min-content_auto\\]{grid-template-columns:min-content auto}.grid-cols-min-1fr{grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-items-center{place-items:center}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-0\\.5{gap:0.125rem}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem}.gap-x-1\\.5{-moz-column-gap:0.375rem;column-gap:0.375rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-0{row-gap:0px}.gap-y-0\\.5{row-gap:0.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.375rem * var(--tw-space-x-reverse));margin-left:calc(0.375rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-neutral>:not([hidden])~:not([hidden]){border-color:var(--atomic-neutral)}.self-start{align-self:flex-start}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-scroll{overflow-x:scroll}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:var(--atomic-border-radius)}.rounded-\\[100\\%\\]{border-radius:100%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0px}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-r-md{border-top-right-radius:var(--atomic-border-radius-md);border-bottom-right-radius:var(--atomic-border-radius-md)}.border{border-width:1px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-neutral{border-color:var(--atomic-neutral)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.border-primary{border-color:var(--atomic-primary)}.bg-\\[\\#F1F2FF\\]{--tw-bg-opacity:1;background-color:rgb(241 242 255 / var(--tw-bg-opacity))}.bg-background{background-color:var(--atomic-background)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-primary{background-color:var(--atomic-primary)}.bg-transparent{background-color:transparent}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-background-60{--tw-gradient-from:var(--atomic-background) 60% var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.fill-current{fill:currentColor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-\\[0\\.625rem\\]{padding-top:0.625rem;padding-bottom:0.625rem}.pb-1{padding-bottom:0.25rem}.pb-3{padding-bottom:0.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-0{padding-left:0px}.pl-1{padding-left:0.25rem}.pl-10{padding-left:2.5rem}.pl-3{padding-left:0.75rem}.pl-9{padding-left:2.25rem}.pr-2{padding-right:0.5rem}.pr-24{padding-right:6rem}.pr-6{padding-right:1.5rem}.pt-0{padding-top:0px}.pt-0\\.5{padding-top:0.125rem}.text-left{text-align:left}.text-center{text-align:center}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.text-2xl{font-size:var(--atomic-text-2xl)}.text-base{font-size:var(--atomic-text-base)}.text-lg{font-size:var(--atomic-text-lg)}.text-sm{font-size:var(--atomic-text-sm)}.text-xl{font-size:var(--atomic-text-xl)}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:var(--atomic-font-bold)}.font-medium{font-weight:500}.font-normal{font-weight:var(--atomic-font-normal)}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-10{line-height:2.5rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-8{line-height:2rem}.text-\\[\\#54698D\\]{--tw-text-opacity:1;color:rgb(84 105 141 / var(--tw-text-opacity))}.text-error{color:var(--atomic-error)}.text-inherit{color:inherit}.text-neutral{color:var(--atomic-neutral)}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-on-background{color:var(--atomic-on-background)}.text-on-primary{color:var(--atomic-on-primary)}.text-primary{color:var(--atomic-primary)}.text-success{color:var(--atomic-success)}.text-transparent{color:transparent}.placeholder-neutral-dark::-moz-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark::placeholder{color:var(--atomic-neutral-dark)}.opacity-0{opacity:0}.opacity-50{opacity:0.5}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--atomic-primary);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-neutral{outline-color:var(--atomic-neutral)}.outline-primary{outline-color:var(--atomic-primary)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.ring-ring-primary{--tw-ring-color:var(--atomic-ring-primary)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-visi-opacity{transition-property:visibility, opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-outline.focus-visible{outline:2px solid transparent;outline-offset:2px}.no-outline:focus-visible{outline:2px solid transparent;outline-offset:2px}.accessibility-only{position:absolute;display:block;height:0;overflow:hidden;margin:0}.text-inherit{font-size:inherit}.cursor-inherit{cursor:inherit}.shadow-lg{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}.ripple{position:absolute;pointer-events:none;transform:scale(0);border-radius:50%;animation:ripple var(--animation-duration) linear}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@keyframes ripple{to{transform:scale(4);opacity:0}}.icon-active{color:var(--atomic-rating-icon-active-color, #f6ce3c)}.icon-inactive{color:var(--atomic-rating-icon-inactive-color, var(--atomic-neutral))}.icon-active svg path,.icon-inactive svg path{stroke:var(--atomic-rating-icon-outline, none)}.max-w-snippet{max-width:30ch}.focus-within\\:border-disabled:focus-within{border-color:var(--atomic-disabled)}.focus-within\\:border-primary:focus-within{border-color:var(--atomic-primary)}.focus-within\\:ring:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-neutral:focus-within{--tw-ring-color:var(--atomic-neutral)}.focus-within\\:ring-ring-primary:focus-within{--tw-ring-color:var(--atomic-ring-primary)}.hover\\:border-primary-light:hover{border-color:var(--atomic-primary-light)}.hover\\:bg-neutral-light:hover{background-color:var(--atomic-neutral-light)}.hover\\:bg-primary-light:hover{background-color:var(--atomic-primary-light)}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.focus-visible\\:border-primary-light.focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:border-primary-light:focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:bg-neutral-light.focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-neutral-light:focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-primary-light.focus-visible{background-color:var(--atomic-primary-light)}.focus-visible\\:bg-primary-light:focus-visible{background-color:var(--atomic-primary-light)}.group:hover .group-hover\\:text-primary{color:var(--atomic-primary)}.group:hover .group-hover\\:text-primary-light{color:var(--atomic-primary-light)}.group:focus .group-focus\\:text-primary{color:var(--atomic-primary)}.group:focus .group-focus\\:text-primary-light{color:var(--atomic-primary-light)}.group.focus-visible .group-focus-visible\\:text-primary{color:var(--atomic-primary)}.group:focus-visible .group-focus-visible\\:text-primary{color:var(--atomic-primary)}"));
        },
        2108: function (t, r, e) {
            e.d(r, {
                B: function () {
                    return n;
                },
            });
            var i = e(5991),
                a = e(60375),
                o = e(35126);
            let n = (t, r) => {
                let e = (0, o.g)(t.style),
                    n = (0, o.a)(t.style),
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
                    {...l, onMouseDown: (t) => (0, a.c)(t, {color: e})},
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
            function a(t) {
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
                    return a;
                },
            });
        },
        71343: function (t, r, e) {
            e.d(r, {
                C: function () {
                    return i;
                },
            });
            let i =
                '<svg viewBox="0 0 22 22"><g transform="matrix(.7071 -.7071 .7071 .7071 -3.142 11)"><path d="m9-3.4h2v26.9h-2z"/><path d="m-3.4 9h26.9v2h-26.9z"/></g></svg>';
        },
        75291: function (t, r, e) {
            function i(t, r) {
                return new CustomEvent(t, {detail: r, bubbles: !0, cancelable: !0, composed: !0});
            }
            function a(t, r, e, i) {
                let a = (o) => {
                    (t.removeEventListener(r, a, i), 'object' == typeof e ? e.handleEvent.call(t, o) : e.call(t, o));
                };
                t.addEventListener(r, a, i);
            }
            e.d(r, {
                b: function () {
                    return i;
                },
                l: function () {
                    return a;
                },
            });
        },
        78681: function (t, r, e) {
            function i(t) {
                return `caption-${t}`;
            }
            function a(t, r) {
                return r.getResourceBundle(r.language, i(t)) || {};
            }
            function o(t, r, e) {
                return e.t(r, {ns: i(t)});
            }
            e.d(r, {
                a: function () {
                    return a;
                },
                g: function () {
                    return o;
                },
            });
        },
        8807: function (t, r, e) {
            e.d(r, {
                B: function () {
                    return h;
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
                a = e(75291),
                o = e(66038);
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
            let m = 'data-atomic-rendered',
                u = 'data-atomic-loaded';
            function p({forceUpdate: t} = {}) {
                return (r, e) => {
                    let {
                            componentWillLoad: p,
                            render: h,
                            componentDidRender: g,
                            componentDidLoad: b,
                            disconnectedCallback: w,
                        } = r,
                        f = () => {};
                    if ('bindings' !== e)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${e}"`,
                            r,
                        );
                    ((r.componentWillLoad = function () {
                        let r = (0, i.g)(this);
                        (r.setAttribute(m, 'false'), r.setAttribute(u, 'false'));
                        let e = (0, a.b)(l, (r) => {
                            this.bindings = r;
                            let e = () => (0, i.f)(this);
                            (this.bindings.i18n.on('languageChanged', e),
                                (f = () => this.bindings.i18n.off('languageChanged', e)));
                            try {
                                this.initialize ? (this.initialize(), t && (0, i.f)(this)) : (0, i.f)(this);
                            } catch (t) {
                                this.error = t;
                            }
                        });
                        if ((r.dispatchEvent(e), !(0, o.c)(r, s.join(', ')))) {
                            this.error = new c(r.nodeName.toLowerCase());
                            return;
                        }
                        return p && p.call(this);
                    }),
                        (r.render = function () {
                            return this.error
                                ? (0, i.h)('atomic-component-error', {element: (0, i.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, i.g)(this).setAttribute(m, 'true'), h && h.call(this))
                                  : (0, i.h)(n, null);
                        }),
                        (r.disconnectedCallback = function () {
                            let t = (0, i.g)(this);
                            (t.setAttribute(m, 'false'), t.setAttribute(u, 'false'), f(), w && w.call(this));
                        }),
                        (r.componentDidRender = function () {
                            let t = (0, i.g)(this);
                            'false' !== t.getAttribute(m) &&
                                (g && g.call(this),
                                'false' === t.getAttribute(u) &&
                                    (t.setAttribute(u, 'true'), d((0, i.g)(this)), b && b.call(this)));
                        }),
                        (r.componentDidLoad = function () {}));
                };
            }
            function h(t, r) {
                return (e, a) => {
                    let {disconnectedCallback: o, initialize: n} = e;
                    ((e.initialize = function () {
                        return (n && n.call(this), n)
                            ? this[t]
                                ? (null == r ? void 0 : r.onUpdateCallbackMethod) && !this[r.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${r.onUpdateCallbackMethod}" is not defined`,
                                          e,
                                      )
                                    : void (this.unsubscribeController = this[t].subscribe(() => {
                                          ((this[a] = this[t].state),
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
                                o && o.call(this));
                        }));
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
            let a = 'ripple';
            function o(t) {
                'static' === getComputedStyle(t).position && t.classList.add('ripple-relative');
            }
            function n(t, r) {
                var e;
                let i = null !== (e = r.parent) && void 0 !== e ? e : t.currentTarget,
                    n = i.getElementsByClassName(a)[0];
                (n && n.remove(), i.classList.add('ripple-parent'), o(i), Array.from(i.children).forEach(o));
                let s = document.createElement('span');
                (s.classList.add(a), (s.style.backgroundColor = `var(--atomic-${r.color})`), s.setAttribute('part', a));
                let c = Math.max(i.clientWidth, i.clientHeight),
                    d = c / 2,
                    m = 129.21 * Math.cbrt(d),
                    {top: u, left: p} = i.getBoundingClientRect();
                ((s.style.width = s.style.height = `${c}px`),
                    (s.style.left = `${t.clientX - (p + d)}px`),
                    (s.style.top = `${t.clientY - (u + d)}px`),
                    s.style.setProperty('--animation-duration', `${m}ms`),
                    i.prepend(s),
                    l(s, m));
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
