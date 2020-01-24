import {shallowWithState} from 'enzyme-redux';
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
            const component = shallowWithState(<ActionsDropdown actions={[]} />, {});
            component.unmount();
        }).not.toThrow();
    });

    it('should render a dropdown', () => {
        const dropdown = shallowWithState(<ActionsDropdown actions={[linkAction, triggerAction]} />, {});
        expect(dropdown.type()).toBe(DropdownConnected);
        expect(dropdown.prop('dropdownItems').length).toBe(2);
    });
});
