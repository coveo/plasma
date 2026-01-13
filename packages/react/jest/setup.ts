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
    interface MessagePort {
        onmessage: ((event: {data: any}) => void) | null;
        postMessage: (data: any) => void;
        close: () => void;
    }

    global.MessageChannel = class MessageChannel {
        port1: MessagePort;
        port2: MessagePort;

        constructor() {
            let port1Callback: ((event: {data: any}) => void) | null = null;
            let port2Callback: ((event: {data: any}) => void) | null = null;

            this.port1 = {
                set onmessage(callback: ((event: {data: any}) => void) | null) {
                    port1Callback = callback;
                },
                get onmessage() {
                    return port1Callback;
                },
                postMessage: (data: any) => {
                    if (port2Callback) {
                        // Use setTimeout to simulate async behavior
                        setTimeout(() => port2Callback?.({data}), 0);
                    }
                },
                close: () => {
                    port1Callback = null;
                },
            };

            this.port2 = {
                set onmessage(callback: ((event: {data: any}) => void) | null) {
                    port2Callback = callback;
                },
                get onmessage() {
                    return port2Callback;
                },
                postMessage: (data: any) => {
                    if (port1Callback) {
                        // Use setTimeout to simulate async behavior
                        setTimeout(() => port1Callback?.({data}), 0);
                    }
                },
                close: () => {
                    port2Callback = null;
                },
            };
        }
    } as any;
}
