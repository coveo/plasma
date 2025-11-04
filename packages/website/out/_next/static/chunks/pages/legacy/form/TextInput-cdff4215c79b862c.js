(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [66366],
    {
        28592: function (t, n, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/TextInput',
                function () {
                    return e(19089);
                },
            ]);
        },
        19089: function (t, n, e) {
            'use strict';
            (e.r(n),
                e.d(n, {
                    TextInputDemos: function () {
                        return f;
                    },
                    default: function () {
                        return y;
                    },
                }));
            var i = e(97458),
                a = e(19523),
                s = e(52071),
                o = e(88966),
                r = e(39668),
                u = e(94807),
                l = function (t) {
                    var n = !t;
                    return n || t.trim()
                        ? n
                            ? {status: 'invalid', message: 'Cannot be empty.'}
                            : {status: 'valid'}
                        : {status: 'warning', message: 'A white space is not empty, but is not ideal.'};
                },
                p = function () {
                    return (0, i.jsx)(u.RVL, {
                        children: (0, i.jsx)(u.oil, {
                            required: !0,
                            showValidationOnBlur: !0,
                            validate: l,
                            type: 'text',
                            label: 'Label',
                            title: 'Title',
                            description: 'Description',
                            helpText: 'Help text',
                            tooltip: 'Tooltip',
                        }),
                    });
                },
                d = function (t) {
                    return (0, i.jsx)(
                        r.Z,
                        (0, o._)(
                            (0, s._)(
                                {
                                    snippet:
                                        'import {FormProvider, InputValidator, TextInput} from \'@coveord/plasma-react\';\n\nconst nonEmptyValidation: InputValidator = (value: string) => {\n    const isEmpty = !value;\n    const isWhiteSpace = !isEmpty && !value.trim();\n\n    if (isWhiteSpace) {\n        return {status: \'warning\', message: \'A white space is not empty, but is not ideal.\'};\n    }\n\n    if (isEmpty) {\n        return {status: \'invalid\', message: \'Cannot be empty.\'};\n    }\n\n    return {status: \'valid\'};\n};\n\nconst Demo = () => (\n    <FormProvider>\n        <TextInput\n            required\n            showValidationOnBlur\n            validate={nonEmptyValidation}\n            type="text"\n            label="Label"\n            title="Title"\n            description="Description"\n            helpText="Help text"\n            tooltip="Tooltip"\n        />\n    </FormProvider>\n);\nexport default Demo;\n',
                                },
                                t,
                            ),
                            {children: (0, i.jsx)(p, {})},
                        ),
                    );
                },
                c = function () {
                    var t = (0, u.r6I)('favorite-dish').state;
                    return (0, i.jsxs)('div', {
                        className: 'my1',
                        style: {whiteSpace: 'pre-wrap'},
                        children: ['state = ', JSON.stringify(t, null, 4)],
                    });
                },
                h = function () {
                    var t = (0, u.r6I)('favorite-dish'),
                        n = t.state,
                        e = t.dispatch;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.zxk, {
                                name: 'Change dish for "sushis"',
                                enabled: 'sushis' !== n.value,
                                onClick: function () {
                                    return e({type: 'change-value', payload: 'sushis'});
                                },
                            }),
                            (0, i.jsx)(u.zxk, {
                                name: 'Show validation',
                                onClick: function () {
                                    return e({type: 'show-validation'});
                                },
                            }),
                            (0, i.jsx)(u.zxk, {
                                name: 'Hide validation',
                                onClick: function () {
                                    return e({type: 'hide-validation'});
                                },
                            }),
                        ],
                    });
                },
                m = function () {
                    return (0, i.jsxs)(u.RVL, {
                        children: [
                            (0, i.jsx)(u.oil, {
                                id: 'favorite-dish',
                                type: 'text',
                                label: 'Favorite Dish',
                                defaultValue: 'pizza',
                                validate: function (t) {
                                    return /pizza/i.test(t)
                                        ? {status: 'valid'}
                                        : {status: 'warning', message: "Pizza is best but that's okay."};
                                },
                                showValidationOnBlur: !0,
                            }),
                            (0, i.jsx)(c, {}),
                            (0, i.jsx)(h, {}),
                        ],
                    });
                },
                v = function (t) {
                    return (0, i.jsx)(
                        r.Z,
                        (0, o._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {Button, FormProvider, TextInput, useTextInput} from '@coveord/plasma-react';\nimport {FunctionComponent} from 'react';\n\nconst CurrentState: FunctionComponent = () => {\n    const {state} = useTextInput('favorite-dish');\n    return (\n        <div className=\"my1\" style={{whiteSpace: 'pre-wrap'}}>\n            state = {JSON.stringify(state, null, 4)}\n        </div>\n    );\n};\n\nconst InteractiveButtons: FunctionComponent = () => {\n    const {state, dispatch} = useTextInput('favorite-dish');\n    return (\n        <>\n            <Button\n                name='Change dish for \"sushis\"'\n                enabled={state.value !== 'sushis'}\n                onClick={() => dispatch({type: 'change-value', payload: 'sushis'})}\n            />\n            <Button name=\"Show validation\" onClick={() => dispatch({type: 'show-validation'})} />\n            <Button name=\"Hide validation\" onClick={() => dispatch({type: 'hide-validation'})} />\n        </>\n    );\n};\n\nconst Demo = () => (\n    <FormProvider>\n        <TextInput\n            id=\"favorite-dish\"\n            type=\"text\"\n            label=\"Favorite Dish\"\n            defaultValue=\"pizza\"\n            validate={(value) =>\n                /pizza/i.test(value)\n                    ? {status: 'valid'}\n                    : {status: 'warning', message: \"Pizza is best but that's okay.\"}\n            }\n            showValidationOnBlur\n        />\n        <CurrentState />\n        <InteractiveButtons />\n    </FormProvider>\n);\nexport default Demo;\n",
                                },
                                t,
                            ),
                            {children: (0, i.jsx)(m, {})},
                        ),
                    );
                },
                x = e(66809),
                f = function () {
                    return (0, i.jsx)(x.X, {
                        id: 'TextInput',
                        title: 'Text Input',
                        section: 'Form',
                        thumbnail: 'textInput',
                        description:
                            'A text input allows users to enter and edit short texts, such as names, emails, and passwords.',
                        sourcePath: '/packages/react/src/components/textInput/TextInput.tsx',
                        demo: (0, i.jsx)(d, {center: !0}),
                        examples: {hookUsage: (0, i.jsx)(v, {title: 'useTextInput hook usage'})},
                        propsMetadata: a.nU,
                    });
                },
                y = f;
        },
    },
    function (t) {
        (t.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return t((t.s = 28592));
        }),
            (_N_E = t.O()));
    },
]);
