import {shallow} from 'enzyme';

describe('ChildForm', () => {
    it('should render without errors', () => {
        expect(() => {
            const component = shallow(<ChildForm />);
            component.unmount();
        }).not.toThrow();
    });
});
