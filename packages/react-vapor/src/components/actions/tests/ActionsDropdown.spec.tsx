import {shallow} from 'enzyme';
import * as React from 'react';

import {DropdownConnected} from '../../dropdown';
import {IActionOptions} from '../Action';
import {ActionsDropdown} from '../ActionsDropdown';

describe('Actions', () => {
    const linkAction: IActionOptions = {
        name: 'action',
        link: 'http://coveo.com',
        target: '_blank',
        enabled: true,
    };
    const triggerAction: IActionOptions = {
        name: 'action2',
        trigger: jasmine.createSpy('methodTrigger'),
        enabled: true,
    };

    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const component = shallow(<ActionsDropdown actions={[]} />);
            component.unmount();
        }).not.toThrow();
    });

    it('should render a dropdown', () => {
        const dropdown = shallow(<ActionsDropdown actions={[linkAction, triggerAction]} />);
        expect(dropdown.type()).toBe(DropdownConnected);
        expect(dropdown.prop('dropdownItems').length).toBe(2);
    });

    it('should set disabled on DropdownConnected by default', () => {
        const wrapper = shallow(<ActionsDropdown actions={[linkAction, triggerAction]} />, {});
        expect(wrapper.find(DropdownConnected).props().disabled).toBe(false);
    });

    it('should not be disabled on DropdownConnected', () => {
        const wrapper = shallow(<ActionsDropdown actions={[linkAction, triggerAction]} disabled />, {});
        expect(wrapper.find(DropdownConnected).props().disabled).toBe(true);
    });
});
