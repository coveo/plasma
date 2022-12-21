import _ from 'underscore';

global._ = _;

document.createRange = () => {
    const range = new Range();

    range.getBoundingClientRect = jest.fn();

    range.getClientRects = () => ({
        item: () => null,
        length: 0,
        [Symbol.iterator]: jest.fn(),
    });

    return range;
};

global.URL.createObjectURL = jest.fn();

if (!global.structuredClone) {
    global.structuredClone = (o: any) => JSON.parse(JSON.stringify(o));
}
