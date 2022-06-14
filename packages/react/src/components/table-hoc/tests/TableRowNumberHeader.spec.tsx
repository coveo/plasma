import {shallow} from 'enzyme';

describe('TableRowNumberHeader', () => {
    it('should render without error', () => {
        expect(() => shallow(<TableRowNumberHeader />)).not.toThrow();
    });
});
