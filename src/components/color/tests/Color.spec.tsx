import {shallow} from 'enzyme';
import * as React from 'react';
import {Color} from '../Color';

describe('ColorBar', () => {
    it('should render without error in different prop scenarios', () => {
        expect(() => shallow(<Color color='red' />)).not.toThrow();
        expect(() => shallow(<Color color='blue' />)).not.toThrow();
        expect(() => shallow(<Color color='tahiti-gold' />)).not.toThrow();
        expect(() => shallow(<Color color='rgba(0, 55, 124)' />)).not.toThrow();
        expect(() => shallow(<Color color='#145855' />)).not.toThrow();
    });
});
