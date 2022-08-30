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
    variants: Array<{renderer: FunctionComponent; cssName: string[]; rgbVariant: string[]; hslaCode: string[]}>;
}> = [
    {
        name: 'Grey scale',
        variants: [
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-white">{children}</div>,
                cssName: ['--white'],
                rgbVariant: ['--white-rgb'],
                hslaCode: ['hsla(0, 0%, 100%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-20">{children}</div>,
                cssName: ['--grey-20'],
                rgbVariant: ['--grey-20-rgb'],
                hslaCode: ['hsla(220, 20%, 97%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-40">{children}</div>,
                cssName: ['--grey-40'],
                rgbVariant: ['--grey-40-rgb'],
                hslaCode: ['hsla(180, 6%, 90%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-50">{children}</div>,
                cssName: ['--grey-50'],
                rgbVariant: ['--grey-50-rgb'],
                hslaCode: ['hsla(210, 10%, 79%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-60">{children}</div>,
                cssName: ['--grey-60'],
                rgbVariant: ['--grey-60-rgb'],
                hslaCode: ['hsla(212, 7%, 59%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-80">{children}</div>,
                cssName: ['--grey-80'],
                rgbVariant: ['--grey-80-rgb'],
                hslaCode: ['hsla(212, 7%, 41%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grey-100">{children}</div>,
                cssName: ['--grey-100'],
                rgbVariant: ['--grey-100-rgb'],
                hslaCode: ['hsla(240, 1%, 16%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-black">{children}</div>,
                cssName: ['--black'],
                rgbVariant: ['--black-rgb'],
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
                rgbVariant: ['--navy-blue-10-rgb'],
                hslaCode: ['hsla(238, 100%, 97%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-20">{children}</div>,
                cssName: ['--navy-blue-20'],
                rgbVariant: ['--navy-blue-20-rgb'],
                hslaCode: ['hsla(238, 91%, 92%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-30">{children}</div>,
                cssName: ['--navy-blue-30'],
                rgbVariant: ['--navy-blue-30-rgb'],
                hslaCode: ['hsla(238, 71%, 81%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-40">{children}</div>,
                cssName: ['--navy-blue-40'],
                rgbVariant: ['--navy-blue-40-rgb'],
                hslaCode: ['hsla(240, 54%, 69%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-50">{children}</div>,
                cssName: ['--navy-blue-50'],
                rgbVariant: ['--navy-blue-50-rgb'],
                hslaCode: ['hsla(240, 38%, 58%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-60">{children}</div>,
                cssName: ['--navy-blue-60'],
                rgbVariant: ['--navy-blue-60-rgb'],
                hslaCode: ['hsla(240, 29%, 45%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-70">{children}</div>,
                cssName: ['--navy-blue-70'],
                rgbVariant: ['--navy-blue-7o-rgb'],
                hslaCode: ['hsla(240, 28%, 34%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-80">{children}</div>,
                cssName: ['--navy-blue-80'],
                rgbVariant: ['--navy-blue-80-rgb'],
                hslaCode: ['hsla(240, 26%, 27%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-90">{children}</div>,
                cssName: ['--navy-blue-90'],
                rgbVariant: ['--navy-blue-90-rgb'],
                hslaCode: ['hsla(240, 29%, 21%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-navy-blue-100">{children}</div>,
                cssName: ['--navy-blue-100'],
                rgbVariant: ['--navy-blue-100-rgb'],
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
                rgbVariant: ['--digital-blue-10-rgb'],
                hslaCode: ['hsla(210, 100%, 95%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-20">{children}</div>,
                cssName: ['--digital-blue-20'],
                rgbVariant: ['--digital-blue-20-rgb'],
                hslaCode: ['hsla(209, 100%, 89%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-40">{children}</div>,
                cssName: ['--digital-blue-40'],
                rgbVariant: ['--digital-blue-40-rgb'],
                hslaCode: ['hsla(209, 99%, 61%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-60">{children}</div>,
                cssName: ['--digital-blue-60'],
                rgbVariant: ['--digital-blue-60-rgb'],
                hslaCode: ['hsla(214, 85%, 50%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-80">{children}</div>,
                cssName: ['--digital-blue-80'],
                rgbVariant: ['--digital-blue-80-rgb'],
                hslaCode: ['hsla(218, 74%, 39%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-digital-blue-100">{children}</div>,
                cssName: ['--digital-blue-100'],
                rgbVariant: ['--digital-blue-100-rgb'],
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
                rgbVariant: ['--pomegranate-red-10-rgb'],
                hslaCode: ['hsla(4, 100%, 97%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-20">{children}</div>,
                cssName: ['--pomegranate-red-20'],
                rgbVariant: ['--pomegranate-red-20-rgb'],
                hslaCode: ['hsla(5, 100%, 91%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-30">{children}</div>,
                cssName: ['--pomegranate-red-30'],
                rgbVariant: ['--pomegranate-red-30-rgb'],
                hslaCode: ['hsla(5, 75%, 82%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-40">{children}</div>,
                cssName: ['--pomegranate-red-40'],
                rgbVariant: ['--pomegranate-red-40-rgb'],
                hslaCode: ['hsla(5, 77%, 70%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-50">{children}</div>,
                cssName: ['--pomegranate-red-50'],
                rgbVariant: ['--pomegranate-red-50-rgb'],
                hslaCode: ['hsla(5, 85%, 61%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-60">{children}</div>,
                cssName: ['--pomegranate-red-60'],
                rgbVariant: ['--pomegranate-red-60-rgb'],
                hslaCode: ['hsla(5, 75%, 52%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-70">{children}</div>,
                cssName: ['--pomegranate-red-70'],
                rgbVariant: ['--pomegranate-red-70-rgb'],
                hslaCode: ['hsla(5, 83%, 44%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-80">{children}</div>,
                cssName: ['--pomegranate-red-80'],
                rgbVariant: ['--pomegranate-red-80-rgb'],
                hslaCode: ['hsla(5, 90%, 33%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-90">{children}</div>,
                cssName: ['--pomegranate-red-90'],
                rgbVariant: ['--pomegranate-red-90-rgb'],
                hslaCode: ['hsla(5, 85%, 27%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-pomegranate-red-100">{children}</div>,
                cssName: ['--pomegranate-red-100'],
                rgbVariant: ['--pomegranate-red-100-rgb'],
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
                rgbVariant: ['--cerulean-blue-10-rgb'],
                hslaCode: ['hsla(199, 100%, 95%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-20">{children}</div>,
                cssName: ['--cerulean-blue-20'],
                rgbVariant: ['--cerulean-blue-20-rgb'],
                hslaCode: ['hsla(199, 100%, 88%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-30">{children}</div>,
                cssName: ['--cerulean-blue-30'],
                rgbVariant: ['--cerulean-blue-30-rgb'],
                hslaCode: ['hsla(199, 100%, 76%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-40">{children}</div>,
                cssName: ['--cerulean-blue-40'],
                rgbVariant: ['--cerulean-blue-40-rgb'],
                hslaCode: ['hsla(199, 100%, 64%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-50">{children}</div>,
                cssName: ['--cerulean-blue-50'],
                rgbVariant: ['--cerulean-blue-50-rgb'],
                hslaCode: ['hsla(199, 100%, 50%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-60">{children}</div>,
                cssName: ['--cerulean-blue-60'],
                rgbVariant: ['--cerulean-blue-60-rgb'],
                hslaCode: ['hsla(199, 98%, 46%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-70">{children}</div>,
                cssName: ['--cerulean-blue-70'],
                rgbVariant: ['--cerulean-blue-70-rgb'],
                hslaCode: ['hsla(199, 97%, 39%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-80">{children}</div>,
                cssName: ['--cerulean-blue-80'],
                rgbVariant: ['--cerulean-blue-80-rgb'],
                hslaCode: ['hsla(199, 98%, 33%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-90">{children}</div>,
                cssName: ['--cerulean-blue-90'],
                rgbVariant: ['--cerulean-blue-90-rgb'],
                hslaCode: ['hsla(199, 100%, 22%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-cerulean-blue-100">{children}</div>,
                cssName: ['--cerulean-blue-100'],
                rgbVariant: ['--cerulean-blue-100-rgb'],
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
                rgbVariant: ['--turbo-yellow-10-rgb'],
                hslaCode: ['hsla(55, 100%, 93%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-20">{children}</div>,
                cssName: ['--turbo-yellow-20'],
                rgbVariant: ['--turbo-yellow-20-rgb'],
                hslaCode: ['hsla(53, 100%, 86%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-30">{children}</div>,
                cssName: ['--turbo-yellow-30'],
                rgbVariant: ['--turbo-yellow-30-rgb'],
                hslaCode: ['hsla(53, 100%, 72%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-40">{children}</div>,
                cssName: ['--turbo-yellow-40'],
                rgbVariant: ['--turbo-yellow-40-rgb'],
                hslaCode: ['hsla(53, 100%, 50%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-50">{children}</div>,
                cssName: ['--turbo-yellow-50'],
                rgbVariant: ['--turbo-yellow-50-rgb'],
                hslaCode: ['hsla(49, 91%, 56%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-60">{children}</div>,
                cssName: ['--turbo-yellow-60'],
                rgbVariant: ['--turbo-yellow-60-rgb'],
                hslaCode: ['hsla(49, 91%, 48%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-70">{children}</div>,
                cssName: ['--turbo-yellow-70'],
                rgbVariant: ['--turbo-yellow-70-rgb'],
                hslaCode: ['hsla(47, 97%, 45%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-80">{children}</div>,
                cssName: ['--turbo-yellow-80'],
                rgbVariant: ['--turbo-yellow-80-rgb'],
                hslaCode: ['hsla(47, 97%, 38%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-90">{children}</div>,
                cssName: ['--turbo-yellow-90'],
                rgbVariant: ['--turbo-yellow-90-rgb'],
                hslaCode: ['hsla(47, 98%, 26%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-turbo-yellow-100">{children}</div>,
                cssName: ['--turbo-yellow-100'],
                rgbVariant: ['--turbo-yellow-100-rgb'],
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
                rgbVariant: ['--bright-turquoise-10-rgb'],
                hslaCode: ['hsla(172, 100%, 96%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-20">{children}</div>,
                cssName: ['--bright-turquoise-20'],
                rgbVariant: ['--bright-turquoise-20-rgb'],
                hslaCode: ['hsla(171, 97%, 88%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-30">{children}</div>,
                cssName: ['--bright-turquoise-30'],
                rgbVariant: ['--bright-turquoise-30-rgb'],
                hslaCode: ['hsla(172, 94%, 65%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-40">{children}</div>,
                cssName: ['--bright-turquoise-40'],
                rgbVariant: ['--bright-turquoise-40-rgb'],
                hslaCode: ['hsla(172, 84%, 52%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-50">{children}</div>,
                cssName: ['--bright-turquoise-50'],
                rgbVariant: ['--bright-turquoise-50-rgb'],
                hslaCode: ['hsla(172, 82%, 47%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-60">{children}</div>,
                cssName: ['--bright-turquoise-60'],
                rgbVariant: ['--bright-turquoise-60-rgb'],
                hslaCode: ['hsla(172, 83%, 43%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-70">{children}</div>,
                cssName: ['--bright-turquoise-70'],
                rgbVariant: ['--bright-turquoise-70-rgb'],
                hslaCode: ['hsla(172, 88%, 35%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-80">{children}</div>,
                cssName: ['--bright-turquoise-80'],
                rgbVariant: ['--bright-turquoise-80-rgb'],
                hslaCode: ['hsla(172, 88%, 35%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-bright-turquoise-90">{children}</div>,
                cssName: ['--bright-turquoise-90'],
                rgbVariant: ['--bright-turquoise-90-rgb'],
                hslaCode: ['hsla(172, 90%, 20%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-bright-turquoise-100">{children}</div>
                ),
                cssName: ['--bright-turquoise-100'],
                rgbVariant: ['--bright-turquoise-100-rgb'],
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
                rgbVariant: ['--grape-purple-10-rgb'],
                hslaCode: ['hsla(293, 25%, 94%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-20">{children}</div>,
                cssName: ['--grape-purple-20'],
                rgbVariant: ['--grape-purple-20-rgb'],
                hslaCode: ['hsla(279, 48%, 83%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-30">{children}</div>,
                cssName: ['--grape-purple-30'],
                rgbVariant: ['--grape-purple-30-rgb'],
                hslaCode: ['hsla(278, 57%, 68%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-40">{children}</div>,
                cssName: ['--grape-purple-40'],
                rgbVariant: ['--grape-purple-40-rgb'],
                hslaCode: ['hsla(279, 47%, 54%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-50">{children}</div>,
                cssName: ['--grape-purple-50'],
                rgbVariant: ['--grape-purple-50-rgb'],
                hslaCode: ['hsla(279, 54%, 40%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-60">{children}</div>,
                cssName: ['--grape-purple-60'],
                rgbVariant: ['--grape-purple-60-rgb'],
                hslaCode: ['hsla(278, 56%, 31%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-70">{children}</div>,
                cssName: ['--grape-purple-70'],
                rgbVariant: ['--grape-purple-70-rgb'],
                hslaCode: ['hsla(278, 53%, 24%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-80">{children}</div>,
                cssName: ['--grape-purple-80'],
                rgbVariant: ['--grape-purple-80-rgb'],
                hslaCode: ['hsla(278, 75%, 19%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-90">{children}</div>,
                cssName: ['--grape-purple-90'],
                rgbVariant: ['--grape-purple-90-rgb'],
                hslaCode: ['hsla(279, 80%, 14%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-grape-purple-100">{children}</div>,
                cssName: ['--grape-purple-100'],
                rgbVariant: ['--grape-purple-100-rgb'],
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
                rgbVariant: ['--rain-forest-green-10-rgb'],
                hslaCode: ['hsla(168, 50%, 91%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-20">{children}</div>
                ),
                cssName: ['--rain-forest-green-20'],
                rgbVariant: ['--rain-forest-green-20-rgb'],
                hslaCode: ['hsla(170, 47%, 79%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-30">{children}</div>
                ),
                cssName: ['--rain-forest-green-30'],
                rgbVariant: ['--rain-forest-green-30-rgb'],
                hslaCode: ['hsla(170, 49%, 65%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-40">{children}</div>
                ),
                cssName: ['--rain-forest-green-40'],
                rgbVariant: ['--rain-forest-green-40-rgb'],
                hslaCode: ['hsla(168, 54%, 44%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-50">{children}</div>
                ),
                cssName: ['--rain-forest-green-50'],
                rgbVariant: ['--rain-forest-green-50-rgb'],
                hslaCode: ['hsla(168, 68%, 32%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-60">{children}</div>
                ),
                cssName: ['--rain-forest-green-60'],
                rgbVariant: ['--rain-forest-green-60-rgb'],
                hslaCode: ['hsla(168, 100%, 19%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-70">{children}</div>
                ),
                cssName: ['--rain-forest-green-70'],
                rgbVariant: ['--rain-forest-green-70-rgb'],
                hslaCode: ['hsla(168, 91%, 17%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-80">{children}</div>
                ),
                cssName: ['--rain-forest-green-80'],
                rgbVariant: ['--rain-forest-green-80-rgb'],
                hslaCode: ['hsla(168, 88%, 13%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-90">{children}</div>
                ),
                cssName: ['--rain-forest-green-90'],
                rgbVariant: ['--rain-forest-green-90-rgb'],
                hslaCode: ['hsla(169, 92%, 10%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-rain-forest-green-100">{children}</div>
                ),
                cssName: ['--rain-forest-green-100'],
                rgbVariant: ['--rain-forest-green-100-rgb'],
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
                rgbVariant: ['--governor-bay-blue-10-rgb'],
                hslaCode: ['hsla(235, 100%, 97%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-20">{children}</div>
                ),
                cssName: ['--governor-bay-blue-20'],
                rgbVariant: ['--governor-bay-blue-20-rgb'],
                hslaCode: ['hsla(231, 63%, 88%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-30">{children}</div>
                ),
                cssName: ['--governor-bay-blue-30'],
                rgbVariant: ['--governor-bay-blue-30-rgb'],
                hslaCode: ['hsla(230, 77%, 78%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-40">{children}</div>
                ),
                cssName: ['--governor-bay-blue-40'],
                rgbVariant: ['--governor-bay-blue-40-rgb'],
                hslaCode: ['hsla(230, 65%, 64%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-50">{children}</div>
                ),
                cssName: ['--governor-bay-blue-50'],
                rgbVariant: ['--governor-bay-blue-50-rgb'],
                hslaCode: ['hsla(230, 62%, 56%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-60">{children}</div>
                ),
                cssName: ['--governor-bay-blue-60'],
                rgbVariant: ['--governor-bay-blue-60-rgb'],
                hslaCode: ['hsla(230, 60%, 45%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-70">{children}</div>
                ),
                cssName: ['--governor-bay-blue-70'],
                rgbVariant: ['--governor-bay-blue-70-rgb'],
                hslaCode: ['hsla(230, 63%, 38%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-80">{children}</div>
                ),
                cssName: ['--governor-bay-blue-80'],
                rgbVariant: ['--governor-bay-blue-80-rgb'],
                hslaCode: ['hsla(230, 69%, 32%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-90">{children}</div>
                ),
                cssName: ['--governor-bay-blue-90'],
                rgbVariant: ['--governor-bay-blue-90-rgb'],
                hslaCode: ['hsla(230, 74%, 24%, 1)'],
            },
            {
                renderer: ({children}) => (
                    <div className="colorDemo color_demo_bg-governor-bay-blue-100">{children}</div>
                ),
                cssName: ['--governor-bay-blue-100'],
                rgbVariant: ['--governor-bay-blue-100-rgb'],
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
                rgbVariant: ['--sienna-orange-10-rgb'],
                hslaCode: ['hsla(15, 100%, 96%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-20">{children}</div>,
                cssName: ['--sienna-orange-20'],
                rgbVariant: ['--sienna-orange-20-rgb'],
                hslaCode: ['hsla(15, 100%, 87%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-30">{children}</div>,
                cssName: ['--sienna-orange-30'],
                rgbVariant: ['--sienna-orange-30-rgb'],
                hslaCode: ['hsla(15, 98%, 77%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-40">{children}</div>,
                cssName: ['--sienna-orange-40'],
                rgbVariant: ['--sienna-orange-40-rgb'],
                hslaCode: ['hsla(15, 99%, 71%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-50">{children}</div>,
                cssName: ['--sienna-orange-50'],
                rgbVariant: ['--sienna-orange-50-rgb'],
                hslaCode: ['hsla(15, 82%, 60%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-60">{children}</div>,
                cssName: ['--sienna-orange-60'],
                rgbVariant: ['--sienna-orange-60-rgb'],
                hslaCode: ['hsla(15, 73%, 55%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-70">{children}</div>,
                cssName: ['--sienna-orange-70'],
                rgbVariant: ['--sienna-orange-70-rgb'],
                hslaCode: ['hsla(15, 67%, 45%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-80">{children}</div>,
                cssName: ['--sienna-orange-80'],
                rgbVariant: ['--sienna-orange-80-rgb'],
                hslaCode: ['hsla(15, 73%, 34%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-90">{children}</div>,
                cssName: ['--sienna-orange-90'],
                rgbVariant: ['--sienna-orange-90-rgb'],
                hslaCode: ['hsla(15, 79%, 23%, 1)'],
            },
            {
                renderer: ({children}) => <div className="colorDemo color_demo_bg-sienna-orange-100">{children}</div>,
                cssName: ['--sienna-orange-100'],
                rgbVariant: ['--sienna-orange-100-rgb'],
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
                                <th>CSS name</th>
                                <th>RGB variant name</th>
                                <th>Hsla value</th>
                                <th style={{width: '200px'}}>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {variants.map(({cssName, rgbVariant, hslaCode, renderer: Preview}) => (
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
                                        {rgbVariant.map((selector, i) => (
                                            <span
                                                className={classNames('code', {
                                                    mr1: i + 1 !== rgbVariant.length,
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
