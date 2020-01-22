import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {ContentLoadingPlaceholder} from '../ContentLoadingPlaceholder';

describe('ContentLoadingPlaceholder tests', () => {
    describe('<ContentLoadingPlaceholder />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallowWithState(
                    <ContentLoadingPlaceholder>
                        <div>Test</div>
                    </ContentLoadingPlaceholder>,
                    {}
                );
                wrapper.unmount();
            });
        });
    });
});
