(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [87160],
    {
        88497: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/advanced/ActionBar',
                function () {
                    return t(48614);
                },
            ]);
        },
        48614: function (n, e, t) {
            'use strict';
            (t.r(e),
                t.d(e, {
                    default: function () {
                        return b;
                    },
                }));
            var i = t(97458),
                o = t(19523),
                r = t(52071),
                a = t(88966),
                c = t(39668),
                s = t(94807),
                d = t(4778),
                l = t(48692),
                u = 'action-bar-id',
                m = function () {
                    var n,
                        e = (0, l.I0)(),
                        t = (0, l.v9)(function (e) {
                            var t;
                            return null !==
                                (n =
                                    null ===
                                        (t = e.actionBars.find(function (n) {
                                            return n.id === u;
                                        })) || void 0 === t
                                        ? void 0
                                        : t.actions) && void 0 !== n
                                ? n
                                : [];
                        });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.zxk, {
                                onClick: function () {
                                    t.length ? e((0, s.rm5)(u, [])) : e((0, s.rm5)(u, A));
                                },
                                classes: 'mb2',
                                children: 'Toggle actions',
                            }),
                            (0, i.jsx)(s.q05, {id: u}),
                        ],
                    });
                },
                A = [
                    s.d$V,
                    {
                        name: 'Link to Coveo',
                        link: 'http://coveo.com',
                        target: '_blank',
                        icon: d.EditSize24Px,
                        primary: !0,
                        enabled: !0,
                    },
                    s.d$V,
                    {
                        name: 'Confirm Me',
                        trigger: function () {
                            return alert('You confirmed this action !');
                        },
                        target: '_blank',
                        icon: d.UnavailableSize24Px,
                        primary: !0,
                        enabled: !0,
                        requiresConfirmation: {
                            confirmLabel: 'Want to do this action ?',
                            confirmType: 'danger',
                            buttonLabels: {confirm: 'sure !', cancel: 'never !'},
                        },
                    },
                    s.d$V,
                    {
                        name: 'Action 1',
                        trigger: function () {
                            return alert('Action 1 was triggered');
                        },
                        enabled: !0,
                        icon: d.EditSize24Px,
                        requiresConfirmation: {confirmType: 'danger', buttonLabels: {confirm: 'Yes', cancel: 'Cancel'}},
                    },
                    s.d$V,
                    s.d$V,
                    {
                        name: 'Action 2',
                        trigger: function () {
                            return alert('Action 2 was triggered');
                        },
                        enabled: !0,
                        requiresConfirmation: {
                            confirmType: 'danger',
                            buttonLabels: {confirm: 'Pretty sure!', cancel: 'Cancel'},
                        },
                    },
                    {
                        name: 'Action 4',
                        trigger: function () {
                            return alert('Action 4 was triggered');
                        },
                        enabled: !0,
                    },
                    s.d$V,
                    {
                        name: 'Link to Coveo (disabled)',
                        link: 'http://coveo.com',
                        target: '_blank',
                        icon: d.EditSize24Px,
                        primary: !0,
                        enabled: !1,
                        hideDisabled: !1,
                    },
                    s.d$V,
                ],
                f = function (n) {
                    return (0, i.jsx)(
                        c.Z,
                        (0, a._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {\n    ACTION_SEPARATOR,\n    ActionBarConnected,\n    addActionsToActionBar,\n    Button,\n    IActionOptions,\n    IDispatch,\n    PlasmaState,\n    IActionBarState,\n} from '@coveord/plasma-react';\nimport {EditSize24Px, UnavailableSize24Px} from '@coveord/plasma-react-icons';\nimport {useDispatch, useSelector} from 'react-redux';\n\nconst MY_ID = 'action-bar-id';\n\nconst Demo = () => {\n    const dispatch: IDispatch = useDispatch();\n\n    const actions = useSelector(\n        (state: PlasmaState) =>\n            state.actionBars.find((actionBar: IActionBarState) => actionBar.id === MY_ID)?.actions ?? [],\n    );\n\n    const toggleActions = () => {\n        if (actions.length) {\n            dispatch(addActionsToActionBar(MY_ID, []));\n        } else {\n            dispatch(addActionsToActionBar(MY_ID, BIG_LIST_OF_ACTIONS));\n        }\n    };\n    return (\n        <>\n            <Button onClick={toggleActions} classes=\"mb2\">\n                Toggle actions\n            </Button>\n            <ActionBarConnected id={MY_ID} />\n        </>\n    );\n};\nexport default Demo;\n\nconst BIG_LIST_OF_ACTIONS: IActionOptions[] = [\n    ACTION_SEPARATOR,\n    {\n        name: 'Link to Coveo',\n        link: 'http://coveo.com',\n        target: '_blank',\n        icon: EditSize24Px,\n        primary: true,\n        enabled: true,\n    },\n    ACTION_SEPARATOR,\n    {\n        name: 'Confirm Me',\n        trigger: () => alert('You confirmed this action !'),\n        target: '_blank',\n        icon: UnavailableSize24Px,\n        primary: true,\n        enabled: true,\n        requiresConfirmation: {\n            confirmLabel: 'Want to do this action ?',\n            confirmType: 'danger',\n            buttonLabels: {\n                confirm: 'sure !',\n                cancel: 'never !',\n            },\n        },\n    },\n    ACTION_SEPARATOR,\n    {\n        name: 'Action 1',\n        trigger: () => alert('Action 1 was triggered'),\n        enabled: true,\n        icon: EditSize24Px,\n        requiresConfirmation: {\n            confirmType: 'danger',\n            buttonLabels: {\n                confirm: 'Yes',\n                cancel: 'Cancel',\n            },\n        },\n    },\n    ACTION_SEPARATOR,\n    ACTION_SEPARATOR,\n    {\n        name: 'Action 2',\n        trigger: () => alert('Action 2 was triggered'),\n        enabled: true,\n        requiresConfirmation: {\n            confirmType: 'danger',\n            buttonLabels: {\n                confirm: 'Pretty sure!',\n                cancel: 'Cancel',\n            },\n        },\n    },\n    {\n        name: 'Action 4',\n        trigger: () => alert('Action 4 was triggered'),\n        enabled: true,\n    },\n    ACTION_SEPARATOR,\n    {\n        name: 'Link to Coveo (disabled)',\n        link: 'http://coveo.com',\n        target: '_blank',\n        icon: EditSize24Px,\n        primary: true,\n        enabled: false,\n        hideDisabled: false,\n    },\n    ACTION_SEPARATOR,\n];\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(m, {})},
                        ),
                    );
                },
                g = t(66809),
                b = function () {
                    return (0, i.jsx)(g.X, {
                        id: 'ActionBarConnected',
                        title: 'Action Bar',
                        section: 'Advanced',
                        demo: (0, i.jsx)(f, {}),
                        propsMetadata: o.FZ,
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 88497));
        }),
            (_N_E = n.O()));
    },
]);
