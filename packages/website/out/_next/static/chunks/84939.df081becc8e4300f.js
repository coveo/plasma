'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [84939],
    {
        84939: function (t, n, e) {
            (e.r(n),
                e.d(n, {
                    atomic_format_unit: function () {
                        return i;
                    },
                }));
            var r = e(5991),
                o = e(63975);
            let i = class {
                constructor(t) {
                    ((0, r.r)(this, t),
                        (this.unitDisplay = 'short'),
                        (this.format = (t, n) =>
                            t.toLocaleString(n, {style: 'unit', unit: this.unit, unitDisplay: this.unitDisplay})));
                }
                componentWillLoad() {
                    try {
                        (0, o.d)((t, n) => this.format(t, n), this.host);
                    } catch (t) {
                        this.error = t;
                    }
                }
                render() {
                    if (this.error) return (0, r.h)('atomic-component-error', {element: this.host, error: this.error});
                }
                get host() {
                    return (0, r.g)(this);
                }
            };
        },
        75291: function (t, n, e) {
            function r(t, n) {
                return new CustomEvent(t, {detail: n, bubbles: !0, cancelable: !0, composed: !0});
            }
            function o(t, n, e, r) {
                let o = (i) => {
                    (t.removeEventListener(n, o, r), 'object' == typeof e ? e.handleEvent.call(t, i) : e.call(t, i));
                };
                t.addEventListener(n, o, r);
            }
            e.d(n, {
                b: function () {
                    return r;
                },
                l: function () {
                    return o;
                },
            });
        },
        63975: function (t, n, e) {
            e.d(n, {
                a: function () {
                    return i;
                },
                d: function () {
                    return o;
                },
            });
            var r = e(75291);
            let o = (t, n) => {
                    let e = (0, r.b)('atomic/numberFormat', t),
                        o = n.dispatchEvent(e);
                    if (o)
                        throw Error(
                            'The Atomic number format component was not handled, as it is not a child of a compatible component',
                        );
                },
                i = (t, n) => t.toLocaleString(n);
        },
    },
]);
