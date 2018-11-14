import {shallow} from 'enzyme';
import * as React from 'react';
import {TableRowNumberColumn} from '../TableRowNumberColumn';

describe('TableRowNumberColumn', () => {
    it('should render without error', () => {
        expect(() => shallow(<TableRowNumberColumn number={1} />)).not.toThrow();
        expect(() => shallow(<TableRowNumberColumn number={'10000'} />)).not.toThrow();
    });
});
