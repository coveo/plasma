import {shallow} from 'enzyme';
import {ChildForm} from '../ChildForm';

describe('ChildForm', () => {
    it('should render without errors', () => {
        expect(() => {
            const component = shallow(<ChildForm />);
            component.unmount();
        }).not.toThrow();
    });
});
