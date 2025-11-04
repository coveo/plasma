(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [59330],
    {
        97631: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/legacy/layout/IconCard',
                function () {
                    return t(70634);
                },
            ]);
        },
        70634: function (e, n, t) {
            'use strict';
            (t.r(n),
                t.d(n, {
                    IconCardDemos: function () {
                        return f;
                    },
                    default: function () {
                        return v;
                    },
                }));
            var i = t(97458),
                o = t(19523),
                c = t(52071),
                l = t(88966),
                a = t(39668),
                r = t(94807),
                s = function () {
                    return (0, i.jsx)(r.YPJ, {
                        title: 'Card title',
                        icon: (0, i.jsx)('img', {src: 'https://placeholder.pics/svg/72x72/DEDEDE/FFFFFF-FFFFFF'}),
                        description: 'Card description',
                        onClick: function () {
                            return alert('You clicked the card');
                        },
                    });
                },
                d = function (e) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, c._)(
                                {
                                    snippet:
                                        'import {IconCard} from \'@coveord/plasma-react\';\n\nconst Demo = () => (\n    <IconCard\n        title="Card title"\n        icon={<img src="https://placeholder.pics/svg/72x72/DEDEDE/FFFFFF-FFFFFF" />}\n        description="Card description"\n        onClick={() => alert(\'You clicked the card\')}\n    />\n);\nexport default Demo;\n',
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(s, {})},
                        ),
                    );
                },
                F = t(4778),
                u = function () {
                    return (0, i.jsx)(r.YPJ, {
                        small: !0,
                        title: 'Web',
                        icon: (0, i.jsx)('img', {src: 'https://placeholder.pics/svg/40x40/DEDEDE/FFFFFF-FFFFFF'}),
                        disabled: !0,
                        badges: [{icon: F.LockSize16Px, iconPlacement: r.VfR.Left, isSmall: !0}],
                        tooltip: {title: 'This source is not included in your license'},
                        style: {width: '368px'},
                    });
                },
                p = function (e) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {BadgeIconPlacement, IconCard} from '@coveord/plasma-react';\nimport {LockSize16Px} from '@coveord/plasma-react-icons';\n\nconst Demo = () => (\n    <IconCard\n        small\n        title=\"Web\"\n        icon={<img src=\"https://placeholder.pics/svg/40x40/DEDEDE/FFFFFF-FFFFFF\" />}\n        disabled\n        badges={[{icon: LockSize16Px, iconPlacement: BadgeIconPlacement.Left, isSmall: true}]}\n        tooltip={{title: 'This source is not included in your license'}}\n        style={{width: '368px'}}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(u, {})},
                        ),
                    );
                },
                m = function () {
                    return (0, i.jsx)(r.YPJ, {
                        small: !0,
                        title: 'Web',
                        icon: (0, i.jsx)('img', {src: 'https://placeholder.pics/svg/40x40/DEDEDE/FFFFFF-FFFFFF'}),
                        choices: [
                            {value: 'cloud', label: 'Cloud', icon: F.CloudSize24Px},
                            {value: 'on-prem', label: 'On-Premise', icon: F.DatabaseSize24Px},
                            {value: 'crodule', label: 'Crawling Module', icon: F.CrawlingBotSize24Px, disabled: !0},
                        ],
                        onClick: function (e) {
                            return alert(e);
                        },
                        style: {width: '368px'},
                    });
                },
                h = function (e) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {IconCard} from '@coveord/plasma-react';\nimport {CloudSize24Px, DatabaseSize24Px, CrawlingBotSize24Px} from '@coveord/plasma-react-icons';\n\nconst Demo = () => (\n    <IconCard\n        small\n        title=\"Web\"\n        icon={<img src=\"https://placeholder.pics/svg/40x40/DEDEDE/FFFFFF-FFFFFF\" />}\n        choices={[\n            {value: 'cloud', label: 'Cloud', icon: CloudSize24Px},\n            {value: 'on-prem', label: 'On-Premise', icon: DatabaseSize24Px},\n            {value: 'crodule', label: 'Crawling Module', icon: CrawlingBotSize24Px, disabled: true},\n        ]}\n        onClick={(choice) => alert(choice)}\n        style={{width: '368px'}}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(m, {})},
                        ),
                    );
                },
                x = function () {
                    return (0, i.jsx)(r.YPJ, {
                        title: 'Simple builder',
                        description:
                            'For lightweight usage, prototyping, and testing the search experience. Hosted by Coveo.',
                        icon: (0, i.jsx)('img', {
                            style: {width: '112px', height: '112px'},
                            src: 'https://placeholder.pics/svg/112x112/DEDEDE/FFFFFF-FFFFFF',
                        }),
                        customIconSize: !0,
                        placeBadgesAbove: !0,
                        badges: [{label: 'Recommended', isSmall: !0, type: r.gZO.Default}],
                        animateOnHover: !0,
                        onClick: function () {
                            return alert('You clicked the card');
                        },
                    });
                },
                g = function (e) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {IconCard, BadgeType} from '@coveord/plasma-react';\n\nconst Demo = () => (\n    <IconCard\n        title=\"Simple builder\"\n        description=\"For lightweight usage, prototyping, and testing the search experience. Hosted by Coveo.\"\n        icon={\n            <img\n                style={{width: '112px', height: '112px'}}\n                src=\"https://placeholder.pics/svg/112x112/DEDEDE/FFFFFF-FFFFFF\"\n            />\n        }\n        customIconSize\n        placeBadgesAbove\n        badges={[{label: 'Recommended', isSmall: true, type: BadgeType.Default}]}\n        animateOnHover\n        onClick={() => alert('You clicked the card')}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(x, {})},
                        ),
                    );
                },
                C = function () {
                    return (0, i.jsx)(r.YPJ, {
                        title: 'Web',
                        description: 'Enter a starting URL and automatically index all the pages of this site.',
                        icon: (0, i.jsx)('img', {src: 'https://placeholder.pics/svg/72x72/DEDEDE/FFFFFF-FFFFFF'}),
                        choices: [
                            {value: 'cloud', label: 'Cloud', icon: F.CloudSize24Px},
                            {value: 'on-prem', label: 'On-Premise', icon: F.DatabaseSize24Px},
                            {value: 'crodule', label: 'Crawling Module', icon: F.CrawlingBotSize24Px, disabled: !0},
                        ],
                        onClick: function (e) {
                            return alert(e);
                        },
                    });
                },
                b = function (e) {
                    return (0, i.jsx)(
                        a.Z,
                        (0, l._)(
                            (0, c._)(
                                {
                                    snippet:
                                        "import {IconCard} from '@coveord/plasma-react';\nimport {CloudSize24Px, DatabaseSize24Px, CrawlingBotSize24Px} from '@coveord/plasma-react-icons';\n\nconst Demo = () => (\n    <IconCard\n        title=\"Web\"\n        description=\"Enter a starting URL and automatically index all the pages of this site.\"\n        icon={<img src=\"https://placeholder.pics/svg/72x72/DEDEDE/FFFFFF-FFFFFF\" />}\n        choices={[\n            {value: 'cloud', label: 'Cloud', icon: CloudSize24Px},\n            {value: 'on-prem', label: 'On-Premise', icon: DatabaseSize24Px},\n            {value: 'crodule', label: 'Crawling Module', icon: CrawlingBotSize24Px, disabled: true},\n        ]}\n        onClick={(choice) => alert(choice)}\n    />\n);\nexport default Demo;\n",
                                },
                                e,
                            ),
                            {children: (0, i.jsx)(C, {})},
                        ),
                    );
                },
                D = t(66809),
                f = function () {
                    return (0, i.jsx)(D.X, {
                        id: 'IconCard',
                        title: 'Icon Card',
                        section: 'Layout',
                        description:
                            'An icon card is an element that regroups related pieces of information together. It can be either static or interactive.',
                        sourcePath: '/packages/react/src/components/iconCard/IconCard.tsx',
                        propsMetadata: o.bB,
                        demo: (0, i.jsx)(d, {center: !0}),
                        examples: {
                            choices: (0, i.jsx)(b, {center: !0, title: 'With multiple choices'}),
                            small: (0, i.jsx)(h, {center: !0, title: 'Small, with multiple choices'}),
                            disabled: (0, i.jsx)(p, {center: !0, title: 'Disabled, with lock badge'}),
                            badgesOnTop: (0, i.jsx)(g, {center: !0, title: 'With badges on top'}),
                        },
                    });
                },
                v = f;
        },
    },
    function (e) {
        (e.O(0, [59594, 73576, 37791, 66809, 26412, 49774, 92888, 40179], function () {
            return e((e.s = 97631));
        }),
            (_N_E = e.O()));
    },
]);
