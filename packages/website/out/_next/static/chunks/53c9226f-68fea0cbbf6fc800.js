'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [79012],
    {
        16851: function (e, a, t) {
            t.d(a, {
                a: function () {
                    return c;
                },
                h: function () {
                    return ex;
                },
                i: function () {
                    return ew;
                },
            });
            var r,
                i,
                n,
                s,
                o = Object.defineProperty,
                c = (e, a) => {
                    for (var t in a) o(e, t, {get: a[t], enumerable: !0});
                },
                l = class extends Error {},
                h =
                    (((r = h || {}).Narrowbody = 'narrowbody'),
                    (r.Regional = 'regional'),
                    (r.Widebody = 'widebody'),
                    r),
                p = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                u = ['0', 'O', '1', 'I', 'L'],
                m = {regional: 20, narrowbody: 35, widebody: 60},
                f = {
                    regional: ['A', 'B', 'C', 'D'],
                    narrowbody: ['A', 'B', 'C', 'D', 'E', 'F'],
                    widebody: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'],
                },
                d = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(d.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    airport() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.airline.airport);
                    }
                    airline() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.airline.airline);
                    }
                    airplane() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.airline.airplane);
                    }
                    recordLocator(e = {}) {
                        let {allowNumerics: a = !1, allowVisuallySimilarCharacters: t = !1} = e,
                            r = [];
                        return (
                            a || r.push(...p),
                            t || r.push(...u),
                            this.faker.string.alphanumeric({length: 6, casing: 'upper', exclude: r})
                        );
                    }
                    seat(e = {}) {
                        let {aircraftType: a = 'narrowbody'} = e;
                        return `${this.faker.number.int({min: 1, max: m[a]})}${this.faker.helpers.arrayElement(f[a])}`;
                    }
                    aircraftType() {
                        return this.faker.helpers.enumValue(h);
                    }
                    flightNumber(e = {}) {
                        let {length: a = {min: 1, max: 4}, addLeadingZeros: t = !1} = e,
                            r = this.faker.string.numeric({length: a, allowLeadingZeros: !1});
                        return t ? r.padStart(4, '0') : r;
                    }
                },
                b =
                    (((i = b || {}).SRGB = 'sRGB'),
                    (i.DisplayP3 = 'display-p3'),
                    (i.REC2020 = 'rec2020'),
                    (i.A98RGB = 'a98-rgb'),
                    (i.ProphotoRGB = 'prophoto-rgb'),
                    i),
                k =
                    (((n = k || {}).RGB = 'rgb'),
                    (n.RGBA = 'rgba'),
                    (n.HSL = 'hsl'),
                    (n.HSLA = 'hsla'),
                    (n.HWB = 'hwb'),
                    (n.CMYK = 'cmyk'),
                    (n.LAB = 'lab'),
                    (n.LCH = 'lch'),
                    (n.COLOR = 'color'),
                    n);
            function y(e, a, t = 'rgb', r = 'sRGB') {
                switch (a) {
                    case 'css':
                        return (function (e, a = 'rgb', t = 'sRGB') {
                            let r = (e) => Math.round(100 * e);
                            switch (a) {
                                case 'rgba':
                                    return `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`;
                                case 'color':
                                    return `color(${t} ${e[0]} ${e[1]} ${e[2]})`;
                                case 'cmyk':
                                    return `cmyk(${r(e[0])}%, ${r(e[1])}%, ${r(e[2])}%, ${r(e[3])}%)`;
                                case 'hsl':
                                    return `hsl(${e[0]}deg ${r(e[1])}% ${r(e[2])}%)`;
                                case 'hsla':
                                    return `hsl(${e[0]}deg ${r(e[1])}% ${r(e[2])}% / ${r(e[3])})`;
                                case 'hwb':
                                    return `hwb(${e[0]} ${r(e[1])}% ${r(e[2])}%)`;
                                case 'lab':
                                    return `lab(${r(e[0])}% ${e[1]} ${e[2]})`;
                                case 'lch':
                                    return `lch(${r(e[0])}% ${e[1]} ${e[2]})`;
                                default:
                                    return `rgb(${e[0]}, ${e[1]}, ${e[2]})`;
                            }
                        })(e, t, r);
                    case 'binary':
                        return (function e(a) {
                            return a
                                .map((a) => {
                                    if (a % 1 != 0) {
                                        let t = new ArrayBuffer(4);
                                        return (
                                            new DataView(t).setFloat32(0, a),
                                            e(Array.from(new Uint8Array(t)))
                                                .split(' ')
                                                .join('')
                                        );
                                    }
                                    return (a >>> 0).toString(2).padStart(8, '0');
                                })
                                .join(' ');
                        })(e);
                    default:
                        return e;
                }
            }
            var g = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(g.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    human() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.color.human);
                    }
                    space() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.color.space);
                    }
                    cssSupportedFunction() {
                        return this.faker.helpers.enumValue(k);
                    }
                    cssSupportedSpace() {
                        return this.faker.helpers.enumValue(b);
                    }
                    rgb(e) {
                        let {format: a = 'hex', includeAlpha: t = !1, prefix: r = '#', casing: i = 'lower'} = e || {};
                        e = {format: a, includeAlpha: t, prefix: r, casing: i};
                        let n,
                            s = 'rgb';
                        return 'hex' === a
                            ? (n = (function (e, a) {
                                  switch (null == a ? void 0 : a.casing) {
                                      case 'upper':
                                          e = e.toUpperCase();
                                          break;
                                      case 'lower':
                                          e = e.toLowerCase();
                                  }
                                  return (null != a && a.prefix && (e = a.prefix + e), e);
                              })((n = this.faker.string.hexadecimal({length: t ? 8 : 6, prefix: ''})), e))
                            : ((n = Array.from({length: 3}, () => this.faker.number.int(255))),
                              t && (n.push(this.faker.number.float({precision: 0.01})), (s = 'rgba')),
                              y(n, a, s));
                    }
                    cmyk(e) {
                        return y(
                            Array.from({length: 4}, () => this.faker.number.float({precision: 0.01})),
                            (null == e ? void 0 : e.format) || 'decimal',
                            'cmyk',
                        );
                    }
                    hsl(e) {
                        let a = [this.faker.number.int(360)];
                        for (let t = 0; t < (null != e && e.includeAlpha ? 3 : 2); t++)
                            a.push(this.faker.number.float({precision: 0.01}));
                        return y(
                            a,
                            (null == e ? void 0 : e.format) || 'decimal',
                            null != e && e.includeAlpha ? 'hsla' : 'hsl',
                        );
                    }
                    hwb(e) {
                        let a = [this.faker.number.int(360)];
                        for (let e = 0; e < 2; e++) a.push(this.faker.number.float({precision: 0.01}));
                        return y(a, (null == e ? void 0 : e.format) || 'decimal', 'hwb');
                    }
                    lab(e) {
                        let a = [this.faker.number.float({precision: 1e-6})];
                        for (let e = 0; e < 2; e++)
                            a.push(this.faker.number.float({min: -100, max: 100, precision: 1e-4}));
                        return y(a, (null == e ? void 0 : e.format) || 'decimal', 'lab');
                    }
                    lch(e) {
                        let a = [this.faker.number.float({precision: 1e-6})];
                        for (let e = 0; e < 2; e++) a.push(this.faker.number.float({max: 230, precision: 0.1}));
                        return y(a, (null == e ? void 0 : e.format) || 'decimal', 'lch');
                    }
                    colorByCSSColorSpace(e) {
                        return (
                            (null == e ? void 0 : e.format) !== 'css' ||
                                (null != e && e.space) ||
                                (e = {...e, space: 'sRGB'}),
                            y(
                                Array.from({length: 3}, () => this.faker.number.float({precision: 1e-4})),
                                (null == e ? void 0 : e.format) || 'decimal',
                                'color',
                                null == e ? void 0 : e.space,
                            )
                        );
                    }
                },
                A = (((s = A || {}).Female = 'female'), (s.Male = 'male'), s);
            function x(e, a, t, {generic: r, female: i, male: n} = {}) {
                let s;
                switch (t) {
                    case 'female':
                        s = i;
                        break;
                    case 'male':
                        s = n;
                        break;
                    default:
                        s = r;
                }
                return (null == s && (s = null != i && null != n ? e.helpers.arrayElement([i, n]) : r), a(s));
            }
            var w = class {
                constructor(e) {
                    for (let a of ((this.faker = e), Object.getOwnPropertyNames(w.prototype)))
                        'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                }
                firstName(e) {
                    var a;
                    let {
                        first_name: t,
                        female_first_name: r,
                        male_first_name: i,
                    } = null != (a = this.faker.rawDefinitions.person) ? a : {};
                    return x(this.faker, this.faker.helpers.arrayElement, e, {generic: t, female: r, male: i});
                }
                lastName(e) {
                    var a;
                    let {
                        last_name: t,
                        female_last_name: r,
                        male_last_name: i,
                        last_name_pattern: n,
                        male_last_name_pattern: s,
                        female_last_name_pattern: o,
                    } = null != (a = this.faker.rawDefinitions.person) ? a : {};
                    if (null != n || null != s || null != o) {
                        let a = x(this.faker, this.faker.helpers.weightedArrayElement, e, {
                            generic: n,
                            female: o,
                            male: s,
                        });
                        return this.faker.helpers.fake(a);
                    }
                    return x(this.faker, this.faker.helpers.arrayElement, e, {generic: t, female: r, male: i});
                }
                middleName(e) {
                    var a;
                    let {
                        middle_name: t,
                        female_middle_name: r,
                        male_middle_name: i,
                    } = null != (a = this.faker.rawDefinitions.person) ? a : {};
                    return x(this.faker, this.faker.helpers.arrayElement, e, {generic: t, female: r, male: i});
                }
                fullName(e = {}) {
                    let {
                            sex: a = this.faker.helpers.arrayElement(['female', 'male']),
                            firstName: t = this.firstName(a),
                            lastName: r = this.lastName(a),
                        } = e,
                        i = this.faker.helpers.weightedArrayElement(this.faker.definitions.person.name);
                    return this.faker.helpers.mustache(i, {
                        'person.prefix': () => this.prefix(a),
                        'person.firstName': () => t,
                        'person.middleName': () => this.middleName(a),
                        'person.lastName': () => r,
                        'person.suffix': () => this.suffix(),
                    });
                }
                gender() {
                    return this.faker.helpers.arrayElement(this.faker.definitions.person.gender);
                }
                sex() {
                    return this.faker.helpers.arrayElement(this.faker.definitions.person.sex);
                }
                sexType() {
                    return this.faker.helpers.enumValue(A);
                }
                bio() {
                    let {bio_pattern: e} = this.faker.definitions.person;
                    return this.faker.helpers.fake(e);
                }
                prefix(e) {
                    var a;
                    let {
                        prefix: t,
                        female_prefix: r,
                        male_prefix: i,
                    } = null != (a = this.faker.rawDefinitions.person) ? a : {};
                    return x(this.faker, this.faker.helpers.arrayElement, e, {generic: t, female: r, male: i});
                }
                suffix() {
                    return this.faker.helpers.arrayElement(this.faker.definitions.person.suffix);
                }
                jobTitle() {
                    return `${this.jobDescriptor()} ${this.jobArea()} ${this.jobType()}`;
                }
                jobDescriptor() {
                    return this.faker.helpers.arrayElement(this.faker.definitions.person.title.descriptor);
                }
                jobArea() {
                    return this.faker.helpers.arrayElement(this.faker.definitions.person.title.level);
                }
                jobType() {
                    return this.faker.helpers.arrayElement(this.faker.definitions.person.title.job);
                }
                zodiacSign() {
                    return this.faker.helpers.arrayElement(this.faker.definitions.person.western_zodiac_sign);
                }
            };
            function E(e) {
                let a = `[@faker-js/faker]: ${e.deprecated} is deprecated`;
                (e.since && (a += ` since v${e.since}`),
                    e.until && (a += ` and will be removed in v${e.until}`),
                    e.proposed && (a += `. Please use ${e.proposed} instead`),
                    console.warn(`${a}.`));
            }
            var N = class {
                    constructor() {
                        ((this.N = 624),
                            (this.M = 397),
                            (this.MATRIX_A = 2567483615),
                            (this.UPPER_MASK = 2147483648),
                            (this.LOWER_MASK = 2147483647),
                            (this.mt = Array(this.N)),
                            (this.mti = this.N + 1),
                            (this.mag01 = [0, this.MATRIX_A]));
                    }
                    unsigned32(e) {
                        return e < 0 ? (e ^ this.UPPER_MASK) + this.UPPER_MASK : e;
                    }
                    subtraction32(e, a) {
                        return e < a ? this.unsigned32((4294967296 - (a - e)) & 4294967295) : e - a;
                    }
                    addition32(e, a) {
                        return this.unsigned32((e + a) & 4294967295);
                    }
                    multiplication32(e, a) {
                        let t = 0;
                        for (let r = 0; r < 32; ++r) (e >>> r) & 1 && (t = this.addition32(t, this.unsigned32(a << r)));
                        return t;
                    }
                    initGenrand(e) {
                        for (this.mt[0] = this.unsigned32(4294967295 & e), this.mti = 1; this.mti < this.N; this.mti++)
                            ((this.mt[this.mti] = this.addition32(
                                this.multiplication32(
                                    1812433253,
                                    this.unsigned32(this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)),
                                ),
                                this.mti,
                            )),
                                (this.mt[this.mti] = this.unsigned32(4294967295 & this.mt[this.mti])));
                    }
                    initByArray(e, a) {
                        this.initGenrand(19650218);
                        let t = 1,
                            r = 0,
                            i = this.N > a ? this.N : a;
                        for (; i; i--)
                            ((this.mt[t] = this.addition32(
                                this.addition32(
                                    this.unsigned32(
                                        this.mt[t] ^
                                            this.multiplication32(
                                                this.unsigned32(this.mt[t - 1] ^ (this.mt[t - 1] >>> 30)),
                                                1664525,
                                            ),
                                    ),
                                    e[r],
                                ),
                                r,
                            )),
                                (this.mt[t] = this.unsigned32(4294967295 & this.mt[t])),
                                t++,
                                r++,
                                t >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (t = 1)),
                                r >= a && (r = 0));
                        for (i = this.N - 1; i; i--)
                            ((this.mt[t] = this.subtraction32(
                                this.unsigned32(
                                    this.mt[t] ^
                                        this.multiplication32(
                                            this.unsigned32(this.mt[t - 1] ^ (this.mt[t - 1] >>> 30)),
                                            1566083941,
                                        ),
                                ),
                                t,
                            )),
                                (this.mt[t] = this.unsigned32(4294967295 & this.mt[t])),
                                ++t >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (t = 1)));
                        this.mt[0] = 2147483648;
                    }
                    genrandInt32() {
                        let e;
                        if (this.mti >= this.N) {
                            let a;
                            for (this.mti === this.N + 1 && this.initGenrand(5489), a = 0; a < this.N - this.M; a++)
                                ((e = this.unsigned32(
                                    (this.mt[a] & this.UPPER_MASK) | (this.mt[a + 1] & this.LOWER_MASK),
                                )),
                                    (this.mt[a] = this.unsigned32(
                                        this.mt[a + this.M] ^ (e >>> 1) ^ this.mag01[1 & e],
                                    )));
                            for (; a < this.N - 1; a++)
                                ((e = this.unsigned32(
                                    (this.mt[a] & this.UPPER_MASK) | (this.mt[a + 1] & this.LOWER_MASK),
                                )),
                                    (this.mt[a] = this.unsigned32(
                                        this.mt[a + (this.M - this.N)] ^ (e >>> 1) ^ this.mag01[1 & e],
                                    )));
                            ((e = this.unsigned32(
                                (this.mt[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK),
                            )),
                                (this.mt[this.N - 1] = this.unsigned32(
                                    this.mt[this.M - 1] ^ (e >>> 1) ^ this.mag01[1 & e],
                                )),
                                (this.mti = 0));
                        }
                        return (
                            (e = this.mt[this.mti++]),
                            (e = this.unsigned32(e ^ (e >>> 11))),
                            (e = this.unsigned32(e ^ ((e << 7) & 2636928640))),
                            (e = this.unsigned32(e ^ ((e << 15) & 4022730752))),
                            (e = this.unsigned32(e ^ (e >>> 18)))
                        );
                    }
                    genrandInt31() {
                        return this.genrandInt32() >>> 1;
                    }
                    genrandReal1() {
                        return this.genrandInt32() * (1 / 4294967295);
                    }
                    genrandReal2() {
                        return this.genrandInt32() * (1 / 4294967296);
                    }
                    genrandReal3() {
                        return (this.genrandInt32() + 0.5) * (1 / 4294967296);
                    }
                    genrandRes53() {
                        return (
                            (67108864 * (this.genrandInt32() >>> 5) + (this.genrandInt32() >>> 6)) *
                            (1 / 9007199254740992)
                        );
                    }
                },
                S = () => {
                    throw new l('You cannot edit the locale data on the faker instance');
                },
                M = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(M.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    dog() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.dog);
                    }
                    cat() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.cat);
                    }
                    snake() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.snake);
                    }
                    bear() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.bear);
                    }
                    lion() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.lion);
                    }
                    cetacean() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.cetacean);
                    }
                    horse() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.horse);
                    }
                    bird() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.bird);
                    }
                    cow() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.cow);
                    }
                    fish() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.fish);
                    }
                    crocodilia() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.crocodilia);
                    }
                    insect() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.insect);
                    }
                    rabbit() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.rabbit);
                    }
                    rodent() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.rodent);
                    }
                    type() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.animal.type);
                    }
                },
                v = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(v.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    department() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.commerce.department);
                    }
                    productName() {
                        return `${this.productAdjective()} ${this.productMaterial()} ${this.product()}`;
                    }
                    price(e = {}, a = 1e3, t = 2, r = '') {
                        'number' == typeof e &&
                            (E({
                                deprecated: 'faker.commerce.price(min, max, dec, symbol)',
                                proposed: 'faker.commerce.price({ min, max, dec, symbol })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {min: e, dec: t, max: a, symbol: r}));
                        let {dec: i = 2, max: n = 1e3, min: s = 1, symbol: o = ''} = e;
                        return s < 0 || n < 0 ? `${o}0` : o + this.faker.number.int({min: s, max: n}).toFixed(i);
                    }
                    productAdjective() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.adjective);
                    }
                    productMaterial() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.material);
                    }
                    product() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.product);
                    }
                    productDescription() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_description);
                    }
                },
                C = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(C.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    suffixes() {
                        return (
                            E({
                                deprecated: 'faker.company.suffixes',
                                proposed: 'faker.company.name',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.definitions.company.suffix.slice(0)
                        );
                    }
                    name() {
                        return this.faker.helpers.fake(this.faker.definitions.company.name_pattern);
                    }
                    companySuffix() {
                        return (
                            E({
                                deprecated: 'faker.company.companySuffix',
                                proposed: 'faker.company.name',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.helpers.arrayElement(this.suffixes())
                        );
                    }
                    catchPhrase() {
                        return [this.catchPhraseAdjective(), this.catchPhraseDescriptor(), this.catchPhraseNoun()].join(
                            ' ',
                        );
                    }
                    bs() {
                        return (
                            E({
                                deprecated: 'faker.company.bs',
                                proposed: 'faker.company.buzzPhrase',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.buzzPhrase()
                        );
                    }
                    buzzPhrase() {
                        return [this.buzzVerb(), this.buzzAdjective(), this.buzzNoun()].join(' ');
                    }
                    catchPhraseAdjective() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.company.adjective);
                    }
                    catchPhraseDescriptor() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.company.descriptor);
                    }
                    catchPhraseNoun() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.company.noun);
                    }
                    bsAdjective() {
                        return (
                            E({
                                deprecated: 'faker.company.bsAdjective',
                                proposed: 'faker.company.buzzAdjective',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.buzzAdjective()
                        );
                    }
                    buzzAdjective() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_adjective);
                    }
                    bsBuzz() {
                        return (
                            E({
                                deprecated: 'faker.company.bsBuzz',
                                proposed: 'faker.company.buzzVerb',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.buzzVerb()
                        );
                    }
                    buzzVerb() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_verb);
                    }
                    bsNoun() {
                        return (
                            E({
                                deprecated: 'faker.company.bsNoun',
                                proposed: 'faker.company.buzzNoun',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.buzzNoun()
                        );
                    }
                    buzzNoun() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_noun);
                    }
                },
                $ = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames($.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    column() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.database.column);
                    }
                    type() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.database.type);
                    }
                    collation() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.database.collation);
                    }
                    engine() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.database.engine);
                    }
                    mongodbObjectId() {
                        return this.faker.string.hexadecimal({length: 24, casing: 'lower', prefix: ''});
                    }
                },
                T = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(T.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    number(e = 99999) {
                        (E({
                            deprecated: 'faker.datatype.number()',
                            proposed: 'faker.number.int()',
                            since: '8.0',
                            until: '9.0',
                        }),
                            'number' == typeof e && (e = {max: e}));
                        let {min: a = 0, max: t = a + 99999, precision: r = 1} = e;
                        return this.faker.number.float({min: a, max: t, precision: r});
                    }
                    float(e = {}) {
                        (E({
                            deprecated: 'faker.datatype.float()',
                            proposed: 'faker.number.float()',
                            since: '8.0',
                            until: '9.0',
                        }),
                            'number' == typeof e && (e = {precision: e}));
                        let {min: a = 0, max: t = a + 99999, precision: r = 0.01} = e;
                        return this.faker.number.float({min: a, max: t, precision: r});
                    }
                    datetime(e = {}) {
                        E({
                            deprecated: 'faker.datatype.datetime({ min, max })',
                            proposed: 'faker.date.between({ from, to }) or faker.date.anytime()',
                            since: '8.0',
                            until: '9.0',
                        });
                        let a = 'number' == typeof e ? void 0 : e.min,
                            t = 'number' == typeof e ? e : e.max;
                        return (
                            (null == a || a < -864e13) && (a = Date.UTC(1990, 0)),
                            (null == t || t > 864e13) && (t = Date.UTC(2100, 0)),
                            this.faker.date.between({from: a, to: t})
                        );
                    }
                    string(e = {}) {
                        (E({
                            deprecated: 'faker.datatype.string()',
                            proposed: 'faker.string.sample()',
                            since: '8.0',
                            until: '9.0',
                        }),
                            'number' == typeof e && (e = {length: e}));
                        let {length: a = 10} = e;
                        return this.faker.string.sample(a);
                    }
                    uuid() {
                        return (
                            E({
                                deprecated: 'faker.datatype.uuid()',
                                proposed: 'faker.string.uuid()',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.string.uuid()
                        );
                    }
                    boolean(e = {}) {
                        'number' == typeof e && (e = {probability: e});
                        let {probability: a = 0.5} = e;
                        return !(a <= 0) && (a >= 1 || this.faker.number.float() < a);
                    }
                    hexadecimal(e = {}) {
                        return (
                            E({
                                deprecated: 'faker.datatype.hexadecimal()',
                                proposed: 'faker.string.hexadecimal() or faker.number.hex()',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.string.hexadecimal({...e, casing: e.case})
                        );
                    }
                    json() {
                        E({
                            deprecated: 'faker.datatype.json()',
                            proposed: 'your own function to generate complex objects',
                            since: '8.0',
                            until: '9.0',
                        });
                        let e = {};
                        return (
                            ['foo', 'bar', 'bike', 'a', 'b', 'name', 'prop'].forEach((a) => {
                                e[a] = this.boolean() ? this.faker.string.sample() : this.faker.number.int();
                            }),
                            JSON.stringify(e)
                        );
                    }
                    array(e = 10) {
                        return (
                            E({
                                deprecated: 'faker.datatype.array()',
                                proposed: 'your own function to build complex arrays',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.helpers.multiple(
                                () => (this.boolean() ? this.faker.string.sample() : this.faker.number.int()),
                                {count: e},
                            )
                        );
                    }
                    bigInt(e) {
                        return (
                            E({
                                deprecated: 'faker.datatype.bigInt()',
                                proposed: 'faker.number.bigInt()',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.number.bigInt(e)
                        );
                    }
                };
            function P(e, a) {
                return (isNaN((e = new Date(e)).valueOf()) && (e = a()), e);
            }
            var L = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(L.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    anytime(e = {}) {
                        let {refDate: a} = e,
                            t = P(a, this.faker.defaultRefDate);
                        return this.between({
                            from: new Date(t.getTime() - 31536e6),
                            to: new Date(t.getTime() + 31536e6),
                        });
                    }
                    past(e = {}, a) {
                        'number' == typeof e &&
                            (E({
                                deprecated: 'faker.date.past(years, refDate)',
                                proposed: 'faker.date.past({ years, refDate })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {years: e}));
                        let {years: t = 1, refDate: r = a} = e;
                        if (t <= 0) throw new l('Years must be greater than 0.');
                        let i = P(r, this.faker.defaultRefDate),
                            n = i.getTime();
                        return ((n -= this.faker.number.int({min: 1e3, max: 31536e6 * t})), i.setTime(n), i);
                    }
                    future(e = {}, a) {
                        'number' == typeof e &&
                            (E({
                                deprecated: 'faker.date.future(years, refDate)',
                                proposed: 'faker.date.future({ years, refDate })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {years: e}));
                        let {years: t = 1, refDate: r = a} = e;
                        if (t <= 0) throw new l('Years must be greater than 0.');
                        let i = P(r, this.faker.defaultRefDate),
                            n = i.getTime();
                        return ((n += this.faker.number.int({min: 1e3, max: 31536e6 * t})), i.setTime(n), i);
                    }
                    between(e, a) {
                        ('object' != typeof e || e instanceof Date) &&
                            (E({
                                deprecated: 'faker.date.between(from, to)',
                                proposed: 'faker.date.between({ from, to })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {from: e, to: a}));
                        let {from: t, to: r} = e,
                            i = P(t, this.faker.defaultRefDate).getTime(),
                            n = P(r, this.faker.defaultRefDate).getTime(),
                            s = this.faker.number.int(n - i);
                        return new Date(i + s);
                    }
                    betweens(e, a, t = 3) {
                        ('object' != typeof e || e instanceof Date) &&
                            (E({
                                deprecated: 'faker.date.betweens(from, to, count)',
                                proposed: 'faker.date.betweens({ from, to, count })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {from: e, to: a, count: t}));
                        let {from: r, to: i, count: n = 3} = e;
                        return this.faker.helpers
                            .multiple(() => this.between({from: r, to: i}), {count: n})
                            .sort((e, a) => e.getTime() - a.getTime());
                    }
                    recent(e = {}, a) {
                        'number' == typeof e &&
                            (E({
                                deprecated: 'faker.date.recent(days, refDate)',
                                proposed: 'faker.date.recent({ days, refDate })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {days: e}));
                        let {days: t = 1, refDate: r = a} = e;
                        if (t <= 0) throw new l('Days must be greater than 0.');
                        let i = P(r, this.faker.defaultRefDate),
                            n = i.getTime();
                        return ((n -= this.faker.number.int({min: 1e3, max: 864e5 * t})), i.setTime(n), i);
                    }
                    soon(e = {}, a) {
                        'number' == typeof e &&
                            (E({
                                deprecated: 'faker.date.soon(days, refDate)',
                                proposed: 'faker.date.soon({ days, refDate })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {days: e}));
                        let {days: t = 1, refDate: r = a} = e;
                        if (t <= 0) throw new l('Days must be greater than 0.');
                        let i = P(r, this.faker.defaultRefDate),
                            n = i.getTime();
                        return ((n += this.faker.number.int({min: 1e3, max: 864e5 * t})), i.setTime(n), i);
                    }
                    month(e = {}) {
                        let {abbr: a, abbreviated: t = null != a && a, context: r = !1} = e;
                        null != a &&
                            E({
                                deprecated: 'faker.date.month({ abbr })',
                                proposed: 'faker.date.month({ abbreviated })',
                                since: '8.0',
                                until: '9.0',
                            });
                        let i = this.faker.definitions.date.month,
                            n;
                        return (
                            (n = t
                                ? r && null != i.abbr_context
                                    ? 'abbr_context'
                                    : 'abbr'
                                : r && null != i.wide_context
                                  ? 'wide_context'
                                  : 'wide'),
                            this.faker.helpers.arrayElement(i[n])
                        );
                    }
                    weekday(e = {}) {
                        let {abbr: a, abbreviated: t = null != a && a, context: r = !1} = e;
                        null != a &&
                            E({
                                deprecated: 'faker.date.weekday({ abbr })',
                                proposed: 'faker.date.weekday({ abbreviated })',
                                since: '8.0',
                                until: '9.0',
                            });
                        let i = this.faker.definitions.date.weekday,
                            n;
                        return (
                            (n = t
                                ? r && null != i.abbr_context
                                    ? 'abbr_context'
                                    : 'abbr'
                                : r && null != i.wide_context
                                  ? 'wide_context'
                                  : 'wide'),
                            this.faker.helpers.arrayElement(i[n])
                        );
                    }
                    birthdate(e = {}) {
                        var a, t, r, i;
                        if (e.max < e.min) throw new l(`Max ${e.max} should be larger than or equal to min ${e.min}.`);
                        let n = 'age' === e.mode ? 'age' : 'year',
                            s = P(e.refDate, this.faker.defaultRefDate),
                            o = s.getUTCFullYear(),
                            c,
                            h;
                        return (
                            'age' === n
                                ? ((c = new Date(s).setUTCFullYear(o - (null != (a = e.max) ? a : 80) - 1)),
                                  (h = new Date(s).setUTCFullYear(o - (null != (t = e.min) ? t : 18))))
                                : ((c = new Date(Date.UTC(0, 0, 2)).setUTCFullYear(null != (r = e.min) ? r : o - 80)),
                                  (h = new Date(Date.UTC(0, 11, 30)).setUTCFullYear(null != (i = e.max) ? i : o - 18))),
                            new Date(this.faker.number.int({min: c, max: h}))
                        );
                    }
                },
                R = {
                    alpha: [
                        'A',
                        'B',
                        'C',
                        'D',
                        'E',
                        'F',
                        'G',
                        'H',
                        'I',
                        'J',
                        'K',
                        'L',
                        'M',
                        'N',
                        'O',
                        'P',
                        'Q',
                        'R',
                        'S',
                        'T',
                        'U',
                        'V',
                        'W',
                        'X',
                        'Y',
                        'Z',
                    ],
                    formats: [
                        {
                            country: 'AL',
                            total: 28,
                            bban: [
                                {type: 'n', count: 8},
                                {type: 'c', count: 16},
                            ],
                            format: 'ALkk bbbs sssx cccc cccc cccc cccc',
                        },
                        {
                            country: 'AD',
                            total: 24,
                            bban: [
                                {type: 'n', count: 8},
                                {type: 'c', count: 12},
                            ],
                            format: 'ADkk bbbb ssss cccc cccc cccc',
                        },
                        {
                            country: 'AT',
                            total: 20,
                            bban: [
                                {type: 'n', count: 5},
                                {type: 'n', count: 11},
                            ],
                            format: 'ATkk bbbb bccc cccc cccc',
                        },
                        {
                            country: 'AZ',
                            total: 28,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'n', count: 20},
                            ],
                            format: 'AZkk bbbb cccc cccc cccc cccc cccc',
                        },
                        {
                            country: 'BH',
                            total: 22,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'c', count: 14},
                            ],
                            format: 'BHkk bbbb cccc cccc cccc cc',
                        },
                        {
                            country: 'BE',
                            total: 16,
                            bban: [
                                {type: 'n', count: 3},
                                {type: 'n', count: 9},
                            ],
                            format: 'BEkk bbbc cccc ccxx',
                        },
                        {
                            country: 'BA',
                            total: 20,
                            bban: [
                                {type: 'n', count: 6},
                                {type: 'n', count: 10},
                            ],
                            format: 'BAkk bbbs sscc cccc ccxx',
                        },
                        {
                            country: 'BR',
                            total: 29,
                            bban: [
                                {type: 'n', count: 13},
                                {type: 'n', count: 10},
                                {type: 'a', count: 1},
                                {type: 'c', count: 1},
                            ],
                            format: 'BRkk bbbb bbbb ssss sccc cccc ccct n',
                        },
                        {
                            country: 'BG',
                            total: 22,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'n', count: 6},
                                {type: 'c', count: 8},
                            ],
                            format: 'BGkk bbbb ssss ddcc cccc cc',
                        },
                        {
                            country: 'CR',
                            total: 22,
                            bban: [
                                {type: 'n', count: 1},
                                {type: 'n', count: 3},
                                {type: 'n', count: 14},
                            ],
                            format: 'CRkk xbbb cccc cccc cccc cc',
                        },
                        {
                            country: 'HR',
                            total: 21,
                            bban: [
                                {type: 'n', count: 7},
                                {type: 'n', count: 10},
                            ],
                            format: 'HRkk bbbb bbbc cccc cccc c',
                        },
                        {
                            country: 'CY',
                            total: 28,
                            bban: [
                                {type: 'n', count: 8},
                                {type: 'c', count: 16},
                            ],
                            format: 'CYkk bbbs ssss cccc cccc cccc cccc',
                        },
                        {
                            country: 'CZ',
                            total: 24,
                            bban: [
                                {type: 'n', count: 10},
                                {type: 'n', count: 10},
                            ],
                            format: 'CZkk bbbb ssss sscc cccc cccc',
                        },
                        {
                            country: 'DK',
                            total: 18,
                            bban: [
                                {type: 'n', count: 4},
                                {type: 'n', count: 10},
                            ],
                            format: 'DKkk bbbb cccc cccc cc',
                        },
                        {
                            country: 'DO',
                            total: 28,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'n', count: 20},
                            ],
                            format: 'DOkk bbbb cccc cccc cccc cccc cccc',
                        },
                        {
                            country: 'TL',
                            total: 23,
                            bban: [
                                {type: 'n', count: 3},
                                {type: 'n', count: 16},
                            ],
                            format: 'TLkk bbbc cccc cccc cccc cxx',
                        },
                        {
                            country: 'EE',
                            total: 20,
                            bban: [
                                {type: 'n', count: 4},
                                {type: 'n', count: 12},
                            ],
                            format: 'EEkk bbss cccc cccc cccx',
                        },
                        {
                            country: 'FO',
                            total: 18,
                            bban: [
                                {type: 'n', count: 4},
                                {type: 'n', count: 10},
                            ],
                            format: 'FOkk bbbb cccc cccc cx',
                        },
                        {
                            country: 'FI',
                            total: 18,
                            bban: [
                                {type: 'n', count: 6},
                                {type: 'n', count: 8},
                            ],
                            format: 'FIkk bbbb bbcc cccc cx',
                        },
                        {
                            country: 'FR',
                            total: 27,
                            bban: [
                                {type: 'n', count: 10},
                                {type: 'c', count: 11},
                                {type: 'n', count: 2},
                            ],
                            format: 'FRkk bbbb bggg ggcc cccc cccc cxx',
                        },
                        {
                            country: 'GE',
                            total: 22,
                            bban: [
                                {type: 'a', count: 2},
                                {type: 'n', count: 16},
                            ],
                            format: 'GEkk bbcc cccc cccc cccc cc',
                        },
                        {
                            country: 'DE',
                            total: 22,
                            bban: [
                                {type: 'n', count: 8},
                                {type: 'n', count: 10},
                            ],
                            format: 'DEkk bbbb bbbb cccc cccc cc',
                        },
                        {
                            country: 'GI',
                            total: 23,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'c', count: 15},
                            ],
                            format: 'GIkk bbbb cccc cccc cccc ccc',
                        },
                        {
                            country: 'GR',
                            total: 27,
                            bban: [
                                {type: 'n', count: 7},
                                {type: 'c', count: 16},
                            ],
                            format: 'GRkk bbbs sssc cccc cccc cccc ccc',
                        },
                        {
                            country: 'GL',
                            total: 18,
                            bban: [
                                {type: 'n', count: 4},
                                {type: 'n', count: 10},
                            ],
                            format: 'GLkk bbbb cccc cccc cc',
                        },
                        {
                            country: 'GT',
                            total: 28,
                            bban: [
                                {type: 'c', count: 4},
                                {type: 'c', count: 4},
                                {type: 'c', count: 16},
                            ],
                            format: 'GTkk bbbb mmtt cccc cccc cccc cccc',
                        },
                        {
                            country: 'HU',
                            total: 28,
                            bban: [
                                {type: 'n', count: 8},
                                {type: 'n', count: 16},
                            ],
                            format: 'HUkk bbbs sssk cccc cccc cccc cccx',
                        },
                        {
                            country: 'IS',
                            total: 26,
                            bban: [
                                {type: 'n', count: 6},
                                {type: 'n', count: 16},
                            ],
                            format: 'ISkk bbbb sscc cccc iiii iiii ii',
                        },
                        {
                            country: 'IE',
                            total: 22,
                            bban: [
                                {type: 'c', count: 4},
                                {type: 'n', count: 6},
                                {type: 'n', count: 8},
                            ],
                            format: 'IEkk aaaa bbbb bbcc cccc cc',
                        },
                        {
                            country: 'IL',
                            total: 23,
                            bban: [
                                {type: 'n', count: 6},
                                {type: 'n', count: 13},
                            ],
                            format: 'ILkk bbbn nncc cccc cccc ccc',
                        },
                        {
                            country: 'IT',
                            total: 27,
                            bban: [
                                {type: 'a', count: 1},
                                {type: 'n', count: 10},
                                {type: 'c', count: 12},
                            ],
                            format: 'ITkk xaaa aabb bbbc cccc cccc ccc',
                        },
                        {
                            country: 'JO',
                            total: 30,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'n', count: 4},
                                {type: 'n', count: 18},
                            ],
                            format: 'JOkk bbbb nnnn cccc cccc cccc cccc cc',
                        },
                        {
                            country: 'KZ',
                            total: 20,
                            bban: [
                                {type: 'n', count: 3},
                                {type: 'c', count: 13},
                            ],
                            format: 'KZkk bbbc cccc cccc cccc',
                        },
                        {
                            country: 'XK',
                            total: 20,
                            bban: [
                                {type: 'n', count: 4},
                                {type: 'n', count: 12},
                            ],
                            format: 'XKkk bbbb cccc cccc cccc',
                        },
                        {
                            country: 'KW',
                            total: 30,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'c', count: 22},
                            ],
                            format: 'KWkk bbbb cccc cccc cccc cccc cccc cc',
                        },
                        {
                            country: 'LV',
                            total: 21,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'c', count: 13},
                            ],
                            format: 'LVkk bbbb cccc cccc cccc c',
                        },
                        {
                            country: 'LB',
                            total: 28,
                            bban: [
                                {type: 'n', count: 4},
                                {type: 'c', count: 20},
                            ],
                            format: 'LBkk bbbb cccc cccc cccc cccc cccc',
                        },
                        {
                            country: 'LI',
                            total: 21,
                            bban: [
                                {type: 'n', count: 5},
                                {type: 'c', count: 12},
                            ],
                            format: 'LIkk bbbb bccc cccc cccc c',
                        },
                        {
                            country: 'LT',
                            total: 20,
                            bban: [
                                {type: 'n', count: 5},
                                {type: 'n', count: 11},
                            ],
                            format: 'LTkk bbbb bccc cccc cccc',
                        },
                        {
                            country: 'LU',
                            total: 20,
                            bban: [
                                {type: 'n', count: 3},
                                {type: 'c', count: 13},
                            ],
                            format: 'LUkk bbbc cccc cccc cccc',
                        },
                        {
                            country: 'MK',
                            total: 19,
                            bban: [
                                {type: 'n', count: 3},
                                {type: 'c', count: 10},
                                {type: 'n', count: 2},
                            ],
                            format: 'MKkk bbbc cccc cccc cxx',
                        },
                        {
                            country: 'MT',
                            total: 31,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'n', count: 5},
                                {type: 'c', count: 18},
                            ],
                            format: 'MTkk bbbb ssss sccc cccc cccc cccc ccc',
                        },
                        {
                            country: 'MR',
                            total: 27,
                            bban: [
                                {type: 'n', count: 10},
                                {type: 'n', count: 13},
                            ],
                            format: 'MRkk bbbb bsss sscc cccc cccc cxx',
                        },
                        {
                            country: 'MU',
                            total: 30,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'n', count: 4},
                                {type: 'n', count: 15},
                                {type: 'a', count: 3},
                            ],
                            format: 'MUkk bbbb bbss cccc cccc cccc 000d dd',
                        },
                        {
                            country: 'MC',
                            total: 27,
                            bban: [
                                {type: 'n', count: 10},
                                {type: 'c', count: 11},
                                {type: 'n', count: 2},
                            ],
                            format: 'MCkk bbbb bsss sscc cccc cccc cxx',
                        },
                        {
                            country: 'MD',
                            total: 24,
                            bban: [
                                {type: 'c', count: 2},
                                {type: 'c', count: 18},
                            ],
                            format: 'MDkk bbcc cccc cccc cccc cccc',
                        },
                        {
                            country: 'ME',
                            total: 22,
                            bban: [
                                {type: 'n', count: 3},
                                {type: 'n', count: 15},
                            ],
                            format: 'MEkk bbbc cccc cccc cccc xx',
                        },
                        {
                            country: 'NL',
                            total: 18,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'n', count: 10},
                            ],
                            format: 'NLkk bbbb cccc cccc cc',
                        },
                        {
                            country: 'NO',
                            total: 15,
                            bban: [
                                {type: 'n', count: 4},
                                {type: 'n', count: 7},
                            ],
                            format: 'NOkk bbbb cccc ccx',
                        },
                        {
                            country: 'PK',
                            total: 24,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'n', count: 16},
                            ],
                            format: 'PKkk bbbb cccc cccc cccc cccc',
                        },
                        {
                            country: 'PS',
                            total: 29,
                            bban: [
                                {type: 'c', count: 4},
                                {type: 'n', count: 9},
                                {type: 'n', count: 12},
                            ],
                            format: 'PSkk bbbb xxxx xxxx xccc cccc cccc c',
                        },
                        {
                            country: 'PL',
                            total: 28,
                            bban: [
                                {type: 'n', count: 8},
                                {type: 'n', count: 16},
                            ],
                            format: 'PLkk bbbs sssx cccc cccc cccc cccc',
                        },
                        {
                            country: 'PT',
                            total: 25,
                            bban: [
                                {type: 'n', count: 8},
                                {type: 'n', count: 13},
                            ],
                            format: 'PTkk bbbb ssss cccc cccc cccx x',
                        },
                        {
                            country: 'QA',
                            total: 29,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'c', count: 21},
                            ],
                            format: 'QAkk bbbb cccc cccc cccc cccc cccc c',
                        },
                        {
                            country: 'RO',
                            total: 24,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'c', count: 16},
                            ],
                            format: 'ROkk bbbb cccc cccc cccc cccc',
                        },
                        {
                            country: 'SM',
                            total: 27,
                            bban: [
                                {type: 'a', count: 1},
                                {type: 'n', count: 10},
                                {type: 'c', count: 12},
                            ],
                            format: 'SMkk xaaa aabb bbbc cccc cccc ccc',
                        },
                        {
                            country: 'SA',
                            total: 24,
                            bban: [
                                {type: 'n', count: 2},
                                {type: 'c', count: 18},
                            ],
                            format: 'SAkk bbcc cccc cccc cccc cccc',
                        },
                        {
                            country: 'RS',
                            total: 22,
                            bban: [
                                {type: 'n', count: 3},
                                {type: 'n', count: 15},
                            ],
                            format: 'RSkk bbbc cccc cccc cccc xx',
                        },
                        {
                            country: 'SK',
                            total: 24,
                            bban: [
                                {type: 'n', count: 10},
                                {type: 'n', count: 10},
                            ],
                            format: 'SKkk bbbb ssss sscc cccc cccc',
                        },
                        {
                            country: 'SI',
                            total: 19,
                            bban: [
                                {type: 'n', count: 5},
                                {type: 'n', count: 10},
                            ],
                            format: 'SIkk bbss sccc cccc cxx',
                        },
                        {
                            country: 'ES',
                            total: 24,
                            bban: [
                                {type: 'n', count: 10},
                                {type: 'n', count: 10},
                            ],
                            format: 'ESkk bbbb gggg xxcc cccc cccc',
                        },
                        {
                            country: 'SE',
                            total: 24,
                            bban: [
                                {type: 'n', count: 3},
                                {type: 'n', count: 17},
                            ],
                            format: 'SEkk bbbc cccc cccc cccc cccc',
                        },
                        {
                            country: 'CH',
                            total: 21,
                            bban: [
                                {type: 'n', count: 5},
                                {type: 'c', count: 12},
                            ],
                            format: 'CHkk bbbb bccc cccc cccc c',
                        },
                        {
                            country: 'TN',
                            total: 24,
                            bban: [
                                {type: 'n', count: 5},
                                {type: 'n', count: 15},
                            ],
                            format: 'TNkk bbss sccc cccc cccc cccc',
                        },
                        {
                            country: 'TR',
                            total: 26,
                            bban: [
                                {type: 'n', count: 5},
                                {type: 'n', count: 1},
                                {type: 'n', count: 16},
                            ],
                            format: 'TRkk bbbb bxcc cccc cccc cccc cc',
                        },
                        {
                            country: 'AE',
                            total: 23,
                            bban: [
                                {type: 'n', count: 3},
                                {type: 'n', count: 16},
                            ],
                            format: 'AEkk bbbc cccc cccc cccc ccc',
                        },
                        {
                            country: 'GB',
                            total: 22,
                            bban: [
                                {type: 'a', count: 4},
                                {type: 'n', count: 6},
                                {type: 'n', count: 8},
                            ],
                            format: 'GBkk bbbb ssss sscc cccc cc',
                        },
                        {
                            country: 'VG',
                            total: 24,
                            bban: [
                                {type: 'c', count: 4},
                                {type: 'n', count: 16},
                            ],
                            format: 'VGkk bbbb cccc cccc cccc cccc',
                        },
                    ],
                    iso3166: [
                        'AD',
                        'AE',
                        'AF',
                        'AG',
                        'AI',
                        'AL',
                        'AM',
                        'AO',
                        'AQ',
                        'AR',
                        'AS',
                        'AT',
                        'AU',
                        'AW',
                        'AX',
                        'AZ',
                        'BA',
                        'BB',
                        'BD',
                        'BE',
                        'BF',
                        'BG',
                        'BH',
                        'BI',
                        'BJ',
                        'BL',
                        'BM',
                        'BN',
                        'BO',
                        'BQ',
                        'BR',
                        'BS',
                        'BT',
                        'BV',
                        'BW',
                        'BY',
                        'BZ',
                        'CA',
                        'CC',
                        'CD',
                        'CF',
                        'CG',
                        'CH',
                        'CI',
                        'CK',
                        'CL',
                        'CM',
                        'CN',
                        'CO',
                        'CR',
                        'CU',
                        'CV',
                        'CW',
                        'CX',
                        'CY',
                        'CZ',
                        'DE',
                        'DJ',
                        'DK',
                        'DM',
                        'DO',
                        'DZ',
                        'EC',
                        'EE',
                        'EG',
                        'EH',
                        'ER',
                        'ES',
                        'ET',
                        'FI',
                        'FJ',
                        'FK',
                        'FM',
                        'FO',
                        'FR',
                        'GA',
                        'GB',
                        'GD',
                        'GE',
                        'GF',
                        'GG',
                        'GH',
                        'GI',
                        'GL',
                        'GM',
                        'GN',
                        'GP',
                        'GQ',
                        'GR',
                        'GS',
                        'GT',
                        'GU',
                        'GW',
                        'GY',
                        'HK',
                        'HM',
                        'HN',
                        'HR',
                        'HT',
                        'HU',
                        'ID',
                        'IE',
                        'IL',
                        'IM',
                        'IN',
                        'IO',
                        'IQ',
                        'IR',
                        'IS',
                        'IT',
                        'JE',
                        'JM',
                        'JO',
                        'JP',
                        'KE',
                        'KG',
                        'KH',
                        'KI',
                        'KM',
                        'KN',
                        'KP',
                        'KR',
                        'KW',
                        'KY',
                        'KZ',
                        'LA',
                        'LB',
                        'LC',
                        'LI',
                        'LK',
                        'LR',
                        'LS',
                        'LT',
                        'LU',
                        'LV',
                        'LY',
                        'MA',
                        'MC',
                        'MD',
                        'ME',
                        'MF',
                        'MG',
                        'MH',
                        'MK',
                        'ML',
                        'MM',
                        'MN',
                        'MO',
                        'MP',
                        'MQ',
                        'MR',
                        'MS',
                        'MT',
                        'MU',
                        'MV',
                        'MW',
                        'MX',
                        'MY',
                        'MZ',
                        'NA',
                        'NC',
                        'NE',
                        'NF',
                        'NG',
                        'NI',
                        'NL',
                        'NO',
                        'NP',
                        'NR',
                        'NU',
                        'NZ',
                        'OM',
                        'PA',
                        'PE',
                        'PF',
                        'PG',
                        'PH',
                        'PK',
                        'PL',
                        'PM',
                        'PN',
                        'PR',
                        'PS',
                        'PT',
                        'PW',
                        'PY',
                        'QA',
                        'RE',
                        'RO',
                        'RS',
                        'RU',
                        'RW',
                        'SA',
                        'SB',
                        'SC',
                        'SD',
                        'SE',
                        'SG',
                        'SH',
                        'SI',
                        'SJ',
                        'SK',
                        'SL',
                        'SM',
                        'SN',
                        'SO',
                        'SR',
                        'SS',
                        'ST',
                        'SV',
                        'SX',
                        'SY',
                        'SZ',
                        'TC',
                        'TD',
                        'TF',
                        'TG',
                        'TH',
                        'TJ',
                        'TK',
                        'TL',
                        'TM',
                        'TN',
                        'TO',
                        'TR',
                        'TT',
                        'TV',
                        'TW',
                        'TZ',
                        'UA',
                        'UG',
                        'UM',
                        'US',
                        'UY',
                        'UZ',
                        'VA',
                        'VC',
                        'VE',
                        'VG',
                        'VI',
                        'VN',
                        'VU',
                        'WF',
                        'WS',
                        'XK',
                        'YE',
                        'YT',
                        'ZA',
                        'ZM',
                        'ZW',
                    ],
                    mod97: (e) => {
                        let a = 0;
                        for (let t = 0; t < e.length; t++) a = (10 * a + +e[t]) % 97;
                        return a;
                    },
                    pattern10: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
                    pattern100: ['001', '002', '003', '004', '005', '006', '007', '008', '009'],
                    toDigitString: (e) => e.replace(/[A-Z]/gi, (e) => String(e.toUpperCase().charCodeAt(0) - 55)),
                },
                I = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(I.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    account(e) {
                        return (
                            E({
                                deprecated: 'faker.finance.account',
                                proposed: 'faker.finance.accountNumber',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.accountNumber(e)
                        );
                    }
                    accountNumber(e = {}) {
                        'number' == typeof e && (e = {length: e});
                        let {length: a = 8} = e;
                        return this.faker.string.numeric({length: a, allowLeadingZeros: !0});
                    }
                    accountName() {
                        return [
                            this.faker.helpers.arrayElement(this.faker.definitions.finance.account_type),
                            'Account',
                        ].join(' ');
                    }
                    routingNumber() {
                        let e = this.faker.string.numeric({length: 8, allowLeadingZeros: !0}),
                            a = 0;
                        for (let t = 0; t < e.length; t += 3)
                            a += 3 * Number(e[t]) + 7 * Number(e[t + 1]) + (Number(e[t + 2]) || 0);
                        return `${e}${10 * Math.ceil(a / 10) - a}`;
                    }
                    mask(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.finance.mask',
                                proposed: 'faker.finance.maskedNumber',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.maskedNumber({length: e, parens: a, ellipsis: t})
                        );
                    }
                    maskedNumber(e = {}) {
                        'number' == typeof e && (e = {length: e});
                        let {ellipsis: a, length: t = 4, parens: r} = e,
                            i = '';
                        for (let e = 0; e < t; e++) i = `${i}#`;
                        return (
                            (i = a ? ['...', i].join('') : i),
                            (i = r ? ['(', i, ')'].join('') : i),
                            (i = this.faker.helpers.replaceSymbolWithNumber(i))
                        );
                    }
                    amount(e = {}, a = 1e3, t = 2, r = '', i = !1) {
                        'number' == typeof e && (e = {min: e});
                        let {autoFormat: n = i, dec: s = t, max: o = a, min: c = 0, symbol: l = r} = e,
                            h = this.faker.number.float({max: o, min: c, precision: 10 ** -s});
                        return l + (n ? h.toLocaleString(void 0, {minimumFractionDigits: s}) : h.toFixed(s));
                    }
                    transactionType() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.finance.transaction_type);
                    }
                    currency() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.finance.currency);
                    }
                    currencyCode() {
                        return this.currency().code;
                    }
                    currencyName() {
                        return this.currency().name;
                    }
                    currencySymbol() {
                        let e;
                        for (; !e; ) e = this.currency().symbol;
                        return e;
                    }
                    bitcoinAddress() {
                        let e = this.faker.number.int({min: 25, max: 39});
                        return (
                            this.faker.helpers.arrayElement(['1', '3']) +
                            this.faker.string.alphanumeric({length: e, casing: 'mixed', exclude: '0OIl'})
                        );
                    }
                    litecoinAddress() {
                        let e = this.faker.number.int({min: 26, max: 33}),
                            a = this.faker.helpers.arrayElement(['L', 'M', '3']);
                        for (let t = 0; t < e - 1; t++)
                            a += this.faker.helpers.arrayElement(
                                '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'.split(''),
                            );
                        return a;
                    }
                    creditCardNumber(e = {}) {
                        'string' == typeof e && (e = {issuer: e});
                        let {issuer: a = ''} = e,
                            t,
                            r = this.faker.definitions.finance.credit_card,
                            i = a.toLowerCase();
                        if (i in r) t = this.faker.helpers.arrayElement(r[i]);
                        else if (/#/.test(a)) t = a;
                        else {
                            let e = this.faker.helpers.objectValue(r);
                            t = this.faker.helpers.arrayElement(e);
                        }
                        return ((t = t.replace(/\//g, '')), this.faker.helpers.replaceCreditCardSymbols(t));
                    }
                    creditCardCVV() {
                        return this.faker.string.numeric({length: 3, allowLeadingZeros: !0});
                    }
                    creditCardIssuer() {
                        return this.faker.helpers.objectKey(this.faker.definitions.finance.credit_card);
                    }
                    pin(e = {}) {
                        'number' == typeof e && (e = {length: e});
                        let {length: a = 4} = e;
                        if (a < 1) throw new l('minimum length is 1');
                        return this.faker.string.numeric({length: a, allowLeadingZeros: !0});
                    }
                    ethereumAddress() {
                        return this.faker.string.hexadecimal({length: 40, casing: 'lower'});
                    }
                    iban(e = {}, a) {
                        'boolean' == typeof e && (e = {formatted: e});
                        let {countryCode: t = a, formatted: r = !1} = e,
                            i = t ? R.formats.find((e) => e.country === t) : this.faker.helpers.arrayElement(R.formats);
                        if (!i) throw new l(`Country code ${t} not supported.`);
                        let n = '',
                            s = 0;
                        for (let e of i.bban) {
                            let a = e.count;
                            for (s += e.count; a > 0; )
                                ('a' === e.type
                                    ? (n += this.faker.helpers.arrayElement(R.alpha))
                                    : 'c' === e.type
                                      ? this.faker.datatype.boolean(0.8)
                                          ? (n += this.faker.number.int(9))
                                          : (n += this.faker.helpers.arrayElement(R.alpha))
                                      : a >= 3 && this.faker.datatype.boolean(0.3)
                                        ? this.faker.datatype.boolean()
                                            ? ((n += this.faker.helpers.arrayElement(R.pattern100)), (a -= 2))
                                            : ((n += this.faker.helpers.arrayElement(R.pattern10)), a--)
                                        : (n += this.faker.number.int(9)),
                                    a--);
                            n = n.substring(0, s);
                        }
                        let o = 98 - R.mod97(R.toDigitString(`${n}${i.country}00`));
                        o < 10 && (o = `0${o}`);
                        let c = `${i.country}${o}${n}`;
                        return r ? c.match(/.{1,4}/g).join(' ') : c;
                    }
                    bic(e = {}) {
                        let {includeBranchCode: a = this.faker.datatype.boolean()} = e;
                        return `${this.faker.string.alpha({length: 4, casing: 'upper'})}${this.faker.helpers.arrayElement(R.iso3166)}${this.faker.string.alphanumeric({length: 2, casing: 'upper'})}${a ? (this.faker.datatype.boolean() ? this.faker.string.alphanumeric({length: 3, casing: 'upper'}) : 'XXX') : ''}`;
                    }
                    transactionDescription() {
                        return `${this.transactionType()} transaction at ${this.faker.company.name()} using card ending with ***${this.maskedNumber()} for ${this.currencyCode()} ${this.amount()} in account ***${this.accountNumber()}`;
                    }
                },
                B =
                    null != Intl && Intl.DateTimeFormat
                        ? new Intl.DateTimeFormat('en', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              hourCycle: 'h24',
                              minute: '2-digit',
                              second: '2-digit',
                              year: 'numeric',
                              timeZone: 'UTC',
                          })
                        : null,
                D =
                    null != Intl && Intl.NumberFormat
                        ? new Intl.NumberFormat('en', {
                              minimumIntegerDigits: 4,
                              maximumFractionDigits: 0,
                              useGrouping: !1,
                              signDisplay: 'always',
                          })
                        : null,
                G = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(G.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    branch() {
                        return `${this.faker.hacker.noun().replace(' ', '-')}-${this.faker.hacker.verb().replace(' ', '-')}`;
                    }
                    commitEntry(e = {}) {
                        let {
                                merge: a = this.faker.datatype.boolean({probability: 0.2}),
                                eol: t = 'CRLF',
                                refDate: r,
                            } = e,
                            i = [`commit ${this.faker.git.commitSha()}`];
                        a && i.push(`Merge: ${this.commitSha({length: 7})} ${this.commitSha({length: 7})}`);
                        let n = this.faker.person.firstName(),
                            s = this.faker.person.lastName(),
                            o = this.faker.person.fullName({firstName: n, lastName: s}),
                            c = this.faker.internet.userName({firstName: n, lastName: s}),
                            l = this.faker.helpers.arrayElement([o, c]);
                        return (
                            i.push(
                                `Author: ${(l = l.replace(/^[\.,:;"\\']|[\<\>\n]|[\.,:;"\\']$/g, ''))} <${this.faker.internet.email({firstName: n, lastName: s})}>`,
                                `Date: ${this.commitDate({refDate: r})}`,
                                '',
                                `\xa0\xA0\xa0\xA0${this.commitMessage()}`,
                                '',
                            ),
                            i.join(
                                'CRLF' === t
                                    ? `\r
`
                                    : `
`,
                            )
                        );
                    }
                    commitMessage() {
                        return `${this.faker.hacker.verb()} ${this.faker.hacker.adjective()} ${this.faker.hacker.noun()}`;
                    }
                    commitDate(e = {}) {
                        let {refDate: a = this.faker.defaultRefDate()} = e;
                        if (!Intl || !Intl.DateTimeFormat || !Intl.NumberFormat)
                            throw new l(
                                'This method requires an environment which supports Intl.NumberFormat and Intl.DateTimeFormat',
                            );
                        let t = B.format(this.faker.date.recent({days: 1, refDate: a}))
                            .replace(/,/g, '')
                            .split(' ');
                        return (
                            ([t[3], t[4]] = [t[4], t[3]]),
                            t.push(D.format(100 * this.faker.number.int({min: -11, max: 12}))),
                            t.join(' ')
                        );
                    }
                    commitSha(e = {}) {
                        let {length: a = 40} = e;
                        return this.faker.string.hexadecimal({length: a, casing: 'lower', prefix: ''});
                    }
                    shortSha() {
                        return (
                            E({
                                deprecated: 'faker.git.shortSha()',
                                proposed: 'faker.git.commitSha({ length: 7 })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.commitSha({length: 7})
                        );
                    }
                },
                _ = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(_.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    abbreviation() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.hacker.abbreviation);
                    }
                    adjective() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.hacker.adjective);
                    }
                    noun() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.hacker.noun);
                    }
                    verb() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.hacker.verb);
                    }
                    ingverb() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.hacker.ingverb);
                    }
                    phrase() {
                        let e = {
                                abbreviation: this.abbreviation,
                                adjective: this.adjective,
                                ingverb: this.ingverb,
                                noun: this.noun,
                                verb: this.verb,
                            },
                            a = this.faker.helpers.arrayElement(this.faker.definitions.hacker.phrase);
                        return this.faker.helpers.mustache(a, e);
                    }
                };
            function j(e, a) {
                return void 0 === e[a] ? -1 : 0;
            }
            function O(e, a, t, r, i) {
                throw (
                    console.error('Error', t),
                    console.log(`Found ${Object.keys(r).length} unique entries before throwing error.
retried: ${i}
total time: ${a - e}ms`),
                    new l(`${t} for uniqueness check.

May not be able to generate any more unique values with current settings.
Try adjusting maxTime or maxRetries parameters for faker.helpers.unique().`)
                );
            }
            function U(e, a, t, r) {
                let i = 1;
                if (a)
                    switch (a) {
                        case '?':
                            i = e.datatype.boolean() ? 0 : 1;
                            break;
                        case '*': {
                            let a = 1;
                            for (; e.datatype.boolean(); ) a *= 2;
                            i = e.number.int({min: 0, max: a});
                            break;
                        }
                        case '+': {
                            let a = 1;
                            for (; e.datatype.boolean(); ) a *= 2;
                            i = e.number.int({min: 1, max: a});
                            break;
                        }
                        default:
                            throw new l('Unknown quantifier symbol provided.');
                    }
                else
                    null != t && null != r
                        ? (i = e.number.int({min: parseInt(t), max: parseInt(r)}))
                        : null != t && null == r && (i = parseInt(t));
                return i;
            }
            var K = class {
                    constructor(e) {
                        for (let a of ((this.faker = e),
                        (this.uniqueStore = {}),
                        Object.getOwnPropertyNames(K.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    slugify(e = '') {
                        return e
                            .normalize('NFKD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .replace(/ /g, '-')
                            .replace(/[^\w\.\-]+/g, '');
                    }
                    replaceSymbolWithNumber(e = '', a = '#') {
                        let t = '';
                        for (let r = 0; r < e.length; r++)
                            e.charAt(r) === a
                                ? (t += this.faker.number.int(9))
                                : '!' === e.charAt(r)
                                  ? (t += this.faker.number.int({min: 2, max: 9}))
                                  : (t += e.charAt(r));
                        return t;
                    }
                    replaceSymbols(e = '') {
                        let a = [
                                'A',
                                'B',
                                'C',
                                'D',
                                'E',
                                'F',
                                'G',
                                'H',
                                'I',
                                'J',
                                'K',
                                'L',
                                'M',
                                'N',
                                'O',
                                'P',
                                'Q',
                                'R',
                                'S',
                                'T',
                                'U',
                                'V',
                                'W',
                                'X',
                                'Y',
                                'Z',
                            ],
                            t = '';
                        for (let r = 0; r < e.length; r++)
                            '#' === e.charAt(r)
                                ? (t += this.faker.number.int(9))
                                : '?' === e.charAt(r)
                                  ? (t += this.arrayElement(a))
                                  : '*' === e.charAt(r)
                                    ? (t += this.faker.datatype.boolean()
                                          ? this.arrayElement(a)
                                          : this.faker.number.int(9))
                                    : (t += e.charAt(r));
                        return t;
                    }
                    replaceCreditCardSymbols(e = '6453-####-####-####-###L', a = '#') {
                        let t;
                        e = this.regexpStyleStringParse(e);
                        let r =
                            0 ===
                            (t = (function (e) {
                                e = e.replace(/[\s-]/g, '');
                                let a = 0,
                                    t = !1;
                                for (let r = e.length - 1; r >= 0; r--) {
                                    let i = parseInt(e.substring(r, r + 1));
                                    (t && (i *= 2) > 9 && (i = (i % 10) + 1), (a += i), (t = !t));
                                }
                                return a % 10;
                            })((e = this.replaceSymbolWithNumber(e, a)).replace(/L?$/, '0')))
                                ? 0
                                : 10 - t;
                        return e.replace('L', String(r));
                    }
                    regexpStyleStringParse(e = '') {
                        let a = /(.)\{(\d+)\,(\d+)\}/,
                            t = /(.)\{(\d+)\}/,
                            r = /\[(\d+)\-(\d+)\]/,
                            i,
                            n,
                            s,
                            o,
                            c = a.exec(e);
                        for (; null != c; )
                            ((i = parseInt(c[2])),
                                (n = parseInt(c[3])),
                                i > n && ((s = n), (n = i), (i = s)),
                                (o = this.faker.number.int({min: i, max: n})),
                                (c = a.exec(
                                    (e = e.slice(0, c.index) + c[1].repeat(o) + e.slice(c.index + c[0].length)),
                                )));
                        for (c = t.exec(e); null != c; )
                            ((o = parseInt(c[2])),
                                (c = t.exec(
                                    (e = e.slice(0, c.index) + c[1].repeat(o) + e.slice(c.index + c[0].length)),
                                )));
                        for (c = r.exec(e); null != c; )
                            ((i = parseInt(c[1])),
                                (n = parseInt(c[2])),
                                i > n && ((s = n), (n = i), (i = s)),
                                (c = r.exec(
                                    (e =
                                        e.slice(0, c.index) +
                                        this.faker.number.int({min: i, max: n}).toString() +
                                        e.slice(c.index + c[0].length)),
                                )));
                        return e;
                    }
                    fromRegExp(e) {
                        var a, t;
                        let r = !1;
                        e instanceof RegExp &&
                            ((r = e.flags.includes('i')),
                            (e =
                                null != (t = null == (a = (e = e.toString()).match(/\/(.+?)\//)) ? void 0 : a[1])
                                    ? t
                                    : ''));
                        let i,
                            n,
                            s,
                            o = /([.A-Za-z0-9])(?:\{(\d+)(?:\,(\d+)|)\}|(\?|\*|\+))(?![^[]*]|[^{]*})/,
                            c = e.match(o);
                        for (; null != c; ) {
                            let a = c[2],
                                t = c[3],
                                r = c[4];
                            ((s = U(this.faker, r, a, t)),
                                (c = (e = e.slice(0, c.index) + c[1].repeat(s) + e.slice(c.index + c[0].length)).match(
                                    o,
                                )));
                        }
                        let h = /(\d-\d|\w-\w|\d|\w|[-!@#$&()`.+,/"])/,
                            p = /\[(\^|)(-|)(.+?)\](?:\{(\d+)(?:\,(\d+)|)\}|(\?|\*|\+)|)/;
                        for (c = e.match(p); null != c; ) {
                            let a = '^' === c[1],
                                t = '-' === c[2],
                                o = c[4],
                                u = c[5],
                                m = c[6],
                                f = [],
                                d = c[3],
                                b = d.match(h);
                            for (t && f.push(45); null != b; ) {
                                if (-1 === b[0].indexOf('-'))
                                    r && isNaN(Number(b[0]))
                                        ? (f.push(b[0].toUpperCase().charCodeAt(0)),
                                          f.push(b[0].toLowerCase().charCodeAt(0)))
                                        : f.push(b[0].charCodeAt(0));
                                else {
                                    let e = b[0].split('-').map((e) => e.charCodeAt(0));
                                    if ((i = e[0]) > (n = e[1]))
                                        throw new l('Character range provided is out of order.');
                                    for (let e = i; e <= n; e++)
                                        if (r && isNaN(Number(String.fromCharCode(e)))) {
                                            let a = String.fromCharCode(e);
                                            (f.push(a.toUpperCase().charCodeAt(0)),
                                                f.push(a.toLowerCase().charCodeAt(0)));
                                        } else f.push(e);
                                }
                                b = (d = d.substring(b[0].length)).match(h);
                            }
                            if (((s = U(this.faker, m, o, u)), a)) {
                                let e = -1;
                                for (let a = 48; a <= 57; a++) {
                                    if ((e = f.indexOf(a)) > -1) {
                                        f.splice(e, 1);
                                        continue;
                                    }
                                    f.push(a);
                                }
                                for (let a = 65; a <= 90; a++) {
                                    if ((e = f.indexOf(a)) > -1) {
                                        f.splice(e, 1);
                                        continue;
                                    }
                                    f.push(a);
                                }
                                for (let a = 97; a <= 122; a++) {
                                    if ((e = f.indexOf(a)) > -1) {
                                        f.splice(e, 1);
                                        continue;
                                    }
                                    f.push(a);
                                }
                            }
                            let k = this.multiple(() => String.fromCharCode(this.arrayElement(f)), {count: s}).join('');
                            c = (e = e.slice(0, c.index) + k + e.slice(c.index + c[0].length)).match(p);
                        }
                        let u = /(.)\{(\d+)\,(\d+)\}/;
                        for (c = e.match(u); null != c; ) {
                            if ((i = parseInt(c[2])) > (n = parseInt(c[3])))
                                throw new l('Numbers out of order in {} quantifier.');
                            ((s = this.faker.number.int({min: i, max: n})),
                                (c = (e = e.slice(0, c.index) + c[1].repeat(s) + e.slice(c.index + c[0].length)).match(
                                    u,
                                )));
                        }
                        let m = /(.)\{(\d+)\}/;
                        for (c = e.match(m); null != c; )
                            ((s = parseInt(c[2])),
                                (c = (e = e.slice(0, c.index) + c[1].repeat(s) + e.slice(c.index + c[0].length)).match(
                                    m,
                                )));
                        return e;
                    }
                    shuffle(e, a = {}) {
                        let {inplace: t = !1} = a;
                        t || (e = [...e]);
                        for (let a = e.length - 1; a > 0; --a) {
                            let t = this.faker.number.int(a);
                            [e[a], e[t]] = [e[t], e[a]];
                        }
                        return e;
                    }
                    uniqueArray(e, a) {
                        if (Array.isArray(e)) {
                            let t = Array.from(new Set(e));
                            return this.shuffle(t).splice(0, a);
                        }
                        let t = new Set();
                        try {
                            if ('function' == typeof e) for (; t.size < a; ) t.add(e());
                        } catch {}
                        return Array.from(t);
                    }
                    mustache(e, a) {
                        if (null == e) return '';
                        for (let t in a) {
                            let r = RegExp(`{{${t}}}`, 'g'),
                                i = a[t];
                            ('string' == typeof i && (i = i.replace(/\$/g, '$$$$')), (e = e.replace(r, i)));
                        }
                        return e;
                    }
                    maybe(e, a = {}) {
                        if (this.faker.datatype.boolean(a)) return e();
                    }
                    objectKey(e) {
                        let a = Object.keys(e);
                        return this.arrayElement(a);
                    }
                    objectValue(e) {
                        let a = this.faker.helpers.objectKey(e);
                        return e[a];
                    }
                    objectEntry(e) {
                        let a = this.faker.helpers.objectKey(e);
                        return [a, e[a]];
                    }
                    arrayElement(e) {
                        if (null == e)
                            throw new l(
                                'Calling `faker.helpers.arrayElement()` without arguments is no longer supported.',
                            );
                        if (0 === e.length) throw new l('Cannot get value from empty dataset.');
                        let a = e.length > 1 ? this.faker.number.int({max: e.length - 1}) : 0;
                        return e[a];
                    }
                    weightedArrayElement(e) {
                        if (0 === e.length)
                            throw new l('weightedArrayElement expects an array with at least one element');
                        if (!e.every((e) => e.weight > 0))
                            throw new l(
                                'weightedArrayElement expects an array of { weight, value } objects where weight is a positive number',
                            );
                        let a = e.reduce((e, {weight: a}) => e + a, 0),
                            t = this.faker.number.float({min: 0, max: a, precision: 1e-9}),
                            r = 0;
                        for (let {weight: a, value: i} of e) if (t < (r += a)) return i;
                        return e[e.length - 1].value;
                    }
                    arrayElements(e, a) {
                        if (null == e)
                            throw new l(
                                'Calling `faker.helpers.arrayElements()` without arguments is no longer supported.',
                            );
                        if (0 === e.length) return [];
                        let t = this.rangeToNumber(null != a ? a : {min: 1, max: e.length});
                        if (t >= e.length) return this.shuffle(e);
                        if (t <= 0) return [];
                        let r = e.slice(0),
                            i = e.length,
                            n = i - t,
                            s,
                            o;
                        for (; i-- > n; ) ((s = r[(o = this.faker.number.int(i))]), (r[o] = r[i]), (r[i] = s));
                        return r.slice(n);
                    }
                    enumValue(e) {
                        let a = Object.keys(e).filter((e) => isNaN(Number(e)));
                        return e[this.arrayElement(a)];
                    }
                    fake(e) {
                        let a, t;
                        let r = (e = 'string' == typeof e ? e : this.arrayElement(e)).search(/{{[a-z]/),
                            i = e.indexOf('}}', r);
                        if (-1 === r || -1 === i) return e;
                        let n = e
                                .substring(r + 2, i + 2)
                                .replace('}}', '')
                                .replace('{{', ''),
                            s = /\(([^)]*)\)/,
                            o = s.exec(n),
                            c = '';
                        o && ((n = n.replace(s, '')), (c = o[1]));
                        let h = n.split('.'),
                            p = this.faker,
                            u = this.faker.rawDefinitions;
                        for (let e of h) ((p = null == p ? void 0 : p[e]), (u = null == u ? void 0 : u[e]));
                        if ('function' == typeof p) a = p;
                        else if (Array.isArray(u)) a = () => this.faker.helpers.arrayElement(u);
                        else
                            throw new l(`Invalid module method or definition: ${n}
- faker.${n} is not a function
- faker.definitions.${n} is not an array`);
                        a = a.bind(this);
                        try {
                            t = JSON.parse(`[${c}]`);
                        } catch {
                            t = [c];
                        }
                        let m = String(a(...t)),
                            f = e.substring(0, r) + m + e.substring(i + 2);
                        return this.fake(f);
                    }
                    rangeToNumber(e) {
                        return 'number' == typeof e ? e : this.faker.number.int(e);
                    }
                    unique(e, a = [], t = {}) {
                        E({
                            deprecated: 'faker.helpers.unique',
                            proposed: 'https://github.com/faker-js/faker/issues/1785#issuecomment-1407773744',
                            since: '8.0',
                            until: '9.0',
                        });
                        let {maxTime: r = 50, maxRetries: i = 50, exclude: n = [], store: s = this.uniqueStore} = t;
                        return (function e(a, t, r = {}) {
                            var i;
                            let n = new Date().getTime(),
                                {
                                    startTime: s = new Date().getTime(),
                                    maxTime: o = 50,
                                    maxRetries: c = 50,
                                    compare: l = j,
                                    store: h,
                                } = r,
                                {exclude: p} = r;
                            if (
                                ((r.currentIterations = null != (i = r.currentIterations) ? i : 0),
                                Array.isArray(p) || (p = [p]),
                                n - s >= o)
                            )
                                return O(s, n, `Exceeded maxTime: ${o}`, h, r.currentIterations);
                            if (r.currentIterations >= c)
                                return O(s, n, `Exceeded maxRetries: ${c}`, h, r.currentIterations);
                            let u = a(...t);
                            return -1 === l(h, u) && -1 === p.indexOf(u)
                                ? ((h[u] = u), (r.currentIterations = 0), u)
                                : (r.currentIterations++,
                                  e(a, t, {...r, startTime: s, maxTime: o, maxRetries: c, compare: l, exclude: p}));
                        })(e, a, {
                            ...t,
                            startTime: new Date().getTime(),
                            maxTime: r,
                            maxRetries: i,
                            currentIterations: 0,
                            exclude: n,
                            store: s,
                        });
                    }
                    multiple(e, a = {}) {
                        var t;
                        let r = this.rangeToNumber(null != (t = a.count) ? t : 3);
                        return r <= 0 ? [] : Array.from({length: r}, e);
                    }
                },
                F = class {
                    constructor(e) {
                        this.faker = e;
                    }
                    image(e, a, t, r) {
                        return (
                            E({
                                deprecated: 'faker.lorempicsum.image',
                                proposed: 'faker.image.urlPicsumPhotos',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, t, r)
                        );
                    }
                    imageGrayscale(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.lorempicsum.imageGrayscale',
                                proposed: 'faker.image.urlPicsumPhotos',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, t)
                        );
                    }
                    imageBlurred(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.lorempicsum.imageBlurred',
                                proposed: 'faker.image.urlPicsumPhotos',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, void 0, t)
                        );
                    }
                    imageRandomSeeded(e, a, t, r, i) {
                        return (
                            E({
                                deprecated: 'faker.lorempicsum.imageRandomSeeded',
                                proposed: 'faker.image.urlPicsumPhotos',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, t, r, i)
                        );
                    }
                    imageUrl(e, a, t, r, i) {
                        (E({
                            deprecated: 'faker.lorempicsum.imageUrl',
                            proposed: 'faker.image.urlPicsumPhotos',
                            since: '8.0',
                            until: '9.0',
                        }),
                            (e = e || 640),
                            (a = a || 480));
                        let n = 'https://picsum.photos';
                        return (
                            i && (n += `/seed/${i}`),
                            (n += `/${e}/${a}`),
                            t && r ? `${n}?grayscale&blur=${r}` : t ? `${n}?grayscale` : r ? `${n}?blur=${r}` : n
                        );
                    }
                },
                z = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(z.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    imageUrl(e, a, t, r, i, n) {
                        (E({
                            deprecated: 'faker.placeholder.imageUrl',
                            proposed: 'faker.image.urlPlaceholder',
                            since: '8.0',
                            until: '9.0',
                        }),
                            (e = e || 640));
                        let s = 'https://via.placeholder.com';
                        return (
                            (s += `/${e}x${(a = a || e)}`),
                            null != i &&
                                ((s += `/${i.replace('#', '').toUpperCase()}`),
                                null != n && (s += `/${n.replace('#', '').toUpperCase()}`)),
                            null != r && (s += `.${r}`),
                            null != t && (s += `?${new URLSearchParams({text: t}).toString()}`),
                            s
                        );
                    }
                    randomUrl(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.placeholder.randomUrl',
                                proposed: 'faker.image.urlPlaceholder',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(
                                e,
                                a,
                                this.faker.lorem.word(),
                                t,
                                this.faker.color.rgb({casing: 'upper', prefix: ''}),
                                this.faker.color.rgb({casing: 'upper', prefix: ''}),
                            )
                        );
                    }
                },
                H = class {
                    constructor(e) {
                        this.faker = e;
                    }
                    image(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.unsplash.image',
                                proposed: 'faker.image.url',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, void 0, t)
                        );
                    }
                    imageUrl(e, a, t, r) {
                        (E({
                            deprecated: 'faker.unsplash.imageUrl',
                            proposed: 'faker.image.url',
                            since: '8.0',
                            until: '9.0',
                        }),
                            (e = e || 640),
                            (a = a || 480));
                        let i = 'https://source.unsplash.com';
                        return (
                            null != t && (i += `/category/${t}`),
                            (i += `/${e}x${a}`),
                            null != r && /^([A-Za-z0-9].+,[A-Za-z0-9]+)$|^([A-Za-z0-9]+)$/.test(r) && (i += `?${r}`),
                            i
                        );
                    }
                    food(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.unsplash.food',
                                proposed: 'faker.image.url',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.image.unsplash.imageUrl(e, a, 'food', t)
                        );
                    }
                    people(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.unsplash.people',
                                proposed: 'faker.image.url',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.image.unsplash.imageUrl(e, a, 'people', t)
                        );
                    }
                    nature(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.unsplash.nature',
                                proposed: 'faker.image.url',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.image.unsplash.imageUrl(e, a, 'nature', t)
                        );
                    }
                    technology(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.unsplash.technology',
                                proposed: 'faker.image.url',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.image.unsplash.imageUrl(e, a, 'technology', t)
                        );
                    }
                    objects(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.unsplash.objects',
                                proposed: 'faker.image.url',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.image.unsplash.imageUrl(e, a, 'objects', t)
                        );
                    }
                    buildings(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.unsplash.buildings',
                                proposed: 'faker.image.url',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.image.unsplash.imageUrl(e, a, 'buildings', t)
                        );
                    }
                },
                V = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(V.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                        ((this.unsplash = new H(this.faker)),
                            (this.lorempicsum = new F(this.faker)),
                            (this.placeholder = new z(this.faker)));
                    }
                    avatar() {
                        return this.faker.helpers.arrayElement([this.avatarLegacy, this.avatarGitHub])();
                    }
                    avatarGitHub() {
                        return `https://avatars.githubusercontent.com/u/${this.faker.number.int(1e8)}`;
                    }
                    avatarLegacy() {
                        return `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${this.faker.number.int(1249)}.jpg`;
                    }
                    url(e = {}) {
                        let {width: a = 640, height: t = 480} = e;
                        return this.faker.helpers.arrayElement([this.urlLoremFlickr, this.urlPicsumPhotos])({
                            width: a,
                            height: t,
                        });
                    }
                    urlLoremFlickr(e = {}) {
                        let {width: a = 640, height: t = 480, category: r} = e;
                        return `https://loremflickr.com/${a}/${t}${null != r ? `/${r}` : ''}?lock=${this.faker.number.int()}`;
                    }
                    urlPicsumPhotos(e = {}) {
                        let {width: a = 640, height: t = 480, grayscale: r = !1, blur: i} = e,
                            n = `https://picsum.photos/seed/${this.faker.string.alphanumeric({length: {min: 5, max: 10}})}/${a}/${t}`,
                            s = !0 === r,
                            o = 'number' == typeof i && i >= 1 && i <= 10;
                        return (
                            (s || o) &&
                                ((n += '?'), s && (n += 'grayscale'), s && o && (n += '&'), o && (n += `blur=${i}`)),
                            n
                        );
                    }
                    urlPlaceholder(e = {}) {
                        let {
                            width: a = this.faker.number.int({min: 1, max: 3999}),
                            height: t = this.faker.number.int({min: 1, max: 3999}),
                            backgroundColor: r = this.faker.color.rgb({format: 'hex', prefix: ''}),
                            textColor: i = this.faker.color.rgb({format: 'hex', prefix: ''}),
                            format: n = this.faker.helpers.arrayElement(['gif', 'jpeg', 'jpg', 'png', 'webp']),
                            text: s = this.faker.lorem.words(),
                        } = e;
                        return `https://via.placeholder.com/${a}x${t}/${r}/${i}.${n}?text=${encodeURIComponent(s)}`;
                    }
                    dataUri(e = {}) {
                        let {width: a = 640, height: t = 480, color: r = 'grey'} = e;
                        return (
                            'data:image/svg+xml;charset=UTF-8,' +
                            encodeURIComponent(
                                `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="${a}" height="${t}"><rect width="100%" height="100%" fill="${r}"/><text x="${a / 2}" y="${t / 2}" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">${a}x${t}</text></svg>`,
                            )
                        );
                    }
                    image(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.image',
                                proposed: 'faker.image.url',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this[
                                this.faker.helpers.arrayElement([
                                    'abstract',
                                    'animals',
                                    'business',
                                    'cats',
                                    'city',
                                    'food',
                                    'nightlife',
                                    'fashion',
                                    'people',
                                    'nature',
                                    'sports',
                                    'technics',
                                    'transport',
                                ])
                            ](e, a, t)
                        );
                    }
                    imageUrl(e, a, t, r) {
                        E({
                            deprecated: 'faker.image.imageUrl',
                            proposed: 'faker.image.url',
                            since: '8.0',
                            until: '9.0',
                        });
                        let i = `https://loremflickr.com/${(e = e || 640)}/${(a = a || 480)}`;
                        return (null != t && (i += `/${t}`), r && (i += `?lock=${this.faker.number.int()}`), i);
                    }
                    abstract(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.abstract',
                                proposed: "faker.image.urlLoremFlickr({ category: 'abstract' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'abstract', t)
                        );
                    }
                    animals(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.animals',
                                proposed: "faker.image.urlLoremFlickr({ category: 'animals' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'animals', t)
                        );
                    }
                    business(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.business',
                                proposed: "faker.image.urlLoremFlickr({ category: 'business' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'business', t)
                        );
                    }
                    cats(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.cats',
                                proposed: "faker.image.urlLoremFlickr({ category: 'cats' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'cats', t)
                        );
                    }
                    city(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.city',
                                proposed: "faker.image.urlLoremFlickr({ category: 'city' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'city', t)
                        );
                    }
                    food(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.food',
                                proposed: "faker.image.urlLoremFlickr({ category: 'food' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'food', t)
                        );
                    }
                    nightlife(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.nightlife',
                                proposed: "faker.image.urlLoremFlickr({ category: 'nightlife' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'nightlife', t)
                        );
                    }
                    fashion(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.fashion',
                                proposed: "faker.image.urlLoremFlickr({ category: 'fashion' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'fashion', t)
                        );
                    }
                    people(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.people',
                                proposed: "faker.image.urlLoremFlickr({ category: 'people' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'people', t)
                        );
                    }
                    nature(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.nature',
                                proposed: "faker.image.urlLoremFlickr({ category: 'nature' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'nature', t)
                        );
                    }
                    sports(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.sports',
                                proposed: "faker.image.urlLoremFlickr({ category: 'sports' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'sports', t)
                        );
                    }
                    technics(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.technics',
                                proposed: "faker.image.urlLoremFlickr({ category: 'technics' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'technics', t)
                        );
                    }
                    transport(e, a, t) {
                        return (
                            E({
                                deprecated: 'faker.image.transport',
                                proposed: "faker.image.urlLoremFlickr({ category: 'transport' }) or faker.image.url",
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.imageUrl(e, a, 'transport', t)
                        );
                    }
                },
                Y = Object.fromEntries([
                    ['А', 'A'],
                    ['а', 'a'],
                    ['Б', 'B'],
                    ['б', 'b'],
                    ['В', 'V'],
                    ['в', 'v'],
                    ['Г', 'G'],
                    ['г', 'g'],
                    ['Д', 'D'],
                    ['д', 'd'],
                    ['ъе', 'ye'],
                    ['Ъе', 'Ye'],
                    ['ъЕ', 'yE'],
                    ['ЪЕ', 'YE'],
                    ['Е', 'E'],
                    ['е', 'e'],
                    ['Ё', 'Yo'],
                    ['ё', 'yo'],
                    ['Ж', 'Zh'],
                    ['ж', 'zh'],
                    ['З', 'Z'],
                    ['з', 'z'],
                    ['И', 'I'],
                    ['и', 'i'],
                    ['ый', 'iy'],
                    ['Ый', 'Iy'],
                    ['ЫЙ', 'IY'],
                    ['ыЙ', 'iY'],
                    ['Й', 'Y'],
                    ['й', 'y'],
                    ['К', 'K'],
                    ['к', 'k'],
                    ['Л', 'L'],
                    ['л', 'l'],
                    ['М', 'M'],
                    ['м', 'm'],
                    ['Н', 'N'],
                    ['н', 'n'],
                    ['О', 'O'],
                    ['о', 'o'],
                    ['П', 'P'],
                    ['п', 'p'],
                    ['Р', 'R'],
                    ['р', 'r'],
                    ['С', 'S'],
                    ['с', 's'],
                    ['Т', 'T'],
                    ['т', 't'],
                    ['У', 'U'],
                    ['у', 'u'],
                    ['Ф', 'F'],
                    ['ф', 'f'],
                    ['Х', 'Kh'],
                    ['х', 'kh'],
                    ['Ц', 'Ts'],
                    ['ц', 'ts'],
                    ['Ч', 'Ch'],
                    ['ч', 'ch'],
                    ['Ш', 'Sh'],
                    ['ш', 'sh'],
                    ['Щ', 'Sch'],
                    ['щ', 'sch'],
                    ['Ъ', ''],
                    ['ъ', ''],
                    ['Ы', 'Y'],
                    ['ы', 'y'],
                    ['Ь', ''],
                    ['ь', ''],
                    ['Э', 'E'],
                    ['э', 'e'],
                    ['Ю', 'Yu'],
                    ['ю', 'yu'],
                    ['Я', 'Ya'],
                    ['я', 'ya'],
                ]),
                Z = Object.fromEntries([
                    ['α', 'a'],
                    ['β', 'v'],
                    ['γ', 'g'],
                    ['δ', 'd'],
                    ['ε', 'e'],
                    ['ζ', 'z'],
                    ['η', 'i'],
                    ['θ', 'th'],
                    ['ι', 'i'],
                    ['κ', 'k'],
                    ['λ', 'l'],
                    ['μ', 'm'],
                    ['ν', 'n'],
                    ['ξ', 'ks'],
                    ['ο', 'o'],
                    ['π', 'p'],
                    ['ρ', 'r'],
                    ['σ', 's'],
                    ['τ', 't'],
                    ['υ', 'y'],
                    ['φ', 'f'],
                    ['χ', 'x'],
                    ['ψ', 'ps'],
                    ['ω', 'o'],
                    ['ά', 'a'],
                    ['έ', 'e'],
                    ['ί', 'i'],
                    ['ό', 'o'],
                    ['ύ', 'y'],
                    ['ή', 'i'],
                    ['ώ', 'o'],
                    ['ς', 's'],
                    ['ϊ', 'i'],
                    ['ΰ', 'y'],
                    ['ϋ', 'y'],
                    ['ΐ', 'i'],
                    ['Α', 'A'],
                    ['Β', 'B'],
                    ['Γ', 'G'],
                    ['Δ', 'D'],
                    ['Ε', 'E'],
                    ['Ζ', 'Z'],
                    ['Η', 'I'],
                    ['Θ', 'TH'],
                    ['Ι', 'I'],
                    ['Κ', 'K'],
                    ['Λ', 'L'],
                    ['Μ', 'M'],
                    ['Ν', 'N'],
                    ['Ξ', 'KS'],
                    ['Ο', 'O'],
                    ['Π', 'P'],
                    ['Ρ', 'R'],
                    ['Σ', 'S'],
                    ['Τ', 'T'],
                    ['Υ', 'Y'],
                    ['Φ', 'F'],
                    ['Χ', 'X'],
                    ['Ψ', 'PS'],
                    ['Ω', 'O'],
                    ['Ά', 'A'],
                    ['Έ', 'E'],
                    ['Ί', 'I'],
                    ['Ό', 'O'],
                    ['Ύ', 'Y'],
                    ['Ή', 'I'],
                    ['Ώ', 'O'],
                    ['Ϊ', 'I'],
                    ['Ϋ', 'Y'],
                ]),
                W = Object.fromEntries([
                    ['ء', 'e'],
                    ['آ', 'a'],
                    ['أ', 'a'],
                    ['ؤ', 'w'],
                    ['إ', 'i'],
                    ['ئ', 'y'],
                    ['ا', 'a'],
                    ['ب', 'b'],
                    ['ة', 't'],
                    ['ت', 't'],
                    ['ث', 'th'],
                    ['ج', 'j'],
                    ['ح', 'h'],
                    ['خ', 'kh'],
                    ['د', 'd'],
                    ['ذ', 'dh'],
                    ['ر', 'r'],
                    ['ز', 'z'],
                    ['س', 's'],
                    ['ش', 'sh'],
                    ['ص', 's'],
                    ['ض', 'd'],
                    ['ط', 't'],
                    ['ظ', 'z'],
                    ['ع', 'e'],
                    ['غ', 'gh'],
                    ['ـ', '_'],
                    ['ف', 'f'],
                    ['ق', 'q'],
                    ['ك', 'k'],
                    ['ل', 'l'],
                    ['م', 'm'],
                    ['ن', 'n'],
                    ['ه', 'h'],
                    ['و', 'w'],
                    ['ى', 'a'],
                    ['ي', 'y'],
                    ['َ‎', 'a'],
                    ['ُ', 'u'],
                    ['ِ‎', 'i'],
                ]),
                J = Object.fromEntries([
                    ['ա', 'a'],
                    ['Ա', 'A'],
                    ['բ', 'b'],
                    ['Բ', 'B'],
                    ['գ', 'g'],
                    ['Գ', 'G'],
                    ['դ', 'd'],
                    ['Դ', 'D'],
                    ['ե', 'ye'],
                    ['Ե', 'Ye'],
                    ['զ', 'z'],
                    ['Զ', 'Z'],
                    ['է', 'e'],
                    ['Է', 'E'],
                    ['ը', 'y'],
                    ['Ը', 'Y'],
                    ['թ', 't'],
                    ['Թ', 'T'],
                    ['ժ', 'zh'],
                    ['Ժ', 'Zh'],
                    ['ի', 'i'],
                    ['Ի', 'I'],
                    ['լ', 'l'],
                    ['Լ', 'L'],
                    ['խ', 'kh'],
                    ['Խ', 'Kh'],
                    ['ծ', 'ts'],
                    ['Ծ', 'Ts'],
                    ['կ', 'k'],
                    ['Կ', 'K'],
                    ['հ', 'h'],
                    ['Հ', 'H'],
                    ['ձ', 'dz'],
                    ['Ձ', 'Dz'],
                    ['ղ', 'gh'],
                    ['Ղ', 'Gh'],
                    ['ճ', 'tch'],
                    ['Ճ', 'Tch'],
                    ['մ', 'm'],
                    ['Մ', 'M'],
                    ['յ', 'y'],
                    ['Յ', 'Y'],
                    ['ն', 'n'],
                    ['Ն', 'N'],
                    ['շ', 'sh'],
                    ['Շ', 'Sh'],
                    ['ո', 'vo'],
                    ['Ո', 'Vo'],
                    ['չ', 'ch'],
                    ['Չ', 'Ch'],
                    ['պ', 'p'],
                    ['Պ', 'P'],
                    ['ջ', 'j'],
                    ['Ջ', 'J'],
                    ['ռ', 'r'],
                    ['Ռ', 'R'],
                    ['ս', 's'],
                    ['Ս', 'S'],
                    ['վ', 'v'],
                    ['Վ', 'V'],
                    ['տ', 't'],
                    ['Տ', 'T'],
                    ['ր', 'r'],
                    ['Ր', 'R'],
                    ['ց', 'c'],
                    ['Ց', 'C'],
                    ['ու', 'u'],
                    ['ՈՒ', 'U'],
                    ['Ու', 'U'],
                    ['փ', 'p'],
                    ['Փ', 'P'],
                    ['ք', 'q'],
                    ['Ք', 'Q'],
                    ['օ', 'o'],
                    ['Օ', 'O'],
                    ['ֆ', 'f'],
                    ['Ֆ', 'F'],
                    ['և', 'yev'],
                ]),
                X = Object.fromEntries([
                    ['چ', 'ch'],
                    ['ک', 'k'],
                    ['گ', 'g'],
                    ['پ', 'p'],
                    ['ژ', 'zh'],
                    ['ی', 'y'],
                ]),
                Q = {...Y, ...Z, ...W, ...X, ...J},
                q = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(q.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    avatar() {
                        return `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${this.faker.number.int(1249)}.jpg`;
                    }
                    email(e = {}, a, t, r) {
                        var i;
                        (('string' == typeof e || null != a || null != t || null != r) &&
                            E({
                                deprecated: 'faker.internet.email(firstName, lastName, provider, options)',
                                proposed: 'faker.internet.email({ firstName, lastName, provider, ... })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            'string' == typeof e && (e = {firstName: e}));
                        let {
                                firstName: n = this.faker.person.firstName(),
                                lastName: s = null != a ? a : this.faker.person.lastName(),
                                provider: o = null != t
                                    ? t
                                    : this.faker.helpers.arrayElement(this.faker.definitions.internet.free_email),
                                allowSpecialCharacters: c = null !=
                                    (i = null == r ? void 0 : r.allowSpecialCharacters) && i,
                            } = e,
                            l = this.userName({firstName: n, lastName: s});
                        return (
                            (l = (l = l.replace(/[^A-Za-z0-9._+\-]+/g, '')).substring(0, 50)),
                            c &&
                                (l = l.replace(
                                    this.faker.helpers.arrayElement('._-'.split('')),
                                    this.faker.helpers.arrayElement(".!#$%&'*+-/=?^_`{|}~".split('')),
                                )),
                            `${(l = (l = (l = l.replace(/\.{2,}/g, '.')).replace(/^\./, '')).replace(/\.$/, ''))}@${o}`
                        );
                    }
                    exampleEmail(e = {}, a, t) {
                        var r;
                        (('string' == typeof e || null != a || null != t) &&
                            E({
                                deprecated: 'faker.internet.exampleEmail(firstName, lastName, options)',
                                proposed: 'faker.internet.exampleEmail({ firstName, lastName, ... })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            'string' == typeof e && (e = {firstName: e}));
                        let {
                                firstName: i = this.faker.person.firstName(),
                                lastName: n = null != a ? a : this.faker.person.lastName(),
                                allowSpecialCharacters: s = null !=
                                    (r = null == t ? void 0 : t.allowSpecialCharacters) && r,
                            } = e,
                            o = this.faker.helpers.arrayElement(this.faker.definitions.internet.example_email);
                        return this.email({firstName: i, lastName: n, provider: o, allowSpecialCharacters: s});
                    }
                    userName(e = {}, a) {
                        (('string' == typeof e || null != a) &&
                            E({
                                deprecated: 'faker.internet.userName(firstName, lastName)',
                                proposed: 'faker.internet.userName({ firstName, lastName })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            'string' == typeof e && (e = {firstName: e}));
                        let {
                                firstName: t = this.faker.person.firstName(),
                                lastName: r = null != a ? a : this.faker.person.lastName(),
                            } = e,
                            i;
                        switch (this.faker.number.int(2)) {
                            case 0:
                                i = `${t}${this.faker.number.int(99)}`;
                                break;
                            case 1:
                                i = t + this.faker.helpers.arrayElement(['.', '_']) + r;
                                break;
                            case 2:
                                i = `${t}${this.faker.helpers.arrayElement(['.', '_'])}${r}${this.faker.number.int(99)}`;
                        }
                        return (i = (i = (i = i.normalize('NFKD').replace(/[\u0300-\u036f]/g, ''))
                            .split('')
                            .map((e) => (Q[e] ? Q[e] : 128 > e.charCodeAt(0) ? e : e.charCodeAt(0).toString(36)))
                            .join(''))
                            .toString()
                            .replace(/'/g, '')).replace(/ /g, '');
                    }
                    displayName(e = {}, a) {
                        (('string' == typeof e || null != a) &&
                            E({
                                deprecated: 'faker.internet.displayName(firstName, lastName)',
                                proposed: 'faker.internet.displayName({ firstName, lastName })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            'string' == typeof e && (e = {firstName: e}));
                        let {
                                firstName: t = this.faker.person.firstName(),
                                lastName: r = null != a ? a : this.faker.person.lastName(),
                            } = e,
                            i;
                        switch (this.faker.number.int(2)) {
                            case 0:
                                i = `${t}${this.faker.number.int(99)}`;
                                break;
                            case 1:
                                i = t + this.faker.helpers.arrayElement(['.', '_']) + r;
                                break;
                            case 2:
                                i = `${t}${this.faker.helpers.arrayElement(['.', '_'])}${r}${this.faker.number.int(99)}`;
                        }
                        return (i = i.toString().replace(/'/g, '')).replace(/ /g, '');
                    }
                    protocol() {
                        return this.faker.helpers.arrayElement(['http', 'https']);
                    }
                    httpMethod() {
                        return this.faker.helpers.arrayElement(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']);
                    }
                    httpStatusCode(e = {}) {
                        let {types: a = Object.keys(this.faker.definitions.internet.http_status_code)} = e,
                            t = this.faker.helpers.arrayElement(a);
                        return this.faker.helpers.arrayElement(this.faker.definitions.internet.http_status_code[t]);
                    }
                    url(e = {}) {
                        let {appendSlash: a = this.faker.datatype.boolean(), protocol: t = 'https'} = e;
                        return `${t}://${this.domainName()}${a ? '/' : ''}`;
                    }
                    domainName() {
                        return `${this.domainWord()}.${this.domainSuffix()}`;
                    }
                    domainSuffix() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.internet.domain_suffix);
                    }
                    domainWord() {
                        return this.faker.helpers
                            .slugify(`${this.faker.word.adjective()}-${this.faker.word.noun()}`)
                            .toLowerCase();
                    }
                    ip() {
                        return this.faker.datatype.boolean() ? this.ipv4() : this.ipv6();
                    }
                    ipv4() {
                        return Array.from({length: 4}, () => this.faker.number.int(255)).join('.');
                    }
                    ipv6() {
                        return Array.from({length: 8}, () =>
                            this.faker.string.hexadecimal({length: 4, casing: 'lower', prefix: ''}),
                        ).join(':');
                    }
                    port() {
                        return this.faker.number.int(65535);
                    }
                    userAgent() {
                        return (function (e) {
                            let a, t, r;
                            let i = () =>
                                    e.helpers.arrayElement([
                                        'AB',
                                        'AF',
                                        'AN',
                                        'AR',
                                        'AS',
                                        'AZ',
                                        'BE',
                                        'BG',
                                        'BN',
                                        'BO',
                                        'BR',
                                        'BS',
                                        'CA',
                                        'CE',
                                        'CO',
                                        'CS',
                                        'CU',
                                        'CY',
                                        'DA',
                                        'DE',
                                        'EL',
                                        'EN',
                                        'EO',
                                        'ES',
                                        'ET',
                                        'EU',
                                        'FA',
                                        'FI',
                                        'FJ',
                                        'FO',
                                        'FR',
                                        'FY',
                                        'GA',
                                        'GD',
                                        'GL',
                                        'GV',
                                        'HE',
                                        'HI',
                                        'HR',
                                        'HT',
                                        'HU',
                                        'HY',
                                        'ID',
                                        'IS',
                                        'IT',
                                        'JA',
                                        'JV',
                                        'KA',
                                        'KG',
                                        'KO',
                                        'KU',
                                        'KW',
                                        'KY',
                                        'LA',
                                        'LB',
                                        'LI',
                                        'LN',
                                        'LT',
                                        'LV',
                                        'MG',
                                        'MK',
                                        'MN',
                                        'MO',
                                        'MS',
                                        'MT',
                                        'MY',
                                        'NB',
                                        'NE',
                                        'NL',
                                        'NN',
                                        'NO',
                                        'OC',
                                        'PL',
                                        'PT',
                                        'RM',
                                        'RO',
                                        'RU',
                                        'SC',
                                        'SE',
                                        'SK',
                                        'SL',
                                        'SO',
                                        'SQ',
                                        'SR',
                                        'SV',
                                        'SW',
                                        'TK',
                                        'TR',
                                        'TY',
                                        'UK',
                                        'UR',
                                        'UZ',
                                        'VI',
                                        'VO',
                                        'YI',
                                        'ZH',
                                    ]),
                                n = (a) =>
                                    e.helpers.arrayElement(
                                        {
                                            lin: ['i686', 'x86_64'],
                                            mac: ['Intel', 'PPC', 'U; Intel', 'U; PPC'],
                                            win: ['', 'WOW64', 'Win64; x64'],
                                        }[a],
                                    ),
                                s = (a) => {
                                    let t = '';
                                    for (let r = 0; r < a; r++) t += `.${e.string.numeric({allowLeadingZeros: !0})}`;
                                    return t;
                                },
                                o = {
                                    net: () =>
                                        [
                                            e.number.int({min: 1, max: 4}),
                                            e.number.int(9),
                                            e.number.int({min: 1e4, max: 99999}),
                                            e.number.int(9),
                                        ].join('.'),
                                    nt: () => [e.number.int({min: 5, max: 6}), e.number.int(3)].join('.'),
                                    ie: () => e.number.int({min: 7, max: 11}),
                                    trident: () => [e.number.int({min: 3, max: 7}), e.number.int(1)].join('.'),
                                    osx: (a) => [10, e.number.int({min: 5, max: 10}), e.number.int(9)].join(a || '.'),
                                    chrome: () =>
                                        [
                                            e.number.int({min: 13, max: 39}),
                                            0,
                                            e.number.int({min: 800, max: 899}),
                                            0,
                                        ].join('.'),
                                    presto: () => `2.9.${e.number.int({min: 160, max: 190})}`,
                                    presto2: () => `${e.number.int({min: 10, max: 12})}.00`,
                                    safari: () =>
                                        [e.number.int({min: 531, max: 538}), e.number.int(2), e.number.int(2)].join(
                                            '.',
                                        ),
                                },
                                [c, l] =
                                    ((a = {
                                        chrome: ['win', 'mac', 'lin'],
                                        firefox: ['win', 'mac', 'lin'],
                                        opera: ['win', 'mac', 'lin'],
                                        safari: ['win', 'mac'],
                                        iexplorer: ['win'],
                                    }),
                                    (t = e.helpers.objectKey(a)),
                                    (r = e.helpers.arrayElement(a[t])),
                                    [t, r]);
                            return {
                                firefox(a) {
                                    let t = `${e.number.int({min: 5, max: 15})}${s(2)}`,
                                        r = `Gecko/20100101 Firefox/${t}`,
                                        i = n(a);
                                    return `Mozilla/5.0 ${'win' === a ? `(Windows NT ${o.nt()}${i ? `; ${i}` : ''}` : 'mac' === a ? `(Macintosh; ${i} Mac OS X ${o.osx()}` : `(X11; Linux ${i}`}; rv:${t.slice(0, -2)}) ${r}`;
                                },
                                iexplorer() {
                                    let a = o.ie();
                                    return a >= 11
                                        ? `Mozilla/5.0 (Windows NT 6.${e.number.int({min: 1, max: 3})}; Trident/7.0; ${e.datatype.boolean() ? 'Touch; ' : ''}rv:11.0) like Gecko`
                                        : `Mozilla/5.0 (compatible; MSIE ${a}.0; Windows NT ${o.nt()}; Trident/${o.trident()}${e.datatype.boolean() ? `; .NET CLR ${o.net()}` : ''})`;
                                },
                                opera(a) {
                                    let t = ` Presto/${o.presto()} Version/${o.presto2()})`;
                                    return `Opera/${e.number.int({min: 9, max: 14})}.${e.number.int(99)} ${'win' === a ? `(Windows NT ${o.nt()}; U; ${i()}${t}` : 'lin' === a ? `(X11; Linux ${n(a)}; U; ${i()}${t}` : `(Macintosh; Intel Mac OS X ${o.osx()} U; ${i()} Presto/${o.presto()} Version/${o.presto2()})`}`;
                                },
                                safari(a) {
                                    let t = o.safari();
                                    return `Mozilla/5.0 ${'mac' === a ? `(Macintosh; ${n('mac')} Mac OS X ${o.osx('_')} rv:${e.number.int({min: 2, max: 6})}.0; ${i()}) ` : `(Windows; U; Windows NT ${o.nt()})`}AppleWebKit/${t} (KHTML, like Gecko) Version/${e.number.int({min: 4, max: 7})}.${e.number.int(1)}.${e.number.int(10)} Safari/${t}`;
                                },
                                chrome(e) {
                                    let a = o.safari();
                                    return `Mozilla/5.0 ${'mac' === e ? `(Macintosh; ${n('mac')} Mac OS X ${o.osx('_')}) ` : 'win' === e ? `(Windows; U; Windows NT ${o.nt()})` : `(X11; Linux ${n(e)}`} AppleWebKit/${a} (KHTML, like Gecko) Chrome/${o.chrome()} Safari/${a}`;
                                },
                            }[c](l);
                        })(this.faker);
                    }
                    color(e = {}, a, t) {
                        (('number' == typeof e || null != t || null != a) &&
                            E({
                                deprecated: 'faker.internet.color(redBase, greenBase, blueBase)',
                                proposed: 'faker.internet.color({ redBase, greenBase, blueBase })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            'number' == typeof e && (e = {redBase: e}));
                        let {redBase: r = 0, greenBase: i = null != a ? a : 0, blueBase: n = null != t ? t : 0} = e,
                            s = (e) =>
                                Math.floor((this.faker.number.int(256) + e) / 2)
                                    .toString(16)
                                    .padStart(2, '0');
                        return `#${s(r)}${s(i)}${s(n)}`;
                    }
                    mac(e = {}) {
                        'string' == typeof e && (e = {separator: e});
                        let {separator: a = ':'} = e,
                            t,
                            r = '';
                        for ([':', '-', ''].includes(a) || (a = ':'), t = 0; t < 12; t++)
                            ((r += this.faker.number.hex(15)), t % 2 == 1 && 11 !== t && (r += a));
                        return r;
                    }
                    password(e = {}, a, t, r) {
                        let i = /[aeiouAEIOU]$/,
                            n = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/,
                            s = (e, a, t, r) => {
                                if (r.length >= e) return r;
                                a && (t = n.test(r) ? i : n);
                                let o = String.fromCharCode(this.faker.number.int(94) + 33);
                                return (a && (o = o.toLowerCase()), t.test(o) ? s(e, a, t, r + o) : s(e, a, t, r));
                            };
                        (('string' == typeof e || null != a || null != t || null != r) &&
                            E({
                                deprecated: 'faker.internet.password(length, memorable, pattern, prefix)',
                                proposed: 'faker.internet.password({ length, memorable, pattern, prefix })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            'number' == typeof e && (e = {length: e}));
                        let {
                            length: o = 15,
                            memorable: c = null != a && a,
                            pattern: l = null != t ? t : /\w/,
                            prefix: h = null != r ? r : '',
                        } = e;
                        return s(o, c, l, h);
                    }
                    emoji(e = {}) {
                        let {types: a = Object.keys(this.faker.definitions.internet.emoji)} = e,
                            t = this.faker.helpers.arrayElement(a);
                        return this.faker.helpers.arrayElement(this.faker.definitions.internet.emoji[t]);
                    }
                },
                ee = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(ee.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    zipCode(e = {}) {
                        'string' == typeof e && (e = {format: e});
                        let {state: a} = e;
                        if (a) {
                            let e = this.faker.definitions.location.postcode_by_state[a];
                            if (e) return String(this.faker.number.int(e));
                            throw new l(`No zip code definition found for state "${a}"`);
                        }
                        let {format: t = this.faker.definitions.location.postcode} = e;
                        return (
                            'string' == typeof t && (t = [t]),
                            (t = this.faker.helpers.arrayElement(t)),
                            this.faker.helpers.replaceSymbols(t)
                        );
                    }
                    zipCodeByState(e = {}) {
                        (E({
                            deprecated: 'faker.location.zipCodeByState',
                            proposed: 'faker.location.zipCode({ state })',
                            since: '8.0',
                            until: '9.0',
                        }),
                            'string' == typeof e && (e = {state: e}));
                        let {state: a} = e;
                        return this.zipCode({state: a});
                    }
                    city() {
                        return this.faker.helpers.fake(this.faker.definitions.location.city_pattern);
                    }
                    cityName() {
                        return (
                            E({
                                deprecated: 'faker.location.cityName',
                                proposed: 'faker.location.city',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.helpers.arrayElement(this.faker.definitions.location.city_name)
                        );
                    }
                    buildingNumber() {
                        return this.faker.helpers
                            .arrayElement(this.faker.definitions.location.building_number)
                            .replace(/#+/g, (e) =>
                                this.faker.string.numeric({length: e.length, allowLeadingZeros: !1}),
                            );
                    }
                    street() {
                        return this.faker.helpers.fake(this.faker.definitions.location.street_pattern);
                    }
                    streetName() {
                        return (
                            E({
                                deprecated: 'faker.location.streetName',
                                proposed: 'faker.location.street',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.helpers.arrayElement(this.faker.definitions.location.street_name)
                        );
                    }
                    streetAddress(e = {}) {
                        'boolean' == typeof e && (e = {useFullAddress: e});
                        let {useFullAddress: a} = e,
                            t = this.faker.definitions.location.street_address[a ? 'full' : 'normal'];
                        return this.faker.helpers.fake(t);
                    }
                    secondaryAddress() {
                        return this.faker.helpers
                            .arrayElement(this.faker.definitions.location.secondary_address)
                            .replace(/#+/g, (e) =>
                                this.faker.string.numeric({length: e.length, allowLeadingZeros: !1}),
                            );
                    }
                    county() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.location.county);
                    }
                    country() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.location.country);
                    }
                    countryCode(e = {}) {
                        'string' == typeof e && (e = {variant: e});
                        let {variant: a = 'alpha-2'} = e;
                        return this.faker.helpers.arrayElement(this.faker.definitions.location.country_code)[
                            'alpha-3' === a ? 'alpha3' : 'alpha2'
                        ];
                    }
                    state(e = {}) {
                        let {abbreviated: a = !1} = e,
                            t = a ? this.faker.definitions.location.state_abbr : this.faker.definitions.location.state;
                        return this.faker.helpers.arrayElement(t);
                    }
                    stateAbbr() {
                        return (
                            E({
                                deprecated: 'faker.location.stateAbbr()',
                                proposed: 'faker.location.state({ abbreviated: true })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.state({abbreviated: !0})
                        );
                    }
                    latitude(e = {}, a = -90, t = 4) {
                        'number' == typeof e && (e = {max: e});
                        let {max: r = 90, min: i = a, precision: n = t} = e;
                        return this.faker.number.float({min: i, max: r, precision: 10 ** -n});
                    }
                    longitude(e = {}, a = -180, t = 4) {
                        'number' == typeof e && (e = {max: e});
                        let {max: r = 180, min: i = a, precision: n = t} = e;
                        return this.faker.number.float({max: r, min: i, precision: 10 ** -n});
                    }
                    direction(e = {}) {
                        'boolean' == typeof e &&
                            (E({
                                deprecated: 'faker.location.direction(abbreviated)',
                                proposed: 'faker.location.direction({ abbreviated })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {abbreviated: e}));
                        let {abbreviated: a = !1} = e;
                        return a
                            ? this.faker.helpers.arrayElement(this.faker.definitions.location.direction_abbr)
                            : this.faker.helpers.arrayElement(this.faker.definitions.location.direction);
                    }
                    cardinalDirection(e = {}) {
                        'boolean' == typeof e &&
                            (E({
                                deprecated: 'faker.location.cardinalDirection(abbreviated)',
                                proposed: 'faker.location.cardinalDirection({ abbreviated })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {abbreviated: e}));
                        let {abbreviated: a = !1} = e;
                        return a
                            ? this.faker.helpers.arrayElement(
                                  this.faker.definitions.location.direction_abbr.slice(0, 4),
                              )
                            : this.faker.helpers.arrayElement(this.faker.definitions.location.direction.slice(0, 4));
                    }
                    ordinalDirection(e = {}) {
                        'boolean' == typeof e &&
                            (E({
                                deprecated: 'faker.location.ordinalDirection(abbreviated)',
                                proposed: 'faker.location.ordinalDirection({ abbreviated })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {abbreviated: e}));
                        let {abbreviated: a = !1} = e;
                        return a
                            ? this.faker.helpers.arrayElement(
                                  this.faker.definitions.location.direction_abbr.slice(4, 8),
                              )
                            : this.faker.helpers.arrayElement(this.faker.definitions.location.direction.slice(4, 8));
                    }
                    nearbyGPSCoordinate(e = {}, a = 10, t = !1) {
                        Array.isArray(e) &&
                            (E({
                                deprecated: 'faker.location.nearbyGPSCoordinate(coordinate, radius, isMetric)',
                                proposed: 'faker.location.nearbyGPSCoordinate({ origin, radius, isMetric })',
                                since: '8.0',
                                until: '9.0',
                            }),
                            (e = {origin: e}));
                        let {origin: r, radius: i = a, isMetric: n = t} = e;
                        if (null == r) return [this.latitude(), this.longitude()];
                        let s = this.faker.number.float({max: 2 * Math.PI, precision: 1e-5}),
                            o =
                                (0.995 * this.faker.number.float({max: n ? i : 1.60934 * i, precision: 0.001})) /
                                (4e4 / 360),
                            c = [r[0] + Math.sin(s) * o, r[1] + Math.cos(s) * o];
                        return (
                            (c[0] = c[0] % 180),
                            (c[0] < -90 || c[0] > 90) && ((c[0] = 180 * Math.sign(c[0]) - c[0]), (c[1] += 180)),
                            (c[1] = (((c[1] % 360) + 540) % 360) - 180),
                            [c[0], c[1]]
                        );
                    }
                    timeZone() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.location.time_zone);
                    }
                },
                ea = {
                    fail: () => {
                        throw new l('No words found that match the given length.');
                    },
                    closest: (e, a) => {
                        let t = Object.keys(
                                e.reduce((e, a) => {
                                    var t;
                                    return ((e[a.length] = null != (t = e[a.length]) ? t : []).push(a), e);
                                }, {}),
                            ).map(Number),
                            r = Math.min(a.min - Math.min(...t), Math.max(...t) - a.max);
                        return e.filter((e) => e.length === a.min - r || e.length === a.max + r);
                    },
                    shortest: (e) => {
                        let a = Math.min(...e.map((e) => e.length));
                        return e.filter((e) => e.length === a);
                    },
                    longest: (e) => {
                        let a = Math.max(...e.map((e) => e.length));
                        return e.filter((e) => e.length === a);
                    },
                    'any-length': (e) => [...e],
                };
            function et(e) {
                let {wordList: a, length: t, strategy: r = 'any-length'} = e;
                if (t) {
                    let e =
                            'number' == typeof t
                                ? (e) => e.length === t
                                : (e) => e.length >= t.min && e.length <= t.max,
                        i = a.filter(e);
                    return i.length > 0 ? i : 'number' == typeof t ? ea[r](a, {min: t, max: t}) : ea[r](a, t);
                }
                return 'shortest' === r || 'longest' === r ? ea[r](a) : [...a];
            }
            var er = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(er.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    word(e = {}) {
                        let a = 'number' == typeof e ? {length: e} : e;
                        return this.faker.helpers.arrayElement(
                            et({...a, wordList: this.faker.definitions.lorem.words}),
                        );
                    }
                    words(e = 3) {
                        return this.faker.helpers.multiple(() => this.word(), {count: e}).join(' ');
                    }
                    sentence(e = {min: 3, max: 10}) {
                        let a = this.words(e);
                        return `${a.charAt(0).toUpperCase() + a.substring(1)}.`;
                    }
                    slug(e = 3) {
                        let a = this.words(e);
                        return this.faker.helpers.slugify(a);
                    }
                    sentences(e = {min: 2, max: 6}, a = ' ') {
                        return this.faker.helpers.multiple(() => this.sentence(), {count: e}).join(a);
                    }
                    paragraph(e = 3) {
                        return this.sentences(e);
                    }
                    paragraphs(
                        e = 3,
                        a = `
`,
                    ) {
                        return this.faker.helpers.multiple(() => this.paragraph(), {count: e}).join(a);
                    }
                    text() {
                        return `${this[this.faker.helpers.arrayElement(['sentence', 'sentences', 'paragraph', 'paragraphs', 'lines'])]()}`;
                    }
                    lines(e = {min: 1, max: 5}) {
                        return this.sentences(
                            e,
                            `
`,
                        );
                    }
                },
                ei = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(ei.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    genre() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.music.genre);
                    }
                    songName() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.music.song_name);
                    }
                },
                en = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(en.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    int(e = {}) {
                        'number' == typeof e && (e = {max: e});
                        let {min: a = 0, max: t = Number.MAX_SAFE_INTEGER} = e,
                            r = Math.ceil(a),
                            i = Math.floor(t);
                        if (r === i) return r;
                        if (i < r)
                            throw new l(
                                t >= a
                                    ? `No integer value between ${a} and ${t} found.`
                                    : `Max ${t} should be greater than min ${a}.`,
                            );
                        return Math.floor(this.faker._mersenne.next() * (i + 1 - r) + r);
                    }
                    float(e = {}) {
                        'number' == typeof e && (e = {max: e});
                        let {min: a = 0, max: t = 1, precision: r} = e;
                        if (t === a) return a;
                        if (t < a) throw new l(`Max ${t} should be greater than min ${a}.`);
                        if (void 0 !== r) {
                            if (r <= 0) throw new l('Precision should be greater than 0.');
                            let e = 1 / r;
                            return this.int({min: a * e, max: t * e}) / e;
                        }
                        return this.faker._mersenne.next() * (t - a) + a;
                    }
                    binary(e = {}) {
                        'number' == typeof e && (e = {max: e});
                        let {min: a = 0, max: t = 1} = e;
                        return this.int({max: t, min: a}).toString(2);
                    }
                    octal(e = {}) {
                        'number' == typeof e && (e = {max: e});
                        let {min: a = 0, max: t = 7} = e;
                        return this.int({max: t, min: a}).toString(8);
                    }
                    hex(e = {}) {
                        'number' == typeof e && (e = {max: e});
                        let {min: a = 0, max: t = 15} = e;
                        return this.int({max: t, min: a}).toString(16);
                    }
                    bigInt(e = {}) {
                        var a, t;
                        ('bigint' == typeof e ||
                            'number' == typeof e ||
                            'string' == typeof e ||
                            'boolean' == typeof e) &&
                            (e = {max: e});
                        let r = BigInt(null != (a = e.min) ? a : 0),
                            i = BigInt(null != (t = e.max) ? t : r + BigInt(999999999999999));
                        if (i === r) return r;
                        if (i < r) throw new l(`Max ${i} should be larger then min ${r}.`);
                        let n = i - r;
                        return (
                            r +
                            (BigInt(this.faker.string.numeric({length: n.toString(10).length, allowLeadingZeros: !0})) %
                                (n + BigInt(1)))
                        );
                    }
                },
                es = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(es.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    number(e) {
                        return (
                            (e =
                                null != e
                                    ? e
                                    : this.faker.helpers.arrayElement(this.faker.definitions.phone_number.formats)),
                            this.faker.helpers.replaceSymbolWithNumber(e)
                        );
                    }
                    imei() {
                        return this.faker.helpers.replaceCreditCardSymbols('##-######-######-L', '#');
                    }
                },
                eo = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(eo.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    word() {
                        E({
                            deprecated: 'faker.random.word()',
                            proposed: 'faker.lorem.word() or faker.word.sample()',
                            since: '8.0',
                            until: '9.0',
                        });
                        let e = [
                                () => this.faker.location.cardinalDirection(),
                                this.faker.location.country,
                                this.faker.location.county,
                                () => this.faker.location.direction(),
                                () => this.faker.location.ordinalDirection(),
                                this.faker.location.state,
                                this.faker.location.street,
                                this.faker.color.human,
                                this.faker.commerce.department,
                                this.faker.commerce.product,
                                this.faker.commerce.productAdjective,
                                this.faker.commerce.productMaterial,
                                this.faker.commerce.productName,
                                this.faker.company.buzzAdjective,
                                this.faker.company.buzzNoun,
                                this.faker.company.buzzVerb,
                                this.faker.company.catchPhraseAdjective,
                                this.faker.company.catchPhraseDescriptor,
                                this.faker.company.catchPhraseNoun,
                                this.faker.finance.accountName,
                                this.faker.finance.currencyName,
                                this.faker.finance.transactionType,
                                this.faker.hacker.abbreviation,
                                this.faker.hacker.adjective,
                                this.faker.hacker.ingverb,
                                this.faker.hacker.noun,
                                this.faker.hacker.verb,
                                this.faker.lorem.word,
                                this.faker.music.genre,
                                this.faker.person.gender,
                                this.faker.person.jobArea,
                                this.faker.person.jobDescriptor,
                                this.faker.person.jobTitle,
                                this.faker.person.jobType,
                                this.faker.person.sex,
                                () => this.faker.science.chemicalElement().name,
                                () => this.faker.science.unit().name,
                                this.faker.vehicle.bicycle,
                                this.faker.vehicle.color,
                                this.faker.vehicle.fuel,
                                this.faker.vehicle.manufacturer,
                                this.faker.vehicle.type,
                                this.faker.word.adjective,
                                this.faker.word.adverb,
                                this.faker.word.conjunction,
                                this.faker.word.interjection,
                                this.faker.word.noun,
                                this.faker.word.preposition,
                                this.faker.word.verb,
                            ],
                            a = [
                                '!',
                                '#',
                                '%',
                                '&',
                                '*',
                                ')',
                                '(',
                                '+',
                                '=',
                                '.',
                                '<',
                                '>',
                                '{',
                                '}',
                                '[',
                                ']',
                                ':',
                                ';',
                                "'",
                                '"',
                                '_',
                                '-',
                            ],
                            t,
                            r = 0;
                        do {
                            let a = this.faker.helpers.arrayElement(e);
                            try {
                                t = a();
                            } catch {
                                if (++r > 100) throw new l('No matching word data available for the current locale');
                                continue;
                            }
                        } while (!t || a.some((e) => t.includes(e)));
                        return this.faker.helpers.arrayElement(t.split(' '));
                    }
                    words(e = {min: 1, max: 3}) {
                        return (
                            E({
                                deprecated: 'faker.random.words()',
                                proposed: 'faker.lorem.words() or faker.word.words()',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.helpers.multiple(this.word, {count: e}).join(' ')
                        );
                    }
                    locale() {
                        throw new l(
                            'This method has been removed. Please use `faker.helpers.objectKey(allLocales/allFakers)` instead.',
                        );
                    }
                    alpha(e = {}) {
                        return (
                            E({
                                deprecated: 'faker.random.alpha()',
                                proposed: 'faker.string.alpha()',
                                since: '8.0',
                                until: '9.0',
                            }),
                            'number' == typeof e
                                ? this.faker.string.alpha(e)
                                : this.faker.string.alpha({length: e.count, casing: e.casing, exclude: e.bannedChars})
                        );
                    }
                    alphaNumeric(e = 1, a = {}) {
                        return (
                            E({
                                deprecated: 'faker.random.alphaNumeric()',
                                proposed: 'faker.string.alphanumeric()',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.string.alphanumeric({length: e, exclude: a.bannedChars, casing: a.casing})
                        );
                    }
                    numeric(e = 1, a = {}) {
                        return (
                            E({
                                deprecated: 'faker.random.numeric()',
                                proposed: 'faker.string.numeric()',
                                since: '8.0',
                                until: '9.0',
                            }),
                            this.faker.string.numeric({
                                length: e,
                                allowLeadingZeros: a.allowLeadingZeros,
                                exclude: a.bannedDigits,
                            })
                        );
                    }
                },
                ec = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(ec.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    chemicalElement() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.science.chemicalElement);
                    }
                    unit() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.science.unit);
                    }
                },
                el = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
                eh = 'abcdefghijklmnopqrstuvwxyz'.split(''),
                ep = '0123456789'.split(''),
                eu = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(eu.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    fromCharacters(e, a = 1) {
                        if ((a = this.faker.helpers.rangeToNumber(a)) <= 0) return '';
                        if (('string' == typeof e && (e = e.split('')), 0 === e.length))
                            throw new l('Unable to generate string: No characters to select from.');
                        return this.faker.helpers
                            .multiple(() => this.faker.helpers.arrayElement(e), {count: a})
                            .join('');
                    }
                    alpha(e = {}) {
                        var a;
                        let t;
                        'number' == typeof e && (e = {length: e});
                        let r = this.faker.helpers.rangeToNumber(null != (a = e.length) ? a : 1);
                        if (r <= 0) return '';
                        let {casing: i = 'mixed'} = e,
                            {exclude: n = []} = e;
                        switch (('string' == typeof n && (n = n.split('')), i)) {
                            case 'upper':
                                t = [...el];
                                break;
                            case 'lower':
                                t = [...eh];
                                break;
                            default:
                                t = [...eh, ...el];
                        }
                        return ((t = t.filter((e) => !n.includes(e))), this.fromCharacters(t, r));
                    }
                    alphanumeric(e = {}) {
                        var a;
                        'number' == typeof e && (e = {length: e});
                        let t = this.faker.helpers.rangeToNumber(null != (a = e.length) ? a : 1);
                        if (t <= 0) return '';
                        let {casing: r = 'mixed'} = e,
                            {exclude: i = []} = e;
                        'string' == typeof i && (i = i.split(''));
                        let n = [...ep];
                        switch (r) {
                            case 'upper':
                                n.push(...el);
                                break;
                            case 'lower':
                                n.push(...eh);
                                break;
                            default:
                                n.push(...eh, ...el);
                        }
                        return ((n = n.filter((e) => !i.includes(e))), this.fromCharacters(n, t));
                    }
                    binary(e = {}) {
                        var a;
                        let {prefix: t = '0b'} = e;
                        return t + this.fromCharacters(['0', '1'], null != (a = e.length) ? a : 1);
                    }
                    octal(e = {}) {
                        var a;
                        let {prefix: t = '0o'} = e;
                        return (
                            t +
                            this.fromCharacters(
                                ['0', '1', '2', '3', '4', '5', '6', '7'],
                                null != (a = e.length) ? a : 1,
                            )
                        );
                    }
                    hexadecimal(e = {}) {
                        var a;
                        let {casing: t = 'mixed', prefix: r = '0x'} = e,
                            i = this.faker.helpers.rangeToNumber(null != (a = e.length) ? a : 1);
                        if (i <= 0) return r;
                        let n = this.fromCharacters(
                            [
                                '0',
                                '1',
                                '2',
                                '3',
                                '4',
                                '5',
                                '6',
                                '7',
                                '8',
                                '9',
                                'a',
                                'b',
                                'c',
                                'd',
                                'e',
                                'f',
                                'A',
                                'B',
                                'C',
                                'D',
                                'E',
                                'F',
                            ],
                            i,
                        );
                        return (
                            'upper' === t ? (n = n.toUpperCase()) : 'lower' === t && (n = n.toLowerCase()),
                            `${r}${n}`
                        );
                    }
                    numeric(e = {}) {
                        var a;
                        'number' == typeof e && (e = {length: e});
                        let t = this.faker.helpers.rangeToNumber(null != (a = e.length) ? a : 1);
                        if (t <= 0) return '';
                        let {allowLeadingZeros: r = !0} = e,
                            {exclude: i = []} = e;
                        'string' == typeof i && (i = i.split(''));
                        let n = ep.filter((e) => !i.includes(e));
                        if (0 === n.length || (1 === n.length && !r && '0' === n[0]))
                            throw new l('Unable to generate numeric string, because all possible digits are excluded.');
                        let s = '';
                        return (
                            r || i.includes('0') || (s += this.faker.helpers.arrayElement(n.filter((e) => '0' !== e))),
                            (s += this.fromCharacters(n, t - s.length))
                        );
                    }
                    sample(e = 10) {
                        (e = this.faker.helpers.rangeToNumber(e)) >= 1048576 && (e = 1048576);
                        let a = {min: 33, max: 125},
                            t = '';
                        for (; t.length < e; ) t += String.fromCharCode(this.faker.number.int(a));
                        return t;
                    }
                    uuid() {
                        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
                            .replace(/x/g, () => this.faker.number.hex({min: 0, max: 15}))
                            .replace(/y/g, () => this.faker.number.hex({min: 8, max: 11}));
                    }
                    nanoid(e = 21) {
                        if ((e = this.faker.helpers.rangeToNumber(e)) <= 0) return '';
                        let a = [
                                {value: () => this.alphanumeric(1), weight: 62},
                                {value: () => this.faker.helpers.arrayElement(['_', '-']), weight: 2},
                            ],
                            t = '';
                        for (; t.length < e; ) t += this.faker.helpers.weightedArrayElement(a)();
                        return t;
                    }
                    symbol(e = 1) {
                        return this.fromCharacters(
                            [
                                '!',
                                '"',
                                '#',
                                '$',
                                '%',
                                '&',
                                "'",
                                '(',
                                ')',
                                '*',
                                '+',
                                ',',
                                '-',
                                '.',
                                '/',
                                ':',
                                ';',
                                '<',
                                '=',
                                '>',
                                '?',
                                '@',
                                '[',
                                '\\',
                                ']',
                                '^',
                                '_',
                                '`',
                                '{',
                                '|',
                                '}',
                                '~',
                            ],
                            e,
                        );
                    }
                },
                em = ['video', 'audio', 'image', 'text', 'application'],
                ef = [
                    'application/pdf',
                    'audio/mpeg',
                    'audio/wav',
                    'image/png',
                    'image/jpeg',
                    'image/gif',
                    'video/mp4',
                    'video/mpeg',
                    'text/html',
                ],
                ed = ['en', 'wl', 'ww'],
                eb = {index: 'o', slot: 's', mac: 'x', pci: 'p'},
                ek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
                ey = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(ey.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    fileName(e = {}) {
                        let {extensionCount: a = 1} = e,
                            t = this.faker.word.words().toLowerCase().replace(/\W/g, '_'),
                            r = this.faker.helpers.multiple(() => this.fileExt(), {count: a}).join('.');
                        return 0 === r.length ? t : `${t}.${r}`;
                    }
                    commonFileName(e) {
                        return `${this.fileName({extensionCount: 0})}.${e || this.commonFileExt()}`;
                    }
                    mimeType() {
                        let e = Object.keys(this.faker.definitions.system.mimeTypes);
                        return this.faker.helpers.arrayElement(e);
                    }
                    commonFileType() {
                        return this.faker.helpers.arrayElement(em);
                    }
                    commonFileExt() {
                        return this.fileExt(this.faker.helpers.arrayElement(ef));
                    }
                    fileType() {
                        let e = new Set();
                        Object.keys(this.faker.definitions.system.mimeTypes).forEach((a) => {
                            let t = a.split('/')[0];
                            e.add(t);
                        });
                        let a = Array.from(e);
                        return this.faker.helpers.arrayElement(a);
                    }
                    fileExt(e) {
                        if ('string' == typeof e) {
                            let a = this.faker.definitions.system.mimeTypes;
                            return this.faker.helpers.arrayElement(a[e].extensions);
                        }
                        let a = this.faker.definitions.system.mimeTypes,
                            t = new Set();
                        Object.keys(a).forEach((e) => {
                            a[e].extensions instanceof Array &&
                                a[e].extensions.forEach((e) => {
                                    t.add(e);
                                });
                        });
                        let r = Array.from(t);
                        return this.faker.helpers.arrayElement(r);
                    }
                    directoryPath() {
                        let e = this.faker.definitions.system.directoryPaths;
                        return this.faker.helpers.arrayElement(e);
                    }
                    filePath() {
                        return `${this.directoryPath()}/${this.fileName()}`;
                    }
                    semver() {
                        return [this.faker.number.int(9), this.faker.number.int(9), this.faker.number.int(9)].join('.');
                    }
                    networkInterface(e = {}) {
                        var a, t, r, i, n;
                        let {
                                interfaceType: s = this.faker.helpers.arrayElement(ed),
                                interfaceSchema: o = this.faker.helpers.objectKey(eb),
                            } = e,
                            c,
                            l = '',
                            h = () => this.faker.string.numeric({allowLeadingZeros: !0});
                        switch (o) {
                            case 'index':
                                c = h();
                                break;
                            case 'slot':
                                c = `${h()}${null != (a = this.faker.helpers.maybe(() => `f${h()}`)) ? a : ''}${null != (t = this.faker.helpers.maybe(() => `d${h()}`)) ? t : ''}`;
                                break;
                            case 'mac':
                                c = this.faker.internet.mac('');
                                break;
                            case 'pci':
                                ((l = null != (r = this.faker.helpers.maybe(() => `P${h()}`)) ? r : ''),
                                    (c = `${h()}s${h()}${null != (i = this.faker.helpers.maybe(() => `f${h()}`)) ? i : ''}${null != (n = this.faker.helpers.maybe(() => `d${h()}`)) ? n : ''}`));
                        }
                        return `${l}${s}${eb[o]}${c}`;
                    }
                    cron(e = {}) {
                        let {includeYear: a = !1, includeNonStandard: t = !1} = e,
                            r = [this.faker.number.int(59), '*'],
                            i = [this.faker.number.int(23), '*'],
                            n = [this.faker.number.int({min: 1, max: 31}), '*', '?'],
                            s = [this.faker.number.int({min: 1, max: 12}), '*'],
                            o = [this.faker.number.int(6), this.faker.helpers.arrayElement(ek), '*', '?'],
                            c = [this.faker.number.int({min: 1970, max: 2099}), '*'],
                            l = this.faker.helpers.arrayElement(r),
                            h = this.faker.helpers.arrayElement(i),
                            p = this.faker.helpers.arrayElement(n),
                            u = this.faker.helpers.arrayElement(s),
                            m = this.faker.helpers.arrayElement(o),
                            f = this.faker.helpers.arrayElement(c),
                            d = `${l} ${h} ${p} ${u} ${m}`;
                        return (
                            a && (d += ` ${f}`),
                            !t || this.faker.datatype.boolean()
                                ? d
                                : this.faker.helpers.arrayElement([
                                      '@annually',
                                      '@daily',
                                      '@hourly',
                                      '@monthly',
                                      '@reboot',
                                      '@weekly',
                                      '@yearly',
                                  ])
                        );
                    }
                },
                eg = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(eg.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    vehicle() {
                        return `${this.manufacturer()} ${this.model()}`;
                    }
                    manufacturer() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.manufacturer);
                    }
                    model() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.model);
                    }
                    type() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.type);
                    }
                    fuel() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.fuel);
                    }
                    vin() {
                        let e = ['o', 'i', 'q', 'O', 'I', 'Q'];
                        return `${this.faker.string.alphanumeric({length: 10, casing: 'upper', exclude: e})}${this.faker.string.alpha({length: 1, casing: 'upper', exclude: e})}${this.faker.string.alphanumeric({length: 1, casing: 'upper', exclude: e})}${this.faker.number.int({min: 1e4, max: 99999})}`;
                    }
                    color() {
                        return this.faker.color.human();
                    }
                    vrm() {
                        return `${this.faker.string.alpha({length: 2, casing: 'upper'})}${this.faker.string.numeric({length: 2, allowLeadingZeros: !0})}${this.faker.string.alpha({length: 3, casing: 'upper'})}`;
                    }
                    bicycle() {
                        return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.bicycle_type);
                    }
                },
                eA = class {
                    constructor(e) {
                        for (let a of ((this.faker = e), Object.getOwnPropertyNames(eA.prototype)))
                            'constructor' === a || 'function' != typeof this[a] || (this[a] = this[a].bind(this));
                    }
                    adjective(e = {}) {
                        let a = 'number' == typeof e ? {length: e} : e;
                        return this.faker.helpers.arrayElement(
                            et({...a, wordList: this.faker.definitions.word.adjective}),
                        );
                    }
                    adverb(e = {}) {
                        let a = 'number' == typeof e ? {length: e} : e;
                        return this.faker.helpers.arrayElement(
                            et({...a, wordList: this.faker.definitions.word.adverb}),
                        );
                    }
                    conjunction(e = {}) {
                        let a = 'number' == typeof e ? {length: e} : e;
                        return this.faker.helpers.arrayElement(
                            et({...a, wordList: this.faker.definitions.word.conjunction}),
                        );
                    }
                    interjection(e = {}) {
                        let a = 'number' == typeof e ? {length: e} : e;
                        return this.faker.helpers.arrayElement(
                            et({...a, wordList: this.faker.definitions.word.interjection}),
                        );
                    }
                    noun(e = {}) {
                        let a = 'number' == typeof e ? {length: e} : e;
                        return this.faker.helpers.arrayElement(et({...a, wordList: this.faker.definitions.word.noun}));
                    }
                    preposition(e = {}) {
                        let a = 'number' == typeof e ? {length: e} : e;
                        return this.faker.helpers.arrayElement(
                            et({...a, wordList: this.faker.definitions.word.preposition}),
                        );
                    }
                    verb(e = {}) {
                        let a = 'number' == typeof e ? {length: e} : e;
                        return this.faker.helpers.arrayElement(et({...a, wordList: this.faker.definitions.word.verb}));
                    }
                    sample(e = {}) {
                        for (let a of this.faker.helpers.shuffle([
                            this.adjective,
                            this.adverb,
                            this.conjunction,
                            this.interjection,
                            this.noun,
                            this.preposition,
                            this.verb,
                        ]))
                            try {
                                return a(e);
                            } catch {
                                continue;
                            }
                        throw new l('No matching word data available for the current locale');
                    }
                    words(e = {}) {
                        'number' == typeof e && (e = {count: e});
                        let {count: a = {min: 1, max: 3}} = e;
                        return this.faker.helpers.multiple(() => this.sample(), {count: a}).join(' ');
                    }
                },
                ex = class {
                    constructor(e) {
                        var a;
                        let t, r;
                        ((this._defaultRefDate = () => new Date()),
                            (this._mersenne =
                                ((t = new N()).initGenrand(Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER)),
                                {
                                    next: () => t.genrandReal2(),
                                    seed(e) {
                                        'number' == typeof e
                                            ? t.initGenrand(e)
                                            : Array.isArray(e) && t.initByArray(e, e.length);
                                    },
                                })),
                            (this.random = new eo(this)),
                            (this.helpers = new K(this)),
                            (this.datatype = new T(this)),
                            (this.airline = new d(this)),
                            (this.animal = new M(this)),
                            (this.color = new g(this)),
                            (this.commerce = new v(this)),
                            (this.company = new C(this)),
                            (this.database = new $(this)),
                            (this.date = new L(this)),
                            (this.finance = new I(this)),
                            (this.git = new G(this)),
                            (this.hacker = new _(this)),
                            (this.image = new V(this)),
                            (this.internet = new q(this)),
                            (this.location = new ee(this)),
                            (this.lorem = new er(this)),
                            (this.music = new ei(this)),
                            (this.person = new w(this)),
                            (this.number = new en(this)),
                            (this.phone = new es(this)),
                            (this.science = new ec(this)),
                            (this.string = new eu(this)),
                            (this.system = new ey(this)),
                            (this.vehicle = new eg(this)),
                            (this.word = new eA(this)));
                        let {locales: i} = e;
                        if (null != i) {
                            E({
                                deprecated: "new Faker({ locales: {a, b}, locale: 'a', localeFallback: 'b' })",
                                proposed: 'new Faker({ locale: [a, b, ...] }) or new Faker({ locale: a })',
                                since: '8.0',
                                until: '9.0',
                            });
                            let {locale: a = 'en', localeFallback: t = 'en'} = e;
                            e = {locale: [i[a], i[t]]};
                        }
                        let {locale: n} = e;
                        if (Array.isArray(n)) {
                            if (0 === n.length)
                                throw new l('The locale option must contain at least one locale definition.');
                            n = (function (e) {
                                let a = {};
                                for (let t of e)
                                    for (let e in t) {
                                        let r = t[e];
                                        void 0 === a[e] ? (a[e] = {...r}) : (a[e] = {...r, ...a[e]});
                                    }
                                return a;
                            })(n);
                        }
                        ((this.rawDefinitions = n),
                            (this.definitions =
                                ((a = this.rawDefinitions),
                                (r = {}),
                                new Proxy(a, {
                                    has: () => !0,
                                    get: (e, a) =>
                                        'symbol' == typeof a || 'nodeType' === a
                                            ? e[a]
                                            : a in r
                                              ? r[a]
                                              : (r[a] = (function (e, a = {}) {
                                                    return new Proxy(a, {
                                                        has: (e, a) => null != e[a],
                                                        get(a, t) {
                                                            let r = a[t];
                                                            if ('symbol' == typeof t || 'nodeType' === t) return r;
                                                            if (null === r)
                                                                throw new l(`The locale data for '${e}.${t.toString()}' aren't applicable to this locale.
  If you think this is a bug, please report it at: https://github.com/faker-js/faker`);
                                                            if (void 0 === r)
                                                                throw new l(`The locale data for '${e}.${t.toString()}' are missing in this locale.
  Please contribute the missing data to the project or use a locale/Faker instance that has these data.
  For more information see https://fakerjs.dev/guide/localization.html`);
                                                            return r;
                                                        },
                                                        set: S,
                                                        deleteProperty: S,
                                                    });
                                                })(a, e[a])),
                                    set: S,
                                    deleteProperty: S,
                                }))));
                    }
                    get defaultRefDate() {
                        return this._defaultRefDate;
                    }
                    setDefaultRefDate(e = () => new Date()) {
                        'function' == typeof e
                            ? (this._defaultRefDate = e)
                            : (this._defaultRefDate = () => new Date(e));
                    }
                    get address() {
                        return (
                            E({deprecated: 'faker.address', proposed: 'faker.location', since: '8.0', until: '10.0'}),
                            this.location
                        );
                    }
                    get name() {
                        return (
                            E({deprecated: 'faker.name', proposed: 'faker.person', since: '8.0', until: '10.0'}),
                            this.person
                        );
                    }
                    seed(e = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER)) {
                        return (this._mersenne.seed(e), e);
                    }
                    get locales() {
                        throw new l('The locales property has been removed. Please use the constructor instead.');
                    }
                    set locales(e) {
                        throw new l('The locales property has been removed. Please use the constructor instead.');
                    }
                    get locale() {
                        throw new l('The locale property has been removed. Please use the constructor instead.');
                    }
                    set locale(e) {
                        throw new l('The locale property has been removed. Please use the constructor instead.');
                    }
                    get localeFallback() {
                        throw new l(
                            'The localeFallback property has been removed. Please use the constructor instead.',
                        );
                    }
                    set localeFallback(e) {
                        throw new l(
                            'The localeFallback property has been removed. Please use the constructor instead.',
                        );
                    }
                    setLocale() {
                        throw new l('This method has been removed. Please use the constructor instead.');
                    }
                },
                ew = {
                    color: {
                        space: [
                            'CIE 1931 XYZ',
                            'CIEUVW',
                            'Uniform Color Spaces (UCSs)',
                            'CIELUV',
                            'CIELAB',
                            'HSLuv',
                            'sRGB',
                            'Adobe RGB',
                            'Adobe Wide Gamut RGB',
                            'Rec. 2100',
                            'ProPhoto RGB Color Space',
                            'scRGB',
                            'DCI-P3',
                            'Display-P3',
                            'Rec. 601',
                            'Rec. 709',
                            'Academy Color Encoding System (ACES)',
                            'Rec. 2020',
                            'YPbPr',
                            'YDbDr',
                            'YIQ',
                            'xvYCC',
                            'sYCC',
                            'HSV',
                            'HSL',
                            'HWB',
                            'RGBA',
                            'HSLA',
                            'LCh',
                            'CMY',
                            'CMYK',
                            'Munsell Color System',
                            'Natural Color System (NSC)',
                            'Pantone Matching System (PMS)',
                            'RAL',
                            'Federal Standard 595C',
                            'British Standard Colour (BS)',
                            'HKS',
                            'LMS',
                            'RG',
                            'RGK',
                        ],
                    },
                    database: {
                        collation: [
                            'utf8_unicode_ci',
                            'utf8_general_ci',
                            'utf8_bin',
                            'ascii_bin',
                            'ascii_general_ci',
                            'cp1250_bin',
                            'cp1250_general_ci',
                        ],
                        engine: ['InnoDB', 'MyISAM', 'MEMORY', 'CSV', 'BLACKHOLE', 'ARCHIVE'],
                        type: [
                            'int',
                            'varchar',
                            'text',
                            'date',
                            'datetime',
                            'tinyint',
                            'time',
                            'timestamp',
                            'smallint',
                            'mediumint',
                            'bigint',
                            'decimal',
                            'float',
                            'double',
                            'real',
                            'bit',
                            'boolean',
                            'serial',
                            'blob',
                            'binary',
                            'enum',
                            'set',
                            'geometry',
                            'point',
                        ],
                    },
                    hacker: {
                        abbreviation: [
                            'ADP',
                            'AGP',
                            'AI',
                            'API',
                            'ASCII',
                            'CLI',
                            'COM',
                            'CSS',
                            'DNS',
                            'DRAM',
                            'EXE',
                            'FTP',
                            'GB',
                            'HDD',
                            'HEX',
                            'HTTP',
                            'IB',
                            'IP',
                            'JBOD',
                            'JSON',
                            'OCR',
                            'PCI',
                            'PNG',
                            'RAM',
                            'RSS',
                            'SAS',
                            'SCSI',
                            'SDD',
                            'SMS',
                            'SMTP',
                            'SQL',
                            'SSD',
                            'SSL',
                            'TCP',
                            'THX',
                            'TLS',
                            'UDP',
                            'USB',
                            'UTF8',
                            'VGA',
                            'XML',
                            'XSS',
                        ],
                    },
                    internet: {
                        emoji: {
                            smiley: [
                                '\uD83D\uDE00',
                                '\uD83D\uDE03',
                                '\uD83D\uDE04',
                                '\uD83D\uDE01',
                                '\uD83D\uDE06',
                                '\uD83D\uDE05',
                                '\uD83E\uDD23',
                                '\uD83D\uDE02',
                                '\uD83D\uDE42',
                                '\uD83D\uDE43',
                                '\uD83D\uDE09',
                                '\uD83D\uDE0A',
                                '\uD83D\uDE07',
                                '\uD83E\uDD70',
                                '\uD83D\uDE0D',
                                '\uD83E\uDD29',
                                '\uD83D\uDE18',
                                '\uD83D\uDE17',
                                '☺️',
                                '\uD83D\uDE1A',
                                '\uD83D\uDE19',
                                '\uD83E\uDD72',
                                '\uD83D\uDE0B',
                                '\uD83D\uDE1B',
                                '\uD83D\uDE1C',
                                '\uD83E\uDD2A',
                                '\uD83D\uDE1D',
                                '\uD83E\uDD11',
                                '\uD83E\uDD17',
                                '\uD83E\uDD2D',
                                '\uD83E\uDD2B',
                                '\uD83E\uDD14',
                                '\uD83E\uDD10',
                                '\uD83E\uDD28',
                                '\uD83D\uDE10',
                                '\uD83D\uDE11',
                                '\uD83D\uDE36',
                                '\uD83D\uDE36‍\uD83C\uDF2B️',
                                '\uD83D\uDE0F',
                                '\uD83D\uDE12',
                                '\uD83D\uDE44',
                                '\uD83D\uDE2C',
                                '\uD83D\uDE2E‍\uD83D\uDCA8',
                                '\uD83E\uDD25',
                                '\uD83D\uDE0C',
                                '\uD83D\uDE14',
                                '\uD83D\uDE2A',
                                '\uD83E\uDD24',
                                '\uD83D\uDE34',
                                '\uD83D\uDE37',
                                '\uD83E\uDD12',
                                '\uD83E\uDD15',
                                '\uD83E\uDD22',
                                '\uD83E\uDD2E',
                                '\uD83E\uDD27',
                                '\uD83E\uDD75',
                                '\uD83E\uDD76',
                                '\uD83E\uDD74',
                                '\uD83D\uDE35',
                                '\uD83D\uDE35‍\uD83D\uDCAB',
                                '\uD83E\uDD2F',
                                '\uD83E\uDD20',
                                '\uD83E\uDD73',
                                '\uD83E\uDD78',
                                '\uD83D\uDE0E',
                                '\uD83E\uDD13',
                                '\uD83E\uDDD0',
                                '\uD83D\uDE15',
                                '\uD83D\uDE1F',
                                '\uD83D\uDE41',
                                '☹️',
                                '\uD83D\uDE2E',
                                '\uD83D\uDE2F',
                                '\uD83D\uDE32',
                                '\uD83D\uDE33',
                                '\uD83E\uDD7A',
                                '\uD83D\uDE26',
                                '\uD83D\uDE27',
                                '\uD83D\uDE28',
                                '\uD83D\uDE30',
                                '\uD83D\uDE25',
                                '\uD83D\uDE22',
                                '\uD83D\uDE2D',
                                '\uD83D\uDE31',
                                '\uD83D\uDE16',
                                '\uD83D\uDE23',
                                '\uD83D\uDE1E',
                                '\uD83D\uDE13',
                                '\uD83D\uDE29',
                                '\uD83D\uDE2B',
                                '\uD83E\uDD71',
                                '\uD83D\uDE24',
                                '\uD83D\uDE21',
                                '\uD83D\uDE20',
                                '\uD83E\uDD2C',
                                '\uD83D\uDE08',
                                '\uD83D\uDC7F',
                                '\uD83D\uDC80',
                                '☠️',
                                '\uD83D\uDCA9',
                                '\uD83E\uDD21',
                                '\uD83D\uDC79',
                                '\uD83D\uDC7A',
                                '\uD83D\uDC7B',
                                '\uD83D\uDC7D',
                                '\uD83D\uDC7E',
                                '\uD83E\uDD16',
                                '\uD83D\uDE3A',
                                '\uD83D\uDE38',
                                '\uD83D\uDE39',
                                '\uD83D\uDE3B',
                                '\uD83D\uDE3C',
                                '\uD83D\uDE3D',
                                '\uD83D\uDE40',
                                '\uD83D\uDE3F',
                                '\uD83D\uDE3E',
                                '\uD83D\uDE48',
                                '\uD83D\uDE49',
                                '\uD83D\uDE4A',
                                '\uD83D\uDC8B',
                                '\uD83D\uDC8C',
                                '\uD83D\uDC98',
                                '\uD83D\uDC9D',
                                '\uD83D\uDC96',
                                '\uD83D\uDC97',
                                '\uD83D\uDC93',
                                '\uD83D\uDC9E',
                                '\uD83D\uDC95',
                                '\uD83D\uDC9F',
                                '❣️',
                                '\uD83D\uDC94',
                                '❤️‍\uD83D\uDD25',
                                '❤️‍\uD83E\uDE79',
                                '❤️',
                                '\uD83E\uDDE1',
                                '\uD83D\uDC9B',
                                '\uD83D\uDC9A',
                                '\uD83D\uDC99',
                                '\uD83D\uDC9C',
                                '\uD83E\uDD0E',
                                '\uD83D\uDDA4',
                                '\uD83E\uDD0D',
                                '\uD83D\uDCAF',
                                '\uD83D\uDCA2',
                                '\uD83D\uDCA5',
                                '\uD83D\uDCAB',
                                '\uD83D\uDCA6',
                                '\uD83D\uDCA8',
                                '\uD83D\uDD73️',
                                '\uD83D\uDCA3',
                                '\uD83D\uDCAC',
                                '\uD83D\uDC41️‍\uD83D\uDDE8️',
                                '\uD83D\uDDE8️',
                                '\uD83D\uDDEF️',
                                '\uD83D\uDCAD',
                                '\uD83D\uDCA4',
                            ],
                            body: [
                                '\uD83D\uDC4B',
                                '\uD83D\uDC4B\uD83C\uDFFB',
                                '\uD83D\uDC4B\uD83C\uDFFC',
                                '\uD83D\uDC4B\uD83C\uDFFD',
                                '\uD83D\uDC4B\uD83C\uDFFE',
                                '\uD83D\uDC4B\uD83C\uDFFF',
                                '\uD83E\uDD1A',
                                '\uD83E\uDD1A\uD83C\uDFFB',
                                '\uD83E\uDD1A\uD83C\uDFFC',
                                '\uD83E\uDD1A\uD83C\uDFFD',
                                '\uD83E\uDD1A\uD83C\uDFFE',
                                '\uD83E\uDD1A\uD83C\uDFFF',
                                '\uD83D\uDD90️',
                                '\uD83D\uDD90\uD83C\uDFFB',
                                '\uD83D\uDD90\uD83C\uDFFC',
                                '\uD83D\uDD90\uD83C\uDFFD',
                                '\uD83D\uDD90\uD83C\uDFFE',
                                '\uD83D\uDD90\uD83C\uDFFF',
                                '✋',
                                '✋\uD83C\uDFFB',
                                '✋\uD83C\uDFFC',
                                '✋\uD83C\uDFFD',
                                '✋\uD83C\uDFFE',
                                '✋\uD83C\uDFFF',
                                '\uD83D\uDD96',
                                '\uD83D\uDD96\uD83C\uDFFB',
                                '\uD83D\uDD96\uD83C\uDFFC',
                                '\uD83D\uDD96\uD83C\uDFFD',
                                '\uD83D\uDD96\uD83C\uDFFE',
                                '\uD83D\uDD96\uD83C\uDFFF',
                                '\uD83D\uDC4C',
                                '\uD83D\uDC4C\uD83C\uDFFB',
                                '\uD83D\uDC4C\uD83C\uDFFC',
                                '\uD83D\uDC4C\uD83C\uDFFD',
                                '\uD83D\uDC4C\uD83C\uDFFE',
                                '\uD83D\uDC4C\uD83C\uDFFF',
                                '\uD83E\uDD0C',
                                '\uD83E\uDD0C\uD83C\uDFFB',
                                '\uD83E\uDD0C\uD83C\uDFFC',
                                '\uD83E\uDD0C\uD83C\uDFFD',
                                '\uD83E\uDD0C\uD83C\uDFFE',
                                '\uD83E\uDD0C\uD83C\uDFFF',
                                '\uD83E\uDD0F',
                                '\uD83E\uDD0F\uD83C\uDFFB',
                                '\uD83E\uDD0F\uD83C\uDFFC',
                                '\uD83E\uDD0F\uD83C\uDFFD',
                                '\uD83E\uDD0F\uD83C\uDFFE',
                                '\uD83E\uDD0F\uD83C\uDFFF',
                                '✌️',
                                '✌\uD83C\uDFFB',
                                '✌\uD83C\uDFFC',
                                '✌\uD83C\uDFFD',
                                '✌\uD83C\uDFFE',
                                '✌\uD83C\uDFFF',
                                '\uD83E\uDD1E',
                                '\uD83E\uDD1E\uD83C\uDFFB',
                                '\uD83E\uDD1E\uD83C\uDFFC',
                                '\uD83E\uDD1E\uD83C\uDFFD',
                                '\uD83E\uDD1E\uD83C\uDFFE',
                                '\uD83E\uDD1E\uD83C\uDFFF',
                                '\uD83E\uDD1F',
                                '\uD83E\uDD1F\uD83C\uDFFB',
                                '\uD83E\uDD1F\uD83C\uDFFC',
                                '\uD83E\uDD1F\uD83C\uDFFD',
                                '\uD83E\uDD1F\uD83C\uDFFE',
                                '\uD83E\uDD1F\uD83C\uDFFF',
                                '\uD83E\uDD18',
                                '\uD83E\uDD18\uD83C\uDFFB',
                                '\uD83E\uDD18\uD83C\uDFFC',
                                '\uD83E\uDD18\uD83C\uDFFD',
                                '\uD83E\uDD18\uD83C\uDFFE',
                                '\uD83E\uDD18\uD83C\uDFFF',
                                '\uD83E\uDD19',
                                '\uD83E\uDD19\uD83C\uDFFB',
                                '\uD83E\uDD19\uD83C\uDFFC',
                                '\uD83E\uDD19\uD83C\uDFFD',
                                '\uD83E\uDD19\uD83C\uDFFE',
                                '\uD83E\uDD19\uD83C\uDFFF',
                                '\uD83D\uDC48',
                                '\uD83D\uDC48\uD83C\uDFFB',
                                '\uD83D\uDC48\uD83C\uDFFC',
                                '\uD83D\uDC48\uD83C\uDFFD',
                                '\uD83D\uDC48\uD83C\uDFFE',
                                '\uD83D\uDC48\uD83C\uDFFF',
                                '\uD83D\uDC49',
                                '\uD83D\uDC49\uD83C\uDFFB',
                                '\uD83D\uDC49\uD83C\uDFFC',
                                '\uD83D\uDC49\uD83C\uDFFD',
                                '\uD83D\uDC49\uD83C\uDFFE',
                                '\uD83D\uDC49\uD83C\uDFFF',
                                '\uD83D\uDC46',
                                '\uD83D\uDC46\uD83C\uDFFB',
                                '\uD83D\uDC46\uD83C\uDFFC',
                                '\uD83D\uDC46\uD83C\uDFFD',
                                '\uD83D\uDC46\uD83C\uDFFE',
                                '\uD83D\uDC46\uD83C\uDFFF',
                                '\uD83D\uDD95',
                                '\uD83D\uDD95\uD83C\uDFFB',
                                '\uD83D\uDD95\uD83C\uDFFC',
                                '\uD83D\uDD95\uD83C\uDFFD',
                                '\uD83D\uDD95\uD83C\uDFFE',
                                '\uD83D\uDD95\uD83C\uDFFF',
                                '\uD83D\uDC47',
                                '\uD83D\uDC47\uD83C\uDFFB',
                                '\uD83D\uDC47\uD83C\uDFFC',
                                '\uD83D\uDC47\uD83C\uDFFD',
                                '\uD83D\uDC47\uD83C\uDFFE',
                                '\uD83D\uDC47\uD83C\uDFFF',
                                '☝️',
                                '☝\uD83C\uDFFB',
                                '☝\uD83C\uDFFC',
                                '☝\uD83C\uDFFD',
                                '☝\uD83C\uDFFE',
                                '☝\uD83C\uDFFF',
                                '\uD83D\uDC4D',
                                '\uD83D\uDC4D\uD83C\uDFFB',
                                '\uD83D\uDC4D\uD83C\uDFFC',
                                '\uD83D\uDC4D\uD83C\uDFFD',
                                '\uD83D\uDC4D\uD83C\uDFFE',
                                '\uD83D\uDC4D\uD83C\uDFFF',
                                '\uD83D\uDC4E',
                                '\uD83D\uDC4E\uD83C\uDFFB',
                                '\uD83D\uDC4E\uD83C\uDFFC',
                                '\uD83D\uDC4E\uD83C\uDFFD',
                                '\uD83D\uDC4E\uD83C\uDFFE',
                                '\uD83D\uDC4E\uD83C\uDFFF',
                                '✊',
                                '✊\uD83C\uDFFB',
                                '✊\uD83C\uDFFC',
                                '✊\uD83C\uDFFD',
                                '✊\uD83C\uDFFE',
                                '✊\uD83C\uDFFF',
                                '\uD83D\uDC4A',
                                '\uD83D\uDC4A\uD83C\uDFFB',
                                '\uD83D\uDC4A\uD83C\uDFFC',
                                '\uD83D\uDC4A\uD83C\uDFFD',
                                '\uD83D\uDC4A\uD83C\uDFFE',
                                '\uD83D\uDC4A\uD83C\uDFFF',
                                '\uD83E\uDD1B',
                                '\uD83E\uDD1B\uD83C\uDFFB',
                                '\uD83E\uDD1B\uD83C\uDFFC',
                                '\uD83E\uDD1B\uD83C\uDFFD',
                                '\uD83E\uDD1B\uD83C\uDFFE',
                                '\uD83E\uDD1B\uD83C\uDFFF',
                                '\uD83E\uDD1C',
                                '\uD83E\uDD1C\uD83C\uDFFB',
                                '\uD83E\uDD1C\uD83C\uDFFC',
                                '\uD83E\uDD1C\uD83C\uDFFD',
                                '\uD83E\uDD1C\uD83C\uDFFE',
                                '\uD83E\uDD1C\uD83C\uDFFF',
                                '\uD83D\uDC4F',
                                '\uD83D\uDC4F\uD83C\uDFFB',
                                '\uD83D\uDC4F\uD83C\uDFFC',
                                '\uD83D\uDC4F\uD83C\uDFFD',
                                '\uD83D\uDC4F\uD83C\uDFFE',
                                '\uD83D\uDC4F\uD83C\uDFFF',
                                '\uD83D\uDE4C',
                                '\uD83D\uDE4C\uD83C\uDFFB',
                                '\uD83D\uDE4C\uD83C\uDFFC',
                                '\uD83D\uDE4C\uD83C\uDFFD',
                                '\uD83D\uDE4C\uD83C\uDFFE',
                                '\uD83D\uDE4C\uD83C\uDFFF',
                                '\uD83D\uDC50',
                                '\uD83D\uDC50\uD83C\uDFFB',
                                '\uD83D\uDC50\uD83C\uDFFC',
                                '\uD83D\uDC50\uD83C\uDFFD',
                                '\uD83D\uDC50\uD83C\uDFFE',
                                '\uD83D\uDC50\uD83C\uDFFF',
                                '\uD83E\uDD32',
                                '\uD83E\uDD32\uD83C\uDFFB',
                                '\uD83E\uDD32\uD83C\uDFFC',
                                '\uD83E\uDD32\uD83C\uDFFD',
                                '\uD83E\uDD32\uD83C\uDFFE',
                                '\uD83E\uDD32\uD83C\uDFFF',
                                '\uD83E\uDD1D',
                                '\uD83D\uDE4F',
                                '\uD83D\uDE4F\uD83C\uDFFB',
                                '\uD83D\uDE4F\uD83C\uDFFC',
                                '\uD83D\uDE4F\uD83C\uDFFD',
                                '\uD83D\uDE4F\uD83C\uDFFE',
                                '\uD83D\uDE4F\uD83C\uDFFF',
                                '✍️',
                                '✍\uD83C\uDFFB',
                                '✍\uD83C\uDFFC',
                                '✍\uD83C\uDFFD',
                                '✍\uD83C\uDFFE',
                                '✍\uD83C\uDFFF',
                                '\uD83D\uDC85',
                                '\uD83D\uDC85\uD83C\uDFFB',
                                '\uD83D\uDC85\uD83C\uDFFC',
                                '\uD83D\uDC85\uD83C\uDFFD',
                                '\uD83D\uDC85\uD83C\uDFFE',
                                '\uD83D\uDC85\uD83C\uDFFF',
                                '\uD83E\uDD33',
                                '\uD83E\uDD33\uD83C\uDFFB',
                                '\uD83E\uDD33\uD83C\uDFFC',
                                '\uD83E\uDD33\uD83C\uDFFD',
                                '\uD83E\uDD33\uD83C\uDFFE',
                                '\uD83E\uDD33\uD83C\uDFFF',
                                '\uD83D\uDCAA',
                                '\uD83D\uDCAA\uD83C\uDFFB',
                                '\uD83D\uDCAA\uD83C\uDFFC',
                                '\uD83D\uDCAA\uD83C\uDFFD',
                                '\uD83D\uDCAA\uD83C\uDFFE',
                                '\uD83D\uDCAA\uD83C\uDFFF',
                                '\uD83E\uDDBE',
                                '\uD83E\uDDBF',
                                '\uD83E\uDDB5',
                                '\uD83E\uDDB5\uD83C\uDFFB',
                                '\uD83E\uDDB5\uD83C\uDFFC',
                                '\uD83E\uDDB5\uD83C\uDFFD',
                                '\uD83E\uDDB5\uD83C\uDFFE',
                                '\uD83E\uDDB5\uD83C\uDFFF',
                                '\uD83E\uDDB6',
                                '\uD83E\uDDB6\uD83C\uDFFB',
                                '\uD83E\uDDB6\uD83C\uDFFC',
                                '\uD83E\uDDB6\uD83C\uDFFD',
                                '\uD83E\uDDB6\uD83C\uDFFE',
                                '\uD83E\uDDB6\uD83C\uDFFF',
                                '\uD83D\uDC42',
                                '\uD83D\uDC42\uD83C\uDFFB',
                                '\uD83D\uDC42\uD83C\uDFFC',
                                '\uD83D\uDC42\uD83C\uDFFD',
                                '\uD83D\uDC42\uD83C\uDFFE',
                                '\uD83D\uDC42\uD83C\uDFFF',
                                '\uD83E\uDDBB',
                                '\uD83E\uDDBB\uD83C\uDFFB',
                                '\uD83E\uDDBB\uD83C\uDFFC',
                                '\uD83E\uDDBB\uD83C\uDFFD',
                                '\uD83E\uDDBB\uD83C\uDFFE',
                                '\uD83E\uDDBB\uD83C\uDFFF',
                                '\uD83D\uDC43',
                                '\uD83D\uDC43\uD83C\uDFFB',
                                '\uD83D\uDC43\uD83C\uDFFC',
                                '\uD83D\uDC43\uD83C\uDFFD',
                                '\uD83D\uDC43\uD83C\uDFFE',
                                '\uD83D\uDC43\uD83C\uDFFF',
                                '\uD83E\uDDE0',
                                '\uD83E\uDEC0',
                                '\uD83E\uDEC1',
                                '\uD83E\uDDB7',
                                '\uD83E\uDDB4',
                                '\uD83D\uDC40',
                                '\uD83D\uDC41️',
                                '\uD83D\uDC45',
                                '\uD83D\uDC44',
                            ],
                            person: [
                                '\uD83D\uDC76',
                                '\uD83D\uDC76\uD83C\uDFFB',
                                '\uD83D\uDC76\uD83C\uDFFC',
                                '\uD83D\uDC76\uD83C\uDFFD',
                                '\uD83D\uDC76\uD83C\uDFFE',
                                '\uD83D\uDC76\uD83C\uDFFF',
                                '\uD83E\uDDD2',
                                '\uD83E\uDDD2\uD83C\uDFFB',
                                '\uD83E\uDDD2\uD83C\uDFFC',
                                '\uD83E\uDDD2\uD83C\uDFFD',
                                '\uD83E\uDDD2\uD83C\uDFFE',
                                '\uD83E\uDDD2\uD83C\uDFFF',
                                '\uD83D\uDC66',
                                '\uD83D\uDC66\uD83C\uDFFB',
                                '\uD83D\uDC66\uD83C\uDFFC',
                                '\uD83D\uDC66\uD83C\uDFFD',
                                '\uD83D\uDC66\uD83C\uDFFE',
                                '\uD83D\uDC66\uD83C\uDFFF',
                                '\uD83D\uDC67',
                                '\uD83D\uDC67\uD83C\uDFFB',
                                '\uD83D\uDC67\uD83C\uDFFC',
                                '\uD83D\uDC67\uD83C\uDFFD',
                                '\uD83D\uDC67\uD83C\uDFFE',
                                '\uD83D\uDC67\uD83C\uDFFF',
                                '\uD83E\uDDD1',
                                '\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83D\uDC71',
                                '\uD83D\uDC71\uD83C\uDFFB',
                                '\uD83D\uDC71\uD83C\uDFFC',
                                '\uD83D\uDC71\uD83C\uDFFD',
                                '\uD83D\uDC71\uD83C\uDFFE',
                                '\uD83D\uDC71\uD83C\uDFFF',
                                '\uD83D\uDC68',
                                '\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83E\uDDD4',
                                '\uD83E\uDDD4\uD83C\uDFFB',
                                '\uD83E\uDDD4\uD83C\uDFFC',
                                '\uD83E\uDDD4\uD83C\uDFFD',
                                '\uD83E\uDDD4\uD83C\uDFFE',
                                '\uD83E\uDDD4\uD83C\uDFFF',
                                '\uD83E\uDDD4‍♂️',
                                '\uD83E\uDDD4\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDD4\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDD4\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDD4\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDD4\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDD4‍♀️',
                                '\uD83E\uDDD4\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDD4\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDD4\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDD4\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDD4\uD83C\uDFFF‍♀️',
                                '\uD83D\uDC68‍\uD83E\uDDB0',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDDB0',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDDB0',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDDB0',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDDB0',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDDB0',
                                '\uD83D\uDC68‍\uD83E\uDDB1',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDDB1',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDDB1',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDDB1',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDDB1',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDDB1',
                                '\uD83D\uDC68‍\uD83E\uDDB3',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDDB3',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDDB3',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDDB3',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDDB3',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDDB3',
                                '\uD83D\uDC68‍\uD83E\uDDB2',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDDB2',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDDB2',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDDB2',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDDB2',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDDB2',
                                '\uD83D\uDC69',
                                '\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69‍\uD83E\uDDB0',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDDB0',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDDB0',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDDB0',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDDB0',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDDB0',
                                '\uD83E\uDDD1‍\uD83E\uDDB0',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDDB0',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDDB0',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDDB0',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDDB0',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDDB0',
                                '\uD83D\uDC69‍\uD83E\uDDB1',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDDB1',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDDB1',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDDB1',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDDB1',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDDB1',
                                '\uD83E\uDDD1‍\uD83E\uDDB1',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDDB1',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDDB1',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDDB1',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDDB1',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDDB1',
                                '\uD83D\uDC69‍\uD83E\uDDB3',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDDB3',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDDB3',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDDB3',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDDB3',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDDB3',
                                '\uD83E\uDDD1‍\uD83E\uDDB3',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDDB3',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDDB3',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDDB3',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDDB3',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDDB3',
                                '\uD83D\uDC69‍\uD83E\uDDB2',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDDB2',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDDB2',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDDB2',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDDB2',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDDB2',
                                '\uD83E\uDDD1‍\uD83E\uDDB2',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDDB2',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDDB2',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDDB2',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDDB2',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDDB2',
                                '\uD83D\uDC71‍♀️',
                                '\uD83D\uDC71\uD83C\uDFFB‍♀️',
                                '\uD83D\uDC71\uD83C\uDFFC‍♀️',
                                '\uD83D\uDC71\uD83C\uDFFD‍♀️',
                                '\uD83D\uDC71\uD83C\uDFFE‍♀️',
                                '\uD83D\uDC71\uD83C\uDFFF‍♀️',
                                '\uD83D\uDC71‍♂️',
                                '\uD83D\uDC71\uD83C\uDFFB‍♂️',
                                '\uD83D\uDC71\uD83C\uDFFC‍♂️',
                                '\uD83D\uDC71\uD83C\uDFFD‍♂️',
                                '\uD83D\uDC71\uD83C\uDFFE‍♂️',
                                '\uD83D\uDC71\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDD3',
                                '\uD83E\uDDD3\uD83C\uDFFB',
                                '\uD83E\uDDD3\uD83C\uDFFC',
                                '\uD83E\uDDD3\uD83C\uDFFD',
                                '\uD83E\uDDD3\uD83C\uDFFE',
                                '\uD83E\uDDD3\uD83C\uDFFF',
                                '\uD83D\uDC74',
                                '\uD83D\uDC74\uD83C\uDFFB',
                                '\uD83D\uDC74\uD83C\uDFFC',
                                '\uD83D\uDC74\uD83C\uDFFD',
                                '\uD83D\uDC74\uD83C\uDFFE',
                                '\uD83D\uDC74\uD83C\uDFFF',
                                '\uD83D\uDC75',
                                '\uD83D\uDC75\uD83C\uDFFB',
                                '\uD83D\uDC75\uD83C\uDFFC',
                                '\uD83D\uDC75\uD83C\uDFFD',
                                '\uD83D\uDC75\uD83C\uDFFE',
                                '\uD83D\uDC75\uD83C\uDFFF',
                                '\uD83D\uDE4D',
                                '\uD83D\uDE4D\uD83C\uDFFB',
                                '\uD83D\uDE4D\uD83C\uDFFC',
                                '\uD83D\uDE4D\uD83C\uDFFD',
                                '\uD83D\uDE4D\uD83C\uDFFE',
                                '\uD83D\uDE4D\uD83C\uDFFF',
                                '\uD83D\uDE4D‍♂️',
                                '\uD83D\uDE4D\uD83C\uDFFB‍♂️',
                                '\uD83D\uDE4D\uD83C\uDFFC‍♂️',
                                '\uD83D\uDE4D\uD83C\uDFFD‍♂️',
                                '\uD83D\uDE4D\uD83C\uDFFE‍♂️',
                                '\uD83D\uDE4D\uD83C\uDFFF‍♂️',
                                '\uD83D\uDE4D‍♀️',
                                '\uD83D\uDE4D\uD83C\uDFFB‍♀️',
                                '\uD83D\uDE4D\uD83C\uDFFC‍♀️',
                                '\uD83D\uDE4D\uD83C\uDFFD‍♀️',
                                '\uD83D\uDE4D\uD83C\uDFFE‍♀️',
                                '\uD83D\uDE4D\uD83C\uDFFF‍♀️',
                                '\uD83D\uDE4E',
                                '\uD83D\uDE4E\uD83C\uDFFB',
                                '\uD83D\uDE4E\uD83C\uDFFC',
                                '\uD83D\uDE4E\uD83C\uDFFD',
                                '\uD83D\uDE4E\uD83C\uDFFE',
                                '\uD83D\uDE4E\uD83C\uDFFF',
                                '\uD83D\uDE4E‍♂️',
                                '\uD83D\uDE4E\uD83C\uDFFB‍♂️',
                                '\uD83D\uDE4E\uD83C\uDFFC‍♂️',
                                '\uD83D\uDE4E\uD83C\uDFFD‍♂️',
                                '\uD83D\uDE4E\uD83C\uDFFE‍♂️',
                                '\uD83D\uDE4E\uD83C\uDFFF‍♂️',
                                '\uD83D\uDE4E‍♀️',
                                '\uD83D\uDE4E\uD83C\uDFFB‍♀️',
                                '\uD83D\uDE4E\uD83C\uDFFC‍♀️',
                                '\uD83D\uDE4E\uD83C\uDFFD‍♀️',
                                '\uD83D\uDE4E\uD83C\uDFFE‍♀️',
                                '\uD83D\uDE4E\uD83C\uDFFF‍♀️',
                                '\uD83D\uDE45',
                                '\uD83D\uDE45\uD83C\uDFFB',
                                '\uD83D\uDE45\uD83C\uDFFC',
                                '\uD83D\uDE45\uD83C\uDFFD',
                                '\uD83D\uDE45\uD83C\uDFFE',
                                '\uD83D\uDE45\uD83C\uDFFF',
                                '\uD83D\uDE45‍♂️',
                                '\uD83D\uDE45\uD83C\uDFFB‍♂️',
                                '\uD83D\uDE45\uD83C\uDFFC‍♂️',
                                '\uD83D\uDE45\uD83C\uDFFD‍♂️',
                                '\uD83D\uDE45\uD83C\uDFFE‍♂️',
                                '\uD83D\uDE45\uD83C\uDFFF‍♂️',
                                '\uD83D\uDE45‍♀️',
                                '\uD83D\uDE45\uD83C\uDFFB‍♀️',
                                '\uD83D\uDE45\uD83C\uDFFC‍♀️',
                                '\uD83D\uDE45\uD83C\uDFFD‍♀️',
                                '\uD83D\uDE45\uD83C\uDFFE‍♀️',
                                '\uD83D\uDE45\uD83C\uDFFF‍♀️',
                                '\uD83D\uDE46',
                                '\uD83D\uDE46\uD83C\uDFFB',
                                '\uD83D\uDE46\uD83C\uDFFC',
                                '\uD83D\uDE46\uD83C\uDFFD',
                                '\uD83D\uDE46\uD83C\uDFFE',
                                '\uD83D\uDE46\uD83C\uDFFF',
                                '\uD83D\uDE46‍♂️',
                                '\uD83D\uDE46\uD83C\uDFFB‍♂️',
                                '\uD83D\uDE46\uD83C\uDFFC‍♂️',
                                '\uD83D\uDE46\uD83C\uDFFD‍♂️',
                                '\uD83D\uDE46\uD83C\uDFFE‍♂️',
                                '\uD83D\uDE46\uD83C\uDFFF‍♂️',
                                '\uD83D\uDE46‍♀️',
                                '\uD83D\uDE46\uD83C\uDFFB‍♀️',
                                '\uD83D\uDE46\uD83C\uDFFC‍♀️',
                                '\uD83D\uDE46\uD83C\uDFFD‍♀️',
                                '\uD83D\uDE46\uD83C\uDFFE‍♀️',
                                '\uD83D\uDE46\uD83C\uDFFF‍♀️',
                                '\uD83D\uDC81',
                                '\uD83D\uDC81\uD83C\uDFFB',
                                '\uD83D\uDC81\uD83C\uDFFC',
                                '\uD83D\uDC81\uD83C\uDFFD',
                                '\uD83D\uDC81\uD83C\uDFFE',
                                '\uD83D\uDC81\uD83C\uDFFF',
                                '\uD83D\uDC81‍♂️',
                                '\uD83D\uDC81\uD83C\uDFFB‍♂️',
                                '\uD83D\uDC81\uD83C\uDFFC‍♂️',
                                '\uD83D\uDC81\uD83C\uDFFD‍♂️',
                                '\uD83D\uDC81\uD83C\uDFFE‍♂️',
                                '\uD83D\uDC81\uD83C\uDFFF‍♂️',
                                '\uD83D\uDC81‍♀️',
                                '\uD83D\uDC81\uD83C\uDFFB‍♀️',
                                '\uD83D\uDC81\uD83C\uDFFC‍♀️',
                                '\uD83D\uDC81\uD83C\uDFFD‍♀️',
                                '\uD83D\uDC81\uD83C\uDFFE‍♀️',
                                '\uD83D\uDC81\uD83C\uDFFF‍♀️',
                                '\uD83D\uDE4B',
                                '\uD83D\uDE4B\uD83C\uDFFB',
                                '\uD83D\uDE4B\uD83C\uDFFC',
                                '\uD83D\uDE4B\uD83C\uDFFD',
                                '\uD83D\uDE4B\uD83C\uDFFE',
                                '\uD83D\uDE4B\uD83C\uDFFF',
                                '\uD83D\uDE4B‍♂️',
                                '\uD83D\uDE4B\uD83C\uDFFB‍♂️',
                                '\uD83D\uDE4B\uD83C\uDFFC‍♂️',
                                '\uD83D\uDE4B\uD83C\uDFFD‍♂️',
                                '\uD83D\uDE4B\uD83C\uDFFE‍♂️',
                                '\uD83D\uDE4B\uD83C\uDFFF‍♂️',
                                '\uD83D\uDE4B‍♀️',
                                '\uD83D\uDE4B\uD83C\uDFFB‍♀️',
                                '\uD83D\uDE4B\uD83C\uDFFC‍♀️',
                                '\uD83D\uDE4B\uD83C\uDFFD‍♀️',
                                '\uD83D\uDE4B\uD83C\uDFFE‍♀️',
                                '\uD83D\uDE4B\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDCF',
                                '\uD83E\uDDCF\uD83C\uDFFB',
                                '\uD83E\uDDCF\uD83C\uDFFC',
                                '\uD83E\uDDCF\uD83C\uDFFD',
                                '\uD83E\uDDCF\uD83C\uDFFE',
                                '\uD83E\uDDCF\uD83C\uDFFF',
                                '\uD83E\uDDCF‍♂️',
                                '\uD83E\uDDCF\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDCF\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDCF\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDCF\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDCF\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDCF‍♀️',
                                '\uD83E\uDDCF\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDCF\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDCF\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDCF\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDCF\uD83C\uDFFF‍♀️',
                                '\uD83D\uDE47',
                                '\uD83D\uDE47\uD83C\uDFFB',
                                '\uD83D\uDE47\uD83C\uDFFC',
                                '\uD83D\uDE47\uD83C\uDFFD',
                                '\uD83D\uDE47\uD83C\uDFFE',
                                '\uD83D\uDE47\uD83C\uDFFF',
                                '\uD83D\uDE47‍♂️',
                                '\uD83D\uDE47\uD83C\uDFFB‍♂️',
                                '\uD83D\uDE47\uD83C\uDFFC‍♂️',
                                '\uD83D\uDE47\uD83C\uDFFD‍♂️',
                                '\uD83D\uDE47\uD83C\uDFFE‍♂️',
                                '\uD83D\uDE47\uD83C\uDFFF‍♂️',
                                '\uD83D\uDE47‍♀️',
                                '\uD83D\uDE47\uD83C\uDFFB‍♀️',
                                '\uD83D\uDE47\uD83C\uDFFC‍♀️',
                                '\uD83D\uDE47\uD83C\uDFFD‍♀️',
                                '\uD83D\uDE47\uD83C\uDFFE‍♀️',
                                '\uD83D\uDE47\uD83C\uDFFF‍♀️',
                                '\uD83E\uDD26',
                                '\uD83E\uDD26\uD83C\uDFFB',
                                '\uD83E\uDD26\uD83C\uDFFC',
                                '\uD83E\uDD26\uD83C\uDFFD',
                                '\uD83E\uDD26\uD83C\uDFFE',
                                '\uD83E\uDD26\uD83C\uDFFF',
                                '\uD83E\uDD26‍♂️',
                                '\uD83E\uDD26\uD83C\uDFFB‍♂️',
                                '\uD83E\uDD26\uD83C\uDFFC‍♂️',
                                '\uD83E\uDD26\uD83C\uDFFD‍♂️',
                                '\uD83E\uDD26\uD83C\uDFFE‍♂️',
                                '\uD83E\uDD26\uD83C\uDFFF‍♂️',
                                '\uD83E\uDD26‍♀️',
                                '\uD83E\uDD26\uD83C\uDFFB‍♀️',
                                '\uD83E\uDD26\uD83C\uDFFC‍♀️',
                                '\uD83E\uDD26\uD83C\uDFFD‍♀️',
                                '\uD83E\uDD26\uD83C\uDFFE‍♀️',
                                '\uD83E\uDD26\uD83C\uDFFF‍♀️',
                                '\uD83E\uDD37',
                                '\uD83E\uDD37\uD83C\uDFFB',
                                '\uD83E\uDD37\uD83C\uDFFC',
                                '\uD83E\uDD37\uD83C\uDFFD',
                                '\uD83E\uDD37\uD83C\uDFFE',
                                '\uD83E\uDD37\uD83C\uDFFF',
                                '\uD83E\uDD37‍♂️',
                                '\uD83E\uDD37\uD83C\uDFFB‍♂️',
                                '\uD83E\uDD37\uD83C\uDFFC‍♂️',
                                '\uD83E\uDD37\uD83C\uDFFD‍♂️',
                                '\uD83E\uDD37\uD83C\uDFFE‍♂️',
                                '\uD83E\uDD37\uD83C\uDFFF‍♂️',
                                '\uD83E\uDD37‍♀️',
                                '\uD83E\uDD37\uD83C\uDFFB‍♀️',
                                '\uD83E\uDD37\uD83C\uDFFC‍♀️',
                                '\uD83E\uDD37\uD83C\uDFFD‍♀️',
                                '\uD83E\uDD37\uD83C\uDFFE‍♀️',
                                '\uD83E\uDD37\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDD1‍⚕️',
                                '\uD83E\uDDD1\uD83C\uDFFB‍⚕️',
                                '\uD83E\uDDD1\uD83C\uDFFC‍⚕️',
                                '\uD83E\uDDD1\uD83C\uDFFD‍⚕️',
                                '\uD83E\uDDD1\uD83C\uDFFE‍⚕️',
                                '\uD83E\uDDD1\uD83C\uDFFF‍⚕️',
                                '\uD83D\uDC68‍⚕️',
                                '\uD83D\uDC68\uD83C\uDFFB‍⚕️',
                                '\uD83D\uDC68\uD83C\uDFFC‍⚕️',
                                '\uD83D\uDC68\uD83C\uDFFD‍⚕️',
                                '\uD83D\uDC68\uD83C\uDFFE‍⚕️',
                                '\uD83D\uDC68\uD83C\uDFFF‍⚕️',
                                '\uD83D\uDC69‍⚕️',
                                '\uD83D\uDC69\uD83C\uDFFB‍⚕️',
                                '\uD83D\uDC69\uD83C\uDFFC‍⚕️',
                                '\uD83D\uDC69\uD83C\uDFFD‍⚕️',
                                '\uD83D\uDC69\uD83C\uDFFE‍⚕️',
                                '\uD83D\uDC69\uD83C\uDFFF‍⚕️',
                                '\uD83E\uDDD1‍\uD83C\uDF93',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83C\uDF93',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83C\uDF93',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83C\uDF93',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83C\uDF93',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83C\uDF93',
                                '\uD83D\uDC68‍\uD83C\uDF93',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83C\uDF93',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83C\uDF93',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83C\uDF93',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83C\uDF93',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83C\uDF93',
                                '\uD83D\uDC69‍\uD83C\uDF93',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDF93',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83C\uDF93',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83C\uDF93',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83C\uDF93',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83C\uDF93',
                                '\uD83E\uDDD1‍\uD83C\uDFEB',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83C\uDFEB',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83C\uDFEB',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83C\uDFEB',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83C\uDFEB',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83C\uDFEB',
                                '\uD83D\uDC68‍\uD83C\uDFEB',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83C\uDFEB',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83C\uDFEB',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83C\uDFEB',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83C\uDFEB',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83C\uDFEB',
                                '\uD83D\uDC69‍\uD83C\uDFEB',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDFEB',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83C\uDFEB',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83C\uDFEB',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83C\uDFEB',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83C\uDFEB',
                                '\uD83E\uDDD1‍⚖️',
                                '\uD83E\uDDD1\uD83C\uDFFB‍⚖️',
                                '\uD83E\uDDD1\uD83C\uDFFC‍⚖️',
                                '\uD83E\uDDD1\uD83C\uDFFD‍⚖️',
                                '\uD83E\uDDD1\uD83C\uDFFE‍⚖️',
                                '\uD83E\uDDD1\uD83C\uDFFF‍⚖️',
                                '\uD83D\uDC68‍⚖️',
                                '\uD83D\uDC68\uD83C\uDFFB‍⚖️',
                                '\uD83D\uDC68\uD83C\uDFFC‍⚖️',
                                '\uD83D\uDC68\uD83C\uDFFD‍⚖️',
                                '\uD83D\uDC68\uD83C\uDFFE‍⚖️',
                                '\uD83D\uDC68\uD83C\uDFFF‍⚖️',
                                '\uD83D\uDC69‍⚖️',
                                '\uD83D\uDC69\uD83C\uDFFB‍⚖️',
                                '\uD83D\uDC69\uD83C\uDFFC‍⚖️',
                                '\uD83D\uDC69\uD83C\uDFFD‍⚖️',
                                '\uD83D\uDC69\uD83C\uDFFE‍⚖️',
                                '\uD83D\uDC69\uD83C\uDFFF‍⚖️',
                                '\uD83E\uDDD1‍\uD83C\uDF3E',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83C\uDF3E',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83C\uDF3E',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83C\uDF3E',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83C\uDF3E',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83C\uDF3E',
                                '\uD83D\uDC68‍\uD83C\uDF3E',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83C\uDF3E',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83C\uDF3E',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83C\uDF3E',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83C\uDF3E',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83C\uDF3E',
                                '\uD83D\uDC69‍\uD83C\uDF3E',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDF3E',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83C\uDF3E',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83C\uDF3E',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83C\uDF3E',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83C\uDF3E',
                                '\uD83E\uDDD1‍\uD83C\uDF73',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83C\uDF73',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83C\uDF73',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83C\uDF73',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83C\uDF73',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83C\uDF73',
                                '\uD83D\uDC68‍\uD83C\uDF73',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83C\uDF73',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83C\uDF73',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83C\uDF73',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83C\uDF73',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83C\uDF73',
                                '\uD83D\uDC69‍\uD83C\uDF73',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDF73',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83C\uDF73',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83C\uDF73',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83C\uDF73',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83C\uDF73',
                                '\uD83E\uDDD1‍\uD83D\uDD27',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83D\uDD27',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83D\uDD27',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83D\uDD27',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83D\uDD27',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83D\uDD27',
                                '\uD83D\uDC68‍\uD83D\uDD27',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDD27',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDD27',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83D\uDD27',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83D\uDD27',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83D\uDD27',
                                '\uD83D\uDC69‍\uD83D\uDD27',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83D\uDD27',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83D\uDD27',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83D\uDD27',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83D\uDD27',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83D\uDD27',
                                '\uD83E\uDDD1‍\uD83C\uDFED',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83C\uDFED',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83C\uDFED',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83C\uDFED',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83C\uDFED',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83C\uDFED',
                                '\uD83D\uDC68‍\uD83C\uDFED',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83C\uDFED',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83C\uDFED',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83C\uDFED',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83C\uDFED',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83C\uDFED',
                                '\uD83D\uDC69‍\uD83C\uDFED',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDFED',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83C\uDFED',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83C\uDFED',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83C\uDFED',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83C\uDFED',
                                '\uD83E\uDDD1‍\uD83D\uDCBC',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83D\uDCBC',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83D\uDCBC',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83D\uDCBC',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83D\uDCBC',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83D\uDCBC',
                                '\uD83D\uDC68‍\uD83D\uDCBC',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBC',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDCBC',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83D\uDCBC',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83D\uDCBC',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83D\uDCBC',
                                '\uD83D\uDC69‍\uD83D\uDCBC',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83D\uDCBC',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83D\uDCBC',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83D\uDCBC',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83D\uDCBC',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83D\uDCBC',
                                '\uD83E\uDDD1‍\uD83D\uDD2C',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83D\uDD2C',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83D\uDD2C',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83D\uDD2C',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83D\uDD2C',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83D\uDD2C',
                                '\uD83D\uDC68‍\uD83D\uDD2C',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDD2C',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDD2C',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83D\uDD2C',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83D\uDD2C',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83D\uDD2C',
                                '\uD83D\uDC69‍\uD83D\uDD2C',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83D\uDD2C',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83D\uDD2C',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83D\uDD2C',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83D\uDD2C',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83D\uDD2C',
                                '\uD83E\uDDD1‍\uD83D\uDCBB',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83D\uDCBB',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83D\uDCBB',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83D\uDCBB',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83D\uDCBB',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83D\uDCBB',
                                '\uD83D\uDC68‍\uD83D\uDCBB',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDCBB',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83D\uDCBB',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83D\uDCBB',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83D\uDCBB',
                                '\uD83D\uDC69‍\uD83D\uDCBB',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83D\uDCBB',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83D\uDCBB',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83D\uDCBB',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83D\uDCBB',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83D\uDCBB',
                                '\uD83E\uDDD1‍\uD83C\uDFA4',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83C\uDFA4',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83C\uDFA4',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83C\uDFA4',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83C\uDFA4',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83C\uDFA4',
                                '\uD83D\uDC68‍\uD83C\uDFA4',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83C\uDFA4',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83C\uDFA4',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83C\uDFA4',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83C\uDFA4',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83C\uDFA4',
                                '\uD83D\uDC69‍\uD83C\uDFA4',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDFA4',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83C\uDFA4',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83C\uDFA4',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83C\uDFA4',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83C\uDFA4',
                                '\uD83E\uDDD1‍\uD83C\uDFA8',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83C\uDFA8',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83C\uDFA8',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83C\uDFA8',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83C\uDFA8',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83C\uDFA8',
                                '\uD83D\uDC68‍\uD83C\uDFA8',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83C\uDFA8',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83C\uDFA8',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83C\uDFA8',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83C\uDFA8',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83C\uDFA8',
                                '\uD83D\uDC69‍\uD83C\uDFA8',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDFA8',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83C\uDFA8',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83C\uDFA8',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83C\uDFA8',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83C\uDFA8',
                                '\uD83E\uDDD1‍✈️',
                                '\uD83E\uDDD1\uD83C\uDFFB‍✈️',
                                '\uD83E\uDDD1\uD83C\uDFFC‍✈️',
                                '\uD83E\uDDD1\uD83C\uDFFD‍✈️',
                                '\uD83E\uDDD1\uD83C\uDFFE‍✈️',
                                '\uD83E\uDDD1\uD83C\uDFFF‍✈️',
                                '\uD83D\uDC68‍✈️',
                                '\uD83D\uDC68\uD83C\uDFFB‍✈️',
                                '\uD83D\uDC68\uD83C\uDFFC‍✈️',
                                '\uD83D\uDC68\uD83C\uDFFD‍✈️',
                                '\uD83D\uDC68\uD83C\uDFFE‍✈️',
                                '\uD83D\uDC68\uD83C\uDFFF‍✈️',
                                '\uD83D\uDC69‍✈️',
                                '\uD83D\uDC69\uD83C\uDFFB‍✈️',
                                '\uD83D\uDC69\uD83C\uDFFC‍✈️',
                                '\uD83D\uDC69\uD83C\uDFFD‍✈️',
                                '\uD83D\uDC69\uD83C\uDFFE‍✈️',
                                '\uD83D\uDC69\uD83C\uDFFF‍✈️',
                                '\uD83E\uDDD1‍\uD83D\uDE80',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83D\uDE80',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83D\uDE80',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83D\uDE80',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83D\uDE80',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83D\uDE80',
                                '\uD83D\uDC68‍\uD83D\uDE80',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDE80',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83D\uDE80',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83D\uDE80',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83D\uDE80',
                                '\uD83D\uDC69‍\uD83D\uDE80',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83D\uDE80',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83D\uDE80',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83D\uDE80',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83D\uDE80',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83D\uDE80',
                                '\uD83E\uDDD1‍\uD83D\uDE92',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83D\uDE92',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83D\uDE92',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83D\uDE92',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83D\uDE92',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83D\uDE92',
                                '\uD83D\uDC68‍\uD83D\uDE92',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDE92',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE92',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83D\uDE92',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83D\uDE92',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83D\uDE92',
                                '\uD83D\uDC69‍\uD83D\uDE92',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83D\uDE92',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83D\uDE92',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83D\uDE92',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83D\uDE92',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83D\uDE92',
                                '\uD83D\uDC6E',
                                '\uD83D\uDC6E\uD83C\uDFFB',
                                '\uD83D\uDC6E\uD83C\uDFFC',
                                '\uD83D\uDC6E\uD83C\uDFFD',
                                '\uD83D\uDC6E\uD83C\uDFFE',
                                '\uD83D\uDC6E\uD83C\uDFFF',
                                '\uD83D\uDC6E‍♂️',
                                '\uD83D\uDC6E\uD83C\uDFFB‍♂️',
                                '\uD83D\uDC6E\uD83C\uDFFC‍♂️',
                                '\uD83D\uDC6E\uD83C\uDFFD‍♂️',
                                '\uD83D\uDC6E\uD83C\uDFFE‍♂️',
                                '\uD83D\uDC6E\uD83C\uDFFF‍♂️',
                                '\uD83D\uDC6E‍♀️',
                                '\uD83D\uDC6E\uD83C\uDFFB‍♀️',
                                '\uD83D\uDC6E\uD83C\uDFFC‍♀️',
                                '\uD83D\uDC6E\uD83C\uDFFD‍♀️',
                                '\uD83D\uDC6E\uD83C\uDFFE‍♀️',
                                '\uD83D\uDC6E\uD83C\uDFFF‍♀️',
                                '\uD83D\uDD75️',
                                '\uD83D\uDD75\uD83C\uDFFB',
                                '\uD83D\uDD75\uD83C\uDFFC',
                                '\uD83D\uDD75\uD83C\uDFFD',
                                '\uD83D\uDD75\uD83C\uDFFE',
                                '\uD83D\uDD75\uD83C\uDFFF',
                                '\uD83D\uDD75️‍♂️',
                                '\uD83D\uDD75\uD83C\uDFFB‍♂️',
                                '\uD83D\uDD75\uD83C\uDFFC‍♂️',
                                '\uD83D\uDD75\uD83C\uDFFD‍♂️',
                                '\uD83D\uDD75\uD83C\uDFFE‍♂️',
                                '\uD83D\uDD75\uD83C\uDFFF‍♂️',
                                '\uD83D\uDD75️‍♀️',
                                '\uD83D\uDD75\uD83C\uDFFB‍♀️',
                                '\uD83D\uDD75\uD83C\uDFFC‍♀️',
                                '\uD83D\uDD75\uD83C\uDFFD‍♀️',
                                '\uD83D\uDD75\uD83C\uDFFE‍♀️',
                                '\uD83D\uDD75\uD83C\uDFFF‍♀️',
                                '\uD83D\uDC82',
                                '\uD83D\uDC82\uD83C\uDFFB',
                                '\uD83D\uDC82\uD83C\uDFFC',
                                '\uD83D\uDC82\uD83C\uDFFD',
                                '\uD83D\uDC82\uD83C\uDFFE',
                                '\uD83D\uDC82\uD83C\uDFFF',
                                '\uD83D\uDC82‍♂️',
                                '\uD83D\uDC82\uD83C\uDFFB‍♂️',
                                '\uD83D\uDC82\uD83C\uDFFC‍♂️',
                                '\uD83D\uDC82\uD83C\uDFFD‍♂️',
                                '\uD83D\uDC82\uD83C\uDFFE‍♂️',
                                '\uD83D\uDC82\uD83C\uDFFF‍♂️',
                                '\uD83D\uDC82‍♀️',
                                '\uD83D\uDC82\uD83C\uDFFB‍♀️',
                                '\uD83D\uDC82\uD83C\uDFFC‍♀️',
                                '\uD83D\uDC82\uD83C\uDFFD‍♀️',
                                '\uD83D\uDC82\uD83C\uDFFE‍♀️',
                                '\uD83D\uDC82\uD83C\uDFFF‍♀️',
                                '\uD83E\uDD77',
                                '\uD83E\uDD77\uD83C\uDFFB',
                                '\uD83E\uDD77\uD83C\uDFFC',
                                '\uD83E\uDD77\uD83C\uDFFD',
                                '\uD83E\uDD77\uD83C\uDFFE',
                                '\uD83E\uDD77\uD83C\uDFFF',
                                '\uD83D\uDC77',
                                '\uD83D\uDC77\uD83C\uDFFB',
                                '\uD83D\uDC77\uD83C\uDFFC',
                                '\uD83D\uDC77\uD83C\uDFFD',
                                '\uD83D\uDC77\uD83C\uDFFE',
                                '\uD83D\uDC77\uD83C\uDFFF',
                                '\uD83D\uDC77‍♂️',
                                '\uD83D\uDC77\uD83C\uDFFB‍♂️',
                                '\uD83D\uDC77\uD83C\uDFFC‍♂️',
                                '\uD83D\uDC77\uD83C\uDFFD‍♂️',
                                '\uD83D\uDC77\uD83C\uDFFE‍♂️',
                                '\uD83D\uDC77\uD83C\uDFFF‍♂️',
                                '\uD83D\uDC77‍♀️',
                                '\uD83D\uDC77\uD83C\uDFFB‍♀️',
                                '\uD83D\uDC77\uD83C\uDFFC‍♀️',
                                '\uD83D\uDC77\uD83C\uDFFD‍♀️',
                                '\uD83D\uDC77\uD83C\uDFFE‍♀️',
                                '\uD83D\uDC77\uD83C\uDFFF‍♀️',
                                '\uD83E\uDD34',
                                '\uD83E\uDD34\uD83C\uDFFB',
                                '\uD83E\uDD34\uD83C\uDFFC',
                                '\uD83E\uDD34\uD83C\uDFFD',
                                '\uD83E\uDD34\uD83C\uDFFE',
                                '\uD83E\uDD34\uD83C\uDFFF',
                                '\uD83D\uDC78',
                                '\uD83D\uDC78\uD83C\uDFFB',
                                '\uD83D\uDC78\uD83C\uDFFC',
                                '\uD83D\uDC78\uD83C\uDFFD',
                                '\uD83D\uDC78\uD83C\uDFFE',
                                '\uD83D\uDC78\uD83C\uDFFF',
                                '\uD83D\uDC73',
                                '\uD83D\uDC73\uD83C\uDFFB',
                                '\uD83D\uDC73\uD83C\uDFFC',
                                '\uD83D\uDC73\uD83C\uDFFD',
                                '\uD83D\uDC73\uD83C\uDFFE',
                                '\uD83D\uDC73\uD83C\uDFFF',
                                '\uD83D\uDC73‍♂️',
                                '\uD83D\uDC73\uD83C\uDFFB‍♂️',
                                '\uD83D\uDC73\uD83C\uDFFC‍♂️',
                                '\uD83D\uDC73\uD83C\uDFFD‍♂️',
                                '\uD83D\uDC73\uD83C\uDFFE‍♂️',
                                '\uD83D\uDC73\uD83C\uDFFF‍♂️',
                                '\uD83D\uDC73‍♀️',
                                '\uD83D\uDC73\uD83C\uDFFB‍♀️',
                                '\uD83D\uDC73\uD83C\uDFFC‍♀️',
                                '\uD83D\uDC73\uD83C\uDFFD‍♀️',
                                '\uD83D\uDC73\uD83C\uDFFE‍♀️',
                                '\uD83D\uDC73\uD83C\uDFFF‍♀️',
                                '\uD83D\uDC72',
                                '\uD83D\uDC72\uD83C\uDFFB',
                                '\uD83D\uDC72\uD83C\uDFFC',
                                '\uD83D\uDC72\uD83C\uDFFD',
                                '\uD83D\uDC72\uD83C\uDFFE',
                                '\uD83D\uDC72\uD83C\uDFFF',
                                '\uD83E\uDDD5',
                                '\uD83E\uDDD5\uD83C\uDFFB',
                                '\uD83E\uDDD5\uD83C\uDFFC',
                                '\uD83E\uDDD5\uD83C\uDFFD',
                                '\uD83E\uDDD5\uD83C\uDFFE',
                                '\uD83E\uDDD5\uD83C\uDFFF',
                                '\uD83E\uDD35',
                                '\uD83E\uDD35\uD83C\uDFFB',
                                '\uD83E\uDD35\uD83C\uDFFC',
                                '\uD83E\uDD35\uD83C\uDFFD',
                                '\uD83E\uDD35\uD83C\uDFFE',
                                '\uD83E\uDD35\uD83C\uDFFF',
                                '\uD83E\uDD35‍♂️',
                                '\uD83E\uDD35\uD83C\uDFFB‍♂️',
                                '\uD83E\uDD35\uD83C\uDFFC‍♂️',
                                '\uD83E\uDD35\uD83C\uDFFD‍♂️',
                                '\uD83E\uDD35\uD83C\uDFFE‍♂️',
                                '\uD83E\uDD35\uD83C\uDFFF‍♂️',
                                '\uD83E\uDD35‍♀️',
                                '\uD83E\uDD35\uD83C\uDFFB‍♀️',
                                '\uD83E\uDD35\uD83C\uDFFC‍♀️',
                                '\uD83E\uDD35\uD83C\uDFFD‍♀️',
                                '\uD83E\uDD35\uD83C\uDFFE‍♀️',
                                '\uD83E\uDD35\uD83C\uDFFF‍♀️',
                                '\uD83D\uDC70',
                                '\uD83D\uDC70\uD83C\uDFFB',
                                '\uD83D\uDC70\uD83C\uDFFC',
                                '\uD83D\uDC70\uD83C\uDFFD',
                                '\uD83D\uDC70\uD83C\uDFFE',
                                '\uD83D\uDC70\uD83C\uDFFF',
                                '\uD83D\uDC70‍♂️',
                                '\uD83D\uDC70\uD83C\uDFFB‍♂️',
                                '\uD83D\uDC70\uD83C\uDFFC‍♂️',
                                '\uD83D\uDC70\uD83C\uDFFD‍♂️',
                                '\uD83D\uDC70\uD83C\uDFFE‍♂️',
                                '\uD83D\uDC70\uD83C\uDFFF‍♂️',
                                '\uD83D\uDC70‍♀️',
                                '\uD83D\uDC70\uD83C\uDFFB‍♀️',
                                '\uD83D\uDC70\uD83C\uDFFC‍♀️',
                                '\uD83D\uDC70\uD83C\uDFFD‍♀️',
                                '\uD83D\uDC70\uD83C\uDFFE‍♀️',
                                '\uD83D\uDC70\uD83C\uDFFF‍♀️',
                                '\uD83E\uDD30',
                                '\uD83E\uDD30\uD83C\uDFFB',
                                '\uD83E\uDD30\uD83C\uDFFC',
                                '\uD83E\uDD30\uD83C\uDFFD',
                                '\uD83E\uDD30\uD83C\uDFFE',
                                '\uD83E\uDD30\uD83C\uDFFF',
                                '\uD83E\uDD31',
                                '\uD83E\uDD31\uD83C\uDFFB',
                                '\uD83E\uDD31\uD83C\uDFFC',
                                '\uD83E\uDD31\uD83C\uDFFD',
                                '\uD83E\uDD31\uD83C\uDFFE',
                                '\uD83E\uDD31\uD83C\uDFFF',
                                '\uD83D\uDC69‍\uD83C\uDF7C',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDF7C',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83C\uDF7C',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83C\uDF7C',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83C\uDF7C',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83C\uDF7C',
                                '\uD83D\uDC68‍\uD83C\uDF7C',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83C\uDF7C',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83C\uDF7C',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83C\uDF7C',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83C\uDF7C',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83C\uDF7C',
                                '\uD83E\uDDD1‍\uD83C\uDF7C',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83C\uDF7C',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83C\uDF7C',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83C\uDF7C',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83C\uDF7C',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83C\uDF7C',
                                '\uD83D\uDC7C',
                                '\uD83D\uDC7C\uD83C\uDFFB',
                                '\uD83D\uDC7C\uD83C\uDFFC',
                                '\uD83D\uDC7C\uD83C\uDFFD',
                                '\uD83D\uDC7C\uD83C\uDFFE',
                                '\uD83D\uDC7C\uD83C\uDFFF',
                                '\uD83C\uDF85',
                                '\uD83C\uDF85\uD83C\uDFFB',
                                '\uD83C\uDF85\uD83C\uDFFC',
                                '\uD83C\uDF85\uD83C\uDFFD',
                                '\uD83C\uDF85\uD83C\uDFFE',
                                '\uD83C\uDF85\uD83C\uDFFF',
                                '\uD83E\uDD36',
                                '\uD83E\uDD36\uD83C\uDFFB',
                                '\uD83E\uDD36\uD83C\uDFFC',
                                '\uD83E\uDD36\uD83C\uDFFD',
                                '\uD83E\uDD36\uD83C\uDFFE',
                                '\uD83E\uDD36\uD83C\uDFFF',
                                '\uD83E\uDDD1‍\uD83C\uDF84',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83C\uDF84',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83C\uDF84',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83C\uDF84',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83C\uDF84',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83C\uDF84',
                                '\uD83E\uDDB8',
                                '\uD83E\uDDB8\uD83C\uDFFB',
                                '\uD83E\uDDB8\uD83C\uDFFC',
                                '\uD83E\uDDB8\uD83C\uDFFD',
                                '\uD83E\uDDB8\uD83C\uDFFE',
                                '\uD83E\uDDB8\uD83C\uDFFF',
                                '\uD83E\uDDB8‍♂️',
                                '\uD83E\uDDB8\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDB8\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDB8\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDB8\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDB8\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDB8‍♀️',
                                '\uD83E\uDDB8\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDB8\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDB8\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDB8\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDB8\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDB9',
                                '\uD83E\uDDB9\uD83C\uDFFB',
                                '\uD83E\uDDB9\uD83C\uDFFC',
                                '\uD83E\uDDB9\uD83C\uDFFD',
                                '\uD83E\uDDB9\uD83C\uDFFE',
                                '\uD83E\uDDB9\uD83C\uDFFF',
                                '\uD83E\uDDB9‍♂️',
                                '\uD83E\uDDB9\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDB9\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDB9\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDB9\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDB9\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDB9‍♀️',
                                '\uD83E\uDDB9\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDB9\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDB9\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDB9\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDB9\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDD9',
                                '\uD83E\uDDD9\uD83C\uDFFB',
                                '\uD83E\uDDD9\uD83C\uDFFC',
                                '\uD83E\uDDD9\uD83C\uDFFD',
                                '\uD83E\uDDD9\uD83C\uDFFE',
                                '\uD83E\uDDD9\uD83C\uDFFF',
                                '\uD83E\uDDD9‍♂️',
                                '\uD83E\uDDD9\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDD9\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDD9\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDD9\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDD9\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDD9‍♀️',
                                '\uD83E\uDDD9\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDD9\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDD9\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDD9\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDD9\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDDA',
                                '\uD83E\uDDDA\uD83C\uDFFB',
                                '\uD83E\uDDDA\uD83C\uDFFC',
                                '\uD83E\uDDDA\uD83C\uDFFD',
                                '\uD83E\uDDDA\uD83C\uDFFE',
                                '\uD83E\uDDDA\uD83C\uDFFF',
                                '\uD83E\uDDDA‍♂️',
                                '\uD83E\uDDDA\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDDA\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDDA\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDDA\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDDA\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDDA‍♀️',
                                '\uD83E\uDDDA\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDDA\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDDA\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDDA\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDDA\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDDB',
                                '\uD83E\uDDDB\uD83C\uDFFB',
                                '\uD83E\uDDDB\uD83C\uDFFC',
                                '\uD83E\uDDDB\uD83C\uDFFD',
                                '\uD83E\uDDDB\uD83C\uDFFE',
                                '\uD83E\uDDDB\uD83C\uDFFF',
                                '\uD83E\uDDDB‍♂️',
                                '\uD83E\uDDDB\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDDB\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDDB\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDDB\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDDB\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDDB‍♀️',
                                '\uD83E\uDDDB\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDDB\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDDB\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDDB\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDDB\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDDC',
                                '\uD83E\uDDDC\uD83C\uDFFB',
                                '\uD83E\uDDDC\uD83C\uDFFC',
                                '\uD83E\uDDDC\uD83C\uDFFD',
                                '\uD83E\uDDDC\uD83C\uDFFE',
                                '\uD83E\uDDDC\uD83C\uDFFF',
                                '\uD83E\uDDDC‍♂️',
                                '\uD83E\uDDDC\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDDC\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDDC\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDDC\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDDC\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDDC‍♀️',
                                '\uD83E\uDDDC\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDDC\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDDC\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDDC\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDDC\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDDD',
                                '\uD83E\uDDDD\uD83C\uDFFB',
                                '\uD83E\uDDDD\uD83C\uDFFC',
                                '\uD83E\uDDDD\uD83C\uDFFD',
                                '\uD83E\uDDDD\uD83C\uDFFE',
                                '\uD83E\uDDDD\uD83C\uDFFF',
                                '\uD83E\uDDDD‍♂️',
                                '\uD83E\uDDDD\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDDD\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDDD\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDDD\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDDD\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDDD‍♀️',
                                '\uD83E\uDDDD\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDDD\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDDD\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDDD\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDDD\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDDE',
                                '\uD83E\uDDDE‍♂️',
                                '\uD83E\uDDDE‍♀️',
                                '\uD83E\uDDDF',
                                '\uD83E\uDDDF‍♂️',
                                '\uD83E\uDDDF‍♀️',
                                '\uD83D\uDC86',
                                '\uD83D\uDC86\uD83C\uDFFB',
                                '\uD83D\uDC86\uD83C\uDFFC',
                                '\uD83D\uDC86\uD83C\uDFFD',
                                '\uD83D\uDC86\uD83C\uDFFE',
                                '\uD83D\uDC86\uD83C\uDFFF',
                                '\uD83D\uDC86‍♂️',
                                '\uD83D\uDC86\uD83C\uDFFB‍♂️',
                                '\uD83D\uDC86\uD83C\uDFFC‍♂️',
                                '\uD83D\uDC86\uD83C\uDFFD‍♂️',
                                '\uD83D\uDC86\uD83C\uDFFE‍♂️',
                                '\uD83D\uDC86\uD83C\uDFFF‍♂️',
                                '\uD83D\uDC86‍♀️',
                                '\uD83D\uDC86\uD83C\uDFFB‍♀️',
                                '\uD83D\uDC86\uD83C\uDFFC‍♀️',
                                '\uD83D\uDC86\uD83C\uDFFD‍♀️',
                                '\uD83D\uDC86\uD83C\uDFFE‍♀️',
                                '\uD83D\uDC86\uD83C\uDFFF‍♀️',
                                '\uD83D\uDC87',
                                '\uD83D\uDC87\uD83C\uDFFB',
                                '\uD83D\uDC87\uD83C\uDFFC',
                                '\uD83D\uDC87\uD83C\uDFFD',
                                '\uD83D\uDC87\uD83C\uDFFE',
                                '\uD83D\uDC87\uD83C\uDFFF',
                                '\uD83D\uDC87‍♂️',
                                '\uD83D\uDC87\uD83C\uDFFB‍♂️',
                                '\uD83D\uDC87\uD83C\uDFFC‍♂️',
                                '\uD83D\uDC87\uD83C\uDFFD‍♂️',
                                '\uD83D\uDC87\uD83C\uDFFE‍♂️',
                                '\uD83D\uDC87\uD83C\uDFFF‍♂️',
                                '\uD83D\uDC87‍♀️',
                                '\uD83D\uDC87\uD83C\uDFFB‍♀️',
                                '\uD83D\uDC87\uD83C\uDFFC‍♀️',
                                '\uD83D\uDC87\uD83C\uDFFD‍♀️',
                                '\uD83D\uDC87\uD83C\uDFFE‍♀️',
                                '\uD83D\uDC87\uD83C\uDFFF‍♀️',
                                '\uD83D\uDEB6',
                                '\uD83D\uDEB6\uD83C\uDFFB',
                                '\uD83D\uDEB6\uD83C\uDFFC',
                                '\uD83D\uDEB6\uD83C\uDFFD',
                                '\uD83D\uDEB6\uD83C\uDFFE',
                                '\uD83D\uDEB6\uD83C\uDFFF',
                                '\uD83D\uDEB6‍♂️',
                                '\uD83D\uDEB6\uD83C\uDFFB‍♂️',
                                '\uD83D\uDEB6\uD83C\uDFFC‍♂️',
                                '\uD83D\uDEB6\uD83C\uDFFD‍♂️',
                                '\uD83D\uDEB6\uD83C\uDFFE‍♂️',
                                '\uD83D\uDEB6\uD83C\uDFFF‍♂️',
                                '\uD83D\uDEB6‍♀️',
                                '\uD83D\uDEB6\uD83C\uDFFB‍♀️',
                                '\uD83D\uDEB6\uD83C\uDFFC‍♀️',
                                '\uD83D\uDEB6\uD83C\uDFFD‍♀️',
                                '\uD83D\uDEB6\uD83C\uDFFE‍♀️',
                                '\uD83D\uDEB6\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDCD',
                                '\uD83E\uDDCD\uD83C\uDFFB',
                                '\uD83E\uDDCD\uD83C\uDFFC',
                                '\uD83E\uDDCD\uD83C\uDFFD',
                                '\uD83E\uDDCD\uD83C\uDFFE',
                                '\uD83E\uDDCD\uD83C\uDFFF',
                                '\uD83E\uDDCD‍♂️',
                                '\uD83E\uDDCD\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDCD\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDCD\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDCD\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDCD\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDCD‍♀️',
                                '\uD83E\uDDCD\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDCD\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDCD\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDCD\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDCD\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDCE',
                                '\uD83E\uDDCE\uD83C\uDFFB',
                                '\uD83E\uDDCE\uD83C\uDFFC',
                                '\uD83E\uDDCE\uD83C\uDFFD',
                                '\uD83E\uDDCE\uD83C\uDFFE',
                                '\uD83E\uDDCE\uD83C\uDFFF',
                                '\uD83E\uDDCE‍♂️',
                                '\uD83E\uDDCE\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDCE\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDCE\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDCE\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDCE\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDCE‍♀️',
                                '\uD83E\uDDCE\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDCE\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDCE\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDCE\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDCE\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDD1‍\uD83E\uDDAF',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDDAF',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDDAF',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDDAF',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDDAF',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDDAF',
                                '\uD83D\uDC68‍\uD83E\uDDAF',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDDAF',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDDAF',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDDAF',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDDAF',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDDAF',
                                '\uD83D\uDC69‍\uD83E\uDDAF',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDDAF',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDDAF',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDDAF',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDDAF',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDDAF',
                                '\uD83E\uDDD1‍\uD83E\uDDBC',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDDBC',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDDBC',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDDBC',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDDBC',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDDBC',
                                '\uD83D\uDC68‍\uD83E\uDDBC',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDDBC',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDDBC',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDDBC',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDDBC',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDDBC',
                                '\uD83D\uDC69‍\uD83E\uDDBC',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDDBC',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDDBC',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDDBC',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDDBC',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDDBC',
                                '\uD83E\uDDD1‍\uD83E\uDDBD',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDDBD',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDDBD',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDDBD',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDDBD',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDDBD',
                                '\uD83D\uDC68‍\uD83E\uDDBD',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDDBD',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDDBD',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDDBD',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDDBD',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDDBD',
                                '\uD83D\uDC69‍\uD83E\uDDBD',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDDBD',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDDBD',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDDBD',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDDBD',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDDBD',
                                '\uD83C\uDFC3',
                                '\uD83C\uDFC3\uD83C\uDFFB',
                                '\uD83C\uDFC3\uD83C\uDFFC',
                                '\uD83C\uDFC3\uD83C\uDFFD',
                                '\uD83C\uDFC3\uD83C\uDFFE',
                                '\uD83C\uDFC3\uD83C\uDFFF',
                                '\uD83C\uDFC3‍♂️',
                                '\uD83C\uDFC3\uD83C\uDFFB‍♂️',
                                '\uD83C\uDFC3\uD83C\uDFFC‍♂️',
                                '\uD83C\uDFC3\uD83C\uDFFD‍♂️',
                                '\uD83C\uDFC3\uD83C\uDFFE‍♂️',
                                '\uD83C\uDFC3\uD83C\uDFFF‍♂️',
                                '\uD83C\uDFC3‍♀️',
                                '\uD83C\uDFC3\uD83C\uDFFB‍♀️',
                                '\uD83C\uDFC3\uD83C\uDFFC‍♀️',
                                '\uD83C\uDFC3\uD83C\uDFFD‍♀️',
                                '\uD83C\uDFC3\uD83C\uDFFE‍♀️',
                                '\uD83C\uDFC3\uD83C\uDFFF‍♀️',
                                '\uD83D\uDC83',
                                '\uD83D\uDC83\uD83C\uDFFB',
                                '\uD83D\uDC83\uD83C\uDFFC',
                                '\uD83D\uDC83\uD83C\uDFFD',
                                '\uD83D\uDC83\uD83C\uDFFE',
                                '\uD83D\uDC83\uD83C\uDFFF',
                                '\uD83D\uDD7A',
                                '\uD83D\uDD7A\uD83C\uDFFB',
                                '\uD83D\uDD7A\uD83C\uDFFC',
                                '\uD83D\uDD7A\uD83C\uDFFD',
                                '\uD83D\uDD7A\uD83C\uDFFE',
                                '\uD83D\uDD7A\uD83C\uDFFF',
                                '\uD83D\uDD74️',
                                '\uD83D\uDD74\uD83C\uDFFB',
                                '\uD83D\uDD74\uD83C\uDFFC',
                                '\uD83D\uDD74\uD83C\uDFFD',
                                '\uD83D\uDD74\uD83C\uDFFE',
                                '\uD83D\uDD74\uD83C\uDFFF',
                                '\uD83D\uDC6F',
                                '\uD83D\uDC6F‍♂️',
                                '\uD83D\uDC6F‍♀️',
                                '\uD83E\uDDD6',
                                '\uD83E\uDDD6\uD83C\uDFFB',
                                '\uD83E\uDDD6\uD83C\uDFFC',
                                '\uD83E\uDDD6\uD83C\uDFFD',
                                '\uD83E\uDDD6\uD83C\uDFFE',
                                '\uD83E\uDDD6\uD83C\uDFFF',
                                '\uD83E\uDDD6‍♂️',
                                '\uD83E\uDDD6\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDD6\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDD6\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDD6\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDD6\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDD6‍♀️',
                                '\uD83E\uDDD6\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDD6\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDD6\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDD6\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDD6\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDD7',
                                '\uD83E\uDDD7\uD83C\uDFFB',
                                '\uD83E\uDDD7\uD83C\uDFFC',
                                '\uD83E\uDDD7\uD83C\uDFFD',
                                '\uD83E\uDDD7\uD83C\uDFFE',
                                '\uD83E\uDDD7\uD83C\uDFFF',
                                '\uD83E\uDDD7‍♂️',
                                '\uD83E\uDDD7\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDD7\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDD7\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDD7\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDD7\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDD7‍♀️',
                                '\uD83E\uDDD7\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDD7\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDD7\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDD7\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDD7\uD83C\uDFFF‍♀️',
                                '\uD83E\uDD3A',
                                '\uD83C\uDFC7',
                                '\uD83C\uDFC7\uD83C\uDFFB',
                                '\uD83C\uDFC7\uD83C\uDFFC',
                                '\uD83C\uDFC7\uD83C\uDFFD',
                                '\uD83C\uDFC7\uD83C\uDFFE',
                                '\uD83C\uDFC7\uD83C\uDFFF',
                                '⛷️',
                                '\uD83C\uDFC2',
                                '\uD83C\uDFC2\uD83C\uDFFB',
                                '\uD83C\uDFC2\uD83C\uDFFC',
                                '\uD83C\uDFC2\uD83C\uDFFD',
                                '\uD83C\uDFC2\uD83C\uDFFE',
                                '\uD83C\uDFC2\uD83C\uDFFF',
                                '\uD83C\uDFCC️',
                                '\uD83C\uDFCC\uD83C\uDFFB',
                                '\uD83C\uDFCC\uD83C\uDFFC',
                                '\uD83C\uDFCC\uD83C\uDFFD',
                                '\uD83C\uDFCC\uD83C\uDFFE',
                                '\uD83C\uDFCC\uD83C\uDFFF',
                                '\uD83C\uDFCC️‍♂️',
                                '\uD83C\uDFCC\uD83C\uDFFB‍♂️',
                                '\uD83C\uDFCC\uD83C\uDFFC‍♂️',
                                '\uD83C\uDFCC\uD83C\uDFFD‍♂️',
                                '\uD83C\uDFCC\uD83C\uDFFE‍♂️',
                                '\uD83C\uDFCC\uD83C\uDFFF‍♂️',
                                '\uD83C\uDFCC️‍♀️',
                                '\uD83C\uDFCC\uD83C\uDFFB‍♀️',
                                '\uD83C\uDFCC\uD83C\uDFFC‍♀️',
                                '\uD83C\uDFCC\uD83C\uDFFD‍♀️',
                                '\uD83C\uDFCC\uD83C\uDFFE‍♀️',
                                '\uD83C\uDFCC\uD83C\uDFFF‍♀️',
                                '\uD83C\uDFC4',
                                '\uD83C\uDFC4\uD83C\uDFFB',
                                '\uD83C\uDFC4\uD83C\uDFFC',
                                '\uD83C\uDFC4\uD83C\uDFFD',
                                '\uD83C\uDFC4\uD83C\uDFFE',
                                '\uD83C\uDFC4\uD83C\uDFFF',
                                '\uD83C\uDFC4‍♂️',
                                '\uD83C\uDFC4\uD83C\uDFFB‍♂️',
                                '\uD83C\uDFC4\uD83C\uDFFC‍♂️',
                                '\uD83C\uDFC4\uD83C\uDFFD‍♂️',
                                '\uD83C\uDFC4\uD83C\uDFFE‍♂️',
                                '\uD83C\uDFC4\uD83C\uDFFF‍♂️',
                                '\uD83C\uDFC4‍♀️',
                                '\uD83C\uDFC4\uD83C\uDFFB‍♀️',
                                '\uD83C\uDFC4\uD83C\uDFFC‍♀️',
                                '\uD83C\uDFC4\uD83C\uDFFD‍♀️',
                                '\uD83C\uDFC4\uD83C\uDFFE‍♀️',
                                '\uD83C\uDFC4\uD83C\uDFFF‍♀️',
                                '\uD83D\uDEA3',
                                '\uD83D\uDEA3\uD83C\uDFFB',
                                '\uD83D\uDEA3\uD83C\uDFFC',
                                '\uD83D\uDEA3\uD83C\uDFFD',
                                '\uD83D\uDEA3\uD83C\uDFFE',
                                '\uD83D\uDEA3\uD83C\uDFFF',
                                '\uD83D\uDEA3‍♂️',
                                '\uD83D\uDEA3\uD83C\uDFFB‍♂️',
                                '\uD83D\uDEA3\uD83C\uDFFC‍♂️',
                                '\uD83D\uDEA3\uD83C\uDFFD‍♂️',
                                '\uD83D\uDEA3\uD83C\uDFFE‍♂️',
                                '\uD83D\uDEA3\uD83C\uDFFF‍♂️',
                                '\uD83D\uDEA3‍♀️',
                                '\uD83D\uDEA3\uD83C\uDFFB‍♀️',
                                '\uD83D\uDEA3\uD83C\uDFFC‍♀️',
                                '\uD83D\uDEA3\uD83C\uDFFD‍♀️',
                                '\uD83D\uDEA3\uD83C\uDFFE‍♀️',
                                '\uD83D\uDEA3\uD83C\uDFFF‍♀️',
                                '\uD83C\uDFCA',
                                '\uD83C\uDFCA\uD83C\uDFFB',
                                '\uD83C\uDFCA\uD83C\uDFFC',
                                '\uD83C\uDFCA\uD83C\uDFFD',
                                '\uD83C\uDFCA\uD83C\uDFFE',
                                '\uD83C\uDFCA\uD83C\uDFFF',
                                '\uD83C\uDFCA‍♂️',
                                '\uD83C\uDFCA\uD83C\uDFFB‍♂️',
                                '\uD83C\uDFCA\uD83C\uDFFC‍♂️',
                                '\uD83C\uDFCA\uD83C\uDFFD‍♂️',
                                '\uD83C\uDFCA\uD83C\uDFFE‍♂️',
                                '\uD83C\uDFCA\uD83C\uDFFF‍♂️',
                                '\uD83C\uDFCA‍♀️',
                                '\uD83C\uDFCA\uD83C\uDFFB‍♀️',
                                '\uD83C\uDFCA\uD83C\uDFFC‍♀️',
                                '\uD83C\uDFCA\uD83C\uDFFD‍♀️',
                                '\uD83C\uDFCA\uD83C\uDFFE‍♀️',
                                '\uD83C\uDFCA\uD83C\uDFFF‍♀️',
                                '⛹️',
                                '⛹\uD83C\uDFFB',
                                '⛹\uD83C\uDFFC',
                                '⛹\uD83C\uDFFD',
                                '⛹\uD83C\uDFFE',
                                '⛹\uD83C\uDFFF',
                                '⛹️‍♂️',
                                '⛹\uD83C\uDFFB‍♂️',
                                '⛹\uD83C\uDFFC‍♂️',
                                '⛹\uD83C\uDFFD‍♂️',
                                '⛹\uD83C\uDFFE‍♂️',
                                '⛹\uD83C\uDFFF‍♂️',
                                '⛹️‍♀️',
                                '⛹\uD83C\uDFFB‍♀️',
                                '⛹\uD83C\uDFFC‍♀️',
                                '⛹\uD83C\uDFFD‍♀️',
                                '⛹\uD83C\uDFFE‍♀️',
                                '⛹\uD83C\uDFFF‍♀️',
                                '\uD83C\uDFCB️',
                                '\uD83C\uDFCB\uD83C\uDFFB',
                                '\uD83C\uDFCB\uD83C\uDFFC',
                                '\uD83C\uDFCB\uD83C\uDFFD',
                                '\uD83C\uDFCB\uD83C\uDFFE',
                                '\uD83C\uDFCB\uD83C\uDFFF',
                                '\uD83C\uDFCB️‍♂️',
                                '\uD83C\uDFCB\uD83C\uDFFB‍♂️',
                                '\uD83C\uDFCB\uD83C\uDFFC‍♂️',
                                '\uD83C\uDFCB\uD83C\uDFFD‍♂️',
                                '\uD83C\uDFCB\uD83C\uDFFE‍♂️',
                                '\uD83C\uDFCB\uD83C\uDFFF‍♂️',
                                '\uD83C\uDFCB️‍♀️',
                                '\uD83C\uDFCB\uD83C\uDFFB‍♀️',
                                '\uD83C\uDFCB\uD83C\uDFFC‍♀️',
                                '\uD83C\uDFCB\uD83C\uDFFD‍♀️',
                                '\uD83C\uDFCB\uD83C\uDFFE‍♀️',
                                '\uD83C\uDFCB\uD83C\uDFFF‍♀️',
                                '\uD83D\uDEB4',
                                '\uD83D\uDEB4\uD83C\uDFFB',
                                '\uD83D\uDEB4\uD83C\uDFFC',
                                '\uD83D\uDEB4\uD83C\uDFFD',
                                '\uD83D\uDEB4\uD83C\uDFFE',
                                '\uD83D\uDEB4\uD83C\uDFFF',
                                '\uD83D\uDEB4‍♂️',
                                '\uD83D\uDEB4\uD83C\uDFFB‍♂️',
                                '\uD83D\uDEB4\uD83C\uDFFC‍♂️',
                                '\uD83D\uDEB4\uD83C\uDFFD‍♂️',
                                '\uD83D\uDEB4\uD83C\uDFFE‍♂️',
                                '\uD83D\uDEB4\uD83C\uDFFF‍♂️',
                                '\uD83D\uDEB4‍♀️',
                                '\uD83D\uDEB4\uD83C\uDFFB‍♀️',
                                '\uD83D\uDEB4\uD83C\uDFFC‍♀️',
                                '\uD83D\uDEB4\uD83C\uDFFD‍♀️',
                                '\uD83D\uDEB4\uD83C\uDFFE‍♀️',
                                '\uD83D\uDEB4\uD83C\uDFFF‍♀️',
                                '\uD83D\uDEB5',
                                '\uD83D\uDEB5\uD83C\uDFFB',
                                '\uD83D\uDEB5\uD83C\uDFFC',
                                '\uD83D\uDEB5\uD83C\uDFFD',
                                '\uD83D\uDEB5\uD83C\uDFFE',
                                '\uD83D\uDEB5\uD83C\uDFFF',
                                '\uD83D\uDEB5‍♂️',
                                '\uD83D\uDEB5\uD83C\uDFFB‍♂️',
                                '\uD83D\uDEB5\uD83C\uDFFC‍♂️',
                                '\uD83D\uDEB5\uD83C\uDFFD‍♂️',
                                '\uD83D\uDEB5\uD83C\uDFFE‍♂️',
                                '\uD83D\uDEB5\uD83C\uDFFF‍♂️',
                                '\uD83D\uDEB5‍♀️',
                                '\uD83D\uDEB5\uD83C\uDFFB‍♀️',
                                '\uD83D\uDEB5\uD83C\uDFFC‍♀️',
                                '\uD83D\uDEB5\uD83C\uDFFD‍♀️',
                                '\uD83D\uDEB5\uD83C\uDFFE‍♀️',
                                '\uD83D\uDEB5\uD83C\uDFFF‍♀️',
                                '\uD83E\uDD38',
                                '\uD83E\uDD38\uD83C\uDFFB',
                                '\uD83E\uDD38\uD83C\uDFFC',
                                '\uD83E\uDD38\uD83C\uDFFD',
                                '\uD83E\uDD38\uD83C\uDFFE',
                                '\uD83E\uDD38\uD83C\uDFFF',
                                '\uD83E\uDD38‍♂️',
                                '\uD83E\uDD38\uD83C\uDFFB‍♂️',
                                '\uD83E\uDD38\uD83C\uDFFC‍♂️',
                                '\uD83E\uDD38\uD83C\uDFFD‍♂️',
                                '\uD83E\uDD38\uD83C\uDFFE‍♂️',
                                '\uD83E\uDD38\uD83C\uDFFF‍♂️',
                                '\uD83E\uDD38‍♀️',
                                '\uD83E\uDD38\uD83C\uDFFB‍♀️',
                                '\uD83E\uDD38\uD83C\uDFFC‍♀️',
                                '\uD83E\uDD38\uD83C\uDFFD‍♀️',
                                '\uD83E\uDD38\uD83C\uDFFE‍♀️',
                                '\uD83E\uDD38\uD83C\uDFFF‍♀️',
                                '\uD83E\uDD3C',
                                '\uD83E\uDD3C‍♂️',
                                '\uD83E\uDD3C‍♀️',
                                '\uD83E\uDD3D',
                                '\uD83E\uDD3D\uD83C\uDFFB',
                                '\uD83E\uDD3D\uD83C\uDFFC',
                                '\uD83E\uDD3D\uD83C\uDFFD',
                                '\uD83E\uDD3D\uD83C\uDFFE',
                                '\uD83E\uDD3D\uD83C\uDFFF',
                                '\uD83E\uDD3D‍♂️',
                                '\uD83E\uDD3D\uD83C\uDFFB‍♂️',
                                '\uD83E\uDD3D\uD83C\uDFFC‍♂️',
                                '\uD83E\uDD3D\uD83C\uDFFD‍♂️',
                                '\uD83E\uDD3D\uD83C\uDFFE‍♂️',
                                '\uD83E\uDD3D\uD83C\uDFFF‍♂️',
                                '\uD83E\uDD3D‍♀️',
                                '\uD83E\uDD3D\uD83C\uDFFB‍♀️',
                                '\uD83E\uDD3D\uD83C\uDFFC‍♀️',
                                '\uD83E\uDD3D\uD83C\uDFFD‍♀️',
                                '\uD83E\uDD3D\uD83C\uDFFE‍♀️',
                                '\uD83E\uDD3D\uD83C\uDFFF‍♀️',
                                '\uD83E\uDD3E',
                                '\uD83E\uDD3E\uD83C\uDFFB',
                                '\uD83E\uDD3E\uD83C\uDFFC',
                                '\uD83E\uDD3E\uD83C\uDFFD',
                                '\uD83E\uDD3E\uD83C\uDFFE',
                                '\uD83E\uDD3E\uD83C\uDFFF',
                                '\uD83E\uDD3E‍♂️',
                                '\uD83E\uDD3E\uD83C\uDFFB‍♂️',
                                '\uD83E\uDD3E\uD83C\uDFFC‍♂️',
                                '\uD83E\uDD3E\uD83C\uDFFD‍♂️',
                                '\uD83E\uDD3E\uD83C\uDFFE‍♂️',
                                '\uD83E\uDD3E\uD83C\uDFFF‍♂️',
                                '\uD83E\uDD3E‍♀️',
                                '\uD83E\uDD3E\uD83C\uDFFB‍♀️',
                                '\uD83E\uDD3E\uD83C\uDFFC‍♀️',
                                '\uD83E\uDD3E\uD83C\uDFFD‍♀️',
                                '\uD83E\uDD3E\uD83C\uDFFE‍♀️',
                                '\uD83E\uDD3E\uD83C\uDFFF‍♀️',
                                '\uD83E\uDD39',
                                '\uD83E\uDD39\uD83C\uDFFB',
                                '\uD83E\uDD39\uD83C\uDFFC',
                                '\uD83E\uDD39\uD83C\uDFFD',
                                '\uD83E\uDD39\uD83C\uDFFE',
                                '\uD83E\uDD39\uD83C\uDFFF',
                                '\uD83E\uDD39‍♂️',
                                '\uD83E\uDD39\uD83C\uDFFB‍♂️',
                                '\uD83E\uDD39\uD83C\uDFFC‍♂️',
                                '\uD83E\uDD39\uD83C\uDFFD‍♂️',
                                '\uD83E\uDD39\uD83C\uDFFE‍♂️',
                                '\uD83E\uDD39\uD83C\uDFFF‍♂️',
                                '\uD83E\uDD39‍♀️',
                                '\uD83E\uDD39\uD83C\uDFFB‍♀️',
                                '\uD83E\uDD39\uD83C\uDFFC‍♀️',
                                '\uD83E\uDD39\uD83C\uDFFD‍♀️',
                                '\uD83E\uDD39\uD83C\uDFFE‍♀️',
                                '\uD83E\uDD39\uD83C\uDFFF‍♀️',
                                '\uD83E\uDDD8',
                                '\uD83E\uDDD8\uD83C\uDFFB',
                                '\uD83E\uDDD8\uD83C\uDFFC',
                                '\uD83E\uDDD8\uD83C\uDFFD',
                                '\uD83E\uDDD8\uD83C\uDFFE',
                                '\uD83E\uDDD8\uD83C\uDFFF',
                                '\uD83E\uDDD8‍♂️',
                                '\uD83E\uDDD8\uD83C\uDFFB‍♂️',
                                '\uD83E\uDDD8\uD83C\uDFFC‍♂️',
                                '\uD83E\uDDD8\uD83C\uDFFD‍♂️',
                                '\uD83E\uDDD8\uD83C\uDFFE‍♂️',
                                '\uD83E\uDDD8\uD83C\uDFFF‍♂️',
                                '\uD83E\uDDD8‍♀️',
                                '\uD83E\uDDD8\uD83C\uDFFB‍♀️',
                                '\uD83E\uDDD8\uD83C\uDFFC‍♀️',
                                '\uD83E\uDDD8\uD83C\uDFFD‍♀️',
                                '\uD83E\uDDD8\uD83C\uDFFE‍♀️',
                                '\uD83E\uDDD8\uD83C\uDFFF‍♀️',
                                '\uD83D\uDEC0',
                                '\uD83D\uDEC0\uD83C\uDFFB',
                                '\uD83D\uDEC0\uD83C\uDFFC',
                                '\uD83D\uDEC0\uD83C\uDFFD',
                                '\uD83D\uDEC0\uD83C\uDFFE',
                                '\uD83D\uDEC0\uD83C\uDFFF',
                                '\uD83D\uDECC',
                                '\uD83D\uDECC\uD83C\uDFFB',
                                '\uD83D\uDECC\uD83C\uDFFC',
                                '\uD83D\uDECC\uD83C\uDFFD',
                                '\uD83D\uDECC\uD83C\uDFFE',
                                '\uD83D\uDECC\uD83C\uDFFF',
                                '\uD83E\uDDD1‍\uD83E\uDD1D‍\uD83E\uDDD1',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83D\uDC6D',
                                '\uD83D\uDC6D\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC6D\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC6D\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC6D\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC6D\uD83C\uDFFF',
                                '\uD83D\uDC6B',
                                '\uD83D\uDC6B\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC6B\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC6B\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC6B\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC6B\uD83C\uDFFF',
                                '\uD83D\uDC6C',
                                '\uD83D\uDC6C\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC6C\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC6C\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC6C\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC6C\uD83C\uDFFF',
                                '\uD83D\uDC8F',
                                '\uD83D\uDC8F\uD83C\uDFFB',
                                '\uD83D\uDC8F\uD83C\uDFFC',
                                '\uD83D\uDC8F\uD83C\uDFFD',
                                '\uD83D\uDC8F\uD83C\uDFFE',
                                '\uD83D\uDC8F\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83D\uDC69‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68',
                                '\uD83D\uDC68\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC91',
                                '\uD83D\uDC91\uD83C\uDFFB',
                                '\uD83D\uDC91\uD83C\uDFFC',
                                '\uD83D\uDC91\uD83C\uDFFD',
                                '\uD83D\uDC91\uD83C\uDFFE',
                                '\uD83D\uDC91\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFB‍❤️‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFB‍❤️‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFB‍❤️‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFB‍❤️‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFC‍❤️‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFC‍❤️‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFC‍❤️‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFC‍❤️‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFD‍❤️‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFD‍❤️‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFD‍❤️‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83E\uDDD1\uD83C\uDFFD‍❤️‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFE‍❤️‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFE‍❤️‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFE‍❤️‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFE‍❤️‍\uD83E\uDDD1\uD83C\uDFFF',
                                '\uD83E\uDDD1\uD83C\uDFFF‍❤️‍\uD83E\uDDD1\uD83C\uDFFB',
                                '\uD83E\uDDD1\uD83C\uDFFF‍❤️‍\uD83E\uDDD1\uD83C\uDFFC',
                                '\uD83E\uDDD1\uD83C\uDFFF‍❤️‍\uD83E\uDDD1\uD83C\uDFFD',
                                '\uD83E\uDDD1\uD83C\uDFFF‍❤️‍\uD83E\uDDD1\uD83C\uDFFE',
                                '\uD83D\uDC69‍❤️‍\uD83D\uDC68',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68‍❤️‍\uD83D\uDC68',
                                '\uD83D\uDC68\uD83C\uDFFB‍❤️‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFB‍❤️‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFB‍❤️‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFB‍❤️‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFB‍❤️‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFC‍❤️‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFC‍❤️‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFC‍❤️‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFC‍❤️‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFC‍❤️‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFD‍❤️‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFD‍❤️‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFD‍❤️‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFD‍❤️‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFD‍❤️‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFE‍❤️‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFE‍❤️‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFE‍❤️‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFE‍❤️‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFE‍❤️‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC68\uD83C\uDFFF‍❤️‍\uD83D\uDC68\uD83C\uDFFB',
                                '\uD83D\uDC68\uD83C\uDFFF‍❤️‍\uD83D\uDC68\uD83C\uDFFC',
                                '\uD83D\uDC68\uD83C\uDFFF‍❤️‍\uD83D\uDC68\uD83C\uDFFD',
                                '\uD83D\uDC68\uD83C\uDFFF‍❤️‍\uD83D\uDC68\uD83C\uDFFE',
                                '\uD83D\uDC68\uD83C\uDFFF‍❤️‍\uD83D\uDC68\uD83C\uDFFF',
                                '\uD83D\uDC69‍❤️‍\uD83D\uDC69',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFB‍❤️‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFC‍❤️‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFD‍❤️‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFE‍❤️‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC69\uD83C\uDFFB',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC69\uD83C\uDFFC',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC69\uD83C\uDFFD',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC69\uD83C\uDFFE',
                                '\uD83D\uDC69\uD83C\uDFFF‍❤️‍\uD83D\uDC69\uD83C\uDFFF',
                                '\uD83D\uDC6A',
                                '\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC66',
                                '\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67',
                                '\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66',
                                '\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66',
                                '\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC67',
                                '\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC66',
                                '\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67',
                                '\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC66',
                                '\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66',
                                '\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC67',
                                '\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC66',
                                '\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67',
                                '\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66',
                                '\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66',
                                '\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC67',
                                '\uD83D\uDC68‍\uD83D\uDC66',
                                '\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66',
                                '\uD83D\uDC68‍\uD83D\uDC67',
                                '\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC66',
                                '\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC67',
                                '\uD83D\uDC69‍\uD83D\uDC66',
                                '\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66',
                                '\uD83D\uDC69‍\uD83D\uDC67',
                                '\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66',
                                '\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC67',
                                '\uD83D\uDDE3️',
                                '\uD83D\uDC64',
                                '\uD83D\uDC65',
                                '\uD83E\uDEC2',
                                '\uD83D\uDC63',
                            ],
                            nature: [
                                '\uD83D\uDC35',
                                '\uD83D\uDC12',
                                '\uD83E\uDD8D',
                                '\uD83E\uDDA7',
                                '\uD83D\uDC36',
                                '\uD83D\uDC15',
                                '\uD83E\uDDAE',
                                '\uD83D\uDC15‍\uD83E\uDDBA',
                                '\uD83D\uDC29',
                                '\uD83D\uDC3A',
                                '\uD83E\uDD8A',
                                '\uD83E\uDD9D',
                                '\uD83D\uDC31',
                                '\uD83D\uDC08',
                                '\uD83D\uDC08‍⬛',
                                '\uD83E\uDD81',
                                '\uD83D\uDC2F',
                                '\uD83D\uDC05',
                                '\uD83D\uDC06',
                                '\uD83D\uDC34',
                                '\uD83D\uDC0E',
                                '\uD83E\uDD84',
                                '\uD83E\uDD93',
                                '\uD83E\uDD8C',
                                '\uD83E\uDDAC',
                                '\uD83D\uDC2E',
                                '\uD83D\uDC02',
                                '\uD83D\uDC03',
                                '\uD83D\uDC04',
                                '\uD83D\uDC37',
                                '\uD83D\uDC16',
                                '\uD83D\uDC17',
                                '\uD83D\uDC3D',
                                '\uD83D\uDC0F',
                                '\uD83D\uDC11',
                                '\uD83D\uDC10',
                                '\uD83D\uDC2A',
                                '\uD83D\uDC2B',
                                '\uD83E\uDD99',
                                '\uD83E\uDD92',
                                '\uD83D\uDC18',
                                '\uD83E\uDDA3',
                                '\uD83E\uDD8F',
                                '\uD83E\uDD9B',
                                '\uD83D\uDC2D',
                                '\uD83D\uDC01',
                                '\uD83D\uDC00',
                                '\uD83D\uDC39',
                                '\uD83D\uDC30',
                                '\uD83D\uDC07',
                                '\uD83D\uDC3F️',
                                '\uD83E\uDDAB',
                                '\uD83E\uDD94',
                                '\uD83E\uDD87',
                                '\uD83D\uDC3B',
                                '\uD83D\uDC3B‍❄️',
                                '\uD83D\uDC28',
                                '\uD83D\uDC3C',
                                '\uD83E\uDDA5',
                                '\uD83E\uDDA6',
                                '\uD83E\uDDA8',
                                '\uD83E\uDD98',
                                '\uD83E\uDDA1',
                                '\uD83D\uDC3E',
                                '\uD83E\uDD83',
                                '\uD83D\uDC14',
                                '\uD83D\uDC13',
                                '\uD83D\uDC23',
                                '\uD83D\uDC24',
                                '\uD83D\uDC25',
                                '\uD83D\uDC26',
                                '\uD83D\uDC27',
                                '\uD83D\uDD4A️',
                                '\uD83E\uDD85',
                                '\uD83E\uDD86',
                                '\uD83E\uDDA2',
                                '\uD83E\uDD89',
                                '\uD83E\uDDA4',
                                '\uD83E\uDEB6',
                                '\uD83E\uDDA9',
                                '\uD83E\uDD9A',
                                '\uD83E\uDD9C',
                                '\uD83D\uDC38',
                                '\uD83D\uDC0A',
                                '\uD83D\uDC22',
                                '\uD83E\uDD8E',
                                '\uD83D\uDC0D',
                                '\uD83D\uDC32',
                                '\uD83D\uDC09',
                                '\uD83E\uDD95',
                                '\uD83E\uDD96',
                                '\uD83D\uDC33',
                                '\uD83D\uDC0B',
                                '\uD83D\uDC2C',
                                '\uD83E\uDDAD',
                                '\uD83D\uDC1F',
                                '\uD83D\uDC20',
                                '\uD83D\uDC21',
                                '\uD83E\uDD88',
                                '\uD83D\uDC19',
                                '\uD83D\uDC1A',
                                '\uD83D\uDC0C',
                                '\uD83E\uDD8B',
                                '\uD83D\uDC1B',
                                '\uD83D\uDC1C',
                                '\uD83D\uDC1D',
                                '\uD83E\uDEB2',
                                '\uD83D\uDC1E',
                                '\uD83E\uDD97',
                                '\uD83E\uDEB3',
                                '\uD83D\uDD77️',
                                '\uD83D\uDD78️',
                                '\uD83E\uDD82',
                                '\uD83E\uDD9F',
                                '\uD83E\uDEB0',
                                '\uD83E\uDEB1',
                                '\uD83E\uDDA0',
                                '\uD83D\uDC90',
                                '\uD83C\uDF38',
                                '\uD83D\uDCAE',
                                '\uD83C\uDFF5️',
                                '\uD83C\uDF39',
                                '\uD83E\uDD40',
                                '\uD83C\uDF3A',
                                '\uD83C\uDF3B',
                                '\uD83C\uDF3C',
                                '\uD83C\uDF37',
                                '\uD83C\uDF31',
                                '\uD83E\uDEB4',
                                '\uD83C\uDF32',
                                '\uD83C\uDF33',
                                '\uD83C\uDF34',
                                '\uD83C\uDF35',
                                '\uD83C\uDF3E',
                                '\uD83C\uDF3F',
                                '☘️',
                                '\uD83C\uDF40',
                                '\uD83C\uDF41',
                                '\uD83C\uDF42',
                                '\uD83C\uDF43',
                            ],
                            food: [
                                '\uD83C\uDF47',
                                '\uD83C\uDF48',
                                '\uD83C\uDF49',
                                '\uD83C\uDF4A',
                                '\uD83C\uDF4B',
                                '\uD83C\uDF4C',
                                '\uD83C\uDF4D',
                                '\uD83E\uDD6D',
                                '\uD83C\uDF4E',
                                '\uD83C\uDF4F',
                                '\uD83C\uDF50',
                                '\uD83C\uDF51',
                                '\uD83C\uDF52',
                                '\uD83C\uDF53',
                                '\uD83E\uDED0',
                                '\uD83E\uDD5D',
                                '\uD83C\uDF45',
                                '\uD83E\uDED2',
                                '\uD83E\uDD65',
                                '\uD83E\uDD51',
                                '\uD83C\uDF46',
                                '\uD83E\uDD54',
                                '\uD83E\uDD55',
                                '\uD83C\uDF3D',
                                '\uD83C\uDF36️',
                                '\uD83E\uDED1',
                                '\uD83E\uDD52',
                                '\uD83E\uDD6C',
                                '\uD83E\uDD66',
                                '\uD83E\uDDC4',
                                '\uD83E\uDDC5',
                                '\uD83C\uDF44',
                                '\uD83E\uDD5C',
                                '\uD83C\uDF30',
                                '\uD83C\uDF5E',
                                '\uD83E\uDD50',
                                '\uD83E\uDD56',
                                '\uD83E\uDED3',
                                '\uD83E\uDD68',
                                '\uD83E\uDD6F',
                                '\uD83E\uDD5E',
                                '\uD83E\uDDC7',
                                '\uD83E\uDDC0',
                                '\uD83C\uDF56',
                                '\uD83C\uDF57',
                                '\uD83E\uDD69',
                                '\uD83E\uDD53',
                                '\uD83C\uDF54',
                                '\uD83C\uDF5F',
                                '\uD83C\uDF55',
                                '\uD83C\uDF2D',
                                '\uD83E\uDD6A',
                                '\uD83C\uDF2E',
                                '\uD83C\uDF2F',
                                '\uD83E\uDED4',
                                '\uD83E\uDD59',
                                '\uD83E\uDDC6',
                                '\uD83E\uDD5A',
                                '\uD83C\uDF73',
                                '\uD83E\uDD58',
                                '\uD83C\uDF72',
                                '\uD83E\uDED5',
                                '\uD83E\uDD63',
                                '\uD83E\uDD57',
                                '\uD83C\uDF7F',
                                '\uD83E\uDDC8',
                                '\uD83E\uDDC2',
                                '\uD83E\uDD6B',
                                '\uD83C\uDF71',
                                '\uD83C\uDF58',
                                '\uD83C\uDF59',
                                '\uD83C\uDF5A',
                                '\uD83C\uDF5B',
                                '\uD83C\uDF5C',
                                '\uD83C\uDF5D',
                                '\uD83C\uDF60',
                                '\uD83C\uDF62',
                                '\uD83C\uDF63',
                                '\uD83C\uDF64',
                                '\uD83C\uDF65',
                                '\uD83E\uDD6E',
                                '\uD83C\uDF61',
                                '\uD83E\uDD5F',
                                '\uD83E\uDD60',
                                '\uD83E\uDD61',
                                '\uD83E\uDD80',
                                '\uD83E\uDD9E',
                                '\uD83E\uDD90',
                                '\uD83E\uDD91',
                                '\uD83E\uDDAA',
                                '\uD83C\uDF66',
                                '\uD83C\uDF67',
                                '\uD83C\uDF68',
                                '\uD83C\uDF69',
                                '\uD83C\uDF6A',
                                '\uD83C\uDF82',
                                '\uD83C\uDF70',
                                '\uD83E\uDDC1',
                                '\uD83E\uDD67',
                                '\uD83C\uDF6B',
                                '\uD83C\uDF6C',
                                '\uD83C\uDF6D',
                                '\uD83C\uDF6E',
                                '\uD83C\uDF6F',
                                '\uD83C\uDF7C',
                                '\uD83E\uDD5B',
                                '☕',
                                '\uD83E\uDED6',
                                '\uD83C\uDF75',
                                '\uD83C\uDF76',
                                '\uD83C\uDF7E',
                                '\uD83C\uDF77',
                                '\uD83C\uDF78',
                                '\uD83C\uDF79',
                                '\uD83C\uDF7A',
                                '\uD83C\uDF7B',
                                '\uD83E\uDD42',
                                '\uD83E\uDD43',
                                '\uD83E\uDD64',
                                '\uD83E\uDDCB',
                                '\uD83E\uDDC3',
                                '\uD83E\uDDC9',
                                '\uD83E\uDDCA',
                                '\uD83E\uDD62',
                                '\uD83C\uDF7D️',
                                '\uD83C\uDF74',
                                '\uD83E\uDD44',
                                '\uD83D\uDD2A',
                                '\uD83C\uDFFA',
                            ],
                            travel: [
                                '\uD83C\uDF0D',
                                '\uD83C\uDF0E',
                                '\uD83C\uDF0F',
                                '\uD83C\uDF10',
                                '\uD83D\uDDFA️',
                                '\uD83D\uDDFE',
                                '\uD83E\uDDED',
                                '\uD83C\uDFD4️',
                                '⛰️',
                                '\uD83C\uDF0B',
                                '\uD83D\uDDFB',
                                '\uD83C\uDFD5️',
                                '\uD83C\uDFD6️',
                                '\uD83C\uDFDC️',
                                '\uD83C\uDFDD️',
                                '\uD83C\uDFDE️',
                                '\uD83C\uDFDF️',
                                '\uD83C\uDFDB️',
                                '\uD83C\uDFD7️',
                                '\uD83E\uDDF1',
                                '\uD83E\uDEA8',
                                '\uD83E\uDEB5',
                                '\uD83D\uDED6',
                                '\uD83C\uDFD8️',
                                '\uD83C\uDFDA️',
                                '\uD83C\uDFE0',
                                '\uD83C\uDFE1',
                                '\uD83C\uDFE2',
                                '\uD83C\uDFE3',
                                '\uD83C\uDFE4',
                                '\uD83C\uDFE5',
                                '\uD83C\uDFE6',
                                '\uD83C\uDFE8',
                                '\uD83C\uDFE9',
                                '\uD83C\uDFEA',
                                '\uD83C\uDFEB',
                                '\uD83C\uDFEC',
                                '\uD83C\uDFED',
                                '\uD83C\uDFEF',
                                '\uD83C\uDFF0',
                                '\uD83D\uDC92',
                                '\uD83D\uDDFC',
                                '\uD83D\uDDFD',
                                '⛪',
                                '\uD83D\uDD4C',
                                '\uD83D\uDED5',
                                '\uD83D\uDD4D',
                                '⛩️',
                                '\uD83D\uDD4B',
                                '⛲',
                                '⛺',
                                '\uD83C\uDF01',
                                '\uD83C\uDF03',
                                '\uD83C\uDFD9️',
                                '\uD83C\uDF04',
                                '\uD83C\uDF05',
                                '\uD83C\uDF06',
                                '\uD83C\uDF07',
                                '\uD83C\uDF09',
                                '♨️',
                                '\uD83C\uDFA0',
                                '\uD83C\uDFA1',
                                '\uD83C\uDFA2',
                                '\uD83D\uDC88',
                                '\uD83C\uDFAA',
                                '\uD83D\uDE82',
                                '\uD83D\uDE83',
                                '\uD83D\uDE84',
                                '\uD83D\uDE85',
                                '\uD83D\uDE86',
                                '\uD83D\uDE87',
                                '\uD83D\uDE88',
                                '\uD83D\uDE89',
                                '\uD83D\uDE8A',
                                '\uD83D\uDE9D',
                                '\uD83D\uDE9E',
                                '\uD83D\uDE8B',
                                '\uD83D\uDE8C',
                                '\uD83D\uDE8D',
                                '\uD83D\uDE8E',
                                '\uD83D\uDE90',
                                '\uD83D\uDE91',
                                '\uD83D\uDE92',
                                '\uD83D\uDE93',
                                '\uD83D\uDE94',
                                '\uD83D\uDE95',
                                '\uD83D\uDE96',
                                '\uD83D\uDE97',
                                '\uD83D\uDE98',
                                '\uD83D\uDE99',
                                '\uD83D\uDEFB',
                                '\uD83D\uDE9A',
                                '\uD83D\uDE9B',
                                '\uD83D\uDE9C',
                                '\uD83C\uDFCE️',
                                '\uD83C\uDFCD️',
                                '\uD83D\uDEF5',
                                '\uD83E\uDDBD',
                                '\uD83E\uDDBC',
                                '\uD83D\uDEFA',
                                '\uD83D\uDEB2',
                                '\uD83D\uDEF4',
                                '\uD83D\uDEF9',
                                '\uD83D\uDEFC',
                                '\uD83D\uDE8F',
                                '\uD83D\uDEE3️',
                                '\uD83D\uDEE4️',
                                '\uD83D\uDEE2️',
                                '⛽',
                                '\uD83D\uDEA8',
                                '\uD83D\uDEA5',
                                '\uD83D\uDEA6',
                                '\uD83D\uDED1',
                                '\uD83D\uDEA7',
                                '⚓',
                                '⛵',
                                '\uD83D\uDEF6',
                                '\uD83D\uDEA4',
                                '\uD83D\uDEF3️',
                                '⛴️',
                                '\uD83D\uDEE5️',
                                '\uD83D\uDEA2',
                                '✈️',
                                '\uD83D\uDEE9️',
                                '\uD83D\uDEEB',
                                '\uD83D\uDEEC',
                                '\uD83E\uDE82',
                                '\uD83D\uDCBA',
                                '\uD83D\uDE81',
                                '\uD83D\uDE9F',
                                '\uD83D\uDEA0',
                                '\uD83D\uDEA1',
                                '\uD83D\uDEF0️',
                                '\uD83D\uDE80',
                                '\uD83D\uDEF8',
                                '\uD83D\uDECE️',
                                '\uD83E\uDDF3',
                                '⌛',
                                '⏳',
                                '⌚',
                                '⏰',
                                '⏱️',
                                '⏲️',
                                '\uD83D\uDD70️',
                                '\uD83D\uDD5B',
                                '\uD83D\uDD67',
                                '\uD83D\uDD50',
                                '\uD83D\uDD5C',
                                '\uD83D\uDD51',
                                '\uD83D\uDD5D',
                                '\uD83D\uDD52',
                                '\uD83D\uDD5E',
                                '\uD83D\uDD53',
                                '\uD83D\uDD5F',
                                '\uD83D\uDD54',
                                '\uD83D\uDD60',
                                '\uD83D\uDD55',
                                '\uD83D\uDD61',
                                '\uD83D\uDD56',
                                '\uD83D\uDD62',
                                '\uD83D\uDD57',
                                '\uD83D\uDD63',
                                '\uD83D\uDD58',
                                '\uD83D\uDD64',
                                '\uD83D\uDD59',
                                '\uD83D\uDD65',
                                '\uD83D\uDD5A',
                                '\uD83D\uDD66',
                                '\uD83C\uDF11',
                                '\uD83C\uDF12',
                                '\uD83C\uDF13',
                                '\uD83C\uDF14',
                                '\uD83C\uDF15',
                                '\uD83C\uDF16',
                                '\uD83C\uDF17',
                                '\uD83C\uDF18',
                                '\uD83C\uDF19',
                                '\uD83C\uDF1A',
                                '\uD83C\uDF1B',
                                '\uD83C\uDF1C',
                                '\uD83C\uDF21️',
                                '☀️',
                                '\uD83C\uDF1D',
                                '\uD83C\uDF1E',
                                '\uD83E\uDE90',
                                '⭐',
                                '\uD83C\uDF1F',
                                '\uD83C\uDF20',
                                '\uD83C\uDF0C',
                                '☁️',
                                '⛅',
                                '⛈️',
                                '\uD83C\uDF24️',
                                '\uD83C\uDF25️',
                                '\uD83C\uDF26️',
                                '\uD83C\uDF27️',
                                '\uD83C\uDF28️',
                                '\uD83C\uDF29️',
                                '\uD83C\uDF2A️',
                                '\uD83C\uDF2B️',
                                '\uD83C\uDF2C️',
                                '\uD83C\uDF00',
                                '\uD83C\uDF08',
                                '\uD83C\uDF02',
                                '☂️',
                                '☔',
                                '⛱️',
                                '⚡',
                                '❄️',
                                '☃️',
                                '⛄',
                                '☄️',
                                '\uD83D\uDD25',
                                '\uD83D\uDCA7',
                                '\uD83C\uDF0A',
                            ],
                            activity: [
                                '\uD83C\uDF83',
                                '\uD83C\uDF84',
                                '\uD83C\uDF86',
                                '\uD83C\uDF87',
                                '\uD83E\uDDE8',
                                '✨',
                                '\uD83C\uDF88',
                                '\uD83C\uDF89',
                                '\uD83C\uDF8A',
                                '\uD83C\uDF8B',
                                '\uD83C\uDF8D',
                                '\uD83C\uDF8E',
                                '\uD83C\uDF8F',
                                '\uD83C\uDF90',
                                '\uD83C\uDF91',
                                '\uD83E\uDDE7',
                                '\uD83C\uDF80',
                                '\uD83C\uDF81',
                                '\uD83C\uDF97️',
                                '\uD83C\uDF9F️',
                                '\uD83C\uDFAB',
                                '\uD83C\uDF96️',
                                '\uD83C\uDFC6',
                                '\uD83C\uDFC5',
                                '\uD83E\uDD47',
                                '\uD83E\uDD48',
                                '\uD83E\uDD49',
                                '⚽',
                                '⚾',
                                '\uD83E\uDD4E',
                                '\uD83C\uDFC0',
                                '\uD83C\uDFD0',
                                '\uD83C\uDFC8',
                                '\uD83C\uDFC9',
                                '\uD83C\uDFBE',
                                '\uD83E\uDD4F',
                                '\uD83C\uDFB3',
                                '\uD83C\uDFCF',
                                '\uD83C\uDFD1',
                                '\uD83C\uDFD2',
                                '\uD83E\uDD4D',
                                '\uD83C\uDFD3',
                                '\uD83C\uDFF8',
                                '\uD83E\uDD4A',
                                '\uD83E\uDD4B',
                                '\uD83E\uDD45',
                                '⛳',
                                '⛸️',
                                '\uD83C\uDFA3',
                                '\uD83E\uDD3F',
                                '\uD83C\uDFBD',
                                '\uD83C\uDFBF',
                                '\uD83D\uDEF7',
                                '\uD83E\uDD4C',
                                '\uD83C\uDFAF',
                                '\uD83E\uDE80',
                                '\uD83E\uDE81',
                                '\uD83C\uDFB1',
                                '\uD83D\uDD2E',
                                '\uD83E\uDE84',
                                '\uD83E\uDDFF',
                                '\uD83C\uDFAE',
                                '\uD83D\uDD79️',
                                '\uD83C\uDFB0',
                                '\uD83C\uDFB2',
                                '\uD83E\uDDE9',
                                '\uD83E\uDDF8',
                                '\uD83E\uDE85',
                                '\uD83E\uDE86',
                                '♠️',
                                '♥️',
                                '♦️',
                                '♣️',
                                '♟️',
                                '\uD83C\uDCCF',
                                '\uD83C\uDC04',
                                '\uD83C\uDFB4',
                                '\uD83C\uDFAD',
                                '\uD83D\uDDBC️',
                                '\uD83C\uDFA8',
                                '\uD83E\uDDF5',
                                '\uD83E\uDEA1',
                                '\uD83E\uDDF6',
                                '\uD83E\uDEA2',
                            ],
                            object: [
                                '\uD83D\uDC53',
                                '\uD83D\uDD76️',
                                '\uD83E\uDD7D',
                                '\uD83E\uDD7C',
                                '\uD83E\uDDBA',
                                '\uD83D\uDC54',
                                '\uD83D\uDC55',
                                '\uD83D\uDC56',
                                '\uD83E\uDDE3',
                                '\uD83E\uDDE4',
                                '\uD83E\uDDE5',
                                '\uD83E\uDDE6',
                                '\uD83D\uDC57',
                                '\uD83D\uDC58',
                                '\uD83E\uDD7B',
                                '\uD83E\uDE71',
                                '\uD83E\uDE72',
                                '\uD83E\uDE73',
                                '\uD83D\uDC59',
                                '\uD83D\uDC5A',
                                '\uD83D\uDC5B',
                                '\uD83D\uDC5C',
                                '\uD83D\uDC5D',
                                '\uD83D\uDECD️',
                                '\uD83C\uDF92',
                                '\uD83E\uDE74',
                                '\uD83D\uDC5E',
                                '\uD83D\uDC5F',
                                '\uD83E\uDD7E',
                                '\uD83E\uDD7F',
                                '\uD83D\uDC60',
                                '\uD83D\uDC61',
                                '\uD83E\uDE70',
                                '\uD83D\uDC62',
                                '\uD83D\uDC51',
                                '\uD83D\uDC52',
                                '\uD83C\uDFA9',
                                '\uD83C\uDF93',
                                '\uD83E\uDDE2',
                                '\uD83E\uDE96',
                                '⛑️',
                                '\uD83D\uDCFF',
                                '\uD83D\uDC84',
                                '\uD83D\uDC8D',
                                '\uD83D\uDC8E',
                                '\uD83D\uDD07',
                                '\uD83D\uDD08',
                                '\uD83D\uDD09',
                                '\uD83D\uDD0A',
                                '\uD83D\uDCE2',
                                '\uD83D\uDCE3',
                                '\uD83D\uDCEF',
                                '\uD83D\uDD14',
                                '\uD83D\uDD15',
                                '\uD83C\uDFBC',
                                '\uD83C\uDFB5',
                                '\uD83C\uDFB6',
                                '\uD83C\uDF99️',
                                '\uD83C\uDF9A️',
                                '\uD83C\uDF9B️',
                                '\uD83C\uDFA4',
                                '\uD83C\uDFA7',
                                '\uD83D\uDCFB',
                                '\uD83C\uDFB7',
                                '\uD83E\uDE97',
                                '\uD83C\uDFB8',
                                '\uD83C\uDFB9',
                                '\uD83C\uDFBA',
                                '\uD83C\uDFBB',
                                '\uD83E\uDE95',
                                '\uD83E\uDD41',
                                '\uD83E\uDE98',
                                '\uD83D\uDCF1',
                                '\uD83D\uDCF2',
                                '☎️',
                                '\uD83D\uDCDE',
                                '\uD83D\uDCDF',
                                '\uD83D\uDCE0',
                                '\uD83D\uDD0B',
                                '\uD83D\uDD0C',
                                '\uD83D\uDCBB',
                                '\uD83D\uDDA5️',
                                '\uD83D\uDDA8️',
                                '⌨️',
                                '\uD83D\uDDB1️',
                                '\uD83D\uDDB2️',
                                '\uD83D\uDCBD',
                                '\uD83D\uDCBE',
                                '\uD83D\uDCBF',
                                '\uD83D\uDCC0',
                                '\uD83E\uDDEE',
                                '\uD83C\uDFA5',
                                '\uD83C\uDF9E️',
                                '\uD83D\uDCFD️',
                                '\uD83C\uDFAC',
                                '\uD83D\uDCFA',
                                '\uD83D\uDCF7',
                                '\uD83D\uDCF8',
                                '\uD83D\uDCF9',
                                '\uD83D\uDCFC',
                                '\uD83D\uDD0D',
                                '\uD83D\uDD0E',
                                '\uD83D\uDD6F️',
                                '\uD83D\uDCA1',
                                '\uD83D\uDD26',
                                '\uD83C\uDFEE',
                                '\uD83E\uDE94',
                                '\uD83D\uDCD4',
                                '\uD83D\uDCD5',
                                '\uD83D\uDCD6',
                                '\uD83D\uDCD7',
                                '\uD83D\uDCD8',
                                '\uD83D\uDCD9',
                                '\uD83D\uDCDA',
                                '\uD83D\uDCD3',
                                '\uD83D\uDCD2',
                                '\uD83D\uDCC3',
                                '\uD83D\uDCDC',
                                '\uD83D\uDCC4',
                                '\uD83D\uDCF0',
                                '\uD83D\uDDDE️',
                                '\uD83D\uDCD1',
                                '\uD83D\uDD16',
                                '\uD83C\uDFF7️',
                                '\uD83D\uDCB0',
                                '\uD83E\uDE99',
                                '\uD83D\uDCB4',
                                '\uD83D\uDCB5',
                                '\uD83D\uDCB6',
                                '\uD83D\uDCB7',
                                '\uD83D\uDCB8',
                                '\uD83D\uDCB3',
                                '\uD83E\uDDFE',
                                '\uD83D\uDCB9',
                                '✉️',
                                '\uD83D\uDCE7',
                                '\uD83D\uDCE8',
                                '\uD83D\uDCE9',
                                '\uD83D\uDCE4',
                                '\uD83D\uDCE5',
                                '\uD83D\uDCE6',
                                '\uD83D\uDCEB',
                                '\uD83D\uDCEA',
                                '\uD83D\uDCEC',
                                '\uD83D\uDCED',
                                '\uD83D\uDCEE',
                                '\uD83D\uDDF3️',
                                '✏️',
                                '✒️',
                                '\uD83D\uDD8B️',
                                '\uD83D\uDD8A️',
                                '\uD83D\uDD8C️',
                                '\uD83D\uDD8D️',
                                '\uD83D\uDCDD',
                                '\uD83D\uDCBC',
                                '\uD83D\uDCC1',
                                '\uD83D\uDCC2',
                                '\uD83D\uDDC2️',
                                '\uD83D\uDCC5',
                                '\uD83D\uDCC6',
                                '\uD83D\uDDD2️',
                                '\uD83D\uDDD3️',
                                '\uD83D\uDCC7',
                                '\uD83D\uDCC8',
                                '\uD83D\uDCC9',
                                '\uD83D\uDCCA',
                                '\uD83D\uDCCB',
                                '\uD83D\uDCCC',
                                '\uD83D\uDCCD',
                                '\uD83D\uDCCE',
                                '\uD83D\uDD87️',
                                '\uD83D\uDCCF',
                                '\uD83D\uDCD0',
                                '✂️',
                                '\uD83D\uDDC3️',
                                '\uD83D\uDDC4️',
                                '\uD83D\uDDD1️',
                                '\uD83D\uDD12',
                                '\uD83D\uDD13',
                                '\uD83D\uDD0F',
                                '\uD83D\uDD10',
                                '\uD83D\uDD11',
                                '\uD83D\uDDDD️',
                                '\uD83D\uDD28',
                                '\uD83E\uDE93',
                                '⛏️',
                                '⚒️',
                                '\uD83D\uDEE0️',
                                '\uD83D\uDDE1️',
                                '⚔️',
                                '\uD83D\uDD2B',
                                '\uD83E\uDE83',
                                '\uD83C\uDFF9',
                                '\uD83D\uDEE1️',
                                '\uD83E\uDE9A',
                                '\uD83D\uDD27',
                                '\uD83E\uDE9B',
                                '\uD83D\uDD29',
                                '⚙️',
                                '\uD83D\uDDDC️',
                                '⚖️',
                                '\uD83E\uDDAF',
                                '\uD83D\uDD17',
                                '⛓️',
                                '\uD83E\uDE9D',
                                '\uD83E\uDDF0',
                                '\uD83E\uDDF2',
                                '\uD83E\uDE9C',
                                '⚗️',
                                '\uD83E\uDDEA',
                                '\uD83E\uDDEB',
                                '\uD83E\uDDEC',
                                '\uD83D\uDD2C',
                                '\uD83D\uDD2D',
                                '\uD83D\uDCE1',
                                '\uD83D\uDC89',
                                '\uD83E\uDE78',
                                '\uD83D\uDC8A',
                                '\uD83E\uDE79',
                                '\uD83E\uDE7A',
                                '\uD83D\uDEAA',
                                '\uD83D\uDED7',
                                '\uD83E\uDE9E',
                                '\uD83E\uDE9F',
                                '\uD83D\uDECF️',
                                '\uD83D\uDECB️',
                                '\uD83E\uDE91',
                                '\uD83D\uDEBD',
                                '\uD83E\uDEA0',
                                '\uD83D\uDEBF',
                                '\uD83D\uDEC1',
                                '\uD83E\uDEA4',
                                '\uD83E\uDE92',
                                '\uD83E\uDDF4',
                                '\uD83E\uDDF7',
                                '\uD83E\uDDF9',
                                '\uD83E\uDDFA',
                                '\uD83E\uDDFB',
                                '\uD83E\uDEA3',
                                '\uD83E\uDDFC',
                                '\uD83E\uDEA5',
                                '\uD83E\uDDFD',
                                '\uD83E\uDDEF',
                                '\uD83D\uDED2',
                                '\uD83D\uDEAC',
                                '⚰️',
                                '\uD83E\uDEA6',
                                '⚱️',
                                '\uD83D\uDDFF',
                                '\uD83E\uDEA7',
                            ],
                            symbol: [
                                '\uD83C\uDFE7',
                                '\uD83D\uDEAE',
                                '\uD83D\uDEB0',
                                '♿',
                                '\uD83D\uDEB9',
                                '\uD83D\uDEBA',
                                '\uD83D\uDEBB',
                                '\uD83D\uDEBC',
                                '\uD83D\uDEBE',
                                '\uD83D\uDEC2',
                                '\uD83D\uDEC3',
                                '\uD83D\uDEC4',
                                '\uD83D\uDEC5',
                                '⚠️',
                                '\uD83D\uDEB8',
                                '⛔',
                                '\uD83D\uDEAB',
                                '\uD83D\uDEB3',
                                '\uD83D\uDEAD',
                                '\uD83D\uDEAF',
                                '\uD83D\uDEB1',
                                '\uD83D\uDEB7',
                                '\uD83D\uDCF5',
                                '\uD83D\uDD1E',
                                '☢️',
                                '☣️',
                                '⬆️',
                                '↗️',
                                '➡️',
                                '↘️',
                                '⬇️',
                                '↙️',
                                '⬅️',
                                '↖️',
                                '↕️',
                                '↔️',
                                '↩️',
                                '↪️',
                                '⤴️',
                                '⤵️',
                                '\uD83D\uDD03',
                                '\uD83D\uDD04',
                                '\uD83D\uDD19',
                                '\uD83D\uDD1A',
                                '\uD83D\uDD1B',
                                '\uD83D\uDD1C',
                                '\uD83D\uDD1D',
                                '\uD83D\uDED0',
                                '⚛️',
                                '\uD83D\uDD49️',
                                '✡️',
                                '☸️',
                                '☯️',
                                '✝️',
                                '☦️',
                                '☪️',
                                '☮️',
                                '\uD83D\uDD4E',
                                '\uD83D\uDD2F',
                                '♈',
                                '♉',
                                '♊',
                                '♋',
                                '♌',
                                '♍',
                                '♎',
                                '♏',
                                '♐',
                                '♑',
                                '♒',
                                '♓',
                                '⛎',
                                '\uD83D\uDD00',
                                '\uD83D\uDD01',
                                '\uD83D\uDD02',
                                '▶️',
                                '⏩',
                                '⏭️',
                                '⏯️',
                                '◀️',
                                '⏪',
                                '⏮️',
                                '\uD83D\uDD3C',
                                '⏫',
                                '\uD83D\uDD3D',
                                '⏬',
                                '⏸️',
                                '⏹️',
                                '⏺️',
                                '⏏️',
                                '\uD83C\uDFA6',
                                '\uD83D\uDD05',
                                '\uD83D\uDD06',
                                '\uD83D\uDCF6',
                                '\uD83D\uDCF3',
                                '\uD83D\uDCF4',
                                '♀️',
                                '♂️',
                                '⚧️',
                                '✖️',
                                '➕',
                                '➖',
                                '➗',
                                '♾️',
                                '‼️',
                                '⁉️',
                                '❓',
                                '❔',
                                '❕',
                                '❗',
                                '〰️',
                                '\uD83D\uDCB1',
                                '\uD83D\uDCB2',
                                '⚕️',
                                '♻️',
                                '⚜️',
                                '\uD83D\uDD31',
                                '\uD83D\uDCDB',
                                '\uD83D\uDD30',
                                '⭕',
                                '✅',
                                '☑️',
                                '✔️',
                                '❌',
                                '❎',
                                '➰',
                                '➿',
                                '〽️',
                                '✳️',
                                '✴️',
                                '❇️',
                                '\xa9️',
                                '\xae️',
                                '™️',
                                '#️⃣',
                                '*️⃣',
                                '0️⃣',
                                '1️⃣',
                                '2️⃣',
                                '3️⃣',
                                '4️⃣',
                                '5️⃣',
                                '6️⃣',
                                '7️⃣',
                                '8️⃣',
                                '9️⃣',
                                '\uD83D\uDD1F',
                                '\uD83D\uDD20',
                                '\uD83D\uDD21',
                                '\uD83D\uDD22',
                                '\uD83D\uDD23',
                                '\uD83D\uDD24',
                                '\uD83C\uDD70️',
                                '\uD83C\uDD8E',
                                '\uD83C\uDD71️',
                                '\uD83C\uDD91',
                                '\uD83C\uDD92',
                                '\uD83C\uDD93',
                                'ℹ️',
                                '\uD83C\uDD94',
                                'Ⓜ️',
                                '\uD83C\uDD95',
                                '\uD83C\uDD96',
                                '\uD83C\uDD7E️',
                                '\uD83C\uDD97',
                                '\uD83C\uDD7F️',
                                '\uD83C\uDD98',
                                '\uD83C\uDD99',
                                '\uD83C\uDD9A',
                                '\uD83C\uDE01',
                                '\uD83C\uDE02️',
                                '\uD83C\uDE37️',
                                '\uD83C\uDE36',
                                '\uD83C\uDE2F',
                                '\uD83C\uDE50',
                                '\uD83C\uDE39',
                                '\uD83C\uDE1A',
                                '\uD83C\uDE32',
                                '\uD83C\uDE51',
                                '\uD83C\uDE38',
                                '\uD83C\uDE34',
                                '\uD83C\uDE33',
                                '㊗️',
                                '㊙️',
                                '\uD83C\uDE3A',
                                '\uD83C\uDE35',
                                '\uD83D\uDD34',
                                '\uD83D\uDFE0',
                                '\uD83D\uDFE1',
                                '\uD83D\uDFE2',
                                '\uD83D\uDD35',
                                '\uD83D\uDFE3',
                                '\uD83D\uDFE4',
                                '⚫',
                                '⚪',
                                '\uD83D\uDFE5',
                                '\uD83D\uDFE7',
                                '\uD83D\uDFE8',
                                '\uD83D\uDFE9',
                                '\uD83D\uDFE6',
                                '\uD83D\uDFEA',
                                '\uD83D\uDFEB',
                                '⬛',
                                '⬜',
                                '◼️',
                                '◻️',
                                '◾',
                                '◽',
                                '▪️',
                                '▫️',
                                '\uD83D\uDD36',
                                '\uD83D\uDD37',
                                '\uD83D\uDD38',
                                '\uD83D\uDD39',
                                '\uD83D\uDD3A',
                                '\uD83D\uDD3B',
                                '\uD83D\uDCA0',
                                '\uD83D\uDD18',
                                '\uD83D\uDD33',
                                '\uD83D\uDD32',
                            ],
                            flag: [
                                '\uD83C\uDFC1',
                                '\uD83D\uDEA9',
                                '\uD83C\uDF8C',
                                '\uD83C\uDFF4',
                                '\uD83C\uDFF3️',
                                '\uD83C\uDFF3️‍\uD83C\uDF08',
                                '\uD83C\uDFF3️‍⚧️',
                                '\uD83C\uDFF4‍☠️',
                                '\uD83C\uDDE6\uD83C\uDDE8',
                                '\uD83C\uDDE6\uD83C\uDDE9',
                                '\uD83C\uDDE6\uD83C\uDDEA',
                                '\uD83C\uDDE6\uD83C\uDDEB',
                                '\uD83C\uDDE6\uD83C\uDDEC',
                                '\uD83C\uDDE6\uD83C\uDDEE',
                                '\uD83C\uDDE6\uD83C\uDDF1',
                                '\uD83C\uDDE6\uD83C\uDDF2',
                                '\uD83C\uDDE6\uD83C\uDDF4',
                                '\uD83C\uDDE6\uD83C\uDDF6',
                                '\uD83C\uDDE6\uD83C\uDDF7',
                                '\uD83C\uDDE6\uD83C\uDDF8',
                                '\uD83C\uDDE6\uD83C\uDDF9',
                                '\uD83C\uDDE6\uD83C\uDDFA',
                                '\uD83C\uDDE6\uD83C\uDDFC',
                                '\uD83C\uDDE6\uD83C\uDDFD',
                                '\uD83C\uDDE6\uD83C\uDDFF',
                                '\uD83C\uDDE7\uD83C\uDDE6',
                                '\uD83C\uDDE7\uD83C\uDDE7',
                                '\uD83C\uDDE7\uD83C\uDDE9',
                                '\uD83C\uDDE7\uD83C\uDDEA',
                                '\uD83C\uDDE7\uD83C\uDDEB',
                                '\uD83C\uDDE7\uD83C\uDDEC',
                                '\uD83C\uDDE7\uD83C\uDDED',
                                '\uD83C\uDDE7\uD83C\uDDEE',
                                '\uD83C\uDDE7\uD83C\uDDEF',
                                '\uD83C\uDDE7\uD83C\uDDF1',
                                '\uD83C\uDDE7\uD83C\uDDF2',
                                '\uD83C\uDDE7\uD83C\uDDF3',
                                '\uD83C\uDDE7\uD83C\uDDF4',
                                '\uD83C\uDDE7\uD83C\uDDF6',
                                '\uD83C\uDDE7\uD83C\uDDF7',
                                '\uD83C\uDDE7\uD83C\uDDF8',
                                '\uD83C\uDDE7\uD83C\uDDF9',
                                '\uD83C\uDDE7\uD83C\uDDFB',
                                '\uD83C\uDDE7\uD83C\uDDFC',
                                '\uD83C\uDDE7\uD83C\uDDFE',
                                '\uD83C\uDDE7\uD83C\uDDFF',
                                '\uD83C\uDDE8\uD83C\uDDE6',
                                '\uD83C\uDDE8\uD83C\uDDE8',
                                '\uD83C\uDDE8\uD83C\uDDE9',
                                '\uD83C\uDDE8\uD83C\uDDEB',
                                '\uD83C\uDDE8\uD83C\uDDEC',
                                '\uD83C\uDDE8\uD83C\uDDED',
                                '\uD83C\uDDE8\uD83C\uDDEE',
                                '\uD83C\uDDE8\uD83C\uDDF0',
                                '\uD83C\uDDE8\uD83C\uDDF1',
                                '\uD83C\uDDE8\uD83C\uDDF2',
                                '\uD83C\uDDE8\uD83C\uDDF3',
                                '\uD83C\uDDE8\uD83C\uDDF4',
                                '\uD83C\uDDE8\uD83C\uDDF5',
                                '\uD83C\uDDE8\uD83C\uDDF7',
                                '\uD83C\uDDE8\uD83C\uDDFA',
                                '\uD83C\uDDE8\uD83C\uDDFB',
                                '\uD83C\uDDE8\uD83C\uDDFC',
                                '\uD83C\uDDE8\uD83C\uDDFD',
                                '\uD83C\uDDE8\uD83C\uDDFE',
                                '\uD83C\uDDE8\uD83C\uDDFF',
                                '\uD83C\uDDE9\uD83C\uDDEA',
                                '\uD83C\uDDE9\uD83C\uDDEC',
                                '\uD83C\uDDE9\uD83C\uDDEF',
                                '\uD83C\uDDE9\uD83C\uDDF0',
                                '\uD83C\uDDE9\uD83C\uDDF2',
                                '\uD83C\uDDE9\uD83C\uDDF4',
                                '\uD83C\uDDE9\uD83C\uDDFF',
                                '\uD83C\uDDEA\uD83C\uDDE6',
                                '\uD83C\uDDEA\uD83C\uDDE8',
                                '\uD83C\uDDEA\uD83C\uDDEA',
                                '\uD83C\uDDEA\uD83C\uDDEC',
                                '\uD83C\uDDEA\uD83C\uDDED',
                                '\uD83C\uDDEA\uD83C\uDDF7',
                                '\uD83C\uDDEA\uD83C\uDDF8',
                                '\uD83C\uDDEA\uD83C\uDDF9',
                                '\uD83C\uDDEA\uD83C\uDDFA',
                                '\uD83C\uDDEB\uD83C\uDDEE',
                                '\uD83C\uDDEB\uD83C\uDDEF',
                                '\uD83C\uDDEB\uD83C\uDDF0',
                                '\uD83C\uDDEB\uD83C\uDDF2',
                                '\uD83C\uDDEB\uD83C\uDDF4',
                                '\uD83C\uDDEB\uD83C\uDDF7',
                                '\uD83C\uDDEC\uD83C\uDDE6',
                                '\uD83C\uDDEC\uD83C\uDDE7',
                                '\uD83C\uDDEC\uD83C\uDDE9',
                                '\uD83C\uDDEC\uD83C\uDDEA',
                                '\uD83C\uDDEC\uD83C\uDDEB',
                                '\uD83C\uDDEC\uD83C\uDDEC',
                                '\uD83C\uDDEC\uD83C\uDDED',
                                '\uD83C\uDDEC\uD83C\uDDEE',
                                '\uD83C\uDDEC\uD83C\uDDF1',
                                '\uD83C\uDDEC\uD83C\uDDF2',
                                '\uD83C\uDDEC\uD83C\uDDF3',
                                '\uD83C\uDDEC\uD83C\uDDF5',
                                '\uD83C\uDDEC\uD83C\uDDF6',
                                '\uD83C\uDDEC\uD83C\uDDF7',
                                '\uD83C\uDDEC\uD83C\uDDF8',
                                '\uD83C\uDDEC\uD83C\uDDF9',
                                '\uD83C\uDDEC\uD83C\uDDFA',
                                '\uD83C\uDDEC\uD83C\uDDFC',
                                '\uD83C\uDDEC\uD83C\uDDFE',
                                '\uD83C\uDDED\uD83C\uDDF0',
                                '\uD83C\uDDED\uD83C\uDDF2',
                                '\uD83C\uDDED\uD83C\uDDF3',
                                '\uD83C\uDDED\uD83C\uDDF7',
                                '\uD83C\uDDED\uD83C\uDDF9',
                                '\uD83C\uDDED\uD83C\uDDFA',
                                '\uD83C\uDDEE\uD83C\uDDE8',
                                '\uD83C\uDDEE\uD83C\uDDE9',
                                '\uD83C\uDDEE\uD83C\uDDEA',
                                '\uD83C\uDDEE\uD83C\uDDF1',
                                '\uD83C\uDDEE\uD83C\uDDF2',
                                '\uD83C\uDDEE\uD83C\uDDF3',
                                '\uD83C\uDDEE\uD83C\uDDF4',
                                '\uD83C\uDDEE\uD83C\uDDF6',
                                '\uD83C\uDDEE\uD83C\uDDF7',
                                '\uD83C\uDDEE\uD83C\uDDF8',
                                '\uD83C\uDDEE\uD83C\uDDF9',
                                '\uD83C\uDDEF\uD83C\uDDEA',
                                '\uD83C\uDDEF\uD83C\uDDF2',
                                '\uD83C\uDDEF\uD83C\uDDF4',
                                '\uD83C\uDDEF\uD83C\uDDF5',
                                '\uD83C\uDDF0\uD83C\uDDEA',
                                '\uD83C\uDDF0\uD83C\uDDEC',
                                '\uD83C\uDDF0\uD83C\uDDED',
                                '\uD83C\uDDF0\uD83C\uDDEE',
                                '\uD83C\uDDF0\uD83C\uDDF2',
                                '\uD83C\uDDF0\uD83C\uDDF3',
                                '\uD83C\uDDF0\uD83C\uDDF5',
                                '\uD83C\uDDF0\uD83C\uDDF7',
                                '\uD83C\uDDF0\uD83C\uDDFC',
                                '\uD83C\uDDF0\uD83C\uDDFE',
                                '\uD83C\uDDF0\uD83C\uDDFF',
                                '\uD83C\uDDF1\uD83C\uDDE6',
                                '\uD83C\uDDF1\uD83C\uDDE7',
                                '\uD83C\uDDF1\uD83C\uDDE8',
                                '\uD83C\uDDF1\uD83C\uDDEE',
                                '\uD83C\uDDF1\uD83C\uDDF0',
                                '\uD83C\uDDF1\uD83C\uDDF7',
                                '\uD83C\uDDF1\uD83C\uDDF8',
                                '\uD83C\uDDF1\uD83C\uDDF9',
                                '\uD83C\uDDF1\uD83C\uDDFA',
                                '\uD83C\uDDF1\uD83C\uDDFB',
                                '\uD83C\uDDF1\uD83C\uDDFE',
                                '\uD83C\uDDF2\uD83C\uDDE6',
                                '\uD83C\uDDF2\uD83C\uDDE8',
                                '\uD83C\uDDF2\uD83C\uDDE9',
                                '\uD83C\uDDF2\uD83C\uDDEA',
                                '\uD83C\uDDF2\uD83C\uDDEB',
                                '\uD83C\uDDF2\uD83C\uDDEC',
                                '\uD83C\uDDF2\uD83C\uDDED',
                                '\uD83C\uDDF2\uD83C\uDDF0',
                                '\uD83C\uDDF2\uD83C\uDDF1',
                                '\uD83C\uDDF2\uD83C\uDDF2',
                                '\uD83C\uDDF2\uD83C\uDDF3',
                                '\uD83C\uDDF2\uD83C\uDDF4',
                                '\uD83C\uDDF2\uD83C\uDDF5',
                                '\uD83C\uDDF2\uD83C\uDDF6',
                                '\uD83C\uDDF2\uD83C\uDDF7',
                                '\uD83C\uDDF2\uD83C\uDDF8',
                                '\uD83C\uDDF2\uD83C\uDDF9',
                                '\uD83C\uDDF2\uD83C\uDDFA',
                                '\uD83C\uDDF2\uD83C\uDDFB',
                                '\uD83C\uDDF2\uD83C\uDDFC',
                                '\uD83C\uDDF2\uD83C\uDDFD',
                                '\uD83C\uDDF2\uD83C\uDDFE',
                                '\uD83C\uDDF2\uD83C\uDDFF',
                                '\uD83C\uDDF3\uD83C\uDDE6',
                                '\uD83C\uDDF3\uD83C\uDDE8',
                                '\uD83C\uDDF3\uD83C\uDDEA',
                                '\uD83C\uDDF3\uD83C\uDDEB',
                                '\uD83C\uDDF3\uD83C\uDDEC',
                                '\uD83C\uDDF3\uD83C\uDDEE',
                                '\uD83C\uDDF3\uD83C\uDDF1',
                                '\uD83C\uDDF3\uD83C\uDDF4',
                                '\uD83C\uDDF3\uD83C\uDDF5',
                                '\uD83C\uDDF3\uD83C\uDDF7',
                                '\uD83C\uDDF3\uD83C\uDDFA',
                                '\uD83C\uDDF3\uD83C\uDDFF',
                                '\uD83C\uDDF4\uD83C\uDDF2',
                                '\uD83C\uDDF5\uD83C\uDDE6',
                                '\uD83C\uDDF5\uD83C\uDDEA',
                                '\uD83C\uDDF5\uD83C\uDDEB',
                                '\uD83C\uDDF5\uD83C\uDDEC',
                                '\uD83C\uDDF5\uD83C\uDDED',
                                '\uD83C\uDDF5\uD83C\uDDF0',
                                '\uD83C\uDDF5\uD83C\uDDF1',
                                '\uD83C\uDDF5\uD83C\uDDF2',
                                '\uD83C\uDDF5\uD83C\uDDF3',
                                '\uD83C\uDDF5\uD83C\uDDF7',
                                '\uD83C\uDDF5\uD83C\uDDF8',
                                '\uD83C\uDDF5\uD83C\uDDF9',
                                '\uD83C\uDDF5\uD83C\uDDFC',
                                '\uD83C\uDDF5\uD83C\uDDFE',
                                '\uD83C\uDDF6\uD83C\uDDE6',
                                '\uD83C\uDDF7\uD83C\uDDEA',
                                '\uD83C\uDDF7\uD83C\uDDF4',
                                '\uD83C\uDDF7\uD83C\uDDF8',
                                '\uD83C\uDDF7\uD83C\uDDFA',
                                '\uD83C\uDDF7\uD83C\uDDFC',
                                '\uD83C\uDDF8\uD83C\uDDE6',
                                '\uD83C\uDDF8\uD83C\uDDE7',
                                '\uD83C\uDDF8\uD83C\uDDE8',
                                '\uD83C\uDDF8\uD83C\uDDE9',
                                '\uD83C\uDDF8\uD83C\uDDEA',
                                '\uD83C\uDDF8\uD83C\uDDEC',
                                '\uD83C\uDDF8\uD83C\uDDED',
                                '\uD83C\uDDF8\uD83C\uDDEE',
                                '\uD83C\uDDF8\uD83C\uDDEF',
                                '\uD83C\uDDF8\uD83C\uDDF0',
                                '\uD83C\uDDF8\uD83C\uDDF1',
                                '\uD83C\uDDF8\uD83C\uDDF2',
                                '\uD83C\uDDF8\uD83C\uDDF3',
                                '\uD83C\uDDF8\uD83C\uDDF4',
                                '\uD83C\uDDF8\uD83C\uDDF7',
                                '\uD83C\uDDF8\uD83C\uDDF8',
                                '\uD83C\uDDF8\uD83C\uDDF9',
                                '\uD83C\uDDF8\uD83C\uDDFB',
                                '\uD83C\uDDF8\uD83C\uDDFD',
                                '\uD83C\uDDF8\uD83C\uDDFE',
                                '\uD83C\uDDF8\uD83C\uDDFF',
                                '\uD83C\uDDF9\uD83C\uDDE6',
                                '\uD83C\uDDF9\uD83C\uDDE8',
                                '\uD83C\uDDF9\uD83C\uDDE9',
                                '\uD83C\uDDF9\uD83C\uDDEB',
                                '\uD83C\uDDF9\uD83C\uDDEC',
                                '\uD83C\uDDF9\uD83C\uDDED',
                                '\uD83C\uDDF9\uD83C\uDDEF',
                                '\uD83C\uDDF9\uD83C\uDDF0',
                                '\uD83C\uDDF9\uD83C\uDDF1',
                                '\uD83C\uDDF9\uD83C\uDDF2',
                                '\uD83C\uDDF9\uD83C\uDDF3',
                                '\uD83C\uDDF9\uD83C\uDDF4',
                                '\uD83C\uDDF9\uD83C\uDDF7',
                                '\uD83C\uDDF9\uD83C\uDDF9',
                                '\uD83C\uDDF9\uD83C\uDDFB',
                                '\uD83C\uDDF9\uD83C\uDDFC',
                                '\uD83C\uDDF9\uD83C\uDDFF',
                                '\uD83C\uDDFA\uD83C\uDDE6',
                                '\uD83C\uDDFA\uD83C\uDDEC',
                                '\uD83C\uDDFA\uD83C\uDDF2',
                                '\uD83C\uDDFA\uD83C\uDDF3',
                                '\uD83C\uDDFA\uD83C\uDDF8',
                                '\uD83C\uDDFA\uD83C\uDDFE',
                                '\uD83C\uDDFA\uD83C\uDDFF',
                                '\uD83C\uDDFB\uD83C\uDDE6',
                                '\uD83C\uDDFB\uD83C\uDDE8',
                                '\uD83C\uDDFB\uD83C\uDDEA',
                                '\uD83C\uDDFB\uD83C\uDDEC',
                                '\uD83C\uDDFB\uD83C\uDDEE',
                                '\uD83C\uDDFB\uD83C\uDDF3',
                                '\uD83C\uDDFB\uD83C\uDDFA',
                                '\uD83C\uDDFC\uD83C\uDDEB',
                                '\uD83C\uDDFC\uD83C\uDDF8',
                                '\uD83C\uDDFD\uD83C\uDDF0',
                                '\uD83C\uDDFE\uD83C\uDDEA',
                                '\uD83C\uDDFE\uD83C\uDDF9',
                                '\uD83C\uDDFF\uD83C\uDDE6',
                                '\uD83C\uDDFF\uD83C\uDDF2',
                                '\uD83C\uDDFF\uD83C\uDDFC',
                            ],
                        },
                        http_status_code: {
                            informational: [100, 101, 102, 103],
                            success: [200, 201, 202, 203, 204, 205, 206, 207, 208, 226],
                            redirection: [300, 301, 302, 303, 304, 305, 306, 307, 308],
                            clientError: [
                                400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416,
                                417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451,
                            ],
                            serverError: [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511],
                        },
                    },
                    location: {
                        country_code: [
                            {alpha2: 'AD', alpha3: 'AND'},
                            {alpha2: 'AE', alpha3: 'ARE'},
                            {alpha2: 'AF', alpha3: 'AFG'},
                            {alpha2: 'AG', alpha3: 'ATG'},
                            {alpha2: 'AI', alpha3: 'AIA'},
                            {alpha2: 'AL', alpha3: 'ALB'},
                            {alpha2: 'AM', alpha3: 'ARM'},
                            {alpha2: 'AO', alpha3: 'AGO'},
                            {alpha2: 'AQ', alpha3: 'ATA'},
                            {alpha2: 'AR', alpha3: 'ARG'},
                            {alpha2: 'AS', alpha3: 'ASM'},
                            {alpha2: 'AT', alpha3: 'AUT'},
                            {alpha2: 'AU', alpha3: 'AUS'},
                            {alpha2: 'AW', alpha3: 'ABW'},
                            {alpha2: 'AX', alpha3: 'ALA'},
                            {alpha2: 'AZ', alpha3: 'AZE'},
                            {alpha2: 'BA', alpha3: 'BIH'},
                            {alpha2: 'BB', alpha3: 'BRB'},
                            {alpha2: 'BD', alpha3: 'BGD'},
                            {alpha2: 'BE', alpha3: 'BEL'},
                            {alpha2: 'BF', alpha3: 'BFA'},
                            {alpha2: 'BG', alpha3: 'BGR'},
                            {alpha2: 'BH', alpha3: 'BHR'},
                            {alpha2: 'BI', alpha3: 'BDI'},
                            {alpha2: 'BJ', alpha3: 'BEN'},
                            {alpha2: 'BL', alpha3: 'BLM'},
                            {alpha2: 'BM', alpha3: 'BMU'},
                            {alpha2: 'BN', alpha3: 'BRN'},
                            {alpha2: 'BO', alpha3: 'BOL'},
                            {alpha2: 'BQ', alpha3: 'BES'},
                            {alpha2: 'BR', alpha3: 'BRA'},
                            {alpha2: 'BS', alpha3: 'BHS'},
                            {alpha2: 'BT', alpha3: 'BTN'},
                            {alpha2: 'BV', alpha3: 'BVT'},
                            {alpha2: 'BW', alpha3: 'BWA'},
                            {alpha2: 'BY', alpha3: 'BLR'},
                            {alpha2: 'BZ', alpha3: 'BLZ'},
                            {alpha2: 'CA', alpha3: 'CAN'},
                            {alpha2: 'CC', alpha3: 'CCK'},
                            {alpha2: 'CD', alpha3: 'COD'},
                            {alpha2: 'CF', alpha3: 'CAF'},
                            {alpha2: 'CG', alpha3: 'COG'},
                            {alpha2: 'CH', alpha3: 'CHE'},
                            {alpha2: 'CI', alpha3: 'CIV'},
                            {alpha2: 'CK', alpha3: 'COK'},
                            {alpha2: 'CL', alpha3: 'CHL'},
                            {alpha2: 'CM', alpha3: 'CMR'},
                            {alpha2: 'CN', alpha3: 'CHN'},
                            {alpha2: 'CO', alpha3: 'COL'},
                            {alpha2: 'CR', alpha3: 'CRI'},
                            {alpha2: 'CU', alpha3: 'CUB'},
                            {alpha2: 'CV', alpha3: 'CPV'},
                            {alpha2: 'CW', alpha3: 'CUW'},
                            {alpha2: 'CX', alpha3: 'CXR'},
                            {alpha2: 'CY', alpha3: 'CYP'},
                            {alpha2: 'CZ', alpha3: 'CZE'},
                            {alpha2: 'DE', alpha3: 'DEU'},
                            {alpha2: 'DJ', alpha3: 'DJI'},
                            {alpha2: 'DK', alpha3: 'DNK'},
                            {alpha2: 'DM', alpha3: 'DMA'},
                            {alpha2: 'DO', alpha3: 'DOM'},
                            {alpha2: 'DZ', alpha3: 'DZA'},
                            {alpha2: 'EC', alpha3: 'ECU'},
                            {alpha2: 'EE', alpha3: 'EST'},
                            {alpha2: 'EG', alpha3: 'EGY'},
                            {alpha2: 'EH', alpha3: 'ESH'},
                            {alpha2: 'ER', alpha3: 'ERI'},
                            {alpha2: 'ES', alpha3: 'ESP'},
                            {alpha2: 'ET', alpha3: 'ETH'},
                            {alpha2: 'FI', alpha3: 'FIN'},
                            {alpha2: 'FJ', alpha3: 'FJI'},
                            {alpha2: 'FK', alpha3: 'FLK'},
                            {alpha2: 'FM', alpha3: 'FSM'},
                            {alpha2: 'FO', alpha3: 'FRO'},
                            {alpha2: 'FR', alpha3: 'FRA'},
                            {alpha2: 'GA', alpha3: 'GAB'},
                            {alpha2: 'GB', alpha3: 'GBR'},
                            {alpha2: 'GD', alpha3: 'GRD'},
                            {alpha2: 'GE', alpha3: 'GEO'},
                            {alpha2: 'GF', alpha3: 'GUF'},
                            {alpha2: 'GG', alpha3: 'GGY'},
                            {alpha2: 'GH', alpha3: 'GHA'},
                            {alpha2: 'GI', alpha3: 'GIB'},
                            {alpha2: 'GL', alpha3: 'GRL'},
                            {alpha2: 'GM', alpha3: 'GMB'},
                            {alpha2: 'GN', alpha3: 'GIN'},
                            {alpha2: 'GP', alpha3: 'GLP'},
                            {alpha2: 'GQ', alpha3: 'GNQ'},
                            {alpha2: 'GR', alpha3: 'GRC'},
                            {alpha2: 'GS', alpha3: 'SGS'},
                            {alpha2: 'GT', alpha3: 'GTM'},
                            {alpha2: 'GU', alpha3: 'GUM'},
                            {alpha2: 'GW', alpha3: 'GNB'},
                            {alpha2: 'GY', alpha3: 'GUY'},
                            {alpha2: 'HK', alpha3: 'HKG'},
                            {alpha2: 'HM', alpha3: 'HMD'},
                            {alpha2: 'HN', alpha3: 'HND'},
                            {alpha2: 'HR', alpha3: 'HRV'},
                            {alpha2: 'HT', alpha3: 'HTI'},
                            {alpha2: 'HU', alpha3: 'HUN'},
                            {alpha2: 'ID', alpha3: 'IDN'},
                            {alpha2: 'IE', alpha3: 'IRL'},
                            {alpha2: 'IL', alpha3: 'ISR'},
                            {alpha2: 'IM', alpha3: 'IMN'},
                            {alpha2: 'IN', alpha3: 'IND'},
                            {alpha2: 'IO', alpha3: 'IOT'},
                            {alpha2: 'IQ', alpha3: 'IRQ'},
                            {alpha2: 'IR', alpha3: 'IRN'},
                            {alpha2: 'IS', alpha3: 'ISL'},
                            {alpha2: 'IT', alpha3: 'ITA'},
                            {alpha2: 'JE', alpha3: 'JEY'},
                            {alpha2: 'JM', alpha3: 'JAM'},
                            {alpha2: 'JO', alpha3: 'JOR'},
                            {alpha2: 'JP', alpha3: 'JPN'},
                            {alpha2: 'KE', alpha3: 'KEN'},
                            {alpha2: 'KG', alpha3: 'KGZ'},
                            {alpha2: 'KH', alpha3: 'KHM'},
                            {alpha2: 'KI', alpha3: 'KIR'},
                            {alpha2: 'KM', alpha3: 'COM'},
                            {alpha2: 'KN', alpha3: 'KNA'},
                            {alpha2: 'KP', alpha3: 'PRK'},
                            {alpha2: 'KR', alpha3: 'KOR'},
                            {alpha2: 'KW', alpha3: 'KWT'},
                            {alpha2: 'KY', alpha3: 'CYM'},
                            {alpha2: 'KZ', alpha3: 'KAZ'},
                            {alpha2: 'LA', alpha3: 'LAO'},
                            {alpha2: 'LB', alpha3: 'LBN'},
                            {alpha2: 'LC', alpha3: 'LCA'},
                            {alpha2: 'LI', alpha3: 'LIE'},
                            {alpha2: 'LK', alpha3: 'LKA'},
                            {alpha2: 'LR', alpha3: 'LBR'},
                            {alpha2: 'LS', alpha3: 'LSO'},
                            {alpha2: 'LT', alpha3: 'LTU'},
                            {alpha2: 'LU', alpha3: 'LUX'},
                            {alpha2: 'LV', alpha3: 'LVA'},
                            {alpha2: 'LY', alpha3: 'LBY'},
                            {alpha2: 'MA', alpha3: 'MAR'},
                            {alpha2: 'MC', alpha3: 'MCO'},
                            {alpha2: 'MD', alpha3: 'MDA'},
                            {alpha2: 'ME', alpha3: 'MNE'},
                            {alpha2: 'MF', alpha3: 'MAF'},
                            {alpha2: 'MG', alpha3: 'MDG'},
                            {alpha2: 'MH', alpha3: 'MHL'},
                            {alpha2: 'MK', alpha3: 'MKD'},
                            {alpha2: 'ML', alpha3: 'MLI'},
                            {alpha2: 'MM', alpha3: 'MMR'},
                            {alpha2: 'MN', alpha3: 'MNG'},
                            {alpha2: 'MO', alpha3: 'MAC'},
                            {alpha2: 'MP', alpha3: 'MNP'},
                            {alpha2: 'MQ', alpha3: 'MTQ'},
                            {alpha2: 'MR', alpha3: 'MRT'},
                            {alpha2: 'MS', alpha3: 'MSR'},
                            {alpha2: 'MT', alpha3: 'MLT'},
                            {alpha2: 'MU', alpha3: 'MUS'},
                            {alpha2: 'MV', alpha3: 'MDV'},
                            {alpha2: 'MW', alpha3: 'MWI'},
                            {alpha2: 'MX', alpha3: 'MEX'},
                            {alpha2: 'MY', alpha3: 'MYS'},
                            {alpha2: 'MZ', alpha3: 'MOZ'},
                            {alpha2: 'NA', alpha3: 'NAM'},
                            {alpha2: 'NC', alpha3: 'NCL'},
                            {alpha2: 'NE', alpha3: 'NER'},
                            {alpha2: 'NF', alpha3: 'NFK'},
                            {alpha2: 'NG', alpha3: 'NGA'},
                            {alpha2: 'NI', alpha3: 'NIC'},
                            {alpha2: 'NL', alpha3: 'NLD'},
                            {alpha2: 'NO', alpha3: 'NOR'},
                            {alpha2: 'NP', alpha3: 'NPL'},
                            {alpha2: 'NR', alpha3: 'NRU'},
                            {alpha2: 'NU', alpha3: 'NIU'},
                            {alpha2: 'NZ', alpha3: 'NZL'},
                            {alpha2: 'OM', alpha3: 'OMN'},
                            {alpha2: 'PA', alpha3: 'PAN'},
                            {alpha2: 'PE', alpha3: 'PER'},
                            {alpha2: 'PF', alpha3: 'PYF'},
                            {alpha2: 'PG', alpha3: 'PNG'},
                            {alpha2: 'PH', alpha3: 'PHL'},
                            {alpha2: 'PK', alpha3: 'PAK'},
                            {alpha2: 'PL', alpha3: 'POL'},
                            {alpha2: 'PM', alpha3: 'SPM'},
                            {alpha2: 'PN', alpha3: 'PCN'},
                            {alpha2: 'PR', alpha3: 'PRI'},
                            {alpha2: 'PS', alpha3: 'PSE'},
                            {alpha2: 'PT', alpha3: 'PRT'},
                            {alpha2: 'PW', alpha3: 'PLW'},
                            {alpha2: 'PY', alpha3: 'PRY'},
                            {alpha2: 'QA', alpha3: 'QAT'},
                            {alpha2: 'RE', alpha3: 'REU'},
                            {alpha2: 'RO', alpha3: 'ROU'},
                            {alpha2: 'RS', alpha3: 'SRB'},
                            {alpha2: 'RU', alpha3: 'RUS'},
                            {alpha2: 'RW', alpha3: 'RWA'},
                            {alpha2: 'SA', alpha3: 'SAU'},
                            {alpha2: 'SB', alpha3: 'SLB'},
                            {alpha2: 'SC', alpha3: 'SYC'},
                            {alpha2: 'SD', alpha3: 'SDN'},
                            {alpha2: 'SE', alpha3: 'SWE'},
                            {alpha2: 'SG', alpha3: 'SGP'},
                            {alpha2: 'SH', alpha3: 'SHN'},
                            {alpha2: 'SI', alpha3: 'SVN'},
                            {alpha2: 'SJ', alpha3: 'SJM'},
                            {alpha2: 'SK', alpha3: 'SVK'},
                            {alpha2: 'SL', alpha3: 'SLE'},
                            {alpha2: 'SM', alpha3: 'SMR'},
                            {alpha2: 'SN', alpha3: 'SEN'},
                            {alpha2: 'SO', alpha3: 'SOM'},
                            {alpha2: 'SR', alpha3: 'SUR'},
                            {alpha2: 'SS', alpha3: 'SSD'},
                            {alpha2: 'ST', alpha3: 'STP'},
                            {alpha2: 'SV', alpha3: 'SLV'},
                            {alpha2: 'SX', alpha3: 'SXM'},
                            {alpha2: 'SY', alpha3: 'SYR'},
                            {alpha2: 'SZ', alpha3: 'SWZ'},
                            {alpha2: 'TC', alpha3: 'TCA'},
                            {alpha2: 'TD', alpha3: 'TCD'},
                            {alpha2: 'TF', alpha3: 'ATF'},
                            {alpha2: 'TG', alpha3: 'TGO'},
                            {alpha2: 'TH', alpha3: 'THA'},
                            {alpha2: 'TJ', alpha3: 'TJK'},
                            {alpha2: 'TK', alpha3: 'TKL'},
                            {alpha2: 'TL', alpha3: 'TLS'},
                            {alpha2: 'TM', alpha3: 'TKM'},
                            {alpha2: 'TN', alpha3: 'TUN'},
                            {alpha2: 'TO', alpha3: 'TON'},
                            {alpha2: 'TR', alpha3: 'TUR'},
                            {alpha2: 'TT', alpha3: 'TTO'},
                            {alpha2: 'TV', alpha3: 'TUV'},
                            {alpha2: 'TW', alpha3: 'TWN'},
                            {alpha2: 'TZ', alpha3: 'TZA'},
                            {alpha2: 'UA', alpha3: 'UKR'},
                            {alpha2: 'UG', alpha3: 'UGA'},
                            {alpha2: 'UM', alpha3: 'UMI'},
                            {alpha2: 'US', alpha3: 'USA'},
                            {alpha2: 'UY', alpha3: 'URY'},
                            {alpha2: 'UZ', alpha3: 'UZB'},
                            {alpha2: 'VA', alpha3: 'VAT'},
                            {alpha2: 'VC', alpha3: 'VCT'},
                            {alpha2: 'VE', alpha3: 'VEN'},
                            {alpha2: 'VG', alpha3: 'VGB'},
                            {alpha2: 'VI', alpha3: 'VIR'},
                            {alpha2: 'VN', alpha3: 'VNM'},
                            {alpha2: 'VU', alpha3: 'VUT'},
                            {alpha2: 'WF', alpha3: 'WLF'},
                            {alpha2: 'WS', alpha3: 'WSM'},
                            {alpha2: 'YE', alpha3: 'YEM'},
                            {alpha2: 'YT', alpha3: 'MYT'},
                            {alpha2: 'ZA', alpha3: 'ZAF'},
                            {alpha2: 'ZM', alpha3: 'ZMB'},
                            {alpha2: 'ZW', alpha3: 'ZWE'},
                        ],
                        time_zone: [
                            'Africa/Abidjan',
                            'Africa/Accra',
                            'Africa/Addis_Ababa',
                            'Africa/Algiers',
                            'Africa/Asmara',
                            'Africa/Bamako',
                            'Africa/Bangui',
                            'Africa/Banjul',
                            'Africa/Bissau',
                            'Africa/Blantyre',
                            'Africa/Brazzaville',
                            'Africa/Bujumbura',
                            'Africa/Cairo',
                            'Africa/Casablanca',
                            'Africa/Ceuta',
                            'Africa/Conakry',
                            'Africa/Dakar',
                            'Africa/Dar_es_Salaam',
                            'Africa/Djibouti',
                            'Africa/Douala',
                            'Africa/El_Aaiun',
                            'Africa/Freetown',
                            'Africa/Gaborone',
                            'Africa/Harare',
                            'Africa/Johannesburg',
                            'Africa/Juba',
                            'Africa/Kampala',
                            'Africa/Khartoum',
                            'Africa/Kigali',
                            'Africa/Kinshasa',
                            'Africa/Lagos',
                            'Africa/Libreville',
                            'Africa/Lome',
                            'Africa/Luanda',
                            'Africa/Lubumbashi',
                            'Africa/Lusaka',
                            'Africa/Malabo',
                            'Africa/Maputo',
                            'Africa/Maseru',
                            'Africa/Mbabane',
                            'Africa/Mogadishu',
                            'Africa/Monrovia',
                            'Africa/Nairobi',
                            'Africa/Ndjamena',
                            'Africa/Niamey',
                            'Africa/Nouakchott',
                            'Africa/Ouagadougou',
                            'Africa/Porto-Novo',
                            'Africa/Sao_Tome',
                            'Africa/Tripoli',
                            'Africa/Tunis',
                            'Africa/Windhoek',
                            'America/Adak',
                            'America/Anchorage',
                            'America/Anguilla',
                            'America/Antigua',
                            'America/Araguaina',
                            'America/Argentina/Buenos_Aires',
                            'America/Argentina/Catamarca',
                            'America/Argentina/Cordoba',
                            'America/Argentina/Jujuy',
                            'America/Argentina/La_Rioja',
                            'America/Argentina/Mendoza',
                            'America/Argentina/Rio_Gallegos',
                            'America/Argentina/Salta',
                            'America/Argentina/San_Juan',
                            'America/Argentina/San_Luis',
                            'America/Argentina/Tucuman',
                            'America/Argentina/Ushuaia',
                            'America/Aruba',
                            'America/Asuncion',
                            'America/Atikokan',
                            'America/Bahia',
                            'America/Bahia_Banderas',
                            'America/Barbados',
                            'America/Belem',
                            'America/Belize',
                            'America/Blanc-Sablon',
                            'America/Boa_Vista',
                            'America/Bogota',
                            'America/Boise',
                            'America/Cambridge_Bay',
                            'America/Campo_Grande',
                            'America/Cancun',
                            'America/Caracas',
                            'America/Cayenne',
                            'America/Cayman',
                            'America/Chicago',
                            'America/Chihuahua',
                            'America/Costa_Rica',
                            'America/Creston',
                            'America/Cuiaba',
                            'America/Curacao',
                            'America/Danmarkshavn',
                            'America/Dawson',
                            'America/Dawson_Creek',
                            'America/Denver',
                            'America/Detroit',
                            'America/Dominica',
                            'America/Edmonton',
                            'America/Eirunepe',
                            'America/El_Salvador',
                            'America/Fort_Nelson',
                            'America/Fortaleza',
                            'America/Glace_Bay',
                            'America/Goose_Bay',
                            'America/Grand_Turk',
                            'America/Grenada',
                            'America/Guadeloupe',
                            'America/Guatemala',
                            'America/Guayaquil',
                            'America/Guyana',
                            'America/Halifax',
                            'America/Havana',
                            'America/Hermosillo',
                            'America/Indiana/Indianapolis',
                            'America/Indiana/Knox',
                            'America/Indiana/Marengo',
                            'America/Indiana/Petersburg',
                            'America/Indiana/Tell_City',
                            'America/Indiana/Vevay',
                            'America/Indiana/Vincennes',
                            'America/Indiana/Winamac',
                            'America/Inuvik',
                            'America/Iqaluit',
                            'America/Jamaica',
                            'America/Juneau',
                            'America/Kentucky/Louisville',
                            'America/Kentucky/Monticello',
                            'America/Kralendijk',
                            'America/La_Paz',
                            'America/Lima',
                            'America/Los_Angeles',
                            'America/Lower_Princes',
                            'America/Maceio',
                            'America/Managua',
                            'America/Manaus',
                            'America/Marigot',
                            'America/Martinique',
                            'America/Matamoros',
                            'America/Mazatlan',
                            'America/Menominee',
                            'America/Merida',
                            'America/Metlakatla',
                            'America/Mexico_City',
                            'America/Miquelon',
                            'America/Moncton',
                            'America/Monterrey',
                            'America/Montevideo',
                            'America/Montserrat',
                            'America/Nassau',
                            'America/New_York',
                            'America/Nome',
                            'America/Noronha',
                            'America/North_Dakota/Beulah',
                            'America/North_Dakota/Center',
                            'America/North_Dakota/New_Salem',
                            'America/Nuuk',
                            'America/Ojinaga',
                            'America/Panama',
                            'America/Paramaribo',
                            'America/Phoenix',
                            'America/Port-au-Prince',
                            'America/Port_of_Spain',
                            'America/Porto_Velho',
                            'America/Puerto_Rico',
                            'America/Punta_Arenas',
                            'America/Rankin_Inlet',
                            'America/Recife',
                            'America/Regina',
                            'America/Resolute',
                            'America/Rio_Branco',
                            'America/Santarem',
                            'America/Santiago',
                            'America/Santo_Domingo',
                            'America/Sao_Paulo',
                            'America/Scoresbysund',
                            'America/Sitka',
                            'America/St_Barthelemy',
                            'America/St_Johns',
                            'America/St_Kitts',
                            'America/St_Lucia',
                            'America/St_Thomas',
                            'America/St_Vincent',
                            'America/Swift_Current',
                            'America/Tegucigalpa',
                            'America/Thule',
                            'America/Tijuana',
                            'America/Toronto',
                            'America/Tortola',
                            'America/Vancouver',
                            'America/Whitehorse',
                            'America/Winnipeg',
                            'America/Yakutat',
                            'America/Yellowknife',
                            'Antarctica/Casey',
                            'Antarctica/Davis',
                            'Antarctica/DumontDUrville',
                            'Antarctica/Macquarie',
                            'Antarctica/Mawson',
                            'Antarctica/McMurdo',
                            'Antarctica/Palmer',
                            'Antarctica/Rothera',
                            'Antarctica/Syowa',
                            'Antarctica/Troll',
                            'Antarctica/Vostok',
                            'Arctic/Longyearbyen',
                            'Asia/Aden',
                            'Asia/Almaty',
                            'Asia/Amman',
                            'Asia/Anadyr',
                            'Asia/Aqtau',
                            'Asia/Aqtobe',
                            'Asia/Ashgabat',
                            'Asia/Atyrau',
                            'Asia/Baghdad',
                            'Asia/Bahrain',
                            'Asia/Baku',
                            'Asia/Bangkok',
                            'Asia/Barnaul',
                            'Asia/Beirut',
                            'Asia/Bishkek',
                            'Asia/Brunei',
                            'Asia/Chita',
                            'Asia/Choibalsan',
                            'Asia/Colombo',
                            'Asia/Damascus',
                            'Asia/Dhaka',
                            'Asia/Dili',
                            'Asia/Dubai',
                            'Asia/Dushanbe',
                            'Asia/Famagusta',
                            'Asia/Gaza',
                            'Asia/Hebron',
                            'Asia/Ho_Chi_Minh',
                            'Asia/Hong_Kong',
                            'Asia/Hovd',
                            'Asia/Irkutsk',
                            'Asia/Jakarta',
                            'Asia/Jayapura',
                            'Asia/Jerusalem',
                            'Asia/Kabul',
                            'Asia/Kamchatka',
                            'Asia/Karachi',
                            'Asia/Kathmandu',
                            'Asia/Khandyga',
                            'Asia/Kolkata',
                            'Asia/Krasnoyarsk',
                            'Asia/Kuala_Lumpur',
                            'Asia/Kuching',
                            'Asia/Kuwait',
                            'Asia/Macau',
                            'Asia/Magadan',
                            'Asia/Makassar',
                            'Asia/Manila',
                            'Asia/Muscat',
                            'Asia/Nicosia',
                            'Asia/Novokuznetsk',
                            'Asia/Novosibirsk',
                            'Asia/Omsk',
                            'Asia/Oral',
                            'Asia/Phnom_Penh',
                            'Asia/Pontianak',
                            'Asia/Pyongyang',
                            'Asia/Qatar',
                            'Asia/Qostanay',
                            'Asia/Qyzylorda',
                            'Asia/Riyadh',
                            'Asia/Sakhalin',
                            'Asia/Samarkand',
                            'Asia/Seoul',
                            'Asia/Shanghai',
                            'Asia/Singapore',
                            'Asia/Srednekolymsk',
                            'Asia/Taipei',
                            'Asia/Tashkent',
                            'Asia/Tbilisi',
                            'Asia/Tehran',
                            'Asia/Thimphu',
                            'Asia/Tokyo',
                            'Asia/Tomsk',
                            'Asia/Ulaanbaatar',
                            'Asia/Urumqi',
                            'Asia/Ust-Nera',
                            'Asia/Vientiane',
                            'Asia/Vladivostok',
                            'Asia/Yakutsk',
                            'Asia/Yangon',
                            'Asia/Yekaterinburg',
                            'Asia/Yerevan',
                            'Atlantic/Azores',
                            'Atlantic/Bermuda',
                            'Atlantic/Canary',
                            'Atlantic/Cape_Verde',
                            'Atlantic/Faroe',
                            'Atlantic/Madeira',
                            'Atlantic/Reykjavik',
                            'Atlantic/South_Georgia',
                            'Atlantic/St_Helena',
                            'Atlantic/Stanley',
                            'Australia/Adelaide',
                            'Australia/Brisbane',
                            'Australia/Broken_Hill',
                            'Australia/Darwin',
                            'Australia/Eucla',
                            'Australia/Hobart',
                            'Australia/Lindeman',
                            'Australia/Lord_Howe',
                            'Australia/Melbourne',
                            'Australia/Perth',
                            'Australia/Sydney',
                            'Europe/Amsterdam',
                            'Europe/Andorra',
                            'Europe/Astrakhan',
                            'Europe/Athens',
                            'Europe/Belgrade',
                            'Europe/Berlin',
                            'Europe/Bratislava',
                            'Europe/Brussels',
                            'Europe/Bucharest',
                            'Europe/Budapest',
                            'Europe/Busingen',
                            'Europe/Chisinau',
                            'Europe/Copenhagen',
                            'Europe/Dublin',
                            'Europe/Gibraltar',
                            'Europe/Guernsey',
                            'Europe/Helsinki',
                            'Europe/Isle_of_Man',
                            'Europe/Istanbul',
                            'Europe/Jersey',
                            'Europe/Kaliningrad',
                            'Europe/Kirov',
                            'Europe/Kyiv',
                            'Europe/Lisbon',
                            'Europe/Ljubljana',
                            'Europe/London',
                            'Europe/Luxembourg',
                            'Europe/Madrid',
                            'Europe/Malta',
                            'Europe/Mariehamn',
                            'Europe/Minsk',
                            'Europe/Monaco',
                            'Europe/Moscow',
                            'Europe/Oslo',
                            'Europe/Paris',
                            'Europe/Podgorica',
                            'Europe/Prague',
                            'Europe/Riga',
                            'Europe/Rome',
                            'Europe/Samara',
                            'Europe/San_Marino',
                            'Europe/Sarajevo',
                            'Europe/Saratov',
                            'Europe/Simferopol',
                            'Europe/Skopje',
                            'Europe/Sofia',
                            'Europe/Stockholm',
                            'Europe/Tallinn',
                            'Europe/Tirane',
                            'Europe/Ulyanovsk',
                            'Europe/Vaduz',
                            'Europe/Vatican',
                            'Europe/Vienna',
                            'Europe/Vilnius',
                            'Europe/Volgograd',
                            'Europe/Warsaw',
                            'Europe/Zagreb',
                            'Europe/Zurich',
                            'Indian/Antananarivo',
                            'Indian/Chagos',
                            'Indian/Christmas',
                            'Indian/Cocos',
                            'Indian/Comoro',
                            'Indian/Kerguelen',
                            'Indian/Mahe',
                            'Indian/Maldives',
                            'Indian/Mauritius',
                            'Indian/Mayotte',
                            'Indian/Reunion',
                            'Pacific/Apia',
                            'Pacific/Auckland',
                            'Pacific/Bougainville',
                            'Pacific/Chatham',
                            'Pacific/Chuuk',
                            'Pacific/Easter',
                            'Pacific/Efate',
                            'Pacific/Fakaofo',
                            'Pacific/Fiji',
                            'Pacific/Funafuti',
                            'Pacific/Galapagos',
                            'Pacific/Gambier',
                            'Pacific/Guadalcanal',
                            'Pacific/Guam',
                            'Pacific/Honolulu',
                            'Pacific/Kanton',
                            'Pacific/Kiritimati',
                            'Pacific/Kosrae',
                            'Pacific/Kwajalein',
                            'Pacific/Majuro',
                            'Pacific/Marquesas',
                            'Pacific/Midway',
                            'Pacific/Nauru',
                            'Pacific/Niue',
                            'Pacific/Norfolk',
                            'Pacific/Noumea',
                            'Pacific/Pago_Pago',
                            'Pacific/Palau',
                            'Pacific/Pitcairn',
                            'Pacific/Pohnpei',
                            'Pacific/Port_Moresby',
                            'Pacific/Rarotonga',
                            'Pacific/Saipan',
                            'Pacific/Tahiti',
                            'Pacific/Tarawa',
                            'Pacific/Tongatapu',
                            'Pacific/Wake',
                            'Pacific/Wallis',
                        ],
                    },
                    metadata: {title: 'Base', code: 'base'},
                    system: {
                        directoryPaths: [
                            '/Applications',
                            '/bin',
                            '/boot',
                            '/boot/defaults',
                            '/dev',
                            '/etc',
                            '/etc/defaults',
                            '/etc/mail',
                            '/etc/namedb',
                            '/etc/periodic',
                            '/etc/ppp',
                            '/home',
                            '/home/user',
                            '/home/user/dir',
                            '/lib',
                            '/Library',
                            '/lost+found',
                            '/media',
                            '/mnt',
                            '/net',
                            '/Network',
                            '/opt',
                            '/opt/bin',
                            '/opt/include',
                            '/opt/lib',
                            '/opt/sbin',
                            '/opt/share',
                            '/private',
                            '/private/tmp',
                            '/private/var',
                            '/proc',
                            '/rescue',
                            '/root',
                            '/sbin',
                            '/selinux',
                            '/srv',
                            '/sys',
                            '/System',
                            '/tmp',
                            '/Users',
                            '/usr',
                            '/usr/X11R6',
                            '/usr/bin',
                            '/usr/include',
                            '/usr/lib',
                            '/usr/libdata',
                            '/usr/libexec',
                            '/usr/local/bin',
                            '/usr/local/src',
                            '/usr/obj',
                            '/usr/ports',
                            '/usr/sbin',
                            '/usr/share',
                            '/usr/src',
                            '/var',
                            '/var/log',
                            '/var/mail',
                            '/var/spool',
                            '/var/tmp',
                            '/var/yp',
                        ],
                        mimeTypes: {
                            'application/epub+zip': {extensions: ['epub']},
                            'application/gzip': {extensions: ['gz']},
                            'application/java-archive': {extensions: ['jar', 'war', 'ear']},
                            'application/json': {extensions: ['json', 'map']},
                            'application/ld+json': {extensions: ['jsonld']},
                            'application/msword': {extensions: ['doc', 'dot']},
                            'application/octet-stream': {
                                extensions: [
                                    'bin',
                                    'dms',
                                    'lrf',
                                    'mar',
                                    'so',
                                    'dist',
                                    'distz',
                                    'pkg',
                                    'bpk',
                                    'dump',
                                    'elc',
                                    'deploy',
                                    'exe',
                                    'dll',
                                    'deb',
                                    'dmg',
                                    'iso',
                                    'img',
                                    'msi',
                                    'msp',
                                    'msm',
                                    'buffer',
                                ],
                            },
                            'application/ogg': {extensions: ['ogx']},
                            'application/pdf': {extensions: ['pdf']},
                            'application/rtf': {extensions: ['rtf']},
                            'application/vnd.amazon.ebook': {extensions: ['azw']},
                            'application/vnd.apple.installer+xml': {extensions: ['mpkg']},
                            'application/vnd.mozilla.xul+xml': {extensions: ['xul']},
                            'application/vnd.ms-excel': {extensions: ['xls', 'xlm', 'xla', 'xlc', 'xlt', 'xlw']},
                            'application/vnd.ms-fontobject': {extensions: ['eot']},
                            'application/vnd.ms-powerpoint': {extensions: ['ppt', 'pps', 'pot']},
                            'application/vnd.oasis.opendocument.presentation': {extensions: ['odp']},
                            'application/vnd.oasis.opendocument.spreadsheet': {extensions: ['ods']},
                            'application/vnd.oasis.opendocument.text': {extensions: ['odt']},
                            'application/vnd.openxmlformats-officedocument.presentationml.presentation': {
                                extensions: ['pptx'],
                            },
                            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {extensions: ['xlsx']},
                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
                                extensions: ['docx'],
                            },
                            'application/vnd.rar': {extensions: ['rar']},
                            'application/vnd.visio': {extensions: ['vsd', 'vst', 'vss', 'vsw']},
                            'application/x-7z-compressed': {extensions: ['7z']},
                            'application/x-abiword': {extensions: ['abw']},
                            'application/x-bzip': {extensions: ['bz']},
                            'application/x-bzip2': {extensions: ['bz2', 'boz']},
                            'application/x-csh': {extensions: ['csh']},
                            'application/x-freearc': {extensions: ['arc']},
                            'application/x-httpd-php': {extensions: ['php']},
                            'application/x-sh': {extensions: ['sh']},
                            'application/x-tar': {extensions: ['tar']},
                            'application/xhtml+xml': {extensions: ['xhtml', 'xht']},
                            'application/xml': {extensions: ['xml', 'xsl', 'xsd', 'rng']},
                            'application/zip': {extensions: ['zip']},
                            'audio/3gpp': {extensions: ['3gpp']},
                            'audio/3gpp2': {extensions: ['3g2']},
                            'audio/aac': {extensions: ['aac']},
                            'audio/midi': {extensions: ['mid', 'midi', 'kar', 'rmi']},
                            'audio/mpeg': {extensions: ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a']},
                            'audio/ogg': {extensions: ['oga', 'ogg', 'spx', 'opus']},
                            'audio/opus': {extensions: ['opus']},
                            'audio/wav': {extensions: ['wav']},
                            'audio/webm': {extensions: ['weba']},
                            'font/otf': {extensions: ['otf']},
                            'font/ttf': {extensions: ['ttf']},
                            'font/woff': {extensions: ['woff']},
                            'font/woff2': {extensions: ['woff2']},
                            'image/avif': {extensions: ['avif']},
                            'image/bmp': {extensions: ['bmp']},
                            'image/gif': {extensions: ['gif']},
                            'image/jpeg': {extensions: ['jpeg', 'jpg', 'jpe']},
                            'image/png': {extensions: ['png']},
                            'image/svg+xml': {extensions: ['svg', 'svgz']},
                            'image/tiff': {extensions: ['tif', 'tiff']},
                            'image/vnd.microsoft.icon': {extensions: ['ico']},
                            'image/webp': {extensions: ['webp']},
                            'text/calendar': {extensions: ['ics', 'ifb']},
                            'text/css': {extensions: ['css']},
                            'text/csv': {extensions: ['csv']},
                            'text/html': {extensions: ['html', 'htm', 'shtml']},
                            'text/javascript': {extensions: ['js', 'mjs']},
                            'text/plain': {extensions: ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini']},
                            'video/3gpp': {extensions: ['3gp', '3gpp']},
                            'video/3gpp2': {extensions: ['3g2']},
                            'video/mp2t': {extensions: ['ts']},
                            'video/mp4': {extensions: ['mp4', 'mp4v', 'mpg4']},
                            'video/mpeg': {extensions: ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v']},
                            'video/ogg': {extensions: ['ogv']},
                            'video/webm': {extensions: ['webm']},
                            'video/x-msvideo': {extensions: ['avi']},
                        },
                    },
                };
        },
    },
]);
