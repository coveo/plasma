import {shallowWithState} from '@helpers/enzyme-redux';

import {IBlankSlateProps} from '../BlankSlate';
import {BlankSlateWithError} from '../BlankSlatesHOC';

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
