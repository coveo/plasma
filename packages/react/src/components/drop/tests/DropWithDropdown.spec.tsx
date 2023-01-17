import {shallowWithState} from '@test-utils';
import {ReactNode} from 'react';
import * as _ from 'underscore';
import {Drop} from '../Drop.js';
import {dropWithDropdown} from '../hoc/DropWithDropdown.js';

describe('DropWithDropdown', () => {
    describe('<DropWithDropdown />', () => {
        const DropWithDropdown = _.compose(dropWithDropdown())(Drop);

        const defaultButton: ReactNode = <div className={'onclick'}></div>;

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
