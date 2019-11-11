import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {BlankSlateWithError} from '../BlankSlatesHOC';
import {IBlankSlateWithTableProps} from '../BlankSlateWithTable';

describe('BlankSlateWithTable Tests', () => {
    describe('<BlankSlateWithTable>', () => {
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
