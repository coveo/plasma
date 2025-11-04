'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [65962],
    {
        92027: function (e, t, n) {
            n.d(t, {
                A: function () {
                    return r;
                },
            });
            let r =
                '<svg viewBox="0 0 12.6 7.2" xmlns="http://www.w3.org/2000/svg"><path d="m11.421 7.04c-.3 0-.5-.1-.7-.3l-4.6-4.6-4.6 4.6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l5.2-5.2c.4-.4 1.2-.4 1.6 0l5.2 5.2c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3" transform="matrix(-1 0 0 -1 12.366 7.086)"/></svg>';
        },
        2108: function (e, t, n) {
            n.d(t, {
                B: function () {
                    return a;
                },
            });
            var r = n(5991),
                o = n(60375),
                i = n(35126);
            let a = (e, t) => {
                let n = (0, i.g)(e.style),
                    a = (0, i.a)(e.style),
                    s = {
                        class: e.class ? `${a} ${e.class}` : a,
                        part: e.part,
                        onClick: e.onClick,
                        title: e.title,
                        type: e.type,
                        role: e.role,
                        'aria-label': e.ariaLabel,
                        'aria-expanded': e.ariaExpanded,
                        'aria-pressed': e.ariaPressed,
                        'aria-checked': e.ariaChecked,
                        'aria-current': e.ariaCurrent,
                        'aria-controls': e.ariaControls,
                        'aria-hidden': e.ariaHidden,
                        disabled: e.disabled,
                        ref(t) {
                            var n;
                            (e.form && (null == t || t.setAttribute('form', e.form)),
                                e.ariaHidden && (null == t || t.setAttribute('aria-hidden', e.ariaHidden)),
                                e.tabIndex && (null == t || t.setAttribute('tabindex', e.tabIndex)),
                                null === (n = e.ref) || void 0 === n || n.call(e, t));
                        },
                    };
                return (0, r.h)(
                    'button',
                    {...s, onMouseDown: (e) => (0, o.c)(e, {color: n})},
                    e.text ? (0, r.h)('span', {class: 'truncate'}, e.text) : null,
                    t,
                );
            };
        },
        35126: function (e, t, n) {
            function r(e) {
                switch (e) {
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
            function o(e) {
                switch (e) {
                    case 'primary':
                        return 'primary';
                    case 'text-transparent':
                        return 'neutral-light';
                    default:
                        return 'neutral';
                }
            }
            n.d(t, {
                a: function () {
                    return r;
                },
                g: function () {
                    return o;
                },
            });
        },
        75291: function (e, t, n) {
            function r(e, t) {
                return new CustomEvent(e, {detail: t, bubbles: !0, cancelable: !0, composed: !0});
            }
            function o(e, t, n, r) {
                let o = (i) => {
                    (e.removeEventListener(t, o, r), 'object' == typeof n ? n.handleEvent.call(e, i) : n.call(e, i));
                };
                e.addEventListener(t, o, r);
            }
            n.d(t, {
                b: function () {
                    return r;
                },
                l: function () {
                    return o;
                },
            });
        },
        8807: function (e, t, n) {
            n.d(t, {
                B: function () {
                    return h;
                },
                H: function () {
                    return a;
                },
                I: function () {
                    return p;
                },
                a: function () {
                    return s;
                },
                b: function () {
                    return f;
                },
            });
            var r = n(5991),
                o = n(75291),
                i = n(66038);
            let a = () => (0, r.h)(r.H, {class: 'atomic-hidden'}),
                s = 'atomic/initializeComponent',
                l = [
                    'atomic-recs-interface',
                    'atomic-search-interface',
                    'atomic-relevance-inspector',
                    'atomic-insight-interface',
                    'atomic-external',
                ];
            class c extends Error {
                constructor(e) {
                    super(`The "${e}" element must be the child of the following elements: ${l.join(', ')}`);
                }
            }
            function f(e) {
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
            let u = 'data-atomic-rendered',
                d = 'data-atomic-loaded';
            function p({forceUpdate: e} = {}) {
                return (t, n) => {
                    let {
                            componentWillLoad: p,
                            render: h,
                            componentDidRender: m,
                            componentDidLoad: b,
                            disconnectedCallback: g,
                        } = t,
                        v = () => {};
                    if ('bindings' !== n)
                        return console.error(
                            `The InitializeBindings decorator should be used on a property called "bindings", and not "${n}"`,
                            t,
                        );
                    ((t.componentWillLoad = function () {
                        let t = (0, r.g)(this);
                        (t.setAttribute(u, 'false'), t.setAttribute(d, 'false'));
                        let n = (0, o.b)(s, (t) => {
                            this.bindings = t;
                            let n = () => (0, r.f)(this);
                            (this.bindings.i18n.on('languageChanged', n),
                                (v = () => this.bindings.i18n.off('languageChanged', n)));
                            try {
                                this.initialize ? (this.initialize(), e && (0, r.f)(this)) : (0, r.f)(this);
                            } catch (e) {
                                this.error = e;
                            }
                        });
                        if ((t.dispatchEvent(n), !(0, i.c)(t, l.join(', ')))) {
                            this.error = new c(t.nodeName.toLowerCase());
                            return;
                        }
                        return p && p.call(this);
                    }),
                        (t.render = function () {
                            return this.error
                                ? (0, r.h)('atomic-component-error', {element: (0, r.g)(this), error: this.error})
                                : this.bindings
                                  ? ((0, r.g)(this).setAttribute(u, 'true'), h && h.call(this))
                                  : (0, r.h)(a, null);
                        }),
                        (t.disconnectedCallback = function () {
                            let e = (0, r.g)(this);
                            (e.setAttribute(u, 'false'), e.setAttribute(d, 'false'), v(), g && g.call(this));
                        }),
                        (t.componentDidRender = function () {
                            let e = (0, r.g)(this);
                            'false' !== e.getAttribute(u) &&
                                (m && m.call(this),
                                'false' === e.getAttribute(d) &&
                                    (e.setAttribute(d, 'true'), f((0, r.g)(this)), b && b.call(this)));
                        }),
                        (t.componentDidLoad = function () {}));
                };
            }
            function h(e, t) {
                return (n, o) => {
                    let {disconnectedCallback: i, initialize: a} = n;
                    ((n.initialize = function () {
                        return (a && a.call(this), a)
                            ? this[e]
                                ? (null == t ? void 0 : t.onUpdateCallbackMethod) && !this[t.onUpdateCallbackMethod]
                                    ? console.error(
                                          `ControllerState: The onUpdateCallbackMethod property "${t.onUpdateCallbackMethod}" is not defined`,
                                          n,
                                      )
                                    : void (this.unsubscribeController = this[e].subscribe(() => {
                                          ((this[o] = this[e].state),
                                              (null == t ? void 0 : t.onUpdateCallbackMethod) &&
                                                  this[t.onUpdateCallbackMethod]());
                                      }))
                                : void 0
                            : console.error(
                                  `ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${e}`,
                                  n,
                              );
                    }),
                        (n.disconnectedCallback = function () {
                            var e;
                            ((0, r.g)(this).isConnected ||
                                null === (e = this.unsubscribeController) ||
                                void 0 === e ||
                                e.call(this),
                                i && i.call(this));
                        }));
                };
            }
        },
        36317: function (e, t, n) {
            n.d(t, {
                c: function () {
                    return ee;
                },
                p: function () {
                    return X;
                },
            });
            var r,
                o,
                i,
                a,
                s,
                l = 'bottom',
                c = 'right',
                f = 'left',
                u = ['top', l, c, f],
                d = 'start',
                p = 'viewport',
                h = 'popper',
                m = [
                    'beforeRead',
                    'read',
                    'afterRead',
                    'beforeMain',
                    'main',
                    'afterMain',
                    'beforeWrite',
                    'write',
                    'afterWrite',
                ];
            function b(e) {
                return e ? (e.nodeName || '').toLowerCase() : null;
            }
            function g(e) {
                if (null == e) return window;
                if ('[object Window]' !== e.toString()) {
                    var t = e.ownerDocument;
                    return (t && t.defaultView) || window;
                }
                return e;
            }
            function v(e) {
                var t = g(e).Element;
                return e instanceof t || e instanceof Element;
            }
            function y(e) {
                var t = g(e).HTMLElement;
                return e instanceof t || e instanceof HTMLElement;
            }
            function w(e) {
                if ('undefined' == typeof ShadowRoot) return !1;
                var t = g(e).ShadowRoot;
                return e instanceof t || e instanceof ShadowRoot;
            }
            function x(e) {
                return e.split('-')[0];
            }
            var O = Math.max,
                E = Math.min,
                A = Math.round;
            function C() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands)
                    ? e.brands
                          .map(function (e) {
                              return e.brand + '/' + e.version;
                          })
                          .join(' ')
                    : navigator.userAgent;
            }
            function k() {
                return !/^((?!chrome|android).)*safari/i.test(C());
            }
            function j(e, t, n) {
                (void 0 === t && (t = !1), void 0 === n && (n = !1));
                var r = e.getBoundingClientRect(),
                    o = 1,
                    i = 1;
                t &&
                    y(e) &&
                    ((o = (e.offsetWidth > 0 && A(r.width) / e.offsetWidth) || 1),
                    (i = (e.offsetHeight > 0 && A(r.height) / e.offsetHeight) || 1));
                var a = (v(e) ? g(e) : window).visualViewport,
                    s = !k() && n,
                    l = (r.left + (s && a ? a.offsetLeft : 0)) / o,
                    c = (r.top + (s && a ? a.offsetTop : 0)) / i,
                    f = r.width / o,
                    u = r.height / i;
                return {width: f, height: u, top: c, right: l + f, bottom: c + u, left: l, x: l, y: c};
            }
            function S(e) {
                var t = j(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return (
                    1 >= Math.abs(t.width - n) && (n = t.width),
                    1 >= Math.abs(t.height - r) && (r = t.height),
                    {x: e.offsetLeft, y: e.offsetTop, width: n, height: r}
                );
            }
            function L(e) {
                return g(e).getComputedStyle(e);
            }
            function M(e) {
                return ((v(e) ? e.ownerDocument : e.document) || window.document).documentElement;
            }
            function P(e) {
                return 'html' === b(e) ? e : e.assignedSlot || e.parentNode || (w(e) ? e.host : null) || M(e);
            }
            function D(e) {
                return y(e) && 'fixed' !== L(e).position ? e.offsetParent : null;
            }
            function T(e) {
                for (
                    var t = g(e), n = D(e);
                    n && ['table', 'td', 'th'].indexOf(b(n)) >= 0 && 'static' === L(n).position;

                )
                    n = D(n);
                return n && ('html' === b(n) || ('body' === b(n) && 'static' === L(n).position))
                    ? t
                    : n ||
                          (function (e) {
                              var t = /firefox/i.test(C());
                              if (/Trident/i.test(C()) && y(e) && 'fixed' === L(e).position) return null;
                              var n = P(e);
                              for (w(n) && (n = n.host); y(n) && 0 > ['html', 'body'].indexOf(b(n)); ) {
                                  var r = L(n);
                                  if (
                                      'none' !== r.transform ||
                                      'none' !== r.perspective ||
                                      'paint' === r.contain ||
                                      -1 !== ['transform', 'perspective'].indexOf(r.willChange) ||
                                      (t && 'filter' === r.willChange) ||
                                      (t && r.filter && 'none' !== r.filter)
                                  )
                                      return n;
                                  n = n.parentNode;
                              }
                              return null;
                          })(e) ||
                          t;
            }
            function W(e) {
                return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
            }
            function H() {
                return {top: 0, right: 0, bottom: 0, left: 0};
            }
            function q(e) {
                return e.split('-')[1];
            }
            var R = {top: 'auto', right: 'auto', bottom: 'auto', left: 'auto'};
            function B(e) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    s,
                    u = e.popper,
                    d = e.popperRect,
                    p = e.placement,
                    h = e.variation,
                    m = e.offsets,
                    b = e.position,
                    v = e.gpuAcceleration,
                    y = e.adaptive,
                    w = e.roundOffsets,
                    x = e.isFixed,
                    O = m.x,
                    E = void 0 === O ? 0 : O,
                    C = m.y,
                    k = void 0 === C ? 0 : C,
                    j = 'function' == typeof w ? w({x: E, y: k}) : {x: E, y: k};
                ((E = j.x), (k = j.y));
                var S = m.hasOwnProperty('x'),
                    P = m.hasOwnProperty('y'),
                    D = f,
                    W = 'top',
                    H = window;
                if (y) {
                    var q = T(u),
                        B = 'clientHeight',
                        $ = 'clientWidth';
                    (q === g(u) &&
                        'static' !== L((q = M(u))).position &&
                        'absolute' === b &&
                        ((B = 'scrollHeight'), ($ = 'scrollWidth')),
                        ('top' === p || ((p === f || p === c) && 'end' === h)) &&
                            ((W = l),
                            (k -= (x && q === H && H.visualViewport ? H.visualViewport.height : q[B]) - d.height),
                            (k *= v ? 1 : -1)),
                        (p === f || (('top' === p || p === l) && 'end' === h)) &&
                            ((D = c),
                            (E -= (x && q === H && H.visualViewport ? H.visualViewport.width : q[$]) - d.width),
                            (E *= v ? 1 : -1)));
                }
                var I = Object.assign({position: b}, y && R),
                    N =
                        !0 === w
                            ? ((t = {x: E, y: k}),
                              (n = g(u)),
                              (r = t.x),
                              (o = t.y),
                              {x: A(r * (i = n.devicePixelRatio || 1)) / i || 0, y: A(o * i) / i || 0})
                            : {x: E, y: k};
                return ((E = N.x), (k = N.y), v)
                    ? Object.assign(
                          {},
                          I,
                          (((s = {})[W] = P ? '0' : ''),
                          (s[D] = S ? '0' : ''),
                          (s.transform =
                              1 >= (H.devicePixelRatio || 1)
                                  ? 'translate(' + E + 'px, ' + k + 'px)'
                                  : 'translate3d(' + E + 'px, ' + k + 'px, 0)'),
                          s),
                      )
                    : Object.assign(
                          {},
                          I,
                          (((a = {})[W] = P ? k + 'px' : ''), (a[D] = S ? E + 'px' : ''), (a.transform = ''), a),
                      );
            }
            var $ = {passive: !0};
            function I(e) {
                var t = g(e);
                return {scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset};
            }
            function N(e) {
                return j(M(e)).left + I(e).scrollLeft;
            }
            function U(e) {
                var t = L(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r);
            }
            function V(e, t) {
                void 0 === t && (t = []);
                var n,
                    r = (function e(t) {
                        return ['html', 'body', '#document'].indexOf(b(t)) >= 0
                            ? t.ownerDocument.body
                            : y(t) && U(t)
                              ? t
                              : e(P(t));
                    })(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = g(r),
                    a = o ? [i].concat(i.visualViewport || [], U(r) ? r : []) : r,
                    s = t.concat(a);
                return o ? s : s.concat(V(P(a)));
            }
            function z(e) {
                return Object.assign({}, e, {left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height});
            }
            function F(e, t, n) {
                var r, o, i, a, s, l, c, f, u, d;
                return t === p
                    ? z(
                          (function (e, t) {
                              var n = g(e),
                                  r = M(e),
                                  o = n.visualViewport,
                                  i = r.clientWidth,
                                  a = r.clientHeight,
                                  s = 0,
                                  l = 0;
                              if (o) {
                                  ((i = o.width), (a = o.height));
                                  var c = k();
                                  (c || (!c && 'fixed' === t)) && ((s = o.offsetLeft), (l = o.offsetTop));
                              }
                              return {width: i, height: a, x: s + N(e), y: l};
                          })(e, n),
                      )
                    : v(t)
                      ? (((r = j(t, !1, 'fixed' === n)).top = r.top + t.clientTop),
                        (r.left = r.left + t.clientLeft),
                        (r.bottom = r.top + t.clientHeight),
                        (r.right = r.left + t.clientWidth),
                        (r.width = t.clientWidth),
                        (r.height = t.clientHeight),
                        (r.x = r.left),
                        (r.y = r.top),
                        r)
                      : z(
                            ((o = M(e)),
                            (a = M(o)),
                            (s = I(o)),
                            (l = null == (i = o.ownerDocument) ? void 0 : i.body),
                            (c = O(a.scrollWidth, a.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0)),
                            (f = O(a.scrollHeight, a.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0)),
                            (u = -s.scrollLeft + N(o)),
                            (d = -s.scrollTop),
                            'rtl' === L(l || a).direction && (u += O(a.clientWidth, l ? l.clientWidth : 0) - c),
                            {width: c, height: f, x: u, y: d}),
                        );
            }
            function _(e) {
                var t,
                    n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? x(o) : null,
                    a = o ? q(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    u = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case 'top':
                        t = {x: s, y: n.y - r.height};
                        break;
                    case l:
                        t = {x: s, y: n.y + n.height};
                        break;
                    case c:
                        t = {x: n.x + n.width, y: u};
                        break;
                    case f:
                        t = {x: n.x - r.width, y: u};
                        break;
                    default:
                        t = {x: n.x, y: n.y};
                }
                var p = i ? W(i) : null;
                if (null != p) {
                    var h = 'y' === p ? 'height' : 'width';
                    switch (a) {
                        case d:
                            t[p] = t[p] - (n[h] / 2 - r[h] / 2);
                            break;
                        case 'end':
                            t[p] = t[p] + (n[h] / 2 - r[h] / 2);
                    }
                }
                return t;
            }
            let X = {
                name: 'preventOverflow',
                enabled: !0,
                phase: 'main',
                fn: function (e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        o = n.mainAxis,
                        i = n.altAxis,
                        a = n.boundary,
                        s = n.rootBoundary,
                        m = n.altBoundary,
                        g = n.padding,
                        A = n.tether,
                        C = void 0 === A || A,
                        k = n.tetherOffset,
                        D = void 0 === k ? 0 : k,
                        R = (function (e, t) {
                            void 0 === t && (t = {});
                            var n,
                                r,
                                o,
                                i,
                                a,
                                s,
                                f,
                                d,
                                m = t,
                                g = m.placement,
                                x = void 0 === g ? e.placement : g,
                                A = m.strategy,
                                C = void 0 === A ? e.strategy : A,
                                k = m.boundary,
                                S = m.rootBoundary,
                                D = m.elementContext,
                                W = void 0 === D ? h : D,
                                q = m.altBoundary,
                                R = m.padding,
                                B = void 0 === R ? 0 : R,
                                $ =
                                    ((n =
                                        'number' != typeof B
                                            ? B
                                            : u.reduce(function (e, t) {
                                                  return ((e[t] = B), e);
                                              }, {})),
                                    Object.assign({}, H(), n)),
                                I = e.rects.popper,
                                N = e.elements[void 0 !== q && q ? (W === h ? 'reference' : h) : W],
                                U =
                                    ((r = v(N) ? N : N.contextElement || M(e.elements.popper)),
                                    (f = (s = [].concat(
                                        'clippingParents' === (o = void 0 === k ? 'clippingParents' : k)
                                            ? ((i = V(P(r))),
                                              v(
                                                  (a =
                                                      ['absolute', 'fixed'].indexOf(L(r).position) >= 0 && y(r)
                                                          ? T(r)
                                                          : r),
                                              )
                                                  ? i.filter(function (e) {
                                                        return (
                                                            v(e) &&
                                                            (function (e, t) {
                                                                var n = t.getRootNode && t.getRootNode();
                                                                if (e.contains(t)) return !0;
                                                                if (n && w(n)) {
                                                                    var r = t;
                                                                    do {
                                                                        if (r && e.isSameNode(r)) return !0;
                                                                        r = r.parentNode || r.host;
                                                                    } while (r);
                                                                }
                                                                return !1;
                                                            })(e, a) &&
                                                            'body' !== b(e)
                                                        );
                                                    })
                                                  : [])
                                            : [].concat(o),
                                        [void 0 === S ? p : S],
                                    ))[0]),
                                    ((d = s.reduce(
                                        function (e, t) {
                                            var n = F(r, t, C);
                                            return (
                                                (e.top = O(n.top, e.top)),
                                                (e.right = E(n.right, e.right)),
                                                (e.bottom = E(n.bottom, e.bottom)),
                                                (e.left = O(n.left, e.left)),
                                                e
                                            );
                                        },
                                        F(r, f, C),
                                    )).width = d.right - d.left),
                                    (d.height = d.bottom - d.top),
                                    (d.x = d.left),
                                    (d.y = d.top),
                                    d),
                                X = j(e.elements.reference),
                                Y = _({reference: X, element: I, strategy: 'absolute', placement: x}),
                                J = z(Object.assign({}, I, Y)),
                                G = W === h ? J : X,
                                K = {
                                    top: U.top - G.top + $.top,
                                    bottom: G.bottom - U.bottom + $.bottom,
                                    left: U.left - G.left + $.left,
                                    right: G.right - U.right + $.right,
                                },
                                Q = e.modifiersData.offset;
                            if (W === h && Q) {
                                var Z = Q[x];
                                Object.keys(K).forEach(function (e) {
                                    var t = [c, l].indexOf(e) >= 0 ? 1 : -1,
                                        n = ['top', l].indexOf(e) >= 0 ? 'y' : 'x';
                                    K[e] += Z[n] * t;
                                });
                            }
                            return K;
                        })(t, {boundary: a, rootBoundary: s, padding: g, altBoundary: m}),
                        B = x(t.placement),
                        $ = q(t.placement),
                        I = !$,
                        N = W(B),
                        U = 'x' === N ? 'y' : 'x',
                        X = t.modifiersData.popperOffsets,
                        Y = t.rects.reference,
                        J = t.rects.popper,
                        G = 'function' == typeof D ? D(Object.assign({}, t.rects, {placement: t.placement})) : D,
                        K =
                            'number' == typeof G
                                ? {mainAxis: G, altAxis: G}
                                : Object.assign({mainAxis: 0, altAxis: 0}, G),
                        Q = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        Z = {x: 0, y: 0};
                    if (X) {
                        if (void 0 === o || o) {
                            var ee,
                                et,
                                en,
                                er = 'y' === N ? 'top' : f,
                                eo = 'y' === N ? l : c,
                                ei = 'y' === N ? 'height' : 'width',
                                ea = X[N],
                                es = ea + R[er],
                                el = ea - R[eo],
                                ec = C ? -J[ei] / 2 : 0,
                                ef = $ === d ? Y[ei] : J[ei],
                                eu = $ === d ? -J[ei] : -Y[ei],
                                ed = t.elements.arrow,
                                ep = C && ed ? S(ed) : {width: 0, height: 0},
                                eh = t.modifiersData['arrow#persistent']
                                    ? t.modifiersData['arrow#persistent'].padding
                                    : H(),
                                em = eh[er],
                                eb = eh[eo],
                                eg = O(0, E(Y[ei], ep[ei])),
                                ev = I ? Y[ei] / 2 - ec - eg - em - K.mainAxis : ef - eg - em - K.mainAxis,
                                ey = I ? -Y[ei] / 2 + ec + eg + eb + K.mainAxis : eu + eg + eb + K.mainAxis,
                                ew = t.elements.arrow && T(t.elements.arrow),
                                ex = ew ? ('y' === N ? ew.clientTop || 0 : ew.clientLeft || 0) : 0,
                                eO = null != (en = null == Q ? void 0 : Q[N]) ? en : 0,
                                eE = ea + ev - eO - ex,
                                eA = ea + ey - eO,
                                eC = ((ee = C ? E(es, eE) : es), (et = C ? O(el, eA) : el), O(ee, E(ea, et)));
                            ((X[N] = eC), (Z[N] = eC - ea));
                        }
                        if (void 0 !== i && i) {
                            var ek,
                                ej,
                                eS = X[U],
                                eL = 'y' === U ? 'height' : 'width',
                                eM = eS + R['x' === N ? 'top' : f],
                                eP = eS - R['x' === N ? l : c],
                                eD = -1 !== ['top', f].indexOf(B),
                                eT = null != (ej = null == Q ? void 0 : Q[U]) ? ej : 0,
                                eW = eD ? eM : eS - Y[eL] - J[eL] - eT + K.altAxis,
                                eH = eD ? eS + Y[eL] + J[eL] - eT - K.altAxis : eP,
                                eq =
                                    C && eD
                                        ? (ek = O(eW, E(eS, eH))) > eH
                                            ? eH
                                            : ek
                                        : O(C ? eW : eM, E(eS, C ? eH : eP));
                            ((X[U] = eq), (Z[U] = eq - eS));
                        }
                        t.modifiersData[r] = Z;
                    }
                },
                requiresIfExists: ['offset'],
            };
            function Y(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return [].concat(n).reduce(function (e, t) {
                    return e.replace(/%s/, t);
                }, e);
            }
            var J = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
                G = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'],
                K =
                    'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.',
                Q = {placement: 'bottom', modifiers: [], strategy: 'absolute'};
            function Z() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some(function (e) {
                    return !(e && 'function' == typeof e.getBoundingClientRect);
                });
            }
            var ee =
                ((i =
                    void 0 ===
                    (o = (r = {
                        defaultModifiers: [
                            {
                                name: 'eventListeners',
                                enabled: !0,
                                phase: 'write',
                                fn: function () {},
                                effect: function (e) {
                                    var t = e.state,
                                        n = e.instance,
                                        r = e.options,
                                        o = r.scroll,
                                        i = void 0 === o || o,
                                        a = r.resize,
                                        s = void 0 === a || a,
                                        l = g(t.elements.popper),
                                        c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                                    return (
                                        i &&
                                            c.forEach(function (e) {
                                                e.addEventListener('scroll', n.update, $);
                                            }),
                                        s && l.addEventListener('resize', n.update, $),
                                        function () {
                                            (i &&
                                                c.forEach(function (e) {
                                                    e.removeEventListener('scroll', n.update, $);
                                                }),
                                                s && l.removeEventListener('resize', n.update, $));
                                        }
                                    );
                                },
                                data: {},
                            },
                            {
                                name: 'popperOffsets',
                                enabled: !0,
                                phase: 'read',
                                fn: function (e) {
                                    var t = e.state,
                                        n = e.name;
                                    t.modifiersData[n] = _({
                                        reference: t.rects.reference,
                                        element: t.rects.popper,
                                        strategy: 'absolute',
                                        placement: t.placement,
                                    });
                                },
                                data: {},
                            },
                            {
                                name: 'computeStyles',
                                enabled: !0,
                                phase: 'beforeWrite',
                                fn: function (e) {
                                    var t = e.state,
                                        n = e.options,
                                        r = n.gpuAcceleration,
                                        o = n.adaptive,
                                        i = void 0 === o || o,
                                        a = n.roundOffsets,
                                        s = void 0 === a || a,
                                        l = L(t.elements.popper).transitionProperty || '';
                                    i &&
                                        ['transform', 'top', 'right', 'bottom', 'left'].some(function (e) {
                                            return l.indexOf(e) >= 0;
                                        }) &&
                                        console.warn(
                                            'Popper: Detected CSS transitions on at least one of the following CSS properties: "transform", "top", "right", "bottom", "left". \n\n Disable the "computeStyles" modifier\'s `adaptive` option to allow for smooth transitions, or remove these properties from the CSS transition declaration on the popper element if only transitioning opacity or background-color for example. \n\n We recommend using the popper element as a wrapper around an inner element that can have any CSS property transitioned for animations.',
                                        );
                                    var c = {
                                        placement: x(t.placement),
                                        variation: q(t.placement),
                                        popper: t.elements.popper,
                                        popperRect: t.rects.popper,
                                        gpuAcceleration: void 0 === r || r,
                                        isFixed: 'fixed' === t.options.strategy,
                                    };
                                    (null != t.modifiersData.popperOffsets &&
                                        (t.styles.popper = Object.assign(
                                            {},
                                            t.styles.popper,
                                            B(
                                                Object.assign({}, c, {
                                                    offsets: t.modifiersData.popperOffsets,
                                                    position: t.options.strategy,
                                                    adaptive: i,
                                                    roundOffsets: s,
                                                }),
                                            ),
                                        )),
                                        null != t.modifiersData.arrow &&
                                            (t.styles.arrow = Object.assign(
                                                {},
                                                t.styles.arrow,
                                                B(
                                                    Object.assign({}, c, {
                                                        offsets: t.modifiersData.arrow,
                                                        position: 'absolute',
                                                        adaptive: !1,
                                                        roundOffsets: s,
                                                    }),
                                                ),
                                            )),
                                        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                            'data-popper-placement': t.placement,
                                        })));
                                },
                                data: {},
                            },
                            {
                                name: 'applyStyles',
                                enabled: !0,
                                phase: 'write',
                                fn: function (e) {
                                    var t = e.state;
                                    Object.keys(t.elements).forEach(function (e) {
                                        var n = t.styles[e] || {},
                                            r = t.attributes[e] || {},
                                            o = t.elements[e];
                                        y(o) &&
                                            b(o) &&
                                            (Object.assign(o.style, n),
                                            Object.keys(r).forEach(function (e) {
                                                var t = r[e];
                                                !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? '' : t);
                                            }));
                                    });
                                },
                                effect: function (e) {
                                    var t = e.state,
                                        n = {
                                            popper: {position: t.options.strategy, left: '0', top: '0', margin: '0'},
                                            arrow: {position: 'absolute'},
                                            reference: {},
                                        };
                                    return (
                                        Object.assign(t.elements.popper.style, n.popper),
                                        (t.styles = n),
                                        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                        function () {
                                            Object.keys(t.elements).forEach(function (e) {
                                                var r = t.elements[e],
                                                    o = t.attributes[e] || {},
                                                    i = Object.keys(
                                                        t.styles.hasOwnProperty(e) ? t.styles[e] : n[e],
                                                    ).reduce(function (e, t) {
                                                        return ((e[t] = ''), e);
                                                    }, {});
                                                y(r) &&
                                                    b(r) &&
                                                    (Object.assign(r.style, i),
                                                    Object.keys(o).forEach(function (e) {
                                                        r.removeAttribute(e);
                                                    }));
                                            });
                                        }
                                    );
                                },
                                requires: ['computeStyles'],
                            },
                        ],
                    }).defaultModifiers)
                        ? []
                        : o),
                (s = void 0 === (a = r.defaultOptions) ? Q : a),
                function (e, t, n) {
                    void 0 === n && (n = s);
                    var r,
                        o = {
                            placement: 'bottom',
                            orderedModifiers: [],
                            options: Object.assign({}, Q, s),
                            modifiersData: {},
                            elements: {reference: e, popper: t},
                            attributes: {},
                            styles: {},
                        },
                        a = [],
                        l = !1,
                        c = {
                            state: o,
                            setOptions: function (n) {
                                var r,
                                    l,
                                    u,
                                    d,
                                    p,
                                    h,
                                    b,
                                    g = 'function' == typeof n ? n(o.options) : n;
                                (f(),
                                    (o.options = Object.assign({}, s, o.options, g)),
                                    (o.scrollParents = {
                                        reference: v(e) ? V(e) : e.contextElement ? V(e.contextElement) : [],
                                        popper: V(t),
                                    }));
                                var y =
                                    ((l = Object.keys(
                                        (r = [].concat(i, o.options.modifiers).reduce(function (e, t) {
                                            var n = e[t.name];
                                            return (
                                                (e[t.name] = n
                                                    ? Object.assign({}, n, t, {
                                                          options: Object.assign({}, n.options, t.options),
                                                          data: Object.assign({}, n.data, t.data),
                                                      })
                                                    : t),
                                                e
                                            );
                                        }, {})),
                                    ).map(function (e) {
                                        return r[e];
                                    })),
                                    (u = new Map()),
                                    (d = new Set()),
                                    (p = []),
                                    l.forEach(function (e) {
                                        u.set(e.name, e);
                                    }),
                                    l.forEach(function (e) {
                                        d.has(e.name) ||
                                            (function e(t) {
                                                (d.add(t.name),
                                                    []
                                                        .concat(t.requires || [], t.requiresIfExists || [])
                                                        .forEach(function (t) {
                                                            if (!d.has(t)) {
                                                                var n = u.get(t);
                                                                n && e(n);
                                                            }
                                                        }),
                                                    p.push(t));
                                            })(e);
                                    }),
                                    m.reduce(function (e, t) {
                                        return e.concat(
                                            p.filter(function (e) {
                                                return e.phase === t;
                                            }),
                                        );
                                    }, []));
                                ((o.orderedModifiers = y.filter(function (e) {
                                    return e.enabled;
                                })),
                                    (function (e) {
                                        e.forEach(function (t) {
                                            []
                                                .concat(Object.keys(t), G)
                                                .filter(function (e, t, n) {
                                                    return n.indexOf(e) === t;
                                                })
                                                .forEach(function (n) {
                                                    switch (n) {
                                                        case 'name':
                                                            'string' != typeof t.name &&
                                                                console.error(
                                                                    Y(
                                                                        J,
                                                                        String(t.name),
                                                                        '"name"',
                                                                        '"string"',
                                                                        '"' + String(t.name) + '"',
                                                                    ),
                                                                );
                                                            break;
                                                        case 'enabled':
                                                            'boolean' != typeof t.enabled &&
                                                                console.error(
                                                                    Y(
                                                                        J,
                                                                        t.name,
                                                                        '"enabled"',
                                                                        '"boolean"',
                                                                        '"' + String(t.enabled) + '"',
                                                                    ),
                                                                );
                                                            break;
                                                        case 'phase':
                                                            0 > m.indexOf(t.phase) &&
                                                                console.error(
                                                                    Y(
                                                                        J,
                                                                        t.name,
                                                                        '"phase"',
                                                                        'either ' + m.join(', '),
                                                                        '"' + String(t.phase) + '"',
                                                                    ),
                                                                );
                                                            break;
                                                        case 'fn':
                                                            'function' != typeof t.fn &&
                                                                console.error(
                                                                    Y(
                                                                        J,
                                                                        t.name,
                                                                        '"fn"',
                                                                        '"function"',
                                                                        '"' + String(t.fn) + '"',
                                                                    ),
                                                                );
                                                            break;
                                                        case 'effect':
                                                            null != t.effect &&
                                                                'function' != typeof t.effect &&
                                                                console.error(
                                                                    Y(
                                                                        J,
                                                                        t.name,
                                                                        '"effect"',
                                                                        '"function"',
                                                                        '"' + String(t.fn) + '"',
                                                                    ),
                                                                );
                                                            break;
                                                        case 'requires':
                                                            null == t.requires ||
                                                                Array.isArray(t.requires) ||
                                                                console.error(
                                                                    Y(
                                                                        J,
                                                                        t.name,
                                                                        '"requires"',
                                                                        '"array"',
                                                                        '"' + String(t.requires) + '"',
                                                                    ),
                                                                );
                                                            break;
                                                        case 'requiresIfExists':
                                                            Array.isArray(t.requiresIfExists) ||
                                                                console.error(
                                                                    Y(
                                                                        J,
                                                                        t.name,
                                                                        '"requiresIfExists"',
                                                                        '"array"',
                                                                        '"' + String(t.requiresIfExists) + '"',
                                                                    ),
                                                                );
                                                            break;
                                                        case 'options':
                                                        case 'data':
                                                            break;
                                                        default:
                                                            console.error(
                                                                'PopperJS: an invalid property has been provided to the "' +
                                                                    t.name +
                                                                    '" modifier, valid properties are ' +
                                                                    G.map(function (e) {
                                                                        return '"' + e + '"';
                                                                    }).join(', ') +
                                                                    '; but "' +
                                                                    n +
                                                                    '" was provided.',
                                                            );
                                                    }
                                                    t.requires &&
                                                        t.requires.forEach(function (n) {
                                                            null ==
                                                                e.find(function (e) {
                                                                    return e.name === n;
                                                                }) &&
                                                                console.error(
                                                                    Y(
                                                                        'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
                                                                        String(t.name),
                                                                        n,
                                                                        n,
                                                                    ),
                                                                );
                                                        });
                                                });
                                        });
                                    })(
                                        ((h = [].concat(y, o.options.modifiers)),
                                        (b = new Set()),
                                        h.filter(function (e) {
                                            var t = e.name;
                                            if (!b.has(t)) return (b.add(t), !0);
                                        })),
                                    ),
                                    'auto' !== x(o.options.placement) ||
                                        o.orderedModifiers.find(function (e) {
                                            return 'flip' === e.name;
                                        }) ||
                                        console.error(
                                            'Popper: "auto" placements require the "flip" modifier be present and enabled to work.',
                                        ));
                                var w = L(t);
                                return (
                                    [w.marginTop, w.marginRight, w.marginBottom, w.marginLeft].some(function (e) {
                                        return parseFloat(e);
                                    }) &&
                                        console.warn(
                                            'Popper: CSS "margin" styles cannot be used to apply padding between the popper and its reference element or boundary. To replicate margin, use the `offset` modifier, as well as the `padding` option in the `preventOverflow` and `flip` modifiers.',
                                        ),
                                    o.orderedModifiers.forEach(function (e) {
                                        var t = e.name,
                                            n = e.options,
                                            r = e.effect;
                                        if ('function' == typeof r) {
                                            var i = r({state: o, name: t, instance: c, options: void 0 === n ? {} : n});
                                            a.push(i || function () {});
                                        }
                                    }),
                                    c.update()
                                );
                            },
                            forceUpdate: function () {
                                if (!l) {
                                    var e,
                                        t,
                                        n,
                                        r,
                                        i,
                                        a,
                                        s,
                                        f,
                                        u,
                                        d,
                                        p,
                                        h,
                                        m = o.elements,
                                        v = m.reference,
                                        w = m.popper;
                                    if (!Z(v, w)) {
                                        console.error(K);
                                        return;
                                    }
                                    ((o.rects = {
                                        reference:
                                            ((t = T(w)),
                                            (n = 'fixed' === o.options.strategy),
                                            (r = y(t)),
                                            (f =
                                                y(t) &&
                                                ((a = A((i = t.getBoundingClientRect()).width) / t.offsetWidth || 1),
                                                (s = A(i.height) / t.offsetHeight || 1),
                                                1 !== a || 1 !== s)),
                                            (u = M(t)),
                                            (d = j(v, f, n)),
                                            (p = {scrollLeft: 0, scrollTop: 0}),
                                            (h = {x: 0, y: 0}),
                                            (r || (!r && !n)) &&
                                                (('body' !== b(t) || U(u)) &&
                                                    (p =
                                                        (e = t) !== g(e) && y(e)
                                                            ? {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop}
                                                            : I(e)),
                                                y(t)
                                                    ? ((h = j(t, !0)), (h.x += t.clientLeft), (h.y += t.clientTop))
                                                    : u && (h.x = N(u))),
                                            {
                                                x: d.left + p.scrollLeft - h.x,
                                                y: d.top + p.scrollTop - h.y,
                                                width: d.width,
                                                height: d.height,
                                            }),
                                        popper: S(w),
                                    }),
                                        (o.reset = !1),
                                        (o.placement = o.options.placement),
                                        o.orderedModifiers.forEach(function (e) {
                                            return (o.modifiersData[e.name] = Object.assign({}, e.data));
                                        }));
                                    for (var x = 0, O = 0; O < o.orderedModifiers.length; O++) {
                                        if ((x += 1) > 100) {
                                            console.error(
                                                'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.',
                                            );
                                            break;
                                        }
                                        if (!0 === o.reset) {
                                            ((o.reset = !1), (O = -1));
                                            continue;
                                        }
                                        var E = o.orderedModifiers[O],
                                            C = E.fn,
                                            k = E.options,
                                            L = void 0 === k ? {} : k,
                                            P = E.name;
                                        'function' == typeof C &&
                                            (o = C({state: o, options: L, name: P, instance: c}) || o);
                                    }
                                }
                            },
                            update: function () {
                                return (
                                    r ||
                                        (r = new Promise(function (e) {
                                            Promise.resolve().then(function () {
                                                ((r = void 0),
                                                    e(
                                                        new Promise(function (e) {
                                                            (c.forceUpdate(), e(o));
                                                        }),
                                                    ));
                                            });
                                        })),
                                    r
                                );
                            },
                            destroy: function () {
                                (f(), (l = !0));
                            },
                        };
                    if (!Z(e, t)) return (console.error(K), c);
                    function f() {
                        (a.forEach(function (e) {
                            return e();
                        }),
                            (a = []));
                    }
                    return (
                        c.setOptions(n).then(function (e) {
                            !l && n.onFirstUpdate && n.onFirstUpdate(e);
                        }),
                        c
                    );
                });
        },
        60375: function (e, t, n) {
            n.d(t, {
                c: function () {
                    return a;
                },
            });
            var r = n(75291);
            let o = 'ripple';
            function i(e) {
                'static' === getComputedStyle(e).position && e.classList.add('ripple-relative');
            }
            function a(e, t) {
                var n;
                let r = null !== (n = t.parent) && void 0 !== n ? n : e.currentTarget,
                    a = r.getElementsByClassName(o)[0];
                (a && a.remove(), r.classList.add('ripple-parent'), i(r), Array.from(r.children).forEach(i));
                let l = document.createElement('span');
                (l.classList.add(o), (l.style.backgroundColor = `var(--atomic-${t.color})`), l.setAttribute('part', o));
                let c = Math.max(r.clientWidth, r.clientHeight),
                    f = c / 2,
                    u = 129.21 * Math.cbrt(f),
                    {top: d, left: p} = r.getBoundingClientRect();
                ((l.style.width = l.style.height = `${c}px`),
                    (l.style.left = `${e.clientX - (p + f)}px`),
                    (l.style.top = `${e.clientY - (d + f)}px`),
                    l.style.setProperty('--animation-duration', `${u}ms`),
                    r.prepend(l),
                    s(l, u));
            }
            async function s(e, t) {
                ((0, r.l)(e, 'animationend', () => {
                    e && e.remove();
                }),
                    setTimeout(() => (null == e ? void 0 : e.remove()), t + 0.1 * t));
            }
        },
    },
]);
