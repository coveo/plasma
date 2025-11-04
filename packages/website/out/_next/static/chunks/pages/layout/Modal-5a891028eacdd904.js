(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [90024],
    {
        82262: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/layout/Modal',
                function () {
                    return t(83324);
                },
            ]);
        },
        83324: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    default: function () {
                        return T;
                    },
                }));
            var a = t(97458),
                o = t(19523),
                i = t(52071),
                s = t(88966),
                l = t(53520),
                r = t(39668),
                d = t(15084),
                u = t(52983),
                c = function () {
                    var e = (0, l._)((0, u.useState)(!1), 2),
                        n = e[0],
                        t = e[1];
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsxs)(d.u_l, {
                                opened: n,
                                title: (0, a.jsxs)(d.h4i, {
                                    variant: 'modal',
                                    description: 'Modal description',
                                    children: [
                                        'Modal Title',
                                        (0, a.jsx)(d.h4i.DocAnchor, {
                                            href: 'https://about:blank',
                                            label: 'Tooltip text',
                                        }),
                                    ],
                                }),
                                onClose: function () {
                                    return t(!1);
                                },
                                children: [
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim. Phasellus lacinia sem nunc, vel dapibus odio suscipit id. Aenean lobortis sollicitudin suscipit. Cras vitae ipsum sit amet nibh efficitur imperdiet. Praesent scelerisque erat est. Cras dictum sodales tellus sed pretium',
                                    (0, a.jsxs)(d.oWq, {
                                        p: 0,
                                        pt: 'lg',
                                        children: [
                                            (0, a.jsx)(d.zxk, {
                                                variant: 'outline',
                                                onClick: function () {
                                                    return t(!1);
                                                },
                                                children: 'Cancel',
                                            }),
                                            (0, a.jsx)(d.zxk, {
                                                onClick: function () {
                                                    return t(!1);
                                                },
                                                children: 'Accept',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsx)(d.zxk, {
                                onClick: function () {
                                    return t(!0);
                                },
                                children: 'Open Modal',
                            }),
                        ],
                    });
                },
                p = function (e) {
                    return (0, a.jsx)(
                        r.Z,
                        (0, s._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {Button, Header, Modal, StickyFooter} from \'@coveord/plasma-mantine\';\nimport {useState} from \'react\';\n\nconst Demo = () => {\n    const [opened, setOpened] = useState(false);\n\n    return (\n        <>\n            <Modal\n                opened={opened}\n                title={\n                    <Header variant="modal" description="Modal description">\n                        Modal Title\n                        <Header.DocAnchor href="https://about:blank" label="Tooltip text" />\n                    </Header>\n                }\n                onClose={() => setOpened(false)}\n            >\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id\n                sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim. Phasellus\n                lacinia sem nunc, vel dapibus odio suscipit id. Aenean lobortis sollicitudin suscipit. Cras vitae ipsum\n                sit amet nibh efficitur imperdiet. Praesent scelerisque erat est. Cras dictum sodales tellus sed pretium\n                <StickyFooter p={0} pt="lg">\n                    <Button variant="outline" onClick={() => setOpened(false)}>\n                        Cancel\n                    </Button>\n                    <Button onClick={() => setOpened(false)}>Accept</Button>\n                </StickyFooter>\n            </Modal>\n            <Button onClick={() => setOpened(true)}>Open Modal</Button>\n        </>\n    );\n};\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(c, {})},
                        ),
                    );
                },
                b = function () {
                    var e = (0, l._)((0, u.useState)(!1), 2),
                        n = e[0],
                        t = e[1];
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsxs)(d.u_l.Root, {
                                size: 'lg',
                                opened: n,
                                padding: 0,
                                onClose: function () {
                                    return t(!1);
                                },
                                children: [
                                    (0, a.jsx)(d.u_l.Overlay, {}),
                                    (0, a.jsxs)(d.u_l.Content, {
                                        children: [
                                            (0, a.jsxs)(d.u_l.Header, {
                                                p: 'lg',
                                                sx: {borderBottom: 'none'},
                                                children: [
                                                    (0, a.jsx)(d.u_l.Title, {
                                                        children: (0, a.jsxs)(d.h4i, {
                                                            variant: 'modal',
                                                            description: 'Modal description',
                                                            children: [
                                                                'Modal Title',
                                                                (0, a.jsx)(d.h4i.DocAnchor, {
                                                                    href: 'https://about:blank',
                                                                    label: 'Tooltip text',
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, a.jsx)(d.u_l.CloseButton, {}),
                                                ],
                                            }),
                                            (0, a.jsxs)(d.mQc, {
                                                defaultValue: 'tab-1',
                                                mih: 500,
                                                children: [
                                                    (0, a.jsxs)(d.mQc.List, {
                                                        pl: 'lg',
                                                        children: [
                                                            (0, a.jsx)(d.mQc.Tab, {value: 'tab-1', children: 'Tab 1'}),
                                                            (0, a.jsx)(d.mQc.Tab, {value: 'tab-2', children: 'Tab 2'}),
                                                            (0, a.jsx)(d.mQc.Tab, {value: 'tab-3', children: 'Tab 3'}),
                                                        ],
                                                    }),
                                                    (0, a.jsx)(d.mQc.Panel, {
                                                        value: 'tab-1',
                                                        p: 'lg',
                                                        children: 'Tab 1 content',
                                                    }),
                                                    (0, a.jsx)(d.mQc.Panel, {
                                                        value: 'tab-2',
                                                        p: 'lg',
                                                        children: 'Tab 2 content',
                                                    }),
                                                    (0, a.jsx)(d.mQc.Panel, {
                                                        value: 'tab-3',
                                                        p: 'lg',
                                                        children: 'Tab 3 content',
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)(d.oWq, {
                                                borderTop: !0,
                                                children: [
                                                    (0, a.jsx)(d.zxk, {
                                                        variant: 'outline',
                                                        onClick: function () {
                                                            return t(!1);
                                                        },
                                                        children: 'Cancel',
                                                    }),
                                                    (0, a.jsx)(d.zxk, {children: 'Save'}),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsx)(d.zxk, {
                                onClick: function () {
                                    return t(!0);
                                },
                                children: 'Open Modal',
                            }),
                        ],
                    });
                },
                m = function (e) {
                    return (0, a.jsx)(
                        r.Z,
                        (0, s._)(
                            (0, i._)(
                                {
                                    snippet:
                                        'import {Button, Header, Modal, StickyFooter, Tabs} from \'@coveord/plasma-mantine\';\nimport {useState} from \'react\';\n\nconst Demo = () => {\n    const [opened, setOpened] = useState(false);\n    return (\n        <>\n            <Modal.Root size="lg" opened={opened} padding={0} onClose={() => setOpened(false)}>\n                <Modal.Overlay />\n                <Modal.Content>\n                    <Modal.Header p="lg" sx={{borderBottom: \'none\'}}>\n                        <Modal.Title>\n                            <Header variant="modal" description="Modal description">\n                                Modal Title\n                                <Header.DocAnchor href="https://about:blank" label="Tooltip text" />\n                            </Header>\n                        </Modal.Title>\n                        <Modal.CloseButton />\n                    </Modal.Header>\n                    <Tabs defaultValue="tab-1" mih={500}>\n                        <Tabs.List pl="lg">\n                            <Tabs.Tab value="tab-1">Tab 1</Tabs.Tab>\n                            <Tabs.Tab value="tab-2">Tab 2</Tabs.Tab>\n                            <Tabs.Tab value="tab-3">Tab 3</Tabs.Tab>\n                        </Tabs.List>\n                        <Tabs.Panel value="tab-1" p="lg">\n                            Tab 1 content\n                        </Tabs.Panel>\n                        <Tabs.Panel value="tab-2" p="lg">\n                            Tab 2 content\n                        </Tabs.Panel>\n                        <Tabs.Panel value="tab-3" p="lg">\n                            Tab 3 content\n                        </Tabs.Panel>\n                    </Tabs>\n                    <StickyFooter borderTop>\n                        <Button variant="outline" onClick={() => setOpened(false)}>\n                            Cancel\n                        </Button>\n                        <Button>Save</Button>\n                    </StickyFooter>\n                </Modal.Content>\n            </Modal.Root>\n            <Button onClick={() => setOpened(true)}>Open Modal</Button>\n        </>\n    );\n};\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(b, {})},
                        ),
                    );
                },
                h = t(66809);
            function T() {
                return (0, a.jsx)(h.X, {
                    section: 'Layout',
                    title: 'Modal',
                    sourcePath: '/packages/mantine/src/components/modal/Modal.tsx',
                    description:
                        'A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional call to actions.',
                    id: 'Modal',
                    propsMetadata: o.r0,
                    demo: (0, a.jsx)(p, {}),
                    examples: {withTabs: (0, a.jsx)(m, {title: 'Modal with tabs and footer'})},
                });
            }
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 82262));
        }),
            (_N_E = e.O()));
    },
]);
