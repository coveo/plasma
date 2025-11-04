'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [74756],
    {
        74756: function (t, r, e) {
            (e.r(r),
                e.d(r, {
                    atomic_format_currency: function () {
                        return c;
                    },
                }));
            var n = e(5991),
                o = e(63975);
            let c = class {
                constructor(t) {
                    ((0, n.r)(this, t),
                        (this.format = (t, r) => t.toLocaleString(r, {style: 'currency', currency: this.currency})));
                }
                componentWillLoad() {
                    try {
                        (0, o.d)((t, r) => this.format(t, r), this.host);
                    } catch (t) {
                        this.error = t;
                    }
                }
                render() {
                    if (this.error) return (0, n.h)('atomic-component-error', {element: this.host, error: this.error});
                }
                get host() {
                    return (0, n.g)(this);
                }
            };
        },
        75291: function (t, r, e) {
            function n(t, r) {
                return new CustomEvent(t, {detail: r, bubbles: !0, cancelable: !0, composed: !0});
            }
            function o(t, r, e, n) {
                let o = (c) => {
                    (t.removeEventListener(r, o, n), 'object' == typeof e ? e.handleEvent.call(t, c) : e.call(t, c));
                };
                t.addEventListener(r, o, n);
            }
            e.d(r, {
                b: function () {
                    return n;
                },
                l: function () {
                    return o;
                },
            });
        },
        63975: function (t, r, e) {
            e.d(r, {
                a: function () {
                    return c;
                },
                d: function () {
                    return o;
                },
            });
            var n = e(75291);
            let o = (t, r) => {
                    let e = (0, n.b)('atomic/numberFormat', t),
                        o = r.dispatchEvent(e);
                    if (o)
                        throw Error(
                            'The Atomic number format component was not handled, as it is not a child of a compatible component',
                        );
                },
                c = (t, r) => t.toLocaleString(r);
        },
    },
]);
