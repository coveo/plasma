(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [20499],
    {
        25118: function (o, n, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/ModalWindow',
                function () {
                    return e(16513);
                },
            ]);
        },
        16513: function (o, n, e) {
            'use strict';
            (e.r(n),
                e.d(n, {
                    default: function () {
                        return y;
                    },
                }));
            var t = e(97458),
                i = e(19523),
                s = e(52071),
                a = e(88966),
                d = e(39668),
                l = e(48692),
                r = e(94807),
                c = function () {
                    var o = (0, l.I0)();
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(r.zxk, {
                                onClick: function () {
                                    return o((0, r.h7j)('loading-modal'));
                                },
                                children: 'Open Modal',
                            }),
                            (0, t.jsx)(r.VQu, {id: 'loading-modal', title: 'My loading title', openOnMount: !1}),
                        ],
                    });
                },
                m = function (o) {
                    return (0, t.jsx)(
                        d.Z,
                        (0, a._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {useDispatch} from 'react-redux';\nimport {Button, IDispatch, openModal, ModalLoading} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const dispatch: IDispatch = useDispatch();\n    const open = () => dispatch(openModal('loading-modal'));\n    return (\n        <>\n            <Button onClick={open}>Open Modal</Button>\n            <ModalLoading id=\"loading-modal\" title=\"My loading title\" openOnMount={false} />\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                o,
                            ),
                            {children: (0, t.jsx)(c, {})},
                        ),
                    );
                },
                p = function () {
                    var o = (0, l.I0)(),
                        n = function (n) {
                            return function () {
                                return o((0, r.h7j)(n));
                            };
                        },
                        e = function (n) {
                            return function () {
                                return o((0, r.Mr3)(n));
                            };
                        };
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(r.zxk, {onClick: n('success'), children: 'Success prompt'}),
                            (0, t.jsx)(r.zxk, {onClick: n('warning'), children: 'Warning prompt'}),
                            (0, t.jsx)(r.zxk, {onClick: n('critical'), children: 'Critical prompt'}),
                            (0, t.jsx)(r.zxk, {onClick: n('info'), children: 'Info prompt'}),
                            (0, t.jsx)(r.Ngf, {
                                id: 'success',
                                title: 'Prompt success',
                                isPrompt: !0,
                                modalHeaderClasses: ['mod-success'],
                                modalBodyChildren: (0, t.jsx)('div', {className: 'mt2', children: 'Success message'}),
                                modalFooterChildren: (0, t.jsx)(r.zxk, {
                                    small: !0,
                                    onClick: e('success'),
                                    children: 'Close',
                                }),
                                modalBodyClasses: ['mod-header-padding', 'mod-form-top-bottom-padding'],
                            }),
                            (0, t.jsx)(r.Ngf, {
                                id: 'warning',
                                title: 'Prompt warning',
                                isPrompt: !0,
                                modalHeaderClasses: ['mod-warning'],
                                modalBodyChildren: (0, t.jsx)('div', {className: 'mt2', children: 'Warning message'}),
                                modalFooterChildren: (0, t.jsx)(r.zxk, {
                                    small: !0,
                                    onClick: e('warning'),
                                    children: 'Close',
                                }),
                                modalBodyClasses: ['mod-header-padding', 'mod-form-top-bottom-padding'],
                            }),
                            (0, t.jsx)(r.Ngf, {
                                id: 'critical',
                                title: 'Prompt critical',
                                isPrompt: !0,
                                modalHeaderClasses: ['mod-critical'],
                                modalBodyChildren: (0, t.jsx)('div', {className: 'mt2', children: 'Critical message'}),
                                modalFooterChildren: (0, t.jsx)(r.zxk, {
                                    small: !0,
                                    onClick: e('critical'),
                                    children: 'Close',
                                }),
                                modalBodyClasses: ['mod-header-padding', 'mod-form-top-bottom-padding'],
                            }),
                            (0, t.jsx)(r.Ngf, {
                                id: 'info',
                                title: 'Prompt info',
                                isPrompt: !0,
                                modalHeaderClasses: ['mod-info'],
                                modalBodyChildren: (0, t.jsx)('div', {className: 'mt2', children: 'Info message'}),
                                modalFooterChildren: (0, t.jsx)(r.zxk, {
                                    small: !0,
                                    onClick: e('info'),
                                    children: 'Close',
                                }),
                                modalBodyClasses: ['mod-header-padding', 'mod-form-top-bottom-padding'],
                            }),
                        ],
                    });
                },
                u = function (o) {
                    return (0, t.jsx)(
                        d.Z,
                        (0, a._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {useDispatch} from 'react-redux';\nimport {Button, IDispatch, openModal, closeModal, ModalCompositeConnected} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const dispatch: IDispatch = useDispatch();\n    const open = (id: string) => () => dispatch(openModal(id));\n    const close = (id: string) => () => dispatch(closeModal(id));\n    return (\n        <>\n            <Button onClick={open('success')}>Success prompt</Button>\n            <Button onClick={open('warning')}>Warning prompt</Button>\n            <Button onClick={open('critical')}>Critical prompt</Button>\n            <Button onClick={open('info')}>Info prompt</Button>\n            <ModalCompositeConnected\n                id=\"success\"\n                title=\"Prompt success\"\n                isPrompt\n                modalHeaderClasses={['mod-success']}\n                modalBodyChildren={<div className=\"mt2\">Success message</div>}\n                modalFooterChildren={\n                    <Button small onClick={close('success')}>\n                        Close\n                    </Button>\n                }\n                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n            />\n\n            <ModalCompositeConnected\n                id=\"warning\"\n                title=\"Prompt warning\"\n                isPrompt\n                modalHeaderClasses={['mod-warning']}\n                modalBodyChildren={<div className=\"mt2\">Warning message</div>}\n                modalFooterChildren={\n                    <Button small onClick={close('warning')}>\n                        Close\n                    </Button>\n                }\n                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n            />\n\n            <ModalCompositeConnected\n                id=\"critical\"\n                title=\"Prompt critical\"\n                isPrompt\n                modalHeaderClasses={['mod-critical']}\n                modalBodyChildren={<div className=\"mt2\">Critical message</div>}\n                modalFooterChildren={\n                    <Button small onClick={close('critical')}>\n                        Close\n                    </Button>\n                }\n                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n            />\n\n            <ModalCompositeConnected\n                id=\"info\"\n                title=\"Prompt info\"\n                isPrompt\n                modalHeaderClasses={['mod-info']}\n                modalBodyChildren={<div className=\"mt2\">Info message</div>}\n                modalFooterChildren={\n                    <Button small onClick={close('info')}>\n                        Close\n                    </Button>\n                }\n                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n            />\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                o,
                            ),
                            {children: (0, t.jsx)(p, {})},
                        ),
                    );
                },
                h = function () {
                    var o = (0, l.I0)();
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(r.zxk, {
                                onClick: function () {
                                    return o((0, r.h7j)('simple-modal'));
                                },
                                children: 'Open modal',
                            }),
                            (0, t.jsx)(r.Ngf, {
                                id: 'simple-modal',
                                title: 'Simple Modal',
                                modalBodyChildren: (0, t.jsx)('div', {
                                    className: 'mt2',
                                    children:
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper blandit volutpat. Suspendisse nec lorem mauris. Nam faucibus vitae tellus eu aliquam. Vivamus non quam at lectus pharetra gravida. In hac habitasse platea dictumst. Integer nec bibendum risus. Ut pulvinar sodales erat, id sollicitudin nunc egestas vel. Aliquam lectus nisl, aliquam sed rutrum sed, facilisis cursus lorem. Proin egestas justo erat, a rhoncus nulla pharetra et. In placerat facilisis tellus eget sodales. Mauris eu neque est. Nam in odio pretium, ullamcorper orci nec, ultricies arcu.',
                                }),
                                modalFooterChildren: (0, t.jsx)(r.zxk, {
                                    small: !0,
                                    onClick: function () {
                                        return o((0, r.Mr3)('simple-modal'));
                                    },
                                    children: 'Close',
                                }),
                                modalBodyClasses: ['mod-header-padding', 'mod-form-top-bottom-padding'],
                            }),
                        ],
                    });
                },
                C = function (o) {
                    return (0, t.jsx)(
                        d.Z,
                        (0, a._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {useDispatch} from 'react-redux';\nimport {Button, IDispatch, openModal, closeModal, ModalCompositeConnected} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const dispatch: IDispatch = useDispatch();\n    const open = () => dispatch(openModal('simple-modal'));\n    const close = () => dispatch(closeModal('simple-modal'));\n    return (\n        <>\n            <Button onClick={open}>Open modal</Button>\n            <ModalCompositeConnected\n                id=\"simple-modal\"\n                title=\"Simple Modal\"\n                modalBodyChildren={\n                    <div className=\"mt2\">\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper blandit volutpat.\n                        Suspendisse nec lorem mauris. Nam faucibus vitae tellus eu aliquam. Vivamus non quam at lectus\n                        pharetra gravida. In hac habitasse platea dictumst. Integer nec bibendum risus. Ut pulvinar\n                        sodales erat, id sollicitudin nunc egestas vel. Aliquam lectus nisl, aliquam sed rutrum sed,\n                        facilisis cursus lorem. Proin egestas justo erat, a rhoncus nulla pharetra et. In placerat\n                        facilisis tellus eget sodales. Mauris eu neque est. Nam in odio pretium, ullamcorper orci nec,\n                        ultricies arcu.\n                    </div>\n                }\n                modalFooterChildren={\n                    <Button small onClick={close}>\n                        Close\n                    </Button>\n                }\n                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n            />\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                o,
                            ),
                            {children: (0, t.jsx)(h, {})},
                        ),
                    );
                },
                g = function () {
                    var o = 'ModalWithDirty',
                        n = (0, l.v9)(function (n) {
                            return r.K3b.getIsDirty(n, {id: o});
                        }),
                        e = (0, l.I0)(),
                        i = function (n) {
                            return e(r.m5D.toggle(o, n));
                        },
                        s = function () {
                            (e((0, r.Mr3)(o)), i(!1));
                        },
                        a = function (o) {
                            i('' !== o);
                        };
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(r.zxk, {
                                onClick: function () {
                                    return e((0, r.h7j)(o));
                                },
                                children: 'Open Modal',
                            }),
                            (0, t.jsx)(r.AMJ, {
                                isDirty: n,
                                children: function (n) {
                                    var e = n.promptBefore;
                                    return (0, t.jsx)(r.Ngf, {
                                        id: o,
                                        title: 'A modal with a dirty change discard prevention',
                                        classes: ['mod-fade-in-scale'],
                                        modalBodyChildren: (0, t.jsx)('div', {
                                            className: 'mt2',
                                            children: (0, t.jsx)('div', {
                                                className: 'mb2',
                                                children: (0, t.jsx)(r.IIB, {
                                                    id: 'input',
                                                    labelTitle: 'Try to close me with dirty changes.',
                                                    onChange: a,
                                                }),
                                            }),
                                        }),
                                        modalFooterChildren: (0, t.jsx)(r.zxk, {
                                            onClick: function () {
                                                return e(s);
                                            },
                                            children: 'Close',
                                        }),
                                        validateShouldNavigate: function () {
                                            return e(s);
                                        },
                                        modalBodyClasses: ['mod-header-padding', 'mod-form-top-bottom-padding'],
                                        docLink: {url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}},
                                    });
                                },
                            }),
                        ],
                    });
                },
                f = function (o) {
                    return (0, t.jsx)(
                        d.Z,
                        (0, a._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {useSelector, useDispatch} from 'react-redux';\nimport {\n    Button,\n    IDispatch,\n    Input,\n    openModal,\n    closeModal,\n    ModalCompositeConnected,\n    PlasmaState,\n    UnsavedChangesModalProvider,\n    WithDirtySelectors,\n    WithDirtyActions,\n} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const id = 'ModalWithDirty';\n    const isDirty = useSelector((state: PlasmaState) => WithDirtySelectors.getIsDirty(state, {id}));\n    const dispatch: IDispatch = useDispatch();\n    const open = () => dispatch(openModal(id));\n    const close = () => dispatch(closeModal(id));\n    const toggleIsDirty = (dirty: boolean) => dispatch(WithDirtyActions.toggle(id, dirty));\n\n    const handleClose = () => {\n        close();\n        toggleIsDirty(false);\n    };\n    const onInputChange = (value: string) => {\n        toggleIsDirty(value !== '');\n    };\n    return (\n        <>\n            <Button onClick={open}>Open Modal</Button>\n            <UnsavedChangesModalProvider isDirty={isDirty}>\n                {({promptBefore}) => (\n                    <ModalCompositeConnected\n                        id={id}\n                        title=\"A modal with a dirty change discard prevention\"\n                        classes={['mod-fade-in-scale']}\n                        modalBodyChildren={\n                            <div className=\"mt2\">\n                                <div className=\"mb2\">\n                                    <Input\n                                        id=\"input\"\n                                        labelTitle=\"Try to close me with dirty changes.\"\n                                        onChange={onInputChange}\n                                    />\n                                </div>\n                            </div>\n                        }\n                        modalFooterChildren={<Button onClick={() => promptBefore(handleClose)}>Close</Button>}\n                        validateShouldNavigate={() => promptBefore(handleClose)}\n                        modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n                        docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}\n                    />\n                )}\n            </UnsavedChangesModalProvider>\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                o,
                            ),
                            {children: (0, t.jsx)(g, {})},
                        ),
                    );
                },
                x = function () {
                    var o = (0, l.I0)();
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(r.zxk, {
                                onClick: function () {
                                    return o((0, r.h7j)('additional-props'));
                                },
                                children: 'Open modal',
                            }),
                            (0, t.jsx)(r.Ngf, {
                                id: 'additional-props',
                                title: 'Modal with addtional ReactModal props',
                                classes: ['mod-fade-in-scale'],
                                modalBodyChildren: 'This modal only closes by using the close button or the X.',
                                modalFooterChildren: (0, t.jsx)(r.zxk, {
                                    onClick: function () {
                                        return o((0, r.Mr3)('additional-props'));
                                    },
                                    children: 'Close',
                                }),
                                modalBodyClasses: ['mod-header-padding', 'mod-form-top-bottom-padding'],
                                docLink: {url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}},
                                shouldCloseOnEsc: !1,
                                shouldCloseOnOverlayClick: !1,
                                onAfterOpen: function () {
                                    return alert('The modal content has mounted and is ready to open.');
                                },
                                closeCallback: function () {
                                    return alert('The modal has closed.');
                                },
                            }),
                        ],
                    });
                },
                v = function (o) {
                    return (0, t.jsx)(
                        d.Z,
                        (0, a._)(
                            (0, s._)(
                                {
                                    snippet:
                                        "import {useDispatch} from 'react-redux';\nimport {Button, IDispatch, openModal, closeModal, ModalCompositeConnected} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const dispatch: IDispatch = useDispatch();\n    const open = () => dispatch(openModal('additional-props'));\n    const close = () => dispatch(closeModal('additional-props'));\n    return (\n        <>\n            <Button onClick={open}>Open modal</Button>\n            <ModalCompositeConnected\n                id=\"additional-props\"\n                title=\"Modal with addtional ReactModal props\"\n                classes={['mod-fade-in-scale']}\n                modalBodyChildren=\"This modal only closes by using the close button or the X.\"\n                modalFooterChildren={<Button onClick={close}>Close</Button>}\n                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n                docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}\n                shouldCloseOnEsc={false}\n                shouldCloseOnOverlayClick={false}\n                onAfterOpen={() => alert('The modal content has mounted and is ready to open.')}\n                closeCallback={() => alert('The modal has closed.')}\n            />\n        </>\n    );\n};\nexport default Demo;\n",
                                },
                                o,
                            ),
                            {children: (0, t.jsx)(x, {})},
                        ),
                    );
                },
                B = e(66809),
                y = function () {
                    return (0, t.jsx)(B.X, {
                        id: 'ModalCompositeConnected',
                        title: 'Modal Window',
                        section: 'Layout',
                        description:
                            'A modal appears over the current context to have users focus on a particular task or information.',
                        sourcePath: '/packages/react/src/components/modal/ModalComposite.tsx',
                        propsMetadata: i.G8,
                        demo: (0, t.jsx)(C, {}),
                        examples: {
                            prompts: (0, t.jsx)(u, {title: 'Prompts'}),
                            loading: (0, t.jsx)(m, {title: 'Loading Modal'}),
                            withAdditionalProps: (0, t.jsx)(v, {title: 'With Additional Props'}),
                            withDirty: (0, t.jsx)(f, {title: 'With Dirty State Management'}),
                        },
                    });
                };
        },
    },
    function (o) {
        (o.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return o((o.s = 25118));
        }),
            (_N_E = o.O()));
    },
]);
