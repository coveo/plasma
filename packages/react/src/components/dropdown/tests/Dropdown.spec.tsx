import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';

import {Dropdown, IDropdownProps} from '../Dropdown';

describe('Dropdown', () => {
    const basicDropdownProps: IDropdownProps = {
        toggleContent: [<span key="toggle">Toggle</span>],
        dropdownItems: [<li key="option1">Option 1</li>, <li key="option2">Option 2</li>],
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<Dropdown {...basicDropdownProps} />);
        }).not.toThrow();
    });

    describe('<Dropdown />', () => {
        let dropdown: ReactWrapper<IDropdownProps, any>;
        let dropdownInstance: Dropdown;

        beforeEach(() => {
            dropdown = mount(<Dropdown {...basicDropdownProps} />, {attachTo: document.getElementById('App')});
            dropdownInstance = dropdown.instance() as Dropdown;
        });

        afterEach(() => {
            dropdown?.unmount();
        });

        it('should get the toggleContent as a prop', () => {
            const toggleContentProp = dropdown.props().toggleContent;

            expect(toggleContentProp).toBeDefined();
            expect(toggleContentProp.length).toBe(basicDropdownProps.toggleContent.length);
        });

        it('should get the dropdown items as a prop', () => {
            const dropdownItemsProp = dropdown.props().dropdownItems;

            expect(dropdownItemsProp).toBeDefined();
            expect(dropdownItemsProp.length).toBe(basicDropdownProps.dropdownItems.length);
        });

        it('should have "open" class if opened', () => {
            const newDropdownProps = _.extend({}, basicDropdownProps, {isOpened: true});

            expect(dropdown.find('.open').length).toBe(0);

            dropdown.setProps(newDropdownProps);

            expect(dropdown.find('.open').length).toBe(1);
        });

        it('should have the classes passed as props if any', () => {
            const newDropdownProps = _.extend({}, basicDropdownProps, {className: 'some-class'});

            expect(dropdown.find('.some-class').length).toBe(0);

            dropdown.setProps(newDropdownProps).update();

            expect(dropdown.find('.some-class').length).toBeGreaterThanOrEqual(1);
        });

        it('should call onClick prop if set when clicking the toggle', () => {
            const onClickSpy = jest.fn();
            const newDropdownProps = _.extend({}, basicDropdownProps, {onClick: onClickSpy});

            expect(() => dropdownInstance['handleClick'].call(dropdownInstance)).not.toThrow();

            dropdown.setProps(newDropdownProps);
            dropdown.find('.dropdown-toggle').simulate('click');

            expect(onClickSpy).toHaveBeenCalled();
        });
    });

    describe('<Dropdown /> listeners', () => {
        beforeEach(() => {
            const otherElement: HTMLDivElement = document.createElement('div');
            otherElement.setAttribute('id', 'other');
            document.body.appendChild(otherElement);
        });

        afterEach(() => document.getElementById('other').remove());

        const clickOnOther = () => {
            const evt = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: 20,
            });
            document.getElementById('other').dispatchEvent(evt);
        };

        it('should not add a listener on document on mount if onDocumentClick is set but the dropdown is not opened', () => {
            const onDocumentClickSpy = jest.fn();
            const props = _.extend({}, basicDropdownProps, {onDocumentClick: onDocumentClickSpy});

            mount(<Dropdown {...props} />, {attachTo: document.getElementById('App')});
            clickOnOther();

            expect(onDocumentClickSpy).not.toHaveBeenCalled();
        });

        it('should add a listener on document on mount and remove it on unmount if prop onDocumentClick is set', () => {
            const onDocumentClickSpy = jest.fn();
            const props = _.extend({}, basicDropdownProps, {isOpened: true, onDocumentClick: onDocumentClickSpy});

            const dropdown = mount(<Dropdown {...props} />, {attachTo: document.getElementById('App')});

            expect(dropdown.props().isOpened).toBe(true);

            clickOnOther();

            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);

            dropdown.unmount();
            clickOnOther();

            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call onDocumentClick when prop is set and clicking on the dropdown', () => {
            const onDocumentClickSpy = jest.fn();
            const props = _.extend({}, basicDropdownProps, {isOpened: true, onDocumentClick: onDocumentClickSpy});

            const wrapper = mount(<Dropdown {...props} />, {attachTo: document.getElementById('App')});

            wrapper.find('.dropdown').simulate('click');
            expect(onDocumentClickSpy).not.toHaveBeenCalled();

            const doc = document.getElementById('other');
            doc.click();

            expect(onDocumentClickSpy).toHaveBeenCalled();
        });
    });

    describe('once mounted', () => {
        it('should not add the class to set the cursor to default by default', () => {
            const wrapper = shallow(<Dropdown toggleContent={[<div />]} dropdownItems={[<div />]} />);

            expect(wrapper.find('.dropdown').hasClass('cursor-default')).toBe(false);
        });

        it('should add the class to set the cursor to default if the component is disabled', () => {
            const wrapper = shallow(<Dropdown toggleContent={[<div />]} dropdownItems={[<div />]} disabled />);

            expect(wrapper.find('.dropdown').hasClass('cursor-default')).toBe(true);
        });

        it('should trigger the onClick by default', () => {
            const spy = jest.fn();
            const wrapper = shallow(<Dropdown toggleContent={[<div />]} dropdownItems={[<div />]} onClick={spy} />);
            wrapper.find('.dropdown-toggle').simulate('click');

            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should not trigger the onClick if disabled', () => {
            const spy = jest.fn();
            const wrapper = shallow(
                <Dropdown toggleContent={[<div />]} dropdownItems={[<div />]} onClick={spy} disabled />,
            );
            wrapper.find('.dropdown-toggle').simulate('click');

            expect(spy).toHaveBeenCalledTimes(0);
        });

        it('should add the class disabled on dropdown-toggle if disabled', () => {
            const wrapper = shallow(<Dropdown toggleContent={[<div />]} dropdownItems={[<div />]} disabled />);

            expect(wrapper.find('.dropdown-toggle').hasClass('disabled')).toBe(true);
        });

        it('should add the class transparency-4 on dropdown-toggle if disabled', () => {
            const wrapper = shallow(<Dropdown toggleContent={[<div />]} dropdownItems={[<div />]} disabled />);

            expect(wrapper.find('.dropdown-toggle').hasClass('transparency-4')).toBe(true);
        });

        it('should add the class cursor-default on dropdown-toggle if disabled', () => {
            const wrapper = shallow(<Dropdown toggleContent={[<div />]} dropdownItems={[<div />]} disabled />);

            expect(wrapper.find('.dropdown-toggle').hasClass('cursor-default')).toBe(true);
        });
    });
});
