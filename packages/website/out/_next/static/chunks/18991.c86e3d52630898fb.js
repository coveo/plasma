'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [18991],
    {
        18991: function (_, e, t) {
            (t.r(e),
                t.d(e, {
                    z: function () {
                        return a;
                    },
                }));
            var s = t(87856),
                d = t(30839),
                n = (0, s.c)(function (_, e) {
                    var t, n;
                    (s.a,
                        (_.exports =
                            ((t = d.d),
                            (n = {
                                name: 'zh-hk',
                                months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
                                monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
                                weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
                                weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
                                weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
                                ordinal: function (_, e) {
                                    return 'W' === e ? _ + '週' : _ + '日';
                                },
                                formats: {
                                    LT: 'HH:mm',
                                    LTS: 'HH:mm:ss',
                                    L: 'YYYY/MM/DD',
                                    LL: 'YYYY年M月D日',
                                    LLL: 'YYYY年M月D日 HH:mm',
                                    LLLL: 'YYYY年M月D日dddd HH:mm',
                                },
                                relativeTime: {
                                    future: '%s內',
                                    past: '%s前',
                                    s: '幾秒',
                                    m: '一分鐘',
                                    mm: '%d 分鐘',
                                    h: '一小時',
                                    hh: '%d 小時',
                                    d: '一天',
                                    dd: '%d 天',
                                    M: '一個月',
                                    MM: '%d 個月',
                                    y: '一年',
                                    yy: '%d 年',
                                },
                            }),
                            (t && 'object' == typeof t && 'default' in t ? t : {default: t}).default.locale(
                                n,
                                null,
                                !0,
                            ),
                            n)));
                });
            let a = Object.freeze(Object.assign(Object.create(null), n, {default: n}));
        },
    },
]);
