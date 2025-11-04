'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [33924],
    {
        33924: function (e, t, r) {
            r.d(t, {
                Dq: function () {
                    return ec;
                },
                Qr: function () {
                    return L;
                },
                cI: function () {
                    return eE;
                },
            });
            var a = r(52983),
                s = (e) => 'checkbox' === e.type,
                i = (e) => e instanceof Date,
                l = (e) => null == e;
            let u = (e) => 'object' == typeof e;
            var n = (e) => !l(e) && !Array.isArray(e) && u(e) && !i(e),
                o = (e) => (n(e) && e.target ? (s(e.target) ? e.target.checked : e.target.value) : e),
                d = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
                f = (e, t) => e.has(d(t)),
                c = (e) => {
                    let t = e.constructor && e.constructor.prototype;
                    return n(t) && t.hasOwnProperty('isPrototypeOf');
                },
                y = 'undefined' != typeof window && void 0 !== window.HTMLElement && 'undefined' != typeof document;
            function m(e) {
                let t;
                let r = Array.isArray(e);
                if (e instanceof Date) t = new Date(e);
                else if (e instanceof Set) t = new Set(e);
                else if (!(!(y && (e instanceof Blob || e instanceof FileList)) && (r || n(e)))) return e;
                else if (((t = r ? [] : {}), r || c(e))) for (let r in e) e.hasOwnProperty(r) && (t[r] = m(e[r]));
                else t = e;
                return t;
            }
            var p = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
                h = (e) => void 0 === e,
                _ = (e, t, r) => {
                    if (!t || !n(e)) return r;
                    let a = p(t.split(/[,[\].]+?/)).reduce((e, t) => (l(e) ? e : e[t]), e);
                    return h(a) || a === e ? (h(e[t]) ? r : e[t]) : a;
                };
            let g = {BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change'},
                v = {onBlur: 'onBlur', onChange: 'onChange', onSubmit: 'onSubmit', onTouched: 'onTouched', all: 'all'},
                b = {
                    max: 'max',
                    min: 'min',
                    maxLength: 'maxLength',
                    minLength: 'minLength',
                    pattern: 'pattern',
                    required: 'required',
                    validate: 'validate',
                },
                A = a.createContext(null),
                x = () => a.useContext(A);
            var V = (e, t, r, a = !0) => {
                    let s = {defaultValues: t._defaultValues};
                    for (let i in e)
                        Object.defineProperty(s, i, {
                            get: () => (
                                t._proxyFormState[i] !== v.all && (t._proxyFormState[i] = !a || v.all),
                                r && (r[i] = !0),
                                e[i]
                            ),
                        });
                    return s;
                },
                F = (e) => n(e) && !Object.keys(e).length,
                S = (e, t, r, a) => {
                    r(e);
                    let {name: s, ...i} = e;
                    return (
                        F(i) ||
                        Object.keys(i).length >= Object.keys(t).length ||
                        Object.keys(i).find((e) => t[e] === (!a || v.all))
                    );
                },
                w = (e) => (Array.isArray(e) ? e : [e]),
                k = (e, t, r) =>
                    r && t
                        ? e === t
                        : !e || !t || e === t || w(e).some((e) => e && (e.startsWith(t) || t.startsWith(e)));
            function D(e) {
                let t = a.useRef(e);
                ((t.current = e),
                    a.useEffect(() => {
                        let r = !e.disabled && t.current.subject && t.current.subject.subscribe({next: t.current.next});
                        return () => {
                            r && r.unsubscribe();
                        };
                    }, [e.disabled]));
            }
            var C = (e) => 'string' == typeof e,
                O = (e, t, r, a, s) =>
                    C(e)
                        ? (a && t.watch.add(e), _(r, e, s))
                        : Array.isArray(e)
                          ? e.map((e) => (a && t.watch.add(e), _(r, e)))
                          : (a && (t.watchAll = !0), r),
                E = (e) => /^\w*$/.test(e),
                j = (e) => p(e.replace(/["|']|\]/g, '').split(/\.|\[/));
            function B(e, t, r) {
                let a = -1,
                    s = E(t) ? [t] : j(t),
                    i = s.length,
                    l = i - 1;
                for (; ++a < i; ) {
                    let t = s[a],
                        i = r;
                    if (a !== l) {
                        let r = e[t];
                        i = n(r) || Array.isArray(r) ? r : isNaN(+s[a + 1]) ? {} : [];
                    }
                    ((e[t] = i), (e = e[t]));
                }
                return e;
            }
            let L = (e) =>
                e.render(
                    (function (e) {
                        let t = x(),
                            {name: r, control: s = t.control, shouldUnregister: i} = e,
                            l = f(s._names.array, r),
                            u = (function (e) {
                                let t = x(),
                                    {control: r = t.control, name: s, defaultValue: i, disabled: l, exact: u} = e || {},
                                    n = a.useRef(s);
                                ((n.current = s),
                                    D({
                                        disabled: l,
                                        subject: r._subjects.values,
                                        next: (e) => {
                                            k(n.current, e.name, u) &&
                                                d(m(O(n.current, r._names, e.values || r._formValues, !1, i)));
                                        },
                                    }));
                                let [o, d] = a.useState(r._getWatch(s, i));
                                return (a.useEffect(() => r._removeUnmounted()), o);
                            })({
                                control: s,
                                name: r,
                                defaultValue: _(s._formValues, r, _(s._defaultValues, r, e.defaultValue)),
                                exact: !0,
                            }),
                            n = (function (e) {
                                let t = x(),
                                    {control: r = t.control, disabled: s, name: i, exact: l} = e || {},
                                    [u, n] = a.useState(r._formState),
                                    o = a.useRef(!0),
                                    d = a.useRef({
                                        isDirty: !1,
                                        isLoading: !1,
                                        dirtyFields: !1,
                                        touchedFields: !1,
                                        isValidating: !1,
                                        isValid: !1,
                                        errors: !1,
                                    }),
                                    f = a.useRef(i);
                                return (
                                    (f.current = i),
                                    D({
                                        disabled: s,
                                        next: (e) =>
                                            o.current &&
                                            k(f.current, e.name, l) &&
                                            S(e, d.current, r._updateFormState) &&
                                            n({...r._formState, ...e}),
                                        subject: r._subjects.state,
                                    }),
                                    a.useEffect(
                                        () => (
                                            (o.current = !0),
                                            d.current.isValid && r._updateValid(!0),
                                            () => {
                                                o.current = !1;
                                            }
                                        ),
                                        [r],
                                    ),
                                    V(u, r, d.current, !1)
                                );
                            })({control: s, name: r}),
                            d = a.useRef(s.register(r, {...e.rules, value: u}));
                        return (
                            (d.current = s.register(r, e.rules)),
                            a.useEffect(() => {
                                let e = s._options.shouldUnregister || i,
                                    t = (e, t) => {
                                        let r = _(s._fields, e);
                                        r && (r._f.mount = t);
                                    };
                                if ((t(r, !0), e)) {
                                    let e = m(_(s._options.defaultValues, r));
                                    (B(s._defaultValues, r, e), h(_(s._formValues, r)) && B(s._formValues, r, e));
                                }
                                return () => {
                                    (l ? e && !s._state.action : e) ? s.unregister(r) : t(r, !1);
                                };
                            }, [r, s, l, i]),
                            {
                                field: {
                                    name: r,
                                    value: u,
                                    onChange: a.useCallback(
                                        (e) => d.current.onChange({target: {value: o(e), name: r}, type: g.CHANGE}),
                                        [r],
                                    ),
                                    onBlur: a.useCallback(
                                        () =>
                                            d.current.onBlur({
                                                target: {value: _(s._formValues, r), name: r},
                                                type: g.BLUR,
                                            }),
                                        [r, s],
                                    ),
                                    ref: (e) => {
                                        let t = _(s._fields, r);
                                        t &&
                                            e &&
                                            (t._f.ref = {
                                                focus: () => e.focus(),
                                                select: () => e.select(),
                                                setCustomValidity: (t) => e.setCustomValidity(t),
                                                reportValidity: () => e.reportValidity(),
                                            });
                                    },
                                },
                                formState: n,
                                fieldState: Object.defineProperties(
                                    {},
                                    {
                                        invalid: {enumerable: !0, get: () => !!_(n.errors, r)},
                                        isDirty: {enumerable: !0, get: () => !!_(n.dirtyFields, r)},
                                        isTouched: {enumerable: !0, get: () => !!_(n.touchedFields, r)},
                                        error: {enumerable: !0, get: () => _(n.errors, r)},
                                    },
                                ),
                            }
                        );
                    })(e),
                );
            var T = (e, t, r, a, s) =>
                t ? {...r[e], types: {...(r[e] && r[e].types ? r[e].types : {}), [a]: s || !0}} : {};
            let U = (e, t, r) => {
                for (let a of r || Object.keys(e)) {
                    let r = _(e, a);
                    if (r) {
                        let {_f: e, ...a} = r;
                        if (e && t(e.name)) {
                            if (e.ref.focus) {
                                e.ref.focus();
                                break;
                            }
                            if (e.refs && e.refs[0].focus) {
                                e.refs[0].focus();
                                break;
                            }
                        } else n(a) && U(a, t);
                    }
                }
            };
            var N = () => {
                    let e = 'undefined' == typeof performance ? Date.now() : 1e3 * performance.now();
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (t) => {
                        let r = (16 * Math.random() + e) % 16 | 0;
                        return ('x' == t ? r : (3 & r) | 8).toString(16);
                    });
                },
                R = (e, t, r = {}) =>
                    r.shouldFocus || h(r.shouldFocus)
                        ? r.focusName || `${e}.${h(r.focusIndex) ? t : r.focusIndex}.`
                        : '',
                M = (e) => ({
                    isOnSubmit: !e || e === v.onSubmit,
                    isOnBlur: e === v.onBlur,
                    isOnChange: e === v.onChange,
                    isOnAll: e === v.all,
                    isOnTouch: e === v.onTouched,
                }),
                q = (e, t, r) =>
                    !r &&
                    (t.watchAll ||
                        t.watch.has(e) ||
                        [...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))),
                P = (e, t, r) => {
                    let a = p(_(e, r));
                    return (B(a, 'root', t[r]), B(e, r, a), e);
                },
                I = (e) => 'boolean' == typeof e,
                $ = (e) => 'file' === e.type,
                H = (e) => 'function' == typeof e,
                W = (e) => {
                    if (!y) return !1;
                    let t = e ? e.ownerDocument : 0;
                    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
                },
                G = (e) => C(e),
                Q = (e) => 'radio' === e.type,
                z = (e) => e instanceof RegExp;
            let J = {value: !1, isValid: !1},
                K = {value: !0, isValid: !0};
            var X = (e) => {
                if (Array.isArray(e)) {
                    if (e.length > 1) {
                        let t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
                        return {value: t, isValid: !!t.length};
                    }
                    return e[0].checked && !e[0].disabled
                        ? e[0].attributes && !h(e[0].attributes.value)
                            ? h(e[0].value) || '' === e[0].value
                                ? K
                                : {value: e[0].value, isValid: !0}
                            : K
                        : J;
                }
                return J;
            };
            let Y = {isValid: !1, value: null};
            var Z = (e) =>
                Array.isArray(e)
                    ? e.reduce((e, t) => (t && t.checked && !t.disabled ? {isValid: !0, value: t.value} : e), Y)
                    : Y;
            function ee(e, t, r = 'validate') {
                if (G(e) || (Array.isArray(e) && e.every(G)) || (I(e) && !e))
                    return {type: r, message: G(e) ? e : '', ref: t};
            }
            var et = (e) => (n(e) && !z(e) ? e : {value: e, message: ''}),
                er = async (e, t, r, a, i) => {
                    let {
                            ref: u,
                            refs: o,
                            required: d,
                            maxLength: f,
                            minLength: c,
                            min: y,
                            max: m,
                            pattern: p,
                            validate: g,
                            name: v,
                            valueAsNumber: A,
                            mount: x,
                            disabled: V,
                        } = e._f,
                        S = _(t, v);
                    if (!x || V) return {};
                    let w = o ? o[0] : u,
                        k = (e) => {
                            a && w.reportValidity && (w.setCustomValidity(I(e) ? '' : e || ''), w.reportValidity());
                        },
                        D = {},
                        O = Q(u),
                        E = s(u),
                        j =
                            ((A || $(u)) && h(u.value) && h(S)) ||
                            (W(u) && '' === u.value) ||
                            '' === S ||
                            (Array.isArray(S) && !S.length),
                        B = T.bind(null, v, r, D),
                        L = (e, t, r, a = b.maxLength, s = b.minLength) => {
                            let i = e ? t : r;
                            D[v] = {type: e ? a : s, message: i, ref: u, ...B(e ? a : s, i)};
                        };
                    if (
                        i
                            ? !Array.isArray(S) || !S.length
                            : d &&
                              ((!(O || E) && (j || l(S))) ||
                                  (I(S) && !S) ||
                                  (E && !X(o).isValid) ||
                                  (O && !Z(o).isValid))
                    ) {
                        let {value: e, message: t} = G(d) ? {value: !!d, message: d} : et(d);
                        if (e && ((D[v] = {type: b.required, message: t, ref: w, ...B(b.required, t)}), !r))
                            return (k(t), D);
                    }
                    if (!j && (!l(y) || !l(m))) {
                        let e, t;
                        let a = et(m),
                            s = et(y);
                        if (l(S) || isNaN(S)) {
                            let r = u.valueAsDate || new Date(S),
                                i = (e) => new Date(new Date().toDateString() + ' ' + e),
                                l = 'time' == u.type,
                                n = 'week' == u.type;
                            (C(a.value) && S && (e = l ? i(S) > i(a.value) : n ? S > a.value : r > new Date(a.value)),
                                C(s.value) &&
                                    S &&
                                    (t = l ? i(S) < i(s.value) : n ? S < s.value : r < new Date(s.value)));
                        } else {
                            let r = u.valueAsNumber || (S ? +S : S);
                            (l(a.value) || (e = r > a.value), l(s.value) || (t = r < s.value));
                        }
                        if ((e || t) && (L(!!e, a.message, s.message, b.max, b.min), !r)) return (k(D[v].message), D);
                    }
                    if ((f || c) && !j && (C(S) || (i && Array.isArray(S)))) {
                        let e = et(f),
                            t = et(c),
                            a = !l(e.value) && S.length > +e.value,
                            s = !l(t.value) && S.length < +t.value;
                        if ((a || s) && (L(a, e.message, t.message), !r)) return (k(D[v].message), D);
                    }
                    if (p && !j && C(S)) {
                        let {value: e, message: t} = et(p);
                        if (
                            z(e) &&
                            !S.match(e) &&
                            ((D[v] = {type: b.pattern, message: t, ref: u, ...B(b.pattern, t)}), !r)
                        )
                            return (k(t), D);
                    }
                    if (g) {
                        if (H(g)) {
                            let e = await g(S, t),
                                a = ee(e, w);
                            if (a && ((D[v] = {...a, ...B(b.validate, a.message)}), !r)) return (k(a.message), D);
                        } else if (n(g)) {
                            let e = {};
                            for (let a in g) {
                                if (!F(e) && !r) break;
                                let s = ee(await g[a](S, t), w, a);
                                s && ((e = {...s, ...B(a, s.message)}), k(s.message), r && (D[v] = e));
                            }
                            if (!F(e) && ((D[v] = {ref: w, ...e}), !r)) return D;
                        }
                    }
                    return (k(!0), D);
                };
            function ea(e, t) {
                return [...e, ...w(t)];
            }
            var es = (e) => (Array.isArray(e) ? e.map(() => void 0) : void 0);
            function ei(e, t, r) {
                return [...e.slice(0, t), ...w(r), ...e.slice(t)];
            }
            var el = (e, t, r) =>
                Array.isArray(e) ? (h(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(t, 1)[0]), e) : [];
            function eu(e, t) {
                return [...w(t), ...w(e)];
            }
            var en = (e, t) =>
                    h(t)
                        ? []
                        : (function (e, t) {
                              let r = 0,
                                  a = [...e];
                              for (let e of t) (a.splice(e - r, 1), r++);
                              return p(a).length ? a : [];
                          })(
                              e,
                              w(t).sort((e, t) => e - t),
                          ),
                eo = (e, t, r) => {
                    e[t] = [e[r], (e[r] = e[t])][0];
                };
            function ed(e, t) {
                let r = Array.isArray(t) ? t : E(t) ? [t] : j(t),
                    a =
                        1 === r.length
                            ? e
                            : (function (e, t) {
                                  let r = t.slice(0, -1).length,
                                      a = 0;
                                  for (; a < r; ) e = h(e) ? a++ : e[t[a++]];
                                  return e;
                              })(e, r),
                    s = r.length - 1,
                    i = r[s];
                return (
                    a && delete a[i],
                    0 !== s &&
                        ((n(a) && F(a)) ||
                            (Array.isArray(a) &&
                                (function (e) {
                                    for (let t in e) if (e.hasOwnProperty(t) && !h(e[t])) return !1;
                                    return !0;
                                })(a))) &&
                        ed(e, r.slice(0, -1)),
                    e
                );
            }
            var ef = (e, t, r) => ((e[t] = r), e);
            function ec(e) {
                let t = x(),
                    {control: r = t.control, name: s, keyName: i = 'id', shouldUnregister: l} = e,
                    [u, n] = a.useState(r._getFieldArray(s)),
                    o = a.useRef(r._getFieldArray(s).map(N)),
                    d = a.useRef(u),
                    f = a.useRef(s),
                    c = a.useRef(!1);
                ((f.current = s),
                    (d.current = u),
                    r._names.array.add(s),
                    e.rules && r.register(s, e.rules),
                    D({
                        next: ({values: e, name: t}) => {
                            if (t === f.current || !t) {
                                let t = _(e, f.current);
                                Array.isArray(t) && (n(t), (o.current = t.map(N)));
                            }
                        },
                        subject: r._subjects.array,
                    }));
                let y = a.useCallback(
                    (e) => {
                        ((c.current = !0), r._updateFieldArray(s, e));
                    },
                    [r, s],
                );
                return (
                    a.useEffect(() => {
                        if (
                            ((r._state.action = !1),
                            q(s, r._names) && r._subjects.state.next({...r._formState}),
                            c.current && (!M(r._options.mode).isOnSubmit || r._formState.isSubmitted))
                        ) {
                            if (r._options.resolver)
                                r._executeSchema([s]).then((e) => {
                                    let t = _(e.errors, s),
                                        a = _(r._formState.errors, s);
                                    (a
                                        ? (!t && a.type) || (t && (a.type !== t.type || a.message !== t.message))
                                        : t && t.type) &&
                                        (t ? B(r._formState.errors, s, t) : ed(r._formState.errors, s),
                                        r._subjects.state.next({errors: r._formState.errors}));
                                });
                            else {
                                let e = _(r._fields, s);
                                e &&
                                    e._f &&
                                    er(
                                        e,
                                        r._formValues,
                                        r._options.criteriaMode === v.all,
                                        r._options.shouldUseNativeValidation,
                                        !0,
                                    ).then(
                                        (e) => !F(e) && r._subjects.state.next({errors: P(r._formState.errors, e, s)}),
                                    );
                            }
                        }
                        (r._subjects.values.next({name: s, values: {...r._formValues}}),
                            r._names.focus && U(r._fields, (e) => !!e && e.startsWith(r._names.focus || '')),
                            (r._names.focus = ''),
                            r._updateValid(),
                            (c.current = !1));
                    }, [u, s, r]),
                    a.useEffect(
                        () => (
                            _(r._formValues, s) || r._updateFieldArray(s),
                            () => {
                                (r._options.shouldUnregister || l) && r.unregister(s);
                            }
                        ),
                        [s, r, i, l],
                    ),
                    {
                        swap: a.useCallback(
                            (e, t) => {
                                let a = r._getFieldArray(s);
                                (eo(a, e, t),
                                    eo(o.current, e, t),
                                    y(a),
                                    n(a),
                                    r._updateFieldArray(s, a, eo, {argA: e, argB: t}, !1));
                            },
                            [y, s, r],
                        ),
                        move: a.useCallback(
                            (e, t) => {
                                let a = r._getFieldArray(s);
                                (el(a, e, t),
                                    el(o.current, e, t),
                                    y(a),
                                    n(a),
                                    r._updateFieldArray(s, a, el, {argA: e, argB: t}, !1));
                            },
                            [y, s, r],
                        ),
                        prepend: a.useCallback(
                            (e, t) => {
                                let a = w(m(e)),
                                    i = eu(r._getFieldArray(s), a);
                                ((r._names.focus = R(s, 0, t)),
                                    (o.current = eu(o.current, a.map(N))),
                                    y(i),
                                    n(i),
                                    r._updateFieldArray(s, i, eu, {argA: es(e)}));
                            },
                            [y, s, r],
                        ),
                        append: a.useCallback(
                            (e, t) => {
                                let a = w(m(e)),
                                    i = ea(r._getFieldArray(s), a);
                                ((r._names.focus = R(s, i.length - 1, t)),
                                    (o.current = ea(o.current, a.map(N))),
                                    y(i),
                                    n(i),
                                    r._updateFieldArray(s, i, ea, {argA: es(e)}));
                            },
                            [y, s, r],
                        ),
                        remove: a.useCallback(
                            (e) => {
                                let t = en(r._getFieldArray(s), e);
                                ((o.current = en(o.current, e)), y(t), n(t), r._updateFieldArray(s, t, en, {argA: e}));
                            },
                            [y, s, r],
                        ),
                        insert: a.useCallback(
                            (e, t, a) => {
                                let i = w(m(t)),
                                    l = ei(r._getFieldArray(s), e, i);
                                ((r._names.focus = R(s, e, a)),
                                    (o.current = ei(o.current, e, i.map(N))),
                                    y(l),
                                    n(l),
                                    r._updateFieldArray(s, l, ei, {argA: e, argB: es(t)}));
                            },
                            [y, s, r],
                        ),
                        update: a.useCallback(
                            (e, t) => {
                                let a = m(t),
                                    i = ef(r._getFieldArray(s), e, a);
                                ((o.current = [...i].map((t, r) => (t && r !== e ? o.current[r] : N()))),
                                    y(i),
                                    n([...i]),
                                    r._updateFieldArray(s, i, ef, {argA: e, argB: a}, !0, !1));
                            },
                            [y, s, r],
                        ),
                        replace: a.useCallback(
                            (e) => {
                                let t = w(m(e));
                                ((o.current = t.map(N)),
                                    y([...t]),
                                    n([...t]),
                                    r._updateFieldArray(s, [...t], (e) => e, {}, !0, !1));
                            },
                            [y, s, r],
                        ),
                        fields: a.useMemo(() => u.map((e, t) => ({...e, [i]: o.current[t] || N()})), [u, i]),
                    }
                );
            }
            function ey() {
                let e = [];
                return {
                    get observers() {
                        return e;
                    },
                    next: (t) => {
                        for (let r of e) r.next && r.next(t);
                    },
                    subscribe: (t) => (
                        e.push(t),
                        {
                            unsubscribe: () => {
                                e = e.filter((e) => e !== t);
                            },
                        }
                    ),
                    unsubscribe: () => {
                        e = [];
                    },
                };
            }
            var em = (e) => l(e) || !u(e);
            function ep(e, t) {
                if (em(e) || em(t)) return e === t;
                if (i(e) && i(t)) return e.getTime() === t.getTime();
                let r = Object.keys(e),
                    a = Object.keys(t);
                if (r.length !== a.length) return !1;
                for (let s of r) {
                    let r = e[s];
                    if (!a.includes(s)) return !1;
                    if ('ref' !== s) {
                        let e = t[s];
                        if (
                            (i(r) && i(e)) || (n(r) && n(e)) || (Array.isArray(r) && Array.isArray(e))
                                ? !ep(r, e)
                                : r !== e
                        )
                            return !1;
                    }
                }
                return !0;
            }
            var eh = (e) => 'select-multiple' === e.type,
                e_ = (e) => Q(e) || s(e),
                eg = (e) => W(e) && e.isConnected,
                ev = (e) => {
                    for (let t in e) if (H(e[t])) return !0;
                    return !1;
                };
            function eb(e, t = {}) {
                let r = Array.isArray(e);
                if (n(e) || r)
                    for (let r in e)
                        Array.isArray(e[r]) || (n(e[r]) && !ev(e[r]))
                            ? ((t[r] = Array.isArray(e[r]) ? [] : {}), eb(e[r], t[r]))
                            : l(e[r]) || (t[r] = !0);
                return t;
            }
            var eA = (e, t) =>
                    (function e(t, r, a) {
                        let s = Array.isArray(t);
                        if (n(t) || s)
                            for (let s in t)
                                Array.isArray(t[s]) || (n(t[s]) && !ev(t[s]))
                                    ? h(r) || em(a[s])
                                        ? (a[s] = Array.isArray(t[s]) ? eb(t[s], []) : {...eb(t[s])})
                                        : e(t[s], l(r) ? {} : r[s], a[s])
                                    : (a[s] = !ep(t[s], r[s]));
                        return a;
                    })(e, t, eb(t)),
                ex = (e, {valueAsNumber: t, valueAsDate: r, setValueAs: a}) =>
                    h(e) ? e : t ? ('' === e ? NaN : e ? +e : e) : r && C(e) ? new Date(e) : a ? a(e) : e;
            function eV(e) {
                let t = e.ref;
                return (e.refs ? e.refs.every((e) => e.disabled) : t.disabled)
                    ? void 0
                    : $(t)
                      ? t.files
                      : Q(t)
                        ? Z(e.refs).value
                        : eh(t)
                          ? [...t.selectedOptions].map(({value: e}) => e)
                          : s(t)
                            ? X(e.refs).value
                            : ex(h(t.value) ? e.ref.value : t.value, e);
            }
            var eF = (e, t, r, a) => {
                    let s = {};
                    for (let r of e) {
                        let e = _(t, r);
                        e && B(s, r, e._f);
                    }
                    return {criteriaMode: r, names: [...e], fields: s, shouldUseNativeValidation: a};
                },
                eS = (e) => (h(e) ? e : z(e) ? e.source : n(e) ? (z(e.value) ? e.value.source : e.value) : e),
                ew = (e) =>
                    e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
            function ek(e, t, r) {
                let a = _(e, r);
                if (a || E(r)) return {error: a, name: r};
                let s = r.split('.');
                for (; s.length; ) {
                    let a = s.join('.'),
                        i = _(t, a),
                        l = _(e, a);
                    if (i && !Array.isArray(i) && r !== a) break;
                    if (l && l.type) return {name: a, error: l};
                    s.pop();
                }
                return {name: r};
            }
            var eD = (e, t, r, a, s) =>
                    !s.isOnAll &&
                    (!r && s.isOnTouch
                        ? !(t || e)
                        : (r ? a.isOnBlur : s.isOnBlur)
                          ? !e
                          : (r ? !a.isOnChange : !s.isOnChange) || e),
                eC = (e, t) => !p(_(e, t)).length && ed(e, t);
            let eO = {mode: v.onSubmit, reValidateMode: v.onChange, shouldFocusError: !0};
            function eE(e = {}) {
                let t = a.useRef(),
                    r = a.useRef(),
                    [u, d] = a.useState({
                        isDirty: !1,
                        isValidating: !1,
                        isLoading: H(e.defaultValues),
                        isSubmitted: !1,
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        submitCount: 0,
                        dirtyFields: {},
                        touchedFields: {},
                        errors: {},
                        defaultValues: H(e.defaultValues) ? void 0 : e.defaultValues,
                    });
                t.current ||
                    (t.current = {
                        ...(function (e = {}, t) {
                            let r,
                                a = {...eO, ...e},
                                u = {
                                    submitCount: 0,
                                    isDirty: !1,
                                    isLoading: H(a.defaultValues),
                                    isValidating: !1,
                                    isSubmitted: !1,
                                    isSubmitting: !1,
                                    isSubmitSuccessful: !1,
                                    isValid: !1,
                                    touchedFields: {},
                                    dirtyFields: {},
                                    errors: {},
                                },
                                d = {},
                                c = ((n(a.defaultValues) || n(a.values)) && m(a.defaultValues || a.values)) || {},
                                b = a.shouldUnregister ? {} : m(c),
                                A = {action: !1, mount: !1, watch: !1},
                                x = {mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set()},
                                V = 0,
                                S = {
                                    isDirty: !1,
                                    dirtyFields: !1,
                                    touchedFields: !1,
                                    isValidating: !1,
                                    isValid: !1,
                                    errors: !1,
                                },
                                k = {values: ey(), array: ey(), state: ey()},
                                D = e.resetOptions && e.resetOptions.keepDirtyValues,
                                E = M(a.mode),
                                j = M(a.reValidateMode),
                                L = a.criteriaMode === v.all,
                                T = (e) => (t) => {
                                    (clearTimeout(V), (V = setTimeout(e, t)));
                                },
                                N = async (e) => {
                                    if (S.isValid || e) {
                                        let e = a.resolver ? F((await K()).errors) : await Y(d, !0);
                                        e !== u.isValid && k.state.next({isValid: e});
                                    }
                                },
                                R = (e) => S.isValidating && k.state.next({isValidating: e}),
                                G = (e, t) => {
                                    (B(u.errors, e, t), k.state.next({errors: u.errors}));
                                },
                                Q = (e, t, r, a) => {
                                    let s = _(d, e);
                                    if (s) {
                                        let i = _(b, e, h(r) ? _(c, e) : r);
                                        (h(i) || (a && a.defaultChecked) || t ? B(b, e, t ? i : eV(s._f)) : et(e, i),
                                            A.mount && N());
                                    }
                                },
                                z = (e, t, r, a, s) => {
                                    let i = !1,
                                        l = !1,
                                        n = {name: e};
                                    if (!r || a) {
                                        S.isDirty &&
                                            ((l = u.isDirty), (u.isDirty = n.isDirty = Z()), (i = l !== n.isDirty));
                                        let r = ep(_(c, e), t);
                                        ((l = _(u.dirtyFields, e)),
                                            r ? ed(u.dirtyFields, e) : B(u.dirtyFields, e, !0),
                                            (n.dirtyFields = u.dirtyFields),
                                            (i = i || (S.dirtyFields && !r !== l)));
                                    }
                                    if (r) {
                                        let t = _(u.touchedFields, e);
                                        t ||
                                            (B(u.touchedFields, e, r),
                                            (n.touchedFields = u.touchedFields),
                                            (i = i || (S.touchedFields && t !== r)));
                                    }
                                    return (i && s && k.state.next(n), i ? n : {});
                                },
                                J = (t, a, s, i) => {
                                    let l = _(u.errors, t),
                                        n = S.isValid && I(a) && u.isValid !== a;
                                    if (
                                        (e.delayError && s
                                            ? (r = T(() => G(t, s)))(e.delayError)
                                            : (clearTimeout(V), (r = null), s ? B(u.errors, t, s) : ed(u.errors, t)),
                                        (s ? !ep(l, s) : l) || !F(i) || n)
                                    ) {
                                        let e = {...i, ...(n && I(a) ? {isValid: a} : {}), errors: u.errors, name: t};
                                        ((u = {...u, ...e}), k.state.next(e));
                                    }
                                    R(!1);
                                },
                                K = async (e) =>
                                    a.resolver(
                                        b,
                                        a.context,
                                        eF(e || x.mount, d, a.criteriaMode, a.shouldUseNativeValidation),
                                    ),
                                X = async (e) => {
                                    let {errors: t} = await K();
                                    if (e)
                                        for (let r of e) {
                                            let e = _(t, r);
                                            e ? B(u.errors, r, e) : ed(u.errors, r);
                                        }
                                    else u.errors = t;
                                    return t;
                                },
                                Y = async (e, t, r = {valid: !0}) => {
                                    for (let s in e) {
                                        let i = e[s];
                                        if (i) {
                                            let {_f: e, ...s} = i;
                                            if (e) {
                                                let s = x.array.has(e.name),
                                                    l = await er(i, b, L, a.shouldUseNativeValidation && !t, s);
                                                if (l[e.name] && ((r.valid = !1), t)) break;
                                                t ||
                                                    (_(l, e.name)
                                                        ? s
                                                            ? P(u.errors, l, e.name)
                                                            : B(u.errors, e.name, l[e.name])
                                                        : ed(u.errors, e.name));
                                            }
                                            s && (await Y(s, t, r));
                                        }
                                    }
                                    return r.valid;
                                },
                                Z = (e, t) => (e && t && B(b, e, t), !ep(eu(), c)),
                                ee = (e, t, r) => O(e, x, {...(A.mount ? b : h(t) ? c : C(e) ? {[e]: t} : t)}, r, t),
                                et = (e, t, r = {}) => {
                                    let a = _(d, e),
                                        i = t;
                                    if (a) {
                                        let r = a._f;
                                        r &&
                                            (r.disabled || B(b, e, ex(t, r)),
                                            (i = W(r.ref) && l(t) ? '' : t),
                                            eh(r.ref)
                                                ? [...r.ref.options].forEach((e) => (e.selected = i.includes(e.value)))
                                                : r.refs
                                                  ? s(r.ref)
                                                      ? r.refs.length > 1
                                                          ? r.refs.forEach(
                                                                (e) =>
                                                                    (!e.defaultChecked || !e.disabled) &&
                                                                    (e.checked = Array.isArray(i)
                                                                        ? !!i.find((t) => t === e.value)
                                                                        : i === e.value),
                                                            )
                                                          : r.refs[0] && (r.refs[0].checked = !!i)
                                                      : r.refs.forEach((e) => (e.checked = e.value === i))
                                                  : $(r.ref)
                                                    ? (r.ref.value = '')
                                                    : ((r.ref.value = i),
                                                      r.ref.type || k.values.next({name: e, values: {...b}})));
                                    }
                                    ((r.shouldDirty || r.shouldTouch) && z(e, i, r.shouldTouch, r.shouldDirty, !0),
                                        r.shouldValidate && el(e));
                                },
                                ea = (e, t, r) => {
                                    for (let a in t) {
                                        let s = t[a],
                                            l = `${e}.${a}`,
                                            u = _(d, l);
                                        (!x.array.has(e) && em(s) && (!u || u._f)) || i(s) ? et(l, s, r) : ea(l, s, r);
                                    }
                                },
                                es = (e, r, a = {}) => {
                                    let s = _(d, e),
                                        i = x.array.has(e),
                                        n = m(r);
                                    (B(b, e, n),
                                        i
                                            ? (k.array.next({name: e, values: {...b}}),
                                              (S.isDirty || S.dirtyFields) &&
                                                  a.shouldDirty &&
                                                  k.state.next({name: e, dirtyFields: eA(c, b), isDirty: Z(e, n)}))
                                            : !s || s._f || l(n)
                                              ? et(e, n, a)
                                              : ea(e, n, a),
                                        q(e, x) && k.state.next({...u}),
                                        k.values.next({name: e, values: {...b}}),
                                        A.mount || t());
                                },
                                ei = async (e) => {
                                    let t = e.target,
                                        s = t.name,
                                        i = !0,
                                        l = _(d, s);
                                    if (l) {
                                        let n, f;
                                        let c = t.type ? eV(l._f) : o(e),
                                            y = e.type === g.BLUR || e.type === g.FOCUS_OUT,
                                            m =
                                                (!ew(l._f) && !a.resolver && !_(u.errors, s) && !l._f.deps) ||
                                                eD(y, _(u.touchedFields, s), u.isSubmitted, j, E),
                                            p = q(s, x, y);
                                        (B(b, s, c),
                                            y
                                                ? (l._f.onBlur && l._f.onBlur(e), r && r(0))
                                                : l._f.onChange && l._f.onChange(e));
                                        let h = z(s, c, y, !1),
                                            v = !F(h) || p;
                                        if ((y || k.values.next({name: s, type: e.type, values: {...b}}), m))
                                            return (S.isValid && N(), v && k.state.next({name: s, ...(p ? {} : h)}));
                                        if ((!y && p && k.state.next({...u}), R(!0), a.resolver)) {
                                            let {errors: e} = await K([s]),
                                                t = ek(u.errors, d, s),
                                                r = ek(e, d, t.name || s);
                                            ((n = r.error), (s = r.name), (f = F(e)));
                                        } else
                                            ((n = (await er(l, b, L, a.shouldUseNativeValidation))[s]),
                                                (i = isNaN(c) || c === _(b, s, c)) &&
                                                    (n ? (f = !1) : S.isValid && (f = await Y(d, !0))));
                                        i && (l._f.deps && el(l._f.deps), J(s, f, n, h));
                                    }
                                },
                                el = async (e, t = {}) => {
                                    let r, s;
                                    let i = w(e);
                                    if ((R(!0), a.resolver)) {
                                        let t = await X(h(e) ? e : i);
                                        ((r = F(t)), (s = e ? !i.some((e) => _(t, e)) : r));
                                    } else
                                        e
                                            ? ((s = (
                                                  await Promise.all(
                                                      i.map(async (e) => {
                                                          let t = _(d, e);
                                                          return await Y(t && t._f ? {[e]: t} : t);
                                                      }),
                                                  )
                                              ).every(Boolean)) ||
                                                  u.isValid) &&
                                              N()
                                            : (s = r = await Y(d));
                                    return (
                                        k.state.next({
                                            ...(!C(e) || (S.isValid && r !== u.isValid) ? {} : {name: e}),
                                            ...(a.resolver || !e ? {isValid: r} : {}),
                                            errors: u.errors,
                                            isValidating: !1,
                                        }),
                                        t.shouldFocus && !s && U(d, (e) => e && _(u.errors, e), e ? i : x.mount),
                                        s
                                    );
                                },
                                eu = (e) => {
                                    let t = {...c, ...(A.mount ? b : {})};
                                    return h(e) ? t : C(e) ? _(t, e) : e.map((e) => _(t, e));
                                },
                                en = (e, t) => ({
                                    invalid: !!_((t || u).errors, e),
                                    isDirty: !!_((t || u).dirtyFields, e),
                                    isTouched: !!_((t || u).touchedFields, e),
                                    error: _((t || u).errors, e),
                                }),
                                eo = (e, t, r) => {
                                    let a = (_(d, e, {_f: {}})._f || {}).ref;
                                    (B(u.errors, e, {...t, ref: a}),
                                        k.state.next({name: e, errors: u.errors, isValid: !1}),
                                        r && r.shouldFocus && a && a.focus && a.focus());
                                },
                                ef = (e, t = {}) => {
                                    for (let r of e ? w(e) : x.mount)
                                        (x.mount.delete(r),
                                            x.array.delete(r),
                                            t.keepValue || (ed(d, r), ed(b, r)),
                                            t.keepError || ed(u.errors, r),
                                            t.keepDirty || ed(u.dirtyFields, r),
                                            t.keepTouched || ed(u.touchedFields, r),
                                            a.shouldUnregister || t.keepDefaultValue || ed(c, r));
                                    (k.values.next({values: {...b}}),
                                        k.state.next({...u, ...(t.keepDirty ? {isDirty: Z()} : {})}),
                                        t.keepIsValid || N());
                                },
                                ec = (e, t = {}) => {
                                    let r = _(d, e),
                                        s = I(t.disabled);
                                    return (
                                        B(d, e, {
                                            ...(r || {}),
                                            _f: {...(r && r._f ? r._f : {ref: {name: e}}), name: e, mount: !0, ...t},
                                        }),
                                        x.mount.add(e),
                                        r ? s && B(b, e, t.disabled ? void 0 : _(b, e, eV(r._f))) : Q(e, !0, t.value),
                                        {
                                            ...(s ? {disabled: t.disabled} : {}),
                                            ...(a.progressive
                                                ? {
                                                      required: !!t.required,
                                                      min: eS(t.min),
                                                      max: eS(t.max),
                                                      minLength: eS(t.minLength),
                                                      maxLength: eS(t.maxLength),
                                                      pattern: eS(t.pattern),
                                                  }
                                                : {}),
                                            name: e,
                                            onChange: ei,
                                            onBlur: ei,
                                            ref: (s) => {
                                                if (s) {
                                                    (ec(e, t), (r = _(d, e)));
                                                    let a =
                                                            (h(s.value) &&
                                                                s.querySelectorAll &&
                                                                s.querySelectorAll('input,select,textarea')[0]) ||
                                                            s,
                                                        i = e_(a),
                                                        l = r._f.refs || [];
                                                    (i ? l.find((e) => e === a) : a === r._f.ref) ||
                                                        (B(d, e, {
                                                            _f: {
                                                                ...r._f,
                                                                ...(i
                                                                    ? {
                                                                          refs: [
                                                                              ...l.filter(eg),
                                                                              a,
                                                                              ...(Array.isArray(_(c, e)) ? [{}] : []),
                                                                          ],
                                                                          ref: {type: a.type, name: e},
                                                                      }
                                                                    : {ref: a}),
                                                            },
                                                        }),
                                                        Q(e, !1, void 0, a));
                                                } else
                                                    ((r = _(d, e, {}))._f && (r._f.mount = !1),
                                                        (a.shouldUnregister || t.shouldUnregister) &&
                                                            !(f(x.array, e) && A.action) &&
                                                            x.unMount.add(e));
                                            },
                                        }
                                    );
                                },
                                ev = () => a.shouldFocusError && U(d, (e) => e && _(u.errors, e), x.mount),
                                eb = (e, t) => async (r) => {
                                    r && (r.preventDefault && r.preventDefault(), r.persist && r.persist());
                                    let s = m(b);
                                    if ((k.state.next({isSubmitting: !0}), a.resolver)) {
                                        let {errors: e, values: t} = await K();
                                        ((u.errors = e), (s = t));
                                    } else await Y(d);
                                    (ed(u.errors, 'root'),
                                        F(u.errors)
                                            ? (k.state.next({errors: {}}), await e(s, r))
                                            : (t && (await t({...u.errors}, r)), ev(), setTimeout(ev)),
                                        k.state.next({
                                            isSubmitted: !0,
                                            isSubmitting: !1,
                                            isSubmitSuccessful: F(u.errors),
                                            submitCount: u.submitCount + 1,
                                            errors: u.errors,
                                        }));
                                },
                                eE = (r, a = {}) => {
                                    let s = r || c,
                                        i = m(s),
                                        l = r && !F(r) ? i : c;
                                    if ((a.keepDefaultValues || (c = s), !a.keepValues)) {
                                        if (a.keepDirtyValues || D)
                                            for (let e of x.mount)
                                                _(u.dirtyFields, e) ? B(l, e, _(b, e)) : es(e, _(l, e));
                                        else {
                                            if (y && h(r))
                                                for (let e of x.mount) {
                                                    let t = _(d, e);
                                                    if (t && t._f) {
                                                        let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                                        if (W(e)) {
                                                            let t = e.closest('form');
                                                            if (t) {
                                                                t.reset();
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            d = {};
                                        }
                                        ((b = e.shouldUnregister ? (a.keepDefaultValues ? m(c) : {}) : m(l)),
                                            k.array.next({values: {...l}}),
                                            k.values.next({values: {...l}}));
                                    }
                                    ((x = {
                                        mount: new Set(),
                                        unMount: new Set(),
                                        array: new Set(),
                                        watch: new Set(),
                                        watchAll: !1,
                                        focus: '',
                                    }),
                                        A.mount || t(),
                                        (A.mount = !S.isValid || !!a.keepIsValid),
                                        (A.watch = !!e.shouldUnregister),
                                        k.state.next({
                                            submitCount: a.keepSubmitCount ? u.submitCount : 0,
                                            isDirty: a.keepDirty ? u.isDirty : !!(a.keepDefaultValues && !ep(r, c)),
                                            isSubmitted: !!a.keepIsSubmitted && u.isSubmitted,
                                            dirtyFields: a.keepDirtyValues
                                                ? u.dirtyFields
                                                : a.keepDefaultValues && r
                                                  ? eA(c, r)
                                                  : {},
                                            touchedFields: a.keepTouched ? u.touchedFields : {},
                                            errors: a.keepErrors ? u.errors : {},
                                            isSubmitting: !1,
                                            isSubmitSuccessful: !1,
                                        }));
                                },
                                ej = (e, t) => eE(H(e) ? e(b) : e, t);
                            return {
                                control: {
                                    register: ec,
                                    unregister: ef,
                                    getFieldState: en,
                                    handleSubmit: eb,
                                    setError: eo,
                                    _executeSchema: K,
                                    _getWatch: ee,
                                    _getDirty: Z,
                                    _updateValid: N,
                                    _removeUnmounted: () => {
                                        for (let e of x.unMount) {
                                            let t = _(d, e);
                                            t && (t._f.refs ? t._f.refs.every((e) => !eg(e)) : !eg(t._f.ref)) && ef(e);
                                        }
                                        x.unMount = new Set();
                                    },
                                    _updateFieldArray: (e, t = [], r, a, s = !0, i = !0) => {
                                        if (a && r) {
                                            if (((A.action = !0), i && Array.isArray(_(d, e)))) {
                                                let t = r(_(d, e), a.argA, a.argB);
                                                s && B(d, e, t);
                                            }
                                            if (i && Array.isArray(_(u.errors, e))) {
                                                let t = r(_(u.errors, e), a.argA, a.argB);
                                                (s && B(u.errors, e, t), eC(u.errors, e));
                                            }
                                            if (S.touchedFields && i && Array.isArray(_(u.touchedFields, e))) {
                                                let t = r(_(u.touchedFields, e), a.argA, a.argB);
                                                s && B(u.touchedFields, e, t);
                                            }
                                            (S.dirtyFields && (u.dirtyFields = eA(c, b)),
                                                k.state.next({
                                                    name: e,
                                                    isDirty: Z(e, t),
                                                    dirtyFields: u.dirtyFields,
                                                    errors: u.errors,
                                                    isValid: u.isValid,
                                                }));
                                        } else B(b, e, t);
                                    },
                                    _getFieldArray: (t) =>
                                        p(_(A.mount ? b : c, t, e.shouldUnregister ? _(c, t, []) : [])),
                                    _reset: eE,
                                    _resetDefaultValues: () =>
                                        H(a.defaultValues) &&
                                        a.defaultValues().then((e) => {
                                            (ej(e, a.resetOptions), k.state.next({isLoading: !1}));
                                        }),
                                    _updateFormState: (e) => {
                                        u = {...u, ...e};
                                    },
                                    _subjects: k,
                                    _proxyFormState: S,
                                    get _fields() {
                                        return d;
                                    },
                                    get _formValues() {
                                        return b;
                                    },
                                    get _state() {
                                        return A;
                                    },
                                    set _state(value) {
                                        A = value;
                                    },
                                    get _defaultValues() {
                                        return c;
                                    },
                                    get _names() {
                                        return x;
                                    },
                                    set _names(value) {
                                        x = value;
                                    },
                                    get _formState() {
                                        return u;
                                    },
                                    set _formState(value) {
                                        u = value;
                                    },
                                    get _options() {
                                        return a;
                                    },
                                    set _options(value) {
                                        a = {...a, ...value};
                                    },
                                },
                                trigger: el,
                                register: ec,
                                handleSubmit: eb,
                                watch: (e, t) =>
                                    H(e) ? k.values.subscribe({next: (r) => e(ee(void 0, t), r)}) : ee(e, t, !0),
                                setValue: es,
                                getValues: eu,
                                reset: ej,
                                resetField: (e, t = {}) => {
                                    _(d, e) &&
                                        (h(t.defaultValue)
                                            ? es(e, _(c, e))
                                            : (es(e, t.defaultValue), B(c, e, t.defaultValue)),
                                        t.keepTouched || ed(u.touchedFields, e),
                                        t.keepDirty ||
                                            (ed(u.dirtyFields, e), (u.isDirty = t.defaultValue ? Z(e, _(c, e)) : Z())),
                                        !t.keepError && (ed(u.errors, e), S.isValid && N()),
                                        k.state.next({...u}));
                                },
                                clearErrors: (e) => {
                                    (e && w(e).forEach((e) => ed(u.errors, e)),
                                        k.state.next({errors: e ? u.errors : {}}));
                                },
                                unregister: ef,
                                setError: eo,
                                setFocus: (e, t = {}) => {
                                    let r = _(d, e),
                                        a = r && r._f;
                                    if (a) {
                                        let e = a.refs ? a.refs[0] : a.ref;
                                        e.focus && (e.focus(), t.shouldSelect && e.select());
                                    }
                                },
                                getFieldState: en,
                            };
                        })(e, () => d((e) => ({...e}))),
                        formState: u,
                    });
                let c = t.current.control;
                return (
                    (c._options = e),
                    D({
                        subject: c._subjects.state,
                        next: (e) => {
                            S(e, c._proxyFormState, c._updateFormState, !0) && d({...c._formState});
                        },
                    }),
                    a.useEffect(() => {
                        e.values && !ep(e.values, r.current)
                            ? (c._reset(e.values, c._options.resetOptions), (r.current = e.values))
                            : c._resetDefaultValues();
                    }, [e.values, c]),
                    a.useEffect(() => {
                        (c._state.mount || (c._updateValid(), (c._state.mount = !0)),
                            c._state.watch && ((c._state.watch = !1), c._subjects.state.next({...c._formState})),
                            c._removeUnmounted());
                    }),
                    (t.current.formState = V(u, c)),
                    t.current
                );
            }
        },
    },
]);
