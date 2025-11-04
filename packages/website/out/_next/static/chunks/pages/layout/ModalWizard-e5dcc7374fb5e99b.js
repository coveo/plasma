(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [20402],
    {
        4543: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/layout/ModalWizard',
                function () {
                    return t(82047);
                },
            ]);
        },
        82047: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    default: function () {
                        return v;
                    },
                }));
            var i = t(97458),
                o = t(19523),
                r = t(52071),
                s = t(88966),
                l = t(53520),
                a = t(39668),
                d = t(15084),
                p = t(52983),
                c = function () {
                    var e = (0, l._)((0, p.useState)(!1), 2),
                        n = e[0],
                        t = e[1];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.zxk, {
                                onClick: function () {
                                    return t(!0);
                                },
                                children: ' Open ModalWizard ',
                            }),
                            (0, i.jsxs)(d.mo9, {
                                onClose: function () {
                                    return t(!1);
                                },
                                opened: n,
                                onFinish: function () {
                                    return t(!1);
                                },
                                children: [
                                    (0, i.jsx)(d.mo9.Step, {
                                        docLink: 'https://coveo.com',
                                        title: 'Current Step is 1',
                                        showProgressBar: !1,
                                        countsAsProgress: !1,
                                        description: 'Description of step 1',
                                        validateStep: function () {
                                            return {isValid: !0};
                                        },
                                        docLinkTooltipLabel: 'Tooltip label',
                                        children: (0, i.jsx)(d.xuv, {mih: 300, children: 'Slide 1'}),
                                    }),
                                    (0, i.jsx)(d.mo9.Step, {
                                        docLink: 'https://coveo.com',
                                        title: 'Current Step is 2',
                                        description: 'Description of step 2',
                                        validateStep: function () {
                                            return {isValid: !0};
                                        },
                                        docLinkTooltipLabel: 'Tooltip label',
                                        children: (0, i.jsx)(d.xuv, {mih: 300, children: 'Slide 2'}),
                                    }),
                                    (0, i.jsx)(d.mo9.Step, {
                                        docLink: 'https://coveo.com',
                                        title: 'Current Step is 3',
                                        description: 'Description of step 3',
                                        validateStep: function () {
                                            return {isValid: !0};
                                        },
                                        docLinkTooltipLabel: 'Tooltip label',
                                        children: (0, i.jsx)(d.xuv, {mih: 300, children: 'Slide 3'}),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                u = function (e) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, s._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {Box, Button, ModalWizard} from \'@coveord/plasma-mantine\';\nimport {useState} from \'react\';\n\nconst Demo = () => {\n    const [opened, setOpened] = useState(false);\n\n    return (\n        <>\n            <Button onClick={() => setOpened(true)}> Open ModalWizard </Button>\n            <ModalWizard onClose={() => setOpened(false)} opened={opened} onFinish={() => setOpened(false)}>\n                <ModalWizard.Step\n                    docLink="https://coveo.com"\n                    title="Current Step is 1"\n                    showProgressBar={false}\n                    countsAsProgress={false}\n                    description="Description of step 1"\n                    validateStep={() => ({isValid: true})}\n                    docLinkTooltipLabel="Tooltip label"\n                >\n                    <Box mih={300}>Slide 1</Box>\n                </ModalWizard.Step>\n                <ModalWizard.Step\n                    docLink="https://coveo.com"\n                    title="Current Step is 2"\n                    description="Description of step 2"\n                    validateStep={() => ({isValid: true})}\n                    docLinkTooltipLabel="Tooltip label"\n                >\n                    <Box mih={300}>Slide 2</Box>\n                </ModalWizard.Step>\n                <ModalWizard.Step\n                    docLink="https://coveo.com"\n                    title="Current Step is 3"\n                    description="Description of step 3"\n                    validateStep={() => ({isValid: true})}\n                    docLinkTooltipLabel="Tooltip label"\n                >\n                    <Box mih={300}>Slide 3</Box>\n                </ModalWizard.Step>\n            </ModalWizard>\n        </>\n    );\n};\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(c, {})},
                        ),
                    );
                },
                m = t(80762),
                f = t(43112),
                h = function () {
                    var e,
                        n = (0, l._)((0, p.useState)(!1), 2),
                        t = n[0],
                        o = n[1],
                        a = (0, d.cIP)({
                            initialValues: {firstName: '', lastName: ''},
                            validate: {
                                firstName: function (e) {
                                    return e.length < 2 ? 'Minimum 2 characters required' : null;
                                },
                                lastName: function (e) {
                                    return e.length < 2 ? 'Minimum 2 characters required' : null;
                                },
                            },
                        }),
                        c = [
                            {
                                docLink: 'https://coveo.com',
                                title: 'Current Step is 1',
                                docLinkTooltipLabel: 'Tooltip label',
                                element: (0, i.jsxs)(d.kCb, {
                                    direction: 'column',
                                    gap: 'sm',
                                    children: [
                                        (0, i.jsx)(d.Dxz, {order: 5, children: 'First Name'}),
                                        (0, i.jsx)(
                                            d.oil,
                                            (0, s._)((0, r._)({}, a.getInputProps('firstName')), {
                                                placeholder: 'Enter first name',
                                            }),
                                        ),
                                    ],
                                }),
                            },
                            {
                                docLink: 'https://coveo.com',
                                title: 'Current Step is 2',
                                docLinkTooltipLabel: 'Tooltip label',
                                element: (0, i.jsxs)(d.kCb, {
                                    direction: 'column',
                                    gap: 'sm',
                                    children: [
                                        (0, i.jsx)(d.Dxz, {order: 5, children: 'Last Name'}),
                                        (0, i.jsx)(
                                            d.oil,
                                            (0, s._)((0, r._)({}, a.getInputProps('lastName')), {
                                                placeholder: 'Enter last name',
                                            }),
                                        ),
                                    ],
                                }),
                            },
                        ];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.zxk, {
                                m: 'md',
                                onClick: function () {
                                    return o(!0);
                                },
                                children: 'Open ModalWizard',
                            }),
                            (0, i.jsx)(d.mo9, {
                                isStepValidatedOnNext: !0,
                                size: 'sm',
                                onClose: function () {
                                    (o(!1), a.reset());
                                },
                                opened: t,
                                onFinish: (0, m._)(function () {
                                    return (0, f.Jh)(this, function (e) {
                                        return (
                                            a.validateField('lastName'),
                                            a.isValid('lastName') && a.isDirty('lastName') && (o(!1), a.reset()),
                                            [2]
                                        );
                                    });
                                }),
                                onNext:
                                    ((e = (0, m._)(function (e, n) {
                                        return (0, f.Jh)(this, function (t) {
                                            return (
                                                a.validateField('firstName'),
                                                a.isValid('firstName') && a.isDirty('firstName') && n(e),
                                                [2]
                                            );
                                        });
                                    })),
                                    function (n, t) {
                                        return e.apply(this, arguments);
                                    }),
                                children: c.map(function (e, n) {
                                    return (0, i.jsx)(
                                        d.mo9.Step,
                                        {
                                            docLink: e.docLink,
                                            title: e.title,
                                            description: e.description,
                                            showProgressBar: e.showProgressBar,
                                            countsAsProgress: e.countsAsProgress,
                                            children: e.element,
                                        },
                                        n,
                                    );
                                }),
                            }),
                        ],
                    });
                },
                x = function (e) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, s._)(
                            (0, r._)(
                                {
                                    snippet:
                                        "import {Button, Flex, ModalWizard, ModalWizardStepProps, TextInput, Title, useForm} from '@coveord/plasma-mantine';\nimport {useState} from 'react';\n\nexport default () => {\n    const [opened, setOpened] = useState(false);\n\n    const form = useForm({\n        initialValues: {\n            firstName: '',\n            lastName: '',\n        },\n        validate: {\n            firstName: (value) => (value.length < 2 ? 'Minimum 2 characters required' : null),\n            lastName: (value) => (value.length < 2 ? 'Minimum 2 characters required' : null),\n        },\n    });\n\n    const Steps: Array<Omit<ModalWizardStepProps, 'children'> & {element: JSX.Element}> = [\n        {\n            docLink: 'https://coveo.com',\n            title: 'Current Step is 1',\n            docLinkTooltipLabel: 'Tooltip label',\n            element: (\n                <Flex direction=\"column\" gap=\"sm\">\n                    <Title order={5}>First Name</Title>\n\n                    <TextInput {...form.getInputProps('firstName')} placeholder=\"Enter first name\" />\n                </Flex>\n            ),\n        },\n        {\n            docLink: 'https://coveo.com',\n            title: 'Current Step is 2',\n            docLinkTooltipLabel: 'Tooltip label',\n            element: (\n                <Flex direction=\"column\" gap=\"sm\">\n                    <Title order={5}>Last Name</Title>\n                    <TextInput {...form.getInputProps('lastName')} placeholder=\"Enter last name\" />\n                </Flex>\n            ),\n        },\n    ];\n\n    return (\n        <>\n            <Button m=\"md\" onClick={() => setOpened(true)}>\n                Open ModalWizard\n            </Button>\n            <ModalWizard\n                isStepValidatedOnNext\n                size=\"sm\"\n                onClose={() => {\n                    setOpened(false);\n                    form.reset();\n                }}\n                opened={opened}\n                onFinish={async () => {\n                    form.validateField('lastName');\n                    if (form.isValid('lastName') && form.isDirty('lastName')) {\n                        setOpened(false);\n                        form.reset();\n                    }\n                }}\n                onNext={async (newStepIndex, setCurrentStepIndex) => {\n                    form.validateField('firstName');\n                    if (form.isValid('firstName') && form.isDirty('firstName')) {\n                        setCurrentStepIndex(newStepIndex);\n                    }\n                }}\n            >\n                {Steps.map((step, index) => (\n                    <ModalWizard.Step\n                        key={index}\n                        docLink={step.docLink}\n                        title={step.title}\n                        description={step.description}\n                        showProgressBar={step.showProgressBar}\n                        countsAsProgress={step.countsAsProgress}\n                    >\n                        {step.element}\n                    </ModalWizard.Step>\n                ))}\n            </ModalWizard>\n        </>\n    );\n};\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(h, {})},
                        ),
                    );
                },
                S = function () {
                    var e = (0, l._)((0, p.useState)(!1), 2),
                        n = e[0],
                        t = e[1];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.zxk, {
                                m: 'md',
                                onClick: function () {
                                    return t(!0);
                                },
                                children: 'Open Modal Wizard',
                            }),
                            (0, i.jsxs)(d.mo9, {
                                onClose: function () {
                                    return t(!1);
                                },
                                opened: n,
                                onFinish: function () {
                                    return t(!1);
                                },
                                children: [
                                    (0, i.jsx)(d.mo9.Step, {
                                        docLink: 'https://coveo.com',
                                        title: 'Current Step is 1',
                                        showProgressBar: !1,
                                        countsAsProgress: !1,
                                        description: 'Description of step 1',
                                        validateStep: function () {
                                            return {isValid: !0};
                                        },
                                        docLinkTooltipLabel: 'Tooltip label',
                                        children: (0, i.jsx)(d.xuv, {mih: 300, children: 'Slide 1'}),
                                    }),
                                    (0, i.jsx)(d.mo9.Step, {
                                        docLink: 'https://coveo.com',
                                        title: 'Current Step is 2',
                                        description: 'Description of step 2',
                                        validateStep: function () {
                                            return {isValid: !1};
                                        },
                                        docLinkTooltipLabel: 'Tooltip label',
                                        disabledTooltipLabel: 'Tooltip label on disabled button',
                                        children: (0, i.jsx)(d.xuv, {mih: 300, children: 'Slide 2'}),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                L = function (e) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, s._)(
                            (0, r._)(
                                {
                                    snippet:
                                        'import {Box, Button, ModalWizard} from \'@coveord/plasma-mantine\';\nimport {useState} from \'react\';\n\nexport default () => {\n    const [opened, setOpened] = useState(false);\n\n    return (\n        <>\n            <Button m="md" onClick={() => setOpened(true)}>\n                Open Modal Wizard\n            </Button>\n            <ModalWizard onClose={() => setOpened(false)} opened={opened} onFinish={() => setOpened(false)}>\n                <ModalWizard.Step\n                    docLink="https://coveo.com"\n                    title="Current Step is 1"\n                    showProgressBar={false}\n                    countsAsProgress={false}\n                    description="Description of step 1"\n                    validateStep={() => ({isValid: true})}\n                    docLinkTooltipLabel="Tooltip label"\n                >\n                    <Box mih={300}>Slide 1</Box>\n                </ModalWizard.Step>\n                <ModalWizard.Step\n                    docLink="https://coveo.com"\n                    title="Current Step is 2"\n                    description="Description of step 2"\n                    validateStep={() => ({isValid: false})}\n                    docLinkTooltipLabel="Tooltip label"\n                    disabledTooltipLabel="Tooltip label on disabled button"\n                >\n                    <Box mih={300}>Slide 2</Box>\n                </ModalWizard.Step>\n            </ModalWizard>\n        </>\n    );\n};\n',
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(S, {})},
                        ),
                    );
                },
                k = t(66809);
            function v() {
                return (0, i.jsx)(k.X, {
                    section: 'Layout',
                    title: 'ModalWizard',
                    sourcePath: '/packages/mantine/src/components/modal-wizard/ModalWizard.tsx',
                    description:
                        'A Modal Wizard is a collection of Modals that user can interact with to display any information step by step',
                    id: 'ModalWizard',
                    propsMetadata: o.Ge,
                    demo: (0, i.jsx)(u, {}),
                    examples: {
                        formValidation: (0, i.jsx)(x, {noPadding: !0, title: 'Modal Wizard with Form Validation'}),
                        tooltip: (0, i.jsx)(L, {noPadding: !0, title: 'Modal Wizard with tooltip on next button'}),
                    },
                });
            }
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 4543));
        }),
            (_N_E = e.O()));
    },
]);
