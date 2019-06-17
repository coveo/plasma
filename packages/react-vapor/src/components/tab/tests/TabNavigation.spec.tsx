import {shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {TabNavigation} from '../TabNavigation';

describe('TabNavigation', () => {
    describe('<TabNavigation />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(<TabNavigation />);
            }).not.toThrow();
        });
    });
});
