import {shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
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
