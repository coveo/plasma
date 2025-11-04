(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2592],
    {
        58325: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/feedback/SyncFeedback',
                function () {
                    return n(75136);
                },
            ]);
        },
        75136: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    default: function () {
                        return k;
                    },
                }));
            var c = n(97458),
                a = n(19523),
                s = n(52071),
                r = n(88966),
                d = n(39668),
                S = n(94807),
                i = function () {
                    return (0, c.jsxs)('table', {
                        className: 'table',
                        children: [
                            (0, c.jsxs)('tr', {
                                children: [
                                    (0, c.jsx)('td', {children: 'NONE'}),
                                    (0, c.jsx)('td', {children: (0, c.jsx)(S.DyG, {state: S.rT8.NONE})}),
                                ],
                            }),
                            (0, c.jsxs)('tr', {
                                children: [
                                    (0, c.jsx)('td', {children: 'SYNCING'}),
                                    (0, c.jsx)('td', {children: (0, c.jsx)(S.DyG, {state: S.rT8.SYNCING})}),
                                ],
                            }),
                            (0, c.jsxs)('tr', {
                                children: [
                                    (0, c.jsx)('td', {children: 'SUCCESS'}),
                                    (0, c.jsx)('td', {children: (0, c.jsx)(S.DyG, {state: S.rT8.SUCCESS})}),
                                ],
                            }),
                            (0, c.jsxs)('tr', {
                                children: [
                                    (0, c.jsx)('td', {children: 'ERROR'}),
                                    (0, c.jsx)('td', {children: (0, c.jsx)(S.DyG, {state: S.rT8.ERROR})}),
                                ],
                            }),
                        ],
                    });
                },
                o = function (e) {
                    return (0, c.jsx)(
                        d.Z,
                        (0, r._)(
                            (0, s._)(
                                {
                                    snippet:
                                        'import {SyncFeedback, SyncFeedbackState} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <table className="table">\n        <tr>\n            <td>NONE</td>\n            <td>\n                <SyncFeedback state={SyncFeedbackState.NONE} />\n            </td>\n        </tr>\n        <tr>\n            <td>SYNCING</td>\n            <td>\n                <SyncFeedback state={SyncFeedbackState.SYNCING} />\n            </td>\n        </tr>\n\n        <tr>\n            <td>SUCCESS</td>\n            <td>\n                <SyncFeedback state={SyncFeedbackState.SUCCESS} />\n            </td>\n        </tr>\n\n        <tr>\n            <td>ERROR</td>\n            <td>\n                <SyncFeedback state={SyncFeedbackState.ERROR} />\n            </td>\n        </tr>\n    </table>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, c.jsx)(i, {})},
                        ),
                    );
                },
                b = function () {
                    return (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(S.DyG, {state: S.rT8.SYNCING, feedback: 'There is something happening'}),
                            (0, c.jsx)(S.DyG, {state: S.rT8.SUCCESS, feedback: 'There was a success'}),
                            (0, c.jsx)(S.DyG, {state: S.rT8.ERROR, feedback: 'There was an error'}),
                        ],
                    });
                },
                u = function (e) {
                    return (0, c.jsx)(
                        d.Z,
                        (0, r._)(
                            (0, s._)(
                                {
                                    snippet:
                                        'import {SyncFeedback, SyncFeedbackState} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <>\n        <SyncFeedback state={SyncFeedbackState.SYNCING} feedback="There is something happening" />\n        <SyncFeedback state={SyncFeedbackState.SUCCESS} feedback="There was a success" />\n        <SyncFeedback state={SyncFeedbackState.ERROR} feedback="There was an error" />\n    </>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, c.jsx)(b, {})},
                        ),
                    );
                },
                l = n(66809),
                k = function () {
                    return (0, c.jsx)(l.X, {
                        id: 'SyncFeedback',
                        title: 'Sync Feedback',
                        section: 'Feedback',
                        description: 'A sync feedback indicates the status of an operation to the user.',
                        demo: (0, c.jsx)(o, {center: !0}),
                        sourcePath: '/packages/react/src/components/numericInput/NumericInputConnected.tsx',
                        propsMetadata: a.Uu,
                        examples: {label: (0, c.jsx)(u, {center: !0, title: 'Custom Labels'})},
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 58325));
        }),
            (_N_E = e.O()));
    },
]);
