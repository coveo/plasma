import {shallow} from 'enzyme';
import * as React from 'react';

import {TabContent} from '../TabContent';

describe('TabContent', () => {
    describe('<TabContent />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(<TabContent />);
            }).not.toThrow();
        });
    });
});
