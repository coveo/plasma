import {shallow} from 'enzyme';
import * as React from 'react';

import {Slider} from '../Slider';

describe('Slider', () => {
    it('should render without error', () => {
        expect(() => shallow(<Slider />)).not.toThrow();
        expect(() => shallow(<Slider hasTooltip />)).not.toThrow();
    });
});
