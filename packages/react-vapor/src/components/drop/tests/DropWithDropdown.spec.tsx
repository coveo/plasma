import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {Drop} from '../Drop';
import {dropWithDropdown} from '../hoc/DropWithDropdown';

describe('DropWithDropdown', () => {
    describe('<DropWithDropdown />', () => {
        const DropWithDropdown = _.compose(dropWithDropdown())(Drop);

        const defaultButton: React.ReactNode = <div className={'onclick'}></div>;

        it('should mount without errors', () => {
            expect(() => {
                shallowWithState(<DropWithDropdown id={'test'} renderOpenButton={() => defaultButton} />, {}).dive();
            }).not.toThrow();
        });

        it('should unmount without errors', () => {
            const wrapper = shallowWithState(
                <DropWithDropdown id={'test'} renderOpenButton={() => defaultButton} />,
                {}
            ).dive();
            expect(() => {
                wrapper.unmount();
            }).not.toThrow();
        });
    });
});
