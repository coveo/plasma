import 'diff2html/dist/diff2html.min.css';

import * as React from 'react';

import {DiffViewer} from '../DiffViewer';

const fakeJSON1 = {
    _id: '5aa97c3a188912df4047d157',
    index: 0,
    guid: 'a77733c5-01ea-4d3d-9f22-9ec4d06c2da6',
    isActive: false,
    balance: '$3,307.29',
    picture: 'http://placehold.it/32x32',
    age: 33,
    eyeColor: 'green',
    name: {
        first: 'Natasha',
        last: 'Jenkins',
    },
    company: 'ZANYMAX',
    email: 'natasha.jenkins@zanymax.net',
    phone: '+1 (917) 404-3066',
    address: '555 Linden Boulevard, Stonybrook, Wisconsin, 2342',
    about: 'Nulla sunt excepteur veniam elit laboris pariatur. Occaecat aliquip magna aliqua sunt tempor sunt id.',
    registered: 'Sunday, January 31, 2016 2:37 AM',
    latitude: '-11.761137',
    longitude: '-23.176443',
    tags: [
        'voluptate',
        'et',
        'sunt',
        'sunt',
        'cupidatat',
    ],
    range: [
        0,
        1,
        2,
    ],
    friends: [
        {
            id: 0,
            name: 'Mccray Kerr',
        },
        {
            id: 1,
            name: 'Cristina Osborn',
        },
    ],
    greeting: 'Hello, Natasha! You have 8 unread messages.',
    favoriteFruit: 'apple',
};

const fakeJSON2: {[key: string]: any} = {
    ...fakeJSON1,
    range: [
        5,
        6,
    ],
    friends: [
        ...fakeJSON1.friends,
        {
            id: 4,
            name: 'Someone New',
        },
    ],
    otherThing: 'This is a new property',
};

const JSONToString = (json: {[key: string]: any}) => JSON.stringify(json, null, 2);

export class DiffViewerExamples extends React.Component {

    render() {
        delete fakeJSON2.isActive;
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Diff Viewer</label>
                    <DiffViewer first={JSONToString(fakeJSON1)} second={JSONToString(fakeJSON2)} />
                </div>
            </div>
        );
    }
}
