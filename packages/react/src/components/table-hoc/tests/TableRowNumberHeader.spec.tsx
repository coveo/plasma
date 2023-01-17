import {shallow} from 'enzyme';
import {TableRowNumberHeader} from '../TableRowNumberHeader.js';

describe('TableRowNumberHeader', () => {
    it('should render without error', () => {
        expect(() => shallow(<TableRowNumberHeader />)).not.toThrow();
    });
});
