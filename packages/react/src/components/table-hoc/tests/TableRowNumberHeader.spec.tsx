import {shallow} from 'enzyme';
import {TableRowNumberHeader} from '../TableRowNumberHeader';

describe('TableRowNumberHeader', () => {
    it('should render without error', () => {
        expect(() => shallow(<TableRowNumberHeader />)).not.toThrow();
    });
});
