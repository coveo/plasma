import {shallow} from 'enzyme';

describe('<SideNavigationLoadingHeader />', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(<SideNavigationLoadingHeader />);
        }).not.toThrow();
    });
});
