(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15621],
    {
        4733: function (e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/feedback/StepProgressBar',
                function () {
                    return t(7125);
                },
            ]);
        },
        7125: function (e, r, t) {
            'use strict';
            (t.r(r),
                t.d(r, {
                    default: function () {
                        return d;
                    },
                }));
            var s = t(97458),
                n = t(19523),
                o = t(52071),
                p = t(88966),
                a = t(39668),
                c = t(94807),
                u = function () {
                    return (0, s.jsx)(c.Rz3, {numberOfSteps: 5, currentStep: 2});
                },
                i = function (e) {
                    return (0, s.jsx)(
                        a.Z,
                        (0, p._)(
                            (0, o._)(
                                {
                                    snippet:
                                        "import {StepProgressBar} from '@coveord/plasma-react';\n\nconst Demo = () => <StepProgressBar numberOfSteps={5} currentStep={2} />;\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, s.jsx)(u, {})},
                        ),
                    );
                },
                f = t(66809),
                d = function () {
                    return (0, s.jsx)(f.X, {
                        id: 'StepProgressBar',
                        title: 'Step Progress Bar',
                        section: 'Feedback',
                        description:
                            'A step progress bar visualizes a user’s progress as they complete a task by representing the number of steps left to complete the task.',
                        demo: (0, s.jsx)(i, {}),
                        sourcePath: '/packages/react/src/components/stepProgressBar/StepProgressBar.tsx',
                        propsMetadata: n.dp,
                    });
                };
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 4733));
        }),
            (_N_E = e.O()));
    },
]);
