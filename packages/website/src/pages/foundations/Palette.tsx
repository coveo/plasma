import classNames from 'classnames';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    export default () => (
        <h6>Hello World!</h6>
    );
`;

const colors: Array<{
    name: string;
    variants: Array<{renderer: FunctionComponent; cssName: string[]; hslaCode: string[]}>;
}> = [
    {
        name: 'Grey scale',
        variants: [
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-white">{children}</div>,
                cssName: ['--white'],
                hslaCode: ['hsla(0, 0%, 100%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-20">{children}</div>,
                cssName: ['--grey-20'],
                hslaCode: ['hsla(220, 20%, 97%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-40">{children}</div>,
                cssName: ['--grey-40'],
                hslaCode: ['hsla(180, 6%, 90%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-50">{children}</div>,
                cssName: ['--grey-50'],
                hslaCode: ['hsla(210, 10%, 79%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-60">{children}</div>,
                cssName: ['--grey-60'],
                hslaCode: ['hsla(212, 7%, 59%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-80">{children}</div>,
                cssName: ['--grey-80'],
                hslaCode: ['hsla(212, 7%, 41%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-100">{children}</div>,
                cssName: ['--grey-100'],
                hslaCode: ['hsla(240, 1%, 16%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-black">{children}</div>,
                cssName: ['--black'],
                hslaCode: ['hsla(0, 0%, 0%, 1)'],
            },
        ],
    },
    {
        name: 'Navy blue scale',
        variants: [
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-10">{children}</div>,
                cssName: ['--navy-blue-10'],
                hslaCode: ['hsla(238, 100%, 97%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-20">{children}</div>,
                cssName: ['--navy-blue-20'],
                hslaCode: ['hsla(238, 91%, 92%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-30">{children}</div>,
                cssName: ['--navy-blue-30'],
                hslaCode: ['hsla(238, 71%, 81%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-40">{children}</div>,
                cssName: ['--navy-blue-40'],
                hslaCode: ['hsla(240, 54%, 69%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-50">{children}</div>,
                cssName: ['--navy-blue-50'],
                hslaCode: ['hsla(240, 38%, 58%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-60">{children}</div>,
                cssName: ['--navy-blue-60'],
                hslaCode: ['hsla(240, 29%, 45%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-70">{children}</div>,
                cssName: ['--navy-blue-70'],
                hslaCode: ['hsla(240, 28%, 34%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-80">{children}</div>,
                cssName: ['--navy-blue-80'],
                hslaCode: ['hsla(240, 26%, 27%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-90">{children}</div>,
                cssName: ['--navy-blue-90'],
                hslaCode: ['hsla(240, 29%, 21%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-100">{children}</div>,
                cssName: ['--navy-blue-100'],
                hslaCode: ['hsla(231, 41%, 16%, 1)'],
            },
        ],
    },
    {
        name: 'Digital blue scale',
        variants: [
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-10">{children}</div>,
                cssName: ['--digital-blue-10'],
                hslaCode: ['hsla(210, 100%, 95%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-20">{children}</div>,
                cssName: ['--digital-blue-20'],
                hslaCode: ['hsla(209, 100%, 89%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-40">{children}</div>,
                cssName: ['--digital-blue-40'],
                hslaCode: ['hsla(209, 99%, 61%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-60">{children}</div>,
                cssName: ['--digital-blue-60'],
                hslaCode: ['hsla(214, 85%, 50%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-80">{children}</div>,
                cssName: ['--digital-blue-80'],
                hslaCode: ['hsla(218, 74%, 39%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-100">{children}</div>,
                cssName: ['--digital-blue-100'],
                hslaCode: ['hsla(218, 90%, 23%, 1)'],
            },
        ],
    },
    {
        name: 'Pomegranate red scale',
        variants: [
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-10">{children}</div>,
                cssName: ['--pomegranate-red-10'],
                hslaCode: ['hsla(4, 100%, 97%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-20">{children}</div>,
                cssName: ['--pomegranate-red-20'],
                hslaCode: ['hsla(5, 100%, 91%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-30">{children}</div>,
                cssName: ['--pomegranate-red-30'],
                hslaCode: ['hsla(5, 75%, 82%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-40">{children}</div>,
                cssName: ['--pomegranate-red-40'],
                hslaCode: ['hsla(5, 77%, 70%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-50">{children}</div>,
                cssName: ['--pomegranate-red-50'],
                hslaCode: ['hsla(5, 85%, 61%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-60">{children}</div>,
                cssName: ['--pomegranate-red-60'],
                hslaCode: ['hsla(5, 75%, 52%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-70">{children}</div>,
                cssName: ['--pomegranate-red-70'],
                hslaCode: ['hsla(5, 83%, 44%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-80">{children}</div>,
                cssName: ['--pomegranate-red-80'],
                hslaCode: ['hsla(5, 90%, 33%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-90">{children}</div>,
                cssName: ['--pomegranate-red-90'],
                hslaCode: ['hsla(5, 85%, 27%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-100">{children}</div>,
                cssName: ['--pomegranate-red-100'],
                hslaCode: ['hsla(5, 94%, 19%, 1)'],
            },
        ],
    },
    {
        name: 'Cerulean blue scale',
        variants: [
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-10">{children}</div>,
                cssName: ['--cerulean-blue-10'],
                hslaCode: ['hsla(199, 100%, 95%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-20">{children}</div>,
                cssName: ['--cerulean-blue-20'],
                hslaCode: ['hsla(199, 100%, 88%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-30">{children}</div>,
                cssName: ['--cerulean-blue-30'],
                hslaCode: ['hsla(199, 100%, 76%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-40">{children}</div>,
                cssName: ['--cerulean-blue-40'],
                hslaCode: ['hsla(199, 100%, 64%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-50">{children}</div>,
                cssName: ['--cerulean-blue-50'],
                hslaCode: ['hsla(199, 100%, 50%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-60">{children}</div>,
                cssName: ['--cerulean-blue-60'],
                hslaCode: ['hsla(199, 98%, 46%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-70">{children}</div>,
                cssName: ['--cerulean-blue-70'],
                hslaCode: ['hsla(199, 97%, 39%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-80">{children}</div>,
                cssName: ['--cerulean-blue-80'],
                hslaCode: ['hsla(199, 98%, 33%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-90">{children}</div>,
                cssName: ['--cerulean-blue-90'],
                hslaCode: ['hsla(199, 100%, 22%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-100">{children}</div>,
                cssName: ['--cerulean-blue-100'],
                hslaCode: ['hsla(200, 100%, 14%, 1)'],
            },
        ],
    },
    {
        name: 'Turbo-yellow scale',
        variants: [
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-10">{children}</div>,
                cssName: ['--turbo-yellow-10'],
                hslaCode: ['hsla(55, 100%, 93%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-20">{children}</div>,
                cssName: ['--turbo-yellow-20'],
                hslaCode: ['hsla(53, 100%, 86%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-30">{children}</div>,
                cssName: ['--turbo-yellow-30'],
                hslaCode: ['hsla(53, 100%, 72%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-40">{children}</div>,
                cssName: ['--turbo-yellow-40'],
                hslaCode: ['hsla(53, 100%, 50%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-50">{children}</div>,
                cssName: ['--turbo-yellow-50'],
                hslaCode: ['hsla(49, 91%, 56%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-60">{children}</div>,
                cssName: ['--turbo-yellow-60'],
                hslaCode: ['hsla(49, 91%, 48%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-70">{children}</div>,
                cssName: ['--turbo-yellow-70'],
                hslaCode: ['hsla(47, 97%, 45%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-80">{children}</div>,
                cssName: ['--turbo-yellow-80'],
                hslaCode: ['hsla(47, 97%, 38%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-90">{children}</div>,
                cssName: ['--turbo-yellow-90'],
                hslaCode: ['hsla(47, 98%, 26%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-100">{children}</div>,
                cssName: ['--turbo-yellow-100'],
                hslaCode: ['hsla(47, 80%, 16%, 1)'],
            },
        ],
    },
    {
        name: 'Bright turquoise scale',
        variants: [
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-10">{children}</div>,
                cssName: ['--bright-turquoise-10'],
                hslaCode: ['hsla(172, 100%, 96%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-20">{children}</div>,
                cssName: ['--bright-turquoise-20'],
                hslaCode: ['hsla(171, 97%, 88%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-30">{children}</div>,
                cssName: ['--bright-turquoise-30'],
                hslaCode: ['hsla(172, 94%, 65%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-40">{children}</div>,
                cssName: ['--bright-turquoise-40'],
                hslaCode: ['hsla(172, 84%, 52%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-50">{children}</div>,
                cssName: ['--bright-turquoise-50'],
                hslaCode: ['hsla(172, 82%, 47%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-60">{children}</div>,
                cssName: ['--bright-turquoise-60'],
                hslaCode: ['hsla(172, 83%, 43%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-70">{children}</div>,
                cssName: ['--bright-turquoise-70'],
                hslaCode: ['hsla(172, 88%, 35%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-80">{children}</div>,
                cssName: ['--bright-turquoise-80'],
                hslaCode: ['hsla(172, 88%, 35%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-90">{children}</div>,
                cssName: ['--bright-turquoise-90'],
                hslaCode: ['hsla(172, 90%, 20%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-bright-turquoise-100">{children}</div>
                ),
                cssName: ['--bright-turquoise-100'],
                hslaCode: ['hsla(172, 90%, 12%, 1)'],
            },
        ],
    },
    {
        name: 'Grape purple scale',
        variants: [
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-10">{children}</div>,
                cssName: ['--grape-purple-10'],
                hslaCode: ['hsla(293, 25%, 94%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-20">{children}</div>,
                cssName: ['--grape-purple-20'],
                hslaCode: ['hsla(279, 48%, 83%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-30">{children}</div>,
                cssName: ['--grape-purple-30'],
                hslaCode: ['hsla(278, 57%, 68%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-40">{children}</div>,
                cssName: ['--grape-purple-40'],
                hslaCode: ['hsla(279, 47%, 54%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-50">{children}</div>,
                cssName: ['--grape-purple-50'],
                hslaCode: ['hsla(279, 54%, 40%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-60">{children}</div>,
                cssName: ['--grape-purple-60'],
                hslaCode: ['hsla(278, 56%, 31%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-70">{children}</div>,
                cssName: ['--grape-purple-70'],
                hslaCode: ['hsla(278, 53%, 24%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-80">{children}</div>,
                cssName: ['--grape-purple-80'],
                hslaCode: ['hsla(278, 75%, 19%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-90">{children}</div>,
                cssName: ['--grape-purple-90'],
                hslaCode: ['hsla(279, 80%, 14%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-100">{children}</div>,
                cssName: ['--grape-purple-100'],
                hslaCode: ['hsla(279, 86%, 7%, 1)'],
            },
        ],
    },
    {
        name: 'Rain forest green scale',
        variants: [
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-10">{children}</div>
                ),
                cssName: ['--rain-forest-green-10'],
                hslaCode: ['hsla(168, 50%, 91%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-20">{children}</div>
                ),
                cssName: ['--rain-forest-green-20'],
                hslaCode: ['hsla(170, 47%, 79%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-30">{children}</div>
                ),
                cssName: ['--rain-forest-green-30'],
                hslaCode: ['hsla(170, 49%, 65%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-40">{children}</div>
                ),
                cssName: ['--rain-forest-green-40'],
                hslaCode: ['hsla(168, 54%, 44%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-50">{children}</div>
                ),
                cssName: ['--rain-forest-green-50'],
                hslaCode: ['hsla(168, 68%, 32%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-60">{children}</div>
                ),
                cssName: ['--rain-forest-green-60'],
                hslaCode: ['hsla(168, 100%, 19%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-70">{children}</div>
                ),
                cssName: ['--rain-forest-green-70'],
                hslaCode: ['hsla(168, 91%, 17%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-80">{children}</div>
                ),
                cssName: ['--rain-forest-green-80'],
                hslaCode: ['hsla(168, 88%, 13%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-90">{children}</div>
                ),
                cssName: ['--rain-forest-green-90'],
                hslaCode: ['hsla(169, 92%, 10%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-100">{children}</div>
                ),
                cssName: ['--rain-forest-green-100'],
                hslaCode: ['hsla(169, 94%, 7%, 1)'],
            },
        ],
    },
    {
        name: 'Governor bay blue scale',
        variants: [
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-10">{children}</div>
                ),
                cssName: ['--governor-bay-blue-10'],
                hslaCode: ['hsla(235, 100%, 97%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-20">{children}</div>
                ),
                cssName: ['--governor-bay-blue-20'],
                hslaCode: ['hsla(231, 63%, 88%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-30">{children}</div>
                ),
                cssName: ['--governor-bay-blue-30'],
                hslaCode: ['hsla(230, 77%, 78%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-40">{children}</div>
                ),
                cssName: ['--governor-bay-blue-40'],
                hslaCode: ['hsla(230, 65%, 64%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-50">{children}</div>
                ),
                cssName: ['--governor-bay-blue-50'],
                hslaCode: ['hsla(230, 62%, 56%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-60">{children}</div>
                ),
                cssName: ['--governor-bay-blue-60'],
                hslaCode: ['hsla(230, 60%, 45%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-70">{children}</div>
                ),
                cssName: ['--governor-bay-blue-70'],
                hslaCode: ['hsla(230, 63%, 38%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-80">{children}</div>
                ),
                cssName: ['--governor-bay-blue-80'],
                hslaCode: ['hsla(230, 69%, 32%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-90">{children}</div>
                ),
                cssName: ['--governor-bay-blue-90'],
                hslaCode: ['hsla(230, 74%, 24%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-100">{children}</div>
                ),
                cssName: ['--governor-bay-blue-100'],
                hslaCode: ['hsla(229, 80%, 14%, 1)'],
            },
        ],
    },
    {
        name: 'Sienna orange scale',
        variants: [
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-10">{children}</div>,
                cssName: ['--sienna-orange-10'],
                hslaCode: ['hsla(15, 100%, 96%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-20">{children}</div>,
                cssName: ['--sienna-orange-20'],
                hslaCode: ['hsla(15, 100%, 87%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-30">{children}</div>,
                cssName: ['--sienna-orange-30'],
                hslaCode: ['hsla(15, 98%, 77%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-40">{children}</div>,
                cssName: ['--sienna-orange-40'],
                hslaCode: ['hsla(15, 99%, 71%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-50">{children}</div>,
                cssName: ['--sienna-orange-50'],
                hslaCode: ['hsla(15, 82%, 60%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-60">{children}</div>,
                cssName: ['--sienna-orange-60'],
                hslaCode: ['hsla(15, 73%, 55%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-70">{children}</div>,
                cssName: ['--sienna-orange-70'],
                hslaCode: ['hsla(15, 67%, 45%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-80">{children}</div>,
                cssName: ['--sienna-orange-80'],
                hslaCode: ['hsla(15, 73%, 34%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-90">{children}</div>,
                cssName: ['--sienna-orange-90'],
                hslaCode: ['hsla(15, 79%, 23%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-100">{children}</div>,
                cssName: ['--sienna-orange-100'],
                hslaCode: ['hsla(15, 83%, 17%, 1)'],
            },
        ],
    },
];

export const Palette = () => (
    <PageLayout
        id="Palette"
        section="Foundations"
        title="Palette"
        thumbnail="placeholder"
        description=""
        sourcePath="packages/style/scss/colors.scss"
        code={code}
        withPropsTable={false}
    >
        <div className="plasma-page-layout__section full-content flex-column">
            {colors.map(({name, variants}) => (
                <div key={name} className="p2 mb3">
                    <h6 className="h6-subdued mb2">{name}</h6>
                    <table className="table">
                        <thead className="mod-no-border-top">
                            <tr>
                                <th style={{width: '300px'}}>CSS Name</th>
                                <th style={{width: '300px'}}>Hsla value</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {variants.map(({cssName, hslaCode, renderer: Preview}) => (
                                <tr key={Buffer.from(cssName.join('-')).toString('base64')}>
                                    <td className="mod-no-border-bottom">
                                        {cssName.map((selector, i) => (
                                            <span
                                                className={classNames('code', {
                                                    mr1: i + 1 !== cssName.length,
                                                })}
                                                key={selector}
                                            >
                                                {selector}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="mod-no-border-bottom">
                                        {hslaCode.map((hsla, i) => (
                                            <span
                                                className={classNames('code', {
                                                    mr1: i + 1 !== hslaCode.length,
                                                })}
                                                key={hsla}
                                            >
                                                {hsla}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="mod-no-border-bottom">
                                        <Preview></Preview>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    </PageLayout>
);

export default Palette;
