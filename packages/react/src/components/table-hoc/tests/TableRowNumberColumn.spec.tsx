import {shallow} from 'enzyme';

describe('TableRowNumberColumn', () => {
    it('should render without error', () => {
        expect(() => shallow(<TableRowNumberColumn number={1} />)).not.toThrow();
        expect(() => shallow(<TableRowNumberColumn number={'10000'} />)).not.toThrow();
    });
});
