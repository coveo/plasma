import {shallowWithState} from '@test-utils';

import {IBlankSlateProps} from '../BlankSlate.js';
import {BlankSlateWithError} from '../BlankSlatesHOC.js';

describe('BlankSlateWithError Tests', () => {
    describe('<BlankSlateWithError>', () => {
        const defaultProps: IBlankSlateProps = {
            title: 'test',
        };

        it('should not throw on mount and unmount', () => {
            expect(() => {
                const component = shallowWithState(<BlankSlateWithError {...defaultProps} />, {});
                component.unmount();
            }).not.toThrow();
        });
    });
});
