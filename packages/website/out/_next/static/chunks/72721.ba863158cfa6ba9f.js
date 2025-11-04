'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [72721],
    {
        72721: function (e, t, o) {
            (o.r(t),
                o.d(t, {
                    atomic_sort_expression: function () {
                        return s;
                    },
                }));
            var r = o(5991);
            let s = class {
                constructor(e) {
                    (0, r.r)(this, e);
                }
                render() {
                    let e = 'atomic-sort-dropdown';
                    if (!this.host.closest(e)) {
                        let t = Error(
                            `The "${this.host.nodeName.toLowerCase()}" component has to be used inside an ${e} element.`,
                        );
                        return (0, r.h)('atomic-component-error', {element: this.host, error: t});
                    }
                }
                get host() {
                    return (0, r.g)(this);
                }
            };
        },
    },
]);
