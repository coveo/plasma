import {shallow} from 'enzyme';

import {ContentLoadingPlaceholder} from '../ContentLoadingPlaceholder';

describe('ContentLoadingPlaceholder tests', () => {
    describe('<ContentLoadingPlaceholder />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(
                    <ContentLoadingPlaceholder>
                        <div>Test</div>
                    </ContentLoadingPlaceholder>,
                    {},
                );
                wrapper.unmount();
            }).not.toThrow();
        });
    });
});
