import * as _ from 'underscore';

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

// Polyfill MessageChannel for React 19 compatibility
// React 19 uses MessageChannel for scheduling, which is not available in jsdom
if (typeof MessageChannel === 'undefined') {
    global.MessageChannel = class MessageChannel {
        port1: {onmessage: ((event: {data: any}) => void) | null};
        port2: {postMessage: (data: any) => void};

        constructor() {
            this.port1 = {
                onmessage: null,
            };
            this.port2 = {
                postMessage: (data: any) => {
                    if (this.port1.onmessage) {
                        // Use setTimeout to simulate async behavior
                        setTimeout(() => {
                            this.port1.onmessage?.({data});
                        }, 0);
                    }
                },
            };
        }
    } as any;
}
