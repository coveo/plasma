import Environment from 'jest-environment-jsdom';
import {TextEncoder, TextDecoder} from 'util';

/**
 * Custom environment to set the TextEncoder that is missing in jsdom default env.
 * Needed for React 18
 */
module.exports = class CustomTestEnvironment extends Environment {
    async setup() {
        await super.setup();
        if (typeof this.global.TextEncoder === 'undefined') {
            this.global.TextEncoder = TextEncoder;
        }
        if (typeof this.global.TextDecoder === 'undefined') {
            this.global.TextDecoder = TextDecoder;
        }
    }
};
