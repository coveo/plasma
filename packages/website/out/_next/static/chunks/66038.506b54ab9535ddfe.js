'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [66038],
    {
        87856: function (e, t, n) {
            n.d(t, {
                a: function () {
                    return r;
                },
                b: function () {
                    return a;
                },
                c: function () {
                    return i;
                },
                g: function () {
                    return o;
                },
            });
            var r =
                'undefined' != typeof globalThis
                    ? globalThis
                    : 'undefined' != typeof window
                      ? window
                      : void 0 !== n.g
                        ? n.g
                        : 'undefined' != typeof self
                          ? self
                          : {};
            function o(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
            }
            function i(e, t, n) {
                return (
                    e(
                        (n = {
                            path: t,
                            exports: {},
                            require: function (e, t) {
                                return a();
                            },
                        }),
                        n.exports,
                    ),
                    n.exports
                );
            }
            function a() {
                throw Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
            }
        },
        66038: function (e, t, n) {
            n.d(t, {
                a: function () {
                    return l;
                },
                b: function () {
                    return E;
                },
                c: function () {
                    return function e(t, n) {
                        return t
                            ? t.matches(n)
                                ? t
                                : t.parentNode instanceof ShadowRoot
                                  ? e(t.parentNode.host, n)
                                  : e(t.parentElement, n)
                            : null;
                    };
                },
                d: function () {
                    return v;
                },
                e: function () {
                    return d;
                },
                f: function () {
                    return T;
                },
                g: function () {
                    return m;
                },
                h: function () {
                    return g;
                },
                i: function () {
                    return h;
                },
                j: function () {
                    return function e(t, n) {
                        let r = t.parentElement;
                        return !!r && (r.tagName === n.toUpperCase() || e(r, n));
                    };
                },
                k: function () {
                    return c;
                },
                l: function () {
                    return p;
                },
                m: function () {
                    return b;
                },
                n: function () {
                    return function e(t, n) {
                        if (n === t || (n instanceof HTMLElement && n.assignedSlot && e(t, n.assignedSlot))) return !0;
                        let r = N(n);
                        return null !== r && e(t, r);
                    };
                },
                o: function () {
                    return a;
                },
                p: function () {
                    return i;
                },
                q: function () {
                    return function e(t = document) {
                        var n;
                        let r = t.activeElement;
                        return (null == r ? void 0 : r.shadowRoot) && null !== (n = e(r.shadowRoot)) && void 0 !== n
                            ? n
                            : r;
                    };
                },
                r: function () {
                    return f;
                },
                s: function () {
                    return u;
                },
                t: function () {
                    return s;
                },
                u: function () {
                    return N;
                },
                v: function () {
                    return y;
                },
            });
            var r = n(5991),
                o = n(87856),
                i = (0, o.c)(function (e, t) {
                    (o.a,
                        (e.exports = (function () {
                            function e(t) {
                                return (e =
                                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e &&
                                                  'function' == typeof Symbol &&
                                                  e.constructor === Symbol &&
                                                  e !== Symbol.prototype
                                                  ? 'symbol'
                                                  : typeof e;
                                          })(t);
                            }
                            function t(e, n) {
                                return (t =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return ((e.__proto__ = t), e);
                                    })(e, n);
                            }
                            function n(e, r, o) {
                                return (n = !(function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                                        return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {}),
                                            ),
                                            !0
                                        );
                                    } catch (e) {
                                        return !1;
                                    }
                                })()
                                    ? function (e, n, r) {
                                          var o = [null];
                                          o.push.apply(o, n);
                                          var i = new (Function.bind.apply(e, o))();
                                          return (r && t(i, r.prototype), i);
                                      }
                                    : Reflect.construct).apply(null, arguments);
                            }
                            function r(e) {
                                return (
                                    (function (e) {
                                        if (Array.isArray(e)) return o(e);
                                    })(e) ||
                                    (function (e) {
                                        if (
                                            ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                                            null != e['@@iterator']
                                        )
                                            return Array.from(e);
                                    })(e) ||
                                    (function (e, t) {
                                        if (e) {
                                            if ('string' == typeof e) return o(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if (
                                                ('Object' === n && e.constructor && (n = e.constructor.name),
                                                'Map' === n || 'Set' === n)
                                            )
                                                return Array.from(e);
                                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                                return o(e, t);
                                        }
                                    })(e) ||
                                    (function () {
                                        throw TypeError(
                                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })()
                                );
                            }
                            function o(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                                return r;
                            }
                            var i,
                                a = Object.hasOwnProperty,
                                l = Object.setPrototypeOf,
                                c = Object.isFrozen,
                                u = Object.getPrototypeOf,
                                s = Object.getOwnPropertyDescriptor,
                                f = Object.freeze,
                                m = Object.seal,
                                p = Object.create,
                                d = 'undefined' != typeof Reflect && Reflect,
                                h = d.apply,
                                g = d.construct;
                            (h ||
                                (h = function (e, t, n) {
                                    return e.apply(t, n);
                                }),
                                f ||
                                    (f = function (e) {
                                        return e;
                                    }),
                                m ||
                                    (m = function (e) {
                                        return e;
                                    }),
                                g ||
                                    (g = function (e, t) {
                                        return n(e, r(t));
                                    }));
                            var y = k(Array.prototype.forEach),
                                b = k(Array.prototype.pop),
                                v = k(Array.prototype.push),
                                T = k(String.prototype.toLowerCase),
                                N = k(String.prototype.match),
                                E = k(String.prototype.replace),
                                w = k(String.prototype.indexOf),
                                A = k(String.prototype.trim),
                                S = k(RegExp.prototype.test),
                                _ =
                                    ((i = TypeError),
                                    function () {
                                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                            t[n] = arguments[n];
                                        return g(i, t);
                                    });
                            function k(e) {
                                return function (t) {
                                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                        r[o - 1] = arguments[o];
                                    return h(e, t, r);
                                };
                            }
                            function x(e, t, n) {
                                ((n = n || T), l && l(e, null));
                                for (var r = t.length; r--; ) {
                                    var o = t[r];
                                    if ('string' == typeof o) {
                                        var i = n(o);
                                        i !== o && (c(t) || (t[r] = i), (o = i));
                                    }
                                    e[o] = !0;
                                }
                                return e;
                            }
                            function L(e) {
                                var t,
                                    n = p(null);
                                for (t in e) h(a, e, [t]) && (n[t] = e[t]);
                                return n;
                            }
                            function O(e, t) {
                                for (; null !== e; ) {
                                    var n = s(e, t);
                                    if (n) {
                                        if (n.get) return k(n.get);
                                        if ('function' == typeof n.value) return k(n.value);
                                    }
                                    e = u(e);
                                }
                                return function (e) {
                                    return (console.warn('fallback value for', e), null);
                                };
                            }
                            var C = f([
                                    'a',
                                    'abbr',
                                    'acronym',
                                    'address',
                                    'area',
                                    'article',
                                    'aside',
                                    'audio',
                                    'b',
                                    'bdi',
                                    'bdo',
                                    'big',
                                    'blink',
                                    'blockquote',
                                    'body',
                                    'br',
                                    'button',
                                    'canvas',
                                    'caption',
                                    'center',
                                    'cite',
                                    'code',
                                    'col',
                                    'colgroup',
                                    'content',
                                    'data',
                                    'datalist',
                                    'dd',
                                    'decorator',
                                    'del',
                                    'details',
                                    'dfn',
                                    'dialog',
                                    'dir',
                                    'div',
                                    'dl',
                                    'dt',
                                    'element',
                                    'em',
                                    'fieldset',
                                    'figcaption',
                                    'figure',
                                    'font',
                                    'footer',
                                    'form',
                                    'h1',
                                    'h2',
                                    'h3',
                                    'h4',
                                    'h5',
                                    'h6',
                                    'head',
                                    'header',
                                    'hgroup',
                                    'hr',
                                    'html',
                                    'i',
                                    'img',
                                    'input',
                                    'ins',
                                    'kbd',
                                    'label',
                                    'legend',
                                    'li',
                                    'main',
                                    'map',
                                    'mark',
                                    'marquee',
                                    'menu',
                                    'menuitem',
                                    'meter',
                                    'nav',
                                    'nobr',
                                    'ol',
                                    'optgroup',
                                    'option',
                                    'output',
                                    'p',
                                    'picture',
                                    'pre',
                                    'progress',
                                    'q',
                                    'rp',
                                    'rt',
                                    'ruby',
                                    's',
                                    'samp',
                                    'section',
                                    'select',
                                    'shadow',
                                    'small',
                                    'source',
                                    'spacer',
                                    'span',
                                    'strike',
                                    'strong',
                                    'style',
                                    'sub',
                                    'summary',
                                    'sup',
                                    'table',
                                    'tbody',
                                    'td',
                                    'template',
                                    'textarea',
                                    'tfoot',
                                    'th',
                                    'thead',
                                    'time',
                                    'tr',
                                    'track',
                                    'tt',
                                    'u',
                                    'ul',
                                    'var',
                                    'video',
                                    'wbr',
                                ]),
                                R = f([
                                    'svg',
                                    'a',
                                    'altglyph',
                                    'altglyphdef',
                                    'altglyphitem',
                                    'animatecolor',
                                    'animatemotion',
                                    'animatetransform',
                                    'circle',
                                    'clippath',
                                    'defs',
                                    'desc',
                                    'ellipse',
                                    'filter',
                                    'font',
                                    'g',
                                    'glyph',
                                    'glyphref',
                                    'hkern',
                                    'image',
                                    'line',
                                    'lineargradient',
                                    'marker',
                                    'mask',
                                    'metadata',
                                    'mpath',
                                    'path',
                                    'pattern',
                                    'polygon',
                                    'polyline',
                                    'radialgradient',
                                    'rect',
                                    'stop',
                                    'style',
                                    'switch',
                                    'symbol',
                                    'text',
                                    'textpath',
                                    'title',
                                    'tref',
                                    'tspan',
                                    'view',
                                    'vkern',
                                ]),
                                D = f([
                                    'feBlend',
                                    'feColorMatrix',
                                    'feComponentTransfer',
                                    'feComposite',
                                    'feConvolveMatrix',
                                    'feDiffuseLighting',
                                    'feDisplacementMap',
                                    'feDistantLight',
                                    'feFlood',
                                    'feFuncA',
                                    'feFuncB',
                                    'feFuncG',
                                    'feFuncR',
                                    'feGaussianBlur',
                                    'feImage',
                                    'feMerge',
                                    'feMergeNode',
                                    'feMorphology',
                                    'feOffset',
                                    'fePointLight',
                                    'feSpecularLighting',
                                    'feSpotLight',
                                    'feTile',
                                    'feTurbulence',
                                ]),
                                M = f([
                                    'animate',
                                    'color-profile',
                                    'cursor',
                                    'discard',
                                    'fedropshadow',
                                    'font-face',
                                    'font-face-format',
                                    'font-face-name',
                                    'font-face-src',
                                    'font-face-uri',
                                    'foreignobject',
                                    'hatch',
                                    'hatchpath',
                                    'mesh',
                                    'meshgradient',
                                    'meshpatch',
                                    'meshrow',
                                    'missing-glyph',
                                    'script',
                                    'set',
                                    'solidcolor',
                                    'unknown',
                                    'use',
                                ]),
                                I = f([
                                    'math',
                                    'menclose',
                                    'merror',
                                    'mfenced',
                                    'mfrac',
                                    'mglyph',
                                    'mi',
                                    'mlabeledtr',
                                    'mmultiscripts',
                                    'mn',
                                    'mo',
                                    'mover',
                                    'mpadded',
                                    'mphantom',
                                    'mroot',
                                    'mrow',
                                    'ms',
                                    'mspace',
                                    'msqrt',
                                    'mstyle',
                                    'msub',
                                    'msup',
                                    'msubsup',
                                    'mtable',
                                    'mtd',
                                    'mtext',
                                    'mtr',
                                    'munder',
                                    'munderover',
                                ]),
                                F = f([
                                    'maction',
                                    'maligngroup',
                                    'malignmark',
                                    'mlongdiv',
                                    'mscarries',
                                    'mscarry',
                                    'msgroup',
                                    'mstack',
                                    'msline',
                                    'msrow',
                                    'semantics',
                                    'annotation',
                                    'annotation-xml',
                                    'mprescripts',
                                    'none',
                                ]),
                                H = f(['#text']),
                                U = f([
                                    'accept',
                                    'action',
                                    'align',
                                    'alt',
                                    'autocapitalize',
                                    'autocomplete',
                                    'autopictureinpicture',
                                    'autoplay',
                                    'background',
                                    'bgcolor',
                                    'border',
                                    'capture',
                                    'cellpadding',
                                    'cellspacing',
                                    'checked',
                                    'cite',
                                    'class',
                                    'clear',
                                    'color',
                                    'cols',
                                    'colspan',
                                    'controls',
                                    'controlslist',
                                    'coords',
                                    'crossorigin',
                                    'datetime',
                                    'decoding',
                                    'default',
                                    'dir',
                                    'disabled',
                                    'disablepictureinpicture',
                                    'disableremoteplayback',
                                    'download',
                                    'draggable',
                                    'enctype',
                                    'enterkeyhint',
                                    'face',
                                    'for',
                                    'headers',
                                    'height',
                                    'hidden',
                                    'high',
                                    'href',
                                    'hreflang',
                                    'id',
                                    'inputmode',
                                    'integrity',
                                    'ismap',
                                    'kind',
                                    'label',
                                    'lang',
                                    'list',
                                    'loading',
                                    'loop',
                                    'low',
                                    'max',
                                    'maxlength',
                                    'media',
                                    'method',
                                    'min',
                                    'minlength',
                                    'multiple',
                                    'muted',
                                    'name',
                                    'nonce',
                                    'noshade',
                                    'novalidate',
                                    'nowrap',
                                    'open',
                                    'optimum',
                                    'pattern',
                                    'placeholder',
                                    'playsinline',
                                    'poster',
                                    'preload',
                                    'pubdate',
                                    'radiogroup',
                                    'readonly',
                                    'rel',
                                    'required',
                                    'rev',
                                    'reversed',
                                    'role',
                                    'rows',
                                    'rowspan',
                                    'spellcheck',
                                    'scope',
                                    'selected',
                                    'shape',
                                    'size',
                                    'sizes',
                                    'span',
                                    'srclang',
                                    'start',
                                    'src',
                                    'srcset',
                                    'step',
                                    'style',
                                    'summary',
                                    'tabindex',
                                    'title',
                                    'translate',
                                    'type',
                                    'usemap',
                                    'valign',
                                    'value',
                                    'width',
                                    'xmlns',
                                    'slot',
                                ]),
                                z = f([
                                    'accent-height',
                                    'accumulate',
                                    'additive',
                                    'alignment-baseline',
                                    'ascent',
                                    'attributename',
                                    'attributetype',
                                    'azimuth',
                                    'basefrequency',
                                    'baseline-shift',
                                    'begin',
                                    'bias',
                                    'by',
                                    'class',
                                    'clip',
                                    'clippathunits',
                                    'clip-path',
                                    'clip-rule',
                                    'color',
                                    'color-interpolation',
                                    'color-interpolation-filters',
                                    'color-profile',
                                    'color-rendering',
                                    'cx',
                                    'cy',
                                    'd',
                                    'dx',
                                    'dy',
                                    'diffuseconstant',
                                    'direction',
                                    'display',
                                    'divisor',
                                    'dur',
                                    'edgemode',
                                    'elevation',
                                    'end',
                                    'fill',
                                    'fill-opacity',
                                    'fill-rule',
                                    'filter',
                                    'filterunits',
                                    'flood-color',
                                    'flood-opacity',
                                    'font-family',
                                    'font-size',
                                    'font-size-adjust',
                                    'font-stretch',
                                    'font-style',
                                    'font-variant',
                                    'font-weight',
                                    'fx',
                                    'fy',
                                    'g1',
                                    'g2',
                                    'glyph-name',
                                    'glyphref',
                                    'gradientunits',
                                    'gradienttransform',
                                    'height',
                                    'href',
                                    'id',
                                    'image-rendering',
                                    'in',
                                    'in2',
                                    'k',
                                    'k1',
                                    'k2',
                                    'k3',
                                    'k4',
                                    'kerning',
                                    'keypoints',
                                    'keysplines',
                                    'keytimes',
                                    'lang',
                                    'lengthadjust',
                                    'letter-spacing',
                                    'kernelmatrix',
                                    'kernelunitlength',
                                    'lighting-color',
                                    'local',
                                    'marker-end',
                                    'marker-mid',
                                    'marker-start',
                                    'markerheight',
                                    'markerunits',
                                    'markerwidth',
                                    'maskcontentunits',
                                    'maskunits',
                                    'max',
                                    'mask',
                                    'media',
                                    'method',
                                    'mode',
                                    'min',
                                    'name',
                                    'numoctaves',
                                    'offset',
                                    'operator',
                                    'opacity',
                                    'order',
                                    'orient',
                                    'orientation',
                                    'origin',
                                    'overflow',
                                    'paint-order',
                                    'path',
                                    'pathlength',
                                    'patterncontentunits',
                                    'patterntransform',
                                    'patternunits',
                                    'points',
                                    'preservealpha',
                                    'preserveaspectratio',
                                    'primitiveunits',
                                    'r',
                                    'rx',
                                    'ry',
                                    'radius',
                                    'refx',
                                    'refy',
                                    'repeatcount',
                                    'repeatdur',
                                    'restart',
                                    'result',
                                    'rotate',
                                    'scale',
                                    'seed',
                                    'shape-rendering',
                                    'specularconstant',
                                    'specularexponent',
                                    'spreadmethod',
                                    'startoffset',
                                    'stddeviation',
                                    'stitchtiles',
                                    'stop-color',
                                    'stop-opacity',
                                    'stroke-dasharray',
                                    'stroke-dashoffset',
                                    'stroke-linecap',
                                    'stroke-linejoin',
                                    'stroke-miterlimit',
                                    'stroke-opacity',
                                    'stroke',
                                    'stroke-width',
                                    'style',
                                    'surfacescale',
                                    'systemlanguage',
                                    'tabindex',
                                    'targetx',
                                    'targety',
                                    'transform',
                                    'transform-origin',
                                    'text-anchor',
                                    'text-decoration',
                                    'text-rendering',
                                    'textlength',
                                    'type',
                                    'u1',
                                    'u2',
                                    'unicode',
                                    'values',
                                    'viewbox',
                                    'visibility',
                                    'version',
                                    'vert-adv-y',
                                    'vert-origin-x',
                                    'vert-origin-y',
                                    'width',
                                    'word-spacing',
                                    'wrap',
                                    'writing-mode',
                                    'xchannelselector',
                                    'ychannelselector',
                                    'x',
                                    'x1',
                                    'x2',
                                    'xmlns',
                                    'y',
                                    'y1',
                                    'y2',
                                    'z',
                                    'zoomandpan',
                                ]),
                                j = f([
                                    'accent',
                                    'accentunder',
                                    'align',
                                    'bevelled',
                                    'close',
                                    'columnsalign',
                                    'columnlines',
                                    'columnspan',
                                    'denomalign',
                                    'depth',
                                    'dir',
                                    'display',
                                    'displaystyle',
                                    'encoding',
                                    'fence',
                                    'frame',
                                    'height',
                                    'href',
                                    'id',
                                    'largeop',
                                    'length',
                                    'linethickness',
                                    'lspace',
                                    'lquote',
                                    'mathbackground',
                                    'mathcolor',
                                    'mathsize',
                                    'mathvariant',
                                    'maxsize',
                                    'minsize',
                                    'movablelimits',
                                    'notation',
                                    'numalign',
                                    'open',
                                    'rowalign',
                                    'rowlines',
                                    'rowspacing',
                                    'rowspan',
                                    'rspace',
                                    'rquote',
                                    'scriptlevel',
                                    'scriptminsize',
                                    'scriptsizemultiplier',
                                    'selection',
                                    'separator',
                                    'separators',
                                    'stretchy',
                                    'subscriptshift',
                                    'supscriptshift',
                                    'symmetric',
                                    'voffset',
                                    'width',
                                    'xmlns',
                                ]),
                                P = f(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
                                B = m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                                G = m(/<%[\w\W]*|[\w\W]*%>/gm),
                                W = m(/^data-[\-\w.\u00B7-\uFFFF]/),
                                q = m(/^aria-[\-\w]+$/),
                                $ = m(
                                    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
                                ),
                                Y = m(/^(?:\w+script|data):/i),
                                K = m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                                V = m(/^html$/i),
                                Z = function (t, n) {
                                    if ('object' !== e(t) || 'function' != typeof t.createPolicy) return null;
                                    var r = null,
                                        o = 'data-tt-policy-suffix';
                                    n.currentScript &&
                                        n.currentScript.hasAttribute(o) &&
                                        (r = n.currentScript.getAttribute(o));
                                    var i = 'dompurify' + (r ? '#' + r : '');
                                    try {
                                        return t.createPolicy(i, {
                                            createHTML: function (e) {
                                                return e;
                                            },
                                            createScriptURL: function (e) {
                                                return e;
                                            },
                                        });
                                    } catch (e) {
                                        return (
                                            console.warn('TrustedTypes policy ' + i + ' could not be created.'),
                                            null
                                        );
                                    }
                                };
                            return (function t() {
                                var n,
                                    o,
                                    i =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : 'undefined' == typeof window
                                              ? null
                                              : window,
                                    a = function (e) {
                                        return t(e);
                                    };
                                if (
                                    ((a.version = '2.3.10'),
                                    (a.removed = []),
                                    !i || !i.document || 9 !== i.document.nodeType)
                                )
                                    return ((a.isSupported = !1), a);
                                var l = i.document,
                                    c = i.document,
                                    u = i.DocumentFragment,
                                    s = i.HTMLTemplateElement,
                                    m = i.Node,
                                    p = i.Element,
                                    d = i.NodeFilter,
                                    h = i.NamedNodeMap,
                                    g = void 0 === h ? i.NamedNodeMap || i.MozNamedAttrMap : h,
                                    k = i.HTMLFormElement,
                                    X = i.DOMParser,
                                    J = i.trustedTypes,
                                    Q = p.prototype,
                                    ee = O(Q, 'cloneNode'),
                                    et = O(Q, 'nextSibling'),
                                    en = O(Q, 'childNodes'),
                                    er = O(Q, 'parentNode');
                                if ('function' == typeof s) {
                                    var eo = c.createElement('template');
                                    eo.content && eo.content.ownerDocument && (c = eo.content.ownerDocument);
                                }
                                var ei = Z(J, l),
                                    ea = ei ? ei.createHTML('') : '',
                                    el = c,
                                    ec = el.implementation,
                                    eu = el.createNodeIterator,
                                    es = el.createDocumentFragment,
                                    ef = el.getElementsByTagName,
                                    em = l.importNode,
                                    ep = {};
                                try {
                                    ep = L(c).documentMode ? c.documentMode : {};
                                } catch (e) {}
                                var ed = {};
                                a.isSupported =
                                    'function' == typeof er && ec && void 0 !== ec.createHTMLDocument && 9 !== ep;
                                var eh = $,
                                    eg = null,
                                    ey = x({}, [].concat(r(C), r(R), r(D), r(I), r(H))),
                                    eb = null,
                                    ev = x({}, [].concat(r(U), r(z), r(j), r(P))),
                                    eT = Object.seal(
                                        Object.create(null, {
                                            tagNameCheck: {writable: !0, configurable: !1, enumerable: !0, value: null},
                                            attributeNameCheck: {
                                                writable: !0,
                                                configurable: !1,
                                                enumerable: !0,
                                                value: null,
                                            },
                                            allowCustomizedBuiltInElements: {
                                                writable: !0,
                                                configurable: !1,
                                                enumerable: !0,
                                                value: !1,
                                            },
                                        }),
                                    ),
                                    eN = null,
                                    eE = null,
                                    ew = !0,
                                    eA = !0,
                                    eS = !1,
                                    e_ = !1,
                                    ek = !1,
                                    ex = !1,
                                    eL = !1,
                                    eO = !1,
                                    eC = !1,
                                    eR = !1,
                                    eD = !0,
                                    eM = !0,
                                    eI = !1,
                                    eF = {},
                                    eH = null,
                                    eU = x({}, [
                                        'annotation-xml',
                                        'audio',
                                        'colgroup',
                                        'desc',
                                        'foreignobject',
                                        'head',
                                        'iframe',
                                        'math',
                                        'mi',
                                        'mn',
                                        'mo',
                                        'ms',
                                        'mtext',
                                        'noembed',
                                        'noframes',
                                        'noscript',
                                        'plaintext',
                                        'script',
                                        'style',
                                        'svg',
                                        'template',
                                        'thead',
                                        'title',
                                        'video',
                                        'xmp',
                                    ]),
                                    ez = null,
                                    ej = x({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
                                    eP = null,
                                    eB = x({}, [
                                        'alt',
                                        'class',
                                        'for',
                                        'id',
                                        'label',
                                        'name',
                                        'pattern',
                                        'placeholder',
                                        'role',
                                        'summary',
                                        'title',
                                        'value',
                                        'style',
                                        'xmlns',
                                    ]),
                                    eG = 'http://www.w3.org/1998/Math/MathML',
                                    eW = 'http://www.w3.org/2000/svg',
                                    eq = 'http://www.w3.org/1999/xhtml',
                                    e$ = eq,
                                    eY = !1,
                                    eK = ['application/xhtml+xml', 'text/html'],
                                    eV = null,
                                    eZ = c.createElement('form'),
                                    eX = function (e) {
                                        return e instanceof RegExp || e instanceof Function;
                                    },
                                    eJ = function (t) {
                                        (eV && eV === t) ||
                                            ((t && 'object' === e(t)) || (t = {}),
                                            (t = L(t)),
                                            (o =
                                                'application/xhtml+xml' ===
                                                (n = n =
                                                    -1 === eK.indexOf(t.PARSER_MEDIA_TYPE)
                                                        ? 'text/html'
                                                        : t.PARSER_MEDIA_TYPE)
                                                    ? function (e) {
                                                          return e;
                                                      }
                                                    : T),
                                            (eg = 'ALLOWED_TAGS' in t ? x({}, t.ALLOWED_TAGS, o) : ey),
                                            (eb = 'ALLOWED_ATTR' in t ? x({}, t.ALLOWED_ATTR, o) : ev),
                                            (eP = 'ADD_URI_SAFE_ATTR' in t ? x(L(eB), t.ADD_URI_SAFE_ATTR, o) : eB),
                                            (ez = 'ADD_DATA_URI_TAGS' in t ? x(L(ej), t.ADD_DATA_URI_TAGS, o) : ej),
                                            (eH = 'FORBID_CONTENTS' in t ? x({}, t.FORBID_CONTENTS, o) : eU),
                                            (eN = 'FORBID_TAGS' in t ? x({}, t.FORBID_TAGS, o) : {}),
                                            (eE = 'FORBID_ATTR' in t ? x({}, t.FORBID_ATTR, o) : {}),
                                            (eF = 'USE_PROFILES' in t && t.USE_PROFILES),
                                            (ew = !1 !== t.ALLOW_ARIA_ATTR),
                                            (eA = !1 !== t.ALLOW_DATA_ATTR),
                                            (eS = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                                            (e_ = t.SAFE_FOR_TEMPLATES || !1),
                                            (ek = t.WHOLE_DOCUMENT || !1),
                                            (eO = t.RETURN_DOM || !1),
                                            (eC = t.RETURN_DOM_FRAGMENT || !1),
                                            (eR = t.RETURN_TRUSTED_TYPE || !1),
                                            (eL = t.FORCE_BODY || !1),
                                            (eD = !1 !== t.SANITIZE_DOM),
                                            (eM = !1 !== t.KEEP_CONTENT),
                                            (eI = t.IN_PLACE || !1),
                                            (eh = t.ALLOWED_URI_REGEXP || eh),
                                            (e$ = t.NAMESPACE || eq),
                                            t.CUSTOM_ELEMENT_HANDLING &&
                                                eX(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                                                (eT.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                                            t.CUSTOM_ELEMENT_HANDLING &&
                                                eX(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                                                (eT.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                                            t.CUSTOM_ELEMENT_HANDLING &&
                                                'boolean' ==
                                                    typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                                                (eT.allowCustomizedBuiltInElements =
                                                    t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                                            e_ && (eA = !1),
                                            eC && (eO = !0),
                                            eF &&
                                                ((eg = x({}, r(H))),
                                                (eb = []),
                                                !0 === eF.html && (x(eg, C), x(eb, U)),
                                                !0 === eF.svg && (x(eg, R), x(eb, z), x(eb, P)),
                                                !0 === eF.svgFilters && (x(eg, D), x(eb, z), x(eb, P)),
                                                !0 === eF.mathMl && (x(eg, I), x(eb, j), x(eb, P))),
                                            t.ADD_TAGS && (eg === ey && (eg = L(eg)), x(eg, t.ADD_TAGS, o)),
                                            t.ADD_ATTR && (eb === ev && (eb = L(eb)), x(eb, t.ADD_ATTR, o)),
                                            t.ADD_URI_SAFE_ATTR && x(eP, t.ADD_URI_SAFE_ATTR, o),
                                            t.FORBID_CONTENTS &&
                                                (eH === eU && (eH = L(eH)), x(eH, t.FORBID_CONTENTS, o)),
                                            eM && (eg['#text'] = !0),
                                            ek && x(eg, ['html', 'head', 'body']),
                                            eg.table && (x(eg, ['tbody']), delete eN.tbody),
                                            f && f(t),
                                            (eV = t));
                                    },
                                    eQ = x({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
                                    e0 = x({}, ['foreignobject', 'desc', 'title', 'annotation-xml']),
                                    e1 = x({}, ['title', 'style', 'font', 'a', 'script']),
                                    e2 = x({}, R);
                                (x(e2, D), x(e2, M));
                                var e3 = x({}, I);
                                x(e3, F);
                                var e9 = function (e) {
                                        var t = er(e);
                                        (t && t.tagName) || (t = {namespaceURI: eq, tagName: 'template'});
                                        var n = T(e.tagName),
                                            r = T(t.tagName);
                                        return e.namespaceURI === eW
                                            ? t.namespaceURI === eq
                                                ? 'svg' === n
                                                : t.namespaceURI === eG
                                                  ? 'svg' === n && ('annotation-xml' === r || eQ[r])
                                                  : !!e2[n]
                                            : e.namespaceURI === eG
                                              ? t.namespaceURI === eq
                                                  ? 'math' === n
                                                  : t.namespaceURI === eW
                                                    ? 'math' === n && e0[r]
                                                    : !!e3[n]
                                              : e.namespaceURI === eq &&
                                                (t.namespaceURI !== eW || !!e0[r]) &&
                                                (t.namespaceURI !== eG || !!eQ[r]) &&
                                                !e3[n] &&
                                                (e1[n] || !e2[n]);
                                    },
                                    e8 = function (e) {
                                        v(a.removed, {element: e});
                                        try {
                                            e.parentNode.removeChild(e);
                                        } catch (t) {
                                            try {
                                                e.outerHTML = ea;
                                            } catch (t) {
                                                e.remove();
                                            }
                                        }
                                    },
                                    e6 = function (e, t) {
                                        try {
                                            v(a.removed, {attribute: t.getAttributeNode(e), from: t});
                                        } catch (e) {
                                            v(a.removed, {attribute: null, from: t});
                                        }
                                        if ((t.removeAttribute(e), 'is' === e && !eb[e])) {
                                            if (eO || eC)
                                                try {
                                                    e8(t);
                                                } catch (e) {}
                                            else
                                                try {
                                                    t.setAttribute(e, '');
                                                } catch (e) {}
                                        }
                                    },
                                    e5 = function (e) {
                                        if (eL) e = '<remove></remove>' + e;
                                        else {
                                            var t,
                                                r,
                                                o = N(e, /^[\r\n\t ]+/);
                                            r = o && o[0];
                                        }
                                        'application/xhtml+xml' === n &&
                                            (e =
                                                '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                                                e +
                                                '</body></html>');
                                        var i = ei ? ei.createHTML(e) : e;
                                        if (e$ === eq)
                                            try {
                                                t = new X().parseFromString(i, n);
                                            } catch (e) {}
                                        if (!t || !t.documentElement) {
                                            t = ec.createDocument(e$, 'template', null);
                                            try {
                                                t.documentElement.innerHTML = eY ? '' : i;
                                            } catch (e) {}
                                        }
                                        var a = t.body || t.documentElement;
                                        return (e && r && a.insertBefore(c.createTextNode(r), a.childNodes[0] || null),
                                        e$ === eq)
                                            ? ef.call(t, ek ? 'html' : 'body')[0]
                                            : ek
                                              ? t.documentElement
                                              : a;
                                    },
                                    e7 = function (e) {
                                        return eu.call(
                                            e.ownerDocument || e,
                                            e,
                                            d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT,
                                            null,
                                            !1,
                                        );
                                    },
                                    e4 = function (t) {
                                        return 'object' === e(m)
                                            ? t instanceof m
                                            : t &&
                                                  'object' === e(t) &&
                                                  'number' == typeof t.nodeType &&
                                                  'string' == typeof t.nodeName;
                                    },
                                    te = function (e, t, n) {
                                        ed[e] &&
                                            y(ed[e], function (e) {
                                                e.call(a, t, n, eV);
                                            });
                                    },
                                    tt = function (e) {
                                        if (
                                            (te('beforeSanitizeElements', e, null),
                                            (e instanceof k &&
                                                ('string' != typeof e.nodeName ||
                                                    'string' != typeof e.textContent ||
                                                    'function' != typeof e.removeChild ||
                                                    !(e.attributes instanceof g) ||
                                                    'function' != typeof e.removeAttribute ||
                                                    'function' != typeof e.setAttribute ||
                                                    'string' != typeof e.namespaceURI ||
                                                    'function' != typeof e.insertBefore)) ||
                                                S(/[\u0080-\uFFFF]/, e.nodeName))
                                        )
                                            return (e8(e), !0);
                                        var t,
                                            n = o(e.nodeName);
                                        if (
                                            (te('uponSanitizeElement', e, {tagName: n, allowedTags: eg}),
                                            (e.hasChildNodes() &&
                                                !e4(e.firstElementChild) &&
                                                (!e4(e.content) || !e4(e.content.firstElementChild)) &&
                                                S(/<[/\w]/g, e.innerHTML) &&
                                                S(/<[/\w]/g, e.textContent)) ||
                                                ('select' === n && S(/<template/i, e.innerHTML)))
                                        )
                                            return (e8(e), !0);
                                        if (!eg[n] || eN[n]) {
                                            if (
                                                !eN[n] &&
                                                tr(n) &&
                                                ((eT.tagNameCheck instanceof RegExp && S(eT.tagNameCheck, n)) ||
                                                    (eT.tagNameCheck instanceof Function && eT.tagNameCheck(n)))
                                            )
                                                return !1;
                                            if (eM && !eH[n]) {
                                                var r = er(e) || e.parentNode,
                                                    i = en(e) || e.childNodes;
                                                if (i && r)
                                                    for (var l = i.length, c = l - 1; c >= 0; --c)
                                                        r.insertBefore(ee(i[c], !0), et(e));
                                            }
                                            return (e8(e), !0);
                                        }
                                        return (e instanceof p && !e9(e)) ||
                                            (('noscript' === n || 'noembed' === n) &&
                                                S(/<\/no(script|embed)/i, e.innerHTML))
                                            ? (e8(e), !0)
                                            : (e_ &&
                                                  3 === e.nodeType &&
                                                  ((t = E((t = e.textContent), B, ' ')),
                                                  (t = E(t, G, ' ')),
                                                  e.textContent !== t &&
                                                      (v(a.removed, {element: e.cloneNode()}), (e.textContent = t))),
                                              te('afterSanitizeElements', e, null),
                                              !1);
                                    },
                                    tn = function (e, t, n) {
                                        if (eD && ('id' === t || 'name' === t) && (n in c || n in eZ)) return !1;
                                        if (eA && !eE[t] && S(W, t));
                                        else if (ew && S(q, t));
                                        else if (!eb[t] || eE[t]) {
                                            if (
                                                !(
                                                    (tr(e) &&
                                                        ((eT.tagNameCheck instanceof RegExp && S(eT.tagNameCheck, e)) ||
                                                            (eT.tagNameCheck instanceof Function &&
                                                                eT.tagNameCheck(e))) &&
                                                        ((eT.attributeNameCheck instanceof RegExp &&
                                                            S(eT.attributeNameCheck, t)) ||
                                                            (eT.attributeNameCheck instanceof Function &&
                                                                eT.attributeNameCheck(t)))) ||
                                                    ('is' === t &&
                                                        eT.allowCustomizedBuiltInElements &&
                                                        ((eT.tagNameCheck instanceof RegExp && S(eT.tagNameCheck, n)) ||
                                                            (eT.tagNameCheck instanceof Function &&
                                                                eT.tagNameCheck(n))))
                                                )
                                            )
                                                return !1;
                                        } else if (eP[t]);
                                        else if (S(eh, E(n, K, '')));
                                        else if (
                                            ('src' === t || 'xlink:href' === t || 'href' === t) &&
                                            'script' !== e &&
                                            0 === w(n, 'data:') &&
                                            ez[e]
                                        );
                                        else if (eS && !S(Y, E(n, K, '')));
                                        else if (n) return !1;
                                        return !0;
                                    },
                                    tr = function (e) {
                                        return e.indexOf('-') > 0;
                                    },
                                    to = function (t) {
                                        te('beforeSanitizeAttributes', t, null);
                                        var n,
                                            r,
                                            i,
                                            l,
                                            c = t.attributes;
                                        if (c) {
                                            var u = {attrName: '', attrValue: '', keepAttr: !0, allowedAttributes: eb};
                                            for (l = c.length; l--; ) {
                                                var s = (n = c[l]).name,
                                                    f = n.namespaceURI;
                                                if (
                                                    ((r = 'value' === s ? n.value : A(n.value)),
                                                    (i = o(s)),
                                                    (u.attrName = i),
                                                    (u.attrValue = r),
                                                    (u.keepAttr = !0),
                                                    (u.forceKeepAttr = void 0),
                                                    te('uponSanitizeAttribute', t, u),
                                                    (r = u.attrValue),
                                                    !u.forceKeepAttr && (e6(s, t), u.keepAttr))
                                                ) {
                                                    if (S(/\/>/i, r)) {
                                                        e6(s, t);
                                                        continue;
                                                    }
                                                    e_ && ((r = E(r, B, ' ')), (r = E(r, G, ' ')));
                                                    var m = o(t.nodeName);
                                                    if (tn(m, i, r)) {
                                                        if (
                                                            ei &&
                                                            'object' === e(J) &&
                                                            'function' == typeof J.getAttributeType
                                                        ) {
                                                            if (f);
                                                            else
                                                                switch (J.getAttributeType(m, i)) {
                                                                    case 'TrustedHTML':
                                                                        r = ei.createHTML(r);
                                                                        break;
                                                                    case 'TrustedScriptURL':
                                                                        r = ei.createScriptURL(r);
                                                                }
                                                        }
                                                        try {
                                                            (f ? t.setAttributeNS(f, s, r) : t.setAttribute(s, r),
                                                                b(a.removed));
                                                        } catch (e) {}
                                                    }
                                                }
                                            }
                                            te('afterSanitizeAttributes', t, null);
                                        }
                                    },
                                    ti = function e(t) {
                                        var n,
                                            r = e7(t);
                                        for (te('beforeSanitizeShadowDOM', t, null); (n = r.nextNode()); )
                                            (te('uponSanitizeShadowNode', n, null),
                                                tt(n) || (n.content instanceof u && e(n.content), to(n)));
                                        te('afterSanitizeShadowDOM', t, null);
                                    };
                                return (
                                    (a.sanitize = function (t, n) {
                                        if (((eY = !t) && (t = '<!-->'), 'string' != typeof t && !e4(t))) {
                                            if ('function' != typeof t.toString) throw _('toString is not a function');
                                            if ('string' != typeof (t = t.toString()))
                                                throw _('dirty is not a string, aborting');
                                        }
                                        if (!a.isSupported) {
                                            if ('object' === e(i.toStaticHTML) || 'function' == typeof i.toStaticHTML) {
                                                if ('string' == typeof t) return i.toStaticHTML(t);
                                                if (e4(t)) return i.toStaticHTML(t.outerHTML);
                                            }
                                            return t;
                                        }
                                        if ((ex || eJ(n), (a.removed = []), 'string' == typeof t && (eI = !1), eI)) {
                                            if (t.nodeName) {
                                                var r,
                                                    c,
                                                    s,
                                                    f,
                                                    p,
                                                    d = o(t.nodeName);
                                                if (!eg[d] || eN[d])
                                                    throw _('root node is forbidden and cannot be sanitized in-place');
                                            }
                                        } else if (t instanceof m)
                                            1 === (c = (r = e5('<!---->')).ownerDocument.importNode(t, !0)).nodeType &&
                                            'BODY' === c.nodeName
                                                ? (r = c)
                                                : 'HTML' === c.nodeName
                                                  ? (r = c)
                                                  : r.appendChild(c);
                                        else {
                                            if (!eO && !e_ && !ek && -1 === t.indexOf('<'))
                                                return ei && eR ? ei.createHTML(t) : t;
                                            if (!(r = e5(t))) return eO ? null : eR ? ea : '';
                                        }
                                        r && eL && e8(r.firstChild);
                                        for (var h = e7(eI ? t : r); (s = h.nextNode()); )
                                            (3 === s.nodeType && s === f) ||
                                                tt(s) ||
                                                (s.content instanceof u && ti(s.content), to(s), (f = s));
                                        if (((f = null), eI)) return t;
                                        if (eO) {
                                            if (eC)
                                                for (p = es.call(r.ownerDocument); r.firstChild; )
                                                    p.appendChild(r.firstChild);
                                            else p = r;
                                            return (eb.shadowroot && (p = em.call(l, p, !0)), p);
                                        }
                                        var g = ek ? r.outerHTML : r.innerHTML;
                                        return (
                                            ek &&
                                                eg['!doctype'] &&
                                                r.ownerDocument &&
                                                r.ownerDocument.doctype &&
                                                r.ownerDocument.doctype.name &&
                                                S(V, r.ownerDocument.doctype.name) &&
                                                (g = '<!DOCTYPE ' + r.ownerDocument.doctype.name + '>\n' + g),
                                            e_ && ((g = E(g, B, ' ')), (g = E(g, G, ' '))),
                                            ei && eR ? ei.createHTML(g) : g
                                        );
                                    }),
                                    (a.setConfig = function (e) {
                                        (eJ(e), (ex = !0));
                                    }),
                                    (a.clearConfig = function () {
                                        ((eV = null), (ex = !1));
                                    }),
                                    (a.isValidAttribute = function (e, t, n) {
                                        return (eV || eJ({}), tn(o(e), o(t), n));
                                    }),
                                    (a.addHook = function (e, t) {
                                        'function' == typeof t && ((ed[e] = ed[e] || []), v(ed[e], t));
                                    }),
                                    (a.removeHook = function (e) {
                                        if (ed[e]) return b(ed[e]);
                                    }),
                                    (a.removeHooks = function (e) {
                                        ed[e] && (ed[e] = []);
                                    }),
                                    (a.removeAllHooks = function () {
                                        ed = {};
                                    }),
                                    a
                                );
                            })();
                        })()));
                });
            function a(e) {
                let t;
                return function (...n) {
                    return (e && ((t = e.apply(this, n)), (e = () => {})), t);
                };
            }
            function l(e) {
                return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
            }
            function c(e) {
                return e.replace(/-./g, (e) => e[1].toUpperCase());
            }
            function u(e) {
                return e.toLowerCase().replace(/([_][a-z])/g, (e) => e.toUpperCase().replace('_', ''));
            }
            function s(e) {
                return e.replace(/\s/g, '-').toLowerCase();
            }
            function f(e, t = 5) {
                let n = Math.random()
                    .toString(36)
                    .substring(2, 2 + t);
                return e ? e + n : n;
            }
            function m(e, t) {
                return Math.random() * (t - e) + e;
            }
            function p(e) {
                return new window.DOMParser().parseFromString(e, 'text/xml');
            }
            function d(e) {
                return 1 === e.nodeType;
            }
            function h(e) {
                var t;
                return d(e)
                    ? !(e instanceof HTMLStyleElement)
                    : 3 === e.nodeType && !!(null === (t = e.textContent) || void 0 === t ? void 0 : t.trim());
            }
            function g(e) {
                for (let t = 0; t < e.childNodes.length; t++) {
                    let n = e.childNodes.item(t);
                    if (h(n)) return !0;
                }
                return !1;
            }
            function y(e, t = './assets') {
                let [, n, o] = e.match(/^([a-z]+):\/\/(.*?)(\.svg)?$/) || [];
                return n
                    ? 'http' === n || 'https' === n
                        ? e
                        : 'assets' === n
                          ? (0, r.a)(`${t}/${o}.svg`)
                          : null
                    : e.startsWith('./') || e.startsWith('../')
                      ? e
                      : null;
            }
            function b(e) {
                var t;
                let n = i.sanitize(`<style>${e}</style>`, {ALLOWED_TAGS: ['style'], ALLOWED_ATTR: [], FORCE_BODY: !0}),
                    r = document.createElement('div');
                return (
                    (r.innerHTML = n),
                    null === (t = r.querySelector('style')) || void 0 === t ? void 0 : t.innerHTML
                );
            }
            async function v() {
                return new Promise((e) => setTimeout(e, 10));
            }
            function T(e) {
                let t = e;
                for (; t && t.parentNode; ) {
                    if (t.parentNode === document) return !0;
                    t = t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
                }
                return !1;
            }
            function N(e) {
                return e.parentNode ? e.parentNode : e instanceof ShadowRoot ? e.host : null;
            }
            function E(e, t) {
                return e.reduce((e, n, r) => {
                    let o = t(n, r);
                    return (o in e || (e[o] = []), e[o].push(n), e);
                }, {});
            }
        },
    },
]);
