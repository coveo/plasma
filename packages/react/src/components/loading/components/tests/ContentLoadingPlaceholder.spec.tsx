import {shallow} from 'enzyme';

describe('ContentLoadingPlaceholder tests', () => {
    describe('<ContentLoadingPlaceholder />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(
                    <ContentLoadingPlaceholder>
                        <div>Test</div>
                    </ContentLoadingPlaceholder>,
                    {}
                );
                wrapper.unmount();
            }).not.toThrow();
        });
    });
});
