(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [35728],
    {
        35728: function (e, n, s) {
            'use strict';
            (s.r(n),
                s.d(n, {
                    ResultList: function () {
                        return x;
                    },
                }));
            var t = s(53520),
                r = s(97458),
                i = s(60868),
                c = s(15847),
                a = s(33557),
                u = s(94807),
                l = s(52983),
                o = s(37791),
                d = s(9422),
                h = s(67577),
                f = s.n(h),
                m = function (e) {
                    var n = e.engine,
                        s = e.query,
                        c = (0, d.useRouter)(),
                        a = (0, i.MV)(n),
                        o = (0, t._)((0, l.useState)(a.state), 2),
                        h = o[0],
                        m = o[1];
                    (0, l.useEffect)(function () {
                        return a.subscribe(function () {
                            return m(a.state);
                        });
                    }, []);
                    var x = function () {
                        c.push('/');
                    };
                    return (0, r.jsxs)('div', {
                        className: 'grid item-center',
                        children: [
                            (0, r.jsx)('img', {className: 'mt3 mb3', src: f()}),
                            (0, r.jsxs)('div', {
                                className: 'grid item-center',
                                children: [
                                    (0, r.jsxs)('span', {
                                        className: 'h4-book mb1 nowrap',
                                        children: [
                                            'We couldn’t find anything for ',
                                            (0, r.jsxs)('span', {className: 'h4', children: [' “', s, '”']}),
                                        ],
                                    }),
                                    (0, r.jsx)('span', {
                                        className: 'h6-subdued mb3 nowrap',
                                        children:
                                            'You may want to try using different keywords, or checking for spelling mistakes.',
                                    }),
                                    (0, r.jsx)(u.zxk, {
                                        primary: !0,
                                        onClick: function () {
                                            0 !== h.past.length ? a.backOnNoResults() : x();
                                        },
                                        children: 'Clear search',
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                x = function (e) {
                    var n = e.controller,
                        s = e.engine,
                        d = e.query,
                        h = (0, t._)((0, l.useState)(n.state), 2),
                        f = h[0],
                        x = h[1],
                        p = (0, i.G_)(s).logDocumentOpen;
                    return (
                        (0, l.useEffect)(
                            function () {
                                return n.subscribe(function () {
                                    return x(n.state);
                                });
                            },
                            [n],
                        ),
                        (0, r.jsx)(r.Fragment, {
                            children:
                                f.hasResults || f.isLoading
                                    ? (0, r.jsx)(u.$0h, {
                                          className: 'home flex-auto overflow-auto',
                                          children: (0, r.jsxs)(u.$0h, {
                                              className: 'section',
                                              children: [
                                                  (0, r.jsx)(c.V, {engine: s, children: (0, r.jsx)(a.CU, {})}),
                                                  (0, r.jsx)('div', {
                                                      className: 'tile-grid',
                                                      children: f.results.map(function (e) {
                                                          return (0, r.jsx)(
                                                              o.n,
                                                              {
                                                                  title: e.title,
                                                                  href: e.clickUri,
                                                                  description: e.raw.description,
                                                                  thumbnail: e.raw.thumbnail,
                                                                  sendAnalytics: function () {
                                                                      return s.dispatch(p(e));
                                                                  },
                                                              },
                                                              e.uniqueId,
                                                          );
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      })
                                    : (0, r.jsx)(c.V, {
                                          engine: s,
                                          children: (0, r.jsx)(u.$0h, {
                                              className: 'section',
                                              children: (0, r.jsx)(m, {engine: s, query: d}),
                                          }),
                                      }),
                        })
                    );
                };
        },
        67577: function (e) {
            e.exports = '/_next/static/images/results_empty_state-015bd10dc5e4b9e3baf6605fd3e938eb.png';
        },
    },
]);
