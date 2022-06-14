import {shallow} from 'enzyme';

describe('ItemBoxLoading', () => {
    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const component = shallow(<ItemBoxLoading />);
            component.unmount();
        }).not.toThrow();
    });
});
