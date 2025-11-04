(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [60163],
    {
        32042: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/form/ActionIcon',
                function () {
                    return t(9007);
                },
            ]);
        },
        9007: function (n, e, t) {
            'use strict';
            (t.r(e),
                t.d(e, {
                    default: function () {
                        return b;
                    },
                }));
            var o,
                i = t(97458),
                c = t(19523),
                s = t(52071),
                r = t(88966),
                a = t(39668),
                l = t(15084),
                u = t(4778),
                m = function () {
                    return (0, i.jsx)(l.Aar, {
                        onClick: function () {
                            return (0, l.c0f)({message: 'Button clicked'});
                        },
                        variant: 'filled',
                        color: 'action',
                        size: 'lg',
                        children: (0, i.jsx)(u.EditSize16Px, {height: 16}),
                    });
                },
                d = function (n) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, r._)(
                            (0, s._)(
                                {
                                    snippet:
                                        'import {ActionIcon, showNotification} from \'@coveord/plasma-mantine\';\nimport {EditSize16Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <ActionIcon onClick={() => showNotification({message: \'Button clicked\'})} variant="filled" color="action" size="lg">\n        <EditSize16Px height={16} />\n    </ActionIcon>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(m, {})},
                        ),
                    );
                },
                h = function () {
                    return (0, i.jsx)(l.Aar, {
                        onClick: function () {
                            return (0, l.c0f)({message: 'Button clicked'});
                        },
                        disabled: !0,
                        disabledTooltip: 'This button is disabled',
                        variant: 'outline',
                        color: 'action',
                        size: 'lg',
                        children: (0, i.jsx)(u.ZombieSize16Px, {height: 16}),
                    });
                },
                f = function (n) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, r._)(
                            (0, s._)(
                                {
                                    snippet:
                                        'import {ActionIcon, showNotification} from \'@coveord/plasma-mantine\';\nimport {ZombieSize16Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <ActionIcon\n        onClick={() => showNotification({message: \'Button clicked\'})}\n        disabled\n        disabledTooltip="This button is disabled"\n        variant="outline"\n        color="action"\n        size="lg"\n    >\n        <ZombieSize16Px height={16} />\n    </ActionIcon>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(h, {})},
                        ),
                    );
                },
                p = function () {
                    return (0, i.jsx)(l.Aar, {
                        onClick: function () {
                            return (0, l.c0f)({message: 'Button clicked'});
                        },
                        variant: 'outline',
                        color: 'action',
                        size: 'lg',
                        children: (0, i.jsx)(u.SettingsSize16Px, {height: 16}),
                    });
                },
                x = function (n) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, r._)(
                            (0, s._)(
                                {
                                    snippet:
                                        'import {ActionIcon, showNotification} from \'@coveord/plasma-mantine\';\nimport {SettingsSize16Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <ActionIcon\n        onClick={() => showNotification({message: \'Button clicked\'})}\n        variant="outline"\n        color="action"\n        size="lg"\n    >\n        <SettingsSize16Px height={16} />\n    </ActionIcon>\n);\nexport default Demo;\n',
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(p, {})},
                        ),
                    );
                },
                g = t(80762),
                k = t(43112),
                w =
                    ((o = (0, g._)(function () {
                        return (0, k.Jh)(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return [
                                        4,
                                        new Promise(function (n) {
                                            return setTimeout(n, 3e3);
                                        }),
                                    ];
                                case 1:
                                    return (
                                        n.sent(),
                                        (0, l.c0f)({
                                            title: 'Deleted successfully',
                                            message:
                                                'The delete button was put in a loading state while it was waiting for the delete to resolve.',
                                            autoClose: !1,
                                            icon: (0, i.jsx)(u.CheckmarkSize24Px, {height: 24}),
                                            color: 'success',
                                        }),
                                        [2]
                                    );
                            }
                        });
                    })),
                    function () {
                        return o.apply(this, arguments);
                    }),
                A = function () {
                    return (0, i.jsx)(l.Aar, {
                        onClick: w,
                        color: 'red',
                        size: 'lg',
                        children: (0, i.jsx)(u.DeleteSize16Px, {height: 16}),
                    });
                },
                z = function (n) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, r._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {ActionIcon, showNotification} from '@coveord/plasma-mantine';\nimport {CheckmarkSize24Px, DeleteSize16Px} from '@coveord/plasma-react-icons';\n\nconst somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));\n\nconst promise = async () => {\n    await somethingAsync(3000);\n    showNotification({\n        title: 'Deleted successfully',\n        message: 'The delete button was put in a loading state while it was waiting for the delete to resolve.',\n        autoClose: false,\n        icon: <CheckmarkSize24Px height={24} />,\n        color: 'success',\n    });\n};\n\nconst Demo = () => (\n    <ActionIcon onClick={promise} color=\"red\" size=\"lg\">\n        <DeleteSize16Px height={16} />\n    </ActionIcon>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(A, {})},
                        ),
                    );
                },
                j = t(66809),
                b = function () {
                    return (0, i.jsx)(j.X, {
                        id: 'ActionIcon',
                        title: 'Action Icon',
                        section: 'Form',
                        thumbnail: 'actionButton',
                        description: 'An ActionIcon is an icon-only button.',
                        demo: (0, i.jsx)(d, {center: !0}),
                        examples: {
                            secondary: (0, i.jsx)(x, {center: !0, title: 'Secondary'}),
                            disabled: (0, i.jsx)(f, {center: !0, title: 'Disabled'}),
                            promiseHandler: (0, i.jsx)(z, {center: !0, title: 'Async click handler'}),
                        },
                        sourcePath: '/packages/mantine/src/components/action-icon/ActionIcon.tsx',
                        propsMetadata: c.Pq,
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 32042));
        }),
            (_N_E = n.O()));
    },
]);
