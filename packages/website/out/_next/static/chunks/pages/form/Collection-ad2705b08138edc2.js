(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [30024],
    {
        30728: function (e, n, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/form/Collection',
                function () {
                    return o(26653);
                },
            ]);
        },
        26653: function (e, n, o) {
            'use strict';
            (o.r(n),
                o.d(n, {
                    default: function () {
                        return x;
                    },
                }));
            var t = o(97458),
                r = o(19523),
                a = o(52071),
                s = o(88966),
                l = o(39668),
                i = o(15084),
                d = function () {
                    var e = (0, i.cIP)({
                        validateInputOnChange: !0,
                        initialValues: {
                            todoList: [
                                {name: 'wash the dishes', done: !0},
                                {name: 'take out the trash', done: !1},
                                {name: 'vacuum the floors', done: !1},
                            ],
                        },
                        validate: {
                            todoList: function (e) {
                                return e.length < 2
                                    ? "Don't be lazy, add just ".concat(2 - e.length, ' more tasks')
                                    : null;
                            },
                        },
                    });
                    return (0, t.jsx)(
                        i.FEg,
                        (0, s._)(
                            (0, a._)(
                                {
                                    draggable: !0,
                                    addLabel: 'Add task',
                                    description: 'These will have to be done by next week',
                                    label: 'List of tasks',
                                    newItem: {name: '', done: !1},
                                },
                                e.getInputProps('todoList'),
                            ),
                            {
                                children: function (n, o) {
                                    return (0, t.jsxs)(t.Fragment, {
                                        children: [
                                            (0, t.jsx)(
                                                i.oil,
                                                (0, a._)(
                                                    {placeholder: 'Do something ...'},
                                                    e.getInputProps('todoList.'.concat(o, '.name')),
                                                ),
                                            ),
                                            (0, t.jsx)(
                                                i.XZJ,
                                                (0, a._)(
                                                    {},
                                                    e.getInputProps('todoList.'.concat(o, '.done'), {type: 'checkbox'}),
                                                ),
                                            ),
                                        ],
                                    });
                                },
                            },
                        ),
                    );
                },
                m = function (e) {
                    return (0, t.jsx)(
                        l.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {Checkbox, Collection, TextInput, useForm} from '@coveord/plasma-mantine';\n\nconst Demo = () => {\n    const form = useForm({\n        validateInputOnChange: true,\n        initialValues: {\n            todoList: [\n                {name: 'wash the dishes', done: true},\n                {name: 'take out the trash', done: false},\n                {name: 'vacuum the floors', done: false},\n            ],\n        },\n        validate: {\n            todoList: (value) => (value.length < 2 ? `Don't be lazy, add just ${2 - value.length} more tasks` : null),\n        },\n    });\n\n    return (\n        <Collection<{name: string; done: boolean}>\n            draggable\n            addLabel=\"Add task\"\n            description=\"These will have to be done by next week\"\n            label=\"List of tasks\"\n            newItem={{name: '', done: false}}\n            {...form.getInputProps('todoList')}\n        >\n            {(_task, index) => (\n                <>\n                    <TextInput\n                        // Autofocus is annoying when playing with the sandbox but you should have this on otherwise\n                        // autoFocus\n                        placeholder=\"Do something ...\"\n                        {...form.getInputProps(`todoList.${index}.name`)}\n                    />\n                    <Checkbox {...form.getInputProps(`todoList.${index}.done`, {type: 'checkbox'})} />\n                </>\n            )}\n        </Collection>\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, t.jsx)(d, {})},
                        ),
                    );
                },
                u = o(29145),
                c = o(33924),
                h = function () {
                    var e = (0, c.cI)({
                            defaultValues: {
                                todoList: [
                                    {name: 'wash the dishes', done: !0},
                                    {name: 'take out the trash', done: !1},
                                    {name: 'vacuum the floors', done: !1},
                                ],
                            },
                            mode: 'onBlur',
                        }).control,
                        n = 'internal-id',
                        o = (0, c.Dq)({control: e, keyName: n, name: 'todoList'}),
                        r = o.fields,
                        l = o.insert,
                        d = o.move,
                        m = o.remove;
                    return (0, t.jsx)(c.Qr, {
                        control: e,
                        name: 'todoList',
                        render: function (o) {
                            var h = o.fieldState.error;
                            return (0, t.jsx)(i.FEg, {
                                draggable: !0,
                                addLabel: 'Add task',
                                description: 'These will have to be done by next week',
                                label: 'List of tasks',
                                newItem: {name: '', done: !1},
                                error: null == h ? void 0 : h.message,
                                onReorderItem: function (e) {
                                    d(e.from, e.to);
                                },
                                onRemoveItem: m,
                                onInsertItem: function (e, n) {
                                    l(n, e);
                                },
                                value: r,
                                getItemId: function (e) {
                                    return e[n];
                                },
                                children: function (n, o) {
                                    return (0, t.jsxs)(t.Fragment, {
                                        children: [
                                            (0, t.jsx)(c.Qr, {
                                                control: e,
                                                name: 'todoList.'.concat(o, '.name'),
                                                render: function (e) {
                                                    var n = e.field,
                                                        o = e.fieldState.error;
                                                    return (0, t.jsx)(
                                                        i.oil,
                                                        (0, s._)((0, a._)({}, n), {
                                                            error: null == o ? void 0 : o.message,
                                                            placeholder: 'Do something ...',
                                                        }),
                                                    );
                                                },
                                            }),
                                            (0, t.jsx)(c.Qr, {
                                                control: e,
                                                name: 'todoList.'.concat(o, '.done'),
                                                render: function (e) {
                                                    var n = e.field.value,
                                                        o = e.fieldState.error,
                                                        r = (0, u._)(e.field, ['value']);
                                                    return (0, t.jsx)(
                                                        i.XZJ,
                                                        (0, s._)((0, a._)({checked: n}, r), {
                                                            error: null == o ? void 0 : o.message,
                                                        }),
                                                    );
                                                },
                                            }),
                                        ],
                                    });
                                },
                            });
                        },
                    });
                },
                f = function (e) {
                    return (0, t.jsx)(
                        l.Z,
                        (0, s._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {Checkbox, Collection, TextInput} from '@coveord/plasma-mantine';\nimport {Controller, useForm, useFieldArray} from 'react-hook-form';\n\nconst Demo = () => {\n    const {control} = useForm({\n        defaultValues: {\n            todoList: [\n                {name: 'wash the dishes', done: true},\n                {name: 'take out the trash', done: false},\n                {name: 'vacuum the floors', done: false},\n            ],\n        },\n        mode: 'onBlur',\n    });\n\n    const itemId = 'internal-id';\n    const {fields, insert, move, remove} = useFieldArray({control, keyName: itemId, name: 'todoList'});\n\n    return (\n        <Controller\n            control={control}\n            name=\"todoList\"\n            render={({fieldState: {error}}) => (\n                <Collection<{name: string; done: boolean; 'internal-id'?: string}>\n                    draggable\n                    addLabel=\"Add task\"\n                    description=\"These will have to be done by next week\"\n                    label=\"List of tasks\"\n                    newItem={{name: '', done: false}}\n                    error={error?.message}\n                    onReorderItem={({from, to}) => {\n                        move(from, to);\n                    }}\n                    onRemoveItem={remove}\n                    onInsertItem={(value, index: number) => {\n                        insert(index, value);\n                    }}\n                    value={fields}\n                    getItemId={(item) => item[itemId]}\n                >\n                    {(_task, index) => (\n                        <>\n                            <Controller\n                                control={control}\n                                name={`todoList.${index}.name` as const}\n                                render={({field, fieldState: {error: errorFieldName}}) => (\n                                    <TextInput\n                                        {...field}\n                                        error={errorFieldName?.message}\n                                        placeholder=\"Do something ...\"\n                                    />\n                                )}\n                            />\n                            <Controller\n                                control={control}\n                                name={`todoList.${index}.done` as const}\n                                render={({field: {value, ...restField}, fieldState: {error: errorFieldDone}}) => (\n                                    <Checkbox checked={value} {...restField} error={errorFieldDone?.message} />\n                                )}\n                            />\n                        </>\n                    )}\n                </Collection>\n            )}\n        />\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, t.jsx)(h, {})},
                        ),
                    );
                },
                p = o(66809);
            function x() {
                return (0, t.jsx)(p.X, {
                    section: 'Form',
                    title: 'Collection',
                    sourcePath: '/packages/mantine/src/components/collection/Collection.tsx',
                    description: 'A Collection allows users to provide an array of items of the same type.',
                    id: 'Collection',
                    demo: (0, t.jsx)(m, {}),
                    propsMetadata: r.nM,
                    examples: {reactHookForm: (0, t.jsx)(f, {title: 'Collection with ReactHookForm'})},
                });
            }
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 33924, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 30728));
        }),
            (_N_E = e.O()));
    },
]);
