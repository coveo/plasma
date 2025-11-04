(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [12377],
    {
        91904: function (t, e, n) {
            !(function (t) {
                function e(e, n, r) {
                    var o,
                        i = e.getWrapperElement();
                    return (
                        (o = i.appendChild(document.createElement('div'))),
                        r
                            ? (o.className = 'CodeMirror-dialog CodeMirror-dialog-bottom')
                            : (o.className = 'CodeMirror-dialog CodeMirror-dialog-top'),
                        'string' == typeof n ? (o.innerHTML = n) : o.appendChild(n),
                        t.addClass(i, 'dialog-opened'),
                        o
                    );
                }
                function n(t, e) {
                    (t.state.currentNotificationClose && t.state.currentNotificationClose(),
                        (t.state.currentNotificationClose = e));
                }
                (t.defineExtension('openDialog', function (r, o, i) {
                    (i || (i = {}), n(this, null));
                    var s = e(this, r, i.bottom),
                        a = !1,
                        c = this;
                    function l(e) {
                        if ('string' == typeof e) f.value = e;
                        else {
                            if (a) return;
                            ((a = !0),
                                t.rmClass(s.parentNode, 'dialog-opened'),
                                s.parentNode.removeChild(s),
                                c.focus(),
                                i.onClose && i.onClose(s));
                        }
                    }
                    var u,
                        f = s.getElementsByTagName('input')[0];
                    return (
                        f
                            ? (f.focus(),
                              i.value && ((f.value = i.value), !1 !== i.selectValueOnOpen && f.select()),
                              i.onInput &&
                                  t.on(f, 'input', function (t) {
                                      i.onInput(t, f.value, l);
                                  }),
                              i.onKeyUp &&
                                  t.on(f, 'keyup', function (t) {
                                      i.onKeyUp(t, f.value, l);
                                  }),
                              t.on(f, 'keydown', function (e) {
                                  (i && i.onKeyDown && i.onKeyDown(e, f.value, l)) ||
                                      ((27 == e.keyCode || (!1 !== i.closeOnEnter && 13 == e.keyCode)) &&
                                          (f.blur(), t.e_stop(e), l()),
                                      13 == e.keyCode && o(f.value, e));
                              }),
                              !1 !== i.closeOnBlur &&
                                  t.on(s, 'focusout', function (t) {
                                      null !== t.relatedTarget && l();
                                  }))
                            : (u = s.getElementsByTagName('button')[0]) &&
                              (t.on(u, 'click', function () {
                                  (l(), c.focus());
                              }),
                              !1 !== i.closeOnBlur && t.on(u, 'blur', l),
                              u.focus()),
                        l
                    );
                }),
                    t.defineExtension('openConfirm', function (r, o, i) {
                        n(this, null);
                        var s = e(this, r, i && i.bottom),
                            a = s.getElementsByTagName('button'),
                            c = !1,
                            l = this,
                            u = 1;
                        function f() {
                            c ||
                                ((c = !0),
                                t.rmClass(s.parentNode, 'dialog-opened'),
                                s.parentNode.removeChild(s),
                                l.focus());
                        }
                        a[0].focus();
                        for (var d = 0; d < a.length; ++d) {
                            var p = a[d];
                            ((function (e) {
                                t.on(p, 'click', function (n) {
                                    (t.e_preventDefault(n), f(), e && e(l));
                                });
                            })(o[d]),
                                t.on(p, 'blur', function () {
                                    (--u,
                                        setTimeout(function () {
                                            u <= 0 && f();
                                        }, 200));
                                }),
                                t.on(p, 'focus', function () {
                                    ++u;
                                }));
                        }
                    }),
                    t.defineExtension('openNotification', function (r, o) {
                        n(this, l);
                        var i,
                            s = e(this, r, o && o.bottom),
                            a = !1,
                            c = o && void 0 !== o.duration ? o.duration : 5e3;
                        function l() {
                            a ||
                                ((a = !0),
                                clearTimeout(i),
                                t.rmClass(s.parentNode, 'dialog-opened'),
                                s.parentNode.removeChild(s));
                        }
                        return (
                            t.on(s, 'click', function (e) {
                                (t.e_preventDefault(e), l());
                            }),
                            c && (i = setTimeout(l, c)),
                            l
                        );
                    }));
            })(n(46831));
        },
        97527: function (t, e, n) {
            !(function (t) {
                'use strict';
                function e(e, n, o, i) {
                    if (o && o.call) {
                        var s = o;
                        o = null;
                    } else var s = r(e, o, 'rangeFinder');
                    'number' == typeof n && (n = t.Pos(n, 0));
                    var a = r(e, o, 'minFoldSize');
                    function c(t) {
                        var r = s(e, n);
                        if (!r || r.to.line - r.from.line < a) return null;
                        if ('fold' === i) return r;
                        for (var o = e.findMarksAt(r.from), c = 0; c < o.length; ++c)
                            if (o[c].__isFold) {
                                if (!t) return null;
                                ((r.cleared = !0), o[c].clear());
                            }
                        return r;
                    }
                    var l = c(!0);
                    if (r(e, o, 'scanUp'))
                        for (; !l && n.line > e.firstLine(); ) ((n = t.Pos(n.line - 1, 0)), (l = c(!1)));
                    if (l && !l.cleared && 'unfold' !== i) {
                        var u = (function (t, e, n) {
                            var o = r(t, e, 'widget');
                            if (('function' == typeof o && (o = o(n.from, n.to)), 'string' == typeof o)) {
                                var i = document.createTextNode(o);
                                ((o = document.createElement('span')).appendChild(i),
                                    (o.className = 'CodeMirror-foldmarker'));
                            } else o && (o = o.cloneNode(!0));
                            return o;
                        })(e, o, l);
                        t.on(u, 'mousedown', function (e) {
                            (f.clear(), t.e_preventDefault(e));
                        });
                        var f = e.markText(l.from, l.to, {
                            replacedWith: u,
                            clearOnEnter: r(e, o, 'clearOnEnter'),
                            __isFold: !0,
                        });
                        (f.on('clear', function (n, r) {
                            t.signal(e, 'unfold', e, n, r);
                        }),
                            t.signal(e, 'fold', e, l.from, l.to));
                    }
                }
                ((t.newFoldFunction = function (t, n) {
                    return function (r, o) {
                        e(r, o, {rangeFinder: t, widget: n});
                    };
                }),
                    t.defineExtension('foldCode', function (t, n, r) {
                        e(this, t, n, r);
                    }),
                    t.defineExtension('isFolded', function (t) {
                        for (var e = this.findMarksAt(t), n = 0; n < e.length; ++n) if (e[n].__isFold) return !0;
                    }),
                    (t.commands.toggleFold = function (t) {
                        t.foldCode(t.getCursor());
                    }),
                    (t.commands.fold = function (t) {
                        t.foldCode(t.getCursor(), null, 'fold');
                    }),
                    (t.commands.unfold = function (t) {
                        t.foldCode(t.getCursor(), {scanUp: !1}, 'unfold');
                    }),
                    (t.commands.foldAll = function (e) {
                        e.operation(function () {
                            for (var n = e.firstLine(), r = e.lastLine(); n <= r; n++)
                                e.foldCode(t.Pos(n, 0), {scanUp: !1}, 'fold');
                        });
                    }),
                    (t.commands.unfoldAll = function (e) {
                        e.operation(function () {
                            for (var n = e.firstLine(), r = e.lastLine(); n <= r; n++)
                                e.foldCode(t.Pos(n, 0), {scanUp: !1}, 'unfold');
                        });
                    }),
                    t.registerHelper('fold', 'combine', function () {
                        var t = Array.prototype.slice.call(arguments, 0);
                        return function (e, n) {
                            for (var r = 0; r < t.length; ++r) {
                                var o = t[r](e, n);
                                if (o) return o;
                            }
                        };
                    }),
                    t.registerHelper('fold', 'auto', function (t, e) {
                        for (var n = t.getHelpers(e, 'fold'), r = 0; r < n.length; r++) {
                            var o = n[r](t, e);
                            if (o) return o;
                        }
                    }));
                var n = {rangeFinder: t.fold.auto, widget: '↔', minFoldSize: 0, scanUp: !1, clearOnEnter: !0};
                function r(t, e, r) {
                    if (e && void 0 !== e[r]) return e[r];
                    var o = t.options.foldOptions;
                    return o && void 0 !== o[r] ? o[r] : n[r];
                }
                (t.defineOption('foldOptions', null),
                    t.defineExtension('foldOption', function (t, e) {
                        return r(this, t, e);
                    }));
            })(n(46831));
        },
        32211: function (t, e, n) {
            !(function (t) {
                'use strict';
                t.defineOption('foldGutter', !1, function (e, r, o) {
                    var i;
                    (o &&
                        o != t.Init &&
                        (e.clearGutter(e.state.foldGutter.options.gutter),
                        (e.state.foldGutter = null),
                        e.off('gutterClick', c),
                        e.off('changes', u),
                        e.off('viewportChange', f),
                        e.off('fold', d),
                        e.off('unfold', d),
                        e.off('swapDoc', u),
                        e.off('optionChange', l)),
                        r &&
                            ((e.state.foldGutter = new n(
                                (!0 === (i = r) && (i = {}),
                                null == i.gutter && (i.gutter = 'CodeMirror-foldgutter'),
                                null == i.indicatorOpen && (i.indicatorOpen = 'CodeMirror-foldgutter-open'),
                                null == i.indicatorFolded && (i.indicatorFolded = 'CodeMirror-foldgutter-folded'),
                                i),
                            )),
                            a(e),
                            e.on('gutterClick', c),
                            e.on('changes', u),
                            e.on('viewportChange', f),
                            e.on('fold', d),
                            e.on('unfold', d),
                            e.on('swapDoc', u),
                            e.on('optionChange', l)));
                });
                var e = t.Pos;
                function n(t) {
                    ((this.options = t), (this.from = this.to = 0));
                }
                function r(t, n) {
                    for (var r = t.findMarks(e(n, 0), e(n + 1, 0)), o = 0; o < r.length; ++o)
                        if (r[o].__isFold) {
                            var i = r[o].find(-1);
                            if (i && i.line === n) return r[o];
                        }
                }
                function o(t) {
                    if ('string' != typeof t) return t.cloneNode(!0);
                    var e = document.createElement('div');
                    return ((e.className = t + ' CodeMirror-guttermarker-subtle'), e);
                }
                function i(t, n, i) {
                    var a = t.state.foldGutter.options,
                        c = n - 1,
                        l = t.foldOption(a, 'minFoldSize'),
                        u = t.foldOption(a, 'rangeFinder'),
                        f = 'string' == typeof a.indicatorFolded && s(a.indicatorFolded),
                        d = 'string' == typeof a.indicatorOpen && s(a.indicatorOpen);
                    t.eachLine(n, i, function (n) {
                        ++c;
                        var i = null,
                            s = n.gutterMarkers;
                        if ((s && (s = s[a.gutter]), r(t, c))) {
                            if (f && s && f.test(s.className)) return;
                            i = o(a.indicatorFolded);
                        } else {
                            var p = e(c, 0),
                                h = u && u(t, p);
                            if (h && h.to.line - h.from.line >= l) {
                                if (d && s && d.test(s.className)) return;
                                i = o(a.indicatorOpen);
                            }
                        }
                        (i || s) && t.setGutterMarker(n, a.gutter, i);
                    });
                }
                function s(t) {
                    return RegExp('(^|\\s)' + t + '(?:$|\\s)\\s*');
                }
                function a(t) {
                    var e = t.getViewport(),
                        n = t.state.foldGutter;
                    n &&
                        (t.operation(function () {
                            i(t, e.from, e.to);
                        }),
                        (n.from = e.from),
                        (n.to = e.to));
                }
                function c(t, n, o) {
                    var i = t.state.foldGutter;
                    if (i) {
                        var s = i.options;
                        if (o == s.gutter) {
                            var a = r(t, n);
                            a ? a.clear() : t.foldCode(e(n, 0), s);
                        }
                    }
                }
                function l(t, e) {
                    'mode' == e && u(t);
                }
                function u(t) {
                    var e = t.state.foldGutter;
                    if (e) {
                        var n = e.options;
                        ((e.from = e.to = 0),
                            clearTimeout(e.changeUpdate),
                            (e.changeUpdate = setTimeout(function () {
                                a(t);
                            }, n.foldOnChangeTimeSpan || 600)));
                    }
                }
                function f(t) {
                    var e = t.state.foldGutter;
                    if (e) {
                        var n = e.options;
                        (clearTimeout(e.changeUpdate),
                            (e.changeUpdate = setTimeout(function () {
                                var n = t.getViewport();
                                e.from == e.to || n.from - e.to > 20 || e.from - n.to > 20
                                    ? a(t)
                                    : t.operation(function () {
                                          (n.from < e.from && (i(t, n.from, e.from), (e.from = n.from)),
                                              n.to > e.to && (i(t, e.to, n.to), (e.to = n.to)));
                                      });
                            }, n.updateViewportTimeSpan || 400)));
                    }
                }
                function d(t, e) {
                    var n = t.state.foldGutter;
                    if (n) {
                        var r = e.line;
                        r >= n.from && r < n.to && i(t, r, r + 1);
                    }
                }
            })(n(46831), n(97527));
        },
        96267: function (t, e, n) {
            !(function (t) {
                'use strict';
                var e = /[\w$]+/;
                t.registerHelper('hint', 'anyword', function (n, r) {
                    for (
                        var o = (r && r.word) || e,
                            i = (r && r.range) || 500,
                            s = n.getCursor(),
                            a = n.getLine(s.line),
                            c = s.ch,
                            l = c;
                        l && o.test(a.charAt(l - 1));

                    )
                        --l;
                    for (
                        var u = l != c && a.slice(l, c),
                            f = (r && r.list) || [],
                            d = {},
                            p = RegExp(o.source, 'g'),
                            h = -1;
                        h <= 1;
                        h += 2
                    )
                        for (
                            var m = s.line, g = Math.min(Math.max(m + h * i, n.firstLine()), n.lastLine()) + h;
                            m != g;
                            m += h
                        )
                            for (var v, y = n.getLine(m); (v = p.exec(y)); )
                                (m != s.line || v[0] !== u) &&
                                    ((u && 0 != v[0].lastIndexOf(u, 0)) ||
                                        Object.prototype.hasOwnProperty.call(d, v[0]) ||
                                        ((d[v[0]] = !0), f.push(v[0])));
                    return {list: f, from: t.Pos(s.line, l), to: t.Pos(s.line, c)};
                });
            })(n(46831));
        },
        54717: function (t, e, n) {
            !(function (t) {
                'use strict';
                var e = 'CodeMirror-hint-active';
                function n(t, e) {
                    if (
                        ((this.cm = t),
                        (this.options = e),
                        (this.widget = null),
                        (this.debounce = 0),
                        (this.tick = 0),
                        (this.startPos = this.cm.getCursor('start')),
                        (this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length),
                        this.options.updateOnCursorActivity)
                    ) {
                        var n = this;
                        t.on(
                            'cursorActivity',
                            (this.activityFunc = function () {
                                n.cursorActivity();
                            }),
                        );
                    }
                }
                ((t.showHint = function (t, e, n) {
                    if (!e) return t.showHint(n);
                    n && n.async && (e.async = !0);
                    var r = {hint: e};
                    if (n) for (var o in n) r[o] = n[o];
                    return t.showHint(r);
                }),
                    t.defineExtension('showHint', function (e) {
                        e = (function (t, e, n) {
                            var r = t.options.hintOptions,
                                o = {};
                            for (var i in l) o[i] = l[i];
                            if (r) for (var i in r) void 0 !== r[i] && (o[i] = r[i]);
                            if (n) for (var i in n) void 0 !== n[i] && (o[i] = n[i]);
                            return (o.hint.resolve && (o.hint = o.hint.resolve(t, e)), o);
                        })(this, this.getCursor('start'), e);
                        var r = this.listSelections();
                        if (!(r.length > 1)) {
                            if (this.somethingSelected()) {
                                if (!e.hint.supportsSelection) return;
                                for (var o = 0; o < r.length; o++) if (r[o].head.line != r[o].anchor.line) return;
                            }
                            this.state.completionActive && this.state.completionActive.close();
                            var i = (this.state.completionActive = new n(this, e));
                            i.options.hint && (t.signal(this, 'startCompletion', this), i.update(!0));
                        }
                    }),
                    t.defineExtension('closeHint', function () {
                        this.state.completionActive && this.state.completionActive.close();
                    }));
                var r =
                        window.requestAnimationFrame ||
                        function (t) {
                            return setTimeout(t, 1e3 / 60);
                        },
                    o = window.cancelAnimationFrame || clearTimeout;
                function i(t) {
                    return 'string' == typeof t ? t : t.text;
                }
                function s(t, e) {
                    for (; e && e != t; ) {
                        if ('LI' === e.nodeName.toUpperCase() && e.parentNode == t) return e;
                        e = e.parentNode;
                    }
                }
                function a(n, r) {
                    ((this.id = 'cm-complete-' + Math.floor(Math.random(1e6))),
                        (this.completion = n),
                        (this.data = r),
                        (this.picked = !1));
                    var o,
                        a,
                        c = this,
                        l = n.cm,
                        u = l.getInputField().ownerDocument,
                        f = u.defaultView || u.parentWindow,
                        d = (this.hints = u.createElement('ul'));
                    (d.setAttribute('role', 'listbox'), d.setAttribute('aria-expanded', 'true'), (d.id = this.id));
                    var p = n.cm.options.theme;
                    ((d.className = 'CodeMirror-hints ' + p), (this.selectedHint = r.selectedHint || 0));
                    for (var h = r.list, m = 0; m < h.length; ++m) {
                        var g = d.appendChild(u.createElement('li')),
                            v = h[m],
                            y = 'CodeMirror-hint' + (m != this.selectedHint ? '' : ' ' + e);
                        (null != v.className && (y = v.className + ' ' + y),
                            (g.className = y),
                            m == this.selectedHint && g.setAttribute('aria-selected', 'true'),
                            (g.id = this.id + '-' + m),
                            g.setAttribute('role', 'option'),
                            v.render ? v.render(g, r, v) : g.appendChild(u.createTextNode(v.displayText || i(v))),
                            (g.hintId = m));
                    }
                    var b = n.options.container || u.body,
                        k = l.cursorCoords(n.options.alignWithWord ? r.from : null),
                        x = k.left,
                        w = k.bottom,
                        C = !0,
                        M = 0,
                        O = 0;
                    if (b !== u.body) {
                        var S =
                                -1 !== ['absolute', 'relative', 'fixed'].indexOf(f.getComputedStyle(b).position)
                                    ? b
                                    : b.offsetParent,
                            E = S.getBoundingClientRect(),
                            N = u.body.getBoundingClientRect();
                        ((M = E.left - N.left - S.scrollLeft), (O = E.top - N.top - S.scrollTop));
                    }
                    ((d.style.left = x - M + 'px'), (d.style.top = w - O + 'px'));
                    var A = f.innerWidth || Math.max(u.body.offsetWidth, u.documentElement.offsetWidth),
                        T = f.innerHeight || Math.max(u.body.offsetHeight, u.documentElement.offsetHeight);
                    (b.appendChild(d),
                        l.getInputField().setAttribute('aria-autocomplete', 'list'),
                        l.getInputField().setAttribute('aria-owns', this.id),
                        l.getInputField().setAttribute('aria-activedescendant', this.id + '-' + this.selectedHint));
                    var D = n.options.moveOnOverlap ? d.getBoundingClientRect() : new DOMRect(),
                        H = !!n.options.paddingForScrollbar && d.scrollHeight > d.clientHeight + 1;
                    if (
                        (setTimeout(function () {
                            o = l.getScrollInfo();
                        }),
                        D.bottom - T > 0)
                    ) {
                        var L = D.bottom - D.top,
                            F = D.top - (k.bottom - k.top) - 2;
                        T - D.top < F
                            ? (L > F && (d.style.height = (L = F) + 'px'),
                              (d.style.top = (w = k.top - L) + O + 'px'),
                              (C = !1))
                            : (d.style.height = T - D.top - 2 + 'px');
                    }
                    var _ = D.right - A;
                    if (
                        (H && (_ += l.display.nativeBarWidth),
                        _ > 0 &&
                            (D.right - D.left > A && ((d.style.width = A - 5 + 'px'), (_ -= D.right - D.left - A)),
                            (d.style.left = (x = Math.max(k.left - _ - M, 0)) + 'px')),
                        H)
                    )
                        for (var P = d.firstChild; P; P = P.nextSibling)
                            P.style.paddingRight = l.display.nativeBarWidth + 'px';
                    (l.addKeyMap(
                        (this.keyMap = (function (t, e) {
                            var n = {
                                Up: function () {
                                    e.moveFocus(-1);
                                },
                                Down: function () {
                                    e.moveFocus(1);
                                },
                                PageUp: function () {
                                    e.moveFocus(-e.menuSize() + 1, !0);
                                },
                                PageDown: function () {
                                    e.moveFocus(e.menuSize() - 1, !0);
                                },
                                Home: function () {
                                    e.setFocus(0);
                                },
                                End: function () {
                                    e.setFocus(e.length - 1);
                                },
                                Enter: e.pick,
                                Tab: e.pick,
                                Esc: e.close,
                            };
                            /Mac/.test(navigator.platform) &&
                                ((n['Ctrl-P'] = function () {
                                    e.moveFocus(-1);
                                }),
                                (n['Ctrl-N'] = function () {
                                    e.moveFocus(1);
                                }));
                            var r = t.options.customKeys,
                                o = r ? {} : n;
                            function i(t, r) {
                                var i;
                                ((i =
                                    'string' != typeof r
                                        ? function (t) {
                                              return r(t, e);
                                          }
                                        : n.hasOwnProperty(r)
                                          ? n[r]
                                          : r),
                                    (o[t] = i));
                            }
                            if (r) for (var s in r) r.hasOwnProperty(s) && i(s, r[s]);
                            var a = t.options.extraKeys;
                            if (a) for (var s in a) a.hasOwnProperty(s) && i(s, a[s]);
                            return o;
                        })(n, {
                            moveFocus: function (t, e) {
                                c.changeActive(c.selectedHint + t, e);
                            },
                            setFocus: function (t) {
                                c.changeActive(t);
                            },
                            menuSize: function () {
                                return c.screenAmount();
                            },
                            length: h.length,
                            close: function () {
                                n.close();
                            },
                            pick: function () {
                                c.pick();
                            },
                            data: r,
                        })),
                    ),
                        n.options.closeOnUnfocus &&
                            (l.on(
                                'blur',
                                (this.onBlur = function () {
                                    a = setTimeout(function () {
                                        n.close();
                                    }, 100);
                                }),
                            ),
                            l.on(
                                'focus',
                                (this.onFocus = function () {
                                    clearTimeout(a);
                                }),
                            )),
                        l.on(
                            'scroll',
                            (this.onScroll = function () {
                                var t = l.getScrollInfo(),
                                    e = l.getWrapperElement().getBoundingClientRect();
                                o || (o = l.getScrollInfo());
                                var r = w + o.top - t.top,
                                    i = r - (f.pageYOffset || (u.documentElement || u.body).scrollTop);
                                if ((C || (i += d.offsetHeight), i <= e.top || i >= e.bottom)) return n.close();
                                ((d.style.top = r + 'px'), (d.style.left = x + o.left - t.left + 'px'));
                            }),
                        ),
                        t.on(d, 'dblclick', function (t) {
                            var e = s(d, t.target || t.srcElement);
                            e && null != e.hintId && (c.changeActive(e.hintId), c.pick());
                        }),
                        t.on(d, 'click', function (t) {
                            var e = s(d, t.target || t.srcElement);
                            e &&
                                null != e.hintId &&
                                (c.changeActive(e.hintId), n.options.completeOnSingleClick && c.pick());
                        }),
                        t.on(d, 'mousedown', function () {
                            setTimeout(function () {
                                l.focus();
                            }, 20);
                        }));
                    var z = this.getSelectedHintRange();
                    return (
                        (0 !== z.from || 0 !== z.to) && this.scrollToActive(),
                        t.signal(r, 'select', h[this.selectedHint], d.childNodes[this.selectedHint]),
                        !0
                    );
                }
                function c(t, e, n, r) {
                    if (t.async) t(e, r, n);
                    else {
                        var o = t(e, n);
                        o && o.then ? o.then(r) : r(o);
                    }
                }
                ((n.prototype = {
                    close: function () {
                        this.active() &&
                            ((this.cm.state.completionActive = null),
                            (this.tick = null),
                            this.options.updateOnCursorActivity && this.cm.off('cursorActivity', this.activityFunc),
                            this.widget && this.data && t.signal(this.data, 'close'),
                            this.widget && this.widget.close(),
                            t.signal(this.cm, 'endCompletion', this.cm));
                    },
                    active: function () {
                        return this.cm.state.completionActive == this;
                    },
                    pick: function (e, n) {
                        var r = e.list[n],
                            o = this;
                        (this.cm.operation(function () {
                            (r.hint
                                ? r.hint(o.cm, e, r)
                                : o.cm.replaceRange(i(r), r.from || e.from, r.to || e.to, 'complete'),
                                t.signal(e, 'pick', r),
                                o.cm.scrollIntoView());
                        }),
                            this.options.closeOnPick && this.close());
                    },
                    cursorActivity: function () {
                        this.debounce && (o(this.debounce), (this.debounce = 0));
                        var t = this.startPos;
                        this.data && (t = this.data.from);
                        var e = this.cm.getCursor(),
                            n = this.cm.getLine(e.line);
                        if (
                            e.line != this.startPos.line ||
                            n.length - e.ch != this.startLen - this.startPos.ch ||
                            e.ch < t.ch ||
                            this.cm.somethingSelected() ||
                            !e.ch ||
                            this.options.closeCharacters.test(n.charAt(e.ch - 1))
                        )
                            this.close();
                        else {
                            var i = this;
                            ((this.debounce = r(function () {
                                i.update();
                            })),
                                this.widget && this.widget.disable());
                        }
                    },
                    update: function (t) {
                        if (null != this.tick) {
                            var e = this,
                                n = ++this.tick;
                            c(this.options.hint, this.cm, this.options, function (r) {
                                e.tick == n && e.finishUpdate(r, t);
                            });
                        }
                    },
                    finishUpdate: function (e, n) {
                        this.data && t.signal(this.data, 'update');
                        var r = (this.widget && this.widget.picked) || (n && this.options.completeSingle);
                        (this.widget && this.widget.close(),
                            (this.data = e),
                            e &&
                                e.list.length &&
                                (r && 1 == e.list.length
                                    ? this.pick(e, 0)
                                    : ((this.widget = new a(this, e)), t.signal(e, 'shown'))));
                    },
                }),
                    (a.prototype = {
                        close: function () {
                            if (this.completion.widget == this) {
                                ((this.completion.widget = null),
                                    this.hints.parentNode && this.hints.parentNode.removeChild(this.hints),
                                    this.completion.cm.removeKeyMap(this.keyMap));
                                var t = this.completion.cm.getInputField();
                                (t.removeAttribute('aria-activedescendant'), t.removeAttribute('aria-owns'));
                                var e = this.completion.cm;
                                (this.completion.options.closeOnUnfocus &&
                                    (e.off('blur', this.onBlur), e.off('focus', this.onFocus)),
                                    e.off('scroll', this.onScroll));
                            }
                        },
                        disable: function () {
                            this.completion.cm.removeKeyMap(this.keyMap);
                            var t = this;
                            ((this.keyMap = {
                                Enter: function () {
                                    t.picked = !0;
                                },
                            }),
                                this.completion.cm.addKeyMap(this.keyMap));
                        },
                        pick: function () {
                            this.completion.pick(this.data, this.selectedHint);
                        },
                        changeActive: function (n, r) {
                            if (
                                (n >= this.data.list.length
                                    ? (n = r ? this.data.list.length - 1 : 0)
                                    : n < 0 && (n = r ? 0 : this.data.list.length - 1),
                                this.selectedHint != n)
                            ) {
                                var o = this.hints.childNodes[this.selectedHint];
                                (o &&
                                    ((o.className = o.className.replace(' ' + e, '')),
                                    o.removeAttribute('aria-selected')),
                                    (o = this.hints.childNodes[(this.selectedHint = n)]),
                                    (o.className += ' ' + e),
                                    o.setAttribute('aria-selected', 'true'),
                                    this.completion.cm.getInputField().setAttribute('aria-activedescendant', o.id),
                                    this.scrollToActive(),
                                    t.signal(this.data, 'select', this.data.list[this.selectedHint], o));
                            }
                        },
                        scrollToActive: function () {
                            var t = this.getSelectedHintRange(),
                                e = this.hints.childNodes[t.from],
                                n = this.hints.childNodes[t.to],
                                r = this.hints.firstChild;
                            e.offsetTop < this.hints.scrollTop
                                ? (this.hints.scrollTop = e.offsetTop - r.offsetTop)
                                : n.offsetTop + n.offsetHeight > this.hints.scrollTop + this.hints.clientHeight &&
                                  (this.hints.scrollTop =
                                      n.offsetTop + n.offsetHeight - this.hints.clientHeight + r.offsetTop);
                        },
                        screenAmount: function () {
                            return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
                        },
                        getSelectedHintRange: function () {
                            var t = this.completion.options.scrollMargin || 0;
                            return {
                                from: Math.max(0, this.selectedHint - t),
                                to: Math.min(this.data.list.length - 1, this.selectedHint + t),
                            };
                        },
                    }),
                    t.registerHelper('hint', 'auto', {
                        resolve: function (e, n) {
                            var r,
                                o = e.getHelpers(n, 'hint');
                            if (o.length) {
                                var i = function (t, e, n) {
                                    var r = (function (t, e) {
                                        if (!t.somethingSelected()) return e;
                                        for (var n = [], r = 0; r < e.length; r++)
                                            e[r].supportsSelection && n.push(e[r]);
                                        return n;
                                    })(t, o);
                                    !(function o(i) {
                                        if (i == r.length) return e(null);
                                        c(r[i], t, n, function (t) {
                                            t && t.list.length > 0 ? e(t) : o(i + 1);
                                        });
                                    })(0);
                                };
                                return ((i.async = !0), (i.supportsSelection = !0), i);
                            }
                            return (r = e.getHelper(e.getCursor(), 'hintWords'))
                                ? function (e) {
                                      return t.hint.fromList(e, {words: r});
                                  }
                                : t.hint.anyword
                                  ? function (e, n) {
                                        return t.hint.anyword(e, n);
                                    }
                                  : function () {};
                        },
                    }),
                    t.registerHelper('hint', 'fromList', function (e, n) {
                        var r,
                            o = e.getCursor(),
                            i = e.getTokenAt(o),
                            s = t.Pos(o.line, i.start);
                        i.start < o.ch && /\w/.test(i.string.charAt(o.ch - i.start - 1))
                            ? (r = i.string.substr(0, o.ch - i.start))
                            : ((r = ''), (s = o));
                        for (var a = [], c = 0; c < n.words.length; c++) {
                            var l = n.words[c];
                            l.slice(0, r.length) == r && a.push(l);
                        }
                        if (a.length) return {list: a, from: s, to: o};
                    }),
                    (t.commands.autocomplete = t.showHint));
                var l = {
                    hint: t.hint.auto,
                    completeSingle: !0,
                    alignWithWord: !0,
                    closeCharacters: /[\s()\[\]{};:>,]/,
                    closeOnPick: !0,
                    closeOnUnfocus: !0,
                    updateOnCursorActivity: !0,
                    completeOnSingleClick: !0,
                    container: null,
                    customKeys: null,
                    extraKeys: null,
                    paddingForScrollbar: !0,
                    moveOnOverlap: !0,
                };
                t.defineOption('hintOptions', null);
            })(n(46831));
        },
        43400: function (t, e, n) {
            !(function (t) {
                'use strict';
                function e(t, e) {
                    function n(t) {
                        (clearTimeout(r.doRedraw),
                            (r.doRedraw = setTimeout(function () {
                                r.redraw();
                            }, t)));
                    }
                    ((this.cm = t),
                        (this.options = e),
                        (this.buttonHeight = e.scrollButtonHeight || t.getOption('scrollButtonHeight')),
                        (this.annotations = []),
                        (this.doRedraw = this.doUpdate = null),
                        (this.div = t.getWrapperElement().appendChild(document.createElement('div'))),
                        (this.div.style.cssText =
                            'position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none'),
                        this.computeScale());
                    var r = this;
                    (t.on(
                        'refresh',
                        (this.resizeHandler = function () {
                            (clearTimeout(r.doUpdate),
                                (r.doUpdate = setTimeout(function () {
                                    r.computeScale() && n(20);
                                }, 100)));
                        }),
                    ),
                        t.on('markerAdded', this.resizeHandler),
                        t.on('markerCleared', this.resizeHandler),
                        !1 !== e.listenForChanges &&
                            t.on(
                                'changes',
                                (this.changeHandler = function () {
                                    n(250);
                                }),
                            ));
                }
                (t.defineExtension('annotateScrollbar', function (t) {
                    return ('string' == typeof t && (t = {className: t}), new e(this, t));
                }),
                    t.defineOption('scrollButtonHeight', 0),
                    (e.prototype.computeScale = function () {
                        var t = this.cm,
                            e =
                                (t.getWrapperElement().clientHeight - t.display.barHeight - 2 * this.buttonHeight) /
                                t.getScrollerElement().scrollHeight;
                        if (e != this.hScale) return ((this.hScale = e), !0);
                    }),
                    (e.prototype.update = function (t) {
                        ((this.annotations = t), this.redraw());
                    }),
                    (e.prototype.redraw = function (t) {
                        !1 !== t && this.computeScale();
                        var e = this.cm,
                            n = this.hScale,
                            r = document.createDocumentFragment(),
                            o = this.annotations,
                            i = e.getOption('lineWrapping'),
                            s = i && 1.5 * e.defaultTextHeight(),
                            a = null,
                            c = null;
                        function l(t, n) {
                            if (a != t.line) {
                                ((a = t.line), (c = e.getLineHandle(t.line)));
                                var r = e.getLineHandleVisualStart(c);
                                r != c && ((a = e.getLineNumber(r)), (c = r));
                            }
                            return (c.widgets && c.widgets.length) || (i && c.height > s)
                                ? e.charCoords(t, 'local')[n ? 'top' : 'bottom']
                                : e.heightAtLine(c, 'local') + (n ? 0 : c.height);
                        }
                        var u = e.lastLine();
                        if (e.display.barWidth)
                            for (var f, d = 0; d < o.length; d++) {
                                var p = o[d];
                                if (!(p.to.line > u)) {
                                    for (
                                        var h = f || l(p.from, !0) * n, m = l(p.to, !1) * n;
                                        d < o.length - 1 &&
                                        !(o[d + 1].to.line > u || (f = l(o[d + 1].from, !0) * n) > m + 0.9);

                                    )
                                        m = l((p = o[++d]).to, !1) * n;
                                    if (m != h) {
                                        var g = Math.max(m - h, 3),
                                            v = r.appendChild(document.createElement('div'));
                                        ((v.style.cssText =
                                            'position: absolute; right: 0px; width: ' +
                                            Math.max(e.display.barWidth - 1, 2) +
                                            'px; top: ' +
                                            (h + this.buttonHeight) +
                                            'px; height: ' +
                                            g +
                                            'px'),
                                            (v.className = this.options.className),
                                            p.id && v.setAttribute('annotation-id', p.id));
                                    }
                                }
                            }
                        ((this.div.textContent = ''), this.div.appendChild(r));
                    }),
                    (e.prototype.clear = function () {
                        (this.cm.off('refresh', this.resizeHandler),
                            this.cm.off('markerAdded', this.resizeHandler),
                            this.cm.off('markerCleared', this.resizeHandler),
                            this.changeHandler && this.cm.off('changes', this.changeHandler),
                            this.div.parentNode.removeChild(this.div));
                    }));
            })(n(46831));
        },
        34101: function (t, e, n) {
            !(function (t) {
                'use strict';
                function e(t, e) {
                    var n = Number(e);
                    return /^[-+]/.test(e) ? t.getCursor().line + n : n - 1;
                }
                (t.defineOption('search', {bottom: !1}),
                    (t.commands.jumpToLine = function (t) {
                        var n,
                            r,
                            o,
                            i,
                            s = t.getCursor();
                        ((n =
                            t.phrase('Jump to line:') +
                            ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' +
                            t.phrase('(Use line:column or scroll% syntax)') +
                            '</span>'),
                            (r = t.phrase('Jump to line:')),
                            (o = s.line + 1 + ':' + s.ch),
                            (i = function (n) {
                                if (n) {
                                    if ((r = /^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(n)))
                                        t.setCursor(e(t, r[1]), Number(r[2]));
                                    else if ((r = /^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(n))) {
                                        var r,
                                            o = Math.round((t.lineCount() * Number(r[1])) / 100);
                                        (/^[-+]/.test(r[1]) && (o = s.line + o + 1), t.setCursor(o - 1, s.ch));
                                    } else (r = /^\s*\:?\s*([\+\-]?\d+)\s*/.exec(n)) && t.setCursor(e(t, r[1]), s.ch);
                                }
                            }),
                            t.openDialog
                                ? t.openDialog(n, i, {value: o, selectValueOnOpen: !0, bottom: t.options.search.bottom})
                                : i(prompt(r, o)));
                    }),
                    (t.keyMap.default['Alt-G'] = 'jumpToLine'));
            })(n(46831), n(91904));
        },
        57572: function (t, e, n) {
            !(function (t) {
                'use strict';
                function e(t, e, n, r) {
                    ((this.cm = t), (this.options = r));
                    var o = {listenForChanges: !1};
                    for (var i in r) o[i] = r[i];
                    (o.className || (o.className = 'CodeMirror-search-match'),
                        (this.annotation = t.annotateScrollbar(o)),
                        (this.query = e),
                        (this.caseFold = n),
                        (this.gap = {from: t.firstLine(), to: t.lastLine() + 1}),
                        (this.matches = []),
                        (this.update = null),
                        this.findMatches(),
                        this.annotation.update(this.matches));
                    var s = this;
                    t.on(
                        'change',
                        (this.changeHandler = function (t, e) {
                            s.onChange(e);
                        }),
                    );
                }
                function n(t, e, n) {
                    return t <= e ? t : Math.max(e, t + n);
                }
                (t.defineExtension('showMatchesOnScrollbar', function (t, n, r) {
                    return ('string' == typeof r && (r = {className: r}), r || (r = {}), new e(this, t, n, r));
                }),
                    (e.prototype.findMatches = function () {
                        if (this.gap) {
                            for (var e = 0; e < this.matches.length; e++) {
                                var n = this.matches[e];
                                if (n.from.line >= this.gap.to) break;
                                n.to.line >= this.gap.from && this.matches.splice(e--, 1);
                            }
                            for (
                                var r = this.cm.getSearchCursor(this.query, t.Pos(this.gap.from, 0), {
                                        caseFold: this.caseFold,
                                        multiline: this.options.multiline,
                                    }),
                                    o = (this.options && this.options.maxMatches) || 1e3;
                                r.findNext();

                            ) {
                                var n = {from: r.from(), to: r.to()};
                                if (
                                    n.from.line >= this.gap.to ||
                                    (this.matches.splice(e++, 0, n), this.matches.length > o)
                                )
                                    break;
                            }
                            this.gap = null;
                        }
                    }),
                    (e.prototype.onChange = function (e) {
                        var r = e.from.line,
                            o = t.changeEnd(e).line,
                            i = o - e.to.line;
                        if (
                            (this.gap
                                ? ((this.gap.from = Math.min(n(this.gap.from, r, i), e.from.line)),
                                  (this.gap.to = Math.max(n(this.gap.to, r, i), e.from.line)))
                                : (this.gap = {from: e.from.line, to: o + 1}),
                            i)
                        )
                            for (var s = 0; s < this.matches.length; s++) {
                                var a = this.matches[s],
                                    c = n(a.from.line, r, i);
                                c != a.from.line && (a.from = t.Pos(c, a.from.ch));
                                var l = n(a.to.line, r, i);
                                l != a.to.line && (a.to = t.Pos(l, a.to.ch));
                            }
                        clearTimeout(this.update);
                        var u = this;
                        this.update = setTimeout(function () {
                            u.updateAfterChange();
                        }, 250);
                    }),
                    (e.prototype.updateAfterChange = function () {
                        (this.findMatches(), this.annotation.update(this.matches));
                    }),
                    (e.prototype.clear = function () {
                        (this.cm.off('change', this.changeHandler), this.annotation.clear());
                    }));
            })(n(46831), n(90991), n(43400));
        },
        64012: function (t, e, n) {
            !(function (t) {
                'use strict';
                function e() {
                    ((this.posFrom = this.posTo = this.lastQuery = this.query = null), (this.overlay = null));
                }
                function n(t) {
                    return t.state.search || (t.state.search = new e());
                }
                function r(t) {
                    return 'string' == typeof t && t == t.toLowerCase();
                }
                function o(t, e, n) {
                    return t.getSearchCursor(e, n, {caseFold: r(e), multiline: !0});
                }
                function i(t, e, n, r, o) {
                    t.openDialog
                        ? t.openDialog(e, o, {value: r, selectValueOnOpen: !0, bottom: t.options.search.bottom})
                        : o(prompt(n, r));
                }
                function s(t) {
                    return t.replace(/\\([nrt\\])/g, function (t, e) {
                        return 'n' == e ? '\n' : 'r' == e ? '\r' : 't' == e ? '	' : '\\' == e ? '\\' : t;
                    });
                }
                function a(t) {
                    var e = t.match(/^\/(.*)\/([a-z]*)$/);
                    if (e)
                        try {
                            t = new RegExp(e[1], -1 == e[2].indexOf('i') ? '' : 'i');
                        } catch (t) {}
                    else t = s(t);
                    return (('string' == typeof t ? '' == t : t.test('')) && (t = /x^/), t);
                }
                function c(t, e, n) {
                    var o, i;
                    ((e.queryText = n),
                        (e.query = a(n)),
                        t.removeOverlay(e.overlay, r(e.query)),
                        (e.overlay =
                            ((o = e.query),
                            (i = r(e.query)),
                            'string' == typeof o
                                ? (o = new RegExp(
                                      o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'),
                                      i ? 'gi' : 'g',
                                  ))
                                : o.global || (o = new RegExp(o.source, o.ignoreCase ? 'gi' : 'g')),
                            {
                                token: function (t) {
                                    o.lastIndex = t.pos;
                                    var e = o.exec(t.string);
                                    if (e && e.index == t.pos) return ((t.pos += e[0].length || 1), 'searching');
                                    e ? (t.pos = e.index) : t.skipToEnd();
                                },
                            })),
                        t.addOverlay(e.overlay),
                        t.showMatchesOnScrollbar &&
                            (e.annotate && (e.annotate.clear(), (e.annotate = null)),
                            (e.annotate = t.showMatchesOnScrollbar(e.query, r(e.query)))));
                }
                function l(e, r, o, s) {
                    var a = n(e);
                    if (a.query) return u(e, r);
                    var l = e.getSelection() || a.lastQuery;
                    if ((l instanceof RegExp && 'x^' == l.source && (l = null), o && e.openDialog)) {
                        var d = null,
                            h = function (n, r) {
                                (t.e_stop(r),
                                    n &&
                                        (n != a.queryText && (c(e, a, n), (a.posFrom = a.posTo = e.getCursor())),
                                        d && (d.style.opacity = 1),
                                        u(e, r.shiftKey, function (t, n) {
                                            var r;
                                            n.line < 3 &&
                                                document.querySelector &&
                                                (r = e.display.wrapper.querySelector('.CodeMirror-dialog')) &&
                                                r.getBoundingClientRect().bottom - 4 >
                                                    e.cursorCoords(n, 'window').top &&
                                                ((d = r).style.opacity = 0.4);
                                        })));
                            };
                        (!(function (t, e, n, r, o) {
                            t.openDialog(e, r, {
                                value: n,
                                selectValueOnOpen: !0,
                                closeOnEnter: !1,
                                onClose: function () {
                                    f(t);
                                },
                                onKeyDown: o,
                                bottom: t.options.search.bottom,
                            });
                        })(e, p(e), l, h, function (r, o) {
                            var i = t.keyName(r),
                                s = e.getOption('extraKeys'),
                                a = (s && s[i]) || t.keyMap[e.getOption('keyMap')][i];
                            'findNext' == a || 'findPrev' == a || 'findPersistentNext' == a || 'findPersistentPrev' == a
                                ? (t.e_stop(r), c(e, n(e), o), e.execCommand(a))
                                : ('find' == a || 'findPersistent' == a) && (t.e_stop(r), h(o, r));
                        }),
                            s && l && (c(e, a, l), u(e, r)));
                    } else
                        i(e, p(e), 'Search for:', l, function (t) {
                            t &&
                                !a.query &&
                                e.operation(function () {
                                    (c(e, a, t), (a.posFrom = a.posTo = e.getCursor()), u(e, r));
                                });
                        });
                }
                function u(e, r, i) {
                    e.operation(function () {
                        var s = n(e),
                            a = o(e, s.query, r ? s.posFrom : s.posTo);
                        (a.find(r) || (a = o(e, s.query, r ? t.Pos(e.lastLine()) : t.Pos(e.firstLine(), 0))).find(r)) &&
                            (e.setSelection(a.from(), a.to()),
                            e.scrollIntoView({from: a.from(), to: a.to()}, 20),
                            (s.posFrom = a.from()),
                            (s.posTo = a.to()),
                            i && i(a.from(), a.to()));
                    });
                }
                function f(t) {
                    t.operation(function () {
                        var e = n(t);
                        ((e.lastQuery = e.query),
                            e.query &&
                                ((e.query = e.queryText = null),
                                t.removeOverlay(e.overlay),
                                e.annotate && (e.annotate.clear(), (e.annotate = null))));
                    });
                }
                function d(t, e) {
                    var n = t ? document.createElement(t) : document.createDocumentFragment();
                    for (var r in e) n[r] = e[r];
                    for (var o = 2; o < arguments.length; o++) {
                        var i = arguments[o];
                        n.appendChild('string' == typeof i ? document.createTextNode(i) : i);
                    }
                    return n;
                }
                function p(t) {
                    var e = d(
                        'label',
                        {className: 'CodeMirror-search-label'},
                        t.phrase('Search:'),
                        d('input', {
                            type: 'text',
                            style: 'width: 10em',
                            className: 'CodeMirror-search-field',
                            id: 'CodeMirror-search-field',
                        }),
                    );
                    return (
                        e.setAttribute('for', 'CodeMirror-search-field'),
                        d(
                            '',
                            null,
                            e,
                            ' ',
                            d(
                                'span',
                                {style: 'color: #666', className: 'CodeMirror-search-hint'},
                                t.phrase('(Use /re/ syntax for regexp search)'),
                            ),
                        )
                    );
                }
                function h(t, e, n) {
                    t.operation(function () {
                        for (var r = o(t, e); r.findNext(); )
                            if ('string' != typeof e) {
                                var i = t.getRange(r.from(), r.to()).match(e);
                                r.replace(
                                    n.replace(/\$(\d)/g, function (t, e) {
                                        return i[e];
                                    }),
                                );
                            } else r.replace(n);
                    });
                }
                function m(t, e) {
                    if (!t.getOption('readOnly')) {
                        var r = t.getSelection() || n(t).lastQuery,
                            c = e ? t.phrase('Replace all:') : t.phrase('Replace:'),
                            l = d(
                                '',
                                null,
                                d('span', {className: 'CodeMirror-search-label'}, c),
                                d(
                                    '',
                                    null,
                                    ' ',
                                    d('input', {
                                        type: 'text',
                                        style: 'width: 10em',
                                        className: 'CodeMirror-search-field',
                                    }),
                                    ' ',
                                    d(
                                        'span',
                                        {style: 'color: #666', className: 'CodeMirror-search-hint'},
                                        t.phrase('(Use /re/ syntax for regexp search)'),
                                    ),
                                ),
                            );
                        i(t, l, c, r, function (n) {
                            n &&
                                ((n = a(n)),
                                i(
                                    t,
                                    d(
                                        '',
                                        null,
                                        d('span', {className: 'CodeMirror-search-label'}, t.phrase('With:')),
                                        ' ',
                                        d('input', {
                                            type: 'text',
                                            style: 'width: 10em',
                                            className: 'CodeMirror-search-field',
                                        }),
                                    ),
                                    t.phrase('Replace with:'),
                                    '',
                                    function (r) {
                                        if (((r = s(r)), e)) h(t, n, r);
                                        else {
                                            f(t);
                                            var i = o(t, n, t.getCursor('from')),
                                                a = function () {
                                                    var e,
                                                        s,
                                                        l,
                                                        u,
                                                        f = i.from();
                                                    ((u = i.findNext()) ||
                                                        ((u = (i = o(t, n)).findNext()) &&
                                                            (!f || i.from().line != f.line || i.from().ch != f.ch))) &&
                                                        (t.setSelection(i.from(), i.to()),
                                                        t.scrollIntoView({from: i.from(), to: i.to()}),
                                                        (e = d(
                                                            '',
                                                            null,
                                                            d(
                                                                'span',
                                                                {className: 'CodeMirror-search-label'},
                                                                t.phrase('Replace?'),
                                                            ),
                                                            ' ',
                                                            d('button', {}, t.phrase('Yes')),
                                                            ' ',
                                                            d('button', {}, t.phrase('No')),
                                                            ' ',
                                                            d('button', {}, t.phrase('All')),
                                                            ' ',
                                                            d('button', {}, t.phrase('Stop')),
                                                        )),
                                                        (s = t.phrase('Replace?')),
                                                        (l = [
                                                            function () {
                                                                c(u);
                                                            },
                                                            a,
                                                            function () {
                                                                h(t, n, r);
                                                            },
                                                        ]),
                                                        t.openConfirm ? t.openConfirm(e, l) : confirm(s) && l[0]());
                                                },
                                                c = function (t) {
                                                    (i.replace(
                                                        'string' == typeof n
                                                            ? r
                                                            : r.replace(/\$(\d)/g, function (e, n) {
                                                                  return t[n];
                                                              }),
                                                    ),
                                                        a());
                                                };
                                            a();
                                        }
                                    },
                                ));
                        });
                    }
                }
                (t.defineOption('search', {bottom: !1}),
                    (t.commands.find = function (t) {
                        (f(t), l(t));
                    }),
                    (t.commands.findPersistent = function (t) {
                        (f(t), l(t, !1, !0));
                    }),
                    (t.commands.findPersistentNext = function (t) {
                        l(t, !1, !0, !0);
                    }),
                    (t.commands.findPersistentPrev = function (t) {
                        l(t, !0, !0, !0);
                    }),
                    (t.commands.findNext = l),
                    (t.commands.findPrev = function (t) {
                        l(t, !0);
                    }),
                    (t.commands.clearSearch = f),
                    (t.commands.replace = m),
                    (t.commands.replaceAll = function (t) {
                        m(t, !0);
                    }));
            })(n(46831), n(90991), n(91904));
        },
        90991: function (t, e, n) {
            !(function (t) {
                'use strict';
                var e,
                    n,
                    r = t.Pos;
                function o(t, e) {
                    for (
                        var n,
                            r =
                                null != (n = t.flags)
                                    ? n
                                    : (t.ignoreCase ? 'i' : '') + (t.global ? 'g' : '') + (t.multiline ? 'm' : ''),
                            o = r,
                            i = 0;
                        i < e.length;
                        i++
                    )
                        -1 == o.indexOf(e.charAt(i)) && (o += e.charAt(i));
                    return r == o ? t : new RegExp(t.source, o);
                }
                function i(t) {
                    return /\\s|\\n|\n|\\W|\\D|\[\^/.test(t.source);
                }
                function s(t, e, n) {
                    e = o(e, 'g');
                    for (var i = n.line, s = n.ch, a = t.lastLine(); i <= a; i++, s = 0) {
                        e.lastIndex = s;
                        var c = t.getLine(i),
                            l = e.exec(c);
                        if (l) return {from: r(i, l.index), to: r(i, l.index + l[0].length), match: l};
                    }
                }
                function a(t, e, n) {
                    for (var r, o = 0; o <= t.length; ) {
                        e.lastIndex = o;
                        var i = e.exec(t);
                        if (!i) break;
                        var s = i.index + i[0].length;
                        if (s > t.length - n) break;
                        ((!r || s > r.index + r[0].length) && (r = i), (o = i.index + 1));
                    }
                    return r;
                }
                function c(t, e, n) {
                    e = o(e, 'g');
                    for (var i = n.line, s = n.ch, c = t.firstLine(); i >= c; i--, s = -1) {
                        var l = t.getLine(i),
                            u = a(l, e, s < 0 ? 0 : l.length - s);
                        if (u) return {from: r(i, u.index), to: r(i, u.index + u[0].length), match: u};
                    }
                }
                function l(t, e, n, r) {
                    if (t.length == e.length) return n;
                    for (var o = 0, i = n + Math.max(0, t.length - e.length); ; ) {
                        if (o == i) return o;
                        var s = (o + i) >> 1,
                            a = r(t.slice(0, s)).length;
                        if (a == n) return s;
                        a > n ? (i = s) : (o = s + 1);
                    }
                }
                function u(t, u, f, d) {
                    var p;
                    ((this.atOccurrence = !1),
                        (this.afterEmptyMatch = !1),
                        (this.doc = t),
                        (f = f ? t.clipPos(f) : r(0, 0)),
                        (this.pos = {from: f, to: f}),
                        'object' == typeof d ? (p = d.caseFold) : ((p = d), (d = null)),
                        'string' == typeof u
                            ? (null == p && (p = !1),
                              (this.matches = function (o, i) {
                                  return (
                                      o
                                          ? function (t, o, i, s) {
                                                if (!o.length) return null;
                                                var a = s ? e : n,
                                                    c = a(o).split(/\r|\n\r?/);
                                                t: for (
                                                    var u = i.line, f = i.ch, d = t.firstLine() - 1 + c.length;
                                                    u >= d;
                                                    u--, f = -1
                                                ) {
                                                    var p = t.getLine(u);
                                                    f > -1 && (p = p.slice(0, f));
                                                    var h = a(p);
                                                    if (1 == c.length) {
                                                        var m = h.lastIndexOf(c[0]);
                                                        if (-1 == m) continue;
                                                        return {
                                                            from: r(u, l(p, h, m, a)),
                                                            to: r(u, l(p, h, m + c[0].length, a)),
                                                        };
                                                    }
                                                    var g = c[c.length - 1];
                                                    if (h.slice(0, g.length) == g) {
                                                        for (var v = 1, i = u - c.length + 1; v < c.length - 1; v++)
                                                            if (a(t.getLine(i + v)) != c[v]) continue t;
                                                        var y = t.getLine(u + 1 - c.length),
                                                            b = a(y);
                                                        if (b.slice(b.length - c[0].length) == c[0])
                                                            return {
                                                                from: r(
                                                                    u + 1 - c.length,
                                                                    l(y, b, y.length - c[0].length, a),
                                                                ),
                                                                to: r(u, l(p, h, g.length, a)),
                                                            };
                                                    }
                                                }
                                            }
                                          : function (t, o, i, s) {
                                                if (!o.length) return null;
                                                var a = s ? e : n,
                                                    c = a(o).split(/\r|\n\r?/);
                                                t: for (
                                                    var u = i.line, f = i.ch, d = t.lastLine() + 1 - c.length;
                                                    u <= d;
                                                    u++, f = 0
                                                ) {
                                                    var p = t.getLine(u).slice(f),
                                                        h = a(p);
                                                    if (1 == c.length) {
                                                        var m = h.indexOf(c[0]);
                                                        if (-1 == m) continue;
                                                        var i = l(p, h, m, a) + f;
                                                        return {
                                                            from: r(u, l(p, h, m, a) + f),
                                                            to: r(u, l(p, h, m + c[0].length, a) + f),
                                                        };
                                                    }
                                                    var g = h.length - c[0].length;
                                                    if (h.slice(g) == c[0]) {
                                                        for (var v = 1; v < c.length - 1; v++)
                                                            if (a(t.getLine(u + v)) != c[v]) continue t;
                                                        var y = t.getLine(u + c.length - 1),
                                                            b = a(y),
                                                            k = c[c.length - 1];
                                                        if (b.slice(0, k.length) == k)
                                                            return {
                                                                from: r(u, l(p, h, g, a) + f),
                                                                to: r(u + c.length - 1, l(y, b, k.length, a)),
                                                            };
                                                    }
                                                }
                                            }
                                  )(t, u, i, p);
                              }))
                            : ((u = o(u, 'gm')),
                              d && !1 === d.multiline
                                  ? (this.matches = function (e, n) {
                                        return (e ? c : s)(t, u, n);
                                    })
                                  : (this.matches = function (e, n) {
                                        return (
                                            e
                                                ? function (t, e, n) {
                                                      if (!i(e)) return c(t, e, n);
                                                      e = o(e, 'gm');
                                                      for (
                                                          var s,
                                                              l = 1,
                                                              u = t.getLine(n.line).length - n.ch,
                                                              f = n.line,
                                                              d = t.firstLine();
                                                          f >= d;

                                                      ) {
                                                          for (var p = 0; p < l && f >= d; p++) {
                                                              var h = t.getLine(f--);
                                                              s = null == s ? h : h + '\n' + s;
                                                          }
                                                          l *= 2;
                                                          var m = a(s, e, u);
                                                          if (m) {
                                                              var g = s.slice(0, m.index).split('\n'),
                                                                  v = m[0].split('\n'),
                                                                  y = f + g.length,
                                                                  b = g[g.length - 1].length;
                                                              return {
                                                                  from: r(y, b),
                                                                  to: r(
                                                                      y + v.length - 1,
                                                                      1 == v.length
                                                                          ? b + v[0].length
                                                                          : v[v.length - 1].length,
                                                                  ),
                                                                  match: m,
                                                              };
                                                          }
                                                      }
                                                  }
                                                : function (t, e, n) {
                                                      if (!i(e)) return s(t, e, n);
                                                      e = o(e, 'gm');
                                                      for (var a, c = 1, l = n.line, u = t.lastLine(); l <= u; ) {
                                                          for (var f = 0; f < c && !(l > u); f++) {
                                                              var d = t.getLine(l++);
                                                              a = null == a ? d : a + '\n' + d;
                                                          }
                                                          ((c *= 2), (e.lastIndex = n.ch));
                                                          var p = e.exec(a);
                                                          if (p) {
                                                              var h = a.slice(0, p.index).split('\n'),
                                                                  m = p[0].split('\n'),
                                                                  g = n.line + h.length - 1,
                                                                  v = h[h.length - 1].length;
                                                              return {
                                                                  from: r(g, v),
                                                                  to: r(
                                                                      g + m.length - 1,
                                                                      1 == m.length
                                                                          ? v + m[0].length
                                                                          : m[m.length - 1].length,
                                                                  ),
                                                                  match: p,
                                                              };
                                                          }
                                                      }
                                                  }
                                        )(t, u, n);
                                    })));
                }
                (String.prototype.normalize
                    ? ((e = function (t) {
                          return t.normalize('NFD').toLowerCase();
                      }),
                      (n = function (t) {
                          return t.normalize('NFD');
                      }))
                    : ((e = function (t) {
                          return t.toLowerCase();
                      }),
                      (n = function (t) {
                          return t;
                      })),
                    (u.prototype = {
                        findNext: function () {
                            return this.find(!1);
                        },
                        findPrevious: function () {
                            return this.find(!0);
                        },
                        find: function (e) {
                            var n = this.doc.clipPos(e ? this.pos.from : this.pos.to);
                            if (
                                this.afterEmptyMatch &&
                                this.atOccurrence &&
                                ((n = r(n.line, n.ch)),
                                e
                                    ? (n.ch--, n.ch < 0 && (n.line--, (n.ch = (this.doc.getLine(n.line) || '').length)))
                                    : (n.ch++,
                                      n.ch > (this.doc.getLine(n.line) || '').length && ((n.ch = 0), n.line++)),
                                0 != t.cmpPos(n, this.doc.clipPos(n)))
                            )
                                return (this.atOccurrence = !1);
                            var o = this.matches(e, n);
                            if (((this.afterEmptyMatch = o && 0 == t.cmpPos(o.from, o.to)), o))
                                return ((this.pos = o), (this.atOccurrence = !0), this.pos.match || !0);
                            var i = r(e ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
                            return ((this.pos = {from: i, to: i}), (this.atOccurrence = !1));
                        },
                        from: function () {
                            if (this.atOccurrence) return this.pos.from;
                        },
                        to: function () {
                            if (this.atOccurrence) return this.pos.to;
                        },
                        replace: function (e, n) {
                            if (this.atOccurrence) {
                                var o = t.splitLines(e);
                                (this.doc.replaceRange(o, this.pos.from, this.pos.to, n),
                                    (this.pos.to = r(
                                        this.pos.from.line + o.length - 1,
                                        o[o.length - 1].length + (1 == o.length ? this.pos.from.ch : 0),
                                    )));
                            }
                        },
                    }),
                    t.defineExtension('getSearchCursor', function (t, e, n) {
                        return new u(this.doc, t, e, n);
                    }),
                    t.defineDocExtension('getSearchCursor', function (t, e, n) {
                        return new u(this, t, e, n);
                    }),
                    t.defineExtension('selectMatches', function (e, n) {
                        for (
                            var r = [], o = this.getSearchCursor(e, this.getCursor('from'), n);
                            o.findNext() && !(t.cmpPos(o.to(), this.getCursor('to')) > 0);

                        )
                            r.push({anchor: o.from(), head: o.to()});
                        r.length && this.setSelections(r, 0);
                    }));
            })(n(46831));
        },
        80478: function (t, e, n) {
            var r;
            ((r = n(46831)).defineMode('javascript', function (t, e) {
                var n,
                    o,
                    i = t.indentUnit,
                    s = e.statementIndent,
                    a = e.jsonld,
                    c = e.json || a,
                    l = !1 !== e.trackScope,
                    u = e.typescript,
                    f = e.wordCharacters || /[\w$\xa1-\uffff]/,
                    d = (function () {
                        function t(t) {
                            return {type: t, style: 'keyword'};
                        }
                        var e = t('keyword a'),
                            n = t('keyword b'),
                            r = t('keyword c'),
                            o = t('keyword d'),
                            i = t('operator'),
                            s = {type: 'atom', style: 'atom'};
                        return {
                            if: t('if'),
                            while: e,
                            with: e,
                            else: n,
                            do: n,
                            try: n,
                            finally: n,
                            return: o,
                            break: o,
                            continue: o,
                            new: t('new'),
                            delete: r,
                            void: r,
                            throw: r,
                            debugger: t('debugger'),
                            var: t('var'),
                            const: t('var'),
                            let: t('var'),
                            function: t('function'),
                            catch: t('catch'),
                            for: t('for'),
                            switch: t('switch'),
                            case: t('case'),
                            default: t('default'),
                            in: i,
                            typeof: i,
                            instanceof: i,
                            true: s,
                            false: s,
                            null: s,
                            undefined: s,
                            NaN: s,
                            Infinity: s,
                            this: t('this'),
                            class: t('class'),
                            super: t('atom'),
                            yield: r,
                            export: t('export'),
                            import: t('import'),
                            extends: r,
                            await: r,
                        };
                    })(),
                    p = /[+\-*&%=<>!?|~^@]/,
                    h = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
                function m(t, e, r) {
                    return ((n = t), (o = r), e);
                }
                function g(t, e) {
                    var n = t.next();
                    if ('"' == n || "'" == n)
                        return (
                            (e.tokenize = function (t, e) {
                                var r,
                                    o = !1;
                                if (a && '@' == t.peek() && t.match(h))
                                    return ((e.tokenize = g), m('jsonld-keyword', 'meta'));
                                for (; null != (r = t.next()) && (r != n || o); ) o = !o && '\\' == r;
                                return (o || (e.tokenize = g), m('string', 'string'));
                            }),
                            e.tokenize(t, e)
                        );
                    if ('.' == n && t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return m('number', 'number');
                    if ('.' == n && t.match('..')) return m('spread', 'meta');
                    if (/[\[\]{}\(\),;\:\.]/.test(n)) return m(n);
                    if ('=' == n && t.eat('>')) return m('=>', 'operator');
                    if ('0' == n && t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return m('number', 'number');
                    if (/\d/.test(n))
                        return (t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), m('number', 'number'));
                    else if ('/' == n)
                        return t.eat('*')
                            ? ((e.tokenize = v), v(t, e))
                            : t.eat('/')
                              ? (t.skipToEnd(), m('comment', 'comment'))
                              : tZ(t, e, 1)
                                ? ((function (t) {
                                      for (var e, n = !1, r = !1; null != (e = t.next()); ) {
                                          if (!n) {
                                              if ('/' == e && !r) return;
                                              '[' == e ? (r = !0) : r && ']' == e && (r = !1);
                                          }
                                          n = !n && '\\' == e;
                                      }
                                  })(t),
                                  t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                                  m('regexp', 'string-2'))
                                : (t.eat('='), m('operator', 'operator', t.current()));
                    else if ('`' == n) return ((e.tokenize = y), y(t, e));
                    else if ('#' == n && '!' == t.peek()) return (t.skipToEnd(), m('meta', 'meta'));
                    else if ('#' == n && t.eatWhile(f)) return m('variable', 'property');
                    else if (
                        ('<' == n && t.match('!--')) ||
                        ('-' == n && t.match('->') && !/\S/.test(t.string.slice(0, t.start)))
                    )
                        return (t.skipToEnd(), m('comment', 'comment'));
                    else if (p.test(n))
                        return (('>' != n || !e.lexical || '>' != e.lexical.type) &&
                            (t.eat('=')
                                ? ('!' == n || '=' == n) && t.eat('=')
                                : /[<>*+\-|&?]/.test(n) && (t.eat(n), '>' == n && t.eat(n))),
                        '?' == n && t.eat('.'))
                            ? m('.')
                            : m('operator', 'operator', t.current());
                    else if (f.test(n)) {
                        t.eatWhile(f);
                        var r = t.current();
                        if ('.' != e.lastType) {
                            if (d.propertyIsEnumerable(r)) {
                                var o = d[r];
                                return m(o.type, o.style, r);
                            }
                            if ('async' == r && t.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
                                return m('async', 'keyword', r);
                        }
                        return m('variable', 'variable', r);
                    }
                }
                function v(t, e) {
                    for (var n, r = !1; (n = t.next()); ) {
                        if ('/' == n && r) {
                            e.tokenize = g;
                            break;
                        }
                        r = '*' == n;
                    }
                    return m('comment', 'comment');
                }
                function y(t, e) {
                    for (var n, r = !1; null != (n = t.next()); ) {
                        if (!r && ('`' == n || ('$' == n && t.eat('{')))) {
                            e.tokenize = g;
                            break;
                        }
                        r = !r && '\\' == n;
                    }
                    return m('quasi', 'string-2', t.current());
                }
                function b(t, e) {
                    e.fatArrowAt && (e.fatArrowAt = null);
                    var n = t.string.indexOf('=>', t.start);
                    if (!(n < 0)) {
                        if (u) {
                            var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(t.string.slice(t.start, n));
                            r && (n = r.index);
                        }
                        for (var o = 0, i = !1, s = n - 1; s >= 0; --s) {
                            var a = t.string.charAt(s),
                                c = '([{}])'.indexOf(a);
                            if (c >= 0 && c < 3) {
                                if (!o) {
                                    ++s;
                                    break;
                                }
                                if (0 == --o) {
                                    '(' == a && (i = !0);
                                    break;
                                }
                            } else if (c >= 3 && c < 6) ++o;
                            else if (f.test(a)) i = !0;
                            else if (/["'\/`]/.test(a))
                                for (; ; --s) {
                                    if (0 == s) return;
                                    if (t.string.charAt(s - 1) == a && '\\' != t.string.charAt(s - 2)) {
                                        s--;
                                        break;
                                    }
                                }
                            else if (i && !o) {
                                ++s;
                                break;
                            }
                        }
                        i && !o && (e.fatArrowAt = s);
                    }
                }
                var k = {
                    atom: !0,
                    number: !0,
                    variable: !0,
                    string: !0,
                    regexp: !0,
                    this: !0,
                    import: !0,
                    'jsonld-keyword': !0,
                };
                function x(t, e, n, r, o, i) {
                    ((this.indented = t),
                        (this.column = e),
                        (this.type = n),
                        (this.prev = o),
                        (this.info = i),
                        null != r && (this.align = r));
                }
                function w(t, e, n, r, o) {
                    var i = t.cc;
                    for (
                        C.state = t,
                            C.stream = o,
                            C.marked = null,
                            C.cc = i,
                            C.style = e,
                            t.lexical.hasOwnProperty('align') || (t.lexical.align = !0);
                        ;

                    )
                        if ((i.length ? i.pop() : c ? j : I)(n, r)) {
                            for (; i.length && i[i.length - 1].lex; ) i.pop()();
                            if (C.marked) return C.marked;
                            if (
                                'variable' == n &&
                                (function (t, e) {
                                    if (!l) return !1;
                                    for (var n = t.localVars; n; n = n.next) if (n.name == e) return !0;
                                    for (var r = t.context; r; r = r.prev)
                                        for (var n = r.vars; n; n = n.next) if (n.name == e) return !0;
                                })(t, r)
                            )
                                return 'variable-2';
                            return e;
                        }
                }
                var C = {state: null, marked: null, cc: null};
                function M() {
                    for (var t = arguments.length - 1; t >= 0; t--) C.cc.push(arguments[t]);
                }
                function O() {
                    return (M.apply(null, arguments), !0);
                }
                function S(t, e) {
                    for (var n = e; n; n = n.next) if (n.name == t) return !0;
                    return !1;
                }
                function E(t) {
                    var n = C.state;
                    if (((C.marked = 'def'), l)) {
                        if (n.context) {
                            if ('var' == n.lexical.info && n.context && n.context.block) {
                                var r = (function t(e, n) {
                                    if (!n) return null;
                                    if (n.block) {
                                        var r = t(e, n.prev);
                                        return r ? (r == n.prev ? n : new A(r, n.vars, !0)) : null;
                                    }
                                    return S(e, n.vars) ? n : new A(n.prev, new T(e, n.vars), !1);
                                })(t, n.context);
                                if (null != r) {
                                    n.context = r;
                                    return;
                                }
                            } else if (!S(t, n.localVars)) {
                                n.localVars = new T(t, n.localVars);
                                return;
                            }
                        }
                        e.globalVars && !S(t, n.globalVars) && (n.globalVars = new T(t, n.globalVars));
                    }
                }
                function N(t) {
                    return 'public' == t || 'private' == t || 'protected' == t || 'abstract' == t || 'readonly' == t;
                }
                function A(t, e, n) {
                    ((this.prev = t), (this.vars = e), (this.block = n));
                }
                function T(t, e) {
                    ((this.name = t), (this.next = e));
                }
                var D = new T('this', new T('arguments', null));
                function H() {
                    ((C.state.context = new A(C.state.context, C.state.localVars, !1)), (C.state.localVars = D));
                }
                function L() {
                    ((C.state.context = new A(C.state.context, C.state.localVars, !0)), (C.state.localVars = null));
                }
                function F() {
                    ((C.state.localVars = C.state.context.vars), (C.state.context = C.state.context.prev));
                }
                function _(t, e) {
                    var n = function () {
                        var n = C.state,
                            r = n.indented;
                        if ('stat' == n.lexical.type) r = n.lexical.indented;
                        else for (var o = n.lexical; o && ')' == o.type && o.align; o = o.prev) r = o.indented;
                        n.lexical = new x(r, C.stream.column(), t, null, n.lexical, e);
                    };
                    return ((n.lex = !0), n);
                }
                function P() {
                    var t = C.state;
                    t.lexical.prev &&
                        (')' == t.lexical.type && (t.indented = t.lexical.indented), (t.lexical = t.lexical.prev));
                }
                function z(t) {
                    return function e(n) {
                        return n == t ? O() : ';' == t || '}' == n || ')' == n || ']' == n ? M() : O(e);
                    };
                }
                function I(t, e) {
                    if ('var' == t) return O(_('vardef', e), tw, z(';'), P);
                    if ('keyword a' == t) return O(_('form'), V, I, P);
                    if ('keyword b' == t) return O(_('form'), I, P);
                    if ('keyword d' == t) return C.stream.match(/^\s*$/, !1) ? O() : O(_('stat'), W, z(';'), P);
                    if ('debugger' == t) return O(z(';'));
                    if ('{' == t) return O(_('}'), L, ts, P, F);
                    if (';' == t) return O();
                    if ('if' == t)
                        return (
                            'else' == C.state.lexical.info &&
                                C.state.cc[C.state.cc.length - 1] == P &&
                                C.state.cc.pop()(),
                            O(_('form'), V, I, P, tN)
                        );
                    if ('function' == t) return O(tH);
                    if ('for' == t) return O(_('form'), L, tA, I, F, P);
                    if ('class' == t || (u && 'interface' == e))
                        return ((C.marked = 'keyword'), O(_('form', 'class' == t ? t : e), tz, P));
                    if ('variable' == t)
                        return u && 'declare' == e
                            ? ((C.marked = 'keyword'), O(I))
                            : u && ('module' == e || 'enum' == e || 'type' == e) && C.stream.match(/^\s*\w/, !1)
                              ? ((C.marked = 'keyword'), 'enum' == e)
                                  ? O(tJ)
                                  : 'type' == e
                                    ? O(tF, z('operator'), tf, z(';'))
                                    : O(_('form'), tC, z('{'), _('}'), ts, P, P)
                              : u && 'namespace' == e
                                ? ((C.marked = 'keyword'), O(_('form'), j, I, P))
                                : u && 'abstract' == e
                                  ? ((C.marked = 'keyword'), O(I))
                                  : O(_('stat'), X);
                    return 'switch' == t
                        ? O(_('form'), V, z('{'), _('}', 'switch'), L, ts, P, P, F)
                        : 'case' == t
                          ? O(j, z(':'))
                          : 'default' == t
                            ? O(z(':'))
                            : 'catch' == t
                              ? O(_('form'), H, U, I, P, F)
                              : 'export' == t
                                ? O(_('stat'), tR, P)
                                : 'import' == t
                                  ? O(_('stat'), tq, P)
                                  : 'async' == t
                                    ? O(I)
                                    : '@' == e
                                      ? O(j, I)
                                      : M(_('stat'), j, z(';'), P);
                }
                function U(t) {
                    if ('(' == t) return O(t_, z(')'));
                }
                function j(t, e) {
                    return q(t, e, !1);
                }
                function R(t, e) {
                    return q(t, e, !0);
                }
                function V(t) {
                    return '(' != t ? M() : O(_(')'), W, z(')'), P);
                }
                function q(t, e, n) {
                    if (C.state.fatArrowAt == C.stream.start) {
                        var r = n ? Q : J;
                        if ('(' == t) return O(H, _(')'), to(t_, ')'), P, z('=>'), r, F);
                        if ('variable' == t) return M(H, tC, z('=>'), r, F);
                    }
                    var o = n ? K : B;
                    return k.hasOwnProperty(t)
                        ? O(o)
                        : 'function' == t
                          ? O(tH, o)
                          : 'class' == t || (u && 'interface' == e)
                            ? ((C.marked = 'keyword'), O(_('form'), tP, P))
                            : 'keyword c' == t || 'async' == t
                              ? O(n ? R : j)
                              : '(' == t
                                ? O(_(')'), W, z(')'), P, o)
                                : 'operator' == t || 'spread' == t
                                  ? O(n ? R : j)
                                  : '[' == t
                                    ? O(_(']'), tG, P, o)
                                    : '{' == t
                                      ? ti(te, '}', null, o)
                                      : 'quasi' == t
                                        ? M($, o)
                                        : 'new' == t
                                          ? O(function (t) {
                                                return '.' == t
                                                    ? O(n ? Y : Z)
                                                    : 'variable' == t && u
                                                      ? O(tb, n ? K : B)
                                                      : M(n ? R : j);
                                            })
                                          : O();
                }
                function W(t) {
                    return t.match(/[;\}\)\],]/) ? M() : M(j);
                }
                function B(t, e) {
                    return ',' == t ? O(W) : K(t, e, !1);
                }
                function K(t, e, n) {
                    var r = !1 == n ? B : K,
                        o = !1 == n ? j : R;
                    if ('=>' == t) return O(H, n ? Q : J, F);
                    if ('operator' == t)
                        return /\+\+|--/.test(e) || (u && '!' == e)
                            ? O(r)
                            : u && '<' == e && C.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
                              ? O(_('>'), to(tf, '>'), P, r)
                              : '?' == e
                                ? O(j, z(':'), o)
                                : O(o);
                    if ('quasi' == t) return M($, r);
                    if (';' != t) {
                        if ('(' == t) return ti(R, ')', 'call', r);
                        if ('.' == t) return O(tt, r);
                        if ('[' == t) return O(_(']'), W, z(']'), P, r);
                        if (u && 'as' == e) return ((C.marked = 'keyword'), O(tf, r));
                        if ('regexp' == t)
                            return (
                                (C.state.lastType = C.marked = 'operator'),
                                C.stream.backUp(C.stream.pos - C.stream.start - 1),
                                O(o)
                            );
                    }
                }
                function $(t, e) {
                    return 'quasi' != t ? M() : '${' != e.slice(e.length - 2) ? O($) : O(W, G);
                }
                function G(t) {
                    if ('}' == t) return ((C.marked = 'string-2'), (C.state.tokenize = y), O($));
                }
                function J(t) {
                    return (b(C.stream, C.state), M('{' == t ? I : j));
                }
                function Q(t) {
                    return (b(C.stream, C.state), M('{' == t ? I : R));
                }
                function Z(t, e) {
                    if ('target' == e) return ((C.marked = 'keyword'), O(B));
                }
                function Y(t, e) {
                    if ('target' == e) return ((C.marked = 'keyword'), O(K));
                }
                function X(t) {
                    return ':' == t ? O(P, I) : M(B, z(';'), P);
                }
                function tt(t) {
                    if ('variable' == t) return ((C.marked = 'property'), O());
                }
                function te(t, e) {
                    if ('async' == t) return ((C.marked = 'property'), O(te));
                    if ('variable' == t || 'keyword' == C.style) {
                        var n;
                        return ((C.marked = 'property'), 'get' == e || 'set' == e)
                            ? O(tn)
                            : (u &&
                                  C.state.fatArrowAt == C.stream.start &&
                                  (n = C.stream.match(/^\s*:\s*/, !1)) &&
                                  (C.state.fatArrowAt = C.stream.pos + n[0].length),
                              O(tr));
                    }
                    if ('number' == t || 'string' == t)
                        return ((C.marked = a ? 'property' : C.style + ' property'), O(tr));
                    if ('jsonld-keyword' == t) return O(tr);
                    if (u && N(e)) return ((C.marked = 'keyword'), O(te));
                    if ('[' == t) return O(j, ta, z(']'), tr);
                    if ('spread' == t) return O(R, tr);
                    else if ('*' == e) return ((C.marked = 'keyword'), O(te));
                    else if (':' == t) return M(tr);
                }
                function tn(t) {
                    return 'variable' != t ? M(tr) : ((C.marked = 'property'), O(tH));
                }
                function tr(t) {
                    return ':' == t ? O(R) : '(' == t ? M(tH) : void 0;
                }
                function to(t, e, n) {
                    function r(o, i) {
                        if (n ? n.indexOf(o) > -1 : ',' == o) {
                            var s = C.state.lexical;
                            return (
                                'call' == s.info && (s.pos = (s.pos || 0) + 1),
                                O(function (n, r) {
                                    return n == e || r == e ? M() : M(t);
                                }, r)
                            );
                        }
                        return o == e || i == e ? O() : n && n.indexOf(';') > -1 ? M(t) : O(z(e));
                    }
                    return function (n, o) {
                        return n == e || o == e ? O() : M(t, r);
                    };
                }
                function ti(t, e, n) {
                    for (var r = 3; r < arguments.length; r++) C.cc.push(arguments[r]);
                    return O(_(e, n), to(t, e), P);
                }
                function ts(t) {
                    return '}' == t ? O() : M(I, ts);
                }
                function ta(t, e) {
                    if (u) {
                        if (':' == t) return O(tf);
                        if ('?' == e) return O(ta);
                    }
                }
                function tc(t, e) {
                    if (u && (':' == t || 'in' == e)) return O(tf);
                }
                function tl(t) {
                    if (u && ':' == t) return C.stream.match(/^\s*\w+\s+is\b/, !1) ? O(j, tu, tf) : O(tf);
                }
                function tu(t, e) {
                    if ('is' == e) return ((C.marked = 'keyword'), O());
                }
                function tf(t, e) {
                    return 'keyof' == e || 'typeof' == e || 'infer' == e || 'readonly' == e
                        ? ((C.marked = 'keyword'), O('typeof' == e ? R : tf))
                        : 'variable' == t || 'void' == e
                          ? ((C.marked = 'type'), O(ty))
                          : '|' == e || '&' == e
                            ? O(tf)
                            : 'string' == t || 'number' == t || 'atom' == t
                              ? O(ty)
                              : '[' == t
                                ? O(_(']'), to(tf, ']', ','), P, ty)
                                : '{' == t
                                  ? O(_('}'), tp, P, ty)
                                  : '(' == t
                                    ? O(to(tv, ')'), td, ty)
                                    : '<' == t
                                      ? O(to(tf, '>'), tf)
                                      : 'quasi' == t
                                        ? M(tm, ty)
                                        : void 0;
                }
                function td(t) {
                    if ('=>' == t) return O(tf);
                }
                function tp(t) {
                    return t.match(/[\}\)\]]/) ? O() : ',' == t || ';' == t ? O(tp) : M(th, tp);
                }
                function th(t, e) {
                    return 'variable' == t || 'keyword' == C.style
                        ? ((C.marked = 'property'), O(th))
                        : '?' == e || 'number' == t || 'string' == t
                          ? O(th)
                          : ':' == t
                            ? O(tf)
                            : '[' == t
                              ? O(z('variable'), tc, z(']'), th)
                              : '(' == t
                                ? M(tL, th)
                                : t.match(/[;\}\)\],]/)
                                  ? void 0
                                  : O();
                }
                function tm(t, e) {
                    return 'quasi' != t ? M() : '${' != e.slice(e.length - 2) ? O(tm) : O(tf, tg);
                }
                function tg(t) {
                    if ('}' == t) return ((C.marked = 'string-2'), (C.state.tokenize = y), O(tm));
                }
                function tv(t, e) {
                    return ('variable' == t && C.stream.match(/^\s*[?:]/, !1)) || '?' == e
                        ? O(tv)
                        : ':' == t
                          ? O(tf)
                          : 'spread' == t
                            ? O(tv)
                            : M(tf);
                }
                function ty(t, e) {
                    return '<' == e
                        ? O(_('>'), to(tf, '>'), P, ty)
                        : '|' == e || '.' == t || '&' == e
                          ? O(tf)
                          : '[' == t
                            ? O(tf, z(']'), ty)
                            : 'extends' == e || 'implements' == e
                              ? ((C.marked = 'keyword'), O(tf))
                              : '?' == e
                                ? O(tf, z(':'), tf)
                                : void 0;
                }
                function tb(t, e) {
                    if ('<' == e) return O(_('>'), to(tf, '>'), P, ty);
                }
                function tk() {
                    return M(tf, tx);
                }
                function tx(t, e) {
                    if ('=' == e) return O(tf);
                }
                function tw(t, e) {
                    return 'enum' == e ? ((C.marked = 'keyword'), O(tJ)) : M(tC, ta, tS, tE);
                }
                function tC(t, e) {
                    return u && N(e)
                        ? ((C.marked = 'keyword'), O(tC))
                        : 'variable' == t
                          ? (E(e), O())
                          : 'spread' == t
                            ? O(tC)
                            : '[' == t
                              ? ti(tO, ']')
                              : '{' == t
                                ? ti(tM, '}')
                                : void 0;
                }
                function tM(t, e) {
                    return 'variable' != t || C.stream.match(/^\s*:/, !1)
                        ? ('variable' == t && (C.marked = 'property'), 'spread' == t)
                            ? O(tC)
                            : '}' == t
                              ? M()
                              : '[' == t
                                ? O(j, z(']'), z(':'), tM)
                                : O(z(':'), tC, tS)
                        : (E(e), O(tS));
                }
                function tO() {
                    return M(tC, tS);
                }
                function tS(t, e) {
                    if ('=' == e) return O(R);
                }
                function tE(t) {
                    if (',' == t) return O(tw);
                }
                function tN(t, e) {
                    if ('keyword b' == t && 'else' == e) return O(_('form', 'else'), I, P);
                }
                function tA(t, e) {
                    return 'await' == e ? O(tA) : '(' == t ? O(_(')'), tT, P) : void 0;
                }
                function tT(t) {
                    return 'var' == t ? O(tw, tD) : 'variable' == t ? O(tD) : M(tD);
                }
                function tD(t, e) {
                    return ')' == t
                        ? O()
                        : ';' == t
                          ? O(tD)
                          : 'in' == e || 'of' == e
                            ? ((C.marked = 'keyword'), O(j, tD))
                            : M(j, tD);
                }
                function tH(t, e) {
                    return '*' == e
                        ? ((C.marked = 'keyword'), O(tH))
                        : 'variable' == t
                          ? (E(e), O(tH))
                          : '(' == t
                            ? O(H, _(')'), to(t_, ')'), P, tl, I, F)
                            : u && '<' == e
                              ? O(_('>'), to(tk, '>'), P, tH)
                              : void 0;
                }
                function tL(t, e) {
                    return '*' == e
                        ? ((C.marked = 'keyword'), O(tL))
                        : 'variable' == t
                          ? (E(e), O(tL))
                          : '(' == t
                            ? O(H, _(')'), to(t_, ')'), P, tl, F)
                            : u && '<' == e
                              ? O(_('>'), to(tk, '>'), P, tL)
                              : void 0;
                }
                function tF(t, e) {
                    return 'keyword' == t || 'variable' == t
                        ? ((C.marked = 'type'), O(tF))
                        : '<' == e
                          ? O(_('>'), to(tk, '>'), P)
                          : void 0;
                }
                function t_(t, e) {
                    return ('@' == e && O(j, t_), 'spread' == t)
                        ? O(t_)
                        : u && N(e)
                          ? ((C.marked = 'keyword'), O(t_))
                          : u && 'this' == t
                            ? O(ta, tS)
                            : M(tC, ta, tS);
                }
                function tP(t, e) {
                    return 'variable' == t ? tz(t, e) : tI(t, e);
                }
                function tz(t, e) {
                    if ('variable' == t) return (E(e), O(tI));
                }
                function tI(t, e) {
                    return '<' == e
                        ? O(_('>'), to(tk, '>'), P, tI)
                        : 'extends' == e || 'implements' == e || (u && ',' == t)
                          ? ('implements' == e && (C.marked = 'keyword'), O(u ? tf : j, tI))
                          : '{' == t
                            ? O(_('}'), tU, P)
                            : void 0;
                }
                function tU(t, e) {
                    return 'async' == t ||
                        ('variable' == t &&
                            ('static' == e || 'get' == e || 'set' == e || (u && N(e))) &&
                            C.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
                        ? ((C.marked = 'keyword'), O(tU))
                        : 'variable' == t || 'keyword' == C.style
                          ? ((C.marked = 'property'), O(tj, tU))
                          : 'number' == t || 'string' == t
                            ? O(tj, tU)
                            : '[' == t
                              ? O(j, ta, z(']'), tj, tU)
                              : '*' == e
                                ? ((C.marked = 'keyword'), O(tU))
                                : u && '(' == t
                                  ? M(tL, tU)
                                  : ';' == t || ',' == t
                                    ? O(tU)
                                    : '}' == t
                                      ? O()
                                      : '@' == e
                                        ? O(j, tU)
                                        : void 0;
                }
                function tj(t, e) {
                    if ('!' == e || '?' == e) return O(tj);
                    if (':' == t) return O(tf, tS);
                    if ('=' == e) return O(R);
                    var n = C.state.lexical.prev;
                    return M(n && 'interface' == n.info ? tL : tH);
                }
                function tR(t, e) {
                    return '*' == e
                        ? ((C.marked = 'keyword'), O(t$, z(';')))
                        : 'default' == e
                          ? ((C.marked = 'keyword'), O(j, z(';')))
                          : '{' == t
                            ? O(to(tV, '}'), t$, z(';'))
                            : M(I);
                }
                function tV(t, e) {
                    return 'as' == e ? ((C.marked = 'keyword'), O(z('variable'))) : 'variable' == t ? M(R, tV) : void 0;
                }
                function tq(t) {
                    return 'string' == t ? O() : '(' == t ? M(j) : '.' == t ? M(B) : M(tW, tB, t$);
                }
                function tW(t, e) {
                    return '{' == t
                        ? ti(tW, '}')
                        : ('variable' == t && E(e), '*' == e && (C.marked = 'keyword'), O(tK));
                }
                function tB(t) {
                    if (',' == t) return O(tW, tB);
                }
                function tK(t, e) {
                    if ('as' == e) return ((C.marked = 'keyword'), O(tW));
                }
                function t$(t, e) {
                    if ('from' == e) return ((C.marked = 'keyword'), O(j));
                }
                function tG(t) {
                    return ']' == t ? O() : M(to(R, ']'));
                }
                function tJ() {
                    return M(_('form'), tC, z('{'), _('}'), to(tQ, '}'), P, P);
                }
                function tQ() {
                    return M(tC, tS);
                }
                function tZ(t, e, n) {
                    return (
                        (e.tokenize == g &&
                            /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                                e.lastType,
                            )) ||
                        ('quasi' == e.lastType && /\{\s*$/.test(t.string.slice(0, t.pos - (n || 0))))
                    );
                }
                return (
                    (H.lex = L.lex = !0),
                    (F.lex = !0),
                    (P.lex = !0),
                    {
                        startState: function (t) {
                            var n = {
                                tokenize: g,
                                lastType: 'sof',
                                cc: [],
                                lexical: new x((t || 0) - i, 0, 'block', !1),
                                localVars: e.localVars,
                                context: e.localVars && new A(null, null, !1),
                                indented: t || 0,
                            };
                            return (
                                e.globalVars && 'object' == typeof e.globalVars && (n.globalVars = e.globalVars),
                                n
                            );
                        },
                        token: function (t, e) {
                            if (
                                (t.sol() &&
                                    (e.lexical.hasOwnProperty('align') || (e.lexical.align = !1),
                                    (e.indented = t.indentation()),
                                    b(t, e)),
                                e.tokenize != v && t.eatSpace())
                            )
                                return null;
                            var r = e.tokenize(t, e);
                            return 'comment' == n
                                ? r
                                : ((e.lastType = 'operator' == n && ('++' == o || '--' == o) ? 'incdec' : n),
                                  w(e, r, n, o, t));
                        },
                        indent: function (t, n) {
                            if (t.tokenize == v || t.tokenize == y) return r.Pass;
                            if (t.tokenize != g) return 0;
                            var o,
                                a = n && n.charAt(0),
                                c = t.lexical;
                            if (!/^\s*else\b/.test(n))
                                for (var l = t.cc.length - 1; l >= 0; --l) {
                                    var u = t.cc[l];
                                    if (u == P) c = c.prev;
                                    else if (u != tN && u != F) break;
                                }
                            for (
                                ;
                                ('stat' == c.type || 'form' == c.type) &&
                                ('}' == a ||
                                    ((o = t.cc[t.cc.length - 1]) && (o == B || o == K) && !/^[,\.=+\-*:?[\(]/.test(n)));

                            )
                                c = c.prev;
                            s && ')' == c.type && 'stat' == c.prev.type && (c = c.prev);
                            var f = c.type,
                                d = a == f;
                            return 'vardef' == f
                                ? c.indented + ('operator' == t.lastType || ',' == t.lastType ? c.info.length + 1 : 0)
                                : 'form' == f && '{' == a
                                  ? c.indented
                                  : 'form' == f
                                    ? c.indented + i
                                    : 'stat' == f
                                      ? c.indented +
                                        ('operator' == t.lastType ||
                                        ',' == t.lastType ||
                                        p.test(n.charAt(0)) ||
                                        /[,.]/.test(n.charAt(0))
                                            ? s || i
                                            : 0)
                                      : 'switch' != c.info || d || !1 == e.doubleIndentSwitch
                                        ? c.align
                                            ? c.column + (d ? 0 : 1)
                                            : c.indented + (d ? 0 : i)
                                        : c.indented + (/^(?:case|default)\b/.test(n) ? i : 2 * i);
                        },
                        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                        blockCommentStart: c ? null : '/*',
                        blockCommentEnd: c ? null : '*/',
                        blockCommentContinue: c ? null : ' * ',
                        lineComment: c ? null : '//',
                        fold: 'brace',
                        closeBrackets: '()[]{}\'\'""``',
                        helperType: c ? 'json' : 'javascript',
                        jsonldMode: a,
                        jsonMode: c,
                        expressionAllowed: tZ,
                        skipExpression: function (t) {
                            w(t, 'atom', 'atom', 'true', new r.StringStream('', 2, null));
                        },
                    }
                );
            }),
                r.registerHelper('wordChars', 'javascript', /[\w$]/),
                r.defineMIME('text/javascript', 'javascript'),
                r.defineMIME('text/ecmascript', 'javascript'),
                r.defineMIME('application/javascript', 'javascript'),
                r.defineMIME('application/x-javascript', 'javascript'),
                r.defineMIME('application/ecmascript', 'javascript'),
                r.defineMIME('application/json', {name: 'javascript', json: !0}),
                r.defineMIME('application/x-json', {name: 'javascript', json: !0}),
                r.defineMIME('application/manifest+json', {name: 'javascript', json: !0}),
                r.defineMIME('application/ld+json', {name: 'javascript', jsonld: !0}),
                r.defineMIME('text/typescript', {name: 'javascript', typescript: !0}),
                r.defineMIME('application/typescript', {name: 'javascript', typescript: !0}));
        },
        18834: function (t, e, n) {
            !(function (t) {
                'use strict';
                function e(t) {
                    return RegExp('^((' + t.join(')|(') + '))\\b');
                }
                var n = e(['and', 'or', 'not', 'is']),
                    r = [
                        'as',
                        'assert',
                        'break',
                        'class',
                        'continue',
                        'def',
                        'del',
                        'elif',
                        'else',
                        'except',
                        'finally',
                        'for',
                        'from',
                        'global',
                        'if',
                        'import',
                        'lambda',
                        'pass',
                        'raise',
                        'return',
                        'try',
                        'while',
                        'with',
                        'yield',
                        'in',
                        'False',
                        'True',
                    ],
                    o = [
                        'abs',
                        'all',
                        'any',
                        'bin',
                        'bool',
                        'bytearray',
                        'callable',
                        'chr',
                        'classmethod',
                        'compile',
                        'complex',
                        'delattr',
                        'dict',
                        'dir',
                        'divmod',
                        'enumerate',
                        'eval',
                        'filter',
                        'float',
                        'format',
                        'frozenset',
                        'getattr',
                        'globals',
                        'hasattr',
                        'hash',
                        'help',
                        'hex',
                        'id',
                        'input',
                        'int',
                        'isinstance',
                        'issubclass',
                        'iter',
                        'len',
                        'list',
                        'locals',
                        'map',
                        'max',
                        'memoryview',
                        'min',
                        'next',
                        'object',
                        'oct',
                        'open',
                        'ord',
                        'pow',
                        'property',
                        'range',
                        'repr',
                        'reversed',
                        'round',
                        'set',
                        'setattr',
                        'slice',
                        'sorted',
                        'staticmethod',
                        'str',
                        'sum',
                        'super',
                        'tuple',
                        'type',
                        'vars',
                        'zip',
                        '__import__',
                        'NotImplemented',
                        'Ellipsis',
                        '__debug__',
                    ];
                function i(t) {
                    return t.scopes[t.scopes.length - 1];
                }
                (t.registerHelper('hintWords', 'python', r.concat(o).concat(['exec', 'print'])),
                    t.defineMode('python', function (s, a) {
                        for (
                            var c = 'error',
                                l = a.delimiters || a.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/,
                                u = [
                                    a.singleOperators,
                                    a.doubleOperators,
                                    a.doubleDelimiters,
                                    a.tripleDelimiters,
                                    a.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/,
                                ],
                                f = 0;
                            f < u.length;
                            f++
                        )
                            u[f] || u.splice(f--, 1);
                        var d = a.hangingIndent || s.indentUnit,
                            p = r,
                            h = o;
                        (void 0 != a.extra_keywords && (p = p.concat(a.extra_keywords)),
                            void 0 != a.extra_builtins && (h = h.concat(a.extra_builtins)));
                        var m = !(a.version && 3 > Number(a.version));
                        if (m) {
                            var g = a.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
                            ((p = p.concat([
                                'nonlocal',
                                'None',
                                'aiter',
                                'anext',
                                'async',
                                'await',
                                'breakpoint',
                                'match',
                                'case',
                            ])),
                                (h = h.concat(['ascii', 'bytes', 'exec', 'print'])));
                            var v = RegExp('^(([rbuf]|(br)|(rb)|(fr)|(rf))?(\'{3}|"{3}|[\'"]))', 'i');
                        } else {
                            var g = a.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
                            ((p = p.concat(['exec', 'print'])),
                                (h = h.concat([
                                    'apply',
                                    'basestring',
                                    'buffer',
                                    'cmp',
                                    'coerce',
                                    'execfile',
                                    'file',
                                    'intern',
                                    'long',
                                    'raw_input',
                                    'reduce',
                                    'reload',
                                    'unichr',
                                    'unicode',
                                    'xrange',
                                    'None',
                                ])));
                            var v = RegExp('^(([rubf]|(ur)|(br))?(\'{3}|"{3}|[\'"]))', 'i');
                        }
                        var y = e(p),
                            b = e(h);
                        function k(t, e) {
                            var n = t.sol() && '\\' != e.lastToken;
                            if ((n && (e.indent = t.indentation()), n && 'py' == i(e).type)) {
                                var r = i(e).offset;
                                if (t.eatSpace()) {
                                    var o = t.indentation();
                                    return (
                                        o > r ? w(e) : o < r && C(t, e) && '#' != t.peek() && (e.errorToken = !0),
                                        null
                                    );
                                }
                                var s = x(t, e);
                                return (r > 0 && C(t, e) && (s += ' ' + c), s);
                            }
                            return x(t, e);
                        }
                        function x(t, e, r) {
                            if (t.eatSpace()) return null;
                            if (!r && t.match(/^#.*/)) return 'comment';
                            if (t.match(/^[0-9\.]/, !1)) {
                                var o = !1;
                                if (
                                    (t.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (o = !0),
                                    t.match(/^[\d_]+\.\d*/) && (o = !0),
                                    t.match(/^\.\d+/) && (o = !0),
                                    o)
                                )
                                    return (t.eat(/J/i), 'number');
                                var i = !1;
                                if (
                                    (t.match(/^0x[0-9a-f_]+/i) && (i = !0),
                                    t.match(/^0b[01_]+/i) && (i = !0),
                                    t.match(/^0o[0-7_]+/i) && (i = !0),
                                    t.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (t.eat(/J/i), (i = !0)),
                                    t.match(/^0(?![\dx])/i) && (i = !0),
                                    i)
                                )
                                    return (t.eat(/L/i), 'number');
                            }
                            if (t.match(v))
                                return (
                                    -1 !== t.current().toLowerCase().indexOf('f')
                                        ? (e.tokenize = (function (t, e) {
                                              for (; 'rubf'.indexOf(t.charAt(0).toLowerCase()) >= 0; ) t = t.substr(1);
                                              var n = 1 == t.length,
                                                  r = 'string';
                                              function o(i, s) {
                                                  for (; !i.eol(); )
                                                      if ((i.eatWhile(/[^'"\{\}\\]/), i.eat('\\'))) {
                                                          if ((i.next(), n && i.eol())) return r;
                                                      } else if (i.match(t)) return ((s.tokenize = e), r);
                                                      else if (i.match('{{')) return r;
                                                      else if (i.match('{', !1)) {
                                                          if (
                                                              ((s.tokenize = (function t(e) {
                                                                  return function (n, r) {
                                                                      var i = x(n, r, !0);
                                                                      return (
                                                                          'punctuation' == i &&
                                                                              ('{' == n.current()
                                                                                  ? (r.tokenize = t(e + 1))
                                                                                  : '}' == n.current() &&
                                                                                    (e > 1
                                                                                        ? (r.tokenize = t(e - 1))
                                                                                        : (r.tokenize = o))),
                                                                          i
                                                                      );
                                                                  };
                                                              })(0)),
                                                              i.current())
                                                          )
                                                              return r;
                                                          return s.tokenize(i, s);
                                                      } else {
                                                          if (i.match('}}')) return r;
                                                          if (i.match('}')) return c;
                                                          i.eat(/['"]/);
                                                      }
                                                  if (n) {
                                                      if (a.singleLineStringErrors) return c;
                                                      s.tokenize = e;
                                                  }
                                                  return r;
                                              }
                                              return ((o.isString = !0), o);
                                          })(t.current(), e.tokenize))
                                        : (e.tokenize = (function (t, e) {
                                              for (; 'rubf'.indexOf(t.charAt(0).toLowerCase()) >= 0; ) t = t.substr(1);
                                              var n = 1 == t.length,
                                                  r = 'string';
                                              function o(o, i) {
                                                  for (; !o.eol(); )
                                                      if ((o.eatWhile(/[^'"\\]/), o.eat('\\'))) {
                                                          if ((o.next(), n && o.eol())) return r;
                                                      } else {
                                                          if (o.match(t)) return ((i.tokenize = e), r);
                                                          o.eat(/['"]/);
                                                      }
                                                  if (n) {
                                                      if (a.singleLineStringErrors) return c;
                                                      i.tokenize = e;
                                                  }
                                                  return r;
                                              }
                                              return ((o.isString = !0), o);
                                          })(t.current(), e.tokenize)),
                                    e.tokenize(t, e)
                                );
                            for (var s = 0; s < u.length; s++) if (t.match(u[s])) return 'operator';
                            return t.match(l)
                                ? 'punctuation'
                                : '.' == e.lastToken && t.match(g)
                                  ? 'property'
                                  : t.match(y) || t.match(n)
                                    ? 'keyword'
                                    : t.match(b)
                                      ? 'builtin'
                                      : t.match(/^(self|cls)\b/)
                                        ? 'variable-2'
                                        : t.match(g)
                                          ? 'def' == e.lastToken || 'class' == e.lastToken
                                              ? 'def'
                                              : 'variable'
                                          : (t.next(), r ? null : c);
                        }
                        function w(t) {
                            for (; 'py' != i(t).type; ) t.scopes.pop();
                            t.scopes.push({offset: i(t).offset + s.indentUnit, type: 'py', align: null});
                        }
                        function C(t, e) {
                            for (var n = t.indentation(); e.scopes.length > 1 && i(e).offset > n; ) {
                                if ('py' != i(e).type) return !0;
                                e.scopes.pop();
                            }
                            return i(e).offset != n;
                        }
                        return {
                            startState: function (t) {
                                return {
                                    tokenize: k,
                                    scopes: [{offset: t || 0, type: 'py', align: null}],
                                    indent: t || 0,
                                    lastToken: null,
                                    lambda: !1,
                                    dedent: 0,
                                };
                            },
                            token: function (t, e) {
                                var n = e.errorToken;
                                n && (e.errorToken = !1);
                                var r = (function (t, e) {
                                    t.sol() && ((e.beginningOfLine = !0), (e.dedent = !1));
                                    var n = e.tokenize(t, e),
                                        r = t.current();
                                    if (e.beginningOfLine && '@' == r)
                                        return t.match(g, !1) ? 'meta' : m ? 'operator' : c;
                                    if (
                                        (/\S/.test(r) && (e.beginningOfLine = !1),
                                        ('variable' == n || 'builtin' == n) && 'meta' == e.lastToken && (n = 'meta'),
                                        ('pass' == r || 'return' == r) && (e.dedent = !0),
                                        'lambda' == r && (e.lambda = !0),
                                        ':' == r &&
                                            !e.lambda &&
                                            'py' == i(e).type &&
                                            t.match(/^\s*(?:#|$)/, !1) &&
                                            w(e),
                                        1 == r.length && !/string|comment/.test(n))
                                    ) {
                                        var o = '[({'.indexOf(r);
                                        if (
                                            (-1 != o &&
                                                (function (t, e, n) {
                                                    var r = t.match(/^[\s\[\{\(]*(?:#|$)/, !1) ? null : t.column() + 1;
                                                    e.scopes.push({offset: e.indent + d, type: n, align: r});
                                                })(t, e, '])}'.slice(o, o + 1)),
                                            -1 != (o = '])}'.indexOf(r)))
                                        ) {
                                            if (i(e).type != r) return c;
                                            e.indent = e.scopes.pop().offset - d;
                                        }
                                    }
                                    return (
                                        e.dedent &&
                                            t.eol() &&
                                            'py' == i(e).type &&
                                            e.scopes.length > 1 &&
                                            e.scopes.pop(),
                                        n
                                    );
                                })(t, e);
                                return (
                                    r &&
                                        'comment' != r &&
                                        (e.lastToken = 'keyword' == r || 'punctuation' == r ? t.current() : r),
                                    'punctuation' == r && (r = null),
                                    t.eol() && e.lambda && (e.lambda = !1),
                                    n ? r + ' ' + c : r
                                );
                            },
                            indent: function (e, n) {
                                if (e.tokenize != k) return e.tokenize.isString ? t.Pass : 0;
                                var r = i(e),
                                    o =
                                        r.type == n.charAt(0) ||
                                        ('py' == r.type && !e.dedent && /^(else:|elif |except |finally:)/.test(n));
                                return null != r.align ? r.align - (o ? 1 : 0) : r.offset - (o ? d : 0);
                            },
                            electricInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
                            closeBrackets: {triples: '\'"'},
                            lineComment: '#',
                            fold: 'indent',
                        };
                    }),
                    t.defineMIME('text/x-python', 'python'),
                    t.defineMIME('text/x-cython', {
                        name: 'python',
                        extra_keywords:
                            'by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE'.split(
                                ' ',
                            ),
                    }));
            })(n(46831));
        },
        28579: function (t, e, n) {
            'use strict';
            function r() {
                return (r =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                        }
                        return t;
                    }).apply(this, arguments);
            }
            function o(t) {
                return (o =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            var i,
                s,
                a =
                    ((i = function (t, e) {
                        return (i =
                            Object.setPrototypeOf ||
                            ({__proto__: []} instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function (t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        (i(t, e),
                            (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n())));
                    });
            e.fk = void 0;
            var c = n(52983),
                l = 'undefined' == typeof navigator || !0 === n.g.PREVENT_CODEMIRROR_RENDER;
            l || (s = n(46831));
            var u = (function () {
                    function t() {}
                    return (
                        (t.equals = function (t, e) {
                            var n = this,
                                r = Object.keys,
                                i = o(t),
                                s = o(e);
                            return t && e && 'object' === i && i === s
                                ? r(t).length === r(e).length &&
                                      r(t).every(function (r) {
                                          return n.equals(t[r], e[r]);
                                      })
                                : t === e;
                        }),
                        t
                    );
                })(),
                f = (function () {
                    function t(t, e) {
                        ((this.editor = t), (this.props = e));
                    }
                    return (
                        (t.prototype.delegateCursor = function (t, e, n) {
                            var r = this.editor.getDoc();
                            (n && this.editor.focus(), e ? r.setCursor(t) : r.setCursor(t, null, {scroll: !1}));
                        }),
                        (t.prototype.delegateScroll = function (t) {
                            this.editor.scrollTo(t.x, t.y);
                        }),
                        (t.prototype.delegateSelection = function (t, e) {
                            (this.editor.getDoc().setSelections(t), e && this.editor.focus());
                        }),
                        (t.prototype.apply = function (t) {
                            (t &&
                                t.selection &&
                                t.selection.ranges &&
                                this.delegateSelection(t.selection.ranges, t.selection.focus || !1),
                                t &&
                                    t.cursor &&
                                    this.delegateCursor(
                                        t.cursor,
                                        t.autoScroll || !1,
                                        this.editor.getOption('autofocus') || !1,
                                    ),
                                t && t.scroll && this.delegateScroll(t.scroll));
                        }),
                        (t.prototype.applyNext = function (t, e, n) {
                            (t &&
                                t.selection &&
                                t.selection.ranges &&
                                e &&
                                e.selection &&
                                e.selection.ranges &&
                                !u.equals(t.selection.ranges, e.selection.ranges) &&
                                this.delegateSelection(e.selection.ranges, e.selection.focus || !1),
                                t &&
                                    t.cursor &&
                                    e &&
                                    e.cursor &&
                                    !u.equals(t.cursor, e.cursor) &&
                                    this.delegateCursor(n.cursor || e.cursor, e.autoScroll || !1, e.autoCursor || !1),
                                t &&
                                    t.scroll &&
                                    e &&
                                    e.scroll &&
                                    !u.equals(t.scroll, e.scroll) &&
                                    this.delegateScroll(e.scroll));
                        }),
                        (t.prototype.applyUserDefined = function (t, e) {
                            e &&
                                e.cursor &&
                                this.delegateCursor(
                                    e.cursor,
                                    t.autoScroll || !1,
                                    this.editor.getOption('autofocus') || !1,
                                );
                        }),
                        (t.prototype.wire = function (t) {
                            var e = this;
                            Object.keys(t || {})
                                .filter(function (t) {
                                    return /^on/.test(t);
                                })
                                .forEach(function (t) {
                                    switch (t) {
                                        case 'onBlur':
                                            e.editor.on('blur', function (t, n) {
                                                e.props.onBlur(e.editor, n);
                                            });
                                            break;
                                        case 'onContextMenu':
                                            e.editor.on('contextmenu', function (t, n) {
                                                e.props.onContextMenu(e.editor, n);
                                            });
                                            break;
                                        case 'onCopy':
                                            e.editor.on('copy', function (t, n) {
                                                e.props.onCopy(e.editor, n);
                                            });
                                            break;
                                        case 'onCursor':
                                            e.editor.on('cursorActivity', function (t) {
                                                e.props.onCursor(e.editor, e.editor.getDoc().getCursor());
                                            });
                                            break;
                                        case 'onCursorActivity':
                                            e.editor.on('cursorActivity', function (t) {
                                                e.props.onCursorActivity(e.editor);
                                            });
                                            break;
                                        case 'onCut':
                                            e.editor.on('cut', function (t, n) {
                                                e.props.onCut(e.editor, n);
                                            });
                                            break;
                                        case 'onDblClick':
                                            e.editor.on('dblclick', function (t, n) {
                                                e.props.onDblClick(e.editor, n);
                                            });
                                            break;
                                        case 'onDragEnter':
                                            e.editor.on('dragenter', function (t, n) {
                                                e.props.onDragEnter(e.editor, n);
                                            });
                                            break;
                                        case 'onDragLeave':
                                            e.editor.on('dragleave', function (t, n) {
                                                e.props.onDragLeave(e.editor, n);
                                            });
                                            break;
                                        case 'onDragOver':
                                            e.editor.on('dragover', function (t, n) {
                                                e.props.onDragOver(e.editor, n);
                                            });
                                            break;
                                        case 'onDragStart':
                                            e.editor.on('dragstart', function (t, n) {
                                                e.props.onDragStart(e.editor, n);
                                            });
                                            break;
                                        case 'onDrop':
                                            e.editor.on('drop', function (t, n) {
                                                e.props.onDrop(e.editor, n);
                                            });
                                            break;
                                        case 'onFocus':
                                            e.editor.on('focus', function (t, n) {
                                                e.props.onFocus(e.editor, n);
                                            });
                                            break;
                                        case 'onGutterClick':
                                            e.editor.on('gutterClick', function (t, n, r, o) {
                                                e.props.onGutterClick(e.editor, n, r, o);
                                            });
                                            break;
                                        case 'onInputRead':
                                            e.editor.on('inputRead', function (t, n) {
                                                e.props.onInputRead(e.editor, n);
                                            });
                                            break;
                                        case 'onKeyDown':
                                            e.editor.on('keydown', function (t, n) {
                                                e.props.onKeyDown(e.editor, n);
                                            });
                                            break;
                                        case 'onKeyHandled':
                                            e.editor.on('keyHandled', function (t, n, r) {
                                                e.props.onKeyHandled(e.editor, n, r);
                                            });
                                            break;
                                        case 'onKeyPress':
                                            e.editor.on('keypress', function (t, n) {
                                                e.props.onKeyPress(e.editor, n);
                                            });
                                            break;
                                        case 'onKeyUp':
                                            e.editor.on('keyup', function (t, n) {
                                                e.props.onKeyUp(e.editor, n);
                                            });
                                            break;
                                        case 'onMouseDown':
                                            e.editor.on('mousedown', function (t, n) {
                                                e.props.onMouseDown(e.editor, n);
                                            });
                                            break;
                                        case 'onPaste':
                                            e.editor.on('paste', function (t, n) {
                                                e.props.onPaste(e.editor, n);
                                            });
                                            break;
                                        case 'onRenderLine':
                                            e.editor.on('renderLine', function (t, n, r) {
                                                e.props.onRenderLine(e.editor, n, r);
                                            });
                                            break;
                                        case 'onScroll':
                                            e.editor.on('scroll', function (t) {
                                                e.props.onScroll(e.editor, e.editor.getScrollInfo());
                                            });
                                            break;
                                        case 'onSelection':
                                            e.editor.on('beforeSelectionChange', function (t, n) {
                                                e.props.onSelection(e.editor, n);
                                            });
                                            break;
                                        case 'onTouchStart':
                                            e.editor.on('touchstart', function (t, n) {
                                                e.props.onTouchStart(e.editor, n);
                                            });
                                            break;
                                        case 'onUpdate':
                                            e.editor.on('update', function (t) {
                                                e.props.onUpdate(e.editor);
                                            });
                                            break;
                                        case 'onViewportChange':
                                            e.editor.on('viewportChange', function (t, n, r) {
                                                e.props.onViewportChange(e.editor, n, r);
                                            });
                                    }
                                });
                        }),
                        t
                    );
                })(),
                d = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            l ||
                                ((n.applied = !1),
                                (n.appliedNext = !1),
                                (n.appliedUserDefined = !1),
                                (n.deferred = null),
                                (n.emulating = !1),
                                (n.hydrated = !1),
                                (n.initCb = function () {
                                    n.props.editorDidConfigure && n.props.editorDidConfigure(n.editor);
                                }),
                                (n.mounted = !1)),
                            n
                        );
                    }
                    return (
                        a(e, t),
                        (e.prototype.hydrate = function (t) {
                            var e = this,
                                n = t && t.options ? t.options : {},
                                o = r({}, s.defaults, this.editor.options, n);
                            (Object.keys(o).some(function (t) {
                                return e.editor.getOption(t) !== o[t];
                            }) &&
                                Object.keys(o).forEach(function (t) {
                                    n.hasOwnProperty(t) &&
                                        e.editor.getOption(t) !== o[t] &&
                                        (e.editor.setOption(t, o[t]), e.mirror.setOption(t, o[t]));
                                }),
                                this.hydrated ||
                                    (this.deferred ? this.resolveChange(t.value) : this.initChange(t.value || '')),
                                (this.hydrated = !0));
                        }),
                        (e.prototype.initChange = function (t) {
                            this.emulating = !0;
                            var e = this.editor.getDoc(),
                                n = e.lastLine(),
                                r = e.getLine(e.lastLine()).length;
                            (e.replaceRange(t || '', {line: 0, ch: 0}, {line: n, ch: r}),
                                this.mirror.setValue(t),
                                e.clearHistory(),
                                this.mirror.clearHistory(),
                                (this.emulating = !1));
                        }),
                        (e.prototype.resolveChange = function (t) {
                            this.emulating = !0;
                            var e = this.editor.getDoc();
                            if (
                                ('undo' === this.deferred.origin
                                    ? e.undo()
                                    : 'redo' === this.deferred.origin
                                      ? e.redo()
                                      : e.replaceRange(
                                            this.deferred.text,
                                            this.deferred.from,
                                            this.deferred.to,
                                            this.deferred.origin,
                                        ),
                                t && t !== e.getValue())
                            ) {
                                var n = e.getCursor();
                                (e.setValue(t), e.setCursor(n));
                            }
                            ((this.emulating = !1), (this.deferred = null));
                        }),
                        (e.prototype.mirrorChange = function (t) {
                            var e = this.editor.getDoc();
                            return (
                                'undo' === t.origin
                                    ? (e.setHistory(this.mirror.getHistory()), this.mirror.undo())
                                    : 'redo' === t.origin
                                      ? (e.setHistory(this.mirror.getHistory()), this.mirror.redo())
                                      : this.mirror.replaceRange(t.text, t.from, t.to, t.origin),
                                this.mirror.getValue()
                            );
                        }),
                        (e.prototype.componentDidMount = function () {
                            var t = this;
                            !l &&
                                (this.props.defineMode &&
                                    this.props.defineMode.name &&
                                    this.props.defineMode.fn &&
                                    s.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                                (this.editor = s(this.ref, this.props.options)),
                                (this.shared = new f(this.editor, this.props)),
                                (this.mirror = s(function () {}, this.props.options)),
                                this.editor.on('electricInput', function () {
                                    t.mirror.setHistory(t.editor.getDoc().getHistory());
                                }),
                                this.editor.on('cursorActivity', function () {
                                    t.mirror.setCursor(t.editor.getDoc().getCursor());
                                }),
                                this.editor.on('beforeChange', function (e, n) {
                                    if (!t.emulating) {
                                        (n.cancel(), (t.deferred = n));
                                        var r = t.mirrorChange(t.deferred);
                                        t.props.onBeforeChange && t.props.onBeforeChange(t.editor, t.deferred, r);
                                    }
                                }),
                                this.editor.on('change', function (e, n) {
                                    t.mounted && t.props.onChange && t.props.onChange(t.editor, n, t.editor.getValue());
                                }),
                                this.hydrate(this.props),
                                this.shared.apply(this.props),
                                (this.applied = !0),
                                (this.mounted = !0),
                                this.shared.wire(this.props),
                                this.editor.getOption('autofocus') && this.editor.focus(),
                                this.props.editorDidMount &&
                                    this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb));
                        }),
                        (e.prototype.componentDidUpdate = function (t) {
                            if (!l) {
                                var e = {cursor: null};
                                (this.props.value !== t.value && (this.hydrated = !1),
                                    this.props.autoCursor ||
                                        void 0 === this.props.autoCursor ||
                                        (e.cursor = this.editor.getDoc().getCursor()),
                                    this.hydrate(this.props),
                                    this.appliedNext ||
                                        (this.shared.applyNext(t, this.props, e), (this.appliedNext = !0)),
                                    this.shared.applyUserDefined(t, e),
                                    (this.appliedUserDefined = !0));
                            }
                        }),
                        (e.prototype.componentWillUnmount = function () {
                            !l && this.props.editorWillUnmount && this.props.editorWillUnmount(s);
                        }),
                        (e.prototype.shouldComponentUpdate = function (t, e) {
                            return !l;
                        }),
                        (e.prototype.render = function () {
                            var t = this;
                            if (l) return null;
                            var e = this.props.className
                                ? 'react-codemirror2 ' + this.props.className
                                : 'react-codemirror2';
                            return c.createElement('div', {
                                className: e,
                                ref: function (e) {
                                    return (t.ref = e);
                                },
                            });
                        }),
                        e
                    );
                })(c.Component);
            ((e.fk = d),
                (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            l ||
                                ((n.applied = !1),
                                (n.appliedUserDefined = !1),
                                (n.continueChange = !1),
                                (n.detached = !1),
                                (n.hydrated = !1),
                                (n.initCb = function () {
                                    n.props.editorDidConfigure && n.props.editorDidConfigure(n.editor);
                                }),
                                (n.mounted = !1),
                                (n.onBeforeChangeCb = function () {
                                    n.continueChange = !0;
                                })),
                            n
                        );
                    }
                    (a(e, t),
                        (e.prototype.hydrate = function (t) {
                            var e = this,
                                n = t && t.options ? t.options : {},
                                o = r({}, s.defaults, this.editor.options, n);
                            if (
                                (Object.keys(o).some(function (t) {
                                    return e.editor.getOption(t) !== o[t];
                                }) &&
                                    Object.keys(o).forEach(function (t) {
                                        n.hasOwnProperty(t) &&
                                            e.editor.getOption(t) !== o[t] &&
                                            e.editor.setOption(t, o[t]);
                                    }),
                                !this.hydrated)
                            ) {
                                var i = this.editor.getDoc(),
                                    a = i.lastLine(),
                                    c = i.getLine(i.lastLine()).length;
                                i.replaceRange(t.value || '', {line: 0, ch: 0}, {line: a, ch: c});
                            }
                            this.hydrated = !0;
                        }),
                        (e.prototype.componentDidMount = function () {
                            var t = this;
                            !l &&
                                ((this.detached = !0 === this.props.detach),
                                this.props.defineMode &&
                                    this.props.defineMode.name &&
                                    this.props.defineMode.fn &&
                                    s.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                                (this.editor = s(this.ref, this.props.options)),
                                (this.shared = new f(this.editor, this.props)),
                                this.editor.on('beforeChange', function (e, n) {
                                    t.props.onBeforeChange &&
                                        t.props.onBeforeChange(t.editor, n, t.editor.getValue(), t.onBeforeChangeCb);
                                }),
                                this.editor.on('change', function (e, n) {
                                    t.mounted &&
                                        t.props.onChange &&
                                        (t.props.onBeforeChange
                                            ? t.continueChange && t.props.onChange(t.editor, n, t.editor.getValue())
                                            : t.props.onChange(t.editor, n, t.editor.getValue()));
                                }),
                                this.hydrate(this.props),
                                this.shared.apply(this.props),
                                (this.applied = !0),
                                (this.mounted = !0),
                                this.shared.wire(this.props),
                                this.editor.getDoc().clearHistory(),
                                this.props.editorDidMount &&
                                    this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb));
                        }),
                        (e.prototype.componentDidUpdate = function (t) {
                            if (
                                (this.detached &&
                                    !1 === this.props.detach &&
                                    ((this.detached = !1), t.editorDidAttach && t.editorDidAttach(this.editor)),
                                !this.detached &&
                                    !0 === this.props.detach &&
                                    ((this.detached = !0), t.editorDidDetach && t.editorDidDetach(this.editor)),
                                !l && !this.detached)
                            ) {
                                var e = {cursor: null};
                                (this.props.value !== t.value &&
                                    ((this.hydrated = !1), (this.applied = !1), (this.appliedUserDefined = !1)),
                                    t.autoCursor ||
                                        void 0 === t.autoCursor ||
                                        (e.cursor = this.editor.getDoc().getCursor()),
                                    this.hydrate(this.props),
                                    this.applied || (this.shared.apply(t), (this.applied = !0)),
                                    this.appliedUserDefined ||
                                        (this.shared.applyUserDefined(t, e), (this.appliedUserDefined = !0)));
                            }
                        }),
                        (e.prototype.componentWillUnmount = function () {
                            !l && this.props.editorWillUnmount && this.props.editorWillUnmount(s);
                        }),
                        (e.prototype.shouldComponentUpdate = function (t, e) {
                            var n = !0;
                            return (l && (n = !1), this.detached && t.detach && (n = !1), n);
                        }),
                        (e.prototype.render = function () {
                            var t = this;
                            if (l) return null;
                            var e = this.props.className
                                ? 'react-codemirror2 ' + this.props.className
                                : 'react-codemirror2';
                            return c.createElement('div', {
                                className: e,
                                ref: function (e) {
                                    return (t.ref = e);
                                },
                            });
                        }));
                })(c.Component));
        },
    },
]);
