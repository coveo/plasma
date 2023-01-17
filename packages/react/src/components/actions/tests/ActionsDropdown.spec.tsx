import {shallow} from 'enzyme';

import {DropdownConnected} from '../../dropdown.js';
import {IActionOptions} from '../Action.js';
import {ActionsDropdown} from '../ActionsDropdown.js';

describe('Actions', () => {
    const linkAction: IActionOptions = {
        name: 'action',
        link: 'http://coveo.com',
        target: '_blank',
        enabled: true,
    };
    let triggerAction: IActionOptions;

    beforeAll(() => {
        triggerAction = {
            name: 'action2',
            trigger: jest.fn(),
            enabled: true,
        };
    });

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
