'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [65847],
    {
        65847: function (t, e, a) {
            (a.r(e),
                a.d(e, {
                    atomic_facet_number_input: function () {
                        return i;
                    },
                }));
            var r = a(5991),
                n = a(2108);
            let i = class {
                constructor(t) {
                    ((0, r.r)(this, t), (this.applyInput = (0, r.c)(this, 'atomic/numberInputApply', 7)));
                }
                connectedCallback() {
                    var t, e;
                    ((this.start = null === (t = this.filterState.range) || void 0 === t ? void 0 : t.start),
                        (this.end = null === (e = this.filterState.range) || void 0 === e ? void 0 : e.end));
                }
                apply() {
                    this.startRef.validity.valid &&
                        this.endRef.validity.valid &&
                        (this.applyInput.emit(), this.filter.setRange({start: this.start, end: this.end}));
                }
                render() {
                    var t, e;
                    let a = this.bindings.i18n.t(this.label),
                        i = this.bindings.i18n.t('min'),
                        l = this.bindings.i18n.t('max'),
                        s = this.bindings.i18n.t('number-input-minimum', {label: a}),
                        u = this.bindings.i18n.t('number-input-maximum', {label: a}),
                        p = this.bindings.i18n.t('apply'),
                        d = this.bindings.i18n.t('number-input-apply', {label: a}),
                        o = 'p-2.5 input-primary placeholder-neutral-dark min-w-0 mr-1',
                        c = 'text-neutral-dark text-sm',
                        b = 'integer' === this.type ? '1' : 'any';
                    return (0, r.h)(
                        'form',
                        {
                            class: 'mt-4 px-2 gap-y-0.5',
                            part: 'input-form',
                            onSubmit: (t) => (t.preventDefault(), this.apply(), !1),
                        },
                        (0, r.h)(
                            'label',
                            {part: 'label-start', class: c, htmlFor: `${this.filterState.facetId}_start`},
                            i,
                        ),
                        (0, r.h)('input', {
                            part: 'input-start',
                            id: `${this.filterState.facetId}_start`,
                            type: 'number',
                            step: b,
                            ref: (t) => (this.startRef = t),
                            class: o,
                            'aria-label': s,
                            required: !0,
                            min: Number.MIN_SAFE_INTEGER,
                            max: this.end,
                            value: null === (t = this.filterState.range) || void 0 === t ? void 0 : t.start,
                            onInput: (t) => (this.start = t.target.valueAsNumber),
                        }),
                        (0, r.h)('label', {part: 'label-end', class: c, htmlFor: `${this.filterState.facetId}_end`}, l),
                        (0, r.h)('input', {
                            part: 'input-end',
                            id: `${this.filterState.facetId}_end`,
                            type: 'number',
                            step: b,
                            ref: (t) => (this.endRef = t),
                            class: o,
                            'aria-label': u,
                            required: !0,
                            min: this.start,
                            max: Number.MAX_SAFE_INTEGER,
                            value: null === (e = this.filterState.range) || void 0 === e ? void 0 : e.end,
                            onInput: (t) => (this.end = t.target.valueAsNumber),
                        }),
                        (0, r.h)(n.B, {
                            style: 'outline-primary',
                            type: 'submit',
                            part: 'input-apply-button',
                            class: 'p-2.5 flex-none truncate',
                            ariaLabel: d,
                            text: p,
                        }),
                    );
                }
            };
            i.style =
                "[part='input-form']{display:grid;grid-template-areas:'label-start label-end .'\n    'input-start input-end apply-button';grid-template-columns:1fr 1fr auto}[part='label-start']{grid-area:label-start}[part='label-end']{grid-area:label-end}[part='input-start']{grid-area:input-start}[part='input-end']{grid-area:input-end}[part='input-apply-button']{grid-area:apply-button}";
        },
        2108: function (t, e, a) {
            a.d(e, {
                B: function () {
                    return l;
                },
            });
            var r = a(5991),
                n = a(60375),
                i = a(35126);
            let l = (t, e) => {
                let a = (0, i.g)(t.style),
                    l = (0, i.a)(t.style),
                    s = {
                        class: t.class ? `${l} ${t.class}` : l,
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
                        ref(e) {
                            var a;
                            (t.form && (null == e || e.setAttribute('form', t.form)),
                                t.ariaHidden && (null == e || e.setAttribute('aria-hidden', t.ariaHidden)),
                                t.tabIndex && (null == e || e.setAttribute('tabindex', t.tabIndex)),
                                null === (a = t.ref) || void 0 === a || a.call(t, e));
                        },
                    };
                return (0, r.h)(
                    'button',
                    {...s, onMouseDown: (t) => (0, n.c)(t, {color: a})},
                    t.text ? (0, r.h)('span', {class: 'truncate'}, t.text) : null,
                    e,
                );
            };
        },
        35126: function (t, e, a) {
            function r(t) {
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
            function n(t) {
                switch (t) {
                    case 'primary':
                        return 'primary';
                    case 'text-transparent':
                        return 'neutral-light';
                    default:
                        return 'neutral';
                }
            }
            a.d(e, {
                a: function () {
                    return r;
                },
                g: function () {
                    return n;
                },
            });
        },
        75291: function (t, e, a) {
            function r(t, e) {
                return new CustomEvent(t, {detail: e, bubbles: !0, cancelable: !0, composed: !0});
            }
            function n(t, e, a, r) {
                let n = (i) => {
                    (t.removeEventListener(e, n, r), 'object' == typeof a ? a.handleEvent.call(t, i) : a.call(t, i));
                };
                t.addEventListener(e, n, r);
            }
            a.d(e, {
                b: function () {
                    return r;
                },
                l: function () {
                    return n;
                },
            });
        },
        60375: function (t, e, a) {
            a.d(e, {
                c: function () {
                    return l;
                },
            });
            var r = a(75291);
            let n = 'ripple';
            function i(t) {
                'static' === getComputedStyle(t).position && t.classList.add('ripple-relative');
            }
            function l(t, e) {
                var a;
                let r = null !== (a = e.parent) && void 0 !== a ? a : t.currentTarget,
                    l = r.getElementsByClassName(n)[0];
                (l && l.remove(), r.classList.add('ripple-parent'), i(r), Array.from(r.children).forEach(i));
                let u = document.createElement('span');
                (u.classList.add(n), (u.style.backgroundColor = `var(--atomic-${e.color})`), u.setAttribute('part', n));
                let p = Math.max(r.clientWidth, r.clientHeight),
                    d = p / 2,
                    o = 129.21 * Math.cbrt(d),
                    {top: c, left: b} = r.getBoundingClientRect();
                ((u.style.width = u.style.height = `${p}px`),
                    (u.style.left = `${t.clientX - (b + d)}px`),
                    (u.style.top = `${t.clientY - (c + d)}px`),
                    u.style.setProperty('--animation-duration', `${o}ms`),
                    r.prepend(u),
                    s(u, o));
            }
            async function s(t, e) {
                ((0, r.l)(t, 'animationend', () => {
                    t && t.remove();
                }),
                    setTimeout(() => (null == t ? void 0 : t.remove()), e + 0.1 * e));
            }
        },
    },
]);
