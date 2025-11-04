(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [73529],
    {
        80897: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/form/DiffViewer',
                function () {
                    return t(33145);
                },
            ]);
        },
        33145: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    default: function () {
                        return w;
                    },
                }));
            var i = t(97458),
                s = t(19523),
                o = t(52071),
                r = t(88966),
                f = t(39668),
                a = t(94807),
                d = function () {
                    return (0, i.jsx)(a.ZXo, {
                        difference:
                            '\n--- PRIMARY\n+++ CURRENT_STATE\n@@ -3,7 +3,7 @@\n   "parents" : { },\n   "model" : {\n     "condition" : { },\n-    "description" : "Some user note",\n+    "description" : "Some differences",\n     "isDefault" : true,\n     "name" : "default",\n     "splitTestEnabled" : false\n',
                    });
                },
                c = function (e) {
                    return (0, i.jsx)(
                        f.Z,
                        (0, r._)(
                            (0, o._)(
                                {
                                    snippet:
                                        'import {DiffViewer} from \'@coveord/plasma-react\';\n\nconst Demo = () => {\n    const diffText = `\n--- PRIMARY\n+++ CURRENT_STATE\n@@ -3,7 +3,7 @@\n   "parents" : { },\n   "model" : {\n     "condition" : { },\n-    "description" : "Some user note",\n+    "description" : "Some differences",\n     "isDefault" : true,\n     "name" : "default",\n     "splitTestEnabled" : false\n`;\n\n    return <DiffViewer difference={diffText} />;\n};\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(d, {})},
                        ),
                    );
                },
                l = function () {
                    return (0, i.jsx)(a.ZXo, {
                        difference:
                            '\n--- PRIMARY\n+++ CURRENT_STATE\n@@ -3,7 +3,7 @@\n   "parents" : { },\n   "model" : {\n     "condition" : { },\n-    "description" : "Some user note",\n+    "description" : "Some differences",\n     "isDefault" : true,\n     "name" : "default",\n     "splitTestEnabled" : false\n@@ -15,22 +15,22 @@\n   "parents" : { },\n   "model" : {\n     "condition" : { },\n-    "description" : "Some user note",\n+    "description" : "Some differences",\n     "isDefault" : true,\n     "name" : "default",\n     "splitTestEnabled" : false\n',
                    });
                },
                u = function (e) {
                    return (0, i.jsx)(
                        f.Z,
                        (0, r._)(
                            (0, o._)(
                                {
                                    snippet:
                                        'import {DiffViewer} from \'@coveord/plasma-react\';\n\nconst Demo = () => {\n    const diffText = `\n--- PRIMARY\n+++ CURRENT_STATE\n@@ -3,7 +3,7 @@\n   "parents" : { },\n   "model" : {\n     "condition" : { },\n-    "description" : "Some user note",\n+    "description" : "Some differences",\n     "isDefault" : true,\n     "name" : "default",\n     "splitTestEnabled" : false\n@@ -15,22 +15,22 @@\n   "parents" : { },\n   "model" : {\n     "condition" : { },\n-    "description" : "Some user note",\n+    "description" : "Some differences",\n     "isDefault" : true,\n     "name" : "default",\n     "splitTestEnabled" : false\n`;\n\n    return <DiffViewer difference={diffText} />;\n};\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(l, {})},
                        ),
                    );
                },
                p = function () {
                    return (0, i.jsx)(a.ZXo, {
                        difference: '',
                        noChangesLabel: 'No changes',
                        noChangesDescription: 'There are no changes to display since oldValue and newValues are equal',
                    });
                },
                m = function (e) {
                    return (0, i.jsx)(
                        f.Z,
                        (0, r._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {DiffViewer} from '@coveord/plasma-react';\n\nconst Demo = () => {\n    const diffText = ``;\n\n    return (\n        <DiffViewer\n            difference={diffText}\n            noChangesLabel={'No changes'}\n            noChangesDescription={'There are no changes to display since oldValue and newValues are equal'}\n        />\n    );\n};\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(p, {})},
                        ),
                    );
                },
                T = function () {
                    return (0, i.jsx)(a.ZXo, {
                        difference:
                            '\n--- PRIMARY\n+++ CURRENT_STATE\n@@ -3,7 +3,7 @@\n   "parents" : { },\n   "model" : {\n     "condition" : { },\n-    "description" : "Some user note",\n+    "description" : "Some differences",\n     "isDefault" : true,\n     "name" : "default",\n     "splitTestEnabled" : false\n',
                        splitView: !0,
                    });
                },
                x = function (e) {
                    return (0, i.jsx)(
                        f.Z,
                        (0, r._)(
                            (0, o._)(
                                {
                                    snippet:
                                        'import {DiffViewer} from \'@coveord/plasma-react\';\n\nconst Demo = () => {\n    const diffText = `\n--- PRIMARY\n+++ CURRENT_STATE\n@@ -3,7 +3,7 @@\n   "parents" : { },\n   "model" : {\n     "condition" : { },\n-    "description" : "Some user note",\n+    "description" : "Some differences",\n     "isDefault" : true,\n     "name" : "default",\n     "splitTestEnabled" : false\n`;\n\n    return <DiffViewer difference={diffText} splitView />;\n};\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(T, {})},
                        ),
                    );
                },
                D = t(66809),
                w = function () {
                    return (0, i.jsx)(D.X, {
                        id: 'DiffViewer',
                        title: 'Diff Viewer',
                        section: 'Form',
                        description:
                            'A diff viewer allows users to compare code files by showing them side by side and highlighting differences between them.',
                        sourcePath: '/packages/react/src/components/diffViewer/DiffViewer.tsx',
                        demo: (0, i.jsx)(c, {}),
                        propsMetadata: s.SL,
                        examples: {
                            splitView: (0, i.jsx)(x, {title: 'Split view'}),
                            manyChanges: (0, i.jsx)(u, {title: 'Many changes'}),
                            noChanges: (0, i.jsx)(m, {title: 'Equal values'}),
                        },
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 80897));
        }),
            (_N_E = e.O()));
    },
]);
