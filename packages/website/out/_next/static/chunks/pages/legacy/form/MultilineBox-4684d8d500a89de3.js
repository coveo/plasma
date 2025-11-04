(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [61722],
    {
        82747: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/MultilineBox',
                function () {
                    return t(27277);
                },
            ]);
        },
        27277: function (n, e, t) {
            'use strict';
            (t.r(e),
                t.d(e, {
                    default: function () {
                        return I;
                    },
                }));
            var i = t(97458),
                o = t(19523),
                a = t(52071),
                r = t(88966),
                l = t(39668),
                u = t(94807),
                d = function () {
                    return (0, i.jsx)(u.RVL, {
                        children: (0, i.jsx)(u.JKd, {
                            id: 'multiline-box-id',
                            data: [{name: 'Poire'}, {name: 'Apple'}],
                            renderBody: function (n, e) {
                                return Object.values(n).map(function (n) {
                                    var t = n.id,
                                        o = n.isLast,
                                        a = n.props;
                                    return (0, i.jsx)(
                                        u.oil,
                                        {
                                            id: t,
                                            required: !o,
                                            showValidationOnBlur: !0,
                                            type: 'text',
                                            label: 'Label',
                                            defaultValue: a.name,
                                            onBlur: function (n) {
                                                '' !== n.target.value && o && e.addNewBox();
                                            },
                                        },
                                        t,
                                    );
                                });
                            },
                            defaultProps: {name: ''},
                        }),
                    });
                },
                s = function (n) {
                    return (0, i.jsx)(
                        l.Z,
                        (0, r._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {FocusEvent} from 'react';\nimport {\n    FormProvider,\n    MultilineBox,\n    IMultilineSingleBoxProps,\n    IMultilineParentProps,\n    TextInput,\n} from '@coveord/plasma-react';\n\ninterface MyData {\n    name: string;\n}\n\nconst Demo = () => (\n    <FormProvider>\n        <MultilineBox<MyData>\n            id=\"multiline-box-id\"\n            data={[{name: 'Poire'}, {name: 'Apple'}]}\n            renderBody={(data: Array<IMultilineSingleBoxProps<MyData>>, defaultProps: IMultilineParentProps) =>\n                Object.values(data).map(({id, isLast, props}: IMultilineSingleBoxProps<MyData>) => (\n                    <TextInput\n                        id={id}\n                        key={id}\n                        required={!isLast}\n                        showValidationOnBlur\n                        type=\"text\"\n                        label=\"Label\"\n                        defaultValue={props.name}\n                        onBlur={(evt: FocusEvent<HTMLInputElement>) => {\n                            if (evt.target.value !== '' && isLast) {\n                                defaultProps.addNewBox();\n                            }\n                        }}\n                    />\n                ))\n            }\n            defaultProps={{name: ''}}\n        />\n    </FormProvider>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(d, {})},
                        ),
                    );
                },
                p = t(2031),
                m = (0, p.qC)(
                    (0, u.FY1)({
                        containerNode: function (n, e) {
                            return (0, i.jsxs)('div', {
                                className: 'inline-flex center-align',
                                children: [n, e({classes: [u.UEN, 'flex-auto mb2']})],
                            });
                        },
                    }),
                    (0, u.FMA)(),
                )(u.JKd),
                c = function () {
                    return (0, i.jsx)(u.RVL, {
                        children: (0, i.jsx)(m, {
                            id: 'multiline-box-complex-id',
                            data: [{name: 'Poire'}, {name: 'Apple'}],
                            renderBody: function (n, e) {
                                return Object.values(n).map(function (n) {
                                    var t = n.id,
                                        o = n.isLast,
                                        a = n.props;
                                    return (0, i.jsx)(
                                        u.oil,
                                        {
                                            id: t,
                                            required: !o,
                                            showValidationOnBlur: !0,
                                            type: 'text',
                                            label: 'Label',
                                            defaultValue: a.name,
                                            onBlur: function (n) {
                                                '' !== n.target.value && o && e.addNewBox();
                                            },
                                        },
                                        t,
                                    );
                                });
                            },
                            defaultProps: {name: ''},
                        }),
                    });
                },
                x = function (n) {
                    return (0, i.jsx)(
                        l.Z,
                        (0, r._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {\n    defaultMultilineBoxRemoveButtonClasses,\n    FormProvider,\n    IButtonProps,\n    IMultilineParentProps,\n    IMultilineSingleBoxProps,\n    MultilineBox,\n    multilineBoxWithDnD,\n    multilineBoxWithRemoveButton,\n    TextInput,\n} from '@coveord/plasma-react';\nimport {FocusEvent, ReactNode} from 'react';\nimport {compose} from 'redux';\n\ninterface MyData {\n    name: string;\n}\n\nconst ComplexMultilineBox = compose(\n    multilineBoxWithRemoveButton({\n        containerNode: (child: ReactNode, getRemoveButton: (props?: Partial<IButtonProps>) => ReactNode) => (\n            <div className=\"inline-flex center-align\">\n                {child}\n                {getRemoveButton({\n                    classes: [defaultMultilineBoxRemoveButtonClasses, 'flex-auto mb2'],\n                })}\n            </div>\n        ),\n    }),\n    multilineBoxWithDnD(),\n)(MultilineBox);\n\nconst Demo = () => (\n    <FormProvider>\n        <ComplexMultilineBox\n            id=\"multiline-box-complex-id\"\n            data={[{name: 'Poire'}, {name: 'Apple'}]}\n            renderBody={(data: Array<IMultilineSingleBoxProps<MyData>>, defaultProps: IMultilineParentProps) =>\n                Object.values(data).map(({id, isLast, props}: IMultilineSingleBoxProps<MyData>) => (\n                    <TextInput\n                        id={id}\n                        key={id}\n                        required={!isLast}\n                        showValidationOnBlur\n                        type=\"text\"\n                        label=\"Label\"\n                        defaultValue={props.name}\n                        onBlur={(evt: FocusEvent<HTMLInputElement>) => {\n                            if (evt.target.value !== '' && isLast) {\n                                defaultProps.addNewBox();\n                            }\n                        }}\n                    />\n                ))\n            }\n            defaultProps={{name: ''}}\n        />\n    </FormProvider>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(c, {})},
                        ),
                    );
                },
                f = (0, p.qC)(
                    (0, u.NzY)({
                        containerNode: function (n, e, t) {
                            return (0, i.jsx)(
                                'div',
                                {className: 'p2 m1', children: n},
                                ''.concat(e[t].id, 'Container'),
                            );
                        },
                    }),
                )(u.JKd),
                B = function () {
                    return (0, i.jsx)(u.RVL, {
                        children: (0, i.jsx)('div', {
                            className: 'highlight-padding highlight-margin',
                            children: (0, i.jsx)(f, {
                                id: 'multiline-box-container-id',
                                data: [{name: 'Poire'}, {name: 'Apple'}],
                                renderBody: function (n, e) {
                                    return Object.values(n).map(function (n) {
                                        var t = n.id,
                                            o = n.isLast,
                                            a = n.props;
                                        return (0, i.jsx)(
                                            u.oil,
                                            {
                                                id: t,
                                                required: !o,
                                                showValidationOnBlur: !0,
                                                type: 'text',
                                                label: 'Label',
                                                defaultValue: a.name,
                                                onBlur: function (n) {
                                                    '' !== n.target.value && o && e.addNewBox();
                                                },
                                            },
                                            t,
                                        );
                                    });
                                },
                                defaultProps: {name: ''},
                            }),
                        }),
                    });
                },
                v = function (n) {
                    return (0, i.jsx)(
                        l.Z,
                        (0, r._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {ReactNode, FocusEvent} from 'react';\nimport {compose} from 'redux';\nimport {\n    FormProvider,\n    MultilineBox,\n    multilineBoxContainer,\n    IMultilineSingleBoxProps,\n    IMultilineParentProps,\n    TextInput,\n} from '@coveord/plasma-react';\n\ninterface MyData {\n    name: string;\n}\n\nconst containerNode = (child: ReactNode, data: Array<IMultilineSingleBoxProps<MyData>>, index: number) => (\n    <div key={`${data[index].id}Container`} className=\"p2 m1\">\n        {child}\n    </div>\n);\n\nconst MultilineBoxWithContainer = compose(multilineBoxContainer({containerNode}))(MultilineBox);\n\nconst Demo = () => (\n    <FormProvider>\n        <div className=\"highlight-padding highlight-margin\">\n            <MultilineBoxWithContainer\n                id=\"multiline-box-container-id\"\n                data={[{name: 'Poire'}, {name: 'Apple'}]}\n                renderBody={(data: Array<IMultilineSingleBoxProps<MyData>>, defaultProps: IMultilineParentProps) =>\n                    Object.values(data).map(({id, isLast, props}: IMultilineSingleBoxProps<MyData>) => (\n                        <TextInput\n                            id={id}\n                            key={id}\n                            required={!isLast}\n                            showValidationOnBlur\n                            type=\"text\"\n                            label=\"Label\"\n                            defaultValue={props.name}\n                            onBlur={(evt: FocusEvent<HTMLInputElement>) => {\n                                if (evt.target.value !== '' && isLast) {\n                                    defaultProps.addNewBox();\n                                }\n                            }}\n                        />\n                    ))\n                }\n                defaultProps={{name: ''}}\n            />\n        </div>\n    </FormProvider>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(B, {})},
                        ),
                    );
                },
                P = (0, p.qC)((0, u.FMA)())(u.JKd),
                M = function () {
                    return (0, i.jsx)(u.RVL, {
                        children: (0, i.jsx)(P, {
                            id: 'multiline-box-dnd-id',
                            data: [{name: 'Poire'}, {name: 'Apple'}],
                            renderBody: function (n, e) {
                                return Object.values(n).map(function (n) {
                                    var t = n.id,
                                        o = n.isLast,
                                        a = n.props;
                                    return (0, i.jsx)(
                                        u.oil,
                                        {
                                            id: t,
                                            required: !o,
                                            showValidationOnBlur: !0,
                                            type: 'text',
                                            label: 'Label',
                                            defaultValue: a.name,
                                            onBlur: function (n) {
                                                '' !== n.target.value && o && e.addNewBox();
                                            },
                                        },
                                        t,
                                    );
                                });
                            },
                            defaultProps: {name: ''},
                        }),
                    });
                },
                h = function (n) {
                    return (0, i.jsx)(
                        l.Z,
                        (0, r._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {FocusEvent} from 'react';\nimport {compose} from 'redux';\nimport {\n    FormProvider,\n    MultilineBox,\n    IMultilineSingleBoxProps,\n    IMultilineParentProps,\n    TextInput,\n    multilineBoxWithDnD,\n} from '@coveord/plasma-react';\n\ninterface MyData {\n    name: string;\n}\n\nconst MultilineBoxWithDragAndDrop = compose(multilineBoxWithDnD())(MultilineBox);\n\nconst Demo = () => (\n    <FormProvider>\n        <MultilineBoxWithDragAndDrop\n            id=\"multiline-box-dnd-id\"\n            data={[{name: 'Poire'}, {name: 'Apple'}]}\n            renderBody={(data: Array<IMultilineSingleBoxProps<MyData>>, defaultProps: IMultilineParentProps) =>\n                Object.values(data).map(({id, isLast, props}: IMultilineSingleBoxProps<MyData>) => (\n                    <TextInput\n                        id={id}\n                        key={id}\n                        required={!isLast}\n                        showValidationOnBlur\n                        type=\"text\"\n                        label=\"Label\"\n                        defaultValue={props.name}\n                        onBlur={(evt: FocusEvent<HTMLInputElement>) => {\n                            if (evt.target.value !== '' && isLast) {\n                                defaultProps.addNewBox();\n                            }\n                        }}\n                    />\n                ))\n            }\n            defaultProps={{name: ''}}\n        />\n    </FormProvider>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(M, {})},
                        ),
                    );
                },
                g = (0, p.qC)(
                    (0, u.FY1)({
                        containerNode: function (n, e) {
                            return (0, i.jsxs)('div', {
                                className: 'inline-flex center-align',
                                children: [n, e({classes: [u.UEN, 'flex-auto mb2']})],
                            });
                        },
                    }),
                )(u.JKd),
                y = function () {
                    return (0, i.jsx)(u.RVL, {
                        children: (0, i.jsx)(g, {
                            id: 'multiline-box-remove-id',
                            data: [{name: 'Poire'}, {name: 'Apple'}],
                            renderBody: function (n, e) {
                                return Object.values(n).map(function (n) {
                                    var t = n.id,
                                        o = n.isLast,
                                        a = n.props;
                                    return (0, i.jsx)(
                                        u.oil,
                                        {
                                            id: t,
                                            required: !o,
                                            showValidationOnBlur: !0,
                                            type: 'text',
                                            label: 'Label',
                                            defaultValue: a.name,
                                            onBlur: function (n) {
                                                '' !== n.target.value && o && e.addNewBox();
                                            },
                                        },
                                        t,
                                    );
                                });
                            },
                            defaultProps: {name: ''},
                        }),
                    });
                },
                b = function (n) {
                    return (0, i.jsx)(
                        l.Z,
                        (0, r._)(
                            (0, a._)(
                                {
                                    snippet:
                                        "import {ReactNode, FocusEvent} from 'react';\nimport {compose} from 'redux';\nimport {\n    FormProvider,\n    MultilineBox,\n    IMultilineSingleBoxProps,\n    IMultilineParentProps,\n    TextInput,\n    multilineBoxWithRemoveButton,\n    IButtonProps,\n    defaultMultilineBoxRemoveButtonClasses,\n} from '@coveord/plasma-react';\n\ninterface MyData {\n    name: string;\n}\n\nconst MultilineBoxWithRemove = compose(\n    multilineBoxWithRemoveButton({\n        containerNode: (child: ReactNode, getRemoveButton: (props?: Partial<IButtonProps>) => ReactNode) => (\n            <div className=\"inline-flex center-align\">\n                {child}\n                {getRemoveButton({\n                    classes: [defaultMultilineBoxRemoveButtonClasses, 'flex-auto mb2'],\n                })}\n            </div>\n        ),\n    }),\n)(MultilineBox);\n\nconst Demo = () => (\n    <FormProvider>\n        <MultilineBoxWithRemove\n            id=\"multiline-box-remove-id\"\n            data={[{name: 'Poire'}, {name: 'Apple'}]}\n            renderBody={(data: Array<IMultilineSingleBoxProps<MyData>>, defaultProps: IMultilineParentProps) =>\n                Object.values(data).map(({id, isLast, props}: IMultilineSingleBoxProps<MyData>) => (\n                    <TextInput\n                        id={id}\n                        key={id}\n                        required={!isLast}\n                        showValidationOnBlur\n                        type=\"text\"\n                        label=\"Label\"\n                        defaultValue={props.name}\n                        onBlur={(evt: FocusEvent<HTMLInputElement>) => {\n                            if (evt.target.value !== '' && isLast) {\n                                defaultProps.addNewBox();\n                            }\n                        }}\n                    />\n                ))\n            }\n            defaultProps={{name: ''}}\n        />\n    </FormProvider>\n);\nexport default Demo;\n",
                                },
                                n,
                            ),
                            {children: (0, i.jsx)(y, {})},
                        ),
                    );
                },
                j = t(66809),
                I = function () {
                    return (0, i.jsx)(j.X, {
                        id: 'MultilineBox',
                        title: 'Multiline Box',
                        description:
                            'A multiline box allows users to provide multiple inputs for the same parameter. Each input appears on a different line.',
                        section: 'Form',
                        demo: (0, i.jsx)(s, {center: !0}),
                        propsMetadata: o.YC,
                        examples: {
                            withContainer: (0, i.jsx)(v, {center: !0, title: 'Custom container'}),
                            withRemove: (0, i.jsx)(b, {title: 'Remove button'}),
                            withDragAndDrop: (0, i.jsx)(h, {center: !0, title: 'Drag and drop'}),
                            complex: (0, i.jsx)(x, {center: !0, title: 'Everything combined'}),
                        },
                    });
                };
        },
    },
    function (n) {
        (n.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return n((n.s = 82747));
        }),
            (_N_E = n.O()));
    },
]);
