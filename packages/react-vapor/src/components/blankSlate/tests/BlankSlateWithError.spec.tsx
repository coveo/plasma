import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {BlankSlateWithError} from '../BlankSlatesHOC';
import {IBlankSlateWithTableProps} from '../BlankSlateWithTable';

describe('BlankSlateWithError Tests', () => {
    describe('<BlankSlateWithError>', () => {
        const defaultProps: IBlankSlateWithTableProps = {
            title: 'test',
        };

        it('should not throw on mount and unmount', () => {
            expect(() => {
                const component = shallowWithState(<BlankSlateWithError {...defaultProps} />, {});
                component.unmount();
            });
        });
    });
});
