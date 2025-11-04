(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [22767],
    {
        62297: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/ModalWizard',
                function () {
                    return n(8649);
                },
            ]);
        },
        8649: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    ModalWizardDemos: function () {
                        return S;
                    },
                    default: function () {
                        return D;
                    },
                }));
            var a = n(97458),
                i = n(19523),
                o = n(52071),
                d = n(88966),
                r = n(39668),
                l = n(48692),
                s = n(94807),
                u = function (e) {
                    return e.trim().toLowerCase().includes('coveo');
                },
                m = function () {
                    var e = (0, l.v9)(function (e) {
                            return s.BOg.getValue(e, {id: 'radio-step-1'});
                        }),
                        t = (0, l.v9)(function (e) {
                            return s.VW_.getValue(e, {id: 'input-step-2'}) || '';
                        }),
                        n = (0, l.I0)();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(s.zxk, {
                                name: 'Open wizard',
                                enabled: !0,
                                primary: !0,
                                onClick: function () {
                                    return n((0, s.h7j)('standard-wizard'));
                                },
                            }),
                            (0, a.jsxs)(s.mo9, {
                                id: 'standard-wizard',
                                title: 'Wizard \uD83E\uDDD9‍♂️',
                                onFinish: function (e) {
                                    (alert('Congratulations! You completed the wizard'), e());
                                },
                                validateStep: function (n, a) {
                                    if (0 === n) return {isValid: !!e, message: !e && 'Select a path to continue.'};
                                    if (1 === n) {
                                        if (!t.trim())
                                            return {
                                                isValid: !1,
                                                message: 'The input must have some value to continue.',
                                            };
                                        if (!u(t))
                                            return {
                                                isValid: !0,
                                                message:
                                                    'The value you entered is fine for now, but might cause problems later.',
                                            };
                                    } else if (n === a - 1)
                                        return {
                                            isValid: u(t),
                                            message: !u(t) && 'The input at step 2 must contain "coveo" to finish.',
                                        };
                                    return {isValid: !0};
                                },
                                isDirty: !!e || !!t,
                                modalFooterChildren: function (e, t) {
                                    return e < t - 1
                                        ? null
                                        : (0, a.jsx)('div', {className: 'flex-auto', children: 'Last Step!'});
                                },
                                children: [
                                    (0, a.jsx)(s.l09, {
                                        title: 'Step 1',
                                        mods: ['mod-form-top-bottom-padding', 'mod-header-padding'],
                                        children: (0, a.jsxs)(s.Ayv, {
                                            id: 'radio-step-1',
                                            children: [
                                                (0, a.jsx)(s.Y8K, {
                                                    id: 'path1',
                                                    name: 'wizardPath',
                                                    value: 'redhorn',
                                                    children: (0, a.jsx)(s.__J, {children: 'Pass over the mountain'}),
                                                }),
                                                (0, a.jsx)(s.Y8K, {
                                                    id: 'path2',
                                                    name: 'wizardPath',
                                                    value: 'moria',
                                                    children: (0, a.jsx)(s.__J, {
                                                        children: 'Go under the mountain through Moria',
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, a.jsx)(s.l09, {
                                        title: 'Step 2',
                                        mods: ['mod-form-top-bottom-padding', 'mod-header-padding'],
                                        children: (0, a.jsx)(s.Ht8, {
                                            id: 'input-step-2',
                                            autoComplete: 'off',
                                            validateOnChange: !0,
                                            validate: function (e) {
                                                return !!e.trim();
                                            },
                                            labelTitle: (0, a.jsx)(s.__J, {
                                                invalidMessage: 'Cannot be left empty',
                                                children: 'Enter something to continue',
                                            }),
                                        }),
                                    }),
                                    'redhorn' === e &&
                                        (0, a.jsx)(s.l09, {
                                            title: 'Step 3',
                                            mods: ['mod-form-top-bottom-padding', 'mod-header-padding'],
                                            children: "Its longer, but we'll get there!",
                                        }),
                                    (0, a.jsx)(s.l09, {
                                        title: 'moria' === e ? 'Step 3' : 'Step 4',
                                        mods: ['mod-form-top-bottom-padding', 'mod-header-padding'],
                                        children: 'Enter "coveo" at step two to finish!',
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                p = function (e) {
                    return (0, a.jsx)(
                        r.Z,
                        (0, d._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {useSelector, useDispatch} from 'react-redux';\nimport {\n    Button,\n    Form,\n    IDispatch,\n    InputConnected,\n    InputSelectors,\n    PlasmaState,\n    Label,\n    ModalWizard,\n    openModal,\n    Radio,\n    RadioSelectConnected,\n    RadioSelectSelectors,\n} from '@coveord/plasma-react';\n\nconst containsCoveo = (str: string) => str.trim().toLowerCase().includes('coveo');\n\nconst Demo = () => {\n    const selectedPath = useSelector((state: PlasmaState) =>\n        RadioSelectSelectors.getValue(state, {id: 'radio-step-1'}),\n    );\n    const inputTwoValue = useSelector(\n        (state: PlasmaState) => InputSelectors.getValue(state, {id: 'input-step-2'}) || '',\n    );\n    const dispatch: IDispatch = useDispatch();\n\n    const validateStep = (currentStep: number, numberOfSteps: number) => {\n        if (currentStep === 0) {\n            return {\n                isValid: !!selectedPath,\n                message: !selectedPath && 'Select a path to continue.',\n            };\n        } else if (currentStep === 1) {\n            if (!inputTwoValue.trim()) {\n                return {isValid: false, message: 'The input must have some value to continue.'};\n            } else if (!containsCoveo(inputTwoValue)) {\n                return {\n                    isValid: true,\n                    message: 'The value you entered is fine for now, but might cause problems later.',\n                };\n            } else {\n                return {isValid: true};\n            }\n        } else if (currentStep === numberOfSteps - 1) {\n            return {\n                isValid: containsCoveo(inputTwoValue),\n                message: !containsCoveo(inputTwoValue) && 'The input at step 2 must contain \"coveo\" to finish.',\n            };\n        }\n        return {isValid: true};\n    };\n\n    return (\n        <>\n            <Button name=\"Open wizard\" enabled primary onClick={() => dispatch(openModal('standard-wizard'))} />\n            <ModalWizard\n                id=\"standard-wizard\"\n                title=\"Wizard \uD83E\uDDD9‍♂️\"\n                onFinish={(close) => {\n                    alert('Congratulations! You completed the wizard');\n                    close();\n                }}\n                validateStep={validateStep}\n                isDirty={!!selectedPath || !!inputTwoValue}\n                modalFooterChildren={(currentStep, numberOfSteps) =>\n                    currentStep < numberOfSteps - 1 ? null : <div className=\"flex-auto\">Last Step!</div>\n                }\n            >\n                <Form title=\"Step 1\" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>\n                    <RadioSelectConnected id=\"radio-step-1\">\n                        <Radio id=\"path1\" name=\"wizardPath\" value=\"redhorn\">\n                            <Label>Pass over the mountain</Label>\n                        </Radio>\n                        <Radio id=\"path2\" name=\"wizardPath\" value=\"moria\">\n                            <Label>Go under the mountain through Moria</Label>\n                        </Radio>\n                    </RadioSelectConnected>\n                </Form>\n                <Form title=\"Step 2\" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>\n                    <InputConnected\n                        id=\"input-step-2\"\n                        autoComplete=\"off\"\n                        validateOnChange\n                        validate={(value: string) => !!value.trim()}\n                        labelTitle={<Label invalidMessage=\"Cannot be left empty\">Enter something to continue</Label>}\n                    />\n                </Form>\n                {selectedPath === 'redhorn' && (\n                    <Form title=\"Step 3\" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>\n                        Its longer, but we'll get there!\n                    </Form>\n                )}\n                <Form\n                    title={selectedPath === 'moria' ? 'Step 3' : 'Step 4'}\n                    mods={['mod-form-top-bottom-padding', 'mod-header-padding']}\n                >\n                    Enter \"coveo\" at step two to finish!\n                </Form>\n            </ModalWizard>\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(m, {})},
                        ),
                    );
                },
                c = (0, s.x41)((0, s.E1Y)(s.Ht8)),
                h = (0, s.gR$)((0, s.C4s)(s.fjW)),
                f = function () {
                    var e = (0, l.I0)();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(s.zxk, {
                                name: 'Open wizard',
                                enabled: !0,
                                primary: !0,
                                onClick: function () {
                                    return e((0, s.h7j)('validation-wizard'));
                                },
                            }),
                            (0, a.jsxs)(s.rdI, {
                                id: 'validation-wizard',
                                title: 'Wizard \uD83E\uDDD9‍♂️',
                                onFinish: function (e) {
                                    (alert('Congratulations! You completed the wizard'), e());
                                },
                                validationIdsByStep: [['name-input'], ['favorite-animal-select']],
                                children: [
                                    (0, a.jsx)(s.l09, {
                                        title: 'Step 1',
                                        mods: ['mod-form-top-bottom-padding', 'mod-header-padding'],
                                        children: (0, a.jsx)(c, {
                                            id: 'name-input',
                                            labelTitle: 'Name',
                                            autoComplete: 'off',
                                            validateOnMount: !0,
                                            validateOnChange: !0,
                                            resetDirtyOnUnmount: !0,
                                            resetErrorOnUnmount: !0,
                                        }),
                                    }),
                                    (0, a.jsx)(s.l09, {
                                        title: 'Step 2',
                                        mods: ['mod-form-top-bottom-padding', 'mod-header-padding'],
                                        children: (0, a.jsx)(h, {
                                            id: 'favorite-animal-select',
                                            items: [
                                                {value: 'tiger', displayValue: 'Tiger \uD83D\uDC05'},
                                                {value: 'dog', displayValue: 'Dog \uD83D\uDC15', disabled: !0},
                                                {value: 'squid', displayValue: 'Squid \uD83E\uDD91'},
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                g = function (e) {
                    return (0, a.jsx)(
                        r.Z,
                        (0, d._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {\n    Button,\n    Form,\n    IDispatch,\n    InputConnected,\n    ModalWizardWithValidations,\n    openModal,\n    SingleSelectConnected,\n    withDirtyInputHOC,\n    withDirtySingleSelectHOC,\n    withNonEmptySingleSelectHOC,\n    withNonEmptyValueInputValidationHOC,\n} from '@coveord/plasma-react';\nimport {useDispatch} from 'react-redux';\n\nconst NonEmptyInput = withNonEmptyValueInputValidationHOC(withDirtyInputHOC(InputConnected));\nconst NonEmptySelect = withDirtySingleSelectHOC(withNonEmptySingleSelectHOC(SingleSelectConnected));\n\nconst Demo = () => {\n    const dispatch: IDispatch = useDispatch();\n\n    return (\n        <>\n            <Button name=\"Open wizard\" enabled primary onClick={() => dispatch(openModal('validation-wizard'))} />\n            <ModalWizardWithValidations\n                id=\"validation-wizard\"\n                title=\"Wizard \uD83E\uDDD9‍♂️\"\n                onFinish={(close) => {\n                    alert('Congratulations! You completed the wizard');\n                    close();\n                }}\n                validationIdsByStep={[['name-input'], ['favorite-animal-select']]}\n            >\n                <Form title=\"Step 1\" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>\n                    <NonEmptyInput\n                        id=\"name-input\"\n                        labelTitle=\"Name\"\n                        autoComplete=\"off\"\n                        validateOnMount\n                        validateOnChange\n                        resetDirtyOnUnmount\n                        resetErrorOnUnmount\n                    />\n                </Form>\n                <Form title=\"Step 2\" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>\n                    <NonEmptySelect\n                        id=\"favorite-animal-select\"\n                        items={[\n                            {value: 'tiger', displayValue: 'Tiger \uD83D\uDC05'},\n                            {value: 'dog', displayValue: 'Dog \uD83D\uDC15', disabled: true},\n                            {value: 'squid', displayValue: 'Squid \uD83E\uDD91'},\n                        ]}\n                    />\n                </Form>\n            </ModalWizardWithValidations>\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, a.jsx)(f, {})},
                        ),
                    );
                },
                v = n(66809),
                S = function () {
                    return (0, a.jsx)(v.X, {
                        id: 'ModalWizard',
                        title: 'Modal Wizard',
                        section: 'Layout',
                        description:
                            'A modal wizard guides users through a task by presenting a succession of actions to complete.',
                        sourcePath: '/packages/react/src/components/modalWizard/ModalWizard.tsx',
                        demo: (0, a.jsx)(p, {}),
                        propsMetadata: i.k5,
                        examples: {withValidationIds: (0, a.jsx)(g, {title: 'Using validation ids'})},
                    });
                },
                D = S;
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 62297));
        }),
            (_N_E = e.O()));
    },
]);
