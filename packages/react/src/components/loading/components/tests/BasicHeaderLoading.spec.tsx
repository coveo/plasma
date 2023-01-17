import {shallow} from 'enzyme';

import {BasicHeaderLoading} from '../BasicHeaderLoading.js';

describe('BasicHeaderLoading tests', () => {
    describe('<BasicHeaderLoading />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<BasicHeaderLoading />, {});
                wrapper.unmount();
            }).not.toThrow();
        });
    });
});
