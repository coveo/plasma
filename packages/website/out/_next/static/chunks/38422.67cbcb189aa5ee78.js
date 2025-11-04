'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38422],
    {
        38422: function (t, s, n) {
            (n.r(s),
                n.d(s, {
                    atomic_focus_detector: function () {
                        return i;
                    },
                }));
            var o = n(5991),
                c = n(66038);
            n(87856);
            let i = class {
                constructor(t) {
                    ((0, o.r)(this, t),
                        (this.focusEnter = (0, o.c)(this, 'focusEnter', 7)),
                        (this.focusExit = (0, o.c)(this, 'focusExit', 7)),
                        (this.focusWasContained = this.containsFocus));
                }
                get containsFocus() {
                    let t = (0, c.q)();
                    return !!t && (0, c.n)(this.host, t);
                }
                onFocusIn() {
                    this.onFocusChanged();
                }
                onFocusOut() {
                    this.onFocusChanged();
                }
                onFocusChanged() {
                    let t = this.containsFocus;
                    t !== this.focusWasContained &&
                        ((this.focusWasContained = t), t ? this.focusEnter.emit() : this.focusExit.emit());
                }
                render() {
                    return (0, o.h)(o.H, {style: {display: 'contents'}});
                }
                get host() {
                    return (0, o.g)(this);
                }
            };
        },
    },
]);
