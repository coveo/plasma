(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [41240],
    {
        96772: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/BlankSlate',
                function () {
                    return n(88186);
                },
            ]);
        },
        88186: function (e, t, n) {
            'use strict';
            (n.r(t),
                n.d(t, {
                    BlankSlateDemo: function () {
                        return k;
                    },
                    default: function () {
                        return S;
                    },
                }));
            var r = n(97458),
                a = n(19523),
                o = n(52071),
                s = n(88966),
                i = n(39668),
                l = n(94807),
                c = n(4778),
                d = function () {
                    return (0, r.jsx)(l.R$c, {
                        icon: c.IdeaSize32Px,
                        title: 'Title of the blank slate',
                        description: (0, r.jsxs)('span', {
                            children: [
                                'This is a description with a link to',
                                ' ',
                                (0, r.jsx)('a', {
                                    target: '_blank',
                                    href: 'http://www.perdu.com/',
                                    className: 'link',
                                    children: 'this website',
                                }),
                            ],
                        }),
                        buttons: [{name: 'button', primary: !0, enabled: !0}],
                    });
                },
                h = function (e) {
                    return (0, r.jsx)(
                        i.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        'import {BlankSlate} from \'@coveord/plasma-react\';\nimport {IdeaSize32Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <BlankSlate\n        icon={IdeaSize32Px}\n        title="Title of the blank slate"\n        description={\n            <span>\n                This is a description with a link to{\' \'}\n                <a target="_blank" href="http://www.perdu.com/" className="link">\n                    this website\n                </a>\n            </span>\n        }\n        buttons={[\n            {\n                name: \'button\',\n                primary: true,\n                enabled: true,\n            },\n        ]}\n    />\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(d, {})},
                        ),
                    );
                },
                u = function () {
                    return (0, r.jsx)(l.Q0B, {
                        title: 'Unable to retrieve X',
                        description:
                            'Super clear error message localized to ensure a good comprehension about the current error',
                    });
                },
                m = function (e) {
                    return (0, r.jsx)(
                        i.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        'import {BlankSlateWithError} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <BlankSlateWithError\n        title="Unable to retrieve X"\n        description="Super clear error message localized to ensure a good comprehension about the current error"\n    />\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(u, {})},
                        ),
                    );
                },
                p = function () {
                    return (0, r.jsxs)('table', {
                        className: 'table',
                        children: [
                            (0, r.jsx)('thead', {
                                children: (0, r.jsxs)('tr', {
                                    children: [
                                        (0, r.jsx)('th', {children: 'Firstname'}),
                                        (0, r.jsx)('th', {children: 'Lastname'}),
                                        (0, r.jsx)('th', {children: 'Age'}),
                                    ],
                                }),
                            }),
                            (0, r.jsx)('tbody', {
                                children: (0, r.jsx)(l.B$n, {
                                    title: 'Title test',
                                    description: 'description test',
                                    icon: c.IdeaSize32Px,
                                }),
                            }),
                        ],
                    });
                },
                b = function (e) {
                    return (0, r.jsx)(
                        i.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        'import {BlankSlateWithTable} from \'@coveord/plasma-react\';\nimport {IdeaSize32Px} from \'@coveord/plasma-react-icons\';\n\nconst Demo = () => (\n    <table className="table">\n        <thead>\n            <tr>\n                <th>Firstname</th>\n                <th>Lastname</th>\n                <th>Age</th>\n            </tr>\n        </thead>\n        <tbody>\n            <BlankSlateWithTable title="Title test" description="description test" icon={IdeaSize32Px} />\n        </tbody>\n    </table>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(p, {})},
                        ),
                    );
                },
                x = function () {
                    return (0, r.jsxs)('table', {
                        className: 'table',
                        children: [
                            (0, r.jsx)('thead', {
                                children: (0, r.jsxs)('tr', {
                                    children: [
                                        (0, r.jsx)('th', {children: 'Firstname'}),
                                        (0, r.jsx)('th', {children: 'Lastname'}),
                                        (0, r.jsx)('th', {children: 'Age'}),
                                    ],
                                }),
                            }),
                            (0, r.jsx)('tbody', {
                                children: (0, r.jsx)(l.H_t, {
                                    title: 'Unable to retrieve X',
                                    description:
                                        'Super clear error message localized to ensure a good comprehension about the current error',
                                    additionalSection: (0, r.jsx)(l.wNM, {
                                        id: 'refresh',
                                        delay: 10,
                                        callback: function (e) {
                                            return setTimeout(e, 2e3);
                                        },
                                        renderCount: function (e) {
                                            return (0, r.jsxs)('span', {
                                                className: 'small-text',
                                                children: ['Auto refresh in ', e, ' seconds'],
                                            });
                                        },
                                        button: {name: 'Refresh', enabled: !0},
                                        buttonContainerProps: {className: 'mb2'},
                                    }),
                                }),
                            }),
                        ],
                    });
                },
                f = function (e) {
                    return (0, r.jsx)(
                        i.Z,
                        (0, s._)(
                            (0, o._)(
                                {
                                    snippet:
                                        'import {BlankSlateWithTableInError, ButtonWithRefreshCallback} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <table className="table">\n        <thead>\n            <tr>\n                <th>Firstname</th>\n                <th>Lastname</th>\n                <th>Age</th>\n            </tr>\n        </thead>\n        <tbody>\n            <BlankSlateWithTableInError\n                title="Unable to retrieve X"\n                description="Super clear error message localized to ensure a good comprehension about the current error"\n                additionalSection={\n                    <ButtonWithRefreshCallback\n                        id="refresh"\n                        delay={10}\n                        callback={(start) => setTimeout(start, 2000)}\n                        renderCount={(count: number) => (\n                            <span className="small-text">Auto refresh in {count} seconds</span>\n                        )}\n                        button={{\n                            name: \'Refresh\',\n                            enabled: true,\n                        }}\n                        buttonContainerProps={{\n                            className: \'mb2\',\n                        }}\n                    />\n                }\n            />\n        </tbody>\n    </table>\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, r.jsx)(x, {})},
                        ),
                    );
                },
                j = n(66809),
                k = function () {
                    return (0, r.jsx)(j.X, {
                        id: 'BlankSlate',
                        sourcePath: '/packages/react/src/components/blankSlate/BlankSlate.tsx',
                        title: 'Blank Slate',
                        section: 'Layout',
                        description:
                            'A blank slate informs users that a section doesn’t contain any data and provides a way to address it.',
                        thumbnail: 'placeholder',
                        propsMetadata: a.HI,
                        demo: (0, r.jsx)(h, {}),
                        examples: {
                            inError: (0, r.jsx)(m, {title: 'With error'}),
                            withTable: (0, r.jsx)(b, {title: 'With table'}),
                            tableInError: (0, r.jsx)(f, {title: 'Table in error'}),
                        },
                    });
                },
                S = k;
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 96772));
        }),
            (_N_E = e.O()));
    },
]);
