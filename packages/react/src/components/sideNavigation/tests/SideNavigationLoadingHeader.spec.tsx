import {shallow} from 'enzyme';
import {SideNavigationLoadingHeader} from '../SideNavigationLoadingHeader.js';

describe('<SideNavigationLoadingHeader />', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(<SideNavigationLoadingHeader />);
        }).not.toThrow();
    });
});
