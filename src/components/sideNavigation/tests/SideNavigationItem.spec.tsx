import {shallow} from 'enzyme';
import * as React from 'react';
import {SideNavigationItem} from '../SideNavigationItem';

describe('<SideNavigationItem />', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(
                <SideNavigationItem title='link to Coveo' href='http://coveo.com' />,
            );
        }).not.toThrow();
    });
});
