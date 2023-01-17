import {shallow} from 'enzyme';

import {ActionBarLoading} from '../ActionBarLoading.js';

describe('ActionBarLoading tests', () => {
    describe('<ActionBarLoading />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<ActionBarLoading />, {});
                wrapper.unmount();
            }).not.toThrow();
        });
    });
});
