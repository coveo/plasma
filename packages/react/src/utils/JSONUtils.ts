export const fakeJSON = {
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
    tags: ['voluptate', 'et', 'sunt', 'sunt', 'cupidatat'],
    range: [0, 1, 2],
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

const fakeJSONCopy: {[key: string]: any} = {
    ...fakeJSON,
    range: [5, 6],
    friends: [
        ...fakeJSON.friends,
        {
            id: 4,
            name: 'Someone New',
        },
    ],
    otherThing: 'This is a new property',
};
delete fakeJSONCopy.isActive;

export const fakeJSON1 = fakeJSONCopy;

export const JSONToString = (json: {[key: string]: any}) => JSON.stringify(json, undefined, 2);
