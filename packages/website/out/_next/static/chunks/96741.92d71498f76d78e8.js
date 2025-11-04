'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [96741],
    {
        96741: function (t, i, n) {
            (n.r(i),
                n.d(i, {
                    atomic_format_number: function () {
                        return o;
                    },
                }));
            var r = n(5991),
                e = n(63975);
            let o = class {
                constructor(t) {
                    ((0, r.r)(this, t),
                        (this.format = (t, i) =>
                            t.toLocaleString(i, {
                                minimumIntegerDigits: this.minimumIntegerDigits,
                                minimumFractionDigits: this.minimumFractionDigits,
                                maximumFractionDigits: this.maximumFractionDigits,
                                minimumSignificantDigits: this.minimumSignificantDigits,
                                maximumSignificantDigits: this.maximumSignificantDigits,
                            })));
                }
                componentWillLoad() {
                    try {
                        (0, e.d)((t, i) => this.format(t, i), this.host);
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
        75291: function (t, i, n) {
            function r(t, i) {
                return new CustomEvent(t, {detail: i, bubbles: !0, cancelable: !0, composed: !0});
            }
            function e(t, i, n, r) {
                let e = (o) => {
                    (t.removeEventListener(i, e, r), 'object' == typeof n ? n.handleEvent.call(t, o) : n.call(t, o));
                };
                t.addEventListener(i, e, r);
            }
            n.d(i, {
                b: function () {
                    return r;
                },
                l: function () {
                    return e;
                },
            });
        },
        63975: function (t, i, n) {
            n.d(i, {
                a: function () {
                    return o;
                },
                d: function () {
                    return e;
                },
            });
            var r = n(75291);
            let e = (t, i) => {
                    let n = (0, r.b)('atomic/numberFormat', t),
                        e = i.dispatchEvent(n);
                    if (e)
                        throw Error(
                            'The Atomic number format component was not handled, as it is not a child of a compatible component',
                        );
                },
                o = (t, i) => t.toLocaleString(i);
        },
    },
]);
