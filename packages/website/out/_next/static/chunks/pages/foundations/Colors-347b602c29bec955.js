(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [24763],
    {
        63360: function (e, n, r) {
            var t,
                o,
                s = 1 / 0,
                a = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                c = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                u = '\ud800-\udfff',
                l = '\\u2700-\\u27bf',
                i = 'a-z\\xdf-\\xf6\\xf8-\\xff',
                f = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
                d =
                    '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
                x = "['’]",
                m = '[' + d + ']',
                p = '[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]',
                h = '[' + i + ']',
                j = '[^' + u + d + '\\d+' + l + i + f + ']',
                b = '(?:\ud83c[\udde6-\uddff]){2}',
                g = '[\ud800-\udbff][\udc00-\udfff]',
                v = '[' + f + ']',
                y = '(?:' + h + '|' + j + ')',
                N = '(?:' + x + '(?:d|ll|m|re|s|t|ve))?',
                E = '(?:' + x + '(?:D|LL|M|RE|S|T|VE))?',
                S = '(?:' + p + '|\ud83c[\udffb-\udfff])?',
                O = '[\\ufe0e\\ufe0f]?',
                k = '(?:\\u200d(?:' + ['[^' + u + ']', b, g].join('|') + ')' + O + S + ')*',
                A = '(?:' + ['[' + l + ']', b, g].join('|') + ')' + (O + S + k),
                C = RegExp(x, 'g'),
                _ = RegExp(p, 'g'),
                Z = RegExp(
                    [
                        v + '?' + h + '+' + N + '(?=' + [m, v, '$'].join('|') + ')',
                        '(?:' + v + '|' + j + ')+' + E + '(?=' + [m, v + y, '$'].join('|') + ')',
                        v + '?' + y + '+' + N,
                        v + '+' + E,
                        '\\d+',
                        A,
                    ].join('|'),
                    'g',
                ),
                T = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                w = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
                z = 'object' == typeof self && self && self.Object === Object && self,
                I = w || z || Function('return this')(),
                U =
                    ((t = {
                        À: 'A',
                        Á: 'A',
                        Â: 'A',
                        Ã: 'A',
                        Ä: 'A',
                        Å: 'A',
                        à: 'a',
                        á: 'a',
                        â: 'a',
                        ã: 'a',
                        ä: 'a',
                        å: 'a',
                        Ç: 'C',
                        ç: 'c',
                        Ð: 'D',
                        ð: 'd',
                        È: 'E',
                        É: 'E',
                        Ê: 'E',
                        Ë: 'E',
                        è: 'e',
                        é: 'e',
                        ê: 'e',
                        ë: 'e',
                        Ì: 'I',
                        Í: 'I',
                        Î: 'I',
                        Ï: 'I',
                        ì: 'i',
                        í: 'i',
                        î: 'i',
                        ï: 'i',
                        Ñ: 'N',
                        ñ: 'n',
                        Ò: 'O',
                        Ó: 'O',
                        Ô: 'O',
                        Õ: 'O',
                        Ö: 'O',
                        Ø: 'O',
                        ò: 'o',
                        ó: 'o',
                        ô: 'o',
                        õ: 'o',
                        ö: 'o',
                        ø: 'o',
                        Ù: 'U',
                        Ú: 'U',
                        Û: 'U',
                        Ü: 'U',
                        ù: 'u',
                        ú: 'u',
                        û: 'u',
                        ü: 'u',
                        Ý: 'Y',
                        ý: 'y',
                        ÿ: 'y',
                        Æ: 'Ae',
                        æ: 'ae',
                        Þ: 'Th',
                        þ: 'th',
                        ß: 'ss',
                        Ā: 'A',
                        Ă: 'A',
                        Ą: 'A',
                        ā: 'a',
                        ă: 'a',
                        ą: 'a',
                        Ć: 'C',
                        Ĉ: 'C',
                        Ċ: 'C',
                        Č: 'C',
                        ć: 'c',
                        ĉ: 'c',
                        ċ: 'c',
                        č: 'c',
                        Ď: 'D',
                        Đ: 'D',
                        ď: 'd',
                        đ: 'd',
                        Ē: 'E',
                        Ĕ: 'E',
                        Ė: 'E',
                        Ę: 'E',
                        Ě: 'E',
                        ē: 'e',
                        ĕ: 'e',
                        ė: 'e',
                        ę: 'e',
                        ě: 'e',
                        Ĝ: 'G',
                        Ğ: 'G',
                        Ġ: 'G',
                        Ģ: 'G',
                        ĝ: 'g',
                        ğ: 'g',
                        ġ: 'g',
                        ģ: 'g',
                        Ĥ: 'H',
                        Ħ: 'H',
                        ĥ: 'h',
                        ħ: 'h',
                        Ĩ: 'I',
                        Ī: 'I',
                        Ĭ: 'I',
                        Į: 'I',
                        İ: 'I',
                        ĩ: 'i',
                        ī: 'i',
                        ĭ: 'i',
                        į: 'i',
                        ı: 'i',
                        Ĵ: 'J',
                        ĵ: 'j',
                        Ķ: 'K',
                        ķ: 'k',
                        ĸ: 'k',
                        Ĺ: 'L',
                        Ļ: 'L',
                        Ľ: 'L',
                        Ŀ: 'L',
                        Ł: 'L',
                        ĺ: 'l',
                        ļ: 'l',
                        ľ: 'l',
                        ŀ: 'l',
                        ł: 'l',
                        Ń: 'N',
                        Ņ: 'N',
                        Ň: 'N',
                        Ŋ: 'N',
                        ń: 'n',
                        ņ: 'n',
                        ň: 'n',
                        ŋ: 'n',
                        Ō: 'O',
                        Ŏ: 'O',
                        Ő: 'O',
                        ō: 'o',
                        ŏ: 'o',
                        ő: 'o',
                        Ŕ: 'R',
                        Ŗ: 'R',
                        Ř: 'R',
                        ŕ: 'r',
                        ŗ: 'r',
                        ř: 'r',
                        Ś: 'S',
                        Ŝ: 'S',
                        Ş: 'S',
                        Š: 'S',
                        ś: 's',
                        ŝ: 's',
                        ş: 's',
                        š: 's',
                        Ţ: 'T',
                        Ť: 'T',
                        Ŧ: 'T',
                        ţ: 't',
                        ť: 't',
                        ŧ: 't',
                        Ũ: 'U',
                        Ū: 'U',
                        Ŭ: 'U',
                        Ů: 'U',
                        Ű: 'U',
                        Ų: 'U',
                        ũ: 'u',
                        ū: 'u',
                        ŭ: 'u',
                        ů: 'u',
                        ű: 'u',
                        ų: 'u',
                        Ŵ: 'W',
                        ŵ: 'w',
                        Ŷ: 'Y',
                        ŷ: 'y',
                        Ÿ: 'Y',
                        Ź: 'Z',
                        Ż: 'Z',
                        Ž: 'Z',
                        ź: 'z',
                        ż: 'z',
                        ž: 'z',
                        Ĳ: 'IJ',
                        ĳ: 'ij',
                        Œ: 'Oe',
                        œ: 'oe',
                        ŉ: "'n",
                        ſ: 'ss',
                    }),
                    function (e) {
                        return null == t ? void 0 : t[e];
                    }),
                L = Object.prototype.toString,
                R = I.Symbol,
                P = R ? R.prototype : void 0,
                D = P ? P.toString : void 0;
            function G(e) {
                return null == e
                    ? ''
                    : (function (e) {
                          if ('string' == typeof e) return e;
                          if (
                              'symbol' == typeof (n = e) ||
                              (n && 'object' == typeof n && '[object Symbol]' == L.call(n))
                          )
                              return D ? D.call(e) : '';
                          var n,
                              r = e + '';
                          return '0' == r && 1 / e == -s ? '-0' : r;
                      })(e);
            }
            var $ =
                ((o = function (e, n, r) {
                    return e + (r ? '-' : '') + n.toLowerCase();
                }),
                function (e) {
                    var n;
                    return (function (e, n, r, t) {
                        for (var o = -1, s = e ? e.length : 0; ++o < s; ) r = n(r, e[o], o, e);
                        return r;
                    })(
                        (function (e, n, r) {
                            if (((e = G(e)), void 0 === n)) {
                                var t;
                                return ((t = e), T.test(t)) ? e.match(Z) || [] : e.match(a) || [];
                            }
                            return e.match(n) || [];
                        })(((n = G((n = e))) && n.replace(c, U).replace(_, '')).replace(C, '')),
                        o,
                        '',
                    );
                });
            e.exports = $;
        },
        84397: function (e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/foundations/Colors',
                function () {
                    return r(16947);
                },
            ]);
        },
        16947: function (e, n, r) {
            'use strict';
            (r.r(n),
                r.d(n, {
                    ColorsExamples: function () {
                        return m;
                    },
                }));
            var t = r(97458),
                o = r(26300),
                s = r(28934),
                a = r(63360),
                c = r.n(a),
                u = r(4778),
                l = r(66809),
                i = function (e) {
                    return 'string' != typeof e;
                },
                f = function (e) {
                    var n = e.colorName,
                        r = e.colorValue;
                    return (0, t.jsxs)('div', {
                        className: 'color-box',
                        children: [
                            (0, t.jsx)('div', {
                                className: 'mb1 overflow-hidden color-sticker card',
                                style: {background: r},
                            }),
                            (0, t.jsx)('div', {
                                className: 'color-details caption-subdued',
                                children: (0, t.jsxs)('table', {
                                    children: [
                                        (0, t.jsxs)('tr', {
                                            children: [
                                                (0, t.jsx)('td', {children: 'TS'}),
                                                (0, t.jsx)('td', {
                                                    children: (0, t.jsx)('span', {
                                                        className: 'code',
                                                        children: n.replace(/-/g, '.'),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)('tr', {
                                            children: [
                                                (0, t.jsx)('td', {children: 'SCSS'}),
                                                (0, t.jsx)('td', {
                                                    children: (0, t.jsxs)('span', {
                                                        className: 'code',
                                                        children: ['$plasma-', c()(n)],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)('tr', {
                                            children: [
                                                (0, t.jsx)('td', {children: 'CSS'}),
                                                (0, t.jsx)('td', {
                                                    children: (0, t.jsxs)('span', {
                                                        className: 'code',
                                                        children: ['--plasma-', c()(n)],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                d = function (e, n) {
                    return 'primary' === e ? -1 : 'primary' === n ? 1 : 0;
                },
                x = function (e) {
                    var n = e.name,
                        r = e.value;
                    return i(r)
                        ? (0, t.jsx)(t.Fragment, {
                              children: Object.keys(r)
                                  .sort()
                                  .sort(d)
                                  .sort(function (e, n) {
                                      return Number(i(r[e])) - Number(i(r[n]));
                                  })
                                  .map(function (e) {
                                      var o = !i(r[e]),
                                          a = !Object.values(r[e]).some(i);
                                      return (0, t.jsxs)(
                                          'div',
                                          {
                                              className: (0, s.Z)({mb2: !o, 'inline-flex flex-column flex-center': o}),
                                              children: [
                                                  (0, t.jsx)('h6', {
                                                      className: (0, s.Z)('my1', {p: o, 'body-m': a}),
                                                      children: e,
                                                  }),
                                                  (0, t.jsx)('div', {
                                                      className: (0, s.Z)({'flex color-palette': a, pl2: !a}),
                                                      children: (0, t.jsx)(x, {
                                                          name: ''.concat(n, '-').concat(e),
                                                          value: r[e],
                                                      }),
                                                  }),
                                              ],
                                          },
                                          e,
                                      );
                                  }),
                          })
                        : (0, t.jsx)(f, {colorName: n, colorValue: r});
                },
                m = function () {
                    return (0, t.jsx)(l.X, {
                        id: 'Colors',
                        section: 'Foundations',
                        title: 'Colors',
                        thumbnail: 'colors',
                        description: 'The colors that give Plasma its identity',
                        sourcePath: '/packages/tokens#readme',
                        withPropsTable: !1,
                        children: (0, t.jsxs)('div', {
                            className: 'plasma-page-layout__section pl5',
                            children: [
                                (0, t.jsxs)('p', {
                                    children: [
                                        'All colors are exposed through the',
                                        ' ',
                                        (0, t.jsxs)('a', {
                                            href: 'https://github.com/coveo/plasma/tree/master/packages/tokens#readme',
                                            target: '_blank',
                                            className: 'link inline-flex flex-center',
                                            children: [
                                                '@coveord/plasma-tokens',
                                                (0, t.jsx)(u.ExternalSize16Px, {style: {marginLeft: '4px'}}),
                                            ],
                                        }),
                                        ' ',
                                        'package in 3 formats: TypeScript, Sass and CSS. Hover over any color to see its name in any of those formats.',
                                    ],
                                }),
                                (0, t.jsx)(x, {name: 'color', value: o.$}),
                            ],
                        }),
                    });
                };
            n.default = m;
        },
    },
    function (e) {
        (e.O(0, [59594, 37791, 66809, 49774, 92888, 40179], function () {
            return e((e.s = 84397));
        }),
            (_N_E = e.O()));
    },
]);
